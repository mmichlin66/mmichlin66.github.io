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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api/HtmlTypes.js":
/*!******************************!*\
  !*** ./lib/api/HtmlTypes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/api/SvgTypes.js":
/*!*****************************!*\
  !*** ./lib/api/SvgTypes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/api/UtilAPI.js":
/*!****************************!*\
  !*** ./lib/api/UtilAPI.js ***!
  \****************************/
/*! exports provided: isSvg, isSvgSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSvg", function() { return isSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSvgSvg", function() { return isSvgSvg; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");

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
    return Object(_internal__WEBPACK_IMPORTED_MODULE_0__["s_isSvg"])(elm);
}
/**
 * Determines whether the given element is the <svg> element.
 * @param elm  Element to test
 */
function isSvgSvg(elm) {
    return Object(_internal__WEBPACK_IMPORTED_MODULE_0__["s_isSvgSvg"])(elm);
}


/***/ }),

/***/ "./lib/api/mim.js":
/*!************************!*\
  !*** ./lib/api/mim.js ***!
  \************************/
/*! exports provided: jsx, Ref, ref, setRef, registerCustomAttribute, registerCustomEvent, Component, Fragment, FuncProxy, PromiseProxy, mount, unmount, updatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ref", function() { return Ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCustomAttribute", function() { return registerCustomAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCustomEvent", function() { return registerCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncProxy", function() { return FuncProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseProxy", function() { return PromiseProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatable", function() { return updatable; });
/* harmony import */ var _core_Reconciler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Reconciler */ "./lib/core/Reconciler.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");


/**
 * JSX Factory function. In order for this function to be invoked by the TypeScript compiler, the
 * tsconfig.json must have the following option:
 *
 * ```json
 * "compilerOptions":
 * {
 *     "jsx": "react",
 *     "jsxFactory": "jsx"
 * }
 * ```
 *
 * The .tsx files must import the mimbl module as mim: import * as mim from "mimbl"
 * @param tag
 * @param props
 * @param children
 */
function jsx(tag, props, ...children) {
    return Object(_core_Reconciler__WEBPACK_IMPORTED_MODULE_0__["createNodesFromJSX"])(tag, props, children);
}
// Symbol used to keep the referenced object inside the Ref class instance.
let symRef = Symbol("symRef");
/**
 * Reference class to use whenever a reference to an object is needed - for example, with JSX `ref`
 * attributes and services.
 */
class Ref {
    constructor(listener, initialReferene) {
        /** Event that is fired when the referenced value changes */
        this.changedEvent = new _internal__WEBPACK_IMPORTED_MODULE_1__["EventSlot"]();
        if (listener !== undefined)
            this.changedEvent.attach(listener);
        this[symRef] = initialReferene;
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
    get r() { return this[symRef]; }
    /** Set accessor for the reference value */
    set r(newRef) {
        if (this[symRef] !== newRef) {
            this[symRef] = newRef;
            this.changedEvent.fire(newRef);
        }
    }
}
/**
 * Decorator function for creating reference properties without the need to manually create Ref<>
 * instances. This allows for the following code pattern:
 *
 * ```typescript
 * class A extends Component
 * {
 *     @ref myDiv: HTMLDivElement;
 *     render() { return <div ref={myDiv}>Hello</div>; }
 * }
 * ```
 *
 * In the above example, the myDiv property will be set to pint to the HTML div element.
 */
function ref(target, name) {
    let handler = new RefProxyHandler();
    handler.proxy = new Proxy({}, handler);
    Object.defineProperty(target, name, {
        set(v) {
            handler.obj = v;
        },
        get() {
            return handler.proxy;
        }
    });
}
// Determines whether the given property name/symbol belongs to the Ref object or. This is invoked
// as part of the proxy handler where access to such properties will be reflected from the Ref
// object while all others will be reflected from the remembered referenced object.
function chooseObjectToReflect(prop, ref, obj) {
    return prop === "r" || prop === symRef || prop == "changedEvent" ? ref : obj;
}
/**
 * The RefProxyHandler is a proxy handler for the Ref objects created when reference is defined
 * using the @ref decorator. Only the "r" property are reflected from the target object (the Ref);
 * everything else is reflected from the remembered referenced object.
 */
class RefProxyHandler {
    get(target, prop, receiver) {
        return prop === "r" ? this.obj : this.obj[prop];
        // Reflect.get doesn't work but regular property get does
        // return prop === "r" ? this.obj : Reflect.get( this.obj, prop, receiver);
    }
    set(target, prop, value, receiver) {
        if (prop === "r")
            this.obj = value;
        else
            this.obj[prop] = value;
        return true;
        // Reflect.set doesn't work but regular property set does
        // return Reflect.set( this.obj, prop, value, receiver);
    }
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(this.obj, prop);
    }
    defineProperty(target, prop, attrs) {
        return Reflect.defineProperty(this.obj, prop, attrs);
    }
    has(target, prop) {
        return Reflect.has(this.obj, prop);
    }
    getPrototypeOf(target) {
        return Reflect.getPrototypeOf(this.obj);
    }
    isExtensible(target) {
        return Reflect.isExtensible(this.obj);
    }
    getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(this.obj, prop);
    }
    enumerate(target) {
        return Array.from(Reflect.enumerate(this.enumerate));
    }
    ownKeys(target) {
        return Reflect.ownKeys(this.obj);
    }
}
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
        if (onlyIf === undefined || ref.r === onlyIf)
            ref.r = val;
    }
    else if (typeof ref === "function")
        ref(val);
}
/**
 * Registers custom attribute handler class for the given property name.
 * @param propName name of the custom attribute
 * @param factory custom attribute class
 */
function registerCustomAttribute(attrName, handlerClass) {
    _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].registerProperty(attrName, { type: 3 /* CustomAttr */, handlerClass });
}
/**
 * Registers custom event for the given property name.
 * @param propName name of the custom event
 */
