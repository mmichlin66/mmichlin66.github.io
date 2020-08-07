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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Mimbl-specific style scheduler that coordinates Mimcss DOM writing with Mimbl
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const StyleScheduler_1 = __webpack_require__(/*! ../core/StyleScheduler */ "./lib/core/StyleScheduler.js");
// set Mimbl style scheduler as the default scheduler for style-related DOM-writing operations.
exports.mimblStyleSchedulerType = StyleScheduler_1.initializeMimblStyleScheduler();
/**
 * @deprecated - use `@trigger`
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
const TriggerWatcher_1 = __webpack_require__(/*! ../utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
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
        return this.renderWatcher();
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        // start watching the function
        this.renderWatcher = TriggerWatcher_1.createWatcher(this.comp.render, this.requestUpdate, this.comp, this);
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.renderWatcher.dispose();
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
    }
    // Notifies the virtual node that it was successfully mounted. This method is called after the
    // content of node and all its sub-nodes is added to the DOM tree.
    // This method is part of the Commit phase.
    didMount() {
        if (this.comp.didMount)
            this.comp.didMount();
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
    // This method is called when the comp property has changed without actually unmounting the VN.
    // We need to stop watching the old component's render and start watching the new one's.
    reestablishWatcher() {
        this.renderWatcher.dispose();
        this.renderWatcher = TriggerWatcher_1.createWatcher(this.comp.render, this.requestUpdate, this.comp, this);
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
const TriggerWatcher_1 = __webpack_require__(/*! ../utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
//////////
/**
 * A Symbol used to connect between the original function and the VNs created for it.
 */
