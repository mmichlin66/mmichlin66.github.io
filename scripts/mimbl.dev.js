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
/*! exports provided: isSvg, isSvgSvg, createPromiseEx, Defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSvg", function() { return isSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSvgSvg", function() { return isSvgSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPromiseEx", function() { return createPromiseEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defer", function() { return Defer; });
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
/**
 * Creates Promise objects that can be resolved or rejected externally. The returned PromiseEx
 * object has resolve and reject methods.
 */
function createPromiseEx() {
    let tempResolve, tempReject;
    let promise = new Promise(function (resolve, reject) {
        tempResolve = resolve;
        tempReject = reject;
    });
    promise.resolve = tempResolve;
    promise.reject = tempReject;
    return promise;
}
/**
 * function to create Promise objects that can be resolved or rejected externally. The returned
 * Promise object has resolve and reject methods.
 */
class Defer extends Promise {
    constructor() {
        super(function (res, rej) {
            this.resolve = res;
            this.reject = rej;
        });
    }
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
 * In the above example, the myDiv property will be set to point to the HTML div element.
 */
function ref(target, name) {
    let sym = Symbol(name + "_ref");
    function ensureHandler(obj) {
        let handler = obj[sym];
        if (!handler) {
            handler = new RefProxyHandler();
            handler.proxy = new Proxy({}, handler);
            obj[sym] = handler;
        }
        return handler;
    }
    Object.defineProperty(target, name, {
        set(v) {
            ensureHandler(this).obj = v;
        },
        get() {
            return ensureHandler(this).proxy;
        }
    });
}
/**
 * The RefProxyHandler is a proxy handler for the objects created when reference is defined using
 * the @ref decorator. Only the "r" property has special handling (because it is used by the
 * setRef function); everything else is reflected from the remembered referenced object.
 */
class RefProxyHandler {
    get(target, prop, receiver) {
        if (prop === "r")
            return this.obj;
        let propVal = this.obj[prop];
        return typeof propVal === "function" ? propVal.bind(this.obj) : propVal;
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
     * provided, the entire component is requested to be updated. If arguments are provided, they
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
// Built-in components
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

/***/ "./lib/comp/Popups.js":
/*!****************************!*\
  !*** ./lib/comp/Popups.js ***!
  \****************************/
/*! exports provided: DefaultPopupStyles, Popup, DefaultDialogStyles, Dialog, MsgBoxStyles, MsgBox, ProgressBoxStyles, ProgressBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPopupStyles", function() { return DefaultPopupStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDialogStyles", function() { return DefaultDialogStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBoxStyles", function() { return MsgBoxStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBox", function() { return MsgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBoxStyles", function() { return ProgressBoxStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBox", function() { return ProgressBox; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/UtilAPI */ "./lib/api/UtilAPI.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
/* harmony import */ var _utils_EventSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/EventSlot */ "./lib/utils/EventSlot.js");
/**
 * This module contains definitions of [[Popup]], [[Dialog]] and [[MsgBox]] components.
 *
 * The [[Popup]] component is a base component that displays a popup usig the `<dialog>` HTML
 * element. The [[Dialog]] component derives from [[Popup]] and divides the popup area into
 * secontions for caption, body and button bar. Dialogs support moving around by clicking on the
 * caption area. The [[MsgBox]] component derives from [[Dialog]] and displays a message
 * optionally accompannied with an icon and a pre-defined set of buttons.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
class DefaultPopupStyles extends mimcss__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"] {
    constructor() {
        super(...arguments);
        /** Styles for the `<dialog>` element. */
        this.dialog = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            border: [1, "solid", "grey"],
            boxShadow: { x: 4, y: 4, blur: 4, color: "lightgrey" },
            padding: 0,
            maxWidth: "100%",
            maxHeight: "100%",
            // transform: css.scale(0.1),
            // transition: { property: "transform", duration: 200 },
            "::backdrop": { backgroundColor: "grey", opacity: 0.3 }
        });
    }
}
/**
 * The Popup class allows displaying modal and modeless popups. This is the base class for
 * dialogs and message boxes. After the Popup instance is created it can be shown either as modal
 * or modeless popup. Both types of the popup can be closed using the close() method. In order for
 * the popup to be closed "from inside" - that is, by the component, which is used as the popup
 * content - the popup object should be passed to this component.
 *
 * The Popup class itself doesn't provide any means for the user to start moving it around;
 * however, it allows initiating the move action using the startMove() method. Once this method
 * is called, the Popup will start monitoring mouse (pointer) activity and move the dialog
 * accordingly.
 *
 * The content of the popup can be replaced while it is being displayed using the setContent()
 * method.
 *
 * @typeParam TStyles Type of the style definition class used to specify CSS styles for the
 * component. Must implement the IPopupStyles interface.
 * @typeParam TOptions Type of the object used to specify options for the component. Must
 * implement the IPopupOptions interface.
 */
class Popup extends _api_mim__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Popup is constructed by specifying the initial content it should display and the options
     * @param content
     * @param options
     */
    constructor(content, options) {
        super();
        // Handles keydown event to prevent closing the dialog by Esc key.
        this.onKeyDown = (e) => {
            var _a;
            if (e.key === "Escape") {
                e.preventDefault();
                // we ignore the Escape key if the escapeReturnValue option is undefined; otherwise,
                // we close the dialog with its value
                let retVal = (_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue;
                if (retVal !== undefined)
                    this.close(retVal);
            }
        };
        // Detects whether a click occurred outside of the popup area. This handler is invoked only for
        // modal popups and only if the escapeReturnValue is defined in the options.
        this.onDetectClickOutside = (e) => {
            var _a;
            // clicking on the backdrop of the modal popup has the target property of the event
            // pointing to the `<dialog>` element itself. If it is not this element, then the click
            // was on some element within the popup.
            if (e.target !== this.dlg)
                return;
            // just in case the click happend on the `<dialog>` element itself but within the bounds
            // of the popup (e.g. if popup is styleed with paddings), check that coordinates are
            // outside of the popup area.
            let rc = this.dlg.getBoundingClientRect();
            if (e.clientX < rc.left || e.clientX > rc.right || e.clientY < rc.top || e.clientY > rc.bottom)
                this.close((_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue);
        };
        this.onPointerMove = (e) => {
            e.preventDefault();
            // we only move on the primary button
            if (!this.dlg || !e.isPrimary) {
                this.stopMove();
                return;
            }
            this.move(e.clientX - this.movePointOffsetX, e.clientY - this.movePointOffsetY);
        };
        this.onPointerUp = (e) => {
            e.preventDefault();
            this.stopMove();
        };
        // Events that can be fired by the Popup objects.
        this._events = Object(_utils_EventSlot__WEBPACK_IMPORTED_MODULE_4__["createMultiEventSlot"])();
        this.content = content;
        this.options = options;
    }
    /**
     * Displays the popup as a modeless dialog. The method will throw an exception if the popup
     * is already open as a modal popup.
     */
    open() {
        if (this.isOpen)
            return false;
        this._returnValue = undefined;
        this.create();
        this.dlg.show();
        this.onOpen(false);
    }
    /**
     * Displays the popup as a modeless dialog and returns a promise that is resolved when the
     * popup is closed. The resolved value of the promise is the value passed to the close()
     * method. The method will return a rejected promise if the popup is already open.
     */
    showModal() {
        var _a;
        if (this.isOpen)
            return Promise.reject(new Error("Popup already open"));
        this._returnValue = undefined;
        this.create();
        this.dlg.showModal();
        // must establish listener on window because otherwise, the Escape key is processed by
        // the system (closing the popup) never arriving at the dialog
        window.addEventListener("keydown", this.onKeyDown);
        // if the escapeReturnValue is defined in the options, start listening to the keyboard and
        // click events to detect clicks outside the popup because they will act as Escape too.
        let escapeRetVal = (_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue;
        if (escapeRetVal !== undefined)
            this.dlg.addEventListener("click", this.onDetectClickOutside);
        this.modalPromise = Object(_api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["createPromiseEx"])();
        return this.modalPromise;
    }
    /**
     * Closes the popup and passes a value to be used as a return value. For the modal popups,
     * this value will be the resolved value of the promise returned by the showModal() method.
     * For modeless popups, this value will be available as the returnValue property.
     * @param retVal
     */
    close(returnValue) {
        var _a;
        if (!this.isOpen)
            return;
        if (this.modalPromise) {
            // if escapeReturnValue was defined in options, we need to remove the click handler
            // that we created in showModal
            let escapeRetVal = (_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue;
            if (escapeRetVal !== undefined)
                this.dlg.removeEventListener("click", this.onDetectClickOutside);
            window.removeEventListener("keydown", this.onKeyDown);
            this.modalPromise.resolve(returnValue);
            this.modalPromise = undefined;
        }
        this.dlg.close();
        this.destroy();
        this._returnValue = returnValue;
        this.onClose(returnValue);
    }
    /** Events that can be fired by the Popup component */
    get events() { return this._events; }
    /**
     * Determines whether the popup is currently open.
     */
    get isOpen() { return this.dlg != null; }
    /**
     * Determines whether the dialog is currently open as modeless.
     */
    isModeless() { return this.isOpen && !this.modalPromise; }
    /**
     * Determines whether the dialog is currently open as modal.
     */
    isModal() { return this.isOpen && this.modalPromise != null; }
    /**
     * Returns the value set by the close() method. If the popup is open, the value is undefined.
     */
    get returnValue() { return this._returnValue; }
    /**
     * Gets or sets the flag determining whether the popup is currently visible or hidden.
     */
    get isVisible() { return this._isVisible; }
    set isVisible(v) { this._isVisible = v; }
    /**
     * Replaces the current content of the popup with the given one.
     * @param content
     */
    setContent(content) {
        this.content = content;
    }
    /**
     * Starts monitoring mouse movements and moves the popup with the mouse. This method is
     * intented to be called from a mousedown event handled either by a derived class or by
     * the popup caller.
     */
    startMove(clientX, clientY) {
        if (!this.dlg)
            return;
        // // we prevent default action and propagation so that mouse movements don't cause
        // // test in the popup and on the page to be selected.
        // e.preventDefault();
        // e.stopPropagation();
        let rect = this.dlg.getBoundingClientRect();
        this.movePointOffsetX = clientX - rect.left;
        this.movePointOffsetY = clientY - rect.top;
        // set the new coordinates
        this.dlg.style.margin = "0";
        this.dlg.style.top = rect.top + "px";
        this.dlg.style.left = rect.left + "px";
        window.addEventListener("pointermove", this.onPointerMove);
        window.addEventListener("pointerup", this.onPointerUp);
    }
    /**
     * Stops monitoring mouse movements. This method allows programmatically interrupt
     * dialog moving operations.
     */
    stopMove() {
        window.removeEventListener("pointermove", this.onPointerMove);
        window.removeEventListener("pointerup", this.onPointerUp);
        this.movePointOffsetX = this.movePointOffsetY = 0;
    }
    ;
    /**
     * Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
     * some part of the dialog at the top-left corner remains visible in order to the user to be
     * able to continue moving it.
     */
    moveTo(newX, newY) {
        if (!this.dlg)
            return;
        this.move(newX, newY);
        this.dlg.style.margin = "0";
    }
    ;
    /**
     * If derived classes override this method, they must call super.willMount()
     */
    willMount() {
        this.vn.publishService("popup", this);
    }
    ;
    /**
     * If derived classes override this method, they must call super.willUnmount()
     */
    willUnmount() {
        this.vn.unpublishService("popup");
        // deactivate styles
        mimcss__WEBPACK_IMPORTED_MODULE_1__["deactivate"](this.defaultStyles);
        this.defaultStyles = null;
        if (this.optionalStyles) {
            mimcss__WEBPACK_IMPORTED_MODULE_1__["deactivate"](this.optionalStyles);
            this.optionalStyles = null;
        }
        // clean up
        this.dlg = null;
        this.anchorElement = null;
    }
    ;
    /**
     * The render method simply returns the current content but it can be overridden by derived classes
     */
    render() {
        return this.content;
    }
    ;
    // Creates the dialog element
    create() {
        var _a, _b;
        // obtain the anchor element
        this.anchorElement = this.options && this.options.anchorElement ? this.options.anchorElement : document.body;
        // activate our default styles and if styles are specified in the options, then activate
        // them too.
        this.defaultStyles = mimcss__WEBPACK_IMPORTED_MODULE_1__["activate"](this.getDefaultStyles());
        if (this.options && this.options.styles)
            this.optionalStyles = mimcss__WEBPACK_IMPORTED_MODULE_1__["activate"](this.options.styles);
        // create dialog element and add it to the DOM
        this.dlg = document.createElement("dialog");
        this.dlg.className = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_a = this.options) === null || _a === void 0 ? void 0 : _a.dialogStyleClass, (_b = this.optionalStyles) === null || _b === void 0 ? void 0 : _b.dialog, this.defaultStyles.dialog);
        this.anchorElement.appendChild(this.dlg);
        // assign positioning styles dirctly to the dialog element. If x and/or y are undefined,
        // we center the dialog horizontally and/or vertically
        let style = { position: "fixed" };
        if (!this.options || this.options.initialX === undefined)
            style.left = style.right = 0;
        else
            style.left = this.options.initialX;
        if (!this.options || this.options.initialY === undefined)
            style.top = style.bottom = 0;
        else
            style.top = this.options.initialY;
        mimcss__WEBPACK_IMPORTED_MODULE_1__["setElementStyle"](this.dlg, style, 1 /* Sync */);
        // mount the component
        _api_mim__WEBPACK_IMPORTED_MODULE_0__["mount"](this, this.dlg);
    }
    // Destroys the dialog element
    destroy() {
        // unmount the content
        _api_mim__WEBPACK_IMPORTED_MODULE_0__["unmount"](this.dlg);
        // remove the dialog element
        this.dlg.remove();
    }
    /**
     * Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
     * some part of the dialog at the top-left corner remains visible in order to the user to be
     * able to continue moving it.
     */
    move(newX, newY) {
        if (newX < 0)
            newX = 0;
        else if (newX + 30 > window.innerWidth)
            newX = window.innerWidth - 30;
        if (newY < 0)
            newY = 0;
        else if (newY + 30 > window.innerHeight)
            newY = window.innerHeight - 30;
        // set the new coordinates
        this.dlg.style.left = newX + "px";
        this.dlg.style.top = newY + "px";
    }
    ;
    /**
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return DefaultPopupStyles;
    }
    ;
    /**
     * This method is called when the popup opens. If derived classes override it they
     * must call super.onOpen().
     */
    onOpen(isModal) {
        // notify any listeners
        this._events.open.fire(isModal);
    }
    ;
    /**
     * This method is called when the popup is being closed. If derived classes override it they
     * must call super.onClose().
     */
    onClose(retVal) {
        // notify any listeners
        this._events.close.fire(retVal);
    }
    ;
}
__decorate([
    Object(_internal__WEBPACK_IMPORTED_MODULE_3__["trigger"])(0)
], Popup.prototype, "content", void 0);
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
class DefaultDialogStyles extends DefaultPopupStyles {
    constructor() {
        super(...arguments);
        this.dialogCaption = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            backgroundColor: "dodgerblue",
            color: "white",
            boxShadow: { x: 0, y: 2, blur: 2, color: "lightgrey" },
            padding: 0.4,
        });
        this.dialogBody = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: 0.7,
        });
        this.dialogButtonBar = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            // backgroundColor: "lightgrey",
            padding: [0.7, 1.01],
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        });
        this.dialogButton = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: 0.3,
            marginInlineStart: 1.01,
            minWidth: 5.5,
            border: "none",
            backgroundColor: 0xf2f2f2,
            ":hover": {
                backgroundColor: 0xe2e2e2,
            },
            ":focus": {
                backgroundColor: 0xe2e2e2,
                outline: [1, "solid", 0xa2a2a2],
            }
        });
    }
}
/**
 * The Dialog class is a popup that divides the popup area into three sections: caption, body and
 * button bar. The caption area can be used to move the dialog around.
 */
class Dialog extends Popup {
    constructor(bodyContent, captionContent, options, ...buttons) {
        // we reuse the Popup's content property for dialog's body
        super(bodyContent, options);
        // Map of button IDs to button information objects
        this.buttons = new Map();
        // Map of keyboard key or code values to the button objects associated with them
        this.buttonKeys = new Map();
        // Tab index value to use for the next button to be added
        this.nextButtonTabIndex = 1001;
        this.captionContent = captionContent;
        for (let btn of buttons)
            this.addButton(btn);
    }
    /**
     * Adds a button to the button bar
     */
    setCaption(captionContent) {
        this.captionContent = captionContent;
    }
    /**
     * Adds a button to the button bar
     */
    addButton(btn) {
        let info = new DialogButtonInfo(btn, this.nextButtonTabIndex++);
        this.buttons.set(btn.id, info);
        if (btn.keycode)
            this.buttonKeys.set(btn.keycode, info);
    }
    /**
     * Returns the number of buttons in the button bar
     */
    get buttonCount() { return this.buttons.size; }
    /**
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return DefaultDialogStyles;
    }
    ;
    /**
     * If derived classes override this method, they must call super.willMount()
     */
    willMount() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super.willMount();
        // obtain class names for our elements
        this.captionClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_a = this.options) === null || _a === void 0 ? void 0 : _a.dialogCaptionStyleClass, (_b = this.optionalStyles) === null || _b === void 0 ? void 0 : _b.dialogCaption, this.defaultStyles.dialogCaption);
        this.bodyClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_c = this.options) === null || _c === void 0 ? void 0 : _c.dialogBodyStyleClass, (_d = this.optionalStyles) === null || _d === void 0 ? void 0 : _d.dialogBody, this.defaultStyles.dialogBody);
        this.buttonBarClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_e = this.options) === null || _e === void 0 ? void 0 : _e.dialogButtonBarStyleClass, (_f = this.optionalStyles) === null || _f === void 0 ? void 0 : _f.dialogButtonBar, this.defaultStyles.dialogButtonBar);
        this.buttonClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_g = this.options) === null || _g === void 0 ? void 0 : _g.dialogButtonStyleClass, (_h = this.optionalStyles) === null || _h === void 0 ? void 0 : _h.dialogButton, this.defaultStyles.dialogButton);
        this.vn.publishService("dialog", this);
    }
    /**
     * If derived classes override this method, they must call super.didMount()
     */
    didMount() {
        var _a, _b;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.defaultButton) != null) {
            let info = this.buttons.get((_b = this.options) === null || _b === void 0 ? void 0 : _b.defaultButton);
            if (info)
                info.elm.focus();
        }
    }
    /**
     * If derived classes override this method, they must call super.willUnmount()
     */
    willUnmount() {
        this.vn.unpublishService("dialog");
        super.willUnmount();
    }
    render() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { keydown: this.onButtonKeyDown },
            this.renderCaption,
            this.renderBody,
            this.renderButtons);
    }
    renderCaption() {
        // have to specify touch-action "none" - otherwise, pointer events are canceled by the browser
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.captionClassName, pointerdown: this.onCaptionPointerDown, style: { touchAction: "none" } }, this.captionContent);
    }
    renderBody() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.bodyClassName }, this.content);
    }
    renderButtons() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.buttonBarClassName }, Array.from(this.buttons.values()).map(info => _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("button", { id: info.btn.id, ref: info.elm, class: this.buttonClassName, click: () => this.onButtonClicked(info) }, info.btn.content)));
    }
    onCaptionPointerDown(e) {
        // initiate move only on primary button down
        if (!e.isPrimary)
            return;
        e.preventDefault();
        this.startMove(e.clientX, e.clientY);
    }
    onButtonClicked(info) {
        if (info.btn.callback)
            info.btn.callback(info.btn.id);
        else
            this.close(info.btn.returnValue);
    }
    onButtonKeyDown(e) {
        // check whether any button is associated with either the key or the code
        let info = this.buttonKeys.get(e.key);
        if (!info)
            info = this.buttonKeys.get(e.code);
        if (info) {
            e.preventDefault();
            this.onButtonClicked(info);
        }
    }
}
__decorate([
    _internal__WEBPACK_IMPORTED_MODULE_3__["trigger"]
], Dialog.prototype, "captionContent", void 0);
__decorate([
    Object(_internal__WEBPACK_IMPORTED_MODULE_3__["trigger"])(3)
], Dialog.prototype, "buttons", void 0);
/**
 * The DialogButtonInfo class contains current informtaion about a single button in the dialog's
 * button bar.
 */
class DialogButtonInfo {
    constructor(btn, tabIndex) {
        this.btn = btn;
        this.disabled = btn.disabled;
        this.tabIndex = tabIndex;
    }
}
__decorate([
    _api_mim__WEBPACK_IMPORTED_MODULE_0__["ref"]
], DialogButtonInfo.prototype, "elm", void 0);
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
class MsgBoxStyles extends DefaultDialogStyles {
    constructor() {
        super(...arguments);
        this.container = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        });
        this.icon = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: "0.5rem",
            fontSize: "3em",
            fontWeight: 900,
        });
        this.text = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: 0.5,
            minWidth: "15em",
            maxWidth: "60em",
            minHeight: "2em",
            maxHeight: "20em",
            overflow: "auto",
            verticalAlign: "middle",
        });
    }
}
/**
 * The MsgBox class is a dialog that displays a message with a set of pre-defined buttons.
 */
class MsgBox extends Dialog {
    constructor(message, title, buttons = 1 /* OK */, icon = 0 /* None */, defaultButton) {
        super(message, title, {
            styles: MsgBoxStyles,
            escapeReturnValue: buttons === 0 /* None */ ? 16 /* Close */ : undefined,
            defaultButton
        });
        this.icon = icon;
        this.createButtons(buttons);
    }
    /**
     * Displays modal message box with the given parameters and returns a promise, which is
     * resolved when the user clicks on one of the buttons. The identifier of the button is used
     * as the promise's value.
     * @param message Content to be used in the message box's body.
     * @param title Content to display in the message box's caption.
     * @param buttons Identifier of a button ot button combination to be displayed.
     * @param icon Optional identifier of the icon to be displayed.
     * @returns Promise that is resolved with the identifier of the button clicked by the user.
     */
    static showModal(message, title, buttons = 1 /* OK */, icon = 0 /* None */, defaultButton) {
        let msgBox = new MsgBox(message, title, buttons, icon, defaultButton);
        return msgBox.showModal();
    }
    renderBody() {
        let { char, color } = this.getIconClassAndColor();
        // we are using this.optionalStyles because we explicitly pass our styles in the options
        // parameter of the Dialog constructor.
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.container },
            char && _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { class: this.optionalStyles.icon, style: { color } }, char),
            _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { class: this.optionalStyles.text }, this.content));
    }
    /**
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return MsgBoxStyles;
    }
    ;
    // Adds buttons according to the parameter specified in the constructor.
    createButtons(buttons) {
        switch (buttons) {
            case 16 /* Close */:
                this.createButton("Close", 16 /* Close */);
                break;
            case 1 /* OK */:
                this.createButton("OK", 1 /* OK */);
                break;
            case 3 /* OkCancel */:
                this.createButton("OK", 1 /* OK */);
                this.createButton("Cancel", 2 /* Cancel */, "Escape");
                break;
            case 12 /* YesNo */:
                this.createButton("Yes", 4 /* Yes */);
                this.createButton("No", 8 /* No */);
                break;
            case 14 /* YesNoCancel */:
                this.createButton("Yes", 4 /* Yes */);
                this.createButton("No", 8 /* No */);
                this.createButton("Cancel", 2 /* Cancel */, "Escape");
                break;
        }
    }
    // Returns symbol and color for displaying the icon.
    getIconClassAndColor() {
        switch (this.icon) {
            case 1 /* Info */: return { char: "i", color: "blue" };
            case 4 /* Question */: return { char: "?", color: "green" };
            case 2 /* Warning */: return { char: "!", color: "orange" };
            case 3 /* Error */: return { char: "x", color: "red" };
            default: return {};
        }
    }
    createButton(text, id, keycode) {
        this.addButton({ id, content: text, returnValue: id, keycode });
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Progress box
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
class ProgressBoxStyles extends DefaultDialogStyles {
    constructor(parent) {
        super(parent);
        this.container = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            width: "30rem",
            height: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around"
        });
        this.progress = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            width: "20rem",
            height: "1rem",
            margin: "1rem"
        });
        this.text = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            textAlign: "center",
        });
        this.dialogButtonBar.setProp("justifyContent", "center");
    }
}
/**
 * The ProgressBox class is a dialog that displays a progress indicator, a text and an optional
 * Cancel button.
 */
class ProgressBox extends Dialog {
    constructor(content, title, cancelReturnValue) {
        super(content, title, { styles: ProgressBoxStyles });
        // Handle of the setTimeout call when openeing the popup with delay.
        this.delayHandle = 0;
        if (cancelReturnValue != null)
            this.addButton({ id: 1, content: "Cancel", returnValue: cancelReturnValue });
    }
    /**
     * Displays the modal progress box with the given content and title, which is displayed until
     * the given promise is settled. The delayMilliseconds parameter controls whether the progress
     * box is displayed immediately or is delayed. If the input promise is settled before the
     * delay expires, the progress box is not displayed at all.
     * @param promise Promise to monitor - the progress box is displayed until this promis is settled.
     * @param content Content to be used in the progress box's body.
     * @param title Content to display in the progress box's caption.
     * @param delayMilliseconds Delay in milliseconds until which the progress box isn't displayed.
     * The default value is 750ms. To display the progress box immediately, set it to 0.
     * @returns Promise which is resolved ot rejected with the same value as the input promise.
     */
    static async showUntil(promise, content, title, delayMilliseconds = 750) {
        let progress = new ProgressBox(content, title);
        progress.showModalWithDelay(delayMilliseconds);
        try {
            return await promise;
        }
        finally {
            progress.close();
        }
    }
    /**
     * Initiates displaying a progress box but doesn't really create it until the given timeout
     * expires. If the [[close]] method is called before the timeout expires, the popup isn't
     * created at all. This can be useful if you want the progress to reflect multiple operations
     * but don't show it if the operations finish quickly enough, for example:
     *
     * ```typescript
     * let progress = new Progress();
     * progress.showModalWithDelay( 1000);
     * progress.setContent( "First operation is in progress...")
     * performFirstOperation();
     * progress.setContent( "Second operation is in progress...")
     * performSecondOperation();
     * progress.close();
     * ```
     */
    showModalWithDelay(delayMilliseconds) {
        this.delayHandle = setTimeout(() => this.showNow(), delayMilliseconds);
    }
    /**
     * Closes the popup and passes a value to be used as a return value. For the modal popups,
     * this value will be the resolved value of the promise returned by the showModal() method.
     * For modeless popups, this value will be available as the returnValue property.
     * @param retVal
     */
    close(retVal) {
        if (this.delayHandle > 0) {
            clearTimeout(this.delayHandle);
            this.delayHandle = 0;
        }
        super.close(retVal);
    }
    renderBody() {
        // we are using this.optionalStyles because we explicitly pass our styles in the options
        // parameter of the Dialog constructor.
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.container },
            _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("progress", { class: this.optionalStyles.progress }),
            _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.text }, this.content));
    }
    /**
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return ProgressBoxStyles;
    }
    ;
    showNow() {
        this.delayHandle = 0;
        this.showModal();
    }
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

/***/ "./lib/core/ElmAttr.js":
/*!*****************************!*\
  !*** ./lib/core/ElmAttr.js ***!
  \*****************************/
/*! exports provided: ElmAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElmAttr", function() { return ElmAttr; });
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Stats */ "./lib/utils/Stats.js");

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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Added);
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
                _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Updated);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Updated);
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
        _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["DetailedStats"].stats.log(_utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsCategory"].Attr, _utils_Stats__WEBPACK_IMPORTED_MODULE_1__["StatsAction"].Deleted);
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
    if (vn instanceof _internal__WEBPACK_IMPORTED_MODULE_1__["ClassCompVN"]) {
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
                    console.error("BUG: updateVirtual threw exception but StdErrorHandling service was not found.", err);
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
    return (oldVN.constructor === newVN.constructor &&
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
            console.error(`Unhandled error in component\n${path.join("\n")}\n`, err);
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
        rootVN.willMount();
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPromiseEx", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["createPromiseEx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defer", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["Defer"]; });

/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/HtmlTypes */ "./lib/api/HtmlTypes.js");
/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__) if(["default","mimblStyleSchedulerType","EventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg","createPromiseEx","Defer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/SvgTypes */ "./lib/api/SvgTypes.js");
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__) if(["default","mimblStyleSchedulerType","EventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg","createPromiseEx","Defer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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

/* harmony import */ var _comp_Popups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/Popups */ "./lib/comp/Popups.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPopupStyles", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["DefaultPopupStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["Popup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultDialogStyles", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["DefaultDialogStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsgBoxStyles", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["MsgBoxStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsgBox", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["MsgBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBoxStyles", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["ProgressBoxStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBox", function() { return _comp_Popups__WEBPACK_IMPORTED_MODULE_6__["ProgressBox"]; });

/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal */ "./lib/internal.js");
// Type definitions for mimbl







///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Mimbl-specific style scheduler that coordinates Mimcss DOM writing with Mimbl
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// Set Mimbl style scheduler as the default scheduler for style-related DOM-writing operations.
let mimblStyleSchedulerType = Object(_internal__WEBPACK_IMPORTED_MODULE_7__["s_initStyleScheduler"])();


/***/ }),

/***/ "./lib/internal.js":
/*!*************************!*\
  !*** ./lib/internal.js ***!
  \*************************/
/*! exports provided: s_deepCompare, s_isSvg, s_isSvgSvg, EventSlot, createMultiEventSlot, createTrigger, createWatcher, enterMutationScope, exitMutationScope, createComputedTrigger, createMutator, trigger, computed, ElmAttr, VNUpdateDisp, VNBase, ClassCompVN, IndependentCompVN, ManagedCompVN, ElmVN, FuncVN, FuncProxyVN, PromiseProxyVN, TextVN, RootVN, mountRoot, unmountRoot, s_initStyleScheduler, notifyServicePublished, notifyServiceUnpublished, notifyServiceSubscribed, notifyServiceUnsubscribed, s_currentVN, s_currentClassComp, wrapCallbackWithVN, requestNodeUpdate, scheduleFuncCall, createNodesFromJSX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/UtilFunc */ "./lib/utils/UtilFunc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_deepCompare", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_deepCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_isSvg", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_isSvg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s_isSvgSvg", function() { return _utils_UtilFunc__WEBPACK_IMPORTED_MODULE_0__["s_isSvgSvg"]; });

/* harmony import */ var _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/EventSlot */ "./lib/utils/EventSlot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__["EventSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMultiEventSlot", function() { return _utils_EventSlot__WEBPACK_IMPORTED_MODULE_1__["createMultiEventSlot"]; });

/* harmony import */ var _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/TriggerWatcher */ "./lib/utils/TriggerWatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["createTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWatcher", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["createWatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["enterMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitMutationScope", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["exitMutationScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComputedTrigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["createComputedTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutator", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["createMutator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _utils_TriggerWatcher__WEBPACK_IMPORTED_MODULE_2__["computed"]; });

/* harmony import */ var _core_ElmAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/ElmAttr */ "./lib/core/ElmAttr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElmAttr", function() { return _core_ElmAttr__WEBPACK_IMPORTED_MODULE_3__["ElmAttr"]; });

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

/***/ "./lib/utils/EventSlot.js":
/*!********************************!*\
  !*** ./lib/utils/EventSlot.js ***!
  \********************************/
/*! exports provided: EventSlot, createMultiEventSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSlot", function() { return EventSlot; });
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
    }
    /**
     * Adds the given function as a listener to the event. Note that this cannot be a lambda
     * function because there will be no way to remove a lambda function listener later.
     */
    attach(listener) {
        if (!this.listeners)
            this.listeners = new Set();
        this.listeners.add(listener);
    }
    /** Removes the given function as a listener to the event. */
    detach(listener) {
        if (this.listeners) {
            this.listeners.delete(listener);
            if (this.listeners.size === 0)
                this.listeners = null;
        }
    }
    /** Returns the number of currently attached listeners. */
    get count() { return this.listeners ? this.listeners.size : 0; }
    /** Removes all listeners to the event. */
    clear() {
        this.listeners = null;
    }
    // This method really calls the listeners in a loop. It deconstucts the "arguments" value
    // in order to pass the proper parameters to the listeners.
    realFire() {
        if (this.listeners) {
            for (let listener of this.listeners)
                listener(...arguments);
        }
    }
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
 * obj.events.change.attach( (n: number) => console.log(n));
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
        return this[prop] ? this[prop] : new EventSlotPretender(this, prop);
    }
}
/**
 * The EventSlotPretender objects are returned by the MultiEventSlotHandler if it doesn't find
 * an event slot for the given property. These lightweight objects implement all IEventSlotOwner
 * methods, but only the attach() method actually creates the EventSlot object and sets it to
 * the handler.
 */
