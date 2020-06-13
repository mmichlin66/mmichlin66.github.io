(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimcss"));
	else if(typeof define === 'function' && define.amd)
		define(["mimcss"], factory);
	else if(typeof exports === 'object')
		exports["mimbl"] = factory(require("mimcss"));
	else
		root["mimbl"] = factory(root["mimcss"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimcss__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/mimblTypes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api/LocalStyles.js":
/*!********************************!*\
  !*** ./lib/api/LocalStyles.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const mimcss_1 = __webpack_require__(/*! mimcss */ "mimcss");
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
        for (let propName in props) {
            let propVal = mimcss_1.getStylePropValue(propName, props[propName]);
            this.cssomRule.style[this.replace(propName)] = this.replace(propVal);
        }
    }
    // Sets value for a style property. Property name can use the (*) marker, which will be
    // substituted with the unique ID.
    removeProperty(propName) {
        this.cssomRule.style.removeProperty(this.replace(propName));
    }
}


/***/ }),

/***/ "./lib/api/mim.js":
/*!************************!*\
  !*** ./lib/api/mim.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventSlot_1 = __webpack_require__(/*! ../utils/EventSlot */ "./lib/utils/EventSlot.js");
/**
 * Reference class to use whenever a reference to an object is needed - for example, with JSX `ref`
 * attributes and services.
 */
class Ref {
    constructor(listener, initialReferene) {
        /** Event that is fired when the referenced value changes */
        this.changedEvent = new EventSlot_1.EventSlot();
        if (listener !== undefined)
            this.changedEvent.attach(listener);
        this._r = initialReferene;
    }
    /** Adds a callback that will be invoked when the value of the reference changes. */
    addListener(listener) {
        this.changedEvent.attach(listener);
    }
    /** Removes a callback that was added with addListener. */
    removeListener(listener) {
        this.changedEvent.detach(listener);
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
const ContentFuncs_1 = __webpack_require__(/*! ../core/ContentFuncs */ "./lib/core/ContentFuncs.js");
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
const ElmAttr_1 = __webpack_require__(/*! ../utils/ElmAttr */ "./lib/utils/ElmAttr.js");
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
const utils = __webpack_require__(/*! ../utils/Utils */ "./lib/utils/Utils.js");
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
const Scheduler_1 = __webpack_require__(/*! ../core/Scheduler */ "./lib/core/Scheduler.js");
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Base component class.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const FuncProxyVN_1 = __webpack_require__(/*! ../core/FuncProxyVN */ "./lib/core/FuncProxyVN.js");
/**
 * Base class for components. Components that derive from this class must implement the render
 * method.
 */
class Component {
    constructor(props) {
        if (props)
            this.props = props;
    }
    /**
     * This method is called by the component to request to be updated. If no arguments are
     * provided, the entire component is requested to be updated. If argument are provided, they
     * indicate what rendering functions should be updated.
     * @param updateRequests
     */
    updateMe(...updateRequests) {
        if (!this.vn)
            return;
        if (updateRequests.length === 0) {
            // if no arguments arer provided we request to update the entire component.
            this.vn.requestUpdate();
        }
        else {
            // loop over update request arguments
            for (let req of updateRequests) {
                if (typeof req === "function")
                    FuncProxyVN_1.FuncProxyVN.update(req, undefined, this);
                else {
                    // if a non-array parameter is passed in req.args, we wrap it in an array
                    FuncProxyVN_1.FuncProxyVN.update(req.func, req.key, req.thisArg ? req.thisArg : this, !req.args || Array.isArray(req.args) ? req.args : [req.args]);
                }
            }
        }
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
 * FuncProxy has a public static Update method that can be called to cause the rendering mechanism
 * to invoke the function wrapped by the FuncProxy.
 */
class FuncProxy extends Component {
    /**
     * Instances of the FuncProxy component are never actually created; istead, the parameters
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
    static update(func, key, thisArg, ...args) {
        FuncProxyVN_1.FuncProxyVN.update(func, key, thisArg, args);
    }
}
exports.FuncProxy = FuncProxy;
/**
 * The PromiseProxy component wraps a Promise and replaces its content when the promise is settled.
 * Before the promise is settled, the component displays an optional "in-progress" content
 * specified as children of the component. If the promise is rejected, the component will either
 * display the "error" content obtained by calling a functions specified in the properties or, if
 * such function is not specified, display nothing.
 */
class PromiseProxy extends Component {
    /**
     * Instances of the FuncProxy component are never actually created; istead, the parameters
     * passed to it via JSX are used by an internal virtual node that handles function
     * invocation.
     */
    constructor(props) { super(props); }
    /** The render method of the PromiseProxy component is never actually called */
    render() { }
}
exports.PromiseProxy = PromiseProxy;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Definitions of mount/unmount functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const root = __webpack_require__(/*! ../core/RootVN */ "./lib/core/RootVN.js");
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

/***/ "./lib/core/ClassCompVN.js":
/*!*********************************!*\
  !*** ./lib/core/ClassCompVN.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class CompBaseVN is a base class for InstanceVN and ClassVN. It provides common functionality
// in terms of update requests and lifecycle management.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ClassCompVN extends VNBase_1.VNBase {
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
//////////////
    /**
     * Retrieves update strategy object that determines different aspects of node behavior
     * during updates.
     */
    get updateStrategy() {
        return this.comp.getUpdateStrategy ? this.comp.getUpdateStrategy() : undefined;
    }
    // Generates list of sub-nodes according to the current state
    render() {
/////////////////////
        if (this.comp === undefined) {
            console.error("render() was called on unmounted component.");
            return null;
        }
//////////////////
////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
//////////////////
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

/***/ "./lib/core/ContentFuncs.js":
/*!**********************************!*\
  !*** ./lib/core/ContentFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const IndependentCompVN_1 = __webpack_require__(/*! ./IndependentCompVN */ "./lib/core/IndependentCompVN.js");
const ManagedCompVN_1 = __webpack_require__(/*! ./ManagedCompVN */ "./lib/core/ManagedCompVN.js");
const FuncVN_1 = __webpack_require__(/*! ./FuncVN */ "./lib/core/FuncVN.js");
const ElmVN_1 = __webpack_require__(/*! ./ElmVN */ "./lib/core/ElmVN.js");
const TextVN_1 = __webpack_require__(/*! ./TextVN */ "./lib/core/TextVN.js");
const FuncProxyVN_1 = __webpack_require__(/*! ./FuncProxyVN */ "./lib/core/FuncProxyVN.js");
const PromiseProxyVN_1 = __webpack_require__(/*! ./PromiseProxyVN */ "./lib/core/PromiseProxyVN.js");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./lib/core/Scheduler.js");
// Creates either a single virtual node or an array of virtual nodes from the given content.
// For all types of contents other than an array, the returned value is a single VN. If the input
// content is an array, then a VN is created for each of the array elements. Since array elements
// might also be arrays, the process is recursive.
function createNodesFromContent(content) {
    if (content == null || content === false) {
        // the comparison above covers both null and undefined
        return null;
    }
    else if (content instanceof VNBase_1.VNBase)
        return content;
    else if (typeof content === "string") {
        return content.length > 0 ? new TextVN_1.TextVN(content) : null;
    }
    else if (typeof content.render === "function") {
        // if the component (this can only be an Instance component) is already attached to VN,
        // return this existing VN; otherwise create a new one.
        return content.vn
            ? content.vn
            : new IndependentCompVN_1.IndependentCompVN(content);
    }
    else if (Array.isArray(content))
        return createNodesFromArray(content);
    else if (content instanceof Promise) {
        return new PromiseProxyVN_1.PromiseProxyVN({ promise: content });
    }
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
    return !nodes ? null : Array.isArray(nodes) ? nodes : [nodes];
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
    else if (tag === mim.PromiseProxy) {
        if (!props || !props.promise)
            return undefined;
        return new PromiseProxyVN_1.PromiseProxyVN(props, children);
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
/////////////////
    else
        throw new Error("Invalid tag in jsx processing function: " + tag);
//////////////
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

/***/ "./lib/core/ElmVN.js":
/*!***************************!*\
  !*** ./lib/core/ElmVN.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const ElmAttr_1 = __webpack_require__(/*! ../utils/ElmAttr */ "./lib/utils/ElmAttr.js");
const SvgElms_1 = __webpack_require__(/*! ../utils/SvgElms */ "./lib/utils/SvgElms.js");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./lib/utils/Utils.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Elm; }
//////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Added);
//////////////////
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
//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
////////////////////////
////////////////////////////////
//////////////////
        // terminate custom property handlers
        if (this.customAttrs)
            this.removeCustomAttrs(true);
        // clean up
        this.elm = null;
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Deleted);
//////////////////
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
            if (propVal == null || propVal === false) {
                // ignore properties with values undefined, null and false
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
/////////////////////
        if (!this.attrs)
            throw new Error("ElmVN.addAttrs called with this.attrs = null");
//////////////////
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
/////////////////////
        if (!this.events)
            throw new Error("ElmVN.addEvents called with this.events = null");
//////////////////
        for (let name in this.events)
            this.addEvent(name, this.events[name]);
    }
    // Using the given property name and its value set the appropriate attribute(s) on the
    // element. This method handles special cases of properties with non-trivial values.
    addEvent(name, event) {
        event.wrapper = this.createEventWrapper(event);
        this.elm.addEventListener(name, event.wrapper, event.useCapture);
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Added);
//////////////////
    }
//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////
////////////////////
/////////////////////
/////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////
/////////////////////////////////////
//////////////////////////////////////////////////////
/////
//////////////
    // Removes the given event listener from the Element.
    removeEvent(name, event) {
        this.elm.removeEventListener(name, event.wrapper, event.useCapture);
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Deleted);
//////////////////
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
/////////////////////////////
            Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Updated);
//////////////////////
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
/////////////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.addCustomAttrs called with this.customAttrs = null");
//////////////////
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
/////////////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.removeCustomAttrs called with this.customAttrs = null");
//////////////////
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

/***/ "./lib/core/FuncProxyVN.js":
/*!*********************************!*\
  !*** ./lib/core/FuncProxyVN.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./lib/core/Scheduler.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
//////////////
    ; // ugly trick to not let the TypeScript compiler to strip the #endif comment
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
////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//////////////////
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
//////////////////
        this.argsReplaced = false;
        return this.func.apply(this.thisArg, this.args);
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.linkNodeToFunc();
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.unlinkNodeFromFunc();
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
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
    static findVN(func, key, thisArg) {
        // if the key is undefined, we use the function object itself
        let linkKey = key || thisArg || Scheduler_1.s_currentClassComp || func;
        // try to find the key in the map on the function object; if not found, do nothing
        let mapKeysToNodes = func["__keys-to-nodes"];
        return mapKeysToNodes && mapKeysToNodes.get(linkKey);
    }
    static update(func, key, thisArg, args) {
        // find the node
        let vn = FuncProxyVN.findVN(func, key, thisArg);
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

/***/ "./lib/core/FuncVN.js":
/*!****************************!*\
  !*** ./lib/core/FuncVN.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
//////////
/**
 * Represents a rendering function a.k.a. stateless component.
 */
class FuncVN extends VNBase_1.VNBase {
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
    /** Determines whether this node corresponds to a fragment placeholder. */
    static isVNaFragment(vn) {
        return vn.func === mim.Fragment;
    }
    ;
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
//////////////
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
////////////////////////////
////////////////////////////////////////////////////////////////////////////
//////////////////
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
//////////////////
        return this.func(this.props);
    }
/////////////////////
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
//////////////
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

/***/ "./lib/core/IndependentCompVN.js":
/*!***************************************!*\
  !*** ./lib/core/IndependentCompVN.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const ClassCompVN_1 = __webpack_require__(/*! ./ClassCompVN */ "./lib/core/ClassCompVN.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
    }
    // Notifies the given component that it will be unmounted.
    willUnmountInstance(comp) {
        if (comp.willUnmount)
            comp.willUnmount();
        comp.vn = undefined;
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
    }
}
exports.IndependentCompVN = IndependentCompVN;


/***/ }),

/***/ "./lib/core/ManagedCompVN.js":
/*!***********************************!*\
  !*** ./lib/core/ManagedCompVN.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const ClassCompVN_1 = __webpack_require__(/*! ./ClassCompVN */ "./lib/core/ClassCompVN.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
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

/***/ "./lib/core/PromiseProxyVN.js":
/*!************************************!*\
  !*** ./lib/core/PromiseProxyVN.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
class PromiseProxyVN extends VNBase_1.VNBase {
    constructor(props, children) {
        super();
        this.type = 7 /* PromiseProxy */;
        this.promise = props.promise;
        this.errorContentFunc = props.errorContentFunc;
        this.content = children;
        this.key = props.key;
    }
    // Flag indicating whether the promise is settled (successfully or not).
    get isSettled() { return this.promise == null; }
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
//////////////
    ; // ugly trick to not let the TypeScript compiler to strip the #endif comment
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        let name = "Promise";
        if (this.key != null)
            name += "@" + this.key;
        return name;
    }
    // Generates list of sub-nodes according to the current state
    render() {
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
//////////////////
        return this.content;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.watchPromise();
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        let newPromiseProxyVN = newVN;
        // update is possible if it is the same promise object
        return this.promise === newPromiseProxyVN.promise;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        let newPromiseProxyVN = newVN;
        // remeber the new value of the key property (even if it is the same)
        this.key = newPromiseProxyVN.key;
        this.content = newPromiseProxyVN.content;
        this.errorContentFunc = newPromiseProxyVN.errorContentFunc;
        // indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return VN_1.VNUpdateDisp.NoCommitDoRender;
    }
    /**
     * Waits for the promise to settle
     */
    async watchPromise() {
        try {
            this.content = await this.promise;
            this.promise = null;
            // if the node is still mounted, request update
            if (this.isMounted)
                this.requestUpdate();
        }
        catch (err) {
            this.promise = null;
            this.content = null;
            // if the node is already unmounted, do nothing
            if (!this.isMounted)
                return;
            if (this.errorContentFunc) {
                try {
                    this.content = this.errorContentFunc(err);
                }
                catch (err1) {
                    console.warn("Unhandled rejected promise:", err1);
                }
            }
            else
                console.warn("Unhandled rejected promise:", err);
            this.requestUpdate();
        }
    }
}
exports.PromiseProxyVN = PromiseProxyVN;


/***/ }),

/***/ "./lib/core/PubSub.js":
/*!****************************!*\
  !*** ./lib/core/PubSub.js ***!
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

/***/ "./lib/core/RootUI.js":
/*!****************************!*\
  !*** ./lib/core/RootUI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
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

/***/ "./lib/core/RootVN.js":
/*!****************************!*\
  !*** ./lib/core/RootVN.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./lib/core/Scheduler.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const RootUI_1 = __webpack_require__(/*! ./RootUI */ "./lib/core/RootUI.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
    }
    ;
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Root; }
//////////////
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

/***/ "./lib/core/Scheduler.js":
/*!*******************************!*\
  !*** ./lib/core/Scheduler.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const ContentFuncs_1 = __webpack_require__(/*! ./ContentFuncs */ "./lib/core/ContentFuncs.js");
const VNDisp_1 = __webpack_require__(/*! ./VNDisp */ "./lib/core/VNDisp.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
// Class-based component whose rendering tree is currently being processed.
exports.s_currentClassComp = null;
// Callback that is called on a new UI cycle when there is a need to update UI components
function updateNodeSync(vn) {
    // increment tick number.
    s_currentTick++;
/////////////////////
    let oldStats = Stats_1.DetailedStats.stats;
    Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${s_currentTick}: `);
    Stats_1.DetailedStats.stats.start();
//////////////
    let vns = new Array(1);
    vns[0] = [vn];
    s_schedulerState = SchedulerState.Update;
    performCommitPhase(performRenderPhase(vns));
/////////////////////
    Stats_1.DetailedStats.stats.stop(true);
    Stats_1.DetailedStats.stats = oldStats;
//////////////
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
/////////////////
    if (!func) {
        console.error("Trying to schedule undefined function for update");
        return;
    }
//////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${s_currentTick}: `);
        Stats_1.DetailedStats.stats.start();
//////////////////
        // remember the internal set of nodes and re-create it so that it is ready for new
        // update requests. Arrange scheduled nodes by their nesting depths and perform updates.
        s_schedulerState = SchedulerState.Update;
        let vnsScheduledForUpdate = s_vnsScheduledForUpdate;
        s_vnsScheduledForUpdate = new Set();
        performCommitPhase(performRenderPhase(arrangeNodesByDepth(vnsScheduledForUpdate)));
/////////////////////////
        Stats_1.DetailedStats.stats.stop(true);
        Stats_1.DetailedStats.stats = null;
//////////////////
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
////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////////////
//////////////
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
////////////////////////
///////////////////////////
//////////////
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
////////////////////////////
/////////////////////////////////////////////////////////////////////////
//////////////////
        try {
            vn.willMount();
        }
        catch (err) {
            if (vn.supportsErrorHandling && vn.supportsErrorHandling()) {
////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////
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
////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////
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
////////////////////////
/////////////////////////////////////////////////////////////////
//////////////
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
////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////
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
////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////
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
////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////
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
////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////
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
////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////
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
/////////////////////////////////////////
                        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Moved);
//////////////////////////////////
                    }
/////////////////////////////////////
                    Stats_1.DetailedStats.stats.log(oldVN.statsCategory, Stats_1.StatsAction.Moved);
//////////////////////////////
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
////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////
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
/////////////////////////////
            Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Moved);
//////////////////////
        }
/////////////////////////
        Stats_1.DetailedStats.stats.log(subNodeVN.statsCategory, Stats_1.StatsAction.Moved);
//////////////////
    }
}


/***/ }),

/***/ "./lib/core/TextVN.js":
/*!****************************!*\
  !*** ./lib/core/TextVN.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
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
/////////////////////
    get statsCategory() { return Stats_1.StatsCategory.Text; }
//////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Added);
//////////////////
        return this.textNode = document.createTextNode(this.text);
    }
    // Destroys DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    unmount() {
        this.textNode = undefined;
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Deleted);
//////////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Updated);
//////////////////
    }
}
exports.TextVN = TextVN;


/***/ }),

/***/ "./lib/core/VN.js":
/*!************************!*\
  !*** ./lib/core/VN.js ***!
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
exports.VNUpdateDisp = VNUpdateDisp;
VNUpdateDisp.DoCommitDoRender = new VNUpdateDisp(true, true);
VNUpdateDisp.DoCommitNoRender = new VNUpdateDisp(true, false);
VNUpdateDisp.NoCommitDoRender = new VNUpdateDisp(false, true);
VNUpdateDisp.NoCommitNoRender = new VNUpdateDisp(false, false);
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
        path[i] = nvn.name + (nvn.creator && nvn.creator.vn ? ` (created by ${nvn.creator.vn.name})` : "");
    }
    return path;
}
exports.getVNPath = getVNPath;


/***/ }),

/***/ "./lib/core/VNBase.js":
/*!****************************!*\
  !*** ./lib/core/VNBase.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./lib/core/Scheduler.js");
const PubSub_1 = __webpack_require__(/*! ./PubSub */ "./lib/core/PubSub.js");
/// #endif
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
    /** Determines whether the node is currently mounted */
    get isMounted() { return !!this.anchorDN; }
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

/***/ "./lib/core/VNDisp.js":
/*!****************************!*\
  !*** ./lib/core/VNDisp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const ContentFuncs_1 = __webpack_require__(/*! ./ContentFuncs */ "./lib/core/ContentFuncs.js");
/**
 * The VNDispGroup class describes a group of consecutive VNDisp objects correspponding to the
 * sequence of sub-nodes. The group is described using indices of VNDisp objects in the
 * subNodeDisp field of the parent VNDisp object.
 */
class VNDispGroup {
    constructor(parentDisp, action, first, last) {
        this.parentDisp = parentDisp;
        this.action = action;
        this.first = first;
        this.last = last;
    }
    /** Number of nodes in the group. */
    get count() { return this.last - this.first + 1; }
    ;
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
/////////////////////
        // this method is not supposed to be called if the number of sub-nodes is less then
        // the pre-determined threshold
        if (count <= NO_GROUP_THRESHOLD || count === 0)
            return;
//////////////////
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

/***/ "./lib/mimblTypes.js":
/*!***************************!*\
  !*** ./lib/mimblTypes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimbl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./api/mim */ "./lib/api/mim.js"));
__export(__webpack_require__(/*! ./api/LocalStyles */ "./lib/api/LocalStyles.js"));
__export(__webpack_require__(/*! ./utils/EventSlot */ "./lib/utils/EventSlot.js"));


/***/ }),

/***/ "./lib/utils/ElmAttr.js":
/*!******************************!*\
  !*** ./lib/utils/ElmAttr.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const css = __webpack_require__(/*! mimcss */ "mimcss");
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./lib/utils/Stats.js");
//////////
; // ugly trick to not let the TypeScript compiler to strip the #endif comment
/**
 * Helper function that converts the given value to string.
 *   - null and undefined are converted to an empty string.
 *   - arrays are converted by calling this function recursively on the elements and separating
 *     them with spaces.
 *   - everything else is converted by calling the toString method.
 */
function valToString(val) {
    if (val == null)
        return "";
    else if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return val.map(item => valToString(item)).filter(item => !!item).join(" ");
    else
        return val.toString();
}
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
            elm.setAttribute(propName, valToString(propVal));
        else {
            // get actual attribute name to use
            let attrName = info.attrName;
            if (attrName === undefined)
                attrName = propName;
            if (info.set !== undefined)
                info.set(elm, attrName, propVal);
            else
                elm.setAttribute(attrName, valToString(propVal));
        }
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Added);
//////////////////
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
                elm.setAttribute(propName, valToString(newPropVal));
/////////////////////////////////
                Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
//////////////////////////
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
                elm.setAttribute(attrName, valToString(updateVal));
        }
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
//////////////////
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
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Deleted);
//////////////////
    }
}
exports.ElmAttr = ElmAttr;
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
// Styleset object from the Mimcss library. If the old and new style property values are of
// different types the diff function returns the new style value. If both are of the string type,
// then the new string value is returned. If both are of the CSSStyleDeclaration type, then an
// object is returned whose keys correspond to style items that should be changed. For updated
// items, the key value is from the new style value; for removed items, the key value is undefined.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function setStyleProp(elm, attrName, propVal) {
    css.setElementStyle(elm, propVal);
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    let res = css.diffStylesets(oldPropVal, newPropVal);
    // we have to return undefined because null is considered a valid update value
    return res == null ? undefined : res;
}
function updateStyleProp(elm, attrName, updateVal) {
    css.setElementStringStyle(elm, updateVal);
}
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

/***/ "./lib/utils/EventSlot.js":
/*!********************************!*\
  !*** ./lib/utils/EventSlot.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The EventSlot class defines an event with custom parameters as members of classes without the
 * need for the classes to derive from EventTarget and use string names for events. Multiple
 * listeners can be added/removed to/from an event.
 */
