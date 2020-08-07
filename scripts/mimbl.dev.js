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
const TriggerWatcher_1 = __webpack_require__(/*! ../utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
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
    // that this can be undefined if the wrapping was created without the VN context.
    let currentVN = exports.s_currentVN;
    let currentClassComp = exports.s_currentClassComp;
    if (this) {
        exports.s_currentVN = this;
        exports.s_currentClassComp = exports.s_currentVN.comp ? exports.s_currentVN.comp : exports.s_currentVN.creator;
    }
    try {
        TriggerWatcher_1.enterMutationScope();
        let [that, orgCallback, ...rest] = arguments;
        return orgCallback.apply(that, rest);
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
        TriggerWatcher_1.exitMutationScope();
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
     * Decrements mutation scope reference count. If it reaches zero, notifies all deferred watchers.
     */
    exitMutationScope() {
        if (this.mutationScopesRefCount === 0)
            throw Error("Unpaired call to exitMutationScope");
        if (--this.mutationScopesRefCount === 0) {
            // since when watchers respond, they can execute their watcher functions and that could
            // mess with the same set of watchers we are iterating over. Therefore, we make a copy
            // of this set first.
            let watchers = Array.from(this.deferredWatchers.keys());
            this.deferredWatchers.clear();
            watchers.forEach(watcher => watcher.respond());
        }
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
 * Increments mutation scope reference count
 */
function enterMutationScope() {
    g_manager.enterMutationScope();
}
exports.enterMutationScope = enterMutationScope;
/**
 * Decrements mutation scope reference count. If it reaches zero, notifies all deferred watchers.
 */
function exitMutationScope() {
    g_manager.exitMutationScope();
}
exports.exitMutationScope = exitMutationScope;
/**
 * Creates a computed trigger object whose value is calculated by the given function and with an
 * optional initial value.
 * @param v
 */
function createComputedTrigger(func, funcThis) {
    return new ComputedTrigger(func, funcThis);
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
    constructor(func, funcThis) {
        super();
        this.func = func;
        this.funcThis = funcThis;
        // we don't create the watcher until the get method is called
        this.isStale = true;
    }
    // Retrieves the current value
    get() {
        if (this.isStale) {
            // we need to create the watcher if this is the first time the get method is called.
            if (!this.funcWatcher)
                this.funcWatcher = createWatcher(this.func, this.responder, this.funcThis, this);
            super.set(this.funcWatcher());
            this.isStale = false;
        }
        return super.get();
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
        if (this.watchers.size > 0)
            super.set(this.funcWatcher());
        else
            this.isStale = true;
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
                g_manager.enterMutationScope();
                try {
                    orgSet.call(this, v);
                }
                finally {
                    g_manager.exitMutationScope();
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Qcm9taXNlUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdHlsZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1RleHRWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5CYXNlLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5EaXNwLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL21pbWJsVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRWxtQXR0ci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3ZnRWxtcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9UcmlnZ2VyV2F0Y2hlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9taW1ibC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1jc3NcIixcImNvbW1vbmpzMlwiOlwibWltY3NzXCIsXCJjb21tb25qc1wiOlwibWltY3NzXCIsXCJhbWRcIjpcIm1pbWNzc1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHNFQUFpQztBQUNqQyw2REFBb0U7QUFpQ3BFLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRiw4RkFBOEY7QUFDOUYsa0dBQWtHO0FBQ2xHLGdGQUFnRjtBQUNoRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLHdCQUNsQixTQUFRLEdBQUcsQ0FBQyxTQUEyQjtJQUcxQyxZQUFhLFFBQWdCLElBQUk7UUFFaEMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLG1CQUFtQjtRQUNuQix5REFBeUQ7SUFDMUQsQ0FBQztJQUlELG1HQUFtRztJQUNuRyxxQ0FBcUM7SUFDckMsbUdBQW1HO0lBRW5HLDJGQUEyRjtJQUMzRixJQUFXLFFBQVEsS0FBYSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXpELGtFQUFrRTtJQUMzRCxZQUFZLENBQUUsSUFBWTtRQUVoQyxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFJRCxtR0FBbUc7SUFDbkcsb0JBQW9CO0lBQ3BCLG1HQUFtRztJQUVuRyxzQkFBc0I7SUFDZixlQUFlLENBQUUsSUFBWSxFQUFFLFFBQWlCLEVBQUUsS0FBZ0I7UUFFeEUsMEJBQTBCO1FBQzFCLElBQUksSUFBSSxHQUFhLElBQUksQ0FBQyxlQUFlLENBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksU0FBUyxHQUFpQixJQUFJLENBQUMsU0FBeUIsQ0FBQztRQUU3RCwyQkFBMkI7UUFDM0IsSUFBSSxhQUFhLEdBQWtCLElBQUksYUFBYSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxRQUFRO1lBQ1gsYUFBYSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUs7WUFDUixhQUFhLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFJRCxzQ0FBc0M7SUFDL0IsT0FBTyxDQUFFLElBQVk7UUFFM0IsSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkQsQ0FBQztJQUlELHNDQUFzQztJQUMvQixVQUFVLENBQUUsSUFBWTtJQUUvQixDQUFDO0lBSU0sU0FBUztRQUVmLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSU0sV0FBVztRQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUlELHNCQUFzQjtJQUNkLGVBQWUsQ0FBRSxJQUFZLEVBQUUsUUFBZ0I7UUFFdEQsaURBQWlEO1FBQ2pELElBQUksSUFBSSxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV4QiwyREFBMkQ7UUFDM0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFbEMsMEJBQTBCO1FBQzFCLElBQUksS0FBSyxHQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQXNCLENBQUM7UUFDaEUsS0FBSyxDQUFDLFVBQVUsQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQWdCRDtBQXBJRCw0REFvSUM7QUFtQ0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiwrRkFBK0Y7QUFDL0YsNkZBQTZGO0FBQzdGLGdHQUFnRztBQUNoRyx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFNLFlBQVk7SUFFakIsWUFBYSxRQUFnQixFQUFFLFNBQVk7UUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUlELHVDQUF1QztJQUNoQyxRQUFRLENBQUUsSUFBWTtRQUU1QixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFJRCxpRUFBaUU7SUFDMUQsT0FBTyxDQUFFLElBQVk7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQVNEO0FBOEJELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsNEZBQTRGO0FBQzVGLG1DQUFtQztBQUNuQyxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQU0sYUFBYyxTQUFRLFlBQTBCO0lBRXJELFlBQWEsUUFBZ0IsRUFBRSxTQUF1QjtRQUVyRCxLQUFLLENBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFJRCwyRkFBMkY7SUFDM0Ysc0JBQXNCO0lBQ2YsV0FBVyxDQUFFLFFBQWdCO1FBRW5DLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUlELHFGQUFxRjtJQUNyRiw0REFBNEQ7SUFDckQsV0FBVyxDQUFFLFFBQWdCLEVBQUUsT0FBZSxFQUFFLFNBQW1CO1FBRXpFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQzdFLFNBQVMsRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUlELHFGQUFxRjtJQUNyRiw0REFBNEQ7SUFDckQsYUFBYSxDQUFFLEtBQWU7UUFFcEMsSUFBSSxDQUFDLEtBQUs7WUFDVCxPQUFPO1FBRVIsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQzFCO1lBQ0MsSUFBSSxPQUFPLEdBQUcsMEJBQWlCLENBQUUsUUFBa0MsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsQ0FBQztTQUN2RTtJQUNGLENBQUM7SUFJRCx1RkFBdUY7SUFDdkYsa0NBQWtDO0lBQzNCLGNBQWMsQ0FBRSxRQUFnQjtRQUV0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7O0FDOUhELDhGQUF3RDtBQUl4RDs7O0dBR0c7QUFDSCxNQUFhLEdBQUc7SUFPZixZQUFhLFFBQXFCLEVBQUUsZUFBbUI7UUFIdkQsNERBQTREO1FBQ3BELGlCQUFZLEdBQUcsSUFBSSxxQkFBUyxFQUFjLENBQUM7UUFJbEQsSUFBSSxRQUFRLEtBQUssU0FBUztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0ZBQW9GO0lBQzdFLFdBQVcsQ0FBRSxRQUFvQjtRQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMERBQTBEO0lBQ25ELGNBQWMsQ0FBRSxRQUFvQjtRQUUxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLElBQVcsQ0FBQyxLQUFRLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckMsMkNBQTJDO0lBQzNDLElBQVcsQ0FBQyxDQUFFLE1BQVM7UUFFdEIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFDdEI7WUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRCw4RUFBOEU7SUFDdkUsS0FBSztRQUVYLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNEO0FBOUNELGtCQThDQztBQXlHRDs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixNQUFNLENBQUssR0FBbUIsRUFBRSxHQUFNLEVBQUUsTUFBVTtJQUVqRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFDM0I7UUFDQyxJQUFJLE1BQU0sR0FBRyxHQUFhLENBQUM7UUFDM0IsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTTtZQUM5QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNoQjtTQUNJLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVTtRQUNoQyxHQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFWRCx3QkFVQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLEtBQW9CLElBQVEsQ0FBQztBQUF2RCw0QkFBdUQ7QUFrZ0J2RCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7O0dBSUc7QUFDSCxTQUFnQixLQUFLLENBQUUsR0FBWTtJQUVsQyxPQUFPLGlCQUFpQixJQUFLLEdBQVcsQ0FBQztBQUMxQyxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixRQUFRLENBQUUsR0FBWTtJQUVyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBQzdCLGdEQUFnRDtBQUNqRCxDQUFDO0FBSkQsNEJBSUM7QUFrU0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiwrQ0FBK0M7QUFDL0MsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxxR0FBdUQ7QUFFdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxTQUFnQixHQUFHLENBQUUsR0FBUSxFQUFFLEtBQVUsRUFBRSxHQUFHLFFBQWU7SUFFNUQsT0FBTyxpQ0FBa0IsQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFIRCxrQkFHQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsd0ZBQW1EO0FBRW5EOzs7O0dBSUc7QUFDSCxTQUFnQix1QkFBdUIsQ0FBSyxRQUFnQixFQUFFLFlBQTZDO0lBRTFHLGlCQUFPLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxvQkFBcUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFIRCwwREFHQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLFNBQWlCO0lBRXJELGlCQUFPLENBQUMsZ0JBQWdCLENBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBSEQsa0RBR0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLCtDQUErQztBQUMvQyxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLGdGQUF3QztBQUV4Qzs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLEdBQUcsTUFBZTtJQUU5QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBSEQsa0NBR0M7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxRQUFlLEVBQUUsR0FBRyxNQUFlO0lBRWpFLEtBQUssQ0FBQyxhQUFhLENBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHNDQUdDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixZQUFZLENBQUUsR0FBRyxVQUFpQztJQUVqRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsb0NBR0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLEdBQUcsTUFBc0I7SUFFckQsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUhELGtDQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxRQUFzQixFQUFFLEdBQUcsTUFBaUM7SUFFMUYsS0FBSyxDQUFDLGFBQWEsQ0FBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsc0NBR0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLDRGQUFvRDtBQUVwRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxTQUFnQixZQUFZLENBQXNCLFFBQVcsRUFBRSxJQUFhLEVBQUUsRUFBVztJQUV4RixPQUFPLDhCQUFrQixDQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUhELG9DQUdDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxrR0FBK0M7QUFTL0M7OztHQUdHO0FBQ0gsTUFBc0IsU0FBUztJQWU5QixZQUFhLEtBQW1DO1FBRS9DLElBQUksS0FBSztZQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFLRDs7Ozs7T0FLRztJQUNPLFFBQVEsQ0FBRSxHQUFHLGNBQXdDO1FBRTlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNYLE9BQU87UUFFUixJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUMvQjtZQUNDLDJFQUEyRTtZQUMzRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBRUQ7WUFDQyxxQ0FBcUM7WUFDckMsS0FBSyxJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQzlCO2dCQUNDLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVTtvQkFDNUIseUJBQVcsQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFFM0M7b0JBQ0MseUVBQXlFO29CQUN6RSx5QkFBVyxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN0RSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9EO2FBQ0Q7U0FDRDtJQUNGLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLGtCQUFrQixDQUFFLElBQXVCLEVBQUUsSUFBYTtRQUVuRSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLGlCQUFpQixDQUFFLElBQXVCLEVBQUUsSUFBYTtRQUVsRSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUNHO0lBQ08sWUFBWSxDQUFzQixRQUFXLEVBQUUsSUFBYTtRQUVyRSxPQUFPLDhCQUFrQixDQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRDtBQTdIRCw4QkE2SEM7QUErREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSCxNQUFhLFNBQVUsU0FBUSxTQUE4QjtJQUU1RDs7OztPQUlHO0lBQ0gsWUFBcUIsS0FBcUIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUU1RCw0RUFBNEU7SUFDckUsTUFBTSxLQUFTLENBQUM7SUFFdkI7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBYyxFQUFFLEdBQVMsRUFBRSxPQUFhLEVBQUUsR0FBRyxJQUFXO1FBRTdFLHlCQUFXLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDtBQXhCRCw4QkF3QkM7QUF3QkQ7Ozs7OztHQU1HO0FBQ0gsTUFBYSxZQUFhLFNBQVEsU0FBNEI7SUFFN0Q7Ozs7T0FJRztJQUNILFlBQXFCLEtBQXdCLElBQUksS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRSwrRUFBK0U7SUFDeEUsTUFBTSxLQUFTLENBQUM7Q0FDdkI7QUFYRCxvQ0FXQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YseUNBQXlDO0FBQ3pDLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsK0VBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxPQUFZLEVBQUUsV0FBaUIsSUFBSTtJQUU3RCxJQUFJLENBQUMsYUFBYSxDQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBSEQsOEJBR0M7QUFFRCxHQUFHO0FBQ0g7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLFdBQWlCLElBQUk7SUFFakQsSUFBSSxDQUFDLGVBQWUsQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsa0NBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixLQUFLLENBQUUsT0FBWSxFQUFFLFdBQWlCLElBQUk7SUFFekQsSUFBSSxDQUFDLFNBQVMsQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhELHNCQUdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLFdBQWlCLElBQUk7SUFFN0MsSUFBSSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBSEQsMEJBR0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdGQUFnRjtBQUNoRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLDJHQUFvRTtBQUVwRSwrRkFBK0Y7QUFDcEYsK0JBQXVCLEdBQUcsOENBQTZCLEVBQUUsQ0FBQztBQUlyRTs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxNQUFNLEVBQUUsSUFBWTtJQUU5QyxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtRQUM5QixHQUFHLENBQUUsR0FBRztZQUVKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckIsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZTtvQkFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUMvQjtRQUNMLENBQUM7UUFDRCxHQUFHLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25DLENBQUMsQ0FBQztBQUNQLENBQUM7QUFoQkQsOEJBZ0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNodkRELDZFQUErQjtBQUMvQiw2R0FBZ0U7QUFFaEUsaUJBQWlCO0FBQ2hCLGtGQUF3RTtBQUN6RSxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixvR0FBb0c7QUFDcEcsd0RBQXdEO0FBQ3hELEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBc0IsV0FBWSxTQUFRLGVBQU07SUFPL0MsaUJBQWlCO0lBQ2hCLElBQVcsYUFBYSxLQUFvQixPQUFPLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxVQUFVO0lBSVY7OztPQUdHO0lBQ0gsSUFBVyxjQUFjO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEYsQ0FBQztJQUlELDZEQUE2RDtJQUN0RCxNQUFNO1FBRVosYUFBYTtRQUNaLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQzNCO1lBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSw2Q0FBNkMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFDRixVQUFVO1FBRVYsb0JBQW9CO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsMENBQTBDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFVBQVU7UUFFVixpQkFBaUI7UUFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsVUFBVTtRQUVWLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRVQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakcsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLFVBQVU7SUFDWCxDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVYLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkMsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLFVBQVU7SUFDWCxDQUFDO0lBSUUsOEZBQThGO0lBQzlGLGtFQUFrRTtJQUNyRSwyQ0FBMkM7SUFDakMsUUFBUTtRQUVqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFJSiw0RkFBNEY7SUFDNUYscURBQXFEO0lBQzlDLHFCQUFxQjtRQUUzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsMEZBQTBGO0lBQzFGLHdCQUF3QjtJQUNqQixXQUFXLENBQUUsR0FBUSxFQUFFLElBQWM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJRSwrRkFBK0Y7SUFDL0Ysd0ZBQXdGO0lBQzlFLGtCQUFrQjtRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQVFKO0FBeEhELGtDQXdIQzs7Ozs7Ozs7Ozs7Ozs7O0FDeElELHNFQUFpQztBQUVqQyw2RUFBK0I7QUFDL0IsOEdBQXFEO0FBQ3JELGtHQUE2QztBQUM3Qyw2RUFBK0I7QUFDL0IsMEVBQTZCO0FBQzdCLDZFQUErQjtBQUMvQiw0RkFBeUM7QUFDekMscUdBQStDO0FBQy9DLHNGQUE4QztBQUk5Qyw0RkFBNEY7QUFDNUYsaUdBQWlHO0FBQ2pHLGlHQUFpRztBQUNqRyxrREFBa0Q7QUFDbEQsU0FBZ0Isc0JBQXNCLENBQUUsT0FBWTtJQUVuRCxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssRUFDeEM7UUFDQyxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUM7S0FDWjtTQUNJLElBQUksT0FBTyxZQUFZLGVBQU07UUFDakMsT0FBTyxPQUFPLENBQUM7U0FDWCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFDcEM7UUFDQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQU0sQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3hEO1NBQ0ksSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUM3QztRQUNDLHVGQUF1RjtRQUN2Rix1REFBdUQ7UUFDdkQsT0FBUSxPQUEwQixDQUFDLEVBQUU7WUFDakMsQ0FBQyxDQUFFLE9BQTBCLENBQUMsRUFBUTtZQUN0QyxDQUFDLENBQUMsSUFBSSxxQ0FBaUIsQ0FBRSxPQUF5QixDQUFDLENBQUM7S0FDeEQ7U0FDSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDO1FBQy9CLE9BQU8sb0JBQW9CLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEMsSUFBSSxPQUFPLFlBQVksT0FBTyxFQUNuQztRQUNDLE9BQU8sSUFBSSwrQkFBYyxDQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7S0FDaEQ7U0FDSSxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFDdEM7UUFDQyxJQUFJLEVBQUUsR0FBRyx5QkFBVyxDQUFDLE1BQU0sQ0FBRSxPQUFPLENBQUM7UUFDckMsT0FBTyxFQUFFLElBQUksSUFBSSx5QkFBVyxDQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsOEJBQWtCLEVBQUMsQ0FBQyxDQUFDO0tBQzdFOztRQUVBLE9BQU8sSUFBSSxlQUFNLENBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQWxDRCx3REFrQ0M7QUFJRCxpR0FBaUc7QUFDakcscURBQXFEO0FBQ3JELFNBQWdCLHdCQUF3QixDQUFFLE9BQVk7SUFFckQsSUFBSSxLQUFLLEdBQUcsc0JBQXNCLENBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUpELDREQUlDO0FBSUQsMEZBQTBGO0FBQzFGLFNBQWdCLGtCQUFrQixDQUFFLEdBQVEsRUFBRSxLQUFVLEVBQUUsUUFBZTtJQUV4RSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDMUIsT0FBTyxJQUFJLGFBQUssQ0FBRSxHQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRO1FBQzVCLE9BQU8sb0JBQW9CLENBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFDOUI7UUFDQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDeEIsT0FBTyxTQUFTLENBQUM7UUFFbEIsa0ZBQWtGO1FBQ2xGLGdDQUFnQztRQUNoQyxJQUFJLGNBQWMsR0FBRyxLQUEyQixDQUFDO1FBQ2pELElBQUksRUFBRSxHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxFQUFFO1lBQ04sT0FBTyxJQUFJLHlCQUFXLENBQUUsS0FBSyxDQUFDLENBQUM7YUFFaEM7WUFDQyx1RkFBdUY7WUFDdkYsK0NBQStDO1lBQy9DLElBQUksY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7S0FDRDtTQUNJLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxZQUFZLEVBQ2pDO1FBQ0MsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1FBRWxCLE9BQU8sSUFBSSwrQkFBYyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1QztTQUNJLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUNsQztRQUNDLHVGQUF1RjtRQUN2Rix1RkFBdUY7UUFDdkYseUZBQXlGO1FBQ3pGLFlBQVk7UUFDWixrRkFBa0Y7UUFDbEYseUZBQXlGO1FBQ3pGLHFDQUFxQztRQUNyQyxxREFBcUQ7UUFDckQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLFVBQVU7WUFDN0MsT0FBTyxJQUFJLDZCQUFhLENBQUUsR0FBMEIsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7O1lBRTNFLE9BQU8sSUFBSSxlQUFNLENBQUUsR0FBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDbEU7SUFFRCxhQUFhOztRQUVaLE1BQU0sSUFBSSxLQUFLLENBQUUsMENBQTBDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEUsVUFBVTtBQUNYLENBQUM7QUF2REQsZ0RBdURDO0FBSUQsZ0VBQWdFO0FBQ2hFLFNBQVMsb0JBQW9CLENBQUUsR0FBVTtJQUV4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUViLElBQUksS0FBSyxHQUFTLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFDcEI7UUFDQyxJQUFJLFNBQVMsR0FBRyxzQkFBc0IsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLFNBQVMsS0FBSyxJQUFJO1lBQ3JCLFNBQVM7YUFDTCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxDQUFDLEVBQ2xDO1lBQ0MsS0FBSyxJQUFJLEVBQUUsSUFBSSxTQUFTO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCOztZQUVBLEtBQUssQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QyxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixtQkFBbUI7SUFFbEMscUZBQXFGO0lBQ3JGLGtGQUFrRjtJQUNsRixPQUFPLDhCQUFrQixDQUFDO0FBQzNCLENBQUM7QUFMRCxrREFLQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEtELHNFQUFpQztBQUVqQyw2RUFBK0I7QUFDL0Isd0ZBQTZHO0FBQzdHLHdGQUF5QztBQUN6QyxrRkFBMkM7QUFFM0MsaUJBQWlCO0FBQ2hCLGtGQUF3RTtBQUN6RSxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiw4Q0FBOEM7QUFDOUMsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFhLEtBQU0sU0FBUSxlQUFNO0lBaUJoQyxZQUFhLE9BQWUsRUFBRSxLQUFVLEVBQUUsUUFBZTtRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLGNBQWlCLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxLQUFLLEVBQ1Q7WUFDQyxpRkFBaUY7WUFDakYsdUNBQXVDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQztJQUlELGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTyxxQkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsVUFBVTtJQUlWLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUVkLGlFQUFpRTtRQUNqRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2RkFBNkY7SUFDN0YsSUFBVyxLQUFLLEtBQVMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUkzQyw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBSUQsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxLQUFLO1FBRVgsMEVBQTBFO1FBQzFFLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBRSxpQkFBTyxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFDLFVBQVUsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztZQUN6QixHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxHQUFHLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFJRCx5RUFBeUU7SUFDekUsMkNBQTJDO0lBQ3BDLE9BQU87UUFFYixzRkFBc0Y7UUFDdEYsb0ZBQW9GO1FBQ3BGLHdGQUF3RjtRQUN4RixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsOEJBQThCO1FBQzdCLDRFQUE0RTtRQUM1RSxtRkFBbUY7UUFDbkYseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsVUFBVTtRQUVWLHFDQUFxQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUUvQixXQUFXO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFaEIsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLEdBQUcsRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLFVBQVU7SUFDWCxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLG1GQUFtRjtRQUNuRixRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFNLEtBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsd0ZBQXdGO1FBQ3hGLElBQUksWUFBWSxHQUFHLENBQUMsbUJBQVcsQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFHLEtBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSx3RUFBd0U7UUFDeEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3hELEtBQWUsQ0FBQyxRQUFRLElBQUssS0FBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFJLEtBQWUsQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBSSxLQUFlLENBQUMsUUFBUSxDQUFDO1FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUlELDRDQUE0QztJQUNyQyxZQUFZLENBQUUsS0FBUztRQUU3QixNQUFNLFFBQVEsR0FBVSxLQUFjLENBQUM7UUFDdkMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXRCLHVFQUF1RTtRQUN2RSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFDN0I7WUFDQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXhCLGtGQUFrRjtZQUNsRixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFFRCxxRkFBcUY7UUFDckYsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFFOUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLG1DQUFtQztJQUMzQixVQUFVO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNkLE9BQU87UUFFUixJQUFJLE9BQVksRUFBRSxRQUFrQixFQUFFLFFBQWtCLENBQUM7UUFDekQsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUMvQjtZQUNDLElBQUksUUFBUSxLQUFLLEtBQUssRUFDdEI7Z0JBQ0MsNkVBQTZFO2dCQUM3RSxTQUFTO2FBQ1Q7WUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssRUFDeEM7Z0JBQ0MsMERBQTBEO2dCQUMxRCxTQUFTO2FBQ1Q7aUJBQ0ksSUFBSSxRQUFRLEtBQUssS0FBSyxFQUMzQjtnQkFDQyx3QkFBd0I7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ25CO2lCQUNJLElBQUksUUFBUSxLQUFLLGdCQUFnQixFQUN0QztnQkFDQyxtQ0FBbUM7Z0JBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNDLHNGQUFzRjtnQkFDdEYsbUZBQW1GO2dCQUNuRixjQUFjO2dCQUNkLFFBQVEsR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWMsQ0FBQztnQkFDcEQsSUFBSSxRQUFRLGlCQUFrQixFQUM5QjtvQkFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFDeEQ7cUJBQ0ksSUFBSSxRQUFRLGtCQUFtQixFQUNwQztvQkFDQyxJQUFJLFNBQVMsR0FBRyx5QkFBeUIsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzlELElBQUksU0FBUyxFQUNiO3dCQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs0QkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7d0JBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUNsQztpQkFDRDtxQkFDSSx3Q0FBd0M7aUJBQzdDO29CQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBRXZCLG9FQUFvRTtvQkFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUE4QixFQUFFLEdBQUcsRUFBRSxPQUFPO3dCQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUM7aUJBQ3hCO2FBQ0Q7U0FDRDtJQUNGLENBQUM7SUFJRCxzQ0FBc0M7SUFDOUIsUUFBUTtRQUVmLGFBQWE7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDbkUsVUFBVTtRQUVWLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFDM0I7WUFDQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLGlCQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0YsQ0FBQztJQUlELDBDQUEwQztJQUNsQyxXQUFXLENBQUUsUUFBNkM7UUFFakUsNkNBQTZDO1FBQzdDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQix3RkFBd0Y7UUFDeEYsdUNBQXVDO1FBQ3ZDLElBQUksUUFBUSxFQUNaO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQ3pCO2dCQUNDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQzFCO29CQUNDLCtFQUErRTtvQkFDL0Usd0NBQXdDO29CQUN4QyxpQkFBTyxDQUFDLFVBQVUsQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUM7cUJBRUQ7b0JBQ0MsK0VBQStFO29CQUMvRSxtREFBbUQ7b0JBQ25ELGlCQUFPLENBQUMsVUFBVSxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEU7YUFDRDtTQUNEO1FBRUQsNEVBQTRFO1FBQzVFLElBQUksUUFBUSxFQUNaO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQ3pCO2dCQUNDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztvQkFDakMsU0FBUztnQkFFVixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLGlCQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckQ7U0FDRDtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFJRCxnREFBZ0Q7SUFDeEMsU0FBUztRQUVoQixhQUFhO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBRSxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3JFLFVBQVU7UUFFVixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBSUQsc0ZBQXNGO0lBQ3RGLG9GQUFvRjtJQUM1RSxRQUFRLENBQUUsSUFBWSxFQUFFLEtBQXVCO1FBRXRELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxLQUFLLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDhCQUE4QjtJQUM3Qiw0RUFBNEU7SUFDNUUsbUZBQW1GO0lBQ25GLHlCQUF5QjtJQUNqQixZQUFZO1FBRW5CLGFBQWE7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixNQUFNLElBQUksS0FBSyxDQUFFLG1EQUFtRCxDQUFDLENBQUM7UUFDeEUsVUFBVTtRQUVWLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRixVQUFVO0lBSVYscURBQXFEO0lBQzdDLFdBQVcsQ0FBRSxJQUFZLEVBQUUsS0FBdUI7UUFFekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckUsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLEtBQUssRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLFVBQVU7SUFDWCxDQUFDO0lBSUQsdUNBQXVDO0lBQy9CLFlBQVksQ0FBRSxTQUErQztRQUVwRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLG9GQUFvRjtRQUNwRixnREFBZ0Q7UUFDaEQsSUFBSSxTQUFTLEVBQ2I7WUFDQyxLQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsRUFDMUI7Z0JBQ0MsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsUUFBUTtvQkFDWixJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzs7b0JBRWxDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM3QztTQUNEO1FBRUQsb0ZBQW9GO1FBQ3BGLElBQUksU0FBUyxFQUNiO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQzFCO2dCQUNDLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztvQkFDbkMsU0FBUztnQkFFVixJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUlELDZGQUE2RjtJQUM3RiwwRkFBMEY7SUFDMUYsaUJBQWlCO0lBQ1QsV0FBVyxDQUFFLElBQVksRUFBRSxRQUEwQixFQUFFLFFBQTBCO1FBRXhGLGlHQUFpRztRQUNqRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLE9BQU87WUFDeEMsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSTtZQUMvQixRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQzNDO1lBQ0MsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFFRDtZQUNDLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzRSxrREFBa0Q7WUFDbEQsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEUsaUJBQWlCO1lBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLEtBQUssRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLFVBQVU7WUFFVixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUlELDZGQUE2RjtJQUM3Riw4RkFBOEY7SUFDOUYsNkZBQTZGO0lBQzdGLDJGQUEyRjtJQUMzRiw2RkFBNkY7SUFDN0YsVUFBVTtJQUNGLGtCQUFrQixDQUFFLEtBQXVCO1FBRWxELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBSUQsNkJBQTZCO0lBQ3JCLGNBQWM7UUFFckIsYUFBYTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNLElBQUksS0FBSyxDQUFFLDBEQUEwRCxDQUFDLENBQUM7UUFDL0UsVUFBVTtRQUVWLGlEQUFpRDtRQUNqRCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQ2pDO1lBQ0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4Qyx1RkFBdUY7WUFDdkYsbUJBQW1CO1lBQ25CLElBQ0E7Z0JBQ0MsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxHQUFHLEVBQ1Y7Z0JBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxnREFBZ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLFNBQVM7YUFDVDtTQUNEO0lBQ0YsQ0FBQztJQUlELDhDQUE4QztJQUN0QyxpQkFBaUIsQ0FBRSxTQUFrQjtRQUU1QyxhQUFhO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUUsNkRBQTZELENBQUMsQ0FBQztRQUNsRixVQUFVO1FBRVYsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUNqQztZQUNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFDQTtnQkFDQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsbURBQW1ELElBQUksTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMzRjtTQUNEO0lBQ0YsQ0FBQztJQUlELDBDQUEwQztJQUNsQyxpQkFBaUIsQ0FBRSxjQUF5RDtRQUVuRixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXRDLHNGQUFzRjtRQUN0RixnREFBZ0Q7UUFDaEQsSUFBSSxjQUFjLEVBQ2xCO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxjQUFjLEVBQy9CO2dCQUNDLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLGFBQWEsRUFDbEI7b0JBQ0MsK0VBQStFO29CQUMvRSx3QkFBd0I7b0JBQ3hCLElBQ0E7d0JBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3hDO29CQUNELE9BQU8sR0FBRyxFQUNWO3dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsbURBQW1ELElBQUksTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztxQkFDM0Y7aUJBQ0Q7cUJBRUQ7b0JBQ0Msd0RBQXdEO29CQUN4RCxJQUNBO3dCQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsT0FBTyxHQUFHLEVBQ1Y7d0JBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxnREFBZ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RjtvQkFFRCxhQUFhLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7aUJBQzlDO2FBQ0Q7U0FDRDtRQUVELHNGQUFzRjtRQUN0RixJQUFJLGNBQWMsRUFDbEI7WUFDQyxLQUFLLElBQUksSUFBSSxJQUFJLGNBQWMsRUFDL0I7Z0JBQ0MsSUFBSSxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDO29CQUM3QyxTQUFTO2dCQUVWLElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFekMsdUZBQXVGO2dCQUN2RixtQkFBbUI7Z0JBQ25CLElBQ0E7b0JBQ0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1RjtnQkFDRCxPQUFPLEdBQUcsRUFDVjtvQkFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLGdEQUFnRCxJQUFJLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3hGLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixTQUFTO2lCQUNUO2FBQ0Q7U0FDRDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO0lBQ25DLENBQUM7Q0FnQ0Q7QUE3bkJELHNCQTZuQkM7QUFZQSxDQUFDO0FBeUJELENBQUM7QUFlRCxDQUFDO0FBSUYsOEZBQThGO0FBQzlGLDhFQUE4RTtBQUM5RSxTQUFTLHlCQUF5QixDQUFFLElBQW1CLEVBQUUsT0FBWTtJQUVwRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVU7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBaUMsRUFBRSxDQUFDO1NBQ3hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDL0I7UUFDQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN4QjtZQUNDLElBQUksT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztnQkFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBMkIsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBWSxFQUFFLENBQUM7O2dCQUVsRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUEyQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNsRjthQUNJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQTJCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBWSxFQUFFLENBQUM7S0FDckg7SUFFRCxrRkFBa0Y7SUFDbEYsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM3RCRCxpRUFBcUM7QUFDckMsNkVBQStCO0FBQy9CLHNGQUE4QztBQUM5Qyw2R0FBK0Q7QUFFL0QsaUJBQWlCO0FBQ2hCLGtGQUF3RTtBQUN6RSxVQUFVO0FBSVY7O0dBRUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFhLFdBQVksU0FBUSxlQUFNO0lBRXRDLFlBQWEsS0FBeUI7UUFFckMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxvQkFBdUIsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUE2QixDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSw4QkFBa0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFFbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRXJCLG9GQUFvRjtRQUNwRix3RkFBd0Y7UUFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBR00sV0FBVyxDQUFFLElBQVc7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUlELGlCQUFpQjtJQUNqQixJQUFXLGFBQWEsS0FBb0IsT0FBTyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsVUFBVTtJQUNWLENBQUMsQ0FBQyw0RUFBNEU7SUFVOUU7Ozs7T0FJRztJQUNILElBQVcsY0FBYyxLQUFjLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBSWxFLHVGQUF1RjtJQUMxRix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUVkLGtFQUFrRTtRQUNsRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtZQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELE1BQU07UUFFWixvQkFBb0I7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSw2Q0FBNkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsVUFBVTtRQUVWLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxVQUFVO1FBRVYsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUlELDBGQUEwRjtJQUMxRixtRUFBbUU7SUFDbkUsMkNBQTJDO0lBQ3BDLFNBQVM7UUFFZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFaEIsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsOEJBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9GLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osMkNBQTJDO0lBQ3BDLFdBQVc7UUFFWCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO0lBQ1gsQ0FBQztJQUlELHdGQUF3RjtJQUN4RiwwRUFBMEU7SUFDbkUsZ0JBQWdCLENBQUUsS0FBUztRQUVqQyxJQUFJLGNBQWMsR0FBRyxLQUFvQixDQUFDO1FBRTFDLHFGQUFxRjtRQUNyRixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDckYsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsSUFBSSxjQUFjLEdBQUcsS0FBb0IsQ0FBQztRQUUxQyxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUV0Qyx1RkFBdUY7UUFDdkYsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBRWhDLDBFQUEwRTtRQUMxRSw0RUFBNEU7UUFDNUUsT0FBTyxpQkFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7SUFJRCw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBQ2pDLFlBQVksQ0FBRSxLQUFTO1FBRTFCLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBSUcsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFjLEVBQUUsR0FBUyxFQUFFLE9BQWE7UUFFN0QsNkRBQTZEO1FBQzdELElBQUksT0FBTyxHQUFRLEdBQUcsSUFBSSxPQUFPLElBQUksOEJBQWtCLElBQUksSUFBSSxDQUFDO1FBRWhFLGtGQUFrRjtRQUNsRixJQUFJLGNBQWMsR0FBeUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsT0FBTyxjQUFjLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBSU0sTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFjLEVBQUUsR0FBUyxFQUFFLE9BQWEsRUFBRSxJQUFZO1FBRTNFLGdCQUFnQjtRQUNoQixJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUU7WUFDTixPQUFPO1FBRVIsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDZixFQUFFLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUN6QixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUlFLDJGQUEyRjtJQUMzRixjQUFjO0lBQ04saUJBQWlCO1FBRTNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSU8sY0FBYztRQUVyQixJQUFJLGNBQWMsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxFQUNuQjtZQUNDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUMzQztRQUVELGNBQWMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR08sa0JBQWtCO1FBRXpCLElBQUksY0FBYyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksY0FBYztZQUNqQixjQUFjLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBd0JEO0FBN09ELGtDQTZPQzs7Ozs7Ozs7Ozs7Ozs7O0FDbFJELHNFQUFpQztBQUNqQyxpRUFBeUM7QUFDekMsNkVBQStCO0FBRS9CLGlCQUFpQjtBQUNoQixrRkFBd0U7QUFDekUsVUFBVTtBQUlWOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsZUFBTTtJQVVqQyxZQUFhLElBQXNCLEVBQUUsS0FBVSxFQUFFLFFBQWU7UUFFL0QsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxtQkFBc0IsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEVBQ1Q7WUFDQyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFDMUI7Z0JBQ0MsSUFBSSxPQUFPLEdBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksRUFDN0M7b0JBQ0MsbURBQW1EO29CQUNuRCxTQUFTO2lCQUNUO3FCQUNJLElBQUksUUFBUSxLQUFLLEtBQUssRUFDM0I7b0JBQ0MsK0RBQStEO29CQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztpQkFDbkI7O29CQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ2hDO1lBRUQscUZBQXFGO1lBQ3JGLGFBQWE7WUFDYixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3JCO1FBRUQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBNUNELDBFQUEwRTtJQUNuRSxNQUFNLENBQUMsYUFBYSxDQUFFLEVBQU07UUFFbEMsT0FBUSxFQUFhLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQXdDQSxDQUFDO0lBSUgsaUJBQWlCO0lBQ2hCLElBQVcsYUFBYSxLQUFvQixPQUFPLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxVQUFVO0lBSVQsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsa0VBQWtFO1FBQ2xFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLG9CQUFvQjtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLHlDQUF5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxVQUFVO1FBRVYsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLFVBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCxpQkFBaUI7SUFDaEIsMEZBQTBGO0lBQzFGLG1FQUFtRTtJQUNuRSwyQ0FBMkM7SUFDcEMsU0FBUztRQUVmLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCw2RkFBNkY7SUFDN0YsWUFBWTtJQUNaLDJDQUEyQztJQUNwQyxXQUFXO1FBRWpCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRixVQUFVO0lBSVYsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLHVEQUF1RDtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQU0sS0FBZ0IsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsSUFBSSxTQUFTLEdBQUcsS0FBZSxDQUFDO1FBRWhDLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFekIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFN0Isc0ZBQXNGO1FBQ3RGLG9GQUFvRjtRQUNwRiwrQkFBK0I7UUFDL0IsT0FBTyxpQkFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Q0FhRDtBQXRKRCx3QkFzSkM7Ozs7Ozs7Ozs7Ozs7OztBQ2xLRCxpRUFBcUM7QUFDckMsNEZBQXlDO0FBRXpDLGlCQUFpQjtBQUNoQixrRkFBd0U7QUFDekUsVUFBVTtBQUlWLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsOEZBQThGO0FBQzlGLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBYSxpQkFBa0IsU0FBUSx5QkFBVztJQUVqRCxZQUFhLElBQW9CO1FBRWhDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksMEJBQTZCLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFJRix1RkFBdUY7SUFDdkYsdUZBQXVGO0lBQ3ZGLDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFFZCxzRkFBc0Y7UUFDdEYsc0NBQXNDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDbkYsQ0FBQztJQUlELGtGQUFrRjtJQUNsRixnRUFBZ0U7SUFDaEUsSUFBVyxHQUFHLEtBQVUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUkzQywwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUlELDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osMkNBQTJDO0lBQ3BDLFdBQVc7UUFFWCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBSUQsOEZBQThGO0lBQzlGLDBGQUEwRjtJQUMxRiw4RkFBOEY7SUFDOUYsMEVBQTBFO0lBQzFFLDJDQUEyQztJQUNwQyxhQUFhLENBQUUsS0FBUztRQUU5QixxRUFBcUU7UUFDckUsSUFBSSxPQUFPLEdBQUksS0FBMkIsQ0FBQyxJQUFJLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFFMUMseUZBQXlGO1FBQ3pGLDJDQUEyQztRQUMzQyxJQUFJLGFBQWEsRUFDakI7WUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUVwQixnRkFBZ0Y7WUFDaEYsNkJBQTZCO1lBQzdCLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxpQkFBWSxDQUFDLGFBQWEsQ0FBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUlELHdEQUF3RDtJQUNoRCxpQkFBaUIsQ0FBRSxJQUFvQjtRQUU5QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUVmLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDBEQUEwRDtJQUNsRCxtQkFBbUIsQ0FBRSxJQUFvQjtRQUVoRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUVwQixpQkFBaUI7UUFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsVUFBVTtJQUNYLENBQUM7Q0FDRDtBQTVHRCw4Q0E0R0M7Ozs7Ozs7Ozs7Ozs7OztBQzNIRCxzRUFBaUM7QUFDakMsaUVBQXFDO0FBRXJDLDRGQUF5QztBQUl6QyxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrRUFBa0U7QUFDbEUsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFhLGFBQWMsU0FBUSx5QkFBVztJQU83QyxZQUFhLFNBQThCLEVBQUUsS0FBVSxFQUFFLFFBQWU7UUFFdkUsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxzQkFBeUIsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQiw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEVBQ1Q7WUFDQyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFDMUI7Z0JBQ0MsSUFBSSxPQUFPLEdBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksRUFDN0M7b0JBQ0MsbURBQW1EO29CQUNuRCxTQUFTO2lCQUNUO3FCQUNJLElBQUksUUFBUSxLQUFLLEtBQUssRUFDM0I7b0JBQ0MsK0RBQStEO29CQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztpQkFDbkI7cUJBQ0ksSUFBSSxRQUFRLEtBQUssS0FBSyxFQUMzQjtvQkFDQywrREFBK0Q7b0JBQy9ELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2lCQUNuQjs7b0JBRUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDaEM7WUFFRCxxRkFBcUY7WUFDckYsYUFBYTtZQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDckI7UUFFRCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBSUYsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsc0ZBQXNGO1FBQ3RGLHdGQUF3RjtRQUN4RixzREFBc0Q7UUFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBRTlCO1lBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUk7Z0JBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUV4QixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUlELHdGQUF3RjtJQUN4RixnRkFBZ0Y7SUFDekUsSUFBSSxDQUFFLE1BQWMsRUFBRSxPQUF1QjtRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU3Qiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdkIsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTO1lBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFJRCw2RkFBNkY7SUFDN0YsWUFBWTtJQUNaLDJDQUEyQztJQUNwQyxXQUFXO1FBRVgsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFCLHNGQUFzRjtRQUN0RixzRkFBc0Y7UUFDdEYseUZBQXlGO1FBQ3pGLHFDQUFxQztRQUNyQyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztZQUN6QixHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLDZEQUE2RDtRQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQU0sS0FBdUIsQ0FBQyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUlELHlGQUF5RjtJQUN6Rix3RkFBd0Y7SUFDeEYsbUJBQW1CO0lBQ1osYUFBYSxDQUFFLEtBQVM7UUFFOUIsSUFBSSxVQUFVLEdBQUcsS0FBc0IsQ0FBQztRQUV4QyxnRkFBZ0Y7UUFDaEYsSUFBSSxZQUFZLEdBQVksSUFBSSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztZQUN2QyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELHVFQUF1RTtRQUN2RSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFDL0I7WUFDQyxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBRTFCLGtGQUFrRjtZQUNsRixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7YUFDSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUNyQztZQUNDLHFEQUFxRDtZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztRQUVELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFMUIsb0ZBQW9GO1FBQ3BGLDhFQUE4RTtRQUM5RSxnRkFBZ0Y7UUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxzRkFBc0Y7UUFDdEYsb0ZBQW9GO1FBQ3BGLCtCQUErQjtRQUMvQixPQUFPLGlCQUFZLENBQUMsYUFBYSxDQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBZUQ7QUFuTUQsc0NBbU1DOzs7Ozs7Ozs7Ozs7Ozs7QUNsTkQsaUVBQXlDO0FBQ3pDLDZFQUErQjtBQUcvQixpQkFBaUI7QUFDaEIsa0ZBQXdFO0FBQ3pFLFVBQVU7QUFJVjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFhLGNBQWUsU0FBUSxlQUFNO0lBRXpDLFlBQWEsS0FBNEIsRUFBRSxRQUFnQjtRQUUxRCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLHVCQUEwQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBSUQsd0VBQXdFO0lBQ3hFLElBQVcsU0FBUyxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBSWhFLGlCQUFpQjtJQUNqQixJQUFXLGFBQWEsS0FBb0IsT0FBTyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsVUFBVTtJQUNWLENBQUMsQ0FBQyw0RUFBNEU7SUFROUUsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osMkNBQTJDO0lBQ3BDLFdBQVc7UUFFakIsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLFVBQVU7SUFDWCxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLElBQUksaUJBQWlCLEdBQUcsS0FBdUIsQ0FBQztRQUVoRCxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBSUQsOEZBQThGO0lBQzlGLDBGQUEwRjtJQUMxRiw4RkFBOEY7SUFDOUYsMEVBQTBFO0lBQzFFLDJDQUEyQztJQUNwQyxhQUFhLENBQUUsS0FBUztRQUU5QixJQUFJLGlCQUFpQixHQUFHLEtBQXVCLENBQUM7UUFFaEQscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUzRCwwRUFBMEU7UUFDMUUsK0JBQStCO1FBQy9CLE9BQU8saUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBSUQ7O09BRUc7SUFDSyxLQUFLLENBQUMsWUFBWTtRQUV6QixJQUNBO1lBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsK0NBQStDO1lBQy9DLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUNELE9BQU8sR0FBRyxFQUNWO1lBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDbEIsT0FBTztZQUVSLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUN6QjtnQkFDQyxJQUNBO29CQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQztnQkFDRCxPQUFPLElBQUksRUFDWDtvQkFDQyxPQUFPLENBQUMsSUFBSSxDQUFFLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuRDthQUNEOztnQkFFQSxPQUFPLENBQUMsSUFBSSxDQUFFLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRW5ELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyQjtJQUNGLENBQUM7Q0FhRDtBQXpLRCx3Q0F5S0M7Ozs7Ozs7Ozs7Ozs7OztBQ2pNRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLHdHQUF3RztBQUN4RyxnRUFBZ0U7QUFDaEUsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFNLFdBQVc7SUFBakI7UUFFQyxrQkFBYSxHQUFnQixJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQy9DLGtCQUFhLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7SUFDaEQsQ0FBQztDQUFBO0FBRUQsK0VBQStFO0FBQy9FLElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxFQUFzQixDQUFDO0FBSW5ELDRFQUE0RTtBQUM1RSxTQUFnQixzQkFBc0IsQ0FBRSxFQUFVLEVBQUUsUUFBZ0I7SUFFbkUsSUFBSSxJQUFJLEdBQWdCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUN0QjtRQUNDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7SUFFbEMsNkVBQTZFO0lBQzdFLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWE7UUFDaEMsRUFBRSxDQUFDLG9CQUFvQixDQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFkRCx3REFjQztBQUlELDhFQUE4RTtBQUM5RSxTQUFnQix3QkFBd0IsQ0FBRSxFQUFVLEVBQUUsUUFBZ0I7SUFFckUsSUFBSSxJQUFJLEdBQWdCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUztRQUNyQixPQUFPO0lBRVIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7SUFFckMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNqRSxjQUFjLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1NBRTVCO1FBQ0MsNkVBQTZFO1FBQzdFLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDaEMsRUFBRSxDQUFDLG9CQUFvQixDQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzlCO0FBQ0YsQ0FBQztBQWhCRCw0REFnQkM7QUFJRCw2RUFBNkU7QUFDN0UsU0FBZ0IsdUJBQXVCLENBQUUsRUFBVSxFQUFFLFFBQWdCO0lBRXBFLElBQUksSUFBSSxHQUFnQixjQUFjLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELElBQUksSUFBSSxLQUFLLFNBQVMsRUFDdEI7UUFDQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QixjQUFjLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFWRCwwREFVQztBQUlELGlGQUFpRjtBQUNqRixTQUFnQix5QkFBeUIsQ0FBRSxFQUFVLEVBQUUsUUFBZ0I7SUFFdEUsSUFBSSxJQUFJLEdBQWdCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUztRQUNyQixPQUFPO0lBRVIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7SUFFckMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNqRSxjQUFjLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFWRCw4REFVQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEZELHNFQUFpQztBQUlqQyxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsU0FBUztJQU03QyxZQUFhLE1BQWMsRUFBRSxHQUFRLEVBQUUsSUFBYztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQWlCRCxjQUFTLEdBQUcsR0FBUyxFQUFFO1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBbEJELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU0sTUFBTTtRQUVaLE9BQU8saUJBQUssRUFBRSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQztZQUM5RixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBTztZQUM3QixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFPO1lBQzVCLGdCQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztZQUMvQixvQkFBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsY0FBa0IsQ0FDMUM7SUFDUCxDQUFDO0NBT0Q7QUE5QkQsa0NBOEJDO0FBSUQsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFNBQVM7SUFFeEMsTUFBTTtRQUVaLE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7Q0FDRDtBQU5ELHNDQU1DOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Qsc0ZBQTZEO0FBRTdELDZFQUErQjtBQUMvQiw2RUFBbUQ7QUFFbkQsaUJBQWlCO0FBQ2hCLGtGQUE0QztBQUM3QyxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiw2RkFBNkY7QUFDN0YsMEZBQTBGO0FBQzFGLGdHQUFnRztBQUNoRywwREFBMEQ7QUFDMUQsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFhLE1BQU8sU0FBUSxlQUFNO0lBRWpDLFlBQW9CLFFBQVk7UUFFL0IsS0FBSyxFQUFFLENBQUM7UUEySVQsb0VBQW9FO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUExSWhELElBQUksQ0FBQyxJQUFJLGVBQWtCLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFJRixpQkFBaUI7SUFDaEIsSUFBVyxhQUFhLEtBQW9CLE9BQU8scUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLFVBQVU7SUFFVix1RkFBdUY7SUFDdkYsdUZBQXVGO0lBQ3ZGLDBEQUEwRDtJQUMxRCxJQUFXLElBQUksS0FBYSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFJNUMsNEVBQTRFO0lBQ3JFLFVBQVUsQ0FBRSxPQUFZLEVBQUUsSUFBYTtRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUk7WUFDUCwwQkFBYyxDQUFFLElBQUksQ0FBQyxDQUFDOztZQUV0Qiw2QkFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSUQsMEZBQTBGO0lBQzFGLHNDQUFzQztJQUMvQixNQUFNO1FBRVosSUFBSSxJQUFJLENBQUMsT0FBTztZQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFFdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLGNBQWMsQ0FBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVqQixJQUFJLENBQUMsZ0JBQWdCLENBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsNEZBQTRGO0lBQzVGLHFEQUFxRDtJQUM5QyxxQkFBcUI7UUFFM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBSUQsMEZBQTBGO0lBQzFGLG9CQUFvQjtJQUNiLFdBQVcsQ0FBRSxHQUFRLEVBQUUsSUFBYztRQUUzQyxJQUFJLEdBQUcsWUFBWSxPQUFPLEVBQzFCO1lBQ0MsSUFBSSxPQUFPLEdBQUcsR0FBbUIsQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksc0JBQWEsRUFBRSxDQUFDO1NBQ3RDO2FBRUQ7WUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0JBQVcsQ0FBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQztJQUlELDZEQUE2RDtJQUN0RCxPQUFPO1FBRWIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLDZCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCxpRkFBaUY7SUFDMUUsV0FBVyxDQUFFLEdBQVEsRUFBRSxJQUFjO1FBRTNDLElBQUksQ0FBQyxXQUFXLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLDZCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCx3RkFBd0Y7SUFDeEYsWUFBWTtJQUNKLGtCQUFrQixDQUFFLE9BQXFCO1FBRWhELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUNsQztZQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLDZCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztDQWVEO0FBakpELHdCQWlKQztBQUlELElBQUkscUJBQXFCLEdBQUcseUJBQXlCLENBQUM7QUFJdEQseUZBQXlGO0FBQ3pGLHFEQUFxRDtBQUNyRCxTQUFnQixhQUFhLENBQUUsT0FBWSxFQUFFLFFBQVk7SUFFeEQsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFFM0Qsd0ZBQXdGO0lBQ3hGLFdBQVc7SUFDWCxJQUFJLE1BQU0sR0FBVyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsTUFBTSxFQUNYO1FBQ0MsK0VBQStFO1FBQy9FLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBRSxZQUFZLENBQUMsQ0FBQztRQUNsQyxZQUFvQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQ3REO0lBR0QsOERBQThEO0lBQzlELE1BQU0sQ0FBQyxVQUFVLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFqQkQsc0NBaUJDO0FBSUQsNkRBQTZEO0FBQzdELFNBQWdCLGVBQWUsQ0FBRSxRQUFZO0lBRTVDLElBQUksWUFBWSxHQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNELElBQUksQ0FBQyxZQUFZO1FBQ2hCLE9BQU87SUFFUixtRUFBbUU7SUFDbkUsSUFBSSxNQUFNLEdBQVcsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsSUFBSSxDQUFDLE1BQU07UUFDVixPQUFPO0lBRVIscUVBQXFFO0lBQ3JFLE9BQU8sWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFM0MsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQWhCRCwwQ0FnQkM7QUFJRCx5RkFBeUY7QUFDekYsZ0NBQWdDO0FBQ2hDLFNBQWdCLFNBQVMsQ0FBRSxPQUFZLEVBQUUsUUFBWTtJQUVwRCxJQUFJLFlBQVksR0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUUzRCx3RkFBd0Y7SUFDeEYsV0FBVztJQUNYLElBQUksTUFBTSxHQUFXLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxNQUFNLEVBQ1g7UUFDQywrRUFBK0U7UUFDL0UsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLFlBQW9CLENBQUMscUJBQXFCLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDdEQ7SUFFRCwwREFBMEQ7SUFDMUQsTUFBTSxDQUFDLFVBQVUsQ0FBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQWhCRCw4QkFnQkM7QUFJRCx5REFBeUQ7QUFDekQsU0FBZ0IsV0FBVyxDQUFFLFFBQVk7SUFFeEMsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDM0QsSUFBSSxDQUFDLFlBQVk7UUFDaEIsT0FBTztJQUVSLG1FQUFtRTtJQUNuRSxJQUFJLE1BQU0sR0FBVyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsTUFBTTtRQUNWLE9BQU87SUFFUixxRUFBcUU7SUFDckUsT0FBTyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUUzQywwQ0FBMEM7SUFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLHVCQUF1QixDQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBRSxDQUFDO0FBQzlELENBQUM7QUFqQkQsa0NBaUJDOzs7Ozs7Ozs7Ozs7Ozs7QUNoUUQsaUVBQStGO0FBQy9GLCtGQUF1RDtBQUN2RCw2RUFBMEQ7QUFDMUQsNkdBQTZFO0FBRTdFLGlCQUFpQjtBQUNoQixrRkFBd0U7QUFDekUsVUFBVTtBQUlWLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsMkZBQTJGO0FBQzNGLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsSUFBSyxjQWFKO0FBYkQsV0FBSyxjQUFjO0lBRWxCLCtDQUErQztJQUMvQyxtREFBUTtJQUVSLDZEQUE2RDtJQUM3RCxtRUFBWTtJQUVaLGtDQUFrQztJQUNsQyx1REFBTTtJQUVOLDREQUE0RDtJQUM1RCxpRUFBVztBQUNaLENBQUMsRUFiSSxjQUFjLEtBQWQsY0FBYyxRQWFsQjtBQUlEOzs7OztHQUtHO0FBQ0gsTUFBTSxnQkFBaUIsU0FBUSxHQUFnRDtDQUFHO0FBSWxGLCtGQUErRjtBQUMvRiwrRkFBK0Y7QUFDL0YsNkZBQTZGO0FBQzdGLGlEQUFpRDtBQUNqRCx5Q0FBeUM7QUFDekMsb0RBQW9EO0FBQ3BELG9FQUFvRTtBQUNwRSxJQUFJLHVCQUF1QixHQUFHLElBQUksR0FBRyxFQUFNLENBQUM7QUFFNUMsMkZBQTJGO0FBQzNGLDJGQUEyRjtBQUMzRiw4Q0FBOEM7QUFDOUMsSUFBSSw0QkFBNEIsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFFMUQsMEZBQTBGO0FBQzFGLDJGQUEyRjtBQUMzRiw4Q0FBOEM7QUFDOUMsSUFBSSwyQkFBMkIsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFFekQseUVBQXlFO0FBQ3pFLElBQUksc0JBQXNCLEdBQVcsQ0FBQyxDQUFDO0FBRXZDLDBCQUEwQjtBQUMxQixJQUFJLGdCQUFnQixHQUFtQixjQUFjLENBQUMsSUFBSSxDQUFDO0FBRTNELHdGQUF3RjtBQUN4Rix5RkFBeUY7QUFDekYsa0ZBQWtGO0FBQ2xGLDZCQUE2QjtBQUM3QixJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7QUFFOUIsMEZBQTBGO0FBQzFGLHdGQUF3RjtBQUN4Rix5RkFBeUY7QUFDekYsaUZBQWlGO0FBQ3RFLG1CQUFXLEdBQU8sSUFBSSxDQUFDO0FBRWxDLDJFQUEyRTtBQUNoRSwwQkFBa0IsR0FBbUIsSUFBSSxDQUFDO0FBSXJELHlGQUF5RjtBQUN6RixTQUFnQixjQUFjLENBQUUsRUFBTTtJQUVyQyx5QkFBeUI7SUFDekIsYUFBYSxFQUFFLENBQUM7SUFFaEIsaUJBQWlCO0lBQ2hCLElBQUksUUFBUSxHQUFHLHFCQUFhLENBQUMsS0FBSyxDQUFDO0lBQ25DLHFCQUFhLENBQUMsS0FBSyxHQUFHLElBQUkscUJBQWEsQ0FBRSxzQkFBc0IsYUFBYSxJQUFJLENBQUMsQ0FBQztJQUNsRixxQkFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixVQUFVO0lBRVYsSUFBSSxHQUFHLEdBQVcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFZCxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ3pDLGtCQUFrQixDQUFFLGtCQUFrQixDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFOUMsaUJBQWlCO0lBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUNoQyxxQkFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDaEMsVUFBVTtJQUVWLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFDeEMsQ0FBQztBQXZCRCx3Q0F1QkM7QUFBQSxDQUFDO0FBSUYsMENBQTBDO0FBQzFDLFNBQWdCLGlCQUFpQixDQUFFLEVBQU07SUFFeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBRSxzQ0FBc0MsY0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUM7SUFFbkgsOEVBQThFO0lBQzlFLGtGQUFrRjtJQUNsRixrREFBa0Q7SUFDbEQsdUJBQXVCLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWpDLHdGQUF3RjtJQUN4RixxRkFBcUY7SUFDckYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRixrQkFBa0I7SUFDbEIsSUFBSSxFQUFFLENBQUMsSUFBSSw0QkFBK0IsSUFBSSxFQUFFLENBQUMsSUFBSSx3QkFBMkIsRUFDaEY7UUFDQyxJQUFJLElBQUksR0FBSSxFQUE4QixDQUFDLElBQUksQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksZ0JBQWdCLEtBQUssY0FBYyxDQUFDLFlBQVk7WUFDeEUsNEJBQTRCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4RyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ25CLDJCQUEyQixDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEc7SUFFRCxnRkFBZ0Y7SUFDaEYsc0NBQXNDO0lBQ3RDLElBQUksZ0JBQWdCLEtBQUssY0FBYyxDQUFDLFlBQVk7UUFDbkQsb0JBQW9CLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBN0JELDhDQTZCQztBQUlELDJGQUEyRjtBQUMzRixxQkFBcUI7QUFDckIsU0FBZ0IsZ0JBQWdCLENBQUUsSUFBMkIsRUFBRSxZQUFxQixFQUFFLElBQWEsRUFBRSxFQUFlO0lBRW5ILGFBQWE7SUFDYixJQUFJLENBQUMsSUFBSSxFQUNUO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxrREFBa0QsQ0FBQyxDQUFDO1FBQ25FLE9BQU87S0FDUDtJQUNELFVBQVU7SUFFVixJQUFJLFlBQVksRUFDaEI7UUFDQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUM1QztZQUNDLDRCQUE0QixDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdFLCtFQUErRTtZQUMvRSxzREFBc0Q7WUFDdEQsb0JBQW9CLEVBQUUsQ0FBQztTQUN2QjtLQUNEO1NBRUQ7UUFDQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUMzQztZQUNDLDJCQUEyQixDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTVFLHVGQUF1RjtZQUN2Riw0RUFBNEU7WUFDNUUsSUFBSSxnQkFBZ0IsS0FBSyxjQUFjLENBQUMsWUFBWSxJQUFJLGdCQUFnQixLQUFLLGNBQWMsQ0FBQyxNQUFNO2dCQUNqRyxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCO0tBQ0Q7QUFDRixDQUFDO0FBakNELDRDQWlDQztBQUlEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBc0IsUUFBVyxFQUFFLElBQWEsRUFBRSxFQUFlO0lBRWxHLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFIRCxnREFHQztBQUlEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsU0FBUyxlQUFlO0lBRXZCLDBGQUEwRjtJQUMxRixpRkFBaUY7SUFDakYsSUFBSSxTQUFTLEdBQUcsbUJBQVcsQ0FBQztJQUN6QixJQUFJLGdCQUFnQixHQUFHLDBCQUFrQixDQUFDO0lBQzFDLElBQUksSUFBSSxFQUNSO1FBQ0ksbUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsMEJBQWtCLEdBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFXLENBQUMsT0FBTyxDQUFDO0tBQ3BHO0lBRUosSUFDQTtRQUNPLG1DQUFrQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDN0MsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sR0FBRyxFQUNWO1FBQ0MsSUFBSSxDQUFDLElBQUk7WUFDUixNQUFNLEdBQUcsQ0FBQzthQUVYO1lBQ0MsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxrQkFBa0IsQ0FBOEIsQ0FBQztZQUN0RixJQUFJLFlBQVk7Z0JBQ2YsWUFBWSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsY0FBUyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUVqRCxNQUFNLEdBQUcsQ0FBQztTQUNYO0tBQ0Q7WUFFRDtRQUNPLGtDQUFpQixFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLEVBQ1I7WUFDSSxrREFBa0Q7WUFDbEQsbUJBQVcsR0FBRyxTQUFTLENBQUM7WUFDeEIsMEJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7U0FDekM7S0FDUDtBQUNGLENBQUM7QUFJRCwrRkFBK0Y7QUFDL0Ysa0JBQWtCO0FBQ2xCLFNBQVMsb0JBQW9CO0lBRTVCLElBQUksc0JBQXNCLEtBQUssQ0FBQztRQUMvQixzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFJRCx5RkFBeUY7QUFDekYsSUFBSSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUU7SUFFakMsbUZBQW1GO0lBQ25GLHdCQUF3QjtJQUN4QixzQkFBc0IsR0FBRyxDQUFDLENBQUM7SUFFM0IseUJBQXlCO0lBQ3pCLGFBQWEsRUFBRSxDQUFDO0lBRWhCLHNGQUFzRjtJQUN0RixzRkFBc0Y7SUFDdEYseUZBQXlGO0lBQ3pGLHdEQUF3RDtJQUN4RCxJQUFJLDRCQUE0QixDQUFDLElBQUksR0FBRyxDQUFDLEVBQ3pDO1FBQ0MsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUMvQyxJQUFJLDBCQUEwQixHQUFHLDRCQUE0QixDQUFDO1FBQzlELDRCQUE0QixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN0RCxzQkFBc0IsQ0FBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMxRDtJQUVELElBQUksdUJBQXVCLENBQUMsSUFBSSxHQUFHLENBQUMsRUFDcEM7UUFDQyxpQkFBaUI7UUFDaEIscUJBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBYSxDQUFFLHNCQUFzQixhQUFhLElBQUksQ0FBQyxDQUFDO1FBQ2xGLHFCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLFVBQVU7UUFFVixrRkFBa0Y7UUFDbEYsd0ZBQXdGO1FBQ3hGLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxxQkFBcUIsR0FBRyx1QkFBdUIsQ0FBQztRQUNwRCx1QkFBdUIsR0FBRyxJQUFJLEdBQUcsRUFBTSxDQUFDO1FBQ3hDLGtCQUFrQixDQUFFLGtCQUFrQixDQUFFLG1CQUFtQixDQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRGLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMscUJBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFVBQVU7S0FDVjtJQUVELG1FQUFtRTtJQUNuRSxJQUFJLDJCQUEyQixDQUFDLElBQUksR0FBRyxDQUFDLEVBQ3hDO1FBQ0MsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDO1FBQzVELDJCQUEyQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNyRCxzQkFBc0IsQ0FBRSx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUVELGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBSUYsOEZBQThGO0FBQzlGLHNEQUFzRDtBQUN0RCxvRkFBb0Y7QUFDcEYsd0NBQXdDO0FBQ3hDLCtFQUErRTtBQUMvRSx1RkFBdUY7QUFDdkYsNkVBQTZFO0FBQzdFLFNBQVMsbUJBQW1CLENBQUUscUJBQThCO0lBRTNELG9CQUFvQjtJQUNuQixJQUFJLEtBQUssR0FBRyxhQUFhLHFCQUFxQixDQUFDLElBQUksaUJBQWlCLENBQUM7SUFDckUsT0FBTyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUN0QixVQUFVO0lBRVYseUZBQXlGO0lBQ3pGLDZGQUE2RjtJQUM3RixJQUFJLFVBQVUsR0FBVyxJQUFJLEtBQUssQ0FBTyxHQUFHLENBQUMsQ0FBQztJQUM5QyxxQkFBcUIsQ0FBQyxPQUFPLENBQUUsQ0FBQyxFQUFNLEVBQUUsRUFBRTtRQUV6QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDM0I7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFFSCxvQkFBb0I7SUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUN6QixVQUFVO0lBRVYsT0FBTyxVQUFVLENBQUM7QUFDbkIsQ0FBQztBQUlELDZGQUE2RjtBQUM3Rix1RkFBdUY7QUFDdkYsU0FBUyxrQkFBa0IsQ0FBRSxVQUFrQjtJQUU5QyxJQUFJLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztJQUVwQyxtREFBbUQ7SUFDbkQsSUFBSSxJQUFZLENBQUM7SUFDakIsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEdBQVMsRUFBRSxFQUFFO1FBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEVBQU0sRUFBRSxFQUFFO1lBRTVELElBQ0E7Z0JBQ0MsNkRBQTZEO2dCQUM3RCxFQUFFLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFFM0IsNEVBQTRFO2dCQUM1RSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEtBQUssYUFBYTtvQkFDdEMsT0FBTztnQkFFUixJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUUsRUFBRSxtQkFBd0IsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELGFBQWEsQ0FBRSxJQUFJLENBQUMsQ0FBQztnQkFDckIsZ0JBQWdCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxHQUFHLEVBQ1Y7Z0JBQ0MsNkVBQTZFO2dCQUM3RSx3QkFBd0I7Z0JBQ3hCLElBQUksWUFBWSxHQUE4QixFQUFFLENBQUMsVUFBVSxDQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxZQUFZO29CQUNmLFlBQVksQ0FBQyxXQUFXLENBQUUsR0FBRyxFQUFFLG1CQUFXLENBQUMsQ0FBQyxDQUFDLGNBQVMsQ0FBRSxtQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztvQkFFN0UsTUFBTSxHQUFHLENBQUM7YUFDWDtZQUVELG1CQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQyxDQUFDO0lBRUwsT0FBTyxnQkFBZ0IsQ0FBQztBQUN6QixDQUFDO0FBSUQsOEZBQThGO0FBQzlGLDhGQUE4RjtBQUM5RiwrQ0FBK0M7QUFDL0MsU0FBUyxrQkFBa0IsQ0FBRSxnQkFBMEI7SUFFdEQsdUZBQXVGO0lBQ3ZGLGdCQUFnQixDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQVksRUFBRSxFQUFFO1FBRTFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFJRCx5REFBeUQ7QUFDekQsU0FBUyxzQkFBc0IsQ0FBRSxLQUF1QixFQUFFLFlBQXFCO0lBRTlFLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFaEMsSUFDQTtZQUNDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFDRCxPQUFPLEdBQUcsRUFDVjtZQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUscUNBQXFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BIO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBSUQsc0ZBQXNGO0FBQ3RGLHVGQUF1RjtBQUN2Rix5RUFBeUU7QUFDekUsc0ZBQXNGO0FBQ3RGLHdGQUF3RjtBQUN4Rix3RkFBd0Y7QUFDeEYscUNBQXFDO0FBQ3JDLFNBQVMsYUFBYSxDQUFFLEVBQU0sRUFBRSxNQUFVO0lBRXpDLEVBQUUsQ0FBQyxJQUFJLENBQUUsTUFBTSxFQUFFLDBCQUFrQixDQUFDLENBQUM7SUFFckMsNERBQTREO0lBQzVELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNuQixtQkFBVyxHQUFHLFNBQVMsQ0FBQztJQUV4QixJQUFJLGdCQUFnQixHQUFHLDBCQUFrQixDQUFDO0lBQzFDLElBQUssRUFBVSxDQUFDLElBQUk7UUFDbkIsMEJBQWtCLEdBQUksRUFBVSxDQUFDLElBQUksQ0FBQztJQUV2QyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQ2hCO1FBQ0Msb0JBQW9CO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsd0NBQXdDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLFVBQVU7UUFFVixJQUNBO1lBQ0MsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEdBQUcsRUFDVjtZQUNDLElBQUksRUFBRSxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUMxRDtnQkFDQyxvQkFBb0I7Z0JBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsMENBQTBDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRSxVQUFVO2dCQUVWLGtEQUFrRDtnQkFDbEQsRUFBRSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsY0FBUyxDQUFFLG1CQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDZjs7Z0JBRUEsTUFBTSxHQUFHLENBQUM7U0FDWDtLQUNEO0lBRUQsNkZBQTZGO0lBQzdGLElBQUksRUFBRSxDQUFDLE1BQU0sRUFDYjtRQUNDLElBQ0E7WUFDQyxxQkFBcUIsQ0FBRSxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sR0FBRyxFQUNWO1lBQ0MsSUFBSSxFQUFFLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFLEVBQzFEO2dCQUNDLG9CQUFvQjtnQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSwwQ0FBMEMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JFLFVBQVU7Z0JBRVYsa0RBQWtEO2dCQUNsRCxFQUFFLENBQUMsV0FBVyxDQUFFLEdBQUcsRUFBRSxjQUFTLENBQUUsbUJBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLHFCQUFxQixDQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNCOztnQkFFQSxNQUFNLEdBQUcsQ0FBQztTQUNYO0tBQ0Q7SUFFRCx3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLG1GQUFtRjtJQUNuRix1REFBdUQ7SUFDdkQsbUJBQVcsR0FBRyxTQUFTLENBQUM7SUFDeEIsMEJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7QUFDdkMsQ0FBQztBQUlELHdFQUF3RTtBQUN4RSxTQUFTLHFCQUFxQixDQUFFLEVBQU07SUFFckMsa0VBQWtFO0lBQ2xFLEVBQUUsQ0FBQyxRQUFRLEdBQUcsdUNBQXdCLENBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckQsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUNmO1FBQ0MsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUV0QyxJQUFJLE1BQVUsQ0FBQztRQUNmLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDM0I7WUFDQyxhQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXhCLElBQUksRUFBRSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUMxRCxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRXJDLElBQUksTUFBTSxFQUNWO2dCQUNDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUNsQjtZQUVELE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDYjtLQUNEO0FBQ0YsQ0FBQztBQUlELCtEQUErRDtBQUMvRCxTQUFTLGNBQWMsQ0FBRSxFQUFNLEVBQUUsUUFBWSxFQUFFLFFBQVk7SUFFMUQsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBRXZCLG9CQUFvQjtJQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLG9DQUFvQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRCxVQUFVO0lBQ1YsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFOUMsNERBQTREO0lBQzVELElBQUksS0FBSztRQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU1QyxxRkFBcUY7SUFDckYsa0RBQWtEO0lBQ2xELElBQUksRUFBRSxDQUFDLFFBQVEsRUFDZjtRQUNDLHVFQUF1RTtRQUN2RSxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFMUMsc0JBQXNCO1FBQ3RCLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVE7WUFDMUIsY0FBYyxDQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxvQkFBb0I7SUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSx1Q0FBdUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEUsVUFBVTtJQUNQLElBQUksRUFBRSxDQUFDLFFBQVE7UUFDWCxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUlELDhEQUE4RDtBQUM5RCxTQUFTLFVBQVUsQ0FBRSxFQUFNO0lBRTFCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDZjtRQUNDLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVE7WUFDMUIsVUFBVSxDQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUNsQjtRQUNDLG9CQUFvQjtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLDBDQUEwQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRSxVQUFVO1FBRVYsSUFDQTtZQUNDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU8sR0FBRyxFQUNWO1lBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixHQUFHLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2xGO0tBQ0Q7QUFDRixDQUFDO0FBSUQsNEVBQTRFO0FBQzVFLFNBQVMsZUFBZSxDQUFFLEVBQU07SUFFL0IsMEVBQTBFO0lBQzFFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFFckIsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUNkO1FBQ0Msb0JBQW9CO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsc0NBQXNDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLFVBQVU7UUFDVixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELDBGQUEwRjtJQUMxRixxRkFBcUY7SUFDckYsSUFBSSxLQUFLO1FBQ1AsS0FBMEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQ3BCO1FBQ0MscUZBQXFGO1FBQ3JGLFVBQVU7UUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM5QyxlQUFlLENBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVYsRUFBRSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDekIsQ0FBQztBQUlELHVGQUF1RjtBQUN2Riw0RkFBNEY7QUFDNUYsNkZBQTZGO0FBQzdGLDhGQUE4RjtBQUM5Riw0RkFBNEY7QUFDNUYsOEZBQThGO0FBQzlGLCtEQUErRDtBQUMvRCxTQUFTLGFBQWEsQ0FBRSxJQUFZO0lBRW5DLDBFQUEwRTtJQUMxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXBCLDREQUE0RDtJQUM1RCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbkIsbUJBQVcsR0FBRyxTQUFTLENBQUM7SUFFeEIsSUFBSSxnQkFBZ0IsR0FBRywwQkFBa0IsQ0FBQztJQUMxQyxJQUFLLEVBQVUsQ0FBQyxJQUFJO1FBQ25CLDBCQUFrQixHQUFJLEVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFdkMsSUFDQTtRQUNDLHFCQUFxQixDQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxHQUFHLEVBQ1Y7UUFDQyxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFDMUQ7WUFDQyxvQkFBb0I7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSwwQ0FBMEMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsVUFBVTtZQUVWLGtEQUFrRDtZQUNsRCxFQUFFLENBQUMsV0FBVyxDQUFFLEdBQUcsRUFBRSxjQUFTLENBQUUsbUJBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUMscUJBQXFCLENBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7O1lBRUEsTUFBTSxHQUFHLENBQUM7S0FDWDtJQUVELGdGQUFnRjtJQUNoRixpQ0FBaUM7SUFDakMsRUFBRSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFFbEMsdUZBQXVGO0lBQ3ZGLG1CQUFXLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLDBCQUFrQixHQUFHLGdCQUFnQixDQUFDO0FBQ3ZDLENBQUM7QUFJRCwwRkFBMEY7QUFDMUYsNENBQTRDO0FBQzVDLFNBQVMscUJBQXFCLENBQUUsSUFBWTtJQUUzQyxvRkFBb0Y7SUFDcEYsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFFaEMsNENBQTRDO0lBQzVDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUN6QjtRQUNDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUNwQyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFFRCwrRUFBK0U7SUFDL0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUNyQjtRQUNDLElBQUksS0FBUyxFQUFFLEtBQVMsQ0FBQztRQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFCLEtBQUssSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksRUFDekM7WUFDQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLFdBQVcsQ0FBQyxNQUFNLG1CQUF3QixFQUM5QztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGFBQWEsRUFDcEU7b0JBQ0Msb0JBQW9CO29CQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLDRDQUE0QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDMUUsVUFBVTtvQkFDVixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3JELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZO3dCQUN0QyxhQUFhLENBQUUsV0FBVyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Q7aUJBQ0ksSUFBSSxXQUFXLENBQUMsTUFBTSxtQkFBd0I7Z0JBQ2xELGFBQWEsQ0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDakM7S0FDRDtBQUNGLENBQUM7QUFJRCwrRUFBK0U7QUFDL0UsU0FBUyxjQUFjLENBQUUsSUFBWTtJQUVwQyx5RkFBeUY7SUFDekYseUZBQXlGO0lBQ3pGLHFGQUFxRjtJQUNyRixjQUFjO0lBQ2QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQ3pCO1FBQ0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3BDLGVBQWUsQ0FBRSxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUVELG9GQUFvRjtJQUNwRixzQkFBc0I7SUFDdEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUVwQix1RkFBdUY7SUFDdkYsa0RBQWtEO0lBQ2xELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtRQUNmLE9BQU87SUFFUix1RkFBdUY7SUFDdkYsMEZBQTBGO0lBQzFGLG1EQUFtRDtJQUNuRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3JCLElBQUksUUFBUSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUVuRCxzRkFBc0Y7SUFDdEYsZ0ZBQWdGO0lBQ2hGLG1EQUFtRDtJQUNuRCxJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLCtCQUEwQixDQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVoRixvRkFBb0Y7SUFDcEYsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEYsRUFBRSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUV2RyxvRUFBb0U7SUFDcEUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUN0QjtRQUNDLHNCQUFzQixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZGLGFBQWEsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RTtTQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFDMUI7UUFDQyxxQkFBcUIsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbEU7QUFDRixDQUFDO0FBSUQsb0RBQW9EO0FBQ3BELFNBQVMscUJBQXFCLENBQUUsUUFBWSxFQUFFLEtBQWUsRUFBRSxRQUFZLEVBQUUsUUFBWTtJQUV4Rix1RkFBdUY7SUFDdkYsdUZBQXVGO0lBQ3ZGLHlFQUF5RTtJQUN6RSxJQUFJLE1BQVUsRUFBRSxHQUFPLEVBQUUsSUFBWSxFQUFFLEtBQVMsRUFBRSxLQUFTLEVBQUUsT0FBVyxDQUFDO0lBQ3pFLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDMUM7UUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRW5CLHNGQUFzRjtRQUN0RixrQ0FBa0M7UUFDbEMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLG1CQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxNQUFNLG1CQUF3QixFQUN2QztZQUNDLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUMzQztnQkFDQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUNoQztvQkFDQyxvQkFBb0I7b0JBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsMkNBQTJDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUN6RSxVQUFVO29CQUVWLEtBQUssQ0FBQyxZQUFZLENBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzNCO2dCQUVELG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVk7b0JBQy9CLGNBQWMsQ0FBRSxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELGlFQUFpRTtZQUNqRSxJQUFJLFVBQVUsR0FBRyxvQkFBZSxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pCO2dCQUNDLHVGQUF1RjtnQkFDdkYsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUM5RDtvQkFDQyxLQUFLLElBQUksU0FBUyxJQUFJLFVBQVUsRUFDaEM7d0JBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRTVDLGlCQUFpQjt3QkFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsR0FBRyxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hFLFVBQVU7cUJBQ1Y7b0JBRUQsaUJBQWlCO29CQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRSxVQUFVO2lCQUNWO2dCQUVELGtEQUFrRDtnQkFDbEQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNEO2FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxtQkFBd0IsRUFDNUM7WUFDQyw4RUFBOEU7WUFDOUUsMkNBQTJDO1lBQzNDLGNBQWMsQ0FBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLDJFQUEyRTtZQUMzRSwyQ0FBMkM7WUFDM0MsT0FBTyxHQUFHLGVBQVUsQ0FBRSxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLE9BQU8sSUFBSSxJQUFJO2dCQUNsQixRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDaEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUzQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLElBQUksTUFBTSxFQUNWO1lBQ0MsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDbEI7UUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDO0tBQ2I7QUFDRixDQUFDO0FBSUQsMEZBQTBGO0FBQzFGLCtEQUErRDtBQUMvRCxTQUFTLHNCQUFzQixDQUFFLFFBQVksRUFBRSxLQUFlLEVBQUUsTUFBcUIsRUFBRSxRQUFZLEVBQUUsUUFBWTtJQUVoSCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksTUFBVSxFQUFFLEdBQU8sRUFBRSxJQUFZLEVBQUUsS0FBUyxFQUFFLEtBQVMsRUFBRSxPQUFXLENBQUM7SUFDekUsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUMzQztRQUNDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixpRUFBaUU7UUFDakUsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUM5QztZQUNDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbkIsc0ZBQXNGO1lBQ3RGLGtDQUFrQztZQUNsQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sbUJBQXdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUU1QyxJQUFJLEtBQUssQ0FBQyxNQUFNLG1CQUF3QixFQUN4QztnQkFDQyxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxLQUFLLEtBQUssRUFDM0M7b0JBQ0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFDaEM7d0JBQ0Msb0JBQW9CO3dCQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLDJDQUEyQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDekUsVUFBVTt3QkFFVixLQUFLLENBQUMsWUFBWSxDQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUMzQjtvQkFFRCxvQ0FBb0M7b0JBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3dCQUMvQixjQUFjLENBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELE9BQU8sR0FBRyxlQUFVLENBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksT0FBTyxJQUFJLElBQUk7b0JBQ2xCLFFBQVEsR0FBRyxPQUFPLENBQUM7YUFDcEI7aUJBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxtQkFBd0IsRUFDN0M7Z0JBQ0MsY0FBYyxDQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRTNDLDJFQUEyRTtnQkFDM0UsMkNBQTJDO2dCQUMzQyxPQUFPLEdBQUcsZUFBVSxDQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLE9BQU8sSUFBSSxJQUFJO29CQUNsQixRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ2hFLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFM0MsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLE1BQU0sRUFDVjtnQkFDQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7YUFDbEI7WUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2I7UUFFRCxrRkFBa0Y7UUFDbEYsbUNBQW1DO1FBQ25DLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyQix3RkFBd0Y7UUFDeEYsa0RBQWtEO1FBQ2xELElBQUksS0FBSyxDQUFDLE9BQU87WUFDaEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDMUI7QUFDRixDQUFDO0FBSUQscUZBQXFGO0FBQ3JGLFNBQVMsYUFBYSxDQUFFLFFBQVksRUFBRSxLQUFlLEVBQUUsTUFBcUIsRUFBRSxRQUFZLEVBQUUsUUFBWTtJQUV2Ryw0RkFBNEY7SUFDNUYsNkZBQTZGO0lBQzdGLDJGQUEyRjtJQUMzRixvRUFBb0U7SUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUMxQztRQUNDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLGdGQUFnRjtRQUNoRiwrREFBK0Q7UUFDL0QsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksRUFDeEI7WUFDQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFDekM7Z0JBQ0MsOEVBQThFO2dCQUM5RSxpRkFBaUY7Z0JBQ2pGLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLO29CQUNsRixTQUFTLENBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7b0JBRWhFLFNBQVMsQ0FBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDeEQ7WUFFRCxrRkFBa0Y7WUFDbEYsNkJBQTZCO1lBQzdCLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3pCO0tBQ0Q7QUFDRixDQUFDO0FBSUQsb0VBQW9FO0FBQ3BFLFNBQVMsU0FBUyxDQUFFLFFBQVksRUFBRSxLQUFlLEVBQUUsS0FBa0IsRUFBRSxRQUFZLEVBQUUsUUFBWTtJQUVoRyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQzlDO1FBQ0MsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sbUJBQXdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkYsSUFBSSxVQUFVLEdBQUcsb0JBQWUsQ0FBRSxTQUFTLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksU0FBUyxJQUFJLFVBQVUsRUFDaEM7WUFDQyxRQUFRLENBQUMsWUFBWSxDQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU1QyxpQkFBaUI7WUFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsR0FBRyxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsVUFBVTtTQUNWO1FBRUQsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUMsYUFBYSxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsVUFBVTtLQUVWO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNy9CRCx3REFBNkI7QUFDN0Isc0ZBQTRDO0FBSTVDOzs7R0FHRztBQUNILE1BQU0sY0FBYztJQUtoQjs7O09BR0c7SUFDSSxJQUFJLENBQUUsV0FBdUI7UUFFaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVKOztPQUVHO0lBQ08saUJBQWlCO1FBRTFCLDRCQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFSjs7T0FFRztJQUNPLGVBQWU7SUFFdEIsQ0FBQztJQUdKOztPQUVHO0lBQ0ssUUFBUTtRQUVmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0Q7QUFJRDs7R0FFRztBQUNILFNBQWdCLDZCQUE2QjtJQUV6QyxJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBRSxhQUFhLENBQUMsQ0FBQztJQUM1QyxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBTEQsc0VBS0M7Ozs7Ozs7Ozs7Ozs7OztBQ3pERCxpRUFBeUM7QUFDekMsNkVBQStCO0FBRS9CLGlCQUFpQjtBQUNoQixrRkFBd0U7QUFDekUsVUFBVTtBQUlWOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsZUFBTTtJQVVqQyxZQUFhLElBQVk7UUFFeEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxlQUFrQixDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBSUgsaUJBQWlCO0lBQ2hCLElBQVcsYUFBYSxLQUFvQixPQUFPLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxVQUFVO0lBSVQsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJLEtBQWEsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTdDLDJGQUEyRjtJQUMzRixhQUFhO0lBQ2IsSUFBVyxLQUFLLEtBQVMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFJakQsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxLQUFLO1FBRVgsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLFVBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUlELHdEQUF3RDtJQUN4RCwyQ0FBMkM7SUFDcEMsT0FBTztRQUViLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRTFCLGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsa0NBQWtDO1FBQ2xDLE9BQU8saUJBQVksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLElBQUksS0FBTSxLQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBSUQsNENBQTRDO0lBQ3JDLFlBQVksQ0FBRSxLQUFTO1FBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUksS0FBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFN0QsaUJBQWlCO1FBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLFVBQVU7SUFDWCxDQUFDO0NBQ0Q7QUFwRkQsd0JBb0ZDOzs7Ozs7Ozs7Ozs7Ozs7QUNzRUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiwwRkFBMEY7QUFDMUYsK0VBQStFO0FBQy9FLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBYSxZQUFZO0lBV3hCLFlBQWEsWUFBcUIsRUFBRSxZQUFxQjtRQUV4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBT00sTUFBTSxDQUFDLGFBQWEsQ0FBRSxZQUFxQixFQUFFLFlBQXFCO1FBRXhFLE9BQU8sWUFBWTtZQUNsQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7WUFDOUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDakYsQ0FBQzs7QUEzQkYsb0NBNEJDO0FBWGMsNkJBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pELDZCQUFnQixHQUFHLElBQUksWUFBWSxDQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRCw2QkFBZ0IsR0FBRyxJQUFJLFlBQVksQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsNkJBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBUWpFLENBQUM7QUFJRiwwRkFBMEY7QUFDMUYsbURBQW1EO0FBQ25ELFNBQWdCLFVBQVUsQ0FBRSxFQUFNO0lBRWpDLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDWixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFFYixzRkFBc0Y7SUFDdEYsY0FBYztJQUNkLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUMzQjtRQUNDLEVBQUUsR0FBRyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQWxCRCxnQ0FrQkM7QUFJRCx5RkFBeUY7QUFDekYsbURBQW1EO0FBQ25ELFNBQWdCLFNBQVMsQ0FBRSxFQUFNO0lBRWhDLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDWixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFFYixzRkFBc0Y7SUFDdEYsY0FBYztJQUNkLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDaEQ7UUFDQyxFQUFFLEdBQUcsU0FBUyxDQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLEVBQUUsSUFBSSxJQUFJO1lBQ2IsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQWxCRCw4QkFrQkM7QUFJRCwyRkFBMkY7QUFDM0Ysa0ZBQWtGO0FBQ2xGLFNBQWdCLGVBQWUsQ0FBRSxFQUFNO0lBRXRDLElBQUksR0FBRyxHQUFTLEVBQUUsQ0FBQztJQUNuQixtQkFBbUIsQ0FBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBTEQsMENBS0M7QUFJRCxvRkFBb0Y7QUFDcEYsb0ZBQW9GO0FBQ3BGLFNBQVMsbUJBQW1CLENBQUUsRUFBTSxFQUFFLEdBQVM7SUFFOUMsSUFBSSxFQUFFLENBQUMsS0FBSztRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDcEI7UUFDQyxtRUFBbUU7UUFDbkUsS0FBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUTtZQUMxQixtQkFBbUIsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDaEM7QUFDRixDQUFDO0FBSUQsNEZBQTRGO0FBQzVGLDRGQUE0RjtBQUM1Rix3RkFBd0Y7QUFDeEYsOEZBQThGO0FBQzlGLDBGQUEwRjtBQUMxRiwyRkFBMkY7QUFDM0Ysb0VBQW9FO0FBQ3BFLFNBQWdCLDBCQUEwQixDQUFFLEVBQU0sRUFBRSxRQUFZO0lBRS9ELHNGQUFzRjtJQUN0RixtQ0FBbUM7SUFDbkMsSUFBSSxFQUFFLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekM7UUFDQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksRUFBRSxFQUNOO1lBQ0MsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNqQyxJQUFJLFdBQVcsS0FBSyxJQUFJO2dCQUN2QixPQUFPLFdBQVcsQ0FBQztTQUNwQjtLQUNEO0lBRUQsOEJBQThCO0lBQzlCLEtBQUssSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUN6RDtRQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUTtZQUNoQixPQUFPLElBQUksQ0FBQztRQUViLCtFQUErRTtRQUMvRSxrRkFBa0Y7UUFDbEYsb0RBQW9EO1FBQ3BELE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsa0NBQWtDO0lBQ2xDLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMvRyxDQUFDO0FBL0JELGdFQStCQztBQUlELHVGQUF1RjtBQUN2RixTQUFnQixTQUFTLENBQUUsRUFBTTtJQUVoQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3JCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQzlEO1FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25HO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBVkQsOEJBVUM7Ozs7Ozs7Ozs7Ozs7OztBQzdVRCxzRUFBaUM7QUFFakMsc0ZBQW1GO0FBQ25GLDZFQUE2SDtBQUk3SCxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixtRUFBbUU7QUFDbkUsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFzQixNQUFNO0lBbUQzQix3RkFBd0Y7SUFDeEYsZ0ZBQWdGO0lBQ3pFLElBQUksQ0FBRSxNQUFjLEVBQUUsT0FBdUI7UUFFbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBSUQsbURBQW1EO0lBQzVDLElBQUk7UUFFVixpRUFBaUU7UUFDakUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUN4QztZQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQ3pDO1lBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLGtDQUF5QixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFJRCx1REFBdUQ7SUFDdkQsSUFBVyxTQUFTLEtBQWMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFJM0QscUNBQXFDO0lBQzlCLGFBQWE7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQ3pCO1lBQ0MsNkJBQWlCLENBQUUsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBSUQ7Ozs7O09BS0c7SUFDSSx3QkFBd0IsQ0FBRSxJQUEyQixFQUFFLElBQWE7UUFFMUUsNEJBQWdCLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUlEOzs7OztPQUtHO0lBQ0ksdUJBQXVCLENBQUUsSUFBMkIsRUFBRSxJQUFhO1FBRXpFLDRCQUFnQixDQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCw0RkFBNEY7SUFDNUYsbUNBQW1DO0lBQzVCLGNBQWMsQ0FBRSxFQUFVLEVBQUUsT0FBWTtRQUU5QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTO1lBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBYyxDQUFDO1FBRWhELElBQUksY0FBYyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUM5QjtZQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLCtCQUFzQixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7SUFJRCwyQ0FBMkM7SUFDcEMsZ0JBQWdCLENBQUUsRUFBVTtRQUVsQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTO1lBQ3ZDLE9BQU87UUFFUixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLGlDQUF3QixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysb0ZBQW9GO0lBQ3BGLDBGQUEwRjtJQUMxRixxRkFBcUY7SUFDckYsc0RBQXNEO0lBQy9DLGdCQUFnQixDQUFFLEVBQVUsRUFBRSxHQUFvQixFQUFFLGNBQW9CLEVBQUUsT0FBaUI7UUFFakcsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7UUFFckUsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXRDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLGdDQUF1QixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFFLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJQSw0RkFBNEY7SUFDNUYsNEJBQTRCO0lBQ3JCLGtCQUFrQixDQUFFLEVBQVU7UUFFcEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUN4QyxPQUFPO1FBRVIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksS0FBSyxTQUFTO1lBQ3JCLE9BQU87UUFFUixHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUNwQyxrQ0FBeUIsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBSUQsdUZBQXVGO0lBQ3ZGLG9GQUFvRjtJQUNwRiw2RkFBNkY7SUFDdEYsVUFBVSxDQUFFLEVBQVUsRUFBRSxjQUFvQixFQUFFLE9BQWlCO1FBRXJFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDekQsQ0FBQztJQUlELHdGQUF3RjtJQUN4RixnRkFBZ0Y7SUFDeEUsV0FBVyxDQUFFLEVBQVUsRUFBRSxPQUFpQjtRQUVqRCxJQUFJLE9BQU8sRUFDWDtZQUNDLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsRUFDeEM7Z0JBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxPQUFPLEtBQUssU0FBUztvQkFDeEIsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRDtRQUVELHFFQUFxRTtRQUNyRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JFLENBQUM7SUFJRCw0RkFBNEY7SUFDNUYsMENBQTBDO0lBQ25DLG9CQUFvQixDQUFFLEVBQVU7UUFFdEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUN4QyxPQUFPO1FBRVIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksS0FBSyxTQUFTO1lBQ3JCLE9BQU87UUFFUixHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUlEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksWUFBWSxDQUFzQixRQUFXLEVBQUUsSUFBYTtRQUVsRSxPQUFPLDhCQUFrQixDQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQVNEO0FBdFJELHdCQXNSQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsTUFBTSx1QkFBdUI7Q0FhNUI7Ozs7Ozs7Ozs7Ozs7OztBQzVURCxpRUFBZ0U7QUFDaEUsK0ZBQXVEO0FBZ0N2RDs7OztHQUlHO0FBQ0gsTUFBYSxXQUFXO0lBeUJ2QixZQUFhLFVBQWtCLEVBQUUsTUFBb0IsRUFBRSxLQUFhLEVBQUUsSUFBYTtRQUVsRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBakJELG9DQUFvQztJQUNwQyxJQUFXLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUMsQ0FBQztJQUFBLENBQUM7SUFvQmpFOzs7T0FHRztJQUNJLFlBQVk7UUFFbEIsSUFBSSxJQUFZLENBQUM7UUFDakIsSUFBSSxFQUFNLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQzVDO1lBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQVUsQ0FBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUNmLE1BQU07U0FDUDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDNUM7WUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLG1CQUF3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBUyxDQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQ2QsTUFBTTtTQUNQO0lBQ0YsQ0FBQztDQUNEO0FBN0RELGtDQTZEQztBQUlEOzs7R0FHRztBQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBSTdCOzs7R0FHRztBQUNILE1BQWEsTUFBTTtJQUVsQixZQUFhLEtBQVMsRUFBRSxNQUFNLGtCQUF1QixFQUFFLEtBQVU7UUFFaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQTRCRDs7Ozs7O09BTUc7SUFDSSx3QkFBd0I7UUFFOUIseUJBQXlCO1FBQ3pCLElBQUksUUFBUSxHQUFHLHVDQUF3QixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxzRUFBc0U7UUFDdEUsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQ2hDO1lBQ0Msb0NBQW9DO1lBQ3BDLE9BQU87U0FDUDthQUNJLElBQUksTUFBTSxLQUFLLENBQUMsRUFDckI7WUFDQyw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxPQUFPO1NBQ1A7YUFDSSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQ3JCO1lBQ0MsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFFLEtBQUssaUJBQXNCLENBQUMsQ0FBQztZQUNwRixJQUFJLE1BQU0sR0FBRyxrQkFBa0I7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBRSxJQUFJLGtCQUF1QixDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkYsT0FBTztTQUNQO1FBRUQsc0ZBQXNGO1FBQ3RGLGtGQUFrRjtRQUNsRix3QkFBd0I7UUFDeEIsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RSxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsdUJBQXVCLEtBQUssU0FBUztZQUN6RSx1QkFBdUIsR0FBRyxjQUFjLENBQUMsdUJBQXVCLENBQUM7UUFFbEUsa0ZBQWtGO1FBQ2xGLHlDQUF5QztRQUN6QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFDaEM7WUFDQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssS0FBSyxLQUFLO2dCQUNsQixDQUFDLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQzFGO2dCQUNDLElBQUksQ0FBQyxNQUFNLGlCQUFzQixDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFFRDtnQkFDQyxJQUFJLENBQUMsTUFBTSxpQkFBc0IsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7WUFFRCxPQUFPO1NBQ1A7UUFFRCwyRkFBMkY7UUFDM0YsdURBQXVEO1FBQ3ZELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFM0Isd0ZBQXdGO1FBQ3hGLHVGQUF1RjtRQUN2RiwwRkFBMEY7UUFDMUYsOENBQThDO1FBQzlDLElBQUksVUFBVSxLQUFLLE1BQU0sSUFBSSxDQUFDLHVCQUF1QjtZQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUM7YUFDM0UsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLHVCQUF1QjtZQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxDQUFDOztZQUU1RixJQUFJLENBQUMsYUFBYSxDQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxHQUFHLGtCQUFrQixDQUFDLENBQUM7UUFFdkgsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBSUQ7Ozs7O09BS0c7SUFDSyxpQkFBaUIsQ0FBRSxNQUFtQixFQUFFLFFBQWMsRUFBRSxNQUFjLEVBQUUsV0FBb0I7UUFFbkcsb0VBQW9FO1FBQ3BFLElBQUksSUFBWSxFQUFFLEtBQVMsRUFBRSxLQUFTLEVBQUUsR0FBUSxFQUFFLE1BQW9CLEVBQUUsS0FBa0IsQ0FBQztRQUUzRixzREFBc0Q7UUFDdEQsSUFBSSxXQUFXO1lBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFekIsdUZBQXVGO1FBQ3ZGLHdGQUF3RjtRQUN4RixxRkFBcUY7UUFDckYsK0NBQStDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9CO1lBQ0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUVoQixzQ0FBc0M7WUFDdEMsSUFBSSxHQUFHLEtBQUssU0FBUztnQkFDcEIsTUFBTSxpQkFBc0IsQ0FBQztpQkFFOUI7Z0JBQ0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDO2dCQUN4QixJQUFJLEtBQUssS0FBSyxTQUFTO29CQUN0QixNQUFNLGlCQUFzQixDQUFDO3FCQUU5QjtvQkFDQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksZ0JBQWdCLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUN0RDt3QkFDQyxNQUFNLGlCQUFzQixDQUFDO3dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztxQkFDbkI7eUJBRUQ7d0JBQ0MsTUFBTSxpQkFBc0IsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsNkVBQTZFO29CQUM3RSxvQ0FBb0M7b0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0Q7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixJQUFJLFdBQVcsRUFDZjtnQkFDQyxJQUFJLENBQUMsS0FBSyxFQUNWO29CQUNDLG1CQUFtQjtvQkFDbkIsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNoQztnQkFFRCxJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUMzQjtvQkFDQyw2RUFBNkU7b0JBQzdFLDBFQUEwRTtvQkFDMUUsK0JBQStCO29CQUMvQixLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEM7cUJBQ0ksSUFBSSxNQUFNLG1CQUF3QixFQUN2QztvQkFDQyxtRkFBbUY7b0JBQ25GLHVGQUF1RjtvQkFDdkYsMERBQTBEO29CQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQ3hEO3dCQUNDLDhEQUE4RDt3QkFDOUQsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ2hDO2lCQUNEO2dCQUVELGtGQUFrRjtnQkFDbEYsWUFBWTthQUNaO1NBQ0Q7UUFFRCxtR0FBbUc7UUFDbkcsSUFBSSxLQUFLO1lBQ1IsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLG9EQUFvRDtRQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRDs7OztPQUlHO0lBQ0ssb0JBQW9CLENBQUUsUUFBYyxFQUFFLE1BQWMsRUFBRSxRQUFjLEVBQUUsTUFBYyxFQUFFLFdBQW9CO1FBRWpILG9FQUFvRTtRQUNwRSxJQUFJLElBQVksRUFBRSxLQUFTLEVBQUUsS0FBUyxFQUFFLEdBQVEsQ0FBQztRQUVqRCxzRkFBc0Y7UUFDdEYsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNwQztZQUNDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQixzQ0FBc0M7WUFDdEMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLGdCQUFnQixDQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFDdEQ7Z0JBQ0MsSUFBSSxDQUFDLE1BQU0saUJBQXNCLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ25CO2lCQUVEO2dCQUNDLElBQUksQ0FBQyxNQUFNLGlCQUFzQixDQUFDO2dCQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Q7UUFFRCx5Q0FBeUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFzQixDQUFDO1FBRXRFLHdDQUF3QztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksV0FBVztZQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFJRDs7Ozs7O09BTUc7SUFDSyxhQUFhLENBQUUsUUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFtQixFQUFFLFFBQWMsRUFDdEYsTUFBYyxFQUFFLHVCQUFnQyxFQUFFLFdBQW9CO1FBRXhFLG9FQUFvRTtRQUNyRSxJQUFJLElBQVksRUFBRSxLQUFTLEVBQUUsS0FBUyxFQUFFLEdBQVEsQ0FBQztRQUVqRCx1RkFBdUY7UUFDdkYsZ0NBQWdDO1FBQ2hDLElBQUksaUJBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9CO1lBQ0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUVoQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQ3JCO2dCQUNDLGlDQUFpQztnQkFDakMsaUJBQWlCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUN2QjtvQkFDQyxnRkFBZ0Y7b0JBQ2hGLHdCQUF3QjtvQkFDeEIsSUFBSSx1QkFBdUI7d0JBQzFCLGlCQUFpQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQzs7d0JBRTlCLElBQUksQ0FBQyxNQUFNLGlCQUFzQixDQUFDO2lCQUNuQztxQkFFRDtvQkFDQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksZ0JBQWdCLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUN0RDt3QkFDQyxJQUFJLENBQUMsTUFBTSxpQkFBc0IsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7cUJBQ25CO3lCQUVEO3dCQUNDLElBQUksQ0FBQyxNQUFNLGlCQUFzQixDQUFDO3dCQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNsQztvQkFFRCw2RUFBNkU7b0JBQzdFLG9DQUFvQztvQkFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUMsQ0FBQztpQkFDcEI7YUFDRDtTQUNEO1FBRUQsb0ZBQW9GO1FBQ3BGLG9GQUFvRjtRQUNwRiwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUNuRSxPQUFPLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxHQUFHLGVBQWUsRUFDOUM7WUFDQyxtQ0FBbUM7WUFDbkMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3JELFNBQVM7WUFFVixJQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUVuQiw4RkFBOEY7WUFDOUYsSUFBSSxDQUFDLHVCQUF1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsRUFDcEY7Z0JBQ0MsSUFBSSxDQUFDLE1BQU0saUJBQXNCLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7aUJBQ0ksSUFBSSxnQkFBZ0IsQ0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQ3hDO2dCQUNDLElBQUksQ0FBQyxNQUFNLGlCQUFzQixDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFFRDtnQkFDQyxJQUFJLENBQUMsTUFBTSxpQkFBc0IsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztTQUNEO1FBRUQscURBQXFEO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxlQUFlLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0saUJBQXNCLENBQUM7UUFFbkQsb0RBQW9EO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2xDO1lBQ0MsbUNBQW1DO1lBQ25DLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDckQsU0FBUztZQUVWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLFdBQVc7WUFDZCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBSUQ7OztPQUdHO0lBQ0ssa0JBQWtCO1FBRXpCLG1FQUFtRTtRQUNuRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxhQUFhO1FBQ1osbUZBQW1GO1FBQ25GLCtCQUErQjtRQUMvQixJQUFJLEtBQUssSUFBSSxrQkFBa0IsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUM3QyxPQUFPO1FBQ1QsVUFBVTtRQUVWLGlGQUFpRjtRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBZ0IsSUFBSSxXQUFXLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhDLHVGQUF1RjtRQUN2Rix1RkFBdUY7UUFDdkYsYUFBYTtRQUNiLElBQUksTUFBb0IsQ0FBQztRQUN6QixJQUFJLElBQVksQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUM5QjtZQUNDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JCLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQzNCO2dCQUNDLGlGQUFpRjtnQkFDakYsbUZBQW1GO2dCQUNuRiw2RUFBNkU7Z0JBQzdFLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO2lCQUNJLElBQUksTUFBTSxtQkFBd0IsRUFDdkM7Z0JBQ0MsbUZBQW1GO2dCQUNuRix1RkFBdUY7Z0JBQ3ZGLDBEQUEwRDtnQkFDMUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3BEO29CQUNDLDBDQUEwQztvQkFDMUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Q7WUFFRCxrRkFBa0Y7WUFDbEYsWUFBWTtTQUNaO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksS0FBSyxLQUFLLFNBQVM7WUFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRDtBQWxjRCx3QkFrY0M7QUFPRDs7OztHQUlHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBRSxLQUFTLEVBQUUsS0FBUztJQUU5QyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtRQUMvQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3RSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3RrQkQsNkJBQTZCOzs7OztBQUU3QixtRUFBMEI7QUFHMUIsbUZBQWtDO0FBQ2xDLG1GQUFrQztBQUNsQyw2RkFBdUM7Ozs7Ozs7Ozs7Ozs7OztBQ052Qyx3REFBNkI7QUFFN0IsaUJBQWlCO0FBQ2hCLDJFQUFrRTtBQUNuRSxVQUFVO0FBQ1YsQ0FBQyxDQUFDLDRFQUE0RTtBQThHOUU7Ozs7OztHQU1HO0FBRUgsU0FBUyxXQUFXLENBQUUsR0FBUTtJQUU3QixJQUFJLEdBQUcsSUFBSSxJQUFJO1FBQ2QsT0FBTyxFQUFFLENBQUM7U0FDTixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDL0IsT0FBTyxHQUFHLENBQUM7U0FDUCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRTdFLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFJRCxtR0FBbUc7QUFDbkcseUZBQXlGO0FBQ3pGLDhDQUE4QztBQUM5QyxFQUFFO0FBQ0YsdUZBQXVGO0FBQ3ZGLDhGQUE4RjtBQUM5RixpREFBaUQ7QUFDakQsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFhLE9BQU87SUE2R25CLGtEQUFrRDtJQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUUsUUFBZ0IsRUFBRSxJQUF1RDtRQUV4RyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBSUQsa0RBQWtEO0lBQzNDLE1BQU0sQ0FBQyxlQUFlLENBQUUsUUFBZ0I7UUFFOUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFJRCxzRkFBc0Y7SUFDdEYsb0ZBQW9GO0lBQzdFLE1BQU0sQ0FBQyxPQUFPLENBQUUsR0FBWSxFQUFFLFFBQWdCLEVBQUUsSUFBeUIsRUFBRSxPQUFZO1FBRTdGLDJCQUEyQjtRQUMzQixJQUFJLElBQUksS0FBSyxTQUFTO1lBQ3JCLEdBQUcsQ0FBQyxZQUFZLENBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBRXBEO1lBQ0MsbUNBQW1DO1lBQ25DLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckMsSUFBSSxRQUFRLEtBQUssU0FBUztnQkFDekIsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUVyQixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztnQkFFbEMsR0FBRyxDQUFDLFlBQVksQ0FBRSxRQUFRLEVBQUUsV0FBVyxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxpQkFBaUI7UUFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsVUFBVTtJQUNYLENBQUM7SUFJRCwyRkFBMkY7SUFDM0YsMEZBQTBGO0lBQzFGLDBEQUEwRDtJQUNuRCxNQUFNLENBQUMsVUFBVSxDQUFFLEdBQVksRUFBRSxRQUFnQixFQUFFLElBQXlCLEVBQUUsVUFBZSxFQUFFLFVBQWU7UUFFcEgsMkJBQTJCO1FBQzNCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFDdEI7WUFDQyxvRkFBb0Y7WUFDcEYsNERBQTREO1lBQzVELElBQUksVUFBVSxLQUFLLFVBQVU7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO2lCQUVkO2dCQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUV0RCxpQkFBaUI7Z0JBQ2hCLHFCQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxxQkFBYSxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRSxVQUFVO2dCQUVWLE9BQU8sSUFBSSxDQUFDO2FBQ1o7U0FDRDtRQUVELHVGQUF1RjtRQUN2RixzRkFBc0Y7UUFDdEYscUVBQXFFO1FBQ3JFLElBQUksU0FBYyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQzNCO1lBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUV6RCxnRUFBZ0U7WUFDaEUsSUFBSSxTQUFTLEtBQUssU0FBUztnQkFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUNJLElBQUksVUFBVSxLQUFLLFVBQVU7WUFDakMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUV4QixtQ0FBbUM7UUFDbkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsS0FBSyxTQUFTO1lBQ3pCLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFckIsMEZBQTBGO1FBQzFGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUV4QztZQUNDLGlGQUFpRjtZQUNqRiw4RUFBOEU7WUFDOUUsNENBQTRDO1lBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztnQkFFcEMsR0FBRyxDQUFDLFlBQVksQ0FBRSxRQUFRLEVBQUUsV0FBVyxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxpQkFBaUI7UUFDaEIscUJBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLHFCQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsVUFBVTtRQUVWLHFEQUFxRDtRQUNyRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCxnRUFBZ0U7SUFDekQsTUFBTSxDQUFDLFVBQVUsQ0FBRSxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxJQUF5QjtRQUVsRiwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLEtBQUssU0FBUztZQUNyQixHQUFHLENBQUMsZUFBZSxDQUFFLFFBQVEsQ0FBQyxDQUFDO2FBRWhDO1lBQ0MsbUNBQW1DO1lBQ25DLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckMsSUFBSSxRQUFRLEtBQUssU0FBUztnQkFDekIsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUM3QjtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM1Qjs7Z0JBRUEsR0FBRyxDQUFDLGVBQWUsQ0FBRSxRQUFRLENBQUMsQ0FBQztTQUNoQztRQUVELGlCQUFpQjtRQUNoQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUscUJBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO0lBQ1gsQ0FBQzs7QUF2UEYsMEJBd1BDO0FBdFBBLHdGQUF3RjtBQUN4RixpRkFBaUY7QUFDbEUsaUJBQVMsR0FDeEI7SUFDQyxnRkFBZ0Y7SUFDaEYsS0FBSyxFQUFFLEVBQUUsSUFBSSxjQUFlLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUU7SUFDL0YsS0FBSyxFQUFFLEVBQUUsSUFBSSxjQUFlLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUU7SUFDL0YsWUFBWSxFQUFFLEVBQUUsSUFBSSxjQUFlLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFO0lBQ3BILE9BQU8sRUFBRSxFQUFFLElBQUksY0FBZSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUU7SUFDdkcsY0FBYyxFQUFFLEVBQUUsSUFBSSxjQUFlLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFO0lBRXhILFNBQVM7SUFDVCxLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsZUFBZSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3pDLFlBQVksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN0QyxrQkFBa0IsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM1QyxjQUFjLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDeEMsUUFBUSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2xDLElBQUksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM5QixNQUFNLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDaEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLGNBQWMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN4QyxNQUFNLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixXQUFXLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDckMsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLFFBQVEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDOUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxxQ0FBcUM7SUFDckMsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLFFBQVEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNsQyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsSUFBSSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzlCLGNBQWMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN4QyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDM0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLE9BQU8sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNqQyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsUUFBUSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2xDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDOUIsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLGNBQWMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN4QyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzVDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxVQUFVLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN2RCxVQUFVLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN2RCxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsUUFBUSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2xDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLElBQUksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM5QixPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsYUFBYSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3ZDLFdBQVcsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNyQyxZQUFZLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDdEMsWUFBWSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3RDLFdBQVcsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNyQyxVQUFVLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDcEMsV0FBVyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3JDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxRQUFRLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixNQUFNLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDaEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLG9EQUFvRDtJQUNwRCxNQUFNLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDaEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLE1BQU0sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNoQyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLE9BQU8sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNqQyxVQUFVLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDcEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLFdBQVcsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNyQyxRQUFRLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLFVBQVUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNwQyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzFDLGFBQWEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN2QyxhQUFhLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDdkMsZUFBZSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3pDLFlBQVksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN0QyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzFDLGVBQWUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN6QyxJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDOUIsR0FBRyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzdCLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtDQUMvQixDQUFDO0FBbUpILHVDQUF1QztBQUN2QywwQ0FBMEM7QUFDMUMsd0hBQXdIO0FBQ3hILGlEQUFpRDtBQUNqRCxzSUFBc0k7QUFDdEksMENBQTBDO0FBQzFDLHdIQUF3SDtBQUN4SCxpREFBaUQ7QUFDakQsc0lBQXNJO0FBSXRJLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsMkZBQTJGO0FBQzNGLDJGQUEyRjtBQUMzRixpR0FBaUc7QUFDakcsOEZBQThGO0FBQzlGLDhGQUE4RjtBQUM5RixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxTQUFTLFlBQVksQ0FBRSxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFxQjtJQUUzRSxHQUFHLENBQUMsZUFBZSxDQUFFLEdBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUtELFNBQVMsYUFBYSxDQUFFLFFBQWdCLEVBQUUsVUFBd0IsRUFBRSxVQUF3QjtJQUUzRixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVyRCw4RUFBOEU7SUFDOUUsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUN0QyxDQUFDO0FBSUQsU0FBUyxlQUFlLENBQUUsR0FBWSxFQUFFLFFBQWdCLEVBQUUsU0FBNkI7SUFFdEYsR0FBRyxDQUFDLHFCQUFxQixDQUFFLEdBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUtELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsaUdBQWlHO0FBQ2pHLGtHQUFrRztBQUNsRywwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxTQUFTLFlBQVksQ0FBRSxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFZO0lBRWxFLG1GQUFtRjtJQUNsRixHQUFXLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUM5QixDQUFDO0FBS0QsU0FBUyxhQUFhLENBQUUsUUFBZ0IsRUFBRSxhQUFrQixFQUFFLFVBQWU7SUFFNUUsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4RixxRUFBcUU7SUFDckUsT0FBTyxVQUFVLENBQUM7QUFDbkIsQ0FBQztBQUtELFNBQVMsZUFBZSxDQUFFLEdBQVksRUFBRSxRQUFnQjtJQUV2RCxtRkFBbUY7SUFDbEYsR0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQUtELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0dBQWtHO0FBQ2xHLHVGQUF1RjtBQUN2RixxREFBcUQ7QUFDckQsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxTQUFTLG9CQUFvQixDQUFFLFFBQWdCLEVBQUUsYUFBa0IsRUFBRSxVQUFlO0lBRW5GLDRGQUE0RjtJQUM1Riw0QkFBNEI7SUFDNUIsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQztBQUtELFNBQVMsc0JBQXNCLENBQUUsR0FBWSxFQUFFLFFBQWdCO0lBRTlELGFBQWE7QUFDZCxDQUFDO0FBS0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiwrRkFBK0Y7QUFDL0YsbUdBQW1HO0FBQ25HLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLFNBQVMsY0FBYyxDQUFFLEdBQVksRUFBRSxRQUFnQixFQUFFLE9BQVk7SUFFcEUsbUZBQW1GO0lBQ2xGLEdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLENBQUM7QUFLRCxTQUFTLGVBQWUsQ0FBRSxRQUFnQixFQUFFLGFBQWtCLEVBQUUsVUFBZTtJQUU5RSx3RkFBd0Y7SUFDeEYsNEJBQTRCO0lBQzVCLE9BQU8sVUFBVSxDQUFDO0FBQ25CLENBQUM7QUFLRCxTQUFTLGlCQUFpQixDQUFFLEdBQVksRUFBRSxRQUFnQjtJQUV6RCxtRkFBbUY7SUFDbEYsR0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdGZEOzs7O0dBSUc7QUFDSCxNQUFhLFNBQVM7SUFBdEI7UUFFQzs7O1dBR0c7UUFDSSxTQUFJLEdBQVUsSUFBSSxDQUFDLFFBQXdCLENBQUM7UUF1Q25ELHVGQUF1RjtRQUN2RixrQkFBa0I7UUFDVixjQUFTLEdBQWUsSUFBSSxDQUFDO0lBY3RDLENBQUM7SUFuREE7OztPQUdHO0lBQ0ksTUFBTSxDQUFFLFFBQWU7UUFFN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBUyxDQUFDO1FBRW5DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTSxDQUFFLFFBQWU7UUFFN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFDM0I7WUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUlELDBDQUEwQztJQUNuQyxLQUFLO1FBRVgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQVVELHlGQUF5RjtJQUN6RiwyREFBMkQ7SUFDbkQsUUFBUTtRQUVmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQzNCO1lBQ0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUztnQkFDbEMsUUFBUSxDQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDO0NBQ0Q7QUE3REQsOEJBNkRDO0FBTUQsTUFBYSxlQUFnQixTQUFRLFNBQW1CO0NBQUc7QUFBM0QsMENBQTJEO0FBZ0UzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBQ0gsU0FBZ0Isb0JBQW9CO0lBRW5DLE9BQU8sSUFBSSxLQUFLLENBQUUsRUFBRSxFQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFIRCxvREFHQztBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLHFCQUFxQjtJQUVuQixHQUFHLENBQUUsTUFBVyxFQUFFLElBQVksRUFBRSxRQUFhO1FBRW5ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQy9ELENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7QUM3TkQsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QixtR0FBbUc7O0FBRW5HLDZEQUE2RDtBQUM3RCxJQUFZLGFBUVg7QUFSRCxXQUFZLGFBQWE7SUFFeEIsaURBQUk7SUFDSixpREFBSTtJQUNKLCtDQUFHO0lBQ0gsaURBQUk7SUFDSixpREFBSTtJQUNKLG1EQUFLO0FBQ04sQ0FBQyxFQVJXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBUXhCO0FBSUQsd0ZBQXdGO0FBQ3hGLGNBQWM7QUFDZCwwREFBMEQ7QUFDMUQsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QyxJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFFdEIsK0NBQVE7SUFDUixtREFBVztJQUNYLG1EQUFXO0lBQ1gsK0NBQVM7SUFDVCxxREFBWTtBQUNiLENBQUMsRUFQVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU90QjtBQUlELHdEQUF3RDtBQUN4RCxNQUFhLGFBQWE7SUFBMUI7UUFFQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFNdEIsQ0FBQztJQUpPLFdBQVc7UUFFakIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEYsQ0FBQztDQUNEO0FBWkQsc0NBWUM7QUFJRCxNQUFhLGFBQWE7SUFhekIsWUFBYSxJQUFZO1FBUnpCLFNBQUksR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMxQyxRQUFHLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDekMsU0FBSSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQzFDLFNBQUksR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMxQyxVQUFLLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFNMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUlNLEtBQUs7UUFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBSU0sSUFBSSxDQUFFLGVBQXdCLElBQUk7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuRCxJQUFJLFlBQVk7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFJRCx1RkFBdUY7SUFDdkYsb0ZBQW9GO0lBQ3BGLG9DQUFvQztJQUM3QixHQUFHLENBQUUsUUFBdUIsRUFBRSxNQUFtQjtRQUV2RCxJQUFJLGFBQTRCLENBQUM7UUFDakMsUUFBUSxRQUFRLEVBQ2hCO1lBQ0MsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssYUFBYSxDQUFDLEdBQUc7Z0JBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUMsTUFBTTtZQUN4RCxLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssYUFBYSxDQUFDLEtBQUs7Z0JBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUMsTUFBTTtZQUM1RCxPQUFPLENBQUMsQ0FBQyxPQUFPO1NBQ2hCO1FBRUQsUUFBUSxNQUFNLEVBQ2Q7WUFDQyxLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNO1lBQ3JELEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU07WUFDekQsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUN6RCxLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNO1lBQ3JELEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUFDLE1BQU07U0FDM0Q7SUFDRixDQUFDO0lBSUQsb0RBQW9EO0lBQzdDLFFBQVE7UUFFZCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNsRCxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBSUQsOERBQThEO0lBQ3ZELGFBQWE7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1FBRVgsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBSUQsNERBQTREO0lBQ3JELFlBQVk7UUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzFCLE9BQU8sRUFBRSxDQUFDO1FBRVgsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsYUFBYTtRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsYUFBYTtRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxjQUFjO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBSUQsdUZBQXVGO0lBQy9FLFlBQVksQ0FBRSxDQUFTLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFFekQsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDOztZQUVWLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7Q0FLRDtBQTFLRCxzQ0EwS0M7Ozs7Ozs7Ozs7Ozs7OztBQzNNRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDRGQUE0RjtBQUM1RixnR0FBZ0c7QUFDaEcsbUdBQW1HO0FBQ25HLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQWEsT0FBTztJQU9uQixnREFBZ0Q7SUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxPQUFlLEVBQUUsSUFBZ0I7UUFFeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUlELDRFQUE0RTtJQUNyRSxNQUFNLENBQUMsUUFBUSxDQUFFLE9BQWU7UUFFdEMsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBSUQscURBQXFEO0lBQzlDLE1BQU0sQ0FBQyxhQUFhLENBQUUsT0FBZTtRQUUzQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUlELG1GQUFtRjtJQUM1RSxNQUFNLENBQUMsYUFBYSxDQUFFLElBQWdCO1FBRTVDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUM7WUFDdkIsT0FBUSxJQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFFaEYsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBZSxDQUFDO0lBQzVELENBQUM7SUFJRCwyRkFBMkY7SUFDM0Ysd0JBQXdCO0lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFlO1FBRTlDLElBQUksSUFBSSxHQUFlLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBSUQsc0ZBQXNGO0lBQy9FLE1BQU0sQ0FBQyxVQUFVLENBQUUsSUFBZ0IsRUFBRSxPQUFlO1FBRTFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUM7WUFDdkIsT0FBUSxJQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7WUFFbEYsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzdELENBQUM7SUFJRCx3REFBd0Q7SUFDakQsTUFBTSxDQUFDLGdCQUFnQixDQUFFLE9BQWU7UUFFOUMsSUFBSSxJQUFJLEdBQWUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDOztBQXBFRiwwQkFnS0M7QUE5SkEseUNBQXlDO0FBQzNCLGlCQUFTLEdBQVcsNEJBQTRCLENBQUM7QUFxRS9ELG9EQUFvRDtBQUNyQyxhQUFLLEdBQ3BCO0lBQ0MsR0FBRyxFQUFFLEtBQUs7SUFFVixDQUFDLEVBQUUsSUFBSTtJQUNQLE9BQU8sRUFBRSxLQUFLO0lBQ2QsYUFBYSxFQUFFLEtBQUs7SUFDcEIsZ0JBQWdCLEVBQUUsS0FBSztJQUV2QixNQUFNLEVBQUUsS0FBSztJQUNiLFFBQVEsRUFBRSxLQUFLO0lBQ2YsWUFBWSxFQUFFLGVBQWU7SUFFN0IsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLE9BQU8sRUFBRSxLQUFLO0lBRWQsT0FBTyxFQUFFLEtBQUs7SUFFZCxPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsS0FBSztJQUNuQixRQUFRLEVBQUUsS0FBSztJQUNmLFlBQVksRUFBRSxLQUFLO0lBQ25CLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsTUFBTSxFQUFFLEtBQUs7SUFDYixZQUFZLEVBQUUsS0FBSztJQUNuQixNQUFNLEVBQUUsS0FBSztJQUNiLGFBQWEsRUFBRSxLQUFLO0lBRXBCLENBQUMsRUFBRSxLQUFLO0lBRVIsS0FBSyxFQUFFLEtBQUs7SUFDWixTQUFTLEVBQUUsS0FBSztJQUVoQixLQUFLLEVBQUUsS0FBSztJQUVaLElBQUksRUFBRSxLQUFLO0lBQ1gsY0FBYyxFQUFFLEtBQUs7SUFFckIsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFFWixJQUFJLEVBQUUsS0FBSztJQUNYLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxRQUFRLEVBQUUsS0FBSztJQUVmLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLElBQUksRUFBRSxLQUFLO0lBRVgsTUFBTSxFQUFFLElBQUk7SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsS0FBSztJQUNiLE1BQU0sRUFBRSxLQUFLO0lBRWIsSUFBSSxFQUFFLEtBQUs7SUFDWCxRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFFZixHQUFHLEVBQUUsS0FBSztJQUVWLElBQUksRUFBRSxLQUFLO0NBQ1g7Ozs7Ozs7Ozs7Ozs7O0FDeExGLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsZUFBZTtBQUNmLEVBQUU7QUFDRixtR0FBbUc7O0FBOENuRzs7O0dBR0c7QUFDSCxTQUFnQixhQUFhLENBQVcsQ0FBSztJQUV6QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFIRCxzQ0FHQztBQUlEOzs7R0FHRztBQUNILE1BQU0sT0FBTztJQUVULFlBQWEsQ0FBSztRQThCbEIsOEZBQThGO1FBQzlGLG1FQUFtRTtRQUM1RCxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVcsQ0FBQztRQTlCakMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEdBQUc7UUFFTixTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUJBQW1CO0lBQ1osR0FBRyxDQUFDLENBQUk7UUFFWCx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWixPQUFPO1FBRVgsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWCx1RkFBdUY7UUFDdkYscUZBQXFGO1FBQ3JGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUN0QixTQUFTLENBQUMsb0JBQW9CLENBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQVFKO0FBNEJEOztHQUVHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFFLFlBQVksQ0FBQyxDQUFDO0FBSXZDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsU0FBZ0IsYUFBYSxDQUF3QixJQUFPLEVBQUUsU0FBdUIsRUFDakYsUUFBYyxFQUFFLGFBQW1CO0lBRW5DLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBVztRQUUvQixJQUFJLE9BQU8sR0FBWSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0MscUZBQXFGO1FBQ3JGLHVEQUF1RDtRQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRWpGLCtCQUErQjtJQUM5QixXQUF3QixDQUFDLE9BQU8sR0FBRztRQUVoQyxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFZLENBQUM7UUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxXQUEwQixDQUFDO0FBQ3RDLENBQUM7QUF4QkQsc0NBd0JDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU87SUFFVCxZQUFhLElBQU8sRUFBRSxTQUF1QixFQUFFLFFBQWMsRUFBRSxhQUFtQjtRQTRHbEYsdUZBQXVGO1FBQ3ZGLHNGQUFzRjtRQUN0Rix5RkFBeUY7UUFDekYsc0ZBQXNGO1FBQ3RGLHNCQUFzQjtRQUNmLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVyxDQUFDO1FBL0dqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBRSxRQUFhLEVBQUUsSUFBVztRQUV0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRXJELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztTQUNyQztRQUVELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYix1REFBdUQ7UUFDdkQsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUM7UUFFNUIsb0JBQW9CO1FBQ3BCLElBQ0E7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7Z0JBRUQ7WUFDSSx3REFBd0Q7WUFDeEQsU0FBUyxDQUFDLFVBQVUsRUFBRTtTQUN6QjtJQUNMLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsT0FBTztRQUVWLCtDQUErQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixPQUFPO1FBRVgscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLCtGQUErRjtRQUMvRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLDhDQUE4QztJQUN2QyxPQUFPO1FBRVYsMkZBQTJGO1FBQzNGLDBGQUEwRjtRQUMxRiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2YsT0FBTztRQUVYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSztRQUVULGtGQUFrRjtRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixxRkFBcUY7UUFDckYsU0FBUyxDQUFDLHFCQUFxQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0F3Qko7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFVBQVU7QUFDVixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxxQkFBcUI7SUFBM0I7UUE4Rkksb0ZBQW9GO1FBQ3BGLDJGQUEyRjtRQUMzRiwyRkFBMkY7UUFDM0YsNkRBQTZEO1FBQ3JELGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRXJDLDhGQUE4RjtRQUM5RiwwRkFBMEY7UUFDMUYsMkZBQTJGO1FBQzNGLDRGQUE0RjtRQUM1Riw2RkFBNkY7UUFDckYsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLHdGQUF3RjtRQUN4Riw0RkFBNEY7UUFDNUYsYUFBYTtRQUNMLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFXLENBQUM7SUFDbEQsQ0FBQztJQTdHRzs7T0FFRztJQUNJLFdBQVcsQ0FBRSxPQUFnQjtRQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBRWIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBRSxPQUFnQjtRQUUxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLGtCQUFrQjtRQUVyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFFcEIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssQ0FBQztZQUNqQyxNQUFNLEtBQUssQ0FBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRXZELElBQUksRUFBRSxJQUFJLENBQUMsc0JBQXNCLEtBQUssQ0FBQyxFQUN2QztZQUNJLHVGQUF1RjtZQUN2RixzRkFBc0Y7WUFDdEYscUJBQXFCO1lBQ3JCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQixDQUFFLE9BQWdCO1FBRXRDLDREQUE0RDtRQUM1RCxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQ3JDO1lBQ0ksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxvQkFBb0IsQ0FBRSxPQUFnQjtRQUV6Qyx3RUFBd0U7UUFDeEUsYUFBYTtRQUNULElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFFLCtEQUErRCxDQUFDLENBQUM7UUFDeEYsVUFBVTtRQUVWLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFFOUU7WUFDSSx1RkFBdUY7WUFDdkYsc0ZBQXNGO1lBQ3RGLHFCQUFxQjtZQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0NBcUJKO0FBSUQsNENBQTRDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUk1Qzs7R0FFRztBQUNILFNBQWdCLGtCQUFrQjtJQUU5QixTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBSEQsZ0RBR0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLGlCQUFpQjtJQUU3QixTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBSEQsOENBR0M7QUF1QkQ7Ozs7R0FJRztBQUNILFNBQWdCLHFCQUFxQixDQUFXLElBQXFCLEVBQUUsUUFBYztJQUVqRixPQUFPLElBQUksZUFBZSxDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBSEQsc0RBR0M7QUFJRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sZUFBeUIsU0FBUSxPQUFVO0lBRTdDLFlBQWEsSUFBcUIsRUFBRSxRQUFjO1FBRTlDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsR0FBRztRQUVOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDaEI7WUFDSSxvRkFBb0Y7WUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV0RixLQUFLLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFpQztJQUMxQixPQUFPO1FBRVYsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQ3BCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLFNBQVM7UUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7WUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztDQW9CSjtBQXlCRDs7R0FFRztBQUNILElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBRSxZQUFZLENBQUMsQ0FBQztBQUl2Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxTQUFnQixhQUFhLENBQXdCLElBQU8sRUFBRSxRQUFjO0lBRXhFLFNBQVMsV0FBVyxDQUFDLEdBQUcsSUFBVztRQUUvQixJQUFJLE9BQU8sR0FBWSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0MscUZBQXFGO1FBQ3JGLHVEQUF1RDtRQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV2RCwrQkFBK0I7SUFDOUIsV0FBd0IsQ0FBQyxPQUFPLEdBQUc7UUFFaEMsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBWSxDQUFDO1FBQ2pELE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sV0FBMEIsQ0FBQztBQUN0QyxDQUFDO0FBdkJELHNDQXVCQztBQUlEOzs7R0FHRztBQUNILE1BQU0sT0FBTztJQUVULFlBQWEsSUFBTyxFQUFFLFFBQWM7UUFFaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFFLFFBQWEsRUFBRSxJQUFXO1FBRXRDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixNQUFNLElBQUksS0FBSyxDQUFFLDhCQUE4QixDQUFDLENBQUM7UUFFckQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVE7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFN0IsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0IsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUFFO2dCQUM3QztZQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQUU7SUFDOUMsQ0FBQztJQUVELGlDQUFpQztJQUMxQixPQUFPO1FBRVYsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLE9BQU87UUFFWCwrRkFBK0Y7UUFDL0YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQU9KO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixhQUFhO0FBQ2IsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUUsTUFBVyxFQUFFLElBQVk7SUFFOUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtRQUM5QixHQUFHO1lBRUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBYSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7WUFFN0MsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELEdBQUcsQ0FBRSxHQUFHO1lBRUosSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBYSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFFNUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUM7UUFDNUIsQ0FBQztLQUNQLENBQUMsQ0FBQztBQUNKLENBQUM7QUFyQkQsMEJBcUJDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixRQUFRLENBQUUsTUFBVyxFQUFFLElBQVksRUFBRSxRQUE0QjtJQUU3RSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkIsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUNuQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUVsRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxHQUFHLEdBQUc7WUFFWCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFxQixDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcscUJBQXFCLENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxFLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQ2hCO1lBQ0ksSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUMxQixRQUFRLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBTTtnQkFFM0IsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9CLElBQUk7b0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQUU7d0JBQ3RCO29CQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUFFO1lBQzlDLENBQUM7U0FDSjtLQUNKO1NBRUQ7UUFDSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFNO1lBRTdCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQXFCLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxxQkFBcUIsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbkUsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUNKO0FBQ0wsQ0FBQztBQTNDRCw0QkEyQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3p3QkQsU0FBZ0IsV0FBVyxDQUFFLEVBQU8sRUFBRSxFQUFPO0lBRTVDLElBQUksRUFBRSxLQUFLLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQztTQUNSLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSTtRQUNoQyxPQUFPLElBQUksQ0FBQztTQUNSLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSTtRQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNULElBQUksT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFO1FBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ1QsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQy9CO1FBQ0MsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ2hCO1lBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ2hCO1lBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDYixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Q7U0FDSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDL0MsT0FBTyxLQUFLLENBQUM7U0FDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzFCO1FBQ0MsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxNQUFNO1lBQzFCLE9BQU8sS0FBSyxDQUFDO2FBRWQ7WUFDQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUM3QztnQkFDQyxJQUFJLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRDtLQUNEO1NBRUQ7UUFDQywwRkFBMEY7UUFDMUYsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQTlDRCxrQ0E4Q0M7QUFJRCxTQUFnQixVQUFVLENBQUUsQ0FBTTtJQUVqQyxJQUFJLENBQUMsS0FBSyxTQUFTO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ0wsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUNsQixPQUFPLENBQUMsQ0FBQztTQUNMLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsQ0FBQztTQUNMLElBQUksQ0FBQyxLQUFLLElBQUk7UUFDbEIsT0FBTyxDQUFDLENBQUM7U0FDTCxJQUFJLENBQUMsS0FBSyxLQUFLO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO0lBRVYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRVgsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1FBQ3hCLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNWLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUM3QixPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQztTQUNsQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVU7UUFDL0IsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDekI7UUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDMUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLENBQUM7S0FDVDtTQUVEO1FBQ0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUM7S0FDVDtBQUNGLENBQUM7QUFwQ0QsZ0NBb0NDO0FBSUQsU0FBZ0IsVUFBVSxDQUFFLENBQVM7SUFFcEMsSUFBSSxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsQ0FBQztJQUVWLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUMzQixDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUFWRCxnQ0FVQztBQUlELGlHQUFpRztBQUNqRyxvRUFBb0U7QUFDcEUsU0FBZ0IsWUFBWSxDQUFFLEdBQUcsVUFBaUM7SUFFakUsSUFBSSxZQUFvQixDQUFDO0lBRXpCLEtBQUssSUFBSSxTQUFTLElBQUksVUFBVSxFQUNoQztRQUNDLElBQUksQ0FBQyxTQUFTO1lBQ2IsU0FBUztRQUVWLGlEQUFpRDtRQUNqRCxJQUFJLGlCQUFpQixHQUFXLE9BQU8sU0FBUyxLQUFLLFFBQVE7WUFDM0QsQ0FBQyxDQUFDLFNBQW1CO1lBQ3JCLENBQUMsQ0FBRSxTQUFzQixDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV2QyxJQUFJLFlBQVksS0FBSyxTQUFTO1lBQzdCLFlBQVksR0FBRyxFQUFFLENBQUM7O1lBRWxCLFlBQVksSUFBSSxHQUFHLENBQUM7UUFFckIsWUFBWSxJQUFJLGlCQUFpQixDQUFDO0tBQ2xDO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDckIsQ0FBQztBQXZCRCxvQ0F1QkM7QUFJRCw4RkFBOEY7QUFDOUYsMkNBQTJDO0FBQzNDLFNBQWdCLFdBQVcsQ0FBRSxHQUFHLE1BQWtCO0lBRWpELDJEQUEyRDtJQUMzRCxJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7SUFDNUIsYUFBYSxDQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUM7QUFORCxrQ0FNQztBQUlELCtFQUErRTtBQUMvRSxTQUFnQixhQUFhLENBQUUsUUFBa0IsRUFBRSxHQUFHLE1BQTZCO0lBRWxGLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUN4QjtRQUNDLElBQUksQ0FBQyxLQUFLO1lBQ1QsU0FBUztRQUVWLGlEQUFpRDtRQUNqRCxJQUFJLFFBQVEsR0FBYSxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ2hELENBQUMsQ0FBQyxLQUFpQjtZQUNuQixDQUFDLENBQUMsZ0JBQWdCLENBQUUsS0FBZSxDQUFDLENBQUM7UUFFdkMscUZBQXFGO1FBQ3JGLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUTtZQUM1QixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDO0FBQ0YsQ0FBQztBQWhCRCxzQ0FnQkM7QUFJRCx1REFBdUQ7QUFDdkQsU0FBZ0IsZ0JBQWdCLENBQUUsQ0FBUztJQUUxQyxJQUFJLENBQUMsQ0FBQztRQUNMLE9BQU8sRUFBRSxDQUFDO0lBRVgsSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO0lBRTVCLElBQUksSUFBSSxHQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQ3BCO1FBQ0MsSUFBSSxJQUFJLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoRCxTQUFTO1FBRVYsUUFBUSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4RDtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUM7QUFsQkQsNENBa0JDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLElBQVk7SUFFeEMsSUFBSSxDQUFDLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQztJQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBTkQsa0NBTUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixXQUFXLENBQUUsS0FBYTtJQUV4QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckUsQ0FBQztBQUhELGtDQUdDO0FBSUQsNkZBQTZGO0FBQzdGLFNBQWdCLFdBQVcsQ0FBRSxHQUFHLE1BQW1CO0lBRWxELElBQUksUUFBUSxHQUFjLEVBQUUsQ0FBQztJQUM3QixhQUFhLENBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEMsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQztBQUxELGtDQUtDO0FBSUQsNkZBQTZGO0FBQzdGLGtDQUFrQztBQUNsQyxTQUFnQixhQUFhLENBQUUsUUFBbUIsRUFBRSxHQUFHLE1BQW1CO0lBRXpFLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSTtRQUM5QyxPQUFPO0lBRVIsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQ3hCO1FBQ0MsSUFBSSxDQUFDLEtBQUs7WUFDVCxTQUFTO1FBRVYsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUNmO1lBQ0MsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLFNBQVM7Z0JBQy9CLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRXJCLGFBQWEsQ0FBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUksS0FBSyxDQUFDLFNBQVMsRUFDbkI7WUFDQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEtBQUssU0FBUztnQkFDbkMsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFekIsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUUsUUFBUSxDQUFDLFNBQW1CLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUNmO1lBQ0MsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLFNBQVM7Z0JBQy9CLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRXJCLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUs7Z0JBQy9CLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQ2pCO1lBQ0MsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVM7Z0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFFbEM7Z0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUNyQztvQkFDQyxJQUFJLFVBQVUsR0FBUSxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUN2QyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFDLENBQUM7aUJBQ25DO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztTQUNEO0tBQ0Q7QUFDRixDQUFDO0FBcERELHNDQW9EQzs7Ozs7Ozs7Ozs7O0FDMVJELG9EIiwiZmlsZSI6Im1pbWJsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1jc3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltYmxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1jc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeShyb290W1wibWltY3NzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1ibFR5cGVzLmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtTdHlsZXNldCwgZ2V0U3R5bGVQcm9wVmFsdWUsIEV4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL2FwaS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogU3R5bGVzZXQpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IFN0eWxlc2V0KTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IGdldFN0eWxlUHJvcFZhbHVlKCBwcm9wTmFtZSBhcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0LCBwcm9wc1twcm9wTmFtZV0pO1xyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BWYWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIEZvciBtYW5hZ2VkIGNvbXBvbmVudHMsIHRoZSBwcm9wZXJ0aWVzXHJcblx0ICogY2FuIGFsc28gYmUgc2V0IChjaGFuZ2VkKSB3aGVuIHRoZSBjb21wb25lbnQncyBwYXJlbnQgaXMgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRwcm9wcz86IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogdXNlZCBpcyB0aGUgY29tcG9uZW50J3MgY2xhc3MgY29uc3RydWN0b3IgbmFtZS4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYmVmb3JlXHJcblx0ICogdGhlIHZpcnR1YWwgbm9kZSBpcyBhdHRhY2hlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzLCBnZXRzIG9yIGNsZWFycyB0aGUgdmlydHVhbCBub2RlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50LiBUaGlzIHByb3BlcnR5IGlzIHNldCB0d2ljZTpcclxuXHQgKiAgMS4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lOiB0aGUgY29tcG9uZW50IG11c3QgcmVtZW1iZXIgdGhlXHJcblx0ICogICAgcGFzc2VkIG9iamVjdC5cclxuXHQgKiAgMi4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkOiBudWxsIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIGNvbXBvbmVudCBtdXN0XHJcblx0ICogICAgcmVsZWFzZSB0aGUgcmVtZW1iZXJlZCBvYmplY3QuXHJcblx0ICovXHJcblx0dm4/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gcmVuZGVyIGl0cyBjb250ZW50IGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBtZXRob2RcclxuXHQgKiBpcyBjYWxsZWQgd2hlbiB0aGUgdmlydHVhbCBub2RlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXNcclxuXHQgKiBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgY29tcG9uZW50IHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZCB0aGUgY29udGVudCBvZiBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0b1xyXG4gICAgLy8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS4gQWZ0ZXJcclxuXHQgKiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG5cdCAqL1xyXG5cdHdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBjYW4gcmVhZCBET00gbGF5b3V0IGluZm9ybWF0aW9uIChlLmcuXHJcblx0ICogZWxlbWVudCBtZWFzdXJlbWVudHMpIHdpdGhvdXQgdGhlIHJpc2sgb2YgY2F1c2luZyBmb3JjZWQgbGF5b3V0cy5cclxuXHQgKi9cclxuXHRiZWZvcmVVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBhZnRlciBhbCBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG1vZGlmaWNhdGlvbnMgdG9cclxuXHQgKiBET00gcmVzdWx0aW5nIGZyb20gdXBkYWluZyBjb21wb25lbnRzIGhhdmUgYmVlbiBhbHJlYWR5IGRvbmUuXHJcblx0ICovXHJcblx0YWZ0ZXJVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgdXNlZCBieSBtYW5hZ2VkIGNvbXBvbmVudHMuXHJcblx0ICogXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkVXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGNvbXBvbmVudCBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdGdldFVwZGF0ZVN0cmF0ZWd5PygpOiBVcGRhdGVTdHJhdGVneTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBzcGVjaWZpZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgdXBkYXRlIGJlaGF2aW9yIG9mIGNvbXBvbmVudHMgYW5kXHJcbiAqIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVXBkYXRlU3RyYXRlZ3kgPSBcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciBub24tbWF0Y2hpbmcgbmV3IGtleWVkIHN1Yi1ub2RlcyBhcmUgYWxsb3dlZCB0byByZWN5Y2xlIG5vbi1cclxuXHQgKiBtYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzLiBIZXJlIFwibm9uLW1hdGNoaW5nXCIgbWVhbnMgdGhvc2UgbmV3IG9yIG9sZCBub2RlcyBmb3Igd2hpY2hcclxuXHQgKiBubyBvbGQgb3IgbmV3IHN1Yi1ub2RlcyByZXNwZWN0aXZlbHkgd2VyZSBmb3VuZC4gSWYgdGhpcyBmbGFnIGlzIGZhbHNlLCB0aGVuIG5vbi1tYXRjaGluZ1xyXG5cdCAqIG9sZCBzdWItbm9kZXMgd2lsbCBiZSByZW1vdmVkIGFuZCBub24tbWF0Y2hpbmcgbmV3IHN1Yi1ub2RlcyB3aWxsIGJlIGluc2VydGVkLiBJZiB0aGlzXHJcblx0ICogZmxhZyBpcyB0cnVlLCB0aGVuIG5vbi1tYXRjaGluZyBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgdXBkYXRlZCBieSB0aGUgbm9uLW1hdGNoaW5nIG5ld1xyXG5cdCAqIHN1Yi1ub2RlcyAtIHByb3ZpZGVkIHRoYXQgdGhlIHR5cGVzIG9mIHN1Yi1ub2RlcyBhcmUgdGhlIHNhbWUuXHJcblx0ICogXHJcblx0ICogSWYga2V5ZWQgc3ViLW5vZGVzIHJlY3ljbGluZyBpcyBhbGxvd2VkIGl0IGNhbiBzcGVlZCB1cCBhbiB1cGRhdGUgcHJvY2VzcyBiZWNhdXNlXHJcblx0ICogbGVzcyBET00gbm9kZXMgZ2V0IHJlbW92ZWQgYW5kIGluc2VydGVkLCB3aGljaCBpcyBtb3JlIGV4cGVuc2l2ZSB0aGFuIHVwZGF0aW5nLiBIb3dldmVyLFxyXG5cdCAqIHRoaXMgY2FuIGhhdmUgc29tZSBhZHZlcnNlIGVmZmVjdHMgdW5kZXIgY2lydGFpbiBjaXJjdW1zdGFuY2VzIGlmIGNlcnRhaW4gZGF0YSBpcyBib3VuZFxyXG5cdCAqIHRvIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlcyBvZiBET00gbm9kZXMuXHJcblx0ICogXHJcblx0ICogVGhlIGZsYWcncyBkZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNjaGVkdWxlZEZ1bmNUeXBlID0gKCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZXZlbnQgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiByZWZlcmVuY2UgdmFsdWUgY2hhbmdlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZkZ1bmM8VD4gPSAobmV3UmVmOiBUKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG5pbXBvcnQge0lFdmVudFNsb3QsIEV2ZW50U2xvdH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50U2xvdFwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgY2xhc3MgdG8gdXNlIHdoZW5ldmVyIGEgcmVmZXJlbmNlIHRvIGFuIG9iamVjdCBpcyBuZWVkZWQgLSBmb3IgZXhhbXBsZSwgd2l0aCBKU1ggYHJlZmBcclxuICogYXR0cmlidXRlcyBhbmQgc2VydmljZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmPFQ+XHJcbntcclxuXHRwcml2YXRlIF9yOiBUO1xyXG5cclxuXHQvKiogRXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSByZWZlcmVuY2VkIHZhbHVlIGNoYW5nZXMgKi9cclxuXHRwcml2YXRlIGNoYW5nZWRFdmVudCA9IG5ldyBFdmVudFNsb3Q8UmVmRnVuYzxUPj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGxpc3RlbmVyPzogUmVmRnVuYzxUPiwgaW5pdGlhbFJlZmVyZW5lPzogVClcclxuXHR7XHJcblx0XHRpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblxyXG5cdFx0dGhpcy5fciA9IGluaXRpYWxSZWZlcmVuZTtcclxuXHR9XHJcblxyXG5cdC8qKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSBjaGFuZ2VzLiAqL1xyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhIGNhbGxiYWNrIHRoYXQgd2FzIGFkZGVkIHdpdGggYWRkTGlzdGVuZXIuICovXHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5kZXRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgZ2V0IHIoKTogVCB7IHJldHVybiB0aGlzLl9yOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpcy5fciAhPT0gbmV3UmVmKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9yID0gbmV3UmVmO1xyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5maXJlKCBuZXdSZWYpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIENsZWFycyB0aGUgcmVmZXJlbmNlIHZhbHVlIGFuZCBhbHNvIGNsZWFycyBhbGwgYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLl9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuY2xlYXIoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VydmljZURlZmluaXRpb25zIGludGVyZmFjZSBzZXJ2ZXMgYXMgYSBtYXBwaW5nIGJldHdlZW4gc2VydmljZSBuYW1lcyBhbmQgc2VydmljZSB0eXBlcy5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgaW50ZW5kZWQgdG8gYmUgYXVnbWVudGVkIGJ5IG1vZHVsZXMgdGhhdCBkZWZpbmUgYW5kL29yIHVzZSBzcGVjaWZpYyBzZXJ2aWNlcy5cclxuICogVGhpcyBhbGxvd3MgcGVyZm9ybWluZyBzZXJ2aWNlIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIGluIHR5cGUtc2FmZSBtYW5uZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxue1xyXG5cdC8qKiBCdWlsdC1pbiBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiAqL1xyXG5cdFwiU3RkRXJyb3JIYW5kbGluZ1wiOiBJRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWx0LWluIHNlcnZpY2UgZm9yIGxhenkgcGVvcGxlIC0gY2FuIGJlIHVzZWQgZm9yIHF1aWNrIHByb3RvdHlwZXMgd2l0aG91dCB0aGUgbmVlZCB0b1xyXG5cdCAqIGF1Z21lbnQgdGhlIGludGVyZmFjZS5cclxuXHQgKi9cclxuXHRcImFueVwiOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzZXJ2aWNlIHRoYXQgY2FuIGJlIGludm9rZWQgd2hlbiBhbiBlcnJvciAtXHJcbiAqIHVzdWFsbHkgYW4gZXhjZXB0aW9uIC0gaXMgZW5jb3VudGVyZWQgYnV0IGNhbm5vdCBiZSBoYW5kbGVkIGxvY2FsbHkuIEEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50c1xyXG4gKiB0aGlzIHNlcnZpY2Ugd291bGQgbm9ybWFsbHkgcmVtZW1iZXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIHVwZGF0ZSBpdHNlbGYsc28gdGhhdCBpbiBpdHNcclxuICogcmVuZGVyIG1ldGhvZCBpdCB3aWxsIHByZXNlbnQgdGhlIGVycm9yIHRvIHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGlzIGltcGxlbWVudGVkIGJ5IHRoZSBSb290IFZpcnR1YWwgTm9kZSBhcyBhIGxhc3QgcmVzb3J0IGZvciBlcnJvclxyXG4gKiBoYW5kbGluZy4gVGhlIFJvb3QgVk4gd2lsbCBkaXNwbGF5IGEgc2ltcGxlIFVJIHNob3dpbmcgdGhlIGVycm9yIGFuZCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvXHJcbiAqIHJlc3RhcnQgLSBpbiB0aGUgaG9wZSB0aGF0IHRoZSBlcnJvciB3aWxsIG5vdCByZXBlYXQgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlXHJcbi8vIC8vIFJlZjw+IGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4vLyAvL1xyXG4vLyAvL1x0Y2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4vLyAvL1x0e1xyXG4vLyAvL1x0XHRAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuLy8gLy9cdFx0cmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4vLyAvL1x0fVxyXG4vLyAvL1xyXG4vLyAvLyBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIHdoZW4gZmlyc3QgYWNjZXNzZWQuIFRoZVxyXG4vLyAvLyBhY3R1YWwgb2JqZWN0IHdpbGwgYmUgYSBQcm94eSB0byBSZWY8PiBvZiB0aGUgZ2l2ZW4gdHlwZSAoSFRNTERpdkVsZW1lbnQgaW4gdGhpcyBjYXNlKS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldCwgbmFtZSlcclxuLy8ge1xyXG4vLyBcdGZ1bmN0aW9uIHJlZkdldCggb2JqLCBrZXkpXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucjtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yW2tleV07XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiByZWZTZXQoIG9iaiwga2V5LCB2YWwsIHJlY2VpdmVyKTogYm9vbGVhblxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRvYmouciA9IHZhbDtcclxuLy8gXHRcdGVsc2VcclxuLy8gXHRcdFx0b2JqLnJba2V5XSA9IHZhbDtcclxuXHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIGVuc3VyZVByb3h5KCB0aGlzT2JqOiBhbnksIGF0dHJOYW1lOiBzdHJpbmcpOiBhbnlcclxuLy8gXHR7XHJcbi8vIFx0XHRsZXQgcHJveHkgPSB0aGlzT2JqW2F0dHJOYW1lXTtcclxuLy8gXHRcdGlmICghcHJveHkpXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHByb3h5ID0gbmV3IFByb3h5KCBuZXcgUmVmPGFueT4oKSwgeyBnZXQ6IHJlZkdldCwgc2V0OiByZWZTZXQgfSk7XHJcbi8vIFx0XHRcdHRoaXNPYmpbYXR0ck5hbWVdID0gcHJveHk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gcHJveHk7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRsZXQgYXR0ck5hbWUgPSBcIl9yZWZfXCIgKyBuYW1lO1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRzZXQoIHZhbCkgeyBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpLnIgPSB2YWw7IH0sXHJcbi8vIFx0XHRcdGdldCgpIHsgcmV0dXJuIGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSk7IH1cclxuLy8gXHRcdH1cclxuLy8gXHQpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIHJlZiBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gSlNYIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzLiBUaGlzIGNhbiBiZSBlaXRoZXIgdGhlXHJcbiAqIFtbUmVmXV0gY2xhc3Mgb3IgW1tSZWZGdW5jXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZQcm9wVHlwZTxUID0gYW55PiA9IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRsZXQgcmVmT2JqID0gcmVmIGFzIFJlZjxUPjtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCByZWZPYmouciA9PT0gb25seUlmKVxyXG5cdFx0XHRyZWZPYmouciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jPFQ+KSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiRnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlIGZ1bmN0aW9uIGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IG5lZWRlZFxyXG4gKiBiZWNhdXNlIGN1cnJlbnRseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdGhlIGA8PmAgZnJhZ21lbnQgbm90YXRpb24gaWYgYSBjdXN0b20gSlNYIGZhY3RvcnlcclxuICogZnVuY3Rpb24gaXMgdXNlZC5cclxuICpcclxuICogVXNlIGl0IGFzIGZvbGxvd3M6XHJcbiAqIGBgYHRzeFxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcbiAqXHRcdFx0PGRpdjEvPlxyXG4gKlx0XHRcdDxkaXYyLz5cclxuICpcdFx0XHQ8ZGl2My8+XHJcbiAqXHRcdDwvbWltLkZyYWdtZW50PlxyXG4gKlx0fVxyXG4gIGBgYFxyXG5cclxuICogQHBhcmFtIHByb3BzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KCBwcm9wczogQ29tcFByb3BzPHt9Pik6IGFueSB7fVxyXG5cclxuXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2xhc3Mgb2YgaGFuZGxlcnMgb2YgY3VzdG9tIGF0dHJpYnV0ZXNcclxuICogdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy4gVGhlIHJlcXVpcmVtZW50cyBvbiBzdWNoIGNsYXNzZXMgYXJlOlxyXG4gKiAxLiBJbXBsZW1lbnQgYSBjb25zdHJ1Y3RvciBhY2NlcHRpbmcgSUVsbVZOLCBhdHRyaWJ1dGUgdmFsdWUgYW5kIGF0dHJpYnV0ZSBuYW1lICh0aGlzIGFsbG93c1xyXG4gKiAgIHRoZSBzYW1lIGhhbmRsZXIgdG8gc2VydmUgZGlmZmVyZW50IGF0dHJpYnV0ZXMpLlxyXG4gKiAyLiBJbXBsZW1lbnQgdGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciB0aGF0IHdpbGwgYWN0IG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBwcm92aWRlc1xyXG5cdCAqIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIEF0dHJpYnV0ZSBuYW1lIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB0aGUgaGFuZGxlclxyXG5cdCAqIHN1cHBvcnRzIGRpZmZlcmVudCBhdHRyaWJ1dGVzLiBCeSB0aGUgdGltZSB0aGlzIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIERPTSBlbGVtZW50IGhhZFxyXG5cdCAqIGFscmVhZHkgYmVlbiBjcmVhdGVkIGFuZCBzdGFuZGFyZCBhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMgaGFkIGJlZW4gYXBwbGllZC5cclxuXHQgKiBAcGFyYW0gZWxtVk4gVmlydHVhbCBub2RlIGZvciB0aGlzIGVsZW1lbnQuIFRoZSBoYW5kbGVyIGNhbiByZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgZnJvbVxyXG5cdCAqICAgdGhpcyBpbnRlcmZhY2UgYW5kIGFsc28gdXNlIG90aGVyIG1ldGhvZHMgKGUuZy4gc3Vic2NyaWJlIHRvIHNlcnZpY2VzKS5cclxuXHQgKiBAcGFyYW0gYXR0clZhbCBJbml0aWFsIHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICogQHBhcmFtIGF0dHJOYW1lIE5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRuZXcoIGVsbVZOOiBJRWxtVk4sIGF0dHJWYWw6IFQsIGF0dHJOYW1lPzogc3RyaW5nKTogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyBhbiBleGlzdGluZyBjdXN0b20gYXR0cmlidXRlIHdpdGggdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcFZhbCBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiBjaGFuZ2VzIHdlcmUgbWFkZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSggbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlcm1pbmF0ZXMgdGhlIGZ1bmN0aW9uaW5nIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgZWl0aGVyXHJcblx0ICogd2hlbiBhIG5ldyByZW5kZXJpbmcgb2YgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIHRoZSBhdHRyaWJ1dGUgYW55bW9yZSBvciBpZiB0aGUgZWxlbWVudFxyXG5cdCAqIGlzIHJlbW92ZWQuIEFsdGhvdWdoIHRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLCBtb3N0IGhhbmRsZXJzIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgaXQgdG9cclxuXHQgKiBwcm9wZXJseSBjbGVhbnVwIGFueSByZXNvdXJjZXMgKGUuZy4gZXZlbnQgaGFuZGxlcnMpIHRvIGF2b2lkIGxlYWtzLlxyXG5cdCAqIEBwYXJhbSBpc1JlbW92YWwgVHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyByZW1vdmVkIGFuZCBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZ1xyXG5cdCAqICAgdXBkYXRlZCBhbmQgdGhlIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgcHJvdmlkZWQuIElmIHRoZSBoYW5kbGVyIGFkZHMgYW55IGV2ZW50XHJcblx0ICogICBsaXN0ZW5lcnMgdG8gdGhlIGVsZW1lbnQsIHRoZW4gaXQgaGFzIHRvIHJlbW92ZSB0aGVtIG9uIHVwZGF0ZSBidXQgZG9lbid0IGhhdmUgdG8gZG8gaXRcclxuXHQgKiAgIG9uIGVsZW1lbnQgcmVtb3ZhbC5cclxuXHQgKi9cclxuXHR0ZXJtaW5hdGU/KCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0LyoqIFRvcC1sZXZlbCBub2RlICovXHJcblx0Um9vdCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgY3JlYXRlZCB2aWEgbmV3ICovXHJcblx0SW5kZXBlbmRlbnRDb21wLFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBsYWlkIG91dCB1c2luZyBKU1ggKi9cclxuXHRNYW5hZ2VkQ29tcCxcclxuXHJcblx0LyoqIFN0YXRlbGVzcyBjb21wb25lbnQgKHNpbXBsZSByZW5kZXJpbmcgZnVuY3Rpb24gYWNjZXB0aW5nIHByb3BzKSAqL1xyXG5cdEZ1bmNDb21wLFxyXG5cclxuXHQvKiogRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guICovXHJcblx0RWxtLFxyXG5cclxuXHQvKiogVGV4dCBub2RlICovXHJcblx0VGV4dCxcclxuXHJcblx0LyoqIFdyYXBwZXIgYXJvdW5kIGEgZnVuY3Rpb24vbWV0aG9kIHRoYXQgY2FuIGJlIHVwZGF0ZWQgaW5kZXBlbmRlbnRseS4gKi9cclxuXHRGdW5jUHJveHksXHJcblxyXG5cdC8qKiBOb2RlIHRoYXQgd2FpdHMgZm9yIGEgcHJvbWlzZSB0byBiZSBzZXR0bGVkIGFuZCB0aGVuIGRpc3BsYXlzIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBjb250ZW50LiAqL1xyXG5cdFByb21pc2VQcm94eSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHJlYWRvbmx5IHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBtaW0uQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIG1pbS5Db21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHR3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc0NvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBjb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1hbmFnZWRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hbmFnZWRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgY2xhc3MuICovXHJcblx0cmVhZG9ubHkgY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJSW5kZXBlbmRlbnRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgY29tcG9uZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIElFbG1WTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBET00gZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsbVZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgbmFtZS4gKi9cclxuXHRyZWFkb25seSBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIChhcyBvcHBvc2VkIHRvIEhUTUwpLiAqL1xyXG5cdHJlYWRvbmx5IGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgb2JqZWN0LiAqL1xyXG5cdHJlYWRvbmx5IGVsbTogRWxlbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUZXh0Vk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgdGV4dCBET00gbm9kZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIFRleHQgb2YgdGhlIG5vZGUuICovXHJcblx0dGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKiogVGV4dCBET00gbm9kZS4gKi9cclxuXHR0ZXh0Tm9kZTogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNsaWNlIHR5cGUgZGVmaW5lcyBhbiBvYmplY3Qgc3RydWN0dXJlIGRlc2NyaWJpbmdcclxuICogcGFyYW1ldGVycyBmb3IgcmVuZGVyaW5nIGFuIGVsZW1lbnQuIFRoZXkgaW5jbHVkZTogQ2xhc3MsIFN0eWxlLCBQcm9wZXJ0aWVzLCBDb250ZW50LiBUaGlzXHJcbiAqIHN0cnVjdHVyZSBpcyBpbnRlbmRlZCB0byBiZSBwYXNzZWQgZWl0aGVyIGluIHRoZSBjb25zdHJ1Y3RvciBvciB2aWEgdGhlIHByb3RlY3RlZCBtZXRob2RzIG9mXHJcbiAqIGRlcml2ZWQgY2xhc3Nlcywgc28gdGhhdCB0aGV5IGNhbiBjb250cm9sIHBhcmFtZXRlcnMgb2YgZWxlbWVudHMgcmVuZGVyZWQgYnkgdGhlIHVwcGVyIGNsYXNzZXMuXHJcbiAqIFRoZSBtYWluIHB1cnBvc2Ugb2YgdGhpcyBzdHJ1Y3R1cmUgaXMgdG8gY29tYmluZSBwYXJhbWV0ZXJzIGRlZmluaW5nIGFuIGVsZW1lbnQgaW50byBhIHNpbmdsZVxyXG4gKiBvYmplY3QgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzIGNhbGxlcnMgb2YgY2xhc3NlcyBzaG91bGQgZGVhbCB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2UgPVxyXG57XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogY3NzLlN0eWxlc2V0O1xyXG5cdHByb3BzPzogb2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdF07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSwgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGVcclxuICogY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VD4gfFxyXG5cdFx0XHRcdEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBjbGFzcyBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIENsYXNzUHJvcFR5cGUgPSBzdHJpbmcgfCBjc3MuSUNsYXNzUnVsZSB8IGNzcy5JQ2xhc3NOYW1lUnVsZSB8IChzdHJpbmcgfCBjc3MuSUNsYXNzUnVsZSB8IGNzcy5JQ2xhc3NOYW1lUnVsZSlbXTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBkZWZpbmluZyB0aGUgaWQgcHJvcGVydHkgb2YgSFRNTCBlbGVtZW50c1xyXG4gKi9cdFx0XHRcdFxyXG5leHBvcnQgdHlwZSBJRFByb3BUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgY3NzLklJRFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBjb2xvciB2YWx1ZXMgZm9yIGRpZmZlcmVudCBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGVsZW1lbnQgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdC8vIHN0YW5kYXJkIEhUTUwgYW5kIFNWRyBlbGVtZW50IHByb3BlcnRpZXNcclxuXHRjbGFzcz86IENsYXNzUHJvcFR5cGU7XHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXIgfCBjc3MuSUlEUnVsZTtcclxuXHRsYW5nPzogc3RyaW5nO1xyXG5cdHJvbGU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBjc3MuU3R5bGVzZXQ7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZWxtLnRhZ05hbWUgPT09IFwic3ZnXCI7XHJcblx0Ly8gcmV0dXJuIChlbG0gYXMgYW55KS5vd25lclNWR0VsZW1lbnQgPT09IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEpTWCBuYW1lc3BhY2UgZGVmaW5pbmcgaG93IFR5cGVTY3JpcHQgcGVyZm9ybXMgdHlwZSBjaGVja3Mgb24gSlNYIGVsZW1lbnRzLGNvbXBvbmVudHNcclxuLy8gcHJvcGVydGllcyBhbmQgY2hpbGRyZW4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOb2RlW10ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHNcclxuXHR7XHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbiBvZiBtaW0uanN4IGZ1bmN0aW9uIC0gSlNYIEZhY3RvcnlcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7Y3JlYXRlTm9kZXNGcm9tSlNYfSBmcm9tIFwiLi4vY29yZS9Db250ZW50RnVuY3NcIlxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWcsIHByb3BzLCBjaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gZm9yIHRoZSByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSBleHBvcnRlZCBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7RWxtQXR0ciwgUHJvcFR5cGV9IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCI7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciBjbGFzcyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcbiAqIEBwYXJhbSBmYWN0b3J5IGN1c3RvbSBhdHRyaWJ1dGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggYXR0ck5hbWU6IHN0cmluZywgaGFuZGxlckNsYXNzOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+KTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBhdHRyTmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5DdXN0b21BdHRyLCBoYW5kbGVyQ2xhc3MgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGV2ZW50IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBldmVudE5hbWUsIHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gb2YgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgU2xpY2Ugb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU2xpY2VzKCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbiAqIGludG8gdGhlIGdpdmVuIHJlc3VsdGFudCBzbGljZS5cclxuICogQHBhcmFtIHJlc1NsaWNlIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqIEBwYXJhbSBzbGljZXMgQXJyYXkgb2YgU2xpY2Ugb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdHV0aWxzLm1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lcyBBcnJheSBvZiBzdHJpbmdzIG9yIHN0cmluZyBhcnJheXMgd2l0aCBjbGFzcyBuYW1lc1xyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgY2xhc3Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuICogYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogY3NzLlN0eWxlc2V0W10pOiBjc3MuU3R5bGVzZXRcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZVN0eWxlcyggLi4uc3R5bGVzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuICogQHBhcmFtIHJlc1N0eWxlIFJlc3VsdGFudCBzdHlsZSBvYmplY3RcclxuICogQHBhcmFtIHN0eWxlcyBBcnJheSBvZiBzdHlsZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlOiBjc3MuU3R5bGVzZXQsIC4uLnN0eWxlczogKGNzcy5TdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHR1dGlscy5tZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ2FsbGJhY2sgd3JhcHBpbmdcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7d3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9TY2hlZHVsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLiBOb3RlIHRoYXQgdGhlIFZOIGNhbiBiZSBudWxsL3VuZGVmaW5lZDtcclxuICogaG93ZXZlciwgaW4gdGhpcyBjYXNlIGlmIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0IGl0IHdpbGwgbm90IGJlIGhhbmRsZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IElWTm9kZSk6IFRcclxue1xyXG5cdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGF0LCB2bik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzLCB0aGlzLnZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmNQcm94eSBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBWYWx1ZSB0byBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gaW52b2tpbmcgdGhlIGZ1bmN0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlXHJcblx0ICogY2xhc3MgYmFzZWQgY29tcG9uZW50IHRoYXQgcmVuZGVyZWQgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd2lsbCBiZSB1c2VkICh3aGljaCBpcyB0aGVcclxuXHQgKiBtb3N0IGNvbW1vbiBjYXNlKS5cclxuXHQgKi9cclxuXHR0aGlzQXJnPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHJvb3QgZnJvbSBcIi4uL2NvcmUvUm9vdFZOXCJcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhXHJcbiAqIHN5bmNocm9ub3VzIG1hbm5lci5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGVuXHJcbiAqIHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRyb290LnVubW91bnRSb290U3luYyggYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWltYmwtc3BlY2lmaWMgc3R5bGUgc2NoZWR1bGVyIHRoYXQgY29vcmRpbmF0ZXMgTWltY3NzIERPTSB3cml0aW5nIHdpdGggTWltYmxcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7aW5pdGlhbGl6ZU1pbWJsU3R5bGVTY2hlZHVsZXJ9IGZyb20gXCIuLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuXHJcbi8vIHNldCBNaW1ibCBzdHlsZSBzY2hlZHVsZXIgYXMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIGZvciBzdHlsZS1yZWxhdGVkIERPTS13cml0aW5nIG9wZXJhdGlvbnMuXHJcbmV4cG9ydCBsZXQgbWltYmxTdHlsZVNjaGVkdWxlclR5cGUgPSBpbml0aWFsaXplTWltYmxTdHlsZVNjaGVkdWxlcigpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgLSB1c2UgYEB0cmlnZ2VyYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc0NvbXBWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JQ2xhc3NDb21wVk5cclxue1xyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwdWJsaWMgY29tcDogbWltLklDb21wb25lbnQ7XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogbWltLlVwZGF0ZVN0cmF0ZWd5XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSA/IHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHJlbmRlcigpIG9uIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyV2F0Y2hlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmNvbXAucmVuZGVyLCB0aGlzLnJlcXVlc3RVcGRhdGUsIHRoaXMuY29tcCwgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyLmRpc3Bvc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgZGlkTW91bnQoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMuY29tcC5kaWRNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmRpZE1vdW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wIHByb3BlcnR5IGhhcyBjaGFuZ2VkIHdpdGhvdXQgYWN0dWFsbHkgdW5tb3VudGluZyB0aGUgVk4uXHJcbiAgICAvLyBXZSBuZWVkIHRvIHN0b3Agd2F0Y2hpbmcgdGhlIG9sZCBjb21wb25lbnQncyByZW5kZXIgYW5kIHN0YXJ0IHdhdGNoaW5nIHRoZSBuZXcgb25lJ3MuXHJcbiAgICBwcm90ZWN0ZWQgcmVlc3RhYmxpc2hXYXRjaGVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuY29tcC5yZW5kZXIsIHRoaXMucmVxdWVzdFVwZGF0ZSwgdGhpcy5jb21wLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55XHJcbiAgICAvLyB0cmlnZ2VyIG9iamVjdHMgYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZVxyXG4gICAgLy8gdGh1cyB0cmlnZ2VycmluZyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSByZW5kZXJXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0luZGVwZW5kZW50Q29tcFZOfSBmcm9tIFwiLi9JbmRlcGVuZGVudENvbXBWTlwiXHJcbmltcG9ydCB7TWFuYWdlZENvbXBWTn0gZnJvbSBcIi4vTWFuYWdlZENvbXBWTlwiXHJcbmltcG9ydCB7RnVuY1ZOfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5pbXBvcnQge0VsbVZOfSBmcm9tIFwiLi9FbG1WTlwiXHJcbmltcG9ydCB7VGV4dFZOfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5pbXBvcnQge0Z1bmNQcm94eVZOfSBmcm9tIFwiLi9GdW5jUHJveHlWTlwiXHJcbmltcG9ydCB7UHJvbWlzZVByb3h5Vk59IGZyb20gXCIuL1Byb21pc2VQcm94eVZOXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgZWl0aGVyIGEgc2luZ2xlIHZpcnR1YWwgbm9kZSBvciBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuXHJcbi8vIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhbiBhcnJheSwgdGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXRcclxuLy8gY29udGVudCBpcyBhbiBhcnJheSwgdGhlbiBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50c1xyXG4vLyBtaWdodCBhbHNvIGJlIGFycmF5cywgdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm5cclxuXHRcdFx0XHRcdFx0PyAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm4gYXMgVk5cclxuXHRcdFx0XHRcdFx0OiBuZXcgSW5kZXBlbmRlbnRDb21wVk4oIGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTltdXHJcbntcclxuXHRsZXQgbm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50KTtcclxuXHRyZXR1cm4gIW5vZGVzID8gbnVsbCA6IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMgOiBbbm9kZXNdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnJhZ21lbnQpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgbWltLkZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uUHJvbWlzZVByb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLnByb21pc2UpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggcHJvcHMsIGNoaWxkcmVuKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZVxyXG5cdFx0Ly8gYW4gYXJyYXkgb2YgYSBjZXJ0YWluIHR5cGUsIGUuZy4gY2xhc3MgQSBleHRlbmRzIG1pbS5Db21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdH1cclxuXHJcblx0Ly8vICNpZiBERUJVR1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHRhZyBpbiBqc3ggcHJvY2Vzc2luZyBmdW5jdGlvbjogXCIgKyB0YWcpO1xyXG5cdC8vLyAjZW5kaWZcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgb2YgaXRlbXMuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBhcnI6IGFueVtdKTogVk5bXVxyXG57XHJcblx0aWYgKGFyci5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IG5vZGVzOiBWTltdID0gW107XHJcblx0Zm9yKCBsZXQgaXRlbSBvZiBhcnIpXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1Ob2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGl0ZW0pO1xyXG5cdFx0aWYgKGl0ZW1Ob2RlcyA9PT0gbnVsbClcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBpdGVtTm9kZXMpKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB2biBvZiBpdGVtTm9kZXMpXHJcblx0XHRcdFx0bm9kZXMucHVzaCggdm4pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRub2Rlcy5wdXNoKCBpdGVtTm9kZXMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5vZGVzLmxlbmd0aCA+IDAgPyBub2RlcyA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNldCBhcyBjdXJyZW50IGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnQoKTogbWltLklDb21wb25lbnRcclxue1xyXG5cdC8vIHRoZSBzX2N1cnJlbnRWTiBzaG91bGQgcG9pbnQgdG8gdGhlIHZpcnR1YWwgbm9kZSBiZWhpbmQgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCxcclxuXHQvLyB3aGljaCBzaG91bGQgYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGNhbGxzIHRoZSBmdW5jdGlvbi5cclxuXHRyZXR1cm4gc19jdXJyZW50Q2xhc3NDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7RWxtQXR0ciwgQXR0clByb3BJbmZvLCBFdmVudFByb3BJbmZvLCBDdXN0b21BdHRyUHJvcEluZm8sIFByb3BUeXBlLCBQcm9wSW5mb30gZnJvbSBcIi4uL3V0aWxzL0VsbUF0dHJcIlxyXG5pbXBvcnQge1N2Z0VsbXN9IGZyb20gXCIuLi91dGlscy9TdmdFbG1zXCI7XHJcbmltcG9ydCB7ZGVlcENvbXBhcmV9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgRE9NIGVsZW1lbnQgY3JlYXRlZCB1c2luZyBKU1guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSUVsbVZOXHJcbntcclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuIFRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkIHdoZW4gdGhlIG5vZGUgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdFxyXG5cdC8vIHRpbWUuXHJcblx0cHVibGljIGVsbTogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBub3Qgd2UgbmVlZCB0byBjaGVjayB0aGUgbmFtZXNwYWNlVVJJIG9mIHRoZSBwYXJlbnRcclxuXHQvLyAoYW5jaG9yZSkgRE9NIG5vZGUuXHJcblx0cHVibGljIGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0YWdOYW1lOiBzdHJpbmcsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuRWxtO1xyXG5cdFx0dGhpcy5lbG1OYW1lID0gdGFnTmFtZTtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUga2V5IHByb3BlcnR5LiBJZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdFxyXG5cdFx0XHQvLyBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBlbGVtZW50J3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5lbG1OYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBvd25ETigpOiBETiB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudCBhbmQgY3JlYXRlIHRoZSBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGhpcy5lbG1OYW1lKTtcclxuXHRcdHRoaXMuaXNTdmcgPSBzdmdJbmZvICE9PSB1bmRlZmluZWQgJiYgKHN2Z0luZm8gIT09IHRydWUgfHwgdGhpcy5hbmNob3JETi5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoIFwic3ZnXCIpKTtcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHQ/IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBTdmdFbG1zLm5hbWVzcGFjZSwgU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0aGlzLmVsbU5hbWUpKVxyXG5cdFx0XHQ6IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHQvLyB0cmFuc2xhdGUgcHJvcGVydGllcyBpbnRvIGF0dHJpYnV0ZXMsIGV2ZW50cyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIChpZiBzcGVjaWZpZWQpXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbGVhc2VzIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgZWxlbWVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgZWxlbWVudCAoYW5kL29yIGNvbXBvbmVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHRcdC8vIGV4cGxpY2l0bHkgcmVtb3ZlZCwgd2UgZG8gaXQgdW5kZXIgdGhlIFJFTU9WRV9FVkVOVF9MSVNURU5FUlMgbWFjcm8gKHRoYXQgaXMsIHdlXHJcblx0XHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRzKCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gdGVybWluYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMucmVtb3ZlQ3VzdG9tQXR0cnMoIHRydWUpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwXHJcblx0XHR0aGlzLmVsbSA9IG51bGw7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhpcyBpcyB0aGUgc2FtZSB0eXBlIG9mIGVsZW1lbnQ7IHRoYXQgaXMsIGl0IGhhcyB0aGUgc2FtZVxyXG5cdFx0Ly8gbmFtZS5cclxuXHRcdHJldHVybiB0aGlzLmVsbU5hbWUgPT09IChuZXdWTiBhcyBFbG1WTikuZWxtTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIG5ldyBwcm9wcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgb25lc1xyXG5cdFx0bGV0IHNob3VsZENvbW1pdCA9ICFkZWVwQ29tcGFyZSggdGhpcy5wcm9wcywgKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gcmVuZGVyIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIGVpdGhlciBvbGQgb3IgbmV3IG5vZGUgaGFzIGNoaWxkcmVuXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyID0gdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHxcclxuXHRcdFx0XHRcdChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4gJiYgKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuO1xyXG5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdCwgc2hvdWxkUmVuZGVyIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0bmV3RWxtVk4ucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3RWxtVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvblxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0VsbVZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5LCB1cGRhdGVTdGFydGVneSBhbmQgY3JlYXRvciBwcm9wZXJ0eSAoZXZlbiBpZiB0aGVcclxuXHRcdC8vIHZhbHVlcyBhcmUgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0VsbVZOLmtleTtcclxuXHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBuZXdFbG1WTi51cGRhdGVTdHJhdGVneTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZUF0dHJzKCBuZXdFbG1WTi5hdHRycyk7XHJcblx0XHR0aGlzLnVwZGF0ZUV2ZW50cyggbmV3RWxtVk4uZXZlbnRzKTtcclxuXHRcdHRoaXMudXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0VsbVZOLmN1c3RvbUF0dHJzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyBvdmVyIHRoZSBvcmlnaW5hbCBwcm9wZXJ0aWVzIGFuZCBwdXRzIHRoZW0gaW50byB0aGUgYnVja2V0cyBvZiBhdHRyaWJ1dGVzLCBldmVudFxyXG5cdC8vIGxpc3RlbmVycyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBwYXJzZVByb3BzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucHJvcHMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJvcFZhbDogYW55LCBwcm9wSW5mbzogUHJvcEluZm8sIHByb3BUeXBlOiBQcm9wVHlwZTtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlnbm9yZSB0aGUga2V5IHByb3BlcnR5IGJlY2F1c2Ugd2UgYWxyZWFkeSBleHRyYWN0ZWQgaXQgaW4gdGhlIGNvbnN0cnVjdG9yXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByb3BWYWwgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BWYWwgPT0gbnVsbCB8fCBwcm9wVmFsID09PSBmYWxzZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCwgbnVsbCBhbmQgZmFsc2VcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJ1cGRhdGVTdHJhdGVneVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdXBkYXRlU3RyYXRlZ3kgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3BlcnR5IGFuZCBkZXRlcm1pbmUgaXRzIHR5cGUgKHJlZ3VsYXIgYXR0cmlidXRlLCBldmVudFxyXG5cdFx0XHRcdC8vIG9yIGN1c3RvbSBhdHRyaWJ1dGUpLiBOb3RlIHRoYXQgZ2V0UHJvcGVydHlJbmZvIG1heSByZXR1cm4gbnVsbCBvbmx5IGZvciByZWd1bGFyXHJcblx0XHRcdFx0Ly8gYXR0cmlidXRlcy5cclxuXHRcdFx0XHRwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdFx0cHJvcFR5cGUgPSBwcm9wSW5mbyA/IHByb3BJbmZvLnR5cGUgOiBQcm9wVHlwZS5BdHRyO1xyXG5cdFx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8sIHZhbDogcHJvcFZhbCB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIHByb3BJbmZvLCBwcm9wVmFsKTtcclxuXHRcdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMgPSB7fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHNbcHJvcE5hbWVdID0gZXZlbnRJbmZvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyOiB1bmRlZmluZWR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRBdHRycyBjYWxsZWQgd2l0aCB0aGlzLmF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuYXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydGQgPSB0aGlzLmF0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIHRoaXMuZWxtLCBuYW1lLCBydGQuaW5mbywgcnRkLnZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgRE9NIGF0dHJpYnV0ZXMgb2YgdGhpcyBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlQXR0cnMoIG5ld0F0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBcImNhY2hlXCIgc2V2ZXJhbCBtZW1lYmVycyBmb3IgZmFzdGVyIGFjY2Vzc1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtO1xyXG5cdFx0bGV0IG9sZEF0dHJzID0gdGhpcy5hdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgYXR0cmlidXRlcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3IG9uZXMgYW5kXHJcblx0XHQvLyB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRBdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRBdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRSVEQgPSBvbGRBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnMgPyBuZXdBdHRyc1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld1JURCB8fCAhbmV3UlRELnZhbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIGF0dHJpYnV0ZSBmcm9tIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0XHRFbG1BdHRyLnJlbW92ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGhhcyBhIGRpZmZlcmVudCB2YWx1ZSwgcmVtbWViZXIgdGhpc1xyXG5cdFx0XHRcdFx0Ly8gdmFsdWUgYW5kIHNldCBpdCB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0XHRFbG1BdHRyLnVwZGF0ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8sIG9sZFJURC52YWwsIG5ld1JURC52YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgYXR0cmlidXRlczsgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdBdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdBdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRBdHRycyAmJiAobmFtZSBpbiBvbGRBdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzW25hbWVdO1xyXG5cdFx0XHRcdEVsbUF0dHIuc2V0QXR0ciggZWxtLCBuYW1lLCBuZXdSVEQuaW5mbywgbmV3UlRELnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmF0dHJzID0gbmV3QXR0cnM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgaW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkRXZlbnRzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVc2luZyB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZSBhbmQgaXRzIHZhbHVlIHNldCB0aGUgYXBwcm9wcmlhdGUgYXR0cmlidXRlKHMpIG9uIHRoZVxyXG5cdC8vIGVsZW1lbnQuIFRoaXMgbWV0aG9kIGhhbmRsZXMgc3BlY2lhbCBjYXNlcyBvZiBwcm9wZXJ0aWVzIHdpdGggbm9uLXRyaXZpYWwgdmFsdWVzLlxyXG5cdHByaXZhdGUgYWRkRXZlbnQoIG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0ZXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMuIFNpbmNlIG1vZGVybiBicm93c2VycyBkb24ndCBsZWFrIHdoZW4gbGlzdGVuZXJzIGFyZSBub3RcclxuXHRcdC8vIGV4cGxpY2l0bHkgcmVtb3ZlZCwgd2UgZG8gaXQgdW5kZXIgdGhlIFJFTU9WRV9FVkVOVF9MSVNURU5FUlMgbWFjcm8gKHRoYXQgaXMsIHdlXHJcblx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRwcml2YXRlIHJlbW92ZUV2ZW50cygpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlRXZlbnQoIG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3RXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkRXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRFdmVudCA9IG9sZEV2ZW50c1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3RXZlbnQgPSBuZXdFdmVudHMgPyBuZXdFdmVudHNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdFdmVudClcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCwgbmV3RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3RXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0V2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRFdmVudHMgJiYgKG5hbWUgaW4gb2xkRXZlbnRzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdFdmVudHNbbmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHMgPSBuZXdFdmVudHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRFdmVudDogRXZlbnRSdW5UaW1lRGF0YSwgbmV3RXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZG91YmxlLWVxdWFsLXNpZ24gZm9yIHVzZUNhcHR1cmUgaXMgb24gcHVycG9zZSwgYmVjYXVzZSB1c2VDYXB0dXJlIGNhbiBiZSB1bmRlZmluZWQgb3IgYm9vbGVhblxyXG5cdFx0aWYgKG9sZEV2ZW50Lm9yZ0Z1bmMgPT09IG5ld0V2ZW50Lm9yZ0Z1bmMgJiZcclxuXHRcdFx0b2xkRXZlbnQudGhhdCA9PT0gbmV3RXZlbnQudGhhdCAmJlxyXG5cdFx0XHRvbGRFdmVudC51c2VDYXB0dXJlID09IG5ld0V2ZW50LnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSBvbGRFdmVudC53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbW92ZSBvbGQgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkRXZlbnQud3JhcHBlciwgb2xkRXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgbmV3IHdyYXBwZXIgYW5kIGFkZCBpdCBhcyBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIG5ld0V2ZW50KTtcclxuXHRcdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgbmV3RXZlbnQud3JhcHBlciwgbmV3RXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyLiBUaGUgd3JhcHBlciBpcyBib3VuZCB0b1xyXG5cdC8vIHRoZSBpbnN0YW5jZSBvZiBFbG1WTiBhbmQgdGh1cyBjYW4gaW50ZXJjZXB0IGV4Y2VwdGlvbnMgYW5kIHByb2Nlc3MgdGhlbSB1c2luZyB0aGUgc3RhbmRhcmRcclxuXHQvLyBlcnJvciBzZXJ2aWNlLiBVbmxlc3MgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGFscmVhZHkgYSBib3VuZCBmdW5jdGlvbiwgaXQgd2lsbCBiZSBjYWxsZWRcclxuXHQvLyB3aXRoIFwidGhpc1wiIHNldCB0byBlaXRoZXIgdGhlIFwiZXZlbnQudGhhdFwiIG9iamVjdCBvciwgaWYgdGhlIGxhdHRlciBpcyB1bmRlZmluZWQsIHRvIHRoZVxyXG5cdC8vIFwiY3JlYXRvclwiIG9iamVjdCwgd2hpY2ggaXMgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQgaSBpdHMgcmVuZGVyXHJcblx0Ly8gbWV0aG9kLlxyXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYywgZXZlbnQudGhhdCA/IGV2ZW50LnRoYXQgOiB0aGlzLmNyZWF0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBjcmVhdGUgYW5kIGluaXRpYWxpemUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IGN1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIGN1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGlzUmVtb3ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbUF0dHJzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQ3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBvbGRDdXN0b21BdHRyID0gb2xkQ3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29uc3QgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzID8gbmV3Q3VzdG9tQXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdDdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgY3VzdG9tIHByb3BlcnR5IGFuZCByZW1lbWJlciB0aGUgbmV3IHZhbHVlXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnVwZGF0ZSggbmV3Q3VzdG9tQXR0ci52YWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHVwZGF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBuZXdDdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBuZXdDdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IGRlZmluaW5nIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0cHVibGljIHVwZGF0ZVN0cmF0ZWd5OiBtaW0uVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIEFycmF5IG9mIGNoaWxkcmVuIG9iamVjdHMuXHJcblx0cHJpdmF0ZSBjaGlsZHJlbjogYW55W107XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuIFRoZSByZWYgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgb24gdXBkYXRlLlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjdXJyZW50IHZhbHVlcy5cclxuXHRwcml2YXRlIGF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVpciByZXNwZWN0aXZlXHJcblx0Ly8gcGFyYW1ldGVycy5cclxuXHRwcml2YXRlIGV2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBjdXN0b20gZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCB0aGVpciByZXNwZWN0aXZlXHJcblx0Ly8gaGFuZGxlciBvYmplY3RzIGFuZCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBjdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIHJlZ3VsYXIgYXR0cmlidXRlXHJcbmludGVyZmFjZSBBdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgYXR0cmlidXRlIC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBBdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dmFsOiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBldmVudCBsaXN0ZW5lclxyXG5pbnRlcmZhY2UgRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBldmVudCAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogRXZlbnRQcm9wSW5mbztcclxuXHJcblx0Ly8gT3JpZ2luYWwgZXZlbnQgY2FsbGJhY2sgcGFzc2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgZXZlbnQgcHJvcGVydHkgaW4gSlNYXHJcblx0b3JnRnVuYzogbWltLkV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgd2lsbCBiZSByZWZlcmVuY2VkIGJ5IFwidGhpc1wiIHdpdGhpbiB0aGUgaW52b2tlZCBmdW5jdGlvblxyXG5cdHRoYXQ/OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZT86IGJvb2xlYW47XHJcblxyXG5cdC8vIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3ZSBjcmVhdGUgYW5kIGJpbmQgdG8gb3VyIG5vZGUgYW5kIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gV2UgbmVlZFxyXG5cdC8vIHRoaXMgd3JhcHBlciBpbiBvcmRlciB0byBjYXRjaCBleGNlcHRpb24gaW4gdGhlIGNhbGxiYWNrIGFuZCBwYXNzIHRoZW0gb24gdG8gYW4gZXJyb3JcclxuXHQvLyBoYW5kbGluZyBzZXJ2aWNlLiBUaGUgd3JhcHBlciBpcyBtYXJrZWQgb3B0aW9uYWwgYmVjYXVzZSBpdCBpcyBjcmVhdGVkIG9ubHkgaWYgYSBuZXdcclxuXHQvLyBldmVudCBsaXN0ZW5lciBpcyBhZGRlZDsgdGhhdCBpcywgaWYgZHVyaW5nIHVwZGF0ZSwgdGhlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGlzIHRoZVxyXG5cdC8vIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVyIGJlY2F1c2UgdGhlIG9sZCBvbmUgd2lsbCBiZSB1c2VkLlxyXG5cdHdyYXBwZXI/OiAgbWltLkV2ZW50RnVuY1R5cGU8RXZlbnQ+O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggY3VzdG9tIHByb3BlcnR5LlxyXG5pbnRlcmZhY2UgQ3lzdG9tQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGN1c3RvbSBhdHRyaWJ1dGUgLSBjYW5ub3QgYmUgbnVsbFxyXG5cdGluZm86IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuXHR2YWw6IGFueTtcclxuXHJcblx0Ly8gSGFuZGxlciBvYmplY3QgdGhhdCBrbm93cyB0byBkZWFsIHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xyXG5cdGhhbmRsZXI6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG4vLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4sIHVzZUNhcHR1cmU6IHByb3BWYWxbMV0gYXMgYm9vbGVhbiB9O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMylcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcbmltcG9ydCB7Y3JlYXRlV2F0Y2hlciwgSVdhdGNoZXJ9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8gY29ubmVjdCBiZXR3ZWVuIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgdGhlIFZOcyBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmxldCBzeW1LZXlzVG9Ob2RlcyA9IFN5bWJvbCggXCJzeW1LZXlzVG9Ob2Rlc1wiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKiBcclxuICogVGhlIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlcyB0aGF0IHVzZSB0aGlzIGZ1bmN0aW9uIGlzIGtlcHQgaW4gYSBtYXAgZnJvbSB0aGVcclxuICoga2V5cyB0byB0aGUgbm9kZXMuIFRoZSBtYXAgaXMgc3RvcmVkIGluIGEgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eVZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IG1pbS5GdW5jUHJveHlQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuRnVuY1Byb3h5O1xyXG5cdFx0dGhpcy5mdW5jID0gcHJvcHMuZnVuYyBhcyAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcblx0XHR0aGlzLnRoaXNBcmcgPSBwcm9wcy50aGlzQXJnIHx8IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRcdHRoaXMuYXJncyA9IHByb3BzLmFyZ3M7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cclxuXHRcdC8vIGlmIGEga2V5IHdhcyBub3QgcHJvdmlkZWQgd2UgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzQXJnICh3aGljaCBtaWdodCBiZSB0aGUgY3VycmVudFxyXG5cdFx0Ly8gY29tcG9uZW50KSBhcyBhIGtleS4gSWYgdGhhdCBpcyB1bmRlZmluZWQgZWl0aGVyIHdlIHVzZSB0aGUgZnVuY3Rpb24gaXRzZWxmIGFzIGEga2V5LlxyXG4gICAgICAgIHRoaXMubGlua0tleSA9IHByb3BzLmtleSB8fCB0aGlzLnRoaXNBcmcgfHwgdGhpcy5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyByZXBsYWNlQXJncyggYXJnczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hcmdzID0gYXJncztcclxuXHRcdHRoaXMucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHQ7IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHJlbmRlck9uVXBkYXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5yZW5kZXJSZXF1aXJlZDsgfTtcclxuXHJcblxyXG5cclxuICAgIC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbiBwcm94eSBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJldHVybiB0aGlzLmZ1bmMuYXBwbHkoIHRoaXMudGhpc0FyZywgdGhpcy5hcmdzKTtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmNXYXRjaGVyKCB0aGlzLmFyZ3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlua05vZGVUb0Z1bmMoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5mdW5jLCB0aGlzLnVwZGF0ZUZyb21XYXRjaGVyLCB0aGlzLnRoaXNBcmcsIHRoaXMpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG5cdFx0dGhpcy51bmxpbmtOb2RlRnJvbUZ1bmMoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFuZCB0aGUgc2FtZSB0aGlzQXJnIHByb3BlcnR5XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSBuZXdGdW5jUHJveHlWTi5mdW5jICYmIHRoaXMudGhpc0FyZyA9PT0gbmV3RnVuY1Byb3h5Vk4udGhpc0FyZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNQcm94eVZOLmtleTtcclxuXHRcdHRoaXMubGlua0tleSA9IG5ld0Z1bmNQcm94eVZOLmxpbmtLZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBhcmd1bWVudHMgZnJvbSB0aGUgbmV3IG5vZGU7IHRoZSBmdW5jdGlvbiBpdHNlbGYgYW5kIFwidGhpc0FyZ1wiIHJlbWFpbiB0aGUgc2FtZS5cclxuXHRcdHRoaXMuYXJncyA9IG5ld0Z1bmNQcm94eVZOLmFyZ3M7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgYWxzbyBiZSBjYWxsZWQgLSBidXQgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZy5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuRG9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gd2UgdXNlIHRoaXMgbWV0aG9kIG9ubHkgdG8gY2xlYXIgdGhlIHJlbmRlclJlcXVpcmVkIGZsYWdcIlxyXG4gICAgICAgIHRoaXMucmVuZGVyUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZpbmRWTiggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSk6IEZ1bmNQcm94eVZOXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGtleSBpcyB1bmRlZmluZWQsIHdlIHVzZSB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZlxyXG5cdFx0bGV0IGxpbmtLZXk6IGFueSA9IGtleSB8fCB0aGlzQXJnIHx8IHNfY3VycmVudENsYXNzQ29tcCB8fCBmdW5jO1xyXG5cclxuXHRcdC8vIHRyeSB0byBmaW5kIHRoZSBrZXkgaW4gdGhlIG1hcCBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0OyBpZiBub3QgZm91bmQsIGRvIG5vdGhpbmdcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSBmdW5jW1wiX19rZXlzLXRvLW5vZGVzXCJdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLmZ1bmMgPSBuZXdGdW5jVk4uZnVuYztcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdHByaXZhdGUgZnVuYzogbWltLkZ1bmNDb21wVHlwZTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQsIGZ1bmN0aW9uIG9yIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTn0gZnJvbSBcIi4vQ2xhc3NDb21wVk5cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JSW5kZXBlbmRlbnRDb21wVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBtaW0uSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuSW5kZXBlbmRlbnRDb21wO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWUgPyB0aGlzLmNvbXAuZGlzcGxheU5hbWUgOiB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS4gVGhlIGluc3RhbmNlIG9mIG91ciBjb21wb25lbnQgaXMgdGhlIGtleS5cclxuXHRwdWJsaWMgZ2V0IGtleSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLndpbGxNb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgaW5zdGFuY2VzIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZyBhbmQgdGhlIG9sZCBvbmUgZm9yIHVubW91bnRpbmcuXHJcblx0XHRpZiAobmVlZHNVcGRhdGluZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggbmV3Q29tcCk7XHJcblx0XHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wID0gbmV3Q29tcDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vdyB0aGF0IHdlIGhhdmUgdGhlIG5ldyBjb21wb25lbnQgaW4gb3VyIGNvbXAgcHJvcGVydHkgd2Ugc2hvdWxkIHJlZXN0YWJsaXNoXHJcbiAgICAgICAgICAgIC8vIHdhdGNoaW5nIGl0cyByZW5kZXIgbWV0aG9kXHJcbiAgICAgICAgICAgIHN1cGVyLnJlZXN0YWJsaXNoV2F0Y2hlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIG5lZWRzVXBkYXRpbmcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgZ2l2ZW4gY29tcG9uZW50IHRoYXQgaXQgd2lsbCBiZSBtb3VudGVkLlxyXG5cdHByaXZhdGUgd2lsbE1vdW50SW5zdGFuY2UoIGNvbXA6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbXAudm4gPSB0aGlzO1xyXG5cclxuXHRcdGlmIChjb21wLndpbGxNb3VudClcclxuXHRcdFx0Y29tcC53aWxsTW91bnQoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpdCB3aWxsIGJlIHVubW91bnRlZC5cclxuXHRwcml2YXRlIHdpbGxVbm1vdW50SW5zdGFuY2UoIGNvbXA6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChjb21wLndpbGxVbm1vdW50KVxyXG5cdFx0XHRjb21wLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0Y29tcC52biA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOfSBmcm9tIFwiLi9DbGFzc0NvbXBWTlwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JTWFuYWdlZENvbXBWTlxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHB1YmxpYyBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5NYW5hZ2VkQ29tcDtcclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmRpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoIHBhcmVudCwgY3JlYXRvcik7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAudm4gPSB0aGlzO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblxyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGNvbXBvbmVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50cyAoYW5kL29yIGVsZW1lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLndpbGxVbm1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbFVubW91bnQoKTtcclxuXHJcblx0XHR0aGlzLmNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNvbXAgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgTWFuYWdlZENvbXBWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgTWFuYWdlZENvbXBWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkVXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIHNob3VsZFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBtaW0uUHJvbWlzZVByb3h5UHJvcHMsIGNoaWxkcmVuPzogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlByb21pc2VQcm94eTtcclxuXHRcdHRoaXMucHJvbWlzZSA9IHByb3BzLnByb21pc2U7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBwcm9wcy5lcnJvckNvbnRlbnRGdW5jO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY2hpbGRyZW47XHJcblxyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9taXNlIGlzIHNldHRsZWQgKHN1Y2Nlc3NmdWxseSBvciBub3QpLlxyXG5cdHB1YmxpYyBnZXQgaXNTZXR0bGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9taXNlID09IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHQ7IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBuYW1lID0gXCJQcm9taXNlXCI7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLndhdGNoUHJvbWlzZSgpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIHByb21pc2Ugb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9taXNlID09PSBuZXdQcm9taXNlUHJveHlWTi5wcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3UHJvbWlzZVByb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5jb250ZW50ID0gbmV3UHJvbWlzZVByb3h5Vk4uY29udGVudDtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IG5ld1Byb21pc2VQcm94eVZOLmVycm9yQ29udGVudEZ1bmM7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogV2FpdHMgZm9yIHRoZSBwcm9taXNlIHRvIHNldHRsZVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgd2F0Y2hQcm9taXNlKCk6IFByb21pc2U8dm9pZD5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gYXdhaXQgdGhpcy5wcm9taXNlO1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgc3RpbGwgbW91bnRlZCwgcmVxdWVzdCB1cGRhdGVcclxuXHRcdFx0aWYgKHRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIGFscmVhZHkgdW5tb3VudGVkLCBkbyBub3RoaW5nXHJcblx0XHRcdGlmICghdGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb250ZW50RnVuYylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IHRoaXMuZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycjEpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyKTtcclxuXHJcblx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUHJvbWlzZSB0aGF0IHRoaXMgbm9kZSB3YXRjaGVzLlxyXG5cdHByaXZhdGUgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvLyBDb250ZW50IHRoYXQgdGhpcyBub2RlIGRpc3BsYXlzLiBJbml0aWFsbHkgdGhpcyBjb250ZW50IGlzIHNldCB0byBwcm9wcy5jaGlsZHJlbi4gV2hlblxyXG5cdC8vIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkLCB0aGUgY29udGVudCBpcyBzZXQgdG8gdGhlIHJlc29sdmVkIHZhbHVlLiBJZiB0aGUgcHJvbWlzZSBpc1xyXG5cdC8vIHJlamVjdGVkIGFuZCB0aGUgZXJyb3JDb250ZW50RnVuYyBpcyBkZWZpbmVkLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhbmQgaXRzIHJldHVyblxyXG5cdC8vIHZhbHVlIGlzIHVzZWQgYXMgY29udGVudC5cclxuXHRwcml2YXRlIGNvbnRlbnQ/OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgZXJyb3JDb250ZW50RnVuYz86ICggZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGtlcHQgYnkgUm9vdCB2aXJ0dWFsIG5vZGUgYWJvdXQgc2VydmljZSBleHBvcnQgZnVuY3Rpb25hdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZSBzYW1lXHJcbi8vIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RFcnJvclVJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHJpdmF0ZSByb290Vk46IFJvb3RWTjtcclxuXHRwcml2YXRlIGVycjogYW55O1xyXG5cdHByaXZhdGUgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggcm9vdFZOOiBSb290Vk4sIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucm9vdFZOID0gcm9vdFZOO1xyXG5cdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHR0aGlzLnBhdGhTdHJpbmcgPSBwYXRoID8gcGF0aC5qb2luKCBcIiBcXHUyMTkyIFwiKSA6IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLmVyci5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLnBhdGhTdHJpbmd9PC9kaXY+XHJcblx0XHRcdDxociBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0vPlxyXG5cdFx0XHQ8YnV0dG9uIGNsaWNrPXt0aGlzLm9uUmVzdGFydH0+UmVzdGFydDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzdGFydCA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yb290Vk4ucmVzdGFydCgpO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290V2FpdGluZ1VJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJMb2FkaW5nIC4uLlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge3VwZGF0ZU5vZGVTeW5jLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuaW1wb3J0IHtETn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtSb290RXJyb3JVSSwgUm9vdFdhaXRpbmdVSX0gZnJvbSBcIi4vUm9vdFVJXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBhbmNob3JETjogRE4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5Sb290O1xyXG5cdFx0dGhpcy5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cdFx0dGhpcy5kZXB0aCA9IDA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Sb290OyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiUm9vdFwiOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgY29udGVudCB0byBiZSByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlcnMgdXBkYXRlLlxyXG5cdHB1YmxpYyBzZXRDb250ZW50KCBjb250ZW50OiBhbnksIHN5bmM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAoc3luYylcclxuXHRcdFx0dXBkYXRlTm9kZVN5bmMoIHRoaXMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lcnJvclVJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclVJO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLndhaXRpbmdVSTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudW5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRpZiAoIXRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRcdHRoaXMud2FpdGluZ1VJID0gbmV3IFJvb3RXYWl0aW5nVUkoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5lcnJvclVJID0gbmV3IFJvb3RFcnJvclVJKCB0aGlzLCBlcnIsIHBhdGgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yVUkgPSB1bmRlZmluZWQ7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZ1VJID0gbnVsbDtcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb250ZW50IHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yVUk6IFJvb3RFcnJvclVJO1xyXG5cclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIHdhaXRpbmdVSTogUm9vdFdhaXRpbmdVSTtcclxuXHJcblx0Ly8gU2V0IG9mIHByb21pc2VzIHRocm93biBieSBkZXNjZW5kYW50IG5vZGVzIGFuZCBub3QgeWV0IGZ1bGZpbGxlZC5cclxuXHRwcml2YXRlIHRocm93blByb21pc2VzID0gbmV3IFNldDxQcm9taXNlPGFueT4+KCk7XHJcbn1cclxuXHJcblxyXG5cclxubGV0IHNfbWltYmxBbmNob3JQcm9wTmFtZSA9IFwiX19taW1ibEFuY2hvclByb3BOYW1lX19cIjtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhIHN5bmNocm9ub3VzIHdheS5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdC8vIHByb3BlcnR5XHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0cm9vdFZOID0gbmV3IFJvb3RWTiggcmVhbEFuY2hvckROKTtcclxuXHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtzX21pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUgYW5kIHRyaWdnZXIgc3luY2hyb25vdXMgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290U3luYy5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290U3luYyggYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRkZWxldGUgcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCB0cnVlKTtcclxuXHRyb290Vk4udGVybSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcbi8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJvb3QoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdC8vIHByb3BlcnR5XHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHJvb3Qgbm9kZSBhbmQgcmVtZW1iZXIgaXQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdFx0cm9vdFZOID0gbmV3IFJvb3RWTiggcmVhbEFuY2hvckROKTtcclxuXHRcdChyZWFsQW5jaG9yRE4gYXMgYW55KVtzX21pbWJsQW5jaG9yUHJvcE5hbWVdID0gcm9vdFZOO1xyXG5cdH1cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVwZGF0ZVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCBmYWxzZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3QuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Um9vdCggYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRkZWxldGUgcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblxyXG5cdC8vIGRlc3RydWN0IHRoZSByb290IG5vZGUgKGFzeW5jaHJvbm91c2x5KVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0cm9vdFZOLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBnZXRGaXJzdEROLCBnZXRJbW1lZGlhdGVETnMsIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROLCBnZXRWTlBhdGh9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnR9IGZyb20gXCIuL0NvbnRlbnRGdW5jc1wiXHJcbmltcG9ydCB7Vk5EaXNwQWN0aW9uLCBWTkRpc3AsIFZORGlzcEdyb3VwfSBmcm9tIFwiLi9WTkRpc3BcIlxyXG5pbXBvcnQge2VudGVyTXV0YXRpb25TY29wZSwgZXhpdE11dGF0aW9uU2NvcGV9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgaW5kaWNhdGluZyBpbiB3aGF0IHBoYXNlIG9mIHRoZSB1cGRhdGUgY3ljbGUgd2UgY3VycmVudGx5IHJlc2lkZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVkRnVuY01hcCBjbGFzcyByZXByZXNlbnRzIGEgbWFwIG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgZXhlY3V0ZWQgZWl0aGVyIGJlZm9yZVxyXG4gKiBvciBhZnRlciBjb21wb25lbnQgdXBkYXRlcy4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kIHRoZSB2YWx1ZXMgYXJlXHJcbiAqIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuIEJvdGhcclxuICogdGhlIGtleXMgYW5kIHRoZSB2YWx1ZXMgaGF2ZSB0aGUgc2FtZSB0eXBlOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUuXHJcbiAqL1xyXG5jbGFzcyBTY2hlZHVsZWRGdW5jTWFwIGV4dGVuZHMgTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcbi8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcbi8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG4vLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcbi8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG4vL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG4vL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxubGV0IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIHZhbHVlcyBpbiB0aGUgbWFwIGFyZSBvYmplY3RzIHRoYXQgd2lsbFxyXG4vLyBiZSB1c2VkIHMgdGhlIFwidGhpc1wiIHZhbHVlIGluIHRoZSBjYWxsYmFjay5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcbi8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuIFRoZSB2YWx1ZXMgaW4gdGhlIG1hcCBhcmUgb2JqZWN0cyB0aGF0IHdpbGxcclxuLy8gYmUgdXNlZCBzIHRoZSBcInRoaXNcIiB2YWx1ZSBpbiB0aGUgY2FsbGJhY2suXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cclxuLy8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5sZXQgc19zY2hlZHVsZWRGcmFtZUhhbmRsZTogbnVtYmVyID0gMDtcclxuXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIuXHJcbmxldCBzX3NjaGVkdWxlclN0YXRlOiBTY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcblxyXG4vLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcbi8vIGluY3JlbWVudHMgdGhpcyBudW1iZXIuIEVhY2ggbm9kZSBiZWluZyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgaXMgYXNzaWduZWQgdGhpcyBudW1iZXIuXHJcbi8vIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIHdoZW4gYm90aCBhIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmVcclxuLy8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxubGV0IHNfY3VycmVudFRpY2s6IG51bWJlciA9IDA7XHJcblxyXG4vLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuLy8gZXZlcnkgdGltZSB3ZSByZWN1cnNlIGludG8gc3ViLW5vZGVzIGFuZCByZXN0b3JlZCB3aGVuIHdlIHJldHVybiBiYWNrIHRvIHRoZSBub2RlLiBJZlxyXG4vLyBkdXJpbmcgY3JlYXRpb24gb3IgdXBkYXRpbmcgcHJvY2VzcyBhbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCBpcyBjYXVnaHQgYnkgc29tZSB1cHBlclxyXG4vLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRWTjogVk4gPSBudWxsO1xyXG5cclxuLy8gQ2xhc3MtYmFzZWQgY29tcG9uZW50IHdob3NlIHJlbmRlcmluZyB0cmVlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXHJcbmV4cG9ydCBsZXQgc19jdXJyZW50Q2xhc3NDb21wOiBtaW0uSUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb2RlU3luYyggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdHNfY3VycmVudFRpY2srKztcclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdGxldCBvbGRTdGF0cyA9IERldGFpbGVkU3RhdHMuc3RhdHM7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB1cGRhdGUgY3ljbGUgJHtzX2N1cnJlbnRUaWNrfTogYCk7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHRsZXQgdm5zOiBWTltdW10gPSBuZXcgQXJyYXkoMSk7XHJcblx0dm5zWzBdID0gW3ZuXTtcclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zKSk7XHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0b3AoIHRydWUpO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG9sZFN0YXRzO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRjb25zb2xlLndhcm4oIGBVcGRhdGUgcmVxdWVzdGVkIGZvciB2aXJ0dWFsIG5vZGUgJyR7Z2V0Vk5QYXRoKHZuKS5qb2luKFwiLT5cIil9JyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbmNob3IgRE9NIG5vZGVgKVxyXG5cclxuXHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0Ly8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIGl0IGNhbGxzIHJlcXVlc3RVcGRhdGUoKS5cclxuXHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0Ly8gaWYgdGhpcyBpcyBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBhbmQgaXQgaGFzIGJlZm9yZVVwZGF0ZSBhbmQvb3IgYWZ0ZXJVcGRhdGUgbWV0aG9kc1xyXG5cdC8vIGltcGxlbWVudGVkLCBzY2hlZHVsZSB0aGVpciBleGVjdXRpb25zLiBOb3RlIHRoYXQgdGhlIFwiYmVmb3JlVXBkYXRlXCIgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIHNjaGVkdWxlZCBpZiB0aGUgY3VycmVudCBzY2hlZHVsZXIgc3RhdGUgaXMgQmVmb3JlVXBkYXRlLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudFxyXG5cdC8vIHdpbCBiZSB1cGRhdGVkIGluIHRoZSBjdXJyZW50IGN5Y2xlIGFuZCB0aGVyZSBpcyBhbHJlYWR5IG5vIHRpbWUgdG8gZXhlY3V0ZSB0aGUgXCJiZWZvcmVcclxuXHQvLyB1cGRhdGVcIiBtZXRob2QuXHJcblx0aWYgKHZuLnR5cGUgPT09IG1pbS5WTlR5cGUuSW5kZXBlbmRlbnRDb21wIHx8IHZuLnR5cGUgPT09IG1pbS5WTlR5cGUuTWFuYWdlZENvbXApXHJcblx0e1xyXG5cdFx0bGV0IGNvbXAgPSAodm4gYXMgYW55IGFzIG1pbS5JQ2xhc3NDb21wVk4pLmNvbXA7XHJcblx0XHRpZiAoY29tcC5iZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNldCggY29tcC5iZWZvcmVVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblxyXG5cdFx0aWYgKGNvbXAuYWZ0ZXJVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGNvbXAuYWZ0ZXJVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGUgdXBkYXRlIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBjeWNsZSB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZSBkdXJpbmcgYVxyXG5cdC8vIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cclxuXHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcbi8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4sIHRoYXQ/OiBvYmplY3QsIHZuPzogbWltLklWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGF0LCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGF0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGEgY2FsbGJhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9ucyBmcm9tIHRoZVxyXG4gKiBjYWxsYmFjayBhbmQgcGFzcyBpdCB0byB0aGUgXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZS4gVGhlIGZ1bmN0aW9uIGlzIGJvdW5kIHRvICB0aGUgdmlydHVhbFxyXG4gKiBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlXHJcbiAqIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmVcclxuICogYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpblxyXG4gKiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcclxuICogaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci5cclxuICogXHJcbiAqIE5vdGUgdGhhdCBcInRoaXNcIiBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSBmdW5jdGlvbiB3YXMgc2NoZWR1bGVkIHdpdGhvdXQgYmVpbmcgaW4gdGhlIGNvbnRleHQgb2ZcclxuICogYW55IHZpcnR1YWwgbm9kZS5cclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIHdyYXBwaW5nIHdhcyBjcmVhdGVkIHdpdGhvdXQgdGhlIFZOIGNvbnRleHQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHNfY3VycmVudFZOO1xyXG4gICAgbGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcbiAgICBpZiAodGhpcylcclxuICAgIHtcclxuICAgICAgICBzX2N1cnJlbnRWTiA9IHRoaXM7XHJcbiAgICAgICAgc19jdXJyZW50Q2xhc3NDb21wID0gKHNfY3VycmVudFZOIGFzIGFueSkuY29tcCA/IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgOiBzX2N1cnJlbnRWTi5jcmVhdG9yO1xyXG4gICAgfVxyXG5cclxuXHR0cnlcclxuXHR7XHJcbiAgICAgICAgZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcblx0XHRsZXQgW3RoYXQsIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiBvcmdDYWxsYmFjay5hcHBseSggdGhhdCwgcmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzKVxyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBlcnJvclNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIikgYXMgbWltLklFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHRcdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCB0aGlzKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZpbmFsbHlcclxuXHR7XHJcbiAgICAgICAgZXhpdE11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICBpZiAodGhpcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgdGhlIGN1cnJlbnQgVk4gdG8gdGhlIHJlbWVtYmVyZWQgdmFsdWU7XHJcbiAgICAgICAgICAgIHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG4gICAgICAgICAgICBzX2N1cnJlbnRDbGFzc0NvbXAgPSBjdXJyZW50Q2xhc3NDb21wO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzaG91bGQgYmUgbWFkZSBvciB0aGUgZnJhbWUgaGFzIGFscmVhZHlcclxuLy8gYmVlbiBzY2hlZHVsZWQuXHJcbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk6IHZvaWRcclxue1xyXG5cdGlmIChzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID09PSAwKVxyXG5cdFx0c19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggb25TY2hlZHVsZWRGcmFtZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxubGV0IG9uU2NoZWR1bGVkRnJhbWUgPSAoKTogdm9pZCA9PlxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIG9yIHJlcGxhY2VtZW50IHJlcXVlc3RzIHdpbGxcclxuXHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcblx0Ly8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdHNfY3VycmVudFRpY2srKztcclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYmVmb3JlIHVwZGF0aW5nIGNvbXBvbmVudHMuIElmIHRoaXMgZnVuY3Rpb25cclxuXHQvLyBjYWxscyB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2Qgb3Igc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGVzLFxyXG5cdC8vIHRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGlzIGN5Y2xlLiBIb3dldmVyLCBpZiBpdCBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkXHJcblx0Ly8gYWZ0ZXIgdXBkYXRlcywgaXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgbmV4dCBjeWNsZS5cclxuXHRpZiAoc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0aWYgKHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdC8vIHVwZGF0ZSByZXF1ZXN0cy4gQXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgYW5kIHBlcmZvcm0gdXBkYXRlcy5cclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0XHRsZXQgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gc192bnNTY2hlZHVsZWRGb3JVcGRhdGU7XHJcblx0XHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlKSkpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBudWxsO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG4vLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuLy9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG4vL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuLy9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuLy8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcbi8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcbmZ1bmN0aW9uIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG57XHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGxldCBsYWJlbCA9IGBhcnJhbmdpbmcgJHt2bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZX0gbm9kZXMgYnkgZGVwdGhgO1xyXG5cdFx0Y29uc29sZS50aW1lKCBsYWJlbCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUudGltZUVuZCggbGFiZWwpO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5mdW5jdGlvbiBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcbntcclxuXHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcblx0Ly8gaXRlcmF0aW9uIG92ZXIgdGhlIHNwYXJzZSBhcnJheSBza2lwcyB0aGUgaG9sZXMuXHJcblx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHR2bnNCeURlcHRoLmZvckVhY2goICh2bnM6IFZOW10pID0+IHsgdm5zLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdC8vIGNsZWFyIHRoZSBmbGFnIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBmb3IgdGhlIG5vZGVcclxuXHRcdFx0dm4udXBkYXRlUmVxdWVzdGVkID0gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSwgZG9uJ3QgdXBkYXRlIGl0IGFnYWluXHJcblx0XHRcdGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gc19jdXJyZW50VGljaylcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRkaXNwID0gbmV3IFZORGlzcCggdm4sIFZORGlzcEFjdGlvbi5Vbmtub3duLCB2bik7XHJcblx0XHRcdHVwZGF0ZVZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0XHR1cGRhdGVkTm9kZURpc3BzLnB1c2goIGRpc3ApO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuXHRcdFx0Ly8gYnkgdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0XHRcdGxldCBlcnJvclNlcnZpY2U6IG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2UgPSB2bi5nZXRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHNfY3VycmVudFZOID8gZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikgOiBudWxsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHJcblx0XHRzX2N1cnJlbnRWTiA9IG51bGw7XHJcblx0fSl9KTtcclxuXHJcblx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcbi8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcbmZ1bmN0aW9uIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0e1xyXG5cdFx0dXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5mdW5jdGlvbiBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogU2NoZWR1bGVkRnVuY01hcCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKVxyXG57XHJcblx0ZnVuY3MuZm9yRWFjaCggKHdyYXBwZXIsIGZ1bmMpID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHdyYXBwZXIoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgZnVuY3Rpb24gJHtiZWZvcmVVcGRhdGUgPyBcImJlZm9yZVwiIDogXCJhZnRlclwifSB1cGRhdGluZyBjb21wb25lbnRzXFxuYCwgZXJyKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIGFuZCByZW5kZXJzIHRoaXMgbm9kZSBhbmQgaXRzIHN1Yi1ub2Rlcy4gVGhpcyBtZXRob2QgaXMgaW52b2tlZFxyXG4vLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuLy8gbWV0aG9kICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNldFNpdGUgb3IgcmVuZGVyIG1ldGhvZHMpLFxyXG4vLyB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZVxyXG4vLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcbi8vIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXRcclxuLy8gaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiBjcmVhdGVWaXJ0dWFsKCB2bjogVk4sIHBhcmVudDogVk4pOiB2b2lkXHJcbntcclxuXHR2bi5pbml0KCBwYXJlbnQsIHNfY3VycmVudENsYXNzQ29tcCk7XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0bGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0aWYgKCh2biBhcyBhbnkpLmNvbXApXHJcblx0XHRzX2N1cnJlbnRDbGFzc0NvbXAgPSAodm4gYXMgYW55KS5jb21wO1xyXG5cclxuXHRpZiAodm4ud2lsbE1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHdpbGxNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsTW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gSWYgdGhpcyBub2RlIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZyBhbmQgYW4gZXhjZXB0aW9uIGlzIHRocm93biBlaXRoZXIgYnkgdGhpc1xyXG5cdC8vIG5vZGUgb3IgYnkgb25lIG9mIGl0cyBzdWItbm9kZXMsIHRoaXMgbGluZSBpcyBub3QgZXhlY3V0ZWQgYW5kIHRodXMsIHNfY3VycmVudFZOXHJcblx0Ly8gd2lsbCBwb2ludCB0byBvdXIgbm9kZSB3aGVuIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0LlxyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IGN1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgY3JlYXRpb24gYW5kIGluaXRpYWwgcmVuZGVyaW5nIG9uIHRoZSBzdWItbm9kZXMgb2Ygb3VyIG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gdGhpcyBtZXRob2QgaXMgb25seSBpbnZva2VkIGlmIHRoZSBub2RlIGhhcyB0aGUgcmVuZGVyIGZ1bmN0aW9uXHJcblx0dm4uc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0aWYgKHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHZuLmtleWVkU3ViTm9kZXMgPSBuZXcgTWFwPGFueSxWTj4oKTtcclxuXHJcblx0XHRsZXQgcHJldlZOOiBWTjtcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0Y3JlYXRlVmlydHVhbCggc3ZuLCB2bik7XHJcblxyXG5cdFx0XHRpZiAodm4ua2V5ZWRTdWJOb2RlcyAhPT0gdW5kZWZpbmVkICYmIHN2bi5rZXkgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR2bi5rZXllZFN1Yk5vZGVzLnNldCggc3ZuLmtleSwgc3ZuKTtcclxuXHJcblx0XHRcdGlmIChwcmV2Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwcmV2Vk4ubmV4dCA9IHN2bjtcclxuXHRcdFx0XHRzdm4ucHJldiA9IHByZXZWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJldlZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIERPTSBub2RlcyBmb3IgdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY3JlYXRlUGh5c2ljYWwoIHZuOiBWTiwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pXHJcbntcclxuXHQvLyByZW1lbWJlciB0aGUgYW5jaG9yIG5vZGVcclxuXHR2bi5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgbW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblx0bGV0IG93bkROID0gdm4ubW91bnQgPyB2bi5tb3VudCgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBpZiB3ZSBoYXZlIG91ciBvd24gRE9NIG5vZGUsIGFkZCBpdCB1bmRlciB0aGUgYW5jaG9yIG5vZGVcclxuXHRpZiAob3duRE4pXHJcblx0XHR2bi5hbmNob3JETi5pbnNlcnRCZWZvcmUoIG93bkROLCBiZWZvcmVETik7XHJcblxyXG5cdC8vIGlmIHRoZSBub2RlIGhhcyBzdWItbm9kZXMsIGFkZCBET00gbm9kZXMgZm9yIHRoZW0uIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd25cclxuXHQvLyBET00gbm9kZSB1c2UgaXQgYXMgYW4gYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyBkZXRlcm1pbmUgd2hhdCBub2RlcyB0byB1c2UgYXMgYW5jaG9yIGFuZCBcImJlZm9yZVwiIGZvciB0aGUgc3ViLW5vZGVzXHJcblx0XHRsZXQgbmV3QW5jaG9yRE4gPSBvd25ETiA/IG93bkROIDogYW5jaG9yRE47XHJcblx0XHRsZXQgbmV3QmVmb3JlRE4gPSBvd25ETiA/IG51bGwgOiBiZWZvcmVETjtcclxuXHJcblx0XHQvLyBtb3VudCBhbGwgc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZGlkTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcbiAgICBpZiAodm4uZGlkTW91bnQpXHJcbiAgICAgICAgdm4uZGlkTW91bnQoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBwcmVEZXN0cm95KCB2bjogVk4pXHJcbntcclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0aWYgKHZuLndpbGxVbm1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHdpbGxVbm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHZuLndpbGxVbm1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgTm9kZSAke3ZuLm5hbWV9IHRocmV3IGV4Y2VwdGlvbiAnJHtlcnIubWVzc2FnZX0nIGluIHdpbGxVbm1vdW50YCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHJlbW92ZXMgRE9NIG5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gZGVzdHJveVBoeXNpY2FsKCB2bjogVk4pXHJcbntcclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHRpZiAodm4udW5tb3VudClcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0XHR2bi51bm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWUuIEluIHRoaXMgY2FzZSxcclxuXHQvLyB3ZSBkb24ndCBuZWVkIHRvIHJlY3Vyc2UgaW50byBzdWItbm9kZXMsIGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCB3aXRoIHRoZSBwYXJlbnQuXHJcblx0aWYgKG93bkROKVxyXG5cdFx0KG93bkROIGFzIGFueSBhcyBDaGlsZE5vZGUpLnJlbW92ZSgpO1xyXG5cdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRkZXN0cm95UGh5c2ljYWwoIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHR9XHJcblxyXG5cdHZuLnRlcm0oKTtcclxuXHJcblx0dm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC4gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGlzIG1ldGhvZFxyXG4vLyAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzaG91bGRVcGRhdGUgb3IgcmVuZGVyIG1ldGhvZHMpLCB0aGUgY29tcG9uZW50IGlzIGFza2VkXHJcbi8vIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gcmVuZGVyXHJcbi8vIGFnYWluOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb24gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXRcclxuLy8gaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdCBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIHVwZGF0ZVZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRsZXQgY3VycmVudENsYXNzQ29tcCA9IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRpZiAoKHZuIGFzIGFueSkuY29tcClcclxuXHRcdHNfY3VycmVudENsYXNzQ29tcCA9ICh2biBhcyBhbnkpLmNvbXA7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0aWYgKHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZyAmJiB2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcoKSlcclxuXHRcdHtcclxuXHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHQvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIGl0cyBvd24gZXJyb3IgYW5kIHJlLXJlbmRlclxyXG5cdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IGVycjtcclxuXHR9XHJcblxyXG5cdC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcblx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0dm4ubGFzdFVwZGF0ZVRpY2sgPSBzX2N1cnJlbnRUaWNrO1xyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHRzX2N1cnJlbnRDbGFzc0NvbXAgPSBjdXJyZW50Q2xhc3NDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQgYW5kIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGRpc3AuYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk7XHJcblxyXG5cdC8vIGZvciBub2RlcyB0byBiZSByZW1vdmVkLCBjYWxsIHdpbGxVbm1vdW50XHJcblx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHRsZXQgb2xkVk46IFZOLCBuZXdWTjogVk47XHJcblx0XHRsZXQgcGFyZW50Vk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTikgJiYgb2xkVk4ucHJlcGFyZVVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBwcmVwYXJlVXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC51cGRhdGVEaXNwID0gb2xkVk4ucHJlcGFyZVVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHR1cGRhdGVWaXJ0dWFsKCBzdWJOb2RlRGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdFx0XHRjcmVhdGVWaXJ0dWFsKCBuZXdWTiwgcGFyZW50Vk4pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBwZXJmb3JtcyBET00gdXBkYXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBoeXNpY2FsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuXHQvLyByZW1vdmUgZnJvbSBET00gdGhlIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlbW92ZWQgKHRoYXQgaXMsIHRob3NlIGZvciB3aGljaCB0aGVyZVxyXG5cdC8vIHdhcyBubyBjb3VudGVycGFydCBuZXcgbm9kZSB0aGF0IHdvdWxkIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZSBpdCkuIFdlIG5lZWQgdG8gcmVtb3ZlXHJcblx0Ly8gb2xkIG5vZGVzIGZpcnN0IGJlZm9yZSB3ZSBzdGFydCBpbnNlcnRpbmcgbmV3IC0gb25lIHJlYXNvbiBpcyB0byBwcm9wZXJseSBtYWludGFpblxyXG5cdC8vIHJlZmVyZW5jZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRkZXN0cm95UGh5c2ljYWwoIHN2bik7XHJcblx0fVxyXG5cclxuXHQvLyBnZXQgdGhlIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nIHVwZGF0ZWQuIFRoaXMgaXMgYWx3YXlzIHRoZSBvbGRWTiBtZW1iZXIgb2ZcclxuXHQvLyB0aGUgZGlzcCBzdHJ1Y3R1cmUuXHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8gaXQgbWlnaHQgaGFwcGVuIHRoYXQgdGhlIG5vZGUgYmVpbmcgdXBkYXRlZCB3YXMgYWxyZWFkeSBkZWxldGVkIGJ5IGl0cyBwYXJlbnQuIENoZWNrXHJcblx0Ly8gZm9yIHRoaXMgc2l0dWF0aW9uIGFuZCBleGl0IGlmIHRoaXMgaXMgdGhlIGNhc2VcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBkZXRlcm1pbmUgdGhlIGFuY2hvciBub2RlIHRvIHVzZSB3aGVuIGluc2VydGluZyBuZXcgb3IgbW92aW5nIGV4aXN0aW5nIHN1Yi1ub2Rlcy4gSWZcclxuXHQvLyBvdXIgbm9kZSBoYXMgaXRzIG93biBETiwgaXQgd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzOyBvdGhlcndpc2UsIG91ciBub2RlJ3NcclxuXHQvLyBhbmNob3Igd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzIHRvby5cclxuXHRsZXQgb3duRE4gPSB2bi5vd25ETjtcclxuXHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHQvLyBuZWVkIHRvIGZpbmQgYSBET00gbm9kZSBiZWZvcmUgd2hpY2ggdG8gc3RhcnQgaW5zZXJ0aW5nIG5ldyBub2Rlcy4gTnVsbCBtZWFuc1xyXG5cdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdGxldCBiZWZvcmVETiA9IG93bkROICE9IG51bGwgPyBudWxsIDogZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLCBhbmNob3JETik7XHJcblxyXG5cdC8vIHJlLWNyZWF0ZSBvdXIgY3VycmVudCBsaXN0IG9mIHN1Yi1ub2RlcyAtIHdlIHdpbGwgcG9wdWxhdGUgaXQgd2hpbGUgdXBkYXRpbmcgdGhlbVxyXG5cdHZuLnN1Yk5vZGVzID0gZGlzcC5zdWJOb2RlRGlzcHMgPyBuZXcgQXJyYXk8Vk4+KGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCkgOiB1bmRlZmluZWQ7XHJcblx0dm4ua2V5ZWRTdWJOb2RlcyA9IHZuLnN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgdm4uc3ViTm9kZXMubGVuZ3RoID4gMSA/IG5ldyBNYXA8YW55LFZOPigpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVHcm91cHMpXHJcblx0e1xyXG5cdFx0dXBkYXRlUGh5c2ljYWxCeUdyb3Vwcyggdm4sIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0XHRhcnJhbmdlR3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0dXBkYXRlUGh5c2ljYWxCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgaW5kaXZpZHVhbCBub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWxCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRwYXJlbnRWTi5rZXllZFN1Yk5vZGVzLnNldCggc3ZuLmtleSwgc3ZuKTtcclxuXHJcblx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKG5leHRWTilcclxuXHRcdHtcclxuXHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRWTiA9IHN2bjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBncm91cHMuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB1cGRhdGUgZ3JvdXBzXHJcbi8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggb2xkVk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3JlYXRlUGh5c2ljYWwoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0XHRpZiAoZmlyc3RETiAhPSBudWxsKVxyXG5cdFx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocGFyZW50Vk4ua2V5ZWRTdWJOb2RlcyAhPT0gdW5kZWZpbmVkICYmIHN2bi5rZXkgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRwYXJlbnRWTi5rZXllZFN1Yk5vZGVzLnNldCggc3ZuLmtleSwgc3ZuKTtcclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIFdlIGdvIGZyb20gdGhlIGxhc3QgZ3JvdXAgdG8gdGhlIHNlY29uZCBncm91cCBpbiB0aGUgbGlzdCBiZWNhdXNlIGFzIHNvb24gYXMgd2UgbW92ZWQgYWxsXHJcblx0Ly8gZ3JvdXBzIGV4Y2VwdCB0aGUgZmlyc3Qgb25lIGludG8gdGhlaXIgcmlnaHQgcGxhY2VzLCB0aGUgZmlyc3QgZ3JvdXAgd2lsbCBiZSBhdXRvbWF0aWNhbGx5XHJcblx0Ly8gaW4gdGhlIHJpZ2h0IHBsYWNlLiBXZSBhbHdheXMgaGF2ZSB0d28gZ3JvdXBzIChpIGFuZCBpLTEpLCB3aGljaCBhbGxvd3MgdXMgdG8gdW5kZXJzdGFuZFxyXG5cdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBzd2FwIHRoZW0uIElmIHdlIGRvIHdlIG1vdmUgdGhlIHNob3J0ZXIgZ3JvdXAuXHJcblx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdGxldCBwcmV2R3JvdXAgPSBncm91cHNbaS0xXTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgZ3JvdXAgc2hvdWxkIG1vdmUuIFdlIHRha2UgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBncm91cFxyXG5cdFx0Ly8gYW5kIGNvbXBhcmUgaXRzIEROJ3MgbmV4dCBzaWJsaW5nIHRvIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIi5cclxuXHRcdGlmIChncm91cC5sYXN0RE4gIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY3VycmVudCBncm91cCBub3cgcmVzaWRlcyBiZWZvcmUgdGhlIHByZXZpb3VzIGdyb3VwLCB0aGVuIHRoYXQgbWVhbnNcclxuXHRcdFx0XHQvLyB0aGF0IHdlIGFyZSBzd2FwcGluZyB0d28gZ3JvdXBzLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtb3ZlIHRoZSBzaG9ydGVyIG9uZS5cclxuXHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nID09PSBwcmV2R3JvdXAuZmlyc3RETiAmJiBncm91cC5jb3VudCA+IHByZXZHcm91cC5jb3VudClcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggcGFyZW50Vk4sIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIHBhcmVudFZOLCBkaXNwcywgZ3JvdXAsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHRoZSBncm91cCdzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5ldyBiZWZvcmVETi4gTm90ZSB0aGF0IGZpcnN0RE4gY2Fubm90IGJlIG51bGxcclxuXHRcdFx0Ly8gYmVjYXVzZSBsYXN0RE4gaXMgbm90IG51bGxcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNb3ZlcyBhbGwgdGhlIG5vZGVzIGluIHRoZSBnaXZlbiBncm91cCBiZWZvcmUgdGhlIGdpdmVuIERPTSBub2RlLlxyXG5mdW5jdGlvbiBtb3ZlR3JvdXAoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7c2NoZWR1bGVGdW5jQ2FsbH0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNjaGVkdWxlciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3Igc2NoZWR1bGluZyB3cml0aW5nIHN0eWxlLXJlbGF0ZWQgaW5mb3JtYXRpbm8gdG9cclxuICogdGhlIERPTSB1c2luZyB0aGUgTWltYmwgc2NoZWR1bGluZyBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5jbGFzcyBTdHlsZVNjaGVkdWxlciBpbXBsZW1lbnRzIGNzcy5JU2NoZWR1bGVyXHJcbntcclxuICAgIC8vIENhbGxiYWNrIHRvIGNhbGwgdG8gd3JpdGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG5cdHByaXZhdGUgZG9ET01VcGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggdGhpcy5vblVwZGF0ZSwgZmFsc2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgdGltZW91dCBleHBpcmVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG9ET01VcGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIHN0eWxlIHNjaGVkdWxlciB1c2VkIGJ5IE1pbWJsIHRvIHNjaGVkdWxlIHdyaXRpbmcgc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNaW1ibFN0eWxlU2NoZWR1bGVyKCk6IG51bWJlclxyXG57XHJcbiAgICBsZXQgc2NoZWR1bGVyVHlwZSA9IGNzcy5yZWdpc3RlclNjaGVkdWxlciggbmV3IFN0eWxlU2NoZWR1bGVyKCkpO1xyXG4gICAgY3NzLnNldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlKTtcclxuICAgIHJldHVybiBzY2hlZHVsZXJUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSB0ZXh0IG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklUZXh0Vk5cclxue1xyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuXHQvLyBUZXh0IERPTSBub2RlXHJcblx0cHVibGljIHRleHROb2RlOiBUZXh0O1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuVGV4dDtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LlRleHQ7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCIjdGV4dFwiOyB9XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBvd25ETigpOiBETiB7IHJldHVybiB0aGlzLnRleHROb2RlOyB9O1xyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLnRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHRoaXMudGV4dCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOIGludGVyZmFjZSBkZWZpbmVzIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBhcmUgb3B0aW9uYWxseSBpbXBsZW1lbnRlZCBieSBhbGxcclxuICogdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVk4gZXh0ZW5kcyBtaW0uSVZOb2RlXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cmVhZG9ubHkgc3RhdHNDYXRlZ29yeTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdGtleWVkU3ViTm9kZXM/OiBNYXA8YW55LFZOPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWRcclxuXHQvLyBvbmx5IG9uIG5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRtb3VudD8oKTogRE47XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgaW50ZXJuYWwgc3RydWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50XHJcblx0Ly8gb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIEluaXRpYWxpemVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlXHJcblx0Ly8gbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWQgb25seSBvbiBub2Rlc1xyXG5cdC8vIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSByZWxlYXNlIHRoZSBpbnRlcm5hbGx5IGhlbGQgcmVmZXJlbmNlXHJcblx0Ly8gdG8gdGhlIERPTSBub2RlIC0gdGhlIGFjdHVhbCByZW1vdmFsIG9mIHRoZSBub2RlIGZyb20gRE9NIGlzIGRvbmUgYnkgdGhlIGluZnJhc3RydWN0dXJlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR1bm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gSWYgdGhpcyBtZXRob2QgaXNcclxuXHQvLyBub3QgaW1wbGVtZW50ZWQgdGhlIHVwZGF0ZSBpcyBjb25zaWRlcmVkIHBvc3NpYmxlIC0gZS5nLiBmb3IgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aXNVcGRhdGVQb3NzaWJsZT8oIG5ld1ZOOiBWTik6IGJvb2xlYW47XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Y29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhlIG5vZGVcclxuXHQvLyBkb2Vzbid0IHN1cHBvcnQgZXJyb3IgaGFuZGxpbmcuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHN1cHBvcnRzRXJyb3JIYW5kbGluZz8oKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggdm5FcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHByZXBhcmVVcGRhdGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFZOVXBkYXRlRGlzcFxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkUmVuZGVyOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5zaG91bGRDb21taXQgPSBzaG91bGRDb21taXQ7XHJcblx0XHR0aGlzLnNob3VsZFJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIGZhbHNlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIGZhbHNlKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdG9ja1ZhbHVlKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHRyZXR1cm4gc2hvdWxkQ29tbWl0XHJcblx0XHRcdD8gc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuRG9Db21taXROb1JlbmRlclxyXG5cdFx0XHQ6IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLk5vQ29tbWl0Tm9SZW5kZXI7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRkbiA9IGdldEZpcnN0RE4oIHN2bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxhc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcbi8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdFx0aWYgKGRuICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm46IFZOLCBhbmNob3JETjogRE4pOiBETlxyXG57XHJcblx0Ly8gY2hlY2sgaWYgd2UgaGF2ZSBzaWJsaW5nIERPTSBub2RlcyBhZnRlciBvdXIgbGFzdCBzdWItbm9kZSAtIHRoYXQgbWlnaHQgYmUgZWxlbWVudHNcclxuXHQvLyBub3QgY29udHJvbGxlZCBieSBvdXIgY29tcG9uZW50LlxyXG5cdGlmICh2bi5zdWJOb2RlcyAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAwKVxyXG5cdHtcclxuXHRcdGxldCBkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbdm4uc3ViTm9kZXMubGVuZ3RoIC0gMV0pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBkbi5uZXh0U2libGluZztcclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBuZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBvdXIgbmV4dCBzaWJsaW5nc1xyXG5cdGZvciggbGV0IG52biA9IHZuLm5leHQ7IG52biAhPT0gdW5kZWZpbmVkOyBudm4gPSBudm4ubmV4dClcclxuXHR7XHJcblx0XHRpZiAoIW52bi5hbmNob3JETilcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8gbm90ZSB0aGF0IGdldExhc3RETiBjYWxsIHRyYXZlcnNlcyB0aGUgaGllcmFyY2h5IG9mIG5vZGVzLiBOb3RlIGFsc28gdGhhdCBpdFxyXG5cdFx0Ly8gY2Fubm90IGZpbmQgYSBub2RlIHVuZGVyIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50IGJlY2F1c2UgdGhlIGZpcnN0IGRpZmZlcmVudFxyXG5cdFx0Ly8gYW5jaG9yIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIHdhbnRlZCBub2RlLlxyXG5cdFx0Y29uc3QgZG4gPSBnZXRMYXN0RE4oIG52bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY3Vyc2UgdG8gb3VyIHBhcmVudCBpZiBleGlzdHNcclxuXHRyZXR1cm4gdm4ucGFyZW50ICYmIHZuLnBhcmVudC5hbmNob3JETiA9PT0gYW5jaG9yRE4gPyBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4ucGFyZW50LCBhbmNob3JETikgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgYXJyYXkgb2Ygbm9kZSBuYW1lcyBzdGFydGluZyB3aXRoIHRoaXMgbm9kZSBhbmQgdXAgdW50aWwgdGhlIHRvcC1sZXZlbCBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vk5QYXRoKCB2bjogVk4pOiBzdHJpbmdbXVxyXG57XHJcblx0bGV0IGRlcHRoID0gdm4uZGVwdGg7XHJcblx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0Zm9yKCBsZXQgaSA9IDAsIG52bjogVk4gPSB2bjsgaSA8IGRlcHRoOyBpKyssIG52biA9IG52bi5wYXJlbnQpXHJcblx0e1xyXG5cdFx0cGF0aFtpXSA9IG52bi5uYW1lICsgKG52bi5jcmVhdG9yICYmIG52bi5jcmVhdG9yLnZuID8gYCAoY3JlYXRlZCBieSAke252bi5jcmVhdG9yLnZuLm5hbWV9KWAgOiBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7cmVxdWVzdE5vZGVVcGRhdGUsIHNjaGVkdWxlRnVuY0NhbGwsIHdyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuaW1wb3J0IHtub3RpZnlTZXJ2aWNlUHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkfSBmcm9tIFwiLi9QdWJTdWJcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgYWJzdHJhY3QgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQgbmFtZSgpOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyB0eXBlOiBtaW0uVk5UeXBlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZS4gVGhpcyBpcyBudWxsIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgcGFyZW50OiBWTkJhc2U7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRwdWJsaWMgY3JlYXRvcjogbWltLklDb21wb25lbnQ7XHJcblxyXG5cdC8vIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRwdWJsaWMgbmV4dDogVk5CYXNlO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBwcmV2OiBWTkJhc2U7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzIC0gYm90aCBrZXllZCBhbmQgdW5rZXllZCAtIGRlZmluZWQgb25seSBpZiB0aGVyZSBhcmUgc29tZSBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzOiBWTkJhc2VbXTtcclxuXHJcblx0Ly8gTWFwIG9mIGtleWVkIHN1Yi1ub2RlcyAtIGRlZmluZWQgb25seSBpZiB0aGUgbnVtYmVyIG9mIHN1Yi1ub2RlcyBpcyBncmVhdGVyIHRoYW4gMS5cclxuXHRwdWJsaWMga2V5ZWRTdWJOb2RlczogTWFwPGFueSxWTkJhc2U+O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cHVibGljIHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRlcHRoICsgMSA6IDA7XHJcblx0XHR0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHRwdWJsaWMgdGVybSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVtb3ZlIGluZm9ybWF0aW9uIGFib3V0IGFueSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgc2VydmljZXNcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZm9yRWFjaCggKHNlcnZpY2UsIGlkKSA9PiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZm9yRWFjaCggKGluZm8sIGlkKSA9PiB7IG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTsgfSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMua2V5ZWRTdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuZGVwdGggPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgbW91bnRlZCAqL1xyXG5cdHB1YmxpYyBnZXQgaXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmFuY2hvckROOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudXBkYXRlUmVxdWVzdGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgdHJ1ZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgZmFsc2UsIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdC8vIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgbm9kZXMuXHJcblx0cHVibGljIHB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxuXHJcblx0XHRsZXQgZXhpc3RpblNlcnZpY2U6IGFueSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoZXhpc3RpblNlcnZpY2UgIT09IHNlcnZpY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuc2V0KCBpZCwgc2VydmljZSk7XHJcblx0XHRcdG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyB1bnB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3Vic2NyaWJlcyBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0Ly8gYnkgb25lIG9mIHRoZSBhbmNlc3RvciBub2RlcywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0OyBvdGhlcndpc2UsXHJcblx0Ly8gdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0Ly8gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3Igbm9kZSBpc1xyXG5cdC8vIGNoYW5nZWQsIHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdHB1YmxpYyBzdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nLCByZWY6IG1pbS5SZWZQcm9wVHlwZSwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0bWltLnNldFJlZiggcmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBkZWZhdWx0U2VydmljZSkpO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZSxcclxuXHQvLyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0cHVibGljIHVuc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdC8vIG5vZGUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdC8vIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdHB1YmxpYyBnZXRTZXJ2aWNlKCBpZDogc3RyaW5nLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIGlkLCB1c2VTZWxmKTtcclxuXHRcdHJldHVybiBzZXJ2aWNlICE9PSB1bmRlZmluZWQgPyBzZXJ2aWNlIDogZGVmYXVsdFNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgdXAgdGhlIGNoYWluIG9mIG5vZGVzIGxvb2tpbmcgZm9yIGEgcHVibGlzaGVkIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFJldHVybnNcclxuXHQvLyB1bmRlZmluZWQgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGZvdW5kLiBOb3RlIHRoYXQgbnVsbCBtaWdodCBiZSBhIHZhbGlkIHZhbHVlLlxyXG5cdHByaXZhdGUgZmluZFNlcnZpY2UoIGlkOiBzdHJpbmcsIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHVzZVNlbGYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc2VydmljZSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRcdFx0aWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBzZXJ2aWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ28gdXAgdGhlIGNoYWluOyBub3RlIHRoYXQgd2UgZG9uJ3QgcGFzcyB0aGUgdXNlU2VsZiBwYXJhbWV0ZXIgb24uXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5maW5kU2VydmljZSggaWQsIHRydWUpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgbm9kZSB0aGF0IHB1YmxpY2F0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBzZXJ2aWNlICh0byB3aGljaCB0aGUgbm9kZVxyXG5cdC8vIGhhcyBwcmV2aW91c2x5IHN1YnNjcmliZWQpIGhhcyBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bWltLnNldFJlZiggaW5mby5yZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGluZm8uZGVmYXVsdFNlcnZpY2UpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3NcclxuXHQgKiB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBtaW0uQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIG1pbS5Db21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbyBjbGFzcyBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIHN1YnNjcmlwdGlvbiBvZiBhIG5vZGUgdG8gYSBzZXJ2aWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVk5TdWJzY3JpYmVkU2VydmljZUluZm9cclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluIHdpdGggdGhlIHNlcnZpY2UgdmFsdWVcclxuXHRyZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBEZWZhdWx0IHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyBwdWJsaXNoZXMgdGhlXHJcblx0Ly8gc2VydmljZVxyXG5cdGRlZmF1bHRTZXJ2aWNlOiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBjYW4gc3Vic2NyaWJlIHRvIGEgc2VydmljZSB0aGF0IGl0IGltcGxlbWVudHMgaXRzZWxmLiBUaGlzXHJcblx0Ly8gaXMgdXNlZnVsIGluIGNhc2Ugd2hlcmUgYSBzZXJ2aWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYSBjb21wb25lbnQgY2FuIGNoYWluIHRvIGEgc2VydmljZVxyXG5cdC8vIGltcGxlbWVudGVkIGJ5IGFuIGFuY2VzdG9yIGNvbXBvbmVudC5cclxuXHR1c2VTZWxmOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3AsIGdldEZpcnN0RE4sIGdldExhc3RETn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge2NyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudH0gZnJvbSBcIi4vQ29udGVudEZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkFjdGlvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgcG9zc2libGUgYWN0aW9ucyB0byBwZXJmb3JtIGZvciBuZXcgbm9kZXMgZHVyaW5nXHJcbiAqIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIHN0ZW0gbm9kZTsgdGhhdCBpcyxcclxuXHQgKiBvbmx5IHRoZSBub2RlJ3MgY2hpbGRyZW4gc2hvdWxkIGJlIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRoaXMgbWVhbnMgdGhhdCBlaXRoZXIgdGhlcmUgd2FzIG5vIGNvdW50ZXJwYXJ0IG9sZCBub2RlXHJcblx0ICogZm91bmQgb3IgdGhlIGZvdW5kIG5vZGUgY2Fubm90IGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgb25lIG5vciBjYW4gdGhlIG9sZCBub2RlIGJlIHJldXNlZFxyXG5cdCAqIGJ5IHRoZSBuZXcgb25lIChlLmcuIHRoZXkgYXJlIG9mIGRpZmZlcmVudCB0eXBlKS5cclxuXHQgKi9cclxuXHRJbnNlcnQgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS4gVGhpcyB2YWx1ZSBpcyBhbHNvIHVzZWQgZm9yIEluc3RhbmNlVk5cclxuXHQgKiBub2RlcyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGFyZSB0aGUgc2FtZSBub2RlLlxyXG5cdCAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwXHJcbntcclxuXHRjb25zdHJ1Y3RvciggbmV3Vk46IFZOLCBhY3Rpb24gPSBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk4/OiBWTilcclxuXHR7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMubmV3Vk4gPSBuZXdWTjtcclxuXHRcdHRoaXMub2xkVk4gPSBvbGRWTjtcclxuXHR9XHJcblxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogTmV3IHZpcnR1YWwgbm9kZSB0byBpbnNlcnQgb3IgdG8gdXBkYXRlIGFuIG9sZCBub2RlICovXHJcblx0cHVibGljIG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZC4gVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiAqL1xyXG5cdHB1YmxpYyBvbGRWTjogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHRwdWJsaWMgdXBkYXRlRGlzcDogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuIFRoaXMgaW5jbHVkZXMgbm9kZXMgdG8gYmUgdXBkYXRlZFxyXG5cdCAqIGFuZCB0byBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3ViTm9kZURpc3BzOiBWTkRpc3BbXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyB1cGRhdGUgb2YgdGhlIHN1Yi1ub2Rlcy4gKi9cclxuXHRwdWJsaWMgc3ViTm9kZXNUb1JlbW92ZTogVk5bXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIGdyb3VwcyBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBpbnNlcnRlZC4gKi9cclxuXHRwdWJsaWMgc3ViTm9kZUdyb3VwczogVk5EaXNwR3JvdXBbXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDb21wYXJlcyBvbGQgYW5kIG5ldyBjaGFpbnMgb2Ygc3ViLW5vZGVzIGFuZCBkZXRlcm1pbmVzIHdoYXQgbm9kZXMgc2hvdWxkIGJlIGNyZWF0ZWQsIGRlbGV0ZWRcclxuXHQgKiBvciB1cGRhdGVkLiBUaGUgcmVzdWx0IGlzIHJlbWVtYmVyZWQgYXMgYW4gYXJyYXkgb2YgVk5EaXNwIG9iamVjdHMgZm9yIGVhY2ggc3ViLW5vZGUgYW5kIGFzXHJcblx0ICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuXHQgKiBpbnRvIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIGFuZCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuXHQgKiBUaGUgZ3JvdXBzIGFyZSBidWlsdCBpbiBhIHdheSBzbyB0aGF0IGlmIGEgbm9kZSBzaG91bGQgYmUgbW92ZWQsIGl0cyBlbnRpcmUgZ3JvdXAgaXMgbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudFxyXG5cdFx0bGV0IG5ld0NoYWluID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB0aGlzLm9sZFZOLnJlbmRlcigpKTtcclxuXHRcdGxldCBuZXdMZW4gPSBuZXdDaGFpbiA/IG5ld0NoYWluLmxlbmd0aCA6IDA7XHJcblxyXG5cdFx0bGV0IG9sZENoYWluID0gdGhpcy5vbGRWTi5zdWJOb2RlcztcclxuXHRcdGxldCBvbGRMZW4gPSBvbGRDaGFpbiA/IG9sZENoYWluLmxlbmd0aCA6IDA7XHJcblxyXG5cdFx0Ly8gaWYgZWl0aGVyIG9sZCBvciBuZXcgb3IgYm90aCBjaGFpbnMgYXJlIGVtcHR5LCB3ZSBkbyBzcGVjaWFsIHRoaW5nc1xyXG5cdFx0aWYgKG5ld0xlbiA9PT0gMCAmJiBvbGRMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGJvdGggY2hhaW4gYXJlIGVtcHR5IC0gZG8gbm90aGluZ1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIG5ldyBjaGFpbiBpcyBlbXB0eSAtIGRlbGV0ZSBhbGwgb2xkIG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IG9sZENoYWluO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIG9sZCBjaGFpbiBpcyBlbXB0eSAtIGluc2VydCBhbGwgbmV3IG5vZGVzXHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzID0gbmV3Q2hhaW4ubWFwKCBuZXdWTiA9PiBuZXcgVk5EaXNwKCBuZXdWTiwgVk5EaXNwQWN0aW9uLkluc2VydCkpO1xyXG5cdFx0XHRpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3VwcyA9IFtuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIFZORGlzcEFjdGlvbi5JbnNlcnQsIDAsIG5ld0xlbiAtIDEpXTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG5cdFx0Ly8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG5cdFx0Ly8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcblx0XHRsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG5cdFx0bGV0IHVwZGF0ZVN0cmF0ZWd5ID0gdGhpcy5vbGRWTiA/IHRoaXMub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcblx0XHRpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZztcclxuXHJcblx0XHQvLyBwcm9jZXNzIHRoZSBzcGVjaWFsIGNhc2Ugd2l0aCBhIHNpbmdsZSBzdWItbm9kZSBpbiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBqdXN0XHJcblx0XHQvLyB0byBhdm9pZCBjcmVhdGluZyB0ZW1wb3Jhcnkgc3RydWN0dXJlc1xyXG5cdFx0aWYgKG5ld0xlbiA9PT0gMSAmJiBvbGRMZW4gPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXdWTiA9IG5ld0NoYWluWzBdO1xyXG5cdFx0XHRsZXQgb2xkVk4gPSBvbGRDaGFpblswXTtcclxuXHRcdFx0bGV0IGRpc3AgPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzID0gW2Rpc3BdO1xyXG5cdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8XHJcblx0XHRcdFx0KChhbGxvd0tleWVkTm9kZVJlY3ljbGluZyB8fCBuZXdWTi5rZXkgPT09IG9sZFZOLmtleSkgJiYgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbb2xkVk5dO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgYm90aCBvbGQgYW5kIG5ldyBjaGFpbnMgY29udGFpbiBtb3JlIHRoYW4gb25lIG5vZGU7IHRoZXJlZm9yZSwgdGhlIG1hcCBvZlxyXG5cdFx0Ly8ga2V5ZWQgc3ViLW5vZGVzIGV4aXN0cyAoYWx0aG91Z2ggaXQgbWlnaHQgYmUgZW1wdHkpLlxyXG5cdFx0bGV0IG9sZE1hcCA9IHRoaXMub2xkVk4ua2V5ZWRTdWJOb2RlcztcclxuXHRcdGxldCBvbGRNYXBTaXplID0gb2xkTWFwID8gb2xkTWFwLnNpemUgOiAwO1xyXG5cclxuXHRcdC8vIHByZXBhcmUgYXJyYXlzIGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzIGFuZCBmb3Igb2xkIG5vZGVzIHRvIGJlIHJlbW92ZWRcclxuXHRcdHRoaXMuc3ViTm9kZURpc3BzID0gbmV3IEFycmF5KCBuZXdMZW4pO1xyXG5cdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG5cdFx0Ly8gaWYgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgb2xkIG1hcCBpcyBlcXVhbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIG9sZCBub2RlcywgdGhhdFxyXG5cdFx0Ly8gbWVhbnMgdGhhdCBhbGwgb2xkIG5vZGVzIGFyZSBrZXllZC4gSWYgdGhpcyBpcyB0aGUgY2FzZSBBTkQgcmVjeWNsaW5nIG9mIGtleWVkIG5vZGVzXHJcblx0XHQvLyBpcyBub3QgYWxsb3dlZCwgd2Ugd2lsbCBub3QgbmVlZCB0byBwdXQgdW5rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ldyBub2RlcyBhc2lkZS5cclxuXHRcdC8vIFdlIGtub3cgdGhhdCB0aGV5IHdpbGwgaGF2ZSB0byBiZSBpbnNlcnRlZC5cclxuXHRcdGlmIChvbGRNYXBTaXplID09PSBvbGRMZW4gJiYgIWFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkS2V5ZWRPbmx5KCBvbGRNYXAsIG5ld0NoYWluLCBuZXdMZW4sIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblx0XHRlbHNlIGlmIChvbGRNYXBTaXplID09PSAwICYmIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkTm9uS2V5ZWRPbmx5KCBvbGRDaGFpbiwgb2xkTGVuLCBuZXdDaGFpbiwgbmV3TGVuLCBuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLm1hdGNoT2xkTWl4ZWQoIG9sZENoYWluLCBvbGRMZW4sIG9sZE1hcCwgbmV3Q2hhaW4sIG5ld0xlbiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcsIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5sZW5ndGggPT09IDApXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHdlIGtub3cgdGhhdCBhbGwgb2xkIG5vZGVzIGhhdmUga2V5cyBhbmQgdGhlIHJlY3ljbGluZyBvZiBrZXllZFxyXG5cdCAqIG5vZGVzIGlzIE5PVCBhbGxvd2VkLiBUaGVyZWZvcmUsIHdoZW4gd2UgdHJ5IHRvIG1hdGNoIG5ldyBub2RlcyB0byBvbGQgb25lcyB3ZSBrbm93IHRoYXRcclxuXHQgKiBub24ta2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgd2lsbCBiZSBtYXJrZWQgZm9yIGluc2VydGlvbi4gV2UgYWxzbyBjYW4gYnVpbGRcclxuXHQgKiBncm91cHMgKGlmIHJlcXVlc3RlZCkgaW4gdGhlIHNhbWUgbG9vcC5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1hdGNoT2xkS2V5ZWRPbmx5KCBvbGRNYXA6IE1hcDxhbnksVk4+LCBuZXdDaGFpbjogVk5bXSwgbmV3TGVuOiBudW1iZXIsIGJ1aWxkR3JvdXBzOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnksIGFjdGlvbjogVk5EaXNwQWN0aW9uLCBncm91cDogVk5EaXNwR3JvdXA7XHJcblxyXG5cdFx0Ly8gaWYgd2UgbmVlZCB0byBidWlsZCBncm91cHMsIHByZXBhcmUgYXJyYXkgb2YgZ3JvdXBzXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuc3ViTm9kZUdyb3VwcyA9IFtdO1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGFuZFxyXG5cdFx0Ly8gbWFyayB1bmtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIGZvciBpbnNlcnRpb24uIE9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZVxyXG5cdFx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXAgb3IgcHV0IHRoZSBuZXcgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvclxyXG5cdFx0Ly8gY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuIGEgbmV3IG9uZS5cclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld1ZOID0gbmV3Q2hhaW5baV07XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXSA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0a2V5ID0gbmV3Vk4ua2V5O1xyXG5cclxuXHRcdFx0Ly8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9sZFZOID0gb2xkTWFwLmdldCgga2V5KVxyXG5cdFx0XHRcdGlmIChvbGRWTiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIG1hcCAtIHRoaXMgd2F5IHRoZSBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoZVxyXG5cdFx0XHRcdFx0Ly8gbWFwIGFyZSB0aG9zZSB0aGF0IGFyZSB1bm1hdGNoZWQuXHJcblx0XHRcdFx0XHRvbGRNYXAuZGVsZXRlKCBrZXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGlzcC5hY3Rpb24gPSBhY3Rpb247XHJcblxyXG5cdFx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWdyb3VwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXggYW5kIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZVxyXG5cdFx0XHRcdFx0Ly8gY2Fubm90IGJlIGhlcmUgZm9yIGEgbm9kZSB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGVcclxuXHRcdFx0XHRcdC8vIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuXHRcdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgb3IgXCJub25lXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG5cdFx0XHRcdFx0Ly8gaXRzIG5leHQgc2libGluZyBpbiB0aGUgbmV3IGxpc3QgaXMgZGlmZmVyZW50IGZyb20gdGhlIG5leHQgc2libGluZyBpbiB0aGUgb2xkIGxpc3QuXHJcblx0XHRcdFx0XHQvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDAgJiYgdGhpcy5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gb2xkVk4ucHJldilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4IGFuZCBvcGVuIG5ldyBncm91cC5cclxuXHRcdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFsbCBjb25zZWN1dGl2ZSBcImluc2VydFwiIG5vZGVzIGJlbG9uZyB0byB0aGUgc2FtZSBncm91cCBzbyB3ZSBqdXN0IHdhaXQgZm9yIHRoZVxyXG5cdFx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xvc2UgdGhlIGxhc3QgZ3JvdXAgaWYgcmVxdWVzdGVkIHRvIGJ1aWxkIGdyb3VwcyAob25seSBpbiB0aGlzIGNhc2Ugd2UgbWF5IGhhdmUgYSBncm91cCBvYmplY3QpXHJcblx0XHRpZiAoZ3JvdXApXHJcblx0XHRcdGdyb3VwLmxhc3QgPSBuZXdMZW4gLSAxO1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgb2xkIG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdG9sZE1hcC5mb3JFYWNoKCBvbGRWTiA9PiB0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHdlIGtub3cgdGhhdCBub25lIG9mIHRoZSBvbGQgbm9kZXMgaGF2ZSBrZXlzIGFuZCB0aGUgcmVjeWNsaW5nIG9mIGtleWVkXHJcblx0ICogbm9kZXMgSVMgYWxsb3dlZC4gVGhlcmVmb3JlLCB3ZSB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGJ5IGluZGV4LiBXZSBhbHNvIGNhbiBidWlsZFxyXG5cdCAqIGdyb3VwcyAoaWYgcmVxdWVzdGVkKSBpbiB0aGUgc2FtZSBsb29wLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGROb25LZXllZE9ubHkoIG9sZENoYWluOiBWTltdLCBvbGRMZW46IG51bWJlciwgbmV3Q2hhaW46IFZOW10sIG5ld0xlbjogbnVtYmVyLCBidWlsZEdyb3VwczogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBkZWNsYXJlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBmb2xsb3dpbmcgY29kZVxyXG5cdFx0bGV0IGRpc3A6IFZORGlzcCwgb2xkVk46IFZOLCBuZXdWTjogVk4sIGtleTogYW55O1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyBhbmQgdHJ5IHRvIG1hdGNoIG5ldyBhbmQgb2xkIG5vZGVzIGJ5XHJcblx0XHQvLyBpbmRleC5cclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciggOyBpIDwgbmV3TGVuICYmIGkgPCBvbGRMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRvbGRWTiA9IG9sZENoYWluW2ldO1xyXG5cclxuXHRcdFx0Ly8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgbmV3IG5vZGVcclxuXHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtYWluaW5nIG5ldyBub2RlcyBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuXHRcdGZvciggbGV0IGogPSBpOyBqIDwgbmV3TGVuOyBqKyspXHJcblx0XHRcdHRoaXMuc3ViTm9kZURpc3BzW2pdID0gbmV3IFZORGlzcCggbmV3Q2hhaW5bal0sIFZORGlzcEFjdGlvbi5JbnNlcnQpO1xyXG5cclxuXHRcdC8vIHJlbWFpbmluZyBvbGQgbm9kZXMgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdGZvciggbGV0IGogPSBpOyBqIDwgb2xkTGVuOyBqKyspXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRDaGFpbltqXSk7XHJcblxyXG5cdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR0aGlzLmJ1aWxkU3ViTm9kZUdyb3VwcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IG5vdCBhbGwgb2xkIG5vZGVzIGhhdmUga2V5cyBvciB0aGUgcmVjeWNsaW5nIG9mXHJcblx0ICoga2V5ZWQgbm9kZXMgaXMgYWxsb3dlZC4gVGhlcmVmb3JlLCB3aGVuIHdlIGhhdmUgYSBub24ta2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXdcclxuXHQgKiBub2RlLCB3ZSBmaXJzdCBwdXQgaXQgYXNpZGUgYW5kIG9ubHkgYWZ0ZXIgd2Ugd2VudCBvdmVyIGFsbCBuZXcgbm9kZXMgd2UgY2FuIGRlY2lkZVxyXG5cdCAqIHdoYXQgdG8gZG8gd2l0aCB0aG9zZSB0aGF0IHdlIHB1dCBhc2lkZS4gQWxzbywgb25seSBhZnRlciB3ZSB3ZW50IG92ZXIgYWxsIG5ldyBub2RlcyB3ZVxyXG5cdCAqIGNhbiBidWlsZCBncm91cHMgaWYgcmVxdWVzdGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGRNaXhlZCggb2xkQ2hhaW46IFZOW10sIG9sZExlbjogbnVtYmVyLCBvbGRNYXA6IE1hcDxhbnksVk4+LCBuZXdDaGFpbjogVk5bXSxcclxuXHRcdFx0XHRcdG5ld0xlbjogbnVtYmVyLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZzogYm9vbGVhbiwgYnVpbGRHcm91cHM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0XHQvLyBkZWNsYXJlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBmb2xsb3dpbmcgY29kZVxyXG5cdFx0bGV0IGRpc3A6IFZORGlzcCwgb2xkVk46IFZOLCBuZXdWTjogVk4sIGtleTogYW55O1xyXG5cclxuXHRcdC8vIExvb3Agb3ZlciBuZXcgbm9kZXMsIGNyZWF0ZSBWTkRpc3Agc3RydWN0dXJlcyB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIGFuZFxyXG5cdFx0Ly8gcHV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgYXNpZGVcclxuXHRcdGxldCBuZXdVbm1hdGNoZWREaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld1ZOID0gbmV3Q2hhaW5baV07XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXSA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0a2V5ID0gbmV3Vk4ua2V5O1xyXG5cclxuXHRcdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcHV0IHRoZSB1bmtleWVkIG5ldyBub2RlIGFzaWRlXHJcblx0XHRcdFx0bmV3VW5tYXRjaGVkRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2xkVk4gPSBvbGRNYXAuZ2V0KCBrZXkpXHJcblx0XHRcdFx0aWYgKG9sZFZOID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgcmVjeWNsaW5nIGFsbG93ZWQgd2UgcHV0IHVubWF0Y2hlZCBub2RlIGFzaWRlOyBvdGhlcndpc2UsIHdlIGluZGljYXRlIHRoYXRcclxuXHRcdFx0XHRcdC8vIGl0IHNob3VsZCBiZSBpbnNlcnRlZFxyXG5cdFx0XHRcdFx0aWYgKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKVxyXG5cdFx0XHRcdFx0XHRuZXdVbm1hdGNoZWREaXNwcy5wdXNoKCBkaXNwKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fCBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBtYXAgLSB0aGlzIHdheSB0aGUgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGVcclxuXHRcdFx0XHRcdC8vIG1hcCBhcmUgdGhvc2UgdGhhdCBhcmUgdW5tYXRjaGVkLlxyXG5cdFx0XHRcdFx0b2xkTWFwLmRlbGV0ZSgga2V5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgb2xkIHN1Yi1ub2Rlcywgc2tpcCBhbHJlYWR5IG1hdGNoZWQgb25lcyBhbmQgdHJ5IHRvIG1hdGNoIG90aGVycyB0byB0aGVcclxuXHRcdC8vIHlldC11bm1hdGNoZWQgbmV3IG5vZGVzLiBVbm1hdGNoZWQgb2xkIG5vZGVzIGFyZSB0aG9zZSB0aGF0IGFyZSBlaXRoZXIgdW5rZXllZCBvclxyXG5cdFx0Ly8gdGhlIGtleWVkIG9uZXMgdGhhdCBhcmUgc3RpbGwgaW4gdGhlIG9sZE1hcC5cclxuXHRcdGxldCBpT2xkID0gMCwgaU5ldyA9IDAsIG5ld1VubWF0Y2hlZExlbiA9IG5ld1VubWF0Y2hlZERpc3BzLmxlbmd0aDtcclxuXHRcdHdoaWxlKCBpT2xkIDwgb2xkTGVuICYmIGlOZXcgPCBuZXdVbm1hdGNoZWRMZW4pXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBtYXRjaGVkIGtleWVkIG5vZGVzXHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5baU9sZCsrXTtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSAhPT0gdW5kZWZpbmVkICYmICFvbGRNYXAuaGFzKCBvbGRWTi5rZXkpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0ZGlzcCA9IG5ld1VubWF0Y2hlZERpc3BzW2lOZXcrK107XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHJcblx0XHRcdC8vIGlmIHJlY3ljbGluZyBpcyBub3QgYWxsb3dlZCBhbmQgZWl0aGVyIG9sZCBvciBuZXcgbm9kZXMgaXMga2V5ZWQsIGluc2VydCBuZXcgYW5kIHJlbW92ZSBvbGRcclxuXHRcdFx0aWYgKCFhbGxvd0tleWVkTm9kZVJlY3ljbGluZyAmJiAob2xkVk4ua2V5ICE9PSB1bmRlZmluZWQgfHwgbmV3Vk4ua2V5ICE9PSB1bmRlZmluZWQpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgbmV3IG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIGluc2VydGVkXHJcblx0XHRmb3IoIGxldCBqID0gaU5ldzsgaiA8IG5ld1VubWF0Y2hlZExlbjsgaisrKVxyXG5cdFx0XHRuZXdVbm1hdGNoZWREaXNwc1tqXS5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgb2xkIG5vZGVzIGxlZnQsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWRcclxuXHRcdGZvciggbGV0IGogPSBpT2xkOyBqIDwgb2xkTGVuOyBqKyspXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBtYXRjaGVkIGtleWVkIG5vZGVzXHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5bal07XHJcblx0XHRcdGlmIChvbGRWTi5rZXkgIT09IHVuZGVmaW5lZCAmJiAhb2xkTWFwLmhhcyggb2xkVk4ua2V5KSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR0aGlzLmJ1aWxkU3ViTm9kZUdyb3VwcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuXHQgKiB1cGRhdGVkIG9yIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYnVpbGRTdWJOb2RlR3JvdXBzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcblx0XHRsZXQgY291bnQgPSB0aGlzLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG5cdFx0XHQvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcblx0XHRcdGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGNyZWF0ZSBhcnJheSBvZiBncm91cHMgYW5kIGNyZWF0ZSB0aGUgZmlyc3QgZ3JvdXAgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3Qgbm9kZVxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblx0XHRsZXQgZ3JvdXA6IFZORGlzcEdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCB0aGlzLnN1Yk5vZGVEaXNwc1swXS5hY3Rpb24sIDApO1xyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGUgd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdC8vIG9yIHB1dCB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlblxyXG5cdFx0Ly8gYSBuZXcgb25lLlxyXG5cdFx0bGV0IGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGZvciggbGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHRhY3Rpb24gPSBkaXNwLmFjdGlvbjtcclxuXHRcdFx0aWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4LiBEZWNyZW1lbnQgdGhlIGl0ZXJhdGluZyBpbmRleCBzbyB0aGF0XHJcblx0XHRcdFx0Ly8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuXHRcdFx0XHQvLyB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGUgZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgb3IgXCJub25lXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG5cdFx0XHRcdC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG5cdFx0XHRcdC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRpZiAodGhpcy5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gZGlzcC5vbGRWTi5wcmV2KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG5cdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcblx0XHRpZiAoZ3JvdXAgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0Z3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB1cGRhdGUgb2YgdGhlIGdpdmVuIG9sZCBub2RlIGZyb20gdGhlIGdpdmVuIG5ldyBub2RlIGlzIHBvc3NpYmxlLiBVcGRhdGVcclxuICogaXMgcG9zc2libGUgaWYgdGhlIHR5cGVzIG9mIG5vZGVzIGFyZSB0aGUgc2FtZSBhbmQgZWl0aGVyIHRoZSBpc1VwZGF0ZVBvc3NpYmxlIG1ldGhvZCBpcyBub3RcclxuICogZGVmaW5lZCBvbiB0aGUgb2xkIG5vZGUgb3IgaXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVcGRhdGVQb3NzaWJsZSggb2xkVk46IFZOLCBuZXdWTjogVk4pOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKG9sZFZOLnR5cGUgPT09IG5ld1ZOLnR5cGUgJiZcclxuXHRcdFx0KG9sZFZOLmlzVXBkYXRlUG9zc2libGUgPT09IHVuZGVmaW5lZCB8fCBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpKTtcclxuXHJcbn1cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0xvY2FsU3R5bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0V2ZW50U2xvdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiO1xyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCI7XHJcbi8vLyAjZW5kaWZcclxuOyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGNzcy5TdHlsZXNldCk6IHZvaWRcclxue1xyXG5cdGNzcy5zZXRFbGVtZW50U3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgcHJvcFZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGNzcy5TdHlsZXNldCwgbmV3UHJvcFZhbDogY3NzLlN0eWxlc2V0KTogYW55XHJcbntcclxuXHRsZXQgcmVzID0gY3NzLmRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogY3NzLlN0cmluZ1N0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0Y3NzLnNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCB1cGRhdGVWYWwpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlIGxpc3RlbmVycyBjYW4gYmVcclxuICogYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0YXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0ZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUV2ZW50U2xvdE93bmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHNsb3QgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY2FsbGVyIHdob1xyXG4gKiBjcmVhdGVkIGl0LiBUaGUgb3duZXIgY2FuIGZpcmUgZXZlbnRzIGFuZCBjbGVhciBldmVudCBsaXN0ZW5lcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3RPd25lcjxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBleHRlbmRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuICogbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuICogbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMuZGVsZXRlKCBsaXN0ZW5lcik7XHJcblx0XHRcdGlmICh0aGlzLmxpc3RlbmVycy5zaXplID09PSAwKVxyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90IHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlIFRcclxuICogaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3Q8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdE93bmVyIHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlXHJcbiAqIFQgaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdE93bmVyPElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdE93bmVyPFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdE93bmVyPFRbUF0+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHdpbGwgaGF2ZSBldmVudCBzbG90cyBmb3IgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgdGVtcGxhdGUgdHlwZSBULiBUaGVcclxuICogY2FsbGVyIHdpbGwgYmUgdGhlIG93bmVyIG9mIHRoZSBldmVudCBzbG90czsgdGhhdCBpcywgaXQgd2lsbCBiZSBhYmxlIHRvIGZpcmUgZXZlbnRzIGFuZFxyXG4gKiBjbGVhciBhbGwgbGlzdGVuZXJzIHdoZW4gbmVjZXNzYXJ5LiBUaGlzIGFsbG93cyB0aGUgZm9sbG93aW5nIGNvZGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBpbnRlcmZhY2UgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgZXZlbnRzOiBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+O1xyXG4gKiAgICAgZG9Tb21ldGhpbmcoKTogdm9pZDtcclxuICogfVxyXG4gKiBcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqIFxyXG4gKiAgICAgcHVibGljIGRvU29tZXRoaW5nKCk6IHZvaWQgeyB0aGlzLl9ldmVudHMuY2hhbmdlLmZpcmUoMSk7fVxyXG4gKiB9XHJcbiAqIFxyXG4gKiBsZXQgb2JqOiBJTXlDbGFzcyA9IG5ldyBNeUNsYXNzKCk7XHJcbiAqIG9iai5ldmVudHMuY2hhbmdlLmFkZCggKG46IG51bWJlcikgPT4gY29uc29sZS5sb2cobikpO1xyXG4gKiBvYmouZG9Tb21ldGhpbmcoKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVsdGlFdmVudFNsb3Q8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogc3RyaW5nLCByZWNlaXZlcjogYW55KTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXNbcHJvcF0gPyB0aGlzW3Byb3BdIDogdGhpc1twcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtSW5mbyB0eXBlIGRlZmluZXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBTVkcgZWxlbWVudC4gVGhpc1xyXG4vLyBpbmZvcm1hdGlvbiBjYW4gYmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuLy9cdC0gc3RyaW5nIC0gYWN0dWFsIG5hbWUgdG8gdXNlIGZvciB0aGUgZWxlbWVudC4gU29tZSBTVkcgZWxlbWVudHMgaGF2ZSBuYW1lcyB0aGF0IGNhbm5vdCBiZSB1c2VkXHJcbi8vXHRcdGluIEpYIGRpcmVjdGx5IChlLmcuIGJlY2F1c2Ugb2YgaHlwaGVuIGxpa2UgaW4gXCJjb2xvci1wcm9maWxlXCIpLiBJbiB0aGlzIGNhc2UgdGhlIHN0cmluZ1xyXG4vL1x0XHR2YWx1ZSB3aWxsIGJlIHRoZSBhY3R1YWwgZWxlbWVudCBuYW1lIHRvIHB1dCBpbnRvIEhUTUwgZG9jdW1lbnQsIHdoaWxlIEpTWCB3aWxsIGJlIHVzaW5nXHJcbi8vXHRcdGEgY2FtZWwtZm9ybWF0dGVkIG5hbWUgKGUuZy4gXCJjb2xvclByb2ZpbGVcIikuXHJcbi8vXHQtIGJvb2xlYW4gLSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyBcImR1YWwtcHVycG9zZVwiOyB0aGF0IGlzLCBlbGVtZW50IHdpdGggdGhpc1xyXG4vL1x0XHRuYW1lIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBIVE1MIG9yIFNWRyBlbGVtZW50LlxyXG4vL1x0LSB0dXBsZSBvZiB0d28gZWxlbWVudHMgLSBzdHJpbmcgYW5kIGJvb2xlYW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWJvdmUgaXRlbXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTdmdFbG1JbmZvID0gYm9vbGVhbiB8IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbXMgY2xhc3MgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIG5hbWVzIHVzZWQgdG8gZGVmaW5lIFNWRyBlbGVtZW50cyBpbiBKU1guIFdoZW5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYW4gZWxlbWVudCwgd2UgbG9va3VwIHRoZSBwcm92aWRlZCB0YWcgbmFtZSBhbmQgaWYgd2UgZmluZCBpdCBpbiB0aGlzIGNsYXNzXHJcbi8vIHdlIHVzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgd2l0aCB0aGUgcHJvcGVyIFNWRyBuYW1lc3BhY2Ugc3RyaW5nLiBWYWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllc1xyXG4vLyBhcmUgU3ZnRWxtSW5mbyB2YWx1ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgU3ZnRWxtc1xyXG57XHJcblx0Ly8gTmFtZXNwYWNlIHVzZWQgdG8gY3JlYXRlIFNWRyBlbGVtZW50cy5cclxuXHRwdWJsaWMgc3RhdGljIG5hbWVzcGFjZTogc3RyaW5nID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gU1ZHIHRhZ1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoIHRhZ05hbWU6IHN0cmluZywgaW5mbzogU3ZnRWxtSW5mbyk6IHZvaWRcclxuXHR7XHJcblx0XHRTdmdFbG1zLmluZm9zW3RhZ05hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBjYW4gYmUgdXNlZCBhcyBhbiBTVkcgZWxlbWVudCBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNTdmdFbG0oIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGFnTmFtZSBpbiBTdmdFbG1zLmluZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIGdpdmVuIHRhZyBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZTogc3RyaW5nKTogU3ZnRWxtSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGluZm9ybWF0aW9uIG9iamVjdCBoYXMgdGhlIFwiZHVhbC1wdXJwb3NlXCIgZmxhZyBzZXQuXHJcblx0cHVibGljIHN0YXRpYyBpc0R1YWxQdXJwb3NlKCBpbmZvOiBTdmdFbG1JbmZvKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDEgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMV0gOiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gZmFsc2UgOiBpbmZvIGFzIGJvb2xlYW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgaXMgYSBcImR1YWwtcHVycG9zZVwiIGVsZW1lbnQ7IHRoYXQgaXMgY2FuIGJlIGVpdGhlclxyXG5cdC8vIEhUTUwgYW5kIFNWRyBlbGVtZW50LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNUYWdEdWFsUHVycG9zZSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5pc0R1YWxQdXJwb3NlKCBpbmZvKSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBvYmplY3QgYW5kIHRoZSB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZSggaW5mbzogU3ZnRWxtSW5mbywgdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMCA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVswXSA6IHRhZ05hbWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGluZm8gYXMgc3RyaW5nIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCB0aGUgZ2l2ZW4gdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWVGb3JUYWcoIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5nZXRFbG1OYW1lKCBpbmZvLCB0YWdOYW1lKSA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgU1ZHIGVsZW1lbnQgbmFtZXMgdG8gU3ZnRWxtSW5mby5cclxuXHRwcml2YXRlIHN0YXRpYyBpbmZvczoge1tlbG1OYW1lOnN0cmluZ106IFN2Z0VsbUluZm99ID1cclxuXHR7XHJcblx0XHRzdmc6IGZhbHNlLFxyXG5cclxuXHRcdGE6IHRydWUsXHJcblx0XHRhbmltYXRlOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVNb3Rpb246IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXHJcblxyXG5cdFx0Y2lyY2xlOiBmYWxzZSxcclxuXHRcdGNsaXBQYXRoOiBmYWxzZSxcclxuXHRcdGNvbG9yUHJvZmlsZTogXCJjb2xvci1wcm9maWxlXCIsXHJcblxyXG5cdFx0ZGVmczogZmFsc2UsXHJcblx0XHRkZXNjOiBmYWxzZSxcclxuXHRcdGRpc2NhcmQ6IGZhbHNlLFxyXG5cclxuXHRcdGVsbGlwc2U6IGZhbHNlLFxyXG5cclxuXHRcdGZlQmxlbmQ6IGZhbHNlLFxyXG5cdFx0ZmVDb2xvck1hdHJpeDogZmFsc2UsXHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBmYWxzZSxcclxuXHRcdGZlQ29tcG9zaXRlOiBmYWxzZSxcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IGZhbHNlLFxyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVEcm9wU2hhZG93OiBmYWxzZSxcclxuXHRcdGZlRmxvb2Q6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQTogZmFsc2UsXHJcblx0XHRmZUZ1bmNCOiBmYWxzZSxcclxuXHRcdGZlRnVuY0c6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jUjogZmFsc2UsXHJcblx0XHRmZUdhdXNzaWFuQmx1cjogZmFsc2UsXHJcblx0XHRmZUltYWdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZU5vZGU6IGZhbHNlLFxyXG5cdFx0ZmVNb3JwaG9sb2d5OiBmYWxzZSxcclxuXHRcdGZlT2Zmc2V0OiBmYWxzZSxcclxuXHRcdGZlUG9pbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVTcG90TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVUaWxlOiBmYWxzZSxcclxuXHRcdGZlVHVyYnVsZW5jZTogZmFsc2UsXHJcblx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0Zm9yZWlnbk9iamVjdDogZmFsc2UsXHJcblxyXG5cdFx0ZzogZmFsc2UsXHJcblxyXG5cdFx0aGF0Y2g6IGZhbHNlLFxyXG5cdFx0aGF0Y2hwYXRoOiBmYWxzZSxcclxuXHJcblx0XHRpbWFnZTogZmFsc2UsXHJcblxyXG5cdFx0bGluZTogZmFsc2UsXHJcblx0XHRsaW5lYXJHcmFkaWVudDogZmFsc2UsXHJcblxyXG5cdFx0bWFya2VyOiBmYWxzZSxcclxuXHRcdG1hc2s6IGZhbHNlLFxyXG5cdFx0bWV0YWRhdGE6IGZhbHNlLFxyXG5cdFx0bXBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdHBhdGg6IGZhbHNlLFxyXG5cdFx0cGF0dGVybjogZmFsc2UsXHJcblx0XHRwb2x5Z29uOiBmYWxzZSxcclxuXHRcdHBvbHlsaW5lOiBmYWxzZSxcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogZmFsc2UsXHJcblx0XHRyZWN0OiBmYWxzZSxcclxuXHJcblx0XHRzY3JpcHQ6IHRydWUsXHJcblx0XHRzZXQ6IGZhbHNlLFxyXG5cdFx0c29saWRjb2xvcjogZmFsc2UsXHJcblx0XHRzdG9wOiBmYWxzZSxcclxuXHRcdHN0eWxlOiB0cnVlLFxyXG5cdFx0c3dpdGNoOiBmYWxzZSxcclxuXHRcdHN5bWJvbDogZmFsc2UsXHJcblxyXG5cdFx0dGV4dDogZmFsc2UsXHJcblx0XHR0ZXh0UGF0aDogZmFsc2UsXHJcblx0XHR0aXRsZTogdHJ1ZSxcclxuXHRcdHRleHRTcGFuOiBmYWxzZSxcclxuXHJcblx0XHR1c2U6IGZhbHNlLFxyXG5cclxuXHRcdHZpZXc6IGZhbHNlLFxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ29tbW9uIHR5cGVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlzcG9zZXIgaW50ZXJmYWNlIGFsbG93cyBjbGllbnRzIHRvIGluZm9ybSB0aGUgb2JqZWN0IHRoYXQgaXQgY2FuIGNsZWFyIGl0cyBpbnRlcm5hbFxyXG4gKiByZXNvdXJjZXMuIFRoZSBvYmplY3QgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgaXQgaGFzIGJlZW4gZGlzcG9zZWQgb2ZmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBhbnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMgYW5kIHJldHVybiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBBbnlBbnlGdW5jID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybiB2YWx1ZXMgb2YgYW55IHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTm9uZVR5cGVGdW5jPFQ+ID0gKCkgPT4gVDtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgZG9uJ3QgcmV0dXJuIGFueSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVm9pZEZ1bmMgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJpZ2dlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElUcmlnZ2VyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGtlZXBzIGEgdmFsdWUgYW5kIG5vdGlmaWVzIGFsbCBhdHRhY2hlZCB3YXRoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpZ2dlcjxUID0gYW55PlxyXG57XHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIGdldCgpOiBUO1xyXG5cclxuICAgIC8vIFNldHMgYSBuZXcgdmFsdWVcclxuICAgIHNldCggdjogVCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBpbml0aWFsIHZhbHVlLlxyXG4gKiBAcGFyYW0gdlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyaWdnZXI8VCA9IGFueT4oIHY/OiBUKTogSVRyaWdnZXI8VD5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBUcmlnZ2VyKHYpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlciBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGtlZXBzIGEgdmFsdWUgYW5kIG5vdGlmaWVzIGFsbCBhdHRhY2hlZCB3YXRjaGVyc1xyXG4gKiB3aGVuIHRoaXMgdmFsdWUgY2hhbmdlcy5cclxuICovXHJcbmNsYXNzIFRyaWdnZXI8VCA9IGFueT4gaW1wbGVtZW50cyBJVHJpZ2dlcjxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvciggdj86IFQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ID0gdjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCh2OiBUKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG8gaWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHYgPT09IHRoaXMudilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnYgPSB2O1xyXG5cclxuICAgICAgICAvLyB3ZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciBhdHRhY2hlZCB0byBvdXIgdHJpZ2dlcjtcclxuICAgICAgICAvLyB0aGUgd2F0Y2hlcnMgdGhhdCB3b3VsZCBjb25uZWN0IGxhdGVyIHdpbGwgaGF2ZSB0byByZWFkIHRoZSB0cmlnZ2VyJ3MgdmFsdWUgZmlyc3QuXHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsdWUgYmVpbmcgZ2V0IGFuZCBzZXRcclxuICAgIHByaXZhdGUgdjogVDtcclxuXHJcbiAgICAvLyBTZXQgb2Ygd2F0Y2hlcnMgd2F0Y2hpbmcgb3ZlciB0aGlzIHRyaWdnZXIncyB2YWx1ZS4gVGhpcyBtZW1iZXIgc2VydmVzIGFzIGEgc3RvcmFnZSBpbnN0ZWFkXHJcbiAgICAvLyBvZiBoYXZpbmcgdGhlIG1hbmFnZXIgdG8gbWFwIG9mIHRyaWdnZXJzIHRvIHRoZSBzZXQgb2Ygd2F0Y2hlcnMuXHJcbiAgICBwdWJsaWMgd2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdhdGNoZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJV2F0Y2hlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxuXHJcbiAgICAvLyAvKiogU2V0cyBhIHJlc3BvbmRlciBmdW5jdGlvbiAqL1xyXG4gICAgLy8gc2V0UmVzcG9uZGVyKCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYywgcmVzcG9uZGVyVGhpcz86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8ga2VlcCBhIHdhdGNoZXIgb2JqZWN0IGF0dGFjaGVkIHRvIHRoZSB3YXRjaGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxubGV0IHN5bVdhdGNoZXIgPSBTeW1ib2woIFwic3ltV2F0Y2hlclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB3YXRjaGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiByZWd1bGFyIGZ1bmN0aW9uLiBXaGVuIHRoZVxyXG4gKiB3YXRjaGVyIGZ1bmN0aW9uIGlzIGludm9rZWQgaXQgaW52b2tlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gYW5kIGl0IG5vdGljZXMgYWxsIHRyaWdnZXIgb2JqZWN0c1xyXG4gKiB0aGF0IHdlcmUgcmVhZCBkdXJpbmcgaXRzIGV4ZWN1dGlvbi4gV2hlbiBhbnkgb2YgdGhlc2UgdHJpZ2dlciBvYmplY3RzIGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQsIHRoZSByZXNwb25kZXIgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIHdhdGNoZWRcclxuICogQHBhcmFtIHJlc3BvbmRlciBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdmFsdWVzIG9mIHRoZSB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWQgZHVyaW5nXHJcbiAqIHRoZSBvcmlnaW5hbCBmdW5jdGlvbidzIGxhc3QgZXhlY3V0aW9uIGNoYW5nZS5cclxuICogQHBhcmFtIGZ1bmNUaGlzIE9wdGlvbmFsIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNhbGwgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gcmVzcG9uZGVyVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgXCJ0aGlzXCIgdmFsdWUgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aWxsIGJlIHVzZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYz4oIGZ1bmM6IFQsIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLFxyXG4gICAgZnVuY1RoaXM/OiBhbnksIHJlc3BvbmRlclRoaXM/OiBhbnkpOiBJV2F0Y2hlcjxUPlxyXG57XHJcbiAgICBmdW5jdGlvbiB3YXRjaGVyRnVuYyguLi5hcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCB3YXRjaGVyOiBXYXRjaGVyID0gd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdhcyBub3Qgc3VwcGxpZWQgYnV0IG5vdyB3aGVuIHRoZVxyXG4gICAgICAgIC8vIHdhdGNoZXIgZXhlY3V0ZXMsIFwidGhpc1wiIGlzIGRlZmluZWQsIHdlIHJlbWVtYmVyIGl0LlxyXG4gICAgICAgIHJldHVybiB3YXRjaGVyLmV4ZWN1dGUoIHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgdGhlIHdhdGNoZXIgb2JqZWN0IGluIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmIHVzaW5nIGEgc3ltYm9sLlxyXG4gICAgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl0gPSBuZXcgV2F0Y2hlciggZnVuYywgcmVzcG9uZGVyLCBmdW5jVGhpcywgcmVzcG9uZGVyVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKHdhdGNoZXJGdW5jIGFzIElXYXRjaGVyKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB3YXRjaGVyID0gd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICB3YXRjaGVyICYmIHdhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIHdhdGNoZXJGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2F0Y2hlciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2Ygd2F0Y2hpbmcgZm9yIHRyaWdnZXIgb2JqZWN0cyBlbmNvdW50ZXJlZFxyXG4gKiBkdXJpbmcgYSBmdW5jdGlvbiBleGVjdXRpb24uIFdoZW4gdGhlIHRyaWdnZXIgb2JqZWN0cyBhcmUgcmVhZCwgdGhleSBhcmUgcmVtZW1iZXJlZCBieSB0aGVcclxuICogV2F0Y2hlciBvYmplY3QuIFdoZW5ldmVyIGEgdmFsdWUgaXMgY2hhbmdlZCBpbiBhbnkgb2YgdGhlc2UgdHJpZ2dlcnMsIHRoZSB3YXRjaGVyIG9iamVjdCBpc1xyXG4gKiBub3RpZmllZCBhbmQgY2FsbHMgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIFdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYywgZnVuY1RoaXM/OiBhbnksIHJlc3BvbmRlclRoaXM/OiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLnJlc3BvbmRlciA9IHJlc3BvbmRlcjtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIC8vIGlmIHJlc3BvbmRlciBcInRoaXNcIiBpcyBub3QgZGVmaW5lZCB1c2UgdGhlIG9uZSBmb3IgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXJUaGlzID0gcmVzcG9uZGVyVGhpcyA/IHJlc3BvbmRlclRoaXMgOiBmdW5jVGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aGlsZSB1cGRhdGluZyB0aGUgc2V0IG9mIGF0dGFjaGVkIHRyaWdnZXJzLiBUaGUgXCJmdW5jVGhpc1wiXHJcbiAgICAgKiBwYXJhbWV0ZXIgaXMgdGhlIFwidGhpc1wiIHVuZGVyIHdoaWNoIHRoZSBpbnRlcm5hbCB3YXRjaGVyIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZC4gSXRcclxuICAgICAqIHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlIFwidGhpc1wiIHRvIGFwcGx5IHdoZW4gaW52b2tpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGlmIGl0IHdhc24ndFxyXG4gICAgICogc2V0IHlldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUoIGZ1bmNUaGlzOiBhbnksIGFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvdXIgd2F0Y2hlciBoYXMgYmVlbiBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJEaXNwb3NlZCB3YXRjaGVyIHdhcyBjYWxsZWQuXCIpO1xyXG5cclxuICAgICAgICAvLyBGaXggb3VyIFwidGhpc1wiIGlmIGl0IGhhc24ndCBiZWVuIHNldCBzbyBmYXJcclxuICAgICAgICBpZiAoIXRoaXMuZnVuY1RoaXMgJiYgZnVuY1RoaXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXNwb25kZXJUaGlzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25kZXJUaGlzID0gZnVuY1RoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhciBhbGwgY3VycmVudCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gaW5zdGFsbCBvdXIgd2F0Y2hlciBhdCB0aGUgdG9wIG9mIHRoZSB3YXRjaGVycyBzdGFja1xyXG4gICAgICAgIGdfbWFuYWdlci5wdXNoV2F0Y2hlciggdGhpcylcclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmMuYXBwbHkoIHRoaXMuZnVuY1RoaXMsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb3VyIHdhdGNoZXIgZnJvbSB0aGUgdG9wIG9mIHRoZSB3YXRjaGVycyBzdGFja1xyXG4gICAgICAgICAgICBnX21hbmFnZXIucG9wV2F0Y2hlcigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIHRyaWdnZXJzXHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGZ1bmMgYW5kIHJlc3BvbmRlciBwcm9wZXJ0aWVzIHRvIG51bGwgdG8gaW5kaWNhdGUgdGhhdCB0aGUgd2F0Y2hlciBoYXMgYmVlbiBkaXNwb3NlZFxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHdhdGNoZXIgdGhhdCBpdCBzaG91bGQgY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLiBUaGlzIG9jY3VycyB3aGVuIHRoZXJlXHJcbiAgICAvLyBhcmUgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIGhhdmUgYmVlbiBjaGFuZ2VkXHJcbiAgICBwdWJsaWMgcmVzcG9uZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvdXIgd2F0Y2hlciBoYXMgYmVlbiBhbHJlYWR5IGRpc3Bvc2VkLiBJdCBjYW4gaGFwcGVuIGlmIGFmdGVyIGFsbCBtdXRhdGlvblxyXG4gICAgICAgIC8vIHNjb3BlcyBleGl0ZWQgdGhlIG1hbmFnZXIgbm90aWZpZXMgbXVsdGlwbGUgd2F0Y2hlcnMgYW5kIG9uZSBvZiB0aGUgd2F0Y2hlcnMnIHJlc3BvbmRlclxyXG4gICAgICAgIC8vIGRpc3Bvc2VzIG9mIGFub3RoZXIgd2F0Y2hlci5cclxuICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyLmFwcGx5KCB0aGlzLnJlc3BvbmRlclRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW5zIHRoZSBzdGF0ZSBvZiB0aGUgd2F0Y2hlciwgc28gdGhhdCBpdCBpcyBkZXRhY2hlZCBmcm9tIGFueSB0cmlnZ2VycyBhbmQgaXMgcmVtb3ZlZFxyXG4gICAgICogZnJvbSB0aGUgbWFuYWdlcidzIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVycy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhbigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGV0YWNoZXMgdGhpcyB3YXRjaGVyIGZyb20gYWxsIHRoZSB0cmlnZ2VycyBhbmQgdGhlIHRyaWdnZXJzIGZyb20gdGhpcyB3YXRjaGVyLlxyXG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCggdHJpZ2dlciA9PiB0cmlnZ2VyLndhdGNoZXJzLmRlbGV0ZSggdGhpcykpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gYXNrIHRoZSBtYW5hZ2VyIHRvIGZvcmdldCBhYm91dCB0aGlzIHdhdGNoZXIgaWYgaXQgaXMgY3VycmVudGx5IGluIHRlIGRlZmVycmVkIHNldFxyXG4gICAgICAgIGdfbWFuYWdlci5yZW1vdmVEZWZlcnJlZFdhdGNoZXIoIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdhdGNoZWQ7IHRoYXQgaXMsIGR1cmluZyB3aGljaCB3ZSBzaG91bGQgbGlzdGVuIHRvIHRyaWdnZXJzIGJlaW5nIHJlYWQsIHNvXHJcbiAgICAvLyB0aGF0IHdlIGNhbiByZW1lbWJlciB0aGVtIGFuZCBsYXRlciByZXNwb25kIHdoZW4gdGhleSBub3RpZnkgdGhhdCB0aGVpciB2YWx1ZXMgaGF2ZSBiZWVuXHJcbiAgICAvLyBjaGFuZ2VkLlxyXG4gICAgcHJpdmF0ZSBmdW5jOiBUO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB0aGUgdGhlIHZhbHVlIG9mIG9uZSBvZiB0aGUgdHJpZ2dlcnMgY2hhbmdlc1xyXG4gICAgcHJpdmF0ZSByZXNwb25kZXI6IE5vbmVWb2lkRnVuYztcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gcmVzcG9uZGVyIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgcmVzcG9uZGVyVGhpczogYW55O1xyXG5cclxuICAgIC8vIFNldCBvZiB0cmlnZ2VycyBjdXJyZW50bHkgYmVpbmcgd2F0Y2hlZCBieSB0aGlzIHdhdGNoZXIuIFRoaXMgbWVtZWJlciBpcyB1c2VkIGJ5IHRoZVxyXG4gICAgLy8gbWFuYWdlci4gSXQgaXMgZXNzZW50aWFsbHkgYSBzdG9yYWdlLCB3aGljaCBpcyB1c2VkIGluc3RlYWQgb2YgdGhlIG1hbmFnZXIgaGF2aW5nIGFcclxuICAgIC8vIG1hcCBvZiB3YXRjaGVycyB0byB0aGUgc2V0cyBvZiB0cmlnZ2Vycy4gVGhlIHB1cnBvc2Ugb2Yga25vd2luZyB3aGF0IHRyaWdnZXJzIGFyZSB1c2VkXHJcbiAgICAvLyBieSB3aGF0IHdhdGNoZXIgaXMgdG8gcmVtb3ZlIHRoZSB3YXRjaGVyIGZyb20gYWxsIHRoZXNlIHRyaWdnZXJzIGJlZm9yZSB0aGUgd2F0Y2hlZFxyXG4gICAgLy8gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG4gICAgcHVibGljIHRyaWdnZXJzID0gbmV3IFNldDxUcmlnZ2VyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNYW5hZ2VyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgY2xhc3MgaXMgYSBzaW5nbGV0b24gY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBnbG9iYWwgZnVuY3Rpb25hbGl0eVxyXG4gKiBvZiB0aGUgdHJpZ2dlci13YXRjaGVyIG1lY2hhbmlzbS4gSXQgaW5jbHVkZXMgYSBzdGFjayBvZiB3YXRjaGVyIG9iamVjdHMgY3VycmVudGx5IGV4ZWN1dGluZ1xyXG4gKiB0aGVpciBmdW5jdGlvbnMgYW5kIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgdG8gYmUgcmVhZC4gV2hlbiBhIHRyaWdnZXIgb2JqZWN0IGlzIGJlaW5nXHJcbiAqIHJlYWQgKHRoYXQgaXMgaXRzIGdldCgpIG1ldGhvZCBpcyBjYWxsZWQpLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgbm90aWZpZWQsIGJlY2F1c2VcclxuICogdGhleSBhbGwgZGVwZW5kIG9uIHRoZSB0cmlnZ2VyIG9iamVjdCdzIHZhbHVlIGZvciB0aGVpciBmdW5jdGlvbmFsaXR5LlxyXG4gKiBcclxuICogSXQgYWxzbyBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnQgb2YgbXV0YXRpb24gc2NvcGVzIGFuZCBoYW5kbGVzIG5vdGlmeWluZyB3YXRjaGVycyBvZlxyXG4gKiBtdXRhdGlvbnMgb25seSB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGhhcyBleGl0ZWQuIFRoZSB0cmlnZ2VycyBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzXHJcbiAqIGRpcmVjdGx5OyBpbnN0ZWFkLCB0aGV5IG5vdGlmeSB0aGUgbWFuYWdlciwgd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGluZm9ybWF0aW9uIGFuZCBub3RpZmllcyBhbGxcclxuICogdGhlIHdhdGNoZXJzIG9uY2Ugb3V0IG9mIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUHVzaGVzIHRoZSBnaXZlbiB3YXRjaGVyIG9iamVjdCB0byB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVzaFdhdGNoZXIoIHdhdGNoZXI6IFdhdGNoZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyU3RhY2sucHVzaCggd2F0Y2hlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSB3YXRjaGVyIG9iamVjdCBjdXJyZW50bHkgb24gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvcFdhdGNoZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgZnJvbSB0aGUgc2V0IG9mIGRlZmVycmVkIHdhdGNoZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVEZWZlcnJlZFdhdGNoZXIoIHdhdGNoZXI6IFdhdGNoZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmRlbGV0ZSggd2F0Y2hlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50LiBJZiBpdCByZWFjaGVzIHplcm8sIG5vdGlmaWVzIGFsbCBkZWZlcnJlZCB3YXRjaGVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvciggXCJVbnBhaXJlZCBjYWxsIHRvIGV4aXRNdXRhdGlvblNjb3BlXCIpO1xyXG5cclxuICAgICAgICBpZiAoLS10aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQgPT09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5rZXlzKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhhdCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHRyaWdnZXIgb2JqZWN0IGhhcyBiZWVuIHJlYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlUcmlnZ2VyUmVhZCggdHJpZ2dlcjogVHJpZ2dlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBhdHRhY2ggYWxsIHdhdGNoZXJzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2sgdG8gdGhlIHRyaWdnZXJcclxuICAgICAgICBmb3IoIGxldCB3YXRjaGVyIG9mIHRoaXMud2F0Y2hlclN0YWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2F0Y2hlci50cmlnZ2Vycy5hZGQoIHRyaWdnZXIpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyLndhdGNoZXJzLmFkZCggd2F0Y2hlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhhdCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHRyaWdnZXIgb2JqZWN0IGhhcyBiZWVuIGNoYW5nZWQuIElmIHRoaXMgaGFwcGVucyB3aGlsZVxyXG4gICAgICogd2l0aGluIGEgbXV0YXRpb24gc2NvcGUsIHdlIGRvbid0IG5vdGlmeSB0aGUgd2F0Y2hlcnMgb2YgdGhpcyB0cmlnZ2VyIGJ1dCBwdXQgdGhlbSBpbiBhXHJcbiAgICAgKiBkZWZlcnJlZCBzZXQuIElmIHRoaXMgaGFwcGVucyBvdXRzaWRlIG9mIGFueSBtdXRhdGlvbiBzY29wZS4gSW4gdGhpcyBjYXNlIHdlIG5vdGlmeSB0aGVcclxuICAgICAqIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciByaWdodCBhd2F5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlckNoYW5nZWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7IFxyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIHN1cHBvc2VkIHRvIGJlIGNhbGxlZCBvbmx5IGlmIHRoZSB0cmlnZ2VyIGhhcyB3YXRjaGVyc1xyXG4gICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgaWYgKHRyaWdnZXIud2F0Y2hlcnMuc2l6ZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwibm90aWZ5VHJpZ2dlckNoYW5nZWQgd2FzIGNhbGxlZCBieSBhIHRyaWdnZXIgd2l0aG91dCB3YXRjaGVyc1wiKTtcclxuICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQgPiAwKVxyXG4gICAgICAgICAgICB0cmlnZ2VyLndhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmFkZCggd2F0Y2hlcikpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHdoZW4gd2F0Y2hlcnMgcmVzcG9uZCwgdGhleSBjYW4gZXhlY3V0ZSB0aGVpciB3YXRjaGVyIGZ1bmN0aW9ucyBhbmQgdGhhdCBjb3VsZFxyXG4gICAgICAgICAgICAvLyBtZXNzIHdpdGggdGhlIHNhbWUgc2V0IG9mIHdhdGNoZXJzIHdlIGFyZSBpdGVyYXRpbmcgb3Zlci4gVGhlcmVmb3JlLCB3ZSBtYWtlIGEgY29weVxyXG4gICAgICAgICAgICAvLyBvZiB0aGlzIHNldCBmaXJzdC5cclxuICAgICAgICAgICAgbGV0IHdhdGNoZXJzID0gQXJyYXkuZnJvbSggdHJpZ2dlci53YXRjaGVycy5rZXlzKCkpO1xyXG4gICAgICAgICAgICB3YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHdhdGNoZXIucmVzcG9uZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBTdGFjayBvZiB3YXRjaGVyIG9iamVjdHMuIFdhdGNoZXJzIGFyZSBwdXNoZWQgb24gdG9wIGJlZm9yZSB0aGV5IGNhbGwgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGFuZCByZW1vdmVkIGFmdGVyIHRoaXMgZnVuY3Rpb24gcmV0dXJucy4gV2hlbiBhIHRyaWdnZXIgbm90aWZpZXMgdGhhdCBpdHMgdmFsdWVcclxuICAgIC8vIGhhcyBiZWVuIGNoYW5nZWQsIGFsbCB0aGUgd2F0Y2hlcnMgaW4gdGhlIHN0YWNrIGFyZSBhdHRhY2hlZCB0byB0aGlzIHRyaWdnZXIuIFRoaXMgbWVhbnNcclxuICAgIC8vIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBpcyB1c2VkIGJ5IHRoZSB3YXRjaGVkIGZ1bmN0aW9ucy5cclxuICAgIHByaXZhdGUgd2F0Y2hlclN0YWNrOiBXYXRjaGVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBOdW1iZXIgb2YgY3VycmVudGx5IGFjdGl2ZSBtdXRhdGlvbiBzY29wZXMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlIGhhcyBiZWVuXHJcbiAgICAvLyBjaGFuZ2VkIHdoaWxlIHRoaXMgbnVtYmVyIGlzIG5vdCAwLCB0aGUgdHJpZ2dlciB3aWxsIGJlIHJlbWVtYmVyZWQgaW4gdGhlIGludGVybmFsIHNldC5cclxuICAgIC8vIEFmdGVyIGFsbCBtdXRhdGlvbiBzY29wZXMgYXJlIGZpbmlzaGVkLCB0aGUgd2F0Y2hlcnMgYXR0YWNoZWQgdG8gYWxsIHRyaWdnZXJzIGluIHRoZSBzZXRcclxuICAgIC8vIHdpbGwgYmUgbm90aWZpZWQuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWQgd2hpbGUgdGhlcmUgYXJlXHJcbiAgICAvLyBubyBtdXRhdGlvbiBzY29wZXMgcHJlc2VudCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIHRoZSB0cmlnZ2VyIGFyZSBub3RpZmllZCBpbW1lZGlhdGVseS5cclxuICAgIHByaXZhdGUgbXV0YXRpb25TY29wZXNSZWZDb3VudCA9IDA7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHRoYXQgc2hvdWxkIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgZXhpdHMuIFVzaW5nIFNldFxyXG4gICAgLy8gZW5zdXJlcyB0aGF0IG5vIG1hdHRlciBob3cgbWFueSB0cmlnZ2VycyByZWZlcmVuY2UgYSB3YXRjaGVyLCB0aGUgd2F0Y2hlciB3aWxsIGJlIHByZXNlbnRcclxuICAgIC8vIG9ubHkgb25jZS5cclxuICAgIHByaXZhdGUgZGVmZXJyZWRXYXRjaGVycyA9IG5ldyBTZXQ8V2F0Y2hlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogU2luZ2xldG9uIFRyaWdnZXJXYXRjaGVyTWFuYWdlciBiamVjdCAqL1xyXG5sZXQgZ19tYW5hZ2VyID0gbmV3IFRyaWdnZXJXYXRjaGVyTWFuYWdlcigpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnRlck11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG57XHJcbiAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXhpdE11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG57XHJcbiAgICBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENvbXB1dGVkIHRyaWdnZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tcHV0ZWRUcmlnZ2VyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmFsdWUgdGhhdCBpcyBjYWxjdWxhdGVkIGJ5IGEgZnVuY3Rpb24uIFRoaXMgaXMgYVxyXG4gKiBjb21iaW5hdGlvbiBvZiBUcmlnZ2VyIGFuZCBXYXRjaGVyLiBJdCBpcyBhIHdhdGNoZXIgYmVjYXVzZSBpdCB3YXRjaGVzIG92ZXIgdGhlIGZ1bmN0aW9uIGFuZFxyXG4gKiBjYWxscyBpdCB3aGVuZXZlciBhbnkgdHJpZ2dlcnMgdGhpcyBmdW5jdGlvbiB1c2VzIGFyZSBjaGFuZ2VkLiBJdCBpcyBhIHRyaWdnZXIgYmVjYXVzZSBpdFxyXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyB2YWx1ZS5cclxuICogXHJcbiAqIFRoZSBpbXBvcnRhbnQgZmFjdCBhYm91dCBhIGNvbXB1dGVkIHRyaWdnZXIgaXMgdGhhdCBpdCBvbmx5IGludm9rZXMgdGhlIHdhdGNoZWQgZnVuY3Rpb25cclxuICogaWYgaXQncyB2YWx1ZSBpcyBiZWluZyB1c2VkIGJ5IGF0IGxlYXN0IG9uZSB3YXRjaGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcHV0ZWRUcmlnZ2VyPFQgPSBhbnk+IGV4dGVuZHMgSVRyaWdnZXI8VD4sIElEaXNwb3NlclxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBjb21wdXRlZCB0cmlnZ2VyIG9iamVjdCB3aG9zZSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBnaXZlbiBmdW5jdGlvbiBhbmQgd2l0aCBhblxyXG4gKiBvcHRpb25hbCBpbml0aWFsIHZhbHVlLlxyXG4gKiBAcGFyYW0gdlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiggZnVuYzogTm9uZVR5cGVGdW5jPFQ+LCBmdW5jVGhpcz86IGFueSk6IElDb21wdXRlZFRyaWdnZXI8VD5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFRyaWdnZXIoIGZ1bmMsIGZ1bmNUaGlzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbXB1dGVkVHJpZ2dlciBjbGFzcyByZXByZXNlbnRzIGEgdmFsdWUgdGhhdCBpcyBjYWxjdWxhdGVkIGJ5IGEgZnVuY3Rpb24uIFRoaXMgaXMgYVxyXG4gKiBjb21iaW5hdGlvbiBvZiBUcmlnZ2VyIGFuZCBXYXRjaGVyLiBJdCBpcyBhIHdhdGNoZXIgYmVjYXVzZSBpdCB3YXRjaGVzIG92ZXIgdGhlIGZ1bmN0aW9uIGFuZFxyXG4gKiBjYWxscyBpdCB3aGVuZXZlciBhbnkgdHJpZ2dlcnMgdGhpcyBmdW5jdGlvbiB1c2VzIGFyZSBjaGFuZ2VkLiBJdCBpcyBhIHRyaWdnZXIgYmVjYXVzZSBpdFxyXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyB2YWx1ZS5cclxuICogXHJcbiAqIFRoZSBpbXBvcnRhbnQgZmFjdCBhYm91dCBhIGNvbXB1dGVkIHRyaWdnZXIgaXMgdGhhdCBpdCBvbmx5IGludm9rZXMgdGhlIHdhdGNoZWQgZnVuY3Rpb25cclxuICogaWYgaXQncyB2YWx1ZSBpcyBiZWluZyB1c2VkIGJ5IGF0IGxlYXN0IG9uZSB3YXRjaGVyLlxyXG4gKi9cclxuY2xhc3MgQ29tcHV0ZWRUcmlnZ2VyPFQgPSBhbnk+IGV4dGVuZHMgVHJpZ2dlcjxUPiBpbXBsZW1lbnRzIElDb21wdXRlZFRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIC8vIHdlIGRvbid0IGNyZWF0ZSB0aGUgd2F0Y2hlciB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWRcclxuICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgcHVibGljIGdldCgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIHRoZSB3YXRjaGVyIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5mdW5jLCB0aGlzLnJlc3BvbmRlciwgdGhpcy5mdW5jVGhpcywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIG91ciB3YXRjaGVyIGlzIG5vdGlmaWVkIG9mIGNoYW5nZXMgaW4gaXRzIHRyaWdnZXIgdmFsdWVzLiBXZVxyXG4gICAgICogcmVzcG9uZCBieSBpbnZva2luZyB0aGUgZnVuY3Rpb24gKHRocm91Z2ggdGhlIHdhdGNoZXIpIGFuZCBzZXR0aW5nIGl0cyByZXR1cm4gdmFsdWUgYXNcclxuICAgICAqIG91ciBuZXcgdmFsdWUuIFRoaXMgY2FuIHRyaWdnZXIgY2hhbmdlcyBpbiB3YXRjaGVycyB0aGF0IGFyZSB1c2luZyBvdXIgdmFsdWUuIE5vdGUgdGhhdFxyXG4gICAgICogd2Ugb25seSBpbnZva2Ugb3VyIHdhdGNoZXIgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgdGhhdCB3YXRjaGVzIG91ciB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNwb25kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRnVuY3Rpb24gd2Ugd2lsbCBiZSB3YXRjaGluZ1xyXG4gICAgcHJpdmF0ZSBmdW5jOiBOb25lVHlwZUZ1bmM8VD47XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgb3ZlciBvdXIgZnVuY3Rpb25cclxuICAgIHByaXZhdGUgZnVuY1dhdGNoZXI6IElXYXRjaGVyPE5vbmVUeXBlRnVuYzxUPj47XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIHZhbHVlICBrZXB0IGJ5IHRoZSB0cmlnZ2VyIG1pZ2h0IG5vdCByZWZsZWN0IHRoZSBhY3R1YWwgY29tcHV0ZWRcclxuICAgIC8vIHZhbHVlLiBUaGlzIGZsYWcgaXMgdHJ1ZSB1bmRlciB0aGUgZm9sbG93aW5nIGNpcmN1bXN0YW5jZXM6XHJcbiAgICAvLyAxLiBSaWdodCBhZnRlciB0aGUgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQuIFdlIGRvbid0IGV2ZW4gY3JlYXRlIHRoZSB3YXRjaGVyIGJlY2F1c2Ugd2VcclxuICAgIC8vICAgIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgLy8gMi4gV2hlbiB0aGUgcmVzcG9uZGVyIGhhcyBiZWVuIGludm9rZWQsIGJ1dCBvdXIgdHJpZ2dlciBkaWRuJ3QgaGF2ZSBhbnkgd2F0Y2hlci4gQWdhaW4sIHdlXHJcbiAgICAvLyAgICB3aWxsIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgcHJpdmF0ZSBpc1N0YWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNdXRhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU11dGF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8ga2VlcCBhIG11dGF0b3Igb2JqZWN0IGF0dGFjaGVkIHRvIHRoZSBtdXRhdG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxubGV0IHN5bU11dGF0b3IgPSBTeW1ib2woIFwic3ltTXV0YXRvclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtdXRhdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiByZWd1bGFyIGZ1bmN0aW9uIHdoaWNoIGV4ZWN1dGVzXHJcbiAqIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLiBXYXRjaGVycyBmb3IgdHJpZ2dlcnMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkIGR1cmluZyBleGVjdXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhcmUgbm90IG5vdGlmaWVkIGltbWVkaWF0ZWx5LiBJbnN0ZWFkLCB0aGUgd2F0Y2hlcnNcclxuICogYXJlIFwiZGVmZXJyZWRcIiBhbmQgd2lsbCBiZSBub3RpZmllZCBvbmx5IG9uY2UgYWZ0ZXIgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgZXhpdHMuIFRoaXMgY2FuIGJlXHJcbiAqIHVzZWZ1bCBzaW5jZSB1c3VhbGx5IHdhdGNoZXJzIGRlcGVuZCBvbiBtYW55IHRyaWdnZXJzIGFuZCB3ZSBkb24ndCB3YW50IHRoZSB3YXRjaGVycyBiZWluZ1xyXG4gKiBub3RpZmllZCBtYW55IHRpbWUgYnV0IHJhdGhlciBvbmx5IG9uY2UgYWZ0ZXIgYWxsIHRoZSBjaGFuZ2VzIGhhdmUgYmVlbiBkb25lLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBhcm91bmQgd2hpY2ggdG8gZXN0YWJsaXNoIGEgbXV0YXRpb24gc2NvcGUuIElmIHRoaXMgaXMgYSBjbGFzcyBtZXRob2QsXHJcbiAqIHRoZW4gZWl0aGVyIHByb3ZpZGUgdGhlIGZ1bmNUaGlzIHBhcmFtZXRlciBvciBiaW5kIHRoZSBmdW5jdGlvbiBiZWZvcmUgcGFzc2luZyBpdCBpbi4gTm90ZVxyXG4gKiB0aGF0IGFycm93IGZ1bmN0aW9ucyBhcmUgYWxyZWFkeSBib3VuZC5cclxuICogQHBhcmFtIGZ1bmNUaGlzIFRoZSBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uLiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgYW4gdW5ib3VuZGNsYXNzIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgZnVuY1RoaXM/OiBhbnkpOiBJTXV0YXRvcjxUPlxyXG57XHJcbiAgICBmdW5jdGlvbiBtdXRhdG9yRnVuYyguLi5hcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yOiBXYXRjaGVyID0gbXV0YXRvckZ1bmNbc3ltV2F0Y2hlcl07XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdhcyBub3Qgc3VwcGxpZWQgYnV0IG5vdyB3aGVuIHRoZVxyXG4gICAgICAgIC8vIHdhdGNoZXIgZXhlY3V0ZXMsIFwidGhpc1wiIGlzIGRlZmluZWQsIHdlIHJlbWVtYmVyIGl0LlxyXG4gICAgICAgIHJldHVybiBtdXRhdG9yLmV4ZWN1dGUoIHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgdGhlIG11dGF0b3Igb2JqZWN0IGluIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmIHVzaW5nIGEgc3ltYm9sLlxyXG4gICAgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gPSBuZXcgTXV0YXRvciggZnVuYywgZnVuY1RoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgIChtdXRhdG9yRnVuYyBhcyBJTXV0YXRvcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbXV0YXRvciA9IG11dGF0b3JGdW5jW3N5bU11dGF0b3JdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgbXV0YXRvciAmJiBtdXRhdG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBtdXRhdG9yRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11dGF0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGV4ZWN1dGluZyBhIHdyYXBwZWQgZnVuY3Rpb24gdW5kZXIgYVxyXG4gKiBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIE11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpbiBhIG11dGF0aW9uIHNjb3BlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIG11dGF0b3Igd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgdHJ5IHsgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7IH1cclxuICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3cmFwcGVkLlxyXG4gICAgcHJpdmF0ZSBmdW5jOiBUO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVjb3JhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgc28gdGhhdCBjaGFuZ2luZyB0aGVpciB2YWx1ZSB3aWxsIGFueSB3YXRjaGVyXHJcbiAqIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlbSB0byByZXNwb25kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXIoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgIGxldCBzeW0gPSBTeW1ib2wobmFtZSk7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICBnZXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPYmouc2V0KCB2YWwpXHJcbiAgICAgICAgfSxcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBcImdldFwiIHByb3BlcnRpZXMgb3IgZnVuY3Rpb25zIHJldHVuaW5nIGEgdmFsdWUgc28gdGhhdCB0aGlzXHJcbiAqIHZhbHVlIHdpbGwgYXV0b21hdGljYWxseSByZWNhbGN1bGF0ZWQgaWYgYW55IHRyaWdnZXJzIG9uIHdoaWNoIHRoaXMgdmFsdWUgZGVwZW5kcyBoYXZlIHRoZWlyXHJcbiAqIHZhbHVlcyBjaGFuZ2VkLiBXSGVuIHRoaXMgaGFwcGVucywgdGhlIHdhdGNoZXIgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGlzIGNvbXB1dGVkIHZhbHVlIHdpbGxcclxuICogYmUgbm90aWZpZWQgdG8gcmVzcG9uZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCggdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgcHJvcERlc2M6IFByb3BlcnR5RGVzY3JpcHRvcilcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbChuYW1lKTtcclxuXHJcbiAgICAvLyBwcm9wRGVzYy52YWx1ZSBpcyB1bmRlZmluZWQgZm9yIGFjY2Vzc29ycyBhbmQgZGVmaW5lZCBmb3IgZnVuY3Rpb25zXHJcbiAgICBpZiAoIXByb3BEZXNjLnZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghcHJvcERlc2MuZ2V0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJAY29tcHV0ZWQgcHJvcGVydHkgcmVxdWlyZXMgZ2V0KCkgYWNjZXNzb3JcIik7XHJcblxyXG4gICAgICAgIGxldCBvcmdHZXQgPSBwcm9wRGVzYy5nZXQ7XHJcbiAgICAgICAgcHJvcERlc2MuZ2V0ID0gZnVuY3Rpb24oKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdHZXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcERlc2Muc2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG9yZ1NldCA9IHByb3BEZXNjLnNldDtcclxuICAgICAgICAgICAgcHJvcERlc2Muc2V0ID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgb3JnU2V0LmNhbGwoIHRoaXMsIHYpOyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JnRnVuYyA9IHByb3BEZXNjLnZhbHVlO1xyXG4gICAgICAgIHByb3BEZXNjLnZhbHVlID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElDb21wdXRlZFRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0Z1bmMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghZGVlcENvbXBhcmUoIG8xW3BdLCBvMltwXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHAgaW4gbzIpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHAgaW4gbzEpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpKVxyXG5cdHtcclxuXHRcdGlmIChvMS5sZW5ndGggIT09IG8yLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMCwgbGVuID0gbzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWRlZXBDb21wYXJlKCBvMVtpXSwgbzJbaV0pKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGVzZSBhcmUgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMgb3IgZnVuY3Rpb25zIGFuZCB0aGV5IGFyZSBkaWZmZXJlbnRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoT2JqZWN0KCBvOiBhbnkpOiBudW1iZXJcclxue1xyXG5cdGlmIChvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gMDtcclxuXHRlbHNlIGlmIChvID09PSBudWxsKVxyXG5cdFx0cmV0dXJuIDE7XHJcblx0ZWxzZSBpZiAoaXNOYU4oMCkpXHJcblx0XHRyZXR1cm4gMjtcclxuXHRlbHNlIGlmIChvID09PSB0cnVlKVxyXG5cdFx0cmV0dXJuIDM7XHJcblx0ZWxzZSBpZiAobyA9PT0gZmFsc2UpXHJcblx0XHRyZXR1cm4gNDtcclxuXHJcblx0bGV0IGggPSAxMDtcclxuXHJcblx0aWYgKHR5cGVvZiBvID09PSBcIm51bWJlclwiKVxyXG5cdFx0cmV0dXJuIDEwICsgbztcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvKTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8ubmFtZSk7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvKSlcclxuXHR7XHJcblx0XHRsZXQgbGVuID0gby5sZW5ndGg7XHJcblx0XHRsZXQgaCA9IDEwICsgbGVuO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0IGggKz0gaSArIGhhc2hPYmplY3QoIG9baV0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgaCA9IDEwO1xyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvKVxyXG5cdFx0XHRoICs9IGhhc2hTdHJpbmcocCkgKyBoYXNoT2JqZWN0KG9bcF0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoU3RyaW5nKCBzOiBzdHJpbmcpOiBudW1iZXJcclxue1xyXG5cdGlmICghcylcclxuXHRcdHJldHVybiA1O1xyXG5cclxuXHRsZXQgbGVuID0gcy5sZW5ndGg7XHJcblx0bGV0IGggPSAxMCArIGxlbjtcclxuXHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0aCArPSBzLmNoYXJDb2RlQXQoaSk7XHJcblx0cmV0dXJuIGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdGxldCByZXNDbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0Zm9yKCBsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFjbGFzc05hbWUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBjbGFzc05hbWVBc1N0cmluZzogc3RyaW5nID0gdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gY2xhc3NOYW1lIGFzIHN0cmluZ1xyXG5cdFx0XHRcdDogKGNsYXNzTmFtZSBhcyBzdHJpbmdbXSkuam9pbiggXCIgXCIpO1xyXG5cclxuXHRcdGlmIChyZXNDbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmVzQ2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVzQ2xhc3NOYW1lICs9IFwiIFwiO1xyXG5cclxuXHRcdHJlc0NsYXNzTmFtZSArPSBjbGFzc05hbWVBc1N0cmluZztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNDbGFzc05hbWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBTdHlsZXNldFtdKTogU3R5bGVzZXRcclxue1xyXG5cdC8vIGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIGFjY3VtdWxhdGluZyBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0bGV0IHJlc1N0eWxlOiBTdHlsZXNldCA9IHt9O1xyXG5cdG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlLCAuLi5zdHlsZXMpO1xyXG5cdHJldHVybiByZXNTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBmaXJzdCBvbmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc1RvKCByZXNTdHlsZTogU3R5bGVzZXQsIC4uLnN0eWxlczogKFN0eWxlc2V0IHwgc3RyaW5nKVtdICk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IHN0eWxlIG9mIHN0eWxlcylcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHQvLyBwYXJzZSB0aGUgc3R5bGUgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRsZXQgc3R5bGVPYmo6IFN0eWxlc2V0ID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0PyBzdHlsZSBhcyBTdHlsZXNldFxyXG5cdFx0XHRcdDogcGFyc2VTdHlsZVN0cmluZyggc3R5bGUgYXMgc3RyaW5nKTtcclxuXHJcblx0XHQvLyBjb3B5IGFsbCBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGVoIGN1cnJlbnQgc3R5bGUgb2JqZWN0IHRvIG91ciByZXN1bHRhbnQgb2JqZWN0XHRcdFx0XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0cmVzU3R5bGVbcHJvcE5hbWVdID0gc3R5bGVPYmpbcHJvcE5hbWVdO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIHN0eWxlIHN0cmluZyBpbnRvIHRoZSBTdHlsZSBvYmplY3QuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0eWxlU3RyaW5nKCBzOiBzdHJpbmcpOiBTdHlsZXNldFxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cclxuXHRsZXQgcmV0U3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblxyXG5cdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdGZvciggbGV0IGVsbSBvZiBlbG1zKVxyXG5cdHtcclxuXHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0aWYgKCFwYWlyIHx8IHBhaXIubGVuZ3RoID09PSAwIHx8IHBhaXIubGVuZ3RoID4gMilcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0cmV0U3R5bGVbZGFzaFRvQ2FtZWwoIHBhaXJbMF0udHJpbSgpKV0gPSBwYWlyWzFdLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXRTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgbmFtZXMgd2l0aCBkYXNoZXMgaW50byBuYW1lcyBpbiBjYW1lbENhc2UsIHdoZXJlIGV2ZXJ5IGNoYXJhY3RlciBhZnRlciBhIGRhc2ggaXNcclxuICogY2FwaXRhbGl6ZWQgYW5kIGRhc2hlcyBhcmUgcmVtb3ZlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IG1pbS5TbGljZVtdKTogbWltLlNsaWNlXHJcbntcclxuXHRsZXQgcmVzU2xpY2U6IG1pbS5TbGljZSA9IHt9O1xyXG5cdG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG5cdHJldHVybiByZXNTbGljZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuLy8gaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXNUbyggcmVzU2xpY2U6IG1pbS5TbGljZSwgLi4uc2xpY2VzOiBtaW0uU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdGlmIChyZXNTbGljZSA9PT0gdW5kZWZpbmVkIHx8IHJlc1NsaWNlID09PSBudWxsKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRmb3IoIGxldCBzbGljZSBvZiBzbGljZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0aWYgKHNsaWNlLnN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2Uuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5zdHlsZSA9IHt9O1xyXG5cclxuXHRcdFx0bWVyZ2VTdHlsZXNUbyggcmVzU2xpY2Uuc3R5bGUsIHNsaWNlLnN0eWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY2xhc3NOYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gXCJcIjtcclxuXHJcblx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5wcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnByb3BzID0ge307XHJcblxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRyZXNTbGljZVtwcm9wTmFtZV0gPSBzbGljZVtwcm9wTmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jb250ZW50ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZENvbnRlbnQ6IGFueSA9IHJlc1NsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIG9sZENvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX187Il0sInNvdXJjZVJvb3QiOiIifQ==