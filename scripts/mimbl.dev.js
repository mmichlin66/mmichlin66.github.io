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
exports.updatable = exports.mimblStyleSchedulerType = exports.unmount = exports.mount = exports.PromiseProxy = exports.FuncProxy = exports.Component = exports.jsx = exports.wrapCallback = exports.mergeStylesTo = exports.mergeStyles = exports.mergeClasses = exports.mergeSlicesTo = exports.mergeSlices = exports.registerCustomEvent = exports.registerCustomAttribute = exports.isSvgSvg = exports.isSvg = exports.Fragment = exports.setRef = exports.Ref = void 0;
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
 * @param thisCallback Object that will be the value of "this" when the callback is executed.
 * @param vn Virtual node in whose context the callback will be executed.
 * @returns The wrapper function that should be used instead of the original callback.
 */
function wrapCallback(callback, thisCallback, vn) {
    return Reconciler_1.wrapCallbackWithVN(callback, thisCallback, vn);
}
exports.wrapCallback = wrapCallback;
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
    return Reconciler_1.createNodesFromJSX(tag, props, children);
}
exports.jsx = jsx;
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
    wrapCallback(callback, thisCallback) {
        return Reconciler_1.wrapCallbackWithVN(callback, thisCallback, this.vn);
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
        this.comp.vn = this;
        // don't need try/catch because it will be caught up the chain
        if (this.comp.willMount)
            this.comp.willMount();
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
        this.renderWatcher = null;
        if (this.comp.willUnmount) {
            // need try/catch but only to log
            try {
                this.comp.willUnmount();
            }
            catch (err) {
                console.error(`Exception in willUnmount of component '${this.name}'`, err);
            }
        }
        this.comp.vn = undefined;
        this.comp = undefined;
/////////////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
//////////////////
    }
    // Notifies the virtual node that it was successfully mounted. This method is called after the
    // content of node and all its sub-nodes is added to the DOM tree.
    // This method is part of the Commit phase.
    didMount() {
        if (this.comp.didMount) {
            // need try/catch but only to log
            try {
                this.comp.didMount();
            }
            catch (err) {
                console.error(`Exception in didMount of component '${this.name}'`, err);
            }
        }
    }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    get supportsErrorHandling() {
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
        let svgInfo = SvgElms.getSvgElmInfo(this.elmName);
        this.isSvg = svgInfo !== undefined && (svgInfo !== true || this.anchorDN.namespaceURI.endsWith("svg"));
        this.elm = this.isSvg
            ? this.elm = document.createElementNS(SvgElms.namespace, SvgElms.getElmName(svgInfo, this.elmName))
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
/// #endif
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
            this.willUnmount();
            this.comp = newComp;
            this.willMount();
        }
        return VN_1.VNUpdateDisp.getStockValue(false, needsUpdating);
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
        super.willMount();
        // set the reference value if specified
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.comp);
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
        super.willUnmount();
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
/////////////////////
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
exports.createNodesFromJSX = exports.scheduleFuncCall = exports.requestNodeUpdate = exports.wrapCallbackWithVN = exports.s_currentClassComp = exports.s_currentVN = void 0;
const mim = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
const TriggerWatcher_1 = __webpack_require__(/*! ../utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./lib/core/VNBase.js");
const TextVN_1 = __webpack_require__(/*! ./TextVN */ "./lib/core/TextVN.js");
const IndependentCompVN_1 = __webpack_require__(/*! ./IndependentCompVN */ "./lib/core/IndependentCompVN.js");
const PromiseProxyVN_1 = __webpack_require__(/*! ./PromiseProxyVN */ "./lib/core/PromiseProxyVN.js");
const FuncProxyVN_1 = __webpack_require__(/*! ./FuncProxyVN */ "./lib/core/FuncProxyVN.js");
const ElmVN_1 = __webpack_require__(/*! ./ElmVN */ "./lib/core/ElmVN.js");
const ManagedCompVN_1 = __webpack_require__(/*! ./ManagedCompVN */ "./lib/core/ManagedCompVN.js");
const FuncVN_1 = __webpack_require__(/*! ./FuncVN */ "./lib/core/FuncVN.js");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");
//////////
// Map of nodes that should be updated on the next UI cycle. We use Map in order to not include
// the same node more than once - which can happen if the node's requestUpdate method is called
// more than once during a single run (e.g. during event processing). The value mapped to the
// node determines the operation to be performed:
//	- undefined - the node will be updated
//	- null - the node will be deleted from its parent
//	- anything else - the node will be replaced with this new content
let s_vnsScheduledForUpdate = new Set();
// Map of functions that have been scheduled to be called upon a new animation frame before
// components scheduled for update are updated. The keys in this map are the original functions and
// the values are the wrapper functions that will be executed in the context of a given virtual node.
let s_callsScheduledBeforeUpdate = new Map();
// Map of functions that have been scheduled to be called upon a new animation frame after
// components scheduled for update are updated. The keys in this map are the original functions and
// the values are the wrapper functions that will be executed in the context of a given virtual node.
let s_callsScheduledAfterUpdate = new Map();
// Handle of the animation frame request (in case it should be canceled).
let s_scheduledFrameHandle = 0;
// State of the scheduler.
let s_schedulerState = 0 /* Idle */;
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
 * Sets the given node as the current and if the node is for the component, set the current
 * component. Returns the virtual node that was previously the current one. As we recurse over
 * virtual nodes and sub-nodes, we call this function to have the s_currentVN and
 * s_currentClassComp variables to point to the node and component being currently processed.
 */
function trackCurrentVN(vn) {
    let prevVN = exports.s_currentVN;
    exports.s_currentVN = vn;
    exports.s_currentClassComp = !vn ? null : vn.comp != null ? vn.comp : vn.creator;
    return prevVN;
}
/**
 * Wraps the given callback and returns a wrapper function which is executed in the context of the
 * given virtual node. The given "that" object will be the value of "this" when the callback is
 * executed. If the original callback throws an exception, it is processed by the Mimbl error
 * handling mechanism so that the exception bubles from this virtual node up the hierarchy until a
 * node/component that knows to handle errors is found.
 * @param callback Callback to be wrapped.
 * @param thisCallback Object that will be the value of "this" when the callback is executed.
 * @param vn Virtual node in whose context the callback will be executed.
 * @returns The wrapper function that should be used instead of the original callback.
 */