class EventSlot {
    constructor() {
        /**
         * Method that raises the event and calls all the listeners (if any). It has the signature
         * of the template function so only proper-types parameters can be passed to it.
         */
        this.fire = this.realFire;
        // Set of listener functions. When there are no listeners, this field is set to null to
        // preserve space.
        this.listeners = null;
    }
    /**
     * Adds the given function as a listener to the event. Note that this cannot be a lambda
     * function because there will be no way to remove a lambda function listener later.
     */
    attach(listener) {
        if (this.listeners === null)
            this.listeners = new Set();
        this.listeners.add(listener);
    }
    /** Removes the given function as a listener to the event. */
    detach(listener) {
        if (this.listeners !== null) {
            this.listeners.delete(listener);
            if (this.listeners.size === 0)
                this.listeners = null;
        }
    }
    /** Removes all listeners to the event. */
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
class SimpleEventSlot extends EventSlot {
}
exports.SimpleEventSlot = SimpleEventSlot;
/**
 * Creates an object that will have event slots for each property of the template type T. The
 * caller will be the owner of the event slots; that is, it will be able to fire events and
 * clear all listeners when necessary. This allows the following code:
 *
 * ```typescript
 * type IMyEvents =
 * {
 *     click: () => void;
 *     change: ( newVal: number) => void;
 * }
 *
 * interface IMyClass
 * {
 *     events: MultiEventSlot<IMyEvents>;
 *     doSomething(): void;
 * }
 *
 * class MyClass implements IMyClass
 * {
 *     private _events = createMultiEventSlot<IMyEvents>();
 *     public get events(): MultiEventSlot<IMyEvents> { return this._events; }
 *
 *     public doSomething(): void { this._events.change.fire(1);}
 * }
 *
 * let obj: IMyClass = new MyClass();
 * obj.events.change.add( (n: number) => console.log(n));
 * obj.doSomething();
 * ```
 */
function createMultiEventSlot() {
    return new Proxy({}, new MultiEventSlotHandler());
}
exports.createMultiEventSlot = createMultiEventSlot;
/**
 * Implementation of the proxy handler for the MultiEventSlot object. The handler doesn't use any
 * target object - it simply creates EventSlot property in itself whenever the get method is
 * called. The TypeScript's type checking ensures that only proper event slot names can be used.
 */
class MultiEventSlotHandler {
    get(target, prop, receiver) {
        return this[prop] ? this[prop] : this[prop] = new EventSlot();
    }
}


/***/ }),

/***/ "./lib/utils/Stats.js":
/*!****************************!*\
  !*** ./lib/utils/Stats.js ***!
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

/***/ "./lib/utils/SvgElms.js":
/*!******************************!*\
  !*** ./lib/utils/SvgElms.js ***!
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
exports.SvgElms = SvgElms;
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


/***/ }),

/***/ "./lib/utils/Utils.js":
/*!****************************!*\
  !*** ./lib/utils/Utils.js ***!
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
/**
 * Converts names with dashes into names in camelCase, where every character after a dash is
 * capitalized and dashes are removed.
 */
function dashToCamel(dash) {
    if (!dash)
        return dash;
    return dash.replace(/-([a-zA-Z])/g, (x, $1) => $1.toUpperCase());
}
exports.dashToCamel = dashToCamel;
/**
 * Converts camelCase to dash-case
 * @param camel
 */
function camelToDash(camel) {
    return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
exports.camelToDash = camelToDash;
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


/***/ }),

