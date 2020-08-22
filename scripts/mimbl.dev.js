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
/**
 * The RefProxyHandler is a proxy handler for the objects created when reference is defined using
 * the @ref decorator. Only the "r" property has special handling (because it is used by the
 * setRef function); everything else is reflected from the remembered referenced object.
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
            if (e.keyCode === 27) // Esc
             {
                e.preventDefault();
                // we ignore the Escape key if the escapeReturnValue option is undefined; otherwise,
                // we close the dialog with its value
                let retVal = this.getReturnValueForEscapeKey();
                if (retVal != null)
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
        // if the escapeReturnValue is defined in the options, start listening to the click events
        // to detect clicks outside the popup because they will act as Escape too.
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue) != null)
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
            if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue) != null)
                this.dlg.removeEventListener("click", this.onDetectClickOutside);
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
        // establish listener for keyboard events
        window.addEventListener("keydown", this.onKeyDown);
    }
    // Destroys the dialog element
    destroy() {
        // remove listener for keyboard events
        window.removeEventListener("keydown", this.onKeyDown);
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
     * Returns the value that should be used as a return value when closing the popup after the
     * user pressed the Esc key. If undefined is returned, the popup doesn't close
     */
    getReturnValueForEscapeKey() {
        var _a;
        // this implementation simply returns the value from the options.
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue;
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
        this.captionContent = captionContent;
        for (let btn of buttons)
            this.addButton(btn);
    }
    /**
     * Adds a button to the button bar
     */
    addButton(btn) {
        this.buttons.set(btn.id, new DialogButtonInfo(btn));
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
    ;
    /**
     * If derived classes override this method, they must call super.willUnmount()
     */
    willUnmount() {
        this.vn.unpublishService("dialog");
        super.willUnmount();
    }
    ;
    render() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", null,
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
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.buttonBarClassName }, Array.from(this.buttons.values()).map(info => _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("button", { id: info.btn.id, class: this.buttonClassName, click: () => this.onButtonClicked(info) }, info.btn.content)));
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
    constructor(btn) {
        this.btn = btn;
        this.disabled = btn.disabled;
    }
}
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
class MsgBoxStyles extends DefaultDialogStyles {
    constructor() {
        super(...arguments);
        this.container = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
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
        });
    }
}
/**
 * The MsgBox class is a dialog that displays a message with a set of pre-defined buttons.
 */
class MsgBox extends Dialog {
    constructor(message, title, buttons = 1 /* OK */, icon = 0 /* None */) {
        super(message, title, { styles: MsgBoxStyles });
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
    static showModal(message, title, buttons = 1 /* OK */, icon = 0 /* None */) {
        let msgBox = new MsgBox(message, title, buttons, icon);
        return msgBox.showModal();
    }
    renderBody() {
        let { char, color } = this.getIconClassAndColor();
        // we are using this.optionalStyles because we explicitly pass our styles in the options
        // parameter of the Dialog constructor.
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.container },
            char &&
                _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { class: this.optionalStyles.icon, style: { color } }, char),
            _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.text }, this.content));
    }
    /**
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return MsgBoxStyles;
    }
    ;
    /**
     * Returns the value that should be used as a return value when closing the popup after the
     * user pressed the Esc key. If undefined is returned, the popup doesn't close
     */
    getReturnValueForEscapeKey() {
        var _a;
        // this implementation returns the value from the options if defined; otherwise, it
        // returns MsgBoxButton.Close if no buttons are defined; otherwise, it returns undefined,
        // which means the message box will not close.
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.escapeReturnValue) != null
            ? this.options.escapeReturnValue
            : this.buttonCount === 0 ? 16 /* Close */ : undefined;
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
                this.createButton("Cancel", 2 /* Cancel */);
                break;
            case 12 /* YesNo */:
                this.createButton("Yes", 4 /* Yes */);
                this.createButton("No", 8 /* No */);
                break;
            case 14 /* YesNoCancel */:
                this.createButton("Yes", 4 /* Yes */);
                this.createButton("No", 8 /* No */);
                this.createButton("Cancel", 2 /* Cancel */);
                break;
        }
    }
    // Returns symbol and color for displaying the icon.
    getIconClassAndColor() {
        switch (this.icon) {
            case 1 /* Info */: return { char: "I", color: "blue" };
            case 4 /* Question */: return { char: "?", color: "green" };
            case 2 /* Warning */: return { char: "!", color: "orange" };
            case 3 /* Error */: return { char: "X", color: "red" };
            default: return {};
        }
    }
    createButton(text, key) {
        this.addButton({ id: key, content: text, returnValue: key });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL1V0aWxBUEkudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb21wL1BvcHVwcy50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvSW5kZXBlbmRlbnRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9NYW5hZ2VkQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHJvbWlzZVByb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9QdWJTdWIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9SZWNvbmNpbGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3R5bGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbEZ1bmMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUdoRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7O0dBSUc7QUFDSSxTQUFTLEtBQUssQ0FBRSxHQUFZO0lBRWxDLE9BQU8seURBQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBSUQ7OztHQUdHO0FBQ0ksU0FBUyxRQUFRLENBQUUsR0FBWTtJQUVyQyxPQUFPLDREQUFVLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQWdCRDs7O0dBR0c7QUFDSSxTQUFTLGVBQWU7SUFFM0IsSUFBSSxXQUFXLEVBQUUsVUFBVSxDQUFDO0lBQzVCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFLLFVBQVMsT0FBTyxFQUFFLE1BQU07UUFDbEQsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUN0QixVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUMsQ0FBaUIsQ0FBQztJQUVuQixPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUM1QixPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBSUQ7OztHQUdHO0FBQ0ksTUFBTSxLQUFlLFNBQVEsT0FBVTtJQUUxQztRQUVJLEtBQUssQ0FBRSxVQUFTLEdBQUcsRUFBRSxHQUFHO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUlKOzs7Ozs7Ozs7Ozs7O0FDOUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBFO0FBQ29CO0FBZ3FCOUY7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSSxTQUFTLEdBQUcsQ0FBRSxHQUFRLEVBQUUsS0FBVSxFQUFFLEdBQUcsUUFBZTtJQUU1RCxPQUFPLDJFQUFrQixDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQXNERCwyRUFBMkU7QUFDM0UsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTlCOzs7R0FHRztBQUNJLE1BQU0sR0FBRztJQUtmLFlBQWEsUUFBcUIsRUFBRSxlQUFtQjtRQUh2RCw0REFBNEQ7UUFDcEQsaUJBQVksR0FBRyxJQUFJLG1EQUFTLEVBQWMsQ0FBQztRQUlsRCxJQUFJLFFBQVEsS0FBSyxTQUFTO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELG9GQUFvRjtJQUM3RSxXQUFXLENBQUUsUUFBb0I7UUFFdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDBEQUEwRDtJQUNuRCxjQUFjLENBQUUsUUFBb0I7UUFFMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDJDQUEyQztJQUMzQyxJQUFXLENBQUMsS0FBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUMsMkNBQTJDO0lBQzNDLElBQVcsQ0FBQyxDQUFFLE1BQVM7UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUMzQjtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDO0NBQ0Q7QUFJRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0ksU0FBUyxHQUFHLENBQUUsTUFBVyxFQUFFLElBQVk7SUFFN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsY0FBYyxDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQ2xDO1FBQ1UsR0FBRyxDQUFFLENBQU07WUFFUCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0QsR0FBRztZQUVDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO0tBQ1YsQ0FDRCxDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLGVBQWU7SUFRVixHQUFHLENBQUUsTUFBVyxFQUFFLElBQWlCLEVBQUUsUUFBYTtRQUVyRCxPQUFPLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQseURBQXlEO1FBQ3pELDJFQUEyRTtJQUMvRSxDQUFDO0lBRU0sR0FBRyxDQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLEtBQVUsRUFBRSxRQUFhO1FBRWpFLElBQUksSUFBSSxLQUFLLEdBQUc7WUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzs7WUFFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUM7UUFDWix5REFBeUQ7UUFDekQsd0RBQXdEO0lBQzVELENBQUM7SUFFTSxjQUFjLENBQUUsTUFBVyxFQUFFLElBQWlCO1FBRWpELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxjQUFjLENBQUUsTUFBVyxFQUFFLElBQWlCLEVBQUUsS0FBeUI7UUFFNUUsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxHQUFHLENBQUUsTUFBVyxFQUFFLElBQWlCO1FBRXRDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxjQUFjLENBQUUsTUFBVztRQUU5QixPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxZQUFZLENBQUUsTUFBVztRQUU1QixPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSx3QkFBd0IsQ0FBRSxNQUFXLEVBQUUsSUFBaUI7UUFFM0QsT0FBTyxPQUFPLENBQUMsd0JBQXdCLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sU0FBUyxDQUFFLE1BQVc7UUFFekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLE9BQU8sQ0FBRSxNQUFXO1FBRXZCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUVKO0FBWUQ7Ozs7Ozs7OztHQVNHO0FBQ0ksU0FBUyxNQUFNLENBQUssR0FBbUIsRUFBRSxHQUFNLEVBQUUsTUFBVTtJQUVqRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFDM0I7UUFDQyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUssR0FBVyxDQUFDLENBQUMsS0FBSyxNQUFNO1lBQ25ELEdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ3RCO1NBQ0ksSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVO1FBQ2hDLEdBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBaVREOzs7O0dBSUc7QUFDSSxTQUFTLHVCQUF1QixDQUFLLFFBQWdCLEVBQUUsWUFBNkM7SUFFMUcsaURBQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLG9CQUFxQixFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7R0FHRztBQUNJLFNBQVMsbUJBQW1CLENBQUUsU0FBaUI7SUFFckQsaURBQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFpQkQ7OztHQUdHO0FBQ0ksTUFBZSxTQUFTO0lBZTlCLFlBQWEsS0FBbUM7UUFFL0MsSUFBSSxLQUFLO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUtEOzs7OztPQUtHO0lBQ08sUUFBUSxDQUFFLEdBQUcsY0FBd0M7UUFFOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsT0FBTztRQUVSLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQy9CO1lBQ0MsMkVBQTJFO1lBQzNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFFRDtZQUNDLHFDQUFxQztZQUNyQyxLQUFLLElBQUksR0FBRyxJQUFJLGNBQWMsRUFDOUI7Z0JBQ0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVO29CQUNiLHFEQUFXLENBQUMsTUFBTSxDQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBRTFEO29CQUNDLHlFQUF5RTtvQkFDekUscURBQVcsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvRDthQUNEO1NBQ0Q7SUFDRixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDTyxrQkFBa0IsQ0FBRSxJQUF1QixFQUFFLElBQWE7UUFFbkUsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDTyxpQkFBaUIsQ0FBRSxJQUF1QixFQUFFLElBQWE7UUFFbEUsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWlDRztJQUNPLFlBQVksQ0FBc0IsUUFBVyxFQUFFLFlBQXFCO1FBRTdFLE9BQU8sMkVBQWtCLENBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNEO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixzQkFBc0I7QUFDdEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNJLFNBQVMsUUFBUSxDQUFFLEtBQW9CLElBQVEsQ0FBQztBQXlEdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSSxNQUFNLFNBQVUsU0FBUSxTQUE4QjtJQUU1RDs7OztPQUlHO0lBQ0gsWUFBcUIsS0FBcUIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUU1RCw0RUFBNEU7SUFDckUsTUFBTSxLQUFTLENBQUM7SUFFdkI7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBYyxFQUFFLEdBQVMsRUFBRSxPQUFhLEVBQUUsR0FBRyxJQUFXO1FBRTdFLHFEQUFXLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRDtBQXdCRDs7Ozs7O0dBTUc7QUFDSSxNQUFNLFlBQWEsU0FBUSxTQUE0QjtJQUU3RDs7OztPQUlHO0lBQ0gsWUFBcUIsS0FBd0IsSUFBSSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFLCtFQUErRTtJQUN4RSxNQUFNLEtBQVMsQ0FBQztDQUN2QjtBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YseUNBQXlDO0FBQ3pDLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7OztHQU1HO0FBQ0ksU0FBUyxLQUFLLENBQUUsT0FBWSxFQUFFLFdBQWlCLElBQUk7SUFFekQsMkRBQVMsQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVEOzs7R0FHRztBQUNJLFNBQVMsT0FBTyxDQUFFLFdBQWlCLElBQUk7SUFFN0MsNkRBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBSUQ7O0dBRUc7QUFDSSxTQUFTLFNBQVMsQ0FBRSxNQUFNLEVBQUUsSUFBWTtJQUU5QyxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtRQUM5QixHQUFHLENBQUUsR0FBRztZQUVKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckIsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZTtvQkFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUMvQjtRQUNMLENBQUM7UUFDRCxHQUFHLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25DLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqbUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7O0FBRThCO0FBQ0o7QUFDNkI7QUFDdEI7QUFDc0M7QUFxRTFFOztHQUVHO0FBQ0ksTUFBTSxrQkFBbUIsU0FBUSxzREFBbUI7SUFBM0Q7O1FBRUkseUNBQXlDO1FBQ3pDLFdBQU0sR0FBRyw2Q0FBVSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDdEQsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQiw2QkFBNkI7WUFDN0Isd0RBQXdEO1lBQ3hELFlBQVksRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtTQUMxRCxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBK0VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBQ0ksTUFBTSxLQUVELFNBQVEsa0RBQWE7SUFFN0I7Ozs7T0FJRztJQUNILFlBQW9CLE9BQWEsRUFBRSxPQUFrQjtRQUVqRCxLQUFLLEVBQUUsQ0FBQztRQThSWixrRUFBa0U7UUFDN0QsY0FBUyxHQUFHLENBQUMsQ0FBZ0IsRUFBUSxFQUFFO1lBRXhDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUUsTUFBTTthQUM1QjtnQkFDSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRW5CLG9GQUFvRjtnQkFDcEYscUNBQXFDO2dCQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxNQUFNLElBQUksSUFBSTtvQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNCO1FBQ1IsQ0FBQyxDQUFDO1FBRUMsK0ZBQStGO1FBQy9GLDRFQUE0RTtRQUNwRSx5QkFBb0IsR0FBRyxDQUFDLENBQWEsRUFBRSxFQUFFOztZQUU3QyxtRkFBbUY7WUFDbkYsdUZBQXVGO1lBQ3ZGLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUc7Z0JBQ3JCLE9BQU87WUFFWCx3RkFBd0Y7WUFDeEYsb0ZBQW9GO1lBQ3BGLDZCQUE2QjtZQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNO2dCQUMxRixJQUFJLENBQUMsS0FBSyxPQUFFLElBQUksQ0FBQyxPQUFPLDBDQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVJLGtCQUFhLEdBQUcsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUVyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDN0I7Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixPQUFPO2FBQ1Y7WUFFUCxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDO1FBRU0sZ0JBQVcsR0FBRyxDQUFDLENBQWUsRUFBRSxFQUFFO1lBRW5DLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBd0VDLGlEQUFpRDtRQUN6QyxZQUFPLEdBQUcsNkVBQW9CLEVBQWdCLENBQUM7UUF6Wm5ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBRVAsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUNYLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVM7O1FBRVosSUFBSSxJQUFJLENBQUMsTUFBTTtZQUNYLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxJQUFJLEtBQUssQ0FBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFFOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVyQiwwRkFBMEY7UUFDMUYsMEVBQTBFO1FBQzFFLElBQUksV0FBSSxDQUFDLE9BQU8sMENBQUUsaUJBQWlCLEtBQUksSUFBSTtZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsWUFBWSxHQUFHLG9FQUFlLEVBQUUsQ0FBQztRQUV0QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFFLFdBQWlCOztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDWixPQUFPO1FBRWpCLElBQUksSUFBSSxDQUFDLFlBQVksRUFDckI7WUFDVSxJQUFJLFdBQUksQ0FBQyxPQUFPLDBDQUFFLGlCQUFpQixLQUFJLElBQUk7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRS9FLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBRUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzREFBc0Q7SUFDdEQsSUFBVyxNQUFNLEtBQW1DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFMUU7O09BRUc7SUFDSCxJQUFXLE1BQU0sS0FBYyxPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1RDs7T0FFTTtJQUNDLFVBQVUsS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUUxRTs7T0FFTTtJQUNDLE9BQU8sS0FBYyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTNFOztPQUVHO0lBQ0gsSUFBVyxXQUFXLEtBQVUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUUzRDs7T0FFRztJQUNILElBQVcsU0FBUyxLQUFjLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFM0QsSUFBVyxTQUFTLENBQUUsQ0FBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRDs7O09BR0c7SUFDSSxVQUFVLENBQUUsT0FBWTtRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUo7Ozs7T0FJTTtJQUNJLFNBQVMsQ0FBRSxPQUFlLEVBQUUsT0FBZTtRQUU5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDVCxPQUFPO1FBRVgsbUZBQW1GO1FBQ3pGLHVEQUF1RDtRQUN2RCxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBRXZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTNDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVKOzs7T0FHTTtJQUNJLFFBQVE7UUFFakIsTUFBTSxDQUFDLG1CQUFtQixDQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLG1CQUFtQixDQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUFBLENBQUM7SUFFQzs7OztPQUlHO0lBQ0MsTUFBTSxDQUFFLElBQVksRUFBRSxJQUFZO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNULE9BQU87UUFFWCxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDO0lBSUM7O09BRUc7SUFDSSxTQUFTO1FBRVosSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFBQSxDQUFDO0lBRUM7O09BRUc7SUFDQyxXQUFXO1FBRVgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLENBQUMsQ0FBQztRQUVuQyxvQkFBb0I7UUFDcEIsaURBQWMsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN2QjtZQUNJLGlEQUFjLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBRUQsV0FBVztRQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDQyxNQUFNO1FBRU4sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBSUMsNkJBQTZCO0lBQ3JCLE1BQU07O1FBRVYsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFN0csd0ZBQXdGO1FBQ3hGLFlBQVk7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLCtDQUFZLENBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQVksQ0FBQztRQUN2RSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsK0NBQVksQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBWSxDQUFDO1FBRXhFLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsa0RBQWUsT0FBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxnQkFBZ0IsUUFDcEQsSUFBSSxDQUFDLGNBQWMsMENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLHdGQUF3RjtRQUN4RixzREFBc0Q7UUFDdEQsSUFBSSxLQUFLLEdBQWlCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFDcEQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7WUFFN0IsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQ3BELEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBRTdCLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFdEMsc0RBQW1CLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLGVBQXlCLENBQUM7UUFFOUQsc0JBQXNCO1FBQ3RCLDhDQUFTLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFMUIseUNBQXlDO1FBQ3pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw4QkFBOEI7SUFDdEIsT0FBTztRQUVYLHNDQUFzQztRQUM1QyxNQUFNLENBQUMsbUJBQW1CLENBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxzQkFBc0I7UUFDdEIsZ0RBQVcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVKOzs7O09BSU07SUFDRSxJQUFJLENBQUUsSUFBWSxFQUFFLElBQVk7UUFFdkMsSUFBSSxJQUFJLEdBQUcsQ0FBQztZQUNYLElBQUksR0FBRyxDQUFDLENBQUM7YUFDTCxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFDckMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxHQUFHLENBQUM7WUFDWCxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ0wsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXO1lBQ3RDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVoQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUFBLENBQUM7SUEyREM7O09BRUc7SUFDSSxnQkFBZ0I7UUFFbkIsT0FBTyxrQkFBd0QsQ0FBQztJQUN2RSxDQUFDO0lBQUEsQ0FBQztJQUVDOzs7T0FHRztJQUNJLDBCQUEwQjs7UUFFN0IsaUVBQWlFO1FBQ2pFLGFBQU8sSUFBSSxDQUFDLE9BQU8sMENBQUUsaUJBQWlCLENBQUM7SUFDOUMsQ0FBQztJQUFBLENBQUM7SUFFQzs7O09BR0c7SUFDSSxNQUFNLENBQUUsT0FBZ0I7UUFFM0IsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNJLE9BQU8sQ0FBRSxNQUFXO1FBRXZCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUFBLENBQUM7Q0F3Q0w7QUFsQ0c7SUFEQyx5REFBTyxDQUFDLENBQUMsQ0FBQztzQ0FDWTtBQXFJM0I7O0dBRUc7QUFDSSxNQUFNLG1CQUFvQixTQUFRLGtCQUFrQjtJQUEzRDs7UUFFSSxrQkFBYSxHQUFHLDZDQUFVLENBQUM7WUFDdkIsZUFBZSxFQUFFLFlBQVk7WUFDN0IsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO1lBQ3RELE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQztRQUVGLGVBQVUsR0FBRyw2Q0FBVSxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQztRQUVGLG9CQUFlLEdBQUcsNkNBQVUsQ0FBQztZQUN6QixnQ0FBZ0M7WUFDaEMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNwQixPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCLENBQUM7UUFFRixpQkFBWSxHQUFHLDZDQUFVLENBQUM7WUFDdEIsT0FBTyxFQUFFLEdBQUc7WUFDWixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxlQUFlLEVBQUUsUUFBUTtZQUMvQixRQUFRLEVBQUU7Z0JBQ1QsZUFBZSxFQUFFLFFBQVE7YUFDekI7WUFDRCxRQUFRLEVBQUU7Z0JBQ0EsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO2FBQ3hDO1NBQ0UsQ0FBQztJQUNOLENBQUM7Q0FBQTtBQWlDRDs7O0dBR0c7QUFDSSxNQUFNLE1BRUQsU0FBUSxLQUF1QjtJQUV2QyxZQUFhLFdBQWlCLEVBQUUsY0FBb0IsRUFBRSxPQUFrQixFQUFFLEdBQUcsT0FBd0I7UUFFakcsMERBQTBEO1FBQzFELEtBQUssQ0FBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUE2SGpDLGtEQUFrRDtRQUUxQyxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUE3SC9DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLEtBQUssSUFBSSxHQUFHLElBQUksT0FBTztZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFJRDs7T0FFRztJQUNJLFNBQVMsQ0FBRSxHQUFrQjtRQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksZ0JBQWdCLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUk5RDs7T0FFRztJQUNJLGdCQUFnQjtRQUVuQixPQUFPLG1CQUF5RCxDQUFDO0lBQ3hFLENBQUM7SUFBQSxDQUFDO0lBSUM7O09BRUc7SUFDSSxTQUFTOztRQUVaLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtEQUFlLE9BQUUsSUFBSSxDQUFDLE9BQU8sMENBQUUsdUJBQXVCLFFBQzFFLElBQUksQ0FBQyxjQUFjLDBDQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLEdBQUcsa0RBQWUsT0FBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxvQkFBb0IsUUFDcEUsSUFBSSxDQUFDLGNBQWMsMENBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtEQUFlLE9BQUUsSUFBSSxDQUFDLE9BQU8sMENBQUUseUJBQXlCLFFBQzlFLElBQUksQ0FBQyxjQUFjLDBDQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxlQUFlLEdBQUcsa0RBQWUsT0FBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxzQkFBc0IsUUFDeEUsSUFBSSxDQUFDLGNBQWMsMENBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFBQSxDQUFDO0lBRUM7O09BRUc7SUFDQyxXQUFXO1FBRVgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUFBLENBQUM7SUFFUSxNQUFNO1FBRVQsT0FBTztZQUNGLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDakI7SUFDVixDQUFDO0lBRU0sYUFBYTtRQUVoQiw4RkFBOEY7UUFDOUYsT0FBTyxzREFBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxJQUN6RyxJQUFJLENBQUMsY0FBYyxDQUNsQjtJQUNWLENBQUM7SUFFTSxVQUFVO1FBRWIsT0FBTyxzREFBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FDWDtJQUNWLENBQUM7SUFFTSxhQUFhO1FBRWhCLE9BQU8sc0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsSUFDckMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQzVDLHlEQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQ1osQ0FDWixDQUNDO0lBQ1YsQ0FBQztJQUlPLG9CQUFvQixDQUFFLENBQWU7UUFFekMsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNaLE9BQU87UUFFWCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sZUFBZSxDQUFFLElBQXNCO1FBRTNDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRWhDLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBdUJKO0FBakJHO0lBREMsaURBQU87OENBQ29CO0FBSTVCO0lBREMseURBQU8sQ0FBQyxDQUFDLENBQUM7dUNBQ3dDO0FBaUJ2RDs7O0dBR0c7QUFDSCxNQUFNLGdCQUFnQjtJQUVsQixZQUFhLEdBQWtCO1FBRTNCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Q0FXSjtBQW9FRDs7R0FFRztBQUNJLE1BQU0sWUFBYSxTQUFRLG1CQUFtQjtJQUFyRDs7UUFFSSxjQUFTLEdBQUcsNkNBQVUsQ0FBQztZQUNuQixPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1NBQzNCLENBQUM7UUFFRixTQUFJLEdBQUcsNkNBQVUsQ0FBQztZQUNkLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLEdBQUc7U0FDbEIsQ0FBQztRQUVGLFNBQUksR0FBRyw2Q0FBVSxDQUFDO1lBQ2QsT0FBTyxFQUFFLEdBQUc7WUFDWixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDO0lBQ04sQ0FBQztDQUFBO0FBSUQ7O0dBRUc7QUFDSSxNQUFNLE1BQU8sU0FBUSxNQUFvQjtJQXNCL0MsWUFBYSxPQUFZLEVBQUUsS0FBYyxFQUFFLG9CQUE2QyxFQUNwRixtQkFBa0M7UUFFckMsS0FBSyxDQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUEzQkU7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBRSxPQUFlLEVBQUUsS0FBYyxFQUN4QyxvQkFBNkMsRUFDNUQsbUJBQWtDO1FBRXJDLElBQUksTUFBTSxHQUFXLElBQUksTUFBTSxDQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFlTSxVQUFVO1FBRVYsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVsRCx3RkFBd0Y7UUFDeEYsdUNBQXVDO1FBQzdDLE9BQU8sc0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUztZQUNyQyxJQUFJO2dCQUNELHVEQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsSUFBRyxJQUFJLENBQVE7WUFFeEUsc0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUMvQixJQUFJLENBQUMsT0FBTyxDQUNYLENBQ0osQ0FBQztJQUNkLENBQUM7SUFJRTs7T0FFRztJQUNJLGdCQUFnQjtRQUVuQixPQUFPLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQUEsQ0FBQztJQUVDOzs7T0FHRztJQUNJLDBCQUEwQjs7UUFFN0IsbUZBQW1GO1FBQ25GLHlGQUF5RjtRQUN6Riw4Q0FBOEM7UUFDOUMsT0FBTyxXQUFJLENBQUMsT0FBTywwQ0FBRSxpQkFBaUIsS0FBSSxJQUFJO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjtZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBb0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNyRSxDQUFDO0lBQUEsQ0FBQztJQUlDLHdFQUF3RTtJQUNuRSxhQUFhLENBQUUsT0FBd0I7UUFFOUMsUUFBUSxPQUFPLEVBQ2Y7WUFDQztnQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFFLE9BQU8saUJBQXFCLENBQUM7Z0JBQ2hELE1BQU07WUFFUDtnQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksYUFBa0IsQ0FBQztnQkFDMUMsTUFBTTtZQUVQO2dCQUNDLElBQUksQ0FBQyxZQUFZLENBQUUsSUFBSSxhQUFrQixDQUFDO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFFLFFBQVEsaUJBQXNCLENBQUM7Z0JBQ2xELE1BQU07WUFFUDtnQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFFLEtBQUssY0FBbUIsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLGFBQWtCLENBQUM7Z0JBQzFDLE1BQU07WUFFUDtnQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFFLEtBQUssY0FBbUIsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLGFBQWtCLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUUsUUFBUSxpQkFBc0IsQ0FBQztnQkFDbEQsTUFBTTtTQUNQO0lBQ0YsQ0FBQztJQUVELG9EQUFvRDtJQUM1QyxvQkFBb0I7UUFFM0IsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUNqQjtZQUNDLGlCQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQzFELHFCQUF3QixDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQy9ELG9CQUF1QixDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQy9ELGtCQUFxQixDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRTFELE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVPLFlBQVksQ0FBRSxJQUFZLEVBQUUsR0FBaUI7UUFFcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBT0Q7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGVBQWU7QUFDZixFQUFFO0FBQ0YsbUdBQW1HO0FBSW5HOztHQUVHO0FBQ0ksTUFBTSxpQkFBa0IsU0FBUSxtQkFBbUI7SUFxQnRELFlBQWEsTUFBNEI7UUFFckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBckJsQixjQUFTLEdBQUcsNkNBQVUsQ0FBQztZQUNuQixLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsUUFBUTtZQUNwQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUFDO1FBRUYsYUFBUSxHQUFHLDZDQUFVLENBQUM7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFFRixTQUFJLEdBQUcsNkNBQVUsQ0FBQztZQUNkLFNBQVMsRUFBRSxRQUFRO1NBQ3RCLENBQUM7UUFLRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBSUQ7OztHQUdHO0FBQ0ksTUFBTSxXQUFZLFNBQVEsTUFBeUI7SUErQnpELFlBQWEsT0FBZ0IsRUFBRSxLQUFjLEVBQUUsaUJBQXVCO1FBRXJFLEtBQUssQ0FBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQWdGcEQsb0VBQW9FO1FBQzVELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBL0VwQixJQUFJLGlCQUFpQixJQUFJLElBQUk7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFuQ0U7Ozs7Ozs7Ozs7O09BV0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBRSxPQUFxQixFQUFFLE9BQVksRUFBRSxLQUFjLEVBQzlFLG9CQUE0QixHQUFHO1FBRS9CLElBQUksUUFBUSxHQUFHLElBQUksV0FBVyxDQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsa0JBQWtCLENBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxJQUNBO1lBQ0ksT0FBTyxNQUFNLE9BQU8sQ0FBQztTQUN4QjtnQkFFRDtZQUNJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwQjtJQUNSLENBQUM7SUFjRTs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSSxrQkFBa0IsQ0FBRSxpQkFBeUI7UUFFaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFFLE1BQVk7UUFFdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFDeEI7WUFDSSxZQUFZLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsS0FBSyxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSUcsVUFBVTtRQUVWLHdGQUF3RjtRQUN4Rix1Q0FBdUM7UUFDN0MsT0FBTyxzREFBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTO1lBQ3RDLDJEQUFVLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBSTtZQUNqRCxzREFBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQy9CLElBQUksQ0FBQyxPQUFPLENBQ1gsQ0FDSixDQUFDO0lBQ2QsQ0FBQztJQUlFOztPQUVHO0lBQ0ksZ0JBQWdCO1FBRW5CLE9BQU8saUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUFBLENBQUM7SUFJUyxPQUFPO1FBRVgsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FNSjs7Ozs7Ozs7Ozs7OztBQ3IxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUM3QjtBQUVsQyxpQkFBaUI7QUFDd0Q7QUFDekUsVUFBVTtBQUlWLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysb0dBQW9HO0FBQ3BHLHdEQUF3RDtBQUN4RCxFQUFFO0FBQ0YsbUdBQW1HO0FBQzVGLE1BQWUsV0FBWSxTQUFRLGdEQUFNO0lBTy9DLGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsVUFBVTtJQUlWOzs7T0FHRztJQUNILElBQVcsY0FBYztRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hGLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLGFBQWE7UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUMzQjtZQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsNkNBQTZDLENBQUMsQ0FBQztZQUM5RCxPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0YsVUFBVTtRQUVWLG9CQUFvQjtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLDBDQUEwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxVQUFVO1FBRVYsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLElBQUksRUFBRSx3REFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLFVBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBSUQsMEZBQTBGO0lBQzFGLG1FQUFtRTtJQUNuRSwyQ0FBMkM7SUFDcEMsU0FBUztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUVkLDhEQUE4RDtRQUNwRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLDJFQUFhLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpHLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osMkNBQTJDO0lBQ3BDLFdBQVc7UUFFWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3pCO1lBQ0ksaUNBQWlDO1lBQ2pDLElBQ0E7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQjtZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUUsMENBQTBDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvRTtTQUNKO1FBRVAsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRXRCLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO0lBQ1gsQ0FBQztJQUlFLDhGQUE4RjtJQUM5RixrRUFBa0U7SUFDckUsMkNBQTJDO0lBQ2pDLFFBQVE7UUFFWCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUN0QjtZQUNJLGlDQUFpQztZQUNqQyxJQUNBO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7WUFDRCxPQUFPLEdBQUcsRUFDVjtnQkFDSSxPQUFPLENBQUMsS0FBSyxDQUFFLHVDQUF1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUU7U0FDSjtJQUNMLENBQUM7SUFJSiw0RkFBNEY7SUFDNUYscURBQXFEO0lBQ3JELElBQVcscUJBQXFCO1FBRS9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsd0JBQXdCO0lBQ2pCLFdBQVcsQ0FBRSxHQUFRLEVBQUUsSUFBYztRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQVFEOzs7Ozs7Ozs7Ozs7O0FDL0pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFHckgsaUJBQWlCO0FBQ3lEO0FBQzFFLFVBQVU7QUFDVixDQUFDLENBQUMsNEVBQTRFO0FBOEc5RTs7Ozs7O0dBTUc7QUFFSCxTQUFTLFdBQVcsQ0FBRSxHQUFRO0lBRTdCLElBQUksR0FBRyxJQUFJLElBQUk7UUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNOLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUMvQixPQUFPLEdBQUcsQ0FBQztTQUNQLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUM7UUFDM0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFFN0UsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQUlELG1HQUFtRztBQUNuRyx5RkFBeUY7QUFDekYsOENBQThDO0FBQzlDLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsOEZBQThGO0FBQzlGLGlEQUFpRDtBQUNqRCxFQUFFO0FBQ0YsbUdBQW1HO0FBQzVGLE1BQU0sT0FBTztJQTZHbkIsa0RBQWtEO0lBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFnQixFQUFFLElBQXVEO1FBRXhHLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFJRCxrREFBa0Q7SUFDM0MsTUFBTSxDQUFDLGVBQWUsQ0FBRSxRQUFnQjtRQUU5QyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUlELHNGQUFzRjtJQUN0RixvRkFBb0Y7SUFDN0UsTUFBTSxDQUFDLE9BQU8sQ0FBRSxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxJQUF5QixFQUFFLE9BQVk7UUFFN0YsMkJBQTJCO1FBQzNCLElBQUksSUFBSSxLQUFLLFNBQVM7WUFDckIsR0FBRyxDQUFDLFlBQVksQ0FBRSxRQUFRLEVBQUUsV0FBVyxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFFcEQ7WUFDQyxtQ0FBbUM7WUFDbkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxJQUFJLFFBQVEsS0FBSyxTQUFTO2dCQUN6QixRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXJCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7O2dCQUVsQyxHQUFHLENBQUMsWUFBWSxDQUFFLFFBQVEsRUFBRSxXQUFXLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDJGQUEyRjtJQUMzRiwwRkFBMEY7SUFDMUYsMERBQTBEO0lBQ25ELE1BQU0sQ0FBQyxVQUFVLENBQUUsR0FBWSxFQUFFLFFBQWdCLEVBQUUsSUFBeUIsRUFBRSxVQUFlLEVBQUUsVUFBZTtRQUVwSCwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUN0QjtZQUNDLG9GQUFvRjtZQUNwRiw0REFBNEQ7WUFDNUQsSUFBSSxVQUFVLEtBQUssVUFBVTtnQkFDNUIsT0FBTyxLQUFLLENBQUM7aUJBRWQ7Z0JBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBRSxRQUFRLEVBQUUsV0FBVyxDQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBRXRELGlCQUFpQjtnQkFDaEIsMERBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLDBEQUFhLENBQUMsSUFBSSxFQUFFLHdEQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLFVBQVU7Z0JBRVYsT0FBTyxJQUFJLENBQUM7YUFDWjtTQUNEO1FBRUQsdUZBQXVGO1FBQ3ZGLHNGQUFzRjtRQUN0RixxRUFBcUU7UUFDckUsSUFBSSxTQUFjLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDM0I7WUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXpELGdFQUFnRTtZQUNoRSxJQUFJLFNBQVMsS0FBSyxTQUFTO2dCQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQ0ksSUFBSSxVQUFVLEtBQUssVUFBVTtZQUNqQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBRXhCLG1DQUFtQztRQUNuQyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxLQUFLLFNBQVM7WUFDekIsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVyQiwwRkFBMEY7UUFDMUYsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBRXhDO1lBQ0MsaUZBQWlGO1lBQ2pGLDhFQUE4RTtZQUM5RSw0Q0FBNEM7WUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTdCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7O2dCQUVwQyxHQUFHLENBQUMsWUFBWSxDQUFFLFFBQVEsRUFBRSxXQUFXLENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUVELGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO1FBRVYscURBQXFEO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUlELGdFQUFnRTtJQUN6RCxNQUFNLENBQUMsVUFBVSxDQUFFLEdBQVksRUFBRSxRQUFnQixFQUFFLElBQXlCO1FBRWxGLDJCQUEyQjtRQUMzQixJQUFJLElBQUksS0FBSyxTQUFTO1lBQ3JCLEdBQUcsQ0FBQyxlQUFlLENBQUUsUUFBUSxDQUFDLENBQUM7YUFFaEM7WUFDQyxtQ0FBbUM7WUFDbkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxJQUFJLFFBQVEsS0FBSyxTQUFTO2dCQUN6QixRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQzdCO2dCQUNDLElBQUksQ0FBQyxNQUFNLENBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVCOztnQkFFQSxHQUFHLENBQUMsZUFBZSxDQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLElBQUksRUFBRSx3REFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLFVBQVU7SUFDWCxDQUFDOztBQXJQRCx3RkFBd0Y7QUFDeEYsaUZBQWlGO0FBQ2xFLGlCQUFTLEdBQ3hCO0lBQ0MsZ0ZBQWdGO0lBQ2hGLEtBQUssRUFBRSxFQUFFLElBQUksY0FBZSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFO0lBQy9GLEtBQUssRUFBRSxFQUFFLElBQUksY0FBZSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFO0lBQy9GLFlBQVksRUFBRSxFQUFFLElBQUksY0FBZSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRTtJQUNwSCxPQUFPLEVBQUUsRUFBRSxJQUFJLGNBQWUsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO0lBQ3ZHLGNBQWMsRUFBRSxFQUFFLElBQUksY0FBZSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRTtJQUV4SCxTQUFTO0lBQ1QsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLGVBQWUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN6QyxZQUFZLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDdEMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDNUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3hDLFFBQVEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNsQyxJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDOUIsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLE9BQU8sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNqQyxjQUFjLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDeEMsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsV0FBVyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3JDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxRQUFRLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzlCLE9BQU8sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNqQyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMscUNBQXFDO0lBQ3JDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxRQUFRLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLElBQUksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM5QixjQUFjLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDeEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsS0FBSyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQy9CLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzNDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLFFBQVEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNsQyxLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsSUFBSSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzlCLFVBQVUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNwQyxjQUFjLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDeEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLFNBQVMsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNuQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM1QyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7SUFDdkQsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7SUFDdkQsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLFFBQVEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNsQyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDOUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLGFBQWEsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN2QyxXQUFXLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDckMsWUFBWSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3RDLFlBQVksRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN0QyxXQUFXLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDckMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLFdBQVcsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNyQyxTQUFTLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDbkMsUUFBUSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2xDLFVBQVUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNwQyxLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDL0IsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLE1BQU0sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNoQyxvREFBb0Q7SUFDcEQsTUFBTSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2hDLE9BQU8sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNqQyxNQUFNLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDaEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLE1BQU0sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNoQyxPQUFPLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDakMsVUFBVSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3BDLE1BQU0sRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNoQyxXQUFXLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDckMsUUFBUSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2xDLFVBQVUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNwQyxVQUFVLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDcEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ25DLFVBQVUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUNwQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMxQyxhQUFhLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDdkMsYUFBYSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ3ZDLGVBQWUsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUN6QyxZQUFZLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQ2pDLEtBQUssRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMvQixnQkFBZ0IsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUMxQyxlQUFlLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7SUFDekMsSUFBSSxFQUFFLEVBQUUsSUFBSSxlQUFnQixFQUFFO0lBQzlCLEdBQUcsRUFBRSxFQUFFLElBQUksZUFBZ0IsRUFBRTtJQUM3QixLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWdCLEVBQUU7Q0FDL0IsQ0FBQztBQW1KSCx1Q0FBdUM7QUFDdkMsMENBQTBDO0FBQzFDLHdIQUF3SDtBQUN4SCxpREFBaUQ7QUFDakQsc0lBQXNJO0FBQ3RJLDBDQUEwQztBQUMxQyx3SEFBd0g7QUFDeEgsaURBQWlEO0FBQ2pELHNJQUFzSTtBQUl0SSxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDJGQUEyRjtBQUMzRiwyRkFBMkY7QUFDM0YsaUdBQWlHO0FBQ2pHLDhGQUE4RjtBQUM5Riw4RkFBOEY7QUFDOUYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsU0FBUyxZQUFZLENBQUUsR0FBWSxFQUFFLFFBQWdCLEVBQUUsT0FBaUI7SUFFdkUsOERBQWUsQ0FBRSxHQUFrQixFQUFFLE9BQU8sZUFBcUIsQ0FBQztBQUNuRSxDQUFDO0FBS0QsU0FBUyxhQUFhLENBQUUsUUFBZ0IsRUFBRSxVQUFvQixFQUFFLFVBQW9CO0lBRW5GLElBQUksR0FBRyxHQUFHLDREQUFhLENBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWpELDhFQUE4RTtJQUM5RSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3RDLENBQUM7QUFJRCxTQUFTLGVBQWUsQ0FBRSxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxTQUF5QjtJQUVsRixvRUFBcUIsQ0FBRSxHQUFrQixFQUFFLFNBQVMsZUFBcUIsQ0FBQztBQUMzRSxDQUFDO0FBS0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixpR0FBaUc7QUFDakcsa0dBQWtHO0FBQ2xHLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLFNBQVMsWUFBWSxDQUFFLEdBQVksRUFBRSxRQUFnQixFQUFFLE9BQVk7SUFFbEUsbUZBQW1GO0lBQ2xGLEdBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzlCLENBQUM7QUFLRCxTQUFTLGFBQWEsQ0FBRSxRQUFnQixFQUFFLGFBQWtCLEVBQUUsVUFBZTtJQUU1RSx3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHFFQUFxRTtJQUNyRSxPQUFPLFVBQVUsQ0FBQztBQUNuQixDQUFDO0FBS0QsU0FBUyxlQUFlLENBQUUsR0FBWSxFQUFFLFFBQWdCO0lBRXZELG1GQUFtRjtJQUNsRixHQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUMzQixDQUFDO0FBS0QsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrR0FBa0c7QUFDbEcsdUZBQXVGO0FBQ3ZGLHFEQUFxRDtBQUNyRCxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLFNBQVMsb0JBQW9CLENBQUUsUUFBZ0IsRUFBRSxhQUFrQixFQUFFLFVBQWU7SUFFbkYsNEZBQTRGO0lBQzVGLDRCQUE0QjtJQUM1QixPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDO0FBS0QsU0FBUyxzQkFBc0IsQ0FBRSxHQUFZLEVBQUUsUUFBZ0I7SUFFOUQsYUFBYTtBQUNkLENBQUM7QUFLRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLCtGQUErRjtBQUMvRixtR0FBbUc7QUFDbkcsbURBQW1EO0FBQ25ELEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsU0FBUyxjQUFjLENBQUUsR0FBWSxFQUFFLFFBQWdCLEVBQUUsT0FBWTtJQUVwRSxtRkFBbUY7SUFDbEYsR0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDaEMsQ0FBQztBQUtELFNBQVMsZUFBZSxDQUFFLFFBQWdCLEVBQUUsYUFBa0IsRUFBRSxVQUFlO0lBRTlFLHdGQUF3RjtJQUN4Riw0QkFBNEI7SUFDNUIsT0FBTyxVQUFVLENBQUM7QUFDbkIsQ0FBQztBQUtELFNBQVMsaUJBQWlCLENBQUUsR0FBWSxFQUFFLFFBQWdCO0lBRXpELG1GQUFtRjtJQUNsRixHQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDMWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CO0FBSWtCO0FBRXJDLGlCQUFpQjtBQUN3RDtBQUN6RSxVQUFVO0FBSVYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRiw4Q0FBOEM7QUFDOUMsRUFBRTtBQUNGLG1HQUFtRztBQUM1RixNQUFNLEtBQU0sU0FBUSxnREFBTTtJQWlCaEMsWUFBYSxPQUFlLEVBQUUsS0FBVSxFQUFFLFFBQWU7UUFFeEQsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxjQUFhLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxLQUFLLEVBQ1Q7WUFDQyxpRkFBaUY7WUFDakYsdUNBQXVDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQztJQUlELGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsVUFBVTtJQUlWLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUVkLGlFQUFpRTtRQUNqRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2RkFBNkY7SUFDN0YsSUFBVyxLQUFLLEtBQVMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUkzQyw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBSUQsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxLQUFLO1FBRVgsMEVBQTBFO1FBQzFFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxLQUFLLFNBQVMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztZQUNoQix1REFBTSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxHQUFHLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFJRCx5RUFBeUU7SUFDekUsMkNBQTJDO0lBQ3BDLE9BQU87UUFFYixzRkFBc0Y7UUFDdEYsb0ZBQW9GO1FBQ3BGLHdGQUF3RjtRQUN4RixtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDekIsdURBQU0sQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEMsOEJBQThCO1FBQzdCLDRFQUE0RTtRQUM1RSxtRkFBbUY7UUFDbkYseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsVUFBVTtRQUVWLHFDQUFxQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUUvQixXQUFXO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFaEIsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLEdBQUcsRUFBRSx3REFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLFVBQVU7SUFDWCxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLG1GQUFtRjtRQUNuRixRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFNLEtBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsd0ZBQXdGO1FBQ3hGLElBQUksWUFBWSxHQUFHLENBQUMsK0RBQWEsQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFHLEtBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RSx3RUFBd0U7UUFDeEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3hELEtBQWUsQ0FBQyxRQUFRLElBQUssS0FBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFJLEtBQWUsQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBSSxLQUFlLENBQUMsUUFBUSxDQUFDO1FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUlELDRDQUE0QztJQUNyQyxZQUFZLENBQUUsS0FBUztRQUU3QixNQUFNLFFBQVEsR0FBVSxLQUFjLENBQUM7UUFDdkMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXRCLHVFQUF1RTtRQUN2RSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFDN0I7WUFDQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXhCLGtGQUFrRjtZQUNsRixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ3pCLHVEQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFFRCxxRkFBcUY7UUFDckYsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFFOUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLG1DQUFtQztJQUMzQixVQUFVO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNkLE9BQU87UUFFUixJQUFJLE9BQVksRUFBRSxRQUFrQixFQUFFLFFBQWtCLENBQUM7UUFDekQsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUMvQjtZQUNDLElBQUksUUFBUSxLQUFLLEtBQUssRUFDdEI7Z0JBQ0MsNkVBQTZFO2dCQUM3RSxTQUFTO2FBQ1Q7WUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssRUFDeEM7Z0JBQ0MsMERBQTBEO2dCQUMxRCxTQUFTO2FBQ1Q7aUJBQ0ksSUFBSSxRQUFRLEtBQUssS0FBSyxFQUMzQjtnQkFDQyx3QkFBd0I7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ25CO2lCQUNJLElBQUksUUFBUSxLQUFLLGdCQUFnQixFQUN0QztnQkFDQyxtQ0FBbUM7Z0JBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNDLHNGQUFzRjtnQkFDdEYsbUZBQW1GO2dCQUNuRixjQUFjO2dCQUNkLFFBQVEsR0FBRyxpREFBTyxDQUFDLGVBQWUsQ0FBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWMsQ0FBQztnQkFDcEQsSUFBSSxRQUFRLGlCQUFrQixFQUM5QjtvQkFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFDeEQ7cUJBQ0ksSUFBSSxRQUFRLGtCQUFtQixFQUNwQztvQkFDQyxJQUFJLFNBQVMsR0FBRyx5QkFBeUIsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzlELElBQUksU0FBUyxFQUNiO3dCQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs0QkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7d0JBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUNsQztpQkFDRDtxQkFDSSx3Q0FBd0M7aUJBQzdDO29CQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBRXZCLG9FQUFvRTtvQkFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUE4QixFQUFFLEdBQUcsRUFBRSxPQUFPO3dCQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUM7aUJBQ3hCO2FBQ0Q7U0FDRDtJQUNGLENBQUM7SUFJRCxzQ0FBc0M7SUFDOUIsUUFBUTtRQUVmLGFBQWE7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDbkUsVUFBVTtRQUVWLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFDM0I7WUFDQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLGlEQUFPLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0YsQ0FBQztJQUlELDBDQUEwQztJQUNsQyxXQUFXLENBQUUsUUFBNkM7UUFFakUsNkNBQTZDO1FBQzdDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQix3RkFBd0Y7UUFDeEYsdUNBQXVDO1FBQ3ZDLElBQUksUUFBUSxFQUNaO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQ3pCO2dCQUNDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQzFCO29CQUNDLCtFQUErRTtvQkFDL0Usd0NBQXdDO29CQUN4QyxpREFBTyxDQUFDLFVBQVUsQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUM7cUJBRUQ7b0JBQ0MsK0VBQStFO29CQUMvRSxtREFBbUQ7b0JBQ25ELGlEQUFPLENBQUMsVUFBVSxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEU7YUFDRDtTQUNEO1FBRUQsNEVBQTRFO1FBQzVFLElBQUksUUFBUSxFQUNaO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQ3pCO2dCQUNDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztvQkFDakMsU0FBUztnQkFFVixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLGlEQUFPLENBQUMsT0FBTyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckQ7U0FDRDtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFJRCxnREFBZ0Q7SUFDeEMsU0FBUztRQUVoQixhQUFhO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBRSxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3JFLFVBQVU7UUFFVixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBSUQsc0ZBQXNGO0lBQ3RGLG9GQUFvRjtJQUM1RSxRQUFRLENBQUUsSUFBWSxFQUFFLEtBQXVCO1FBRXRELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxLQUFLLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxVQUFVO0lBQ1gsQ0FBQztJQUlELDhCQUE4QjtJQUM3Qiw0RUFBNEU7SUFDNUUsbUZBQW1GO0lBQ25GLHlCQUF5QjtJQUNqQixZQUFZO1FBRW5CLGFBQWE7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDZixNQUFNLElBQUksS0FBSyxDQUFFLG1EQUFtRCxDQUFDLENBQUM7UUFDeEUsVUFBVTtRQUVWLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU07WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRixVQUFVO0lBSVYscURBQXFEO0lBQzdDLFdBQVcsQ0FBRSxJQUFZLEVBQUUsS0FBdUI7UUFFekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckUsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLEtBQUssRUFBRSx3REFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLFVBQVU7SUFDWCxDQUFDO0lBSUQsdUNBQXVDO0lBQy9CLFlBQVksQ0FBRSxTQUErQztRQUVwRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTVCLG9GQUFvRjtRQUNwRixnREFBZ0Q7UUFDaEQsSUFBSSxTQUFTLEVBQ2I7WUFDQyxLQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsRUFDMUI7Z0JBQ0MsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsUUFBUTtvQkFDWixJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzs7b0JBRWxDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM3QztTQUNEO1FBRUQsb0ZBQW9GO1FBQ3BGLElBQUksU0FBUyxFQUNiO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQzFCO2dCQUNDLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztvQkFDbkMsU0FBUztnQkFFVixJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUlELDZGQUE2RjtJQUM3RiwwRkFBMEY7SUFDMUYsaUJBQWlCO0lBQ1QsV0FBVyxDQUFFLElBQVksRUFBRSxRQUEwQixFQUFFLFFBQTBCO1FBRXhGLGlHQUFpRztRQUNqRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLE9BQU87WUFDeEMsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSTtZQUMvQixRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQzNDO1lBQ0MsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7YUFFRDtZQUNDLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzRSxrREFBa0Q7WUFDbEQsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEUsaUJBQWlCO1lBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLEtBQUssRUFBRSx3REFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLFVBQVU7WUFFVixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUlELDZGQUE2RjtJQUM3Riw4RkFBOEY7SUFDOUYsNkZBQTZGO0lBQzdGLDJGQUEyRjtJQUMzRiw2RkFBNkY7SUFDN0YsVUFBVTtJQUNGLGtCQUFrQixDQUFFLEtBQXVCO1FBRWxELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBSUQsNkJBQTZCO0lBQ3JCLGNBQWM7UUFFckIsYUFBYTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQixNQUFNLElBQUksS0FBSyxDQUFFLDBEQUEwRCxDQUFDLENBQUM7UUFDL0UsVUFBVTtRQUVWLGlEQUFpRDtRQUNqRCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQ2pDO1lBQ0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4Qyx1RkFBdUY7WUFDdkYsbUJBQW1CO1lBQ25CLElBQ0E7Z0JBQ0MsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxHQUFHLEVBQ1Y7Z0JBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxnREFBZ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLFNBQVM7YUFDVDtTQUNEO0lBQ0YsQ0FBQztJQUlELDhDQUE4QztJQUN0QyxpQkFBaUIsQ0FBRSxTQUFrQjtRQUU1QyxhQUFhO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUUsNkRBQTZELENBQUMsQ0FBQztRQUNsRixVQUFVO1FBRVYsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUNqQztZQUNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFDQTtnQkFDQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsbURBQW1ELElBQUksTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMzRjtTQUNEO0lBQ0YsQ0FBQztJQUlELDBDQUEwQztJQUNsQyxpQkFBaUIsQ0FBRSxjQUF5RDtRQUVuRixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXRDLHNGQUFzRjtRQUN0RixnREFBZ0Q7UUFDaEQsSUFBSSxjQUFjLEVBQ2xCO1lBQ0MsS0FBSyxJQUFJLElBQUksSUFBSSxjQUFjLEVBQy9CO2dCQUNDLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLGFBQWEsRUFDbEI7b0JBQ0MsK0VBQStFO29CQUMvRSx3QkFBd0I7b0JBQ3hCLElBQ0E7d0JBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3hDO29CQUNELE9BQU8sR0FBRyxFQUNWO3dCQUNDLE9BQU8sQ0FBQyxLQUFLLENBQUUsbURBQW1ELElBQUksTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztxQkFDM0Y7aUJBQ0Q7cUJBRUQ7b0JBQ0Msd0RBQXdEO29CQUN4RCxJQUNBO3dCQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsT0FBTyxHQUFHLEVBQ1Y7d0JBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxnREFBZ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RjtvQkFFRCxhQUFhLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7aUJBQzlDO2FBQ0Q7U0FDRDtRQUVELHNGQUFzRjtRQUN0RixJQUFJLGNBQWMsRUFDbEI7WUFDQyxLQUFLLElBQUksSUFBSSxJQUFJLGNBQWMsRUFDL0I7Z0JBQ0MsSUFBSSxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDO29CQUM3QyxTQUFTO2dCQUVWLElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFekMsdUZBQXVGO2dCQUN2RixtQkFBbUI7Z0JBQ25CLElBQ0E7b0JBQ0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1RjtnQkFDRCxPQUFPLEdBQUcsRUFDVjtvQkFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLGdEQUFnRCxJQUFJLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3hGLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixTQUFTO2lCQUNUO2FBQ0Q7U0FDRDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO0lBQ25DLENBQUM7Q0FnQ0Q7QUFZQSxDQUFDO0FBeUJELENBQUM7QUFlRCxDQUFDO0FBSUYsOEZBQThGO0FBQzlGLDhFQUE4RTtBQUM5RSxTQUFTLHlCQUF5QixDQUFFLElBQW1CLEVBQUUsT0FBWTtJQUVwRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVU7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBNkIsRUFBRSxDQUFDO1NBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDL0I7UUFDQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN4QjtZQUNDLElBQUksT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztnQkFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBdUIsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBWSxFQUFFLENBQUM7O2dCQUU5RixPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUF1QixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM5RTthQUNJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQXVCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBWSxFQUFFLENBQUM7S0FDakg7SUFFRCxrRkFBa0Y7SUFDbEYsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQztBQXFCRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDRGQUE0RjtBQUM1RixnR0FBZ0c7QUFDaEcsbUdBQW1HO0FBQ25HLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQU0sT0FBTztJQU9aLGdEQUFnRDtJQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFFLE9BQWUsRUFBRSxJQUFnQjtRQUV4RCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBSUQsNEVBQTRFO0lBQ3JFLE1BQU0sQ0FBQyxRQUFRLENBQUUsT0FBZTtRQUV0QyxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFJRCxxREFBcUQ7SUFDOUMsTUFBTSxDQUFDLGFBQWEsQ0FBRSxPQUFlO1FBRTNDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsbUZBQW1GO0lBQzVFLE1BQU0sQ0FBQyxhQUFhLENBQUUsSUFBZ0I7UUFFNUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQztZQUN2QixPQUFRLElBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOztZQUVoRixPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFlLENBQUM7SUFDNUQsQ0FBQztJQUlELDJGQUEyRjtJQUMzRix3QkFBd0I7SUFDakIsTUFBTSxDQUFDLGdCQUFnQixDQUFFLE9BQWU7UUFFOUMsSUFBSSxJQUFJLEdBQWUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFJRCxzRkFBc0Y7SUFDL0UsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFnQixFQUFFLE9BQWU7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQztZQUN2QixPQUFRLElBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDOztZQUVsRixPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDN0QsQ0FBQztJQUlELHdEQUF3RDtJQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUUsT0FBZTtRQUU5QyxJQUFJLElBQUksR0FBZSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzVELENBQUM7O0FBbEVELHlDQUF5QztBQUMzQixpQkFBUyxHQUFXLDRCQUE0QixDQUFDO0FBcUUvRCxvREFBb0Q7QUFDckMsYUFBSyxHQUNwQjtJQUNDLEdBQUcsRUFBRSxLQUFLO0lBRVYsQ0FBQyxFQUFFLElBQUk7SUFDUCxPQUFPLEVBQUUsS0FBSztJQUNkLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGdCQUFnQixFQUFFLEtBQUs7SUFFdkIsTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUsS0FBSztJQUNmLFlBQVksRUFBRSxlQUFlO0lBRTdCLElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUVkLE9BQU8sRUFBRSxLQUFLO0lBRWQsT0FBTyxFQUFFLEtBQUs7SUFDZCxhQUFhLEVBQUUsS0FBSztJQUNwQixtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFlBQVksRUFBRSxLQUFLO0lBQ25CLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxjQUFjLEVBQUUsS0FBSztJQUNyQixPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsV0FBVyxFQUFFLEtBQUs7SUFDbEIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsUUFBUSxFQUFFLEtBQUs7SUFDZixZQUFZLEVBQUUsS0FBSztJQUNuQixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLE1BQU0sRUFBRSxLQUFLO0lBQ2IsWUFBWSxFQUFFLEtBQUs7SUFDbkIsTUFBTSxFQUFFLEtBQUs7SUFDYixhQUFhLEVBQUUsS0FBSztJQUVwQixDQUFDLEVBQUUsS0FBSztJQUVSLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLEtBQUs7SUFFaEIsS0FBSyxFQUFFLEtBQUs7SUFFWixJQUFJLEVBQUUsS0FBSztJQUNYLGNBQWMsRUFBRSxLQUFLO0lBRXJCLE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxFQUFFLEtBQUs7SUFDWCxRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxLQUFLO0lBRVosSUFBSSxFQUFFLEtBQUs7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsUUFBUSxFQUFFLEtBQUs7SUFFZixjQUFjLEVBQUUsS0FBSztJQUNyQixJQUFJLEVBQUUsS0FBSztJQUVYLE1BQU0sRUFBRSxJQUFJO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixVQUFVLEVBQUUsS0FBSztJQUNqQixJQUFJLEVBQUUsS0FBSztJQUNYLEtBQUssRUFBRSxJQUFJO0lBQ1gsTUFBTSxFQUFFLEtBQUs7SUFDYixNQUFNLEVBQUUsS0FBSztJQUViLElBQUksRUFBRSxLQUFLO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsSUFBSTtJQUNYLFFBQVEsRUFBRSxLQUFLO0lBRWYsR0FBRyxFQUFFLEtBQUs7SUFFVixJQUFJLEVBQUUsS0FBSztDQUNYOzs7Ozs7Ozs7Ozs7O0FDeDVCRjtBQUFBO0FBQUE7QUFBQTtBQUFpRztBQUVqRyxpQkFBaUI7QUFDd0Q7QUFDekUsVUFBVTtBQUlWOztHQUVHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFFLGdCQUFnQixDQUFDLENBQUM7QUFJL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0ksTUFBTSxXQUFZLFNBQVEsZ0RBQU07SUFFdEMsWUFBYSxLQUFxQjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLG9CQUFtQixDQUFDO1FBRTdCLHFGQUFxRjtRQUNyRixnREFBZ0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBNkIsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFHTSxXQUFXLENBQUUsSUFBVztRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBSUQsaUJBQWlCO0lBQ2pCLElBQVcsYUFBYSxLQUFvQixPQUFPLDBEQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxVQUFVO0lBQ1YsQ0FBQyxDQUFDLDRFQUE0RTtJQVU5RTs7OztPQUlHO0lBQ0gsSUFBVyxjQUFjLEtBQWMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFJbEUsdUZBQXVGO0lBQzFGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsa0VBQWtFO1FBQ2xFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNqQixPQUFPLElBQUksQ0FBQztRQUV0QixvQkFBb0I7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSw2Q0FBNkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsVUFBVTtRQUVWLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxVQUFVO1FBRVYsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUlELDBGQUEwRjtJQUMxRixtRUFBbUU7SUFDbkUsMkNBQTJDO0lBQ3BDLFNBQVM7UUFFVCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFdEMsb0ZBQW9GO1FBQ3BGLDJGQUEyRjtRQUNyRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVoQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRywrREFBYSxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0YsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLElBQUksRUFBRSx3REFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLFVBQVU7SUFDWCxDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVYLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsaUJBQWlCO1FBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLElBQUksRUFBRSx3REFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLFVBQVU7SUFDWCxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLDBFQUEwRTtJQUNuRSxnQkFBZ0IsQ0FBRSxLQUFTO1FBRWpDLElBQUksY0FBYyxHQUFHLEtBQW9CLENBQUM7UUFFMUMscUZBQXFGO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNyRixDQUFDO0lBSUQsOEZBQThGO0lBQzlGLDBGQUEwRjtJQUMxRiw4RkFBOEY7SUFDOUYsMEVBQTBFO0lBQzFFLDJDQUEyQztJQUNwQyxhQUFhLENBQUUsS0FBUztRQUU5QixJQUFJLGNBQWMsR0FBRyxLQUFvQixDQUFDO1FBRTFDLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBRXRDLHVGQUF1RjtRQUN2RixJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFaEMsMEVBQTBFO1FBQzFFLDRFQUE0RTtRQUM1RSxPQUFPLHNEQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUlELDRDQUE0QztJQUM1QywyQ0FBMkM7SUFDakMsWUFBWSxDQUFFLEtBQVM7UUFFMUIsNERBQTREO1FBQzVELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFJRyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQWMsRUFBRSxHQUFTLEVBQUUsT0FBYTtRQUU3RCw2REFBNkQ7UUFDN0QsSUFBSSxPQUFPLEdBQVEsR0FBRyxJQUFJLE9BQU8sSUFBSSw0REFBa0IsSUFBSSxJQUFJLENBQUM7UUFFaEUsa0ZBQWtGO1FBQ2xGLElBQUksY0FBYyxHQUF5QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsT0FBTyxjQUFjLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBSU0sTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFjLEVBQUUsR0FBUyxFQUFFLE9BQWEsRUFBRSxJQUFZO1FBRTNFLGdCQUFnQjtRQUNoQixJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUU7WUFDTixPQUFPO1FBRVIsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDZixFQUFFLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUN6QixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUlFLDJGQUEyRjtJQUMzRixjQUFjO0lBQ04saUJBQWlCO1FBRTNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSU8sY0FBYztRQUVyQixJQUFJLGNBQWMsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxFQUNuQjtZQUNDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUMzQztRQUVELGNBQWMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR08sa0JBQWtCO1FBRXpCLElBQUksY0FBYyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksY0FBYztZQUNqQixjQUFjLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBd0JEOzs7Ozs7Ozs7Ozs7O0FDelJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDSDtBQUV0RCxpQkFBaUI7QUFDd0Q7QUFDekUsVUFBVTtBQUlWOztHQUVHO0FBQ0ksTUFBTSxNQUFPLFNBQVEsZ0RBQU07SUFVakMsWUFBYSxJQUFrQixFQUFFLEtBQVUsRUFBRSxRQUFlO1FBRTNELEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksbUJBQWtCLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxFQUNUO1lBQ0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQzFCO2dCQUNDLElBQUksT0FBTyxHQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQzdDO29CQUNDLG1EQUFtRDtvQkFDbkQsU0FBUztpQkFDVDtxQkFDSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQzNCO29CQUNDLCtEQUErRDtvQkFDL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7aUJBQ25COztvQkFFQSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNoQztZQUVELHFGQUFxRjtZQUNyRixhQUFhO1lBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7Z0JBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNyQjtRQUVELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQTVDRCwwRUFBMEU7SUFDbkUsTUFBTSxDQUFDLGFBQWEsQ0FBRSxFQUFNO1FBRWxDLE9BQVEsRUFBYSxDQUFDLElBQUksS0FBSyxpREFBUSxDQUFDO0lBQ3pDLENBQUM7SUF3Q0EsQ0FBQztJQUlILGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsVUFBVTtJQUlULHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUVkLGtFQUFrRTtRQUNsRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtZQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELE1BQU07UUFFWixvQkFBb0I7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSx5Q0FBeUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsVUFBVTtRQUVWLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsaUJBQWlCO0lBQ2hCLDBGQUEwRjtJQUMxRixtRUFBbUU7SUFDbkUsMkNBQTJDO0lBQ3BDLFNBQVM7UUFFZiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVqQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0YsVUFBVTtJQUlWLHdGQUF3RjtJQUN4RiwwRUFBMEU7SUFDbkUsZ0JBQWdCLENBQUUsS0FBUztRQUVqQyx1REFBdUQ7UUFDdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFNLEtBQWdCLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFJRCw4RkFBOEY7SUFDOUYsMEZBQTBGO0lBQzFGLDhGQUE4RjtJQUM5RiwwRUFBMEU7SUFDMUUsMkNBQTJDO0lBQ3BDLGFBQWEsQ0FBRSxLQUFTO1FBRTlCLElBQUksU0FBUyxHQUFHLEtBQWUsQ0FBQztRQUVoQyxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBRXpCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRTdCLHNGQUFzRjtRQUN0RixvRkFBb0Y7UUFDcEYsK0JBQStCO1FBQy9CLE9BQU8sc0RBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0NBYUQ7Ozs7Ozs7Ozs7Ozs7QUNqS0Q7QUFBQTtBQUFBO0FBQXlEO0FBSXpELFVBQVU7QUFJVixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDhGQUE4RjtBQUM5RixFQUFFO0FBQ0YsbUdBQW1HO0FBQzVGLE1BQU0saUJBQWtCLFNBQVEscURBQVc7SUFFakQsWUFBYSxJQUFnQjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLDBCQUF5QixDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBSUYsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsc0ZBQXNGO1FBQ3RGLHNDQUFzQztRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ25GLENBQUM7SUFJRCxrRkFBa0Y7SUFDbEYsZ0VBQWdFO0lBQ2hFLElBQVcsR0FBRyxLQUFVLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFJM0MsOEZBQThGO0lBQzlGLDBGQUEwRjtJQUMxRiw4RkFBOEY7SUFDOUYsMEVBQTBFO0lBQzFFLDJDQUEyQztJQUNwQyxhQUFhLENBQUUsS0FBUztRQUU5QixxRUFBcUU7UUFDckUsSUFBSSxPQUFPLEdBQUksS0FBMkIsQ0FBQyxJQUFJLENBQUM7UUFDaEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFFMUMseUZBQXlGO1FBQ3pGLDJDQUEyQztRQUMzQyxJQUFJLGFBQWEsRUFDakI7WUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakI7UUFFRCxPQUFPLHNEQUFZLENBQUMsYUFBYSxDQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsRUQ7QUFBQTtBQUFBO0FBQUE7QUFBbUc7QUFDbEM7QUFJakUsVUFBVTtBQUlWLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixtR0FBbUc7QUFDNUYsTUFBTSxhQUFjLFNBQVEscURBQVc7SUFPN0MsWUFBYSxTQUEwQixFQUFFLEtBQVUsRUFBRSxRQUFlO1FBRW5FLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksc0JBQXFCLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxFQUNUO1lBQ0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQzFCO2dCQUNDLElBQUksT0FBTyxHQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQzdDO29CQUNDLG1EQUFtRDtvQkFDbkQsU0FBUztpQkFDVDtxQkFDSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQzNCO29CQUNDLCtEQUErRDtvQkFDL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7aUJBQ25CO3FCQUNJLElBQUksUUFBUSxLQUFLLEtBQUssRUFDM0I7b0JBQ0MsK0RBQStEO29CQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztpQkFDbkI7O29CQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ2hDO1lBRUQscUZBQXFGO1lBQ3JGLGFBQWE7WUFDYixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3JCO1FBRUQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQUEsQ0FBQztJQUlGLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUVkLHNGQUFzRjtRQUN0Rix3RkFBd0Y7UUFDeEYsc0RBQXNEO1FBQ3RELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUU5QjtZQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO2dCQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFeEIsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7SUFJRCx3RkFBd0Y7SUFDeEYsZ0ZBQWdGO0lBQ3pFLElBQUksQ0FBRSxNQUFjLEVBQUUsT0FBbUI7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0IsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSUQsMEZBQTBGO0lBQzFGLG1FQUFtRTtJQUNuRSwyQ0FBMkM7SUFDcEMsU0FBUztRQUVULEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQix1Q0FBdUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDekIsdURBQU0sQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVqQixzRkFBc0Y7UUFDdEYsc0ZBQXNGO1FBQ3RGLHlGQUF5RjtRQUN6RixxQ0FBcUM7UUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDekIsdURBQU0sQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFJRCx3RkFBd0Y7SUFDeEYsMEVBQTBFO0lBQ25FLGdCQUFnQixDQUFFLEtBQVM7UUFFakMsNkRBQTZEO1FBQzdELE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBTSxLQUF1QixDQUFDLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBSUQseUZBQXlGO0lBQ3pGLHdGQUF3RjtJQUN4RixtQkFBbUI7SUFDWixhQUFhLENBQUUsS0FBUztRQUU5QixJQUFJLFVBQVUsR0FBRyxLQUFzQixDQUFDO1FBRXhDLGdGQUFnRjtRQUNoRixJQUFJLFlBQVksR0FBWSxJQUFJLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUQsdUVBQXVFO1FBQ3ZFLElBQUksVUFBVSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUMvQjtZQUNDLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFFMUIsa0ZBQWtGO1lBQ2xGLHFDQUFxQztZQUNyQyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFDekIsdURBQU0sQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUNJLElBQUksVUFBVSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQ3JDO1lBQ0MscURBQXFEO1lBQ3JELHVEQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUUxQixvRkFBb0Y7UUFDcEYsOEVBQThFO1FBQzlFLGdGQUFnRjtRQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdDLHNGQUFzRjtRQUN0RixvRkFBb0Y7UUFDcEYsK0JBQStCO1FBQy9CLE9BQU8sc0RBQVksQ0FBQyxhQUFhLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FlRDs7Ozs7Ozs7Ozs7OztBQ3JNRDtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUVwRCxpQkFBaUI7QUFDd0Q7QUFDekUsVUFBVTtBQUlWOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNJLE1BQU0sY0FBZSxTQUFRLGdEQUFNO0lBRXpDLFlBQWEsS0FBd0IsRUFBRSxRQUFnQjtRQUV0RCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLHVCQUFzQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBSUQsd0VBQXdFO0lBQ3hFLElBQVcsU0FBUyxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBSWhFLGlCQUFpQjtJQUNqQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsVUFBVTtJQUNWLENBQUMsQ0FBQyw0RUFBNEU7SUFROUUsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBRWQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCw2REFBNkQ7SUFDdEQsTUFBTTtRQUVaLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO0lBQ1gsQ0FBQztJQUlFLGlCQUFpQjtJQUNiLDZGQUE2RjtJQUM3RixZQUFZO0lBQ1osMkNBQTJDO0lBQ3BDLFdBQVc7UUFFViwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0wsVUFBVTtJQUliLHdGQUF3RjtJQUN4RiwwRUFBMEU7SUFDbkUsZ0JBQWdCLENBQUUsS0FBUztRQUVqQyxJQUFJLGlCQUFpQixHQUFHLEtBQXVCLENBQUM7UUFFaEQsc0RBQXNEO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUlELDhGQUE4RjtJQUM5RiwwRkFBMEY7SUFDMUYsOEZBQThGO0lBQzlGLDBFQUEwRTtJQUMxRSwyQ0FBMkM7SUFDcEMsYUFBYSxDQUFFLEtBQVM7UUFFOUIsSUFBSSxpQkFBaUIsR0FBRyxLQUF1QixDQUFDO1FBRWhELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7UUFFM0QsMEVBQTBFO1FBQzFFLCtCQUErQjtRQUMvQixPQUFPLHNEQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUlEOztPQUVHO0lBQ0ssS0FBSyxDQUFDLFlBQVk7UUFFekIsSUFDQTtZQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLCtDQUErQztZQUMvQyxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFDRCxPQUFPLEdBQUcsRUFDVjtZQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLCtDQUErQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ2xCLE9BQU87WUFFUixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFDekI7Z0JBQ0MsSUFDQTtvQkFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsT0FBTyxJQUFJLEVBQ1g7b0JBQ0MsT0FBTyxDQUFDLElBQUksQ0FBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbkQ7YUFDRDs7Z0JBRUEsT0FBTyxDQUFDLElBQUksQ0FBRSw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDckI7SUFDRixDQUFDO0NBYUQ7Ozs7Ozs7Ozs7Ozs7QUNoTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsaUdBQWlHO0FBQ2pHLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQU0sV0FBVztJQUFqQjtRQUVDLGtCQUFhLEdBQWdCLElBQUksR0FBRyxFQUFVLENBQUM7UUFDL0Msa0JBQWEsR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUNoRCxDQUFDO0NBQUE7QUFFRCwrRUFBK0U7QUFDL0UsSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7QUFJbkQsNEVBQTRFO0FBQ3JFLFNBQVMsc0JBQXNCLENBQUUsRUFBVSxFQUFFLFFBQWdCO0lBRW5FLElBQUksSUFBSSxHQUFnQixjQUFjLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELElBQUksSUFBSSxLQUFLLFNBQVMsRUFDdEI7UUFDQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QixjQUFjLENBQUMsR0FBRyxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWxDLDZFQUE2RTtJQUM3RSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhO1FBQ2hDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBSUQsOEVBQThFO0FBQ3ZFLFNBQVMsd0JBQXdCLENBQUUsRUFBVSxFQUFFLFFBQWdCO0lBRXJFLElBQUksSUFBSSxHQUFnQixjQUFjLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELElBQUksSUFBSSxLQUFLLFNBQVM7UUFDckIsT0FBTztJQUVSLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXJDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDakUsY0FBYyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsQ0FBQztTQUU1QjtRQUNDLDZFQUE2RTtRQUM3RSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQ2hDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBRSxFQUFFLENBQUMsQ0FBQztLQUM5QjtBQUNGLENBQUM7QUFJRCw2RUFBNkU7QUFDdEUsU0FBUyx1QkFBdUIsQ0FBRSxFQUFVLEVBQUUsUUFBZ0I7SUFFcEUsSUFBSSxJQUFJLEdBQWdCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUN0QjtRQUNDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLGNBQWMsQ0FBQyxHQUFHLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUlELGlGQUFpRjtBQUMxRSxTQUFTLHlCQUF5QixDQUFFLEVBQVUsRUFBRSxRQUFnQjtJQUV0RSxJQUFJLElBQUksR0FBZ0IsY0FBYyxDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxJQUFJLElBQUksS0FBSyxTQUFTO1FBQ3JCLE9BQU87SUFFUixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUVyQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQ2pFLGNBQWMsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdtQjtBQUlDO0FBRXBCLGlCQUFpQjtBQUN3RDtBQUN6RSxVQUFVO0FBR1YsK0ZBQStGO0FBQy9GLCtGQUErRjtBQUMvRiw2RkFBNkY7QUFDN0YsaURBQWlEO0FBQ2pELHlDQUF5QztBQUN6QyxvREFBb0Q7QUFDcEQsb0VBQW9FO0FBQ3BFLElBQUksdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQU0sQ0FBQztBQUU1QywyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLHFHQUFxRztBQUNyRyxJQUFJLDRCQUE0QixHQUFHLElBQUksR0FBRyxFQUF1QyxDQUFDO0FBRWxGLDBGQUEwRjtBQUMxRixtR0FBbUc7QUFDbkcscUdBQXFHO0FBQ3JHLElBQUksMkJBQTJCLEdBQUcsSUFBSSxHQUFHLEVBQXVDLENBQUM7QUFFakYseUVBQXlFO0FBQ3pFLElBQUksc0JBQXNCLEdBQVcsQ0FBQyxDQUFDO0FBRXZDLDBCQUEwQjtBQUMxQixJQUFJLGdCQUFnQixlQUFzQyxDQUFDO0FBRTNELHdGQUF3RjtBQUN4Rix5RkFBeUY7QUFDekYsa0ZBQWtGO0FBQ2xGLDZCQUE2QjtBQUM3QixJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7QUFFOUIsMEZBQTBGO0FBQzFGLHdGQUF3RjtBQUN4Rix5RkFBeUY7QUFDekYsaUZBQWlGO0FBQzFFLElBQUksV0FBVyxHQUFPLElBQUksQ0FBQztBQUVsQywyRUFBMkU7QUFDcEUsSUFBSSxrQkFBa0IsR0FBZSxJQUFJLENBQUM7QUFJakQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGNBQWMsQ0FBRSxFQUFNO0lBRTNCLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQztJQUN6QixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLGtCQUFrQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLEVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFzQkQ7Ozs7Ozs7Ozs7R0FVRztBQUNJLFNBQVMsa0JBQWtCLENBQXNCLFFBQVcsRUFBRSxZQUFxQixFQUFFLEVBQVc7SUFFbkcsNkZBQTZGO0lBQzdGLG1FQUFtRTtJQUNuRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7UUFDbkIsWUFBWSxHQUFJLEVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBRTVFLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxTQUFTLGVBQWU7SUFFdkIsMEZBQTBGO0lBQzFGLGlGQUFpRjtJQUM5RSxJQUFJLEVBQUUsR0FBTyxJQUFJLENBQUM7SUFDbEIsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxJQUNBO1FBQ08sb0VBQWtCLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN4RCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsT0FBTyxHQUFHLEVBQ1Y7UUFDTyxJQUFJLFlBQVksR0FBRyxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsVUFBVSxDQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsSUFBSSxZQUFZO1lBQ1osWUFBWSxDQUFDLFdBQVcsQ0FBRSxHQUFHLEVBQUUsU0FBUyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBRS9DLE1BQU0sR0FBRyxDQUFDO0tBQ3BCO1lBRUQ7UUFDTyxtRUFBaUIsRUFBRSxDQUFDO1FBRXBCLDhCQUE4QjtRQUM5QixjQUFjLENBQUUsTUFBTSxDQUFDLENBQUM7S0FDOUI7QUFDRixDQUFDO0FBSUQsMENBQTBDO0FBQ25DLFNBQVMsaUJBQWlCLENBQUUsRUFBTTtJQUV4QyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFFLHNDQUFzQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztJQUVoSCxrQkFBa0IsQ0FBRSxFQUFFLENBQUMsQ0FBQztJQUUzQiwrRUFBK0U7SUFDL0Usc0NBQXNDO0lBQ3RDLElBQUksZ0JBQWdCLHlCQUFnQztRQUNuRCxvQkFBb0IsRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFJRCw4RkFBOEY7QUFDOUYsc0NBQXNDO0FBQ3RDLFNBQVMsa0JBQWtCLENBQUUsRUFBTTtJQUVsQyw4RUFBOEU7SUFDOUUsa0ZBQWtGO0lBQ2xGLGtEQUFrRDtJQUNsRCx1QkFBdUIsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLENBQUM7SUFFakMsd0ZBQXdGO0lBQ3hGLHFGQUFxRjtJQUNyRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLGtCQUFrQjtJQUNsQixJQUFJLEVBQUUsQ0FBQyxJQUFJLDRCQUEyQixJQUFJLEVBQUUsQ0FBQyxJQUFJLHdCQUF1QixFQUN4RTtRQUNDLElBQUksSUFBSSxHQUFJLEVBQTBCLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxnQkFBZ0IseUJBQWdDO1lBQ3hFLDRCQUE0QixDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEcsSUFBSSxJQUFJLENBQUMsV0FBVztZQUNuQiwyQkFBMkIsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RHO0FBQ0YsQ0FBQztBQUlELDJGQUEyRjtBQUMzRixxQkFBcUI7QUFDZCxTQUFTLGdCQUFnQixDQUFFLElBQXVCLEVBQUUsWUFBcUIsRUFDNUUsT0FBZ0IsRUFBRSxFQUFXO0lBRWhDLGFBQWE7SUFDYixJQUFJLENBQUMsSUFBSSxFQUNUO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSxrREFBa0QsQ0FBQyxDQUFDO1FBQ25FLE9BQU87S0FDUDtJQUNELFVBQVU7SUFFVixJQUFJLFlBQVksRUFDaEI7UUFDQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUM1QztZQUNDLDRCQUE0QixDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhGLCtFQUErRTtZQUMvRSxzREFBc0Q7WUFDdEQsb0JBQW9CLEVBQUUsQ0FBQztTQUN2QjtLQUNEO1NBRUQ7UUFDQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUMzQztZQUNDLDJCQUEyQixDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9FLHVGQUF1RjtZQUN2Riw0RUFBNEU7WUFDNUUsSUFBSSxnQkFBZ0IseUJBQWdDLElBQUksZ0JBQWdCLG1CQUEwQjtnQkFDakcsb0JBQW9CLEVBQUUsQ0FBQztTQUN4QjtLQUNEO0FBQ0YsQ0FBQztBQUlELCtGQUErRjtBQUMvRixrQkFBa0I7QUFDbEIsU0FBUyxvQkFBb0I7SUFFNUIsSUFBSSxzQkFBc0IsS0FBSyxDQUFDO1FBQy9CLHNCQUFzQixHQUFHLHFCQUFxQixDQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUlELHlGQUF5RjtBQUN6RixTQUFTLGdCQUFnQjtJQUV4QixvRUFBb0U7SUFDcEUsd0JBQXdCO0lBQ3hCLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUV4QixZQUFZLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBSUQsaUNBQWlDO0FBQ2pDLFNBQVMsWUFBWTtJQUVwQix5QkFBeUI7SUFDekIsYUFBYSxFQUFFLENBQUM7SUFFaEIsc0ZBQXNGO0lBQ3RGLHNGQUFzRjtJQUN0Rix5RkFBeUY7SUFDekYseURBQXlEO0lBQ3pELElBQUksNEJBQTRCLENBQUMsSUFBSSxHQUFHLENBQUMsRUFDekM7UUFDQyxnQkFBZ0IsdUJBQThCLENBQUM7UUFDL0MsSUFBSSwwQkFBMEIsR0FBRyw0QkFBNEIsQ0FBQztRQUM5RCw0QkFBNEIsR0FBRyxJQUFJLEdBQUcsRUFBdUMsQ0FBQztRQUM5RSxzQkFBc0IsQ0FBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMxRDtJQUVELElBQUksdUJBQXVCLENBQUMsSUFBSSxHQUFHLENBQUMsRUFDcEM7UUFDTyxpQkFBaUI7UUFDYixJQUFJLG1CQUFtQixHQUFHLDBEQUFhLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsbUJBQW1CLEVBQ3hCO1lBQ0ksMERBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSwwREFBYSxDQUFFLGNBQWMsYUFBYSxJQUFJLENBQUMsQ0FBQztZQUMxRSwwREFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUNYLFVBQVU7UUFFVixrRkFBa0Y7UUFDbEYsd0ZBQXdGO1FBQ3hGLGdCQUFnQixpQkFBd0IsQ0FBQztRQUN6QyxJQUFJLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDO1FBQ3BELHVCQUF1QixHQUFHLElBQUksR0FBRyxFQUFNLENBQUM7UUFDeEMsa0JBQWtCLENBQUUsa0JBQWtCLENBQUUsbUJBQW1CLENBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEYsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixFQUN4QjtZQUNJLDBEQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQztZQUNoQywwREFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDOUI7UUFDWCxVQUFVO0tBQ1Y7SUFFRCxtRUFBbUU7SUFDbkUsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUN4QztRQUNDLGdCQUFnQixzQkFBNkIsQ0FBQztRQUM5QyxJQUFJLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDO1FBQzVELDJCQUEyQixHQUFHLElBQUksR0FBRyxFQUF1QyxDQUFDO1FBQzdFLHNCQUFzQixDQUFFLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFEO0lBRUQsZ0JBQWdCLGVBQXNCLENBQUM7QUFDeEMsQ0FBQztBQUFBLENBQUM7QUFJRiw4RkFBOEY7QUFDOUYsc0RBQXNEO0FBQ3RELG9GQUFvRjtBQUNwRix3Q0FBd0M7QUFDeEMsK0VBQStFO0FBQy9FLHVGQUF1RjtBQUN2Riw2RUFBNkU7QUFDN0UsU0FBUyxtQkFBbUIsQ0FBRSxxQkFBOEI7SUFFM0QseUZBQXlGO0lBQ3pGLDZGQUE2RjtJQUM3RixJQUFJLFVBQVUsR0FBVyxJQUFJLEtBQUssQ0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3QyxxQkFBcUIsQ0FBQyxPQUFPLENBQUUsQ0FBQyxFQUFNLEVBQUUsRUFBRTtRQUVuQyxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO1lBQ1osT0FBTztRQUVqQixJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEVBQ1I7WUFDQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDM0I7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFVBQVUsQ0FBQztBQUNuQixDQUFDO0FBSUQsNkZBQTZGO0FBQzdGLHVGQUF1RjtBQUN2RixTQUFTLGtCQUFrQixDQUFFLFVBQWtCO0lBRTlDLElBQUksZ0JBQWdCLEdBQWEsRUFBRSxDQUFDO0lBRWpDLElBQUksSUFBWSxDQUFDO0lBQ2pCLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxFQUM3QjtRQUNPLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsR0FBRztZQUNKLFNBQVM7UUFFYixLQUFLLElBQUksRUFBRSxJQUFJLEdBQUcsRUFDbEI7WUFDSSxJQUNBO2dCQUNJLDZEQUE2RDtnQkFDN0QsRUFBRSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBRTNCLDRFQUE0RTtnQkFDNUUsSUFBSSxFQUFFLENBQUMsY0FBYyxLQUFLLGFBQWE7b0JBQ25DLFNBQVM7Z0JBRWIsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLGlCQUFzQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDN0QsaUJBQWlCLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLGdCQUFnQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sR0FBRyxFQUNWO2dCQUNJLDZFQUE2RTtnQkFDN0Usd0JBQXdCO2dCQUN4QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxZQUFZO29CQUNaLFlBQVksQ0FBQyxXQUFXLENBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7b0JBRTdFLE9BQU8sQ0FBQyxLQUFLLENBQUUsZ0ZBQWdGLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0c7WUFFRCxjQUFjLENBQUUsSUFBSSxDQUFDLENBQUM7U0FDekI7S0FDUDtJQUVELE9BQU8sZ0JBQWdCLENBQUM7QUFDekIsQ0FBQztBQUlELDhGQUE4RjtBQUM5Riw4RkFBOEY7QUFDOUYsK0NBQStDO0FBQy9DLFNBQVMsa0JBQWtCLENBQUUsZ0JBQTBCO0lBRXRELHVGQUF1RjtJQUN2RixLQUFLLElBQUksSUFBSSxJQUFJLGdCQUFnQjtRQUNoQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBSUQseURBQXlEO0FBQ3pELFNBQVMsc0JBQXNCLENBQUUsS0FBK0MsRUFBRSxZQUFxQjtJQUV0RyxLQUFLLENBQUMsT0FBTyxDQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1FBRWhDLElBQ0E7WUFDQyxPQUFPLEVBQUUsQ0FBQztTQUNWO1FBQ0QsT0FBTyxHQUFHLEVBQ1Y7WUFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLHFDQUFxQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwSDtJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUlELHNGQUFzRjtBQUN0Rix1RkFBdUY7QUFDdkYseUVBQXlFO0FBQ3pFLHNGQUFzRjtBQUN0Rix3RkFBd0Y7QUFDeEYsd0ZBQXdGO0FBQ3hGLHFDQUFxQztBQUNyQyxTQUFTLGFBQWEsQ0FBRSxFQUFNLEVBQUUsTUFBVTtJQUV6QyxFQUFFLENBQUMsSUFBSSxDQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRXJDLDREQUE0RDtJQUM1RCxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFN0IsMkZBQTJGO0lBQzNGLHVGQUF1RjtJQUN2Rix5QkFBeUI7SUFDekIsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUNuQjtRQUNDLG9CQUFvQjtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLCtCQUErQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRCxVQUFVO1FBRVYsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2Y7SUFFRCw2RkFBNkY7SUFDN0YsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUNiO1FBQ08sOENBQThDO1FBQzlDLElBQUksUUFBUSxHQUFHLHdCQUF3QixDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksUUFBUSxFQUNaO1lBQ0ksb0ZBQW9GO1lBQ3BGLG9GQUFvRjtZQUNwRixrRkFBa0Y7WUFDbEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFDN0I7Z0JBQ0ksS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRO29CQUNwQixhQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO2lCQUVEO2dCQUNJLElBQ0E7b0JBQ0ksS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRO3dCQUNwQixhQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxPQUFPLEdBQUcsRUFDVjtvQkFDSSxvQkFBb0I7b0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUUsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDNUUsVUFBVTtvQkFFVixzRUFBc0U7b0JBQ3RFLDBFQUEwRTtvQkFDMUUseUJBQXlCO29CQUN6QixFQUFFLENBQUMsV0FBVyxDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsUUFBUSxHQUFHLHdCQUF3QixDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQ2Y7d0JBQ0ksS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFROzRCQUNwQixhQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUMvQjtpQkFDSjthQUNKO1lBRUQsd0RBQXdEO1lBQ3hELElBQUksTUFBVSxDQUFDO1lBQ2YsS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQ3hCO2dCQUNJLElBQUksTUFBTSxFQUNWO29CQUNJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztpQkFDckI7Z0JBRUQsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNoQjtTQUNKO1FBRUQseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzdCO0lBRUQsZ0RBQWdEO0lBQ2hELGNBQWMsQ0FBRSxNQUFNLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBSUQsK0RBQStEO0FBQy9ELFNBQVMsYUFBYSxDQUFFLEVBQU0sRUFBRSxRQUFZLEVBQUUsUUFBWTtJQUV6RCw0REFBNEQ7SUFDNUQsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLDJCQUEyQjtJQUMzQixFQUFFLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUV2QixvQkFBb0I7SUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSwyQkFBMkIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEQsVUFBVTtJQUNWLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRTlDLDREQUE0RDtJQUM1RCxJQUFJLEtBQUs7UUFDUixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFNUMscUZBQXFGO0lBQ3JGLGtEQUFrRDtJQUNsRCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQ2Y7UUFDQyx1RUFBdUU7UUFDdkUsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRTFDLHNCQUFzQjtRQUN0QixLQUFLLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRO1lBQzFCLGFBQWEsQ0FBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsb0JBQW9CO0lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsOEJBQThCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELFVBQVU7SUFFUCxJQUFJLEVBQUUsQ0FBQyxRQUFRO1FBQ1gsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJCLGdEQUFnRDtJQUNoRCxjQUFjLENBQUUsTUFBTSxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUlELGlHQUFpRztBQUNqRyxpR0FBaUc7QUFDakcsaUdBQWlHO0FBQ2pHLDJGQUEyRjtBQUMzRix5RkFBeUY7QUFDekYscURBQXFEO0FBQ3JELFNBQVMsZUFBZSxDQUFFLEVBQU0sRUFBRSxTQUFrQjtJQUVoRCxrRkFBa0Y7SUFDbEYsaUNBQWlDO0lBQ2pDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBRWxDLHNDQUFzQztJQUN0QyxJQUFJLFNBQVMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUMvQjtRQUNPLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDM0I7WUFDSSw0REFBNEQ7WUFDNUQsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWpDLGVBQWUsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFNUIsZ0RBQWdEO1lBQ2hELGNBQWMsQ0FBRSxNQUFNLENBQUMsQ0FBQztZQUV4Qiw2QkFBNkI7WUFDN0IsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsRUFBRSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7S0FDUDtJQUVFLGtCQUFrQjtJQUNyQixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQ2xCO1FBQ0Msb0JBQW9CO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUUsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVELFVBQVU7UUFFVixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDakI7QUFDRixDQUFDO0FBSUQsNEVBQTRFO0FBQzVFLFNBQVMsaUJBQWlCLENBQUUsRUFBTTtJQUVqQyw0REFBNEQ7SUFDNUQsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLDBFQUEwRTtJQUMxRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBRXJCLCtGQUErRjtJQUM1RiwyRkFBMkY7SUFDM0YsMkZBQTJGO0lBQzNGLDBGQUEwRjtJQUMxRixzQkFBc0I7SUFDdEIsZUFBZSxDQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7SUFFcEMseUVBQXlFO0lBQ3pFLElBQUksRUFBRSxDQUFDLE9BQU8sRUFDZDtRQUNJLG9CQUFvQjtRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFFLDZCQUE2QixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxVQUFVO1FBQ1YsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCO0lBRUQsNEZBQTRGO0lBQzVGLHNCQUFzQjtJQUN0QixJQUFJLEtBQUs7UUFDSixLQUEwQixDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDdkI7UUFDQyxxRkFBcUY7UUFDckYsVUFBVTtRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLGlCQUFpQixDQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVFLDZCQUE2QjtJQUNoQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixFQUFFLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUV4QixnREFBZ0Q7SUFDaEQsY0FBYyxDQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFJRCx1RkFBdUY7QUFDdkYsNEZBQTRGO0FBQzVGLCtCQUErQjtBQUMvQixTQUFTLGlCQUFpQixDQUFFLElBQVk7SUFFdkMsMEVBQTBFO0lBQzFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFcEIsNERBQTREO0lBQzVELElBQUksTUFBTSxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU3Qiw0RkFBNEY7SUFDNUYsMkZBQTJGO0lBQzNGLElBQUksUUFBUSxHQUFHLHdCQUF3QixDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRXpELHlEQUF5RDtJQUN6RCx3QkFBd0IsQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsSUFBSSxRQUFRLEVBQ1Q7UUFDSSxvRkFBb0Y7UUFDcEYsb0ZBQW9GO1FBQ3BGLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQjtZQUN6QixxQkFBcUIsQ0FBRSxJQUFJLENBQUMsQ0FBQzthQUVqQztZQUNJLElBQ0E7Z0JBQ0kscUJBQXFCLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLEdBQUcsRUFDVjtnQkFDSSxvQkFBb0I7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUUsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0UsVUFBVTtnQkFFViwwRUFBMEU7Z0JBQzFFLDBFQUEwRTtnQkFDMUUseUJBQXlCO2dCQUN6QixFQUFFLENBQUMsV0FBVyxDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsUUFBUSxHQUFHLHdCQUF3QixDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCx3QkFBd0IsQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLHFCQUFxQixDQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1NBQ0o7S0FDSjtJQUVKLGdGQUFnRjtJQUNoRixpQ0FBaUM7SUFDakMsRUFBRSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFFbEMsdUZBQXVGO0lBQ3ZGLGNBQWMsQ0FBRSxNQUFNLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBSUQsMEZBQTBGO0FBQzFGLDRDQUE0QztBQUM1QyxTQUFTLHFCQUFxQixDQUFFLElBQVk7SUFFM0MsK0VBQStFO0lBQy9FLElBQUksSUFBSSxDQUFDLFlBQVksRUFDckI7UUFDQyxJQUFJLEtBQVMsRUFBRSxLQUFTLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixLQUFLLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQ3pDO1lBQ0MsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDMUIsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDMUIsSUFBSSxXQUFXLENBQUMsTUFBTSxtQkFBd0IsRUFDOUM7Z0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQ3BFO29CQUNDLG9CQUFvQjtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSxtQ0FBbUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ2pFLFVBQVU7b0JBQ1YsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWTt3QkFDdEMsaUJBQWlCLENBQUUsV0FBVyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Q7aUJBQ0ksSUFBSSxXQUFXLENBQUMsTUFBTSxtQkFBd0I7Z0JBQ2xELGFBQWEsQ0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDakM7S0FDRDtBQUNGLENBQUM7QUFJRCwrRUFBK0U7QUFDL0UsU0FBUyxpQkFBaUIsQ0FBRSxJQUFZO0lBRXZDLHlGQUF5RjtJQUN6Rix5RkFBeUY7SUFDekYscUZBQXFGO0lBQ3JGLGNBQWM7SUFDZCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFDekI7UUFDQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDcEMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7SUFFRCxvRkFBb0Y7SUFDcEYsc0JBQXNCO0lBQ3RCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFcEIsdUZBQXVGO0lBQ3ZGLGtEQUFrRDtJQUNsRCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDZixPQUFPO0lBRVIsNERBQTREO0lBQzVELElBQUksTUFBTSxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVoQyx1RkFBdUY7SUFDdkYsMEZBQTBGO0lBQzFGLG1EQUFtRDtJQUNuRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3JCLElBQUksUUFBUSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUVuRCxzRkFBc0Y7SUFDdEYsZ0ZBQWdGO0lBQ2hGLG1EQUFtRDtJQUNuRCxJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVoRixvRkFBb0Y7SUFDcEYsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFdEYsb0VBQW9FO0lBQ3BFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7UUFDQyxxQkFBcUIsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RixhQUFhLENBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxRTtTQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFDMUI7UUFDQyxvQkFBb0IsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDakU7SUFFRCx1RkFBdUY7SUFDdkYsY0FBYyxDQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFJRCxvREFBb0Q7QUFDcEQsU0FBUyxvQkFBb0IsQ0FBRSxRQUFZLEVBQUUsS0FBZSxFQUFFLFFBQVksRUFBRSxRQUFZO0lBRXZGLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYseUVBQXlFO0lBQ3pFLElBQUksTUFBVSxFQUFFLEdBQU8sRUFBRSxJQUFZLEVBQUUsS0FBUyxFQUFFLEtBQVMsRUFBRSxPQUFXLENBQUM7SUFDekUsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUMxQztRQUNDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbkIsc0ZBQXNGO1FBQ3RGLGtDQUFrQztRQUNsQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sbUJBQXdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzFELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sbUJBQXdCLEVBQ3ZDO1lBQ0MsSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQzNDO2dCQUNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ2hDO29CQUNDLG9CQUFvQjtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSxrQ0FBa0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ2hFLFVBQVU7b0JBRVYsS0FBSyxDQUFDLFlBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQztpQkFDM0I7Z0JBRUQsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTtvQkFDL0IsaUJBQWlCLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUI7WUFFRCxpRUFBaUU7WUFDakUsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pCO2dCQUNDLHVGQUF1RjtnQkFDdkYsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUM5RDtvQkFDQyxLQUFLLElBQUksU0FBUyxJQUFJLFVBQVUsRUFDaEM7d0JBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRTVDLGlCQUFpQjt3QkFDaEIsMERBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLDBEQUFhLENBQUMsR0FBRyxFQUFFLHdEQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hFLFVBQVU7cUJBQ1Y7b0JBRUQsaUJBQWlCO29CQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSx3REFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRSxVQUFVO2lCQUNWO2dCQUVELGtEQUFrRDtnQkFDbEQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNEO2FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxtQkFBd0IsRUFDNUM7WUFDQyw4RUFBOEU7WUFDOUUsMkNBQTJDO1lBQzNDLGFBQWEsQ0FBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLDJFQUEyRTtZQUMzRSwyQ0FBMkM7WUFDM0MsT0FBTyxHQUFHLFVBQVUsQ0FBRSxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLE9BQU8sSUFBSSxJQUFJO2dCQUNsQixRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFDVjtZQUNDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUNiO0FBQ0YsQ0FBQztBQUlELDBGQUEwRjtBQUMxRiwrREFBK0Q7QUFDL0QsU0FBUyxxQkFBcUIsQ0FBRSxRQUFZLEVBQUUsS0FBZSxFQUFFLE1BQXFCLEVBQUUsUUFBWSxFQUFFLFFBQVk7SUFFL0csSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLE1BQVUsRUFBRSxHQUFPLEVBQUUsSUFBWSxFQUFFLEtBQVMsRUFBRSxLQUFTLEVBQUUsT0FBVyxDQUFDO0lBQ3pFLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDM0M7UUFDQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsaUVBQWlFO1FBQ2pFLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDOUM7WUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRW5CLHNGQUFzRjtZQUN0RixrQ0FBa0M7WUFDbEMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLG1CQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMzRCxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFNUMsSUFBSSxLQUFLLENBQUMsTUFBTSxtQkFBd0IsRUFDeEM7Z0JBQ0MsSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQzNDO29CQUNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ2hDO3dCQUNDLG9CQUFvQjt3QkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBRSxrQ0FBa0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ2hFLFVBQVU7d0JBRVYsS0FBSyxDQUFDLFlBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQztxQkFDM0I7b0JBRUQsb0NBQW9DO29CQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTt3QkFDL0IsaUJBQWlCLENBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2dCQUVELE9BQU8sR0FBRyxVQUFVLENBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksT0FBTyxJQUFJLElBQUk7b0JBQ2xCLFFBQVEsR0FBRyxPQUFPLENBQUM7YUFDcEI7aUJBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxtQkFBd0IsRUFDN0M7Z0JBQ0MsYUFBYSxDQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRTFDLDJFQUEyRTtnQkFDM0UsMkNBQTJDO2dCQUMzQyxPQUFPLEdBQUcsVUFBVSxDQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLE9BQU8sSUFBSSxJQUFJO29CQUNsQixRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1lBRUQsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLE1BQU0sRUFDVjtnQkFDQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7YUFDbEI7WUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2I7UUFFRCxrRkFBa0Y7UUFDbEYsbUNBQW1DO1FBQ25DLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyQix3RkFBd0Y7UUFDeEYsa0RBQWtEO1FBQ2xELElBQUksS0FBSyxDQUFDLE9BQU87WUFDaEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDMUI7QUFDRixDQUFDO0FBSUQscUZBQXFGO0FBQ3JGLFNBQVMsYUFBYSxDQUFFLEtBQWUsRUFBRSxNQUFxQixFQUFFLFFBQVksRUFBRSxRQUFZO0lBRXpGLDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0YsMkZBQTJGO0lBQzNGLG9FQUFvRTtJQUNwRSxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1FBQ0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsZ0ZBQWdGO1FBQ2hGLCtEQUErRDtRQUMvRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxFQUN4QjtZQUNDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUN6QztnQkFDQyw4RUFBOEU7Z0JBQzlFLGlGQUFpRjtnQkFDakYsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7b0JBQ2xGLFNBQVMsQ0FBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O29CQUV0RCxTQUFTLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDOUM7WUFFRCxrRkFBa0Y7WUFDbEYsNkJBQTZCO1lBQzdCLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3pCO0tBQ0Q7QUFDRixDQUFDO0FBSUQsb0VBQW9FO0FBQ3BFLFNBQVMsU0FBUyxDQUFFLEtBQWUsRUFBRSxLQUFrQixFQUFFLFFBQVksRUFBRSxRQUFZO0lBRWxGLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFDOUM7UUFDQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxtQkFBd0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RixJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0MsS0FBSyxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQ2hDO1lBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFNUMsaUJBQWlCO1lBQ2hCLDBEQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwwREFBYSxDQUFDLEdBQUcsRUFBRSx3REFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLFVBQVU7U0FDVjtRQUVELGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRSx3REFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLFVBQVU7S0FFVjtBQUNGLENBQUM7QUFnQ0Q7Ozs7R0FJRztBQUNILE1BQU0sV0FBVztJQXlCaEIsWUFBYSxVQUFrQixFQUFFLE1BQW9CLEVBQUUsS0FBYSxFQUFFLElBQWE7UUFFbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQWpCRCxvQ0FBb0M7SUFDcEMsSUFBVyxLQUFLLEtBQWEsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFBQSxDQUFDO0lBb0JqRTs7O09BR0c7SUFDSSxZQUFZO1FBRWxCLElBQUksSUFBWSxDQUFDO1FBQ2pCLElBQUksRUFBTSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUM1QztZQUNDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sbUJBQXdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFDZixNQUFNO1NBQ1A7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzVDO1lBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxtQkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBRSxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUNkLE1BQU07U0FDUDtJQUNGLENBQUM7Q0FDRDtBQUlEOzs7R0FHRztBQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBb0M3Qjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHdCQUF3QixDQUFFLElBQVksRUFBRSxRQUFjO0lBRTNELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLHNFQUFzRTtJQUN0RSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFDaEM7UUFDSSxxQ0FBcUM7UUFDckMsT0FBTztLQUNWO1NBQ0ksSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUNyQjtRQUNJLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLE9BQU87S0FDVjtTQUNJLElBQUksTUFBTSxLQUFLLENBQUMsRUFDckI7UUFDSSw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFxQixFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxNQUFNLEdBQUcsa0JBQWtCO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBRSxJQUFJLGtCQUF1QixDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEYsT0FBTztLQUNWO0lBRUQsc0ZBQXNGO0lBQ3RGLGtGQUFrRjtJQUNsRix3QkFBd0I7SUFDeEIsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RSxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsdUJBQXVCLEtBQUssU0FBUztRQUN0RSx1QkFBdUIsR0FBRyxjQUFjLENBQUMsdUJBQXVCLENBQUM7SUFFckUsa0ZBQWtGO0lBQ2xGLHlDQUF5QztJQUN6QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFDaEM7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMscUJBQXFCLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLE9BQU87S0FDVjtJQUVELHFGQUFxRjtJQUNyRix3RkFBd0Y7SUFDeEYsMkZBQTJGO0lBQzNGLG9EQUFvRDtJQUNwRCxJQUFJLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBQ3BDLElBQUksY0FBYyxHQUFTLEVBQUUsQ0FBQztJQUM5QixJQUFJLEdBQVEsQ0FBQztJQUNiLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxFQUMxQjtRQUNJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2hCLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUU3QixjQUFjLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25DO0lBRUQsMENBQTBDO0lBQzFDLElBQUksb0JBQW9CLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUVqRCxpREFBaUQ7SUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUV2QyxzQkFBc0I7SUFDdEIsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUUvQixJQUFJLEtBQUssR0FBTyxJQUFJLENBQUM7UUFFckIsOERBQThEO1FBQzlELEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2hCLElBQUksR0FBRyxJQUFJLElBQUksRUFDZjtZQUNJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLHdFQUF3RTtZQUN4RSxrRkFBa0Y7WUFDbEYsSUFBSSxLQUFLO2dCQUNMLFdBQVcsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxtQkFBbUIsSUFBSSxvQkFBb0I7WUFDckQsS0FBSyxHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25HLENBQUMsQ0FBQyxDQUFDO0lBRUgsOEVBQThFO0lBQzlFLElBQUksV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksbUJBQW1CLEdBQUcsb0JBQW9CLEVBQ3RFO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUUvQixXQUFXLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3REO0lBRUQsSUFBSSxNQUFNLEdBQUcsa0JBQWtCO1FBQzNCLGtCQUFrQixDQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFJRCxTQUFTLHFCQUFxQixDQUFFLElBQVksRUFBRSxLQUFTLEVBQUUsS0FBVSxFQUFFLHVCQUFpQztJQUVsRyxJQUFJLE9BQU8sR0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hDLElBQUksQ0FBQyxLQUFLO1FBQ04sT0FBTyxDQUFDLE1BQU0saUJBQXNCLENBQUM7U0FDcEMsSUFBSSxLQUFLLEtBQUssS0FBSztRQUNwQixDQUFDLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQzdGO1FBQ0ksNkRBQTZEO1FBQzdELE9BQU8sQ0FBQyxNQUFNLGlCQUFzQixDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3pCO1NBRUQ7UUFDSSxxRkFBcUY7UUFDckYsYUFBYTtRQUNiLE9BQU8sQ0FBQyxNQUFNLGlCQUFzQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLGtCQUFrQixDQUFFLElBQVk7SUFFckMsbUVBQW1FO0lBQ25FLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBRXJDLGFBQWE7SUFDVCxtRkFBbUY7SUFDbkYsK0JBQStCO0lBQy9CLElBQUksS0FBSyxJQUFJLGtCQUFrQixJQUFJLEtBQUssS0FBSyxDQUFDO1FBQzFDLE9BQU87SUFDZixVQUFVO0lBRVYsaUZBQWlGO0lBQ2pGLElBQUksS0FBSyxHQUFnQixJQUFJLFdBQVcsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdCLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsYUFBYTtJQUNiLElBQUksTUFBb0IsQ0FBQztJQUN6QixJQUFJLE9BQWUsQ0FBQztJQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUM5QjtRQUNJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQzNCO1lBQ0ksaUZBQWlGO1lBQ2pGLG1GQUFtRjtZQUNuRiw2RUFBNkU7WUFDN0UsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQ0ksSUFBSSxNQUFNLG1CQUF3QixFQUN2QztZQUNJLHlFQUF5RTtZQUN6RSx1RkFBdUY7WUFDdkYsMERBQTBEO1lBQzFELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN2RDtnQkFDSSwwQ0FBMEM7Z0JBQzFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7UUFFRCxrRkFBa0Y7UUFDbEYsWUFBWTtLQUNmO0lBRUQsdUJBQXVCO0lBQ3ZCLElBQUksS0FBSyxLQUFLLFNBQVM7UUFDbkIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBRSxLQUFTLEVBQUUsS0FBUztJQUU5QyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtRQUMvQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3RSxDQUFDO0FBSUQsMEZBQTBGO0FBQzFGLG1EQUFtRDtBQUNuRCxTQUFTLFVBQVUsQ0FBRSxFQUFNO0lBRTFCLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDWixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFFYixzRkFBc0Y7SUFDdEYsY0FBYztJQUNkLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUMzQjtRQUNDLEVBQUUsR0FBRyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUlELHlGQUF5RjtBQUN6RixtREFBbUQ7QUFDbkQsU0FBUyxTQUFTLENBQUUsRUFBTTtJQUV6QixJQUFJLEVBQUUsQ0FBQyxLQUFLO1FBQ1gsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBRWIsc0ZBQXNGO0lBQ3RGLGNBQWM7SUFDZCxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2hEO1FBQ0MsRUFBRSxHQUFHLFNBQVMsQ0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxFQUFFLElBQUksSUFBSTtZQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFJRCwyRkFBMkY7QUFDM0Ysa0ZBQWtGO0FBQ2xGLFNBQVMsZUFBZSxDQUFFLEVBQU07SUFFL0IsSUFBSSxHQUFHLEdBQVMsRUFBRSxDQUFDO0lBQ25CLG1CQUFtQixDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFJRCxvRkFBb0Y7QUFDcEYsb0ZBQW9GO0FBQ3BGLFNBQVMsbUJBQW1CLENBQUUsRUFBTSxFQUFFLEdBQVM7SUFFOUMsSUFBSSxFQUFFLENBQUMsS0FBSztRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFDcEI7UUFDQyxtRUFBbUU7UUFDbkUsS0FBSyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUTtZQUMxQixtQkFBbUIsQ0FBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDaEM7QUFDRixDQUFDO0FBSUQsNEZBQTRGO0FBQzVGLDRGQUE0RjtBQUM1Rix3RkFBd0Y7QUFDeEYsOEZBQThGO0FBQzlGLDBGQUEwRjtBQUMxRiwyRkFBMkY7QUFDM0Ysb0VBQW9FO0FBQ3BFLFNBQVMsMEJBQTBCLENBQUUsRUFBTSxFQUFFLFFBQVk7SUFFeEQsc0ZBQXNGO0lBQ3RGLG1DQUFtQztJQUNuQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN6QztRQUNDLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxFQUFFLEVBQ047WUFDQyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2pDLElBQUksV0FBVyxLQUFLLElBQUk7Z0JBQ3ZCLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO0tBQ0Q7SUFFRCw4QkFBOEI7SUFDOUIsS0FBSyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxTQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQ3pEO1FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1FBRWIsK0VBQStFO1FBQy9FLGtGQUFrRjtRQUNsRixvREFBb0Q7UUFDcEQsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxrQ0FBa0M7SUFDbEMsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQy9HLENBQUM7QUFJRCx1RkFBdUY7QUFDdkYsU0FBUyxTQUFTLENBQUUsRUFBTTtJQUV6QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3JCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQzlEO1FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25HO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBSUQsNEZBQTRGO0FBQzVGLGlHQUFpRztBQUNqRyxpR0FBaUc7QUFDakcsa0RBQWtEO0FBQ2xELFNBQVMsc0JBQXNCLENBQUUsT0FBWTtJQUU1QyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssRUFDeEM7UUFDQyxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUM7S0FDWjtTQUNJLElBQUksT0FBTyxZQUFZLGdEQUFNO1FBQ2pDLE9BQU8sT0FBTyxDQUFDO1NBQ1gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQ3BDO1FBQ0MsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnREFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDeEQ7U0FDSSxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQzdDO1FBQ0MsdUZBQXVGO1FBQ3ZGLHVEQUF1RDtRQUN2RCxPQUFRLE9BQXNCLENBQUMsRUFBRTtZQUM3QixDQUFDLENBQUUsT0FBc0IsQ0FBQyxFQUFRO1lBQ2xDLENBQUMsQ0FBQyxJQUFJLDJEQUFpQixDQUFFLE9BQXFCLENBQUMsQ0FBQztLQUNwRDtTQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUM7UUFDL0IsT0FBTyxvQkFBb0IsQ0FBRSxPQUFPLENBQUMsQ0FBQztTQUNsQyxJQUFJLE9BQU8sWUFBWSxPQUFPLEVBQ25DO1FBQ0MsT0FBTyxJQUFJLHdEQUFjLENBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztLQUNoRDtTQUNJLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUN0QztRQUNDLElBQUksRUFBRSxHQUFHLHFEQUFXLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQztRQUNyQyxPQUFPLEVBQUUsSUFBSSxJQUFJLHFEQUFXLENBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7S0FDN0U7O1FBRUEsT0FBTyxJQUFJLGdEQUFNLENBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUlELGlHQUFpRztBQUNqRyxxREFBcUQ7QUFDckQsU0FBUyx3QkFBd0IsQ0FBRSxPQUFZO0lBRTlDLElBQUksS0FBSyxHQUFHLHNCQUFzQixDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RixDQUFDO0FBSUQsZ0VBQWdFO0FBQ2hFLFNBQVMsb0JBQW9CLENBQUUsR0FBVTtJQUV4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUViLElBQUksS0FBSyxHQUFTLEVBQUUsQ0FBQztJQUNyQixLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFDcEI7UUFDQyxJQUFJLFNBQVMsR0FBRyxzQkFBc0IsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLFNBQVMsS0FBSyxJQUFJO1lBQ3JCLFNBQVM7YUFDTCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxDQUFDLEVBQ2xDO1lBQ0MsS0FBSyxJQUFJLEVBQUUsSUFBSSxTQUFTO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCOztZQUVBLEtBQUssQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QyxDQUFDO0FBSUQsMEZBQTBGO0FBQ25GLFNBQVMsa0JBQWtCLENBQUUsR0FBUSxFQUFFLEtBQVUsRUFBRSxRQUFlO0lBRXhFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUMxQixPQUFPLElBQUksK0NBQUssQ0FBRSxHQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDLElBQUksR0FBRyxLQUFLLGlEQUFRO1FBQ3hCLE9BQU8sb0JBQW9CLENBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkMsSUFBSSxHQUFHLEtBQUssa0RBQVMsRUFDMUI7UUFDQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDeEIsT0FBTyxTQUFTLENBQUM7UUFFbEIsa0ZBQWtGO1FBQ2xGLGdDQUFnQztRQUNoQyxJQUFJLGNBQWMsR0FBRyxLQUF1QixDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFHLHFEQUFXLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxFQUFFO1lBQ04sT0FBTyxJQUFJLHFEQUFXLENBQUUsS0FBSyxDQUFDLENBQUM7YUFFaEM7WUFDQyx1RkFBdUY7WUFDdkYsK0NBQStDO1lBQy9DLElBQUksY0FBYyxDQUFDLFdBQVc7Z0JBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7S0FDRDtTQUNJLElBQUksR0FBRyxLQUFLLHFEQUFZLEVBQzdCO1FBQ0MsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1FBRWxCLE9BQU8sSUFBSSx3REFBYyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1QztTQUNJLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUNsQztRQUNDLHVGQUF1RjtRQUN2RixtRkFBbUY7UUFDbkYseUZBQXlGO1FBQ3pGLFlBQVk7UUFDWixrRkFBa0Y7UUFDbEYseUZBQXlGO1FBQ3pGLHFDQUFxQztRQUNyQyxxREFBcUQ7UUFDckQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLFVBQVU7WUFDN0MsT0FBTyxJQUFJLHVEQUFhLENBQUUsR0FBc0IsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7O1lBRXZFLE9BQU8sSUFBSSxnREFBTSxDQUFFLEdBQW1CLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzlEO0lBRUQsYUFBYTs7UUFFWixNQUFNLElBQUksS0FBSyxDQUFFLDBDQUEwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLFVBQVU7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDem5ERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFFekQsaUJBQWlCO0FBQzRCO0FBQzdDLFVBQVU7QUFJVixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDZGQUE2RjtBQUM3RiwwRkFBMEY7QUFDMUYsZ0dBQWdHO0FBQ2hHLDBEQUEwRDtBQUMxRCxFQUFFO0FBQ0YsbUdBQW1HO0FBQzVGLE1BQU0sTUFBTyxTQUFRLGdEQUFNO0lBRWpDLFlBQW9CLFFBQVk7UUFFL0IsS0FBSyxFQUFFLENBQUM7UUE0SFQsc0VBQXNFO1FBQzlELFVBQUssR0FBWSxLQUFLLENBQUM7UUFFL0IsdUZBQXVGO1FBQy9FLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakMsb0VBQW9FO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7UUFqSWhELElBQUksQ0FBQyxJQUFJLGVBQWMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztJQUlGLGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsVUFBVTtJQUVWLHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSSxLQUFhLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztJQUk1Qyw0RUFBNEU7SUFDckUsVUFBVSxDQUFFLE9BQVksRUFBRSxJQUFhO1FBRTdDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1FQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsc0NBQXNDO0lBQy9CLE1BQU07UUFFWixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3pELENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsbUVBQW1FO0lBQ25FLDJDQUEyQztJQUNwQyxTQUFTO1FBRWYsSUFBSSxDQUFDLGNBQWMsQ0FBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBSUQsNkZBQTZGO0lBQzdGLFlBQVk7SUFDWiwyQ0FBMkM7SUFDcEMsV0FBVztRQUVqQixJQUFJLENBQUMsZ0JBQWdCLENBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsNEZBQTRGO0lBQzVGLHFEQUFxRDtJQUNyRCxJQUFXLHFCQUFxQjtRQUUvQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFJRCwwRkFBMEY7SUFDMUYsb0JBQW9CO0lBQ2IsV0FBVyxDQUFFLEdBQVEsRUFBRSxJQUFjO1FBRTNDLElBQUksR0FBRyxZQUFZLE9BQU8sRUFDMUI7WUFDQyxJQUFJLE9BQU8sR0FBRyxHQUFtQixDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsT0FBTyxDQUFDLEtBQUssQ0FBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNwQjthQUVEO1lBQ1UsT0FBTyxDQUFDLEtBQUssQ0FBRSxpQ0FBaUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO0lBQ0YsQ0FBQztJQUlELDZEQUE2RDtJQUN0RCxPQUFPO1FBRWIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1FQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCxpRkFBaUY7SUFDMUUsV0FBVyxDQUFFLEdBQVEsRUFBRSxJQUFjO1FBRTNDLElBQUksQ0FBQyxXQUFXLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLG1FQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCx3RkFBd0Y7SUFDeEYsWUFBWTtJQUNKLGtCQUFrQixDQUFFLE9BQXFCO1FBRWhELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUNsQztZQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLG1FQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztDQWVEO0FBSUQsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUlwRCx5RkFBeUY7QUFDekYsZ0NBQWdDO0FBQ3pCLFNBQVMsU0FBUyxDQUFFLE9BQVksRUFBRSxRQUFZO0lBRXBELElBQUksWUFBWSxHQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBRTNELHdGQUF3RjtJQUN4RixXQUFXO0lBQ1gsSUFBSSxNQUFNLEdBQVcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLE1BQU0sRUFDWDtRQUNDLCtFQUErRTtRQUMvRSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUUsWUFBWSxDQUFDLENBQUM7UUFDNUIsWUFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNsRCxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDekI7SUFFRCwwREFBMEQ7SUFDMUQsTUFBTSxDQUFDLFVBQVUsQ0FBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUlELHlEQUF5RDtBQUNsRCxTQUFTLFdBQVcsQ0FBRSxRQUFZO0lBRXhDLElBQUksWUFBWSxHQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNELElBQUksQ0FBQyxZQUFZO1FBQ2hCLE9BQU87SUFFUixtRUFBbUU7SUFDbkUsSUFBSSxNQUFNLEdBQVcsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLE1BQU07UUFDVixPQUFPO0lBRVIscUVBQXFFO0lBQ3JFLE9BQU8sWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFdkMsMENBQTBDO0lBQzFDLE1BQU0sQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMU1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkU7QUFDakM7QUFJNUM7OztHQUdHO0FBQ0gsTUFBTSxjQUFjO0lBS2hCOzs7T0FHRztJQUNJLElBQUksQ0FBRSxXQUF1QjtRQUVoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUo7O09BRUc7SUFDTyxpQkFBaUI7UUFFMUIsa0VBQWdCLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVKOztPQUVHO0lBQ08sZUFBZTtJQUV0QixDQUFDO0lBR0o7O09BRUc7SUFDSyxRQUFRO1FBRWYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FDRDtBQUlEOztHQUVHO0FBQ0ksU0FBUyxvQkFBb0I7SUFFaEMsSUFBSSxhQUFhLEdBQUcsZ0VBQWlCLENBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzdELHNFQUF1QixDQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6REQ7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFFeEQsaUJBQWlCO0FBQ3dEO0FBQ3pFLFVBQVU7QUFJVjs7R0FFRztBQUNJLE1BQU0sTUFBTyxTQUFRLGdEQUFNO0lBVWpDLFlBQWEsSUFBWTtRQUV4QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLGVBQWMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBQUEsQ0FBQztJQUlILGlCQUFpQjtJQUNoQixJQUFXLGFBQWEsS0FBb0IsT0FBTywwREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekUsVUFBVTtJQUlULHVGQUF1RjtJQUN2Rix1RkFBdUY7SUFDdkYsMERBQTBEO0lBQzFELElBQVcsSUFBSSxLQUFhLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQztJQUU3QywyRkFBMkY7SUFDM0YsYUFBYTtJQUNiLElBQVcsS0FBSyxLQUFTLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBSWpELG1FQUFtRTtJQUNuRSwyQ0FBMkM7SUFDcEMsS0FBSztRQUVYLGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxVQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFJRCx3REFBd0Q7SUFDeEQsMkNBQTJDO0lBQ3BDLE9BQU87UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUUxQixpQkFBaUI7UUFDaEIsMERBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLDBEQUFhLENBQUMsSUFBSSxFQUFFLHdEQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsVUFBVTtJQUNYLENBQUM7SUFJRCw4RkFBOEY7SUFDOUYsMEZBQTBGO0lBQzFGLDhGQUE4RjtJQUM5RiwwRUFBMEU7SUFDMUUsMkNBQTJDO0lBQ3BDLGFBQWEsQ0FBRSxLQUFTO1FBRTlCLGtDQUFrQztRQUNsQyxPQUFPLHNEQUFZLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxJQUFJLEtBQU0sS0FBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUlELDRDQUE0QztJQUNyQyxZQUFZLENBQUUsS0FBUztRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFJLEtBQWdCLENBQUMsSUFBSSxDQUFDO1FBRTdELGlCQUFpQjtRQUNoQiwwREFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsMERBQWEsQ0FBQyxJQUFJLEVBQUUsd0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxVQUFVO0lBQ1gsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7O0FDb0VEO0FBQUE7QUFBQSxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDBGQUEwRjtBQUMxRiwrRUFBK0U7QUFDL0UsRUFBRTtBQUNGLG1HQUFtRztBQUM1RixNQUFNLFlBQVk7SUFXeEIsWUFBYSxZQUFxQixFQUFFLFlBQXFCO1FBRXhELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFPTSxNQUFNLENBQUMsYUFBYSxDQUFFLFlBQXFCLEVBQUUsWUFBcUI7UUFFeEUsT0FBTyxZQUFZO1lBQ2xCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtZQUM5RSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRixDQUFDOztBQVZhLDZCQUFnQixHQUFHLElBQUksWUFBWSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRCw2QkFBZ0IsR0FBRyxJQUFJLFlBQVksQ0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsNkJBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xELDZCQUFnQixHQUFHLElBQUksWUFBWSxDQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQVFqRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdE1GO0FBQUE7QUFBQTtBQUFBO0FBQ2tGO0FBSTdEO0FBS3JCLFVBQVU7QUFFVixhQUFhO0FBQ1QsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLFVBQVU7QUFJVixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG1FQUFtRTtBQUNuRSxFQUFFO0FBQ0YsbUdBQW1HO0FBQzVGLE1BQWUsTUFBTTtJQUE1QjtRQW1SSSxhQUFhO1FBQ0wsWUFBTyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLFVBQVU7SUFFWCxDQUFDO0lBdk9BLHdGQUF3RjtJQUN4RixnRkFBZ0Y7SUFDekUsSUFBSSxDQUFFLE1BQWMsRUFBRSxPQUFtQjtRQUUvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxtREFBbUQ7SUFDNUMsSUFBSTtRQUVWLGlFQUFpRTtRQUNqRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQ3hDO1lBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLDBFQUF3QixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFDekM7WUFDQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsMkVBQXlCLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUlELHVEQUF1RDtJQUN2RCxJQUFXLFNBQVMsS0FBYyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUkzRCxxQ0FBcUM7SUFDOUIsYUFBYTtRQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDekI7WUFDQyxtRUFBaUIsQ0FBRSxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNGLENBQUM7SUFJRDs7Ozs7T0FLRztJQUNJLHdCQUF3QixDQUFFLElBQXVCLEVBQUUsSUFBYTtRQUV0RSxrRUFBZ0IsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQ7Ozs7O09BS0c7SUFDSSx1QkFBdUIsQ0FBRSxJQUF1QixFQUFFLElBQWE7UUFFckUsa0VBQWdCLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlELDRGQUE0RjtJQUM1RixtQ0FBbUM7SUFDNUIsY0FBYyxDQUFFLEVBQVUsRUFBRSxPQUFZO1FBRTlDLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVM7WUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7UUFFaEQsSUFBSSxjQUFjLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQzlCO1lBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekMsd0VBQXNCLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQztJQUlELDJDQUEyQztJQUNwQyxnQkFBZ0IsQ0FBRSxFQUFVO1FBRWxDLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVM7WUFDdkMsT0FBTztRQUVSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsMEVBQXdCLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUlELDZGQUE2RjtJQUM3RixvRkFBb0Y7SUFDcEYsMEZBQTBGO0lBQzFGLHFGQUFxRjtJQUNyRixzREFBc0Q7SUFDL0MsZ0JBQWdCLENBQUUsRUFBVSxFQUFFLEdBQWdCLEVBQUUsY0FBb0IsRUFBRSxPQUFpQjtRQUU3RixJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTO1lBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUVyRSxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMseUVBQXVCLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLHVEQUFNLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlBLDRGQUE0RjtJQUM1Riw0QkFBNEI7SUFDckIsa0JBQWtCLENBQUUsRUFBVTtRQUVwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTO1lBQ3hDLE9BQU87UUFFUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFDckIsT0FBTztRQUVGLHVEQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLDJFQUF5QixDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFJRCx1RkFBdUY7SUFDdkYsb0ZBQW9GO0lBQ3BGLDZGQUE2RjtJQUN0RixVQUFVLENBQUUsRUFBVSxFQUFFLGNBQW9CLEVBQUUsT0FBaUI7UUFFckUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsT0FBTyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUN6RCxDQUFDO0lBSUQsd0ZBQXdGO0lBQ3hGLGdGQUFnRjtJQUN4RSxXQUFXLENBQUUsRUFBVSxFQUFFLE9BQWlCO1FBRWpELElBQUksT0FBTyxFQUNYO1lBQ0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUN4QztnQkFDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLE9BQU8sS0FBSyxTQUFTO29CQUN4QixPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNEO1FBRUQscUVBQXFFO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckUsQ0FBQztJQUlELDRGQUE0RjtJQUM1RiwwQ0FBMEM7SUFDbkMsb0JBQW9CLENBQUUsRUFBVTtRQUV0QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTO1lBQ3hDLE9BQU87UUFFUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFDckIsT0FBTztRQUVSLHVEQUFNLENBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSSxZQUFZLENBQXNCLFFBQVcsRUFBRSxZQUFxQjtRQUUxRSxPQUFPLG9FQUFrQixDQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQWNEO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFNLHVCQUF1QjtDQWE1Qjs7Ozs7Ozs7Ozs7OztBQ3BVRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBNkI7QUFFSTtBQUNLO0FBRVQ7QUFDRTtBQUNEO0FBQ0w7QUFFSTtBQUc3QixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdGQUFnRjtBQUNoRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ3BEO0FBRS9DLCtGQUErRjtBQUN4RixJQUFJLHVCQUF1QixHQUFHLHNFQUFvQixFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQjVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBNkI7QUFFRztBQUNDO0FBQ0s7QUFFUjtBQUNMO0FBQ0k7QUFDSztBQUNNO0FBQ0o7QUFDUjtBQUNDO0FBQ0s7QUFDRztBQUNSO0FBQ0E7QUFDUTtBQUNSO0FBQ0k7Ozs7Ozs7Ozs7Ozs7QUNtQmpDO0FBQUE7QUFBQTtBQUFBOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVM7SUFBdEI7UUFFQzs7O1dBR0c7UUFDSSxTQUFJLEdBQVUsSUFBSSxDQUFDLFFBQXdCLENBQUM7SUE0RHBELENBQUM7SUF4REE7OztPQUdHO0lBQ0ksTUFBTSxDQUFFLFFBQWU7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELE1BQU0sQ0FBRSxRQUFlO1FBRTdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDbEI7WUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUlELDBEQUEwRDtJQUN2RCxJQUFXLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSWxGLDBDQUEwQztJQUNuQyxLQUFLO1FBRVgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQVVELHlGQUF5RjtJQUN6RiwyREFBMkQ7SUFDbkQsUUFBUTtRQUVmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDbEI7WUFDQyxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUNsQyxRQUFRLENBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7Q0FDRDtBQWdFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBQ0ksU0FBUyxvQkFBb0I7SUFFbkMsT0FBTyxJQUFJLEtBQUssQ0FBRSxFQUFFLEVBQUUsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUlEOzs7O0dBSUc7QUFDSCxNQUFNLHFCQUFxQjtJQUVuQixHQUFHLENBQUUsTUFBVyxFQUFFLElBQWlCLEVBQUUsUUFBYTtRQUV4RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0Q7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sa0JBQWtCO0lBTXBCLFlBQWEsT0FBOEIsRUFBRSxJQUFpQjtRQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUo7OztPQUdHO0lBQ08sSUFBSTtRQUVQLElBQUksSUFBSSxDQUFDLElBQUk7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFSiwwQ0FBMEM7SUFDbkMsS0FBSztRQUVMLElBQUksSUFBSSxDQUFDLElBQUk7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUUsUUFBa0I7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2REFBNkQ7SUFDdEQsTUFBTSxDQUFFLFFBQWtCO1FBRTFCLElBQUksSUFBSSxDQUFDLElBQUk7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMERBQTBEO0lBQ3ZELElBQVcsS0FBSztRQUVaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUM3UkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsbUdBQW1HO0FBRW5HLDZEQUE2RDtBQUM3RCxJQUFZLGFBUVg7QUFSRCxXQUFZLGFBQWE7SUFFeEIsaURBQUk7SUFDSixpREFBSTtJQUNKLCtDQUFHO0lBQ0gsaURBQUk7SUFDSixpREFBSTtJQUNKLG1EQUFLO0FBQ04sQ0FBQyxFQVJXLGFBQWEsS0FBYixhQUFhLFFBUXhCO0FBSUQsd0ZBQXdGO0FBQ3hGLGNBQWM7QUFDZCwwREFBMEQ7QUFDMUQsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QyxJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFFdEIsK0NBQVE7SUFDUixtREFBVztJQUNYLG1EQUFXO0lBQ1gsK0NBQVM7SUFDVCxxREFBWTtBQUNiLENBQUMsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtBQUlELHdEQUF3RDtBQUNqRCxNQUFNLGFBQWE7SUFBMUI7UUFFQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFNdEIsQ0FBQztJQUpPLFdBQVc7UUFFakIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEYsQ0FBQztDQUNEO0FBSU0sTUFBTSxhQUFhO0lBYXpCLFlBQWEsSUFBWTtRQVJ6QixTQUFJLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDMUMsUUFBRyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLFNBQUksR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMxQyxTQUFJLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDMUMsVUFBSyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTTFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFJTSxLQUFLO1FBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUlNLElBQUksQ0FBRSxlQUF3QixJQUFJO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbkQsSUFBSSxZQUFZO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUQsdUZBQXVGO0lBQ3ZGLG9GQUFvRjtJQUNwRixvQ0FBb0M7SUFDN0IsR0FBRyxDQUFFLFFBQXVCLEVBQUUsTUFBbUI7UUFFdkQsSUFBSSxhQUE0QixDQUFDO1FBQ2pDLFFBQVEsUUFBUSxFQUNoQjtZQUNDLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLGFBQWEsQ0FBQyxHQUFHO2dCQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFDLE1BQU07WUFDeEQsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFDLE1BQU07WUFDNUQsT0FBTyxDQUFDLENBQUMsT0FBTztTQUNoQjtRQUVELFFBQVEsTUFBTSxFQUNkO1lBQ0MsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUNyRCxLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNO1lBQ3pELEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU07WUFDekQsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUNyRCxLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFBQyxNQUFNO1NBQzNEO0lBQ0YsQ0FBQztJQUlELG9EQUFvRDtJQUM3QyxRQUFRO1FBRWQsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxhQUFhO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixPQUFPLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUlELDREQUE0RDtJQUNyRCxZQUFZO1FBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUMxQixPQUFPLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELGFBQWE7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1FBRVgsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELGFBQWE7UUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1FBRVgsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsY0FBYztRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUlELHVGQUF1RjtJQUMvRSxZQUFZLENBQUUsQ0FBUyxFQUFFLElBQVksRUFBRSxHQUFXO1FBRXpELElBQUksR0FBRyxLQUFLLENBQUM7WUFDWixPQUFPLEVBQUUsQ0FBQzs7WUFFVixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNoRCxDQUFDO0NBS0Q7Ozs7Ozs7Ozs7Ozs7QUM1TkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixlQUFlO0FBQ2YsRUFBRTtBQUNGLG1HQUFtRztBQThDbkc7Ozs7R0FJRztBQUNILElBQUssWUFzQko7QUF0QkQsV0FBSyxZQUFZO0lBRWI7OztPQUdHO0lBQ0gsaURBQVM7SUFFVDs7Ozs7T0FLRztJQUNILHFEQUFXO0lBRVg7Ozs7T0FJRztJQUNILGlEQUFVO0FBQ2QsQ0FBQyxFQXRCSSxZQUFZLEtBQVosWUFBWSxRQXNCaEI7QUFJRDs7O0dBR0c7QUFDSSxTQUFTLGFBQWEsQ0FBVyxLQUFhLEVBQUUsQ0FBSztJQUV4RCxPQUFPLElBQUksT0FBTyxDQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFFVCxZQUFhLEtBQWMsRUFBRSxDQUFLO1FBK0NsQyw4RkFBOEY7UUFDOUYsbUVBQW1FO1FBQzVELGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVyxDQUFDO1FBL0NqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsR0FBRztRQUVOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELG1CQUFtQjtJQUNaLEdBQUcsQ0FBRSxDQUFJO1FBRVoseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1osT0FBTztRQUVYLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsOERBQThEO0lBQ3ZELFVBQVU7UUFFYixTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2RkFBNkY7SUFDN0YsNERBQTREO0lBQ3JELGFBQWE7UUFFaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDO1lBQ3RCLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBYUo7QUE0QkQ7O0dBRUc7QUFDSCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUUsWUFBWSxDQUFDLENBQUM7QUFJdkM7Ozs7Ozs7Ozs7O0dBV0c7QUFDSSxTQUFTLGFBQWEsQ0FBd0IsSUFBTyxFQUFFLFNBQXVCLEVBQ2pGLFFBQWMsRUFBRSxhQUFtQjtJQUVuQyxTQUFTLFdBQVcsQ0FBQyxHQUFHLElBQVc7UUFFL0IsSUFBSSxPQUFPLEdBQVksV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLHFGQUFxRjtRQUNyRix1REFBdUQ7UUFDdkQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVqRiwrQkFBK0I7SUFDOUIsV0FBd0IsQ0FBQyxPQUFPLEdBQUc7UUFFaEMsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBWSxDQUFDO1FBQ2pELE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sV0FBMEIsQ0FBQztBQUN0QyxDQUFDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU87SUFFVCxZQUFhLElBQU8sRUFBRSxTQUF1QixFQUFFLFFBQWMsRUFBRSxhQUFtQjtRQTRHbEYsdUZBQXVGO1FBQ3ZGLHNGQUFzRjtRQUN0Rix5RkFBeUY7UUFDekYsc0ZBQXNGO1FBQ3RGLHNCQUFzQjtRQUNmLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVyxDQUFDO1FBL0dqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBRSxRQUFhLEVBQUUsSUFBVztRQUV0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRXJELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztTQUNyQztRQUVELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYix1REFBdUQ7UUFDdkQsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUM7UUFFNUIsb0JBQW9CO1FBQ3BCLElBQ0E7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7Z0JBRUQ7WUFDSSx3REFBd0Q7WUFDeEQsU0FBUyxDQUFDLFVBQVUsRUFBRTtTQUN6QjtJQUNMLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsT0FBTztRQUVWLCtDQUErQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixPQUFPO1FBRVgscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLCtGQUErRjtRQUMvRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLDhDQUE4QztJQUN2QyxPQUFPO1FBRVYsMkZBQTJGO1FBQzNGLDBGQUEwRjtRQUMxRiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2YsT0FBTztRQUVYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSztRQUVULGtGQUFrRjtRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixxRkFBcUY7UUFDckYsU0FBUyxDQUFDLHFCQUFxQixDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0F3Qko7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFVBQVU7QUFDVixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxxQkFBcUI7SUFBM0I7UUE4Rkksb0ZBQW9GO1FBQ3BGLDJGQUEyRjtRQUMzRiwyRkFBMkY7UUFDM0YsNkRBQTZEO1FBQ3JELGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRXJDLDhGQUE4RjtRQUM5RiwwRkFBMEY7UUFDMUYsMkZBQTJGO1FBQzNGLDRGQUE0RjtRQUM1Riw2RkFBNkY7UUFDckYsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLHdGQUF3RjtRQUN4Riw0RkFBNEY7UUFDNUYsYUFBYTtRQUNMLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFXLENBQUM7SUFDbEQsQ0FBQztJQTdHRzs7T0FFRztJQUNJLFdBQVcsQ0FBRSxPQUFnQjtRQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBRWIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBRSxPQUFnQjtRQUUxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLGtCQUFrQjtRQUVyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFFcEIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssQ0FBQztZQUNqQyxNQUFNLEtBQUssQ0FBRSxvQ0FBb0MsQ0FBQyxDQUFDO1FBRXZELElBQUksRUFBRSxJQUFJLENBQUMsc0JBQXNCLEtBQUssQ0FBQyxFQUN2QztZQUNJLHVGQUF1RjtZQUN2RixzRkFBc0Y7WUFDdEYscUJBQXFCO1lBQ3JCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQixDQUFFLE9BQWdCO1FBRXRDLDREQUE0RDtRQUM1RCxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQ3JDO1lBQ0ksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxvQkFBb0IsQ0FBRSxPQUFnQjtRQUV6Qyx3RUFBd0U7UUFDeEUsYUFBYTtRQUNULElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFFLCtEQUErRCxDQUFDLENBQUM7UUFDeEYsVUFBVTtRQUVWLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFFOUU7WUFDSSx1RkFBdUY7WUFDdkYsc0ZBQXNGO1lBQ3RGLHFCQUFxQjtZQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0NBcUJKO0FBSUQsNENBQTRDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUk1Qzs7R0FFRztBQUNJLFNBQVMsa0JBQWtCO0lBRTlCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFFRDs7R0FFRztBQUNJLFNBQVMsaUJBQWlCO0lBRTdCLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUF1QkQ7Ozs7R0FJRztBQUNJLFNBQVMscUJBQXFCLENBQVcsSUFBcUIsRUFBRSxRQUFjO0lBRWpGLE9BQU8sSUFBSSxlQUFlLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFJRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sZUFBeUIsU0FBUSxPQUFVO0lBRTdDLFlBQWEsSUFBcUIsRUFBRSxRQUFjO1FBRTlDLEtBQUssQ0FBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsR0FBRztRQUVOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDaEI7WUFDSSxvRkFBb0Y7WUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV0RixLQUFLLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFpQztJQUMxQixPQUFPO1FBRVYsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLE9BQU87UUFFWCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQ3BCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLFNBQVM7UUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7WUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztDQW9CSjtBQXlCRDs7R0FFRztBQUNILElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBRSxZQUFZLENBQUMsQ0FBQztBQUl2Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSSxTQUFTLGFBQWEsQ0FBd0IsSUFBTyxFQUFFLFFBQWM7SUFFeEUsU0FBUyxXQUFXLENBQUMsR0FBRyxJQUFXO1FBRS9CLElBQUksT0FBTyxHQUFZLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQyxxRkFBcUY7UUFDckYsdURBQXVEO1FBQ3ZELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXZELCtCQUErQjtJQUM5QixXQUF3QixDQUFDLE9BQU8sR0FBRztRQUVoQyxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFZLENBQUM7UUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxXQUEwQixDQUFDO0FBQ3RDLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU87SUFFVCxZQUFhLElBQU8sRUFBRSxRQUFjO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBRSxRQUFhLEVBQUUsSUFBVztRQUV0QyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBRXJELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTdCLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9CLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FBRTtnQkFDN0M7WUFBRSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUFFO0lBQzlDLENBQUM7SUFFRCxpQ0FBaUM7SUFDMUIsT0FBTztRQUVWLCtDQUErQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDVixPQUFPO1FBRVgsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FPSjtBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsMEJBQTBCO0FBQzFCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFTLFdBQVcsQ0FBVyxDQUFJLEVBQUUsT0FBZ0IsRUFBRSxLQUFjO0lBRWpFLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7UUFDakIsT0FBTyxDQUFDLENBQUM7U0FDUixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksdUJBQXVCLENBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBYSxDQUFDO1NBQ25ILElBQUksQ0FBQyxZQUFZLEdBQUc7UUFDckIsT0FBTyxJQUFJLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBYSxDQUFDO1NBQ3RHLElBQUksQ0FBQyxZQUFZLEdBQUc7UUFDckIsT0FBTyxJQUFJLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBYSxDQUFDO1NBQ3RHLElBQUksQ0FBQyxDQUFDLFdBQVcsS0FBSyxNQUFNO1FBQzdCLE9BQU8sSUFBSSxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksdUJBQXVCLENBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBYSxDQUFDOztRQUVqSCxPQUFPLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLHVCQUF1QjtJQUV6QixZQUFhLE9BQWdCLEVBQUUsS0FBYTtRQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsR0FBRyxDQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLFFBQWE7UUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsR0FBRyxDQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLEtBQVUsRUFBRSxRQUFhO1FBRTFELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQ3JCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM3QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlGOztZQUVHLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUUsTUFBVyxFQUFFLElBQWlCO1FBRTFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsY0FBYyxDQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLEtBQXlCO1FBRXJFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELEdBQUcsQ0FBRSxNQUFXLEVBQUUsSUFBaUI7UUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjLENBQUUsTUFBVztRQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsWUFBWSxDQUFFLE1BQVc7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdCQUF3QixDQUFFLE1BQVcsRUFBRSxJQUFpQjtRQUVwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sT0FBTyxDQUFDLHdCQUF3QixDQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsU0FBUyxDQUFFLE1BQVc7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPLENBQUUsTUFBVztRQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBVUo7QUFJRCxNQUFNO0FBQ04seUJBQXlCO0FBQ3pCLE1BQU07QUFDTixxREFBcUQ7QUFDckQsSUFBSTtBQUNKLHNFQUFzRTtBQUN0RSxRQUFRO0FBQ1IscUNBQXFDO0FBQ3JDLHVEQUF1RDtBQUN2RCxRQUFRO0FBQ1IsSUFBSTtBQUlKLE1BQU07QUFDTixtQ0FBbUM7QUFDbkMsTUFBTTtBQUNOLHNEQUFzRDtBQUN0RCxJQUFJO0FBQ0osK0RBQStEO0FBQy9ELFFBQVE7QUFDUix1REFBdUQ7QUFDdkQsUUFBUTtBQUNSLElBQUk7QUFJSjs7Ozs7O0dBTUc7QUFDSCxNQUFNLG9CQUFvQjtJQUV0QixZQUFhLE9BQWdCLEVBQUUsa0JBQW9DLEVBQUUsS0FBYTtRQXNGbEYsc0ZBQXNGO1FBQzlFLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFyRnJELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsMEZBQTBGO0lBQzFGLHdGQUF3RjtJQUN4Rix1QkFBdUI7SUFDdkIsR0FBRyxDQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLFFBQWE7UUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUUxQix3RkFBd0Y7UUFDeEYsdUZBQXVGO1FBQ3ZGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFbkIsMkRBQTJEO1FBQzNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDSSxnQ0FBZ0M7WUFDaEMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVTtnQkFDN0IsT0FBTyxPQUFPLENBQUM7WUFFbkIsZ0RBQWdEO1lBQ2hELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUNyQztnQkFDSSxxRkFBcUY7Z0JBQ3JGLG1GQUFtRjtnQkFDbkYsb0ZBQW9GO2dCQUNwRixxRkFBcUY7Z0JBQ3JGLE1BQU0sR0FBRztvQkFDTCxJQUFJLEdBQUcsR0FBbUIsT0FBTyxDQUFDLG9CQUFvQixDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7b0JBQ3BHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDTixPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUVwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZCx3Q0FBd0M7Z0JBQzVDLENBQUMsQ0FBQzthQUNMO2lCQUVEO2dCQUNJLDhFQUE4RTtnQkFDOUUsTUFBTSxHQUFHO29CQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzdCLE9BQU8sY0FBYyxDQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQzthQUNMO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxvQkFBb0IsQ0FBRSxNQUFXLEVBQUUsSUFBaUIsRUFBRSxTQUFtQixFQUFFLEdBQUcsSUFBVztRQUUvRixPQUFPLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FnQko7QUFJRDs7R0FFRztBQUNILE1BQU0sVUFBVyxTQUFRLG9CQUFvQjtJQUl6QyxZQUFhLE9BQWdCLEVBQUUsS0FBYTtRQUV4QyxLQUFLLENBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sb0JBQW9CLENBQUUsTUFBb0IsRUFBRSxJQUFpQixFQUFFLFNBQW1CLEVBQUUsR0FBRyxJQUFXO1FBRXhHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFDcEI7WUFDSSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDakM7YUFDSSxJQUFJLElBQUksS0FBSyxLQUFLO1lBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNuRixJQUFJLElBQUksS0FBSyxRQUFRLEVBQzFCO1lBQ0ksSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDOztBQTdCYyw2QkFBa0IsR0FBRyxJQUFJLEdBQUcsQ0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQWtDekY7O0dBRUc7QUFDSCxNQUFNLFVBQVcsU0FBUSxvQkFBb0I7SUFJekMsWUFBYSxPQUFnQixFQUFFLEtBQWE7UUFFeEMsS0FBSyxDQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLG9CQUFvQixDQUFFLE1BQW9CLEVBQUUsSUFBaUIsRUFBRSxTQUFtQixFQUFFLEdBQUcsSUFBVztRQUV4RyxJQUFJLElBQUksS0FBSyxLQUFLO1lBQ2QsT0FBTyxDQUFDLFNBQVMsQ0FBRSxXQUFXLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUUsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUN6QjtZQUNJLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNqQzthQUNJLElBQUksSUFBSSxLQUFLLFFBQVEsRUFDMUI7WUFDSSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7O0FBN0JjLDZCQUFrQixHQUFHLElBQUksR0FBRyxDQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBa0N6RixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGFBQWE7QUFDYixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7R0FNRztBQUNJLFNBQVMsT0FBTyxDQUFFLGFBQWtCLEVBQUUsSUFBYTtJQUV0RCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFDckM7UUFDSSxvRkFBb0Y7UUFDcEYscUJBQXFCO1FBQ3JCLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxDQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUNqRTtTQUVEO1FBQ0ksb0ZBQW9GO1FBQ3BGLGdGQUFnRjtRQUNoRixPQUFPLHNCQUFzQixDQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDbEU7QUFDTCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLHNCQUFzQixDQUFFLEtBQWEsRUFBRSxNQUFXLEVBQUUsSUFBWTtJQUVyRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUUsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtRQUNqQyxHQUFHO1lBRUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBYSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBRW5ELE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDRCxHQUFHLENBQUUsR0FBRztZQUVKLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQWEsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7O2dCQUVwRCxVQUFVLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQztRQUM1QixDQUFDO0tBQ1AsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUlEOzs7OztHQUtHO0FBQ0ksU0FBUyxRQUFRLENBQUUsTUFBVyxFQUFFLElBQVksRUFBRSxTQUE2QjtJQUU5RSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkIsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUNwQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRztZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUVsRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxHQUFHLEdBQUc7WUFFWixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFxQixDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcscUJBQXFCLENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWxFLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQ2pCO1lBQ0ksSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBTTtnQkFFNUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9CLElBQUk7b0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQUU7d0JBQ3RCO29CQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUFFO1lBQzlDLENBQUM7U0FDSjtLQUNKO1NBRUQ7UUFDSSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFNO1lBRTlCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQXFCLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsR0FBRyxxQkFBcUIsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbkUsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUNKO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztHQUlHO0FBQ0ksU0FBUyxhQUFhLENBQUUsRUFBTyxFQUFFLEVBQU87SUFFOUMsSUFBSSxFQUFFLEtBQUssRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ1IsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO1NBQ1IsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ1QsSUFBSSxPQUFPLEVBQUUsS0FBSyxPQUFPLEVBQUU7UUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDVCxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFDL0I7UUFDQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDaEI7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDaEI7WUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNiLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRDtTQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxPQUFPLEtBQUssQ0FBQztTQUNULElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDMUI7UUFDQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLE1BQU07WUFDMUIsT0FBTyxLQUFLLENBQUM7YUFFZDtZQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQzdDO2dCQUNDLElBQUksQ0FBQyxhQUFhLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNEO0tBQ0Q7U0FFRDtRQUNDLDBGQUEwRjtRQUMxRixPQUFPLEtBQUssQ0FBQztLQUNiO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBSUQsOENBQThDO0FBQzlDLElBQUk7QUFDSix3QkFBd0I7QUFDeEIsY0FBYztBQUNkLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCx3QkFBd0I7QUFDeEIsY0FBYztBQUNkLHlCQUF5QjtBQUN6QixjQUFjO0FBRWQsZUFBZTtBQUVmLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBQ2hDLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLGNBQWM7QUFDZCxLQUFLO0FBQ0wsUUFBUTtBQUNSLEtBQUs7QUFDTCxnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1QyxjQUFjO0FBQ2QsS0FBSztBQUNMLElBQUk7QUFJSixpREFBaUQ7QUFDakQsSUFBSTtBQUNKLFdBQVc7QUFDWCxjQUFjO0FBRWQsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLGFBQWE7QUFDYixJQUFJO0FBSUosbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrRUFBa0U7QUFDbEUsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7OztHQUlHO0FBQ0ksU0FBUyxPQUFPLENBQUUsR0FBWTtJQUVwQyxPQUFPLGlCQUFpQixJQUFLLEdBQVcsQ0FBQztBQUMxQyxDQUFDO0FBSUQ7OztHQUdHO0FBQ0ksU0FBUyxVQUFVLENBQUUsR0FBWTtJQUV2QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBQzdCLGdEQUFnRDtBQUNqRCxDQUFDOzs7Ozs7Ozs7Ozs7QUN2SUQsb0QiLCJmaWxlIjoibWltYmwuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWNzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1ibFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltYmxcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1jc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtzX2lzU3ZnLCBzX2lzU3ZnU3ZnfSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhbiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBvbmUgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFNWRyBzcGVjOyB0aGF0IGlzLCA8c3ZnPlxyXG4gKiBvciBhbnkgb3RoZXIgZnJvbSBTVkcuXHJcbiAqIEBwYXJhbSBlbG0gRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBzX2lzU3ZnKCBlbG0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gc19pc1N2Z1N2ZyggZWxtKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIFByb21pc2UgY2xhc3Mgd2l0aCB0aGUgcmVzb2x2ZSBhbmQgcmVqZWN0IG1ldGhvZHMgc28gdGhhdCB0aGUgcHJvbWlzZSBjYW5cclxuICogYmUgY3JlYXRlZCBpbiBvbmUgcGxhY2UgYW5kIHJlc29sdmVkIG9yIHJlamVjdGVkIGluIGEgZGlmZmVyZW50IHBsYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvbWlzZUV4PFQgPSBhbnk+ID0gUHJvbWlzZTxUPiAmXHJcbiAgICB7XHJcbiAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLFxyXG4gICAgICAgIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgUHJvbWlzZSBvYmplY3RzIHRoYXQgY2FuIGJlIHJlc29sdmVkIG9yIHJlamVjdGVkIGV4dGVybmFsbHkuIFRoZSByZXR1cm5lZCBQcm9taXNlRXhcclxuICogb2JqZWN0IGhhcyByZXNvbHZlIGFuZCByZWplY3QgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlRXg8VCA9IGFueT4oKTogUHJvbWlzZUV4PFQ+XHJcbntcclxuICAgIGxldCB0ZW1wUmVzb2x2ZSwgdGVtcFJlamVjdDtcclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHRlbXBSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB0ZW1wUmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgfSkgYXMgUHJvbWlzZUV4PFQ+O1xyXG5cclxuICAgIHByb21pc2UucmVzb2x2ZSA9IHRlbXBSZXNvbHZlO1xyXG4gICAgcHJvbWlzZS5yZWplY3QgPSB0ZW1wUmVqZWN0O1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIGZ1bmN0aW9uIHRvIGNyZWF0ZSBQcm9taXNlIG9iamVjdHMgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZXh0ZXJuYWxseS4gVGhlIHJldHVybmVkXHJcbiAqIFByb21pc2Ugb2JqZWN0IGhhcyByZXNvbHZlIGFuZCByZWplY3QgbWV0aG9kcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZlcjxUID0gYW55PiBleHRlbmRzIFByb21pc2U8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBmdW5jdGlvbihyZXMsIHJlaikge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlOiAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7U3R5bGVzZXQsIElDbGFzc1J1bGUsIElDbGFzc05hbWVSdWxlLCBJSURSdWxlLCBDbGFzc1Byb3BUeXBlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtjcmVhdGVOb2Rlc0Zyb21KU1gsIHdyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4uL2NvcmUvUmVjb25jaWxlclwiO1xyXG5pbXBvcnQge1Byb3BUeXBlLCBFbG1BdHRyLCBFdmVudFNsb3QsIG1vdW50Um9vdCwgdW5tb3VudFJvb3QsIEZ1bmNQcm94eVZOfSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIEZvciBtYW5hZ2VkIGNvbXBvbmVudHMsIHRoZSBwcm9wZXJ0aWVzXHJcblx0ICogY2FuIGFsc28gYmUgc2V0IChjaGFuZ2VkKSB3aGVuIHRoZSBjb21wb25lbnQncyBwYXJlbnQgaXMgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRwcm9wcz86IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogdXNlZCBpcyB0aGUgY29tcG9uZW50J3MgY2xhc3MgY29uc3RydWN0b3IgbmFtZS4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYmVmb3JlXHJcblx0ICogdGhlIHZpcnR1YWwgbm9kZSBpcyBhdHRhY2hlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzLCBnZXRzIG9yIGNsZWFycyB0aGUgdmlydHVhbCBub2RlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50LiBUaGlzIHByb3BlcnR5IGlzIHNldCB0d2ljZTpcclxuXHQgKiAgMS4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lOiB0aGUgY29tcG9uZW50IG11c3QgcmVtZW1iZXIgdGhlXHJcblx0ICogICAgcGFzc2VkIG9iamVjdC5cclxuXHQgKiAgMi4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkOiBudWxsIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIGNvbXBvbmVudCBtdXN0XHJcblx0ICogICAgcmVsZWFzZSB0aGUgcmVtZW1iZXJlZCBvYmplY3QuXHJcblx0ICovXHJcblx0dm4/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gcmVuZGVyIGl0cyBjb250ZW50IGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBtZXRob2RcclxuXHQgKiBpcyBjYWxsZWQgd2hlbiB0aGUgdmlydHVhbCBub2RlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXNcclxuXHQgKiBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgY29tcG9uZW50IHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZCB0aGUgY29udGVudCBvZiBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0b1xyXG4gICAgLy8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS4gQWZ0ZXJcclxuXHQgKiB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG5cdCAqL1xyXG5cdHdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBjYW4gcmVhZCBET00gbGF5b3V0IGluZm9ybWF0aW9uIChlLmcuXHJcblx0ICogZWxlbWVudCBtZWFzdXJlbWVudHMpIHdpdGhvdXQgdGhlIHJpc2sgb2YgY2F1c2luZyBmb3JjZWQgbGF5b3V0cy5cclxuXHQgKi9cclxuXHRiZWZvcmVVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBhZnRlciBhbCBjb21wb25lbnRzIHRoYXQgYXJlIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogYSBNaW1ibCB0aWNrLCBhcmUgdXBkYXRlZC4gSWYgaW1wbGVtZW50ZWQsIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlXHJcblx0ICogY29tcG9uZW50IGlzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIG1vZGlmaWNhdGlvbnMgdG9cclxuXHQgKiBET00gcmVzdWx0aW5nIGZyb20gdXBkYWluZyBjb21wb25lbnRzIGhhdmUgYmVlbiBhbHJlYWR5IGRvbmUuXHJcblx0ICovXHJcblx0YWZ0ZXJVcGRhdGU/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgdXNlZCBieSBtYW5hZ2VkIGNvbXBvbmVudHMuXHJcblx0ICogXHJcblx0ICogSW5mb3JtcyB0aGUgY29tcG9uZW50IHRoYXQgbmV3IHByb3BlcnRpZXMgaGF2ZSBiZWVuIHNwZWNpZmllZC4gQXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuXHQgKiB0aGlzLnByb3BzIHJlZmVycyB0byB0aGUgXCJvbGRcIiBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnMgdHJ1ZSx0aGVuIGl0cyByZW5kZXJcclxuXHQgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQuIEF0IHRoYXQgdGltZSx0aGUgb3JpZ2luYWwgcHJvcHMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBpbnRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIHdpbGwgaGF2ZSB0aGVzZSBuZXcgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGltcGxlbWVudFxyXG5cdCAqIHRoZSBzaG91bGRVcGRhdGUgbWV0aG9kIGl0IGlzIGFzIHRob3VnaCB0cnVlIGlzIHJldHVybmVkLiBJZiB0aGUgY29tcG9uZW50IHJldHVybnNcclxuXHQgKiBmYWxzZSwgdGhlIHJlbmRlciBtZXRob2QgaXMgbm90IGNhbGxlZCBhbmQgdGhlIERPTSB0cmVlIG9mIHRoZSBjb21wb25lbnQgcmVtYWlucyB1bmNoYW5nZWQuXHJcblx0ICogVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudCwgaG93ZXZlciwgc3RpbGwgY2hhbmdlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wcyBUaGUgbmV3IHByb3BlcnRpZXMgdGhhdCB0aGUgcGFyZW50IGNvbXBvbmVudCBwcm92aWRlcyB0byB0aGlzIGNvbXBvbmVudC5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGhhdmUgaXRzIHJlbmRlciBtZXRob2QgY2FsbGVkIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0c2hvdWxkVXBkYXRlPyggbmV3UHJvcHM6IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPik6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZyBvZlxyXG5cdCAqIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvciBpZiBpdCB0aHJvd3MgYW4gZXJyb3IsIHRoZVxyXG5cdCAqIGVycm9yIHdpbGwgYmUgcHJvcGFnYXRlZCB1cCB0aGUgY2hhaW4gb2YgY29tcG9uZW50cyB1bnRpbCBpdCByZWFjaGVzIGEgY29tcG9uZW50IHRoYXRcclxuXHQgKiBoYW5kbGVzIGl0LiBJZiBub25lIG9mIHRoZSBjb21wb25lbnRzIGNhbiBoYW5kbGUgdGhlIGVycm9yLCB0aGUgZW50aXJlIHRyZWUgd2lsbCBiZVxyXG5cdCAqIHVubW91bnRlZC5cclxuXHQgKiBAcGFyYW0gZXJyIEFuIGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gZHVyaW5nIHRoZSBjb21wb25lbnQncyBvd24gcmVuZGVyaW5nIG9yIHJlbmRlcmluZ1xyXG5cdCAqIG9mIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuXHJcblx0ICogQHBhcmFtIHBhdGggQW4gYXJyYXkgb2YgbmFtZXMgb2YgY29tcG9uZW50cyBhbmQgZWxlbWVudHMgZnJvbSB0aGUgbW91bnRlZCByb290IHRvIHRoZVxyXG5cdCAqIGNvbXBvbmVudCB0aGF0IHRocmV3IHRoZSBleGNlcHRpb24uIFRoaXMgcGF0aCBpcyBwcm92aWRlZCBtb3N0bHkgZm9yIGRlYnVnZ2luZyBhbmQgdHJhY2luZ1xyXG5cdCAqIHB1cnBvc2VzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUVycm9yPyggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGNvbXBvbmVudCBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdGdldFVwZGF0ZVN0cmF0ZWd5PygpOiBVcGRhdGVTdHJhdGVneTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgcHJvcGVydHkgdHlwZXMgdXNlZCBieSBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3IgRE9NIGV2ZW50cyBvZiB0eXBlIFQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSAoZTogVCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdF07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudFxyXG4gKiBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSwgb2JqZWN0IHRoYXQgd2lsbCBiZSBib3VuZCBhcyBcInRoaXNcIiB3aGVuIHRoZSBoYW5kbGVyXHJcbiAqIGlzIGludm9rZWQgYW5kIHRoZSBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGVcclxuICogY2FwdHVyZSAodHJ1ZSkgb3IgdG8gdGhlIGJ1YmJsZSAoZmFsc2UpIHBoYXNlLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0LCBib29sZWFuXTtcclxuXHJcbi8qKlxyXG4gKiBVbmlvbiB0eXBlIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBFbGVtZW50J3MgZXZlbnQuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFByb3BUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBFdmVudEZ1bmNUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VD4gfFxyXG5cdFx0XHRcdEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQ+IHwgRXZlbnRGdW5jQW5kVGhpc0FuZEZsYWdUeXBlPFQ+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBpZCBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqL1x0XHRcdFx0XHJcbmV4cG9ydCB0eXBlIElEUHJvcFR5cGUgPSBzdHJpbmcgfCBudW1iZXIgfCBJSURSdWxlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBzcGVjaWZpZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgdXBkYXRlIGJlaGF2aW9yIG9mIGNvbXBvbmVudHMgYW5kXHJcbiAqIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVXBkYXRlU3RyYXRlZ3kgPSBcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciBub24tbWF0Y2hpbmcgbmV3IGtleWVkIHN1Yi1ub2RlcyBhcmUgYWxsb3dlZCB0byByZWN5Y2xlIG5vbi1cclxuXHQgKiBtYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzLiBIZXJlIFwibm9uLW1hdGNoaW5nXCIgbWVhbnMgdGhvc2UgbmV3IG9yIG9sZCBub2RlcyBmb3Igd2hpY2hcclxuXHQgKiBubyBvbGQgb3IgbmV3IHN1Yi1ub2RlcyByZXNwZWN0aXZlbHkgd2VyZSBmb3VuZC4gSWYgdGhpcyBmbGFnIGlzIGZhbHNlLCB0aGVuIG5vbi1tYXRjaGluZ1xyXG5cdCAqIG9sZCBzdWItbm9kZXMgd2lsbCBiZSByZW1vdmVkIGFuZCBub24tbWF0Y2hpbmcgbmV3IHN1Yi1ub2RlcyB3aWxsIGJlIGluc2VydGVkLiBJZiB0aGlzXHJcblx0ICogZmxhZyBpcyB0cnVlLCB0aGVuIG5vbi1tYXRjaGluZyBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgdXBkYXRlZCBieSB0aGUgbm9uLW1hdGNoaW5nIG5ld1xyXG5cdCAqIHN1Yi1ub2RlcyAtIHByb3ZpZGVkIHRoYXQgdGhlIHR5cGVzIG9mIHN1Yi1ub2RlcyBhcmUgdGhlIHNhbWUuXHJcblx0ICogXHJcblx0ICogSWYga2V5ZWQgc3ViLW5vZGVzIHJlY3ljbGluZyBpcyBhbGxvd2VkIGl0IGNhbiBzcGVlZCB1cCBhbiB1cGRhdGUgcHJvY2VzcyBiZWNhdXNlXHJcblx0ICogbGVzcyBET00gbm9kZXMgZ2V0IHJlbW92ZWQgYW5kIGluc2VydGVkLCB3aGljaCBpcyBtb3JlIGV4cGVuc2l2ZSB0aGFuIHVwZGF0aW5nLiBIb3dldmVyLFxyXG5cdCAqIHRoaXMgY2FuIGhhdmUgc29tZSBhZHZlcnNlIGVmZmVjdHMgdW5kZXIgY2lydGFpbiBjaXJjdW1zdGFuY2VzIGlmIGNlcnRhaW4gZGF0YSBpcyBib3VuZFxyXG5cdCAqIHRvIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlcyBvZiBET00gbm9kZXMuXHJcblx0ICogXHJcblx0ICogVGhlIGZsYWcncyBkZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0YWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgdHlwZSBDcm9zc29yaWdpblByb3BUeXBlID0gXCJhbm9ueW1vdXNcIiB8IFwidXNlLWNyZWRlbnRpYWxzXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1lbmN0eXBlUHJvcFR5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIHwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfCBcInRleHQvcGxhaW5cIjtcclxuZXhwb3J0IHR5cGUgRm9ybW1ldGhvZFByb3BUeXBlID0gXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJkaWFsb2dcIjtcclxuZXhwb3J0IHR5cGUgRm9ybXRhcmdldFByb3BUeXBlID0gc3RyaW5nIHwgXCJfc2VsZlwiIHwgXCJfYmxhbmtcIiB8IFwiX3BhcmVudFwifCBcIl90b3BcIjtcclxuZXhwb3J0IHR5cGUgUmVmZXJyZXJQb2xpY3lQcm9wVHlwZSA9IFwibm8tcmVmZXJyZXJcIiB8IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiB8IFwib3JpZ2luXCIgfFxyXG5cdFx0XCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiB8IFwidW5zYWZlLXVybFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb21tb25Qcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEpTWCBlbGVtZW50cyAtXHJcbiAqIGludHJpbnNpYyAoSFRNTCBhbmQgU1ZHKSBhcyB3ZWxsIGFzIGZ1bmN0aW9uYWwgYW5kIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFVuaXF1ZSBrZXkgdGhhdCBkaXN0aW5ndWlzaGVzIHRoaXMgSlNYIGVsZW1lbnQgZnJvbSBpdHMgc2libGluZ3MuIFRoZSBrZXkgY2FuIGJlIG9mIGFueSB0eXBlLiAqL1xyXG5cdGtleT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFbGVtZW50UHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyAoYXR0cmlidXRlcyBhbmQgZXZlbnQgbGlzdGVuZXJzKVxyXG4gKiB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBIVE1MIGFuZCBTVkcgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4gPSBhbnk+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGVsZW1lbnQgYWZ0ZXIgaXQgaXMgY3JlYXRlZCAobW91bnRlZCkuIFRoZVxyXG5cdCAqIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdCAqL1xyXG5cdHJlZj86IFJlZlByb3BUeXBlPFRSZWY+O1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBlbGVtZW50IGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8qKiBDaGlsZHJlbiB0aGF0IGNhbiBiZSBzdXBwbGllZCB0byB0aGUgZWxlbWVudCAqL1xyXG5cdGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cclxuXHQvLyBzdGFuZGFyZCBIVE1MIGFuZCBTVkcgZWxlbWVudCBwcm9wZXJ0aWVzXHJcblx0Y2xhc3M/OiBDbGFzc1Byb3BUeXBlO1xyXG5cdGRyYWdnYWJsZT86IGJvb2xlYW47XHJcblx0ZHJvcHpvbmUgPzogXCJjb3B5XCIgfCBcIm1vdmVcIiB8IFwibGlua1wiO1xyXG5cdGlkPzogc3RyaW5nIHwgbnVtYmVyIHwgSUlEUnVsZTtcclxuXHRsYW5nPzogc3RyaW5nO1xyXG5cdHJvbGU/OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBTdHlsZXNldDtcclxuXHR0YWJpbmRleD86IG51bWJlcjtcclxuXHJcblx0Ly8gZ2xvYmFsIGV2ZW50c1xyXG5cdGFib3J0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRhbmltYXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25pdGVyYXRpb24/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhbmltYXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGF1eGNsaWNrPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Ymx1cj86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Y2FuY2VsPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXl0aHJvdWdoPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGNsb3NlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y29udGV4dG1lbnU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGN1ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGRibGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRkdXJhdGlvbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVtcHRpZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbmRlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVycm9yPzogRXZlbnRQcm9wVHlwZTxFcnJvckV2ZW50PjtcclxuXHRmb2N1cz86IEV2ZW50UHJvcFR5cGU8Rm9jdXNFdmVudD47XHJcblx0Z290cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0aW5wdXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRpbnZhbGlkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0a2V5ZG93bj86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5cHJlc3M/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXVwPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRsb2FkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZG1ldGFkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVuZD86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0bG9hZHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9zdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdG1vdXNlZG93bj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VlbnRlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VsZWF2ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2Vtb3ZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW91dD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdmVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZXVwPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRwYXVzZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cG9pbnRlcmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZG93bj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyZW50ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmxlYXZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJtb3ZlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdXQ/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm92ZXI/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcnVwPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHByb2dyZXNzPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRyYXRlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzZXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNpemU/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHNjcm9sbD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbj86IEV2ZW50UHJvcFR5cGU8U2VjdXJpdHlQb2xpY3lWaW9sYXRpb25FdmVudD47XHJcblx0c2Vla2VkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2Vla2luZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlbGVjdD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c3RhbGxlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1Ym1pdD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHN1c3BlbmQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0aW1ldXBkYXRlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG9nZ2xlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dG91Y2hjYW5jZWw/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW5kPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVudGVyPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGxlYXZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaG1vdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25jYW5jZWw/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9ucnVuPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25zdGFydD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR2b2x1bWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3YWl0aW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2hlZWw/OiBFdmVudFByb3BUeXBlPFdoZWVsRXZlbnQ+O1xyXG5cclxuXHQvLyBFbGVtZW50J3MgZXZlbnRzXHJcblx0ZnVsbHNjcmVlbmNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGZ1bGxzY3JlZW5lcnJvcj86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cclxuXHQvLyBEb2N1bWVudCdzIGFuZCBFbGVtZW50J3MgZXZlbnRzXHJcblx0Y29weT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdGN1dD86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG5cdHBhc3RlPzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEpTWCBuYW1lc3BhY2UgZGVmaW5pbmcgaG93IFR5cGVTY3JpcHQgcGVyZm9ybXMgdHlwZSBjaGVja3Mgb24gSlNYIGVsZW1lbnRzLGNvbXBvbmVudHNcclxuLy8gcHJvcGVydGllcyBhbmQgY2hpbGRyZW4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9IdG1sVHlwZXNcIjtcclxuaW1wb3J0ICogYXMgc3ZnIGZyb20gXCIuL1N2Z1R5cGVzXCI7XHJcblxyXG4vKipcclxuICogTmFtZXNwYWNlIGRlZmluaW5nIGludGVyZmFjZXMgdXNlZCBieSBUeXBlU2NyaXB0IHRvIHR5cGUtY2hlY2sgSlNYIGV4cHJlc3Npb25zLlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBKU1hcclxue1xyXG5cdC8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnQgZXh0ZW5kcyBJVk5vZGVbXSB7fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBJQ29tcG9uZW50IHt9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEF0dHJpYnV0ZXNQcm9wZXJ0eSB7IHByb3BzOiB7fSB9XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENoaWxkcmVuQXR0cmlidXRlIHsgY2hpbGRyZW46IGFueSB9XHJcblx0XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50c1xyXG5cdHtcclxuXHRcdC8vIEhUTUwgZWxlbWVudHNcclxuXHRcdGE6IGh0bWwuSUh0bWxBRWxlbWVudFByb3BzO1xyXG5cdFx0YWJicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFjcm9ueW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhZGRyZXNzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXBwbGV0OiBodG1sLklIdG1sQXBwbGV0RWxlbWVudFByb3BzO1xyXG5cdFx0YXJlYTogaHRtbC5JSHRtbEFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHRhcnRpY2xlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXNpZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhdWRpbzogaHRtbC5JSHRtbEF1ZGlvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlOiBodG1sLklIdG1sQmFzZUVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2Vmb250OiBodG1sLklIdG1sQmFzZWZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRiZGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiZG86IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRiaWc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRibG9ja3F1b3RlOiBodG1sLklIdG1sQmxvY2txdW90ZUVsZW1lbnRQcm9wcztcclxuXHRcdGJvZHk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRicjogaHRtbC5JSHRtbEJyRWxlbWVudFByb3BzO1xyXG5cdFx0YnV0dG9uOiBodG1sLklIdG1sQnV0dG9uRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGNhbnZhczogaHRtbC5JSHRtbENhbnZhc0VsZW1lbnRQcm9wcztcclxuXHRcdGNhcHRpb246IGh0bWwuSUh0bWxDYXB0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0Y2VudGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y2l0ZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvZGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2w6IGh0bWwuSUh0bWxDb2xFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xncm91cDogaHRtbC5JSHRtbENvbGdyb3VwRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRhdGE6IGh0bWwuSUh0bWxEYXRhRWxlbWVudFByb3BzO1xyXG5cdFx0ZGF0YWxpc3Q6IGh0bWwuSUh0bWxEYXRhTGlzdEVsZW1lbnRQcm9wcztcclxuXHRcdGRkOiBodG1sLklIdG1sRGRFbGVtZW50UHJvcHM7XHJcblx0XHRkZWw6IGh0bWwuSUh0bWxEZWxFbGVtZW50UHJvcHM7XHJcblx0XHRkZXRhaWxzOiBodG1sLklIdG1sRGV0YWlsc0VsZW1lbnRQcm9wcztcclxuXHRcdGRmbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGRpYWxvZzogaHRtbC5JSHRtbERpYWxvZ0VsZW1lbnRQcm9wcztcclxuXHRcdGRpcjogaHRtbC5JSHRtbERpckVsZW1lbnRQcm9wcztcclxuXHRcdGRpdjogaHRtbC5JSHRtbERpdkVsZW1lbnRQcm9wcztcclxuXHRcdGRsOiBodG1sLklIdG1sRGxFbGVtZW50UHJvcHM7XHJcblx0XHRkdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGVtYmVkOiBodG1sLklIdG1sRW1iZWRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmllbGRzZXQ6IGh0bWwuSUh0bWxGaWVsZHNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ2NhcHRpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmaWd1cmU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb250OiBodG1sLklIdG1sRm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGZvb3RlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvcm06IGh0bWwuSUh0bWxGb3JtRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWU6IGh0bWwuSUh0bWxGcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lc2V0OiBodG1sLklIdG1sRnJhbWVzZXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aDE6IGh0bWwuSUh0bWxIMUVsZW1lbnRQcm9wcztcclxuXHRcdGgyOiBodG1sLklIdG1sSDJFbGVtZW50UHJvcHM7XHJcblx0XHRoMzogaHRtbC5JSHRtbEgzRWxlbWVudFByb3BzO1xyXG5cdFx0aDQ6IGh0bWwuSUh0bWxINEVsZW1lbnRQcm9wcztcclxuXHRcdGg1OiBodG1sLklIdG1sSDVFbGVtZW50UHJvcHM7XHJcblx0XHRoNjogaHRtbC5JSHRtbEg2RWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZDogaHRtbC5JSHRtbEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRoZ3JvdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRocjogaHRtbC5JSHRtbEhyRWxlbWVudFByb3BzO1xyXG5cdFx0aHRtbDogaHRtbC5JSHRtbEh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGlmcmFtZTogaHRtbC5JSHRtbElmcmFtZUVsZW1lbnRQcm9wcztcclxuXHRcdGltZzogaHRtbC5JSHRtbEltZ0VsZW1lbnRQcm9wcztcclxuXHRcdGlucHV0OiBodG1sLklIdG1sSW5wdXRFbGVtZW50UHJvcHM7XHJcblx0XHRpbnM6IGh0bWwuSUh0bWxJbnNFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0a2JkOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0a2V5Z2VuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxhYmVsOiBodG1sLklIdG1sTGFiZWxFbGVtZW50UHJvcHM7XHJcblx0XHRsZWdlbmQ6IGh0bWwuSUh0bWxMZWdlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRsaTogaHRtbC5JSHRtbExpRWxlbWVudFByb3BzO1xyXG5cdFx0bGluazogaHRtbC5JSHRtbExpbmtFbGVtZW50UHJvcHM7XHJcblx0XHRsaXN0aW5nOiBodG1sLklIdG1sTGlzdGluZ0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYWluOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWFwOiBodG1sLklIdG1sTWFwRWxlbWVudFByb3BzO1xyXG5cdFx0bWFyazogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnU6IGh0bWwuSUh0bWxNZW51RWxlbWVudFByb3BzO1xyXG5cdFx0bWVudWl0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhOiBodG1sLklIdG1sTWV0YUVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGVyOiBodG1sLklIdG1sTWV0ZXJFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bmF2OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9icjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vZnJhbWVzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9zY3JpcHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0b2JqZWN0OiBodG1sLklIdG1sT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0b2w6IGh0bWwuSUh0bWxPbEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGdyb3VwOiBodG1sLklIdG1sT3B0Z3JvdXBFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRpb246IGh0bWwuSUh0bWxPcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRvdXRwdXQ6IGh0bWwuSUh0bWxPdXRwdXRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cDogaHRtbC5JSHRtbFBFbGVtZW50UHJvcHM7XHJcblx0XHRwYXJhbTogaHRtbC5JSHRtbFBhcmFtRWxlbWVudFByb3BzO1xyXG5cdFx0cGljdHVyZTogaHRtbC5JSHRtbFBpY3R1cmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcmU6IGh0bWwuSUh0bWxQcmVFbGVtZW50UHJvcHM7XHJcblx0XHRwcm9ncmVzczogaHRtbC5JSHRtbFByb2dyZXNzRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHE6IGh0bWwuSUh0bWxRRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0YzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ1Ynk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0czogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNhbXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzY3JpcHQ6IGh0bWwuSUh0bWxTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZWN0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2VsZWN0OiBodG1sLklIdG1sU2VsZWN0RWxlbWVudFByb3BzO1xyXG5cdFx0c2xvdDogaHRtbC5JSHRtbFNsb3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbWFsbDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNvdXJjZTogaHRtbC5JSHRtbFNvdXJjZUVsZW1lbnRQcm9wcztcclxuXHRcdHNwYW46IGh0bWwuSUh0bWxTcGFuRWxlbWVudFByb3BzO1xyXG5cdFx0c3RyaWtlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3Ryb25nOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3R5bGU6IGh0bWwuSUh0bWxTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN1YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1bW1hcnk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdXA6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGFibGU6IGh0bWwuSUh0bWxUYWJsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRib2R5OiBodG1sLklIdG1sVGJvZHlFbGVtZW50UHJvcHM7XHJcblx0XHR0ZDogaHRtbC5JSHRtbFRkRWxlbWVudFByb3BzO1xyXG5cdFx0dGVtcGxhdGU6IGh0bWwuSUh0bWxUZW1wbGF0ZUVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRhcmVhOiBodG1sLklIdG1sVGV4dGFyZWFFbGVtZW50UHJvcHM7XHJcblx0XHR0Zm9vdDogaHRtbC5JSHRtbFRmb290RWxlbWVudFByb3BzO1xyXG5cdFx0dGg6IGh0bWwuSUh0bWxUaEVsZW1lbnRQcm9wcztcclxuXHRcdHRoZWFkOiBodG1sLklIdG1sVEhlYWRFbGVtZW50UHJvcHM7XHJcblx0XHR0aW1lOiBodG1sLklIdG1sVGltZUVsZW1lbnRQcm9wcztcclxuXHRcdHRpdGxlOiBodG1sLklIdG1sVGl0bGVFbGVtZW50UHJvcHM7XHJcblx0XHR0cjogaHRtbC5JSHRtbFRyRWxlbWVudFByb3BzO1xyXG5cdFx0dHJhY2s6IGh0bWwuSUh0bWxUcmFja0VsZW1lbnRQcm9wcztcclxuXHRcdHR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR1bDogaHRtbC5JSHRtbFVsRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZhcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHZpZGVvOiBodG1sLklIdG1sVmlkZW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0d2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHhtcDogaHRtbC5JSHRtbFhtcEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvLyBTVkcgZWxlbWVudHNcclxuXHRcdHN2Zzogc3ZnLklTdmdTdmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnQTogc3ZnLklTdmdBRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblx0XHRhbmltYXRlTW90aW9uOiBzdmcuSVN2Z0FuaW1hdGVNb3Rpb25FbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlVGFybnNmb3JtOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHJcblx0XHRjaXJjbGU6IHN2Zy5JU3ZnQ2lyY2xlRWxlbWVudFByb3BzO1xyXG5cdFx0Y2xpcFBhdGg6IHN2Zy5JU3ZnQ2xpcFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRjb2xvclByb2ZpbGU6IHN2Zy5JU3ZnQ29sb3JQcm9maWxlUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkZWZzOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRlc2M6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlzY2FyZDogc3ZnLklTdmdEaXNjYXJkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVsbGlwc2U6IHN2Zy5JU3ZnRWxsaXBzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmZUJsZW5kOiBzdmcuSVN2Z0ZlQmxlbmRFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbG9yTWF0cml4OiBzdmcuSVN2Z0ZlQ29sb3JNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBzdmcuSVN2Z0ZlQ29tcG9uZW50VHJhbnNmZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbXBvc2l0ZTogc3ZnLklTdmdGZUNvbXBvc2l0ZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IHN2Zy5JU3ZnRmVDb252b2x2ZU1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlmZnVzZUxpZ2h0aW5nOiBzdmcuSVN2Z0ZlRGlmZnVzZUxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IHN2Zy5JU3ZnRmVEaXNwbGFjZW1lbnRNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3RhbnRMaWdodDogc3ZnLklTdmdGZURpc3RhbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRHJvcFNoYWRvdzogc3ZnLklTdmdGZURyb3BTaGFkb3dFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZsb29kOiBzdmcuSVN2Z0ZlRmxvb2RFbGVtZW50UHJvcHM7XHJcblx0XHRmZUZ1bmNBOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNCOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNHOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUZ1bmNSOiBzdmcuSVN2Z1RyYW5zZmVyRnVuY3Rpb25zUHJvcHM7XHJcblx0XHRmZUdhdXNzaWFuQmx1cjogc3ZnLklTdmdGZUdhdXNzaWFuQmx1ckVsZW1lbnRQcm9wcztcclxuXHRcdGZlSW1hZ2U6IHN2Zy5JU3ZnRmVJbWFnZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTWVyZ2U6IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHMgfCBzdmcuSVN2Z0ZpbHRlclByaW1pdGl2ZVByb3BzO1xyXG5cdFx0ZmVNZXJnZU5vZGU6IHN2Zy5JU3ZnRmVNZXJnZU5vZGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1vcnBob2xvZ3k6IHN2Zy5JU3ZnRmVNb3JwaG9sb2d5RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVPZmZzZXQ6IHN2Zy5JU3ZnRmVPZmZzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVBvaW50TGlnaHQ6IHN2Zy5JU3ZnRmVQb2ludExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcGVjdWxhckxpZ2h0aW5nOiBzdmcuSVN2Z0ZlU3BlY3VsYXJMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BvdExpZ2h0OiBzdmcuSVN2Z0ZlU3BvdExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUaWxlOiBzdmcuSVN2Z0ZlVGlsZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlVHVyYnVsZW5jZTogc3ZnLklTdmdGZVR1cmJ1bGVuY2VFbGVtZW50UHJvcHM7XHJcblx0XHRmaWx0ZXI6IHN2Zy5JU3ZnRmlsdGVyRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9yZWlnbk9iamVjdDogc3ZnLklTdmdGb3JlaWduT2JqZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGc6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cclxuXHRcdGhhdGNoOiBzdmcuSVN2Z0hhdGNoRWxlbWVudFByb3BzO1xyXG5cdFx0aGF0Y2hwYXRoOiBzdmcuSVN2Z0hhdGNocGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpbWFnZTogc3ZnLklTdmdJbWFnZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsaW5lOiBzdmcuSVN2Z0xpbmVFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5lYXJHcmFkaWVudDogc3ZnLklTdmdMaW5lYXJHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRtYXJrZXI6IHN2Zy5JU3ZnTWFya2VyRWxlbWVudFByb3BzO1xyXG5cdFx0bWFzazogc3ZnLklTdmdNYXNrRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YWRhdGE6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0bXBhdGg6IHN2Zy5JU3ZnTVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cGF0aDogc3ZnLklTdmdQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0cGF0dGVybjogc3ZnLklTdmdQYXR0ZXJuRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWdvbjogc3ZnLklTdmdQb2x5Z29uRWxlbWVudFByb3BzO1xyXG5cdFx0cG9seWxpbmU6IHN2Zy5JU3ZnUG9seWxpbmVFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmFkaWFsR3JhZGllbnQ6IHN2Zy5JU3ZnUmFkaWFsR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblx0XHRyZWN0OiBzdmcuSVN2Z1JlY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0c3ZnU2NyaXB0OiBzdmcuSVN2Z1NjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNldDogc3ZnLklTdmdTZXRFbGVtZW50UHJvcHM7XHJcblx0XHRzb2xpZGNvbG9yOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHN0b3A6IHN2Zy5JU3ZnU3RvcEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1N0eWxlOiBzdmcuSVN2Z1N0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3dpdGNoOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHRcdHN5bWJvbDogc3ZnLklTdmdTeW1ib2xFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dGV4dDogc3ZnLklTdmdUZXh0RWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFBhdGg6IHN2Zy5JU3ZnVGV4dFBhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdUaXRsZTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0U3Bhbjogc3ZnLklTdmdUZXh0U3BhbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1c2U6IHN2Zy5JU3ZnVXNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHZpZXc6IHN2Zy5JU3ZnVmlld0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHQvL1tlbGVtTmFtZTogc3RyaW5nXTogYW55XHJcblx0fVxyXG5cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBpbnRyaW5zaWMgZWxlbWVudHMgYW5kIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0F0dHJpYnV0ZXMgZXh0ZW5kcyBJQ29tbW9uUHJvcHMge31cclxuXHJcblx0Ly8gUHJvcGVydGllcyBpbiB0aGlzIGludGVyZmFjZSBhcHBseSB0byBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQ2xhc3NBdHRyaWJ1dGVzPFQ+IGV4dGVuZHMgSUNvbW1vblByb3BzXHJcblx0e1xyXG5cdFx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbW91bnRlZC4gVGhlXHJcblx0XHQvLyByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0cmVmPzogUmVmUHJvcFR5cGU8VD47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBKU1ggRmFjdG9yeSBmdW5jdGlvbi4gSW4gb3JkZXIgZm9yIHRoaXMgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBieSB0aGUgVHlwZVNjcmlwdCBjb21waWxlciwgdGhlXHJcbiAqIHRzY29uZmlnLmpzb24gbXVzdCBoYXZlIHRoZSBmb2xsb3dpbmcgb3B0aW9uOlxyXG4gKlxyXG4gKiBgYGBqc29uXHJcbiAqIFwiY29tcGlsZXJPcHRpb25zXCI6XHJcbiAqIHtcclxuICogICAgIFwianN4XCI6IFwicmVhY3RcIixcclxuICogICAgIFwianN4RmFjdG9yeVwiOiBcImpzeFwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWcsIHByb3BzLCBjaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VydmljZURlZmluaXRpb25zIGludGVyZmFjZSBzZXJ2ZXMgYXMgYSBtYXBwaW5nIGJldHdlZW4gc2VydmljZSBuYW1lcyBhbmQgc2VydmljZSB0eXBlcy5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgaW50ZW5kZWQgdG8gYmUgYXVnbWVudGVkIGJ5IG1vZHVsZXMgdGhhdCBkZWZpbmUgYW5kL29yIHVzZSBzcGVjaWZpYyBzZXJ2aWNlcy5cclxuICogVGhpcyBhbGxvd3MgcGVyZm9ybWluZyBzZXJ2aWNlIHB1Ymxpc2hpbmcgYW5kIHN1YnNjcmliaW5nIGluIHR5cGUtc2FmZSBtYW5uZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxue1xyXG5cdC8qKiBCdWlsdC1pbiBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiAqL1xyXG5cdFwiU3RkRXJyb3JIYW5kbGluZ1wiOiBJRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJ1aWx0LWluIHNlcnZpY2UgZm9yIGxhenkgcGVvcGxlIC0gY2FuIGJlIHVzZWQgZm9yIHF1aWNrIHByb3RvdHlwZXMgd2l0aG91dCB0aGUgbmVlZCB0b1xyXG5cdCAqIGF1Z21lbnQgdGhlIGludGVyZmFjZS5cclxuXHQgKi9cclxuXHRcImFueVwiOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzZXJ2aWNlIHRoYXQgY2FuIGJlIGludm9rZWQgd2hlbiBhbiBlcnJvciAtXHJcbiAqIHVzdWFsbHkgYW4gZXhjZXB0aW9uIC0gaXMgZW5jb3VudGVyZWQgYnV0IGNhbm5vdCBiZSBoYW5kbGVkIGxvY2FsbHkuIEEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50c1xyXG4gKiB0aGlzIHNlcnZpY2Ugd291bGQgbm9ybWFsbHkgcmVtZW1iZXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIHVwZGF0ZSBpdHNlbGYsc28gdGhhdCBpbiBpdHNcclxuICogcmVuZGVyIG1ldGhvZCBpdCB3aWxsIHByZXNlbnQgdGhlIGVycm9yIHRvIHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGlzIGltcGxlbWVudGVkIGJ5IHRoZSBSb290IFZpcnR1YWwgTm9kZSBhcyBhIGxhc3QgcmVzb3J0IGZvciBlcnJvclxyXG4gKiBoYW5kbGluZy4gVGhlIFJvb3QgVk4gd2lsbCBkaXNwbGF5IGEgc2ltcGxlIFVJIHNob3dpbmcgdGhlIGVycm9yIGFuZCB3aWxsIGFsbG93IHRoZSB1c2VyIHRvXHJcbiAqIHJlc3RhcnQgLSBpbiB0aGUgaG9wZSB0aGF0IHRoZSBlcnJvciB3aWxsIG5vdCByZXBlYXQgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHVwZGF0ZSBjeWNsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNjaGVkdWxlZEZ1bmNUeXBlID0gKCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZXZlbnQgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiByZWZlcmVuY2UgdmFsdWUgY2hhbmdlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZkZ1bmM8VCA9IGFueT4gPSAobmV3UmVmOiBUKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vLyBTeW1ib2wgdXNlZCB0byBrZWVwIHRoZSByZWZlcmVuY2VkIG9iamVjdCBpbnNpZGUgdGhlIFJlZiBjbGFzcyBpbnN0YW5jZS5cclxubGV0IHN5bVJlZiA9IFN5bWJvbChcInN5bVJlZlwiKTtcclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgY2xhc3MgdG8gdXNlIHdoZW5ldmVyIGEgcmVmZXJlbmNlIHRvIGFuIG9iamVjdCBpcyBuZWVkZWQgLSBmb3IgZXhhbXBsZSwgd2l0aCBKU1ggYHJlZmBcclxuICogYXR0cmlidXRlcyBhbmQgc2VydmljZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmPFQgPSBhbnk+XHJcbntcclxuXHQvKiogRXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSByZWZlcmVuY2VkIHZhbHVlIGNoYW5nZXMgKi9cclxuXHRwcml2YXRlIGNoYW5nZWRFdmVudCA9IG5ldyBFdmVudFNsb3Q8UmVmRnVuYzxUPj4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGxpc3RlbmVyPzogUmVmRnVuYzxUPiwgaW5pdGlhbFJlZmVyZW5lPzogVClcclxuXHR7XHJcblx0XHRpZiAobGlzdGVuZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblxyXG5cdFx0dGhpc1tzeW1SZWZdID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIGNoYW5nZXMuICovXHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZW1vdmVzIGEgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgd2l0aCBhZGRMaXN0ZW5lci4gKi9cclxuXHRwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBnZXQgcigpOiBUIHsgcmV0dXJuIHRoaXNbc3ltUmVmXTsgfVxyXG5cclxuXHQvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIHNldCByKCBuZXdSZWY6IFQpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXNbc3ltUmVmXSAhPT0gbmV3UmVmKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzW3N5bVJlZl0gPSBuZXdSZWY7XHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmZpcmUoIG5ld1JlZik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJlZmVyZW5jZSBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhlIG5lZWQgdG8gbWFudWFsbHkgY3JlYXRlIFJlZjw+XHJcbiAqIGluc3RhbmNlcy4gVGhpcyBhbGxvd3MgZm9yIHRoZSBmb2xsb3dpbmcgY29kZSBwYXR0ZXJuOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqIHtcclxuICogICAgIEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gKiAgICAgcmVuZGVyKCkgeyByZXR1cm4gPGRpdiByZWY9e215RGl2fT5IZWxsbzwvZGl2PjsgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBteURpdiBwcm9wZXJ0eSB3aWxsIGJlIHNldCB0byBwb2ludCB0byB0aGUgSFRNTCBkaXYgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgaGFuZGxlciA9IG5ldyBSZWZQcm94eUhhbmRsZXIoKTtcclxuXHRoYW5kbGVyLnByb3h5ID0gbmV3IFByb3h5KCB7fSwgaGFuZGxlcik7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHNldCggdjogYW55KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLm9iaiA9IHY7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLnByb3h5O1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZWZQcm94eUhhbmRsZXIgaXMgYSBwcm94eSBoYW5kbGVyIGZvciB0aGUgb2JqZWN0cyBjcmVhdGVkIHdoZW4gcmVmZXJlbmNlIGlzIGRlZmluZWQgdXNpbmdcclxuICogdGhlIEByZWYgZGVjb3JhdG9yLiBPbmx5IHRoZSBcInJcIiBwcm9wZXJ0eSBoYXMgc3BlY2lhbCBoYW5kbGluZyAoYmVjYXVzZSBpdCBpcyB1c2VkIGJ5IHRoZVxyXG4gKiBzZXRSZWYgZnVuY3Rpb24pOyBldmVyeXRoaW5nIGVsc2UgaXMgcmVmbGVjdGVkIGZyb20gdGhlIHJlbWVtYmVyZWQgcmVmZXJlbmNlZCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBSZWZQcm94eUhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICAvLyBLZWVwcyB0aGUgcHJveHkgb2JqZWN0IGZvciB3aGljaCB0aGlzIGlzIHRoZSBoYW5kbGVyXHJcbiAgICBwdWJsaWMgcHJveHk6IGFueTtcclxuXHJcbiAgICAvLyBLZWVwcyB0aGUgcmVmZXJlbmNlZCBvYmplY3Qgb3IgdW5kZWZpbmVkXHJcbiAgICBwdWJsaWMgb2JqOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgPT09IFwiclwiID8gdGhpcy5vYmogOiB0aGlzLm9ialtwcm9wXTtcclxuICAgICAgICAvLyBSZWZsZWN0LmdldCBkb2Vzbid0IHdvcmsgYnV0IHJlZ3VsYXIgcHJvcGVydHkgZ2V0IGRvZXNcclxuICAgICAgICAvLyByZXR1cm4gcHJvcCA9PT0gXCJyXCIgPyB0aGlzLm9iaiA6IFJlZmxlY3QuZ2V0KCB0aGlzLm9iaiwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcCA9PT0gXCJyXCIpXHJcbiAgICAgICAgICAgIHRoaXMub2JqID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9ialtwcm9wXSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyBSZWZsZWN0LnNldCBkb2Vzbid0IHdvcmsgYnV0IHJlZ3VsYXIgcHJvcGVydHkgc2V0IGRvZXNcclxuICAgICAgICAvLyByZXR1cm4gUmVmbGVjdC5zZXQoIHRoaXMub2JqLCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCB0aGlzLm9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmluZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIGF0dHJzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMub2JqLCBwcm9wLCBhdHRycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmhhcyggdGhpcy5vYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcm90b3R5cGVPZiggdGFyZ2V0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFeHRlbnNpYmxlKCB0YXJnZXQ6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRoaXMub2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bWVyYXRlKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSggUmVmbGVjdC5lbnVtZXJhdGUoIHRoaXMuZW51bWVyYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG93bktleXMoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRoaXMub2JqKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gVCB8IFJlZjxUPiB8IFJlZkZ1bmM8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIHRoYXQgdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mXHJcbiAqIHJlZmVyZW5jZXMuIFRoZSBvcHRpb25hbCBgb25seUlmYCBwYXJhbWV0ZXIgbWF5IHNwZWNpZnkgYSB2YWx1ZSBzbyB0aGF0IG9ubHkgaWYgdGhlIHJlZmVyZW5jZVxyXG4gKiBjdXJyZW50bHkgaGFzIHRoZSBzYW1lIHZhbHVlIGl0IHdpbGwgYmUgcmVwbGFjZWQuIFRoaXMgbWlnaHQgYmUgbmVlZGVkIHRvIG5vdCBjbGVhciBhXHJcbiAqIHJlZmVyZW5jZSBpZiBpdCBhbHJlYWR5IHBvaW50cyB0byBhIGRpZmZlcmVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSByZWYgW1tSZWZdXSBvYmplY3QgdG8gd2hpY2ggdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldFxyXG4gKiBAcGFyYW0gdmFsIFJlZmVyZW5jZSB2YWx1ZSB0byBzZXQgdG8gdGhlIFJlZiBvYmplY3RcclxuICogQHBhcmFtIG9ubHlJZiBBbiBvcHRpb25hbCB2YWx1ZSB0byB3aGljaCB0byBjb21wYXJlIHRoZSBjdXJyZW50IChvbGQpIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UuXHJcbiAqIFRoZSBuZXcgdmFsdWUgd2lsbCBiZSBzZXQgb25seSBpZiB0aGUgb2xkIHZhbHVlIGVxdWFscyB0aGUgYG9ubHlJZmAgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmPFQ+KCByZWY6IFJlZlByb3BUeXBlPFQ+LCB2YWw6IFQsIG9ubHlJZj86IFQpOiB2b2lkXHJcbntcclxuXHRpZiAodHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRpZiAob25seUlmID09PSB1bmRlZmluZWQgfHwgKHJlZiBhcyBSZWYpLnIgPT09IG9ubHlJZilcclxuXHRcdFx0KHJlZiBhcyBSZWYpLnIgPSB2YWw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdChyZWYgYXMgUmVmRnVuYykodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogRGVmaW5lcyB0eXBlcyBvZiB2aXJ0dWFsIERPTSBub2RlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBWTlR5cGVcclxue1xyXG5cdC8qKiBUb3AtbGV2ZWwgbm9kZSAqL1xyXG5cdFJvb3QsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGNyZWF0ZWQgdmlhIG5ldyAqL1xyXG5cdEluZGVwZW5kZW50Q29tcCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgbGFpZCBvdXQgdXNpbmcgSlNYICovXHJcblx0TWFuYWdlZENvbXAsXHJcblxyXG5cdC8qKiBTdGF0ZWxlc3MgY29tcG9uZW50IChzaW1wbGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGFjY2VwdGluZyBwcm9wcykgKi9cclxuXHRGdW5jQ29tcCxcclxuXHJcblx0LyoqIERPTSBlbGVtZW50IChIVE1MIG9yIFNWRykgbGFpZCBvdXQgdXNpbmcgSlNYLiAqL1xyXG5cdEVsbSxcclxuXHJcblx0LyoqIFRleHQgbm9kZSAqL1xyXG5cdFRleHQsXHJcblxyXG5cdC8qKiBXcmFwcGVyIGFyb3VuZCBhIGZ1bmN0aW9uL21ldGhvZCB0aGF0IGNhbiBiZSB1cGRhdGVkIGluZGVwZW5kZW50bHkuICovXHJcblx0RnVuY1Byb3h5LFxyXG5cclxuXHQvKiogTm9kZSB0aGF0IHdhaXRzIGZvciBhIHByb21pc2UgdG8gYmUgc2V0dGxlZCBhbmQgdGhlbiBkaXNwbGF5cyB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgY29udGVudC4gKi9cclxuXHRQcm9taXNlUHJveHksXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVk5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUuIFRocm91Z2ggdGhpcyBpbnRlcmZhY2UsIGNhbGxlcnMgY2FuIHBlcmZvcm1cclxuICogbW9zdCBjb21tb24gYWN0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgb24gZXZlcnkgdHlwZSBvZiB2aXJ0dWFsIG5vZGUuIEVhY2ggdHlwZSBvZiB2aXJ0dWFsIG5vZGVcclxuICogYWxzbyBpbXBsZW1lbnRzIGEgbW9yZSBzcGVjaWZpYyBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgc3BlY2lmaWMgY2FwYWJpbGl0aWVzIG9mIHRoZSBub2RlXHJcbiAqIHR5cGUgYXJlIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyBub2RlIHR5cGUuICovXHJcblx0cmVhZG9ubHkgdHlwZTogVk5UeXBlO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cmVhZG9ubHkgcGFyZW50PzogSVZOb2RlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cmVhZG9ubHkgY3JlYXRvcj86IElDb21wb25lbnQ7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBuZXh0PzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy4gKi9cclxuXHRyZWFkb25seSBwcmV2PzogSVZOb2RlO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM/OiBJVk5vZGVbXTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBub2RlJ3MgZGlzcGxheSBuYW1lLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvciByZXBvcnRpbmcuIFRoZSBuYW1lXHJcblx0ICogY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLCBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCJcclxuXHQgKiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHRyZWFkb25seSB1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHdoZW4gaXQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRyZXF1ZXN0VXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0c2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gb2JqZWN0IG9mIGFueSB0eXBlIGFzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIGZvclxyXG5cdCAqIGNvbnN1bXB0aW9uIGJ5IGRlc2NlbmRhbnQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRwdWJsaXNoU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBzZXJ2aWNlOiBJU2VydmljZURlZmluaXRpb25zW0tdKTogdm9pZDtcclxuXHJcblx0LyoqIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gKi9cclxuXHR1bnB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBTdWJzY3JpYmVzIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdCAqIGJ5IHRoaXMgb3Igb25lIG9mIHRoZSBhbmNlc3RvciBjb21wb25lbnRzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7XHJcblx0ICogb3RoZXJ3aXNlLCB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluXHJcblx0ICogdW5kZWZpbmVkLiBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IHRoaXMgb3IgYSBjbG9zZXN0XHJcblx0ICogYW5jZXN0b3IgY29tcG9uZW50IGlzIGNoYW5nZWQsdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0ICogVGhlIHVzZVNlbGYgb3B0aW9uYWwgcGFyYW1ldGVyIGRldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGNhbiBzdWJzY3JpYmUgdG8gdGhlXHJcblx0ICogc2VydmljZSBwdWJsaXNoZWQgYnkgaXRzZWxmLiBUaGUgZGVmYXVsdCBpcyBmYWxzZS5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICogQHBhcmFtIHJlZiBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0c3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCByZWY6IFJlZlByb3BUeXBlPElTZXJ2aWNlRGVmaW5pdGlvbnNbS10+LFxyXG5cdFx0XHRcdFx0ZGVmYXVsdFNlcnZpY2U/OiBJU2VydmljZURlZmluaXRpb25zW0tdLCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmVcclxuXHQgKiB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqL1xyXG5cdHVuc3Vic2NyaWJlU2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0ICogY29tcG9uZW50IG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdCAqIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gZGVmYXVsdFNlcnZpY2UgXHJcblx0ICogQHBhcmFtIHVzZVNlbGYgXHJcblx0ICovXHJcblx0Z2V0U2VydmljZTxLIGV4dGVuZHMga2V5b2YgSVNlcnZpY2VEZWZpbml0aW9ucz4oIGlkOiBLLCBkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sXHJcblx0XHRcdFx0XHR1c2VTZWxmPzogYm9vbGVhbik6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS107XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvXHJcblx0ICogaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIENvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBVc2UgdGhpcyBtZXRob2QgYmVmb3JlIHBhc3NpbmcgY2FsbGJhY2tzIHRvIGRvY3VtZW50IGFuZCB3aW5kb3cgZXZlbnQgaGFuZGxlcnMgYXMgd2VsbCBhc1xyXG5cdCAqIG5vbi1ET00gb2JqZWN0cyB0aGF0IHVzZSBjYWxsYmFja3MsIGUuZy4gcHJvbWlzZXMuIEZvciBleGFtcGxlOlxyXG5cdCAqIFxyXG5cdCAqIGBgYHR5cGVzY3JpcHRcclxuXHQgKlx0Y2xhc3MgUmVzaXplTW9uaXRvclxyXG5cdCAqXHR7XHJcblx0ICpcdFx0cHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZShlOiBFdmVudCk6IHZvaWQge307XHJcblx0ICpcclxuXHQgKiBcdFx0d3JhcHBlcjogKGU6IEV2ZW50KTogdm9pZDtcclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0YXJ0UmVzaXplTW9uaXRvcmluZyggdm46IElWTm9kZSlcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB2bi53cmFwQ2FsbGJhY2soIHRoaXMub25XaW5kb3dSZXNpemUsIHRoaXMpO1xyXG5cdCAqXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0fVxyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RvcFJlc2l6ZU1vbml0b3JpbmcoKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xyXG5cdCAqXHRcdH1cclxuXHQgKlx0fVxyXG5cdCAqIGBgYFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkXHJcblx0ICogQHJldHVybnMgRnVuY3Rpb24gdGhhdCBoYXMgdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBhbmQgdGhhdCBzaG91bGQgYmUgdXNlZFxyXG5cdCAqICAgICBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGluc3RhbmNlLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXA6IElDb21wb25lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWFuYWdlZENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWFuYWdlZENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBjbGFzcy4gKi9cclxuXHRyZWFkb25seSBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElJbmRlcGVuZGVudENvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBjb21wb25lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICBUaGUgSUVsbVZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIERPTSBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxtVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBuYW1lLiAqL1xyXG5cdHJlYWRvbmx5IGVsbU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIEdldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgKGFzIG9wcG9zZWQgdG8gSFRNTCkuICovXHJcblx0cmVhZG9ubHkgaXNTdmc6IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBET00gZWxlbWVudCBvYmplY3QuICovXHJcblx0cmVhZG9ubHkgZWxtOiBFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRleHRWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSB0ZXh0IERPTSBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogVGV4dCBvZiB0aGUgbm9kZS4gKi9cclxuXHR0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUZXh0IERPTSBub2RlLiAqL1xyXG5cdHRleHROb2RlOiBUZXh0O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDQ3VzdG9tIGF0dHJpYnV0ZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2xhc3Mgb2YgaGFuZGxlcnMgb2YgY3VzdG9tIGF0dHJpYnV0ZXNcclxuICogdGhhdCBjYW4gYmUgYXBwbGllZCB0byBpbnRyaW5zaWMgKEhUTUwgb3IgU1ZHKSBlbGVtZW50cy4gVGhlIHJlcXVpcmVtZW50cyBvbiBzdWNoIGNsYXNzZXMgYXJlOlxyXG4gKiAxLiBJbXBsZW1lbnQgYSBjb25zdHJ1Y3RvciBhY2NlcHRpbmcgSUVsbVZOLCBhdHRyaWJ1dGUgdmFsdWUgYW5kIGF0dHJpYnV0ZSBuYW1lICh0aGlzIGFsbG93c1xyXG4gKiAgIHRoZSBzYW1lIGhhbmRsZXIgdG8gc2VydmUgZGlmZmVyZW50IGF0dHJpYnV0ZXMpLlxyXG4gKiAyLiBJbXBsZW1lbnQgdGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciB0aGF0IHdpbGwgYWN0IG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBwcm92aWRlc1xyXG5cdCAqIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUuIEF0dHJpYnV0ZSBuYW1lIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB0aGUgaGFuZGxlclxyXG5cdCAqIHN1cHBvcnRzIGRpZmZlcmVudCBhdHRyaWJ1dGVzLiBCeSB0aGUgdGltZSB0aGlzIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIERPTSBlbGVtZW50IGhhZFxyXG5cdCAqIGFscmVhZHkgYmVlbiBjcmVhdGVkIGFuZCBzdGFuZGFyZCBhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMgaGFkIGJlZW4gYXBwbGllZC5cclxuXHQgKiBAcGFyYW0gZWxtVk4gVmlydHVhbCBub2RlIGZvciB0aGlzIGVsZW1lbnQuIFRoZSBoYW5kbGVyIGNhbiByZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgZnJvbVxyXG5cdCAqICAgdGhpcyBpbnRlcmZhY2UgYW5kIGFsc28gdXNlIG90aGVyIG1ldGhvZHMgKGUuZy4gc3Vic2NyaWJlIHRvIHNlcnZpY2VzKS5cclxuXHQgKiBAcGFyYW0gYXR0clZhbCBJbml0aWFsIHZhbHVlIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcblx0ICogQHBhcmFtIGF0dHJOYW1lIE5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRuZXcoIGVsbVZOOiBJRWxtVk4sIGF0dHJWYWw6IFQsIGF0dHJOYW1lPzogc3RyaW5nKTogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBhYmlsaXR5IHRvIGhhbmRsZSBjdXN0b20gcHJvcGVydGllcyB0aGF0IGNhblxyXG4gKiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyBhbiBleGlzdGluZyBjdXN0b20gYXR0cmlidXRlIHdpdGggdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcFZhbCBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiBjaGFuZ2VzIHdlcmUgbWFkZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZSggbmV3UHJvcFZhbDogVCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlcm1pbmF0ZXMgdGhlIGZ1bmN0aW9uaW5nIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgZWl0aGVyXHJcblx0ICogd2hlbiBhIG5ldyByZW5kZXJpbmcgb2YgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIHRoZSBhdHRyaWJ1dGUgYW55bW9yZSBvciBpZiB0aGUgZWxlbWVudFxyXG5cdCAqIGlzIHJlbW92ZWQuIEFsdGhvdWdoIHRoaXMgbWV0aG9kIGlzIG9wdGlvbmFsLCBtb3N0IGhhbmRsZXJzIHdpbGwgbmVlZCB0byBpbXBsZW1lbnQgaXQgdG9cclxuXHQgKiBwcm9wZXJseSBjbGVhbnVwIGFueSByZXNvdXJjZXMgKGUuZy4gZXZlbnQgaGFuZGxlcnMpIHRvIGF2b2lkIGxlYWtzLlxyXG5cdCAqIEBwYXJhbSBpc1JlbW92YWwgVHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZyByZW1vdmVkIGFuZCBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyBiZWluZ1xyXG5cdCAqICAgdXBkYXRlZCBhbmQgdGhlIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgcHJvdmlkZWQuIElmIHRoZSBoYW5kbGVyIGFkZHMgYW55IGV2ZW50XHJcblx0ICogICBsaXN0ZW5lcnMgdG8gdGhlIGVsZW1lbnQsIHRoZW4gaXQgaGFzIHRvIHJlbW92ZSB0aGVtIG9uIHVwZGF0ZSBidXQgZG9lbid0IGhhdmUgdG8gZG8gaXRcclxuXHQgKiAgIG9uIGVsZW1lbnQgcmVtb3ZhbC5cclxuXHQgKi9cclxuXHR0ZXJtaW5hdGU/KCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIGNsYXNzIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIGZhY3RvcnkgY3VzdG9tIGF0dHJpYnV0ZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlPFQ+KCBhdHRyTmFtZTogc3RyaW5nLCBoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD4pOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGF0dHJOYW1lLCB7IHR5cGU6IFByb3BUeXBlLkN1c3RvbUF0dHIsIGhhbmRsZXJDbGFzcyB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gZXZlbnQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21FdmVudCggZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRFbG1BdHRyLnJlZ2lzdGVyUHJvcGVydHkoIGV2ZW50TmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzZSBjb21wb25lbnQgY2xhc3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0IHR5cGUgZGVmaW5lcyBwYXJhbWV0ZXJzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHVwZGF0ZU1lXHJcbiAqIG1ldGhvZCBpZiB0aGUgZ29hbCBpcyBub3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50IGJ1dCBvbmx5IG9uZSBvciBzZXZlcmFsIHJlbmRlcmluZ1xyXG4gKiBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb25lbnRVcGRhdGVSZXF1ZXN0ID0gRnVuY3Rpb24gfCB7IGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIGFyZ3M/OiBhbnkgfVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGlzIGNsYXNzIG11c3QgaW1wbGVtZW50IHRoZSByZW5kZXJcclxuICogbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiBpbXBsZW1lbnRzIElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIFRoaXMgaXMgbm9ybWFsbHkgdXNlZCBvbmx5IGJ5IG1hbmFnZWRcclxuXHQgKiBjb21wb25lbnRzIGFuZCBpcyB1c3VhbGx5IHVuZGVmaW5lZCBmb3IgaW5kZXBlbmRlbnQgY29wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZW1lbWJlcmVkIHZpcnR1YWwgbm9kZSBvYmplY3QgdGhyb3VnaCB3aGljaCB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzLiBUaGlzXHJcblx0ICogaXMgdW5kZWZpbmVkIGluIHRoZSBjb21wb25lbnQncyBjb3N0cnVjdG9yIGJ1dCB3aWxsIGJlIGRlZmluZWQgYmVmb3JlIHRoZSBjYWxsIHRvIHRoZVxyXG5cdCAqIChvcHRpb25hbCkgd2lsbE1vdW50IG1ldGhvZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdm46IElWTm9kZTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHB1YmxpYyBhYnN0cmFjdCByZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGNvbXBvbmVudCB0byByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQuIElmIG5vIGFyZ3VtZW50cyBhcmVcclxuXHQgKiBwcm92aWRlZCwgdGhlIGVudGlyZSBjb21wb25lbnQgaXMgcmVxdWVzdGVkIHRvIGJlIHVwZGF0ZWQuIElmIGFyZ3VtZW50IGFyZSBwcm92aWRlZCwgdGhleVxyXG5cdCAqIGluZGljYXRlIHdoYXQgcmVuZGVyaW5nIGZ1bmN0aW9ucyBzaG91bGQgYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gdXBkYXRlUmVxdWVzdHMgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHVwZGF0ZU1lKCAuLi51cGRhdGVSZXF1ZXN0czogQ29tcG9uZW50VXBkYXRlUmVxdWVzdFtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy52bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh1cGRhdGVSZXF1ZXN0cy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIG5vIGFyZ3VtZW50cyBhcmVyIHByb3ZpZGVkIHdlIHJlcXVlc3QgdG8gdXBkYXRlIHRoZSBlbnRpcmUgY29tcG9uZW50LlxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gbG9vcCBvdmVyIHVwZGF0ZSByZXF1ZXN0IGFyZ3VtZW50c1xyXG5cdFx0XHRmb3IoIGxldCByZXEgb2YgdXBkYXRlUmVxdWVzdHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLCB1bmRlZmluZWQsIHRoaXMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiBhIG5vbi1hcnJheSBwYXJhbWV0ZXIgaXMgcGFzc2VkIGluIHJlcS5hcmdzLCB3ZSB3cmFwIGl0IGluIGFuIGFycmF5XHJcblx0XHRcdFx0XHRGdW5jUHJveHlWTi51cGRhdGUoIHJlcS5mdW5jLCByZXEua2V5LCByZXEudGhpc0FyZyA/IHJlcS50aGlzQXJnIDogdGhpcyxcclxuXHRcdFx0XHRcdFx0IXJlcS5hcmdzIHx8IEFycmF5LmlzQXJyYXkocmVxLmFyZ3MpID8gcmVxLmFyZ3MgOiBbcmVxLmFyZ3NdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIHRoZSBNaW1ibCB0aWNrIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIGZ1bmN0aW9uXHJcblx0ICogICBpcyBhbHJlYWR5IGJvdW5kIG9yIGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWVCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgaGF2ZSBhbHJlYWR5IGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBJZiB0aGlzXHJcblx0ICogICBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdXNlZCAod2hpY2ggYWxsb3dzIHNjaGVkdWxpbmdcclxuXHQgKiAgIHJlZ3VsYXIgdW5ib3VuZCBjb21wb25lbnRzJyBtZXRob2RzKS4gVGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bilcclxuXHRcdFx0dGhpcy52bi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIGNvbXBvbmVudCB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMudm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQnVpbHQgaW4gY29tcG9uZW50c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBBbiBhcnRpZmljaWFsIFwiRnJhZ21lbnRcIiBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHVzZWQgYXMgYSB0ZW1wb3JhcnkgY29sbGVjdGlvbiBvZiBvdGhlciBpdGVtc1xyXG4gKiBpbiBwbGFjZXMgd2hlcmUgSlNYIG9ubHkgYWxsb3dzIGEgc2luZ2xlIGl0ZW0uIE91ciBKU1ggZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVzIGEgdmlydHVhbCBub2RlXHJcbiAqIGZvciBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlIGZ1bmN0aW9uIGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZC4gVGhpcyBmdW5jdGlvbiBpcyBvbmx5IG5lZWRlZFxyXG4gKiBiZWNhdXNlIGN1cnJlbnRseSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdGhlIGA8PmAgZnJhZ21lbnQgbm90YXRpb24gaWYgYSBjdXN0b20gSlNYIGZhY3RvcnlcclxuICogZnVuY3Rpb24gaXMgdXNlZC5cclxuICpcclxuICogVXNlIGl0IGFzIGZvbGxvd3M6XHJcbiAqIGBgYHRzeFxyXG4gKlx0aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqXHQuLi4uLlxyXG4gKlx0cmVuZGVyKClcclxuICpcdHtcclxuICpcdFx0cmV0dXJuIDxGcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9GcmFnbWVudD5cclxuICpcdH1cclxuICBgYGBcclxuXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudCggcHJvcHM6IENvbXBQcm9wczx7fT4pOiBhbnkge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKiBBIGtleSBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG11bHRpcGxlIHVzZXMgb2YgdGhlIHNhbWUgZnVuY3Rpb24uIElmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMsIGtleSBpcyBtYW5kYXRvcnkgLSBvdGhlcndpc2UsIHRoZSBiZWhhdmlvciBpcyB1bmRldGVybWluZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNQcm94eVByb3BzIGV4dGVuZHMgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogRnVuY3Rpb24gdGhhdCByZW5kZXJzIGNvbnRlbnQuICovXHJcblx0ZnVuYzogRnVuY3Rpb247XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbHVlIHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGVcclxuXHQgKiBjbGFzcyBiYXNlZCBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgKHdoaWNoIGlzIHRoZVxyXG5cdCAqIG1vc3QgY29tbW9uIGNhc2UpLlxyXG5cdCAqL1xyXG5cdHRoaXNBcmc/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkJcIiB3aWxsIHN0aWxsIGJlIHVzZWQuXHJcblx0ICogXHJcblx0ICogSWYgdGhlIGByZXBsYWNlQXJnc2AgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIHRoZW4gZXZlcnkgdGltZSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVuZXQgaXNcclxuXHQgKiByZW5kZXJlZCwgdGhlIHZhbHVlIG9mIHRoZSBgYXJnc2AgcHJvcGVydHkgcmVwbGFjZXMgd2hhdGV2ZXIgYXJndW1lbnRzIHRoZXJlIHdlcmUgYmVmb3JlLlxyXG5cdCAqIFxyXG5cdCAqIE5vdyBub3RlIHRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyB0cnVlOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LlwiQVwiIHdpbGxcclxuXHQgKiBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgY2FsbHMgRnVuY1Byb3h5LnVwZGF0ZSggdGhpcy5mb28sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi4gXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQgYWdhaW4uXHJcblx0ICovXHJcblx0cmVwbGFjZUFyZ3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3cmFwcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgY29udGVudC4gUHJveGllcyBjYW4gd3JhcCBpbnN0YW5jZVxyXG4gKiBtZXRob2RzIG9mIGNsYXNzZXMgdGhhdCBoYXZlIGFjY2VzcyB0byBcInRoaXNcIiB0aHVzIGFsbG93aW5nIGEgc2luZ2xlIGNsYXNzIHRvIFwiaG9zdFwiIG11bHRpcGxlXHJcbiAqIGNvbXBvbmVudHMgdGhhdCBjYW4gYmUgdXBkYXRlZCBzZXBhcmF0ZWx5LiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBub3QgaW50ZW5kZWQgdG8gYmVcclxuICogY3JlYXRlZCBieSBkZXZlbG9wZXJzOyBpbnN0ZWFkIGl0IGlzIG9ubHkgdXNlZCBpbiBpdHMgSlNYIGZvcm0gYXMgdGhlIGZvbGxvd2luZzpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMucmVuZGVyU29tZXRoaW5nfSBrZXk9ey4uLn0gYXJncz17Li4ufSB0aGlzQXJnPXsuLi59IC8+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhlcmUgaXMgYSBzaW1wbGVyIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGluIEpTWCwgZS5nLjpcclxuICogXHJcbiAqIGBgYHRzeFxyXG4gKiA8ZGl2Pnt0aGlzLnJlbmRlclNvbWV0aGluZ308L2Rpdj5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyBuZWVkZWQgaW4gdGhlIGNhc2Ugd2hlcmUgb25lIChvciBtb3JlKSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XHJcbiAqIC0gVGhlcmUgaXMgYSBuZWVkIHRvIHBhc3MgYXJndW1lbnRzIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAtIFRoZSBzYW1lIGZ1bmN0aW9uIGlzIHVzZWQgbXVsdGlwbGUgdGltZXMgYW5kIGtleXMgbXVzdCBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlXHJcbiAqIGludm9jYXRpb25zLlxyXG4gKiAtIFRoZSB2YWx1ZSBvZiBcInRoaXNcIiBpbnNpZGUgdGhlIGZ1bmN0aW9uIGlzIG5vdCB0aGUgY29tcG9uZW50IHRoYXQgZG9lcyB0aGUgcmVuZGVyaW5nLiBUaGF0XHJcbiAqIGlzLCB0aGUgZnVuY3Rpb24gaXMgbm90IGEgbWV0aG9kIG9mIHRoaXMgY29tcG9uZW50LlxyXG4gKiBcclxuICogRnVuY1Byb3h5IGhhcyBhIHB1YmxpYyBzdGF0aWMgVXBkYXRlIG1ldGhvZCB0aGF0IGNhbiBiZSBjYWxsZWQgdG8gY2F1c2UgdGhlIHJlbmRlcmluZyBtZWNoYW5pc21cclxuICogdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5IGV4dGVuZHMgQ29tcG9uZW50PEZ1bmNQcm94eVByb3BzLHZvaWQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogRnVuY1Byb3h5UHJvcHMpIHsgc3VwZXIocHJvcHMpIH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3QgcmUtcmVuZGVyaW5nIG9mIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBnaXZlbiBmdW5jdGlvbiBieSBpbnZva2luZyB0aGlzXHJcblx0ICogZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiBtdXN0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHVzZWQgaW4gcmVuZGVyaW5nIHVzaW5nIGVpdGhlclxyXG5cdCAqIDxGdW5jUHJveHkgZnVuYz17fSAvPiBKU1ggY29uc3RydWN0IG9yIGEgc2ltcGxlciBjb25zdHVjdFxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGludm9rZS5cclxuXHQgKiBAcGFyYW0ga2V5IFZhbHVlIHRoYXQgaGVscHMgZGlzdGluZ3Vpc2hpbmcgYmV0d2VlbiBtdWx0aXBsZSB1c2FnZXMgb2YgdGhlIGZ1bmN0aW9uLlxyXG5cdCAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCAuLi5hcmdzOiBhbnlbXSlcclxuXHR7XHJcblx0XHRGdW5jUHJveHlWTi51cGRhdGUoIGZ1bmMsIGtleSwgdGhpc0FyZywgYXJncyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdXBwb3J0IGZvciBwcm9taXNlcyByZXR1cm5lZCBhcyBjb250ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRvIGJlIHVzZWQgd2l0aCB0aGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvbWlzZVByb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBQcm9taXNlIHRoYXQgd2lsbCBiZSB3YXRjaCBieSB0aGUgd2FpdGluZyBub2RlLiAqL1xyXG5cdHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcblx0LyoqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLiAqL1xyXG5cdGVycm9yQ29udGVudEZ1bmM/OiAoZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgd3JhcHMgYSBQcm9taXNlIGFuZCByZXBsYWNlcyBpdHMgY29udGVudCB3aGVuIHRoZSBwcm9taXNlIGlzIHNldHRsZWQuXHJcbiAqIEJlZm9yZSB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLCB0aGUgY29tcG9uZW50IGRpc3BsYXlzIGFuIG9wdGlvbmFsIFwiaW4tcHJvZ3Jlc3NcIiBjb250ZW50XHJcbiAqIHNwZWNpZmllZCBhcyBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgdGhlIGNvbXBvbmVudCB3aWxsIGVpdGhlclxyXG4gKiBkaXNwbGF5IHRoZSBcImVycm9yXCIgY29udGVudCBvYnRhaW5lZCBieSBjYWxsaW5nIGEgZnVuY3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgcHJvcGVydGllcyBvciwgaWZcclxuICogc3VjaCBmdW5jdGlvbiBpcyBub3Qgc3BlY2lmaWVkLCBkaXNwbGF5IG5vdGhpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5IGV4dGVuZHMgQ29tcG9uZW50PFByb21pc2VQcm94eVByb3BzPlxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdGFuY2VzIG9mIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGFyZSBuZXZlciBhY3R1YWxseSBjcmVhdGVkOyBpc3RlYWQsIHRoZSBwYXJhbWV0ZXJzXHJcblx0ICogcGFzc2VkIHRvIGl0IHZpYSBKU1ggYXJlIHVzZWQgYnkgYW4gaW50ZXJuYWwgdmlydHVhbCBub2RlIHRoYXQgaGFuZGxlcyBmdW5jdGlvblxyXG5cdCAqIGludm9jYXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvciggcHJvcHM6IFByb21pc2VQcm94eVByb3BzKSB7IHN1cGVyKCBwcm9wcyk7IH1cclxuXHJcblx0LyoqIFRoZSByZW5kZXIgbWV0aG9kIG9mIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50IGlzIG5ldmVyIGFjdHVhbGx5IGNhbGxlZCAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55IHt9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIG1vdW50L3VubW91bnQgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50XHJcbi8vIGFzeW5jaHJvbm91c2x5LlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsdGhlblxyXG4gKlx0XHRcdFx0cmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCggY29udGVudDogYW55LCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHRtb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0dW5tb3VudFJvb3QoIGFuY2hvckROKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgLSB1c2UgYEB0cmlnZ2VyYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0YWJsZSggdGFyZ2V0LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgYXR0ck5hbWUgPSBcIl9tX1wiICsgbmFtZTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZuOiBJVk5vZGUgPSB0aGlzLnZuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZuICYmICF2bi51cGRhdGVSZXF1ZXN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbYXR0ck5hbWVdOyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZGVmaW5pdGlvbnMgb2YgW1tQb3B1cF1dLCBbW0RpYWxvZ11dIGFuZCBbW01zZ0JveF1dIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIFRoZSBbW1BvcHVwXV0gY29tcG9uZW50IGlzIGEgYmFzZSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIHBvcHVwIHVzaWcgdGhlIGA8ZGlhbG9nPmAgSFRNTFxyXG4gKiBlbGVtZW50LiBUaGUgW1tEaWFsb2ddXSBjb21wb25lbnQgZGVyaXZlcyBmcm9tIFtbUG9wdXBdXSBhbmQgZGl2aWRlcyB0aGUgcG9wdXAgYXJlYSBpbnRvXHJcbiAqIHNlY29udGlvbnMgZm9yIGNhcHRpb24sIGJvZHkgYW5kIGJ1dHRvbiBiYXIuIERpYWxvZ3Mgc3VwcG9ydCBtb3ZpbmcgYXJvdW5kIGJ5IGNsaWNraW5nIG9uIHRoZVxyXG4gKiBjYXB0aW9uIGFyZWEuIFRoZSBbW01zZ0JveF1dIGNvbXBvbmVudCBkZXJpdmVzIGZyb20gW1tEaWFsb2ddXSBhbmQgZGlzcGxheXMgYSBtZXNzYWdlXHJcbiAqIG9wdGlvbmFsbHkgYWNjb21wYW5uaWVkIHdpdGggYW4gaWNvbiBhbmQgYSBwcmUtZGVmaW5lZCBzZXQgb2YgYnV0dG9ucy5cclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7UHJvbWlzZUV4LCBjcmVhdGVQcm9taXNlRXh9IGZyb20gXCIuLi9hcGkvVXRpbEFQSVwiO1xyXG5pbXBvcnQge3RyaWdnZXJ9IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5pbXBvcnQgeyBNdWx0aUV2ZW50U2xvdCwgY3JlYXRlTXVsdGlFdmVudFNsb3QgfSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTbG90XCI7XHJcblxyXG5cclxuXHJcbi8qKiBVc2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZSB0byBleHRlbmQgdGhlIElTZXJ2aWNlRGVmaW5pdGlvbiBpbnRlcmZhY2UgKi9cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi9hcGkvbWltXCJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRpbmcgdGhlIElTZXJ2aWNlRGVmaW5pdGlvbiBpbnRlcmZhY2Ugd2l0aCBzZXJ2aWNlcyB1c2VkIGJ5IHRoZSBbW1BvcHVwXV0gYW5kXHJcbiAgICAgKiBbW0RpYWxvZ11dIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIFwicG9wdXBcIiBzZXJ2aWNlIGdpdmVzIGNvbXBvbmVudHMgdXNlZCBpbiB0aGUgY29udGVudCBvZiB0aGUgW1tQb3B1cF1dIGNvbXBvbmVudFxyXG4gICAgICAgICAqIGFjY2VzcyB0byB0aGUgW1tJUG9wdXBdXSBpbnRlcmZhY2UsIHRocm91Z2ggd2hpY2ggdGhleSBjYW4gY2xvc2UgdGhlIHBvcHVwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBvcHVwOiBJUG9wdXA7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBcImRpYWxvZ1wiIHNlcnZpY2UgZ2l2ZXMgY29tcG9uZW50cyB1c2VkIGluIHRoZSBjYXB0aW9uIG9yIHRoZSBib2R5IG9mIHRoZSBbW0RpYWxvZ11dXHJcbiAgICAgICAgICogY29tcG9uZW50IGFjY2VzcyB0byB0aGUgW1tJRGlhbG9nXV0gaW50ZXJmYWNlLCB0aHJvdWdoIHdoaWNoIHRoZXkgY2FuIGFkZCBidXR0b25zXHJcbiAgICAgICAgICogYW5kIG90aGVyd2lzZSBtYW5pcHVsYXRlIHRoZSBkaWFsb2cuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlhbG9nOiBJRGlhbG9nO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3B1cFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwIGludGVyZmFjZSByZXByZXNlbnRzIGEgcG9wdXAgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY29udGVudC4gVGhpcyBpbnRlcmZhY2VcclxuICogaXMgcHVibGlzaGVkIGFzIGEgc2VydmljZSBhbmQgY2FuIGJlIHVzZWQgYnkgdGhlIGNvbnRlbnQgY29tcG9uZW50cyB0byBjbG9zZSB0aGUgcG9wdXAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgcG9wdXAgYW5kIHBhc3NlcyBhIHZhbHVlIHRvIGJlIHVzZWQgYXMgYSByZXR1cm4gdmFsdWUuIEZvciB0aGUgbW9kYWwgcG9wdXBzLFxyXG4gICAgICogdGhpcyB2YWx1ZSB3aWxsIGJlIHRoZSByZXNvbHZlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgc2hvd01vZGFsKCkgbWV0aG9kLlxyXG4gICAgICogRm9yIG1vZGVsZXNzIHBvcHVwcywgdGhpcyB2YWx1ZSB3aWxsIGJlIGF2YWlsYWJsZSBhcyB0aGUgcmV0dXJuVmFsdWUgcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gcmV0dXJuVmFsdWVcclxuICAgICAqL1xyXG4gICAgY2xvc2UoIHJldHVyblZhbHVlPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cFN0eWxlcyBpbnRlcmZhY2UgZGVmaW5lcyBzdHlsZXMgdXNlZCBieSB0aGUgUG9wdXAgY2xhc3MgdG8gY3JlYXRlIHRoZSBgPGRpYWxvZz5gXHJcbiAqIGVsZW1lbnQuIFRoZSBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHByb3ZpZGUgdGhlIGNsYXNzIHJ1bGUgZm9yIHRoZSBkaWFsb2cgcHJvcGVydHkgYW5kIGNhblxyXG4gKiBhbHNvIGRlZmluZSB0aGUgOjpiYWNrZHJvcCBwc2V1ZG8gZWxlbWVudCBzdHlsZXMsIHdoaWNoIGlzIHVzZWQgd2hlbiB0aGUgcG9wdXAgaXMgc2hvd24gYXMgYVxyXG4gKiBtb2RhbCBkaWFsb2cuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cFN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGA8ZGlhbG9nPmAgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgc3R5bGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBQb3B1cCBpZiBzdHlsZXMgYXJlIG5vdCBzcGVjaWZpZWQgdXNpbmcgb3B0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UG9wdXBTdHlsZXMgZXh0ZW5kcyBjc3MuU3R5bGVEZWZpbml0aW9uIGltcGxlbWVudHMgSVBvcHVwU3R5bGVzXHJcbntcclxuICAgIC8qKiBTdHlsZXMgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQuICovXHJcbiAgICBkaWFsb2cgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZ3JleVwiXSxcclxuICAgICAgICBib3hTaGFkb3c6IHsgeDogNCwgeTogNCwgYmx1cjogNCwgY29sb3I6IFwibGlnaHRncmV5XCIgfSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIC8vIHRyYW5zZm9ybTogY3NzLnNjYWxlKDAuMSksXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBwcm9wZXJ0eTogXCJ0cmFuc2Zvcm1cIiwgZHVyYXRpb246IDIwMCB9LFxyXG4gICAgICAgIFwiOjpiYWNrZHJvcFwiOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIG9wYWNpdHk6IDAuMyB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwT3B0aW9ucyBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb3B0aW9ucyB0aGF0IGNvZmlndXJlIHRoZSBiZWhhdmlvciBvZiB0aGUgUG9wdXBcclxuICogb2JqZWN0LiBUaGV5IGFyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIHRvIHRoZSBbW1BvcHVwXV0gY2xhc3NcclxuICogQHR5cGVQYXJhbSBUU3R5bGVzIFR5cGUgZm9yIHRoZSBzdHlsZXMgcHJvcGVydHkuIE9wdGlvbnMgZm9yIGRlcml2ZWQgY29tcG9uZW50cyB3aWxsIGhhdmUgdG9cclxuICogZGVyaXZlIGZyb20gdGhlIElQb3B1cE9wdGlvbnMgaW50ZXJmYWNlIGFuZCB0byBpbXBsZW1lbnQgdGhlIFtbSVBvcHVwU3R5bGVzXV0gaW50ZXJmYWNlIGZvclxyXG4gKiB0aGUgc3R5bGVzIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBPcHRpb25zPFRTdHlsZXMgZXh0ZW5kcyBJUG9wdXBTdHlsZXMgPSBJUG9wdXBTdHlsZXM+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IHN0eWxlcyB0byB1c2UgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQgYW5kIG9wdGlvbmFsbHkgZm9yIHRoZSA6OmJhY2tkcm9wXHJcbiAgICAgKiBwc2V1ZG8gZWxlbWVudC4gVGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGltcGxlbWVudGluZyB0aGVcclxuICAgICAqIFtbSVBvcHVwU3R5bGVzXV0gaW50ZXJmYWNlIG9yIGFuIGluc3RhbmNlIG9mIHN1Y2ggY2xhc3MuIFRoZSBwb3B1cCBhY3RpdmF0ZXMgdGhlIHN0eWxlc1xyXG4gICAgICogd2hlbiBpdCBvcGVucyBhbmQgZGVhY3RpdmF0ZXMgdGhlbSB3aGVuIGl0IGNsb3Nlcy4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZGVmaW5lZCwgdGhlXHJcbiAgICAgKiBwb3B1cCB3aWxsIHVzZSB0aGUgZGVmYXVsdCBzdHlsZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgc3R5bGVzPzogVFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGA8ZGlhbG9nPmAgZWxlbWVudC4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBkZWZpbmVkLFxyXG4gICAgICogdGhlIFtbc3R5bGVdXSBwcm9wZXJ0eSBpcyBpZ25vcmVkXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ1N0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIHBvcHVwIGJ5IHByZXNzaW5nIHRoZSBFc2NhcGUga2V5LiBJZiB0aGlzXHJcbiAgICAgKiBwcm9wZXJ0eSBpcyB1bmRlZmluZWQsIHRoZSBwb3B1cCBjYW5ub3QgYmUgY2xvc2VkIHdpdGggdGhlIEVzY2FwZSBrZXkuIFRoZSBkZWZhdWx0IHZhbHVlIGlzXHJcbiAgICAgKiB1bmRlZmluZWQuXHJcbiAgICAgKlxyXG4gICAgICogRm9yIG1vZGFsIHBvcHVwcywgdGhpcyBwcm9wZXJ0eSBhbHNvIGNvbnRyb2xzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIGRpc21pc3MgdGhlIHBvcHVwIGJ5XHJcbiAgICAgKiBjbGlja2luZyBvbiB0aGUgYmFja2Ryb3AgLSB0aGF0IGlzLCB0aGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBwb3B1cCBpdHNsZWYuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGVzY2FwZVJldHVyblZhbHVlPzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSFRNTCBlbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQgaXMgY3JlYXRlZC4gSWYgdGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQsXHJcbiAgICAgKiB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGlzIGNyZWF0ZWQgdW5kZXIgdGhlIGA8Ym9keT5gIGVsZW1lbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYW5jaG9yRWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWC1jb29yZGluYXRlIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGRpYWxvZyBmcm9tIHRoZSBhbmNob3IgZWxlbWVudC4gSWYgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGRpYWxvZyB3aWxsIGJlIGNlbnRlcmVkIGhvcml6b250YWxseS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaW5pdGlhbFg/OiBjc3MuQ3NzTGVuZ3RoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWS1jb29yZGluYXRlIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhlIGRpYWxvZyBmcm9tIHRoZSBhbmNob3IgZWxlbWVudC4gSWYgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGRpYWxvZyB3aWxsIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGluaXRpYWxZPzogY3NzLkNzc0xlbmd0aDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cEV2ZW50cyBpbnRlcmZhY2UgcmVwcmVzZW50cyBldmVudHMgdGhhdCB0aGUgUG9wdXAgY29tcG9uZW50IGNhbiBmaXJlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cEV2ZW50c1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcGVuIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBvcHVwIG9wZW5zLlxyXG4gICAgICogQHBhcmFtIGlzTW9kYWwgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHBvcHVwIG9wZW5zIGFzIG1vZGFsIG9yIG1vZGVsZXNzXHJcbiAgICAgKi9cclxuXHRvcGVuKCBpc01vZGFsOiBib29sZWFuKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9zZSBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwb3B1cCBjbG9zZXMuXHJcbiAgICAgKiBAcGFyYW0gcmV0VmFsIFZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UoKSBtZXRob2QuXHJcbiAgICAgKi9cclxuICAgIGNsb3NlKCByZXRWYWw6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQb3B1cCBjbGFzcyBhbGxvd3MgZGlzcGxheWluZyBtb2RhbCBhbmQgbW9kZWxlc3MgcG9wdXBzLiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvclxyXG4gKiBkaWFsb2dzIGFuZCBtZXNzYWdlIGJveGVzLiBBZnRlciB0aGUgUG9wdXAgaW5zdGFuY2UgaXMgY3JlYXRlZCBpdCBjYW4gYmUgc2hvd24gZWl0aGVyIGFzIG1vZGFsXHJcbiAqIG9yIG1vZGVsZXNzIHBvcHVwLiBCb3RoIHR5cGVzIG9mIHRoZSBwb3B1cCBjYW4gYmUgY2xvc2VkIHVzaW5nIHRoZSBjbG9zZSgpIG1ldGhvZC4gSW4gb3JkZXIgZm9yXHJcbiAqIHRoZSBwb3B1cCB0byBiZSBjbG9zZWQgXCJmcm9tIGluc2lkZVwiIC0gdGhhdCBpcywgYnkgdGhlIGNvbXBvbmVudCwgd2hpY2ggaXMgdXNlZCBhcyB0aGUgcG9wdXBcclxuICogY29udGVudCAtIHRoZSBwb3B1cCBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudC5cclxuICpcclxuICogVGhlIFBvcHVwIGNsYXNzIGl0c2VsZiBkb2Vzbid0IHByb3ZpZGUgYW55IG1lYW5zIGZvciB0aGUgdXNlciB0byBzdGFydCBtb3ZpbmcgaXQgYXJvdW5kO1xyXG4gKiBob3dldmVyLCBpdCBhbGxvd3MgaW5pdGlhdGluZyB0aGUgbW92ZSBhY3Rpb24gdXNpbmcgdGhlIHN0YXJ0TW92ZSgpIG1ldGhvZC4gT25jZSB0aGlzIG1ldGhvZFxyXG4gKiBpcyBjYWxsZWQsIHRoZSBQb3B1cCB3aWxsIHN0YXJ0IG1vbml0b3JpbmcgbW91c2UgKHBvaW50ZXIpIGFjdGl2aXR5IGFuZCBtb3ZlIHRoZSBkaWFsb2dcclxuICogYWNjb3JkaW5nbHkuXHJcbiAqXHJcbiAqIFRoZSBjb250ZW50IG9mIHRoZSBwb3B1cCBjYW4gYmUgcmVwbGFjZWQgd2hpbGUgaXQgaXMgYmVpbmcgZGlzcGxheWVkIHVzaW5nIHRoZSBzZXRDb250ZW50KClcclxuICogbWV0aG9kLlxyXG4gKlxyXG4gKiBAdHlwZVBhcmFtIFRTdHlsZXMgVHlwZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB1c2VkIHRvIHNwZWNpZnkgQ1NTIHN0eWxlcyBmb3IgdGhlXHJcbiAqIGNvbXBvbmVudC4gTXVzdCBpbXBsZW1lbnQgdGhlIElQb3B1cFN0eWxlcyBpbnRlcmZhY2UuXHJcbiAqIEB0eXBlUGFyYW0gVE9wdGlvbnMgVHlwZSBvZiB0aGUgb2JqZWN0IHVzZWQgdG8gc3BlY2lmeSBvcHRpb25zIGZvciB0aGUgY29tcG9uZW50LiBNdXN0XHJcbiAqIGltcGxlbWVudCB0aGUgSVBvcHVwT3B0aW9ucyBpbnRlcmZhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9wdXA8VFN0eWxlcyBleHRlbmRzIElQb3B1cFN0eWxlcyA9IElQb3B1cFN0eWxlcyxcclxuICAgICAgICAgICAgVE9wdGlvbnMgZXh0ZW5kcyBJUG9wdXBPcHRpb25zPFRTdHlsZXM+ID0gSVBvcHVwT3B0aW9uczxUU3R5bGVzPj5cclxuICAgICAgICAgICAgZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUG9wdXAgaXMgY29uc3RydWN0ZWQgYnkgc3BlY2lmeWluZyB0aGUgaW5pdGlhbCBjb250ZW50IGl0IHNob3VsZCBkaXNwbGF5IGFuZCB0aGUgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggY29udGVudD86IGFueSwgb3B0aW9ucz86IFRPcHRpb25zKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheXMgdGhlIHBvcHVwIGFzIGEgbW9kZWxlc3MgZGlhbG9nLiBUaGUgbWV0aG9kIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBwb3B1cFxyXG4gICAgICogaXMgYWxyZWFkeSBvcGVuIGFzIGEgbW9kYWwgcG9wdXAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kbGcuc2hvdygpO1xyXG5cclxuICAgICAgICB0aGlzLm9uT3BlbiggZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheXMgdGhlIHBvcHVwIGFzIGEgbW9kZWxlc3MgZGlhbG9nIGFuZCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlXHJcbiAgICAgKiBwb3B1cCBpcyBjbG9zZWQuIFRoZSByZXNvbHZlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSBpcyB0aGUgdmFsdWUgcGFzc2VkIHRvIHRoZSBjbG9zZSgpXHJcbiAgICAgKiBtZXRob2QuIFRoZSBtZXRob2Qgd2lsbCByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIGlmIHRoZSBwb3B1cCBpcyBhbHJlYWR5IG9wZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TW9kYWwoKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoIG5ldyBFcnJvciggXCJQb3B1cCBhbHJlYWR5IG9wZW5cIikpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmRsZy5zaG93TW9kYWwoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIGVzY2FwZVJldHVyblZhbHVlIGlzIGRlZmluZWQgaW4gdGhlIG9wdGlvbnMsIHN0YXJ0IGxpc3RlbmluZyB0byB0aGUgY2xpY2sgZXZlbnRzXHJcbiAgICAgICAgLy8gdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIHRoZSBwb3B1cCBiZWNhdXNlIHRoZXkgd2lsbCBhY3QgYXMgRXNjYXBlIHRvby5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmRsZy5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIHRoaXMub25EZXRlY3RDbGlja091dHNpZGUpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsUHJvbWlzZSA9IGNyZWF0ZVByb21pc2VFeCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIHBvcHVwIGFuZCBwYXNzZXMgYSB2YWx1ZSB0byBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlLiBGb3IgdGhlIG1vZGFsIHBvcHVwcyxcclxuICAgICAqIHRoaXMgdmFsdWUgd2lsbCBiZSB0aGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIHNob3dNb2RhbCgpIG1ldGhvZC5cclxuICAgICAqIEZvciBtb2RlbGVzcyBwb3B1cHMsIHRoaXMgdmFsdWUgd2lsbCBiZSBhdmFpbGFibGUgYXMgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIHJldFZhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoIHJldHVyblZhbHVlPzogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblx0XHRpZiAodGhpcy5tb2RhbFByb21pc2UpXHJcblx0XHR7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnM/LmVzY2FwZVJldHVyblZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRsZy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIHRoaXMub25EZXRlY3RDbGlja091dHNpZGUpO1xyXG5cclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2UucmVzb2x2ZSggcmV0dXJuVmFsdWUpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgdGhpcy5kbGcuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCByZXR1cm5WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEV2ZW50cyB0aGF0IGNhbiBiZSBmaXJlZCBieSB0aGUgUG9wdXAgY29tcG9uZW50ICovXHJcbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBNdWx0aUV2ZW50U2xvdDxJUG9wdXBFdmVudHM+IHsgcmV0dXJuIHRoaXMuX2V2ZW50czsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgb3Blbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmRsZyAhPSBudWxsOyB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgaXNNb2RlbGVzcygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNPcGVuICYmICF0aGlzLm1vZGFsUHJvbWlzZTsgfVxyXG5cclxuXHQvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGFsLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzT3BlbiAmJiB0aGlzLm1vZGFsUHJvbWlzZSAhPSBudWxsOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBzZXQgYnkgdGhlIGNsb3NlKCkgbWV0aG9kLiBJZiB0aGUgcG9wdXAgaXMgb3BlbiwgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByZXR1cm5WYWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcmV0dXJuVmFsdWU7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgZmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZSBvciBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNWaXNpYmxlOyB9XHJcblxyXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoIHY6IGJvb2xlYW4pIHsgdGhpcy5faXNWaXNpYmxlID0gdjsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgY29udGVudCBvZiB0aGUgcG9wdXAgd2l0aCB0aGUgZ2l2ZW4gb25lLlxyXG4gICAgICogQHBhcmFtIGNvbnRlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIFN0YXJ0cyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cyBhbmQgbW92ZXMgdGhlIHBvcHVwIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG4gICAgICogaW50ZW50ZWQgdG8gYmUgY2FsbGVkIGZyb20gYSBtb3VzZWRvd24gZXZlbnQgaGFuZGxlZCBlaXRoZXIgYnkgYSBkZXJpdmVkIGNsYXNzIG9yIGJ5XHJcbiAgICAgKiB0aGUgcG9wdXAgY2FsbGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnRNb3ZlKCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIC8vIHdlIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHByb3BhZ2F0aW9uIHNvIHRoYXQgbW91c2UgbW92ZW1lbnRzIGRvbid0IGNhdXNlXHJcblx0XHQvLyAvLyB0ZXN0IGluIHRoZSBwb3B1cCBhbmQgb24gdGhlIHBhZ2UgdG8gYmUgc2VsZWN0ZWQuXHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCByZWN0ID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR0aGlzLm1vdmVQb2ludE9mZnNldFggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5tb3ZlUG9pbnRPZmZzZXRZID0gY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArIFwicHhcIjtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb2ludGVybW92ZVwiLCB0aGlzLm9uUG9pbnRlck1vdmUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInBvaW50ZXJ1cFwiLCB0aGlzLm9uUG9pbnRlclVwKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBTdG9wcyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cy4gVGhpcyBtZXRob2QgYWxsb3dzIHByb2dyYW1tYXRpY2FsbHkgaW50ZXJydXB0XHJcbiAgICAgKiBkaWFsb2cgbW92aW5nIG9wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wTW92ZSgpXHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwb2ludGVydXBcIiwgdGhpcy5vblBvaW50ZXJVcCk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZVBvaW50T2Zmc2V0WCA9IHRoaXMubW92ZVBvaW50T2Zmc2V0WSA9IDA7XHJcblx0fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuICAgICAqIHNvbWUgcGFydCBvZiB0aGUgZGlhbG9nIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgcmVtYWlucyB2aXNpYmxlIGluIG9yZGVyIHRvIHRoZSB1c2VyIHRvIGJlXHJcbiAgICAgKiBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBtb3ZlVG8oIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubW92ZSggbmV3WCwgbmV3WSk7XHJcbiAgICAgICAgdGhpcy5kbGcuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsTW91bnQoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJwb3B1cFwiLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsVW5tb3VudCgpXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwicG9wdXBcIik7XHJcblxyXG4gICAgICAgIC8vIGRlYWN0aXZhdGUgc3R5bGVzXHJcbiAgICAgICAgY3NzLmRlYWN0aXZhdGUoIHRoaXMuZGVmYXVsdFN0eWxlcyk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3R5bGVzID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25hbFN0eWxlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNzcy5kZWFjdGl2YXRlKCB0aGlzLm9wdGlvbmFsU3R5bGVzKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhbiB1cFxyXG4gICAgICAgIHRoaXMuZGxnID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZW5kZXIgbWV0aG9kIHNpbXBseSByZXR1cm5zIHRoZSBjdXJyZW50IGNvbnRlbnQgYnV0IGl0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlc1xyXG4gICAgICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQ3JlYXRlcyB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgIHByaXZhdGUgY3JlYXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBvYnRhaW4gdGhlIGFuY2hvciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbmNob3JFbGVtZW50ID8gdGhpcy5vcHRpb25zLmFuY2hvckVsZW1lbnQgOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSBvdXIgZGVmYXVsdCBzdHlsZXMgYW5kIGlmIHN0eWxlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLCB0aGVuIGFjdGl2YXRlXHJcbiAgICAgICAgLy8gdGhlbSB0b28uXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3R5bGVzID0gY3NzLmFjdGl2YXRlKCB0aGlzLmdldERlZmF1bHRTdHlsZXMoKSkgYXMgVFN0eWxlcztcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdHlsZXMpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXMgPSBjc3MuYWN0aXZhdGUoIHRoaXMub3B0aW9ucy5zdHlsZXMpIGFzIFRTdHlsZXM7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBkaWFsb2cgZWxlbWVudCBhbmQgYWRkIGl0IHRvIHRoZSBET01cclxuICAgICAgICB0aGlzLmRsZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIHRoaXMuZGxnLmNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dTdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2csIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2cpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5kbGcpO1xyXG5cclxuICAgICAgICAvLyBhc3NpZ24gcG9zaXRpb25pbmcgc3R5bGVzIGRpcmN0bHkgdG8gdGhlIGRpYWxvZyBlbGVtZW50LiBJZiB4IGFuZC9vciB5IGFyZSB1bmRlZmluZWQsXHJcbiAgICAgICAgLy8gd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5IGFuZC9vciB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgbGV0IHN0eWxlOiBjc3MuU3R5bGVzZXQgPSB7IHBvc2l0aW9uOiBcImZpeGVkXCIgfTtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMuaW5pdGlhbFggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlLnJpZ2h0ID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbFg7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zIHx8IHRoaXMub3B0aW9ucy5pbml0aWFsWSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzdHlsZS50b3AgPSBzdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3R5bGUudG9wID0gdGhpcy5vcHRpb25zLmluaXRpYWxZO1xyXG5cclxuICAgICAgICBjc3Muc2V0RWxlbWVudFN0eWxlKCB0aGlzLmRsZywgc3R5bGUsIGNzcy5TY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG5cclxuICAgICAgICAvLyBtb3VudCB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgbWltLm1vdW50KCB0aGlzLCB0aGlzLmRsZylcclxuXHJcbiAgICAgICAgLy8gZXN0YWJsaXNoIGxpc3RlbmVyIGZvciBrZXlib2FyZCBldmVudHNcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXN0cm95cyB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyIGZvciBrZXlib2FyZCBldmVudHNcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICAvLyB1bm1vdW50IHRoZSBjb250ZW50XHJcbiAgICAgICAgbWltLnVubW91bnQoIHRoaXMuZGxnKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuZGxnLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuICAgICAqIHNvbWUgcGFydCBvZiB0aGUgZGlhbG9nIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgcmVtYWlucyB2aXNpYmxlIGluIG9yZGVyIHRvIHRoZSB1c2VyIHRvIGJlXHJcbiAgICAgKiBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuICAgICAqL1xyXG5cdHByaXZhdGUgbW92ZSggbmV3WDogbnVtYmVyLCBuZXdZOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0aWYgKG5ld1ggPCAwKVxyXG5cdFx0XHRuZXdYID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1ggKyAzMCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRuZXdYID0gd2luZG93LmlubmVyV2lkdGggLSAzMDtcclxuXHJcblx0XHRpZiAobmV3WSA8IDApXHJcblx0XHRcdG5ld1kgPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WSArIDMwID4gd2luZG93LmlubmVySGVpZ2h0KVxyXG5cdFx0XHRuZXdZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzA7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZXNcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSBuZXdYICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gbmV3WSArIFwicHhcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gSGFuZGxlcyBrZXlkb3duIGV2ZW50IHRvIHByZXZlbnQgY2xvc2luZyB0aGUgZGlhbG9nIGJ5IEVzYyBrZXkuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIC8vIEVzY1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gd2UgaWdub3JlIHRoZSBFc2NhcGUga2V5IGlmIHRoZSBlc2NhcGVSZXR1cm5WYWx1ZSBvcHRpb24gaXMgdW5kZWZpbmVkOyBvdGhlcndpc2UsXHJcbiAgICAgICAgICAgIC8vIHdlIGNsb3NlIHRoZSBkaWFsb2cgd2l0aCBpdHMgdmFsdWVcclxuICAgICAgICAgICAgbGV0IHJldFZhbCA9IHRoaXMuZ2V0UmV0dXJuVmFsdWVGb3JFc2NhcGVLZXkoKTtcclxuICAgICAgICAgICAgaWYgKHJldFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggcmV0VmFsKTtcclxuICAgICAgICB9XHJcblx0fTtcclxuXHJcbiAgICAvLyBEZXRlY3RzIHdoZXRoZXIgYSBjbGljayBvY2N1cnJlZCBvdXRzaWRlIG9mIHRoZSBwb3B1cCBhcmVhLiBUaGlzIGhhbmRsZXIgaXMgaW52b2tlZCBvbmx5IGZvclxyXG4gICAgLy8gbW9kYWwgcG9wdXBzIGFuZCBvbmx5IGlmIHRoZSBlc2NhcGVSZXR1cm5WYWx1ZSBpcyBkZWZpbmVkIGluIHRoZSBvcHRpb25zLlxyXG4gICAgcHJpdmF0ZSBvbkRldGVjdENsaWNrT3V0c2lkZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG4gICAge1xyXG4gICAgICAgIC8vIGNsaWNraW5nIG9uIHRoZSBiYWNrZHJvcCBvZiB0aGUgbW9kYWwgcG9wdXAgaGFzIHRoZSB0YXJnZXQgcHJvcGVydHkgb2YgdGhlIGV2ZW50XHJcbiAgICAgICAgLy8gcG9pbnRpbmcgdG8gdGhlIGA8ZGlhbG9nPmAgZWxlbWVudCBpdHNlbGYuIElmIGl0IGlzIG5vdCB0aGlzIGVsZW1lbnQsIHRoZW4gdGhlIGNsaWNrXHJcbiAgICAgICAgLy8gd2FzIG9uIHNvbWUgZWxlbWVudCB3aXRoaW4gdGhlIHBvcHVwLlxyXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy5kbGcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8ganVzdCBpbiBjYXNlIHRoZSBjbGljayBoYXBwZW5kIG9uIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQgaXRzZWxmIGJ1dCB3aXRoaW4gdGhlIGJvdW5kc1xyXG4gICAgICAgIC8vIG9mIHRoZSBwb3B1cCAoZS5nLiBpZiBwb3B1cCBpcyBzdHlsZWVkIHdpdGggcGFkZGluZ3MpLCBjaGVjayB0aGF0IGNvb3JkaW5hdGVzIGFyZVxyXG4gICAgICAgIC8vIG91dHNpZGUgb2YgdGhlIHBvcHVwIGFyZWEuXHJcbiAgICAgICAgbGV0IHJjID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKGUuY2xpZW50WCA8IHJjLmxlZnQgfHwgZS5jbGllbnRYID4gcmMucmlnaHQgfHwgZS5jbGllbnRZIDwgcmMudG9wIHx8IGUuY2xpZW50WSA+IHJjLmJvdHRvbSlcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSggdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cdHByaXZhdGUgb25Qb2ludGVyTW92ZSA9IChlOiBQb2ludGVyRXZlbnQpID0+XHJcblx0e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gd2Ugb25seSBtb3ZlIG9uIHRoZSBwcmltYXJ5IGJ1dHRvblxyXG4gICAgICAgIGlmICghdGhpcy5kbGcgfHwgIWUuaXNQcmltYXJ5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTW92ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHRoaXMubW92ZSggZS5jbGllbnRYIC0gdGhpcy5tb3ZlUG9pbnRPZmZzZXRYLCBlLmNsaWVudFkgLSB0aGlzLm1vdmVQb2ludE9mZnNldFkpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgb25Qb2ludGVyVXAgPSAoZTogUG9pbnRlckV2ZW50KSA9PlxyXG5cdHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zdG9wTW92ZSgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBvciBjbGFzc1xyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIGdldERlZmF1bHRTdHlsZXMoKTogVFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz5cclxuXHR7XHJcbiAgICAgICAgcmV0dXJuIERlZmF1bHRQb3B1cFN0eWxlcyBhcyBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+O1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlIHdoZW4gY2xvc2luZyB0aGUgcG9wdXAgYWZ0ZXIgdGhlXHJcbiAgICAgKiB1c2VyIHByZXNzZWQgdGhlIEVzYyBrZXkuIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHBvcHVwIGRvZXNuJ3QgY2xvc2VcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXRSZXR1cm5WYWx1ZUZvckVzY2FwZUtleSgpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBzaW1wbHkgcmV0dXJucyB0aGUgdmFsdWUgZnJvbSB0aGUgb3B0aW9ucy5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHBvcHVwIG9wZW5zLiBJZiBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgaXQgdGhleVxyXG4gICAgICogbXVzdCBjYWxsIHN1cGVyLm9uT3BlbigpLlxyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIG9uT3BlbiggaXNNb2RhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gbm90aWZ5IGFueSBsaXN0ZW5lcnNcclxuICAgICAgICB0aGlzLl9ldmVudHMub3Blbi5maXJlKCBpc01vZGFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgcG9wdXAgaXMgYmVpbmcgY2xvc2VkLiBJZiBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgaXQgdGhleVxyXG4gICAgICogbXVzdCBjYWxsIHN1cGVyLm9uQ2xvc2UoKS5cclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBvbkNsb3NlKCByZXRWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gbm90aWZ5IGFueSBsaXN0ZW5lcnNcclxuICAgICAgICB0aGlzLl9ldmVudHMuY2xvc2UuZmlyZSggcmV0VmFsKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBDb250ZW50IHRvIGRpc3BsYXlcclxuICAgIEB0cmlnZ2VyKDApXHJcbiAgICBwcm90ZWN0ZWQgY29udGVudDogYW55O1xyXG5cclxuICAgIC8vIE9wdGlvbnNcclxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBUT3B0aW9ucztcclxuXHJcbiAgICAvLyBBY3RpdmF0ZWQgZGVmYXVsdCBzdHlsZXNcclxuICAgIHByb3RlY3RlZCBkZWZhdWx0U3R5bGVzOiBUU3R5bGVzO1xyXG5cclxuICAgIC8vIEFjdGl2YXRlZCBvcHRpb25hbCBzdHlsZXNcclxuICAgIHByb3RlY3RlZCBvcHRpb25hbFN0eWxlczogVFN0eWxlcztcclxuXHJcbiAgICAvLyBBbmNob3IgZWxlbWVudCB1bmRlciB3aGljaCB0byBjcmVhdGUgdGhlIGRpYWxvZyBlbGVtZW50XHJcbiAgICBwcml2YXRlIGFuY2hvckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vIERpYWxvZyBlbGVtZW50XHJcbiAgICBwcml2YXRlIGRsZzogSFRNTERpYWxvZ0VsZW1lbnQ7XHJcblxyXG4gICAgLy8gUHJvbWlzZSB0aGF0IGlzIGNyZWF0ZWQgZm9yIG1vZGFsIGRpYWxvZ3MgYW5kIHdoaWNoIGlzIHJlc29sdmVkIHdoZW4gdGhlIGRpYWxvZyBjbG9zZXMuXHJcbiAgICBwcml2YXRlIG1vZGFsUHJvbWlzZTogUHJvbWlzZUV4PGFueT47XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHBvcHVwIGlzIGN1cnJlbnRseSB2aXNpYmxlXHJcbiAgICBwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gVmFsdWUgcGFzc2VkIHRvIHRoZSBjbG9zZSBtZXRob2QuXHJcbiAgICBwcml2YXRlIF9yZXR1cm5WYWx1ZTogYW55O1xyXG5cclxuICAgIC8vIEV2ZW50cyB0aGF0IGNhbiBiZSBmaXJlZCBieSB0aGUgUG9wdXAgb2JqZWN0cy5cclxuICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElQb3B1cEV2ZW50cz4oKTtcclxuXHJcblx0Ly8gT2Zmc2V0cyBvZiB0aGUgcG9pbnQgd2hlcmUgdGhlIG1vdmUgc3RhcnRlZCBmcm9tIHRoZSBkaWFsb2cgdG9wLWxlZnQgY29ybmVyLiBXZSB1c2UgdGhlbVxyXG5cdC8vIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbG9nIHRvcC1sZWZ0IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcyB3aGlsZSBtb3ZlIGlzXHJcblx0Ly8gaW4gcHJvZ3Jlc3MuXHJcblx0cHJpdmF0ZSBtb3ZlUG9pbnRPZmZzZXRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3ZlUG9pbnRPZmZzZXRZOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERpYWxvZ1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURpYWxvZ0J1dHRvbiBpbnRlcmZhY2UgZGVzY3JpYmVzIGEgc2luZ2xlIGJ1dHRvbiBpbiB0aGUgZGlhbG9nJ3MgYnV0dG9uIGJhci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0J1dHRvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnV0dG9uLiBUaGlzIElEIGlzIHBhc3NlZCB0byB0aGUgY2FsbGJhY2ssIHdoaWNoIGlzIGNhbGxlZCB3aGVuXHJcbiAgICAgKiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGlkOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjaywgd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQsIHRoZVxyXG4gICAgICogcmV0dXJuVmFsdWUgcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjYWxsYmFjaz86IChpZDogYW55KSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHZhbHVlIHdpdGggd2hpY2ggdGhlIGRpYWxvZyBpcyBjbG9zZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFRoaXMgcHJvcGVydHkgaXMgdXNlZFxyXG4gICAgICogKGFuZCBtdXN0IGJlIGRlZmluZWQpIG9ubHkgaWYgdGhlIGNhbGxiYWNrIHByb3BlcnR5IGlzIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgcmV0dXJuVmFsdWU/OiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50IHRvIGRpc3BsYXkgaW4gdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY29udGVudD86IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBidXR0b24gaXMgaW5pdGlhbGx5IGRpc2FibGVkLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZTsgdGhhdFxyXG4gICAgICogaXMsIHRoZSBidXR0b24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwIGludGVyZmFjZSByZXByZXNlbnRzIGEgcG9wdXAgZnJvbSB0aGUgcG9pbnQgb2YgdmlldyBvZiB0aGUgY29udGVudC4gVGhpcyBpbnRlcmZhY2VcclxuICogaXMgcHVibGlzaGVkIGFzIGEgc2VydmljZSBhbmQgY2FuIGJlIHVzZWQgYnkgdGhlIGNvbnRlbnQgY29tcG9uZW50cyB0byBjbG9zZSB0aGUgcG9wdXAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2cgZXh0ZW5kcyBJUG9wdXBcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgYnV0dG9uIHRvIHRoZSBidXR0b24gYmFyXHJcbiAgICAgKi9cclxuICAgIGFkZEJ1dHRvbiggYnRuOiBJRGlhbG9nQnV0dG9uKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBidXR0b25zIGluIHRoZSBidXR0b24gYmFyXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGJ1dHRvbkNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlhbG9nU3R5bGVzIGludGVyZmFjZSBkZWZpbmVzIHN0eWxlcyB1c2VkIGJ5IHRoZSBEaWFsb2cgY2xhc3MgdG8gY3JlYXRlIGRpZmZlcmVudCBlbGVtZW50c1xyXG4gKiBvZiB0aGUgZGlhbG9nLiBUaGUgaW1wbGVtZW50YXRpb25zIHNob3VsZCBwcm92aWRlIGNsYXNzIHJ1bGVzIGZvciB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAqIC0gZGlhbG9nQ2FwdGlvblxyXG4gKiAtIGRpYWxvZ0JvZHlcclxuICogLSBkaWFsb2dCdXR0b25CYXJcclxuICogLSBkaWFsb2dCdXR0b25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ1N0eWxlcyBleHRlbmRzIElQb3B1cFN0eWxlc1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgY2FwdGlvbiBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dDYXB0aW9uPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJvZHkgc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQm9keT86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b24gYmFyIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbkJhcj86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b25zLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCdXR0b24/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERlZmF1bHREaWFsb2dTdHlsZXMgZXh0ZW5kcyBEZWZhdWx0UG9wdXBTdHlsZXMgaW1wbGVtZW50cyBJRGlhbG9nU3R5bGVzXHJcbntcclxuICAgIGRpYWxvZ0NhcHRpb24gPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZG9kZ2VyYmx1ZVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiB7IHg6IDAsIHk6IDIsIGJsdXI6IDIsIGNvbG9yOiBcImxpZ2h0Z3JleVwiIH0sXHJcbiAgICAgICAgcGFkZGluZzogMC40LFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCb2R5ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgcGFkZGluZzogMC43LFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCdXR0b25CYXIgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmV5XCIsXHJcbiAgICAgICAgcGFkZGluZzogWzAuNywgMS4wMV0sXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBkaWFsb2dCdXR0b24gPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBwYWRkaW5nOiAwLjMsXHJcbiAgICAgICAgbWFyZ2luSW5saW5lU3RhcnQ6IDEuMDEsXHJcbiAgICAgICAgbWluV2lkdGg6IDUuNSxcclxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmMmYyZjIsXHJcblx0XHRcIjpob3ZlclwiOiB7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogMHhlMmUyZTIsXHJcblx0XHR9LFxyXG5cdFx0XCI6Zm9jdXNcIjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4ZTJlMmUyLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBbMSwgXCJzb2xpZFwiLCAweGEyYTJhMl0sXHJcblx0XHR9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURpYWxvZ09wdGlvbnMgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9wdGlvbnMgdGhhdCBjb2ZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgdGhlIERpYWxvZ1xyXG4gKiBvYmplY3QuIFRoZXkgYXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IgdG8gdGhlIFtbRGlhbG9nXV0gY2xhc3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ09wdGlvbnM8VFN0eWxlcyBleHRlbmRzIElEaWFsb2dTdHlsZXMgPSBJRGlhbG9nU3R5bGVzPiBleHRlbmRzIElQb3B1cE9wdGlvbnM8VFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGNhcHRpb24gc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQ2FwdGlvblN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYm9keSBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCb2R5U3R5bGVDbGFzcz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBidXR0b24gYmFyIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbkJhclN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYnV0dG9ucy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQnV0dG9uU3R5bGVDbGFzcz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGlhbG9nIGNsYXNzIGlzIGEgcG9wdXAgdGhhdCBkaXZpZGVzIHRoZSBwb3B1cCBhcmVhIGludG8gdGhyZWUgc2VjdGlvbnM6IGNhcHRpb24sIGJvZHkgYW5kXHJcbiAqIGJ1dHRvbiBiYXIuIFRoZSBjYXB0aW9uIGFyZWEgY2FuIGJlIHVzZWQgdG8gbW92ZSB0aGUgZGlhbG9nIGFyb3VuZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2c8VFN0eWxlcyBleHRlbmRzIElEaWFsb2dTdHlsZXMgPSBJRGlhbG9nU3R5bGVzLFxyXG4gICAgICAgICAgICBUT3B0aW9ucyBleHRlbmRzIElEaWFsb2dPcHRpb25zPFRTdHlsZXM+ID0gSURpYWxvZ09wdGlvbnM8VFN0eWxlcz4+XHJcbiAgICAgICAgICAgIGV4dGVuZHMgUG9wdXA8VFN0eWxlcyxUT3B0aW9ucz4gaW1wbGVtZW50cyBJRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBib2R5Q29udGVudD86IGFueSwgY2FwdGlvbkNvbnRlbnQ/OiBhbnksIG9wdGlvbnM/OiBUT3B0aW9ucywgLi4uYnV0dG9uczogSURpYWxvZ0J1dHRvbltdKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHdlIHJldXNlIHRoZSBQb3B1cCdzIGNvbnRlbnQgcHJvcGVydHkgZm9yIGRpYWxvZydzIGJvZHlcclxuICAgICAgICBzdXBlciggYm9keUNvbnRlbnQsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhcHRpb25Db250ZW50ID0gY2FwdGlvbkNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGZvciggbGV0IGJ0biBvZiBidXR0b25zKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbiggYnRuKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkQnV0dG9uKCBidG46IElEaWFsb2dCdXR0b24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLnNldCggYnRuLmlkLCBuZXcgRGlhbG9nQnV0dG9uSW5mbyggYnRuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnV0dG9ucyBpbiB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJ1dHRvbkNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmJ1dHRvbnMuc2l6ZTsgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFRTdHlsZXMgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBEZWZhdWx0RGlhbG9nU3R5bGVzIGFzIGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz47XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsTW91bnQoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIG9idGFpbiBjbGFzcyBuYW1lcyBmb3Igb3VyIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0NhcHRpb25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dDYXB0aW9uLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQ2FwdGlvbik7XHJcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0JvZHlTdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCb2R5LCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQm9keSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25CYXJDbGFzc05hbWUgPSBjc3MuY2hvb3NlQ2xhc3MoIHRoaXMub3B0aW9ucz8uZGlhbG9nQnV0dG9uQmFyU3R5bGVDbGFzcyxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcz8uZGlhbG9nQnV0dG9uQmFyLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQnV0dG9uQmFyKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dCdXR0b25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCdXR0b24sIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2dCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcImRpYWxvZ1wiLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsVW5tb3VudCgpXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblx0fTtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FwdGlvbn1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQm9keX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQ2FwdGlvbigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaGF2ZSB0byBzcGVjaWZ5IHRvdWNoLWFjdGlvbiBcIm5vbmVcIiAtIG90aGVyd2lzZSwgcG9pbnRlciBldmVudHMgYXJlIGNhbmNlbGVkIGJ5IHRoZSBicm93c2VyXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuY2FwdGlvbkNsYXNzTmFtZX0gcG9pbnRlcmRvd249e3RoaXMub25DYXB0aW9uUG9pbnRlckRvd259IHN0eWxlPXt7dG91Y2hBY3Rpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIHt0aGlzLmNhcHRpb25Db250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJCb2R5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5ib2R5Q2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge3RoaXMuY29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQnV0dG9ucygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuYnV0dG9uQmFyQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge0FycmF5LmZyb20oIHRoaXMuYnV0dG9ucy52YWx1ZXMoKSkubWFwKCBpbmZvID0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtpbmZvLmJ0bi5pZH0gY2xhc3M9e3RoaXMuYnV0dG9uQ2xhc3NOYW1lfSBjbGljaz17KCkgPT4gdGhpcy5vbkJ1dHRvbkNsaWNrZWQoaW5mbyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLmJ0bi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uQ2FwdGlvblBvaW50ZXJEb3duKCBlOiBQb2ludGVyRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaW5pdGlhdGUgbW92ZSBvbmx5IG9uIHByaW1hcnkgYnV0dG9uIGRvd25cclxuICAgICAgICBpZiAoIWUuaXNQcmltYXJ5KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0TW92ZSggZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdXR0b25DbGlja2VkKCBpbmZvOiBEaWFsb2dCdXR0b25JbmZvKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpbmZvLmJ0bi5jYWxsYmFjaylcclxuICAgICAgICAgICAgaW5mby5idG4uY2FsbGJhY2soIGluZm8uYnRuLmlkKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIGluZm8uYnRuLnJldHVyblZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlclxyXG4gICAgcHJpdmF0ZSBjYXB0aW9uQ29udGVudDogYW55O1xyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlcigzKVxyXG4gICAgcHJpdmF0ZSBidXR0b25zID0gbmV3IE1hcDxhbnksIERpYWxvZ0J1dHRvbkluZm8+KCk7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBjYXB0aW9uXHJcbiAgICBwcml2YXRlIGNhcHRpb25DbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJvZHlcclxuICAgIHByaXZhdGUgYm9keUNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIENsYXNzIG5hbWUgdG8gdXNlIGZvciB0aGUgYnV0dG9uIGJhclxyXG4gICAgcHJpdmF0ZSBidXR0b25CYXJDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbnNcclxuICAgIHByaXZhdGUgYnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEaWFsb2dCdXR0b25JbmZvIGNsYXNzIGNvbnRhaW5zIGN1cnJlbnQgaW5mb3JtdGFpb24gYWJvdXQgYSBzaW5nbGUgYnV0dG9uIGluIHRoZSBkaWFsb2cnc1xyXG4gKiBidXR0b24gYmFyLlxyXG4gKi9cclxuY2xhc3MgRGlhbG9nQnV0dG9uSW5mb1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggYnRuOiBJRGlhbG9nQnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuID0gYnRuO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBidG4uZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBidG46IElEaWFsb2dCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgYnV0dG9uIGlzIGN1cnJlbnRseSBkaXNhYmxlZC5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1lc3NhZ2UgYm94XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gZGVmaW5lcyBjb25zdGFudHMgdG8gaW5kaWNhdGUgc3RhbmRhcmQgYnV0dG9ucyB1c2VkIGluIGRpYWxvZ3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBNc2dCb3hCdXR0b25cclxue1xyXG5cdE5vbmUgPSAweDAsXHJcblx0T0sgPSAweDEsXHJcblx0Q2FuY2VsID0gMHgyLFxyXG5cdFllcyA9IDB4NCxcclxuXHRObyA9IDB4OCxcclxuXHRDbG9zZSA9IDB4MTAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGJ1dHRvbnMgYW5kIGJ1dHRvbiBjb21iaW5hdGlvbnMgZm9yXHJcbiAqIG1lc3NhZ2UgYm94ZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBNc2dCb3hCdXR0b25CYXJcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSBNc2dCb3hCdXR0b24uTm9uZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBDbG9zZSBidXR0b24gKi9cclxuXHRDbG9zZSA9IE1zZ0JveEJ1dHRvbi5DbG9zZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBPSyBidXR0b24gKi9cclxuXHRPSyA9IE1zZ0JveEJ1dHRvbi5PSyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBPSyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRPa0NhbmNlbCA9IE1zZ0JveEJ1dHRvbi5PSyArIE1zZ0JveEJ1dHRvbi5DYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8gPSBNc2dCb3hCdXR0b24uWWVzICsgTXNnQm94QnV0dG9uLk5vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwgPSBNc2dCb3hCdXR0b24uWWVzICsgTXNnQm94QnV0dG9uLk5vICsgTXNnQm94QnV0dG9uLkNhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveFN0eWxlcyBleHRlbmRzIERlZmF1bHREaWFsb2dTdHlsZXNcclxue1xyXG4gICAgY29udGFpbmVyID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIH0pXHJcblxyXG4gICAgaWNvbiA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiM2VtXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgfSlcclxuXHJcbiAgICB0ZXh0ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgcGFkZGluZzogMC41LFxyXG4gICAgICAgIG1pbldpZHRoOiBcIjE1ZW1cIixcclxuICAgICAgICBtYXhXaWR0aDogXCI2MGVtXCIsXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjJlbVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIyMGVtXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nPE1zZ0JveFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5cyBtb2RhbCBtZXNzYWdlIGJveCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGEgcHJvbWlzZSwgd2hpY2ggaXNcclxuICAgICAqIHJlc29sdmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIG9uZSBvZiB0aGUgYnV0dG9ucy4gVGhlIGlkZW50aWZpZXIgb2YgdGhlIGJ1dHRvbiBpcyB1c2VkXHJcbiAgICAgKiBhcyB0aGUgcHJvbWlzZSdzIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCB0byBiZSB1c2VkIGluIHRoZSBtZXNzYWdlIGJveCdzIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBtZXNzYWdlIGJveCdzIGNhcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gYnV0dG9ucyBJZGVudGlmaWVyIG9mIGEgYnV0dG9uIG90IGJ1dHRvbiBjb21iaW5hdGlvbiB0byBiZSBkaXNwbGF5ZWQuXHJcbiAgICAgKiBAcGFyYW0gaWNvbiBPcHRpb25hbCBpZGVudGlmaWVyIG9mIHRoZSBpY29uIHRvIGJlIGRpc3BsYXllZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBidXR0b24gY2xpY2tlZCBieSB0aGUgdXNlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzaG93TW9kYWwoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogTXNnQm94QnV0dG9uQmFyID0gTXNnQm94QnV0dG9uQmFyLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSk6IFByb21pc2U8TXNnQm94QnV0dG9uPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBhbnksIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25CYXIgPSBNc2dCb3hCdXR0b25CYXIuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtZXNzYWdlLCB0aXRsZSwgeyBzdHlsZXM6IE1zZ0JveFN0eWxlcyB9KTtcclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCBidXR0b25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlckJvZHkoKTogYW55XHJcblx0e1xyXG4gICAgICAgIGxldCB7IGNoYXIsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblxyXG4gICAgICAgIC8vIHdlIGFyZSB1c2luZyB0aGlzLm9wdGlvbmFsU3R5bGVzIGJlY2F1c2Ugd2UgZXhwbGljaXRseSBwYXNzIG91ciBzdHlsZXMgaW4gdGhlIG9wdGlvbnNcclxuICAgICAgICAvLyBwYXJhbWV0ZXIgb2YgdGhlIERpYWxvZyBjb25zdHJ1Y3Rvci5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtjaGFyICYmXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy5pY29ufSBzdHlsZT17e2NvbG9yfX0+e2NoYXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IE1zZ0JveFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8TXNnQm94U3R5bGVzPlxyXG5cdHtcclxuICAgICAgICByZXR1cm4gTXNnQm94U3R5bGVzO1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlIHdoZW4gY2xvc2luZyB0aGUgcG9wdXAgYWZ0ZXIgdGhlXHJcbiAgICAgKiB1c2VyIHByZXNzZWQgdGhlIEVzYyBrZXkuIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHBvcHVwIGRvZXNuJ3QgY2xvc2VcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXRSZXR1cm5WYWx1ZUZvckVzY2FwZUtleSgpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoZSBvcHRpb25zIGlmIGRlZmluZWQ7IG90aGVyd2lzZSwgaXRcclxuICAgICAgICAvLyByZXR1cm5zIE1zZ0JveEJ1dHRvbi5DbG9zZSBpZiBubyBidXR0b25zIGFyZSBkZWZpbmVkOyBvdGhlcndpc2UsIGl0IHJldHVybnMgdW5kZWZpbmVkLFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHRoZSBtZXNzYWdlIGJveCB3aWxsIG5vdCBjbG9zZS5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZSAhPSBudWxsXHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmVzY2FwZVJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIDogdGhpcy5idXR0b25Db3VudCA9PT0gMCA/IE1zZ0JveEJ1dHRvbi5DbG9zZSA6IHVuZGVmaW5lZDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25zKCBidXR0b25zOiBNc2dCb3hCdXR0b25CYXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBidXR0b25zKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5DbG9zZTpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDbG9zZVwiLCBNc2dCb3hCdXR0b24uQ2xvc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25CYXIuT0s6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgTXNnQm94QnV0dG9uLk9LKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9uQmFyLk9rQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIE1zZ0JveEJ1dHRvbi5PSyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIE1zZ0JveEJ1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25CYXIuWWVzTm86XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIE1zZ0JveEJ1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIE1zZ0JveEJ1dHRvbi5Obyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5ZZXNOb0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgTXNnQm94QnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgTXNnQm94QnV0dG9uLk5vKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgTXNnQm94QnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHN5bWJvbCBhbmQgY29sb3IgZm9yIGRpc3BsYXlpbmcgdGhlIGljb24uXHJcblx0cHJpdmF0ZSBnZXRJY29uQ2xhc3NBbmRDb2xvcigpOiB7IGNoYXI/OiBzdHJpbmcsIGNvbG9yPzogY3NzLkNzc0NvbG9yIH1cclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuaWNvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkluZm86IHJldHVybiB7IGNoYXI6IFwiSVwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjaGFyOiBcIj9cIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uV2FybmluZzogcmV0dXJuIHsgY2hhcjogXCIhXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5FcnJvcjogcmV0dXJuIHsgY2hhcjogXCJYXCIsIGNvbG9yOiBcInJlZFwiIH07XHJcblxyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IE1zZ0JveEJ1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbih7IGlkOiBrZXksIGNvbnRlbnQ6IHRleHQsIHJldHVyblZhbHVlOiBrZXkgfSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9ncmVzcyBib3hcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHN0eWxlcyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgUG9wdXAgaWYgc3R5bGVzIGFyZSBub3Qgc3BlY2lmaWVkIHVzaW5nIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCb3hTdHlsZXMgZXh0ZW5kcyBEZWZhdWx0RGlhbG9nU3R5bGVzXHJcbntcclxuICAgIGNvbnRhaW5lciA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHdpZHRoOiBcIjMwcmVtXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjVyZW1cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJcclxuICAgIH0pXHJcblxyXG4gICAgcHJvZ3Jlc3MgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICB3aWR0aDogXCIyMHJlbVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxcmVtXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjFyZW1cIlxyXG4gICAgfSlcclxuXHJcbiAgICB0ZXh0ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcGFyZW50PzogY3NzLlN0eWxlRGVmaW5pdGlvbilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nQnV0dG9uQmFyLnNldFByb3AoIFwianVzdGlmeUNvbnRlbnRcIiwgXCJjZW50ZXJcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFByb2dyZXNzQm94IGNsYXNzIGlzIGEgZGlhbG9nIHRoYXQgZGlzcGxheXMgYSBwcm9ncmVzcyBpbmRpY2F0b3IsIGEgdGV4dCBhbmQgYW4gb3B0aW9uYWxcclxuICogQ2FuY2VsIGJ1dHRvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JveCBleHRlbmRzIERpYWxvZzxQcm9ncmVzc0JveFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5cyB0aGUgbW9kYWwgcHJvZ3Jlc3MgYm94IHdpdGggdGhlIGdpdmVuIGNvbnRlbnQgYW5kIHRpdGxlLCB3aGljaCBpcyBkaXNwbGF5ZWQgdW50aWxcclxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGlzIHNldHRsZWQuIFRoZSBkZWxheU1pbGxpc2Vjb25kcyBwYXJhbWV0ZXIgY29udHJvbHMgd2hldGhlciB0aGUgcHJvZ3Jlc3NcclxuICAgICAqIGJveCBpcyBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkgb3IgaXMgZGVsYXllZC4gSWYgdGhlIGlucHV0IHByb21pc2UgaXMgc2V0dGxlZCBiZWZvcmUgdGhlXHJcbiAgICAgKiBkZWxheSBleHBpcmVzLCB0aGUgcHJvZ3Jlc3MgYm94IGlzIG5vdCBkaXNwbGF5ZWQgYXQgYWxsLlxyXG4gICAgICogQHBhcmFtIHByb21pc2UgUHJvbWlzZSB0byBtb25pdG9yIC0gdGhlIHByb2dyZXNzIGJveCBpcyBkaXNwbGF5ZWQgdW50aWwgdGhpcyBwcm9taXMgaXMgc2V0dGxlZC5cclxuICAgICAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gYmUgdXNlZCBpbiB0aGUgcHJvZ3Jlc3MgYm94J3MgYm9keS5cclxuICAgICAqIEBwYXJhbSB0aXRsZSBDb250ZW50IHRvIGRpc3BsYXkgaW4gdGhlIHByb2dyZXNzIGJveCdzIGNhcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGVsYXlNaWxsaXNlY29uZHMgRGVsYXkgaW4gbWlsbGlzZWNvbmRzIHVudGlsIHdoaWNoIHRoZSBwcm9ncmVzcyBib3ggaXNuJ3QgZGlzcGxheWVkLlxyXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgNzUwbXMuIFRvIGRpc3BsYXkgdGhlIHByb2dyZXNzIGJveCBpbW1lZGlhdGVseSwgc2V0IGl0IHRvIDAuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIGlzIHJlc29sdmVkIG90IHJlamVjdGVkIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGlucHV0IHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2hvd1VudGlsKCBwcm9taXNlOiBQcm9taXNlPGFueT4sIGNvbnRlbnQ6IGFueSwgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICAgICAgZGVsYXlNaWxsaXNlY29uZHM6IG51bWJlciA9IDc1MCk6IFByb21pc2U8YW55PlxyXG5cdHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCb3goIGNvbnRlbnQsIHRpdGxlKTtcclxuICAgICAgICBwcm9ncmVzcy5zaG93TW9kYWxXaXRoRGVsYXkoIGRlbGF5TWlsbGlzZWNvbmRzKTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9ncmVzcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbnRlbnQ/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBjYW5jZWxSZXR1cm5WYWx1ZT86IGFueSlcclxuXHR7XHJcblx0XHRzdXBlciggY29udGVudCwgdGl0bGUsIHsgc3R5bGVzOiBQcm9ncmVzc0JveFN0eWxlcyB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbmNlbFJldHVyblZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uKHsgaWQ6IDEsIGNvbnRlbnQ6IFwiQ2FuY2VsXCIsIHJldHVyblZhbHVlOiBjYW5jZWxSZXR1cm5WYWx1ZSB9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYXRlcyBkaXNwbGF5aW5nIGEgcHJvZ3Jlc3MgYm94IGJ1dCBkb2Vzbid0IHJlYWxseSBjcmVhdGUgaXQgdW50aWwgdGhlIGdpdmVuIHRpbWVvdXRcclxuICAgICAqIGV4cGlyZXMuIElmIHRoZSBbW2Nsb3NlXV0gbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHRpbWVvdXQgZXhwaXJlcywgdGhlIHBvcHVwIGlzbid0XHJcbiAgICAgKiBjcmVhdGVkIGF0IGFsbC4gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRoZSBwcm9ncmVzcyB0byByZWZsZWN0IG11bHRpcGxlIG9wZXJhdGlvbnNcclxuICAgICAqIGJ1dCBkb24ndCBzaG93IGl0IGlmIHRoZSBvcGVyYXRpb25zIGZpbmlzaCBxdWlja2x5IGVub3VnaCwgZm9yIGV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogbGV0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzKCk7XHJcbiAgICAgKiBwcm9ncmVzcy5zaG93TW9kYWxXaXRoRGVsYXkoIDEwMDApO1xyXG4gICAgICogcHJvZ3Jlc3Muc2V0Q29udGVudCggXCJGaXJzdCBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuLi5cIilcclxuICAgICAqIHBlcmZvcm1GaXJzdE9wZXJhdGlvbigpO1xyXG4gICAgICogcHJvZ3Jlc3Muc2V0Q29udGVudCggXCJTZWNvbmQgb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLi4uXCIpXHJcbiAgICAgKiBwZXJmb3JtU2Vjb25kT3BlcmF0aW9uKCk7XHJcbiAgICAgKiBwcm9ncmVzcy5jbG9zZSgpO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TW9kYWxXaXRoRGVsYXkoIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheUhhbmRsZSA9IHNldFRpbWVvdXQoICgpID0+IHRoaXMuc2hvd05vdygpLCBkZWxheU1pbGxpc2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIHBvcHVwIGFuZCBwYXNzZXMgYSB2YWx1ZSB0byBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlLiBGb3IgdGhlIG1vZGFsIHBvcHVwcyxcclxuICAgICAqIHRoaXMgdmFsdWUgd2lsbCBiZSB0aGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIHNob3dNb2RhbCgpIG1ldGhvZC5cclxuICAgICAqIEZvciBtb2RlbGVzcyBwb3B1cHMsIHRoaXMgdmFsdWUgd2lsbCBiZSBhdmFpbGFibGUgYXMgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIHJldFZhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoIHJldFZhbD86IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxheUhhbmRsZSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuZGVsYXlIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5SGFuZGxlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLmNsb3NlKCByZXRWYWwpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJCb2R5KCk6IGFueVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBhcmUgdXNpbmcgdGhpcy5vcHRpb25hbFN0eWxlcyBiZWNhdXNlIHdlIGV4cGxpY2l0bHkgcGFzcyBvdXIgc3R5bGVzIGluIHRoZSBvcHRpb25zXHJcbiAgICAgICAgLy8gcGFyYW1ldGVyIG9mIHRoZSBEaWFsb2cgY29uc3RydWN0b3IuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMucHJvZ3Jlc3N9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFByb2dyZXNzQm94U3R5bGVzIHwgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxQcm9ncmVzc0JveFN0eWxlcz5cclxuXHR7XHJcbiAgICAgICAgcmV0dXJuIFByb2dyZXNzQm94U3R5bGVzO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dOb3coKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXlIYW5kbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgb2YgdGhlIHNldFRpbWVvdXQgY2FsbCB3aGVuIG9wZW5laW5nIHRoZSBwb3B1cCB3aXRoIGRlbGF5LlxyXG4gICAgcHJpdmF0ZSBkZWxheUhhbmRsZSA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJQ2xhc3NDb21wVk4sIElDb21wb25lbnQsIFVwZGF0ZVN0cmF0ZWd5fSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Y3JlYXRlV2F0Y2hlciwgSVdhdGNoZXJ9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgQ29tcEJhc2VWTiBpcyBhIGJhc2UgY2xhc3MgZm9yIEluc3RhbmNlVk4gYW5kIENsYXNzVk4uIEl0IHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5XHJcbi8vIGluIHRlcm1zIG9mIHVwZGF0ZSByZXF1ZXN0cyBhbmQgbGlmZWN5Y2xlIG1hbmFnZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3NDb21wVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJQ2xhc3NDb21wVk5cclxue1xyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwdWJsaWMgY29tcDogSUNvbXBvbmVudDtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1cGRhdGVTdHJhdGVneSgpOiBVcGRhdGVTdHJhdGVneVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZ2V0VXBkYXRlU3RyYXRlZ3kgPyB0aGlzLmNvbXAuZ2V0VXBkYXRlU3RyYXRlZ3koKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAodGhpcy5jb21wID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcInJlbmRlcigpIHdhcyBjYWxsZWQgb24gdW5tb3VudGVkIGNvbXBvbmVudC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyByZW5kZXIoKSBvbiBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLnJlbmRlcldhdGNoZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAudm4gPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBkb24ndCBuZWVkIHRyeS9jYXRjaCBiZWNhdXNlIGl0IHdpbGwgYmUgY2F1Z2h0IHVwIHRoZSBjaGFpblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5jb21wLnJlbmRlciwgdGhpcy5yZXF1ZXN0VXBkYXRlLCB0aGlzLmNvbXAsIHRoaXMpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcC53aWxsVW5tb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdHJ5L2NhdGNoIGJ1dCBvbmx5IHRvIGxvZ1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBpbiB3aWxsVW5tb3VudCBvZiBjb21wb25lbnQgJyR7dGhpcy5uYW1lfSdgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHRoaXMuY29tcC52biA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY29tcCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgZGlkTW91bnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXAuZGlkTW91bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBuZWVkIHRyeS9jYXRjaCBidXQgb25seSB0byBsb2dcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC5kaWRNb3VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gaW4gZGlkTW91bnQgb2YgY29tcG9uZW50ICcke3RoaXMubmFtZX0nYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55XHJcbiAgICAvLyB0cmlnZ2VyIG9iamVjdHMgYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZVxyXG4gICAgLy8gdGh1cyB0cmlnZ2VycmluZyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSByZW5kZXJXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1N0eWxlc2V0LCBzZXRFbGVtZW50U3R5bGUsIFNjaGVkdWxlclR5cGUsIGRpZmZTdHlsZXNldHMsIFN0cmluZ1N0eWxlc2V0LCBzZXRFbGVtZW50U3RyaW5nU3R5bGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge0lDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3N9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCI7XHJcbi8vLyAjZW5kaWZcclxuOyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLiAqL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLlxyXG4gKiAgIC0gbnVsbCBhbmQgdW5kZWZpbmVkIGFyZSBjb252ZXJ0ZWQgdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gKiAgIC0gYXJyYXlzIGFyZSBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIHRoZSBlbGVtZW50cyBhbmQgc2VwYXJhdGluZ1xyXG4gKiAgICAgdGhlbSB3aXRoIHNwYWNlcy5cclxuICogICAtIGV2ZXJ5dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGUgdG9TdHJpbmcgbWV0aG9kLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHZhbFRvU3RyaW5nKCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKHZhbCA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0ZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiB2YWw7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHRcdHJldHVybiB2YWwubWFwKCBpdGVtID0+IHZhbFRvU3RyaW5nKGl0ZW0pKS5maWx0ZXIoIGl0ZW0gPT4gISFpdGVtKS5qb2luKFwiIFwiKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLiBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b21cclxuXHQvLyBhdHRyaWJ1dGVzIGlzIGFkZGVkIHRvIHRoaXMgb2JqZWN0IHdoZW4gdGhlIHJlZ2lzdGVyUHJvcGVydHkgbWV0aG9kIGlzIGNhbGxlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRzdHlsZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdHZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmVmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZVZhbHVlUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRjaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdENoZWNrZWQ6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRDaGVja2VkUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cclxuXHRcdC8vIGV2ZW50c1xyXG5cdFx0YWJvcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25pdGVyYXRpb246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhdXhjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ymx1cjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5dGhyb3VnaDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xvc2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvbnRleHRtZW51OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjdWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRibGNsaWNrOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdC8vZHJhZ2V4aXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ292ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJvcDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHVyYXRpb25jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVtcHRpZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVuZGVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Zm9jdXM6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGdvdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRpbnB1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW52YWxpZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5ZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5cHJlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRkYXRhOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRtZXRhZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb3N0cG9pbnRlcmNhcHR1cmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdG1vdXNlbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZW1vdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNldXA6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBhdXNlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5aW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmVudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3ZlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcnVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwcm9ncmVzczogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmF0ZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmVzZXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2l6ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Nyb2xsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVrZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlZWtpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlbGVjdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3RhbGxlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VibWl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzdXNwZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0aW1ldXBkYXRlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b2dnbGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2htb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9ucnVuOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHZvbHVtZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2FpdGluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2hlZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5lcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y29weTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXN0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBwcm9wVmFsKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBuZXdQcm9wVmFsKSk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHVwZGF0ZVZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIFN0eWxlc2V0IG9iamVjdCBmcm9tIHRoZSBNaW1jc3MgbGlicmFyeS4gSWYgdGhlIG9sZCBhbmQgbmV3IHN0eWxlIHByb3BlcnR5IHZhbHVlcyBhcmUgb2ZcclxuLy8gZGlmZmVyZW50IHR5cGVzIHRoZSBkaWZmIGZ1bmN0aW9uIHJldHVybnMgdGhlIG5ldyBzdHlsZSB2YWx1ZS4gSWYgYm90aCBhcmUgb2YgdGhlIHN0cmluZyB0eXBlLFxyXG4vLyB0aGVuIHRoZSBuZXcgc3RyaW5nIHZhbHVlIGlzIHJldHVybmVkLiBJZiBib3RoIGFyZSBvZiB0aGUgQ1NTU3R5bGVEZWNsYXJhdGlvbiB0eXBlLCB0aGVuIGFuXHJcbi8vIG9iamVjdCBpcyByZXR1cm5lZCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gc3R5bGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgY2hhbmdlZC4gRm9yIHVwZGF0ZWRcclxuLy8gaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgZnJvbSB0aGUgbmV3IHN0eWxlIHZhbHVlOyBmb3IgcmVtb3ZlZCBpdGVtcywgdGhlIGtleSB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgcHJvcFZhbCwgU2NoZWR1bGVyVHlwZS5TeW5jKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlN0eWxlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogU3R5bGVzZXQsIG5ld1Byb3BWYWw6IFN0eWxlc2V0KTogYW55XHJcbntcclxuXHRsZXQgcmVzID0gZGlmZlN0eWxlc2V0cyggb2xkUHJvcFZhbCwgbmV3UHJvcFZhbCk7XHJcblxyXG5cdC8vIHdlIGhhdmUgdG8gcmV0dXJuIHVuZGVmaW5lZCBiZWNhdXNlIG51bGwgaXMgY29uc2lkZXJlZCBhIHZhbGlkIHVwZGF0ZSB2YWx1ZVxyXG5cdHJldHVybiByZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJlcztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCk6IHZvaWRcclxue1xyXG5cdHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCB1cGRhdGVWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgSUVsbVZOLCBWTlR5cGUsIHNldFJlZiwgRXZlbnRGdW5jVHlwZSwgVXBkYXRlU3RyYXRlZ3ksIFJlZlByb3BUeXBlLCBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlclxyXG59IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtcclxuICAgIFZOQmFzZSwgRE4sIFZOLCBWTlVwZGF0ZURpc3AsIHNfZGVlcENvbXBhcmUsIFByb3BJbmZvLCBQcm9wVHlwZSxcclxuICAgIEVsbUF0dHIsIEN1c3RvbUF0dHJQcm9wSW5mbywgQXR0clByb3BJbmZvLFxyXG4gICAgRXZlbnRQcm9wSW5mb30gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVsbVZOXHJcbntcclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuIFRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkIHdoZW4gdGhlIG5vZGUgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdFxyXG5cdC8vIHRpbWUuXHJcblx0cHVibGljIGVsbTogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBub3Qgd2UgbmVlZCB0byBjaGVjayB0aGUgbmFtZXNwYWNlVVJJIG9mIHRoZSBwYXJlbnRcclxuXHQvLyAoYW5jaG9yZSkgRE9NIG5vZGUuXHJcblx0cHVibGljIGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0YWdOYW1lOiBzdHJpbmcsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5FbG07XHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBrZXkgcHJvcGVydHkuIElmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90XHJcblx0XHRcdC8vIHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdFx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuRWxtOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHRcdC8vIGV4cGxpY2l0bHkgcmVtb3ZlZCwgd2UgZG8gaXQgdW5kZXIgdGhlIFJFTU9WRV9FVkVOVF9MSVNURU5FUlMgbWFjcm8gKHRoYXQgaXMsIHdlXHJcblx0XHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRzKCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gdGVybWluYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMucmVtb3ZlQ3VzdG9tQXR0cnMoIHRydWUpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwXHJcblx0XHR0aGlzLmVsbSA9IG51bGw7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhpcyBpcyB0aGUgc2FtZSB0eXBlIG9mIGVsZW1lbnQ7IHRoYXQgaXMsIGl0IGhhcyB0aGUgc2FtZVxyXG5cdFx0Ly8gbmFtZS5cclxuXHRcdHJldHVybiB0aGlzLmVsbU5hbWUgPT09IChuZXdWTiBhcyBFbG1WTikuZWxtTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIG5ldyBwcm9wcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgb25lc1xyXG5cdFx0bGV0IHNob3VsZENvbW1pdCA9ICFzX2RlZXBDb21wYXJlKCB0aGlzLnByb3BzLCAobmV3Vk4gYXMgRWxtVk4pLnByb3BzKTtcclxuXHJcblx0XHQvLyByZW5kZXIgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgZWl0aGVyIG9sZCBvciBuZXcgbm9kZSBoYXMgY2hpbGRyZW5cclxuXHRcdGxldCBzaG91bGRSZW5kZXIgPSB0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fFxyXG5cdFx0XHRcdFx0KG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbiAmJiAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBwcm9wcyBhbmQgY2hpbGRyZW5cclxuXHRcdHRoaXMucHJvcHMgPSAobmV3Vk4gYXMgRWxtVk4pLnByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW47XHJcblxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0LCBzaG91bGRSZW5kZXIgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRuZXdFbG1WTi5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdFbG1WTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uXHJcblx0XHRcdHRoaXMucmVmID0gbmV3RWxtVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwgfHwgcHJvcFZhbCA9PT0gZmFsc2UpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQsIG51bGwgYW5kIGZhbHNlXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwidXBkYXRlU3RyYXRlZ3lcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHVwZGF0ZVN0cmF0ZWd5IHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0XHQvLyBvciBjdXN0b20gYXR0cmlidXRlKS4gTm90ZSB0aGF0IGdldFByb3BlcnR5SW5mbyBtYXkgcmV0dXJuIG51bGwgb25seSBmb3IgcmVndWxhclxyXG5cdFx0XHRcdC8vIGF0dHJpYnV0ZXMuXHJcblx0XHRcdFx0cHJvcEluZm8gPSBFbG1BdHRyLmdldFByb3BlcnR5SW5mbyggcHJvcE5hbWUpO1xyXG5cdFx0XHRcdHByb3BUeXBlID0gcHJvcEluZm8gPyBwcm9wSW5mby50eXBlIDogUHJvcFR5cGUuQXR0cjtcclxuXHRcdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBldmVudEluZm8gPSBnZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRJbmZvKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzID0ge31cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgY3VzdG9tZSBhdHRyaWJ1dGVzIHZhbHVlLiBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBsYXRlci5cclxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBET00gYXR0cmlidXRlcyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnRkID0gdGhpcy5hdHRyc1tuYW1lXTtcclxuXHRcdFx0RWxtQXR0ci5zZXRBdHRyKCB0aGlzLmVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzID8gbmV3QXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdSVEQgfHwgIW5ld1JURC52YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHRcdC8vIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGF0dHJpYnV0ZXM7IGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQXR0cnMgJiYgKG5hbWUgaW4gb2xkQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0cHJpdmF0ZSByZW1vdmVFdmVudHMoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0V2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRFdmVudHMgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEV2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkRXZlbnQgPSBvbGRFdmVudHNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzID8gbmV3RXZlbnRzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3RXZlbnQpXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkRXZlbnQsIG5ld0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0V2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkRXZlbnRzICYmIChuYW1lIGluIG9sZEV2ZW50cykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgbmV3RXZlbnRzW25hbWVdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3RXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkRXZlbnQ6IEV2ZW50UnVuVGltZURhdGEsIG5ld0V2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGRvdWJsZS1lcXVhbC1zaWduIGZvciB1c2VDYXB0dXJlIGlzIG9uIHB1cnBvc2UsIGJlY2F1c2UgdXNlQ2FwdHVyZSBjYW4gYmUgdW5kZWZpbmVkIG9yIGJvb2xlYW5cclxuXHRcdGlmIChvbGRFdmVudC5vcmdGdW5jID09PSBuZXdFdmVudC5vcmdGdW5jICYmXHJcblx0XHRcdG9sZEV2ZW50LnRoYXQgPT09IG5ld0V2ZW50LnRoYXQgJiZcclxuXHRcdFx0b2xkRXZlbnQudXNlQ2FwdHVyZSA9PSBuZXdFdmVudC51c2VDYXB0dXJlKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gb2xkRXZlbnQud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1vdmUgb2xkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEV2ZW50LndyYXBwZXIsIG9sZEV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIG5ldyB3cmFwcGVyIGFuZCBhZGQgaXQgYXMgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBuZXdFdmVudCk7XHJcblx0XHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0V2ZW50LndyYXBwZXIsIG5ld0V2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lci4gVGhlIHdyYXBwZXIgaXMgYm91bmQgdG9cclxuXHQvLyB0aGUgaW5zdGFuY2Ugb2YgRWxtVk4gYW5kIHRodXMgY2FuIGludGVyY2VwdCBleGNlcHRpb25zIGFuZCBwcm9jZXNzIHRoZW0gdXNpbmcgdGhlIHN0YW5kYXJkXHJcblx0Ly8gZXJyb3Igc2VydmljZS4gVW5sZXNzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBpcyBhbHJlYWR5IGEgYm91bmQgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkXHJcblx0Ly8gd2l0aCBcInRoaXNcIiBzZXQgdG8gZWl0aGVyIHRoZSBcImV2ZW50LnRoYXRcIiBvYmplY3Qgb3IsIGlmIHRoZSBsYXR0ZXIgaXMgdW5kZWZpbmVkLCB0byB0aGVcclxuXHQvLyBcImNyZWF0b3JcIiBvYmplY3QsIHdoaWNoIGlzIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoZSBlbGVtZW50IGkgaXRzIHJlbmRlclxyXG5cdC8vIG1ldGhvZC5cclxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBFdmVudEZ1bmNUeXBlPEV2ZW50PlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYywgZXZlbnQudGhhdCA/IGV2ZW50LnRoYXQgOiB0aGlzLmNyZWF0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBjcmVhdGUgYW5kIGluaXRpYWxpemUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IGN1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIGN1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGlzUmVtb3ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbUF0dHJzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQ3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBvbGRDdXN0b21BdHRyID0gb2xkQ3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29uc3QgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzID8gbmV3Q3VzdG9tQXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdDdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgY3VzdG9tIHByb3BlcnR5IGFuZCByZW1lbWJlciB0aGUgbmV3IHZhbHVlXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnVwZGF0ZSggbmV3Q3VzdG9tQXR0ci52YWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHVwZGF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBuZXdDdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBuZXdDdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IGRlZmluaW5nIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0cHVibGljIHVwZGF0ZVN0cmF0ZWd5OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gQXJyYXkgb2YgY2hpbGRyZW4gb2JqZWN0cy5cclxuXHRwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IFJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IEV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgd2lsbCBiZSByZWZlcmVuY2VkIGJ5IFwidGhpc1wiIHdpdGhpbiB0aGUgaW52b2tlZCBmdW5jdGlvblxyXG5cdHRoYXQ/OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZT86IGJvb2xlYW47XHJcblxyXG5cdC8vIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3ZSBjcmVhdGUgYW5kIGJpbmQgdG8gb3VyIG5vZGUgYW5kIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gV2UgbmVlZFxyXG5cdC8vIHRoaXMgd3JhcHBlciBpbiBvcmRlciB0byBjYXRjaCBleGNlcHRpb24gaW4gdGhlIGNhbGxiYWNrIGFuZCBwYXNzIHRoZW0gb24gdG8gYW4gZXJyb3JcclxuXHQvLyBoYW5kbGluZyBzZXJ2aWNlLiBUaGUgd3JhcHBlciBpcyBtYXJrZWQgb3B0aW9uYWwgYmVjYXVzZSBpdCBpcyBjcmVhdGVkIG9ubHkgaWYgYSBuZXdcclxuXHQvLyBldmVudCBsaXN0ZW5lciBpcyBhZGRlZDsgdGhhdCBpcywgaWYgZHVyaW5nIHVwZGF0ZSwgdGhlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGlzIHRoZVxyXG5cdC8vIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVyIGJlY2F1c2UgdGhlIG9sZCBvbmUgd2lsbCBiZSB1c2VkLlxyXG5cdHdyYXBwZXI/OiAgRXZlbnRGdW5jVHlwZTxFdmVudD47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBjdXN0b20gcHJvcGVydHkuXHJcbmludGVyZmFjZSBDeXN0b21BdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgY3VzdG9tIGF0dHJpYnV0ZSAtIGNhbm5vdCBiZSBudWxsXHJcblx0aW5mbzogQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBDdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG5cdHZhbDogYW55O1xyXG5cclxuXHQvLyBIYW5kbGVyIG9iamVjdCB0aGF0IGtub3dzIHRvIGRlYWwgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXHJcblx0aGFuZGxlcjogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBFdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtSW5mbyB0eXBlIGRlZmluZXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBTVkcgZWxlbWVudC4gVGhpc1xyXG4vLyBpbmZvcm1hdGlvbiBjYW4gYmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuLy9cdC0gc3RyaW5nIC0gYWN0dWFsIG5hbWUgdG8gdXNlIGZvciB0aGUgZWxlbWVudC4gU29tZSBTVkcgZWxlbWVudHMgaGF2ZSBuYW1lcyB0aGF0IGNhbm5vdCBiZSB1c2VkXHJcbi8vXHRcdGluIEpYIGRpcmVjdGx5IChlLmcuIGJlY2F1c2Ugb2YgaHlwaGVuIGxpa2UgaW4gXCJjb2xvci1wcm9maWxlXCIpLiBJbiB0aGlzIGNhc2UgdGhlIHN0cmluZ1xyXG4vL1x0XHR2YWx1ZSB3aWxsIGJlIHRoZSBhY3R1YWwgZWxlbWVudCBuYW1lIHRvIHB1dCBpbnRvIEhUTUwgZG9jdW1lbnQsIHdoaWxlIEpTWCB3aWxsIGJlIHVzaW5nXHJcbi8vXHRcdGEgY2FtZWwtZm9ybWF0dGVkIG5hbWUgKGUuZy4gXCJjb2xvclByb2ZpbGVcIikuXHJcbi8vXHQtIGJvb2xlYW4gLSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyBcImR1YWwtcHVycG9zZVwiOyB0aGF0IGlzLCBlbGVtZW50IHdpdGggdGhpc1xyXG4vL1x0XHRuYW1lIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBIVE1MIG9yIFNWRyBlbGVtZW50LlxyXG4vL1x0LSB0dXBsZSBvZiB0d28gZWxlbWVudHMgLSBzdHJpbmcgYW5kIGJvb2xlYW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWJvdmUgaXRlbXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTdmdFbG1JbmZvID0gYm9vbGVhbiB8IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbXMgY2xhc3MgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIG5hbWVzIHVzZWQgdG8gZGVmaW5lIFNWRyBlbGVtZW50cyBpbiBKU1guIFdoZW5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYW4gZWxlbWVudCwgd2UgbG9va3VwIHRoZSBwcm92aWRlZCB0YWcgbmFtZSBhbmQgaWYgd2UgZmluZCBpdCBpbiB0aGlzIGNsYXNzXHJcbi8vIHdlIHVzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgd2l0aCB0aGUgcHJvcGVyIFNWRyBuYW1lc3BhY2Ugc3RyaW5nLiBWYWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllc1xyXG4vLyBhcmUgU3ZnRWxtSW5mbyB2YWx1ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RnVuY1Byb3h5UHJvcHMsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZSwgc19jdXJyZW50Q2xhc3NDb21wLCBjcmVhdGVXYXRjaGVyLCBWTiwgVk5VcGRhdGVEaXNwLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBjb25uZWN0IGJldHdlZW4gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCB0aGUgVk5zIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxubGV0IHN5bUtleXNUb05vZGVzID0gU3ltYm9sKCBcInN5bUtleXNUb05vZGVzXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBzeW1ib2wgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogRnVuY1Byb3h5UHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gVk5UeXBlLkZ1bmNQcm94eTtcclxuXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgZGF0YSBmcm9tIHRoZSBwcm9wcy4gTm90ZSB0aGF0IGlmIHRoaXNBcmcgaXMgdW5kZWZpbmVkIGl0IHdpbGwgYmUgY2hhbmdlZFxyXG4gICAgICAgIC8vIHRvIHRoZSBub2RlJ3MgY3JlYXRvciBjb21wb25lbnQgdXBvbiBtb3VudGluZ1xyXG5cdFx0dGhpcy5mdW5jID0gcHJvcHMuZnVuYyBhcyAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcblx0XHR0aGlzLnRoaXNBcmcgPSBwcm9wcy50aGlzQXJnO1xyXG5cdFx0dGhpcy5hcmdzID0gcHJvcHMuYXJncztcclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBpZiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJlbmRlclJlcXVpcmVkOyB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uIHByb3h5IGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy50aGlzQXJnLCB0aGlzLmFyZ3MpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuY1dhdGNoZXIoIHRoaXMuYXJncyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICh0aGlzLnRoaXNBcmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpcy5jcmVhdG9yO1xyXG5cclxuXHRcdC8vIGlmIGEga2V5IHdhcyBub3QgcHJvdmlkZWQgd2UgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzQXJnICh3aGljaCBtaWdodCBiZSB0aGUgY3VycmVudFxyXG5cdFx0Ly8gY29tcG9uZW50KSBhcyBhIGtleS4gSWYgdGhpc0FyZyBpcyB1bmRlZmluZWQgZWl0aGVyIHdlIHVzZSB0aGUgZnVuY3Rpb24gaXRzZWxmIGFzIGEga2V5LlxyXG4gICAgICAgIHRoaXMubGlua0tleSA9IHRoaXMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblxyXG5cdFx0dGhpcy5saW5rTm9kZVRvRnVuYygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMudXBkYXRlRnJvbVdhdGNoZXIsIHRoaXMudGhpc0FyZywgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLnVubGlua05vZGVGcm9tRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3QgYW5kIHRoZSBzYW1lIHRoaXNBcmcgcHJvcGVydHlcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IG5ld0Z1bmNQcm94eVZOLmZ1bmMgJiYgdGhpcy50aGlzQXJnID09PSBuZXdGdW5jUHJveHlWTi50aGlzQXJnO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1Byb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5saW5rS2V5ID0gbmV3RnVuY1Byb3h5Vk4ubGlua0tleTtcclxuXHJcblx0XHQvLyB0YWtlIGFyZ3VtZW50cyBmcm9tIHRoZSBuZXcgbm9kZTsgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgXCJ0aGlzQXJnXCIgcmVtYWluIHRoZSBzYW1lLlxyXG5cdFx0dGhpcy5hcmdzID0gbmV3RnVuY1Byb3h5Vk4uYXJncztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBhbHNvIGJlIGNhbGxlZCAtIGJ1dCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSB1c2UgdGhpcyBtZXRob2Qgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZ1wiXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmluZFZOKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55KTogRnVuY1Byb3h5Vk5cclxuXHR7XHJcblx0XHQvLyBpZiB0aGUga2V5IGlzIHVuZGVmaW5lZCwgd2UgdXNlIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmXHJcblx0XHRsZXQgbGlua0tleTogYW55ID0ga2V5IHx8IHRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0ZyYWdtZW50LCBGdW5jQ29tcFR5cGUsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQgeyBWTkJhc2UsIFZOLCBWTlVwZGF0ZURpc3AgfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gRnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiBGdW5jQ29tcFR5cGUsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLmZ1bmMgPSBuZXdGdW5jVk4uZnVuYztcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdHByaXZhdGUgZnVuYzogRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUluZGVwZW5kZW50Q29tcFZOLCBJQ29tcG9uZW50LCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwLCBDbGFzc0NvbXBWTn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIEluc3RhbmNlVk4gaXMgYSBub2RlIHRoYXQgaG9sZHMgYW4gaW5zdGFuY2Ugb2YgYW4gSUNvbXBvbmVudC1pbXBsZW1lbnRpbmcgb2JqZWN0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBJSW5kZXBlbmRlbnRDb21wVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBJQ29tcG9uZW50KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLkluZGVwZW5kZW50Q29tcDtcclxuXHRcdHRoaXMuY29tcCA9IGNvbXA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lID8gdGhpcy5jb21wLmRpc3BsYXlOYW1lIDogdGhpcy5jb21wLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuIFRoZSBpbnN0YW5jZSBvZiBvdXIgY29tcG9uZW50IGlzIHRoZSBrZXkuXHJcblx0cHVibGljIGdldCBrZXkoKTogYW55IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGlmIGl0IGlzIHRoZSBzYW1lIGNvbXBvbmVudCBpbnN0YW5jZSwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xyXG5cdFx0bGV0IG5ld0NvbXAgPSAobmV3Vk4gYXMgSW5kZXBlbmRlbnRDb21wVk4pLmNvbXA7XHJcblx0XHRsZXQgbmVlZHNVcGRhdGluZyA9IHRoaXMuY29tcCAhPT0gbmV3Q29tcDtcclxuXHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50IGluc3RhbmNlcyBhcmUgZGlmZmVyZW50LCB0aGVuIHdlIG5lZWQgdG8gcHJlcGFyZSB0aGUgbmV3IGluc3RhbmNlIGZvclxyXG5cdFx0Ly8gbW91bnRpbmcgYW5kIHRoZSBvbGQgb25lIGZvciB1bm1vdW50aW5nLlxyXG5cdFx0aWYgKG5lZWRzVXBkYXRpbmcpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2lsbFVubW91bnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wID0gbmV3Q29tcDtcclxuXHRcdFx0dGhpcy53aWxsTW91bnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBuZWVkc1VwZGF0aW5nKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTWFuYWdlZENvbXBWTiwgSUNvbXBvbmVudENsYXNzLCBWTlR5cGUsIElDb21wb25lbnQsIHNldFJlZiwgUmVmUHJvcFR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTiwgVk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgSUNvbXBvbmVudDw+IGludGVyZmFjZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBJTWFuYWdlZENvbXBWTlxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHB1YmxpYyBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3MsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5NYW5hZ2VkQ29tcDtcclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmRpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IElDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCggcGFyZW50LCBjcmVhdG9yKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGlzIHRoZSBzYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wQ2xhc3MgPT09IChuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOKS5jb21wQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhXHJcblx0Ly8gVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGluZyBzdWItbm9kZXMgaXMgbmVjZXNzYXJ5IGFuZFxyXG5cdC8vIGZhbHNlIG90aGVyd2lzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0NsYXNzVk4gPSBuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOO1xyXG5cclxuXHRcdC8vIGxldCB0aGUgY29tcG9uZW50IGtub3cgYWJvdXQgdGhlIG5ldyBwcm9wZXJ0aWVzIChpZiBpdCBpcyBpbnRlcmVzdGVkIGluIHRoZW0pXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLmNvbXAuc2hvdWxkVXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNob3VsZFJlbmRlciA9IHRoaXMuY29tcC5zaG91bGRVcGRhdGUoIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3Q2xhc3NWTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBvYmplY3RcclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdDbGFzc1ZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIHNob3VsZFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IFJlZlByb3BUeXBlPGFueT47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtQcm9taXNlUHJveHlQcm9wcywgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBQcm9taXNlUHJveHlQcm9wcywgY2hpbGRyZW4/OiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5Qcm9taXNlUHJveHk7XHJcblx0XHR0aGlzLnByb21pc2UgPSBwcm9wcy5wcm9taXNlO1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gcHJvcHMuZXJyb3JDb250ZW50RnVuYztcclxuXHRcdHRoaXMuY29udGVudCA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkIChzdWNjZXNzZnVsbHkgb3Igbm90KS5cclxuXHRwdWJsaWMgZ2V0IGlzU2V0dGxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvbWlzZSA9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuICAgICAgICAvLyBET00gdHJlZS5cclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcbiAgICAgICAgcHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuICAgICAgICB9XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgcHJvbWlzZSBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLnByb21pc2UgPT09IG5ld1Byb21pc2VQcm94eVZOLnByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdQcm9taXNlUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBuZXdQcm9taXNlUHJveHlWTi5jb250ZW50O1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gbmV3UHJvbWlzZVByb3h5Vk4uZXJyb3JDb250ZW50RnVuYztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYWl0cyBmb3IgdGhlIHByb21pc2UgdG8gc2V0dGxlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBhd2FpdCB0aGlzLnByb21pc2U7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBzdGlsbCBtb3VudGVkLCByZXF1ZXN0IHVwZGF0ZVxyXG5cdFx0XHRpZiAodGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgYWxyZWFkeSB1bm1vdW50ZWQsIGRvIG5vdGhpbmdcclxuXHRcdFx0aWYgKCF0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lcnJvckNvbnRlbnRGdW5jKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5lcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIpO1xyXG5cclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBQcm9taXNlIHRoYXQgdGhpcyBub2RlIHdhdGNoZXMuXHJcblx0cHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8vIENvbnRlbnQgdGhhdCB0aGlzIG5vZGUgZGlzcGxheXMuIEluaXRpYWxseSB0aGlzIGNvbnRlbnQgaXMgc2V0IHRvIHByb3BzLmNoaWxkcmVuLiBXaGVuXHJcblx0Ly8gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQsIHRoZSBjb250ZW50IGlzIHNldCB0byB0aGUgcmVzb2x2ZWQgdmFsdWUuIElmIHRoZSBwcm9taXNlIGlzXHJcblx0Ly8gcmVqZWN0ZWQgYW5kIHRoZSBlcnJvckNvbnRlbnRGdW5jIGlzIGRlZmluZWQsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCBpdHMgcmV0dXJuXHJcblx0Ly8gdmFsdWUgaXMgdXNlZCBhcyBjb250ZW50LlxyXG5cdHByaXZhdGUgY29udGVudD86IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBlcnJvckNvbnRlbnRGdW5jPzogKCBlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIGV4cG9ydCBwdWJsaWNhdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZVxyXG4vLyBzYW1lIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIFNjaGVkdWxlZEZ1bmNUeXBlLCBJQ29tcG9uZW50LCBJVk5vZGUsIFZOVHlwZSwgSUNsYXNzQ29tcFZOLCBGcmFnbWVudCwgRnVuY1Byb3h5LFxyXG4gICAgRnVuY1Byb3h5UHJvcHMsIFByb21pc2VQcm94eSwgSUNvbXBvbmVudENsYXNzLCBGdW5jQ29tcFR5cGVcclxufSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7XHJcbiAgICBWTiwgRE4sIFZOVXBkYXRlRGlzcCwgVk5CYXNlLCBUZXh0Vk4sIEluZGVwZW5kZW50Q29tcFZOLCBQcm9taXNlUHJveHlWTixcclxuICAgIEZ1bmNQcm94eVZOLCBFbG1WTiwgTWFuYWdlZENvbXBWTiwgRnVuY1ZOLCBlbnRlck11dGF0aW9uU2NvcGUsIGV4aXRNdXRhdGlvblNjb3BlXHJcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcbi8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcbi8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcbi8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG4vLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcbi8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG4vL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG4vL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxubGV0IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kXHJcbi8vIHRoZSB2YWx1ZXMgYXJlIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBhZnRlclxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmRcclxuLy8gdGhlIHZhbHVlcyBhcmUgdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IElDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2l2ZW4gbm9kZSBhcyB0aGUgY3VycmVudCBhbmQgaWYgdGhlIG5vZGUgaXMgZm9yIHRoZSBjb21wb25lbnQsIHNldCB0aGUgY3VycmVudFxyXG4gKiBjb21wb25lbnQuIFJldHVybnMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IHdhcyBwcmV2aW91c2x5IHRoZSBjdXJyZW50IG9uZS4gQXMgd2UgcmVjdXJzZSBvdmVyXHJcbiAqIHZpcnR1YWwgbm9kZXMgYW5kIHN1Yi1ub2Rlcywgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIGhhdmUgdGhlIHNfY3VycmVudFZOIGFuZFxyXG4gKiBzX2N1cnJlbnRDbGFzc0NvbXAgdmFyaWFibGVzIHRvIHBvaW50IHRvIHRoZSBub2RlIGFuZCBjb21wb25lbnQgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyYWNrQ3VycmVudFZOKCB2bjogVk4pOiBWTlxyXG57XHJcbiAgICBsZXQgcHJldlZOID0gc19jdXJyZW50Vk47XHJcbiAgICBzX2N1cnJlbnRWTiA9IHZuO1xyXG4gICAgc19jdXJyZW50Q2xhc3NDb21wID0gIXZuID8gbnVsbCA6ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG4gICAgcmV0dXJuIHByZXZWTjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbmNvbnN0IGVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGlzQ2FsbGJhY2sgT2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSB2biBWaXJ0dWFsIG5vZGUgaW4gd2hvc2UgY29udGV4dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cclxuICogQHJldHVybnMgVGhlIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFjay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwQ2FsbGJhY2tXaXRoVk48VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiBUXHJcbntcclxuICAgIC8vIGlmIFwidGhpc1wiIGZvciB0aGUgY2FsbGJhY2sgd2FzIG5vdCBwYXNzZWQgYnV0IHZuIHdhcywgY2hlY2sgd2hldGhlciB0aGUgdm4gaXMgYSBjb21wb25lbnQ7XHJcbiAgICAvLyBpZiB5ZXMsIHVzZSBpdCBhcyBcInRoaXNcIjsgb3RoZXJ3aXNlLCB1c2Ugdm4ncyBjcmVhdG9yIGNvbXBvbmVudC5cclxuICAgIGlmICghdGhpc0NhbGxiYWNrICYmIHZuKVxyXG4gICAgICAgIHRoaXNDYWxsYmFjayA9ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG5cclxuICAgIHJldHVybiBDYWxsYmFja1dyYXBwZXIuYmluZCggdm4sIHRoaXNDYWxsYmFjaywgY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBjYWxsYmFja3MgaW4gb3JkZXIgdG8gaGF2ZSBpdCBleGVjdXRlZCBpbiBhIE1pbWJsXHJcbiAqIGNvbnRleHQuIFRoZSBmdW5jdGlvbiBpcyB1c3VhbGx5IGJvdW5kIHRvIGEgdmlydHVhbCBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlXHJcbiAqIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmUgYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlXHJcbiAqIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpbiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci4gTm90ZSB0aGF0IFwidGhpc1wiXHJcbiAqIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIGZ1bmN0aW9uIHdhcyBzY2hlZHVsZWQgd2l0aG91dCBiZWluZyBpbiB0aGUgY29udGV4dCBvZiBhbnkgdmlydHVhbCBub2RlLlxyXG4gKiBcclxuICogVGhlIHByb3BlciBNaW1ibCBjb250ZXh0IGVzdGFibGlzaGVzIHRoZSBmb2xsb3dpbmc6XHJcbiAqIC0gZXhlY3V0ZXMgaW4gYSBtdXRhdGlvbiBzY29wZSwgc28gdGhhdCBpZiBhbnkgdHJpZ2dlciB2YWxyaWFibGUgaXMgY2hhbmdlZCBkdXJpbmcgdGhlIGV4ZWN1dGlvblxyXG4gKiAgIG9mIHRoZSBjYWxsYmFjaywgd2F0Y2hlcnMgd2lsbCBiZSBvbmx5IG5vdGlmaWVkIGFmdGVyIHRoZSBjYWxsYmFjayBoYXMgZmluaXNoZWQgaXRzIGV4ZWN1dGlvbi5cclxuICogLSBJZiB0aGUgd3JhcHBpbmcgaGFzIGJlZW4gZG9uZSBpbiB0aGUgY29udGV4dCBvZiBhIHZpcnR1YWwgbm9kZSAoZS5nLiBmcm9tIGEgTWltYmwgY29tcG9uZW50KSxcclxuICogICB0aGUgXCJjdXJyZW50IHZpcnR1YWwgbm9kZVwiIGFuZCB0aGUgXCJjdXJyZW50IGNvbXBvbmVudFwiIGFyZSBzZXQgdG8gdGhlIG5vZGUgYW5kIGNvbXBvbmVudCB1bmRlclxyXG4gKiAgIHdoaWNoIHRoZSBjYWxsYmFjayB3YXMgd3JhcHBlZC4gVGhpcyBhbGxvdyBmb3IgcHJvcGVyIEpTWCBleGVjdXRpb24gYW5kIGZvciB1c2luZyB0aGUgTWltYmxcclxuICogICBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20uXHJcbiAqIFxyXG4gKi9cclxuZnVuY3Rpb24gQ2FsbGJhY2tXcmFwcGVyKCk6IGFueVxyXG57XHJcblx0Ly8gcmVtZW1iZXIgdGhlIGN1cnJlbnQgVk4gYW5kIHNldCB0aGUgY3VycmVudCBWTiB0byBiZSB0aGUgVk4gZnJvbSB0aGUgXCJ0aGlzXCIgdmFsdWUuIE5vdGVcclxuXHQvLyB0aGF0IHRoaXMgY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgd3JhcHBpbmcgd2FzIGNyZWF0ZWQgd2l0aG91dCB0aGUgVk4gY29udGV4dC5cclxuICAgIGxldCB2bjogVk4gPSB0aGlzO1xyXG4gICAgbGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKCB2biA/IHZuIDogbnVsbCk7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuICAgICAgICBlbnRlck11dGF0aW9uU2NvcGUoKTtcclxuXHRcdGxldCBbdGhpc09yZ0NhbGxiYWNrLCBvcmdDYWxsYmFjaywgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnQ2FsbGJhY2suYXBwbHkoIHRoaXNPcmdDYWxsYmFjaywgcmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG4gICAgICAgIGxldCBlcnJvclNlcnZpY2UgPSB2bj8uZ2V0U2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG4gICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgIGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCBnZXRWTlBhdGgoIHZuKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcblx0fVxyXG5cdGZpbmFsbHlcclxuXHR7XHJcbiAgICAgICAgZXhpdE11dGF0aW9uU2NvcGUoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdG9yZSBwcmV2aW91cyBjdXJyZW50IFZOXHJcbiAgICAgICAgdHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRjb25zb2xlLndhcm4oIGBVcGRhdGUgcmVxdWVzdGVkIGZvciB2aXJ0dWFsIG5vZGUgJyR7Z2V0Vk5QYXRoKHZuKS5qb2luKFwiLT5cIil9JyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbmNob3IgRE9NIG5vZGVgKVxyXG5cclxuICAgIGFkZE5vZGVUb1NjaGVkdWxlciggdm4pO1xyXG5cclxuXHQvLyB0aGUgdXBkYXRlIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCB0aWNrIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlIGR1cmluZyBhXHJcblx0Ly8gXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uLlxyXG5cdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHMgdGhlIGdpdmVuIG5vZGUgYW5kIHJlbGF0ZWQgaW5mb3JtYXRpb24gaW50byB0aGUgaW50ZXJuYWwgc3RydWN0dXJlcyBzbyB0aGF0IGl0IHdpbGwgYmVcclxuLy8gdXBkYXRlZCBkdXJpbmcgdGhlIG5leHQgTWltYmwgdGljay5cclxuZnVuY3Rpb24gYWRkTm9kZVRvU2NoZWR1bGVyKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0Ly8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIGl0IGNhbGxzIHJlcXVlc3RVcGRhdGUoKS5cclxuXHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0Ly8gaWYgdGhpcyBpcyBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBhbmQgaXQgaGFzIGJlZm9yZVVwZGF0ZSBhbmQvb3IgYWZ0ZXJVcGRhdGUgbWV0aG9kc1xyXG5cdC8vIGltcGxlbWVudGVkLCBzY2hlZHVsZSB0aGVpciBleGVjdXRpb25zLiBOb3RlIHRoYXQgdGhlIFwiYmVmb3JlVXBkYXRlXCIgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIHNjaGVkdWxlZCBpZiB0aGUgY3VycmVudCBzY2hlZHVsZXIgc3RhdGUgaXMgQmVmb3JlVXBkYXRlLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudFxyXG5cdC8vIHdpbCBiZSB1cGRhdGVkIGluIHRoZSBjdXJyZW50IGN5Y2xlIGFuZCB0aGVyZSBpcyBhbHJlYWR5IG5vIHRpbWUgdG8gZXhlY3V0ZSB0aGUgXCJiZWZvcmVcclxuXHQvLyB1cGRhdGVcIiBtZXRob2QuXHJcblx0aWYgKHZuLnR5cGUgPT09IFZOVHlwZS5JbmRlcGVuZGVudENvbXAgfHwgdm4udHlwZSA9PT0gVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBJQ2xhc3NDb21wVk4pLmNvbXA7XHJcblx0XHRpZiAoY29tcC5iZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNldCggY29tcC5iZWZvcmVVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblxyXG5cdFx0aWYgKGNvbXAuYWZ0ZXJVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGNvbXAuYWZ0ZXJVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuLy8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuLFxyXG4gICAgdGhpc0FyZz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiB2b2lkXHJcbntcclxuXHQvLy8gI2lmIERFQlVHXHJcblx0aWYgKCFmdW5jKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIFwiVHJ5aW5nIHRvIHNjaGVkdWxlIHVuZGVmaW5lZCBmdW5jdGlvbiBmb3IgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBmdW5jLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGZ1bmMsIHRoaXNBcmcsIHZuKSk7XHJcblxyXG5cdFx0XHQvLyBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIGFsd2F5cyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgZnJhbWUgZXZlbiBpZiB0aGVcclxuXHRcdFx0Ly8gY2FsbCBpcyBtYWRlIGZyb20gYW5vdGhlciBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbi5cclxuXHRcdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICghc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhpc0FyZywgdm4pKTtcclxuXHJcblx0XHRcdC8vIGFuIFwiYWZ0ZXIgdXBkYXRlXCIgZnVuY3Rpb24gaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlXHJcblx0XHRcdC8vIGVpdGhlciBmcm9tIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uIG9yIGR1cmluZyBhIG5vZGUgdXBkYXRlLlxyXG5cdFx0XHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLlVwZGF0ZSlcclxuXHRcdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5mdW5jdGlvbiBvblNjaGVkdWxlZEZyYW1lKCk6IHZvaWRcclxue1xyXG5cdC8vIGNsZWFyIHRoZSBzY2hlZHVsZWQgZnJhbWUgaGFuZGxlIHNvIHRoYXQgbmV3IHVwZGF0ZSByZXF1ZXN0cyB3aWxsXHJcblx0Ly8gc2NoZWR1bGUgYSBuZXcgZnJhbWUuXHJcblx0c19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IDA7XHJcblxyXG4gICAgZG9NaW1ibGVUaWNrKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjb25jaWxlciBtYWluIGVudHJhbmNlIHBvaW50XHJcbmZ1bmN0aW9uIGRvTWltYmxlVGljaygpOiB2b2lkXHJcbntcclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBiZWZvcmUgdXBkYXRlcywgaXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgbmV4dCBjeWNsZS5cclxuXHRpZiAoc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0aWYgKHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuICAgICAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgICAgICBsZXQgc3RhdHNBbHJlYWR5RXhpc3RlZCA9IERldGFpbGVkU3RhdHMuc3RhdHMgIT0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFzdGF0c0FscmVhZHlFeGlzdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB0aWNrICR7c19jdXJyZW50VGlja306IGApO1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGludGVybmFsIHNldCBvZiBub2RlcyBhbmQgcmUtY3JlYXRlIGl0IHNvIHRoYXQgaXQgaXMgcmVhZHkgZm9yIG5ld1xyXG5cdFx0Ly8gdXBkYXRlIHJlcXVlc3RzLiBBcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBhbmQgcGVyZm9ybSB1cGRhdGVzLlxyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdHBlcmZvcm1Db21taXRQaGFzZSggcGVyZm9ybVJlbmRlclBoYXNlKCBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUpKSk7XHJcblxyXG4gICAgICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgICAgIGlmICghc3RhdHNBbHJlYWR5RXhpc3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQWZ0ZXJVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcbi8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG4vL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcbi8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG4vL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG4vLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuLy8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuZnVuY3Rpb24gYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcbntcclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMzIpO1xyXG5cdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdHtcclxuICAgICAgICAvLyBpdCBjYW4gaGFwcGVuIHRoYXQgd2UgZW5jb3VudGVyIGFscmVhZHkgdW5tb3VudGVkIHZpcnR1YWwgbm9kZXMgLSBpZ25vcmUgdGhlbVxyXG4gICAgICAgIGlmICghdm4uYW5jaG9yRE4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5mdW5jdGlvbiBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcbntcclxuXHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcbiAgICBsZXQgZGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgdm5zIG9mIHZuc0J5RGVwdGgpXHJcblx0e1xyXG4gICAgICAgIC8vIHZuc0J5RGVwdGggaXMgYSBzcGFyc2UgYXJyYXkgc28gaXQgY2FuIGhhdmUgaG9sZXNcclxuICAgICAgICBpZiAoIXZucylcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGZvciggbGV0IHZuIG9mIHZucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciB0aGUgZmxhZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgZm9yIHRoZSBub2RlXHJcbiAgICAgICAgICAgICAgICB2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgY3ljbGUsIGRvbid0IHVwZGF0ZSBpdCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgaWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3AgPSB7IG5ld1ZOOiB2biwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk46IHZufTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWROb2RlKCBkaXNwKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBSb290Vk4gb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHNfY3VycmVudFZOID8gZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkJVRzogdXBkYXRlVmlydHVhbCB0aHJldyBleGNlcHRpb24gYnV0IFN0ZEVycm9ySGFuZGxpbmcgc2VydmljZSB3YXMgbm90IGZvdW5kLlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcbi8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcbmZ1bmN0aW9uIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHRmb3IoIGxldCBkaXNwIG9mIHVwZGF0ZWROb2RlRGlzcHMpXHJcblx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+LCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIHJlbmRlck5ld05vZGUoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyBpZiB3aWxsTW91bnQgZnVuY3Rpb24gaXMgZGVmaW5lZCB3ZSBjYWxsIGl0IHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sXHJcbiAgICAvLyBnb2VzIHRvIGVpdGhlciB0aGUgYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3BcclxuICAgIC8vICh3aGljaCBoYXMgdHJ5L2NhdGNoKS5cclxuICAgIGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoXHJcbiAgICAgICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcbiAgICAgICAgaWYgKHN1Yk5vZGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2UgaGF2ZSBzdWItbm9kZXMsIHdlIG5lZWQgdG8gY3JlYXRlIG5vZGVzIGZvciB0aGVtIGFuZCByZW5kZXIuIElmIG91ciBub2RlXHJcbiAgICAgICAgICAgIC8vIGtub3dzIHRvIGhhbmRsZSBlcnJvcnMsIHdlIGRvIGl0IHVuZGVyIHRyeS9jYXRjaDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9ucyBnbyB0b1xyXG4gICAgICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgICAgIGlmICghdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3I6YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgdGhlIGVycm9yIGFuZCByZS1yZW5kZXI7IHRoZW4gd2UgcmVuZGVyIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwIGluIGFuIGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm4uc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGluayB0aGUgc3ViLW5vZGVzIHdpdGggbmV4dCBhbmQgcHJldiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGxldCBwcmV2Vk46IFZOO1xyXG4gICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2Vk4pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZOLm5leHQgPSBzdm47XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZuLnByZXYgPSBwcmV2Vk47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldlZOID0gc3ZuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB0aGUgc3ViLW5vZGVzXHJcbiAgICAgICAgdm4uc3ViTm9kZXMgPSBzdWJOb2RlcztcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXROZXdOb2RlKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG57XHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIG1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb21taXROZXdOb2RlKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgZGlkTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG4gICAgaWYgKHZuLmRpZE1vdW50KVxyXG4gICAgICAgIHZuLmRpZE1vdW50KCk7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kLCBpZiByZXF1ZXN0ZWQsIHJlY3Vyc2l2ZWx5IG9uIGl0cyBzdWItbm9kZXMuIFRoaXMgZnVuY3Rpb24gaXNcclxuLy8gY2FsbGVkIGZvciBldmVyeSBub2RlIGJlaW5nIGRlc3RydWN0ZWQuIEl0IGlzIGNhbGxlZCBub24tcmVjdXJzaXZlbHkgb24gdGhlIHZpcnR1YWwgbm9kZXMgdGhhdFxyXG4vLyBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gT24gc3VjaCBub2RlcywgdGhlIHVubW91bnQgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgbm9kZSB3aWxsIGJlXHJcbi8vIHByb3Blcmx5IG1hcmtlZCBhcyB1bm1vdW50ZWQuIEZvciB2aXJ0dWFsIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUsIHRoaXNcclxuLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5LiB0aGUgdW5tb3VudCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkIGZvciB0aGVzZSBub2RlcztcclxuLy8gdGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hcmsgdGhlbSBhcyB1bm1vdW50ZWQgaGVyZS5cclxuZnVuY3Rpb24gY2FsbFdpbGxVbm1vdW50KCB2bjogVk4sIHJlY3Vyc2l2ZTogYm9vbGVhbilcclxue1xyXG4gICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgcHJvY2Vzc2VkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG4gICAgLy8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcbiAgICB2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG4gICAgLy8gZmlyc3Qgbm90aWZ5IHN1Yi1ub2RlcyBpZiByZWN1cnNpdmVcclxuICAgIGlmIChyZWN1cnNpdmUgJiYgdm4uc3ViTm9kZXMpXHJcblx0e1xyXG4gICAgICAgIGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gICAgICAgICAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oc3ZuKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxXaWxsVW5tb3VudCggc3ZuLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcbiAgICAgICAgICAgIHZuLnRlcm0oKTtcclxuICAgICAgICAgICAgdm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBub3RpZnkgb3VyIG5vZGVcclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFJlbW92ZWROb2RlKCB2bjogVk4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNpdmVseSB1bm1vdW50IHN1Yi1ub2RlcyBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50O1xyXG4gICAgLy8gaG93ZXZlciwgd2UgbmVlZCB0byBjYWxsIHRoZWlyIHdpbGxVbm1vdW50IG1ldGhvZHMuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIERPTVxyXG4gICAgLy8gbm9kZSwgd2UgbmVlZCB0byBjYWxsIHdpbGxVbm1vdW50IG9ubHkgb24gdGhlIG5vZGUgaXRzZWxmIGJlY2F1c2UgbGF0ZXIgd2Ugd2lsbCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIGl0cyBzdWItbm9kZXMuXHJcbiAgICBjYWxsV2lsbFVubW91bnQoIHZuLCBvd25ETiAhPSBudWxsKTtcclxuXHJcbiAgICAvLyBjYWxsIHVubW91bnQgb24gb3VyIG5vZGUgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgaGFzIGl0cyBvd24gRE4gb3Igbm90XHJcbiAgICBpZiAodm4udW5tb3VudClcclxuICAgIHtcclxuICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG4gICAgICAgIHZuLnVubW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWU7IG90aGVyd2lzZSwgcmVjdXJzZVxyXG4gICAgLy8gaW50byB0aGUgc3ViLW5vZGVzLlxyXG4gICAgaWYgKG93bkROKVxyXG4gICAgICAgIChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuICAgIGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRjb21taXRSZW1vdmVkTm9kZSggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcbiAgICAvLyBtYXJrIHRoZSBub2RlIGFzIHVubW91bnRlZFxyXG5cdHZuLnRlcm0oKTtcclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC5cclxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sIGdvZXMgdG8gZWl0aGVyIHRoZVxyXG4gICAgLy8gYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3AgKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblxyXG5cdC8vIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG5cdGlmIChzdWJOb2RlcylcclxuICAgIHtcclxuICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkU3ViTm9kZXMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZOOiBWTiwgbmV3Vk46IFZOO1xyXG5cdFx0bGV0IHBhcmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pICYmIG9sZFZOLnByZXBhcmVVcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgcHJlcGFyZVVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AudXBkYXRlRGlzcCA9IG9sZFZOLnByZXBhcmVVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0cmVuZGVyVXBkYXRlZE5vZGUoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdHJlbmRlck5ld05vZGUoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGNvbW1pdFJlbW92ZWROb2RlKCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IHRoZSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZyB1cGRhdGVkLiBUaGlzIGlzIGFsd2F5cyB0aGUgb2xkVk4gbWVtYmVyIG9mXHJcblx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGl0IG1pZ2h0IGhhcHBlbiB0aGF0IHRoZSBub2RlIGJlaW5nIHVwZGF0ZWQgd2FzIGFscmVhZHkgZGVsZXRlZCBieSBpdHMgcGFyZW50LiBDaGVja1xyXG5cdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0Ly8gYW5jaG9yIHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2RlcyB0b28uXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblx0bGV0IGFuY2hvckROID0gb3duRE4gIT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIGlmIHRoaXMgdmlydHVhbCBub2RlIGRvZXNuJ3QgZGVmaW5lIGl0cyBvd24gRE9NIG5vZGUgKHRydWUgZm9yIGNvbXBvbmVudHMpLCB3ZSB3aWxsXHJcblx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRsZXQgYmVmb3JlRE4gPSBvd25ETiAhPSBudWxsID8gbnVsbCA6IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2biwgYW5jaG9yRE4pO1xyXG5cclxuXHQvLyByZS1jcmVhdGUgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHR2bi5zdWJOb2RlcyA9IGRpc3Auc3ViTm9kZURpc3BzID8gbmV3IEFycmF5PFZOPihkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVHcm91cHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNvbW1pdE5ld05vZGUoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHR9XHJcblxyXG5cdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdGlmIChuZXh0Vk4pXHJcblx0XHR7XHJcblx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0Vk4gPSBzdm47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG4vLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVzQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggb2xkVk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9IFxyXG57XHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRhY3Rpb24/OiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRvbGRWTj86IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0dXBkYXRlRGlzcD86IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0c3ViTm9kZURpc3BzPzogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXNUb1JlbW92ZT86IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0c3ViTm9kZUdyb3Vwcz86IFZORGlzcEdyb3VwW107XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcbiAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcDogVk5EaXNwLCBuZXdDaGFpbjogVk5bXSk6IHZvaWRcclxue1xyXG4gICAgbGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuICAgIGxldCBvbGRDaGFpbiA9IGRpc3Aub2xkVk4uc3ViTm9kZXM7XHJcbiAgICBsZXQgb2xkTGVuID0gb2xkQ2hhaW4gPyBvbGRDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuICAgIC8vIGlmIGVpdGhlciBvbGQgb3IgbmV3IG9yIGJvdGggY2hhaW5zIGFyZSBlbXB0eSwgd2UgZG8gc3BlY2lhbCB0aGluZ3NcclxuICAgIGlmIChuZXdMZW4gPT09IDAgJiYgb2xkTGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGJvdGggY2hhaW5zIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBvbGRDaGFpbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ld0NoYWluLm1hcCggbmV3Vk4gPT4geyByZXR1cm4geyBuZXdWTiwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uSW5zZXJ0fSB9KTtcclxuICAgICAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBWTkRpc3BBY3Rpb24uSW5zZXJ0LCAwLCBuZXdMZW4gLSAxKV07XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG4gICAgLy8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG4gICAgLy8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHVwZGF0ZVN0cmF0ZWd5ID0gZGlzcC5vbGRWTiA/IGRpc3Aub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuICAgIC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuICAgIC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcbiAgICBpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IFtjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3AsIG5ld0NoYWluWzBdLCBvbGRDaGFpblswXSwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZSBhbmQgd2UgbmVlZCB0b1xyXG4gICAgLy8gcmVjb25jaWxlIHRoZSBjaGFpbnMuIEZpcnN0IGdvIG92ZXIgdGhlIG9sZCBub2RlcyBhbmQgYnVpbGQgYSBtYXAgb2Yga2V5ZWQgb25lcyBhbmQgYVxyXG4gICAgLy8gbGlzdCBvZiBub24ta2V5ZWQgb25lcy4gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbm9kZSB3aXRoIHRoZSBzYW1lIGtleSwgdGhlIGZpcnN0IG9uZVxyXG4gICAgLy8gZ29lcyB0byB0aGUgbWFwIGFuZCB0aGUgcmVzdCB0byB0aGUgdW5sZXllZCBsaXN0LlxyXG4gICAgbGV0IG9sZEtleWVkTWFwID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3Q6IFZOW10gPSBbXTtcclxuICAgIGxldCBrZXk6IGFueTtcclxuICAgIGZvciggbGV0IG9sZFZOIG9mIG9sZENoYWluKVxyXG4gICAge1xyXG4gICAgICAgIGtleSA9IG9sZFZOLmtleTtcclxuICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYgIW9sZEtleWVkTWFwLmhhcygga2V5KSlcclxuICAgICAgICAgICAgb2xkS2V5ZWRNYXAuc2V0KCBrZXksIG9sZFZOKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9sZFVua2V5ZWRMaXN0LnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1lYmVyIHRoZSBsZW5ndGggb2YgdGhlIHVua2V5ZWQgbGlzdDtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdExlbmd0aCA9IG9sZFVua2V5ZWRMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGFycmF5IGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzXHJcbiAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3TGVuKTtcclxuICAgIFxyXG4gICAgLy8gbG9vcCBvdmVyIG5ldyBub2Rlc1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0SW5kZXggPSAwO1xyXG4gICAgbmV3Q2hhaW4uZm9yRWFjaCggKG5ld1ZOLCBpbmRleCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVk46IFZOID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGxvb2sgdXAgdGhlIG9sZCBub2RlIGJ5IHRoZSBuZXcgbm9kZSdzIGtleSBpZiBleGlzdHNcclxuICAgICAgICBrZXkgPSBuZXdWTi5rZXk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2xkVk4gPSBvbGRLZXllZE1hcC5nZXQoIGtleSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIHRoZSBvbGQgbm9kZSBieSB0aGUga2V5LCByZW1vdmUgaXQgZnJvbSB0aGUgbWFwOyBhZnRlciB0aGVcclxuICAgICAgICAgICAgLy8gcmVjb25jaWxpYXRpb24sIGFsbCBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoaXMgbWFwIHdpbGwgYmUgbWFya2VkIGZvciByZW1vdmFsLlxyXG4gICAgICAgICAgICBpZiAob2xkVk4pXHJcbiAgICAgICAgICAgICAgICBvbGRLZXllZE1hcC5kZWxldGUoIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBpbiB0aGUgdW5rZXllZCBsaXN0IHVzZSB0aGUgbmV4dCBvbmVcclxuICAgICAgICBpZiAoIW9sZFZOICYmIG9sZFVua2V5ZWRMaXN0SW5kZXggIT0gb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkVW5rZXllZExpc3Rbb2xkVW5rZXllZExpc3RJbmRleCsrXTtcclxuXHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHNbaW5kZXhdID0gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwLCBuZXdWTiwgb2xkVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG9sZCBub2RlcyByZW1hbmluZyBpbiB0aGUga2V5ZWQgbWFwIGFuZCBpbiB0aGUgdW5rZXllZCBsaXN0IHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgaWYgKG9sZEtleWVkTWFwLnNpemUgPiAwIHx8IG9sZFVua2V5ZWRMaXN0SW5kZXggPCBvbGRVbmtleWVkTGlzdExlbmd0aClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG4gICAgICAgIG9sZEtleWVkTWFwLmZvckVhY2goIG9sZFZOID0+IGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBvbGRVbmtleWVkTGlzdEluZGV4OyBpIDwgb2xkVW5rZXllZExpc3RMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFVua2V5ZWRMaXN0W2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk4/OiBWTiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuKTogVk5EaXNwXHJcbntcclxuICAgIGxldCBzdWJEaXNwOiBWTkRpc3AgPSB7IG5ld1ZOIH07XHJcbiAgICBpZiAoIW9sZFZOKVxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgIGVsc2UgaWYgKG9sZFZOID09PSBuZXdWTiB8fFxyXG4gICAgICAgICgoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgfHwgbmV3Vk4ua2V5ID09PSBvbGRWTi5rZXkpICYmIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbiBiZSB1cGRhdGVkIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgbmV3IG5vZGVcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcbiAgICAgICAgc3ViRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbm5vdCBiZSB1cGRhdGVkLCBzbyB0aGUgbmV3IG5vZGUgd2lsbCBiZSBpbnNlcnRlZCBhbmQgdGhlIG9sZCBub2RlIHdpbGxcclxuICAgICAgICAvLyBiZSByZW1vdmVkXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG4gICAgICAgIGlmICghZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJEaXNwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcbiAgICBsZXQgY291bnQgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHByZS1kZXRlcm1pbmVkIHRocmVzaG9sZFxyXG4gICAgICAgIGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZ3JvdXBzIGFuZCBjcmVhdGUgdGhlIGZpcnN0IGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IG5vZGVcclxuICAgIGxldCBncm91cDogVk5EaXNwR3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGRpc3Auc3ViTm9kZURpc3BzWzBdLmFjdGlvbiwgMCk7XHJcbiAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbZ3JvdXBdO1xyXG5cclxuICAgIC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZSB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cFxyXG4gICAgLy8gb3IgcHV0IHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3IgY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuXHJcbiAgICAvLyBhIG5ldyBvbmUuXHJcbiAgICBsZXQgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHN1YkRpc3AgPSBkaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuICAgICAgICBhY3Rpb24gPSBzdWJEaXNwLmFjdGlvbjtcclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXguIERlY3JlbWVudCB0aGUgaXRlcmF0aW5nIGluZGV4IHNvIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuICAgICAgICAgICAgLy8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgYWN0aW9uLCBpKTtcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYW4gXCJ1cGRhdGVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcbiAgICAgICAgICAgIC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG4gICAgICAgICAgICAvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcbiAgICAgICAgICAgIGlmIChkaXNwLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBzdWJEaXNwLm9sZFZOLnByZXYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuICAgICAgICAvLyBuZXh0IG5vZGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbGFzdCBncm91cFxyXG4gICAgaWYgKGdyb3VwICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZ3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVwZGF0ZSBvZiB0aGUgZ2l2ZW4gb2xkIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbmV3IG5vZGUgaXMgcG9zc2libGUuIFVwZGF0ZVxyXG4gKiBpcyBwb3NzaWJsZSBpZiB0aGUgdHlwZXMgb2Ygbm9kZXMgYXJlIHRoZSBzYW1lIGFuZCBlaXRoZXIgdGhlIGlzVXBkYXRlUG9zc2libGUgbWV0aG9kIGlzIG5vdFxyXG4gKiBkZWZpbmVkIG9uIHRoZSBvbGQgbm9kZSBvciBpdCByZXR1cm5zIHRydWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTjogVk4sIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldEZpcnN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0Rmlyc3RETiggc3ZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bjogVk4sIGFuY2hvckROOiBETik6IEROXHJcbntcclxuXHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0aWYgKHZuLnN1Yk5vZGVzICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1t2bi5zdWJOb2Rlcy5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAoZG4pXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0Zm9yKCBsZXQgbnZuID0gdm4ubmV4dDsgbnZuICE9PSB1bmRlZmluZWQ7IG52biA9IG52bi5uZXh0KVxyXG5cdHtcclxuXHRcdGlmICghbnZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHQvLyBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRjb25zdCBkbiA9IGdldExhc3RETiggbnZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdHJldHVybiB2bi5wYXJlbnQgJiYgdm4ucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETiA/IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bi5wYXJlbnQsIGFuY2hvckROKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcbmZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZSArIChudm4uY3JlYXRvciAmJiBudm4uY3JlYXRvci52biA/IGAgKGNyZWF0ZWQgYnkgJHtudm4uY3JlYXRvci52bi5uYW1lfSlgIDogXCJcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGF0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGVpdGhlciBhIHNpbmdsZSB2aXJ0dWFsIG5vZGUgb3IgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LlxyXG4vLyBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW4gYXJyYXksIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0XHJcbi8vIGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW4gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHNcclxuLy8gbWlnaHQgYWxzbyBiZSBhcnJheXMsIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBJQ29tcG9uZW50KS52blxyXG5cdFx0XHRcdFx0XHQ/IChjb250ZW50IGFzIElDb21wb25lbnQpLnZuIGFzIFZOXHJcblx0XHRcdFx0XHRcdDogbmV3IEluZGVwZW5kZW50Q29tcFZOKCBjb250ZW50IGFzIElDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5mdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyAobm9kZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGVzKSA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBGcmFnbWVudClcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gRnVuY1Byb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLmZ1bmMpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYSBub2RlIGxpbmtlZCB0byB0aGlzIGZ1bmN0aW9uLiBJZiB5ZXMgcmV0dXJuIGl0O1xyXG5cdFx0Ly8gb3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgbm9kZS5cclxuXHRcdGxldCBmdW5jUHJveHlQcm9wcyA9IHByb3BzIGFzIEZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBQcm9taXNlUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMucHJvbWlzZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlXHJcblx0XHQvLyBhbiBhcnJheSBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZVxyXG5cdFx0Ly8gdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgY2hpbGRyZW4gaW4gSlNYIHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGhlIFR5cGVTY3JpcHRcclxuXHRcdC8vIGNvbXBpbGVyOlxyXG5cdFx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdIChhcyBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXSAoYXMgTk9UIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdFx0VGhpcyBsb29rcyBsaWtlIGEgVHlwZVNjcmlwdCBidWcuXHJcblx0XHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdFx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdFx0aWYgKHR5cGVvZiB0YWcucHJvdG90eXBlLnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXR1cm4gbmV3IE1hbmFnZWRDb21wVk4oIHRhZyBhcyBJQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIEZ1bmNDb21wVHlwZSwgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIERFQlVHXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcblx0Ly8vICNlbmRpZlxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUVycm9ySGFuZGxpbmdTZXJ2aWNlLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLndhaXRpbmcgPyBudWxsIDogdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHR0aGlzLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgVW5oYW5kbGVkIGVycm9yIGluIGNvbXBvbmVudFxcbiR7cGF0aC5qb2luKFwiXFxuXCIpfVxcbmAsIGVycik7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGEgcHJvbWlzZSB0aHJvd24gYXMgZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc3ltUm9vdE1vdW50UG9pbnQgPSBTeW1ib2woXCJzeW1Sb290TW91bnRQb2ludFwiKTtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcbiAgICAgICAgKHJlYWxBbmNob3JETiBhcyBhbnkpW3N5bVJvb3RNb3VudFBvaW50XSA9IHJvb3RWTjtcclxuICAgICAgICByb290Vk4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3N5bVJvb3RNb3VudFBvaW50XTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzeW1Sb290TW91bnRQb2ludF07XHJcblxyXG5cdC8vIGRlc3RydWN0IHRoZSByb290IG5vZGUgKGFzeW5jaHJvbm91c2x5KVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0cm9vdFZOLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVNjaGVkdWxlciwgcmVnaXN0ZXJTY2hlZHVsZXIsIHNldERlZmF1bHRTY2hlZHVsZXJUeXBlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtzY2hlZHVsZUZ1bmNDYWxsfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2NoZWR1bGVyIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBzY2hlZHVsaW5nIHdyaXRpbmcgc3R5bGUtcmVsYXRlZCBpbmZvcm1hdGlubyB0b1xyXG4gKiB0aGUgRE9NIHVzaW5nIHRoZSBNaW1ibCBzY2hlZHVsaW5nIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcbmNsYXNzIFN0eWxlU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBDYWxsYmFjayB0byBjYWxsIHRvIHdyaXRlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIHRoaXMub25VcGRhdGUsIGZhbHNlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRvRE9NVXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyBzdHlsZSBzY2hlZHVsZXIgdXNlZCBieSBNaW1ibCB0byBzY2hlZHVsZSB3cml0aW5nIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2luaXRTdHlsZVNjaGVkdWxlcigpOiBudW1iZXJcclxue1xyXG4gICAgbGV0IHNjaGVkdWxlclR5cGUgPSByZWdpc3RlclNjaGVkdWxlciggbmV3IFN0eWxlU2NoZWR1bGVyKCkpO1xyXG4gICAgc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJVGV4dFZOLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIElUZXh0Vk5cclxue1xyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuXHQvLyBUZXh0IERPTSBub2RlXHJcblx0cHVibGljIHRleHROb2RlOiBUZXh0O1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIHRleHQgbm9kZXMgZG9uJ3QgaGF2ZSBzdWItbm9kZXNcclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggdGhpcy50ZXh0ICE9PSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUubm9kZVZhbHVlID0gdGhpcy50ZXh0ID0gKG5ld1ZOIGFzIFRleHRWTikudGV4dDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJVk5vZGUsIElDb21wb25lbnQsIFVwZGF0ZVN0cmF0ZWd5fSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHJlYWRvbmx5IHN0YXRzQ2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvKiogTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuICovXHJcblx0ZGVwdGg/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC4gKi9cclxuXHRhbmNob3JETj86IEROO1xyXG5cclxuXHQvKipcclxuXHQgKiBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5IGNhbiBiZSBvZlxyXG5cdCAqIGFueSB0eXBlLlxyXG5cdCAqL1xyXG5cdGtleT86IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cmVuZGVyT25VcGRhdGU/OiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cGFyZW50PzogVk47XHJcblxyXG5cdC8vIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGFzIHBhcnQgb2YgaXRzIHJlbmRlcmluZyB0cmVlLlxyXG5cdGNyZWF0b3I/OiBJQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRvd25ETj86IEROO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0dXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRsYXN0VXBkYXRlVGljazogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdGluaXQoIHBhcmVudDogVk4sIGNyZWF0b3I6IElDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWRcclxuXHQvLyBvbmx5IG9uIG5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRtb3VudD8oKTogRE47XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgaW50ZXJuYWwgc3RydWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50XHJcblx0Ly8gb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIEluaXRpYWxpemVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlXHJcblx0Ly8gbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWQgb25seSBvbiBub2Rlc1xyXG5cdC8vIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSByZWxlYXNlIHRoZSBpbnRlcm5hbGx5IGhlbGQgcmVmZXJlbmNlXHJcblx0Ly8gdG8gdGhlIERPTSBub2RlIC0gdGhlIGFjdHVhbCByZW1vdmFsIG9mIHRoZSBub2RlIGZyb20gRE9NIGlzIGRvbmUgYnkgdGhlIGluZnJhc3RydWN0dXJlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR1bm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gSWYgdGhpcyBtZXRob2QgaXNcclxuXHQvLyBub3QgaW1wbGVtZW50ZWQgdGhlIHVwZGF0ZSBpcyBjb25zaWRlcmVkIHBvc3NpYmxlIC0gZS5nLiBmb3IgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aXNVcGRhdGVQb3NzaWJsZT8oIG5ld1ZOOiBWTik6IGJvb2xlYW47XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Y29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhlIG5vZGVcclxuXHQvLyBkb2Vzbid0IHN1cHBvcnQgZXJyb3IgaGFuZGxpbmcuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlYWRvbmx5IHN1cHBvcnRzRXJyb3JIYW5kbGluZz86IGJvb2xlYW47XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBUaGUgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGlzIG1ldGhvZCByZXR1cm5zLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlVwZGF0ZURpc3AgdHlwZSBkZXNjcmliZXMgd2hldGhlciBjZXJ0YWluIGFjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG4vLyBkdXJpbmcgdXBkYXRlLiBUaGlzIG9iamVjdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBub2RlJ3MgcHJlcGFyZVVwZGF0ZSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVk5VcGRhdGVEaXNwXHJcbntcclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBub2RlIGhhcyBjaGFuZ2VzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIERPTSB0cmVlLiBJZiB0aGlzXHJcblx0Ly8gZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHdpbGwgYmUgY2xsZWQgb24gdGhlIG5vZGUgZHVyaW5nIHRoZSBDb21taXRcclxuXHQvLyBwaGFzZS5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkQ29tbWl0OiBib29sZWFuO1xyXG5cclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBzdWItbm9kZXMgc2hvdWxkIGJlIHVwZGF0ZWQuIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZVxyXG5cdC8vIG5vZGUncyByZW5kZXIgbWV0aG9kIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRSZW5kZXI6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnNob3VsZENvbW1pdCA9IHNob3VsZENvbW1pdDtcclxuXHRcdHRoaXMuc2hvdWxkUmVuZGVyID0gc2hvdWxkUmVuZGVyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgZmFsc2UpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN0b2NrVmFsdWUoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHJldHVybiBzaG91bGRDb21taXRcclxuXHRcdFx0PyBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuRG9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdE5vUmVuZGVyXHJcblx0XHRcdDogc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuTm9Db21taXROb1JlbmRlcjtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBWTlR5cGUsIElDb21wb25lbnQsIFNjaGVkdWxlZEZ1bmNUeXBlLCBSZWZQcm9wVHlwZSwgc2V0UmVmfSBmcm9tIFwiLi4vYXBpL21pbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgVk4sIEROLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQsIHJlcXVlc3ROb2RlVXBkYXRlLFxyXG4gICAgc2NoZWR1bGVGdW5jQ2FsbCwgbm90aWZ5U2VydmljZVB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVN1YnNjcmliZWQsIHdyYXBDYWxsYmFja1dpdGhWTlxyXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICBpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcbi8vLyAjaWYgREVCVUdcclxuICAgIGxldCBnX25leHRWTkRlYnVnSUQgPSAxO1xyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgdHlwZTogVk5UeXBlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZS4gVGhpcyBpcyBudWxsIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgcGFyZW50OiBWTkJhc2U7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRwdWJsaWMgY3JlYXRvcjogSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBuZXh0OiBWTkJhc2U7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHVibGljIHByZXY6IFZOQmFzZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMgLSBib3RoIGtleWVkIGFuZCB1bmtleWVkIC0gZGVmaW5lZCBvbmx5IGlmIHRoZXJlIGFyZSBzb21lIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXM6IFZOQmFzZVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cHVibGljIHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBJQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuZGVwdGggPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgbW91bnRlZCAqL1xyXG5cdHB1YmxpYyBnZXQgaXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmFuY2hvckROOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudXBkYXRlUmVxdWVzdGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGZhbHNlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZywgc2VydmljZTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN1YnNjcmliZXMgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdC8vIGJ5IG9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDsgb3RoZXJ3aXNlLFxyXG5cdC8vIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdC8vIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yIG5vZGUgaXNcclxuXHQvLyBjaGFuZ2VkLCB0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHRwdWJsaWMgc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZywgcmVmOiBSZWZQcm9wVHlwZSwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0c2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRzZXRSZWYoIGluZm8ucmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBpbmZvLmRlZmF1bHRTZXJ2aWNlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzXHJcblx0ICogdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIENvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0lEID0gZ19uZXh0Vk5EZWJ1Z0lEKys7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSHRtbFR5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N2Z1R5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL21pbVwiXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wL1BvcHVwc1wiXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1pbWJsLXNwZWNpZmljIHN0eWxlIHNjaGVkdWxlciB0aGF0IGNvb3JkaW5hdGVzIE1pbWNzcyBET00gd3JpdGluZyB3aXRoIE1pbWJsXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge3NfaW5pdFN0eWxlU2NoZWR1bGVyfSBmcm9tIFwiLi9pbnRlcm5hbFwiXHJcblxyXG4vLyBTZXQgTWltYmwgc3R5bGUgc2NoZWR1bGVyIGFzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciBmb3Igc3R5bGUtcmVsYXRlZCBET00td3JpdGluZyBvcGVyYXRpb25zLlxyXG5leHBvcnQgbGV0IG1pbWJsU3R5bGVTY2hlZHVsZXJUeXBlID0gc19pbml0U3R5bGVTY2hlZHVsZXIoKTtcclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1V0aWxGdW5jXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1BdHRyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9WTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVk5CYXNlXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9DbGFzc0NvbXBWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvSW5kZXBlbmRlbnRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL01hbmFnZWRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0VsbVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9GdW5jVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0Z1bmNQcm94eVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Qcm9taXNlUHJveHlWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVGV4dFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Sb290Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9QdWJTdWJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1JlY29uY2lsZXJcIlxyXG4iLCLvu78vKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbiA9IEZ1bmN0aW9uPlxyXG57XHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSBhIGxhbWJkYVxyXG5cdCAqIGZ1bmN0aW9uIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gcmVtb3ZlIGEgbGFtYmRhIGZ1bmN0aW9uIGxpc3RlbmVyIGxhdGVyLlxyXG5cdCAqL1xyXG5cdGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG5cdHJlYWRvbmx5IGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24gPSBGdW5jdGlvbj4gZXh0ZW5kcyBJRXZlbnRTbG90PFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRmaXJlOiBURnVuYztcclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbiAqIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbiAqIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uID0gRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdHRoaXMubGlzdGVuZXJzID0gbmV3IFNldDxURnVuYz4oKTtcclxuXHJcblx0XHR0aGlzLmxpc3RlbmVycy5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY3VycmVudGx5IGF0dGFjaGVkIGxpc3RlbmVycy4gKi9cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuc2l6ZSA6IDA7IH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz47XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgcmVhbGx5IGNhbGxzIHRoZSBsaXN0ZW5lcnMgaW4gYSBsb29wLiBJdCBkZWNvbnN0dWN0cyB0aGUgXCJhcmd1bWVudHNcIiB2YWx1ZVxyXG5cdC8vIGluIG9yZGVyIHRvIHBhc3MgdGhlIHByb3BlciBwYXJhbWV0ZXJzIHRvIHRoZSBsaXN0ZW5lcnMuXHJcblx0cHJpdmF0ZSByZWFsRmlyZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcclxuXHRcdFx0XHRsaXN0ZW5lciggLi4uYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdCB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZSBUXHJcbiAqIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQ+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90PEV4dHJhY3Q8VFtQXSxGdW5jdGlvbj4+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3RPd25lciB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZVxyXG4gKiBUIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3RPd25lcjxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VD4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3RPd25lcjxFeHRyYWN0PFRbUF0sRnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlbnQgc2xvdHMgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIHRlbXBsYXRlIHR5cGUgVC4gVGhlXHJcbiAqIGNhbGxlciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZXZlbnQgc2xvdHM7IHRoYXQgaXMsIGl0IHdpbGwgYmUgYWJsZSB0byBmaXJlIGV2ZW50cyBhbmRcclxuICogY2xlYXIgYWxsIGxpc3RlbmVycyB3aGVuIG5lY2Vzc2FyeS4gVGhpcyBhbGxvd3MgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID1cclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogaW50ZXJmYWNlIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIGV2ZW50czogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPjtcclxuICogICAgIGRvU29tZXRoaW5nKCk6IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICpcclxuICogbGV0IG9iajogSU15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xyXG4gKiBvYmouZXZlbnRzLmNoYW5nZS5hdHRhY2goIChuOiBudW1iZXIpID0+IGNvbnNvbGUubG9nKG4pKTtcclxuICogb2JqLmRvU29tZXRoaW5nKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpRXZlbnRTbG90PFQ+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiBuZXcgRXZlbnRTbG90UHJldGVuZGVyKCB0aGlzLCBwcm9wKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90UHJldGVuZGVyIG9iamVjdHMgYXJlIHJldHVybmVkIGJ5IHRoZSBNdWx0aUV2ZW50U2xvdEhhbmRsZXIgaWYgaXQgZG9lc24ndCBmaW5kXHJcbiAqIGFuIGV2ZW50IHNsb3QgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS4gVGhlc2UgbGlnaHR3ZWlnaHQgb2JqZWN0cyBpbXBsZW1lbnQgYWxsIElFdmVudFNsb3RPd25lclxyXG4gKiBtZXRob2RzLCBidXQgb25seSB0aGUgYXR0YWNoKCkgbWV0aG9kIGFjdHVhbGx5IGNyZWF0ZXMgdGhlIEV2ZW50U2xvdCBvYmplY3QgYW5kIHNldHMgaXQgdG9cclxuICogdGhlIGhhbmRsZXIuXHJcbiAqL1xyXG5jbGFzcyBFdmVudFNsb3RQcmV0ZW5kZXIgaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXJcclxue1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBNdWx0aUV2ZW50U2xvdEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIHByb3A6IFByb3BlcnR5S2V5O1xyXG4gICAgcHJpdmF0ZSBzbG90OiBFdmVudFNsb3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGhhbmRsZXI6IE11bHRpRXZlbnRTbG90SGFuZGxlciwgcHJvcDogUHJvcGVydHlLZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnByb3AgPSBwcm9wO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGZpcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNsb3QpXHJcbiAgICAgICAgICAgIHRoaXMuc2xvdC5maXJlKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBpZiAodGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QgPSB0aGlzLmhhbmRsZXJbdGhpcy5wcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbG90LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xvdClcclxuICAgICAgICAgICAgdGhpcy5zbG90LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG4gICAgcHVibGljIGdldCBjb3VudCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbG90ID8gdGhpcy5zbG90LmNvdW50IDogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJEZXB0aCBlbnVtZXJhdGlvbiBkZWZpbmVzIHBvc3NpYmxlIHdheXMgb2YgaG93IHRyaWdnZXJzIGRlYWwgd2l0aCBjb250YWluZXIgZGF0YTtcclxuICogdGhhdCBpcywgb2JqZWN0cywgYXJyYXlzLCBtYXBzIGFuZCBzZXRzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gKiB0aGlzIGVudW1lcmF0aW9uIGlzIGlycmVsZXZhbnQuXHJcbiAqL1xyXG5lbnVtIFRyaWdnZXJEZXB0aFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgY2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFyZSBoYW5kbGVkLiBBY3Rpb25zIG9mIGFkZGluZywgcmVtb3ZpbmcgYW5kIG1vZGlmeWluZ1xyXG4gICAgICogaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBhcmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVmFsdWUgPSAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiB0aGUgaW1tZWRpYXRlIGNvbnRhaW5lciBpdGVtcyBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZlxyXG4gICAgICogYWRkaW5nIGFuZCByZW1vdmluZyBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGNhdXNlIGNoYW5nZSB0byBiZSB0cmlnZ2VycmVkOyBob3dldmVyIGFjdGlvbnNcclxuICAgICAqIG9mIG1vZGlmeWluZyBpdGVtcyB0aGVtc2VsZnMgYXJlIGlnbm9yZWQuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIFNoYWxsb3cgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiBpdGVtcyBvbiBhbGwgbGV2ZWxzIGFyZSBoYW5kbGVkLiBJdGVtcyBhZGRlZCB0byB0aGVcclxuICAgICAqIGNvbnRhaW5lciBhcmUgY29udmVydGVkIHRvIGRlZXAgdHJpZ2dlcnMuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIERlZXAgPSAxMDAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZGVwdGggd2l0aCB0aGUgZ2l2ZW4gaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlnZ2VyPFQgPSBhbnk+KCBkZXB0aDogbnVtYmVyLCB2PzogVCk6IElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgVHJpZ2dlciggZGVwdGggPCAwID8gMCA6IGRlcHRoLCB2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBrZWVwcyBhIHZhbHVlIGFuZCBub3RpZmllcyBhbGwgYXR0YWNoZWQgd2F0Y2hlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyPFQgPSBhbnk+IGltcGxlbWVudHMgSVRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGRlcHRoPzogbnVtYmVyLCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCggdjogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh2ID09PSB0aGlzLnYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gcmVhZFxyXG4gICAgcHVibGljIG5vdGlmeVJlYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBtYW5hZ2VyIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkLiBXZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlclxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgYXR0YWNoZWQgdG8gb3VyIHRyaWdnZXI7XHJcbiAgICBwdWJsaWMgbm90aWZ5Q2hhbmdlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFZhbHVlIGJlaW5nIGdldCBhbmQgc2V0XHJcbiAgICBwcml2YXRlIHY6IFQ7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHdhdGNoaW5nIG92ZXIgdGhpcyB0cmlnZ2VyJ3MgdmFsdWUuIFRoaXMgbWVtYmVyIHNlcnZlcyBhcyBhIHN0b3JhZ2UgaW5zdGVhZFxyXG4gICAgLy8gb2YgaGF2aW5nIHRoZSBtYW5hZ2VyIHRvIG1hcCBvZiB0cmlnZ2VycyB0byB0aGUgc2V0IG9mIHdhdGNoZXJzLlxyXG4gICAgcHVibGljIHdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXYXRjaGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVdhdGNoZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcblxyXG4gICAgLy8gLyoqIFNldHMgYSByZXNwb25kZXIgZnVuY3Rpb24gKi9cclxuICAgIC8vIHNldFJlc3BvbmRlciggcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIHJlc3BvbmRlclRoaXM/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGtlZXAgYSB3YXRjaGVyIG9iamVjdCBhdHRhY2hlZCB0byB0aGUgd2F0Y2hlciBmdW5jdGlvbi5cclxuICovXHJcbmxldCBzeW1XYXRjaGVyID0gU3ltYm9sKCBcInN5bVdhdGNoZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2F0Y2hlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gcmVndWxhciBmdW5jdGlvbi4gV2hlbiB0aGVcclxuICogd2F0Y2hlciBmdW5jdGlvbiBpcyBpbnZva2VkIGl0IGludm9rZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCBpdCBub3RpY2VzIGFsbCB0cmlnZ2VyIG9iamVjdHNcclxuICogdGhhdCB3ZXJlIHJlYWQgZHVyaW5nIGl0cyBleGVjdXRpb24uIFdoZW4gYW55IG9mIHRoZXNlIHRyaWdnZXIgb2JqZWN0cyBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkLCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSB3YXRjaGVkXHJcbiAqIEBwYXJhbSByZXNwb25kZXIgRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHZhbHVlcyBvZiB0aGUgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkIGR1cmluZ1xyXG4gKiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24ncyBsYXN0IGV4ZWN1dGlvbiBjaGFuZ2UuXHJcbiAqIEBwYXJhbSBmdW5jVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHJlc3BvbmRlclRoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYyxcclxuICAgIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KTogSVdhdGNoZXI8VD5cclxue1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hlckZ1bmMoLi4uYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlcjogV2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3YXMgbm90IHN1cHBsaWVkIGJ1dCBub3cgd2hlbiB0aGVcclxuICAgICAgICAvLyB3YXRjaGVyIGV4ZWN1dGVzLCBcInRoaXNcIiBpcyBkZWZpbmVkLCB3ZSByZW1lbWJlciBpdC5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leGVjdXRlKCB0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIHRoZSB3YXRjaGVyIG9iamVjdCBpbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZiB1c2luZyBhIHN5bWJvbC5cclxuICAgIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdID0gbmV3IFdhdGNoZXIoIGZ1bmMsIHJlc3BvbmRlciwgZnVuY1RoaXMsIHJlc3BvbmRlclRoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgICh3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgd2F0Y2hlciAmJiB3YXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhdGNoZXIgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWRcclxuICogZHVyaW5nIGEgZnVuY3Rpb24gZXhlY3V0aW9uLiBXaGVuIHRoZSB0cmlnZ2VyIG9iamVjdHMgYXJlIHJlYWQsIHRoZXkgYXJlIHJlbWVtYmVyZWQgYnkgdGhlXHJcbiAqIFdhdGNoZXIgb2JqZWN0LiBXaGVuZXZlciBhIHZhbHVlIGlzIGNoYW5nZWQgaW4gYW55IG9mIHRoZXNlIHRyaWdnZXJzLCB0aGUgd2F0Y2hlciBvYmplY3QgaXNcclxuICogbm90aWZpZWQgYW5kIGNhbGxzIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSByZXNwb25kZXI7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICAvLyBpZiByZXNwb25kZXIgXCJ0aGlzXCIgaXMgbm90IGRlZmluZWQgdXNlIHRoZSBvbmUgZm9yIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IHJlc3BvbmRlclRoaXMgPyByZXNwb25kZXJUaGlzIDogZnVuY1RoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2hpbGUgdXBkYXRpbmcgdGhlIHNldCBvZiBhdHRhY2hlZCB0cmlnZ2Vycy4gVGhlIFwiZnVuY1RoaXNcIlxyXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBcInRoaXNcIiB1bmRlciB3aGljaCB0aGUgaW50ZXJuYWwgd2F0Y2hlciBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQuIEl0XHJcbiAgICAgKiB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBcInRoaXNcIiB0byBhcHBseSB3aGVuIGludm9raW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpZiBpdCB3YXNuJ3RcclxuICAgICAqIHNldCB5ZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgd2F0Y2hlciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyVGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGN1cnJlbnQgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbGwgb3VyIHdhdGNoZXIgYXQgdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICBnX21hbmFnZXIucHVzaFdhdGNoZXIoIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciB3YXRjaGVyIGZyb20gdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLnBvcFdhdGNoZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB3YXRjaGVyIHRoYXQgaXQgc2hvdWxkIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi4gVGhpcyBvY2N1cnMgd2hlbiB0aGVyZVxyXG4gICAgLy8gYXJlIHRyaWdnZXJzIHdob3NlIHZhbHVlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgcHVibGljIHJlc3BvbmQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZC4gSXQgY2FuIGhhcHBlbiBpZiBhZnRlciBhbGwgbXV0YXRpb25cclxuICAgICAgICAvLyBzY29wZXMgZXhpdGVkIHRoZSBtYW5hZ2VyIG5vdGlmaWVzIG11bHRpcGxlIHdhdGNoZXJzIGFuZCBvbmUgb2YgdGhlIHdhdGNoZXJzJyByZXNwb25kZXJcclxuICAgICAgICAvLyBkaXNwb3NlcyBvZiBhbm90aGVyIHdhdGNoZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbmRlci5hcHBseSggdGhpcy5yZXNwb25kZXJUaGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgc3RhdGUgb2YgdGhlIHdhdGNoZXIsIHNvIHRoYXQgaXQgaXMgZGV0YWNoZWQgZnJvbSBhbnkgdHJpZ2dlcnMgYW5kIGlzIHJlbW92ZWRcclxuICAgICAqIGZyb20gdGhlIG1hbmFnZXIncyBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW4oKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRldGFjaGVzIHRoaXMgd2F0Y2hlciBmcm9tIGFsbCB0aGUgdHJpZ2dlcnMgYW5kIHRoZSB0cmlnZ2VycyBmcm9tIHRoaXMgd2F0Y2hlci5cclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goIHRyaWdnZXIgPT4gdHJpZ2dlci53YXRjaGVycy5kZWxldGUoIHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGFzayB0aGUgbWFuYWdlciB0byBmb3JnZXQgYWJvdXQgdGhpcyB3YXRjaGVyIGlmIGl0IGlzIGN1cnJlbnRseSBpbiB0ZSBkZWZlcnJlZCBzZXRcclxuICAgICAgICBnX21hbmFnZXIucmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3YXRjaGVkOyB0aGF0IGlzLCBkdXJpbmcgd2hpY2ggd2Ugc2hvdWxkIGxpc3RlbiB0byB0cmlnZ2VycyBiZWluZyByZWFkLCBzb1xyXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVtZW1iZXIgdGhlbSBhbmQgbGF0ZXIgcmVzcG9uZCB3aGVuIHRoZXkgbm90aWZ5IHRoYXQgdGhlaXIgdmFsdWVzIGhhdmUgYmVlblxyXG4gICAgLy8gY2hhbmdlZC5cclxuICAgIHByaXZhdGUgZnVuYzogVDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHRoZSB2YWx1ZSBvZiBvbmUgb2YgdGhlIHRyaWdnZXJzIGNoYW5nZXNcclxuICAgIHByaXZhdGUgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmM7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHJlc3BvbmRlciBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlclRoaXM6IGFueTtcclxuXHJcbiAgICAvLyBTZXQgb2YgdHJpZ2dlcnMgY3VycmVudGx5IGJlaW5nIHdhdGNoZWQgYnkgdGhpcyB3YXRjaGVyLiBUaGlzIG1lbWViZXIgaXMgdXNlZCBieSB0aGVcclxuICAgIC8vIG1hbmFnZXIuIEl0IGlzIGVzc2VudGlhbGx5IGEgc3RvcmFnZSwgd2hpY2ggaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBtYW5hZ2VyIGhhdmluZyBhXHJcbiAgICAvLyBtYXAgb2Ygd2F0Y2hlcnMgdG8gdGhlIHNldHMgb2YgdHJpZ2dlcnMuIFRoZSBwdXJwb3NlIG9mIGtub3dpbmcgd2hhdCB0cmlnZ2VycyBhcmUgdXNlZFxyXG4gICAgLy8gYnkgd2hhdCB3YXRjaGVyIGlzIHRvIHJlbW92ZSB0aGUgd2F0Y2hlciBmcm9tIGFsbCB0aGVzZSB0cmlnZ2VycyBiZWZvcmUgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICAgIHB1YmxpYyB0cmlnZ2VycyA9IG5ldyBTZXQ8VHJpZ2dlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWFuYWdlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIGZ1bmN0aW9uYWxpdHlcclxuICogb2YgdGhlIHRyaWdnZXItd2F0Y2hlciBtZWNoYW5pc20uIEl0IGluY2x1ZGVzIGEgc3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuICogdGhlaXIgZnVuY3Rpb25zIGFuZCB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIHRvIGJlIHJlYWQuIFdoZW4gYSB0cmlnZ2VyIG9iamVjdCBpcyBiZWluZ1xyXG4gKiByZWFkICh0aGF0IGlzIGl0cyBnZXQoKSBtZXRob2QgaXMgY2FsbGVkKSwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIG5vdGlmaWVkLCBiZWNhdXNlXHJcbiAqIHRoZXkgYWxsIGRlcGVuZCBvbiB0aGUgdHJpZ2dlciBvYmplY3QncyB2YWx1ZSBmb3IgdGhlaXIgZnVuY3Rpb25hbGl0eS5cclxuICogXHJcbiAqIEl0IGFsc28gbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50IG9mIG11dGF0aW9uIHNjb3BlcyBhbmQgaGFuZGxlcyBub3RpZnlpbmcgd2F0Y2hlcnMgb2ZcclxuICogbXV0YXRpb25zIG9ubHkgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBoYXMgZXhpdGVkLiBUaGUgdHJpZ2dlcnMgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVyc1xyXG4gKiBkaXJlY3RseTsgaW5zdGVhZCwgdGhleSBub3RpZnkgdGhlIG1hbmFnZXIsIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBhbmQgbm90aWZpZXMgYWxsXHJcbiAqIHRoZSB3YXRjaGVycyBvbmNlIG91dCBvZiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIFRyaWdnZXJXYXRjaGVyTWFuYWdlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyB0aGUgZ2l2ZW4gd2F0Y2hlciBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnB1c2goIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgY3VycmVudGx5IG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BXYXRjaGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGZyb20gdGhlIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5kZWxldGUoIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5wYWlyZWQgY2FsbCB0byBleGl0TXV0YXRpb25TY29wZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKC0tdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0aGlzLmRlZmVycmVkV2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21wdXRlZCB0cmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXB1dGVkVHJpZ2dlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIElUcmlnZ2VyPFQ+LCBJRGlzcG9zZXJcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgY29tcHV0ZWQgdHJpZ2dlciBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgY2FsY3VsYXRlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIHdpdGggYW5cclxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4oIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBUcmlnZ2VyRGVwdGguVmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIHRoZSB3YXRjaGVyIHVudGlsIHRoZSBnZXQgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIHdhdGNoZXIgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMucmVzcG9uZGVyLCB0aGlzLmZ1bmNUaGlzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gb3VyIHdhdGNoZXIgaXMgbm90aWZpZWQgb2YgY2hhbmdlcyBpbiBpdHMgdHJpZ2dlciB2YWx1ZXMuIFdlXHJcbiAgICAgKiByZXNwb25kIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiAodGhyb3VnaCB0aGUgd2F0Y2hlcikgYW5kIHNldHRpbmcgaXRzIHJldHVybiB2YWx1ZSBhc1xyXG4gICAgICogb3VyIG5ldyB2YWx1ZS4gVGhpcyBjYW4gdHJpZ2dlciBjaGFuZ2VzIGluIHdhdGNoZXJzIHRoYXQgYXJlIHVzaW5nIG91ciB2YWx1ZS4gTm90ZSB0aGF0XHJcbiAgICAgKiB3ZSBvbmx5IGludm9rZSBvdXIgd2F0Y2hlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciB0aGF0IHdhdGNoZXMgb3VyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB3ZSB3aWxsIGJlIHdhdGNoaW5nXHJcbiAgICBwcml2YXRlIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPjtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBvdmVyIG91ciBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI8Tm9uZVR5cGVGdW5jPFQ+PjtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgdmFsdWUgIGtlcHQgYnkgdGhlIHRyaWdnZXIgbWlnaHQgbm90IHJlZmxlY3QgdGhlIGFjdHVhbCBjb21wdXRlZFxyXG4gICAgLy8gdmFsdWUuIFRoaXMgZmxhZyBpcyB0cnVlIHVuZGVyIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcclxuICAgIC8vIDEuIFJpZ2h0IGFmdGVyIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZC4gV2UgZG9uJ3QgZXZlbiBjcmVhdGUgdGhlIHdhdGNoZXIgYmVjYXVzZSB3ZVxyXG4gICAgLy8gICAgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAvLyAyLiBXaGVuIHRoZSByZXNwb25kZXIgaGFzIGJlZW4gaW52b2tlZCwgYnV0IG91ciB0cmlnZ2VyIGRpZG4ndCBoYXZlIGFueSB3YXRjaGVyLiBBZ2Fpbiwgd2VcclxuICAgIC8vICAgIHdpbGwgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICBwcml2YXRlIGlzU3RhbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE11dGF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTXV0YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgbXV0YXRvciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIG11dGF0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltTXV0YXRvciA9IFN5bWJvbCggXCJzeW1NdXRhdG9yXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG11dGF0b3IgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXNcclxuICogdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2l0aGluIGEgbXV0YXRpb24gc2NvcGUuIFdhdGNoZXJzIGZvciB0cmlnZ2VycyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQgZHVyaW5nIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBub3Qgbm90aWZpZWQgaW1tZWRpYXRlbHkuIEluc3RlYWQsIHRoZSB3YXRjaGVyc1xyXG4gKiBhcmUgXCJkZWZlcnJlZFwiIGFuZCB3aWxsIGJlIG5vdGlmaWVkIG9ubHkgb25jZSBhZnRlciB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVGhpcyBjYW4gYmVcclxuICogdXNlZnVsIHNpbmNlIHVzdWFsbHkgd2F0Y2hlcnMgZGVwZW5kIG9uIG1hbnkgdHJpZ2dlcnMgYW5kIHdlIGRvbid0IHdhbnQgdGhlIHdhdGNoZXJzIGJlaW5nXHJcbiAqIG5vdGlmaWVkIG1hbnkgdGltZSBidXQgcmF0aGVyIG9ubHkgb25jZSBhZnRlciBhbGwgdGhlIGNoYW5nZXMgaGF2ZSBiZWVuIGRvbmUuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGFyb3VuZCB3aGljaCB0byBlc3RhYmxpc2ggYSBtdXRhdGlvbiBzY29wZS4gSWYgdGhpcyBpcyBhIGNsYXNzIG1ldGhvZCxcclxuICogdGhlbiBlaXRoZXIgcHJvdmlkZSB0aGUgZnVuY1RoaXMgcGFyYW1ldGVyIG9yIGJpbmQgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IGluLiBOb3RlXHJcbiAqIHRoYXQgYXJyb3cgZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGJvdW5kLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgVGhlIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyBhbiB1bmJvdW5kY2xhc3MgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSk6IElNdXRhdG9yPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIG11dGF0b3JGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG11dGF0b3I6IFdhdGNoZXIgPSBtdXRhdG9yRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIG11dGF0b3IuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbXV0YXRvciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXSA9IG5ldyBNdXRhdG9yKCBmdW5jLCBmdW5jVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKG11dGF0b3JGdW5jIGFzIElNdXRhdG9yKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yID0gbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICBtdXRhdG9yICYmIG11dGF0b3IuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIG11dGF0b3JGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXV0YXRvciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgZXhlY3V0aW5nIGEgd3JhcHBlZCBmdW5jdGlvbiB1bmRlciBhXHJcbiAqIG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTXV0YXRvcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGluIGEgbXV0YXRpb24gc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgbXV0YXRvciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICB0cnkgeyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTsgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2VyaXppbmcgY29udGFpbmVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGdpdmVuIHRyaWdnZXIgZGVwdGggYW5kIG9uIHRoZSB2YWx1ZSB0eXBlLCBlaXRoZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBpZlxyXG4gKiBpdCBpcyBhIGNvbnRhaW5lciAob2JqZWN0LCBhcnJheSwgbWFwIG9yIHNldCksIHJldHVybnMgYSBwcm94eSB0byB0aGUgdmFsdWUgdGhhdCBrbm93cyB0b1xyXG4gKiBub3RpZnkgcmVhZCBhbmQgY2hhbmdlIHdoZW4gaXRzIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlIGludm9rZWQuXHJcbiAqIEBwYXJhbSB2IFZhbHVlIHRvIGNvbnZlcnQgaWYgbmVjZXNzYXJ5XHJcbiAqIEBwYXJhbSB0cmlnZ2VyIFRyaWdnZXIgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gcmVhZCBvciBjaGFuZ2UgZXZlbnRzIG9jY3VyIGluIHRoZSBjb252ZXJ0ZWRcclxuICogdmFsdWVzXHJcbiAqIEBwYXJhbSBkZXB0aCBUaGUgZGVwdGggb24gdGhlIGxldmVsIChzdGFydGluZyBmcm9tIHRoZSB0cmlnZ2VyKXRoYXQgY2FsbGVkIHRoaXMgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIDAsIG5vIGNvbnZlcnNpb24gb2NjdXJzIGFuZCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQgYXMgaXMuIFdoZW4gdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBjYWxsZWQgZnJvbSB0aGUgdHJpZ2dlciwgdGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVuZGVmaW5lZDogaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIGFzc2lnbiB0aGVcclxuICogZGVwdGggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS4gQXJyYXlzLCBtYXBzIGFuZCBzZXRzIGdldCBkZXB0aHMgb2YgU2hhbGxvdygxKSxcclxuICogbWVhbmluZyB0aGF0IG9wZXJhdGlvbnMgdGhhdCBhZGQgb3IgcmVtb3ZlIGl0ZW1zIHdpbGwgdHJpZ2dlciBldmVudHMsIGJ1dCBtb2RpZmljYXRpb25zIHRvIHRoZVxyXG4gKiBpdGVtcyB3aWxsIG5vdC4gT2JqZWN0cyBnZXQgdGhlIGRlcHRoIG9mIERlZXAgKDEwMDApLCB3aGljaCBlc3NlbnRpYWxseSBtZWFucyB0aGF0IGFueSBjaGFuZ2VzXHJcbiAqIHRvIHRoZSBvYmplY3QgcHJvcGVydGllcyBvbiBhbnkgbGV2ZWwgd2lsbCB0cmlnZ2VyIGV2ZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJyaXplPFQgPSBhbnk+KCB2OiBULCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aD86IG51bWJlcik6IFRcclxue1xyXG4gICAgaWYgKCF2IHx8IGRlcHRoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTWFwSGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2IGluc3RhbmNlb2YgU2V0KVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoIHYsIG5ldyBTZXRIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT09IE9iamVjdClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLkRlZXApIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IGhhbmRsZXJzLlxyXG4gKi9cclxuY2xhc3MgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KCB0YXJnZXQsIHByb3AsIHRyaWdnZXJyaXplKCB2YWx1ZSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCBhdHRyczogUHJvcGVydHlEZXNjcmlwdG9yKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgcHJvcCwgYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0YXJnZXQsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXh0ZW5zaWJsZSggdGFyZ2V0OiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oIFJlZmxlY3QuZW51bWVyYXRlKCB0YXJnZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvd25LZXlzKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gVGhlIHRyaWdnZXIgb2JqZWN0IHdoaWNoIHNob3VsZCBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gaXRzIHdhdGNoZXJzIHdoZW4gcmVhZHMgb3IgY2hhbmdlc1xyXG4gICAgLy8gb2NjdXIgXHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogVHJpZ2dlcjtcclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBhcnJheXMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBBcnJheUhhbmRsZXIgZXh0ZW5kcyBOb25TbG90Q29udGFpbmVySGFuZGxlclxyXG4vLyB7XHJcbi8vICAgICBnZXQoIHRhcmdldDogQXJyYXk8YW55PiwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4vLyAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEhhbmRsZXIgZm9yIG9uIHBsYWluIG9iamVjdHMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBPYmplY3RIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzaGFsbG93IE1hcC9TZXQgaGFuZGxlcnMuIE1ldGhvZHMgd2hvc2UgbmFtZXMgd2VyZSBzdXBwbGllZCBpbiB0aGUgY29uc3RydWN0b3IsXHJcbiAqIG5vdGlmeSBjaGFuZ2U7IGFsbCBvdGhlciBtZXRob2RzIG5vdGlmeSByZWFkLlxyXG4gKiBcclxuICogRm9yIE1hcCBhbmQgU2V0IGluIG9yZGVyIHRvIGJlIHByb3hpZWQsIHRoZSBtZXRob2RzIHJldHVybmVkIGZyb20gZ2V0KCkgbXVzdCBiZVxyXG4gKiBib3VuZCB0byB0aGUgdGFyZ2V0LiBTZWUgaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vcHJveHkjYnVpbHQtaW4tb2JqZWN0cy1pbnRlcm5hbC1zbG90cy5cclxuICovXHJcbmNsYXNzIFNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PiwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMubXV0YXRvck1ldGhvZE5hbWVzID0gbXV0YXRvck1ldGhvZE5hbWVzO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBjb250YWluZXIgbWV0aG9kcyBhbmQgcHJvcGVydGllcy4gV2UgYWx3YXlzIG5vdGlmeSByZWFkIGFuZCB3ZSB3cmFwIG1ldGhvZHMgaW5cclxuICAgIC8vIGZ1bmN0aW9ucyB0aGF0IHdoZW4gY2FsbGVkIHdpbGwgbm90aWZ5IGVpdGhlciByZWFkIG9yIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGVcclxuICAgIC8vIG1ldGhvZCBpcyBhIG11dGF0b3IuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcblxyXG4gICAgICAgIC8vIGluIHRoaXMgY29udGV4dCBcInRoaXNcIiBpcyB0aGUgaGFuZGxlcjsgaG93ZXZlciwgd2hlbiB0aGUgbWV0aG9kcyB3ZSByZXR1cm4gYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHRoZSBcInRoaXNcIiB3aWxsIGJlIHRoZSBQcm94eSBvYmplY3QuIFRoZXJlZm9yZSwgd2Ugd2FudCB0aGVzZSBtZXRob2RzIHRvIGNhcHR1cmUgYW5kXHJcbiAgICAgICAgLy8gdXNlIHRoZSBoYW5kbGVyIG9iamVjdC5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBtZXRob2QgaXMgYWxyZWFkeSBpbiBvdXIgaW50ZXJuYWwgbWFwXHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMud3JhcHBlZE1ldGhvZHMuZ2V0KCBwcm9wKTtcclxuICAgICAgICBpZiAoIW1ldGhvZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgdGFyZ2V0XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gdGFyZ2V0W3Byb3BdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BWYWwgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCB0aGUgb3JpZ2luYWwgbWV0aG9kIHRvIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBvcmdCb3VuZE1ldGhvZCA9IHByb3BWYWwuYmluZCggdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0b3JNZXRob2ROYW1lcy5oYXMocHJvcCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBtdXRhdG9yIG1ldGhvZHMgd2UgY3JlYXRlIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgaW52b2tlcyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2gga25vd3MgYWJvdXQgdGhlIHN0cnVjdHVyZSBvZiB0aGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2lsbCBjcmVhdGUgcHJveGllcyBmb3IgdGhlIGFwcHJvcHJpYXRlIG9iamVjdHMgaWYgbmVlZGVkLiBUaGlzIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgYWxzbyBpbmRpY2F0ZSB3aGV0aGVyIGFuIGFjdHVhbCBjaGFuZ2Ugb2NjdXJzIHNvIHRoYXQgd2UgY2FuIG5vdGlmeSBhYm91dCBpdC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldDogW2FueSwgYm9vbGVhbl0gPSBoYW5kbGVyLmNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQsIHByb3AsIG9yZ0JvdW5kTWV0aG9kLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG9yZ0JvdW5kTWV0aG9kKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub24tbXV0YXRvciBtZXRob2RzLCB3ZSBub3RpZnkgdGhlIHJlYWQgYW5kIGludm9rZSB0aGUgb3JpZ2luYWwgbWV0aG9kLlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZnVuY3Rpb24oKTogYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlZE1ldGhvZHMuc2V0KCBwcm9wLCBtZXRob2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCB0aGF0IG11c3QgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgZGVyaXZlZCBjbGFzc2VzIGFuZCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZ1xyXG4gICAgICogYSBtdXV0YXRvciBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLGZhbHNlXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBTZXQgb2YgbWV0aG9kIG5hbWVzLCB3aGljaCBtdXRhdGUgdGhlIGNvbnRhaWVyLiBBbGwgb3RoZXIgbWV0aG9kcyBvbmx5IHJlYWQgZnJvbSBpdC5cclxuICAgIHByaXZhdGUgbXV0YXRvck1ldGhvZE5hbWVzOiBTZXQ8UHJvcGVydHlLZXk+O1xyXG5cclxuICAgIC8vIFRoaXMgbWFwIGtlZXBzIGFscmVhZHkgd3JhcHBlZCBtZXRob2RzIHNvIHRoYXQgd2UgZG9uJ3QgZG8gYmluZGluZyBtb3JlIHRoYW4gb25jZS4gXHJcbiAgICBwcml2YXRlIHdyYXBwZWRNZXRob2RzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSxGdW5jdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3IgbWFwcy5cclxuICovXHJcbmNsYXNzIE1hcEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJjbGVhclwiLCBcImRlbGV0ZVwiLCBcInNldFwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIE1hcEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG1hcC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInNldFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gW29yZ01ldGhvZCggYXJnc1swXSwgdHJpZ2dlcnJpemUoIGFyZ3NbMV0sIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCkpLCB0cnVlXTtcclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2V0cy5cclxuICovXHJcbmNsYXNzIFNldEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJhZGRcIiwgXCJkZWxldGVcIiwgXCJjbGVhclwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIFNldEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIHNldC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJhZGRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIHRyaWdnZXJyaXplKCBhcmdzWzBdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVjb3JhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgc28gdGhhdCBjaGFuZ2luZyB0aGVpciB2YWx1ZSB3aWxsIGFueSB3YXRjaGVyXHJcbiAqIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlbSB0byByZXNwb25kLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXJgIGRlc2lnbmF0ZXMgYSBkZWZhdWx0IHRyaWdnZXIgZGVjb3JhdG9yLCB3aG9zZSBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgdHlwZTogU2hhbGxvdyBmb3IgYXJyYXlzLCBtYXBzIGFuZCBzZXRzIGFuZCBEZWVwIGZvciBvYmplY3RzLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXIobilgIGRlc2lnbmF0ZXMgYSB0cmlnZ2VyIGRlY29yYXRvciBmYWN0b3J5IHdpdGggdGhlIHNwZWNpZmllZCBkZXB0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKCB0YXJnZXRPckRlcHRoOiBhbnksIG5hbWU/OiBzdHJpbmcpOiBhbnlcclxue1xyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXRPckRlcHRoID09PSBcIm51bWJlclwiKVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSBudW1iZXIgdGhhdCBpdCBpcyBhbiBleHBsaWNpdGx5IHNwZWNpZmllZCBkZXB0aCB1c2luZ1xyXG4gICAgICAgIC8vIGRlY29yYXRvciBmYWN0b3J5LlxyXG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyLmJpbmQoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdW5kZWZpbmVkIGRlcHRoIG1lYW5zIHRoYXQgdGhhdCB0aGUgYWN0dWFsIGRlcHRoIHdpbGwgYmUgYXNzaWduZWQgZGVwZW5kaWcgb24gdGhlXHJcbiAgICAgICAgLy8gdmFsdWUgb2YgdGhlIHRyaWdnZXI6IFNoYWxsb3cgZm9yIG1hcHMsIHNldHMgYW5kIGFycmF5cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlciggdW5kZWZpbmVkLCB0YXJnZXRPckRlcHRoLCBuYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBgQHRyaWdnZXJgIGRlY29yYXRvcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyKCBkZXB0aDogbnVtYmVyLCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKCBuYW1lICsgXCJfdHJpZ2dlclwiKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoLCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT2JqLnNldCggdmFsKVxyXG4gICAgICAgIH0sXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgXCJnZXRcIiBwcm9wZXJ0aWVzIG9yIGZ1bmN0aW9ucyByZXR1bmluZyBhIHZhbHVlIHNvIHRoYXQgdGhpc1xyXG4gKiB2YWx1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVjYWxjdWxhdGVkIGlmIGFueSB0cmlnZ2VycyBvbiB3aGljaCB0aGlzIHZhbHVlIGRlcGVuZHMgaGF2ZSB0aGVpclxyXG4gKiB2YWx1ZXMgY2hhbmdlZC4gV0hlbiB0aGlzIGhhcHBlbnMsIHRoZSB3YXRjaGVyIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBjb21wdXRlZCB2YWx1ZSB3aWxsXHJcbiAqIGJlIG5vdGlmaWVkIHRvIHJlc3BvbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIHByb3BEZXNjcjogUHJvcGVydHlEZXNjcmlwdG9yKVxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUpO1xyXG5cclxuICAgIC8vIHByb3BEZXNjLnZhbHVlIGlzIHVuZGVmaW5lZCBmb3IgYWNjZXNzb3JzIGFuZCBkZWZpbmVkIGZvciBmdW5jdGlvbnNcclxuICAgIGlmICghcHJvcERlc2NyLnZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghcHJvcERlc2NyLmdldClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQGNvbXB1dGVkIHByb3BlcnR5IHJlcXVpcmVzIGdldCgpIGFjY2Vzc29yXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3JnR2V0ID0gcHJvcERlc2NyLmdldDtcclxuICAgICAgICBwcm9wRGVzY3IuZ2V0ID0gZnVuY3Rpb24oKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdHZXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcERlc2NyLnNldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcmdTZXQgPSBwcm9wRGVzY3Iuc2V0O1xyXG4gICAgICAgICAgICBwcm9wRGVzY3Iuc2V0ID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgb3JnU2V0LmNhbGwoIHRoaXMsIHYpOyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JnRnVuYyA9IHByb3BEZXNjci52YWx1ZTtcclxuICAgICAgICBwcm9wRGVzY3IudmFsdWUgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENvbXBhcmVzIHRoZSB0d28gZ2l2ZW4gdmFsdWVzIGdvaW5nIGRvd24gdG8gdGhlaXIgcHJvcGVydGllcyBpZiB0aGVzZSBhcmUgYXJyYXlzIG9yIG9iamVjdHNcclxuICogQHBhcmFtIG8xIFxyXG4gKiBAcGFyYW0gbzIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19kZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbcF0sIG8yW3BdKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEocCBpbiBvMSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkpXHJcblx0e1xyXG5cdFx0aWYgKG8xLmxlbmd0aCAhPT0gbzIubGVuZ3RoKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSAwLCBsZW4gPSBvMS5sZW5ndGg7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbaV0sIG8yW2ldKSlcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlc2UgYXJlIHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zIG9yIGZ1bmN0aW9ucyBhbmQgdGhleSBhcmUgZGlmZmVyZW50XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaE9iamVjdCggbzogYW55KTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAobyA9PT0gdW5kZWZpbmVkKVxyXG4vLyBcdFx0cmV0dXJuIDA7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gbnVsbClcclxuLy8gXHRcdHJldHVybiAxO1xyXG4vLyBcdGVsc2UgaWYgKGlzTmFOKDApKVxyXG4vLyBcdFx0cmV0dXJuIDI7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gdHJ1ZSlcclxuLy8gXHRcdHJldHVybiAzO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IGZhbHNlKVxyXG4vLyBcdFx0cmV0dXJuIDQ7XHJcblxyXG4vLyBcdGxldCBoID0gMTA7XHJcblxyXG4vLyBcdGlmICh0eXBlb2YgbyA9PT0gXCJudW1iZXJcIilcclxuLy8gXHRcdHJldHVybiAxMCArIG87XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcbi8vIFx0XHRyZXR1cm4gaGFzaFN0cmluZyggbyk7XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIilcclxuLy8gXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvLm5hbWUpO1xyXG4vLyBcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobykpXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGxlbiA9IG8ubGVuZ3RoO1xyXG4vLyBcdFx0bGV0IGggPSAxMCArIGxlbjtcclxuLy8gXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbi8vIFx0XHRcdCBoICs9IGkgKyBoYXNoT2JqZWN0KCBvW2ldKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gXHRlbHNlXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGggPSAxMDtcclxuLy8gXHRcdGZvciggbGV0IHAgaW4gbylcclxuLy8gXHRcdFx0aCArPSBoYXNoU3RyaW5nKHApICsgaGFzaE9iamVjdChvW3BdKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaFN0cmluZyggczogc3RyaW5nKTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAoIXMpXHJcbi8vIFx0XHRyZXR1cm4gNTtcclxuXHJcbi8vIFx0bGV0IGxlbiA9IHMubGVuZ3RoO1xyXG4vLyBcdGxldCBoID0gMTAgKyBsZW47XHJcbi8vIFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuLy8gXHRcdGggKz0gcy5jaGFyQ29kZUF0KGkpO1xyXG4vLyBcdHJldHVybiBoO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2lzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIGVsbS50YWdOYW1lID09PSBcInN2Z1wiO1xyXG5cdC8vIHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9