function wrapCallbackWithVN(callback, thisCallback, vn) {
    return CallbackWrapper.bind(vn, thisCallback, callback);
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
    let vn = this;
    let prevVN = trackCurrentVN(vn ? vn : null);
    try {
        TriggerWatcher_1.enterMutationScope();
        let [thisOrgCallback, orgCallback, ...rest] = arguments;
        return orgCallback.apply(thisOrgCallback, rest);
    }
    catch (err) {
        let errorService = vn === null || vn === void 0 ? void 0 : vn.getService("StdErrorHandling");
        if (errorService)
            errorService.reportError(err, getVNPath(vn));
        else
            throw err;
    }
    finally {
        TriggerWatcher_1.exitMutationScope();
        // restore previous current VN
        trackCurrentVN(prevVN);
    }
}
// Schedules an update for the given node.
function requestNodeUpdate(vn) {
    if (!vn.anchorDN)
        console.warn(`Update requested for virtual node '${getVNPath(vn).join("->")}' that doesn't have anchor DOM node`);
    addNodeToScheduler(vn);
    // the update is scheduled in the next tick unless the request is made during a
    // "before update" function execution.
    if (s_schedulerState !== 1 /* BeforeUpdate */)
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
        if (comp.beforeUpdate && s_schedulerState !== 1 /* BeforeUpdate */)
            s_callsScheduledBeforeUpdate.set(comp.beforeUpdate, wrapCallbackWithVN(comp.beforeUpdate, comp, vn));
        if (comp.afterUpdate)
            s_callsScheduledAfterUpdate.set(comp.afterUpdate, wrapCallbackWithVN(comp.beforeUpdate, comp, vn));
    }
}
// Schedules to call the given function either before or after all the scheduled components
// have been updated.
function scheduleFuncCall(func, beforeUpdate, thisArg, vn) {
/////////////////
    if (!func) {
        console.error("Trying to schedule undefined function for update");
        return;
    }
//////////////
    if (beforeUpdate) {
        if (!s_callsScheduledBeforeUpdate.has(func)) {
            s_callsScheduledBeforeUpdate.set(func, wrapCallbackWithVN(func, thisArg, vn));
            // a "before update" function is always scheduled in the next frame even if the
            // call is made from another "before update" function.
            requestFrameIfNeeded();
        }
    }
    else {
        if (!s_callsScheduledAfterUpdate.has(func)) {
            s_callsScheduledAfterUpdate.set(func, wrapCallbackWithVN(func, thisArg, vn));
            // an "after update" function is scheduled in the next cycle unless the request is made
            // either from a "before update" function execution or during a node update.
            if (s_schedulerState !== 1 /* BeforeUpdate */ && s_schedulerState !== 2 /* Update */)
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
    // clear the scheduled frame handle so that new update requests will
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
    // before updates, it will be executed in the next cycle.
    if (s_callsScheduledBeforeUpdate.size > 0) {
        s_schedulerState = 1 /* BeforeUpdate */;
        let callsScheduledBeforeUpdate = s_callsScheduledBeforeUpdate;
        s_callsScheduledBeforeUpdate = new Map();
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
        s_schedulerState = 2 /* Update */;
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
        s_schedulerState = 3 /* AfterUpdate */;
        let callsScheduledAfterUpdate = s_callsScheduledAfterUpdate;
        s_callsScheduledAfterUpdate = new Map();
        callScheduledFunctions(callsScheduledAfterUpdate, false);
    }
    s_schedulerState = 0 /* Idle */;
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
    // create a sparse array of certain reasonable size. If we have depths greater than this,
    // the array will grow automatically (although it is less performant it is still acceptable).
    let vnsByDepth = new Array(32);
    vnsScheduledForUpdate.forEach((vn) => {
        // it can happen that we encounter already unmounted virtual nodes - ignore them
        if (!vn.anchorDN)
            return;
        let arr = vnsByDepth[vn.depth];
        if (!arr) {
            arr = [];
            vnsByDepth[vn.depth] = arr;
        }
        arr.push(vn);
    });
    return vnsByDepth;
}
// Performs rendering phase for all components scheduled for update and recursively for their
// sub-nodes where necessary. Returns array of VNDisp structures for each updated node.
function performRenderPhase(vnsByDepth) {
    let updatedNodeDisps = [];
    let disp;
    for (let vns of vnsByDepth) {
        // vnsByDepth is a sparse array so it can have holes
        if (!vns)
            continue;
        for (let vn of vns) {
            try {
                // clear the flag that update has been requested for the node
                vn.updateRequested = false;
                // if the component was already updated in this cycle, don't update it again
                if (vn.lastUpdateTick === s_currentTick)
                    continue;
                disp = { newVN: vn, action: 0 /* Unknown */, oldVN: vn };
                renderUpdatedNode(disp);
                updatedNodeDisps.push(disp);
            }
            catch (err) {
                // find the nearest error handling service. If nobody else, it is implemented
                // by the RootVN object.
                let errorService = vn.getService("StdErrorHandling", undefined, false);
                if (errorService)
                    errorService.reportError(err, exports.s_currentVN ? getVNPath(exports.s_currentVN) : null);
                else
                    console.error("BUG: updateVirtual threw exception but StdErrorHandling service was not found.");
            }
            trackCurrentVN(null);
        }
    }
    return updatedNodeDisps;
}
// Performs the commit phase for all components scheduled for update and recursively for their
// sub-nodes where necessary. The Commit phase consists of updating DOM and calling life-cycle
// methods didMount, didUpdate and willUnmount.
function performCommitPhase(updatedNodeDisps) {
    // we don't unticipate any exceptions here because we don't invoke 3rd-party code here.
    for (let disp of updatedNodeDisps)
        commitUpdatedNode(disp);
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
function renderNewNode(vn, parent) {
    vn.init(parent, exports.s_currentClassComp);
    // keep track of the node that is being currently processed.
    let prevVN = trackCurrentVN(vn);
    // if willMount function is defined we call it without try/catch. If it throws, the control
    // goes to either the ancestor node that supports error handling or the Mimbl tick loop
    // (which has try/catch).
    if (vn.willMount) {
////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////
        vn.willMount();
    }
    // if the node doesn't implement `render`, the node never has any sub-nodes (e.g. text nodes)
    if (vn.render) {
        // we call the render method without try/catch
        let subNodes = createVNChainFromContent(vn.render());
        if (subNodes) {
            // since we have sub-nodes, we need to create nodes for them and render. If our node
            // knows to handle errors, we do it under try/catch; otherwise, the exceptions go to
            // either the uncestor node that knows to handle errors or to the Mimbl tick loop.
            if (!vn.supportsErrorHandling) {
                for (let svn of subNodes)
                    renderNewNode(svn, vn);
            }
            else {
                try {
                    for (let svn of subNodes)
                        renderNewNode(svn, vn);
                }
                catch (err) {
////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////
                    // let the node handle the error and re-render; then we render the new
                    // content but we do it without try/catch this time; otherwise, we may end
                    // up in an infinite loop
                    vn.handleError(err, getVNPath(exports.s_currentVN));
                    subNodes = createVNChainFromContent(vn.render());
                    if (vn.subNodes) {
                        for (let svn of subNodes)
                            renderNewNode(svn, vn);
                    }
                }
            }
            // interlink the sub-nodes with next and prev properties
            let prevVN;
            for (let svn of subNodes) {
                if (prevVN) {
                    prevVN.next = svn;
                    svn.prev = prevVN;
                }
                prevVN = svn;
            }
        }
        // remember the sub-nodes
        vn.subNodes = subNodes;
    }
    // restore pointer to the previous current node.
    trackCurrentVN(prevVN);
}
// Recursively creates DOM nodes for this VN and its sub-nodes.
function commitNewNode(vn, anchorDN, beforeDN) {
    // keep track of the node that is being currently processed.
    let prevVN = trackCurrentVN(vn);
    // remember the anchor node
    vn.anchorDN = anchorDN;
////////////////////////
////////////////////////////////////////////////////////
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
            commitNewNode(svn, newAnchorDN, newBeforeDN);
    }
////////////////////////
///////////////////////////////////////////////////////////
//////////////
    if (vn.didMount)
        vn.didMount();
    // restore pointer to the previous current node.
    trackCurrentVN(prevVN);
}
// Calls willUnmount on this VN and, if requested, recursively on its sub-nodes. This function is
// called for every node being destructed. It is called non-recursively on the virtual nodes that
// have their own DOM node. On such nodes, the unmount method will be called and the node will be
// properly marked as unmounted. For virtual nodes that don't have their own DOM node, this
// function is called recursively. the unmount method will not be called for these nodes;
// therefore, we need to mark them as unmounted here.
function callWillUnmount(vn, recursive) {
    // indicate that the node was processed in this cycle - this will prevent it from 
    // rendering again in this cycle.
    vn.lastUpdateTick = s_currentTick;
    // first notify sub-nodes if recursive
    if (recursive && vn.subNodes) {
        for (let svn of vn.subNodes) {
            // keep track of the node that is being currently processed.
            let prevVN = trackCurrentVN(svn);
            callWillUnmount(svn, true);
            // restore pointer to the previous current node.
            trackCurrentVN(prevVN);
            // mark the node as unmounted
            vn.term();
            vn.anchorDN = undefined;
        }
    }
    // notify our node
    if (vn.willUnmount) {
////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////
        vn.willUnmount();
    }
}
// Recursively removes DOM nodes corresponding to this VN and its sub-nodes.
function commitRemovedNode(vn) {
    // keep track of the node that is being currently processed.
    let prevVN = trackCurrentVN(vn);
    // get the DOM node before we call unmount, because unmount will clear it.
    let ownDN = vn.ownDN;
    // If the virtual node has its own DOM node, we will remove it from the DOM tree. In this case,
    // we don't need to recursively unmount sub-nodes because they are removed with the parent;
    // however, we need to call their willUnmount methods. If the node doesn't have its own DOM
    // node, we need to call willUnmount only on the node itself because later we will recurse
    // into its sub-nodes.
    callWillUnmount(vn, ownDN != null);
    // call unmount on our node - regardless whether it has its own DN or not
    if (vn.unmount) {
////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////
        vn.unmount();
    }
    // If the virtual node has its own DOM node, remove it from the DOM tree; otherwise, recurse
    // into the sub-nodes.
    if (ownDN)
        ownDN.remove();
    else if (vn.subNodes) {
        // loop over sub-nodes from last to first because this way the DOM element removal is
        // easier.
        for (let i = vn.subNodes.length - 1; i >= 0; i--)
            commitRemovedNode(vn.subNodes[i]);
    }
    // mark the node as unmounted
    vn.term();
    vn.anchorDN = undefined;
    // restore pointer to the previous current node.
    trackCurrentVN(prevVN);
}
// Recursively renders this node and updates its sub-nodes if necessary. This method is
// invoked when a node is being updated either as a result of updateMe invocation or because
// the parent node was updated.
function renderUpdatedNode(disp) {
    // let vn = disp.action === VNDispAction.Insert ? disp.newVN : disp.oldVN;
    let vn = disp.oldVN;
    // keep track of the node that is being currently processed.
    let prevVN = trackCurrentVN(vn);
    // we call the render method without try/catch. If it throws, the control goes to either the
    // ancestor node that supports error handling or the Mimbl tick loop (which has try/catch).
    let subNodes = createVNChainFromContent(vn.render());
    // build array of dispositions objects for the sub-nodes.
    buildSubNodeDispositions(disp, subNodes);
    if (subNodes) {
        // since we have sub-nodes, we need to create nodes for them and render. If our node
        // knows to handle errors, we do it under try/catch; otherwise, the exceptions go to
        // either the uncestor node that knows to handle errors or to the Mimbl tick loop.
        if (!vn.supportsErrorHandling)
            renderUpdatedSubNodes(disp);
        else {
            try {
                renderUpdatedSubNodes(disp);
            }
            catch (err) {
////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////
                // let the node handle its own error and re-render; then we render the new
                // content but we do it without try/catch this time; otherwise, we may end
                // up in an infinite loop
                vn.handleError(err, getVNPath(exports.s_currentVN));
                subNodes = createVNChainFromContent(vn.render());
                buildSubNodeDispositions(disp, subNodes);
                renderUpdatedSubNodes(disp);
            }
        }
    }
    // indicate that the node was updated in this cycle - this will prevent it from 
    // rendering again in this cycle.
    vn.lastUpdateTick = s_currentTick;
    // restore pointer to the currently being processed node after processing its sub-nodes
    trackCurrentVN(prevVN);
}
// Performs rendering phase of the update on the sub-nodes of the node, which is passed as
// the oldVN member of the VNDisp structure.
function renderUpdatedSubNodes(disp) {
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
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////
                    subNodeDisp.updateDisp = oldVN.prepareUpdate(newVN);
                    if (subNodeDisp.updateDisp.shouldRender)
                        renderUpdatedNode(subNodeDisp);
                }
            }
            else if (subNodeDisp.action === 1 /* Insert */)
                renderNewNode(newVN, parentVN);
        }
    }
}
// Recursively performs DOM updates corresponding to this VN and its sub-nodes.
function commitUpdatedNode(disp) {
    // remove from DOM the old nodes designated to be removed (that is, those for which there
    // was no counterpart new node that would either update or replace it). We need to remove
    // old nodes first before we start inserting new - one reason is to properly maintain
    // references.
    if (disp.subNodesToRemove) {
        for (let svn of disp.subNodesToRemove)
            commitRemovedNode(svn);
    }
    // get the node whose children are being updated. This is always the oldVN member of
    // the disp structure.
    let vn = disp.oldVN;
    // it might happen that the node being updated was already deleted by its parent. Check
    // for this situation and exit if this is the case
    if (!vn.anchorDN)
        return;
    // keep track of the node that is being currently processed.
    let prevVN = trackCurrentVN(vn);
    // determine the anchor node to use when inserting new or moving existing sub-nodes. If
    // our node has its own DN, it will be the anchor for the sub-nodes; otherwise, our node's
    // anchor will be the anchor for the sub-nodes too.
    let ownDN = vn.ownDN;
    let anchorDN = ownDN != null ? ownDN : vn.anchorDN;
    // if this virtual node doesn't define its own DOM node (true for components), we will
    // need to find a DOM node before which to start inserting new nodes. Null means
    // append to the end of the anchor node's children.
    let beforeDN = ownDN != null ? null : getNextDNUnderSameAnchorDN(vn, anchorDN);
    // re-create our current list of sub-nodes - we will populate it while updating them
    vn.subNodes = disp.subNodeDisps ? new Array(disp.subNodeDisps.length) : undefined;
    // perform updates and inserts by either groups or individual nodes.
    if (disp.subNodeGroups) {
        commitUpdatesByGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
        arrangeGroups(disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
    }
    else if (disp.subNodeDisps) {
        commitUpdatesByNodes(vn, disp.subNodeDisps, anchorDN, beforeDN);
    }
    // restore pointer to the currently being processed node after processing its sub-nodes
    trackCurrentVN(prevVN);
}
// Performs updates and inserts by individual nodes.
function commitUpdatesByNodes(parentVN, disps, anchorDN, beforeDN) {
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
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////
                    oldVN.commitUpdate(newVN);
                }
                // update the sub-nodes if necessary
                if (disp.updateDisp.shouldRender)
                    commitUpdatedNode(disp);
            }
            // determine whether all the nodes under this VN should be moved.
            let subNodeDNs = getImmediateDNs(oldVN);
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
            commitNewNode(newVN, anchorDN, beforeDN);
            // if the new node defines a DOM node, it becomes the DOM node before which
            // next components should be inserted/moved
            firstDN = getFirstDN(newVN);
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
function commitUpdatesByGroups(parentVN, disps, groups, anchorDN, beforeDN) {
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
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////
                        oldVN.commitUpdate(newVN);
                    }
                    // update the sub-nodes if necessary
                    if (disp.updateDisp.shouldRender)
                        commitUpdatedNode(disp);
                }
                firstDN = getFirstDN(oldVN);
                if (firstDN != null)
                    beforeDN = firstDN;
            }
            else if (group.action === 1 /* Insert */) {
                commitNewNode(newVN, anchorDN, beforeDN);
                // if the new node defines a DOM node, it becomes the DOM node before which
                // next components should be inserted/moved
                firstDN = getFirstDN(newVN);
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
        let subNodeDNs = getImmediateDNs(subNodeVN);
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
            this.firstDN = getFirstDN(vn);
            if (this.firstDN)
                break;
        }
        for (let i = this.last; i >= this.first; i--) {
            disp = this.parentDisp.subNodeDisps[i];
            vn = this.action === 2 /* Update */ ? disp.oldVN : disp.newVN;
            this.lastDN = getLastDN(vn);
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
function buildSubNodeDispositions(disp, newChain) {
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
// Returns the list of DOM nodes that are immediate children of this virtual node; that is,
// are NOT children of sub-nodes that have their own DOM node. Never returns null.
function getImmediateDNs(vn) {
    let arr = [];
    collectImmediateDNs(vn, arr);
    return arr;
}
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
// Returns array of node names starting with this node and up until the top-level node.
function getVNPath(vn) {
    let depth = vn.depth;
    let path = Array(depth);
    for (let i = 0, nvn = vn; i < depth; i++, nvn = nvn.parent) {
        path[i] = nvn.name + (nvn.creator && nvn.creator.vn ? ` (created by ${nvn.creator.vn.name})` : "");
    }
    return path;
}
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
        return vn || new FuncProxyVN_1.FuncProxyVN({ func: content, thisArg: exports.s_currentClassComp });
    }
    else
        return new TextVN_1.TextVN(content.toString());
}
// Creates an array of virtual nodes from the given content. Calls the createNodesFromContent and
// if it returns a single node, wraps it in an array.
function createVNChainFromContent(content) {
    let nodes = createNodesFromContent(content);
    return !nodes ? null : Array.isArray(nodes) ? (nodes.length === 0 ? null : nodes) : [nodes];
}
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
exports.unmountRoot = exports.mountRoot = exports.RootVN = void 0;
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
    get supportsErrorHandling() {
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
let symRootMountPoint = Symbol("symRootMountPoint");
// Renders the given content (usually a result of JSX expression or a component instance)
// under the given HTML element.
function mountRoot(content, anchorDN) {
    let realAnchorDN = anchorDN ? anchorDN : document.body;
    // check whether we already have root node remembered in the anchor element's well-known
    // property
    let rootVN = realAnchorDN[symRootMountPoint];
    if (!rootVN) {
        // create root node and remember it in the anchor element's well-known property
        rootVN = new RootVN(realAnchorDN);
        realAnchorDN[symRootMountPoint] = rootVN;
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
    let rootVN = realAnchorDN[symRootMountPoint];
    if (!rootVN)
        return;
    // remove our root node from the anchor element's well-known property
    delete realAnchorDN[symRootMountPoint];
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
const mimcss_1 = __webpack_require__(/*! mimcss */ "mimcss");
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
    let schedulerType = mimcss_1.registerScheduler(new StyleScheduler());
    mimcss_1.setDefaultSchedulerType(schedulerType);
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
exports.VNUpdateDisp = void 0;
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
    wrapCallback(callback, thisCallback) {
        return Reconciler_1.wrapCallbackWithVN(callback, thisCallback, this);
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
const mimcss_1 = __webpack_require__(/*! mimcss */ "mimcss");
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
    mimcss_1.setElementStyle(elm, propVal, 1 /* Sync */);
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    let res = mimcss_1.diffStylesets(oldPropVal, newPropVal);
    // we have to return undefined because null is considered a valid update value
    return res == null ? undefined : res;
}
function updateStyleProp(elm, attrName, updateVal) {
    mimcss_1.setElementStringStyle(elm, updateVal, 1 /* Sync */);
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
        let oldValue = Reflect.get(target, prop, receiver);
        if (oldValue != value) {
            this.trigger.notifyChanged();
            return Reflect.set(target, prop, triggerrize(value, this.trigger, this.depth), receiver);
        }
        else
            return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NsYXNzQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRWxtVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0luZGVwZW5kZW50Q29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvTWFuYWdlZENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Byb21pc2VQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHViU3ViLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUmVjb25jaWxlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RVSS50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9TdHlsZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1RleHRWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk5CYXNlLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL21pbWJsVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRWxtQXR0ci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0hBLDhGQUF3RDtBQUl4RDs7O0dBR0c7QUFDSCxNQUFhLEdBQUc7SUFPZixZQUFhLFFB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LE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUVsQztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3JDO29CQUNDLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFwREQsc0NBb0RDOzs7Ozs7Ozs7Ozs7QUMxUkQsb0QiLCJmaWxlIjoibWltYmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWNzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1jc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWJsVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQge1N0eWxlc2V0LCBJQ2xhc3NSdWxlLCBJQ2xhc3NOYW1lUnVsZSwgSUlEUnVsZX0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyByZXByZXNlbnRpbmcgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jQ29tcFR5cGU8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSAocHJvcHM6IEZ1bmNQcm9wczxUUHJvcHMsVENoaWxkcmVuPikgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgZGVmaW5lcyBjb25zdHJ1Y3RvciBzaWduYXR1cmUgZm9yIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM/OiBUUHJvcHMpOiBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLiBGb3IgbWFuYWdlZCBjb21wb25lbnRzLCB0aGUgcHJvcGVydGllc1xyXG5cdCAqIGNhbiBhbHNvIGJlIHNldCAoY2hhbmdlZCkgd2hlbiB0aGUgY29tcG9uZW50J3MgcGFyZW50IGlzIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0cHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudHMgY2FuIGRlZmluZSBkaXNwbGF5IG5hbWUgZm9yIHRyYWNpbmcgcHVycG9zZXM7IGlmIHRoZXkgZG9uJ3QgdGhlIGRlZmF1bHQgbmFtZVxyXG5cdCAqIHVzZWQgaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cywgZ2V0cyBvciBjbGVhcnMgdGhlIHZpcnR1YWwgbm9kZSBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdHdpY2U6XHJcblx0ICogIDEuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqICAgIHBhc3NlZCBvYmplY3QuXHJcblx0ICogIDIuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqICAgIHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdHZuPzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHZpcnR1YWwgbm9kZSBoYXMgYWxyZWFkeSBiZWVuIHNldCBzbyB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzXHJcblx0ICogZnJvbSBpdC5cclxuXHQgKi9cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIGNvbXBvbmVudCB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmQgdGhlIGNvbnRlbnQgb2YgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG9cclxuICAgIC8vIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBkaWRNb3VudD8oKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuIEFmdGVyXHJcblx0ICogdGhpcyBtZXRob2QgcmV0dXJucyB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuXHQgKi9cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgY2FuIHJlYWQgRE9NIGxheW91dCBpbmZvcm1hdGlvbiAoZS5nLlxyXG5cdCAqIGVsZW1lbnQgbWVhc3VyZW1lbnRzKSB3aXRob3V0IHRoZSByaXNrIG9mIGNhdXNpbmcgZm9yY2VkIGxheW91dHMuXHJcblx0ICovXHJcblx0YmVmb3JlVXBkYXRlPygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgYWwgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFsbCBtb2RpZmljYXRpb25zIHRvXHJcblx0ICogRE9NIHJlc3VsdGluZyBmcm9tIHVwZGFpbmcgY29tcG9uZW50cyBoYXZlIGJlZW4gYWxyZWFkeSBkb25lLlxyXG5cdCAqL1xyXG5cdGFmdGVyVXBkYXRlPygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IHVzZWQgYnkgbWFuYWdlZCBjb21wb25lbnRzLlxyXG5cdCAqIFxyXG5cdCAqIEluZm9ybXMgdGhlIGNvbXBvbmVudCB0aGF0IG5ldyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzcGVjaWZpZWQuIEF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcblx0ICogdGhpcy5wcm9wcyByZWZlcnMgdG8gdGhlIFwib2xkXCIgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zIHRydWUsdGhlbiBpdHMgcmVuZGVyXHJcblx0ICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBBdCB0aGF0IHRpbWUsdGhlIG9yaWdpbmFsIHByb3BzIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGVcclxuXHQgKiBjb21wb25lbnQncyBjb25zdHJ1Y3RvciB3aWxsIGhhdmUgdGhlc2UgbmV3IHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBpbXBsZW1lbnRcclxuXHQgKiB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZCBpdCBpcyBhcyB0aG91Z2ggdHJ1ZSBpcyByZXR1cm5lZC4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zXHJcblx0ICogZmFsc2UsIHRoZSByZW5kZXIgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYW5kIHRoZSBET00gdHJlZSBvZiB0aGUgY29tcG9uZW50IHJlbWFpbnMgdW5jaGFuZ2VkLlxyXG5cdCAqIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQsIGhvd2V2ZXIsIHN0aWxsIGNoYW5nZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wZXJ0aWVzIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgcHJvdmlkZXMgdG8gdGhpcyBjb21wb25lbnQuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGl0cyByZW5kZXIgbWV0aG9kIGNhbGxlZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHNob3VsZFVwZGF0ZT8oIG5ld1Byb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmcgb2ZcclxuXHQgKiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb3IgaWYgaXQgdGhyb3dzIGFuIGVycm9yLCB0aGVcclxuXHQgKiBlcnJvciB3aWxsIGJlIHByb3BhZ2F0ZWQgdXAgdGhlIGNoYWluIG9mIGNvbXBvbmVudHMgdW50aWwgaXQgcmVhY2hlcyBhIGNvbXBvbmVudCB0aGF0XHJcblx0ICogaGFuZGxlcyBpdC4gSWYgbm9uZSBvZiB0aGUgY29tcG9uZW50cyBjYW4gaGFuZGxlIHRoZSBlcnJvciwgdGhlIGVudGlyZSB0cmVlIHdpbGwgYmVcclxuXHQgKiB1bm1vdW50ZWQuXHJcblx0ICogQHBhcmFtIGVyciBBbiBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmdcclxuXHQgKiBvZiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLlxyXG5cdCAqIEBwYXJhbSBwYXRoIEFuIGFycmF5IG9mIG5hbWVzIG9mIGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZyb20gdGhlIG1vdW50ZWQgcm9vdCB0byB0aGVcclxuXHQgKiBjb21wb25lbnQgdGhhdCB0aHJldyB0aGUgZXhjZXB0aW9uLiBUaGlzIHBhdGggaXMgcHJvdmlkZWQgbW9zdGx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRyYWNpbmdcclxuXHQgKiBwdXJwb3Nlcy5cclxuXHQgKi9cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBjb21wb25lbnQgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHRnZXRVcGRhdGVTdHJhdGVneT8oKTogVXBkYXRlU3RyYXRlZ3k7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBVcGRhdGVTdHJhdGVneSBvYmplY3Qgc3BlY2lmaWVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIHVwZGF0ZSBiZWhhdmlvciBvZiBjb21wb25lbnRzIGFuZFxyXG4gKiBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZVN0cmF0ZWd5ID0gXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGRldGVybWluaW5nIHdoZXRoZXIgbm9uLW1hdGNoaW5nIG5ldyBrZXllZCBzdWItbm9kZXMgYXJlIGFsbG93ZWQgdG8gcmVjeWNsZSBub24tXHJcblx0ICogbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2Rlcy4gSGVyZSBcIm5vbi1tYXRjaGluZ1wiIG1lYW5zIHRob3NlIG5ldyBvciBvbGQgbm9kZXMgZm9yIHdoaWNoXHJcblx0ICogbm8gb2xkIG9yIG5ldyBzdWItbm9kZXMgcmVzcGVjdGl2ZWx5IHdlcmUgZm91bmQuIElmIHRoaXMgZmxhZyBpcyBmYWxzZSwgdGhlbiBub24tbWF0Y2hpbmdcclxuXHQgKiBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgcmVtb3ZlZCBhbmQgbm9uLW1hdGNoaW5nIG5ldyBzdWItbm9kZXMgd2lsbCBiZSBpbnNlcnRlZC4gSWYgdGhpc1xyXG5cdCAqIGZsYWcgaXMgdHJ1ZSwgdGhlbiBub24tbWF0Y2hpbmcgb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHVwZGF0ZWQgYnkgdGhlIG5vbi1tYXRjaGluZyBuZXdcclxuXHQgKiBzdWItbm9kZXMgLSBwcm92aWRlZCB0aGF0IHRoZSB0eXBlcyBvZiBzdWItbm9kZXMgYXJlIHRoZSBzYW1lLlxyXG5cdCAqIFxyXG5cdCAqIElmIGtleWVkIHN1Yi1ub2RlcyByZWN5Y2xpbmcgaXMgYWxsb3dlZCBpdCBjYW4gc3BlZWQgdXAgYW4gdXBkYXRlIHByb2Nlc3MgYmVjYXVzZVxyXG5cdCAqIGxlc3MgRE9NIG5vZGVzIGdldCByZW1vdmVkIGFuZCBpbnNlcnRlZCwgd2hpY2ggaXMgbW9yZSBleHBlbnNpdmUgdGhhbiB1cGRhdGluZy4gSG93ZXZlcixcclxuXHQgKiB0aGlzIGNhbiBoYXZlIHNvbWUgYWR2ZXJzZSBlZmZlY3RzIHVuZGVyIGNpcnRhaW4gY2lyY3Vtc3RhbmNlcyBpZiBjZXJ0YWluIGRhdGEgaXMgYm91bmRcclxuXHQgKiB0byB0aGUgcGFydGljdWxhciBpbnN0YW5jZXMgb2YgRE9NIG5vZGVzLlxyXG5cdCAqIFxyXG5cdCAqIFRoZSBmbGFnJ3MgZGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nPzogYm9vbGVhbjtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSB1cGRhdGUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTY2hlZHVsZWRGdW5jVHlwZSA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gcmVmZXJlbmNlIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZGdW5jPFQ+ID0gKG5ld1JlZjogVCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuaW1wb3J0IHtJRXZlbnRTbG90LCBFdmVudFNsb3R9IGZyb20gXCIuLi91dGlscy9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIGNsYXNzIHRvIHVzZSB3aGVuZXZlciBhIHJlZmVyZW5jZSB0byBhbiBvYmplY3QgaXMgbmVlZGVkIC0gZm9yIGV4YW1wbGUsIHdpdGggSlNYIGByZWZgXHJcbiAqIGF0dHJpYnV0ZXMgYW5kIHNlcnZpY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZjxUPlxyXG57XHJcblx0cHJpdmF0ZSBfcjogVDtcclxuXHJcblx0LyoqIEV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgcmVmZXJlbmNlZCB2YWx1ZSBjaGFuZ2VzICovXHJcblx0cHJpdmF0ZSBjaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnRTbG90PFJlZkZ1bmM8VD4+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBsaXN0ZW5lcj86IFJlZkZ1bmM8VD4sIGluaXRpYWxSZWZlcmVuZT86IFQpXHJcblx0e1xyXG5cdFx0aWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cclxuXHRcdHRoaXMuX3IgPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZGV0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpcy5fcjsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX3IgIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5fciA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBDbGVhcnMgdGhlIHJlZmVyZW5jZSB2YWx1ZSBhbmQgYWxzbyBjbGVhcnMgYWxsIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycyAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmNsZWFyKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlcnZpY2VEZWZpbml0aW9ucyBpbnRlcmZhY2Ugc2VydmVzIGFzIGEgbWFwcGluZyBiZXR3ZWVuIHNlcnZpY2UgbmFtZXMgYW5kIHNlcnZpY2UgdHlwZXMuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGludGVuZGVkIHRvIGJlIGF1Z21lbnRlZCBieSBtb2R1bGVzIHRoYXQgZGVmaW5lIGFuZC9vciB1c2Ugc3BlY2lmaWMgc2VydmljZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHBlcmZvcm1pbmcgc2VydmljZSBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpbiB0eXBlLXNhZmUgbWFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbntcclxuXHQvKiogQnVpbHQtaW4gZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gKi9cclxuXHRcIlN0ZEVycm9ySGFuZGxpbmdcIjogSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsdC1pbiBzZXJ2aWNlIGZvciBsYXp5IHBlb3BsZSAtIGNhbiBiZSB1c2VkIGZvciBxdWljayBwcm90b3R5cGVzIHdpdGhvdXQgdGhlIG5lZWQgdG9cclxuXHQgKiBhdWdtZW50IHRoZSBpbnRlcmZhY2UuXHJcblx0ICovXHJcblx0XCJhbnlcIjogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGNhbiBiZSBpbnZva2VkIHdoZW4gYW4gZXJyb3IgLVxyXG4gKiB1c3VhbGx5IGFuIGV4Y2VwdGlvbiAtIGlzIGVuY291bnRlcmVkIGJ1dCBjYW5ub3QgYmUgaGFuZGxlZCBsb2NhbGx5LiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHNcclxuICogdGhpcyBzZXJ2aWNlIHdvdWxkIG5vcm1hbGx5IHJlbWVtYmVyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byB1cGRhdGUgaXRzZWxmLHNvIHRoYXQgaW4gaXRzXHJcbiAqIHJlbmRlciBtZXRob2QgaXQgd2lsbCBwcmVzZW50IHRoZSBlcnJvciB0byB0aGUgdXNlci5cclxuICpcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpcyBpbXBsZW1lbnRlZCBieSB0aGUgUm9vdCBWaXJ0dWFsIE5vZGUgYXMgYSBsYXN0IHJlc29ydCBmb3IgZXJyb3JcclxuICogaGFuZGxpbmcuIFRoZSBSb290IFZOIHdpbGwgZGlzcGxheSBhIHNpbXBsZSBVSSBzaG93aW5nIHRoZSBlcnJvciBhbmQgd2lsbCBhbGxvdyB0aGUgdXNlciB0b1xyXG4gKiByZXN0YXJ0IC0gaW4gdGhlIGhvcGUgdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgcmVwZWF0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRyZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gLy9cclxuLy8gLy8gRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBjcmVhdGluZyByZWZlcmVuY2UgcHJvcGVydGllcyB3aXRob3V0IHRoZSBuZWVkIHRvIG1hbnVhbGx5IGNyZWF0ZVxyXG4vLyAvLyBSZWY8PiBpbnN0YW5jZXMuIFRoaXMgYWxsb3dzIGZvciB0aGUgZm9sbG93aW5nIGNvZGUgcGF0dGVybjpcclxuLy8gLy9cclxuLy8gLy9cdGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnRcclxuLy8gLy9cdHtcclxuLy8gLy9cdFx0QHJlZiBteURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbi8vIC8vXHRcdHJlbmRlcigpIHsgcmV0dXJuIDxkaXYgcmVmPXtteURpdn0+SGVsbG88L2Rpdj47IH1cclxuLy8gLy9cdH1cclxuLy8gLy9cclxuLy8gLy8gSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBteURpdiBwcm9wZXJ0eSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCB3aGVuIGZpcnN0IGFjY2Vzc2VkLiBUaGVcclxuLy8gLy8gYWN0dWFsIG9iamVjdCB3aWxsIGJlIGEgUHJveHkgdG8gUmVmPD4gb2YgdGhlIGdpdmVuIHR5cGUgKEhUTUxEaXZFbGVtZW50IGluIHRoaXMgY2FzZSkuXHJcbi8vIC8vXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVmKCB0YXJnZXQsIG5hbWUpXHJcbi8vIHtcclxuLy8gXHRmdW5jdGlvbiByZWZHZXQoIG9iaiwga2V5KVxyXG4vLyBcdHtcclxuLy8gXHRcdGlmIChrZXkgPT09IFwiclwiKVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnI7XHJcbi8vIFx0XHRlbHNlXHJcbi8vIFx0XHRcdHJldHVybiBvYmoucltrZXldO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gcmVmU2V0KCBvYmosIGtleSwgdmFsLCByZWNlaXZlcik6IGJvb2xlYW5cclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0b2JqLnIgPSB2YWw7XHJcbi8vIFx0XHRlbHNlXHJcbi8vIFx0XHRcdG9iai5yW2tleV0gPSB2YWw7XHJcblxyXG4vLyBcdFx0cmV0dXJuIHRydWU7XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmdW5jdGlvbiBlbnN1cmVQcm94eSggdGhpc09iajogYW55LCBhdHRyTmFtZTogc3RyaW5nKTogYW55XHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IHByb3h5ID0gdGhpc09ialthdHRyTmFtZV07XHJcbi8vIFx0XHRpZiAoIXByb3h5KVxyXG4vLyBcdFx0e1xyXG4vLyBcdFx0XHRwcm94eSA9IG5ldyBQcm94eSggbmV3IFJlZjxhbnk+KCksIHsgZ2V0OiByZWZHZXQsIHNldDogcmVmU2V0IH0pO1xyXG4vLyBcdFx0XHR0aGlzT2JqW2F0dHJOYW1lXSA9IHByb3h5O1xyXG4vLyBcdFx0fVxyXG4vLyBcdFx0cmV0dXJuIHByb3h5O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0bGV0IGF0dHJOYW1lID0gXCJfcmVmX1wiICsgbmFtZTtcclxuLy8gXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSxcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0c2V0KCB2YWwpIHsgZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKS5yID0gdmFsOyB9LFxyXG4vLyBcdFx0XHRnZXQoKSB7IHJldHVybiBlbnN1cmVQcm94eSggdGhpcywgYXR0ck5hbWUpOyB9XHJcbi8vIFx0XHR9XHJcbi8vIFx0KTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiByZWYgcHJvcGVydHkgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIEpTWCBlbGVtZW50cyBhbmQgY29tcG9uZW50cy4gVGhpcyBjYW4gYmUgZWl0aGVyIHRoZVxyXG4gKiBbW1JlZl1dIGNsYXNzIG9yIFtbUmVmRnVuY11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmUHJvcFR5cGU8VCA9IGFueT4gPSBSZWY8VD4gfCBSZWZGdW5jPFQ+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSB0aGF0IHRha2VzIGNhcmUgb2YgdGhlIGRpZmZlcmVudCB0eXBlcyBvZlxyXG4gKiByZWZlcmVuY2VzLiBUaGUgb3B0aW9uYWwgYG9ubHlJZmAgcGFyYW1ldGVyIG1heSBzcGVjaWZ5IGEgdmFsdWUgc28gdGhhdCBvbmx5IGlmIHRoZSByZWZlcmVuY2VcclxuICogY3VycmVudGx5IGhhcyB0aGUgc2FtZSB2YWx1ZSBpdCB3aWxsIGJlIHJlcGxhY2VkLiBUaGlzIG1pZ2h0IGJlIG5lZWRlZCB0byBub3QgY2xlYXIgYVxyXG4gKiByZWZlcmVuY2UgaWYgaXQgYWxyZWFkeSBwb2ludHMgdG8gYSBkaWZmZXJlbnQgb2JqZWN0LlxyXG4gKiBAcGFyYW0gcmVmIFtbUmVmXV0gb2JqZWN0IHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXRcclxuICogQHBhcmFtIHZhbCBSZWZlcmVuY2UgdmFsdWUgdG8gc2V0IHRvIHRoZSBSZWYgb2JqZWN0XHJcbiAqIEBwYXJhbSBvbmx5SWYgQW4gb3B0aW9uYWwgdmFsdWUgdG8gd2hpY2ggdG8gY29tcGFyZSB0aGUgY3VycmVudCAob2xkKSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlLlxyXG4gKiBUaGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0IG9ubHkgaWYgdGhlIG9sZCB2YWx1ZSBlcXVhbHMgdGhlIGBvbmx5SWZgIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZjxUPiggcmVmOiBSZWZQcm9wVHlwZTxUPiwgdmFsOiBULCBvbmx5SWY/OiBUKTogdm9pZFxyXG57XHJcblx0aWYgKHR5cGVvZiByZWYgPT09IFwib2JqZWN0XCIpXHJcblx0e1xyXG5cdFx0bGV0IHJlZk9iaiA9IHJlZiBhcyBSZWY8VD47XHJcblx0XHRpZiAob25seUlmID09PSB1bmRlZmluZWQgfHwgcmVmT2JqLnIgPT09IG9ubHlJZilcclxuXHRcdFx0cmVmT2JqLnIgPSB2YWw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdChyZWYgYXMgUmVmRnVuYzxUPikodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQW4gYXJ0aWZpY2lhbCBcIkZyYWdtZW50XCIgY29tcG9uZW50IHRoYXQgaXMgb25seSB1c2VkIGFzIGEgdGVtcG9yYXJ5IGNvbGxlY3Rpb24gb2Ygb3RoZXIgaXRlbXNcclxuICogaW4gcGxhY2VzIHdoZXJlIEpTWCBvbmx5IGFsbG93cyBhIHNpbmdsZSBpdGVtLiBPdXIgSlNYIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlcyBhIHZpcnR1YWwgbm9kZVxyXG4gKiBmb3IgZWFjaCBvZiBpdHMgY2hpbGRyZW4gYW5kIHRoZSBmdW5jdGlvbiBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQuIFRoaXMgZnVuY3Rpb24gaXMgb25seSBuZWVkZWRcclxuICogYmVjYXVzZSBjdXJyZW50bHkgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHRoZSBgPD5gIGZyYWdtZW50IG5vdGF0aW9uIGlmIGEgY3VzdG9tIEpTWCBmYWN0b3J5XHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQuXHJcbiAqXHJcbiAqIFVzZSBpdCBhcyBmb2xsb3dzOlxyXG4gKiBgYGB0c3hcclxuICpcdGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKlx0Li4uLi5cclxuICpcdHJlbmRlcigpXHJcbiAqXHR7XHJcbiAqXHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG4gKlx0XHRcdDxkaXYxLz5cclxuICpcdFx0XHQ8ZGl2Mi8+XHJcbiAqXHRcdFx0PGRpdjMvPlxyXG4gKlx0XHQ8L21pbS5GcmFnbWVudD5cclxuICpcdH1cclxuICBgYGBcclxuXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudCggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqIFxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNsYXNzIG9mIGhhbmRsZXJzIG9mIGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAqIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuIFRoZSByZXF1aXJlbWVudHMgb24gc3VjaCBjbGFzc2VzIGFyZTpcclxuICogMS4gSW1wbGVtZW50IGEgY29uc3RydWN0b3IgYWNjZXB0aW5nIElFbG1WTiwgYXR0cmlidXRlIHZhbHVlIGFuZCBhdHRyaWJ1dGUgbmFtZSAodGhpcyBhbGxvd3NcclxuICogICB0aGUgc2FtZSBoYW5kbGVyIHRvIHNlcnZlIGRpZmZlcmVudCBhdHRyaWJ1dGVzKS5cclxuICogMi4gSW1wbGVtZW50IHRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgdGhhdCB3aWxsIGFjdCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgcHJvdmlkZXNcclxuXHQgKiB0aGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBBdHRyaWJ1dGUgbmFtZSBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgdGhlIGhhbmRsZXJcclxuXHQgKiBzdXBwb3J0cyBkaWZmZXJlbnQgYXR0cmlidXRlcy4gQnkgdGhlIHRpbWUgdGhpcyBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSBET00gZWxlbWVudCBoYWRcclxuXHQgKiBhbHJlYWR5IGJlZW4gY3JlYXRlZCBhbmQgc3RhbmRhcmQgYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzIGhhZCBiZWVuIGFwcGxpZWQuXHJcblx0ICogQHBhcmFtIGVsbVZOIFZpcnR1YWwgbm9kZSBmb3IgdGhpcyBlbGVtZW50LiBUaGUgaGFuZGxlciBjYW4gcmV0cmlldmUgdGhlIERPTSBlbGVtZW50IGZyb21cclxuXHQgKiAgIHRoaXMgaW50ZXJmYWNlIGFuZCBhbHNvIHVzZSBvdGhlciBtZXRob2RzIChlLmcuIHN1YnNjcmliZSB0byBzZXJ2aWNlcykuXHJcblx0ICogQHBhcmFtIGF0dHJWYWwgSW5pdGlhbCB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqIEBwYXJhbSBhdHRyTmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICovXHJcblx0bmV3KCBlbG1WTjogSUVsbVZOLCBhdHRyVmFsOiBULCBhdHRyTmFtZT86IHN0cmluZyk6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBoYW5kbGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW5cclxuICogYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgY3VzdG9tIGF0dHJpYnV0ZSB3aXRoIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BWYWwgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlLlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgY2hhbmdlcyB3ZXJlIG1hZGUgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoIG5ld1Byb3BWYWw6IFQpOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBUZXJtaW5hdGVzIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGVpdGhlclxyXG5cdCAqIHdoZW4gYSBuZXcgcmVuZGVyaW5nIG9mIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSB0aGUgYXR0cmlidXRlIGFueW1vcmUgb3IgaWYgdGhlIGVsZW1lbnRcclxuXHQgKiBpcyByZW1vdmVkLiBBbHRob3VnaCB0aGlzIG1ldGhvZCBpcyBvcHRpb25hbCwgbW9zdCBoYW5kbGVycyB3aWxsIG5lZWQgdG8gaW1wbGVtZW50IGl0IHRvXHJcblx0ICogcHJvcGVybHkgY2xlYW51cCBhbnkgcmVzb3VyY2VzIChlLmcuIGV2ZW50IGhhbmRsZXJzKSB0byBhdm9pZCBsZWFrcy5cclxuXHQgKiBAcGFyYW0gaXNSZW1vdmFsIFRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmcgcmVtb3ZlZCBhbmQgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmdcclxuXHQgKiAgIHVwZGF0ZWQgYW5kIHRoZSBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIHByb3ZpZGVkLiBJZiB0aGUgaGFuZGxlciBhZGRzIGFueSBldmVudFxyXG5cdCAqICAgbGlzdGVuZXJzIHRvIHRoZSBlbGVtZW50LCB0aGVuIGl0IGhhcyB0byByZW1vdmUgdGhlbSBvbiB1cGRhdGUgYnV0IGRvZW4ndCBoYXZlIHRvIGRvIGl0XHJcblx0ICogICBvbiBlbGVtZW50IHJlbW92YWwuXHJcblx0ICovXHJcblx0dGVybWluYXRlPyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogRGVmaW5lcyB0eXBlcyBvZiB2aXJ0dWFsIERPTSBub2RlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTlR5cGVcclxue1xyXG5cdC8qKiBUb3AtbGV2ZWwgbm9kZSAqL1xyXG5cdFJvb3QsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGNyZWF0ZWQgdmlhIG5ldyAqL1xyXG5cdEluZGVwZW5kZW50Q29tcCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgbGFpZCBvdXQgdXNpbmcgSlNYICovXHJcblx0TWFuYWdlZENvbXAsXHJcblxyXG5cdC8qKiBTdGF0ZWxlc3MgY29tcG9uZW50IChzaW1wbGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGFjY2VwdGluZyBwcm9wcykgKi9cclxuXHRGdW5jQ29tcCxcclxuXHJcblx0LyoqIERPTSBlbGVtZW50IChIVE1MIG9yIFNWRykgbGFpZCBvdXQgdXNpbmcgSlNYLiAqL1xyXG5cdEVsbSxcclxuXHJcblx0LyoqIFRleHQgbm9kZSAqL1xyXG5cdFRleHQsXHJcblxyXG5cdC8qKiBXcmFwcGVyIGFyb3VuZCBhIGZ1bmN0aW9uL21ldGhvZCB0aGF0IGNhbiBiZSB1cGRhdGVkIGluZGVwZW5kZW50bHkuICovXHJcblx0RnVuY1Byb3h5LFxyXG5cclxuXHQvKiogTm9kZSB0aGF0IHdhaXRzIGZvciBhIHByb21pc2UgdG8gYmUgc2V0dGxlZCBhbmQgdGhlbiBkaXNwbGF5cyB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgY29udGVudC4gKi9cclxuXHRQcm9taXNlUHJveHksXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUuIFRocm91Z2ggdGhpcyBpbnRlcmZhY2UsIGNhbGxlcnMgY2FuIHBlcmZvcm1cclxuICogbW9zdCBjb21tb24gYWN0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgb24gZXZlcnkgdHlwZSBvZiB2aXJ0dWFsIG5vZGUuIEVhY2ggdHlwZSBvZiB2aXJ0dWFsIG5vZGVcclxuICogYWxzbyBpbXBsZW1lbnRzIGEgbW9yZSBzcGVjaWZpYyBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgc3BlY2lmaWMgY2FwYWJpbGl0aWVzIG9mIHRoZSBub2RlXHJcbiAqIHR5cGUgYXJlIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyBub2RlIHR5cGUuICovXHJcblx0cmVhZG9ubHkgdHlwZTogVk5UeXBlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cmVhZG9ubHkgcGFyZW50PzogSVZOb2RlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cmVhZG9ubHkgY3JlYXRvcj86IElDb21wb25lbnQ7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBuZXh0PzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBwcmV2PzogSVZOb2RlO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM/OiBJVk5vZGVbXTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBub2RlJ3MgZGlzcGxheSBuYW1lLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvciByZXBvcnRpbmcuIFRoZSBuYW1lXHJcblx0ICogY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLCBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCJcclxuXHQgKiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRyZWFkb25seSB1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRyZXF1ZXN0VXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdCAqIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRwdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBzZXJ2aWNlOiBJU2VydmljZURlZmluaXRpb25zW0tdKTogdm9pZDtcclxuXHJcblx0LyoqIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gKi9cclxuXHR1bnB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqL1xyXG5cdHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0ICogY29tcG9uZW50IG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdCAqIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0Z2V0U2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sXHJcblx0XHRcdFx0XHR1c2VTZWxmPzogYm9vbGVhbik6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS107XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvXHJcblx0ICogaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogbWltLkNvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBtaW0uQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0d3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc0NvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgY29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNYW5hZ2VkQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUluZGVwZW5kZW50Q29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIGNvbXBvbmVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBJRWxtVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgRE9NIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbG1WTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG5hbWUuICovXHJcblx0cmVhZG9ubHkgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyAoYXMgb3Bwb3NlZCB0byBIVE1MKS4gKi9cclxuXHRyZWFkb25seSBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG9iamVjdC4gKi9cclxuXHRyZWFkb25seSBlbG06IEVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGV4dFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIHRleHQgRE9NIG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0Vk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBUZXh0IG9mIHRoZSBub2RlLiAqL1xyXG5cdHRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqIFRleHQgRE9NIG5vZGUuICovXHJcblx0dGV4dE5vZGU6IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTbGljZSB0eXBlIGRlZmluZXMgYW4gb2JqZWN0IHN0cnVjdHVyZSBkZXNjcmliaW5nXHJcbiAqIHBhcmFtZXRlcnMgZm9yIHJlbmRlcmluZyBhbiBlbGVtZW50LiBUaGV5IGluY2x1ZGU6IENsYXNzLCBTdHlsZSwgUHJvcGVydGllcywgQ29udGVudC4gVGhpc1xyXG4gKiBzdHJ1Y3R1cmUgaXMgaW50ZW5kZWQgdG8gYmUgcGFzc2VkIGVpdGhlciBpbiB0aGUgY29uc3RydWN0b3Igb3IgdmlhIHRoZSBwcm90ZWN0ZWQgbWV0aG9kcyBvZlxyXG4gKiBkZXJpdmVkIGNsYXNzZXMsIHNvIHRoYXQgdGhleSBjYW4gY29udHJvbCBwYXJhbWV0ZXJzIG9mIGVsZW1lbnRzIHJlbmRlcmVkIGJ5IHRoZSB1cHBlciBjbGFzc2VzLlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIG9mIHRoaXMgc3RydWN0dXJlIGlzIHRvIGNvbWJpbmUgcGFyYW1ldGVycyBkZWZpbmluZyBhbiBlbGVtZW50IGludG8gYSBzaW5nbGVcclxuICogb2JqZWN0IHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBjYWxsZXJzIG9mIGNsYXNzZXMgc2hvdWxkIGRlYWwgd2l0aC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNsaWNlID1cclxue1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRzdHlsZT86IFN0eWxlc2V0O1xyXG5cdHByb3BzPzogb2JqZWN0XHJcblx0Y29udGVudD86IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdF07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSwgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGVcclxuICogY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VD4gfFxyXG5cdFx0XHRcdEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBjbGFzcyBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIENsYXNzUHJvcFR5cGUgPSBzdHJpbmcgfCBJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCAoc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlKVtdO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBpZCBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIElEUHJvcFR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBJSURSdWxlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb21tb25Qcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEpTWCBlbGVtZW50cyAtXHJcbiAqIGludHJpbnNpYyAoSFRNTCBhbmQgU1ZHKSBhcyB3ZWxsIGFzIGZ1bmN0aW9uYWwgYW5kIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFVuaXF1ZSBrZXkgdGhhdCBkaXN0aW5ndWlzaGVzIHRoaXMgSlNYIGVsZW1lbnQgZnJvbSBpdHMgc2libGluZ3MuIFRoZSBrZXkgY2FuIGJlIG9mIGFueSB0eXBlLiAqL1xyXG5cdGtleT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgcHJvcGVydHkgdHlwZXMgdXNlZCBieSBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgY29sb3IgdmFsdWVzIGZvciBkaWZmZXJlbnQgc3R5bGUgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENyb3Nzb3JpZ2luUHJvcFR5cGUgPSBcImFub255bW91c1wiIHwgXCJ1c2UtY3JlZGVudGlhbHNcIjtcclxuZXhwb3J0IHR5cGUgRm9ybWVuY3R5cGVQcm9wVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfCBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB8IFwidGV4dC9wbGFpblwiO1xyXG5leHBvcnQgdHlwZSBGb3JtbWV0aG9kUHJvcFR5cGUgPSBcImdldFwiIHwgXCJwb3N0XCIgfCBcImRpYWxvZ1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtdGFyZ2V0UHJvcFR5cGUgPSBzdHJpbmcgfCBcIl9zZWxmXCIgfCBcIl9ibGFua1wiIHwgXCJfcGFyZW50XCJ8IFwiX3RvcFwiO1xyXG5leHBvcnQgdHlwZSBSZWZlcnJlclBvbGljeVByb3BUeXBlID0gXCJuby1yZWZlcnJlclwiIHwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIHwgXCJvcmlnaW5cIiB8XHJcblx0XHRcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIHwgXCJ1bnNhZmUtdXJsXCI7XHJcblxyXG4vKipcclxuICogVGhlIElFbGVtZW50UHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyAoYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzKVxyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4gPSBhbnk+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGVsZW1lbnQgYWZ0ZXIgaXQgaXMgY3JlYXRlZCAobW91bnRlZCkuIFRoZVxyXG5cdCAqIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdCAqL1xyXG5cdHJlZj86IFJlZlByb3BUeXBlPFRSZWY+O1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBlbGVtZW50IGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8qKiBDaGlsZHJlbiB0aGF0IGNhbiBiZSBzdXBwbGllZCB0byB0aGUgZWxlbWVudCAqL1xyXG5cdGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cclxuXHQvLyBzdGFuZGFyZCBIVE1MIGFuZCBTVkcgZWxlbWVudCBwcm9wZXJ0aWVzXHJcblx0Y2xhc3M/OiBDbGFzc1Byb3BUeXBlO1xyXG5cdGRyYWdnYWJsZT86IGJvb2xlYW47XHJcblx0ZHJvcHpvbmUgPzogXCJjb3B5XCIgfCBcIm1vdmVcIiB8IFwibGlua1wiO1xyXG5cdGlkPzogc3RyaW5nIHwgbnVtYmVyIHwgSUlEUnVsZTtcclxuXHRsYW5nPzogc3RyaW5nO1xyXG5cdHJvbGU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBTdHlsZXNldDtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5vZGVbXSB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm92aWRlIGltcGxlbWVudGF0aW9uIGZvciB0aGUgcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUgZXhwb3J0ZWQgZnVuY3Rpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge0VsbUF0dHIsIFByb3BUeXBlfSBmcm9tIFwiLi4vdXRpbHMvRWxtQXR0clwiO1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgY2xhc3MgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gYXR0cmlidXRlIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIGF0dHJOYW1lOiBzdHJpbmcsIGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPik6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggYXR0ck5hbWUsIHsgdHlwZTogUHJvcFR5cGUuQ3VzdG9tQXR0ciwgaGFuZGxlckNsYXNzIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBldmVudCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUV2ZW50KCBldmVudE5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggZXZlbnROYW1lLCB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm92aWRlIGltcGxlbWVudGF0aW9uIG9mIHV0aWxpdHkgZnVuY3Rpb25zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbiAqIEBwYXJhbSBzbGljZXMgQXJyYXkgb2YgU2xpY2Ugb2JqZWN0cyB0byBtZXJnZS5cclxuICogQHJldHVybnMgUmVzdWx0YW50IFNsaWNlIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlcyggLi4uc2xpY2VzOiBTbGljZVtdKTogU2xpY2Vcclxue1xyXG5cdHJldHVybiB1dGlscy5tZXJnZVNsaWNlcyggLi4uc2xpY2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgU2xpY2Ugb2JqZWN0cyBtZXJnaW5nIGNsYXNzZXMsIHN0eWxlcywgcHJvcGVydGllcyBhbmQgY29udGVudFxyXG4gKiBpbnRvIHRoZSBnaXZlbiByZXN1bHRhbnQgc2xpY2UuXHJcbiAqIEBwYXJhbSByZXNTbGljZSBSZXN1bHRhbnQgU2xpY2Ugb2JqZWN0LlxyXG4gKiBAcGFyYW0gc2xpY2VzIEFycmF5IG9mIFNsaWNlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXNUbyggcmVzU2xpY2U6IFNsaWNlLCAuLi5zbGljZXM6IFNsaWNlW10pOiB2b2lkXHJcbntcclxuXHR1dGlscy5tZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgY2xhc3MgcHJvcGVydGllcyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuICogcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuICogQHBhcmFtIGNsYXNzTmFtZXMgQXJyYXkgb2Ygc3RyaW5ncyBvciBzdHJpbmcgYXJyYXlzIHdpdGggY2xhc3MgbmFtZXNcclxuICogQHJldHVybnMgUmVzdWx0YW50IGNsYXNzIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNsYXNzZXMoIC4uLmNsYXNzTmFtZXM6IChzdHJpbmcgfCBzdHJpbmdbXSlbXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBlYXJsaWVyIG9uZXMuIFRoaXMgbWV0aG9kXHJcbiAqIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdCAtIGV2ZW4gaWYgZW1wdHlcclxuICogQHBhcmFtIHN0eWxlcyBBcnJheSBvZiBzdHlsZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzKCAuLi5zdHlsZXM6IFN0eWxlc2V0W10pOiBTdHlsZXNldFxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU3R5bGVzKCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG4gKiBAcGFyYW0gcmVzU3R5bGUgUmVzdWx0YW50IHN0eWxlIG9iamVjdFxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IFN0eWxlc2V0LCAuLi5zdHlsZXM6IChTdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHR1dGlscy5tZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ2FsbGJhY2sgd3JhcHBpbmdcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7d3JhcENhbGxiYWNrV2l0aFZOLCBjcmVhdGVOb2Rlc0Zyb21KU1h9IGZyb20gXCIuLi9jb3JlL1JlY29uY2lsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLiBOb3RlIHRoYXQgdGhlIFZOIGNhbiBiZSBudWxsL3VuZGVmaW5lZDtcclxuICogaG93ZXZlciwgaW4gdGhpcyBjYXNlIGlmIHRoZSBleGNlcHRpb24gaXMgY2F1Z2h0IGl0IHdpbGwgbm90IGJlIGhhbmRsZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGlzQ2FsbGJhY2sgT2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSB2biBWaXJ0dWFsIG5vZGUgaW4gd2hvc2UgY29udGV4dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cclxuICogQHJldHVybnMgVGhlIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFjay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhpc0NhbGxiYWNrLCB2bik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWcsIHByb3BzLCBjaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoaXNDYWxsYmFjaywgdGhpcy52bik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jUHJveHkgc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRvIGJlIHVzZWQgd2l0aCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gRnVuY1Byb3h5IGNvbXBvbmVudCBjYW5ub3QgaGF2ZSBjaGlsZHJlbi5cclxuICogQSBrZXkgcHJvcGVydHkgY2FuIGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBtdWx0aXBsZSB1c2VzIG9mIHRoZSBzYW1lIGZ1bmN0aW9uLiBJZiB0aGVcclxuICogZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2Ugd2l0aGluIGEgY29tcG9uZW50LCB0aGUga2V5IGlzIG5vdCBuZWNlc3Nhcnk7IGhvd2V2ZXIsIGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG11bHRpcGxlIHRpbWVzLCBrZXkgaXMgbWFuZGF0b3J5IC0gb3RoZXJ3aXNlLCB0aGUgYmVoYXZpb3IgaXMgdW5kZXRlcm1pbmVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGdW5jUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIEZ1bmN0aW9uIHRoYXQgcmVuZGVycyBjb250ZW50LiAqL1xyXG5cdGZ1bmM6IEZ1bmN0aW9uO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi4gV2hlbmV2ZXIgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgcmVuZGVyZWQsIHRoaXNcclxuXHQgKiBwYXJhbWV0ZXIgaXMgdXNlZCB3aGVuIGNhbGxpbmcgdGhlIHdyYXBwZWQgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0YXJncz86IGFueVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgYXJndW1lbnRzIHNwZWNpZmllZCBieSB0aGUgYGFyZ3NgIHByb3BlcnR5IHNob3VsZCBiZSBwYXNzZWQgdG9cclxuXHQgKiB0aGUgZnVuY3Rpb24gb3ZlcnJpZGluZyBhcmd1bWVudHMgdGhhdCB3ZXJlIHNwZWNpZmllZCBieSB0aGUgbW9zdCByZWNlbnQgY2FsbCB0byB0aGVcclxuXHQgKiBGdW5jUHJveHkudXBkYXRlIG1ldGhvZC4gQnkgZGVmYXVsdCB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBmYWxzZSBhbmQgYGFyZ3NgIHdpbGwgYmVcclxuXHQgKiB1c2VkIG9ubHkgdGhlIGZpcnN0IHRpbWUgdGhlIGZ1bmN0aW9uIGlzIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQuIElmIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kIGlzIGNhbGxlZCwgdGhlIGFyZ3VtZW50IHNwZWNpZmllZCBpbiB0aGlzIGNhbGwgd2lsbCByZXBsYWNlIHRoZVxyXG5cdCAqIG9yaWdpbmFsIGFyZ3VtZW50cy4gVGhlIG5leHQgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhlIGBhcmdzYCBwcm9wZXJ0eVxyXG5cdCAqIHdpbGwgYmUgaWdub3JlZC5cclxuXHQgKiBcclxuXHQgKiBOb3RlIHRoZSBmb2xsb3dpbmcgc2VxdWVuY2Ugb2YgYWN0aW9ucyB0aGF0IG9jY3VycyB3aGVuIGByZXBsYWNlQXJnc2AgaXMgZmFsc2Ugb3Igb21pdHRlZDpcclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiAvPi4gXCJBXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiAvPi4gXCJCXCIgd2lsbCBzdGlsbCBiZSB1c2VkLlxyXG5cdCAqIFxyXG5cdCAqIElmIHRoZSBgcmVwbGFjZUFyZ3NgIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB0aGVuIGV2ZXJ5IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbmV0IGlzXHJcblx0ICogcmVuZGVyZWQsIHRoZSB2YWx1ZSBvZiB0aGUgYGFyZ3NgIHByb3BlcnR5IHJlcGxhY2VzIHdoYXRldmVyIGFyZ3VtZW50cyB0aGVyZSB3ZXJlIGJlZm9yZS5cclxuXHQgKiBcclxuXHQgKiBOb3cgbm90ZSB0aGUgc2VxdWVuY2Ugb2YgYWN0aW9ucyB3aGVuIGByZXBsYWNlQXJnc2AgaXMgdHJ1ZTpcclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi5cIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJCXCIpLiBcIkJcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgcmVwbGFjZUFyZ3MgLz4uIFwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkIGFnYWluLlxyXG5cdCAqL1xyXG5cdHJlcGxhY2VBcmdzPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVmFsdWUgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZVxyXG5cdCAqIGNsYXNzIGJhc2VkIGNvbXBvbmVudCB0aGF0IHJlbmRlcmVkIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdpbGwgYmUgdXNlZCAod2hpY2ggaXMgdGhlXHJcblx0ICogbW9zdCBjb21tb24gY2FzZSkuXHJcblx0ICovXHJcblx0dGhpc0FyZz86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZ1bmNQcm94eSBjb21wb25lbnQgd3JhcHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGNvbnRlbnQuIFByb3hpZXMgY2FuIHdyYXAgaW5zdGFuY2VcclxuICogbWV0aG9kcyBvZiBjbGFzc2VzIHRoYXQgaGF2ZSBhY2Nlc3MgdG8gXCJ0aGlzXCIgdGh1cyBhbGxvd2luZyBhIHNpbmdsZSBjbGFzcyB0byBcImhvc3RcIiBtdWx0aXBsZVxyXG4gKiBjb21wb25lbnRzIHRoYXQgY2FuIGJlIHVwZGF0ZWQgc2VwYXJhdGVseS4gVGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbm90IGludGVuZGVkIHRvIGJlXHJcbiAqIGNyZWF0ZWQgYnkgZGV2ZWxvcGVyczsgaW5zdGVhZCBpdCBpcyBvbmx5IHVzZWQgaW4gaXRzIEpTWCBmb3JtIGFzIHRoZSBmb2xsb3dpbmc6XHJcbiAqIFxyXG4gKiBgYGB0c3hcclxuICogPEZ1bmNQcm94eSBmdW5jPXt0aGlzLnJlbmRlclNvbWV0aGluZ30ga2V5PXsuLi59IGFyZ3M9ey4uLn0gdGhpc0FyZz17Li4ufSAvPlxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoZXJlIGlzIGEgc2ltcGxlciBtZXRob2Qgb2Ygc3BlY2lmeWluZyBhIHJlbmRlcmluZyBmdW5jdGlvbiBpbiBKU1gsIGUuZy46XHJcbiAqIFxyXG4gKiBgYGB0c3hcclxuICogPGRpdj57dGhpcy5yZW5kZXJTb21ldGhpbmd9PC9kaXY+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlIEZ1bmNQcm94eSBjb3BvbmVudCBpcyBuZWVkZWQgaW4gdGhlIGNhc2Ugd2hlcmUgb25lIChvciBtb3JlKSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XHJcbiAqIC0gVGhlcmUgaXMgYSBuZWVkIHRvIHBhc3MgYXJndW1lbnRzIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAtIFRoZSBzYW1lIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMgYW5kIGtleXMgbXVzdCBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlXHJcbiAqIGludm9jYXRpb25zLlxyXG4gKiAtIFRoZSB2YWx1ZSBvZiBcInRoaXNcIiBpbnNpZGUgdGhlIGZ1bmN0aW9uIGlzIG5vdCB0aGUgY29tcG9uZW50IHRoYXQgZG9lcyB0aGUgcmVuZGVyaW5nLiBUaGF0XHJcbiAqIGlzLCB0aGUgZnVuY3Rpb24gaXMgbm90IGEgbWV0aG9kIG9mIHRoaXMgY29tcG9uZW50LlxyXG4gKiBcclxuICogRnVuY1Byb3h5IGhhcyBhIHB1YmxpYyBzdGF0aWMgVXBkYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSBjYWxsZWQgdG8gY2F1c2UgdGhlIHJlbmRlcmluZyBtZWNoYW5pc21cclxuICogdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5IGV4dGVuZHMgQ29tcG9uZW50PEZ1bmNQcm94eVByb3BzLHZvaWQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogRnVuY1Byb3h5UHJvcHMpIHsgc3VwZXIocHJvcHMpIH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3QgcmUtcmVuZGVyaW5nIG9mIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBnaXZlbiBmdW5jdGlvbiBieSBpbnZva2luZyB0aGlzXHJcblx0ICogZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiBtdXN0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHVzZWQgaW4gcmVuZGVyaW5nIHVzaW5nIGVpdGhlclxyXG5cdCAqIDxGdW5jUHJveHkgZnVuYz17fSAvPiBKU1ggY29uc3RydWN0IG9yIGEgc2ltcGxlciBjb25zdHVjdFxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGludm9rZS5cclxuXHQgKiBAcGFyYW0ga2V5IFZhbHVlIHRoYXQgaGVscHMgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBtdWx0aXBsZSB1c2FnZXMgb2YgdGhlIGZ1bmN0aW9uLlxyXG5cdCAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCAuLi5hcmdzOiBhbnlbXSlcclxuXHR7XHJcblx0XHRGdW5jUHJveHlWTi51cGRhdGUoIGZ1bmMsIGtleSwgdGhpc0FyZywgYXJncyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdXBwb3J0IGZvciBwcm9taXNlcyByZXR1cm5lZCBhcyBjb250ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRvIGJlIHVzZWQgd2l0aCB0aGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvbWlzZVByb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBQcm9taXNlIHRoYXQgd2lsbCBiZSB3YXRjaCBieSB0aGUgd2FpdGluZyBub2RlLiAqL1xyXG5cdHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0LyoqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLiAqL1xyXG5cdGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgd3JhcHMgYSBQcm9taXNlIGFuZCByZXBsYWNlcyBpdHMgY29udGVudCB3aGVuIHRoZSBwcm9taXNlIGlzIHNldHRsZWQuXHJcbiAqIEJlZm9yZSB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLCB0aGUgY29tcG9uZW50IGRpc3BsYXlzIGFuIG9wdGlvbmFsIFwiaW4tcHJvZ3Jlc3NcIiBjb250ZW50XHJcbiAqIHNwZWNpZmllZCBhcyBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgdGhlIGNvbXBvbmVudCB3aWxsIGVpdGhlclxyXG4gKiBkaXNwbGF5IHRoZSBcImVycm9yXCIgY29udGVudCBvYnRhaW5lZCBieSBjYWxsaW5nIGEgZnVuY3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgcHJvcGVydGllcyBvciwgaWZcclxuICogc3VjaCBmdW5jdGlvbiBpcyBub3Qgc3BlY2lmaWVkLCBkaXNwbGF5IG5vdGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5IGV4dGVuZHMgQ29tcG9uZW50PFByb21pc2VQcm94eVByb3BzPlxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdGFuY2VzIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGFyZSBuZXZlciBhY3R1YWxseSBjcmVhdGVkOyBpc3RlYWQsIHRoZSBwYXJhbWV0ZXJzXHJcblx0ICogcGFzc2VkIHRvIGl0IHZpYSBKU1ggYXJlIHVzZWQgYnkgYW4gaW50ZXJuYWwgdmlydHVhbCBub2RlIHRoYXQgaGFuZGxlcyBmdW5jdGlvblxyXG5cdCAqIGludm9jYXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggcHJvcHM6IFByb21pc2VQcm94eVByb3BzKSB7IHN1cGVyKCBwcm9wcyk7IH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIG1vdW50L3VubW91bnQgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyByb290IGZyb20gXCIuLi9jb3JlL1Jvb3RWTlwiXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QubW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWltYmwtc3BlY2lmaWMgc3R5bGUgc2NoZWR1bGVyIHRoYXQgY29vcmRpbmF0ZXMgTWltY3NzIERPTSB3cml0aW5nIHdpdGggTWltYmxcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7aW5pdGlhbGl6ZU1pbWJsU3R5bGVTY2hlZHVsZXJ9IGZyb20gXCIuLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuXHJcbi8vIHNldCBNaW1ibCBzdHlsZSBzY2hlZHVsZXIgYXMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIGZvciBzdHlsZS1yZWxhdGVkIERPTS13cml0aW5nIG9wZXJhdGlvbnMuXHJcbmV4cG9ydCBsZXQgbWltYmxTdHlsZVNjaGVkdWxlclR5cGUgPSBpbml0aWFsaXplTWltYmxTdHlsZVNjaGVkdWxlcigpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgLSB1c2UgYEB0cmlnZ2VyYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc0NvbXBWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JQ2xhc3NDb21wVk5cclxue1xyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwdWJsaWMgY29tcDogbWltLklDb21wb25lbnQ7XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogbWltLlVwZGF0ZVN0cmF0ZWd5XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSA/IHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHJlbmRlcigpIG9uIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyV2F0Y2hlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC52biA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGRvbid0IG5lZWQgdHJ5L2NhdGNoIGJlY2F1c2UgaXQgd2lsbCBiZSBjYXVnaHQgdXAgdGhlIGNoYWluXHJcblx0XHRpZiAodGhpcy5jb21wLndpbGxNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmNvbXAucmVuZGVyLCB0aGlzLnJlcXVlc3RVcGRhdGUsIHRoaXMuY29tcCwgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wLndpbGxVbm1vdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbmVlZCB0cnkvY2F0Y2ggYnV0IG9ubHkgdG8gbG9nXHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAud2lsbFVubW91bnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXhjZXB0aW9uIGluIHdpbGxVbm1vdW50IG9mIGNvbXBvbmVudCAnJHt0aGlzLm5hbWV9J2AsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5jb21wLnZuID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcC5kaWRNb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdHJ5L2NhdGNoIGJ1dCBvbmx5IHRvIGxvZ1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLmRpZE1vdW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBpbiBkaWRNb3VudCBvZiBjb21wb25lbnQgJyR7dGhpcy5uYW1lfSdgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gV2F0Y2hlciBmdW5jdGlvbiB3cmFwcGluZyB0aGUgY29tcG9uZW50J3MgcmVuZGVyIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnlcclxuICAgIC8vIHRyaWdnZXIgb2JqZWN0cyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlXHJcbiAgICAvLyB0aHVzIHRyaWdnZXJyaW5nIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIHJlbmRlcldhdGNoZXI6IElXYXRjaGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7RWxtQXR0ciwgQXR0clByb3BJbmZvLCBFdmVudFByb3BJbmZvLCBDdXN0b21BdHRyUHJvcEluZm8sIFByb3BUeXBlLCBQcm9wSW5mb30gZnJvbSBcIi4uL3V0aWxzL0VsbUF0dHJcIlxyXG5pbXBvcnQge2RlZXBDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Ly8gVGFnIG5hbWUgb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBFbGVtZW50IGlzIFNWRyAoYXMgb3Bwb3NlZCB0byBIVExNKS4gVGhlcmUgYXJlIHNvbWUgU1ZHXHJcblx0Ly8gZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgcmVndWxhciBlbGVtZW50cyAoZS5nLiA8YT4pLiBUaGVyZWZvcmUsIGluIG9yZGVyIHRvXHJcblx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3Igbm90IHdlIG5lZWQgdG8gY2hlY2sgdGhlIG5hbWVzcGFjZVVSSSBvZiB0aGUgcGFyZW50XHJcblx0Ly8gKGFuY2hvcmUpIERPTSBub2RlLlxyXG5cdHB1YmxpYyBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkVsbTtcclxuXHRcdHRoaXMuZWxtTmFtZSA9IHRhZ05hbWU7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIGtleSBwcm9wZXJ0eS4gSWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3RcclxuXHRcdFx0Ly8gc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0XHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5FbG07IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZWxtTmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy5lbG07IH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBIVE1MIGVsZW1lbnQgYW5kIGNyZWF0ZSB0aGUgZWxlbWVudFxyXG5cdFx0bGV0IHN2Z0luZm8gPSBTdmdFbG1zLmdldFN2Z0VsbUluZm8oIHRoaXMuZWxtTmFtZSk7XHJcblx0XHR0aGlzLmlzU3ZnID0gc3ZnSW5mbyAhPT0gdW5kZWZpbmVkICYmIChzdmdJbmZvICE9PSB0cnVlIHx8IHRoaXMuYW5jaG9yRE4ubmFtZXNwYWNlVVJJLmVuZHNXaXRoKCBcInN2Z1wiKSk7XHJcblx0XHR0aGlzLmVsbSA9IHRoaXMuaXNTdmdcclxuXHRcdFx0PyB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggU3ZnRWxtcy5uYW1lc3BhY2UsIFN2Z0VsbXMuZ2V0RWxtTmFtZSggc3ZnSW5mbywgdGhpcy5lbG1OYW1lKSlcclxuXHRcdFx0OiB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHRoaXMuZWxtTmFtZSk7XHJcblxyXG5cdFx0Ly8gdHJhbnNsYXRlIHByb3BlcnRpZXMgaW50byBhdHRyaWJ1dGVzLCBldmVudHMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5hdHRycylcclxuXHRcdFx0dGhpcy5hZGRBdHRycygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5hZGRDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSAoaWYgc3BlY2lmaWVkKVxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHRlcm1pbmF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCB0cnVlKTtcclxuXHJcblx0XHQvLyBjbGVhbiB1cFxyXG5cdFx0dGhpcy5lbG0gPSBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhZGVlcENvbXBhcmUoIHRoaXMucHJvcHMsIChuZXdWTiBhcyBFbG1WTikucHJvcHMpO1xyXG5cclxuXHRcdC8vIHJlbmRlciBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBlaXRoZXIgb2xkIG9yIG5ldyBub2RlIGhhcyBjaGlsZHJlblxyXG5cdFx0bGV0IHNob3VsZFJlbmRlciA9IHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwIHx8XHJcblx0XHRcdFx0XHQobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuICYmIChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IChuZXdWTiBhcyBFbG1WTikucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbjtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwgfHwgcHJvcFZhbCA9PT0gZmFsc2UpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQsIG51bGwgYW5kIGZhbHNlXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwidXBkYXRlU3RyYXRlZ3lcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHVwZGF0ZVN0cmF0ZWd5IHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0XHQvLyBvciBjdXN0b20gYXR0cmlidXRlKS4gTm90ZSB0aGF0IGdldFByb3BlcnR5SW5mbyBtYXkgcmV0dXJuIG51bGwgb25seSBmb3IgcmVndWxhclxyXG5cdFx0XHRcdC8vIGF0dHJpYnV0ZXMuXHJcblx0XHRcdFx0cHJvcEluZm8gPSBFbG1BdHRyLmdldFByb3BlcnR5SW5mbyggcHJvcE5hbWUpO1xyXG5cdFx0XHRcdHByb3BUeXBlID0gcHJvcEluZm8gPyBwcm9wSW5mby50eXBlIDogUHJvcFR5cGUuQXR0cjtcclxuXHRcdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBldmVudEluZm8gPSBnZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRJbmZvKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzID0ge31cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgY3VzdG9tZSBhdHRyaWJ1dGVzIHZhbHVlLiBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBsYXRlci5cclxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBET00gYXR0cmlidXRlcyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnRkID0gdGhpcy5hdHRyc1tuYW1lXTtcclxuXHRcdFx0RWxtQXR0ci5zZXRBdHRyKCB0aGlzLmVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzID8gbmV3QXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdSVEQgfHwgIW5ld1JURC52YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHRcdC8vIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGF0dHJpYnV0ZXM7IGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQXR0cnMgJiYgKG5hbWUgaW4gb2xkQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0cHJpdmF0ZSByZW1vdmVFdmVudHMoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0V2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRFdmVudHMgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEV2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkRXZlbnQgPSBvbGRFdmVudHNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzID8gbmV3RXZlbnRzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3RXZlbnQpXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkRXZlbnQsIG5ld0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0V2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkRXZlbnRzICYmIChuYW1lIGluIG9sZEV2ZW50cykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgbmV3RXZlbnRzW25hbWVdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3RXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkRXZlbnQ6IEV2ZW50UnVuVGltZURhdGEsIG5ld0V2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGRvdWJsZS1lcXVhbC1zaWduIGZvciB1c2VDYXB0dXJlIGlzIG9uIHB1cnBvc2UsIGJlY2F1c2UgdXNlQ2FwdHVyZSBjYW4gYmUgdW5kZWZpbmVkIG9yIGJvb2xlYW5cclxuXHRcdGlmIChvbGRFdmVudC5vcmdGdW5jID09PSBuZXdFdmVudC5vcmdGdW5jICYmXHJcblx0XHRcdG9sZEV2ZW50LnRoYXQgPT09IG5ld0V2ZW50LnRoYXQgJiZcclxuXHRcdFx0b2xkRXZlbnQudXNlQ2FwdHVyZSA9PSBuZXdFdmVudC51c2VDYXB0dXJlKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gb2xkRXZlbnQud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1vdmUgb2xkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEV2ZW50LndyYXBwZXIsIG9sZEV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIG5ldyB3cmFwcGVyIGFuZCBhZGQgaXQgYXMgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBuZXdFdmVudCk7XHJcblx0XHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0V2ZW50LndyYXBwZXIsIG5ld0V2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lci4gVGhlIHdyYXBwZXIgaXMgYm91bmQgdG9cclxuXHQvLyB0aGUgaW5zdGFuY2Ugb2YgRWxtVk4gYW5kIHRodXMgY2FuIGludGVyY2VwdCBleGNlcHRpb25zIGFuZCBwcm9jZXNzIHRoZW0gdXNpbmcgdGhlIHN0YW5kYXJkXHJcblx0Ly8gZXJyb3Igc2VydmljZS4gVW5sZXNzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBpcyBhbHJlYWR5IGEgYm91bmQgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkXHJcblx0Ly8gd2l0aCBcInRoaXNcIiBzZXQgdG8gZWl0aGVyIHRoZSBcImV2ZW50LnRoYXRcIiBvYmplY3Qgb3IsIGlmIHRoZSBsYXR0ZXIgaXMgdW5kZWZpbmVkLCB0byB0aGVcclxuXHQvLyBcImNyZWF0b3JcIiBvYmplY3QsIHdoaWNoIGlzIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoZSBlbGVtZW50IGkgaXRzIHJlbmRlclxyXG5cdC8vIG1ldGhvZC5cclxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBtaW0uRXZlbnRGdW5jVHlwZTxFdmVudD5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53cmFwQ2FsbGJhY2soIGV2ZW50Lm9yZ0Z1bmMsIGV2ZW50LnRoYXQgPyBldmVudC50aGF0IDogdGhpcy5jcmVhdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIGFkZEN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBjdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBjdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVDdXN0b21BdHRycyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gb2xkQ3VzdG9tQXR0ci5oYW5kbGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3Q3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQ3VzdG9tQXR0cnMgJiYgKG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgbmV3Q3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgbmV3Q3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VzdG9tQXR0cnMgPSBuZXdDdXN0b21BdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBkZWZpbmluZyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdHB1YmxpYyB1cGRhdGVTdHJhdGVneTogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LiBUaGUgcmVmIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIG9uIHVwZGF0ZS5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBieSBcInRoaXNcIiB3aXRoaW4gdGhlIGludm9rZWQgZnVuY3Rpb25cclxuXHR0aGF0PzogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU/OiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogIG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+IH07XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgbWltLkV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSwgdXNlQ2FwdHVyZTogcHJvcFZhbFsyXSBhcyBib29sZWFuIH07XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIHRoZSBwcm9wZXJ0eSBpcyBub3QgdHJlYXRlZCBhcyBhbiBldmVudCBoYW5kbGVyXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbUluZm8gdHlwZSBkZWZpbmVzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gU1ZHIGVsZW1lbnQuIFRoaXNcclxuLy8gaW5mb3JtYXRpb24gY2FuIGJlIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbi8vXHQtIHN0cmluZyAtIGFjdHVhbCBuYW1lIHRvIHVzZSBmb3IgdGhlIGVsZW1lbnQuIFNvbWUgU1ZHIGVsZW1lbnRzIGhhdmUgbmFtZXMgdGhhdCBjYW5ub3QgYmUgdXNlZFxyXG4vL1x0XHRpbiBKWCBkaXJlY3RseSAoZS5nLiBiZWNhdXNlIG9mIGh5cGhlbiBsaWtlIGluIFwiY29sb3ItcHJvZmlsZVwiKS4gSW4gdGhpcyBjYXNlIHRoZSBzdHJpbmdcclxuLy9cdFx0dmFsdWUgd2lsbCBiZSB0aGUgYWN0dWFsIGVsZW1lbnQgbmFtZSB0byBwdXQgaW50byBIVE1MIGRvY3VtZW50LCB3aGlsZSBKU1ggd2lsbCBiZSB1c2luZ1xyXG4vL1x0XHRhIGNhbWVsLWZvcm1hdHRlZCBuYW1lIChlLmcuIFwiY29sb3JQcm9maWxlXCIpLlxyXG4vL1x0LSBib29sZWFuIC0gZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIGVsZW1lbnQgaXMgXCJkdWFsLXB1cnBvc2VcIjsgdGhhdCBpcywgZWxlbWVudCB3aXRoIHRoaXNcclxuLy9cdFx0bmFtZSBjYW4gYmUgdXNlZCBhcyBlaXRoZXIgSFRNTCBvciBTVkcgZWxlbWVudC5cclxuLy9cdC0gdHVwbGUgb2YgdHdvIGVsZW1lbnRzIC0gc3RyaW5nIGFuZCBib29sZWFuIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFib3ZlIGl0ZW1zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgU3ZnRWxtSW5mbyA9IGJvb2xlYW4gfCBzdHJpbmcgfCBbc3RyaW5nLCBib29sZWFuXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1zIGNsYXNzIGNvbnRhaW5zIHByb3BlcnRpZXMgd2l0aCBuYW1lcyB1c2VkIHRvIGRlZmluZSBTVkcgZWxlbWVudHMgaW4gSlNYLiBXaGVuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGFuIGVsZW1lbnQsIHdlIGxvb2t1cCB0aGUgcHJvdmlkZWQgdGFnIG5hbWUgYW5kIGlmIHdlIGZpbmQgaXQgaW4gdGhpcyBjbGFzc1xyXG4vLyB3ZSB1c2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHdpdGggdGhlIHByb3BlciBTVkcgbmFtZXNwYWNlIHN0cmluZy4gVmFsdWVzIG9mIHRoZXNlIHByb3BlcnRpZXNcclxuLy8gYXJlIFN2Z0VsbUluZm8gdmFsdWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU3ZnRWxtc1xyXG57XHJcblx0Ly8gTmFtZXNwYWNlIHVzZWQgdG8gY3JlYXRlIFNWRyBlbGVtZW50cy5cclxuXHRwdWJsaWMgc3RhdGljIG5hbWVzcGFjZTogc3RyaW5nID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gU1ZHIHRhZ1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoIHRhZ05hbWU6IHN0cmluZywgaW5mbzogU3ZnRWxtSW5mbyk6IHZvaWRcclxuXHR7XHJcblx0XHRTdmdFbG1zLmluZm9zW3RhZ05hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBjYW4gYmUgdXNlZCBhcyBhbiBTVkcgZWxlbWVudCBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNTdmdFbG0oIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGFnTmFtZSBpbiBTdmdFbG1zLmluZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIGdpdmVuIHRhZyBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZTogc3RyaW5nKTogU3ZnRWxtSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGluZm9ybWF0aW9uIG9iamVjdCBoYXMgdGhlIFwiZHVhbC1wdXJwb3NlXCIgZmxhZyBzZXQuXHJcblx0cHVibGljIHN0YXRpYyBpc0R1YWxQdXJwb3NlKCBpbmZvOiBTdmdFbG1JbmZvKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDEgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMV0gOiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gZmFsc2UgOiBpbmZvIGFzIGJvb2xlYW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgaXMgYSBcImR1YWwtcHVycG9zZVwiIGVsZW1lbnQ7IHRoYXQgaXMgY2FuIGJlIGVpdGhlclxyXG5cdC8vIEhUTUwgYW5kIFNWRyBlbGVtZW50LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNUYWdEdWFsUHVycG9zZSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5pc0R1YWxQdXJwb3NlKCBpbmZvKSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBvYmplY3QgYW5kIHRoZSB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZSggaW5mbzogU3ZnRWxtSW5mbywgdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMCA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVswXSA6IHRhZ05hbWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGluZm8gYXMgc3RyaW5nIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCB0aGUgZ2l2ZW4gdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWVGb3JUYWcoIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5nZXRFbG1OYW1lKCBpbmZvLCB0YWdOYW1lKSA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgU1ZHIGVsZW1lbnQgbmFtZXMgdG8gU3ZnRWxtSW5mby5cclxuXHRwcml2YXRlIHN0YXRpYyBpbmZvczoge1tlbG1OYW1lOnN0cmluZ106IFN2Z0VsbUluZm99ID1cclxuXHR7XHJcblx0XHRzdmc6IGZhbHNlLFxyXG5cclxuXHRcdGE6IHRydWUsXHJcblx0XHRhbmltYXRlOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVNb3Rpb246IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXHJcblxyXG5cdFx0Y2lyY2xlOiBmYWxzZSxcclxuXHRcdGNsaXBQYXRoOiBmYWxzZSxcclxuXHRcdGNvbG9yUHJvZmlsZTogXCJjb2xvci1wcm9maWxlXCIsXHJcblxyXG5cdFx0ZGVmczogZmFsc2UsXHJcblx0XHRkZXNjOiBmYWxzZSxcclxuXHRcdGRpc2NhcmQ6IGZhbHNlLFxyXG5cclxuXHRcdGVsbGlwc2U6IGZhbHNlLFxyXG5cclxuXHRcdGZlQmxlbmQ6IGZhbHNlLFxyXG5cdFx0ZmVDb2xvck1hdHJpeDogZmFsc2UsXHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBmYWxzZSxcclxuXHRcdGZlQ29tcG9zaXRlOiBmYWxzZSxcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IGZhbHNlLFxyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVEcm9wU2hhZG93OiBmYWxzZSxcclxuXHRcdGZlRmxvb2Q6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQTogZmFsc2UsXHJcblx0XHRmZUZ1bmNCOiBmYWxzZSxcclxuXHRcdGZlRnVuY0c6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jUjogZmFsc2UsXHJcblx0XHRmZUdhdXNzaWFuQmx1cjogZmFsc2UsXHJcblx0XHRmZUltYWdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZU5vZGU6IGZhbHNlLFxyXG5cdFx0ZmVNb3JwaG9sb2d5OiBmYWxzZSxcclxuXHRcdGZlT2Zmc2V0OiBmYWxzZSxcclxuXHRcdGZlUG9pbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVTcG90TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVUaWxlOiBmYWxzZSxcclxuXHRcdGZlVHVyYnVsZW5jZTogZmFsc2UsXHJcblx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0Zm9yZWlnbk9iamVjdDogZmFsc2UsXHJcblxyXG5cdFx0ZzogZmFsc2UsXHJcblxyXG5cdFx0aGF0Y2g6IGZhbHNlLFxyXG5cdFx0aGF0Y2hwYXRoOiBmYWxzZSxcclxuXHJcblx0XHRpbWFnZTogZmFsc2UsXHJcblxyXG5cdFx0bGluZTogZmFsc2UsXHJcblx0XHRsaW5lYXJHcmFkaWVudDogZmFsc2UsXHJcblxyXG5cdFx0bWFya2VyOiBmYWxzZSxcclxuXHRcdG1hc2s6IGZhbHNlLFxyXG5cdFx0bWV0YWRhdGE6IGZhbHNlLFxyXG5cdFx0bXBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdHBhdGg6IGZhbHNlLFxyXG5cdFx0cGF0dGVybjogZmFsc2UsXHJcblx0XHRwb2x5Z29uOiBmYWxzZSxcclxuXHRcdHBvbHlsaW5lOiBmYWxzZSxcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogZmFsc2UsXHJcblx0XHRyZWN0OiBmYWxzZSxcclxuXHJcblx0XHRzY3JpcHQ6IHRydWUsXHJcblx0XHRzZXQ6IGZhbHNlLFxyXG5cdFx0c29saWRjb2xvcjogZmFsc2UsXHJcblx0XHRzdG9wOiBmYWxzZSxcclxuXHRcdHN0eWxlOiB0cnVlLFxyXG5cdFx0c3dpdGNoOiBmYWxzZSxcclxuXHRcdHN5bWJvbDogZmFsc2UsXHJcblxyXG5cdFx0dGV4dDogZmFsc2UsXHJcblx0XHR0ZXh0UGF0aDogZmFsc2UsXHJcblx0XHR0aXRsZTogdHJ1ZSxcclxuXHRcdHRleHRTcGFuOiBmYWxzZSxcclxuXHJcblx0XHR1c2U6IGZhbHNlLFxyXG5cclxuXHRcdHZpZXc6IGZhbHNlLFxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9SZWNvbmNpbGVyXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBjb25uZWN0IGJldHdlZW4gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCB0aGUgVk5zIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxubGV0IHN5bUtleXNUb05vZGVzID0gU3ltYm9sKCBcInN5bUtleXNUb05vZGVzXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBzeW1ib2wgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogbWltLkZ1bmNQcm94eVByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jUHJveHk7XHJcblx0XHR0aGlzLmZ1bmMgPSBwcm9wcy5mdW5jIGFzICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHRcdHRoaXMudGhpc0FyZyA9IHByb3BzLnRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdFx0dGhpcy5hcmdzID0gcHJvcHMuYXJncztcclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblxyXG5cdFx0Ly8gaWYgYSBrZXkgd2FzIG5vdCBwcm92aWRlZCB3ZSB1c2UgdGhlIHZhbHVlIG9mIHRoaXNBcmcgKHdoaWNoIG1pZ2h0IGJlIHRoZSBjdXJyZW50XHJcblx0XHQvLyBjb21wb25lbnQpIGFzIGEga2V5LiBJZiB0aGF0IGlzIHVuZGVmaW5lZCBlaXRoZXIgd2UgdXNlIHRoZSBmdW5jdGlvbiBpdHNlbGYgYXMgYSBrZXkuXHJcbiAgICAgICAgdGhpcy5saW5rS2V5ID0gcHJvcHMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBpZiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJlbmRlclJlcXVpcmVkOyB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uIHByb3h5IGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy50aGlzQXJnLCB0aGlzLmFyZ3MpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuY1dhdGNoZXIoIHRoaXMuYXJncyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5saW5rTm9kZVRvRnVuYygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMudXBkYXRlRnJvbVdhdGNoZXIsIHRoaXMudGhpc0FyZywgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLnVubGlua05vZGVGcm9tRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3QgYW5kIHRoZSBzYW1lIHRoaXNBcmcgcHJvcGVydHlcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IG5ld0Z1bmNQcm94eVZOLmZ1bmMgJiYgdGhpcy50aGlzQXJnID09PSBuZXdGdW5jUHJveHlWTi50aGlzQXJnO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1Byb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5saW5rS2V5ID0gbmV3RnVuY1Byb3h5Vk4ubGlua0tleTtcclxuXHJcblx0XHQvLyB0YWtlIGFyZ3VtZW50cyBmcm9tIHRoZSBuZXcgbm9kZTsgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgXCJ0aGlzQXJnXCIgcmVtYWluIHRoZSBzYW1lLlxyXG5cdFx0dGhpcy5hcmdzID0gbmV3RnVuY1Byb3h5Vk4uYXJncztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBhbHNvIGJlIGNhbGxlZCAtIGJ1dCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSB1c2UgdGhpcyBtZXRob2Qgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZ1wiXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmluZFZOKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55KTogRnVuY1Byb3h5Vk5cclxuXHR7XHJcblx0XHQvLyBpZiB0aGUga2V5IGlzIHVuZGVmaW5lZCwgd2UgdXNlIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmXHJcblx0XHRsZXQgbGlua0tleTogYW55ID0ga2V5IHx8IHRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLmZ1bmMgPSBuZXdGdW5jVk4uZnVuYztcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdHByaXZhdGUgZnVuYzogbWltLkZ1bmNDb21wVHlwZTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQsIGZ1bmN0aW9uIG9yIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTn0gZnJvbSBcIi4vQ2xhc3NDb21wVk5cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JSW5kZXBlbmRlbnRDb21wVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBtaW0uSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuSW5kZXBlbmRlbnRDb21wO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWUgPyB0aGlzLmNvbXAuZGlzcGxheU5hbWUgOiB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS4gVGhlIGluc3RhbmNlIG9mIG91ciBjb21wb25lbnQgaXMgdGhlIGtleS5cclxuXHRwdWJsaWMgZ2V0IGtleSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgaW5zdGFuY2VzIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZyBhbmQgdGhlIG9sZCBvbmUgZm9yIHVubW91bnRpbmcuXHJcblx0XHRpZiAobmVlZHNVcGRhdGluZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXAgPSBuZXdDb21wO1xyXG5cdFx0XHR0aGlzLndpbGxNb3VudCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIG5lZWRzVXBkYXRpbmcpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk59IGZyb20gXCIuL0NsYXNzQ29tcFZOXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTWFuYWdlZENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgbWltLklNYW5hZ2VkQ29tcFZOXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHVibGljIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBtaW0uSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wO1xyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lIHBsdXMga2V5IGlmIGRlZmluZWQuIE5vdGUgdGhhdCBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdC8vIG1pZ2h0IG5vdCBiZSBjcmVhdGVkIHlldCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdFx0aWYgKHRoaXMuY29tcCAmJiB0aGlzLmNvbXAuZGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCggcGFyZW50LCBjcmVhdG9yKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgY29tcG9uZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRzIChhbmQvb3IgZWxlbWVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuICAgICAgICBzdXBlci53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIE1hbmFnZWRDb21wVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIE1hbmFnZWRDb21wVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3Q2xhc3NWTi5rZXk7XHJcblxyXG5cdFx0Ly8gc2hhbGxvdyBjb3B5IHRoZSBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvdGhlciBub2RlIHRvIG91ciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgZ290IG91ciBwcm9wcyBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB3aWxsIGtlZXBcclxuXHRcdC8vIHdvcmtpbmcgd2l0aCBpdCAtIGVzcGVjaWFsbHkgaWYgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QuXHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKCBrZXkgPT4gZGVsZXRlIHRoaXMucHJvcHNba2V5XSk7XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnByb3BzLCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBzaG91bGRSZW5kZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKiBcclxuICogVGhlIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlcyB0aGF0IHVzZSB0aGlzIGZ1bmN0aW9uIGlzIGtlcHQgaW4gYSBtYXAgZnJvbSB0aGVcclxuICoga2V5cyB0byB0aGUgbm9kZXMuIFRoZSBtYXAgaXMgc3RvcmVkIGluIGEgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VQcm94eVZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IG1pbS5Qcm9taXNlUHJveHlQcm9wcywgY2hpbGRyZW4/OiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IG1pbS5WTlR5cGUuUHJvbWlzZVByb3h5O1xyXG5cdFx0dGhpcy5wcm9taXNlID0gcHJvcHMucHJvbWlzZTtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IHByb3BzLmVycm9yQ29udGVudEZ1bmM7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjaGlsZHJlbjtcclxuXHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHByb21pc2UgaXMgc2V0dGxlZCAoc3VjY2Vzc2Z1bGx5IG9yIG5vdCkuXHJcblx0cHVibGljIGdldCBpc1NldHRsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb21pc2UgPT0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IG5hbWUgPSBcIlByb21pc2VcIjtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2F0Y2hQcm9taXNlKCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcbiAgICAgICAgLy8gRE9NIHRyZWUuXHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG4gICAgICAgIHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIHByb21pc2Ugb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9taXNlID09PSBuZXdQcm9taXNlUHJveHlWTi5wcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3UHJvbWlzZVByb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5jb250ZW50ID0gbmV3UHJvbWlzZVByb3h5Vk4uY29udGVudDtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IG5ld1Byb21pc2VQcm94eVZOLmVycm9yQ29udGVudEZ1bmM7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogV2FpdHMgZm9yIHRoZSBwcm9taXNlIHRvIHNldHRsZVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgd2F0Y2hQcm9taXNlKCk6IFByb21pc2U8dm9pZD5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gYXdhaXQgdGhpcy5wcm9taXNlO1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgc3RpbGwgbW91bnRlZCwgcmVxdWVzdCB1cGRhdGVcclxuXHRcdFx0aWYgKHRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIGFscmVhZHkgdW5tb3VudGVkLCBkbyBub3RoaW5nXHJcblx0XHRcdGlmICghdGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb250ZW50RnVuYylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IHRoaXMuZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycjEpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyKTtcclxuXHJcblx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUHJvbWlzZSB0aGF0IHRoaXMgbm9kZSB3YXRjaGVzLlxyXG5cdHByaXZhdGUgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvLyBDb250ZW50IHRoYXQgdGhpcyBub2RlIGRpc3BsYXlzLiBJbml0aWFsbHkgdGhpcyBjb250ZW50IGlzIHNldCB0byBwcm9wcy5jaGlsZHJlbi4gV2hlblxyXG5cdC8vIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkLCB0aGUgY29udGVudCBpcyBzZXQgdG8gdGhlIHJlc29sdmVkIHZhbHVlLiBJZiB0aGUgcHJvbWlzZSBpc1xyXG5cdC8vIHJlamVjdGVkIGFuZCB0aGUgZXJyb3JDb250ZW50RnVuYyBpcyBkZWZpbmVkLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhbmQgaXRzIHJldHVyblxyXG5cdC8vIHZhbHVlIGlzIHVzZWQgYXMgY29udGVudC5cclxuXHRwcml2YXRlIGNvbnRlbnQ/OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgZXJyb3JDb250ZW50RnVuYz86ICggZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGtlcHQgYnkgUm9vdCB2aXJ0dWFsIG5vZGUgYWJvdXQgc2VydmljZSBleHBvcnQgZnVuY3Rpb25hdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZSBzYW1lXHJcbi8vIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcCx9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtlbnRlck11dGF0aW9uU2NvcGUsIGV4aXRNdXRhdGlvblNjb3BlfSBmcm9tIFwiLi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5pbXBvcnQgeyBWTkJhc2UgfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQgeyBUZXh0Vk4gfSBmcm9tIFwiLi9UZXh0Vk5cIlxyXG5pbXBvcnQgeyBJbmRlcGVuZGVudENvbXBWTiB9IGZyb20gXCIuL0luZGVwZW5kZW50Q29tcFZOXCJcclxuaW1wb3J0IHsgUHJvbWlzZVByb3h5Vk4gfSBmcm9tIFwiLi9Qcm9taXNlUHJveHlWTlwiXHJcbmltcG9ydCB7IEZ1bmNQcm94eVZOIH0gZnJvbSBcIi4vRnVuY1Byb3h5Vk5cIlxyXG5pbXBvcnQgeyBFbG1WTiB9IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHsgTWFuYWdlZENvbXBWTiB9IGZyb20gXCIuL01hbmFnZWRDb21wVk5cIlxyXG5pbXBvcnQgeyBGdW5jVk4gfSBmcm9tIFwiLi9GdW5jVk5cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuLy8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuLy8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuLy8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcbi8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuLy9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcbi8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcbi8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5sZXQgc192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmRcclxuLy8gdGhlIHZhbHVlcyBhcmUgdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kXHJcbi8vIHRoZSB2YWx1ZXMgYXJlIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IG1pbS5JQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGdpdmVuIG5vZGUgYXMgdGhlIGN1cnJlbnQgYW5kIGlmIHRoZSBub2RlIGlzIGZvciB0aGUgY29tcG9uZW50LCBzZXQgdGhlIGN1cnJlbnRcclxuICogY29tcG9uZW50LiBSZXR1cm5zIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCB3YXMgcHJldmlvdXNseSB0aGUgY3VycmVudCBvbmUuIEFzIHdlIHJlY3Vyc2Ugb3ZlclxyXG4gKiB2aXJ0dWFsIG5vZGVzIGFuZCBzdWItbm9kZXMsIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBoYXZlIHRoZSBzX2N1cnJlbnRWTiBhbmRcclxuICogc19jdXJyZW50Q2xhc3NDb21wIHZhcmlhYmxlcyB0byBwb2ludCB0byB0aGUgbm9kZSBhbmQgY29tcG9uZW50IGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFja0N1cnJlbnRWTiggdm46IFZOKTogVk5cclxue1xyXG4gICAgbGV0IHByZXZWTiA9IHNfY3VycmVudFZOO1xyXG4gICAgc19jdXJyZW50Vk4gPSB2bjtcclxuICAgIHNfY3VycmVudENsYXNzQ29tcCA9ICF2biA/IG51bGwgOiAodm4gYXMgYW55KS5jb21wICE9IG51bGwgPyAodm4gYXMgYW55KS5jb21wIDogdm4uY3JlYXRvcjtcclxuICAgIHJldHVybiBwcmV2Vk47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlciBpbmRpY2F0aW5nIGluIHdoYXQgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBjeWNsZSB3ZSBjdXJyZW50bHkgcmVzaWRlLlxyXG5jb25zdCBlbnVtIFNjaGVkdWxlclN0YXRlXHJcbntcclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIG5vdCB3aXRoaW4gdGhlIHVwZGF0ZSBjeWNsZVxyXG5cdElkbGUgPSAwLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0QmVmb3JlVXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIHVwZGF0aW5nIG5vZGVzXHJcblx0VXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRBZnRlclVwZGF0ZSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogV3JhcHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCByZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiB0aGVcclxuICogZ2l2ZW4gdmlydHVhbCBub2RlLiBUaGUgZ2l2ZW4gXCJ0aGF0XCIgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzXHJcbiAqIGV4ZWN1dGVkLiBJZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvclxyXG4gKiBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGUgZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYVxyXG4gKiBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkLlxyXG4gKiBAcGFyYW0gdGhpc0NhbGxiYWNrIE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QsIHZuPzogbWltLklWTm9kZSk6IFRcclxue1xyXG5cdHJldHVybiBDYWxsYmFja1dyYXBwZXIuYmluZCggdm4sIHRoaXNDYWxsYmFjaywgY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBjYWxsYmFja3MgaW4gb3JkZXIgdG8gaGF2ZSBpdCBleGVjdXRlZCBpbiBhIE1pbWJsXHJcbiAqIGNvbnRleHQuIFRoZSBmdW5jdGlvbiBpcyB1c3VhbGx5IGJvdW5kIHRvIGEgdmlydHVhbCBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlXHJcbiAqIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmUgYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlXHJcbiAqIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpbiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci4gTm90ZSB0aGF0IFwidGhpc1wiXHJcbiAqIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIGZ1bmN0aW9uIHdhcyBzY2hlZHVsZWQgd2l0aG91dCBiZWluZyBpbiB0aGUgY29udGV4dCBvZiBhbnkgdmlydHVhbCBub2RlLlxyXG4gKiBcclxuICogVGhlIHByb3BlciBNaW1ibCBjb250ZXh0IGVzdGFibGlzaGVzIHRoZSBmb2xsb3dpbmc6XHJcbiAqIC0gZXhlY3V0ZXMgaW4gYSBtdXRhdGlvbiBzY29wZSwgc28gdGhhdCBpZiBhbnkgdHJpZ2dlciB2YWxyaWFibGUgaXMgY2hhbmdlZCBkdXJpbmcgdGhlIGV4ZWN1dGlvblxyXG4gKiAgIG9mIHRoZSBjYWxsYmFjaywgd2F0Y2hlcnMgd2lsbCBiZSBvbmx5IG5vdGlmaWVkIGFmdGVyIHRoZSBjYWxsYmFjayBoYXMgZmluaXNoZWQgaXRzIGV4ZWN1dGlvbi5cclxuICogLSBJZiB0aGUgd3JhcHBpbmcgaGFzIGJlZW4gZG9uZSBpbiB0aGUgY29udGV4dCBvZiBhIHZpcnR1YWwgbm9kZSAoZS5nLiBmcm9tIGEgTWltYmwgY29tcG9uZW50KSxcclxuICogICB0aGUgXCJjdXJyZW50IHZpcnR1YWwgbm9kZVwiIGFuZCB0aGUgXCJjdXJyZW50IGNvbXBvbmVudFwiIGFyZSBzZXQgdG8gdGhlIG5vZGUgYW5kIGNvbXBvbmVudCB1bmRlclxyXG4gKiAgIHdoaWNoIHRoZSBjYWxsYmFjayB3YXMgd3JhcHBlZC4gVGhpcyBhbGxvdyBmb3IgcHJvcGVyIEpTWCBleGVjdXRpb24gYW5kIGZvciB1c2luZyB0aGUgTWltYmxcclxuICogICBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20uXHJcbiAqIFxyXG4gKi9cclxuZnVuY3Rpb24gQ2FsbGJhY2tXcmFwcGVyKCk6IGFueVxyXG57XHJcblx0Ly8gcmVtZW1iZXIgdGhlIGN1cnJlbnQgVk4gYW5kIHNldCB0aGUgY3VycmVudCBWTiB0byBiZSB0aGUgVk4gZnJvbSB0aGUgXCJ0aGlzXCIgdmFsdWUuIE5vdGVcclxuXHQvLyB0aGF0IHRoaXMgY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgd3JhcHBpbmcgd2FzIGNyZWF0ZWQgd2l0aG91dCB0aGUgVk4gY29udGV4dC5cclxuICAgIGxldCB2bjogVk4gPSB0aGlzO1xyXG4gICAgbGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKCB2biA/IHZuIDogbnVsbCk7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuICAgICAgICBlbnRlck11dGF0aW9uU2NvcGUoKTtcclxuXHRcdGxldCBbdGhpc09yZ0NhbGxiYWNrLCBvcmdDYWxsYmFjaywgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnQ2FsbGJhY2suYXBwbHkoIHRoaXNPcmdDYWxsYmFjaywgcmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG4gICAgICAgIGxldCBlcnJvclNlcnZpY2UgPSB2bj8uZ2V0U2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG4gICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgIGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCBnZXRWTlBhdGgoIHZuKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcblx0fVxyXG5cdGZpbmFsbHlcclxuXHR7XHJcbiAgICAgICAgZXhpdE11dGF0aW9uU2NvcGUoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdG9yZSBwcmV2aW91cyBjdXJyZW50IFZOXHJcbiAgICAgICAgdHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRjb25zb2xlLndhcm4oIGBVcGRhdGUgcmVxdWVzdGVkIGZvciB2aXJ0dWFsIG5vZGUgJyR7Z2V0Vk5QYXRoKHZuKS5qb2luKFwiLT5cIil9JyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbmNob3IgRE9NIG5vZGVgKVxyXG5cclxuICAgIGFkZE5vZGVUb1NjaGVkdWxlciggdm4pO1xyXG5cclxuXHQvLyB0aGUgdXBkYXRlIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCB0aWNrIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlIGR1cmluZyBhXHJcblx0Ly8gXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uLlxyXG5cdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHMgdGhlIGdpdmVuIG5vZGUgYW5kIHJlbGF0ZWQgaW5mb3JtYXRpb24gaW50byB0aGUgaW50ZXJuYWwgc3RydWN0dXJlcyBzbyB0aGF0IGl0IHdpbGwgYmVcclxuLy8gdXBkYXRlZCBkdXJpbmcgdGhlIG5leHQgTWltYmwgdGljay5cclxuZnVuY3Rpb24gYWRkTm9kZVRvU2NoZWR1bGVyKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0Ly8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIGl0IGNhbGxzIHJlcXVlc3RVcGRhdGUoKS5cclxuXHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0Ly8gaWYgdGhpcyBpcyBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBhbmQgaXQgaGFzIGJlZm9yZVVwZGF0ZSBhbmQvb3IgYWZ0ZXJVcGRhdGUgbWV0aG9kc1xyXG5cdC8vIGltcGxlbWVudGVkLCBzY2hlZHVsZSB0aGVpciBleGVjdXRpb25zLiBOb3RlIHRoYXQgdGhlIFwiYmVmb3JlVXBkYXRlXCIgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIHNjaGVkdWxlZCBpZiB0aGUgY3VycmVudCBzY2hlZHVsZXIgc3RhdGUgaXMgQmVmb3JlVXBkYXRlLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudFxyXG5cdC8vIHdpbCBiZSB1cGRhdGVkIGluIHRoZSBjdXJyZW50IGN5Y2xlIGFuZCB0aGVyZSBpcyBhbHJlYWR5IG5vIHRpbWUgdG8gZXhlY3V0ZSB0aGUgXCJiZWZvcmVcclxuXHQvLyB1cGRhdGVcIiBtZXRob2QuXHJcblx0aWYgKHZuLnR5cGUgPT09IG1pbS5WTlR5cGUuSW5kZXBlbmRlbnRDb21wIHx8IHZuLnR5cGUgPT09IG1pbS5WTlR5cGUuTWFuYWdlZENvbXApXHJcblx0e1xyXG5cdFx0bGV0IGNvbXAgPSAodm4gYXMgYW55IGFzIG1pbS5JQ2xhc3NDb21wVk4pLmNvbXA7XHJcblx0XHRpZiAoY29tcC5iZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNldCggY29tcC5iZWZvcmVVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblxyXG5cdFx0aWYgKGNvbXAuYWZ0ZXJVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGNvbXAuYWZ0ZXJVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuLy8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiBtaW0uU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbixcclxuICAgIHRoaXNBcmc/OiBvYmplY3QsIHZuPzogbWltLklWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhpc0FyZywgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGlzQXJnLCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgb3IgdGhlIGZyYW1lIGhhcyBhbHJlYWR5XHJcbi8vIGJlZW4gc2NoZWR1bGVkLlxyXG5mdW5jdGlvbiByZXF1ZXN0RnJhbWVJZk5lZWRlZCgpOiB2b2lkXHJcbntcclxuXHRpZiAoc19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uU2NoZWR1bGVkRnJhbWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIG9uU2NoZWR1bGVkRnJhbWUoKTogdm9pZFxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIHJlcXVlc3RzIHdpbGxcclxuXHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcbiAgICBkb01pbWJsZVRpY2soKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWNvbmNpbGVyIG1haW4gZW50cmFuY2UgcG9pbnRcclxuZnVuY3Rpb24gZG9NaW1ibGVUaWNrKCk6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzLiBJZiB0aGlzIGZ1bmN0aW9uXHJcblx0Ly8gY2FsbHMgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kIG9yIHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRlcyxcclxuXHQvLyB0aGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhpcyBjeWNsZS4gSG93ZXZlciwgaWYgaXQgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxyXG5cdC8vIGJlZm9yZSB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBNYXA8bWltLlNjaGVkdWxlZEZ1bmNUeXBlLG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLCB0cnVlKTtcclxuXHR9XHJcblxyXG5cdGlmIChzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcbiAgICAgICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAgICAgbGV0IHN0YXRzQWxyZWFkeUV4aXN0ZWQgPSBEZXRhaWxlZFN0YXRzLnN0YXRzICE9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghc3RhdHNBbHJlYWR5RXhpc3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdGljayAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdC8vIHVwZGF0ZSByZXF1ZXN0cy4gQXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgYW5kIHBlcmZvcm0gdXBkYXRlcy5cclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0XHRsZXQgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gc192bnNTY2hlZHVsZWRGb3JVcGRhdGU7XHJcblx0XHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlKSkpO1xyXG5cclxuICAgICAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRzQWxyZWFkeUV4aXN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcbi8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG4vL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcbi8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG4vL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG4vLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuLy8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuZnVuY3Rpb24gYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcbntcclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMzIpO1xyXG5cdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdHtcclxuICAgICAgICAvLyBpdCBjYW4gaGFwcGVuIHRoYXQgd2UgZW5jb3VudGVyIGFscmVhZHkgdW5tb3VudGVkIHZpcnR1YWwgbm9kZXMgLSBpZ25vcmUgdGhlbVxyXG4gICAgICAgIGlmICghdm4uYW5jaG9yRE4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5mdW5jdGlvbiBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcbntcclxuXHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcbiAgICBsZXQgZGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgdm5zIG9mIHZuc0J5RGVwdGgpXHJcblx0e1xyXG4gICAgICAgIC8vIHZuc0J5RGVwdGggaXMgYSBzcGFyc2UgYXJyYXkgc28gaXQgY2FuIGhhdmUgaG9sZXNcclxuICAgICAgICBpZiAoIXZucylcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGZvciggbGV0IHZuIG9mIHZucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciB0aGUgZmxhZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgZm9yIHRoZSBub2RlXHJcbiAgICAgICAgICAgICAgICB2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgY3ljbGUsIGRvbid0IHVwZGF0ZSBpdCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgaWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3AgPSB7IG5ld1ZOOiB2biwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk46IHZufTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWROb2RlKCBkaXNwKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBSb290Vk4gb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHNfY3VycmVudFZOID8gZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkJVRzogdXBkYXRlVmlydHVhbCB0aHJldyBleGNlcHRpb24gYnV0IFN0ZEVycm9ySGFuZGxpbmcgc2VydmljZSB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJhY2tDdXJyZW50Vk4oIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVkTm9kZURpc3BzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHRoZSBjb21taXQgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gVGhlIENvbW1pdCBwaGFzZSBjb25zaXN0cyBvZiB1cGRhdGluZyBET00gYW5kIGNhbGxpbmcgbGlmZS1jeWNsZVxyXG4vLyBtZXRob2RzIGRpZE1vdW50LCBkaWRVcGRhdGUgYW5kIHdpbGxVbm1vdW50LlxyXG5mdW5jdGlvbiBwZXJmb3JtQ29tbWl0UGhhc2UoIHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgZG9uJ3QgdW50aWNpcGF0ZSBhbnkgZXhjZXB0aW9ucyBoZXJlIGJlY2F1c2Ugd2UgZG9uJ3QgaW52b2tlIDNyZC1wYXJ0eSBjb2RlIGhlcmUuXHJcblx0Zm9yKCBsZXQgZGlzcCBvZiB1cGRhdGVkTm9kZURpc3BzKVxyXG5cdFx0Y29tbWl0VXBkYXRlZE5vZGUoIGRpc3ApO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5mdW5jdGlvbiBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogTWFwPG1pbS5TY2hlZHVsZWRGdW5jVHlwZSxtaW0uU2NoZWR1bGVkRnVuY1R5cGU+LCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIHJlbmRlck5ld05vZGUoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyBpZiB3aWxsTW91bnQgZnVuY3Rpb24gaXMgZGVmaW5lZCB3ZSBjYWxsIGl0IHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sXHJcbiAgICAvLyBnb2VzIHRvIGVpdGhlciB0aGUgYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3BcclxuICAgIC8vICh3aGljaCBoYXMgdHJ5L2NhdGNoKS5cclxuICAgIGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoXHJcbiAgICAgICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcbiAgICAgICAgaWYgKHN1Yk5vZGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2UgaGF2ZSBzdWItbm9kZXMsIHdlIG5lZWQgdG8gY3JlYXRlIG5vZGVzIGZvciB0aGVtIGFuZCByZW5kZXIuIElmIG91ciBub2RlXHJcbiAgICAgICAgICAgIC8vIGtub3dzIHRvIGhhbmRsZSBlcnJvcnMsIHdlIGRvIGl0IHVuZGVyIHRyeS9jYXRjaDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9ucyBnbyB0b1xyXG4gICAgICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgICAgIGlmICghdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3I6YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgdGhlIGVycm9yIGFuZCByZS1yZW5kZXI7IHRoZW4gd2UgcmVuZGVyIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwIGluIGFuIGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm4uc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGluayB0aGUgc3ViLW5vZGVzIHdpdGggbmV4dCBhbmQgcHJldiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGxldCBwcmV2Vk46IFZOO1xyXG4gICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2Vk4pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZOLm5leHQgPSBzdm47XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZuLnByZXYgPSBwcmV2Vk47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldlZOID0gc3ZuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB0aGUgc3ViLW5vZGVzXHJcbiAgICAgICAgdm4uc3ViTm9kZXMgPSBzdWJOb2RlcztcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXROZXdOb2RlKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG57XHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIG1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb21taXROZXdOb2RlKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgZGlkTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG4gICAgaWYgKHZuLmRpZE1vdW50KVxyXG4gICAgICAgIHZuLmRpZE1vdW50KCk7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kLCBpZiByZXF1ZXN0ZWQsIHJlY3Vyc2l2ZWx5IG9uIGl0cyBzdWItbm9kZXMuIFRoaXMgZnVuY3Rpb24gaXNcclxuLy8gY2FsbGVkIGZvciBldmVyeSBub2RlIGJlaW5nIGRlc3RydWN0ZWQuIEl0IGlzIGNhbGxlZCBub24tcmVjdXJzaXZlbHkgb24gdGhlIHZpcnR1YWwgbm9kZXMgdGhhdFxyXG4vLyBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gT24gc3VjaCBub2RlcywgdGhlIHVubW91bnQgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgbm9kZSB3aWxsIGJlXHJcbi8vIHByb3Blcmx5IG1hcmtlZCBhcyB1bm1vdW50ZWQuIEZvciB2aXJ0dWFsIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUsIHRoaXNcclxuLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5LiB0aGUgdW5tb3VudCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkIGZvciB0aGVzZSBub2RlcztcclxuLy8gdGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hcmsgdGhlbSBhcyB1bm1vdW50ZWQgaGVyZS5cclxuZnVuY3Rpb24gY2FsbFdpbGxVbm1vdW50KCB2bjogVk4sIHJlY3Vyc2l2ZTogYm9vbGVhbilcclxue1xyXG4gICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgcHJvY2Vzc2VkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG4gICAgLy8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcbiAgICB2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG4gICAgLy8gZmlyc3Qgbm90aWZ5IHN1Yi1ub2RlcyBpZiByZWN1cnNpdmVcclxuICAgIGlmIChyZWN1cnNpdmUgJiYgdm4uc3ViTm9kZXMpXHJcblx0e1xyXG4gICAgICAgIGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gICAgICAgICAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oc3ZuKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxXaWxsVW5tb3VudCggc3ZuLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcbiAgICAgICAgICAgIHZuLnRlcm0oKTtcclxuICAgICAgICAgICAgdm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBub3RpZnkgb3VyIG5vZGVcclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFJlbW92ZWROb2RlKCB2bjogVk4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNpdmVseSB1bm1vdW50IHN1Yi1ub2RlcyBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50O1xyXG4gICAgLy8gaG93ZXZlciwgd2UgbmVlZCB0byBjYWxsIHRoZWlyIHdpbGxVbm1vdW50IG1ldGhvZHMuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIERPTVxyXG4gICAgLy8gbm9kZSwgd2UgbmVlZCB0byBjYWxsIHdpbGxVbm1vdW50IG9ubHkgb24gdGhlIG5vZGUgaXRzZWxmIGJlY2F1c2UgbGF0ZXIgd2Ugd2lsbCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIGl0cyBzdWItbm9kZXMuXHJcbiAgICBjYWxsV2lsbFVubW91bnQoIHZuLCBvd25ETiAhPSBudWxsKTtcclxuXHJcbiAgICAvLyBjYWxsIHVubW91bnQgb24gb3VyIG5vZGUgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgaGFzIGl0cyBvd24gRE4gb3Igbm90XHJcbiAgICBpZiAodm4udW5tb3VudClcclxuICAgIHtcclxuICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG4gICAgICAgIHZuLnVubW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWU7IG90aGVyd2lzZSwgcmVjdXJzZVxyXG4gICAgLy8gaW50byB0aGUgc3ViLW5vZGVzLlxyXG4gICAgaWYgKG93bkROKVxyXG4gICAgICAgIChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuICAgIGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRjb21taXRSZW1vdmVkTm9kZSggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcbiAgICAvLyBtYXJrIHRoZSBub2RlIGFzIHVubW91bnRlZFxyXG5cdHZuLnRlcm0oKTtcclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC5cclxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sIGdvZXMgdG8gZWl0aGVyIHRoZVxyXG4gICAgLy8gYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3AgKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblxyXG5cdC8vIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG5cdGlmIChzdWJOb2RlcylcclxuICAgIHtcclxuICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkU3ViTm9kZXMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZOOiBWTiwgbmV3Vk46IFZOO1xyXG5cdFx0bGV0IHBhcmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pICYmIG9sZFZOLnByZXBhcmVVcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgcHJlcGFyZVVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AudXBkYXRlRGlzcCA9IG9sZFZOLnByZXBhcmVVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0cmVuZGVyVXBkYXRlZE5vZGUoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdHJlbmRlck5ld05vZGUoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGNvbW1pdFJlbW92ZWROb2RlKCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IHRoZSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZyB1cGRhdGVkLiBUaGlzIGlzIGFsd2F5cyB0aGUgb2xkVk4gbWVtYmVyIG9mXHJcblx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGl0IG1pZ2h0IGhhcHBlbiB0aGF0IHRoZSBub2RlIGJlaW5nIHVwZGF0ZWQgd2FzIGFscmVhZHkgZGVsZXRlZCBieSBpdHMgcGFyZW50LiBDaGVja1xyXG5cdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0Ly8gYW5jaG9yIHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2RlcyB0b28uXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblx0bGV0IGFuY2hvckROID0gb3duRE4gIT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIGlmIHRoaXMgdmlydHVhbCBub2RlIGRvZXNuJ3QgZGVmaW5lIGl0cyBvd24gRE9NIG5vZGUgKHRydWUgZm9yIGNvbXBvbmVudHMpLCB3ZSB3aWxsXHJcblx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRsZXQgYmVmb3JlRE4gPSBvd25ETiAhPSBudWxsID8gbnVsbCA6IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2biwgYW5jaG9yRE4pO1xyXG5cclxuXHQvLyByZS1jcmVhdGUgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHR2bi5zdWJOb2RlcyA9IGRpc3Auc3ViTm9kZURpc3BzID8gbmV3IEFycmF5PFZOPihkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVHcm91cHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNvbW1pdE5ld05vZGUoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHR9XHJcblxyXG5cdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdGlmIChuZXh0Vk4pXHJcblx0XHR7XHJcblx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0Vk4gPSBzdm47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG4vLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVzQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggb2xkVk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9IFxyXG57XHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRhY3Rpb24/OiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRvbGRWTj86IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0dXBkYXRlRGlzcD86IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0c3ViTm9kZURpc3BzPzogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXNUb1JlbW92ZT86IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0c3ViTm9kZUdyb3Vwcz86IFZORGlzcEdyb3VwW107XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcbiAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcDogVk5EaXNwLCBuZXdDaGFpbjogVk5bXSk6IHZvaWRcclxue1xyXG4gICAgbGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuICAgIGxldCBvbGRDaGFpbiA9IGRpc3Aub2xkVk4uc3ViTm9kZXM7XHJcbiAgICBsZXQgb2xkTGVuID0gb2xkQ2hhaW4gPyBvbGRDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuICAgIC8vIGlmIGVpdGhlciBvbGQgb3IgbmV3IG9yIGJvdGggY2hhaW5zIGFyZSBlbXB0eSwgd2UgZG8gc3BlY2lhbCB0aGluZ3NcclxuICAgIGlmIChuZXdMZW4gPT09IDAgJiYgb2xkTGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGJvdGggY2hhaW5zIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBvbGRDaGFpbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ld0NoYWluLm1hcCggbmV3Vk4gPT4geyByZXR1cm4geyBuZXdWTiwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uSW5zZXJ0fSB9KTtcclxuICAgICAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBWTkRpc3BBY3Rpb24uSW5zZXJ0LCAwLCBuZXdMZW4gLSAxKV07XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG4gICAgLy8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG4gICAgLy8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHVwZGF0ZVN0cmF0ZWd5ID0gZGlzcC5vbGRWTiA/IGRpc3Aub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuICAgIC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuICAgIC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcbiAgICBpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IFtjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3AsIG5ld0NoYWluWzBdLCBvbGRDaGFpblswXSwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZSBhbmQgd2UgbmVlZCB0b1xyXG4gICAgLy8gcmVjb25jaWxlIHRoZSBjaGFpbnMuIEZpcnN0IGdvIG92ZXIgdGhlIG9sZCBub2RlcyBhbmQgYnVpbGQgYSBtYXAgb2Yga2V5ZWQgb25lcyBhbmQgYVxyXG4gICAgLy8gbGlzdCBvZiBub24ta2V5ZWQgb25lcy4gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbm9kZSB3aXRoIHRoZSBzYW1lIGtleSwgdGhlIGZpcnN0IG9uZVxyXG4gICAgLy8gZ29lcyB0byB0aGUgbWFwIGFuZCB0aGUgcmVzdCB0byB0aGUgdW5sZXllZCBsaXN0LlxyXG4gICAgbGV0IG9sZEtleWVkTWFwID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3Q6IFZOW10gPSBbXTtcclxuICAgIGxldCBrZXk6IGFueTtcclxuICAgIGZvciggbGV0IG9sZFZOIG9mIG9sZENoYWluKVxyXG4gICAge1xyXG4gICAgICAgIGtleSA9IG9sZFZOLmtleTtcclxuICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYgIW9sZEtleWVkTWFwLmhhcygga2V5KSlcclxuICAgICAgICAgICAgb2xkS2V5ZWRNYXAuc2V0KCBrZXksIG9sZFZOKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9sZFVua2V5ZWRMaXN0LnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1lYmVyIHRoZSBsZW5ndGggb2YgdGhlIHVua2V5ZWQgbGlzdDtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdExlbmd0aCA9IG9sZFVua2V5ZWRMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGFycmF5IGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzXHJcbiAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3TGVuKTtcclxuICAgIFxyXG4gICAgLy8gbG9vcCBvdmVyIG5ldyBub2Rlc1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0SW5kZXggPSAwO1xyXG4gICAgbmV3Q2hhaW4uZm9yRWFjaCggKG5ld1ZOLCBpbmRleCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVk46IFZOID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGxvb2sgdXAgdGhlIG9sZCBub2RlIGJ5IHRoZSBuZXcgbm9kZSdzIGtleSBpZiBleGlzdHNcclxuICAgICAgICBrZXkgPSBuZXdWTi5rZXk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2xkVk4gPSBvbGRLZXllZE1hcC5nZXQoIGtleSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIHRoZSBvbGQgbm9kZSBieSB0aGUga2V5LCByZW1vdmUgaXQgZnJvbSB0aGUgbWFwOyBhZnRlciB0aGVcclxuICAgICAgICAgICAgLy8gcmVjb25jaWxpYXRpb24sIGFsbCBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoaXMgbWFwIHdpbGwgYmUgbWFya2VkIGZvciByZW1vdmFsLlxyXG4gICAgICAgICAgICBpZiAob2xkVk4pXHJcbiAgICAgICAgICAgICAgICBvbGRLZXllZE1hcC5kZWxldGUoIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBpbiB0aGUgdW5rZXllZCBsaXN0IHVzZSB0aGUgbmV4dCBvbmVcclxuICAgICAgICBpZiAoIW9sZFZOICYmIG9sZFVua2V5ZWRMaXN0SW5kZXggIT0gb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkVW5rZXllZExpc3Rbb2xkVW5rZXllZExpc3RJbmRleCsrXTtcclxuXHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHNbaW5kZXhdID0gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwLCBuZXdWTiwgb2xkVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG9sZCBub2RlcyByZW1hbmluZyBpbiB0aGUga2V5ZWQgbWFwIGFuZCBpbiB0aGUgdW5rZXllZCBsaXN0IHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgaWYgKG9sZEtleWVkTWFwLnNpemUgPiAwIHx8IG9sZFVua2V5ZWRMaXN0SW5kZXggPCBvbGRVbmtleWVkTGlzdExlbmd0aClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG4gICAgICAgIG9sZEtleWVkTWFwLmZvckVhY2goIG9sZFZOID0+IGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBvbGRVbmtleWVkTGlzdEluZGV4OyBpIDwgb2xkVW5rZXllZExpc3RMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFVua2V5ZWRMaXN0W2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk4/OiBWTiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuKTogVk5EaXNwXHJcbntcclxuICAgIGxldCBzdWJEaXNwOiBWTkRpc3AgPSB7IG5ld1ZOIH07XHJcbiAgICBpZiAoIW9sZFZOKVxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgIGVsc2UgaWYgKG9sZFZOID09PSBuZXdWTiB8fFxyXG4gICAgICAgICgoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgfHwgbmV3Vk4ua2V5ID09PSBvbGRWTi5rZXkpICYmIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbiBiZSB1cGRhdGVkIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgbmV3IG5vZGVcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcbiAgICAgICAgc3ViRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbm5vdCBiZSB1cGRhdGVkLCBzbyB0aGUgbmV3IG5vZGUgd2lsbCBiZSBpbnNlcnRlZCBhbmQgdGhlIG9sZCBub2RlIHdpbGxcclxuICAgICAgICAvLyBiZSByZW1vdmVkXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG4gICAgICAgIGlmICghZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJEaXNwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcbiAgICBsZXQgY291bnQgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHByZS1kZXRlcm1pbmVkIHRocmVzaG9sZFxyXG4gICAgICAgIGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZ3JvdXBzIGFuZCBjcmVhdGUgdGhlIGZpcnN0IGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IG5vZGVcclxuICAgIGxldCBncm91cDogVk5EaXNwR3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGRpc3Auc3ViTm9kZURpc3BzWzBdLmFjdGlvbiwgMCk7XHJcbiAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbZ3JvdXBdO1xyXG5cclxuICAgIC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZSB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cFxyXG4gICAgLy8gb3IgcHV0IHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3IgY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuXHJcbiAgICAvLyBhIG5ldyBvbmUuXHJcbiAgICBsZXQgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHN1YkRpc3AgPSBkaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuICAgICAgICBhY3Rpb24gPSBzdWJEaXNwLmFjdGlvbjtcclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXguIERlY3JlbWVudCB0aGUgaXRlcmF0aW5nIGluZGV4IHNvIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuICAgICAgICAgICAgLy8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgYWN0aW9uLCBpKTtcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYW4gXCJ1cGRhdGVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcbiAgICAgICAgICAgIC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG4gICAgICAgICAgICAvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcbiAgICAgICAgICAgIGlmIChkaXNwLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBzdWJEaXNwLm9sZFZOLnByZXYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuICAgICAgICAvLyBuZXh0IG5vZGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbGFzdCBncm91cFxyXG4gICAgaWYgKGdyb3VwICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZ3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVwZGF0ZSBvZiB0aGUgZ2l2ZW4gb2xkIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbmV3IG5vZGUgaXMgcG9zc2libGUuIFVwZGF0ZVxyXG4gKiBpcyBwb3NzaWJsZSBpZiB0aGUgdHlwZXMgb2Ygbm9kZXMgYXJlIHRoZSBzYW1lIGFuZCBlaXRoZXIgdGhlIGlzVXBkYXRlUG9zc2libGUgbWV0aG9kIGlzIG5vdFxyXG4gKiBkZWZpbmVkIG9uIHRoZSBvbGQgbm9kZSBvciBpdCByZXR1cm5zIHRydWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTjogVk4sIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldEZpcnN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0Rmlyc3RETiggc3ZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bjogVk4sIGFuY2hvckROOiBETik6IEROXHJcbntcclxuXHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0aWYgKHZuLnN1Yk5vZGVzICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1t2bi5zdWJOb2Rlcy5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAoZG4pXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0Zm9yKCBsZXQgbnZuID0gdm4ubmV4dDsgbnZuICE9PSB1bmRlZmluZWQ7IG52biA9IG52bi5uZXh0KVxyXG5cdHtcclxuXHRcdGlmICghbnZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHQvLyBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRjb25zdCBkbiA9IGdldExhc3RETiggbnZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdHJldHVybiB2bi5wYXJlbnQgJiYgdm4ucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETiA/IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bi5wYXJlbnQsIGFuY2hvckROKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcbmZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZSArIChudm4uY3JlYXRvciAmJiBudm4uY3JlYXRvci52biA/IGAgKGNyZWF0ZWQgYnkgJHtudm4uY3JlYXRvci52bi5uYW1lfSlgIDogXCJcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGF0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGVpdGhlciBhIHNpbmdsZSB2aXJ0dWFsIG5vZGUgb3IgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LlxyXG4vLyBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW4gYXJyYXksIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0XHJcbi8vIGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW4gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHNcclxuLy8gbWlnaHQgYWxzbyBiZSBhcnJheXMsIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm5cclxuXHRcdFx0XHRcdFx0PyAoY29udGVudCBhcyBtaW0uSUNvbXBvbmVudCkudm4gYXMgVk5cclxuXHRcdFx0XHRcdFx0OiBuZXcgSW5kZXBlbmRlbnRDb21wVk4oIGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5mdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyAobm9kZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGVzKSA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnJhZ21lbnQpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgbWltLkZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uUHJvbWlzZVByb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLnByb21pc2UpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggcHJvcHMsIGNoaWxkcmVuKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZVxyXG5cdFx0Ly8gYW4gYXJyYXkgb2YgYSBjZXJ0YWluIHR5cGUsIGUuZy4gY2xhc3MgQSBleHRlbmRzIG1pbS5Db21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdH1cclxuXHJcblx0Ly8vICNpZiBERUJVR1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHRhZyBpbiBqc3ggcHJvY2Vzc2luZyBmdW5jdGlvbjogXCIgKyB0YWcpO1xyXG5cdC8vLyAjZW5kaWZcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1Jvb3RWTn0gZnJvbSBcIi4vUm9vdFZOXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdEVycm9yVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwcml2YXRlIHJvb3RWTjogUm9vdFZOO1xyXG5cdHByaXZhdGUgZXJyOiBhbnk7XHJcblx0cHJpdmF0ZSBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCByb290Vk46IFJvb3RWTiwgZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yb290Vk4gPSByb290Vk47XHJcblx0XHR0aGlzLmVyciA9IGVycjtcclxuXHRcdHRoaXMucGF0aFN0cmluZyA9IHBhdGggPyBwYXRoLmpvaW4oIFwiIFxcdTIxOTIgXCIpIDogXCJcIjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdDxkaXY+e3RoaXMuZXJyLm1lc3NhZ2V9PC9kaXY+XHJcblx0XHRcdDxkaXY+e3RoaXMucGF0aFN0cmluZ308L2Rpdj5cclxuXHRcdFx0PGhyIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fS8+XHJcblx0XHRcdDxidXR0b24gY2xpY2s9e3RoaXMub25SZXN0YXJ0fT5SZXN0YXJ0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXN0YXJ0ID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJvb3RWTi5yZXN0YXJ0KCk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RXYWl0aW5nVUkgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBcIkxvYWRpbmcgLi4uXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7cmVxdWVzdE5vZGVVcGRhdGV9IGZyb20gXCIuL1JlY29uY2lsZXJcIlxyXG5pbXBvcnQge0ROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge1Jvb3RFcnJvclVJLCBSb290V2FpdGluZ1VJfSBmcm9tIFwiLi9Sb290VUlcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBSb290Vk4gY2xhc3MgaXMgdXNlZCBhcyBhIHRvcC1sZXZlbCB2aXJ0dWFsIG5vZGUgZm9yIGFsbCByZW5kZXJlZCB0cmVlcy4gUm9vdFZOIHNlcnZlc1xyXG4vLyBhcyBhbiBlcnJvciBib3VuZGFyeSBvZiBsYXN0IHJlc29ydC4gV2hlbiBpdCBjYXRjaGVzIGFuIGVycm9yIHRoYXQgd2Fzbid0IGNhdWdodCBieSBhbnlcclxuLy8gZGVzY2VuZGFuZCBub2RlLCBpdCBkaXNwbGF5cyBhIHNpbXBsZSBVSSB0aGF0IHNob3dzIHRoZSBlcnJvciBhbmQgYWxsb3dzIHRoZSB1c2VyIHRvIHJlc3RhcnQuXHJcbi8vIFJvb3RWTiBhbHNvIG1hbmFnZXMgc2VydmljZSBwdWJsaXNoZXJzIGFuZCBzdWJzY3JpYmVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBSb290Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlJvb3Q7XHJcblx0XHR0aGlzLmFuY2hvckROID0gYW5jaG9yRE47XHJcblx0XHR0aGlzLmRlcHRoID0gMDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LlJvb3Q7IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJSb290XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBjb250ZW50IHRvIGJlIHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlIGFuZCB0cmlnZ2VycyB1cGRhdGUuXHJcblx0cHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgYSBjaGFpbiBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLlxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZXJyb3JVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JVSTtcclxuXHRcdGVsc2UgaWYgKHRoaXMud2FpdGluZ1VJKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy53YWl0aW5nVUk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXlzIHRoZSBjb250ZW50IG9yaWdpbmFsbHkgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIGJlIHVwZGF0ZWRcclxuXHRcdHRoaXMuZXJyb3JVSSA9IHVuZGVmaW5lZDtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgZXJyb3JVSTogUm9vdEVycm9yVUk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZ1VJOiBSb290V2FpdGluZ1VJO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc3ltUm9vdE1vdW50UG9pbnQgPSBTeW1ib2woXCJzeW1Sb290TW91bnRQb2ludFwiKTtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc3ltUm9vdE1vdW50UG9pbnRdID0gcm9vdFZOO1xyXG5cdH1cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVwZGF0ZVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCBmYWxzZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3QuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Um9vdCggYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzeW1Sb290TW91bnRQb2ludF07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cclxuXHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdHJvb3RWTi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTY2hlZHVsZXIsIHJlZ2lzdGVyU2NoZWR1bGVyLCBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZX0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7c2NoZWR1bGVGdW5jQ2FsbH0gZnJvbSBcIi4vUmVjb25jaWxlclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTY2hlZHVsZXIgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIHNjaGVkdWxpbmcgd3JpdGluZyBzdHlsZS1yZWxhdGVkIGluZm9ybWF0aW5vIHRvXHJcbiAqIHRoZSBET00gdXNpbmcgdGhlIE1pbWJsIHNjaGVkdWxpbmcgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuY2xhc3MgU3R5bGVTY2hlZHVsZXIgaW1wbGVtZW50cyBJU2NoZWR1bGVyXHJcbntcclxuICAgIC8vIENhbGxiYWNrIHRvIGNhbGwgdG8gd3JpdGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG5cdHByaXZhdGUgZG9ET01VcGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggdGhpcy5vblVwZGF0ZSwgZmFsc2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgdGltZW91dCBleHBpcmVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG9ET01VcGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIHN0eWxlIHNjaGVkdWxlciB1c2VkIGJ5IE1pbWJsIHRvIHNjaGVkdWxlIHdyaXRpbmcgc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVNaW1ibFN0eWxlU2NoZWR1bGVyKCk6IG51bWJlclxyXG57XHJcbiAgICBsZXQgc2NoZWR1bGVyVHlwZSA9IHJlZ2lzdGVyU2NoZWR1bGVyKCBuZXcgU3R5bGVTY2hlZHVsZXIoKSk7XHJcbiAgICBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIG1pbS5JVGV4dFZOXHJcbntcclxuXHQvLyBUZXh0IGZvciBhIHNpbXBsZSB0ZXh0IG5vZGUuXHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcblx0Ly8gVGV4dCBET00gbm9kZVxyXG5cdHB1YmxpYyB0ZXh0Tm9kZTogVGV4dDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLlRleHQ7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiI3RleHRcIjsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy50ZXh0Tm9kZTsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIHN1Yi1ub2Rlc1xyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCB0aGlzLnRleHQgIT09IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZS5ub2RlVmFsdWUgPSB0aGlzLnRleHQgPSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0O1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOIGludGVyZmFjZSBkZWZpbmVzIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBhcmUgb3B0aW9uYWxseSBpbXBsZW1lbnRlZCBieSBhbGxcclxuICogdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVk4gZXh0ZW5kcyBtaW0uSVZOb2RlXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cmVhZG9ubHkgc3RhdHNDYXRlZ29yeTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBtaW0uVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0b3duRE4/OiBETjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0bGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRpbml0KCBwYXJlbnQ6IFZOLCBjcmVhdG9yOiBtaW0uSUNvbXBvbmVudCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHRlcm0oKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vXHJcblx0Ly8gTGlmZSBjeWNsZSBtZXRob2RzXHJcblx0Ly9cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhhdCBtZWFucyB0aGUgbm9kZVxyXG5cdC8vIG5ldmVyIGhhcyBjaGlsZHJlbiAtIGZvciBleGFtcGxlIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlbmRlcj8oKTogYW55O1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0ZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZCBvbmx5IG9uIG5vZGVzXHJcblx0Ly8gdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IHJlbGVhc2UgdGhlIGludGVybmFsbHkgaGVsZCByZWZlcmVuY2VcclxuXHQvLyB0byB0aGUgRE9NIG5vZGUgLSB0aGUgYWN0dWFsIHJlbW92YWwgb2YgdGhlIG5vZGUgZnJvbSBET00gaXMgZG9uZSBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBJZiB0aGlzIG1ldGhvZCBpc1xyXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCB0aGUgdXBkYXRlIGlzIGNvbnNpZGVyZWQgcG9zc2libGUgLSBlLmcuIGZvciB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRpc1VwZGF0ZVBvc3NpYmxlPyggbmV3Vk46IFZOKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRjb21taXRVcGRhdGU/KCBuZXdWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCB0aGUgbm9kZVxyXG5cdC8vIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cmVhZG9ubHkgc3VwcG9ydHNFcnJvckhhbmRsaW5nPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyBwcmVwYXJlVXBkYXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTlVwZGF0ZURpc3Bcclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvdWxkQ29tbWl0ID0gc2hvdWxkQ29tbWl0O1xyXG5cdFx0dGhpcy5zaG91bGRSZW5kZXIgPSBzaG91bGRSZW5kZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCBmYWxzZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3RvY2tWYWx1ZSggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNob3VsZENvbW1pdFxyXG5cdFx0XHQ/IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLkRvQ29tbWl0Tm9SZW5kZXJcclxuXHRcdFx0OiBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdE5vUmVuZGVyO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgRE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtyZXF1ZXN0Tm9kZVVwZGF0ZSwgc2NoZWR1bGVGdW5jQ2FsbCwgd3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi9SZWNvbmNpbGVyXCJcclxuaW1wb3J0IHtub3RpZnlTZXJ2aWNlUHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkfSBmcm9tIFwiLi9QdWJTdWJcIlxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICBpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcbi8vLyAjaWYgREVCVUdcclxuICAgIGxldCBnX25leHRWTkRlYnVnSUQgPSAxO1xyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgdHlwZTogbWltLlZOVHlwZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk5CYXNlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cHVibGljIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuXHJcblx0cHVibGljIGFuY2hvckROOiBETjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuXHJcblx0cHVibGljIG5leHQ6IFZOQmFzZTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwdWJsaWMgcHJldjogVk5CYXNlO1xyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2RlcyAtIGJvdGgga2V5ZWQgYW5kIHVua2V5ZWQgLSBkZWZpbmVkIG9ubHkgaWYgdGhlcmUgYXJlIHNvbWUgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdWJOb2RlczogVk5CYXNlW107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRwdWJsaWMgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IHsgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpOyB9KTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5kZXB0aCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBtb3VudGVkICovXHJcblx0cHVibGljIGdldCBpc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYW5jaG9yRE47IH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHR7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBmYWxzZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogbWltLlJlZlByb3BUeXBlLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRtaW0uc2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRtaW0uc2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIG1pbS5Db21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgbWltLkNvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0lEID0gZ19uZXh0Vk5EZWJ1Z0lEKys7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIERlZmF1bHQgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB1c2VkIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHB1Ymxpc2hlcyB0aGVcclxuXHQvLyBzZXJ2aWNlXHJcblx0ZGVmYXVsdFNlcnZpY2U6IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBub2RlIGNhbiBzdWJzY3JpYmUgdG8gYSBzZXJ2aWNlIHRoYXQgaXQgaW1wbGVtZW50cyBpdHNlbGYuIFRoaXNcclxuXHQvLyBpcyB1c2VmdWwgaW4gY2FzZSB3aGVyZSBhIHNlcnZpY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhIGNvbXBvbmVudCBjYW4gY2hhaW4gdG8gYSBzZXJ2aWNlXHJcblx0Ly8gaW1wbGVtZW50ZWQgYnkgYW4gYW5jZXN0b3IgY29tcG9uZW50LlxyXG5cdHVzZVNlbGY6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCI7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7U3R5bGVzZXQsIHNldEVsZW1lbnRTdHlsZSwgU2NoZWR1bGVyVHlwZSwgZGlmZlN0eWxlc2V0cywgU3RyaW5nU3R5bGVzZXQsIHNldEVsZW1lbnRTdHJpbmdTdHlsZX0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCI7XHJcbi8vLyAjZW5kaWZcclxuOyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0c2V0RWxlbWVudFN0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHByb3BWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IFN0eWxlc2V0LCBuZXdQcm9wVmFsOiBTdHlsZXNldCk6IGFueVxyXG57XHJcblx0bGV0IHJlcyA9IGRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgdXBkYXRlVmFsLCBTY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlIGxpc3RlbmVycyBjYW4gYmVcclxuICogYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0YXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0ZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUV2ZW50U2xvdE93bmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHNsb3QgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY2FsbGVyIHdob1xyXG4gKiBjcmVhdGVkIGl0LiBUaGUgb3duZXIgY2FuIGZpcmUgZXZlbnRzIGFuZCBjbGVhciBldmVudCBsaXN0ZW5lcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3RPd25lcjxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBleHRlbmRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90IGNsYXNzIGRlZmluZXMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycyBhcyBtZW1iZXJzIG9mIGNsYXNzZXMgd2l0aG91dCB0aGVcclxuICogbmVlZCBmb3IgdGhlIGNsYXNzZXMgdG8gZGVyaXZlIGZyb20gRXZlbnRUYXJnZXQgYW5kIHVzZSBzdHJpbmcgbmFtZXMgZm9yIGV2ZW50cy4gTXVsdGlwbGVcclxuICogbGlzdGVuZXJzIGNhbiBiZSBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyAhPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMuZGVsZXRlKCBsaXN0ZW5lcik7XHJcblx0XHRcdGlmICh0aGlzLmxpc3RlbmVycy5zaXplID09PSAwKVxyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnRlcmZhY2UgYW5kIGNsYXNzIGZvciBzaW1wbGUgZXZlbnRzIGFjY2VwdGluZyBubyBwYXJhbWV0ZXJzLlxyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVFdmVudFNsb3QgZXh0ZW5kcyBJRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgRXZlbnRTbG90PCgpPT52b2lkPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11bHRpRXZlbnRTbG90IHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlIFRcclxuICogaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdDxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3Q8VFtQXT47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdE93bmVyIHR5cGUgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBmb3IgZWFjaCBwcm9wZXJ0eSBmcm9tIHRoZSB0ZW1wbGF0ZSB0eXBlXHJcbiAqIFQgaGFzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHksIHdoaWNoIGlzIGFuIGV2ZW50IHNsb3QgZm9yIGEgZnVuY3Rpb24sIHdob3NlIHNpZ25hdHVyZSBpcyB0aGUgc2FtZVxyXG4gKiBhcyBvZiB0aGUgb3JpZ2luYWwgcHJvcGVydHkuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgdHlwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPSBcclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiB0aGVuIHRoZSBNdWx0aUV2ZW50U2xvdE93bmVyPElNeUV2ZW50cz4gdHlwZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBzaGFwZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUV2ZW50U2xvdE93bmVyPFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PiA9XHJcbntcclxuXHRyZWFkb25seSBbUCBpbiBrZXlvZiBUXTogSUV2ZW50U2xvdE93bmVyPFRbUF0+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHdpbGwgaGF2ZSBldmVudCBzbG90cyBmb3IgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgdGVtcGxhdGUgdHlwZSBULiBUaGVcclxuICogY2FsbGVyIHdpbGwgYmUgdGhlIG93bmVyIG9mIHRoZSBldmVudCBzbG90czsgdGhhdCBpcywgaXQgd2lsbCBiZSBhYmxlIHRvIGZpcmUgZXZlbnRzIGFuZFxyXG4gKiBjbGVhciBhbGwgbGlzdGVuZXJzIHdoZW4gbmVjZXNzYXJ5LiBUaGlzIGFsbG93cyB0aGUgZm9sbG93aW5nIGNvZGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIFxyXG4gKiBpbnRlcmZhY2UgSU15Q2xhc3NcclxuICoge1xyXG4gKiAgICAgZXZlbnRzOiBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+O1xyXG4gKiAgICAgZG9Tb21ldGhpbmcoKTogdm9pZDtcclxuICogfVxyXG4gKiBcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqIFxyXG4gKiAgICAgcHVibGljIGRvU29tZXRoaW5nKCk6IHZvaWQgeyB0aGlzLl9ldmVudHMuY2hhbmdlLmZpcmUoMSk7fVxyXG4gKiB9XHJcbiAqIFxyXG4gKiBsZXQgb2JqOiBJTXlDbGFzcyA9IG5ldyBNeUNsYXNzKCk7XHJcbiAqIG9iai5ldmVudHMuY2hhbmdlLmFkZCggKG46IG51bWJlcikgPT4gY29uc29sZS5sb2cobikpO1xyXG4gKiBvYmouZG9Tb21ldGhpbmcoKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVsdGlFdmVudFNsb3Q8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogc3RyaW5nLCByZWNlaXZlcjogYW55KTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXNbcHJvcF0gPyB0aGlzW3Byb3BdIDogdGhpc1twcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJEZXB0aCBlbnVtZXJhdGlvbiBkZWZpbmVzIHBvc3NpYmxlIHdheXMgb2YgaG93IHRyaWdnZXJzIGRlYWwgd2l0aCBjb250YWluZXIgZGF0YTtcclxuICogdGhhdCBpcywgb2JqZWN0cywgYXJyYXlzLCBtYXBzIGFuZCBzZXRzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gKiB0aGlzIGVudW1lcmF0aW9uIGlzIGlycmVsZXZhbnQuXHJcbiAqL1xyXG5lbnVtIFRyaWdnZXJEZXB0aFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgY2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFyZSBoYW5kbGVkLiBBY3Rpb25zIG9mIGFkZGluZywgcmVtb3ZpbmcgYW5kIG1vZGlmeWluZ1xyXG4gICAgICogaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBhcmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVmFsdWUgPSAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiB0aGUgaW1tZWRpYXRlIGNvbnRhaW5lciBpdGVtcyBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZlxyXG4gICAgICogYWRkaW5nIGFuZCByZW1vdmluZyBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGNhdXNlIGNoYW5nZSB0byBiZSB0cmlnZ2VycmVkOyBob3dldmVyIGFjdGlvbnNcclxuICAgICAqIG9mIG1vZGlmeWluZyBpdGVtcyB0aGVtc2VsZnMgYXJlIGlnbm9yZWQuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIFNoYWxsb3cgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiBpdGVtcyBvbiBhbGwgbGV2ZWxzIGFyZSBoYW5kbGVkLiBJdGVtcyBhZGRlZCB0byB0aGVcclxuICAgICAqIGNvbnRhaW5lciBhcmUgY29udmVydGVkIHRvIGRlZXAgdHJpZ2dlcnMuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIERlZXAgPSAxMDAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZGVwdGggd2l0aCB0aGUgZ2l2ZW4gaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlnZ2VyPFQgPSBhbnk+KCBkZXB0aDogbnVtYmVyLCB2PzogVCk6IElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgVHJpZ2dlciggZGVwdGggPCAwID8gMCA6IGRlcHRoLCB2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBrZWVwcyBhIHZhbHVlIGFuZCBub3RpZmllcyBhbGwgYXR0YWNoZWQgd2F0Y2hlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyPFQgPSBhbnk+IGltcGxlbWVudHMgSVRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGRlcHRoPzogbnVtYmVyLCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCggdjogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh2ID09PSB0aGlzLnYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gcmVhZFxyXG4gICAgcHVibGljIG5vdGlmeVJlYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBtYW5hZ2VyIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkLiBXZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlclxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgYXR0YWNoZWQgdG8gb3VyIHRyaWdnZXI7XHJcbiAgICBwdWJsaWMgbm90aWZ5Q2hhbmdlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFZhbHVlIGJlaW5nIGdldCBhbmQgc2V0XHJcbiAgICBwcml2YXRlIHY6IFQ7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHdhdGNoaW5nIG92ZXIgdGhpcyB0cmlnZ2VyJ3MgdmFsdWUuIFRoaXMgbWVtYmVyIHNlcnZlcyBhcyBhIHN0b3JhZ2UgaW5zdGVhZFxyXG4gICAgLy8gb2YgaGF2aW5nIHRoZSBtYW5hZ2VyIHRvIG1hcCBvZiB0cmlnZ2VycyB0byB0aGUgc2V0IG9mIHdhdGNoZXJzLlxyXG4gICAgcHVibGljIHdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXYXRjaGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVdhdGNoZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcblxyXG4gICAgLy8gLyoqIFNldHMgYSByZXNwb25kZXIgZnVuY3Rpb24gKi9cclxuICAgIC8vIHNldFJlc3BvbmRlciggcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIHJlc3BvbmRlclRoaXM/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGtlZXAgYSB3YXRjaGVyIG9iamVjdCBhdHRhY2hlZCB0byB0aGUgd2F0Y2hlciBmdW5jdGlvbi5cclxuICovXHJcbmxldCBzeW1XYXRjaGVyID0gU3ltYm9sKCBcInN5bVdhdGNoZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2F0Y2hlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gcmVndWxhciBmdW5jdGlvbi4gV2hlbiB0aGVcclxuICogd2F0Y2hlciBmdW5jdGlvbiBpcyBpbnZva2VkIGl0IGludm9rZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCBpdCBub3RpY2VzIGFsbCB0cmlnZ2VyIG9iamVjdHNcclxuICogdGhhdCB3ZXJlIHJlYWQgZHVyaW5nIGl0cyBleGVjdXRpb24uIFdoZW4gYW55IG9mIHRoZXNlIHRyaWdnZXIgb2JqZWN0cyBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkLCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSB3YXRjaGVkXHJcbiAqIEBwYXJhbSByZXNwb25kZXIgRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHZhbHVlcyBvZiB0aGUgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkIGR1cmluZ1xyXG4gKiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24ncyBsYXN0IGV4ZWN1dGlvbiBjaGFuZ2UuXHJcbiAqIEBwYXJhbSBmdW5jVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHJlc3BvbmRlclRoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYyxcclxuICAgIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KTogSVdhdGNoZXI8VD5cclxue1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hlckZ1bmMoLi4uYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlcjogV2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3YXMgbm90IHN1cHBsaWVkIGJ1dCBub3cgd2hlbiB0aGVcclxuICAgICAgICAvLyB3YXRjaGVyIGV4ZWN1dGVzLCBcInRoaXNcIiBpcyBkZWZpbmVkLCB3ZSByZW1lbWJlciBpdC5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leGVjdXRlKCB0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIHRoZSB3YXRjaGVyIG9iamVjdCBpbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZiB1c2luZyBhIHN5bWJvbC5cclxuICAgIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdID0gbmV3IFdhdGNoZXIoIGZ1bmMsIHJlc3BvbmRlciwgZnVuY1RoaXMsIHJlc3BvbmRlclRoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgICh3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgd2F0Y2hlciAmJiB3YXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhdGNoZXIgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWRcclxuICogZHVyaW5nIGEgZnVuY3Rpb24gZXhlY3V0aW9uLiBXaGVuIHRoZSB0cmlnZ2VyIG9iamVjdHMgYXJlIHJlYWQsIHRoZXkgYXJlIHJlbWVtYmVyZWQgYnkgdGhlXHJcbiAqIFdhdGNoZXIgb2JqZWN0LiBXaGVuZXZlciBhIHZhbHVlIGlzIGNoYW5nZWQgaW4gYW55IG9mIHRoZXNlIHRyaWdnZXJzLCB0aGUgd2F0Y2hlciBvYmplY3QgaXNcclxuICogbm90aWZpZWQgYW5kIGNhbGxzIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSByZXNwb25kZXI7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICAvLyBpZiByZXNwb25kZXIgXCJ0aGlzXCIgaXMgbm90IGRlZmluZWQgdXNlIHRoZSBvbmUgZm9yIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IHJlc3BvbmRlclRoaXMgPyByZXNwb25kZXJUaGlzIDogZnVuY1RoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2hpbGUgdXBkYXRpbmcgdGhlIHNldCBvZiBhdHRhY2hlZCB0cmlnZ2Vycy4gVGhlIFwiZnVuY1RoaXNcIlxyXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBcInRoaXNcIiB1bmRlciB3aGljaCB0aGUgaW50ZXJuYWwgd2F0Y2hlciBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQuIEl0XHJcbiAgICAgKiB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBcInRoaXNcIiB0byBhcHBseSB3aGVuIGludm9raW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpZiBpdCB3YXNuJ3RcclxuICAgICAqIHNldCB5ZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgd2F0Y2hlciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyVGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGN1cnJlbnQgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbGwgb3VyIHdhdGNoZXIgYXQgdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICBnX21hbmFnZXIucHVzaFdhdGNoZXIoIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciB3YXRjaGVyIGZyb20gdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLnBvcFdhdGNoZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB3YXRjaGVyIHRoYXQgaXQgc2hvdWxkIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi4gVGhpcyBvY2N1cnMgd2hlbiB0aGVyZVxyXG4gICAgLy8gYXJlIHRyaWdnZXJzIHdob3NlIHZhbHVlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgcHVibGljIHJlc3BvbmQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZC4gSXQgY2FuIGhhcHBlbiBpZiBhZnRlciBhbGwgbXV0YXRpb25cclxuICAgICAgICAvLyBzY29wZXMgZXhpdGVkIHRoZSBtYW5hZ2VyIG5vdGlmaWVzIG11bHRpcGxlIHdhdGNoZXJzIGFuZCBvbmUgb2YgdGhlIHdhdGNoZXJzJyByZXNwb25kZXJcclxuICAgICAgICAvLyBkaXNwb3NlcyBvZiBhbm90aGVyIHdhdGNoZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbmRlci5hcHBseSggdGhpcy5yZXNwb25kZXJUaGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgc3RhdGUgb2YgdGhlIHdhdGNoZXIsIHNvIHRoYXQgaXQgaXMgZGV0YWNoZWQgZnJvbSBhbnkgdHJpZ2dlcnMgYW5kIGlzIHJlbW92ZWRcclxuICAgICAqIGZyb20gdGhlIG1hbmFnZXIncyBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW4oKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRldGFjaGVzIHRoaXMgd2F0Y2hlciBmcm9tIGFsbCB0aGUgdHJpZ2dlcnMgYW5kIHRoZSB0cmlnZ2VycyBmcm9tIHRoaXMgd2F0Y2hlci5cclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goIHRyaWdnZXIgPT4gdHJpZ2dlci53YXRjaGVycy5kZWxldGUoIHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGFzayB0aGUgbWFuYWdlciB0byBmb3JnZXQgYWJvdXQgdGhpcyB3YXRjaGVyIGlmIGl0IGlzIGN1cnJlbnRseSBpbiB0ZSBkZWZlcnJlZCBzZXRcclxuICAgICAgICBnX21hbmFnZXIucmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3YXRjaGVkOyB0aGF0IGlzLCBkdXJpbmcgd2hpY2ggd2Ugc2hvdWxkIGxpc3RlbiB0byB0cmlnZ2VycyBiZWluZyByZWFkLCBzb1xyXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVtZW1iZXIgdGhlbSBhbmQgbGF0ZXIgcmVzcG9uZCB3aGVuIHRoZXkgbm90aWZ5IHRoYXQgdGhlaXIgdmFsdWVzIGhhdmUgYmVlblxyXG4gICAgLy8gY2hhbmdlZC5cclxuICAgIHByaXZhdGUgZnVuYzogVDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHRoZSB2YWx1ZSBvZiBvbmUgb2YgdGhlIHRyaWdnZXJzIGNoYW5nZXNcclxuICAgIHByaXZhdGUgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmM7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHJlc3BvbmRlciBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlclRoaXM6IGFueTtcclxuXHJcbiAgICAvLyBTZXQgb2YgdHJpZ2dlcnMgY3VycmVudGx5IGJlaW5nIHdhdGNoZWQgYnkgdGhpcyB3YXRjaGVyLiBUaGlzIG1lbWViZXIgaXMgdXNlZCBieSB0aGVcclxuICAgIC8vIG1hbmFnZXIuIEl0IGlzIGVzc2VudGlhbGx5IGEgc3RvcmFnZSwgd2hpY2ggaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBtYW5hZ2VyIGhhdmluZyBhXHJcbiAgICAvLyBtYXAgb2Ygd2F0Y2hlcnMgdG8gdGhlIHNldHMgb2YgdHJpZ2dlcnMuIFRoZSBwdXJwb3NlIG9mIGtub3dpbmcgd2hhdCB0cmlnZ2VycyBhcmUgdXNlZFxyXG4gICAgLy8gYnkgd2hhdCB3YXRjaGVyIGlzIHRvIHJlbW92ZSB0aGUgd2F0Y2hlciBmcm9tIGFsbCB0aGVzZSB0cmlnZ2VycyBiZWZvcmUgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICAgIHB1YmxpYyB0cmlnZ2VycyA9IG5ldyBTZXQ8VHJpZ2dlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWFuYWdlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIGZ1bmN0aW9uYWxpdHlcclxuICogb2YgdGhlIHRyaWdnZXItd2F0Y2hlciBtZWNoYW5pc20uIEl0IGluY2x1ZGVzIGEgc3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuICogdGhlaXIgZnVuY3Rpb25zIGFuZCB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIHRvIGJlIHJlYWQuIFdoZW4gYSB0cmlnZ2VyIG9iamVjdCBpcyBiZWluZ1xyXG4gKiByZWFkICh0aGF0IGlzIGl0cyBnZXQoKSBtZXRob2QgaXMgY2FsbGVkKSwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIG5vdGlmaWVkLCBiZWNhdXNlXHJcbiAqIHRoZXkgYWxsIGRlcGVuZCBvbiB0aGUgdHJpZ2dlciBvYmplY3QncyB2YWx1ZSBmb3IgdGhlaXIgZnVuY3Rpb25hbGl0eS5cclxuICogXHJcbiAqIEl0IGFsc28gbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50IG9mIG11dGF0aW9uIHNjb3BlcyBhbmQgaGFuZGxlcyBub3RpZnlpbmcgd2F0Y2hlcnMgb2ZcclxuICogbXV0YXRpb25zIG9ubHkgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBoYXMgZXhpdGVkLiBUaGUgdHJpZ2dlcnMgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVyc1xyXG4gKiBkaXJlY3RseTsgaW5zdGVhZCwgdGhleSBub3RpZnkgdGhlIG1hbmFnZXIsIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBhbmQgbm90aWZpZXMgYWxsXHJcbiAqIHRoZSB3YXRjaGVycyBvbmNlIG91dCBvZiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIFRyaWdnZXJXYXRjaGVyTWFuYWdlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyB0aGUgZ2l2ZW4gd2F0Y2hlciBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnB1c2goIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgY3VycmVudGx5IG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BXYXRjaGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGZyb20gdGhlIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5kZWxldGUoIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5wYWlyZWQgY2FsbCB0byBleGl0TXV0YXRpb25TY29wZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKC0tdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0aGlzLmRlZmVycmVkV2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21wdXRlZCB0cmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXB1dGVkVHJpZ2dlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIElUcmlnZ2VyPFQ+LCBJRGlzcG9zZXJcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgY29tcHV0ZWQgdHJpZ2dlciBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgY2FsY3VsYXRlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIHdpdGggYW5cclxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4oIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBUcmlnZ2VyRGVwdGguVmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIHRoZSB3YXRjaGVyIHVudGlsIHRoZSBnZXQgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIHdhdGNoZXIgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMucmVzcG9uZGVyLCB0aGlzLmZ1bmNUaGlzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gb3VyIHdhdGNoZXIgaXMgbm90aWZpZWQgb2YgY2hhbmdlcyBpbiBpdHMgdHJpZ2dlciB2YWx1ZXMuIFdlXHJcbiAgICAgKiByZXNwb25kIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiAodGhyb3VnaCB0aGUgd2F0Y2hlcikgYW5kIHNldHRpbmcgaXRzIHJldHVybiB2YWx1ZSBhc1xyXG4gICAgICogb3VyIG5ldyB2YWx1ZS4gVGhpcyBjYW4gdHJpZ2dlciBjaGFuZ2VzIGluIHdhdGNoZXJzIHRoYXQgYXJlIHVzaW5nIG91ciB2YWx1ZS4gTm90ZSB0aGF0XHJcbiAgICAgKiB3ZSBvbmx5IGludm9rZSBvdXIgd2F0Y2hlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciB0aGF0IHdhdGNoZXMgb3VyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB3ZSB3aWxsIGJlIHdhdGNoaW5nXHJcbiAgICBwcml2YXRlIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPjtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBvdmVyIG91ciBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI8Tm9uZVR5cGVGdW5jPFQ+PjtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgdmFsdWUgIGtlcHQgYnkgdGhlIHRyaWdnZXIgbWlnaHQgbm90IHJlZmxlY3QgdGhlIGFjdHVhbCBjb21wdXRlZFxyXG4gICAgLy8gdmFsdWUuIFRoaXMgZmxhZyBpcyB0cnVlIHVuZGVyIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcclxuICAgIC8vIDEuIFJpZ2h0IGFmdGVyIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZC4gV2UgZG9uJ3QgZXZlbiBjcmVhdGUgdGhlIHdhdGNoZXIgYmVjYXVzZSB3ZVxyXG4gICAgLy8gICAgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAvLyAyLiBXaGVuIHRoZSByZXNwb25kZXIgaGFzIGJlZW4gaW52b2tlZCwgYnV0IG91ciB0cmlnZ2VyIGRpZG4ndCBoYXZlIGFueSB3YXRjaGVyLiBBZ2Fpbiwgd2VcclxuICAgIC8vICAgIHdpbGwgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICBwcml2YXRlIGlzU3RhbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE11dGF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTXV0YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgbXV0YXRvciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIG11dGF0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltTXV0YXRvciA9IFN5bWJvbCggXCJzeW1NdXRhdG9yXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG11dGF0b3IgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXNcclxuICogdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2l0aGluIGEgbXV0YXRpb24gc2NvcGUuIFdhdGNoZXJzIGZvciB0cmlnZ2VycyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQgZHVyaW5nIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBub3Qgbm90aWZpZWQgaW1tZWRpYXRlbHkuIEluc3RlYWQsIHRoZSB3YXRjaGVyc1xyXG4gKiBhcmUgXCJkZWZlcnJlZFwiIGFuZCB3aWxsIGJlIG5vdGlmaWVkIG9ubHkgb25jZSBhZnRlciB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVGhpcyBjYW4gYmVcclxuICogdXNlZnVsIHNpbmNlIHVzdWFsbHkgd2F0Y2hlcnMgZGVwZW5kIG9uIG1hbnkgdHJpZ2dlcnMgYW5kIHdlIGRvbid0IHdhbnQgdGhlIHdhdGNoZXJzIGJlaW5nXHJcbiAqIG5vdGlmaWVkIG1hbnkgdGltZSBidXQgcmF0aGVyIG9ubHkgb25jZSBhZnRlciBhbGwgdGhlIGNoYW5nZXMgaGF2ZSBiZWVuIGRvbmUuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGFyb3VuZCB3aGljaCB0byBlc3RhYmxpc2ggYSBtdXRhdGlvbiBzY29wZS4gSWYgdGhpcyBpcyBhIGNsYXNzIG1ldGhvZCxcclxuICogdGhlbiBlaXRoZXIgcHJvdmlkZSB0aGUgZnVuY1RoaXMgcGFyYW1ldGVyIG9yIGJpbmQgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IGluLiBOb3RlXHJcbiAqIHRoYXQgYXJyb3cgZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGJvdW5kLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgVGhlIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyBhbiB1bmJvdW5kY2xhc3MgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSk6IElNdXRhdG9yPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIG11dGF0b3JGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG11dGF0b3I6IFdhdGNoZXIgPSBtdXRhdG9yRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIG11dGF0b3IuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbXV0YXRvciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXSA9IG5ldyBNdXRhdG9yKCBmdW5jLCBmdW5jVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKG11dGF0b3JGdW5jIGFzIElNdXRhdG9yKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yID0gbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICBtdXRhdG9yICYmIG11dGF0b3IuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIG11dGF0b3JGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXV0YXRvciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgZXhlY3V0aW5nIGEgd3JhcHBlZCBmdW5jdGlvbiB1bmRlciBhXHJcbiAqIG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTXV0YXRvcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGluIGEgbXV0YXRpb24gc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgbXV0YXRvciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICB0cnkgeyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTsgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2VyaXppbmcgY29udGFpbmVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGdpdmVuIHRyaWdnZXIgZGVwdGggYW5kIG9uIHRoZSB2YWx1ZSB0eXBlLCBlaXRoZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBpZlxyXG4gKiBpdCBpcyBhIGNvbnRhaW5lciAob2JqZWN0LCBhcnJheSwgbWFwIG9yIHNldCksIHJldHVybnMgYSBwcm94eSB0byB0aGUgdmFsdWUgdGhhdCBrbm93cyB0b1xyXG4gKiBub3RpZnkgcmVhZCBhbmQgY2hhbmdlIHdoZW4gaXRzIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlIGludm9rZWQuXHJcbiAqIEBwYXJhbSB2IFZhbHVlIHRvIGNvbnZlcnQgaWYgbmVjZXNzYXJ5XHJcbiAqIEBwYXJhbSB0cmlnZ2VyIFRyaWdnZXIgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gcmVhZCBvciBjaGFuZ2UgZXZlbnRzIG9jY3VyIGluIHRoZSBjb252ZXJ0ZWRcclxuICogdmFsdWVzXHJcbiAqIEBwYXJhbSBkZXB0aCBUaGUgZGVwdGggb24gdGhlIGxldmVsIChzdGFydGluZyBmcm9tIHRoZSB0cmlnZ2VyKXRoYXQgY2FsbGVkIHRoaXMgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIDAsIG5vIGNvbnZlcnNpb24gb2NjdXJzIGFuZCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQgYXMgaXMuIFdoZW4gdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBjYWxsZWQgZnJvbSB0aGUgdHJpZ2dlciwgdGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVuZGVmaW5lZDogaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIGFzc2lnbiB0aGVcclxuICogZGVwdGggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS4gQXJyYXlzLCBtYXBzIGFuZCBzZXRzIGdldCBkZXB0aHMgb2YgU2hhbGxvdygxKSxcclxuICogbWVhbmluZyB0aGF0IG9wZXJhdGlvbnMgdGhhdCBhZGQgb3IgcmVtb3ZlIGl0ZW1zIHdpbGwgdHJpZ2dlciBldmVudHMsIGJ1dCBtb2RpZmljYXRpb25zIHRvIHRoZVxyXG4gKiBpdGVtcyB3aWxsIG5vdC4gT2JqZWN0cyBnZXQgdGhlIGRlcHRoIG9mIERlZXAgKDEwMDApLCB3aGljaCBlc3NlbnRpYWxseSBtZWFucyB0aGF0IGFueSBjaGFuZ2VzXHJcbiAqIHRvIHRoZSBvYmplY3QgcHJvcGVydGllcyBvbiBhbnkgbGV2ZWwgd2lsbCB0cmlnZ2VyIGV2ZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJyaXplPFQgPSBhbnk+KCB2OiBULCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aD86IG51bWJlcik6IFRcclxue1xyXG4gICAgaWYgKCF2IHx8IGRlcHRoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTWFwSGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2IGluc3RhbmNlb2YgU2V0KVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoIHYsIG5ldyBTZXRIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT09IE9iamVjdClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLkRlZXApIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IGhhbmRsZXJzLlxyXG4gKi9cclxuY2xhc3MgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgICAgICBpZiAob2xkVmFsdWUgIT0gdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQoIHRhcmdldCwgcHJvcCwgdHJpZ2dlcnJpemUoIHZhbHVlLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpLCByZWNlaXZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCB0YXJnZXQsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIGF0dHJzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBwcm9wLCBhdHRycyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXMoIHRhcmdldCwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvdG90eXBlT2YoIHRhcmdldDogYW55KTogb2JqZWN0IHwgbnVsbFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFeHRlbnNpYmxlKCB0YXJnZXQ6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSggdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldDogYW55LCBwOiBQcm9wZXJ0eUtleSk6IFByb3BlcnR5RGVzY3JpcHRvciB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQsIHApO1xyXG4gICAgfVxyXG5cclxuICAgIGVudW1lcmF0ZSggdGFyZ2V0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSggUmVmbGVjdC5lbnVtZXJhdGUoIHRhcmdldCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG93bktleXMoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyggdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBUaGUgdHJpZ2dlciBvYmplY3Qgd2hpY2ggc2hvdWxkIHNlbmQgbm90aWZpY2F0aW9ucyB0byBpdHMgd2F0Y2hlcnMgd2hlbiByZWFkcyBvciBjaGFuZ2VzXHJcbiAgICAvLyBvY2N1ciBcclxuICAgIHByb3RlY3RlZCB0cmlnZ2VyOiBUcmlnZ2VyO1xyXG5cclxuICAgIC8vIE51bWJlciBpbmRpY2F0aW5nIHRvIHdoYXQgbGV2ZWwgdGhlIGl0ZW1zIG9mIGNvbnRhaW5lciB0eXBlcyBzaG91bGQgYmUgdHJpZ2dlcnJpemVkLlxyXG4gICAgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEhhbmRsZXIgZm9yIGFycmF5cy5cclxuLy8gICovXHJcbi8vIGNsYXNzIEFycmF5SGFuZGxlciBleHRlbmRzIE5vblNsb3RDb250YWluZXJIYW5kbGVyXHJcbi8vIHtcclxuLy8gICAgIGdldCggdGFyZ2V0OiBBcnJheTxhbnk+LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbi8vICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogSGFuZGxlciBmb3Igb24gcGxhaW4gb2JqZWN0cy5cclxuLy8gICovXHJcbi8vIGNsYXNzIE9iamVjdEhhbmRsZXIgZXh0ZW5kcyBOb25TbG90Q29udGFpbmVySGFuZGxlclxyXG4vLyB7XHJcbi8vICAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHNoYWxsb3cgTWFwL1NldCBoYW5kbGVycy4gTWV0aG9kcyB3aG9zZSBuYW1lcyB3ZXJlIHN1cHBsaWVkIGluIHRoZSBjb25zdHJ1Y3RvcixcclxuICogbm90aWZ5IGNoYW5nZTsgYWxsIG90aGVyIG1ldGhvZHMgbm90aWZ5IHJlYWQuXHJcbiAqIFxyXG4gKiBGb3IgTWFwIGFuZCBTZXQgaW4gb3JkZXIgdG8gYmUgcHJveGllZCwgdGhlIG1ldGhvZHMgcmV0dXJuZWQgZnJvbSBnZXQoKSBtdXN0IGJlXHJcbiAqIGJvdW5kIHRvIHRoZSB0YXJnZXQuIFNlZSBodHRwczovL2phdmFzY3JpcHQuaW5mby9wcm94eSNidWlsdC1pbi1vYmplY3RzLWludGVybmFsLXNsb3RzLlxyXG4gKi9cclxuY2xhc3MgU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgbXV0YXRvck1ldGhvZE5hbWVzOiBTZXQ8UHJvcGVydHlLZXk+LCBkZXB0aDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICAgICAgdGhpcy5tdXRhdG9yTWV0aG9kTmFtZXMgPSBtdXRhdG9yTWV0aG9kTmFtZXM7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHJpZXZlIGNvbnRhaW5lciBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzLiBXZSBhbHdheXMgbm90aWZ5IHJlYWQgYW5kIHdlIHdyYXAgbWV0aG9kcyBpblxyXG4gICAgLy8gZnVuY3Rpb25zIHRoYXQgd2hlbiBjYWxsZWQgd2lsbCBub3RpZnkgZWl0aGVyIHJlYWQgb3IgY2hhbmdlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZVxyXG4gICAgLy8gbWV0aG9kIGlzIGEgbXV0YXRvci5cclxuICAgIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuXHJcbiAgICAgICAgLy8gaW4gdGhpcyBjb250ZXh0IFwidGhpc1wiIGlzIHRoZSBoYW5kbGVyOyBob3dldmVyLCB3aGVuIHRoZSBtZXRob2RzIHdlIHJldHVybiBhcmUgY2FsbGVkXHJcbiAgICAgICAgLy8gdGhlIFwidGhpc1wiIHdpbGwgYmUgdGhlIFByb3h5IG9iamVjdC4gVGhlcmVmb3JlLCB3ZSB3YW50IHRoZXNlIG1ldGhvZHMgdG8gY2FwdHVyZSBhbmRcclxuICAgICAgICAvLyB1c2UgdGhlIGhhbmRsZXIgb2JqZWN0LlxyXG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGlzIG1ldGhvZCBpcyBhbHJlYWR5IGluIG91ciBpbnRlcm5hbCBtYXBcclxuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy53cmFwcGVkTWV0aG9kcy5nZXQoIHByb3ApO1xyXG4gICAgICAgIGlmICghbWV0aG9kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSB0YXJnZXRcclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSB0YXJnZXRbcHJvcF07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcFZhbCAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BWYWw7XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIHRoZSBvcmlnaW5hbCBtZXRob2QgdG8gdGhlIHRhcmdldCBvYmplY3RcclxuICAgICAgICAgICAgbGV0IG9yZ0JvdW5kTWV0aG9kID0gcHJvcFZhbC5iaW5kKCB0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubXV0YXRvck1ldGhvZE5hbWVzLmhhcyhwcm9wKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIG11dGF0b3IgbWV0aG9kcyB3ZSBjcmVhdGUgYW5kIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBpbnZva2VzIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlciBzcGVjaWZpYyBmdW5jdGlvbmFsaXR5LCB3aGljaCBrbm93cyBhYm91dCB0aGUgc3RydWN0dXJlIG9mIHRoZSBhcmd1bWVudHNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCB3aWxsIGNyZWF0ZSBwcm94aWVzIGZvciB0aGUgYXBwcm9wcmlhdGUgb2JqZWN0cyBpZiBuZWVkZWQuIFRoaXMgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBhbHNvIGluZGljYXRlIHdoZXRoZXIgYW4gYWN0dWFsIGNoYW5nZSBvY2N1cnMgc28gdGhhdCB3ZSBjYW4gbm90aWZ5IGFib3V0IGl0LlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZnVuY3Rpb24oKTogYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV0OiBbYW55LCBib29sZWFuXSA9IGhhbmRsZXIuY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldCwgcHJvcCwgb3JnQm91bmRNZXRob2QsIC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldFsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldFswXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gb3JnQm91bmRNZXRob2QoIC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vbi1tdXRhdG9yIG1ldGhvZHMsIHdlIG5vdGlmeSB0aGUgcmVhZCBhbmQgaW52b2tlIHRoZSBvcmlnaW5hbCBtZXRob2QuXHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmdW5jdGlvbigpOiBhbnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yZ0JvdW5kTWV0aG9kKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy53cmFwcGVkTWV0aG9kcy5zZXQoIHByb3AsIG1ldGhvZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHRoYXQgbXVzdCBiZSBvdmVycmlkZGVuIGluIHRoZSBkZXJpdmVkIGNsYXNzZXMgYW5kIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciBjYWxsaW5nXHJcbiAgICAgKiBhIG11dXRhdG9yIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcGFyYW0gb3JnTWV0aG9kIFxyXG4gICAgICogQHBhcmFtIGFyZ3MgVHdvIGVsZW1lbnQgdHVwbGUgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHJldHVybiB2YWx1ZSBhbmQgdGhlIHNlY29uZFxyXG4gICAgICogZWxlbWVudCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250YWluZXIgaGFzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0OiBhbnksIG5hbWU6IFByb3BlcnR5S2V5LCBvcmdNZXRob2Q6IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSk6IFthbnksIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsZmFsc2VdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gVGhlIHRyaWdnZXIgb2JqZWN0IHdoaWNoIHNob3VsZCBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gaXRzIHdhdGNoZXJzIHdoZW4gcmVhZHMgb3IgY2hhbmdlc1xyXG4gICAgLy8gb2NjdXIgXHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogVHJpZ2dlcjtcclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFNldCBvZiBtZXRob2QgbmFtZXMsIHdoaWNoIG11dGF0ZSB0aGUgY29udGFpZXIuIEFsbCBvdGhlciBtZXRob2RzIG9ubHkgcmVhZCBmcm9tIGl0LlxyXG4gICAgcHJpdmF0ZSBtdXRhdG9yTWV0aG9kTmFtZXM6IFNldDxQcm9wZXJ0eUtleT47XHJcblxyXG4gICAgLy8gVGhpcyBtYXAga2VlcHMgYWxyZWFkeSB3cmFwcGVkIG1ldGhvZHMgc28gdGhhdCB3ZSBkb24ndCBkbyBiaW5kaW5nIG1vcmUgdGhhbiBvbmNlLiBcclxuICAgIHByaXZhdGUgd3JhcHBlZE1ldGhvZHMgPSBuZXcgTWFwPFByb3BlcnR5S2V5LEZ1bmN0aW9uPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBtYXBzLlxyXG4gKi9cclxuY2xhc3MgTWFwSGFuZGxlciBleHRlbmRzIFNsb3RDb250YWluZXJIYW5kbGVyXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIG11dGF0b3JNZXRob2ROYW1lcyA9IG5ldyBTZXQ8UHJvcGVydHlLZXk+KFtcImNsZWFyXCIsIFwiZGVsZXRlXCIsIFwic2V0XCJdKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlciggdHJpZ2dlciwgTWFwSGFuZGxlci5tdXRhdG9yTWV0aG9kTmFtZXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudHMgbWFwLXNwZWNpZmljIG11dGF0b3IgbWV0aG9kcy5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogTWFwPGFueSxhbnk+LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIGlmIChuYW1lID09PSBcImNsZWFyXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGFyZ2V0LnNpemUgPiAwO1xyXG4gICAgICAgICAgICBvcmdNZXRob2QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIGlzQ2hhbmdlZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwic2V0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBbb3JnTWV0aG9kKCBhcmdzWzBdLCB0cmlnZ2Vycml6ZSggYXJnc1sxXSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSksIHRydWVdO1xyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiZGVsZXRlXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVsZXRlZCA9IG9yZ01ldGhvZCggYXJnc1swXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbZGVsZXRlZCwgZGVsZXRlZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBzZXRzLlxyXG4gKi9cclxuY2xhc3MgU2V0SGFuZGxlciBleHRlbmRzIFNsb3RDb250YWluZXJIYW5kbGVyXHJcbntcclxuICAgIHByaXZhdGUgc3RhdGljIG11dGF0b3JNZXRob2ROYW1lcyA9IG5ldyBTZXQ8UHJvcGVydHlLZXk+KFtcImFkZFwiLCBcImRlbGV0ZVwiLCBcImNsZWFyXCJdKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlciggdHJpZ2dlciwgU2V0SGFuZGxlci5tdXRhdG9yTWV0aG9kTmFtZXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudHMgc2V0LXNwZWNpZmljIG11dGF0b3IgbWV0aG9kcy5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogTWFwPGFueSxhbnk+LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIGlmIChuYW1lID09PSBcImFkZFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gW29yZ01ldGhvZCggdHJpZ2dlcnJpemUoIGFyZ3NbMF0sIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCkpLCB0cnVlXTtcclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImNsZWFyXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXNDaGFuZ2VkID0gdGFyZ2V0LnNpemUgPiAwO1xyXG4gICAgICAgICAgICBvcmdNZXRob2QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIGlzQ2hhbmdlZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiZGVsZXRlXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGVsZXRlZCA9IG9yZ01ldGhvZCggYXJnc1swXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbZGVsZXRlZCwgZGVsZXRlZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWNvcmF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgcHJvcGVydGllcyBzbyB0aGF0IGNoYW5naW5nIHRoZWlyIHZhbHVlIHdpbGwgYW55IHdhdGNoZXJcclxuICogb2JqZWN0cyBhdHRhY2hlZCB0byB0aGVtIHRvIHJlc3BvbmQuXHJcbiAqIFRoZSBmb3JtIGBAdHJpZ2dlcmAgZGVzaWduYXRlcyBhIGRlZmF1bHQgdHJpZ2dlciBkZWNvcmF0b3IsIHdob3NlIGRlcHRoIHdpbGwgYmUgYXNzaWduZWRcclxuICogZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSB0eXBlOiBTaGFsbG93IGZvciBhcnJheXMsIG1hcHMgYW5kIHNldHMgYW5kIERlZXAgZm9yIG9iamVjdHMuXHJcbiAqIFRoZSBmb3JtIGBAdHJpZ2dlcihuKWAgZGVzaWduYXRlcyBhIHRyaWdnZXIgZGVjb3JhdG9yIGZhY3Rvcnkgd2l0aCB0aGUgc3BlY2lmaWVkIGRlcHRoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXIoIHRhcmdldE9yRGVwdGg6IGFueSwgbmFtZT86IHN0cmluZyk6IGFueVxyXG57XHJcbiAgICBpZiAodHlwZW9mIHRhcmdldE9yRGVwdGggPT09IFwibnVtYmVyXCIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhIG51bWJlciB0aGF0IGl0IGlzIGFuIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGRlcHRoIHVzaW5nXHJcbiAgICAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkuXHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEZWNvcmF0b3JIZWxwZXIuYmluZCggdW5kZWZpbmVkLCB0YXJnZXRPckRlcHRoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyB1bmRlZmluZWQgZGVwdGggbWVhbnMgdGhhdCB0aGF0IHRoZSBhY3R1YWwgZGVwdGggd2lsbCBiZSBhc3NpZ25lZCBkZXBlbmRpZyBvbiB0aGVcclxuICAgICAgICAvLyB2YWx1ZSBvZiB0aGUgdHJpZ2dlcjogU2hhbGxvdyBmb3IgbWFwcywgc2V0cyBhbmQgYXJyYXlzIGFuZCBEZWVwIGZvciBvYmplY3RzLlxyXG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyKCB1bmRlZmluZWQsIHRhcmdldE9yRGVwdGgsIG5hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRlZmluaW5nIGBAdHJpZ2dlcmAgZGVjb3JhdG9ycy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJEZWNvcmF0b3JIZWxwZXIoIGRlcHRoOiBudW1iZXIsIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuICAgIGxldCBzeW0gPSBTeW1ib2woIG5hbWUgKyBcIl90cmlnZ2VyXCIpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgZ2V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlVHJpZ2dlciggZGVwdGgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQoIHZhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlVHJpZ2dlciggZGVwdGgsIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPYmouc2V0KCB2YWwpXHJcbiAgICAgICAgfSxcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBcImdldFwiIHByb3BlcnRpZXMgb3IgZnVuY3Rpb25zIHJldHVuaW5nIGEgdmFsdWUgc28gdGhhdCB0aGlzXHJcbiAqIHZhbHVlIHdpbGwgYXV0b21hdGljYWxseSByZWNhbGN1bGF0ZWQgaWYgYW55IHRyaWdnZXJzIG9uIHdoaWNoIHRoaXMgdmFsdWUgZGVwZW5kcyBoYXZlIHRoZWlyXHJcbiAqIHZhbHVlcyBjaGFuZ2VkLiBXSGVuIHRoaXMgaGFwcGVucywgdGhlIHdhdGNoZXIgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGlzIGNvbXB1dGVkIHZhbHVlIHdpbGxcclxuICogYmUgbm90aWZpZWQgdG8gcmVzcG9uZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCggdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgcHJvcERlc2NyOiBQcm9wZXJ0eURlc2NyaXB0b3IpXHJcbntcclxuICAgIGxldCBzeW0gPSBTeW1ib2wobmFtZSk7XHJcblxyXG4gICAgLy8gcHJvcERlc2MudmFsdWUgaXMgdW5kZWZpbmVkIGZvciBhY2Nlc3NvcnMgYW5kIGRlZmluZWQgZm9yIGZ1bmN0aW9uc1xyXG4gICAgaWYgKCFwcm9wRGVzY3IudmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFwcm9wRGVzY3IuZ2V0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJAY29tcHV0ZWQgcHJvcGVydHkgcmVxdWlyZXMgZ2V0KCkgYWNjZXNzb3JcIik7XHJcblxyXG4gICAgICAgIGxldCBvcmdHZXQgPSBwcm9wRGVzY3IuZ2V0O1xyXG4gICAgICAgIHByb3BEZXNjci5nZXQgPSBmdW5jdGlvbigpOiBhbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElDb21wdXRlZFRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0dldCwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wRGVzY3Iuc2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG9yZ1NldCA9IHByb3BEZXNjci5zZXQ7XHJcbiAgICAgICAgICAgIHByb3BEZXNjci5zZXQgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgICAgICAgICB0cnkgeyBvcmdTZXQuY2FsbCggdGhpcywgdik7IH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBvcmdGdW5jID0gcHJvcERlc2NyLnZhbHVlO1xyXG4gICAgICAgIHByb3BEZXNjci52YWx1ZSA9IGZ1bmN0aW9uKCB2OiBhbnkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdGdW5jLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvbXBhcmUoIG8xOiBhbnksIG8yOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHRpZiAobzEgPT09IG8yKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCAmJiBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCB8fCBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSAhPT0gdHlwZW9mIG8yKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwIGluIG8xKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWRlZXBDb21wYXJlKCBvMVtwXSwgbzJbcF0pKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBwIGluIG8yKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIShwIGluIG8xKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpICE9PSBBcnJheS5pc0FycmF5KG8yKSlcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSlcclxuXHR7XHJcblx0XHRpZiAobzEubGVuZ3RoICE9PSBvMi5sZW5ndGgpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IDAsIGxlbiA9IG8xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFkZWVwQ29tcGFyZSggbzFbaV0sIG8yW2ldKSlcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlc2UgYXJlIHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zIG9yIGZ1bmN0aW9ucyBhbmQgdGhleSBhcmUgZGlmZmVyZW50XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaE9iamVjdCggbzogYW55KTogbnVtYmVyXHJcbntcclxuXHRpZiAobyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0ZWxzZSBpZiAobyA9PT0gbnVsbClcclxuXHRcdHJldHVybiAxO1xyXG5cdGVsc2UgaWYgKGlzTmFOKDApKVxyXG5cdFx0cmV0dXJuIDI7XHJcblx0ZWxzZSBpZiAobyA9PT0gdHJ1ZSlcclxuXHRcdHJldHVybiAzO1xyXG5cdGVsc2UgaWYgKG8gPT09IGZhbHNlKVxyXG5cdFx0cmV0dXJuIDQ7XHJcblxyXG5cdGxldCBoID0gMTA7XHJcblxyXG5cdGlmICh0eXBlb2YgbyA9PT0gXCJudW1iZXJcIilcclxuXHRcdHJldHVybiAxMCArIG87XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gaGFzaFN0cmluZyggbyk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvLm5hbWUpO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobykpXHJcblx0e1xyXG5cdFx0bGV0IGxlbiA9IG8ubGVuZ3RoO1xyXG5cdFx0bGV0IGggPSAxMCArIGxlbjtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdCBoICs9IGkgKyBoYXNoT2JqZWN0KCBvW2ldKTtcclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0bGV0IGggPSAxMDtcclxuXHRcdGZvciggbGV0IHAgaW4gbylcclxuXHRcdFx0aCArPSBoYXNoU3RyaW5nKHApICsgaGFzaE9iamVjdChvW3BdKTtcclxuXHRcdHJldHVybiBoO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzaFN0cmluZyggczogc3RyaW5nKTogbnVtYmVyXHJcbntcclxuXHRpZiAoIXMpXHJcblx0XHRyZXR1cm4gNTtcclxuXHJcblx0bGV0IGxlbiA9IHMubGVuZ3RoO1xyXG5cdGxldCBoID0gMTAgKyBsZW47XHJcblx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuXHRcdGggKz0gcy5jaGFyQ29kZUF0KGkpO1xyXG5cdHJldHVybiBoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgY2xhc3MgcHJvcGVydGllcyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuLy8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcbntcclxuXHRsZXQgcmVzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdGZvciggbGV0IGNsYXNzTmFtZSBvZiBjbGFzc05hbWVzKVxyXG5cdHtcclxuXHRcdGlmICghY2xhc3NOYW1lKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHQvLyBwYXJzZSB0aGUgY2xhc3MgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRsZXQgY2xhc3NOYW1lQXNTdHJpbmc6IHN0cmluZyA9IHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IGNsYXNzTmFtZSBhcyBzdHJpbmdcclxuXHRcdFx0XHQ6IChjbGFzc05hbWUgYXMgc3RyaW5nW10pLmpvaW4oIFwiIFwiKTtcclxuXHJcblx0XHRpZiAocmVzQ2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJlc0NsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlc0NsYXNzTmFtZSArPSBcIiBcIjtcclxuXHJcblx0XHRyZXNDbGFzc05hbWUgKz0gY2xhc3NOYW1lQXNTdHJpbmc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzQ2xhc3NOYW1lO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuLy8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogU3R5bGVzZXRbXSk6IFN0eWxlc2V0XHJcbntcclxuXHQvLyBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IGZvciBhY2N1bXVsYXRpbmcgc3R5bGUgcHJvcGVydGllc1xyXG5cdGxldCByZXNTdHlsZTogU3R5bGVzZXQgPSB7fTtcclxuXHRtZXJnZVN0eWxlc1RvKCByZXNTdHlsZSwgLi4uc3R5bGVzKTtcclxuXHRyZXR1cm4gcmVzU3R5bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IFN0eWxlc2V0LCAuLi5zdHlsZXM6IChTdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBzdHlsZSBvZiBzdHlsZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzdHlsZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0bGV0IHN0eWxlT2JqOiBTdHlsZXNldCA9IHR5cGVvZiBzdHlsZSA9PT0gXCJvYmplY3RcIlxyXG5cdFx0XHRcdD8gc3R5bGUgYXMgU3R5bGVzZXRcclxuXHRcdFx0XHQ6IHBhcnNlU3R5bGVTdHJpbmcoIHN0eWxlIGFzIHN0cmluZyk7XHJcblxyXG5cdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVPYmopXHJcblx0XHRcdHJlc1N0eWxlW3Byb3BOYW1lXSA9IHN0eWxlT2JqW3Byb3BOYW1lXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGFyc2VzIHRoZSBnaXZlbiBzdHlsZSBzdHJpbmcgaW50byB0aGUgU3R5bGUgb2JqZWN0LlxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdHlsZVN0cmluZyggczogc3RyaW5nKTogU3R5bGVzZXRcclxue1xyXG5cdGlmICghcylcclxuXHRcdHJldHVybiB7fTtcclxuXHJcblx0bGV0IHJldFN0eWxlOiBTdHlsZXNldCA9IHt9O1xyXG5cclxuXHRsZXQgZWxtczogc3RyaW5nW10gPSBzLnNwbGl0KFwiO1wiKTtcclxuXHRmb3IoIGxldCBlbG0gb2YgZWxtcylcclxuXHR7XHJcblx0XHRsZXQgcGFpcjogc3RyaW5nW10gPSBlbG0uc3BsaXQoIFwiOlwiKTtcclxuXHRcdGlmICghcGFpciB8fCBwYWlyLmxlbmd0aCA9PT0gMCB8fCBwYWlyLmxlbmd0aCA+IDIpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdHJldFN0eWxlW2Rhc2hUb0NhbWVsKCBwYWlyWzBdLnRyaW0oKSldID0gcGFpclsxXS50cmltKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmV0U3R5bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG5hbWVzIHdpdGggZGFzaGVzIGludG8gbmFtZXMgaW4gY2FtZWxDYXNlLCB3aGVyZSBldmVyeSBjaGFyYWN0ZXIgYWZ0ZXIgYSBkYXNoIGlzXHJcbiAqIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlcyggLi4uc2xpY2VzOiBtaW0uU2xpY2VbXSk6IG1pbS5TbGljZVxyXG57XHJcblx0bGV0IHJlc1NsaWNlOiBtaW0uU2xpY2UgPSB7fTtcclxuXHRtZXJnZVNsaWNlc1RvKCByZXNTbGljZSwgLi4uc2xpY2VzKTtcclxuXHRyZXR1cm4gcmVzU2xpY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbi8vIGludG8gdGhlIGdpdmVuIHJlc3VsdGFudCBzbGljZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlOiBtaW0uU2xpY2UsIC4uLnNsaWNlczogbWltLlNsaWNlW10pOiB2b2lkXHJcbntcclxuXHRpZiAocmVzU2xpY2UgPT09IHVuZGVmaW5lZCB8fCByZXNTbGljZSA9PT0gbnVsbClcclxuXHRcdHJldHVybjtcclxuXHJcblx0Zm9yKCBsZXQgc2xpY2Ugb2Ygc2xpY2VzKVxyXG5cdHtcclxuXHRcdGlmICghc2xpY2UpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdGlmIChzbGljZS5zdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLnN0eWxlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2Uuc3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdG1lcmdlU3R5bGVzVG8oIHJlc1NsaWNlLnN0eWxlLCBzbGljZS5zdHlsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNsYXNzTmFtZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlc1NsaWNlLmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRyZXNTbGljZS5jbGFzc05hbWUgPSBtZXJnZUNsYXNzZXMoIHJlc1NsaWNlLmNsYXNzTmFtZSBhcyBzdHJpbmcsIHNsaWNlLmNsYXNzTmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UucHJvcHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5wcm9wcyA9IHt9O1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc2xpY2UucHJvcHMpXHJcblx0XHRcdFx0cmVzU2xpY2VbcHJvcE5hbWVdID0gc2xpY2VbcHJvcE5hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzbGljZS5jb250ZW50KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY29udGVudCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQgPSBzbGljZS5jb250ZW50O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoIHJlc1NsaWNlLmNvbnRlbnQpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBvbGRDb250ZW50OiBhbnkgPSByZXNTbGljZS5jb250ZW50O1xyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IFtdO1xyXG5cdFx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBvbGRDb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJlc1NsaWNlLmNvbnRlbnQucHVzaCggc2xpY2UuY29udGVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fOyJdLCJzb3VyY2VSb290IjoiIn0=