class EventSlotPretender {
    constructor(handler, prop) {
        this.handler = handler;
        this.prop = prop;
    }
    /**
     * Method that raises the event and calls all the listeners (if any). It has the signature
     * of the template function so only proper-types parameters can be passed to it.
     */
    fire() {
        if (this.slot)
            this.slot.fire(...arguments);
    }
    /** Removes all listeners to the event. */
    clear() {
        if (this.slot)
            this.slot.clear();
    }
    /**
     * Adds the given function as a listener to the event. Note that this cannot be a lambda
     * function because there will be no way to remove a lambda function listener later.
     */
    attach(listener) {
        if (!this.slot)
            this.slot = this.handler[this.prop] = new EventSlot();
        this.slot.attach(listener);
    }
    /** Removes the given function as a listener to the event. */
    detach(listener) {
        if (this.slot)
            this.slot.detach(listener);
    }
    /** Returns the number of currently attached listeners. */
    get count() {
        return this.slot ? this.slot.count : 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL1V0aWxBUEkudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb21wL1BvcHVwcy50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvSW5kZXBlbmRlbnRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9NYW5hZ2VkQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHJvbWlzZVByb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9QdWJTdWIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9SZWNvbmNpbGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3R5bGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbEZ1bmMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWNzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1jc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtzX2lzU3ZnLCBzX2lzU3ZnU3ZnfSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhbiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBvbmUgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFNWRyBzcGVjOyB0aGF0IGlzLCA8c3ZnPlxyXG4gKiBvciBhbnkgb3RoZXIgZnJvbSBTVkcuXHJcbiAqIEBwYXJhbSBlbG0gRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBzX2lzU3ZnKCBlbG0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gc19pc1N2Z1N2ZyggZWxtKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIFByb21pc2UgY2xhc3Mgd2l0aCB0aGUgcmVzb2x2ZSBhbmQgcmVqZWN0IG1ldGhvZHMgc28gdGhhdCB0aGUgcHJvbWlzZSBjYW5cclxuICogYmUgY3JlYXRlZCBpbiBvbmUgcGxhY2UgYW5kIHJlc29sdmVkIG9yIHJlamVjdGVkIGluIGEgZGlmZmVyZW50IHBsYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvbWlzZUV4PFQgPSBhbnk+ID0gUHJvbWlzZTxUPiAmXHJcbiAgICB7XHJcbiAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLFxyXG4gICAgICAgIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgUHJvbWlzZSBvYmplY3RzIHRoYXQgY2FuIGJlIHJlc29sdmVkIG9yIHJlamVjdGVkIGV4dGVybmFsbHkuIFRoZSByZXR1cm5lZCBQcm9taXNlRXhcclxuICogb2JqZWN0IGhhcyByZXNvbHZlIGFuZCByZWplY3QgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlRXg8VCA9IGFueT4oKTogUHJvbWlzZUV4PFQ+XHJcbntcclxuICAgIGxldCB0ZW1wUmVzb2x2ZSwgdGVtcFJlamVjdDtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHRlbXBSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB0ZW1wUmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgfSkgYXMgUHJvbWlzZUV4PFQ+O1xyXG5cclxuICAgIHByb21pc2UucmVzb2x2ZSA9IHRlbXBSZXNvbHZlO1xyXG4gICAgcHJvbWlzZS5yZWplY3QgPSB0ZW1wUmVqZWN0O1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIGZ1bmN0aW9uIHRvIGNyZWF0ZSBQcm9taXNlIG9iamVjdHMgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZXh0ZXJuYWxseS4gVGhlIHJldHVybmVkXHJcbiAqIFByb21pc2Ugb2JqZWN0IGhhcyByZXNvbHZlIGFuZCByZWplY3QgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZlcjxUID0gYW55PiBleHRlbmRzIFByb21pc2U8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBmdW5jdGlvbihyZXMsIHJlaikge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlOiAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7U3R5bGVzZXQsIElJRFJ1bGUsIENsYXNzUHJvcFR5cGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5vZGVzRnJvbUpTWCwgd3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9SZWNvbmNpbGVyXCI7XHJcbmltcG9ydCB7UHJvcFR5cGUsIEVsbUF0dHIsIEV2ZW50U2xvdCwgbW91bnRSb290LCB1bm1vdW50Um9vdCwgRnVuY1Byb3h5Vk59IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICpcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBvciBjbGFzcy1iYXNlZFxyXG4gKiBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgYXNcclxuICogY2hpbGRyZW4gZm9yIHRoZSBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3RydWN0b3Igc2lnbmF0dXJlIGZvciBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM/OiBUUHJvcHMpOiBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIEZvciBtYW5hZ2VkIGNvbXBvbmVudHMsIHRoZSBwcm9wZXJ0aWVzXHJcblx0ICogYXJlIHVwZGF0ZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgcGFyZW50IGlzIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0cHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudHMgY2FuIGRlZmluZSBkaXNwbGF5IG5hbWUgZm9yIHRyYWNpbmcgcHVycG9zZXM7IGlmIHRoZXkgZG9uJ3QgdGhlIGRlZmF1bHQgbmFtZVxyXG5cdCAqIHVzZWQgaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cywgZ2V0cyBvciBjbGVhcnMgdGhlIHZpcnR1YWwgbm9kZSBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdHdpY2U6XHJcblx0ICogIDEuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqICAgIHBhc3NlZCBvYmplY3QuXHJcblx0ICogIDIuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqICAgIHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdHZuPzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHZpcnR1YWwgbm9kZSBoYXMgYWxyZWFkeSBiZWVuIHNldCBzbyB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzXHJcblx0ICogZnJvbSBpdC5cclxuXHQgKi9cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgY29tcG9uZW50IHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAgKiBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZCB0aGUgY29udGVudCBvZiBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0b1xyXG4gICAgICogdGhlIERPTSB0cmVlLlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgICovXHJcbiAgICBkaWRNb3VudD8oKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuIEFmdGVyXHJcblx0ICogdGhpcyBtZXRob2QgcmV0dXJucyB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuXHQgKi9cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgY2FuIHJlYWQgRE9NIGxheW91dCBpbmZvcm1hdGlvbiAoZS5nLlxyXG5cdCAqIGVsZW1lbnQgbWVhc3VyZW1lbnRzKSB3aXRob3V0IHRoZSByaXNrIG9mIGNhdXNpbmcgZm9yY2VkIGxheW91dHMuXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBiZWZvcmUgdGhlIFJlbmRlciBwaGFzZS5cclxuXHQgKi9cclxuXHRiZWZvcmVVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBhZnRlciBhbGwgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFsbCBtb2RpZmljYXRpb25zIHRvXHJcblx0ICogRE9NIHJlc3VsdGluZyBmcm9tIHVwZGFpbmcgY29tcG9uZW50cyBoYXZlIGJlZW4gYWxyZWFkeSBkb25lLlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYWZ0ZXIgdGhlIENvbW1pdCBwaGFzZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKlxyXG5cdCAqIEluZm9ybXMgdGhlIGNvbXBvbmVudCB0aGF0IG5ldyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzcGVjaWZpZWQuIEF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcblx0ICogdGhpcy5wcm9wcyByZWZlcnMgdG8gdGhlIFwib2xkXCIgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zIHRydWUsIHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBvZiBvbmUgb2YgdGhlIGNvbXBvbmVudCdzIGNoaWxkcmVuLlxyXG4gICAgICogSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cFxyXG4gICAgICogdGhlIGNoYWluIG9mIGNvbXBvbmVudHMgdW50aWwgaXQgcmVhY2hlcyBhIGNvbXBvbmVudCB0aGF0IGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlXHJcbiAgICAgKiBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZSB1bm1vdW50ZWQuXHJcblx0ICogQHBhcmFtIGVyciBBbiBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmdcclxuXHQgKiBvZiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLlxyXG5cdCAqIEBwYXJhbSBwYXRoIEFuIGFycmF5IG9mIG5hbWVzIG9mIGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZyb20gdGhlIG1vdW50ZWQgcm9vdCB0byB0aGVcclxuXHQgKiBjb21wb25lbnQgdGhhdCB0aHJldyB0aGUgZXhjZXB0aW9uLiBUaGlzIHBhdGggaXMgcHJvdmlkZWQgbW9zdGx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRyYWNpbmdcclxuXHQgKiBwdXJwb3Nlcy5cclxuXHQgKi9cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBjb21wb25lbnQgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHRnZXRVcGRhdGVTdHJhdGVneT8oKTogVXBkYXRlU3RyYXRlZ3k7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBVcGRhdGVTdHJhdGVneSBvYmplY3Qgc3BlY2lmaWVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIHVwZGF0ZSBiZWhhdmlvciBvZiBjb21wb25lbnRzIGFuZFxyXG4gKiBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZVN0cmF0ZWd5ID1cclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciBub24tbWF0Y2hpbmcgbmV3IGtleWVkIHN1Yi1ub2RlcyBhcmUgYWxsb3dlZCB0byByZWN5Y2xlIG5vbi1cclxuXHQgKiBtYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzLiBIZXJlIFwibm9uLW1hdGNoaW5nXCIgbWVhbnMgdGhvc2UgbmV3IG9yIG9sZCBub2RlcyB3aXRoIGtleXNcclxuICAgICAqIGZvciB3aGljaCBubyBvbGQgb3IgbmV3IHN1Yi1ub2RlcyB3aXRoIHRoZSBzYW1lIGtleSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW5cclxuICAgICAqIG5vbi1tYXRjaGluZyBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgcmVtb3ZlZCBhbmQgbm9uLW1hdGNoaW5nIG5ldyBzdWItbm9kZXMgd2lsbCBiZSBpbnNlcnRlZC5cclxuICAgICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIG5vbi1tYXRjaGluZyBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgdXBkYXRlZCBieSB0aGUgbm9uLW1hdGNoaW5nXHJcbiAgICAgKiBuZXcgc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKlxyXG5cdCAqIElmIGtleWVkIHN1Yi1ub2RlcyByZWN5Y2xpbmcgaXMgYWxsb3dlZCBpdCBjYW4gc3BlZWQgdXAgYW4gdXBkYXRlIHByb2Nlc3MgYmVjYXVzZVxyXG5cdCAqIGxlc3MgRE9NIG5vZGVzIGdldCByZW1vdmVkIGFuZCBpbnNlcnRlZCwgd2hpY2ggaXMgbW9yZSBleHBlbnNpdmUgdGhhbiB1cGRhdGluZy4gSG93ZXZlcixcclxuXHQgKiB0aGlzIGNhbiBoYXZlIHNvbWUgYWR2ZXJzZSBlZmZlY3RzIHVuZGVyIGNpcnRhaW4gY2lyY3Vtc3RhbmNlcyBpZiBjZXJ0YWluIGRhdGEgaXMgYm91bmRcclxuXHQgKiB0byB0aGUgcGFydGljdWxhciBpbnN0YW5jZXMgb2YgRE9NIG5vZGVzLlxyXG5cdCAqXHJcblx0ICogVGhlIGZsYWcncyBkZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgcHJvcGVydHkgdHlwZXMgdXNlZCBieSBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdF07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSwgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGVcclxuICogY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VD4gfFxyXG5cdFx0XHRcdEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBpZCBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJRFByb3BUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgSUlEUnVsZTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgZWxlbWVudCBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Ly8gc3RhbmRhcmQgSFRNTCBhbmQgU1ZHIGVsZW1lbnQgcHJvcGVydGllc1xyXG5cdGNsYXNzPzogQ2xhc3NQcm9wVHlwZTtcclxuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xyXG5cdGRyb3B6b25lID86IFwiY29weVwiIHwgXCJtb3ZlXCIgfCBcImxpbmtcIjtcclxuXHRpZD86IHN0cmluZyB8IG51bWJlciB8IElJRFJ1bGU7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVzZXQ7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBKU1ggbmFtZXNwYWNlIGRlZmluaW5nIGhvdyBUeXBlU2NyaXB0IHBlcmZvcm1zIHR5cGUgY2hlY2tzIG9uIEpTWCBlbGVtZW50cyxjb21wb25lbnRzXHJcbi8vIHByb3BlcnRpZXMgYW5kIGNoaWxkcmVuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOb2RlW10ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0Ly8gSFRNTCBlbGVtZW50c1xyXG5cdFx0YTogaHRtbC5JSHRtbEFFbGVtZW50UHJvcHM7XHJcblx0XHRhYmJyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWNyb255bTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFkZHJlc3M6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhcHBsZXQ6IGh0bWwuSUh0bWxBcHBsZXRFbGVtZW50UHJvcHM7XHJcblx0XHRhcmVhOiBodG1sLklIdG1sQXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdGFydGljbGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhc2lkZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGF1ZGlvOiBodG1sLklIdG1sQXVkaW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2U6IGh0bWwuSUh0bWxCYXNlRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZWZvbnQ6IGh0bWwuSUh0bWxCYXNlZm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGJkaTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJkbzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJpZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJsb2NrcXVvdGU6IGh0bWwuSUh0bWxCbG9ja3F1b3RlRWxlbWVudFByb3BzO1xyXG5cdFx0Ym9keTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJyOiBodG1sLklIdG1sQnJFbGVtZW50UHJvcHM7XHJcblx0XHRidXR0b246IGh0bWwuSUh0bWxCdXR0b25FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Y2FudmFzOiBodG1sLklIdG1sQ2FudmFzRWxlbWVudFByb3BzO1xyXG5cdFx0Y2FwdGlvbjogaHRtbC5JSHRtbENhcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRjZW50ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjaXRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29kZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbDogaHRtbC5JSHRtbENvbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbGdyb3VwOiBodG1sLklIdG1sQ29sZ3JvdXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGF0YTogaHRtbC5JSHRtbERhdGFFbGVtZW50UHJvcHM7XHJcblx0XHRkYXRhbGlzdDogaHRtbC5JSHRtbERhdGFMaXN0RWxlbWVudFByb3BzO1xyXG5cdFx0ZGQ6IGh0bWwuSUh0bWxEZEVsZW1lbnRQcm9wcztcclxuXHRcdGRlbDogaHRtbC5JSHRtbERlbEVsZW1lbnRQcm9wcztcclxuXHRcdGRldGFpbHM6IGh0bWwuSUh0bWxEZXRhaWxzRWxlbWVudFByb3BzO1xyXG5cdFx0ZGZuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlhbG9nOiBodG1sLklIdG1sRGlhbG9nRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlyOiBodG1sLklIdG1sRGlyRWxlbWVudFByb3BzO1xyXG5cdFx0ZGl2OiBodG1sLklIdG1sRGl2RWxlbWVudFByb3BzO1xyXG5cdFx0ZGw6IGh0bWwuSUh0bWxEbEVsZW1lbnRQcm9wcztcclxuXHRcdGR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZW1iZWQ6IGh0bWwuSUh0bWxFbWJlZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmaWVsZHNldDogaHRtbC5JSHRtbEZpZWxkc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmlnY2FwdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ3VyZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvbnQ6IGh0bWwuSUh0bWxGb250RWxlbWVudFByb3BzO1xyXG5cdFx0Zm9vdGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9ybTogaHRtbC5JSHRtbEZvcm1FbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZTogaHRtbC5JSHRtbEZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWVzZXQ6IGh0bWwuSUh0bWxGcmFtZXNldEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRoMTogaHRtbC5JSHRtbEgxRWxlbWVudFByb3BzO1xyXG5cdFx0aDI6IGh0bWwuSUh0bWxIMkVsZW1lbnRQcm9wcztcclxuXHRcdGgzOiBodG1sLklIdG1sSDNFbGVtZW50UHJvcHM7XHJcblx0XHRoNDogaHRtbC5JSHRtbEg0RWxlbWVudFByb3BzO1xyXG5cdFx0aDU6IGh0bWwuSUh0bWxINUVsZW1lbnRQcm9wcztcclxuXHRcdGg2OiBodG1sLklIdG1sSDZFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkOiBodG1sLklIdG1sSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhncm91cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhyOiBodG1sLklIdG1sSHJFbGVtZW50UHJvcHM7XHJcblx0XHRodG1sOiBodG1sLklIdG1sSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aWZyYW1lOiBodG1sLklIdG1sSWZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0aW1nOiBodG1sLklIdG1sSW1nRWxlbWVudFByb3BzO1xyXG5cdFx0aW5wdXQ6IGh0bWwuSUh0bWxJbnB1dEVsZW1lbnRQcm9wcztcclxuXHRcdGluczogaHRtbC5JSHRtbEluc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRrYmQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRrZXlnZW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGFiZWw6IGh0bWwuSUh0bWxMYWJlbEVsZW1lbnRQcm9wcztcclxuXHRcdGxlZ2VuZDogaHRtbC5JSHRtbExlZ2VuZEVsZW1lbnRQcm9wcztcclxuXHRcdGxpOiBodG1sLklIdG1sTGlFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5rOiBodG1sLklIdG1sTGlua0VsZW1lbnRQcm9wcztcclxuXHRcdGxpc3Rpbmc6IGh0bWwuSUh0bWxMaXN0aW5nRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1haW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtYXA6IGh0bWwuSUh0bWxNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRtYXJrOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWVudTogaHRtbC5JSHRtbE1lbnVFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51aXRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGE6IGh0bWwuSUh0bWxNZXRhRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0ZXI6IGh0bWwuSUh0bWxNZXRlckVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRuYXY6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9mcmFtZXM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub3NjcmlwdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRvYmplY3Q6IGh0bWwuSUh0bWxPYmplY3RFbGVtZW50UHJvcHM7XHJcblx0XHRvbDogaHRtbC5JSHRtbE9sRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0Z3JvdXA6IGh0bWwuSUh0bWxPcHRncm91cEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGlvbjogaHRtbC5JSHRtbE9wdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdG91dHB1dDogaHRtbC5JSHRtbE91dHB1dEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwOiBodG1sLklIdG1sUEVsZW1lbnRQcm9wcztcclxuXHRcdHBhcmFtOiBodG1sLklIdG1sUGFyYW1FbGVtZW50UHJvcHM7XHJcblx0XHRwaWN0dXJlOiBodG1sLklIdG1sUGljdHVyZUVsZW1lbnRQcm9wcztcclxuXHRcdHByZTogaHRtbC5JSHRtbFByZUVsZW1lbnRQcm9wcztcclxuXHRcdHByb2dyZXNzOiBodG1sLklIdG1sUHJvZ3Jlc3NFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cTogaHRtbC5JSHRtbFFFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRycDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnRjOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnVieTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2FtcDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNjcmlwdDogaHRtbC5JSHRtbFNjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNlY3Rpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzZWxlY3Q6IGh0bWwuSUh0bWxTZWxlY3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbG90OiBodG1sLklIdG1sU2xvdEVsZW1lbnRQcm9wcztcclxuXHRcdHNtYWxsOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c291cmNlOiBodG1sLklIdG1sU291cmNlRWxlbWVudFByb3BzO1xyXG5cdFx0c3BhbjogaHRtbC5JSHRtbFNwYW5FbGVtZW50UHJvcHM7XHJcblx0XHRzdHJpa2U6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHJvbmc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHlsZTogaHRtbC5JSHRtbFN0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3ViOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VtbWFyeTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0YWJsZTogaHRtbC5JSHRtbFRhYmxlRWxlbWVudFByb3BzO1xyXG5cdFx0dGJvZHk6IGh0bWwuSUh0bWxUYm9keUVsZW1lbnRQcm9wcztcclxuXHRcdHRkOiBodG1sLklIdG1sVGRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZW1wbGF0ZTogaHRtbC5JSHRtbFRlbXBsYXRlRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dGFyZWE6IGh0bWwuSUh0bWxUZXh0YXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdHRmb290OiBodG1sLklIdG1sVGZvb3RFbGVtZW50UHJvcHM7XHJcblx0XHR0aDogaHRtbC5JSHRtbFRoRWxlbWVudFByb3BzO1xyXG5cdFx0dGhlYWQ6IGh0bWwuSUh0bWxUSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdHRpbWU6IGh0bWwuSUh0bWxUaW1lRWxlbWVudFByb3BzO1xyXG5cdFx0dGl0bGU6IGh0bWwuSUh0bWxUaXRsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRyOiBodG1sLklIdG1sVHJFbGVtZW50UHJvcHM7XHJcblx0XHR0cmFjazogaHRtbC5JSHRtbFRyYWNrRWxlbWVudFByb3BzO1xyXG5cdFx0dHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHVsOiBodG1sLklIdG1sVWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmFyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dmlkZW86IGh0bWwuSUh0bWxWaWRlb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHR3YnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0eG1wOiBodG1sLklIdG1sWG1wRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vIFNWRyBlbGVtZW50c1xyXG5cdFx0c3ZnOiBzdmcuSVN2Z1N2Z0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdBOiBzdmcuSVN2Z0FFbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHRcdGFuaW1hdGVNb3Rpb246IHN2Zy5JU3ZnQW5pbWF0ZU1vdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGVUYXJuc2Zvcm06IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cclxuXHRcdGNpcmNsZTogc3ZnLklTdmdDaXJjbGVFbGVtZW50UHJvcHM7XHJcblx0XHRjbGlwUGF0aDogc3ZnLklTdmdDbGlwUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbG9yUHJvZmlsZTogc3ZnLklTdmdDb2xvclByb2ZpbGVQYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRlZnM6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVzYzogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkaXNjYXJkOiBzdmcuSVN2Z0Rpc2NhcmRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZWxsaXBzZTogc3ZnLklTdmdFbGxpcHNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZlQmxlbmQ6IHN2Zy5JU3ZnRmVCbGVuZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29sb3JNYXRyaXg6IHN2Zy5JU3ZnRmVDb2xvck1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IHN2Zy5JU3ZnRmVDb21wb25lbnRUcmFuc2ZlckVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9zaXRlOiBzdmcuSVN2Z0ZlQ29tcG9zaXRlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogc3ZnLklTdmdGZUNvbnZvbHZlTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IHN2Zy5JU3ZnRmVEaWZmdXNlTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogc3ZnLklTdmdGZURpc3BsYWNlbWVudE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBzdmcuSVN2Z0ZlRGlzdGFudExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEcm9wU2hhZG93OiBzdmcuSVN2Z0ZlRHJvcFNoYWRvd0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRmxvb2Q6IHN2Zy5JU3ZnRmVGbG9vZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRnVuY0E6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0c6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY1I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBzdmcuSVN2Z0ZlR2F1c3NpYW5CbHVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVJbWFnZTogc3ZnLklTdmdGZUltYWdlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNZXJnZTogc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcyB8IHN2Zy5JU3ZnRmlsdGVyUHJpbWl0aXZlUHJvcHM7XHJcblx0XHRmZU1lcmdlTm9kZTogc3ZnLklTdmdGZU1lcmdlTm9kZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTW9ycGhvbG9neTogc3ZnLklTdmdGZU1vcnBob2xvZ3lFbGVtZW50UHJvcHM7XHJcblx0XHRmZU9mZnNldDogc3ZnLklTdmdGZU9mZnNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZlUG9pbnRMaWdodDogc3ZnLklTdmdGZVBvaW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IHN2Zy5JU3ZnRmVTcGVjdWxhckxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcG90TGlnaHQ6IHN2Zy5JU3ZnRmVTcG90TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVRpbGU6IHN2Zy5JU3ZnRmVUaWxlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUdXJidWxlbmNlOiBzdmcuSVN2Z0ZlVHVyYnVsZW5jZUVsZW1lbnRQcm9wcztcclxuXHRcdGZpbHRlcjogc3ZnLklTdmdGaWx0ZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JlaWduT2JqZWN0OiBzdmcuSVN2Z0ZvcmVpZ25PYmplY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Zzogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblxyXG5cdFx0aGF0Y2g6IHN2Zy5JU3ZnSGF0Y2hFbGVtZW50UHJvcHM7XHJcblx0XHRoYXRjaHBhdGg6IHN2Zy5JU3ZnSGF0Y2hwYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGltYWdlOiBzdmcuSVN2Z0ltYWdlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxpbmU6IHN2Zy5JU3ZnTGluZUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbmVhckdyYWRpZW50OiBzdmcuSVN2Z0xpbmVhckdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1hcmtlcjogc3ZnLklTdmdNYXJrZXJFbGVtZW50UHJvcHM7XHJcblx0XHRtYXNrOiBzdmcuSVN2Z01hc2tFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhZGF0YTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRtcGF0aDogc3ZnLklTdmdNUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwYXRoOiBzdmcuSVN2Z1BhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRwYXR0ZXJuOiBzdmcuSVN2Z1BhdHRlcm5FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5Z29uOiBzdmcuSVN2Z1BvbHlnb25FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5bGluZTogc3ZnLklTdmdQb2x5bGluZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogc3ZnLklTdmdSYWRpYWxHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHRcdHJlY3Q6IHN2Zy5JU3ZnUmVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdTY3JpcHQ6IHN2Zy5JU3ZnU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2V0OiBzdmcuSVN2Z1NldEVsZW1lbnRQcm9wcztcclxuXHRcdHNvbGlkY29sb3I6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0c3RvcDogc3ZnLklTdmdTdG9wRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnU3R5bGU6IHN2Zy5JU3ZnU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzd2l0Y2g6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cdFx0c3ltYm9sOiBzdmcuSVN2Z1N5bWJvbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0ZXh0OiBzdmcuSVN2Z1RleHRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0UGF0aDogc3ZnLklTdmdUZXh0UGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1RpdGxlOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHRleHRTcGFuOiBzdmcuSVN2Z1RleHRTcGFuRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHVzZTogc3ZnLklTdmdVc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmlldzogc3ZnLklTdmdWaWV3RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vW2VsZW1OYW1lOiBzdHJpbmddOiBhbnlcclxuXHR9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGludHJpbnNpYyBlbGVtZW50cyBhbmQgdG8gZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQXR0cmlidXRlcyBleHRlbmRzIElDb21tb25Qcm9wcyB7fVxyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNDbGFzc0F0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxuXHR7XHJcblx0XHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBpcyBtb3VudGVkLiBUaGVcclxuXHRcdC8vIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRyZWY/OiBSZWZQcm9wVHlwZTxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwianN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcGFyYW0gY2hpbGRyZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUID0gYW55PiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vIFN5bWJvbCB1c2VkIHRvIGtlZXAgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IGluc2lkZSB0aGUgUmVmIGNsYXNzIGluc3RhbmNlLlxyXG5sZXQgc3ltUmVmID0gU3ltYm9sKFwic3ltUmVmXCIpO1xyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VCA9IGFueT5cclxue1xyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzW3N5bVJlZl0gPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZGV0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpc1tzeW1SZWZdOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpc1tzeW1SZWZdICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXNbc3ltUmVmXSA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGUgUmVmPD5cclxuICogaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4gKiB7XHJcbiAqICAgICBAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICogICAgIHJlbmRlcigpIHsgcmV0dXJuIDxkaXYgcmVmPXtteURpdn0+SGVsbG88L2Rpdj47IH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBteURpdiBwcm9wZXJ0eSB3aWxsIGJlIHNldCB0byBwb2ludCB0byB0aGUgSFRNTCBkaXYgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgIGxldCBzeW0gPSBTeW1ib2woIG5hbWUgKyBcIl9yZWZcIik7XHJcbiAgICBmdW5jdGlvbiBlbnN1cmVIYW5kbGVyKCBvYmo6IGFueSk6IFJlZlByb3h5SGFuZGxlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBoYW5kbGVyID0gb2JqW3N5bV07XHJcbiAgICAgICAgaWYgKCFoYW5kbGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGFuZGxlciA9IG5ldyBSZWZQcm94eUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaGFuZGxlci5wcm94eSA9IG5ldyBQcm94eSgge30sIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICBvYmpbc3ltXSA9IGhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHNldCggdjogYW55KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbnN1cmVIYW5kbGVyKHRoaXMpLm9iaiA9IHY7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5zdXJlSGFuZGxlcih0aGlzKS5wcm94eTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgUmVmUHJveHlIYW5kbGVyIGlzIGEgcHJveHkgaGFuZGxlciBmb3IgdGhlIG9iamVjdHMgY3JlYXRlZCB3aGVuIHJlZmVyZW5jZSBpcyBkZWZpbmVkIHVzaW5nXHJcbiAqIHRoZSBAcmVmIGRlY29yYXRvci4gT25seSB0aGUgXCJyXCIgcHJvcGVydHkgaGFzIHNwZWNpYWwgaGFuZGxpbmcgKGJlY2F1c2UgaXQgaXMgdXNlZCBieSB0aGVcclxuICogc2V0UmVmIGZ1bmN0aW9uKTsgZXZlcnl0aGluZyBlbHNlIGlzIHJlZmxlY3RlZCBmcm9tIHRoZSByZW1lbWJlcmVkIHJlZmVyZW5jZWQgb2JqZWN0LlxyXG4gKi9cclxuY2xhc3MgUmVmUHJveHlIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgLy8gS2VlcHMgdGhlIHByb3h5IG9iamVjdCBmb3Igd2hpY2ggdGhpcyBpcyB0aGUgaGFuZGxlclxyXG4gICAgcHVibGljIHByb3h5OiBhbnk7XHJcblxyXG4gICAgLy8gS2VlcHMgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IG9yIHVuZGVmaW5lZFxyXG4gICAgcHVibGljIG9iajogYW55O1xyXG5cclxuICAgIHB1YmxpYyBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wID09PSBcInJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JqO1xyXG5cclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHRoaXMub2JqW3Byb3BdO1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiID8gcHJvcFZhbC5iaW5kKCB0aGlzLm9iaikgOiBwcm9wVmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcCA9PT0gXCJyXCIpXHJcbiAgICAgICAgICAgIHRoaXMub2JqID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9ialtwcm9wXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyBSZWZsZWN0LnNldCBkb2Vzbid0IHdvcmsgYnV0IHJlZ3VsYXIgcHJvcGVydHkgc2V0IGRvZXNcclxuICAgICAgICAvLyByZXR1cm4gUmVmbGVjdC5zZXQoIHRoaXMub2JqLCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCB0aGlzLm9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmluZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIGF0dHJzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMub2JqLCBwcm9wLCBhdHRycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmhhcyggdGhpcy5vYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcm90b3R5cGVPZiggdGFyZ2V0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFeHRlbnNpYmxlKCB0YXJnZXQ6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMub2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bWVyYXRlKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSggUmVmbGVjdC5lbnVtZXJhdGUoIHRoaXMuZW51bWVyYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG93bktleXMoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gVCB8IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRpZiAob25seUlmID09PSB1bmRlZmluZWQgfHwgKHJlZiBhcyBSZWYpLnIgPT09IG9ubHlJZilcclxuXHRcdFx0KHJlZiBhcyBSZWYpLnIgPSB2YWw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdChyZWYgYXMgUmVmRnVuYykodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuXHJcblx0cmVhZG9ubHkgdXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdC8qKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB3aGVuIGl0IG5lZWRzIHRvIGJlIHVwZGF0ZWQuICovXHJcblx0cmVxdWVzdFVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQgKiBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSywgc2VydmljZTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuICovXHJcblx0dW5wdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU3Vic2NyaWJlcyB0byBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQgKiBieSB0aGlzIG9yIG9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cywgdGhlIHBhc3NlZCBSZWYgb2JqZWN0IHdpbGwgcmVmZXJlbmNlIGl0O1xyXG5cdCAqIG90aGVyd2lzZSwgdGhlIFJlZiBvYmplY3Qgd2lsbCBiZSBzZXQgdG8gdGhlIGRlZmF1bHRWYWx1ZSAoaWYgc3BlY2lmaWVkKSBvciB3aWxsIHJlbWFpblxyXG5cdCAqIHVuZGVmaW5lZC4gV2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgaXMgcmVnaXN0ZXJlZCBieSB0aGlzIG9yIGEgY2xvc2VzdFxyXG5cdCAqIGFuY2VzdG9yIGNvbXBvbmVudCBpcyBjaGFuZ2VkLHRoZSBSZWYgb2JqZWN0IHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIFRoZSB1c2VTZWxmIG9wdGlvbmFsIHBhcmFtZXRlciBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBjYW4gc3Vic2NyaWJlIHRvIHRoZVxyXG5cdCAqIHNlcnZpY2UgcHVibGlzaGVkIGJ5IGl0c2VsZi4gVGhlIGRlZmF1bHQgaXMgZmFsc2UuXHJcblx0ICogQHBhcmFtIGlkXHJcblx0ICogQHBhcmFtIHJlZlxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZVxyXG5cdCAqIEBwYXJhbSB1c2VTZWxmXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkXHJcblx0ICogQHBhcmFtIGRlZmF1bHRTZXJ2aWNlXHJcblx0ICogQHBhcmFtIHVzZVNlbGZcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIENvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBDb21wb25lbnQgY2xhc3MuXHJcblx0ICpcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKlxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0d3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc0NvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgY29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNYW5hZ2VkQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUluZGVwZW5kZW50Q29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhbiBpbmRlcGVuZGVudCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElDbGFzc0NvbXBWTlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDdXN0b20gYXR0cmlidXRlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNsYXNzIG9mIGhhbmRsZXJzIG9mIGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAqIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuIFRoZSByZXF1aXJlbWVudHMgb24gc3VjaCBjbGFzc2VzIGFyZTpcclxuICogMS4gSW1wbGVtZW50IGEgY29uc3RydWN0b3IgYWNjZXB0aW5nIElFbG1WTiwgYXR0cmlidXRlIHZhbHVlIGFuZCBhdHRyaWJ1dGUgbmFtZSAodGhpcyBhbGxvd3NcclxuICogICB0aGUgc2FtZSBoYW5kbGVyIHRvIHNlcnZlIGRpZmZlcmVudCBhdHRyaWJ1dGVzKS5cclxuICogMi4gSW1wbGVtZW50IHRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0cyBhIG5ldyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgdGhhdCB3aWxsIGFjdCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgcHJvdmlkZXNcclxuXHQgKiB0aGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBBdHRyaWJ1dGUgbmFtZSBpcyBhbHNvIHByb3ZpZGVkIGluIGNhc2UgdGhlIGhhbmRsZXJcclxuXHQgKiBzdXBwb3J0cyBkaWZmZXJlbnQgYXR0cmlidXRlcy4gQnkgdGhlIHRpbWUgdGhpcyBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSBET00gZWxlbWVudCBoYWRcclxuXHQgKiBhbHJlYWR5IGJlZW4gY3JlYXRlZCBhbmQgc3RhbmRhcmQgYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzIGhhZCBiZWVuIGFwcGxpZWQuXHJcblx0ICogQHBhcmFtIGVsbVZOIFZpcnR1YWwgbm9kZSBmb3IgdGhpcyBlbGVtZW50LiBUaGUgaGFuZGxlciBjYW4gcmV0cmlldmUgdGhlIERPTSBlbGVtZW50IGZyb21cclxuXHQgKiAgIHRoaXMgaW50ZXJmYWNlIGFuZCBhbHNvIHVzZSBvdGhlciBtZXRob2RzIChlLmcuIHN1YnNjcmliZSB0byBzZXJ2aWNlcykuXHJcblx0ICogQHBhcmFtIGF0dHJWYWwgSW5pdGlhbCB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqIEBwYXJhbSBhdHRyTmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICovXHJcblx0bmV3KCBlbG1WTjogSUVsbVZOLCBhdHRyVmFsOiBULCBhdHRyTmFtZT86IHN0cmluZyk6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gYWJpbGl0eSB0byBoYW5kbGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBjYW5cclxuICogYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgYW4gZXhpc3RpbmcgY3VzdG9tIGF0dHJpYnV0ZSB3aXRoIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BWYWwgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlLlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgY2hhbmdlcyB3ZXJlIG1hZGUgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHR1cGRhdGUoIG5ld1Byb3BWYWw6IFQpOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBUZXJtaW5hdGVzIHRoZSBmdW5jdGlvbmluZyBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGVpdGhlclxyXG5cdCAqIHdoZW4gYSBuZXcgcmVuZGVyaW5nIG9mIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSB0aGUgYXR0cmlidXRlIGFueW1vcmUgb3IgaWYgdGhlIGVsZW1lbnRcclxuXHQgKiBpcyByZW1vdmVkLiBBbHRob3VnaCB0aGlzIG1ldGhvZCBpcyBvcHRpb25hbCwgbW9zdCBoYW5kbGVycyB3aWxsIG5lZWQgdG8gaW1wbGVtZW50IGl0IHRvXHJcblx0ICogcHJvcGVybHkgY2xlYW51cCBhbnkgcmVzb3VyY2VzIChlLmcuIGV2ZW50IGhhbmRsZXJzKSB0byBhdm9pZCBsZWFrcy5cclxuXHQgKiBAcGFyYW0gaXNSZW1vdmFsIFRydWUgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmcgcmVtb3ZlZCBhbmQgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgYmVpbmdcclxuXHQgKiAgIHVwZGF0ZWQgYW5kIHRoZSBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIHByb3ZpZGVkLiBJZiB0aGUgaGFuZGxlciBhZGRzIGFueSBldmVudFxyXG5cdCAqICAgbGlzdGVuZXJzIHRvIHRoZSBlbGVtZW50LCB0aGVuIGl0IGhhcyB0byByZW1vdmUgdGhlbSBvbiB1cGRhdGUgYnV0IGRvZW4ndCBoYXZlIHRvIGRvIGl0XHJcblx0ICogICBvbiBlbGVtZW50IHJlbW92YWwuXHJcblx0ICovXHJcblx0dGVybWluYXRlPyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciBjbGFzcyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcbiAqIEBwYXJhbSBmYWN0b3J5IGN1c3RvbSBhdHRyaWJ1dGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggYXR0ck5hbWU6IHN0cmluZywgaGFuZGxlckNsYXNzOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+KTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBhdHRyTmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5DdXN0b21BdHRyLCBoYW5kbGVyQ2xhc3MgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGV2ZW50IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBldmVudE5hbWUsIHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tcG9uZW50VXBkYXRlUmVxdWVzdCB0eXBlIGRlZmluZXMgcGFyYW1ldGVycyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCB1cGRhdGVNZVxyXG4gKiBtZXRob2QgaWYgdGhlIGdvYWwgaXMgbm90IHRvIHVwZGF0ZSB0aGUgZW50aXJlIGNvbXBvbmVudCBidXQgb25seSBvbmUgb3Igc2V2ZXJhbCByZW5kZXJpbmdcclxuICogZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50VXBkYXRlUmVxdWVzdCA9IEZ1bmN0aW9uIHwgeyBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQsIHRoZXlcclxuXHQgKiBpbmRpY2F0ZSB3aGF0IHJlbmRlcmluZyBmdW5jdGlvbnMgc2hvdWxkIGJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIHVwZGF0ZVJlcXVlc3RzXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLCB1bmRlZmluZWQsIHRoaXMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiBhIG5vbi1hcnJheSBwYXJhbWV0ZXIgaXMgcGFzc2VkIGluIHJlcS5hcmdzLCB3ZSB3cmFwIGl0IGluIGFuIGFycmF5XHJcblx0XHRcdFx0XHRGdW5jUHJveHlWTi51cGRhdGUoIHJlcS5mdW5jLCByZXEua2V5LCByZXEudGhpc0FyZyA/IHJlcS50aGlzQXJnIDogdGhpcyxcclxuXHRcdFx0XHRcdFx0IXJlcS5hcmdzIHx8IEFycmF5LmlzQXJyYXkocmVxLmFyZ3MpID8gcmVxLmFyZ3MgOiBbcmVxLmFyZ3NdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIHRoZSBNaW1ibCB0aWNrIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIGZ1bmN0aW9uXHJcblx0ICogICBpcyBhbHJlYWR5IGJvdW5kIG9yIGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWVCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgaGF2ZSBhbHJlYWR5IGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBJZiB0aGlzXHJcblx0ICogICBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdXNlZCAod2hpY2ggYWxsb3dzIHNjaGVkdWxpbmdcclxuXHQgKiAgIHJlZ3VsYXIgdW5ib3VuZCBjb21wb25lbnRzJyBtZXRob2RzKS4gVGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bilcclxuXHRcdFx0dGhpcy52bi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIGNvbXBvbmVudCB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKlxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKlxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICpcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhpc0NhbGxiYWNrLCB0aGlzLnZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJ1aWx0LWluIGNvbXBvbmVudHNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQW4gYXJ0aWZpY2lhbCBcIkZyYWdtZW50XCIgY29tcG9uZW50IHRoYXQgaXMgb25seSB1c2VkIGFzIGEgdGVtcG9yYXJ5IGNvbGxlY3Rpb24gb2Ygb3RoZXIgaXRlbXNcclxuICogaW4gcGxhY2VzIHdoZXJlIEpTWCBvbmx5IGFsbG93cyBhIHNpbmdsZSBpdGVtLiBPdXIgSlNYIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlcyBhIHZpcnR1YWwgbm9kZVxyXG4gKiBmb3IgZWFjaCBvZiBpdHMgY2hpbGRyZW4gYW5kIHRoZSBmdW5jdGlvbiBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQuIFRoaXMgZnVuY3Rpb24gaXMgb25seSBuZWVkZWRcclxuICogYmVjYXVzZSBjdXJyZW50bHkgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHRoZSBgPD5gIGZyYWdtZW50IG5vdGF0aW9uIGlmIGEgY3VzdG9tIEpTWCBmYWN0b3J5XHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQuXHJcbiAqXHJcbiAqIFVzZSBpdCBhcyBmb2xsb3dzOlxyXG4gKiBgYGB0c3hcclxuICpcdGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKlx0Li4uLi5cclxuICpcdHJlbmRlcigpXHJcbiAqXHR7XHJcbiAqXHRcdHJldHVybiA8RnJhZ21lbnQ+XHJcbiAqXHRcdFx0PGRpdjEvPlxyXG4gKlx0XHRcdDxkaXYyLz5cclxuICpcdFx0XHQ8ZGl2My8+XHJcbiAqXHRcdDwvRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudCggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbHVlIHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGVcclxuXHQgKiBjbGFzcyBiYXNlZCBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgKHdoaWNoIGlzIHRoZVxyXG5cdCAqIG1vc3QgY29tbW9uIGNhc2UpLlxyXG5cdCAqL1xyXG5cdHRoaXNBcmc/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqXHJcblx0ICogTm90ZSB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGFjdGlvbnMgdGhhdCBvY2N1cnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIGZhbHNlIG9yIG9taXR0ZWQ6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQVwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJCXCIpLiBcIkJcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQlwiIHdpbGwgc3RpbGwgYmUgdXNlZC5cclxuXHQgKlxyXG5cdCAqIElmIHRoZSBgcmVwbGFjZUFyZ3NgIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB0aGVuIGV2ZXJ5IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbmV0IGlzXHJcblx0ICogcmVuZGVyZWQsIHRoZSB2YWx1ZSBvZiB0aGUgYGFyZ3NgIHByb3BlcnR5IHJlcGxhY2VzIHdoYXRldmVyIGFyZ3VtZW50cyB0aGVyZSB3ZXJlIGJlZm9yZS5cclxuXHQgKlxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICpcclxuICogYGBgdHN4XHJcbiAqIDxGdW5jUHJveHkgZnVuYz17dGhpcy5yZW5kZXJTb21ldGhpbmd9IGtleT17Li4ufSBhcmdzPXsuLi59IHRoaXNBcmc9ey4uLn0gLz5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZXJlIGlzIGEgc2ltcGxlciBtZXRob2Qgb2Ygc3BlY2lmeWluZyBhIHJlbmRlcmluZyBmdW5jdGlvbiBpbiBKU1gsIGUuZy46XHJcbiAqXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEZ1bmNQcm94eSBoYXMgYSBwdWJsaWMgc3RhdGljIFVwZGF0ZSBtZXRob2QgdGhhdCBjYW4gYmUgY2FsbGVkIHRvIGNhdXNlIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtXHJcbiAqIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eSBleHRlbmRzIENvbXBvbmVudDxGdW5jUHJveHlQcm9wcyx2b2lkPlxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdGFuY2VzIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGFyZSBuZXZlciBhY3R1YWxseSBjcmVhdGVkOyBpc3RlYWQsIHRoZSBwYXJhbWV0ZXJzXHJcblx0ICogcGFzc2VkIHRvIGl0IHZpYSBKU1ggYXJlIHVzZWQgYnkgYW4gaW50ZXJuYWwgdmlydHVhbCBub2RlIHRoYXQgaGFuZGxlcyBmdW5jdGlvblxyXG5cdCAqIGludm9jYXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggcHJvcHM6IEZ1bmNQcm94eVByb3BzKSB7IHN1cGVyKHByb3BzKSB9XHJcblxyXG5cdC8qKiBUaGUgcmVuZGVyIG1ldGhvZCBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueSB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0IHJlLXJlbmRlcmluZyBvZiB0aGUgY29udGVudCBwcm9kdWNlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYnkgaW52b2tpbmcgdGhpc1xyXG5cdCAqIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gbXVzdCBoYXZlIGJlZW4gcHJldmlvdXNseSB1c2VkIGluIHJlbmRlcmluZyB1c2luZyBlaXRoZXJcclxuXHQgKiA8RnVuY1Byb3h5IGZ1bmM9e30gLz4gSlNYIGNvbnN0cnVjdCBvciBhIHNpbXBsZXIgY29uc3R1Y3RcclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBpbnZva2UuXHJcblx0ICogQHBhcmFtIGtleSBWYWx1ZSB0aGF0IGhlbHBzIGRpc3Rpbmd1aXNoaW5nIGJldHdlZW4gbXVsdGlwbGUgdXNhZ2VzIG9mIHRoZSBmdW5jdGlvbi5cclxuXHQgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgLi4uYXJnczogYW55W10pXHJcblx0e1xyXG5cdFx0RnVuY1Byb3h5Vk4udXBkYXRlKCBmdW5jLCBrZXksIHRoaXNBcmcsIGFyZ3MpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3VwcG9ydCBmb3IgcHJvbWlzZXMgcmV0dXJuZWQgYXMgY29udGVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0byBiZSB1c2VkIHdpdGggdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb21pc2VQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogUHJvbWlzZSB0aGF0IHdpbGwgYmUgd2F0Y2ggYnkgdGhlIHdhaXRpbmcgbm9kZS4gKi9cclxuXHRwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8qKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZC4gKi9cclxuXHRlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50IHdyYXBzIGEgUHJvbWlzZSBhbmQgcmVwbGFjZXMgaXRzIGNvbnRlbnQgd2hlbiB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLlxyXG4gKiBCZWZvcmUgdGhlIHByb21pc2UgaXMgc2V0dGxlZCwgdGhlIGNvbXBvbmVudCBkaXNwbGF5cyBhbiBvcHRpb25hbCBcImluLXByb2dyZXNzXCIgY29udGVudFxyXG4gKiBzcGVjaWZpZWQgYXMgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSBjb21wb25lbnQgd2lsbCBlaXRoZXJcclxuICogZGlzcGxheSB0aGUgXCJlcnJvclwiIGNvbnRlbnQgb2J0YWluZWQgYnkgY2FsbGluZyBhIGZ1bmN0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIHByb3BlcnRpZXMgb3IsIGlmXHJcbiAqIHN1Y2ggZnVuY3Rpb24gaXMgbm90IHNwZWNpZmllZCwgZGlzcGxheSBub3RoaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21pc2VQcm94eSBleHRlbmRzIENvbXBvbmVudDxQcm9taXNlUHJveHlQcm9wcz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBQcm9taXNlUHJveHlQcm9wcykgeyBzdXBlciggcHJvcHMpOyB9XHJcblxyXG5cdC8qKiBUaGUgcmVuZGVyIG1ldGhvZCBvZiB0aGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCBpcyBuZXZlciBhY3R1YWxseSBjYWxsZWQgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueSB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBtb3VudC91bm1vdW50IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudFxyXG4vLyBhc3luY2hyb25vdXNseS5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLHRoZW5cclxuICpcdFx0XHRcdHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnQoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0bW91bnRSb290KCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHRoZSBjb250ZW50IHRoYXQgd2FzIG9yaWdpbmFsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBtb3VudCBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBjb250ZW50IHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHVubW91bnRSb290KCBhbmNob3JETik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIC0gdXNlIGBAdHJpZ2dlcmBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGFibGUoIHRhcmdldCwgbmFtZTogc3RyaW5nKVxyXG57XHJcblx0bGV0IGF0dHJOYW1lID0gXCJfbV9cIiArIG5hbWU7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICBzZXQoIHZhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2F0dHJOYW1lXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGxldCB2bjogSVZOb2RlID0gdGhpcy52bjtcclxuICAgICAgICAgICAgICAgIGlmICh2biAmJiAhdm4udXBkYXRlUmVxdWVzdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQoKSB7IHJldHVybiB0aGlzW2F0dHJOYW1lXTsgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGRlZmluaXRpb25zIG9mIFtbUG9wdXBdXSwgW1tEaWFsb2ddXSBhbmQgW1tNc2dCb3hdXSBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBUaGUgW1tQb3B1cF1dIGNvbXBvbmVudCBpcyBhIGJhc2UgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYSBwb3B1cCB1c2lnIHRoZSBgPGRpYWxvZz5gIEhUTUxcclxuICogZWxlbWVudC4gVGhlIFtbRGlhbG9nXV0gY29tcG9uZW50IGRlcml2ZXMgZnJvbSBbW1BvcHVwXV0gYW5kIGRpdmlkZXMgdGhlIHBvcHVwIGFyZWEgaW50b1xyXG4gKiBzZWNvbnRpb25zIGZvciBjYXB0aW9uLCBib2R5IGFuZCBidXR0b24gYmFyLiBEaWFsb2dzIHN1cHBvcnQgbW92aW5nIGFyb3VuZCBieSBjbGlja2luZyBvbiB0aGVcclxuICogY2FwdGlvbiBhcmVhLiBUaGUgW1tNc2dCb3hdXSBjb21wb25lbnQgZGVyaXZlcyBmcm9tIFtbRGlhbG9nXV0gYW5kIGRpc3BsYXlzIGEgbWVzc2FnZVxyXG4gKiBvcHRpb25hbGx5IGFjY29tcGFubmllZCB3aXRoIGFuIGljb24gYW5kIGEgcHJlLWRlZmluZWQgc2V0IG9mIGJ1dHRvbnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0ICogYXMgY3NzIGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge1Byb21pc2VFeCwgY3JlYXRlUHJvbWlzZUV4fSBmcm9tIFwiLi4vYXBpL1V0aWxBUElcIjtcclxuaW1wb3J0IHt0cmlnZ2VyfSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuaW1wb3J0IHsgTXVsdGlFdmVudFNsb3QsIGNyZWF0ZU11bHRpRXZlbnRTbG90IH0gZnJvbSBcIi4uL3V0aWxzL0V2ZW50U2xvdFwiO1xyXG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVXNpbmcgbW9kdWxlIGF1Z21lbnRhdGlvbiB0ZWNobmlxdWUgdG8gZXh0ZW5kIHRoZSBJU2VydmljZURlZmluaXRpb24gaW50ZXJmYWNlICovXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vYXBpL21pbVwiXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kaW5nIHRoZSBJU2VydmljZURlZmluaXRpb24gaW50ZXJmYWNlIHdpdGggc2VydmljZXMgdXNlZCBieSB0aGUgW1tQb3B1cF1dIGFuZFxyXG4gICAgICogW1tEaWFsb2ddXSBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBcInBvcHVwXCIgc2VydmljZSBnaXZlcyBjb21wb25lbnRzIHVzZWQgaW4gdGhlIGNvbnRlbnQgb2YgdGhlIFtbUG9wdXBdXSBjb21wb25lbnRcclxuICAgICAgICAgKiBhY2Nlc3MgdG8gdGhlIFtbSVBvcHVwXV0gaW50ZXJmYWNlLCB0aHJvdWdoIHdoaWNoIHRoZXkgY2FuIGNsb3NlIHRoZSBwb3B1cC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwb3B1cDogSVBvcHVwO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgXCJkaWFsb2dcIiBzZXJ2aWNlIGdpdmVzIGNvbXBvbmVudHMgdXNlZCBpbiB0aGUgY2FwdGlvbiBvciB0aGUgYm9keSBvZiB0aGUgW1tEaWFsb2ddXVxyXG4gICAgICAgICAqIGNvbXBvbmVudCBhY2Nlc3MgdG8gdGhlIFtbSURpYWxvZ11dIGludGVyZmFjZSwgdGhyb3VnaCB3aGljaCB0aGV5IGNhbiBhZGQgYnV0dG9uc1xyXG4gICAgICAgICAqIGFuZCBvdGhlcndpc2UgbWFuaXB1bGF0ZSB0aGUgZGlhbG9nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpYWxvZzogSURpYWxvZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9wdXBcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHBvcHVwIGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhlIGNvbnRlbnQuIFRoaXMgaW50ZXJmYWNlXHJcbiAqIGlzIHB1Ymxpc2hlZCBhcyBhIHNlcnZpY2UgYW5kIGNhbiBiZSB1c2VkIGJ5IHRoZSBjb250ZW50IGNvbXBvbmVudHMgdG8gY2xvc2UgdGhlIHBvcHVwLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIHBvcHVwIGFuZCBwYXNzZXMgYSB2YWx1ZSB0byBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlLiBGb3IgdGhlIG1vZGFsIHBvcHVwcyxcclxuICAgICAqIHRoaXMgdmFsdWUgd2lsbCBiZSB0aGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIHNob3dNb2RhbCgpIG1ldGhvZC5cclxuICAgICAqIEZvciBtb2RlbGVzcyBwb3B1cHMsIHRoaXMgdmFsdWUgd2lsbCBiZSBhdmFpbGFibGUgYXMgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIHJldHVyblZhbHVlXHJcbiAgICAgKi9cclxuICAgIGNsb3NlKCByZXR1cm5WYWx1ZT86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXBTdHlsZXMgaW50ZXJmYWNlIGRlZmluZXMgc3R5bGVzIHVzZWQgYnkgdGhlIFBvcHVwIGNsYXNzIHRvIGNyZWF0ZSB0aGUgYDxkaWFsb2c+YFxyXG4gKiBlbGVtZW50LiBUaGUgaW1wbGVtZW50YXRpb25zIHNob3VsZCBwcm92aWRlIHRoZSBjbGFzcyBydWxlIGZvciB0aGUgZGlhbG9nIHByb3BlcnR5IGFuZCBjYW5cclxuICogYWxzbyBkZWZpbmUgdGhlIDo6YmFja2Ryb3AgcHNldWRvIGVsZW1lbnQgc3R5bGVzLCB3aGljaCBpcyB1c2VkIHdoZW4gdGhlIHBvcHVwIGlzIHNob3duIGFzIGFcclxuICogbW9kYWwgZGlhbG9nLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBTdHlsZXMgZXh0ZW5kcyBjc3MuU3R5bGVEZWZpbml0aW9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHN0eWxlcyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgUG9wdXAgaWYgc3R5bGVzIGFyZSBub3Qgc3BlY2lmaWVkIHVzaW5nIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFBvcHVwU3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvbiBpbXBsZW1lbnRzIElQb3B1cFN0eWxlc1xyXG57XHJcbiAgICAvKiogU3R5bGVzIGZvciB0aGUgYDxkaWFsb2c+YCBlbGVtZW50LiAqL1xyXG4gICAgZGlhbG9nID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgYm9yZGVyOiBbMSwgXCJzb2xpZFwiLCBcImdyZXlcIl0sXHJcbiAgICAgICAgYm94U2hhZG93OiB7IHg6IDQsIHk6IDQsIGJsdXI6IDQsIGNvbG9yOiBcImxpZ2h0Z3JleVwiIH0sXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IGNzcy5zY2FsZSgwLjEpLFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IHsgcHJvcGVydHk6IFwidHJhbnNmb3JtXCIsIGR1cmF0aW9uOiAyMDAgfSxcclxuICAgICAgICBcIjo6YmFja2Ryb3BcIjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiLCBvcGFjaXR5OiAwLjMgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cE9wdGlvbnMgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9wdGlvbnMgdGhhdCBjb2ZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgdGhlIFBvcHVwXHJcbiAqIG9iamVjdC4gVGhleSBhcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3RvciB0byB0aGUgW1tQb3B1cF1dIGNsYXNzXHJcbiAqIEB0eXBlUGFyYW0gVFN0eWxlcyBUeXBlIGZvciB0aGUgc3R5bGVzIHByb3BlcnR5LiBPcHRpb25zIGZvciBkZXJpdmVkIGNvbXBvbmVudHMgd2lsbCBoYXZlIHRvXHJcbiAqIGRlcml2ZSBmcm9tIHRoZSBJUG9wdXBPcHRpb25zIGludGVyZmFjZSBhbmQgdG8gaW1wbGVtZW50IHRoZSBbW0lQb3B1cFN0eWxlc11dIGludGVyZmFjZSBmb3JcclxuICogdGhlIHN0eWxlcyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwT3B0aW9uczxUU3R5bGVzIGV4dGVuZHMgSVBvcHVwU3R5bGVzID0gSVBvcHVwU3R5bGVzPlxyXG57XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBzdHlsZXMgdG8gdXNlIGZvciB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGFuZCBvcHRpb25hbGx5IGZvciB0aGUgOjpiYWNrZHJvcFxyXG4gICAgICogcHNldWRvIGVsZW1lbnQuIFRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlXHJcbiAgICAgKiBbW0lQb3B1cFN0eWxlc11dIGludGVyZmFjZSBvciBhbiBpbnN0YW5jZSBvZiBzdWNoIGNsYXNzLiBUaGUgcG9wdXAgYWN0aXZhdGVzIHRoZSBzdHlsZXNcclxuICAgICAqIHdoZW4gaXQgb3BlbnMgYW5kIGRlYWN0aXZhdGVzIHRoZW0gd2hlbiBpdCBjbG9zZXMuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90IGRlZmluZWQsIHRoZVxyXG4gICAgICogcG9wdXAgd2lsbCB1c2UgdGhlIGRlZmF1bHQgc3R5bGVzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHN0eWxlcz86IFRTdHlsZXMgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQuIElmIHRoaXMgcHJvcGVydHkgaXMgZGVmaW5lZCxcclxuICAgICAqIHRoZSBbW3N0eWxlXV0gcHJvcGVydHkgaXMgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dTdHlsZUNsYXNzPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSB0aGF0IGlzIHJldHVybmVkIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBwb3B1cCBieSBwcmVzc2luZyB0aGUgRXNjYXBlIGtleS4gSWYgdGhpc1xyXG4gICAgICogcHJvcGVydHkgaXMgdW5kZWZpbmVkLCB0aGUgcG9wdXAgY2Fubm90IGJlIGNsb3NlZCB3aXRoIHRoZSBFc2NhcGUga2V5LiBOb3RlIHRoYXQgbnVsbCBpc1xyXG4gICAgICogdmFsaWQgdmFsdWUgdGhhdCBjYW4gYmUgdXNlZCB0byBjbG9zZSBhIHBvcHVwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKlxyXG4gICAgICogRm9yIG1vZGFsIHBvcHVwcywgdGhpcyBwcm9wZXJ0eSBhbHNvIGNvbnRyb2xzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIGRpc21pc3MgdGhlIHBvcHVwIGJ5XHJcbiAgICAgKiBjbGlja2luZyBvbiB0aGUgYmFja2Ryb3AgLSB0aGF0IGlzLCB0aGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBwb3B1cCBpdHNsZWYuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGVzY2FwZVJldHVyblZhbHVlPzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSFRNTCBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQgaXMgY3JlYXRlZC4gSWYgdGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQsXHJcbiAgICAgKiB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGlzIGNyZWF0ZWQgdW5kZXIgdGhlIGA8Ym9keT5gIGVsZW1lbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYW5jaG9yRWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWC1jb29yZGluYXRlIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGRpYWxvZyBmcm9tIHRoZSBhbmNob3IgZWxlbWVudC4gSWYgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGRpYWxvZyB3aWxsIGJlIGNlbnRlcmVkIGhvcml6b250YWxseS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaW5pdGlhbFg/OiBjc3MuQ3NzTGVuZ3RoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWS1jb29yZGluYXRlIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGRpYWxvZyBmcm9tIHRoZSBhbmNob3IgZWxlbWVudC4gSWYgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGRpYWxvZyB3aWxsIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGluaXRpYWxZPzogY3NzLkNzc0xlbmd0aDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cEV2ZW50cyBpbnRlcmZhY2UgcmVwcmVzZW50cyBldmVudHMgdGhhdCB0aGUgUG9wdXAgY29tcG9uZW50IGNhbiBmaXJlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cEV2ZW50c1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcGVuIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBvcHVwIG9wZW5zLlxyXG4gICAgICogQHBhcmFtIGlzTW9kYWwgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHBvcHVwIG9wZW5zIGFzIG1vZGFsIG9yIG1vZGVsZXNzXHJcbiAgICAgKi9cclxuXHRvcGVuKCBpc01vZGFsOiBib29sZWFuKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9zZSBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwb3B1cCBjbG9zZXMuXHJcbiAgICAgKiBAcGFyYW0gcmV0VmFsIFZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UoKSBtZXRob2QuXHJcbiAgICAgKi9cclxuICAgIGNsb3NlKCByZXRWYWw6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQb3B1cCBjbGFzcyBhbGxvd3MgZGlzcGxheWluZyBtb2RhbCBhbmQgbW9kZWxlc3MgcG9wdXBzLiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvclxyXG4gKiBkaWFsb2dzIGFuZCBtZXNzYWdlIGJveGVzLiBBZnRlciB0aGUgUG9wdXAgaW5zdGFuY2UgaXMgY3JlYXRlZCBpdCBjYW4gYmUgc2hvd24gZWl0aGVyIGFzIG1vZGFsXHJcbiAqIG9yIG1vZGVsZXNzIHBvcHVwLiBCb3RoIHR5cGVzIG9mIHRoZSBwb3B1cCBjYW4gYmUgY2xvc2VkIHVzaW5nIHRoZSBjbG9zZSgpIG1ldGhvZC4gSW4gb3JkZXIgZm9yXHJcbiAqIHRoZSBwb3B1cCB0byBiZSBjbG9zZWQgXCJmcm9tIGluc2lkZVwiIC0gdGhhdCBpcywgYnkgdGhlIGNvbXBvbmVudCwgd2hpY2ggaXMgdXNlZCBhcyB0aGUgcG9wdXBcclxuICogY29udGVudCAtIHRoZSBwb3B1cCBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudC5cclxuICpcclxuICogVGhlIFBvcHVwIGNsYXNzIGl0c2VsZiBkb2Vzbid0IHByb3ZpZGUgYW55IG1lYW5zIGZvciB0aGUgdXNlciB0byBzdGFydCBtb3ZpbmcgaXQgYXJvdW5kO1xyXG4gKiBob3dldmVyLCBpdCBhbGxvd3MgaW5pdGlhdGluZyB0aGUgbW92ZSBhY3Rpb24gdXNpbmcgdGhlIHN0YXJ0TW92ZSgpIG1ldGhvZC4gT25jZSB0aGlzIG1ldGhvZFxyXG4gKiBpcyBjYWxsZWQsIHRoZSBQb3B1cCB3aWxsIHN0YXJ0IG1vbml0b3JpbmcgbW91c2UgKHBvaW50ZXIpIGFjdGl2aXR5IGFuZCBtb3ZlIHRoZSBkaWFsb2dcclxuICogYWNjb3JkaW5nbHkuXHJcbiAqXHJcbiAqIFRoZSBjb250ZW50IG9mIHRoZSBwb3B1cCBjYW4gYmUgcmVwbGFjZWQgd2hpbGUgaXQgaXMgYmVpbmcgZGlzcGxheWVkIHVzaW5nIHRoZSBzZXRDb250ZW50KClcclxuICogbWV0aG9kLlxyXG4gKlxyXG4gKiBAdHlwZVBhcmFtIFRTdHlsZXMgVHlwZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB1c2VkIHRvIHNwZWNpZnkgQ1NTIHN0eWxlcyBmb3IgdGhlXHJcbiAqIGNvbXBvbmVudC4gTXVzdCBpbXBsZW1lbnQgdGhlIElQb3B1cFN0eWxlcyBpbnRlcmZhY2UuXHJcbiAqIEB0eXBlUGFyYW0gVE9wdGlvbnMgVHlwZSBvZiB0aGUgb2JqZWN0IHVzZWQgdG8gc3BlY2lmeSBvcHRpb25zIGZvciB0aGUgY29tcG9uZW50LiBNdXN0XHJcbiAqIGltcGxlbWVudCB0aGUgSVBvcHVwT3B0aW9ucyBpbnRlcmZhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9wdXA8VFN0eWxlcyBleHRlbmRzIElQb3B1cFN0eWxlcyA9IElQb3B1cFN0eWxlcyxcclxuICAgICAgICAgICAgVE9wdGlvbnMgZXh0ZW5kcyBJUG9wdXBPcHRpb25zPFRTdHlsZXM+ID0gSVBvcHVwT3B0aW9uczxUU3R5bGVzPj5cclxuICAgICAgICAgICAgZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUG9wdXAgaXMgY29uc3RydWN0ZWQgYnkgc3BlY2lmeWluZyB0aGUgaW5pdGlhbCBjb250ZW50IGl0IHNob3VsZCBkaXNwbGF5IGFuZCB0aGUgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29udGVudD86IGFueSwgb3B0aW9ucz86IFRPcHRpb25zKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheXMgdGhlIHBvcHVwIGFzIGEgbW9kZWxlc3MgZGlhbG9nLiBUaGUgbWV0aG9kIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBwb3B1cFxyXG4gICAgICogaXMgYWxyZWFkeSBvcGVuIGFzIGEgbW9kYWwgcG9wdXAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kbGcuc2hvdygpO1xyXG5cclxuICAgICAgICB0aGlzLm9uT3BlbiggZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheXMgdGhlIHBvcHVwIGFzIGEgbW9kZWxlc3MgZGlhbG9nIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlXHJcbiAgICAgKiBwb3B1cCBpcyBjbG9zZWQuIFRoZSByZXNvbHZlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSBpcyB0aGUgdmFsdWUgcGFzc2VkIHRvIHRoZSBjbG9zZSgpXHJcbiAgICAgKiBtZXRob2QuIFRoZSBtZXRob2Qgd2lsbCByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIGlmIHRoZSBwb3B1cCBpcyBhbHJlYWR5IG9wZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TW9kYWwoKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoIG5ldyBFcnJvciggXCJQb3B1cCBhbHJlYWR5IG9wZW5cIikpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmRsZy5zaG93TW9kYWwoKTtcclxuXHJcbiAgICAgICAgLy8gbXVzdCBlc3RhYmxpc2ggbGlzdGVuZXIgb24gd2luZG93IGJlY2F1c2Ugb3RoZXJ3aXNlLCB0aGUgRXNjYXBlIGtleSBpcyBwcm9jZXNzZWQgYnlcclxuICAgICAgICAvLyB0aGUgc3lzdGVtIChjbG9zaW5nIHRoZSBwb3B1cCkgbmV2ZXIgYXJyaXZpbmcgYXQgdGhlIGRpYWxvZ1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZXNjYXBlUmV0dXJuVmFsdWUgaXMgZGVmaW5lZCBpbiB0aGUgb3B0aW9ucywgc3RhcnQgbGlzdGVuaW5nIHRvIHRoZSBrZXlib2FyZCBhbmRcclxuICAgICAgICAvLyBjbGljayBldmVudHMgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIHRoZSBwb3B1cCBiZWNhdXNlIHRoZXkgd2lsbCBhY3QgYXMgRXNjYXBlIHRvby5cclxuICAgICAgICBsZXQgZXNjYXBlUmV0VmFsID0gdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZTtcclxuICAgICAgICBpZiAoZXNjYXBlUmV0VmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuZGxnLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgdGhpcy5vbkRldGVjdENsaWNrT3V0c2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxQcm9taXNlID0gY3JlYXRlUHJvbWlzZUV4KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgcG9wdXAgYW5kIHBhc3NlcyBhIHZhbHVlIHRvIGJlIHVzZWQgYXMgYSByZXR1cm4gdmFsdWUuIEZvciB0aGUgbW9kYWwgcG9wdXBzLFxyXG4gICAgICogdGhpcyB2YWx1ZSB3aWxsIGJlIHRoZSByZXNvbHZlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgc2hvd01vZGFsKCkgbWV0aG9kLlxyXG4gICAgICogRm9yIG1vZGVsZXNzIHBvcHVwcywgdGhpcyB2YWx1ZSB3aWxsIGJlIGF2YWlsYWJsZSBhcyB0aGUgcmV0dXJuVmFsdWUgcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gcmV0VmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZSggcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZSlcclxuXHRcdHtcclxuICAgICAgICAgICAgLy8gaWYgZXNjYXBlUmV0dXJuVmFsdWUgd2FzIGRlZmluZWQgaW4gb3B0aW9ucywgd2UgbmVlZCB0byByZW1vdmUgdGhlIGNsaWNrIGhhbmRsZXJcclxuICAgICAgICAgICAgLy8gdGhhdCB3ZSBjcmVhdGVkIGluIHNob3dNb2RhbFxyXG4gICAgICAgICAgICBsZXQgZXNjYXBlUmV0VmFsID0gdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgaWYgKGVzY2FwZVJldFZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kbGcucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCB0aGlzLm9uRGV0ZWN0Q2xpY2tPdXRzaWRlKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2UucmVzb2x2ZSggcmV0dXJuVmFsdWUpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgdGhpcy5kbGcuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCByZXR1cm5WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEV2ZW50cyB0aGF0IGNhbiBiZSBmaXJlZCBieSB0aGUgUG9wdXAgY29tcG9uZW50ICovXHJcbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBNdWx0aUV2ZW50U2xvdDxJUG9wdXBFdmVudHM+IHsgcmV0dXJuIHRoaXMuX2V2ZW50czsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgb3Blbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRsZyAhPSBudWxsOyB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgaXNNb2RlbGVzcygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNPcGVuICYmICF0aGlzLm1vZGFsUHJvbWlzZTsgfVxyXG5cclxuXHQvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGFsLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzT3BlbiAmJiB0aGlzLm1vZGFsUHJvbWlzZSAhPSBudWxsOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBzZXQgYnkgdGhlIGNsb3NlKCkgbWV0aG9kLiBJZiB0aGUgcG9wdXAgaXMgb3BlbiwgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByZXR1cm5WYWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcmV0dXJuVmFsdWU7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgZmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNWaXNpYmxlOyB9XHJcblxyXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoIHY6IGJvb2xlYW4pIHsgdGhpcy5faXNWaXNpYmxlID0gdjsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgY29udGVudCBvZiB0aGUgcG9wdXAgd2l0aCB0aGUgZ2l2ZW4gb25lLlxyXG4gICAgICogQHBhcmFtIGNvbnRlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIFN0YXJ0cyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cyBhbmQgbW92ZXMgdGhlIHBvcHVwIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG4gICAgICogaW50ZW50ZWQgdG8gYmUgY2FsbGVkIGZyb20gYSBtb3VzZWRvd24gZXZlbnQgaGFuZGxlZCBlaXRoZXIgYnkgYSBkZXJpdmVkIGNsYXNzIG9yIGJ5XHJcbiAgICAgKiB0aGUgcG9wdXAgY2FsbGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnRNb3ZlKCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIC8vIHdlIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHByb3BhZ2F0aW9uIHNvIHRoYXQgbW91c2UgbW92ZW1lbnRzIGRvbid0IGNhdXNlXHJcblx0XHQvLyAvLyB0ZXN0IGluIHRoZSBwb3B1cCBhbmQgb24gdGhlIHBhZ2UgdG8gYmUgc2VsZWN0ZWQuXHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCByZWN0ID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR0aGlzLm1vdmVQb2ludE9mZnNldFggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5tb3ZlUG9pbnRPZmZzZXRZID0gY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArIFwicHhcIjtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb2ludGVybW92ZVwiLCB0aGlzLm9uUG9pbnRlck1vdmUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInBvaW50ZXJ1cFwiLCB0aGlzLm9uUG9pbnRlclVwKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBTdG9wcyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cy4gVGhpcyBtZXRob2QgYWxsb3dzIHByb2dyYW1tYXRpY2FsbHkgaW50ZXJydXB0XHJcbiAgICAgKiBkaWFsb2cgbW92aW5nIG9wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wTW92ZSgpXHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwb2ludGVydXBcIiwgdGhpcy5vblBvaW50ZXJVcCk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVBvaW50T2Zmc2V0WCA9IHRoaXMubW92ZVBvaW50T2Zmc2V0WSA9IDA7XHJcblx0fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuICAgICAqIHNvbWUgcGFydCBvZiB0aGUgZGlhbG9nIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgcmVtYWlucyB2aXNpYmxlIGluIG9yZGVyIHRvIHRoZSB1c2VyIHRvIGJlXHJcbiAgICAgKiBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBtb3ZlVG8oIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubW92ZSggbmV3WCwgbmV3WSk7XHJcbiAgICAgICAgdGhpcy5kbGcuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsTW91bnQoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJwb3B1cFwiLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsVW5tb3VudCgpXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwicG9wdXBcIik7XHJcblxyXG4gICAgICAgIC8vIGRlYWN0aXZhdGUgc3R5bGVzXHJcbiAgICAgICAgY3NzLmRlYWN0aXZhdGUoIHRoaXMuZGVmYXVsdFN0eWxlcyk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3R5bGVzID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25hbFN0eWxlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNzcy5kZWFjdGl2YXRlKCB0aGlzLm9wdGlvbmFsU3R5bGVzKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhbiB1cFxyXG4gICAgICAgIHRoaXMuZGxnID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZW5kZXIgbWV0aG9kIHNpbXBseSByZXR1cm5zIHRoZSBjdXJyZW50IGNvbnRlbnQgYnV0IGl0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlc1xyXG4gICAgICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgIHByaXZhdGUgY3JlYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBvYnRhaW4gdGhlIGFuY2hvciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbmNob3JFbGVtZW50ID8gdGhpcy5vcHRpb25zLmFuY2hvckVsZW1lbnQgOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSBvdXIgZGVmYXVsdCBzdHlsZXMgYW5kIGlmIHN0eWxlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLCB0aGVuIGFjdGl2YXRlXHJcbiAgICAgICAgLy8gdGhlbSB0b28uXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3R5bGVzID0gY3NzLmFjdGl2YXRlKCB0aGlzLmdldERlZmF1bHRTdHlsZXMoKSkgYXMgVFN0eWxlcztcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdHlsZXMpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXMgPSBjc3MuYWN0aXZhdGUoIHRoaXMub3B0aW9ucy5zdHlsZXMpIGFzIFRTdHlsZXM7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBkaWFsb2cgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBET01cclxuICAgICAgICB0aGlzLmRsZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIHRoaXMuZGxnLmNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dTdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2csIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2cpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5kbGcpO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gcG9zaXRpb25pbmcgc3R5bGVzIGRpcmN0bHkgdG8gdGhlIGRpYWxvZyBlbGVtZW50LiBJZiB4IGFuZC9vciB5IGFyZSB1bmRlZmluZWQsXHJcbiAgICAgICAgLy8gd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5IGFuZC9vciB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgbGV0IHN0eWxlOiBjc3MuU3R5bGVzZXQgPSB7IHBvc2l0aW9uOiBcImZpeGVkXCIgfTtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMuaW5pdGlhbFggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlLnJpZ2h0ID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbFg7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zIHx8IHRoaXMub3B0aW9ucy5pbml0aWFsWSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzdHlsZS50b3AgPSBzdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3R5bGUudG9wID0gdGhpcy5vcHRpb25zLmluaXRpYWxZO1xyXG5cclxuICAgICAgICBjc3Muc2V0RWxlbWVudFN0eWxlKCB0aGlzLmRsZywgc3R5bGUsIGNzcy5TY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG5cclxuICAgICAgICAvLyBtb3VudCB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgbWltLm1vdW50KCB0aGlzLCB0aGlzLmRsZylcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXN0cm95cyB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdW5tb3VudCB0aGUgY29udGVudFxyXG4gICAgICAgIG1pbS51bm1vdW50KCB0aGlzLmRsZyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmRsZy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcbiAgICAgKiBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG4gICAgICogYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcbiAgICAgKi9cclxuXHRwcml2YXRlIG1vdmUoIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmIChuZXdYIDwgMClcclxuXHRcdFx0bmV3WCA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdYICsgMzAgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0bmV3WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzA7XHJcblxyXG5cdFx0aWYgKG5ld1kgPCAwKVxyXG5cdFx0XHRuZXdZID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1kgKyAzMCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuXHRcdFx0bmV3WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gbmV3WCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IG5ld1kgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgRXNjYXBlIGtleSBpZiB0aGUgZXNjYXBlUmV0dXJuVmFsdWUgb3B0aW9uIGlzIHVuZGVmaW5lZDsgb3RoZXJ3aXNlLFxyXG4gICAgICAgICAgICAvLyB3ZSBjbG9zZSB0aGUgZGlhbG9nIHdpdGggaXRzIHZhbHVlXHJcbiAgICAgICAgICAgIGxldCByZXRWYWwgPSB0aGlzLm9wdGlvbnM/LmVzY2FwZVJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICBpZiAocmV0VmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCByZXRWYWwpO1xyXG4gICAgICAgIH1cclxuXHR9O1xyXG5cclxuICAgIC8vIERldGVjdHMgd2hldGhlciBhIGNsaWNrIG9jY3VycmVkIG91dHNpZGUgb2YgdGhlIHBvcHVwIGFyZWEuIFRoaXMgaGFuZGxlciBpcyBpbnZva2VkIG9ubHkgZm9yXHJcbiAgICAvLyBtb2RhbCBwb3B1cHMgYW5kIG9ubHkgaWYgdGhlIGVzY2FwZVJldHVyblZhbHVlIGlzIGRlZmluZWQgaW4gdGhlIG9wdGlvbnMuXHJcbiAgICBwcml2YXRlIG9uRGV0ZWN0Q2xpY2tPdXRzaWRlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xpY2tpbmcgb24gdGhlIGJhY2tkcm9wIG9mIHRoZSBtb2RhbCBwb3B1cCBoYXMgdGhlIHRhcmdldCBwcm9wZXJ0eSBvZiB0aGUgZXZlbnRcclxuICAgICAgICAvLyBwb2ludGluZyB0byB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGl0c2VsZi4gSWYgaXQgaXMgbm90IHRoaXMgZWxlbWVudCwgdGhlbiB0aGUgY2xpY2tcclxuICAgICAgICAvLyB3YXMgb24gc29tZSBlbGVtZW50IHdpdGhpbiB0aGUgcG9wdXAuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmRsZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBqdXN0IGluIGNhc2UgdGhlIGNsaWNrIGhhcHBlbmQgb24gdGhlIGA8ZGlhbG9nPmAgZWxlbWVudCBpdHNlbGYgYnV0IHdpdGhpbiB0aGUgYm91bmRzXHJcbiAgICAgICAgLy8gb2YgdGhlIHBvcHVwIChlLmcuIGlmIHBvcHVwIGlzIHN0eWxlZWQgd2l0aCBwYWRkaW5ncyksIGNoZWNrIHRoYXQgY29vcmRpbmF0ZXMgYXJlXHJcbiAgICAgICAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wdXAgYXJlYS5cclxuICAgICAgICBsZXQgcmMgPSB0aGlzLmRsZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAoZS5jbGllbnRYIDwgcmMubGVmdCB8fCBlLmNsaWVudFggPiByYy5yaWdodCB8fCBlLmNsaWVudFkgPCByYy50b3AgfHwgZS5jbGllbnRZID4gcmMuYm90dG9tKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0aGlzLm9wdGlvbnM/LmVzY2FwZVJldHVyblZhbHVlKTtcclxuICAgIH1cclxuXHJcblx0cHJpdmF0ZSBvblBvaW50ZXJNb3ZlID0gKGU6IFBvaW50ZXJFdmVudCkgPT5cclxuXHR7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyB3ZSBvbmx5IG1vdmUgb24gdGhlIHByaW1hcnkgYnV0dG9uXHJcbiAgICAgICAgaWYgKCF0aGlzLmRsZyB8fCAhZS5pc1ByaW1hcnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BNb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5tb3ZlKCBlLmNsaWVudFggLSB0aGlzLm1vdmVQb2ludE9mZnNldFgsIGUuY2xpZW50WSAtIHRoaXMubW92ZVBvaW50T2Zmc2V0WSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBvblBvaW50ZXJVcCA9IChlOiBQb2ludGVyRXZlbnQpID0+XHJcblx0e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnN0b3BNb3ZlKCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG9yIGNsYXNzXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0RGVmYXVsdFN0eWxlcygpOiBUU3R5bGVzIHwgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxUU3R5bGVzPlxyXG5cdHtcclxuICAgICAgICByZXR1cm4gRGVmYXVsdFBvcHVwU3R5bGVzIGFzIGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz47XHJcblx0fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBwb3B1cCBvcGVucy4gSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIGl0IHRoZXlcclxuICAgICAqIG11c3QgY2FsbCBzdXBlci5vbk9wZW4oKS5cclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBvbk9wZW4oIGlzTW9kYWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIG5vdGlmeSBhbnkgbGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9wZW4uZmlyZSggaXNNb2RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHBvcHVwIGlzIGJlaW5nIGNsb3NlZC4gSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIGl0IHRoZXlcclxuICAgICAqIG11c3QgY2FsbCBzdXBlci5vbkNsb3NlKCkuXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgb25DbG9zZSggcmV0VmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIG5vdGlmeSBhbnkgbGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmNsb3NlLmZpcmUoIHJldFZhbCk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQ29udGVudCB0byBkaXNwbGF5XHJcbiAgICBAdHJpZ2dlcigwKVxyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnQ6IGFueTtcclxuXHJcbiAgICAvLyBPcHRpb25zXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogVE9wdGlvbnM7XHJcblxyXG4gICAgLy8gQWN0aXZhdGVkIGRlZmF1bHQgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFN0eWxlczogVFN0eWxlcztcclxuXHJcbiAgICAvLyBBY3RpdmF0ZWQgb3B0aW9uYWwgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uYWxTdHlsZXM6IFRTdHlsZXM7XHJcblxyXG4gICAgLy8gQW5jaG9yIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gY3JlYXRlIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBhbmNob3JFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBEaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuICAgIC8vIFByb21pc2UgdGhhdCBpcyBjcmVhdGVkIGZvciBtb2RhbCBkaWFsb2dzIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBkaWFsb2cgY2xvc2VzLlxyXG4gICAgcHJpdmF0ZSBtb2RhbFByb21pc2U6IFByb21pc2VFeDxhbnk+O1xyXG5cclxuICAgIC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZVxyXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIFZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UgbWV0aG9kLlxyXG4gICAgcHJpdmF0ZSBfcmV0dXJuVmFsdWU6IGFueTtcclxuXHJcbiAgICAvLyBFdmVudHMgdGhhdCBjYW4gYmUgZmlyZWQgYnkgdGhlIFBvcHVwIG9iamVjdHMuXHJcbiAgICBwcml2YXRlIF9ldmVudHMgPSBjcmVhdGVNdWx0aUV2ZW50U2xvdDxJUG9wdXBFdmVudHM+KCk7XHJcblxyXG5cdC8vIE9mZnNldHMgb2YgdGhlIHBvaW50IHdoZXJlIHRoZSBtb3ZlIHN0YXJ0ZWQgZnJvbSB0aGUgZGlhbG9nIHRvcC1sZWZ0IGNvcm5lci4gV2UgdXNlIHRoZW1cclxuXHQvLyB0byBjYWxjdWxhdGUgdGhlIGRpYWxvZyB0b3AtbGVmdCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgbW91c2UgY29vcmRpbmF0ZXMgd2hpbGUgbW92ZSBpc1xyXG5cdC8vIGluIHByb2dyZXNzLlxyXG5cdHByaXZhdGUgbW92ZVBvaW50T2Zmc2V0WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW92ZVBvaW50T2Zmc2V0WTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEaWFsb2dcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaWFsb2dCdXR0b24gaW50ZXJmYWNlIGRlc2NyaWJlcyBhIHNpbmdsZSBidXR0b24gaW4gdGhlIGRpYWxvZydzIGJ1dHRvbiBiYXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dCdXR0b25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1dHRvbi4gVGhpcyBJRCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLCB3aGljaCBpcyBjYWxsZWQgd2hlblxyXG4gICAgICogdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpZDogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2ssIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gSWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuICAgICAqIHJldHVyblZhbHVlIHByb3BlcnR5IG11c3QgYmUgZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2FsbGJhY2s/OiAoaWQ6IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB2YWx1ZSB3aXRoIHdoaWNoIHRoZSBkaWFsb2cgaXMgY2xvc2VkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBUaGlzIHByb3BlcnR5IGlzIHVzZWRcclxuICAgICAqIChhbmQgbXVzdCBiZSBkZWZpbmVkKSBvbmx5IGlmIHRoZSBjYWxsYmFjayBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJldHVyblZhbHVlPzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNvbnRlbnQ/OiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgYnV0dG9uIGlzIGluaXRpYWxseSBkaXNhYmxlZC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2U7IHRoYXRcclxuICAgICAqIGlzLCB0aGUgYnV0dG9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEtleWJvYXJkIGtleSBvciBjb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBrZXljb2RlPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwIGludGVyZmFjZSByZXByZXNlbnRzIGEgcG9wdXAgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY29udGVudC4gVGhpcyBpbnRlcmZhY2VcclxuICogaXMgcHVibGlzaGVkIGFzIGEgc2VydmljZSBhbmQgY2FuIGJlIHVzZWQgYnkgdGhlIGNvbnRlbnQgY29tcG9uZW50cyB0byBjbG9zZSB0aGUgcG9wdXAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2cgZXh0ZW5kcyBJUG9wdXBcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgYnV0dG9uIHRvIHRoZSBidXR0b24gYmFyXHJcbiAgICAgKi9cclxuICAgIGFkZEJ1dHRvbiggYnRuOiBJRGlhbG9nQnV0dG9uKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBidXR0b25zIGluIHRoZSBidXR0b24gYmFyXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGJ1dHRvbkNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlhbG9nU3R5bGVzIGludGVyZmFjZSBkZWZpbmVzIHN0eWxlcyB1c2VkIGJ5IHRoZSBEaWFsb2cgY2xhc3MgdG8gY3JlYXRlIGRpZmZlcmVudCBlbGVtZW50c1xyXG4gKiBvZiB0aGUgZGlhbG9nLiBUaGUgaW1wbGVtZW50YXRpb25zIHNob3VsZCBwcm92aWRlIGNsYXNzIHJ1bGVzIGZvciB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAqIC0gZGlhbG9nQ2FwdGlvblxyXG4gKiAtIGRpYWxvZ0JvZHlcclxuICogLSBkaWFsb2dCdXR0b25CYXJcclxuICogLSBkaWFsb2dCdXR0b25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1N0eWxlcyBleHRlbmRzIElQb3B1cFN0eWxlc1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgY2FwdGlvbiBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dDYXB0aW9uPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJvZHkgc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQm9keT86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b24gYmFyIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbkJhcj86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b25zLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCdXR0b24/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERlZmF1bHREaWFsb2dTdHlsZXMgZXh0ZW5kcyBEZWZhdWx0UG9wdXBTdHlsZXMgaW1wbGVtZW50cyBJRGlhbG9nU3R5bGVzXHJcbntcclxuICAgIGRpYWxvZ0NhcHRpb24gPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZG9kZ2VyYmx1ZVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiB7IHg6IDAsIHk6IDIsIGJsdXI6IDIsIGNvbG9yOiBcImxpZ2h0Z3JleVwiIH0sXHJcbiAgICAgICAgcGFkZGluZzogMC40LFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCb2R5ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgcGFkZGluZzogMC43LFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCdXR0b25CYXIgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmV5XCIsXHJcbiAgICAgICAgcGFkZGluZzogWzAuNywgMS4wMV0sXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCdXR0b24gPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBwYWRkaW5nOiAwLjMsXHJcbiAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDEuMDEsXHJcbiAgICAgICAgbWluV2lkdGg6IDUuNSxcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmMmYyZjIsXHJcblx0XHRcIjpob3ZlclwiOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogMHhlMmUyZTIsXHJcblx0XHR9LFxyXG5cdFx0XCI6Zm9jdXNcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4ZTJlMmUyLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBbMSwgXCJzb2xpZFwiLCAweGEyYTJhMl0sXHJcblx0XHR9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURpYWxvZ09wdGlvbnMgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9wdGlvbnMgdGhhdCBjb2ZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgdGhlIERpYWxvZ1xyXG4gKiBvYmplY3QuIFRoZXkgYXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IgdG8gdGhlIFtbRGlhbG9nXV0gY2xhc3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ09wdGlvbnM8VFN0eWxlcyBleHRlbmRzIElEaWFsb2dTdHlsZXMgPSBJRGlhbG9nU3R5bGVzPiBleHRlbmRzIElQb3B1cE9wdGlvbnM8VFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGNhcHRpb24gc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQ2FwdGlvblN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYm9keSBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCb2R5U3R5bGVDbGFzcz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b24gYmFyIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbkJhclN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYnV0dG9ucy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQnV0dG9uU3R5bGVDbGFzcz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllciBvZiB0aGUgZGVmYXVsdCBidXR0b24sIHdoaWNoIHdpbGwgaGF2ZSBmb2N1cyB3aGVuIHRoZSBkaWFsb2cgYXBwZWFycy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGVmYXVsdEJ1dHRvbj86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERpYWxvZyBjbGFzcyBpcyBhIHBvcHVwIHRoYXQgZGl2aWRlcyB0aGUgcG9wdXAgYXJlYSBpbnRvIHRocmVlIHNlY3Rpb25zOiBjYXB0aW9uLCBib2R5IGFuZFxyXG4gKiBidXR0b24gYmFyLiBUaGUgY2FwdGlvbiBhcmVhIGNhbiBiZSB1c2VkIHRvIG1vdmUgdGhlIGRpYWxvZyBhcm91bmQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGlhbG9nPFRTdHlsZXMgZXh0ZW5kcyBJRGlhbG9nU3R5bGVzID0gSURpYWxvZ1N0eWxlcyxcclxuICAgICAgICAgICAgVE9wdGlvbnMgZXh0ZW5kcyBJRGlhbG9nT3B0aW9uczxUU3R5bGVzPiA9IElEaWFsb2dPcHRpb25zPFRTdHlsZXM+PlxyXG4gICAgICAgICAgICBleHRlbmRzIFBvcHVwPFRTdHlsZXMsVE9wdGlvbnM+IGltcGxlbWVudHMgSURpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggYm9keUNvbnRlbnQ/OiBhbnksIGNhcHRpb25Db250ZW50PzogYW55LCBvcHRpb25zPzogVE9wdGlvbnMsIC4uLmJ1dHRvbnM6IElEaWFsb2dCdXR0b25bXSlcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSByZXVzZSB0aGUgUG9wdXAncyBjb250ZW50IHByb3BlcnR5IGZvciBkaWFsb2cncyBib2R5XHJcbiAgICAgICAgc3VwZXIoIGJvZHlDb250ZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGVudCA9IGNhcHRpb25Db250ZW50O1xyXG5cclxuICAgICAgICBmb3IoIGxldCBidG4gb2YgYnV0dG9ucylcclxuICAgICAgICAgICAgdGhpcy5hZGRCdXR0b24oIGJ0bik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBidXR0b24gdG8gdGhlIGJ1dHRvbiBiYXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldENhcHRpb24oIGNhcHRpb25Db250ZW50OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGVudCA9IGNhcHRpb25Db250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkQnV0dG9uKCBidG46IElEaWFsb2dCdXR0b24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZm8gPSBuZXcgRGlhbG9nQnV0dG9uSW5mbyggYnRuLCB0aGlzLm5leHRCdXR0b25UYWJJbmRleCsrKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuc2V0KCBidG4uaWQsIGluZm8pO1xyXG4gICAgICAgIGlmIChidG4ua2V5Y29kZSlcclxuICAgICAgICAgICAgdGhpcy5idXR0b25LZXlzLnNldCggYnRuLmtleWNvZGUsIGluZm8pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnV0dG9ucyBpbiB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJ1dHRvbkNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmJ1dHRvbnMuc2l6ZTsgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFRTdHlsZXMgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBEZWZhdWx0RGlhbG9nU3R5bGVzIGFzIGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz47XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsTW91bnQoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIG9idGFpbiBjbGFzcyBuYW1lcyBmb3Igb3VyIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0NhcHRpb25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dDYXB0aW9uLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQ2FwdGlvbik7XHJcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0JvZHlTdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCb2R5LCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQm9keSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25CYXJDbGFzc05hbWUgPSBjc3MuY2hvb3NlQ2xhc3MoIHRoaXMub3B0aW9ucz8uZGlhbG9nQnV0dG9uQmFyU3R5bGVDbGFzcyxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcz8uZGlhbG9nQnV0dG9uQmFyLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQnV0dG9uQmFyKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dCdXR0b25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCdXR0b24sIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2dCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcImRpYWxvZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2QsIHRoZXkgbXVzdCBjYWxsIHN1cGVyLmRpZE1vdW50KClcclxuICAgICAqL1xyXG5cdHB1YmxpYyBkaWRNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnM/LmRlZmF1bHRCdXR0b24gIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5idXR0b25zLmdldCggdGhpcy5vcHRpb25zPy5kZWZhdWx0QnV0dG9uKTtcclxuICAgICAgICAgICAgaWYgKGluZm8pXHJcbiAgICAgICAgICAgICAgICBpbmZvLmVsbS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2QsIHRoZXkgbXVzdCBjYWxsIHN1cGVyLndpbGxVbm1vdW50KClcclxuICAgICAqL1xyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJkaWFsb2dcIik7XHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5ZG93bj17dGhpcy5vbkJ1dHRvbktleURvd259PlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXB0aW9ufVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJCb2R5fVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJCdXR0b25zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJDYXB0aW9uKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBoYXZlIHRvIHNwZWNpZnkgdG91Y2gtYWN0aW9uIFwibm9uZVwiIC0gb3RoZXJ3aXNlLCBwb2ludGVyIGV2ZW50cyBhcmUgY2FuY2VsZWQgYnkgdGhlIGJyb3dzZXJcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5jYXB0aW9uQ2xhc3NOYW1lfSBwb2ludGVyZG93bj17dGhpcy5vbkNhcHRpb25Qb2ludGVyRG93bn0gc3R5bGU9e3t0b3VjaEFjdGlvbjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAge3RoaXMuY2FwdGlvbkNvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckJvZHkoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLmJvZHlDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICB7dGhpcy5jb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJCdXR0b25zKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5idXR0b25CYXJDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICB7QXJyYXkuZnJvbSggdGhpcy5idXR0b25zLnZhbHVlcygpKS5tYXAoIGluZm8gPT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e2luZm8uYnRuLmlkfSByZWY9e2luZm8uZWxtfSBjbGFzcz17dGhpcy5idXR0b25DbGFzc05hbWV9IGNsaWNrPXsoKSA9PiB0aGlzLm9uQnV0dG9uQ2xpY2tlZChpbmZvKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZm8uYnRuLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgb25DYXB0aW9uUG9pbnRlckRvd24oIGU6IFBvaW50ZXJFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBpbml0aWF0ZSBtb3ZlIG9ubHkgb24gcHJpbWFyeSBidXR0b24gZG93blxyXG4gICAgICAgIGlmICghZS5pc1ByaW1hcnkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRNb3ZlKCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJ1dHRvbkNsaWNrZWQoIGluZm86IERpYWxvZ0J1dHRvbkluZm8pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGluZm8uYnRuLmNhbGxiYWNrKVxyXG4gICAgICAgICAgICBpbmZvLmJ0bi5jYWxsYmFjayggaW5mby5idG4uaWQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSggaW5mby5idG4ucmV0dXJuVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdXR0b25LZXlEb3duKCBlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IGJ1dHRvbiBpcyBhc3NvY2lhdGVkIHdpdGggZWl0aGVyIHRoZSBrZXkgb3IgdGhlIGNvZGVcclxuICAgICAgICBsZXQgaW5mbyA9IHRoaXMuYnV0dG9uS2V5cy5nZXQoIGUua2V5KTtcclxuICAgICAgICBpZiAoIWluZm8pXHJcbiAgICAgICAgICAgIGluZm8gPSB0aGlzLmJ1dHRvbktleXMuZ2V0KCBlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoaW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrZWQoIGluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlclxyXG4gICAgcHJpdmF0ZSBjYXB0aW9uQ29udGVudDogYW55O1xyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlcigzKVxyXG4gICAgcHJpdmF0ZSBidXR0b25zID0gbmV3IE1hcDxhbnksIERpYWxvZ0J1dHRvbkluZm8+KCk7XHJcblxyXG4gICAgLy8gTWFwIG9mIGtleWJvYXJkIGtleSBvciBjb2RlIHZhbHVlcyB0byB0aGUgYnV0dG9uIG9iamVjdHMgYXNzb2NpYXRlZCB3aXRoIHRoZW1cclxuICAgIHByaXZhdGUgYnV0dG9uS2V5cyA9IG5ldyBNYXA8c3RyaW5nLCBEaWFsb2dCdXR0b25JbmZvPigpO1xyXG5cclxuICAgIC8vIFRhYiBpbmRleCB2YWx1ZSB0byB1c2UgZm9yIHRoZSBuZXh0IGJ1dHRvbiB0byBiZSBhZGRlZFxyXG4gICAgcHJpdmF0ZSBuZXh0QnV0dG9uVGFiSW5kZXggPSAxMDAxO1xyXG5cclxuICAgIC8vIENsYXNzIG5hbWUgdG8gdXNlIGZvciB0aGUgY2FwdGlvblxyXG4gICAgcHJpdmF0ZSBjYXB0aW9uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBib2R5XHJcbiAgICBwcml2YXRlIGJvZHlDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbiBiYXJcclxuICAgIHByaXZhdGUgYnV0dG9uQmFyQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBidXR0b25zXHJcbiAgICBwcml2YXRlIGJ1dHRvbkNsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGlhbG9nQnV0dG9uSW5mbyBjbGFzcyBjb250YWlucyBjdXJyZW50IGluZm9ybXRhaW9uIGFib3V0IGEgc2luZ2xlIGJ1dHRvbiBpbiB0aGUgZGlhbG9nJ3NcclxuICogYnV0dG9uIGJhci5cclxuICovXHJcbmNsYXNzIERpYWxvZ0J1dHRvbkluZm9cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGJ0bjogSURpYWxvZ0J1dHRvbiwgdGFiSW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0biA9IGJ0bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gYnRuLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSB0YWJJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSW5wdXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGJ1dHRvbi4gKi9cclxuICAgIGJ0bjogSURpYWxvZ0J1dHRvbjtcclxuXHJcbiAgICAvKiogUmVmZXJuY2UgdG8gdGhlIGJ1dHRvbiBlbGVtZW50LiAqL1xyXG4gICAgQG1pbS5yZWYgZWxtOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAvKiogVGFiIGluZGV4IHRvIHVzZSBmb3IgdGhlIGJ1dHRvbiB0aGUgYnV0dG9uLiAqL1xyXG4gICAgdGFiSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICAvKiogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBjdXJyZW50bHkgZGlzYWJsZWQuICovXHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWVzc2FnZSBib3hcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBkZWZpbmVzIGNvbnN0YW50cyB0byBpbmRpY2F0ZSBzdGFuZGFyZCBidXR0b25zIHVzZWQgaW4gZGlhbG9ncy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEJ1dHRvblxyXG57XHJcblx0Tm9uZSA9IDB4MCxcclxuXHRPSyA9IDB4MSxcclxuXHRDYW5jZWwgPSAweDIsXHJcblx0WWVzID0gMHg0LFxyXG5cdE5vID0gMHg4LFxyXG5cdENsb3NlID0gMHgxMCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgYnV0dG9ucyBhbmQgYnV0dG9uIGNvbWJpbmF0aW9ucyBmb3JcclxuICogbWVzc2FnZSBib3hlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEJ1dHRvbkJhclxyXG57XHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgZGlzcGxheSBubyBidXR0b25zICovXHJcblx0Tm9uZSA9IE1zZ0JveEJ1dHRvbi5Ob25lLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIENsb3NlIGJ1dHRvbiAqL1xyXG5cdENsb3NlID0gTXNnQm94QnV0dG9uLkNsb3NlLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIE9LIGJ1dHRvbiAqL1xyXG5cdE9LID0gTXNnQm94QnV0dG9uLk9LLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIE9LIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdE9rQ2FuY2VsID0gTXNnQm94QnV0dG9uLk9LICsgTXNnQm94QnV0dG9uLkNhbmNlbCxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBZZXMgYW5kIE5vIGJ1dHRvbnMgKi9cclxuXHRZZXNObyA9IE1zZ0JveEJ1dHRvbi5ZZXMgKyBNc2dCb3hCdXR0b24uTm8sXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzLCBObyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRZZXNOb0NhbmNlbCA9IE1zZ0JveEJ1dHRvbi5ZZXMgKyBNc2dCb3hCdXR0b24uTm8gKyBNc2dCb3hCdXR0b24uQ2FuY2VsLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94SWNvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgaWNvbnMgZm9yIG1lc3NhZ2UgYm94LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gTXNnQm94SWNvblxyXG57XHJcblx0Tm9uZSA9IDAsXHJcblx0SW5mbyxcclxuXHRXYXJuaW5nLFxyXG5cdEVycm9yLFxyXG5cdFF1ZXN0aW9uLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHN0eWxlcyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgUG9wdXAgaWYgc3R5bGVzIGFyZSBub3Qgc3BlY2lmaWVkIHVzaW5nIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94U3R5bGVzIGV4dGVuZHMgRGVmYXVsdERpYWxvZ1N0eWxlc1xyXG57XHJcbiAgICBjb250YWluZXIgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9KVxyXG5cclxuICAgIGljb24gPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjNlbVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgIH0pXHJcblxyXG4gICAgdGV4dCA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNSxcclxuICAgICAgICBtaW5XaWR0aDogXCIxNWVtXCIsXHJcbiAgICAgICAgbWF4V2lkdGg6IFwiNjBlbVwiLFxyXG4gICAgICAgIG1pbkhlaWdodDogXCIyZW1cIixcclxuICAgICAgICBtYXhIZWlnaHQ6IFwiMjBlbVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nPE1zZ0JveFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5cyBtb2RhbCBtZXNzYWdlIGJveCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGEgcHJvbWlzZSwgd2hpY2ggaXNcclxuICAgICAqIHJlc29sdmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIG9uZSBvZiB0aGUgYnV0dG9ucy4gVGhlIGlkZW50aWZpZXIgb2YgdGhlIGJ1dHRvbiBpcyB1c2VkXHJcbiAgICAgKiBhcyB0aGUgcHJvbWlzZSdzIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCB0byBiZSB1c2VkIGluIHRoZSBtZXNzYWdlIGJveCdzIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBtZXNzYWdlIGJveCdzIGNhcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gYnV0dG9ucyBJZGVudGlmaWVyIG9mIGEgYnV0dG9uIG90IGJ1dHRvbiBjb21iaW5hdGlvbiB0byBiZSBkaXNwbGF5ZWQuXHJcbiAgICAgKiBAcGFyYW0gaWNvbiBPcHRpb25hbCBpZGVudGlmaWVyIG9mIHRoZSBpY29uIHRvIGJlIGRpc3BsYXllZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBidXR0b24gY2xpY2tlZCBieSB0aGUgdXNlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzaG93TW9kYWwoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogTXNnQm94QnV0dG9uQmFyID0gTXNnQm94QnV0dG9uQmFyLk9LLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEJ1dHRvbj86IE1zZ0JveEJ1dHRvbik6IFByb21pc2U8TXNnQm94QnV0dG9uPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uLCBkZWZhdWx0QnV0dG9uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBhbnksIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25CYXIgPSBNc2dCb3hCdXR0b25CYXIuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lLCBkZWZhdWx0QnV0dG9uPzogTXNnQm94QnV0dG9uKVxyXG5cdHtcclxuICAgICAgICBzdXBlciggbWVzc2FnZSwgdGl0bGUsIHtcclxuICAgICAgICAgICAgc3R5bGVzOiBNc2dCb3hTdHlsZXMsXHJcbiAgICAgICAgICAgIGVzY2FwZVJldHVyblZhbHVlOiBidXR0b25zID09PSBNc2dCb3hCdXR0b25CYXIuTm9uZSA/IE1zZ0JveEJ1dHRvbi5DbG9zZSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZGVmYXVsdEJ1dHRvblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCBidXR0b25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlckJvZHkoKTogYW55XHJcblx0e1xyXG4gICAgICAgIGxldCB7IGNoYXIsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblxyXG4gICAgICAgIC8vIHdlIGFyZSB1c2luZyB0aGlzLm9wdGlvbmFsU3R5bGVzIGJlY2F1c2Ugd2UgZXhwbGljaXRseSBwYXNzIG91ciBzdHlsZXMgaW4gdGhlIG9wdGlvbnNcclxuICAgICAgICAvLyBwYXJhbWV0ZXIgb2YgdGhlIERpYWxvZyBjb25zdHJ1Y3Rvci5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtjaGFyICYmIDxzcGFuIGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLmljb259IHN0eWxlPXt7Y29sb3J9fT57Y2hhcn08L3NwYW4+fVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy50ZXh0fT57dGhpcy5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IE1zZ0JveFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8TXNnQm94U3R5bGVzPlxyXG5cdHtcclxuICAgICAgICByZXR1cm4gTXNnQm94U3R5bGVzO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbnMoIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbkJhcik6IHZvaWRcclxuXHR7XHJcblx0XHRzd2l0Y2goIGJ1dHRvbnMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9uQmFyLkNsb3NlOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNsb3NlXCIsIE1zZ0JveEJ1dHRvbi5DbG9zZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5PSzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBNc2dCb3hCdXR0b24uT0spO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25CYXIuT2tDYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgTXNnQm94QnV0dG9uLk9LKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgTXNnQm94QnV0dG9uLkNhbmNlbCwgXCJFc2NhcGVcIik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5ZZXNObzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgTXNnQm94QnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgTXNnQm94QnV0dG9uLk5vKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9uQmFyLlllc05vQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBNc2dCb3hCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBNc2dCb3hCdXR0b24uTm8pO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBNc2dCb3hCdXR0b24uQ2FuY2VsLCBcIkVzY2FwZVwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgc3ltYm9sIGFuZCBjb2xvciBmb3IgZGlzcGxheWluZyB0aGUgaWNvbi5cclxuXHRwcml2YXRlIGdldEljb25DbGFzc0FuZENvbG9yKCk6IHsgY2hhcj86IHN0cmluZywgY29sb3I/OiBjc3MuQ3NzQ29sb3IgfVxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uSW5mbzogcmV0dXJuIHsgY2hhcjogXCJpXCIsIGNvbG9yOiBcImJsdWVcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uUXVlc3Rpb246IHJldHVybiB7IGNoYXI6IFwiP1wiLCBjb2xvcjogXCJncmVlblwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5XYXJuaW5nOiByZXR1cm4geyBjaGFyOiBcIiFcIiwgY29sb3I6IFwib3JhbmdlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkVycm9yOiByZXR1cm4geyBjaGFyOiBcInhcIiwgY29sb3I6IFwicmVkXCIgfTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9uKCB0ZXh0OiBzdHJpbmcsIGlkOiBNc2dCb3hCdXR0b24sIGtleWNvZGU/OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hZGRCdXR0b24oeyBpZCwgY29udGVudDogdGV4dCwgcmV0dXJuVmFsdWU6IGlkLCBrZXljb2RlIH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJY29uXHJcblx0cHJpdmF0ZSBpY29uOiBNc2dCb3hJY29uO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvZ3Jlc3MgYm94XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQm94U3R5bGVzIGV4dGVuZHMgRGVmYXVsdERpYWxvZ1N0eWxlc1xyXG57XHJcbiAgICBjb250YWluZXIgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICB3aWR0aDogXCIzMHJlbVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1cmVtXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2dyZXNzID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgd2lkdGg6IFwiMjByZW1cIixcclxuICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxcmVtXCJcclxuICAgIH0pXHJcblxyXG4gICAgdGV4dCA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHBhcmVudD86IGNzcy5TdHlsZURlZmluaXRpb24pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIocGFyZW50KTtcclxuICAgICAgICB0aGlzLmRpYWxvZ0J1dHRvbkJhci5zZXRQcm9wKCBcImp1c3RpZnlDb250ZW50XCIsIFwiY2VudGVyXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQcm9ncmVzc0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgcHJvZ3Jlc3MgaW5kaWNhdG9yLCBhIHRleHQgYW5kIGFuIG9wdGlvbmFsXHJcbiAqIENhbmNlbCBidXR0b24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCb3ggZXh0ZW5kcyBEaWFsb2c8UHJvZ3Jlc3NCb3hTdHlsZXM+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheXMgdGhlIG1vZGFsIHByb2dyZXNzIGJveCB3aXRoIHRoZSBnaXZlbiBjb250ZW50IGFuZCB0aXRsZSwgd2hpY2ggaXMgZGlzcGxheWVkIHVudGlsXHJcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGUgZGVsYXlNaWxsaXNlY29uZHMgcGFyYW1ldGVyIGNvbnRyb2xzIHdoZXRoZXIgdGhlIHByb2dyZXNzXHJcbiAgICAgKiBib3ggaXMgZGlzcGxheWVkIGltbWVkaWF0ZWx5IG9yIGlzIGRlbGF5ZWQuIElmIHRoZSBpbnB1dCBwcm9taXNlIGlzIHNldHRsZWQgYmVmb3JlIHRoZVxyXG4gICAgICogZGVsYXkgZXhwaXJlcywgdGhlIHByb2dyZXNzIGJveCBpcyBub3QgZGlzcGxheWVkIGF0IGFsbC5cclxuICAgICAqIEBwYXJhbSBwcm9taXNlIFByb21pc2UgdG8gbW9uaXRvciAtIHRoZSBwcm9ncmVzcyBib3ggaXMgZGlzcGxheWVkIHVudGlsIHRoaXMgcHJvbWlzIGlzIHNldHRsZWQuXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIGJlIHVzZWQgaW4gdGhlIHByb2dyZXNzIGJveCdzIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBwcm9ncmVzcyBib3gncyBjYXB0aW9uLlxyXG4gICAgICogQHBhcmFtIGRlbGF5TWlsbGlzZWNvbmRzIERlbGF5IGluIG1pbGxpc2Vjb25kcyB1bnRpbCB3aGljaCB0aGUgcHJvZ3Jlc3MgYm94IGlzbid0IGRpc3BsYXllZC5cclxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDc1MG1zLiBUbyBkaXNwbGF5IHRoZSBwcm9ncmVzcyBib3ggaW1tZWRpYXRlbHksIHNldCBpdCB0byAwLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCBpcyByZXNvbHZlZCBvdCByZWplY3RlZCB3aXRoIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBpbnB1dCBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNob3dVbnRpbCggcHJvbWlzZTogUHJvbWlzZTxhbnk+LCBjb250ZW50OiBhbnksIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgICAgIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIgPSA3NTApOiBQcm9taXNlPGFueT5cclxuXHR7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzQm94KCBjb250ZW50LCB0aXRsZSk7XHJcbiAgICAgICAgcHJvZ3Jlc3Muc2hvd01vZGFsV2l0aERlbGF5KCBkZWxheU1pbGxpc2Vjb25kcyk7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBjb250ZW50Pzogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgY2FuY2VsUmV0dXJuVmFsdWU/OiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGNvbnRlbnQsIHRpdGxlLCB7IHN0eWxlczogUHJvZ3Jlc3NCb3hTdHlsZXMgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYW5jZWxSZXR1cm5WYWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbih7IGlkOiAxLCBjb250ZW50OiBcIkNhbmNlbFwiLCByZXR1cm5WYWx1ZTogY2FuY2VsUmV0dXJuVmFsdWUgfSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWF0ZXMgZGlzcGxheWluZyBhIHByb2dyZXNzIGJveCBidXQgZG9lc24ndCByZWFsbHkgY3JlYXRlIGl0IHVudGlsIHRoZSBnaXZlbiB0aW1lb3V0XHJcbiAgICAgKiBleHBpcmVzLiBJZiB0aGUgW1tjbG9zZV1dIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSB0aW1lb3V0IGV4cGlyZXMsIHRoZSBwb3B1cCBpc24ndFxyXG4gICAgICogY3JlYXRlZCBhdCBhbGwuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3Ugd2FudCB0aGUgcHJvZ3Jlc3MgdG8gcmVmbGVjdCBtdWx0aXBsZSBvcGVyYXRpb25zXHJcbiAgICAgKiBidXQgZG9uJ3Qgc2hvdyBpdCBpZiB0aGUgb3BlcmF0aW9ucyBmaW5pc2ggcXVpY2tseSBlbm91Z2gsIGZvciBleGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzcygpO1xyXG4gICAgICogcHJvZ3Jlc3Muc2hvd01vZGFsV2l0aERlbGF5KCAxMDAwKTtcclxuICAgICAqIHByb2dyZXNzLnNldENvbnRlbnQoIFwiRmlyc3Qgb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLi4uXCIpXHJcbiAgICAgKiBwZXJmb3JtRmlyc3RPcGVyYXRpb24oKTtcclxuICAgICAqIHByb2dyZXNzLnNldENvbnRlbnQoIFwiU2Vjb25kIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcy4uLlwiKVxyXG4gICAgICogcGVyZm9ybVNlY29uZE9wZXJhdGlvbigpO1xyXG4gICAgICogcHJvZ3Jlc3MuY2xvc2UoKTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01vZGFsV2l0aERlbGF5KCBkZWxheU1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXlIYW5kbGUgPSBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLnNob3dOb3coKSwgZGVsYXlNaWxsaXNlY29uZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBwb3B1cCBhbmQgcGFzc2VzIGEgdmFsdWUgdG8gYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZS4gRm9yIHRoZSBtb2RhbCBwb3B1cHMsXHJcbiAgICAgKiB0aGlzIHZhbHVlIHdpbGwgYmUgdGhlIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBzaG93TW9kYWwoKSBtZXRob2QuXHJcbiAgICAgKiBGb3IgbW9kZWxlc3MgcG9wdXBzLCB0aGlzIHZhbHVlIHdpbGwgYmUgYXZhaWxhYmxlIGFzIHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSByZXRWYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlKCByZXRWYWw/OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlIYW5kbGUgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmRlbGF5SGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxheUhhbmRsZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci5jbG9zZSggcmV0VmFsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyQm9keSgpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgLy8gd2UgYXJlIHVzaW5nIHRoaXMub3B0aW9uYWxTdHlsZXMgYmVjYXVzZSB3ZSBleHBsaWNpdGx5IHBhc3Mgb3VyIHN0eWxlcyBpbiB0aGUgb3B0aW9uc1xyXG4gICAgICAgIC8vIHBhcmFtZXRlciBvZiB0aGUgRGlhbG9nIGNvbnN0cnVjdG9yLlxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLnByb2dyZXNzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG9yIGNsYXNzXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0RGVmYXVsdFN0eWxlcygpOiBQcm9ncmVzc0JveFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8UHJvZ3Jlc3NCb3hTdHlsZXM+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBQcm9ncmVzc0JveFN0eWxlcztcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzaG93Tm93KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlbGF5SGFuZGxlID0gMDtcclxuICAgICAgICB0aGlzLnNob3dNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gSGFuZGxlIG9mIHRoZSBzZXRUaW1lb3V0IGNhbGwgd2hlbiBvcGVuZWluZyB0aGUgcG9wdXAgd2l0aCBkZWxheS5cclxuICAgIHByaXZhdGUgZGVsYXlIYW5kbGUgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUNsYXNzQ29tcFZOLCBJQ29tcG9uZW50LCBVcGRhdGVTdHJhdGVneX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge2NyZWF0ZVdhdGNoZXIsIElXYXRjaGVyfSBmcm9tIFwiLi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIENvbXBCYXNlVk4gaXMgYSBiYXNlIGNsYXNzIGZvciBJbnN0YW5jZVZOIGFuZCBDbGFzc1ZOLiBJdCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eVxyXG4vLyBpbiB0ZXJtcyBvZiB1cGRhdGUgcmVxdWVzdHMgYW5kIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsYXNzQ29tcFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUNsYXNzQ29tcFZOXHJcbntcclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHVibGljIGNvbXA6IElDb21wb25lbnQ7XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogVXBkYXRlU3RyYXRlZ3lcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5ID8gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5KCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKHRoaXMuY29tcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJyZW5kZXIoKSB3YXMgY2FsbGVkIG9uIHVubW91bnRlZCBjb21wb25lbnQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgcmVuZGVyKCkgb24gY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJXYXRjaGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLnZuID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0cnkvY2F0Y2ggYmVjYXVzZSBpdCB3aWxsIGJlIGNhdWdodCB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuY29tcC5yZW5kZXIsIHRoaXMucmVxdWVzdFVwZGF0ZSwgdGhpcy5jb21wLCB0aGlzKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXAud2lsbFVubW91bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBuZWVkIHRyeS9jYXRjaCBidXQgb25seSB0byBsb2dcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gaW4gd2lsbFVubW91bnQgb2YgY29tcG9uZW50ICcke3RoaXMubmFtZX0nYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0XHR0aGlzLmNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNvbXAgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgcHVibGljIGRpZE1vdW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wLmRpZE1vdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbmVlZCB0cnkvY2F0Y2ggYnV0IG9ubHkgdG8gbG9nXHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAuZGlkTW91bnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXhjZXB0aW9uIGluIGRpZE1vdW50IG9mIGNvbXBvbmVudCAnJHt0aGlzLm5hbWV9J2AsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmhhbmRsZUVycm9yICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBXYXRjaGVyIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBjb21wb25lbnQncyByZW5kZXIgZnVuY3Rpb24uIFRoZSB3YXRjaGVyIHdpbGwgbm90aWNlIGFueVxyXG4gICAgLy8gdHJpZ2dlciBvYmplY3RzIGJlaW5nIHJlYWQgZHVyaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBleGVjdXRpb24gYW5kIHdpbGwgcmVxdWVzdCB1cGRhdGVcclxuICAgIC8vIHRodXMgdHJpZ2dlcnJpbmcgcmUtcmVuZGVyaW5nLlxyXG5cdHByaXZhdGUgcmVuZGVyV2F0Y2hlcjogSVdhdGNoZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtTdHlsZXNldCwgc2V0RWxlbWVudFN0eWxlLCBTY2hlZHVsZXJUeXBlLCBkaWZmU3R5bGVzZXRzLCBTdHJpbmdTdHlsZXNldCwgc2V0RWxlbWVudFN0cmluZ1N0eWxlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiO1xyXG4vLy8gI2VuZGlmXHJcbjsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBvZiBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3BUeXBlXHJcbntcclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRBdHRyID0gMSxcclxuXHJcblx0Ly8gRXZlbnQgbGlzdGVuZXJzIHNldCB1c2luZyBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcclxuXHRFdmVudCA9IDIsXHJcblxyXG5cdC8vIEN1c3RvbSBhdHRyaWJ1dGVzIGZvciB3aGljaCBoYW5kbGVyIGZhY3RvcmllcyBhcmUgcmVnaXN0ZXJlZFxyXG5cdEN1c3RvbUF0dHIgPSAzLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGtlcHQgYWJvdXQgcHJvcGVydHkgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIHByb3BlcnR5LlxyXG5cdHR5cGU6IFByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzZXR0aW5nLCBkaWZmaW5nLCB1cGRhdGluZyBhbmRcclxuLy8gcmVtb3ZpbmcgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZSBhbmQgcHJvcFZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHNldD86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcblx0Ly8gdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdXBkYXRlRnVuYyBmdW5jdGlvbi4gSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCB0aGUgdmFsdWUgb2YgdGhlXHJcblx0Ly8gYXR0cmlidXRlIHdpbGwgbm90IGNoYW5nZSAodGhhdCBtZWFucyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBhcmUgZXF1YWwpLiBJZiB0aGlzXHJcblx0Ly8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHByb3BlcnR5IHZhbHVlcyBhcmUgY29udmVydGVkIHRvIHN0cmluZyBhbmQgY29tcGFyZWQgYXMgc3RyaW5ncy5cclxuXHQvLyBJZiB0aGVzZSBzdHJpbmdzIGFyZSBkaWZmZXJlbnQsIHRoZSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgIG5ldyB2YWx1ZSBpcyByZXR1cm5lZC5cclxuXHRkaWZmPzogKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkXHJcblx0Ly8gZnJvbSB0aGUgZGlmZiBmdW5jdGlvbi4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgc2V0IGZ1bmN0aW9uIGlzIHVzZWQuIElmXHJcblx0Ly8gdGhlIHNldCBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCBlaXRoZXIsIHRoZSBET00gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhc1xyXG5cdC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCB1cGRhdGVWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHR1cGRhdGU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5yZW1vdmVBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUuXHJcblx0cmVtb3ZlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcblx0Ly8gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuIFRoaXMgaXMgc29tZXRpbWVzIG5lZWRlZCBpZiB0aGUgYXR0cmlidXRlIG5hbWUgY2Fubm90IGJlXHJcblx0Ly8gdXNlZCBhcyBwcm9wZXJ0eSBuYW1lIC0gZm9yIGV4YW1wbGUsIGlmIGF0dHJpYnV0ZSBuYW1lIGNvbnRhaW5zIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW5cclxuXHQvLyBUeXBlU2NyaXB0IGlkZW50aWZpZXIgKGUuZy4gZGFzaCkuXHJcblx0YXR0ck5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGJ1YmJsZXMuIElmIHRoZSBldmVudCBkb2Vzbid0IGJ1YmJsZSwgdGhlIGV2ZW50IGhhbmRsZXJcclxuXHQvLyBtdXN0IGJlIHNldCBvbiB0aGUgZWxlbWVudCBpdHNlbGY7IG90aGVyd2lzZSwgdGhlIGV2ZW50IGhhbmRsZXIgY2FuIGJlIHNldCBvbiB0aGUgcm9vdFxyXG5cdC8vIGFuY2hvciBlbGVtZW50LCB3aGljaCBhbGxvd3MgaGF2aW5nIGEgc2luZ2xlIGV2ZW50IGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgbWFueSBlbGVtZW50cyxcclxuXHQvLyB3aGljaCBpcyBtb3JlIHBlcmZvcm1hbnQuXHJcblx0aXNCdWJibGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIENsYXNzIG9iamVjdCB0aGF0IGNyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0c2V0RWxlbWVudFN0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHByb3BWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IFN0eWxlc2V0LCBuZXdQcm9wVmFsOiBTdHlsZXNldCk6IGFueVxyXG57XHJcblx0bGV0IHJlcyA9IGRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgdXBkYXRlVmFsLCBTY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIElFbG1WTiwgc2V0UmVmLCBFdmVudEZ1bmNUeXBlLCBVcGRhdGVTdHJhdGVneSwgUmVmUHJvcFR5cGUsIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyXHJcbn0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1xyXG4gICAgVk5CYXNlLCBETiwgVk4sIFZOVXBkYXRlRGlzcCwgc19kZWVwQ29tcGFyZSwgUHJvcEluZm8sIFByb3BUeXBlLFxyXG4gICAgRWxtQXR0ciwgQ3VzdG9tQXR0clByb3BJbmZvLCBBdHRyUHJvcEluZm8sXHJcbiAgICBFdmVudFByb3BJbmZvfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgRE9NIGVsZW1lbnQgY3JlYXRlZCB1c2luZyBKU1guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRWxtVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJRWxtVk5cclxue1xyXG5cdC8vIFRhZyBuYW1lIG9mIGFuIEVsZW1lbnQuXHJcblx0cHVibGljIGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC4gVGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQgd2hlbiB0aGUgbm9kZSBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0XHJcblx0Ly8gdGltZS5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgRWxlbWVudCBpcyBTVkcgKGFzIG9wcG9zZWQgdG8gSFRMTSkuIFRoZXJlIGFyZSBzb21lIFNWR1xyXG5cdC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFzIHJlZ3VsYXIgZWxlbWVudHMgKGUuZy4gPGE+KS4gVGhlcmVmb3JlLCBpbiBvcmRlciB0b1xyXG5cdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIG5vdCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBuYW1lc3BhY2VVUkkgb2YgdGhlIHBhcmVudFxyXG5cdC8vIChhbmNob3JlKSBET00gbm9kZS5cclxuXHRwdWJsaWMgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRhZ05hbWU6IHN0cmluZywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5lbG1OYW1lID0gdGFnTmFtZTtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUga2V5IHByb3BlcnR5LiBJZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdFxyXG5cdFx0XHQvLyBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBlbGVtZW50J3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5lbG1OYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBvd25ETigpOiBETiB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudCBhbmQgY3JlYXRlIHRoZSBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGhpcy5lbG1OYW1lKTtcclxuXHRcdHRoaXMuaXNTdmcgPSBzdmdJbmZvICE9PSB1bmRlZmluZWQgJiYgKHN2Z0luZm8gIT09IHRydWUgfHwgdGhpcy5hbmNob3JETi5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoIFwic3ZnXCIpKTtcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHQ/IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBTdmdFbG1zLm5hbWVzcGFjZSwgU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0aGlzLmVsbU5hbWUpKVxyXG5cdFx0XHQ6IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHQvLyB0cmFuc2xhdGUgcHJvcGVydGllcyBpbnRvIGF0dHJpYnV0ZXMsIGV2ZW50cyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIChpZiBzcGVjaWZpZWQpXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVsbTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVsZWFzZXMgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHRlcm1pbmF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCB0cnVlKTtcclxuXHJcblx0XHQvLyBjbGVhbiB1cFxyXG5cdFx0dGhpcy5lbG0gPSBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhc19kZWVwQ29tcGFyZSggdGhpcy5wcm9wcywgKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gcmVuZGVyIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIGVpdGhlciBvbGQgb3IgbmV3IG5vZGUgaGFzIGNoaWxkcmVuXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyID0gdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHxcclxuXHRcdFx0XHRcdChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4gJiYgKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuO1xyXG5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdCwgc2hvdWxkUmVuZGVyIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0bmV3RWxtVk4ucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3RWxtVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvblxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0VsbVZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXksIHVwZGF0ZVN0YXJ0ZWd5IGFuZCBjcmVhdG9yIHByb3BlcnR5IChldmVuIGlmIHRoZVxyXG5cdFx0Ly8gdmFsdWVzIGFyZSB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IG5ld0VsbVZOLnVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIG92ZXIgdGhlIG9yaWdpbmFsIHByb3BlcnRpZXMgYW5kIHB1dHMgdGhlbSBpbnRvIHRoZSBidWNrZXRzIG9mIGF0dHJpYnV0ZXMsIGV2ZW50XHJcblx0Ly8gbGlzdGVuZXJzIGFuZCBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIHBhcnNlUHJvcHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5wcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcm9wVmFsOiBhbnksIHByb3BJbmZvOiBQcm9wSW5mbywgcHJvcFR5cGU6IFByb3BUeXBlO1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHRoZSBrZXkgcHJvcGVydHkgYmVjYXVzZSB3ZSBhbHJlYWR5IGV4dHJhY3RlZCBpdCBpbiB0aGUgY29uc3RydWN0b3JcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJvcFZhbCA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcFZhbCA9PSBudWxsIHx8IHByb3BWYWwgPT09IGZhbHNlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkLCBudWxsIGFuZCBmYWxzZVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInVwZGF0ZVN0cmF0ZWd5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciB1cGRhdGVTdHJhdGVneSBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvcGVydHkgYW5kIGRldGVybWluZSBpdHMgdHlwZSAocmVndWxhciBhdHRyaWJ1dGUsIGV2ZW50XHJcblx0XHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIG9ubHkgZm9yIHJlZ3VsYXJcclxuXHRcdFx0XHQvLyBhdHRyaWJ1dGVzLlxyXG5cdFx0XHRcdHByb3BJbmZvID0gRWxtQXR0ci5nZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lKTtcclxuXHRcdFx0XHRwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLkF0dHI7XHJcblx0XHRcdFx0aWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5hdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbywgdmFsOiBwcm9wVmFsIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5FdmVudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHt9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5DdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8gYXMgQ3VzdG9tQXR0clByb3BJbmZvLCB2YWw6IHByb3BWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuYXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhZGRFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHRldmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdHByaXZhdGUgcmVtb3ZlRXZlbnRzKCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnRzKCBuZXdFdmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkRXZlbnRzID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkRXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZEV2ZW50ID0gb2xkRXZlbnRzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdFdmVudCA9IG5ld0V2ZW50cyA/IG5ld0V2ZW50c1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0V2ZW50KVxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgb2xkRXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEV2ZW50LCBuZXdFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGV2ZW50IGxpc3RlbmVycyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3RXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEV2ZW50cyAmJiAobmFtZSBpbiBvbGRFdmVudHMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIG5ld0V2ZW50c1tuYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0V2ZW50cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBldmVudCBsaXN0ZW5lciBhcmUgZGlmZmVyZW50IGFuZCBzZXRzXHJcblx0Ly8gdGhlIHVwZGF0ZWQgdmFsdWUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZCBmYWxzZSBpZiBubyBjaGFuZ2UgaGFzXHJcblx0Ly8gYmVlbiBkZXRlY3RlZC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIG9sZEV2ZW50OiBFdmVudFJ1blRpbWVEYXRhLCBuZXdFdmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBkb3VibGUtZXF1YWwtc2lnbiBmb3IgdXNlQ2FwdHVyZSBpcyBvbiBwdXJwb3NlLCBiZWNhdXNlIHVzZUNhcHR1cmUgY2FuIGJlIHVuZGVmaW5lZCBvciBib29sZWFuXHJcblx0XHRpZiAob2xkRXZlbnQub3JnRnVuYyA9PT0gbmV3RXZlbnQub3JnRnVuYyAmJlxyXG5cdFx0XHRvbGRFdmVudC50aGF0ID09PSBuZXdFdmVudC50aGF0ICYmXHJcblx0XHRcdG9sZEV2ZW50LnVzZUNhcHR1cmUgPT0gbmV3RXZlbnQudXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IG9sZEV2ZW50LndyYXBwZXI7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBvbGRFdmVudC53cmFwcGVyLCBvbGRFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgd3JhcHBlciBhbmQgYWRkIGl0IGFzIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggbmV3RXZlbnQpO1xyXG5cdFx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdFdmVudC53cmFwcGVyLCBuZXdFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIuIFRoZSB3cmFwcGVyIGlzIGJvdW5kIHRvXHJcblx0Ly8gdGhlIGluc3RhbmNlIG9mIEVsbVZOIGFuZCB0aHVzIGNhbiBpbnRlcmNlcHQgZXhjZXB0aW9ucyBhbmQgcHJvY2VzcyB0aGVtIHVzaW5nIHRoZSBzdGFuZGFyZFxyXG5cdC8vIGVycm9yIHNlcnZpY2UuIFVubGVzcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgYWxyZWFkeSBhIGJvdW5kIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGNhbGxlZFxyXG5cdC8vIHdpdGggXCJ0aGlzXCIgc2V0IHRvIGVpdGhlciB0aGUgXCJldmVudC50aGF0XCIgb2JqZWN0IG9yLCBpZiB0aGUgbGF0dGVyIGlzIHVuZGVmaW5lZCwgdG8gdGhlXHJcblx0Ly8gXCJjcmVhdG9yXCIgb2JqZWN0LCB3aGljaCBpcyB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCBpIGl0cyByZW5kZXJcclxuXHQvLyBtZXRob2QuXHJcblx0cHJpdmF0ZSBjcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogRXZlbnRGdW5jVHlwZTxFdmVudD5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53cmFwQ2FsbGJhY2soIGV2ZW50Lm9yZ0Z1bmMsIGV2ZW50LnRoYXQgPyBldmVudC50aGF0IDogdGhpcy5jcmVhdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIGFkZEN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBjdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBjdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVDdXN0b21BdHRycyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBuZXdDdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBuZXdDdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IGRlZmluaW5nIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0cHVibGljIHVwZGF0ZVN0cmF0ZWd5OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gQXJyYXkgb2YgY2hpbGRyZW4gb2JqZWN0cy5cclxuXHRwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IFJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IEV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgd2lsbCBiZSByZWZlcmVuY2VkIGJ5IFwidGhpc1wiIHdpdGhpbiB0aGUgaW52b2tlZCBmdW5jdGlvblxyXG5cdHRoYXQ/OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZT86IGJvb2xlYW47XHJcblxyXG5cdC8vIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3ZSBjcmVhdGUgYW5kIGJpbmQgdG8gb3VyIG5vZGUgYW5kIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gV2UgbmVlZFxyXG5cdC8vIHRoaXMgd3JhcHBlciBpbiBvcmRlciB0byBjYXRjaCBleGNlcHRpb24gaW4gdGhlIGNhbGxiYWNrIGFuZCBwYXNzIHRoZW0gb24gdG8gYW4gZXJyb3JcclxuXHQvLyBoYW5kbGluZyBzZXJ2aWNlLiBUaGUgd3JhcHBlciBpcyBtYXJrZWQgb3B0aW9uYWwgYmVjYXVzZSBpdCBpcyBjcmVhdGVkIG9ubHkgaWYgYSBuZXdcclxuXHQvLyBldmVudCBsaXN0ZW5lciBpcyBhZGRlZDsgdGhhdCBpcywgaWYgZHVyaW5nIHVwZGF0ZSwgdGhlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGlzIHRoZVxyXG5cdC8vIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVyIGJlY2F1c2UgdGhlIG9sZCBvbmUgd2lsbCBiZSB1c2VkLlxyXG5cdHdyYXBwZXI/OiAgRXZlbnRGdW5jVHlwZTxFdmVudD47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBjdXN0b20gcHJvcGVydHkuXHJcbmludGVyZmFjZSBDeXN0b21BdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgY3VzdG9tIGF0dHJpYnV0ZSAtIGNhbm5vdCBiZSBudWxsXHJcblx0aW5mbzogQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBDdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG5cdHZhbDogYW55O1xyXG5cclxuXHQvLyBIYW5kbGVyIG9iamVjdCB0aGF0IGtub3dzIHRvIGRlYWwgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXHJcblx0aGFuZGxlcjogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBFdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtSW5mbyB0eXBlIGRlZmluZXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBTVkcgZWxlbWVudC4gVGhpc1xyXG4vLyBpbmZvcm1hdGlvbiBjYW4gYmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuLy9cdC0gc3RyaW5nIC0gYWN0dWFsIG5hbWUgdG8gdXNlIGZvciB0aGUgZWxlbWVudC4gU29tZSBTVkcgZWxlbWVudHMgaGF2ZSBuYW1lcyB0aGF0IGNhbm5vdCBiZSB1c2VkXHJcbi8vXHRcdGluIEpYIGRpcmVjdGx5IChlLmcuIGJlY2F1c2Ugb2YgaHlwaGVuIGxpa2UgaW4gXCJjb2xvci1wcm9maWxlXCIpLiBJbiB0aGlzIGNhc2UgdGhlIHN0cmluZ1xyXG4vL1x0XHR2YWx1ZSB3aWxsIGJlIHRoZSBhY3R1YWwgZWxlbWVudCBuYW1lIHRvIHB1dCBpbnRvIEhUTUwgZG9jdW1lbnQsIHdoaWxlIEpTWCB3aWxsIGJlIHVzaW5nXHJcbi8vXHRcdGEgY2FtZWwtZm9ybWF0dGVkIG5hbWUgKGUuZy4gXCJjb2xvclByb2ZpbGVcIikuXHJcbi8vXHQtIGJvb2xlYW4gLSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyBcImR1YWwtcHVycG9zZVwiOyB0aGF0IGlzLCBlbGVtZW50IHdpdGggdGhpc1xyXG4vL1x0XHRuYW1lIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBIVE1MIG9yIFNWRyBlbGVtZW50LlxyXG4vL1x0LSB0dXBsZSBvZiB0d28gZWxlbWVudHMgLSBzdHJpbmcgYW5kIGJvb2xlYW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWJvdmUgaXRlbXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTdmdFbG1JbmZvID0gYm9vbGVhbiB8IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbXMgY2xhc3MgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIG5hbWVzIHVzZWQgdG8gZGVmaW5lIFNWRyBlbGVtZW50cyBpbiBKU1guIFdoZW5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYW4gZWxlbWVudCwgd2UgbG9va3VwIHRoZSBwcm92aWRlZCB0YWcgbmFtZSBhbmQgaWYgd2UgZmluZCBpdCBpbiB0aGlzIGNsYXNzXHJcbi8vIHdlIHVzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgd2l0aCB0aGUgcHJvcGVyIFNWRyBuYW1lc3BhY2Ugc3RyaW5nLiBWYWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllc1xyXG4vLyBhcmUgU3ZnRWxtSW5mbyB2YWx1ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RnVuY1Byb3h5UHJvcHN9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIHNfY3VycmVudENsYXNzQ29tcCwgY3JlYXRlV2F0Y2hlciwgVk4sIFZOVXBkYXRlRGlzcCwgSVdhdGNoZXJ9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8gY29ubmVjdCBiZXR3ZWVuIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgdGhlIFZOcyBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmxldCBzeW1LZXlzVG9Ob2RlcyA9IFN5bWJvbCggXCJzeW1LZXlzVG9Ob2Rlc1wiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIHN5bWJvbCBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyByZW1lbWJlciBkYXRhIGZyb20gdGhlIHByb3BzLiBOb3RlIHRoYXQgaWYgdGhpc0FyZyBpcyB1bmRlZmluZWQgaXQgd2lsbCBiZSBjaGFuZ2VkXHJcbiAgICAgICAgLy8gdG8gdGhlIG5vZGUncyBjcmVhdG9yIGNvbXBvbmVudCB1cG9uIG1vdW50aW5nXHJcblx0XHR0aGlzLmZ1bmMgPSBwcm9wcy5mdW5jIGFzICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHRcdHRoaXMudGhpc0FyZyA9IHByb3BzLnRoaXNBcmc7XHJcblx0XHR0aGlzLmFyZ3MgPSBwcm9wcy5hcmdzO1xyXG5cdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyUmVxdWlyZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgcmVwbGFjZUFyZ3MoIGFyZ3M6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYXJncyA9IGFyZ3M7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIGlmIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByZW5kZXJPblVwZGF0ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucmVuZGVyUmVxdWlyZWQ7IH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb24gcHJveHkgY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLnRoaXNBcmcsIHRoaXMuYXJncyk7XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jV2F0Y2hlciggdGhpcy5hcmdzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgaWYgKHRoaXMudGhpc0FyZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzLmNyZWF0b3I7XHJcblxyXG5cdFx0Ly8gaWYgYSBrZXkgd2FzIG5vdCBwcm92aWRlZCB3ZSB1c2UgdGhlIHZhbHVlIG9mIHRoaXNBcmcgKHdoaWNoIG1pZ2h0IGJlIHRoZSBjdXJyZW50XHJcblx0XHQvLyBjb21wb25lbnQpIGFzIGEga2V5LiBJZiB0aGlzQXJnIGlzIHVuZGVmaW5lZCBlaXRoZXIgd2UgdXNlIHRoZSBmdW5jdGlvbiBpdHNlbGYgYXMgYSBrZXkuXHJcbiAgICAgICAgdGhpcy5saW5rS2V5ID0gdGhpcy5rZXkgfHwgdGhpcy50aGlzQXJnIHx8IHRoaXMuZnVuYztcclxuXHJcblx0XHR0aGlzLmxpbmtOb2RlVG9GdW5jKCk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMudXBkYXRlRnJvbVdhdGNoZXIsIHRoaXMudGhpc0FyZywgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLnVubGlua05vZGVGcm9tRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3QgYW5kIHRoZSBzYW1lIHRoaXNBcmcgcHJvcGVydHlcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IG5ld0Z1bmNQcm94eVZOLmZ1bmMgJiYgdGhpcy50aGlzQXJnID09PSBuZXdGdW5jUHJveHlWTi50aGlzQXJnO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1Byb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5saW5rS2V5ID0gbmV3RnVuY1Byb3h5Vk4ubGlua0tleTtcclxuXHJcblx0XHQvLyB0YWtlIGFyZ3VtZW50cyBmcm9tIHRoZSBuZXcgbm9kZTsgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgXCJ0aGlzQXJnXCIgcmVtYWluIHRoZSBzYW1lLlxyXG5cdFx0dGhpcy5hcmdzID0gbmV3RnVuY1Byb3h5Vk4uYXJncztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBhbHNvIGJlIGNhbGxlZCAtIGJ1dCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSB1c2UgdGhpcyBtZXRob2Qgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZ1wiXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmluZFZOKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55KTogRnVuY1Byb3h5Vk5cclxuXHR7XHJcblx0XHQvLyBpZiB0aGUga2V5IGlzIHVuZGVmaW5lZCwgd2UgdXNlIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmXHJcblx0XHRsZXQgbGlua0tleTogYW55ID0ga2V5IHx8IHRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0ZyYWdtZW50LCBGdW5jQ29tcFR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHsgVk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwIH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBub2RlIGNvcnJlc3BvbmRzIHRvIGEgZnJhZ21lbnQgcGxhY2Vob2xkZXIuICovXHJcblx0cHVibGljIHN0YXRpYyBpc1ZOYUZyYWdtZW50KCB2bjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuICh2biBhcyBGdW5jVk4pLmZ1bmMgPT09IEZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogRnVuY0NvbXBUeXBlLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5XHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb25hbCBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdFx0Ly8gRE9NIHRyZWUuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSAobmV3Vk4gYXMgRnVuY1ZOKS5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1ZOID0gbmV3Vk4gYXMgRnVuY1ZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jVk4ua2V5O1xyXG5cclxuXHRcdC8vIHRha2UgcHJvcGVydGllcyBmcm9tIHRoZSBuZXcgbm9kZVxyXG5cdFx0dGhpcy5mdW5jID0gbmV3RnVuY1ZOLmZ1bmM7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRwcml2YXRlIGZ1bmM6IEZ1bmNDb21wVHlwZTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQsIGZ1bmN0aW9uIG9yIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lJbmRlcGVuZGVudENvbXBWTiwgSUNvbXBvbmVudH0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOLCBWTlVwZGF0ZURpc3AsIENsYXNzQ29tcFZOfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgSW5zdGFuY2VWTiBpcyBhIG5vZGUgdGhhdCBob2xkcyBhbiBpbnN0YW5jZSBvZiBhbiBJQ29tcG9uZW50LWltcGxlbWVudGluZyBvYmplY3QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIElJbmRlcGVuZGVudENvbXBWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXA6IElDb21wb25lbnQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZSA/IHRoaXMuY29tcC5kaXNwbGF5TmFtZSA6IHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLiBUaGUgaW5zdGFuY2Ugb2Ygb3VyIGNvbXBvbmVudCBpcyB0aGUga2V5LlxyXG5cdHB1YmxpYyBnZXQga2V5KCk6IGFueSB7IHJldHVybiB0aGlzLmNvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBpZiBpdCBpcyB0aGUgc2FtZSBjb21wb25lbnQgaW5zdGFuY2UsIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcclxuXHRcdGxldCBuZXdDb21wID0gKG5ld1ZOIGFzIEluZGVwZW5kZW50Q29tcFZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCBpbnN0YW5jZXMgYXJlIGRpZmZlcmVudCwgdGhlbiB3ZSBuZWVkIHRvIHByZXBhcmUgdGhlIG5ldyBpbnN0YW5jZSBmb3JcclxuXHRcdC8vIG1vdW50aW5nIGFuZCB0aGUgb2xkIG9uZSBmb3IgdW5tb3VudGluZy5cclxuXHRcdGlmIChuZWVkc1VwZGF0aW5nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcCA9IG5ld0NvbXA7XHJcblx0XHRcdHRoaXMud2lsbE1vdW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgbmVlZHNVcGRhdGluZyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU1hbmFnZWRDb21wVk4sIElDb21wb25lbnRDbGFzcywgSUNvbXBvbmVudCwgc2V0UmVmLCBSZWZQcm9wVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOLCBWTkJhc2UsIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIElNYW5hZ2VkQ29tcFZOXHJcbntcclxuXHQvLyBUeXBlIG9mIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcblx0cHVibGljIGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5jb21wQ2xhc3MgPSBjb21wQ2xhc3M7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXkgYW5kIHJlZlxyXG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBwcm9wcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsOiBhbnkgPSBwcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BWYWwgPT09IHVuZGVmaW5lZCB8fCBwcm9wVmFsID09PSBudWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlnbm9yZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWVzIHVuZGVmaW5lZCBhbmQgbnVsbFxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGtleSBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lIHBsdXMga2V5IGlmIGRlZmluZWQuIE5vdGUgdGhhdCBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdC8vIG1pZ2h0IG5vdCBiZSBjcmVhdGVkIHlldCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZFxyXG5cdFx0aWYgKHRoaXMuY29tcCAmJiB0aGlzLmNvbXAuZGlzcGxheU5hbWUpXHJcblx0XHRcdHJldHVybiB0aGlzLmNvbXAuZGlzcGxheU5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lID0gdGhpcy5jb21wQ2xhc3MubmFtZTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCBwYXJlbnQsIGNyZWF0b3IpO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBjb21wb25lbnQgaW5zdGFuY2VcclxuXHRcdHRoaXMuY29tcCA9IG5ldyB0aGlzLmNvbXBDbGFzcyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWRcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGNvbXBvbmVudCBiZWZvcmUgc2V0dGluZyBpdCB0byB1bmRlZmluZWQuIElmIHRoZSBzYW1lIFJlZiBvYmplY3QgaXMgdXNlZCBmb3JcclxuXHRcdC8vIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50cyAoYW5kL29yIGVsZW1lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuICAgICAgICBzdXBlci53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIE1hbmFnZWRDb21wVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIE1hbmFnZWRDb21wVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdDbGFzc1ZOLnJlZiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB3ZSBrbm93IHRoYXQgb3VyIHJlZmVyZW5jZSBpcyBkZWZpbmVkLCBzbyB1bnNldCBpdFxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0NsYXNzVk4ua2V5O1xyXG5cclxuXHRcdC8vIHNoYWxsb3cgY29weSB0aGUgbmV3IHByb3BlcnRpZXMgZnJvbSB0aGUgb3RoZXIgbm9kZSB0byBvdXIgb2JqZWN0LiBUaGlzIGlzIG5lZWRlZFxyXG5cdFx0Ly8gYmVjYXVzZSB0aGUgY29tcG9uZW50IGdvdCBvdXIgcHJvcHMgb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgd2lsbCBrZWVwXHJcblx0XHQvLyB3b3JraW5nIHdpdGggaXQgLSBlc3BlY2lhbGx5IGlmIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kLlxyXG5cdFx0T2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaCgga2V5ID0+IGRlbGV0ZSB0aGlzLnByb3BzW2tleV0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5wcm9wcywgbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgc2hvdWxkUmVuZGVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC5cclxuXHRwcml2YXRlIHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1Byb21pc2VQcm94eVByb3BzfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKlxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBjdXN0b20gcHJvcGVydHkgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMsIGNoaWxkcmVuPzogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnByb21pc2UgPSBwcm9wcy5wcm9taXNlO1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gcHJvcHMuZXJyb3JDb250ZW50RnVuYztcclxuXHRcdHRoaXMuY29udGVudCA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkIChzdWNjZXNzZnVsbHkgb3Igbm90KS5cclxuXHRwdWJsaWMgZ2V0IGlzU2V0dGxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvbWlzZSA9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuICAgICAgICAvLyBET00gdHJlZS5cclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcbiAgICAgICAgcHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuICAgICAgICB9XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgcHJvbWlzZSBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLnByb21pc2UgPT09IG5ld1Byb21pc2VQcm94eVZOLnByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdQcm9taXNlUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBuZXdQcm9taXNlUHJveHlWTi5jb250ZW50O1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gbmV3UHJvbWlzZVByb3h5Vk4uZXJyb3JDb250ZW50RnVuYztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYWl0cyBmb3IgdGhlIHByb21pc2UgdG8gc2V0dGxlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBhd2FpdCB0aGlzLnByb21pc2U7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBzdGlsbCBtb3VudGVkLCByZXF1ZXN0IHVwZGF0ZVxyXG5cdFx0XHRpZiAodGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgYWxyZWFkeSB1bm1vdW50ZWQsIGRvIG5vdGhpbmdcclxuXHRcdFx0aWYgKCF0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lcnJvckNvbnRlbnRGdW5jKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5lcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIpO1xyXG5cclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBQcm9taXNlIHRoYXQgdGhpcyBub2RlIHdhdGNoZXMuXHJcblx0cHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8vIENvbnRlbnQgdGhhdCB0aGlzIG5vZGUgZGlzcGxheXMuIEluaXRpYWxseSB0aGlzIGNvbnRlbnQgaXMgc2V0IHRvIHByb3BzLmNoaWxkcmVuLiBXaGVuXHJcblx0Ly8gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQsIHRoZSBjb250ZW50IGlzIHNldCB0byB0aGUgcmVzb2x2ZWQgdmFsdWUuIElmIHRoZSBwcm9taXNlIGlzXHJcblx0Ly8gcmVqZWN0ZWQgYW5kIHRoZSBlcnJvckNvbnRlbnRGdW5jIGlzIGRlZmluZWQsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCBpdHMgcmV0dXJuXHJcblx0Ly8gdmFsdWUgaXMgdXNlZCBhcyBjb250ZW50LlxyXG5cdHByaXZhdGUgY29udGVudD86IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBlcnJvckNvbnRlbnRGdW5jPzogKCBlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIGV4cG9ydCBwdWJsaWNhdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZVxyXG4vLyBzYW1lIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIFNjaGVkdWxlZEZ1bmNUeXBlLCBJQ29tcG9uZW50LCBJVk5vZGUsIEZyYWdtZW50LCBGdW5jUHJveHksXHJcbiAgICBGdW5jUHJveHlQcm9wcywgUHJvbWlzZVByb3h5LCBJQ29tcG9uZW50Q2xhc3MsIEZ1bmNDb21wVHlwZVxyXG59IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtcclxuICAgIFZOLCBETiwgVk5VcGRhdGVEaXNwLCBWTkJhc2UsIFRleHRWTiwgSW5kZXBlbmRlbnRDb21wVk4sIFByb21pc2VQcm94eVZOLCBDbGFzc0NvbXBWTixcclxuICAgIEZ1bmNQcm94eVZOLCBFbG1WTiwgTWFuYWdlZENvbXBWTiwgRnVuY1ZOLCBlbnRlck11dGF0aW9uU2NvcGUsIGV4aXRNdXRhdGlvblNjb3BlXHJcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcbi8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcbi8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcbi8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG4vLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcbi8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG4vL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG4vL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxubGV0IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kXHJcbi8vIHRoZSB2YWx1ZXMgYXJlIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBhZnRlclxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmRcclxuLy8gdGhlIHZhbHVlcyBhcmUgdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IElDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2l2ZW4gbm9kZSBhcyB0aGUgY3VycmVudCBhbmQgaWYgdGhlIG5vZGUgaXMgZm9yIHRoZSBjb21wb25lbnQsIHNldCB0aGUgY3VycmVudFxyXG4gKiBjb21wb25lbnQuIFJldHVybnMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IHdhcyBwcmV2aW91c2x5IHRoZSBjdXJyZW50IG9uZS4gQXMgd2UgcmVjdXJzZSBvdmVyXHJcbiAqIHZpcnR1YWwgbm9kZXMgYW5kIHN1Yi1ub2Rlcywgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIGhhdmUgdGhlIHNfY3VycmVudFZOIGFuZFxyXG4gKiBzX2N1cnJlbnRDbGFzc0NvbXAgdmFyaWFibGVzIHRvIHBvaW50IHRvIHRoZSBub2RlIGFuZCBjb21wb25lbnQgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyYWNrQ3VycmVudFZOKCB2bjogVk4pOiBWTlxyXG57XHJcbiAgICBsZXQgcHJldlZOID0gc19jdXJyZW50Vk47XHJcbiAgICBzX2N1cnJlbnRWTiA9IHZuO1xyXG4gICAgc19jdXJyZW50Q2xhc3NDb21wID0gIXZuID8gbnVsbCA6ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG4gICAgcmV0dXJuIHByZXZWTjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbmNvbnN0IGVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGlzQ2FsbGJhY2sgT2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSB2biBWaXJ0dWFsIG5vZGUgaW4gd2hvc2UgY29udGV4dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cclxuICogQHJldHVybnMgVGhlIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFjay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwQ2FsbGJhY2tXaXRoVk48VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiBUXHJcbntcclxuICAgIC8vIGlmIFwidGhpc1wiIGZvciB0aGUgY2FsbGJhY2sgd2FzIG5vdCBwYXNzZWQgYnV0IHZuIHdhcywgY2hlY2sgd2hldGhlciB0aGUgdm4gaXMgYSBjb21wb25lbnQ7XHJcbiAgICAvLyBpZiB5ZXMsIHVzZSBpdCBhcyBcInRoaXNcIjsgb3RoZXJ3aXNlLCB1c2Ugdm4ncyBjcmVhdG9yIGNvbXBvbmVudC5cclxuICAgIGlmICghdGhpc0NhbGxiYWNrICYmIHZuKVxyXG4gICAgICAgIHRoaXNDYWxsYmFjayA9ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG5cclxuICAgIHJldHVybiBDYWxsYmFja1dyYXBwZXIuYmluZCggdm4sIHRoaXNDYWxsYmFjaywgY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBjYWxsYmFja3MgaW4gb3JkZXIgdG8gaGF2ZSBpdCBleGVjdXRlZCBpbiBhIE1pbWJsXHJcbiAqIGNvbnRleHQuIFRoZSBmdW5jdGlvbiBpcyB1c3VhbGx5IGJvdW5kIHRvIGEgdmlydHVhbCBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlXHJcbiAqIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmUgYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlXHJcbiAqIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpbiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci4gTm90ZSB0aGF0IFwidGhpc1wiXHJcbiAqIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIGZ1bmN0aW9uIHdhcyBzY2hlZHVsZWQgd2l0aG91dCBiZWluZyBpbiB0aGUgY29udGV4dCBvZiBhbnkgdmlydHVhbCBub2RlLlxyXG4gKlxyXG4gKiBUaGUgcHJvcGVyIE1pbWJsIGNvbnRleHQgZXN0YWJsaXNoZXMgdGhlIGZvbGxvd2luZzpcclxuICogLSBleGVjdXRlcyBpbiBhIG11dGF0aW9uIHNjb3BlLCBzbyB0aGF0IGlmIGFueSB0cmlnZ2VyIHZhbHJpYWJsZSBpcyBjaGFuZ2VkIGR1cmluZyB0aGUgZXhlY3V0aW9uXHJcbiAqICAgb2YgdGhlIGNhbGxiYWNrLCB3YXRjaGVycyB3aWxsIGJlIG9ubHkgbm90aWZpZWQgYWZ0ZXIgdGhlIGNhbGxiYWNrIGhhcyBmaW5pc2hlZCBpdHMgZXhlY3V0aW9uLlxyXG4gKiAtIElmIHRoZSB3cmFwcGluZyBoYXMgYmVlbiBkb25lIGluIHRoZSBjb250ZXh0IG9mIGEgdmlydHVhbCBub2RlIChlLmcuIGZyb20gYSBNaW1ibCBjb21wb25lbnQpLFxyXG4gKiAgIHRoZSBcImN1cnJlbnQgdmlydHVhbCBub2RlXCIgYW5kIHRoZSBcImN1cnJlbnQgY29tcG9uZW50XCIgYXJlIHNldCB0byB0aGUgbm9kZSBhbmQgY29tcG9uZW50IHVuZGVyXHJcbiAqICAgd2hpY2ggdGhlIGNhbGxiYWNrIHdhcyB3cmFwcGVkLiBUaGlzIGFsbG93IGZvciBwcm9wZXIgSlNYIGV4ZWN1dGlvbiBhbmQgZm9yIHVzaW5nIHRoZSBNaW1ibFxyXG4gKiAgIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbS5cclxuICpcclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIHdyYXBwaW5nIHdhcyBjcmVhdGVkIHdpdGhvdXQgdGhlIFZOIGNvbnRleHQuXHJcbiAgICBsZXQgdm46IFZOID0gdGhpcztcclxuICAgIGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTiggdm4gPyB2biA6IG51bGwpO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcbiAgICAgICAgZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcblx0XHRsZXQgW3RoaXNPcmdDYWxsYmFjaywgb3JnQ2FsbGJhY2ssIC4uLnJlc3RdID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIG9yZ0NhbGxiYWNrLmFwcGx5KCB0aGlzT3JnQ2FsbGJhY2ssIHJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuICAgICAgICBsZXQgZXJyb3JTZXJ2aWNlID0gdm4/LmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuICAgICAgICBpZiAoZXJyb3JTZXJ2aWNlKVxyXG4gICAgICAgICAgICBlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCB2bikpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG4gICAgICAgIGV4aXRNdXRhdGlvblNjb3BlKCk7XHJcblxyXG4gICAgICAgIC8vIHJlc3RvcmUgcHJldmlvdXMgY3VycmVudCBWTlxyXG4gICAgICAgIHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcbiAgICBhZGROb2RlVG9TY2hlZHVsZXIoIHZuKTtcclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgdGljayB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZSBkdXJpbmcgYVxyXG5cdC8vIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cclxuXHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRzIHRoZSBnaXZlbiBub2RlIGFuZCByZWxhdGVkIGluZm9ybWF0aW9uIGludG8gdGhlIGludGVybmFsIHN0cnVjdHVyZXMgc28gdGhhdCBpdCB3aWxsIGJlXHJcbi8vIHVwZGF0ZWQgZHVyaW5nIHRoZSBuZXh0IE1pbWJsIHRpY2suXHJcbmZ1bmN0aW9uIGFkZE5vZGVUb1NjaGVkdWxlciggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2biBpbnN0YW5jZW9mIENsYXNzQ29tcFZOKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gdm4uY29tcDtcclxuXHRcdGlmIChjb21wLmJlZm9yZVVwZGF0ZSAmJiBzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBjb21wLmJlZm9yZVVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHJcblx0XHRpZiAoY29tcC5hZnRlclVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggY29tcC5hZnRlclVwZGF0ZSwgd3JhcENhbGxiYWNrV2l0aFZOKCBjb21wLmJlZm9yZVVwZGF0ZSwgY29tcCwgdm4pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG4vLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4sXHJcbiAgICB0aGlzQXJnPzogb2JqZWN0LCB2bj86IElWTm9kZSk6IHZvaWRcclxue1xyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRpZiAoIWZ1bmMpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggXCJUcnlpbmcgdG8gc2NoZWR1bGUgdW5kZWZpbmVkIGZ1bmN0aW9uIGZvciB1cGRhdGVcIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhpc0FyZywgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGlzQXJnLCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgY2FsbCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hvdWxkIGJlIG1hZGUgb3IgdGhlIGZyYW1lIGhhcyBhbHJlYWR5XHJcbi8vIGJlZW4gc2NoZWR1bGVkLlxyXG5mdW5jdGlvbiByZXF1ZXN0RnJhbWVJZk5lZWRlZCgpOiB2b2lkXHJcbntcclxuXHRpZiAoc19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9PT0gMClcclxuXHRcdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uU2NoZWR1bGVkRnJhbWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIGEgbmV3IFVJIGN5Y2xlIHdoZW4gdGhlcmUgaXMgYSBuZWVkIHRvIHVwZGF0ZSBVSSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIG9uU2NoZWR1bGVkRnJhbWUoKTogdm9pZFxyXG57XHJcblx0Ly8gY2xlYXIgdGhlIHNjaGVkdWxlZCBmcmFtZSBoYW5kbGUgc28gdGhhdCBuZXcgdXBkYXRlIHJlcXVlc3RzIHdpbGxcclxuXHQvLyBzY2hlZHVsZSBhIG5ldyBmcmFtZS5cclxuXHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gMDtcclxuXHJcbiAgICBkb01pbWJsZVRpY2soKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWNvbmNpbGVyIG1haW4gZW50cmFuY2UgcG9pbnRcclxuZnVuY3Rpb24gZG9NaW1ibGVUaWNrKCk6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGJlZm9yZSB1cGRhdGluZyBjb21wb25lbnRzLiBJZiB0aGlzIGZ1bmN0aW9uXHJcblx0Ly8gY2FsbHMgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kIG9yIHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRlcyxcclxuXHQvLyB0aGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhpcyBjeWNsZS4gSG93ZXZlciwgaWYgaXQgc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxyXG5cdC8vIGJlZm9yZSB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG4gICAgICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgICAgIGxldCBzdGF0c0FscmVhZHlFeGlzdGVkID0gRGV0YWlsZWRTdGF0cy5zdGF0cyAhPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRzQWxyZWFkeUV4aXN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHRpY2sgJHtzX2N1cnJlbnRUaWNrfTogYCk7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHQvLyB1cGRhdGUgcmVxdWVzdHMuIEFycmFuZ2Ugc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIGFuZCBwZXJmb3JtIHVwZGF0ZXMuXHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSkpKTtcclxuXHJcbiAgICAgICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAgICAgaWYgKCFzdGF0c0FscmVhZHlFeGlzdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLnN0b3AoIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cdC8vIGNhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0aW5nIGNvbXBvbmVudHNcclxuXHRpZiAoc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5BZnRlclVwZGF0ZTtcclxuXHRcdGxldCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlcyB0aGUgc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIHNvIHRoYXQgd2UgdXBkYXRlIFwidXBwZXJcIiBub2RlcyBiZWZvcmVcclxuLy8gdGhlIGxvd2VyIG9uZXMuIFRoaXMgY2FuIGhlbHAgYXZvaWQgdHdvIGNvbmRpdGlvbnM6XHJcbi8vXHQtIHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCB0d2ljZTogZmlyc3QgYmVjYXVzZSBpdCBjYWxsZWQgdXBkYXRlTWUsIGFuZCBzZWNvbmRcclxuLy9cdFx0YmVjYXVzZSBpdHMgcGFyZW50IHdhcyBhbHNvIHVwZGF0ZWQuXHJcbi8vXHQtIHVubmVjZXNzYXJ5IHJlbmRlcmluZyBhIGNoaWxkIGNvbXBvbmVudCBiZWZvcmUgaXQgaXMgcmVtb3ZlZCBieSB0aGUgcGFyZW50XHJcbi8vIFdlIGFsbG9jYXRlIGNvbnRpZ3VvdXMgYXJyYXkgd2hlcmUgaW5kaWNlcyBjb3JyZXNwb25kIHRvIGRlcHRoLiBFYWNoIGVsZW1lbnQgaW4gdGhpc1xyXG4vLyBhcnJheSB3aWxsIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgY29udGFpbiBhbiBhcnJheSBvZiBub2RlcyBhdCB0aGlzIGRlcHRoLlxyXG5mdW5jdGlvbiBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGU6IFNldDxWTj4pOiBWTltdW11cclxue1xyXG5cdC8vIGNyZWF0ZSBhIHNwYXJzZSBhcnJheSBvZiBjZXJ0YWluIHJlYXNvbmFibGUgc2l6ZS4gSWYgd2UgaGF2ZSBkZXB0aHMgZ3JlYXRlciB0aGFuIHRoaXMsXHJcblx0Ly8gdGhlIGFycmF5IHdpbGwgZ3JvdyBhdXRvbWF0aWNhbGx5IChhbHRob3VnaCBpdCBpcyBsZXNzIHBlcmZvcm1hbnQgaXQgaXMgc3RpbGwgYWNjZXB0YWJsZSkuXHJcblx0bGV0IHZuc0J5RGVwdGg6IFZOW11bXSA9IG5ldyBBcnJheTxWTltdPigzMik7XHJcblx0dm5zU2NoZWR1bGVkRm9yVXBkYXRlLmZvckVhY2goICh2bjogVk4pID0+XHJcblx0e1xyXG4gICAgICAgIC8vIGl0IGNhbiBoYXBwZW4gdGhhdCB3ZSBlbmNvdW50ZXIgYWxyZWFkeSB1bm1vdW50ZWQgdmlydHVhbCBub2RlcyAtIGlnbm9yZSB0aGVtXHJcbiAgICAgICAgaWYgKCF2bi5hbmNob3JETilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBhcnIgPSB2bnNCeURlcHRoW3ZuLmRlcHRoXTtcclxuXHRcdGlmICghYXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRhcnIgPSBbXTtcclxuXHRcdFx0dm5zQnlEZXB0aFt2bi5kZXB0aF0gPSBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2godm4pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuICAgIGxldCBkaXNwOiBWTkRpc3A7XHJcbiAgICBmb3IoIGxldCB2bnMgb2Ygdm5zQnlEZXB0aClcclxuXHR7XHJcbiAgICAgICAgLy8gdm5zQnlEZXB0aCBpcyBhIHNwYXJzZSBhcnJheSBzbyBpdCBjYW4gaGF2ZSBob2xlc1xyXG4gICAgICAgIGlmICghdm5zKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgZm9yKCBsZXQgdm4gb2Ygdm5zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBmbGFnIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBmb3IgdGhlIG5vZGVcclxuICAgICAgICAgICAgICAgIHZuLnVwZGF0ZVJlcXVlc3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuICAgICAgICAgICAgICAgIGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gc19jdXJyZW50VGljaylcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwID0geyBuZXdWTjogdm4sIGFjdGlvbjogVk5EaXNwQWN0aW9uLlVua25vd24sIG9sZFZOOiB2bn07XHJcbiAgICAgICAgICAgICAgICByZW5kZXJVcGRhdGVkTm9kZSggZGlzcCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkTm9kZURpc3BzLnB1c2goIGRpc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG5lYXJlc3QgZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gSWYgbm9ib2R5IGVsc2UsIGl0IGlzIGltcGxlbWVudGVkXHJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuICAgICAgICAgICAgICAgIGxldCBlcnJvclNlcnZpY2UgPSB2bi5nZXRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCBzX2N1cnJlbnRWTiA/IGdldFZOUGF0aCggc19jdXJyZW50Vk4pIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJCVUc6IHVwZGF0ZVZpcnR1YWwgdGhyZXcgZXhjZXB0aW9uIGJ1dCBTdGRFcnJvckhhbmRsaW5nIHNlcnZpY2Ugd2FzIG5vdCBmb3VuZC5cIiwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJhY2tDdXJyZW50Vk4oIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVkTm9kZURpc3BzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHRoZSBjb21taXQgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gVGhlIENvbW1pdCBwaGFzZSBjb25zaXN0cyBvZiB1cGRhdGluZyBET00gYW5kIGNhbGxpbmcgbGlmZS1jeWNsZVxyXG4vLyBtZXRob2RzIGRpZE1vdW50LCBkaWRVcGRhdGUgYW5kIHdpbGxVbm1vdW50LlxyXG5mdW5jdGlvbiBwZXJmb3JtQ29tbWl0UGhhc2UoIHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgZG9uJ3QgdW50aWNpcGF0ZSBhbnkgZXhjZXB0aW9ucyBoZXJlIGJlY2F1c2Ugd2UgZG9uJ3QgaW52b2tlIDNyZC1wYXJ0eSBjb2RlIGhlcmUuXHJcblx0Zm9yKCBsZXQgZGlzcCBvZiB1cGRhdGVkTm9kZURpc3BzKVxyXG5cdFx0Y29tbWl0VXBkYXRlZE5vZGUoIGRpc3ApO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGwgZnVuY3Rpb25zIHNjaGVkdWxlZCBiZWZvcmUgb3IgYWZ0ZXIgdXBkYXRlIGN5Y2xlLlxyXG5mdW5jdGlvbiBjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBmdW5jczogTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPiwgYmVmb3JlVXBkYXRlOiBib29sZWFuKVxyXG57XHJcblx0ZnVuY3MuZm9yRWFjaCggKHdyYXBwZXIsIGZ1bmMpID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHdyYXBwZXIoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgZnVuY3Rpb24gJHtiZWZvcmVVcGRhdGUgPyBcImJlZm9yZVwiIDogXCJhZnRlclwifSB1cGRhdGluZyBjb21wb25lbnRzXFxuYCwgZXJyKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIGFuZCByZW5kZXJzIHRoaXMgbm9kZSBhbmQgaXRzIHN1Yi1ub2Rlcy4gVGhpcyBtZXRob2QgaXMgaW52b2tlZFxyXG4vLyB3aGVuIGEgbm9kZSBpcyBmaXJzdCBtb3VudGVkLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoaXNcclxuLy8gbWV0aG9kICh3aGljaCBjYW4gYmUgb25seSBmcm9tIGNvbXBvbmVudHMnIHNldFNpdGUgb3IgcmVuZGVyIG1ldGhvZHMpLFxyXG4vLyB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIGhhbmRsZSB0aGUgZXJyb3IuIElmIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgZXJyb3IsIHRoZVxyXG4vLyBjb250ZW50IHJldHVybmVkIGZyb20gdGhlIGVycm9yIGhhbmRsaW5nIG1ldGhvZCBpcyByZW5kZXJlZDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uXHJcbi8vIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0IGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXRcclxuLy8gaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiByZW5kZXJOZXdOb2RlKCB2bjogVk4sIHBhcmVudDogVk4pOiB2b2lkXHJcbntcclxuXHR2bi5pbml0KCBwYXJlbnQsIHNfY3VycmVudENsYXNzQ29tcCk7XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTih2bik7XHJcblxyXG4gICAgLy8gaWYgd2lsbE1vdW50IGZ1bmN0aW9uIGlzIGRlZmluZWQgd2UgY2FsbCBpdCB3aXRob3V0IHRyeS9jYXRjaC4gSWYgaXQgdGhyb3dzLCB0aGUgY29udHJvbFxyXG4gICAgLy8gZ29lcyB0byBlaXRoZXIgdGhlIGFuY2VzdG9yIG5vZGUgdGhhdCBzdXBwb3J0cyBlcnJvciBoYW5kbGluZyBvciB0aGUgTWltYmwgdGljayBsb29wXHJcbiAgICAvLyAod2hpY2ggaGFzIHRyeS9jYXRjaCkuXHJcbiAgICBpZiAodm4ud2lsbE1vdW50KVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIHdpbGxNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gaWYgdGhlIG5vZGUgZG9lc24ndCBpbXBsZW1lbnQgYHJlbmRlcmAsIHRoZSBub2RlIG5ldmVyIGhhcyBhbnkgc3ViLW5vZGVzIChlLmcuIHRleHQgbm9kZXMpXHJcblx0aWYgKHZuLnJlbmRlcilcclxuXHR7XHJcbiAgICAgICAgLy8gd2UgY2FsbCB0aGUgcmVuZGVyIG1ldGhvZCB3aXRob3V0IHRyeS9jYXRjaFxyXG4gICAgICAgIGxldCBzdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG4gICAgICAgIGlmIChzdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHdlIGhhdmUgc3ViLW5vZGVzLCB3ZSBuZWVkIHRvIGNyZWF0ZSBub2RlcyBmb3IgdGhlbSBhbmQgcmVuZGVyLiBJZiBvdXIgbm9kZVxyXG4gICAgICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAgICAgLy8gZWl0aGVyIHRoZSB1bmNlc3RvciBub2RlIHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBvciB0byB0aGUgTWltYmwgdGljayBsb29wLlxyXG4gICAgICAgICAgICBpZiAoIXZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgc3ZuIG9mIHN1Yk5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKCBsZXQgc3ZuIG9mIHN1Yk5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyggYENhbGxpbmcgaGFuZGxlRXJyb3IoKSBvbiBub2RlICR7dm4ubmFtZX0uIEVycm9yOmAsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIHRoZSBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudCBidXQgd2UgZG8gaXQgd2l0aG91dCB0cnkvY2F0Y2ggdGhpcyB0aW1lOyBvdGhlcndpc2UsIHdlIG1heSBlbmRcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cCBpbiBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZuLnN1Yk5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKCBsZXQgc3ZuIG9mIHN1Yk5vZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpbnRlcmxpbmsgdGhlIHN1Yi1ub2RlcyB3aXRoIG5leHQgYW5kIHByZXYgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBsZXQgcHJldlZOOiBWTjtcclxuICAgICAgICAgICAgZm9yKCBsZXQgc3ZuIG9mIHN1Yk5vZGVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlZOKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWTi5uZXh0ID0gc3ZuO1xyXG4gICAgICAgICAgICAgICAgICAgIHN2bi5wcmV2ID0gcHJldlZOO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByZXZWTiA9IHN2bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhlIHN1Yi1ub2Rlc1xyXG4gICAgICAgIHZuLnN1Yk5vZGVzID0gc3ViTm9kZXM7XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIHByZXZpb3VzIGN1cnJlbnQgbm9kZS5cclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjcmVhdGVzIERPTSBub2RlcyBmb3IgdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0TmV3Tm9kZSggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTih2bik7XHJcblxyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBtb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuXHRsZXQgb3duRE4gPSB2bi5tb3VudCA/IHZuLm1vdW50KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIGlmIHdlIGhhdmUgb3VyIG93biBET00gbm9kZSwgYWRkIGl0IHVuZGVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdGlmIChvd25ETilcclxuXHRcdHZuLmFuY2hvckROLmluc2VydEJlZm9yZSggb3duRE4sIGJlZm9yZUROKTtcclxuXHJcblx0Ly8gaWYgdGhlIG5vZGUgaGFzIHN1Yi1ub2RlcywgYWRkIERPTSBub2RlcyBmb3IgdGhlbS4gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93blxyXG5cdC8vIERPTSBub2RlIHVzZSBpdCBhcyBhbiBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0aWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGF0IG5vZGVzIHRvIHVzZSBhcyBhbmNob3IgYW5kIFwiYmVmb3JlXCIgZm9yIHRoZSBzdWItbm9kZXNcclxuXHRcdGxldCBuZXdBbmNob3JETiA9IG93bkROID8gb3duRE4gOiBhbmNob3JETjtcclxuXHRcdGxldCBuZXdCZWZvcmVETiA9IG93bkROID8gbnVsbCA6IGJlZm9yZUROO1xyXG5cclxuXHRcdC8vIG1vdW50IGFsbCBzdWItbm9kZXNcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y29tbWl0TmV3Tm9kZSggc3ZuLCBuZXdBbmNob3JETiwgbmV3QmVmb3JlRE4pO1xyXG5cdH1cclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGRpZE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuICAgIGlmICh2bi5kaWRNb3VudClcclxuICAgICAgICB2bi5kaWRNb3VudCgpO1xyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIHByZXZpb3VzIGN1cnJlbnQgbm9kZS5cclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxscyB3aWxsVW5tb3VudCBvbiB0aGlzIFZOIGFuZCwgaWYgcmVxdWVzdGVkLCByZWN1cnNpdmVseSBvbiBpdHMgc3ViLW5vZGVzLiBUaGlzIGZ1bmN0aW9uIGlzXHJcbi8vIGNhbGxlZCBmb3IgZXZlcnkgbm9kZSBiZWluZyBkZXN0cnVjdGVkLiBJdCBpcyBjYWxsZWQgbm9uLXJlY3Vyc2l2ZWx5IG9uIHRoZSB2aXJ0dWFsIG5vZGVzIHRoYXRcclxuLy8gaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE9uIHN1Y2ggbm9kZXMsIHRoZSB1bm1vdW50IG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIG5vZGUgd2lsbCBiZVxyXG4vLyBwcm9wZXJseSBtYXJrZWQgYXMgdW5tb3VudGVkLiBGb3IgdmlydHVhbCBub2RlcyB0aGF0IGRvbid0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlLCB0aGlzXHJcbi8vIGZ1bmN0aW9uIGlzIGNhbGxlZCByZWN1cnNpdmVseS4gdGhlIHVubW91bnQgbWV0aG9kIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgdGhlc2Ugbm9kZXM7XHJcbi8vIHRoZXJlZm9yZSwgd2UgbmVlZCB0byBtYXJrIHRoZW0gYXMgdW5tb3VudGVkIGhlcmUuXHJcbmZ1bmN0aW9uIGNhbGxXaWxsVW5tb3VudCggdm46IFZOLCByZWN1cnNpdmU6IGJvb2xlYW4pXHJcbntcclxuICAgIC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHByb2Nlc3NlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbVxyXG4gICAgLy8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcbiAgICB2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG4gICAgLy8gZmlyc3Qgbm90aWZ5IHN1Yi1ub2RlcyBpZiByZWN1cnNpdmVcclxuICAgIGlmIChyZWN1cnNpdmUgJiYgdm4uc3ViTm9kZXMpXHJcblx0e1xyXG4gICAgICAgIGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gICAgICAgICAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oc3ZuKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxXaWxsVW5tb3VudCggc3ZuLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcbiAgICAgICAgICAgIHZuLnRlcm0oKTtcclxuICAgICAgICAgICAgdm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBub3RpZnkgb3VyIG5vZGVcclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFJlbW92ZWROb2RlKCB2bjogVk4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNpdmVseSB1bm1vdW50IHN1Yi1ub2RlcyBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50O1xyXG4gICAgLy8gaG93ZXZlciwgd2UgbmVlZCB0byBjYWxsIHRoZWlyIHdpbGxVbm1vdW50IG1ldGhvZHMuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIERPTVxyXG4gICAgLy8gbm9kZSwgd2UgbmVlZCB0byBjYWxsIHdpbGxVbm1vdW50IG9ubHkgb24gdGhlIG5vZGUgaXRzZWxmIGJlY2F1c2UgbGF0ZXIgd2Ugd2lsbCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIGl0cyBzdWItbm9kZXMuXHJcbiAgICBjYWxsV2lsbFVubW91bnQoIHZuLCBvd25ETiAhPSBudWxsKTtcclxuXHJcbiAgICAvLyBjYWxsIHVubW91bnQgb24gb3VyIG5vZGUgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgaGFzIGl0cyBvd24gRE4gb3Igbm90XHJcbiAgICBpZiAodm4udW5tb3VudClcclxuICAgIHtcclxuICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG4gICAgICAgIHZuLnVubW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWU7IG90aGVyd2lzZSwgcmVjdXJzZVxyXG4gICAgLy8gaW50byB0aGUgc3ViLW5vZGVzLlxyXG4gICAgaWYgKG93bkROKVxyXG4gICAgICAgIChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuICAgIGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRjb21taXRSZW1vdmVkTm9kZSggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcbiAgICAvLyBtYXJrIHRoZSBub2RlIGFzIHVubW91bnRlZFxyXG5cdHZuLnRlcm0oKTtcclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC5cclxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sIGdvZXMgdG8gZWl0aGVyIHRoZVxyXG4gICAgLy8gYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3AgKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblxyXG5cdC8vIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG5cdGlmIChzdWJOb2RlcylcclxuICAgIHtcclxuICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbVxyXG5cdC8vIHJlbmRlcmluZyBhZ2FpbiBpbiB0aGlzIGN5Y2xlLlxyXG5cdHZuLmxhc3RVcGRhdGVUaWNrID0gc19jdXJyZW50VGljaztcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkIG5vZGUgYWZ0ZXIgcHJvY2Vzc2luZyBpdHMgc3ViLW5vZGVzXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcbi8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcbmZ1bmN0aW9uIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHRsZXQgb2xkVk46IFZOLCBuZXdWTjogVk47XHJcblx0XHRsZXQgcGFyZW50Vk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTikgJiYgb2xkVk4ucHJlcGFyZVVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBwcmVwYXJlVXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC51cGRhdGVEaXNwID0gb2xkVk4ucHJlcGFyZVVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRyZW5kZXJVcGRhdGVkTm9kZSggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdFx0cmVuZGVyTmV3Tm9kZSggbmV3Vk4sIHBhcmVudFZOKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcGVyZm9ybXMgRE9NIHVwZGF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVkTm9kZSggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHQvLyB3YXMgbm8gY291bnRlcnBhcnQgbmV3IG5vZGUgdGhhdCB3b3VsZCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpLiBXZSBuZWVkIHRvIHJlbW92ZVxyXG5cdC8vIG9sZCBub2RlcyBmaXJzdCBiZWZvcmUgd2Ugc3RhcnQgaW5zZXJ0aW5nIG5ldyAtIG9uZSByZWFzb24gaXMgdG8gcHJvcGVybHkgbWFpbnRhaW5cclxuXHQvLyByZWZlcmVuY2VzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0Y29tbWl0UmVtb3ZlZE5vZGUoIHN2bik7XHJcblx0fVxyXG5cclxuXHQvLyBnZXQgdGhlIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nIHVwZGF0ZWQuIFRoaXMgaXMgYWx3YXlzIHRoZSBvbGRWTiBtZW1iZXIgb2ZcclxuXHQvLyB0aGUgZGlzcCBzdHJ1Y3R1cmUuXHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8gaXQgbWlnaHQgaGFwcGVuIHRoYXQgdGhlIG5vZGUgYmVpbmcgdXBkYXRlZCB3YXMgYWxyZWFkeSBkZWxldGVkIGJ5IGl0cyBwYXJlbnQuIENoZWNrXHJcblx0Ly8gZm9yIHRoaXMgc2l0dWF0aW9uIGFuZCBleGl0IGlmIHRoaXMgaXMgdGhlIGNhc2VcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBkZXRlcm1pbmUgdGhlIGFuY2hvciBub2RlIHRvIHVzZSB3aGVuIGluc2VydGluZyBuZXcgb3IgbW92aW5nIGV4aXN0aW5nIHN1Yi1ub2Rlcy4gSWZcclxuXHQvLyBvdXIgbm9kZSBoYXMgaXRzIG93biBETiwgaXQgd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzOyBvdGhlcndpc2UsIG91ciBub2RlJ3NcclxuXHQvLyBhbmNob3Igd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzIHRvby5cclxuXHRsZXQgb3duRE4gPSB2bi5vd25ETjtcclxuXHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHQvLyBuZWVkIHRvIGZpbmQgYSBET00gbm9kZSBiZWZvcmUgd2hpY2ggdG8gc3RhcnQgaW5zZXJ0aW5nIG5ldyBub2Rlcy4gTnVsbCBtZWFuc1xyXG5cdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdGxldCBiZWZvcmVETiA9IG93bkROICE9IG51bGwgPyBudWxsIDogZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLCBhbmNob3JETik7XHJcblxyXG5cdC8vIHJlLWNyZWF0ZSBvdXIgY3VycmVudCBsaXN0IG9mIHN1Yi1ub2RlcyAtIHdlIHdpbGwgcG9wdWxhdGUgaXQgd2hpbGUgdXBkYXRpbmcgdGhlbVxyXG5cdHZuLnN1Yk5vZGVzID0gZGlzcC5zdWJOb2RlRGlzcHMgPyBuZXcgQXJyYXk8Vk4+KGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHR7XHJcblx0XHRjb21taXRVcGRhdGVzQnlHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0YXJyYW5nZUdyb3VwcyggZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5Tm9kZXMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgaW5kaXZpZHVhbCBub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlc0J5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRzdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tpXSA9IHN2bjtcclxuXHJcblx0XHRpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBjb21taXRVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0Y29tbWl0VXBkYXRlZE5vZGUoIGRpc3ApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciBhbGwgdGhlIG5vZGVzIHVuZGVyIHRoaXMgVk4gc2hvdWxkIGJlIG1vdmVkLlxyXG5cdFx0XHRsZXQgc3ViTm9kZUROcyA9IGdldEltbWVkaWF0ZUROcyggb2xkVk4pO1xyXG5cdFx0XHRpZiAoc3ViTm9kZUROcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2hlY2sgd2hldGhlciB0aGUgbGFzdCBvZiB0aGUgRE9NIG5vZGVzIGFscmVhZHkgcmVzaWRlcyByaWdodCBiZWZvcmUgdGhlIG5lZWRlZCBub2RlXHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVETnNbc3ViTm9kZUROcy5sZW5ndGggLSAxXS5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIG9sZFZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoZSBmaXJzdCBvZiBET00gbm9kZXMgYmVjb21lIHRoZSBuZXh0IGJlZm9yZUROXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBzdWJOb2RlRE5zWzBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2luY2Ugd2UgYWxyZWFkeSBkZXN0cm95ZWQgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQsIHRoZSBjb2RlIGlzXHJcblx0XHRcdC8vIGlkZW50aWNhbCBmb3IgUmVwbGFjZSBhbmQgSW5zZXJ0IGFjdGlvbnNcclxuXHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRpZiAoZmlyc3RETiAhPSBudWxsKVxyXG5cdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdH1cclxuXHJcblx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKG5leHRWTilcclxuXHRcdHtcclxuXHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRWTiA9IHN2bjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBncm91cHMuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB1cGRhdGUgZ3JvdXBzXHJcbi8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgY3VyclN1Yk5vZGVJbmRleCA9IGRpc3BzLmxlbmd0aCAtIDE7XHJcblx0bGV0IG5leHRWTjogVk4sIHN2bjogVk4sIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTjogVk4sIGZpcnN0RE46IEROO1xyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cclxuXHRcdC8vIGZpcnN0IHVwZGF0ZSBldmVyeSBzdWItbm9kZSBpbiB0aGUgZ3JvdXAgYW5kIGl0cyBzdWItc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gZGlzcHNbal07XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdFx0Ly8gZm9yIHRoZSBVcGRhdGUgb3BlcmF0aW9uLCB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlOyBmb3IgdGhlIEluc2VydCBvcGVyYXRpb25cclxuXHRcdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0XHRzdm4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tjdXJyU3ViTm9kZUluZGV4LS1dID0gc3ZuO1xyXG5cclxuXHRcdFx0aWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb21taXROZXdOb2RlKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKG5leHRWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXh0Vk4gPSBzdm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0Ly8gZmlyc3QgYW5kIGxhc3QgRE5zIGZvciB0aGUgZ3JvdXBcclxuXHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdC8vIGdyb3VwIG9mIG5ldyBub2RlcyAoaWYgYW55KSBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcbmZ1bmN0aW9uIGFycmFuZ2VHcm91cHMoIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIFdlIGdvIGZyb20gdGhlIGxhc3QgZ3JvdXAgdG8gdGhlIHNlY29uZCBncm91cCBpbiB0aGUgbGlzdCBiZWNhdXNlIGFzIHNvb24gYXMgd2UgbW92ZWQgYWxsXHJcblx0Ly8gZ3JvdXBzIGV4Y2VwdCB0aGUgZmlyc3Qgb25lIGludG8gdGhlaXIgcmlnaHQgcGxhY2VzLCB0aGUgZmlyc3QgZ3JvdXAgd2lsbCBiZSBhdXRvbWF0aWNhbGx5XHJcblx0Ly8gaW4gdGhlIHJpZ2h0IHBsYWNlLiBXZSBhbHdheXMgaGF2ZSB0d28gZ3JvdXBzIChpIGFuZCBpLTEpLCB3aGljaCBhbGxvd3MgdXMgdG8gdW5kZXJzdGFuZFxyXG5cdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBzd2FwIHRoZW0uIElmIHdlIGRvIHdlIG1vdmUgdGhlIHNob3J0ZXIgZ3JvdXAuXHJcblx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdGxldCBwcmV2R3JvdXAgPSBncm91cHNbaS0xXTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgZ3JvdXAgc2hvdWxkIG1vdmUuIFdlIHRha2UgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBncm91cFxyXG5cdFx0Ly8gYW5kIGNvbXBhcmUgaXRzIEROJ3MgbmV4dCBzaWJsaW5nIHRvIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIi5cclxuXHRcdGlmIChncm91cC5sYXN0RE4gIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY3VycmVudCBncm91cCBub3cgcmVzaWRlcyBiZWZvcmUgdGhlIHByZXZpb3VzIGdyb3VwLCB0aGVuIHRoYXQgbWVhbnNcclxuXHRcdFx0XHQvLyB0aGF0IHdlIGFyZSBzd2FwcGluZyB0d28gZ3JvdXBzLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtb3ZlIHRoZSBzaG9ydGVyIG9uZS5cclxuXHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nID09PSBwcmV2R3JvdXAuZmlyc3RETiAmJiBncm91cC5jb3VudCA+IHByZXZHcm91cC5jb3VudClcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggZGlzcHMsIGdyb3VwLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0aGUgZ3JvdXAncyBmaXJzdCBETiBiZWNvbWVzIHRoZSBuZXcgYmVmb3JlRE4uIE5vdGUgdGhhdCBmaXJzdEROIGNhbm5vdCBiZSBudWxsXHJcblx0XHRcdC8vIGJlY2F1c2UgbGFzdEROIGlzIG5vdCBudWxsXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ2l2ZW4gZ3JvdXAgYmVmb3JlIHRoZSBnaXZlbiBET00gbm9kZS5cclxuZnVuY3Rpb24gbW92ZUdyb3VwKCBkaXNwczogVk5EaXNwW10sIGdyb3VwOiBWTkRpc3BHcm91cCwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIHN1Yk5vZGVWTik7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdHtcclxuXHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggc3ViTm9kZVZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5BY3Rpb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHBvc3NpYmxlIGFjdGlvbnMgdG8gcGVyZm9ybSBmb3IgbmV3IG5vZGVzIGR1cmluZ1xyXG4gKiByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIHN0ZW0gbm9kZTsgdGhhdCBpcyxcclxuXHQgKiBvbmx5IHRoZSBub2RlJ3MgY2hpbGRyZW4gc2hvdWxkIGJlIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRoaXMgbWVhbnMgdGhhdCBlaXRoZXIgdGhlcmUgd2FzIG5vIGNvdW50ZXJwYXJ0IG9sZCBub2RlXHJcblx0ICogZm91bmQgb3IgdGhlIGZvdW5kIG5vZGUgY2Fubm90IGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgb25lIG5vciBjYW4gdGhlIG9sZCBub2RlIGJlIHJldXNlZFxyXG5cdCAqIGJ5IHRoZSBuZXcgb25lIChlLmcuIHRoZXkgYXJlIG9mIGRpZmZlcmVudCB0eXBlKS5cclxuXHQgKi9cclxuXHRJbnNlcnQgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS4gVGhpcyB2YWx1ZSBpcyBhbHNvIHVzZWQgZm9yIEluc3RhbmNlVk5cclxuXHQgKiBub2RlcyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGFyZSB0aGUgc2FtZSBub2RlLlxyXG5cdCAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmNsYXNzIFZORGlzcEdyb3VwXHJcbntcclxuXHQvKiogcGFyZW50IFZORGlzcCB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MgKi9cclxuXHRwdWJsaWMgcGFyZW50RGlzcDogVk5EaXNwO1xyXG5cclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9XHJcbntcclxuXHQvKiogTmV3IHZpcnR1YWwgbm9kZSB0byBpbnNlcnQgb3IgdG8gdXBkYXRlIGFuIG9sZCBub2RlICovXHJcblx0bmV3Vk46IFZOO1xyXG5cclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZSAqL1xyXG5cdGFjdGlvbj86IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZC4gVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiAqL1xyXG5cdG9sZFZOPzogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHR1cGRhdGVEaXNwPzogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuIFRoaXMgaW5jbHVkZXMgbm9kZXMgdG8gYmUgdXBkYXRlZFxyXG5cdCAqIGFuZCB0byBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRzdWJOb2RlRGlzcHM/OiBWTkRpc3BbXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyB1cGRhdGUgb2YgdGhlIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlc1RvUmVtb3ZlPzogVk5bXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIGdyb3VwcyBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBpbnNlcnRlZC4gKi9cclxuXHRzdWJOb2RlR3JvdXBzPzogVk5EaXNwR3JvdXBbXTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyBvbGQgYW5kIG5ldyBjaGFpbnMgb2Ygc3ViLW5vZGVzIGFuZCBkZXRlcm1pbmVzIHdoYXQgbm9kZXMgc2hvdWxkIGJlIGNyZWF0ZWQsIGRlbGV0ZWRcclxuICogb3IgdXBkYXRlZC4gVGhlIHJlc3VsdCBpcyByZW1lbWJlcmVkIGFzIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGZvciBlYWNoIHN1Yi1ub2RlIGFuZCBhc1xyXG4gKiBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGRlbGV0ZWQuIEluIGFkZGl0aW9uLCB0aGUgbmV3IHN1Yi1ub2RlcyBhcmUgZGl2aWRlZFxyXG4gKiBpbnRvIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIGFuZCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuICogVGhlIGdyb3VwcyBhcmUgYnVpbHQgaW4gYSB3YXkgc28gdGhhdCBpZiBhIG5vZGUgc2hvdWxkIGJlIG1vdmVkLCBpdHMgZW50aXJlIGdyb3VwIGlzIG1vdmVkLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCBkaXNwOiBWTkRpc3AsIG5ld0NoYWluOiBWTltdKTogdm9pZFxyXG57XHJcbiAgICBsZXQgbmV3TGVuID0gbmV3Q2hhaW4gPyBuZXdDaGFpbi5sZW5ndGggOiAwO1xyXG4gICAgbGV0IG9sZENoYWluID0gZGlzcC5vbGRWTi5zdWJOb2RlcztcclxuICAgIGxldCBvbGRMZW4gPSBvbGRDaGFpbiA/IG9sZENoYWluLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgLy8gaWYgZWl0aGVyIG9sZCBvciBuZXcgb3IgYm90aCBjaGFpbnMgYXJlIGVtcHR5LCB3ZSBkbyBzcGVjaWFsIHRoaW5nc1xyXG4gICAgaWYgKG5ld0xlbiA9PT0gMCAmJiBvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYm90aCBjaGFpbnMgYXJlIGVtcHR5IC0gZG8gbm90aGluZ1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5ld0xlbiA9PT0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBuZXcgY2hhaW4gaXMgZW1wdHkgLSBkZWxldGUgYWxsIG9sZCBub2Rlc1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSA9IG9sZENoYWluO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG9sZExlbiA9PT0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgY2hhaW4gaXMgZW1wdHkgLSBpbnNlcnQgYWxsIG5ldyBub2Rlc1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzID0gbmV3Q2hhaW4ubWFwKCBuZXdWTiA9PiB7IHJldHVybiB7IG5ld1ZOLCBhY3Rpb246IFZORGlzcEFjdGlvbi5JbnNlcnR9IH0pO1xyXG4gICAgICAgIGlmIChuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZUdyb3VwcyA9IFtuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIFZORGlzcEFjdGlvbi5JbnNlcnQsIDAsIG5ld0xlbiAtIDEpXTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRldGVybWluZSB3aGV0aGVyIHJlY3ljbGluZyBvZiBub24tbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2RlcyBieSBub24tbWF0Y2hpbmcgbmV3XHJcbiAgICAvLyBrZXllZCBzdWItbm9kZXMgaXMgYWxsb3dlZC4gSWYgdXBkYXRlIHN0cmF0ZWd5IGlzIG5vdCBkZWZpbmVkIGZvciB0aGUgbm9kZSwgdGhlXHJcbiAgICAvLyByZWN5Y2xpbmcgaXMgYWxsb3dlZC5cclxuICAgIGxldCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHRydWU7XHJcbiAgICBsZXQgdXBkYXRlU3RyYXRlZ3kgPSBkaXNwLm9sZFZOID8gZGlzcC5vbGRWTi51cGRhdGVTdHJhdGVneSA6IHVuZGVmaW5lZDtcclxuICAgIGlmICh1cGRhdGVTdHJhdGVneSAmJiB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nID0gdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc7XHJcblxyXG4gICAgLy8gcHJvY2VzcyB0aGUgc3BlY2lhbCBjYXNlIHdpdGggYSBzaW5nbGUgc3ViLW5vZGUgaW4gYm90aCBvbGQgYW5kIG5ldyBjaGFpbnMganVzdFxyXG4gICAgLy8gdG8gYXZvaWQgY3JlYXRpbmcgdGVtcG9yYXJ5IHN0cnVjdHVyZXNcclxuICAgIGlmIChuZXdMZW4gPT09IDEgJiYgb2xkTGVuID09PSAxKVxyXG4gICAge1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzID0gW2NyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcCwgbmV3Q2hhaW5bMF0sIG9sZENoYWluWzBdLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyldO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBpZiBlaXRoZXIgb2xkIGFuZCBuZXcgY2hhaW5zIGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBub2RlIGFuZCB3ZSBuZWVkIHRvXHJcbiAgICAvLyByZWNvbmNpbGUgdGhlIGNoYWlucy4gRmlyc3QgZ28gb3ZlciB0aGUgb2xkIG5vZGVzIGFuZCBidWlsZCBhIG1hcCBvZiBrZXllZCBvbmVzIGFuZCBhXHJcbiAgICAvLyBsaXN0IG9mIG5vbi1rZXllZCBvbmVzLiBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBub2RlIHdpdGggdGhlIHNhbWUga2V5LCB0aGUgZmlyc3Qgb25lXHJcbiAgICAvLyBnb2VzIHRvIHRoZSBtYXAgYW5kIHRoZSByZXN0IHRvIHRoZSB1bmxleWVkIGxpc3QuXHJcbiAgICBsZXQgb2xkS2V5ZWRNYXAgPSBuZXcgTWFwPGFueSxWTj4oKTtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdDogVk5bXSA9IFtdO1xyXG4gICAgbGV0IGtleTogYW55O1xyXG4gICAgZm9yKCBsZXQgb2xkVk4gb2Ygb2xkQ2hhaW4pXHJcbiAgICB7XHJcbiAgICAgICAga2V5ID0gb2xkVk4ua2V5O1xyXG4gICAgICAgIGlmIChrZXkgIT0gbnVsbCAmJiAhb2xkS2V5ZWRNYXAuaGFzKCBrZXkpKVxyXG4gICAgICAgICAgICBvbGRLZXllZE1hcC5zZXQoIGtleSwgb2xkVk4pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2xkVW5rZXllZExpc3QucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbWViZXIgdGhlIGxlbmd0aCBvZiB0aGUgdW5rZXllZCBsaXN0O1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0TGVuZ3RoID0gb2xkVW5rZXllZExpc3QubGVuZ3RoO1xyXG5cclxuICAgIC8vIHByZXBhcmUgYXJyYXkgZm9yIFZORGlzcCBvYmplY3RzIGZvciBuZXcgbm9kZXNcclxuICAgIGRpc3Auc3ViTm9kZURpc3BzID0gbmV3IEFycmF5KCBuZXdMZW4pO1xyXG5cclxuICAgIC8vIGxvb3Agb3ZlciBuZXcgbm9kZXNcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdEluZGV4ID0gMDtcclxuICAgIG5ld0NoYWluLmZvckVhY2goIChuZXdWTiwgaW5kZXgpID0+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZFZOOiBWTiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRyeSB0byBsb29rIHVwIHRoZSBvbGQgbm9kZSBieSB0aGUgbmV3IG5vZGUncyBrZXkgaWYgZXhpc3RzXHJcbiAgICAgICAga2V5ID0gbmV3Vk4ua2V5O1xyXG4gICAgICAgIGlmIChrZXkgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkS2V5ZWRNYXAuZ2V0KCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgZmluZCB0aGUgb2xkIG5vZGUgYnkgdGhlIGtleSwgcmVtb3ZlIGl0IGZyb20gdGhlIG1hcDsgYWZ0ZXIgdGhlXHJcbiAgICAgICAgICAgIC8vIHJlY29uY2lsaWF0aW9uLCBhbGwgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGlzIG1hcCB3aWxsIGJlIG1hcmtlZCBmb3IgcmVtb3ZhbC5cclxuICAgICAgICAgICAgaWYgKG9sZFZOKVxyXG4gICAgICAgICAgICAgICAgb2xkS2V5ZWRNYXAuZGVsZXRlKCBrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBvbGQgbm9kZXMgaW4gdGhlIHVua2V5ZWQgbGlzdCB1c2UgdGhlIG5leHQgb25lXHJcbiAgICAgICAgaWYgKCFvbGRWTiAmJiBvbGRVbmtleWVkTGlzdEluZGV4ICE9IG9sZFVua2V5ZWRMaXN0TGVuZ3RoKVxyXG4gICAgICAgICAgICBvbGRWTiA9IG9sZFVua2V5ZWRMaXN0W29sZFVua2V5ZWRMaXN0SW5kZXgrK107XHJcblxyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzW2luZGV4XSA9IGNyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcCwgbmV3Vk4sIG9sZFZOLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvbGQgbm9kZXMgcmVtYW5pbmcgaW4gdGhlIGtleWVkIG1hcCBhbmQgaW4gdGhlIHVua2V5ZWQgbGlzdCB3aWxsIGJlIHJlbW92ZWRcclxuICAgIGlmIChvbGRLZXllZE1hcC5zaXplID4gMCB8fCBvbGRVbmtleWVkTGlzdEluZGV4IDwgb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG5cclxuICAgICAgICBvbGRLZXllZE1hcC5mb3JFYWNoKCBvbGRWTiA9PiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pKTtcclxuICAgICAgICBmb3IoIGxldCBpID0gb2xkVW5rZXllZExpc3RJbmRleDsgaSA8IG9sZFVua2V5ZWRMaXN0TGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRVbmtleWVkTGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRClcclxuICAgICAgICBidWlsZFN1Yk5vZGVHcm91cHMoIGRpc3ApO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOPzogVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nPzogYm9vbGVhbik6IFZORGlzcFxyXG57XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwID0geyBuZXdWTiB9O1xyXG4gICAgaWYgKCFvbGRWTilcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcbiAgICBlbHNlIGlmIChvbGRWTiA9PT0gbmV3Vk4gfHxcclxuICAgICAgICAoKGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nIHx8IG5ld1ZOLmtleSA9PT0gb2xkVk4ua2V5KSAmJiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTiwgbmV3Vk4pKSlcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgbm9kZSBjYW4gYmUgdXBkYXRlZCB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIG5ldyBub2RlXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG4gICAgICAgIHN1YkRpc3Aub2xkVk4gPSBvbGRWTjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgbm9kZSBjYW5ub3QgYmUgdXBkYXRlZCwgc28gdGhlIG5ldyBub2RlIHdpbGwgYmUgaW5zZXJ0ZWQgYW5kIHRoZSBvbGQgbm9kZSB3aWxsXHJcbiAgICAgICAgLy8gYmUgcmVtb3ZlZFxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcbiAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3ViRGlzcDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnJvbSBhIGZsYXQgbGlzdCBvZiBuZXcgc3ViLW5vZGVzIGJ1aWxkcyBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgZWl0aGVyXHJcbiAqIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFN1Yk5vZGVHcm91cHMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG4gICAgLy8gd2UgYXJlIGhlcmUgb25seSBpZiB3ZSBoYXZlIHNvbWUgbnVtYmVyIG9mIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uc1xyXG4gICAgbGV0IGNvdW50ID0gZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoO1xyXG5cclxuICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGxlc3MgdGhlblxyXG4gICAgICAgIC8vIHRoZSBwcmUtZGV0ZXJtaW5lZCB0aHJlc2hvbGRcclxuICAgICAgICBpZiAoY291bnQgPD0gTk9fR1JPVVBfVEhSRVNIT0xEIHx8IGNvdW50ID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGdyb3VwcyBhbmQgY3JlYXRlIHRoZSBmaXJzdCBncm91cCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBub2RlXHJcbiAgICBsZXQgZ3JvdXA6IFZORGlzcEdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBkaXNwLnN1Yk5vZGVEaXNwc1swXS5hY3Rpb24sIDApO1xyXG4gICAgZGlzcC5zdWJOb2RlR3JvdXBzID0gW2dyb3VwXTtcclxuXHJcbiAgICAvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGUgd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXBcclxuICAgIC8vIG9yIHB1dCB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlblxyXG4gICAgLy8gYSBuZXcgb25lLlxyXG4gICAgbGV0IGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG4gICAgbGV0IHN1YkRpc3A6IFZORGlzcDtcclxuICAgIGZvciggbGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKylcclxuICAgIHtcclxuICAgICAgICBzdWJEaXNwID0gZGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcbiAgICAgICAgYWN0aW9uID0gc3ViRGlzcC5hY3Rpb247XHJcbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4LiBEZWNyZW1lbnQgdGhlIGl0ZXJhdGluZyBpbmRleCBzbyB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IGl0ZXJhdGlvbiB3aWxsIG9wZW4gYSBuZXcgZ3JvdXAuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgYmUgaGVyZSBmb3IgYSBub2RlXHJcbiAgICAgICAgICAgIC8vIHRoYXQgc3RhcnRzIGEgbmV3IGdyb3VwIGJlY2F1c2UgZm9yIHN1Y2ggbm9kZSBkaXNwLmFjdGlvbiA9PT0gZ3JvdXBBY3Rpb24uXHJcbiAgICAgICAgICAgIGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGFuIFwidXBkYXRlXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG4gICAgICAgICAgICAvLyBpdHMgbmV4dCBzaWJsaW5nIGluIHRoZSBuZXcgbGlzdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbmV4dCBzaWJsaW5nIGluIHRoZSBvbGQgbGlzdC5cclxuICAgICAgICAgICAgLy8gVGhlIGxhc3Qgbm9kZSB3aWxsIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGFmdGVyIHRoZSBsb29wLlxyXG4gICAgICAgICAgICBpZiAoZGlzcC5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gc3ViRGlzcC5vbGRWTi5wcmV2KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgY3VycmVudCBpbmRleC5cclxuICAgICAgICAgICAgICAgIGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBhY3Rpb24sIGkpO1xyXG4gICAgICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcbiAgICAgICAgLy8gbmV4dCBub2RlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIGxhc3QgZ3JvdXBcclxuICAgIGlmIChncm91cCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGdyb3VwLmxhc3QgPSBjb3VudCAtIDE7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB1cGRhdGUgb2YgdGhlIGdpdmVuIG9sZCBub2RlIGZyb20gdGhlIGdpdmVuIG5ldyBub2RlIGlzIHBvc3NpYmxlLiBVcGRhdGVcclxuICogaXMgcG9zc2libGUgaWYgdGhlIHR5cGVzIG9mIG5vZGVzIGFyZSB0aGUgc2FtZSBhbmQgZWl0aGVyIHRoZSBpc1VwZGF0ZVBvc3NpYmxlIG1ldGhvZCBpcyBub3RcclxuICogZGVmaW5lZCBvbiB0aGUgb2xkIG5vZGUgb3IgaXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVcGRhdGVQb3NzaWJsZSggb2xkVk46IFZOLCBuZXdWTjogVk4pOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKG9sZFZOLmNvbnN0cnVjdG9yID09PSBuZXdWTi5jb25zdHJ1Y3RvciAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGZpcnN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0Rmlyc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRGaXJzdEROKCBzdm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsYXN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0TGFzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdFx0aWYgKGRuICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiBnZXRJbW1lZGlhdGVETnMoIHZuOiBWTik6IEROW11cclxue1xyXG5cdGxldCBhcnI6IEROW10gPSBbXTtcclxuXHRjb2xsZWN0SW1tZWRpYXRlRE5zKCB2biwgYXJyKTtcclxuXHRyZXR1cm4gYXJyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbGxlY3RzIGFsbCBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlICh0aGF0IGlzLFxyXG4vLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlKSBpbnRvIHRoZSBnaXZlbiBhcnJheS5cclxuZnVuY3Rpb24gY29sbGVjdEltbWVkaWF0ZUROcyggdm46IFZOLCBhcnI6IEROW10pOiB2b2lkXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRhcnIucHVzaCggdm4ub3duRE4pO1xyXG5cdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3RcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y29sbGVjdEltbWVkaWF0ZUROcyggc3ZuLCBhcnIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBGaW5kcyB0aGUgZmlyc3QgRE9NIG5vZGUgaW4gdGhlIHRyZWUgb2YgdmlydHVhbCBub2RlcyB0aGF0IGNvbWVzIGFmdGVyIG91ciBub2RlIHRoYXQgaXMgYVxyXG4vLyBjaGlsZCBvZiBvdXIgb3duIGFuY2hvciBlbGVtZW50LiBXZSB1c2UgaXQgYXMgYSBub2RlIGJlZm9yZSB3aGljaCB0byBpbnNlcnQvbW92ZSBub2RlcyBvZlxyXG4vLyBvdXIgc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy4gVGhlIGFsZ29yaXRobSBmaXJzdCBnb2VzIHRvIHRoZSBuZXh0XHJcbi8vIHNpYmxpbmdzIG9mIG91ciBub2RlIGFuZCB0aGVuIHRvIHRoZSBuZXh0IHNpYmxpbmdzIG9mIG91ciBwYXJlbnQgbm9kZSByZWN1cnNpdmVseS4gSXQgc3RvcHNcclxuLy8gd2hlbiB3ZSBlaXRoZXIgZmluZCBhIERPTSBub2RlICh0aGVuIGl0IGlzIHJldHVybmVkKSBvciBmaW5kIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50XHJcbi8vICh0aGVuIG51bGwgaXMgcmV0dXJuZWQpLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzIGZvciBvdXJcclxuLy8gc3ViLW5vZGVzIHN0YXJ0cyBhbmQsIHRoZXJlZm9yZSwgaXQgb25seSB0cmF2ZXJzZXMgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuOiBWTiwgYW5jaG9yRE46IEROKTogRE5cclxue1xyXG5cdC8vIGNoZWNrIGlmIHdlIGhhdmUgc2libGluZyBET00gbm9kZXMgYWZ0ZXIgb3VyIGxhc3Qgc3ViLW5vZGUgLSB0aGF0IG1pZ2h0IGJlIGVsZW1lbnRzXHJcblx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRpZiAodm4uc3ViTm9kZXMgJiYgdm4uc3ViTm9kZXMubGVuZ3RoID4gMClcclxuXHR7XHJcblx0XHRsZXQgZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW3ZuLnN1Yk5vZGVzLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmIChkbilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdGlmIChuZXh0U2libGluZyAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRmb3IoIGxldCBudm4gPSB2bi5uZXh0OyBudm4gIT09IHVuZGVmaW5lZDsgbnZuID0gbnZuLm5leHQpXHJcblx0e1xyXG5cdFx0aWYgKCFudm4uYW5jaG9yRE4pXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vIG5vdGUgdGhhdCBnZXRMYXN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXQgaXRcclxuXHRcdC8vIGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdC8vIGFuY2hvciBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSB3YW50ZWQgbm9kZS5cclxuXHRcdGNvbnN0IGRuID0gZ2V0TGFzdEROKCBudm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0cmV0dXJuIHZuLnBhcmVudCAmJiB2bi5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROID8gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLnBhcmVudCwgYW5jaG9yRE4pIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGFycmF5IG9mIG5vZGUgbmFtZXMgc3RhcnRpbmcgd2l0aCB0aGlzIG5vZGUgYW5kIHVwIHVudGlsIHRoZSB0b3AtbGV2ZWwgbm9kZS5cclxuZnVuY3Rpb24gZ2V0Vk5QYXRoKCB2bjogVk4pOiBzdHJpbmdbXVxyXG57XHJcblx0bGV0IGRlcHRoID0gdm4uZGVwdGg7XHJcblx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0Zm9yKCBsZXQgaSA9IDAsIG52bjogVk4gPSB2bjsgaSA8IGRlcHRoOyBpKyssIG52biA9IG52bi5wYXJlbnQpXHJcblx0e1xyXG5cdFx0cGF0aFtpXSA9IG52bi5uYW1lICsgKG52bi5jcmVhdG9yICYmIG52bi5jcmVhdG9yLnZuID8gYCAoY3JlYXRlZCBieSAke252bi5jcmVhdG9yLnZuLm5hbWV9KWAgOiBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgZWl0aGVyIGEgc2luZ2xlIHZpcnR1YWwgbm9kZSBvciBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuXHJcbi8vIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhbiBhcnJheSwgdGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXRcclxuLy8gY29udGVudCBpcyBhbiBhcnJheSwgdGhlbiBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50c1xyXG4vLyBtaWdodCBhbHNvIGJlIGFycmF5cywgdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTiB8IFZOW11cclxue1xyXG5cdGlmIChjb250ZW50ID09IG51bGwgfHwgY29udGVudCA9PT0gZmFsc2UpXHJcblx0e1xyXG5cdFx0Ly8gdGhlIGNvbXBhcmlzb24gYWJvdmUgY292ZXJzIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQmFzZSlcclxuXHRcdHJldHVybiBjb250ZW50O1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdHJldHVybiBjb250ZW50Lmxlbmd0aCA+IDAgPyBuZXcgVGV4dFZOKCBjb250ZW50KSA6IG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgKHRoaXMgY2FuIG9ubHkgYmUgYW4gSW5zdGFuY2UgY29tcG9uZW50KSBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIFZOLFxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMgZXhpc3RpbmcgVk47IG90aGVyd2lzZSBjcmVhdGUgYSBuZXcgb25lLlxyXG5cdFx0cmV0dXJuIChjb250ZW50IGFzIElDb21wb25lbnQpLnZuXHJcblx0XHRcdFx0XHRcdD8gKGNvbnRlbnQgYXMgSUNvbXBvbmVudCkudm4gYXMgVk5cclxuXHRcdFx0XHRcdFx0OiBuZXcgSW5kZXBlbmRlbnRDb21wVk4oIGNvbnRlbnQgYXMgSUNvbXBvbmVudCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGNvbnRlbnQpKVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjb250ZW50KTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCB7IHByb21pc2U6IGNvbnRlbnR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGNvbnRlbnQpXHJcblx0XHRyZXR1cm4gdm4gfHwgbmV3IEZ1bmNQcm94eVZOKCB7IGZ1bmM6IGNvbnRlbnQsIHRoaXNBcmc6IHNfY3VycmVudENsYXNzQ29tcH0pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC4gQ2FsbHMgdGhlIGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQgYW5kXHJcbi8vIGlmIGl0IHJldHVybnMgYSBzaW5nbGUgbm9kZSwgd3JhcHMgaXQgaW4gYW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY29udGVudDogYW55KTogVk5bXVxyXG57XHJcblx0bGV0IG5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudCk7XHJcblx0cmV0dXJuICFub2RlcyA/IG51bGwgOiBBcnJheS5pc0FycmF5KG5vZGVzKSA/IChub2Rlcy5sZW5ndGggPT09IDAgPyBudWxsIDogbm9kZXMpIDogW25vZGVzXTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgb2YgaXRlbXMuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBhcnI6IGFueVtdKTogVk5bXVxyXG57XHJcblx0aWYgKGFyci5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IG5vZGVzOiBWTltdID0gW107XHJcblx0Zm9yKCBsZXQgaXRlbSBvZiBhcnIpXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1Ob2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGl0ZW0pO1xyXG5cdFx0aWYgKGl0ZW1Ob2RlcyA9PT0gbnVsbClcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBpdGVtTm9kZXMpKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB2biBvZiBpdGVtTm9kZXMpXHJcblx0XHRcdFx0bm9kZXMucHVzaCggdm4pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRub2Rlcy5wdXNoKCBpdGVtTm9kZXMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5vZGVzLmxlbmd0aCA+IDAgPyBub2RlcyA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZzogYW55LCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pOiBWTiB8IFZOW11cclxue1xyXG5cdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IEZyYWdtZW50KVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBGdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgRnVuY1Byb3h5UHJvcHM7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIHByb3BzLmZ1bmMsIGZ1bmNQcm94eVByb3BzLmtleSk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNQcm94eVZOKCBwcm9wcyk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSB1cGRhdGVBcmdzIHByb3BlcnR5IGlzIHRydWUsIHdlIHJlcGxhY2UgdGhlIGFyZ3VtZW50cyBpbiB0aGUgbm9kZTsgb3RoZXJ3aXNlLFxyXG5cdFx0XHQvLyB3ZSBpZ25vcmUgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRpZiAoZnVuY1Byb3h5UHJvcHMucmVwbGFjZUFyZ3MpXHJcblx0XHRcdFx0dm4ucmVwbGFjZUFyZ3MoIGZ1bmNQcm94eVByb3BzLmFyZ3MpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmICh0YWcgPT09IFByb21pc2VQcm94eSlcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzIHx8ICFwcm9wcy5wcm9taXNlKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZVByb3h5Vk4oIHByb3BzLCBjaGlsZHJlbik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgYWx3YXlzIGFuIGFycmF5LiBBIGNvbXBvbmVudCBjYW4gc3BlY2lmeSB0aGF0IGl0cyBjaGlsZHJlbiBhcmVcclxuXHRcdC8vIGFuIGFycmF5IG9mIGEgY2VydGFpbiB0eXBlLCBlLmcuIGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIElDb21wb25lbnRDbGFzcywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBuZXcgRnVuY1ZOKCB0YWcgYXMgRnVuY0NvbXBUeXBlLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRlbHNlXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB0YWcgaW4ganN4IHByb2Nlc3NpbmcgZnVuY3Rpb246IFwiICsgdGFnKTtcclxuXHQvLy8gI2VuZGlmXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJRXJyb3JIYW5kbGluZ1NlcnZpY2V9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLndhaXRpbmcgPyBudWxsIDogdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHR0aGlzLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgVW5oYW5kbGVkIGVycm9yIGluIGNvbXBvbmVudFxcbiR7cGF0aC5qb2luKFwiXFxuXCIpfVxcbmAsIGVycik7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGEgcHJvbWlzZSB0aHJvd24gYXMgZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc3ltUm9vdE1vdW50UG9pbnQgPSBTeW1ib2woXCJzeW1Sb290TW91bnRQb2ludFwiKTtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcbiAgICAgICAgKHJlYWxBbmNob3JETiBhcyBhbnkpW3N5bVJvb3RNb3VudFBvaW50XSA9IHJvb3RWTjtcclxuICAgICAgICByb290Vk4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3N5bVJvb3RNb3VudFBvaW50XTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzeW1Sb290TW91bnRQb2ludF07XHJcblxyXG5cdC8vIGRlc3RydWN0IHRoZSByb290IG5vZGUgKGFzeW5jaHJvbm91c2x5KVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0cm9vdFZOLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVNjaGVkdWxlciwgcmVnaXN0ZXJTY2hlZHVsZXIsIHNldERlZmF1bHRTY2hlZHVsZXJUeXBlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtzY2hlZHVsZUZ1bmNDYWxsfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2NoZWR1bGVyIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBzY2hlZHVsaW5nIHdyaXRpbmcgc3R5bGUtcmVsYXRlZCBpbmZvcm1hdGlubyB0b1xyXG4gKiB0aGUgRE9NIHVzaW5nIHRoZSBNaW1ibCBzY2hlZHVsaW5nIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcbmNsYXNzIFN0eWxlU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBDYWxsYmFjayB0byBjYWxsIHRvIHdyaXRlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIHRoaXMub25VcGRhdGUsIGZhbHNlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRvRE9NVXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyBzdHlsZSBzY2hlZHVsZXIgdXNlZCBieSBNaW1ibCB0byBzY2hlZHVsZSB3cml0aW5nIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2luaXRTdHlsZVNjaGVkdWxlcigpOiBudW1iZXJcclxue1xyXG4gICAgbGV0IHNjaGVkdWxlclR5cGUgPSByZWdpc3RlclNjaGVkdWxlciggbmV3IFN0eWxlU2NoZWR1bGVyKCkpO1xyXG4gICAgc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJVGV4dFZOfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJVGV4dFZOXHJcbntcclxuXHQvLyBUZXh0IGZvciBhIHNpbXBsZSB0ZXh0IG5vZGUuXHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcblx0Ly8gVGV4dCBET00gbm9kZVxyXG5cdHB1YmxpYyB0ZXh0Tm9kZTogVGV4dDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5UZXh0OyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiI3RleHRcIjsgfVxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgb3duRE4oKTogRE4geyByZXR1cm4gdGhpcy50ZXh0Tm9kZTsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gdGV4dCBub2RlcyBkb24ndCBoYXZlIHN1Yi1ub2Rlc1xyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCB0aGlzLnRleHQgIT09IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZS5ub2RlVmFsdWUgPSB0aGlzLnRleHQgPSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0O1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lWTm9kZSwgSUNvbXBvbmVudCwgVXBkYXRlU3RyYXRlZ3l9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vIFVzZSB0eXBlIEROIHRvIHJlZmVyIHRvIERPTSdzIE5vZGUgY2xhc3MuIFRoZSBET00gbm9kZXMgdGhhdCB3ZSBhcmUgZGVhbGluZyB3aXRoIGFyZVxyXG4vLyBlaXRoZXIgb2YgdHlwZSBFbGVtZW50IG9yIFRleHQuXHJcbmV4cG9ydCB0eXBlIEROID0gTm9kZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTiBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgYXJlIG9wdGlvbmFsbHkgaW1wbGVtZW50ZWQgYnkgYWxsXHJcbiAqIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cmVhZG9ubHkgc3RhdHNDYXRlZ29yeTogU3RhdHNDYXRlZ29yeTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IElDb21wb25lbnQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdG5leHQ/OiBWTjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwcmV2PzogVk47XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlcz86IFZOW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogSUNvbXBvbmVudCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHRlcm0oKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vXHJcblx0Ly8gTGlmZSBjeWNsZSBtZXRob2RzXHJcblx0Ly9cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBSZXR1cm5zIGNvbnRlbnQgdGhhdCBjb21wcmlzZXMgdGhlIGNoaWxkcmVuIG9mIHRoZSBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmVcclxuXHQvLyBzdWItbm9kZXMsIG51bGwgc2hvdWxkIGJlIHJldHVybmVkLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhhdCBtZWFucyB0aGUgbm9kZVxyXG5cdC8vIG5ldmVyIGhhcyBjaGlsZHJlbiAtIGZvciBleGFtcGxlIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlbmRlcj8oKTogYW55O1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0ZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZCBvbmx5IG9uIG5vZGVzXHJcblx0Ly8gdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IHJlbGVhc2UgdGhlIGludGVybmFsbHkgaGVsZCByZWZlcmVuY2VcclxuXHQvLyB0byB0aGUgRE9NIG5vZGUgLSB0aGUgYWN0dWFsIHJlbW92YWwgb2YgdGhlIG5vZGUgZnJvbSBET00gaXMgZG9uZSBieSB0aGUgaW5mcmFzdHJ1Y3R1cmUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBJZiB0aGlzIG1ldGhvZCBpc1xyXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCB0aGUgdXBkYXRlIGlzIGNvbnNpZGVyZWQgcG9zc2libGUgLSBlLmcuIGZvciB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRpc1VwZGF0ZVBvc3NpYmxlPyggbmV3Vk46IFZOKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwcmVwYXJlVXBkYXRlPyggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRjb21taXRVcGRhdGU/KCBuZXdWTjogVk4pOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCB0aGUgbm9kZVxyXG5cdC8vIGRvZXNuJ3Qgc3VwcG9ydCBlcnJvciBoYW5kbGluZy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cmVhZG9ubHkgc3VwcG9ydHNFcnJvckhhbmRsaW5nPzogYm9vbGVhbjtcclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuIFRoZSByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyBwcmVwYXJlVXBkYXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTlVwZGF0ZURpc3Bcclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvdWxkQ29tbWl0ID0gc2hvdWxkQ29tbWl0O1xyXG5cdFx0dGhpcy5zaG91bGRSZW5kZXIgPSBzaG91bGRSZW5kZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCBmYWxzZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3RvY2tWYWx1ZSggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNob3VsZENvbW1pdFxyXG5cdFx0XHQ/IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLkRvQ29tbWl0Tm9SZW5kZXJcclxuXHRcdFx0OiBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdE5vUmVuZGVyO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJQ29tcG9uZW50LCBTY2hlZHVsZWRGdW5jVHlwZSwgUmVmUHJvcFR5cGUsIHNldFJlZn0gZnJvbSBcIi4uL2FwaS9taW1cIjtcclxuaW1wb3J0IHtcclxuICAgIFZOLCBETiwgbm90aWZ5U2VydmljZVVucHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkLCByZXF1ZXN0Tm9kZVVwZGF0ZSxcclxuICAgIHNjaGVkdWxlRnVuY0NhbGwsIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCB3cmFwQ2FsbGJhY2tXaXRoVk5cclxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgaW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbiAgICBsZXQgZ19uZXh0Vk5EZWJ1Z0lEID0gMTtcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQmFzZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZOQmFzZSBpbXBsZW1lbnRzIFZOXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCBuYW1lKCk6IHN0cmluZztcclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk5CYXNlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cHVibGljIGNyZWF0b3I6IElDb21wb25lbnQ7XHJcblxyXG5cdC8vIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRwdWJsaWMgbmV4dDogVk5CYXNlO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBwcmV2OiBWTkJhc2U7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzIC0gYm90aCBrZXllZCBhbmQgdW5rZXllZCAtIGRlZmluZWQgb25seSBpZiB0aGVyZSBhcmUgc29tZSBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzOiBWTkJhc2VbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuXHJcblx0cHVibGljIHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBJQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuZGVwdGggPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgbW91bnRlZCAqL1xyXG5cdHB1YmxpYyBnZXQgaXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmFuY2hvckROOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudXBkYXRlUmVxdWVzdGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGZhbHNlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZywgc2VydmljZTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN1YnNjcmliZXMgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdC8vIGJ5IG9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDsgb3RoZXJ3aXNlLFxyXG5cdC8vIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdC8vIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yIG5vZGUgaXNcclxuXHQvLyBjaGFuZ2VkLCB0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHRwdWJsaWMgc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZywgcmVmOiBSZWZQcm9wVHlwZSwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0c2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRzZXRSZWYoIGluZm8ucmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBpbmZvLmRlZmF1bHRTZXJ2aWNlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzXHJcblx0ICogdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKlxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBDb21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0lEID0gZ19uZXh0Vk5EZWJ1Z0lEKys7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSHRtbFR5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N2Z1R5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL21pbVwiXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wL1BvcHVwc1wiXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1pbWJsLXNwZWNpZmljIHN0eWxlIHNjaGVkdWxlciB0aGF0IGNvb3JkaW5hdGVzIE1pbWNzcyBET00gd3JpdGluZyB3aXRoIE1pbWJsXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge3NfaW5pdFN0eWxlU2NoZWR1bGVyfSBmcm9tIFwiLi9pbnRlcm5hbFwiXHJcblxyXG4vLyBTZXQgTWltYmwgc3R5bGUgc2NoZWR1bGVyIGFzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciBmb3Igc3R5bGUtcmVsYXRlZCBET00td3JpdGluZyBvcGVyYXRpb25zLlxyXG5leHBvcnQgbGV0IG1pbWJsU3R5bGVTY2hlZHVsZXJUeXBlID0gc19pbml0U3R5bGVTY2hlZHVsZXIoKTtcclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1V0aWxGdW5jXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1BdHRyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9WTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVk5CYXNlXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9DbGFzc0NvbXBWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvSW5kZXBlbmRlbnRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL01hbmFnZWRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0VsbVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9GdW5jVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0Z1bmNQcm94eVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Qcm9taXNlUHJveHlWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVGV4dFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Sb290Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9QdWJTdWJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1JlY29uY2lsZXJcIlxyXG4iLCLvu78vKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbiA9IEZ1bmN0aW9uPlxyXG57XHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSBhIGxhbWJkYVxyXG5cdCAqIGZ1bmN0aW9uIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gcmVtb3ZlIGEgbGFtYmRhIGZ1bmN0aW9uIGxpc3RlbmVyIGxhdGVyLlxyXG5cdCAqL1xyXG5cdGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG5cdHJlYWRvbmx5IGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24gPSBGdW5jdGlvbj4gZXh0ZW5kcyBJRXZlbnRTbG90PFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRmaXJlOiBURnVuYztcclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbiAqIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbiAqIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uID0gRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdHRoaXMubGlzdGVuZXJzID0gbmV3IFNldDxURnVuYz4oKTtcclxuXHJcblx0XHR0aGlzLmxpc3RlbmVycy5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY3VycmVudGx5IGF0dGFjaGVkIGxpc3RlbmVycy4gKi9cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuc2l6ZSA6IDA7IH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz47XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgcmVhbGx5IGNhbGxzIHRoZSBsaXN0ZW5lcnMgaW4gYSBsb29wLiBJdCBkZWNvbnN0dWN0cyB0aGUgXCJhcmd1bWVudHNcIiB2YWx1ZVxyXG5cdC8vIGluIG9yZGVyIHRvIHBhc3MgdGhlIHByb3BlciBwYXJhbWV0ZXJzIHRvIHRoZSBsaXN0ZW5lcnMuXHJcblx0cHJpdmF0ZSByZWFsRmlyZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcclxuXHRcdFx0XHRsaXN0ZW5lciggLi4uYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdCB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZSBUXHJcbiAqIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQ+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90PEV4dHJhY3Q8VFtQXSxGdW5jdGlvbj4+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3RPd25lciB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZVxyXG4gKiBUIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3RPd25lcjxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VD4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3RPd25lcjxFeHRyYWN0PFRbUF0sRnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlbnQgc2xvdHMgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIHRlbXBsYXRlIHR5cGUgVC4gVGhlXHJcbiAqIGNhbGxlciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZXZlbnQgc2xvdHM7IHRoYXQgaXMsIGl0IHdpbGwgYmUgYWJsZSB0byBmaXJlIGV2ZW50cyBhbmRcclxuICogY2xlYXIgYWxsIGxpc3RlbmVycyB3aGVuIG5lY2Vzc2FyeS4gVGhpcyBhbGxvd3MgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID1cclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogaW50ZXJmYWNlIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIGV2ZW50czogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPjtcclxuICogICAgIGRvU29tZXRoaW5nKCk6IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICpcclxuICogbGV0IG9iajogSU15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xyXG4gKiBvYmouZXZlbnRzLmNoYW5nZS5hdHRhY2goIChuOiBudW1iZXIpID0+IGNvbnNvbGUubG9nKG4pKTtcclxuICogb2JqLmRvU29tZXRoaW5nKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpRXZlbnRTbG90PFQ+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiBuZXcgRXZlbnRTbG90UHJldGVuZGVyKCB0aGlzLCBwcm9wKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90UHJldGVuZGVyIG9iamVjdHMgYXJlIHJldHVybmVkIGJ5IHRoZSBNdWx0aUV2ZW50U2xvdEhhbmRsZXIgaWYgaXQgZG9lc24ndCBmaW5kXHJcbiAqIGFuIGV2ZW50IHNsb3QgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS4gVGhlc2UgbGlnaHR3ZWlnaHQgb2JqZWN0cyBpbXBsZW1lbnQgYWxsIElFdmVudFNsb3RPd25lclxyXG4gKiBtZXRob2RzLCBidXQgb25seSB0aGUgYXR0YWNoKCkgbWV0aG9kIGFjdHVhbGx5IGNyZWF0ZXMgdGhlIEV2ZW50U2xvdCBvYmplY3QgYW5kIHNldHMgaXQgdG9cclxuICogdGhlIGhhbmRsZXIuXHJcbiAqL1xyXG5jbGFzcyBFdmVudFNsb3RQcmV0ZW5kZXIgaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXJcclxue1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBNdWx0aUV2ZW50U2xvdEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIHByb3A6IFByb3BlcnR5S2V5O1xyXG4gICAgcHJpdmF0ZSBzbG90OiBFdmVudFNsb3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGhhbmRsZXI6IE11bHRpRXZlbnRTbG90SGFuZGxlciwgcHJvcDogUHJvcGVydHlLZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnByb3AgPSBwcm9wO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGZpcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNsb3QpXHJcbiAgICAgICAgICAgIHRoaXMuc2xvdC5maXJlKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBpZiAodGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QgPSB0aGlzLmhhbmRsZXJbdGhpcy5wcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbG90LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xvdClcclxuICAgICAgICAgICAgdGhpcy5zbG90LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG4gICAgcHVibGljIGdldCBjb3VudCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbG90ID8gdGhpcy5zbG90LmNvdW50IDogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJEZXB0aCBlbnVtZXJhdGlvbiBkZWZpbmVzIHBvc3NpYmxlIHdheXMgb2YgaG93IHRyaWdnZXJzIGRlYWwgd2l0aCBjb250YWluZXIgZGF0YTtcclxuICogdGhhdCBpcywgb2JqZWN0cywgYXJyYXlzLCBtYXBzIGFuZCBzZXRzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gKiB0aGlzIGVudW1lcmF0aW9uIGlzIGlycmVsZXZhbnQuXHJcbiAqL1xyXG5lbnVtIFRyaWdnZXJEZXB0aFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgY2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFyZSBoYW5kbGVkLiBBY3Rpb25zIG9mIGFkZGluZywgcmVtb3ZpbmcgYW5kIG1vZGlmeWluZ1xyXG4gICAgICogaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBhcmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVmFsdWUgPSAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiB0aGUgaW1tZWRpYXRlIGNvbnRhaW5lciBpdGVtcyBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZlxyXG4gICAgICogYWRkaW5nIGFuZCByZW1vdmluZyBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGNhdXNlIGNoYW5nZSB0byBiZSB0cmlnZ2VycmVkOyBob3dldmVyIGFjdGlvbnNcclxuICAgICAqIG9mIG1vZGlmeWluZyBpdGVtcyB0aGVtc2VsZnMgYXJlIGlnbm9yZWQuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIFNoYWxsb3cgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiBpdGVtcyBvbiBhbGwgbGV2ZWxzIGFyZSBoYW5kbGVkLiBJdGVtcyBhZGRlZCB0byB0aGVcclxuICAgICAqIGNvbnRhaW5lciBhcmUgY29udmVydGVkIHRvIGRlZXAgdHJpZ2dlcnMuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIERlZXAgPSAxMDAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZGVwdGggd2l0aCB0aGUgZ2l2ZW4gaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlnZ2VyPFQgPSBhbnk+KCBkZXB0aDogbnVtYmVyLCB2PzogVCk6IElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgVHJpZ2dlciggZGVwdGggPCAwID8gMCA6IGRlcHRoLCB2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBrZWVwcyBhIHZhbHVlIGFuZCBub3RpZmllcyBhbGwgYXR0YWNoZWQgd2F0Y2hlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyPFQgPSBhbnk+IGltcGxlbWVudHMgSVRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGRlcHRoPzogbnVtYmVyLCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCggdjogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh2ID09PSB0aGlzLnYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gcmVhZFxyXG4gICAgcHVibGljIG5vdGlmeVJlYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBtYW5hZ2VyIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkLiBXZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlclxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgYXR0YWNoZWQgdG8gb3VyIHRyaWdnZXI7XHJcbiAgICBwdWJsaWMgbm90aWZ5Q2hhbmdlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFZhbHVlIGJlaW5nIGdldCBhbmQgc2V0XHJcbiAgICBwcml2YXRlIHY6IFQ7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHdhdGNoaW5nIG92ZXIgdGhpcyB0cmlnZ2VyJ3MgdmFsdWUuIFRoaXMgbWVtYmVyIHNlcnZlcyBhcyBhIHN0b3JhZ2UgaW5zdGVhZFxyXG4gICAgLy8gb2YgaGF2aW5nIHRoZSBtYW5hZ2VyIHRvIG1hcCBvZiB0cmlnZ2VycyB0byB0aGUgc2V0IG9mIHdhdGNoZXJzLlxyXG4gICAgcHVibGljIHdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXYXRjaGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVdhdGNoZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcblxyXG4gICAgLy8gLyoqIFNldHMgYSByZXNwb25kZXIgZnVuY3Rpb24gKi9cclxuICAgIC8vIHNldFJlc3BvbmRlciggcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIHJlc3BvbmRlclRoaXM/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGtlZXAgYSB3YXRjaGVyIG9iamVjdCBhdHRhY2hlZCB0byB0aGUgd2F0Y2hlciBmdW5jdGlvbi5cclxuICovXHJcbmxldCBzeW1XYXRjaGVyID0gU3ltYm9sKCBcInN5bVdhdGNoZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2F0Y2hlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gcmVndWxhciBmdW5jdGlvbi4gV2hlbiB0aGVcclxuICogd2F0Y2hlciBmdW5jdGlvbiBpcyBpbnZva2VkIGl0IGludm9rZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCBpdCBub3RpY2VzIGFsbCB0cmlnZ2VyIG9iamVjdHNcclxuICogdGhhdCB3ZXJlIHJlYWQgZHVyaW5nIGl0cyBleGVjdXRpb24uIFdoZW4gYW55IG9mIHRoZXNlIHRyaWdnZXIgb2JqZWN0cyBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkLCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSB3YXRjaGVkXHJcbiAqIEBwYXJhbSByZXNwb25kZXIgRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHZhbHVlcyBvZiB0aGUgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkIGR1cmluZ1xyXG4gKiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24ncyBsYXN0IGV4ZWN1dGlvbiBjaGFuZ2UuXHJcbiAqIEBwYXJhbSBmdW5jVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHJlc3BvbmRlclRoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYyxcclxuICAgIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KTogSVdhdGNoZXI8VD5cclxue1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hlckZ1bmMoLi4uYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlcjogV2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3YXMgbm90IHN1cHBsaWVkIGJ1dCBub3cgd2hlbiB0aGVcclxuICAgICAgICAvLyB3YXRjaGVyIGV4ZWN1dGVzLCBcInRoaXNcIiBpcyBkZWZpbmVkLCB3ZSByZW1lbWJlciBpdC5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leGVjdXRlKCB0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIHRoZSB3YXRjaGVyIG9iamVjdCBpbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZiB1c2luZyBhIHN5bWJvbC5cclxuICAgIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdID0gbmV3IFdhdGNoZXIoIGZ1bmMsIHJlc3BvbmRlciwgZnVuY1RoaXMsIHJlc3BvbmRlclRoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgICh3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgd2F0Y2hlciAmJiB3YXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhdGNoZXIgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWRcclxuICogZHVyaW5nIGEgZnVuY3Rpb24gZXhlY3V0aW9uLiBXaGVuIHRoZSB0cmlnZ2VyIG9iamVjdHMgYXJlIHJlYWQsIHRoZXkgYXJlIHJlbWVtYmVyZWQgYnkgdGhlXHJcbiAqIFdhdGNoZXIgb2JqZWN0LiBXaGVuZXZlciBhIHZhbHVlIGlzIGNoYW5nZWQgaW4gYW55IG9mIHRoZXNlIHRyaWdnZXJzLCB0aGUgd2F0Y2hlciBvYmplY3QgaXNcclxuICogbm90aWZpZWQgYW5kIGNhbGxzIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSByZXNwb25kZXI7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICAvLyBpZiByZXNwb25kZXIgXCJ0aGlzXCIgaXMgbm90IGRlZmluZWQgdXNlIHRoZSBvbmUgZm9yIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IHJlc3BvbmRlclRoaXMgPyByZXNwb25kZXJUaGlzIDogZnVuY1RoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2hpbGUgdXBkYXRpbmcgdGhlIHNldCBvZiBhdHRhY2hlZCB0cmlnZ2Vycy4gVGhlIFwiZnVuY1RoaXNcIlxyXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBcInRoaXNcIiB1bmRlciB3aGljaCB0aGUgaW50ZXJuYWwgd2F0Y2hlciBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQuIEl0XHJcbiAgICAgKiB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBcInRoaXNcIiB0byBhcHBseSB3aGVuIGludm9raW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpZiBpdCB3YXNuJ3RcclxuICAgICAqIHNldCB5ZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgd2F0Y2hlciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyVGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGN1cnJlbnQgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbGwgb3VyIHdhdGNoZXIgYXQgdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICBnX21hbmFnZXIucHVzaFdhdGNoZXIoIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciB3YXRjaGVyIGZyb20gdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLnBvcFdhdGNoZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB3YXRjaGVyIHRoYXQgaXQgc2hvdWxkIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi4gVGhpcyBvY2N1cnMgd2hlbiB0aGVyZVxyXG4gICAgLy8gYXJlIHRyaWdnZXJzIHdob3NlIHZhbHVlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgcHVibGljIHJlc3BvbmQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZC4gSXQgY2FuIGhhcHBlbiBpZiBhZnRlciBhbGwgbXV0YXRpb25cclxuICAgICAgICAvLyBzY29wZXMgZXhpdGVkIHRoZSBtYW5hZ2VyIG5vdGlmaWVzIG11bHRpcGxlIHdhdGNoZXJzIGFuZCBvbmUgb2YgdGhlIHdhdGNoZXJzJyByZXNwb25kZXJcclxuICAgICAgICAvLyBkaXNwb3NlcyBvZiBhbm90aGVyIHdhdGNoZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbmRlci5hcHBseSggdGhpcy5yZXNwb25kZXJUaGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgc3RhdGUgb2YgdGhlIHdhdGNoZXIsIHNvIHRoYXQgaXQgaXMgZGV0YWNoZWQgZnJvbSBhbnkgdHJpZ2dlcnMgYW5kIGlzIHJlbW92ZWRcclxuICAgICAqIGZyb20gdGhlIG1hbmFnZXIncyBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW4oKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRldGFjaGVzIHRoaXMgd2F0Y2hlciBmcm9tIGFsbCB0aGUgdHJpZ2dlcnMgYW5kIHRoZSB0cmlnZ2VycyBmcm9tIHRoaXMgd2F0Y2hlci5cclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goIHRyaWdnZXIgPT4gdHJpZ2dlci53YXRjaGVycy5kZWxldGUoIHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGFzayB0aGUgbWFuYWdlciB0byBmb3JnZXQgYWJvdXQgdGhpcyB3YXRjaGVyIGlmIGl0IGlzIGN1cnJlbnRseSBpbiB0ZSBkZWZlcnJlZCBzZXRcclxuICAgICAgICBnX21hbmFnZXIucmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3YXRjaGVkOyB0aGF0IGlzLCBkdXJpbmcgd2hpY2ggd2Ugc2hvdWxkIGxpc3RlbiB0byB0cmlnZ2VycyBiZWluZyByZWFkLCBzb1xyXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVtZW1iZXIgdGhlbSBhbmQgbGF0ZXIgcmVzcG9uZCB3aGVuIHRoZXkgbm90aWZ5IHRoYXQgdGhlaXIgdmFsdWVzIGhhdmUgYmVlblxyXG4gICAgLy8gY2hhbmdlZC5cclxuICAgIHByaXZhdGUgZnVuYzogVDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHRoZSB2YWx1ZSBvZiBvbmUgb2YgdGhlIHRyaWdnZXJzIGNoYW5nZXNcclxuICAgIHByaXZhdGUgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmM7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHJlc3BvbmRlciBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlclRoaXM6IGFueTtcclxuXHJcbiAgICAvLyBTZXQgb2YgdHJpZ2dlcnMgY3VycmVudGx5IGJlaW5nIHdhdGNoZWQgYnkgdGhpcyB3YXRjaGVyLiBUaGlzIG1lbWViZXIgaXMgdXNlZCBieSB0aGVcclxuICAgIC8vIG1hbmFnZXIuIEl0IGlzIGVzc2VudGlhbGx5IGEgc3RvcmFnZSwgd2hpY2ggaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBtYW5hZ2VyIGhhdmluZyBhXHJcbiAgICAvLyBtYXAgb2Ygd2F0Y2hlcnMgdG8gdGhlIHNldHMgb2YgdHJpZ2dlcnMuIFRoZSBwdXJwb3NlIG9mIGtub3dpbmcgd2hhdCB0cmlnZ2VycyBhcmUgdXNlZFxyXG4gICAgLy8gYnkgd2hhdCB3YXRjaGVyIGlzIHRvIHJlbW92ZSB0aGUgd2F0Y2hlciBmcm9tIGFsbCB0aGVzZSB0cmlnZ2VycyBiZWZvcmUgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICAgIHB1YmxpYyB0cmlnZ2VycyA9IG5ldyBTZXQ8VHJpZ2dlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWFuYWdlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIGZ1bmN0aW9uYWxpdHlcclxuICogb2YgdGhlIHRyaWdnZXItd2F0Y2hlciBtZWNoYW5pc20uIEl0IGluY2x1ZGVzIGEgc3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuICogdGhlaXIgZnVuY3Rpb25zIGFuZCB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIHRvIGJlIHJlYWQuIFdoZW4gYSB0cmlnZ2VyIG9iamVjdCBpcyBiZWluZ1xyXG4gKiByZWFkICh0aGF0IGlzIGl0cyBnZXQoKSBtZXRob2QgaXMgY2FsbGVkKSwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIG5vdGlmaWVkLCBiZWNhdXNlXHJcbiAqIHRoZXkgYWxsIGRlcGVuZCBvbiB0aGUgdHJpZ2dlciBvYmplY3QncyB2YWx1ZSBmb3IgdGhlaXIgZnVuY3Rpb25hbGl0eS5cclxuICogXHJcbiAqIEl0IGFsc28gbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50IG9mIG11dGF0aW9uIHNjb3BlcyBhbmQgaGFuZGxlcyBub3RpZnlpbmcgd2F0Y2hlcnMgb2ZcclxuICogbXV0YXRpb25zIG9ubHkgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBoYXMgZXhpdGVkLiBUaGUgdHJpZ2dlcnMgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVyc1xyXG4gKiBkaXJlY3RseTsgaW5zdGVhZCwgdGhleSBub3RpZnkgdGhlIG1hbmFnZXIsIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBhbmQgbm90aWZpZXMgYWxsXHJcbiAqIHRoZSB3YXRjaGVycyBvbmNlIG91dCBvZiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIFRyaWdnZXJXYXRjaGVyTWFuYWdlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyB0aGUgZ2l2ZW4gd2F0Y2hlciBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnB1c2goIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgY3VycmVudGx5IG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BXYXRjaGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGZyb20gdGhlIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5kZWxldGUoIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5wYWlyZWQgY2FsbCB0byBleGl0TXV0YXRpb25TY29wZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKC0tdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0aGlzLmRlZmVycmVkV2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21wdXRlZCB0cmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXB1dGVkVHJpZ2dlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIElUcmlnZ2VyPFQ+LCBJRGlzcG9zZXJcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgY29tcHV0ZWQgdHJpZ2dlciBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgY2FsY3VsYXRlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIHdpdGggYW5cclxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4oIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBUcmlnZ2VyRGVwdGguVmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIHRoZSB3YXRjaGVyIHVudGlsIHRoZSBnZXQgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIHdhdGNoZXIgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMucmVzcG9uZGVyLCB0aGlzLmZ1bmNUaGlzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gb3VyIHdhdGNoZXIgaXMgbm90aWZpZWQgb2YgY2hhbmdlcyBpbiBpdHMgdHJpZ2dlciB2YWx1ZXMuIFdlXHJcbiAgICAgKiByZXNwb25kIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiAodGhyb3VnaCB0aGUgd2F0Y2hlcikgYW5kIHNldHRpbmcgaXRzIHJldHVybiB2YWx1ZSBhc1xyXG4gICAgICogb3VyIG5ldyB2YWx1ZS4gVGhpcyBjYW4gdHJpZ2dlciBjaGFuZ2VzIGluIHdhdGNoZXJzIHRoYXQgYXJlIHVzaW5nIG91ciB2YWx1ZS4gTm90ZSB0aGF0XHJcbiAgICAgKiB3ZSBvbmx5IGludm9rZSBvdXIgd2F0Y2hlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciB0aGF0IHdhdGNoZXMgb3VyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB3ZSB3aWxsIGJlIHdhdGNoaW5nXHJcbiAgICBwcml2YXRlIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPjtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBvdmVyIG91ciBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI8Tm9uZVR5cGVGdW5jPFQ+PjtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgdmFsdWUgIGtlcHQgYnkgdGhlIHRyaWdnZXIgbWlnaHQgbm90IHJlZmxlY3QgdGhlIGFjdHVhbCBjb21wdXRlZFxyXG4gICAgLy8gdmFsdWUuIFRoaXMgZmxhZyBpcyB0cnVlIHVuZGVyIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcclxuICAgIC8vIDEuIFJpZ2h0IGFmdGVyIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZC4gV2UgZG9uJ3QgZXZlbiBjcmVhdGUgdGhlIHdhdGNoZXIgYmVjYXVzZSB3ZVxyXG4gICAgLy8gICAgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAvLyAyLiBXaGVuIHRoZSByZXNwb25kZXIgaGFzIGJlZW4gaW52b2tlZCwgYnV0IG91ciB0cmlnZ2VyIGRpZG4ndCBoYXZlIGFueSB3YXRjaGVyLiBBZ2Fpbiwgd2VcclxuICAgIC8vICAgIHdpbGwgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICBwcml2YXRlIGlzU3RhbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE11dGF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTXV0YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgbXV0YXRvciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIG11dGF0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltTXV0YXRvciA9IFN5bWJvbCggXCJzeW1NdXRhdG9yXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG11dGF0b3IgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXNcclxuICogdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2l0aGluIGEgbXV0YXRpb24gc2NvcGUuIFdhdGNoZXJzIGZvciB0cmlnZ2VycyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQgZHVyaW5nIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBub3Qgbm90aWZpZWQgaW1tZWRpYXRlbHkuIEluc3RlYWQsIHRoZSB3YXRjaGVyc1xyXG4gKiBhcmUgXCJkZWZlcnJlZFwiIGFuZCB3aWxsIGJlIG5vdGlmaWVkIG9ubHkgb25jZSBhZnRlciB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVGhpcyBjYW4gYmVcclxuICogdXNlZnVsIHNpbmNlIHVzdWFsbHkgd2F0Y2hlcnMgZGVwZW5kIG9uIG1hbnkgdHJpZ2dlcnMgYW5kIHdlIGRvbid0IHdhbnQgdGhlIHdhdGNoZXJzIGJlaW5nXHJcbiAqIG5vdGlmaWVkIG1hbnkgdGltZSBidXQgcmF0aGVyIG9ubHkgb25jZSBhZnRlciBhbGwgdGhlIGNoYW5nZXMgaGF2ZSBiZWVuIGRvbmUuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGFyb3VuZCB3aGljaCB0byBlc3RhYmxpc2ggYSBtdXRhdGlvbiBzY29wZS4gSWYgdGhpcyBpcyBhIGNsYXNzIG1ldGhvZCxcclxuICogdGhlbiBlaXRoZXIgcHJvdmlkZSB0aGUgZnVuY1RoaXMgcGFyYW1ldGVyIG9yIGJpbmQgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IGluLiBOb3RlXHJcbiAqIHRoYXQgYXJyb3cgZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGJvdW5kLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgVGhlIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyBhbiB1bmJvdW5kY2xhc3MgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSk6IElNdXRhdG9yPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIG11dGF0b3JGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG11dGF0b3I6IFdhdGNoZXIgPSBtdXRhdG9yRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIG11dGF0b3IuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbXV0YXRvciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXSA9IG5ldyBNdXRhdG9yKCBmdW5jLCBmdW5jVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKG11dGF0b3JGdW5jIGFzIElNdXRhdG9yKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yID0gbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICBtdXRhdG9yICYmIG11dGF0b3IuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIG11dGF0b3JGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXV0YXRvciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgZXhlY3V0aW5nIGEgd3JhcHBlZCBmdW5jdGlvbiB1bmRlciBhXHJcbiAqIG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTXV0YXRvcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGluIGEgbXV0YXRpb24gc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgbXV0YXRvciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICB0cnkgeyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTsgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2VyaXppbmcgY29udGFpbmVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGdpdmVuIHRyaWdnZXIgZGVwdGggYW5kIG9uIHRoZSB2YWx1ZSB0eXBlLCBlaXRoZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBpZlxyXG4gKiBpdCBpcyBhIGNvbnRhaW5lciAob2JqZWN0LCBhcnJheSwgbWFwIG9yIHNldCksIHJldHVybnMgYSBwcm94eSB0byB0aGUgdmFsdWUgdGhhdCBrbm93cyB0b1xyXG4gKiBub3RpZnkgcmVhZCBhbmQgY2hhbmdlIHdoZW4gaXRzIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlIGludm9rZWQuXHJcbiAqIEBwYXJhbSB2IFZhbHVlIHRvIGNvbnZlcnQgaWYgbmVjZXNzYXJ5XHJcbiAqIEBwYXJhbSB0cmlnZ2VyIFRyaWdnZXIgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gcmVhZCBvciBjaGFuZ2UgZXZlbnRzIG9jY3VyIGluIHRoZSBjb252ZXJ0ZWRcclxuICogdmFsdWVzXHJcbiAqIEBwYXJhbSBkZXB0aCBUaGUgZGVwdGggb24gdGhlIGxldmVsIChzdGFydGluZyBmcm9tIHRoZSB0cmlnZ2VyKXRoYXQgY2FsbGVkIHRoaXMgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIDAsIG5vIGNvbnZlcnNpb24gb2NjdXJzIGFuZCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQgYXMgaXMuIFdoZW4gdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBjYWxsZWQgZnJvbSB0aGUgdHJpZ2dlciwgdGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVuZGVmaW5lZDogaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIGFzc2lnbiB0aGVcclxuICogZGVwdGggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS4gQXJyYXlzLCBtYXBzIGFuZCBzZXRzIGdldCBkZXB0aHMgb2YgU2hhbGxvdygxKSxcclxuICogbWVhbmluZyB0aGF0IG9wZXJhdGlvbnMgdGhhdCBhZGQgb3IgcmVtb3ZlIGl0ZW1zIHdpbGwgdHJpZ2dlciBldmVudHMsIGJ1dCBtb2RpZmljYXRpb25zIHRvIHRoZVxyXG4gKiBpdGVtcyB3aWxsIG5vdC4gT2JqZWN0cyBnZXQgdGhlIGRlcHRoIG9mIERlZXAgKDEwMDApLCB3aGljaCBlc3NlbnRpYWxseSBtZWFucyB0aGF0IGFueSBjaGFuZ2VzXHJcbiAqIHRvIHRoZSBvYmplY3QgcHJvcGVydGllcyBvbiBhbnkgbGV2ZWwgd2lsbCB0cmlnZ2VyIGV2ZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJyaXplPFQgPSBhbnk+KCB2OiBULCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aD86IG51bWJlcik6IFRcclxue1xyXG4gICAgaWYgKCF2IHx8IGRlcHRoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTWFwSGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2IGluc3RhbmNlb2YgU2V0KVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoIHYsIG5ldyBTZXRIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT09IE9iamVjdClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLkRlZXApIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IGhhbmRsZXJzLlxyXG4gKi9cclxuY2xhc3MgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KCB0YXJnZXQsIHByb3AsIHRyaWdnZXJyaXplKCB2YWx1ZSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCBhdHRyczogUHJvcGVydHlEZXNjcmlwdG9yKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgcHJvcCwgYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0YXJnZXQsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXh0ZW5zaWJsZSggdGFyZ2V0OiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oIFJlZmxlY3QuZW51bWVyYXRlKCB0YXJnZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvd25LZXlzKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gVGhlIHRyaWdnZXIgb2JqZWN0IHdoaWNoIHNob3VsZCBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gaXRzIHdhdGNoZXJzIHdoZW4gcmVhZHMgb3IgY2hhbmdlc1xyXG4gICAgLy8gb2NjdXIgXHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogVHJpZ2dlcjtcclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBhcnJheXMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBBcnJheUhhbmRsZXIgZXh0ZW5kcyBOb25TbG90Q29udGFpbmVySGFuZGxlclxyXG4vLyB7XHJcbi8vICAgICBnZXQoIHRhcmdldDogQXJyYXk8YW55PiwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4vLyAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEhhbmRsZXIgZm9yIG9uIHBsYWluIG9iamVjdHMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBPYmplY3RIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzaGFsbG93IE1hcC9TZXQgaGFuZGxlcnMuIE1ldGhvZHMgd2hvc2UgbmFtZXMgd2VyZSBzdXBwbGllZCBpbiB0aGUgY29uc3RydWN0b3IsXHJcbiAqIG5vdGlmeSBjaGFuZ2U7IGFsbCBvdGhlciBtZXRob2RzIG5vdGlmeSByZWFkLlxyXG4gKiBcclxuICogRm9yIE1hcCBhbmQgU2V0IGluIG9yZGVyIHRvIGJlIHByb3hpZWQsIHRoZSBtZXRob2RzIHJldHVybmVkIGZyb20gZ2V0KCkgbXVzdCBiZVxyXG4gKiBib3VuZCB0byB0aGUgdGFyZ2V0LiBTZWUgaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vcHJveHkjYnVpbHQtaW4tb2JqZWN0cy1pbnRlcm5hbC1zbG90cy5cclxuICovXHJcbmNsYXNzIFNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PiwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMubXV0YXRvck1ldGhvZE5hbWVzID0gbXV0YXRvck1ldGhvZE5hbWVzO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBjb250YWluZXIgbWV0aG9kcyBhbmQgcHJvcGVydGllcy4gV2UgYWx3YXlzIG5vdGlmeSByZWFkIGFuZCB3ZSB3cmFwIG1ldGhvZHMgaW5cclxuICAgIC8vIGZ1bmN0aW9ucyB0aGF0IHdoZW4gY2FsbGVkIHdpbGwgbm90aWZ5IGVpdGhlciByZWFkIG9yIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGVcclxuICAgIC8vIG1ldGhvZCBpcyBhIG11dGF0b3IuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcblxyXG4gICAgICAgIC8vIGluIHRoaXMgY29udGV4dCBcInRoaXNcIiBpcyB0aGUgaGFuZGxlcjsgaG93ZXZlciwgd2hlbiB0aGUgbWV0aG9kcyB3ZSByZXR1cm4gYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHRoZSBcInRoaXNcIiB3aWxsIGJlIHRoZSBQcm94eSBvYmplY3QuIFRoZXJlZm9yZSwgd2Ugd2FudCB0aGVzZSBtZXRob2RzIHRvIGNhcHR1cmUgYW5kXHJcbiAgICAgICAgLy8gdXNlIHRoZSBoYW5kbGVyIG9iamVjdC5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBtZXRob2QgaXMgYWxyZWFkeSBpbiBvdXIgaW50ZXJuYWwgbWFwXHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMud3JhcHBlZE1ldGhvZHMuZ2V0KCBwcm9wKTtcclxuICAgICAgICBpZiAoIW1ldGhvZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgdGFyZ2V0XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gdGFyZ2V0W3Byb3BdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BWYWwgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCB0aGUgb3JpZ2luYWwgbWV0aG9kIHRvIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBvcmdCb3VuZE1ldGhvZCA9IHByb3BWYWwuYmluZCggdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0b3JNZXRob2ROYW1lcy5oYXMocHJvcCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBtdXRhdG9yIG1ldGhvZHMgd2UgY3JlYXRlIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgaW52b2tlcyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2gga25vd3MgYWJvdXQgdGhlIHN0cnVjdHVyZSBvZiB0aGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2lsbCBjcmVhdGUgcHJveGllcyBmb3IgdGhlIGFwcHJvcHJpYXRlIG9iamVjdHMgaWYgbmVlZGVkLiBUaGlzIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgYWxzbyBpbmRpY2F0ZSB3aGV0aGVyIGFuIGFjdHVhbCBjaGFuZ2Ugb2NjdXJzIHNvIHRoYXQgd2UgY2FuIG5vdGlmeSBhYm91dCBpdC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldDogW2FueSwgYm9vbGVhbl0gPSBoYW5kbGVyLmNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQsIHByb3AsIG9yZ0JvdW5kTWV0aG9kLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG9yZ0JvdW5kTWV0aG9kKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub24tbXV0YXRvciBtZXRob2RzLCB3ZSBub3RpZnkgdGhlIHJlYWQgYW5kIGludm9rZSB0aGUgb3JpZ2luYWwgbWV0aG9kLlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZnVuY3Rpb24oKTogYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlZE1ldGhvZHMuc2V0KCBwcm9wLCBtZXRob2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCB0aGF0IG11c3QgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgZGVyaXZlZCBjbGFzc2VzIGFuZCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZ1xyXG4gICAgICogYSBtdXV0YXRvciBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLGZhbHNlXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBTZXQgb2YgbWV0aG9kIG5hbWVzLCB3aGljaCBtdXRhdGUgdGhlIGNvbnRhaWVyLiBBbGwgb3RoZXIgbWV0aG9kcyBvbmx5IHJlYWQgZnJvbSBpdC5cclxuICAgIHByaXZhdGUgbXV0YXRvck1ldGhvZE5hbWVzOiBTZXQ8UHJvcGVydHlLZXk+O1xyXG5cclxuICAgIC8vIFRoaXMgbWFwIGtlZXBzIGFscmVhZHkgd3JhcHBlZCBtZXRob2RzIHNvIHRoYXQgd2UgZG9uJ3QgZG8gYmluZGluZyBtb3JlIHRoYW4gb25jZS4gXHJcbiAgICBwcml2YXRlIHdyYXBwZWRNZXRob2RzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSxGdW5jdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3IgbWFwcy5cclxuICovXHJcbmNsYXNzIE1hcEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJjbGVhclwiLCBcImRlbGV0ZVwiLCBcInNldFwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIE1hcEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG1hcC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInNldFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gW29yZ01ldGhvZCggYXJnc1swXSwgdHJpZ2dlcnJpemUoIGFyZ3NbMV0sIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCkpLCB0cnVlXTtcclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2V0cy5cclxuICovXHJcbmNsYXNzIFNldEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJhZGRcIiwgXCJkZWxldGVcIiwgXCJjbGVhclwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIFNldEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIHNldC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJhZGRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIHRyaWdnZXJyaXplKCBhcmdzWzBdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVjb3JhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgc28gdGhhdCBjaGFuZ2luZyB0aGVpciB2YWx1ZSB3aWxsIGFueSB3YXRjaGVyXHJcbiAqIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlbSB0byByZXNwb25kLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXJgIGRlc2lnbmF0ZXMgYSBkZWZhdWx0IHRyaWdnZXIgZGVjb3JhdG9yLCB3aG9zZSBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgdHlwZTogU2hhbGxvdyBmb3IgYXJyYXlzLCBtYXBzIGFuZCBzZXRzIGFuZCBEZWVwIGZvciBvYmplY3RzLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXIobilgIGRlc2lnbmF0ZXMgYSB0cmlnZ2VyIGRlY29yYXRvciBmYWN0b3J5IHdpdGggdGhlIHNwZWNpZmllZCBkZXB0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKCB0YXJnZXRPckRlcHRoOiBhbnksIG5hbWU/OiBzdHJpbmcpOiBhbnlcclxue1xyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXRPckRlcHRoID09PSBcIm51bWJlclwiKVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSBudW1iZXIgdGhhdCBpdCBpcyBhbiBleHBsaWNpdGx5IHNwZWNpZmllZCBkZXB0aCB1c2luZ1xyXG4gICAgICAgIC8vIGRlY29yYXRvciBmYWN0b3J5LlxyXG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyLmJpbmQoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdW5kZWZpbmVkIGRlcHRoIG1lYW5zIHRoYXQgdGhhdCB0aGUgYWN0dWFsIGRlcHRoIHdpbGwgYmUgYXNzaWduZWQgZGVwZW5kaWcgb24gdGhlXHJcbiAgICAgICAgLy8gdmFsdWUgb2YgdGhlIHRyaWdnZXI6IFNoYWxsb3cgZm9yIG1hcHMsIHNldHMgYW5kIGFycmF5cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlciggdW5kZWZpbmVkLCB0YXJnZXRPckRlcHRoLCBuYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBgQHRyaWdnZXJgIGRlY29yYXRvcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyKCBkZXB0aDogbnVtYmVyLCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKCBuYW1lICsgXCJfdHJpZ2dlclwiKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoLCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT2JqLnNldCggdmFsKVxyXG4gICAgICAgIH0sXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgXCJnZXRcIiBwcm9wZXJ0aWVzIG9yIGZ1bmN0aW9ucyByZXR1bmluZyBhIHZhbHVlIHNvIHRoYXQgdGhpc1xyXG4gKiB2YWx1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVjYWxjdWxhdGVkIGlmIGFueSB0cmlnZ2VycyBvbiB3aGljaCB0aGlzIHZhbHVlIGRlcGVuZHMgaGF2ZSB0aGVpclxyXG4gKiB2YWx1ZXMgY2hhbmdlZC4gV0hlbiB0aGlzIGhhcHBlbnMsIHRoZSB3YXRjaGVyIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBjb21wdXRlZCB2YWx1ZSB3aWxsXHJcbiAqIGJlIG5vdGlmaWVkIHRvIHJlc3BvbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIHByb3BEZXNjcjogUHJvcGVydHlEZXNjcmlwdG9yKVxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUpO1xyXG5cclxuICAgIC8vIHByb3BEZXNjLnZhbHVlIGlzIHVuZGVmaW5lZCBmb3IgYWNjZXNzb3JzIGFuZCBkZWZpbmVkIGZvciBmdW5jdGlvbnNcclxuICAgIGlmICghcHJvcERlc2NyLnZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghcHJvcERlc2NyLmdldClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQGNvbXB1dGVkIHByb3BlcnR5IHJlcXVpcmVzIGdldCgpIGFjY2Vzc29yXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3JnR2V0ID0gcHJvcERlc2NyLmdldDtcclxuICAgICAgICBwcm9wRGVzY3IuZ2V0ID0gZnVuY3Rpb24oKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdHZXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcERlc2NyLnNldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcmdTZXQgPSBwcm9wRGVzY3Iuc2V0O1xyXG4gICAgICAgICAgICBwcm9wRGVzY3Iuc2V0ID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgb3JnU2V0LmNhbGwoIHRoaXMsIHYpOyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JnRnVuYyA9IHByb3BEZXNjci52YWx1ZTtcclxuICAgICAgICBwcm9wRGVzY3IudmFsdWUgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENvbXBhcmVzIHRoZSB0d28gZ2l2ZW4gdmFsdWVzIGdvaW5nIGRvd24gdG8gdGhlaXIgcHJvcGVydGllcyBpZiB0aGVzZSBhcmUgYXJyYXlzIG9yIG9iamVjdHNcclxuICogQHBhcmFtIG8xIFxyXG4gKiBAcGFyYW0gbzIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19kZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbcF0sIG8yW3BdKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEocCBpbiBvMSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkpXHJcblx0e1xyXG5cdFx0aWYgKG8xLmxlbmd0aCAhPT0gbzIubGVuZ3RoKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSAwLCBsZW4gPSBvMS5sZW5ndGg7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbaV0sIG8yW2ldKSlcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlc2UgYXJlIHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zIG9yIGZ1bmN0aW9ucyBhbmQgdGhleSBhcmUgZGlmZmVyZW50XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaE9iamVjdCggbzogYW55KTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAobyA9PT0gdW5kZWZpbmVkKVxyXG4vLyBcdFx0cmV0dXJuIDA7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gbnVsbClcclxuLy8gXHRcdHJldHVybiAxO1xyXG4vLyBcdGVsc2UgaWYgKGlzTmFOKDApKVxyXG4vLyBcdFx0cmV0dXJuIDI7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gdHJ1ZSlcclxuLy8gXHRcdHJldHVybiAzO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IGZhbHNlKVxyXG4vLyBcdFx0cmV0dXJuIDQ7XHJcblxyXG4vLyBcdGxldCBoID0gMTA7XHJcblxyXG4vLyBcdGlmICh0eXBlb2YgbyA9PT0gXCJudW1iZXJcIilcclxuLy8gXHRcdHJldHVybiAxMCArIG87XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcbi8vIFx0XHRyZXR1cm4gaGFzaFN0cmluZyggbyk7XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIilcclxuLy8gXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvLm5hbWUpO1xyXG4vLyBcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobykpXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGxlbiA9IG8ubGVuZ3RoO1xyXG4vLyBcdFx0bGV0IGggPSAxMCArIGxlbjtcclxuLy8gXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbi8vIFx0XHRcdCBoICs9IGkgKyBoYXNoT2JqZWN0KCBvW2ldKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gXHRlbHNlXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGggPSAxMDtcclxuLy8gXHRcdGZvciggbGV0IHAgaW4gbylcclxuLy8gXHRcdFx0aCArPSBoYXNoU3RyaW5nKHApICsgaGFzaE9iamVjdChvW3BdKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaFN0cmluZyggczogc3RyaW5nKTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAoIXMpXHJcbi8vIFx0XHRyZXR1cm4gNTtcclxuXHJcbi8vIFx0bGV0IGxlbiA9IHMubGVuZ3RoO1xyXG4vLyBcdGxldCBoID0gMTAgKyBsZW47XHJcbi8vIFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuLy8gXHRcdGggKz0gcy5jaGFyQ29kZUF0KGkpO1xyXG4vLyBcdHJldHVybiBoO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2lzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIGVsbS50YWdOYW1lID09PSBcInN2Z1wiO1xyXG5cdC8vIHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9