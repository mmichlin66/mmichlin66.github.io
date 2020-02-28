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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Base component class.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const FuncProxyVN_1 = __webpack_require__(/*! ../core/FuncProxyVN */ "./src/core/FuncProxyVN.ts");
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
const PromiseProxyVN_1 = __webpack_require__(/*! ./PromiseProxyVN */ "./src/core/PromiseProxyVN.ts");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./src/core/Scheduler.ts");
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
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.unlinkNodeFromFunc();
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
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

/***/ "./src/core/PromiseProxyVN.ts":
/*!************************************!*\
  !*** ./src/core/PromiseProxyVN.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
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
    /////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
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
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        return this.content;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.watchPromise();
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
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
    watchPromise() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.content = yield this.promise;
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
        });
    }
}
exports.PromiseProxyVN = PromiseProxyVN;


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
// Class-based component whose rendering tree is currently being processed.
exports.s_currentClassComp = null;
// Callback that is called on a new UI cycle when there is a need to update UI components
function updateNodeSync(vn) {
    // increment tick number.
    s_currentTick++;
    //////////////////
    let oldStats = Stats_1.DetailedStats.stats;
    Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${s_currentTick}: `);
    Stats_1.DetailedStats.stats.start();
    ///////////
    let vns = new Array(1);
    vns[0] = [vn];
    s_schedulerState = SchedulerState.Update;
    performCommitPhase(performRenderPhase(vns));
    //////////////////
    Stats_1.DetailedStats.stats.stop(true);
    Stats_1.DetailedStats.stats = oldStats;
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
        path[i] = nvn.name + (nvn.creator && nvn.creator.vn ? ` (created by ${nvn.creator.vn.name})` : "");
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
__export(__webpack_require__(/*! ./utils/EventSlot */ "./src/utils/EventSlot.ts"));


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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Qcm9taXNlUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1B1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZORGlzcC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9taW1ibFR5cGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRXZlbnRTbG90LnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N0YXRzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1N2Z0VsbXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxzRUFBaUM7QUFrQ2pDLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRiw4RkFBOEY7QUFDOUYsa0dBQWtHO0FBQ2xHLGdGQUFnRjtBQUNoRixFQUFFO0FBQ0YsbUdBQW1HO0FB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UUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFckIsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSztnQkFDL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFDakI7WUFDQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUztnQkFDakMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUVsQztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3JDO29CQUNDLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFwREQsc0NBb0RDIiwiZmlsZSI6Im1pbWJsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltYmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tXCIuLi91dGlscy9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL2FwaS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogbWltLlN0eWxlUHJvcFR5cGUpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IG1pbS5TdHlsZVByb3BUeXBlKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIEZvciBtYW5hZ2VkIGNvbXBvbmVudHMsIHRoZSBwcm9wZXJ0aWVzXHJcblx0ICogY2FuIGFsc28gYmUgc2V0IChjaGFuZ2VkKSB3aGVuIHRoZSBjb21wb25lbnQncyBwYXJlbnQgaXMgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRwcm9wcz86IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogdXNlZCBpcyB0aGUgY29tcG9uZW50J3MgY2xhc3MgY29uc3RydWN0b3IgbmFtZS4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYmVmb3JlXHJcblx0ICogdGhlIHZpcnR1YWwgbm9kZSBpcyBhdHRhY2hlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzLCBnZXRzIG9yIGNsZWFycyB0aGUgdmlydHVhbCBub2RlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50LiBUaGlzIHByb3BlcnR5IGlzIHNldCB0d2ljZTpcclxuXHQgKiAgMS4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lOiB0aGUgY29tcG9uZW50IG11c3QgcmVtZW1iZXIgdGhlXHJcblx0ICogICAgcGFzc2VkIG9iamVjdC5cclxuXHQgKiAgMi4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkOiBudWxsIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIGNvbXBvbmVudCBtdXN0XHJcblx0ICogICAgcmVsZWFzZSB0aGUgcmVtZW1iZXJlZCBvYmplY3QuXHJcblx0ICovXHJcblx0dm4/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gcmVuZGVyIGl0cyBjb250ZW50IGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBtZXRob2RcclxuXHQgKiBpcyBjYWxsZWQgd2hlbiB0aGUgdmlydHVhbCBub2RlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXNcclxuXHQgKiBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUPiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzLl9yID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIGNoYW5nZXMuICovXHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZW1vdmVzIGEgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgd2l0aCBhZGRMaXN0ZW5lci4gKi9cclxuXHRwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBnZXQgcigpOiBUIHsgcmV0dXJuIHRoaXMuX3I7IH1cclxuXHJcblx0LyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBzZXQgciggbmV3UmVmOiBUKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9yICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3IgPSBuZXdSZWY7XHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmZpcmUoIG5ld1JlZik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogQ2xlYXJzIHRoZSByZWZlcmVuY2UgdmFsdWUgYW5kIGFsc28gY2xlYXJzIGFsbCBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuX3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5jbGVhcigpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGVcclxuLy8gLy8gUmVmPD4gaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbi8vIC8vXHJcbi8vIC8vXHRjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbi8vIC8vXHR7XHJcbi8vIC8vXHRcdEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAvL1x0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbi8vIC8vXHR9XHJcbi8vIC8vXHJcbi8vIC8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBmaXJzdCBhY2Nlc3NlZC4gVGhlXHJcbi8vIC8vIGFjdHVhbCBvYmplY3Qgd2lsbCBiZSBhIFByb3h5IHRvIFJlZjw+IG9mIHRoZSBnaXZlbiB0eXBlIChIVE1MRGl2RWxlbWVudCBpbiB0aGlzIGNhc2UpLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0LCBuYW1lKVxyXG4vLyB7XHJcbi8vIFx0ZnVuY3Rpb24gcmVmR2V0KCBvYmosIGtleSlcclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnJba2V5XTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIHJlZlNldCggb2JqLCBrZXksIHZhbCwgcmVjZWl2ZXIpOiBib29sZWFuXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdG9iai5yID0gdmFsO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRvYmoucltrZXldID0gdmFsO1xyXG5cclxuLy8gXHRcdHJldHVybiB0cnVlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gZW5zdXJlUHJveHkoIHRoaXNPYmo6IGFueSwgYXR0ck5hbWU6IHN0cmluZyk6IGFueVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBwcm94eSA9IHRoaXNPYmpbYXR0ck5hbWVdO1xyXG4vLyBcdFx0aWYgKCFwcm94eSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0cHJveHkgPSBuZXcgUHJveHkoIG5ldyBSZWY8YW55PigpLCB7IGdldDogcmVmR2V0LCBzZXQ6IHJlZlNldCB9KTtcclxuLy8gXHRcdFx0dGhpc09ialthdHRyTmFtZV0gPSBwcm94eTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJldHVybiBwcm94eTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCBhdHRyTmFtZSA9IFwiX3JlZl9cIiArIG5hbWU7XHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHNldCggdmFsKSB7IGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSkuciA9IHZhbDsgfSxcclxuLy8gXHRcdFx0Z2V0KCkgeyByZXR1cm4gZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKTsgfVxyXG4vLyBcdFx0fVxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGxldCByZWZPYmogPSByZWYgYXMgUmVmPFQ+O1xyXG5cdFx0aWYgKG9ubHlJZiA9PT0gdW5kZWZpbmVkIHx8IHJlZk9iai5yID09PSBvbmx5SWYpXHJcblx0XHRcdHJlZk9iai5yID0gdmFsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHQocmVmIGFzIFJlZkZ1bmM8VD4pKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgcHJvcGVydGllcyB3aXRoIGEgc2V0IG1ldGhvZCB0aGF0IGNhbGxzIHRoZSB1cGRhdGVNZSBtZXRob2RcclxuICogd2hlbmV2ZXIgdGhlIHByb3BlcnR5IHZhbHVlIGNoYW5nZXMuXHJcbiAqXHRgYGB0c3hcclxuICpcdGNsYXNzIENoaWxkIGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqXHR7XHJcbiAqXHRcdEBtaW0udXBkYXRhYmxlIHRleHQ6IHN0cmluZyA9IFwiSGVsbG8hXCI7XHJcbiAqXHRcdHJlbmRlcigpXHJcbiAqXHRcdHtcclxuICpcdCBcdFx0cmV0dXJuIDxkaXY+e3RleHR9PC9kaXY+XHJcbiAqXHRcdH1cclxuICpcdH1cclxuICpcclxuICpcdGNsYXNzIFBhcmVudCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRjaGlsZCA9IG5ldyBDaGlsZCgpO1xyXG4gKlx0XHRyZW5kZXIoKVxyXG4gKlx0XHR7XHJcbiAqXHRcdFx0cmV0dXJuIDxkaXYgY2xpY2s9eygpID0+IHRoaXMuY2hpbGQudGV4dCArPSBcIiBhZ2FpblwifT57dGhpcy5jaGlsZH08L2Rpdj5cclxuICpcdFx0fVxyXG4gKlx0fVxyXG4gKlx0YGBgXHJcbiAqIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgQ2hpbGQgY29tcG9uZW50IHdpbGwgYmUgcmUtcmVuZGVyZWQgd2hlbiBpdHMgYHRleHRgIHByb3BlcnR5IGNoYW5nZXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGFibGUoIHRhcmdldCwgbmFtZTogc3RyaW5nKVxyXG57XHJcblx0bGV0IGF0dHJOYW1lID0gXCJfbV9cIiArIG5hbWU7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcblx0XHR7XHJcblx0XHRcdHNldCggdmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpc1thdHRyTmFtZV0gPSB2YWw7XHJcblx0XHRcdFx0XHRsZXQgdm46IElWTm9kZSA9IHRoaXMudm47XHJcblx0XHRcdFx0XHRpZiAodm4gJiYgIXZuLnVwZGF0ZVJlcXVlc3RlZClcclxuXHRcdFx0XHRcdFx0dGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXQoKSB7IHJldHVybiB0aGlzW2F0dHJOYW1lXTsgfVxyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIERlZmluZXMgdHlwZXMgb2YgdmlydHVhbCBET00gbm9kZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5UeXBlXHJcbntcclxuXHQvKiogVG9wLWxldmVsIG5vZGUgKi9cclxuXHRSb290LFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXcgKi9cclxuXHRJbmRlcGVuZGVudENvbXAsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWCAqL1xyXG5cdE1hbmFnZWRDb21wLFxyXG5cclxuXHQvKiogU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpICovXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8qKiBET00gZWxlbWVudCAoSFRNTCBvciBTVkcpIGxhaWQgb3V0IHVzaW5nIEpTWC4gKi9cclxuXHRFbG0sXHJcblxyXG5cdC8qKiBUZXh0IG5vZGUgKi9cclxuXHRUZXh0LFxyXG5cclxuXHQvKiogV3JhcHBlciBhcm91bmQgYSBmdW5jdGlvbi9tZXRob2QgdGhhdCBjYW4gYmUgdXBkYXRlZCBpbmRlcGVuZGVudGx5LiAqL1xyXG5cdEZ1bmNQcm94eSxcclxuXHJcblx0LyoqIE5vZGUgdGhhdCB3YWl0cyBmb3IgYSBwcm9taXNlIHRvIGJlIHNldHRsZWQgYW5kIHRoZW4gZGlzcGxheXMgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGNvbnRlbnQuICovXHJcblx0UHJvbWlzZVByb3h5LFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlLiBUaHJvdWdoIHRoaXMgaW50ZXJmYWNlLCBjYWxsZXJzIGNhbiBwZXJmb3JtXHJcbiAqIG1vc3QgY29tbW9uIGFjdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIG9uIGV2ZXJ5IHR5cGUgb2YgdmlydHVhbCBub2RlLiBFYWNoIHR5cGUgb2YgdmlydHVhbCBub2RlXHJcbiAqIGFsc28gaW1wbGVtZW50cyBhIG1vcmUgc3BlY2lmaWMgaW50ZXJmYWNlIHRocm91Z2ggd2hpY2ggdGhlIHNwZWNpZmljIGNhcGFiaWxpdGllcyBvZiB0aGUgbm9kZVxyXG4gKiB0eXBlIGFyZSBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgbm9kZSB0eXBlLiAqL1xyXG5cdHJlYWRvbmx5IHR5cGU6IFZOVHlwZTtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHBhcmVudD86IElWTm9kZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHJlYWRvbmx5IGNyZWF0b3I/OiBJQ29tcG9uZW50O1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgbmV4dD86IElWTm9kZTtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuICovXHJcblx0cmVhZG9ubHkgcHJldj86IElWTm9kZTtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzPzogSVZOb2RlW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgbm9kZSdzIGRpc3BsYXkgbmFtZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3IgcmVwb3J0aW5nLiBUaGUgbmFtZVxyXG5cdCAqIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSwgaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiXHJcblx0ICogcHJvcGVydHkgb2YgYW4gZWxlbWVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cmVhZG9ubHkgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQgKiBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuICovXHJcblx0dW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU3Vic2NyaWJlcyB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQgKiBieSB0aGlzIG9yIG9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0O1xyXG5cdCAqIG90aGVyd2lzZSwgdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpblxyXG5cdCAqIHVuZGVmaW5lZC4gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSB0aGlzIG9yIGEgY2xvc2VzdFxyXG5cdCAqIGFuY2VzdG9yIGNvbXBvbmVudCBpcyBjaGFuZ2VkLHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIFRoZSB1c2VTZWxmIG9wdGlvbmFsIHBhcmFtZXRlciBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBjYW4gc3Vic2NyaWJlIHRvIHRoZVxyXG5cdCAqIHNlcnZpY2UgcHVibGlzaGVkIGJ5IGl0c2VsZi4gVGhlIGRlZmF1bHQgaXMgZmFsc2UuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSByZWYgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdHN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgcmVmOiBSZWZQcm9wVHlwZTxJU2VydmljZURlZmluaXRpb25zW0tdPixcclxuXHRcdFx0XHRcdGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlXHJcblx0ICogd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKi9cclxuXHR1bnN1YnNjcmliZVNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdCAqIGNvbXBvbmVudCBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQgKiB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlIFxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmIFxyXG5cdCAqL1xyXG5cdGdldFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLFxyXG5cdFx0XHRcdFx0dXNlU2VsZj86IGJvb2xlYW4pOiBJU2VydmljZURlZmluaXRpb25zW0tdO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWFuYWdlZENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWFuYWdlZENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbmRlcGVuZGVudENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2xpY2UgdHlwZSBkZWZpbmVzIGFuIG9iamVjdCBzdHJ1Y3R1cmUgZGVzY3JpYmluZ1xyXG4gKiBwYXJhbWV0ZXJzIGZvciByZW5kZXJpbmcgYW4gZWxlbWVudC4gVGhleSBpbmNsdWRlOiBDbGFzcywgU3R5bGUsIFByb3BlcnRpZXMsIENvbnRlbnQuIFRoaXNcclxuICogc3RydWN0dXJlIGlzIGludGVuZGVkIHRvIGJlIHBhc3NlZCBlaXRoZXIgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIHZpYSB0aGUgcHJvdGVjdGVkIG1ldGhvZHMgb2ZcclxuICogZGVyaXZlZCBjbGFzc2VzLCBzbyB0aGF0IHRoZXkgY2FuIGNvbnRyb2wgcGFyYW1ldGVycyBvZiBlbGVtZW50cyByZW5kZXJlZCBieSB0aGUgdXBwZXIgY2xhc3Nlcy5cclxuICogVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIHN0cnVjdHVyZSBpcyB0byBjb21iaW5lIHBhcmFtZXRlcnMgZGVmaW5pbmcgYW4gZWxlbWVudCBpbnRvIGEgc2luZ2xlXHJcbiAqIG9iamVjdCB0byBtaW5pbWl6ZSB0aGUgbnVtYmVyIG9mIHByb3BlcnRpZXMgY2FsbGVycyBvZiBjbGFzc2VzIHNob3VsZCBkZWFsIHdpdGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZSA9XHJcbntcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBTdHlsZVByb3BUeXBlO1xyXG5cdHByb3BzPzogb2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUeXBlIGZvciB0aGUgYHN0eWxlYCBlbGVtZW50IHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3R5bGVQcm9wVHlwZSA9IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIERPTSBldmVudHMgb2YgdHlwZSBULlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gKGU6IFQpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIG9iamVjdCB0aGF0IHdpbGwgYmUgYm91bmQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgaGFuZGxlclxyXG4gKiBpcyBpbnZva2VkLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3RdO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCB0aGUgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnRcclxuICogaGFuZGxlciBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlIGNhcHR1cmUgKHRydWUpIG9yIHRvIHRoZSBidWJibGUgKGZhbHNlKSBwaGFzZS5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgYm9vbGVhbl07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUsIG9iamVjdCB0aGF0IHdpbGwgYmUgYm91bmQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgaGFuZGxlclxyXG4gKiBpcyBpbnZva2VkIGFuZCB0aGUgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgaGFuZGxlciBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlXHJcbiAqIGNhcHR1cmUgKHRydWUpIG9yIHRvIHRoZSBidWJibGUgKGZhbHNlKSBwaGFzZS5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdCwgYm9vbGVhbl07XHJcblxyXG4vKipcclxuICogVW5pb24gdHlwZSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYW4gRWxlbWVudCdzIGV2ZW50LlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRQcm9wVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gRXZlbnRGdW5jVHlwZTxUPiB8IEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQ+IHxcclxuXHRcdFx0XHRFdmVudEZ1bmNBbmRGbGFnVHlwZTxUPiB8IEV2ZW50RnVuY0FuZFRoaXNBbmRGbGFnVHlwZTxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIHByb3BlcnR5IHR5cGVzIHVzZWQgYnkgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGNvbG9yIHZhbHVlcyBmb3IgZGlmZmVyZW50IHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2xvclByb3BUeXBlID0gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgZWxlbWVudCBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Ly8gc3RhbmRhcmQgSFRNTCBhbmQgU1ZHIGVsZW1lbnQgcHJvcGVydGllc1xyXG5cdGNsYXNzPzogc3RyaW5nXHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXI7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVQcm9wVHlwZTtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5vZGVbXSB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9uIG9mIG1pbS5qc3ggZnVuY3Rpb24gLSBKU1ggRmFjdG9yeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtjcmVhdGVOb2Rlc0Zyb21KU1h9IGZyb20gXCIuLi9jb3JlL0NvbnRlbnRGdW5jc1wiXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogYGBganNvblxyXG4gKiBcImNvbXBpbGVyT3B0aW9uc1wiOlxyXG4gKiB7XHJcbiAqICAgICBcImpzeFwiOiBcInJlYWN0XCIsXHJcbiAqICAgICBcImpzeEZhY3RvcnlcIjogXCJtaW0uanN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlIGV4cG9ydGVkIGZ1bmN0aW9uLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtFbG1BdHRyLCBQcm9wVHlwZX0gZnJvbSBcIi4uL3V0aWxzL0VsbUF0dHJcIjtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIGNsYXNzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIGF0dHJpYnV0ZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBhdHRyTmFtZTogc3RyaW5nLCBoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGF0dHJOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGhhbmRsZXJDbGFzcyB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gZXZlbnQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21FdmVudCggZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGV2ZW50TmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvdmlkZSBpbXBsZW1lbnRhdGlvbiBvZiB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4gKiBAcGFyYW0gc2xpY2VzIEFycmF5IG9mIFNsaWNlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXMoIC4uLnNsaWNlczogU2xpY2VbXSk6IFNsaWNlXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VTbGljZXMoIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG4gKiBAcGFyYW0gcmVzU2xpY2UgUmVzdWx0YW50IFNsaWNlIG9iamVjdC5cclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlOiBTbGljZSwgLi4uc2xpY2VzOiBTbGljZVtdKTogdm9pZFxyXG57XHJcblx0dXRpbHMubWVyZ2VTbGljZXNUbyggcmVzU2xpY2UsIC4uLnNsaWNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIGNsYXNzIHByb3BlcnRpZXMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbiAqIHJldHVybnMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkIC0gaWYgYWxsIGNsYXNzTmFtZXMgd2VyZSB1bmRlZmluZWQuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWVzIEFycmF5IG9mIHN0cmluZ3Mgb3Igc3RyaW5nIGFycmF5cyB3aXRoIGNsYXNzIG5hbWVzXHJcbiAqIEByZXR1cm5zIFJlc3VsdGFudCBjbGFzcyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbiAqIEBwYXJhbSBzdHlsZXMgQXJyYXkgb2Ygc3R5bGUgb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBTdHlsZVByb3BUeXBlW10pOiBTdHlsZVByb3BUeXBlXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VTdHlsZXMoIC4uLnN0eWxlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBmaXJzdCBvbmUuXHJcbiAqIEBwYXJhbSByZXNTdHlsZSBSZXN1bHRhbnQgc3R5bGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBzdHlsZXMgQXJyYXkgb2Ygc3R5bGUgb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc1RvKCByZXNTdHlsZTogU3R5bGVQcm9wVHlwZSwgLi4uc3R5bGVzOiAoU3R5bGVQcm9wVHlwZSB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHR1dGlscy5tZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ2FsbGJhY2sgd3JhcHBpbmdcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7d3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9TY2hlZHVsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLiBOb3RlIHRoYXQgdGhlIFZOIGNhbiBiZSBudWxsL3VuZGVmaW5lZDtcclxuICogaG93ZXZlciwgaW4gdGhpcyBjYXNlIGlmIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0IGl0IHdpbGwgbm90IGJlIGhhbmRsZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IElWTm9kZSk6IFRcclxue1xyXG5cdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGF0LCB2bik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzLCB0aGlzLnZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmNQcm94eSBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBWYWx1ZSB0byBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gaW52b2tpbmcgdGhlIGZ1bmN0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlXHJcblx0ICogY2xhc3MgYmFzZWQgY29tcG9uZW50IHRoYXQgcmVuZGVyZWQgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd2lsbCBiZSB1c2VkICh3aGljaCBpcyB0aGVcclxuXHQgKiBtb3N0IGNvbW1vbiBjYXNlKS5cclxuXHQgKi9cclxuXHR0aGlzQXJnPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIHJvb3QgZnJvbSBcIi4uL2NvcmUvUm9vdFZOXCJcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBpbiBhXHJcbiAqIHN5bmNocm9ub3VzIG1hbm5lci5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLCB0aGVuXHJcbiAqIHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTeW5jKCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290U3luYyggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vLyBcclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50U3luYyBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRTeW5jKCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRyb290LnVubW91bnRSb290U3luYyggYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIENvbXBCYXNlVk4gaXMgYSBiYXNlIGNsYXNzIGZvciBJbnN0YW5jZVZOIGFuZCBDbGFzc1ZOLiBJdCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eVxyXG4vLyBpbiB0ZXJtcyBvZiB1cGRhdGUgcmVxdWVzdHMgYW5kIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsYXNzQ29tcFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklDbGFzc0NvbXBWTlxyXG57XHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlLlxyXG5cdHB1YmxpYyBjb21wOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogbWltLlVwZGF0ZVN0cmF0ZWd5XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSA/IHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodGhpcy5jb21wID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcInJlbmRlcigpIHdhcyBjYWxsZWQgb24gdW5tb3VudGVkIGNvbXBvbmVudC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0luZGVwZW5kZW50Q29tcFZOfSBmcm9tIFwiLi9JbmRlcGVuZGVudENvbXBWTlwiXHJcbmltcG9ydCB7TWFuYWdlZENvbXBWTn0gZnJvbSBcIi4vTWFuYWdlZENvbXBWTlwiXHJcbmltcG9ydCB7RnVuY1ZOfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5pbXBvcnQge0VsbVZOfSBmcm9tIFwiLi9FbG1WTlwiXHJcbmltcG9ydCB7VGV4dFZOfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5pbXBvcnQge0Z1bmNQcm94eVZOfSBmcm9tIFwiLi9GdW5jUHJveHlWTlwiXHJcbmltcG9ydCB7UHJvbWlzZVByb3h5Vk59IGZyb20gXCIuL1Byb21pc2VQcm94eVZOXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgZWl0aGVyIGEgc2luZ2xlIHZpcnR1YWwgbm9kZSBvciBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuXHJcbi8vIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhbiBhcnJheSwgdGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXRcclxuLy8gY29udGVudCBpcyBhbiBhcnJheSwgdGhlbiBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50c1xyXG4vLyBtaWdodCBhbHNvIGJlIGFycmF5cywgdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm5cclxuXHRcdFx0XHRcdFx0PyAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm4gYXMgVk5cclxuXHRcdFx0XHRcdFx0OiBuZXcgSW5kZXBlbmRlbnRDb21wVk4oIGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTltdXHJcbntcclxuXHRsZXQgbm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50KTtcclxuXHRyZXR1cm4gIW5vZGVzID8gbnVsbCA6IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMgOiBbbm9kZXNdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnJhZ21lbnQpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgbWltLkZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uUHJvbWlzZVByb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLnByb21pc2UpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggcHJvcHMsIGNoaWxkcmVuKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZVxyXG5cdFx0Ly8gYW4gYXJyYXkgb2YgYSBjZXJ0YWluIHR5cGUsIGUuZy4gY2xhc3MgQSBleHRlbmRzIG1pbS5Db21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcbi8vLy8vLy8vLy8vXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzZXQgYXMgY3VycmVudCBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50KCk6IG1pbS5JQ29tcG9uZW50XHJcbntcclxuXHQvLyB0aGUgc19jdXJyZW50Vk4gc2hvdWxkIHBvaW50IHRvIHRoZSB2aXJ0dWFsIG5vZGUgYmVoaW5kIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQsXHJcblx0Ly8gd2hpY2ggc2hvdWxkIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBjYWxscyB0aGUgZnVuY3Rpb24uXHJcblx0cmV0dXJuIHNfY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0VsbUF0dHIsIEF0dHJQcm9wSW5mbywgRXZlbnRQcm9wSW5mbywgQ3VzdG9tQXR0clByb3BJbmZvLCBQcm9wVHlwZSwgUHJvcEluZm99IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCJcclxuaW1wb3J0IHtTdmdFbG1zfSBmcm9tIFwiLi4vdXRpbHMvU3ZnRWxtc1wiO1xyXG5pbXBvcnQge2RlZXBDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Ly8gVGFnIG5hbWUgb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBFbGVtZW50IGlzIFNWRyAoYXMgb3Bwb3NlZCB0byBIVExNKS4gVGhlcmUgYXJlIHNvbWUgU1ZHXHJcblx0Ly8gZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgcmVndWxhciBlbGVtZW50cyAoZS5nLiA8YT4pLiBUaGVyZWZvcmUsIGluIG9yZGVyIHRvXHJcblx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3Igbm90IHdlIG5lZWQgdG8gY2hlY2sgdGhlIG5hbWVzcGFjZVVSSSBvZiB0aGUgcGFyZW50XHJcblx0Ly8gKGFuY2hvcmUpIERPTSBub2RlLlxyXG5cdHB1YmxpYyBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkVsbTtcclxuXHRcdHRoaXMuZWxtTmFtZSA9IHRhZ05hbWU7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIGtleSBwcm9wZXJ0eS4gSWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3RcclxuXHRcdFx0Ly8gc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0XHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhZGVlcENvbXBhcmUoIHRoaXMucHJvcHMsIChuZXdWTiBhcyBFbG1WTikucHJvcHMpO1xyXG5cclxuXHRcdC8vIHJlbmRlciBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBlaXRoZXIgb2xkIG9yIG5ldyBub2RlIGhhcyBjaGlsZHJlblxyXG5cdFx0bGV0IHNob3VsZFJlbmRlciA9IHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwIHx8XHJcblx0XHRcdFx0XHQobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuICYmIChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IChuZXdWTiBhcyBFbG1WTikucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbjtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJ1cGRhdGVTdHJhdGVneVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdXBkYXRlU3RyYXRlZ3kgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3BlcnR5IGFuZCBkZXRlcm1pbmUgaXRzIHR5cGUgKHJlZ3VsYXIgYXR0cmlidXRlLCBldmVudFxyXG5cdFx0XHRcdC8vIG9yIGN1c3RvbSBhdHRyaWJ1dGUpLiBOb3RlIHRoYXQgZ2V0UHJvcGVydHlJbmZvIG1heSByZXR1cm4gbnVsbCBvbmx5IGZvciByZWd1bGFyXHJcblx0XHRcdFx0Ly8gYXR0cmlidXRlcy5cclxuXHRcdFx0XHRwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdFx0cHJvcFR5cGUgPSBwcm9wSW5mbyA/IHByb3BJbmZvLnR5cGUgOiBQcm9wVHlwZS5BdHRyO1xyXG5cdFx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8sIHZhbDogcHJvcFZhbCB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIHByb3BJbmZvLCBwcm9wVmFsKTtcclxuXHRcdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMgPSB7fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHNbcHJvcE5hbWVdID0gZXZlbnRJbmZvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyOiB1bmRlZmluZWR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vXHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3RXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkRXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRFdmVudCA9IG9sZEV2ZW50c1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3RXZlbnQgPSBuZXdFdmVudHMgPyBuZXdFdmVudHNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdFdmVudClcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCwgbmV3RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3RXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0V2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRFdmVudHMgJiYgKG5hbWUgaW4gb2xkRXZlbnRzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdFdmVudHNbbmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHMgPSBuZXdFdmVudHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRFdmVudDogRXZlbnRSdW5UaW1lRGF0YSwgbmV3RXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZG91YmxlLWVxdWFsLXNpZ24gZm9yIHVzZUNhcHR1cmUgaXMgb24gcHVycG9zZSwgYmVjYXVzZSB1c2VDYXB0dXJlIGNhbiBiZSB1bmRlZmluZWQgb3IgYm9vbGVhblxyXG5cdFx0aWYgKG9sZEV2ZW50Lm9yZ0Z1bmMgPT09IG5ld0V2ZW50Lm9yZ0Z1bmMgJiZcclxuXHRcdFx0b2xkRXZlbnQudGhhdCA9PT0gbmV3RXZlbnQudGhhdCAmJlxyXG5cdFx0XHRvbGRFdmVudC51c2VDYXB0dXJlID09IG5ld0V2ZW50LnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSBvbGRFdmVudC53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbW92ZSBvbGQgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkRXZlbnQud3JhcHBlciwgb2xkRXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgbmV3IHdyYXBwZXIgYW5kIGFkZCBpdCBhcyBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIG5ld0V2ZW50KTtcclxuXHRcdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgbmV3RXZlbnQud3JhcHBlciwgbmV3RXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyLiBUaGUgd3JhcHBlciBpcyBib3VuZCB0b1xyXG5cdC8vIHRoZSBpbnN0YW5jZSBvZiBFbG1WTiBhbmQgdGh1cyBjYW4gaW50ZXJjZXB0IGV4Y2VwdGlvbnMgYW5kIHByb2Nlc3MgdGhlbSB1c2luZyB0aGUgc3RhbmRhcmRcclxuXHQvLyBlcnJvciBzZXJ2aWNlLiBVbmxlc3MgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGFscmVhZHkgYSBib3VuZCBmdW5jdGlvbiwgaXQgd2lsbCBiZSBjYWxsZWRcclxuXHQvLyB3aXRoIFwidGhpc1wiIHNldCB0byBlaXRoZXIgdGhlIFwiZXZlbnQudGhhdFwiIG9iamVjdCBvciwgaWYgdGhlIGxhdHRlciBpcyB1bmRlZmluZWQsIHRvIHRoZVxyXG5cdC8vIFwiY3JlYXRvclwiIG9iamVjdCwgd2hpY2ggaXMgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQgaSBpdHMgcmVuZGVyXHJcblx0Ly8gbWV0aG9kLlxyXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYywgZXZlbnQudGhhdCA/IGV2ZW50LnRoYXQgOiB0aGlzLmNyZWF0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgY3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgY3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gb2xkQ3VzdG9tQXR0ci5oYW5kbGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3Q3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQ3VzdG9tQXR0cnMgJiYgKG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgbmV3Q3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgbmV3Q3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VzdG9tQXR0cnMgPSBuZXdDdXN0b21BdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBkZWZpbmluZyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdHB1YmxpYyB1cGRhdGVTdHJhdGVneTogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LiBUaGUgcmVmIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIG9uIHVwZGF0ZS5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBieSBcInRoaXNcIiB3aXRoaW4gdGhlIGludm9rZWQgZnVuY3Rpb25cclxuXHR0aGF0PzogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU/OiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogIG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8YW55PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG4vLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4sIHVzZUNhcHR1cmU6IHByb3BWYWxbMV0gYXMgYm9vbGVhbiB9O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMylcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBtaW0uRnVuY1Byb3h5UHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkZ1bmNQcm94eTtcclxuXHRcdHRoaXMuZnVuYyA9IHByb3BzLmZ1bmM7XHJcblx0XHR0aGlzLnRoaXNBcmcgPSBwcm9wcy50aGlzQXJnIHx8IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRcdHRoaXMuYXJncyA9IHByb3BzLmFyZ3M7XHJcblx0XHR0aGlzLmFyZ3NSZXBsYWNlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cclxuXHRcdC8vIGlmIGEga2V5IHdhcyBub3QgcHJvdmlkZWQgd2UgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzQXJnICh3aGljaCBtaWdodCBiZSB0aGUgY3VycmVudFxyXG5cdFx0Ly8gY29tcG9uZW50KSBhcyBhIGtleS4gSWYgdGhhdCBpcyB1bmRlZmluZWQgdG9vIHdlIHVzZSB0aGUgZnVuY3Rpb24gaXRzZWxmIGFzIGEga2V5LlxyXG5cdFx0dGhpcy5saW5rS2V5ID0gcHJvcHMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5hcmdzUmVwbGFjZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFyZ3NSZXBsYWNlZDsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dGhpcy5hcmdzUmVwbGFjZWQgPSBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMuYXBwbHkoIHRoaXMudGhpc0FyZywgdGhpcy5hcmdzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpbmtOb2RlVG9GdW5jKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudW5saW5rTm9kZUZyb21GdW5jKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFuZCB0aGUgc2FtZSB0aGlzQXJnIHByb3BlcnR5XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSBuZXdGdW5jUHJveHlWTi5mdW5jICYmIHRoaXMudGhpc0FyZyA9PT0gbmV3RnVuY1Byb3h5Vk4udGhpc0FyZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNQcm94eVZOLmtleTtcclxuXHRcdHRoaXMubGlua0tleSA9IG5ld0Z1bmNQcm94eVZOLmxpbmtLZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBhcmd1bWVudHMgZnJvbSB0aGUgbmV3IG5vZGU7IHRoZSBmdW5jdGlvbiBpdHNlbGYgYW5kIFwidGhpc0FyZ1wiIHJlbWFpbiB0aGUgc2FtZS5cclxuXHRcdHRoaXMuYXJncyA9IG5ld0Z1bmNQcm94eVZOLmFyZ3M7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBmaW5kVk4oIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnkpOiBGdW5jUHJveHlWTlxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBrZXkgaXMgdW5kZWZpbmVkLCB3ZSB1c2UgdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGZcclxuXHRcdGxldCBsaW5rS2V5OiBhbnkgPSBrZXkgfHwgdGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXAgfHwgZnVuYztcclxuXHJcblx0XHQvLyB0cnkgdG8gZmluZCB0aGUga2V5IGluIHRoZSBtYXAgb24gdGhlIGZ1bmN0aW9uIG9iamVjdDsgaWYgbm90IGZvdW5kLCBkbyBub3RoaW5nXHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdHJldHVybiBtYXBLZXlzVG9Ob2RlcyAmJiBtYXBLZXlzVG9Ob2Rlcy5nZXQoIGxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhlIG5vZGVcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggZnVuYywga2V5LCB0aGlzQXJnKTtcclxuXHRcdGlmICghdm4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5hcmdzID0gYXJncztcclxuXHRcdHZuLmFyZ3NSZXBsYWNlZCA9IHRydWU7XHJcblx0XHR2bi5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgbGlua05vZGVUb0Z1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBmdW5jOiBhbnkgPSB0aGlzLmZ1bmM7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdGZ1bmNbXCJfX2tleXMtdG8tbm9kZXNcIl0gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBmdW5jOiBhbnkgPSB0aGlzLmZ1bmM7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tcIl9fa2V5cy10by1ub2Rlc1wiXTtcclxuXHRcdGlmIChtYXBLZXlzVG9Ob2RlcylcclxuXHRcdFx0bWFwS2V5c1RvTm9kZXMuZGVsZXRlKCB0aGlzLmxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmdcclxuXHRwcml2YXRlIGZ1bmM6IEZ1bmN0aW9uO1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYXJndW1lbnRzIGhhdmUgYmVlbiByZXBsYWNlZC4gVGhpcyBpcyBuZWVkZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcclxuXHQvLyB0aGUgbm9kZSBzaG91bGQgYmUgcmUtcmVuZGVyZWQ7IHRoYXQgaXMsIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdHByaXZhdGUgYXJnc1JlcGxhY2VkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgZnVuY3Rpb24gYS5rLmEuIHN0YXRlbGVzcyBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1ZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgbm9kZSBjb3JyZXNwb25kcyB0byBhIGZyYWdtZW50IHBsYWNlaG9sZGVyLiAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgaXNWTmFGcmFnbWVudCggdm46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAodm4gYXMgRnVuY1ZOKS5mdW5jID09PSBtaW0uRnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiBtaW0uRnVuY0NvbXBUeXBlLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkZ1bmNDb21wO1xyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleVxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHRcdC8vIERPTSB0cmVlLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHR9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSAobmV3Vk4gYXMgRnVuY1ZOKS5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1ZOID0gbmV3Vk4gYXMgRnVuY1ZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jVk4ua2V5O1xyXG5cclxuXHRcdC8vIHRha2UgcHJvcGVydGllcyBmcm9tIHRoZSBuZXcgbm9kZVxyXG5cdFx0dGhpcy5mdW5jID0gbmV3RnVuY1ZOLmZ1bmM7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRwcml2YXRlIGZ1bmM6IG1pbS5GdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk59IGZyb20gXCIuL0NsYXNzQ29tcFZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIEluc3RhbmNlVk4gaXMgYSBub2RlIHRoYXQgaG9sZHMgYW4gaW5zdGFuY2Ugb2YgYW4gSUNvbXBvbmVudC1pbXBsZW1lbnRpbmcgb2JqZWN0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBtaW0uSUluZGVwZW5kZW50Q29tcFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcDogbWltLklDb21wb25lbnQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcDtcclxuXHRcdHRoaXMuY29tcCA9IGNvbXA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lID8gdGhpcy5jb21wLmRpc3BsYXlOYW1lIDogdGhpcy5jb21wLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuIFRoZSBpbnN0YW5jZSBvZiBvdXIgY29tcG9uZW50IGlzIHRoZSBrZXkuXHJcblx0cHVibGljIGdldCBrZXkoKTogYW55IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53aWxsVW5tb3VudEluc3RhbmNlKCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBpZiBpdCBpcyB0aGUgc2FtZSBjb21wb25lbnQgaW5zdGFuY2UsIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcclxuXHRcdGxldCBuZXdDb21wID0gKG5ld1ZOIGFzIEluZGVwZW5kZW50Q29tcFZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvcG9uZW50IGluc3RhbmNlIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZyBhbmQgdGhlIG9sZCBvbmUgZm9yIHVubW91bnRpbmcuXHJcblx0XHRpZiAobmVlZHNVcGRhdGluZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53aWxsTW91bnRJbnN0YW5jZSggbmV3Q29tcCk7XHJcblx0XHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHRcdFx0dGhpcy5jb21wID0gbmV3Q29tcDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBuZWVkc1VwZGF0aW5nKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIGdpdmVuIGNvbXBvbmVudCB0aGF0IGl0IHdpbGwgYmUgbW91bnRlZC5cclxuXHRwcml2YXRlIHdpbGxNb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRjb21wLnZuID0gdGhpcztcclxuXHJcblx0XHRpZiAoY29tcC53aWxsTW91bnQpXHJcblx0XHRcdGNvbXAud2lsbE1vdW50KCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpdCB3aWxsIGJlIHVubW91bnRlZC5cclxuXHRwcml2YXRlIHdpbGxVbm1vdW50SW5zdGFuY2UoIGNvbXA6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChjb21wLndpbGxVbm1vdW50KVxyXG5cdFx0XHRjb21wLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0Y29tcC52biA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk59IGZyb20gXCIuL0NsYXNzQ29tcFZOXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTWFuYWdlZENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgbWltLklNYW5hZ2VkQ29tcFZOXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHVibGljIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wO1xyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lIHBsdXMga2V5IGlmIGRlZmluZWQuIE5vdGUgdGhhdCBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdC8vIG1pZ2h0IG5vdCBiZSBjcmVhdGVkIHlldCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdFx0aWYgKHRoaXMuY29tcCAmJiB0aGlzLmNvbXAuZGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCggcGFyZW50LCBjcmVhdG9yKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC52biA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsTW91bnQoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsVW5tb3VudClcclxuXHRcdFx0dGhpcy5jb21wLndpbGxVbm1vdW50KCk7XHJcblxyXG5cdFx0dGhpcy5jb21wLnZuID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgTWFuYWdlZENvbXBWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgTWFuYWdlZENvbXBWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkVXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIHNob3VsZFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IG1pbS5SZWZQcm9wVHlwZTxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBtaW0uUHJvbWlzZVByb3h5UHJvcHMsIGNoaWxkcmVuPzogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlByb21pc2VQcm94eTtcclxuXHRcdHRoaXMucHJvbWlzZSA9IHByb3BzLnByb21pc2U7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBwcm9wcy5lcnJvckNvbnRlbnRGdW5jO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY2hpbGRyZW47XHJcblxyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9taXNlIGlzIHNldHRsZWQgKHN1Y2Nlc3NmdWxseSBvciBub3QpLlxyXG5cdHB1YmxpYyBnZXQgaXNTZXR0bGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9taXNlID09IG51bGw7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLndhdGNoUHJvbWlzZSgpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBwcm9taXNlIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMucHJvbWlzZSA9PT0gbmV3UHJvbWlzZVByb3h5Vk4ucHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld1Byb21pc2VQcm94eVZOLmtleTtcclxuXHRcdHRoaXMuY29udGVudCA9IG5ld1Byb21pc2VQcm94eVZOLmNvbnRlbnQ7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBuZXdQcm9taXNlUHJveHlWTi5lcnJvckNvbnRlbnRGdW5jO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhaXRzIGZvciB0aGUgcHJvbWlzZSB0byBzZXR0bGVcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZSgpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHRoaXMucHJvbWlzZTtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIHN0aWxsIG1vdW50ZWQsIHJlcXVlc3QgdXBkYXRlXHJcblx0XHRcdGlmICh0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBhbHJlYWR5IHVubW91bnRlZCwgZG8gbm90aGluZ1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGlmICh0aGlzLmVycm9yQ29udGVudEZ1bmMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmVycm9yQ29udGVudEZ1bmMoIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIxKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycik7XHJcblxyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFByb21pc2UgdGhhdCB0aGlzIG5vZGUgd2F0Y2hlcy5cclxuXHRwcml2YXRlIHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0Ly8gQ29udGVudCB0aGF0IHRoaXMgbm9kZSBkaXNwbGF5cy4gSW5pdGlhbGx5IHRoaXMgY29udGVudCBpcyBzZXQgdG8gcHJvcHMuY2hpbGRyZW4uIFdoZW5cclxuXHQvLyB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCwgdGhlIGNvbnRlbnQgaXMgc2V0IHRvIHRoZSByZXNvbHZlZCB2YWx1ZS4gSWYgdGhlIHByb21pc2UgaXNcclxuXHQvLyByZWplY3RlZCBhbmQgdGhlIGVycm9yQ29udGVudEZ1bmMgaXMgZGVmaW5lZCwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGl0cyByZXR1cm5cclxuXHQvLyB2YWx1ZSBpcyB1c2VkIGFzIGNvbnRlbnQuXHJcblx0cHJpdmF0ZSBjb250ZW50PzogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIGVycm9yQ29udGVudEZ1bmM/OiAoIGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgZXhwb3J0IGZ1bmN0aW9uYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGUgc2FtZVxyXG4vLyBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxuXHRzdWJzY3JpYmVkVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG59XHJcblxyXG4vLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2V0cyBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgc3Vic2NyaWJlZCB0byB0aGlzIHNlcnZpY2UuXHJcbmxldCBzX3NlcnZpY2VJbmZvcyA9IG5ldyBNYXA8c3RyaW5nLFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHJcblx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Um9vdFZOfSBmcm9tIFwiLi9Sb290Vk5cIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290RXJyb3JVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHByaXZhdGUgcm9vdFZOOiBSb290Vk47XHJcblx0cHJpdmF0ZSBlcnI6IGFueTtcclxuXHRwcml2YXRlIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoIHJvb3RWTjogUm9vdFZOLCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJvb3RWTiA9IHJvb3RWTjtcclxuXHRcdHRoaXMuZXJyID0gZXJyO1xyXG5cdFx0dGhpcy5wYXRoU3RyaW5nID0gcGF0aCA/IHBhdGguam9pbiggXCIgXFx1MjE5MiBcIikgOiBcIlwiO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJ9fT5cclxuXHRcdFx0PGRpdj57dGhpcy5lcnIubWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0PGRpdj57dGhpcy5wYXRoU3RyaW5nfTwvZGl2PlxyXG5cdFx0XHQ8aHIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19Lz5cclxuXHRcdFx0PGJ1dHRvbiBjbGljaz17dGhpcy5vblJlc3RhcnR9PlJlc3RhcnQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblJlc3RhcnQgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucm9vdFZOLnJlc3RhcnQoKTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdFdhaXRpbmdVSSBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiTG9hZGluZyAuLi5cIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHt1cGRhdGVOb2RlU3luYywgcmVxdWVzdE5vZGVVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcbmltcG9ydCB7RE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Um9vdEVycm9yVUksIFJvb3RXYWl0aW5nVUl9IGZyb20gXCIuL1Jvb3RVSVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFJvb3RWTiBjbGFzcyBpcyB1c2VkIGFzIGEgdG9wLWxldmVsIHZpcnR1YWwgbm9kZSBmb3IgYWxsIHJlbmRlcmVkIHRyZWVzLiBSb290Vk4gc2VydmVzXHJcbi8vIGFzIGFuIGVycm9yIGJvdW5kYXJ5IG9mIGxhc3QgcmVzb3J0LiBXaGVuIGl0IGNhdGNoZXMgYW4gZXJyb3IgdGhhdCB3YXNuJ3QgY2F1Z2h0IGJ5IGFueVxyXG4vLyBkZXNjZW5kYW5kIG5vZGUsIGl0IGRpc3BsYXlzIGEgc2ltcGxlIFVJIHRoYXQgc2hvd3MgdGhlIGVycm9yIGFuZCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVzdGFydC5cclxuLy8gUm9vdFZOIGFsc28gbWFuYWdlcyBzZXJ2aWNlIHB1Ymxpc2hlcnMgYW5kIHN1YnNjcmliZXJzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFJvb3RWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggYW5jaG9yRE46IEROKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Sb290OyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJSb290XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBjb250ZW50IHRvIGJlIHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlIGFuZCB0cmlnZ2VycyB1cGRhdGUuXHJcblx0cHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmIChzeW5jKVxyXG5cdFx0XHR1cGRhdGVOb2RlU3luYyggdGhpcyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVycm9yVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVUk7XHJcblx0XHRlbHNlIGlmICh0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMud2FpdGluZ1VJO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXlzIHRoZSBjb250ZW50IG9yaWdpbmFsbHkgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIGJlIHVwZGF0ZWRcclxuXHRcdHRoaXMuZXJyb3JVSSA9IHVuZGVmaW5lZDtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgZXJyb3JVSTogUm9vdEVycm9yVUk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZ1VJOiBSb290V2FpdGluZ1VJO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc19taW1ibEFuY2hvclByb3BOYW1lID0gXCJfX21pbWJsQW5jaG9yUHJvcE5hbWVfX1wiO1xyXG5cclxuXHJcblxyXG4vLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG4vLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGEgc3luY2hyb25vdXMgd2F5LlxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRSb290U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlciBzeW5jaHJvbm91cyB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3RTeW5jLlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3RTeW5jKCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIHRydWUpO1xyXG5cdHJvb3RWTi50ZXJtKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIGZhbHNlKTtcclxuXHRyb290Vk4uc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoICgpID0+IHJvb3RWTi53aWxsVW5tb3VudCgpICk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIGdldEZpcnN0RE4sIGdldExhc3RETiwgZ2V0SW1tZWRpYXRlRE5zLCBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiwgZ2V0Vk5QYXRofSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5pbXBvcnQge1ZORGlzcEFjdGlvbiwgVk5EaXNwLCBWTkRpc3BHcm91cH0gZnJvbSBcIi4vVk5EaXNwXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlciBpbmRpY2F0aW5nIGluIHdoYXQgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBjeWNsZSB3ZSBjdXJyZW50bHkgcmVzaWRlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZW51bSBTY2hlZHVsZXJTdGF0ZVxyXG57XHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBub3Qgd2l0aGluIHRoZSB1cGRhdGUgY3ljbGVcclxuXHRJZGxlID0gMCxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGJlZm9yZSB1cGRhdGluZyBub2Rlc1xyXG5cdEJlZm9yZVVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyB1cGRhdGluZyBub2Rlc1xyXG5cdFVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGFmdGVyIHVwZGF0aW5nIG5vZGVzXHJcblx0QWZ0ZXJVcGRhdGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsZWRGdW5jTWFwIGNsYXNzIHJlcHJlc2VudHMgYSBtYXAgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBleGVjdXRlZCBlaXRoZXIgYmVmb3JlXHJcbiAqIG9yIGFmdGVyIGNvbXBvbmVudCB1cGRhdGVzLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmQgdGhlIHZhbHVlcyBhcmVcclxuICogdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS4gQm90aFxyXG4gKiB0aGUga2V5cyBhbmQgdGhlIHZhbHVlcyBoYXZlIHRoZSBzYW1lIHR5cGU6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZS5cclxuICovXHJcbmNsYXNzIFNjaGVkdWxlZEZ1bmNNYXAgZXh0ZW5kcyBNYXA8bWltLlNjaGVkdWxlZEZ1bmNUeXBlLG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuLy8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuLy8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcbi8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuLy9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcbi8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcbi8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5sZXQgc192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUgdmFsdWVzIGluIHRoZSBtYXAgYXJlIG9iamVjdHMgdGhhdCB3aWxsXHJcbi8vIGJlIHVzZWQgcyB0aGUgXCJ0aGlzXCIgdmFsdWUgaW4gdGhlIGNhbGxiYWNrLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIHZhbHVlcyBpbiB0aGUgbWFwIGFyZSBvYmplY3RzIHRoYXQgd2lsbFxyXG4vLyBiZSB1c2VkIHMgdGhlIFwidGhpc1wiIHZhbHVlIGluIHRoZSBjYWxsYmFjay5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IG1pbS5JQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG5cclxuLy8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vZGVTeW5jKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRsZXQgb2xkU3RhdHMgPSBEZXRhaWxlZFN0YXRzLnN0YXRzO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdXBkYXRlIGN5Y2xlICR7c19jdXJyZW50VGlja306IGApO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHRsZXQgdm5zOiBWTltdW10gPSBuZXcgQXJyYXkoMSk7XHJcblx0dm5zWzBdID0gW3ZuXTtcclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzID0gb2xkU3RhdHM7XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2bi50eXBlID09PSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcCB8fCB2bi50eXBlID09PSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBtaW0uSUNsYXNzQ29tcFZOKS5jb21wO1xyXG5cdFx0aWYgKGNvbXAuYmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGNvbXAuYmVmb3JlVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cclxuXHRcdGlmIChjb21wLmFmdGVyVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBjb21wLmFmdGVyVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGUgZHVyaW5nIGFcclxuXHQvLyBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24uXHJcblx0aWYgKHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG4vLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuLCB0aGF0OiBvYmplY3QsIHZuOiBtaW0uSVZOb2RlKTogdm9pZFxyXG57XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0aWYgKCFmdW5jKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIFwiVHJ5aW5nIHRvIHNjaGVkdWxlIHVuZGVmaW5lZCBmdW5jdGlvbiBmb3IgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGF0LCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGF0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGEgY2FsbGJhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9ucyBmcm9tIHRoZVxyXG4gKiBjYWxsYmFjayBhbmQgcGFzcyBpdCB0byB0aGUgXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZS4gVGhlIGZ1bmN0aW9uIGlzIGJvdW5kIHRvICB0aGUgdmlydHVhbFxyXG4gKiBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlXHJcbiAqIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmVcclxuICogYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpblxyXG4gKiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcclxuICogaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci5cclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWRcclxuXHRsZXQgY3VycmVudFZOID0gc19jdXJyZW50Vk47XHJcblx0c19jdXJyZW50Vk4gPSB0aGlzO1xyXG5cdGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgPyAoc19jdXJyZW50Vk4gYXMgYW55KS5jb21wIDogc19jdXJyZW50Vk4uY3JlYXRvcjtcclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW3RoYXQsIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiB0aGF0ID8gb3JnQ2FsbGJhY2suYXBwbHkoIHRoYXQsIHJlc3QpIDogb3JnQ2FsbGJhY2soIC4uLnJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcylcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdGhpcykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG5cdFx0Ly8gcmVzdG9yZSB0aGUgY3VycmVudCBWTiB0byB0aGUgcmVtZW1iZXJlZCB2YWx1ZTtcclxuXHRcdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdFx0c19jdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5sZXQgb25TY2hlZHVsZWRGcmFtZSA9ICgpOiB2b2lkID0+XHJcbntcclxuXHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBhZnRlciB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHQvLyB1cGRhdGUgcmVxdWVzdHMuIEFycmFuZ2Ugc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIGFuZCBwZXJmb3JtIHVwZGF0ZXMuXHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG4vLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuLy9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG4vL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuLy9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuLy8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcbi8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcbmZ1bmN0aW9uIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG57XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2xlYXIgdGhlIGZsYWcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGZvciB0aGUgbm9kZVxyXG5cdFx0XHR2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuXHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGRpc3AgPSBuZXcgVk5EaXNwKCB2biwgVk5EaXNwQWN0aW9uLlVua25vd24sIHZuKTtcclxuXHRcdFx0dXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHQvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHRcdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgc19jdXJyZW50Vk4gPyBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSA6IG51bGwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNfY3VycmVudFZOID0gbnVsbDtcclxuXHR9KX0pO1xyXG5cclxuXHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuLy8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuZnVuY3Rpb24gcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIGRvbid0IHVudGljaXBhdGUgYW55IGV4Y2VwdGlvbnMgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGludm9rZSAzcmQtcGFydHkgY29kZSBoZXJlLlxyXG5cdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBTY2hlZHVsZWRGdW5jTWFwLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRsZXQgY3VycmVudENsYXNzQ29tcCA9IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRpZiAoKHZuIGFzIGFueSkuY29tcClcclxuXHRcdHNfY3VycmVudENsYXNzQ29tcCA9ICh2biBhcyBhbnkpLmNvbXA7XHJcblxyXG5cdGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nICYmIHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0Y3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBJZiB0aGlzIG5vZGUgZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGVpdGhlciBieSB0aGlzXHJcblx0Ly8gbm9kZSBvciBieSBvbmUgb2YgaXRzIHN1Yi1ub2RlcywgdGhpcyBsaW5lIGlzIG5vdCBleGVjdXRlZCBhbmQgdGh1cywgc19jdXJyZW50Vk5cclxuXHQvLyB3aWxsIHBvaW50IHRvIG91ciBub2RlIHdoZW4gdGhlIGV4Y2VwdGlvbiBpcyBjYXVnaHQuXHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0c19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuZnVuY3Rpb24gY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyB0aGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgdGhlIG5vZGUgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuXHR2bi5zdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRpZiAodm4uc3ViTm9kZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0dm4ua2V5ZWRTdWJOb2RlcyA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG5cclxuXHRcdGxldCBwcmV2Vk46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHJcblx0XHRcdGlmICh2bi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHZuLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0aWYgKHByZXZWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHByZXZWTi5uZXh0ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5wcmV2ID0gcHJldlZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2Vk4gPSBzdm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjcmVhdGVQaHlzaWNhbCggc3ZuLCBuZXdBbmNob3JETiwgbmV3QmVmb3JlRE4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBwcmVEZXN0cm95KCB2bjogVk4pXHJcbntcclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0aWYgKHZuLndpbGxVbm1vdW50KVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbFVubW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gd2lsbFVubW91bnRgKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVtb3ZlcyBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxue1xyXG5cdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblxyXG5cdGlmICh2bi51bm1vdW50KVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cdFx0dm4udW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0Ly8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNlIGludG8gc3ViLW5vZGVzLCBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50LlxyXG5cdGlmIChvd25ETilcclxuXHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHQvLyBlYXNpZXIuXHJcblx0XHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSlcclxuXHRcdFx0ZGVzdHJveVBoeXNpY2FsKCB2bi5zdWJOb2Rlc1tpXSk7XHJcblx0fVxyXG5cclxuXHR2bi50ZXJtKCk7XHJcblxyXG5cdHZuLmFuY2hvckROID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG4vLyBpbnZva2VkIHdoZW4gYSBub2RlIGlzIGJlaW5nIHVwZGF0ZWQgZWl0aGVyIGFzIGEgcmVzdWx0IG9mIHVwZGF0ZU1lIGludm9jYXRpb24gb3IgYmVjYXVzZVxyXG4vLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuLy8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG4vLyB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIHJlbmRlclxyXG4vLyBhZ2Fpbjsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0XHJcbi8vIGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiB1cGRhdGVWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuXHQvLyBsZXQgdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydCA/IGRpc3AubmV3Vk4gOiBkaXNwLm9sZFZOO1xyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0bGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0aWYgKCh2biBhcyBhbnkpLmNvbXApXHJcblx0XHRzX2N1cnJlbnRDbGFzc0NvbXAgPSAodm4gYXMgYW55KS5jb21wO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHR1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHQvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIGl0cyBvd24gZXJyb3IgYW5kIHJlLXJlbmRlclxyXG5cdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IGVycjtcclxuXHR9XHJcblxyXG5cdC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcblx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0dm4ubGFzdFVwZGF0ZVRpY2sgPSBzX2N1cnJlbnRUaWNrO1xyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHRzX2N1cnJlbnRDbGFzc0NvbXAgPSBjdXJyZW50Q2xhc3NDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQgYW5kIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGRpc3AuYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk7XHJcblxyXG5cdC8vIGZvciBub2RlcyB0byBiZSByZW1vdmVkLCBjYWxsIHdpbGxVbm1vdW50XHJcblx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHRsZXQgb2xkVk46IFZOLCBuZXdWTjogVk47XHJcblx0XHRsZXQgcGFyZW50Vk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTikgJiYgb2xkVk4ucHJlcGFyZVVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBvbGRWTi5wcmVwYXJlVXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdGNyZWF0ZVZpcnR1YWwoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHQvLyBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIGV4aXQgaWYgdGhpcyBpcyB0aGUgY2FzZVxyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG5ldyBvciBtb3ZpbmcgZXhpc3Rpbmcgc3ViLW5vZGVzLiBJZlxyXG5cdC8vIG91ciBub2RlIGhhcyBpdHMgb3duIEROLCBpdCB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXM7IG90aGVyd2lzZSwgb3VyIG5vZGUnc1xyXG5cdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cdGxldCBhbmNob3JETiA9IG93bkROICE9IG51bGwgPyBvd25ETiA6IHZuLmFuY2hvckROO1xyXG5cclxuXHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgbmV3IG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0Ly8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGFuY2hvciBub2RlJ3MgY2hpbGRyZW4uXHJcblx0bGV0IGJlZm9yZUROID0gb3duRE4gIT0gbnVsbCA/IG51bGwgOiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4sIGFuY2hvckROKTtcclxuXHJcblx0Ly8gcmUtY3JlYXRlIG91ciBjdXJyZW50IGxpc3Qgb2Ygc3ViLW5vZGVzIC0gd2Ugd2lsbCBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0dm4uc3ViTm9kZXMgPSBkaXNwLnN1Yk5vZGVEaXNwcyA/IG5ldyBBcnJheTxWTj4oZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoKSA6IHVuZGVmaW5lZDtcclxuXHR2bi5rZXllZFN1Yk5vZGVzID0gdm4uc3ViTm9kZXMgIT09IHVuZGVmaW5lZCAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAxID8gbmV3IE1hcDxhbnksVk4+KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBpbmRpdmlkdWFsIG5vZGVzLlxyXG5mdW5jdGlvbiB1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRzdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tpXSA9IHN2bjtcclxuXHJcblx0XHRpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGRldGVybWluZSB3aGV0aGVyIGFsbCB0aGUgbm9kZXMgdW5kZXIgdGhpcyBWTiBzaG91bGQgYmUgbW92ZWQuXHJcblx0XHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBvbGRWTik7XHJcblx0XHRcdGlmIChzdWJOb2RlRE5zLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBsYXN0IG9mIHRoZSBET00gbm9kZXMgYWxyZWFkeSByZXNpZGVzIHJpZ2h0IGJlZm9yZSB0aGUgbmVlZGVkIG5vZGVcclxuXHRcdFx0XHRpZiAoc3ViTm9kZUROc1tzdWJOb2RlRE5zLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIG9sZFZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRwYXJlbnRWTi5rZXllZFN1Yk5vZGVzLnNldCggc3ZuLmtleSwgc3ZuKTtcclxuXHJcblx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKG5leHRWTilcclxuXHRcdHtcclxuXHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRWTiA9IHN2bjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBncm91cHMuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB1cGRhdGUgZ3JvdXBzXHJcbi8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHBhcmVudFZOLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKG5leHRWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXh0Vk4gPSBzdm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0Ly8gZmlyc3QgYW5kIGxhc3QgRE5zIGZvciB0aGUgZ3JvdXBcclxuXHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdC8vIGdyb3VwIG9mIG5ldyBub2RlcyAoaWYgYW55KSBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcbmZ1bmN0aW9uIGFycmFuZ2VHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Ly8gV2UgZ28gZnJvbSB0aGUgbGFzdCBncm91cCB0byB0aGUgc2Vjb25kIGdyb3VwIGluIHRoZSBsaXN0IGJlY2F1c2UgYXMgc29vbiBhcyB3ZSBtb3ZlZCBhbGxcclxuXHQvLyBncm91cHMgZXhjZXB0IHRoZSBmaXJzdCBvbmUgaW50byB0aGVpciByaWdodCBwbGFjZXMsIHRoZSBmaXJzdCBncm91cCB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcclxuXHQvLyBpbiB0aGUgcmlnaHQgcGxhY2UuIFdlIGFsd2F5cyBoYXZlIHR3byBncm91cHMgKGkgYW5kIGktMSksIHdoaWNoIGFsbG93cyB1cyB0byB1bmRlcnN0YW5kXHJcblx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIHN3YXAgdGhlbS4gSWYgd2UgZG8gd2UgbW92ZSB0aGUgc2hvcnRlciBncm91cC5cclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cdFx0bGV0IHByZXZHcm91cCA9IGdyb3Vwc1tpLTFdO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBncm91cCBzaG91bGQgbW92ZS4gV2UgdGFrZSB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGdyb3VwXHJcblx0XHQvLyBhbmQgY29tcGFyZSBpdHMgRE4ncyBuZXh0IHNpYmxpbmcgdG8gdGhlIGN1cnJlbnQgXCJiZWZvcmVETlwiLlxyXG5cdFx0aWYgKGdyb3VwLmxhc3RETiAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGdyb3VwIG5vdyByZXNpZGVzIGJlZm9yZSB0aGUgcHJldmlvdXMgZ3JvdXAsIHRoZW4gdGhhdCBtZWFuc1xyXG5cdFx0XHRcdC8vIHRoYXQgd2UgYXJlIHN3YXBwaW5nIHR3byBncm91cHMuIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1vdmUgdGhlIHNob3J0ZXIgb25lLlxyXG5cdFx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgPT09IHByZXZHcm91cC5maXJzdEROICYmIGdyb3VwLmNvdW50ID4gcHJldkdyb3VwLmNvdW50KVxyXG5cdFx0XHRcdFx0bW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggcGFyZW50Vk4sIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwOiBWTkRpc3BHcm91cCwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIHN1Yk5vZGVWTik7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdHtcclxuXHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSVRleHRWTlxyXG57XHJcblx0Ly8gVGV4dCBmb3IgYSBzaW1wbGUgdGV4dCBub2RlLlxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRwdWJsaWMgdGV4dE5vZGU6IFRleHQ7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRleHQ6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIG1pbS5JVk5vZGVcclxue1xyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHJlYWRvbmx5IHN0YXRzQ2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnk7XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdGtleWVkU3ViTm9kZXM/OiBNYXA8YW55LFZOPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcblx0Ly8gQ2xlYXJzIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGltcGxlbWVudGVkIG9ubHkgb24gbm9kZXNcclxuXHQvLyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2Rlcy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgcmVsZWFzZSB0aGUgaW50ZXJuYWxseSBoZWxkIHJlZmVyZW5jZVxyXG5cdC8vIHRvIHRoZSBET00gbm9kZSAtIHRoZSBhY3R1YWwgcmVtb3ZhbCBvZiB0aGUgbm9kZSBmcm9tIERPTSBpcyBkb25lIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0dW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIElmIHRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gbm90IGltcGxlbWVudGVkIHRoZSB1cGRhdGUgaXMgY29uc2lkZXJlZCBwb3NzaWJsZSAtIGUuZy4gZm9yIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGlzVXBkYXRlUG9zc2libGU/KCBuZXdWTjogVk4pOiBib29sZWFuO1xyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHByZXBhcmVVcGRhdGU/KCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGNvbW1pdFVwZGF0ZT8oIG5ld1ZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoZSBub2RlXHJcblx0Ly8gZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRzdXBwb3J0c0Vycm9ySGFuZGxpbmc/KCk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBUaGUgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGlzIG1ldGhvZCByZXR1cm5zLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRoYW5kbGVFcnJvcj8oIHZuRXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyBwcmVwYXJlVXBkYXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTlVwZGF0ZURpc3Bcclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvdWxkQ29tbWl0ID0gc2hvdWxkQ29tbWl0O1xyXG5cdFx0dGhpcy5zaG91bGRSZW5kZXIgPSBzaG91bGRSZW5kZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCBmYWxzZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3RvY2tWYWx1ZSggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNob3VsZENvbW1pdFxyXG5cdFx0XHQ/IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLkRvQ29tbWl0Tm9SZW5kZXJcclxuXHRcdFx0OiBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdE5vUmVuZGVyO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgZmlyc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcbi8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRGaXJzdEROKCBzdm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsYXN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEltbWVkaWF0ZUROcyggdm46IFZOKTogRE5bXVxyXG57XHJcblx0bGV0IGFycjogRE5bXSA9IFtdO1xyXG5cdGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuLCBhcnIpO1xyXG5cdHJldHVybiBhcnI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29sbGVjdHMgYWxsIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGUgKHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUpIGludG8gdGhlIGdpdmVuIGFycmF5LlxyXG5mdW5jdGlvbiBjb2xsZWN0SW1tZWRpYXRlRE5zKCB2bjogVk4sIGFycjogRE5bXSk6IHZvaWRcclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdGFyci5wdXNoKCB2bi5vd25ETik7XHJcblx0ZWxzZSBpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdFxyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb2xsZWN0SW1tZWRpYXRlRE5zKCBzdm4sIGFycik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEZpbmRzIHRoZSBmaXJzdCBET00gbm9kZSBpbiB0aGUgdHJlZSBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgY29tZXMgYWZ0ZXIgb3VyIG5vZGUgdGhhdCBpcyBhXHJcbi8vIGNoaWxkIG9mIG91ciBvd24gYW5jaG9yIGVsZW1lbnQuIFdlIHVzZSBpdCBhcyBhIG5vZGUgYmVmb3JlIHdoaWNoIHRvIGluc2VydC9tb3ZlIG5vZGVzIG9mXHJcbi8vIG91ciBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLiBUaGUgYWxnb3JpdGhtIGZpcnN0IGdvZXMgdG8gdGhlIG5leHRcclxuLy8gc2libGluZ3Mgb2Ygb3VyIG5vZGUgYW5kIHRoZW4gdG8gdGhlIG5leHQgc2libGluZ3Mgb2Ygb3VyIHBhcmVudCBub2RlIHJlY3Vyc2l2ZWx5LiBJdCBzdG9wc1xyXG4vLyB3aGVuIHdlIGVpdGhlciBmaW5kIGEgRE9NIG5vZGUgKHRoZW4gaXQgaXMgcmV0dXJuZWQpIG9yIGZpbmQgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnRcclxuLy8gKHRoZW4gbnVsbCBpcyByZXR1cm5lZCkuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MgZm9yIG91clxyXG4vLyBzdWItbm9kZXMgc3RhcnRzIGFuZCwgdGhlcmVmb3JlLCBpdCBvbmx5IHRyYXZlcnNlcyBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuOiBWTiwgYW5jaG9yRE46IEROKTogRE5cclxue1xyXG5cdC8vIGNoZWNrIGlmIHdlIGhhdmUgc2libGluZyBET00gbm9kZXMgYWZ0ZXIgb3VyIGxhc3Qgc3ViLW5vZGUgLSB0aGF0IG1pZ2h0IGJlIGVsZW1lbnRzXHJcblx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRpZiAodm4uc3ViTm9kZXMgJiYgdm4uc3ViTm9kZXMubGVuZ3RoID4gMClcclxuXHR7XHJcblx0XHRsZXQgZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW3ZuLnN1Yk5vZGVzLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmIChkbilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdGlmIChuZXh0U2libGluZyAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRmb3IoIGxldCBudm4gPSB2bi5uZXh0OyBudm4gIT09IHVuZGVmaW5lZDsgbnZuID0gbnZuLm5leHQpXHJcblx0e1xyXG5cdFx0aWYgKCFudm4uYW5jaG9yRE4pXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vIG5vdGUgdGhhdCBnZXRMYXN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXQgaXRcclxuXHRcdC8vIGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdC8vIGFuY2hvciBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSB3YW50ZWQgbm9kZS5cclxuXHRcdGNvbnN0IGRuID0gZ2V0TGFzdEROKCBudm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0cmV0dXJuIHZuLnBhcmVudCAmJiB2bi5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROID8gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLnBhcmVudCwgYW5jaG9yRE4pIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGFycmF5IG9mIG5vZGUgbmFtZXMgc3RhcnRpbmcgd2l0aCB0aGlzIG5vZGUgYW5kIHVwIHVudGlsIHRoZSB0b3AtbGV2ZWwgbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZSArIChudm4uY3JlYXRvciAmJiBudm4uY3JlYXRvci52biA/IGAgKGNyZWF0ZWQgYnkgJHtudm4uY3JlYXRvci52bi5uYW1lfSlgIDogXCJcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGF0aDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBETn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge3JlcXVlc3ROb2RlVXBkYXRlLCBzY2hlZHVsZUZ1bmNDYWxsLCB3cmFwQ2FsbGJhY2tXaXRoVk59IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcbmltcG9ydCB7bm90aWZ5U2VydmljZVB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVVucHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCwgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZH0gZnJvbSBcIi4vUHViU3ViXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQmFzZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZOQmFzZSBpbXBsZW1lbnRzIFZOXHJcbntcclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgYWJzdHJhY3QgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCBuYW1lKCk6IHN0cmluZztcclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIHR5cGU6IG1pbS5WTlR5cGU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOQmFzZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHB1YmxpYyBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBuZXh0OiBWTkJhc2U7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHVibGljIHByZXY6IFZOQmFzZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMgLSBib3RoIGtleWVkIGFuZCB1bmtleWVkIC0gZGVmaW5lZCBvbmx5IGlmIHRoZXJlIGFyZSBzb21lIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXM6IFZOQmFzZVtdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdHB1YmxpYyBrZXllZFN1Yk5vZGVzOiBNYXA8YW55LFZOQmFzZT47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRwdWJsaWMgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5rZXllZFN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5kZXB0aCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBtb3VudGVkICovXHJcblx0cHVibGljIGdldCBpc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYW5jaG9yRE47IH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHR7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBmYWxzZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogbWltLlJlZlByb3BUeXBlLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXJ2aWNlIG9iamVjdHMgcHVibGlzaGVkIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHB1Ymxpc2hlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLGFueT47XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBvYmplY3RzIGNvbnN0aXR1dGluZyBzdWJzY3JpcHRpb25zIG1hZGUgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgc3Vic2NyaWJlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIERlZmF1bHQgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB1c2VkIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHB1Ymxpc2hlcyB0aGVcclxuXHQvLyBzZXJ2aWNlXHJcblx0ZGVmYXVsdFNlcnZpY2U6IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBub2RlIGNhbiBzdWJzY3JpYmUgdG8gYSBzZXJ2aWNlIHRoYXQgaXQgaW1wbGVtZW50cyBpdHNlbGYuIFRoaXNcclxuXHQvLyBpcyB1c2VmdWwgaW4gY2FzZSB3aGVyZSBhIHNlcnZpY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhIGNvbXBvbmVudCBjYW4gY2hhaW4gdG8gYSBzZXJ2aWNlXHJcblx0Ly8gaW1wbGVtZW50ZWQgYnkgYW4gYW5jZXN0b3IgY29tcG9uZW50LlxyXG5cdHVzZVNlbGY6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcCwgZ2V0Rmlyc3RETiwgZ2V0TGFzdEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZORGlzcEFjdGlvblxyXG57XHJcblx0LyoqXHJcblx0ICogRWl0aGVyIGl0IGlzIG5vdCB5ZXQga25vd24gd2hhdCB0byBkbyB3aXRoIHRoZSBub2RlIGl0c2VsZiBvciB0aGlzIGlzIGEgc3RlbSBub2RlOyB0aGF0IGlzLFxyXG5cdCAqIG9ubHkgdGhlIG5vZGUncyBjaGlsZHJlbiBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSBpbnNlcnRlZC4gVGhpcyBtZWFucyB0aGF0IGVpdGhlciB0aGVyZSB3YXMgbm8gY291bnRlcnBhcnQgb2xkIG5vZGVcclxuXHQgKiBmb3VuZCBvciB0aGUgZm91bmQgbm9kZSBjYW5ub3QgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBvbmUgbm9yIGNhbiB0aGUgb2xkIG5vZGUgYmUgcmV1c2VkXHJcblx0ICogYnkgdGhlIG5ldyBvbmUgKGUuZy4gdGhleSBhcmUgb2YgZGlmZmVyZW50IHR5cGUpLlxyXG5cdCAqL1xyXG5cdEluc2VydCA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG9sZCBub2RlLiBUaGlzIHZhbHVlIGlzIGFsc28gdXNlZCBmb3IgSW5zdGFuY2VWTlxyXG5cdCAqIG5vZGVzIGlmIHRoZSBvbGQgYW5kIHRoZSBuZXcgYXJlIHRoZSBzYW1lIG5vZGUuXHJcblx0ICovXHJcblx0VXBkYXRlID0gMixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZORGlzcEdyb3VwIGNsYXNzIGRlc2NyaWJlcyBhIGdyb3VwIG9mIGNvbnNlY3V0aXZlIFZORGlzcCBvYmplY3RzIGNvcnJlc3Bwb25kaW5nIHRvIHRoZVxyXG4gKiBzZXF1ZW5jZSBvZiBzdWItbm9kZXMuIFRoZSBncm91cCBpcyBkZXNjcmliZWQgdXNpbmcgaW5kaWNlcyBvZiBWTkRpc3Agb2JqZWN0cyBpbiB0aGVcclxuICogc3ViTm9kZURpc3AgZmllbGQgb2YgdGhlIHBhcmVudCBWTkRpc3Agb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZORGlzcEdyb3VwXHJcbntcclxuXHQvKiogcGFyZW50IFZORGlzcCB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MgKi9cclxuXHRwdWJsaWMgcGFyZW50RGlzcDogVk5EaXNwO1xyXG5cdFxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlcyBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBJbmRleCBvZiB0aGUgZmlyc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBmaXJzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGxhc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBsYXN0OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGdyb3VwLiAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdCAtIHRoaXMuZmlyc3QgKyAxIH07XHJcblxyXG5cdC8qKiBGaXJzdCBET00gbm9kZSBpbiB0aGUgZ3JvdXAgLSB3aWxsIGJlIGtub3duIGFmdGVyIHRoZSBub2RlcyBhcmUgcGh5c2ljYWxseSB1cGRhdGVkICovXHJcblx0cHVibGljIGZpcnN0RE46IEROO1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBsYXN0RE46IEROO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwYXJlbnREaXNwOiBWTkRpc3AsIGFjdGlvbjogVk5EaXNwQWN0aW9uLCBmaXJzdDogbnVtYmVyLCBsYXN0PzogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50RGlzcCA9IHBhcmVudERpc3A7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMuZmlyc3QgPSBmaXJzdDtcclxuXHRcdHRoaXMubGFzdCA9IGxhc3Q7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgZmlyc3QgYW5kIGxhc3QgRE9NIG5vZGVzIGZvciB0aGUgZ3JvdXAuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBhZnRlciB0aGVcclxuXHQgKiBub2RlcyB3ZXJlIHBoaXNpY2FsbHkgdXBkYXRlZC9pbnNlcnRlZCBhbmQgd2UgY2FuIG9idGFpbiB0aGVpciBET00gbm9kZXMuXHJcblx0ICovXHJcblx0cHVibGljIGRldGVybWluZUROcygpXHJcblx0e1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGxldCB2bjogVk47XHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdDsgaSA8PSB0aGlzLmxhc3Q7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5maXJzdEROID0gZ2V0Rmlyc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5maXJzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3Q7IGkgPj0gdGhpcy5maXJzdDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0dm4gPSB0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IGRpc3Aub2xkVk4gOiBkaXNwLm5ld1ZOO1xyXG5cdFx0XHR0aGlzLmxhc3RETiA9IGdldExhc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5sYXN0RE4pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJZiBhIG5vZGUgaGFzIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBzdWItbm9kZXMsIHRoZW4gd2UgYnVpbGQgZ3JvdXBzLiBUaGUgaWRlYSBpcyB0aGF0XHJcbiAqIG90aGVyd2lzZSwgdGhlIG92ZXJoZWFkIG9mIGJ1aWxkaW5nIGdyb3VwcyBpcyBub3Qgd29ydGggaXQuXHJcbiAqL1xyXG5jb25zdCBOT19HUk9VUF9USFJFU0hPTEQgPSA4O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZORGlzcCBjbGFzcyBpcyBhIHJlY3Vyc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBkZXNjcmliZXMgYSBkaXNwb3NpdGlvbiBmb3IgYSBub2RlIGFuZCBpdHNcclxuICogc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTkRpc3Bcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBuZXdWTjogVk4sIGFjdGlvbiA9IFZORGlzcEFjdGlvbi5Vbmtub3duLCBvbGRWTj86IFZOKVxyXG5cdHtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdFx0dGhpcy5uZXdWTiA9IG5ld1ZOO1xyXG5cdFx0dGhpcy5vbGRWTiA9IG9sZFZOO1xyXG5cdH1cclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRwdWJsaWMgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBOZXcgdmlydHVhbCBub2RlIHRvIGluc2VydCBvciB0byB1cGRhdGUgYW4gb2xkIG5vZGUgKi9cclxuXHRwdWJsaWMgbmV3Vk46IFZOO1xyXG5cclxuXHQvKiogT2xkIHZpcnR1YWwgbm9kZSB0byBiZSB1cGRhdGVkLiBUaGlzIGlzIG9ubHkgdXNlZCBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uICovXHJcblx0cHVibGljIG9sZFZOOiBWTjtcclxuXHJcblx0LyoqIERpc3Bvc2l0aW9uIGZsYWdzIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gVGhpcyBpcyBub3QgdXNlZCBmb3IgdGhlIEluc2VydCBhY3Rpb25zLiAqL1xyXG5cdHB1YmxpYyB1cGRhdGVEaXNwOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFycmF5IG9mIGRpc3Bvc2l0aW9uIG9iamVjdHMgZm9yIHN1Yi1ub2Rlcy4gVGhpcyBpbmNsdWRlcyBub2RlcyB0byBiZSB1cGRhdGVkXHJcblx0ICogYW5kIHRvIGJlIGluc2VydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlRGlzcHM6IFZORGlzcFtdO1xyXG5cclxuXHQvKiogQXJyYXkgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZHVyaW5nIHVwZGF0ZSBvZiB0aGUgc3ViLW5vZGVzLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2Rlc1RvUmVtb3ZlOiBWTltdO1xyXG5cclxuXHQvKiogQXJyYXkgb2YgZ3JvdXBzIG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9yIGluc2VydGVkLiAqL1xyXG5cdHB1YmxpYyBzdWJOb2RlR3JvdXBzOiBWTkRpc3BHcm91cFtdO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBhcmVzIG9sZCBhbmQgbmV3IGNoYWlucyBvZiBzdWItbm9kZXMgYW5kIGRldGVybWluZXMgd2hhdCBub2RlcyBzaG91bGQgYmUgY3JlYXRlZCwgZGVsZXRlZFxyXG5cdCAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuXHQgKiBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGRlbGV0ZWQuIEluIGFkZGl0aW9uLCB0aGUgbmV3IHN1Yi1ub2RlcyBhcmUgZGl2aWRlZFxyXG5cdCAqIGludG8gZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdCAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW5kZXIgdGhlIG5ldyBjb250ZW50XHJcblx0XHRsZXQgbmV3Q2hhaW4gPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHRoaXMub2xkVk4ucmVuZGVyKCkpO1xyXG5cdFx0bGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcblx0XHRsZXQgb2xkQ2hhaW4gPSB0aGlzLm9sZFZOLnN1Yk5vZGVzO1xyXG5cdFx0bGV0IG9sZExlbiA9IG9sZENoYWluID8gb2xkQ2hhaW4ubGVuZ3RoIDogMDtcclxuXHJcblx0XHQvLyBpZiBlaXRoZXIgb2xkIG9yIG5ldyBvciBib3RoIGNoYWlucyBhcmUgZW1wdHksIHdlIGRvIHNwZWNpYWwgdGhpbmdzXHJcblx0XHRpZiAobmV3TGVuID09PSAwICYmIG9sZExlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gYm90aCBjaGFpbiBhcmUgZW1wdHkgLSBkbyBub3RoaW5nXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0xlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gb2xkQ2hhaW47XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZExlbiA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBuZXdDaGFpbi5tYXAoIG5ld1ZOID0+IG5ldyBWTkRpc3AoIG5ld1ZOLCBWTkRpc3BBY3Rpb24uSW5zZXJ0KSk7XHJcblx0XHRcdGlmIChuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpXHJcblx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW25ldyBWTkRpc3BHcm91cCggdGhpcywgVk5EaXNwQWN0aW9uLkluc2VydCwgMCwgbmV3TGVuIC0gMSldO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHJlY3ljbGluZyBvZiBub24tbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2RlcyBieSBub24tbWF0Y2hpbmcgbmV3XHJcblx0XHQvLyBrZXllZCBzdWItbm9kZXMgaXMgYWxsb3dlZC4gSWYgdXBkYXRlIHN0cmF0ZWd5IGlzIG5vdCBkZWZpbmVkIGZvciB0aGUgbm9kZSwgdGhlXHJcblx0XHQvLyByZWN5Y2xpbmcgaXMgYWxsb3dlZC5cclxuXHRcdGxldCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHRydWU7XHJcblx0XHRsZXQgdXBkYXRlU3RyYXRlZ3kgPSB0aGlzLm9sZFZOID8gdGhpcy5vbGRWTi51cGRhdGVTdHJhdGVneSA6IHVuZGVmaW5lZDtcclxuXHRcdGlmICh1cGRhdGVTdHJhdGVneSAmJiB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuXHRcdC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuXHRcdC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcblx0XHRpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5ld1ZOID0gbmV3Q2hhaW5bMF07XHJcblx0XHRcdGxldCBvbGRWTiA9IG9sZENoYWluWzBdO1xyXG5cdFx0XHRsZXQgZGlzcCA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBbZGlzcF07XHJcblx0XHRcdGlmIChvbGRWTiA9PT0gbmV3Vk4gfHxcclxuXHRcdFx0XHQoKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nIHx8IG5ld1ZOLmtleSA9PT0gb2xkVk4ua2V5KSAmJiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IFtvbGRWTl07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiBib3RoIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZTsgdGhlcmVmb3JlLCB0aGUgbWFwIG9mXHJcblx0XHQvLyBrZXllZCBzdWItbm9kZXMgZXhpc3RzIChhbHRob3VnaCBpdCBtaWdodCBiZSBlbXB0eSkuXHJcblx0XHRsZXQgb2xkTWFwID0gdGhpcy5vbGRWTi5rZXllZFN1Yk5vZGVzO1xyXG5cdFx0bGV0IG9sZE1hcFNpemUgPSBvbGRNYXAgPyBvbGRNYXAuc2l6ZSA6IDA7XHJcblxyXG5cdFx0Ly8gcHJlcGFyZSBhcnJheXMgZm9yIFZORGlzcCBvYmplY3RzIGZvciBuZXcgbm9kZXMgYW5kIGZvciBvbGQgbm9kZXMgdG8gYmUgcmVtb3ZlZFxyXG5cdFx0dGhpcy5zdWJOb2RlRGlzcHMgPSBuZXcgQXJyYXkoIG5ld0xlbik7XHJcblx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcblx0XHQvLyBpZiB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBvbGQgbWFwIGlzIGVxdWFsIHRvIHRoZSB0b3RhbCBudW1iZXIgb2Ygb2xkIG5vZGVzLCB0aGF0XHJcblx0XHQvLyBtZWFucyB0aGF0IGFsbCBvbGQgbm9kZXMgYXJlIGtleWVkLiBJZiB0aGlzIGlzIHRoZSBjYXNlIEFORCByZWN5Y2xpbmcgb2Yga2V5ZWQgbm9kZXNcclxuXHRcdC8vIGlzIG5vdCBhbGxvd2VkLCB3ZSB3aWxsIG5vdCBuZWVkIHRvIHB1dCB1bmtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIGFzaWRlLlxyXG5cdFx0Ly8gV2Uga25vdyB0aGF0IHRoZXkgd2lsbCBoYXZlIHRvIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKG9sZE1hcFNpemUgPT09IG9sZExlbiAmJiAhYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdHRoaXMubWF0Y2hPbGRLZXllZE9ubHkoIG9sZE1hcCwgbmV3Q2hhaW4sIG5ld0xlbiwgbmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKTtcclxuXHRcdGVsc2UgaWYgKG9sZE1hcFNpemUgPT09IDAgJiYgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdHRoaXMubWF0Y2hPbGROb25LZXllZE9ubHkoIG9sZENoYWluLCBvbGRMZW4sIG5ld0NoYWluLCBuZXdMZW4sIG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMubWF0Y2hPbGRNaXhlZCggb2xkQ2hhaW4sIG9sZExlbiwgb2xkTWFwLCBuZXdDaGFpbiwgbmV3TGVuLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZywgbmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IGFsbCBvbGQgbm9kZXMgaGF2ZSBrZXlzIGFuZCB0aGUgcmVjeWNsaW5nIG9mIGtleWVkXHJcblx0ICogbm9kZXMgaXMgTk9UIGFsbG93ZWQuIFRoZXJlZm9yZSwgd2hlbiB3ZSB0cnkgdG8gbWF0Y2ggbmV3IG5vZGVzIHRvIG9sZCBvbmVzIHdlIGtub3cgdGhhdFxyXG5cdCAqIG5vbi1rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ldyBub2RlcyB3aWxsIGJlIG1hcmtlZCBmb3IgaW5zZXJ0aW9uLiBXZSBhbHNvIGNhbiBidWlsZFxyXG5cdCAqIGdyb3VwcyAoaWYgcmVxdWVzdGVkKSBpbiB0aGUgc2FtZSBsb29wLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWF0Y2hPbGRLZXllZE9ubHkoIG9sZE1hcDogTWFwPGFueSxWTj4sIG5ld0NoYWluOiBWTltdLCBuZXdMZW46IG51bWJlciwgYnVpbGRHcm91cHM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZGVjbGFyZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgZm9sbG93aW5nIGNvZGVcclxuXHRcdGxldCBkaXNwOiBWTkRpc3AsIG9sZFZOOiBWTiwgbmV3Vk46IFZOLCBrZXk6IGFueSwgYWN0aW9uOiBWTkRpc3BBY3Rpb24sIGdyb3VwOiBWTkRpc3BHcm91cDtcclxuXHJcblx0XHQvLyBpZiB3ZSBuZWVkIHRvIGJ1aWxkIGdyb3VwcywgcHJlcGFyZSBhcnJheSBvZiBncm91cHNcclxuXHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYW5kXHJcblx0XHQvLyBtYXJrIHVua2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgZm9yIGluc2VydGlvbi4gT24gZWFjaCBpdGVyYXRpb24gZGVjaWRlXHJcblx0XHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cCBvciBwdXQgdGhlIG5ldyBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yXHJcblx0XHQvLyBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW4gYSBuZXcgb25lLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRrZXkgPSBuZXdWTi5rZXk7XHJcblxyXG5cdFx0XHQvLyBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSBuZXcgbm9kZVxyXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2xkVk4gPSBvbGRNYXAuZ2V0KCBrZXkpXHJcblx0XHRcdFx0aWYgKG9sZFZOID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgbWFwIC0gdGhpcyB3YXkgdGhlIG9sZCBub2RlcyByZW1haW5pbmcgaW4gdGhlXHJcblx0XHRcdFx0XHQvLyBtYXAgYXJlIHRob3NlIHRoYXQgYXJlIHVubWF0Y2hlZC5cclxuXHRcdFx0XHRcdG9sZE1hcC5kZWxldGUoIGtleSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkaXNwLmFjdGlvbiA9IGFjdGlvbjtcclxuXHJcblx0XHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghZ3JvdXApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gb3BlbiBhIG5ldyBncm91cFxyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleCBhbmQgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlXHJcblx0XHRcdFx0XHQvLyBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlIHRoYXQgc3RhcnRzIGEgbmV3IGdyb3VwIGJlY2F1c2UgZm9yIHN1Y2ggbm9kZVxyXG5cdFx0XHRcdFx0Ly8gZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gYW4gXCJ1cGRhdGVcIiBvciBcIm5vbmVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcblx0XHRcdFx0XHQvLyBpdHMgbmV4dCBzaWJsaW5nIGluIHRoZSBuZXcgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbmV4dCBzaWJsaW5nIGluIHRoZSBvbGQgbGlzdC5cclxuXHRcdFx0XHRcdC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRcdGlmIChpID4gMCAmJiB0aGlzLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBvbGRWTi5wcmV2KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXggYW5kIG9wZW4gbmV3IGdyb3VwLlxyXG5cdFx0XHRcdFx0XHRncm91cC5sYXN0ID0gaSAtIDE7XHJcblx0XHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdFx0Ly8gbmV4dCBub2RlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBjbG9zZSB0aGUgbGFzdCBncm91cCBpZiByZXF1ZXN0ZWQgdG8gYnVpbGQgZ3JvdXBzIChvbmx5IGluIHRoaXMgY2FzZSB3ZSBtYXkgaGF2ZSBhIGdyb3VwIG9iamVjdClcclxuXHRcdGlmIChncm91cClcclxuXHRcdFx0Z3JvdXAubGFzdCA9IG5ld0xlbiAtIDE7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0b2xkTWFwLmZvckVhY2goIG9sZFZOID0+IHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gd2Uga25vdyB0aGF0IG5vbmUgb2YgdGhlIG9sZCBub2RlcyBoYXZlIGtleXMgYW5kIHRoZSByZWN5Y2xpbmcgb2Yga2V5ZWRcclxuXHQgKiBub2RlcyBJUyBhbGxvd2VkLiBUaGVyZWZvcmUsIHdlIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYnkgaW5kZXguIFdlIGFsc28gY2FuIGJ1aWxkXHJcblx0ICogZ3JvdXBzIChpZiByZXF1ZXN0ZWQpIGluIHRoZSBzYW1lIGxvb3AuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtYXRjaE9sZE5vbktleWVkT25seSggb2xkQ2hhaW46IFZOW10sIG9sZExlbjogbnVtYmVyLCBuZXdDaGFpbjogVk5bXSwgbmV3TGVuOiBudW1iZXIsIGJ1aWxkR3JvdXBzOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnk7XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIGFuZCB0cnkgdG8gbWF0Y2ggbmV3IGFuZCBvbGQgbm9kZXMgYnlcclxuXHRcdC8vIGluZGV4LlxyXG5cdFx0bGV0IGkgPSAwO1xyXG5cdFx0Zm9yKCA7IGkgPCBuZXdMZW4gJiYgaSA8IG9sZExlbjsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdWTiA9IG5ld0NoYWluW2ldO1xyXG5cdFx0XHRkaXNwID0gdGhpcy5zdWJOb2RlRGlzcHNbaV0gPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdG9sZFZOID0gb2xkQ2hhaW5baV07XHJcblxyXG5cdFx0XHQvLyBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSBuZXcgbm9kZVxyXG5cdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1haW5pbmcgbmV3IG5vZGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGk7IGogPCBuZXdMZW47IGorKylcclxuXHRcdFx0dGhpcy5zdWJOb2RlRGlzcHNbal0gPSBuZXcgVk5EaXNwKCBuZXdDaGFpbltqXSwgVk5EaXNwQWN0aW9uLkluc2VydCk7XHJcblxyXG5cdFx0Ly8gcmVtYWluaW5nIG9sZCBub2RlcyBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGk7IGogPCBvbGRMZW47IGorKylcclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZENoYWluW2pdKTtcclxuXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB3ZSBrbm93IHRoYXQgbm90IGFsbCBvbGQgbm9kZXMgaGF2ZSBrZXlzIG9yIHRoZSByZWN5Y2xpbmcgb2ZcclxuXHQgKiBrZXllZCBub2RlcyBpcyBhbGxvd2VkLiBUaGVyZWZvcmUsIHdoZW4gd2UgaGF2ZSBhIG5vbi1rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ld1xyXG5cdCAqIG5vZGUsIHdlIGZpcnN0IHB1dCBpdCBhc2lkZSBhbmQgb25seSBhZnRlciB3ZSB3ZW50IG92ZXIgYWxsIG5ldyBub2RlcyB3ZSBjYW4gZGVjaWRlXHJcblx0ICogd2hhdCB0byBkbyB3aXRoIHRob3NlIHRoYXQgd2UgcHV0IGFzaWRlLiBBbHNvLCBvbmx5IGFmdGVyIHdlIHdlbnQgb3ZlciBhbGwgbmV3IG5vZGVzIHdlXHJcblx0ICogY2FuIGJ1aWxkIGdyb3VwcyBpZiByZXF1ZXN0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtYXRjaE9sZE1peGVkKCBvbGRDaGFpbjogVk5bXSwgb2xkTGVuOiBudW1iZXIsIG9sZE1hcDogTWFwPGFueSxWTj4sIG5ld0NoYWluOiBWTltdLFxyXG5cdFx0XHRcdFx0bmV3TGVuOiBudW1iZXIsIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nOiBib29sZWFuLCBidWlsZEdyb3VwczogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRcdC8vIGRlY2xhcmUgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIHRocm91Z2hvdXQgdGhlIGZvbGxvd2luZyBjb2RlXHJcblx0XHRsZXQgZGlzcDogVk5EaXNwLCBvbGRWTjogVk4sIG5ld1ZOOiBWTiwga2V5OiBhbnk7XHJcblxyXG5cdFx0Ly8gTG9vcCBvdmVyIG5ldyBub2RlcywgY3JlYXRlIFZORGlzcCBzdHJ1Y3R1cmVzIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgYW5kXHJcblx0XHQvLyBwdXQgdW5tYXRjaGVkIG5ldyBub2RlcyBhc2lkZVxyXG5cdFx0bGV0IG5ld1VubWF0Y2hlZERpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdMZW47IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bmV3Vk4gPSBuZXdDaGFpbltpXTtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHRrZXkgPSBuZXdWTi5rZXk7XHJcblxyXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBwdXQgdGhlIHVua2V5ZWQgbmV3IG5vZGUgYXNpZGVcclxuXHRcdFx0XHRuZXdVbm1hdGNoZWREaXNwcy5wdXNoKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvbGRWTiA9IG9sZE1hcC5nZXQoIGtleSlcclxuXHRcdFx0XHRpZiAob2xkVk4gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiByZWN5Y2xpbmcgYWxsb3dlZCB3ZSBwdXQgdW5tYXRjaGVkIG5vZGUgYXNpZGU7IG90aGVyd2lzZSwgd2UgaW5kaWNhdGUgdGhhdFxyXG5cdFx0XHRcdFx0Ly8gaXQgc2hvdWxkIGJlIGluc2VydGVkXHJcblx0XHRcdFx0XHRpZiAoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXHJcblx0XHRcdFx0XHRcdG5ld1VubWF0Y2hlZERpc3BzLnB1c2goIGRpc3ApO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAob2xkVk4gPT09IG5ld1ZOIHx8IGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIG1hcCAtIHRoaXMgd2F5IHRoZSBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoZVxyXG5cdFx0XHRcdFx0Ly8gbWFwIGFyZSB0aG9zZSB0aGF0IGFyZSB1bm1hdGNoZWQuXHJcblx0XHRcdFx0XHRvbGRNYXAuZGVsZXRlKCBrZXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBvbGQgc3ViLW5vZGVzLCBza2lwIGFscmVhZHkgbWF0Y2hlZCBvbmVzIGFuZCB0cnkgdG8gbWF0Y2ggb3RoZXJzIHRvIHRoZVxyXG5cdFx0Ly8geWV0LXVubWF0Y2hlZCBuZXcgbm9kZXMuIFVubWF0Y2hlZCBvbGQgbm9kZXMgYXJlIHRob3NlIHRoYXQgYXJlIGVpdGhlciB1bmtleWVkIG9yXHJcblx0XHQvLyB0aGUga2V5ZWQgb25lcyB0aGF0IGFyZSBzdGlsbCBpbiB0aGUgb2xkTWFwLlxyXG5cdFx0bGV0IGlPbGQgPSAwLCBpTmV3ID0gMCwgbmV3VW5tYXRjaGVkTGVuID0gbmV3VW5tYXRjaGVkRGlzcHMubGVuZ3RoO1xyXG5cdFx0d2hpbGUoIGlPbGQgPCBvbGRMZW4gJiYgaU5ldyA8IG5ld1VubWF0Y2hlZExlbilcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IG1hdGNoZWQga2V5ZWQgbm9kZXNcclxuXHRcdFx0b2xkVk4gPSBvbGRDaGFpbltpT2xkKytdO1xyXG5cdFx0XHRpZiAob2xkVk4ua2V5ICE9PSB1bmRlZmluZWQgJiYgIW9sZE1hcC5oYXMoIG9sZFZOLmtleSkpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRkaXNwID0gbmV3VW5tYXRjaGVkRGlzcHNbaU5ldysrXTtcclxuXHRcdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVjeWNsaW5nIGlzIG5vdCBhbGxvd2VkIGFuZCBlaXRoZXIgb2xkIG9yIG5ldyBub2RlcyBpcyBrZXllZCwgaW5zZXJ0IG5ldyBhbmQgcmVtb3ZlIG9sZFxyXG5cdFx0XHRpZiAoIWFsbG93S2V5ZWROb2RlUmVjeWNsaW5nICYmIChvbGRWTi5rZXkgIT09IHVuZGVmaW5lZCB8fCBuZXdWTi5rZXkgIT09IHVuZGVmaW5lZCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBuZXcgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuXHRcdGZvciggbGV0IGogPSBpTmV3OyBqIDwgbmV3VW5tYXRjaGVkTGVuOyBqKyspXHJcblx0XHRcdG5ld1VubWF0Y2hlZERpc3BzW2pdLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgbGVmdCwgdGhleSBzaG91bGQgYmUgcmVtb3ZlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGlPbGQ7IGogPCBvbGRMZW47IGorKylcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IG1hdGNoZWQga2V5ZWQgbm9kZXNcclxuXHRcdFx0b2xkVk4gPSBvbGRDaGFpbltqXTtcclxuXHRcdFx0aWYgKG9sZFZOLmtleSAhPT0gdW5kZWZpbmVkICYmICFvbGRNYXAuaGFzKCBvbGRWTi5rZXkpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYnVpbGRHcm91cHMpXHJcblx0XHRcdHRoaXMuYnVpbGRTdWJOb2RlR3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZyb20gYSBmbGF0IGxpc3Qgb2YgbmV3IHN1Yi1ub2RlcyBidWlsZHMgZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGVpdGhlclxyXG5cdCAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBidWlsZFN1Yk5vZGVHcm91cHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgd2UgaGF2ZSBzb21lIG51bWJlciBvZiBzdWItbm9kZSBkaXNwb3NpdGlvbnNcclxuXHRcdGxldCBjb3VudCA9IHRoaXMuc3ViTm9kZURpc3BzLmxlbmd0aDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG5cdFx0XHQvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcblx0XHRcdGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBjcmVhdGUgYXJyYXkgb2YgZ3JvdXBzIGFuZCBjcmVhdGUgdGhlIGZpcnN0IGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IG5vZGVcclxuXHRcdHRoaXMuc3ViTm9kZUdyb3VwcyA9IFtdO1xyXG5cdFx0bGV0IGdyb3VwOiBWTkRpc3BHcm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgdGhpcy5zdWJOb2RlRGlzcHNbMF0uYWN0aW9uLCAwKTtcclxuXHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gZGVjaWRlIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwXHJcblx0XHQvLyBvciBwdXQgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvciBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW5cclxuXHRcdC8vIGEgbmV3IG9uZS5cclxuXHRcdGxldCBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRmb3IoIGxldCBpID0gMTsgaSA8IGNvdW50OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0YWN0aW9uID0gZGlzcC5hY3Rpb247XHJcblx0XHRcdGlmIChhY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleC4gRGVjcmVtZW50IHRoZSBpdGVyYXRpbmcgaW5kZXggc28gdGhhdFxyXG5cdFx0XHRcdC8vIHRoZSBuZXh0IGl0ZXJhdGlvbiB3aWxsIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlXHJcblx0XHRcdFx0Ly8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuXHRcdFx0XHRncm91cC5sYXN0ID0gaSAtIDE7XHJcblx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhbiBcInVwZGF0ZVwiIG9yIFwibm9uZVwiIG5vZGUgaXMgb3V0LW9mLW9yZGVyIGFuZCBzaG91bGQgY2xvc2UgdGhlIGN1cnJlbnQgZ3JvdXAgaWZcclxuXHRcdFx0XHQvLyBpdHMgbmV4dCBzaWJsaW5nIGluIHRoZSBuZXcgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbmV4dCBzaWJsaW5nIGluIHRoZSBvbGQgbGlzdC5cclxuXHRcdFx0XHQvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcblx0XHRcdFx0aWYgKHRoaXMuc3ViTm9kZURpc3BzW2ktMV0ub2xkVk4gIT09IGRpc3Aub2xkVk4ucHJldilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgY3VycmVudCBpbmRleC5cclxuXHRcdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRcdGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBhY3Rpb24sIGkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFsbCBjb25zZWN1dGl2ZSBcImluc2VydFwiIG5vZGVzIGJlbG9uZyB0byB0aGUgc2FtZSBncm91cCBzbyB3ZSBqdXN0IHdhaXQgZm9yIHRoZVxyXG5cdFx0XHQvLyBuZXh0IG5vZGVcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjbG9zZSB0aGUgbGFzdCBncm91cFxyXG5cdFx0aWYgKGdyb3VwICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGdyb3VwLmxhc3QgPSBjb3VudCAtIDE7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdXBkYXRlIG9mIHRoZSBnaXZlbiBvbGQgbm9kZSBmcm9tIHRoZSBnaXZlbiBuZXcgbm9kZSBpcyBwb3NzaWJsZS4gVXBkYXRlXHJcbiAqIGlzIHBvc3NpYmxlIGlmIHRoZSB0eXBlcyBvZiBub2RlcyBhcmUgdGhlIHNhbWUgYW5kIGVpdGhlciB0aGUgaXNVcGRhdGVQb3NzaWJsZSBtZXRob2QgaXMgbm90XHJcbiAqIGRlZmluZWQgb24gdGhlIG9sZCBub2RlIG9yIGl0IHJldHVybnMgdHJ1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOOiBWTiwgbmV3Vk46IFZOKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIChvbGRWTi50eXBlID09PSBuZXdWTi50eXBlICYmXHJcblx0XHRcdChvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlID09PSB1bmRlZmluZWQgfHwgb2xkVk4uaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk4pKSk7XHJcblxyXG59XHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvbWltXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9IdG1sVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N2Z1R5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Mb2NhbFN0eWxlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9FdmVudFNsb3RcIjtcclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4vU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFByb3BJbmZvID0gQXR0clByb3BJbmZvIHwgRXZlbnRQcm9wSW5mbyB8IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLiBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b21cclxuXHQvLyBhdHRyaWJ1dGVzIGlzIGFkZGVkIHRvIHRoaXMgb2JqZWN0IHdoZW4gdGhlIHJlZ2lzdGVyUHJvcGVydHkgbWV0aG9kIGlzIGNhbGxlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRzdHlsZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdHZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmVmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZVZhbHVlUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRjaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdENoZWNrZWQ6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRDaGVja2VkUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cclxuXHRcdC8vIGV2ZW50c1xyXG5cdFx0YWJvcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25pdGVyYXRpb246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhdXhjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ymx1cjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5dGhyb3VnaDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xvc2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvbnRleHRtZW51OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjdWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRibGNsaWNrOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdC8vZHJhZ2V4aXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ292ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJvcDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHVyYXRpb25jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVtcHRpZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVuZGVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Zm9jdXM6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGdvdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRpbnB1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW52YWxpZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5ZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5cHJlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRkYXRhOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRtZXRhZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb3N0cG9pbnRlcmNhcHR1cmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdG1vdXNlbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZW1vdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNldXA6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBhdXNlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5aW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmVudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3ZlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcnVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwcm9ncmVzczogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmF0ZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmVzZXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2l6ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Nyb2xsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVrZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlZWtpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlbGVjdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3RhbGxlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VibWl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzdXNwZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0aW1ldXBkYXRlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b2dnbGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2htb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9ucnVuOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHZvbHVtZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2FpdGluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2hlZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5lcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y29weTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXN0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiID8gcHJvcFZhbCA6IHByb3BWYWwudG9TdHJpbmcoKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIHByb3BlcnR5IGFyZSBkaWZmZXJlbnQgYW5kIHNldHMgdGhlXHJcblx0Ly8gdXBkYXRlZCB2YWx1ZSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kXHJcblx0Ly8gZmFsc2UgaWYgbm8gY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IGEgc3BlY2lhbCBjYXNlIChwcm9wZXJ0eSBpcyBub3QgaW4gb3VyIGxpc3QpIGp1c3QgY29tcGFyZSB0aGVtIGFuZFxyXG5cdFx0XHQvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgc2V0IHRoZSBhdHRyaWJ1dGUgdG8gdGhlIG5ldyB2YWx1ZS5cclxuXHRcdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBwcm9wTmFtZSwgdHlwZW9mIG5ld1Byb3BWYWwgPT09IFwic3RyaW5nXCIgPyBuZXdQcm9wVmFsIDogbmV3UHJvcFZhbC50b1N0cmluZygpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHVwZGF0ZVZhbCA9PT0gXCJzdHJpbmdcIiA/IHVwZGF0ZVZhbCA6IHVwZGF0ZVZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8gUmVnaXN0ZXIgZXZlbnRzIHdpdGggc3BlY2lhbCBuYW1lc1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydFwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZUNhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1yZW1vdmVcIiB9KTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIHN0eWxlIHByb3BlcnR5LiBTdHlsZSBwcm9wZXJ0eSBjYW4gYmUgc3BlY2lmaWVkIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyB0aGVcclxuLy8gQ1NTU3R5bGVEZWNsYXJhdGlvbiBvYmplY3QuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mIGRpZmZlcmVudCB0eXBlc1xyXG4vLyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSwgdGhlbiB0aGUgbmV3XHJcbi8vIHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhbiBvYmplY3QgaXNcclxuLy8gcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkIGl0ZW1zLCB0aGVcclxuLy8ga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0XHRmb3IoIGxldCBrZXkgaW4gcHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSBwcm9wVmFsW2tleV07XHJcblx0XHRcdGlmIChlbG1TdHlsZVtrZXldICE9PSBrZXlWYWwpXHJcblx0XHRcdFx0ZWxtU3R5bGVba2V5XSA9IGtleVZhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYW55XHJcbntcclxuXHRpZiAodHlwZW9mIG9sZFByb3BWYWwgIT09IHR5cGVvZiBuZXdQcm9wVmFsKVxyXG5cdFx0cmV0dXJuIG5ld1Byb3BWYWw7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGNvbnN0IG9sZFN0eWxlID0gb2xkUHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHRcdGNvbnN0IG5ld1N0eWxlID0gbmV3UHJvcFZhbCBhcyBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHJcblx0XHRjb25zdCB1cGRhdGVWYWw6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRsZXQgY2hhbmdlc0V4aXN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG9sZFN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGNvbnN0IG5ld1ZhbDogYW55ID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdWYWwgIT09IG9sZFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0XHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdFx0Zm9yKCBsZXQga2V5IGluIG5ld1N0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBvbGRWYWw6IGFueSA9IG9sZFN0eWxlW2tleV07XHJcblx0XHRcdGlmIChvbGRWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHlsZVtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoYW5nZXNFeGlzdCA/IHVwZGF0ZVZhbCA6IHVuZGVmaW5lZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Y29uc3QgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAoZWxtIGFzIEhUTUxFbGVtZW50KS5zdHlsZTtcclxuXHRmb3IoIGxldCBrZXkgaW4gdXBkYXRlVmFsIGFzIE9iamVjdClcclxuXHR7XHJcblx0XHRjb25zdCBrZXlWYWw6IGFueSA9IHVwZGF0ZVZhbFtrZXldO1xyXG5cdFx0aWYgKGtleVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0gbnVsbDtcclxuXHRcdFx0Ly9lbG1TdHlsZVtrZXldID0gXCJpbml0aWFsXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdGVsbVN0eWxlW2tleV0gPSBrZXlWYWw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vIERldGVybWluZXMgd2hldGhlciB0aGUgZmlyc3Qgc3R5bGUgaXMgYSBjb21wbGV0ZSBzdWJzZXQgb2YgdGhlIHNlY29uZCBvbmU7IHRoYXQgaXMga2V5c1xyXG4vLy8vIGluIHRoZSBmaXJzdCBzdHlsZSBhcmUgYWxsIGZvdW5kIGFuZCBoYXZlIHRoZSBzYW1lIHZhbHVlcyBpbiB0aGUgc2Vjb25kIHN0eWxlLlxyXG4vL2Z1bmN0aW9uIGlzU3R5bGUxU3Vic2V0T2ZTdHlsZTIoIHN0eWxlMTogT2JqZWN0LCBzdHlsZTI6IE9iamVjdCk6IGJvb2xlYW5cclxuLy97XHJcbi8vXHRmb3IoIGxldCBrZXkxIGluIHN0eWxlMSlcclxuLy9cdHtcclxuLy9cdFx0aWYgKHN0eWxlMVtrZXkxXSAhPT0gc3R5bGUyW2tleTFdKVxyXG4vL1x0XHRcdHJldHVybiBmYWxzZTtcclxuLy9cdH1cclxuXHJcbi8vXHRyZXR1cm4gdHJ1ZTtcclxuLy99XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRhdHRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGV4dGVuZHMgSUV2ZW50U2xvdDxURnVuYz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdCAqIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ICovXHJcblx0ZmlyZTogVEZ1bmM7XHJcblxyXG5cdC8qKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFdmVudFNsb3QgY2xhc3MgZGVmaW5lcyBhbiBldmVudCB3aXRoIGN1c3RvbSBwYXJhbWV0ZXJzIGFzIG1lbWJlcnMgb2YgY2xhc3NlcyB3aXRob3V0IHRoZVxyXG4gKiBuZWVkIGZvciB0aGUgY2xhc3NlcyB0byBkZXJpdmUgZnJvbSBFdmVudFRhcmdldCBhbmQgdXNlIHN0cmluZyBuYW1lcyBmb3IgZXZlbnRzLiBNdWx0aXBsZVxyXG4gKiBsaXN0ZW5lcnMgY2FuIGJlIGFkZGVkL3JlbW92ZWQgdG8vZnJvbSBhbiBldmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj4gaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXI8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzID09PSBudWxsKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQ8VEZ1bmM+KCk7XHJcblxyXG5cdFx0dGhpcy5saXN0ZW5lcnMuYWRkKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz4gPSBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIHJlYWxseSBjYWxscyB0aGUgbGlzdGVuZXJzIGluIGEgbG9vcC4gSXQgZGVjb25zdHVjdHMgdGhlIFwiYXJndW1lbnRzXCIgdmFsdWVcclxuXHQvLyBpbiBvcmRlciB0byBwYXNzIHRoZSBwcm9wZXIgcGFyYW1ldGVycyB0byB0aGUgbGlzdGVuZXJzLlxyXG5cdHByaXZhdGUgcmVhbEZpcmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdFx0bGlzdGVuZXIoIC4uLmFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEludGVyZmFjZSBhbmQgY2xhc3MgZm9yIHNpbXBsZSBldmVudHMgYWNjZXB0aW5nIG5vIHBhcmFtZXRlcnMuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIElFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBFdmVudFNsb3Q8KCk9PnZvaWQ+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3QgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGUgVFxyXG4gKiBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3Q8KCkgPT4gdm9pZD47XHJcbiAqICAgICBjaGFuZ2U6IElFdmVudFNsb3QobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdDxUW1BdPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90T3duZXIgdHlwZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGZvciBlYWNoIHByb3BlcnR5IGZyb20gdGhlIHRlbXBsYXRlIHR5cGVcclxuICogVCBoYXMgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gZXZlbnQgc2xvdCBmb3IgYSBmdW5jdGlvbiwgd2hvc2Ugc2lnbmF0dXJlIGlzIHRoZSBzYW1lXHJcbiAqIGFzIG9mIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIGZvbGxvd2luZyB0eXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIHRoZW4gdGhlIE11bHRpRXZlbnRTbG90T3duZXI8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogSUV2ZW50U2xvdE93bmVyPCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90T3duZXIobmV3VmFsOiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90T3duZXI8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgd2lsbCBoYXZlIGV2ZW50IHNsb3RzIGZvciBlYWNoIHByb3BlcnR5IG9mIHRoZSB0ZW1wbGF0ZSB0eXBlIFQuIFRoZVxyXG4gKiBjYWxsZXIgd2lsbCBiZSB0aGUgb3duZXIgb2YgdGhlIGV2ZW50IHNsb3RzOyB0aGF0IGlzLCBpdCB3aWxsIGJlIGFibGUgdG8gZmlyZSBldmVudHMgYW5kXHJcbiAqIGNsZWFyIGFsbCBsaXN0ZW5lcnMgd2hlbiBuZWNlc3NhcnkuIFRoaXMgYWxsb3dzIHRoZSBmb2xsb3dpbmcgY29kZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogXHJcbiAqIGludGVyZmFjZSBJTXlDbGFzc1xyXG4gKiB7XHJcbiAqICAgICBldmVudHM6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz47XHJcbiAqICAgICBkb1NvbWV0aGluZygpOiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBjbGFzcyBNeUNsYXNzIGltcGxlbWVudHMgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgcHJpdmF0ZSBfZXZlbnRzID0gY3JlYXRlTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPigpO1xyXG4gKiAgICAgcHVibGljIGdldCBldmVudHMoKTogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB7IHJldHVybiB0aGlzLl9ldmVudHM7IH1cclxuICogXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICogXHJcbiAqIGxldCBvYmo6IElNeUNsYXNzID0gbmV3IE15Q2xhc3MoKTtcclxuICogb2JqLmV2ZW50cy5jaGFuZ2UuYWRkKCAobjogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyhuKSk7XHJcbiAqIG9iai5kb1NvbWV0aGluZygpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4oKTogTXVsdGlFdmVudFNsb3RPd25lcjxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBQcm94eSgge30sIG5ldyBNdWx0aUV2ZW50U2xvdEhhbmRsZXIoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBwcm94eSBoYW5kbGVyIGZvciB0aGUgTXVsdGlFdmVudFNsb3Qgb2JqZWN0LiBUaGUgaGFuZGxlciBkb2Vzbid0IHVzZSBhbnlcclxuICogdGFyZ2V0IG9iamVjdCAtIGl0IHNpbXBseSBjcmVhdGVzIEV2ZW50U2xvdCBwcm9wZXJ0eSBpbiBpdHNlbGYgd2hlbmV2ZXIgdGhlIGdldCBtZXRob2QgaXNcclxuICogY2FsbGVkLiBUaGUgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tpbmcgZW5zdXJlcyB0aGF0IG9ubHkgcHJvcGVyIGV2ZW50IHNsb3QgbmFtZXMgY2FuIGJlIHVzZWQuXHJcbiAqL1xyXG5jbGFzcyBNdWx0aUV2ZW50U2xvdEhhbmRsZXJcclxue1xyXG5cdHB1YmxpYyBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBzdHJpbmcsIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiB0aGlzW3Byb3BdID0gbmV3IEV2ZW50U2xvdCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR2F0aGVyaW5nIHVwZGF0ZSBzdGF0aXN0aWNzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gQ2F0ZWdvcmllcyBvZiBjaGFuZ2VkIGVudGl0aWVzIHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LlxyXG5leHBvcnQgZW51bSBTdGF0c0NhdGVnb3J5XHJcbntcclxuXHRSb290LFxyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghZGVlcENvbXBhcmUoIG8xW3BdLCBvMltwXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHAgaW4gbzIpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHAgaW4gbzEpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpKVxyXG5cdHtcclxuXHRcdGlmIChvMS5sZW5ndGggIT09IG8yLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMCwgbGVuID0gbzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWRlZXBDb21wYXJlKCBvMVtpXSwgbzJbaV0pKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGVzZSBhcmUgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMgb3IgZnVuY3Rpb25zIGFuZCB0aGV5IGFyZSBkaWZmZXJlbnRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoT2JqZWN0KCBvOiBhbnkpOiBudW1iZXJcclxue1xyXG5cdGlmIChvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gMDtcclxuXHRlbHNlIGlmIChvID09PSBudWxsKVxyXG5cdFx0cmV0dXJuIDE7XHJcblx0ZWxzZSBpZiAoaXNOYU4oMCkpXHJcblx0XHRyZXR1cm4gMjtcclxuXHRlbHNlIGlmIChvID09PSB0cnVlKVxyXG5cdFx0cmV0dXJuIDM7XHJcblx0ZWxzZSBpZiAobyA9PT0gZmFsc2UpXHJcblx0XHRyZXR1cm4gNDtcclxuXHJcblx0bGV0IGggPSAxMDtcclxuXHJcblx0aWYgKHR5cGVvZiBvID09PSBcIm51bWJlclwiKVxyXG5cdFx0cmV0dXJuIDEwICsgbztcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvKTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8ubmFtZSk7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvKSlcclxuXHR7XHJcblx0XHRsZXQgbGVuID0gby5sZW5ndGg7XHJcblx0XHRsZXQgaCA9IDEwICsgbGVuO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0IGggKz0gaSArIGhhc2hPYmplY3QoIG9baV0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgaCA9IDEwO1xyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvKVxyXG5cdFx0XHRoICs9IGhhc2hTdHJpbmcocCkgKyBoYXNoT2JqZWN0KG9bcF0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoU3RyaW5nKCBzOiBzdHJpbmcpOiBudW1iZXJcclxue1xyXG5cdGlmICghcylcclxuXHRcdHJldHVybiA1O1xyXG5cclxuXHRsZXQgbGVuID0gcy5sZW5ndGg7XHJcblx0bGV0IGggPSAxMCArIGxlbjtcclxuXHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0aCArPSBzLmNoYXJDb2RlQXQoaSk7XHJcblx0cmV0dXJuIGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdGxldCByZXNDbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0Zm9yKCBsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFjbGFzc05hbWUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBjbGFzc05hbWVBc1N0cmluZzogc3RyaW5nID0gdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gY2xhc3NOYW1lIGFzIHN0cmluZ1xyXG5cdFx0XHRcdDogKGNsYXNzTmFtZSBhcyBzdHJpbmdbXSkuam9pbiggXCIgXCIpO1xyXG5cclxuXHRcdGlmIChyZXNDbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmVzQ2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVzQ2xhc3NOYW1lICs9IFwiIFwiO1xyXG5cclxuXHRcdHJlc0NsYXNzTmFtZSArPSBjbGFzc05hbWVBc1N0cmluZztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNDbGFzc05hbWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBtaW0uU3R5bGVQcm9wVHlwZVtdKTogbWltLlN0eWxlUHJvcFR5cGVcclxue1xyXG5cdC8vIGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIGFjY3VtdWxhdGluZyBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0bGV0IHJlc1N0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlLCAuLi5zdHlsZXMpO1xyXG5cdHJldHVybiByZXNTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBmaXJzdCBvbmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc1RvKCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUsIC4uLnN0eWxlczogKG1pbS5TdHlsZVByb3BUeXBlIHwgc3RyaW5nKVtdICk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IHN0eWxlIG9mIHN0eWxlcylcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHQvLyBwYXJzZSB0aGUgc3R5bGUgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0PyBzdHlsZSBhcyBtaW0uU3R5bGVQcm9wVHlwZVxyXG5cdFx0XHRcdDogcGFyc2VTdHlsZVN0cmluZyggc3R5bGUgYXMgc3RyaW5nKTtcclxuXHJcblx0XHQvLyBjb3B5IGFsbCBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGVoIGN1cnJlbnQgc3R5bGUgb2JqZWN0IHRvIG91ciByZXN1bHRhbnQgb2JqZWN0XHRcdFx0XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0cmVzU3R5bGVbcHJvcE5hbWVdID0gc3R5bGVPYmpbcHJvcE5hbWVdO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIHN0eWxlIHN0cmluZyBpbnRvIHRoZSBTdHlsZSBvYmplY3QuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0eWxlU3RyaW5nKCBzOiBzdHJpbmcpOiBtaW0uU3R5bGVQcm9wVHlwZVxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cclxuXHRsZXQgcmV0U3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblxyXG5cdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdGZvciggbGV0IGVsbSBvZiBlbG1zKVxyXG5cdHtcclxuXHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0aWYgKCFwYWlyIHx8IHBhaXIubGVuZ3RoID09PSAwIHx8IHBhaXIubGVuZ3RoID4gMilcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0cmV0U3R5bGVbZGFzaFRvQ2FtZWwoIHBhaXJbMF0udHJpbSgpKV0gPSBwYWlyWzFdLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXRTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgbmFtZXMgd2l0aCBkYXNoZXMgaW50byBuYW1lcyBpbiBjYW1lbENhc2UsIHdoZXJlIGV2ZXJ5IGNoYXJhY3RlciBhZnRlciBhIGRhc2ggaXNcclxuICogY2FwaXRhbGl6ZWQgYW5kIGRhc2hlcyBhcmUgcmVtb3ZlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IG1pbS5TbGljZVtdKTogbWltLlNsaWNlXHJcbntcclxuXHRsZXQgcmVzU2xpY2U6IG1pbS5TbGljZSA9IHt9O1xyXG5cdG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG5cdHJldHVybiByZXNTbGljZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuLy8gaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXNUbyggcmVzU2xpY2U6IG1pbS5TbGljZSwgLi4uc2xpY2VzOiBtaW0uU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdGlmIChyZXNTbGljZSA9PT0gdW5kZWZpbmVkIHx8IHJlc1NsaWNlID09PSBudWxsKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRmb3IoIGxldCBzbGljZSBvZiBzbGljZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0aWYgKHNsaWNlLnN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2Uuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5zdHlsZSA9IHt9O1xyXG5cclxuXHRcdFx0bWVyZ2VTdHlsZXNUbyggcmVzU2xpY2Uuc3R5bGUsIHNsaWNlLnN0eWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY2xhc3NOYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gXCJcIjtcclxuXHJcblx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5wcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnByb3BzID0ge307XHJcblxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRyZXNTbGljZVtwcm9wTmFtZV0gPSBzbGljZVtwcm9wTmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jb250ZW50ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZENvbnRlbnQ6IGFueSA9IHJlc1NsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIG9sZENvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9