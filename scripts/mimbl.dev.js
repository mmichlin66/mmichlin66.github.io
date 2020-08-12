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

/***/ "./lib/api/HtmlTypes.js":
/*!******************************!*\
  !*** ./lib/api/HtmlTypes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./lib/api/LocalStyles.js":
/*!********************************!*\
  !*** ./lib/api/LocalStyles.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentWithLocalStyles = void 0;
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

/***/ "./lib/api/SvgTypes.js":
/*!*****************************!*\
  !*** ./lib/api/SvgTypes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./lib/api/mim.js":
/*!************************!*\
  !*** ./lib/api/mim.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updatable = exports.mimblStyleSchedulerType = exports.unmount = exports.mount = exports.unmountSync = exports.mountSync = exports.PromiseProxy = exports.FuncProxy = exports.Component = exports.wrapCallback = exports.mergeStylesTo = exports.mergeStyles = exports.mergeClasses = exports.mergeSlicesTo = exports.mergeSlices = exports.registerCustomEvent = exports.registerCustomAttribute = exports.jsx = exports.isSvgSvg = exports.isSvg = exports.Fragment = exports.setRef = exports.Ref = void 0;
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
const Reconciler_1 = __webpack_require__(/*! ../core/Reconciler */ "./lib/core/Reconciler.js");
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
    return Reconciler_1.wrapCallbackWithVN(callback, that, vn);
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
        return Reconciler_1.wrapCallbackWithVN(callback, this, this.vn);
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
exports.ClassCompVN = void 0;
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
exports.getCurrentComponent = exports.createNodesFromJSX = exports.createVNChainFromContent = exports.createNodesFromContent = void 0;
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const IndependentCompVN_1 = __webpack_require__(/*! ./IndependentCompVN */ "./lib/core/IndependentCompVN.js");
const ManagedCompVN_1 = __webpack_require__(/*! ./ManagedCompVN */ "./lib/core/ManagedCompVN.js");
const FuncVN_1 = __webpack_require__(/*! ./FuncVN */ "./lib/core/FuncVN.js");
const ElmVN_1 = __webpack_require__(/*! ./ElmVN */ "./lib/core/ElmVN.js");
const TextVN_1 = __webpack_require__(/*! ./TextVN */ "./lib/core/TextVN.js");
const FuncProxyVN_1 = __webpack_require__(/*! ./FuncProxyVN */ "./lib/core/FuncProxyVN.js");
const PromiseProxyVN_1 = __webpack_require__(/*! ./PromiseProxyVN */ "./lib/core/PromiseProxyVN.js");
const Reconciler_1 = __webpack_require__(/*! ./Reconciler */ "./lib/core/Reconciler.js");
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
        return vn || new FuncProxyVN_1.FuncProxyVN({ func: content, thisArg: Reconciler_1.s_currentClassComp });
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
    return Reconciler_1.s_currentClassComp;
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
exports.ElmVN = void 0;
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
exports.FuncProxyVN = void 0;
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const Reconciler_1 = __webpack_require__(/*! ./Reconciler */ "./lib/core/Reconciler.js");
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
 * keys to the nodes. The map is stored in a symbol on the function object itself.
 */