let symKeysToNodes = Symbol("symKeysToNodes");
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
        this.renderRequired = false;
        this.key = props.key;
        // if a key was not provided we use the value of thisArg (which might be the current
        // component) as a key. If that is undefined either we use the function itself as a key.
        this.linkKey = props.key || this.thisArg || this.func;
    }
    replaceArgs(args) {
        this.args = args;
        this.renderRequired = true;
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
    get renderOnUpdate() { return this.renderRequired; }
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
        // return this.func.apply( this.thisArg, this.args);
        return this.funcWatcher(this.args);
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.linkNodeToFunc();
        // start watching the function
        this.funcWatcher = TriggerWatcher_1.createWatcher(this.func, this.updateFromWatcher, this.thisArg, this);
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
//////////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.funcWatcher.dispose();
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
        // method should also be called - but only to clear the renderRequired flag.
        return VN_1.VNUpdateDisp.DoCommitDoRender;
    }
    // Commits updates made to this node to DOM.
    // This method is part of the Commit phase.
    commitUpdate(newVN) {
        // we use this method only to clear the renderRequired flag"
        this.renderRequired = false;
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
        vn.renderRequired = true;
        vn.requestUpdate();
    }
    // This method is invoked when a value of some trigger object being watched by the function
    // is changed.
    updateFromWatcher() {
        this.renderRequired = true;
        this.requestUpdate();
    }
    linkNodeToFunc() {
        let mapKeysToNodes = this.func[symKeysToNodes];
        if (!mapKeysToNodes) {
            mapKeysToNodes = new Map();
            this.func[symKeysToNodes] = mapKeysToNodes;
        }
        mapKeysToNodes.set(this.linkKey, this);
    }
    unlinkNodeFromFunc() {
        let mapKeysToNodes = this.func[symKeysToNodes];
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
        super.willMount();
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        super.willUnmount();
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
        // if the component instances are different, then we need to prepare the new instance for
        // mounting and the old one for unmounting.
        if (needsUpdating) {
            this.willMountInstance(newComp);
            this.willUnmountInstance(this.comp);
            this.comp = newComp;
            // now that we have the new component in our comp property we should reestablish
            // watching its render method
            super.reestablishWatcher();
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
/// #endif
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
        super.willMount();
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        super.willUnmount();
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
 *
 * Note that "this" can be undefined if the function was scheduled without being in the context of
 * any virtual node.
 */
function CallbackWrapper() {
    // remember the current VN and set the current VN to be the VN from the "this" value. Note
    // that this can be undefined
    let currentVN = exports.s_currentVN;
    let currentClassComp = exports.s_currentClassComp;
    if (this) {
        exports.s_currentVN = this;
        exports.s_currentClassComp = exports.s_currentVN.comp ? exports.s_currentVN.comp : exports.s_currentVN.creator;
    }
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
        if (this) {
            // restore the current VN to the remembered value;
            exports.s_currentVN = currentVN;
            exports.s_currentClassComp = currentClassComp;
        }
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
////////////////////////
////////////////////////////////////////////////////////////////////
//////////////
    if (vn.didMount)
        vn.didMount();
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

/***/ "./lib/core/StyleScheduler.js":
/*!************************************!*\
  !*** ./lib/core/StyleScheduler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const css = __webpack_require__(/*! mimcss */ "mimcss");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./lib/core/Scheduler.js");
/**
 * The StyleScheduler class is responsible for scheduling writing style-related informatino to
 * the DOM using the Mimbl scheduling functionality
 */
class StyleScheduler {
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
        Scheduler_1.scheduleFuncCall(this.onUpdate, false, this);
    }
    /**
     * Is invoked when the scheduler needs to cancels its scheduled callback or event.
     */
    cancelDOMUpdate() {
    }
    /**
     * Is invoked when the timeout expires.
     */
    onUpdate() {
        this.doDOMUpdate();
    }
}
/**
 * Initializes style scheduler used by Mimbl to schedule writing style changes to the DOM.
 */
function initializeMimblStyleScheduler() {
    let schedulerType = css.registerScheduler(new StyleScheduler());
    css.setDefaultSchedulerType(schedulerType);
    return schedulerType;
}
exports.initializeMimblStyleScheduler = initializeMimblStyleScheduler;


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
__export(__webpack_require__(/*! ./utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js"));


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

/***/ "./lib/utils/TriggerWatcher.js":
/*!*************************************!*\
  !*** ./lib/utils/TriggerWatcher.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Common types
//
///////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a trigger object with the given initial value.
 * @param v
 */
function createTrigger(v) {
    return new Trigger(v);
}
exports.createTrigger = createTrigger;
/**
 * The Trigger class represents an object that keeps a value and notifies all attached watchers
 * when this value changes.
 */
class Trigger {
    constructor(v) {
        // Set of watchers watching over this trigger's value. This member serves as a storage instead
        // of having the manager to map of triggers to the set of watchers.
        this.watchers = new Set();
        this.v = v;
    }
    // Retrieves the current value
    get() {
        g_manager.notifyTriggerRead(this);
        return this.v;
    }
    // Sets a new value
    set(v) {
        // nothing to do if the value is the same
        if (v === this.v)
            return;
        this.v = v;
        // we only notify the manager if there is at least one watcher attached to our trigger;
        // the watchers that would connect later will have to read the trigger's value first.
        if (this.watchers.size > 0)
            g_manager.notifyTriggerChanged(this);
    }
}
/**
 * A Symbol used to keep a watcher object attached to the watcher function.
 */
let symWatcher = Symbol("symWatcher");
/**
 * Creates a watcher function with the same signature as the given regular function. When the
 * watcher function is invoked it invokes the original function and it notices all trigger objects
 * that were read during its execution. When any of these trigger objects have their values
 * changed, the responder function will be called.
 * @param func Function to be watched
 * @param responder Function to be invoked when values of the trigger objects encountered during
 * the original function's last execution change.
 * @param funcThis Optional value of "this" that will be used to call the original function.
 * @param responderThis Optional value of "this" that will be used to call the responder function.
 * If this value is undefined, the "this" value for the original function will be used.
 */
function createWatcher(func, responder, funcThis, responderThis) {
    function watcherFunc(...args) {
        let watcher = watcherFunc[symWatcher];
        // if the value of "this" for the original function was not supplied but now when the
        // watcher executes, "this" is defined, we remember it.
        return watcher.execute(this, args);
    }
    // keep the watcher object in the function object itself using a symbol.
    watcherFunc[symWatcher] = new Watcher(func, responder, funcThis, responderThis);
    // implement the dispose method
    watcherFunc.dispose = function () {
        let watcher = watcherFunc[symWatcher];
        watcher && watcher.dispose();
        delete watcherFunc[symWatcher];
    };
    return watcherFunc;
}
exports.createWatcher = createWatcher;
/**
 * The Watcher class encapsulates the functionality of watching for trigger objects encountered
 * during a function execution. When the trigger objects are read, they are remembered by the
 * Watcher object. Whenever a value is changed in any of these triggers, the watcher object is
 * notified and calls the responder function.
 */
class Watcher {
    constructor(func, responder, funcThis, responderThis) {
        // Set of triggers currently being watched by this watcher. This memeber is used by the
        // manager. It is essentially a storage, which is used instead of the manager having a
        // map of watchers to the sets of triggers. The purpose of knowing what triggers are used
        // by what watcher is to remove the watcher from all these triggers before the watched
        // function is called.
        this.triggers = new Set();
        this.func = func;
        this.responder = responder;
        this.funcThis = funcThis;
        // if responder "this" is not defined use the one for the function
        this.responderThis = responderThis ? responderThis : funcThis;
    }
    /**
     * Executes the original function while updating the set of attached triggers. The "funcThis"
     * parameter is the "this" under which the internal watcher function has been called. It
     * will be used to set the "this" to apply when invoking the original function if it wasn't
     * set yet.
     */
    execute(funcThis, args) {
        // check whether our watcher has been already disposed
        if (!this.func)
            throw new Error("Disposed watcher was called.");
        // Fix our "this" if it hasn't been set so far
        if (!this.funcThis && funcThis) {
            this.funcThis = funcThis;
            if (!this.responderThis)
                this.responderThis = funcThis;
        }
        // clear all current triggers
        this.clean();
        // install our watcher at the top of the watchers stack
        g_manager.pushWatcher(this);
        // call the function
        try {
            return this.func.apply(this.funcThis, args);
        }
        finally {
            // remove our watcher from the top of the watchers stack
            g_manager.popWatcher();
        }
    }
    /** Clears internal resources. */
    dispose() {
        // check whether the object is already disposed
        if (!this.func)
            return;
        // clear all triggers
        this.clean();
        // set the func and responder properties to null to indicate that the watcher has been disposed
        this.func = null;
        this.responder = null;
        this.funcThis = null;
        this.responderThis = null;
    }
    // Notifies the watcher that it should call the responder function. This occurs when there
    // are triggers whose values have been changed
    respond() {
        // check whether our watcher has been already disposed. It can happen if after all mutation
        // scopes exited the manager notifies multiple watchers and one of the watchers' responder
        // disposes of another watcher.
        if (!this.responder)
            return;
        this.responder.apply(this.responderThis);
    }
    /**
     * Cleans the state of the watcher, so that it is detached from any triggers and is removed
     * from the manager's set of deferred watchers.
     */
    clean() {
        // detaches this watcher from all the triggers and the triggers from this watcher.
        this.triggers.forEach(trigger => trigger.watchers.delete(this));
        this.triggers.clear();
        // ask the manager to forget about this watcher if it is currently in te deferred set
        g_manager.removeDeferredWatcher(this);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Manager
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The TriggerWatcherManager class is a singleton class that represents the global functionality
 * of the trigger-watcher mechanism. It includes a stack of watcher objects currently executing
 * their functions and watching for trigger objects to be read. When a trigger object is being
 * read (that is its get() method is called), all the watchers in the stack are notified, because
 * they all depend on the trigger object's value for their functionality.
 *
 * It also maintains a reference count of mutation scopes and handles notifying watchers of
 * mutations only when the last mutation scope has exited. The triggers don't notify the watchers
 * directly; instead, they notify the manager, which accumulates the information and notifies all
 * the watchers once out of the last mutation scope.
 */
class TriggerWatcherManager {
    constructor() {
        // Stack of watcher objects. Watchers are pushed on top before they call the watched
        // function and removed after this function returns. When a trigger notifies that its value
        // has been changed, all the watchers in the stack are attached to this trigger. This means
        // that the trigger's value is used by the watched functions.
        this.watcherStack = [];
        // Number of currently active mutation scopes. When a trigger notifies that its value has been
        // changed while this number is not 0, the trigger will be remembered in the internal set.
        // After all mutation scopes are finished, the watchers attached to all triggers in the set
        // will be notified. When a trigger notifies that its value has been changed while there are
        // no mutation scopes present, the watchers attached to the trigger are notified immediately.
        this.mutationScopesRefCount = 0;
        // Set of watchers that should be notified when the last mutation scope exits. Using Set
        // ensures that no matter how many triggers reference a watcher, the watcher will be present
        // only once.
        this.deferredWatchers = new Set();
    }
    /**
     * Pushes the given watcher object to the top of the stack
     */
    pushWatcher(watcher) {
        this.watcherStack.push(watcher);
    }
    /**
     * Removes the watcher object currently on the top of the stack
     */
    popWatcher() {
        this.watcherStack.pop();
    }
    /**
     * Removes the watcher object from the set of deferred watchers
     */
    removeDeferredWatcher(watcher) {
        this.deferredWatchers.delete(watcher);
    }
    /**
     * Increments mutation scope reference count
     */
    enterMutationScope() {
        this.mutationScopesRefCount++;
    }
    /**
     * Increments mutation scope reference count. If it reaches zero, notify all deferred watchers.
     */
    exitMutationScope() {
        this.mutationScopesRefCount--;
    }
    /**
     * Notifies that the value of the given trigger object has been read.
     */
    notifyTriggerRead(trigger) {
        // attach all watchers currently on the stack to the trigger
        for (let watcher of this.watcherStack) {
            watcher.triggers.add(trigger);
            trigger.watchers.add(watcher);
        }
    }
    /**
     * Notifies that the value of the given trigger object has been changed. If this happens while
     * within a mutation scope, we don't notify the watchers of this trigger but put them in a
     * deferred set. If this happens outside of any mutation scope. In this case we notify the
     * watchers of this trigger right away.
     */
    notifyTriggerChanged(trigger) {
        // this method is supposed to be called only if the trigger has watchers
/////////////////////
        if (trigger.watchers.size === 0)
            console.error("notifyTriggerChanged was called by a trigger without watchers");
//////////////////
        if (this.mutationScopesRefCount > 0)
            trigger.watchers.forEach(watcher => this.deferredWatchers.add(watcher));
        else {
            // since when watchers respond, they can execute their watcher functions and that could
            // mess with the same set of watchers we are iterating over. Therefore, we make a copy
            // of this set first.
            let watchers = Array.from(trigger.watchers.keys());
            watchers.forEach(watcher => watcher.respond());
        }
    }
}
/** Singleton TriggerWatcherManager bject */
let g_manager = new TriggerWatcherManager();
/**
 * Creates a computed trigger object whose value is calculated by the given function and with an
 * optional initial value.
 * @param v
 */
function createComputedTrigger(func, funcThis, v) {
    return new ComputedTrigger(func, funcThis, v);
}
exports.createComputedTrigger = createComputedTrigger;
/**
 * The ComputedTrigger class represents a value that is calculated by a function. This is a
 * combination of Trigger and Watcher. It is a watcher because it watches over the function and
 * calls it whenever any triggers this function uses are changed. It is a trigger because it
 * triggers change when the function returns a new value.
 *
 * The important fact about a computed trigger is that it only invokes the watched function
 * if it's value is being used by at least one watcher.
 */
class ComputedTrigger extends Trigger {
    constructor(func, funcThis, v) {
        super(v);
        this.func = func;
        this.funcThis = funcThis;
        this.funcWatcher = createWatcher(func, this.responder, funcThis, this);
        this.set(this.funcWatcher());
    }
    /** Suspend computing new values even if the triggers being watched change their values */
    suspend() {
        // check whether the object is disposed or already suspended
        if (!this.func || !this.funcWatcher)
            return;
        this.funcWatcher.dispose();
        this.funcWatcher = null;
    }
    /** Resumes computing by invoking the watched function call and returns the current value */
    resume() {
        // check whether the object is disposed or not suspended
        if (!this.func || this.funcWatcher)
            return;
        // establish a watcher and call it
        this.funcWatcher = createWatcher(this.func, this.responder, this.funcThis, this);
        let v = this.funcWatcher();
        // set the return value as the current value and return it
        this.set(v);
        return v;
    }
    /** Calls the watched function and returns the current value */
    call() {
        // check whether the object is disposed
        if (!this.func)
            return;
        // if the object is not suspended, we call the watcher; otherwise we call the function
        // directly
        let v = this.funcWatcher ? this.funcWatcher() : this.func.apply(this.funcThis);
        // set the return value as the current value and return it
        this.set(v);
        return v;
    }
    /** Clears internal resources. */
    dispose() {
        // check whether the object is already disposed
        if (!this.func)
            return;
        if (this.funcWatcher) {
            this.funcWatcher.dispose();
            this.funcWatcher = null;
        }
        this.func = null;
    }
    /**
     * This method is invoked when our watcher is notified of changes in its trigger values. We
     * respond by invoking the function (through the watcher) and setting its return value as
     * our new value. This can trigger changes in watchers that are using our value. Note that
     * we only invoke our watcher if there is at least one watcher that watches our value.
     */
    responder() {
        if (this.funcWatcher && this.watchers.size > 0)
            this.set(this.funcWatcher());
    }
}
/**
 * A Symbol used to keep a mutator object attached to the mutator function.
 */
let symMutator = Symbol("symMutator");
/**
 * Creates a mutator function with the same signature as the given regular function which executes
 * the wrapped function within a mutation scope. Watchers for triggers that have their values
 * changed during execution of this function are not notified immediately. Instead, the watchers
 * are "deferred" and will be notified only once after the last mutation scope exits. This can be
 * useful since usually watchers depend on many triggers and we don't want the watchers being
 * notified many time but rather only once after all the changes have been done.
 * @param func Function around which to establish a mutation scope. If this is a class method,
 * then either provide the funcThis parameter or bind the function before passing it in. Note
 * that arrow functions are already bound.
 * @param funcThis The "this" value to apply when calling the function. This is necessary if the
 * function is an unboundclass method.
 */
function createMutator(func, funcThis) {
    function mutatorFunc(...args) {
        let mutator = mutatorFunc[symWatcher];
        // if the value of "this" for the original function was not supplied but now when the
        // watcher executes, "this" is defined, we remember it.
        return mutator.execute(this, args);
    }
    // keep the mutator object in the function object itself using a symbol.
    mutatorFunc[symMutator] = new Mutator(func, funcThis);
    // implement the dispose method
    mutatorFunc.dispose = function () {
        let mutator = mutatorFunc[symMutator];
        mutator && mutator.dispose();
        delete mutatorFunc[symMutator];
    };
    return mutatorFunc;
}
exports.createMutator = createMutator;
/**
 * The Mutator class encapsulates the functionality of executing a wrapped function under a
 * mutation scope.
 */
class Mutator {
    constructor(func, funcThis) {
        this.func = func;
        this.funcThis = funcThis;
    }
    /**
     * Executes the original function in a mutation scope.
     */
    execute(funcThis, args) {
        // check whether our watcher has been already disposed
        if (!this.func)
            throw new Error("Disposed mutator was called.");
        // Fix our "this" if it hasn't been set so far
        if (!this.funcThis && funcThis)
            this.funcThis = funcThis;
        g_manager.enterMutationScope();
        try {
            return this.func.apply(this.funcThis, args);
        }
        finally {
            g_manager.exitMutationScope();
        }
    }
    /** Clears internal resources. */
    dispose() {
        // check whether the object is already disposed
        if (!this.func)
            return;
        // set the func and responder properties to null to indicate that the watcher has been disposed
        this.func = null;
        this.funcThis = null;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Decorators
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Decorator function for defining properties so that changing their value will any watcher
 * objects attached to them to respond.
 */
function trigger(target, name) {
    let sym = Symbol(name);
    Object.defineProperty(target, name, {
        get() {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createTrigger();
            return triggerObj.get();
        },
        set(val) {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createTrigger(val);
            else
                triggerObj.set(val);
        },
    });
}
exports.trigger = trigger;
/**
 * Decorator function for defining "get" properties or functions retuning a value so that this
 * value will automatically recalculated if any triggers on which this value depends have their
 * values changed. WHen this happens, the watcher objects attached to this computed value will
 * be notified to respond.
 */
function computed(target, name, propDesc) {
    let sym = Symbol(name);
    // propDesc.value is undefined for accessors and defined for functions
    if (!propDesc.value) {
        if (!propDesc.get)
            throw new Error("@computed property requires get() accessor");
        let orgGet = propDesc.get;
        propDesc.get = function () {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createComputedTrigger(orgGet, this);
            return triggerObj.get();
        };
        if (propDesc.set) {
            let orgSet = propDesc.set;
            propDesc.set = function (v) {
                let triggerObj = this[sym];
                if (!triggerObj)
                    this[sym] = triggerObj = createComputedTrigger(orgGet, this);
                orgSet.call(this, v);
                triggerObj.set(v);
            };
        }
    }
    else {
        let orgFunc = propDesc.value;
        propDesc.value = function (v) {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createComputedTrigger(orgFunc, this);
            return triggerObj.get();
        };
    }
}
exports.computed = computed;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Qcm9taXNlUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdHlsZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1RleHRWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5CYXNlLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5EaXNwLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL21pbWJsVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRWxtQXR0ci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3ZnRWxtcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9UcmlnZ2VyV2F0Y2hlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9taW1ibC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1jc3NcIixcImNvbW1vbmpzMlwiOlwibWltY3NzXCIsXCJjb21tb25qc1wiOlwibWltY3NzXCIsXCJhbWRcIjpcIm1pbWNzc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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U0FBUztnQkFDakMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUVsQztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3JDO29CQUNDLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFwREQsc0NBb0RDOzs7Ozs7Ozs7Ozs7QUMxUkQsb0QiLCJmaWxlIjoibWltYmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWNzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1jc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWJsVHlwZXMuanNcIik7XG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1N0eWxlc2V0LCBnZXRTdHlsZVByb3BWYWx1ZSwgRXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vYXBpL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBMb2NhbFN0eWxlczogSUxvY2FsU3R5bGVTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUxvY2FsU3R5bGVTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSBjb21wb25lbnRzIHRoYXRcclxuLy8gZGVmaW5lIHRoZWlyIGxvY2FsIENTUyBzdHlsZXM7IHRoYXQgaXMsIGNvbXBvbmVudHMgZGVyaXZpbmcgZnJvbSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzXHJcbi8vIGNsYXNzLiBUaGUgaW50ZXJmYWNlIGFsbG93cyByZXRyaWV2aW5nIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVjb3JhdGVkIHdpdGggdGhlIHVuaXF1ZVxyXG4vLyBJRCwgd2hpY2ggYXZvaWRzIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGJldHdlZW4gY29tcG9uZW50cyBvZiB0aGUgc2FtZSBvciBkaWZmZXJlbnQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cyB0aGF0IGRlZmluZSBsb2NhbCBDU1Mgc3R5bGVzLlxyXG4vLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIG1vdW50ZWQgaXQgY3JlYXRlcyBhIG5ldyA8c3R5bGU+IGVsZW1lbnQgKHdpdGhpbiB0aGUgPGhlYWQ+IGVsZW1lbnQpLlxyXG4vLyBBbGwgY2xhc3MgbmFtZXMgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgd2l0aGluIHRoaXMgc3R5bGUgd2lsbCBoYXZlIGEgdW5pcXVlIElEIGFkZGVkIHRvXHJcbi8vIHRoZW0gaW4gb3JkZXIgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgbmFtZXMgYW1vbmcgb3RoZXIgY29tcG9uZW50cyAob2YgdGhlIHNhbWUgb3Igb2YgZGlmZmVyZW50XHJcbi8vIHR5cGUuIFRoaXMgY2xhc3MgYWxzbyBwdWJsaXNoZXMgYSBzZXJ2aWNlIGltcGxlbWVudGluZyB0aGUgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcblx0XHRcdFx0ZXh0ZW5kcyBtaW0uQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcblx0XHRcdFx0aW1wbGVtZW50cyBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVFByb3BzID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMubV91bmlxdWVJRCA9IChNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkpLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLnJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsUnVsZUluZm8+KCk7XHJcblx0XHR0aGlzLnJ1bGVOYW1lcyA9IFtdO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgaW4gdGhlIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHR0aGlzLnN0eWxlRWxtLmlkID0gdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5zdHlsZUVsbSk7XHJcblxyXG5cdFx0Ly8vLyBXZWJLaXQgaGFjayA6KFxyXG5cdFx0Ly90aGlzLnN0eWxlRWxtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gSUxvY2FsU3R5bGVTZXJ2aWNlIGltcGxlbWVudGF0aW9uLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cHVibGljIGdldCB1bmlxdWVJRCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX3VuaXF1ZUlEOyB9XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBQdWJsaWMgaW50ZXJmYWNlLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGNyZWF0ZVN0eWxlUnVsZSggbmFtZTogc3RyaW5nLCBzZWxlY3Rvcj86IHN0cmluZywgcHJvcHM/OiBTdHlsZXNldCk6IElNQ3NzU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMuY3JlYXRlRHVtbXlSdWxlKCBuYW1lLCBcImR1bW15IHt9XCIpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlID0gaW5mby5jc3NvbVJ1bGUgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBzdHlsZSBydWxlIG9iamVjdFxyXG5cdFx0bGV0IG1jc3NTdHlsZVJ1bGU6IE1Dc3NTdHlsZVJ1bGUgPSBuZXcgTUNzc1N0eWxlUnVsZSggdGhpcy51bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHRcdGlmIChzZWxlY3RvcilcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRTZWxlY3Rvciggc2VsZWN0b3IpO1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFByb3BlcnRpZXMoIHByb3BzKTtcclxuXHJcblx0XHRpbmZvLm1jc3NSdWxlID0gbWNzc1N0eWxlUnVsZTtcclxuXHRcdHJldHVybiBtY3NzU3R5bGVSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBnZXRSdWxlKCBuYW1lOiBzdHJpbmcpOiBJTUNzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRyZXR1cm4gaW5mbyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogaW5mby5tY3NzUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgcmVtb3ZlUnVsZSggbmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiLCB0aGlzKTtcclxuXHR9XHRcclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVEdW1teVJ1bGUoIG5hbWU6IHN0cmluZywgcnVsZVRleHQ6IHN0cmluZyk6IFJ1bGVJbmZvXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcnVsZSB3aXRoIHRoaXMgbmFtZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0aWYgKGluZm8gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yZW1vdmVSdWxlKCBuYW1lKTtcclxuXHJcblx0XHQvLyB0aGUgbmV3IHJ1bGUgd2lsbCBiZWNvbWVzIHRoZSBsYXN0IGluIHRoZSBhcnJheSBvZiBydWxlc1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5ydWxlTmFtZXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgc2hlZXQ6IENTU1N0eWxlU2hlZXQgPSB0aGlzLnN0eWxlRWxtLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcblx0XHRzaGVldC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgaW5kZXgpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTUnVsZSA9IHNoZWV0LnJ1bGVzW2luZGV4XTtcclxuXHJcblx0XHQvLyBhZGQgdGhlIHJ1bGUgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZXNcclxuXHRcdHRoaXMucnVsZU5hbWVzLnB1c2goIG5hbWUpO1xyXG5cdFx0aW5mbyA9IHsgbWNzc1J1bGU6IG51bGwsIGNzc29tUnVsZSwgaW5kZXggfTtcclxuXHRcdHRoaXMucnVsZXMuc2V0KCBuYW1lLCBpbmZvKTtcclxuXHJcblx0XHRyZXR1cm4gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHRoYXQgaXMgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgYnkgdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIG1fdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0LiBJcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gTWFwIG9mIHJ1bGVzIGJ5IHRoZWlyIG5hbWVzLlxyXG5cdHByaXZhdGUgcnVsZXM6IE1hcDxzdHJpbmcsUnVsZUluZm8+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBydWxlIG5hbWVzLiBUaGlzIGlzIG5lZWRlZCB0byBhZGp1c3QgaW5kZXhlcyBvZiBydWxlcyBhZnRlciBhIHJ1bGUgaXMgcmVtb3ZlZC5cclxuXHRwcml2YXRlIHJ1bGVOYW1lczogc3RyaW5nW107XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIZWxwZXIgdHlwZSB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgQ1NTIHJ1bGUgYWRkZWQgdG8gQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBSdWxlSW5mbyA9IHsgbWNzc1J1bGU6IElNQ3NzUnVsZSwgY3Nzb21SdWxlOiBDU1NSdWxlLCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzUnVsZVxyXG57XHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHJlYWRvbmx5IGNzc29tUnVsZTogQ1NTUnVsZTtcclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0ZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NSdWxlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3Igb2JqZWN0cyByZXByZXNlbnRlZCBkaWZmZXJlbnQgdHlwZXMgb2YgQ1NTIHJ1bGVzIHRoYXRcclxuLy8gYXJlIGNyZWF0ZWQgYnkgdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjb21wb25lbnQuIFRoaXMgb2JqZWN0IHNpbXBseSBrZWVwcyB0aGUgdW5pcXVlXHJcbi8vIElEIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHdoZW4gY3JlYXRpbmcgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHNvIHRoYXQgdGhleVxyXG4vLyBhcmUgZ2xvYmFsbHkgdW5pcXVlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1J1bGVCYXNlPFQgZXh0ZW5kcyBDU1NSdWxlPiBpbXBsZW1lbnRzIElNQ3NzUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogVClcclxuXHR7XHJcblx0XHR0aGlzLnVuaXF1ZUlEID0gdW5pcXVlSUQ7XHJcblx0XHR0aGlzLmNzc29tUnVsZSA9IGNzc29tUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMudW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRwdWJsaWMgcmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUucmVwbGFjZSggXCIoKilcIiwgdGhpcy51bmlxdWVJRCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHB1YmxpYyB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cHVibGljIGNzc29tUnVsZTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0aWVzKCBwcm9wczogU3R5bGVzZXQpOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjb250YWlucyBhIHNlbGVjdG9yIGFuZCBhIHNldCBvZlxyXG4vLyBzdHlsZSBwcm9wZXJ0eSBuYW1lLXZhbHVlIHBhaXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1N0eWxlUnVsZSBleHRlbmRzIE1Dc3NSdWxlQmFzZTxDU1NTdHlsZVJ1bGU+IGltcGxlbWVudHMgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggdW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnNlbGVjdG9yVGV4dCA9IHRoaXMucmVwbGFjZSggc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpLCB0aGlzLnJlcGxhY2UoIHByb3BWYWwpLFxyXG5cdFx0XHRcdFx0XHRpbXBvcnRhbnQ/IFwiaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnRpZXMoIHByb3BzOiBTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gZ2V0U3R5bGVQcm9wVmFsdWUoIHByb3BOYW1lIGFzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQsIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0XHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlW3RoaXMucmVwbGFjZSggcHJvcE5hbWUpXSA9IHRoaXMucmVwbGFjZSggcHJvcFZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgY3NzIGZyb20gXCJtaW1jc3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3RydWN0b3Igc2lnbmF0dXJlIGZvciBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdG9mIHRoaXMgdHlwZS4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IG9mIHRoaXMgdHlwZS4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENsYXNzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHRuZXcoIHByb3BzPzogVFByb3BzKTogSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHRyZW5kZXIoKTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFsbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gRm9yIG1hbmFnZWQgY29tcG9uZW50cywgdGhlIHByb3BlcnRpZXNcclxuXHQgKiBjYW4gYWxzbyBiZSBzZXQgKGNoYW5nZWQpIHdoZW4gdGhlIGNvbXBvbmVudCdzIHBhcmVudCBpcyB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wb25lbnRzIGNhbiBkZWZpbmUgZGlzcGxheSBuYW1lIGZvciB0cmFjaW5nIHB1cnBvc2VzOyBpZiB0aGV5IGRvbid0IHRoZSBkZWZhdWx0IG5hbWVcclxuXHQgKiB1c2VkIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBjb25zdHJ1Y3RvciBuYW1lLiBOb3RlIHRoYXQgdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBiZWZvcmVcclxuXHQgKiB0aGUgdmlydHVhbCBub2RlIGlzIGF0dGFjaGVkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMsIGdldHMgb3IgY2xlYXJzIHRoZSB2aXJ0dWFsIG5vZGUgb2JqZWN0IG9mIHRoZSBjb21wb25lbnQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKi9cclxuXHR2bj86IElWTm9kZTtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlc1xyXG5cdCAqIGZyb20gaXQuXHJcblx0ICovXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBjb21wb25lbnQgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRoZSBjb250ZW50IG9mIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUPiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzLl9yID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIGNoYW5nZXMuICovXHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZW1vdmVzIGEgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgd2l0aCBhZGRMaXN0ZW5lci4gKi9cclxuXHRwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBnZXQgcigpOiBUIHsgcmV0dXJuIHRoaXMuX3I7IH1cclxuXHJcblx0LyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBzZXQgciggbmV3UmVmOiBUKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9yICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3IgPSBuZXdSZWY7XHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmZpcmUoIG5ld1JlZik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogQ2xlYXJzIHRoZSByZWZlcmVuY2UgdmFsdWUgYW5kIGFsc28gY2xlYXJzIGFsbCBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuX3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5jbGVhcigpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGVcclxuLy8gLy8gUmVmPD4gaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbi8vIC8vXHJcbi8vIC8vXHRjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbi8vIC8vXHR7XHJcbi8vIC8vXHRcdEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAvL1x0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbi8vIC8vXHR9XHJcbi8vIC8vXHJcbi8vIC8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBmaXJzdCBhY2Nlc3NlZC4gVGhlXHJcbi8vIC8vIGFjdHVhbCBvYmplY3Qgd2lsbCBiZSBhIFByb3h5IHRvIFJlZjw+IG9mIHRoZSBnaXZlbiB0eXBlIChIVE1MRGl2RWxlbWVudCBpbiB0aGlzIGNhc2UpLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0LCBuYW1lKVxyXG4vLyB7XHJcbi8vIFx0ZnVuY3Rpb24gcmVmR2V0KCBvYmosIGtleSlcclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnJba2V5XTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIHJlZlNldCggb2JqLCBrZXksIHZhbCwgcmVjZWl2ZXIpOiBib29sZWFuXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdG9iai5yID0gdmFsO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRvYmoucltrZXldID0gdmFsO1xyXG5cclxuLy8gXHRcdHJldHVybiB0cnVlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gZW5zdXJlUHJveHkoIHRoaXNPYmo6IGFueSwgYXR0ck5hbWU6IHN0cmluZyk6IGFueVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBwcm94eSA9IHRoaXNPYmpbYXR0ck5hbWVdO1xyXG4vLyBcdFx0aWYgKCFwcm94eSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0cHJveHkgPSBuZXcgUHJveHkoIG5ldyBSZWY8YW55PigpLCB7IGdldDogcmVmR2V0LCBzZXQ6IHJlZlNldCB9KTtcclxuLy8gXHRcdFx0dGhpc09ialthdHRyTmFtZV0gPSBwcm94eTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJldHVybiBwcm94eTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCBhdHRyTmFtZSA9IFwiX3JlZl9cIiArIG5hbWU7XHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHNldCggdmFsKSB7IGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSkuciA9IHZhbDsgfSxcclxuLy8gXHRcdFx0Z2V0KCkgeyByZXR1cm4gZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKTsgfVxyXG4vLyBcdFx0fVxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGxldCByZWZPYmogPSByZWYgYXMgUmVmPFQ+O1xyXG5cdFx0aWYgKG9ubHlJZiA9PT0gdW5kZWZpbmVkIHx8IHJlZk9iai5yID09PSBvbmx5SWYpXHJcblx0XHRcdHJlZk9iai5yID0gdmFsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHQocmVmIGFzIFJlZkZ1bmM8VD4pKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIERlZmluZXMgdHlwZXMgb2YgdmlydHVhbCBET00gbm9kZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5UeXBlXHJcbntcclxuXHQvKiogVG9wLWxldmVsIG5vZGUgKi9cclxuXHRSb290LFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXcgKi9cclxuXHRJbmRlcGVuZGVudENvbXAsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWCAqL1xyXG5cdE1hbmFnZWRDb21wLFxyXG5cclxuXHQvKiogU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpICovXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8qKiBET00gZWxlbWVudCAoSFRNTCBvciBTVkcpIGxhaWQgb3V0IHVzaW5nIEpTWC4gKi9cclxuXHRFbG0sXHJcblxyXG5cdC8qKiBUZXh0IG5vZGUgKi9cclxuXHRUZXh0LFxyXG5cclxuXHQvKiogV3JhcHBlciBhcm91bmQgYSBmdW5jdGlvbi9tZXRob2QgdGhhdCBjYW4gYmUgdXBkYXRlZCBpbmRlcGVuZGVudGx5LiAqL1xyXG5cdEZ1bmNQcm94eSxcclxuXHJcblx0LyoqIE5vZGUgdGhhdCB3YWl0cyBmb3IgYSBwcm9taXNlIHRvIGJlIHNldHRsZWQgYW5kIHRoZW4gZGlzcGxheXMgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGNvbnRlbnQuICovXHJcblx0UHJvbWlzZVByb3h5LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlLiBUaHJvdWdoIHRoaXMgaW50ZXJmYWNlLCBjYWxsZXJzIGNhbiBwZXJmb3JtXHJcbiAqIG1vc3QgY29tbW9uIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IHR5cGUgb2YgdmlydHVhbCBub2RlLiBFYWNoIHR5cGUgb2YgdmlydHVhbCBub2RlXHJcbiAqIGFsc28gaW1wbGVtZW50cyBhIG1vcmUgc3BlY2lmaWMgaW50ZXJmYWNlIHRocm91Z2ggd2hpY2ggdGhlIHNwZWNpZmljIGNhcGFiaWxpdGllcyBvZiB0aGUgbm9kZVxyXG4gKiB0eXBlIGFyZSBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgbm9kZSB0eXBlLiAqL1xyXG5cdHJlYWRvbmx5IHR5cGU6IFZOVHlwZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHBhcmVudD86IElWTm9kZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHJlYWRvbmx5IGNyZWF0b3I/OiBJQ29tcG9uZW50O1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgbmV4dD86IElWTm9kZTtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgcHJldj86IElWTm9kZTtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzPzogSVZOb2RlW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgbm9kZSdzIGRpc3BsYXkgbmFtZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3IgcmVwb3J0aW5nLiBUaGUgbmFtZVxyXG5cdCAqIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSwgaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiXHJcblx0ICogcHJvcGVydHkgb2YgYW4gZWxlbWVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cmVhZG9ubHkgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQgKiBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuICovXHJcblx0dW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU3Vic2NyaWJlcyB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQgKiBieSB0aGlzIG9yIG9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0O1xyXG5cdCAqIG90aGVyd2lzZSwgdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpblxyXG5cdCAqIHVuZGVmaW5lZC4gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSB0aGlzIG9yIGEgY2xvc2VzdFxyXG5cdCAqIGFuY2VzdG9yIGNvbXBvbmVudCBpcyBjaGFuZ2VkLHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIFRoZSB1c2VTZWxmIG9wdGlvbmFsIHBhcmFtZXRlciBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBjYW4gc3Vic2NyaWJlIHRvIHRoZVxyXG5cdCAqIHNlcnZpY2UgcHVibGlzaGVkIGJ5IGl0c2VsZi4gVGhlIGRlZmF1bHQgaXMgZmFsc2UuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSByZWYgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdHN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgcmVmOiBSZWZQcm9wVHlwZTxJU2VydmljZURlZmluaXRpb25zW0tdPixcclxuXHRcdFx0XHRcdGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlXHJcblx0ICogd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKi9cclxuXHR1bnN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdCAqIGNvbXBvbmVudCBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQgKiB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdGdldFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLFxyXG5cdFx0XHRcdFx0dXNlU2VsZj86IGJvb2xlYW4pOiBJU2VydmljZURlZmluaXRpb25zW0tdO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWFuYWdlZENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWFuYWdlZENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbmRlcGVuZGVudENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2xpY2UgdHlwZSBkZWZpbmVzIGFuIG9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpYmluZ1xyXG4gKiBwYXJhbWV0ZXJzIGZvciByZW5kZXJpbmcgYW4gZWxlbWVudC4gVGhleSBpbmNsdWRlOiBDbGFzcywgU3R5bGUsIFByb3BlcnRpZXMsIENvbnRlbnQuIFRoaXNcclxuICogc3RydWN0dXJlIGlzIGludGVuZGVkIHRvIGJlIHBhc3NlZCBlaXRoZXIgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIHZpYSB0aGUgcHJvdGVjdGVkIG1ldGhvZHMgb2ZcclxuICogZGVyaXZlZCBjbGFzc2VzLCBzbyB0aGF0IHRoZXkgY2FuIGNvbnRyb2wgcGFyYW1ldGVycyBvZiBlbGVtZW50cyByZW5kZXJlZCBieSB0aGUgdXBwZXIgY2xhc3Nlcy5cclxuICogVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIHN0cnVjdHVyZSBpcyB0byBjb21iaW5lIHBhcmFtZXRlcnMgZGVmaW5pbmcgYW4gZWxlbWVudCBpbnRvIGEgc2luZ2xlXHJcbiAqIG9iamVjdCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHByb3BlcnRpZXMgY2FsbGVycyBvZiBjbGFzc2VzIHNob3VsZCBkZWFsIHdpdGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZSA9XHJcbntcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBjc3MuU3R5bGVzZXQ7XHJcblx0cHJvcHM/OiBvYmplY3RcclxuXHRjb250ZW50PzogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBET00gZXZlbnRzIG9mIHR5cGUgVC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IChlOiBUKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0XTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlLCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZCBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gKiBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3QsIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUPiB8XHJcblx0XHRcdFx0RXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VD47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgdGhlIGNsYXNzIHByb3BlcnR5IG9mIEhUTUwgZWxlbWVudHNcclxuICovXHRcdFx0XHRcclxuZXhwb3J0IHR5cGUgQ2xhc3NQcm9wVHlwZSA9IHN0cmluZyB8IGNzcy5JQ2xhc3NSdWxlIHwgY3NzLklDbGFzc05hbWVSdWxlIHwgKHN0cmluZyB8IGNzcy5JQ2xhc3NSdWxlIHwgY3NzLklDbGFzc05hbWVSdWxlKVtdO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBpZCBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIElEUHJvcFR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBjc3MuSUlEUnVsZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIHByb3BlcnR5IHR5cGVzIHVzZWQgYnkgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGNvbG9yIHZhbHVlcyBmb3IgZGlmZmVyZW50IHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgZWxlbWVudCBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Ly8gc3RhbmRhcmQgSFRNTCBhbmQgU1ZHIGVsZW1lbnQgcHJvcGVydGllc1xyXG5cdGNsYXNzPzogQ2xhc3NQcm9wVHlwZTtcclxuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xyXG5cdGRyb3B6b25lID86IFwiY29weVwiIHwgXCJtb3ZlXCIgfCBcImxpbmtcIjtcclxuXHRpZD86IHN0cmluZyB8IG51bWJlciB8IGNzcy5JSURSdWxlO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IGNzcy5TdHlsZXNldDtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5vZGVbXSB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9uIG9mIG1pbS5qc3ggZnVuY3Rpb24gLSBKU1ggRmFjdG9yeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtjcmVhdGVOb2Rlc0Zyb21KU1h9IGZyb20gXCIuLi9jb3JlL0NvbnRlbnRGdW5jc1wiXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogYGBganNvblxyXG4gKiBcImNvbXBpbGVyT3B0aW9uc1wiOlxyXG4gKiB7XHJcbiAqICAgICBcImpzeFwiOiBcInJlYWN0XCIsXHJcbiAqICAgICBcImpzeEZhY3RvcnlcIjogXCJtaW0uanN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlIGV4cG9ydGVkIGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtFbG1BdHRyLCBQcm9wVHlwZX0gZnJvbSBcIi4uL3V0aWxzL0VsbUF0dHJcIjtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIGNsYXNzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIGF0dHJpYnV0ZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBhdHRyTmFtZTogc3RyaW5nLCBoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGF0dHJOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGhhbmRsZXJDbGFzcyB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gZXZlbnQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21FdmVudCggZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGV2ZW50TmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBvZiB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4gKiBAcGFyYW0gc2xpY2VzIEFycmF5IG9mIFNsaWNlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXMoIC4uLnNsaWNlczogU2xpY2VbXSk6IFNsaWNlXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VTbGljZXMoIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG4gKiBAcGFyYW0gcmVzU2xpY2UgUmVzdWx0YW50IFNsaWNlIG9iamVjdC5cclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlOiBTbGljZSwgLi4uc2xpY2VzOiBTbGljZVtdKTogdm9pZFxyXG57XHJcblx0dXRpbHMubWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbiAqIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWVzIEFycmF5IG9mIHN0cmluZ3Mgb3Igc3RyaW5nIGFycmF5cyB3aXRoIGNsYXNzIG5hbWVzXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBjbGFzcyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbiAqIEBwYXJhbSBzdHlsZXMgQXJyYXkgb2Ygc3R5bGUgb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBjc3MuU3R5bGVzZXRbXSk6IGNzcy5TdHlsZXNldFxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU3R5bGVzKCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG4gKiBAcGFyYW0gcmVzU3R5bGUgUmVzdWx0YW50IHN0eWxlIG9iamVjdFxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IGNzcy5TdHlsZXNldCwgLi4uc3R5bGVzOiAoY3NzLlN0eWxlc2V0IHwgc3RyaW5nKVtdICk6IHZvaWRcclxue1xyXG5cdHV0aWxzLm1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlLCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDYWxsYmFjayB3cmFwcGluZ1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHt3cmFwQ2FsbGJhY2tXaXRoVk59IGZyb20gXCIuLi9jb3JlL1NjaGVkdWxlclwiXHJcblxyXG4vKipcclxuICogV3JhcHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCByZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiB0aGVcclxuICogZ2l2ZW4gdmlydHVhbCBub2RlLiBUaGUgZ2l2ZW4gXCJ0aGF0XCIgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzXHJcbiAqIGV4ZWN1dGVkLiBJZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvclxyXG4gKiBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGUgZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYVxyXG4gKiBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuIE5vdGUgdGhhdCB0aGUgVk4gY2FuIGJlIG51bGwvdW5kZWZpbmVkO1xyXG4gKiBob3dldmVyLCBpbiB0aGlzIGNhc2UgaWYgdGhlIGV4Y2VwdGlvbiBpcyBjYXVnaHQgaXQgd2lsbCBub3QgYmUgaGFuZGxlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZC5cclxuICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSB2biBWaXJ0dWFsIG5vZGUgaW4gd2hvc2UgY29udGV4dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cclxuICogQHJldHVybnMgVGhlIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFjay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QsIHZuPzogSVZOb2RlKTogVFxyXG57XHJcblx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoYXQsIHZuKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBjb21wb25lbnQgY2xhc3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge0Z1bmNQcm94eVZOfSBmcm9tIFwiLi4vY29yZS9GdW5jUHJveHlWTlwiXHJcblxyXG4vKipcclxuICogVGhlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgdHlwZSBkZWZpbmVzIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgdXBkYXRlTWVcclxuICogbWV0aG9kIGlmIHRoZSBnb2FsIGlzIG5vdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQgYnV0IG9ubHkgb25lIG9yIHNldmVyYWwgcmVuZGVyaW5nXHJcbiAqIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgPSBGdW5jdGlvbiB8IHsgZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueSB9XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoaXMgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIHJlbmRlclxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gVGhpcyBpcyBub3JtYWxseSB1c2VkIG9ubHkgYnkgbWFuYWdlZFxyXG5cdCAqIGNvbXBvbmVudHMgYW5kIGlzIHVzdWFsbHkgdW5kZWZpbmVkIGZvciBpbmRlcGVuZGVudCBjb3BvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGljIHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbWVtYmVyZWQgdmlydHVhbCBub2RlIG9iamVjdCB0aHJvdWdoIHdoaWNoIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuIFRoaXNcclxuXHQgKiBpcyB1bmRlZmluZWQgaW4gdGhlIGNvbXBvbmVudCdzIGNvc3RydWN0b3IgYnV0IHdpbGwgYmUgZGVmaW5lZCBiZWZvcmUgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogKG9wdGlvbmFsKSB3aWxsTW91bnQgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2bjogSVZOb2RlO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0fVxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cHVibGljIGFic3RyYWN0IHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gSWYgbm8gYXJndW1lbnRzIGFyZVxyXG5cdCAqIHByb3ZpZGVkLCB0aGUgZW50aXJlIGNvbXBvbmVudCBpcyByZXF1ZXN0ZWQgdG8gYmUgdXBkYXRlZC4gSWYgYXJndW1lbnQgYXJlIHByb3ZpZGVkLCB0aGV5XHJcblx0ICogaW5kaWNhdGUgd2hhdCByZW5kZXJpbmcgZnVuY3Rpb25zIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB1cGRhdGVSZXF1ZXN0cyBcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoIC4uLnVwZGF0ZVJlcXVlc3RzOiBDb21wb25lbnRVcGRhdGVSZXF1ZXN0W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnZuKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHVwZGF0ZVJlcXVlc3RzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgbm8gYXJndW1lbnRzIGFyZXIgcHJvdmlkZWQgd2UgcmVxdWVzdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQuXHJcblx0XHRcdHRoaXMudm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgdXBkYXRlIHJlcXVlc3QgYXJndW1lbnRzXHJcblx0XHRcdGZvciggbGV0IHJlcSBvZiB1cGRhdGVSZXF1ZXN0cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVxID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRGdW5jUHJveHlWTi51cGRhdGUoIHJlcSwgdW5kZWZpbmVkLCB0aGlzKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgYSBub24tYXJyYXkgcGFyYW1ldGVyIGlzIHBhc3NlZCBpbiByZXEuYXJncywgd2Ugd3JhcCBpdCBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEuZnVuYywgcmVxLmtleSwgcmVxLnRoaXNBcmcgPyByZXEudGhpc0FyZyA6IHRoaXMsXHJcblx0XHRcdFx0XHRcdCFyZXEuYXJncyB8fCBBcnJheS5pc0FycmF5KHJlcS5hcmdzKSA/IHJlcS5hcmdzIDogW3JlcS5hcmdzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBhcmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBJZiB0aGlzXHJcblx0ICogICBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdXNlZCAod2hpY2ggYWxsb3dzIHNjaGVkdWxpbmdcclxuXHQgKiAgIHJlZ3VsYXIgdW5ib3VuZCBjb21wb25lbnRzJyBtZXRob2RzKS4gVGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bilcclxuXHRcdFx0dGhpcy52bi5zY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmMsIHRoYXQgPyB0aGF0IDogdGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIHRoZSBNaW1ibCB0aWNrIGhhdmUgYWxyZWFkeSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgdGhlIGZ1bmN0aW9uXHJcblx0ICogICBpcyBhbHJlYWR5IGJvdW5kIG9yIGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWVBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmMsIHRoYXQgPyB0aGF0IDogdGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyBjb21wb25lbnQgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIGNvbXBvbmVudCB0aGF0IGtub3dzIHRvXHJcblx0ICogaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoaXMsIHRoaXMudm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY1Byb3h5IHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0byBiZSB1c2VkIHdpdGggdGhlIEZ1bmNQcm94eSBjb21wb25lbnQuIEZ1bmNQcm94eSBjb21wb25lbnQgY2Fubm90IGhhdmUgY2hpbGRyZW4uXHJcbiAqIEEga2V5IHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gbXVsdGlwbGUgdXNlcyBvZiB0aGUgc2FtZSBmdW5jdGlvbi4gSWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIHdpdGhpbiBhIGNvbXBvbmVudCwgdGhlIGtleSBpcyBub3QgbmVjZXNzYXJ5OyBob3dldmVyLCBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcywga2V5IGlzIG1hbmRhdG9yeSAtIG90aGVyd2lzZSwgdGhlIGJlaGF2aW9yIGlzIHVuZGV0ZXJtaW5lZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVuY1Byb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBGdW5jdGlvbiB0aGF0IHJlbmRlcnMgY29udGVudC4gKi9cclxuXHRmdW5jOiBGdW5jdGlvbjtcclxuXHJcblx0LyoqXHJcblx0ICogQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uIFdoZW5ldmVyIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGlzXHJcblx0ICogcGFyYW1ldGVyIGlzIHVzZWQgd2hlbiBjYWxsaW5nIHRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdGFyZ3M/OiBhbnlbXTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGFyZ3VtZW50cyBzcGVjaWZpZWQgYnkgdGhlIGBhcmdzYCBwcm9wZXJ0eSBzaG91bGQgYmUgcGFzc2VkIHRvXHJcblx0ICogdGhlIGZ1bmN0aW9uIG92ZXJyaWRpbmcgYXJndW1lbnRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgYnkgdGhlIG1vc3QgcmVjZW50IGNhbGwgdG8gdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QuIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgZmFsc2UgYW5kIGBhcmdzYCB3aWxsIGJlXHJcblx0ICogdXNlZCBvbmx5IHRoZSBmaXJzdCB0aW1lIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBJZiB0aGVcclxuXHQgKiBGdW5jUHJveHkudXBkYXRlIG1ldGhvZCBpcyBjYWxsZWQsIHRoZSBhcmd1bWVudCBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIHdpbGwgcmVwbGFjZSB0aGVcclxuXHQgKiBvcmlnaW5hbCBhcmd1bWVudHMuIFRoZSBuZXh0IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgcmVuZGVyZWQsIHRoZSBgYXJnc2AgcHJvcGVydHlcclxuXHQgKiB3aWxsIGJlIGlnbm9yZWQuXHJcblx0ICogXHJcblx0ICogTm90ZSB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGFjdGlvbnMgdGhhdCBvY2N1cnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIGZhbHNlIG9yIG9taXR0ZWQ6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQVwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJCXCIpLiBcIkJcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQlwiIHdpbGwgc3RpbGwgYmUgdXNlZC5cclxuXHQgKiBcclxuXHQgKiBJZiB0aGUgYHJlcGxhY2VBcmdzYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBldmVyeSB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW5ldCBpc1xyXG5cdCAqIHJlbmRlcmVkLCB0aGUgdmFsdWUgb2YgdGhlIGBhcmdzYCBwcm9wZXJ0eSByZXBsYWNlcyB3aGF0ZXZlciBhcmd1bWVudHMgdGhlcmUgd2VyZSBiZWZvcmUuXHJcblx0ICogXHJcblx0ICogTm93IG5vdGUgdGhlIHNlcXVlbmNlIG9mIGFjdGlvbnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIHRydWU6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgcmVwbGFjZUFyZ3MgLz4uXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LiBcIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZCBhZ2Fpbi5cclxuXHQgKi9cclxuXHRyZXBsYWNlQXJncz86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbHVlIHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGVcclxuXHQgKiBjbGFzcyBiYXNlZCBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgKHdoaWNoIGlzIHRoZVxyXG5cdCAqIG1vc3QgY29tbW9uIGNhc2UpLlxyXG5cdCAqL1xyXG5cdHRoaXNBcmc/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdyYXBzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBjb250ZW50LiBQcm94aWVzIGNhbiB3cmFwIGluc3RhbmNlXHJcbiAqIG1ldGhvZHMgb2YgY2xhc3NlcyB0aGF0IGhhdmUgYWNjZXNzIHRvIFwidGhpc1wiIHRodXMgYWxsb3dpbmcgYSBzaW5nbGUgY2xhc3MgdG8gXCJob3N0XCIgbXVsdGlwbGVcclxuICogY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5vdCBpbnRlbmRlZCB0byBiZVxyXG4gKiBjcmVhdGVkIGJ5IGRldmVsb3BlcnM7IGluc3RlYWQgaXQgaXMgb25seSB1c2VkIGluIGl0cyBKU1ggZm9ybSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxGdW5jUHJveHkgZnVuYz17dGhpcy5yZW5kZXJTb21ldGhpbmd9IGtleT17Li4ufSBhcmdzPXsuLi59IHRoaXNBcmc9ey4uLn0gLz5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGVyZSBpcyBhIHNpbXBsZXIgbWV0aG9kIG9mIHNwZWNpZnlpbmcgYSByZW5kZXJpbmcgZnVuY3Rpb24gaW4gSlNYLCBlLmcuOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxkaXY+e3RoaXMucmVuZGVyU29tZXRoaW5nfTwvZGl2PlxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoZSBGdW5jUHJveHkgY29wb25lbnQgaXMgbmVlZGVkIGluIHRoZSBjYXNlIHdoZXJlIG9uZSAob3IgbW9yZSkgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxyXG4gKiAtIFRoZXJlIGlzIGEgbmVlZCB0byBwYXNzIGFyZ3VtZW50cyB0byB0aGUgZnVuY3Rpb25cclxuICogLSBUaGUgc2FtZSBmdW5jdGlvbiBpcyB1c2VkIG11bHRpcGxlIHRpbWVzIGFuZCBrZXlzIG11c3QgYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZVxyXG4gKiBpbnZvY2F0aW9ucy5cclxuICogLSBUaGUgdmFsdWUgb2YgXCJ0aGlzXCIgaW5zaWRlIHRoZSBmdW5jdGlvbiBpcyBub3QgdGhlIGNvbXBvbmVudCB0aGF0IGRvZXMgdGhlIHJlbmRlcmluZy4gVGhhdFxyXG4gKiBpcywgdGhlIGZ1bmN0aW9uIGlzIG5vdCBhIG1ldGhvZCBvZiB0aGlzIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEZ1bmNQcm94eSBoYXMgYSBwdWJsaWMgc3RhdGljIFVwZGF0ZSBtZXRob2QgdGhhdCBjYW4gYmUgY2FsbGVkIHRvIGNhdXNlIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtXHJcbiAqIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eSBleHRlbmRzIENvbXBvbmVudDxGdW5jUHJveHlQcm9wcyx2b2lkPlxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdGFuY2VzIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGFyZSBuZXZlciBhY3R1YWxseSBjcmVhdGVkOyBpc3RlYWQsIHRoZSBwYXJhbWV0ZXJzXHJcblx0ICogcGFzc2VkIHRvIGl0IHZpYSBKU1ggYXJlIHVzZWQgYnkgYW4gaW50ZXJuYWwgdmlydHVhbCBub2RlIHRoYXQgaGFuZGxlcyBmdW5jdGlvblxyXG5cdCAqIGludm9jYXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggcHJvcHM6IEZ1bmNQcm94eVByb3BzKSB7IHN1cGVyKHByb3BzKSB9XHJcblxyXG5cdC8qKiBUaGUgcmVuZGVyIG1ldGhvZCBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueSB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0IHJlLXJlbmRlcmluZyBvZiB0aGUgY29udGVudCBwcm9kdWNlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYnkgaW52b2tpbmcgdGhpc1xyXG5cdCAqIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gbXVzdCBoYXZlIGJlZW4gcHJldmlvdXNseSB1c2VkIGluIHJlbmRlcmluZyB1c2luZyBlaXRoZXJcclxuXHQgKiA8RnVuY1Byb3h5IGZ1bmM9e30gLz4gSlNYIGNvbnN0cnVjdCBvciBhIHNpbXBsZXIgY29uc3R1Y3RcclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBpbnZva2UuXHJcblx0ICogQHBhcmFtIGtleSBWYWx1ZSB0aGF0IGhlbHBzIGRpc3Rpbmd1aXNoaW5nIGJldHdlZW4gbXVsdGlwbGUgdXNhZ2VzIG9mIHRoZSBmdW5jdGlvbi5cclxuXHQgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgLi4uYXJnczogYW55W10pXHJcblx0e1xyXG5cdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCBmdW5jLCBrZXksIHRoaXNBcmcsIGFyZ3MpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3VwcG9ydCBmb3IgcHJvbWlzZXMgcmV0dXJuZWQgYXMgY29udGVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0byBiZSB1c2VkIHdpdGggdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogUHJvbWlzZSB0aGF0IHdpbGwgYmUgd2F0Y2ggYnkgdGhlIHdhaXRpbmcgbm9kZS4gKi9cclxuXHRwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8qKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZC4gKi9cclxuXHRlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50IHdyYXBzIGEgUHJvbWlzZSBhbmQgcmVwbGFjZXMgaXRzIGNvbnRlbnQgd2hlbiB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLlxyXG4gKiBCZWZvcmUgdGhlIHByb21pc2UgaXMgc2V0dGxlZCwgdGhlIGNvbXBvbmVudCBkaXNwbGF5cyBhbiBvcHRpb25hbCBcImluLXByb2dyZXNzXCIgY29udGVudFxyXG4gKiBzcGVjaWZpZWQgYXMgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSBjb21wb25lbnQgd2lsbCBlaXRoZXJcclxuICogZGlzcGxheSB0aGUgXCJlcnJvclwiIGNvbnRlbnQgb2J0YWluZWQgYnkgY2FsbGluZyBhIGZ1bmN0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIHByb3BlcnRpZXMgb3IsIGlmXHJcbiAqIHN1Y2ggZnVuY3Rpb24gaXMgbm90IHNwZWNpZmllZCwgZGlzcGxheSBub3RoaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VQcm94eSBleHRlbmRzIENvbXBvbmVudDxQcm9taXNlUHJveHlQcm9wcz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBQcm9taXNlUHJveHlQcm9wcykgeyBzdXBlciggcHJvcHMpOyB9XHJcblxyXG5cdC8qKiBUaGUgcmVuZGVyIG1ldGhvZCBvZiB0aGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueSB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBtb3VudC91bm1vdW50IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgcm9vdCBmcm9tIFwiLi4vY29yZS9Sb290Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGFcclxuICogc3luY2hyb25vdXMgbWFubmVyLlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsIHRoZW5cclxuICogcmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC5tb3VudFJvb3RTeW5jKCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8vIFxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnRTeW5jIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFN5bmMoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3RTeW5jKCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudFxyXG4vLyBhc3luY2hyb25vdXNseS5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLHRoZW5cclxuICpcdFx0XHRcdHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnQoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC5tb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC51bm1vdW50Um9vdCggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNaW1ibC1zcGVjaWZpYyBzdHlsZSBzY2hlZHVsZXIgdGhhdCBjb29yZGluYXRlcyBNaW1jc3MgRE9NIHdyaXRpbmcgd2l0aCBNaW1ibFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtpbml0aWFsaXplTWltYmxTdHlsZVNjaGVkdWxlcn0gZnJvbSBcIi4uL2NvcmUvU3R5bGVTY2hlZHVsZXJcIlxyXG5cclxuLy8gc2V0IE1pbWJsIHN0eWxlIHNjaGVkdWxlciBhcyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgZm9yIHN0eWxlLXJlbGF0ZWQgRE9NLXdyaXRpbmcgb3BlcmF0aW9ucy5cclxuZXhwb3J0IGxldCBtaW1ibFN0eWxlU2NoZWR1bGVyVHlwZSA9IGluaXRpYWxpemVNaW1ibFN0eWxlU2NoZWR1bGVyKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSBgQHRyaWdnZXJgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRhYmxlKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc1thdHRyTmFtZV0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm46IElWTm9kZSA9IHRoaXMudm47XHJcbiAgICAgICAgICAgICAgICBpZiAodm4gJiYgIXZuLnVwZGF0ZVJlcXVlc3RlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge2NyZWF0ZVdhdGNoZXIsIElXYXRjaGVyfSBmcm9tIFwiLi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIjtcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIENvbXBCYXNlVk4gaXMgYSBiYXNlIGNsYXNzIGZvciBJbnN0YW5jZVZOIGFuZCBDbGFzc1ZOLiBJdCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eVxyXG4vLyBpbiB0ZXJtcyBvZiB1cGRhdGUgcmVxdWVzdHMgYW5kIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsYXNzQ29tcFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklDbGFzc0NvbXBWTlxyXG57XHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlLlxyXG5cdHB1YmxpYyBjb21wOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1cGRhdGVTdHJhdGVneSgpOiBtaW0uVXBkYXRlU3RyYXRlZ3lcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5ID8gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5KCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKHRoaXMuY29tcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJyZW5kZXIoKSB3YXMgY2FsbGVkIG9uIHVubW91bnRlZCBjb21wb25lbnQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgcmVuZGVyKCkgb24gY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJXYXRjaGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuY29tcC5yZW5kZXIsIHRoaXMucmVxdWVzdFVwZGF0ZSwgdGhpcy5jb21wLCB0aGlzKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIuZGlzcG9zZSgpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAodGhpcy5jb21wLmRpZE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAuZGlkTW91bnQoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXAgcHJvcGVydHkgaGFzIGNoYW5nZWQgd2l0aG91dCBhY3R1YWxseSB1bm1vdW50aW5nIHRoZSBWTi5cclxuICAgIC8vIFdlIG5lZWQgdG8gc3RvcCB3YXRjaGluZyB0aGUgb2xkIGNvbXBvbmVudCdzIHJlbmRlciBhbmQgc3RhcnQgd2F0Y2hpbmcgdGhlIG5ldyBvbmUncy5cclxuICAgIHByb3RlY3RlZCByZWVzdGFibGlzaFdhdGNoZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5jb21wLnJlbmRlciwgdGhpcy5yZXF1ZXN0VXBkYXRlLCB0aGlzLmNvbXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gV2F0Y2hlciBmdW5jdGlvbiB3cmFwcGluZyB0aGUgY29tcG9uZW50J3MgcmVuZGVyIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnlcclxuICAgIC8vIHRyaWdnZXIgb2JqZWN0cyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlXHJcbiAgICAvLyB0aHVzIHRyaWdnZXJyaW5nIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIHJlbmRlcldhdGNoZXI6IElXYXRjaGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7SW5kZXBlbmRlbnRDb21wVk59IGZyb20gXCIuL0luZGVwZW5kZW50Q29tcFZOXCJcclxuaW1wb3J0IHtNYW5hZ2VkQ29tcFZOfSBmcm9tIFwiLi9NYW5hZ2VkQ29tcFZOXCJcclxuaW1wb3J0IHtGdW5jVk59IGZyb20gXCIuL0Z1bmNWTlwiXHJcbmltcG9ydCB7RWxtVk59IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHtUZXh0Vk59IGZyb20gXCIuL1RleHRWTlwiXHJcbmltcG9ydCB7RnVuY1Byb3h5Vk59IGZyb20gXCIuL0Z1bmNQcm94eVZOXCJcclxuaW1wb3J0IHtQcm9taXNlUHJveHlWTn0gZnJvbSBcIi4vUHJvbWlzZVByb3h5Vk5cIlxyXG5pbXBvcnQge3NfY3VycmVudENsYXNzQ29tcH0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBlaXRoZXIgYSBzaW5nbGUgdmlydHVhbCBub2RlIG9yIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC5cclxuLy8gRm9yIGFsbCB0eXBlcyBvZiBjb250ZW50cyBvdGhlciB0aGFuIGFuIGFycmF5LCB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBzaW5nbGUgVk4uIElmIHRoZSBpbnB1dFxyXG4vLyBjb250ZW50IGlzIGFuIGFycmF5LCB0aGVuIGEgVk4gaXMgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgYXJyYXkgZWxlbWVudHMuIFNpbmNlIGFycmF5IGVsZW1lbnRzXHJcbi8vIG1pZ2h0IGFsc28gYmUgYXJyYXlzLCB0aGUgcHJvY2VzcyBpcyByZWN1cnNpdmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTiB8IFZOW11cclxue1xyXG5cdGlmIChjb250ZW50ID09IG51bGwgfHwgY29udGVudCA9PT0gZmFsc2UpXHJcblx0e1xyXG5cdFx0Ly8gdGhlIGNvbXBhcmlzb24gYWJvdmUgY292ZXJzIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQmFzZSlcclxuXHRcdHJldHVybiBjb250ZW50O1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdHJldHVybiBjb250ZW50Lmxlbmd0aCA+IDAgPyBuZXcgVGV4dFZOKCBjb250ZW50KSA6IG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgKHRoaXMgY2FuIG9ubHkgYmUgYW4gSW5zdGFuY2UgY29tcG9uZW50KSBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIFZOLFxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMgZXhpc3RpbmcgVk47IG90aGVyd2lzZSBjcmVhdGUgYSBuZXcgb25lLlxyXG5cdFx0cmV0dXJuIChjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KS52blxyXG5cdFx0XHRcdFx0XHQ/IChjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KS52biBhcyBWTlxyXG5cdFx0XHRcdFx0XHQ6IG5ldyBJbmRlcGVuZGVudENvbXBWTiggY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGNvbnRlbnQpKVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjb250ZW50KTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCB7IHByb21pc2U6IGNvbnRlbnR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGNvbnRlbnQpXHJcblx0XHRyZXR1cm4gdm4gfHwgbmV3IEZ1bmNQcm94eVZOKCB7IGZ1bmM6IGNvbnRlbnQsIHRoaXNBcmc6IHNfY3VycmVudENsYXNzQ29tcH0pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC4gQ2FsbHMgdGhlIGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQgYW5kXHJcbi8vIGlmIGl0IHJldHVybnMgYSBzaW5nbGUgbm9kZSwgd3JhcHMgaXQgaW4gYW4gYXJyYXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyBub2RlcyA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZzogYW55LCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pOiBWTiB8IFZOW11cclxue1xyXG5cdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GcmFnbWVudClcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gbWltLkZ1bmNQcm94eSlcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzIHx8ICFwcm9wcy5mdW5jKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIGEgbm9kZSBsaW5rZWQgdG8gdGhpcyBmdW5jdGlvbi4gSWYgeWVzIHJldHVybiBpdDtcclxuXHRcdC8vIG90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IG5vZGUuXHJcblx0XHRsZXQgZnVuY1Byb3h5UHJvcHMgPSBwcm9wcyBhcyBtaW0uRnVuY1Byb3h5UHJvcHM7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIHByb3BzLmZ1bmMsIGZ1bmNQcm94eVByb3BzLmtleSk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNQcm94eVZOKCBwcm9wcyk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSB1cGRhdGVBcmdzIHByb3BlcnR5IGlzIHRydWUsIHdlIHJlcGxhY2UgdGhlIGFyZ3VtZW50cyBpbiB0aGUgbm9kZTsgb3RoZXJ3aXNlLFxyXG5cdFx0XHQvLyB3ZSBpZ25vcmUgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRpZiAoZnVuY1Byb3h5UHJvcHMucmVwbGFjZUFyZ3MpXHJcblx0XHRcdFx0dm4ucmVwbGFjZUFyZ3MoIGZ1bmNQcm94eVByb3BzLmFyZ3MpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5Qcm9taXNlUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMucHJvbWlzZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlXHJcblx0XHQvLyBhbiBhcnJheSBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgbWltLkNvbXBvbmVudDx7fSxUW10+LiBJbiB0aGlzIGNhc2VcclxuXHRcdC8vIHRoZXJlIGFyZSB0d28gd2F5cyB0byBzcGVjaWZ5IGNoaWxkcmVuIGluIEpTWCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRoZSBUeXBlU2NyaXB0XHJcblx0XHQvLyBjb21waWxlcjpcclxuXHRcdC8vXHQxKSA8QT57dDF9e3QyfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbdDEsIHQyXSAoYXMgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0MikgPEE+e1t0MSwgdDJdfTwvQT4uIEluIHRoaXMgY2FzZSwgY2hpbGRyZW4gd2lsbCBiZSBbW3QxLHQyXV0gKGFzIE5PVCBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHRcdFRoaXMgbG9va3MgbGlrZSBhIFR5cGVTY3JpcHQgYnVnLlxyXG5cdFx0Ly8gVGhlIHJlYWxDaGlsZHJlbiB2YXJpYWJsZSBhY2NvbW1vZGF0ZXMgYm90aCBjYXNlcy5cclxuXHRcdGxldCByZWFsQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheSggY2hpbGRyZW5bMF0pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcclxuXHRcdGlmICh0eXBlb2YgdGFnLnByb3RvdHlwZS5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmV0dXJuIG5ldyBNYW5hZ2VkQ29tcFZOKCB0YWcgYXMgbWltLklDb21wb25lbnRDbGFzcywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBuZXcgRnVuY1ZOKCB0YWcgYXMgbWltLkZ1bmNDb21wVHlwZSwgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIERFQlVHXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcblx0Ly8vICNlbmRpZlxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBhcnJheSBvZiBpdGVtcy5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGFycjogYW55W10pOiBWTltdXHJcbntcclxuXHRpZiAoYXJyLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRsZXQgbm9kZXM6IFZOW10gPSBbXTtcclxuXHRmb3IoIGxldCBpdGVtIG9mIGFycilcclxuXHR7XHJcblx0XHRsZXQgaXRlbU5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggaXRlbSk7XHJcblx0XHRpZiAoaXRlbU5vZGVzID09PSBudWxsKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGl0ZW1Ob2RlcykpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHZuIG9mIGl0ZW1Ob2RlcylcclxuXHRcdFx0XHRub2Rlcy5wdXNoKCB2bik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdG5vZGVzLnB1c2goIGl0ZW1Ob2Rlcyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbm9kZXMubGVuZ3RoID4gMCA/IG5vZGVzIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc2V0IGFzIGN1cnJlbnQgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudCgpOiBtaW0uSUNvbXBvbmVudFxyXG57XHJcblx0Ly8gdGhlIHNfY3VycmVudFZOIHNob3VsZCBwb2ludCB0byB0aGUgdmlydHVhbCBub2RlIGJlaGluZCB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LFxyXG5cdC8vIHdoaWNoIHNob3VsZCBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgY2FsbHMgdGhlIGZ1bmN0aW9uLlxyXG5cdHJldHVybiBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtFbG1BdHRyLCBBdHRyUHJvcEluZm8sIEV2ZW50UHJvcEluZm8sIEN1c3RvbUF0dHJQcm9wSW5mbywgUHJvcFR5cGUsIFByb3BJbmZvfSBmcm9tIFwiLi4vdXRpbHMvRWxtQXR0clwiXHJcbmltcG9ydCB7U3ZnRWxtc30gZnJvbSBcIi4uL3V0aWxzL1N2Z0VsbXNcIjtcclxuaW1wb3J0IHtkZWVwQ29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBET00gZWxlbWVudCBjcmVhdGVkIHVzaW5nIEpTWC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1WTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JRWxtVk5cclxue1xyXG5cdC8vIFRhZyBuYW1lIG9mIGFuIEVsZW1lbnQuXHJcblx0cHVibGljIGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC4gVGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQgd2hlbiB0aGUgbm9kZSBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0XHJcblx0Ly8gdGltZS5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgRWxlbWVudCBpcyBTVkcgKGFzIG9wcG9zZWQgdG8gSFRMTSkuIFRoZXJlIGFyZSBzb21lIFNWR1xyXG5cdC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFzIHJlZ3VsYXIgZWxlbWVudHMgKGUuZy4gPGE+KS4gVGhlcmVmb3JlLCBpbiBvcmRlciB0b1xyXG5cdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIG5vdCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBuYW1lc3BhY2VVUkkgb2YgdGhlIHBhcmVudFxyXG5cdC8vIChhbmNob3JlKSBET00gbm9kZS5cclxuXHRwdWJsaWMgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5FbG07XHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBrZXkgcHJvcGVydHkuIElmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90XHJcblx0XHRcdC8vIHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdFx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuRWxtOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVsbTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVsZWFzZXMgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMuIFNpbmNlIG1vZGVybiBicm93c2VycyBkb24ndCBsZWFrIHdoZW4gbGlzdGVuZXJzIGFyZSBub3RcclxuXHRcdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudHMoKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lLlxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtTmFtZSA9PT0gKG5ld1ZOIGFzIEVsbVZOKS5lbG1OYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgbmV3IHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBvbmVzXHJcblx0XHRsZXQgc2hvdWxkQ29tbWl0ID0gIWRlZXBDb21wYXJlKCB0aGlzLnByb3BzLCAobmV3Vk4gYXMgRWxtVk4pLnByb3BzKTtcclxuXHJcblx0XHQvLyByZW5kZXIgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgZWl0aGVyIG9sZCBvciBuZXcgbm9kZSBoYXMgY2hpbGRyZW5cclxuXHRcdGxldCBzaG91bGRSZW5kZXIgPSB0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fFxyXG5cdFx0XHRcdFx0KG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbiAmJiAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBwcm9wcyBhbmQgY2hpbGRyZW5cclxuXHRcdHRoaXMucHJvcHMgPSAobmV3Vk4gYXMgRWxtVk4pLnByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW47XHJcblxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0LCBzaG91bGRSZW5kZXIgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRuZXdFbG1WTi5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdFbG1WTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uXHJcblx0XHRcdHRoaXMucmVmID0gbmV3RWxtVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXksIHVwZGF0ZVN0YXJ0ZWd5IGFuZCBjcmVhdG9yIHByb3BlcnR5IChldmVuIGlmIHRoZVxyXG5cdFx0Ly8gdmFsdWVzIGFyZSB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IG5ld0VsbVZOLnVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIG92ZXIgdGhlIG9yaWdpbmFsIHByb3BlcnRpZXMgYW5kIHB1dHMgdGhlbSBpbnRvIHRoZSBidWNrZXRzIG9mIGF0dHJpYnV0ZXMsIGV2ZW50XHJcblx0Ly8gbGlzdGVuZXJzIGFuZCBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIHBhcnNlUHJvcHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5wcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcm9wVmFsOiBhbnksIHByb3BJbmZvOiBQcm9wSW5mbywgcHJvcFR5cGU6IFByb3BUeXBlO1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHRoZSBrZXkgcHJvcGVydHkgYmVjYXVzZSB3ZSBhbHJlYWR5IGV4dHJhY3RlZCBpdCBpbiB0aGUgY29uc3RydWN0b3JcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJvcFZhbCA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcFZhbCA9PSBudWxsIHx8IHByb3BWYWwgPT09IGZhbHNlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkLCBudWxsIGFuZCBmYWxzZVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInVwZGF0ZVN0cmF0ZWd5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciB1cGRhdGVTdHJhdGVneSBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvcGVydHkgYW5kIGRldGVybWluZSBpdHMgdHlwZSAocmVndWxhciBhdHRyaWJ1dGUsIGV2ZW50XHJcblx0XHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIG9ubHkgZm9yIHJlZ3VsYXJcclxuXHRcdFx0XHQvLyBhdHRyaWJ1dGVzLlxyXG5cdFx0XHRcdHByb3BJbmZvID0gRWxtQXR0ci5nZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lKTtcclxuXHRcdFx0XHRwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLkF0dHI7XHJcblx0XHRcdFx0aWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5hdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbywgdmFsOiBwcm9wVmFsIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5FdmVudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHt9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5DdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8gYXMgQ3VzdG9tQXR0clByb3BJbmZvLCB2YWw6IHByb3BWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuYXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhZGRFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHRldmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdHByaXZhdGUgcmVtb3ZlRXZlbnRzKCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnRzKCBuZXdFdmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkRXZlbnRzID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkRXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZEV2ZW50ID0gb2xkRXZlbnRzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdFdmVudCA9IG5ld0V2ZW50cyA/IG5ld0V2ZW50c1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0V2ZW50KVxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgb2xkRXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEV2ZW50LCBuZXdFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGV2ZW50IGxpc3RlbmVycyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3RXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEV2ZW50cyAmJiAobmFtZSBpbiBvbGRFdmVudHMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIG5ld0V2ZW50c1tuYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0V2ZW50cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBldmVudCBsaXN0ZW5lciBhcmUgZGlmZmVyZW50IGFuZCBzZXRzXHJcblx0Ly8gdGhlIHVwZGF0ZWQgdmFsdWUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZCBmYWxzZSBpZiBubyBjaGFuZ2UgaGFzXHJcblx0Ly8gYmVlbiBkZXRlY3RlZC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIG9sZEV2ZW50OiBFdmVudFJ1blRpbWVEYXRhLCBuZXdFdmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBkb3VibGUtZXF1YWwtc2lnbiBmb3IgdXNlQ2FwdHVyZSBpcyBvbiBwdXJwb3NlLCBiZWNhdXNlIHVzZUNhcHR1cmUgY2FuIGJlIHVuZGVmaW5lZCBvciBib29sZWFuXHJcblx0XHRpZiAob2xkRXZlbnQub3JnRnVuYyA9PT0gbmV3RXZlbnQub3JnRnVuYyAmJlxyXG5cdFx0XHRvbGRFdmVudC50aGF0ID09PSBuZXdFdmVudC50aGF0ICYmXHJcblx0XHRcdG9sZEV2ZW50LnVzZUNhcHR1cmUgPT0gbmV3RXZlbnQudXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IG9sZEV2ZW50LndyYXBwZXI7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBvbGRFdmVudC53cmFwcGVyLCBvbGRFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgd3JhcHBlciBhbmQgYWRkIGl0IGFzIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggbmV3RXZlbnQpO1xyXG5cdFx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdFdmVudC53cmFwcGVyLCBuZXdFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIuIFRoZSB3cmFwcGVyIGlzIGJvdW5kIHRvXHJcblx0Ly8gdGhlIGluc3RhbmNlIG9mIEVsbVZOIGFuZCB0aHVzIGNhbiBpbnRlcmNlcHQgZXhjZXB0aW9ucyBhbmQgcHJvY2VzcyB0aGVtIHVzaW5nIHRoZSBzdGFuZGFyZFxyXG5cdC8vIGVycm9yIHNlcnZpY2UuIFVubGVzcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgYWxyZWFkeSBhIGJvdW5kIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGNhbGxlZFxyXG5cdC8vIHdpdGggXCJ0aGlzXCIgc2V0IHRvIGVpdGhlciB0aGUgXCJldmVudC50aGF0XCIgb2JqZWN0IG9yLCBpZiB0aGUgbGF0dGVyIGlzIHVuZGVmaW5lZCwgdG8gdGhlXHJcblx0Ly8gXCJjcmVhdG9yXCIgb2JqZWN0LCB3aGljaCBpcyB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCBpIGl0cyByZW5kZXJcclxuXHQvLyBtZXRob2QuXHJcblx0cHJpdmF0ZSBjcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogbWltLkV2ZW50RnVuY1R5cGU8RXZlbnQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMud3JhcENhbGxiYWNrKCBldmVudC5vcmdGdW5jLCBldmVudC50aGF0ID8gZXZlbnQudGhhdCA6IHRoaXMuY3JlYXRvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBhZGRDdXN0b21BdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgY3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgY3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggaXNSZW1vdmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0N1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkQ3VzdG9tQXR0cnMgPSB0aGlzLmN1c3RvbUF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBjdXN0b20gcHJvcGVydGllcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IG9sZEN1c3RvbUF0dHIgPSBvbGRDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb25zdCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnMgPyBuZXdDdXN0b21BdHRyc1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0N1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gdGVybWluYXRlIGl0cyBoYW5kbGVyXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjdXN0b20gcHJvcGVydHkgYW5kIHJlbWVtYmVyIHRoZSBuZXcgdmFsdWVcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudXBkYXRlKCBuZXdDdXN0b21BdHRyLnZhbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdXBkYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG9sZEN1c3RvbUF0dHIuaGFuZGxlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEN1c3RvbUF0dHJzICYmIChuYW1lIGluIG9sZEN1c3RvbUF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IG5ld0N1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIG5ld0N1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHRkZWxldGUgbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1c3RvbUF0dHJzID0gbmV3Q3VzdG9tQXR0cnM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBVcGRhdGVTdHJhdGVneSBvYmplY3QgZGVmaW5pbmcgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHRwdWJsaWMgdXBkYXRlU3RyYXRlZ3k6IG1pbS5VcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gQXJyYXkgb2YgY2hpbGRyZW4gb2JqZWN0cy5cclxuXHRwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGN1c3RvbSBlbGVtZW50IHByb3BlcnRpZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBoYW5kbGVyIG9iamVjdHMgYW5kIHZhbHVlcy5cclxuXHRwcml2YXRlIGN1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggcmVndWxhciBhdHRyaWJ1dGVcclxuaW50ZXJmYWNlIEF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBhdHRyaWJ1dGUgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR2YWw6IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGV2ZW50IGxpc3RlbmVyXHJcbmludGVyZmFjZSBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGV2ZW50IC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBFdmVudFByb3BJbmZvO1xyXG5cclxuXHQvLyBPcmlnaW5hbCBldmVudCBjYWxsYmFjayBwYXNzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBldmVudCBwcm9wZXJ0eSBpbiBKU1hcclxuXHRvcmdGdW5jOiBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCB3aWxsIGJlIHJlZmVyZW5jZWQgYnkgXCJ0aGlzXCIgd2l0aGluIHRoZSBpbnZva2VkIGZ1bmN0aW9uXHJcblx0dGhhdD86IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR1c2VDYXB0dXJlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gV3JhcHBlciBmdW5jdGlvbiB0aGF0IHdlIGNyZWF0ZSBhbmQgYmluZCB0byBvdXIgbm9kZSBhbmQgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBXZSBuZWVkXHJcblx0Ly8gdGhpcyB3cmFwcGVyIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbiBpbiB0aGUgY2FsbGJhY2sgYW5kIHBhc3MgdGhlbSBvbiB0byBhbiBlcnJvclxyXG5cdC8vIGhhbmRsaW5nIHNlcnZpY2UuIFRoZSB3cmFwcGVyIGlzIG1hcmtlZCBvcHRpb25hbCBiZWNhdXNlIGl0IGlzIGNyZWF0ZWQgb25seSBpZiBhIG5ld1xyXG5cdC8vIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkOyB0aGF0IGlzLCBpZiBkdXJpbmcgdXBkYXRlLCB0aGUgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gaXMgdGhlXHJcblx0Ly8gc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGUgbmV3IHdyYXBwZXIgYmVjYXVzZSB0aGUgb2xkIG9uZSB3aWxsIGJlIHVzZWQuXHJcblx0d3JhcHBlcj86ICBtaW0uRXZlbnRGdW5jVHlwZTxFdmVudD47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBjdXN0b20gcHJvcGVydHkuXHJcbmludGVyZmFjZSBDeXN0b21BdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgY3VzdG9tIGF0dHJpYnV0ZSAtIGNhbm5vdCBiZSBudWxsXHJcblx0aW5mbzogQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBDdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG5cdHZhbDogYW55O1xyXG5cclxuXHQvLyBIYW5kbGVyIG9iamVjdCB0aGF0IGtub3dzIHRvIGRlYWwgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXHJcblx0aGFuZGxlcjogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPGFueT47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+IH07XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSwgdXNlQ2FwdHVyZTogcHJvcFZhbFsyXSBhcyBib29sZWFuIH07XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIHRoZSBwcm9wZXJ0eSBpcyBub3QgdHJlYXRlZCBhcyBhbiBldmVudCBoYW5kbGVyXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5pbXBvcnQge2NyZWF0ZVdhdGNoZXIsIElXYXRjaGVyfSBmcm9tIFwiLi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGNvbm5lY3QgYmV0d2VlbiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gYW5kIHRoZSBWTnMgY3JlYXRlZCBmb3IgaXQuXHJcbiAqL1xyXG5sZXQgc3ltS2V5c1RvTm9kZXMgPSBTeW1ib2woIFwic3ltS2V5c1RvTm9kZXNcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBtaW0uRnVuY1Byb3h5UHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkZ1bmNQcm94eTtcclxuXHRcdHRoaXMuZnVuYyA9IHByb3BzLmZ1bmMgYXMgKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cdFx0dGhpcy50aGlzQXJnID0gcHJvcHMudGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0XHR0aGlzLmFyZ3MgPSBwcm9wcy5hcmdzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHJcblx0XHQvLyBpZiBhIGtleSB3YXMgbm90IHByb3ZpZGVkIHdlIHVzZSB0aGUgdmFsdWUgb2YgdGhpc0FyZyAod2hpY2ggbWlnaHQgYmUgdGhlIGN1cnJlbnRcclxuXHRcdC8vIGNvbXBvbmVudCkgYXMgYSBrZXkuIElmIHRoYXQgaXMgdW5kZWZpbmVkIGVpdGhlciB3ZSB1c2UgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhcyBhIGtleS5cclxuICAgICAgICB0aGlzLmxpbmtLZXkgPSBwcm9wcy5rZXkgfHwgdGhpcy50aGlzQXJnIHx8IHRoaXMuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgcmVwbGFjZUFyZ3MoIGFyZ3M6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYXJncyA9IGFyZ3M7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByZW5kZXJPblVwZGF0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVuZGVyUmVxdWlyZWQ7IH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb24gcHJveHkgY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLnRoaXNBcmcsIHRoaXMuYXJncyk7XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jV2F0Y2hlciggdGhpcy5hcmdzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpbmtOb2RlVG9GdW5jKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuZnVuYywgdGhpcy51cGRhdGVGcm9tV2F0Y2hlciwgdGhpcy50aGlzQXJnLCB0aGlzKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyLmRpc3Bvc2UoKTtcclxuXHRcdHRoaXMudW5saW5rTm9kZUZyb21GdW5jKCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdCBhbmQgdGhlIHNhbWUgdGhpc0FyZyBwcm9wZXJ0eVxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gbmV3RnVuY1Byb3h5Vk4uZnVuYyAmJiB0aGlzLnRoaXNBcmcgPT09IG5ld0Z1bmNQcm94eVZOLnRoaXNBcmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmxpbmtLZXkgPSBuZXdGdW5jUHJveHlWTi5saW5rS2V5O1xyXG5cclxuXHRcdC8vIHRha2UgYXJndW1lbnRzIGZyb20gdGhlIG5ldyBub2RlOyB0aGUgZnVuY3Rpb24gaXRzZWxmIGFuZCBcInRoaXNBcmdcIiByZW1haW4gdGhlIHNhbWUuXHJcblx0XHR0aGlzLmFyZ3MgPSBuZXdGdW5jUHJveHlWTi5hcmdzO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIGFsc28gYmUgY2FsbGVkIC0gYnV0IG9ubHkgdG8gY2xlYXIgdGhlIHJlbmRlclJlcXVpcmVkIGZsYWcuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgcHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHdlIHVzZSB0aGlzIG1ldGhvZCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnXCJcclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBmaW5kVk4oIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnkpOiBGdW5jUHJveHlWTlxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBrZXkgaXMgdW5kZWZpbmVkLCB3ZSB1c2UgdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGZcclxuXHRcdGxldCBsaW5rS2V5OiBhbnkgPSBrZXkgfHwgdGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXAgfHwgZnVuYztcclxuXHJcblx0XHQvLyB0cnkgdG8gZmluZCB0aGUga2V5IGluIHRoZSBtYXAgb24gdGhlIGZ1bmN0aW9uIG9iamVjdDsgaWYgbm90IGZvdW5kLCBkbyBub3RoaW5nXHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdHJldHVybiBtYXBLZXlzVG9Ob2RlcyAmJiBtYXBLZXlzVG9Ob2Rlcy5nZXQoIGxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhlIG5vZGVcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggZnVuYywga2V5LCB0aGlzQXJnKTtcclxuXHRcdGlmICghdm4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5hcmdzID0gYXJncztcclxuXHRcdHZuLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYSB2YWx1ZSBvZiBzb21lIHRyaWdnZXIgb2JqZWN0IGJlaW5nIHdhdGNoZWQgYnkgdGhlIGZ1bmN0aW9uXHJcbiAgICAvLyBpcyBjaGFuZ2VkLlxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGcm9tV2F0Y2hlcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBsaW5rTm9kZVRvRnVuYygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc107XHJcblx0XHRpZiAoIW1hcEtleXNUb05vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRtYXBLZXlzVG9Ob2RlcyA9IG5ldyBNYXA8YW55LEZ1bmNQcm94eVZOPigpO1xyXG5cdFx0XHR0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdID0gbWFwS2V5c1RvTm9kZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0bWFwS2V5c1RvTm9kZXMuc2V0KCB0aGlzLmxpbmtLZXksIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgdW5saW5rTm9kZUZyb21GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmIChtYXBLZXlzVG9Ob2RlcylcclxuXHRcdFx0bWFwS2V5c1RvTm9kZXMuZGVsZXRlKCB0aGlzLmxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmdcclxuXHRwcml2YXRlIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gT2JqZWN0IHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSB0aGlzQXJnOiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgYXJnczogYW55W107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBiZSByZS1yZW5kZXJlZDsgdGhhdCBpcywgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0cHJpdmF0ZSByZW5kZXJSZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gS2V5IHRoYXQgbGlua3MgdGhlIGZ1bmN0aW9uIGFuZCB0aGlzIG5vZGUuIFRoaXMga2V5IGlzIGVpdGhlciBlcXVhbHMgdG8gdGhlIGtleSBwcm92aWRlZFxyXG5cdC8vIGluIHRoZSBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb3IgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50IG9yIHRvIHRoZSBmdW5jdGlvblxyXG5cdC8vIGl0c2VsZi5cclxuXHRwcml2YXRlIGxpbmtLZXk6IGFueTtcclxuXHJcbiAgICAvLyBXYXRjaGVyIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55IHRyaWdnZXIgb2JqZWN0c1xyXG4gICAgLy8gYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZSB0aHVzIHRyaWdnZXJyaW5nXHJcbiAgICAvLyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBub2RlIGNvcnJlc3BvbmRzIHRvIGEgZnJhZ21lbnQgcGxhY2Vob2xkZXIuICovXHJcblx0cHVibGljIHN0YXRpYyBpc1ZOYUZyYWdtZW50KCB2bjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuICh2biBhcyBGdW5jVk4pLmZ1bmMgPT09IG1pbS5GcmFnbWVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuRnVuY0NvbXA7XHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5XHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb25hbCBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdFx0Ly8gRE9NIHRyZWUuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSAobmV3Vk4gYXMgRnVuY1ZOKS5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1ZOID0gbmV3Vk4gYXMgRnVuY1ZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jVk4ua2V5O1xyXG5cclxuXHRcdC8vIHRha2UgcHJvcGVydGllcyBmcm9tIHRoZSBuZXcgbm9kZVxyXG5cdFx0dGhpcy5mdW5jID0gbmV3RnVuY1ZOLmZ1bmM7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRwcml2YXRlIGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk59IGZyb20gXCIuL0NsYXNzQ29tcFZOXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIEluc3RhbmNlVk4gaXMgYSBub2RlIHRoYXQgaG9sZHMgYW4gaW5zdGFuY2Ugb2YgYW4gSUNvbXBvbmVudC1pbXBsZW1lbnRpbmcgb2JqZWN0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBtaW0uSUluZGVwZW5kZW50Q29tcFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcDogbWltLklDb21wb25lbnQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcDtcclxuXHRcdHRoaXMuY29tcCA9IGNvbXA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lID8gdGhpcy5jb21wLmRpc3BsYXlOYW1lIDogdGhpcy5jb21wLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuIFRoZSBpbnN0YW5jZSBvZiBvdXIgY29tcG9uZW50IGlzIHRoZSBrZXkuXHJcblx0cHVibGljIGdldCBrZXkoKTogYW55IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblx0XHR0aGlzLndpbGxVbm1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGlmIGl0IGlzIHRoZSBzYW1lIGNvbXBvbmVudCBpbnN0YW5jZSwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xyXG5cdFx0bGV0IG5ld0NvbXAgPSAobmV3Vk4gYXMgSW5kZXBlbmRlbnRDb21wVk4pLmNvbXA7XHJcblx0XHRsZXQgbmVlZHNVcGRhdGluZyA9IHRoaXMuY29tcCAhPT0gbmV3Q29tcDtcclxuXHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50IGluc3RhbmNlcyBhcmUgZGlmZmVyZW50LCB0aGVuIHdlIG5lZWQgdG8gcHJlcGFyZSB0aGUgbmV3IGluc3RhbmNlIGZvclxyXG5cdFx0Ly8gbW91bnRpbmcgYW5kIHRoZSBvbGQgb25lIGZvciB1bm1vdW50aW5nLlxyXG5cdFx0aWYgKG5lZWRzVXBkYXRpbmcpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIG5ld0NvbXApO1xyXG5cdFx0XHR0aGlzLndpbGxVbm1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcCA9IG5ld0NvbXA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBuZXcgY29tcG9uZW50IGluIG91ciBjb21wIHByb3BlcnR5IHdlIHNob3VsZCByZWVzdGFibGlzaFxyXG4gICAgICAgICAgICAvLyB3YXRjaGluZyBpdHMgcmVuZGVyIG1ldGhvZFxyXG4gICAgICAgICAgICBzdXBlci5yZWVzdGFibGlzaFdhdGNoZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBuZWVkc1VwZGF0aW5nKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgbW91bnRlZC5cclxuXHRwcml2YXRlIHdpbGxNb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRjb21wLnZuID0gdGhpcztcclxuXHJcblx0XHRpZiAoY29tcC53aWxsTW91bnQpXHJcblx0XHRcdGNvbXAud2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgZ2l2ZW4gY29tcG9uZW50IHRoYXQgaXQgd2lsbCBiZSB1bm1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsVW5tb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY29tcC53aWxsVW5tb3VudClcclxuXHRcdFx0Y29tcC53aWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdGNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTn0gZnJvbSBcIi4vQ2xhc3NDb21wVk5cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgSUNvbXBvbmVudDw+IGludGVyZmFjZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBtaW0uSU1hbmFnZWRDb21wVk5cclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuXHRwdWJsaWMgY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuTWFuYWdlZENvbXA7XHJcblx0XHR0aGlzLmNvbXBDbGFzcyA9IGNvbXBDbGFzcztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleSBhbmQgcmVmXHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWUgcGx1cyBrZXkgaWYgZGVmaW5lZC4gTm90ZSB0aGF0IGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0Ly8gbWlnaHQgbm90IGJlIGNyZWF0ZWQgeWV0IHdoZW4gdGhpcyBtZXRob2QgaXMgY2FsbGVkXHJcblx0XHRpZiAodGhpcy5jb21wICYmIHRoaXMuY29tcC5kaXNwbGF5TmFtZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLmNvbXBDbGFzcy5uYW1lO1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCBwYXJlbnQsIGNyZWF0b3IpO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdHRoaXMuY29tcCA9IG5ldyB0aGlzLmNvbXBDbGFzcyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLnZuID0gdGhpcztcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLndpbGxNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLndpbGxNb3VudCgpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZFxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0dGhpcy5jb21wLnZuID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIE1hbmFnZWRDb21wVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIE1hbmFnZWRDb21wVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3Q2xhc3NWTi5rZXk7XHJcblxyXG5cdFx0Ly8gc2hhbGxvdyBjb3B5IHRoZSBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvdGhlciBub2RlIHRvIG91ciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgZ290IG91ciBwcm9wcyBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB3aWxsIGtlZXBcclxuXHRcdC8vIHdvcmtpbmcgd2l0aCBpdCAtIGVzcGVjaWFsbHkgaWYgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QuXHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKCBrZXkgPT4gZGVsZXRlIHRoaXMucHJvcHNba2V5XSk7XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnByb3BzLCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBzaG91bGRSZW5kZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge3NfY3VycmVudENsYXNzQ29tcH0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBjdXN0b20gcHJvcGVydHkgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogbWltLlByb21pc2VQcm94eVByb3BzLCBjaGlsZHJlbj86IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5Qcm9taXNlUHJveHk7XHJcblx0XHR0aGlzLnByb21pc2UgPSBwcm9wcy5wcm9taXNlO1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gcHJvcHMuZXJyb3JDb250ZW50RnVuYztcclxuXHRcdHRoaXMuY29udGVudCA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkIChzdWNjZXNzZnVsbHkgb3Igbm90KS5cclxuXHRwdWJsaWMgZ2V0IGlzU2V0dGxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvbWlzZSA9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBwcm9taXNlIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMucHJvbWlzZSA9PT0gbmV3UHJvbWlzZVByb3h5Vk4ucHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld1Byb21pc2VQcm94eVZOLmtleTtcclxuXHRcdHRoaXMuY29udGVudCA9IG5ld1Byb21pc2VQcm94eVZOLmNvbnRlbnQ7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBuZXdQcm9taXNlUHJveHlWTi5lcnJvckNvbnRlbnRGdW5jO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhaXRzIGZvciB0aGUgcHJvbWlzZSB0byBzZXR0bGVcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZSgpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHRoaXMucHJvbWlzZTtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIHN0aWxsIG1vdW50ZWQsIHJlcXVlc3QgdXBkYXRlXHJcblx0XHRcdGlmICh0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBhbHJlYWR5IHVubW91bnRlZCwgZG8gbm90aGluZ1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGlmICh0aGlzLmVycm9yQ29udGVudEZ1bmMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmVycm9yQ29udGVudEZ1bmMoIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIxKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycik7XHJcblxyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFByb21pc2UgdGhhdCB0aGlzIG5vZGUgd2F0Y2hlcy5cclxuXHRwcml2YXRlIHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0Ly8gQ29udGVudCB0aGF0IHRoaXMgbm9kZSBkaXNwbGF5cy4gSW5pdGlhbGx5IHRoaXMgY29udGVudCBpcyBzZXQgdG8gcHJvcHMuY2hpbGRyZW4uIFdoZW5cclxuXHQvLyB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCwgdGhlIGNvbnRlbnQgaXMgc2V0IHRvIHRoZSByZXNvbHZlZCB2YWx1ZS4gSWYgdGhlIHByb21pc2UgaXNcclxuXHQvLyByZWplY3RlZCBhbmQgdGhlIGVycm9yQ29udGVudEZ1bmMgaXMgZGVmaW5lZCwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGl0cyByZXR1cm5cclxuXHQvLyB2YWx1ZSBpcyB1c2VkIGFzIGNvbnRlbnQuXHJcblx0cHJpdmF0ZSBjb250ZW50PzogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIGVycm9yQ29udGVudEZ1bmM/OiAoIGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgZXhwb3J0IGZ1bmN0aW9uYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGUgc2FtZVxyXG4vLyBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxuXHRzdWJzY3JpYmVkVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG59XHJcblxyXG4vLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2V0cyBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgc3Vic2NyaWJlZCB0byB0aGlzIHNlcnZpY2UuXHJcbmxldCBzX3NlcnZpY2VJbmZvcyA9IG5ldyBNYXA8c3RyaW5nLFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHJcblx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Um9vdFZOfSBmcm9tIFwiLi9Sb290Vk5cIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290RXJyb3JVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHByaXZhdGUgcm9vdFZOOiBSb290Vk47XHJcblx0cHJpdmF0ZSBlcnI6IGFueTtcclxuXHRwcml2YXRlIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoIHJvb3RWTjogUm9vdFZOLCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJvb3RWTiA9IHJvb3RWTjtcclxuXHRcdHRoaXMuZXJyID0gZXJyO1xyXG5cdFx0dGhpcy5wYXRoU3RyaW5nID0gcGF0aCA/IHBhdGguam9pbiggXCIgXFx1MjE5MiBcIikgOiBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJ9fT5cclxuXHRcdFx0PGRpdj57dGhpcy5lcnIubWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0PGRpdj57dGhpcy5wYXRoU3RyaW5nfTwvZGl2PlxyXG5cdFx0XHQ8aHIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19Lz5cclxuXHRcdFx0PGJ1dHRvbiBjbGljaz17dGhpcy5vblJlc3RhcnR9PlJlc3RhcnQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblJlc3RhcnQgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucm9vdFZOLnJlc3RhcnQoKTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdFdhaXRpbmdVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiTG9hZGluZyAuLi5cIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHt1cGRhdGVOb2RlU3luYywgcmVxdWVzdE5vZGVVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcbmltcG9ydCB7RE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Um9vdEVycm9yVUksIFJvb3RXYWl0aW5nVUl9IGZyb20gXCIuL1Jvb3RVSVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFJvb3RWTiBjbGFzcyBpcyB1c2VkIGFzIGEgdG9wLWxldmVsIHZpcnR1YWwgbm9kZSBmb3IgYWxsIHJlbmRlcmVkIHRyZWVzLiBSb290Vk4gc2VydmVzXHJcbi8vIGFzIGFuIGVycm9yIGJvdW5kYXJ5IG9mIGxhc3QgcmVzb3J0LiBXaGVuIGl0IGNhdGNoZXMgYW4gZXJyb3IgdGhhdCB3YXNuJ3QgY2F1Z2h0IGJ5IGFueVxyXG4vLyBkZXNjZW5kYW5kIG5vZGUsIGl0IGRpc3BsYXlzIGEgc2ltcGxlIFVJIHRoYXQgc2hvd3MgdGhlIGVycm9yIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVzdGFydC5cclxuLy8gUm9vdFZOIGFsc28gbWFuYWdlcyBzZXJ2aWNlIHB1Ymxpc2hlcnMgYW5kIHN1YnNjcmliZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFJvb3RWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggYW5jaG9yRE46IEROKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKHN5bmMpXHJcblx0XHRcdHVwZGF0ZU5vZGVTeW5jKCB0aGlzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgYSBjaGFpbiBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLlxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZXJyb3JVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JVSTtcclxuXHRcdGVsc2UgaWYgKHRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy53YWl0aW5nVUk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBvciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChlcnIgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvbWlzZSA9IGVyciBhcyBQcm9taXNlPGFueT47XHJcblx0XHRcdHRoaXMudGhyb3duUHJvbWlzZXMuYWRkKCBwcm9taXNlKTtcclxuXHRcdFx0cHJvbWlzZS50aGVuKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdHByb21pc2UuY2F0Y2goICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0aWYgKCF0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0XHR0aGlzLndhaXRpbmdVSSA9IG5ldyBSb290V2FpdGluZ1VJKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXJyb3JVSSA9IG5ldyBSb290RXJyb3JVSSggdGhpcywgZXJyLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheXMgdGhlIGNvbnRlbnQgb3JpZ2luYWxseSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHB1YmxpYyByZXN0YXJ0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gYmUgdXBkYXRlZFxyXG5cdFx0dGhpcy5lcnJvclVJID0gdW5kZWZpbmVkO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBmdWxmaWxsZWQgcHJvbWlzZSBmcm9tIG91ciBpbnRlcm5hbCBsaXN0IGFuZCBpZiB0aGUgbGlzdCBpcyBlbXB0eSBhc2tzIHRvXHJcblx0Ly8gcmUtcmVuZGVyXHJcblx0cHJpdmF0ZSBvblByb21pc2VGdWxmaWxsZWQoIHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRocm93blByb21pc2VzLmRlbGV0ZSggcHJvbWlzZSk7XHJcblx0XHRpZiAodGhpcy50aHJvd25Qcm9taXNlcy5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndhaXRpbmdVSSA9IG51bGw7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udGVudCByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSBlcnJvclVJOiBSb290RXJyb3JVSTtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSB3YWl0aW5nVUk6IFJvb3RXYWl0aW5nVUk7XHJcblxyXG5cdC8vIFNldCBvZiBwcm9taXNlcyB0aHJvd24gYnkgZGVzY2VuZGFudCBub2RlcyBhbmQgbm90IHlldCBmdWxmaWxsZWQuXHJcblx0cHJpdmF0ZSB0aHJvd25Qcm9taXNlcyA9IG5ldyBTZXQ8UHJvbWlzZTxhbnk+PigpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBzX21pbWJsQW5jaG9yUHJvcE5hbWUgPSBcIl9fbWltYmxBbmNob3JQcm9wTmFtZV9fXCI7XHJcblxyXG5cclxuXHJcbi8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcbi8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgaW4gYSBzeW5jaHJvbm91cyB3YXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJvb3RTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHQvLyBwcm9wZXJ0eVxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc19taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlIGFuZCB0cmlnZ2VyIHN5bmNocm9ub3VzIHVwZGF0ZVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdFN5bmMuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Um9vdFN5bmMoIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgdHJ1ZSk7XHJcblx0cm9vdFZOLnRlcm0oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG4vLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRSb290KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHQvLyBwcm9wZXJ0eVxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc19taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHR9XHJcblxyXG5cdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUsIHdoaWNoIHdpbGwgdHJpZ2dlciB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgZmFsc2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290LlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3QoIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdHJvb3RWTi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgZ2V0Rmlyc3RETiwgZ2V0TGFzdEROLCBnZXRJbW1lZGlhdGVETnMsIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROLCBnZXRWTlBhdGh9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnR9IGZyb20gXCIuL0NvbnRlbnRGdW5jc1wiXHJcbmltcG9ydCB7Vk5EaXNwQWN0aW9uLCBWTkRpc3AsIFZORGlzcEdyb3VwfSBmcm9tIFwiLi9WTkRpc3BcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5lbnVtIFNjaGVkdWxlclN0YXRlXHJcbntcclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIG5vdCB3aXRoaW4gdGhlIHVwZGF0ZSBjeWNsZVxyXG5cdElkbGUgPSAwLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0QmVmb3JlVXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIHVwZGF0aW5nIG5vZGVzXHJcblx0VXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRBZnRlclVwZGF0ZSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxlZEZ1bmNNYXAgY2xhc3MgcmVwcmVzZW50cyBhIG1hcCBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGV4ZWN1dGVkIGVpdGhlciBiZWZvcmVcclxuICogb3IgYWZ0ZXIgY29tcG9uZW50IHVwZGF0ZXMuIFRoZSBrZXlzIGluIHRoaXMgbWFwIGFyZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb25zIGFuZCB0aGUgdmFsdWVzIGFyZVxyXG4gKiB0aGUgd3JhcHBlciBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIGEgZ2l2ZW4gdmlydHVhbCBub2RlLiBCb3RoXHJcbiAqIHRoZSBrZXlzIGFuZCB0aGUgdmFsdWVzIGhhdmUgdGhlIHNhbWUgdHlwZTogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLlxyXG4gKi9cclxuY2xhc3MgU2NoZWR1bGVkRnVuY01hcCBleHRlbmRzIE1hcDxtaW0uU2NoZWR1bGVkRnVuY1R5cGUsbWltLlNjaGVkdWxlZEZ1bmNUeXBlPiB7fVxyXG5cclxuXHJcblxyXG4vLyBNYXAgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvbiB0aGUgbmV4dCBVSSBjeWNsZS4gV2UgdXNlIE1hcCBpbiBvcmRlciB0byBub3QgaW5jbHVkZVxyXG4vLyB0aGUgc2FtZSBub2RlIG1vcmUgdGhhbiBvbmNlIC0gd2hpY2ggY2FuIGhhcHBlbiBpZiB0aGUgbm9kZSdzIHJlcXVlc3RVcGRhdGUgbWV0aG9kIGlzIGNhbGxlZFxyXG4vLyBtb3JlIHRoYW4gb25jZSBkdXJpbmcgYSBzaW5nbGUgcnVuIChlLmcuIGR1cmluZyBldmVudCBwcm9jZXNzaW5nKS4gVGhlIHZhbHVlIG1hcHBlZCB0byB0aGVcclxuLy8gbm9kZSBkZXRlcm1pbmVzIHRoZSBvcGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkOlxyXG4vL1x0LSB1bmRlZmluZWQgLSB0aGUgbm9kZSB3aWxsIGJlIHVwZGF0ZWRcclxuLy9cdC0gbnVsbCAtIHRoZSBub2RlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIGl0cyBwYXJlbnRcclxuLy9cdC0gYW55dGhpbmcgZWxzZSAtIHRoZSBub2RlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGlzIG5ldyBjb250ZW50XHJcbmxldCBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYmVmb3JlXHJcbi8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuIFRoZSB2YWx1ZXMgaW4gdGhlIG1hcCBhcmUgb2JqZWN0cyB0aGF0IHdpbGxcclxuLy8gYmUgdXNlZCBzIHRoZSBcInRoaXNcIiB2YWx1ZSBpbiB0aGUgY2FsbGJhY2suXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IFNjaGVkdWxlZEZ1bmNNYXAoKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBhZnRlclxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUgdmFsdWVzIGluIHRoZSBtYXAgYXJlIG9iamVjdHMgdGhhdCB3aWxsXHJcbi8vIGJlIHVzZWQgcyB0aGUgXCJ0aGlzXCIgdmFsdWUgaW4gdGhlIGNhbGxiYWNrLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IFNjaGVkdWxlZEZ1bmNNYXAoKTtcclxuXHJcbi8vIEhhbmRsZSBvZiB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgKGluIGNhc2UgaXQgc2hvdWxkIGJlIGNhbmNlbGVkKS5cclxubGV0IHNfc2NoZWR1bGVkRnJhbWVIYW5kbGU6IG51bWJlciA9IDA7XHJcblxyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyLlxyXG5sZXQgc19zY2hlZHVsZXJTdGF0ZTogU2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG5cclxuLy8gTnVtYmVyIHRoYXQgc2VydmVzIGFzIGEgdW5pcXVlIElEIG9mIGFuIHVwZGF0ZSBjeWNsZS4gRWFjaCB1cGRhdGUgY3ljbGUgdGhlIHJvb3Qgbm9kZVxyXG4vLyBpbmNyZW1lbnRzIHRoaXMgbnVtYmVyLiBFYWNoIG5vZGUgYmVpbmcgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIGlzIGFzc2lnbmVkIHRoaXMgbnVtYmVyLlxyXG4vLyBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiB3aGVuIGJvdGggYSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlXHJcbi8vIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcbmxldCBzX2N1cnJlbnRUaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gTm9kZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLiBEdXJpbmcgY3JlYXRpb24gYW5kIHVwZGF0aW5nIHByb2Nlc3MsIHRoaXMgdmFsdWUgaXMgc2V0XHJcbi8vIGV2ZXJ5IHRpbWUgd2UgcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcyBhbmQgcmVzdG9yZWQgd2hlbiB3ZSByZXR1cm4gYmFjayB0byB0aGUgbm9kZS4gSWZcclxuLy8gZHVyaW5nIGNyZWF0aW9uIG9yIHVwZGF0aW5nIHByb2Nlc3MgYW4gZXhjZXB0aW9uIGlzIHRocm93biBhbmQgaXMgY2F1Z2h0IGJ5IHNvbWUgdXBwZXJcclxuLy8gbGV2ZWwgbm9kZSwgdGhpcyB2YWx1ZSB3aWxsIHN0aWxsIHBvaW50IGF0IHRoZSBub2RlIHRoYXQgY2F1c2VkIHRoZSBleGNlcHRpb24uXHJcbmV4cG9ydCBsZXQgc19jdXJyZW50Vk46IFZOID0gbnVsbDtcclxuXHJcbi8vIENsYXNzLWJhc2VkIGNvbXBvbmVudCB3aG9zZSByZW5kZXJpbmcgdHJlZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudENsYXNzQ29tcDogbWltLklDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZVN5bmMoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRsZXQgb2xkU3RhdHMgPSBEZXRhaWxlZFN0YXRzLnN0YXRzO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdXBkYXRlIGN5Y2xlICR7c19jdXJyZW50VGlja306IGApO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0bGV0IHZuczogVk5bXVtdID0gbmV3IEFycmF5KDEpO1xyXG5cdHZuc1swXSA9IFt2bl07XHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIHZucykpO1xyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBvbGRTdGF0cztcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2bi50eXBlID09PSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcCB8fCB2bi50eXBlID09PSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBtaW0uSUNsYXNzQ29tcFZOKS5jb21wO1xyXG5cdFx0aWYgKGNvbXAuYmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGNvbXAuYmVmb3JlVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cclxuXHRcdGlmIChjb21wLmFmdGVyVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBjb21wLmFmdGVyVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGUgZHVyaW5nIGFcclxuXHQvLyBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24uXHJcblx0aWYgKHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG4vLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuLCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiB2b2lkXHJcbntcclxuXHQvLy8gI2lmIERFQlVHXHJcblx0aWYgKCFmdW5jKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIFwiVHJ5aW5nIHRvIHNjaGVkdWxlIHVuZGVmaW5lZCBmdW5jdGlvbiBmb3IgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBmdW5jLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGZ1bmMsIHRoYXQsIHZuKSk7XHJcblxyXG5cdFx0XHQvLyBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIGFsd2F5cyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgZnJhbWUgZXZlbiBpZiB0aGVcclxuXHRcdFx0Ly8gY2FsbCBpcyBtYWRlIGZyb20gYW5vdGhlciBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbi5cclxuXHRcdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICghc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGFuIFwiYWZ0ZXIgdXBkYXRlXCIgZnVuY3Rpb24gaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlXHJcblx0XHRcdC8vIGVpdGhlciBmcm9tIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uIG9yIGR1cmluZyBhIG5vZGUgdXBkYXRlLlxyXG5cdFx0XHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLlVwZGF0ZSlcclxuXHRcdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogV3JhcHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCByZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiB0aGVcclxuICogZ2l2ZW4gdmlydHVhbCBub2RlLiBUaGUgZ2l2ZW4gXCJ0aGF0XCIgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzXHJcbiAqIGV4ZWN1dGVkLiBJZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvclxyXG4gKiBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGUgZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYVxyXG4gKiBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkLlxyXG4gKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpcyBleGVjdXRlZC5cclxuICogQHBhcmFtIHZuIFZpcnR1YWwgbm9kZSBpbiB3aG9zZSBjb250ZXh0IHRoZSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkLlxyXG4gKiBAcmV0dXJucyBUaGUgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBDYWxsYmFja1dpdGhWTjxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCwgdm4/OiBtaW0uSVZOb2RlKTogVFxyXG57XHJcblx0cmV0dXJuIENhbGxiYWNrV3JhcHBlci5iaW5kKCB2biwgdGhhdCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBhIGNhbGxiYWNrIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbnMgZnJvbSB0aGVcclxuICogY2FsbGJhY2sgYW5kIHBhc3MgaXQgdG8gdGhlIFwiU3RkRXJyb3JIYW5kbGluZ1wiIHNlcnZpY2UuIFRoZSBmdW5jdGlvbiBpcyBib3VuZCB0byAgdGhlIHZpcnR1YWxcclxuICogbm9kZSBhcyBcInRoaXNcIiBhbmQgdG8gdHdvIHBhcmFtZXRlcnM6IHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZVxyXG4gKiBvcmlnaW5hbCBjYWxsYmFjayBpcyBleGVjdXRlZCBhbmQgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGl0c2VsZi4gVGhlc2UgdHdvIHBhcmFtZXRlcnMgYXJlXHJcbiAqIGFjY2Vzc2VkIGFzIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGVsZW1lbnRzIG9mIHRoZSBgYXJndW1lbnRzYCBhcnJheSkuIFRoZSByZXN0IG9mIHBhcmFtZXRlcnMgaW5cclxuICogdGhlIGBhcmd1bWVudHNgIGFycmF5IGFyZSBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGFuZCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXHJcbiAqIGlzIHJldHVybmVkIGZyb20gdGhlIHdyYXBwZXIuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgXCJ0aGlzXCIgY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgZnVuY3Rpb24gd2FzIHNjaGVkdWxlZCB3aXRob3V0IGJlaW5nIGluIHRoZSBjb250ZXh0IG9mXHJcbiAqIGFueSB2aXJ0dWFsIG5vZGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxsYmFja1dyYXBwZXIoKTogYW55XHJcbntcclxuXHQvLyByZW1lbWJlciB0aGUgY3VycmVudCBWTiBhbmQgc2V0IHRoZSBjdXJyZW50IFZOIHRvIGJlIHRoZSBWTiBmcm9tIHRoZSBcInRoaXNcIiB2YWx1ZS4gTm90ZVxyXG5cdC8vIHRoYXQgdGhpcyBjYW4gYmUgdW5kZWZpbmVkXHJcblx0bGV0IGN1cnJlbnRWTiA9IHNfY3VycmVudFZOO1xyXG4gICAgbGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcbiAgICBpZiAodGhpcylcclxuICAgIHtcclxuICAgICAgICBzX2N1cnJlbnRWTiA9IHRoaXM7XHJcbiAgICAgICAgc19jdXJyZW50Q2xhc3NDb21wID0gKHNfY3VycmVudFZOIGFzIGFueSkuY29tcCA/IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgOiBzX2N1cnJlbnRWTi5jcmVhdG9yO1xyXG4gICAgfVxyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW3RoYXQsIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiB0aGF0ID8gb3JnQ2FsbGJhY2suYXBwbHkoIHRoYXQsIHJlc3QpIDogb3JnQ2FsbGJhY2soIC4uLnJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcylcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdGhpcykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG4gICAgICAgIGlmICh0aGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVzdG9yZSB0aGUgY3VycmVudCBWTiB0byB0aGUgcmVtZW1iZXJlZCB2YWx1ZTtcclxuICAgICAgICAgICAgc19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcbiAgICAgICAgICAgIHNfY3VycmVudENsYXNzQ29tcCA9IGN1cnJlbnRDbGFzc0NvbXA7XHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5sZXQgb25TY2hlZHVsZWRGcmFtZSA9ICgpOiB2b2lkID0+XHJcbntcclxuXHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBhZnRlciB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdXBkYXRlIGN5Y2xlICR7c19jdXJyZW50VGlja306IGApO1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGludGVybmFsIHNldCBvZiBub2RlcyBhbmQgcmUtY3JlYXRlIGl0IHNvIHRoYXQgaXQgaXMgcmVhZHkgZm9yIG5ld1xyXG5cdFx0Ly8gdXBkYXRlIHJlcXVlc3RzLiBBcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBhbmQgcGVyZm9ybSB1cGRhdGVzLlxyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdHBlcmZvcm1Db21taXRQaGFzZSggcGVyZm9ybVJlbmRlclBoYXNlKCBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUpKSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQWZ0ZXJVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcbi8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG4vL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcbi8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG4vL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG4vLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuLy8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuZnVuY3Rpb24gYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcbntcclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0bGV0IGxhYmVsID0gYGFycmFuZ2luZyAke3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplfSBub2RlcyBieSBkZXB0aGA7XHJcblx0XHRjb25zb2xlLnRpbWUoIGxhYmVsKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIGNyZWF0ZSBhIHNwYXJzZSBhcnJheSBvZiBjZXJ0YWluIHJlYXNvbmFibGUgc2l6ZS4gSWYgd2UgaGF2ZSBkZXB0aHMgZ3JlYXRlciB0aGFuIHRoaXMsXHJcblx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIHBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0bGV0IHZuc0J5RGVwdGg6IFZOW11bXSA9IG5ldyBBcnJheTxWTltdPigxMDApO1xyXG5cdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdHtcclxuXHRcdGxldCBhcnIgPSB2bnNCeURlcHRoW3ZuLmRlcHRoXTtcclxuXHRcdGlmICghYXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2godm4pO1xyXG5cdH0pO1xyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS50aW1lRW5kKCBsYWJlbCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2xlYXIgdGhlIGZsYWcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGZvciB0aGUgbm9kZVxyXG5cdFx0XHR2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuXHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGRpc3AgPSBuZXcgVk5EaXNwKCB2biwgVk5EaXNwQWN0aW9uLlVua25vd24sIHZuKTtcclxuXHRcdFx0dXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHQvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHRcdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgc19jdXJyZW50Vk4gPyBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSA6IG51bGwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNfY3VycmVudFZOID0gbnVsbDtcclxuXHR9KX0pO1xyXG5cclxuXHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuLy8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuZnVuY3Rpb24gcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIGRvbid0IHVudGljaXBhdGUgYW55IGV4Y2VwdGlvbnMgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGludm9rZSAzcmQtcGFydHkgY29kZSBoZXJlLlxyXG5cdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBTY2hlZHVsZWRGdW5jTWFwLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRsZXQgY3VycmVudENsYXNzQ29tcCA9IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRpZiAoKHZuIGFzIGFueSkuY29tcClcclxuXHRcdHNfY3VycmVudENsYXNzQ29tcCA9ICh2biBhcyBhbnkpLmNvbXA7XHJcblxyXG5cdGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZyAmJiB2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaW1wbGVtZW50IGByZW5kZXJgLCB0aGUgbm9kZSBuZXZlciBoYXMgYW55IHN1Yi1ub2RlcyAoZS5nLiB0ZXh0IG5vZGVzKVxyXG5cdGlmICh2bi5yZW5kZXIpXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZyAmJiB2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0Y3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBJZiB0aGlzIG5vZGUgZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGVpdGhlciBieSB0aGlzXHJcblx0Ly8gbm9kZSBvciBieSBvbmUgb2YgaXRzIHN1Yi1ub2RlcywgdGhpcyBsaW5lIGlzIG5vdCBleGVjdXRlZCBhbmQgdGh1cywgc19jdXJyZW50Vk5cclxuXHQvLyB3aWxsIHBvaW50IHRvIG91ciBub2RlIHdoZW4gdGhlIGV4Y2VwdGlvbiBpcyBjYXVnaHQuXHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0c19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuZnVuY3Rpb24gY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyB0aGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgdGhlIG5vZGUgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuXHR2bi5zdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRpZiAodm4uc3ViTm9kZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0dm4ua2V5ZWRTdWJOb2RlcyA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG5cclxuXHRcdGxldCBwcmV2Vk46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHJcblx0XHRcdGlmICh2bi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHZuLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0aWYgKHByZXZWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHByZXZWTi5uZXh0ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5wcmV2ID0gcHJldlZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2Vk4gPSBzdm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBtb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuXHRsZXQgb3duRE4gPSB2bi5tb3VudCA/IHZuLm1vdW50KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgb3VyIG93biBET00gbm9kZSwgYWRkIGl0IHVuZGVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdGlmIChvd25ETilcclxuXHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gaWYgdGhlIG5vZGUgaGFzIHN1Yi1ub2RlcywgYWRkIERPTSBub2RlcyBmb3IgdGhlbS4gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93blxyXG5cdC8vIERPTSBub2RlIHVzZSBpdCBhcyBhbiBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdGxldCBuZXdBbmNob3JETiA9IG93bkROID8gb3duRE4gOiBhbmNob3JETjtcclxuXHRcdGxldCBuZXdCZWZvcmVETiA9IG93bkROID8gbnVsbCA6IGJlZm9yZUROO1xyXG5cclxuXHRcdC8vIG1vdW50IGFsbCBzdWItbm9kZXNcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y3JlYXRlUGh5c2ljYWwoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBkaWRNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuICAgIGlmICh2bi5kaWRNb3VudClcclxuICAgICAgICB2bi5kaWRNb3VudCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIHByZURlc3Ryb3koIHZuOiBWTilcclxue1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdHByZURlc3Ryb3koIHN2bik7XHJcblx0fVxyXG5cclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbFVubW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gd2lsbFVubW91bnRgKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVtb3ZlcyBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxue1xyXG5cdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblxyXG5cdGlmICh2bi51bm1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHRcdHZuLnVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG5cdC8vIHdlIGRvbid0IG5lZWQgdG8gcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcywgYmVjYXVzZSB0aGV5IGFyZSByZW1vdmVkIHdpdGggdGhlIHBhcmVudC5cclxuXHRpZiAob3duRE4pXHJcblx0XHQob3duRE4gYXMgYW55IGFzIENoaWxkTm9kZSkucmVtb3ZlKCk7XHJcblx0ZWxzZSBpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgYmVjYXVzZSB0aGlzIHdheSB0aGUgRE9NIGVsZW1lbnQgcmVtb3ZhbCBpc1xyXG5cdFx0Ly8gZWFzaWVyLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IHZuLnN1Yk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcblx0dm4udGVybSgpO1xyXG5cclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW5kZXJzIHRoaXMgbm9kZSBhbmQgdXBkYXRlcyBpdHMgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeS4gVGhpcyBtZXRob2QgaXNcclxuLy8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuLy8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcbi8vICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNob3VsZFVwZGF0ZSBvciByZW5kZXIgbWV0aG9kcyksIHRoZSBjb21wb25lbnQgaXMgYXNrZWRcclxuLy8gdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byByZW5kZXJcclxuLy8gYWdhaW47IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbiBpcyByZS10aHJvd24uIFRodXMsIHRoZSBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdFxyXG4vLyBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuZnVuY3Rpb24gdXBkYXRlVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gbGV0IHZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgPyBkaXNwLm5ld1ZOIDogZGlzcC5vbGRWTjtcclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgY3VycmVudFZOID0gdm47XHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblxyXG5cdGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdGlmICgodm4gYXMgYW55KS5jb21wKVxyXG5cdFx0c19jdXJyZW50Q2xhc3NDb21wID0gKHZuIGFzIGFueSkuY29tcDtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0dXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRpZiAodm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nICYmIHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGhhbmRsZUVycm9yKCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdHZuLmhhbmRsZUVycm9yKCBlcnIsIGdldFZOUGF0aCggc19jdXJyZW50Vk4pKTtcclxuXHRcdFx0dXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IGN1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcbi8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudCBhbmQgYnVpbGQgYXJyYXkgb2YgZGlzcG9zaXRpb25zIG9iamVjdHMgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0ZGlzcC5idWlsZFN1Yk5vZGVEaXNwb3NpdGlvbnMoKTtcclxuXHJcblx0Ly8gZm9yIG5vZGVzIHRvIGJlIHJlbW92ZWQsIGNhbGwgd2lsbFVubW91bnRcclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdHByZURlc3Ryb3koIHN2bik7XHJcblx0fVxyXG5cclxuXHQvLyBwZXJmb3JtIHJlbmRlcmluZyBmb3Igc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLCByZXBsYWNlZCBvciB1cGRhdGVkXHJcblx0aWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGxldCBvbGRWTjogVk4sIG5ld1ZOOiBWTjtcclxuXHRcdGxldCBwYXJlbnRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0b2xkVk4gPSBzdWJOb2RlRGlzcC5vbGRWTjtcclxuXHRcdFx0bmV3Vk4gPSBzdWJOb2RlRGlzcC5uZXdWTjtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICgob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKSAmJiBvbGRWTi5wcmVwYXJlVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHByZXBhcmVVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBvbGRWTi5wcmVwYXJlVXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdGNyZWF0ZVZpcnR1YWwoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHQvLyBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIGV4aXQgaWYgdGhpcyBpcyB0aGUgY2FzZVxyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG5ldyBvciBtb3ZpbmcgZXhpc3Rpbmcgc3ViLW5vZGVzLiBJZlxyXG5cdC8vIG91ciBub2RlIGhhcyBpdHMgb3duIEROLCBpdCB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXM7IG90aGVyd2lzZSwgb3VyIG5vZGUnc1xyXG5cdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cdGxldCBhbmNob3JETiA9IG93bkROICE9IG51bGwgPyBvd25ETiA6IHZuLmFuY2hvckROO1xyXG5cclxuXHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgbmV3IG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0Ly8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGFuY2hvciBub2RlJ3MgY2hpbGRyZW4uXHJcblx0bGV0IGJlZm9yZUROID0gb3duRE4gIT0gbnVsbCA/IG51bGwgOiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4sIGFuY2hvckROKTtcclxuXHJcblx0Ly8gcmUtY3JlYXRlIG91ciBjdXJyZW50IGxpc3Qgb2Ygc3ViLW5vZGVzIC0gd2Ugd2lsbCBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0dm4uc3ViTm9kZXMgPSBkaXNwLnN1Yk5vZGVEaXNwcyA/IG5ldyBBcnJheTxWTj4oZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoKSA6IHVuZGVmaW5lZDtcclxuXHR2bi5rZXllZFN1Yk5vZGVzID0gdm4uc3ViTm9kZXMgIT09IHVuZGVmaW5lZCAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAxID8gbmV3IE1hcDxhbnksVk4+KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBpbmRpdmlkdWFsIG5vZGVzLlxyXG5mdW5jdGlvbiB1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRzdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tpXSA9IHN2bjtcclxuXHJcblx0XHRpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBjb21taXRVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0dXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciBhbGwgdGhlIG5vZGVzIHVuZGVyIHRoaXMgVk4gc2hvdWxkIGJlIG1vdmVkLlxyXG5cdFx0XHRsZXQgc3ViTm9kZUROcyA9IGdldEltbWVkaWF0ZUROcyggb2xkVk4pO1xyXG5cdFx0XHRpZiAoc3ViTm9kZUROcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2hlY2sgd2hldGhlciB0aGUgbGFzdCBvZiB0aGUgRE9NIG5vZGVzIGFscmVhZHkgcmVzaWRlcyByaWdodCBiZWZvcmUgdGhlIG5lZWRlZCBub2RlXHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVETnNbc3ViTm9kZUROcy5sZW5ndGggLSAxXS5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIG9sZFZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoZSBmaXJzdCBvZiBET00gbm9kZXMgYmVjb21lIHRoZSBuZXh0IGJlZm9yZUROXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBzdWJOb2RlRE5zWzBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2luY2Ugd2UgYWxyZWFkeSBkZXN0cm95ZWQgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQsIHRoZSBjb2RlIGlzXHJcblx0XHRcdC8vIGlkZW50aWNhbCBmb3IgUmVwbGFjZSBhbmQgSW5zZXJ0IGFjdGlvbnNcclxuXHRcdFx0Y3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhcmVudFZOLmtleWVkU3ViTm9kZXMgIT09IHVuZGVmaW5lZCAmJiBzdm4ua2V5ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHBhcmVudFZOLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRpZiAobmV4dFZOKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0c3ZuLm5leHQgPSBuZXh0Vk47XHJcblx0XHR9XHJcblxyXG5cdFx0bmV4dFZOID0gc3ZuO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGdyb3Vwcy4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mIHVwZGF0ZSBncm91cHNcclxuLy8gYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWxCeUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgY3VyclN1Yk5vZGVJbmRleCA9IGRpc3BzLmxlbmd0aCAtIDE7XHJcblx0bGV0IG5leHRWTjogVk4sIHN2bjogVk4sIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTjogVk4sIGZpcnN0RE46IEROO1xyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cclxuXHRcdC8vIGZpcnN0IHVwZGF0ZSBldmVyeSBzdWItbm9kZSBpbiB0aGUgZ3JvdXAgYW5kIGl0cyBzdWItc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gZGlzcHNbal07XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdFx0Ly8gZm9yIHRoZSBVcGRhdGUgb3BlcmF0aW9uLCB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlOyBmb3IgdGhlIEluc2VydCBvcGVyYXRpb25cclxuXHRcdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0XHRzdm4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tjdXJyU3ViTm9kZUluZGV4LS1dID0gc3ZuO1xyXG5cclxuXHRcdFx0aWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHBhcmVudFZOLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKG5leHRWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXh0Vk4gPSBzdm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0Ly8gZmlyc3QgYW5kIGxhc3QgRE5zIGZvciB0aGUgZ3JvdXBcclxuXHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdC8vIGdyb3VwIG9mIG5ldyBub2RlcyAoaWYgYW55KSBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcbmZ1bmN0aW9uIGFycmFuZ2VHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Ly8gV2UgZ28gZnJvbSB0aGUgbGFzdCBncm91cCB0byB0aGUgc2Vjb25kIGdyb3VwIGluIHRoZSBsaXN0IGJlY2F1c2UgYXMgc29vbiBhcyB3ZSBtb3ZlZCBhbGxcclxuXHQvLyBncm91cHMgZXhjZXB0IHRoZSBmaXJzdCBvbmUgaW50byB0aGVpciByaWdodCBwbGFjZXMsIHRoZSBmaXJzdCBncm91cCB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcclxuXHQvLyBpbiB0aGUgcmlnaHQgcGxhY2UuIFdlIGFsd2F5cyBoYXZlIHR3byBncm91cHMgKGkgYW5kIGktMSksIHdoaWNoIGFsbG93cyB1cyB0byB1bmRlcnN0YW5kXHJcblx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIHN3YXAgdGhlbS4gSWYgd2UgZG8gd2UgbW92ZSB0aGUgc2hvcnRlciBncm91cC5cclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cdFx0bGV0IHByZXZHcm91cCA9IGdyb3Vwc1tpLTFdO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBncm91cCBzaG91bGQgbW92ZS4gV2UgdGFrZSB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGdyb3VwXHJcblx0XHQvLyBhbmQgY29tcGFyZSBpdHMgRE4ncyBuZXh0IHNpYmxpbmcgdG8gdGhlIGN1cnJlbnQgXCJiZWZvcmVETlwiLlxyXG5cdFx0aWYgKGdyb3VwLmxhc3RETiAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGdyb3VwIG5vdyByZXNpZGVzIGJlZm9yZSB0aGUgcHJldmlvdXMgZ3JvdXAsIHRoZW4gdGhhdCBtZWFuc1xyXG5cdFx0XHRcdC8vIHRoYXQgd2UgYXJlIHN3YXBwaW5nIHR3byBncm91cHMuIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1vdmUgdGhlIHNob3J0ZXIgb25lLlxyXG5cdFx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgPT09IHByZXZHcm91cC5maXJzdEROICYmIGdyb3VwLmNvdW50ID4gcHJldkdyb3VwLmNvdW50KVxyXG5cdFx0XHRcdFx0bW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggcGFyZW50Vk4sIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwOiBWTkRpc3BHcm91cCwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIHN1Yk5vZGVWTik7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdHtcclxuXHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggc3ViTm9kZVZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtzY2hlZHVsZUZ1bmNDYWxsfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2NoZWR1bGVyIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBzY2hlZHVsaW5nIHdyaXRpbmcgc3R5bGUtcmVsYXRlZCBpbmZvcm1hdGlubyB0b1xyXG4gKiB0aGUgRE9NIHVzaW5nIHRoZSBNaW1ibCBzY2hlZHVsaW5nIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcbmNsYXNzIFN0eWxlU2NoZWR1bGVyIGltcGxlbWVudHMgY3NzLklTY2hlZHVsZXJcclxue1xyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRvRE9NVXBkYXRlID0gZG9ET01VcGRhdGU7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGl0cyBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzY2hlZHVsZURPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCB0aGlzLm9uVXBkYXRlLCBmYWxzZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSB0aW1lb3V0IGV4cGlyZXMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvblVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZXMgc3R5bGUgc2NoZWR1bGVyIHVzZWQgYnkgTWltYmwgdG8gc2NoZWR1bGUgd3JpdGluZyBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU1pbWJsU3R5bGVTY2hlZHVsZXIoKTogbnVtYmVyXHJcbntcclxuICAgIGxldCBzY2hlZHVsZXJUeXBlID0gY3NzLnJlZ2lzdGVyU2NoZWR1bGVyKCBuZXcgU3R5bGVTY2hlZHVsZXIoKSk7XHJcbiAgICBjc3Muc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSVRleHRWTlxyXG57XHJcblx0Ly8gVGV4dCBmb3IgYSBzaW1wbGUgdGV4dCBub2RlLlxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRwdWJsaWMgdGV4dE5vZGU6IFRleHQ7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRleHQ6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIHRleHQgbm9kZXMgZG9uJ3QgaGF2ZSBzdWItbm9kZXNcclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggdGhpcy50ZXh0ICE9PSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUubm9kZVZhbHVlID0gdGhpcy50ZXh0ID0gKG5ld1ZOIGFzIFRleHRWTikudGV4dDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIG1pbS5JVk5vZGVcclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRyZWFkb25seSBzdGF0c0NhdGVnb3J5OiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0LyoqIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLiAqL1xyXG5cdGRlcHRoPzogbnVtYmVyO1xyXG5cclxuXHQvKiogRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuICovXHJcblx0YW5jaG9yRE4/OiBETjtcclxuXHJcblx0LyoqXHJcblx0ICogTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleSBjYW4gYmUgb2ZcclxuXHQgKiBhbnkgdHlwZS5cclxuXHQgKi9cclxuXHRrZXk/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHJlbmRlck9uVXBkYXRlPzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHBhcmVudD86IFZOO1xyXG5cclxuXHQvLyBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBhcyBwYXJ0IG9mIGl0cyByZW5kZXJpbmcgdHJlZS5cclxuXHRjcmVhdG9yPzogbWltLklDb21wb25lbnQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdG5leHQ/OiBWTjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwcmV2PzogVk47XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlcz86IFZOW107XHJcblxyXG5cdC8vIE1hcCBvZiBrZXllZCBzdWItbm9kZXMgLSBkZWZpbmVkIG9ubHkgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgZ3JlYXRlciB0aGFuIDEuXHJcblx0a2V5ZWRTdWJOb2Rlcz86IE1hcDxhbnksVk4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBtaW0uVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0b3duRE4/OiBETjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0bGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRpbml0KCBwYXJlbnQ6IFZOLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHRlcm0oKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vXHJcblx0Ly8gTGlmZSBjeWNsZSBtZXRob2RzXHJcblx0Ly9cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhhdCBtZWFucyB0aGUgbm9kZVxyXG5cdC8vIG5ldmVyIGhhcyBjaGlsZHJlbiAtIGZvciBleGFtcGxlIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlbmRlcj8oKTogYW55O1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0ZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZCBvbmx5IG9uIG5vZGVzXHJcblx0Ly8gdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IHJlbGVhc2UgdGhlIGludGVybmFsbHkgaGVsZCByZWZlcmVuY2VcclxuXHQvLyB0byB0aGUgRE9NIG5vZGUgLSB0aGUgYWN0dWFsIHJlbW92YWwgb2YgdGhlIG5vZGUgZnJvbSBET00gaXMgZG9uZSBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBJZiB0aGlzIG1ldGhvZCBpc1xyXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCB0aGUgdXBkYXRlIGlzIGNvbnNpZGVyZWQgcG9zc2libGUgLSBlLmcuIGZvciB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRpc1VwZGF0ZVBvc3NpYmxlPyggbmV3Vk46IFZOKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRjb21taXRVcGRhdGU/KCBuZXdWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCB0aGUgbm9kZVxyXG5cdC8vIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0c3VwcG9ydHNFcnJvckhhbmRsaW5nPygpOiBib29sZWFuO1xyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gVGhlIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcyBtZXRob2QgcmV0dXJucy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aGFuZGxlRXJyb3I/KCB2bkVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlVwZGF0ZURpc3AgdHlwZSBkZXNjcmliZXMgd2hldGhlciBjZXJ0YWluIGFjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG4vLyBkdXJpbmcgdXBkYXRlLiBUaGlzIG9iamVjdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBub2RlJ3MgcHJlcGFyZVVwZGF0ZSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVk5VcGRhdGVEaXNwXHJcbntcclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBub2RlIGhhcyBjaGFuZ2VzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIERPTSB0cmVlLiBJZiB0aGlzXHJcblx0Ly8gZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHdpbGwgYmUgY2xsZWQgb24gdGhlIG5vZGUgZHVyaW5nIHRoZSBDb21taXRcclxuXHQvLyBwaGFzZS5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkQ29tbWl0OiBib29sZWFuO1xyXG5cclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBzdWItbm9kZXMgc2hvdWxkIGJlIHVwZGF0ZWQuIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZVxyXG5cdC8vIG5vZGUncyByZW5kZXIgbWV0aG9kIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRSZW5kZXI6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnNob3VsZENvbW1pdCA9IHNob3VsZENvbW1pdDtcclxuXHRcdHRoaXMuc2hvdWxkUmVuZGVyID0gc2hvdWxkUmVuZGVyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgZmFsc2UpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN0b2NrVmFsdWUoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHJldHVybiBzaG91bGRDb21taXRcclxuXHRcdFx0PyBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuRG9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdE5vUmVuZGVyXHJcblx0XHRcdDogc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuTm9Db21taXROb1JlbmRlcjtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGZpcnN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0Rmlyc3RETiggc3ZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgaSA9IHZuLnN1Yk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1tpXSk7XHJcblx0XHRpZiAoZG4gIT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGlzdCBvZiBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlOyB0aGF0IGlzLFxyXG4vLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlLiBOZXZlciByZXR1cm5zIG51bGwuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbW1lZGlhdGVETnMoIHZuOiBWTik6IEROW11cclxue1xyXG5cdGxldCBhcnI6IEROW10gPSBbXTtcclxuXHRjb2xsZWN0SW1tZWRpYXRlRE5zKCB2biwgYXJyKTtcclxuXHRyZXR1cm4gYXJyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbGxlY3RzIGFsbCBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlICh0aGF0IGlzLFxyXG4vLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlKSBpbnRvIHRoZSBnaXZlbiBhcnJheS5cclxuZnVuY3Rpb24gY29sbGVjdEltbWVkaWF0ZUROcyggdm46IFZOLCBhcnI6IEROW10pOiB2b2lkXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRhcnIucHVzaCggdm4ub3duRE4pO1xyXG5cdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3RcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y29sbGVjdEltbWVkaWF0ZUROcyggc3ZuLCBhcnIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBGaW5kcyB0aGUgZmlyc3QgRE9NIG5vZGUgaW4gdGhlIHRyZWUgb2YgdmlydHVhbCBub2RlcyB0aGF0IGNvbWVzIGFmdGVyIG91ciBub2RlIHRoYXQgaXMgYVxyXG4vLyBjaGlsZCBvZiBvdXIgb3duIGFuY2hvciBlbGVtZW50LiBXZSB1c2UgaXQgYXMgYSBub2RlIGJlZm9yZSB3aGljaCB0byBpbnNlcnQvbW92ZSBub2RlcyBvZlxyXG4vLyBvdXIgc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy4gVGhlIGFsZ29yaXRobSBmaXJzdCBnb2VzIHRvIHRoZSBuZXh0XHJcbi8vIHNpYmxpbmdzIG9mIG91ciBub2RlIGFuZCB0aGVuIHRvIHRoZSBuZXh0IHNpYmxpbmdzIG9mIG91ciBwYXJlbnQgbm9kZSByZWN1cnNpdmVseS4gSXQgc3RvcHNcclxuLy8gd2hlbiB3ZSBlaXRoZXIgZmluZCBhIERPTSBub2RlICh0aGVuIGl0IGlzIHJldHVybmVkKSBvciBmaW5kIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50XHJcbi8vICh0aGVuIG51bGwgaXMgcmV0dXJuZWQpLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzIGZvciBvdXJcclxuLy8gc3ViLW5vZGVzIHN0YXJ0cyBhbmQsIHRoZXJlZm9yZSwgaXQgb25seSB0cmF2ZXJzZXMgbW91bnRlZCBub2Rlcy5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bjogVk4sIGFuY2hvckROOiBETik6IEROXHJcbntcclxuXHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0aWYgKHZuLnN1Yk5vZGVzICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1t2bi5zdWJOb2Rlcy5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAoZG4pXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0Zm9yKCBsZXQgbnZuID0gdm4ubmV4dDsgbnZuICE9PSB1bmRlZmluZWQ7IG52biA9IG52bi5uZXh0KVxyXG5cdHtcclxuXHRcdGlmICghbnZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHQvLyBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRjb25zdCBkbiA9IGdldExhc3RETiggbnZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdHJldHVybiB2bi5wYXJlbnQgJiYgdm4ucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETiA/IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bi5wYXJlbnQsIGFuY2hvckROKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWTlBhdGgoIHZuOiBWTik6IHN0cmluZ1tdXHJcbntcclxuXHRsZXQgZGVwdGggPSB2bi5kZXB0aDtcclxuXHRsZXQgcGF0aCA9IEFycmF5PHN0cmluZz4oIGRlcHRoKTtcclxuXHRmb3IoIGxldCBpID0gMCwgbnZuOiBWTiA9IHZuOyBpIDwgZGVwdGg7IGkrKywgbnZuID0gbnZuLnBhcmVudClcclxuXHR7XHJcblx0XHRwYXRoW2ldID0gbnZuLm5hbWUgKyAobnZuLmNyZWF0b3IgJiYgbnZuLmNyZWF0b3Iudm4gPyBgIChjcmVhdGVkIGJ5ICR7bnZuLmNyZWF0b3Iudm4ubmFtZX0pYCA6IFwiXCIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHBhdGg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgRE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtyZXF1ZXN0Tm9kZVVwZGF0ZSwgc2NoZWR1bGVGdW5jQ2FsbCwgd3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5pbXBvcnQge25vdGlmeVNlcnZpY2VQdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVN1YnNjcmliZWQsIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWR9IGZyb20gXCIuL1B1YlN1YlwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTkJhc2UgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWTkJhc2UgaW1wbGVtZW50cyBWTlxyXG57XHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBhYnN0cmFjdCBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCBuYW1lKCk6IHN0cmluZztcclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIHR5cGU6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOQmFzZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHB1YmxpYyBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBuZXh0OiBWTkJhc2U7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHVibGljIHByZXY6IFZOQmFzZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMgLSBib3RoIGtleWVkIGFuZCB1bmtleWVkIC0gZGVmaW5lZCBvbmx5IGlmIHRoZXJlIGFyZSBzb21lIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXM6IFZOQmFzZVtdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdHB1YmxpYyBrZXllZFN1Yk5vZGVzOiBNYXA8YW55LFZOQmFzZT47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRwdWJsaWMgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5rZXllZFN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5kZXB0aCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBtb3VudGVkICovXHJcblx0cHVibGljIGdldCBpc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYW5jaG9yRE47IH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHR7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBmYWxzZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogbWltLlJlZlByb3BUeXBlLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXJ2aWNlIG9iamVjdHMgcHVibGlzaGVkIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHB1Ymxpc2hlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLGFueT47XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBvYmplY3RzIGNvbnN0aXR1dGluZyBzdWJzY3JpcHRpb25zIG1hZGUgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgc3Vic2NyaWJlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIERlZmF1bHQgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB1c2VkIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHB1Ymxpc2hlcyB0aGVcclxuXHQvLyBzZXJ2aWNlXHJcblx0ZGVmYXVsdFNlcnZpY2U6IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBub2RlIGNhbiBzdWJzY3JpYmUgdG8gYSBzZXJ2aWNlIHRoYXQgaXQgaW1wbGVtZW50cyBpdHNlbGYuIFRoaXNcclxuXHQvLyBpcyB1c2VmdWwgaW4gY2FzZSB3aGVyZSBhIHNlcnZpY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhIGNvbXBvbmVudCBjYW4gY2hhaW4gdG8gYSBzZXJ2aWNlXHJcblx0Ly8gaW1wbGVtZW50ZWQgYnkgYW4gYW5jZXN0b3IgY29tcG9uZW50LlxyXG5cdHVzZVNlbGY6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcCwgZ2V0Rmlyc3RETiwgZ2V0TGFzdEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZORGlzcEFjdGlvblxyXG57XHJcblx0LyoqXHJcblx0ICogRWl0aGVyIGl0IGlzIG5vdCB5ZXQga25vd24gd2hhdCB0byBkbyB3aXRoIHRoZSBub2RlIGl0c2VsZiBvciB0aGlzIGlzIGEgc3RlbSBub2RlOyB0aGF0IGlzLFxyXG5cdCAqIG9ubHkgdGhlIG5vZGUncyBjaGlsZHJlbiBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC4gVGhpcyBtZWFucyB0aGF0IGVpdGhlciB0aGVyZSB3YXMgbm8gY291bnRlcnBhcnQgb2xkIG5vZGVcclxuXHQgKiBmb3VuZCBvciB0aGUgZm91bmQgbm9kZSBjYW5ub3QgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBvbmUgbm9yIGNhbiB0aGUgb2xkIG5vZGUgYmUgcmV1c2VkXHJcblx0ICogYnkgdGhlIG5ldyBvbmUgKGUuZy4gdGhleSBhcmUgb2YgZGlmZmVyZW50IHR5cGUpLlxyXG5cdCAqL1xyXG5cdEluc2VydCA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBub2RlLiBUaGlzIHZhbHVlIGlzIGFsc28gdXNlZCBmb3IgSW5zdGFuY2VWTlxyXG5cdCAqIG5vZGVzIGlmIHRoZSBvbGQgYW5kIHRoZSBuZXcgYXJlIHRoZSBzYW1lIG5vZGUuXHJcblx0ICovXHJcblx0VXBkYXRlID0gMixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZORGlzcEdyb3VwIGNsYXNzIGRlc2NyaWJlcyBhIGdyb3VwIG9mIGNvbnNlY3V0aXZlIFZORGlzcCBvYmplY3RzIGNvcnJlc3Bwb25kaW5nIHRvIHRoZVxyXG4gKiBzZXF1ZW5jZSBvZiBzdWItbm9kZXMuIFRoZSBncm91cCBpcyBkZXNjcmliZWQgdXNpbmcgaW5kaWNlcyBvZiBWTkRpc3Agb2JqZWN0cyBpbiB0aGVcclxuICogc3ViTm9kZURpc3AgZmllbGQgb2YgdGhlIHBhcmVudCBWTkRpc3Agb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZORGlzcEdyb3VwXHJcbntcclxuXHQvKiogcGFyZW50IFZORGlzcCB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MgKi9cclxuXHRwdWJsaWMgcGFyZW50RGlzcDogVk5EaXNwO1xyXG5cdFxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlcyBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBJbmRleCBvZiB0aGUgZmlyc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBmaXJzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGxhc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBsYXN0OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGdyb3VwLiAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdCAtIHRoaXMuZmlyc3QgKyAxIH07XHJcblxyXG5cdC8qKiBGaXJzdCBET00gbm9kZSBpbiB0aGUgZ3JvdXAgLSB3aWxsIGJlIGtub3duIGFmdGVyIHRoZSBub2RlcyBhcmUgcGh5c2ljYWxseSB1cGRhdGVkICovXHJcblx0cHVibGljIGZpcnN0RE46IEROO1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBsYXN0RE46IEROO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwYXJlbnREaXNwOiBWTkRpc3AsIGFjdGlvbjogVk5EaXNwQWN0aW9uLCBmaXJzdDogbnVtYmVyLCBsYXN0PzogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50RGlzcCA9IHBhcmVudERpc3A7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMuZmlyc3QgPSBmaXJzdDtcclxuXHRcdHRoaXMubGFzdCA9IGxhc3Q7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgZmlyc3QgYW5kIGxhc3QgRE9NIG5vZGVzIGZvciB0aGUgZ3JvdXAuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBhZnRlciB0aGVcclxuXHQgKiBub2RlcyB3ZXJlIHBoaXNpY2FsbHkgdXBkYXRlZC9pbnNlcnRlZCBhbmQgd2UgY2FuIG9idGFpbiB0aGVpciBET00gbm9kZXMuXHJcblx0ICovXHJcblx0cHVibGljIGRldGVybWluZUROcygpXHJcblx0e1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGxldCB2bjogVk47XHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdDsgaSA8PSB0aGlzLmxhc3Q7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5maXJzdEROID0gZ2V0Rmlyc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5maXJzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3Q7IGkgPj0gdGhpcy5maXJzdDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0dm4gPSB0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IGRpc3Aub2xkVk4gOiBkaXNwLm5ld1ZOO1xyXG5cdFx0XHR0aGlzLmxhc3RETiA9IGdldExhc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5sYXN0RE4pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJZiBhIG5vZGUgaGFzIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBzdWItbm9kZXMsIHRoZW4gd2UgYnVpbGQgZ3JvdXBzLiBUaGUgaWRlYSBpcyB0aGF0XHJcbiAqIG90aGVyd2lzZSwgdGhlIG92ZXJoZWFkIG9mIGJ1aWxkaW5nIGdyb3VwcyBpcyBub3Qgd29ydGggaXQuXHJcbiAqL1xyXG5jb25zdCBOT19HUk9VUF9USFJFU0hPTEQgPSA4O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZORGlzcCBjbGFzcyBpcyBhIHJlY3Vyc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBkZXNjcmliZXMgYSBkaXNwb3NpdGlvbiBmb3IgYSBub2RlIGFuZCBpdHNcclxuICogc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3Bcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBuZXdWTjogVk4sIGFjdGlvbiA9IFZORGlzcEFjdGlvbi5Vbmtub3duLCBvbGRWTj86IFZOKVxyXG5cdHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdFx0dGhpcy5uZXdWTiA9IG5ld1ZOO1xyXG5cdFx0dGhpcy5vbGRWTiA9IG9sZFZOO1xyXG5cdH1cclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRwdWJsaWMgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBOZXcgdmlydHVhbCBub2RlIHRvIGluc2VydCBvciB0byB1cGRhdGUgYW4gb2xkIG5vZGUgKi9cclxuXHRwdWJsaWMgbmV3Vk46IFZOO1xyXG5cclxuXHQvKiogT2xkIHZpcnR1YWwgbm9kZSB0byBiZSB1cGRhdGVkLiBUaGlzIGlzIG9ubHkgdXNlZCBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uICovXHJcblx0cHVibGljIG9sZFZOOiBWTjtcclxuXHJcblx0LyoqIERpc3Bvc2l0aW9uIGZsYWdzIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gVGhpcyBpcyBub3QgdXNlZCBmb3IgdGhlIEluc2VydCBhY3Rpb25zLiAqL1xyXG5cdHB1YmxpYyB1cGRhdGVEaXNwOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFycmF5IG9mIGRpc3Bvc2l0aW9uIG9iamVjdHMgZm9yIHN1Yi1ub2Rlcy4gVGhpcyBpbmNsdWRlcyBub2RlcyB0byBiZSB1cGRhdGVkXHJcblx0ICogYW5kIHRvIGJlIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlRGlzcHM6IFZORGlzcFtdO1xyXG5cclxuXHQvKiogQXJyYXkgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZHVyaW5nIHVwZGF0ZSBvZiB0aGUgc3ViLW5vZGVzLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2Rlc1RvUmVtb3ZlOiBWTltdO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZ3JvdXBzIG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9yIGluc2VydGVkLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlR3JvdXBzOiBWTkRpc3BHcm91cFtdO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBhcmVzIG9sZCBhbmQgbmV3IGNoYWlucyBvZiBzdWItbm9kZXMgYW5kIGRldGVybWluZXMgd2hhdCBub2RlcyBzaG91bGQgYmUgY3JlYXRlZCwgZGVsZXRlZFxyXG5cdCAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuXHQgKiBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGRlbGV0ZWQuIEluIGFkZGl0aW9uLCB0aGUgbmV3IHN1Yi1ub2RlcyBhcmUgZGl2aWRlZFxyXG5cdCAqIGludG8gZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdCAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50XHJcblx0XHRsZXQgbmV3Q2hhaW4gPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHRoaXMub2xkVk4ucmVuZGVyKCkpO1xyXG5cdFx0bGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcblx0XHRsZXQgb2xkQ2hhaW4gPSB0aGlzLm9sZFZOLnN1Yk5vZGVzO1xyXG5cdFx0bGV0IG9sZExlbiA9IG9sZENoYWluID8gb2xkQ2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcblx0XHQvLyBpZiBlaXRoZXIgb2xkIG9yIG5ldyBvciBib3RoIGNoYWlucyBhcmUgZW1wdHksIHdlIGRvIHNwZWNpYWwgdGhpbmdzXHJcblx0XHRpZiAobmV3TGVuID09PSAwICYmIG9sZExlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gYm90aCBjaGFpbiBhcmUgZW1wdHkgLSBkbyBub3RoaW5nXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0xlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gb2xkQ2hhaW47XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZExlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBuZXdDaGFpbi5tYXAoIG5ld1ZOID0+IG5ldyBWTkRpc3AoIG5ld1ZOLCBWTkRpc3BBY3Rpb24uSW5zZXJ0KSk7XHJcblx0XHRcdGlmIChuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW25ldyBWTkRpc3BHcm91cCggdGhpcywgVk5EaXNwQWN0aW9uLkluc2VydCwgMCwgbmV3TGVuIC0gMSldO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHJlY3ljbGluZyBvZiBub24tbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2RlcyBieSBub24tbWF0Y2hpbmcgbmV3XHJcblx0XHQvLyBrZXllZCBzdWItbm9kZXMgaXMgYWxsb3dlZC4gSWYgdXBkYXRlIHN0cmF0ZWd5IGlzIG5vdCBkZWZpbmVkIGZvciB0aGUgbm9kZSwgdGhlXHJcblx0XHQvLyByZWN5Y2xpbmcgaXMgYWxsb3dlZC5cclxuXHRcdGxldCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHRydWU7XHJcblx0XHRsZXQgdXBkYXRlU3RyYXRlZ3kgPSB0aGlzLm9sZFZOID8gdGhpcy5vbGRWTi51cGRhdGVTdHJhdGVneSA6IHVuZGVmaW5lZDtcclxuXHRcdGlmICh1cGRhdGVTdHJhdGVneSAmJiB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuXHRcdC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuXHRcdC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcblx0XHRpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5ld1ZOID0gbmV3Q2hhaW5bMF07XHJcblx0XHRcdGxldCBvbGRWTiA9IG9sZENoYWluWzBdO1xyXG5cdFx0XHRsZXQgZGlzcCA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBbZGlzcF07XHJcblx0XHRcdGlmIChvbGRWTiA9PT0gbmV3Vk4gfHxcclxuXHRcdFx0XHQoKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nIHx8IG5ld1ZOLmtleSA9PT0gb2xkVk4ua2V5KSAmJiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IFtvbGRWTl07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZTsgdGhlcmVmb3JlLCB0aGUgbWFwIG9mXHJcblx0XHQvLyBrZXllZCBzdWItbm9kZXMgZXhpc3RzIChhbHRob3VnaCBpdCBtaWdodCBiZSBlbXB0eSkuXHJcblx0XHRsZXQgb2xkTWFwID0gdGhpcy5vbGRWTi5rZXllZFN1Yk5vZGVzO1xyXG5cdFx0bGV0IG9sZE1hcFNpemUgPSBvbGRNYXAgPyBvbGRNYXAuc2l6ZSA6IDA7XHJcblxyXG5cdFx0Ly8gcHJlcGFyZSBhcnJheXMgZm9yIFZORGlzcCBvYmplY3RzIGZvciBuZXcgbm9kZXMgYW5kIGZvciBvbGQgbm9kZXMgdG8gYmUgcmVtb3ZlZFxyXG5cdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBuZXcgQXJyYXkoIG5ld0xlbik7XHJcblx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcblx0XHQvLyBpZiB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBvbGQgbWFwIGlzIGVxdWFsIHRvIHRoZSB0b3RhbCBudW1iZXIgb2Ygb2xkIG5vZGVzLCB0aGF0XHJcblx0XHQvLyBtZWFucyB0aGF0IGFsbCBvbGQgbm9kZXMgYXJlIGtleWVkLiBJZiB0aGlzIGlzIHRoZSBjYXNlIEFORCByZWN5Y2xpbmcgb2Yga2V5ZWQgbm9kZXNcclxuXHRcdC8vIGlzIG5vdCBhbGxvd2VkLCB3ZSB3aWxsIG5vdCBuZWVkIHRvIHB1dCB1bmtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIGFzaWRlLlxyXG5cdFx0Ly8gV2Uga25vdyB0aGF0IHRoZXkgd2lsbCBoYXZlIHRvIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKG9sZE1hcFNpemUgPT09IG9sZExlbiAmJiAhYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdHRoaXMubWF0Y2hPbGRLZXllZE9ubHkoIG9sZE1hcCwgbmV3Q2hhaW4sIG5ld0xlbiwgbmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKTtcclxuXHRcdGVsc2UgaWYgKG9sZE1hcFNpemUgPT09IDAgJiYgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdHRoaXMubWF0Y2hPbGROb25LZXllZE9ubHkoIG9sZENoYWluLCBvbGRMZW4sIG5ld0NoYWluLCBuZXdMZW4sIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMubWF0Y2hPbGRNaXhlZCggb2xkQ2hhaW4sIG9sZExlbiwgb2xkTWFwLCBuZXdDaGFpbiwgbmV3TGVuLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZywgbmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IGFsbCBvbGQgbm9kZXMgaGF2ZSBrZXlzIGFuZCB0aGUgcmVjeWNsaW5nIG9mIGtleWVkXHJcblx0ICogbm9kZXMgaXMgTk9UIGFsbG93ZWQuIFRoZXJlZm9yZSwgd2hlbiB3ZSB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIHdlIGtub3cgdGhhdFxyXG5cdCAqIG5vbi1rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ldyBub2RlcyB3aWxsIGJlIG1hcmtlZCBmb3IgaW5zZXJ0aW9uLiBXZSBhbHNvIGNhbiBidWlsZFxyXG5cdCAqIGdyb3VwcyAoaWYgcmVxdWVzdGVkKSBpbiB0aGUgc2FtZSBsb29wLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGRLZXllZE9ubHkoIG9sZE1hcDogTWFwPGFueSxWTj4sIG5ld0NoYWluOiBWTltdLCBuZXdMZW46IG51bWJlciwgYnVpbGRHcm91cHM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZGVjbGFyZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgZm9sbG93aW5nIGNvZGVcclxuXHRcdGxldCBkaXNwOiBWTkRpc3AsIG9sZFZOOiBWTiwgbmV3Vk46IFZOLCBrZXk6IGFueSwgYWN0aW9uOiBWTkRpc3BBY3Rpb24sIGdyb3VwOiBWTkRpc3BHcm91cDtcclxuXHJcblx0XHQvLyBpZiB3ZSBuZWVkIHRvIGJ1aWxkIGdyb3VwcywgcHJlcGFyZSBhcnJheSBvZiBncm91cHNcclxuXHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYW5kXHJcblx0XHQvLyBtYXJrIHVua2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgZm9yIGluc2VydGlvbi4gT24gZWFjaCBpdGVyYXRpb24gZGVjaWRlXHJcblx0XHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cCBvciBwdXQgdGhlIG5ldyBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yXHJcblx0XHQvLyBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW4gYSBuZXcgb25lLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRrZXkgPSBuZXdWTi5rZXk7XHJcblxyXG5cdFx0XHQvLyBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSBuZXcgbm9kZVxyXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2xkVk4gPSBvbGRNYXAuZ2V0KCBrZXkpXHJcblx0XHRcdFx0aWYgKG9sZFZOID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgbWFwIC0gdGhpcyB3YXkgdGhlIG9sZCBub2RlcyByZW1haW5pbmcgaW4gdGhlXHJcblx0XHRcdFx0XHQvLyBtYXAgYXJlIHRob3NlIHRoYXQgYXJlIHVubWF0Y2hlZC5cclxuXHRcdFx0XHRcdG9sZE1hcC5kZWxldGUoIGtleSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkaXNwLmFjdGlvbiA9IGFjdGlvbjtcclxuXHJcblx0XHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghZ3JvdXApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gb3BlbiBhIG5ldyBncm91cFxyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleCBhbmQgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlXHJcblx0XHRcdFx0XHQvLyBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlIHRoYXQgc3RhcnRzIGEgbmV3IGdyb3VwIGJlY2F1c2UgZm9yIHN1Y2ggbm9kZVxyXG5cdFx0XHRcdFx0Ly8gZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gYW4gXCJ1cGRhdGVcIiBvciBcIm5vbmVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcblx0XHRcdFx0XHQvLyBpdHMgbmV4dCBzaWJsaW5nIGluIHRoZSBuZXcgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbmV4dCBzaWJsaW5nIGluIHRoZSBvbGQgbGlzdC5cclxuXHRcdFx0XHRcdC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRcdGlmIChpID4gMCAmJiB0aGlzLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBvbGRWTi5wcmV2KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXggYW5kIG9wZW4gbmV3IGdyb3VwLlxyXG5cdFx0XHRcdFx0XHRncm91cC5sYXN0ID0gaSAtIDE7XHJcblx0XHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdFx0Ly8gbmV4dCBub2RlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBjbG9zZSB0aGUgbGFzdCBncm91cCBpZiByZXF1ZXN0ZWQgdG8gYnVpbGQgZ3JvdXBzIChvbmx5IGluIHRoaXMgY2FzZSB3ZSBtYXkgaGF2ZSBhIGdyb3VwIG9iamVjdClcclxuXHRcdGlmIChncm91cClcclxuXHRcdFx0Z3JvdXAubGFzdCA9IG5ld0xlbiAtIDE7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0b2xkTWFwLmZvckVhY2goIG9sZFZOID0+IHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IG5vbmUgb2YgdGhlIG9sZCBub2RlcyBoYXZlIGtleXMgYW5kIHRoZSByZWN5Y2xpbmcgb2Yga2V5ZWRcclxuXHQgKiBub2RlcyBJUyBhbGxvd2VkLiBUaGVyZWZvcmUsIHdlIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYnkgaW5kZXguIFdlIGFsc28gY2FuIGJ1aWxkXHJcblx0ICogZ3JvdXBzIChpZiByZXF1ZXN0ZWQpIGluIHRoZSBzYW1lIGxvb3AuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtYXRjaE9sZE5vbktleWVkT25seSggb2xkQ2hhaW46IFZOW10sIG9sZExlbjogbnVtYmVyLCBuZXdDaGFpbjogVk5bXSwgbmV3TGVuOiBudW1iZXIsIGJ1aWxkR3JvdXBzOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnk7XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIGFuZCB0cnkgdG8gbWF0Y2ggbmV3IGFuZCBvbGQgbm9kZXMgYnlcclxuXHRcdC8vIGluZGV4LlxyXG5cdFx0bGV0IGkgPSAwO1xyXG5cdFx0Zm9yKCA7IGkgPCBuZXdMZW4gJiYgaSA8IG9sZExlbjsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdWTiA9IG5ld0NoYWluW2ldO1xyXG5cdFx0XHRkaXNwID0gdGhpcy5zdWJOb2RlRGlzcHNbaV0gPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5baV07XHJcblxyXG5cdFx0XHQvLyBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSBuZXcgbm9kZVxyXG5cdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1haW5pbmcgbmV3IG5vZGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGk7IGogPCBuZXdMZW47IGorKylcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHNbal0gPSBuZXcgVk5EaXNwKCBuZXdDaGFpbltqXSwgVk5EaXNwQWN0aW9uLkluc2VydCk7XHJcblxyXG5cdFx0Ly8gcmVtYWluaW5nIG9sZCBub2RlcyBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGk7IGogPCBvbGRMZW47IGorKylcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZENoYWluW2pdKTtcclxuXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB3ZSBrbm93IHRoYXQgbm90IGFsbCBvbGQgbm9kZXMgaGF2ZSBrZXlzIG9yIHRoZSByZWN5Y2xpbmcgb2ZcclxuXHQgKiBrZXllZCBub2RlcyBpcyBhbGxvd2VkLiBUaGVyZWZvcmUsIHdoZW4gd2UgaGF2ZSBhIG5vbi1rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ld1xyXG5cdCAqIG5vZGUsIHdlIGZpcnN0IHB1dCBpdCBhc2lkZSBhbmQgb25seSBhZnRlciB3ZSB3ZW50IG92ZXIgYWxsIG5ldyBub2RlcyB3ZSBjYW4gZGVjaWRlXHJcblx0ICogd2hhdCB0byBkbyB3aXRoIHRob3NlIHRoYXQgd2UgcHV0IGFzaWRlLiBBbHNvLCBvbmx5IGFmdGVyIHdlIHdlbnQgb3ZlciBhbGwgbmV3IG5vZGVzIHdlXHJcblx0ICogY2FuIGJ1aWxkIGdyb3VwcyBpZiByZXF1ZXN0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtYXRjaE9sZE1peGVkKCBvbGRDaGFpbjogVk5bXSwgb2xkTGVuOiBudW1iZXIsIG9sZE1hcDogTWFwPGFueSxWTj4sIG5ld0NoYWluOiBWTltdLFxyXG5cdFx0XHRcdFx0bmV3TGVuOiBudW1iZXIsIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nOiBib29sZWFuLCBidWlsZEdyb3VwczogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnk7XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYW5kXHJcblx0XHQvLyBwdXQgdW5tYXRjaGVkIG5ldyBub2RlcyBhc2lkZVxyXG5cdFx0bGV0IG5ld1VubWF0Y2hlZERpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRrZXkgPSBuZXdWTi5rZXk7XHJcblxyXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBwdXQgdGhlIHVua2V5ZWQgbmV3IG5vZGUgYXNpZGVcclxuXHRcdFx0XHRuZXdVbm1hdGNoZWREaXNwcy5wdXNoKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvbGRWTiA9IG9sZE1hcC5nZXQoIGtleSlcclxuXHRcdFx0XHRpZiAob2xkVk4gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiByZWN5Y2xpbmcgYWxsb3dlZCB3ZSBwdXQgdW5tYXRjaGVkIG5vZGUgYXNpZGU7IG90aGVyd2lzZSwgd2UgaW5kaWNhdGUgdGhhdFxyXG5cdFx0XHRcdFx0Ly8gaXQgc2hvdWxkIGJlIGluc2VydGVkXHJcblx0XHRcdFx0XHRpZiAoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdFx0XHRcdG5ld1VubWF0Y2hlZERpc3BzLnB1c2goIGRpc3ApO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIG1hcCAtIHRoaXMgd2F5IHRoZSBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoZVxyXG5cdFx0XHRcdFx0Ly8gbWFwIGFyZSB0aG9zZSB0aGF0IGFyZSB1bm1hdGNoZWQuXHJcblx0XHRcdFx0XHRvbGRNYXAuZGVsZXRlKCBrZXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBvbGQgc3ViLW5vZGVzLCBza2lwIGFscmVhZHkgbWF0Y2hlZCBvbmVzIGFuZCB0cnkgdG8gbWF0Y2ggb3RoZXJzIHRvIHRoZVxyXG5cdFx0Ly8geWV0LXVubWF0Y2hlZCBuZXcgbm9kZXMuIFVubWF0Y2hlZCBvbGQgbm9kZXMgYXJlIHRob3NlIHRoYXQgYXJlIGVpdGhlciB1bmtleWVkIG9yXHJcblx0XHQvLyB0aGUga2V5ZWQgb25lcyB0aGF0IGFyZSBzdGlsbCBpbiB0aGUgb2xkTWFwLlxyXG5cdFx0bGV0IGlPbGQgPSAwLCBpTmV3ID0gMCwgbmV3VW5tYXRjaGVkTGVuID0gbmV3VW5tYXRjaGVkRGlzcHMubGVuZ3RoO1xyXG5cdFx0d2hpbGUoIGlPbGQgPCBvbGRMZW4gJiYgaU5ldyA8IG5ld1VubWF0Y2hlZExlbilcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IG1hdGNoZWQga2V5ZWQgbm9kZXNcclxuXHRcdFx0b2xkVk4gPSBvbGRDaGFpbltpT2xkKytdO1xyXG5cdFx0XHRpZiAob2xkVk4ua2V5ICE9PSB1bmRlZmluZWQgJiYgIW9sZE1hcC5oYXMoIG9sZFZOLmtleSkpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRkaXNwID0gbmV3VW5tYXRjaGVkRGlzcHNbaU5ldysrXTtcclxuXHRcdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVjeWNsaW5nIGlzIG5vdCBhbGxvd2VkIGFuZCBlaXRoZXIgb2xkIG9yIG5ldyBub2RlcyBpcyBrZXllZCwgaW5zZXJ0IG5ldyBhbmQgcmVtb3ZlIG9sZFxyXG5cdFx0XHRpZiAoIWFsbG93S2V5ZWROb2RlUmVjeWNsaW5nICYmIChvbGRWTi5rZXkgIT09IHVuZGVmaW5lZCB8fCBuZXdWTi5rZXkgIT09IHVuZGVmaW5lZCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBuZXcgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuXHRcdGZvciggbGV0IGogPSBpTmV3OyBqIDwgbmV3VW5tYXRjaGVkTGVuOyBqKyspXHJcblx0XHRcdG5ld1VubWF0Y2hlZERpc3BzW2pdLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGlPbGQ7IGogPCBvbGRMZW47IGorKylcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IG1hdGNoZWQga2V5ZWQgbm9kZXNcclxuXHRcdFx0b2xkVk4gPSBvbGRDaGFpbltqXTtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSAhPT0gdW5kZWZpbmVkICYmICFvbGRNYXAuaGFzKCBvbGRWTi5rZXkpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZyb20gYSBmbGF0IGxpc3Qgb2YgbmV3IHN1Yi1ub2RlcyBidWlsZHMgZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGVpdGhlclxyXG5cdCAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBidWlsZFN1Yk5vZGVHcm91cHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgd2UgaGF2ZSBzb21lIG51bWJlciBvZiBzdWItbm9kZSBkaXNwb3NpdGlvbnNcclxuXHRcdGxldCBjb3VudCA9IHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aDtcclxuXHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcblx0XHRcdC8vIHRoZSBwcmUtZGV0ZXJtaW5lZCB0aHJlc2hvbGRcclxuXHRcdFx0aWYgKGNvdW50IDw9IE5PX0dST1VQX1RIUkVTSE9MRCB8fCBjb3VudCA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFycmF5IG9mIGdyb3VwcyBhbmQgY3JlYXRlIHRoZSBmaXJzdCBncm91cCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBub2RlXHJcblx0XHR0aGlzLnN1Yk5vZGVHcm91cHMgPSBbXTtcclxuXHRcdGxldCBncm91cDogVk5EaXNwR3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIHRoaXMuc3ViTm9kZURpc3BzWzBdLmFjdGlvbiwgMCk7XHJcblx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZSB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cFxyXG5cdFx0Ly8gb3IgcHV0IHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3IgY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuXHJcblx0XHQvLyBhIG5ldyBvbmUuXHJcblx0XHRsZXQgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblx0XHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gdGhpcy5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdGFjdGlvbiA9IGRpc3AuYWN0aW9uO1xyXG5cdFx0XHRpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXguIERlY3JlbWVudCB0aGUgaXRlcmF0aW5nIGluZGV4IHNvIHRoYXRcclxuXHRcdFx0XHQvLyB0aGUgbmV4dCBpdGVyYXRpb24gd2lsbCBvcGVuIGEgbmV3IGdyb3VwLiBOb3RlIHRoYXQgd2UgY2Fubm90IGJlIGhlcmUgZm9yIGEgbm9kZVxyXG5cdFx0XHRcdC8vIHRoYXQgc3RhcnRzIGEgbmV3IGdyb3VwIGJlY2F1c2UgZm9yIHN1Y2ggbm9kZSBkaXNwLmFjdGlvbiA9PT0gZ3JvdXBBY3Rpb24uXHJcblx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYW4gXCJ1cGRhdGVcIiBvciBcIm5vbmVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcblx0XHRcdFx0Ly8gaXRzIG5leHQgc2libGluZyBpbiB0aGUgbmV3IGxpc3QgaXMgZGlmZmVyZW50IGZyb20gdGhlIG5leHQgc2libGluZyBpbiB0aGUgb2xkIGxpc3QuXHJcblx0XHRcdFx0Ly8gVGhlIGxhc3Qgbm9kZSB3aWxsIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGFmdGVyIHRoZSBsb29wLlxyXG5cdFx0XHRcdGlmICh0aGlzLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBkaXNwLm9sZFZOLnByZXYpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXHJcblx0XHRcdFx0XHRncm91cC5sYXN0ID0gaSAtIDE7XHJcblx0XHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuXHRcdFx0Ly8gbmV4dCBub2RlXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xvc2UgdGhlIGxhc3QgZ3JvdXBcclxuXHRcdGlmIChncm91cCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRncm91cC5sYXN0ID0gY291bnQgLSAxO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVwZGF0ZSBvZiB0aGUgZ2l2ZW4gb2xkIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbmV3IG5vZGUgaXMgcG9zc2libGUuIFVwZGF0ZVxyXG4gKiBpcyBwb3NzaWJsZSBpZiB0aGUgdHlwZXMgb2Ygbm9kZXMgYXJlIHRoZSBzYW1lIGFuZCBlaXRoZXIgdGhlIGlzVXBkYXRlUG9zc2libGUgbWV0aG9kIGlzIG5vdFxyXG4gKiBkZWZpbmVkIG9uIHRoZSBvbGQgbm9kZSBvciBpdCByZXR1cm5zIHRydWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTjogVk4sIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG5cclxufVxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL21pbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSHRtbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdmdUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvTG9jYWxTdHlsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIjtcclxuLy8vICNlbmRpZlxyXG47IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgb2YgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcm9wVHlwZVxyXG57XHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0QXR0ciA9IDEsXHJcblxyXG5cdC8vIEV2ZW50IGxpc3RlbmVycyBzZXQgdXNpbmcgRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXHJcblx0RXZlbnQgPSAyLFxyXG5cclxuXHQvLyBDdXN0b20gYXR0cmlidXRlcyBmb3Igd2hpY2ggaGFuZGxlciBmYWN0b3JpZXMgYXJlIHJlZ2lzdGVyZWRcclxuXHRDdXN0b21BdHRyID0gMyxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBpbnRlcmZhY2UgZGVzY3JpYmluZyBpbmZvcm1hdGlvbiBrZXB0IGFib3V0IHByb3BlcnR5IHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHR0eXBlOiBQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2V0dGluZywgZGlmZmluZywgdXBkYXRpbmcgYW5kXHJcbi8vIHJlbW92aW5nIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUgYW5kIHByb3BWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHRzZXQ/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG5cdC8vIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHVwZGF0ZUZ1bmMgZnVuY3Rpb24uIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHZhbHVlIG9mIHRoZVxyXG5cdC8vIGF0dHJpYnV0ZSB3aWxsIG5vdCBjaGFuZ2UgKHRoYXQgbWVhbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgYXJlIGVxdWFsKS4gSWYgdGhpc1xyXG5cdC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYW5kIGNvbXBhcmVkIGFzIHN0cmluZ3MuXHJcblx0Ly8gSWYgdGhlc2Ugc3RyaW5ncyBhcmUgZGlmZmVyZW50LCB0aGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlICBuZXcgdmFsdWUgaXMgcmV0dXJuZWQuXHJcblx0ZGlmZj86IChhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIG9iamVjdCB0aGF0IHdhcyByZXR1cm5lZFxyXG5cdC8vIGZyb20gdGhlIGRpZmYgZnVuY3Rpb24uIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIHNldCBmdW5jdGlvbiBpcyB1c2VkLiBJZlxyXG5cdC8vIHRoZSBzZXQgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgZWl0aGVyLCB0aGUgRE9NIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXNcclxuXHQvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgdXBkYXRlVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0dXBkYXRlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0ucmVtb3ZlQXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lLlxyXG5cdHJlbW92ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlLiBUaGlzIGlzIHNvbWV0aW1lcyBuZWVkZWQgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNhbm5vdCBiZVxyXG5cdC8vIHVzZWQgYXMgcHJvcGVydHkgbmFtZSAtIGZvciBleGFtcGxlLCBpZiBhdHRyaWJ1dGUgbmFtZSBjb250YWlucyBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGluXHJcblx0Ly8gVHlwZVNjcmlwdCBpZGVudGlmaWVyIChlLmcuIGRhc2gpLlxyXG5cdGF0dHJOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBidWJibGVzLiBJZiB0aGUgZXZlbnQgZG9lc24ndCBidWJibGUsIHRoZSBldmVudCBoYW5kbGVyXHJcblx0Ly8gbXVzdCBiZSBzZXQgb24gdGhlIGVsZW1lbnQgaXRzZWxmOyBvdGhlcndpc2UsIHRoZSBldmVudCBoYW5kbGVyIGNhbiBiZSBzZXQgb24gdGhlIHJvb3RcclxuXHQvLyBhbmNob3IgZWxlbWVudCwgd2hpY2ggYWxsb3dzIGhhdmluZyBhIHNpbmdsZSBldmVudCBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yIG1hbnkgZWxlbWVudHMsXHJcblx0Ly8gd2hpY2ggaXMgbW9yZSBwZXJmb3JtYW50LlxyXG5cdGlzQnViYmxpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBDbGFzcyBvYmplY3QgdGhhdCBjcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuXHJcblx0aGFuZGxlckNsYXNzOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLiAqL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLlxyXG4gKiAgIC0gbnVsbCBhbmQgdW5kZWZpbmVkIGFyZSBjb252ZXJ0ZWQgdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gKiAgIC0gYXJyYXlzIGFyZSBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIHRoZSBlbGVtZW50cyBhbmQgc2VwYXJhdGluZ1xyXG4gKiAgICAgdGhlbSB3aXRoIHNwYWNlcy5cclxuICogICAtIGV2ZXJ5dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGUgdG9TdHJpbmcgbWV0aG9kLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHZhbFRvU3RyaW5nKCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKHZhbCA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0ZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiB2YWw7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHRcdHJldHVybiB2YWwubWFwKCBpdGVtID0+IHZhbFRvU3RyaW5nKGl0ZW0pKS5maWx0ZXIoIGl0ZW0gPT4gISFpdGVtKS5qb2luKFwiIFwiKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLiBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b21cclxuXHQvLyBhdHRyaWJ1dGVzIGlzIGFkZGVkIHRvIHRoaXMgb2JqZWN0IHdoZW4gdGhlIHJlZ2lzdGVyUHJvcGVydHkgbWV0aG9kIGlzIGNhbGxlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRzdHlsZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdHZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmVmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZVZhbHVlUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRjaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdENoZWNrZWQ6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRDaGVja2VkUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cclxuXHRcdC8vIGV2ZW50c1xyXG5cdFx0YWJvcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25pdGVyYXRpb246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhdXhjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ymx1cjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5dGhyb3VnaDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xvc2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvbnRleHRtZW51OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjdWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRibGNsaWNrOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdC8vZHJhZ2V4aXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ292ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJvcDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHVyYXRpb25jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVtcHRpZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVuZGVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Zm9jdXM6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGdvdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRpbnB1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW52YWxpZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5ZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5cHJlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRkYXRhOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRtZXRhZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb3N0cG9pbnRlcmNhcHR1cmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdG1vdXNlbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZW1vdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNldXA6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBhdXNlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5aW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmVudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3ZlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcnVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwcm9ncmVzczogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmF0ZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmVzZXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2l6ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Nyb2xsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVrZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlZWtpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlbGVjdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3RhbGxlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VibWl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzdXNwZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0aW1ldXBkYXRlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b2dnbGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2htb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9ucnVuOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHZvbHVtZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2FpdGluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2hlZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5lcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y29weTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXN0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBwcm9wVmFsKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBuZXdQcm9wVmFsKSk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHVwZGF0ZVZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIFN0eWxlc2V0IG9iamVjdCBmcm9tIHRoZSBNaW1jc3MgbGlicmFyeS4gSWYgdGhlIG9sZCBhbmQgbmV3IHN0eWxlIHByb3BlcnR5IHZhbHVlcyBhcmUgb2ZcclxuLy8gZGlmZmVyZW50IHR5cGVzIHRoZSBkaWZmIGZ1bmN0aW9uIHJldHVybnMgdGhlIG5ldyBzdHlsZSB2YWx1ZS4gSWYgYm90aCBhcmUgb2YgdGhlIHN0cmluZyB0eXBlLFxyXG4vLyB0aGVuIHRoZSBuZXcgc3RyaW5nIHZhbHVlIGlzIHJldHVybmVkLiBJZiBib3RoIGFyZSBvZiB0aGUgQ1NTU3R5bGVEZWNsYXJhdGlvbiB0eXBlLCB0aGVuIGFuXHJcbi8vIG9iamVjdCBpcyByZXR1cm5lZCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gc3R5bGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgY2hhbmdlZC4gRm9yIHVwZGF0ZWRcclxuLy8gaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgZnJvbSB0aGUgbmV3IHN0eWxlIHZhbHVlOyBmb3IgcmVtb3ZlZCBpdGVtcywgdGhlIGtleSB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogY3NzLlN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0Y3NzLnNldEVsZW1lbnRTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCBwcm9wVmFsKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlN0eWxlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogY3NzLlN0eWxlc2V0LCBuZXdQcm9wVmFsOiBjc3MuU3R5bGVzZXQpOiBhbnlcclxue1xyXG5cdGxldCByZXMgPSBjc3MuZGlmZlN0eWxlc2V0cyggb2xkUHJvcFZhbCwgbmV3UHJvcFZhbCk7XHJcblxyXG5cdC8vIHdlIGhhdmUgdG8gcmV0dXJuIHVuZGVmaW5lZCBiZWNhdXNlIG51bGwgaXMgY29uc2lkZXJlZCBhIHZhbGlkIHVwZGF0ZSB2YWx1ZVxyXG5cdHJldHVybiByZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJlcztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBjc3MuU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRjc3Muc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHVwZGF0ZVZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRhdHRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGV4dGVuZHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdCAqIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ICovXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8qKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFdmVudFNsb3QgY2xhc3MgZGVmaW5lcyBhbiBldmVudCB3aXRoIGN1c3RvbSBwYXJhbWV0ZXJzIGFzIG1lbWJlcnMgb2YgY2xhc3NlcyB3aXRob3V0IHRoZVxyXG4gKiBuZWVkIGZvciB0aGUgY2xhc3NlcyB0byBkZXJpdmUgZnJvbSBFdmVudFRhcmdldCBhbmQgdXNlIHN0cmluZyBuYW1lcyBmb3IgZXZlbnRzLiBNdWx0aXBsZVxyXG4gKiBsaXN0ZW5lcnMgY2FuIGJlIGFkZGVkL3JlbW92ZWQgdG8vZnJvbSBhbiBldmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj4gaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXI8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEludGVyZmFjZSBhbmQgY2xhc3MgZm9yIHNpbXBsZSBldmVudHMgYWNjZXB0aW5nIG5vIHBhcmFtZXRlcnMuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIElFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3QgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGUgVFxyXG4gKiBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3Q8KCkgPT4gdm9pZD47XHJcbiAqICAgICBjaGFuZ2U6IElFdmVudFNsb3QobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdDxUW1BdPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90T3duZXIgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGVcclxuICogVCBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90T3duZXI8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogSUV2ZW50U2xvdE93bmVyPCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90T3duZXIobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90T3duZXI8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgd2lsbCBoYXZlIGV2ZW50IHNsb3RzIGZvciBlYWNoIHByb3BlcnR5IG9mIHRoZSB0ZW1wbGF0ZSB0eXBlIFQuIFRoZVxyXG4gKiBjYWxsZXIgd2lsbCBiZSB0aGUgb3duZXIgb2YgdGhlIGV2ZW50IHNsb3RzOyB0aGF0IGlzLCBpdCB3aWxsIGJlIGFibGUgdG8gZmlyZSBldmVudHMgYW5kXHJcbiAqIGNsZWFyIGFsbCBsaXN0ZW5lcnMgd2hlbiBuZWNlc3NhcnkuIFRoaXMgYWxsb3dzIHRoZSBmb2xsb3dpbmcgY29kZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogXHJcbiAqIGludGVyZmFjZSBJTXlDbGFzc1xyXG4gKiB7XHJcbiAqICAgICBldmVudHM6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz47XHJcbiAqICAgICBkb1NvbWV0aGluZygpOiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBjbGFzcyBNeUNsYXNzIGltcGxlbWVudHMgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgcHJpdmF0ZSBfZXZlbnRzID0gY3JlYXRlTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPigpO1xyXG4gKiAgICAgcHVibGljIGdldCBldmVudHMoKTogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB7IHJldHVybiB0aGlzLl9ldmVudHM7IH1cclxuICogXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICogXHJcbiAqIGxldCBvYmo6IElNeUNsYXNzID0gbmV3IE15Q2xhc3MoKTtcclxuICogb2JqLmV2ZW50cy5jaGFuZ2UuYWRkKCAobjogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyhuKSk7XHJcbiAqIG9iai5kb1NvbWV0aGluZygpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4oKTogTXVsdGlFdmVudFNsb3RPd25lcjxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBQcm94eSgge30sIG5ldyBNdWx0aUV2ZW50U2xvdEhhbmRsZXIoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBwcm94eSBoYW5kbGVyIGZvciB0aGUgTXVsdGlFdmVudFNsb3Qgb2JqZWN0LiBUaGUgaGFuZGxlciBkb2Vzbid0IHVzZSBhbnlcclxuICogdGFyZ2V0IG9iamVjdCAtIGl0IHNpbXBseSBjcmVhdGVzIEV2ZW50U2xvdCBwcm9wZXJ0eSBpbiBpdHNlbGYgd2hlbmV2ZXIgdGhlIGdldCBtZXRob2QgaXNcclxuICogY2FsbGVkLiBUaGUgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tpbmcgZW5zdXJlcyB0aGF0IG9ubHkgcHJvcGVyIGV2ZW50IHNsb3QgbmFtZXMgY2FuIGJlIHVzZWQuXHJcbiAqL1xyXG5jbGFzcyBNdWx0aUV2ZW50U2xvdEhhbmRsZXJcclxue1xyXG5cdHB1YmxpYyBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBzdHJpbmcsIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiB0aGlzW3Byb3BdID0gbmV3IEV2ZW50U2xvdCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR2F0aGVyaW5nIHVwZGF0ZSBzdGF0aXN0aWNzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gQ2F0ZWdvcmllcyBvZiBjaGFuZ2VkIGVudGl0aWVzIHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LlxyXG5leHBvcnQgZW51bSBTdGF0c0NhdGVnb3J5XHJcbntcclxuXHRSb290LFxyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHRyaWdnZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIGluaXRpYWwgdmFsdWUuXHJcbiAqIEBwYXJhbSB2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJpZ2dlcjxUID0gYW55Piggdj86IFQpOiBJVHJpZ2dlcjxUPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFRyaWdnZXIodik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyIGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGNoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuY2xhc3MgVHJpZ2dlcjxUID0gYW55PiBpbXBsZW1lbnRzIElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnYgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgcHVibGljIGdldCgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgZ19tYW5hZ2VyLm5vdGlmeVRyaWdnZXJSZWFkKHRoaXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXRzIGEgbmV3IHZhbHVlXHJcbiAgICBwdWJsaWMgc2V0KHY6IFQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBkbyBpZiB0aGUgdmFsdWUgaXMgdGhlIHNhbWVcclxuICAgICAgICBpZiAodiA9PT0gdGhpcy52KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudiA9IHY7XHJcblxyXG4gICAgICAgIC8vIHdlIG9ubHkgbm90aWZ5IHRoZSBtYW5hZ2VyIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSB3YXRjaGVyIGF0dGFjaGVkIHRvIG91ciB0cmlnZ2VyO1xyXG4gICAgICAgIC8vIHRoZSB3YXRjaGVycyB0aGF0IHdvdWxkIGNvbm5lY3QgbGF0ZXIgd2lsbCBoYXZlIHRvIHJlYWQgdGhlIHRyaWdnZXIncyB2YWx1ZSBmaXJzdC5cclxuICAgICAgICBpZiAodGhpcy53YXRjaGVycy5zaXplID4gMClcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLm5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWx1ZSBiZWluZyBnZXQgYW5kIHNldFxyXG4gICAgcHJpdmF0ZSB2OiBUO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB3YXRjaGluZyBvdmVyIHRoaXMgdHJpZ2dlcidzIHZhbHVlLiBUaGlzIG1lbWJlciBzZXJ2ZXMgYXMgYSBzdG9yYWdlIGluc3RlYWRcclxuICAgIC8vIG9mIGhhdmluZyB0aGUgbWFuYWdlciB0byBtYXAgb2YgdHJpZ2dlcnMgdG8gdGhlIHNldCBvZiB3YXRjaGVycy5cclxuICAgIHB1YmxpYyB3YXRjaGVycyA9IG5ldyBTZXQ8V2F0Y2hlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2F0Y2hlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElXYXRjaGVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgb2JqZWN0IHRoYXQgd3JhcHMgYSBmdW5jdGlvbiBhbmQgaGFzIHRoZSBzYW1lXHJcbiAqIHNpZ25hdHVyZSBhcyB0aGlzIGZ1bmN0aW9uLiBXaGVuIGEgd2F0Y2hlciBpcyBjYWxsZWQgaXQgY2FscyB0aGUgd3JhcHBlZCBmdW5jdGlvbiBhbmQgYXR0YWNoZXNcclxuICogdG8gYWxsIHRyaWdnZXJzIHdob3NlIHZhbHVlcyB3ZXJlIHJlYWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNhbGwuIFdoZW4gdmFsdWVzIG9mIHRoZXNlXHJcbiAqIHRyaWdnZXJzIGNoYW5nZSwgYSByZXNwb25kZXIgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGUgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgaXMgY3JlYXRlZCwgYnV0IGl0IGNhbiBiZSBjaGFuZ2VkIGxhdGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT4gZXh0ZW5kcyBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIFRoaXMgaXMgYSBjYWxsYWJsZSBpbnRlcmZhY2UsIHdoaWNoIGlzIGltcGxlbWVudCBhcyBhIGZ1bmN0aW9uLiAqL1xyXG4gICAgKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pOiBSZXR1cm5UeXBlPFQ+O1xyXG5cclxuICAgIC8vIC8qKiBTZXRzIGEgcmVzcG9uZGVyIGZ1bmN0aW9uICovXHJcbiAgICAvLyBzZXRSZXNwb25kZXIoIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCByZXNwb25kZXJUaGlzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgd2F0Y2hlciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIHdhdGNoZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltV2F0Y2hlciA9IFN5bWJvbCggXCJzeW1XYXRjaGVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdhdGNoZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24uIFdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgZnVuY3Rpb24gaXMgaW52b2tlZCBpdCBpbnZva2VzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgaXQgbm90aWNlcyBhbGwgdHJpZ2dlciBvYmplY3RzXHJcbiAqIHRoYXQgd2VyZSByZWFkIGR1cmluZyBpdHMgZXhlY3V0aW9uLiBXaGVuIGFueSBvZiB0aGVzZSB0cmlnZ2VyIG9iamVjdHMgaGF2ZSB0aGVpciB2YWx1ZXNcclxuICogY2hhbmdlZCwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZC5cclxuICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgd2F0Y2hlZFxyXG4gKiBAcGFyYW0gcmVzcG9uZGVyIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB2YWx1ZXMgb2YgdGhlIHRyaWdnZXIgb2JqZWN0cyBlbmNvdW50ZXJlZCBkdXJpbmdcclxuICogdGhlIG9yaWdpbmFsIGZ1bmN0aW9uJ3MgbGFzdCBleGVjdXRpb24gY2hhbmdlLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSByZXNwb25kZXJUaGlzIE9wdGlvbmFsIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi5cclxuICogSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZSBcInRoaXNcIiB2YWx1ZSBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsXHJcbiAgICBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSk6IElXYXRjaGVyPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIHdhdGNoZXJGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXI6IFdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXIuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgd2F0Y2hlciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSA9IG5ldyBXYXRjaGVyKCBmdW5jLCByZXNwb25kZXIsIGZ1bmNUaGlzLCByZXNwb25kZXJUaGlzKTtcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgdGhlIGRpc3Bvc2UgbWV0aG9kXHJcbiAgICAod2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXIpLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSBhcyBXYXRjaGVyO1xyXG4gICAgICAgIHdhdGNoZXIgJiYgd2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gd2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBXYXRjaGVyIGNsYXNzIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkXHJcbiAqIGR1cmluZyBhIGZ1bmN0aW9uIGV4ZWN1dGlvbi4gV2hlbiB0aGUgdHJpZ2dlciBvYmplY3RzIGFyZSByZWFkLCB0aGV5IGFyZSByZW1lbWJlcmVkIGJ5IHRoZVxyXG4gKiBXYXRjaGVyIG9iamVjdC4gV2hlbmV2ZXIgYSB2YWx1ZSBpcyBjaGFuZ2VkIGluIGFueSBvZiB0aGVzZSB0cmlnZ2VycywgdGhlIHdhdGNoZXIgb2JqZWN0IGlzXHJcbiAqIG5vdGlmaWVkIGFuZCBjYWxscyB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gcmVzcG9uZGVyO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gaWYgcmVzcG9uZGVyIFwidGhpc1wiIGlzIG5vdCBkZWZpbmVkIHVzZSB0aGUgb25lIGZvciB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSByZXNwb25kZXJUaGlzID8gcmVzcG9uZGVyVGhpcyA6IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdoaWxlIHVwZGF0aW5nIHRoZSBzZXQgb2YgYXR0YWNoZWQgdHJpZ2dlcnMuIFRoZSBcImZ1bmNUaGlzXCJcclxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgXCJ0aGlzXCIgdW5kZXIgd2hpY2ggdGhlIGludGVybmFsIHdhdGNoZXIgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkLiBJdFxyXG4gICAgICogd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgXCJ0aGlzXCIgdG8gYXBwbHkgd2hlbiBpbnZva2luZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gaWYgaXQgd2Fzbid0XHJcbiAgICAgKiBzZXQgeWV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIHdhdGNoZXIgd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlclRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCBjdXJyZW50IHRyaWdnZXJzXHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG5cclxuICAgICAgICAvLyBpbnN0YWxsIG91ciB3YXRjaGVyIGF0IHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgZ19tYW5hZ2VyLnB1c2hXYXRjaGVyKCB0aGlzKVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvdXIgd2F0Y2hlciBmcm9tIHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5wb3BXYXRjaGVyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBhbGwgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXJUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgd2F0Y2hlciB0aGF0IGl0IHNob3VsZCBjYWxsIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uIFRoaXMgb2NjdXJzIHdoZW4gdGhlcmVcclxuICAgIC8vIGFyZSB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgIHB1YmxpYyByZXNwb25kKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWQuIEl0IGNhbiBoYXBwZW4gaWYgYWZ0ZXIgYWxsIG11dGF0aW9uXHJcbiAgICAgICAgLy8gc2NvcGVzIGV4aXRlZCB0aGUgbWFuYWdlciBub3RpZmllcyBtdWx0aXBsZSB3YXRjaGVycyBhbmQgb25lIG9mIHRoZSB3YXRjaGVycycgcmVzcG9uZGVyXHJcbiAgICAgICAgLy8gZGlzcG9zZXMgb2YgYW5vdGhlciB3YXRjaGVyLlxyXG4gICAgICAgIGlmICghdGhpcy5yZXNwb25kZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIuYXBwbHkoIHRoaXMucmVzcG9uZGVyVGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbnMgdGhlIHN0YXRlIG9mIHRoZSB3YXRjaGVyLCBzbyB0aGF0IGl0IGlzIGRldGFjaGVkIGZyb20gYW55IHRyaWdnZXJzIGFuZCBpcyByZW1vdmVkXHJcbiAgICAgKiBmcm9tIHRoZSBtYW5hZ2VyJ3Mgc2V0IG9mIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsZWFuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBkZXRhY2hlcyB0aGlzIHdhdGNoZXIgZnJvbSBhbGwgdGhlIHRyaWdnZXJzIGFuZCB0aGUgdHJpZ2dlcnMgZnJvbSB0aGlzIHdhdGNoZXIuXHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCB0cmlnZ2VyID0+IHRyaWdnZXIud2F0Y2hlcnMuZGVsZXRlKCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5jbGVhcigpO1xyXG5cclxuICAgICAgICAvLyBhc2sgdGhlIG1hbmFnZXIgdG8gZm9yZ2V0IGFib3V0IHRoaXMgd2F0Y2hlciBpZiBpdCBpcyBjdXJyZW50bHkgaW4gdGUgZGVmZXJyZWQgc2V0XHJcbiAgICAgICAgZ19tYW5hZ2VyLnJlbW92ZURlZmVycmVkV2F0Y2hlciggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gYmVpbmcgd2F0Y2hlZDsgdGhhdCBpcywgZHVyaW5nIHdoaWNoIHdlIHNob3VsZCBsaXN0ZW4gdG8gdHJpZ2dlcnMgYmVpbmcgcmVhZCwgc29cclxuICAgIC8vIHRoYXQgd2UgY2FuIHJlbWVtYmVyIHRoZW0gYW5kIGxhdGVyIHJlc3BvbmQgd2hlbiB0aGV5IG5vdGlmeSB0aGF0IHRoZWlyIHZhbHVlcyBoYXZlIGJlZW5cclxuICAgIC8vIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSB0aGUgdmFsdWUgb2Ygb25lIG9mIHRoZSB0cmlnZ2VycyBjaGFuZ2VzXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byByZXNwb25kZXIgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSByZXNwb25kZXJUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gU2V0IG9mIHRyaWdnZXJzIGN1cnJlbnRseSBiZWluZyB3YXRjaGVkIGJ5IHRoaXMgd2F0Y2hlci4gVGhpcyBtZW1lYmVyIGlzIHVzZWQgYnkgdGhlXHJcbiAgICAvLyBtYW5hZ2VyLiBJdCBpcyBlc3NlbnRpYWxseSBhIHN0b3JhZ2UsIHdoaWNoIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgbWFuYWdlciBoYXZpbmcgYVxyXG4gICAgLy8gbWFwIG9mIHdhdGNoZXJzIHRvIHRoZSBzZXRzIG9mIHRyaWdnZXJzLiBUaGUgcHVycG9zZSBvZiBrbm93aW5nIHdoYXQgdHJpZ2dlcnMgYXJlIHVzZWRcclxuICAgIC8vIGJ5IHdoYXQgd2F0Y2hlciBpcyB0byByZW1vdmUgdGhlIHdhdGNoZXIgZnJvbSBhbGwgdGhlc2UgdHJpZ2dlcnMgYmVmb3JlIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAgICBwdWJsaWMgdHJpZ2dlcnMgPSBuZXcgU2V0PFRyaWdnZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1hbmFnZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJXYXRjaGVyTWFuYWdlciBjbGFzcyBpcyBhIHNpbmdsZXRvbiBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGdsb2JhbCBmdW5jdGlvbmFsaXR5XHJcbiAqIG9mIHRoZSB0cmlnZ2VyLXdhdGNoZXIgbWVjaGFuaXNtLiBJdCBpbmNsdWRlcyBhIHN0YWNrIG9mIHdhdGNoZXIgb2JqZWN0cyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcbiAqIHRoZWlyIGZ1bmN0aW9ucyBhbmQgd2F0Y2hpbmcgZm9yIHRyaWdnZXIgb2JqZWN0cyB0byBiZSByZWFkLiBXaGVuIGEgdHJpZ2dlciBvYmplY3QgaXMgYmVpbmdcclxuICogcmVhZCAodGhhdCBpcyBpdHMgZ2V0KCkgbWV0aG9kIGlzIGNhbGxlZCksIGFsbCB0aGUgd2F0Y2hlcnMgaW4gdGhlIHN0YWNrIGFyZSBub3RpZmllZCwgYmVjYXVzZVxyXG4gKiB0aGV5IGFsbCBkZXBlbmQgb24gdGhlIHRyaWdnZXIgb2JqZWN0J3MgdmFsdWUgZm9yIHRoZWlyIGZ1bmN0aW9uYWxpdHkuXHJcbiAqIFxyXG4gKiBJdCBhbHNvIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudCBvZiBtdXRhdGlvbiBzY29wZXMgYW5kIGhhbmRsZXMgbm90aWZ5aW5nIHdhdGNoZXJzIG9mXHJcbiAqIG11dGF0aW9ucyBvbmx5IHdoZW4gdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgaGFzIGV4aXRlZC4gVGhlIHRyaWdnZXJzIGRvbid0IG5vdGlmeSB0aGUgd2F0Y2hlcnNcclxuICogZGlyZWN0bHk7IGluc3RlYWQsIHRoZXkgbm90aWZ5IHRoZSBtYW5hZ2VyLCB3aGljaCBhY2N1bXVsYXRlcyB0aGUgaW5mb3JtYXRpb24gYW5kIG5vdGlmaWVzIGFsbFxyXG4gKiB0aGUgd2F0Y2hlcnMgb25jZSBvdXQgb2YgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoZXMgdGhlIGdpdmVuIHdhdGNoZXIgb2JqZWN0IHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wdXNoKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGN1cnJlbnRseSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9wV2F0Y2hlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyU3RhY2sucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSB3YXRjaGVyIG9iamVjdCBmcm9tIHRoZSBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZURlZmVycmVkV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuZGVsZXRlKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbnRlck11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZ5IGFsbCBkZWZlcnJlZCB3YXRjaGVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQtLTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENvbXB1dGVkIHRyaWdnZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tcHV0ZWRUcmlnZ2VyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmFsdWUgdGhhdCBpcyBjYWxjdWxhdGVkIGJ5IGEgZnVuY3Rpb24uIFRoaXMgaXMgYVxyXG4gKiBjb21iaW5hdGlvbiBvZiBUcmlnZ2VyIGFuZCBXYXRjaGVyLiBJdCBpcyBhIHdhdGNoZXIgYmVjYXVzZSBpdCB3YXRjaGVzIG92ZXIgdGhlIGZ1bmN0aW9uIGFuZFxyXG4gKiBjYWxscyBpdCB3aGVuZXZlciBhbnkgdHJpZ2dlcnMgdGhpcyBmdW5jdGlvbiB1c2VzIGFyZSBjaGFuZ2VkLiBJdCBpcyBhIHRyaWdnZXIgYmVjYXVzZSBpdFxyXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyB2YWx1ZS5cclxuICogXHJcbiAqIFRoZSBpbXBvcnRhbnQgZmFjdCBhYm91dCBhIGNvbXB1dGVkIHRyaWdnZXIgaXMgdGhhdCBpdCBvbmx5IGludm9rZXMgdGhlIHdhdGNoZWQgZnVuY3Rpb25cclxuICogaWYgaXQncyB2YWx1ZSBpcyBiZWluZyB1c2VkIGJ5IGF0IGxlYXN0IG9uZSB3YXRjaGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcHV0ZWRUcmlnZ2VyPFQgPSBhbnk+IGV4dGVuZHMgSVRyaWdnZXI8VD4sIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogU3VzcGVuZCBjb21wdXRpbmcgbmV3IHZhbHVlcyBldmVuIGlmIHRoZSB0cmlnZ2VycyBiZWluZyB3YXRjaGVkIGNoYW5nZSB0aGVpciB2YWx1ZXMgKi9cclxuICAgIHN1c3BlbmQoKTogdm9pZDtcclxuXHJcbiAgICAvKiogUmVzdW1lcyBjb21wdXRpbmcgYnkgaW52b2tpbmcgdGhlIHdhdGNoZWQgZnVuY3Rpb24gY2FsbCBhbmQgcmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSAqL1xyXG4gICAgcmVzdW1lKCk6IFQ7XHJcblxyXG4gICAgLyoqIENhbGxzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIGFuZCByZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlICovXHJcbiAgICBjYWxsKCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBjb21wdXRlZCB0cmlnZ2VyIG9iamVjdCB3aG9zZSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBnaXZlbiBmdW5jdGlvbiBhbmQgd2l0aCBhblxyXG4gKiBvcHRpb25hbCBpbml0aWFsIHZhbHVlLlxyXG4gKiBAcGFyYW0gdlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiggZnVuYzogTm9uZVR5cGVGdW5jPFQ+LCBmdW5jVGhpcz86IGFueSwgdj86IFQpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcywgdik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55LCB2PzogVClcclxuICAgIHtcclxuICAgICAgICBzdXBlcih2KTtcclxuXHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIGZ1bmMsIHRoaXMucmVzcG9uZGVyLCBmdW5jVGhpcywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFN1c3BlbmQgY29tcHV0aW5nIG5ldyB2YWx1ZXMgZXZlbiBpZiB0aGUgdHJpZ2dlcnMgYmVpbmcgd2F0Y2hlZCBjaGFuZ2UgdGhlaXIgdmFsdWVzICovXHJcbiAgICBwdWJsaWMgc3VzcGVuZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGRpc3Bvc2VkIG9yIGFscmVhZHkgc3VzcGVuZGVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMgfHwgIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJlc3VtZXMgY29tcHV0aW5nIGJ5IGludm9raW5nIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIGNhbGwgYW5kIHJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgKi9cclxuICAgIHB1YmxpYyByZXN1bWUoKTogVFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBkaXNwb3NlZCBvciBub3Qgc3VzcGVuZGVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMgfHwgdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBlc3RhYmxpc2ggYSB3YXRjaGVyIGFuZCBjYWxsIGl0XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuZnVuYywgdGhpcy5yZXNwb25kZXIsIHRoaXMuZnVuY1RoaXMsIHRoaXMpO1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy5mdW5jV2F0Y2hlcigpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHJldHVybiB2YWx1ZSBhcyB0aGUgY3VycmVudCB2YWx1ZSBhbmQgcmV0dXJuIGl0XHJcbiAgICAgICAgdGhpcy5zZXQodik7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENhbGxzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIGFuZCByZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlICovXHJcbiAgICBwdWJsaWMgY2FsbCgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIG9iamVjdCBpcyBub3Qgc3VzcGVuZGVkLCB3ZSBjYWxsIHRoZSB3YXRjaGVyOyBvdGhlcndpc2Ugd2UgY2FsbCB0aGUgZnVuY3Rpb25cclxuICAgICAgICAvLyBkaXJlY3RseVxyXG4gICAgICAgIGxldCB2ID0gdGhpcy5mdW5jV2F0Y2hlciA/IHRoaXMuZnVuY1dhdGNoZXIoKSA6IHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcmV0dXJuIHZhbHVlIGFzIHRoZSBjdXJyZW50IHZhbHVlIGFuZCByZXR1cm4gaXRcclxuICAgICAgICB0aGlzLnNldCh2KTtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZ1bmNXYXRjaGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBvdXIgd2F0Y2hlciBpcyBub3RpZmllZCBvZiBjaGFuZ2VzIGluIGl0cyB0cmlnZ2VyIHZhbHVlcy4gV2VcclxuICAgICAqIHJlc3BvbmQgYnkgaW52b2tpbmcgdGhlIGZ1bmN0aW9uICh0aHJvdWdoIHRoZSB3YXRjaGVyKSBhbmQgc2V0dGluZyBpdHMgcmV0dXJuIHZhbHVlIGFzXHJcbiAgICAgKiBvdXIgbmV3IHZhbHVlLiBUaGlzIGNhbiB0cmlnZ2VyIGNoYW5nZXMgaW4gd2F0Y2hlcnMgdGhhdCBhcmUgdXNpbmcgb3VyIHZhbHVlLiBOb3RlIHRoYXRcclxuICAgICAqIHdlIG9ubHkgaW52b2tlIG91ciB3YXRjaGVyIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSB3YXRjaGVyIHRoYXQgd2F0Y2hlcyBvdXIgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzcG9uZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlciAmJiB0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHdlIHdpbGwgYmUgd2F0Y2hpbmdcclxuICAgIHByaXZhdGUgZnVuYzogTm9uZVR5cGVGdW5jPFQ+O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxuXHJcbiAgICAvLyBXYXRjaGVyIG92ZXIgb3VyIGZ1bmN0aW9uXHJcbiAgICBwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjxOb25lVHlwZUZ1bmM8VD4+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNdXRhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU11dGF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8ga2VlcCBhIG11dGF0b3Igb2JqZWN0IGF0dGFjaGVkIHRvIHRoZSBtdXRhdG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxubGV0IHN5bU11dGF0b3IgPSBTeW1ib2woIFwic3ltTXV0YXRvclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtdXRhdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiByZWd1bGFyIGZ1bmN0aW9uIHdoaWNoIGV4ZWN1dGVzXHJcbiAqIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLiBXYXRjaGVycyBmb3IgdHJpZ2dlcnMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkIGR1cmluZyBleGVjdXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhcmUgbm90IG5vdGlmaWVkIGltbWVkaWF0ZWx5LiBJbnN0ZWFkLCB0aGUgd2F0Y2hlcnNcclxuICogYXJlIFwiZGVmZXJyZWRcIiBhbmQgd2lsbCBiZSBub3RpZmllZCBvbmx5IG9uY2UgYWZ0ZXIgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgZXhpdHMuIFRoaXMgY2FuIGJlXHJcbiAqIHVzZWZ1bCBzaW5jZSB1c3VhbGx5IHdhdGNoZXJzIGRlcGVuZCBvbiBtYW55IHRyaWdnZXJzIGFuZCB3ZSBkb24ndCB3YW50IHRoZSB3YXRjaGVycyBiZWluZ1xyXG4gKiBub3RpZmllZCBtYW55IHRpbWUgYnV0IHJhdGhlciBvbmx5IG9uY2UgYWZ0ZXIgYWxsIHRoZSBjaGFuZ2VzIGhhdmUgYmVlbiBkb25lLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBhcm91bmQgd2hpY2ggdG8gZXN0YWJsaXNoIGEgbXV0YXRpb24gc2NvcGUuIElmIHRoaXMgaXMgYSBjbGFzcyBtZXRob2QsXHJcbiAqIHRoZW4gZWl0aGVyIHByb3ZpZGUgdGhlIGZ1bmNUaGlzIHBhcmFtZXRlciBvciBiaW5kIHRoZSBmdW5jdGlvbiBiZWZvcmUgcGFzc2luZyBpdCBpbi4gTm90ZVxyXG4gKiB0aGF0IGFycm93IGZ1bmN0aW9ucyBhcmUgYWxyZWFkeSBib3VuZC5cclxuICogQHBhcmFtIGZ1bmNUaGlzIFRoZSBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uLiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgYW4gdW5ib3VuZGNsYXNzIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgZnVuY1RoaXM/OiBhbnkpOiBJTXV0YXRvcjxUPlxyXG57XHJcbiAgICBmdW5jdGlvbiBtdXRhdG9yRnVuYyguLi5hcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yOiBXYXRjaGVyID0gbXV0YXRvckZ1bmNbc3ltV2F0Y2hlcl07XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdhcyBub3Qgc3VwcGxpZWQgYnV0IG5vdyB3aGVuIHRoZVxyXG4gICAgICAgIC8vIHdhdGNoZXIgZXhlY3V0ZXMsIFwidGhpc1wiIGlzIGRlZmluZWQsIHdlIHJlbWVtYmVyIGl0LlxyXG4gICAgICAgIHJldHVybiBtdXRhdG9yLmV4ZWN1dGUoIHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgdGhlIG11dGF0b3Igb2JqZWN0IGluIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmIHVzaW5nIGEgc3ltYm9sLlxyXG4gICAgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gPSBuZXcgTXV0YXRvciggZnVuYywgZnVuY1RoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgIChtdXRhdG9yRnVuYyBhcyBJTXV0YXRvcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbXV0YXRvciA9IG11dGF0b3JGdW5jW3N5bU11dGF0b3JdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgbXV0YXRvciAmJiBtdXRhdG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBtdXRhdG9yRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11dGF0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGV4ZWN1dGluZyBhIHdyYXBwZWQgZnVuY3Rpb24gdW5kZXIgYVxyXG4gKiBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIE11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpbiBhIG11dGF0aW9uIHNjb3BlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIG11dGF0b3Igd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWNvcmF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgcHJvcGVydGllcyBzbyB0aGF0IGNoYW5naW5nIHRoZWlyIHZhbHVlIHdpbGwgYW55IHdhdGNoZXJcclxuICogb2JqZWN0cyBhdHRhY2hlZCB0byB0aGVtIHRvIHJlc3BvbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlciggdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZylcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbChuYW1lKTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIodmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9iai5zZXQoIHZhbClcclxuICAgICAgICB9LFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIFwiZ2V0XCIgcHJvcGVydGllcyBvciBmdW5jdGlvbnMgcmV0dW5pbmcgYSB2YWx1ZSBzbyB0aGF0IHRoaXNcclxuICogdmFsdWUgd2lsbCBhdXRvbWF0aWNhbGx5IHJlY2FsY3VsYXRlZCBpZiBhbnkgdHJpZ2dlcnMgb24gd2hpY2ggdGhpcyB2YWx1ZSBkZXBlbmRzIGhhdmUgdGhlaXJcclxuICogdmFsdWVzIGNoYW5nZWQuIFdIZW4gdGhpcyBoYXBwZW5zLCB0aGUgd2F0Y2hlciBvYmplY3RzIGF0dGFjaGVkIHRvIHRoaXMgY29tcHV0ZWQgdmFsdWUgd2lsbFxyXG4gKiBiZSBub3RpZmllZCB0byByZXNwb25kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBwcm9wRGVzYzogUHJvcGVydHlEZXNjcmlwdG9yKVxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUpO1xyXG5cclxuICAgIC8vIHByb3BEZXNjLnZhbHVlIGlzIHVuZGVmaW5lZCBmb3IgYWNjZXNzb3JzIGFuZCBkZWZpbmVkIGZvciBmdW5jdGlvbnNcclxuICAgIGlmICghcHJvcERlc2MudmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFwcm9wRGVzYy5nZXQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBjb21wdXRlZCBwcm9wZXJ0eSByZXF1aXJlcyBnZXQoKSBhY2Nlc3NvclwiKTtcclxuXHJcbiAgICAgICAgbGV0IG9yZ0dldCA9IHByb3BEZXNjLmdldDtcclxuICAgICAgICBwcm9wRGVzYy5nZXQgPSBmdW5jdGlvbigpOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElDb21wdXRlZFRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0dldCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wRGVzYy5zZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3JnU2V0ID0gcHJvcERlc2Muc2V0O1xyXG4gICAgICAgICAgICBwcm9wRGVzYy5zZXQgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0dldCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3JnU2V0LmNhbGwoIHRoaXMsIHYpO1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9iai5zZXQoIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBvcmdGdW5jID0gcHJvcERlc2MudmFsdWU7XHJcbiAgICAgICAgcHJvcERlc2MudmFsdWUgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb21wYXJlKCBvMTogYW55LCBvMjogYW55KTogYm9vbGVhblxyXG57XHJcblx0aWYgKG8xID09PSBvMilcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKG8xID09IG51bGwgJiYgbzIgPT0gbnVsbClcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKG8xID09IG51bGwgfHwgbzIgPT0gbnVsbClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbzEgIT09IHR5cGVvZiBvMilcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbzEgPT09IFwib2JqZWN0XCIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFkZWVwQ29tcGFyZSggbzFbcF0sIG8yW3BdKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEocCBpbiBvMSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkpXHJcblx0e1xyXG5cdFx0aWYgKG8xLmxlbmd0aCAhPT0gbzIubGVuZ3RoKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSAwLCBsZW4gPSBvMS5sZW5ndGg7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghZGVlcENvbXBhcmUoIG8xW2ldLCBvMltpXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXNlIGFyZSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucyBvciBmdW5jdGlvbnMgYW5kIHRoZXkgYXJlIGRpZmZlcmVudFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hPYmplY3QoIG86IGFueSk6IG51bWJlclxyXG57XHJcblx0aWYgKG8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybiAwO1xyXG5cdGVsc2UgaWYgKG8gPT09IG51bGwpXHJcblx0XHRyZXR1cm4gMTtcclxuXHRlbHNlIGlmIChpc05hTigwKSlcclxuXHRcdHJldHVybiAyO1xyXG5cdGVsc2UgaWYgKG8gPT09IHRydWUpXHJcblx0XHRyZXR1cm4gMztcclxuXHRlbHNlIGlmIChvID09PSBmYWxzZSlcclxuXHRcdHJldHVybiA0O1xyXG5cclxuXHRsZXQgaCA9IDEwO1xyXG5cclxuXHRpZiAodHlwZW9mIG8gPT09IFwibnVtYmVyXCIpXHJcblx0XHRyZXR1cm4gMTAgKyBvO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8pO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4gaGFzaFN0cmluZyggby5uYW1lKTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8pKVxyXG5cdHtcclxuXHRcdGxldCBsZW4gPSBvLmxlbmd0aDtcclxuXHRcdGxldCBoID0gMTAgKyBsZW47XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0XHQgaCArPSBpICsgaGFzaE9iamVjdCggb1tpXSk7XHJcblx0XHRyZXR1cm4gaDtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBoID0gMTA7XHJcblx0XHRmb3IoIGxldCBwIGluIG8pXHJcblx0XHRcdGggKz0gaGFzaFN0cmluZyhwKSArIGhhc2hPYmplY3Qob1twXSk7XHJcblx0XHRyZXR1cm4gaDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hTdHJpbmcoIHM6IHN0cmluZyk6IG51bWJlclxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIDU7XHJcblxyXG5cdGxldCBsZW4gPSBzLmxlbmd0aDtcclxuXHRsZXQgaCA9IDEwICsgbGVuO1xyXG5cdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcblx0XHRoICs9IHMuY2hhckNvZGVBdChpKTtcclxuXHRyZXR1cm4gaDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbi8vIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXM6IChzdHJpbmcgfCBzdHJpbmdbXSlbXSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRmb3IoIGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcylcclxuXHR7XHJcblx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0Ly8gcGFyc2UgdGhlIGNsYXNzIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0PyBjbGFzc05hbWUgYXMgc3RyaW5nXHJcblx0XHRcdFx0OiAoY2xhc3NOYW1lIGFzIHN0cmluZ1tdKS5qb2luKCBcIiBcIik7XHJcblxyXG5cdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXNDbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0cmVzQ2xhc3NOYW1lICs9IGNsYXNzTmFtZUFzU3RyaW5nO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbi8vIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdCAtIGV2ZW4gaWYgZW1wdHlcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzKCAuLi5zdHlsZXM6IFN0eWxlc2V0W10pOiBTdHlsZXNldFxyXG57XHJcblx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRsZXQgcmVzU3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblx0bWVyZ2VTdHlsZXNUbyggcmVzU3R5bGUsIC4uLnN0eWxlcyk7XHJcblx0cmV0dXJuIHJlc1N0eWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlOiBTdHlsZXNldCwgLi4uc3R5bGVzOiAoU3R5bGVzZXQgfCBzdHJpbmcpW10gKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdHtcclxuXHRcdGlmICghc3R5bGUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBzdHlsZSBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBzdHlsZU9iajogU3R5bGVzZXQgPSB0eXBlb2Ygc3R5bGUgPT09IFwib2JqZWN0XCJcclxuXHRcdFx0XHQ/IHN0eWxlIGFzIFN0eWxlc2V0XHJcblx0XHRcdFx0OiBwYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdC8vIGNvcHkgYWxsIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0ZWggY3VycmVudCBzdHlsZSBvYmplY3QgdG8gb3VyIHJlc3VsdGFudCBvYmplY3RcdFx0XHRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlT2JqKVxyXG5cdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBhcnNlcyB0aGUgZ2l2ZW4gc3R5bGUgc3RyaW5nIGludG8gdGhlIFN0eWxlIG9iamVjdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IFN0eWxlc2V0XHJcbntcclxuXHRpZiAoIXMpXHJcblx0XHRyZXR1cm4ge307XHJcblxyXG5cdGxldCByZXRTdHlsZTogU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0bGV0IGVsbXM6IHN0cmluZ1tdID0gcy5zcGxpdChcIjtcIik7XHJcblx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0e1xyXG5cdFx0bGV0IHBhaXI6IHN0cmluZ1tdID0gZWxtLnNwbGl0KCBcIjpcIik7XHJcblx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRyZXRTdHlsZVtkYXNoVG9DYW1lbCggcGFpclswXS50cmltKCkpXSA9IHBhaXJbMV0udHJpbSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJldFN0eWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG4gKiBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXMoIC4uLnNsaWNlczogbWltLlNsaWNlW10pOiBtaW0uU2xpY2Vcclxue1xyXG5cdGxldCByZXNTbGljZTogbWltLlNsaWNlID0ge307XHJcblx0bWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcblx0cmV0dXJuIHJlc1NsaWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4vLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogbWltLlNsaWNlLCAuLi5zbGljZXM6IG1pbS5TbGljZVtdKTogdm9pZFxyXG57XHJcblx0aWYgKHJlc1NsaWNlID09PSB1bmRlZmluZWQgfHwgcmVzU2xpY2UgPT09IG51bGwpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHR7XHJcblx0XHRpZiAoIXNsaWNlKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRpZiAoc2xpY2Uuc3R5bGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnN0eWxlID0ge307XHJcblxyXG5cdFx0XHRtZXJnZVN0eWxlc1RvKCByZXNTbGljZS5zdHlsZSwgc2xpY2Uuc3R5bGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKCByZXNTbGljZS5jbGFzc05hbWUgYXMgc3RyaW5nLCBzbGljZS5jbGFzc05hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UucHJvcHMgPSB7fTtcclxuXHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNsaWNlLnByb3BzKVxyXG5cdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY29udGVudClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLmNvbnRlbnQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gc2xpY2UuY29udGVudDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KCByZXNTbGljZS5jb250ZW50KSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgb2xkQ29udGVudDogYW55ID0gcmVzU2xpY2UuY29udGVudDtcclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQgPSBbXTtcclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIHNsaWNlLmNvbnRlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9