/***/ "mimcss":
/*!******************************************************************************************!*\
  !*** external {"root":"mimcss","commonjs2":"mimcss","commonjs":"mimcss","amd":"mimcss"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimcss__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Qcm9taXNlUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZORGlzcC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5cGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRXZlbnRTbG90LnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N0YXRzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxzRUFB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LENBQUMsQ0FBQztTQUNsRjtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssRUFDZjtZQUNDLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxTQUFTO2dCQUMvQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVyQixLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLO2dCQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUNqQjtZQUNDLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTO2dCQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBRWxDO2dCQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDckM7b0JBQ0MsSUFBSSxVQUFVLEdBQVEsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNuQztnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEM7U0FDRDtLQUNEO0FBQ0YsQ0FBQztBQXBERCxzQ0FvREM7Ozs7Ozs7Ozs7OztBQzFSRCxvRCIsImZpbGUiOiJtaW1ibC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1jc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltY3NzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1ibFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbWNzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvbWltYmxUeXBlcy5qc1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7U3R5bGVzZXQsIGdldFN0eWxlUHJvcFZhbHVlLCBFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi9hcGkvbWltXCJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcblx0e1xyXG4gICAgICAgIExvY2FsU3R5bGVzOiBJTG9jYWxTdHlsZVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTG9jYWxTdHlsZVNlcnZpY2UgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IGNvbXBvbmVudHMgdGhhdFxyXG4vLyBkZWZpbmUgdGhlaXIgbG9jYWwgQ1NTIHN0eWxlczsgdGhhdCBpcywgY29tcG9uZW50cyBkZXJpdmluZyBmcm9tIHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXNcclxuLy8gY2xhc3MuIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHJldHJpZXZpbmcgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWNvcmF0ZWQgd2l0aCB0aGUgdW5pcXVlXHJcbi8vIElELCB3aGljaCBhdm9pZHMgZHVwbGljYXRpb24gb2YgbmFtZXMgYmV0d2VlbiBjb21wb25lbnRzIG9mIHRoZSBzYW1lIG9yIGRpZmZlcmVudCB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gUmV0cnVybnMgQ1NTIGNsYXNzIG9yIHZhcmlhYmxlIG5hbWUgZGVjb3JhdGVkIHdpdGggYSB1bmlxdWUgSUQuXHJcblx0ZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBjb21wb25lbnRzIHRoYXQgZGVmaW5lIGxvY2FsIENTUyBzdHlsZXMuXHJcbi8vIFdoZW4gdGhpcyBjb21wb25lbnQgaXMgbW91bnRlZCBpdCBjcmVhdGVzIGEgbmV3IDxzdHlsZT4gZWxlbWVudCAod2l0aGluIHRoZSA8aGVhZD4gZWxlbWVudCkuXHJcbi8vIEFsbCBjbGFzcyBuYW1lcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVmaW5lZCB3aXRoaW4gdGhpcyBzdHlsZSB3aWxsIGhhdmUgYSB1bmlxdWUgSUQgYWRkZWQgdG9cclxuLy8gdGhlbSBpbiBvcmRlciB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiBuYW1lcyBhbW9uZyBvdGhlciBjb21wb25lbnRzIChvZiB0aGUgc2FtZSBvciBvZiBkaWZmZXJlbnRcclxuLy8gdHlwZS4gVGhpcyBjbGFzcyBhbHNvIHB1Ymxpc2hlcyBhIHNlcnZpY2UgaW1wbGVtZW50aW5nIHRoZSBJTG9jYWxTdHlsZVNlcnZpY2VcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxuXHRcdFx0XHRleHRlbmRzIG1pbS5Db21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxuXHRcdFx0XHRpbXBsZW1lbnRzIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBUUHJvcHMgPSBudWxsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5tX3VuaXF1ZUlEID0gKE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKSkudG9TdHJpbmcoKTtcclxuXHRcdHRoaXMucnVsZXMgPSBuZXcgTWFwPHN0cmluZyxSdWxlSW5mbz4oKTtcclxuXHRcdHRoaXMucnVsZU5hbWVzID0gW107XHJcblxyXG5cdFx0Ly8gY3JlYXRlIDxzdHlsZT4gZWxlbWVudCBpbiB0aGUgPGhlYWQ+XHJcblx0XHR0aGlzLnN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdHRoaXMuc3R5bGVFbG0uaWQgPSB0aGlzLm1fdW5pcXVlSUQ7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLnN0eWxlRWxtKTtcclxuXHJcblx0XHQvLy8vIFdlYktpdCBoYWNrIDooXHJcblx0XHQvL3RoaXMuc3R5bGVFbG0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBJTG9jYWxTdHlsZVNlcnZpY2UgaW1wbGVtZW50YXRpb24uXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRwdWJsaWMgZ2V0IHVuaXF1ZUlEKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fdW5pcXVlSUQ7IH1cclxuXHJcblx0Ly8gUmV0cnVybnMgQ1NTIGNsYXNzIG9yIHZhcmlhYmxlIG5hbWUgZGVjb3JhdGVkIHdpdGggYSB1bmlxdWUgSUQuXHJcblx0cHVibGljIGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLm1fdW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIFB1YmxpYyBpbnRlcmZhY2UuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIENyZWF0ZXMgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgY3JlYXRlU3R5bGVSdWxlKCBuYW1lOiBzdHJpbmcsIHNlbGVjdG9yPzogc3RyaW5nLCBwcm9wcz86IFN0eWxlc2V0KTogSU1Dc3NTdHlsZVJ1bGVcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5jcmVhdGVEdW1teVJ1bGUoIG5hbWUsIFwiZHVtbXkge31cIik7XHJcblx0XHRsZXQgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUgPSBpbmZvLmNzc29tUnVsZSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIHN0eWxlIHJ1bGUgb2JqZWN0XHJcblx0XHRsZXQgbWNzc1N0eWxlUnVsZTogTUNzc1N0eWxlUnVsZSA9IG5ldyBNQ3NzU3R5bGVSdWxlKCB0aGlzLnVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdFx0aWYgKHNlbGVjdG9yKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFNlbGVjdG9yKCBzZWxlY3Rvcik7XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0UHJvcGVydGllcyggcHJvcHMpO1xyXG5cclxuXHRcdGluZm8ubWNzc1J1bGUgPSBtY3NzU3R5bGVSdWxlO1xyXG5cdFx0cmV0dXJuIG1jc3NTdHlsZVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGdldFJ1bGUoIG5hbWU6IHN0cmluZyk6IElNQ3NzUnVsZVxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdHJldHVybiBpbmZvID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBpbmZvLm1jc3NSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyByZW1vdmVSdWxlKCBuYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcIkxvY2FsU3R5bGVzXCIsIHRoaXMpO1xyXG5cdH1cdFxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcIkxvY2FsU3R5bGVzXCIpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVFbG0ucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgc3R5bGUgcnVsZS5cclxuXHRwcml2YXRlIGNyZWF0ZUR1bW15UnVsZSggbmFtZTogc3RyaW5nLCBydWxlVGV4dDogc3RyaW5nKTogUnVsZUluZm9cclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBydWxlIHdpdGggdGhpcyBuYW1lXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRpZiAoaW5mbyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnJlbW92ZVJ1bGUoIG5hbWUpO1xyXG5cclxuXHRcdC8vIHRoZSBuZXcgcnVsZSB3aWxsIGJlY29tZXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5IG9mIHJ1bGVzXHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLnJ1bGVOYW1lcy5sZW5ndGg7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBzaGVldDogQ1NTU3R5bGVTaGVldCA9IHRoaXMuc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHRcdHNoZWV0Lmluc2VydFJ1bGUoIHJ1bGVUZXh0LCBpbmRleCk7XHJcblx0XHRsZXQgY3Nzb21SdWxlOiBDU1NSdWxlID0gc2hlZXQucnVsZXNbaW5kZXhdO1xyXG5cclxuXHRcdC8vIGFkZCB0aGUgcnVsZSB0byBvdXIgaW50ZXJuYWwgc3RydWN0dXJlc1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMucHVzaCggbmFtZSk7XHJcblx0XHRpbmZvID0geyBtY3NzUnVsZTogbnVsbCwgY3Nzb21SdWxlLCBpbmRleCB9O1xyXG5cdFx0dGhpcy5ydWxlcy5zZXQoIG5hbWUsIGluZm8pO1xyXG5cclxuXHRcdHJldHVybiBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdGhhdCBpcyB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVmaW5lZCBieSB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgbV91bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBTdHlsZSBlbGVtZW50IERPTSBvYmplY3QuIElzIGRlZmluZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuXHRwcml2YXRlIHN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50O1xyXG5cclxuXHQvLyBNYXAgb2YgcnVsZXMgYnkgdGhlaXIgbmFtZXMuXHJcblx0cHJpdmF0ZSBydWxlczogTWFwPHN0cmluZyxSdWxlSW5mbz47XHJcblxyXG5cdC8vIEFycmF5IG9mIHJ1bGUgbmFtZXMuIFRoaXMgaXMgbmVlZGVkIHRvIGFkanVzdCBpbmRleGVzIG9mIHJ1bGVzIGFmdGVyIGEgcnVsZSBpcyByZW1vdmVkLlxyXG5cdHByaXZhdGUgcnVsZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhlbHBlciB0eXBlIHRoYXQga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBDU1MgcnVsZSBhZGRlZCB0byBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG50eXBlIFJ1bGVJbmZvID0geyBtY3NzUnVsZTogSU1Dc3NSdWxlLCBjc3NvbVJ1bGU6IENTU1J1bGUsIGluZGV4OiBudW1iZXIgfTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NSdWxlXHJcbntcclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cmVhZG9ubHkgY3Nzb21SdWxlOiBDU1NSdWxlO1xyXG5cclxuXHQvLyBBcHBlbmRzIHVuaXF1ZSBJRCB0byB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1J1bGUgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBvYmplY3RzIHJlcHJlc2VudGVkIGRpZmZlcmVudCB0eXBlcyBvZiBDU1MgcnVsZXMgdGhhdFxyXG4vLyBhcmUgY3JlYXRlZCBieSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNvbXBvbmVudC4gVGhpcyBvYmplY3Qgc2ltcGx5IGtlZXBzIHRoZSB1bmlxdWVcclxuLy8gSUQgdGhhdCBzaG91bGQgYmUgdXNlZCBieSBkZXJpdmVkIGNsYXNzZXMgd2hlbiBjcmVhdGluZyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgc28gdGhhdCB0aGV5XHJcbi8vIGFyZSBnbG9iYWxseSB1bmlxdWUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBNQ3NzUnVsZUJhc2U8VCBleHRlbmRzIENTU1J1bGU+IGltcGxlbWVudHMgSU1Dc3NSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBUKVxyXG5cdHtcclxuXHRcdHRoaXMudW5pcXVlSUQgPSB1bmlxdWVJRDtcclxuXHRcdHRoaXMuY3Nzb21SdWxlID0gY3Nzb21SdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBcHBlbmRzIHVuaXF1ZSBJRCB0byB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy51bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHB1YmxpYyByZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZS5yZXBsYWNlKCBcIigqKVwiLCB0aGlzLnVuaXF1ZUlEKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cHVibGljIHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRwdWJsaWMgY3Nzb21SdWxlOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1N0eWxlUnVsZVxyXG57XHJcblx0Ly8gU2V0cyB0aGUgcnVsZSBzZWxlY3Rvci4gVGhlIHN0cmluZyBjYW4gY29udGFpbiB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZFxyXG5cdC8vIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZyk7XHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIEJvdGggcHJvcGVydHkgbmFtZSBhbmQgcHJvcGVydHkgdmFsdWUgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnRpZXMoIHByb3BzOiBTdHlsZXNldCk6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRyZW1vdmVQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGNvbnRhaW5zIGEgc2VsZWN0b3IgYW5kIGEgc2V0IG9mXHJcbi8vIHN0eWxlIHByb3BlcnR5IG5hbWUtdmFsdWUgcGFpcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBNQ3NzU3R5bGVSdWxlIGV4dGVuZHMgTUNzc1J1bGVCYXNlPENTU1N0eWxlUnVsZT4gaW1wbGVtZW50cyBJTUNzc1N0eWxlUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB1bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgcnVsZSBzZWxlY3Rvci4gVGhlIHN0cmluZyBjYW4gY29udGFpbiB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZFxyXG5cdC8vIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc2VsZWN0b3JUZXh0ID0gdGhpcy5yZXBsYWNlKCBzZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIEJvdGggcHJvcGVydHkgbmFtZSBhbmQgcHJvcGVydHkgdmFsdWUgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSksIHRoaXMucmVwbGFjZSggcHJvcFZhbCksXHJcblx0XHRcdFx0XHRcdGltcG9ydGFudD8gXCJpbXBvcnRhbnRcIiA6IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgc2V0UHJvcGVydGllcyggcHJvcHM6IFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBnZXRTdHlsZVByb3BWYWx1ZSggcHJvcE5hbWUgYXMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldCwgcHJvcHNbcHJvcE5hbWVdKTtcclxuXHRcdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGVbdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSldID0gdGhpcy5yZXBsYWNlKCBwcm9wVmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyByZW1vdmVQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggdGhpcy5yZXBsYWNlKCBwcm9wTmFtZSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyByZXByZXNlbnRpbmcgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jQ29tcFR5cGU8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSAocHJvcHM6IEZ1bmNQcm9wczxUUHJvcHMsVENoaWxkcmVuPikgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgZGVmaW5lcyBjb25zdHJ1Y3RvciBzaWduYXR1cmUgZm9yIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM/OiBUUHJvcHMpOiBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLiBGb3IgbWFuYWdlZCBjb21wb25lbnRzLCB0aGUgcHJvcGVydGllc1xyXG5cdCAqIGNhbiBhbHNvIGJlIHNldCAoY2hhbmdlZCkgd2hlbiB0aGUgY29tcG9uZW50J3MgcGFyZW50IGlzIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0cHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudHMgY2FuIGRlZmluZSBkaXNwbGF5IG5hbWUgZm9yIHRyYWNpbmcgcHVycG9zZXM7IGlmIHRoZXkgZG9uJ3QgdGhlIGRlZmF1bHQgbmFtZVxyXG5cdCAqIHVzZWQgaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cywgZ2V0cyBvciBjbGVhcnMgdGhlIHZpcnR1YWwgbm9kZSBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdHdpY2U6XHJcblx0ICogIDEuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqICAgIHBhc3NlZCBvYmplY3QuXHJcblx0ICogIDIuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqICAgIHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdHZuPzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHZpcnR1YWwgbm9kZSBoYXMgYWxyZWFkeSBiZWVuIHNldCBzbyB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzXHJcblx0ICogZnJvbSBpdC5cclxuXHQgKi9cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS4gQWZ0ZXJcclxuXHQgKiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG5cdCAqL1xyXG5cdHdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBjYW4gcmVhZCBET00gbGF5b3V0IGluZm9ybWF0aW9uIChlLmcuXHJcblx0ICogZWxlbWVudCBtZWFzdXJlbWVudHMpIHdpdGhvdXQgdGhlIHJpc2sgb2YgY2F1c2luZyBmb3JjZWQgbGF5b3V0cy5cclxuXHQgKi9cclxuXHRiZWZvcmVVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBhZnRlciBhbCBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG1vZGlmaWNhdGlvbnMgdG9cclxuXHQgKiBET00gcmVzdWx0aW5nIGZyb20gdXBkYWluZyBjb21wb25lbnRzIGhhdmUgYmVlbiBhbHJlYWR5IGRvbmUuXHJcblx0ICovXHJcblx0YWZ0ZXJVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgdXNlZCBieSBtYW5hZ2VkIGNvbXBvbmVudHMuXHJcblx0ICogXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkVXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGNvbXBvbmVudCBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdGdldFVwZGF0ZVN0cmF0ZWd5PygpOiBVcGRhdGVTdHJhdGVneTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBzcGVjaWZpZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgdXBkYXRlIGJlaGF2aW9yIG9mIGNvbXBvbmVudHMgYW5kXHJcbiAqIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVXBkYXRlU3RyYXRlZ3kgPSBcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciBub24tbWF0Y2hpbmcgbmV3IGtleWVkIHN1Yi1ub2RlcyBhcmUgYWxsb3dlZCB0byByZWN5Y2xlIG5vbi1cclxuXHQgKiBtYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzLiBIZXJlIFwibm9uLW1hdGNoaW5nXCIgbWVhbnMgdGhvc2UgbmV3IG9yIG9sZCBub2RlcyBmb3Igd2hpY2hcclxuXHQgKiBubyBvbGQgb3IgbmV3IHN1Yi1ub2RlcyByZXNwZWN0aXZlbHkgd2VyZSBmb3VuZC4gSWYgdGhpcyBmbGFnIGlzIGZhbHNlLCB0aGVuIG5vbi1tYXRjaGluZ1xyXG5cdCAqIG9sZCBzdWItbm9kZXMgd2lsbCBiZSByZW1vdmVkIGFuZCBub24tbWF0Y2hpbmcgbmV3IHN1Yi1ub2RlcyB3aWxsIGJlIGluc2VydGVkLiBJZiB0aGlzXHJcblx0ICogZmxhZyBpcyB0cnVlLCB0aGVuIG5vbi1tYXRjaGluZyBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgdXBkYXRlZCBieSB0aGUgbm9uLW1hdGNoaW5nIG5ld1xyXG5cdCAqIHN1Yi1ub2RlcyAtIHByb3ZpZGVkIHRoYXQgdGhlIHR5cGVzIG9mIHN1Yi1ub2RlcyBhcmUgdGhlIHNhbWUuXHJcblx0ICogXHJcblx0ICogSWYga2V5ZWQgc3ViLW5vZGVzIHJlY3ljbGluZyBpcyBhbGxvd2VkIGl0IGNhbiBzcGVlZCB1cCBhbiB1cGRhdGUgcHJvY2VzcyBiZWNhdXNlXHJcblx0ICogbGVzcyBET00gbm9kZXMgZ2V0IHJlbW92ZWQgYW5kIGluc2VydGVkLCB3aGljaCBpcyBtb3JlIGV4cGVuc2l2ZSB0aGFuIHVwZGF0aW5nLiBIb3dldmVyLFxyXG5cdCAqIHRoaXMgY2FuIGhhdmUgc29tZSBhZHZlcnNlIGVmZmVjdHMgdW5kZXIgY2lydGFpbiBjaXJjdW1zdGFuY2VzIGlmIGNlcnRhaW4gZGF0YSBpcyBib3VuZFxyXG5cdCAqIHRvIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlcyBvZiBET00gbm9kZXMuXHJcblx0ICogXHJcblx0ICogVGhlIGZsYWcncyBkZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNjaGVkdWxlZEZ1bmNUeXBlID0gKCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZXZlbnQgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiByZWZlcmVuY2UgdmFsdWUgY2hhbmdlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZkZ1bmM8VD4gPSAobmV3UmVmOiBUKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG5pbXBvcnQge0lFdmVudFNsb3QsIEV2ZW50U2xvdH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgY2xhc3MgdG8gdXNlIHdoZW5ldmVyIGEgcmVmZXJlbmNlIHRvIGFuIG9iamVjdCBpcyBuZWVkZWQgLSBmb3IgZXhhbXBsZSwgd2l0aCBKU1ggYHJlZmBcclxuICogYXR0cmlidXRlcyBhbmQgc2VydmljZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmPFQ+XHJcbntcclxuXHRwcml2YXRlIF9yOiBUO1xyXG5cclxuXHQvKiogRXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSByZWZlcmVuY2VkIHZhbHVlIGNoYW5nZXMgKi9cclxuXHRwcml2YXRlIGNoYW5nZWRFdmVudCA9IG5ldyBFdmVudFNsb3Q8UmVmRnVuYzxUPj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGxpc3RlbmVyPzogUmVmRnVuYzxUPiwgaW5pdGlhbFJlZmVyZW5lPzogVClcclxuXHR7XHJcblx0XHRpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblxyXG5cdFx0dGhpcy5fciA9IGluaXRpYWxSZWZlcmVuZTtcclxuXHR9XHJcblxyXG5cdC8qKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSBjaGFuZ2VzLiAqL1xyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhIGNhbGxiYWNrIHRoYXQgd2FzIGFkZGVkIHdpdGggYWRkTGlzdGVuZXIuICovXHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5kZXRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgZ2V0IHIoKTogVCB7IHJldHVybiB0aGlzLl9yOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpcy5fciAhPT0gbmV3UmVmKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9yID0gbmV3UmVmO1xyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5maXJlKCBuZXdSZWYpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIENsZWFycyB0aGUgcmVmZXJlbmNlIHZhbHVlIGFuZCBhbHNvIGNsZWFycyBhbGwgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLl9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuY2xlYXIoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VydmljZURlZmluaXRpb25zIGludGVyZmFjZSBzZXJ2ZXMgYXMgYSBtYXBwaW5nIGJldHdlZW4gc2VydmljZSBuYW1lcyBhbmQgc2VydmljZSB0eXBlcy5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgaW50ZW5kZWQgdG8gYmUgYXVnbWVudGVkIGJ5IG1vZHVsZXMgdGhhdCBkZWZpbmUgYW5kL29yIHVzZSBzcGVjaWZpYyBzZXJ2aWNlcy5cclxuICogVGhpcyBhbGxvd3MgcGVyZm9ybWluZyBzZXJ2aWNlIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIGluIHR5cGUtc2FmZSBtYW5uZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxue1xyXG5cdC8qKiBCdWlsdC1pbiBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiAqL1xyXG5cdFwiU3RkRXJyb3JIYW5kbGluZ1wiOiBJRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWx0LWluIHNlcnZpY2UgZm9yIGxhenkgcGVvcGxlIC0gY2FuIGJlIHVzZWQgZm9yIHF1aWNrIHByb3RvdHlwZXMgd2l0aG91dCB0aGUgbmVlZCB0b1xyXG5cdCAqIGF1Z21lbnQgdGhlIGludGVyZmFjZS5cclxuXHQgKi9cclxuXHRcImFueVwiOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzZXJ2aWNlIHRoYXQgY2FuIGJlIGludm9rZWQgd2hlbiBhbiBlcnJvciAtXHJcbiAqIHVzdWFsbHkgYW4gZXhjZXB0aW9uIC0gaXMgZW5jb3VudGVyZWQgYnV0IGNhbm5vdCBiZSBoYW5kbGVkIGxvY2FsbHkuIEEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50c1xyXG4gKiB0aGlzIHNlcnZpY2Ugd291bGQgbm9ybWFsbHkgcmVtZW1iZXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIHVwZGF0ZSBpdHNlbGYsc28gdGhhdCBpbiBpdHNcclxuICogcmVuZGVyIG1ldGhvZCBpdCB3aWxsIHByZXNlbnQgdGhlIGVycm9yIHRvIHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGlzIGltcGxlbWVudGVkIGJ5IHRoZSBSb290IFZpcnR1YWwgTm9kZSBhcyBhIGxhc3QgcmVzb3J0IGZvciBlcnJvclxyXG4gKiBoYW5kbGluZy4gVGhlIFJvb3QgVk4gd2lsbCBkaXNwbGF5IGEgc2ltcGxlIFVJIHNob3dpbmcgdGhlIGVycm9yIGFuZCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvXHJcbiAqIHJlc3RhcnQgLSBpbiB0aGUgaG9wZSB0aGF0IHRoZSBlcnJvciB3aWxsIG5vdCByZXBlYXQgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFtbUmVmXV0gY2xhc3Mgb3IgW1tSZWZGdW5jXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUID0gYW55PiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgd2l0aCBhIHNldCBtZXRob2QgdGhhdCBjYWxscyB0aGUgdXBkYXRlTWUgbWV0aG9kXHJcbiAqIHdoZW5ldmVyIHRoZSBwcm9wZXJ0eSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKlx0YGBgdHN4XHJcbiAqXHRjbGFzcyBDaGlsZCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRAbWltLnVwZGF0YWJsZSB0ZXh0OiBzdHJpbmcgPSBcIkhlbGxvIVwiO1xyXG4gKlx0XHRyZW5kZXIoKVxyXG4gKlx0XHR7XHJcbiAqXHQgXHRcdHJldHVybiA8ZGl2Pnt0ZXh0fTwvZGl2PlxyXG4gKlx0XHR9XHJcbiAqXHR9XHJcbiAqXHJcbiAqXHRjbGFzcyBQYXJlbnQgZXh0ZW5kcyBDb21wb25lbnRcclxuICpcdHtcclxuICpcdFx0Y2hpbGQgPSBuZXcgQ2hpbGQoKTtcclxuICpcdFx0cmVuZGVyKClcclxuICpcdFx0e1xyXG4gKlx0XHRcdHJldHVybiA8ZGl2IGNsaWNrPXsoKSA9PiB0aGlzLmNoaWxkLnRleHQgKz0gXCIgYWdhaW5cIn0+e3RoaXMuY2hpbGR9PC9kaXY+XHJcbiAqXHRcdH1cclxuICpcdH1cclxuICpcdGBgYFxyXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIENoaWxkIGNvbXBvbmVudCB3aWxsIGJlIHJlLXJlbmRlcmVkIHdoZW4gaXRzIGB0ZXh0YCBwcm9wZXJ0eSBjaGFuZ2VzLlxyXG4gKiBcclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIG5hbWUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRhYmxlKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG5cdFx0e1xyXG5cdFx0XHRzZXQoIHZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG5cdFx0XHRcdFx0bGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG5cdFx0XHRcdFx0aWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHRcdFx0XHRcdHRoaXMudm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiRnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlIGZ1bmN0aW9uIGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IG5lZWRlZFxyXG4gKiBiZWNhdXNlIGN1cnJlbnRseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdGhlIGA8PmAgZnJhZ21lbnQgbm90YXRpb24gaWYgYSBjdXN0b20gSlNYIGZhY3RvcnlcclxuICogZnVuY3Rpb24gaXMgdXNlZC5cclxuICpcclxuICogVXNlIGl0IGFzIGZvbGxvd3M6XHJcbiAqIGBgYHRzeFxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcbiAqXHRcdFx0PGRpdjEvPlxyXG4gKlx0XHRcdDxkaXYyLz5cclxuICpcdFx0XHQ8ZGl2My8+XHJcbiAqXHRcdDwvbWltLkZyYWdtZW50PlxyXG4gKlx0fVxyXG4gIGBgYFxyXG5cclxuICogQHBhcmFtIHByb3BzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KCBwcm9wczogQ29tcFByb3BzPHt9Pik6IGFueSB7fVxyXG5cclxuXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2xhc3Mgb2YgaGFuZGxlcnMgb2YgY3VzdG9tIGF0dHJpYnV0ZXNcclxuICogdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy4gVGhlIHJlcXVpcmVtZW50cyBvbiBzdWNoIGNsYXNzZXMgYXJlOlxyXG4gKiAxLiBJbXBsZW1lbnQgYSBjb25zdHJ1Y3RvciBhY2NlcHRpbmcgSUVsbVZOLCBhdHRyaWJ1dGUgdmFsdWUgYW5kIGF0dHJpYnV0ZSBuYW1lICh0aGlzIGFsbG93c1xyXG4gKiAgIHRoZSBzYW1lIGhhbmRsZXIgdG8gc2VydmUgZGlmZmVyZW50IGF0dHJpYnV0ZXMpLlxyXG4gKiAyLiBJbXBsZW1lbnQgdGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciB0aGF0IHdpbGwgYWN0IG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBwcm92aWRlc1xyXG5cdCAqIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIEF0dHJpYnV0ZSBuYW1lIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB0aGUgaGFuZGxlclxyXG5cdCAqIHN1cHBvcnRzIGRpZmZlcmVudCBhdHRyaWJ1dGVzLiBCeSB0aGUgdGltZSB0aGlzIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIERPTSBlbGVtZW50IGhhZFxyXG5cdCAqIGFscmVhZHkgYmVlbiBjcmVhdGVkIGFuZCBzdGFuZGFyZCBhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMgaGFkIGJlZW4gYXBwbGllZC5cclxuXHQgKiBAcGFyYW0gZWxtVk4gVmlydHVhbCBub2RlIGZvciB0aGlzIGVsZW1lbnQuIFRoZSBoYW5kbGVyIGNhbiByZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgZnJvbVxyXG5cdCAqICAgdGhpcyBpbnRlcmZhY2UgYW5kIGFsc28gdXNlIG90aGVyIG1ldGhvZHMgKGUuZy4gc3Vic2NyaWJlIHRvIHNlcnZpY2VzKS5cclxuXHQgKiBAcGFyYW0gYXR0clZhbCBJbml0aWFsIHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICogQHBhcmFtIGF0dHJOYW1lIE5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRuZXcoIGVsbVZOOiBJRWxtVk4sIGF0dHJWYWw6IFQsIGF0dHJOYW1lPzogc3RyaW5nKTogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPlxyXG57XHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyBhbiBleGlzdGluZyBjdXN0b20gYXR0cmlidXRlIHdpdGggdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcFZhbCBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiBjaGFuZ2VzIHdlcmUgbWFkZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSggbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlcm1pbmF0ZXMgdGhlIGZ1bmN0aW9uaW5nIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgZWl0aGVyXHJcblx0ICogd2hlbiBhIG5ldyByZW5kZXJpbmcgb2YgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIHRoZSBhdHRyaWJ1dGUgYW55bW9yZSBvciBpZiB0aGUgZWxlbWVudFxyXG5cdCAqIGlzIHJlbW92ZWQuIEFsdGhvdWdoIHRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLCBtb3N0IGhhbmRsZXJzIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgaXQgdG9cclxuXHQgKiBwcm9wZXJseSBjbGVhbnVwIGFueSByZXNvdXJjZXMgKGUuZy4gZXZlbnQgaGFuZGxlcnMpIHRvIGF2b2lkIGxlYWtzLlxyXG5cdCAqIEBwYXJhbSBpc1JlbW92YWwgVHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyByZW1vdmVkIGFuZCBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZ1xyXG5cdCAqICAgdXBkYXRlZCBhbmQgdGhlIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgcHJvdmlkZWQuIElmIHRoZSBoYW5kbGVyIGFkZHMgYW55IGV2ZW50XHJcblx0ICogICBsaXN0ZW5lcnMgdG8gdGhlIGVsZW1lbnQsIHRoZW4gaXQgaGFzIHRvIHJlbW92ZSB0aGVtIG9uIHVwZGF0ZSBidXQgZG9lbid0IGhhdmUgdG8gZG8gaXRcclxuXHQgKiAgIG9uIGVsZW1lbnQgcmVtb3ZhbC5cclxuXHQgKi9cclxuXHR0ZXJtaW5hdGU/KCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0LyoqIFRvcC1sZXZlbCBub2RlICovXHJcblx0Um9vdCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgY3JlYXRlZCB2aWEgbmV3ICovXHJcblx0SW5kZXBlbmRlbnRDb21wLFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBsYWlkIG91dCB1c2luZyBKU1ggKi9cclxuXHRNYW5hZ2VkQ29tcCxcclxuXHJcblx0LyoqIFN0YXRlbGVzcyBjb21wb25lbnQgKHNpbXBsZSByZW5kZXJpbmcgZnVuY3Rpb24gYWNjZXB0aW5nIHByb3BzKSAqL1xyXG5cdEZ1bmNDb21wLFxyXG5cclxuXHQvKiogRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guICovXHJcblx0RWxtLFxyXG5cclxuXHQvKiogVGV4dCBub2RlICovXHJcblx0VGV4dCxcclxuXHJcblx0LyoqIFdyYXBwZXIgYXJvdW5kIGEgZnVuY3Rpb24vbWV0aG9kIHRoYXQgY2FuIGJlIHVwZGF0ZWQgaW5kZXBlbmRlbnRseS4gKi9cclxuXHRGdW5jUHJveHksXHJcblxyXG5cdC8qKiBOb2RlIHRoYXQgd2FpdHMgZm9yIGEgcHJvbWlzZSB0byBiZSBzZXR0bGVkIGFuZCB0aGVuIGRpc3BsYXlzIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBjb250ZW50LiAqL1xyXG5cdFByb21pc2VQcm94eSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHJlYWRvbmx5IHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBtaW0uQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIG1pbS5Db21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHR3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc0NvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBjb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1hbmFnZWRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hbmFnZWRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgY2xhc3MuICovXHJcblx0cmVhZG9ubHkgY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJSW5kZXBlbmRlbnRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgY29tcG9uZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIElFbG1WTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBET00gZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsbVZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgbmFtZS4gKi9cclxuXHRyZWFkb25seSBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIChhcyBvcHBvc2VkIHRvIEhUTUwpLiAqL1xyXG5cdHJlYWRvbmx5IGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgb2JqZWN0LiAqL1xyXG5cdHJlYWRvbmx5IGVsbTogRWxlbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUZXh0Vk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgdGV4dCBET00gbm9kZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIFRleHQgb2YgdGhlIG5vZGUuICovXHJcblx0dGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKiogVGV4dCBET00gbm9kZS4gKi9cclxuXHR0ZXh0Tm9kZTogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNsaWNlIHR5cGUgZGVmaW5lcyBhbiBvYmplY3Qgc3RydWN0dXJlIGRlc2NyaWJpbmdcclxuICogcGFyYW1ldGVycyBmb3IgcmVuZGVyaW5nIGFuIGVsZW1lbnQuIFRoZXkgaW5jbHVkZTogQ2xhc3MsIFN0eWxlLCBQcm9wZXJ0aWVzLCBDb250ZW50LiBUaGlzXHJcbiAqIHN0cnVjdHVyZSBpcyBpbnRlbmRlZCB0byBiZSBwYXNzZWQgZWl0aGVyIGluIHRoZSBjb25zdHJ1Y3RvciBvciB2aWEgdGhlIHByb3RlY3RlZCBtZXRob2RzIG9mXHJcbiAqIGRlcml2ZWQgY2xhc3Nlcywgc28gdGhhdCB0aGV5IGNhbiBjb250cm9sIHBhcmFtZXRlcnMgb2YgZWxlbWVudHMgcmVuZGVyZWQgYnkgdGhlIHVwcGVyIGNsYXNzZXMuXHJcbiAqIFRoZSBtYWluIHB1cnBvc2Ugb2YgdGhpcyBzdHJ1Y3R1cmUgaXMgdG8gY29tYmluZSBwYXJhbWV0ZXJzIGRlZmluaW5nIGFuIGVsZW1lbnQgaW50byBhIHNpbmdsZVxyXG4gKiBvYmplY3QgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzIGNhbGxlcnMgb2YgY2xhc3NlcyBzaG91bGQgZGVhbCB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2UgPVxyXG57XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogY3NzLlN0eWxlc2V0O1xyXG5cdHByb3BzPzogb2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdF07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSwgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGVcclxuICogY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VD4gfFxyXG5cdFx0XHRcdEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBjbGFzcyBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIENsYXNzUHJvcFR5cGUgPSBzdHJpbmcgfCBjc3MuSUNsYXNzUnVsZSB8IChzdHJpbmcgfCBjc3MuSUNsYXNzUnVsZSlbXTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBkZWZpbmluZyB0aGUgaWQgcHJvcGVydHkgb2YgSFRNTCBlbGVtZW50c1xyXG4gKi9cdFx0XHRcdFxyXG5leHBvcnQgdHlwZSBJRFByb3BUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgY3NzLklJRFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBjb2xvciB2YWx1ZXMgZm9yIGRpZmZlcmVudCBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGVsZW1lbnQgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdC8vIHN0YW5kYXJkIEhUTUwgYW5kIFNWRyBlbGVtZW50IHByb3BlcnRpZXNcclxuXHRjbGFzcz86IENsYXNzUHJvcFR5cGU7XHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXIgfCBjc3MuSUlEUnVsZTtcclxuXHRsYW5nPzogc3RyaW5nO1xyXG5cdHJvbGU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBjc3MuU3R5bGVzZXQ7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZWxtLnRhZ05hbWUgPT09IFwic3ZnXCI7XHJcblx0Ly8gcmV0dXJuIChlbG0gYXMgYW55KS5vd25lclNWR0VsZW1lbnQgPT09IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEpTWCBuYW1lc3BhY2UgZGVmaW5pbmcgaG93IFR5cGVTY3JpcHQgcGVyZm9ybXMgdHlwZSBjaGVja3Mgb24gSlNYIGVsZW1lbnRzLGNvbXBvbmVudHNcclxuLy8gcHJvcGVydGllcyBhbmQgY2hpbGRyZW4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOb2RlW10ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHNcclxuXHR7XHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbiBvZiBtaW0uanN4IGZ1bmN0aW9uIC0gSlNYIEZhY3RvcnlcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7Y3JlYXRlTm9kZXNGcm9tSlNYfSBmcm9tIFwiLi4vY29yZS9Db250ZW50RnVuY3NcIlxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWcsIHByb3BzLCBjaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gZm9yIHRoZSByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSBleHBvcnRlZCBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7RWxtQXR0ciwgUHJvcFR5cGV9IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCI7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciBjbGFzcyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcbiAqIEBwYXJhbSBmYWN0b3J5IGN1c3RvbSBhdHRyaWJ1dGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggYXR0ck5hbWU6IHN0cmluZywgaGFuZGxlckNsYXNzOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+KTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBhdHRyTmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5DdXN0b21BdHRyLCBoYW5kbGVyQ2xhc3MgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGV2ZW50IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBldmVudE5hbWUsIHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gb2YgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgU2xpY2Ugb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU2xpY2VzKCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbiAqIGludG8gdGhlIGdpdmVuIHJlc3VsdGFudCBzbGljZS5cclxuICogQHBhcmFtIHJlc1NsaWNlIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqIEBwYXJhbSBzbGljZXMgQXJyYXkgb2YgU2xpY2Ugb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdHV0aWxzLm1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lcyBBcnJheSBvZiBzdHJpbmdzIG9yIHN0cmluZyBhcnJheXMgd2l0aCBjbGFzcyBuYW1lc1xyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgY2xhc3Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuICogYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogY3NzLlN0eWxlc2V0W10pOiBjc3MuU3R5bGVzZXRcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZVN0eWxlcyggLi4uc3R5bGVzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuICogQHBhcmFtIHJlc1N0eWxlIFJlc3VsdGFudCBzdHlsZSBvYmplY3RcclxuICogQHBhcmFtIHN0eWxlcyBBcnJheSBvZiBzdHlsZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlOiBjc3MuU3R5bGVzZXQsIC4uLnN0eWxlczogKGNzcy5TdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHR1dGlscy5tZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ2FsbGJhY2sgd3JhcHBpbmdcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7d3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9TY2hlZHVsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLiBOb3RlIHRoYXQgdGhlIFZOIGNhbiBiZSBudWxsL3VuZGVmaW5lZDtcclxuICogaG93ZXZlciwgaW4gdGhpcyBjYXNlIGlmIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0IGl0IHdpbGwgbm90IGJlIGhhbmRsZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IElWTm9kZSk6IFRcclxue1xyXG5cdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGF0LCB2bik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzLCB0aGlzLnZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmNQcm94eSBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBWYWx1ZSB0byBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gaW52b2tpbmcgdGhlIGZ1bmN0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlXHJcblx0ICogY2xhc3MgYmFzZWQgY29tcG9uZW50IHRoYXQgcmVuZGVyZWQgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd2lsbCBiZSB1c2VkICh3aGljaCBpcyB0aGVcclxuXHQgKiBtb3N0IGNvbW1vbiBjYXNlKS5cclxuXHQgKi9cclxuXHR0aGlzQXJnPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHJvb3QgZnJvbSBcIi4uL2NvcmUvUm9vdFZOXCJcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhXHJcbiAqIHN5bmNocm9ub3VzIG1hbm5lci5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGVuXHJcbiAqIHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRyb290LnVubW91bnRSb290U3luYyggYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIENvbXBCYXNlVk4gaXMgYSBiYXNlIGNsYXNzIGZvciBJbnN0YW5jZVZOIGFuZCBDbGFzc1ZOLiBJdCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eVxyXG4vLyBpbiB0ZXJtcyBvZiB1cGRhdGUgcmVxdWVzdHMgYW5kIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsYXNzQ29tcFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklDbGFzc0NvbXBWTlxyXG57XHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlLlxyXG5cdHB1YmxpYyBjb21wOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1cGRhdGVTdHJhdGVneSgpOiBtaW0uVXBkYXRlU3RyYXRlZ3lcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5ID8gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5KCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKHRoaXMuY29tcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJyZW5kZXIoKSB3YXMgY2FsbGVkIG9uIHVubW91bnRlZCBjb21wb25lbnQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgcmVuZGVyKCkgb24gY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7SW5kZXBlbmRlbnRDb21wVk59IGZyb20gXCIuL0luZGVwZW5kZW50Q29tcFZOXCJcclxuaW1wb3J0IHtNYW5hZ2VkQ29tcFZOfSBmcm9tIFwiLi9NYW5hZ2VkQ29tcFZOXCJcclxuaW1wb3J0IHtGdW5jVk59IGZyb20gXCIuL0Z1bmNWTlwiXHJcbmltcG9ydCB7RWxtVk59IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHtUZXh0Vk59IGZyb20gXCIuL1RleHRWTlwiXHJcbmltcG9ydCB7RnVuY1Byb3h5Vk59IGZyb20gXCIuL0Z1bmNQcm94eVZOXCJcclxuaW1wb3J0IHtQcm9taXNlUHJveHlWTn0gZnJvbSBcIi4vUHJvbWlzZVByb3h5Vk5cIlxyXG5pbXBvcnQge3NfY3VycmVudENsYXNzQ29tcH0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBlaXRoZXIgYSBzaW5nbGUgdmlydHVhbCBub2RlIG9yIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC5cclxuLy8gRm9yIGFsbCB0eXBlcyBvZiBjb250ZW50cyBvdGhlciB0aGFuIGFuIGFycmF5LCB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBzaW5nbGUgVk4uIElmIHRoZSBpbnB1dFxyXG4vLyBjb250ZW50IGlzIGFuIGFycmF5LCB0aGVuIGEgVk4gaXMgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgYXJyYXkgZWxlbWVudHMuIFNpbmNlIGFycmF5IGVsZW1lbnRzXHJcbi8vIG1pZ2h0IGFsc28gYmUgYXJyYXlzLCB0aGUgcHJvY2VzcyBpcyByZWN1cnNpdmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTiB8IFZOW11cclxue1xyXG5cdGlmIChjb250ZW50ID09IG51bGwgfHwgY29udGVudCA9PT0gZmFsc2UpXHJcblx0e1xyXG5cdFx0Ly8gdGhlIGNvbXBhcmlzb24gYWJvdmUgY292ZXJzIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQmFzZSlcclxuXHRcdHJldHVybiBjb250ZW50O1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdHJldHVybiBjb250ZW50Lmxlbmd0aCA+IDAgPyBuZXcgVGV4dFZOKCBjb250ZW50KSA6IG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgKHRoaXMgY2FuIG9ubHkgYmUgYW4gSW5zdGFuY2UgY29tcG9uZW50KSBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIFZOLFxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMgZXhpc3RpbmcgVk47IG90aGVyd2lzZSBjcmVhdGUgYSBuZXcgb25lLlxyXG5cdFx0cmV0dXJuIChjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KS52blxyXG5cdFx0XHRcdFx0XHQ/IChjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KS52biBhcyBWTlxyXG5cdFx0XHRcdFx0XHQ6IG5ldyBJbmRlcGVuZGVudENvbXBWTiggY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGNvbnRlbnQpKVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjb250ZW50KTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCB7IHByb21pc2U6IGNvbnRlbnR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGNvbnRlbnQpXHJcblx0XHRyZXR1cm4gdm4gfHwgbmV3IEZ1bmNQcm94eVZOKCB7IGZ1bmM6IGNvbnRlbnQsIHRoaXNBcmc6IHNfY3VycmVudENsYXNzQ29tcH0pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC4gQ2FsbHMgdGhlIGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQgYW5kXHJcbi8vIGlmIGl0IHJldHVybnMgYSBzaW5nbGUgbm9kZSwgd3JhcHMgaXQgaW4gYW4gYXJyYXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyBub2RlcyA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZzogYW55LCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pOiBWTiB8IFZOW11cclxue1xyXG5cdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GcmFnbWVudClcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gbWltLkZ1bmNQcm94eSlcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzIHx8ICFwcm9wcy5mdW5jKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIGEgbm9kZSBsaW5rZWQgdG8gdGhpcyBmdW5jdGlvbi4gSWYgeWVzIHJldHVybiBpdDtcclxuXHRcdC8vIG90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IG5vZGUuXHJcblx0XHRsZXQgZnVuY1Byb3h5UHJvcHMgPSBwcm9wcyBhcyBtaW0uRnVuY1Byb3h5UHJvcHM7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIHByb3BzLmZ1bmMsIGZ1bmNQcm94eVByb3BzLmtleSk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNQcm94eVZOKCBwcm9wcyk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSB1cGRhdGVBcmdzIHByb3BlcnR5IGlzIHRydWUsIHdlIHJlcGxhY2UgdGhlIGFyZ3VtZW50cyBpbiB0aGUgbm9kZTsgb3RoZXJ3aXNlLFxyXG5cdFx0XHQvLyB3ZSBpZ25vcmUgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRpZiAoZnVuY1Byb3h5UHJvcHMucmVwbGFjZUFyZ3MpXHJcblx0XHRcdFx0dm4ucmVwbGFjZUFyZ3MoIGZ1bmNQcm94eVByb3BzLmFyZ3MpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5Qcm9taXNlUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMucHJvbWlzZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlXHJcblx0XHQvLyBhbiBhcnJheSBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgbWltLkNvbXBvbmVudDx7fSxUW10+LiBJbiB0aGlzIGNhc2VcclxuXHRcdC8vIHRoZXJlIGFyZSB0d28gd2F5cyB0byBzcGVjaWZ5IGNoaWxkcmVuIGluIEpTWCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRoZSBUeXBlU2NyaXB0XHJcblx0XHQvLyBjb21waWxlcjpcclxuXHRcdC8vXHQxKSA8QT57dDF9e3QyfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbdDEsIHQyXSAoYXMgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0MikgPEE+e1t0MSwgdDJdfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbW3QxLHQyXV0gKGFzIE5PVCBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHRcdFRoaXMgbG9va3MgbGlrZSBhIFR5cGVTY3JpcHQgYnVnLlxyXG5cdFx0Ly8gVGhlIHJlYWxDaGlsZHJlbiB2YXJpYWJsZSBhY2NvbW1vZGF0ZXMgYm90aCBjYXNlcy5cclxuXHRcdGxldCByZWFsQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheSggY2hpbGRyZW5bMF0pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcclxuXHRcdGlmICh0eXBlb2YgdGFnLnByb3RvdHlwZS5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmV0dXJuIG5ldyBNYW5hZ2VkQ29tcFZOKCB0YWcgYXMgbWltLklDb21wb25lbnRDbGFzcywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBuZXcgRnVuY1ZOKCB0YWcgYXMgbWltLkZ1bmNDb21wVHlwZSwgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIERFQlVHXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcblx0Ly8vICNlbmRpZlxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBhcnJheSBvZiBpdGVtcy5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGFycjogYW55W10pOiBWTltdXHJcbntcclxuXHRpZiAoYXJyLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRsZXQgbm9kZXM6IFZOW10gPSBbXTtcclxuXHRmb3IoIGxldCBpdGVtIG9mIGFycilcclxuXHR7XHJcblx0XHRsZXQgaXRlbU5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggaXRlbSk7XHJcblx0XHRpZiAoaXRlbU5vZGVzID09PSBudWxsKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGl0ZW1Ob2RlcykpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHZuIG9mIGl0ZW1Ob2RlcylcclxuXHRcdFx0XHRub2Rlcy5wdXNoKCB2bik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdG5vZGVzLnB1c2goIGl0ZW1Ob2Rlcyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbm9kZXMubGVuZ3RoID4gMCA/IG5vZGVzIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc2V0IGFzIGN1cnJlbnQgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudCgpOiBtaW0uSUNvbXBvbmVudFxyXG57XHJcblx0Ly8gdGhlIHNfY3VycmVudFZOIHNob3VsZCBwb2ludCB0byB0aGUgdmlydHVhbCBub2RlIGJlaGluZCB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LFxyXG5cdC8vIHdoaWNoIHNob3VsZCBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgY2FsbHMgdGhlIGZ1bmN0aW9uLlxyXG5cdHJldHVybiBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtFbG1BdHRyLCBBdHRyUHJvcEluZm8sIEV2ZW50UHJvcEluZm8sIEN1c3RvbUF0dHJQcm9wSW5mbywgUHJvcFR5cGUsIFByb3BJbmZvfSBmcm9tIFwiLi4vdXRpbHMvRWxtQXR0clwiXHJcbmltcG9ydCB7U3ZnRWxtc30gZnJvbSBcIi4uL3V0aWxzL1N2Z0VsbXNcIjtcclxuaW1wb3J0IHtkZWVwQ29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBET00gZWxlbWVudCBjcmVhdGVkIHVzaW5nIEpTWC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1WTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JRWxtVk5cclxue1xyXG5cdC8vIFRhZyBuYW1lIG9mIGFuIEVsZW1lbnQuXHJcblx0cHVibGljIGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC4gVGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQgd2hlbiB0aGUgbm9kZSBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0XHJcblx0Ly8gdGltZS5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgRWxlbWVudCBpcyBTVkcgKGFzIG9wcG9zZWQgdG8gSFRMTSkuIFRoZXJlIGFyZSBzb21lIFNWR1xyXG5cdC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFzIHJlZ3VsYXIgZWxlbWVudHMgKGUuZy4gPGE+KS4gVGhlcmVmb3JlLCBpbiBvcmRlciB0b1xyXG5cdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIG5vdCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBuYW1lc3BhY2VVUkkgb2YgdGhlIHBhcmVudFxyXG5cdC8vIChhbmNob3JlKSBET00gbm9kZS5cclxuXHRwdWJsaWMgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5FbG07XHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBrZXkgcHJvcGVydHkuIElmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90XHJcblx0XHRcdC8vIHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdFx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuRWxtOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVsbTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVsZWFzZXMgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMuIFNpbmNlIG1vZGVybiBicm93c2VycyBkb24ndCBsZWFrIHdoZW4gbGlzdGVuZXJzIGFyZSBub3RcclxuXHRcdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudHMoKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lLlxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtTmFtZSA9PT0gKG5ld1ZOIGFzIEVsbVZOKS5lbG1OYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgbmV3IHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBvbmVzXHJcblx0XHRsZXQgc2hvdWxkQ29tbWl0ID0gIWRlZXBDb21wYXJlKCB0aGlzLnByb3BzLCAobmV3Vk4gYXMgRWxtVk4pLnByb3BzKTtcclxuXHJcblx0XHQvLyByZW5kZXIgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgZWl0aGVyIG9sZCBvciBuZXcgbm9kZSBoYXMgY2hpbGRyZW5cclxuXHRcdGxldCBzaG91bGRSZW5kZXIgPSB0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fFxyXG5cdFx0XHRcdFx0KG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbiAmJiAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBwcm9wcyBhbmQgY2hpbGRyZW5cclxuXHRcdHRoaXMucHJvcHMgPSAobmV3Vk4gYXMgRWxtVk4pLnByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW47XHJcblxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0LCBzaG91bGRSZW5kZXIgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRuZXdFbG1WTi5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdFbG1WTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uXHJcblx0XHRcdHRoaXMucmVmID0gbmV3RWxtVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXksIHVwZGF0ZVN0YXJ0ZWd5IGFuZCBjcmVhdG9yIHByb3BlcnR5IChldmVuIGlmIHRoZVxyXG5cdFx0Ly8gdmFsdWVzIGFyZSB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IG5ld0VsbVZOLnVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIG92ZXIgdGhlIG9yaWdpbmFsIHByb3BlcnRpZXMgYW5kIHB1dHMgdGhlbSBpbnRvIHRoZSBidWNrZXRzIG9mIGF0dHJpYnV0ZXMsIGV2ZW50XHJcblx0Ly8gbGlzdGVuZXJzIGFuZCBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIHBhcnNlUHJvcHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5wcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcm9wVmFsOiBhbnksIHByb3BJbmZvOiBQcm9wSW5mbywgcHJvcFR5cGU6IFByb3BUeXBlO1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHRoZSBrZXkgcHJvcGVydHkgYmVjYXVzZSB3ZSBhbHJlYWR5IGV4dHJhY3RlZCBpdCBpbiB0aGUgY29uc3RydWN0b3JcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJvcFZhbCA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcFZhbCA9PSBudWxsIHx8IHByb3BWYWwgPT09IGZhbHNlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkLCBudWxsIGFuZCBmYWxzZVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInVwZGF0ZVN0cmF0ZWd5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciB1cGRhdGVTdHJhdGVneSBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvcGVydHkgYW5kIGRldGVybWluZSBpdHMgdHlwZSAocmVndWxhciBhdHRyaWJ1dGUsIGV2ZW50XHJcblx0XHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIG9ubHkgZm9yIHJlZ3VsYXJcclxuXHRcdFx0XHQvLyBhdHRyaWJ1dGVzLlxyXG5cdFx0XHRcdHByb3BJbmZvID0gRWxtQXR0ci5nZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lKTtcclxuXHRcdFx0XHRwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLkF0dHI7XHJcblx0XHRcdFx0aWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5hdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbywgdmFsOiBwcm9wVmFsIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5FdmVudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHt9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5DdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8gYXMgQ3VzdG9tQXR0clByb3BJbmZvLCB2YWw6IHByb3BWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuYXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhZGRFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHRldmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdHByaXZhdGUgcmVtb3ZlRXZlbnRzKCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnRzKCBuZXdFdmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkRXZlbnRzID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkRXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZEV2ZW50ID0gb2xkRXZlbnRzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdFdmVudCA9IG5ld0V2ZW50cyA/IG5ld0V2ZW50c1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0V2ZW50KVxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgb2xkRXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEV2ZW50LCBuZXdFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGV2ZW50IGxpc3RlbmVycyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3RXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEV2ZW50cyAmJiAobmFtZSBpbiBvbGRFdmVudHMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIG5ld0V2ZW50c1tuYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0V2ZW50cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBldmVudCBsaXN0ZW5lciBhcmUgZGlmZmVyZW50IGFuZCBzZXRzXHJcblx0Ly8gdGhlIHVwZGF0ZWQgdmFsdWUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZCBmYWxzZSBpZiBubyBjaGFuZ2UgaGFzXHJcblx0Ly8gYmVlbiBkZXRlY3RlZC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIG9sZEV2ZW50OiBFdmVudFJ1blRpbWVEYXRhLCBuZXdFdmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBkb3VibGUtZXF1YWwtc2lnbiBmb3IgdXNlQ2FwdHVyZSBpcyBvbiBwdXJwb3NlLCBiZWNhdXNlIHVzZUNhcHR1cmUgY2FuIGJlIHVuZGVmaW5lZCBvciBib29sZWFuXHJcblx0XHRpZiAob2xkRXZlbnQub3JnRnVuYyA9PT0gbmV3RXZlbnQub3JnRnVuYyAmJlxyXG5cdFx0XHRvbGRFdmVudC50aGF0ID09PSBuZXdFdmVudC50aGF0ICYmXHJcblx0XHRcdG9sZEV2ZW50LnVzZUNhcHR1cmUgPT0gbmV3RXZlbnQudXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IG9sZEV2ZW50LndyYXBwZXI7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBvbGRFdmVudC53cmFwcGVyLCBvbGRFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgd3JhcHBlciBhbmQgYWRkIGl0IGFzIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggbmV3RXZlbnQpO1xyXG5cdFx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdFdmVudC53cmFwcGVyLCBuZXdFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIuIFRoZSB3cmFwcGVyIGlzIGJvdW5kIHRvXHJcblx0Ly8gdGhlIGluc3RhbmNlIG9mIEVsbVZOIGFuZCB0aHVzIGNhbiBpbnRlcmNlcHQgZXhjZXB0aW9ucyBhbmQgcHJvY2VzcyB0aGVtIHVzaW5nIHRoZSBzdGFuZGFyZFxyXG5cdC8vIGVycm9yIHNlcnZpY2UuIFVubGVzcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgYWxyZWFkeSBhIGJvdW5kIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGNhbGxlZFxyXG5cdC8vIHdpdGggXCJ0aGlzXCIgc2V0IHRvIGVpdGhlciB0aGUgXCJldmVudC50aGF0XCIgb2JqZWN0IG9yLCBpZiB0aGUgbGF0dGVyIGlzIHVuZGVmaW5lZCwgdG8gdGhlXHJcblx0Ly8gXCJjcmVhdG9yXCIgb2JqZWN0LCB3aGljaCBpcyB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCBpIGl0cyByZW5kZXJcclxuXHQvLyBtZXRob2QuXHJcblx0cHJpdmF0ZSBjcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogbWltLkV2ZW50RnVuY1R5cGU8RXZlbnQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMud3JhcENhbGxiYWNrKCBldmVudC5vcmdGdW5jLCBldmVudC50aGF0ID8gZXZlbnQudGhhdCA6IHRoaXMuY3JlYXRvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBhZGRDdXN0b21BdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgY3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgY3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggaXNSZW1vdmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0N1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkQ3VzdG9tQXR0cnMgPSB0aGlzLmN1c3RvbUF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBjdXN0b20gcHJvcGVydGllcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IG9sZEN1c3RvbUF0dHIgPSBvbGRDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb25zdCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnMgPyBuZXdDdXN0b21BdHRyc1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0N1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gdGVybWluYXRlIGl0cyBoYW5kbGVyXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjdXN0b20gcHJvcGVydHkgYW5kIHJlbWVtYmVyIHRoZSBuZXcgdmFsdWVcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudXBkYXRlKCBuZXdDdXN0b21BdHRyLnZhbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdXBkYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG9sZEN1c3RvbUF0dHIuaGFuZGxlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEN1c3RvbUF0dHJzICYmIChuYW1lIGluIG9sZEN1c3RvbUF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IG5ld0N1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIG5ld0N1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHRkZWxldGUgbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1c3RvbUF0dHJzID0gbmV3Q3VzdG9tQXR0cnM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBVcGRhdGVTdHJhdGVneSBvYmplY3QgZGVmaW5pbmcgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHRwdWJsaWMgdXBkYXRlU3RyYXRlZ3k6IG1pbS5VcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gQXJyYXkgb2YgY2hpbGRyZW4gb2JqZWN0cy5cclxuXHRwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGN1c3RvbSBlbGVtZW50IHByb3BlcnRpZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBoYW5kbGVyIG9iamVjdHMgYW5kIHZhbHVlcy5cclxuXHRwcml2YXRlIGN1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggcmVndWxhciBhdHRyaWJ1dGVcclxuaW50ZXJmYWNlIEF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBhdHRyaWJ1dGUgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR2YWw6IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGV2ZW50IGxpc3RlbmVyXHJcbmludGVyZmFjZSBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGV2ZW50IC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBFdmVudFByb3BJbmZvO1xyXG5cclxuXHQvLyBPcmlnaW5hbCBldmVudCBjYWxsYmFjayBwYXNzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBldmVudCBwcm9wZXJ0eSBpbiBKU1hcclxuXHRvcmdGdW5jOiBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCB3aWxsIGJlIHJlZmVyZW5jZWQgYnkgXCJ0aGlzXCIgd2l0aGluIHRoZSBpbnZva2VkIGZ1bmN0aW9uXHJcblx0dGhhdD86IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR1c2VDYXB0dXJlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gV3JhcHBlciBmdW5jdGlvbiB0aGF0IHdlIGNyZWF0ZSBhbmQgYmluZCB0byBvdXIgbm9kZSBhbmQgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBXZSBuZWVkXHJcblx0Ly8gdGhpcyB3cmFwcGVyIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbiBpbiB0aGUgY2FsbGJhY2sgYW5kIHBhc3MgdGhlbSBvbiB0byBhbiBlcnJvclxyXG5cdC8vIGhhbmRsaW5nIHNlcnZpY2UuIFRoZSB3cmFwcGVyIGlzIG1hcmtlZCBvcHRpb25hbCBiZWNhdXNlIGl0IGlzIGNyZWF0ZWQgb25seSBpZiBhIG5ld1xyXG5cdC8vIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkOyB0aGF0IGlzLCBpZiBkdXJpbmcgdXBkYXRlLCB0aGUgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gaXMgdGhlXHJcblx0Ly8gc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGUgbmV3IHdyYXBwZXIgYmVjYXVzZSB0aGUgb2xkIG9uZSB3aWxsIGJlIHVzZWQuXHJcblx0d3JhcHBlcj86ICBtaW0uRXZlbnRGdW5jVHlwZTxFdmVudD47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBjdXN0b20gcHJvcGVydHkuXHJcbmludGVyZmFjZSBDeXN0b21BdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgY3VzdG9tIGF0dHJpYnV0ZSAtIGNhbm5vdCBiZSBudWxsXHJcblx0aW5mbzogQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBDdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG5cdHZhbDogYW55O1xyXG5cclxuXHQvLyBIYW5kbGVyIG9iamVjdCB0aGF0IGtub3dzIHRvIGRlYWwgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXHJcblx0aGFuZGxlcjogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPGFueT47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+IH07XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSwgdXNlQ2FwdHVyZTogcHJvcFZhbFsyXSBhcyBib29sZWFuIH07XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIHRoZSBwcm9wZXJ0eSBpcyBub3QgdHJlYXRlZCBhcyBhbiBldmVudCBoYW5kbGVyXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge3NfY3VycmVudENsYXNzQ29tcH0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBjdXN0b20gcHJvcGVydHkgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogbWltLkZ1bmNQcm94eVByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jUHJveHk7XHJcblx0XHR0aGlzLmZ1bmMgPSBwcm9wcy5mdW5jO1xyXG5cdFx0dGhpcy50aGlzQXJnID0gcHJvcHMudGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0XHR0aGlzLmFyZ3MgPSBwcm9wcy5hcmdzO1xyXG5cdFx0dGhpcy5hcmdzUmVwbGFjZWQgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHJcblx0XHQvLyBpZiBhIGtleSB3YXMgbm90IHByb3ZpZGVkIHdlIHVzZSB0aGUgdmFsdWUgb2YgdGhpc0FyZyAod2hpY2ggbWlnaHQgYmUgdGhlIGN1cnJlbnRcclxuXHRcdC8vIGNvbXBvbmVudCkgYXMgYSBrZXkuIElmIHRoYXQgaXMgdW5kZWZpbmVkIHRvbyB3ZSB1c2UgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhcyBhIGtleS5cclxuXHRcdHRoaXMubGlua0tleSA9IHByb3BzLmtleSB8fCB0aGlzLnRoaXNBcmcgfHwgdGhpcy5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyByZXBsYWNlQXJncyggYXJnczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hcmdzID0gYXJncztcclxuXHRcdHRoaXMuYXJnc1JlcGxhY2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByZW5kZXJPblVwZGF0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYXJnc1JlcGxhY2VkOyB9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbiBwcm94eSBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHRoaXMuYXJnc1JlcGxhY2VkID0gZmFsc2U7XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLnRoaXNBcmcsIHRoaXMuYXJncyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5saW5rTm9kZVRvRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bmxpbmtOb2RlRnJvbUZ1bmMoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFuZCB0aGUgc2FtZSB0aGlzQXJnIHByb3BlcnR5XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSBuZXdGdW5jUHJveHlWTi5mdW5jICYmIHRoaXMudGhpc0FyZyA9PT0gbmV3RnVuY1Byb3h5Vk4udGhpc0FyZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNQcm94eVZOLmtleTtcclxuXHRcdHRoaXMubGlua0tleSA9IG5ld0Z1bmNQcm94eVZOLmxpbmtLZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBhcmd1bWVudHMgZnJvbSB0aGUgbmV3IG5vZGU7IHRoZSBmdW5jdGlvbiBpdHNlbGYgYW5kIFwidGhpc0FyZ1wiIHJlbWFpbiB0aGUgc2FtZS5cclxuXHRcdHRoaXMuYXJncyA9IG5ld0Z1bmNQcm94eVZOLmFyZ3M7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBmaW5kVk4oIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnkpOiBGdW5jUHJveHlWTlxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBrZXkgaXMgdW5kZWZpbmVkLCB3ZSB1c2UgdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGZcclxuXHRcdGxldCBsaW5rS2V5OiBhbnkgPSBrZXkgfHwgdGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXAgfHwgZnVuYztcclxuXHJcblx0XHQvLyB0cnkgdG8gZmluZCB0aGUga2V5IGluIHRoZSBtYXAgb24gdGhlIGZ1bmN0aW9uIG9iamVjdDsgaWYgbm90IGZvdW5kLCBkbyBub3RoaW5nXHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdHJldHVybiBtYXBLZXlzVG9Ob2RlcyAmJiBtYXBLZXlzVG9Ob2Rlcy5nZXQoIGxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhlIG5vZGVcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggZnVuYywga2V5LCB0aGlzQXJnKTtcclxuXHRcdGlmICghdm4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5hcmdzID0gYXJncztcclxuXHRcdHZuLmFyZ3NSZXBsYWNlZCA9IHRydWU7XHJcblx0XHR2bi5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgbGlua05vZGVUb0Z1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBmdW5jOiBhbnkgPSB0aGlzLmZ1bmM7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdGZ1bmNbXCJfX2tleXMtdG8tbm9kZXNcIl0gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBmdW5jOiBhbnkgPSB0aGlzLmZ1bmM7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdGlmIChtYXBLZXlzVG9Ob2RlcylcclxuXHRcdFx0bWFwS2V5c1RvTm9kZXMuZGVsZXRlKCB0aGlzLmxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmdcclxuXHRwcml2YXRlIGZ1bmM6IEZ1bmN0aW9uO1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYXJndW1lbnRzIGhhdmUgYmVlbiByZXBsYWNlZC4gVGhpcyBpcyBuZWVkZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcclxuXHQvLyB0aGUgbm9kZSBzaG91bGQgYmUgcmUtcmVuZGVyZWQ7IHRoYXQgaXMsIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdHByaXZhdGUgYXJnc1JlcGxhY2VkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgZnVuY3Rpb24gYS5rLmEuIHN0YXRlbGVzcyBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1ZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgbm9kZSBjb3JyZXNwb25kcyB0byBhIGZyYWdtZW50IHBsYWNlaG9sZGVyLiAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgaXNWTmFGcmFnbWVudCggdm46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAodm4gYXMgRnVuY1ZOKS5mdW5jID09PSBtaW0uRnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiBtaW0uRnVuY0NvbXBUeXBlLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkZ1bmNDb21wO1xyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleVxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHRcdC8vIERPTSB0cmVlLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMuZnVuYyA9IG5ld0Z1bmNWTi5mdW5jO1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5ld0Z1bmNWTi5wcm9wcztcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIGZvciBhIHN0YXRlbGVzcyBjb21wb25lbnQuIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIGR1cmluZyB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXHJcblx0cHJpdmF0ZSBmdW5jOiBtaW0uRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOfSBmcm9tIFwiLi9DbGFzc0NvbXBWTlwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBJbnN0YW5jZVZOIGlzIGEgbm9kZSB0aGF0IGhvbGRzIGFuIGluc3RhbmNlIG9mIGFuIElDb21wb25lbnQtaW1wbGVtZW50aW5nIG9iamVjdC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgbWltLklJbmRlcGVuZGVudENvbXBWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXA6IG1pbS5JQ29tcG9uZW50KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5JbmRlcGVuZGVudENvbXA7XHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZSA/IHRoaXMuY29tcC5kaXNwbGF5TmFtZSA6IHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLiBUaGUgaW5zdGFuY2Ugb2Ygb3VyIGNvbXBvbmVudCBpcyB0aGUga2V5LlxyXG5cdHB1YmxpYyBnZXQga2V5KCk6IGFueSB7IHJldHVybiB0aGlzLmNvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb3BvbmVudCBpbnN0YW5jZSBhcmUgZGlmZmVyZW50LCB0aGVuIHdlIG5lZWQgdG8gcHJlcGFyZSB0aGUgbmV3IGluc3RhbmNlIGZvclxyXG5cdFx0Ly8gbW91bnRpbmcgYW5kIHRoZSBvbGQgb25lIGZvciB1bm1vdW50aW5nLlxyXG5cdFx0aWYgKG5lZWRzVXBkYXRpbmcpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIG5ld0NvbXApO1xyXG5cdFx0XHR0aGlzLndpbGxVbm1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0XHRcdHRoaXMuY29tcCA9IG5ld0NvbXA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgbmVlZHNVcGRhdGluZyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpdCB3aWxsIGJlIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsTW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29tcC52biA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKGNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHRjb21wLndpbGxNb3VudCgpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgdW5tb3VudGVkLlxyXG5cdHByaXZhdGUgd2lsbFVubW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGNvbXAud2lsbFVubW91bnQpXHJcblx0XHRcdGNvbXAud2lsbFVubW91bnQoKTtcclxuXHJcblx0XHRjb21wLnZuID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk59IGZyb20gXCIuL0NsYXNzQ29tcFZOXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTWFuYWdlZENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgbWltLklNYW5hZ2VkQ29tcFZOXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHVibGljIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wO1xyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lIHBsdXMga2V5IGlmIGRlZmluZWQuIE5vdGUgdGhhdCBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdC8vIG1pZ2h0IG5vdCBiZSBjcmVhdGVkIHlldCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdFx0aWYgKHRoaXMuY29tcCAmJiB0aGlzLmNvbXAuZGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCggcGFyZW50LCBjcmVhdG9yKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC52biA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgY29tcG9uZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRzIChhbmQvb3IgZWxlbWVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbFVubW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdHRoaXMuY29tcC52biA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY29tcCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGlzIHRoZSBzYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wQ2xhc3MgPT09IChuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOKS5jb21wQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhXHJcblx0Ly8gVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGluZyBzdWItbm9kZXMgaXMgbmVjZXNzYXJ5IGFuZFxyXG5cdC8vIGZhbHNlIG90aGVyd2lzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0NsYXNzVk4gPSBuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOO1xyXG5cclxuXHRcdC8vIGxldCB0aGUgY29tcG9uZW50IGtub3cgYWJvdXQgdGhlIG5ldyBwcm9wZXJ0aWVzIChpZiBpdCBpcyBpbnRlcmVzdGVkIGluIHRoZW0pXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLmNvbXAuc2hvdWxkVXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNob3VsZFJlbmRlciA9IHRoaXMuY29tcC5zaG91bGRVcGRhdGUoIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3Q2xhc3NWTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBvYmplY3RcclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdDbGFzc1ZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0NsYXNzVk4ucmVmID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHdlIGtub3cgdGhhdCBvdXIgcmVmZXJlbmNlIGlzIGRlZmluZWQsIHNvIHVuc2V0IGl0XHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0NsYXNzVk4ua2V5O1xyXG5cclxuXHRcdC8vIHNoYWxsb3cgY29weSB0aGUgbmV3IHByb3BlcnRpZXMgZnJvbSB0aGUgb3RoZXIgbm9kZSB0byBvdXIgb2JqZWN0LiBUaGlzIGlzIG5lZWRlZFxyXG5cdFx0Ly8gYmVjYXVzZSB0aGUgY29tcG9uZW50IGdvdCBvdXIgcHJvcHMgb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgd2lsbCBrZWVwXHJcblx0XHQvLyB3b3JraW5nIHdpdGggaXQgLSBlc3BlY2lhbGx5IGlmIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kLlxyXG5cdFx0T2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaCgga2V5ID0+IGRlbGV0ZSB0aGlzLnByb3BzW2tleV0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5wcm9wcywgbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgc2hvdWxkUmVuZGVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKiBcclxuICogVGhlIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlcyB0aGF0IHVzZSB0aGlzIGZ1bmN0aW9uIGlzIGtlcHQgaW4gYSBtYXAgZnJvbSB0aGVcclxuICoga2V5cyB0byB0aGUgbm9kZXMuIFRoZSBtYXAgaXMgc3RvcmVkIGluIGEgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VQcm94eVZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IG1pbS5Qcm9taXNlUHJveHlQcm9wcywgY2hpbGRyZW4/OiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuUHJvbWlzZVByb3h5O1xyXG5cdFx0dGhpcy5wcm9taXNlID0gcHJvcHMucHJvbWlzZTtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IHByb3BzLmVycm9yQ29udGVudEZ1bmM7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjaGlsZHJlbjtcclxuXHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHByb21pc2UgaXMgc2V0dGxlZCAoc3VjY2Vzc2Z1bGx5IG9yIG5vdCkuXHJcblx0cHVibGljIGdldCBpc1NldHRsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb21pc2UgPT0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IG5hbWUgPSBcIlByb21pc2VcIjtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2F0Y2hQcm9taXNlKCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgcHJvbWlzZSBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLnByb21pc2UgPT09IG5ld1Byb21pc2VQcm94eVZOLnByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdQcm9taXNlUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBuZXdQcm9taXNlUHJveHlWTi5jb250ZW50O1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gbmV3UHJvbWlzZVByb3h5Vk4uZXJyb3JDb250ZW50RnVuYztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYWl0cyBmb3IgdGhlIHByb21pc2UgdG8gc2V0dGxlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBhd2FpdCB0aGlzLnByb21pc2U7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBzdGlsbCBtb3VudGVkLCByZXF1ZXN0IHVwZGF0ZVxyXG5cdFx0XHRpZiAodGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgYWxyZWFkeSB1bm1vdW50ZWQsIGRvIG5vdGhpbmdcclxuXHRcdFx0aWYgKCF0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lcnJvckNvbnRlbnRGdW5jKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5lcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIpO1xyXG5cclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBQcm9taXNlIHRoYXQgdGhpcyBub2RlIHdhdGNoZXMuXHJcblx0cHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8vIENvbnRlbnQgdGhhdCB0aGlzIG5vZGUgZGlzcGxheXMuIEluaXRpYWxseSB0aGlzIGNvbnRlbnQgaXMgc2V0IHRvIHByb3BzLmNoaWxkcmVuLiBXaGVuXHJcblx0Ly8gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQsIHRoZSBjb250ZW50IGlzIHNldCB0byB0aGUgcmVzb2x2ZWQgdmFsdWUuIElmIHRoZSBwcm9taXNlIGlzXHJcblx0Ly8gcmVqZWN0ZWQgYW5kIHRoZSBlcnJvckNvbnRlbnRGdW5jIGlzIGRlZmluZWQsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCBpdHMgcmV0dXJuXHJcblx0Ly8gdmFsdWUgaXMgdXNlZCBhcyBjb250ZW50LlxyXG5cdHByaXZhdGUgY29udGVudD86IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBlcnJvckNvbnRlbnRGdW5jPzogKCBlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIGV4cG9ydCBmdW5jdGlvbmF0aW9ucyBhbmQgc3Vic2NyaXB0aW9ucy4gVGhlIHNhbWVcclxuLy8gc2VydmljZSBjYW4gYmUgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHRvIGJ5IG11bHRpcGxlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU2VydmljZUluZm9cclxue1xyXG5cdHB1Ymxpc2hpbmdWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcblx0c3Vic2NyaWJlZFZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxufVxyXG5cclxuLy8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNldHMgb2YgdmlydHVhbCBub2RlcyB0aGF0IHN1YnNjcmliZWQgdG8gdGhpcyBzZXJ2aWNlLlxyXG5sZXQgc19zZXJ2aWNlSW5mb3MgPSBuZXcgTWFwPHN0cmluZyxTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgcHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0e1xyXG5cdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0c19zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0fVxyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuYWRkKCBzb3VyY2VWTik7XHJcblxyXG5cdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyB1bnB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0e1xyXG5cdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0c19zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0fVxyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuYWRkKCBzb3VyY2VWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1Jvb3RWTn0gZnJvbSBcIi4vUm9vdFZOXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdEVycm9yVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwcml2YXRlIHJvb3RWTjogUm9vdFZOO1xyXG5cdHByaXZhdGUgZXJyOiBhbnk7XHJcblx0cHJpdmF0ZSBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCByb290Vk46IFJvb3RWTiwgZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yb290Vk4gPSByb290Vk47XHJcblx0XHR0aGlzLmVyciA9IGVycjtcclxuXHRcdHRoaXMucGF0aFN0cmluZyA9IHBhdGggPyBwYXRoLmpvaW4oIFwiIFxcdTIxOTIgXCIpIDogXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdDxkaXY+e3RoaXMuZXJyLm1lc3NhZ2V9PC9kaXY+XHJcblx0XHRcdDxkaXY+e3RoaXMucGF0aFN0cmluZ308L2Rpdj5cclxuXHRcdFx0PGhyIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fS8+XHJcblx0XHRcdDxidXR0b24gY2xpY2s9e3RoaXMub25SZXN0YXJ0fT5SZXN0YXJ0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXN0YXJ0ID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJvb3RWTi5yZXN0YXJ0KCk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RXYWl0aW5nVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBcIkxvYWRpbmcgLi4uXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7dXBkYXRlTm9kZVN5bmMsIHJlcXVlc3ROb2RlVXBkYXRlfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5pbXBvcnQge0ROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge1Jvb3RFcnJvclVJLCBSb290V2FpdGluZ1VJfSBmcm9tIFwiLi9Sb290VUlcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBSb290Vk4gY2xhc3MgaXMgdXNlZCBhcyBhIHRvcC1sZXZlbCB2aXJ0dWFsIG5vZGUgZm9yIGFsbCByZW5kZXJlZCB0cmVlcy4gUm9vdFZOIHNlcnZlc1xyXG4vLyBhcyBhbiBlcnJvciBib3VuZGFyeSBvZiBsYXN0IHJlc29ydC4gV2hlbiBpdCBjYXRjaGVzIGFuIGVycm9yIHRoYXQgd2Fzbid0IGNhdWdodCBieSBhbnlcclxuLy8gZGVzY2VuZGFuZCBub2RlLCBpdCBkaXNwbGF5cyBhIHNpbXBsZSBVSSB0aGF0IHNob3dzIHRoZSBlcnJvciBhbmQgYWxsb3dzIHRoZSB1c2VyIHRvIHJlc3RhcnQuXHJcbi8vIFJvb3RWTiBhbHNvIG1hbmFnZXMgc2VydmljZSBwdWJsaXNoZXJzIGFuZCBzdWJzY3JpYmVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBSb290Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlJvb3Q7XHJcblx0XHR0aGlzLmFuY2hvckROID0gYW5jaG9yRE47XHJcblx0XHR0aGlzLmRlcHRoID0gMDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LlJvb3Q7IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJSb290XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBjb250ZW50IHRvIGJlIHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlIGFuZCB0cmlnZ2VycyB1cGRhdGUuXHJcblx0cHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmIChzeW5jKVxyXG5cdFx0XHR1cGRhdGVOb2RlU3luYyggdGhpcyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVycm9yVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVUk7XHJcblx0XHRlbHNlIGlmICh0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMud2FpdGluZ1VJO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXlzIHRoZSBjb250ZW50IG9yaWdpbmFsbHkgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIGJlIHVwZGF0ZWRcclxuXHRcdHRoaXMuZXJyb3JVSSA9IHVuZGVmaW5lZDtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgZXJyb3JVSTogUm9vdEVycm9yVUk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZ1VJOiBSb290V2FpdGluZ1VJO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc19taW1ibEFuY2hvclByb3BOYW1lID0gXCJfX21pbWJsQW5jaG9yUHJvcE5hbWVfX1wiO1xyXG5cclxuXHJcblxyXG4vLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG4vLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGEgc3luY2hyb25vdXMgd2F5LlxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRSb290U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlciBzeW5jaHJvbm91cyB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3RTeW5jLlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3RTeW5jKCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIHRydWUpO1xyXG5cdHJvb3RWTi50ZXJtKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIGZhbHNlKTtcclxuXHRyb290Vk4uc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoICgpID0+IHJvb3RWTi53aWxsVW5tb3VudCgpICk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIGdldEZpcnN0RE4sIGdldExhc3RETiwgZ2V0SW1tZWRpYXRlRE5zLCBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiwgZ2V0Vk5QYXRofSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5pbXBvcnQge1ZORGlzcEFjdGlvbiwgVk5EaXNwLCBWTkRpc3BHcm91cH0gZnJvbSBcIi4vVk5EaXNwXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlciBpbmRpY2F0aW5nIGluIHdoYXQgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBjeWNsZSB3ZSBjdXJyZW50bHkgcmVzaWRlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZW51bSBTY2hlZHVsZXJTdGF0ZVxyXG57XHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBub3Qgd2l0aGluIHRoZSB1cGRhdGUgY3ljbGVcclxuXHRJZGxlID0gMCxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGJlZm9yZSB1cGRhdGluZyBub2Rlc1xyXG5cdEJlZm9yZVVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyB1cGRhdGluZyBub2Rlc1xyXG5cdFVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGFmdGVyIHVwZGF0aW5nIG5vZGVzXHJcblx0QWZ0ZXJVcGRhdGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsZWRGdW5jTWFwIGNsYXNzIHJlcHJlc2VudHMgYSBtYXAgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBleGVjdXRlZCBlaXRoZXIgYmVmb3JlXHJcbiAqIG9yIGFmdGVyIGNvbXBvbmVudCB1cGRhdGVzLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmQgdGhlIHZhbHVlcyBhcmVcclxuICogdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS4gQm90aFxyXG4gKiB0aGUga2V5cyBhbmQgdGhlIHZhbHVlcyBoYXZlIHRoZSBzYW1lIHR5cGU6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZS5cclxuICovXHJcbmNsYXNzIFNjaGVkdWxlZEZ1bmNNYXAgZXh0ZW5kcyBNYXA8bWltLlNjaGVkdWxlZEZ1bmNUeXBlLG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuLy8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuLy8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcbi8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuLy9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcbi8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcbi8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5sZXQgc192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUgdmFsdWVzIGluIHRoZSBtYXAgYXJlIG9iamVjdHMgdGhhdCB3aWxsXHJcbi8vIGJlIHVzZWQgcyB0aGUgXCJ0aGlzXCIgdmFsdWUgaW4gdGhlIGNhbGxiYWNrLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIHZhbHVlcyBpbiB0aGUgbWFwIGFyZSBvYmplY3RzIHRoYXQgd2lsbFxyXG4vLyBiZSB1c2VkIHMgdGhlIFwidGhpc1wiIHZhbHVlIGluIHRoZSBjYWxsYmFjay5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IG1pbS5JQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG5cclxuLy8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vZGVTeW5jKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0bGV0IG9sZFN0YXRzID0gRGV0YWlsZWRTdGF0cy5zdGF0cztcclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdGxldCB2bnM6IFZOW11bXSA9IG5ldyBBcnJheSgxKTtcclxuXHR2bnNbMF0gPSBbdm5dO1xyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdHBlcmZvcm1Db21taXRQaGFzZSggcGVyZm9ybVJlbmRlclBoYXNlKCB2bnMpKTtcclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gb2xkU3RhdHM7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZFxyXG57XHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdGNvbnNvbGUud2FybiggYFVwZGF0ZSByZXF1ZXN0ZWQgZm9yIHZpcnR1YWwgbm9kZSAnJHtnZXRWTlBhdGgodm4pLmpvaW4oXCItPlwiKX0nIHRoYXQgZG9lc24ndCBoYXZlIGFuY2hvciBET00gbm9kZWApXHJcblxyXG5cdC8vIGFkZCB0aGlzIG5vZGUgdG8gdGhlIG1hcCBvZiBub2RlcyBmb3Igd2hpY2ggZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlbWVudCBvclxyXG5cdC8vIGRlbGV0aW9uIGlzIHNjaGVkdWxlZC4gTm90ZSB0aGF0IGEgbm9kZSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbmNlIGluIHRoZSBtYXAgbm9cclxuXHQvLyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgaXQgY2FsbHMgcmVxdWVzdFVwZGF0ZSgpLlxyXG5cdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlLmFkZCggdm4pO1xyXG5cclxuXHQvLyBpZiB0aGlzIGlzIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50IGFuZCBpdCBoYXMgYmVmb3JlVXBkYXRlIGFuZC9vciBhZnRlclVwZGF0ZSBtZXRob2RzXHJcblx0Ly8gaW1wbGVtZW50ZWQsIHNjaGVkdWxlIHRoZWlyIGV4ZWN1dGlvbnMuIE5vdGUgdGhhdCB0aGUgXCJiZWZvcmVVcGRhdGVcIiBtZXRob2QgaXMgbm90XHJcblx0Ly8gc2NoZWR1bGVkIGlmIHRoZSBjdXJyZW50IHNjaGVkdWxlciBzdGF0ZSBpcyBCZWZvcmVVcGRhdGUuIFRoaXMgaXMgYmVjYXVzZSB0aGUgY29tcG9uZW50XHJcblx0Ly8gd2lsIGJlIHVwZGF0ZWQgaW4gdGhlIGN1cnJlbnQgY3ljbGUgYW5kIHRoZXJlIGlzIGFscmVhZHkgbm8gdGltZSB0byBleGVjdXRlIHRoZSBcImJlZm9yZVxyXG5cdC8vIHVwZGF0ZVwiIG1ldGhvZC5cclxuXHRpZiAodm4udHlwZSA9PT0gbWltLlZOVHlwZS5JbmRlcGVuZGVudENvbXAgfHwgdm4udHlwZSA9PT0gbWltLlZOVHlwZS5NYW5hZ2VkQ29tcClcclxuXHR7XHJcblx0XHRsZXQgY29tcCA9ICh2biBhcyBhbnkgYXMgbWltLklDbGFzc0NvbXBWTikuY29tcDtcclxuXHRcdGlmIChjb21wLmJlZm9yZVVwZGF0ZSAmJiBzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBjb21wLmJlZm9yZVVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHJcblx0XHRpZiAoY29tcC5hZnRlclVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggY29tcC5hZnRlclVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHR9XHJcblxyXG5cdC8vIHRoZSB1cGRhdGUgaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlIGR1cmluZyBhXHJcblx0Ly8gXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uLlxyXG5cdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuLy8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbiwgdGhhdDogb2JqZWN0LCB2bjogbWltLklWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGF0LCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGF0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGEgY2FsbGJhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9ucyBmcm9tIHRoZVxyXG4gKiBjYWxsYmFjayBhbmQgcGFzcyBpdCB0byB0aGUgXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZS4gVGhlIGZ1bmN0aW9uIGlzIGJvdW5kIHRvICB0aGUgdmlydHVhbFxyXG4gKiBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlXHJcbiAqIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmVcclxuICogYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpblxyXG4gKiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcclxuICogaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci5cclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWRcclxuXHRsZXQgY3VycmVudFZOID0gc19jdXJyZW50Vk47XHJcblx0c19jdXJyZW50Vk4gPSB0aGlzO1xyXG5cdGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgPyAoc19jdXJyZW50Vk4gYXMgYW55KS5jb21wIDogc19jdXJyZW50Vk4uY3JlYXRvcjtcclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW3RoYXQsIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiB0aGF0ID8gb3JnQ2FsbGJhY2suYXBwbHkoIHRoYXQsIHJlc3QpIDogb3JnQ2FsbGJhY2soIC4uLnJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcylcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdGhpcykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG5cdFx0Ly8gcmVzdG9yZSB0aGUgY3VycmVudCBWTiB0byB0aGUgcmVtZW1iZXJlZCB2YWx1ZTtcclxuXHRcdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdFx0c19jdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5sZXQgb25TY2hlZHVsZWRGcmFtZSA9ICgpOiB2b2lkID0+XHJcbntcclxuXHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBhZnRlciB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdXBkYXRlIGN5Y2xlICR7c19jdXJyZW50VGlja306IGApO1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGludGVybmFsIHNldCBvZiBub2RlcyBhbmQgcmUtY3JlYXRlIGl0IHNvIHRoYXQgaXQgaXMgcmVhZHkgZm9yIG5ld1xyXG5cdFx0Ly8gdXBkYXRlIHJlcXVlc3RzLiBBcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBhbmQgcGVyZm9ybSB1cGRhdGVzLlxyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdHBlcmZvcm1Db21taXRQaGFzZSggcGVyZm9ybVJlbmRlclBoYXNlKCBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUpKSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQWZ0ZXJVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcbi8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG4vL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcbi8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG4vL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG4vLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuLy8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuZnVuY3Rpb24gYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcbntcclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0bGV0IGxhYmVsID0gYGFycmFuZ2luZyAke3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplfSBub2RlcyBieSBkZXB0aGA7XHJcblx0XHRjb25zb2xlLnRpbWUoIGxhYmVsKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIGNyZWF0ZSBhIHNwYXJzZSBhcnJheSBvZiBjZXJ0YWluIHJlYXNvbmFibGUgc2l6ZS4gSWYgd2UgaGF2ZSBkZXB0aHMgZ3JlYXRlciB0aGFuIHRoaXMsXHJcblx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIHBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0bGV0IHZuc0J5RGVwdGg6IFZOW11bXSA9IG5ldyBBcnJheTxWTltdPigxMDApO1xyXG5cdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdHtcclxuXHRcdGxldCBhcnIgPSB2bnNCeURlcHRoW3ZuLmRlcHRoXTtcclxuXHRcdGlmICghYXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2godm4pO1xyXG5cdH0pO1xyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS50aW1lRW5kKCBsYWJlbCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2xlYXIgdGhlIGZsYWcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGZvciB0aGUgbm9kZVxyXG5cdFx0XHR2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuXHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGRpc3AgPSBuZXcgVk5EaXNwKCB2biwgVk5EaXNwQWN0aW9uLlVua25vd24sIHZuKTtcclxuXHRcdFx0dXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHQvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHRcdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgc19jdXJyZW50Vk4gPyBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSA6IG51bGwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNfY3VycmVudFZOID0gbnVsbDtcclxuXHR9KX0pO1xyXG5cclxuXHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuLy8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuZnVuY3Rpb24gcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIGRvbid0IHVudGljaXBhdGUgYW55IGV4Y2VwdGlvbnMgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGludm9rZSAzcmQtcGFydHkgY29kZSBoZXJlLlxyXG5cdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBTY2hlZHVsZWRGdW5jTWFwLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRsZXQgY3VycmVudENsYXNzQ29tcCA9IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRpZiAoKHZuIGFzIGFueSkuY29tcClcclxuXHRcdHNfY3VycmVudENsYXNzQ29tcCA9ICh2biBhcyBhbnkpLmNvbXA7XHJcblxyXG5cdGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZyAmJiB2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaW1wbGVtZW50IGByZW5kZXJgLCB0aGUgbm9kZSBuZXZlciBoYXMgYW55IHN1Yi1ub2RlcyAoZS5nLiB0ZXh0IG5vZGVzKVxyXG5cdGlmICh2bi5yZW5kZXIpXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZyAmJiB2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0Y3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBJZiB0aGlzIG5vZGUgZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGVpdGhlciBieSB0aGlzXHJcblx0Ly8gbm9kZSBvciBieSBvbmUgb2YgaXRzIHN1Yi1ub2RlcywgdGhpcyBsaW5lIGlzIG5vdCBleGVjdXRlZCBhbmQgdGh1cywgc19jdXJyZW50Vk5cclxuXHQvLyB3aWxsIHBvaW50IHRvIG91ciBub2RlIHdoZW4gdGhlIGV4Y2VwdGlvbiBpcyBjYXVnaHQuXHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0c19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuZnVuY3Rpb24gY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyB0aGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgdGhlIG5vZGUgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuXHR2bi5zdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRpZiAodm4uc3ViTm9kZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0dm4ua2V5ZWRTdWJOb2RlcyA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG5cclxuXHRcdGxldCBwcmV2Vk46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHJcblx0XHRcdGlmICh2bi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHZuLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0aWYgKHByZXZWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHByZXZWTi5uZXh0ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5wcmV2ID0gcHJldlZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2Vk4gPSBzdm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBtb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuXHRsZXQgb3duRE4gPSB2bi5tb3VudCA/IHZuLm1vdW50KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgb3VyIG93biBET00gbm9kZSwgYWRkIGl0IHVuZGVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdGlmIChvd25ETilcclxuXHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gaWYgdGhlIG5vZGUgaGFzIHN1Yi1ub2RlcywgYWRkIERPTSBub2RlcyBmb3IgdGhlbS4gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93blxyXG5cdC8vIERPTSBub2RlIHVzZSBpdCBhcyBhbiBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdGxldCBuZXdBbmNob3JETiA9IG93bkROID8gb3duRE4gOiBhbmNob3JETjtcclxuXHRcdGxldCBuZXdCZWZvcmVETiA9IG93bkROID8gbnVsbCA6IGJlZm9yZUROO1xyXG5cclxuXHRcdC8vIG1vdW50IGFsbCBzdWItbm9kZXNcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y3JlYXRlUGh5c2ljYWwoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgY2FsbHMgd2lsbFVubW91bnQgb24gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gcHJlRGVzdHJveSggdm46IFZOKVxyXG57XHJcblx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0cHJlRGVzdHJveSggc3ZuKTtcclxuXHR9XHJcblxyXG5cdGlmICh2bi53aWxsVW5tb3VudClcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyB3aWxsVW5tb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYE5vZGUgJHt2bi5uYW1lfSB0aHJldyBleGNlcHRpb24gJyR7ZXJyLm1lc3NhZ2V9JyBpbiB3aWxsVW5tb3VudGApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lQaHlzaWNhbCggdm46IFZOKVxyXG57XHJcblx0Ly8gZ2V0IHRoZSBET00gbm9kZSBiZWZvcmUgd2UgY2FsbCB1bm1vdW50LCBiZWNhdXNlIHVubW91bnQgd2lsbCBjbGVhciBpdC5cclxuXHRsZXQgb3duRE4gPSB2bi5vd25ETjtcclxuXHJcblx0aWYgKHZuLnVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgdW5tb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdFx0dm4udW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0Ly8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNlIGludG8gc3ViLW5vZGVzLCBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50LlxyXG5cdGlmIChvd25ETilcclxuXHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHQvLyBlYXNpZXIuXHJcblx0XHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSlcclxuXHRcdFx0ZGVzdHJveVBoeXNpY2FsKCB2bi5zdWJOb2Rlc1tpXSk7XHJcblx0fVxyXG5cclxuXHR2bi50ZXJtKCk7XHJcblxyXG5cdHZuLmFuY2hvckROID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG4vLyBpbnZva2VkIHdoZW4gYSBub2RlIGlzIGJlaW5nIHVwZGF0ZWQgZWl0aGVyIGFzIGEgcmVzdWx0IG9mIHVwZGF0ZU1lIGludm9jYXRpb24gb3IgYmVjYXVzZVxyXG4vLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuLy8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG4vLyB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIHJlbmRlclxyXG4vLyBhZ2Fpbjsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0XHJcbi8vIGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiB1cGRhdGVWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuXHQvLyBsZXQgdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydCA/IGRpc3AubmV3Vk4gOiBkaXNwLm9sZFZOO1xyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0bGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0aWYgKCh2biBhcyBhbnkpLmNvbXApXHJcblx0XHRzX2N1cnJlbnRDbGFzc0NvbXAgPSAodm4gYXMgYW55KS5jb21wO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHR1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHR7XHJcblx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHR1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0fVxyXG5cclxuXHQvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG5cdC8vIHJlbmRlcmluZyBhZ2FpbiBpbiB0aGlzIGN5Y2xlLlxyXG5cdHZuLmxhc3RVcGRhdGVUaWNrID0gc19jdXJyZW50VGljaztcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkIG5vZGUgYWZ0ZXIgcHJvY2Vzc2luZyBpdHMgc3ViLW5vZGVzXHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0c19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBvbiB0aGUgc3ViLW5vZGVzIG9mIHRoZSBub2RlLCB3aGljaCBpcyBwYXNzZWQgYXNcclxuLy8gdGhlIG9sZFZOIG1lbWJlciBvZiB0aGUgVk5EaXNwIHN0cnVjdHVyZS5cclxuZnVuY3Rpb24gdXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuXHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50IGFuZCBidWlsZCBhcnJheSBvZiBkaXNwb3NpdGlvbnMgb2JqZWN0cyBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRkaXNwLmJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucygpO1xyXG5cclxuXHQvLyBmb3Igbm9kZXMgdG8gYmUgcmVtb3ZlZCwgY2FsbCB3aWxsVW5tb3VudFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0cHJlRGVzdHJveSggc3ZuKTtcclxuXHR9XHJcblxyXG5cdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZOOiBWTiwgbmV3Vk46IFZOO1xyXG5cdFx0bGV0IHBhcmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pICYmIG9sZFZOLnByZXBhcmVVcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgcHJlcGFyZVVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AudXBkYXRlRGlzcCA9IG9sZFZOLnByZXBhcmVVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0dXBkYXRlVmlydHVhbCggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdFx0Y3JlYXRlVmlydHVhbCggbmV3Vk4sIHBhcmVudFZOKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcGVyZm9ybXMgRE9NIHVwZGF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiB1cGRhdGVQaHlzaWNhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHQvLyB3YXMgbm8gY291bnRlcnBhcnQgbmV3IG5vZGUgdGhhdCB3b3VsZCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpLiBXZSBuZWVkIHRvIHJlbW92ZVxyXG5cdC8vIG9sZCBub2RlcyBmaXJzdCBiZWZvcmUgd2Ugc3RhcnQgaW5zZXJ0aW5nIG5ldyAtIG9uZSByZWFzb24gaXMgdG8gcHJvcGVybHkgbWFpbnRhaW5cclxuXHQvLyByZWZlcmVuY2VzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0ZGVzdHJveVBoeXNpY2FsKCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IHRoZSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZyB1cGRhdGVkLiBUaGlzIGlzIGFsd2F5cyB0aGUgb2xkVk4gbWVtYmVyIG9mXHJcblx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGl0IG1pZ2h0IGhhcHBlbiB0aGF0IHRoZSBub2RlIGJlaW5nIHVwZGF0ZWQgd2FzIGFscmVhZHkgZGVsZXRlZCBieSBpdHMgcGFyZW50LiBDaGVja1xyXG5cdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0Ly8gYW5jaG9yIHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2RlcyB0b28uXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblx0bGV0IGFuY2hvckROID0gb3duRE4gIT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIGlmIHRoaXMgdmlydHVhbCBub2RlIGRvZXNuJ3QgZGVmaW5lIGl0cyBvd24gRE9NIG5vZGUgKHRydWUgZm9yIGNvbXBvbmVudHMpLCB3ZSB3aWxsXHJcblx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRsZXQgYmVmb3JlRE4gPSBvd25ETiAhPSBudWxsID8gbnVsbCA6IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2biwgYW5jaG9yRE4pO1xyXG5cclxuXHQvLyByZS1jcmVhdGUgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHR2bi5zdWJOb2RlcyA9IGRpc3Auc3ViTm9kZURpc3BzID8gbmV3IEFycmF5PFZOPihkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGgpIDogdW5kZWZpbmVkO1xyXG5cdHZuLmtleWVkU3ViTm9kZXMgPSB2bi5zdWJOb2RlcyAhPT0gdW5kZWZpbmVkICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDEgPyBuZXcgTWFwPGFueSxWTj4oKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcGVyZm9ybSB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGVpdGhlciBncm91cHMgb3IgaW5kaXZpZHVhbCBub2Rlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2RlR3JvdXBzKVxyXG5cdHtcclxuXHRcdHVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0YXJyYW5nZUdyb3Vwcyggdm4sIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdHVwZGF0ZVBoeXNpY2FsQnlOb2Rlcyggdm4sIGRpc3Auc3ViTm9kZURpc3BzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBoeXNpY2FsQnlOb2RlcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Ly8gcGVyZm9ybSBET00gb3BlcmF0aW9ucyBhY2NvcmRpbmcgdG8gc3ViLW5vZGUgZGlzcG9zaXRpb24uIFdlIG5lZWQgdG8gZGVjaWRlIGZvciBlYWNoXHJcblx0Ly8gbm9kZSB3aGF0IG5vZGUgdG8gdXNlIHRvIGluc2VydCBvciBtb3ZlIGl0IGJlZm9yZS4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mXHJcblx0Ly8gbmV3IG5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcblx0bGV0IG5leHRWTjogVk4sIHN2bjogVk4sIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTjogVk4sIGZpcnN0RE46IEROO1xyXG5cdGZvciggbGV0IGkgPSBkaXNwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkaXNwID0gZGlzcHNbaV07XHJcblx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRvbGRWTiA9IGRpc3Aub2xkVk47XHJcblxyXG5cdFx0Ly8gZm9yIHRoZSBVcGRhdGUgb3BlcmF0aW9uLCB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlOyBmb3IgdGhlIEluc2VydCBvcGVyYXRpb25cclxuXHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdHN2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdHBhcmVudFZOLnN1Yk5vZGVzW2ldID0gc3ZuO1xyXG5cclxuXHRcdGlmIChkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGRldGVybWluZSB3aGV0aGVyIGFsbCB0aGUgbm9kZXMgdW5kZXIgdGhpcyBWTiBzaG91bGQgYmUgbW92ZWQuXHJcblx0XHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBvbGRWTik7XHJcblx0XHRcdGlmIChzdWJOb2RlRE5zLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBsYXN0IG9mIHRoZSBET00gbm9kZXMgYWxyZWFkeSByZXNpZGVzIHJpZ2h0IGJlZm9yZSB0aGUgbmVlZGVkIG5vZGVcclxuXHRcdFx0XHRpZiAoc3ViTm9kZUROc1tzdWJOb2RlRE5zLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggb2xkVk4uc3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdGhlIGZpcnN0IG9mIERPTSBub2RlcyBiZWNvbWUgdGhlIG5leHQgYmVmb3JlRE5cclxuXHRcdFx0XHRiZWZvcmVETiA9IHN1Yk5vZGVETnNbMF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzaW5jZSB3ZSBhbHJlYWR5IGRlc3Ryb3llZCBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZXBsYWNlZCwgdGhlIGNvZGUgaXNcclxuXHRcdFx0Ly8gaWRlbnRpY2FsIGZvciBSZXBsYWNlIGFuZCBJbnNlcnQgYWN0aW9uc1xyXG5cdFx0XHRjcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRpZiAoZmlyc3RETiAhPSBudWxsKVxyXG5cdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGFyZW50Vk4ua2V5ZWRTdWJOb2RlcyAhPT0gdW5kZWZpbmVkICYmIHN2bi5rZXkgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cGFyZW50Vk4ua2V5ZWRTdWJOb2Rlcy5zZXQoIHN2bi5rZXksIHN2bik7XHJcblxyXG5cdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdGlmIChuZXh0Vk4pXHJcblx0XHR7XHJcblx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0Vk4gPSBzdm47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG4vLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5mdW5jdGlvbiB1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCBjdXJyU3ViTm9kZUluZGV4ID0gZGlzcHMubGVuZ3RoIC0gMTtcclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblxyXG5cdFx0Ly8gZmlyc3QgdXBkYXRlIGV2ZXJ5IHN1Yi1ub2RlIGluIHRoZSBncm91cCBhbmQgaXRzIHN1Yi1zdWItbm9kZXNcclxuXHRcdGZvciggbGV0IGogPSBncm91cC5sYXN0OyBqID49IGdyb3VwLmZpcnN0OyBqLS0pXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSBkaXNwc1tqXTtcclxuXHRcdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0XHRvbGRWTiA9IGRpc3Aub2xkVk47XHJcblxyXG5cdFx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRcdHN2biA9IGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRcdHBhcmVudFZOLnN1Yk5vZGVzW2N1cnJTdWJOb2RlSW5kZXgtLV0gPSBzdm47XHJcblxyXG5cdFx0XHRpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBjb21taXRVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG9sZFZOKTtcclxuXHRcdFx0XHRpZiAoZmlyc3RETiAhPSBudWxsKVxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHBhcmVudFZOLmtleWVkU3ViTm9kZXMgIT09IHVuZGVmaW5lZCAmJiBzdm4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cGFyZW50Vk4ua2V5ZWRTdWJOb2Rlcy5zZXQoIHN2bi5rZXksIHN2bik7XHJcblxyXG5cdFx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRpZiAobmV4dFZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdFx0c3ZuLm5leHQgPSBuZXh0Vk47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5leHRWTiA9IHN2bjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBub3cgdGhhdCBhbGwgbm9kZXMgaW4gdGhlIGdyb3VwIGhhdmUgYmVlbiB1cGRhdGVkIG9yIGluc2VydGVkLCB3ZSBjYW4gZGV0ZXJtaW5lXHJcblx0XHQvLyBmaXJzdCBhbmQgbGFzdCBETnMgZm9yIHRoZSBncm91cFxyXG5cdFx0Z3JvdXAuZGV0ZXJtaW5lRE5zKCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGdyb3VwIGhhcyBhdCBsZWFzdCBvbmUgRE4sIGl0cyBmaXJzdCBETiBiZWNvbWVzIHRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV4dFxyXG5cdFx0Ly8gZ3JvdXAgb2YgbmV3IG5vZGVzIChpZiBhbnkpIHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHRcdGlmIChncm91cC5maXJzdEROKVxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2UgdGhlIGdyb3VwcyBpbiBvcmRlciBhcyBpbiB0aGUgbmV3IHN1Yi1ub2RlIGxpc3QsIG1vdmluZyB0aGVtIGlmIG5lY2Vzc2FyeS5cclxuZnVuY3Rpb24gYXJyYW5nZUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIHBhcmVudFZOLCBkaXNwcywgcHJldkdyb3VwLCBhbmNob3JETiwgZ3JvdXAuZmlyc3RETik7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0bW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIGdyb3VwLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0aGUgZ3JvdXAncyBmaXJzdCBETiBiZWNvbWVzIHRoZSBuZXcgYmVmb3JlRE4uIE5vdGUgdGhhdCBmaXJzdEROIGNhbm5vdCBiZSBudWxsXHJcblx0XHRcdC8vIGJlY2F1c2UgbGFzdEROIGlzIG5vdCBudWxsXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ2l2ZW4gZ3JvdXAgYmVmb3JlIHRoZSBnaXZlbiBET00gbm9kZS5cclxuZnVuY3Rpb24gbW92ZUdyb3VwKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXA6IFZORGlzcEdyb3VwLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IGogPSBncm91cC5maXJzdDsgaiA8PSBncm91cC5sYXN0OyBqKyspXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGVWTiA9IGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IGRpc3BzW2pdLm9sZFZOIDogZGlzcHNbal0ubmV3Vk47XHJcblx0XHRsZXQgc3ViTm9kZUROcyA9IGdldEltbWVkaWF0ZUROcyggc3ViTm9kZVZOKTtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0e1xyXG5cdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBzdWJOb2RlVk4uc3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSVRleHRWTlxyXG57XHJcblx0Ly8gVGV4dCBmb3IgYSBzaW1wbGUgdGV4dCBub2RlLlxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRwdWJsaWMgdGV4dE5vZGU6IFRleHQ7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRleHQ6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIHRleHQgbm9kZXMgZG9uJ3QgaGF2ZSBzdWItbm9kZXNcclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggdGhpcy50ZXh0ICE9PSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUubm9kZVZhbHVlID0gdGhpcy50ZXh0ID0gKG5ld1ZOIGFzIFRleHRWTikudGV4dDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIG1pbS5JVk5vZGVcclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRyZWFkb25seSBzdGF0c0NhdGVnb3J5OiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0LyoqIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLiAqL1xyXG5cdGRlcHRoPzogbnVtYmVyO1xyXG5cclxuXHQvKiogRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuICovXHJcblx0YW5jaG9yRE4/OiBETjtcclxuXHJcblx0LyoqXHJcblx0ICogTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleSBjYW4gYmUgb2ZcclxuXHQgKiBhbnkgdHlwZS5cclxuXHQgKi9cclxuXHRrZXk/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHJlbmRlck9uVXBkYXRlPzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHBhcmVudD86IFZOO1xyXG5cclxuXHQvLyBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBhcyBwYXJ0IG9mIGl0cyByZW5kZXJpbmcgdHJlZS5cclxuXHRjcmVhdG9yPzogbWltLklDb21wb25lbnQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdG5leHQ/OiBWTjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwcmV2PzogVk47XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlcz86IFZOW107XHJcblxyXG5cdC8vIE1hcCBvZiBrZXllZCBzdWItbm9kZXMgLSBkZWZpbmVkIG9ubHkgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgZ3JlYXRlciB0aGFuIDEuXHJcblx0a2V5ZWRTdWJOb2Rlcz86IE1hcDxhbnksVk4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBtaW0uVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0b3duRE4/OiBETjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0bGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRpbml0KCBwYXJlbnQ6IFZOLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHRlcm0oKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vXHJcblx0Ly8gTGlmZSBjeWNsZSBtZXRob2RzXHJcblx0Ly9cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhhdCBtZWFucyB0aGUgbm9kZVxyXG5cdC8vIG5ldmVyIGhhcyBjaGlsZHJlbiAtIGZvciBleGFtcGxlIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlbmRlcj8oKTogYW55O1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ2xlYXJzIGludGVybmFsIHN0cnVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudFxyXG5cdC8vIG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGltcGxlbWVudGVkXHJcblx0Ly8gb25seSBvbiBub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0bW91bnQ/KCk6IEROO1xyXG5cclxuXHQvLyBDbGVhcnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWQgb25seSBvbiBub2Rlc1xyXG5cdC8vIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSByZWxlYXNlIHRoZSBpbnRlcm5hbGx5IGhlbGQgcmVmZXJlbmNlXHJcblx0Ly8gdG8gdGhlIERPTSBub2RlIC0gdGhlIGFjdHVhbCByZW1vdmFsIG9mIHRoZSBub2RlIGZyb20gRE9NIGlzIGRvbmUgYnkgdGhlIGluZnJhc3RydWN0dXJlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR1bm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gSWYgdGhpcyBtZXRob2QgaXNcclxuXHQvLyBub3QgaW1wbGVtZW50ZWQgdGhlIHVwZGF0ZSBpcyBjb25zaWRlcmVkIHBvc3NpYmxlIC0gZS5nLiBmb3IgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aXNVcGRhdGVQb3NzaWJsZT8oIG5ld1ZOOiBWTik6IGJvb2xlYW47XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Y29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhlIG5vZGVcclxuXHQvLyBkb2Vzbid0IHN1cHBvcnQgZXJyb3IgaGFuZGxpbmcuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHN1cHBvcnRzRXJyb3JIYW5kbGluZz8oKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggdm5FcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHByZXBhcmVVcGRhdGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFZOVXBkYXRlRGlzcFxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkUmVuZGVyOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5zaG91bGRDb21taXQgPSBzaG91bGRDb21taXQ7XHJcblx0XHR0aGlzLnNob3VsZFJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIGZhbHNlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIGZhbHNlKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdG9ja1ZhbHVlKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHRyZXR1cm4gc2hvdWxkQ29tbWl0XHJcblx0XHRcdD8gc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuRG9Db21taXROb1JlbmRlclxyXG5cdFx0XHQ6IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLk5vQ29tbWl0Tm9SZW5kZXI7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRkbiA9IGdldEZpcnN0RE4oIHN2bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxhc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcbi8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdFx0aWYgKGRuICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm46IFZOLCBhbmNob3JETjogRE4pOiBETlxyXG57XHJcblx0Ly8gY2hlY2sgaWYgd2UgaGF2ZSBzaWJsaW5nIERPTSBub2RlcyBhZnRlciBvdXIgbGFzdCBzdWItbm9kZSAtIHRoYXQgbWlnaHQgYmUgZWxlbWVudHNcclxuXHQvLyBub3QgY29udHJvbGxlZCBieSBvdXIgY29tcG9uZW50LlxyXG5cdGlmICh2bi5zdWJOb2RlcyAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAwKVxyXG5cdHtcclxuXHRcdGxldCBkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbdm4uc3ViTm9kZXMubGVuZ3RoIC0gMV0pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBkbi5uZXh0U2libGluZztcclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBuZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBvdXIgbmV4dCBzaWJsaW5nc1xyXG5cdGZvciggbGV0IG52biA9IHZuLm5leHQ7IG52biAhPT0gdW5kZWZpbmVkOyBudm4gPSBudm4ubmV4dClcclxuXHR7XHJcblx0XHRpZiAoIW52bi5hbmNob3JETilcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8gbm90ZSB0aGF0IGdldExhc3RETiBjYWxsIHRyYXZlcnNlcyB0aGUgaGllcmFyY2h5IG9mIG5vZGVzLiBOb3RlIGFsc28gdGhhdCBpdFxyXG5cdFx0Ly8gY2Fubm90IGZpbmQgYSBub2RlIHVuZGVyIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50IGJlY2F1c2UgdGhlIGZpcnN0IGRpZmZlcmVudFxyXG5cdFx0Ly8gYW5jaG9yIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIHdhbnRlZCBub2RlLlxyXG5cdFx0Y29uc3QgZG4gPSBnZXRMYXN0RE4oIG52bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY3Vyc2UgdG8gb3VyIHBhcmVudCBpZiBleGlzdHNcclxuXHRyZXR1cm4gdm4ucGFyZW50ICYmIHZuLnBhcmVudC5hbmNob3JETiA9PT0gYW5jaG9yRE4gPyBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4ucGFyZW50LCBhbmNob3JETikgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgYXJyYXkgb2Ygbm9kZSBuYW1lcyBzdGFydGluZyB3aXRoIHRoaXMgbm9kZSBhbmQgdXAgdW50aWwgdGhlIHRvcC1sZXZlbCBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vk5QYXRoKCB2bjogVk4pOiBzdHJpbmdbXVxyXG57XHJcblx0bGV0IGRlcHRoID0gdm4uZGVwdGg7XHJcblx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0Zm9yKCBsZXQgaSA9IDAsIG52bjogVk4gPSB2bjsgaSA8IGRlcHRoOyBpKyssIG52biA9IG52bi5wYXJlbnQpXHJcblx0e1xyXG5cdFx0cGF0aFtpXSA9IG52bi5uYW1lICsgKG52bi5jcmVhdG9yICYmIG52bi5jcmVhdG9yLnZuID8gYCAoY3JlYXRlZCBieSAke252bi5jcmVhdG9yLnZuLm5hbWV9KWAgOiBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7cmVxdWVzdE5vZGVVcGRhdGUsIHNjaGVkdWxlRnVuY0NhbGwsIHdyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuaW1wb3J0IHtub3RpZnlTZXJ2aWNlUHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkfSBmcm9tIFwiLi9QdWJTdWJcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgYWJzdHJhY3QgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQgbmFtZSgpOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyB0eXBlOiBtaW0uVk5UeXBlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZS4gVGhpcyBpcyBudWxsIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgcGFyZW50OiBWTkJhc2U7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRwdWJsaWMgY3JlYXRvcjogbWltLklDb21wb25lbnQ7XHJcblxyXG5cdC8vIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRwdWJsaWMgbmV4dDogVk5CYXNlO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBwcmV2OiBWTkJhc2U7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzIC0gYm90aCBrZXllZCBhbmQgdW5rZXllZCAtIGRlZmluZWQgb25seSBpZiB0aGVyZSBhcmUgc29tZSBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzOiBWTkJhc2VbXTtcclxuXHJcblx0Ly8gTWFwIG9mIGtleWVkIHN1Yi1ub2RlcyAtIGRlZmluZWQgb25seSBpZiB0aGUgbnVtYmVyIG9mIHN1Yi1ub2RlcyBpcyBncmVhdGVyIHRoYW4gMS5cclxuXHRwdWJsaWMga2V5ZWRTdWJOb2RlczogTWFwPGFueSxWTkJhc2U+O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cHVibGljIHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRlcHRoICsgMSA6IDA7XHJcblx0XHR0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHRwdWJsaWMgdGVybSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVtb3ZlIGluZm9ybWF0aW9uIGFib3V0IGFueSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgc2VydmljZXNcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZm9yRWFjaCggKHNlcnZpY2UsIGlkKSA9PiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZm9yRWFjaCggKGluZm8sIGlkKSA9PiB7IG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTsgfSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMua2V5ZWRTdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuZGVwdGggPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgbW91bnRlZCAqL1xyXG5cdHB1YmxpYyBnZXQgaXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmFuY2hvckROOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudXBkYXRlUmVxdWVzdGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgdHJ1ZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgZmFsc2UsIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdC8vIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgbm9kZXMuXHJcblx0cHVibGljIHB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxuXHJcblx0XHRsZXQgZXhpc3RpblNlcnZpY2U6IGFueSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoZXhpc3RpblNlcnZpY2UgIT09IHNlcnZpY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuc2V0KCBpZCwgc2VydmljZSk7XHJcblx0XHRcdG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyB1bnB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3Vic2NyaWJlcyBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0Ly8gYnkgb25lIG9mIHRoZSBhbmNlc3RvciBub2RlcywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0OyBvdGhlcndpc2UsXHJcblx0Ly8gdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0Ly8gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3Igbm9kZSBpc1xyXG5cdC8vIGNoYW5nZWQsIHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdHB1YmxpYyBzdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nLCByZWY6IG1pbS5SZWZQcm9wVHlwZSwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0bWltLnNldFJlZiggcmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBkZWZhdWx0U2VydmljZSkpO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZSxcclxuXHQvLyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0cHVibGljIHVuc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdC8vIG5vZGUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdC8vIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdHB1YmxpYyBnZXRTZXJ2aWNlKCBpZDogc3RyaW5nLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIGlkLCB1c2VTZWxmKTtcclxuXHRcdHJldHVybiBzZXJ2aWNlICE9PSB1bmRlZmluZWQgPyBzZXJ2aWNlIDogZGVmYXVsdFNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgdXAgdGhlIGNoYWluIG9mIG5vZGVzIGxvb2tpbmcgZm9yIGEgcHVibGlzaGVkIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFJldHVybnNcclxuXHQvLyB1bmRlZmluZWQgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGZvdW5kLiBOb3RlIHRoYXQgbnVsbCBtaWdodCBiZSBhIHZhbGlkIHZhbHVlLlxyXG5cdHByaXZhdGUgZmluZFNlcnZpY2UoIGlkOiBzdHJpbmcsIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHVzZVNlbGYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc2VydmljZSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRcdFx0aWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBzZXJ2aWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ28gdXAgdGhlIGNoYWluOyBub3RlIHRoYXQgd2UgZG9uJ3QgcGFzcyB0aGUgdXNlU2VsZiBwYXJhbWV0ZXIgb24uXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5maW5kU2VydmljZSggaWQsIHRydWUpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgbm9kZSB0aGF0IHB1YmxpY2F0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBzZXJ2aWNlICh0byB3aGljaCB0aGUgbm9kZVxyXG5cdC8vIGhhcyBwcmV2aW91c2x5IHN1YnNjcmliZWQpIGhhcyBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGluZm8uZGVmYXVsdFNlcnZpY2UpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3NcclxuXHQgKiB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBtaW0uQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIG1pbS5Db21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbyBjbGFzcyBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIHN1YnNjcmlwdGlvbiBvZiBhIG5vZGUgdG8gYSBzZXJ2aWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVk5TdWJzY3JpYmVkU2VydmljZUluZm9cclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluIHdpdGggdGhlIHNlcnZpY2UgdmFsdWVcclxuXHRyZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBEZWZhdWx0IHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyBwdWJsaXNoZXMgdGhlXHJcblx0Ly8gc2VydmljZVxyXG5cdGRlZmF1bHRTZXJ2aWNlOiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBjYW4gc3Vic2NyaWJlIHRvIGEgc2VydmljZSB0aGF0IGl0IGltcGxlbWVudHMgaXRzZWxmLiBUaGlzXHJcblx0Ly8gaXMgdXNlZnVsIGluIGNhc2Ugd2hlcmUgYSBzZXJ2aWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYSBjb21wb25lbnQgY2FuIGNoYWluIHRvIGEgc2VydmljZVxyXG5cdC8vIGltcGxlbWVudGVkIGJ5IGFuIGFuY2VzdG9yIGNvbXBvbmVudC5cclxuXHR1c2VTZWxmOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3AsIGdldEZpcnN0RE4sIGdldExhc3RETn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge2NyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudH0gZnJvbSBcIi4vQ29udGVudEZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkFjdGlvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgcG9zc2libGUgYWN0aW9ucyB0byBwZXJmb3JtIGZvciBuZXcgbm9kZXMgZHVyaW5nXHJcbiAqIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIHN0ZW0gbm9kZTsgdGhhdCBpcyxcclxuXHQgKiBvbmx5IHRoZSBub2RlJ3MgY2hpbGRyZW4gc2hvdWxkIGJlIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRoaXMgbWVhbnMgdGhhdCBlaXRoZXIgdGhlcmUgd2FzIG5vIGNvdW50ZXJwYXJ0IG9sZCBub2RlXHJcblx0ICogZm91bmQgb3IgdGhlIGZvdW5kIG5vZGUgY2Fubm90IGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgb25lIG5vciBjYW4gdGhlIG9sZCBub2RlIGJlIHJldXNlZFxyXG5cdCAqIGJ5IHRoZSBuZXcgb25lIChlLmcuIHRoZXkgYXJlIG9mIGRpZmZlcmVudCB0eXBlKS5cclxuXHQgKi9cclxuXHRJbnNlcnQgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS4gVGhpcyB2YWx1ZSBpcyBhbHNvIHVzZWQgZm9yIEluc3RhbmNlVk5cclxuXHQgKiBub2RlcyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGFyZSB0aGUgc2FtZSBub2RlLlxyXG5cdCAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwXHJcbntcclxuXHRjb25zdHJ1Y3RvciggbmV3Vk46IFZOLCBhY3Rpb24gPSBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk4/OiBWTilcclxuXHR7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMubmV3Vk4gPSBuZXdWTjtcclxuXHRcdHRoaXMub2xkVk4gPSBvbGRWTjtcclxuXHR9XHJcblxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogTmV3IHZpcnR1YWwgbm9kZSB0byBpbnNlcnQgb3IgdG8gdXBkYXRlIGFuIG9sZCBub2RlICovXHJcblx0cHVibGljIG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZC4gVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiAqL1xyXG5cdHB1YmxpYyBvbGRWTjogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHRwdWJsaWMgdXBkYXRlRGlzcDogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuIFRoaXMgaW5jbHVkZXMgbm9kZXMgdG8gYmUgdXBkYXRlZFxyXG5cdCAqIGFuZCB0byBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3ViTm9kZURpc3BzOiBWTkRpc3BbXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyB1cGRhdGUgb2YgdGhlIHN1Yi1ub2Rlcy4gKi9cclxuXHRwdWJsaWMgc3ViTm9kZXNUb1JlbW92ZTogVk5bXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIGdyb3VwcyBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBpbnNlcnRlZC4gKi9cclxuXHRwdWJsaWMgc3ViTm9kZUdyb3VwczogVk5EaXNwR3JvdXBbXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDb21wYXJlcyBvbGQgYW5kIG5ldyBjaGFpbnMgb2Ygc3ViLW5vZGVzIGFuZCBkZXRlcm1pbmVzIHdoYXQgbm9kZXMgc2hvdWxkIGJlIGNyZWF0ZWQsIGRlbGV0ZWRcclxuXHQgKiBvciB1cGRhdGVkLiBUaGUgcmVzdWx0IGlzIHJlbWVtYmVyZWQgYXMgYW4gYXJyYXkgb2YgVk5EaXNwIG9iamVjdHMgZm9yIGVhY2ggc3ViLW5vZGUgYW5kIGFzXHJcblx0ICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuXHQgKiBpbnRvIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIGFuZCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHQgKiBUaGUgZ3JvdXBzIGFyZSBidWlsdCBpbiBhIHdheSBzbyB0aGF0IGlmIGEgbm9kZSBzaG91bGQgYmUgbW92ZWQsIGl0cyBlbnRpcmUgZ3JvdXAgaXMgbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudFxyXG5cdFx0bGV0IG5ld0NoYWluID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB0aGlzLm9sZFZOLnJlbmRlcigpKTtcclxuXHRcdGxldCBuZXdMZW4gPSBuZXdDaGFpbiA/IG5ld0NoYWluLmxlbmd0aCA6IDA7XHJcblxyXG5cdFx0bGV0IG9sZENoYWluID0gdGhpcy5vbGRWTi5zdWJOb2RlcztcclxuXHRcdGxldCBvbGRMZW4gPSBvbGRDaGFpbiA/IG9sZENoYWluLmxlbmd0aCA6IDA7XHJcblxyXG5cdFx0Ly8gaWYgZWl0aGVyIG9sZCBvciBuZXcgb3IgYm90aCBjaGFpbnMgYXJlIGVtcHR5LCB3ZSBkbyBzcGVjaWFsIHRoaW5nc1xyXG5cdFx0aWYgKG5ld0xlbiA9PT0gMCAmJiBvbGRMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGJvdGggY2hhaW4gYXJlIGVtcHR5IC0gZG8gbm90aGluZ1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIG5ldyBjaGFpbiBpcyBlbXB0eSAtIGRlbGV0ZSBhbGwgb2xkIG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IG9sZENoYWluO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIG9sZCBjaGFpbiBpcyBlbXB0eSAtIGluc2VydCBhbGwgbmV3IG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzID0gbmV3Q2hhaW4ubWFwKCBuZXdWTiA9PiBuZXcgVk5EaXNwKCBuZXdWTiwgVk5EaXNwQWN0aW9uLkluc2VydCkpO1xyXG5cdFx0XHRpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3VwcyA9IFtuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIFZORGlzcEFjdGlvbi5JbnNlcnQsIDAsIG5ld0xlbiAtIDEpXTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG5cdFx0Ly8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG5cdFx0Ly8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcblx0XHRsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG5cdFx0bGV0IHVwZGF0ZVN0cmF0ZWd5ID0gdGhpcy5vbGRWTiA/IHRoaXMub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcblx0XHRpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZztcclxuXHJcblx0XHQvLyBwcm9jZXNzIHRoZSBzcGVjaWFsIGNhc2Ugd2l0aCBhIHNpbmdsZSBzdWItbm9kZSBpbiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBqdXN0XHJcblx0XHQvLyB0byBhdm9pZCBjcmVhdGluZyB0ZW1wb3Jhcnkgc3RydWN0dXJlc1xyXG5cdFx0aWYgKG5ld0xlbiA9PT0gMSAmJiBvbGRMZW4gPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXdWTiA9IG5ld0NoYWluWzBdO1xyXG5cdFx0XHRsZXQgb2xkVk4gPSBvbGRDaGFpblswXTtcclxuXHRcdFx0bGV0IGRpc3AgPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzID0gW2Rpc3BdO1xyXG5cdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8XHJcblx0XHRcdFx0KChhbGxvd0tleWVkTm9kZVJlY3ljbGluZyB8fCBuZXdWTi5rZXkgPT09IG9sZFZOLmtleSkgJiYgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbb2xkVk5dO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgYm90aCBvbGQgYW5kIG5ldyBjaGFpbnMgY29udGFpbiBtb3JlIHRoYW4gb25lIG5vZGU7IHRoZXJlZm9yZSwgdGhlIG1hcCBvZlxyXG5cdFx0Ly8ga2V5ZWQgc3ViLW5vZGVzIGV4aXN0cyAoYWx0aG91Z2ggaXQgbWlnaHQgYmUgZW1wdHkpLlxyXG5cdFx0bGV0IG9sZE1hcCA9IHRoaXMub2xkVk4ua2V5ZWRTdWJOb2RlcztcclxuXHRcdGxldCBvbGRNYXBTaXplID0gb2xkTWFwID8gb2xkTWFwLnNpemUgOiAwO1xyXG5cclxuXHRcdC8vIHByZXBhcmUgYXJyYXlzIGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzIGFuZCBmb3Igb2xkIG5vZGVzIHRvIGJlIHJlbW92ZWRcclxuXHRcdHRoaXMuc3ViTm9kZURpc3BzID0gbmV3IEFycmF5KCBuZXdMZW4pO1xyXG5cdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG5cdFx0Ly8gaWYgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgb2xkIG1hcCBpcyBlcXVhbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIG9sZCBub2RlcywgdGhhdFxyXG5cdFx0Ly8gbWVhbnMgdGhhdCBhbGwgb2xkIG5vZGVzIGFyZSBrZXllZC4gSWYgdGhpcyBpcyB0aGUgY2FzZSBBTkQgcmVjeWNsaW5nIG9mIGtleWVkIG5vZGVzXHJcblx0XHQvLyBpcyBub3QgYWxsb3dlZCwgd2Ugd2lsbCBub3QgbmVlZCB0byBwdXQgdW5rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ldyBub2RlcyBhc2lkZS5cclxuXHRcdC8vIFdlIGtub3cgdGhhdCB0aGV5IHdpbGwgaGF2ZSB0byBiZSBpbnNlcnRlZC5cclxuXHRcdGlmIChvbGRNYXBTaXplID09PSBvbGRMZW4gJiYgIWFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkS2V5ZWRPbmx5KCBvbGRNYXAsIG5ld0NoYWluLCBuZXdMZW4sIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblx0XHRlbHNlIGlmIChvbGRNYXBTaXplID09PSAwICYmIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkTm9uS2V5ZWRPbmx5KCBvbGRDaGFpbiwgb2xkTGVuLCBuZXdDaGFpbiwgbmV3TGVuLCBuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkTWl4ZWQoIG9sZENoYWluLCBvbGRMZW4sIG9sZE1hcCwgbmV3Q2hhaW4sIG5ld0xlbiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcsIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5sZW5ndGggPT09IDApXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHdlIGtub3cgdGhhdCBhbGwgb2xkIG5vZGVzIGhhdmUga2V5cyBhbmQgdGhlIHJlY3ljbGluZyBvZiBrZXllZFxyXG5cdCAqIG5vZGVzIGlzIE5PVCBhbGxvd2VkLiBUaGVyZWZvcmUsIHdoZW4gd2UgdHJ5IHRvIG1hdGNoIG5ldyBub2RlcyB0byBvbGQgb25lcyB3ZSBrbm93IHRoYXRcclxuXHQgKiBub24ta2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgd2lsbCBiZSBtYXJrZWQgZm9yIGluc2VydGlvbi4gV2UgYWxzbyBjYW4gYnVpbGRcclxuXHQgKiBncm91cHMgKGlmIHJlcXVlc3RlZCkgaW4gdGhlIHNhbWUgbG9vcC5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1hdGNoT2xkS2V5ZWRPbmx5KCBvbGRNYXA6IE1hcDxhbnksVk4+LCBuZXdDaGFpbjogVk5bXSwgbmV3TGVuOiBudW1iZXIsIGJ1aWxkR3JvdXBzOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnksIGFjdGlvbjogVk5EaXNwQWN0aW9uLCBncm91cDogVk5EaXNwR3JvdXA7XHJcblxyXG5cdFx0Ly8gaWYgd2UgbmVlZCB0byBidWlsZCBncm91cHMsIHByZXBhcmUgYXJyYXkgb2YgZ3JvdXBzXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuc3ViTm9kZUdyb3VwcyA9IFtdO1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGFuZFxyXG5cdFx0Ly8gbWFyayB1bmtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIGZvciBpbnNlcnRpb24uIE9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZVxyXG5cdFx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXAgb3IgcHV0IHRoZSBuZXcgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvclxyXG5cdFx0Ly8gY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuIGEgbmV3IG9uZS5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld1ZOID0gbmV3Q2hhaW5baV07XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXSA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0a2V5ID0gbmV3Vk4ua2V5O1xyXG5cclxuXHRcdFx0Ly8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9sZFZOID0gb2xkTWFwLmdldCgga2V5KVxyXG5cdFx0XHRcdGlmIChvbGRWTiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIG1hcCAtIHRoaXMgd2F5IHRoZSBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoZVxyXG5cdFx0XHRcdFx0Ly8gbWFwIGFyZSB0aG9zZSB0aGF0IGFyZSB1bm1hdGNoZWQuXHJcblx0XHRcdFx0XHRvbGRNYXAuZGVsZXRlKCBrZXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGlzcC5hY3Rpb24gPSBhY3Rpb247XHJcblxyXG5cdFx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWdyb3VwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXggYW5kIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZVxyXG5cdFx0XHRcdFx0Ly8gY2Fubm90IGJlIGhlcmUgZm9yIGEgbm9kZSB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGVcclxuXHRcdFx0XHRcdC8vIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuXHRcdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgb3IgXCJub25lXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG5cdFx0XHRcdFx0Ly8gaXRzIG5leHQgc2libGluZyBpbiB0aGUgbmV3IGxpc3QgaXMgZGlmZmVyZW50IGZyb20gdGhlIG5leHQgc2libGluZyBpbiB0aGUgb2xkIGxpc3QuXHJcblx0XHRcdFx0XHQvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDAgJiYgdGhpcy5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gb2xkVk4ucHJldilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4IGFuZCBvcGVuIG5ldyBncm91cC5cclxuXHRcdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFsbCBjb25zZWN1dGl2ZSBcImluc2VydFwiIG5vZGVzIGJlbG9uZyB0byB0aGUgc2FtZSBncm91cCBzbyB3ZSBqdXN0IHdhaXQgZm9yIHRoZVxyXG5cdFx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xvc2UgdGhlIGxhc3QgZ3JvdXAgaWYgcmVxdWVzdGVkIHRvIGJ1aWxkIGdyb3VwcyAob25seSBpbiB0aGlzIGNhc2Ugd2UgbWF5IGhhdmUgYSBncm91cCBvYmplY3QpXHJcblx0XHRpZiAoZ3JvdXApXHJcblx0XHRcdGdyb3VwLmxhc3QgPSBuZXdMZW4gLSAxO1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgb2xkIG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdG9sZE1hcC5mb3JFYWNoKCBvbGRWTiA9PiB0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHdlIGtub3cgdGhhdCBub25lIG9mIHRoZSBvbGQgbm9kZXMgaGF2ZSBrZXlzIGFuZCB0aGUgcmVjeWNsaW5nIG9mIGtleWVkXHJcblx0ICogbm9kZXMgSVMgYWxsb3dlZC4gVGhlcmVmb3JlLCB3ZSB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGJ5IGluZGV4LiBXZSBhbHNvIGNhbiBidWlsZFxyXG5cdCAqIGdyb3VwcyAoaWYgcmVxdWVzdGVkKSBpbiB0aGUgc2FtZSBsb29wLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGROb25LZXllZE9ubHkoIG9sZENoYWluOiBWTltdLCBvbGRMZW46IG51bWJlciwgbmV3Q2hhaW46IFZOW10sIG5ld0xlbjogbnVtYmVyLCBidWlsZEdyb3VwczogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBkZWNsYXJlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBmb2xsb3dpbmcgY29kZVxyXG5cdFx0bGV0IGRpc3A6IFZORGlzcCwgb2xkVk46IFZOLCBuZXdWTjogVk4sIGtleTogYW55O1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyBhbmQgdHJ5IHRvIG1hdGNoIG5ldyBhbmQgb2xkIG5vZGVzIGJ5XHJcblx0XHQvLyBpbmRleC5cclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciggOyBpIDwgbmV3TGVuICYmIGkgPCBvbGRMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRvbGRWTiA9IG9sZENoYWluW2ldO1xyXG5cclxuXHRcdFx0Ly8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtYWluaW5nIG5ldyBub2RlcyBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuXHRcdGZvciggbGV0IGogPSBpOyBqIDwgbmV3TGVuOyBqKyspXHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzW2pdID0gbmV3IFZORGlzcCggbmV3Q2hhaW5bal0sIFZORGlzcEFjdGlvbi5JbnNlcnQpO1xyXG5cclxuXHRcdC8vIHJlbWFpbmluZyBvbGQgbm9kZXMgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdGZvciggbGV0IGogPSBpOyBqIDwgb2xkTGVuOyBqKyspXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRDaGFpbltqXSk7XHJcblxyXG5cdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR0aGlzLmJ1aWxkU3ViTm9kZUdyb3VwcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IG5vdCBhbGwgb2xkIG5vZGVzIGhhdmUga2V5cyBvciB0aGUgcmVjeWNsaW5nIG9mXHJcblx0ICoga2V5ZWQgbm9kZXMgaXMgYWxsb3dlZC4gVGhlcmVmb3JlLCB3aGVuIHdlIGhhdmUgYSBub24ta2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXdcclxuXHQgKiBub2RlLCB3ZSBmaXJzdCBwdXQgaXQgYXNpZGUgYW5kIG9ubHkgYWZ0ZXIgd2Ugd2VudCBvdmVyIGFsbCBuZXcgbm9kZXMgd2UgY2FuIGRlY2lkZVxyXG5cdCAqIHdoYXQgdG8gZG8gd2l0aCB0aG9zZSB0aGF0IHdlIHB1dCBhc2lkZS4gQWxzbywgb25seSBhZnRlciB3ZSB3ZW50IG92ZXIgYWxsIG5ldyBub2RlcyB3ZVxyXG5cdCAqIGNhbiBidWlsZCBncm91cHMgaWYgcmVxdWVzdGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGRNaXhlZCggb2xkQ2hhaW46IFZOW10sIG9sZExlbjogbnVtYmVyLCBvbGRNYXA6IE1hcDxhbnksVk4+LCBuZXdDaGFpbjogVk5bXSxcclxuXHRcdFx0XHRcdG5ld0xlbjogbnVtYmVyLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZzogYm9vbGVhbiwgYnVpbGRHcm91cHM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0XHQvLyBkZWNsYXJlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBmb2xsb3dpbmcgY29kZVxyXG5cdFx0bGV0IGRpc3A6IFZORGlzcCwgb2xkVk46IFZOLCBuZXdWTjogVk4sIGtleTogYW55O1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGFuZFxyXG5cdFx0Ly8gcHV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgYXNpZGVcclxuXHRcdGxldCBuZXdVbm1hdGNoZWREaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld1ZOID0gbmV3Q2hhaW5baV07XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXSA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0a2V5ID0gbmV3Vk4ua2V5O1xyXG5cclxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcHV0IHRoZSB1bmtleWVkIG5ldyBub2RlIGFzaWRlXHJcblx0XHRcdFx0bmV3VW5tYXRjaGVkRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2xkVk4gPSBvbGRNYXAuZ2V0KCBrZXkpXHJcblx0XHRcdFx0aWYgKG9sZFZOID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgcmVjeWNsaW5nIGFsbG93ZWQgd2UgcHV0IHVubWF0Y2hlZCBub2RlIGFzaWRlOyBvdGhlcndpc2UsIHdlIGluZGljYXRlIHRoYXRcclxuXHRcdFx0XHRcdC8vIGl0IHNob3VsZCBiZSBpbnNlcnRlZFxyXG5cdFx0XHRcdFx0aWYgKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHRcdFx0XHRuZXdVbm1hdGNoZWREaXNwcy5wdXNoKCBkaXNwKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBtYXAgLSB0aGlzIHdheSB0aGUgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGVcclxuXHRcdFx0XHRcdC8vIG1hcCBhcmUgdGhvc2UgdGhhdCBhcmUgdW5tYXRjaGVkLlxyXG5cdFx0XHRcdFx0b2xkTWFwLmRlbGV0ZSgga2V5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgb2xkIHN1Yi1ub2Rlcywgc2tpcCBhbHJlYWR5IG1hdGNoZWQgb25lcyBhbmQgdHJ5IHRvIG1hdGNoIG90aGVycyB0byB0aGVcclxuXHRcdC8vIHlldC11bm1hdGNoZWQgbmV3IG5vZGVzLiBVbm1hdGNoZWQgb2xkIG5vZGVzIGFyZSB0aG9zZSB0aGF0IGFyZSBlaXRoZXIgdW5rZXllZCBvclxyXG5cdFx0Ly8gdGhlIGtleWVkIG9uZXMgdGhhdCBhcmUgc3RpbGwgaW4gdGhlIG9sZE1hcC5cclxuXHRcdGxldCBpT2xkID0gMCwgaU5ldyA9IDAsIG5ld1VubWF0Y2hlZExlbiA9IG5ld1VubWF0Y2hlZERpc3BzLmxlbmd0aDtcclxuXHRcdHdoaWxlKCBpT2xkIDwgb2xkTGVuICYmIGlOZXcgPCBuZXdVbm1hdGNoZWRMZW4pXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBtYXRjaGVkIGtleWVkIG5vZGVzXHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5baU9sZCsrXTtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSAhPT0gdW5kZWZpbmVkICYmICFvbGRNYXAuaGFzKCBvbGRWTi5rZXkpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0ZGlzcCA9IG5ld1VubWF0Y2hlZERpc3BzW2lOZXcrK107XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHJcblx0XHRcdC8vIGlmIHJlY3ljbGluZyBpcyBub3QgYWxsb3dlZCBhbmQgZWl0aGVyIG9sZCBvciBuZXcgbm9kZXMgaXMga2V5ZWQsIGluc2VydCBuZXcgYW5kIHJlbW92ZSBvbGRcclxuXHRcdFx0aWYgKCFhbGxvd0tleWVkTm9kZVJlY3ljbGluZyAmJiAob2xkVk4ua2V5ICE9PSB1bmRlZmluZWQgfHwgbmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgbmV3IG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIGluc2VydGVkXHJcblx0XHRmb3IoIGxldCBqID0gaU5ldzsgaiA8IG5ld1VubWF0Y2hlZExlbjsgaisrKVxyXG5cdFx0XHRuZXdVbm1hdGNoZWREaXNwc1tqXS5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgb2xkIG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdGZvciggbGV0IGogPSBpT2xkOyBqIDwgb2xkTGVuOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBtYXRjaGVkIGtleWVkIG5vZGVzXHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5bal07XHJcblx0XHRcdGlmIChvbGRWTi5rZXkgIT09IHVuZGVmaW5lZCAmJiAhb2xkTWFwLmhhcyggb2xkVk4ua2V5KSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR0aGlzLmJ1aWxkU3ViTm9kZUdyb3VwcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuXHQgKiB1cGRhdGVkIG9yIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYnVpbGRTdWJOb2RlR3JvdXBzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcblx0XHRsZXQgY291bnQgPSB0aGlzLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG5cdFx0XHQvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcblx0XHRcdGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGNyZWF0ZSBhcnJheSBvZiBncm91cHMgYW5kIGNyZWF0ZSB0aGUgZmlyc3QgZ3JvdXAgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3Qgbm9kZVxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblx0XHRsZXQgZ3JvdXA6IFZORGlzcEdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCB0aGlzLnN1Yk5vZGVEaXNwc1swXS5hY3Rpb24sIDApO1xyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGUgd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdC8vIG9yIHB1dCB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlblxyXG5cdFx0Ly8gYSBuZXcgb25lLlxyXG5cdFx0bGV0IGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGZvciggbGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHRhY3Rpb24gPSBkaXNwLmFjdGlvbjtcclxuXHRcdFx0aWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4LiBEZWNyZW1lbnQgdGhlIGl0ZXJhdGluZyBpbmRleCBzbyB0aGF0XHJcblx0XHRcdFx0Ly8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuXHRcdFx0XHQvLyB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGUgZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgb3IgXCJub25lXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG5cdFx0XHRcdC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG5cdFx0XHRcdC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRpZiAodGhpcy5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gZGlzcC5vbGRWTi5wcmV2KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG5cdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcblx0XHRpZiAoZ3JvdXAgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0Z3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB1cGRhdGUgb2YgdGhlIGdpdmVuIG9sZCBub2RlIGZyb20gdGhlIGdpdmVuIG5ldyBub2RlIGlzIHBvc3NpYmxlLiBVcGRhdGVcclxuICogaXMgcG9zc2libGUgaWYgdGhlIHR5cGVzIG9mIG5vZGVzIGFyZSB0aGUgc2FtZSBhbmQgZWl0aGVyIHRoZSBpc1VwZGF0ZVBvc3NpYmxlIG1ldGhvZCBpcyBub3RcclxuICogZGVmaW5lZCBvbiB0aGUgb2xkIG5vZGUgb3IgaXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVcGRhdGVQb3NzaWJsZSggb2xkVk46IFZOLCBuZXdWTjogVk4pOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKG9sZFZOLnR5cGUgPT09IG5ld1ZOLnR5cGUgJiZcclxuXHRcdFx0KG9sZFZOLmlzVXBkYXRlUG9zc2libGUgPT09IHVuZGVmaW5lZCB8fCBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpKTtcclxuXHJcbn1cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0xvY2FsU3R5bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0V2ZW50U2xvdFwiO1xyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCI7XHJcbi8vLyAjZW5kaWZcclxuOyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGNzcy5TdHlsZXNldCk6IHZvaWRcclxue1xyXG5cdGNzcy5zZXRFbGVtZW50U3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgcHJvcFZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGNzcy5TdHlsZXNldCwgbmV3UHJvcFZhbDogY3NzLlN0eWxlc2V0KTogYW55XHJcbntcclxuXHRsZXQgcmVzID0gY3NzLmRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogY3NzLlN0cmluZ1N0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0Y3NzLnNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCB1cGRhdGVWYWwpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlIGxpc3RlbmVycyBjYW4gYmVcclxuICogYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0YXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0ZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUV2ZW50U2xvdE93bmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHNsb3QgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY2FsbGVyIHdob1xyXG4gKiBjcmVhdGVkIGl0LiBUaGUgb3duZXIgY2FuIGZpcmUgZXZlbnRzIGFuZCBjbGVhciBldmVudCBsaXN0ZW5lcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3RPd25lcjxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBleHRlbmRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuICogbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuICogbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMuZGVsZXRlKCBsaXN0ZW5lcik7XHJcblx0XHRcdGlmICh0aGlzLmxpc3RlbmVycy5zaXplID09PSAwKVxyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90IHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlIFRcclxuICogaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3Q8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdE93bmVyIHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlXHJcbiAqIFQgaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdE93bmVyPElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdE93bmVyPFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdE93bmVyPFRbUF0+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHdpbGwgaGF2ZSBldmVudCBzbG90cyBmb3IgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgdGVtcGxhdGUgdHlwZSBULiBUaGVcclxuICogY2FsbGVyIHdpbGwgYmUgdGhlIG93bmVyIG9mIHRoZSBldmVudCBzbG90czsgdGhhdCBpcywgaXQgd2lsbCBiZSBhYmxlIHRvIGZpcmUgZXZlbnRzIGFuZFxyXG4gKiBjbGVhciBhbGwgbGlzdGVuZXJzIHdoZW4gbmVjZXNzYXJ5LiBUaGlzIGFsbG93cyB0aGUgZm9sbG93aW5nIGNvZGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBpbnRlcmZhY2UgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgZXZlbnRzOiBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+O1xyXG4gKiAgICAgZG9Tb21ldGhpbmcoKTogdm9pZDtcclxuICogfVxyXG4gKiBcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqIFxyXG4gKiAgICAgcHVibGljIGRvU29tZXRoaW5nKCk6IHZvaWQgeyB0aGlzLl9ldmVudHMuY2hhbmdlLmZpcmUoMSk7fVxyXG4gKiB9XHJcbiAqIFxyXG4gKiBsZXQgb2JqOiBJTXlDbGFzcyA9IG5ldyBNeUNsYXNzKCk7XHJcbiAqIG9iai5ldmVudHMuY2hhbmdlLmFkZCggKG46IG51bWJlcikgPT4gY29uc29sZS5sb2cobikpO1xyXG4gKiBvYmouZG9Tb21ldGhpbmcoKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVsdGlFdmVudFNsb3Q8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogc3RyaW5nLCByZWNlaXZlcjogYW55KTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXNbcHJvcF0gPyB0aGlzW3Byb3BdIDogdGhpc1twcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtSW5mbyB0eXBlIGRlZmluZXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBTVkcgZWxlbWVudC4gVGhpc1xyXG4vLyBpbmZvcm1hdGlvbiBjYW4gYmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuLy9cdC0gc3RyaW5nIC0gYWN0dWFsIG5hbWUgdG8gdXNlIGZvciB0aGUgZWxlbWVudC4gU29tZSBTVkcgZWxlbWVudHMgaGF2ZSBuYW1lcyB0aGF0IGNhbm5vdCBiZSB1c2VkXHJcbi8vXHRcdGluIEpYIGRpcmVjdGx5IChlLmcuIGJlY2F1c2Ugb2YgaHlwaGVuIGxpa2UgaW4gXCJjb2xvci1wcm9maWxlXCIpLiBJbiB0aGlzIGNhc2UgdGhlIHN0cmluZ1xyXG4vL1x0XHR2YWx1ZSB3aWxsIGJlIHRoZSBhY3R1YWwgZWxlbWVudCBuYW1lIHRvIHB1dCBpbnRvIEhUTUwgZG9jdW1lbnQsIHdoaWxlIEpTWCB3aWxsIGJlIHVzaW5nXHJcbi8vXHRcdGEgY2FtZWwtZm9ybWF0dGVkIG5hbWUgKGUuZy4gXCJjb2xvclByb2ZpbGVcIikuXHJcbi8vXHQtIGJvb2xlYW4gLSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyBcImR1YWwtcHVycG9zZVwiOyB0aGF0IGlzLCBlbGVtZW50IHdpdGggdGhpc1xyXG4vL1x0XHRuYW1lIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBIVE1MIG9yIFNWRyBlbGVtZW50LlxyXG4vL1x0LSB0dXBsZSBvZiB0d28gZWxlbWVudHMgLSBzdHJpbmcgYW5kIGJvb2xlYW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWJvdmUgaXRlbXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTdmdFbG1JbmZvID0gYm9vbGVhbiB8IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbXMgY2xhc3MgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIG5hbWVzIHVzZWQgdG8gZGVmaW5lIFNWRyBlbGVtZW50cyBpbiBKU1guIFdoZW5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYW4gZWxlbWVudCwgd2UgbG9va3VwIHRoZSBwcm92aWRlZCB0YWcgbmFtZSBhbmQgaWYgd2UgZmluZCBpdCBpbiB0aGlzIGNsYXNzXHJcbi8vIHdlIHVzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgd2l0aCB0aGUgcHJvcGVyIFNWRyBuYW1lc3BhY2Ugc3RyaW5nLiBWYWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllc1xyXG4vLyBhcmUgU3ZnRWxtSW5mbyB2YWx1ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgU3ZnRWxtc1xyXG57XHJcblx0Ly8gTmFtZXNwYWNlIHVzZWQgdG8gY3JlYXRlIFNWRyBlbGVtZW50cy5cclxuXHRwdWJsaWMgc3RhdGljIG5hbWVzcGFjZTogc3RyaW5nID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gU1ZHIHRhZ1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoIHRhZ05hbWU6IHN0cmluZywgaW5mbzogU3ZnRWxtSW5mbyk6IHZvaWRcclxuXHR7XHJcblx0XHRTdmdFbG1zLmluZm9zW3RhZ05hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBjYW4gYmUgdXNlZCBhcyBhbiBTVkcgZWxlbWVudCBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNTdmdFbG0oIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGFnTmFtZSBpbiBTdmdFbG1zLmluZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIGdpdmVuIHRhZyBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZTogc3RyaW5nKTogU3ZnRWxtSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGluZm9ybWF0aW9uIG9iamVjdCBoYXMgdGhlIFwiZHVhbC1wdXJwb3NlXCIgZmxhZyBzZXQuXHJcblx0cHVibGljIHN0YXRpYyBpc0R1YWxQdXJwb3NlKCBpbmZvOiBTdmdFbG1JbmZvKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDEgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMV0gOiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gZmFsc2UgOiBpbmZvIGFzIGJvb2xlYW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgaXMgYSBcImR1YWwtcHVycG9zZVwiIGVsZW1lbnQ7IHRoYXQgaXMgY2FuIGJlIGVpdGhlclxyXG5cdC8vIEhUTUwgYW5kIFNWRyBlbGVtZW50LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNUYWdEdWFsUHVycG9zZSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5pc0R1YWxQdXJwb3NlKCBpbmZvKSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBvYmplY3QgYW5kIHRoZSB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZSggaW5mbzogU3ZnRWxtSW5mbywgdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMCA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVswXSA6IHRhZ05hbWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGluZm8gYXMgc3RyaW5nIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCB0aGUgZ2l2ZW4gdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWVGb3JUYWcoIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5nZXRFbG1OYW1lKCBpbmZvLCB0YWdOYW1lKSA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgU1ZHIGVsZW1lbnQgbmFtZXMgdG8gU3ZnRWxtSW5mby5cclxuXHRwcml2YXRlIHN0YXRpYyBpbmZvczoge1tlbG1OYW1lOnN0cmluZ106IFN2Z0VsbUluZm99ID1cclxuXHR7XHJcblx0XHRzdmc6IGZhbHNlLFxyXG5cclxuXHRcdGE6IHRydWUsXHJcblx0XHRhbmltYXRlOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVNb3Rpb246IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXHJcblxyXG5cdFx0Y2lyY2xlOiBmYWxzZSxcclxuXHRcdGNsaXBQYXRoOiBmYWxzZSxcclxuXHRcdGNvbG9yUHJvZmlsZTogXCJjb2xvci1wcm9maWxlXCIsXHJcblxyXG5cdFx0ZGVmczogZmFsc2UsXHJcblx0XHRkZXNjOiBmYWxzZSxcclxuXHRcdGRpc2NhcmQ6IGZhbHNlLFxyXG5cclxuXHRcdGVsbGlwc2U6IGZhbHNlLFxyXG5cclxuXHRcdGZlQmxlbmQ6IGZhbHNlLFxyXG5cdFx0ZmVDb2xvck1hdHJpeDogZmFsc2UsXHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBmYWxzZSxcclxuXHRcdGZlQ29tcG9zaXRlOiBmYWxzZSxcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IGZhbHNlLFxyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVEcm9wU2hhZG93OiBmYWxzZSxcclxuXHRcdGZlRmxvb2Q6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQTogZmFsc2UsXHJcblx0XHRmZUZ1bmNCOiBmYWxzZSxcclxuXHRcdGZlRnVuY0c6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jUjogZmFsc2UsXHJcblx0XHRmZUdhdXNzaWFuQmx1cjogZmFsc2UsXHJcblx0XHRmZUltYWdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZU5vZGU6IGZhbHNlLFxyXG5cdFx0ZmVNb3JwaG9sb2d5OiBmYWxzZSxcclxuXHRcdGZlT2Zmc2V0OiBmYWxzZSxcclxuXHRcdGZlUG9pbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVTcG90TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVUaWxlOiBmYWxzZSxcclxuXHRcdGZlVHVyYnVsZW5jZTogZmFsc2UsXHJcblx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0Zm9yZWlnbk9iamVjdDogZmFsc2UsXHJcblxyXG5cdFx0ZzogZmFsc2UsXHJcblxyXG5cdFx0aGF0Y2g6IGZhbHNlLFxyXG5cdFx0aGF0Y2hwYXRoOiBmYWxzZSxcclxuXHJcblx0XHRpbWFnZTogZmFsc2UsXHJcblxyXG5cdFx0bGluZTogZmFsc2UsXHJcblx0XHRsaW5lYXJHcmFkaWVudDogZmFsc2UsXHJcblxyXG5cdFx0bWFya2VyOiBmYWxzZSxcclxuXHRcdG1hc2s6IGZhbHNlLFxyXG5cdFx0bWV0YWRhdGE6IGZhbHNlLFxyXG5cdFx0bXBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdHBhdGg6IGZhbHNlLFxyXG5cdFx0cGF0dGVybjogZmFsc2UsXHJcblx0XHRwb2x5Z29uOiBmYWxzZSxcclxuXHRcdHBvbHlsaW5lOiBmYWxzZSxcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogZmFsc2UsXHJcblx0XHRyZWN0OiBmYWxzZSxcclxuXHJcblx0XHRzY3JpcHQ6IHRydWUsXHJcblx0XHRzZXQ6IGZhbHNlLFxyXG5cdFx0c29saWRjb2xvcjogZmFsc2UsXHJcblx0XHRzdG9wOiBmYWxzZSxcclxuXHRcdHN0eWxlOiB0cnVlLFxyXG5cdFx0c3dpdGNoOiBmYWxzZSxcclxuXHRcdHN5bWJvbDogZmFsc2UsXHJcblxyXG5cdFx0dGV4dDogZmFsc2UsXHJcblx0XHR0ZXh0UGF0aDogZmFsc2UsXHJcblx0XHR0aXRsZTogdHJ1ZSxcclxuXHRcdHRleHRTcGFuOiBmYWxzZSxcclxuXHJcblx0XHR1c2U6IGZhbHNlLFxyXG5cclxuXHRcdHZpZXc6IGZhbHNlLFxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvbXBhcmUoIG8xOiBhbnksIG8yOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHRpZiAobzEgPT09IG8yKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCAmJiBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCB8fCBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSAhPT0gdHlwZW9mIG8yKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwIGluIG8xKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWRlZXBDb21wYXJlKCBvMVtwXSwgbzJbcF0pKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBwIGluIG8yKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIShwIGluIG8xKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpICE9PSBBcnJheS5pc0FycmF5KG8yKSlcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSlcclxuXHR7XHJcblx0XHRpZiAobzEubGVuZ3RoICE9PSBvMi5sZW5ndGgpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IDAsIGxlbiA9IG8xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFkZWVwQ29tcGFyZSggbzFbaV0sIG8yW2ldKSlcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlc2UgYXJlIHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zIG9yIGZ1bmN0aW9ucyBhbmQgdGhleSBhcmUgZGlmZmVyZW50XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaE9iamVjdCggbzogYW55KTogbnVtYmVyXHJcbntcclxuXHRpZiAobyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0ZWxzZSBpZiAobyA9PT0gbnVsbClcclxuXHRcdHJldHVybiAxO1xyXG5cdGVsc2UgaWYgKGlzTmFOKDApKVxyXG5cdFx0cmV0dXJuIDI7XHJcblx0ZWxzZSBpZiAobyA9PT0gdHJ1ZSlcclxuXHRcdHJldHVybiAzO1xyXG5cdGVsc2UgaWYgKG8gPT09IGZhbHNlKVxyXG5cdFx0cmV0dXJuIDQ7XHJcblxyXG5cdGxldCBoID0gMTA7XHJcblxyXG5cdGlmICh0eXBlb2YgbyA9PT0gXCJudW1iZXJcIilcclxuXHRcdHJldHVybiAxMCArIG87XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gaGFzaFN0cmluZyggbyk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvLm5hbWUpO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobykpXHJcblx0e1xyXG5cdFx0bGV0IGxlbiA9IG8ubGVuZ3RoO1xyXG5cdFx0bGV0IGggPSAxMCArIGxlbjtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdCBoICs9IGkgKyBoYXNoT2JqZWN0KCBvW2ldKTtcclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0bGV0IGggPSAxMDtcclxuXHRcdGZvciggbGV0IHAgaW4gbylcclxuXHRcdFx0aCArPSBoYXNoU3RyaW5nKHApICsgaGFzaE9iamVjdChvW3BdKTtcclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaFN0cmluZyggczogc3RyaW5nKTogbnVtYmVyXHJcbntcclxuXHRpZiAoIXMpXHJcblx0XHRyZXR1cm4gNTtcclxuXHJcblx0bGV0IGxlbiA9IHMubGVuZ3RoO1xyXG5cdGxldCBoID0gMTAgKyBsZW47XHJcblx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuXHRcdGggKz0gcy5jaGFyQ29kZUF0KGkpO1xyXG5cdHJldHVybiBoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgY2xhc3MgcHJvcGVydGllcyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuLy8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcbntcclxuXHRsZXQgcmVzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdHtcclxuXHRcdGlmICghY2xhc3NOYW1lKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHQvLyBwYXJzZSB0aGUgY2xhc3MgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRsZXQgY2xhc3NOYW1lQXNTdHJpbmc6IHN0cmluZyA9IHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHQ6IChjbGFzc05hbWUgYXMgc3RyaW5nW10pLmpvaW4oIFwiIFwiKTtcclxuXHJcblx0XHRpZiAocmVzQ2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlc0NsYXNzTmFtZSArPSBcIiBcIjtcclxuXHJcblx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzQ2xhc3NOYW1lO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuLy8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogU3R5bGVzZXRbXSk6IFN0eWxlc2V0XHJcbntcclxuXHQvLyBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IGZvciBhY2N1bXVsYXRpbmcgc3R5bGUgcHJvcGVydGllc1xyXG5cdGxldCByZXNTdHlsZTogU3R5bGVzZXQgPSB7fTtcclxuXHRtZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRyZXR1cm4gcmVzU3R5bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IFN0eWxlc2V0LCAuLi5zdHlsZXM6IChTdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBzdHlsZSBvZiBzdHlsZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzdHlsZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0bGV0IHN0eWxlT2JqOiBTdHlsZXNldCA9IHR5cGVvZiBzdHlsZSA9PT0gXCJvYmplY3RcIlxyXG5cdFx0XHRcdD8gc3R5bGUgYXMgU3R5bGVzZXRcclxuXHRcdFx0XHQ6IHBhcnNlU3R5bGVTdHJpbmcoIHN0eWxlIGFzIHN0cmluZyk7XHJcblxyXG5cdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVPYmopXHJcblx0XHRcdHJlc1N0eWxlW3Byb3BOYW1lXSA9IHN0eWxlT2JqW3Byb3BOYW1lXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGFyc2VzIHRoZSBnaXZlbiBzdHlsZSBzdHJpbmcgaW50byB0aGUgU3R5bGUgb2JqZWN0LlxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdHlsZVN0cmluZyggczogc3RyaW5nKTogU3R5bGVzZXRcclxue1xyXG5cdGlmICghcylcclxuXHRcdHJldHVybiB7fTtcclxuXHJcblx0bGV0IHJldFN0eWxlOiBTdHlsZXNldCA9IHt9O1xyXG5cclxuXHRsZXQgZWxtczogc3RyaW5nW10gPSBzLnNwbGl0KFwiO1wiKTtcclxuXHRmb3IoIGxldCBlbG0gb2YgZWxtcylcclxuXHR7XHJcblx0XHRsZXQgcGFpcjogc3RyaW5nW10gPSBlbG0uc3BsaXQoIFwiOlwiKTtcclxuXHRcdGlmICghcGFpciB8fCBwYWlyLmxlbmd0aCA9PT0gMCB8fCBwYWlyLmxlbmd0aCA+IDIpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdHJldFN0eWxlW2Rhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmV0U3R5bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG5hbWVzIHdpdGggZGFzaGVzIGludG8gbmFtZXMgaW4gY2FtZWxDYXNlLCB3aGVyZSBldmVyeSBjaGFyYWN0ZXIgYWZ0ZXIgYSBkYXNoIGlzXHJcbiAqIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlcyggLi4uc2xpY2VzOiBtaW0uU2xpY2VbXSk6IG1pbS5TbGljZVxyXG57XHJcblx0bGV0IHJlc1NsaWNlOiBtaW0uU2xpY2UgPSB7fTtcclxuXHRtZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRyZXR1cm4gcmVzU2xpY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbi8vIGludG8gdGhlIGdpdmVuIHJlc3VsdGFudCBzbGljZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlOiBtaW0uU2xpY2UsIC4uLnNsaWNlczogbWltLlNsaWNlW10pOiB2b2lkXHJcbntcclxuXHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdHJldHVybjtcclxuXHJcblx0Zm9yKCBsZXQgc2xpY2Ugb2Ygc2xpY2VzKVxyXG5cdHtcclxuXHRcdGlmICghc2xpY2UpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLnN0eWxlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdG1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNsYXNzTmFtZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBtZXJnZUNsYXNzZXMoIHJlc1NsaWNlLmNsYXNzTmFtZSBhcyBzdHJpbmcsIHNsaWNlLmNsYXNzTmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UucHJvcHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc2xpY2UucHJvcHMpXHJcblx0XHRcdFx0cmVzU2xpY2VbcHJvcE5hbWVdID0gc2xpY2VbcHJvcE5hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5jb250ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQgPSBzbGljZS5jb250ZW50O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoIHJlc1NsaWNlLmNvbnRlbnQpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IFtdO1xyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBvbGRDb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggc2xpY2UuY29udGVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fOyJdLCJzb3VyY2VSb290IjoiIn0=