class FuncProxyVN extends VNBase_1.VNBase {
    constructor(props) {
        super();
        this.type = 6 /* FuncProxy */;
        this.func = props.func;
        this.thisArg = props.thisArg || Reconciler_1.s_currentClassComp;
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
     * function and that function must be invoked even if none of the node parameters have changed.
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
        if (!this.funcWatcher)
            return null;
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
        this.funcWatcher = null;
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
        let linkKey = key || thisArg || Reconciler_1.s_currentClassComp || func;
        // try to find the key in the map on the function object; if not found, do nothing
        let mapKeysToNodes = func[symKeysToNodes];
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
exports.FuncVN = void 0;
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
exports.IndependentCompVN = void 0;
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
exports.ManagedCompVN = void 0;
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
exports.PromiseProxyVN = void 0;
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
exports.notifyServiceUnsubscribed = exports.notifyServiceSubscribed = exports.notifyServiceUnpublished = exports.notifyServicePublished = void 0;
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

/***/ "./lib/core/Reconciler.js":
/*!********************************!*\
  !*** ./lib/core/Reconciler.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleFuncCall = exports.requestNodeUpdate = exports.updateNodeSync = exports.wrapCallbackWithVN = exports.s_currentClassComp = exports.s_currentVN = void 0;
const VN_1 = __webpack_require__(/*! ./VN */ "./lib/core/VN.js");
const ContentFuncs_1 = __webpack_require__(/*! ./ContentFuncs */ "./lib/core/ContentFuncs.js");
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
 * The CallbackWrapper function is used to wrap callbacks in order to have it executed in a Mimbl
 * context. The function is usually bound to a virtual node as "this" and to two parameters: the
 * object that will be the value of "this" when the original callback is executed and the original
 * callback itself. These two parameters are accessed as the first and second elements of the
 * `arguments` array). The rest of parameters in the `arguments` array are passed to the original
 * callback and the value returned by the callback is returned from the wrapper. Note that "this"
 * can be undefined if the function was scheduled without being in the context of any virtual node.
 *
 * The proper Mimbl context establishes the following:
 * - executes in a mutation scope, so that if any trigger valriable is changed during the execution
 *   of the callback, watchers will be only notified after the callback has finished its execution.
 * - If the wrapping has been done in the context of a virtual node (e.g. from a Mimbl component),
 *   the "current virtual node" and the "current component" are set to the node and component under
 *   which the callback was wrapped. This allow for proper JSX execution and for using the Mimbl
 *   error handling mechanism.
 *
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
// Callback that is called on a new UI cycle when there is a need to update UI components
function updateNodeSync(vn) {
    // clear the scheduled frame handle so that new update or replacement requests will
    // schedule a new frame.
    if (s_scheduledFrameHandle) {
        cancelAnimationFrame(s_scheduledFrameHandle);
        s_scheduledFrameHandle = 0;
    }
    addNodeToScheduler(vn);
    doMimbleTick();
    // // increment tick number.
    // s_currentTick++;
    // /// #if USE_STATS
    // 	let oldStats = DetailedStats.stats;
    // 	DetailedStats.stats = new DetailedStats( `Mimbl tick ${s_currentTick}: `);
    // 	DetailedStats.stats.start();
    // /// #endif
    // let vns: VN[][] = new Array(1);
    // vns[0] = [vn];
    // s_schedulerState = SchedulerState.Update;
    // performCommitPhase( performRenderPhase( vns));
    // /// #if USE_STATS
    // 	DetailedStats.stats.stop( true);
    // 	DetailedStats.stats = oldStats;
    // /// #endif
    // s_schedulerState = SchedulerState.Idle;
}
exports.updateNodeSync = updateNodeSync;
;
// Schedules an update for the given node.
function requestNodeUpdate(vn) {
    if (!vn.anchorDN)
        console.warn(`Update requested for virtual node '${VN_1.getVNPath(vn).join("->")}' that doesn't have anchor DOM node`);
    addNodeToScheduler(vn);
    // the update is scheduled in the next tick unless the request is made during a
    // "before update" function execution.
    if (s_schedulerState !== SchedulerState.BeforeUpdate)
        requestFrameIfNeeded();
}
exports.requestNodeUpdate = requestNodeUpdate;
// Adds the given node and related information into the internal structures so that it will be
// updated during the next Mimbl tick.
function addNodeToScheduler(vn) {
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
}
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
// Determines whether the call to requestAnimationFrame should be made or the frame has already
// been scheduled.
function requestFrameIfNeeded() {
    if (s_scheduledFrameHandle === 0)
        s_scheduledFrameHandle = requestAnimationFrame(onScheduledFrame);
}
// Callback that is called on a new UI cycle when there is a need to update UI components
function onScheduledFrame() {
    // clear the scheduled frame handle so that new update or replacement requests will
    // schedule a new frame.
    s_scheduledFrameHandle = 0;
    doMimbleTick();
}
// Reconciler main entrance point
function doMimbleTick() {
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
        let statsAlreadyExisted = Stats_1.DetailedStats.stats != null;
        if (!statsAlreadyExisted) {
            Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl tick ${s_currentTick}: `);
            Stats_1.DetailedStats.stats.start();
        }
//////////////////
        // remember the internal set of nodes and re-create it so that it is ready for new
        // update requests. Arrange scheduled nodes by their nesting depths and perform updates.
        s_schedulerState = SchedulerState.Update;
        let vnsScheduledForUpdate = s_vnsScheduledForUpdate;
        s_vnsScheduledForUpdate = new Set();
        performCommitPhase(performRenderPhase(arrangeNodesByDepth(vnsScheduledForUpdate)));
/////////////////////////
        if (!statsAlreadyExisted) {
            Stats_1.DetailedStats.stats.stop(true);
            Stats_1.DetailedStats.stats = null;
        }
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
}
;
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
                disp = { newVN: vn, action: 0 /* Unknown */, oldVN: vn };
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
        let prevVN;
        for (let svn of vn.subNodes) {
            createVirtual(svn, vn);
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
        // indicate that the node was processed in this cycle - this will prevent it from 
        // rendering again in this cycle.
        vn.lastUpdateTick = s_currentTick;
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
    buildSubNodeDispositions(disp);
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
    // perform updates and inserts by either groups or individual nodes.
    if (disp.subNodeGroups) {
        updatePhysicalByGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
        arrangeGroups(disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
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
function arrangeGroups(disps, groups, anchorDN, beforeDN) {
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
                    moveGroup(disps, prevGroup, anchorDN, group.firstDN);
                else
                    moveGroup(disps, group, anchorDN, beforeDN);
            }
            // the group's first DN becomes the new beforeDN. Note that firstDN cannot be null
            // because lastDN is not null
            beforeDN = group.firstDN;
        }
    }
}
// Moves all the nodes in the given group before the given DOM node.
function moveGroup(disps, group, anchorDN, beforeDN) {
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
/**
 * If a node has more than this number of sub-nodes, then we build groups. The idea is that
 * otherwise, the overhead of building groups is not worth it.
 */
const NO_GROUP_THRESHOLD = 8;
/**
 * Compares old and new chains of sub-nodes and determines what nodes should be created, deleted
 * or updated. The result is remembered as an array of VNDisp objects for each sub-node and as
 * array of old sub-nodes that should be deleted. In addition, the new sub-nodes are divided
 * into groups of consecutive nodes that should be updated and of nodes that should be inserted.
 * The groups are built in a way so that if a node should be moved, its entire group is moved.
 */
function buildSubNodeDispositions(disp) {
    // render the new content
    let newChain = ContentFuncs_1.createVNChainFromContent(disp.oldVN.render());
    let newLen = newChain ? newChain.length : 0;
    let oldChain = disp.oldVN.subNodes;
    let oldLen = oldChain ? oldChain.length : 0;
    // if either old or new or both chains are empty, we do special things
    if (newLen === 0 && oldLen === 0) {
        // both chains are empty - do nothing
        return;
    }
    else if (newLen === 0) {
        // new chain is empty - delete all old nodes
        disp.subNodesToRemove = oldChain;
        return;
    }
    else if (oldLen === 0) {
        // old chain is empty - insert all new nodes
        disp.subNodeDisps = newChain.map(newVN => { return { newVN, action: 1 /* Insert */ }; });
        if (newLen > NO_GROUP_THRESHOLD)
            disp.subNodeGroups = [new VNDispGroup(disp, 1 /* Insert */, 0, newLen - 1)];
        return;
    }
    // determine whether recycling of non-matching old keyed sub-nodes by non-matching new
    // keyed sub-nodes is allowed. If update strategy is not defined for the node, the
    // recycling is allowed.
    let allowKeyedNodeRecycling = true;
    let updateStrategy = disp.oldVN ? disp.oldVN.updateStrategy : undefined;
    if (updateStrategy && updateStrategy.allowKeyedNodeRecycling !== undefined)
        allowKeyedNodeRecycling = updateStrategy.allowKeyedNodeRecycling;
    // process the special case with a single sub-node in both old and new chains just
    // to avoid creating temporary structures
    if (newLen === 1 && oldLen === 1) {
        disp.subNodeDisps = [createSubDispForNodes(disp, newChain[0], oldChain[0], allowKeyedNodeRecycling)];
        return;
    }
    // we are here if either old and new chains contain more than one node and we need to
    // reconcile the chains. First go over the old nodes and build a map of keyed ones and a
    // list of non-keyed ones. If there are more than one node with the same key, the first one
    // goes to the map and the rest to the unleyed list.
    let oldKeyedMap = new Map();
    let oldUnkeyedList = [];
    let key;
    for (let oldVN of oldChain) {
        key = oldVN.key;
        if (key != null && !oldKeyedMap.has(key))
            oldKeyedMap.set(key, oldVN);
        else
            oldUnkeyedList.push(oldVN);
    }
    // remeber the length of the unkeyed list;
    let oldUnkeyedListLength = oldUnkeyedList.length;
    // prepare array for VNDisp objects for new nodes
    disp.subNodeDisps = new Array(newLen);
    // loop over new nodes
    let oldUnkeyedListIndex = 0;
    newChain.forEach((newVN, index) => {
        let oldVN = null;
        // try to look up the old node by the new node's key if exists
        key = newVN.key;
        if (key != null) {
            oldVN = oldKeyedMap.get(key);
            // if we find the old node by the key, remove it from the map; after the
            // reconciliation, all old nodes remaining in this map will be marked for removal.
            if (oldVN)
                oldKeyedMap.delete(key);
        }
        // if we have old nodes in the unkeyed list use the next one
        if (!oldVN && oldUnkeyedListIndex != oldUnkeyedListLength)
            oldVN = oldUnkeyedList[oldUnkeyedListIndex++];
        disp.subNodeDisps[index] = createSubDispForNodes(disp, newVN, oldVN, allowKeyedNodeRecycling);
    });
    // old nodes remaning in the keyed map and in the unkeyed list will be removed
    if (oldKeyedMap.size > 0 || oldUnkeyedListIndex < oldUnkeyedListLength) {
        if (!disp.subNodesToRemove)
            disp.subNodesToRemove = [];
        oldKeyedMap.forEach(oldVN => disp.subNodesToRemove.push(oldVN));
        for (let i = oldUnkeyedListIndex; i < oldUnkeyedListLength; i++)
            disp.subNodesToRemove.push(oldUnkeyedList[i]);
    }
    if (newLen > NO_GROUP_THRESHOLD)
        buildSubNodeGroups(disp);
}
function createSubDispForNodes(disp, newVN, oldVN, allowKeyedNodeRecycling) {
    let subDisp = { newVN };
    if (!oldVN)
        subDisp.action = 1 /* Insert */;
    else if (oldVN === newVN ||
        ((allowKeyedNodeRecycling || newVN.key === oldVN.key) && isUpdatePossible(oldVN, newVN))) {
        // old node can be updated with information from the new node
        subDisp.action = 2 /* Update */;
        subDisp.oldVN = oldVN;
    }
    else {
        // old node cannot be updated, so the new node will be inserted and the old node will
        // be removed
        subDisp.action = 1 /* Insert */;
        if (!disp.subNodesToRemove)
            disp.subNodesToRemove = [];
        disp.subNodesToRemove.push(oldVN);
    }
    return subDisp;
}
/**
 * From a flat list of new sub-nodes builds groups of consecutive nodes that should be either
 * updated or inserted.
 */
function buildSubNodeGroups(disp) {
    // we are here only if we have some number of sub-node dispositions
    let count = disp.subNodeDisps.length;
/////////////////
    // this method is not supposed to be called if the number of sub-nodes is less then
    // the pre-determined threshold
    if (count <= NO_GROUP_THRESHOLD || count === 0)
        return;
//////////////
    // create array of groups and create the first group starting from the first node
    let group = new VNDispGroup(disp, disp.subNodeDisps[0].action, 0);
    disp.subNodeGroups = [group];
    // loop over sub-nodes and on each iteration decide whether we need to open a new group
    // or put the current node into the existing group or close the existing group and open
    // a new one.
    let action;
    let subDisp;
    for (let i = 1; i < count; i++) {
        subDisp = disp.subNodeDisps[i];
        action = subDisp.action;
        if (action !== group.action) {
            // close the group with the previous index. Decrement the iterating index so that
            // the next iteration will open a new group. Note that we cannot be here for a node
            // that starts a new group because for such node disp.action === groupAction.
            group.last = i - 1;
            group = new VNDispGroup(disp, action, i);
            disp.subNodeGroups.push(group);
        }
        else if (action === 2 /* Update */) {
            // an "update" node is out-of-order and should close the current group if
            // its next sibling in the new list is different from the next sibling in the old list.
            // The last node will close the last group after the loop.
            if (disp.subNodeDisps[i - 1].oldVN !== subDisp.oldVN.prev) {
                // close the group with the current index.
                group.last = i - 1;
                group = new VNDispGroup(disp, action, i);
                disp.subNodeGroups.push(group);
            }
        }
        // all consecutive "insert" nodes belong to the same group so we just wait for the
        // next node
    }
    // close the last group
    if (group !== undefined)
        group.last = count - 1;
}
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

/***/ "./lib/core/RootUI.js":
/*!****************************!*\
  !*** ./lib/core/RootUI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RootWaitingUI = exports.RootErrorUI = void 0;
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
exports.unmountRoot = exports.mountRoot = exports.unmountRootSync = exports.mountRootSync = exports.RootVN = void 0;
const Reconciler_1 = __webpack_require__(/*! ./Reconciler */ "./lib/core/Reconciler.js");
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
            Reconciler_1.updateNodeSync(this);
        else
            Reconciler_1.requestNodeUpdate(this);
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
        Reconciler_1.requestNodeUpdate(this);
    }
    // Informs that the given node has unsubscribed from a service with the given ID.
    reportError(err, path) {
        this.handleError(err, path);
        Reconciler_1.requestNodeUpdate(this);
    }
    // Removes the fulfilled promise from our internal list and if the list is empty asks to
    // re-render
    onPromiseFulfilled(promise) {
        this.thrownPromises.delete(promise);
        if (this.thrownPromises.size === 0) {
            this.waitingUI = null;
            Reconciler_1.requestNodeUpdate(this);
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

/***/ "./lib/core/StyleScheduler.js":
/*!************************************!*\
  !*** ./lib/core/StyleScheduler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeMimblStyleScheduler = void 0;
const css = __webpack_require__(/*! mimcss */ "mimcss");
const Reconciler_1 = __webpack_require__(/*! ./Reconciler */ "./lib/core/Reconciler.js");
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
        Reconciler_1.scheduleFuncCall(this.onUpdate, false, this);
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
exports.TextVN = void 0;
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
exports.getVNPath = exports.getNextDNUnderSameAnchorDN = exports.getImmediateDNs = exports.getLastDN = exports.getFirstDN = exports.VNUpdateDisp = void 0;
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
exports.VNBase = void 0;
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const Reconciler_1 = __webpack_require__(/*! ./Reconciler */ "./lib/core/Reconciler.js");
const PubSub_1 = __webpack_require__(/*! ./PubSub */ "./lib/core/PubSub.js");
/// #endif
/////////////
let g_nextVNDebugID = 1;
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNBase class is a base class for all types of virtual nodes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNBase {
    constructor() {
/////////////////////
        this.debugID = g_nextVNDebugID++;
//////////////////
    }
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
            Reconciler_1.requestNodeUpdate(this);
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
        Reconciler_1.scheduleFuncCall(func, true, that, this);
    }
    /**
     * Schedules to call the given function before all the scheduled components have been updated.
     * @param func Function to be called.
     * @param that Object to be used as the "this" value when the function is called. This parameter
     *   is not needed if the function is already bound or it is an arrow function.
     */
    scheduleCallAfterUpdate(func, that) {
        Reconciler_1.scheduleFuncCall(func, false, that, this);
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
        return Reconciler_1.wrapCallbackWithVN(callback, that, this);
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

/***/ "./lib/mimblTypes.js":
/*!***************************!*\
  !*** ./lib/mimblTypes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimbl
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./api/mim */ "./lib/api/mim.js"), exports);
__exportStar(__webpack_require__(/*! ./api/HtmlTypes */ "./lib/api/HtmlTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./api/SvgTypes */ "./lib/api/SvgTypes.js"), exports);
__exportStar(__webpack_require__(/*! ./api/LocalStyles */ "./lib/api/LocalStyles.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/EventSlot */ "./lib/utils/EventSlot.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js"), exports);


/***/ }),

/***/ "./lib/utils/ElmAttr.js":
/*!******************************!*\
  !*** ./lib/utils/ElmAttr.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ElmAttr = void 0;
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
    css.setElementStyle(elm, propVal, 1 /* Sync */);
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    let res = css.diffStylesets(oldPropVal, newPropVal);
    // we have to return undefined because null is considered a valid update value
    return res == null ? undefined : res;
}
function updateStyleProp(elm, attrName, updateVal) {
    css.setElementStringStyle(elm, updateVal, 1 /* Sync */);
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
exports.createMultiEventSlot = exports.SimpleEventSlot = exports.EventSlot = void 0;
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
exports.DetailedStats = exports.CategoryStats = exports.StatsAction = exports.StatsCategory = void 0;
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
exports.SvgElms = void 0;
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
exports.computed = exports.trigger = exports.createMutator = exports.createComputedTrigger = exports.exitMutationScope = exports.enterMutationScope = exports.createWatcher = exports.createTrigger = void 0;
/**
 * The TriggerDepth enumeration defines possible ways of how triggers deal with container data;
 * that is, objects, arrays, maps and sets. For triggers with values of non-container types
 * this enumeration is irrelevant.
 */
var TriggerDepth;
(function (TriggerDepth) {
    /**
     * Only changes in the value itself are handled. Actions of adding, removing and modifying
     * items in the container are ignored.
     */
    TriggerDepth[TriggerDepth["Value"] = 0] = "Value";
    /**
     * Changes in the value itself and of the immediate container items are handled. Actions of
     * adding and removing items in the container cause change to be triggerred; however actions
     * of modifying items themselfs are ignored. For triggers with values of non-container types
     * this value is equivalent to Value.
     */
    TriggerDepth[TriggerDepth["Shallow"] = 1] = "Shallow";
    /**
     * Changes in the value itself and of items on all levels are handled. Items added to the
     * container are converted to deep triggers. For triggers with values of non-container types
     * this value is equivalent to Value.
     */
    TriggerDepth[TriggerDepth["Deep"] = 100] = "Deep";
})(TriggerDepth || (TriggerDepth = {}));
/**
 * Creates a trigger object of the given depth with the given initial value.
 * @param v
 */
function createTrigger(depth, v) {
    return new Trigger(depth < 0 ? 0 : depth, v);
}
exports.createTrigger = createTrigger;
/**
 * The Trigger class represents an object that keeps a value and notifies all attached watchers
 * when this value changes.
 */
class Trigger {
    constructor(depth, v) {
        // Set of watchers watching over this trigger's value. This member serves as a storage instead
        // of having the manager to map of triggers to the set of watchers.
        this.watchers = new Set();
        this.depth = depth;
        this.v = triggerrize(v, this, depth);
    }
    // Retrieves the current value
    get() {
        this.notifyRead();
        return this.v;
    }
    // Sets a new value
    set(v) {
        // nothing to do if the value is the same
        if (v === this.v)
            return;
        this.v = triggerrize(v, this, this.depth);
        this.notifyChanged();
    }
    // Notifies the manager that the trigger's value has been read
    notifyRead() {
        g_manager.notifyTriggerRead(this);
    }
    // Notifies the manager that the trigger's value has been changed. We only notify the manager
    // if there is at least one watcher attached to our trigger;
    notifyChanged() {
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
        super(TriggerDepth.Value);
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
// Triggerizing containers
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Depending on the given trigger depth and on the value type, either returns the same value if
 * it is a container (object, array, map or set), returns a proxy to the value that knows to
 * notify read and change when its methods and properties are invoked.
 * @param v Value to convert if necessary
 * @param trigger Trigger that will be notified when read or change events occur in the converted
 * values
 * @param depth The depth on the level (starting from the trigger)that called this function.
 * If this parameter is 0, no conversion occurs and the value is returned as is. When this function
 * is called from the trigger, this parameter can be undefined: in this case, we will assign the
 * depth depending on the type of the value. Arrays, maps and sets get depths of Shallow(1),
 * meaning that operations that add or remove items will trigger events, but modifications to the
 * items will not. Objects get the depth of Deep (1000), which essentially means that any changes
 * to the object properties on any level will trigger events.
 */
function triggerrize(v, trigger, depth) {
    if (!v || depth === 0)
        return v;
    else if (Array.isArray(v))
        return new Proxy(v, new NonSlotContainerHandler(trigger, (depth ? depth : TriggerDepth.Shallow) - 1));
    else if (v instanceof Map)
        return new Proxy(v, new MapHandler(trigger, (depth ? depth : TriggerDepth.Shallow) - 1));
    else if (v instanceof Set)
        return new Proxy(v, new SetHandler(trigger, (depth ? depth : TriggerDepth.Shallow) - 1));
    else if (v.constructor === Object)
        return new Proxy(v, new NonSlotContainerHandler(trigger, (depth ? depth : TriggerDepth.Deep) - 1));
    else
        return v;
}
/**
 * Base class for Array and plain object handlers.
 */
class NonSlotContainerHandler {
    constructor(trigger, depth) {
        this.trigger = trigger;
        this.depth = depth;
    }
    get(target, prop, receiver) {
        this.trigger.notifyRead();
        return Reflect.get(target, prop, receiver);
    }
    set(target, prop, value, receiver) {
        this.trigger.notifyChanged();
        return Reflect.set(target, prop, triggerrize(value, this.trigger, this.depth), receiver);
    }
    deleteProperty(target, prop) {
        this.trigger.notifyChanged();
        return Reflect.deleteProperty(target, prop);
    }
    defineProperty(target, prop, attrs) {
        this.trigger.notifyChanged();
        return Reflect.defineProperty(target, prop, attrs);
    }
    has(target, prop) {
        this.trigger.notifyRead();
        return Reflect.has(target, prop);
    }
    getPrototypeOf(target) {
        this.trigger.notifyRead();
        return Reflect.getPrototypeOf(target);
    }
    isExtensible(target) {
        this.trigger.notifyRead();
        return Reflect.isExtensible(target);
    }
    getOwnPropertyDescriptor(target, p) {
        this.trigger.notifyRead();
        return Reflect.getOwnPropertyDescriptor(target, p);
    }
    enumerate(target) {
        this.trigger.notifyRead();
        return Array.from(Reflect.enumerate(target));
    }
    ownKeys(target) {
        this.trigger.notifyRead();
        return Reflect.ownKeys(target);
    }
}
// /**
//  * Handler for arrays.
//  */
// class ArrayHandler extends NonSlotContainerHandler
// {
//     get( target: Array<any>, prop: PropertyKey, receiver: any): any
//     {
//         this.trigger.notifyRead();
//         return Reflect.get( target, prop, receiver);
//     }
// }
// /**
//  * Handler for on plain objects.
//  */
// class ObjectHandler extends NonSlotContainerHandler
// {
//     get( target: any, prop: PropertyKey, receiver: any): any
//     {
//         return Reflect.get( target, prop, receiver);
//     }
// }
/**
 * Base class for shallow Map/Set handlers. Methods whose names were supplied in the constructor,
 * notify change; all other methods notify read.
 *
 * For Map and Set in order to be proxied, the methods returned from get() must be
 * bound to the target. See https://javascript.info/proxy#built-in-objects-internal-slots.
 */
class SlotContainerHandler {
    constructor(trigger, mutatorMethodNames, depth) {
        // This map keeps already wrapped methods so that we don't do binding more than once. 
        this.wrappedMethods = new Map();
        this.trigger = trigger;
        this.mutatorMethodNames = mutatorMethodNames;
        this.depth = depth;
    }
    // Retrieve container methods and properties. We always notify read and we wrap methods in
    // functions that when called will notify either read or change depending on whether the
    // method is a mutator.
    get(target, prop, receiver) {
        this.trigger.notifyRead();
        // in this context "this" is the handler; however, when the methods we return are called
        // the "this" will be the Proxy object. Therefore, we want these methods to capture and
        // use the handler object.
        let handler = this;
        // check whether this method is already in our internal map
        let method = this.wrappedMethods.get(prop);
        if (!method) {
            // get the value from the target
            let propVal = target[prop];
            if (typeof propVal !== "function")
                return propVal;
            // bind the original method to the target object
            let orgBoundMethod = propVal.bind(target);
            if (this.mutatorMethodNames.has(prop)) {
                // for mutator methods we create and return a function that, when called, invokes the
                // handler specific functionality, which knows about the structure of the arguments
                // and will create proxies for the appropriate objects if needed. This functionality
                // will also indicate whether an actual change occurs so that we can notify about it.
                method = function () {
                    let ret = handler.callOrgMutatorMethod(target, prop, orgBoundMethod, ...arguments);
                    if (ret[1])
                        handler.trigger.notifyChanged();
                    return ret[0];
                    // return orgBoundMethod( ...arguments);
                };
            }
            else {
                // For non-mutator methods, we notify the read and invoke the original method.
                method = function () {
                    handler.trigger.notifyRead();
                    return orgBoundMethod(...arguments);
                };
            }
            this.wrappedMethods.set(prop, method);
        }
        return method;
    }
    /**
     * Method that must be overridden in the derived classes and which is responsible for calling
     * a muutator method with the given name.
     * @param name
     * @param orgMethod
     * @param args Two element tuple where the first element is the return value and the second
     * element is a flag indicating whether the container has changed.
     */
    callOrgMutatorMethod(target, name, orgMethod, ...args) {
        return [undefined, false];
    }
}
/**
 * Handler for maps.
 */
class MapHandler extends SlotContainerHandler {
    constructor(trigger, depth) {
        super(trigger, MapHandler.mutatorMethodNames, depth);
    }
    /**
     * Implements map-specific mutator methods.
     * @param name
     * @param orgMethod
     * @param args Two element tuple where the first element is the return value and the second
     * element is a flag indicating whether the container has changed.
     */
    callOrgMutatorMethod(target, name, orgMethod, ...args) {
        if (name === "clear") {
            let isChanged = target.size > 0;
            orgMethod();
            return [undefined, isChanged];
        }
        else if (name === "set")
            return [orgMethod(args[0], triggerrize(args[1], this.trigger, this.depth)), true];
        else if (name === "delete") {
            let deleted = orgMethod(args[0]);
            return [deleted, deleted];
        }
    }
}
MapHandler.mutatorMethodNames = new Set(["clear", "delete", "set"]);
/**
 * Handler for sets.
 */
class SetHandler extends SlotContainerHandler {
    constructor(trigger, depth) {
        super(trigger, SetHandler.mutatorMethodNames, depth);
    }
    /**
     * Implements set-specific mutator methods.
     * @param name
     * @param orgMethod
     * @param args Two element tuple where the first element is the return value and the second
     * element is a flag indicating whether the container has changed.
     */
    callOrgMutatorMethod(target, name, orgMethod, ...args) {
        if (name === "add")
            return [orgMethod(triggerrize(args[0], this.trigger, this.depth)), true];
        else if (name === "clear") {
            let isChanged = target.size > 0;
            orgMethod();
            return [undefined, isChanged];
        }
        else if (name === "delete") {
            let deleted = orgMethod(args[0]);
            return [deleted, deleted];
        }
    }
}
SetHandler.mutatorMethodNames = new Set(["add", "delete", "clear"]);
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Decorators
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Decorator function for defining properties so that changing their value will any watcher
 * objects attached to them to respond.
 * The form `@trigger` designates a default trigger decorator, whose depth will be assigned
 * depending on the value type: Shallow for arrays, maps and sets and Deep for objects.
 * The form `@trigger(n)` designates a trigger decorator factory with the specified depth.
 */
function trigger(targetOrDepth, name) {
    if (typeof targetOrDepth === "number") {
        // If the first parameter is a number that it is an explicitly specified depth using
        // decorator factory.
        return triggerDecoratorHelper.bind(undefined, targetOrDepth);
    }
    else {
        // undefined depth means that that the actual depth will be assigned dependig on the
        // value of the trigger: Shallow for maps, sets and arrays and Deep for objects.
        return triggerDecoratorHelper(undefined, targetOrDepth, name);
    }
}
exports.trigger = trigger;
/**
 * Helper function for defining `@trigger` decorators.
 */
function triggerDecoratorHelper(depth, target, name) {
    let sym = Symbol(name + "_trigger");
    Object.defineProperty(target, name, {
        get() {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createTrigger(depth);
            return triggerObj.get();
        },
        set(val) {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createTrigger(depth, val);
            else
                triggerObj.set(val);
        },
    });
}
/**
 * Decorator function for defining "get" properties or functions retuning a value so that this
 * value will automatically recalculated if any triggers on which this value depends have their
 * values changed. WHen this happens, the watcher objects attached to this computed value will
 * be notified to respond.
 */
function computed(target, name, propDescr) {
    let sym = Symbol(name);
    // propDesc.value is undefined for accessors and defined for functions
    if (!propDescr.value) {
        if (!propDescr.get)
            throw new Error("@computed property requires get() accessor");
        let orgGet = propDescr.get;
        propDescr.get = function () {
            let triggerObj = this[sym];
            if (!triggerObj)
                this[sym] = triggerObj = createComputedTrigger(orgGet, this);
            return triggerObj.get();
        };
        if (propDescr.set) {
            let orgSet = propDescr.set;
            propDescr.set = function (v) {
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
        let orgFunc = propDescr.value;
        propDescr.value = function (v) {
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
exports.mergeSlicesTo = exports.mergeSlices = exports.camelToDash = exports.dashToCamel = exports.parseStyleString = exports.mergeStylesTo = exports.mergeStyles = exports.mergeClasses = exports.hashString = exports.hashObject = exports.deepCompare = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Qcm9taXNlUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1JlY29uY2lsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290VUkudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3R5bGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5cGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRXZlbnRTbG90LnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N0YXRzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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LEVBQUUsQ0FBQztZQUV6QixRQUFRLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBRSxRQUFRLENBQUMsU0FBbUIsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEY7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQ2Y7WUFDQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssU0FBUztnQkFDL0IsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFckIsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSztnQkFDL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFDakI7WUFDQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUztnQkFDakMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUVsQztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3JDO29CQUNDLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFwREQsc0NBb0RDOzs7Ozs7Ozs7Ozs7QUMxUkQsb0QiLCJmaWxlIjoibWltYmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWNzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1jc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWJsVHlwZXMuanNcIik7XG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1N0eWxlc2V0LCBnZXRTdHlsZVByb3BWYWx1ZSwgRXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vYXBpL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBMb2NhbFN0eWxlczogSUxvY2FsU3R5bGVTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUxvY2FsU3R5bGVTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSBjb21wb25lbnRzIHRoYXRcclxuLy8gZGVmaW5lIHRoZWlyIGxvY2FsIENTUyBzdHlsZXM7IHRoYXQgaXMsIGNvbXBvbmVudHMgZGVyaXZpbmcgZnJvbSB0aGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzXHJcbi8vIGNsYXNzLiBUaGUgaW50ZXJmYWNlIGFsbG93cyByZXRyaWV2aW5nIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgZGVjb3JhdGVkIHdpdGggdGhlIHVuaXF1ZVxyXG4vLyBJRCwgd2hpY2ggYXZvaWRzIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGJldHdlZW4gY29tcG9uZW50cyBvZiB0aGUgc2FtZSBvciBkaWZmZXJlbnQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFN0eWxlU2VydmljZVxyXG57XHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdGRlY29yYXRlTmFtZSggbmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cyB0aGF0IGRlZmluZSBsb2NhbCBDU1Mgc3R5bGVzLlxyXG4vLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIG1vdW50ZWQgaXQgY3JlYXRlcyBhIG5ldyA8c3R5bGU+IGVsZW1lbnQgKHdpdGhpbiB0aGUgPGhlYWQ+IGVsZW1lbnQpLlxyXG4vLyBBbGwgY2xhc3MgbmFtZXMgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgd2l0aGluIHRoaXMgc3R5bGUgd2lsbCBoYXZlIGEgdW5pcXVlIElEIGFkZGVkIHRvXHJcbi8vIHRoZW0gaW4gb3JkZXIgdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgbmFtZXMgYW1vbmcgb3RoZXIgY29tcG9uZW50cyAob2YgdGhlIHNhbWUgb3Igb2YgZGlmZmVyZW50XHJcbi8vIHR5cGUuIFRoaXMgY2xhc3MgYWxzbyBwdWJsaXNoZXMgYSBzZXJ2aWNlIGltcGxlbWVudGluZyB0aGUgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcblx0XHRcdFx0ZXh0ZW5kcyBtaW0uQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcblx0XHRcdFx0aW1wbGVtZW50cyBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVFByb3BzID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMubV91bmlxdWVJRCA9IChNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkpLnRvU3RyaW5nKCk7XHJcblx0XHR0aGlzLnJ1bGVzID0gbmV3IE1hcDxzdHJpbmcsUnVsZUluZm8+KCk7XHJcblx0XHR0aGlzLnJ1bGVOYW1lcyA9IFtdO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgaW4gdGhlIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHR0aGlzLnN0eWxlRWxtLmlkID0gdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5zdHlsZUVsbSk7XHJcblxyXG5cdFx0Ly8vLyBXZWJLaXQgaGFjayA6KFxyXG5cdFx0Ly90aGlzLnN0eWxlRWxtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gSUxvY2FsU3R5bGVTZXJ2aWNlIGltcGxlbWVudGF0aW9uLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSB1bmlxdWUgSUQgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHRvIG1ha2UgdGhlbSB1bmlxdWUuXHJcblx0cHVibGljIGdldCB1bmlxdWVJRCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX3VuaXF1ZUlEOyB9XHJcblxyXG5cdC8vIFJldHJ1cm5zIENTUyBjbGFzcyBvciB2YXJpYWJsZSBuYW1lIGRlY29yYXRlZCB3aXRoIGEgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lICsgdGhpcy5tX3VuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBQdWJsaWMgaW50ZXJmYWNlLlxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGNyZWF0ZVN0eWxlUnVsZSggbmFtZTogc3RyaW5nLCBzZWxlY3Rvcj86IHN0cmluZywgcHJvcHM/OiBTdHlsZXNldCk6IElNQ3NzU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIGR1bW15IHN0eWxlIHJ1bGVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMuY3JlYXRlRHVtbXlSdWxlKCBuYW1lLCBcImR1bW15IHt9XCIpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTU3R5bGVSdWxlID0gaW5mby5jc3NvbVJ1bGUgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBzdHlsZSBydWxlIG9iamVjdFxyXG5cdFx0bGV0IG1jc3NTdHlsZVJ1bGU6IE1Dc3NTdHlsZVJ1bGUgPSBuZXcgTUNzc1N0eWxlUnVsZSggdGhpcy51bmlxdWVJRCwgY3Nzb21SdWxlKTtcclxuXHRcdGlmIChzZWxlY3RvcilcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRTZWxlY3Rvciggc2VsZWN0b3IpO1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHRtY3NzU3R5bGVSdWxlLnNldFByb3BlcnRpZXMoIHByb3BzKTtcclxuXHJcblx0XHRpbmZvLm1jc3NSdWxlID0gbWNzc1N0eWxlUnVsZTtcclxuXHRcdHJldHVybiBtY3NzU3R5bGVSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgcnVsZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBnZXRSdWxlKCBuYW1lOiBzdHJpbmcpOiBJTUNzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLnJ1bGVzLmdldCggbmFtZSk7XHJcblx0XHRyZXR1cm4gaW5mbyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogaW5mby5tY3NzUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgcmVtb3ZlUnVsZSggbmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiLCB0aGlzKTtcclxuXHR9XHRcclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJMb2NhbFN0eWxlc1wiKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHN0eWxlIHJ1bGUuXHJcblx0cHJpdmF0ZSBjcmVhdGVEdW1teVJ1bGUoIG5hbWU6IHN0cmluZywgcnVsZVRleHQ6IHN0cmluZyk6IFJ1bGVJbmZvXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcnVsZSB3aXRoIHRoaXMgbmFtZVxyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0aWYgKGluZm8gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yZW1vdmVSdWxlKCBuYW1lKTtcclxuXHJcblx0XHQvLyB0aGUgbmV3IHJ1bGUgd2lsbCBiZWNvbWVzIHRoZSBsYXN0IGluIHRoZSBhcnJheSBvZiBydWxlc1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5ydWxlTmFtZXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgc2hlZXQ6IENTU1N0eWxlU2hlZXQgPSB0aGlzLnN0eWxlRWxtLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcblx0XHRzaGVldC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgaW5kZXgpO1xyXG5cdFx0bGV0IGNzc29tUnVsZTogQ1NTUnVsZSA9IHNoZWV0LnJ1bGVzW2luZGV4XTtcclxuXHJcblx0XHQvLyBhZGQgdGhlIHJ1bGUgdG8gb3VyIGludGVybmFsIHN0cnVjdHVyZXNcclxuXHRcdHRoaXMucnVsZU5hbWVzLnB1c2goIG5hbWUpO1xyXG5cdFx0aW5mbyA9IHsgbWNzc1J1bGU6IG51bGwsIGNzc29tUnVsZSwgaW5kZXggfTtcclxuXHRcdHRoaXMucnVsZXMuc2V0KCBuYW1lLCBpbmZvKTtcclxuXHJcblx0XHRyZXR1cm4gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5pcXVlIElEIHRoYXQgaXMgdXNlZCB0byBkZWNvcmF0ZSBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlZmluZWQgYnkgdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIG1fdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0LiBJcyBkZWZpbmVkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gTWFwIG9mIHJ1bGVzIGJ5IHRoZWlyIG5hbWVzLlxyXG5cdHByaXZhdGUgcnVsZXM6IE1hcDxzdHJpbmcsUnVsZUluZm8+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBydWxlIG5hbWVzLiBUaGlzIGlzIG5lZWRlZCB0byBhZGp1c3QgaW5kZXhlcyBvZiBydWxlcyBhZnRlciBhIHJ1bGUgaXMgcmVtb3ZlZC5cclxuXHRwcml2YXRlIHJ1bGVOYW1lczogc3RyaW5nW107XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIZWxwZXIgdHlwZSB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgQ1NTIHJ1bGUgYWRkZWQgdG8gQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBSdWxlSW5mbyA9IHsgbWNzc1J1bGU6IElNQ3NzUnVsZSwgY3Nzb21SdWxlOiBDU1NSdWxlLCBpbmRleDogbnVtYmVyIH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSU1Dc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzUnVsZVxyXG57XHJcblx0Ly8gVW5pcXVlIElEIHVzZWQgaW4gY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzXHJcblx0cmVhZG9ubHkgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHJlYWRvbmx5IGNzc29tUnVsZTogQ1NTUnVsZTtcclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0ZGVjb3JhdGUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcblx0Ly8gUmVwbGFjZXMgdGhlIG1hcmtlciBcIigqKVwiIGluIHRoZSBnaXZlbiBuYW1lIHdpdGggdGhlIHVuaXF1ZSBJRFxyXG5cdHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NSdWxlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3Igb2JqZWN0cyByZXByZXNlbnRlZCBkaWZmZXJlbnQgdHlwZXMgb2YgQ1NTIHJ1bGVzIHRoYXRcclxuLy8gYXJlIGNyZWF0ZWQgYnkgdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjb21wb25lbnQuIFRoaXMgb2JqZWN0IHNpbXBseSBrZWVwcyB0aGUgdW5pcXVlXHJcbi8vIElEIHRoYXQgc2hvdWxkIGJlIHVzZWQgYnkgZGVyaXZlZCBjbGFzc2VzIHdoZW4gY3JlYXRpbmcgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIHNvIHRoYXQgdGhleVxyXG4vLyBhcmUgZ2xvYmFsbHkgdW5pcXVlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1J1bGVCYXNlPFQgZXh0ZW5kcyBDU1NSdWxlPiBpbXBsZW1lbnRzIElNQ3NzUnVsZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHVuaXF1ZUlEOiBzdHJpbmcsIGNzc29tUnVsZTogVClcclxuXHR7XHJcblx0XHR0aGlzLnVuaXF1ZUlEID0gdW5pcXVlSUQ7XHJcblx0XHR0aGlzLmNzc29tUnVsZSA9IGNzc29tUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXBwZW5kcyB1bmlxdWUgSUQgdG8gdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMudW5pcXVlSUQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRwdWJsaWMgcmVwbGFjZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUucmVwbGFjZSggXCIoKilcIiwgdGhpcy51bmlxdWVJRCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHB1YmxpYyB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NPTSBydWxlXHJcblx0cHVibGljIGNzc29tUnVsZTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0U2VsZWN0b3IoIHNlbGVjdG9yOiBzdHJpbmcpO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIFNldHMgc2V2ZXJhbCBzdHlsZSBwcm9wZXJ0aWVzLiBCb3RoIHByb3BlcnR5IG5hbWVzIGFuZCBwcm9wZXJ0eSB2YWx1ZXMgY2FuIHVzZSB0aGVcclxuXHQvLyAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRzZXRQcm9wZXJ0aWVzKCBwcm9wczogU3R5bGVzZXQpOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjb250YWlucyBhIHNlbGVjdG9yIGFuZCBhIHNldCBvZlxyXG4vLyBzdHlsZSBwcm9wZXJ0eSBuYW1lLXZhbHVlIHBhaXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTUNzc1N0eWxlUnVsZSBleHRlbmRzIE1Dc3NSdWxlQmFzZTxDU1NTdHlsZVJ1bGU+IGltcGxlbWVudHMgSU1Dc3NTdHlsZVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggdW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIHJ1bGUgc2VsZWN0b3IuIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW4gdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWRcclxuXHQvLyB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnNlbGVjdG9yVGV4dCA9IHRoaXMucmVwbGFjZSggc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBCb3RoIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpLCB0aGlzLnJlcGxhY2UoIHByb3BWYWwpLFxyXG5cdFx0XHRcdFx0XHRpbXBvcnRhbnQ/IFwiaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHNldFByb3BlcnRpZXMoIHByb3BzOiBTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gZ2V0U3R5bGVQcm9wVmFsdWUoIHByb3BOYW1lIGFzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQsIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0XHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlW3RoaXMucmVwbGFjZSggcHJvcE5hbWUpXSA9IHRoaXMucmVwbGFjZSggcHJvcFZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgY3NzIGZyb20gXCJtaW1jc3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3RydWN0b3Igc2lnbmF0dXJlIGZvciBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdG9mIHRoaXMgdHlwZS4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IG9mIHRoaXMgdHlwZS4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENsYXNzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHRuZXcoIHByb3BzPzogVFByb3BzKTogSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHRyZW5kZXIoKTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFsbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gRm9yIG1hbmFnZWQgY29tcG9uZW50cywgdGhlIHByb3BlcnRpZXNcclxuXHQgKiBjYW4gYWxzbyBiZSBzZXQgKGNoYW5nZWQpIHdoZW4gdGhlIGNvbXBvbmVudCdzIHBhcmVudCBpcyB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wb25lbnRzIGNhbiBkZWZpbmUgZGlzcGxheSBuYW1lIGZvciB0cmFjaW5nIHB1cnBvc2VzOyBpZiB0aGV5IGRvbid0IHRoZSBkZWZhdWx0IG5hbWVcclxuXHQgKiB1c2VkIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBjb25zdHJ1Y3RvciBuYW1lLiBOb3RlIHRoYXQgdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBiZWZvcmVcclxuXHQgKiB0aGUgdmlydHVhbCBub2RlIGlzIGF0dGFjaGVkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMsIGdldHMgb3IgY2xlYXJzIHRoZSB2aXJ0dWFsIG5vZGUgb2JqZWN0IG9mIHRoZSBjb21wb25lbnQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKi9cclxuXHR2bj86IElWTm9kZTtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlc1xyXG5cdCAqIGZyb20gaXQuXHJcblx0ICovXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBjb21wb25lbnQgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRoZSBjb250ZW50IG9mIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUPiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzLl9yID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIGNoYW5nZXMuICovXHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZW1vdmVzIGEgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgd2l0aCBhZGRMaXN0ZW5lci4gKi9cclxuXHRwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBnZXQgcigpOiBUIHsgcmV0dXJuIHRoaXMuX3I7IH1cclxuXHJcblx0LyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBzZXQgciggbmV3UmVmOiBUKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9yICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3IgPSBuZXdSZWY7XHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmZpcmUoIG5ld1JlZik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogQ2xlYXJzIHRoZSByZWZlcmVuY2UgdmFsdWUgYW5kIGFsc28gY2xlYXJzIGFsbCBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuX3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5jbGVhcigpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGVcclxuLy8gLy8gUmVmPD4gaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbi8vIC8vXHJcbi8vIC8vXHRjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbi8vIC8vXHR7XHJcbi8vIC8vXHRcdEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAvL1x0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbi8vIC8vXHR9XHJcbi8vIC8vXHJcbi8vIC8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBmaXJzdCBhY2Nlc3NlZC4gVGhlXHJcbi8vIC8vIGFjdHVhbCBvYmplY3Qgd2lsbCBiZSBhIFByb3h5IHRvIFJlZjw+IG9mIHRoZSBnaXZlbiB0eXBlIChIVE1MRGl2RWxlbWVudCBpbiB0aGlzIGNhc2UpLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0LCBuYW1lKVxyXG4vLyB7XHJcbi8vIFx0ZnVuY3Rpb24gcmVmR2V0KCBvYmosIGtleSlcclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnJba2V5XTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIHJlZlNldCggb2JqLCBrZXksIHZhbCwgcmVjZWl2ZXIpOiBib29sZWFuXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdG9iai5yID0gdmFsO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRvYmoucltrZXldID0gdmFsO1xyXG5cclxuLy8gXHRcdHJldHVybiB0cnVlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gZW5zdXJlUHJveHkoIHRoaXNPYmo6IGFueSwgYXR0ck5hbWU6IHN0cmluZyk6IGFueVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBwcm94eSA9IHRoaXNPYmpbYXR0ck5hbWVdO1xyXG4vLyBcdFx0aWYgKCFwcm94eSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0cHJveHkgPSBuZXcgUHJveHkoIG5ldyBSZWY8YW55PigpLCB7IGdldDogcmVmR2V0LCBzZXQ6IHJlZlNldCB9KTtcclxuLy8gXHRcdFx0dGhpc09ialthdHRyTmFtZV0gPSBwcm94eTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJldHVybiBwcm94eTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCBhdHRyTmFtZSA9IFwiX3JlZl9cIiArIG5hbWU7XHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHNldCggdmFsKSB7IGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSkuciA9IHZhbDsgfSxcclxuLy8gXHRcdFx0Z2V0KCkgeyByZXR1cm4gZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKTsgfVxyXG4vLyBcdFx0fVxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGxldCByZWZPYmogPSByZWYgYXMgUmVmPFQ+O1xyXG5cdFx0aWYgKG9ubHlJZiA9PT0gdW5kZWZpbmVkIHx8IHJlZk9iai5yID09PSBvbmx5SWYpXHJcblx0XHRcdHJlZk9iai5yID0gdmFsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHQocmVmIGFzIFJlZkZ1bmM8VD4pKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIERlZmluZXMgdHlwZXMgb2YgdmlydHVhbCBET00gbm9kZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5UeXBlXHJcbntcclxuXHQvKiogVG9wLWxldmVsIG5vZGUgKi9cclxuXHRSb290LFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXcgKi9cclxuXHRJbmRlcGVuZGVudENvbXAsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWCAqL1xyXG5cdE1hbmFnZWRDb21wLFxyXG5cclxuXHQvKiogU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpICovXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8qKiBET00gZWxlbWVudCAoSFRNTCBvciBTVkcpIGxhaWQgb3V0IHVzaW5nIEpTWC4gKi9cclxuXHRFbG0sXHJcblxyXG5cdC8qKiBUZXh0IG5vZGUgKi9cclxuXHRUZXh0LFxyXG5cclxuXHQvKiogV3JhcHBlciBhcm91bmQgYSBmdW5jdGlvbi9tZXRob2QgdGhhdCBjYW4gYmUgdXBkYXRlZCBpbmRlcGVuZGVudGx5LiAqL1xyXG5cdEZ1bmNQcm94eSxcclxuXHJcblx0LyoqIE5vZGUgdGhhdCB3YWl0cyBmb3IgYSBwcm9taXNlIHRvIGJlIHNldHRsZWQgYW5kIHRoZW4gZGlzcGxheXMgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGNvbnRlbnQuICovXHJcblx0UHJvbWlzZVByb3h5LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlLiBUaHJvdWdoIHRoaXMgaW50ZXJmYWNlLCBjYWxsZXJzIGNhbiBwZXJmb3JtXHJcbiAqIG1vc3QgY29tbW9uIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IHR5cGUgb2YgdmlydHVhbCBub2RlLiBFYWNoIHR5cGUgb2YgdmlydHVhbCBub2RlXHJcbiAqIGFsc28gaW1wbGVtZW50cyBhIG1vcmUgc3BlY2lmaWMgaW50ZXJmYWNlIHRocm91Z2ggd2hpY2ggdGhlIHNwZWNpZmljIGNhcGFiaWxpdGllcyBvZiB0aGUgbm9kZVxyXG4gKiB0eXBlIGFyZSBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgbm9kZSB0eXBlLiAqL1xyXG5cdHJlYWRvbmx5IHR5cGU6IFZOVHlwZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHBhcmVudD86IElWTm9kZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHJlYWRvbmx5IGNyZWF0b3I/OiBJQ29tcG9uZW50O1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgbmV4dD86IElWTm9kZTtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgcHJldj86IElWTm9kZTtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzPzogSVZOb2RlW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgbm9kZSdzIGRpc3BsYXkgbmFtZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3IgcmVwb3J0aW5nLiBUaGUgbmFtZVxyXG5cdCAqIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSwgaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiXHJcblx0ICogcHJvcGVydHkgb2YgYW4gZWxlbWVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cmVhZG9ubHkgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQgKiBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuICovXHJcblx0dW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU3Vic2NyaWJlcyB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQgKiBieSB0aGlzIG9yIG9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0O1xyXG5cdCAqIG90aGVyd2lzZSwgdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpblxyXG5cdCAqIHVuZGVmaW5lZC4gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSB0aGlzIG9yIGEgY2xvc2VzdFxyXG5cdCAqIGFuY2VzdG9yIGNvbXBvbmVudCBpcyBjaGFuZ2VkLHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIFRoZSB1c2VTZWxmIG9wdGlvbmFsIHBhcmFtZXRlciBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBjYW4gc3Vic2NyaWJlIHRvIHRoZVxyXG5cdCAqIHNlcnZpY2UgcHVibGlzaGVkIGJ5IGl0c2VsZi4gVGhlIGRlZmF1bHQgaXMgZmFsc2UuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSByZWYgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdHN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgcmVmOiBSZWZQcm9wVHlwZTxJU2VydmljZURlZmluaXRpb25zW0tdPixcclxuXHRcdFx0XHRcdGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlXHJcblx0ICogd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKi9cclxuXHR1bnN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdCAqIGNvbXBvbmVudCBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQgKiB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdGdldFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLFxyXG5cdFx0XHRcdFx0dXNlU2VsZj86IGJvb2xlYW4pOiBJU2VydmljZURlZmluaXRpb25zW0tdO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWFuYWdlZENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWFuYWdlZENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbmRlcGVuZGVudENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2xpY2UgdHlwZSBkZWZpbmVzIGFuIG9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpYmluZ1xyXG4gKiBwYXJhbWV0ZXJzIGZvciByZW5kZXJpbmcgYW4gZWxlbWVudC4gVGhleSBpbmNsdWRlOiBDbGFzcywgU3R5bGUsIFByb3BlcnRpZXMsIENvbnRlbnQuIFRoaXNcclxuICogc3RydWN0dXJlIGlzIGludGVuZGVkIHRvIGJlIHBhc3NlZCBlaXRoZXIgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIHZpYSB0aGUgcHJvdGVjdGVkIG1ldGhvZHMgb2ZcclxuICogZGVyaXZlZCBjbGFzc2VzLCBzbyB0aGF0IHRoZXkgY2FuIGNvbnRyb2wgcGFyYW1ldGVycyBvZiBlbGVtZW50cyByZW5kZXJlZCBieSB0aGUgdXBwZXIgY2xhc3Nlcy5cclxuICogVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIHN0cnVjdHVyZSBpcyB0byBjb21iaW5lIHBhcmFtZXRlcnMgZGVmaW5pbmcgYW4gZWxlbWVudCBpbnRvIGEgc2luZ2xlXHJcbiAqIG9iamVjdCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHByb3BlcnRpZXMgY2FsbGVycyBvZiBjbGFzc2VzIHNob3VsZCBkZWFsIHdpdGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZSA9XHJcbntcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBjc3MuU3R5bGVzZXQ7XHJcblx0cHJvcHM/OiBvYmplY3RcclxuXHRjb250ZW50PzogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBET00gZXZlbnRzIG9mIHR5cGUgVC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IChlOiBUKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0XTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlLCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZCBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gKiBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3QsIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUPiB8XHJcblx0XHRcdFx0RXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VD47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgdGhlIGNsYXNzIHByb3BlcnR5IG9mIEhUTUwgZWxlbWVudHNcclxuICovXHRcdFx0XHRcclxuZXhwb3J0IHR5cGUgQ2xhc3NQcm9wVHlwZSA9IHN0cmluZyB8IGNzcy5JQ2xhc3NSdWxlIHwgY3NzLklDbGFzc05hbWVSdWxlIHwgKHN0cmluZyB8IGNzcy5JQ2xhc3NSdWxlIHwgY3NzLklDbGFzc05hbWVSdWxlKVtdO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBpZCBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIElEUHJvcFR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBjc3MuSUlEUnVsZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIHByb3BlcnR5IHR5cGVzIHVzZWQgYnkgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGNvbG9yIHZhbHVlcyBmb3IgZGlmZmVyZW50IHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgZWxlbWVudCBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Ly8gc3RhbmRhcmQgSFRNTCBhbmQgU1ZHIGVsZW1lbnQgcHJvcGVydGllc1xyXG5cdGNsYXNzPzogQ2xhc3NQcm9wVHlwZTtcclxuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xyXG5cdGRyb3B6b25lID86IFwiY29weVwiIHwgXCJtb3ZlXCIgfCBcImxpbmtcIjtcclxuXHRpZD86IHN0cmluZyB8IG51bWJlciB8IGNzcy5JSURSdWxlO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IGNzcy5TdHlsZXNldDtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5vZGVbXSB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9uIG9mIG1pbS5qc3ggZnVuY3Rpb24gLSBKU1ggRmFjdG9yeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtjcmVhdGVOb2Rlc0Zyb21KU1h9IGZyb20gXCIuLi9jb3JlL0NvbnRlbnRGdW5jc1wiXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogYGBganNvblxyXG4gKiBcImNvbXBpbGVyT3B0aW9uc1wiOlxyXG4gKiB7XHJcbiAqICAgICBcImpzeFwiOiBcInJlYWN0XCIsXHJcbiAqICAgICBcImpzeEZhY3RvcnlcIjogXCJtaW0uanN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlIGV4cG9ydGVkIGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtFbG1BdHRyLCBQcm9wVHlwZX0gZnJvbSBcIi4uL3V0aWxzL0VsbUF0dHJcIjtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIGNsYXNzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIGF0dHJpYnV0ZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBhdHRyTmFtZTogc3RyaW5nLCBoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGF0dHJOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGhhbmRsZXJDbGFzcyB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gZXZlbnQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21FdmVudCggZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGV2ZW50TmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBvZiB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4gKiBAcGFyYW0gc2xpY2VzIEFycmF5IG9mIFNsaWNlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXMoIC4uLnNsaWNlczogU2xpY2VbXSk6IFNsaWNlXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VTbGljZXMoIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG4gKiBAcGFyYW0gcmVzU2xpY2UgUmVzdWx0YW50IFNsaWNlIG9iamVjdC5cclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlOiBTbGljZSwgLi4uc2xpY2VzOiBTbGljZVtdKTogdm9pZFxyXG57XHJcblx0dXRpbHMubWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbiAqIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWVzIEFycmF5IG9mIHN0cmluZ3Mgb3Igc3RyaW5nIGFycmF5cyB3aXRoIGNsYXNzIG5hbWVzXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBjbGFzcyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbiAqIEBwYXJhbSBzdHlsZXMgQXJyYXkgb2Ygc3R5bGUgb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBjc3MuU3R5bGVzZXRbXSk6IGNzcy5TdHlsZXNldFxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU3R5bGVzKCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG4gKiBAcGFyYW0gcmVzU3R5bGUgUmVzdWx0YW50IHN0eWxlIG9iamVjdFxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IGNzcy5TdHlsZXNldCwgLi4uc3R5bGVzOiAoY3NzLlN0eWxlc2V0IHwgc3RyaW5nKVtdICk6IHZvaWRcclxue1xyXG5cdHV0aWxzLm1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlLCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDYWxsYmFjayB3cmFwcGluZ1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHt3cmFwQ2FsbGJhY2tXaXRoVk59IGZyb20gXCIuLi9jb3JlL1JlY29uY2lsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLiBOb3RlIHRoYXQgdGhlIFZOIGNhbiBiZSBudWxsL3VuZGVmaW5lZDtcclxuICogaG93ZXZlciwgaW4gdGhpcyBjYXNlIGlmIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0IGl0IHdpbGwgbm90IGJlIGhhbmRsZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IElWTm9kZSk6IFRcclxue1xyXG5cdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGF0LCB2bik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzLCB0aGlzLnZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmNQcm94eSBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBWYWx1ZSB0byBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gaW52b2tpbmcgdGhlIGZ1bmN0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlXHJcblx0ICogY2xhc3MgYmFzZWQgY29tcG9uZW50IHRoYXQgcmVuZGVyZWQgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd2lsbCBiZSB1c2VkICh3aGljaCBpcyB0aGVcclxuXHQgKiBtb3N0IGNvbW1vbiBjYXNlKS5cclxuXHQgKi9cclxuXHR0aGlzQXJnPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHJvb3QgZnJvbSBcIi4uL2NvcmUvUm9vdFZOXCJcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhXHJcbiAqIHN5bmNocm9ub3VzIG1hbm5lci5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGVuXHJcbiAqIHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRyb290LnVubW91bnRSb290U3luYyggYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWltYmwtc3BlY2lmaWMgc3R5bGUgc2NoZWR1bGVyIHRoYXQgY29vcmRpbmF0ZXMgTWltY3NzIERPTSB3cml0aW5nIHdpdGggTWltYmxcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7aW5pdGlhbGl6ZU1pbWJsU3R5bGVTY2hlZHVsZXJ9IGZyb20gXCIuLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuXHJcbi8vIHNldCBNaW1ibCBzdHlsZSBzY2hlZHVsZXIgYXMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIGZvciBzdHlsZS1yZWxhdGVkIERPTS13cml0aW5nIG9wZXJhdGlvbnMuXHJcbmV4cG9ydCBsZXQgbWltYmxTdHlsZVNjaGVkdWxlclR5cGUgPSBpbml0aWFsaXplTWltYmxTdHlsZVNjaGVkdWxlcigpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgLSB1c2UgYEB0cmlnZ2VyYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc0NvbXBWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JQ2xhc3NDb21wVk5cclxue1xyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwdWJsaWMgY29tcDogbWltLklDb21wb25lbnQ7XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogbWltLlVwZGF0ZVN0cmF0ZWd5XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSA/IHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHJlbmRlcigpIG9uIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyV2F0Y2hlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmNvbXAucmVuZGVyLCB0aGlzLnJlcXVlc3RVcGRhdGUsIHRoaXMuY29tcCwgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyLmRpc3Bvc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgZGlkTW91bnQoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMuY29tcC5kaWRNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLmRpZE1vdW50KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wIHByb3BlcnR5IGhhcyBjaGFuZ2VkIHdpdGhvdXQgYWN0dWFsbHkgdW5tb3VudGluZyB0aGUgVk4uXHJcbiAgICAvLyBXZSBuZWVkIHRvIHN0b3Agd2F0Y2hpbmcgdGhlIG9sZCBjb21wb25lbnQncyByZW5kZXIgYW5kIHN0YXJ0IHdhdGNoaW5nIHRoZSBuZXcgb25lJ3MuXHJcbiAgICBwcm90ZWN0ZWQgcmVlc3RhYmxpc2hXYXRjaGVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuY29tcC5yZW5kZXIsIHRoaXMucmVxdWVzdFVwZGF0ZSwgdGhpcy5jb21wLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55XHJcbiAgICAvLyB0cmlnZ2VyIG9iamVjdHMgYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZVxyXG4gICAgLy8gdGh1cyB0cmlnZ2VycmluZyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSByZW5kZXJXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0luZGVwZW5kZW50Q29tcFZOfSBmcm9tIFwiLi9JbmRlcGVuZGVudENvbXBWTlwiXHJcbmltcG9ydCB7TWFuYWdlZENvbXBWTn0gZnJvbSBcIi4vTWFuYWdlZENvbXBWTlwiXHJcbmltcG9ydCB7RnVuY1ZOfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5pbXBvcnQge0VsbVZOfSBmcm9tIFwiLi9FbG1WTlwiXHJcbmltcG9ydCB7VGV4dFZOfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5pbXBvcnQge0Z1bmNQcm94eVZOfSBmcm9tIFwiLi9GdW5jUHJveHlWTlwiXHJcbmltcG9ydCB7UHJvbWlzZVByb3h5Vk59IGZyb20gXCIuL1Byb21pc2VQcm94eVZOXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1JlY29uY2lsZXJcIlxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGVpdGhlciBhIHNpbmdsZSB2aXJ0dWFsIG5vZGUgb3IgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LlxyXG4vLyBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW4gYXJyYXksIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0XHJcbi8vIGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW4gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHNcclxuLy8gbWlnaHQgYWxzbyBiZSBhcnJheXMsIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOIHwgVk5bXVxyXG57XHJcblx0aWYgKGNvbnRlbnQgPT0gbnVsbCB8fCBjb250ZW50ID09PSBmYWxzZSlcclxuXHR7XHJcblx0XHQvLyB0aGUgY29tcGFyaXNvbiBhYm92ZSBjb3ZlcnMgYm90aCBudWxsIGFuZCB1bmRlZmluZWRcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVk5CYXNlKVxyXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIGNvbnRlbnQubGVuZ3RoID4gMCA/IG5ldyBUZXh0Vk4oIGNvbnRlbnQpIDogbnVsbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCAodGhpcyBjYW4gb25seSBiZSBhbiBJbnN0YW5jZSBjb21wb25lbnQpIGlzIGFscmVhZHkgYXR0YWNoZWQgdG8gVk4sXHJcblx0XHQvLyByZXR1cm4gdGhpcyBleGlzdGluZyBWTjsgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBvbmUuXHJcblx0XHRyZXR1cm4gKGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpLnZuXHJcblx0XHRcdFx0XHRcdD8gKGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpLnZuIGFzIFZOXHJcblx0XHRcdFx0XHRcdDogbmV3IEluZGVwZW5kZW50Q29tcFZOKCBjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggY29udGVudCkpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNvbnRlbnQpO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZVByb3h5Vk4oIHsgcHJvbWlzZTogY29udGVudH0pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggY29udGVudClcclxuXHRcdHJldHVybiB2biB8fCBuZXcgRnVuY1Byb3h5Vk4oIHsgZnVuYzogY29udGVudCwgdGhpc0FyZzogc19jdXJyZW50Q2xhc3NDb21wfSk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBuZXcgVGV4dFZOKCBjb250ZW50LnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LiBDYWxscyB0aGUgY3JlYXRlTm9kZXNGcm9tQ29udGVudCBhbmRcclxuLy8gaWYgaXQgcmV0dXJucyBhIHNpbmdsZSBub2RlLCB3cmFwcyBpdCBpbiBhbiBhcnJheS5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY29udGVudDogYW55KTogVk5bXVxyXG57XHJcblx0bGV0IG5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudCk7XHJcblx0cmV0dXJuICFub2RlcyA/IG51bGwgOiBBcnJheS5pc0FycmF5KG5vZGVzKSA/IG5vZGVzIDogW25vZGVzXTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgY2hhaW4gb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBUeXBlU2NyaXB0J3MgSlNYIHBhcnNlci5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVzRnJvbUpTWCggdGFnOiBhbnksIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSk6IFZOIHwgVk5bXVxyXG57XHJcblx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gbmV3IEVsbVZOKCB0YWcgYXMgc3RyaW5nLCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gbWltLkZyYWdtZW50KVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnVuY1Byb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLmZ1bmMpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYSBub2RlIGxpbmtlZCB0byB0aGlzIGZ1bmN0aW9uLiBJZiB5ZXMgcmV0dXJuIGl0O1xyXG5cdFx0Ly8gb3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgbm9kZS5cclxuXHRcdGxldCBmdW5jUHJveHlQcm9wcyA9IHByb3BzIGFzIG1pbS5GdW5jUHJveHlQcm9wcztcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggcHJvcHMuZnVuYywgZnVuY1Byb3h5UHJvcHMua2V5KTtcclxuXHRcdGlmICghdm4pXHJcblx0XHRcdHJldHVybiBuZXcgRnVuY1Byb3h5Vk4oIHByb3BzKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIHVwZGF0ZUFyZ3MgcHJvcGVydHkgaXMgdHJ1ZSwgd2UgcmVwbGFjZSB0aGUgYXJndW1lbnRzIGluIHRoZSBub2RlOyBvdGhlcndpc2UsXHJcblx0XHRcdC8vIHdlIGlnbm9yZSB0aGUgYXJndW1lbnRzIGZyb20gdGhlIHByb3BlcnRpZXMuXHJcblx0XHRcdGlmIChmdW5jUHJveHlQcm9wcy5yZXBsYWNlQXJncylcclxuXHRcdFx0XHR2bi5yZXBsYWNlQXJncyggZnVuY1Byb3h5UHJvcHMuYXJncyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdm47XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2UgaWYgKHRhZyA9PT0gbWltLlByb21pc2VQcm94eSlcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzIHx8ICFwcm9wcy5wcm9taXNlKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZVByb3h5Vk4oIHByb3BzLCBjaGlsZHJlbik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgYWx3YXlzIGFuIGFycmF5LiBBIGNvbXBvbmVudCBjYW4gc3BlY2lmeSB0aGF0IGl0cyBjaGlsZHJlbiBhcmVcclxuXHRcdC8vIGFuIGFycmF5IG9mIGEgY2VydGFpbiB0eXBlLCBlLmcuIGNsYXNzIEEgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZVxyXG5cdFx0Ly8gdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgY2hpbGRyZW4gaW4gSlNYIHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGhlIFR5cGVTY3JpcHRcclxuXHRcdC8vIGNvbXBpbGVyOlxyXG5cdFx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdIChhcyBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXSAoYXMgTk9UIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdFx0VGhpcyBsb29rcyBsaWtlIGEgVHlwZVNjcmlwdCBidWcuXHJcblx0XHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdFx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdFx0aWYgKHR5cGVvZiB0YWcucHJvdG90eXBlLnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXR1cm4gbmV3IE1hbmFnZWRDb21wVk4oIHRhZyBhcyBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jVk4oIHRhZyBhcyBtaW0uRnVuY0NvbXBUeXBlLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRlbHNlXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB0YWcgaW4ganN4IHByb2Nlc3NpbmcgZnVuY3Rpb246IFwiICsgdGFnKTtcclxuXHQvLy8gI2VuZGlmXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzZXQgYXMgY3VycmVudCBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50KCk6IG1pbS5JQ29tcG9uZW50XHJcbntcclxuXHQvLyB0aGUgc19jdXJyZW50Vk4gc2hvdWxkIHBvaW50IHRvIHRoZSB2aXJ0dWFsIG5vZGUgYmVoaW5kIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQsXHJcblx0Ly8gd2hpY2ggc2hvdWxkIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBjYWxscyB0aGUgZnVuY3Rpb24uXHJcblx0cmV0dXJuIHNfY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0VsbUF0dHIsIEF0dHJQcm9wSW5mbywgRXZlbnRQcm9wSW5mbywgQ3VzdG9tQXR0clByb3BJbmZvLCBQcm9wVHlwZSwgUHJvcEluZm99IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCJcclxuaW1wb3J0IHtTdmdFbG1zfSBmcm9tIFwiLi4vdXRpbHMvU3ZnRWxtc1wiO1xyXG5pbXBvcnQge2RlZXBDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Ly8gVGFnIG5hbWUgb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBFbGVtZW50IGlzIFNWRyAoYXMgb3Bwb3NlZCB0byBIVExNKS4gVGhlcmUgYXJlIHNvbWUgU1ZHXHJcblx0Ly8gZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgcmVndWxhciBlbGVtZW50cyAoZS5nLiA8YT4pLiBUaGVyZWZvcmUsIGluIG9yZGVyIHRvXHJcblx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3Igbm90IHdlIG5lZWQgdG8gY2hlY2sgdGhlIG5hbWVzcGFjZVVSSSBvZiB0aGUgcGFyZW50XHJcblx0Ly8gKGFuY2hvcmUpIERPTSBub2RlLlxyXG5cdHB1YmxpYyBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkVsbTtcclxuXHRcdHRoaXMuZWxtTmFtZSA9IHRhZ05hbWU7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIGtleSBwcm9wZXJ0eS4gSWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3RcclxuXHRcdFx0Ly8gc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0XHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5FbG07IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZWxtTmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy5lbG07IH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBIVE1MIGVsZW1lbnQgYW5kIGNyZWF0ZSB0aGUgZWxlbWVudFxyXG5cdFx0bGV0IHN2Z0luZm8gPSBTdmdFbG1zLmdldFN2Z0VsbUluZm8oIHRoaXMuZWxtTmFtZSk7XHJcblx0XHR0aGlzLmlzU3ZnID0gc3ZnSW5mbyAhPT0gdW5kZWZpbmVkICYmIChzdmdJbmZvICE9PSB0cnVlIHx8IHRoaXMuYW5jaG9yRE4ubmFtZXNwYWNlVVJJLmVuZHNXaXRoKCBcInN2Z1wiKSk7XHJcblx0XHR0aGlzLmVsbSA9IHRoaXMuaXNTdmdcclxuXHRcdFx0PyB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggU3ZnRWxtcy5uYW1lc3BhY2UsIFN2Z0VsbXMuZ2V0RWxtTmFtZSggc3ZnSW5mbywgdGhpcy5lbG1OYW1lKSlcclxuXHRcdFx0OiB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHRoaXMuZWxtTmFtZSk7XHJcblxyXG5cdFx0Ly8gdHJhbnNsYXRlIHByb3BlcnRpZXMgaW50byBhdHRyaWJ1dGVzLCBldmVudHMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5hdHRycylcclxuXHRcdFx0dGhpcy5hZGRBdHRycygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5hZGRDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSAoaWYgc3BlY2lmaWVkKVxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHRlcm1pbmF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCB0cnVlKTtcclxuXHJcblx0XHQvLyBjbGVhbiB1cFxyXG5cdFx0dGhpcy5lbG0gPSBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhZGVlcENvbXBhcmUoIHRoaXMucHJvcHMsIChuZXdWTiBhcyBFbG1WTikucHJvcHMpO1xyXG5cclxuXHRcdC8vIHJlbmRlciBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBlaXRoZXIgb2xkIG9yIG5ldyBub2RlIGhhcyBjaGlsZHJlblxyXG5cdFx0bGV0IHNob3VsZFJlbmRlciA9IHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwIHx8XHJcblx0XHRcdFx0XHQobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuICYmIChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IChuZXdWTiBhcyBFbG1WTikucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbjtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwgfHwgcHJvcFZhbCA9PT0gZmFsc2UpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQsIG51bGwgYW5kIGZhbHNlXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwidXBkYXRlU3RyYXRlZ3lcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHVwZGF0ZVN0cmF0ZWd5IHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0XHQvLyBvciBjdXN0b20gYXR0cmlidXRlKS4gTm90ZSB0aGF0IGdldFByb3BlcnR5SW5mbyBtYXkgcmV0dXJuIG51bGwgb25seSBmb3IgcmVndWxhclxyXG5cdFx0XHRcdC8vIGF0dHJpYnV0ZXMuXHJcblx0XHRcdFx0cHJvcEluZm8gPSBFbG1BdHRyLmdldFByb3BlcnR5SW5mbyggcHJvcE5hbWUpO1xyXG5cdFx0XHRcdHByb3BUeXBlID0gcHJvcEluZm8gPyBwcm9wSW5mby50eXBlIDogUHJvcFR5cGUuQXR0cjtcclxuXHRcdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBldmVudEluZm8gPSBnZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRJbmZvKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzID0ge31cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgY3VzdG9tZSBhdHRyaWJ1dGVzIHZhbHVlLiBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBsYXRlci5cclxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBET00gYXR0cmlidXRlcyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnRkID0gdGhpcy5hdHRyc1tuYW1lXTtcclxuXHRcdFx0RWxtQXR0ci5zZXRBdHRyKCB0aGlzLmVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzID8gbmV3QXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdSVEQgfHwgIW5ld1JURC52YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHRcdC8vIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGF0dHJpYnV0ZXM7IGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQXR0cnMgJiYgKG5hbWUgaW4gb2xkQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0cHJpdmF0ZSByZW1vdmVFdmVudHMoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0V2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRFdmVudHMgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEV2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkRXZlbnQgPSBvbGRFdmVudHNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzID8gbmV3RXZlbnRzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3RXZlbnQpXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkRXZlbnQsIG5ld0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0V2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkRXZlbnRzICYmIChuYW1lIGluIG9sZEV2ZW50cykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgbmV3RXZlbnRzW25hbWVdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3RXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkRXZlbnQ6IEV2ZW50UnVuVGltZURhdGEsIG5ld0V2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGRvdWJsZS1lcXVhbC1zaWduIGZvciB1c2VDYXB0dXJlIGlzIG9uIHB1cnBvc2UsIGJlY2F1c2UgdXNlQ2FwdHVyZSBjYW4gYmUgdW5kZWZpbmVkIG9yIGJvb2xlYW5cclxuXHRcdGlmIChvbGRFdmVudC5vcmdGdW5jID09PSBuZXdFdmVudC5vcmdGdW5jICYmXHJcblx0XHRcdG9sZEV2ZW50LnRoYXQgPT09IG5ld0V2ZW50LnRoYXQgJiZcclxuXHRcdFx0b2xkRXZlbnQudXNlQ2FwdHVyZSA9PSBuZXdFdmVudC51c2VDYXB0dXJlKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gb2xkRXZlbnQud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1vdmUgb2xkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEV2ZW50LndyYXBwZXIsIG9sZEV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIG5ldyB3cmFwcGVyIGFuZCBhZGQgaXQgYXMgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBuZXdFdmVudCk7XHJcblx0XHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0V2ZW50LndyYXBwZXIsIG5ld0V2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lci4gVGhlIHdyYXBwZXIgaXMgYm91bmQgdG9cclxuXHQvLyB0aGUgaW5zdGFuY2Ugb2YgRWxtVk4gYW5kIHRodXMgY2FuIGludGVyY2VwdCBleGNlcHRpb25zIGFuZCBwcm9jZXNzIHRoZW0gdXNpbmcgdGhlIHN0YW5kYXJkXHJcblx0Ly8gZXJyb3Igc2VydmljZS4gVW5sZXNzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBpcyBhbHJlYWR5IGEgYm91bmQgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkXHJcblx0Ly8gd2l0aCBcInRoaXNcIiBzZXQgdG8gZWl0aGVyIHRoZSBcImV2ZW50LnRoYXRcIiBvYmplY3Qgb3IsIGlmIHRoZSBsYXR0ZXIgaXMgdW5kZWZpbmVkLCB0byB0aGVcclxuXHQvLyBcImNyZWF0b3JcIiBvYmplY3QsIHdoaWNoIGlzIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoZSBlbGVtZW50IGkgaXRzIHJlbmRlclxyXG5cdC8vIG1ldGhvZC5cclxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBtaW0uRXZlbnRGdW5jVHlwZTxFdmVudD5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53cmFwQ2FsbGJhY2soIGV2ZW50Lm9yZ0Z1bmMsIGV2ZW50LnRoYXQgPyBldmVudC50aGF0IDogdGhpcy5jcmVhdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIGFkZEN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBjdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBjdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVDdXN0b21BdHRycyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gb2xkQ3VzdG9tQXR0ci5oYW5kbGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3Q3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQ3VzdG9tQXR0cnMgJiYgKG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgbmV3Q3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgbmV3Q3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VzdG9tQXR0cnMgPSBuZXdDdXN0b21BdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBkZWZpbmluZyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdHB1YmxpYyB1cGRhdGVTdHJhdGVneTogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LiBUaGUgcmVmIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIG9uIHVwZGF0ZS5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBieSBcInRoaXNcIiB3aXRoaW4gdGhlIGludm9rZWQgZnVuY3Rpb25cclxuXHR0aGF0PzogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU/OiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogIG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+IH07XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSwgdXNlQ2FwdHVyZTogcHJvcFZhbFsyXSBhcyBib29sZWFuIH07XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIHRoZSBwcm9wZXJ0eSBpcyBub3QgdHJlYXRlZCBhcyBhbiBldmVudCBoYW5kbGVyXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9SZWNvbmNpbGVyXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBjb25uZWN0IGJldHdlZW4gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCB0aGUgVk5zIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxubGV0IHN5bUtleXNUb05vZGVzID0gU3ltYm9sKCBcInN5bUtleXNUb05vZGVzXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBzeW1ib2wgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogbWltLkZ1bmNQcm94eVByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jUHJveHk7XHJcblx0XHR0aGlzLmZ1bmMgPSBwcm9wcy5mdW5jIGFzICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHRcdHRoaXMudGhpc0FyZyA9IHByb3BzLnRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdFx0dGhpcy5hcmdzID0gcHJvcHMuYXJncztcclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblxyXG5cdFx0Ly8gaWYgYSBrZXkgd2FzIG5vdCBwcm92aWRlZCB3ZSB1c2UgdGhlIHZhbHVlIG9mIHRoaXNBcmcgKHdoaWNoIG1pZ2h0IGJlIHRoZSBjdXJyZW50XHJcblx0XHQvLyBjb21wb25lbnQpIGFzIGEga2V5LiBJZiB0aGF0IGlzIHVuZGVmaW5lZCBlaXRoZXIgd2UgdXNlIHRoZSBmdW5jdGlvbiBpdHNlbGYgYXMgYSBrZXkuXHJcbiAgICAgICAgdGhpcy5saW5rS2V5ID0gcHJvcHMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBpZiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJlbmRlclJlcXVpcmVkOyB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uIHByb3h5IGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy50aGlzQXJnLCB0aGlzLmFyZ3MpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuY1dhdGNoZXIoIHRoaXMuYXJncyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5saW5rTm9kZVRvRnVuYygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMudXBkYXRlRnJvbVdhdGNoZXIsIHRoaXMudGhpc0FyZywgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLnVubGlua05vZGVGcm9tRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3QgYW5kIHRoZSBzYW1lIHRoaXNBcmcgcHJvcGVydHlcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IG5ld0Z1bmNQcm94eVZOLmZ1bmMgJiYgdGhpcy50aGlzQXJnID09PSBuZXdGdW5jUHJveHlWTi50aGlzQXJnO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1Byb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5saW5rS2V5ID0gbmV3RnVuY1Byb3h5Vk4ubGlua0tleTtcclxuXHJcblx0XHQvLyB0YWtlIGFyZ3VtZW50cyBmcm9tIHRoZSBuZXcgbm9kZTsgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgXCJ0aGlzQXJnXCIgcmVtYWluIHRoZSBzYW1lLlxyXG5cdFx0dGhpcy5hcmdzID0gbmV3RnVuY1Byb3h5Vk4uYXJncztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBhbHNvIGJlIGNhbGxlZCAtIGJ1dCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSB1c2UgdGhpcyBtZXRob2Qgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZ1wiXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmluZFZOKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55KTogRnVuY1Byb3h5Vk5cclxuXHR7XHJcblx0XHQvLyBpZiB0aGUga2V5IGlzIHVuZGVmaW5lZCwgd2UgdXNlIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmXHJcblx0XHRsZXQgbGlua0tleTogYW55ID0ga2V5IHx8IHRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLmZ1bmMgPSBuZXdGdW5jVk4uZnVuYztcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdHByaXZhdGUgZnVuYzogbWltLkZ1bmNDb21wVHlwZTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQsIGZ1bmN0aW9uIG9yIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTn0gZnJvbSBcIi4vQ2xhc3NDb21wVk5cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JSW5kZXBlbmRlbnRDb21wVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBtaW0uSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuSW5kZXBlbmRlbnRDb21wO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWUgPyB0aGlzLmNvbXAuZGlzcGxheU5hbWUgOiB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS4gVGhlIGluc3RhbmNlIG9mIG91ciBjb21wb25lbnQgaXMgdGhlIGtleS5cclxuXHRwdWJsaWMgZ2V0IGtleSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLndpbGxNb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgaW5zdGFuY2VzIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZyBhbmQgdGhlIG9sZCBvbmUgZm9yIHVubW91bnRpbmcuXHJcblx0XHRpZiAobmVlZHNVcGRhdGluZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggbmV3Q29tcCk7XHJcblx0XHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wID0gbmV3Q29tcDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG5vdyB0aGF0IHdlIGhhdmUgdGhlIG5ldyBjb21wb25lbnQgaW4gb3VyIGNvbXAgcHJvcGVydHkgd2Ugc2hvdWxkIHJlZXN0YWJsaXNoXHJcbiAgICAgICAgICAgIC8vIHdhdGNoaW5nIGl0cyByZW5kZXIgbWV0aG9kXHJcbiAgICAgICAgICAgIHN1cGVyLnJlZXN0YWJsaXNoV2F0Y2hlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIG5lZWRzVXBkYXRpbmcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgZ2l2ZW4gY29tcG9uZW50IHRoYXQgaXQgd2lsbCBiZSBtb3VudGVkLlxyXG5cdHByaXZhdGUgd2lsbE1vdW50SW5zdGFuY2UoIGNvbXA6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbXAudm4gPSB0aGlzO1xyXG5cclxuXHRcdGlmIChjb21wLndpbGxNb3VudClcclxuXHRcdFx0Y29tcC53aWxsTW91bnQoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpdCB3aWxsIGJlIHVubW91bnRlZC5cclxuXHRwcml2YXRlIHdpbGxVbm1vdW50SW5zdGFuY2UoIGNvbXA6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChjb21wLndpbGxVbm1vdW50KVxyXG5cdFx0XHRjb21wLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0Y29tcC52biA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOfSBmcm9tIFwiLi9DbGFzc0NvbXBWTlwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JTWFuYWdlZENvbXBWTlxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHB1YmxpYyBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5NYW5hZ2VkQ29tcDtcclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmRpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoIHBhcmVudCwgY3JlYXRvcik7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAudm4gPSB0aGlzO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblxyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGNvbXBvbmVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50cyAoYW5kL29yIGVsZW1lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHJcblx0XHRpZiAodGhpcy5jb21wLndpbGxVbm1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbFVubW91bnQoKTtcclxuXHJcblx0XHR0aGlzLmNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNvbXAgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgTWFuYWdlZENvbXBWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgTWFuYWdlZENvbXBWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkVXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIHNob3VsZFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBjdXN0b20gcHJvcGVydHkgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogbWltLlByb21pc2VQcm94eVByb3BzLCBjaGlsZHJlbj86IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5Qcm9taXNlUHJveHk7XHJcblx0XHR0aGlzLnByb21pc2UgPSBwcm9wcy5wcm9taXNlO1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gcHJvcHMuZXJyb3JDb250ZW50RnVuYztcclxuXHRcdHRoaXMuY29udGVudCA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkIChzdWNjZXNzZnVsbHkgb3Igbm90KS5cclxuXHRwdWJsaWMgZ2V0IGlzU2V0dGxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvbWlzZSA9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBwcm9taXNlIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMucHJvbWlzZSA9PT0gbmV3UHJvbWlzZVByb3h5Vk4ucHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld1Byb21pc2VQcm94eVZOLmtleTtcclxuXHRcdHRoaXMuY29udGVudCA9IG5ld1Byb21pc2VQcm94eVZOLmNvbnRlbnQ7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBuZXdQcm9taXNlUHJveHlWTi5lcnJvckNvbnRlbnRGdW5jO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhaXRzIGZvciB0aGUgcHJvbWlzZSB0byBzZXR0bGVcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZSgpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHRoaXMucHJvbWlzZTtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIHN0aWxsIG1vdW50ZWQsIHJlcXVlc3QgdXBkYXRlXHJcblx0XHRcdGlmICh0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBhbHJlYWR5IHVubW91bnRlZCwgZG8gbm90aGluZ1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGlmICh0aGlzLmVycm9yQ29udGVudEZ1bmMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmVycm9yQ29udGVudEZ1bmMoIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIxKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycik7XHJcblxyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFByb21pc2UgdGhhdCB0aGlzIG5vZGUgd2F0Y2hlcy5cclxuXHRwcml2YXRlIHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0Ly8gQ29udGVudCB0aGF0IHRoaXMgbm9kZSBkaXNwbGF5cy4gSW5pdGlhbGx5IHRoaXMgY29udGVudCBpcyBzZXQgdG8gcHJvcHMuY2hpbGRyZW4uIFdoZW5cclxuXHQvLyB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCwgdGhlIGNvbnRlbnQgaXMgc2V0IHRvIHRoZSByZXNvbHZlZCB2YWx1ZS4gSWYgdGhlIHByb21pc2UgaXNcclxuXHQvLyByZWplY3RlZCBhbmQgdGhlIGVycm9yQ29udGVudEZ1bmMgaXMgZGVmaW5lZCwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGl0cyByZXR1cm5cclxuXHQvLyB2YWx1ZSBpcyB1c2VkIGFzIGNvbnRlbnQuXHJcblx0cHJpdmF0ZSBjb250ZW50PzogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIGVycm9yQ29udGVudEZ1bmM/OiAoIGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgZXhwb3J0IGZ1bmN0aW9uYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGUgc2FtZVxyXG4vLyBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxuXHRzdWJzY3JpYmVkVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG59XHJcblxyXG4vLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2V0cyBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgc3Vic2NyaWJlZCB0byB0aGlzIHNlcnZpY2UuXHJcbmxldCBzX3NlcnZpY2VJbmZvcyA9IG5ldyBNYXA8c3RyaW5nLFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHJcblx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBnZXRGaXJzdEROLCBnZXRJbW1lZGlhdGVETnMsIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROLCBnZXRWTlBhdGgsIFZOVXBkYXRlRGlzcCwgZ2V0TGFzdEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5pbXBvcnQge2VudGVyTXV0YXRpb25TY29wZSwgZXhpdE11dGF0aW9uU2NvcGV9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgaW5kaWNhdGluZyBpbiB3aGF0IHBoYXNlIG9mIHRoZSB1cGRhdGUgY3ljbGUgd2UgY3VycmVudGx5IHJlc2lkZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVkRnVuY01hcCBjbGFzcyByZXByZXNlbnRzIGEgbWFwIG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgZXhlY3V0ZWQgZWl0aGVyIGJlZm9yZVxyXG4gKiBvciBhZnRlciBjb21wb25lbnQgdXBkYXRlcy4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kIHRoZSB2YWx1ZXMgYXJlXHJcbiAqIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuIEJvdGhcclxuICogdGhlIGtleXMgYW5kIHRoZSB2YWx1ZXMgaGF2ZSB0aGUgc2FtZSB0eXBlOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUuXHJcbiAqL1xyXG5jbGFzcyBTY2hlZHVsZWRGdW5jTWFwIGV4dGVuZHMgTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcbi8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcbi8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG4vLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcbi8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG4vL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG4vL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxubGV0IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIHZhbHVlcyBpbiB0aGUgbWFwIGFyZSBvYmplY3RzIHRoYXQgd2lsbFxyXG4vLyBiZSB1c2VkIHMgdGhlIFwidGhpc1wiIHZhbHVlIGluIHRoZSBjYWxsYmFjay5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcbi8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuIFRoZSB2YWx1ZXMgaW4gdGhlIG1hcCBhcmUgb2JqZWN0cyB0aGF0IHdpbGxcclxuLy8gYmUgdXNlZCBzIHRoZSBcInRoaXNcIiB2YWx1ZSBpbiB0aGUgY2FsbGJhY2suXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cclxuLy8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5sZXQgc19zY2hlZHVsZWRGcmFtZUhhbmRsZTogbnVtYmVyID0gMDtcclxuXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIuXHJcbmxldCBzX3NjaGVkdWxlclN0YXRlOiBTY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcblxyXG4vLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcbi8vIGluY3JlbWVudHMgdGhpcyBudW1iZXIuIEVhY2ggbm9kZSBiZWluZyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgaXMgYXNzaWduZWQgdGhpcyBudW1iZXIuXHJcbi8vIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIHdoZW4gYm90aCBhIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmVcclxuLy8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxubGV0IHNfY3VycmVudFRpY2s6IG51bWJlciA9IDA7XHJcblxyXG4vLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuLy8gZXZlcnkgdGltZSB3ZSByZWN1cnNlIGludG8gc3ViLW5vZGVzIGFuZCByZXN0b3JlZCB3aGVuIHdlIHJldHVybiBiYWNrIHRvIHRoZSBub2RlLiBJZlxyXG4vLyBkdXJpbmcgY3JlYXRpb24gb3IgdXBkYXRpbmcgcHJvY2VzcyBhbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCBpcyBjYXVnaHQgYnkgc29tZSB1cHBlclxyXG4vLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRWTjogVk4gPSBudWxsO1xyXG5cclxuLy8gQ2xhc3MtYmFzZWQgY29tcG9uZW50IHdob3NlIHJlbmRlcmluZyB0cmVlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXHJcbmV4cG9ydCBsZXQgc19jdXJyZW50Q2xhc3NDb21wOiBtaW0uSUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGF0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGNhbGxiYWNrcyBpbiBvcmRlciB0byBoYXZlIGl0IGV4ZWN1dGVkIGluIGEgTWltYmxcclxuICogY29udGV4dC4gVGhlIGZ1bmN0aW9uIGlzIHVzdWFsbHkgYm91bmQgdG8gYSB2aXJ0dWFsIG5vZGUgYXMgXCJ0aGlzXCIgYW5kIHRvIHR3byBwYXJhbWV0ZXJzOiB0aGVcclxuICogb2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgZXhlY3V0ZWQgYW5kIHRoZSBvcmlnaW5hbFxyXG4gKiBjYWxsYmFjayBpdHNlbGYuIFRoZXNlIHR3byBwYXJhbWV0ZXJzIGFyZSBhY2Nlc3NlZCBhcyB0aGUgZmlyc3QgYW5kIHNlY29uZCBlbGVtZW50cyBvZiB0aGVcclxuICogYGFyZ3VtZW50c2AgYXJyYXkpLiBUaGUgcmVzdCBvZiBwYXJhbWV0ZXJzIGluIHRoZSBgYXJndW1lbnRzYCBhcnJheSBhcmUgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbFxyXG4gKiBjYWxsYmFjayBhbmQgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBpcyByZXR1cm5lZCBmcm9tIHRoZSB3cmFwcGVyLiBOb3RlIHRoYXQgXCJ0aGlzXCJcclxuICogY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgZnVuY3Rpb24gd2FzIHNjaGVkdWxlZCB3aXRob3V0IGJlaW5nIGluIHRoZSBjb250ZXh0IG9mIGFueSB2aXJ0dWFsIG5vZGUuXHJcbiAqIFxyXG4gKiBUaGUgcHJvcGVyIE1pbWJsIGNvbnRleHQgZXN0YWJsaXNoZXMgdGhlIGZvbGxvd2luZzpcclxuICogLSBleGVjdXRlcyBpbiBhIG11dGF0aW9uIHNjb3BlLCBzbyB0aGF0IGlmIGFueSB0cmlnZ2VyIHZhbHJpYWJsZSBpcyBjaGFuZ2VkIGR1cmluZyB0aGUgZXhlY3V0aW9uXHJcbiAqICAgb2YgdGhlIGNhbGxiYWNrLCB3YXRjaGVycyB3aWxsIGJlIG9ubHkgbm90aWZpZWQgYWZ0ZXIgdGhlIGNhbGxiYWNrIGhhcyBmaW5pc2hlZCBpdHMgZXhlY3V0aW9uLlxyXG4gKiAtIElmIHRoZSB3cmFwcGluZyBoYXMgYmVlbiBkb25lIGluIHRoZSBjb250ZXh0IG9mIGEgdmlydHVhbCBub2RlIChlLmcuIGZyb20gYSBNaW1ibCBjb21wb25lbnQpLFxyXG4gKiAgIHRoZSBcImN1cnJlbnQgdmlydHVhbCBub2RlXCIgYW5kIHRoZSBcImN1cnJlbnQgY29tcG9uZW50XCIgYXJlIHNldCB0byB0aGUgbm9kZSBhbmQgY29tcG9uZW50IHVuZGVyXHJcbiAqICAgd2hpY2ggdGhlIGNhbGxiYWNrIHdhcyB3cmFwcGVkLiBUaGlzIGFsbG93IGZvciBwcm9wZXIgSlNYIGV4ZWN1dGlvbiBhbmQgZm9yIHVzaW5nIHRoZSBNaW1ibFxyXG4gKiAgIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogXHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxsYmFja1dyYXBwZXIoKTogYW55XHJcbntcclxuXHQvLyByZW1lbWJlciB0aGUgY3VycmVudCBWTiBhbmQgc2V0IHRoZSBjdXJyZW50IFZOIHRvIGJlIHRoZSBWTiBmcm9tIHRoZSBcInRoaXNcIiB2YWx1ZS4gTm90ZVxyXG5cdC8vIHRoYXQgdGhpcyBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSB3cmFwcGluZyB3YXMgY3JlYXRlZCB3aXRob3V0IHRoZSBWTiBjb250ZXh0LlxyXG5cdGxldCBjdXJyZW50Vk4gPSBzX2N1cnJlbnRWTjtcclxuICAgIGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG4gICAgaWYgKHRoaXMpXHJcbiAgICB7XHJcbiAgICAgICAgc19jdXJyZW50Vk4gPSB0aGlzO1xyXG4gICAgICAgIHNfY3VycmVudENsYXNzQ29tcCA9IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgPyAoc19jdXJyZW50Vk4gYXMgYW55KS5jb21wIDogc19jdXJyZW50Vk4uY3JlYXRvcjtcclxuICAgIH1cclxuXHJcblx0dHJ5XHJcblx0e1xyXG4gICAgICAgIGVudGVyTXV0YXRpb25TY29wZSgpO1xyXG5cdFx0bGV0IFt0aGF0LCBvcmdDYWxsYmFjaywgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnQ2FsbGJhY2suYXBwbHkoIHRoYXQsIHJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcylcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdGhpcykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG4gICAgICAgIGV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXN0b3JlIHRoZSBjdXJyZW50IFZOIHRvIHRoZSByZW1lbWJlcmVkIHZhbHVlO1xyXG4gICAgICAgICAgICBzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuICAgICAgICAgICAgc19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb2RlU3luYyggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIG9yIHJlcGxhY2VtZW50IHJlcXVlc3RzIHdpbGxcclxuICAgIC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG4gICAgaWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUpXHJcbiAgICB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUpO1xyXG4gICAgICAgIHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vZGVUb1NjaGVkdWxlciggdm4pO1xyXG4gICAgZG9NaW1ibGVUaWNrKCk7XHJcblxyXG4gICAgLy8gLy8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdC8vIHNfY3VycmVudFRpY2srKztcclxuXHJcblx0Ly8gLy8vICNpZiBVU0VfU1RBVFNcclxuXHQvLyBcdGxldCBvbGRTdGF0cyA9IERldGFpbGVkU3RhdHMuc3RhdHM7XHJcblx0Ly8gXHREZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB0aWNrICR7c19jdXJyZW50VGlja306IGApO1xyXG5cdC8vIFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG5cdC8vIC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gbGV0IHZuczogVk5bXVtdID0gbmV3IEFycmF5KDEpO1xyXG5cdC8vIHZuc1swXSA9IFt2bl07XHJcblxyXG5cdC8vIHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0Ly8gcGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIHZucykpO1xyXG5cclxuXHQvLyAvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdC8vIFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHQvLyBcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBvbGRTdGF0cztcclxuXHQvLyAvLy8gI2VuZGlmXHJcblxyXG5cdC8vIHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcbiAgICBhZGROb2RlVG9TY2hlZHVsZXIoIHZuKTtcclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgdGljayB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZSBkdXJpbmcgYVxyXG5cdC8vIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cclxuXHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRzIHRoZSBnaXZlbiBub2RlIGFuZCByZWxhdGVkIGluZm9ybWF0aW9uIGludG8gdGhlIGludGVybmFsIHN0cnVjdHVyZXMgc28gdGhhdCBpdCB3aWxsIGJlXHJcbi8vIHVwZGF0ZWQgZHVyaW5nIHRoZSBuZXh0IE1pbWJsIHRpY2suXHJcbmZ1bmN0aW9uIGFkZE5vZGVUb1NjaGVkdWxlciggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2bi50eXBlID09PSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcCB8fCB2bi50eXBlID09PSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBtaW0uSUNsYXNzQ29tcFZOKS5jb21wO1xyXG5cdFx0aWYgKGNvbXAuYmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGNvbXAuYmVmb3JlVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cclxuXHRcdGlmIChjb21wLmFmdGVyVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBjb21wLmFmdGVyVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcbi8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4sIHRoYXQ/OiBvYmplY3QsIHZuPzogbWltLklWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGF0LCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgb3IgdGhlIGZyYW1lIGhhcyBhbHJlYWR5XHJcbi8vIGJlZW4gc2NoZWR1bGVkLlxyXG5mdW5jdGlvbiByZXF1ZXN0RnJhbWVJZk5lZWRlZCgpOiB2b2lkXHJcbntcclxuXHRpZiAoc19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uU2NoZWR1bGVkRnJhbWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIG9uU2NoZWR1bGVkRnJhbWUoKTogdm9pZFxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIG9yIHJlcGxhY2VtZW50IHJlcXVlc3RzIHdpbGxcclxuXHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcbiAgICBkb01pbWJsZVRpY2soKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWNvbmNpbGVyIG1haW4gZW50cmFuY2UgcG9pbnRcclxuZnVuY3Rpb24gZG9NaW1ibGVUaWNrKCk6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzLiBJZiB0aGlzIGZ1bmN0aW9uXHJcblx0Ly8gY2FsbHMgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kIG9yIHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRlcyxcclxuXHQvLyB0aGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhpcyBjeWNsZS4gSG93ZXZlciwgaWYgaXQgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxyXG5cdC8vIGFmdGVyIHVwZGF0ZXMsIGl0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIG5leHQgY3ljbGUuXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZTtcclxuXHRcdGxldCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IFNjaGVkdWxlZEZ1bmNNYXAoKTtcclxuXHRcdGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLCB0cnVlKTtcclxuXHR9XHJcblxyXG5cdGlmIChzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcbiAgICAgICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAgICAgbGV0IHN0YXRzQWxyZWFkeUV4aXN0ZWQgPSBEZXRhaWxlZFN0YXRzLnN0YXRzICE9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghc3RhdHNBbHJlYWR5RXhpc3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdGljayAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdC8vIHVwZGF0ZSByZXF1ZXN0cy4gQXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgYW5kIHBlcmZvcm0gdXBkYXRlcy5cclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0XHRsZXQgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gc192bnNTY2hlZHVsZWRGb3JVcGRhdGU7XHJcblx0XHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlKSkpO1xyXG5cclxuICAgICAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRzQWxyZWFkeUV4aXN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG4vLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuLy9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG4vL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuLy9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuLy8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcbi8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcbmZ1bmN0aW9uIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG57XHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGxldCBsYWJlbCA9IGBhcnJhbmdpbmcgJHt2bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZX0gbm9kZXMgYnkgZGVwdGhgO1xyXG5cdFx0Y29uc29sZS50aW1lKCBsYWJlbCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUudGltZUVuZCggbGFiZWwpO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5mdW5jdGlvbiBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcbntcclxuXHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcblx0Ly8gaXRlcmF0aW9uIG92ZXIgdGhlIHNwYXJzZSBhcnJheSBza2lwcyB0aGUgaG9sZXMuXHJcblx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHR2bnNCeURlcHRoLmZvckVhY2goICh2bnM6IFZOW10pID0+IHsgdm5zLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdC8vIGNsZWFyIHRoZSBmbGFnIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBmb3IgdGhlIG5vZGVcclxuXHRcdFx0dm4udXBkYXRlUmVxdWVzdGVkID0gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSwgZG9uJ3QgdXBkYXRlIGl0IGFnYWluXHJcblx0XHRcdGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gc19jdXJyZW50VGljaylcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRkaXNwID0geyBuZXdWTjogdm4sIGFjdGlvbjogVk5EaXNwQWN0aW9uLlVua25vd24sIG9sZFZOOiB2bn07XHJcblx0XHRcdHVwZGF0ZVZpcnR1YWwoIGRpc3ApO1xyXG5cdFx0XHR1cGRhdGVkTm9kZURpc3BzLnB1c2goIGRpc3ApO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuXHRcdFx0Ly8gYnkgdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0XHRcdGxldCBlcnJvclNlcnZpY2U6IG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2UgPSB2bi5nZXRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHNfY3VycmVudFZOID8gZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikgOiBudWxsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHJcblx0XHRzX2N1cnJlbnRWTiA9IG51bGw7XHJcblx0fSl9KTtcclxuXHJcblx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcbi8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcbmZ1bmN0aW9uIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHR1cGRhdGVkTm9kZURpc3BzLmZvckVhY2goIChkaXNwOiBWTkRpc3ApID0+XHJcblx0e1xyXG5cdFx0dXBkYXRlUGh5c2ljYWwoIGRpc3ApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5mdW5jdGlvbiBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogU2NoZWR1bGVkRnVuY01hcCwgYmVmb3JlVXBkYXRlOiBib29sZWFuKVxyXG57XHJcblx0ZnVuY3MuZm9yRWFjaCggKHdyYXBwZXIsIGZ1bmMpID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHdyYXBwZXIoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgZnVuY3Rpb24gJHtiZWZvcmVVcGRhdGUgPyBcImJlZm9yZVwiIDogXCJhZnRlclwifSB1cGRhdGluZyBjb21wb25lbnRzXFxuYCwgZXJyKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIGFuZCByZW5kZXJzIHRoaXMgbm9kZSBhbmQgaXRzIHN1Yi1ub2Rlcy4gVGhpcyBtZXRob2QgaXMgaW52b2tlZFxyXG4vLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuLy8gbWV0aG9kICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNldFNpdGUgb3IgcmVuZGVyIG1ldGhvZHMpLFxyXG4vLyB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZVxyXG4vLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcbi8vIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXRcclxuLy8gaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiBjcmVhdGVWaXJ0dWFsKCB2bjogVk4sIHBhcmVudDogVk4pOiB2b2lkXHJcbntcclxuXHR2bi5pbml0KCBwYXJlbnQsIHNfY3VycmVudENsYXNzQ29tcCk7XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0bGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0aWYgKCh2biBhcyBhbnkpLmNvbXApXHJcblx0XHRzX2N1cnJlbnRDbGFzc0NvbXAgPSAodm4gYXMgYW55KS5jb21wO1xyXG5cclxuXHRpZiAodm4ud2lsbE1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHdpbGxNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR2bi53aWxsTW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0Ly8gSWYgdGhpcyBub2RlIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZyBhbmQgYW4gZXhjZXB0aW9uIGlzIHRocm93biBlaXRoZXIgYnkgdGhpc1xyXG5cdC8vIG5vZGUgb3IgYnkgb25lIG9mIGl0cyBzdWItbm9kZXMsIHRoaXMgbGluZSBpcyBub3QgZXhlY3V0ZWQgYW5kIHRodXMsIHNfY3VycmVudFZOXHJcblx0Ly8gd2lsbCBwb2ludCB0byBvdXIgbm9kZSB3aGVuIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0LlxyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IGN1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgY3JlYXRpb24gYW5kIGluaXRpYWwgcmVuZGVyaW5nIG9uIHRoZSBzdWItbm9kZXMgb2Ygb3VyIG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1Yk5vZGVzVmlydHVhbCggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gdGhpcyBtZXRob2QgaXMgb25seSBpbnZva2VkIGlmIHRoZSBub2RlIGhhcyB0aGUgcmVuZGVyIGZ1bmN0aW9uXHJcblx0dm4uc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0bGV0IHByZXZWTjogVk47XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdGNyZWF0ZVZpcnR1YWwoIHN2biwgdm4pO1xyXG5cclxuXHRcdFx0aWYgKHByZXZWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHByZXZWTi5uZXh0ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5wcmV2ID0gcHJldlZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2Vk4gPSBzdm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBtb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuXHRsZXQgb3duRE4gPSB2bi5tb3VudCA/IHZuLm1vdW50KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgb3VyIG93biBET00gbm9kZSwgYWRkIGl0IHVuZGVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdGlmIChvd25ETilcclxuXHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gaWYgdGhlIG5vZGUgaGFzIHN1Yi1ub2RlcywgYWRkIERPTSBub2RlcyBmb3IgdGhlbS4gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93blxyXG5cdC8vIERPTSBub2RlIHVzZSBpdCBhcyBhbiBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdGxldCBuZXdBbmNob3JETiA9IG93bkROID8gb3duRE4gOiBhbmNob3JETjtcclxuXHRcdGxldCBuZXdCZWZvcmVETiA9IG93bkROID8gbnVsbCA6IGJlZm9yZUROO1xyXG5cclxuXHRcdC8vIG1vdW50IGFsbCBzdWItbm9kZXNcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y3JlYXRlUGh5c2ljYWwoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBkaWRNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuICAgIGlmICh2bi5kaWRNb3VudClcclxuICAgICAgICB2bi5kaWRNb3VudCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIHByZURlc3Ryb3koIHZuOiBWTilcclxue1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdHByZURlc3Ryb3koIHN2bik7XHJcblx0fVxyXG5cclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbFVubW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gd2lsbFVubW91bnRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgcHJvY2Vzc2VkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG4gICAgICAgIC8vIHJlbmRlcmluZyBhZ2FpbiBpbiB0aGlzIGN5Y2xlLlxyXG4gICAgICAgIHZuLmxhc3RVcGRhdGVUaWNrID0gc19jdXJyZW50VGljaztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVtb3ZlcyBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxue1xyXG5cdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblxyXG5cdGlmICh2bi51bm1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHRcdHZuLnVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG5cdC8vIHdlIGRvbid0IG5lZWQgdG8gcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcywgYmVjYXVzZSB0aGV5IGFyZSByZW1vdmVkIHdpdGggdGhlIHBhcmVudC5cclxuXHRpZiAob3duRE4pXHJcblx0XHQob3duRE4gYXMgYW55IGFzIENoaWxkTm9kZSkucmVtb3ZlKCk7XHJcblx0ZWxzZSBpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgYmVjYXVzZSB0aGlzIHdheSB0aGUgRE9NIGVsZW1lbnQgcmVtb3ZhbCBpc1xyXG5cdFx0Ly8gZWFzaWVyLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IHZuLnN1Yk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcblx0dm4udGVybSgpO1xyXG5cclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW5kZXJzIHRoaXMgbm9kZSBhbmQgdXBkYXRlcyBpdHMgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeS4gVGhpcyBtZXRob2QgaXNcclxuLy8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuLy8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgbWV0aG9kXHJcbi8vICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNob3VsZFVwZGF0ZSBvciByZW5kZXIgbWV0aG9kcyksIHRoZSBjb21wb25lbnQgaXMgYXNrZWRcclxuLy8gdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byByZW5kZXJcclxuLy8gYWdhaW47IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbiBpcyByZS10aHJvd24uIFRodXMsIHRoZSBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdFxyXG4vLyBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0IGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuZnVuY3Rpb24gdXBkYXRlVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gbGV0IHZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgPyBkaXNwLm5ld1ZOIDogZGlzcC5vbGRWTjtcclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgY3VycmVudFZOID0gdm47XHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblxyXG5cdGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdGlmICgodm4gYXMgYW55KS5jb21wKVxyXG5cdFx0c19jdXJyZW50Q2xhc3NDb21wID0gKHZuIGFzIGFueSkuY29tcDtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0dXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRpZiAodm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nICYmIHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGhhbmRsZUVycm9yKCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdHZuLmhhbmRsZUVycm9yKCBlcnIsIGdldFZOUGF0aCggc19jdXJyZW50Vk4pKTtcclxuXHRcdFx0dXBkYXRlU3ViTm9kZXNWaXJ0dWFsKCBkaXNwKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IGN1cnJlbnRDbGFzc0NvbXA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcbi8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcmVuZGVyIHRoZSBuZXcgY29udGVudCBhbmQgYnVpbGQgYXJyYXkgb2YgZGlzcG9zaXRpb25zIG9iamVjdHMgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0YnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCBkaXNwKTtcclxuXHJcblx0Ly8gZm9yIG5vZGVzIHRvIGJlIHJlbW92ZWQsIGNhbGwgd2lsbFVubW91bnRcclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdHByZURlc3Ryb3koIHN2bik7XHJcblx0fVxyXG5cclxuXHQvLyBwZXJmb3JtIHJlbmRlcmluZyBmb3Igc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLCByZXBsYWNlZCBvciB1cGRhdGVkXHJcblx0aWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGxldCBvbGRWTjogVk4sIG5ld1ZOOiBWTjtcclxuXHRcdGxldCBwYXJlbnRWTiA9IGRpc3Aub2xkVk47XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRGlzcCBvZiBkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHRcdHtcclxuXHRcdFx0b2xkVk4gPSBzdWJOb2RlRGlzcC5vbGRWTjtcclxuXHRcdFx0bmV3Vk4gPSBzdWJOb2RlRGlzcC5uZXdWTjtcclxuXHRcdFx0aWYgKHN1Yk5vZGVEaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICgob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKSAmJiBvbGRWTi5wcmVwYXJlVXBkYXRlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHByZXBhcmVVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBvbGRWTi5wcmVwYXJlVXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdGNyZWF0ZVZpcnR1YWwoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHQvLyBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIGV4aXQgaWYgdGhpcyBpcyB0aGUgY2FzZVxyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG5ldyBvciBtb3ZpbmcgZXhpc3Rpbmcgc3ViLW5vZGVzLiBJZlxyXG5cdC8vIG91ciBub2RlIGhhcyBpdHMgb3duIEROLCBpdCB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXM7IG90aGVyd2lzZSwgb3VyIG5vZGUnc1xyXG5cdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cdGxldCBhbmNob3JETiA9IG93bkROICE9IG51bGwgPyBvd25ETiA6IHZuLmFuY2hvckROO1xyXG5cclxuXHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgbmV3IG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0Ly8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGFuY2hvciBub2RlJ3MgY2hpbGRyZW4uXHJcblx0bGV0IGJlZm9yZUROID0gb3duRE4gIT0gbnVsbCA/IG51bGwgOiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4sIGFuY2hvckROKTtcclxuXHJcblx0Ly8gcmUtY3JlYXRlIG91ciBjdXJyZW50IGxpc3Qgb2Ygc3ViLW5vZGVzIC0gd2Ugd2lsbCBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0dm4uc3ViTm9kZXMgPSBkaXNwLnN1Yk5vZGVEaXNwcyA/IG5ldyBBcnJheTxWTj4oZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcGVyZm9ybSB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGVpdGhlciBncm91cHMgb3IgaW5kaXZpZHVhbCBub2Rlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2RlR3JvdXBzKVxyXG5cdHtcclxuXHRcdHVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0YXJyYW5nZUdyb3VwcyggZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0dXBkYXRlUGh5c2ljYWxCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgaW5kaXZpZHVhbCBub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWxCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRpZiAobmV4dFZOKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0c3ZuLm5leHQgPSBuZXh0Vk47XHJcblx0XHR9XHJcblxyXG5cdFx0bmV4dFZOID0gc3ZuO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGdyb3Vwcy4gV2UgZ28gZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9mIHVwZGF0ZSBncm91cHNcclxuLy8gYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWxCeUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgY3VyclN1Yk5vZGVJbmRleCA9IGRpc3BzLmxlbmd0aCAtIDE7XHJcblx0bGV0IG5leHRWTjogVk4sIHN2bjogVk4sIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTjogVk4sIGZpcnN0RE46IEROO1xyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cclxuXHRcdC8vIGZpcnN0IHVwZGF0ZSBldmVyeSBzdWItbm9kZSBpbiB0aGUgZ3JvdXAgYW5kIGl0cyBzdWItc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gZGlzcHNbal07XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdFx0Ly8gZm9yIHRoZSBVcGRhdGUgb3BlcmF0aW9uLCB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlOyBmb3IgdGhlIEluc2VydCBvcGVyYXRpb25cclxuXHRcdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0XHRzdm4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tjdXJyU3ViTm9kZUluZGV4LS1dID0gc3ZuO1xyXG5cclxuXHRcdFx0aWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9IFxyXG57XHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRhY3Rpb24/OiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRvbGRWTj86IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0dXBkYXRlRGlzcD86IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0c3ViTm9kZURpc3BzPzogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXNUb1JlbW92ZT86IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0c3ViTm9kZUdyb3Vwcz86IFZORGlzcEdyb3VwW107XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcbiAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcbiAgICAvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50XHJcbiAgICBsZXQgbmV3Q2hhaW4gPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGRpc3Aub2xkVk4ucmVuZGVyKCkpO1xyXG4gICAgbGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcbiAgICBsZXQgb2xkQ2hhaW4gPSBkaXNwLm9sZFZOLnN1Yk5vZGVzO1xyXG4gICAgbGV0IG9sZExlbiA9IG9sZENoYWluID8gb2xkQ2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcbiAgICAvLyBpZiBlaXRoZXIgb2xkIG9yIG5ldyBvciBib3RoIGNoYWlucyBhcmUgZW1wdHksIHdlIGRvIHNwZWNpYWwgdGhpbmdzXHJcbiAgICBpZiAobmV3TGVuID09PSAwICYmIG9sZExlbiA9PT0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBib3RoIGNoYWlucyBhcmUgZW1wdHkgLSBkbyBub3RoaW5nXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmV3TGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG5ldyBjaGFpbiBpcyBlbXB0eSAtIGRlbGV0ZSBhbGwgb2xkIG5vZGVzXHJcbiAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gb2xkQ2hhaW47XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAob2xkTGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBjaGFpbiBpcyBlbXB0eSAtIGluc2VydCBhbGwgbmV3IG5vZGVzXHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHMgPSBuZXdDaGFpbi5tYXAoIG5ld1ZOID0+IHsgcmV0dXJuIHsgbmV3Vk4sIGFjdGlvbjogVk5EaXNwQWN0aW9uLkluc2VydH0gfSk7XHJcbiAgICAgICAgaWYgKG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRClcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzID0gW25ldyBWTkRpc3BHcm91cCggZGlzcCwgVk5EaXNwQWN0aW9uLkluc2VydCwgMCwgbmV3TGVuIC0gMSldO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgcmVjeWNsaW5nIG9mIG5vbi1tYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzIGJ5IG5vbi1tYXRjaGluZyBuZXdcclxuICAgIC8vIGtleWVkIHN1Yi1ub2RlcyBpcyBhbGxvd2VkLiBJZiB1cGRhdGUgc3RyYXRlZ3kgaXMgbm90IGRlZmluZWQgZm9yIHRoZSBub2RlLCB0aGVcclxuICAgIC8vIHJlY3ljbGluZyBpcyBhbGxvd2VkLlxyXG4gICAgbGV0IGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nID0gdHJ1ZTtcclxuICAgIGxldCB1cGRhdGVTdHJhdGVneSA9IGRpc3Aub2xkVk4gPyBkaXNwLm9sZFZOLnVwZGF0ZVN0cmF0ZWd5IDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKHVwZGF0ZVN0cmF0ZWd5ICYmIHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZztcclxuXHJcbiAgICAvLyBwcm9jZXNzIHRoZSBzcGVjaWFsIGNhc2Ugd2l0aCBhIHNpbmdsZSBzdWItbm9kZSBpbiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBqdXN0XHJcbiAgICAvLyB0byBhdm9pZCBjcmVhdGluZyB0ZW1wb3Jhcnkgc3RydWN0dXJlc1xyXG4gICAgaWYgKG5ld0xlbiA9PT0gMSAmJiBvbGRMZW4gPT09IDEpXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHMgPSBbY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwLCBuZXdDaGFpblswXSwgb2xkQ2hhaW5bMF0sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKV07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIGFyZSBoZXJlIGlmIGVpdGhlciBvbGQgYW5kIG5ldyBjaGFpbnMgY29udGFpbiBtb3JlIHRoYW4gb25lIG5vZGUgYW5kIHdlIG5lZWQgdG9cclxuICAgIC8vIHJlY29uY2lsZSB0aGUgY2hhaW5zLiBGaXJzdCBnbyBvdmVyIHRoZSBvbGQgbm9kZXMgYW5kIGJ1aWxkIGEgbWFwIG9mIGtleWVkIG9uZXMgYW5kIGFcclxuICAgIC8vIGxpc3Qgb2Ygbm9uLWtleWVkIG9uZXMuIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIG5vZGUgd2l0aCB0aGUgc2FtZSBrZXksIHRoZSBmaXJzdCBvbmVcclxuICAgIC8vIGdvZXMgdG8gdGhlIG1hcCBhbmQgdGhlIHJlc3QgdG8gdGhlIHVubGV5ZWQgbGlzdC5cclxuICAgIGxldCBvbGRLZXllZE1hcCA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0OiBWTltdID0gW107XHJcbiAgICBsZXQga2V5OiBhbnk7XHJcbiAgICBmb3IoIGxldCBvbGRWTiBvZiBvbGRDaGFpbilcclxuICAgIHtcclxuICAgICAgICBrZXkgPSBvbGRWTi5rZXk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsICYmICFvbGRLZXllZE1hcC5oYXMoIGtleSkpXHJcbiAgICAgICAgICAgIG9sZEtleWVkTWFwLnNldCgga2V5LCBvbGRWTik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvbGRVbmtleWVkTGlzdC5wdXNoKCBvbGRWTik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtZWJlciB0aGUgbGVuZ3RoIG9mIHRoZSB1bmtleWVkIGxpc3Q7XHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3RMZW5ndGggPSBvbGRVbmtleWVkTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBhcnJheSBmb3IgVk5EaXNwIG9iamVjdHMgZm9yIG5ldyBub2Rlc1xyXG4gICAgZGlzcC5zdWJOb2RlRGlzcHMgPSBuZXcgQXJyYXkoIG5ld0xlbik7XHJcbiAgICBcclxuICAgIC8vIGxvb3Agb3ZlciBuZXcgbm9kZXNcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdEluZGV4ID0gMDtcclxuICAgIG5ld0NoYWluLmZvckVhY2goIChuZXdWTiwgaW5kZXgpID0+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZFZOOiBWTiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRyeSB0byBsb29rIHVwIHRoZSBvbGQgbm9kZSBieSB0aGUgbmV3IG5vZGUncyBrZXkgaWYgZXhpc3RzXHJcbiAgICAgICAga2V5ID0gbmV3Vk4ua2V5O1xyXG4gICAgICAgIGlmIChrZXkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkS2V5ZWRNYXAuZ2V0KCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgZmluZCB0aGUgb2xkIG5vZGUgYnkgdGhlIGtleSwgcmVtb3ZlIGl0IGZyb20gdGhlIG1hcDsgYWZ0ZXIgdGhlXHJcbiAgICAgICAgICAgIC8vIHJlY29uY2lsaWF0aW9uLCBhbGwgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGlzIG1hcCB3aWxsIGJlIG1hcmtlZCBmb3IgcmVtb3ZhbC5cclxuICAgICAgICAgICAgaWYgKG9sZFZOKVxyXG4gICAgICAgICAgICAgICAgb2xkS2V5ZWRNYXAuZGVsZXRlKCBrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgaW4gdGhlIHVua2V5ZWQgbGlzdCB1c2UgdGhlIG5leHQgb25lXHJcbiAgICAgICAgaWYgKCFvbGRWTiAmJiBvbGRVbmtleWVkTGlzdEluZGV4ICE9IG9sZFVua2V5ZWRMaXN0TGVuZ3RoKVxyXG4gICAgICAgICAgICBvbGRWTiA9IG9sZFVua2V5ZWRMaXN0W29sZFVua2V5ZWRMaXN0SW5kZXgrK107XHJcblxyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzW2luZGV4XSA9IGNyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcCwgbmV3Vk4sIG9sZFZOLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvbGQgbm9kZXMgcmVtYW5pbmcgaW4gdGhlIGtleWVkIG1hcCBhbmQgaW4gdGhlIHVua2V5ZWQgbGlzdCB3aWxsIGJlIHJlbW92ZWRcclxuICAgIGlmIChvbGRLZXllZE1hcC5zaXplID4gMCB8fCBvbGRVbmtleWVkTGlzdEluZGV4IDwgb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG5cclxuICAgICAgICBvbGRLZXllZE1hcC5mb3JFYWNoKCBvbGRWTiA9PiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pKTtcclxuICAgICAgICBmb3IoIGxldCBpID0gb2xkVW5rZXllZExpc3RJbmRleDsgaSA8IG9sZFVua2V5ZWRMaXN0TGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRVbmtleWVkTGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRClcclxuICAgICAgICBidWlsZFN1Yk5vZGVHcm91cHMoIGRpc3ApO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOPzogVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nPzogYm9vbGVhbik6IFZORGlzcFxyXG57XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwID0geyBuZXdWTiB9O1xyXG4gICAgaWYgKCFvbGRWTilcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcbiAgICBlbHNlIGlmIChvbGRWTiA9PT0gbmV3Vk4gfHxcclxuICAgICAgICAoKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nIHx8IG5ld1ZOLmtleSA9PT0gb2xkVk4ua2V5KSAmJiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKSlcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgbm9kZSBjYW4gYmUgdXBkYXRlZCB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIG5ldyBub2RlXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG4gICAgICAgIHN1YkRpc3Aub2xkVk4gPSBvbGRWTjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgbm9kZSBjYW5ub3QgYmUgdXBkYXRlZCwgc28gdGhlIG5ldyBub2RlIHdpbGwgYmUgaW5zZXJ0ZWQgYW5kIHRoZSBvbGQgbm9kZSB3aWxsXHJcbiAgICAgICAgLy8gYmUgcmVtb3ZlZFxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcbiAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3ViRGlzcDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnJvbSBhIGZsYXQgbGlzdCBvZiBuZXcgc3ViLW5vZGVzIGJ1aWxkcyBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgZWl0aGVyXHJcbiAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFN1Yk5vZGVHcm91cHMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG4gICAgLy8gd2UgYXJlIGhlcmUgb25seSBpZiB3ZSBoYXZlIHNvbWUgbnVtYmVyIG9mIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uc1xyXG4gICAgbGV0IGNvdW50ID0gZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoO1xyXG5cclxuICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG4gICAgICAgIC8vIHRoZSBwcmUtZGV0ZXJtaW5lZCB0aHJlc2hvbGRcclxuICAgICAgICBpZiAoY291bnQgPD0gTk9fR1JPVVBfVEhSRVNIT0xEIHx8IGNvdW50ID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGdyb3VwcyBhbmQgY3JlYXRlIHRoZSBmaXJzdCBncm91cCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBub2RlXHJcbiAgICBsZXQgZ3JvdXA6IFZORGlzcEdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBkaXNwLnN1Yk5vZGVEaXNwc1swXS5hY3Rpb24sIDApO1xyXG4gICAgZGlzcC5zdWJOb2RlR3JvdXBzID0gW2dyb3VwXTtcclxuXHJcbiAgICAvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGUgd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXBcclxuICAgIC8vIG9yIHB1dCB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlblxyXG4gICAgLy8gYSBuZXcgb25lLlxyXG4gICAgbGV0IGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG4gICAgbGV0IHN1YkRpc3A6IFZORGlzcDtcclxuICAgIGZvciggbGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKylcclxuICAgIHtcclxuICAgICAgICBzdWJEaXNwID0gZGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcbiAgICAgICAgYWN0aW9uID0gc3ViRGlzcC5hY3Rpb247XHJcbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4LiBEZWNyZW1lbnQgdGhlIGl0ZXJhdGluZyBpbmRleCBzbyB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IGl0ZXJhdGlvbiB3aWxsIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlXHJcbiAgICAgICAgICAgIC8vIHRoYXQgc3RhcnRzIGEgbmV3IGdyb3VwIGJlY2F1c2UgZm9yIHN1Y2ggbm9kZSBkaXNwLmFjdGlvbiA9PT0gZ3JvdXBBY3Rpb24uXHJcbiAgICAgICAgICAgIGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGFuIFwidXBkYXRlXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG4gICAgICAgICAgICAvLyBpdHMgbmV4dCBzaWJsaW5nIGluIHRoZSBuZXcgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbmV4dCBzaWJsaW5nIGluIHRoZSBvbGQgbGlzdC5cclxuICAgICAgICAgICAgLy8gVGhlIGxhc3Qgbm9kZSB3aWxsIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGFmdGVyIHRoZSBsb29wLlxyXG4gICAgICAgICAgICBpZiAoZGlzcC5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gc3ViRGlzcC5vbGRWTi5wcmV2KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgY3VycmVudCBpbmRleC5cclxuICAgICAgICAgICAgICAgIGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBhY3Rpb24sIGkpO1xyXG4gICAgICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcbiAgICAgICAgLy8gbmV4dCBub2RlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIGxhc3QgZ3JvdXBcclxuICAgIGlmIChncm91cCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGdyb3VwLmxhc3QgPSBjb3VudCAtIDE7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB1cGRhdGUgb2YgdGhlIGdpdmVuIG9sZCBub2RlIGZyb20gdGhlIGdpdmVuIG5ldyBub2RlIGlzIHBvc3NpYmxlLiBVcGRhdGVcclxuICogaXMgcG9zc2libGUgaWYgdGhlIHR5cGVzIG9mIG5vZGVzIGFyZSB0aGUgc2FtZSBhbmQgZWl0aGVyIHRoZSBpc1VwZGF0ZVBvc3NpYmxlIG1ldGhvZCBpcyBub3RcclxuICogZGVmaW5lZCBvbiB0aGUgb2xkIG5vZGUgb3IgaXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVcGRhdGVQb3NzaWJsZSggb2xkVk46IFZOLCBuZXdWTjogVk4pOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKG9sZFZOLnR5cGUgPT09IG5ld1ZOLnR5cGUgJiZcclxuXHRcdFx0KG9sZFZOLmlzVXBkYXRlUG9zc2libGUgPT09IHVuZGVmaW5lZCB8fCBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RFcnJvclVJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHJpdmF0ZSByb290Vk46IFJvb3RWTjtcclxuXHRwcml2YXRlIGVycjogYW55O1xyXG5cdHByaXZhdGUgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggcm9vdFZOOiBSb290Vk4sIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucm9vdFZOID0gcm9vdFZOO1xyXG5cdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHR0aGlzLnBhdGhTdHJpbmcgPSBwYXRoID8gcGF0aC5qb2luKCBcIiBcXHUyMTkyIFwiKSA6IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLmVyci5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLnBhdGhTdHJpbmd9PC9kaXY+XHJcblx0XHRcdDxociBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0vPlxyXG5cdFx0XHQ8YnV0dG9uIGNsaWNrPXt0aGlzLm9uUmVzdGFydH0+UmVzdGFydDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzdGFydCA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yb290Vk4ucmVzdGFydCgpO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290V2FpdGluZ1VJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJMb2FkaW5nIC4uLlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge3VwZGF0ZU5vZGVTeW5jLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4vUmVjb25jaWxlclwiXHJcbmltcG9ydCB7RE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Um9vdEVycm9yVUksIFJvb3RXYWl0aW5nVUl9IGZyb20gXCIuL1Jvb3RVSVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFJvb3RWTiBjbGFzcyBpcyB1c2VkIGFzIGEgdG9wLWxldmVsIHZpcnR1YWwgbm9kZSBmb3IgYWxsIHJlbmRlcmVkIHRyZWVzLiBSb290Vk4gc2VydmVzXHJcbi8vIGFzIGFuIGVycm9yIGJvdW5kYXJ5IG9mIGxhc3QgcmVzb3J0LiBXaGVuIGl0IGNhdGNoZXMgYW4gZXJyb3IgdGhhdCB3YXNuJ3QgY2F1Z2h0IGJ5IGFueVxyXG4vLyBkZXNjZW5kYW5kIG5vZGUsIGl0IGRpc3BsYXlzIGEgc2ltcGxlIFVJIHRoYXQgc2hvd3MgdGhlIGVycm9yIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVzdGFydC5cclxuLy8gUm9vdFZOIGFsc28gbWFuYWdlcyBzZXJ2aWNlIHB1Ymxpc2hlcnMgYW5kIHN1YnNjcmliZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFJvb3RWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggYW5jaG9yRE46IEROKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKHN5bmMpXHJcblx0XHRcdHVwZGF0ZU5vZGVTeW5jKCB0aGlzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgYSBjaGFpbiBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLlxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZXJyb3JVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JVSTtcclxuXHRcdGVsc2UgaWYgKHRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy53YWl0aW5nVUk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBvciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChlcnIgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvbWlzZSA9IGVyciBhcyBQcm9taXNlPGFueT47XHJcblx0XHRcdHRoaXMudGhyb3duUHJvbWlzZXMuYWRkKCBwcm9taXNlKTtcclxuXHRcdFx0cHJvbWlzZS50aGVuKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdHByb21pc2UuY2F0Y2goICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0aWYgKCF0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0XHR0aGlzLndhaXRpbmdVSSA9IG5ldyBSb290V2FpdGluZ1VJKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXJyb3JVSSA9IG5ldyBSb290RXJyb3JVSSggdGhpcywgZXJyLCBwYXRoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheXMgdGhlIGNvbnRlbnQgb3JpZ2luYWxseSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHB1YmxpYyByZXN0YXJ0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gYmUgdXBkYXRlZFxyXG5cdFx0dGhpcy5lcnJvclVJID0gdW5kZWZpbmVkO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBmdWxmaWxsZWQgcHJvbWlzZSBmcm9tIG91ciBpbnRlcm5hbCBsaXN0IGFuZCBpZiB0aGUgbGlzdCBpcyBlbXB0eSBhc2tzIHRvXHJcblx0Ly8gcmUtcmVuZGVyXHJcblx0cHJpdmF0ZSBvblByb21pc2VGdWxmaWxsZWQoIHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRocm93blByb21pc2VzLmRlbGV0ZSggcHJvbWlzZSk7XHJcblx0XHRpZiAodGhpcy50aHJvd25Qcm9taXNlcy5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndhaXRpbmdVSSA9IG51bGw7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udGVudCByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZS5cclxuXHRwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSBlcnJvclVJOiBSb290RXJyb3JVSTtcclxuXHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSB3YWl0aW5nVUk6IFJvb3RXYWl0aW5nVUk7XHJcblxyXG5cdC8vIFNldCBvZiBwcm9taXNlcyB0aHJvd24gYnkgZGVzY2VuZGFudCBub2RlcyBhbmQgbm90IHlldCBmdWxmaWxsZWQuXHJcblx0cHJpdmF0ZSB0aHJvd25Qcm9taXNlcyA9IG5ldyBTZXQ8UHJvbWlzZTxhbnk+PigpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBzX21pbWJsQW5jaG9yUHJvcE5hbWUgPSBcIl9fbWltYmxBbmNob3JQcm9wTmFtZV9fXCI7XHJcblxyXG5cclxuXHJcbi8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcbi8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgaW4gYSBzeW5jaHJvbm91cyB3YXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJvb3RTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHQvLyBwcm9wZXJ0eVxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc19taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlIGFuZCB0cmlnZ2VyIHN5bmNocm9ub3VzIHVwZGF0ZVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdFN5bmMuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Um9vdFN5bmMoIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgdHJ1ZSk7XHJcblx0cm9vdFZOLnRlcm0oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG4vLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRSb290KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG5cdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHJvb3Qgbm9kZSByZW1lbWJlcmVkIGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd25cclxuXHQvLyBwcm9wZXJ0eVxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc19taW1ibEFuY2hvclByb3BOYW1lXSA9IHJvb3RWTjtcclxuXHR9XHJcblxyXG5cdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUsIHdoaWNoIHdpbGwgdHJpZ2dlciB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgZmFsc2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290LlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3QoIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzX21pbWJsQW5jaG9yUHJvcE5hbWVdO1xyXG5cclxuXHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdHJvb3RWTi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7c2NoZWR1bGVGdW5jQ2FsbH0gZnJvbSBcIi4vUmVjb25jaWxlclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTY2hlZHVsZXIgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIHNjaGVkdWxpbmcgd3JpdGluZyBzdHlsZS1yZWxhdGVkIGluZm9ybWF0aW5vIHRvXHJcbiAqIHRoZSBET00gdXNpbmcgdGhlIE1pbWJsIHNjaGVkdWxpbmcgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuY2xhc3MgU3R5bGVTY2hlZHVsZXIgaW1wbGVtZW50cyBjc3MuSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBDYWxsYmFjayB0byBjYWxsIHRvIHdyaXRlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIHRoaXMub25VcGRhdGUsIGZhbHNlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRvRE9NVXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyBzdHlsZSBzY2hlZHVsZXIgdXNlZCBieSBNaW1ibCB0byBzY2hlZHVsZSB3cml0aW5nIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWltYmxTdHlsZVNjaGVkdWxlcigpOiBudW1iZXJcclxue1xyXG4gICAgbGV0IHNjaGVkdWxlclR5cGUgPSBjc3MucmVnaXN0ZXJTY2hlZHVsZXIoIG5ldyBTdHlsZVNjaGVkdWxlcigpKTtcclxuICAgIGNzcy5zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JVGV4dFZOXHJcbntcclxuXHQvLyBUZXh0IGZvciBhIHNpbXBsZSB0ZXh0IG5vZGUuXHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcblx0Ly8gVGV4dCBET00gbm9kZVxyXG5cdHB1YmxpYyB0ZXh0Tm9kZTogVGV4dDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlRleHQ7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiI3RleHRcIjsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy50ZXh0Tm9kZTsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIHN1Yi1ub2Rlc1xyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCB0aGlzLnRleHQgIT09IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZS5ub2RlVmFsdWUgPSB0aGlzLnRleHQgPSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0O1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vIFVzZSB0eXBlIEROIHRvIHJlZmVyIHRvIERPTSdzIE5vZGUgY2xhc3MuIFRoZSBET00gbm9kZXMgdGhhdCB3ZSBhcmUgZGVhbGluZyB3aXRoIGFyZVxyXG4vLyBlaXRoZXIgb2YgdHlwZSBFbGVtZW50IG9yIFRleHQuXHJcbmV4cG9ydCB0eXBlIEROID0gTm9kZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTiBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgYXJlIG9wdGlvbmFsbHkgaW1wbGVtZW50ZWQgYnkgYWxsXHJcbiAqIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZOIGV4dGVuZHMgbWltLklWTm9kZVxyXG57XHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHJlYWRvbmx5IHN0YXRzQ2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvKiogTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuICovXHJcblx0ZGVwdGg/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC4gKi9cclxuXHRhbmNob3JETj86IEROO1xyXG5cclxuXHQvKipcclxuXHQgKiBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5IGNhbiBiZSBvZlxyXG5cdCAqIGFueSB0eXBlLlxyXG5cdCAqL1xyXG5cdGtleT86IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cmVuZGVyT25VcGRhdGU/OiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cGFyZW50PzogVk47XHJcblxyXG5cdC8vIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGFzIHBhcnQgb2YgaXRzIHJlbmRlcmluZyB0cmVlLlxyXG5cdGNyZWF0b3I/OiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuXHJcblx0bmV4dD86IFZOO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHByZXY/OiBWTjtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHN1Yk5vZGVzPzogVk5bXTtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWRcclxuXHQvLyBvbmx5IG9uIG5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRtb3VudD8oKTogRE47XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgaW50ZXJuYWwgc3RydWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50XHJcblx0Ly8gb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIEluaXRpYWxpemVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlXHJcblx0Ly8gbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWQgb25seSBvbiBub2Rlc1xyXG5cdC8vIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSByZWxlYXNlIHRoZSBpbnRlcm5hbGx5IGhlbGQgcmVmZXJlbmNlXHJcblx0Ly8gdG8gdGhlIERPTSBub2RlIC0gdGhlIGFjdHVhbCByZW1vdmFsIG9mIHRoZSBub2RlIGZyb20gRE9NIGlzIGRvbmUgYnkgdGhlIGluZnJhc3RydWN0dXJlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR1bm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gSWYgdGhpcyBtZXRob2QgaXNcclxuXHQvLyBub3QgaW1wbGVtZW50ZWQgdGhlIHVwZGF0ZSBpcyBjb25zaWRlcmVkIHBvc3NpYmxlIC0gZS5nLiBmb3IgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aXNVcGRhdGVQb3NzaWJsZT8oIG5ld1ZOOiBWTik6IGJvb2xlYW47XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Y29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhlIG5vZGVcclxuXHQvLyBkb2Vzbid0IHN1cHBvcnQgZXJyb3IgaGFuZGxpbmcuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHN1cHBvcnRzRXJyb3JIYW5kbGluZz8oKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggdm5FcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHByZXBhcmVVcGRhdGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFZOVXBkYXRlRGlzcFxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkUmVuZGVyOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5zaG91bGRDb21taXQgPSBzaG91bGRDb21taXQ7XHJcblx0XHR0aGlzLnNob3VsZFJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIGZhbHNlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIGZhbHNlKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdG9ja1ZhbHVlKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHRyZXR1cm4gc2hvdWxkQ29tbWl0XHJcblx0XHRcdD8gc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuRG9Db21taXROb1JlbmRlclxyXG5cdFx0XHQ6IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLk5vQ29tbWl0Tm9SZW5kZXI7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRkbiA9IGdldEZpcnN0RE4oIHN2bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxhc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcbi8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdFx0aWYgKGRuICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm46IFZOLCBhbmNob3JETjogRE4pOiBETlxyXG57XHJcblx0Ly8gY2hlY2sgaWYgd2UgaGF2ZSBzaWJsaW5nIERPTSBub2RlcyBhZnRlciBvdXIgbGFzdCBzdWItbm9kZSAtIHRoYXQgbWlnaHQgYmUgZWxlbWVudHNcclxuXHQvLyBub3QgY29udHJvbGxlZCBieSBvdXIgY29tcG9uZW50LlxyXG5cdGlmICh2bi5zdWJOb2RlcyAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAwKVxyXG5cdHtcclxuXHRcdGxldCBkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbdm4uc3ViTm9kZXMubGVuZ3RoIC0gMV0pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBkbi5uZXh0U2libGluZztcclxuXHRcdFx0aWYgKG5leHRTaWJsaW5nICE9PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybiBuZXh0U2libGluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBvdXIgbmV4dCBzaWJsaW5nc1xyXG5cdGZvciggbGV0IG52biA9IHZuLm5leHQ7IG52biAhPT0gdW5kZWZpbmVkOyBudm4gPSBudm4ubmV4dClcclxuXHR7XHJcblx0XHRpZiAoIW52bi5hbmNob3JETilcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8gbm90ZSB0aGF0IGdldExhc3RETiBjYWxsIHRyYXZlcnNlcyB0aGUgaGllcmFyY2h5IG9mIG5vZGVzLiBOb3RlIGFsc28gdGhhdCBpdFxyXG5cdFx0Ly8gY2Fubm90IGZpbmQgYSBub2RlIHVuZGVyIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50IGJlY2F1c2UgdGhlIGZpcnN0IGRpZmZlcmVudFxyXG5cdFx0Ly8gYW5jaG9yIGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZCBhcyBhIHdhbnRlZCBub2RlLlxyXG5cdFx0Y29uc3QgZG4gPSBnZXRMYXN0RE4oIG52bik7XHJcblx0XHRpZiAoZG4pXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY3Vyc2UgdG8gb3VyIHBhcmVudCBpZiBleGlzdHNcclxuXHRyZXR1cm4gdm4ucGFyZW50ICYmIHZuLnBhcmVudC5hbmNob3JETiA9PT0gYW5jaG9yRE4gPyBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4ucGFyZW50LCBhbmNob3JETikgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgYXJyYXkgb2Ygbm9kZSBuYW1lcyBzdGFydGluZyB3aXRoIHRoaXMgbm9kZSBhbmQgdXAgdW50aWwgdGhlIHRvcC1sZXZlbCBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vk5QYXRoKCB2bjogVk4pOiBzdHJpbmdbXVxyXG57XHJcblx0bGV0IGRlcHRoID0gdm4uZGVwdGg7XHJcblx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0Zm9yKCBsZXQgaSA9IDAsIG52bjogVk4gPSB2bjsgaSA8IGRlcHRoOyBpKyssIG52biA9IG52bi5wYXJlbnQpXHJcblx0e1xyXG5cdFx0cGF0aFtpXSA9IG52bi5uYW1lICsgKG52bi5jcmVhdG9yICYmIG52bi5jcmVhdG9yLnZuID8gYCAoY3JlYXRlZCBieSAke252bi5jcmVhdG9yLnZuLm5hbWV9KWAgOiBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7cmVxdWVzdE5vZGVVcGRhdGUsIHNjaGVkdWxlRnVuY0NhbGwsIHdyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4vUmVjb25jaWxlclwiXHJcbmltcG9ydCB7bm90aWZ5U2VydmljZVB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVVucHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCwgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZH0gZnJvbSBcIi4vUHViU3ViXCJcclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgaW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbiAgICBsZXQgZ19uZXh0Vk5EZWJ1Z0lEID0gMTtcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQmFzZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZOQmFzZSBpbXBsZW1lbnRzIFZOXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCBuYW1lKCk6IHN0cmluZztcclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIHR5cGU6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOQmFzZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHB1YmxpYyBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBuZXh0OiBWTkJhc2U7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHVibGljIHByZXY6IFZOQmFzZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMgLSBib3RoIGtleWVkIGFuZCB1bmtleWVkIC0gZGVmaW5lZCBvbmx5IGlmIHRoZXJlIGFyZSBzb21lIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXM6IFZOQmFzZVtdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdHB1YmxpYyBrZXllZFN1Yk5vZGVzOiBNYXA8YW55LFZOQmFzZT47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRwdWJsaWMgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5rZXllZFN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5kZXB0aCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBtb3VudGVkICovXHJcblx0cHVibGljIGdldCBpc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYW5jaG9yRE47IH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHR7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBmYWxzZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogbWltLlJlZlByb3BUeXBlLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXJ2aWNlIG9iamVjdHMgcHVibGlzaGVkIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHB1Ymxpc2hlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLGFueT47XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBvYmplY3RzIGNvbnN0aXR1dGluZyBzdWJzY3JpcHRpb25zIG1hZGUgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgc3Vic2NyaWJlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPjtcclxuXHJcbiAgICAvLy8gI2lmIERFQlVHXHJcbiAgICBwcml2YXRlIGRlYnVnSUQgPSBnX25leHRWTkRlYnVnSUQrKztcclxuXHQvLy8gI2VuZGlmXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5TdWJzY3JpYmVkU2VydmljZUluZm8gY2xhc3Mga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24gb2YgYSBub2RlIHRvIGEgc2VydmljZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvXHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIGZpbGxlZCBpbiB3aXRoIHRoZSBzZXJ2aWNlIHZhbHVlXHJcblx0cmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL21pbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSHRtbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdmdUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvTG9jYWxTdHlsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIjtcclxuLy8vICNlbmRpZlxyXG47IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgb2YgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcm9wVHlwZVxyXG57XHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0QXR0ciA9IDEsXHJcblxyXG5cdC8vIEV2ZW50IGxpc3RlbmVycyBzZXQgdXNpbmcgRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXHJcblx0RXZlbnQgPSAyLFxyXG5cclxuXHQvLyBDdXN0b20gYXR0cmlidXRlcyBmb3Igd2hpY2ggaGFuZGxlciBmYWN0b3JpZXMgYXJlIHJlZ2lzdGVyZWRcclxuXHRDdXN0b21BdHRyID0gMyxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBpbnRlcmZhY2UgZGVzY3JpYmluZyBpbmZvcm1hdGlvbiBrZXB0IGFib3V0IHByb3BlcnR5IHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHR0eXBlOiBQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2V0dGluZywgZGlmZmluZywgdXBkYXRpbmcgYW5kXHJcbi8vIHJlbW92aW5nIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUgYW5kIHByb3BWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHRzZXQ/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG5cdC8vIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHVwZGF0ZUZ1bmMgZnVuY3Rpb24uIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHZhbHVlIG9mIHRoZVxyXG5cdC8vIGF0dHJpYnV0ZSB3aWxsIG5vdCBjaGFuZ2UgKHRoYXQgbWVhbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgYXJlIGVxdWFsKS4gSWYgdGhpc1xyXG5cdC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBwcm9wZXJ0eSB2YWx1ZXMgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYW5kIGNvbXBhcmVkIGFzIHN0cmluZ3MuXHJcblx0Ly8gSWYgdGhlc2Ugc3RyaW5ncyBhcmUgZGlmZmVyZW50LCB0aGUgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlICBuZXcgdmFsdWUgaXMgcmV0dXJuZWQuXHJcblx0ZGlmZj86IChhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYmFzZWQgb24gdGhlIG9iamVjdCB0aGF0IHdhcyByZXR1cm5lZFxyXG5cdC8vIGZyb20gdGhlIGRpZmYgZnVuY3Rpb24uIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIHNldCBmdW5jdGlvbiBpcyB1c2VkLiBJZlxyXG5cdC8vIHRoZSBzZXQgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgZWl0aGVyLCB0aGUgRE9NIGVsbS5zZXRBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXNcclxuXHQvLyBhdHRyaWJ1dGUgbmFtZSBhbmQgdXBkYXRlVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0dXBkYXRlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0ucmVtb3ZlQXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lLlxyXG5cdHJlbW92ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlLiBUaGlzIGlzIHNvbWV0aW1lcyBuZWVkZWQgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIGNhbm5vdCBiZVxyXG5cdC8vIHVzZWQgYXMgcHJvcGVydHkgbmFtZSAtIGZvciBleGFtcGxlLCBpZiBhdHRyaWJ1dGUgbmFtZSBjb250YWlucyBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGluXHJcblx0Ly8gVHlwZVNjcmlwdCBpZGVudGlmaWVyIChlLmcuIGRhc2gpLlxyXG5cdGF0dHJOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBidWJibGVzLiBJZiB0aGUgZXZlbnQgZG9lc24ndCBidWJibGUsIHRoZSBldmVudCBoYW5kbGVyXHJcblx0Ly8gbXVzdCBiZSBzZXQgb24gdGhlIGVsZW1lbnQgaXRzZWxmOyBvdGhlcndpc2UsIHRoZSBldmVudCBoYW5kbGVyIGNhbiBiZSBzZXQgb24gdGhlIHJvb3RcclxuXHQvLyBhbmNob3IgZWxlbWVudCwgd2hpY2ggYWxsb3dzIGhhdmluZyBhIHNpbmdsZSBldmVudCBoYW5kbGVyIHJlZ2lzdGVyZWQgZm9yIG1hbnkgZWxlbWVudHMsXHJcblx0Ly8gd2hpY2ggaXMgbW9yZSBwZXJmb3JtYW50LlxyXG5cdGlzQnViYmxpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQXR0clByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBDbGFzcyBvYmplY3QgdGhhdCBjcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuXHJcblx0aGFuZGxlckNsYXNzOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLiAqL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLlxyXG4gKiAgIC0gbnVsbCBhbmQgdW5kZWZpbmVkIGFyZSBjb252ZXJ0ZWQgdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gKiAgIC0gYXJyYXlzIGFyZSBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIHRoZSBlbGVtZW50cyBhbmQgc2VwYXJhdGluZ1xyXG4gKiAgICAgdGhlbSB3aXRoIHNwYWNlcy5cclxuICogICAtIGV2ZXJ5dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGUgdG9TdHJpbmcgbWV0aG9kLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHZhbFRvU3RyaW5nKCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKHZhbCA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0ZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiB2YWw7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHRcdHJldHVybiB2YWwubWFwKCBpdGVtID0+IHZhbFRvU3RyaW5nKGl0ZW0pKS5maWx0ZXIoIGl0ZW0gPT4gISFpdGVtKS5qb2luKFwiIFwiKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLiBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b21cclxuXHQvLyBhdHRyaWJ1dGVzIGlzIGFkZGVkIHRvIHRoaXMgb2JqZWN0IHdoZW4gdGhlIHJlZ2lzdGVyUHJvcGVydHkgbWV0aG9kIGlzIGNhbGxlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRzdHlsZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdHZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmVmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZVZhbHVlUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRjaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdENoZWNrZWQ6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRDaGVja2VkUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cclxuXHRcdC8vIGV2ZW50c1xyXG5cdFx0YWJvcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25pdGVyYXRpb246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhdXhjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ymx1cjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5dGhyb3VnaDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xvc2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvbnRleHRtZW51OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjdWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRibGNsaWNrOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdC8vZHJhZ2V4aXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ292ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJvcDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHVyYXRpb25jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVtcHRpZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVuZGVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Zm9jdXM6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGdvdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRpbnB1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW52YWxpZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5ZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5cHJlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRkYXRhOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRtZXRhZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb3N0cG9pbnRlcmNhcHR1cmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdG1vdXNlbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZW1vdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNldXA6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBhdXNlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5aW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmVudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3ZlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcnVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwcm9ncmVzczogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmF0ZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmVzZXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2l6ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Nyb2xsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVrZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlZWtpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlbGVjdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3RhbGxlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VibWl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzdXNwZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0aW1ldXBkYXRlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b2dnbGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2htb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9ucnVuOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHZvbHVtZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2FpdGluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2hlZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5lcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y29weTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXN0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBwcm9wVmFsKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBuZXdQcm9wVmFsKSk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHVwZGF0ZVZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIFN0eWxlc2V0IG9iamVjdCBmcm9tIHRoZSBNaW1jc3MgbGlicmFyeS4gSWYgdGhlIG9sZCBhbmQgbmV3IHN0eWxlIHByb3BlcnR5IHZhbHVlcyBhcmUgb2ZcclxuLy8gZGlmZmVyZW50IHR5cGVzIHRoZSBkaWZmIGZ1bmN0aW9uIHJldHVybnMgdGhlIG5ldyBzdHlsZSB2YWx1ZS4gSWYgYm90aCBhcmUgb2YgdGhlIHN0cmluZyB0eXBlLFxyXG4vLyB0aGVuIHRoZSBuZXcgc3RyaW5nIHZhbHVlIGlzIHJldHVybmVkLiBJZiBib3RoIGFyZSBvZiB0aGUgQ1NTU3R5bGVEZWNsYXJhdGlvbiB0eXBlLCB0aGVuIGFuXHJcbi8vIG9iamVjdCBpcyByZXR1cm5lZCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gc3R5bGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgY2hhbmdlZC4gRm9yIHVwZGF0ZWRcclxuLy8gaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgZnJvbSB0aGUgbmV3IHN0eWxlIHZhbHVlOyBmb3IgcmVtb3ZlZCBpdGVtcywgdGhlIGtleSB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogY3NzLlN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0Y3NzLnNldEVsZW1lbnRTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCBwcm9wVmFsLCBjc3MuU2NoZWR1bGVyVHlwZS5TeW5jKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlN0eWxlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogY3NzLlN0eWxlc2V0LCBuZXdQcm9wVmFsOiBjc3MuU3R5bGVzZXQpOiBhbnlcclxue1xyXG5cdGxldCByZXMgPSBjc3MuZGlmZlN0eWxlc2V0cyggb2xkUHJvcFZhbCwgbmV3UHJvcFZhbCk7XHJcblxyXG5cdC8vIHdlIGhhdmUgdG8gcmV0dXJuIHVuZGVmaW5lZCBiZWNhdXNlIG51bGwgaXMgY29uc2lkZXJlZCBhIHZhbGlkIHVwZGF0ZSB2YWx1ZVxyXG5cdHJldHVybiByZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJlcztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBjc3MuU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRjc3Muc2V0RWxlbWVudFN0cmluZ1N0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHVwZGF0ZVZhbCwgY3NzLlNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRhdHRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGV4dGVuZHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdCAqIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ICovXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8qKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFdmVudFNsb3QgY2xhc3MgZGVmaW5lcyBhbiBldmVudCB3aXRoIGN1c3RvbSBwYXJhbWV0ZXJzIGFzIG1lbWJlcnMgb2YgY2xhc3NlcyB3aXRob3V0IHRoZVxyXG4gKiBuZWVkIGZvciB0aGUgY2xhc3NlcyB0byBkZXJpdmUgZnJvbSBFdmVudFRhcmdldCBhbmQgdXNlIHN0cmluZyBuYW1lcyBmb3IgZXZlbnRzLiBNdWx0aXBsZVxyXG4gKiBsaXN0ZW5lcnMgY2FuIGJlIGFkZGVkL3JlbW92ZWQgdG8vZnJvbSBhbiBldmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj4gaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXI8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEludGVyZmFjZSBhbmQgY2xhc3MgZm9yIHNpbXBsZSBldmVudHMgYWNjZXB0aW5nIG5vIHBhcmFtZXRlcnMuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIElFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3QgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGUgVFxyXG4gKiBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3Q8KCkgPT4gdm9pZD47XHJcbiAqICAgICBjaGFuZ2U6IElFdmVudFNsb3QobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdDxUW1BdPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90T3duZXIgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGVcclxuICogVCBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90T3duZXI8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogSUV2ZW50U2xvdE93bmVyPCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90T3duZXIobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90T3duZXI8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgd2lsbCBoYXZlIGV2ZW50IHNsb3RzIGZvciBlYWNoIHByb3BlcnR5IG9mIHRoZSB0ZW1wbGF0ZSB0eXBlIFQuIFRoZVxyXG4gKiBjYWxsZXIgd2lsbCBiZSB0aGUgb3duZXIgb2YgdGhlIGV2ZW50IHNsb3RzOyB0aGF0IGlzLCBpdCB3aWxsIGJlIGFibGUgdG8gZmlyZSBldmVudHMgYW5kXHJcbiAqIGNsZWFyIGFsbCBsaXN0ZW5lcnMgd2hlbiBuZWNlc3NhcnkuIFRoaXMgYWxsb3dzIHRoZSBmb2xsb3dpbmcgY29kZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogXHJcbiAqIGludGVyZmFjZSBJTXlDbGFzc1xyXG4gKiB7XHJcbiAqICAgICBldmVudHM6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz47XHJcbiAqICAgICBkb1NvbWV0aGluZygpOiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBjbGFzcyBNeUNsYXNzIGltcGxlbWVudHMgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgcHJpdmF0ZSBfZXZlbnRzID0gY3JlYXRlTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPigpO1xyXG4gKiAgICAgcHVibGljIGdldCBldmVudHMoKTogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB7IHJldHVybiB0aGlzLl9ldmVudHM7IH1cclxuICogXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICogXHJcbiAqIGxldCBvYmo6IElNeUNsYXNzID0gbmV3IE15Q2xhc3MoKTtcclxuICogb2JqLmV2ZW50cy5jaGFuZ2UuYWRkKCAobjogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyhuKSk7XHJcbiAqIG9iai5kb1NvbWV0aGluZygpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4oKTogTXVsdGlFdmVudFNsb3RPd25lcjxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBQcm94eSgge30sIG5ldyBNdWx0aUV2ZW50U2xvdEhhbmRsZXIoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBwcm94eSBoYW5kbGVyIGZvciB0aGUgTXVsdGlFdmVudFNsb3Qgb2JqZWN0LiBUaGUgaGFuZGxlciBkb2Vzbid0IHVzZSBhbnlcclxuICogdGFyZ2V0IG9iamVjdCAtIGl0IHNpbXBseSBjcmVhdGVzIEV2ZW50U2xvdCBwcm9wZXJ0eSBpbiBpdHNlbGYgd2hlbmV2ZXIgdGhlIGdldCBtZXRob2QgaXNcclxuICogY2FsbGVkLiBUaGUgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tpbmcgZW5zdXJlcyB0aGF0IG9ubHkgcHJvcGVyIGV2ZW50IHNsb3QgbmFtZXMgY2FuIGJlIHVzZWQuXHJcbiAqL1xyXG5jbGFzcyBNdWx0aUV2ZW50U2xvdEhhbmRsZXJcclxue1xyXG5cdHB1YmxpYyBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBzdHJpbmcsIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiB0aGlzW3Byb3BdID0gbmV3IEV2ZW50U2xvdCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR2F0aGVyaW5nIHVwZGF0ZSBzdGF0aXN0aWNzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gQ2F0ZWdvcmllcyBvZiBjaGFuZ2VkIGVudGl0aWVzIHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LlxyXG5leHBvcnQgZW51bSBTdGF0c0NhdGVnb3J5XHJcbntcclxuXHRSb290LFxyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJEZXB0aCBlbnVtZXJhdGlvbiBkZWZpbmVzIHBvc3NpYmxlIHdheXMgb2YgaG93IHRyaWdnZXJzIGRlYWwgd2l0aCBjb250YWluZXIgZGF0YTtcclxuICogdGhhdCBpcywgb2JqZWN0cywgYXJyYXlzLCBtYXBzIGFuZCBzZXRzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gKiB0aGlzIGVudW1lcmF0aW9uIGlzIGlycmVsZXZhbnQuXHJcbiAqL1xyXG5lbnVtIFRyaWdnZXJEZXB0aFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgY2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFyZSBoYW5kbGVkLiBBY3Rpb25zIG9mIGFkZGluZywgcmVtb3ZpbmcgYW5kIG1vZGlmeWluZ1xyXG4gICAgICogaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBhcmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVmFsdWUgPSAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiB0aGUgaW1tZWRpYXRlIGNvbnRhaW5lciBpdGVtcyBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZlxyXG4gICAgICogYWRkaW5nIGFuZCByZW1vdmluZyBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGNhdXNlIGNoYW5nZSB0byBiZSB0cmlnZ2VycmVkOyBob3dldmVyIGFjdGlvbnNcclxuICAgICAqIG9mIG1vZGlmeWluZyBpdGVtcyB0aGVtc2VsZnMgYXJlIGlnbm9yZWQuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIFNoYWxsb3cgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiBpdGVtcyBvbiBhbGwgbGV2ZWxzIGFyZSBoYW5kbGVkLiBJdGVtcyBhZGRlZCB0byB0aGVcclxuICAgICAqIGNvbnRhaW5lciBhcmUgY29udmVydGVkIHRvIGRlZXAgdHJpZ2dlcnMuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIERlZXAgPSAxMDAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZGVwdGggd2l0aCB0aGUgZ2l2ZW4gaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlnZ2VyPFQgPSBhbnk+KCBkZXB0aDogbnVtYmVyLCB2PzogVCk6IElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgVHJpZ2dlciggZGVwdGggPCAwID8gMCA6IGRlcHRoLCB2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBrZWVwcyBhIHZhbHVlIGFuZCBub3RpZmllcyBhbGwgYXR0YWNoZWQgd2F0Y2hlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyPFQgPSBhbnk+IGltcGxlbWVudHMgSVRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGRlcHRoPzogbnVtYmVyLCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCggdjogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh2ID09PSB0aGlzLnYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gcmVhZFxyXG4gICAgcHVibGljIG5vdGlmeVJlYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBtYW5hZ2VyIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkLiBXZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlclxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgYXR0YWNoZWQgdG8gb3VyIHRyaWdnZXI7XHJcbiAgICBwdWJsaWMgbm90aWZ5Q2hhbmdlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFZhbHVlIGJlaW5nIGdldCBhbmQgc2V0XHJcbiAgICBwcml2YXRlIHY6IFQ7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHdhdGNoaW5nIG92ZXIgdGhpcyB0cmlnZ2VyJ3MgdmFsdWUuIFRoaXMgbWVtYmVyIHNlcnZlcyBhcyBhIHN0b3JhZ2UgaW5zdGVhZFxyXG4gICAgLy8gb2YgaGF2aW5nIHRoZSBtYW5hZ2VyIHRvIG1hcCBvZiB0cmlnZ2VycyB0byB0aGUgc2V0IG9mIHdhdGNoZXJzLlxyXG4gICAgcHVibGljIHdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXYXRjaGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVdhdGNoZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcblxyXG4gICAgLy8gLyoqIFNldHMgYSByZXNwb25kZXIgZnVuY3Rpb24gKi9cclxuICAgIC8vIHNldFJlc3BvbmRlciggcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIHJlc3BvbmRlclRoaXM/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGtlZXAgYSB3YXRjaGVyIG9iamVjdCBhdHRhY2hlZCB0byB0aGUgd2F0Y2hlciBmdW5jdGlvbi5cclxuICovXHJcbmxldCBzeW1XYXRjaGVyID0gU3ltYm9sKCBcInN5bVdhdGNoZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2F0Y2hlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gcmVndWxhciBmdW5jdGlvbi4gV2hlbiB0aGVcclxuICogd2F0Y2hlciBmdW5jdGlvbiBpcyBpbnZva2VkIGl0IGludm9rZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCBpdCBub3RpY2VzIGFsbCB0cmlnZ2VyIG9iamVjdHNcclxuICogdGhhdCB3ZXJlIHJlYWQgZHVyaW5nIGl0cyBleGVjdXRpb24uIFdoZW4gYW55IG9mIHRoZXNlIHRyaWdnZXIgb2JqZWN0cyBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkLCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSB3YXRjaGVkXHJcbiAqIEBwYXJhbSByZXNwb25kZXIgRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHZhbHVlcyBvZiB0aGUgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkIGR1cmluZ1xyXG4gKiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24ncyBsYXN0IGV4ZWN1dGlvbiBjaGFuZ2UuXHJcbiAqIEBwYXJhbSBmdW5jVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHJlc3BvbmRlclRoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYyxcclxuICAgIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KTogSVdhdGNoZXI8VD5cclxue1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hlckZ1bmMoLi4uYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlcjogV2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3YXMgbm90IHN1cHBsaWVkIGJ1dCBub3cgd2hlbiB0aGVcclxuICAgICAgICAvLyB3YXRjaGVyIGV4ZWN1dGVzLCBcInRoaXNcIiBpcyBkZWZpbmVkLCB3ZSByZW1lbWJlciBpdC5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leGVjdXRlKCB0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIHRoZSB3YXRjaGVyIG9iamVjdCBpbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZiB1c2luZyBhIHN5bWJvbC5cclxuICAgIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdID0gbmV3IFdhdGNoZXIoIGZ1bmMsIHJlc3BvbmRlciwgZnVuY1RoaXMsIHJlc3BvbmRlclRoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgICh3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgd2F0Y2hlciAmJiB3YXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhdGNoZXIgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWRcclxuICogZHVyaW5nIGEgZnVuY3Rpb24gZXhlY3V0aW9uLiBXaGVuIHRoZSB0cmlnZ2VyIG9iamVjdHMgYXJlIHJlYWQsIHRoZXkgYXJlIHJlbWVtYmVyZWQgYnkgdGhlXHJcbiAqIFdhdGNoZXIgb2JqZWN0LiBXaGVuZXZlciBhIHZhbHVlIGlzIGNoYW5nZWQgaW4gYW55IG9mIHRoZXNlIHRyaWdnZXJzLCB0aGUgd2F0Y2hlciBvYmplY3QgaXNcclxuICogbm90aWZpZWQgYW5kIGNhbGxzIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSByZXNwb25kZXI7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICAvLyBpZiByZXNwb25kZXIgXCJ0aGlzXCIgaXMgbm90IGRlZmluZWQgdXNlIHRoZSBvbmUgZm9yIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IHJlc3BvbmRlclRoaXMgPyByZXNwb25kZXJUaGlzIDogZnVuY1RoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2hpbGUgdXBkYXRpbmcgdGhlIHNldCBvZiBhdHRhY2hlZCB0cmlnZ2Vycy4gVGhlIFwiZnVuY1RoaXNcIlxyXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBcInRoaXNcIiB1bmRlciB3aGljaCB0aGUgaW50ZXJuYWwgd2F0Y2hlciBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQuIEl0XHJcbiAgICAgKiB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBcInRoaXNcIiB0byBhcHBseSB3aGVuIGludm9raW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpZiBpdCB3YXNuJ3RcclxuICAgICAqIHNldCB5ZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgd2F0Y2hlciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyVGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGN1cnJlbnQgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbGwgb3VyIHdhdGNoZXIgYXQgdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICBnX21hbmFnZXIucHVzaFdhdGNoZXIoIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciB3YXRjaGVyIGZyb20gdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLnBvcFdhdGNoZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB3YXRjaGVyIHRoYXQgaXQgc2hvdWxkIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi4gVGhpcyBvY2N1cnMgd2hlbiB0aGVyZVxyXG4gICAgLy8gYXJlIHRyaWdnZXJzIHdob3NlIHZhbHVlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgcHVibGljIHJlc3BvbmQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZC4gSXQgY2FuIGhhcHBlbiBpZiBhZnRlciBhbGwgbXV0YXRpb25cclxuICAgICAgICAvLyBzY29wZXMgZXhpdGVkIHRoZSBtYW5hZ2VyIG5vdGlmaWVzIG11bHRpcGxlIHdhdGNoZXJzIGFuZCBvbmUgb2YgdGhlIHdhdGNoZXJzJyByZXNwb25kZXJcclxuICAgICAgICAvLyBkaXNwb3NlcyBvZiBhbm90aGVyIHdhdGNoZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbmRlci5hcHBseSggdGhpcy5yZXNwb25kZXJUaGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgc3RhdGUgb2YgdGhlIHdhdGNoZXIsIHNvIHRoYXQgaXQgaXMgZGV0YWNoZWQgZnJvbSBhbnkgdHJpZ2dlcnMgYW5kIGlzIHJlbW92ZWRcclxuICAgICAqIGZyb20gdGhlIG1hbmFnZXIncyBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW4oKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRldGFjaGVzIHRoaXMgd2F0Y2hlciBmcm9tIGFsbCB0aGUgdHJpZ2dlcnMgYW5kIHRoZSB0cmlnZ2VycyBmcm9tIHRoaXMgd2F0Y2hlci5cclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goIHRyaWdnZXIgPT4gdHJpZ2dlci53YXRjaGVycy5kZWxldGUoIHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGFzayB0aGUgbWFuYWdlciB0byBmb3JnZXQgYWJvdXQgdGhpcyB3YXRjaGVyIGlmIGl0IGlzIGN1cnJlbnRseSBpbiB0ZSBkZWZlcnJlZCBzZXRcclxuICAgICAgICBnX21hbmFnZXIucmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3YXRjaGVkOyB0aGF0IGlzLCBkdXJpbmcgd2hpY2ggd2Ugc2hvdWxkIGxpc3RlbiB0byB0cmlnZ2VycyBiZWluZyByZWFkLCBzb1xyXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVtZW1iZXIgdGhlbSBhbmQgbGF0ZXIgcmVzcG9uZCB3aGVuIHRoZXkgbm90aWZ5IHRoYXQgdGhlaXIgdmFsdWVzIGhhdmUgYmVlblxyXG4gICAgLy8gY2hhbmdlZC5cclxuICAgIHByaXZhdGUgZnVuYzogVDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHRoZSB2YWx1ZSBvZiBvbmUgb2YgdGhlIHRyaWdnZXJzIGNoYW5nZXNcclxuICAgIHByaXZhdGUgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmM7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHJlc3BvbmRlciBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlclRoaXM6IGFueTtcclxuXHJcbiAgICAvLyBTZXQgb2YgdHJpZ2dlcnMgY3VycmVudGx5IGJlaW5nIHdhdGNoZWQgYnkgdGhpcyB3YXRjaGVyLiBUaGlzIG1lbWViZXIgaXMgdXNlZCBieSB0aGVcclxuICAgIC8vIG1hbmFnZXIuIEl0IGlzIGVzc2VudGlhbGx5IGEgc3RvcmFnZSwgd2hpY2ggaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBtYW5hZ2VyIGhhdmluZyBhXHJcbiAgICAvLyBtYXAgb2Ygd2F0Y2hlcnMgdG8gdGhlIHNldHMgb2YgdHJpZ2dlcnMuIFRoZSBwdXJwb3NlIG9mIGtub3dpbmcgd2hhdCB0cmlnZ2VycyBhcmUgdXNlZFxyXG4gICAgLy8gYnkgd2hhdCB3YXRjaGVyIGlzIHRvIHJlbW92ZSB0aGUgd2F0Y2hlciBmcm9tIGFsbCB0aGVzZSB0cmlnZ2VycyBiZWZvcmUgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICAgIHB1YmxpYyB0cmlnZ2VycyA9IG5ldyBTZXQ8VHJpZ2dlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWFuYWdlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIGZ1bmN0aW9uYWxpdHlcclxuICogb2YgdGhlIHRyaWdnZXItd2F0Y2hlciBtZWNoYW5pc20uIEl0IGluY2x1ZGVzIGEgc3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuICogdGhlaXIgZnVuY3Rpb25zIGFuZCB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIHRvIGJlIHJlYWQuIFdoZW4gYSB0cmlnZ2VyIG9iamVjdCBpcyBiZWluZ1xyXG4gKiByZWFkICh0aGF0IGlzIGl0cyBnZXQoKSBtZXRob2QgaXMgY2FsbGVkKSwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIG5vdGlmaWVkLCBiZWNhdXNlXHJcbiAqIHRoZXkgYWxsIGRlcGVuZCBvbiB0aGUgdHJpZ2dlciBvYmplY3QncyB2YWx1ZSBmb3IgdGhlaXIgZnVuY3Rpb25hbGl0eS5cclxuICogXHJcbiAqIEl0IGFsc28gbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50IG9mIG11dGF0aW9uIHNjb3BlcyBhbmQgaGFuZGxlcyBub3RpZnlpbmcgd2F0Y2hlcnMgb2ZcclxuICogbXV0YXRpb25zIG9ubHkgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBoYXMgZXhpdGVkLiBUaGUgdHJpZ2dlcnMgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVyc1xyXG4gKiBkaXJlY3RseTsgaW5zdGVhZCwgdGhleSBub3RpZnkgdGhlIG1hbmFnZXIsIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBhbmQgbm90aWZpZXMgYWxsXHJcbiAqIHRoZSB3YXRjaGVycyBvbmNlIG91dCBvZiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIFRyaWdnZXJXYXRjaGVyTWFuYWdlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyB0aGUgZ2l2ZW4gd2F0Y2hlciBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnB1c2goIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgY3VycmVudGx5IG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BXYXRjaGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGZyb20gdGhlIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5kZWxldGUoIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5wYWlyZWQgY2FsbCB0byBleGl0TXV0YXRpb25TY29wZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKC0tdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0aGlzLmRlZmVycmVkV2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21wdXRlZCB0cmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXB1dGVkVHJpZ2dlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIElUcmlnZ2VyPFQ+LCBJRGlzcG9zZXJcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgY29tcHV0ZWQgdHJpZ2dlciBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgY2FsY3VsYXRlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIHdpdGggYW5cclxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4oIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBUcmlnZ2VyRGVwdGguVmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIHRoZSB3YXRjaGVyIHVudGlsIHRoZSBnZXQgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIHdhdGNoZXIgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMucmVzcG9uZGVyLCB0aGlzLmZ1bmNUaGlzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gb3VyIHdhdGNoZXIgaXMgbm90aWZpZWQgb2YgY2hhbmdlcyBpbiBpdHMgdHJpZ2dlciB2YWx1ZXMuIFdlXHJcbiAgICAgKiByZXNwb25kIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiAodGhyb3VnaCB0aGUgd2F0Y2hlcikgYW5kIHNldHRpbmcgaXRzIHJldHVybiB2YWx1ZSBhc1xyXG4gICAgICogb3VyIG5ldyB2YWx1ZS4gVGhpcyBjYW4gdHJpZ2dlciBjaGFuZ2VzIGluIHdhdGNoZXJzIHRoYXQgYXJlIHVzaW5nIG91ciB2YWx1ZS4gTm90ZSB0aGF0XHJcbiAgICAgKiB3ZSBvbmx5IGludm9rZSBvdXIgd2F0Y2hlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciB0aGF0IHdhdGNoZXMgb3VyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB3ZSB3aWxsIGJlIHdhdGNoaW5nXHJcbiAgICBwcml2YXRlIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPjtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBvdmVyIG91ciBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI8Tm9uZVR5cGVGdW5jPFQ+PjtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgdmFsdWUgIGtlcHQgYnkgdGhlIHRyaWdnZXIgbWlnaHQgbm90IHJlZmxlY3QgdGhlIGFjdHVhbCBjb21wdXRlZFxyXG4gICAgLy8gdmFsdWUuIFRoaXMgZmxhZyBpcyB0cnVlIHVuZGVyIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcclxuICAgIC8vIDEuIFJpZ2h0IGFmdGVyIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZC4gV2UgZG9uJ3QgZXZlbiBjcmVhdGUgdGhlIHdhdGNoZXIgYmVjYXVzZSB3ZVxyXG4gICAgLy8gICAgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAvLyAyLiBXaGVuIHRoZSByZXNwb25kZXIgaGFzIGJlZW4gaW52b2tlZCwgYnV0IG91ciB0cmlnZ2VyIGRpZG4ndCBoYXZlIGFueSB3YXRjaGVyLiBBZ2Fpbiwgd2VcclxuICAgIC8vICAgIHdpbGwgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICBwcml2YXRlIGlzU3RhbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE11dGF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTXV0YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgbXV0YXRvciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIG11dGF0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltTXV0YXRvciA9IFN5bWJvbCggXCJzeW1NdXRhdG9yXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG11dGF0b3IgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXNcclxuICogdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2l0aGluIGEgbXV0YXRpb24gc2NvcGUuIFdhdGNoZXJzIGZvciB0cmlnZ2VycyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQgZHVyaW5nIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBub3Qgbm90aWZpZWQgaW1tZWRpYXRlbHkuIEluc3RlYWQsIHRoZSB3YXRjaGVyc1xyXG4gKiBhcmUgXCJkZWZlcnJlZFwiIGFuZCB3aWxsIGJlIG5vdGlmaWVkIG9ubHkgb25jZSBhZnRlciB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVGhpcyBjYW4gYmVcclxuICogdXNlZnVsIHNpbmNlIHVzdWFsbHkgd2F0Y2hlcnMgZGVwZW5kIG9uIG1hbnkgdHJpZ2dlcnMgYW5kIHdlIGRvbid0IHdhbnQgdGhlIHdhdGNoZXJzIGJlaW5nXHJcbiAqIG5vdGlmaWVkIG1hbnkgdGltZSBidXQgcmF0aGVyIG9ubHkgb25jZSBhZnRlciBhbGwgdGhlIGNoYW5nZXMgaGF2ZSBiZWVuIGRvbmUuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGFyb3VuZCB3aGljaCB0byBlc3RhYmxpc2ggYSBtdXRhdGlvbiBzY29wZS4gSWYgdGhpcyBpcyBhIGNsYXNzIG1ldGhvZCxcclxuICogdGhlbiBlaXRoZXIgcHJvdmlkZSB0aGUgZnVuY1RoaXMgcGFyYW1ldGVyIG9yIGJpbmQgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IGluLiBOb3RlXHJcbiAqIHRoYXQgYXJyb3cgZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGJvdW5kLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgVGhlIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyBhbiB1bmJvdW5kY2xhc3MgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSk6IElNdXRhdG9yPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIG11dGF0b3JGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG11dGF0b3I6IFdhdGNoZXIgPSBtdXRhdG9yRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIG11dGF0b3IuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbXV0YXRvciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXSA9IG5ldyBNdXRhdG9yKCBmdW5jLCBmdW5jVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKG11dGF0b3JGdW5jIGFzIElNdXRhdG9yKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yID0gbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICBtdXRhdG9yICYmIG11dGF0b3IuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIG11dGF0b3JGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXV0YXRvciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgZXhlY3V0aW5nIGEgd3JhcHBlZCBmdW5jdGlvbiB1bmRlciBhXHJcbiAqIG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTXV0YXRvcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGluIGEgbXV0YXRpb24gc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgbXV0YXRvciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICB0cnkgeyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTsgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2VyaXppbmcgY29udGFpbmVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGdpdmVuIHRyaWdnZXIgZGVwdGggYW5kIG9uIHRoZSB2YWx1ZSB0eXBlLCBlaXRoZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBpZlxyXG4gKiBpdCBpcyBhIGNvbnRhaW5lciAob2JqZWN0LCBhcnJheSwgbWFwIG9yIHNldCksIHJldHVybnMgYSBwcm94eSB0byB0aGUgdmFsdWUgdGhhdCBrbm93cyB0b1xyXG4gKiBub3RpZnkgcmVhZCBhbmQgY2hhbmdlIHdoZW4gaXRzIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlIGludm9rZWQuXHJcbiAqIEBwYXJhbSB2IFZhbHVlIHRvIGNvbnZlcnQgaWYgbmVjZXNzYXJ5XHJcbiAqIEBwYXJhbSB0cmlnZ2VyIFRyaWdnZXIgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gcmVhZCBvciBjaGFuZ2UgZXZlbnRzIG9jY3VyIGluIHRoZSBjb252ZXJ0ZWRcclxuICogdmFsdWVzXHJcbiAqIEBwYXJhbSBkZXB0aCBUaGUgZGVwdGggb24gdGhlIGxldmVsIChzdGFydGluZyBmcm9tIHRoZSB0cmlnZ2VyKXRoYXQgY2FsbGVkIHRoaXMgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIDAsIG5vIGNvbnZlcnNpb24gb2NjdXJzIGFuZCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQgYXMgaXMuIFdoZW4gdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBjYWxsZWQgZnJvbSB0aGUgdHJpZ2dlciwgdGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVuZGVmaW5lZDogaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIGFzc2lnbiB0aGVcclxuICogZGVwdGggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS4gQXJyYXlzLCBtYXBzIGFuZCBzZXRzIGdldCBkZXB0aHMgb2YgU2hhbGxvdygxKSxcclxuICogbWVhbmluZyB0aGF0IG9wZXJhdGlvbnMgdGhhdCBhZGQgb3IgcmVtb3ZlIGl0ZW1zIHdpbGwgdHJpZ2dlciBldmVudHMsIGJ1dCBtb2RpZmljYXRpb25zIHRvIHRoZVxyXG4gKiBpdGVtcyB3aWxsIG5vdC4gT2JqZWN0cyBnZXQgdGhlIGRlcHRoIG9mIERlZXAgKDEwMDApLCB3aGljaCBlc3NlbnRpYWxseSBtZWFucyB0aGF0IGFueSBjaGFuZ2VzXHJcbiAqIHRvIHRoZSBvYmplY3QgcHJvcGVydGllcyBvbiBhbnkgbGV2ZWwgd2lsbCB0cmlnZ2VyIGV2ZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJyaXplPFQgPSBhbnk+KCB2OiBULCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aD86IG51bWJlcik6IFRcclxue1xyXG4gICAgaWYgKCF2IHx8IGRlcHRoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTWFwSGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2IGluc3RhbmNlb2YgU2V0KVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoIHYsIG5ldyBTZXRIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT09IE9iamVjdClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLkRlZXApIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IGhhbmRsZXJzLlxyXG4gKi9cclxuY2xhc3MgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KCB0YXJnZXQsIHByb3AsIHRyaWdnZXJyaXplKCB2YWx1ZSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCBhdHRyczogUHJvcGVydHlEZXNjcmlwdG9yKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgcHJvcCwgYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0YXJnZXQsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXh0ZW5zaWJsZSggdGFyZ2V0OiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0LCBwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oIFJlZmxlY3QuZW51bWVyYXRlKCB0YXJnZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvd25LZXlzKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gVGhlIHRyaWdnZXIgb2JqZWN0IHdoaWNoIHNob3VsZCBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gaXRzIHdhdGNoZXJzIHdoZW4gcmVhZHMgb3IgY2hhbmdlc1xyXG4gICAgLy8gb2NjdXIgXHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogVHJpZ2dlcjtcclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBhcnJheXMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBBcnJheUhhbmRsZXIgZXh0ZW5kcyBOb25TbG90Q29udGFpbmVySGFuZGxlclxyXG4vLyB7XHJcbi8vICAgICBnZXQoIHRhcmdldDogQXJyYXk8YW55PiwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4vLyAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEhhbmRsZXIgZm9yIG9uIHBsYWluIG9iamVjdHMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBPYmplY3RIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzaGFsbG93IE1hcC9TZXQgaGFuZGxlcnMuIE1ldGhvZHMgd2hvc2UgbmFtZXMgd2VyZSBzdXBwbGllZCBpbiB0aGUgY29uc3RydWN0b3IsXHJcbiAqIG5vdGlmeSBjaGFuZ2U7IGFsbCBvdGhlciBtZXRob2RzIG5vdGlmeSByZWFkLlxyXG4gKiBcclxuICogRm9yIE1hcCBhbmQgU2V0IGluIG9yZGVyIHRvIGJlIHByb3hpZWQsIHRoZSBtZXRob2RzIHJldHVybmVkIGZyb20gZ2V0KCkgbXVzdCBiZVxyXG4gKiBib3VuZCB0byB0aGUgdGFyZ2V0LiBTZWUgaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vcHJveHkjYnVpbHQtaW4tb2JqZWN0cy1pbnRlcm5hbC1zbG90cy5cclxuICovXHJcbmNsYXNzIFNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PiwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMubXV0YXRvck1ldGhvZE5hbWVzID0gbXV0YXRvck1ldGhvZE5hbWVzO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBjb250YWluZXIgbWV0aG9kcyBhbmQgcHJvcGVydGllcy4gV2UgYWx3YXlzIG5vdGlmeSByZWFkIGFuZCB3ZSB3cmFwIG1ldGhvZHMgaW5cclxuICAgIC8vIGZ1bmN0aW9ucyB0aGF0IHdoZW4gY2FsbGVkIHdpbGwgbm90aWZ5IGVpdGhlciByZWFkIG9yIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGVcclxuICAgIC8vIG1ldGhvZCBpcyBhIG11dGF0b3IuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcblxyXG4gICAgICAgIC8vIGluIHRoaXMgY29udGV4dCBcInRoaXNcIiBpcyB0aGUgaGFuZGxlcjsgaG93ZXZlciwgd2hlbiB0aGUgbWV0aG9kcyB3ZSByZXR1cm4gYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHRoZSBcInRoaXNcIiB3aWxsIGJlIHRoZSBQcm94eSBvYmplY3QuIFRoZXJlZm9yZSwgd2Ugd2FudCB0aGVzZSBtZXRob2RzIHRvIGNhcHR1cmUgYW5kXHJcbiAgICAgICAgLy8gdXNlIHRoZSBoYW5kbGVyIG9iamVjdC5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBtZXRob2QgaXMgYWxyZWFkeSBpbiBvdXIgaW50ZXJuYWwgbWFwXHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMud3JhcHBlZE1ldGhvZHMuZ2V0KCBwcm9wKTtcclxuICAgICAgICBpZiAoIW1ldGhvZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgdGFyZ2V0XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gdGFyZ2V0W3Byb3BdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BWYWwgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCB0aGUgb3JpZ2luYWwgbWV0aG9kIHRvIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBvcmdCb3VuZE1ldGhvZCA9IHByb3BWYWwuYmluZCggdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0b3JNZXRob2ROYW1lcy5oYXMocHJvcCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBtdXRhdG9yIG1ldGhvZHMgd2UgY3JlYXRlIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgaW52b2tlcyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2gga25vd3MgYWJvdXQgdGhlIHN0cnVjdHVyZSBvZiB0aGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2lsbCBjcmVhdGUgcHJveGllcyBmb3IgdGhlIGFwcHJvcHJpYXRlIG9iamVjdHMgaWYgbmVlZGVkLiBUaGlzIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgYWxzbyBpbmRpY2F0ZSB3aGV0aGVyIGFuIGFjdHVhbCBjaGFuZ2Ugb2NjdXJzIHNvIHRoYXQgd2UgY2FuIG5vdGlmeSBhYm91dCBpdC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldDogW2FueSwgYm9vbGVhbl0gPSBoYW5kbGVyLmNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQsIHByb3AsIG9yZ0JvdW5kTWV0aG9kLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG9yZ0JvdW5kTWV0aG9kKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub24tbXV0YXRvciBtZXRob2RzLCB3ZSBub3RpZnkgdGhlIHJlYWQgYW5kIGludm9rZSB0aGUgb3JpZ2luYWwgbWV0aG9kLlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZnVuY3Rpb24oKTogYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlZE1ldGhvZHMuc2V0KCBwcm9wLCBtZXRob2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCB0aGF0IG11c3QgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgZGVyaXZlZCBjbGFzc2VzIGFuZCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZ1xyXG4gICAgICogYSBtdXV0YXRvciBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLGZhbHNlXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBTZXQgb2YgbWV0aG9kIG5hbWVzLCB3aGljaCBtdXRhdGUgdGhlIGNvbnRhaWVyLiBBbGwgb3RoZXIgbWV0aG9kcyBvbmx5IHJlYWQgZnJvbSBpdC5cclxuICAgIHByaXZhdGUgbXV0YXRvck1ldGhvZE5hbWVzOiBTZXQ8UHJvcGVydHlLZXk+O1xyXG5cclxuICAgIC8vIFRoaXMgbWFwIGtlZXBzIGFscmVhZHkgd3JhcHBlZCBtZXRob2RzIHNvIHRoYXQgd2UgZG9uJ3QgZG8gYmluZGluZyBtb3JlIHRoYW4gb25jZS4gXHJcbiAgICBwcml2YXRlIHdyYXBwZWRNZXRob2RzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSxGdW5jdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3IgbWFwcy5cclxuICovXHJcbmNsYXNzIE1hcEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJjbGVhclwiLCBcImRlbGV0ZVwiLCBcInNldFwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIE1hcEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG1hcC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInNldFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gW29yZ01ldGhvZCggYXJnc1swXSwgdHJpZ2dlcnJpemUoIGFyZ3NbMV0sIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCkpLCB0cnVlXTtcclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2V0cy5cclxuICovXHJcbmNsYXNzIFNldEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJhZGRcIiwgXCJkZWxldGVcIiwgXCJjbGVhclwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIFNldEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIHNldC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJhZGRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIHRyaWdnZXJyaXplKCBhcmdzWzBdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVjb3JhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgc28gdGhhdCBjaGFuZ2luZyB0aGVpciB2YWx1ZSB3aWxsIGFueSB3YXRjaGVyXHJcbiAqIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlbSB0byByZXNwb25kLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXJgIGRlc2lnbmF0ZXMgYSBkZWZhdWx0IHRyaWdnZXIgZGVjb3JhdG9yLCB3aG9zZSBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgdHlwZTogU2hhbGxvdyBmb3IgYXJyYXlzLCBtYXBzIGFuZCBzZXRzIGFuZCBEZWVwIGZvciBvYmplY3RzLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXIobilgIGRlc2lnbmF0ZXMgYSB0cmlnZ2VyIGRlY29yYXRvciBmYWN0b3J5IHdpdGggdGhlIHNwZWNpZmllZCBkZXB0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKCB0YXJnZXRPckRlcHRoOiBhbnksIG5hbWU/OiBzdHJpbmcpOiBhbnlcclxue1xyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXRPckRlcHRoID09PSBcIm51bWJlclwiKVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSBudW1iZXIgdGhhdCBpdCBpcyBhbiBleHBsaWNpdGx5IHNwZWNpZmllZCBkZXB0aCB1c2luZ1xyXG4gICAgICAgIC8vIGRlY29yYXRvciBmYWN0b3J5LlxyXG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyLmJpbmQoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdW5kZWZpbmVkIGRlcHRoIG1lYW5zIHRoYXQgdGhhdCB0aGUgYWN0dWFsIGRlcHRoIHdpbGwgYmUgYXNzaWduZWQgZGVwZW5kaWcgb24gdGhlXHJcbiAgICAgICAgLy8gdmFsdWUgb2YgdGhlIHRyaWdnZXI6IFNoYWxsb3cgZm9yIG1hcHMsIHNldHMgYW5kIGFycmF5cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlciggdW5kZWZpbmVkLCB0YXJnZXRPckRlcHRoLCBuYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBgQHRyaWdnZXJgIGRlY29yYXRvcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyKCBkZXB0aDogbnVtYmVyLCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKCBuYW1lICsgXCJfdHJpZ2dlclwiKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoLCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT2JqLnNldCggdmFsKVxyXG4gICAgICAgIH0sXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgXCJnZXRcIiBwcm9wZXJ0aWVzIG9yIGZ1bmN0aW9ucyByZXR1bmluZyBhIHZhbHVlIHNvIHRoYXQgdGhpc1xyXG4gKiB2YWx1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVjYWxjdWxhdGVkIGlmIGFueSB0cmlnZ2VycyBvbiB3aGljaCB0aGlzIHZhbHVlIGRlcGVuZHMgaGF2ZSB0aGVpclxyXG4gKiB2YWx1ZXMgY2hhbmdlZC4gV0hlbiB0aGlzIGhhcHBlbnMsIHRoZSB3YXRjaGVyIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBjb21wdXRlZCB2YWx1ZSB3aWxsXHJcbiAqIGJlIG5vdGlmaWVkIHRvIHJlc3BvbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIHByb3BEZXNjcjogUHJvcGVydHlEZXNjcmlwdG9yKVxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUpO1xyXG5cclxuICAgIC8vIHByb3BEZXNjLnZhbHVlIGlzIHVuZGVmaW5lZCBmb3IgYWNjZXNzb3JzIGFuZCBkZWZpbmVkIGZvciBmdW5jdGlvbnNcclxuICAgIGlmICghcHJvcERlc2NyLnZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghcHJvcERlc2NyLmdldClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQGNvbXB1dGVkIHByb3BlcnR5IHJlcXVpcmVzIGdldCgpIGFjY2Vzc29yXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3JnR2V0ID0gcHJvcERlc2NyLmdldDtcclxuICAgICAgICBwcm9wRGVzY3IuZ2V0ID0gZnVuY3Rpb24oKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdHZXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcERlc2NyLnNldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcmdTZXQgPSBwcm9wRGVzY3Iuc2V0O1xyXG4gICAgICAgICAgICBwcm9wRGVzY3Iuc2V0ID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgb3JnU2V0LmNhbGwoIHRoaXMsIHYpOyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JnRnVuYyA9IHByb3BEZXNjci52YWx1ZTtcclxuICAgICAgICBwcm9wRGVzY3IudmFsdWUgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb21wYXJlKCBvMTogYW55LCBvMjogYW55KTogYm9vbGVhblxyXG57XHJcblx0aWYgKG8xID09PSBvMilcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKG8xID09IG51bGwgJiYgbzIgPT0gbnVsbClcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdGVsc2UgaWYgKG8xID09IG51bGwgfHwgbzIgPT0gbnVsbClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbzEgIT09IHR5cGVvZiBvMilcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbzEgPT09IFwib2JqZWN0XCIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKCFkZWVwQ29tcGFyZSggbzFbcF0sIG8yW3BdKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEocCBpbiBvMSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkpXHJcblx0e1xyXG5cdFx0aWYgKG8xLmxlbmd0aCAhPT0gbzIubGVuZ3RoKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSAwLCBsZW4gPSBvMS5sZW5ndGg7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghZGVlcENvbXBhcmUoIG8xW2ldLCBvMltpXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXNlIGFyZSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucyBvciBmdW5jdGlvbnMgYW5kIHRoZXkgYXJlIGRpZmZlcmVudFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hPYmplY3QoIG86IGFueSk6IG51bWJlclxyXG57XHJcblx0aWYgKG8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybiAwO1xyXG5cdGVsc2UgaWYgKG8gPT09IG51bGwpXHJcblx0XHRyZXR1cm4gMTtcclxuXHRlbHNlIGlmIChpc05hTigwKSlcclxuXHRcdHJldHVybiAyO1xyXG5cdGVsc2UgaWYgKG8gPT09IHRydWUpXHJcblx0XHRyZXR1cm4gMztcclxuXHRlbHNlIGlmIChvID09PSBmYWxzZSlcclxuXHRcdHJldHVybiA0O1xyXG5cclxuXHRsZXQgaCA9IDEwO1xyXG5cclxuXHRpZiAodHlwZW9mIG8gPT09IFwibnVtYmVyXCIpXHJcblx0XHRyZXR1cm4gMTAgKyBvO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8pO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4gaGFzaFN0cmluZyggby5uYW1lKTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8pKVxyXG5cdHtcclxuXHRcdGxldCBsZW4gPSBvLmxlbmd0aDtcclxuXHRcdGxldCBoID0gMTAgKyBsZW47XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0XHQgaCArPSBpICsgaGFzaE9iamVjdCggb1tpXSk7XHJcblx0XHRyZXR1cm4gaDtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBoID0gMTA7XHJcblx0XHRmb3IoIGxldCBwIGluIG8pXHJcblx0XHRcdGggKz0gaGFzaFN0cmluZyhwKSArIGhhc2hPYmplY3Qob1twXSk7XHJcblx0XHRyZXR1cm4gaDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hTdHJpbmcoIHM6IHN0cmluZyk6IG51bWJlclxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIDU7XHJcblxyXG5cdGxldCBsZW4gPSBzLmxlbmd0aDtcclxuXHRsZXQgaCA9IDEwICsgbGVuO1xyXG5cdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcblx0XHRoICs9IHMuY2hhckNvZGVBdChpKTtcclxuXHRyZXR1cm4gaDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbi8vIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXM6IChzdHJpbmcgfCBzdHJpbmdbXSlbXSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHJlc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHRmb3IoIGxldCBjbGFzc05hbWUgb2YgY2xhc3NOYW1lcylcclxuXHR7XHJcblx0XHRpZiAoIWNsYXNzTmFtZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0Ly8gcGFyc2UgdGhlIGNsYXNzIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0bGV0IGNsYXNzTmFtZUFzU3RyaW5nOiBzdHJpbmcgPSB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0PyBjbGFzc05hbWUgYXMgc3RyaW5nXHJcblx0XHRcdFx0OiAoY2xhc3NOYW1lIGFzIHN0cmluZ1tdKS5qb2luKCBcIiBcIik7XHJcblxyXG5cdFx0aWYgKHJlc0NsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXNDbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXNDbGFzc05hbWUgKz0gXCIgXCI7XHJcblxyXG5cdFx0cmVzQ2xhc3NOYW1lICs9IGNsYXNzTmFtZUFzU3RyaW5nO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc0NsYXNzTmFtZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbi8vIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdCAtIGV2ZW4gaWYgZW1wdHlcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzKCAuLi5zdHlsZXM6IFN0eWxlc2V0W10pOiBTdHlsZXNldFxyXG57XHJcblx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRsZXQgcmVzU3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblx0bWVyZ2VTdHlsZXNUbyggcmVzU3R5bGUsIC4uLnN0eWxlcyk7XHJcblx0cmV0dXJuIHJlc1N0eWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlOiBTdHlsZXNldCwgLi4uc3R5bGVzOiAoU3R5bGVzZXQgfCBzdHJpbmcpW10gKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgc3R5bGUgb2Ygc3R5bGVzKVxyXG5cdHtcclxuXHRcdGlmICghc3R5bGUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBzdHlsZSBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBzdHlsZU9iajogU3R5bGVzZXQgPSB0eXBlb2Ygc3R5bGUgPT09IFwib2JqZWN0XCJcclxuXHRcdFx0XHQ/IHN0eWxlIGFzIFN0eWxlc2V0XHJcblx0XHRcdFx0OiBwYXJzZVN0eWxlU3RyaW5nKCBzdHlsZSBhcyBzdHJpbmcpO1xyXG5cclxuXHRcdC8vIGNvcHkgYWxsIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0ZWggY3VycmVudCBzdHlsZSBvYmplY3QgdG8gb3VyIHJlc3VsdGFudCBvYmplY3RcdFx0XHRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlT2JqKVxyXG5cdFx0XHRyZXNTdHlsZVtwcm9wTmFtZV0gPSBzdHlsZU9ialtwcm9wTmFtZV07XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBhcnNlcyB0aGUgZ2l2ZW4gc3R5bGUgc3RyaW5nIGludG8gdGhlIFN0eWxlIG9iamVjdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3R5bGVTdHJpbmcoIHM6IHN0cmluZyk6IFN0eWxlc2V0XHJcbntcclxuXHRpZiAoIXMpXHJcblx0XHRyZXR1cm4ge307XHJcblxyXG5cdGxldCByZXRTdHlsZTogU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0bGV0IGVsbXM6IHN0cmluZ1tdID0gcy5zcGxpdChcIjtcIik7XHJcblx0Zm9yKCBsZXQgZWxtIG9mIGVsbXMpXHJcblx0e1xyXG5cdFx0bGV0IHBhaXI6IHN0cmluZ1tdID0gZWxtLnNwbGl0KCBcIjpcIik7XHJcblx0XHRpZiAoIXBhaXIgfHwgcGFpci5sZW5ndGggPT09IDAgfHwgcGFpci5sZW5ndGggPiAyKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRyZXRTdHlsZVtkYXNoVG9DYW1lbCggcGFpclswXS50cmltKCkpXSA9IHBhaXJbMV0udHJpbSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJldFN0eWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG4gKiBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXMoIC4uLnNsaWNlczogbWltLlNsaWNlW10pOiBtaW0uU2xpY2Vcclxue1xyXG5cdGxldCByZXNTbGljZTogbWltLlNsaWNlID0ge307XHJcblx0bWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcblx0cmV0dXJuIHJlc1NsaWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4vLyBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogbWltLlNsaWNlLCAuLi5zbGljZXM6IG1pbS5TbGljZVtdKTogdm9pZFxyXG57XHJcblx0aWYgKHJlc1NsaWNlID09PSB1bmRlZmluZWQgfHwgcmVzU2xpY2UgPT09IG51bGwpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGZvciggbGV0IHNsaWNlIG9mIHNsaWNlcylcclxuXHR7XHJcblx0XHRpZiAoIXNsaWNlKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRpZiAoc2xpY2Uuc3R5bGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnN0eWxlID0ge307XHJcblxyXG5cdFx0XHRtZXJnZVN0eWxlc1RvKCByZXNTbGljZS5zdHlsZSwgc2xpY2Uuc3R5bGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5jbGFzc05hbWUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gbWVyZ2VDbGFzc2VzKCByZXNTbGljZS5jbGFzc05hbWUgYXMgc3RyaW5nLCBzbGljZS5jbGFzc05hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLnByb3BzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UucHJvcHMgPSB7fTtcclxuXHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNsaWNlLnByb3BzKVxyXG5cdFx0XHRcdHJlc1NsaWNlW3Byb3BOYW1lXSA9IHNsaWNlW3Byb3BOYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY29udGVudClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLmNvbnRlbnQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gc2xpY2UuY29udGVudDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KCByZXNTbGljZS5jb250ZW50KSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgb2xkQ29udGVudDogYW55ID0gcmVzU2xpY2UuY29udGVudDtcclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQgPSBbXTtcclxuXHRcdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggb2xkQ29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIHNsaWNlLmNvbnRlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9