function registerCustomEvent(eventName) {
    _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].registerProperty(eventName, { type: 2 /* Event */ });
}
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
                    _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"].update(req, undefined, this);
                else {
                    // if a non-array parameter is passed in req.args, we wrap it in an array
                    _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"].update(req.func, req.key, req.thisArg ? req.thisArg : this, !req.args || Array.isArray(req.args) ? req.args : [req.args]);
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
        return Object(_core_Reconciler__WEBPACK_IMPORTED_MODULE_0__["wrapCallbackWithVN"])(callback, thisCallback, this.vn);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Built in components
//
///////////////////////////////////////////////////////////////////////////////////////////////////
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
 *		return <Fragment>
 *			<div1/>
 *			<div2/>
 *			<div3/>
 *		</Fragment>
 *	}
  ```

 * @param props
 */
function Fragment(props) { }
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
 * The FuncProxy component is needed in the case where one (or more) of the following is true:
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
        _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"].update(func, key, thisArg, args);
    }
}
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Definitions of mount/unmount functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Renders the given content (usually result of JSX expression) under the given HTML element
// asynchronously.
 * @param content Content to render.
 * @param anchorDN DOM element under which to render the content. If null or undefined,then
 *				render under the document.body tag.
 */
function mount(content, anchorDN = null) {
    Object(_internal__WEBPACK_IMPORTED_MODULE_1__["mountRoot"])(content, anchorDN);
}
/**
 * Removes the content that was originally generated by the mount function.
 * @param anchorDN DOM element under which the content was previously rendered.
 */
function unmount(anchorDN = null) {
    Object(_internal__WEBPACK_IMPORTED_MODULE_1__["unmountRoot"])(anchorDN);
}
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


/***/ }),

/***/ "./lib/core/ClassCompVN.js":
/*!*********************************!*\
  !*** ./lib/core/ClassCompVN.js ***!
  \*********************************/
/*! exports provided: ClassCompVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassCompVN", function() { return ClassCompVN; });
/* harmony import */ var _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");


/////////////////

//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class CompBaseVN is a base class for InstanceVN and ClassVN. It provides common functionality
// in terms of update requests and lifecycle management.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ClassCompVN extends _internal__WEBPACK_IMPORTED_MODULE_1__["VNBase"] {
/////////////////////
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp; }
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Rendered);
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
        this.renderWatcher = Object(_utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_0__["createWatcher"])(this.comp.render, this.requestUpdate, this.comp, this);
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Added);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Deleted);
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


/***/ }),

/***/ "./lib/core/ElmVN.js":
/*!***************************!*\
  !*** ./lib/core/ElmVN.js ***!
  \***************************/
/*! exports provided: ElmVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElmVN", function() { return ElmVN; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");


/////////////////

//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a DOM element created using JSX.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ElmVN extends _internal__WEBPACK_IMPORTED_MODULE_1__["VNBase"] {
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
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Elm; }
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
            Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, this.elm);
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Elm, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Added);
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
            Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, undefined, this.elm);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Elm, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Deleted);
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
        let shouldCommit = !Object(_internal__WEBPACK_IMPORTED_MODULE_1__["s_deepCompare"])(this.props, newVN.props);
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
                Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, this.elm);
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
                propInfo = _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].getPropertyInfo(propName);
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
            _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].setAttr(this.elm, name, rtd.info, rtd.val);
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
                    _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].removeAttr(elm, name, oldRTD.info);
                }
                else {
                    // if the new property with the given name has a different value, remmeber this
                    // value and set it to the attribute in the element
                    _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].updateAttr(elm, name, oldRTD.info, oldRTD.val, newRTD.val);
                }
            }
        }
        // loop over new attributes; add those that are not found among the old ones
        if (newAttrs) {
            for (let name in newAttrs) {
                if (oldAttrs && (name in oldAttrs))
                    continue;
                let newRTD = newAttrs[name];
                _internal__WEBPACK_IMPORTED_MODULE_1__["ElmAttr"].setAttr(elm, name, newRTD.info, newRTD.val);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Event, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Added);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Event, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Deleted);
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
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Event, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Updated);
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
/*! exports provided: FuncProxyVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncProxyVN", function() { return FuncProxyVN; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");

/////////////////

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
class FuncProxyVN extends _internal__WEBPACK_IMPORTED_MODULE_0__["VNBase"] {
    constructor(props) {
        super();
        this.type = 6 /* FuncProxy */;
        // remember data from the props. Note that if thisArg is undefined it will be changed
        // to the node's creator component upon mounting
        this.func = props.func;
        this.thisArg = props.thisArg;
        this.args = props.args;
        this.key = props.key;
        this.renderRequired = false;
    }
    replaceArgs(args) {
        this.args = args;
        this.renderRequired = true;
    }
/////////////////////
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp; }
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Rendered);
//////////////////
        // return this.func.apply( this.thisArg, this.args);
        return this.funcWatcher(this.args);
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        if (this.thisArg === undefined)
            this.thisArg = this.creator;
        // if a key was not provided we use the value of thisArg (which might be the current
        // component) as a key. If thisArg is undefined either we use the function itself as a key.
        this.linkKey = this.key || this.thisArg || this.func;
        this.linkNodeToFunc();
        // start watching the function
        this.funcWatcher = Object(_internal__WEBPACK_IMPORTED_MODULE_0__["createWatcher"])(this.func, this.updateFromWatcher, this.thisArg, this);
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Added);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Deleted);
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
        return _internal__WEBPACK_IMPORTED_MODULE_0__["VNUpdateDisp"].DoCommitDoRender;
    }
    // Commits updates made to this node to DOM.
    // This method is part of the Commit phase.
    commitUpdate(newVN) {
        // we use this method only to clear the renderRequired flag"
        this.renderRequired = false;
    }
    static findVN(func, key, thisArg) {
        // if the key is undefined, we use the function object itself
        let linkKey = key || thisArg || _internal__WEBPACK_IMPORTED_MODULE_0__["s_currentClassComp"] || func;
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


/***/ }),

/***/ "./lib/core/FuncVN.js":
/*!****************************!*\
  !*** ./lib/core/FuncVN.js ***!
  \****************************/
/*! exports provided: FuncVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncVN", function() { return FuncVN; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");


/////////////////

//////////
/**
 * Represents a rendering function a.k.a. stateless component.
 */
class FuncVN extends _internal__WEBPACK_IMPORTED_MODULE_1__["VNBase"] {
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
        return vn.func === _api_mim__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
    }
    ;
/////////////////////
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp; }
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Rendered);
//////////////////
        return this.func(this.props);
    }
/////////////////////
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Added);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Deleted);
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
        return _internal__WEBPACK_IMPORTED_MODULE_1__["VNUpdateDisp"].NoCommitDoRender;
    }
}


/***/ }),

/***/ "./lib/core/IndependentCompVN.js":
/*!***************************************!*\
  !*** ./lib/core/IndependentCompVN.js ***!
  \***************************************/
/*! exports provided: IndependentCompVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndependentCompVN", function() { return IndependentCompVN; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");

/// #endif
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class InstanceVN is a node that holds an instance of an IComponent-implementing object.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class IndependentCompVN extends _internal__WEBPACK_IMPORTED_MODULE_0__["ClassCompVN"] {
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
        return _internal__WEBPACK_IMPORTED_MODULE_0__["VNUpdateDisp"].getStockValue(false, needsUpdating);
    }
}


/***/ }),

/***/ "./lib/core/ManagedCompVN.js":
/*!***********************************!*\
  !*** ./lib/core/ManagedCompVN.js ***!
  \***********************************/
/*! exports provided: ManagedCompVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedCompVN", function() { return ManagedCompVN; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");


/// #endif
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a component implementing the IComponent<> interface.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ManagedCompVN extends _internal__WEBPACK_IMPORTED_MODULE_1__["ClassCompVN"] {
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
            Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, this.comp);
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
            Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, undefined, this.comp);
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
                Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, this.comp);
        }
        else if (newClassVN.ref === undefined) {
            // we know that our reference is defined, so unset it
            Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(this.ref, undefined, this.comp);
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
        return _internal__WEBPACK_IMPORTED_MODULE_1__["VNUpdateDisp"].getStockValue(false, shouldRender);
    }
}


/***/ }),

/***/ "./lib/core/PromiseProxyVN.js":
/*!************************************!*\
  !*** ./lib/core/PromiseProxyVN.js ***!
  \************************************/
/*! exports provided: PromiseProxyVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyVN", function() { return PromiseProxyVN; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");

/////////////////

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
class PromiseProxyVN extends _internal__WEBPACK_IMPORTED_MODULE_0__["VNBase"] {
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
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp; }
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Rendered);
//////////////////
        return this.content;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.watchPromise();
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Added);
//////////////////
    }
/////////////////////
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Comp, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Deleted);
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
        return _internal__WEBPACK_IMPORTED_MODULE_0__["VNUpdateDisp"].NoCommitDoRender;
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


/***/ }),

/***/ "./lib/core/PubSub.js":
/*!****************************!*\
  !*** ./lib/core/PubSub.js ***!
  \****************************/
/*! exports provided: notifyServicePublished, notifyServiceUnpublished, notifyServiceSubscribed, notifyServiceUnsubscribed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyServicePublished", function() { return notifyServicePublished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyServiceUnpublished", function() { return notifyServiceUnpublished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyServiceSubscribed", function() { return notifyServiceSubscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyServiceUnsubscribed", function() { return notifyServiceUnsubscribed; });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Information kept by Root virtual node about service export publications and subscriptions. The
// same service can be published and subscribed to by multiple nodes.
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
// Informs that the given node has subscribed to a service with the given ID.
function notifyServiceSubscribed(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined) {
        info = new ServiceInfo();
        s_serviceInfos.set(id, info);
    }
    info.subscribedVNs.add(sourceVN);
}
// Informs that the given node has unsubscribed from a service with the given ID.
function notifyServiceUnsubscribed(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined)
        return;
    info.subscribedVNs.delete(sourceVN);
    if (info.publishingVNs.size === 0 && info.subscribedVNs.size === 0)
        s_serviceInfos.delete(id);
}


/***/ }),

/***/ "./lib/core/Reconciler.js":
/*!********************************!*\
  !*** ./lib/core/Reconciler.js ***!
  \********************************/
/*! exports provided: s_currentVN, s_currentClassComp, wrapCallbackWithVN, requestNodeUpdate, scheduleFuncCall, createNodesFromJSX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_currentVN", function() { return s_currentVN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_currentClassComp", function() { return s_currentClassComp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapCallbackWithVN", function() { return wrapCallbackWithVN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestNodeUpdate", function() { return requestNodeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleFuncCall", function() { return scheduleFuncCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNodesFromJSX", function() { return createNodesFromJSX; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");


/////////////////

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
let s_currentVN = null;
// Class-based component whose rendering tree is currently being processed.
let s_currentClassComp = null;
/**
 * Sets the given node as the current and if the node is for the component, set the current
 * component. Returns the virtual node that was previously the current one. As we recurse over
 * virtual nodes and sub-nodes, we call this function to have the s_currentVN and
 * s_currentClassComp variables to point to the node and component being currently processed.
 */
function trackCurrentVN(vn) {
    let prevVN = s_currentVN;
    s_currentVN = vn;
    s_currentClassComp = !vn ? null : vn.comp != null ? vn.comp : vn.creator;
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
    // if "this" for the callback was not passed but vn was, check whether the vn is a component;
    // if yes, use it as "this"; otherwise, use vn's creator component.
    if (!thisCallback && vn)
        thisCallback = vn.comp != null ? vn.comp : vn.creator;
    return CallbackWrapper.bind(vn, thisCallback, callback);
}
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
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["enterMutationScope"])();
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
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["exitMutationScope"])();
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
        let statsAlreadyExisted = _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats != null;
        if (!statsAlreadyExisted) {
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats = new _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"](`Mimbl tick ${s_currentTick}: `);
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.start();
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
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.stop(true);
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats = null;
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
                    errorService.reportError(err, s_currentVN ? getVNPath(s_currentVN) : null);
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
    vn.init(parent, s_currentClassComp);
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
                    vn.handleError(err, getVNPath(s_currentVN));
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
                vn.handleError(err, getVNPath(s_currentVN));
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
                        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Elm, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Moved);
//////////////////////////////////
                    }
/////////////////////////////////////
                    _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(oldVN.statsCategory, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Moved);
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
            _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsCategory"].Elm, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Moved);
//////////////////////
        }
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["DetailedStats"].stats.log(subNodeVN.statsCategory, _utils_Stats__WEBPACK_IMPORTED_MODULE_2__["StatsAction"].Moved);
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
    else if (content instanceof _internal__WEBPACK_IMPORTED_MODULE_1__["VNBase"])
        return content;
    else if (typeof content === "string") {
        return content.length > 0 ? new _internal__WEBPACK_IMPORTED_MODULE_1__["TextVN"](content) : null;
    }
    else if (typeof content.render === "function") {
        // if the component (this can only be an Instance component) is already attached to VN,
        // return this existing VN; otherwise create a new one.
        return content.vn
            ? content.vn
            : new _internal__WEBPACK_IMPORTED_MODULE_1__["IndependentCompVN"](content);
    }
    else if (Array.isArray(content))
        return createNodesFromArray(content);
    else if (content instanceof Promise) {
        return new _internal__WEBPACK_IMPORTED_MODULE_1__["PromiseProxyVN"]({ promise: content });
    }
    else if (typeof content === "function") {
        let vn = _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"].findVN(content);
        return vn || new _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"]({ func: content, thisArg: s_currentClassComp });
    }
    else
        return new _internal__WEBPACK_IMPORTED_MODULE_1__["TextVN"](content.toString());
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
        return new _internal__WEBPACK_IMPORTED_MODULE_1__["ElmVN"](tag, props, children);
    else if (tag === _api_mim__WEBPACK_IMPORTED_MODULE_0__["Fragment"])
        return createNodesFromArray(children);
    else if (tag === _api_mim__WEBPACK_IMPORTED_MODULE_0__["FuncProxy"]) {
        if (!props || !props.func)
            return undefined;
        // check whether we already have a node linked to this function. If yes return it;
        // otherwise, create a new node.
        let funcProxyProps = props;
        let vn = _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"].findVN(props.func, funcProxyProps.key);
        if (!vn)
            return new _internal__WEBPACK_IMPORTED_MODULE_1__["FuncProxyVN"](props);
        else {
            // if the updateArgs property is true, we replace the arguments in the node; otherwise,
            // we ignore the arguments from the properties.
            if (funcProxyProps.replaceArgs)
                vn.replaceArgs(funcProxyProps.args);
            return vn;
        }
    }
    else if (tag === _api_mim__WEBPACK_IMPORTED_MODULE_0__["PromiseProxy"]) {
        if (!props || !props.promise)
            return undefined;
        return new _internal__WEBPACK_IMPORTED_MODULE_1__["PromiseProxyVN"](props, children);
    }
    else if (typeof tag === "function") {
        // children parameter is always an array. A component can specify that its children are
        // an array of a certain type, e.g. class A extends Component<{},T[]>. In this case
        // there are two ways to specify children in JSX that would be accepted by the TypeScript
        // compiler:
        //	1) <A>{t1}{t2}</A>. In this case, children will be [t1, t2] (as expected by A).
        //	2) <A>{[t1, t2]}</A>. In this case, children will be [[t1,t2]] (as NOT expected by A).
        //		This looks like a TypeScript bug.
        // The realChildren variable accommodates both cases.
        let realChildren = children.length === 1 && Array.isArray(children[0]) ? children[0] : children;
        if (typeof tag.prototype.render === "function")
            return new _internal__WEBPACK_IMPORTED_MODULE_1__["ManagedCompVN"](tag, props, realChildren);
        else
            return new _internal__WEBPACK_IMPORTED_MODULE_1__["FuncVN"](tag, props, realChildren);
    }
/////////////////
    else
        throw new Error("Invalid tag in jsx processing function: " + tag);
//////////////
}


/***/ }),

/***/ "./lib/core/RootVN.js":
/*!****************************!*\
  !*** ./lib/core/RootVN.js ***!
  \****************************/
/*! exports provided: RootVN, mountRoot, unmountRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootVN", function() { return RootVN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountRoot", function() { return mountRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountRoot", function() { return unmountRoot; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");

/////////////////

//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The RootVN class is used as a top-level virtual node for all rendered trees. RootVN serves
// as an error boundary of last resort. When it catches an error that wasn't caught by any
// descendand node, it displays a simple UI that shows the error and allows the user to restart.
// RootVN also manages service publishers and subscribers.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class RootVN extends _internal__WEBPACK_IMPORTED_MODULE_0__["VNBase"] {
    constructor(anchorDN) {
        super();
        // Flag indicating that an exception was caught from descendand nodes.
        this.error = false;
        // Flag indicating that a promise thrown as exception was caught from descendand nodes.
        this.waiting = false;
        // Set of promises thrown by descendant nodes and not yet fulfilled.
        this.thrownPromises = new Set();
        this.type = 0 /* Root */;
        this.anchorDN = anchorDN;
        this.depth = 0;
    }
    ;
/////////////////////
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Root; }
//////////////
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() { return "Root"; }
    // Sets the content to be rendered under this root node and triggers update.
    setContent(content, sync) {
        this.content = content;
        Object(_internal__WEBPACK_IMPORTED_MODULE_0__["requestNodeUpdate"])(this);
    }
    // Generates a chain of sub-nodes according to the current state. If the node doesn't have
    // sub-nodes, null should be returned.
    render() {
        return this.error || this.waiting ? null : this.content;
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
            this.waiting = true;
        }
        else {
            this.error = true;
        }
    }
    // Displays the content originally passed in the constructor.
    restart() {
        // clear the error and request to be updated
        this.error = false;
        Object(_internal__WEBPACK_IMPORTED_MODULE_0__["requestNodeUpdate"])(this);
    }
    // Informs that the given node has unsubscribed from a service with the given ID.
    reportError(err, path) {
        this.handleError(err, path);
        Object(_internal__WEBPACK_IMPORTED_MODULE_0__["requestNodeUpdate"])(this);
    }
    // Removes the fulfilled promise from our internal list and if the list is empty asks to
    // re-render
    onPromiseFulfilled(promise) {
        this.thrownPromises.delete(promise);
        if (this.thrownPromises.size === 0) {
            this.waiting = false;
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["requestNodeUpdate"])(this);
        }
    }
}
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


/***/ }),

/***/ "./lib/core/StyleScheduler.js":
/*!************************************!*\
  !*** ./lib/core/StyleScheduler.js ***!
  \************************************/
/*! exports provided: s_initStyleScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_initStyleScheduler", function() { return s_initStyleScheduler; });
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");


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
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["scheduleFuncCall"])(this.onUpdate, false, this);
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
function s_initStyleScheduler() {
    let schedulerType = Object(mimcss__WEBPACK_IMPORTED_MODULE_0__["registerScheduler"])(new StyleScheduler());
    Object(mimcss__WEBPACK_IMPORTED_MODULE_0__["setDefaultSchedulerType"])(schedulerType);
    return schedulerType;
}


/***/ }),

/***/ "./lib/core/TextVN.js":
/*!****************************!*\
  !*** ./lib/core/TextVN.js ***!
  \****************************/
/*! exports provided: TextVN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextVN", function() { return TextVN; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");

/////////////////

//////////
/**
 * Represents a text node.
 */
class TextVN extends _internal__WEBPACK_IMPORTED_MODULE_0__["VNBase"] {
    constructor(text) {
        super();
        this.type = 5 /* Text */;
        this.text = text;
    }
    ;
/////////////////////
    get statsCategory() { return _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Text; }
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Text, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Added);
//////////////////
        return this.textNode = document.createTextNode(this.text);
    }
    // Destroys DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    unmount() {
        this.textNode = undefined;
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Text, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Deleted);
//////////////////
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // text nodes don't have sub-nodes
        return _internal__WEBPACK_IMPORTED_MODULE_0__["VNUpdateDisp"].getStockValue(this.text !== newVN.text, false);
    }
    // Commits updates made to this node to DOM.
    commitUpdate(newVN) {
        this.textNode.nodeValue = this.text = newVN.text;
/////////////////////////
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Text, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Updated);
//////////////////
    }
}


/***/ }),

/***/ "./lib/core/VN.js":
/*!************************!*\
  !*** ./lib/core/VN.js ***!
  \************************/
/*! exports provided: VNUpdateDisp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNUpdateDisp", function() { return VNUpdateDisp; });
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
;


/***/ }),

/***/ "./lib/core/VNBase.js":
/*!****************************!*\
  !*** ./lib/core/VNBase.js ***!
  \****************************/
/*! exports provided: VNBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNBase", function() { return VNBase; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");


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
            this.publishedServices.forEach((service, id) => Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServiceUnpublished"])(id, this));
            this.publishedServices.clear();
        }
        if (this.subscribedServices !== undefined) {
            this.subscribedServices.forEach((info, id) => Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServiceUnsubscribed"])(id, this));
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
            Object(_internal__WEBPACK_IMPORTED_MODULE_1__["requestNodeUpdate"])(this);
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
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["scheduleFuncCall"])(func, true, that, this);
    }
    /**
     * Schedules to call the given function before all the scheduled components have been updated.
     * @param func Function to be called.
     * @param that Object to be used as the "this" value when the function is called. This parameter
     *   is not needed if the function is already bound or it is an arrow function.
     */
    scheduleCallAfterUpdate(func, that) {
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["scheduleFuncCall"])(func, false, that, this);
    }
    // Registers an object of any type as a service with the given ID that will be available for
    // consumption by descendant nodes.
    publishService(id, service) {
        if (this.publishedServices === undefined)
            this.publishedServices = new Map();
        let existinService = this.publishedServices.get(id);
        if (existinService !== service) {
            this.publishedServices.set(id, service);
            Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServicePublished"])(id, this);
        }
    }
    // Unregisters a service with the given ID.
    unpublishService(id) {
        if (this.publishedServices === undefined)
            return;
        this.publishedServices.delete(id);
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServiceUnpublished"])(id, this);
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
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServiceSubscribed"])(id, this);
        Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(ref, this.getService(id, defaultService));
    }
    // Unsubscribes from a service with the given ID. The Ref object that was used to subscribe,
    // will be set to undefined.
    unsubscribeService(id) {
        if (this.subscribedServices === undefined)
            return;
        let info = this.subscribedServices.get(id);
        if (info === undefined)
            return;
        Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(info.ref, undefined);
        this.subscribedServices.delete(id);
        Object(_internal__WEBPACK_IMPORTED_MODULE_1__["notifyServiceUnsubscribed"])(id, this);
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
        Object(_api_mim__WEBPACK_IMPORTED_MODULE_0__["setRef"])(info.ref, this.getService(id, info.defaultService));
    }
    /**
     * Creates a wrapper function with the same signature as the given callback so that if the original
     * callback throws an exception, it is processed by the Mimbl error handling mechanism so that the
     * exception bubles from this virtual node up the hierarchy until a node/component that knows
     * to handle errors is found.
     *
     * This function should be called by the code that is not part of any component but still has access
     * to the IVNode object; for example, custom attribute handlers. Components that derive from the
     * Component class should use the wrapCallback method of the Component class.
     *
     * @param callback
     */
    wrapCallback(callback, thisCallback) {
        return Object(_internal__WEBPACK_IMPORTED_MODULE_1__["wrapCallbackWithVN"])(callback, thisCallback, this);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNSubscribedServiceInfo class keeps information about a subscription of a node to a service.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNSubscribedServiceInfo {
}


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimblStyleSchedulerType", function() { return mimblStyleSchedulerType; });
/* harmony import */ var _utils_EventSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/EventSlot */ "./lib/utils/EventSlot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_0__["EventSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleEventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_0__["SimpleEventSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMultiEventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_0__["createMultiEventSlot"]; });

/* harmony import */ var _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["createTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWatcher", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["createWatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["enterMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["exitMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComputedTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["createComputedTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutator", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["createMutator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_1__["computed"]; });

/* harmony import */ var _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/UtilAPI */ "./lib/api/UtilAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSvg", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["isSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSvgSvg", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["isSvgSvg"]; });

/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/HtmlTypes */ "./lib/api/HtmlTypes.js");
/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__) if(["default","mimblStyleSchedulerType","EventSlot","SimpleEventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/SvgTypes */ "./lib/api/SvgTypes.js");
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__) if(["default","mimblStyleSchedulerType","EventSlot","SimpleEventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/mim */ "./lib/api/mim.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["jsx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ref", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["Ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["setRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerCustomAttribute", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["registerCustomAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerCustomEvent", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["registerCustomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuncProxy", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["FuncProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxy", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["PromiseProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["mount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["unmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatable", function() { return _api_mim__WEBPACK_IMPORTED_MODULE_5__["updatable"]; });

/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal */ "./lib/internal.js");
// Type definitions for mimbl






///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Mimbl-specific style scheduler that coordinates Mimcss DOM writing with Mimbl
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// Set Mimbl style scheduler as the default scheduler for style-related DOM-writing operations.
let mimblStyleSchedulerType = Object(_internal__WEBPACK_IMPORTED_MODULE_6__["s_initStyleScheduler"])();


/***/ }),

/***/ "./lib/internal.js":
/*!*************************!*\
  !*** ./lib/internal.js ***!
  \*************************/
/*! exports provided: s_deepCompare, s_isSvg, s_isSvgSvg, EventSlot, SimpleEventSlot, createMultiEventSlot, ElmAttr, createTrigger, createWatcher, enterMutationScope, exitMutationScope, createComputedTrigger, createMutator, trigger, computed, VNUpdateDisp, VNBase, ClassCompVN, IndependentCompVN, ManagedCompVN, ElmVN, FuncVN, FuncProxyVN, PromiseProxyVN, TextVN, RootVN, mountRoot, unmountRoot, s_initStyleScheduler, notifyServicePublished, notifyServiceUnpublished, notifyServiceSubscribed, notifyServiceUnsubscribed, s_currentVN, s_currentClassComp, wrapCallbackWithVN, requestNodeUpdate, scheduleFuncCall, createNodesFromJSX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/UtilFunc */ "./lib/utils/UtilFunc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_deepCompare", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_deepCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_isSvg", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_isSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_isSvgSvg", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_isSvgSvg"]; });

/* harmony import */ var _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/EventSlot */ "./lib/utils/EventSlot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__["EventSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleEventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__["SimpleEventSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMultiEventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__["createMultiEventSlot"]; });

/* harmony import */ var _utils_ElmAttr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ElmAttr */ "./lib/utils/ElmAttr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElmAttr", function() { return _utils_ElmAttr__WEBPACK_IMPORTED_MODULE_2__["ElmAttr"]; });

/* harmony import */ var _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["createTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWatcher", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["createWatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["enterMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["exitMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComputedTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["createComputedTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutator", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["createMutator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_3__["computed"]; });

/* harmony import */ var _core_VN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/VN */ "./lib/core/VN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNUpdateDisp", function() { return _core_VN__WEBPACK_IMPORTED_MODULE_4__["VNUpdateDisp"]; });

/* harmony import */ var _core_VNBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/VNBase */ "./lib/core/VNBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNBase", function() { return _core_VNBase__WEBPACK_IMPORTED_MODULE_5__["VNBase"]; });

/* harmony import */ var _core_ClassCompVN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/ClassCompVN */ "./lib/core/ClassCompVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassCompVN", function() { return _core_ClassCompVN__WEBPACK_IMPORTED_MODULE_6__["ClassCompVN"]; });

/* harmony import */ var _core_IndependentCompVN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/IndependentCompVN */ "./lib/core/IndependentCompVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndependentCompVN", function() { return _core_IndependentCompVN__WEBPACK_IMPORTED_MODULE_7__["IndependentCompVN"]; });

/* harmony import */ var _core_ManagedCompVN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/ManagedCompVN */ "./lib/core/ManagedCompVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagedCompVN", function() { return _core_ManagedCompVN__WEBPACK_IMPORTED_MODULE_8__["ManagedCompVN"]; });

/* harmony import */ var _core_ElmVN__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/ElmVN */ "./lib/core/ElmVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElmVN", function() { return _core_ElmVN__WEBPACK_IMPORTED_MODULE_9__["ElmVN"]; });

/* harmony import */ var _core_FuncVN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/FuncVN */ "./lib/core/FuncVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuncVN", function() { return _core_FuncVN__WEBPACK_IMPORTED_MODULE_10__["FuncVN"]; });

/* harmony import */ var _core_FuncProxyVN__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/FuncProxyVN */ "./lib/core/FuncProxyVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuncProxyVN", function() { return _core_FuncProxyVN__WEBPACK_IMPORTED_MODULE_11__["FuncProxyVN"]; });

/* harmony import */ var _core_PromiseProxyVN__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/PromiseProxyVN */ "./lib/core/PromiseProxyVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyVN", function() { return _core_PromiseProxyVN__WEBPACK_IMPORTED_MODULE_12__["PromiseProxyVN"]; });

/* harmony import */ var _core_TextVN__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/TextVN */ "./lib/core/TextVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextVN", function() { return _core_TextVN__WEBPACK_IMPORTED_MODULE_13__["TextVN"]; });

/* harmony import */ var _core_RootVN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/RootVN */ "./lib/core/RootVN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootVN", function() { return _core_RootVN__WEBPACK_IMPORTED_MODULE_14__["RootVN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountRoot", function() { return _core_RootVN__WEBPACK_IMPORTED_MODULE_14__["mountRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountRoot", function() { return _core_RootVN__WEBPACK_IMPORTED_MODULE_14__["unmountRoot"]; });

/* harmony import */ var _core_StyleScheduler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/StyleScheduler */ "./lib/core/StyleScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_initStyleScheduler", function() { return _core_StyleScheduler__WEBPACK_IMPORTED_MODULE_15__["s_initStyleScheduler"]; });

/* harmony import */ var _core_PubSub__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/PubSub */ "./lib/core/PubSub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyServicePublished", function() { return _core_PubSub__WEBPACK_IMPORTED_MODULE_16__["notifyServicePublished"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyServiceUnpublished", function() { return _core_PubSub__WEBPACK_IMPORTED_MODULE_16__["notifyServiceUnpublished"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyServiceSubscribed", function() { return _core_PubSub__WEBPACK_IMPORTED_MODULE_16__["notifyServiceSubscribed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyServiceUnsubscribed", function() { return _core_PubSub__WEBPACK_IMPORTED_MODULE_16__["notifyServiceUnsubscribed"]; });

/* harmony import */ var _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/Reconciler */ "./lib/core/Reconciler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_currentVN", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["s_currentVN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_currentClassComp", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["s_currentClassComp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapCallbackWithVN", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["wrapCallbackWithVN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestNodeUpdate", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["requestNodeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleFuncCall", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["scheduleFuncCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNodesFromJSX", function() { return _core_Reconciler__WEBPACK_IMPORTED_MODULE_17__["createNodesFromJSX"]; });

// Type definitions for mimbl




















/***/ }),

/***/ "./lib/utils/ElmAttr.js":
/*!******************************!*\
  !*** ./lib/utils/ElmAttr.js ***!
  \******************************/
/*! exports provided: ElmAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElmAttr", function() { return ElmAttr; });
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats */ "./lib/utils/Stats.js");

/////////////////

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
        _Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Added);
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
                _Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Updated);
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
        _Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Updated);
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
        _Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Deleted);
//////////////////
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
    Object(mimcss__WEBPACK_IMPORTED_MODULE_0__["setElementStyle"])(elm, propVal, 1 /* Sync */);
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    let res = Object(mimcss__WEBPACK_IMPORTED_MODULE_0__["diffStylesets"])(oldPropVal, newPropVal);
    // we have to return undefined because null is considered a valid update value
    return res == null ? undefined : res;
}
function updateStyleProp(elm, attrName, updateVal) {
    Object(mimcss__WEBPACK_IMPORTED_MODULE_0__["setElementStringStyle"])(elm, updateVal, 1 /* Sync */);
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
/*! exports provided: EventSlot, SimpleEventSlot, createMultiEventSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSlot", function() { return EventSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventSlot", function() { return SimpleEventSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiEventSlot", function() { return createMultiEventSlot; });
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
    /** Returns the number of currently attached listeners. */
    get count() { return this.listeners.size; }
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
class SimpleEventSlot extends EventSlot {
}
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
/*! exports provided: StatsCategory, StatsAction, CategoryStats, DetailedStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCategory", function() { return StatsCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsAction", function() { return StatsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStats", function() { return CategoryStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedStats", function() { return DetailedStats; });
///////////////////////////////////////////////////////////////////////////////////////////////////
// Gathering update statistics
///////////////////////////////////////////////////////////////////////////////////////////////////
// Categories of changed entities to gather statistics about.
var StatsCategory;
(function (StatsCategory) {
    StatsCategory[StatsCategory["Root"] = 0] = "Root";
    StatsCategory[StatsCategory["Comp"] = 1] = "Comp";
    StatsCategory[StatsCategory["Elm"] = 2] = "Elm";
    StatsCategory[StatsCategory["Text"] = 3] = "Text";
    StatsCategory[StatsCategory["Attr"] = 4] = "Attr";
    StatsCategory[StatsCategory["Event"] = 5] = "Event";
})(StatsCategory || (StatsCategory = {}));
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
})(StatsAction || (StatsAction = {}));
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


/***/ }),

/***/ "./lib/utils/TriggerWatcher.js":
/*!*************************************!*\
  !*** ./lib/utils/TriggerWatcher.js ***!
  \*************************************/
/*! exports provided: createTrigger, createWatcher, enterMutationScope, exitMutationScope, createComputedTrigger, createMutator, trigger, computed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return createTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWatcher", function() { return createWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterMutationScope", function() { return enterMutationScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitMutationScope", function() { return exitMutationScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComputedTrigger", function() { return createComputedTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutator", function() { return createMutator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Common types
//
///////////////////////////////////////////////////////////////////////////////////////////////////
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
/**
 * Decrements mutation scope reference count. If it reaches zero, notifies all deferred watchers.
 */
function exitMutationScope() {
    g_manager.exitMutationScope();
}
/**
 * Creates a computed trigger object whose value is calculated by the given function and with an
 * optional initial value.
 * @param v
 */
function createComputedTrigger(func, funcThis) {
    return new ComputedTrigger(func, funcThis);
}
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
    getOwnPropertyDescriptor(target, prop) {
        this.trigger.notifyRead();
        return Reflect.getOwnPropertyDescriptor(target, prop);
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


/***/ }),

/***/ "./lib/utils/UtilFunc.js":
/*!*******************************!*\
  !*** ./lib/utils/UtilFunc.js ***!
  \*******************************/
/*! exports provided: s_deepCompare, s_isSvg, s_isSvgSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_deepCompare", function() { return s_deepCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_isSvg", function() { return s_isSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_isSvgSvg", function() { return s_isSvgSvg; });
/**
 * Compares the two given values going down to their properties if these are arrays or objects
 * @param o1
 * @param o2
 */
function s_deepCompare(o1, o2) {
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
            if (!s_deepCompare(o1[p], o2[p]))
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
                if (!s_deepCompare(o1[i], o2[i]))
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
// export function hashObject( o: any): number
// {
// 	if (o === undefined)
// 		return 0;
// 	else if (o === null)
// 		return 1;
// 	else if (isNaN(0))
// 		return 2;
// 	else if (o === true)
// 		return 3;
// 	else if (o === false)
// 		return 4;
// 	let h = 10;
// 	if (typeof o === "number")
// 		return 10 + o;
// 	else if (typeof o === "string")
// 		return hashString( o);
// 	else if (typeof o === "function")
// 		return hashString( o.name);
// 	else if (Array.isArray(o))
// 	{
// 		let len = o.length;
// 		let h = 10 + len;
// 		for( let i = 0; i < len; i++)
// 			 h += i + hashObject( o[i]);
// 		return h;
// 	}
// 	else
// 	{
// 		let h = 10;
// 		for( let p in o)
// 			h += hashString(p) + hashObject(o[p]);
// 		return h;
// 	}
// }
// export function hashString( s: string): number
// {
// 	if (!s)
// 		return 5;
// 	let len = s.length;
// 	let h = 10 + len;
// 	for( let i = 0; i < len; i++)
// 		h += s.charCodeAt(i);
// 	return h;
// }
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
function s_isSvg(elm) {
    return "ownerSVGElement" in elm;
}
/**
 * Determines whether the given element is the <svg> element.
 * @param elm  Element to test
 */
function s_isSvgSvg(elm) {
    return elm.tagName === "svg";
    // return (elm as any).ownerSVGElement === null;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL1V0aWxBUEkudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NsYXNzQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRWxtVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jUHJveHlWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0luZGVwZW5kZW50Q29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvTWFuYWdlZENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Byb21pc2VQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHViU3ViLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUmVjb25jaWxlci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1Jvb3RWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1N0eWxlU2NoZWR1bGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVGV4dFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTkJhc2UudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvaW50ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvRWxtQXR0ci50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbEZ1bmMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FB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QzlCLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBQzlCLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsY0FBYztBQUNkLEtBQUs7QUFDTCxRQUFRO0FBQ1IsS0FBSztBQUNMLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsNENBQTRDO0FBQzVDLGNBQWM7QUFDZCxLQUFLO0FBQ0wsSUFBSTtBQUlKLGlEQUFpRDtBQUNqRCxJQUFJO0FBQ0osV0FBVztBQUNYLGNBQWM7QUFFZCx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsYUFBYTtBQUNiLElBQUk7QUFJSixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7O0dBSUc7QUFDSSxTQUFTLE9BQU8sQ0FBRSxHQUFZO0lBRXBDLE9BQU8saUJBQWlCLElBQUssR0FBVyxDQUFDO0FBQzFDLENBQUM7QUFJRDs7O0dBR0c7QUFDSSxTQUFTLFVBQVUsQ0FBRSxHQUFZO0lBRXZDLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDN0IsZ0RBQWdEO0FBQ2pELENBQUM7Ozs7Ozs7Ozs7OztBQ3ZJRCxvRCIsImZpbGUiOiJtaW1ibC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1jc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltY3NzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1ibFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbWNzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge3NfaXNTdmcsIHNfaXNTdmdTdmd9ZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gc19pc1N2ZyggZWxtKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIHRoZSA8c3ZnPiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtICBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIHNfaXNTdmdTdmcoIGVsbSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtTdHlsZXNldCwgSUNsYXNzUnVsZSwgSUNsYXNzTmFtZVJ1bGUsIElJRFJ1bGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5vZGVzRnJvbUpTWCwgd3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9SZWNvbmNpbGVyXCI7XHJcbmltcG9ydCB7UHJvcFR5cGUsIEVsbUF0dHIsIEV2ZW50U2xvdCwgbW91bnRSb290LCB1bm1vdW50Um9vdCwgRnVuY1Byb3h5Vk59IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3RydWN0b3Igc2lnbmF0dXJlIGZvciBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdG9mIHRoaXMgdHlwZS4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IG9mIHRoaXMgdHlwZS4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENsYXNzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHRuZXcoIHByb3BzPzogVFByb3BzKTogSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHRyZW5kZXIoKTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFsbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gRm9yIG1hbmFnZWQgY29tcG9uZW50cywgdGhlIHByb3BlcnRpZXNcclxuXHQgKiBjYW4gYWxzbyBiZSBzZXQgKGNoYW5nZWQpIHdoZW4gdGhlIGNvbXBvbmVudCdzIHBhcmVudCBpcyB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wb25lbnRzIGNhbiBkZWZpbmUgZGlzcGxheSBuYW1lIGZvciB0cmFjaW5nIHB1cnBvc2VzOyBpZiB0aGV5IGRvbid0IHRoZSBkZWZhdWx0IG5hbWVcclxuXHQgKiB1c2VkIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBjb25zdHJ1Y3RvciBuYW1lLiBOb3RlIHRoYXQgdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBiZWZvcmVcclxuXHQgKiB0aGUgdmlydHVhbCBub2RlIGlzIGF0dGFjaGVkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMsIGdldHMgb3IgY2xlYXJzIHRoZSB2aXJ0dWFsIG5vZGUgb2JqZWN0IG9mIHRoZSBjb21wb25lbnQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKi9cclxuXHR2bj86IElWTm9kZTtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlc1xyXG5cdCAqIGZyb20gaXQuXHJcblx0ICovXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBjb21wb25lbnQgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRoZSBjb250ZW50IG9mIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBET00gZXZlbnRzIG9mIHR5cGUgVC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IChlOiBUKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0XTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlLCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZCBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gKiBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3QsIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUPiB8XHJcblx0XHRcdFx0RXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VD47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgdGhlIGNsYXNzIHByb3BlcnR5IG9mIEhUTUwgZWxlbWVudHNcclxuICovXHRcdFx0XHRcclxuZXhwb3J0IHR5cGUgQ2xhc3NQcm9wVHlwZSA9IHN0cmluZyB8IElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IChzdHJpbmcgfCBJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUpW107XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgdGhlIGlkIHByb3BlcnR5IG9mIEhUTUwgZWxlbWVudHNcclxuICovXHRcdFx0XHRcclxuZXhwb3J0IHR5cGUgSURQcm9wVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IElJRFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIENyb3Nzb3JpZ2luUHJvcFR5cGUgPSBcImFub255bW91c1wiIHwgXCJ1c2UtY3JlZGVudGlhbHNcIjtcclxuZXhwb3J0IHR5cGUgRm9ybWVuY3R5cGVQcm9wVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfCBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB8IFwidGV4dC9wbGFpblwiO1xyXG5leHBvcnQgdHlwZSBGb3JtbWV0aG9kUHJvcFR5cGUgPSBcImdldFwiIHwgXCJwb3N0XCIgfCBcImRpYWxvZ1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtdGFyZ2V0UHJvcFR5cGUgPSBzdHJpbmcgfCBcIl9zZWxmXCIgfCBcIl9ibGFua1wiIHwgXCJfcGFyZW50XCJ8IFwiX3RvcFwiO1xyXG5leHBvcnQgdHlwZSBSZWZlcnJlclBvbGljeVByb3BUeXBlID0gXCJuby1yZWZlcnJlclwiIHwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIHwgXCJvcmlnaW5cIiB8XHJcblx0XHRcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIHwgXCJ1bnNhZmUtdXJsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGVsZW1lbnQgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdC8vIHN0YW5kYXJkIEhUTUwgYW5kIFNWRyBlbGVtZW50IHByb3BlcnRpZXNcclxuXHRjbGFzcz86IENsYXNzUHJvcFR5cGU7XHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXIgfCBJSURSdWxlO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IFN0eWxlc2V0O1xyXG5cdHRhYmluZGV4PzogbnVtYmVyO1xyXG5cclxuXHQvLyBnbG9iYWwgZXZlbnRzXHJcblx0YWJvcnQ/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbml0ZXJhdGlvbj86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YXV4Y2xpY2s/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRibHVyPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRjYW5jZWw/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheXRocm91Z2g/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y2xvc2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjb250ZXh0bWVudT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y3VlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZGJsY2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGR1cmF0aW9uY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW1wdGllZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVuZGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZXJyb3I/OiBFdmVudFByb3BUeXBlPEVycm9yRXZlbnQ+O1xyXG5cdGZvY3VzPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRnb3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRpbnB1dD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGludmFsaWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRrZXlkb3duPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXlwcmVzcz86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5dXA/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGxvYWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkbWV0YWRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZW5kPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRsb2Fkc3RhcnQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb3N0cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0bW91c2Vkb3duPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWVudGVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWxlYXZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW1vdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3V0PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW92ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNldXA/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdHBhdXNlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXlpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwb2ludGVyY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJkb3duPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJlbnRlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybGVhdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm1vdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm91dD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3Zlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVydXA/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cHJvZ3Jlc3M/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdHJhdGVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNldD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2l6ZT86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c2Nyb2xsPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uPzogRXZlbnRQcm9wVHlwZTxTZWN1cml0eVBvbGljeVZpb2xhdGlvbkV2ZW50PjtcclxuXHRzZWVrZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWVraW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2VsZWN0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzdGFsbGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VibWl0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VzcGVuZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRpbWV1cGRhdGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b2dnbGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b3VjaGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbmQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW50ZXI/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobGVhdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobW92ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hzdGFydD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dHJhbnNpdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25ydW4/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHZvbHVtZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdhaXRpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3aGVlbD86IEV2ZW50UHJvcFR5cGU8V2hlZWxFdmVudD47XHJcblxyXG5cdC8vIEVsZW1lbnQncyBldmVudHNcclxuXHRmdWxsc2NyZWVuY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZnVsbHNjcmVlbmVycm9yPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblxyXG5cdC8vIERvY3VtZW50J3MgYW5kIEVsZW1lbnQncyBldmVudHNcclxuXHRjb3B5PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0Y3V0PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0cGFzdGU/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pbmcgaW50ZXJmYWNlcyB1c2VkIGJ5IFR5cGVTY3JpcHQgdG8gdHlwZS1jaGVjayBKU1ggZXhwcmVzc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEpTWFxyXG57XHJcblx0Ly8gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudCBleHRlbmRzIElWTm9kZVtdIHt9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyBleHRlbmRzIElDb21wb25lbnQge31cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlc1Byb3BlcnR5IHsgcHJvcHM6IHt9IH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2hpbGRyZW5BdHRyaWJ1dGUgeyBjaGlsZHJlbjogYW55IH1cclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0Ly8gSFRNTCBlbGVtZW50c1xyXG5cdFx0YTogaHRtbC5JSHRtbEFFbGVtZW50UHJvcHM7XHJcblx0XHRhYmJyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWNyb255bTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFkZHJlc3M6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhcHBsZXQ6IGh0bWwuSUh0bWxBcHBsZXRFbGVtZW50UHJvcHM7XHJcblx0XHRhcmVhOiBodG1sLklIdG1sQXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdGFydGljbGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhc2lkZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGF1ZGlvOiBodG1sLklIdG1sQXVkaW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2U6IGh0bWwuSUh0bWxCYXNlRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZWZvbnQ6IGh0bWwuSUh0bWxCYXNlZm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGJkaTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJkbzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJpZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJsb2NrcXVvdGU6IGh0bWwuSUh0bWxCbG9ja3F1b3RlRWxlbWVudFByb3BzO1xyXG5cdFx0Ym9keTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJyOiBodG1sLklIdG1sQnJFbGVtZW50UHJvcHM7XHJcblx0XHRidXR0b246IGh0bWwuSUh0bWxCdXR0b25FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Y2FudmFzOiBodG1sLklIdG1sQ2FudmFzRWxlbWVudFByb3BzO1xyXG5cdFx0Y2FwdGlvbjogaHRtbC5JSHRtbENhcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRjZW50ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjaXRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29kZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbDogaHRtbC5JSHRtbENvbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbGdyb3VwOiBodG1sLklIdG1sQ29sZ3JvdXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGF0YTogaHRtbC5JSHRtbERhdGFFbGVtZW50UHJvcHM7XHJcblx0XHRkYXRhbGlzdDogaHRtbC5JSHRtbERhdGFMaXN0RWxlbWVudFByb3BzO1xyXG5cdFx0ZGQ6IGh0bWwuSUh0bWxEZEVsZW1lbnRQcm9wcztcclxuXHRcdGRlbDogaHRtbC5JSHRtbERlbEVsZW1lbnRQcm9wcztcclxuXHRcdGRldGFpbHM6IGh0bWwuSUh0bWxEZXRhaWxzRWxlbWVudFByb3BzO1xyXG5cdFx0ZGZuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlhbG9nOiBodG1sLklIdG1sRGlhbG9nRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlyOiBodG1sLklIdG1sRGlyRWxlbWVudFByb3BzO1xyXG5cdFx0ZGl2OiBodG1sLklIdG1sRGl2RWxlbWVudFByb3BzO1xyXG5cdFx0ZGw6IGh0bWwuSUh0bWxEbEVsZW1lbnRQcm9wcztcclxuXHRcdGR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZW1iZWQ6IGh0bWwuSUh0bWxFbWJlZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmaWVsZHNldDogaHRtbC5JSHRtbEZpZWxkc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmlnY2FwdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ3VyZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvbnQ6IGh0bWwuSUh0bWxGb250RWxlbWVudFByb3BzO1xyXG5cdFx0Zm9vdGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9ybTogaHRtbC5JSHRtbEZvcm1FbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZTogaHRtbC5JSHRtbEZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWVzZXQ6IGh0bWwuSUh0bWxGcmFtZXNldEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRoMTogaHRtbC5JSHRtbEgxRWxlbWVudFByb3BzO1xyXG5cdFx0aDI6IGh0bWwuSUh0bWxIMkVsZW1lbnRQcm9wcztcclxuXHRcdGgzOiBodG1sLklIdG1sSDNFbGVtZW50UHJvcHM7XHJcblx0XHRoNDogaHRtbC5JSHRtbEg0RWxlbWVudFByb3BzO1xyXG5cdFx0aDU6IGh0bWwuSUh0bWxINUVsZW1lbnRQcm9wcztcclxuXHRcdGg2OiBodG1sLklIdG1sSDZFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkOiBodG1sLklIdG1sSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhncm91cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhyOiBodG1sLklIdG1sSHJFbGVtZW50UHJvcHM7XHJcblx0XHRodG1sOiBodG1sLklIdG1sSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aWZyYW1lOiBodG1sLklIdG1sSWZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0aW1nOiBodG1sLklIdG1sSW1nRWxlbWVudFByb3BzO1xyXG5cdFx0aW5wdXQ6IGh0bWwuSUh0bWxJbnB1dEVsZW1lbnRQcm9wcztcclxuXHRcdGluczogaHRtbC5JSHRtbEluc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRrYmQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRrZXlnZW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGFiZWw6IGh0bWwuSUh0bWxMYWJlbEVsZW1lbnRQcm9wcztcclxuXHRcdGxlZ2VuZDogaHRtbC5JSHRtbExlZ2VuZEVsZW1lbnRQcm9wcztcclxuXHRcdGxpOiBodG1sLklIdG1sTGlFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5rOiBodG1sLklIdG1sTGlua0VsZW1lbnRQcm9wcztcclxuXHRcdGxpc3Rpbmc6IGh0bWwuSUh0bWxMaXN0aW5nRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1haW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtYXA6IGh0bWwuSUh0bWxNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRtYXJrOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWVudTogaHRtbC5JSHRtbE1lbnVFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51aXRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGE6IGh0bWwuSUh0bWxNZXRhRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0ZXI6IGh0bWwuSUh0bWxNZXRlckVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRuYXY6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9mcmFtZXM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub3NjcmlwdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRvYmplY3Q6IGh0bWwuSUh0bWxPYmplY3RFbGVtZW50UHJvcHM7XHJcblx0XHRvbDogaHRtbC5JSHRtbE9sRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0Z3JvdXA6IGh0bWwuSUh0bWxPcHRncm91cEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGlvbjogaHRtbC5JSHRtbE9wdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdG91dHB1dDogaHRtbC5JSHRtbE91dHB1dEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwOiBodG1sLklIdG1sUEVsZW1lbnRQcm9wcztcclxuXHRcdHBhcmFtOiBodG1sLklIdG1sUGFyYW1FbGVtZW50UHJvcHM7XHJcblx0XHRwaWN0dXJlOiBodG1sLklIdG1sUGljdHVyZUVsZW1lbnRQcm9wcztcclxuXHRcdHByZTogaHRtbC5JSHRtbFByZUVsZW1lbnRQcm9wcztcclxuXHRcdHByb2dyZXNzOiBodG1sLklIdG1sUHJvZ3Jlc3NFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cTogaHRtbC5JSHRtbFFFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRycDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnRjOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnVieTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2FtcDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNjcmlwdDogaHRtbC5JSHRtbFNjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNlY3Rpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzZWxlY3Q6IGh0bWwuSUh0bWxTZWxlY3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbG90OiBodG1sLklIdG1sU2xvdEVsZW1lbnRQcm9wcztcclxuXHRcdHNtYWxsOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c291cmNlOiBodG1sLklIdG1sU291cmNlRWxlbWVudFByb3BzO1xyXG5cdFx0c3BhbjogaHRtbC5JSHRtbFNwYW5FbGVtZW50UHJvcHM7XHJcblx0XHRzdHJpa2U6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHJvbmc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHlsZTogaHRtbC5JSHRtbFN0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3ViOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VtbWFyeTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0YWJsZTogaHRtbC5JSHRtbFRhYmxlRWxlbWVudFByb3BzO1xyXG5cdFx0dGJvZHk6IGh0bWwuSUh0bWxUYm9keUVsZW1lbnRQcm9wcztcclxuXHRcdHRkOiBodG1sLklIdG1sVGRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZW1wbGF0ZTogaHRtbC5JSHRtbFRlbXBsYXRlRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dGFyZWE6IGh0bWwuSUh0bWxUZXh0YXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdHRmb290OiBodG1sLklIdG1sVGZvb3RFbGVtZW50UHJvcHM7XHJcblx0XHR0aDogaHRtbC5JSHRtbFRoRWxlbWVudFByb3BzO1xyXG5cdFx0dGhlYWQ6IGh0bWwuSUh0bWxUSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdHRpbWU6IGh0bWwuSUh0bWxUaW1lRWxlbWVudFByb3BzO1xyXG5cdFx0dGl0bGU6IGh0bWwuSUh0bWxUaXRsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRyOiBodG1sLklIdG1sVHJFbGVtZW50UHJvcHM7XHJcblx0XHR0cmFjazogaHRtbC5JSHRtbFRyYWNrRWxlbWVudFByb3BzO1xyXG5cdFx0dHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHVsOiBodG1sLklIdG1sVWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmFyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dmlkZW86IGh0bWwuSUh0bWxWaWRlb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHR3YnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0eG1wOiBodG1sLklIdG1sWG1wRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vIFNWRyBlbGVtZW50c1xyXG5cdFx0c3ZnOiBzdmcuSVN2Z1N2Z0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdBOiBzdmcuSVN2Z0FFbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHRcdGFuaW1hdGVNb3Rpb246IHN2Zy5JU3ZnQW5pbWF0ZU1vdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGVUYXJuc2Zvcm06IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cclxuXHRcdGNpcmNsZTogc3ZnLklTdmdDaXJjbGVFbGVtZW50UHJvcHM7XHJcblx0XHRjbGlwUGF0aDogc3ZnLklTdmdDbGlwUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbG9yUHJvZmlsZTogc3ZnLklTdmdDb2xvclByb2ZpbGVQYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRlZnM6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVzYzogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkaXNjYXJkOiBzdmcuSVN2Z0Rpc2NhcmRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZWxsaXBzZTogc3ZnLklTdmdFbGxpcHNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZlQmxlbmQ6IHN2Zy5JU3ZnRmVCbGVuZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29sb3JNYXRyaXg6IHN2Zy5JU3ZnRmVDb2xvck1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IHN2Zy5JU3ZnRmVDb21wb25lbnRUcmFuc2ZlckVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9zaXRlOiBzdmcuSVN2Z0ZlQ29tcG9zaXRlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogc3ZnLklTdmdGZUNvbnZvbHZlTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IHN2Zy5JU3ZnRmVEaWZmdXNlTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogc3ZnLklTdmdGZURpc3BsYWNlbWVudE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBzdmcuSVN2Z0ZlRGlzdGFudExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEcm9wU2hhZG93OiBzdmcuSVN2Z0ZlRHJvcFNoYWRvd0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRmxvb2Q6IHN2Zy5JU3ZnRmVGbG9vZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRnVuY0E6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0c6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY1I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBzdmcuSVN2Z0ZlR2F1c3NpYW5CbHVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVJbWFnZTogc3ZnLklTdmdGZUltYWdlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNZXJnZTogc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcyB8IHN2Zy5JU3ZnRmlsdGVyUHJpbWl0aXZlUHJvcHM7XHJcblx0XHRmZU1lcmdlTm9kZTogc3ZnLklTdmdGZU1lcmdlTm9kZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTW9ycGhvbG9neTogc3ZnLklTdmdGZU1vcnBob2xvZ3lFbGVtZW50UHJvcHM7XHJcblx0XHRmZU9mZnNldDogc3ZnLklTdmdGZU9mZnNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZlUG9pbnRMaWdodDogc3ZnLklTdmdGZVBvaW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IHN2Zy5JU3ZnRmVTcGVjdWxhckxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcG90TGlnaHQ6IHN2Zy5JU3ZnRmVTcG90TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVRpbGU6IHN2Zy5JU3ZnRmVUaWxlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUdXJidWxlbmNlOiBzdmcuSVN2Z0ZlVHVyYnVsZW5jZUVsZW1lbnRQcm9wcztcclxuXHRcdGZpbHRlcjogc3ZnLklTdmdGaWx0ZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JlaWduT2JqZWN0OiBzdmcuSVN2Z0ZvcmVpZ25PYmplY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Zzogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblxyXG5cdFx0aGF0Y2g6IHN2Zy5JU3ZnSGF0Y2hFbGVtZW50UHJvcHM7XHJcblx0XHRoYXRjaHBhdGg6IHN2Zy5JU3ZnSGF0Y2hwYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGltYWdlOiBzdmcuSVN2Z0ltYWdlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxpbmU6IHN2Zy5JU3ZnTGluZUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbmVhckdyYWRpZW50OiBzdmcuSVN2Z0xpbmVhckdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1hcmtlcjogc3ZnLklTdmdNYXJrZXJFbGVtZW50UHJvcHM7XHJcblx0XHRtYXNrOiBzdmcuSVN2Z01hc2tFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhZGF0YTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRtcGF0aDogc3ZnLklTdmdNUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwYXRoOiBzdmcuSVN2Z1BhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRwYXR0ZXJuOiBzdmcuSVN2Z1BhdHRlcm5FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5Z29uOiBzdmcuSVN2Z1BvbHlnb25FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5bGluZTogc3ZnLklTdmdQb2x5bGluZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogc3ZnLklTdmdSYWRpYWxHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHRcdHJlY3Q6IHN2Zy5JU3ZnUmVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdTY3JpcHQ6IHN2Zy5JU3ZnU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2V0OiBzdmcuSVN2Z1NldEVsZW1lbnRQcm9wcztcclxuXHRcdHNvbGlkY29sb3I6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0c3RvcDogc3ZnLklTdmdTdG9wRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnU3R5bGU6IHN2Zy5JU3ZnU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzd2l0Y2g6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cdFx0c3ltYm9sOiBzdmcuSVN2Z1N5bWJvbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0ZXh0OiBzdmcuSVN2Z1RleHRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0UGF0aDogc3ZnLklTdmdUZXh0UGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1RpdGxlOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHRleHRTcGFuOiBzdmcuSVN2Z1RleHRTcGFuRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHVzZTogc3ZnLklTdmdVc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmlldzogc3ZnLklTdmdWaWV3RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vW2VsZW1OYW1lOiBzdHJpbmddOiBhbnlcclxuXHR9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGludHJpbnNpYyBlbGVtZW50cyBhbmQgdG8gZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQXR0cmlidXRlcyBleHRlbmRzIElDb21tb25Qcm9wcyB7fVxyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNDbGFzc0F0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxuXHR7XHJcblx0XHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBpcyBtb3VudGVkLiBUaGVcclxuXHRcdC8vIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRyZWY/OiBSZWZQcm9wVHlwZTxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwianN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUID0gYW55PiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vIFN5bWJvbCB1c2VkIHRvIGtlZXAgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IGluc2lkZSB0aGUgUmVmIGNsYXNzIGluc3RhbmNlLlxyXG5sZXQgc3ltUmVmID0gU3ltYm9sKFwic3ltUmVmXCIpO1xyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VCA9IGFueT5cclxue1xyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzW3N5bVJlZl0gPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZGV0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpc1tzeW1SZWZdOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpc1tzeW1SZWZdICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXNbc3ltUmVmXSA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGUgUmVmPD5cclxuICogaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnRcclxuICoge1xyXG4gKiAgICAgQHJlZiBteURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAqICAgICByZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgc2V0IHRvIHBpbnQgdG8gdGhlIEhUTUwgZGl2IGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVmKCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKVxyXG57XHJcblx0bGV0IGhhbmRsZXIgPSBuZXcgUmVmUHJveHlIYW5kbGVyKCk7XHJcblx0aGFuZGxlci5wcm94eSA9IG5ldyBQcm94eSgge30sIGhhbmRsZXIpO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLFxyXG5cdFx0e1xyXG4gICAgICAgICAgICBzZXQoIHY6IGFueSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5vYmogPSB2O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlci5wcm94eTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS9zeW1ib2wgYmVsb25ncyB0byB0aGUgUmVmIG9iamVjdCBvci4gVGhpcyBpcyBpbnZva2VkXHJcbi8vIGFzIHBhcnQgb2YgdGhlIHByb3h5IGhhbmRsZXIgd2hlcmUgYWNjZXNzIHRvIHN1Y2ggcHJvcGVydGllcyB3aWxsIGJlIHJlZmxlY3RlZCBmcm9tIHRoZSBSZWZcclxuLy8gb2JqZWN0IHdoaWxlIGFsbCBvdGhlcnMgd2lsbCBiZSByZWZsZWN0ZWQgZnJvbSB0aGUgcmVtZW1iZXJlZCByZWZlcmVuY2VkIG9iamVjdC5cclxuZnVuY3Rpb24gY2hvb3NlT2JqZWN0VG9SZWZsZWN0KCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVmOiBSZWYsIG9iajogYW55KTogYW55XHJcbntcclxuICAgIHJldHVybiBwcm9wID09PSBcInJcIiB8fCBwcm9wID09PSBzeW1SZWYgfHwgcHJvcCA9PSBcImNoYW5nZWRFdmVudFwiID8gcmVmIDogb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFJlZlByb3h5SGFuZGxlciBpcyBhIHByb3h5IGhhbmRsZXIgZm9yIHRoZSBSZWYgb2JqZWN0cyBjcmVhdGVkIHdoZW4gcmVmZXJlbmNlIGlzIGRlZmluZWRcclxuICogdXNpbmcgdGhlIEByZWYgZGVjb3JhdG9yLiBPbmx5IHRoZSBcInJcIiBwcm9wZXJ0eSBhcmUgcmVmbGVjdGVkIGZyb20gdGhlIHRhcmdldCBvYmplY3QgKHRoZSBSZWYpO1xyXG4gKiBldmVyeXRoaW5nIGVsc2UgaXMgcmVmbGVjdGVkIGZyb20gdGhlIHJlbWVtYmVyZWQgcmVmZXJlbmNlZCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBSZWZQcm94eUhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICAvLyBLZWVwcyB0aGUgcHJveHkgb2JqZWN0IGZvciB3aGljaCB0aGlzIGlzIHRoZSBoYW5kbGVyXHJcbiAgICBwdWJsaWMgcHJveHk6IGFueTtcclxuXHJcbiAgICAvLyBLZWVwcyB0aGUgcmVmZXJlbmNlZCBvYmplY3Qgb3IgdW5kZWZpbmVkXHJcbiAgICBwdWJsaWMgb2JqOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgPT09IFwiclwiID8gdGhpcy5vYmogOiB0aGlzLm9ialtwcm9wXTtcclxuICAgICAgICAvLyBSZWZsZWN0LmdldCBkb2Vzbid0IHdvcmsgYnV0IHJlZ3VsYXIgcHJvcGVydHkgZ2V0IGRvZXNcclxuICAgICAgICAvLyByZXR1cm4gcHJvcCA9PT0gXCJyXCIgPyB0aGlzLm9iaiA6IFJlZmxlY3QuZ2V0KCB0aGlzLm9iaiwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcCA9PT0gXCJyXCIpXHJcbiAgICAgICAgICAgIHRoaXMub2JqID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9ialtwcm9wXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyBSZWZsZWN0LnNldCBkb2Vzbid0IHdvcmsgYnV0IHJlZ3VsYXIgcHJvcGVydHkgc2V0IGRvZXNcclxuICAgICAgICAvLyByZXR1cm4gUmVmbGVjdC5zZXQoIHRoaXMub2JqLCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCB0aGlzLm9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmluZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIGF0dHJzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMub2JqLCBwcm9wLCBhdHRycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmhhcyggdGhpcy5vYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcm90b3R5cGVPZiggdGFyZ2V0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFeHRlbnNpYmxlKCB0YXJnZXQ6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMub2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bWVyYXRlKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSggUmVmbGVjdC5lbnVtZXJhdGUoIHRoaXMuZW51bWVyYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG93bktleXMoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gVCB8IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRpZiAob25seUlmID09PSB1bmRlZmluZWQgfHwgKHJlZiBhcyBSZWYpLnIgPT09IG9ubHlJZilcclxuXHRcdFx0KHJlZiBhcyBSZWYpLnIgPSB2YWw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdChyZWYgYXMgUmVmRnVuYykodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogRGVmaW5lcyB0eXBlcyBvZiB2aXJ0dWFsIERPTSBub2RlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTlR5cGVcclxue1xyXG5cdC8qKiBUb3AtbGV2ZWwgbm9kZSAqL1xyXG5cdFJvb3QsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGNyZWF0ZWQgdmlhIG5ldyAqL1xyXG5cdEluZGVwZW5kZW50Q29tcCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgbGFpZCBvdXQgdXNpbmcgSlNYICovXHJcblx0TWFuYWdlZENvbXAsXHJcblxyXG5cdC8qKiBTdGF0ZWxlc3MgY29tcG9uZW50IChzaW1wbGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGFjY2VwdGluZyBwcm9wcykgKi9cclxuXHRGdW5jQ29tcCxcclxuXHJcblx0LyoqIERPTSBlbGVtZW50IChIVE1MIG9yIFNWRykgbGFpZCBvdXQgdXNpbmcgSlNYLiAqL1xyXG5cdEVsbSxcclxuXHJcblx0LyoqIFRleHQgbm9kZSAqL1xyXG5cdFRleHQsXHJcblxyXG5cdC8qKiBXcmFwcGVyIGFyb3VuZCBhIGZ1bmN0aW9uL21ldGhvZCB0aGF0IGNhbiBiZSB1cGRhdGVkIGluZGVwZW5kZW50bHkuICovXHJcblx0RnVuY1Byb3h5LFxyXG5cclxuXHQvKiogTm9kZSB0aGF0IHdhaXRzIGZvciBhIHByb21pc2UgdG8gYmUgc2V0dGxlZCBhbmQgdGhlbiBkaXNwbGF5cyB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgY29udGVudC4gKi9cclxuXHRQcm9taXNlUHJveHksXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUuIFRocm91Z2ggdGhpcyBpbnRlcmZhY2UsIGNhbGxlcnMgY2FuIHBlcmZvcm1cclxuICogbW9zdCBjb21tb24gYWN0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgb24gZXZlcnkgdHlwZSBvZiB2aXJ0dWFsIG5vZGUuIEVhY2ggdHlwZSBvZiB2aXJ0dWFsIG5vZGVcclxuICogYWxzbyBpbXBsZW1lbnRzIGEgbW9yZSBzcGVjaWZpYyBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgc3BlY2lmaWMgY2FwYWJpbGl0aWVzIG9mIHRoZSBub2RlXHJcbiAqIHR5cGUgYXJlIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyBub2RlIHR5cGUuICovXHJcblx0cmVhZG9ubHkgdHlwZTogVk5UeXBlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cmVhZG9ubHkgcGFyZW50PzogSVZOb2RlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cmVhZG9ubHkgY3JlYXRvcj86IElDb21wb25lbnQ7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBuZXh0PzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBwcmV2PzogSVZOb2RlO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM/OiBJVk5vZGVbXTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBub2RlJ3MgZGlzcGxheSBuYW1lLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvciByZXBvcnRpbmcuIFRoZSBuYW1lXHJcblx0ICogY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLCBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCJcclxuXHQgKiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRyZWFkb25seSB1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRyZXF1ZXN0VXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdCAqIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRwdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBzZXJ2aWNlOiBJU2VydmljZURlZmluaXRpb25zW0tdKTogdm9pZDtcclxuXHJcblx0LyoqIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gKi9cclxuXHR1bnB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqL1xyXG5cdHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0ICogY29tcG9uZW50IG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdCAqIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0Z2V0U2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sXHJcblx0XHRcdFx0XHR1c2VTZWxmPzogYm9vbGVhbik6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS107XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvXHJcblx0ICogaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIENvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWFuYWdlZENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWFuYWdlZENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbmRlcGVuZGVudENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDQ3VzdG9tIGF0dHJpYnV0ZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2xhc3Mgb2YgaGFuZGxlcnMgb2YgY3VzdG9tIGF0dHJpYnV0ZXNcclxuICogdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy4gVGhlIHJlcXVpcmVtZW50cyBvbiBzdWNoIGNsYXNzZXMgYXJlOlxyXG4gKiAxLiBJbXBsZW1lbnQgYSBjb25zdHJ1Y3RvciBhY2NlcHRpbmcgSUVsbVZOLCBhdHRyaWJ1dGUgdmFsdWUgYW5kIGF0dHJpYnV0ZSBuYW1lICh0aGlzIGFsbG93c1xyXG4gKiAgIHRoZSBzYW1lIGhhbmRsZXIgdG8gc2VydmUgZGlmZmVyZW50IGF0dHJpYnV0ZXMpLlxyXG4gKiAyLiBJbXBsZW1lbnQgdGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciB0aGF0IHdpbGwgYWN0IG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBwcm92aWRlc1xyXG5cdCAqIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIEF0dHJpYnV0ZSBuYW1lIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB0aGUgaGFuZGxlclxyXG5cdCAqIHN1cHBvcnRzIGRpZmZlcmVudCBhdHRyaWJ1dGVzLiBCeSB0aGUgdGltZSB0aGlzIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIERPTSBlbGVtZW50IGhhZFxyXG5cdCAqIGFscmVhZHkgYmVlbiBjcmVhdGVkIGFuZCBzdGFuZGFyZCBhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMgaGFkIGJlZW4gYXBwbGllZC5cclxuXHQgKiBAcGFyYW0gZWxtVk4gVmlydHVhbCBub2RlIGZvciB0aGlzIGVsZW1lbnQuIFRoZSBoYW5kbGVyIGNhbiByZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgZnJvbVxyXG5cdCAqICAgdGhpcyBpbnRlcmZhY2UgYW5kIGFsc28gdXNlIG90aGVyIG1ldGhvZHMgKGUuZy4gc3Vic2NyaWJlIHRvIHNlcnZpY2VzKS5cclxuXHQgKiBAcGFyYW0gYXR0clZhbCBJbml0aWFsIHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICogQHBhcmFtIGF0dHJOYW1lIE5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRuZXcoIGVsbVZOOiBJRWxtVk4sIGF0dHJWYWw6IFQsIGF0dHJOYW1lPzogc3RyaW5nKTogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyBhbiBleGlzdGluZyBjdXN0b20gYXR0cmlidXRlIHdpdGggdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcFZhbCBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiBjaGFuZ2VzIHdlcmUgbWFkZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSggbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlcm1pbmF0ZXMgdGhlIGZ1bmN0aW9uaW5nIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgZWl0aGVyXHJcblx0ICogd2hlbiBhIG5ldyByZW5kZXJpbmcgb2YgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIHRoZSBhdHRyaWJ1dGUgYW55bW9yZSBvciBpZiB0aGUgZWxlbWVudFxyXG5cdCAqIGlzIHJlbW92ZWQuIEFsdGhvdWdoIHRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLCBtb3N0IGhhbmRsZXJzIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgaXQgdG9cclxuXHQgKiBwcm9wZXJseSBjbGVhbnVwIGFueSByZXNvdXJjZXMgKGUuZy4gZXZlbnQgaGFuZGxlcnMpIHRvIGF2b2lkIGxlYWtzLlxyXG5cdCAqIEBwYXJhbSBpc1JlbW92YWwgVHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyByZW1vdmVkIGFuZCBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZ1xyXG5cdCAqICAgdXBkYXRlZCBhbmQgdGhlIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgcHJvdmlkZWQuIElmIHRoZSBoYW5kbGVyIGFkZHMgYW55IGV2ZW50XHJcblx0ICogICBsaXN0ZW5lcnMgdG8gdGhlIGVsZW1lbnQsIHRoZW4gaXQgaGFzIHRvIHJlbW92ZSB0aGVtIG9uIHVwZGF0ZSBidXQgZG9lbid0IGhhdmUgdG8gZG8gaXRcclxuXHQgKiAgIG9uIGVsZW1lbnQgcmVtb3ZhbC5cclxuXHQgKi9cclxuXHR0ZXJtaW5hdGU/KCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIGNsYXNzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIGF0dHJpYnV0ZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBhdHRyTmFtZTogc3RyaW5nLCBoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGF0dHJOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGhhbmRsZXJDbGFzcyB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gZXZlbnQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21FdmVudCggZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGV2ZW50TmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBjb21wb25lbnQgY2xhc3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLCB1bmRlZmluZWQsIHRoaXMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiBhIG5vbi1hcnJheSBwYXJhbWV0ZXIgaXMgcGFzc2VkIGluIHJlcS5hcmdzLCB3ZSB3cmFwIGl0IGluIGFuIGFycmF5XHJcblx0XHRcdFx0XHRGdW5jUHJveHlWTi51cGRhdGUoIHJlcS5mdW5jLCByZXEua2V5LCByZXEudGhpc0FyZyA/IHJlcS50aGlzQXJnIDogdGhpcyxcclxuXHRcdFx0XHRcdFx0IXJlcS5hcmdzIHx8IEFycmF5LmlzQXJyYXkocmVxLmFyZ3MpID8gcmVxLmFyZ3MgOiBbcmVxLmFyZ3NdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIHRoZSBNaW1ibCB0aWNrIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIGZ1bmN0aW9uXHJcblx0ICogICBpcyBhbHJlYWR5IGJvdW5kIG9yIGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWVCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgaGF2ZSBhbHJlYWR5IGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBJZiB0aGlzXHJcblx0ICogICBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdXNlZCAod2hpY2ggYWxsb3dzIHNjaGVkdWxpbmdcclxuXHQgKiAgIHJlZ3VsYXIgdW5ib3VuZCBjb21wb25lbnRzJyBtZXRob2RzKS4gVGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bilcclxuXHRcdFx0dGhpcy52bi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIGNvbXBvbmVudCB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMudm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQnVpbHQgaW4gY29tcG9uZW50c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiRnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlIGZ1bmN0aW9uIGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IG5lZWRlZFxyXG4gKiBiZWNhdXNlIGN1cnJlbnRseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdGhlIGA8PmAgZnJhZ21lbnQgbm90YXRpb24gaWYgYSBjdXN0b20gSlNYIGZhY3RvcnlcclxuICogZnVuY3Rpb24gaXMgdXNlZC5cclxuICpcclxuICogVXNlIGl0IGFzIGZvbGxvd3M6XHJcbiAqIGBgYHRzeFxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxGcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9GcmFnbWVudD5cclxuICpcdH1cclxuICBgYGBcclxuXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudCggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbHVlIHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGVcclxuXHQgKiBjbGFzcyBiYXNlZCBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgKHdoaWNoIGlzIHRoZVxyXG5cdCAqIG1vc3QgY29tbW9uIGNhc2UpLlxyXG5cdCAqL1xyXG5cdHRoaXNBcmc/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBuZWVkZWQgaW4gdGhlIGNhc2Ugd2hlcmUgb25lIChvciBtb3JlKSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XHJcbiAqIC0gVGhlcmUgaXMgYSBuZWVkIHRvIHBhc3MgYXJndW1lbnRzIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAtIFRoZSBzYW1lIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMgYW5kIGtleXMgbXVzdCBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlXHJcbiAqIGludm9jYXRpb25zLlxyXG4gKiAtIFRoZSB2YWx1ZSBvZiBcInRoaXNcIiBpbnNpZGUgdGhlIGZ1bmN0aW9uIGlzIG5vdCB0aGUgY29tcG9uZW50IHRoYXQgZG9lcyB0aGUgcmVuZGVyaW5nLiBUaGF0XHJcbiAqIGlzLCB0aGUgZnVuY3Rpb24gaXMgbm90IGEgbWV0aG9kIG9mIHRoaXMgY29tcG9uZW50LlxyXG4gKiBcclxuICogRnVuY1Byb3h5IGhhcyBhIHB1YmxpYyBzdGF0aWMgVXBkYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSBjYWxsZWQgdG8gY2F1c2UgdGhlIHJlbmRlcmluZyBtZWNoYW5pc21cclxuICogdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5IGV4dGVuZHMgQ29tcG9uZW50PEZ1bmNQcm94eVByb3BzLHZvaWQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogRnVuY1Byb3h5UHJvcHMpIHsgc3VwZXIocHJvcHMpIH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3QgcmUtcmVuZGVyaW5nIG9mIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBnaXZlbiBmdW5jdGlvbiBieSBpbnZva2luZyB0aGlzXHJcblx0ICogZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiBtdXN0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHVzZWQgaW4gcmVuZGVyaW5nIHVzaW5nIGVpdGhlclxyXG5cdCAqIDxGdW5jUHJveHkgZnVuYz17fSAvPiBKU1ggY29uc3RydWN0IG9yIGEgc2ltcGxlciBjb25zdHVjdFxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGludm9rZS5cclxuXHQgKiBAcGFyYW0ga2V5IFZhbHVlIHRoYXQgaGVscHMgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBtdWx0aXBsZSB1c2FnZXMgb2YgdGhlIGZ1bmN0aW9uLlxyXG5cdCAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCAuLi5hcmdzOiBhbnlbXSlcclxuXHR7XHJcblx0XHRGdW5jUHJveHlWTi51cGRhdGUoIGZ1bmMsIGtleSwgdGhpc0FyZywgYXJncyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdXBwb3J0IGZvciBwcm9taXNlcyByZXR1cm5lZCBhcyBjb250ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRvIGJlIHVzZWQgd2l0aCB0aGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvbWlzZVByb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBQcm9taXNlIHRoYXQgd2lsbCBiZSB3YXRjaCBieSB0aGUgd2FpdGluZyBub2RlLiAqL1xyXG5cdHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0LyoqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLiAqL1xyXG5cdGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgd3JhcHMgYSBQcm9taXNlIGFuZCByZXBsYWNlcyBpdHMgY29udGVudCB3aGVuIHRoZSBwcm9taXNlIGlzIHNldHRsZWQuXHJcbiAqIEJlZm9yZSB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLCB0aGUgY29tcG9uZW50IGRpc3BsYXlzIGFuIG9wdGlvbmFsIFwiaW4tcHJvZ3Jlc3NcIiBjb250ZW50XHJcbiAqIHNwZWNpZmllZCBhcyBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgdGhlIGNvbXBvbmVudCB3aWxsIGVpdGhlclxyXG4gKiBkaXNwbGF5IHRoZSBcImVycm9yXCIgY29udGVudCBvYnRhaW5lZCBieSBjYWxsaW5nIGEgZnVuY3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgcHJvcGVydGllcyBvciwgaWZcclxuICogc3VjaCBmdW5jdGlvbiBpcyBub3Qgc3BlY2lmaWVkLCBkaXNwbGF5IG5vdGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5IGV4dGVuZHMgQ29tcG9uZW50PFByb21pc2VQcm94eVByb3BzPlxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdGFuY2VzIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGFyZSBuZXZlciBhY3R1YWxseSBjcmVhdGVkOyBpc3RlYWQsIHRoZSBwYXJhbWV0ZXJzXHJcblx0ICogcGFzc2VkIHRvIGl0IHZpYSBKU1ggYXJlIHVzZWQgYnkgYW4gaW50ZXJuYWwgdmlydHVhbCBub2RlIHRoYXQgaGFuZGxlcyBmdW5jdGlvblxyXG5cdCAqIGludm9jYXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggcHJvcHM6IFByb21pc2VQcm94eVByb3BzKSB7IHN1cGVyKCBwcm9wcyk7IH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIG1vdW50L3VubW91bnQgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50XHJcbi8vIGFzeW5jaHJvbm91c2x5LlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsdGhlblxyXG4gKlx0XHRcdFx0cmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRtb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0dW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgLSB1c2UgYEB0cmlnZ2VyYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDbGFzc0NvbXBWTiwgSUNvbXBvbmVudCwgVXBkYXRlU3RyYXRlZ3l9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtjcmVhdGVXYXRjaGVyLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBDb21wQmFzZVZOIGlzIGEgYmFzZSBjbGFzcyBmb3IgSW5zdGFuY2VWTiBhbmQgQ2xhc3NWTi4gSXQgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW4gdGVybXMgb2YgdXBkYXRlIHJlcXVlc3RzIGFuZCBsaWZlY3ljbGUgbWFuYWdlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc0NvbXBWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIElDbGFzc0NvbXBWTlxyXG57XHJcblx0Ly8gQ29tcG9uZW50IGluc3RhbmNlLlxyXG5cdHB1YmxpYyBjb21wOiBJQ29tcG9uZW50O1xyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHVwZGF0ZVN0cmF0ZWd5KCk6IFVwZGF0ZVN0cmF0ZWd5XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSA/IHRoaXMuY29tcC5nZXRVcGRhdGVTdHJhdGVneSgpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIHJlbmRlcigpIG9uIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyV2F0Y2hlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC52biA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGRvbid0IG5lZWQgdHJ5L2NhdGNoIGJlY2F1c2UgaXQgd2lsbCBiZSBjYXVnaHQgdXAgdGhlIGNoYWluXHJcblx0XHRpZiAodGhpcy5jb21wLndpbGxNb3VudClcclxuXHRcdFx0dGhpcy5jb21wLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmNvbXAucmVuZGVyLCB0aGlzLnJlcXVlc3RVcGRhdGUsIHRoaXMuY29tcCwgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wLndpbGxVbm1vdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbmVlZCB0cnkvY2F0Y2ggYnV0IG9ubHkgdG8gbG9nXHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAud2lsbFVubW91bnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXhjZXB0aW9uIGluIHdpbGxVbm1vdW50IG9mIGNvbXBvbmVudCAnJHt0aGlzLm5hbWV9J2AsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5jb21wLnZuID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jb21wID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcC5kaWRNb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdHJ5L2NhdGNoIGJ1dCBvbmx5IHRvIGxvZ1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLmRpZE1vdW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBpbiBkaWRNb3VudCBvZiBjb21wb25lbnQgJyR7dGhpcy5uYW1lfSdgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gV2F0Y2hlciBmdW5jdGlvbiB3cmFwcGluZyB0aGUgY29tcG9uZW50J3MgcmVuZGVyIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnlcclxuICAgIC8vIHRyaWdnZXIgb2JqZWN0cyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlXHJcbiAgICAvLyB0aHVzIHRyaWdnZXJyaW5nIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIHJlbmRlcldhdGNoZXI6IElXYXRjaGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBJRWxtVk4sIFZOVHlwZSwgc2V0UmVmLCBFdmVudEZ1bmNUeXBlLCBVcGRhdGVTdHJhdGVneSwgUmVmUHJvcFR5cGUsIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyXHJcbn0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1xyXG4gICAgVk5CYXNlLCBETiwgVk4sIFZOVXBkYXRlRGlzcCwgc19kZWVwQ29tcGFyZSwgUHJvcEluZm8sIFByb3BUeXBlLFxyXG4gICAgRWxtQXR0ciwgQ3VzdG9tQXR0clByb3BJbmZvLCBBdHRyUHJvcEluZm8sXHJcbiAgICBFdmVudFByb3BJbmZvfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgRE9NIGVsZW1lbnQgY3JlYXRlZCB1c2luZyBKU1guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJRWxtVk5cclxue1xyXG5cdC8vIFRhZyBuYW1lIG9mIGFuIEVsZW1lbnQuXHJcblx0cHVibGljIGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC4gVGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQgd2hlbiB0aGUgbm9kZSBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0XHJcblx0Ly8gdGltZS5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgRWxlbWVudCBpcyBTVkcgKGFzIG9wcG9zZWQgdG8gSFRMTSkuIFRoZXJlIGFyZSBzb21lIFNWR1xyXG5cdC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFzIHJlZ3VsYXIgZWxlbWVudHMgKGUuZy4gPGE+KS4gVGhlcmVmb3JlLCBpbiBvcmRlciB0b1xyXG5cdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIG5vdCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBuYW1lc3BhY2VVUkkgb2YgdGhlIHBhcmVudFxyXG5cdC8vIChhbmNob3JlKSBET00gbm9kZS5cclxuXHRwdWJsaWMgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLkVsbTtcclxuXHRcdHRoaXMuZWxtTmFtZSA9IHRhZ05hbWU7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIGtleSBwcm9wZXJ0eS4gSWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3RcclxuXHRcdFx0Ly8gc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0XHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5FbG07IH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZWxlbWVudCdzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZWxtTmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiBhbmQgbm90IHRvIGFueSBvZiBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy5lbG07IH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBIVE1MIGVsZW1lbnQgYW5kIGNyZWF0ZSB0aGUgZWxlbWVudFxyXG5cdFx0bGV0IHN2Z0luZm8gPSBTdmdFbG1zLmdldFN2Z0VsbUluZm8oIHRoaXMuZWxtTmFtZSk7XHJcblx0XHR0aGlzLmlzU3ZnID0gc3ZnSW5mbyAhPT0gdW5kZWZpbmVkICYmIChzdmdJbmZvICE9PSB0cnVlIHx8IHRoaXMuYW5jaG9yRE4ubmFtZXNwYWNlVVJJLmVuZHNXaXRoKCBcInN2Z1wiKSk7XHJcblx0XHR0aGlzLmVsbSA9IHRoaXMuaXNTdmdcclxuXHRcdFx0PyB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggU3ZnRWxtcy5uYW1lc3BhY2UsIFN2Z0VsbXMuZ2V0RWxtTmFtZSggc3ZnSW5mbywgdGhpcy5lbG1OYW1lKSlcclxuXHRcdFx0OiB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHRoaXMuZWxtTmFtZSk7XHJcblxyXG5cdFx0Ly8gdHJhbnNsYXRlIHByb3BlcnRpZXMgaW50byBhdHRyaWJ1dGVzLCBldmVudHMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5hdHRycylcclxuXHRcdFx0dGhpcy5hZGRBdHRycygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5hZGRDdXN0b21BdHRycygpO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSAoaWYgc3BlY2lmaWVkKVxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbGVhc2VzIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgZWxlbWVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgZWxlbWVudCAoYW5kL29yIGNvbXBvbmVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMuIFNpbmNlIG1vZGVybiBicm93c2VycyBkb24ndCBsZWFrIHdoZW4gbGlzdGVuZXJzIGFyZSBub3RcclxuXHRcdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudHMoKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGlzIGlzIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudDsgdGhhdCBpcywgaXQgaGFzIHRoZSBzYW1lXHJcblx0XHQvLyBuYW1lLlxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtTmFtZSA9PT0gKG5ld1ZOIGFzIEVsbVZOKS5lbG1OYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgbmV3IHByb3BzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCBvbmVzXHJcblx0XHRsZXQgc2hvdWxkQ29tbWl0ID0gIXNfZGVlcENvbXBhcmUoIHRoaXMucHJvcHMsIChuZXdWTiBhcyBFbG1WTikucHJvcHMpO1xyXG5cclxuXHRcdC8vIHJlbmRlciBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBlaXRoZXIgb2xkIG9yIG5ldyBub2RlIGhhcyBjaGlsZHJlblxyXG5cdFx0bGV0IHNob3VsZFJlbmRlciA9IHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwIHx8XHJcblx0XHRcdFx0XHQobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuICYmIChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IChuZXdWTiBhcyBFbG1WTikucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbjtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5LCB1cGRhdGVTdGFydGVneSBhbmQgY3JlYXRvciBwcm9wZXJ0eSAoZXZlbiBpZiB0aGVcclxuXHRcdC8vIHZhbHVlcyBhcmUgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0VsbVZOLmtleTtcclxuXHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBuZXdFbG1WTi51cGRhdGVTdHJhdGVneTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZUF0dHJzKCBuZXdFbG1WTi5hdHRycyk7XHJcblx0XHR0aGlzLnVwZGF0ZUV2ZW50cyggbmV3RWxtVk4uZXZlbnRzKTtcclxuXHRcdHRoaXMudXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0VsbVZOLmN1c3RvbUF0dHJzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyBvdmVyIHRoZSBvcmlnaW5hbCBwcm9wZXJ0aWVzIGFuZCBwdXRzIHRoZW0gaW50byB0aGUgYnVja2V0cyBvZiBhdHRyaWJ1dGVzLCBldmVudFxyXG5cdC8vIGxpc3RlbmVycyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBwYXJzZVByb3BzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucHJvcHMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcHJvcFZhbDogYW55LCBwcm9wSW5mbzogUHJvcEluZm8sIHByb3BUeXBlOiBQcm9wVHlwZTtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlnbm9yZSB0aGUga2V5IHByb3BlcnR5IGJlY2F1c2Ugd2UgYWxyZWFkeSBleHRyYWN0ZWQgaXQgaW4gdGhlIGNvbnN0cnVjdG9yXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByb3BWYWwgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BWYWwgPT0gbnVsbCB8fCBwcm9wVmFsID09PSBmYWxzZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCwgbnVsbCBhbmQgZmFsc2VcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJ1cGRhdGVTdHJhdGVneVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdXBkYXRlU3RyYXRlZ3kgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3BlcnR5IGFuZCBkZXRlcm1pbmUgaXRzIHR5cGUgKHJlZ3VsYXIgYXR0cmlidXRlLCBldmVudFxyXG5cdFx0XHRcdC8vIG9yIGN1c3RvbSBhdHRyaWJ1dGUpLiBOb3RlIHRoYXQgZ2V0UHJvcGVydHlJbmZvIG1heSByZXR1cm4gbnVsbCBvbmx5IGZvciByZWd1bGFyXHJcblx0XHRcdFx0Ly8gYXR0cmlidXRlcy5cclxuXHRcdFx0XHRwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdFx0cHJvcFR5cGUgPSBwcm9wSW5mbyA/IHByb3BJbmZvLnR5cGUgOiBQcm9wVHlwZS5BdHRyO1xyXG5cdFx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8sIHZhbDogcHJvcFZhbCB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIHByb3BJbmZvLCBwcm9wVmFsKTtcclxuXHRcdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMgPSB7fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHNbcHJvcE5hbWVdID0gZXZlbnRJbmZvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyOiB1bmRlZmluZWR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRBdHRycyBjYWxsZWQgd2l0aCB0aGlzLmF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuYXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydGQgPSB0aGlzLmF0dHJzW25hbWVdO1xyXG5cdFx0XHRFbG1BdHRyLnNldEF0dHIoIHRoaXMuZWxtLCBuYW1lLCBydGQuaW5mbywgcnRkLnZhbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgRE9NIGF0dHJpYnV0ZXMgb2YgdGhpcyBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlQXR0cnMoIG5ld0F0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBcImNhY2hlXCIgc2V2ZXJhbCBtZW1lYmVycyBmb3IgZmFzdGVyIGFjY2Vzc1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtO1xyXG5cdFx0bGV0IG9sZEF0dHJzID0gdGhpcy5hdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgYXR0cmlidXRlcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3IG9uZXMgYW5kXHJcblx0XHQvLyB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRBdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRBdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRSVEQgPSBvbGRBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnMgPyBuZXdBdHRyc1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld1JURCB8fCAhbmV3UlRELnZhbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIGF0dHJpYnV0ZSBmcm9tIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0XHRFbG1BdHRyLnJlbW92ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGhhcyBhIGRpZmZlcmVudCB2YWx1ZSwgcmVtbWViZXIgdGhpc1xyXG5cdFx0XHRcdFx0Ly8gdmFsdWUgYW5kIHNldCBpdCB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0XHRFbG1BdHRyLnVwZGF0ZUF0dHIoIGVsbSwgbmFtZSwgb2xkUlRELmluZm8sIG9sZFJURC52YWwsIG5ld1JURC52YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgYXR0cmlidXRlczsgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdBdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdBdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRBdHRycyAmJiAobmFtZSBpbiBvbGRBdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzW25hbWVdO1xyXG5cdFx0XHRcdEVsbUF0dHIuc2V0QXR0ciggZWxtLCBuYW1lLCBuZXdSVEQuaW5mbywgbmV3UlRELnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmF0dHJzID0gbmV3QXR0cnM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgaW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkRXZlbnRzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVc2luZyB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZSBhbmQgaXRzIHZhbHVlIHNldCB0aGUgYXBwcm9wcmlhdGUgYXR0cmlidXRlKHMpIG9uIHRoZVxyXG5cdC8vIGVsZW1lbnQuIFRoaXMgbWV0aG9kIGhhbmRsZXMgc3BlY2lhbCBjYXNlcyBvZiBwcm9wZXJ0aWVzIHdpdGggbm9uLXRyaXZpYWwgdmFsdWVzLlxyXG5cdHByaXZhdGUgYWRkRXZlbnQoIG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0ZXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMuIFNpbmNlIG1vZGVybiBicm93c2VycyBkb24ndCBsZWFrIHdoZW4gbGlzdGVuZXJzIGFyZSBub3RcclxuXHRcdC8vIGV4cGxpY2l0bHkgcmVtb3ZlZCwgd2UgZG8gaXQgdW5kZXIgdGhlIFJFTU9WRV9FVkVOVF9MSVNURU5FUlMgbWFjcm8gKHRoYXQgaXMsIHdlXHJcblx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRwcml2YXRlIHJlbW92ZUV2ZW50cygpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgdGhpcy5ldmVudHNbbmFtZV0pO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlRXZlbnQoIG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3RXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkRXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRFdmVudCA9IG9sZEV2ZW50c1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3RXZlbnQgPSBuZXdFdmVudHMgPyBuZXdFdmVudHNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdFdmVudClcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCwgbmV3RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3RXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0V2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRFdmVudHMgJiYgKG5hbWUgaW4gb2xkRXZlbnRzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdFdmVudHNbbmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHMgPSBuZXdFdmVudHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRFdmVudDogRXZlbnRSdW5UaW1lRGF0YSwgbmV3RXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZG91YmxlLWVxdWFsLXNpZ24gZm9yIHVzZUNhcHR1cmUgaXMgb24gcHVycG9zZSwgYmVjYXVzZSB1c2VDYXB0dXJlIGNhbiBiZSB1bmRlZmluZWQgb3IgYm9vbGVhblxyXG5cdFx0aWYgKG9sZEV2ZW50Lm9yZ0Z1bmMgPT09IG5ld0V2ZW50Lm9yZ0Z1bmMgJiZcclxuXHRcdFx0b2xkRXZlbnQudGhhdCA9PT0gbmV3RXZlbnQudGhhdCAmJlxyXG5cdFx0XHRvbGRFdmVudC51c2VDYXB0dXJlID09IG5ld0V2ZW50LnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSBvbGRFdmVudC53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbW92ZSBvbGQgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkRXZlbnQud3JhcHBlciwgb2xkRXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgbmV3IHdyYXBwZXIgYW5kIGFkZCBpdCBhcyBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIG5ld0V2ZW50KTtcclxuXHRcdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgbmV3RXZlbnQud3JhcHBlciwgbmV3RXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyLiBUaGUgd3JhcHBlciBpcyBib3VuZCB0b1xyXG5cdC8vIHRoZSBpbnN0YW5jZSBvZiBFbG1WTiBhbmQgdGh1cyBjYW4gaW50ZXJjZXB0IGV4Y2VwdGlvbnMgYW5kIHByb2Nlc3MgdGhlbSB1c2luZyB0aGUgc3RhbmRhcmRcclxuXHQvLyBlcnJvciBzZXJ2aWNlLiBVbmxlc3MgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGFscmVhZHkgYSBib3VuZCBmdW5jdGlvbiwgaXQgd2lsbCBiZSBjYWxsZWRcclxuXHQvLyB3aXRoIFwidGhpc1wiIHNldCB0byBlaXRoZXIgdGhlIFwiZXZlbnQudGhhdFwiIG9iamVjdCBvciwgaWYgdGhlIGxhdHRlciBpcyB1bmRlZmluZWQsIHRvIHRoZVxyXG5cdC8vIFwiY3JlYXRvclwiIG9iamVjdCwgd2hpY2ggaXMgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQgaSBpdHMgcmVuZGVyXHJcblx0Ly8gbWV0aG9kLlxyXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IEV2ZW50RnVuY1R5cGU8RXZlbnQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMud3JhcENhbGxiYWNrKCBldmVudC5vcmdGdW5jLCBldmVudC50aGF0ID8gZXZlbnQudGhhdCA6IHRoaXMuY3JlYXRvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcblx0cHJpdmF0ZSBhZGRDdXN0b21BdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgY3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgY3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggaXNSZW1vdmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgdXBkYXRlQ3VzdG9tQXR0cnMoIG5ld0N1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkQ3VzdG9tQXR0cnMgPSB0aGlzLmN1c3RvbUF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBjdXN0b20gcHJvcGVydGllcywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IG9sZEN1c3RvbUF0dHIgPSBvbGRDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb25zdCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnMgPyBuZXdDdXN0b21BdHRyc1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0N1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gdGVybWluYXRlIGl0cyBoYW5kbGVyXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnRlcm1pbmF0ZSggZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHRlcm1pbmF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjdXN0b20gcHJvcGVydHkgYW5kIHJlbWVtYmVyIHRoZSBuZXcgdmFsdWVcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudXBkYXRlKCBuZXdDdXN0b21BdHRyLnZhbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdXBkYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG9sZEN1c3RvbUF0dHIuaGFuZGxlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0N1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEN1c3RvbUF0dHJzICYmIChuYW1lIGluIG9sZEN1c3RvbUF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IG5ld0N1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIG5ld0N1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHRkZWxldGUgbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1c3RvbUF0dHJzID0gbmV3Q3VzdG9tQXR0cnM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBVcGRhdGVTdHJhdGVneSBvYmplY3QgZGVmaW5pbmcgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHRwdWJsaWMgdXBkYXRlU3RyYXRlZ3k6IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LiBUaGUgcmVmIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIG9uIHVwZGF0ZS5cclxuXHRwcml2YXRlIHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjdXJyZW50IHZhbHVlcy5cclxuXHRwcml2YXRlIGF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBBdHRyUnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVpciByZXNwZWN0aXZlXHJcblx0Ly8gcGFyYW1ldGVycy5cclxuXHRwcml2YXRlIGV2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBjdXN0b20gZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCB0aGVpciByZXNwZWN0aXZlXHJcblx0Ly8gaGFuZGxlciBvYmplY3RzIGFuZCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBjdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIHJlZ3VsYXIgYXR0cmlidXRlXHJcbmludGVyZmFjZSBBdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgYXR0cmlidXRlIC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBBdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dmFsOiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBldmVudCBsaXN0ZW5lclxyXG5pbnRlcmZhY2UgRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBldmVudCAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogRXZlbnRQcm9wSW5mbztcclxuXHJcblx0Ly8gT3JpZ2luYWwgZXZlbnQgY2FsbGJhY2sgcGFzc2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgZXZlbnQgcHJvcGVydHkgaW4gSlNYXHJcblx0b3JnRnVuYzogRXZlbnRGdW5jVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCB3aWxsIGJlIHJlZmVyZW5jZWQgYnkgXCJ0aGlzXCIgd2l0aGluIHRoZSBpbnZva2VkIGZ1bmN0aW9uXHJcblx0dGhhdD86IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR1c2VDYXB0dXJlPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gV3JhcHBlciBmdW5jdGlvbiB0aGF0IHdlIGNyZWF0ZSBhbmQgYmluZCB0byBvdXIgbm9kZSBhbmQgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBXZSBuZWVkXHJcblx0Ly8gdGhpcyB3cmFwcGVyIGluIG9yZGVyIHRvIGNhdGNoIGV4Y2VwdGlvbiBpbiB0aGUgY2FsbGJhY2sgYW5kIHBhc3MgdGhlbSBvbiB0byBhbiBlcnJvclxyXG5cdC8vIGhhbmRsaW5nIHNlcnZpY2UuIFRoZSB3cmFwcGVyIGlzIG1hcmtlZCBvcHRpb25hbCBiZWNhdXNlIGl0IGlzIGNyZWF0ZWQgb25seSBpZiBhIG5ld1xyXG5cdC8vIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkOyB0aGF0IGlzLCBpZiBkdXJpbmcgdXBkYXRlLCB0aGUgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gaXMgdGhlXHJcblx0Ly8gc2FtZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBjcmVhdGUgbmV3IHdyYXBwZXIgYmVjYXVzZSB0aGUgb2xkIG9uZSB3aWxsIGJlIHVzZWQuXHJcblx0d3JhcHBlcj86ICBFdmVudEZ1bmNUeXBlPEV2ZW50PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG4vLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsIGFzIEV2ZW50RnVuY1R5cGU8YW55PiB9O1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0e1xyXG5cdFx0aWYgKHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodHlwZW9mIHByb3BWYWxbMV0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgRXZlbnRGdW5jVHlwZTxhbnk+LCB1c2VDYXB0dXJlOiBwcm9wVmFsWzFdIGFzIGJvb2xlYW4gfTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMylcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBFdmVudEZ1bmNUeXBlPGFueT4sIHRoYXQ6IHByb3BWYWxbMV0sIHVzZUNhcHR1cmU6IHByb3BWYWxbMl0gYXMgYm9vbGVhbiB9O1xyXG5cdH1cclxuXHJcblx0Ly8gZm9yIGFsbCBvdGhlciB0eXBlIGNvbWJpbmF0aW9ucyB0aGUgcHJvcGVydHkgaXMgbm90IHRyZWF0ZWQgYXMgYW4gZXZlbnQgaGFuZGxlclxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFN2Z0VsbXNcclxue1xyXG5cdC8vIE5hbWVzcGFjZSB1c2VkIHRvIGNyZWF0ZSBTVkcgZWxlbWVudHMuXHJcblx0cHVibGljIHN0YXRpYyBuYW1lc3BhY2U6IHN0cmluZyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIFNWRyB0YWdcclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKCB0YWdOYW1lOiBzdHJpbmcsIGluZm86IFN2Z0VsbUluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0U3ZnRWxtcy5pbmZvc1t0YWdOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgY2FuIGJlIHVzZWQgYXMgYW4gU1ZHIGVsZW1lbnQgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGlzU3ZnRWxtKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRhZ05hbWUgaW4gU3ZnRWxtcy5pbmZvcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBnaXZlbiB0YWcgbmFtZS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN2Z0VsbUluZm8oIHRhZ05hbWU6IHN0cmluZyk6IFN2Z0VsbUluZm8gfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRyZXR1cm4gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBpbmZvcm1hdGlvbiBvYmplY3QgaGFzIHRoZSBcImR1YWwtcHVycG9zZVwiIGZsYWcgc2V0LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNEdWFsUHVycG9zZSggaW5mbzogU3ZnRWxtSW5mbyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAxID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzFdIDogZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGZhbHNlIDogaW5mbyBhcyBib29sZWFuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGlzIGEgXCJkdWFsLXB1cnBvc2VcIiBlbGVtZW50OyB0aGF0IGlzIGNhbiBiZSBlaXRoZXJcclxuXHQvLyBIVE1MIGFuZCBTVkcgZWxlbWVudC5cclxuXHRwdWJsaWMgc3RhdGljIGlzVGFnRHVhbFB1cnBvc2UoIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuaXNEdWFsUHVycG9zZSggaW5mbykgOiBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gb2JqZWN0IGFuZCB0aGUgdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWUoIGluZm86IFN2Z0VsbUluZm8sIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDAgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMF0gOiB0YWdOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBpbmZvIGFzIHN0cmluZyA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgdGhlIGdpdmVuIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lRm9yVGFnKCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogU3ZnRWxtSW5mbyA9IFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0XHRyZXR1cm4gaW5mbyA/IFN2Z0VsbXMuZ2V0RWxtTmFtZSggaW5mbywgdGFnTmFtZSkgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIFNWRyBlbGVtZW50IG5hbWVzIHRvIFN2Z0VsbUluZm8uXHJcblx0cHJpdmF0ZSBzdGF0aWMgaW5mb3M6IHtbZWxtTmFtZTpzdHJpbmddOiBTdmdFbG1JbmZvfSA9XHJcblx0e1xyXG5cdFx0c3ZnOiBmYWxzZSxcclxuXHJcblx0XHRhOiB0cnVlLFxyXG5cdFx0YW5pbWF0ZTogZmFsc2UsXHJcblx0XHRhbmltYXRlTW90aW9uOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVUcmFuc2Zvcm06IGZhbHNlLFxyXG5cclxuXHRcdGNpcmNsZTogZmFsc2UsXHJcblx0XHRjbGlwUGF0aDogZmFsc2UsXHJcblx0XHRjb2xvclByb2ZpbGU6IFwiY29sb3ItcHJvZmlsZVwiLFxyXG5cclxuXHRcdGRlZnM6IGZhbHNlLFxyXG5cdFx0ZGVzYzogZmFsc2UsXHJcblx0XHRkaXNjYXJkOiBmYWxzZSxcclxuXHJcblx0XHRlbGxpcHNlOiBmYWxzZSxcclxuXHJcblx0XHRmZUJsZW5kOiBmYWxzZSxcclxuXHRcdGZlQ29sb3JNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2ZlcjogZmFsc2UsXHJcblx0XHRmZUNvbXBvc2l0ZTogZmFsc2UsXHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBmYWxzZSxcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlRHJvcFNoYWRvdzogZmFsc2UsXHJcblx0XHRmZUZsb29kOiBmYWxzZSxcclxuXHRcdGZlRnVuY0E6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQjogZmFsc2UsXHJcblx0XHRmZUZ1bmNHOiBmYWxzZSxcclxuXHRcdGZlRnVuY1I6IGZhbHNlLFxyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IGZhbHNlLFxyXG5cdFx0ZmVJbWFnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2VOb2RlOiBmYWxzZSxcclxuXHRcdGZlTW9ycGhvbG9neTogZmFsc2UsXHJcblx0XHRmZU9mZnNldDogZmFsc2UsXHJcblx0XHRmZVBvaW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBmYWxzZSxcclxuXHRcdGZlU3BvdExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlVGlsZTogZmFsc2UsXHJcblx0XHRmZVR1cmJ1bGVuY2U6IGZhbHNlLFxyXG5cdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdGZvcmVpZ25PYmplY3Q6IGZhbHNlLFxyXG5cclxuXHRcdGc6IGZhbHNlLFxyXG5cclxuXHRcdGhhdGNoOiBmYWxzZSxcclxuXHRcdGhhdGNocGF0aDogZmFsc2UsXHJcblxyXG5cdFx0aW1hZ2U6IGZhbHNlLFxyXG5cclxuXHRcdGxpbmU6IGZhbHNlLFxyXG5cdFx0bGluZWFyR3JhZGllbnQ6IGZhbHNlLFxyXG5cclxuXHRcdG1hcmtlcjogZmFsc2UsXHJcblx0XHRtYXNrOiBmYWxzZSxcclxuXHRcdG1ldGFkYXRhOiBmYWxzZSxcclxuXHRcdG1wYXRoOiBmYWxzZSxcclxuXHJcblx0XHRwYXRoOiBmYWxzZSxcclxuXHRcdHBhdHRlcm46IGZhbHNlLFxyXG5cdFx0cG9seWdvbjogZmFsc2UsXHJcblx0XHRwb2x5bGluZTogZmFsc2UsXHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IGZhbHNlLFxyXG5cdFx0cmVjdDogZmFsc2UsXHJcblxyXG5cdFx0c2NyaXB0OiB0cnVlLFxyXG5cdFx0c2V0OiBmYWxzZSxcclxuXHRcdHNvbGlkY29sb3I6IGZhbHNlLFxyXG5cdFx0c3RvcDogZmFsc2UsXHJcblx0XHRzdHlsZTogdHJ1ZSxcclxuXHRcdHN3aXRjaDogZmFsc2UsXHJcblx0XHRzeW1ib2w6IGZhbHNlLFxyXG5cclxuXHRcdHRleHQ6IGZhbHNlLFxyXG5cdFx0dGV4dFBhdGg6IGZhbHNlLFxyXG5cdFx0dGl0bGU6IHRydWUsXHJcblx0XHR0ZXh0U3BhbjogZmFsc2UsXHJcblxyXG5cdFx0dXNlOiBmYWxzZSxcclxuXHJcblx0XHR2aWV3OiBmYWxzZSxcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtGdW5jUHJveHlQcm9wcywgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBzX2N1cnJlbnRDbGFzc0NvbXAsIGNyZWF0ZVdhdGNoZXIsIFZOLCBWTlVwZGF0ZURpc3AsIElXYXRjaGVyfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGNvbm5lY3QgYmV0d2VlbiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gYW5kIHRoZSBWTnMgY3JlYXRlZCBmb3IgaXQuXHJcbiAqL1xyXG5sZXQgc3ltS2V5c1RvTm9kZXMgPSBTeW1ib2woIFwic3ltS2V5c1RvTm9kZXNcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIHN5bWJvbCBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGUgPSBWTlR5cGUuRnVuY1Byb3h5O1xyXG5cclxuICAgICAgICAvLyByZW1lbWJlciBkYXRhIGZyb20gdGhlIHByb3BzLiBOb3RlIHRoYXQgaWYgdGhpc0FyZyBpcyB1bmRlZmluZWQgaXQgd2lsbCBiZSBjaGFuZ2VkXHJcbiAgICAgICAgLy8gdG8gdGhlIG5vZGUncyBjcmVhdG9yIGNvbXBvbmVudCB1cG9uIG1vdW50aW5nXHJcblx0XHR0aGlzLmZ1bmMgPSBwcm9wcy5mdW5jIGFzICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHRcdHRoaXMudGhpc0FyZyA9IHByb3BzLnRoaXNBcmc7XHJcblx0XHR0aGlzLmFyZ3MgPSBwcm9wcy5hcmdzO1xyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyUmVxdWlyZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgcmVwbGFjZUFyZ3MoIGFyZ3M6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYXJncyA9IGFyZ3M7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIGlmIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByZW5kZXJPblVwZGF0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVuZGVyUmVxdWlyZWQ7IH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb24gcHJveHkgY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLnRoaXNBcmcsIHRoaXMuYXJncyk7XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jV2F0Y2hlciggdGhpcy5hcmdzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgaWYgKHRoaXMudGhpc0FyZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzLmNyZWF0b3I7XHJcblxyXG5cdFx0Ly8gaWYgYSBrZXkgd2FzIG5vdCBwcm92aWRlZCB3ZSB1c2UgdGhlIHZhbHVlIG9mIHRoaXNBcmcgKHdoaWNoIG1pZ2h0IGJlIHRoZSBjdXJyZW50XHJcblx0XHQvLyBjb21wb25lbnQpIGFzIGEga2V5LiBJZiB0aGlzQXJnIGlzIHVuZGVmaW5lZCBlaXRoZXIgd2UgdXNlIHRoZSBmdW5jdGlvbiBpdHNlbGYgYXMgYSBrZXkuXHJcbiAgICAgICAgdGhpcy5saW5rS2V5ID0gdGhpcy5rZXkgfHwgdGhpcy50aGlzQXJnIHx8IHRoaXMuZnVuYztcclxuXHJcblx0XHR0aGlzLmxpbmtOb2RlVG9GdW5jKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuZnVuYywgdGhpcy51cGRhdGVGcm9tV2F0Y2hlciwgdGhpcy50aGlzQXJnLCB0aGlzKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuXHRcdHRoaXMudW5saW5rTm9kZUZyb21GdW5jKCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdCBhbmQgdGhlIHNhbWUgdGhpc0FyZyBwcm9wZXJ0eVxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gbmV3RnVuY1Byb3h5Vk4uZnVuYyAmJiB0aGlzLnRoaXNBcmcgPT09IG5ld0Z1bmNQcm94eVZOLnRoaXNBcmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmxpbmtLZXkgPSBuZXdGdW5jUHJveHlWTi5saW5rS2V5O1xyXG5cclxuXHRcdC8vIHRha2UgYXJndW1lbnRzIGZyb20gdGhlIG5ldyBub2RlOyB0aGUgZnVuY3Rpb24gaXRzZWxmIGFuZCBcInRoaXNBcmdcIiByZW1haW4gdGhlIHNhbWUuXHJcblx0XHR0aGlzLmFyZ3MgPSBuZXdGdW5jUHJveHlWTi5hcmdzO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIGFsc28gYmUgY2FsbGVkIC0gYnV0IG9ubHkgdG8gY2xlYXIgdGhlIHJlbmRlclJlcXVpcmVkIGZsYWcuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgcHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHdlIHVzZSB0aGlzIG1ldGhvZCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnXCJcclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBmaW5kVk4oIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnkpOiBGdW5jUHJveHlWTlxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBrZXkgaXMgdW5kZWZpbmVkLCB3ZSB1c2UgdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGZcclxuXHRcdGxldCBsaW5rS2V5OiBhbnkgPSBrZXkgfHwgdGhpc0FyZyB8fCBzX2N1cnJlbnRDbGFzc0NvbXAgfHwgZnVuYztcclxuXHJcblx0XHQvLyB0cnkgdG8gZmluZCB0aGUga2V5IGluIHRoZSBtYXAgb24gdGhlIGZ1bmN0aW9uIG9iamVjdDsgaWYgbm90IGZvdW5kLCBkbyBub3RoaW5nXHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gZnVuY1tzeW1LZXlzVG9Ob2Rlc107XHJcblx0XHRyZXR1cm4gbWFwS2V5c1RvTm9kZXMgJiYgbWFwS2V5c1RvTm9kZXMuZ2V0KCBsaW5rS2V5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaW5kIHRoZSBub2RlXHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGZ1bmMsIGtleSwgdGhpc0FyZyk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4uYXJncyA9IGFyZ3M7XHJcblx0XHR2bi5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0XHR2bi5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIGEgdmFsdWUgb2Ygc29tZSB0cmlnZ2VyIG9iamVjdCBiZWluZyB3YXRjaGVkIGJ5IHRoZSBmdW5jdGlvblxyXG4gICAgLy8gaXMgY2hhbmdlZC5cclxuICAgIHByaXZhdGUgdXBkYXRlRnJvbVdhdGNoZXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgbGlua05vZGVUb0Z1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKCFtYXBLZXlzVG9Ob2RlcylcclxuXHRcdHtcclxuXHRcdFx0bWFwS2V5c1RvTm9kZXMgPSBuZXcgTWFwPGFueSxGdW5jUHJveHlWTj4oKTtcclxuXHRcdFx0dGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXSA9IG1hcEtleXNUb05vZGVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1hcEtleXNUb05vZGVzLnNldCggdGhpcy5saW5rS2V5LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcml2YXRlIHVubGlua05vZGVGcm9tRnVuYygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc107XHJcblx0XHRpZiAobWFwS2V5c1RvTm9kZXMpXHJcblx0XHRcdG1hcEtleXNUb05vZGVzLmRlbGV0ZSggdGhpcy5saW5rS2V5KTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGR1cmluZyB0aGUgcmVuZGVyaW5nXHJcblx0cHJpdmF0ZSBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIE9iamVjdCB0byBiZSB1c2VkIGFzIFwidGhpc1wiIHdoZW4gaW52b2tpbmcgdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgdGhpc0FyZzogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIGFyZ3M6IGFueVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBzaG91bGQgYmUgcmUtcmVuZGVyZWQ7IHRoYXQgaXMsIHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdHByaXZhdGUgcmVuZGVyUmVxdWlyZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEtleSB0aGF0IGxpbmtzIHRoZSBmdW5jdGlvbiBhbmQgdGhpcyBub2RlLiBUaGlzIGtleSBpcyBlaXRoZXIgZXF1YWxzIHRvIHRoZSBrZXkgcHJvdmlkZWRcclxuXHQvLyBpbiB0aGUgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9yIHRvIHRoZSBjdXJyZW50IGNvbXBvbmVudCBvciB0byB0aGUgZnVuY3Rpb25cclxuXHQvLyBpdHNlbGYuXHJcblx0cHJpdmF0ZSBsaW5rS2V5OiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBmdW5jdGlvbiB3cmFwcGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFRoZSB3YXRjaGVyIHdpbGwgbm90aWNlIGFueSB0cmlnZ2VyIG9iamVjdHNcclxuICAgIC8vIGJlaW5nIHJlYWQgZHVyaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBleGVjdXRpb24gYW5kIHdpbGwgcmVxdWVzdCB1cGRhdGUgdGh1cyB0cmlnZ2VycmluZ1xyXG4gICAgLy8gcmUtcmVuZGVyaW5nLlxyXG5cdHByaXZhdGUgZnVuY1dhdGNoZXI6IElXYXRjaGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RnJhZ21lbnQsIEZ1bmNDb21wVHlwZSwgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7IFZOQmFzZSwgVk4sIFZOVXBkYXRlRGlzcCB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgZnVuY3Rpb24gYS5rLmEuIHN0YXRlbGVzcyBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1ZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgbm9kZSBjb3JyZXNwb25kcyB0byBhIGZyYWdtZW50IHBsYWNlaG9sZGVyLiAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgaXNWTmFGcmFnbWVudCggdm46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAodm4gYXMgRnVuY1ZOKS5mdW5jID09PSBGcmFnbWVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGZ1bmM6IEZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLkZ1bmNDb21wO1xyXG5cdFx0dGhpcy5mdW5jID0gZnVuYztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleVxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHRcdC8vIERPTSB0cmVlLlxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdFx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMuZnVuYyA9IG5ld0Z1bmNWTi5mdW5jO1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5ld0Z1bmNWTi5wcm9wcztcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIGZvciBhIHN0YXRlbGVzcyBjb21wb25lbnQuIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIGR1cmluZyB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXHJcblx0cHJpdmF0ZSBmdW5jOiBGdW5jQ29tcFR5cGU7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LCBmdW5jdGlvbiBvciBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJSW5kZXBlbmRlbnRDb21wVk4sIElDb21wb25lbnQsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3AsIENsYXNzQ29tcFZOfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIElJbmRlcGVuZGVudENvbXBWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXA6IElDb21wb25lbnQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuSW5kZXBlbmRlbnRDb21wO1xyXG5cdFx0dGhpcy5jb21wID0gY29tcDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWUgPyB0aGlzLmNvbXAuZGlzcGxheU5hbWUgOiB0aGlzLmNvbXAuY29uc3RydWN0b3IubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS4gVGhlIGluc3RhbmNlIG9mIG91ciBjb21wb25lbnQgaXMgdGhlIGtleS5cclxuXHRwdWJsaWMgZ2V0IGtleSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jb21wOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgaW5zdGFuY2VzIGFyZSBkaWZmZXJlbnQsIHRoZW4gd2UgbmVlZCB0byBwcmVwYXJlIHRoZSBuZXcgaW5zdGFuY2UgZm9yXHJcblx0XHQvLyBtb3VudGluZyBhbmQgdGhlIG9sZCBvbmUgZm9yIHVubW91bnRpbmcuXHJcblx0XHRpZiAobmVlZHNVcGRhdGluZylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXAgPSBuZXdDb21wO1xyXG5cdFx0XHR0aGlzLndpbGxNb3VudCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIG5lZWRzVXBkYXRpbmcpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lNYW5hZ2VkQ29tcFZOLCBJQ29tcG9uZW50Q2xhc3MsIFZOVHlwZSwgSUNvbXBvbmVudCwgc2V0UmVmLCBSZWZQcm9wVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOLCBWTkJhc2UsIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIElNYW5hZ2VkQ29tcFZOXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHVibGljIGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLk1hbmFnZWRDb21wO1xyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lIHBsdXMga2V5IGlmIGRlZmluZWQuIE5vdGUgdGhhdCBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdC8vIG1pZ2h0IG5vdCBiZSBjcmVhdGVkIHlldCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdFx0aWYgKHRoaXMuY29tcCAmJiB0aGlzLmNvbXAuZGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCBwYXJlbnQsIGNyZWF0b3IpO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdHRoaXMuY29tcCA9IG5ldyB0aGlzLmNvbXBDbGFzcyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGNvbXBvbmVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50cyAoYW5kL29yIGVsZW1lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuICAgICAgICBzdXBlci53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIE1hbmFnZWRDb21wVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIE1hbmFnZWRDb21wVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0NsYXNzVk4ua2V5O1xyXG5cclxuXHRcdC8vIHNoYWxsb3cgY29weSB0aGUgbmV3IHByb3BlcnRpZXMgZnJvbSB0aGUgb3RoZXIgbm9kZSB0byBvdXIgb2JqZWN0LiBUaGlzIGlzIG5lZWRlZFxyXG5cdFx0Ly8gYmVjYXVzZSB0aGUgY29tcG9uZW50IGdvdCBvdXIgcHJvcHMgb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgd2lsbCBrZWVwXHJcblx0XHQvLyB3b3JraW5nIHdpdGggaXQgLSBlc3BlY2lhbGx5IGlmIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kLlxyXG5cdFx0T2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaCgga2V5ID0+IGRlbGV0ZSB0aGlzLnByb3BzW2tleV0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5wcm9wcywgbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgc2hvdWxkUmVuZGVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1Byb21pc2VQcm94eVByb3BzLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKiBcclxuICogVGhlIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlcyB0aGF0IHVzZSB0aGlzIGZ1bmN0aW9uIGlzIGtlcHQgaW4gYSBtYXAgZnJvbSB0aGVcclxuICoga2V5cyB0byB0aGUgbm9kZXMuIFRoZSBtYXAgaXMgc3RvcmVkIGluIGEgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VQcm94eVZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFByb21pc2VQcm94eVByb3BzLCBjaGlsZHJlbj86IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLlByb21pc2VQcm94eTtcclxuXHRcdHRoaXMucHJvbWlzZSA9IHByb3BzLnByb21pc2U7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBwcm9wcy5lcnJvckNvbnRlbnRGdW5jO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY2hpbGRyZW47XHJcblxyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9taXNlIGlzIHNldHRsZWQgKHN1Y2Nlc3NmdWxseSBvciBub3QpLlxyXG5cdHB1YmxpYyBnZXQgaXNTZXR0bGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wcm9taXNlID09IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHQ7IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBuYW1lID0gXCJQcm9taXNlXCI7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLndhdGNoUHJvbWlzZSgpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG4gICAgICAgIC8vIERPTSB0cmVlLlxyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuICAgICAgICBwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBwcm9taXNlIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMucHJvbWlzZSA9PT0gbmV3UHJvbWlzZVByb3h5Vk4ucHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld1Byb21pc2VQcm94eVZOLmtleTtcclxuXHRcdHRoaXMuY29udGVudCA9IG5ld1Byb21pc2VQcm94eVZOLmNvbnRlbnQ7XHJcblx0XHR0aGlzLmVycm9yQ29udGVudEZ1bmMgPSBuZXdQcm9taXNlUHJveHlWTi5lcnJvckNvbnRlbnRGdW5jO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhaXRzIGZvciB0aGUgcHJvbWlzZSB0byBzZXR0bGVcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIHdhdGNoUHJvbWlzZSgpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHRoaXMucHJvbWlzZTtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIHN0aWxsIG1vdW50ZWQsIHJlcXVlc3QgdXBkYXRlXHJcblx0XHRcdGlmICh0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBhbHJlYWR5IHVubW91bnRlZCwgZG8gbm90aGluZ1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGlmICh0aGlzLmVycm9yQ29udGVudEZ1bmMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmVycm9yQ29udGVudEZ1bmMoIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIxKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycik7XHJcblxyXG5cdFx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFByb21pc2UgdGhhdCB0aGlzIG5vZGUgd2F0Y2hlcy5cclxuXHRwcml2YXRlIHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0Ly8gQ29udGVudCB0aGF0IHRoaXMgbm9kZSBkaXNwbGF5cy4gSW5pdGlhbGx5IHRoaXMgY29udGVudCBpcyBzZXQgdG8gcHJvcHMuY2hpbGRyZW4uIFdoZW5cclxuXHQvLyB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCwgdGhlIGNvbnRlbnQgaXMgc2V0IHRvIHRoZSByZXNvbHZlZCB2YWx1ZS4gSWYgdGhlIHByb21pc2UgaXNcclxuXHQvLyByZWplY3RlZCBhbmQgdGhlIGVycm9yQ29udGVudEZ1bmMgaXMgZGVmaW5lZCwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIGl0cyByZXR1cm5cclxuXHQvLyB2YWx1ZSBpcyB1c2VkIGFzIGNvbnRlbnQuXHJcblx0cHJpdmF0ZSBjb250ZW50PzogYW55O1xyXG5cclxuXHQvLyBPcHRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIGVycm9yQ29udGVudEZ1bmM/OiAoIGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBrZXB0IGJ5IFJvb3QgdmlydHVhbCBub2RlIGFib3V0IHNlcnZpY2UgZXhwb3J0IHB1YmxpY2F0aW9ucyBhbmQgc3Vic2NyaXB0aW9ucy4gVGhlXHJcbi8vIHNhbWUgc2VydmljZSBjYW4gYmUgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHRvIGJ5IG11bHRpcGxlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU2VydmljZUluZm9cclxue1xyXG5cdHB1Ymxpc2hpbmdWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcblx0c3Vic2NyaWJlZFZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxufVxyXG5cclxuLy8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNldHMgb2YgdmlydHVhbCBub2RlcyB0aGF0IHN1YnNjcmliZWQgdG8gdGhpcyBzZXJ2aWNlLlxyXG5sZXQgc19zZXJ2aWNlSW5mb3MgPSBuZXcgTWFwPHN0cmluZyxTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgcHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0e1xyXG5cdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0c19zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0fVxyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuYWRkKCBzb3VyY2VWTik7XHJcblxyXG5cdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyB1bnB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIG5vdGlmeSBhbGwgc3Vic2NyaWJlZCBub2RlcyB0aGF0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2aWNlIGhhcyBjaGFuZ2VkXHJcblx0XHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgc3Vic2NyaWJlZCB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0e1xyXG5cdFx0aW5mbyA9IG5ldyBTZXJ2aWNlSW5mbygpO1xyXG5cdFx0c19zZXJ2aWNlSW5mb3Muc2V0KCBpZCwgaW5mbyk7XHJcblx0fVxyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuYWRkKCBzb3VyY2VWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgU2NoZWR1bGVkRnVuY1R5cGUsIElDb21wb25lbnQsIElWTm9kZSwgVk5UeXBlLCBJQ2xhc3NDb21wVk4sIEZyYWdtZW50LCBGdW5jUHJveHksXHJcbiAgICBGdW5jUHJveHlQcm9wcywgUHJvbWlzZVByb3h5LCBJQ29tcG9uZW50Q2xhc3MsIEZ1bmNDb21wVHlwZVxyXG59IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtcclxuICAgIFZOLCBETiwgVk5VcGRhdGVEaXNwLCBWTkJhc2UsIFRleHRWTiwgSW5kZXBlbmRlbnRDb21wVk4sIFByb21pc2VQcm94eVZOLFxyXG4gICAgRnVuY1Byb3h5Vk4sIEVsbVZOLCBNYW5hZ2VkQ29tcFZOLCBGdW5jVk4sIGVudGVyTXV0YXRpb25TY29wZSwgZXhpdE11dGF0aW9uU2NvcGVcclxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuLy8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuLy8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuLy8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcbi8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuLy9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcbi8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcbi8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5sZXQgc192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmRcclxuLy8gdGhlIHZhbHVlcyBhcmUgdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGFmdGVyXHJcbi8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuIFRoZSBrZXlzIGluIHRoaXMgbWFwIGFyZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb25zIGFuZFxyXG4vLyB0aGUgdmFsdWVzIGFyZSB0aGUgd3JhcHBlciBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIGEgZ2l2ZW4gdmlydHVhbCBub2RlLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcbi8vIEhhbmRsZSBvZiB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgKGluIGNhc2UgaXQgc2hvdWxkIGJlIGNhbmNlbGVkKS5cclxubGV0IHNfc2NoZWR1bGVkRnJhbWVIYW5kbGU6IG51bWJlciA9IDA7XHJcblxyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyLlxyXG5sZXQgc19zY2hlZHVsZXJTdGF0ZTogU2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG5cclxuLy8gTnVtYmVyIHRoYXQgc2VydmVzIGFzIGEgdW5pcXVlIElEIG9mIGFuIHVwZGF0ZSBjeWNsZS4gRWFjaCB1cGRhdGUgY3ljbGUgdGhlIHJvb3Qgbm9kZVxyXG4vLyBpbmNyZW1lbnRzIHRoaXMgbnVtYmVyLiBFYWNoIG5vZGUgYmVpbmcgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIGlzIGFzc2lnbmVkIHRoaXMgbnVtYmVyLlxyXG4vLyBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiB3aGVuIGJvdGggYSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlXHJcbi8vIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcbmxldCBzX2N1cnJlbnRUaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gTm9kZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLiBEdXJpbmcgY3JlYXRpb24gYW5kIHVwZGF0aW5nIHByb2Nlc3MsIHRoaXMgdmFsdWUgaXMgc2V0XHJcbi8vIGV2ZXJ5IHRpbWUgd2UgcmVjdXJzZSBpbnRvIHN1Yi1ub2RlcyBhbmQgcmVzdG9yZWQgd2hlbiB3ZSByZXR1cm4gYmFjayB0byB0aGUgbm9kZS4gSWZcclxuLy8gZHVyaW5nIGNyZWF0aW9uIG9yIHVwZGF0aW5nIHByb2Nlc3MgYW4gZXhjZXB0aW9uIGlzIHRocm93biBhbmQgaXMgY2F1Z2h0IGJ5IHNvbWUgdXBwZXJcclxuLy8gbGV2ZWwgbm9kZSwgdGhpcyB2YWx1ZSB3aWxsIHN0aWxsIHBvaW50IGF0IHRoZSBub2RlIHRoYXQgY2F1c2VkIHRoZSBleGNlcHRpb24uXHJcbmV4cG9ydCBsZXQgc19jdXJyZW50Vk46IFZOID0gbnVsbDtcclxuXHJcbi8vIENsYXNzLWJhc2VkIGNvbXBvbmVudCB3aG9zZSByZW5kZXJpbmcgdHJlZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudENsYXNzQ29tcDogSUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBnaXZlbiBub2RlIGFzIHRoZSBjdXJyZW50IGFuZCBpZiB0aGUgbm9kZSBpcyBmb3IgdGhlIGNvbXBvbmVudCwgc2V0IHRoZSBjdXJyZW50XHJcbiAqIGNvbXBvbmVudC4gUmV0dXJucyB0aGUgdmlydHVhbCBub2RlIHRoYXQgd2FzIHByZXZpb3VzbHkgdGhlIGN1cnJlbnQgb25lLiBBcyB3ZSByZWN1cnNlIG92ZXJcclxuICogdmlydHVhbCBub2RlcyBhbmQgc3ViLW5vZGVzLCB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gaGF2ZSB0aGUgc19jdXJyZW50Vk4gYW5kXHJcbiAqIHNfY3VycmVudENsYXNzQ29tcCB2YXJpYWJsZXMgdG8gcG9pbnQgdG8gdGhlIG5vZGUgYW5kIGNvbXBvbmVudCBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhY2tDdXJyZW50Vk4oIHZuOiBWTik6IFZOXHJcbntcclxuICAgIGxldCBwcmV2Vk4gPSBzX2N1cnJlbnRWTjtcclxuICAgIHNfY3VycmVudFZOID0gdm47XHJcbiAgICBzX2N1cnJlbnRDbGFzc0NvbXAgPSAhdm4gPyBudWxsIDogKHZuIGFzIGFueSkuY29tcCAhPSBudWxsID8gKHZuIGFzIGFueSkuY29tcCA6IHZuLmNyZWF0b3I7XHJcbiAgICByZXR1cm4gcHJldlZOO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgaW5kaWNhdGluZyBpbiB3aGF0IHBoYXNlIG9mIHRoZSB1cGRhdGUgY3ljbGUgd2UgY3VycmVudGx5IHJlc2lkZS5cclxuY29uc3QgZW51bSBTY2hlZHVsZXJTdGF0ZVxyXG57XHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBub3Qgd2l0aGluIHRoZSB1cGRhdGUgY3ljbGVcclxuXHRJZGxlID0gMCxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGJlZm9yZSB1cGRhdGluZyBub2Rlc1xyXG5cdEJlZm9yZVVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyB1cGRhdGluZyBub2Rlc1xyXG5cdFVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGFmdGVyIHVwZGF0aW5nIG5vZGVzXHJcblx0QWZ0ZXJVcGRhdGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgcmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlXHJcbiAqIGdpdmVuIHZpcnR1YWwgbm9kZS4gVGhlIGdpdmVuIFwidGhhdFwiIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpc1xyXG4gKiBleGVjdXRlZC4gSWYgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3JcclxuICogaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGFcclxuICogbm9kZS9jb21wb25lbnQgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZC5cclxuICogQHBhcmFtIHRoaXNDYWxsYmFjayBPYmplY3QgdGhhdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpcyBleGVjdXRlZC5cclxuICogQHBhcmFtIHZuIFZpcnR1YWwgbm9kZSBpbiB3aG9zZSBjb250ZXh0IHRoZSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkLlxyXG4gKiBAcmV0dXJucyBUaGUgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBDYWxsYmFja1dpdGhWTjxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0LCB2bj86IElWTm9kZSk6IFRcclxue1xyXG4gICAgLy8gaWYgXCJ0aGlzXCIgZm9yIHRoZSBjYWxsYmFjayB3YXMgbm90IHBhc3NlZCBidXQgdm4gd2FzLCBjaGVjayB3aGV0aGVyIHRoZSB2biBpcyBhIGNvbXBvbmVudDtcclxuICAgIC8vIGlmIHllcywgdXNlIGl0IGFzIFwidGhpc1wiOyBvdGhlcndpc2UsIHVzZSB2bidzIGNyZWF0b3IgY29tcG9uZW50LlxyXG4gICAgaWYgKCF0aGlzQ2FsbGJhY2sgJiYgdm4pXHJcbiAgICAgICAgdGhpc0NhbGxiYWNrID0gKHZuIGFzIGFueSkuY29tcCAhPSBudWxsID8gKHZuIGFzIGFueSkuY29tcCA6IHZuLmNyZWF0b3I7XHJcblxyXG4gICAgcmV0dXJuIENhbGxiYWNrV3JhcHBlci5iaW5kKCB2biwgdGhpc0NhbGxiYWNrLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGNhbGxiYWNrcyBpbiBvcmRlciB0byBoYXZlIGl0IGV4ZWN1dGVkIGluIGEgTWltYmxcclxuICogY29udGV4dC4gVGhlIGZ1bmN0aW9uIGlzIHVzdWFsbHkgYm91bmQgdG8gYSB2aXJ0dWFsIG5vZGUgYXMgXCJ0aGlzXCIgYW5kIHRvIHR3byBwYXJhbWV0ZXJzOiB0aGVcclxuICogb2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgZXhlY3V0ZWQgYW5kIHRoZSBvcmlnaW5hbFxyXG4gKiBjYWxsYmFjayBpdHNlbGYuIFRoZXNlIHR3byBwYXJhbWV0ZXJzIGFyZSBhY2Nlc3NlZCBhcyB0aGUgZmlyc3QgYW5kIHNlY29uZCBlbGVtZW50cyBvZiB0aGVcclxuICogYGFyZ3VtZW50c2AgYXJyYXkpLiBUaGUgcmVzdCBvZiBwYXJhbWV0ZXJzIGluIHRoZSBgYXJndW1lbnRzYCBhcnJheSBhcmUgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbFxyXG4gKiBjYWxsYmFjayBhbmQgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBpcyByZXR1cm5lZCBmcm9tIHRoZSB3cmFwcGVyLiBOb3RlIHRoYXQgXCJ0aGlzXCJcclxuICogY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgZnVuY3Rpb24gd2FzIHNjaGVkdWxlZCB3aXRob3V0IGJlaW5nIGluIHRoZSBjb250ZXh0IG9mIGFueSB2aXJ0dWFsIG5vZGUuXHJcbiAqIFxyXG4gKiBUaGUgcHJvcGVyIE1pbWJsIGNvbnRleHQgZXN0YWJsaXNoZXMgdGhlIGZvbGxvd2luZzpcclxuICogLSBleGVjdXRlcyBpbiBhIG11dGF0aW9uIHNjb3BlLCBzbyB0aGF0IGlmIGFueSB0cmlnZ2VyIHZhbHJpYWJsZSBpcyBjaGFuZ2VkIGR1cmluZyB0aGUgZXhlY3V0aW9uXHJcbiAqICAgb2YgdGhlIGNhbGxiYWNrLCB3YXRjaGVycyB3aWxsIGJlIG9ubHkgbm90aWZpZWQgYWZ0ZXIgdGhlIGNhbGxiYWNrIGhhcyBmaW5pc2hlZCBpdHMgZXhlY3V0aW9uLlxyXG4gKiAtIElmIHRoZSB3cmFwcGluZyBoYXMgYmVlbiBkb25lIGluIHRoZSBjb250ZXh0IG9mIGEgdmlydHVhbCBub2RlIChlLmcuIGZyb20gYSBNaW1ibCBjb21wb25lbnQpLFxyXG4gKiAgIHRoZSBcImN1cnJlbnQgdmlydHVhbCBub2RlXCIgYW5kIHRoZSBcImN1cnJlbnQgY29tcG9uZW50XCIgYXJlIHNldCB0byB0aGUgbm9kZSBhbmQgY29tcG9uZW50IHVuZGVyXHJcbiAqICAgd2hpY2ggdGhlIGNhbGxiYWNrIHdhcyB3cmFwcGVkLiBUaGlzIGFsbG93IGZvciBwcm9wZXIgSlNYIGV4ZWN1dGlvbiBhbmQgZm9yIHVzaW5nIHRoZSBNaW1ibFxyXG4gKiAgIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICogXHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxsYmFja1dyYXBwZXIoKTogYW55XHJcbntcclxuXHQvLyByZW1lbWJlciB0aGUgY3VycmVudCBWTiBhbmQgc2V0IHRoZSBjdXJyZW50IFZOIHRvIGJlIHRoZSBWTiBmcm9tIHRoZSBcInRoaXNcIiB2YWx1ZS4gTm90ZVxyXG5cdC8vIHRoYXQgdGhpcyBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSB3cmFwcGluZyB3YXMgY3JlYXRlZCB3aXRob3V0IHRoZSBWTiBjb250ZXh0LlxyXG4gICAgbGV0IHZuOiBWTiA9IHRoaXM7XHJcbiAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oIHZuID8gdm4gOiBudWxsKTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG4gICAgICAgIGVudGVyTXV0YXRpb25TY29wZSgpO1xyXG5cdFx0bGV0IFt0aGlzT3JnQ2FsbGJhY2ssIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiBvcmdDYWxsYmFjay5hcHBseSggdGhpc09yZ0NhbGxiYWNrLCByZXN0KTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcbiAgICAgICAgbGV0IGVycm9yU2VydmljZSA9IHZuPy5nZXRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcbiAgICAgICAgaWYgKGVycm9yU2VydmljZSlcclxuICAgICAgICAgICAgZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdm4pKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuXHR9XHJcblx0ZmluYWxseVxyXG5cdHtcclxuICAgICAgICBleGl0TXV0YXRpb25TY29wZSgpO1xyXG5cclxuICAgICAgICAvLyByZXN0b3JlIHByZXZpb3VzIGN1cnJlbnQgVk5cclxuICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm9kZVVwZGF0ZSggdm46IFZOKTogdm9pZFxyXG57XHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdGNvbnNvbGUud2FybiggYFVwZGF0ZSByZXF1ZXN0ZWQgZm9yIHZpcnR1YWwgbm9kZSAnJHtnZXRWTlBhdGgodm4pLmpvaW4oXCItPlwiKX0nIHRoYXQgZG9lc24ndCBoYXZlIGFuY2hvciBET00gbm9kZWApXHJcblxyXG4gICAgYWRkTm9kZVRvU2NoZWR1bGVyKCB2bik7XHJcblxyXG5cdC8vIHRoZSB1cGRhdGUgaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IHRpY2sgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGUgZHVyaW5nIGFcclxuXHQvLyBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24uXHJcblx0aWYgKHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWRkcyB0aGUgZ2l2ZW4gbm9kZSBhbmQgcmVsYXRlZCBpbmZvcm1hdGlvbiBpbnRvIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmVzIHNvIHRoYXQgaXQgd2lsbCBiZVxyXG4vLyB1cGRhdGVkIGR1cmluZyB0aGUgbmV4dCBNaW1ibCB0aWNrLlxyXG5mdW5jdGlvbiBhZGROb2RlVG9TY2hlZHVsZXIoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdC8vIGFkZCB0aGlzIG5vZGUgdG8gdGhlIG1hcCBvZiBub2RlcyBmb3Igd2hpY2ggZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlbWVudCBvclxyXG5cdC8vIGRlbGV0aW9uIGlzIHNjaGVkdWxlZC4gTm90ZSB0aGF0IGEgbm9kZSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbmNlIGluIHRoZSBtYXAgbm9cclxuXHQvLyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgaXQgY2FsbHMgcmVxdWVzdFVwZGF0ZSgpLlxyXG5cdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlLmFkZCggdm4pO1xyXG5cclxuXHQvLyBpZiB0aGlzIGlzIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50IGFuZCBpdCBoYXMgYmVmb3JlVXBkYXRlIGFuZC9vciBhZnRlclVwZGF0ZSBtZXRob2RzXHJcblx0Ly8gaW1wbGVtZW50ZWQsIHNjaGVkdWxlIHRoZWlyIGV4ZWN1dGlvbnMuIE5vdGUgdGhhdCB0aGUgXCJiZWZvcmVVcGRhdGVcIiBtZXRob2QgaXMgbm90XHJcblx0Ly8gc2NoZWR1bGVkIGlmIHRoZSBjdXJyZW50IHNjaGVkdWxlciBzdGF0ZSBpcyBCZWZvcmVVcGRhdGUuIFRoaXMgaXMgYmVjYXVzZSB0aGUgY29tcG9uZW50XHJcblx0Ly8gd2lsIGJlIHVwZGF0ZWQgaW4gdGhlIGN1cnJlbnQgY3ljbGUgYW5kIHRoZXJlIGlzIGFscmVhZHkgbm8gdGltZSB0byBleGVjdXRlIHRoZSBcImJlZm9yZVxyXG5cdC8vIHVwZGF0ZVwiIG1ldGhvZC5cclxuXHRpZiAodm4udHlwZSA9PT0gVk5UeXBlLkluZGVwZW5kZW50Q29tcCB8fCB2bi50eXBlID09PSBWTlR5cGUuTWFuYWdlZENvbXApXHJcblx0e1xyXG5cdFx0bGV0IGNvbXAgPSAodm4gYXMgYW55IGFzIElDbGFzc0NvbXBWTikuY29tcDtcclxuXHRcdGlmIChjb21wLmJlZm9yZVVwZGF0ZSAmJiBzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBjb21wLmJlZm9yZVVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHJcblx0XHRpZiAoY29tcC5hZnRlclVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggY29tcC5hZnRlclVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG4vLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4sXHJcbiAgICB0aGlzQXJnPzogb2JqZWN0LCB2bj86IElWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhpc0FyZywgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGlzQXJnLCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgb3IgdGhlIGZyYW1lIGhhcyBhbHJlYWR5XHJcbi8vIGJlZW4gc2NoZWR1bGVkLlxyXG5mdW5jdGlvbiByZXF1ZXN0RnJhbWVJZk5lZWRlZCgpOiB2b2lkXHJcbntcclxuXHRpZiAoc19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uU2NoZWR1bGVkRnJhbWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIG9uU2NoZWR1bGVkRnJhbWUoKTogdm9pZFxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIHJlcXVlc3RzIHdpbGxcclxuXHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcbiAgICBkb01pbWJsZVRpY2soKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWNvbmNpbGVyIG1haW4gZW50cmFuY2UgcG9pbnRcclxuZnVuY3Rpb24gZG9NaW1ibGVUaWNrKCk6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzLiBJZiB0aGlzIGZ1bmN0aW9uXHJcblx0Ly8gY2FsbHMgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kIG9yIHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRlcyxcclxuXHQvLyB0aGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhpcyBjeWNsZS4gSG93ZXZlciwgaWYgaXQgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxyXG5cdC8vIGJlZm9yZSB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG4gICAgICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgICAgIGxldCBzdGF0c0FscmVhZHlFeGlzdGVkID0gRGV0YWlsZWRTdGF0cy5zdGF0cyAhPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRzQWxyZWFkeUV4aXN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHRpY2sgJHtzX2N1cnJlbnRUaWNrfTogYCk7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHQvLyB1cGRhdGUgcmVxdWVzdHMuIEFycmFuZ2Ugc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIGFuZCBwZXJmb3JtIHVwZGF0ZXMuXHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSkpKTtcclxuXHJcbiAgICAgICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAgICAgaWYgKCFzdGF0c0FscmVhZHlFeGlzdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLnN0b3AoIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0aW5nIGNvbXBvbmVudHNcclxuXHRpZiAoc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5BZnRlclVwZGF0ZTtcclxuXHRcdGxldCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlcyB0aGUgc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIHNvIHRoYXQgd2UgdXBkYXRlIFwidXBwZXJcIiBub2RlcyBiZWZvcmVcclxuLy8gdGhlIGxvd2VyIG9uZXMuIFRoaXMgY2FuIGhlbHAgYXZvaWQgdHdvIGNvbmRpdGlvbnM6XHJcbi8vXHQtIHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCB0d2ljZTogZmlyc3QgYmVjYXVzZSBpdCBjYWxsZWQgdXBkYXRlTWUsIGFuZCBzZWNvbmRcclxuLy9cdFx0YmVjYXVzZSBpdHMgcGFyZW50IHdhcyBhbHNvIHVwZGF0ZWQuXHJcbi8vXHQtIHVubmVjZXNzYXJ5IHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCBiZWZvcmUgaXQgaXMgcmVtb3ZlZCBieSB0aGUgcGFyZW50XHJcbi8vIFdlIGFsbG9jYXRlIGNvbnRpZ3VvdXMgYXJyYXkgd2hlcmUgaW5kaWNlcyBjb3JyZXNwb25kIHRvIGRlcHRoLiBFYWNoIGVsZW1lbnQgaW4gdGhpc1xyXG4vLyBhcnJheSB3aWxsIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgY29udGFpbiBhbiBhcnJheSBvZiBub2RlcyBhdCB0aGlzIGRlcHRoLlxyXG5mdW5jdGlvbiBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGU6IFNldDxWTj4pOiBWTltdW11cclxue1xyXG5cdC8vIGNyZWF0ZSBhIHNwYXJzZSBhcnJheSBvZiBjZXJ0YWluIHJlYXNvbmFibGUgc2l6ZS4gSWYgd2UgaGF2ZSBkZXB0aHMgZ3JlYXRlciB0aGFuIHRoaXMsXHJcblx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIHBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0bGV0IHZuc0J5RGVwdGg6IFZOW11bXSA9IG5ldyBBcnJheTxWTltdPigzMik7XHJcblx0dm5zU2NoZWR1bGVkRm9yVXBkYXRlLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0e1xyXG4gICAgICAgIC8vIGl0IGNhbiBoYXBwZW4gdGhhdCB3ZSBlbmNvdW50ZXIgYWxyZWFkeSB1bm1vdW50ZWQgdmlydHVhbCBub2RlcyAtIGlnbm9yZSB0aGVtXHJcbiAgICAgICAgaWYgKCF2bi5hbmNob3JETilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBhcnIgPSB2bnNCeURlcHRoW3ZuLmRlcHRoXTtcclxuXHRcdGlmICghYXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2godm4pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuICAgIGxldCBkaXNwOiBWTkRpc3A7XHJcbiAgICBmb3IoIGxldCB2bnMgb2Ygdm5zQnlEZXB0aClcclxuXHR7XHJcbiAgICAgICAgLy8gdm5zQnlEZXB0aCBpcyBhIHNwYXJzZSBhcnJheSBzbyBpdCBjYW4gaGF2ZSBob2xlc1xyXG4gICAgICAgIGlmICghdm5zKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgZm9yKCBsZXQgdm4gb2Ygdm5zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBmbGFnIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBmb3IgdGhlIG5vZGVcclxuICAgICAgICAgICAgICAgIHZuLnVwZGF0ZVJlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSwgZG9uJ3QgdXBkYXRlIGl0IGFnYWluXHJcbiAgICAgICAgICAgICAgICBpZiAodm4ubGFzdFVwZGF0ZVRpY2sgPT09IHNfY3VycmVudFRpY2spXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcCA9IHsgbmV3Vk46IHZuLCBhY3Rpb246IFZORGlzcEFjdGlvbi5Vbmtub3duLCBvbGRWTjogdm59O1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3ApO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZE5vZGVEaXNwcy5wdXNoKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIFJvb3RWTiBvYmplY3QuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JTZXJ2aWNlID0gdm4uZ2V0U2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgc19jdXJyZW50Vk4gPyBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSA6IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQlVHOiB1cGRhdGVWaXJ0dWFsIHRocmV3IGV4Y2VwdGlvbiBidXQgU3RkRXJyb3JIYW5kbGluZyBzZXJ2aWNlIHdhcyBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcbi8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcbmZ1bmN0aW9uIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHRmb3IoIGxldCBkaXNwIG9mIHVwZGF0ZWROb2RlRGlzcHMpXHJcblx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+LCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIHJlbmRlck5ld05vZGUoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyBpZiB3aWxsTW91bnQgZnVuY3Rpb24gaXMgZGVmaW5lZCB3ZSBjYWxsIGl0IHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sXHJcbiAgICAvLyBnb2VzIHRvIGVpdGhlciB0aGUgYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3BcclxuICAgIC8vICh3aGljaCBoYXMgdHJ5L2NhdGNoKS5cclxuICAgIGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoXHJcbiAgICAgICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcbiAgICAgICAgaWYgKHN1Yk5vZGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2UgaGF2ZSBzdWItbm9kZXMsIHdlIG5lZWQgdG8gY3JlYXRlIG5vZGVzIGZvciB0aGVtIGFuZCByZW5kZXIuIElmIG91ciBub2RlXHJcbiAgICAgICAgICAgIC8vIGtub3dzIHRvIGhhbmRsZSBlcnJvcnMsIHdlIGRvIGl0IHVuZGVyIHRyeS9jYXRjaDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9ucyBnbyB0b1xyXG4gICAgICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgICAgIGlmICghdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3I6YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgdGhlIGVycm9yIGFuZCByZS1yZW5kZXI7IHRoZW4gd2UgcmVuZGVyIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwIGluIGFuIGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm4uc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGluayB0aGUgc3ViLW5vZGVzIHdpdGggbmV4dCBhbmQgcHJldiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGxldCBwcmV2Vk46IFZOO1xyXG4gICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2Vk4pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZOLm5leHQgPSBzdm47XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZuLnByZXYgPSBwcmV2Vk47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldlZOID0gc3ZuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB0aGUgc3ViLW5vZGVzXHJcbiAgICAgICAgdm4uc3ViTm9kZXMgPSBzdWJOb2RlcztcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXROZXdOb2RlKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG57XHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIG1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb21taXROZXdOb2RlKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgZGlkTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG4gICAgaWYgKHZuLmRpZE1vdW50KVxyXG4gICAgICAgIHZuLmRpZE1vdW50KCk7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kLCBpZiByZXF1ZXN0ZWQsIHJlY3Vyc2l2ZWx5IG9uIGl0cyBzdWItbm9kZXMuIFRoaXMgZnVuY3Rpb24gaXNcclxuLy8gY2FsbGVkIGZvciBldmVyeSBub2RlIGJlaW5nIGRlc3RydWN0ZWQuIEl0IGlzIGNhbGxlZCBub24tcmVjdXJzaXZlbHkgb24gdGhlIHZpcnR1YWwgbm9kZXMgdGhhdFxyXG4vLyBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gT24gc3VjaCBub2RlcywgdGhlIHVubW91bnQgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgbm9kZSB3aWxsIGJlXHJcbi8vIHByb3Blcmx5IG1hcmtlZCBhcyB1bm1vdW50ZWQuIEZvciB2aXJ0dWFsIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUsIHRoaXNcclxuLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5LiB0aGUgdW5tb3VudCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkIGZvciB0aGVzZSBub2RlcztcclxuLy8gdGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hcmsgdGhlbSBhcyB1bm1vdW50ZWQgaGVyZS5cclxuZnVuY3Rpb24gY2FsbFdpbGxVbm1vdW50KCB2bjogVk4sIHJlY3Vyc2l2ZTogYm9vbGVhbilcclxue1xyXG4gICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgcHJvY2Vzc2VkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG4gICAgLy8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcbiAgICB2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG4gICAgLy8gZmlyc3Qgbm90aWZ5IHN1Yi1ub2RlcyBpZiByZWN1cnNpdmVcclxuICAgIGlmIChyZWN1cnNpdmUgJiYgdm4uc3ViTm9kZXMpXHJcblx0e1xyXG4gICAgICAgIGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gICAgICAgICAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oc3ZuKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxXaWxsVW5tb3VudCggc3ZuLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcbiAgICAgICAgICAgIHZuLnRlcm0oKTtcclxuICAgICAgICAgICAgdm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBub3RpZnkgb3VyIG5vZGVcclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFJlbW92ZWROb2RlKCB2bjogVk4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNpdmVseSB1bm1vdW50IHN1Yi1ub2RlcyBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50O1xyXG4gICAgLy8gaG93ZXZlciwgd2UgbmVlZCB0byBjYWxsIHRoZWlyIHdpbGxVbm1vdW50IG1ldGhvZHMuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIERPTVxyXG4gICAgLy8gbm9kZSwgd2UgbmVlZCB0byBjYWxsIHdpbGxVbm1vdW50IG9ubHkgb24gdGhlIG5vZGUgaXRzZWxmIGJlY2F1c2UgbGF0ZXIgd2Ugd2lsbCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIGl0cyBzdWItbm9kZXMuXHJcbiAgICBjYWxsV2lsbFVubW91bnQoIHZuLCBvd25ETiAhPSBudWxsKTtcclxuXHJcbiAgICAvLyBjYWxsIHVubW91bnQgb24gb3VyIG5vZGUgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgaGFzIGl0cyBvd24gRE4gb3Igbm90XHJcbiAgICBpZiAodm4udW5tb3VudClcclxuICAgIHtcclxuICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG4gICAgICAgIHZuLnVubW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWU7IG90aGVyd2lzZSwgcmVjdXJzZVxyXG4gICAgLy8gaW50byB0aGUgc3ViLW5vZGVzLlxyXG4gICAgaWYgKG93bkROKVxyXG4gICAgICAgIChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuICAgIGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRjb21taXRSZW1vdmVkTm9kZSggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcbiAgICAvLyBtYXJrIHRoZSBub2RlIGFzIHVubW91bnRlZFxyXG5cdHZuLnRlcm0oKTtcclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC5cclxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sIGdvZXMgdG8gZWl0aGVyIHRoZVxyXG4gICAgLy8gYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3AgKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblxyXG5cdC8vIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG5cdGlmIChzdWJOb2RlcylcclxuICAgIHtcclxuICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkU3ViTm9kZXMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZOOiBWTiwgbmV3Vk46IFZOO1xyXG5cdFx0bGV0IHBhcmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pICYmIG9sZFZOLnByZXBhcmVVcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgcHJlcGFyZVVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AudXBkYXRlRGlzcCA9IG9sZFZOLnByZXBhcmVVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0cmVuZGVyVXBkYXRlZE5vZGUoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdHJlbmRlck5ld05vZGUoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGNvbW1pdFJlbW92ZWROb2RlKCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IHRoZSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZyB1cGRhdGVkLiBUaGlzIGlzIGFsd2F5cyB0aGUgb2xkVk4gbWVtYmVyIG9mXHJcblx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGl0IG1pZ2h0IGhhcHBlbiB0aGF0IHRoZSBub2RlIGJlaW5nIHVwZGF0ZWQgd2FzIGFscmVhZHkgZGVsZXRlZCBieSBpdHMgcGFyZW50LiBDaGVja1xyXG5cdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0Ly8gYW5jaG9yIHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2RlcyB0b28uXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblx0bGV0IGFuY2hvckROID0gb3duRE4gIT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIGlmIHRoaXMgdmlydHVhbCBub2RlIGRvZXNuJ3QgZGVmaW5lIGl0cyBvd24gRE9NIG5vZGUgKHRydWUgZm9yIGNvbXBvbmVudHMpLCB3ZSB3aWxsXHJcblx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRsZXQgYmVmb3JlRE4gPSBvd25ETiAhPSBudWxsID8gbnVsbCA6IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2biwgYW5jaG9yRE4pO1xyXG5cclxuXHQvLyByZS1jcmVhdGUgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHR2bi5zdWJOb2RlcyA9IGRpc3Auc3ViTm9kZURpc3BzID8gbmV3IEFycmF5PFZOPihkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVHcm91cHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNvbW1pdE5ld05vZGUoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHR9XHJcblxyXG5cdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdGlmIChuZXh0Vk4pXHJcblx0XHR7XHJcblx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0Vk4gPSBzdm47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG4vLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVzQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggb2xkVk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9IFxyXG57XHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRhY3Rpb24/OiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRvbGRWTj86IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0dXBkYXRlRGlzcD86IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0c3ViTm9kZURpc3BzPzogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXNUb1JlbW92ZT86IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0c3ViTm9kZUdyb3Vwcz86IFZORGlzcEdyb3VwW107XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcbiAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcDogVk5EaXNwLCBuZXdDaGFpbjogVk5bXSk6IHZvaWRcclxue1xyXG4gICAgbGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuICAgIGxldCBvbGRDaGFpbiA9IGRpc3Aub2xkVk4uc3ViTm9kZXM7XHJcbiAgICBsZXQgb2xkTGVuID0gb2xkQ2hhaW4gPyBvbGRDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuICAgIC8vIGlmIGVpdGhlciBvbGQgb3IgbmV3IG9yIGJvdGggY2hhaW5zIGFyZSBlbXB0eSwgd2UgZG8gc3BlY2lhbCB0aGluZ3NcclxuICAgIGlmIChuZXdMZW4gPT09IDAgJiYgb2xkTGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGJvdGggY2hhaW5zIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBvbGRDaGFpbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ld0NoYWluLm1hcCggbmV3Vk4gPT4geyByZXR1cm4geyBuZXdWTiwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uSW5zZXJ0fSB9KTtcclxuICAgICAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBWTkRpc3BBY3Rpb24uSW5zZXJ0LCAwLCBuZXdMZW4gLSAxKV07XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG4gICAgLy8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG4gICAgLy8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHVwZGF0ZVN0cmF0ZWd5ID0gZGlzcC5vbGRWTiA/IGRpc3Aub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuICAgIC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuICAgIC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcbiAgICBpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IFtjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3AsIG5ld0NoYWluWzBdLCBvbGRDaGFpblswXSwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZSBhbmQgd2UgbmVlZCB0b1xyXG4gICAgLy8gcmVjb25jaWxlIHRoZSBjaGFpbnMuIEZpcnN0IGdvIG92ZXIgdGhlIG9sZCBub2RlcyBhbmQgYnVpbGQgYSBtYXAgb2Yga2V5ZWQgb25lcyBhbmQgYVxyXG4gICAgLy8gbGlzdCBvZiBub24ta2V5ZWQgb25lcy4gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbm9kZSB3aXRoIHRoZSBzYW1lIGtleSwgdGhlIGZpcnN0IG9uZVxyXG4gICAgLy8gZ29lcyB0byB0aGUgbWFwIGFuZCB0aGUgcmVzdCB0byB0aGUgdW5sZXllZCBsaXN0LlxyXG4gICAgbGV0IG9sZEtleWVkTWFwID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3Q6IFZOW10gPSBbXTtcclxuICAgIGxldCBrZXk6IGFueTtcclxuICAgIGZvciggbGV0IG9sZFZOIG9mIG9sZENoYWluKVxyXG4gICAge1xyXG4gICAgICAgIGtleSA9IG9sZFZOLmtleTtcclxuICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYgIW9sZEtleWVkTWFwLmhhcygga2V5KSlcclxuICAgICAgICAgICAgb2xkS2V5ZWRNYXAuc2V0KCBrZXksIG9sZFZOKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9sZFVua2V5ZWRMaXN0LnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1lYmVyIHRoZSBsZW5ndGggb2YgdGhlIHVua2V5ZWQgbGlzdDtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdExlbmd0aCA9IG9sZFVua2V5ZWRMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGFycmF5IGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzXHJcbiAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3TGVuKTtcclxuICAgIFxyXG4gICAgLy8gbG9vcCBvdmVyIG5ldyBub2Rlc1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0SW5kZXggPSAwO1xyXG4gICAgbmV3Q2hhaW4uZm9yRWFjaCggKG5ld1ZOLCBpbmRleCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVk46IFZOID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGxvb2sgdXAgdGhlIG9sZCBub2RlIGJ5IHRoZSBuZXcgbm9kZSdzIGtleSBpZiBleGlzdHNcclxuICAgICAgICBrZXkgPSBuZXdWTi5rZXk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2xkVk4gPSBvbGRLZXllZE1hcC5nZXQoIGtleSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIHRoZSBvbGQgbm9kZSBieSB0aGUga2V5LCByZW1vdmUgaXQgZnJvbSB0aGUgbWFwOyBhZnRlciB0aGVcclxuICAgICAgICAgICAgLy8gcmVjb25jaWxpYXRpb24sIGFsbCBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoaXMgbWFwIHdpbGwgYmUgbWFya2VkIGZvciByZW1vdmFsLlxyXG4gICAgICAgICAgICBpZiAob2xkVk4pXHJcbiAgICAgICAgICAgICAgICBvbGRLZXllZE1hcC5kZWxldGUoIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBpbiB0aGUgdW5rZXllZCBsaXN0IHVzZSB0aGUgbmV4dCBvbmVcclxuICAgICAgICBpZiAoIW9sZFZOICYmIG9sZFVua2V5ZWRMaXN0SW5kZXggIT0gb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkVW5rZXllZExpc3Rbb2xkVW5rZXllZExpc3RJbmRleCsrXTtcclxuXHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHNbaW5kZXhdID0gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwLCBuZXdWTiwgb2xkVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG9sZCBub2RlcyByZW1hbmluZyBpbiB0aGUga2V5ZWQgbWFwIGFuZCBpbiB0aGUgdW5rZXllZCBsaXN0IHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgaWYgKG9sZEtleWVkTWFwLnNpemUgPiAwIHx8IG9sZFVua2V5ZWRMaXN0SW5kZXggPCBvbGRVbmtleWVkTGlzdExlbmd0aClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG4gICAgICAgIG9sZEtleWVkTWFwLmZvckVhY2goIG9sZFZOID0+IGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBvbGRVbmtleWVkTGlzdEluZGV4OyBpIDwgb2xkVW5rZXllZExpc3RMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFVua2V5ZWRMaXN0W2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk4/OiBWTiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuKTogVk5EaXNwXHJcbntcclxuICAgIGxldCBzdWJEaXNwOiBWTkRpc3AgPSB7IG5ld1ZOIH07XHJcbiAgICBpZiAoIW9sZFZOKVxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgIGVsc2UgaWYgKG9sZFZOID09PSBuZXdWTiB8fFxyXG4gICAgICAgICgoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgfHwgbmV3Vk4ua2V5ID09PSBvbGRWTi5rZXkpICYmIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbiBiZSB1cGRhdGVkIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgbmV3IG5vZGVcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcbiAgICAgICAgc3ViRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbm5vdCBiZSB1cGRhdGVkLCBzbyB0aGUgbmV3IG5vZGUgd2lsbCBiZSBpbnNlcnRlZCBhbmQgdGhlIG9sZCBub2RlIHdpbGxcclxuICAgICAgICAvLyBiZSByZW1vdmVkXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG4gICAgICAgIGlmICghZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJEaXNwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcbiAgICBsZXQgY291bnQgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHByZS1kZXRlcm1pbmVkIHRocmVzaG9sZFxyXG4gICAgICAgIGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZ3JvdXBzIGFuZCBjcmVhdGUgdGhlIGZpcnN0IGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IG5vZGVcclxuICAgIGxldCBncm91cDogVk5EaXNwR3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGRpc3Auc3ViTm9kZURpc3BzWzBdLmFjdGlvbiwgMCk7XHJcbiAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbZ3JvdXBdO1xyXG5cclxuICAgIC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZSB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cFxyXG4gICAgLy8gb3IgcHV0IHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3IgY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuXHJcbiAgICAvLyBhIG5ldyBvbmUuXHJcbiAgICBsZXQgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHN1YkRpc3AgPSBkaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuICAgICAgICBhY3Rpb24gPSBzdWJEaXNwLmFjdGlvbjtcclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXguIERlY3JlbWVudCB0aGUgaXRlcmF0aW5nIGluZGV4IHNvIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuICAgICAgICAgICAgLy8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgYWN0aW9uLCBpKTtcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYW4gXCJ1cGRhdGVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcbiAgICAgICAgICAgIC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG4gICAgICAgICAgICAvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcbiAgICAgICAgICAgIGlmIChkaXNwLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBzdWJEaXNwLm9sZFZOLnByZXYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuICAgICAgICAvLyBuZXh0IG5vZGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbGFzdCBncm91cFxyXG4gICAgaWYgKGdyb3VwICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZ3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVwZGF0ZSBvZiB0aGUgZ2l2ZW4gb2xkIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbmV3IG5vZGUgaXMgcG9zc2libGUuIFVwZGF0ZVxyXG4gKiBpcyBwb3NzaWJsZSBpZiB0aGUgdHlwZXMgb2Ygbm9kZXMgYXJlIHRoZSBzYW1lIGFuZCBlaXRoZXIgdGhlIGlzVXBkYXRlUG9zc2libGUgbWV0aG9kIGlzIG5vdFxyXG4gKiBkZWZpbmVkIG9uIHRoZSBvbGQgbm9kZSBvciBpdCByZXR1cm5zIHRydWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTjogVk4sIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldEZpcnN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0Rmlyc3RETiggc3ZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bjogVk4sIGFuY2hvckROOiBETik6IEROXHJcbntcclxuXHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0aWYgKHZuLnN1Yk5vZGVzICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1t2bi5zdWJOb2Rlcy5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAoZG4pXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0Zm9yKCBsZXQgbnZuID0gdm4ubmV4dDsgbnZuICE9PSB1bmRlZmluZWQ7IG52biA9IG52bi5uZXh0KVxyXG5cdHtcclxuXHRcdGlmICghbnZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHQvLyBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRjb25zdCBkbiA9IGdldExhc3RETiggbnZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdHJldHVybiB2bi5wYXJlbnQgJiYgdm4ucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETiA/IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bi5wYXJlbnQsIGFuY2hvckROKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcbmZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZSArIChudm4uY3JlYXRvciAmJiBudm4uY3JlYXRvci52biA/IGAgKGNyZWF0ZWQgYnkgJHtudm4uY3JlYXRvci52bi5uYW1lfSlgIDogXCJcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGF0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGVpdGhlciBhIHNpbmdsZSB2aXJ0dWFsIG5vZGUgb3IgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LlxyXG4vLyBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW4gYXJyYXksIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0XHJcbi8vIGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW4gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHNcclxuLy8gbWlnaHQgYWxzbyBiZSBhcnJheXMsIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBJQ29tcG9uZW50KS52blxyXG5cdFx0XHRcdFx0XHQ/IChjb250ZW50IGFzIElDb21wb25lbnQpLnZuIGFzIFZOXHJcblx0XHRcdFx0XHRcdDogbmV3IEluZGVwZW5kZW50Q29tcFZOKCBjb250ZW50IGFzIElDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5mdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyAobm9kZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGVzKSA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBGcmFnbWVudClcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gRnVuY1Byb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLmZ1bmMpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYSBub2RlIGxpbmtlZCB0byB0aGlzIGZ1bmN0aW9uLiBJZiB5ZXMgcmV0dXJuIGl0O1xyXG5cdFx0Ly8gb3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgbm9kZS5cclxuXHRcdGxldCBmdW5jUHJveHlQcm9wcyA9IHByb3BzIGFzIEZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBQcm9taXNlUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMucHJvbWlzZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlXHJcblx0XHQvLyBhbiBhcnJheSBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZVxyXG5cdFx0Ly8gdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgY2hpbGRyZW4gaW4gSlNYIHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGhlIFR5cGVTY3JpcHRcclxuXHRcdC8vIGNvbXBpbGVyOlxyXG5cdFx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdIChhcyBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXSAoYXMgTk9UIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdFx0VGhpcyBsb29rcyBsaWtlIGEgVHlwZVNjcmlwdCBidWcuXHJcblx0XHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdFx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdFx0aWYgKHR5cGVvZiB0YWcucHJvdG90eXBlLnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXR1cm4gbmV3IE1hbmFnZWRDb21wVk4oIHRhZyBhcyBJQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIEZ1bmNDb21wVHlwZSwgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIERFQlVHXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcblx0Ly8vICNlbmRpZlxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUVycm9ySGFuZGxpbmdTZXJ2aWNlLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLndhaXRpbmcgPyBudWxsIDogdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHR0aGlzLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheXMgdGhlIGNvbnRlbnQgb3JpZ2luYWxseSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHB1YmxpYyByZXN0YXJ0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gYmUgdXBkYXRlZFxyXG5cdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBmdWxmaWxsZWQgcHJvbWlzZSBmcm9tIG91ciBpbnRlcm5hbCBsaXN0IGFuZCBpZiB0aGUgbGlzdCBpcyBlbXB0eSBhc2tzIHRvXHJcblx0Ly8gcmUtcmVuZGVyXHJcblx0cHJpdmF0ZSBvblByb21pc2VGdWxmaWxsZWQoIHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRocm93blByb21pc2VzLmRlbGV0ZSggcHJvbWlzZSk7XHJcblx0XHRpZiAodGhpcy50aHJvd25Qcm9taXNlcy5zaXplID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndhaXRpbmcgPSBmYWxzZTtcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb250ZW50IHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlLlxyXG5cdHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCBhbiBleGNlcHRpb24gd2FzIGNhdWdodCBmcm9tIGRlc2NlbmRhbmQgbm9kZXMuXHJcblx0cHJpdmF0ZSBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCBhIHByb21pc2UgdGhyb3duIGFzIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIHdhaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gU2V0IG9mIHByb21pc2VzIHRocm93biBieSBkZXNjZW5kYW50IG5vZGVzIGFuZCBub3QgeWV0IGZ1bGZpbGxlZC5cclxuXHRwcml2YXRlIHRocm93blByb21pc2VzID0gbmV3IFNldDxQcm9taXNlPGFueT4+KCk7XHJcbn1cclxuXHJcblxyXG5cclxubGV0IHN5bVJvb3RNb3VudFBvaW50ID0gU3ltYm9sKFwic3ltUm9vdE1vdW50UG9pbnRcIik7XHJcblxyXG5cclxuXHJcbi8vIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgYSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24gb3IgYSBjb21wb25lbnQgaW5zdGFuY2UpXHJcbi8vIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJvb3QoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHJcblx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgcm9vdCBub2RlIHJlbWVtYmVyZWQgaW4gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93blxyXG5cdC8vIHByb3BlcnR5XHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3N5bVJvb3RNb3VudFBvaW50XTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3N5bVJvb3RNb3VudFBvaW50XSA9IHJvb3RWTjtcclxuXHR9XHJcblxyXG5cdC8vIHNldCBjb250ZW50IHRvIHRoZSByb290IG5vZGUsIHdoaWNoIHdpbGwgdHJpZ2dlciB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgZmFsc2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFVubW91bnRzIGEgcm9vdCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgdXNpbmcgbW91bnRSb290LlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3QoIGFuY2hvckROOiBETik6IHZvaWRcclxue1xyXG5cdGxldCByZWFsQW5jaG9yRE46IEROID0gYW5jaG9yRE4gPyBhbmNob3JETiA6IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFyZWFsQW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eS5cclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyByZW1vdmUgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRkZWxldGUgcmVhbEFuY2hvckROW3N5bVJvb3RNb3VudFBvaW50XTtcclxuXHJcblx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIGZhbHNlKTtcclxuXHRyb290Vk4uc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoICgpID0+IHJvb3RWTi53aWxsVW5tb3VudCgpICk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU2NoZWR1bGVyLCByZWdpc3RlclNjaGVkdWxlciwgc2V0RGVmYXVsdFNjaGVkdWxlclR5cGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge3NjaGVkdWxlRnVuY0NhbGx9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTY2hlZHVsZXIgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIHNjaGVkdWxpbmcgd3JpdGluZyBzdHlsZS1yZWxhdGVkIGluZm9ybWF0aW5vIHRvXHJcbiAqIHRoZSBET00gdXNpbmcgdGhlIE1pbWJsIHNjaGVkdWxpbmcgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuY2xhc3MgU3R5bGVTY2hlZHVsZXIgaW1wbGVtZW50cyBJU2NoZWR1bGVyXHJcbntcclxuICAgIC8vIENhbGxiYWNrIHRvIGNhbGwgdG8gd3JpdGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG5cdHByaXZhdGUgZG9ET01VcGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggdGhpcy5vblVwZGF0ZSwgZmFsc2UsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBjYW5jZWxzIGl0cyBzY2hlZHVsZWQgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgdGltZW91dCBleHBpcmVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZG9ET01VcGRhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIHN0eWxlIHNjaGVkdWxlciB1c2VkIGJ5IE1pbWJsIHRvIHNjaGVkdWxlIHdyaXRpbmcgc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfaW5pdFN0eWxlU2NoZWR1bGVyKCk6IG51bWJlclxyXG57XHJcbiAgICBsZXQgc2NoZWR1bGVyVHlwZSA9IHJlZ2lzdGVyU2NoZWR1bGVyKCBuZXcgU3R5bGVTY2hlZHVsZXIoKSk7XHJcbiAgICBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZSk7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lUZXh0Vk4sIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZSwgRE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSB0ZXh0IG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSVRleHRWTlxyXG57XHJcblx0Ly8gVGV4dCBmb3IgYSBzaW1wbGUgdGV4dCBub2RlLlxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRwdWJsaWMgdGV4dE5vZGU6IFRleHQ7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRleHQ6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLlRleHQ7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiI3RleHRcIjsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy50ZXh0Tm9kZTsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIHN1Yi1ub2Rlc1xyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCB0aGlzLnRleHQgIT09IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZS5ub2RlVmFsdWUgPSB0aGlzLnRleHQgPSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0O1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lWTm9kZSwgSUNvbXBvbmVudCwgVXBkYXRlU3RyYXRlZ3l9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vIFVzZSB0eXBlIEROIHRvIHJlZmVyIHRvIERPTSdzIE5vZGUgY2xhc3MuIFRoZSBET00gbm9kZXMgdGhhdCB3ZSBhcmUgZGVhbGluZyB3aXRoIGFyZVxyXG4vLyBlaXRoZXIgb2YgdHlwZSBFbGVtZW50IG9yIFRleHQuXHJcbmV4cG9ydCB0eXBlIEROID0gTm9kZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTiBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgYXJlIG9wdGlvbmFsbHkgaW1wbGVtZW50ZWQgYnkgYWxsXHJcbiAqIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cmVhZG9ubHkgc3RhdHNDYXRlZ29yeTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IElDb21wb25lbnQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdG5leHQ/OiBWTjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwcmV2PzogVk47XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlcz86IFZOW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogSUNvbXBvbmVudCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHRlcm0oKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vXHJcblx0Ly8gTGlmZSBjeWNsZSBtZXRob2RzXHJcblx0Ly9cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhhdCBtZWFucyB0aGUgbm9kZVxyXG5cdC8vIG5ldmVyIGhhcyBjaGlsZHJlbiAtIGZvciBleGFtcGxlIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlbmRlcj8oKTogYW55O1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0ZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZCBvbmx5IG9uIG5vZGVzXHJcblx0Ly8gdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IHJlbGVhc2UgdGhlIGludGVybmFsbHkgaGVsZCByZWZlcmVuY2VcclxuXHQvLyB0byB0aGUgRE9NIG5vZGUgLSB0aGUgYWN0dWFsIHJlbW92YWwgb2YgdGhlIG5vZGUgZnJvbSBET00gaXMgZG9uZSBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBJZiB0aGlzIG1ldGhvZCBpc1xyXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCB0aGUgdXBkYXRlIGlzIGNvbnNpZGVyZWQgcG9zc2libGUgLSBlLmcuIGZvciB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRpc1VwZGF0ZVBvc3NpYmxlPyggbmV3Vk46IFZOKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRjb21taXRVcGRhdGU/KCBuZXdWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCB0aGUgbm9kZVxyXG5cdC8vIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cmVhZG9ubHkgc3VwcG9ydHNFcnJvckhhbmRsaW5nPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyBwcmVwYXJlVXBkYXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTlVwZGF0ZURpc3Bcclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvdWxkQ29tbWl0ID0gc2hvdWxkQ29tbWl0O1xyXG5cdFx0dGhpcy5zaG91bGRSZW5kZXIgPSBzaG91bGRSZW5kZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCBmYWxzZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3RvY2tWYWx1ZSggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNob3VsZENvbW1pdFxyXG5cdFx0XHQ/IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLkRvQ29tbWl0Tm9SZW5kZXJcclxuXHRcdFx0OiBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdE5vUmVuZGVyO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIFZOVHlwZSwgSUNvbXBvbmVudCwgU2NoZWR1bGVkRnVuY1R5cGUsIFJlZlByb3BUeXBlLCBzZXRSZWZ9IGZyb20gXCIuLi9hcGkvbWltXCI7XHJcbmltcG9ydCB7XHJcbiAgICBWTiwgRE4sIG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCwgcmVxdWVzdE5vZGVVcGRhdGUsXHJcbiAgICBzY2hlZHVsZUZ1bmNDYWxsLCBub3RpZnlTZXJ2aWNlUHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCwgd3JhcENhbGxiYWNrV2l0aFZOXHJcbn0gZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuICAgIGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuLy8vICNpZiBERUJVR1xyXG4gICAgbGV0IGdfbmV4dFZORGVidWdJRCA9IDE7XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTkJhc2UgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWTkJhc2UgaW1wbGVtZW50cyBWTlxyXG57XHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQgbmFtZSgpOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5vZGUncyB0eXBlLlxyXG5cdHB1YmxpYyB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlLiBUaGlzIGlzIG51bGwgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBwYXJlbnQ6IFZOQmFzZTtcclxuXHJcblx0LyoqIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGluIGl0cyByZW5kZXIgbWV0aG9kIChvciB1bmRlZmluZWQpLiAqL1xyXG5cdHB1YmxpYyBjcmVhdG9yOiBJQ29tcG9uZW50O1xyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuXHJcblx0cHVibGljIGFuY2hvckROOiBETjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuXHJcblx0cHVibGljIG5leHQ6IFZOQmFzZTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwdWJsaWMgcHJldjogVk5CYXNlO1xyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2RlcyAtIGJvdGgga2V5ZWQgYW5kIHVua2V5ZWQgLSBkZWZpbmVkIG9ubHkgaWYgdGhlcmUgYXJlIHNvbWUgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdWJOb2RlczogVk5CYXNlW107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRwdWJsaWMgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRwdWJsaWMgbGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IElDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLmRlcHRoID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5kZXB0aCArIDEgOiAwO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYW5zIHVwIHRoZSBub2RlIG9iamVjdCBiZWZvcmUgaXQgaXMgcmVsZWFzZWQuXHJcblx0cHVibGljIHRlcm0oKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbW92ZSBpbmZvcm1hdGlvbiBhYm91dCBhbnkgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHNlcnZpY2VzXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmZvckVhY2goIChzZXJ2aWNlLCBpZCkgPT4gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcykpO1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmZvckVhY2goIChpbmZvLCBpZCkgPT4gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnN1Yk5vZGVzID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5kZXB0aCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBtb3VudGVkICovXHJcblx0cHVibGljIGdldCBpc01vdW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuYW5jaG9yRE47IH1cclxuXHJcblxyXG5cclxuXHQvLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGlzIG5vZGUuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy51cGRhdGVSZXF1ZXN0ZWQpXHJcblx0XHR7XHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHRcdFx0dGhpcy51cGRhdGVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIHRydWUsIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgZmFsc2UsIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdC8vIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgbm9kZXMuXHJcblx0cHVibGljIHB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxuXHJcblx0XHRsZXQgZXhpc3RpblNlcnZpY2U6IGFueSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoZXhpc3RpblNlcnZpY2UgIT09IHNlcnZpY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuc2V0KCBpZCwgc2VydmljZSk7XHJcblx0XHRcdG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyB1bnB1Ymxpc2hTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3Vic2NyaWJlcyBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0Ly8gYnkgb25lIG9mIHRoZSBhbmNlc3RvciBub2RlcywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0OyBvdGhlcndpc2UsXHJcblx0Ly8gdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0Ly8gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3Igbm9kZSBpc1xyXG5cdC8vIGNoYW5nZWQsIHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdHB1YmxpYyBzdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nLCByZWY6IFJlZlByb3BUeXBlLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+KCk7XHJcblxyXG5cdFx0bGV0IGluZm8gPSBuZXcgVk5TdWJzY3JpYmVkU2VydmljZUluZm8oKTtcclxuXHRcdGluZm8ucmVmID0gcmVmO1xyXG5cdFx0aW5mby5kZWZhdWx0U2VydmljZSA9IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdFx0aW5mby51c2VTZWxmID0gdXNlU2VsZiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zZXQoIGlkLCBpbmZvKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblx0XHRzZXRSZWYoIHJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgZGVmYXVsdFNlcnZpY2UpKTtcclxufVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmUsXHJcblx0Ly8gd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdHB1YmxpYyB1bnN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRSZWYoIGluZm8ucmVmLCB1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQvLyBub2RlIG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQvLyB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRwdWJsaWMgZ2V0U2VydmljZSggaWQ6IHN0cmluZywgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBpZCwgdXNlU2VsZik7XHJcblx0XHRyZXR1cm4gc2VydmljZSAhPT0gdW5kZWZpbmVkID8gc2VydmljZSA6IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIHVwIHRoZSBjaGFpbiBvZiBub2RlcyBsb29raW5nIGZvciBhIHB1Ymxpc2hlZCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBSZXR1cm5zXHJcblx0Ly8gdW5kZWZpbmVkIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCBmb3VuZC4gTm90ZSB0aGF0IG51bGwgbWlnaHQgYmUgYSB2YWxpZCB2YWx1ZS5cclxuXHRwcml2YXRlIGZpbmRTZXJ2aWNlKCBpZDogc3RyaW5nLCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGlmICh1c2VTZWxmKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHNlcnZpY2UgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0XHRcdGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gc2VydmljZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdvIHVwIHRoZSBjaGFpbjsgbm90ZSB0aGF0IHdlIGRvbid0IHBhc3MgdGhlIHVzZVNlbGYgcGFyYW1ldGVyIG9uLlxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZmluZFNlcnZpY2UoIGlkLCB0cnVlKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIG5vZGUgdGhhdCBwdWJsaWNhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gc2VydmljZSAodG8gd2hpY2ggdGhlIG5vZGVcclxuXHQvLyBoYXMgcHJldmlvdXNseSBzdWJzY3JpYmVkKSBoYXMgY2hhbmdlZC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZUNoYW5nZWQoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHNldFJlZiggaW5mby5yZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGluZm8uZGVmYXVsdFNlcnZpY2UpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3NcclxuXHQgKiB0byBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBDb21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBcclxuXHQgKi9cclxuXHRwdWJsaWMgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoaXNDYWxsYmFjaywgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXJ2aWNlIG9iamVjdHMgcHVibGlzaGVkIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHB1Ymxpc2hlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLGFueT47XHJcblxyXG5cdC8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBvYmplY3RzIGNvbnN0aXR1dGluZyBzdWJzY3JpcHRpb25zIG1hZGUgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgc3Vic2NyaWJlZFNlcnZpY2VzOiBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPjtcclxuXHJcbiAgICAvLy8gI2lmIERFQlVHXHJcbiAgICBwcml2YXRlIGRlYnVnSUQgPSBnX25leHRWTkRlYnVnSUQrKztcclxuXHQvLy8gI2VuZGlmXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5TdWJzY3JpYmVkU2VydmljZUluZm8gY2xhc3Mga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24gb2YgYSBub2RlIHRvIGEgc2VydmljZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvXHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIGZpbGxlZCBpbiB3aXRoIHRoZSBzZXJ2aWNlIHZhbHVlXHJcblx0cmVmOiBSZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBEZWZhdWx0IHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyBwdWJsaXNoZXMgdGhlXHJcblx0Ly8gc2VydmljZVxyXG5cdGRlZmF1bHRTZXJ2aWNlOiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBjYW4gc3Vic2NyaWJlIHRvIGEgc2VydmljZSB0aGF0IGl0IGltcGxlbWVudHMgaXRzZWxmLiBUaGlzXHJcblx0Ly8gaXMgdXNlZnVsIGluIGNhc2Ugd2hlcmUgYSBzZXJ2aWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYSBjb21wb25lbnQgY2FuIGNoYWluIHRvIGEgc2VydmljZVxyXG5cdC8vIGltcGxlbWVudGVkIGJ5IGFuIGFuY2VzdG9yIGNvbXBvbmVudC5cclxuXHR1c2VTZWxmOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9FdmVudFNsb3RcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdmdUeXBlc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIlxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNaW1ibC1zcGVjaWZpYyBzdHlsZSBzY2hlZHVsZXIgdGhhdCBjb29yZGluYXRlcyBNaW1jc3MgRE9NIHdyaXRpbmcgd2l0aCBNaW1ibFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtzX2luaXRTdHlsZVNjaGVkdWxlcn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxyXG5cclxuLy8gU2V0IE1pbWJsIHN0eWxlIHNjaGVkdWxlciBhcyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgZm9yIHN0eWxlLXJlbGF0ZWQgRE9NLXdyaXRpbmcgb3BlcmF0aW9ucy5cclxuZXhwb3J0IGxldCBtaW1ibFN0eWxlU2NoZWR1bGVyVHlwZSA9IHNfaW5pdFN0eWxlU2NoZWR1bGVyKCk7XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9VdGlsRnVuY1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0V2ZW50U2xvdFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0VsbUF0dHJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1ZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9WTkJhc2VcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0NsYXNzQ29tcFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9JbmRlcGVuZGVudENvbXBWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvTWFuYWdlZENvbXBWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRWxtVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0Z1bmNWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1Byb21pc2VQcm94eVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9UZXh0Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1Jvb3RWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvU3R5bGVTY2hlZHVsZXJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1B1YlN1YlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvUmVjb25jaWxlclwiXHJcbiIsIu+7v2ltcG9ydCB7U3R5bGVzZXQsIHNldEVsZW1lbnRTdHlsZSwgU2NoZWR1bGVyVHlwZSwgZGlmZlN0eWxlc2V0cywgU3RyaW5nU3R5bGVzZXQsIHNldEVsZW1lbnRTdHJpbmdTdHlsZX0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7SUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzc30gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi9TdGF0c1wiO1xyXG4vLy8gI2VuZGlmXHJcbjsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBvZiBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3BUeXBlXHJcbntcclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRBdHRyID0gMSxcclxuXHJcblx0Ly8gRXZlbnQgbGlzdGVuZXJzIHNldCB1c2luZyBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcclxuXHRFdmVudCA9IDIsXHJcblxyXG5cdC8vIEN1c3RvbSBhdHRyaWJ1dGVzIGZvciB3aGljaCBoYW5kbGVyIGZhY3RvcmllcyBhcmUgcmVnaXN0ZXJlZFxyXG5cdEN1c3RvbUF0dHIgPSAzLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGtlcHQgYWJvdXQgcHJvcGVydHkgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIHByb3BlcnR5LlxyXG5cdHR5cGU6IFByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzZXR0aW5nLCBkaWZmaW5nLCB1cGRhdGluZyBhbmRcclxuLy8gcmVtb3ZpbmcgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZSBhbmQgcHJvcFZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHNldD86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcblx0Ly8gdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdXBkYXRlRnVuYyBmdW5jdGlvbi4gSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCB0aGUgdmFsdWUgb2YgdGhlXHJcblx0Ly8gYXR0cmlidXRlIHdpbGwgbm90IGNoYW5nZSAodGhhdCBtZWFucyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBhcmUgZXF1YWwpLiBJZiB0aGlzXHJcblx0Ly8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHByb3BlcnR5IHZhbHVlcyBhcmUgY29udmVydGVkIHRvIHN0cmluZyBhbmQgY29tcGFyZWQgYXMgc3RyaW5ncy5cclxuXHQvLyBJZiB0aGVzZSBzdHJpbmdzIGFyZSBkaWZmZXJlbnQsIHRoZSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgIG5ldyB2YWx1ZSBpcyByZXR1cm5lZC5cclxuXHRkaWZmPzogKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkXHJcblx0Ly8gZnJvbSB0aGUgZGlmZiBmdW5jdGlvbi4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgc2V0IGZ1bmN0aW9uIGlzIHVzZWQuIElmXHJcblx0Ly8gdGhlIHNldCBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCBlaXRoZXIsIHRoZSBET00gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhc1xyXG5cdC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCB1cGRhdGVWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHR1cGRhdGU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5yZW1vdmVBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUuXHJcblx0cmVtb3ZlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcblx0Ly8gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuIFRoaXMgaXMgc29tZXRpbWVzIG5lZWRlZCBpZiB0aGUgYXR0cmlidXRlIG5hbWUgY2Fubm90IGJlXHJcblx0Ly8gdXNlZCBhcyBwcm9wZXJ0eSBuYW1lIC0gZm9yIGV4YW1wbGUsIGlmIGF0dHJpYnV0ZSBuYW1lIGNvbnRhaW5zIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW5cclxuXHQvLyBUeXBlU2NyaXB0IGlkZW50aWZpZXIgKGUuZy4gZGFzaCkuXHJcblx0YXR0ck5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGJ1YmJsZXMuIElmIHRoZSBldmVudCBkb2Vzbid0IGJ1YmJsZSwgdGhlIGV2ZW50IGhhbmRsZXJcclxuXHQvLyBtdXN0IGJlIHNldCBvbiB0aGUgZWxlbWVudCBpdHNlbGY7IG90aGVyd2lzZSwgdGhlIGV2ZW50IGhhbmRsZXIgY2FuIGJlIHNldCBvbiB0aGUgcm9vdFxyXG5cdC8vIGFuY2hvciBlbGVtZW50LCB3aGljaCBhbGxvd3MgaGF2aW5nIGEgc2luZ2xlIGV2ZW50IGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgbWFueSBlbGVtZW50cyxcclxuXHQvLyB3aGljaCBpcyBtb3JlIHBlcmZvcm1hbnQuXHJcblx0aXNCdWJibGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIENsYXNzIG9iamVjdCB0aGF0IGNyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0c2V0RWxlbWVudFN0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHByb3BWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IFN0eWxlc2V0LCBuZXdQcm9wVmFsOiBTdHlsZXNldCk6IGFueVxyXG57XHJcblx0bGV0IHJlcyA9IGRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgdXBkYXRlVmFsLCBTY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlIGxpc3RlbmVycyBjYW4gYmVcclxuICogYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0YXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0ZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGN1cnJlbnRseSBhdHRhY2hlZCBsaXN0ZW5lcnMuICovXHJcblx0cmVhZG9ubHkgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFdmVudFNsb3RPd25lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBldmVudCBzbG90IGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhlIGNhbGxlciB3aG9cclxuICogY3JlYXRlZCBpdC4gVGhlIG93bmVyIGNhbiBmaXJlIGV2ZW50cyBhbmQgY2xlYXIgZXZlbnQgbGlzdGVuZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90T3duZXI8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj4gZXh0ZW5kcyBJRXZlbnRTbG90PFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRmaXJlOiBURnVuYztcclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbiAqIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbiAqIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBpbXBsZW1lbnRzIElFdmVudFNsb3RPd25lcjxURnVuYz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdCAqIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ICovXHJcblx0cHVibGljIGZpcmU6IFRGdW5jID0gdGhpcy5yZWFsRmlyZSBhcyBhbnkgYXMgVEZ1bmM7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSBhIGxhbWJkYVxyXG5cdCAqIGZ1bmN0aW9uIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gcmVtb3ZlIGEgbGFtYmRhIGZ1bmN0aW9uIGxpc3RlbmVyIGxhdGVyLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhdHRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgPT09IG51bGwpXHJcblx0XHRcdHRoaXMubGlzdGVuZXJzID0gbmV3IFNldDxURnVuYz4oKTtcclxuXHJcblx0XHR0aGlzLmxpc3RlbmVycy5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY3VycmVudGx5IGF0dGFjaGVkIGxpc3RlbmVycy4gKi9cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnNpemU7IH1cclxuICAgIFxyXG5cclxuICAgIFxyXG5cdC8qKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXQgb2YgbGlzdGVuZXIgZnVuY3Rpb25zLiBXaGVuIHRoZXJlIGFyZSBubyBsaXN0ZW5lcnMsIHRoaXMgZmllbGQgaXMgc2V0IHRvIG51bGwgdG9cclxuXHQvLyBwcmVzZXJ2ZSBzcGFjZS5cclxuXHRwcml2YXRlIGxpc3RlbmVyczogU2V0PFRGdW5jPiA9IG51bGw7XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgcmVhbGx5IGNhbGxzIHRoZSBsaXN0ZW5lcnMgaW4gYSBsb29wLiBJdCBkZWNvbnN0dWN0cyB0aGUgXCJhcmd1bWVudHNcIiB2YWx1ZVxyXG5cdC8vIGluIG9yZGVyIHRvIHBhc3MgdGhlIHByb3BlciBwYXJhbWV0ZXJzIHRvIHRoZSBsaXN0ZW5lcnMuXHJcblx0cHJpdmF0ZSByZWFsRmlyZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcclxuXHRcdFx0XHRsaXN0ZW5lciggLi4uYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW50ZXJmYWNlIGFuZCBjbGFzcyBmb3Igc2ltcGxlIGV2ZW50cyBhY2NlcHRpbmcgbm8gcGFyYW1ldGVycy5cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgSUV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIEV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdCB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZSBUXHJcbiAqIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogSUV2ZW50U2xvdDwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdChuZXdWYWw6IG51bWJlcikgPT4gdm9pZD47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlFdmVudFNsb3Q8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90PFRbUF0+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3RPd25lciB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZVxyXG4gKiBUIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3RPd25lcjxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90T3duZXI8KCkgPT4gdm9pZD47XHJcbiAqICAgICBjaGFuZ2U6IElFdmVudFNsb3RPd25lcihuZXdWYWw6IG51bWJlcikgPT4gdm9pZD47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlFdmVudFNsb3RPd25lcjxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3RPd25lcjxUW1BdPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlbnQgc2xvdHMgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIHRlbXBsYXRlIHR5cGUgVC4gVGhlXHJcbiAqIGNhbGxlciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZXZlbnQgc2xvdHM7IHRoYXQgaXMsIGl0IHdpbGwgYmUgYWJsZSB0byBmaXJlIGV2ZW50cyBhbmRcclxuICogY2xlYXIgYWxsIGxpc3RlbmVycyB3aGVuIG5lY2Vzc2FyeS4gVGhpcyBhbGxvd3MgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBcclxuICogaW50ZXJmYWNlIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIGV2ZW50czogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPjtcclxuICogICAgIGRvU29tZXRoaW5nKCk6IHZvaWQ7XHJcbiAqIH1cclxuICogXHJcbiAqIGNsYXNzIE15Q2xhc3MgaW1wbGVtZW50cyBJTXlDbGFzc1xyXG4gKiB7XHJcbiAqICAgICBwcml2YXRlIF9ldmVudHMgPSBjcmVhdGVNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+KCk7XHJcbiAqICAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+IHsgcmV0dXJuIHRoaXMuX2V2ZW50czsgfVxyXG4gKiBcclxuICogICAgIHB1YmxpYyBkb1NvbWV0aGluZygpOiB2b2lkIHsgdGhpcy5fZXZlbnRzLmNoYW5nZS5maXJlKDEpO31cclxuICogfVxyXG4gKiBcclxuICogbGV0IG9iajogSU15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xyXG4gKiBvYmouZXZlbnRzLmNoYW5nZS5hZGQoIChuOiBudW1iZXIpID0+IGNvbnNvbGUubG9nKG4pKTtcclxuICogb2JqLmRvU29tZXRoaW5nKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpRXZlbnRTbG90PFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PigpOiBNdWx0aUV2ZW50U2xvdE93bmVyPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IFByb3h5KCB7fSwgbmV3IE11bHRpRXZlbnRTbG90SGFuZGxlcigpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIHByb3h5IGhhbmRsZXIgZm9yIHRoZSBNdWx0aUV2ZW50U2xvdCBvYmplY3QuIFRoZSBoYW5kbGVyIGRvZXNuJ3QgdXNlIGFueVxyXG4gKiB0YXJnZXQgb2JqZWN0IC0gaXQgc2ltcGx5IGNyZWF0ZXMgRXZlbnRTbG90IHByb3BlcnR5IGluIGl0c2VsZiB3aGVuZXZlciB0aGUgZ2V0IG1ldGhvZCBpc1xyXG4gKiBjYWxsZWQuIFRoZSBUeXBlU2NyaXB0J3MgdHlwZSBjaGVja2luZyBlbnN1cmVzIHRoYXQgb25seSBwcm9wZXIgZXZlbnQgc2xvdCBuYW1lcyBjYW4gYmUgdXNlZC5cclxuICovXHJcbmNsYXNzIE11bHRpRXZlbnRTbG90SGFuZGxlclxyXG57XHJcblx0cHVibGljIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IHN0cmluZywgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzW3Byb3BdID8gdGhpc1twcm9wXSA6IHRoaXNbcHJvcF0gPSBuZXcgRXZlbnRTbG90KCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXJpbmcgdXBkYXRlIHN0YXRpc3RpY3NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBDYXRlZ29yaWVzIG9mIGNoYW5nZWQgZW50aXRpZXMgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuXHJcbmV4cG9ydCBlbnVtIFN0YXRzQ2F0ZWdvcnlcclxue1xyXG5cdFJvb3QsXHJcblx0Q29tcCxcclxuXHRFbG0sXHJcblx0VGV4dCxcclxuXHRBdHRyLFxyXG5cdEV2ZW50LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFjdGlvbnMgb24gYW4gZW50aXR5IHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LiBOb3QgYWxsIGFjdGlvbnMgYXJlIHJlbGV2YW50IGZvciBhbGxcclxuLy8gY2F0ZWdvcmllczpcclxuLy9cdC0gVXBkYXRlZCBkb2Vzbid0IGV4aXN0IGZvciBjb21wb25lbnRzIGFuZCBmb3IgZWxlbWVudHNcclxuLy9cdC0gTW92ZWQgZG9lc24ndCBleGlzdCBmb3IgYXR0cmlidXRlc1xyXG4vL1x0LSBSZW5kZXJlZCBvbmx5IGV4aXN0cyBmb3IgY29tcG9uZW50c1xyXG5leHBvcnQgZW51bSBTdGF0c0FjdGlvblxyXG57XHJcblx0QWRkZWQ9IDEsXHJcblx0RGVsZXRlZCA9IDIsXHJcblx0VXBkYXRlZCA9IDMsXHJcblx0TW92ZWQgPSA0LFxyXG5cdFJlbmRlcmVkID0gNSxcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9yYWdlIGZvciBhIG51bWJlciBvZiBlYWNoIGFjdGlvbiB1bmRlciBhIGNhdGVnb3J5LlxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTdGF0c1xyXG57XHJcblx0YWRkZWQ6IG51bWJlciA9IDA7XHJcblx0ZGVsZXRlZDogbnVtYmVyID0gMDtcclxuXHR1cGRhdGVkOiBudW1iZXIgPSAwO1xyXG5cdG1vdmVkOiBudW1iZXIgPSAwO1xyXG5cdHJlbmRlcmVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwdWJsaWMgaGFzU29tZURhdGEoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmFkZGVkIHx8IHRoaXMuZGVsZXRlZCB8fCB0aGlzLnVwZGF0ZWQgfHwgdGhpcy5tb3ZlZCB8fCB0aGlzLnJlbmRlcmVkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsZWRTdGF0c1xyXG57XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN0YXJ0VGltZTogbnVtYmVyO1xyXG5cdGR1cmF0aW9uOiBudW1iZXI7XHJcblx0Y29tcDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZWxtOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHR0ZXh0OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRhdHRyOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRldmVudDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSAwLjA7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RvcCggcHJpbnRTdW1tYXJ5OiBib29sZWFuID0gdHJ1ZSlcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcblx0XHRpZiAocHJpbnRTdW1tYXJ5KVxyXG5cdFx0XHRjb25zb2xlLmxvZyggdGhpcy50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gaW5jcmVtZW50cyB0aGVudW1iZXIgb2YgdGltZXMgdGhlIGdpdmVuIGFjdGlvbiB3YXMgcGVyZm9ybWVkIG9uIGFuIGVudGl0eSBvZiBhIGdpdmVuXHJcblx0Ly8gY2F0ZWdvcnkuIElmIHRoZSBlbnRpdHkgaXMgYSBET00gZW50aXR5IChhcyBvcHBvc2VkIHRvIGEgY29tcG9uZW50KSwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gdG90YWwgbnVtYmVyIGlzIGFsc28gaW5jcmVtZW50ZWQuXHJcblx0cHVibGljIGxvZyggY2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnksIGFjdGlvbjogU3RhdHNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNhdGVnb3J5U3RhdHM6IENhdGVnb3J5U3RhdHM7XHJcblx0XHRzd2l0Y2goIGNhdGVnb3J5KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQ29tcDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuY29tcDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FbG06IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmVsbTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5UZXh0OiBjYXRlZ29yeVN0YXRzID0gdGhpcy50ZXh0OyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkF0dHI6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmF0dHI7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRXZlbnQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmV2ZW50OyBicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCggYWN0aW9uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkFkZGVkOiBjYXRlZ29yeVN0YXRzLmFkZGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkRlbGV0ZWQ6IGNhdGVnb3J5U3RhdHMuZGVsZXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5VcGRhdGVkOiBjYXRlZ29yeVN0YXRzLnVwZGF0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uTW92ZWQ6IGNhdGVnb3J5U3RhdHMubW92ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uUmVuZGVyZWQ6IGNhdGVnb3J5U3RhdHMucmVuZGVyZWQrKzsgYnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmR1cmF0aW9uLnRvRml4ZWQoMil9bXMgYCArXHJcblx0XHRcdFx0dGhpcy5nZXRDb21wU3RyaW5nKCkgKyB0aGlzLmdldEVsbVN0cmluZygpICsgdGhpcy5nZXRUZXh0U3RyaW5nKCkgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0clN0cmluZygpICsgdGhpcy5nZXRFdmVudFN0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbXBvbmVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRDb21wU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb21wLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmNvbXAuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuY29tcC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjcwRVwiLCB0aGlzLmNvbXAucmVuZGVyZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuY29tcC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBjb21wKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZWxlbWVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFbG1TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmVsbS5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5lbG0uYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZWxtLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuZWxtLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGVsbSgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRleHQgbm9kZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRUZXh0U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy50ZXh0Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLnRleHQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMudGV4dC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLnRleHQudXBkYXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy50ZXh0Lm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYHRleHQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0QXR0clN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuYXR0ci5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5hdHRyLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmF0dHIuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5hdHRyLnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgYXR0cigke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFdmVudFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZXZlbnQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZXZlbnQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5ldmVudC51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGV2ZW50KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHNpZ24gYW5kIHZhbHVlIHRvIHRoZSBnaXZlbiBzdHJpbmcgYnV0IG9ubHkgaWYgdGhlIHZhbHVlIGlzIG5vbi16ZXJvLlxyXG5cdHByaXZhdGUgZ2V0VmFsU3RyaW5nKCBzOiBzdHJpbmcsIHNpZ246IHN0cmluZywgdmFsOiBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodmFsID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChzLmxlbmd0aCA+IDAgPyBcIiBcIiA6IFwiXCIpICsgc2lnbiArIHZhbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzdGF0czogRGV0YWlsZWRTdGF0cztcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ29tbW9uIHR5cGVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlzcG9zZXIgaW50ZXJmYWNlIGFsbG93cyBjbGllbnRzIHRvIGluZm9ybSB0aGUgb2JqZWN0IHRoYXQgaXQgY2FuIGNsZWFyIGl0cyBpbnRlcm5hbFxyXG4gKiByZXNvdXJjZXMuIFRoZSBvYmplY3QgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgaXQgaGFzIGJlZW4gZGlzcG9zZWQgb2ZmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBhbnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMgYW5kIHJldHVybiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBBbnlBbnlGdW5jID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybiB2YWx1ZXMgb2YgYW55IHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTm9uZVR5cGVGdW5jPFQ+ID0gKCkgPT4gVDtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgZG9uJ3QgcmV0dXJuIGFueSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVm9pZEZ1bmMgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJpZ2dlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElUcmlnZ2VyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGtlZXBzIGEgdmFsdWUgYW5kIG5vdGlmaWVzIGFsbCBhdHRhY2hlZCB3YXRoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpZ2dlcjxUID0gYW55PlxyXG57XHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIGdldCgpOiBUO1xyXG5cclxuICAgIC8vIFNldHMgYSBuZXcgdmFsdWVcclxuICAgIHNldCggdjogVCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyRGVwdGggZW51bWVyYXRpb24gZGVmaW5lcyBwb3NzaWJsZSB3YXlzIG9mIGhvdyB0cmlnZ2VycyBkZWFsIHdpdGggY29udGFpbmVyIGRhdGE7XHJcbiAqIHRoYXQgaXMsIG9iamVjdHMsIGFycmF5cywgbWFwcyBhbmQgc2V0cy4gRm9yIHRyaWdnZXJzIHdpdGggdmFsdWVzIG9mIG5vbi1jb250YWluZXIgdHlwZXNcclxuICogdGhpcyBlbnVtZXJhdGlvbiBpcyBpcnJlbGV2YW50LlxyXG4gKi9cclxuZW51bSBUcmlnZ2VyRGVwdGhcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmx5IGNoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZiBhZGRpbmcsIHJlbW92aW5nIGFuZCBtb2RpZnlpbmdcclxuICAgICAqIGl0ZW1zIGluIHRoZSBjb250YWluZXIgYXJlIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIFZhbHVlID0gMCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhbmQgb2YgdGhlIGltbWVkaWF0ZSBjb250YWluZXIgaXRlbXMgYXJlIGhhbmRsZWQuIEFjdGlvbnMgb2ZcclxuICAgICAqIGFkZGluZyBhbmQgcmVtb3ZpbmcgaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBjYXVzZSBjaGFuZ2UgdG8gYmUgdHJpZ2dlcnJlZDsgaG93ZXZlciBhY3Rpb25zXHJcbiAgICAgKiBvZiBtb2RpZnlpbmcgaXRlbXMgdGhlbXNlbGZzIGFyZSBpZ25vcmVkLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gICAgICogdGhpcyB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBTaGFsbG93ID0gMSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhbmQgb2YgaXRlbXMgb24gYWxsIGxldmVscyBhcmUgaGFuZGxlZC4gSXRlbXMgYWRkZWQgdG8gdGhlXHJcbiAgICAgKiBjb250YWluZXIgYXJlIGNvbnZlcnRlZCB0byBkZWVwIHRyaWdnZXJzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gICAgICogdGhpcyB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBEZWVwID0gMTAwLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgdHJpZ2dlciBvYmplY3Qgb2YgdGhlIGdpdmVuIGRlcHRoIHdpdGggdGhlIGdpdmVuIGluaXRpYWwgdmFsdWUuXHJcbiAqIEBwYXJhbSB2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJpZ2dlcjxUID0gYW55PiggZGVwdGg6IG51bWJlciwgdj86IFQpOiBJVHJpZ2dlcjxUPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFRyaWdnZXIoIGRlcHRoIDwgMCA/IDAgOiBkZXB0aCwgdik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyIGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGNoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuY2xhc3MgVHJpZ2dlcjxUID0gYW55PiBpbXBsZW1lbnRzIElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBkZXB0aD86IG51bWJlciwgdj86IFQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG4gICAgICAgIHRoaXMudiA9IHRyaWdnZXJyaXplKCB2LCB0aGlzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHMgYSBuZXcgdmFsdWVcclxuICAgIHB1YmxpYyBzZXQoIHY6IFQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBkbyBpZiB0aGUgdmFsdWUgaXMgdGhlIHNhbWVcclxuICAgICAgICBpZiAodiA9PT0gdGhpcy52KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudiA9IHRyaWdnZXJyaXplKCB2LCB0aGlzLCB0aGlzLmRlcHRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIG1hbmFnZXIgdGhhdCB0aGUgdHJpZ2dlcidzIHZhbHVlIGhhcyBiZWVuIHJlYWRcclxuICAgIHB1YmxpYyBub3RpZnlSZWFkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBnX21hbmFnZXIubm90aWZ5VHJpZ2dlclJlYWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZC4gV2Ugb25seSBub3RpZnkgdGhlIG1hbmFnZXJcclxuICAgIC8vIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSB3YXRjaGVyIGF0dGFjaGVkIHRvIG91ciB0cmlnZ2VyO1xyXG4gICAgcHVibGljIG5vdGlmeUNoYW5nZWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICBnX21hbmFnZXIubm90aWZ5VHJpZ2dlckNoYW5nZWQoIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBWYWx1ZSBiZWluZyBnZXQgYW5kIHNldFxyXG4gICAgcHJpdmF0ZSB2OiBUO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB3YXRjaGluZyBvdmVyIHRoaXMgdHJpZ2dlcidzIHZhbHVlLiBUaGlzIG1lbWJlciBzZXJ2ZXMgYXMgYSBzdG9yYWdlIGluc3RlYWRcclxuICAgIC8vIG9mIGhhdmluZyB0aGUgbWFuYWdlciB0byBtYXAgb2YgdHJpZ2dlcnMgdG8gdGhlIHNldCBvZiB3YXRjaGVycy5cclxuICAgIHB1YmxpYyB3YXRjaGVycyA9IG5ldyBTZXQ8V2F0Y2hlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2F0Y2hlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElXYXRjaGVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgb2JqZWN0IHRoYXQgd3JhcHMgYSBmdW5jdGlvbiBhbmQgaGFzIHRoZSBzYW1lXHJcbiAqIHNpZ25hdHVyZSBhcyB0aGlzIGZ1bmN0aW9uLiBXaGVuIGEgd2F0Y2hlciBpcyBjYWxsZWQgaXQgY2FscyB0aGUgd3JhcHBlZCBmdW5jdGlvbiBhbmQgYXR0YWNoZXNcclxuICogdG8gYWxsIHRyaWdnZXJzIHdob3NlIHZhbHVlcyB3ZXJlIHJlYWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNhbGwuIFdoZW4gdmFsdWVzIG9mIHRoZXNlXHJcbiAqIHRyaWdnZXJzIGNoYW5nZSwgYSByZXNwb25kZXIgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGUgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgaXMgY3JlYXRlZCwgYnV0IGl0IGNhbiBiZSBjaGFuZ2VkIGxhdGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT4gZXh0ZW5kcyBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIFRoaXMgaXMgYSBjYWxsYWJsZSBpbnRlcmZhY2UsIHdoaWNoIGlzIGltcGxlbWVudCBhcyBhIGZ1bmN0aW9uLiAqL1xyXG4gICAgKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pOiBSZXR1cm5UeXBlPFQ+O1xyXG5cclxuICAgIC8vIC8qKiBTZXRzIGEgcmVzcG9uZGVyIGZ1bmN0aW9uICovXHJcbiAgICAvLyBzZXRSZXNwb25kZXIoIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCByZXNwb25kZXJUaGlzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgd2F0Y2hlciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIHdhdGNoZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltV2F0Y2hlciA9IFN5bWJvbCggXCJzeW1XYXRjaGVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdhdGNoZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24uIFdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgZnVuY3Rpb24gaXMgaW52b2tlZCBpdCBpbnZva2VzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgaXQgbm90aWNlcyBhbGwgdHJpZ2dlciBvYmplY3RzXHJcbiAqIHRoYXQgd2VyZSByZWFkIGR1cmluZyBpdHMgZXhlY3V0aW9uLiBXaGVuIGFueSBvZiB0aGVzZSB0cmlnZ2VyIG9iamVjdHMgaGF2ZSB0aGVpciB2YWx1ZXNcclxuICogY2hhbmdlZCwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZC5cclxuICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgd2F0Y2hlZFxyXG4gKiBAcGFyYW0gcmVzcG9uZGVyIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB2YWx1ZXMgb2YgdGhlIHRyaWdnZXIgb2JqZWN0cyBlbmNvdW50ZXJlZCBkdXJpbmdcclxuICogdGhlIG9yaWdpbmFsIGZ1bmN0aW9uJ3MgbGFzdCBleGVjdXRpb24gY2hhbmdlLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSByZXNwb25kZXJUaGlzIE9wdGlvbmFsIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi5cclxuICogSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZSBcInRoaXNcIiB2YWx1ZSBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsXHJcbiAgICBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSk6IElXYXRjaGVyPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIHdhdGNoZXJGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXI6IFdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXIuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgd2F0Y2hlciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSA9IG5ldyBXYXRjaGVyKCBmdW5jLCByZXNwb25kZXIsIGZ1bmNUaGlzLCByZXNwb25kZXJUaGlzKTtcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgdGhlIGRpc3Bvc2UgbWV0aG9kXHJcbiAgICAod2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXIpLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSBhcyBXYXRjaGVyO1xyXG4gICAgICAgIHdhdGNoZXIgJiYgd2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gd2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBXYXRjaGVyIGNsYXNzIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkXHJcbiAqIGR1cmluZyBhIGZ1bmN0aW9uIGV4ZWN1dGlvbi4gV2hlbiB0aGUgdHJpZ2dlciBvYmplY3RzIGFyZSByZWFkLCB0aGV5IGFyZSByZW1lbWJlcmVkIGJ5IHRoZVxyXG4gKiBXYXRjaGVyIG9iamVjdC4gV2hlbmV2ZXIgYSB2YWx1ZSBpcyBjaGFuZ2VkIGluIGFueSBvZiB0aGVzZSB0cmlnZ2VycywgdGhlIHdhdGNoZXIgb2JqZWN0IGlzXHJcbiAqIG5vdGlmaWVkIGFuZCBjYWxscyB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gcmVzcG9uZGVyO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gaWYgcmVzcG9uZGVyIFwidGhpc1wiIGlzIG5vdCBkZWZpbmVkIHVzZSB0aGUgb25lIGZvciB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSByZXNwb25kZXJUaGlzID8gcmVzcG9uZGVyVGhpcyA6IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdoaWxlIHVwZGF0aW5nIHRoZSBzZXQgb2YgYXR0YWNoZWQgdHJpZ2dlcnMuIFRoZSBcImZ1bmNUaGlzXCJcclxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgXCJ0aGlzXCIgdW5kZXIgd2hpY2ggdGhlIGludGVybmFsIHdhdGNoZXIgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkLiBJdFxyXG4gICAgICogd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgXCJ0aGlzXCIgdG8gYXBwbHkgd2hlbiBpbnZva2luZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gaWYgaXQgd2Fzbid0XHJcbiAgICAgKiBzZXQgeWV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIHdhdGNoZXIgd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlclRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCBjdXJyZW50IHRyaWdnZXJzXHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG5cclxuICAgICAgICAvLyBpbnN0YWxsIG91ciB3YXRjaGVyIGF0IHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgZ19tYW5hZ2VyLnB1c2hXYXRjaGVyKCB0aGlzKVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvdXIgd2F0Y2hlciBmcm9tIHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5wb3BXYXRjaGVyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBhbGwgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXJUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgd2F0Y2hlciB0aGF0IGl0IHNob3VsZCBjYWxsIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uIFRoaXMgb2NjdXJzIHdoZW4gdGhlcmVcclxuICAgIC8vIGFyZSB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgIHB1YmxpYyByZXNwb25kKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWQuIEl0IGNhbiBoYXBwZW4gaWYgYWZ0ZXIgYWxsIG11dGF0aW9uXHJcbiAgICAgICAgLy8gc2NvcGVzIGV4aXRlZCB0aGUgbWFuYWdlciBub3RpZmllcyBtdWx0aXBsZSB3YXRjaGVycyBhbmQgb25lIG9mIHRoZSB3YXRjaGVycycgcmVzcG9uZGVyXHJcbiAgICAgICAgLy8gZGlzcG9zZXMgb2YgYW5vdGhlciB3YXRjaGVyLlxyXG4gICAgICAgIGlmICghdGhpcy5yZXNwb25kZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIuYXBwbHkoIHRoaXMucmVzcG9uZGVyVGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbnMgdGhlIHN0YXRlIG9mIHRoZSB3YXRjaGVyLCBzbyB0aGF0IGl0IGlzIGRldGFjaGVkIGZyb20gYW55IHRyaWdnZXJzIGFuZCBpcyByZW1vdmVkXHJcbiAgICAgKiBmcm9tIHRoZSBtYW5hZ2VyJ3Mgc2V0IG9mIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsZWFuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBkZXRhY2hlcyB0aGlzIHdhdGNoZXIgZnJvbSBhbGwgdGhlIHRyaWdnZXJzIGFuZCB0aGUgdHJpZ2dlcnMgZnJvbSB0aGlzIHdhdGNoZXIuXHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCB0cmlnZ2VyID0+IHRyaWdnZXIud2F0Y2hlcnMuZGVsZXRlKCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5jbGVhcigpO1xyXG5cclxuICAgICAgICAvLyBhc2sgdGhlIG1hbmFnZXIgdG8gZm9yZ2V0IGFib3V0IHRoaXMgd2F0Y2hlciBpZiBpdCBpcyBjdXJyZW50bHkgaW4gdGUgZGVmZXJyZWQgc2V0XHJcbiAgICAgICAgZ19tYW5hZ2VyLnJlbW92ZURlZmVycmVkV2F0Y2hlciggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gYmVpbmcgd2F0Y2hlZDsgdGhhdCBpcywgZHVyaW5nIHdoaWNoIHdlIHNob3VsZCBsaXN0ZW4gdG8gdHJpZ2dlcnMgYmVpbmcgcmVhZCwgc29cclxuICAgIC8vIHRoYXQgd2UgY2FuIHJlbWVtYmVyIHRoZW0gYW5kIGxhdGVyIHJlc3BvbmQgd2hlbiB0aGV5IG5vdGlmeSB0aGF0IHRoZWlyIHZhbHVlcyBoYXZlIGJlZW5cclxuICAgIC8vIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSB0aGUgdmFsdWUgb2Ygb25lIG9mIHRoZSB0cmlnZ2VycyBjaGFuZ2VzXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byByZXNwb25kZXIgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSByZXNwb25kZXJUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gU2V0IG9mIHRyaWdnZXJzIGN1cnJlbnRseSBiZWluZyB3YXRjaGVkIGJ5IHRoaXMgd2F0Y2hlci4gVGhpcyBtZW1lYmVyIGlzIHVzZWQgYnkgdGhlXHJcbiAgICAvLyBtYW5hZ2VyLiBJdCBpcyBlc3NlbnRpYWxseSBhIHN0b3JhZ2UsIHdoaWNoIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgbWFuYWdlciBoYXZpbmcgYVxyXG4gICAgLy8gbWFwIG9mIHdhdGNoZXJzIHRvIHRoZSBzZXRzIG9mIHRyaWdnZXJzLiBUaGUgcHVycG9zZSBvZiBrbm93aW5nIHdoYXQgdHJpZ2dlcnMgYXJlIHVzZWRcclxuICAgIC8vIGJ5IHdoYXQgd2F0Y2hlciBpcyB0byByZW1vdmUgdGhlIHdhdGNoZXIgZnJvbSBhbGwgdGhlc2UgdHJpZ2dlcnMgYmVmb3JlIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAgICBwdWJsaWMgdHJpZ2dlcnMgPSBuZXcgU2V0PFRyaWdnZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1hbmFnZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJXYXRjaGVyTWFuYWdlciBjbGFzcyBpcyBhIHNpbmdsZXRvbiBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGdsb2JhbCBmdW5jdGlvbmFsaXR5XHJcbiAqIG9mIHRoZSB0cmlnZ2VyLXdhdGNoZXIgbWVjaGFuaXNtLiBJdCBpbmNsdWRlcyBhIHN0YWNrIG9mIHdhdGNoZXIgb2JqZWN0cyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcbiAqIHRoZWlyIGZ1bmN0aW9ucyBhbmQgd2F0Y2hpbmcgZm9yIHRyaWdnZXIgb2JqZWN0cyB0byBiZSByZWFkLiBXaGVuIGEgdHJpZ2dlciBvYmplY3QgaXMgYmVpbmdcclxuICogcmVhZCAodGhhdCBpcyBpdHMgZ2V0KCkgbWV0aG9kIGlzIGNhbGxlZCksIGFsbCB0aGUgd2F0Y2hlcnMgaW4gdGhlIHN0YWNrIGFyZSBub3RpZmllZCwgYmVjYXVzZVxyXG4gKiB0aGV5IGFsbCBkZXBlbmQgb24gdGhlIHRyaWdnZXIgb2JqZWN0J3MgdmFsdWUgZm9yIHRoZWlyIGZ1bmN0aW9uYWxpdHkuXHJcbiAqIFxyXG4gKiBJdCBhbHNvIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudCBvZiBtdXRhdGlvbiBzY29wZXMgYW5kIGhhbmRsZXMgbm90aWZ5aW5nIHdhdGNoZXJzIG9mXHJcbiAqIG11dGF0aW9ucyBvbmx5IHdoZW4gdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgaGFzIGV4aXRlZC4gVGhlIHRyaWdnZXJzIGRvbid0IG5vdGlmeSB0aGUgd2F0Y2hlcnNcclxuICogZGlyZWN0bHk7IGluc3RlYWQsIHRoZXkgbm90aWZ5IHRoZSBtYW5hZ2VyLCB3aGljaCBhY2N1bXVsYXRlcyB0aGUgaW5mb3JtYXRpb24gYW5kIG5vdGlmaWVzIGFsbFxyXG4gKiB0aGUgd2F0Y2hlcnMgb25jZSBvdXQgb2YgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoZXMgdGhlIGdpdmVuIHdhdGNoZXIgb2JqZWN0IHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wdXNoKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGN1cnJlbnRseSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9wV2F0Y2hlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyU3RhY2sucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSB3YXRjaGVyIG9iamVjdCBmcm9tIHRoZSBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZURlZmVycmVkV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuZGVsZXRlKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbnRlck11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhpdE11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlVucGFpcmVkIGNhbGwgdG8gZXhpdE11dGF0aW9uU2NvcGVcIik7XHJcblxyXG4gICAgICAgIGlmICgtLXRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHdoZW4gd2F0Y2hlcnMgcmVzcG9uZCwgdGhleSBjYW4gZXhlY3V0ZSB0aGVpciB3YXRjaGVyIGZ1bmN0aW9ucyBhbmQgdGhhdCBjb3VsZFxyXG4gICAgICAgICAgICAvLyBtZXNzIHdpdGggdGhlIHNhbWUgc2V0IG9mIHdhdGNoZXJzIHdlIGFyZSBpdGVyYXRpbmcgb3Zlci4gVGhlcmVmb3JlLCB3ZSBtYWtlIGEgY29weVxyXG4gICAgICAgICAgICAvLyBvZiB0aGlzIHNldCBmaXJzdC5cclxuICAgICAgICAgICAgbGV0IHdhdGNoZXJzID0gQXJyYXkuZnJvbSggdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB3YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHdhdGNoZXIucmVzcG9uZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGF0IHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHJpZ2dlciBvYmplY3QgaGFzIGJlZW4gcmVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJSZWFkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGF0dGFjaCBhbGwgd2F0Y2hlcnMgY3VycmVudGx5IG9uIHRoZSBzdGFjayB0byB0aGUgdHJpZ2dlclxyXG4gICAgICAgIGZvciggbGV0IHdhdGNoZXIgb2YgdGhpcy53YXRjaGVyU3RhY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3YXRjaGVyLnRyaWdnZXJzLmFkZCggdHJpZ2dlcik7XHJcbiAgICAgICAgICAgIHRyaWdnZXIud2F0Y2hlcnMuYWRkKCB3YXRjaGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGF0IHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHJpZ2dlciBvYmplY3QgaGFzIGJlZW4gY2hhbmdlZC4gSWYgdGhpcyBoYXBwZW5zIHdoaWxlXHJcbiAgICAgKiB3aXRoaW4gYSBtdXRhdGlvbiBzY29wZSwgd2UgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgYnV0IHB1dCB0aGVtIGluIGFcclxuICAgICAqIGRlZmVycmVkIHNldC4gSWYgdGhpcyBoYXBwZW5zIG91dHNpZGUgb2YgYW55IG11dGF0aW9uIHNjb3BlLiBJbiB0aGlzIGNhc2Ugd2Ugbm90aWZ5IHRoZVxyXG4gICAgICogd2F0Y2hlcnMgb2YgdGhpcyB0cmlnZ2VyIHJpZ2h0IGF3YXkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdHJpZ2dlcjogVHJpZ2dlcik6IHZvaWRcclxuICAgIHsgXHJcbiAgICAgICAgLy8gdGhpcyBtZXRob2QgaXMgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIG9ubHkgaWYgdGhlIHRyaWdnZXIgaGFzIHdhdGNoZXJzXHJcbiAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICBpZiAodHJpZ2dlci53YXRjaGVycy5zaXplID09PSAwKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJub3RpZnlUcmlnZ2VyQ2hhbmdlZCB3YXMgY2FsbGVkIGJ5IGEgdHJpZ2dlciB3aXRob3V0IHdhdGNoZXJzXCIpO1xyXG4gICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA+IDApXHJcbiAgICAgICAgICAgIHRyaWdnZXIud2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuYWRkKCB3YXRjaGVyKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0cmlnZ2VyLndhdGNoZXJzLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFN0YWNrIG9mIHdhdGNoZXIgb2JqZWN0cy4gV2F0Y2hlcnMgYXJlIHB1c2hlZCBvbiB0b3AgYmVmb3JlIHRoZXkgY2FsbCB0aGUgd2F0Y2hlZFxyXG4gICAgLy8gZnVuY3Rpb24gYW5kIHJlbW92ZWQgYWZ0ZXIgdGhpcyBmdW5jdGlvbiByZXR1cm5zLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZVxyXG4gICAgLy8gaGFzIGJlZW4gY2hhbmdlZCwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIGF0dGFjaGVkIHRvIHRoaXMgdHJpZ2dlci4gVGhpcyBtZWFuc1xyXG4gICAgLy8gdGhhdCB0aGUgdHJpZ2dlcidzIHZhbHVlIGlzIHVzZWQgYnkgdGhlIHdhdGNoZWQgZnVuY3Rpb25zLlxyXG4gICAgcHJpdmF0ZSB3YXRjaGVyU3RhY2s6IFdhdGNoZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIE51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIG11dGF0aW9uIHNjb3Blcy4gV2hlbiBhIHRyaWdnZXIgbm90aWZpZXMgdGhhdCBpdHMgdmFsdWUgaGFzIGJlZW5cclxuICAgIC8vIGNoYW5nZWQgd2hpbGUgdGhpcyBudW1iZXIgaXMgbm90IDAsIHRoZSB0cmlnZ2VyIHdpbGwgYmUgcmVtZW1iZXJlZCBpbiB0aGUgaW50ZXJuYWwgc2V0LlxyXG4gICAgLy8gQWZ0ZXIgYWxsIG11dGF0aW9uIHNjb3BlcyBhcmUgZmluaXNoZWQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byBhbGwgdHJpZ2dlcnMgaW4gdGhlIHNldFxyXG4gICAgLy8gd2lsbCBiZSBub3RpZmllZC4gV2hlbiBhIHRyaWdnZXIgbm90aWZpZXMgdGhhdCBpdHMgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZCB3aGlsZSB0aGVyZSBhcmVcclxuICAgIC8vIG5vIG11dGF0aW9uIHNjb3BlcyBwcmVzZW50LCB0aGUgd2F0Y2hlcnMgYXR0YWNoZWQgdG8gdGhlIHRyaWdnZXIgYXJlIG5vdGlmaWVkIGltbWVkaWF0ZWx5LlxyXG4gICAgcHJpdmF0ZSBtdXRhdGlvblNjb3Blc1JlZkNvdW50ID0gMDtcclxuXHJcbiAgICAvLyBTZXQgb2Ygd2F0Y2hlcnMgdGhhdCBzaG91bGQgYmUgbm90aWZpZWQgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVXNpbmcgU2V0XHJcbiAgICAvLyBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIGhvdyBtYW55IHRyaWdnZXJzIHJlZmVyZW5jZSBhIHdhdGNoZXIsIHRoZSB3YXRjaGVyIHdpbGwgYmUgcHJlc2VudFxyXG4gICAgLy8gb25seSBvbmNlLlxyXG4gICAgcHJpdmF0ZSBkZWZlcnJlZFdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTaW5nbGV0b24gVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGJqZWN0ICovXHJcbmxldCBnX21hbmFnZXIgPSBuZXcgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbmNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbntcclxuICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50LiBJZiBpdCByZWFjaGVzIHplcm8sIG5vdGlmaWVzIGFsbCBkZWZlcnJlZCB3YXRjaGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbntcclxuICAgIGdfbWFuYWdlci5leGl0TXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ29tcHV0ZWQgdHJpZ2dlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElDb21wdXRlZFRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2YWx1ZSB0aGF0IGlzIGNhbGN1bGF0ZWQgYnkgYSBmdW5jdGlvbi4gVGhpcyBpcyBhXHJcbiAqIGNvbWJpbmF0aW9uIG9mIFRyaWdnZXIgYW5kIFdhdGNoZXIuIEl0IGlzIGEgd2F0Y2hlciBiZWNhdXNlIGl0IHdhdGNoZXMgb3ZlciB0aGUgZnVuY3Rpb24gYW5kXHJcbiAqIGNhbGxzIGl0IHdoZW5ldmVyIGFueSB0cmlnZ2VycyB0aGlzIGZ1bmN0aW9uIHVzZXMgYXJlIGNoYW5nZWQuIEl0IGlzIGEgdHJpZ2dlciBiZWNhdXNlIGl0XHJcbiAqIHRyaWdnZXJzIGNoYW5nZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIGltcG9ydGFudCBmYWN0IGFib3V0IGEgY29tcHV0ZWQgdHJpZ2dlciBpcyB0aGF0IGl0IG9ubHkgaW52b2tlcyB0aGUgd2F0Y2hlZCBmdW5jdGlvblxyXG4gKiBpZiBpdCdzIHZhbHVlIGlzIGJlaW5nIHVzZWQgYnkgYXQgbGVhc3Qgb25lIHdhdGNoZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4gZXh0ZW5kcyBJVHJpZ2dlcjxUPiwgSURpc3Bvc2VyXHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGNvbXB1dGVkIHRyaWdnZXIgb2JqZWN0IHdob3NlIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGFuZCB3aXRoIGFuXHJcbiAqIG9wdGlvbmFsIGluaXRpYWwgdmFsdWUuXHJcbiAqIEBwYXJhbSB2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyPFQgPSBhbnk+KCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KTogSUNvbXB1dGVkVHJpZ2dlcjxUPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IENvbXB1dGVkVHJpZ2dlciggZnVuYywgZnVuY1RoaXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tcHV0ZWRUcmlnZ2VyIGNsYXNzIHJlcHJlc2VudHMgYSB2YWx1ZSB0aGF0IGlzIGNhbGN1bGF0ZWQgYnkgYSBmdW5jdGlvbi4gVGhpcyBpcyBhXHJcbiAqIGNvbWJpbmF0aW9uIG9mIFRyaWdnZXIgYW5kIFdhdGNoZXIuIEl0IGlzIGEgd2F0Y2hlciBiZWNhdXNlIGl0IHdhdGNoZXMgb3ZlciB0aGUgZnVuY3Rpb24gYW5kXHJcbiAqIGNhbGxzIGl0IHdoZW5ldmVyIGFueSB0cmlnZ2VycyB0aGlzIGZ1bmN0aW9uIHVzZXMgYXJlIGNoYW5nZWQuIEl0IGlzIGEgdHJpZ2dlciBiZWNhdXNlIGl0XHJcbiAqIHRyaWdnZXJzIGNoYW5nZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIGltcG9ydGFudCBmYWN0IGFib3V0IGEgY29tcHV0ZWQgdHJpZ2dlciBpcyB0aGF0IGl0IG9ubHkgaW52b2tlcyB0aGUgd2F0Y2hlZCBmdW5jdGlvblxyXG4gKiBpZiBpdCdzIHZhbHVlIGlzIGJlaW5nIHVzZWQgYnkgYXQgbGVhc3Qgb25lIHdhdGNoZXIuXHJcbiAqL1xyXG5jbGFzcyBDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4gZXh0ZW5kcyBUcmlnZ2VyPFQ+IGltcGxlbWVudHMgSUNvbXB1dGVkVHJpZ2dlcjxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogTm9uZVR5cGVGdW5jPFQ+LCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICBzdXBlciggVHJpZ2dlckRlcHRoLlZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIC8vIHdlIGRvbid0IGNyZWF0ZSB0aGUgd2F0Y2hlciB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWRcclxuICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgcHVibGljIGdldCgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIHRoZSB3YXRjaGVyIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5mdW5jLCB0aGlzLnJlc3BvbmRlciwgdGhpcy5mdW5jVGhpcywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIG91ciB3YXRjaGVyIGlzIG5vdGlmaWVkIG9mIGNoYW5nZXMgaW4gaXRzIHRyaWdnZXIgdmFsdWVzLiBXZVxyXG4gICAgICogcmVzcG9uZCBieSBpbnZva2luZyB0aGUgZnVuY3Rpb24gKHRocm91Z2ggdGhlIHdhdGNoZXIpIGFuZCBzZXR0aW5nIGl0cyByZXR1cm4gdmFsdWUgYXNcclxuICAgICAqIG91ciBuZXcgdmFsdWUuIFRoaXMgY2FuIHRyaWdnZXIgY2hhbmdlcyBpbiB3YXRjaGVycyB0aGF0IGFyZSB1c2luZyBvdXIgdmFsdWUuIE5vdGUgdGhhdFxyXG4gICAgICogd2Ugb25seSBpbnZva2Ugb3VyIHdhdGNoZXIgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgdGhhdCB3YXRjaGVzIG91ciB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNwb25kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRnVuY3Rpb24gd2Ugd2lsbCBiZSB3YXRjaGluZ1xyXG4gICAgcHJpdmF0ZSBmdW5jOiBOb25lVHlwZUZ1bmM8VD47XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgb3ZlciBvdXIgZnVuY3Rpb25cclxuICAgIHByaXZhdGUgZnVuY1dhdGNoZXI6IElXYXRjaGVyPE5vbmVUeXBlRnVuYzxUPj47XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIHZhbHVlICBrZXB0IGJ5IHRoZSB0cmlnZ2VyIG1pZ2h0IG5vdCByZWZsZWN0IHRoZSBhY3R1YWwgY29tcHV0ZWRcclxuICAgIC8vIHZhbHVlLiBUaGlzIGZsYWcgaXMgdHJ1ZSB1bmRlciB0aGUgZm9sbG93aW5nIGNpcmN1bXN0YW5jZXM6XHJcbiAgICAvLyAxLiBSaWdodCBhZnRlciB0aGUgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQuIFdlIGRvbid0IGV2ZW4gY3JlYXRlIHRoZSB3YXRjaGVyIGJlY2F1c2Ugd2VcclxuICAgIC8vICAgIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgLy8gMi4gV2hlbiB0aGUgcmVzcG9uZGVyIGhhcyBiZWVuIGludm9rZWQsIGJ1dCBvdXIgdHJpZ2dlciBkaWRuJ3QgaGF2ZSBhbnkgd2F0Y2hlci4gQWdhaW4sIHdlXHJcbiAgICAvLyAgICB3aWxsIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgcHJpdmF0ZSBpc1N0YWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNdXRhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU11dGF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8ga2VlcCBhIG11dGF0b3Igb2JqZWN0IGF0dGFjaGVkIHRvIHRoZSBtdXRhdG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxubGV0IHN5bU11dGF0b3IgPSBTeW1ib2woIFwic3ltTXV0YXRvclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtdXRhdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiByZWd1bGFyIGZ1bmN0aW9uIHdoaWNoIGV4ZWN1dGVzXHJcbiAqIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLiBXYXRjaGVycyBmb3IgdHJpZ2dlcnMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkIGR1cmluZyBleGVjdXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhcmUgbm90IG5vdGlmaWVkIGltbWVkaWF0ZWx5LiBJbnN0ZWFkLCB0aGUgd2F0Y2hlcnNcclxuICogYXJlIFwiZGVmZXJyZWRcIiBhbmQgd2lsbCBiZSBub3RpZmllZCBvbmx5IG9uY2UgYWZ0ZXIgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgZXhpdHMuIFRoaXMgY2FuIGJlXHJcbiAqIHVzZWZ1bCBzaW5jZSB1c3VhbGx5IHdhdGNoZXJzIGRlcGVuZCBvbiBtYW55IHRyaWdnZXJzIGFuZCB3ZSBkb24ndCB3YW50IHRoZSB3YXRjaGVycyBiZWluZ1xyXG4gKiBub3RpZmllZCBtYW55IHRpbWUgYnV0IHJhdGhlciBvbmx5IG9uY2UgYWZ0ZXIgYWxsIHRoZSBjaGFuZ2VzIGhhdmUgYmVlbiBkb25lLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBhcm91bmQgd2hpY2ggdG8gZXN0YWJsaXNoIGEgbXV0YXRpb24gc2NvcGUuIElmIHRoaXMgaXMgYSBjbGFzcyBtZXRob2QsXHJcbiAqIHRoZW4gZWl0aGVyIHByb3ZpZGUgdGhlIGZ1bmNUaGlzIHBhcmFtZXRlciBvciBiaW5kIHRoZSBmdW5jdGlvbiBiZWZvcmUgcGFzc2luZyBpdCBpbi4gTm90ZVxyXG4gKiB0aGF0IGFycm93IGZ1bmN0aW9ucyBhcmUgYWxyZWFkeSBib3VuZC5cclxuICogQHBhcmFtIGZ1bmNUaGlzIFRoZSBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uLiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgYW4gdW5ib3VuZGNsYXNzIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgZnVuY1RoaXM/OiBhbnkpOiBJTXV0YXRvcjxUPlxyXG57XHJcbiAgICBmdW5jdGlvbiBtdXRhdG9yRnVuYyguLi5hcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yOiBXYXRjaGVyID0gbXV0YXRvckZ1bmNbc3ltV2F0Y2hlcl07XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdhcyBub3Qgc3VwcGxpZWQgYnV0IG5vdyB3aGVuIHRoZVxyXG4gICAgICAgIC8vIHdhdGNoZXIgZXhlY3V0ZXMsIFwidGhpc1wiIGlzIGRlZmluZWQsIHdlIHJlbWVtYmVyIGl0LlxyXG4gICAgICAgIHJldHVybiBtdXRhdG9yLmV4ZWN1dGUoIHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgdGhlIG11dGF0b3Igb2JqZWN0IGluIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmIHVzaW5nIGEgc3ltYm9sLlxyXG4gICAgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gPSBuZXcgTXV0YXRvciggZnVuYywgZnVuY1RoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgIChtdXRhdG9yRnVuYyBhcyBJTXV0YXRvcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbXV0YXRvciA9IG11dGF0b3JGdW5jW3N5bU11dGF0b3JdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgbXV0YXRvciAmJiBtdXRhdG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBtdXRhdG9yRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11dGF0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGV4ZWN1dGluZyBhIHdyYXBwZWQgZnVuY3Rpb24gdW5kZXIgYVxyXG4gKiBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIE11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpbiBhIG11dGF0aW9uIHNjb3BlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIG11dGF0b3Igd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgdHJ5IHsgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7IH1cclxuICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3cmFwcGVkLlxyXG4gICAgcHJpdmF0ZSBmdW5jOiBUO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJpZ2dlcml6aW5nIGNvbnRhaW5lcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGVwZW5kaW5nIG9uIHRoZSBnaXZlbiB0cmlnZ2VyIGRlcHRoIGFuZCBvbiB0aGUgdmFsdWUgdHlwZSwgZWl0aGVyIHJldHVybnMgdGhlIHNhbWUgdmFsdWUgaWZcclxuICogaXQgaXMgYSBjb250YWluZXIgKG9iamVjdCwgYXJyYXksIG1hcCBvciBzZXQpLCByZXR1cm5zIGEgcHJveHkgdG8gdGhlIHZhbHVlIHRoYXQga25vd3MgdG9cclxuICogbm90aWZ5IHJlYWQgYW5kIGNoYW5nZSB3aGVuIGl0cyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZSBpbnZva2VkLlxyXG4gKiBAcGFyYW0gdiBWYWx1ZSB0byBjb252ZXJ0IGlmIG5lY2Vzc2FyeVxyXG4gKiBAcGFyYW0gdHJpZ2dlciBUcmlnZ2VyIHRoYXQgd2lsbCBiZSBub3RpZmllZCB3aGVuIHJlYWQgb3IgY2hhbmdlIGV2ZW50cyBvY2N1ciBpbiB0aGUgY29udmVydGVkXHJcbiAqIHZhbHVlc1xyXG4gKiBAcGFyYW0gZGVwdGggVGhlIGRlcHRoIG9uIHRoZSBsZXZlbCAoc3RhcnRpbmcgZnJvbSB0aGUgdHJpZ2dlcil0aGF0IGNhbGxlZCB0aGlzIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHBhcmFtZXRlciBpcyAwLCBubyBjb252ZXJzaW9uIG9jY3VycyBhbmQgdGhlIHZhbHVlIGlzIHJldHVybmVkIGFzIGlzLiBXaGVuIHRoaXMgZnVuY3Rpb25cclxuICogaXMgY2FsbGVkIGZyb20gdGhlIHRyaWdnZXIsIHRoaXMgcGFyYW1ldGVyIGNhbiBiZSB1bmRlZmluZWQ6IGluIHRoaXMgY2FzZSwgd2Ugd2lsbCBhc3NpZ24gdGhlXHJcbiAqIGRlcHRoIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0aGUgdmFsdWUuIEFycmF5cywgbWFwcyBhbmQgc2V0cyBnZXQgZGVwdGhzIG9mIFNoYWxsb3coMSksXHJcbiAqIG1lYW5pbmcgdGhhdCBvcGVyYXRpb25zIHRoYXQgYWRkIG9yIHJlbW92ZSBpdGVtcyB3aWxsIHRyaWdnZXIgZXZlbnRzLCBidXQgbW9kaWZpY2F0aW9ucyB0byB0aGVcclxuICogaXRlbXMgd2lsbCBub3QuIE9iamVjdHMgZ2V0IHRoZSBkZXB0aCBvZiBEZWVwICgxMDAwKSwgd2hpY2ggZXNzZW50aWFsbHkgbWVhbnMgdGhhdCBhbnkgY2hhbmdlc1xyXG4gKiB0byB0aGUgb2JqZWN0IHByb3BlcnRpZXMgb24gYW55IGxldmVsIHdpbGwgdHJpZ2dlciBldmVudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2Vycml6ZTxUID0gYW55PiggdjogVCwgdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg/OiBudW1iZXIpOiBUXHJcbntcclxuICAgIGlmICghdiB8fCBkZXB0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodikpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE5vblNsb3RDb250YWluZXJIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBNYXApXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE1hcEhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIFNldClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgU2V0SGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09PSBPYmplY3QpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE5vblNsb3RDb250YWluZXJIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5EZWVwKSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgQXJyYXkgYW5kIHBsYWluIG9iamVjdCBoYW5kbGVycy5cclxuICovXHJcbmNsYXNzIE5vblNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCggdGFyZ2V0LCBwcm9wLCB0cmlnZ2Vycml6ZSggdmFsdWUsIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCksIHJlY2VpdmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoIHRhcmdldCwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgYXR0cnM6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIHByb3AsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmhhcyggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm90b3R5cGVPZiggdGFyZ2V0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0V4dGVuc2libGUoIHRhcmdldDogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaXNFeHRlbnNpYmxlKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogUHJvcGVydHlEZXNjcmlwdG9yIHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldCwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW51bWVyYXRlKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKCBSZWZsZWN0LmVudW1lcmF0ZSggdGFyZ2V0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3duS2V5cyggdGFyZ2V0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogSGFuZGxlciBmb3IgYXJyYXlzLlxyXG4vLyAgKi9cclxuLy8gY2xhc3MgQXJyYXlIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IEFycmF5PGFueT4sIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBvbiBwbGFpbiBvYmplY3RzLlxyXG4vLyAgKi9cclxuLy8gY2xhc3MgT2JqZWN0SGFuZGxlciBleHRlbmRzIE5vblNsb3RDb250YWluZXJIYW5kbGVyXHJcbi8vIHtcclxuLy8gICAgIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3Igc2hhbGxvdyBNYXAvU2V0IGhhbmRsZXJzLiBNZXRob2RzIHdob3NlIG5hbWVzIHdlcmUgc3VwcGxpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLFxyXG4gKiBub3RpZnkgY2hhbmdlOyBhbGwgb3RoZXIgbWV0aG9kcyBub3RpZnkgcmVhZC5cclxuICogXHJcbiAqIEZvciBNYXAgYW5kIFNldCBpbiBvcmRlciB0byBiZSBwcm94aWVkLCB0aGUgbWV0aG9kcyByZXR1cm5lZCBmcm9tIGdldCgpIG11c3QgYmVcclxuICogYm91bmQgdG8gdGhlIHRhcmdldC4gU2VlIGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3Byb3h5I2J1aWx0LWluLW9iamVjdHMtaW50ZXJuYWwtc2xvdHMuXHJcbiAqL1xyXG5jbGFzcyBTbG90Q29udGFpbmVySGFuZGxlciBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBtdXRhdG9yTWV0aG9kTmFtZXM6IFNldDxQcm9wZXJ0eUtleT4sIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgICB0aGlzLm11dGF0b3JNZXRob2ROYW1lcyA9IG11dGF0b3JNZXRob2ROYW1lcztcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmUgY29udGFpbmVyIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMuIFdlIGFsd2F5cyBub3RpZnkgcmVhZCBhbmQgd2Ugd3JhcCBtZXRob2RzIGluXHJcbiAgICAvLyBmdW5jdGlvbnMgdGhhdCB3aGVuIGNhbGxlZCB3aWxsIG5vdGlmeSBlaXRoZXIgcmVhZCBvciBjaGFuZ2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlXHJcbiAgICAvLyBtZXRob2QgaXMgYSBtdXRhdG9yLlxyXG4gICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG5cclxuICAgICAgICAvLyBpbiB0aGlzIGNvbnRleHQgXCJ0aGlzXCIgaXMgdGhlIGhhbmRsZXI7IGhvd2V2ZXIsIHdoZW4gdGhlIG1ldGhvZHMgd2UgcmV0dXJuIGFyZSBjYWxsZWRcclxuICAgICAgICAvLyB0aGUgXCJ0aGlzXCIgd2lsbCBiZSB0aGUgUHJveHkgb2JqZWN0LiBUaGVyZWZvcmUsIHdlIHdhbnQgdGhlc2UgbWV0aG9kcyB0byBjYXB0dXJlIGFuZFxyXG4gICAgICAgIC8vIHVzZSB0aGUgaGFuZGxlciBvYmplY3QuXHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgbWV0aG9kIGlzIGFscmVhZHkgaW4gb3VyIGludGVybmFsIG1hcFxyXG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLndyYXBwZWRNZXRob2RzLmdldCggcHJvcCk7XHJcbiAgICAgICAgaWYgKCFtZXRob2QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHRhcmdldFxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHRhcmdldFtwcm9wXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wVmFsICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmQgdGhlIG9yaWdpbmFsIG1ldGhvZCB0byB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgb3JnQm91bmRNZXRob2QgPSBwcm9wVmFsLmJpbmQoIHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXRhdG9yTWV0aG9kTmFtZXMuaGFzKHByb3ApKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgbXV0YXRvciBtZXRob2RzIHdlIGNyZWF0ZSBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIGludm9rZXMgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVyIHNwZWNpZmljIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGtub3dzIGFib3V0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHdpbGwgY3JlYXRlIHByb3hpZXMgZm9yIHRoZSBhcHByb3ByaWF0ZSBvYmplY3RzIGlmIG5lZWRlZC4gVGhpcyBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgICAgICAgICAvLyB3aWxsIGFsc28gaW5kaWNhdGUgd2hldGhlciBhbiBhY3R1YWwgY2hhbmdlIG9jY3VycyBzbyB0aGF0IHdlIGNhbiBub3RpZnkgYWJvdXQgaXQuXHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmdW5jdGlvbigpOiBhbnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXQ6IFthbnksIGJvb2xlYW5dID0gaGFuZGxlci5jYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0LCBwcm9wLCBvcmdCb3VuZE1ldGhvZCwgLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0WzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBGb3Igbm9uLW11dGF0b3IgbWV0aG9kcywgd2Ugbm90aWZ5IHRoZSByZWFkIGFuZCBpbnZva2UgdGhlIG9yaWdpbmFsIG1ldGhvZC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JnQm91bmRNZXRob2QoIC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLndyYXBwZWRNZXRob2RzLnNldCggcHJvcCwgbWV0aG9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgdGhhdCBtdXN0IGJlIG92ZXJyaWRkZW4gaW4gdGhlIGRlcml2ZWQgY2xhc3NlcyBhbmQgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIGNhbGxpbmdcclxuICAgICAqIGEgbXV1dGF0b3IgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IGFueSwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCxmYWxzZV07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBUaGUgdHJpZ2dlciBvYmplY3Qgd2hpY2ggc2hvdWxkIHNlbmQgbm90aWZpY2F0aW9ucyB0byBpdHMgd2F0Y2hlcnMgd2hlbiByZWFkcyBvciBjaGFuZ2VzXHJcbiAgICAvLyBvY2N1ciBcclxuICAgIHByb3RlY3RlZCB0cmlnZ2VyOiBUcmlnZ2VyO1xyXG5cclxuICAgIC8vIE51bWJlciBpbmRpY2F0aW5nIHRvIHdoYXQgbGV2ZWwgdGhlIGl0ZW1zIG9mIGNvbnRhaW5lciB0eXBlcyBzaG91bGQgYmUgdHJpZ2dlcnJpemVkLlxyXG4gICAgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXI7XHJcblxyXG4gICAgLy8gU2V0IG9mIG1ldGhvZCBuYW1lcywgd2hpY2ggbXV0YXRlIHRoZSBjb250YWllci4gQWxsIG90aGVyIG1ldGhvZHMgb25seSByZWFkIGZyb20gaXQuXHJcbiAgICBwcml2YXRlIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PjtcclxuXHJcbiAgICAvLyBUaGlzIG1hcCBrZWVwcyBhbHJlYWR5IHdyYXBwZWQgbWV0aG9kcyBzbyB0aGF0IHdlIGRvbid0IGRvIGJpbmRpbmcgbW9yZSB0aGFuIG9uY2UuIFxyXG4gICAgcHJpdmF0ZSB3cmFwcGVkTWV0aG9kcyA9IG5ldyBNYXA8UHJvcGVydHlLZXksRnVuY3Rpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIG1hcHMuXHJcbiAqL1xyXG5jbGFzcyBNYXBIYW5kbGVyIGV4dGVuZHMgU2xvdENvbnRhaW5lckhhbmRsZXJcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXV0YXRvck1ldGhvZE5hbWVzID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oW1wiY2xlYXJcIiwgXCJkZWxldGVcIiwgXCJzZXRcIl0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0cmlnZ2VyLCBNYXBIYW5kbGVyLm11dGF0b3JNZXRob2ROYW1lcywgZGVwdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBtYXAtc3BlY2lmaWMgbXV0YXRvciBtZXRob2RzLlxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcGFyYW0gb3JnTWV0aG9kIFxyXG4gICAgICogQHBhcmFtIGFyZ3MgVHdvIGVsZW1lbnQgdHVwbGUgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHJldHVybiB2YWx1ZSBhbmQgdGhlIHNlY29uZFxyXG4gICAgICogZWxlbWVudCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250YWluZXIgaGFzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0OiBNYXA8YW55LGFueT4sIG5hbWU6IFByb3BlcnR5S2V5LCBvcmdNZXRob2Q6IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSk6IFthbnksIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xlYXJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpc0NoYW5nZWQgPSB0YXJnZXQuc2l6ZSA+IDA7XHJcbiAgICAgICAgICAgIG9yZ01ldGhvZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgaXNDaGFuZ2VkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJzZXRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIGFyZ3NbMF0sIHRyaWdnZXJyaXplKCBhcmdzWzFdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJkZWxldGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVkID0gb3JnTWV0aG9kKCBhcmdzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtkZWxldGVkLCBkZWxldGVkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIHNldHMuXHJcbiAqL1xyXG5jbGFzcyBTZXRIYW5kbGVyIGV4dGVuZHMgU2xvdENvbnRhaW5lckhhbmRsZXJcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXV0YXRvck1ldGhvZE5hbWVzID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oW1wiYWRkXCIsIFwiZGVsZXRlXCIsIFwiY2xlYXJcIl0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0cmlnZ2VyLCBTZXRIYW5kbGVyLm11dGF0b3JNZXRob2ROYW1lcywgZGVwdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBzZXQtc3BlY2lmaWMgbXV0YXRvciBtZXRob2RzLlxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcGFyYW0gb3JnTWV0aG9kIFxyXG4gICAgICogQHBhcmFtIGFyZ3MgVHdvIGVsZW1lbnQgdHVwbGUgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHJldHVybiB2YWx1ZSBhbmQgdGhlIHNlY29uZFxyXG4gICAgICogZWxlbWVudCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250YWluZXIgaGFzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0OiBNYXA8YW55LGFueT4sIG5hbWU6IFByb3BlcnR5S2V5LCBvcmdNZXRob2Q6IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSk6IFthbnksIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiYWRkXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBbb3JnTWV0aG9kKCB0cmlnZ2Vycml6ZSggYXJnc1swXSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSksIHRydWVdO1xyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiY2xlYXJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpc0NoYW5nZWQgPSB0YXJnZXQuc2l6ZSA+IDA7XHJcbiAgICAgICAgICAgIG9yZ01ldGhvZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgaXNDaGFuZ2VkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJkZWxldGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVkID0gb3JnTWV0aG9kKCBhcmdzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtkZWxldGVkLCBkZWxldGVkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlY29yYXRvcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBwcm9wZXJ0aWVzIHNvIHRoYXQgY2hhbmdpbmcgdGhlaXIgdmFsdWUgd2lsbCBhbnkgd2F0Y2hlclxyXG4gKiBvYmplY3RzIGF0dGFjaGVkIHRvIHRoZW0gdG8gcmVzcG9uZC5cclxuICogVGhlIGZvcm0gYEB0cmlnZ2VyYCBkZXNpZ25hdGVzIGEgZGVmYXVsdCB0cmlnZ2VyIGRlY29yYXRvciwgd2hvc2UgZGVwdGggd2lsbCBiZSBhc3NpZ25lZFxyXG4gKiBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIHR5cGU6IFNoYWxsb3cgZm9yIGFycmF5cywgbWFwcyBhbmQgc2V0cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICogVGhlIGZvcm0gYEB0cmlnZ2VyKG4pYCBkZXNpZ25hdGVzIGEgdHJpZ2dlciBkZWNvcmF0b3IgZmFjdG9yeSB3aXRoIHRoZSBzcGVjaWZpZWQgZGVwdGguXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlciggdGFyZ2V0T3JEZXB0aDogYW55LCBuYW1lPzogc3RyaW5nKTogYW55XHJcbntcclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0T3JEZXB0aCA9PT0gXCJudW1iZXJcIilcclxuICAgIHtcclxuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGEgbnVtYmVyIHRoYXQgaXQgaXMgYW4gZXhwbGljaXRseSBzcGVjaWZpZWQgZGVwdGggdXNpbmdcclxuICAgICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeS5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlci5iaW5kKCB1bmRlZmluZWQsIHRhcmdldE9yRGVwdGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVuZGVmaW5lZCBkZXB0aCBtZWFucyB0aGF0IHRoYXQgdGhlIGFjdHVhbCBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkIGRlcGVuZGlnIG9uIHRoZVxyXG4gICAgICAgIC8vIHZhbHVlIG9mIHRoZSB0cmlnZ2VyOiBTaGFsbG93IGZvciBtYXBzLCBzZXRzIGFuZCBhcnJheXMgYW5kIERlZXAgZm9yIG9iamVjdHMuXHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEZWNvcmF0b3JIZWxwZXIoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCwgbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgYEB0cmlnZ2VyYCBkZWNvcmF0b3JzLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJpZ2dlckRlY29yYXRvckhlbHBlciggZGVwdGg6IG51bWJlciwgdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbCggbmFtZSArIFwiX3RyaWdnZXJcIik7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICBnZXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKCBkZXB0aCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKCBkZXB0aCwgdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9iai5zZXQoIHZhbClcclxuICAgICAgICB9LFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIFwiZ2V0XCIgcHJvcGVydGllcyBvciBmdW5jdGlvbnMgcmV0dW5pbmcgYSB2YWx1ZSBzbyB0aGF0IHRoaXNcclxuICogdmFsdWUgd2lsbCBhdXRvbWF0aWNhbGx5IHJlY2FsY3VsYXRlZCBpZiBhbnkgdHJpZ2dlcnMgb24gd2hpY2ggdGhpcyB2YWx1ZSBkZXBlbmRzIGhhdmUgdGhlaXJcclxuICogdmFsdWVzIGNoYW5nZWQuIFdIZW4gdGhpcyBoYXBwZW5zLCB0aGUgd2F0Y2hlciBvYmplY3RzIGF0dGFjaGVkIHRvIHRoaXMgY29tcHV0ZWQgdmFsdWUgd2lsbFxyXG4gKiBiZSBub3RpZmllZCB0byByZXNwb25kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBwcm9wRGVzY3I6IFByb3BlcnR5RGVzY3JpcHRvcilcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbChuYW1lKTtcclxuXHJcbiAgICAvLyBwcm9wRGVzYy52YWx1ZSBpcyB1bmRlZmluZWQgZm9yIGFjY2Vzc29ycyBhbmQgZGVmaW5lZCBmb3IgZnVuY3Rpb25zXHJcbiAgICBpZiAoIXByb3BEZXNjci52YWx1ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXByb3BEZXNjci5nZXQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBjb21wdXRlZCBwcm9wZXJ0eSByZXF1aXJlcyBnZXQoKSBhY2Nlc3NvclwiKTtcclxuXHJcbiAgICAgICAgbGV0IG9yZ0dldCA9IHByb3BEZXNjci5nZXQ7XHJcbiAgICAgICAgcHJvcERlc2NyLmdldCA9IGZ1bmN0aW9uKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnR2V0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BEZXNjci5zZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3JnU2V0ID0gcHJvcERlc2NyLnNldDtcclxuICAgICAgICAgICAgcHJvcERlc2NyLnNldCA9IGZ1bmN0aW9uKCB2OiBhbnkpOiB2b2lkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7IG9yZ1NldC5jYWxsKCB0aGlzLCB2KTsgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGdfbWFuYWdlci5leGl0TXV0YXRpb25TY29wZSgpOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9yZ0Z1bmMgPSBwcm9wRGVzY3IudmFsdWU7XHJcbiAgICAgICAgcHJvcERlc2NyLnZhbHVlID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElDb21wdXRlZFRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0Z1bmMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDb21wYXJlcyB0aGUgdHdvIGdpdmVuIHZhbHVlcyBnb2luZyBkb3duIHRvIHRoZWlyIHByb3BlcnRpZXMgaWYgdGhlc2UgYXJlIGFycmF5cyBvciBvYmplY3RzXHJcbiAqIEBwYXJhbSBvMSBcclxuICogQHBhcmFtIG8yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZGVlcENvbXBhcmUoIG8xOiBhbnksIG8yOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHRpZiAobzEgPT09IG8yKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCAmJiBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCB8fCBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSAhPT0gdHlwZW9mIG8yKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwIGluIG8xKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXNfZGVlcENvbXBhcmUoIG8xW3BdLCBvMltwXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHAgaW4gbzIpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHAgaW4gbzEpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpKVxyXG5cdHtcclxuXHRcdGlmIChvMS5sZW5ndGggIT09IG8yLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMCwgbGVuID0gbzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXNfZGVlcENvbXBhcmUoIG8xW2ldLCBvMltpXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXNlIGFyZSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucyBvciBmdW5jdGlvbnMgYW5kIHRoZXkgYXJlIGRpZmZlcmVudFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGhhc2hPYmplY3QoIG86IGFueSk6IG51bWJlclxyXG4vLyB7XHJcbi8vIFx0aWYgKG8gPT09IHVuZGVmaW5lZClcclxuLy8gXHRcdHJldHVybiAwO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IG51bGwpXHJcbi8vIFx0XHRyZXR1cm4gMTtcclxuLy8gXHRlbHNlIGlmIChpc05hTigwKSlcclxuLy8gXHRcdHJldHVybiAyO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IHRydWUpXHJcbi8vIFx0XHRyZXR1cm4gMztcclxuLy8gXHRlbHNlIGlmIChvID09PSBmYWxzZSlcclxuLy8gXHRcdHJldHVybiA0O1xyXG5cclxuLy8gXHRsZXQgaCA9IDEwO1xyXG5cclxuLy8gXHRpZiAodHlwZW9mIG8gPT09IFwibnVtYmVyXCIpXHJcbi8vIFx0XHRyZXR1cm4gMTAgKyBvO1xyXG4vLyBcdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKVxyXG4vLyBcdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8pO1xyXG4vLyBcdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcImZ1bmN0aW9uXCIpXHJcbi8vIFx0XHRyZXR1cm4gaGFzaFN0cmluZyggby5uYW1lKTtcclxuLy8gXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8pKVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBsZW4gPSBvLmxlbmd0aDtcclxuLy8gXHRcdGxldCBoID0gMTAgKyBsZW47XHJcbi8vIFx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4vLyBcdFx0XHQgaCArPSBpICsgaGFzaE9iamVjdCggb1tpXSk7XHJcbi8vIFx0XHRyZXR1cm4gaDtcclxuLy8gXHR9XHJcbi8vIFx0ZWxzZVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBoID0gMTA7XHJcbi8vIFx0XHRmb3IoIGxldCBwIGluIG8pXHJcbi8vIFx0XHRcdGggKz0gaGFzaFN0cmluZyhwKSArIGhhc2hPYmplY3Qob1twXSk7XHJcbi8vIFx0XHRyZXR1cm4gaDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGhhc2hTdHJpbmcoIHM6IHN0cmluZyk6IG51bWJlclxyXG4vLyB7XHJcbi8vIFx0aWYgKCFzKVxyXG4vLyBcdFx0cmV0dXJuIDU7XHJcblxyXG4vLyBcdGxldCBsZW4gPSBzLmxlbmd0aDtcclxuLy8gXHRsZXQgaCA9IDEwICsgbGVuO1xyXG4vLyBcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbi8vIFx0XHRoICs9IHMuY2hhckNvZGVBdChpKTtcclxuLy8gXHRyZXR1cm4gaDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhbiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBvbmUgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFNWRyBzcGVjOyB0aGF0IGlzLCA8c3ZnPlxyXG4gKiBvciBhbnkgb3RoZXIgZnJvbSBTVkcuXHJcbiAqIEBwYXJhbSBlbG0gRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX187Il0sInNvdXJjZVJvb3QiOiIifQ==