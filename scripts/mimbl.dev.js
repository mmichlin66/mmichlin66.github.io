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
        if (this.isOpen)
            return Promise.reject(new Error("Popup already open"));
        this._returnValue = undefined;
        this.create();
        this.dlg.showModal();
        // if the escapeReturnValue is defined in the options, start listening to the click events
        // to detect clicks outside the popup because they will act as Escape too.
        let escapeRetVal = this.getReturnValueForEscapeKey();
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
        if (!this.isOpen)
            return;
        if (this.modalPromise) {
            let escapeRetVal = this.getReturnValueForEscapeKey();
            if (escapeRetVal !== undefined)
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
    setCaption(captionContent) {
        this.captionContent = captionContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL1V0aWxBUEkudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb21wL1BvcHVwcy50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvSW5kZXBlbmRlbnRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9NYW5hZ2VkQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHJvbWlzZVByb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9QdWJTdWIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9SZWNvbmNpbGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3R5bGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbEZ1bmMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVUsQ0FBRSxHQUFZO0lBRXZDLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDN0IsZ0RBQWdEO0FBQ2pELENBQUM7Ozs7Ozs7Ozs7OztBQ3ZJRCxvRCIsImZpbGUiOiJtaW1ibC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1jc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltY3NzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltY3NzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1ibFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbWNzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge3NfaXNTdmcsIHNfaXNTdmdTdmd9IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIHNfaXNTdmcoIGVsbSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBzX2lzU3ZnU3ZnKCBlbG0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgUHJvbWlzZSBjbGFzcyB3aXRoIHRoZSByZXNvbHZlIGFuZCByZWplY3QgbWV0aG9kcyBzbyB0aGF0IHRoZSBwcm9taXNlIGNhblxyXG4gKiBiZSBjcmVhdGVkIGluIG9uZSBwbGFjZSBhbmQgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgaW4gYSBkaWZmZXJlbnQgcGxhY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcm9taXNlRXg8VCA9IGFueT4gPSBQcm9taXNlPFQ+ICZcclxuICAgIHtcclxuICAgICAgICByZXNvbHZlOiAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXHJcbiAgICAgICAgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBQcm9taXNlIG9iamVjdHMgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZXh0ZXJuYWxseS4gVGhlIHJldHVybmVkIFByb21pc2VFeFxyXG4gKiBvYmplY3QgaGFzIHJlc29sdmUgYW5kIHJlamVjdCBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb21pc2VFeDxUID0gYW55PigpOiBQcm9taXNlRXg8VD5cclxue1xyXG4gICAgbGV0IHRlbXBSZXNvbHZlLCB0ZW1wUmVqZWN0O1xyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxUPiggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdGVtcFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgIHRlbXBSZWplY3QgPSByZWplY3Q7XHJcbiAgICB9KSBhcyBQcm9taXNlRXg8VD47XHJcblxyXG4gICAgcHJvbWlzZS5yZXNvbHZlID0gdGVtcFJlc29sdmU7XHJcbiAgICBwcm9taXNlLnJlamVjdCA9IHRlbXBSZWplY3Q7XHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogZnVuY3Rpb24gdG8gY3JlYXRlIFByb21pc2Ugb2JqZWN0cyB0aGF0IGNhbiBiZSByZXNvbHZlZCBvciByZWplY3RlZCBleHRlcm5hbGx5LiBUaGUgcmV0dXJuZWRcclxuICogUHJvbWlzZSBvYmplY3QgaGFzIHJlc29sdmUgYW5kIHJlamVjdCBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERlZmVyPFQgPSBhbnk+IGV4dGVuZHMgUHJvbWlzZTxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGZ1bmN0aW9uKHJlcywgcmVqKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlcztcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWo7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc29sdmU6ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtTdHlsZXNldCwgSUNsYXNzUnVsZSwgSUNsYXNzTmFtZVJ1bGUsIElJRFJ1bGUsIENsYXNzUHJvcFR5cGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5vZGVzRnJvbUpTWCwgd3JhcENhbGxiYWNrV2l0aFZOfSBmcm9tIFwiLi4vY29yZS9SZWNvbmNpbGVyXCI7XHJcbmltcG9ydCB7UHJvcFR5cGUsIEVsbUF0dHIsIEV2ZW50U2xvdCwgbW91bnRSb290LCB1bm1vdW50Um9vdCwgRnVuY1Byb3h5Vk59IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgcmVwcmVzZW50aW5nIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY0NvbXBUeXBlPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gKHByb3BzOiBGdW5jUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0d2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tcFByb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGRlZmluZXMgY29uc3RydWN0b3Igc2lnbmF0dXJlIGZvciBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdG9mIHRoaXMgdHlwZS4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IG9mIHRoaXMgdHlwZS4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudENsYXNzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHRuZXcoIHByb3BzPzogVFByb3BzKTogSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHRyZW5kZXIoKTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGFsbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICpcdFx0RGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGlzIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudDxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gRm9yIG1hbmFnZWQgY29tcG9uZW50cywgdGhlIHByb3BlcnRpZXNcclxuXHQgKiBjYW4gYWxzbyBiZSBzZXQgKGNoYW5nZWQpIHdoZW4gdGhlIGNvbXBvbmVudCdzIHBhcmVudCBpcyB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdHByb3BzPzogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wb25lbnRzIGNhbiBkZWZpbmUgZGlzcGxheSBuYW1lIGZvciB0cmFjaW5nIHB1cnBvc2VzOyBpZiB0aGV5IGRvbid0IHRoZSBkZWZhdWx0IG5hbWVcclxuXHQgKiB1c2VkIGlzIHRoZSBjb21wb25lbnQncyBjbGFzcyBjb25zdHJ1Y3RvciBuYW1lLiBOb3RlIHRoYXQgdGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBiZWZvcmVcclxuXHQgKiB0aGUgdmlydHVhbCBub2RlIGlzIGF0dGFjaGVkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMsIGdldHMgb3IgY2xlYXJzIHRoZSB2aXJ0dWFsIG5vZGUgb2JqZWN0IG9mIHRoZSBjb21wb25lbnQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IHR3aWNlOlxyXG5cdCAqICAxLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWU6IHRoZSBjb21wb25lbnQgbXVzdCByZW1lbWJlciB0aGVcclxuXHQgKiAgICBwYXNzZWQgb2JqZWN0LlxyXG5cdCAqICAyLiBCZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQ6IG51bGwgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgY29tcG9uZW50IG11c3RcclxuXHQgKiAgICByZWxlYXNlIHRoZSByZW1lbWJlcmVkIG9iamVjdC5cclxuXHQgKi9cclxuXHR2bj86IElWTm9kZTtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVsdGltYXRlbHkgcGxhY2VkIGludG8gdGhlIERPTSB0cmVlLiAqL1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vdGlmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byByZW5kZXIgaXRzIGNvbnRlbnQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIG1ldGhvZFxyXG5cdCAqIGlzIGNhbGxlZCB3aGVuIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGFscmVhZHkgYmVlbiBzZXQgc28gdGhlIGNvbXBvbmVudCBjYW4gcmVxdWVzdCBzZXJ2aWNlc1xyXG5cdCAqIGZyb20gaXQuXHJcblx0ICovXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBjb21wb25lbnQgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbXBvbmVudCBpcyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRoZSBjb250ZW50IG9mIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgZGlkTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBET00gZXZlbnRzIG9mIHR5cGUgVC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IChlOiBUKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0XTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlLCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZCBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gKiBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3QsIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUPiB8XHJcblx0XHRcdFx0RXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VD47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZGVmaW5pbmcgdGhlIGlkIHByb3BlcnR5IG9mIEhUTUwgZWxlbWVudHNcclxuICovXHRcdFx0XHRcclxuZXhwb3J0IHR5cGUgSURQcm9wVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IElJRFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIENyb3Nzb3JpZ2luUHJvcFR5cGUgPSBcImFub255bW91c1wiIHwgXCJ1c2UtY3JlZGVudGlhbHNcIjtcclxuZXhwb3J0IHR5cGUgRm9ybWVuY3R5cGVQcm9wVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfCBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB8IFwidGV4dC9wbGFpblwiO1xyXG5leHBvcnQgdHlwZSBGb3JtbWV0aG9kUHJvcFR5cGUgPSBcImdldFwiIHwgXCJwb3N0XCIgfCBcImRpYWxvZ1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtdGFyZ2V0UHJvcFR5cGUgPSBzdHJpbmcgfCBcIl9zZWxmXCIgfCBcIl9ibGFua1wiIHwgXCJfcGFyZW50XCJ8IFwiX3RvcFwiO1xyXG5leHBvcnQgdHlwZSBSZWZlcnJlclBvbGljeVByb3BUeXBlID0gXCJuby1yZWZlcnJlclwiIHwgXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIHwgXCJvcmlnaW5cIiB8XHJcblx0XHRcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIHwgXCJ1bnNhZmUtdXJsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGVsZW1lbnQgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdC8vIHN0YW5kYXJkIEhUTUwgYW5kIFNWRyBlbGVtZW50IHByb3BlcnRpZXNcclxuXHRjbGFzcz86IENsYXNzUHJvcFR5cGU7XHJcblx0ZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuXHRkcm9wem9uZSA/OiBcImNvcHlcIiB8IFwibW92ZVwiIHwgXCJsaW5rXCI7XHJcblx0aWQ/OiBzdHJpbmcgfCBudW1iZXIgfCBJSURSdWxlO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IFN0eWxlc2V0O1xyXG5cdHRhYmluZGV4PzogbnVtYmVyO1xyXG5cclxuXHQvLyBnbG9iYWwgZXZlbnRzXHJcblx0YWJvcnQ/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbmVuZD86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbml0ZXJhdGlvbj86IEV2ZW50UHJvcFR5cGU8QW5pbWF0aW9uRXZlbnQ+O1xyXG5cdGFuaW1hdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YXV4Y2xpY2s/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRibHVyPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRjYW5jZWw/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0Y2FucGxheXRocm91Z2g/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y2xvc2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjb250ZXh0bWVudT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0Y3VlY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZGJsY2xpY2s/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdGR1cmF0aW9uY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW1wdGllZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGVuZGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZXJyb3I/OiBFdmVudFByb3BUeXBlPEVycm9yRXZlbnQ+O1xyXG5cdGZvY3VzPzogRXZlbnRQcm9wVHlwZTxGb2N1c0V2ZW50PjtcclxuXHRnb3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRpbnB1dD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGludmFsaWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRrZXlkb3duPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXlwcmVzcz86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0a2V5dXA/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGxvYWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRkYXRhPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0bG9hZGVkbWV0YWRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZW5kPzogRXZlbnRQcm9wVHlwZTxQcm9ncmVzc0V2ZW50PjtcclxuXHRsb2Fkc3RhcnQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb3N0cG9pbnRlcmNhcHR1cmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0bW91c2Vkb3duPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWVudGVyPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZWxlYXZlPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW1vdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3V0PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRtb3VzZW92ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNldXA/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdHBhdXNlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBsYXlpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwb2ludGVyY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJkb3duPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJlbnRlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybGVhdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm1vdmU/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcm91dD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3Zlcj86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVydXA/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cHJvZ3Jlc3M/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdHJhdGVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRyZXNldD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2l6ZT86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0c2Nyb2xsPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uPzogRXZlbnRQcm9wVHlwZTxTZWN1cml0eVBvbGljeVZpb2xhdGlvbkV2ZW50PjtcclxuXHRzZWVrZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWVraW5nPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c2VsZWN0PzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzdGFsbGVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VibWl0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0c3VzcGVuZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRpbWV1cGRhdGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b2dnbGU/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR0b3VjaGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbmQ/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNoZW50ZXI/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobGVhdmU/OiBFdmVudFByb3BUeXBlPFRvdWNoRXZlbnQ+O1xyXG5cdHRvdWNobW92ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hzdGFydD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dHJhbnNpdGlvbmNhbmNlbD86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25ydW4/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHZvbHVtZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdhaXRpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHR3aGVlbD86IEV2ZW50UHJvcFR5cGU8V2hlZWxFdmVudD47XHJcblxyXG5cdC8vIEVsZW1lbnQncyBldmVudHNcclxuXHRmdWxsc2NyZWVuY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZnVsbHNjcmVlbmVycm9yPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblxyXG5cdC8vIERvY3VtZW50J3MgYW5kIEVsZW1lbnQncyBldmVudHNcclxuXHRjb3B5PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0Y3V0PzogRXZlbnRQcm9wVHlwZTxDbGlwYm9hcmRFdmVudD47XHJcblx0cGFzdGU/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSlNYIG5hbWVzcGFjZSBkZWZpbmluZyBob3cgVHlwZVNjcmlwdCBwZXJmb3JtcyB0eXBlIGNoZWNrcyBvbiBKU1ggZWxlbWVudHMsY29tcG9uZW50c1xyXG4vLyBwcm9wZXJ0aWVzIGFuZCBjaGlsZHJlbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBOYW1lc3BhY2UgZGVmaW5pbmcgaW50ZXJmYWNlcyB1c2VkIGJ5IFR5cGVTY3JpcHQgdG8gdHlwZS1jaGVjayBKU1ggZXhwcmVzc2lvbnMuXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIEpTWFxyXG57XHJcblx0Ly8gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudCBleHRlbmRzIElWTm9kZVtdIHt9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDbGFzcyBleHRlbmRzIElDb21wb25lbnQge31cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50QXR0cmlidXRlc1Byb3BlcnR5IHsgcHJvcHM6IHt9IH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBFbGVtZW50Q2hpbGRyZW5BdHRyaWJ1dGUgeyBjaGlsZHJlbjogYW55IH1cclxuXHRcclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0VsZW1lbnRzXHJcblx0e1xyXG5cdFx0Ly8gSFRNTCBlbGVtZW50c1xyXG5cdFx0YTogaHRtbC5JSHRtbEFFbGVtZW50UHJvcHM7XHJcblx0XHRhYmJyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWNyb255bTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFkZHJlc3M6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhcHBsZXQ6IGh0bWwuSUh0bWxBcHBsZXRFbGVtZW50UHJvcHM7XHJcblx0XHRhcmVhOiBodG1sLklIdG1sQXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdGFydGljbGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhc2lkZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGF1ZGlvOiBodG1sLklIdG1sQXVkaW9FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0YjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJhc2U6IGh0bWwuSUh0bWxCYXNlRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZWZvbnQ6IGh0bWwuSUh0bWxCYXNlZm9udEVsZW1lbnRQcm9wcztcclxuXHRcdGJkaTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJkbzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJpZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJsb2NrcXVvdGU6IGh0bWwuSUh0bWxCbG9ja3F1b3RlRWxlbWVudFByb3BzO1xyXG5cdFx0Ym9keTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGJyOiBodG1sLklIdG1sQnJFbGVtZW50UHJvcHM7XHJcblx0XHRidXR0b246IGh0bWwuSUh0bWxCdXR0b25FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Y2FudmFzOiBodG1sLklIdG1sQ2FudmFzRWxlbWVudFByb3BzO1xyXG5cdFx0Y2FwdGlvbjogaHRtbC5JSHRtbENhcHRpb25FbGVtZW50UHJvcHM7XHJcblx0XHRjZW50ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjaXRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29kZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbDogaHRtbC5JSHRtbENvbEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbGdyb3VwOiBodG1sLklIdG1sQ29sZ3JvdXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGF0YTogaHRtbC5JSHRtbERhdGFFbGVtZW50UHJvcHM7XHJcblx0XHRkYXRhbGlzdDogaHRtbC5JSHRtbERhdGFMaXN0RWxlbWVudFByb3BzO1xyXG5cdFx0ZGQ6IGh0bWwuSUh0bWxEZEVsZW1lbnRQcm9wcztcclxuXHRcdGRlbDogaHRtbC5JSHRtbERlbEVsZW1lbnRQcm9wcztcclxuXHRcdGRldGFpbHM6IGh0bWwuSUh0bWxEZXRhaWxzRWxlbWVudFByb3BzO1xyXG5cdFx0ZGZuOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlhbG9nOiBodG1sLklIdG1sRGlhbG9nRWxlbWVudFByb3BzO1xyXG5cdFx0ZGlyOiBodG1sLklIdG1sRGlyRWxlbWVudFByb3BzO1xyXG5cdFx0ZGl2OiBodG1sLklIdG1sRGl2RWxlbWVudFByb3BzO1xyXG5cdFx0ZGw6IGh0bWwuSUh0bWxEbEVsZW1lbnRQcm9wcztcclxuXHRcdGR0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZW1iZWQ6IGh0bWwuSUh0bWxFbWJlZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRmaWVsZHNldDogaHRtbC5JSHRtbEZpZWxkc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmlnY2FwdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZpZ3VyZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGZvbnQ6IGh0bWwuSUh0bWxGb250RWxlbWVudFByb3BzO1xyXG5cdFx0Zm9vdGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9ybTogaHRtbC5JSHRtbEZvcm1FbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZTogaHRtbC5JSHRtbEZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0ZnJhbWVzZXQ6IGh0bWwuSUh0bWxGcmFtZXNldEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRoMTogaHRtbC5JSHRtbEgxRWxlbWVudFByb3BzO1xyXG5cdFx0aDI6IGh0bWwuSUh0bWxIMkVsZW1lbnRQcm9wcztcclxuXHRcdGgzOiBodG1sLklIdG1sSDNFbGVtZW50UHJvcHM7XHJcblx0XHRoNDogaHRtbC5JSHRtbEg0RWxlbWVudFByb3BzO1xyXG5cdFx0aDU6IGh0bWwuSUh0bWxINUVsZW1lbnRQcm9wcztcclxuXHRcdGg2OiBodG1sLklIdG1sSDZFbGVtZW50UHJvcHM7XHJcblx0XHRoZWFkOiBodG1sLklIdG1sSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhncm91cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGhyOiBodG1sLklIdG1sSHJFbGVtZW50UHJvcHM7XHJcblx0XHRodG1sOiBodG1sLklIdG1sSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aWZyYW1lOiBodG1sLklIdG1sSWZyYW1lRWxlbWVudFByb3BzO1xyXG5cdFx0aW1nOiBodG1sLklIdG1sSW1nRWxlbWVudFByb3BzO1xyXG5cdFx0aW5wdXQ6IGh0bWwuSUh0bWxJbnB1dEVsZW1lbnRQcm9wcztcclxuXHRcdGluczogaHRtbC5JSHRtbEluc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRrYmQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRrZXlnZW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGFiZWw6IGh0bWwuSUh0bWxMYWJlbEVsZW1lbnRQcm9wcztcclxuXHRcdGxlZ2VuZDogaHRtbC5JSHRtbExlZ2VuZEVsZW1lbnRQcm9wcztcclxuXHRcdGxpOiBodG1sLklIdG1sTGlFbGVtZW50UHJvcHM7XHJcblx0XHRsaW5rOiBodG1sLklIdG1sTGlua0VsZW1lbnRQcm9wcztcclxuXHRcdGxpc3Rpbmc6IGh0bWwuSUh0bWxMaXN0aW5nRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1haW46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtYXA6IGh0bWwuSUh0bWxNYXBFbGVtZW50UHJvcHM7XHJcblx0XHRtYXJrOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWVudTogaHRtbC5JSHRtbE1lbnVFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51aXRlbTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1ldGE6IGh0bWwuSUh0bWxNZXRhRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0ZXI6IGh0bWwuSUh0bWxNZXRlckVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRuYXY6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2JyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bm9mcmFtZXM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub3NjcmlwdDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRvYmplY3Q6IGh0bWwuSUh0bWxPYmplY3RFbGVtZW50UHJvcHM7XHJcblx0XHRvbDogaHRtbC5JSHRtbE9sRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0Z3JvdXA6IGh0bWwuSUh0bWxPcHRncm91cEVsZW1lbnRQcm9wcztcclxuXHRcdG9wdGlvbjogaHRtbC5JSHRtbE9wdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdG91dHB1dDogaHRtbC5JSHRtbE91dHB1dEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwOiBodG1sLklIdG1sUEVsZW1lbnRQcm9wcztcclxuXHRcdHBhcmFtOiBodG1sLklIdG1sUGFyYW1FbGVtZW50UHJvcHM7XHJcblx0XHRwaWN0dXJlOiBodG1sLklIdG1sUGljdHVyZUVsZW1lbnRQcm9wcztcclxuXHRcdHByZTogaHRtbC5JSHRtbFByZUVsZW1lbnRQcm9wcztcclxuXHRcdHByb2dyZXNzOiBodG1sLklIdG1sUHJvZ3Jlc3NFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cTogaHRtbC5JSHRtbFFFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0cmI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRycDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJ0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnRjOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnVieTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2FtcDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNjcmlwdDogaHRtbC5JSHRtbFNjcmlwdEVsZW1lbnRQcm9wcztcclxuXHRcdHNlY3Rpb246IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzZWxlY3Q6IGh0bWwuSUh0bWxTZWxlY3RFbGVtZW50UHJvcHM7XHJcblx0XHRzbG90OiBodG1sLklIdG1sU2xvdEVsZW1lbnRQcm9wcztcclxuXHRcdHNtYWxsOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c291cmNlOiBodG1sLklIdG1sU291cmNlRWxlbWVudFByb3BzO1xyXG5cdFx0c3BhbjogaHRtbC5JSHRtbFNwYW5FbGVtZW50UHJvcHM7XHJcblx0XHRzdHJpa2U6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHJvbmc6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdHlsZTogaHRtbC5JSHRtbFN0eWxlRWxlbWVudFByb3BzO1xyXG5cdFx0c3ViOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VtbWFyeTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN1cDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0YWJsZTogaHRtbC5JSHRtbFRhYmxlRWxlbWVudFByb3BzO1xyXG5cdFx0dGJvZHk6IGh0bWwuSUh0bWxUYm9keUVsZW1lbnRQcm9wcztcclxuXHRcdHRkOiBodG1sLklIdG1sVGRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZW1wbGF0ZTogaHRtbC5JSHRtbFRlbXBsYXRlRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dGFyZWE6IGh0bWwuSUh0bWxUZXh0YXJlYUVsZW1lbnRQcm9wcztcclxuXHRcdHRmb290OiBodG1sLklIdG1sVGZvb3RFbGVtZW50UHJvcHM7XHJcblx0XHR0aDogaHRtbC5JSHRtbFRoRWxlbWVudFByb3BzO1xyXG5cdFx0dGhlYWQ6IGh0bWwuSUh0bWxUSGVhZEVsZW1lbnRQcm9wcztcclxuXHRcdHRpbWU6IGh0bWwuSUh0bWxUaW1lRWxlbWVudFByb3BzO1xyXG5cdFx0dGl0bGU6IGh0bWwuSUh0bWxUaXRsZUVsZW1lbnRQcm9wcztcclxuXHRcdHRyOiBodG1sLklIdG1sVHJFbGVtZW50UHJvcHM7XHJcblx0XHR0cmFjazogaHRtbC5JSHRtbFRyYWNrRWxlbWVudFByb3BzO1xyXG5cdFx0dHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHVsOiBodG1sLklIdG1sVWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmFyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dmlkZW86IGh0bWwuSUh0bWxWaWRlb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHR3YnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0eG1wOiBodG1sLklIdG1sWG1wRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vIFNWRyBlbGVtZW50c1xyXG5cdFx0c3ZnOiBzdmcuSVN2Z1N2Z0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdBOiBzdmcuSVN2Z0FFbGVtZW50UHJvcHM7XHJcblx0XHRhbmltYXRlOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdBbmltYXRpb25Qcm9wcztcclxuXHRcdGFuaW1hdGVNb3Rpb246IHN2Zy5JU3ZnQW5pbWF0ZU1vdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGVUYXJuc2Zvcm06IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cclxuXHRcdGNpcmNsZTogc3ZnLklTdmdDaXJjbGVFbGVtZW50UHJvcHM7XHJcblx0XHRjbGlwUGF0aDogc3ZnLklTdmdDbGlwUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdGNvbG9yUHJvZmlsZTogc3ZnLklTdmdDb2xvclByb2ZpbGVQYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGRlZnM6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVzYzogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkaXNjYXJkOiBzdmcuSVN2Z0Rpc2NhcmRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZWxsaXBzZTogc3ZnLklTdmdFbGxpcHNlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZlQmxlbmQ6IHN2Zy5JU3ZnRmVCbGVuZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29sb3JNYXRyaXg6IHN2Zy5JU3ZnRmVDb2xvck1hdHJpeEVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IHN2Zy5JU3ZnRmVDb21wb25lbnRUcmFuc2ZlckVsZW1lbnRQcm9wcztcclxuXHRcdGZlQ29tcG9zaXRlOiBzdmcuSVN2Z0ZlQ29tcG9zaXRlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogc3ZnLklTdmdGZUNvbnZvbHZlTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IHN2Zy5JU3ZnRmVEaWZmdXNlTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogc3ZnLklTdmdGZURpc3BsYWNlbWVudE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzdGFudExpZ2h0OiBzdmcuSVN2Z0ZlRGlzdGFudExpZ2h0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEcm9wU2hhZG93OiBzdmcuSVN2Z0ZlRHJvcFNoYWRvd0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRmxvb2Q6IHN2Zy5JU3ZnRmVGbG9vZEVsZW1lbnRQcm9wcztcclxuXHRcdGZlRnVuY0E6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY0c6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlRnVuY1I6IHN2Zy5JU3ZnVHJhbnNmZXJGdW5jdGlvbnNQcm9wcztcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBzdmcuSVN2Z0ZlR2F1c3NpYW5CbHVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVJbWFnZTogc3ZnLklTdmdGZUltYWdlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNZXJnZTogc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcyB8IHN2Zy5JU3ZnRmlsdGVyUHJpbWl0aXZlUHJvcHM7XHJcblx0XHRmZU1lcmdlTm9kZTogc3ZnLklTdmdGZU1lcmdlTm9kZUVsZW1lbnRQcm9wcztcclxuXHRcdGZlTW9ycGhvbG9neTogc3ZnLklTdmdGZU1vcnBob2xvZ3lFbGVtZW50UHJvcHM7XHJcblx0XHRmZU9mZnNldDogc3ZnLklTdmdGZU9mZnNldEVsZW1lbnRQcm9wcztcclxuXHRcdGZlUG9pbnRMaWdodDogc3ZnLklTdmdGZVBvaW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IHN2Zy5JU3ZnRmVTcGVjdWxhckxpZ2h0aW5nRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVTcG90TGlnaHQ6IHN2Zy5JU3ZnRmVTcG90TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZVRpbGU6IHN2Zy5JU3ZnRmVUaWxlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVUdXJidWxlbmNlOiBzdmcuSVN2Z0ZlVHVyYnVsZW5jZUVsZW1lbnRQcm9wcztcclxuXHRcdGZpbHRlcjogc3ZnLklTdmdGaWx0ZXJFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JlaWduT2JqZWN0OiBzdmcuSVN2Z0ZvcmVpZ25PYmplY3RFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Zzogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblxyXG5cdFx0aGF0Y2g6IHN2Zy5JU3ZnSGF0Y2hFbGVtZW50UHJvcHM7XHJcblx0XHRoYXRjaHBhdGg6IHN2Zy5JU3ZnSGF0Y2hwYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGltYWdlOiBzdmcuSVN2Z0ltYWdlRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGxpbmU6IHN2Zy5JU3ZnTGluZUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbmVhckdyYWRpZW50OiBzdmcuSVN2Z0xpbmVhckdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG1hcmtlcjogc3ZnLklTdmdNYXJrZXJFbGVtZW50UHJvcHM7XHJcblx0XHRtYXNrOiBzdmcuSVN2Z01hc2tFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRhZGF0YTogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRtcGF0aDogc3ZnLklTdmdNUGF0aEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRwYXRoOiBzdmcuSVN2Z1BhdGhFbGVtZW50UHJvcHM7XHJcblx0XHRwYXR0ZXJuOiBzdmcuSVN2Z1BhdHRlcm5FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5Z29uOiBzdmcuSVN2Z1BvbHlnb25FbGVtZW50UHJvcHM7XHJcblx0XHRwb2x5bGluZTogc3ZnLklTdmdQb2x5bGluZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogc3ZnLklTdmdSYWRpYWxHcmFkaWVudEVsZW1lbnRQcm9wcztcclxuXHRcdHJlY3Q6IHN2Zy5JU3ZnUmVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRzdmdTY3JpcHQ6IHN2Zy5JU3ZnU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2V0OiBzdmcuSVN2Z1NldEVsZW1lbnRQcm9wcztcclxuXHRcdHNvbGlkY29sb3I6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0c3RvcDogc3ZnLklTdmdTdG9wRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnU3R5bGU6IHN2Zy5JU3ZnU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzd2l0Y2g6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzO1xyXG5cdFx0c3ltYm9sOiBzdmcuSVN2Z1N5bWJvbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR0ZXh0OiBzdmcuSVN2Z1RleHRFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0UGF0aDogc3ZnLklTdmdUZXh0UGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHN2Z1RpdGxlOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdHRleHRTcGFuOiBzdmcuSVN2Z1RleHRTcGFuRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHVzZTogc3ZnLklTdmdVc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dmlldzogc3ZnLklTdmdWaWV3RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdC8vW2VsZW1OYW1lOiBzdHJpbmddOiBhbnlcclxuXHR9XHJcblxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGludHJpbnNpYyBlbGVtZW50cyBhbmQgdG8gZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljQXR0cmlidXRlcyBleHRlbmRzIElDb21tb25Qcm9wcyB7fVxyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIGluIHRoaXMgaW50ZXJmYWNlIGFwcGx5IHRvIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNDbGFzc0F0dHJpYnV0ZXM8VD4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxuXHR7XHJcblx0XHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBpcyBtb3VudGVkLiBUaGVcclxuXHRcdC8vIHJlZmVyZW5jZSB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXHJcblx0XHRyZWY/OiBSZWZQcm9wVHlwZTxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwianN4XCJcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIC50c3ggZmlsZXMgbXVzdCBpbXBvcnQgdGhlIG1pbWJsIG1vZHVsZSBhcyBtaW06IGltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG4gKiBAcGFyYW0gdGFnIFxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqIEBwYXJhbSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc3goIHRhZzogYW55LCBwcm9wczogYW55LCAuLi5jaGlsZHJlbjogYW55W10pOiBhbnlcclxue1xyXG5cdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZywgcHJvcHMsIGNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUID0gYW55PiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vIFN5bWJvbCB1c2VkIHRvIGtlZXAgdGhlIHJlZmVyZW5jZWQgb2JqZWN0IGluc2lkZSB0aGUgUmVmIGNsYXNzIGluc3RhbmNlLlxyXG5sZXQgc3ltUmVmID0gU3ltYm9sKFwic3ltUmVmXCIpO1xyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VCA9IGFueT5cclxue1xyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hdHRhY2goIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzW3N5bVJlZl0gPSBpbml0aWFsUmVmZXJlbmU7XHJcblx0fVxyXG5cclxuXHQvKiogQWRkcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgY2hhbmdlcy4gKi9cclxuXHRwdWJsaWMgYWRkTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgYSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB3aXRoIGFkZExpc3RlbmVyLiAqL1xyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZGV0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgcmVmZXJlbmNlIHZhbHVlICovXHJcblx0cHVibGljIGdldCByKCk6IFQgeyByZXR1cm4gdGhpc1tzeW1SZWZdOyB9XHJcblxyXG5cdC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgc2V0IHIoIG5ld1JlZjogVClcclxuXHR7XHJcblx0XHRpZiAodGhpc1tzeW1SZWZdICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXNbc3ltUmVmXSA9IG5ld1JlZjtcclxuXHRcdFx0dGhpcy5jaGFuZ2VkRXZlbnQuZmlyZSggbmV3UmVmKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGUgUmVmPD5cclxuICogaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnRcclxuICoge1xyXG4gKiAgICAgQHJlZiBteURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAqICAgICByZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIG15RGl2IHByb3BlcnR5IHdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIHRoZSBIVE1MIGRpdiBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBoYW5kbGVyID0gbmV3IFJlZlByb3h5SGFuZGxlcigpO1xyXG5cdGhhbmRsZXIucHJveHkgPSBuZXcgUHJveHkoIHt9LCBoYW5kbGVyKTtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSxcclxuXHRcdHtcclxuICAgICAgICAgICAgc2V0KCB2OiBhbnkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIub2JqID0gdjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIucHJveHk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFJlZlByb3h5SGFuZGxlciBpcyBhIHByb3h5IGhhbmRsZXIgZm9yIHRoZSBvYmplY3RzIGNyZWF0ZWQgd2hlbiByZWZlcmVuY2UgaXMgZGVmaW5lZCB1c2luZ1xyXG4gKiB0aGUgQHJlZiBkZWNvcmF0b3IuIE9ubHkgdGhlIFwiclwiIHByb3BlcnR5IGhhcyBzcGVjaWFsIGhhbmRsaW5nIChiZWNhdXNlIGl0IGlzIHVzZWQgYnkgdGhlXHJcbiAqIHNldFJlZiBmdW5jdGlvbik7IGV2ZXJ5dGhpbmcgZWxzZSBpcyByZWZsZWN0ZWQgZnJvbSB0aGUgcmVtZW1iZXJlZCByZWZlcmVuY2VkIG9iamVjdC5cclxuICovXHJcbmNsYXNzIFJlZlByb3h5SGFuZGxlciBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxhbnk+XHJcbntcclxuICAgIC8vIEtlZXBzIHRoZSBwcm94eSBvYmplY3QgZm9yIHdoaWNoIHRoaXMgaXMgdGhlIGhhbmRsZXJcclxuICAgIHB1YmxpYyBwcm94eTogYW55O1xyXG5cclxuICAgIC8vIEtlZXBzIHRoZSByZWZlcmVuY2VkIG9iamVjdCBvciB1bmRlZmluZWRcclxuICAgIHB1YmxpYyBvYmo6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcHJvcCA9PT0gXCJyXCIgPyB0aGlzLm9iaiA6IHRoaXMub2JqW3Byb3BdO1xyXG4gICAgICAgIC8vIFJlZmxlY3QuZ2V0IGRvZXNuJ3Qgd29yayBidXQgcmVndWxhciBwcm9wZXJ0eSBnZXQgZG9lc1xyXG4gICAgICAgIC8vIHJldHVybiBwcm9wID09PSBcInJcIiA/IHRoaXMub2JqIDogUmVmbGVjdC5nZXQoIHRoaXMub2JqLCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55LCByZWNlaXZlcjogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wID09PSBcInJcIilcclxuICAgICAgICAgICAgdGhpcy5vYmogPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMub2JqW3Byb3BdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIFJlZmxlY3Quc2V0IGRvZXNuJ3Qgd29yayBidXQgcmVndWxhciBwcm9wZXJ0eSBzZXQgZG9lc1xyXG4gICAgICAgIC8vIHJldHVybiBSZWZsZWN0LnNldCggdGhpcy5vYmosIHByb3AsIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoIHRoaXMub2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgYXR0cnM6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcy5vYmosIHByb3AsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0aGlzLm9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0V4dGVuc2libGUoIHRhcmdldDogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSk6IFByb3BlcnR5RGVzY3JpcHRvciB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5vYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKCBSZWZsZWN0LmVudW1lcmF0ZSggdGhpcy5lbnVtZXJhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3duS2V5cyggdGFyZ2V0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiByZWYgcHJvcGVydHkgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIEpTWCBlbGVtZW50cyBhbmQgY29tcG9uZW50cy4gVGhpcyBjYW4gYmUgZWl0aGVyIHRoZVxyXG4gKiBbW1JlZl1dIGNsYXNzIG9yIFtbUmVmRnVuY11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmUHJvcFR5cGU8VCA9IGFueT4gPSBUIHwgUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCAocmVmIGFzIFJlZikuciA9PT0gb25seUlmKVxyXG5cdFx0XHQocmVmIGFzIFJlZikuciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jKSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0LyoqIFRvcC1sZXZlbCBub2RlICovXHJcblx0Um9vdCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgY3JlYXRlZCB2aWEgbmV3ICovXHJcblx0SW5kZXBlbmRlbnRDb21wLFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBsYWlkIG91dCB1c2luZyBKU1ggKi9cclxuXHRNYW5hZ2VkQ29tcCxcclxuXHJcblx0LyoqIFN0YXRlbGVzcyBjb21wb25lbnQgKHNpbXBsZSByZW5kZXJpbmcgZnVuY3Rpb24gYWNjZXB0aW5nIHByb3BzKSAqL1xyXG5cdEZ1bmNDb21wLFxyXG5cclxuXHQvKiogRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guICovXHJcblx0RWxtLFxyXG5cclxuXHQvKiogVGV4dCBub2RlICovXHJcblx0VGV4dCxcclxuXHJcblx0LyoqIFdyYXBwZXIgYXJvdW5kIGEgZnVuY3Rpb24vbWV0aG9kIHRoYXQgY2FuIGJlIHVwZGF0ZWQgaW5kZXBlbmRlbnRseS4gKi9cclxuXHRGdW5jUHJveHksXHJcblxyXG5cdC8qKiBOb2RlIHRoYXQgd2FpdHMgZm9yIGEgcHJvbWlzZSB0byBiZSBzZXR0bGVkIGFuZCB0aGVuIGRpc3BsYXlzIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBjb250ZW50LiAqL1xyXG5cdFByb21pc2VQcm94eSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHJlYWRvbmx5IHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBDb21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0d3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc0NvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgY29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNYW5hZ2VkQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUluZGVwZW5kZW50Q29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIGNvbXBvbmVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBJRWxtVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgRE9NIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbG1WTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG5hbWUuICovXHJcblx0cmVhZG9ubHkgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyAoYXMgb3Bwb3NlZCB0byBIVE1MKS4gKi9cclxuXHRyZWFkb25seSBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG9iamVjdC4gKi9cclxuXHRyZWFkb25seSBlbG06IEVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGV4dFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIHRleHQgRE9NIG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0Vk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBUZXh0IG9mIHRoZSBub2RlLiAqL1xyXG5cdHRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqIFRleHQgRE9NIG5vZGUuICovXHJcblx0dGV4dE5vZGU6IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENDdXN0b20gYXR0cmlidXRlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgY2xhc3MgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gYXR0cmlidXRlIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIGF0dHJOYW1lOiBzdHJpbmcsIGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPik6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggYXR0ck5hbWUsIHsgdHlwZTogUHJvcFR5cGUuQ3VzdG9tQXR0ciwgaGFuZGxlckNsYXNzIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBldmVudCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUV2ZW50KCBldmVudE5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggZXZlbnROYW1lLCB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGNvbXBvbmVudCBjbGFzcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgdHlwZSBkZWZpbmVzIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgdXBkYXRlTWVcclxuICogbWV0aG9kIGlmIHRoZSBnb2FsIGlzIG5vdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQgYnV0IG9ubHkgb25lIG9yIHNldmVyYWwgcmVuZGVyaW5nXHJcbiAqIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgPSBGdW5jdGlvbiB8IHsgZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueSB9XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoaXMgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIHJlbmRlclxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gVGhpcyBpcyBub3JtYWxseSB1c2VkIG9ubHkgYnkgbWFuYWdlZFxyXG5cdCAqIGNvbXBvbmVudHMgYW5kIGlzIHVzdWFsbHkgdW5kZWZpbmVkIGZvciBpbmRlcGVuZGVudCBjb3BvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGljIHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbWVtYmVyZWQgdmlydHVhbCBub2RlIG9iamVjdCB0aHJvdWdoIHdoaWNoIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuIFRoaXNcclxuXHQgKiBpcyB1bmRlZmluZWQgaW4gdGhlIGNvbXBvbmVudCdzIGNvc3RydWN0b3IgYnV0IHdpbGwgYmUgZGVmaW5lZCBiZWZvcmUgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogKG9wdGlvbmFsKSB3aWxsTW91bnQgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2bjogSVZOb2RlO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0fVxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cHVibGljIGFic3RyYWN0IHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gSWYgbm8gYXJndW1lbnRzIGFyZVxyXG5cdCAqIHByb3ZpZGVkLCB0aGUgZW50aXJlIGNvbXBvbmVudCBpcyByZXF1ZXN0ZWQgdG8gYmUgdXBkYXRlZC4gSWYgYXJndW1lbnQgYXJlIHByb3ZpZGVkLCB0aGV5XHJcblx0ICogaW5kaWNhdGUgd2hhdCByZW5kZXJpbmcgZnVuY3Rpb25zIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB1cGRhdGVSZXF1ZXN0cyBcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoIC4uLnVwZGF0ZVJlcXVlc3RzOiBDb21wb25lbnRVcGRhdGVSZXF1ZXN0W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnZuKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHVwZGF0ZVJlcXVlc3RzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgbm8gYXJndW1lbnRzIGFyZXIgcHJvdmlkZWQgd2UgcmVxdWVzdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQuXHJcblx0XHRcdHRoaXMudm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgdXBkYXRlIHJlcXVlc3QgYXJndW1lbnRzXHJcblx0XHRcdGZvciggbGV0IHJlcSBvZiB1cGRhdGVSZXF1ZXN0cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVxID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgRnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoaXNDYWxsYmFjaywgdGhpcy52bik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCdWlsdCBpbiBjb21wb25lbnRzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPEZyYWdtZW50PlxyXG4gKlx0XHRcdDxkaXYxLz5cclxuICpcdFx0XHQ8ZGl2Mi8+XHJcbiAqXHRcdFx0PGRpdjMvPlxyXG4gKlx0XHQ8L0ZyYWdtZW50PlxyXG4gKlx0fVxyXG4gIGBgYFxyXG5cclxuICogQHBhcmFtIHByb3BzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KCBwcm9wczogQ29tcFByb3BzPHt9Pik6IGFueSB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0byBiZSB1c2VkIHdpdGggdGhlIEZ1bmNQcm94eSBjb21wb25lbnQuIEZ1bmNQcm94eSBjb21wb25lbnQgY2Fubm90IGhhdmUgY2hpbGRyZW4uXHJcbiAqIEEga2V5IHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gbXVsdGlwbGUgdXNlcyBvZiB0aGUgc2FtZSBmdW5jdGlvbi4gSWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIHdpdGhpbiBhIGNvbXBvbmVudCwgdGhlIGtleSBpcyBub3QgbmVjZXNzYXJ5OyBob3dldmVyLCBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcywga2V5IGlzIG1hbmRhdG9yeSAtIG90aGVyd2lzZSwgdGhlIGJlaGF2aW9yIGlzIHVuZGV0ZXJtaW5lZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVuY1Byb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBGdW5jdGlvbiB0aGF0IHJlbmRlcnMgY29udGVudC4gKi9cclxuXHRmdW5jOiBGdW5jdGlvbjtcclxuXHJcblx0LyoqXHJcblx0ICogQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uIFdoZW5ldmVyIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGlzXHJcblx0ICogcGFyYW1ldGVyIGlzIHVzZWQgd2hlbiBjYWxsaW5nIHRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdGFyZ3M/OiBhbnlbXTtcclxuXHJcblx0LyoqXHJcblx0ICogVmFsdWUgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZVxyXG5cdCAqIGNsYXNzIGJhc2VkIGNvbXBvbmVudCB0aGF0IHJlbmRlcmVkIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdpbGwgYmUgdXNlZCAod2hpY2ggaXMgdGhlXHJcblx0ICogbW9zdCBjb21tb24gY2FzZSkuXHJcblx0ICovXHJcblx0dGhpc0FyZz86IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGFyZ3VtZW50cyBzcGVjaWZpZWQgYnkgdGhlIGBhcmdzYCBwcm9wZXJ0eSBzaG91bGQgYmUgcGFzc2VkIHRvXHJcblx0ICogdGhlIGZ1bmN0aW9uIG92ZXJyaWRpbmcgYXJndW1lbnRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgYnkgdGhlIG1vc3QgcmVjZW50IGNhbGwgdG8gdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QuIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgZmFsc2UgYW5kIGBhcmdzYCB3aWxsIGJlXHJcblx0ICogdXNlZCBvbmx5IHRoZSBmaXJzdCB0aW1lIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBJZiB0aGVcclxuXHQgKiBGdW5jUHJveHkudXBkYXRlIG1ldGhvZCBpcyBjYWxsZWQsIHRoZSBhcmd1bWVudCBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIHdpbGwgcmVwbGFjZSB0aGVcclxuXHQgKiBvcmlnaW5hbCBhcmd1bWVudHMuIFRoZSBuZXh0IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgcmVuZGVyZWQsIHRoZSBgYXJnc2AgcHJvcGVydHlcclxuXHQgKiB3aWxsIGJlIGlnbm9yZWQuXHJcblx0ICogXHJcblx0ICogTm90ZSB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGFjdGlvbnMgdGhhdCBvY2N1cnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIGZhbHNlIG9yIG9taXR0ZWQ6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQVwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJCXCIpLiBcIkJcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQlwiIHdpbGwgc3RpbGwgYmUgdXNlZC5cclxuXHQgKiBcclxuXHQgKiBJZiB0aGUgYHJlcGxhY2VBcmdzYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBldmVyeSB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW5ldCBpc1xyXG5cdCAqIHJlbmRlcmVkLCB0aGUgdmFsdWUgb2YgdGhlIGBhcmdzYCBwcm9wZXJ0eSByZXBsYWNlcyB3aGF0ZXZlciBhcmd1bWVudHMgdGhlcmUgd2VyZSBiZWZvcmUuXHJcblx0ICogXHJcblx0ICogTm93IG5vdGUgdGhlIHNlcXVlbmNlIG9mIGFjdGlvbnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIHRydWU6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgcmVwbGFjZUFyZ3MgLz4uXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LiBcIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZCBhZ2Fpbi5cclxuXHQgKi9cclxuXHRyZXBsYWNlQXJncz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdyYXBzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBjb250ZW50LiBQcm94aWVzIGNhbiB3cmFwIGluc3RhbmNlXHJcbiAqIG1ldGhvZHMgb2YgY2xhc3NlcyB0aGF0IGhhdmUgYWNjZXNzIHRvIFwidGhpc1wiIHRodXMgYWxsb3dpbmcgYSBzaW5nbGUgY2xhc3MgdG8gXCJob3N0XCIgbXVsdGlwbGVcclxuICogY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5vdCBpbnRlbmRlZCB0byBiZVxyXG4gKiBjcmVhdGVkIGJ5IGRldmVsb3BlcnM7IGluc3RlYWQgaXQgaXMgb25seSB1c2VkIGluIGl0cyBKU1ggZm9ybSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxGdW5jUHJveHkgZnVuYz17dGhpcy5yZW5kZXJTb21ldGhpbmd9IGtleT17Li4ufSBhcmdzPXsuLi59IHRoaXNBcmc9ey4uLn0gLz5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGVyZSBpcyBhIHNpbXBsZXIgbWV0aG9kIG9mIHNwZWNpZnlpbmcgYSByZW5kZXJpbmcgZnVuY3Rpb24gaW4gSlNYLCBlLmcuOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxkaXY+e3RoaXMucmVuZGVyU29tZXRoaW5nfTwvZGl2PlxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdG1vdW50Um9vdCggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnQgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0aGUgY29udGVudCB3YXMgcHJldmlvdXNseSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHR1bm1vdW50Um9vdCggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSBgQHRyaWdnZXJgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRhYmxlKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc1thdHRyTmFtZV0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm46IElWTm9kZSA9IHRoaXMudm47XHJcbiAgICAgICAgICAgICAgICBpZiAodm4gJiYgIXZuLnVwZGF0ZVJlcXVlc3RlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBkZWZpbml0aW9ucyBvZiBbW1BvcHVwXV0sIFtbRGlhbG9nXV0gYW5kIFtbTXNnQm94XV0gY29tcG9uZW50cy5cclxuICpcclxuICogVGhlIFtbUG9wdXBdXSBjb21wb25lbnQgaXMgYSBiYXNlIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcG9wdXAgdXNpZyB0aGUgYDxkaWFsb2c+YCBIVE1MXHJcbiAqIGVsZW1lbnQuIFRoZSBbW0RpYWxvZ11dIGNvbXBvbmVudCBkZXJpdmVzIGZyb20gW1tQb3B1cF1dIGFuZCBkaXZpZGVzIHRoZSBwb3B1cCBhcmVhIGludG9cclxuICogc2Vjb250aW9ucyBmb3IgY2FwdGlvbiwgYm9keSBhbmQgYnV0dG9uIGJhci4gRGlhbG9ncyBzdXBwb3J0IG1vdmluZyBhcm91bmQgYnkgY2xpY2tpbmcgb24gdGhlXHJcbiAqIGNhcHRpb24gYXJlYS4gVGhlIFtbTXNnQm94XV0gY29tcG9uZW50IGRlcml2ZXMgZnJvbSBbW0RpYWxvZ11dIGFuZCBkaXNwbGF5cyBhIG1lc3NhZ2VcclxuICogb3B0aW9uYWxseSBhY2NvbXBhbm5pZWQgd2l0aCBhbiBpY29uIGFuZCBhIHByZS1kZWZpbmVkIHNldCBvZiBidXR0b25zLlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtQcm9taXNlRXgsIGNyZWF0ZVByb21pc2VFeH0gZnJvbSBcIi4uL2FwaS9VdGlsQVBJXCI7XHJcbmltcG9ydCB7dHJpZ2dlcn0gZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcbmltcG9ydCB7IE11bHRpRXZlbnRTbG90LCBjcmVhdGVNdWx0aUV2ZW50U2xvdCB9IGZyb20gXCIuLi91dGlscy9FdmVudFNsb3RcIjtcclxuXHJcblxyXG5cclxuLyoqIFVzaW5nIG1vZHVsZSBhdWdtZW50YXRpb24gdGVjaG5pcXVlIHRvIGV4dGVuZCB0aGUgSVNlcnZpY2VEZWZpbml0aW9uIGludGVyZmFjZSAqL1xyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL2FwaS9taW1cIlxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZGluZyB0aGUgSVNlcnZpY2VEZWZpbml0aW9uIGludGVyZmFjZSB3aXRoIHNlcnZpY2VzIHVzZWQgYnkgdGhlIFtbUG9wdXBdXSBhbmRcclxuICAgICAqIFtbRGlhbG9nXV0gY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgXCJwb3B1cFwiIHNlcnZpY2UgZ2l2ZXMgY29tcG9uZW50cyB1c2VkIGluIHRoZSBjb250ZW50IG9mIHRoZSBbW1BvcHVwXV0gY29tcG9uZW50XHJcbiAgICAgICAgICogYWNjZXNzIHRvIHRoZSBbW0lQb3B1cF1dIGludGVyZmFjZSwgdGhyb3VnaCB3aGljaCB0aGV5IGNhbiBjbG9zZSB0aGUgcG9wdXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcG9wdXA6IElQb3B1cDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIFwiZGlhbG9nXCIgc2VydmljZSBnaXZlcyBjb21wb25lbnRzIHVzZWQgaW4gdGhlIGNhcHRpb24gb3IgdGhlIGJvZHkgb2YgdGhlIFtbRGlhbG9nXV1cclxuICAgICAgICAgKiBjb21wb25lbnQgYWNjZXNzIHRvIHRoZSBbW0lEaWFsb2ddXSBpbnRlcmZhY2UsIHRocm91Z2ggd2hpY2ggdGhleSBjYW4gYWRkIGJ1dHRvbnNcclxuICAgICAgICAgKiBhbmQgb3RoZXJ3aXNlIG1hbmlwdWxhdGUgdGhlIGRpYWxvZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaWFsb2c6IElEaWFsb2c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvcHVwXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXAgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBwb3B1cCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjb250ZW50LiBUaGlzIGludGVyZmFjZVxyXG4gKiBpcyBwdWJsaXNoZWQgYXMgYSBzZXJ2aWNlIGFuZCBjYW4gYmUgdXNlZCBieSB0aGUgY29udGVudCBjb21wb25lbnRzIHRvIGNsb3NlIHRoZSBwb3B1cC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBwb3B1cCBhbmQgcGFzc2VzIGEgdmFsdWUgdG8gYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZS4gRm9yIHRoZSBtb2RhbCBwb3B1cHMsXHJcbiAgICAgKiB0aGlzIHZhbHVlIHdpbGwgYmUgdGhlIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBzaG93TW9kYWwoKSBtZXRob2QuXHJcbiAgICAgKiBGb3IgbW9kZWxlc3MgcG9wdXBzLCB0aGlzIHZhbHVlIHdpbGwgYmUgYXZhaWxhYmxlIGFzIHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSByZXR1cm5WYWx1ZVxyXG4gICAgICovXHJcbiAgICBjbG9zZSggcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwU3R5bGVzIGludGVyZmFjZSBkZWZpbmVzIHN0eWxlcyB1c2VkIGJ5IHRoZSBQb3B1cCBjbGFzcyB0byBjcmVhdGUgdGhlIGA8ZGlhbG9nPmBcclxuICogZWxlbWVudC4gVGhlIGltcGxlbWVudGF0aW9ucyBzaG91bGQgcHJvdmlkZSB0aGUgY2xhc3MgcnVsZSBmb3IgdGhlIGRpYWxvZyBwcm9wZXJ0eSBhbmQgY2FuXHJcbiAqIGFsc28gZGVmaW5lIHRoZSA6OmJhY2tkcm9wIHBzZXVkbyBlbGVtZW50IHN0eWxlcywgd2hpY2ggaXMgdXNlZCB3aGVuIHRoZSBwb3B1cCBpcyBzaG93biBhcyBhXHJcbiAqIG1vZGFsIGRpYWxvZy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwU3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYDxkaWFsb2c+YCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2c/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRQb3B1cFN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb24gaW1wbGVtZW50cyBJUG9wdXBTdHlsZXNcclxue1xyXG4gICAgLyoqIFN0eWxlcyBmb3IgdGhlIGA8ZGlhbG9nPmAgZWxlbWVudC4gKi9cclxuICAgIGRpYWxvZyA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIGJvcmRlcjogWzEsIFwic29saWRcIiwgXCJncmV5XCJdLFxyXG4gICAgICAgIGJveFNoYWRvdzogeyB4OiA0LCB5OiA0LCBibHVyOiA0LCBjb2xvcjogXCJsaWdodGdyZXlcIiB9LFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBjc3Muc2NhbGUoMC4xKSxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiB7IHByb3BlcnR5OiBcInRyYW5zZm9ybVwiLCBkdXJhdGlvbjogMjAwIH0sXHJcbiAgICAgICAgXCI6OmJhY2tkcm9wXCI6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgb3BhY2l0eTogMC4zIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXBPcHRpb25zIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvcHRpb25zIHRoYXQgY29maWd1cmUgdGhlIGJlaGF2aW9yIG9mIHRoZSBQb3B1cFxyXG4gKiBvYmplY3QuIFRoZXkgYXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IgdG8gdGhlIFtbUG9wdXBdXSBjbGFzc1xyXG4gKiBAdHlwZVBhcmFtIFRTdHlsZXMgVHlwZSBmb3IgdGhlIHN0eWxlcyBwcm9wZXJ0eS4gT3B0aW9ucyBmb3IgZGVyaXZlZCBjb21wb25lbnRzIHdpbGwgaGF2ZSB0b1xyXG4gKiBkZXJpdmUgZnJvbSB0aGUgSVBvcHVwT3B0aW9ucyBpbnRlcmZhY2UgYW5kIHRvIGltcGxlbWVudCB0aGUgW1tJUG9wdXBTdHlsZXNdXSBpbnRlcmZhY2UgZm9yXHJcbiAqIHRoZSBzdHlsZXMgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cE9wdGlvbnM8VFN0eWxlcyBleHRlbmRzIElQb3B1cFN0eWxlcyA9IElQb3B1cFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgc3R5bGVzIHRvIHVzZSBmb3IgdGhlIGA8ZGlhbG9nPmAgZWxlbWVudCBhbmQgb3B0aW9uYWxseSBmb3IgdGhlIDo6YmFja2Ryb3BcclxuICAgICAqIHBzZXVkbyBlbGVtZW50LiBUaGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW1wbGVtZW50aW5nIHRoZVxyXG4gICAgICogW1tJUG9wdXBTdHlsZXNdXSBpbnRlcmZhY2Ugb3IgYW4gaW5zdGFuY2Ugb2Ygc3VjaCBjbGFzcy4gVGhlIHBvcHVwIGFjdGl2YXRlcyB0aGUgc3R5bGVzXHJcbiAgICAgKiB3aGVuIGl0IG9wZW5zIGFuZCBkZWFjdGl2YXRlcyB0aGVtIHdoZW4gaXQgY2xvc2VzLiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuICAgICAqIHBvcHVwIHdpbGwgdXNlIHRoZSBkZWZhdWx0IHN0eWxlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzdHlsZXM/OiBUU3R5bGVzIHwgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxUU3R5bGVzPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYDxkaWFsb2c+YCBlbGVtZW50LiBJZiB0aGlzIHByb3BlcnR5IGlzIGRlZmluZWQsXHJcbiAgICAgKiB0aGUgW1tzdHlsZV1dIHByb3BlcnR5IGlzIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nU3R5bGVDbGFzcz86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgdGhhdCBpcyByZXR1cm5lZCB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgcG9wdXAgYnkgcHJlc3NpbmcgdGhlIEVzY2FwZSBrZXkuIElmIHRoaXNcclxuICAgICAqIHByb3BlcnR5IGlzIHVuZGVmaW5lZCwgdGhlIHBvcHVwIGNhbm5vdCBiZSBjbG9zZWQgd2l0aCB0aGUgRXNjYXBlIGtleS4gTm90ZSB0aGF0IG51bGwgaXNcclxuICAgICAqIHZhbGlkIHZhbHVlIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2xvc2UgYSBwb3B1cC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4gICAgICpcclxuICAgICAqIEZvciBtb2RhbCBwb3B1cHMsIHRoaXMgcHJvcGVydHkgYWxzbyBjb250cm9scyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBkaXNtaXNzIHRoZSBwb3B1cCBieVxyXG4gICAgICogY2xpY2tpbmcgb24gdGhlIGJhY2tkcm9wIC0gdGhhdCBpcywgdGhlIGFyZWEgb3V0c2lkZSBvZiB0aGUgcG9wdXAgaXRzbGVmLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBlc2NhcGVSZXR1cm5WYWx1ZT86IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhUTUwgZWxlbWVudCB1bmRlciB3aGljaCB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGlzIGNyZWF0ZWQuIElmIHRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGA8ZGlhbG9nPmAgZWxlbWVudCBpcyBjcmVhdGVkIHVuZGVyIHRoZSBgPGJvZHk+YCBlbGVtZW50LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFuY2hvckVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFgtY29vcmRpbmF0ZSBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBkaWFsb2cgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQuIElmIHVuZGVmaW5lZCxcclxuICAgICAqIHRoZSBkaWFsb2cgd2lsbCBiZSBjZW50ZXJlZCBob3Jpem9udGFsbHkuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGluaXRpYWxYPzogY3NzLkNzc0xlbmd0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFktY29vcmRpbmF0ZSBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBkaWFsb2cgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQuIElmIHVuZGVmaW5lZCxcclxuICAgICAqIHRoZSBkaWFsb2cgd2lsbCBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpbml0aWFsWT86IGNzcy5Dc3NMZW5ndGg7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXBFdmVudHMgaW50ZXJmYWNlIHJlcHJlc2VudHMgZXZlbnRzIHRoYXQgdGhlIFBvcHVwIGNvbXBvbmVudCBjYW4gZmlyZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXBFdmVudHNcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3BlbiBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwb3B1cCBvcGVucy5cclxuICAgICAqIEBwYXJhbSBpc01vZGFsIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBvcGVucyBhcyBtb2RhbCBvciBtb2RlbGVzc1xyXG4gICAgICovXHJcblx0b3BlbiggaXNNb2RhbDogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2xvc2UgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcG9wdXAgY2xvc2VzLlxyXG4gICAgICogQHBhcmFtIHJldFZhbCBWYWx1ZSBwYXNzZWQgdG8gdGhlIGNsb3NlKCkgbWV0aG9kLlxyXG4gICAgICovXHJcbiAgICBjbG9zZSggcmV0VmFsOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUG9wdXAgY2xhc3MgYWxsb3dzIGRpc3BsYXlpbmcgbW9kYWwgYW5kIG1vZGVsZXNzIHBvcHVwcy4gVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3JcclxuICogZGlhbG9ncyBhbmQgbWVzc2FnZSBib3hlcy4gQWZ0ZXIgdGhlIFBvcHVwIGluc3RhbmNlIGlzIGNyZWF0ZWQgaXQgY2FuIGJlIHNob3duIGVpdGhlciBhcyBtb2RhbFxyXG4gKiBvciBtb2RlbGVzcyBwb3B1cC4gQm90aCB0eXBlcyBvZiB0aGUgcG9wdXAgY2FuIGJlIGNsb3NlZCB1c2luZyB0aGUgY2xvc2UoKSBtZXRob2QuIEluIG9yZGVyIGZvclxyXG4gKiB0aGUgcG9wdXAgdG8gYmUgY2xvc2VkIFwiZnJvbSBpbnNpZGVcIiAtIHRoYXQgaXMsIGJ5IHRoZSBjb21wb25lbnQsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIHBvcHVwXHJcbiAqIGNvbnRlbnQgLSB0aGUgcG9wdXAgb2JqZWN0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnQuXHJcbiAqXHJcbiAqIFRoZSBQb3B1cCBjbGFzcyBpdHNlbGYgZG9lc24ndCBwcm92aWRlIGFueSBtZWFucyBmb3IgdGhlIHVzZXIgdG8gc3RhcnQgbW92aW5nIGl0IGFyb3VuZDtcclxuICogaG93ZXZlciwgaXQgYWxsb3dzIGluaXRpYXRpbmcgdGhlIG1vdmUgYWN0aW9uIHVzaW5nIHRoZSBzdGFydE1vdmUoKSBtZXRob2QuIE9uY2UgdGhpcyBtZXRob2RcclxuICogaXMgY2FsbGVkLCB0aGUgUG9wdXAgd2lsbCBzdGFydCBtb25pdG9yaW5nIG1vdXNlIChwb2ludGVyKSBhY3Rpdml0eSBhbmQgbW92ZSB0aGUgZGlhbG9nXHJcbiAqIGFjY29yZGluZ2x5LlxyXG4gKlxyXG4gKiBUaGUgY29udGVudCBvZiB0aGUgcG9wdXAgY2FuIGJlIHJlcGxhY2VkIHdoaWxlIGl0IGlzIGJlaW5nIGRpc3BsYXllZCB1c2luZyB0aGUgc2V0Q29udGVudCgpXHJcbiAqIG1ldGhvZC5cclxuICpcclxuICogQHR5cGVQYXJhbSBUU3R5bGVzIFR5cGUgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdXNlZCB0byBzcGVjaWZ5IENTUyBzdHlsZXMgZm9yIHRoZVxyXG4gKiBjb21wb25lbnQuIE11c3QgaW1wbGVtZW50IHRoZSBJUG9wdXBTdHlsZXMgaW50ZXJmYWNlLlxyXG4gKiBAdHlwZVBhcmFtIFRPcHRpb25zIFR5cGUgb2YgdGhlIG9iamVjdCB1c2VkIHRvIHNwZWNpZnkgb3B0aW9ucyBmb3IgdGhlIGNvbXBvbmVudC4gTXVzdFxyXG4gKiBpbXBsZW1lbnQgdGhlIElQb3B1cE9wdGlvbnMgaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcHVwPFRTdHlsZXMgZXh0ZW5kcyBJUG9wdXBTdHlsZXMgPSBJUG9wdXBTdHlsZXMsXHJcbiAgICAgICAgICAgIFRPcHRpb25zIGV4dGVuZHMgSVBvcHVwT3B0aW9uczxUU3R5bGVzPiA9IElQb3B1cE9wdGlvbnM8VFN0eWxlcz4+XHJcbiAgICAgICAgICAgIGV4dGVuZHMgbWltLkNvbXBvbmVudCBpbXBsZW1lbnRzIElQb3B1cFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFBvcHVwIGlzIGNvbnN0cnVjdGVkIGJ5IHNwZWNpZnlpbmcgdGhlIGluaXRpYWwgY29udGVudCBpdCBzaG91bGQgZGlzcGxheSBhbmQgdGhlIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIGNvbnRlbnQ/OiBhbnksIG9wdGlvbnM/OiBUT3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXlzIHRoZSBwb3B1cCBhcyBhIG1vZGVsZXNzIGRpYWxvZy4gVGhlIG1ldGhvZCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgcG9wdXBcclxuICAgICAqIGlzIGFscmVhZHkgb3BlbiBhcyBhIG1vZGFsIHBvcHVwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlbigpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3JldHVyblZhbHVlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZGxnLnNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbk9wZW4oIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXlzIHRoZSBwb3B1cCBhcyBhIG1vZGVsZXNzIGRpYWxvZyBhbmQgcmV0dXJucyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZVxyXG4gICAgICogcG9wdXAgaXMgY2xvc2VkLiBUaGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgaXMgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UoKVxyXG4gICAgICogbWV0aG9kLiBUaGUgbWV0aG9kIHdpbGwgcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSBpZiB0aGUgcG9wdXAgaXMgYWxyZWFkeSBvcGVuLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01vZGFsKCk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCBuZXcgRXJyb3IoIFwiUG9wdXAgYWxyZWFkeSBvcGVuXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kbGcuc2hvd01vZGFsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBlc2NhcGVSZXR1cm5WYWx1ZSBpcyBkZWZpbmVkIGluIHRoZSBvcHRpb25zLCBzdGFydCBsaXN0ZW5pbmcgdG8gdGhlIGNsaWNrIGV2ZW50c1xyXG4gICAgICAgIC8vIHRvIGRldGVjdCBjbGlja3Mgb3V0c2lkZSB0aGUgcG9wdXAgYmVjYXVzZSB0aGV5IHdpbGwgYWN0IGFzIEVzY2FwZSB0b28uXHJcbiAgICAgICAgbGV0IGVzY2FwZVJldFZhbCA9IHRoaXMuZ2V0UmV0dXJuVmFsdWVGb3JFc2NhcGVLZXkoKTtcclxuICAgICAgICBpZiAoZXNjYXBlUmV0VmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuZGxnLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgdGhpcy5vbkRldGVjdENsaWNrT3V0c2lkZSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxQcm9taXNlID0gY3JlYXRlUHJvbWlzZUV4KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgcG9wdXAgYW5kIHBhc3NlcyBhIHZhbHVlIHRvIGJlIHVzZWQgYXMgYSByZXR1cm4gdmFsdWUuIEZvciB0aGUgbW9kYWwgcG9wdXBzLFxyXG4gICAgICogdGhpcyB2YWx1ZSB3aWxsIGJlIHRoZSByZXNvbHZlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgc2hvd01vZGFsKCkgbWV0aG9kLlxyXG4gICAgICogRm9yIG1vZGVsZXNzIHBvcHVwcywgdGhpcyB2YWx1ZSB3aWxsIGJlIGF2YWlsYWJsZSBhcyB0aGUgcmV0dXJuVmFsdWUgcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0gcmV0VmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZSggcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZSlcclxuXHRcdHtcclxuICAgICAgICAgICAgbGV0IGVzY2FwZVJldFZhbCA9IHRoaXMuZ2V0UmV0dXJuVmFsdWVGb3JFc2NhcGVLZXkoKTtcclxuICAgICAgICAgICAgaWYgKGVzY2FwZVJldFZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kbGcucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCB0aGlzLm9uRGV0ZWN0Q2xpY2tPdXRzaWRlKTtcclxuXHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlLnJlc29sdmUoIHJldHVyblZhbHVlKTtcclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2UgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIHRoaXMuZGxnLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JldHVyblZhbHVlID0gcmV0dXJuVmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMub25DbG9zZSggcmV0dXJuVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBFdmVudHMgdGhhdCBjYW4gYmUgZmlyZWQgYnkgdGhlIFBvcHVwIGNvbXBvbmVudCAqL1xyXG4gICAgcHVibGljIGdldCBldmVudHMoKTogTXVsdGlFdmVudFNsb3Q8SVBvcHVwRXZlbnRzPiB7IHJldHVybiB0aGlzLl9ldmVudHM7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgcG9wdXAgaXMgY3VycmVudGx5IG9wZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5kbGcgIT0gbnVsbDsgfVxyXG5cclxuXHQvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGVsZXNzLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzT3BlbiAmJiAhdGhpcy5tb2RhbFByb21pc2U7IH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3BlbiBhcyBtb2RhbC5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBpc01vZGFsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc09wZW4gJiYgdGhpcy5tb2RhbFByb21pc2UgIT0gbnVsbDsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgc2V0IGJ5IHRoZSBjbG9zZSgpIG1ldGhvZC4gSWYgdGhlIHBvcHVwIGlzIG9wZW4sIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmV0dXJuVmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3JldHVyblZhbHVlOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgcG9wdXAgaXMgY3VycmVudGx5IHZpc2libGUgb3IgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNWaXNpYmxlKCB2OiBib29sZWFuKSB7IHRoaXMuX2lzVmlzaWJsZSA9IHY7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQgb2YgdGhlIHBvcHVwIHdpdGggdGhlIGdpdmVuIG9uZS5cclxuICAgICAqIEBwYXJhbSBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb250ZW50KCBjb250ZW50OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBTdGFydHMgbW9uaXRvcmluZyBtb3VzZSBtb3ZlbWVudHMgYW5kIG1vdmVzIHRoZSBwb3B1cCB3aXRoIHRoZSBtb3VzZS4gVGhpcyBtZXRob2QgaXNcclxuICAgICAqIGludGVudGVkIHRvIGJlIGNhbGxlZCBmcm9tIGEgbW91c2Vkb3duIGV2ZW50IGhhbmRsZWQgZWl0aGVyIGJ5IGEgZGVyaXZlZCBjbGFzcyBvciBieVxyXG4gICAgICogdGhlIHBvcHVwIGNhbGxlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0TW92ZSggY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRsZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyAvLyB3ZSBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIGFuZCBwcm9wYWdhdGlvbiBzbyB0aGF0IG1vdXNlIG1vdmVtZW50cyBkb24ndCBjYXVzZVxyXG5cdFx0Ly8gLy8gdGVzdCBpbiB0aGUgcG9wdXAgYW5kIG9uIHRoZSBwYWdlIHRvIGJlIHNlbGVjdGVkLlxyXG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRsZXQgcmVjdCA9IHRoaXMuZGxnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dGhpcy5tb3ZlUG9pbnRPZmZzZXRYID0gY2xpZW50WCAtIHJlY3QubGVmdDtcclxuXHRcdHRoaXMubW92ZVBvaW50T2Zmc2V0WSA9IGNsaWVudFkgLSByZWN0LnRvcDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlc1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS50b3AgPSByZWN0LnRvcCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyBcInB4XCI7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb2ludGVydXBcIiwgdGhpcy5vblBvaW50ZXJVcCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogU3RvcHMgbW9uaXRvcmluZyBtb3VzZSBtb3ZlbWVudHMuIFRoaXMgbWV0aG9kIGFsbG93cyBwcm9ncmFtbWF0aWNhbGx5IGludGVycnVwdFxyXG4gICAgICogZGlhbG9nIG1vdmluZyBvcGVyYXRpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcE1vdmUoKVxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInBvaW50ZXJtb3ZlXCIsIHRoaXMub25Qb2ludGVyTW92ZSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9pbnRlcnVwXCIsIHRoaXMub25Qb2ludGVyVXApO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVQb2ludE9mZnNldFggPSB0aGlzLm1vdmVQb2ludE9mZnNldFkgPSAwO1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcbiAgICAgKiBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG4gICAgICogYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgbW92ZVRvKCBuZXdYOiBudW1iZXIsIG5ld1k6IG51bWJlcilcclxuXHR7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRsZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmUoIG5ld1gsIG5ld1kpO1xyXG4gICAgICAgIHRoaXMuZGxnLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGRlcml2ZWQgY2xhc3NlcyBvdmVycmlkZSB0aGlzIG1ldGhvZCwgdGhleSBtdXN0IGNhbGwgc3VwZXIud2lsbE1vdW50KClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwicG9wdXBcIiwgdGhpcyk7XHJcblx0fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGRlcml2ZWQgY2xhc3NlcyBvdmVycmlkZSB0aGlzIG1ldGhvZCwgdGhleSBtdXN0IGNhbGwgc3VwZXIud2lsbFVubW91bnQoKVxyXG4gICAgICovXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcInBvcHVwXCIpO1xyXG5cclxuICAgICAgICAvLyBkZWFjdGl2YXRlIHN0eWxlc1xyXG4gICAgICAgIGNzcy5kZWFjdGl2YXRlKCB0aGlzLmRlZmF1bHRTdHlsZXMpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN0eWxlcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxTdHlsZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjc3MuZGVhY3RpdmF0ZSggdGhpcy5vcHRpb25hbFN0eWxlcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYW4gdXBcclxuICAgICAgICB0aGlzLmRsZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyIG1ldGhvZCBzaW1wbHkgcmV0dXJucyB0aGUgY3VycmVudCBjb250ZW50IGJ1dCBpdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXNcclxuICAgICAqL1xyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8vIENyZWF0ZXMgdGhlIGRpYWxvZyBlbGVtZW50XHJcbiAgICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2J0YWluIHRoZSBhbmNob3IgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYW5jaG9yRWxlbWVudCA/IHRoaXMub3B0aW9ucy5hbmNob3JFbGVtZW50IDogZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgb3VyIGRlZmF1bHQgc3R5bGVzIGFuZCBpZiBzdHlsZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucywgdGhlbiBhY3RpdmF0ZVxyXG4gICAgICAgIC8vIHRoZW0gdG9vLlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN0eWxlcyA9IGNzcy5hY3RpdmF0ZSggdGhpcy5nZXREZWZhdWx0U3R5bGVzKCkpIGFzIFRTdHlsZXM7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc3R5bGVzKVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzID0gY3NzLmFjdGl2YXRlKCB0aGlzLm9wdGlvbnMuc3R5bGVzKSBhcyBUU3R5bGVzO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgZGlhbG9nIGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgRE9NXHJcbiAgICAgICAgdGhpcy5kbGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpYWxvZ1wiKTtcclxuICAgICAgICB0aGlzLmRsZy5jbGFzc05hbWUgPSBjc3MuY2hvb3NlQ2xhc3MoIHRoaXMub3B0aW9ucz8uZGlhbG9nU3R5bGVDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcz8uZGlhbG9nLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nKTtcclxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMuZGxnKTtcclxuXHJcbiAgICAgICAgLy8gYXNzaWduIHBvc2l0aW9uaW5nIHN0eWxlcyBkaXJjdGx5IHRvIHRoZSBkaWFsb2cgZWxlbWVudC4gSWYgeCBhbmQvb3IgeSBhcmUgdW5kZWZpbmVkLFxyXG4gICAgICAgIC8vIHdlIGNlbnRlciB0aGUgZGlhbG9nIGhvcml6b250YWxseSBhbmQvb3IgdmVydGljYWxseVxyXG4gICAgICAgIGxldCBzdHlsZTogY3NzLlN0eWxlc2V0ID0geyBwb3NpdGlvbjogXCJmaXhlZFwiIH07XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgdGhpcy5vcHRpb25zLmluaXRpYWxYID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSBzdHlsZS5yaWdodCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdHlsZS5sZWZ0ID0gdGhpcy5vcHRpb25zLmluaXRpYWxYO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMuaW5pdGlhbFkgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc3R5bGUudG9wID0gc3R5bGUuYm90dG9tID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9IHRoaXMub3B0aW9ucy5pbml0aWFsWTtcclxuXHJcbiAgICAgICAgY3NzLnNldEVsZW1lbnRTdHlsZSggdGhpcy5kbGcsIHN0eWxlLCBjc3MuU2NoZWR1bGVyVHlwZS5TeW5jKTtcclxuXHJcbiAgICAgICAgLy8gbW91bnQgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIG1pbS5tb3VudCggdGhpcywgdGhpcy5kbGcpXHJcblxyXG4gICAgICAgIC8vIGVzdGFibGlzaCBsaXN0ZW5lciBmb3Iga2V5Ym9hcmQgZXZlbnRzXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzdHJveXMgdGhlIGRpYWxvZyBlbGVtZW50XHJcbiAgICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBmb3Iga2V5Ym9hcmQgZXZlbnRzXHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHJcbiAgICAgICAgLy8gdW5tb3VudCB0aGUgY29udGVudFxyXG4gICAgICAgIG1pbS51bm1vdW50KCB0aGlzLmRsZyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmRsZy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcbiAgICAgKiBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG4gICAgICogYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcbiAgICAgKi9cclxuXHRwcml2YXRlIG1vdmUoIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmIChuZXdYIDwgMClcclxuXHRcdFx0bmV3WCA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdYICsgMzAgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0bmV3WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzA7XHJcblxyXG5cdFx0aWYgKG5ld1kgPCAwKVxyXG5cdFx0XHRuZXdZID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1kgKyAzMCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuXHRcdFx0bmV3WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gbmV3WCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IG5ld1kgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBFc2NcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgRXNjYXBlIGtleSBpZiB0aGUgZXNjYXBlUmV0dXJuVmFsdWUgb3B0aW9uIGlzIHVuZGVmaW5lZDsgb3RoZXJ3aXNlLFxyXG4gICAgICAgICAgICAvLyB3ZSBjbG9zZSB0aGUgZGlhbG9nIHdpdGggaXRzIHZhbHVlXHJcbiAgICAgICAgICAgIGxldCByZXRWYWwgPSB0aGlzLmdldFJldHVyblZhbHVlRm9yRXNjYXBlS2V5KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXRWYWwgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHJldFZhbCk7XHJcbiAgICAgICAgfVxyXG5cdH07XHJcblxyXG4gICAgLy8gRGV0ZWN0cyB3aGV0aGVyIGEgY2xpY2sgb2NjdXJyZWQgb3V0c2lkZSBvZiB0aGUgcG9wdXAgYXJlYS4gVGhpcyBoYW5kbGVyIGlzIGludm9rZWQgb25seSBmb3JcclxuICAgIC8vIG1vZGFsIHBvcHVwcyBhbmQgb25seSBpZiB0aGUgZXNjYXBlUmV0dXJuVmFsdWUgaXMgZGVmaW5lZCBpbiB0aGUgb3B0aW9ucy5cclxuICAgIHByaXZhdGUgb25EZXRlY3RDbGlja091dHNpZGUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuICAgIHtcclxuICAgICAgICAvLyBjbGlja2luZyBvbiB0aGUgYmFja2Ryb3Agb2YgdGhlIG1vZGFsIHBvcHVwIGhhcyB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIHRoZSBldmVudFxyXG4gICAgICAgIC8vIHBvaW50aW5nIHRvIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQgaXRzZWxmLiBJZiBpdCBpcyBub3QgdGhpcyBlbGVtZW50LCB0aGVuIHRoZSBjbGlja1xyXG4gICAgICAgIC8vIHdhcyBvbiBzb21lIGVsZW1lbnQgd2l0aGluIHRoZSBwb3B1cC5cclxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGp1c3QgaW4gY2FzZSB0aGUgY2xpY2sgaGFwcGVuZCBvbiB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGl0c2VsZiBidXQgd2l0aGluIHRoZSBib3VuZHNcclxuICAgICAgICAvLyBvZiB0aGUgcG9wdXAgKGUuZy4gaWYgcG9wdXAgaXMgc3R5bGVlZCB3aXRoIHBhZGRpbmdzKSwgY2hlY2sgdGhhdCBjb29yZGluYXRlcyBhcmVcclxuICAgICAgICAvLyBvdXRzaWRlIG9mIHRoZSBwb3B1cCBhcmVhLlxyXG4gICAgICAgIGxldCByYyA9IHRoaXMuZGxnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChlLmNsaWVudFggPCByYy5sZWZ0IHx8IGUuY2xpZW50WCA+IHJjLnJpZ2h0IHx8IGUuY2xpZW50WSA8IHJjLnRvcCB8fCBlLmNsaWVudFkgPiByYy5ib3R0b20pXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRoaXMub3B0aW9ucz8uZXNjYXBlUmV0dXJuVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHRwcml2YXRlIG9uUG9pbnRlck1vdmUgPSAoZTogUG9pbnRlckV2ZW50KSA9PlxyXG5cdHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHdlIG9ubHkgbW92ZSBvbiB0aGUgcHJpbWFyeSBidXR0b25cclxuICAgICAgICBpZiAoIXRoaXMuZGxnIHx8ICFlLmlzUHJpbWFyeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcE1vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHR0aGlzLm1vdmUoIGUuY2xpZW50WCAtIHRoaXMubW92ZVBvaW50T2Zmc2V0WCwgZS5jbGllbnRZIC0gdGhpcy5tb3ZlUG9pbnRPZmZzZXRZKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIG9uUG9pbnRlclVwID0gKGU6IFBvaW50ZXJFdmVudCkgPT5cclxuXHR7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc3RvcE1vdmUoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFRTdHlsZXMgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBEZWZhdWx0UG9wdXBTdHlsZXMgYXMgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxUU3R5bGVzPjtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZSB3aGVuIGNsb3NpbmcgdGhlIHBvcHVwIGFmdGVyIHRoZVxyXG4gICAgICogdXNlciBwcmVzc2VkIHRoZSBFc2Mga2V5LiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSBwb3B1cCBkb2Vzbid0IGNsb3NlXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0UmV0dXJuVmFsdWVGb3JFc2NhcGVLZXkoKTogYW55XHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gc2ltcGx5IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucz8uZXNjYXBlUmV0dXJuVmFsdWU7XHJcblx0fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBwb3B1cCBvcGVucy4gSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIGl0IHRoZXlcclxuICAgICAqIG11c3QgY2FsbCBzdXBlci5vbk9wZW4oKS5cclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBvbk9wZW4oIGlzTW9kYWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIG5vdGlmeSBhbnkgbGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9wZW4uZmlyZSggaXNNb2RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHBvcHVwIGlzIGJlaW5nIGNsb3NlZC4gSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIGl0IHRoZXlcclxuICAgICAqIG11c3QgY2FsbCBzdXBlci5vbkNsb3NlKCkuXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgb25DbG9zZSggcmV0VmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIG5vdGlmeSBhbnkgbGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmNsb3NlLmZpcmUoIHJldFZhbCk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQ29udGVudCB0byBkaXNwbGF5XHJcbiAgICBAdHJpZ2dlcigwKVxyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnQ6IGFueTtcclxuXHJcbiAgICAvLyBPcHRpb25zXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogVE9wdGlvbnM7XHJcblxyXG4gICAgLy8gQWN0aXZhdGVkIGRlZmF1bHQgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFN0eWxlczogVFN0eWxlcztcclxuXHJcbiAgICAvLyBBY3RpdmF0ZWQgb3B0aW9uYWwgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uYWxTdHlsZXM6IFRTdHlsZXM7XHJcblxyXG4gICAgLy8gQW5jaG9yIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gY3JlYXRlIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBhbmNob3JFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBEaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuICAgIC8vIFByb21pc2UgdGhhdCBpcyBjcmVhdGVkIGZvciBtb2RhbCBkaWFsb2dzIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBkaWFsb2cgY2xvc2VzLlxyXG4gICAgcHJpdmF0ZSBtb2RhbFByb21pc2U6IFByb21pc2VFeDxhbnk+O1xyXG5cclxuICAgIC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZVxyXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIFZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UgbWV0aG9kLlxyXG4gICAgcHJpdmF0ZSBfcmV0dXJuVmFsdWU6IGFueTtcclxuXHJcbiAgICAvLyBFdmVudHMgdGhhdCBjYW4gYmUgZmlyZWQgYnkgdGhlIFBvcHVwIG9iamVjdHMuXHJcbiAgICBwcml2YXRlIF9ldmVudHMgPSBjcmVhdGVNdWx0aUV2ZW50U2xvdDxJUG9wdXBFdmVudHM+KCk7XHJcblxyXG5cdC8vIE9mZnNldHMgb2YgdGhlIHBvaW50IHdoZXJlIHRoZSBtb3ZlIHN0YXJ0ZWQgZnJvbSB0aGUgZGlhbG9nIHRvcC1sZWZ0IGNvcm5lci4gV2UgdXNlIHRoZW1cclxuXHQvLyB0byBjYWxjdWxhdGUgdGhlIGRpYWxvZyB0b3AtbGVmdCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgbW91c2UgY29vcmRpbmF0ZXMgd2hpbGUgbW92ZSBpc1xyXG5cdC8vIGluIHByb2dyZXNzLlxyXG5cdHByaXZhdGUgbW92ZVBvaW50T2Zmc2V0WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW92ZVBvaW50T2Zmc2V0WTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEaWFsb2dcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaWFsb2dCdXR0b24gaW50ZXJmYWNlIGRlc2NyaWJlcyBhIHNpbmdsZSBidXR0b24gaW4gdGhlIGRpYWxvZydzIGJ1dHRvbiBiYXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dCdXR0b25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1dHRvbi4gVGhpcyBJRCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLCB3aGljaCBpcyBjYWxsZWQgd2hlblxyXG4gICAgICogdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpZDogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2ssIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gSWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuICAgICAqIHJldHVyblZhbHVlIHByb3BlcnR5IG11c3QgYmUgZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY2FsbGJhY2s/OiAoaWQ6IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB2YWx1ZSB3aXRoIHdoaWNoIHRoZSBkaWFsb2cgaXMgY2xvc2VkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBUaGlzIHByb3BlcnR5IGlzIHVzZWRcclxuICAgICAqIChhbmQgbXVzdCBiZSBkZWZpbmVkKSBvbmx5IGlmIHRoZSBjYWxsYmFjayBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJldHVyblZhbHVlPzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNvbnRlbnQ/OiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgYnV0dG9uIGlzIGluaXRpYWxseSBkaXNhYmxlZC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2U7IHRoYXRcclxuICAgICAqIGlzLCB0aGUgYnV0dG9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHBvcHVwIGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhlIGNvbnRlbnQuIFRoaXMgaW50ZXJmYWNlXHJcbiAqIGlzIHB1Ymxpc2hlZCBhcyBhIHNlcnZpY2UgYW5kIGNhbiBiZSB1c2VkIGJ5IHRoZSBjb250ZW50IGNvbXBvbmVudHMgdG8gY2xvc2UgdGhlIHBvcHVwLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nIGV4dGVuZHMgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBhZGRCdXR0b24oIGJ0bjogSURpYWxvZ0J1dHRvbik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnV0dG9ucyBpbiB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBidXR0b25Db3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURpYWxvZ1N0eWxlcyBpbnRlcmZhY2UgZGVmaW5lcyBzdHlsZXMgdXNlZCBieSB0aGUgRGlhbG9nIGNsYXNzIHRvIGNyZWF0ZSBkaWZmZXJlbnQgZWxlbWVudHNcclxuICogb2YgdGhlIGRpYWxvZy4gVGhlIGltcGxlbWVudGF0aW9ucyBzaG91bGQgcHJvdmlkZSBjbGFzcyBydWxlcyBmb3IgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxyXG4gKiAtIGRpYWxvZ0NhcHRpb25cclxuICogLSBkaWFsb2dCb2R5XHJcbiAqIC0gZGlhbG9nQnV0dG9uQmFyXHJcbiAqIC0gZGlhbG9nQnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dTdHlsZXMgZXh0ZW5kcyBJUG9wdXBTdHlsZXNcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGNhcHRpb24gc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQ2FwdGlvbj86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBib2R5IHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0JvZHk/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYnV0dG9uIGJhciBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCdXR0b25CYXI/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYnV0dG9ucy5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQnV0dG9uPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgc3R5bGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBQb3B1cCBpZiBzdHlsZXMgYXJlIG5vdCBzcGVjaWZpZWQgdXNpbmcgb3B0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RGlhbG9nU3R5bGVzIGV4dGVuZHMgRGVmYXVsdFBvcHVwU3R5bGVzIGltcGxlbWVudHMgSURpYWxvZ1N0eWxlc1xyXG57XHJcbiAgICBkaWFsb2dDYXB0aW9uID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImRvZGdlcmJsdWVcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogeyB4OiAwLCB5OiAyLCBibHVyOiAyLCBjb2xvcjogXCJsaWdodGdyZXlcIiB9LFxyXG4gICAgICAgIHBhZGRpbmc6IDAuNCxcclxuICAgIH0pXHJcblxyXG4gICAgZGlhbG9nQm9keSA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNyxcclxuICAgIH0pXHJcblxyXG4gICAgZGlhbG9nQnV0dG9uQmFyID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JleVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFswLjcsIDEuMDFdLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0pXHJcblxyXG4gICAgZGlhbG9nQnV0dG9uID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgcGFkZGluZzogMC4zLFxyXG4gICAgICAgIG1hcmdpbklubGluZVN0YXJ0OiAxLjAxLFxyXG4gICAgICAgIG1pbldpZHRoOiA1LjUsXHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4ZjJmMmYyLFxyXG5cdFx0XCI6aG92ZXJcIjoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IDB4ZTJlMmUyLFxyXG5cdFx0fSxcclxuXHRcdFwiOmZvY3VzXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweGUyZTJlMixcclxuICAgICAgICAgICAgb3V0bGluZTogWzEsIFwic29saWRcIiwgMHhhMmEyYTJdLFxyXG5cdFx0fVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEaWFsb2dPcHRpb25zIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvcHRpb25zIHRoYXQgY29maWd1cmUgdGhlIGJlaGF2aW9yIG9mIHRoZSBEaWFsb2dcclxuICogb2JqZWN0LiBUaGV5IGFyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIHRvIHRoZSBbW0RpYWxvZ11dIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dPcHRpb25zPFRTdHlsZXMgZXh0ZW5kcyBJRGlhbG9nU3R5bGVzID0gSURpYWxvZ1N0eWxlcz4gZXh0ZW5kcyBJUG9wdXBPcHRpb25zPFRTdHlsZXM+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBjYXB0aW9uIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0NhcHRpb25TdHlsZUNsYXNzPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJvZHkgc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQm9keVN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYnV0dG9uIGJhciBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCdXR0b25CYXJTdHlsZUNsYXNzPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbnMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvblN0eWxlQ2xhc3M/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERpYWxvZyBjbGFzcyBpcyBhIHBvcHVwIHRoYXQgZGl2aWRlcyB0aGUgcG9wdXAgYXJlYSBpbnRvIHRocmVlIHNlY3Rpb25zOiBjYXB0aW9uLCBib2R5IGFuZFxyXG4gKiBidXR0b24gYmFyLiBUaGUgY2FwdGlvbiBhcmVhIGNhbiBiZSB1c2VkIHRvIG1vdmUgdGhlIGRpYWxvZyBhcm91bmQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGlhbG9nPFRTdHlsZXMgZXh0ZW5kcyBJRGlhbG9nU3R5bGVzID0gSURpYWxvZ1N0eWxlcyxcclxuICAgICAgICAgICAgVE9wdGlvbnMgZXh0ZW5kcyBJRGlhbG9nT3B0aW9uczxUU3R5bGVzPiA9IElEaWFsb2dPcHRpb25zPFRTdHlsZXM+PlxyXG4gICAgICAgICAgICBleHRlbmRzIFBvcHVwPFRTdHlsZXMsVE9wdGlvbnM+IGltcGxlbWVudHMgSURpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggYm9keUNvbnRlbnQ/OiBhbnksIGNhcHRpb25Db250ZW50PzogYW55LCBvcHRpb25zPzogVE9wdGlvbnMsIC4uLmJ1dHRvbnM6IElEaWFsb2dCdXR0b25bXSlcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSByZXVzZSB0aGUgUG9wdXAncyBjb250ZW50IHByb3BlcnR5IGZvciBkaWFsb2cncyBib2R5XHJcbiAgICAgICAgc3VwZXIoIGJvZHlDb250ZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGVudCA9IGNhcHRpb25Db250ZW50O1xyXG5cclxuICAgICAgICBmb3IoIGxldCBidG4gb2YgYnV0dG9ucylcclxuICAgICAgICAgICAgdGhpcy5hZGRCdXR0b24oIGJ0bik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBidXR0b24gdG8gdGhlIGJ1dHRvbiBiYXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldENhcHRpb24oIGNhcHRpb25Db250ZW50OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGVudCA9IGNhcHRpb25Db250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkQnV0dG9uKCBidG46IElEaWFsb2dCdXR0b24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLnNldCggYnRuLmlkLCBuZXcgRGlhbG9nQnV0dG9uSW5mbyggYnRuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnV0dG9ucyBpbiB0aGUgYnV0dG9uIGJhclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJ1dHRvbkNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmJ1dHRvbnMuc2l6ZTsgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFRTdHlsZXMgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFRTdHlsZXM+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBEZWZhdWx0RGlhbG9nU3R5bGVzIGFzIGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VFN0eWxlcz47XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsTW91bnQoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIG9idGFpbiBjbGFzcyBuYW1lcyBmb3Igb3VyIGVsZW1lbnRzXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0NhcHRpb25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dDYXB0aW9uLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQ2FwdGlvbik7XHJcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0JvZHlTdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCb2R5LCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQm9keSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25CYXJDbGFzc05hbWUgPSBjc3MuY2hvb3NlQ2xhc3MoIHRoaXMub3B0aW9ucz8uZGlhbG9nQnV0dG9uQmFyU3R5bGVDbGFzcyxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcz8uZGlhbG9nQnV0dG9uQmFyLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQnV0dG9uQmFyKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dCdXR0b25TdHlsZUNsYXNzLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCdXR0b24sIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2dCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcImRpYWxvZ1wiLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsVW5tb3VudCgpXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblx0fTtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FwdGlvbn1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQm9keX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQ2FwdGlvbigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaGF2ZSB0byBzcGVjaWZ5IHRvdWNoLWFjdGlvbiBcIm5vbmVcIiAtIG90aGVyd2lzZSwgcG9pbnRlciBldmVudHMgYXJlIGNhbmNlbGVkIGJ5IHRoZSBicm93c2VyXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuY2FwdGlvbkNsYXNzTmFtZX0gcG9pbnRlcmRvd249e3RoaXMub25DYXB0aW9uUG9pbnRlckRvd259IHN0eWxlPXt7dG91Y2hBY3Rpb246IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIHt0aGlzLmNhcHRpb25Db250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJCb2R5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5ib2R5Q2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge3RoaXMuY29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQnV0dG9ucygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuYnV0dG9uQmFyQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge0FycmF5LmZyb20oIHRoaXMuYnV0dG9ucy52YWx1ZXMoKSkubWFwKCBpbmZvID0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtpbmZvLmJ0bi5pZH0gY2xhc3M9e3RoaXMuYnV0dG9uQ2xhc3NOYW1lfSBjbGljaz17KCkgPT4gdGhpcy5vbkJ1dHRvbkNsaWNrZWQoaW5mbyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLmJ0bi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uQ2FwdGlvblBvaW50ZXJEb3duKCBlOiBQb2ludGVyRXZlbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gaW5pdGlhdGUgbW92ZSBvbmx5IG9uIHByaW1hcnkgYnV0dG9uIGRvd25cclxuICAgICAgICBpZiAoIWUuaXNQcmltYXJ5KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0TW92ZSggZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdXR0b25DbGlja2VkKCBpbmZvOiBEaWFsb2dCdXR0b25JbmZvKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpbmZvLmJ0bi5jYWxsYmFjaylcclxuICAgICAgICAgICAgaW5mby5idG4uY2FsbGJhY2soIGluZm8uYnRuLmlkKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIGluZm8uYnRuLnJldHVyblZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlclxyXG4gICAgcHJpdmF0ZSBjYXB0aW9uQ29udGVudDogYW55O1xyXG5cclxuICAgIC8vIE1hcCBvZiBidXR0b24gSURzIHRvIGJ1dHRvbiBpbmZvcm1hdGlvbiBvYmplY3RzXHJcbiAgICBAdHJpZ2dlcigzKVxyXG4gICAgcHJpdmF0ZSBidXR0b25zID0gbmV3IE1hcDxhbnksIERpYWxvZ0J1dHRvbkluZm8+KCk7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBjYXB0aW9uXHJcbiAgICBwcml2YXRlIGNhcHRpb25DbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJvZHlcclxuICAgIHByaXZhdGUgYm9keUNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIENsYXNzIG5hbWUgdG8gdXNlIGZvciB0aGUgYnV0dG9uIGJhclxyXG4gICAgcHJpdmF0ZSBidXR0b25CYXJDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbnNcclxuICAgIHByaXZhdGUgYnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEaWFsb2dCdXR0b25JbmZvIGNsYXNzIGNvbnRhaW5zIGN1cnJlbnQgaW5mb3JtdGFpb24gYWJvdXQgYSBzaW5nbGUgYnV0dG9uIGluIHRoZSBkaWFsb2cnc1xyXG4gKiBidXR0b24gYmFyLlxyXG4gKi9cclxuY2xhc3MgRGlhbG9nQnV0dG9uSW5mb1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggYnRuOiBJRGlhbG9nQnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuID0gYnRuO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBidG4uZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBidG46IElEaWFsb2dCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgYnV0dG9uIGlzIGN1cnJlbnRseSBkaXNhYmxlZC5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1lc3NhZ2UgYm94XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gZGVmaW5lcyBjb25zdGFudHMgdG8gaW5kaWNhdGUgc3RhbmRhcmQgYnV0dG9ucyB1c2VkIGluIGRpYWxvZ3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBNc2dCb3hCdXR0b25cclxue1xyXG5cdE5vbmUgPSAweDAsXHJcblx0T0sgPSAweDEsXHJcblx0Q2FuY2VsID0gMHgyLFxyXG5cdFllcyA9IDB4NCxcclxuXHRObyA9IDB4OCxcclxuXHRDbG9zZSA9IDB4MTAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGJ1dHRvbnMgYW5kIGJ1dHRvbiBjb21iaW5hdGlvbnMgZm9yXHJcbiAqIG1lc3NhZ2UgYm94ZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBNc2dCb3hCdXR0b25CYXJcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSBNc2dCb3hCdXR0b24uTm9uZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBDbG9zZSBidXR0b24gKi9cclxuXHRDbG9zZSA9IE1zZ0JveEJ1dHRvbi5DbG9zZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBPSyBidXR0b24gKi9cclxuXHRPSyA9IE1zZ0JveEJ1dHRvbi5PSyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBPSyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRPa0NhbmNlbCA9IE1zZ0JveEJ1dHRvbi5PSyArIE1zZ0JveEJ1dHRvbi5DYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8gPSBNc2dCb3hCdXR0b24uWWVzICsgTXNnQm94QnV0dG9uLk5vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwgPSBNc2dCb3hCdXR0b24uWWVzICsgTXNnQm94QnV0dG9uLk5vICsgTXNnQm94QnV0dG9uLkNhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveFN0eWxlcyBleHRlbmRzIERlZmF1bHREaWFsb2dTdHlsZXNcclxue1xyXG4gICAgY29udGFpbmVyID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIH0pXHJcblxyXG4gICAgaWNvbiA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiM2VtXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgfSlcclxuXHJcbiAgICB0ZXh0ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgcGFkZGluZzogMC41LFxyXG4gICAgICAgIG1pbldpZHRoOiBcIjE1ZW1cIixcclxuICAgICAgICBtYXhXaWR0aDogXCI2MGVtXCIsXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjJlbVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIyMGVtXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nPE1zZ0JveFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5cyBtb2RhbCBtZXNzYWdlIGJveCB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIGEgcHJvbWlzZSwgd2hpY2ggaXNcclxuICAgICAqIHJlc29sdmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIG9uZSBvZiB0aGUgYnV0dG9ucy4gVGhlIGlkZW50aWZpZXIgb2YgdGhlIGJ1dHRvbiBpcyB1c2VkXHJcbiAgICAgKiBhcyB0aGUgcHJvbWlzZSdzIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgQ29udGVudCB0byBiZSB1c2VkIGluIHRoZSBtZXNzYWdlIGJveCdzIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBtZXNzYWdlIGJveCdzIGNhcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gYnV0dG9ucyBJZGVudGlmaWVyIG9mIGEgYnV0dG9uIG90IGJ1dHRvbiBjb21iaW5hdGlvbiB0byBiZSBkaXNwbGF5ZWQuXHJcbiAgICAgKiBAcGFyYW0gaWNvbiBPcHRpb25hbCBpZGVudGlmaWVyIG9mIHRoZSBpY29uIHRvIGJlIGRpc3BsYXllZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aXRoIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBidXR0b24gY2xpY2tlZCBieSB0aGUgdXNlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzaG93TW9kYWwoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogTXNnQm94QnV0dG9uQmFyID0gTXNnQm94QnV0dG9uQmFyLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSk6IFByb21pc2U8TXNnQm94QnV0dG9uPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBhbnksIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25CYXIgPSBNc2dCb3hCdXR0b25CYXIuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBtZXNzYWdlLCB0aXRsZSwgeyBzdHlsZXM6IE1zZ0JveFN0eWxlcyB9KTtcclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCBidXR0b25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlckJvZHkoKTogYW55XHJcblx0e1xyXG4gICAgICAgIGxldCB7IGNoYXIsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblxyXG4gICAgICAgIC8vIHdlIGFyZSB1c2luZyB0aGlzLm9wdGlvbmFsU3R5bGVzIGJlY2F1c2Ugd2UgZXhwbGljaXRseSBwYXNzIG91ciBzdHlsZXMgaW4gdGhlIG9wdGlvbnNcclxuICAgICAgICAvLyBwYXJhbWV0ZXIgb2YgdGhlIERpYWxvZyBjb25zdHJ1Y3Rvci5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtjaGFyICYmXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy5pY29ufSBzdHlsZT17e2NvbG9yfX0+e2NoYXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IE1zZ0JveFN0eWxlcyB8IGNzcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8TXNnQm94U3R5bGVzPlxyXG5cdHtcclxuICAgICAgICByZXR1cm4gTXNnQm94U3R5bGVzO1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlIHdoZW4gY2xvc2luZyB0aGUgcG9wdXAgYWZ0ZXIgdGhlXHJcbiAgICAgKiB1c2VyIHByZXNzZWQgdGhlIEVzYyBrZXkuIElmIHVuZGVmaW5lZCBpcyByZXR1cm5lZCwgdGhlIHBvcHVwIGRvZXNuJ3QgY2xvc2VcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXRSZXR1cm5WYWx1ZUZvckVzY2FwZUtleSgpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoZSBvcHRpb25zIGlmIGRlZmluZWQ7IG90aGVyd2lzZSwgaXRcclxuICAgICAgICAvLyByZXR1cm5zIE1zZ0JveEJ1dHRvbi5DbG9zZSBpZiBubyBidXR0b25zIGFyZSBkZWZpbmVkOyBvdGhlcndpc2UsIGl0IHJldHVybnMgdW5kZWZpbmVkLFxyXG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHRoZSBtZXNzYWdlIGJveCB3aWxsIG5vdCBjbG9zZS5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zPy5lc2NhcGVSZXR1cm5WYWx1ZSAhPSBudWxsXHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmVzY2FwZVJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIDogdGhpcy5idXR0b25Db3VudCA9PT0gMCA/IE1zZ0JveEJ1dHRvbi5DbG9zZSA6IHVuZGVmaW5lZDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25zKCBidXR0b25zOiBNc2dCb3hCdXR0b25CYXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBidXR0b25zKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5DbG9zZTpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDbG9zZVwiLCBNc2dCb3hCdXR0b24uQ2xvc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25CYXIuT0s6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgTXNnQm94QnV0dG9uLk9LKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9uQmFyLk9rQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIE1zZ0JveEJ1dHRvbi5PSyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIE1zZ0JveEJ1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25CYXIuWWVzTm86XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIE1zZ0JveEJ1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIE1zZ0JveEJ1dHRvbi5Obyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbkJhci5ZZXNOb0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgTXNnQm94QnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgTXNnQm94QnV0dG9uLk5vKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgTXNnQm94QnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHN5bWJvbCBhbmQgY29sb3IgZm9yIGRpc3BsYXlpbmcgdGhlIGljb24uXHJcblx0cHJpdmF0ZSBnZXRJY29uQ2xhc3NBbmRDb2xvcigpOiB7IGNoYXI/OiBzdHJpbmcsIGNvbG9yPzogY3NzLkNzc0NvbG9yIH1cclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuaWNvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkluZm86IHJldHVybiB7IGNoYXI6IFwiSVwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjaGFyOiBcIj9cIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uV2FybmluZzogcmV0dXJuIHsgY2hhcjogXCIhXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5FcnJvcjogcmV0dXJuIHsgY2hhcjogXCJYXCIsIGNvbG9yOiBcInJlZFwiIH07XHJcblxyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IE1zZ0JveEJ1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbih7IGlkOiBrZXksIGNvbnRlbnQ6IHRleHQsIHJldHVyblZhbHVlOiBrZXkgfSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9ncmVzcyBib3hcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHN0eWxlcyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgUG9wdXAgaWYgc3R5bGVzIGFyZSBub3Qgc3BlY2lmaWVkIHVzaW5nIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCb3hTdHlsZXMgZXh0ZW5kcyBEZWZhdWx0RGlhbG9nU3R5bGVzXHJcbntcclxuICAgIGNvbnRhaW5lciA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHdpZHRoOiBcIjMwcmVtXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjVyZW1cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCJcclxuICAgIH0pXHJcblxyXG4gICAgcHJvZ3Jlc3MgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICB3aWR0aDogXCIyMHJlbVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxcmVtXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjFyZW1cIlxyXG4gICAgfSlcclxuXHJcbiAgICB0ZXh0ID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcGFyZW50PzogY3NzLlN0eWxlRGVmaW5pdGlvbilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nQnV0dG9uQmFyLnNldFByb3AoIFwianVzdGlmeUNvbnRlbnRcIiwgXCJjZW50ZXJcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFByb2dyZXNzQm94IGNsYXNzIGlzIGEgZGlhbG9nIHRoYXQgZGlzcGxheXMgYSBwcm9ncmVzcyBpbmRpY2F0b3IsIGEgdGV4dCBhbmQgYW4gb3B0aW9uYWxcclxuICogQ2FuY2VsIGJ1dHRvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JveCBleHRlbmRzIERpYWxvZzxQcm9ncmVzc0JveFN0eWxlcz5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5cyB0aGUgbW9kYWwgcHJvZ3Jlc3MgYm94IHdpdGggdGhlIGdpdmVuIGNvbnRlbnQgYW5kIHRpdGxlLCB3aGljaCBpcyBkaXNwbGF5ZWQgdW50aWxcclxuICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGlzIHNldHRsZWQuIFRoZSBkZWxheU1pbGxpc2Vjb25kcyBwYXJhbWV0ZXIgY29udHJvbHMgd2hldGhlciB0aGUgcHJvZ3Jlc3NcclxuICAgICAqIGJveCBpcyBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkgb3IgaXMgZGVsYXllZC4gSWYgdGhlIGlucHV0IHByb21pc2UgaXMgc2V0dGxlZCBiZWZvcmUgdGhlXHJcbiAgICAgKiBkZWxheSBleHBpcmVzLCB0aGUgcHJvZ3Jlc3MgYm94IGlzIG5vdCBkaXNwbGF5ZWQgYXQgYWxsLlxyXG4gICAgICogQHBhcmFtIHByb21pc2UgUHJvbWlzZSB0byBtb25pdG9yIC0gdGhlIHByb2dyZXNzIGJveCBpcyBkaXNwbGF5ZWQgdW50aWwgdGhpcyBwcm9taXMgaXMgc2V0dGxlZC5cclxuICAgICAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gYmUgdXNlZCBpbiB0aGUgcHJvZ3Jlc3MgYm94J3MgYm9keS5cclxuICAgICAqIEBwYXJhbSB0aXRsZSBDb250ZW50IHRvIGRpc3BsYXkgaW4gdGhlIHByb2dyZXNzIGJveCdzIGNhcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGVsYXlNaWxsaXNlY29uZHMgRGVsYXkgaW4gbWlsbGlzZWNvbmRzIHVudGlsIHdoaWNoIHRoZSBwcm9ncmVzcyBib3ggaXNuJ3QgZGlzcGxheWVkLlxyXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgNzUwbXMuIFRvIGRpc3BsYXkgdGhlIHByb2dyZXNzIGJveCBpbW1lZGlhdGVseSwgc2V0IGl0IHRvIDAuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIGlzIHJlc29sdmVkIG90IHJlamVjdGVkIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgdGhlIGlucHV0IHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2hvd1VudGlsKCBwcm9taXNlOiBQcm9taXNlPGFueT4sIGNvbnRlbnQ6IGFueSwgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICAgICAgZGVsYXlNaWxsaXNlY29uZHM6IG51bWJlciA9IDc1MCk6IFByb21pc2U8YW55PlxyXG5cdHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCb3goIGNvbnRlbnQsIHRpdGxlKTtcclxuICAgICAgICBwcm9ncmVzcy5zaG93TW9kYWxXaXRoRGVsYXkoIGRlbGF5TWlsbGlzZWNvbmRzKTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9ncmVzcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbnRlbnQ/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBjYW5jZWxSZXR1cm5WYWx1ZT86IGFueSlcclxuXHR7XHJcblx0XHRzdXBlciggY29udGVudCwgdGl0bGUsIHsgc3R5bGVzOiBQcm9ncmVzc0JveFN0eWxlcyB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbmNlbFJldHVyblZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnV0dG9uKHsgaWQ6IDEsIGNvbnRlbnQ6IFwiQ2FuY2VsXCIsIHJldHVyblZhbHVlOiBjYW5jZWxSZXR1cm5WYWx1ZSB9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYXRlcyBkaXNwbGF5aW5nIGEgcHJvZ3Jlc3MgYm94IGJ1dCBkb2Vzbid0IHJlYWxseSBjcmVhdGUgaXQgdW50aWwgdGhlIGdpdmVuIHRpbWVvdXRcclxuICAgICAqIGV4cGlyZXMuIElmIHRoZSBbW2Nsb3NlXV0gbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHRpbWVvdXQgZXhwaXJlcywgdGhlIHBvcHVwIGlzbid0XHJcbiAgICAgKiBjcmVhdGVkIGF0IGFsbC4gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRoZSBwcm9ncmVzcyB0byByZWZsZWN0IG11bHRpcGxlIG9wZXJhdGlvbnNcclxuICAgICAqIGJ1dCBkb24ndCBzaG93IGl0IGlmIHRoZSBvcGVyYXRpb25zIGZpbmlzaCBxdWlja2x5IGVub3VnaCwgZm9yIGV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogbGV0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzKCk7XHJcbiAgICAgKiBwcm9ncmVzcy5zaG93TW9kYWxXaXRoRGVsYXkoIDEwMDApO1xyXG4gICAgICogcHJvZ3Jlc3Muc2V0Q29udGVudCggXCJGaXJzdCBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuLi5cIilcclxuICAgICAqIHBlcmZvcm1GaXJzdE9wZXJhdGlvbigpO1xyXG4gICAgICogcHJvZ3Jlc3Muc2V0Q29udGVudCggXCJTZWNvbmQgb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLi4uXCIpXHJcbiAgICAgKiBwZXJmb3JtU2Vjb25kT3BlcmF0aW9uKCk7XHJcbiAgICAgKiBwcm9ncmVzcy5jbG9zZSgpO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TW9kYWxXaXRoRGVsYXkoIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheUhhbmRsZSA9IHNldFRpbWVvdXQoICgpID0+IHRoaXMuc2hvd05vdygpLCBkZWxheU1pbGxpc2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIHBvcHVwIGFuZCBwYXNzZXMgYSB2YWx1ZSB0byBiZSB1c2VkIGFzIGEgcmV0dXJuIHZhbHVlLiBGb3IgdGhlIG1vZGFsIHBvcHVwcyxcclxuICAgICAqIHRoaXMgdmFsdWUgd2lsbCBiZSB0aGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIHNob3dNb2RhbCgpIG1ldGhvZC5cclxuICAgICAqIEZvciBtb2RlbGVzcyBwb3B1cHMsIHRoaXMgdmFsdWUgd2lsbCBiZSBhdmFpbGFibGUgYXMgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIHJldFZhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoIHJldFZhbD86IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxheUhhbmRsZSA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuZGVsYXlIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5SGFuZGxlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLmNsb3NlKCByZXRWYWwpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJCb2R5KCk6IGFueVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBhcmUgdXNpbmcgdGhpcy5vcHRpb25hbFN0eWxlcyBiZWNhdXNlIHdlIGV4cGxpY2l0bHkgcGFzcyBvdXIgc3R5bGVzIGluIHRoZSBvcHRpb25zXHJcbiAgICAgICAgLy8gcGFyYW1ldGVyIG9mIHRoZSBEaWFsb2cgY29uc3RydWN0b3IuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMucHJvZ3Jlc3N9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFByb2dyZXNzQm94U3R5bGVzIHwgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxQcm9ncmVzc0JveFN0eWxlcz5cclxuXHR7XHJcbiAgICAgICAgcmV0dXJuIFByb2dyZXNzQm94U3R5bGVzO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dOb3coKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXlIYW5kbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgb2YgdGhlIHNldFRpbWVvdXQgY2FsbCB3aGVuIG9wZW5laW5nIHRoZSBwb3B1cCB3aXRoIGRlbGF5LlxyXG4gICAgcHJpdmF0ZSBkZWxheUhhbmRsZSA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJQ2xhc3NDb21wVk4sIElDb21wb25lbnQsIFVwZGF0ZVN0cmF0ZWd5fSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Y3JlYXRlV2F0Y2hlciwgSVdhdGNoZXJ9IGZyb20gXCIuLi91dGlscy9UcmlnZ2VyV2F0Y2hlclwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgQ29tcEJhc2VWTiBpcyBhIGJhc2UgY2xhc3MgZm9yIEluc3RhbmNlVk4gYW5kIENsYXNzVk4uIEl0IHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5XHJcbi8vIGluIHRlcm1zIG9mIHVwZGF0ZSByZXF1ZXN0cyBhbmQgbGlmZWN5Y2xlIG1hbmFnZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3NDb21wVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJQ2xhc3NDb21wVk5cclxue1xyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZS5cclxuXHRwdWJsaWMgY29tcDogSUNvbXBvbmVudDtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1cGRhdGVTdHJhdGVneSgpOiBVcGRhdGVTdHJhdGVneVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuZ2V0VXBkYXRlU3RyYXRlZ3kgPyB0aGlzLmNvbXAuZ2V0VXBkYXRlU3RyYXRlZ3koKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAodGhpcy5jb21wID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcInJlbmRlcigpIHdhcyBjYWxsZWQgb24gdW5tb3VudGVkIGNvbXBvbmVudC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyByZW5kZXIoKSBvbiBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLnJlbmRlcldhdGNoZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAudm4gPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBkb24ndCBuZWVkIHRyeS9jYXRjaCBiZWNhdXNlIGl0IHdpbGwgYmUgY2F1Z2h0IHVwIHRoZSBjaGFpblxyXG5cdFx0aWYgKHRoaXMuY29tcC53aWxsTW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5jb21wLnJlbmRlciwgdGhpcy5yZXF1ZXN0VXBkYXRlLCB0aGlzLmNvbXAsIHRoaXMpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXYXRjaGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcC53aWxsVW5tb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdHJ5L2NhdGNoIGJ1dCBvbmx5IHRvIGxvZ1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiBpbiB3aWxsVW5tb3VudCBvZiBjb21wb25lbnQgJyR7dGhpcy5uYW1lfSdgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdHRoaXMuY29tcC52biA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY29tcCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgdmlydHVhbCBub2RlIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBtb3VudGVkLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlXHJcbiAgICAvLyBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIGFkZGVkIHRvIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgZGlkTW91bnQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXAuZGlkTW91bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBuZWVkIHRyeS9jYXRjaCBidXQgb25seSB0byBsb2dcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC5kaWRNb3VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gaW4gZGlkTW91bnQgb2YgY29tcG9uZW50ICcke3RoaXMubmFtZX0nYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBzdXBwb3J0c0Vycm9ySGFuZGxpbmcoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXAuaGFuZGxlRXJyb3IgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIGNvbXBvbmVudCdzIHJlbmRlciBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55XHJcbiAgICAvLyB0cmlnZ2VyIG9iamVjdHMgYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZVxyXG4gICAgLy8gdGh1cyB0cmlnZ2VycmluZyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSByZW5kZXJXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1N0eWxlc2V0LCBzZXRFbGVtZW50U3R5bGUsIFNjaGVkdWxlclR5cGUsIGRpZmZTdHlsZXNldHMsIFN0cmluZ1N0eWxlc2V0LCBzZXRFbGVtZW50U3RyaW5nU3R5bGV9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge0lDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3N9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCI7XHJcbi8vLyAjZW5kaWZcclxuOyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUeXBlIG9mIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gUHJvcFR5cGVcclxue1xyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRVbmtub3duID0gMCxcclxuXHJcblx0Ly8gUmVndWxhciBhdHRyaWJ1dGVzIHNldCB1c2luZyBFbGVtZW50LnNldEF0dHJpYnV0ZSgpO1xyXG5cdEF0dHIgPSAxLFxyXG5cclxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgc2V0IHVzaW5nIEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxyXG5cdEV2ZW50ID0gMixcclxuXHJcblx0Ly8gQ3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHdoaWNoIGhhbmRsZXIgZmFjdG9yaWVzIGFyZSByZWdpc3RlcmVkXHJcblx0Q3VzdG9tQXR0ciA9IDMsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2UgaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24ga2VwdCBhYm91dCBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgcHJvcGVydHkuXHJcblx0dHlwZTogUHJvcFR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgdGhhdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNldHRpbmcsIGRpZmZpbmcsIHVwZGF0aW5nIGFuZFxyXG4vLyByZW1vdmluZyBhdHRyaWJ1dGUocykgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBET01cclxuXHQvLyBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzIGF0dHJpYnV0ZSBuYW1lIGFuZCBwcm9wVmFsIGNvbnZlcnRlZCB0byBzdHJpbmcuXHJcblx0c2V0PzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNvbXBhcmVzIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuXHQvLyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB1cGRhdGVGdW5jIGZ1bmN0aW9uLiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHQvLyBhdHRyaWJ1dGUgd2lsbCBub3QgY2hhbmdlICh0aGF0IG1lYW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIGFyZSBlcXVhbCkuIElmIHRoaXNcclxuXHQvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgcHJvcGVydHkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFuZCBjb21wYXJlZCBhcyBzdHJpbmdzLlxyXG5cdC8vIElmIHRoZXNlIHN0cmluZ3MgYXJlIGRpZmZlcmVudCwgdGhlIHN0cmluZyBjb3JyZXNwb25kaW5nIHRvIHRoZSAgbmV3IHZhbHVlIGlzIHJldHVybmVkLlxyXG5cdGRpZmY/OiAoYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIGJhc2VkIG9uIHRoZSBvYmplY3QgdGhhdCB3YXMgcmV0dXJuZWRcclxuXHQvLyBmcm9tIHRoZSBkaWZmIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBzZXQgZnVuY3Rpb24gaXMgdXNlZC4gSWZcclxuXHQvLyB0aGUgc2V0IGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIGVpdGhlciwgdGhlIERPTSBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCB3aXRoIHByb3BOYW1lIGFzXHJcblx0Ly8gYXR0cmlidXRlIG5hbWUgYW5kIHVwZGF0ZVZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHVwZGF0ZT86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnJlbW92ZUF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZS5cclxuXHRyZW1vdmU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuXHQvLyBUaGUgYWN0dWFsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZS4gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBjYW5ub3QgYmVcclxuXHQvLyB1c2VkIGFzIHByb3BlcnR5IG5hbWUgLSBmb3IgZXhhbXBsZSwgaWYgYXR0cmlidXRlIG5hbWUgY29udGFpbnMgY2hhcmFjdGVycyBub3QgYWxsb3dlZCBpblxyXG5cdC8vIFR5cGVTY3JpcHQgaWRlbnRpZmllciAoZS5nLiBkYXNoKS5cclxuXHRhdHRyTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BJbmZvIGV4dGVuZHMgUHJvcEluZm9CYXNlXHJcbntcclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgYnViYmxlcy4gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgYnViYmxlLCB0aGUgZXZlbnQgaGFuZGxlclxyXG5cdC8vIG11c3QgYmUgc2V0IG9uIHRoZSBlbGVtZW50IGl0c2VsZjsgb3RoZXJ3aXNlLCB0aGUgZXZlbnQgaGFuZGxlciBjYW4gYmUgc2V0IG9uIHRoZSByb290XHJcblx0Ly8gYW5jaG9yIGVsZW1lbnQsIHdoaWNoIGFsbG93cyBoYXZpbmcgYSBzaW5nbGUgZXZlbnQgaGFuZGxlciByZWdpc3RlcmVkIGZvciBtYW55IGVsZW1lbnRzLFxyXG5cdC8vIHdoaWNoIGlzIG1vcmUgcGVyZm9ybWFudC5cclxuXHRpc0J1YmJsaW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUF0dHJQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gQ2xhc3Mgb2JqZWN0IHRoYXQgY3JlYXRlcyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLlxyXG5cdGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGNvbWJpbmluZyBpbmZvcm1hdGlvbiBhYm91dCByZWd1bGFyIGF0dHJpYnV0ZXMgb3IgZXZlbnRzIG9yIGN1c3RvbSBhdHRyaWJ1dGVzLiAqL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLlxyXG4gKiAgIC0gbnVsbCBhbmQgdW5kZWZpbmVkIGFyZSBjb252ZXJ0ZWQgdG8gYW4gZW1wdHkgc3RyaW5nLlxyXG4gKiAgIC0gYXJyYXlzIGFyZSBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIHRoZSBlbGVtZW50cyBhbmQgc2VwYXJhdGluZ1xyXG4gKiAgICAgdGhlbSB3aXRoIHNwYWNlcy5cclxuICogICAtIGV2ZXJ5dGhpbmcgZWxzZSBpcyBjb252ZXJ0ZWQgYnkgY2FsbGluZyB0aGUgdG9TdHJpbmcgbWV0aG9kLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHZhbFRvU3RyaW5nKCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKHZhbCA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0ZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiB2YWw7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHRcdHJldHVybiB2YWwubWFwKCBpdGVtID0+IHZhbFRvU3RyaW5nKGl0ZW0pKS5maWx0ZXIoIGl0ZW0gPT4gISFpdGVtKS5qb2luKFwiIFwiKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEV4cG9ydGVkIGNsYXNzIHRoYXQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIHNldHRpbmcsIHVwZGF0aW5nIGFuZCByZW1vdmluZyBFbGVtZW50XHJcbi8vIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byBwcm9wZXJ0eSBuYW1lcy5cclxuLy9cclxuLy8gRWxlbWVudCBhdHRyaWJ1dGVzIGFyZSBkZXRlcm1pbmVkIHVzaW5nIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBFbG1WTiBtZXRob2RzLiBTb21lXHJcbi8vIHByb3BlcnRpZXMgYWxsb3cgdXNpbmcgbm9uLXRyaXZpYWwgdHlwZXMsIGUuZy4gYXJyYXlzIG9yIG9iamVjdHMsIGFuZCB0aHVzIGNhbm5vdCBiZSBzaW1wbHlcclxuLy8gaGFuZGxlZCB1c2luZyB0aGUgRWxlbWVudC5zZXRBdHRyaWJ1dGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbUF0dHJcclxue1xyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgcHJvcGVydHkgbmFtZXMgdG8gUHJvcEluZm8tZGVyaXZlZCBvYmplY3RzLiBJbmZvcm1hdGlvbiBhYm91dCBjdXN0b21cclxuXHQvLyBhdHRyaWJ1dGVzIGlzIGFkZGVkIHRvIHRoaXMgb2JqZWN0IHdoZW4gdGhlIHJlZ2lzdGVyUHJvcGVydHkgbWV0aG9kIGlzIGNhbGxlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBwcm9wSW5mb3M6IHtbUDpzdHJpbmddOiBQcm9wSW5mb30gPVxyXG5cdHtcclxuXHRcdC8vIGF0dHJpYnV0ZXMgLSBvbmx5IHRob3NlIGF0dHJpYnV0ZXMgYXJlIGxpc3RlZCB0aGF0IGhhdmUgbm9uLXRyaXZpYWwgdHJlYXRtZW50XHJcblx0XHRzdHlsZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFN0eWxlUHJvcCwgZGlmZjogZGlmZlN0eWxlUHJvcCwgdXBkYXRlOiB1cGRhdGVTdHlsZVByb3AgfSxcclxuXHRcdHZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmVmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZVZhbHVlUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdFZhbHVlOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0VmFsdWVQcm9wLCBkaWZmOiBkaWZmRGVmYXVsdFZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVEZWZhdWx0VmFsdWVQcm9wIH0sXHJcblx0XHRjaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZDaGVja2VkUHJvcCwgcmVtb3ZlOiByZW1vdmVDaGVja2VkUHJvcCB9LFxyXG5cdFx0ZGVmYXVsdENoZWNrZWQ6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRDaGVja2VkUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cclxuXHRcdC8vIGV2ZW50c1xyXG5cdFx0YWJvcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25pdGVyYXRpb246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhdXhjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ymx1cjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjYW5wbGF5dGhyb3VnaDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xvc2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvbnRleHRtZW51OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjdWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRibGNsaWNrOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdC8vZHJhZ2V4aXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ292ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJvcDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHVyYXRpb25jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVtcHRpZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGVuZGVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Zm9jdXM6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGdvdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRpbnB1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW52YWxpZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5ZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0a2V5cHJlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRkYXRhOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb2FkZWRtZXRhZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRsb3N0cG9pbnRlcmNhcHR1cmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCwgaXNCdWJibGluZzogZmFsc2UgfSxcclxuXHRcdG1vdXNlbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZW1vdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNldXA6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBhdXNlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwbGF5aW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyZG93bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmVudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVyb3ZlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcnVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwcm9ncmVzczogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmF0ZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cmVzZXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2l6ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Nyb2xsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVrZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlZWtpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNlbGVjdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3RhbGxlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VibWl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzdXNwZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0aW1ldXBkYXRlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b2dnbGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hsZWF2ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2htb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaHN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uY2FuY2VsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uZW5kOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9ucnVuOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0cmFuc2l0aW9uc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHZvbHVtZWNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2FpdGluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0d2hlZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZ1bGxzY3JlZW5lcnJvcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y29weTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXN0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm8pOiB2b2lkXHJcblx0e1xyXG5cdFx0RWxtQXR0ci5wcm9wSW5mb3NbcHJvcE5hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIGdldFByb3BlcnR5SW5mbyggcHJvcE5hbWU6IHN0cmluZyk6IFByb3BJbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwdWJsaWMgc3RhdGljIHNldEF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBwcm9wVmFsKSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCBhY3R1YWwgYXR0cmlidXRlIG5hbWUgdG8gdXNlXHJcblx0XHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXR0ck5hbWUgPSBwcm9wTmFtZTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCBwcm9wVmFsKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIGF0dHJOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHZhbFRvU3RyaW5nKCBuZXdQcm9wVmFsKSk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29tcGFyZSBvbGQgYW5kIG5ldyB2YWx1ZSB1c2luZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGlmIGRlZmluZWQ7IGlmIG5vdCwganVzdCBjb21wYXJlXHJcblx0XHQvLyB0aGUgdHdvIHZhbHVlcyBhbmQgaWYgdGhleSBhcmUgZGlmZmVyZW50IHVzZSB0aGUgbmV3IG9uZSBhcyBhIHZhbHVlIHRvIHVwZGF0ZSB3aXRoLlxyXG5cdFx0Ly8gTm90ZSB0aGF0IHRoZSBuZWl0aGVyIG9sZCBub3IgbmV3IHZhbHVlcyBjYW4gYmUgdW5kZWZpbmVkIG9yIG51bGwuXHJcblx0XHRsZXQgdXBkYXRlVmFsOiBhbnk7XHJcblx0XHRpZiAoaW5mby5kaWZmICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IGluZm8uZGlmZiggcHJvcE5hbWUsIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdXBkYXRlVmFsdWUgaXMgdW5kZWZpbmVkIHRoZW4gbm8gY2hhbmdlIGhhcyBiZWVuIGRldGVjdGVkLlxyXG5cdFx0XHRpZiAodXBkYXRlVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkUHJvcFZhbCAhPT0gbmV3UHJvcFZhbClcclxuXHRcdFx0dXBkYXRlVmFsID0gbmV3UHJvcFZhbDtcclxuXHJcblx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0aWYgKGF0dHJOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0Ly8gaWYgdXBkYXRlIG1ldGhvZCBpcyBkZWZpbmVkIHVzZSBpdDsgb3RoZXJ3aXNlLCByZW1vdmUgdGhlIG9sZCB2YWx1ZSBhbmQgc2V0IHRoZSBuZXcgb25lXHJcblx0XHRpZiAoaW5mby51cGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aW5mby51cGRhdGUoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHJlbW92ZSBtZXRob2QgaXMgZGVmaW5lZCwgdXNlIGl0LiBOb3RlIHRoYXQgaWYgcmVtb3ZlIG1ldGhvZCBpcyBub3QgZGVmaW5lZFxyXG5cdFx0XHQvLyB3ZSBkb24ndCB1c2UgZWxtLnJlbW92ZUF0dHJpYnV0ZSB0byBzYXZlIHRpbWUgKGFzIHRoZSBmb2xsb3dpbmcgaW5mby5zZXQgb3JcclxuXHRcdFx0Ly8gZWxtLnNldEF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIGl0IGFueXdheS5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5yZW1vdmUoIGVsbSwgYXR0ck5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKGluZm8uc2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aW5mby5zZXQoIGVsbSwgYXR0ck5hbWUsIHVwZGF0ZVZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHVwZGF0ZVZhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgdGhlcmUgd2FzIGNoYW5nZSBpbiBhdHRyaWJ1dGUgdmFsdWUuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlQXR0ciggZWxtOiBFbGVtZW50LCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggcHJvcE5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5yZW1vdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggYXR0ck5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIFN0eWxlc2V0IG9iamVjdCBmcm9tIHRoZSBNaW1jc3MgbGlicmFyeS4gSWYgdGhlIG9sZCBhbmQgbmV3IHN0eWxlIHByb3BlcnR5IHZhbHVlcyBhcmUgb2ZcclxuLy8gZGlmZmVyZW50IHR5cGVzIHRoZSBkaWZmIGZ1bmN0aW9uIHJldHVybnMgdGhlIG5ldyBzdHlsZSB2YWx1ZS4gSWYgYm90aCBhcmUgb2YgdGhlIHN0cmluZyB0eXBlLFxyXG4vLyB0aGVuIHRoZSBuZXcgc3RyaW5nIHZhbHVlIGlzIHJldHVybmVkLiBJZiBib3RoIGFyZSBvZiB0aGUgQ1NTU3R5bGVEZWNsYXJhdGlvbiB0eXBlLCB0aGVuIGFuXHJcbi8vIG9iamVjdCBpcyByZXR1cm5lZCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gc3R5bGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgY2hhbmdlZC4gRm9yIHVwZGF0ZWRcclxuLy8gaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgZnJvbSB0aGUgbmV3IHN0eWxlIHZhbHVlOyBmb3IgcmVtb3ZlZCBpdGVtcywgdGhlIGtleSB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZXRTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgcHJvcFZhbCwgU2NoZWR1bGVyVHlwZS5TeW5jKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlN0eWxlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbDogU3R5bGVzZXQsIG5ld1Byb3BWYWw6IFN0eWxlc2V0KTogYW55XHJcbntcclxuXHRsZXQgcmVzID0gZGlmZlN0eWxlc2V0cyggb2xkUHJvcFZhbCwgbmV3UHJvcFZhbCk7XHJcblxyXG5cdC8vIHdlIGhhdmUgdG8gcmV0dXJuIHVuZGVmaW5lZCBiZWNhdXNlIG51bGwgaXMgY29uc2lkZXJlZCBhIHZhbGlkIHVwZGF0ZSB2YWx1ZVxyXG5cdHJldHVybiByZXMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJlcztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdHlsZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCk6IHZvaWRcclxue1xyXG5cdHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtIGFzIEhUTUxFbGVtZW50LCB1cGRhdGVWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiB2YWx1ZSBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIHZhbHVlIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlIHZhbHVlXHJcbi8vIGZpZWxkIG9uIHRoZSBlbGVtZW50LiBUaGUgc2V0IGFuZCB1cGRhdGUgbWV0aG9kcyB3b3JrIHRoZSBzYW1lIHdheS4gV2UgZGVmaW5lIHRoZSByZW1vdmUgbWV0aG9kXHJcbi8vIGJ5IHNldHRpbmcgdGhlIGVsbS52YWx1ZSBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0VmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gcHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlmZlZhbHVlUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LiBXZSB3YW50IGFsd2F5cyB0byBzZXQgdGhpcyB2YWx1ZSB0byB0aGUgZWxlbWVudCBiZWNhdXNlIHRoZVxyXG5cdC8vIGVsZW1lbnQncyB2YWx1ZSBtYXkgaGF2ZSBjaG5nZWQgKGJ5IHRoZSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkpLlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLnZhbHVlID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS4gVGhlIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSB3b3JrcyBhcyBhIHZhbHVlIHByb3BlcnR5IHdoZW4gdGhlXHJcbi8vIGVsZW1lbnQgaXMgZmlyc3QgbW91bnRlZCBhbmQgaXMgaWdub3JlZCB1cG9uIHVwZGF0ZXMgYW5kIHJlbW92YWxzLiBUaGlzIGFsbG93cyB1c2luZ1xyXG4vLyBkZWZhdWx0VmFsdWUgdG8gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB2YWx1ZSBvbmNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gZGlmZkRlZmF1bHRWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgcmV0dXJuaW5nIHVuZGVmaW5lZCB3ZSBpbmRpY2F0ZSB0aGF0IG5vIGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBwcm9wZXJ0eSBhbmQgdGh1cyB0aGVcclxuXHQvLyB1cGRhdGUgd2lsbCBub3QgYmUgY2FsbGVkXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gZG8gbm90aGluZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgY2hlY2tlZCBwcm9wZXJ0eS4gSW5zdGVhZCBvZiBzZXR0aW5nIGNoZWNrZWQgcHJvcGVydHkgYXMgYW4gYXR0cmlidXRlIHdlIHNldCB0aGVcclxuLy8gY2hlY2tlZCBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlXHJcbi8vIG1ldGhvZCBieSBzZXR0aW5nIHRoZSBlbG0uY2hlY2tlZCBmaWVsZCB0byBudWxsLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0Q2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55KTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZDaGVja2VkUHJvcCggYXR0ck5hbWU6IHN0cmluZywgb2xkUHJvcFZhbFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHQvLyBieSBhbHdheXMgcmV0dXJuaW5nIHRoZSBuZXcgcHJvcGVydHkgdmFsdWUgd2UgY2F1c2UgdGhlIHZhbHVlIHRvIGFsd2F5cyBiZSB1cGRhdGVkIHRvXHJcblx0Ly8gdGhhdCBvZiB0aGUgbmV3IHByb3BlcnR5LlxyXG5cdHJldHVybiBuZXdQcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0Ly8gd2UgbmVlZCB0byBjYXN0IGVsbSB0byBhbnksIGJlY2F1c2UgZ2VuZXJpYyBFbGVtZW50IGRvZXNuJ3QgaGF2ZSB2YWx1ZSBwcm9wZXJ0eS5cclxuXHQoZWxtIGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgSUVsbVZOLCBWTlR5cGUsIHNldFJlZiwgRXZlbnRGdW5jVHlwZSwgVXBkYXRlU3RyYXRlZ3ksIFJlZlByb3BUeXBlLCBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlclxyXG59IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtcclxuICAgIFZOQmFzZSwgRE4sIFZOLCBWTlVwZGF0ZURpc3AsIHNfZGVlcENvbXBhcmUsIFByb3BJbmZvLCBQcm9wVHlwZSxcclxuICAgIEVsbUF0dHIsIEN1c3RvbUF0dHJQcm9wSW5mbywgQXR0clByb3BJbmZvLFxyXG4gICAgRXZlbnRQcm9wSW5mb30gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVsbVZOXHJcbntcclxuXHQvLyBUYWcgbmFtZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuIFRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkIHdoZW4gdGhlIG5vZGUgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdFxyXG5cdC8vIHRpbWUuXHJcblx0cHVibGljIGVsbTogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEVsZW1lbnQgaXMgU1ZHIChhcyBvcHBvc2VkIHRvIEhUTE0pLiBUaGVyZSBhcmUgc29tZSBTVkdcclxuXHQvLyBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhcyByZWd1bGFyIGVsZW1lbnRzIChlLmcuIDxhPikuIFRoZXJlZm9yZSwgaW4gb3JkZXIgdG9cclxuXHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIFNWRyBvciBub3Qgd2UgbmVlZCB0byBjaGVjayB0aGUgbmFtZXNwYWNlVVJJIG9mIHRoZSBwYXJlbnRcclxuXHQvLyAoYW5jaG9yZSkgRE9NIG5vZGUuXHJcblx0cHVibGljIGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0YWdOYW1lOiBzdHJpbmcsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5FbG07XHJcblx0XHR0aGlzLmVsbU5hbWUgPSB0YWdOYW1lO1xyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBrZXkgcHJvcGVydHkuIElmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90XHJcblx0XHRcdC8vIHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdFx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuRWxtOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHRcdC8vIGV4cGxpY2l0bHkgcmVtb3ZlZCwgd2UgZG8gaXQgdW5kZXIgdGhlIFJFTU9WRV9FVkVOVF9MSVNURU5FUlMgbWFjcm8gKHRoYXQgaXMsIHdlXHJcblx0XHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRzKCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gdGVybWluYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMucmVtb3ZlQ3VzdG9tQXR0cnMoIHRydWUpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwXHJcblx0XHR0aGlzLmVsbSA9IG51bGw7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhpcyBpcyB0aGUgc2FtZSB0eXBlIG9mIGVsZW1lbnQ7IHRoYXQgaXMsIGl0IGhhcyB0aGUgc2FtZVxyXG5cdFx0Ly8gbmFtZS5cclxuXHRcdHJldHVybiB0aGlzLmVsbU5hbWUgPT09IChuZXdWTiBhcyBFbG1WTikuZWxtTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIG5ldyBwcm9wcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgb25lc1xyXG5cdFx0bGV0IHNob3VsZENvbW1pdCA9ICFzX2RlZXBDb21wYXJlKCB0aGlzLnByb3BzLCAobmV3Vk4gYXMgRWxtVk4pLnByb3BzKTtcclxuXHJcblx0XHQvLyByZW5kZXIgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaWYgZWl0aGVyIG9sZCBvciBuZXcgbm9kZSBoYXMgY2hpbGRyZW5cclxuXHRcdGxldCBzaG91bGRSZW5kZXIgPSB0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fFxyXG5cdFx0XHRcdFx0KG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbiAmJiAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBwcm9wcyBhbmQgY2hpbGRyZW5cclxuXHRcdHRoaXMucHJvcHMgPSAobmV3Vk4gYXMgRWxtVk4pLnByb3BzO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW47XHJcblxyXG5cdFx0cmV0dXJuIHsgc2hvdWxkQ29tbWl0LCBzaG91bGRSZW5kZXIgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHRwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgbmV3RWxtVk46IEVsbVZOID0gbmV3Vk4gYXMgRWxtVk47XHJcblx0XHRuZXdFbG1WTi5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdFbG1WTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uXHJcblx0XHRcdHRoaXMucmVmID0gbmV3RWxtVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwgfHwgcHJvcFZhbCA9PT0gZmFsc2UpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQsIG51bGwgYW5kIGZhbHNlXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciByZWYgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwidXBkYXRlU3RyYXRlZ3lcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHVwZGF0ZVN0cmF0ZWd5IHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9wZXJ0eSBhbmQgZGV0ZXJtaW5lIGl0cyB0eXBlIChyZWd1bGFyIGF0dHJpYnV0ZSwgZXZlbnRcclxuXHRcdFx0XHQvLyBvciBjdXN0b20gYXR0cmlidXRlKS4gTm90ZSB0aGF0IGdldFByb3BlcnR5SW5mbyBtYXkgcmV0dXJuIG51bGwgb25seSBmb3IgcmVndWxhclxyXG5cdFx0XHRcdC8vIGF0dHJpYnV0ZXMuXHJcblx0XHRcdFx0cHJvcEluZm8gPSBFbG1BdHRyLmdldFByb3BlcnR5SW5mbyggcHJvcE5hbWUpO1xyXG5cdFx0XHRcdHByb3BUeXBlID0gcHJvcEluZm8gPyBwcm9wSW5mby50eXBlIDogUHJvcFR5cGUuQXR0cjtcclxuXHRcdFx0XHRpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5hdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvLCB2YWw6IHByb3BWYWwgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkV2ZW50KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBldmVudEluZm8gPSBnZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBwcm9wSW5mbywgcHJvcFZhbCk7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRJbmZvKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzID0ge31cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzW3Byb3BOYW1lXSA9IGV2ZW50SW5mbztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSAvLyBpZiAocHJvcFR5cGUgPT09IFByb3BUeXBlLkN1c3RvbUF0dHIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzID0ge307XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgY3VzdG9tZSBhdHRyaWJ1dGVzIHZhbHVlLiBIYW5kbGVyIHdpbGwgYmUgY3JlYXRlZCBsYXRlci5cclxuXHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbyBhcyBDdXN0b21BdHRyUHJvcEluZm8sIHZhbDogcHJvcFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlcjogdW5kZWZpbmVkfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBET00gYXR0cmlidXRlcyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnRkID0gdGhpcy5hdHRyc1tuYW1lXTtcclxuXHRcdFx0RWxtQXR0ci5zZXRBdHRyKCB0aGlzLmVsbSwgbmFtZSwgcnRkLmluZm8sIHJ0ZC52YWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIERPTSBhdHRyaWJ1dGVzIG9mIHRoaXMgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUF0dHJzKCBuZXdBdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gXCJjYWNoZVwiIHNldmVyYWwgbWVtZWJlcnMgZm9yIGZhc3RlciBhY2Nlc3NcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbTtcclxuXHRcdGxldCBvbGRBdHRycyA9IHRoaXMuYXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGF0dHJpYnV0ZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ldyBvbmVzIGFuZFxyXG5cdFx0Ly8gdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkUlREID0gb2xkQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld1JURCA9IG5ld0F0dHJzID8gbmV3QXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdSVEQgfHwgIW5ld1JURC52YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUsIHJlbW92ZSB0aGUgb2xkIHByb3BlcnR5IGFuZFxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci5yZW1vdmVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBoYXMgYSBkaWZmZXJlbnQgdmFsdWUsIHJlbW1lYmVyIHRoaXNcclxuXHRcdFx0XHRcdC8vIHZhbHVlIGFuZCBzZXQgaXQgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdFx0RWxtQXR0ci51cGRhdGVBdHRyKCBlbG0sIG5hbWUsIG9sZFJURC5pbmZvLCBvbGRSVEQudmFsLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGF0dHJpYnV0ZXM7IGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3QXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3QXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQXR0cnMgJiYgKG5hbWUgaW4gb2xkQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRFbG1BdHRyLnNldEF0dHIoIGVsbSwgbmFtZSwgbmV3UlRELmluZm8sIG5ld1JURC52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hdHRycyA9IG5ld0F0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGluZm9ybWF0aW9uIGFib3V0IGV2ZW50cyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIGFkZEV2ZW50cygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBSRU1PVkVfRVZFTlRfTElTVEVORVJTXHJcblx0XHQvLyByZW1vdmUgbGlzdGVuZXJzLiBTaW5jZSBtb2Rlcm4gYnJvd3NlcnMgZG9uJ3QgbGVhayB3aGVuIGxpc3RlbmVycyBhcmUgbm90XHJcblx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0Ly8gbm9ybWFsbHkgZG9uJ3QgZG8gaXQuKVxyXG5cdFx0cHJpdmF0ZSByZW1vdmVFdmVudHMoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVFdmVudHMgY2FsbGVkIHdpdGggdGhpcy5ldmVudHMgPSBudWxsXCIpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudHMoIG5ld0V2ZW50czogeyBbbmFtZTogc3RyaW5nXTogRXZlbnRSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRFdmVudHMgPSB0aGlzLmV2ZW50cztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEV2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBvbGRFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkRXZlbnQgPSBvbGRFdmVudHNbbmFtZV07XHJcblx0XHRcdFx0bGV0IG5ld0V2ZW50ID0gbmV3RXZlbnRzID8gbmV3RXZlbnRzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3RXZlbnQpXHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVFdmVudCggbmFtZSwgb2xkRXZlbnQsIG5ld0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgZXZlbnQgbGlzdGVuZXJzIGFuZCBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0V2ZW50cylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdFdmVudHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkRXZlbnRzICYmIChuYW1lIGluIG9sZEV2ZW50cykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudCggbmFtZSwgbmV3RXZlbnRzW25hbWVdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZXZlbnRzID0gbmV3RXZlbnRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZXMgb2YgdGhlIGV2ZW50IGxpc3RlbmVyIGFyZSBkaWZmZXJlbnQgYW5kIHNldHNcclxuXHQvLyB0aGUgdXBkYXRlZCB2YWx1ZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0ZSBoYXMgYmVlbiBwZXJmb3JtZWQgYW5kIGZhbHNlIGlmIG5vIGNoYW5nZSBoYXNcclxuXHQvLyBiZWVuIGRldGVjdGVkLlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnQoIG5hbWU6IHN0cmluZywgb2xkRXZlbnQ6IEV2ZW50UnVuVGltZURhdGEsIG5ld0V2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGRvdWJsZS1lcXVhbC1zaWduIGZvciB1c2VDYXB0dXJlIGlzIG9uIHB1cnBvc2UsIGJlY2F1c2UgdXNlQ2FwdHVyZSBjYW4gYmUgdW5kZWZpbmVkIG9yIGJvb2xlYW5cclxuXHRcdGlmIChvbGRFdmVudC5vcmdGdW5jID09PSBuZXdFdmVudC5vcmdGdW5jICYmXHJcblx0XHRcdG9sZEV2ZW50LnRoYXQgPT09IG5ld0V2ZW50LnRoYXQgJiZcclxuXHRcdFx0b2xkRXZlbnQudXNlQ2FwdHVyZSA9PSBuZXdFdmVudC51c2VDYXB0dXJlKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gb2xkRXZlbnQud3JhcHBlcjtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1vdmUgb2xkIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIG9sZEV2ZW50LndyYXBwZXIsIG9sZEV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIG5ldyB3cmFwcGVyIGFuZCBhZGQgaXQgYXMgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IHRoaXMuY3JlYXRlRXZlbnRXcmFwcGVyKCBuZXdFdmVudCk7XHJcblx0XHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIG5ld0V2ZW50LndyYXBwZXIsIG5ld0V2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lci4gVGhlIHdyYXBwZXIgaXMgYm91bmQgdG9cclxuXHQvLyB0aGUgaW5zdGFuY2Ugb2YgRWxtVk4gYW5kIHRodXMgY2FuIGludGVyY2VwdCBleGNlcHRpb25zIGFuZCBwcm9jZXNzIHRoZW0gdXNpbmcgdGhlIHN0YW5kYXJkXHJcblx0Ly8gZXJyb3Igc2VydmljZS4gVW5sZXNzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBpcyBhbHJlYWR5IGEgYm91bmQgZnVuY3Rpb24sIGl0IHdpbGwgYmUgY2FsbGVkXHJcblx0Ly8gd2l0aCBcInRoaXNcIiBzZXQgdG8gZWl0aGVyIHRoZSBcImV2ZW50LnRoYXRcIiBvYmplY3Qgb3IsIGlmIHRoZSBsYXR0ZXIgaXMgdW5kZWZpbmVkLCB0byB0aGVcclxuXHQvLyBcImNyZWF0b3JcIiBvYmplY3QsIHdoaWNoIGlzIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoZSBlbGVtZW50IGkgaXRzIHJlbmRlclxyXG5cdC8vIG1ldGhvZC5cclxuXHRwcml2YXRlIGNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBFdmVudEZ1bmNUeXBlPEV2ZW50PlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYywgZXZlbnQudGhhdCA/IGV2ZW50LnRoYXQgOiB0aGlzLmNyZWF0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5hZGRDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBjcmVhdGUgYW5kIGluaXRpYWxpemUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHQvLyBmcm9tIG91ciBvYmplY3QuXHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3VzdG9tQXR0ci5oYW5kbGVyID0gbmV3IGN1c3RvbUF0dHIuaW5mby5oYW5kbGVyQ2xhc3MoIHRoaXMsIGN1c3RvbUF0dHIudmFsLCBuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgZWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUN1c3RvbUF0dHJzKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGlzUmVtb3ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdDdXN0b21BdHRyczogeyBbbmFtZTogc3RyaW5nXTogQ3lzdG9tQXR0clJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEN1c3RvbUF0dHJzID0gdGhpcy5jdXN0b21BdHRycztcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgZXhpc3RpbmcgY3VzdG9tIHByb3BlcnRpZXMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkQ3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zdCBvbGRDdXN0b21BdHRyID0gb2xkQ3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29uc3QgbmV3Q3VzdG9tQXR0ciA9IG5ld0N1c3RvbUF0dHJzID8gbmV3Q3VzdG9tQXR0cnNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdDdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBpdHMgaGFuZGxlclxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci50ZXJtaW5hdGUoIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB0ZXJtaW5hdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgY3VzdG9tIHByb3BlcnR5IGFuZCByZW1lbWJlciB0aGUgbmV3IHZhbHVlXHJcblx0XHRcdFx0XHR0cnlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0b2xkQ3VzdG9tQXR0ci5oYW5kbGVyLnVwZGF0ZSggbmV3Q3VzdG9tQXR0ci52YWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIHVwZGF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBvbGRDdXN0b21BdHRyLmhhbmRsZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBjdXN0b20gcHJvcGVydGllcyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdDdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiBuZXdDdXN0b21BdHRycylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRDdXN0b21BdHRycyAmJiAobmFtZSBpbiBvbGRDdXN0b21BdHRycykpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHJcblx0XHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5ld0N1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBuZXdDdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBuZXdDdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGNyZWF0aW5nIGhhbmRsZXIgZm9yIGN1c3RvbSBhdHRyaWJ1dGUgJyR7bmFtZX0nOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIG5ld0N1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXN0b21BdHRycyA9IG5ld0N1c3RvbUF0dHJzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IGRlZmluaW5nIGRpZmZlcmVudCBhc3BlY3RzIG9mIG5vZGUgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0cHVibGljIHVwZGF0ZVN0cmF0ZWd5OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgcHJvcHM6IGFueTtcclxuXHJcblx0Ly8gQXJyYXkgb2YgY2hpbGRyZW4gb2JqZWN0cy5cclxuXHRwcml2YXRlIGNoaWxkcmVuOiBhbnlbXTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzcGVjaWZpZWQgYXMgYSBcInJlZlwiIHByb3BlcnR5LiBSZWZlcmVuY2Ugb2JqZWN0IGlzXHJcblx0Ly8gc2V0IHdoZW4gYW5hbHl6aW5nIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCBkdXJpbmcgdXBkYXRlLiBSZWZlcmVuY2UgdmFsdWUgaXNcclxuXHQvLyBzZXQgZHVyaW5nIG1vdW50IGFuZCB1bnNldCBkdXJpbmcgdW5tb3VudC4gVGhlIHJlZiBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBvbiB1cGRhdGUuXHJcblx0cHJpdmF0ZSByZWY6IFJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IEV2ZW50RnVuY1R5cGU8YW55PjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgd2lsbCBiZSByZWZlcmVuY2VkIGJ5IFwidGhpc1wiIHdpdGhpbiB0aGUgaW52b2tlZCBmdW5jdGlvblxyXG5cdHRoYXQ/OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgZXZlbnQgc2hvdWxkIGJlIHVzZWQgYXMgQ2FwdHVyaW5nICh0cnVlKSBvciBCdWJibGluZyAoZmFsc2UpXHJcblx0dXNlQ2FwdHVyZT86IGJvb2xlYW47XHJcblxyXG5cdC8vIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3ZSBjcmVhdGUgYW5kIGJpbmQgdG8gb3VyIG5vZGUgYW5kIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gV2UgbmVlZFxyXG5cdC8vIHRoaXMgd3JhcHBlciBpbiBvcmRlciB0byBjYXRjaCBleGNlcHRpb24gaW4gdGhlIGNhbGxiYWNrIGFuZCBwYXNzIHRoZW0gb24gdG8gYW4gZXJyb3JcclxuXHQvLyBoYW5kbGluZyBzZXJ2aWNlLiBUaGUgd3JhcHBlciBpcyBtYXJrZWQgb3B0aW9uYWwgYmVjYXVzZSBpdCBpcyBjcmVhdGVkIG9ubHkgaWYgYSBuZXdcclxuXHQvLyBldmVudCBsaXN0ZW5lciBpcyBhZGRlZDsgdGhhdCBpcywgaWYgZHVyaW5nIHVwZGF0ZSwgdGhlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGlzIHRoZVxyXG5cdC8vIHNhbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVyIGJlY2F1c2UgdGhlIG9sZCBvbmUgd2lsbCBiZSB1c2VkLlxyXG5cdHdyYXBwZXI/OiAgRXZlbnRGdW5jVHlwZTxFdmVudD47XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCBjdXN0b20gcHJvcGVydHkuXHJcbmludGVyZmFjZSBDeXN0b21BdHRyUnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgY3VzdG9tIGF0dHJpYnV0ZSAtIGNhbm5vdCBiZSBudWxsXHJcblx0aW5mbzogQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBDdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG5cdHZhbDogYW55O1xyXG5cclxuXHQvLyBIYW5kbGVyIG9iamVjdCB0aGF0IGtub3dzIHRvIGRlYWwgd2l0aCB0aGUgcHJvcGVydHkgdmFsdWVzXHJcblx0aGFuZGxlcjogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgaXMgb2YgdGhlIHR5cGUgdGhhdCBpcyB1c2VkIGZvciBldmVudCBoYW5kbGVycy5cclxuLy8gSWYgeWVzLCB0aGVuIHJldHVybnMgRXZlbnRSdW5UaW1lRGF0YSBvYmplY3Q7IG90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcbmZ1bmN0aW9uIGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIGluZm86IEV2ZW50UHJvcEluZm8sIHByb3BWYWw6IGFueSk6IEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbCBhcyBFdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdXNlQ2FwdHVyZTogcHJvcFZhbFsxXSBhcyBib29sZWFuIH07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSB9O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbC5sZW5ndGggPT09IDMpXHJcblx0XHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWxbMF0gYXMgRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtSW5mbyB0eXBlIGRlZmluZXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBTVkcgZWxlbWVudC4gVGhpc1xyXG4vLyBpbmZvcm1hdGlvbiBjYW4gYmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuLy9cdC0gc3RyaW5nIC0gYWN0dWFsIG5hbWUgdG8gdXNlIGZvciB0aGUgZWxlbWVudC4gU29tZSBTVkcgZWxlbWVudHMgaGF2ZSBuYW1lcyB0aGF0IGNhbm5vdCBiZSB1c2VkXHJcbi8vXHRcdGluIEpYIGRpcmVjdGx5IChlLmcuIGJlY2F1c2Ugb2YgaHlwaGVuIGxpa2UgaW4gXCJjb2xvci1wcm9maWxlXCIpLiBJbiB0aGlzIGNhc2UgdGhlIHN0cmluZ1xyXG4vL1x0XHR2YWx1ZSB3aWxsIGJlIHRoZSBhY3R1YWwgZWxlbWVudCBuYW1lIHRvIHB1dCBpbnRvIEhUTUwgZG9jdW1lbnQsIHdoaWxlIEpTWCB3aWxsIGJlIHVzaW5nXHJcbi8vXHRcdGEgY2FtZWwtZm9ybWF0dGVkIG5hbWUgKGUuZy4gXCJjb2xvclByb2ZpbGVcIikuXHJcbi8vXHQtIGJvb2xlYW4gLSBmbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyBcImR1YWwtcHVycG9zZVwiOyB0aGF0IGlzLCBlbGVtZW50IHdpdGggdGhpc1xyXG4vL1x0XHRuYW1lIGNhbiBiZSB1c2VkIGFzIGVpdGhlciBIVE1MIG9yIFNWRyBlbGVtZW50LlxyXG4vL1x0LSB0dXBsZSBvZiB0d28gZWxlbWVudHMgLSBzdHJpbmcgYW5kIGJvb2xlYW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWJvdmUgaXRlbXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBTdmdFbG1JbmZvID0gYm9vbGVhbiB8IHN0cmluZyB8IFtzdHJpbmcsIGJvb2xlYW5dO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbXMgY2xhc3MgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIG5hbWVzIHVzZWQgdG8gZGVmaW5lIFNWRyBlbGVtZW50cyBpbiBKU1guIFdoZW5cclxuLy8gd2UgbmVlZCB0byBjcmVhdGUgYW4gZWxlbWVudCwgd2UgbG9va3VwIHRoZSBwcm92aWRlZCB0YWcgbmFtZSBhbmQgaWYgd2UgZmluZCBpdCBpbiB0aGlzIGNsYXNzXHJcbi8vIHdlIHVzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgd2l0aCB0aGUgcHJvcGVyIFNWRyBuYW1lc3BhY2Ugc3RyaW5nLiBWYWx1ZXMgb2YgdGhlc2UgcHJvcGVydGllc1xyXG4vLyBhcmUgU3ZnRWxtSW5mbyB2YWx1ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RnVuY1Byb3h5UHJvcHMsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZSwgc19jdXJyZW50Q2xhc3NDb21wLCBjcmVhdGVXYXRjaGVyLCBWTiwgVk5VcGRhdGVEaXNwLCBJV2F0Y2hlcn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBjb25uZWN0IGJldHdlZW4gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCB0aGUgVk5zIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxubGV0IHN5bUtleXNUb05vZGVzID0gU3ltYm9sKCBcInN5bUtleXNUb05vZGVzXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBzeW1ib2wgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnVuY1Byb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogRnVuY1Byb3h5UHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gVk5UeXBlLkZ1bmNQcm94eTtcclxuXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgZGF0YSBmcm9tIHRoZSBwcm9wcy4gTm90ZSB0aGF0IGlmIHRoaXNBcmcgaXMgdW5kZWZpbmVkIGl0IHdpbGwgYmUgY2hhbmdlZFxyXG4gICAgICAgIC8vIHRvIHRoZSBub2RlJ3MgY3JlYXRvciBjb21wb25lbnQgdXBvbiBtb3VudGluZ1xyXG5cdFx0dGhpcy5mdW5jID0gcHJvcHMuZnVuYyBhcyAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcblx0XHR0aGlzLnRoaXNBcmcgPSBwcm9wcy50aGlzQXJnO1xyXG5cdFx0dGhpcy5hcmdzID0gcHJvcHMuYXJncztcclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclJlcXVpcmVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBpZiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJlbmRlclJlcXVpcmVkOyB9O1xyXG5cclxuXHJcblxyXG4gICAgLy8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIG5vZGUgbmFtZSBpcyB0aGUgZnVuY3Rpb24ncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmZ1bmMubmFtZTtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVkVSQk9TRV9DT01QXHJcblx0XHRcdGNvbnNvbGUuZGVidWcoIGBWRVJCT1NFOiBDYWxsaW5nIGZ1bmN0aW9uIHByb3h5IGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy50aGlzQXJnLCB0aGlzLmFyZ3MpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZnVuY1dhdGNoZXIoIHRoaXMuYXJncyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICh0aGlzLnRoaXNBcmcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpcy5jcmVhdG9yO1xyXG5cclxuXHRcdC8vIGlmIGEga2V5IHdhcyBub3QgcHJvdmlkZWQgd2UgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzQXJnICh3aGljaCBtaWdodCBiZSB0aGUgY3VycmVudFxyXG5cdFx0Ly8gY29tcG9uZW50KSBhcyBhIGtleS4gSWYgdGhpc0FyZyBpcyB1bmRlZmluZWQgZWl0aGVyIHdlIHVzZSB0aGUgZnVuY3Rpb24gaXRzZWxmIGFzIGEga2V5LlxyXG4gICAgICAgIHRoaXMubGlua0tleSA9IHRoaXMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblxyXG5cdFx0dGhpcy5saW5rTm9kZVRvRnVuYygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMudXBkYXRlRnJvbVdhdGNoZXIsIHRoaXMudGhpc0FyZywgdGhpcyk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLnVubGlua05vZGVGcm9tRnVuYygpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jUHJveHlWTiA9IG5ld1ZOIGFzIEZ1bmNQcm94eVZOO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3QgYW5kIHRoZSBzYW1lIHRoaXNBcmcgcHJvcGVydHlcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IG5ld0Z1bmNQcm94eVZOLmZ1bmMgJiYgdGhpcy50aGlzQXJnID09PSBuZXdGdW5jUHJveHlWTi50aGlzQXJnO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1Byb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5saW5rS2V5ID0gbmV3RnVuY1Byb3h5Vk4ubGlua0tleTtcclxuXHJcblx0XHQvLyB0YWtlIGFyZ3VtZW50cyBmcm9tIHRoZSBuZXcgbm9kZTsgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgXCJ0aGlzQXJnXCIgcmVtYWluIHRoZSBzYW1lLlxyXG5cdFx0dGhpcy5hcmdzID0gbmV3RnVuY1Byb3h5Vk4uYXJncztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBhbHNvIGJlIGNhbGxlZCAtIGJ1dCBvbmx5IHRvIGNsZWFyIHRoZSByZW5kZXJSZXF1aXJlZCBmbGFnLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuICAgIHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSB1c2UgdGhpcyBtZXRob2Qgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZ1wiXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZmluZFZOKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55KTogRnVuY1Byb3h5Vk5cclxuXHR7XHJcblx0XHQvLyBpZiB0aGUga2V5IGlzIHVuZGVmaW5lZCwgd2UgdXNlIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmXHJcblx0XHRsZXQgbGlua0tleTogYW55ID0ga2V5IHx8IHRoaXNBcmcgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0cmV0dXJuIG1hcEtleXNUb05vZGVzICYmIG1hcEtleXNUb05vZGVzLmdldCggbGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdXBkYXRlKCBmdW5jOiBGdW5jdGlvbiwga2V5PzogYW55LCB0aGlzQXJnPzogYW55LCBhcmdzPzogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZmluZCB0aGUgbm9kZVxyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBmdW5jLCBrZXksIHRoaXNBcmcpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZuLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dm4ucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiBhIHZhbHVlIG9mIHNvbWUgdHJpZ2dlciBvYmplY3QgYmVpbmcgd2F0Y2hlZCBieSB0aGUgZnVuY3Rpb25cclxuICAgIC8vIGlzIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyb21XYXRjaGVyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmICghbWFwS2V5c1RvTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG1hcEtleXNUb05vZGVzID0gbmV3IE1hcDxhbnksRnVuY1Byb3h5Vk4+KCk7XHJcblx0XHRcdHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc10gPSBtYXBLZXlzVG9Ob2RlcztcclxuXHRcdH1cclxuXHJcblx0XHRtYXBLZXlzVG9Ob2Rlcy5zZXQoIHRoaXMubGlua0tleSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSB1bmxpbmtOb2RlRnJvbUZ1bmMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSB0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdO1xyXG5cdFx0aWYgKG1hcEtleXNUb05vZGVzKVxyXG5cdFx0XHRtYXBLZXlzVG9Ob2Rlcy5kZWxldGUoIHRoaXMubGlua0tleSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZ1xyXG5cdHByaXZhdGUgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cclxuXHQvLyBPYmplY3QgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHRoaXNBcmc6IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBhcmdzOiBhbnlbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIHJlbmRlclJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBLZXkgdGhhdCBsaW5rcyB0aGUgZnVuY3Rpb24gYW5kIHRoaXMgbm9kZS4gVGhpcyBrZXkgaXMgZWl0aGVyIGVxdWFscyB0byB0aGUga2V5IHByb3ZpZGVkXHJcblx0Ly8gaW4gdGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvciB0byB0aGUgY3VycmVudCBjb21wb25lbnQgb3IgdG8gdGhlIGZ1bmN0aW9uXHJcblx0Ly8gaXRzZWxmLlxyXG5cdHByaXZhdGUgbGlua0tleTogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgZnVuY3Rpb24gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLiBUaGUgd2F0Y2hlciB3aWxsIG5vdGljZSBhbnkgdHJpZ2dlciBvYmplY3RzXHJcbiAgICAvLyBiZWluZyByZWFkIGR1cmluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZXhlY3V0aW9uIGFuZCB3aWxsIHJlcXVlc3QgdXBkYXRlIHRodXMgdHJpZ2dlcnJpbmdcclxuICAgIC8vIHJlLXJlbmRlcmluZy5cclxuXHRwcml2YXRlIGZ1bmNXYXRjaGVyOiBJV2F0Y2hlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0ZyYWdtZW50LCBGdW5jQ29tcFR5cGUsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQgeyBWTkJhc2UsIFZOLCBWTlVwZGF0ZURpc3AgfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gRnJhZ21lbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBmdW5jOiBGdW5jQ29tcFR5cGUsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudCAke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyggdGhpcy5wcm9wcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiBpdCBpcyB0aGUgc2FtZSBmdW5jdGlvbiBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMgPT09IChuZXdWTiBhcyBGdW5jVk4pLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdGdW5jVk4gPSBuZXdWTiBhcyBGdW5jVk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNWTi5rZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBwcm9wZXJ0aWVzIGZyb20gdGhlIG5ldyBub2RlXHJcblx0XHR0aGlzLmZ1bmMgPSBuZXdGdW5jVk4uZnVuYztcclxuXHRcdHRoaXMucHJvcHMgPSBuZXdGdW5jVk4ucHJvcHM7XHJcblxyXG5cdFx0Ly8gc2luY2UgdGhlIHJlbmRlcmluZyBwcm9kdWNlZCBieSBhIGZ1bmN0aW9uIG1heSBkZXBlbmQgb24gZmFjdG9ycyBiZXlvbmQgcHJvcGVydGllcyxcclxuXHRcdC8vIHdlIGFsd2F5cyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiBmb3IgYSBzdGF0ZWxlc3MgY29tcG9uZW50LiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBkdXJpbmcgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG5cdHByaXZhdGUgZnVuYzogRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUluZGVwZW5kZW50Q29tcFZOLCBJQ29tcG9uZW50LCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwLCBDbGFzc0NvbXBWTn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIEluc3RhbmNlVk4gaXMgYSBub2RlIHRoYXQgaG9sZHMgYW4gaW5zdGFuY2Ugb2YgYW4gSUNvbXBvbmVudC1pbXBsZW1lbnRpbmcgb2JqZWN0LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBJSW5kZXBlbmRlbnRDb21wVk5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBjb21wOiBJQ29tcG9uZW50KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gVk5UeXBlLkluZGVwZW5kZW50Q29tcDtcclxuXHRcdHRoaXMuY29tcCA9IGNvbXA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY29tcG9uZW50cyBjYW4gZGVmaW5lIHRoZSBkaXNwbGF5TmFtZSBwcm9wZXJ0eTsgaWYgdGhleSBkb24ndCB0aGVuIHRoZSBkZWZhdWx0IG5hbWVcclxuXHRcdC8vIGlzIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBuYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lID8gdGhpcy5jb21wLmRpc3BsYXlOYW1lIDogdGhpcy5jb21wLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuIFRoZSBpbnN0YW5jZSBvZiBvdXIgY29tcG9uZW50IGlzIHRoZSBrZXkuXHJcblx0cHVibGljIGdldCBrZXkoKTogYW55IHsgcmV0dXJuIHRoaXMuY29tcDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGlmIGl0IGlzIHRoZSBzYW1lIGNvbXBvbmVudCBpbnN0YW5jZSwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xyXG5cdFx0bGV0IG5ld0NvbXAgPSAobmV3Vk4gYXMgSW5kZXBlbmRlbnRDb21wVk4pLmNvbXA7XHJcblx0XHRsZXQgbmVlZHNVcGRhdGluZyA9IHRoaXMuY29tcCAhPT0gbmV3Q29tcDtcclxuXHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50IGluc3RhbmNlcyBhcmUgZGlmZmVyZW50LCB0aGVuIHdlIG5lZWQgdG8gcHJlcGFyZSB0aGUgbmV3IGluc3RhbmNlIGZvclxyXG5cdFx0Ly8gbW91bnRpbmcgYW5kIHRoZSBvbGQgb25lIGZvciB1bm1vdW50aW5nLlxyXG5cdFx0aWYgKG5lZWRzVXBkYXRpbmcpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2lsbFVubW91bnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wID0gbmV3Q29tcDtcclxuXHRcdFx0dGhpcy53aWxsTW91bnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBuZWVkc1VwZGF0aW5nKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTWFuYWdlZENvbXBWTiwgSUNvbXBvbmVudENsYXNzLCBWTlR5cGUsIElDb21wb25lbnQsIHNldFJlZiwgUmVmUHJvcFR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtDbGFzc0NvbXBWTiwgVk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXByZXNlbnRzIGEgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgSUNvbXBvbmVudDw+IGludGVyZmFjZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgQ2xhc3NDb21wVk4gaW1wbGVtZW50cyBJTWFuYWdlZENvbXBWTlxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHB1YmxpYyBjb21wQ2xhc3M6IElDb21wb25lbnRDbGFzcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3MsIHByb3BzOiBhbnksIGNoaWxkcmVuOiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5NYW5hZ2VkQ29tcDtcclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmRpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IElDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCggcGFyZW50LCBjcmVhdG9yKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHR0aGlzLmNvbXAgPSBuZXcgdGhpcy5jb21wQ2xhc3MoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBzdXBlci53aWxsTW91bnQoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBjb21wb25lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGNvbXBvbmVudHMgKGFuZC9vciBlbGVtZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHJcbiAgICAgICAgc3VwZXIud2lsbFVubW91bnQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGlzIHRoZSBzYW1lXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wQ2xhc3MgPT09IChuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOKS5jb21wQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVwZGF0ZXMgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhXHJcblx0Ly8gVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGluZyBzdWItbm9kZXMgaXMgbmVjZXNzYXJ5IGFuZFxyXG5cdC8vIGZhbHNlIG90aGVyd2lzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0NsYXNzVk4gPSBuZXdWTiBhcyBNYW5hZ2VkQ29tcFZOO1xyXG5cclxuXHRcdC8vIGxldCB0aGUgY29tcG9uZW50IGtub3cgYWJvdXQgdGhlIG5ldyBwcm9wZXJ0aWVzIChpZiBpdCBpcyBpbnRlcmVzdGVkIGluIHRoZW0pXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLmNvbXAuc2hvdWxkVXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNob3VsZFJlbmRlciA9IHRoaXMuY29tcC5zaG91bGRVcGRhdGUoIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3Q2xhc3NWTi5yZWYgIT09IHRoaXMucmVmKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJlZmVyZW5jZSBvYmplY3RcclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdDbGFzc1ZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdDbGFzc1ZOLmtleTtcclxuXHJcblx0XHQvLyBzaGFsbG93IGNvcHkgdGhlIG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG90aGVyIG5vZGUgdG8gb3VyIG9iamVjdC4gVGhpcyBpcyBuZWVkZWRcclxuXHRcdC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBnb3Qgb3VyIHByb3BzIG9iamVjdCBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHdpbGwga2VlcFxyXG5cdFx0Ly8gd29ya2luZyB3aXRoIGl0IC0gZXNwZWNpYWxseSBpZiBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZC5cclxuXHRcdE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goIGtleSA9PiBkZWxldGUgdGhpcy5wcm9wc1trZXldKTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMucHJvcHMsIG5ld0NsYXNzVk4ucHJvcHMpO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggZmFsc2UsIHNob3VsZFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuXHJcblx0cHJpdmF0ZSByZWY6IFJlZlByb3BUeXBlPGFueT47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtQcm9taXNlUHJveHlQcm9wcywgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBQcm9taXNlUHJveHlQcm9wcywgY2hpbGRyZW4/OiBhbnlbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5Qcm9taXNlUHJveHk7XHJcblx0XHR0aGlzLnByb21pc2UgPSBwcm9wcy5wcm9taXNlO1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gcHJvcHMuZXJyb3JDb250ZW50RnVuYztcclxuXHRcdHRoaXMuY29udGVudCA9IGNoaWxkcmVuO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkIChzdWNjZXNzZnVsbHkgb3Igbm90KS5cclxuXHRwdWJsaWMgZ2V0IGlzU2V0dGxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucHJvbWlzZSA9PSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuXHQvLy8gI2VuZGlmXHJcblx0OyAvLyB1Z2x5IHRyaWNrIHRvIG5vdCBsZXQgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIgdG8gc3RyaXAgdGhlICNlbmRpZiBjb21tZW50XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgbmFtZSA9IFwiUHJvbWlzZVwiO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuICAgICAgICAvLyBET00gdHJlZS5cclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcbiAgICAgICAgcHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuICAgICAgICB9XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgcHJvbWlzZSBvYmplY3RcclxuXHRcdHJldHVybiB0aGlzLnByb21pc2UgPT09IG5ld1Byb21pc2VQcm94eVZOLnByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdQcm9taXNlUHJveHlWTiA9IG5ld1ZOIGFzIFByb21pc2VQcm94eVZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdQcm9taXNlUHJveHlWTi5rZXk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBuZXdQcm9taXNlUHJveHlWTi5jb250ZW50O1xyXG5cdFx0dGhpcy5lcnJvckNvbnRlbnRGdW5jID0gbmV3UHJvbWlzZVByb3h5Vk4uZXJyb3JDb250ZW50RnVuYztcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGl0IGlzIG5lY2Vzc2FyeSB0byB1cGRhdGUgdGhlIHN1Yi1ub2Rlcy4gVGhlIGNvbW1pdFVwZGF0ZVxyXG5cdFx0Ly8gbWV0aG9kIHNob3VsZCBOT1QgYmUgY2FsbGVkLlxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYWl0cyBmb3IgdGhlIHByb21pc2UgdG8gc2V0dGxlXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBhd2FpdCB0aGlzLnByb21pc2U7XHJcblx0XHRcdHRoaXMucHJvbWlzZSA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbm9kZSBpcyBzdGlsbCBtb3VudGVkLCByZXF1ZXN0IHVwZGF0ZVxyXG5cdFx0XHRpZiAodGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgYWxyZWFkeSB1bm1vdW50ZWQsIGRvIG5vdGhpbmdcclxuXHRcdFx0aWYgKCF0aGlzLmlzTW91bnRlZClcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRpZiAodGhpcy5lcnJvckNvbnRlbnRGdW5jKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5lcnJvckNvbnRlbnRGdW5jKCBlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oIFwiVW5oYW5kbGVkIHJlamVjdGVkIHByb21pc2U6XCIsIGVycjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIpO1xyXG5cclxuXHRcdFx0dGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBQcm9taXNlIHRoYXQgdGhpcyBub2RlIHdhdGNoZXMuXHJcblx0cHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPGFueT47XHJcblxyXG5cdC8vIENvbnRlbnQgdGhhdCB0aGlzIG5vZGUgZGlzcGxheXMuIEluaXRpYWxseSB0aGlzIGNvbnRlbnQgaXMgc2V0IHRvIHByb3BzLmNoaWxkcmVuLiBXaGVuXHJcblx0Ly8gdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQsIHRoZSBjb250ZW50IGlzIHNldCB0byB0aGUgcmVzb2x2ZWQgdmFsdWUuIElmIHRoZSBwcm9taXNlIGlzXHJcblx0Ly8gcmVqZWN0ZWQgYW5kIHRoZSBlcnJvckNvbnRlbnRGdW5jIGlzIGRlZmluZWQsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCBpdHMgcmV0dXJuXHJcblx0Ly8gdmFsdWUgaXMgdXNlZCBhcyBjb250ZW50LlxyXG5cdHByaXZhdGUgY29udGVudD86IGFueTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBlcnJvckNvbnRlbnRGdW5jPzogKCBlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSW5mb3JtYXRpb24ga2VwdCBieSBSb290IHZpcnR1YWwgbm9kZSBhYm91dCBzZXJ2aWNlIGV4cG9ydCBwdWJsaWNhdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZVxyXG4vLyBzYW1lIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIFNjaGVkdWxlZEZ1bmNUeXBlLCBJQ29tcG9uZW50LCBJVk5vZGUsIFZOVHlwZSwgSUNsYXNzQ29tcFZOLCBGcmFnbWVudCwgRnVuY1Byb3h5LFxyXG4gICAgRnVuY1Byb3h5UHJvcHMsIFByb21pc2VQcm94eSwgSUNvbXBvbmVudENsYXNzLCBGdW5jQ29tcFR5cGVcclxufSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7XHJcbiAgICBWTiwgRE4sIFZOVXBkYXRlRGlzcCwgVk5CYXNlLCBUZXh0Vk4sIEluZGVwZW5kZW50Q29tcFZOLCBQcm9taXNlUHJveHlWTixcclxuICAgIEZ1bmNQcm94eVZOLCBFbG1WTiwgTWFuYWdlZENvbXBWTiwgRnVuY1ZOLCBlbnRlck11dGF0aW9uU2NvcGUsIGV4aXRNdXRhdGlvblNjb3BlXHJcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcbi8vIE1hcCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIG9uIHRoZSBuZXh0IFVJIGN5Y2xlLiBXZSB1c2UgTWFwIGluIG9yZGVyIHRvIG5vdCBpbmNsdWRlXHJcbi8vIHRoZSBzYW1lIG5vZGUgbW9yZSB0aGFuIG9uY2UgLSB3aGljaCBjYW4gaGFwcGVuIGlmIHRoZSBub2RlJ3MgcmVxdWVzdFVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkXHJcbi8vIG1vcmUgdGhhbiBvbmNlIGR1cmluZyBhIHNpbmdsZSBydW4gKGUuZy4gZHVyaW5nIGV2ZW50IHByb2Nlc3NpbmcpLiBUaGUgdmFsdWUgbWFwcGVkIHRvIHRoZVxyXG4vLyBub2RlIGRldGVybWluZXMgdGhlIG9wZXJhdGlvbiB0byBiZSBwZXJmb3JtZWQ6XHJcbi8vXHQtIHVuZGVmaW5lZCAtIHRoZSBub2RlIHdpbGwgYmUgdXBkYXRlZFxyXG4vL1x0LSBudWxsIC0gdGhlIG5vZGUgd2lsbCBiZSBkZWxldGVkIGZyb20gaXRzIHBhcmVudFxyXG4vL1x0LSBhbnl0aGluZyBlbHNlIC0gdGhlIG5vZGUgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoaXMgbmV3IGNvbnRlbnRcclxubGV0IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBiZWZvcmVcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kXHJcbi8vIHRoZSB2YWx1ZXMgYXJlIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHJcbi8vIE1hcCBvZiBmdW5jdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCB1cG9uIGEgbmV3IGFuaW1hdGlvbiBmcmFtZSBhZnRlclxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmRcclxuLy8gdGhlIHZhbHVlcyBhcmUgdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb21wb25lbnQgd2hvc2UgcmVuZGVyaW5nIHRyZWUgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRDbGFzc0NvbXA6IElDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2l2ZW4gbm9kZSBhcyB0aGUgY3VycmVudCBhbmQgaWYgdGhlIG5vZGUgaXMgZm9yIHRoZSBjb21wb25lbnQsIHNldCB0aGUgY3VycmVudFxyXG4gKiBjb21wb25lbnQuIFJldHVybnMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IHdhcyBwcmV2aW91c2x5IHRoZSBjdXJyZW50IG9uZS4gQXMgd2UgcmVjdXJzZSBvdmVyXHJcbiAqIHZpcnR1YWwgbm9kZXMgYW5kIHN1Yi1ub2Rlcywgd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIGhhdmUgdGhlIHNfY3VycmVudFZOIGFuZFxyXG4gKiBzX2N1cnJlbnRDbGFzc0NvbXAgdmFyaWFibGVzIHRvIHBvaW50IHRvIHRoZSBub2RlIGFuZCBjb21wb25lbnQgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyYWNrQ3VycmVudFZOKCB2bjogVk4pOiBWTlxyXG57XHJcbiAgICBsZXQgcHJldlZOID0gc19jdXJyZW50Vk47XHJcbiAgICBzX2N1cnJlbnRWTiA9IHZuO1xyXG4gICAgc19jdXJyZW50Q2xhc3NDb21wID0gIXZuID8gbnVsbCA6ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG4gICAgcmV0dXJuIHByZXZWTjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIGluZGljYXRpbmcgaW4gd2hhdCBwaGFzZSBvZiB0aGUgdXBkYXRlIGN5Y2xlIHdlIGN1cnJlbnRseSByZXNpZGUuXHJcbmNvbnN0IGVudW0gU2NoZWR1bGVyU3RhdGVcclxue1xyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgbm90IHdpdGhpbiB0aGUgdXBkYXRlIGN5Y2xlXHJcblx0SWRsZSA9IDAsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbm9kZXNcclxuXHRCZWZvcmVVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgdXBkYXRpbmcgbm9kZXNcclxuXHRVcGRhdGUsXHJcblxyXG5cdC8vIFRoZSBzY2hlZHVsZXIgaXMgZXhlY3V0aW5nIGZ1bmN0aW9ucyBhZnRlciB1cGRhdGluZyBub2Rlc1xyXG5cdEFmdGVyVXBkYXRlLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGlzQ2FsbGJhY2sgT2JqZWN0IHRoYXQgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQuXHJcbiAqIEBwYXJhbSB2biBWaXJ0dWFsIG5vZGUgaW4gd2hvc2UgY29udGV4dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZC5cclxuICogQHJldHVybnMgVGhlIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjYWxsYmFjay5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwQ2FsbGJhY2tXaXRoVk48VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiBUXHJcbntcclxuICAgIC8vIGlmIFwidGhpc1wiIGZvciB0aGUgY2FsbGJhY2sgd2FzIG5vdCBwYXNzZWQgYnV0IHZuIHdhcywgY2hlY2sgd2hldGhlciB0aGUgdm4gaXMgYSBjb21wb25lbnQ7XHJcbiAgICAvLyBpZiB5ZXMsIHVzZSBpdCBhcyBcInRoaXNcIjsgb3RoZXJ3aXNlLCB1c2Ugdm4ncyBjcmVhdG9yIGNvbXBvbmVudC5cclxuICAgIGlmICghdGhpc0NhbGxiYWNrICYmIHZuKVxyXG4gICAgICAgIHRoaXNDYWxsYmFjayA9ICh2biBhcyBhbnkpLmNvbXAgIT0gbnVsbCA/ICh2biBhcyBhbnkpLmNvbXAgOiB2bi5jcmVhdG9yO1xyXG5cclxuICAgIHJldHVybiBDYWxsYmFja1dyYXBwZXIuYmluZCggdm4sIHRoaXNDYWxsYmFjaywgY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2FsbGJhY2tXcmFwcGVyIGZ1bmN0aW9uIGlzIHVzZWQgdG8gd3JhcCBjYWxsYmFja3MgaW4gb3JkZXIgdG8gaGF2ZSBpdCBleGVjdXRlZCBpbiBhIE1pbWJsXHJcbiAqIGNvbnRleHQuIFRoZSBmdW5jdGlvbiBpcyB1c3VhbGx5IGJvdW5kIHRvIGEgdmlydHVhbCBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlXHJcbiAqIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmUgYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlXHJcbiAqIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpbiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWxcclxuICogY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci4gTm90ZSB0aGF0IFwidGhpc1wiXHJcbiAqIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIGZ1bmN0aW9uIHdhcyBzY2hlZHVsZWQgd2l0aG91dCBiZWluZyBpbiB0aGUgY29udGV4dCBvZiBhbnkgdmlydHVhbCBub2RlLlxyXG4gKiBcclxuICogVGhlIHByb3BlciBNaW1ibCBjb250ZXh0IGVzdGFibGlzaGVzIHRoZSBmb2xsb3dpbmc6XHJcbiAqIC0gZXhlY3V0ZXMgaW4gYSBtdXRhdGlvbiBzY29wZSwgc28gdGhhdCBpZiBhbnkgdHJpZ2dlciB2YWxyaWFibGUgaXMgY2hhbmdlZCBkdXJpbmcgdGhlIGV4ZWN1dGlvblxyXG4gKiAgIG9mIHRoZSBjYWxsYmFjaywgd2F0Y2hlcnMgd2lsbCBiZSBvbmx5IG5vdGlmaWVkIGFmdGVyIHRoZSBjYWxsYmFjayBoYXMgZmluaXNoZWQgaXRzIGV4ZWN1dGlvbi5cclxuICogLSBJZiB0aGUgd3JhcHBpbmcgaGFzIGJlZW4gZG9uZSBpbiB0aGUgY29udGV4dCBvZiBhIHZpcnR1YWwgbm9kZSAoZS5nLiBmcm9tIGEgTWltYmwgY29tcG9uZW50KSxcclxuICogICB0aGUgXCJjdXJyZW50IHZpcnR1YWwgbm9kZVwiIGFuZCB0aGUgXCJjdXJyZW50IGNvbXBvbmVudFwiIGFyZSBzZXQgdG8gdGhlIG5vZGUgYW5kIGNvbXBvbmVudCB1bmRlclxyXG4gKiAgIHdoaWNoIHRoZSBjYWxsYmFjayB3YXMgd3JhcHBlZC4gVGhpcyBhbGxvdyBmb3IgcHJvcGVyIEpTWCBleGVjdXRpb24gYW5kIGZvciB1c2luZyB0aGUgTWltYmxcclxuICogICBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20uXHJcbiAqIFxyXG4gKi9cclxuZnVuY3Rpb24gQ2FsbGJhY2tXcmFwcGVyKCk6IGFueVxyXG57XHJcblx0Ly8gcmVtZW1iZXIgdGhlIGN1cnJlbnQgVk4gYW5kIHNldCB0aGUgY3VycmVudCBWTiB0byBiZSB0aGUgVk4gZnJvbSB0aGUgXCJ0aGlzXCIgdmFsdWUuIE5vdGVcclxuXHQvLyB0aGF0IHRoaXMgY2FuIGJlIHVuZGVmaW5lZCBpZiB0aGUgd3JhcHBpbmcgd2FzIGNyZWF0ZWQgd2l0aG91dCB0aGUgVk4gY29udGV4dC5cclxuICAgIGxldCB2bjogVk4gPSB0aGlzO1xyXG4gICAgbGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKCB2biA/IHZuIDogbnVsbCk7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuICAgICAgICBlbnRlck11dGF0aW9uU2NvcGUoKTtcclxuXHRcdGxldCBbdGhpc09yZ0NhbGxiYWNrLCBvcmdDYWxsYmFjaywgLi4ucmVzdF0gPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gb3JnQ2FsbGJhY2suYXBwbHkoIHRoaXNPcmdDYWxsYmFjaywgcmVzdCk7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG4gICAgICAgIGxldCBlcnJvclNlcnZpY2UgPSB2bj8uZ2V0U2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG4gICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgIGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCBnZXRWTlBhdGgoIHZuKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcblx0fVxyXG5cdGZpbmFsbHlcclxuXHR7XHJcbiAgICAgICAgZXhpdE11dGF0aW9uU2NvcGUoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdG9yZSBwcmV2aW91cyBjdXJyZW50IFZOXHJcbiAgICAgICAgdHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vZGVVcGRhdGUoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRjb25zb2xlLndhcm4oIGBVcGRhdGUgcmVxdWVzdGVkIGZvciB2aXJ0dWFsIG5vZGUgJyR7Z2V0Vk5QYXRoKHZuKS5qb2luKFwiLT5cIil9JyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbmNob3IgRE9NIG5vZGVgKVxyXG5cclxuICAgIGFkZE5vZGVUb1NjaGVkdWxlciggdm4pO1xyXG5cclxuXHQvLyB0aGUgdXBkYXRlIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCB0aWNrIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlIGR1cmluZyBhXHJcblx0Ly8gXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uLlxyXG5cdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUpXHJcblx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHMgdGhlIGdpdmVuIG5vZGUgYW5kIHJlbGF0ZWQgaW5mb3JtYXRpb24gaW50byB0aGUgaW50ZXJuYWwgc3RydWN0dXJlcyBzbyB0aGF0IGl0IHdpbGwgYmVcclxuLy8gdXBkYXRlZCBkdXJpbmcgdGhlIG5leHQgTWltYmwgdGljay5cclxuZnVuY3Rpb24gYWRkTm9kZVRvU2NoZWR1bGVyKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyBhZGQgdGhpcyBub2RlIHRvIHRoZSBtYXAgb2Ygbm9kZXMgZm9yIHdoaWNoIGVpdGhlciB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgb3JcclxuXHQvLyBkZWxldGlvbiBpcyBzY2hlZHVsZWQuIE5vdGUgdGhhdCBhIG5vZGUgd2lsbCBvbmx5IGJlIHByZXNlbnQgb25jZSBpbiB0aGUgbWFwIG5vXHJcblx0Ly8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIGl0IGNhbGxzIHJlcXVlc3RVcGRhdGUoKS5cclxuXHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5hZGQoIHZuKTtcclxuXHJcblx0Ly8gaWYgdGhpcyBpcyBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBhbmQgaXQgaGFzIGJlZm9yZVVwZGF0ZSBhbmQvb3IgYWZ0ZXJVcGRhdGUgbWV0aG9kc1xyXG5cdC8vIGltcGxlbWVudGVkLCBzY2hlZHVsZSB0aGVpciBleGVjdXRpb25zLiBOb3RlIHRoYXQgdGhlIFwiYmVmb3JlVXBkYXRlXCIgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIHNjaGVkdWxlZCBpZiB0aGUgY3VycmVudCBzY2hlZHVsZXIgc3RhdGUgaXMgQmVmb3JlVXBkYXRlLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudFxyXG5cdC8vIHdpbCBiZSB1cGRhdGVkIGluIHRoZSBjdXJyZW50IGN5Y2xlIGFuZCB0aGVyZSBpcyBhbHJlYWR5IG5vIHRpbWUgdG8gZXhlY3V0ZSB0aGUgXCJiZWZvcmVcclxuXHQvLyB1cGRhdGVcIiBtZXRob2QuXHJcblx0aWYgKHZuLnR5cGUgPT09IFZOVHlwZS5JbmRlcGVuZGVudENvbXAgfHwgdm4udHlwZSA9PT0gVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBJQ2xhc3NDb21wVk4pLmNvbXA7XHJcblx0XHRpZiAoY29tcC5iZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNldCggY29tcC5iZWZvcmVVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblxyXG5cdFx0aWYgKGNvbXAuYWZ0ZXJVcGRhdGUpXHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGNvbXAuYWZ0ZXJVcGRhdGUsIHdyYXBDYWxsYmFja1dpdGhWTiggY29tcC5iZWZvcmVVcGRhdGUsIGNvbXAsIHZuKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHNcclxuLy8gaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuLFxyXG4gICAgdGhpc0FyZz86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiB2b2lkXHJcbntcclxuXHQvLy8gI2lmIERFQlVHXHJcblx0aWYgKCFmdW5jKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIFwiVHJ5aW5nIHRvIHNjaGVkdWxlIHVuZGVmaW5lZCBmdW5jdGlvbiBmb3IgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cdGlmIChiZWZvcmVVcGRhdGUpXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2V0KCBmdW5jLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGZ1bmMsIHRoaXNBcmcsIHZuKSk7XHJcblxyXG5cdFx0XHQvLyBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIGFsd2F5cyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgZnJhbWUgZXZlbiBpZiB0aGVcclxuXHRcdFx0Ly8gY2FsbCBpcyBtYWRlIGZyb20gYW5vdGhlciBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbi5cclxuXHRcdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGlmICghc19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLmhhcyggZnVuYykpXHJcblx0XHR7XHJcblx0XHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhpc0FyZywgdm4pKTtcclxuXHJcblx0XHRcdC8vIGFuIFwiYWZ0ZXIgdXBkYXRlXCIgZnVuY3Rpb24gaXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGN5Y2xlIHVubGVzcyB0aGUgcmVxdWVzdCBpcyBtYWRlXHJcblx0XHRcdC8vIGVpdGhlciBmcm9tIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gZXhlY3V0aW9uIG9yIGR1cmluZyBhIG5vZGUgdXBkYXRlLlxyXG5cdFx0XHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLlVwZGF0ZSlcclxuXHRcdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5mdW5jdGlvbiBvblNjaGVkdWxlZEZyYW1lKCk6IHZvaWRcclxue1xyXG5cdC8vIGNsZWFyIHRoZSBzY2hlZHVsZWQgZnJhbWUgaGFuZGxlIHNvIHRoYXQgbmV3IHVwZGF0ZSByZXF1ZXN0cyB3aWxsXHJcblx0Ly8gc2NoZWR1bGUgYSBuZXcgZnJhbWUuXHJcblx0c19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IDA7XHJcblxyXG4gICAgZG9NaW1ibGVUaWNrKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjb25jaWxlciBtYWluIGVudHJhbmNlIHBvaW50XHJcbmZ1bmN0aW9uIGRvTWltYmxlVGljaygpOiB2b2lkXHJcbntcclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBiZWZvcmUgdXBkYXRlcywgaXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgbmV4dCBjeWNsZS5cclxuXHRpZiAoc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBuZXcgTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0aWYgKHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuICAgICAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgICAgICBsZXQgc3RhdHNBbHJlYWR5RXhpc3RlZCA9IERldGFpbGVkU3RhdHMuc3RhdHMgIT0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFzdGF0c0FscmVhZHlFeGlzdGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzID0gbmV3IERldGFpbGVkU3RhdHMoIGBNaW1ibCB0aWNrICR7c19jdXJyZW50VGlja306IGApO1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGludGVybmFsIHNldCBvZiBub2RlcyBhbmQgcmUtY3JlYXRlIGl0IHNvIHRoYXQgaXQgaXMgcmVhZHkgZm9yIG5ld1xyXG5cdFx0Ly8gdXBkYXRlIHJlcXVlc3RzLiBBcnJhbmdlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBhbmQgcGVyZm9ybSB1cGRhdGVzLlxyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLlVwZGF0ZTtcclxuXHRcdGxldCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZTtcclxuXHRcdHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gbmV3IFNldDxWTj4oKTtcclxuXHRcdHBlcmZvcm1Db21taXRQaGFzZSggcGVyZm9ybVJlbmRlclBoYXNlKCBhcnJhbmdlTm9kZXNCeURlcHRoKCB2bnNTY2hlZHVsZWRGb3JVcGRhdGUpKSk7XHJcblxyXG4gICAgICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgICAgIGlmICghc3RhdHNBbHJlYWR5RXhpc3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGluZyBjb21wb25lbnRzXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuQWZ0ZXJVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZTtcclxuXHRcdHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZXMgdGhlIHNjaGVkdWxlZCBub2RlcyBieSB0aGVpciBuZXN0aW5nIGRlcHRocyBzbyB0aGF0IHdlIHVwZGF0ZSBcInVwcGVyXCIgbm9kZXMgYmVmb3JlXHJcbi8vIHRoZSBsb3dlciBvbmVzLiBUaGlzIGNhbiBoZWxwIGF2b2lkIHR3byBjb25kaXRpb25zOlxyXG4vL1x0LSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgdHdpY2U6IGZpcnN0IGJlY2F1c2UgaXQgY2FsbGVkIHVwZGF0ZU1lLCBhbmQgc2Vjb25kXHJcbi8vXHRcdGJlY2F1c2UgaXRzIHBhcmVudCB3YXMgYWxzbyB1cGRhdGVkLlxyXG4vL1x0LSB1bm5lY2Vzc2FyeSByZW5kZXJpbmcgYSBjaGlsZCBjb21wb25lbnQgYmVmb3JlIGl0IGlzIHJlbW92ZWQgYnkgdGhlIHBhcmVudFxyXG4vLyBXZSBhbGxvY2F0ZSBjb250aWd1b3VzIGFycmF5IHdoZXJlIGluZGljZXMgY29ycmVzcG9uZCB0byBkZXB0aC4gRWFjaCBlbGVtZW50IGluIHRoaXNcclxuLy8gYXJyYXkgd2lsbCBlaXRoZXIgYmUgdW5kZWZpbmVkIG9yIGNvbnRhaW4gYW4gYXJyYXkgb2Ygbm9kZXMgYXQgdGhpcyBkZXB0aC5cclxuZnVuY3Rpb24gYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlOiBTZXQ8Vk4+KTogVk5bXVtdXHJcbntcclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMzIpO1xyXG5cdHZuc1NjaGVkdWxlZEZvclVwZGF0ZS5mb3JFYWNoKCAodm46IFZOKSA9PlxyXG5cdHtcclxuICAgICAgICAvLyBpdCBjYW4gaGFwcGVuIHRoYXQgd2UgZW5jb3VudGVyIGFscmVhZHkgdW5tb3VudGVkIHZpcnR1YWwgbm9kZXMgLSBpZ25vcmUgdGhlbVxyXG4gICAgICAgIGlmICghdm4uYW5jaG9yRE4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHZuc0J5RGVwdGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFJldHVybnMgYXJyYXkgb2YgVk5EaXNwIHN0cnVjdHVyZXMgZm9yIGVhY2ggdXBkYXRlZCBub2RlLlxyXG5mdW5jdGlvbiBwZXJmb3JtUmVuZGVyUGhhc2UoIHZuc0J5RGVwdGg6IFZOW11bXSk6IFZORGlzcFtdXHJcbntcclxuXHRsZXQgdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10gPSBbXTtcclxuXHJcbiAgICBsZXQgZGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgdm5zIG9mIHZuc0J5RGVwdGgpXHJcblx0e1xyXG4gICAgICAgIC8vIHZuc0J5RGVwdGggaXMgYSBzcGFyc2UgYXJyYXkgc28gaXQgY2FuIGhhdmUgaG9sZXNcclxuICAgICAgICBpZiAoIXZucylcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGZvciggbGV0IHZuIG9mIHZucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciB0aGUgZmxhZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgZm9yIHRoZSBub2RlXHJcbiAgICAgICAgICAgICAgICB2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgY3ljbGUsIGRvbid0IHVwZGF0ZSBpdCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgaWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3AgPSB7IG5ld1ZOOiB2biwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uVW5rbm93biwgb2xkVk46IHZufTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWROb2RlKCBkaXNwKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgbmVhcmVzdCBlcnJvciBoYW5kbGluZyBzZXJ2aWNlLiBJZiBub2JvZHkgZWxzZSwgaXQgaXMgaW1wbGVtZW50ZWRcclxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBSb290Vk4gb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvclNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIHNfY3VycmVudFZOID8gZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkJVRzogdXBkYXRlVmlydHVhbCB0aHJldyBleGNlcHRpb24gYnV0IFN0ZEVycm9ySGFuZGxpbmcgc2VydmljZSB3YXMgbm90IGZvdW5kLlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVwZGF0ZWROb2RlRGlzcHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdGhlIGNvbW1pdCBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBUaGUgQ29tbWl0IHBoYXNlIGNvbnNpc3RzIG9mIHVwZGF0aW5nIERPTSBhbmQgY2FsbGluZyBsaWZlLWN5Y2xlXHJcbi8vIG1ldGhvZHMgZGlkTW91bnQsIGRpZFVwZGF0ZSBhbmQgd2lsbFVubW91bnQuXHJcbmZ1bmN0aW9uIHBlcmZvcm1Db21taXRQaGFzZSggdXBkYXRlZE5vZGVEaXNwczogVk5EaXNwW10pOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBkb24ndCB1bnRpY2lwYXRlIGFueSBleGNlcHRpb25zIGhlcmUgYmVjYXVzZSB3ZSBkb24ndCBpbnZva2UgM3JkLXBhcnR5IGNvZGUgaGVyZS5cclxuXHRmb3IoIGxldCBkaXNwIG9mIHVwZGF0ZWROb2RlRGlzcHMpXHJcblx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+LCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIHJlbmRlck5ld05vZGUoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyBpZiB3aWxsTW91bnQgZnVuY3Rpb24gaXMgZGVmaW5lZCB3ZSBjYWxsIGl0IHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sXHJcbiAgICAvLyBnb2VzIHRvIGVpdGhlciB0aGUgYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3BcclxuICAgIC8vICh3aGljaCBoYXMgdHJ5L2NhdGNoKS5cclxuICAgIGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbE1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuICAgICAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoXHJcbiAgICAgICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcbiAgICAgICAgaWYgKHN1Yk5vZGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2UgaGF2ZSBzdWItbm9kZXMsIHdlIG5lZWQgdG8gY3JlYXRlIG5vZGVzIGZvciB0aGVtIGFuZCByZW5kZXIuIElmIG91ciBub2RlXHJcbiAgICAgICAgICAgIC8vIGtub3dzIHRvIGhhbmRsZSBlcnJvcnMsIHdlIGRvIGl0IHVuZGVyIHRyeS9jYXRjaDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9ucyBnbyB0b1xyXG4gICAgICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgICAgIGlmICghdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3I6YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgdGhlIGVycm9yIGFuZCByZS1yZW5kZXI7IHRoZW4gd2UgcmVuZGVyIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwIGluIGFuIGluZmluaXRlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm4uc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGluayB0aGUgc3ViLW5vZGVzIHdpdGggbmV4dCBhbmQgcHJldiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGxldCBwcmV2Vk46IFZOO1xyXG4gICAgICAgICAgICBmb3IoIGxldCBzdm4gb2Ygc3ViTm9kZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2Vk4pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZOLm5leHQgPSBzdm47XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZuLnByZXYgPSBwcmV2Vk47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldlZOID0gc3ZuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1lbWJlciB0aGUgc3ViLW5vZGVzXHJcbiAgICAgICAgdm4uc3ViTm9kZXMgPSBzdWJOb2RlcztcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXROZXdOb2RlKCB2bjogVk4sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKVxyXG57XHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gcmVtZW1iZXIgdGhlIGFuY2hvciBub2RlXHJcblx0dm4uYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHJcblx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIG1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcblx0Ly8vICNlbmRpZlxyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb21taXROZXdOb2RlKCBzdm4sIG5ld0FuY2hvckROLCBuZXdCZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgZGlkTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblxyXG4gICAgaWYgKHZuLmRpZE1vdW50KVxyXG4gICAgICAgIHZuLmRpZE1vdW50KCk7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENhbGxzIHdpbGxVbm1vdW50IG9uIHRoaXMgVk4gYW5kLCBpZiByZXF1ZXN0ZWQsIHJlY3Vyc2l2ZWx5IG9uIGl0cyBzdWItbm9kZXMuIFRoaXMgZnVuY3Rpb24gaXNcclxuLy8gY2FsbGVkIGZvciBldmVyeSBub2RlIGJlaW5nIGRlc3RydWN0ZWQuIEl0IGlzIGNhbGxlZCBub24tcmVjdXJzaXZlbHkgb24gdGhlIHZpcnR1YWwgbm9kZXMgdGhhdFxyXG4vLyBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gT24gc3VjaCBub2RlcywgdGhlIHVubW91bnQgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgbm9kZSB3aWxsIGJlXHJcbi8vIHByb3Blcmx5IG1hcmtlZCBhcyB1bm1vdW50ZWQuIEZvciB2aXJ0dWFsIG5vZGVzIHRoYXQgZG9uJ3QgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUsIHRoaXNcclxuLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5LiB0aGUgdW5tb3VudCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkIGZvciB0aGVzZSBub2RlcztcclxuLy8gdGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hcmsgdGhlbSBhcyB1bm1vdW50ZWQgaGVyZS5cclxuZnVuY3Rpb24gY2FsbFdpbGxVbm1vdW50KCB2bjogVk4sIHJlY3Vyc2l2ZTogYm9vbGVhbilcclxue1xyXG4gICAgLy8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgcHJvY2Vzc2VkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG4gICAgLy8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcbiAgICB2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG4gICAgLy8gZmlyc3Qgbm90aWZ5IHN1Yi1ub2RlcyBpZiByZWN1cnNpdmVcclxuICAgIGlmIChyZWN1cnNpdmUgJiYgdm4uc3ViTm9kZXMpXHJcblx0e1xyXG4gICAgICAgIGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG4gICAgICAgICAgICBsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4oc3ZuKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxXaWxsVW5tb3VudCggc3ZuLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgcHJldmlvdXMgY3VycmVudCBub2RlLlxyXG4gICAgICAgICAgICB0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcbiAgICAgICAgICAgIHZuLnRlcm0oKTtcclxuICAgICAgICAgICAgdm4uYW5jaG9yRE4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBub3RpZnkgb3VyIG5vZGVcclxuXHRpZiAodm4ud2lsbFVubW91bnQpXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgd2lsbFVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsVW5tb3VudCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW1vdmVzIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFJlbW92ZWROb2RlKCB2bjogVk4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBnZXQgdGhlIERPTSBub2RlIGJlZm9yZSB3ZSBjYWxsIHVubW91bnQsIGJlY2F1c2UgdW5tb3VudCB3aWxsIGNsZWFyIGl0LlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cclxuXHQvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCB3ZSB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZS4gSW4gdGhpcyBjYXNlLFxyXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNpdmVseSB1bm1vdW50IHN1Yi1ub2RlcyBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50O1xyXG4gICAgLy8gaG93ZXZlciwgd2UgbmVlZCB0byBjYWxsIHRoZWlyIHdpbGxVbm1vdW50IG1ldGhvZHMuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIERPTVxyXG4gICAgLy8gbm9kZSwgd2UgbmVlZCB0byBjYWxsIHdpbGxVbm1vdW50IG9ubHkgb24gdGhlIG5vZGUgaXRzZWxmIGJlY2F1c2UgbGF0ZXIgd2Ugd2lsbCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIGl0cyBzdWItbm9kZXMuXHJcbiAgICBjYWxsV2lsbFVubW91bnQoIHZuLCBvd25ETiAhPSBudWxsKTtcclxuXHJcbiAgICAvLyBjYWxsIHVubW91bnQgb24gb3VyIG5vZGUgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgaGFzIGl0cyBvd24gRE4gb3Igbm90XHJcbiAgICBpZiAodm4udW5tb3VudClcclxuICAgIHtcclxuICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB1bm1vdW50KCkgb24gbm9kZSAke3ZuLm5hbWV9YCk7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG4gICAgICAgIHZuLnVubW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duIERPTSBub2RlLCByZW1vdmUgaXQgZnJvbSB0aGUgRE9NIHRyZWU7IG90aGVyd2lzZSwgcmVjdXJzZVxyXG4gICAgLy8gaW50byB0aGUgc3ViLW5vZGVzLlxyXG4gICAgaWYgKG93bkROKVxyXG4gICAgICAgIChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuICAgIGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IGJlY2F1c2UgdGhpcyB3YXkgdGhlIERPTSBlbGVtZW50IHJlbW92YWwgaXNcclxuXHRcdC8vIGVhc2llci5cclxuXHRcdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKVxyXG5cdFx0XHRjb21taXRSZW1vdmVkTm9kZSggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdH1cclxuXHJcbiAgICAvLyBtYXJrIHRoZSBub2RlIGFzIHVubW91bnRlZFxyXG5cdHZuLnRlcm0oKTtcclxuXHR2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVuZGVycyB0aGlzIG5vZGUgYW5kIHVwZGF0ZXMgaXRzIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnkuIFRoaXMgbWV0aG9kIGlzXHJcbi8vIGludm9rZWQgd2hlbiBhIG5vZGUgaXMgYmVpbmcgdXBkYXRlZCBlaXRoZXIgYXMgYSByZXN1bHQgb2YgdXBkYXRlTWUgaW52b2NhdGlvbiBvciBiZWNhdXNlXHJcbi8vIHRoZSBwYXJlbnQgbm9kZSB3YXMgdXBkYXRlZC5cclxuZnVuY3Rpb24gcmVuZGVyVXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIGxldCB2biA9IGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0ID8gZGlzcC5uZXdWTiA6IGRpc3Aub2xkVk47XHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcbiAgICAvLyB3ZSBjYWxsIHRoZSByZW5kZXIgbWV0aG9kIHdpdGhvdXQgdHJ5L2NhdGNoLiBJZiBpdCB0aHJvd3MsIHRoZSBjb250cm9sIGdvZXMgdG8gZWl0aGVyIHRoZVxyXG4gICAgLy8gYW5jZXN0b3Igbm9kZSB0aGF0IHN1cHBvcnRzIGVycm9yIGhhbmRsaW5nIG9yIHRoZSBNaW1ibCB0aWNrIGxvb3AgKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgbGV0IHN1Yk5vZGVzID0gY3JlYXRlVk5DaGFpbkZyb21Db250ZW50KCB2bi5yZW5kZXIoKSk7XHJcblxyXG5cdC8vIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG5cdGlmIChzdWJOb2RlcylcclxuICAgIHtcclxuICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAvLyBrbm93cyB0byBoYW5kbGUgZXJyb3JzLCB3ZSBkbyBpdCB1bmRlciB0cnkvY2F0Y2g7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvbnMgZ28gdG9cclxuICAgICAgICAvLyBlaXRoZXIgdGhlIHVuY2VzdG9yIG5vZGUgdGhhdCBrbm93cyB0byBoYW5kbGUgZXJyb3JzIG9yIHRvIHRoZSBNaW1ibCB0aWNrIGxvb3AuXHJcbiAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBWRVJCT1NFX05PREVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBoYW5kbGVFcnJvcigpIG9uIG5vZGUgJHt2bi5uYW1lfS4gRXJyb3JgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyOyB0aGVuIHdlIHJlbmRlciB0aGUgbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJ1dCB3ZSBkbyBpdCB3aXRob3V0IHRyeS9jYXRjaCB0aGlzIHRpbWU7IG90aGVyd2lzZSwgd2UgbWF5IGVuZFxyXG4gICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgdm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG4gICAgICAgICAgICAgICAgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcCwgc3ViTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0Ly8gaW5kaWNhdGUgdGhhdCB0aGUgbm9kZSB3YXMgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlIC0gdGhpcyB3aWxsIHByZXZlbnQgaXQgZnJvbSBcclxuXHQvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuXHR2bi5sYXN0VXBkYXRlVGljayA9IHNfY3VycmVudFRpY2s7XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkU3ViTm9kZXMoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gcmVuZGVyaW5nIGZvciBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQsIHJlcGxhY2VkIG9yIHVwZGF0ZWRcclxuXHRpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZOOiBWTiwgbmV3Vk46IFZOO1xyXG5cdFx0bGV0IHBhcmVudFZOID0gZGlzcC5vbGRWTjtcclxuXHRcdGZvciggbGV0IHN1Yk5vZGVEaXNwIG9mIGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRvbGRWTiA9IHN1Yk5vZGVEaXNwLm9sZFZOO1xyXG5cdFx0XHRuZXdWTiA9IHN1Yk5vZGVEaXNwLm5ld1ZOO1xyXG5cdFx0XHRpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pICYmIG9sZFZOLnByZXBhcmVVcGRhdGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgcHJlcGFyZVVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0c3ViTm9kZURpc3AudXBkYXRlRGlzcCA9IG9sZFZOLnByZXBhcmVVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdGlmIChzdWJOb2RlRGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdFx0cmVuZGVyVXBkYXRlZE5vZGUoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdHJlbmRlck5ld05vZGUoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlZE5vZGUoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGNvbW1pdFJlbW92ZWROb2RlKCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gZ2V0IHRoZSBub2RlIHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZyB1cGRhdGVkLiBUaGlzIGlzIGFsd2F5cyB0aGUgb2xkVk4gbWVtYmVyIG9mXHJcblx0Ly8gdGhlIGRpc3Agc3RydWN0dXJlLlxyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGl0IG1pZ2h0IGhhcHBlbiB0aGF0IHRoZSBub2RlIGJlaW5nIHVwZGF0ZWQgd2FzIGFscmVhZHkgZGVsZXRlZCBieSBpdHMgcGFyZW50LiBDaGVja1xyXG5cdC8vIGZvciB0aGlzIHNpdHVhdGlvbiBhbmQgZXhpdCBpZiB0aGlzIGlzIHRoZSBjYXNlXHJcblx0aWYgKCF2bi5hbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IHByZXZWTiA9IHRyYWNrQ3VycmVudFZOKHZuKTtcclxuXHJcblx0Ly8gZGV0ZXJtaW5lIHRoZSBhbmNob3Igbm9kZSB0byB1c2Ugd2hlbiBpbnNlcnRpbmcgbmV3IG9yIG1vdmluZyBleGlzdGluZyBzdWItbm9kZXMuIElmXHJcblx0Ly8gb3VyIG5vZGUgaGFzIGl0cyBvd24gRE4sIGl0IHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlczsgb3RoZXJ3aXNlLCBvdXIgbm9kZSdzXHJcblx0Ly8gYW5jaG9yIHdpbGwgYmUgdGhlIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2RlcyB0b28uXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblx0bGV0IGFuY2hvckROID0gb3duRE4gIT0gbnVsbCA/IG93bkROIDogdm4uYW5jaG9yRE47XHJcblxyXG5cdC8vIGlmIHRoaXMgdmlydHVhbCBub2RlIGRvZXNuJ3QgZGVmaW5lIGl0cyBvd24gRE9NIG5vZGUgKHRydWUgZm9yIGNvbXBvbmVudHMpLCB3ZSB3aWxsXHJcblx0Ly8gbmVlZCB0byBmaW5kIGEgRE9NIG5vZGUgYmVmb3JlIHdoaWNoIHRvIHN0YXJ0IGluc2VydGluZyBuZXcgbm9kZXMuIE51bGwgbWVhbnNcclxuXHQvLyBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgYW5jaG9yIG5vZGUncyBjaGlsZHJlbi5cclxuXHRsZXQgYmVmb3JlRE4gPSBvd25ETiAhPSBudWxsID8gbnVsbCA6IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2biwgYW5jaG9yRE4pO1xyXG5cclxuXHQvLyByZS1jcmVhdGUgb3VyIGN1cnJlbnQgbGlzdCBvZiBzdWItbm9kZXMgLSB3ZSB3aWxsIHBvcHVsYXRlIGl0IHdoaWxlIHVwZGF0aW5nIHRoZW1cclxuXHR2bi5zdWJOb2RlcyA9IGRpc3Auc3ViTm9kZURpc3BzID8gbmV3IEFycmF5PFZOPihkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBwZXJmb3JtIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZWl0aGVyIGdyb3VwcyBvciBpbmRpdmlkdWFsIG5vZGVzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVHcm91cHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIGRpc3Auc3ViTm9kZURpc3BzLCBkaXNwLnN1Yk5vZGVHcm91cHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRpc3Auc3ViTm9kZURpc3BzKVxyXG5cdHtcclxuXHRcdGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGFuY2hvckROLCBiZWZvcmVETik7XHJcblx0fVxyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB1cGRhdGVzIGFuZCBpbnNlcnRzIGJ5IGluZGl2aWR1YWwgbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeU5vZGVzKCBwYXJlbnRWTjogVk4sIGRpc3BzOiBWTkRpc3BbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBwZXJmb3JtIERPTSBvcGVyYXRpb25zIGFjY29yZGluZyB0byBzdWItbm9kZSBkaXNwb3NpdGlvbi4gV2UgbmVlZCB0byBkZWNpZGUgZm9yIGVhY2hcclxuXHQvLyBub2RlIHdoYXQgbm9kZSB0byB1c2UgdG8gaW5zZXJ0IG9yIG1vdmUgaXQgYmVmb3JlLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2ZcclxuXHQvLyBuZXcgbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIHdlIGRlY2lkZSB0aGUgdmFsdWUgb2YgdGhlIFwiYmVmb3JlRE5cIi5cclxuXHRsZXQgbmV4dFZOOiBWTiwgc3ZuOiBWTiwgZGlzcDogVk5EaXNwLCBuZXdWTjogVk4sIG9sZFZOOiBWTiwgZmlyc3RETjogRE47XHJcblx0Zm9yKCBsZXQgaSA9IGRpc3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGRpc3AgPSBkaXNwc1tpXTtcclxuXHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHQvLyBmb3IgdGhlIFVwZGF0ZSBvcGVyYXRpb24sIHRoZSBuZXcgbm9kZSBiZWNvbWVzIGEgc3ViLW5vZGU7IGZvciB0aGUgSW5zZXJ0IG9wZXJhdGlvblxyXG5cdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0c3ZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0cGFyZW50Vk4uc3ViTm9kZXNbaV0gPSBzdm47XHJcblxyXG5cdFx0aWYgKGRpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8vICNpZiBWRVJCT1NFX05PREVcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0b2xkVk4uY29tbWl0VXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZFJlbmRlcilcclxuXHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgYWxsIHRoZSBub2RlcyB1bmRlciB0aGlzIFZOIHNob3VsZCBiZSBtb3ZlZC5cclxuXHRcdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIG9sZFZOKTtcclxuXHRcdFx0aWYgKHN1Yk5vZGVETnMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhlIGxhc3Qgb2YgdGhlIERPTSBub2RlcyBhbHJlYWR5IHJlc2lkZXMgcmlnaHQgYmVmb3JlIHRoZSBuZWVkZWQgbm9kZVxyXG5cdFx0XHRcdGlmIChzdWJOb2RlRE5zW3N1Yk5vZGVETnMubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvciggbGV0IHN1Yk5vZGVETiBvZiBzdWJOb2RlRE5zKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhbmNob3JETi5pbnNlcnRCZWZvcmUoIHN1Yk5vZGVETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBvbGRWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNvbW1pdE5ld05vZGUoIG5ld1ZOLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0Zmlyc3RETiA9IGdldEZpcnN0RE4oIG5ld1ZOKTtcclxuXHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHR9XHJcblxyXG5cdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdGlmIChuZXh0Vk4pXHJcblx0XHR7XHJcblx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0Vk4gPSBzdm47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgZ3JvdXBzLiBXZSBnbyBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3Qgb2YgdXBkYXRlIGdyb3Vwc1xyXG4vLyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVzQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGNvbW1pdFVwZGF0ZSgpIG9uIG5vZGUgJHtvbGRWTi5uYW1lfWApO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIHN1Yi1ub2RlcyBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRjb21taXRVcGRhdGVkTm9kZSggZGlzcCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggb2xkVk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2bi5uZXh0ID0gc3ZuLnByZXYgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChuZXh0Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuZXh0Vk4ucHJldiA9IHN2bjtcclxuXHRcdFx0XHRzdm4ubmV4dCA9IG5leHRWTjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV4dFZOID0gc3ZuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IGFsbCBub2RlcyBpbiB0aGUgZ3JvdXAgaGF2ZSBiZWVuIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQsIHdlIGNhbiBkZXRlcm1pbmVcclxuXHRcdC8vIGZpcnN0IGFuZCBsYXN0IEROcyBmb3IgdGhlIGdyb3VwXHJcblx0XHRncm91cC5kZXRlcm1pbmVETnMoKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZ3JvdXAgaGFzIGF0IGxlYXN0IG9uZSBETiwgaXRzIGZpcnN0IEROIGJlY29tZXMgdGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXh0XHJcblx0XHQvLyBncm91cCBvZiBuZXcgbm9kZXMgKGlmIGFueSkgc2hvdWxkIGJlIGluc2VydGVkLlxyXG5cdFx0aWYgKGdyb3VwLmZpcnN0RE4pXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQXJyYW5nZSB0aGUgZ3JvdXBzIGluIG9yZGVyIGFzIGluIHRoZSBuZXcgc3ViLW5vZGUgbGlzdCwgbW92aW5nIHRoZW0gaWYgbmVjZXNzYXJ5LlxyXG5mdW5jdGlvbiBhcnJhbmdlR3JvdXBzKCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHQvLyBXZSBnbyBmcm9tIHRoZSBsYXN0IGdyb3VwIHRvIHRoZSBzZWNvbmQgZ3JvdXAgaW4gdGhlIGxpc3QgYmVjYXVzZSBhcyBzb29uIGFzIHdlIG1vdmVkIGFsbFxyXG5cdC8vIGdyb3VwcyBleGNlcHQgdGhlIGZpcnN0IG9uZSBpbnRvIHRoZWlyIHJpZ2h0IHBsYWNlcywgdGhlIGZpcnN0IGdyb3VwIHdpbGwgYmUgYXV0b21hdGljYWxseVxyXG5cdC8vIGluIHRoZSByaWdodCBwbGFjZS4gV2UgYWx3YXlzIGhhdmUgdHdvIGdyb3VwcyAoaSBhbmQgaS0xKSwgd2hpY2ggYWxsb3dzIHVzIHRvIHVuZGVyc3RhbmRcclxuXHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gc3dhcCB0aGVtLiBJZiB3ZSBkbyB3ZSBtb3ZlIHRoZSBzaG9ydGVyIGdyb3VwLlxyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcclxuXHR7XHJcblx0XHRsZXQgZ3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRsZXQgcHJldkdyb3VwID0gZ3JvdXBzW2ktMV07XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdyb3VwIHNob3VsZCBtb3ZlLiBXZSB0YWtlIHRoZSBsYXN0IG5vZGUgZnJvbSB0aGUgZ3JvdXBcclxuXHRcdC8vIGFuZCBjb21wYXJlIGl0cyBETidzIG5leHQgc2libGluZyB0byB0aGUgY3VycmVudCBcImJlZm9yZUROXCIuXHJcblx0XHRpZiAoZ3JvdXAubGFzdEROICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgIT09IGJlZm9yZUROKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGN1cnJlbnQgZ3JvdXAgbm93IHJlc2lkZXMgYmVmb3JlIHRoZSBwcmV2aW91cyBncm91cCwgdGhlbiB0aGF0IG1lYW5zXHJcblx0XHRcdFx0Ly8gdGhhdCB3ZSBhcmUgc3dhcHBpbmcgdHdvIGdyb3Vwcy4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbW92ZSB0aGUgc2hvcnRlciBvbmUuXHJcblx0XHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyA9PT0gcHJldkdyb3VwLmZpcnN0RE4gJiYgZ3JvdXAuY291bnQgPiBwcmV2R3JvdXAuY291bnQpXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBwcmV2R3JvdXAsIGFuY2hvckROLCBncm91cC5maXJzdEROKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRtb3ZlR3JvdXAoIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggZGlzcHM6IFZORGlzcFtdLCBncm91cDogVk5EaXNwR3JvdXAsIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Zm9yKCBsZXQgaiA9IGdyb3VwLmZpcnN0OyBqIDw9IGdyb3VwLmxhc3Q7IGorKylcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZVZOID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcHNbal0ub2xkVk4gOiBkaXNwc1tqXS5uZXdWTjtcclxuXHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBzdWJOb2RlVk4pO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHR7XHJcblx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOQWN0aW9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyBwb3NzaWJsZSBhY3Rpb25zIHRvIHBlcmZvcm0gZm9yIG5ldyBub2RlcyBkdXJpbmdcclxuICogcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbmNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5jbGFzcyBWTkRpc3BHcm91cFxyXG57XHJcblx0LyoqIHBhcmVudCBWTkRpc3AgdG8gd2hpY2ggdGhpcyBncm91cCBiZWxvbmdzICovXHJcblx0cHVibGljIHBhcmVudERpc3A6IFZORGlzcDtcclxuXHRcclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZXMgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGZpcnN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgZmlyc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBsYXN0IFZORGlzcCBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgbGFzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIG5vZGVzIGluIHRoZSBncm91cC4gKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3QgLSB0aGlzLmZpcnN0ICsgMSB9O1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBmaXJzdEROOiBETjtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgbGFzdEROOiBETjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcGFyZW50RGlzcDogVk5EaXNwLCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZmlyc3Q6IG51bWJlciwgbGFzdD86IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudERpc3AgPSBwYXJlbnREaXNwO1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLmZpcnN0ID0gZmlyc3Q7XHJcblx0XHR0aGlzLmxhc3QgPSBsYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIGZpcnN0IGFuZCBsYXN0IERPTSBub2RlcyBmb3IgdGhlIGdyb3VwLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgYWZ0ZXIgdGhlXHJcblx0ICogbm9kZXMgd2VyZSBwaGlzaWNhbGx5IHVwZGF0ZWQvaW5zZXJ0ZWQgYW5kIHdlIGNhbiBvYnRhaW4gdGhlaXIgRE9NIG5vZGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZXRlcm1pbmVETnMoKVxyXG5cdHtcclxuXHRcdGxldCBkaXNwOiBWTkRpc3A7XHJcblx0XHRsZXQgdm46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3Q7IGkgPD0gdGhpcy5sYXN0OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMuZmlyc3RETiA9IGdldEZpcnN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMuZmlyc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0OyBpID49IHRoaXMuZmlyc3Q7IGktLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5sYXN0RE4gPSBnZXRMYXN0RE4oIHZuKTtcclxuXHRcdFx0aWYgKHRoaXMubGFzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSWYgYSBub2RlIGhhcyBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2Ygc3ViLW5vZGVzLCB0aGVuIHdlIGJ1aWxkIGdyb3Vwcy4gVGhlIGlkZWEgaXMgdGhhdFxyXG4gKiBvdGhlcndpc2UsIHRoZSBvdmVyaGVhZCBvZiBidWlsZGluZyBncm91cHMgaXMgbm90IHdvcnRoIGl0LlxyXG4gKi9cclxuY29uc3QgTk9fR1JPVVBfVEhSRVNIT0xEID0gODtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3AgY2xhc3MgaXMgYSByZWN1cnNpdmUgc3RydWN0dXJlIHRoYXQgZGVzY3JpYmVzIGEgZGlzcG9zaXRpb24gZm9yIGEgbm9kZSBhbmQgaXRzXHJcbiAqIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuXHJcbiAqL1xyXG50eXBlIFZORGlzcCA9IFxyXG57XHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdG5ld1ZOOiBWTjtcclxuXHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGUgKi9cclxuXHRhY3Rpb24/OiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRvbGRWTj86IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0dXBkYXRlRGlzcD86IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0c3ViTm9kZURpc3BzPzogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXNUb1JlbW92ZT86IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0c3ViTm9kZUdyb3Vwcz86IFZORGlzcEdyb3VwW107XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcbiAqIG9yIHVwZGF0ZWQuIFRoZSByZXN1bHQgaXMgcmVtZW1iZXJlZCBhcyBhbiBhcnJheSBvZiBWTkRpc3Agb2JqZWN0cyBmb3IgZWFjaCBzdWItbm9kZSBhbmQgYXNcclxuICogYXJyYXkgb2Ygb2xkIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBkZWxldGVkLiBJbiBhZGRpdGlvbiwgdGhlIG5ldyBzdWItbm9kZXMgYXJlIGRpdmlkZWRcclxuICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcbiAqIFRoZSBncm91cHMgYXJlIGJ1aWx0IGluIGEgd2F5IHNvIHRoYXQgaWYgYSBub2RlIHNob3VsZCBiZSBtb3ZlZCwgaXRzIGVudGlyZSBncm91cCBpcyBtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZURpc3Bvc2l0aW9ucyggZGlzcDogVk5EaXNwLCBuZXdDaGFpbjogVk5bXSk6IHZvaWRcclxue1xyXG4gICAgbGV0IG5ld0xlbiA9IG5ld0NoYWluID8gbmV3Q2hhaW4ubGVuZ3RoIDogMDtcclxuICAgIGxldCBvbGRDaGFpbiA9IGRpc3Aub2xkVk4uc3ViTm9kZXM7XHJcbiAgICBsZXQgb2xkTGVuID0gb2xkQ2hhaW4gPyBvbGRDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuICAgIC8vIGlmIGVpdGhlciBvbGQgb3IgbmV3IG9yIGJvdGggY2hhaW5zIGFyZSBlbXB0eSwgd2UgZG8gc3BlY2lhbCB0aGluZ3NcclxuICAgIGlmIChuZXdMZW4gPT09IDAgJiYgb2xkTGVuID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGJvdGggY2hhaW5zIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuZXdMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbmV3IGNoYWluIGlzIGVtcHR5IC0gZGVsZXRlIGFsbCBvbGQgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBvbGRDaGFpbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIGNoYWluIGlzIGVtcHR5IC0gaW5zZXJ0IGFsbCBuZXcgbm9kZXNcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ld0NoYWluLm1hcCggbmV3Vk4gPT4geyByZXR1cm4geyBuZXdWTiwgYWN0aW9uOiBWTkRpc3BBY3Rpb24uSW5zZXJ0fSB9KTtcclxuICAgICAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBWTkRpc3BBY3Rpb24uSW5zZXJ0LCAwLCBuZXdMZW4gLSAxKV07XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hldGhlciByZWN5Y2xpbmcgb2Ygbm9uLW1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMgYnkgbm9uLW1hdGNoaW5nIG5ld1xyXG4gICAgLy8ga2V5ZWQgc3ViLW5vZGVzIGlzIGFsbG93ZWQuIElmIHVwZGF0ZSBzdHJhdGVneSBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG5vZGUsIHRoZVxyXG4gICAgLy8gcmVjeWNsaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBsZXQgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHVwZGF0ZVN0cmF0ZWd5ID0gZGlzcC5vbGRWTiA/IGRpc3Aub2xkVk4udXBkYXRlU3RyYXRlZ3kgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodXBkYXRlU3RyYXRlZ3kgJiYgdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nO1xyXG5cclxuICAgIC8vIHByb2Nlc3MgdGhlIHNwZWNpYWwgY2FzZSB3aXRoIGEgc2luZ2xlIHN1Yi1ub2RlIGluIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGp1c3RcclxuICAgIC8vIHRvIGF2b2lkIGNyZWF0aW5nIHRlbXBvcmFyeSBzdHJ1Y3R1cmVzXHJcbiAgICBpZiAobmV3TGVuID09PSAxICYmIG9sZExlbiA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IFtjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3AsIG5ld0NoYWluWzBdLCBvbGRDaGFpblswXSwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgYXJlIGhlcmUgaWYgZWl0aGVyIG9sZCBhbmQgbmV3IGNoYWlucyBjb250YWluIG1vcmUgdGhhbiBvbmUgbm9kZSBhbmQgd2UgbmVlZCB0b1xyXG4gICAgLy8gcmVjb25jaWxlIHRoZSBjaGFpbnMuIEZpcnN0IGdvIG92ZXIgdGhlIG9sZCBub2RlcyBhbmQgYnVpbGQgYSBtYXAgb2Yga2V5ZWQgb25lcyBhbmQgYVxyXG4gICAgLy8gbGlzdCBvZiBub24ta2V5ZWQgb25lcy4gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbm9kZSB3aXRoIHRoZSBzYW1lIGtleSwgdGhlIGZpcnN0IG9uZVxyXG4gICAgLy8gZ29lcyB0byB0aGUgbWFwIGFuZCB0aGUgcmVzdCB0byB0aGUgdW5sZXllZCBsaXN0LlxyXG4gICAgbGV0IG9sZEtleWVkTWFwID0gbmV3IE1hcDxhbnksVk4+KCk7XHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3Q6IFZOW10gPSBbXTtcclxuICAgIGxldCBrZXk6IGFueTtcclxuICAgIGZvciggbGV0IG9sZFZOIG9mIG9sZENoYWluKVxyXG4gICAge1xyXG4gICAgICAgIGtleSA9IG9sZFZOLmtleTtcclxuICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYgIW9sZEtleWVkTWFwLmhhcygga2V5KSlcclxuICAgICAgICAgICAgb2xkS2V5ZWRNYXAuc2V0KCBrZXksIG9sZFZOKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9sZFVua2V5ZWRMaXN0LnB1c2goIG9sZFZOKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1lYmVyIHRoZSBsZW5ndGggb2YgdGhlIHVua2V5ZWQgbGlzdDtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdExlbmd0aCA9IG9sZFVua2V5ZWRMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGFycmF5IGZvciBWTkRpc3Agb2JqZWN0cyBmb3IgbmV3IG5vZGVzXHJcbiAgICBkaXNwLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3TGVuKTtcclxuICAgIFxyXG4gICAgLy8gbG9vcCBvdmVyIG5ldyBub2Rlc1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0SW5kZXggPSAwO1xyXG4gICAgbmV3Q2hhaW4uZm9yRWFjaCggKG5ld1ZOLCBpbmRleCkgPT5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVk46IFZOID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGxvb2sgdXAgdGhlIG9sZCBub2RlIGJ5IHRoZSBuZXcgbm9kZSdzIGtleSBpZiBleGlzdHNcclxuICAgICAgICBrZXkgPSBuZXdWTi5rZXk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2xkVk4gPSBvbGRLZXllZE1hcC5nZXQoIGtleSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIHRoZSBvbGQgbm9kZSBieSB0aGUga2V5LCByZW1vdmUgaXQgZnJvbSB0aGUgbWFwOyBhZnRlciB0aGVcclxuICAgICAgICAgICAgLy8gcmVjb25jaWxpYXRpb24sIGFsbCBvbGQgbm9kZXMgcmVtYWluaW5nIGluIHRoaXMgbWFwIHdpbGwgYmUgbWFya2VkIGZvciByZW1vdmFsLlxyXG4gICAgICAgICAgICBpZiAob2xkVk4pXHJcbiAgICAgICAgICAgICAgICBvbGRLZXllZE1hcC5kZWxldGUoIGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBpbiB0aGUgdW5rZXllZCBsaXN0IHVzZSB0aGUgbmV4dCBvbmVcclxuICAgICAgICBpZiAoIW9sZFZOICYmIG9sZFVua2V5ZWRMaXN0SW5kZXggIT0gb2xkVW5rZXllZExpc3RMZW5ndGgpXHJcbiAgICAgICAgICAgIG9sZFZOID0gb2xkVW5rZXllZExpc3Rbb2xkVW5rZXllZExpc3RJbmRleCsrXTtcclxuXHJcbiAgICAgICAgZGlzcC5zdWJOb2RlRGlzcHNbaW5kZXhdID0gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwLCBuZXdWTiwgb2xkVk4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG9sZCBub2RlcyByZW1hbmluZyBpbiB0aGUga2V5ZWQgbWFwIGFuZCBpbiB0aGUgdW5rZXllZCBsaXN0IHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgaWYgKG9sZEtleWVkTWFwLnNpemUgPiAwIHx8IG9sZFVua2V5ZWRMaXN0SW5kZXggPCBvbGRVbmtleWVkTGlzdExlbmd0aClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlID0gW107XHJcblxyXG4gICAgICAgIG9sZEtleWVkTWFwLmZvckVhY2goIG9sZFZOID0+IGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTikpO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSBvbGRVbmtleWVkTGlzdEluZGV4OyBpIDwgb2xkVW5rZXllZExpc3RMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFVua2V5ZWRMaXN0W2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKVxyXG4gICAgICAgIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ViRGlzcEZvck5vZGVzKCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk4/OiBWTiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc/OiBib29sZWFuKTogVk5EaXNwXHJcbntcclxuICAgIGxldCBzdWJEaXNwOiBWTkRpc3AgPSB7IG5ld1ZOIH07XHJcbiAgICBpZiAoIW9sZFZOKVxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuICAgIGVsc2UgaWYgKG9sZFZOID09PSBuZXdWTiB8fFxyXG4gICAgICAgICgoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgfHwgbmV3Vk4ua2V5ID09PSBvbGRWTi5rZXkpICYmIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbiBiZSB1cGRhdGVkIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgbmV3IG5vZGVcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcbiAgICAgICAgc3ViRGlzcC5vbGRWTiA9IG9sZFZOO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG9sZCBub2RlIGNhbm5vdCBiZSB1cGRhdGVkLCBzbyB0aGUgbmV3IG5vZGUgd2lsbCBiZSBpbnNlcnRlZCBhbmQgdGhlIG9sZCBub2RlIHdpbGxcclxuICAgICAgICAvLyBiZSByZW1vdmVkXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG4gICAgICAgIGlmICghZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdWJEaXNwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGcm9tIGEgZmxhdCBsaXN0IG9mIG5ldyBzdWItbm9kZXMgYnVpbGRzIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSBlaXRoZXJcclxuICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3ViTm9kZUdyb3VwcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBvbmx5IGlmIHdlIGhhdmUgc29tZSBudW1iZXIgb2Ygc3ViLW5vZGUgZGlzcG9zaXRpb25zXHJcbiAgICBsZXQgY291bnQgPSBkaXNwLnN1Yk5vZGVEaXNwcy5sZW5ndGg7XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHByZS1kZXRlcm1pbmVkIHRocmVzaG9sZFxyXG4gICAgICAgIGlmIChjb3VudCA8PSBOT19HUk9VUF9USFJFU0hPTEQgfHwgY291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZ3JvdXBzIGFuZCBjcmVhdGUgdGhlIGZpcnN0IGdyb3VwIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IG5vZGVcclxuICAgIGxldCBncm91cDogVk5EaXNwR3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGRpc3Auc3ViTm9kZURpc3BzWzBdLmFjdGlvbiwgMCk7XHJcbiAgICBkaXNwLnN1Yk5vZGVHcm91cHMgPSBbZ3JvdXBdO1xyXG5cclxuICAgIC8vIGxvb3Agb3ZlciBzdWItbm9kZXMgYW5kIG9uIGVhY2ggaXRlcmF0aW9uIGRlY2lkZSB3aGV0aGVyIHdlIG5lZWQgdG8gb3BlbiBhIG5ldyBncm91cFxyXG4gICAgLy8gb3IgcHV0IHRoZSBjdXJyZW50IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3IgY2xvc2UgdGhlIGV4aXN0aW5nIGdyb3VwIGFuZCBvcGVuXHJcbiAgICAvLyBhIG5ldyBvbmUuXHJcbiAgICBsZXQgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcbiAgICBsZXQgc3ViRGlzcDogVk5EaXNwO1xyXG4gICAgZm9yKCBsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHN1YkRpc3AgPSBkaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuICAgICAgICBhY3Rpb24gPSBzdWJEaXNwLmFjdGlvbjtcclxuICAgICAgICBpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgZ3JvdXAgd2l0aCB0aGUgcHJldmlvdXMgaW5kZXguIERlY3JlbWVudCB0aGUgaXRlcmF0aW5nIGluZGV4IHNvIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuICAgICAgICAgICAgLy8gdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlIGRpc3AuYWN0aW9uID09PSBncm91cEFjdGlvbi5cclxuICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgYWN0aW9uLCBpKTtcclxuICAgICAgICAgICAgZGlzcC5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYW4gXCJ1cGRhdGVcIiBub2RlIGlzIG91dC1vZi1vcmRlciBhbmQgc2hvdWxkIGNsb3NlIHRoZSBjdXJyZW50IGdyb3VwIGlmXHJcbiAgICAgICAgICAgIC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG4gICAgICAgICAgICAvLyBUaGUgbGFzdCBub2RlIHdpbGwgY2xvc2UgdGhlIGxhc3QgZ3JvdXAgYWZ0ZXIgdGhlIGxvb3AuXHJcbiAgICAgICAgICAgIGlmIChkaXNwLnN1Yk5vZGVEaXNwc1tpLTFdLm9sZFZOICE9PSBzdWJEaXNwLm9sZFZOLnByZXYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAubGFzdCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIGFjdGlvbiwgaSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuICAgICAgICAvLyBuZXh0IG5vZGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbGFzdCBncm91cFxyXG4gICAgaWYgKGdyb3VwICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZ3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVwZGF0ZSBvZiB0aGUgZ2l2ZW4gb2xkIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbmV3IG5vZGUgaXMgcG9zc2libGUuIFVwZGF0ZVxyXG4gKiBpcyBwb3NzaWJsZSBpZiB0aGUgdHlwZXMgb2Ygbm9kZXMgYXJlIHRoZSBzYW1lIGFuZCBlaXRoZXIgdGhlIGlzVXBkYXRlUG9zc2libGUgbWV0aG9kIGlzIG5vdFxyXG4gKiBkZWZpbmVkIG9uIHRoZSBvbGQgbm9kZSBvciBpdCByZXR1cm5zIHRydWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VwZGF0ZVBvc3NpYmxlKCBvbGRWTjogVk4sIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiAob2xkVk4udHlwZSA9PT0gbmV3Vk4udHlwZSAmJlxyXG5cdFx0XHQob2xkVk4uaXNVcGRhdGVQb3NzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFZOLmlzVXBkYXRlUG9zc2libGUoIG5ld1ZOKSkpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldEZpcnN0RE4oIHZuOiBWTik6IEROXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRyZXR1cm4gdm4ub3duRE47XHJcblx0ZWxzZSBpZiAoIXZuLnN1Yk5vZGVzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3QgdW50aWwgYSB2YWxpZCBub2RlXHJcblx0Ly8gaXMgcmV0dXJuZWRcclxuXHRsZXQgZG47XHJcblx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdGRuID0gZ2V0Rmlyc3RETiggc3ZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgbGFzdCBET00gbm9kZSBkZWZpbmVkIGJ5IGVpdGhlciB0aGlzIHZpcnR1YWwgbm9kZSBvciBvbmUgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuLy8gVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgb24gdGhlIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZnVuY3Rpb24gZ2V0SW1tZWRpYXRlRE5zKCB2bjogVk4pOiBETltdXHJcbntcclxuXHRsZXQgYXJyOiBETltdID0gW107XHJcblx0Y29sbGVjdEltbWVkaWF0ZUROcyggdm4sIGFycik7XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb2xsZWN0cyBhbGwgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZSAodGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZSkgaW50byB0aGUgZ2l2ZW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuOiBWTiwgYXJyOiBETltdKTogdm9pZFxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0YXJyLnB1c2goIHZuLm93bkROKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBmaXJzdCB0byBsYXN0XHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbGxlY3RJbW1lZGlhdGVETnMoIHN2biwgYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRmluZHMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSB0cmVlIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBjb21lcyBhZnRlciBvdXIgbm9kZSB0aGF0IGlzIGFcclxuLy8gY2hpbGQgb2Ygb3VyIG93biBhbmNob3IgZWxlbWVudC4gV2UgdXNlIGl0IGFzIGEgbm9kZSBiZWZvcmUgd2hpY2ggdG8gaW5zZXJ0L21vdmUgbm9kZXMgb2ZcclxuLy8gb3VyIHN1Yi1ub2RlcyBkdXJpbmcgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MuIFRoZSBhbGdvcml0aG0gZmlyc3QgZ29lcyB0byB0aGUgbmV4dFxyXG4vLyBzaWJsaW5ncyBvZiBvdXIgbm9kZSBhbmQgdGhlbiB0byB0aGUgbmV4dCBzaWJsaW5ncyBvZiBvdXIgcGFyZW50IG5vZGUgcmVjdXJzaXZlbHkuIEl0IHN0b3BzXHJcbi8vIHdoZW4gd2UgZWl0aGVyIGZpbmQgYSBET00gbm9kZSAodGhlbiBpdCBpcyByZXR1cm5lZCkgb3IgZmluZCBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudFxyXG4vLyAodGhlbiBudWxsIGlzIHJldHVybmVkKS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2VzcyBmb3Igb3VyXHJcbi8vIHN1Yi1ub2RlcyBzdGFydHMgYW5kLCB0aGVyZWZvcmUsIGl0IG9ubHkgdHJhdmVyc2VzIG1vdW50ZWQgbm9kZXMuXHJcbmZ1bmN0aW9uIGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bjogVk4sIGFuY2hvckROOiBETik6IEROXHJcbntcclxuXHQvLyBjaGVjayBpZiB3ZSBoYXZlIHNpYmxpbmcgRE9NIG5vZGVzIGFmdGVyIG91ciBsYXN0IHN1Yi1ub2RlIC0gdGhhdCBtaWdodCBiZSBlbGVtZW50c1xyXG5cdC8vIG5vdCBjb250cm9sbGVkIGJ5IG91ciBjb21wb25lbnQuXHJcblx0aWYgKHZuLnN1Yk5vZGVzICYmIHZuLnN1Yk5vZGVzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0bGV0IGRuID0gZ2V0TGFzdEROKCB2bi5zdWJOb2Rlc1t2bi5zdWJOb2Rlcy5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAoZG4pXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXh0U2libGluZyA9IGRuLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRpZiAobmV4dFNpYmxpbmcgIT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuIG5leHRTaWJsaW5nO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIG91ciBuZXh0IHNpYmxpbmdzXHJcblx0Zm9yKCBsZXQgbnZuID0gdm4ubmV4dDsgbnZuICE9PSB1bmRlZmluZWQ7IG52biA9IG52bi5uZXh0KVxyXG5cdHtcclxuXHRcdGlmICghbnZuLmFuY2hvckROKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLyBub3RlIHRoYXQgZ2V0TGFzdEROIGNhbGwgdHJhdmVyc2VzIHRoZSBoaWVyYXJjaHkgb2Ygbm9kZXMuIE5vdGUgYWxzbyB0aGF0IGl0XHJcblx0XHQvLyBjYW5ub3QgZmluZCBhIG5vZGUgdW5kZXIgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnQgYmVjYXVzZSB0aGUgZmlyc3QgZGlmZmVyZW50XHJcblx0XHQvLyBhbmNob3IgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGFzIGEgd2FudGVkIG5vZGUuXHJcblx0XHRjb25zdCBkbiA9IGdldExhc3RETiggbnZuKTtcclxuXHRcdGlmIChkbilcclxuXHRcdFx0cmV0dXJuIGRuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVjdXJzZSB0byBvdXIgcGFyZW50IGlmIGV4aXN0c1xyXG5cdHJldHVybiB2bi5wYXJlbnQgJiYgdm4ucGFyZW50LmFuY2hvckROID09PSBhbmNob3JETiA/IGdldE5leHRETlVuZGVyU2FtZUFuY2hvckROKCB2bi5wYXJlbnQsIGFuY2hvckROKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyBhcnJheSBvZiBub2RlIG5hbWVzIHN0YXJ0aW5nIHdpdGggdGhpcyBub2RlIGFuZCB1cCB1bnRpbCB0aGUgdG9wLWxldmVsIG5vZGUuXHJcbmZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZSArIChudm4uY3JlYXRvciAmJiBudm4uY3JlYXRvci52biA/IGAgKGNyZWF0ZWQgYnkgJHtudm4uY3JlYXRvci52bi5uYW1lfSlgIDogXCJcIik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGF0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGVpdGhlciBhIHNpbmdsZSB2aXJ0dWFsIG5vZGUgb3IgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LlxyXG4vLyBGb3IgYWxsIHR5cGVzIG9mIGNvbnRlbnRzIG90aGVyIHRoYW4gYW4gYXJyYXksIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIHNpbmdsZSBWTi4gSWYgdGhlIGlucHV0XHJcbi8vIGNvbnRlbnQgaXMgYW4gYXJyYXksIHRoZW4gYSBWTiBpcyBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBhcnJheSBlbGVtZW50cy4gU2luY2UgYXJyYXkgZWxlbWVudHNcclxuLy8gbWlnaHQgYWxzbyBiZSBhcnJheXMsIHRoZSBwcm9jZXNzIGlzIHJlY3Vyc2l2ZS5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PSBudWxsIHx8IGNvbnRlbnQgPT09IGZhbHNlKVxyXG5cdHtcclxuXHRcdC8vIHRoZSBjb21wYXJpc29uIGFib3ZlIGNvdmVycyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBWTkJhc2UpXHJcblx0XHRyZXR1cm4gY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29udGVudC5sZW5ndGggPiAwID8gbmV3IFRleHRWTiggY29udGVudCkgOiBudWxsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudC5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgY29tcG9uZW50ICh0aGlzIGNhbiBvbmx5IGJlIGFuIEluc3RhbmNlIGNvbXBvbmVudCkgaXMgYWxyZWFkeSBhdHRhY2hlZCB0byBWTixcclxuXHRcdC8vIHJldHVybiB0aGlzIGV4aXN0aW5nIFZOOyBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG9uZS5cclxuXHRcdHJldHVybiAoY29udGVudCBhcyBJQ29tcG9uZW50KS52blxyXG5cdFx0XHRcdFx0XHQ/IChjb250ZW50IGFzIElDb21wb25lbnQpLnZuIGFzIFZOXHJcblx0XHRcdFx0XHRcdDogbmV3IEluZGVwZW5kZW50Q29tcFZOKCBjb250ZW50IGFzIElDb21wb25lbnQpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBjb250ZW50KSlcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY29udGVudCk7XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlUHJveHlWTiggeyBwcm9taXNlOiBjb250ZW50fSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBjb250ZW50KVxyXG5cdFx0cmV0dXJuIHZuIHx8IG5ldyBGdW5jUHJveHlWTiggeyBmdW5jOiBjb250ZW50LCB0aGlzQXJnOiBzX2N1cnJlbnRDbGFzc0NvbXB9KTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIG5ldyBUZXh0Vk4oIGNvbnRlbnQudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuIENhbGxzIHRoZSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50IGFuZFxyXG4vLyBpZiBpdCByZXR1cm5zIGEgc2luZ2xlIG5vZGUsIHdyYXBzIGl0IGluIGFuIGFycmF5LlxyXG5mdW5jdGlvbiBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIGNvbnRlbnQ6IGFueSk6IFZOW11cclxue1xyXG5cdGxldCBub2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGNvbnRlbnQpO1xyXG5cdHJldHVybiAhbm9kZXMgPyBudWxsIDogQXJyYXkuaXNBcnJheShub2RlcykgPyAobm9kZXMubGVuZ3RoID09PSAwID8gbnVsbCA6IG5vZGVzKSA6IFtub2Rlc107XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBGcmFnbWVudClcclxuXHRcdHJldHVybiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggY2hpbGRyZW4pO1xyXG5cdGVsc2UgaWYgKHRhZyA9PT0gRnVuY1Byb3h5KVxyXG5cdHtcclxuXHRcdGlmICghcHJvcHMgfHwgIXByb3BzLmZ1bmMpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYSBub2RlIGxpbmtlZCB0byB0aGlzIGZ1bmN0aW9uLiBJZiB5ZXMgcmV0dXJuIGl0O1xyXG5cdFx0Ly8gb3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgbm9kZS5cclxuXHRcdGxldCBmdW5jUHJveHlQcm9wcyA9IHByb3BzIGFzIEZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodGFnID09PSBQcm9taXNlUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMucHJvbWlzZSlcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCBwcm9wcywgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gY2hpbGRyZW4gcGFyYW1ldGVyIGlzIGFsd2F5cyBhbiBhcnJheS4gQSBjb21wb25lbnQgY2FuIHNwZWNpZnkgdGhhdCBpdHMgY2hpbGRyZW4gYXJlXHJcblx0XHQvLyBhbiBhcnJheSBvZiBhIGNlcnRhaW4gdHlwZSwgZS5nLiBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50PHt9LFRbXT4uIEluIHRoaXMgY2FzZVxyXG5cdFx0Ly8gdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgY2hpbGRyZW4gaW4gSlNYIHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGhlIFR5cGVTY3JpcHRcclxuXHRcdC8vIGNvbXBpbGVyOlxyXG5cdFx0Ly9cdDEpIDxBPnt0MX17dDJ9PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFt0MSwgdDJdIChhcyBleHBlY3RlZCBieSBBKS5cclxuXHRcdC8vXHQyKSA8QT57W3QxLCB0Ml19PC9BPi4gSW4gdGhpcyBjYXNlLCBjaGlsZHJlbiB3aWxsIGJlIFtbdDEsdDJdXSAoYXMgTk9UIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdFx0VGhpcyBsb29rcyBsaWtlIGEgVHlwZVNjcmlwdCBidWcuXHJcblx0XHQvLyBUaGUgcmVhbENoaWxkcmVuIHZhcmlhYmxlIGFjY29tbW9kYXRlcyBib3RoIGNhc2VzLlxyXG5cdFx0bGV0IHJlYWxDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KCBjaGlsZHJlblswXSkgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xyXG5cdFx0aWYgKHR5cGVvZiB0YWcucHJvdG90eXBlLnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXR1cm4gbmV3IE1hbmFnZWRDb21wVk4oIHRhZyBhcyBJQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIEZ1bmNDb21wVHlwZSwgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0fVxyXG5cclxuXHQvLy8gI2lmIERFQlVHXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcblx0Ly8vICNlbmRpZlxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUVycm9ySGFuZGxpbmdTZXJ2aWNlLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGFuY2hvckROOiBETilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuUm9vdDtcclxuXHRcdHRoaXMuYW5jaG9yRE4gPSBhbmNob3JETjtcclxuXHRcdHRoaXMuZGVwdGggPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuUm9vdDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIlJvb3RcIjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUgYW5kIHRyaWdnZXJzIHVwZGF0ZS5cclxuXHRwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55LCBzeW5jOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIGNoYWluIG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lcnJvciB8fCB0aGlzLndhaXRpbmcgPyBudWxsIDogdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIG9yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGVyciBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9taXNlID0gZXJyIGFzIFByb21pc2U8YW55PjtcclxuXHRcdFx0dGhpcy50aHJvd25Qcm9taXNlcy5hZGQoIHByb21pc2UpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oICgpID0+IHsgdGhpcy5vblByb21pc2VGdWxmaWxsZWQoIHByb21pc2UpOyB9KTtcclxuXHRcdFx0cHJvbWlzZS5jYXRjaCggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHR0aGlzLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgVW5oYW5kbGVkIGVycm9yIGluIGNvbXBvbmVudFxcbiR7cGF0aC5qb2luKFwiXFxuXCIpfVxcbmAsIGVycik7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGEgcHJvbWlzZSB0aHJvd24gYXMgZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc3ltUm9vdE1vdW50UG9pbnQgPSBTeW1ib2woXCJzeW1Sb290TW91bnRQb2ludFwiKTtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcbiAgICAgICAgKHJlYWxBbmNob3JETiBhcyBhbnkpW3N5bVJvb3RNb3VudFBvaW50XSA9IHJvb3RWTjtcclxuICAgICAgICByb290Vk4ud2lsbE1vdW50KCk7XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3N5bVJvb3RNb3VudFBvaW50XTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gcmVtb3ZlIG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0ZGVsZXRlIHJlYWxBbmNob3JETltzeW1Sb290TW91bnRQb2ludF07XHJcblxyXG5cdC8vIGRlc3RydWN0IHRoZSByb290IG5vZGUgKGFzeW5jaHJvbm91c2x5KVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBudWxsLCBmYWxzZSk7XHJcblx0cm9vdFZOLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCAoKSA9PiByb290Vk4ud2lsbFVubW91bnQoKSApO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVNjaGVkdWxlciwgcmVnaXN0ZXJTY2hlZHVsZXIsIHNldERlZmF1bHRTY2hlZHVsZXJUeXBlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtzY2hlZHVsZUZ1bmNDYWxsfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2NoZWR1bGVyIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBzY2hlZHVsaW5nIHdyaXRpbmcgc3R5bGUtcmVsYXRlZCBpbmZvcm1hdGlubyB0b1xyXG4gKiB0aGUgRE9NIHVzaW5nIHRoZSBNaW1ibCBzY2hlZHVsaW5nIGZ1bmN0aW9uYWxpdHlcclxuICovXHJcbmNsYXNzIFN0eWxlU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBDYWxsYmFjayB0byBjYWxsIHRvIHdyaXRlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZG9ET01VcGRhdGUgPSBkb0RPTVVwZGF0ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWRcclxuICAgIHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIHRoaXMub25VcGRhdGUsIGZhbHNlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHRpbWVvdXQgZXhwaXJlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmRvRE9NVXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyBzdHlsZSBzY2hlZHVsZXIgdXNlZCBieSBNaW1ibCB0byBzY2hlZHVsZSB3cml0aW5nIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2luaXRTdHlsZVNjaGVkdWxlcigpOiBudW1iZXJcclxue1xyXG4gICAgbGV0IHNjaGVkdWxlclR5cGUgPSByZWdpc3RlclNjaGVkdWxlciggbmV3IFN0eWxlU2NoZWR1bGVyKCkpO1xyXG4gICAgc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJVGV4dFZOLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIEROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIElUZXh0Vk5cclxue1xyXG5cdC8vIFRleHQgZm9yIGEgc2ltcGxlIHRleHQgbm9kZS5cclxuXHRwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuXHQvLyBUZXh0IERPTSBub2RlXHJcblx0cHVibGljIHRleHROb2RlOiBUZXh0O1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCB0ZXh0OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggdGhpcy50ZXh0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIHVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIHRleHQgbm9kZXMgZG9uJ3QgaGF2ZSBzdWItbm9kZXNcclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuZ2V0U3RvY2tWYWx1ZSggdGhpcy50ZXh0ICE9PSAobmV3Vk4gYXMgVGV4dFZOKS50ZXh0LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGV4dE5vZGUubm9kZVZhbHVlID0gdGhpcy50ZXh0ID0gKG5ld1ZOIGFzIFRleHRWTikudGV4dDtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5UZXh0LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJVk5vZGUsIElDb21wb25lbnQsIFVwZGF0ZVN0cmF0ZWd5fSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7U3RhdHNDYXRlZ29yeX0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHJlYWRvbmx5IHN0YXRzQ2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvKiogTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuICovXHJcblx0ZGVwdGg/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC4gKi9cclxuXHRhbmNob3JETj86IEROO1xyXG5cclxuXHQvKipcclxuXHQgKiBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5IGNhbiBiZSBvZlxyXG5cdCAqIGFueSB0eXBlLlxyXG5cdCAqL1xyXG5cdGtleT86IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBub2RlIHNob3VsZCByZS1yZW5kZXIgZHVyaW5nIHVwZGF0ZSBldmVuIGl0IGlzIHRoZSBzYW1lXHJcblx0ICogcGh5c2ljYWwgbm9kZSBpbnN0YW5jZS4gVGhpcyBpcyBuZWVkZWQgZm9yIG5vZGVzIHRoYXQgc2VydmUgYXMgYSBwcm94eSB0byBhIHJlbmRlcmluZ1xyXG5cdCAqIGZ1bmN0aW9uIGFuZCB0aGF0IGZ1bmN0aW9uIG11c3QgYmUgaW52b2tlZCBldmVuIG5vbmUgb2YgdGhlIG5vZGUgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQuXHJcblx0ICovXHJcblx0cmVuZGVyT25VcGRhdGU/OiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyBub2RlJ3MgcGFyZW50LiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuICovXHJcblx0cGFyZW50PzogVk47XHJcblxyXG5cdC8vIENvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhpcyBub2RlIGFzIHBhcnQgb2YgaXRzIHJlbmRlcmluZyB0cmVlLlxyXG5cdGNyZWF0b3I/OiBJQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRvd25ETj86IEROO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0dXBkYXRlUmVxdWVzdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBcIlRpY2sgbnVtYmVyXCIgZHVyaW5nIHdoaWNoIHRoZSBub2RlIHdhcyBsYXN0IHVwZGF0ZWQuIElmIHRoaXMgbm9kZSdzIHRpY2sgbnVtYmVyIGVxdWFsc1xyXG5cdC8vIHRoZSBjdXJyZW50IHRpY2sgbnVtYmVyIG1haW50YWluZWQgYnkgdGhlIHJvb3Qgbm9kZSwgdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgd2FzXHJcblx0Ly8gYWxyZWFkeSB1cGRhdGVkIGluIHRoaXMgdXBkYXRlIGN5Y2xlLiBUaGlzIGhlbHBzIHByZXZlbnQgZG91YmxlLXJlbmRlcmluZyBvZiBhXHJcblx0Ly8gY29tcG9uZW50IGlmIGJvdGggdGhlIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmUgdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxuXHRsYXN0VXBkYXRlVGljazogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdGluaXQoIHBhcmVudDogVk4sIGNyZWF0b3I6IElDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWRcclxuXHQvLyBvbmx5IG9uIG5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRtb3VudD8oKTogRE47XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGRpZE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgaW50ZXJuYWwgc3RydWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50XHJcblx0Ly8gb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIEluaXRpYWxpemVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlXHJcblx0Ly8gbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhcnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgaW1wbGVtZW50ZWQgb25seSBvbiBub2Rlc1xyXG5cdC8vIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGVzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSByZWxlYXNlIHRoZSBpbnRlcm5hbGx5IGhlbGQgcmVmZXJlbmNlXHJcblx0Ly8gdG8gdGhlIERPTSBub2RlIC0gdGhlIGFjdHVhbCByZW1vdmFsIG9mIHRoZSBub2RlIGZyb20gRE9NIGlzIGRvbmUgYnkgdGhlIGluZnJhc3RydWN0dXJlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR1bm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gSWYgdGhpcyBtZXRob2QgaXNcclxuXHQvLyBub3QgaW1wbGVtZW50ZWQgdGhlIHVwZGF0ZSBpcyBjb25zaWRlcmVkIHBvc3NpYmxlIC0gZS5nLiBmb3IgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aXNVcGRhdGVQb3NzaWJsZT8oIG5ld1ZOOiBWTik6IGJvb2xlYW47XHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHJlcGFyZVVwZGF0ZT8oIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0Y29tbWl0VXBkYXRlPyggbmV3Vk46IFZOKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgdGhlIG5vZGVcclxuXHQvLyBkb2Vzbid0IHN1cHBvcnQgZXJyb3IgaGFuZGxpbmcuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHJlYWRvbmx5IHN1cHBvcnRzRXJyb3JIYW5kbGluZz86IGJvb2xlYW47XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBUaGUgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGlzIG1ldGhvZCByZXR1cm5zLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlVwZGF0ZURpc3AgdHlwZSBkZXNjcmliZXMgd2hldGhlciBjZXJ0YWluIGFjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZVxyXG4vLyBkdXJpbmcgdXBkYXRlLiBUaGlzIG9iamVjdCBpcyByZXR1cm5lZCBmcm9tIHRoZSBub2RlJ3MgcHJlcGFyZVVwZGF0ZSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVk5VcGRhdGVEaXNwXHJcbntcclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBub2RlIGhhcyBjaGFuZ2VzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIERPTSB0cmVlLiBJZiB0aGlzXHJcblx0Ly8gZmxhZyBpcyB0cnVlLCB0aGVuIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHdpbGwgYmUgY2xsZWQgb24gdGhlIG5vZGUgZHVyaW5nIHRoZSBDb21taXRcclxuXHQvLyBwaGFzZS5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkQ29tbWl0OiBib29sZWFuO1xyXG5cclxuXHQvLyBGYWxnIGluZGljYXRuZyB3aGV0aGVyIHRoZSBzdWItbm9kZXMgc2hvdWxkIGJlIHVwZGF0ZWQuIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGVuIHRoZVxyXG5cdC8vIG5vZGUncyByZW5kZXIgbWV0aG9kIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRSZW5kZXI6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHR0aGlzLnNob3VsZENvbW1pdCA9IHNob3VsZENvbW1pdDtcclxuXHRcdHRoaXMuc2hvdWxkUmVuZGVyID0gc2hvdWxkUmVuZGVyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBEb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggdHJ1ZSwgZmFsc2UpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldFN0b2NrVmFsdWUoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHJldHVybiBzaG91bGRDb21taXRcclxuXHRcdFx0PyBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuRG9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdE5vUmVuZGVyXHJcblx0XHRcdDogc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuTm9Db21taXROb1JlbmRlcjtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBWTlR5cGUsIElDb21wb25lbnQsIFNjaGVkdWxlZEZ1bmNUeXBlLCBSZWZQcm9wVHlwZSwgc2V0UmVmfSBmcm9tIFwiLi4vYXBpL21pbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgVk4sIEROLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQsIHJlcXVlc3ROb2RlVXBkYXRlLFxyXG4gICAgc2NoZWR1bGVGdW5jQ2FsbCwgbm90aWZ5U2VydmljZVB1Ymxpc2hlZCwgbm90aWZ5U2VydmljZVN1YnNjcmliZWQsIHdyYXBDYWxsYmFja1dpdGhWTlxyXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiO1xyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICBpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcbi8vLyAjaWYgREVCVUdcclxuICAgIGxldCBnX25leHRWTkRlYnVnSUQgPSAxO1xyXG4vLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnk7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgdHlwZTogVk5UeXBlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZS4gVGhpcyBpcyBudWxsIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgcGFyZW50OiBWTkJhc2U7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRwdWJsaWMgY3JlYXRvcjogSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gTGV2ZWwgb2YgbmVzdGluZyBhdCB3aGljaCB0aGUgbm9kZSByZXNpZGVzIHJlbGF0aXZlIHRvIHRoZSByb290IG5vZGUuXHJcblx0cHVibGljIGRlcHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLlxyXG5cdHB1YmxpYyBhbmNob3JETjogRE47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBuZXh0OiBWTkJhc2U7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHVibGljIHByZXY6IFZOQmFzZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMgLSBib3RoIGtleWVkIGFuZCB1bmtleWVkIC0gZGVmaW5lZCBvbmx5IGlmIHRoZXJlIGFyZSBzb21lIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3ViTm9kZXM6IFZOQmFzZVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGJ1dCBub3QgeWV0IHBlcmZvcm1lZC4gVGhpcyBmbGFnIGlzIG5lZWRlZFxyXG5cdC8vIHRvIHByZXZlbnQgdHJ5aW5nIHRvIGFkZCB0aGUgbm9kZSB0byB0aGUgZ2xvYmFsIG1hcCBldmVyeSB0aW1lIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZFxyXG5cdC8vIGlzIGNhbGxlZC4gXHJcblx0cHVibGljIHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0cHVibGljIGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBJQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5kZXB0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZGVwdGggKyAxIDogMDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZWFucyB1cCB0aGUgbm9kZSBvYmplY3QgYmVmb3JlIGl0IGlzIHJlbGVhc2VkLlxyXG5cdHB1YmxpYyB0ZXJtKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyByZW1vdmUgaW5mb3JtYXRpb24gYWJvdXQgYW55IHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCBzZXJ2aWNlc1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5mb3JFYWNoKCAoc2VydmljZSwgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpKTtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5mb3JFYWNoKCAoaW5mbywgaWQpID0+IG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdWJOb2RlcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY3JlYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuZGVwdGggPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgbW91bnRlZCAqL1xyXG5cdHB1YmxpYyBnZXQgaXNNb3VudGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmFuY2hvckROOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2NoZWR1bGVzIGFuIHVwZGF0ZSBmb3IgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudXBkYXRlUmVxdWVzdGVkKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCB0cnVlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGZhbHNlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZywgc2VydmljZTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN1YnNjcmliZXMgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdC8vIGJ5IG9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDsgb3RoZXJ3aXNlLFxyXG5cdC8vIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdC8vIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yIG5vZGUgaXNcclxuXHQvLyBjaGFuZ2VkLCB0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHRwdWJsaWMgc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZywgcmVmOiBSZWZQcm9wVHlwZSwgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IG5ldyBNYXA8c3RyaW5nLFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHRcdGxldCBpbmZvID0gbmV3IFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvKCk7XHJcblx0XHRpbmZvLnJlZiA9IHJlZjtcclxuXHRcdGluZm8uZGVmYXVsdFNlcnZpY2UgPSBkZWZhdWx0U2VydmljZTtcclxuXHRcdGluZm8udXNlU2VsZiA9IHVzZVNlbGYgPyB0cnVlIDogZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2V0KCBpZCwgaW5mbyk7XHJcblx0XHRub3RpZnlTZXJ2aWNlU3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cdFx0c2V0UmVmKCByZWYsIHRoaXMuZ2V0U2VydmljZSggaWQsIGRlZmF1bHRTZXJ2aWNlKSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvLyBVbnN1YnNjcmliZXMgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFRoZSBSZWYgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gc3Vic2NyaWJlLFxyXG5cdC8vIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHRwdWJsaWMgdW5zdWJzY3JpYmVTZXJ2aWNlKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0UmVmKCBpbmZvLnJlZiwgdW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmRlbGV0ZSggaWQpO1xyXG5cdFx0bm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yXHJcblx0Ly8gbm9kZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBub25lIG9mIHRoZSBhbmNlc3RvciBub2RlcyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0Ly8gdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0cHVibGljIGdldFNlcnZpY2UoIGlkOiBzdHJpbmcsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGxldCBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggaWQsIHVzZVNlbGYpO1xyXG5cdFx0cmV0dXJuIHNlcnZpY2UgIT09IHVuZGVmaW5lZCA/IHNlcnZpY2UgOiBkZWZhdWx0U2VydmljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR29lcyB1cCB0aGUgY2hhaW4gb2Ygbm9kZXMgbG9va2luZyBmb3IgYSBwdWJsaXNoZWQgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gUmV0dXJuc1xyXG5cdC8vIHVuZGVmaW5lZCBpZiB0aGUgc2VydmljZSBpcyBub3QgZm91bmQuIE5vdGUgdGhhdCBudWxsIG1pZ2h0IGJlIGEgdmFsaWQgdmFsdWUuXHJcblx0cHJpdmF0ZSBmaW5kU2VydmljZSggaWQ6IHN0cmluZywgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodXNlU2VsZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBzZXJ2aWNlID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdFx0XHRpZiAoc2VydmljZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHNlcnZpY2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBnbyB1cCB0aGUgY2hhaW47IG5vdGUgdGhhdCB3ZSBkb24ndCBwYXNzIHRoZSB1c2VTZWxmIHBhcmFtZXRlciBvbi5cclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZpbmRTZXJ2aWNlKCBpZCwgdHJ1ZSkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBub2RlIHRoYXQgcHVibGljYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdpdmVuIHNlcnZpY2UgKHRvIHdoaWNoIHRoZSBub2RlXHJcblx0Ly8gaGFzIHByZXZpb3VzbHkgc3Vic2NyaWJlZCkgaGFzIGNoYW5nZWQuXHJcblx0cHVibGljIG5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGluZm8gPSB0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRzZXRSZWYoIGluZm8ucmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBpbmZvLmRlZmF1bHRTZXJ2aWNlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzXHJcblx0ICogdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIENvbXBvbmVudCBjbGFzcy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgXHJcblx0ICovXHJcblx0cHVibGljIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhpc0NhbGxiYWNrPzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGlzQ2FsbGJhY2ssIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2VydmljZSBvYmplY3RzIHB1Ymxpc2hlZCBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBwdWJsaXNoZWRTZXJ2aWNlczogTWFwPHN0cmluZyxhbnk+O1xyXG5cclxuXHQvLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gb2JqZWN0cyBjb25zdGl0dXRpbmcgc3Vic2NyaXB0aW9ucyBtYWRlIGJ5IHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIHN1YnNjcmliZWRTZXJ2aWNlczogTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz47XHJcblxyXG4gICAgLy8vICNpZiBERUJVR1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0lEID0gZ19uZXh0Vk5EZWJ1Z0lEKys7XHJcblx0Ly8vICNlbmRpZlxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvIGNsYXNzIGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgc3Vic2NyaXB0aW9uIG9mIGEgbm9kZSB0byBhIHNlcnZpY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mb1xyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBmaWxsZWQgaW4gd2l0aCB0aGUgc2VydmljZSB2YWx1ZVxyXG5cdHJlZjogUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSHRtbFR5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N2Z1R5cGVzXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL21pbVwiXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb21wL1BvcHVwc1wiXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1pbWJsLXNwZWNpZmljIHN0eWxlIHNjaGVkdWxlciB0aGF0IGNvb3JkaW5hdGVzIE1pbWNzcyBET00gd3JpdGluZyB3aXRoIE1pbWJsXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge3NfaW5pdFN0eWxlU2NoZWR1bGVyfSBmcm9tIFwiLi9pbnRlcm5hbFwiXHJcblxyXG4vLyBTZXQgTWltYmwgc3R5bGUgc2NoZWR1bGVyIGFzIHRoZSBkZWZhdWx0IHNjaGVkdWxlciBmb3Igc3R5bGUtcmVsYXRlZCBET00td3JpdGluZyBvcGVyYXRpb25zLlxyXG5leHBvcnQgbGV0IG1pbWJsU3R5bGVTY2hlZHVsZXJUeXBlID0gc19pbml0U3R5bGVTY2hlZHVsZXIoKTtcclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1V0aWxGdW5jXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvRXZlbnRTbG90XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1BdHRyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9WTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVk5CYXNlXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9DbGFzc0NvbXBWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvSW5kZXBlbmRlbnRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL01hbmFnZWRDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0VsbVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9GdW5jVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0Z1bmNQcm94eVZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Qcm9taXNlUHJveHlWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVGV4dFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9Sb290Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1N0eWxlU2NoZWR1bGVyXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9QdWJTdWJcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1JlY29uY2lsZXJcIlxyXG4iLCLvu78vKipcclxuICogVGhlIElFdmVudFNsb3QgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgd2l0aCBjdXN0b20gcGFyYW1ldGVycy4gTXVsdGlwbGUgbGlzdGVuZXJzIGNhbiBiZVxyXG4gKiBhZGRlZC9yZW1vdmVkIHRvL2Zyb20gYW4gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudFNsb3Q8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbiA9IEZ1bmN0aW9uPlxyXG57XHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSBhIGxhbWJkYVxyXG5cdCAqIGZ1bmN0aW9uIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gcmVtb3ZlIGEgbGFtYmRhIGZ1bmN0aW9uIGxpc3RlbmVyIGxhdGVyLlxyXG5cdCAqL1xyXG5cdGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdGRldGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZDtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG5cdHJlYWRvbmx5IGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90T3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gZXZlbnQgc2xvdCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjYWxsZXIgd2hvXHJcbiAqIGNyZWF0ZWQgaXQuIFRoZSBvd25lciBjYW4gZmlyZSBldmVudHMgYW5kIGNsZWFyIGV2ZW50IGxpc3RlbmVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50U2xvdE93bmVyPFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24gPSBGdW5jdGlvbj4gZXh0ZW5kcyBJRXZlbnRTbG90PFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRmaXJlOiBURnVuYztcclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbiAqIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbiAqIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uID0gRnVuY3Rpb24+IGltcGxlbWVudHMgSUV2ZW50U2xvdE93bmVyPFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZmlyZTogVEZ1bmMgPSB0aGlzLnJlYWxGaXJlIGFzIGFueSBhcyBURnVuYztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0cHVibGljIGF0dGFjaCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMpXHJcblx0XHRcdHRoaXMubGlzdGVuZXJzID0gbmV3IFNldDxURnVuYz4oKTtcclxuXHJcblx0XHR0aGlzLmxpc3RlbmVycy5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY3VycmVudGx5IGF0dGFjaGVkIGxpc3RlbmVycy4gKi9cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuc2l6ZSA6IDA7IH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucy4gV2hlbiB0aGVyZSBhcmUgbm8gbGlzdGVuZXJzLCB0aGlzIGZpZWxkIGlzIHNldCB0byBudWxsIHRvXHJcblx0Ly8gcHJlc2VydmUgc3BhY2UuXHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6IFNldDxURnVuYz47XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgcmVhbGx5IGNhbGxzIHRoZSBsaXN0ZW5lcnMgaW4gYSBsb29wLiBJdCBkZWNvbnN0dWN0cyB0aGUgXCJhcmd1bWVudHNcIiB2YWx1ZVxyXG5cdC8vIGluIG9yZGVyIHRvIHBhc3MgdGhlIHByb3BlciBwYXJhbWV0ZXJzIHRvIHRoZSBsaXN0ZW5lcnMuXHJcblx0cHJpdmF0ZSByZWFsRmlyZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcclxuXHRcdFx0XHRsaXN0ZW5lciggLi4uYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdCB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZSBUXHJcbiAqIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90PCgpID0+IHZvaWQ+O1xyXG4gKiAgICAgY2hhbmdlOiBJRXZlbnRTbG90KG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90PFQ+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90PEV4dHJhY3Q8VFtQXSxGdW5jdGlvbj4+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3RPd25lciB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZVxyXG4gKiBUIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdHlwZSBJTXlFdmVudHMgPVxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3RPd25lcjxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICoge1xyXG4gKiAgICAgY2xpY2s6IElFdmVudFNsb3RPd25lcjwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdE93bmVyKG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkPjtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIE11bHRpRXZlbnRTbG90T3duZXI8VD4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3RPd25lcjxFeHRyYWN0PFRbUF0sRnVuY3Rpb24+PjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlbnQgc2xvdHMgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIHRlbXBsYXRlIHR5cGUgVC4gVGhlXHJcbiAqIGNhbGxlciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZXZlbnQgc2xvdHM7IHRoYXQgaXMsIGl0IHdpbGwgYmUgYWJsZSB0byBmaXJlIGV2ZW50cyBhbmRcclxuICogY2xlYXIgYWxsIGxpc3RlbmVycyB3aGVuIG5lY2Vzc2FyeS4gVGhpcyBhbGxvd3MgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID1cclxuICoge1xyXG4gKiAgICAgY2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAqICAgICBjaGFuZ2U6ICggbmV3VmFsOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogaW50ZXJmYWNlIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIGV2ZW50czogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPjtcclxuICogICAgIGRvU29tZXRoaW5nKCk6IHZvaWQ7XHJcbiAqIH1cclxuICpcclxuICogY2xhc3MgTXlDbGFzcyBpbXBsZW1lbnRzIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIHByaXZhdGUgX2V2ZW50cyA9IGNyZWF0ZU11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4oKTtcclxuICogICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IE11bHRpRXZlbnRTbG90PElNeUV2ZW50cz4geyByZXR1cm4gdGhpcy5fZXZlbnRzOyB9XHJcbiAqXHJcbiAqICAgICBwdWJsaWMgZG9Tb21ldGhpbmcoKTogdm9pZCB7IHRoaXMuX2V2ZW50cy5jaGFuZ2UuZmlyZSgxKTt9XHJcbiAqIH1cclxuICpcclxuICogbGV0IG9iajogSU15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xyXG4gKiBvYmouZXZlbnRzLmNoYW5nZS5hdHRhY2goIChuOiBudW1iZXIpID0+IGNvbnNvbGUubG9nKG4pKTtcclxuICogb2JqLmRvU29tZXRoaW5nKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpRXZlbnRTbG90PFQ+KCk6IE11bHRpRXZlbnRTbG90T3duZXI8VD5cclxue1xyXG5cdHJldHVybiBuZXcgUHJveHkoIHt9LCBuZXcgTXVsdGlFdmVudFNsb3RIYW5kbGVyKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcHJveHkgaGFuZGxlciBmb3IgdGhlIE11bHRpRXZlbnRTbG90IG9iamVjdC4gVGhlIGhhbmRsZXIgZG9lc24ndCB1c2UgYW55XHJcbiAqIHRhcmdldCBvYmplY3QgLSBpdCBzaW1wbHkgY3JlYXRlcyBFdmVudFNsb3QgcHJvcGVydHkgaW4gaXRzZWxmIHdoZW5ldmVyIHRoZSBnZXQgbWV0aG9kIGlzXHJcbiAqIGNhbGxlZC4gVGhlIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNraW5nIGVuc3VyZXMgdGhhdCBvbmx5IHByb3BlciBldmVudCBzbG90IG5hbWVzIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuY2xhc3MgTXVsdGlFdmVudFNsb3RIYW5kbGVyXHJcbntcclxuXHRwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpc1twcm9wXSA/IHRoaXNbcHJvcF0gOiBuZXcgRXZlbnRTbG90UHJldGVuZGVyKCB0aGlzLCBwcm9wKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXZlbnRTbG90UHJldGVuZGVyIG9iamVjdHMgYXJlIHJldHVybmVkIGJ5IHRoZSBNdWx0aUV2ZW50U2xvdEhhbmRsZXIgaWYgaXQgZG9lc24ndCBmaW5kXHJcbiAqIGFuIGV2ZW50IHNsb3QgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS4gVGhlc2UgbGlnaHR3ZWlnaHQgb2JqZWN0cyBpbXBsZW1lbnQgYWxsIElFdmVudFNsb3RPd25lclxyXG4gKiBtZXRob2RzLCBidXQgb25seSB0aGUgYXR0YWNoKCkgbWV0aG9kIGFjdHVhbGx5IGNyZWF0ZXMgdGhlIEV2ZW50U2xvdCBvYmplY3QgYW5kIHNldHMgaXQgdG9cclxuICogdGhlIGhhbmRsZXIuXHJcbiAqL1xyXG5jbGFzcyBFdmVudFNsb3RQcmV0ZW5kZXIgaW1wbGVtZW50cyBJRXZlbnRTbG90T3duZXJcclxue1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBNdWx0aUV2ZW50U2xvdEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIHByb3A6IFByb3BlcnR5S2V5O1xyXG4gICAgcHJpdmF0ZSBzbG90OiBFdmVudFNsb3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGhhbmRsZXI6IE11bHRpRXZlbnRTbG90SGFuZGxlciwgcHJvcDogUHJvcGVydHlLZXkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnByb3AgPSBwcm9wO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQgKiBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGZpcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNsb3QpXHJcbiAgICAgICAgICAgIHRoaXMuc2xvdC5maXJlKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzIHRvIHRoZSBldmVudC4gKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBpZiAodGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBjYW5ub3QgYmUgYSBsYW1iZGFcclxuXHQgKiBmdW5jdGlvbiBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHJlbW92ZSBhIGxhbWJkYSBmdW5jdGlvbiBsaXN0ZW5lciBsYXRlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgYXR0YWNoKCBsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5zbG90KVxyXG4gICAgICAgICAgICB0aGlzLnNsb3QgPSB0aGlzLmhhbmRsZXJbdGhpcy5wcm9wXSA9IG5ldyBFdmVudFNsb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbG90LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBGdW5jdGlvbik6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xvdClcclxuICAgICAgICAgICAgdGhpcy5zbG90LmRldGFjaCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjdXJyZW50bHkgYXR0YWNoZWQgbGlzdGVuZXJzLiAqL1xyXG4gICAgcHVibGljIGdldCBjb3VudCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbG90ID8gdGhpcy5zbG90LmNvdW50IDogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdhdGhlcmluZyB1cGRhdGUgc3RhdGlzdGljc1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIENhdGVnb3JpZXMgb2YgY2hhbmdlZCBlbnRpdGllcyB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC5cclxuZXhwb3J0IGVudW0gU3RhdHNDYXRlZ29yeVxyXG57XHJcblx0Um9vdCxcclxuXHRDb21wLFxyXG5cdEVsbSxcclxuXHRUZXh0LFxyXG5cdEF0dHIsXHJcblx0RXZlbnQsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWN0aW9ucyBvbiBhbiBlbnRpdHkgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuIE5vdCBhbGwgYWN0aW9ucyBhcmUgcmVsZXZhbnQgZm9yIGFsbFxyXG4vLyBjYXRlZ29yaWVzOlxyXG4vL1x0LSBVcGRhdGVkIGRvZXNuJ3QgZXhpc3QgZm9yIGNvbXBvbmVudHMgYW5kIGZvciBlbGVtZW50c1xyXG4vL1x0LSBNb3ZlZCBkb2Vzbid0IGV4aXN0IGZvciBhdHRyaWJ1dGVzXHJcbi8vXHQtIFJlbmRlcmVkIG9ubHkgZXhpc3RzIGZvciBjb21wb25lbnRzXHJcbmV4cG9ydCBlbnVtIFN0YXRzQWN0aW9uXHJcbntcclxuXHRBZGRlZD0gMSxcclxuXHREZWxldGVkID0gMixcclxuXHRVcGRhdGVkID0gMyxcclxuXHRNb3ZlZCA9IDQsXHJcblx0UmVuZGVyZWQgPSA1LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b3JhZ2UgZm9yIGEgbnVtYmVyIG9mIGVhY2ggYWN0aW9uIHVuZGVyIGEgY2F0ZWdvcnkuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVN0YXRzXHJcbntcclxuXHRhZGRlZDogbnVtYmVyID0gMDtcclxuXHRkZWxldGVkOiBudW1iZXIgPSAwO1xyXG5cdHVwZGF0ZWQ6IG51bWJlciA9IDA7XHJcblx0bW92ZWQ6IG51bWJlciA9IDA7XHJcblx0cmVuZGVyZWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBoYXNTb21lRGF0YSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYWRkZWQgfHwgdGhpcy5kZWxldGVkIHx8IHRoaXMudXBkYXRlZCB8fCB0aGlzLm1vdmVkIHx8IHRoaXMucmVuZGVyZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxlZFN0YXRzXHJcbntcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3RhcnRUaW1lOiBudW1iZXI7XHJcblx0ZHVyYXRpb246IG51bWJlcjtcclxuXHRjb21wOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRlbG06IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdHRleHQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGF0dHI6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGV2ZW50OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGFydCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdG9wKCBwcmludFN1bW1hcnk6IGJvb2xlYW4gPSB0cnVlKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG5cclxuXHRcdGlmIChwcmludFN1bW1hcnkpXHJcblx0XHRcdGNvbnNvbGUubG9nKCB0aGlzLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBpbmNyZW1lbnRzIHRoZW51bWJlciBvZiB0aW1lcyB0aGUgZ2l2ZW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgb24gYW4gZW50aXR5IG9mIGEgZ2l2ZW5cclxuXHQvLyBjYXRlZ29yeS4gSWYgdGhlIGVudGl0eSBpcyBhIERPTSBlbnRpdHkgKGFzIG9wcG9zZWQgdG8gYSBjb21wb25lbnQpLCB0aGVuIHRoZSBET01cclxuXHQvLyB0b3RhbCBudW1iZXIgaXMgYWxzbyBpbmNyZW1lbnRlZC5cclxuXHRwdWJsaWMgbG9nKCBjYXRlZ29yeTogU3RhdHNDYXRlZ29yeSwgYWN0aW9uOiBTdGF0c0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2F0ZWdvcnlTdGF0czogQ2F0ZWdvcnlTdGF0cztcclxuXHRcdHN3aXRjaCggY2F0ZWdvcnkpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5Db21wOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5jb21wOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkVsbTogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZWxtOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LlRleHQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLnRleHQ7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQXR0cjogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuYXR0cjsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FdmVudDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuZXZlbnQ7IGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKCBhY3Rpb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uQWRkZWQ6IGNhdGVnb3J5U3RhdHMuYWRkZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uRGVsZXRlZDogY2F0ZWdvcnlTdGF0cy5kZWxldGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlVwZGF0ZWQ6IGNhdGVnb3J5U3RhdHMudXBkYXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5Nb3ZlZDogY2F0ZWdvcnlTdGF0cy5tb3ZlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5SZW5kZXJlZDogY2F0ZWdvcnlTdGF0cy5yZW5kZXJlZCsrOyBicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuZHVyYXRpb24udG9GaXhlZCgyKX1tcyBgICtcclxuXHRcdFx0XHR0aGlzLmdldENvbXBTdHJpbmcoKSArIHRoaXMuZ2V0RWxtU3RyaW5nKCkgKyB0aGlzLmdldFRleHRTdHJpbmcoKSArXHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyU3RyaW5nKCkgKyB0aGlzLmdldEV2ZW50U3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29tcG9uZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldENvbXBTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNvbXAuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuY29tcC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5jb21wLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyNzBFXCIsIHRoaXMuY29tcC5yZW5kZXJlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5jb21wLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGNvbXAoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlbGVtZW50IHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEVsbVN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZWxtLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmVsbS5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5lbG0uZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy5lbG0ubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZWxtKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dCBub2RlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldFRleHRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnRleHQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMudGV4dC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy50ZXh0LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMudGV4dC51cGRhdGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLnRleHQubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgdGV4dCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRBdHRyU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5hdHRyLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmF0dHIuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuYXR0ci5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmF0dHIudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBhdHRyKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEV2ZW50U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ldmVudC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5ldmVudC5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5ldmVudC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLmV2ZW50LnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgZXZlbnQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gc2lnbiBhbmQgdmFsdWUgdG8gdGhlIGdpdmVuIHN0cmluZyBidXQgb25seSBpZiB0aGUgdmFsdWUgaXMgbm9uLXplcm8uXHJcblx0cHJpdmF0ZSBnZXRWYWxTdHJpbmcoIHM6IHN0cmluZywgc2lnbjogc3RyaW5nLCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh2YWwgPT09IDApXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKHMubGVuZ3RoID4gMCA/IFwiIFwiIDogXCJcIikgKyBzaWduICsgdmFsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHN0YXRzOiBEZXRhaWxlZFN0YXRzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21tb24gdHlwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElEaXNwb3NlciBpbnRlcmZhY2UgYWxsb3dzIGNsaWVudHMgdG8gaW5mb3JtIHRoZSBvYmplY3QgdGhhdCBpdCBjYW4gY2xlYXIgaXRzIGludGVybmFsXHJcbiAqIHJlc291cmNlcy4gVGhlIG9iamVjdCBjYW5ub3QgYmUgdXNlZCBhZnRlciBpdCBoYXMgYmVlbiBkaXNwb3NlZCBvZmYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFueSBudW1iZXIgb2YgcGFyYW1ldGVycyBhbmQgcmV0dXJuIGFueSB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFueUFueUZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHZhbHVlcyBvZiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVHlwZUZ1bmM8VD4gPSAoKSA9PiBUO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBubyBwYXJhbWV0ZXJzIGFuZCBkb24ndCByZXR1cm4gYW55IHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIE5vbmVWb2lkRnVuYyA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGhlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyPFQgPSBhbnk+XHJcbntcclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgZ2V0KCk6IFQ7XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgc2V0KCB2OiBUKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJEZXB0aCBlbnVtZXJhdGlvbiBkZWZpbmVzIHBvc3NpYmxlIHdheXMgb2YgaG93IHRyaWdnZXJzIGRlYWwgd2l0aCBjb250YWluZXIgZGF0YTtcclxuICogdGhhdCBpcywgb2JqZWN0cywgYXJyYXlzLCBtYXBzIGFuZCBzZXRzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gKiB0aGlzIGVudW1lcmF0aW9uIGlzIGlycmVsZXZhbnQuXHJcbiAqL1xyXG5lbnVtIFRyaWdnZXJEZXB0aFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgY2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFyZSBoYW5kbGVkLiBBY3Rpb25zIG9mIGFkZGluZywgcmVtb3ZpbmcgYW5kIG1vZGlmeWluZ1xyXG4gICAgICogaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBhcmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVmFsdWUgPSAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiB0aGUgaW1tZWRpYXRlIGNvbnRhaW5lciBpdGVtcyBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZlxyXG4gICAgICogYWRkaW5nIGFuZCByZW1vdmluZyBpdGVtcyBpbiB0aGUgY29udGFpbmVyIGNhdXNlIGNoYW5nZSB0byBiZSB0cmlnZ2VycmVkOyBob3dldmVyIGFjdGlvbnNcclxuICAgICAqIG9mIG1vZGlmeWluZyBpdGVtcyB0aGVtc2VsZnMgYXJlIGlnbm9yZWQuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIFNoYWxsb3cgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBpbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCBvZiBpdGVtcyBvbiBhbGwgbGV2ZWxzIGFyZSBoYW5kbGVkLiBJdGVtcyBhZGRlZCB0byB0aGVcclxuICAgICAqIGNvbnRhaW5lciBhcmUgY29udmVydGVkIHRvIGRlZXAgdHJpZ2dlcnMuIEZvciB0cmlnZ2VycyB3aXRoIHZhbHVlcyBvZiBub24tY29udGFpbmVyIHR5cGVzXHJcbiAgICAgKiB0aGlzIHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIERlZXAgPSAxMDAsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB0cmlnZ2VyIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZGVwdGggd2l0aCB0aGUgZ2l2ZW4gaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlnZ2VyPFQgPSBhbnk+KCBkZXB0aDogbnVtYmVyLCB2PzogVCk6IElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgVHJpZ2dlciggZGVwdGggPCAwID8gMCA6IGRlcHRoLCB2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBrZWVwcyBhIHZhbHVlIGFuZCBub3RpZmllcyBhbGwgYXR0YWNoZWQgd2F0Y2hlcnNcclxuICogd2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyPFQgPSBhbnk+IGltcGxlbWVudHMgSVRyaWdnZXI8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGRlcHRoPzogbnVtYmVyLCB2PzogVClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIGRlcHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHB1YmxpYyBnZXQoKTogVFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyBhIG5ldyB2YWx1ZVxyXG4gICAgcHVibGljIHNldCggdjogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGlmICh2ID09PSB0aGlzLnYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy52ID0gdHJpZ2dlcnJpemUoIHYsIHRoaXMsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gcmVhZFxyXG4gICAgcHVibGljIG5vdGlmeVJlYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyUmVhZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSBtYW5hZ2VyIHRoYXQgdGhlIHRyaWdnZXIncyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkLiBXZSBvbmx5IG5vdGlmeSB0aGUgbWFuYWdlclxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgYXR0YWNoZWQgdG8gb3VyIHRyaWdnZXI7XHJcbiAgICBwdWJsaWMgbm90aWZ5Q2hhbmdlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5ub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuICAgIC8vIFZhbHVlIGJlaW5nIGdldCBhbmQgc2V0XHJcbiAgICBwcml2YXRlIHY6IFQ7XHJcblxyXG4gICAgLy8gU2V0IG9mIHdhdGNoZXJzIHdhdGNoaW5nIG92ZXIgdGhpcyB0cmlnZ2VyJ3MgdmFsdWUuIFRoaXMgbWVtYmVyIHNlcnZlcyBhcyBhIHN0b3JhZ2UgaW5zdGVhZFxyXG4gICAgLy8gb2YgaGF2aW5nIHRoZSBtYW5hZ2VyIHRvIG1hcCBvZiB0cmlnZ2VycyB0byB0aGUgc2V0IG9mIHdhdGNoZXJzLlxyXG4gICAgcHVibGljIHdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXYXRjaGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVdhdGNoZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcblxyXG4gICAgLy8gLyoqIFNldHMgYSByZXNwb25kZXIgZnVuY3Rpb24gKi9cclxuICAgIC8vIHNldFJlc3BvbmRlciggcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIHJlc3BvbmRlclRoaXM/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIFN5bWJvbCB1c2VkIHRvIGtlZXAgYSB3YXRjaGVyIG9iamVjdCBhdHRhY2hlZCB0byB0aGUgd2F0Y2hlciBmdW5jdGlvbi5cclxuICovXHJcbmxldCBzeW1XYXRjaGVyID0gU3ltYm9sKCBcInN5bVdhdGNoZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2F0Y2hlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gcmVndWxhciBmdW5jdGlvbi4gV2hlbiB0aGVcclxuICogd2F0Y2hlciBmdW5jdGlvbiBpcyBpbnZva2VkIGl0IGludm9rZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGFuZCBpdCBub3RpY2VzIGFsbCB0cmlnZ2VyIG9iamVjdHNcclxuICogdGhhdCB3ZXJlIHJlYWQgZHVyaW5nIGl0cyBleGVjdXRpb24uIFdoZW4gYW55IG9mIHRoZXNlIHRyaWdnZXIgb2JqZWN0cyBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkLCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSB3YXRjaGVkXHJcbiAqIEBwYXJhbSByZXNwb25kZXIgRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHZhbHVlcyBvZiB0aGUgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkIGR1cmluZ1xyXG4gKiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24ncyBsYXN0IGV4ZWN1dGlvbiBjaGFuZ2UuXHJcbiAqIEBwYXJhbSBmdW5jVGhpcyBPcHRpb25hbCB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICogQHBhcmFtIHJlc3BvbmRlclRoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIFwidGhpc1wiIHZhbHVlIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXI8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCByZXNwb25kZXI6IE5vbmVWb2lkRnVuYyxcclxuICAgIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KTogSVdhdGNoZXI8VD5cclxue1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hlckZ1bmMoLi4uYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlcjogV2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgZm9yIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3YXMgbm90IHN1cHBsaWVkIGJ1dCBub3cgd2hlbiB0aGVcclxuICAgICAgICAvLyB3YXRjaGVyIGV4ZWN1dGVzLCBcInRoaXNcIiBpcyBkZWZpbmVkLCB3ZSByZW1lbWJlciBpdC5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlci5leGVjdXRlKCB0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIHRoZSB3YXRjaGVyIG9iamVjdCBpbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZiB1c2luZyBhIHN5bWJvbC5cclxuICAgIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdID0gbmV3IFdhdGNoZXIoIGZ1bmMsIHJlc3BvbmRlciwgZnVuY1RoaXMsIHJlc3BvbmRlclRoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgICh3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgd2F0Y2hlciA9IHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgd2F0Y2hlciAmJiB3YXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgd2F0Y2hlckZ1bmNbc3ltV2F0Y2hlcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiB3YXRjaGVyRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhdGNoZXIgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdhdGNoaW5nIGZvciB0cmlnZ2VyIG9iamVjdHMgZW5jb3VudGVyZWRcclxuICogZHVyaW5nIGEgZnVuY3Rpb24gZXhlY3V0aW9uLiBXaGVuIHRoZSB0cmlnZ2VyIG9iamVjdHMgYXJlIHJlYWQsIHRoZXkgYXJlIHJlbWVtYmVyZWQgYnkgdGhlXHJcbiAqIFdhdGNoZXIgb2JqZWN0LiBXaGVuZXZlciBhIHZhbHVlIGlzIGNoYW5nZWQgaW4gYW55IG9mIHRoZXNlIHRyaWdnZXJzLCB0aGUgd2F0Y2hlciBvYmplY3QgaXNcclxuICogbm90aWZpZWQgYW5kIGNhbGxzIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsIGZ1bmNUaGlzPzogYW55LCByZXNwb25kZXJUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIgPSByZXNwb25kZXI7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICAvLyBpZiByZXNwb25kZXIgXCJ0aGlzXCIgaXMgbm90IGRlZmluZWQgdXNlIHRoZSBvbmUgZm9yIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IHJlc3BvbmRlclRoaXMgPyByZXNwb25kZXJUaGlzIDogZnVuY1RoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2hpbGUgdXBkYXRpbmcgdGhlIHNldCBvZiBhdHRhY2hlZCB0cmlnZ2Vycy4gVGhlIFwiZnVuY1RoaXNcIlxyXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBcInRoaXNcIiB1bmRlciB3aGljaCB0aGUgaW50ZXJuYWwgd2F0Y2hlciBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQuIEl0XHJcbiAgICAgKiB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBcInRoaXNcIiB0byBhcHBseSB3aGVuIGludm9raW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpZiBpdCB3YXNuJ3RcclxuICAgICAqIHNldCB5ZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgd2F0Y2hlciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzcG9uZGVyVGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uZGVyVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGN1cnJlbnQgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIGluc3RhbGwgb3VyIHdhdGNoZXIgYXQgdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICBnX21hbmFnZXIucHVzaFdhdGNoZXIoIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG91ciB3YXRjaGVyIGZyb20gdGhlIHRvcCBvZiB0aGUgd2F0Y2hlcnMgc3RhY2tcclxuICAgICAgICAgICAgZ19tYW5hZ2VyLnBvcFdhdGNoZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCB0cmlnZ2Vyc1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB3YXRjaGVyIHRoYXQgaXQgc2hvdWxkIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi4gVGhpcyBvY2N1cnMgd2hlbiB0aGVyZVxyXG4gICAgLy8gYXJlIHRyaWdnZXJzIHdob3NlIHZhbHVlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgcHVibGljIHJlc3BvbmQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZC4gSXQgY2FuIGhhcHBlbiBpZiBhZnRlciBhbGwgbXV0YXRpb25cclxuICAgICAgICAvLyBzY29wZXMgZXhpdGVkIHRoZSBtYW5hZ2VyIG5vdGlmaWVzIG11bHRpcGxlIHdhdGNoZXJzIGFuZCBvbmUgb2YgdGhlIHdhdGNoZXJzJyByZXNwb25kZXJcclxuICAgICAgICAvLyBkaXNwb3NlcyBvZiBhbm90aGVyIHdhdGNoZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlcilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbmRlci5hcHBseSggdGhpcy5yZXNwb25kZXJUaGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgc3RhdGUgb2YgdGhlIHdhdGNoZXIsIHNvIHRoYXQgaXQgaXMgZGV0YWNoZWQgZnJvbSBhbnkgdHJpZ2dlcnMgYW5kIGlzIHJlbW92ZWRcclxuICAgICAqIGZyb20gdGhlIG1hbmFnZXIncyBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW4oKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGRldGFjaGVzIHRoaXMgd2F0Y2hlciBmcm9tIGFsbCB0aGUgdHJpZ2dlcnMgYW5kIHRoZSB0cmlnZ2VycyBmcm9tIHRoaXMgd2F0Y2hlci5cclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goIHRyaWdnZXIgPT4gdHJpZ2dlci53YXRjaGVycy5kZWxldGUoIHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGFzayB0aGUgbWFuYWdlciB0byBmb3JnZXQgYWJvdXQgdGhpcyB3YXRjaGVyIGlmIGl0IGlzIGN1cnJlbnRseSBpbiB0ZSBkZWZlcnJlZCBzZXRcclxuICAgICAgICBnX21hbmFnZXIucmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3YXRjaGVkOyB0aGF0IGlzLCBkdXJpbmcgd2hpY2ggd2Ugc2hvdWxkIGxpc3RlbiB0byB0cmlnZ2VycyBiZWluZyByZWFkLCBzb1xyXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVtZW1iZXIgdGhlbSBhbmQgbGF0ZXIgcmVzcG9uZCB3aGVuIHRoZXkgbm90aWZ5IHRoYXQgdGhlaXIgdmFsdWVzIGhhdmUgYmVlblxyXG4gICAgLy8gY2hhbmdlZC5cclxuICAgIHByaXZhdGUgZnVuYzogVDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHRoZSB2YWx1ZSBvZiBvbmUgb2YgdGhlIHRyaWdnZXJzIGNoYW5nZXNcclxuICAgIHByaXZhdGUgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmM7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHJlc3BvbmRlciBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlclRoaXM6IGFueTtcclxuXHJcbiAgICAvLyBTZXQgb2YgdHJpZ2dlcnMgY3VycmVudGx5IGJlaW5nIHdhdGNoZWQgYnkgdGhpcyB3YXRjaGVyLiBUaGlzIG1lbWViZXIgaXMgdXNlZCBieSB0aGVcclxuICAgIC8vIG1hbmFnZXIuIEl0IGlzIGVzc2VudGlhbGx5IGEgc3RvcmFnZSwgd2hpY2ggaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBtYW5hZ2VyIGhhdmluZyBhXHJcbiAgICAvLyBtYXAgb2Ygd2F0Y2hlcnMgdG8gdGhlIHNldHMgb2YgdHJpZ2dlcnMuIFRoZSBwdXJwb3NlIG9mIGtub3dpbmcgd2hhdCB0cmlnZ2VycyBhcmUgdXNlZFxyXG4gICAgLy8gYnkgd2hhdCB3YXRjaGVyIGlzIHRvIHJlbW92ZSB0aGUgd2F0Y2hlciBmcm9tIGFsbCB0aGVzZSB0cmlnZ2VycyBiZWZvcmUgdGhlIHdhdGNoZWRcclxuICAgIC8vIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICAgIHB1YmxpYyB0cmlnZ2VycyA9IG5ldyBTZXQ8VHJpZ2dlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTWFuYWdlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIGZ1bmN0aW9uYWxpdHlcclxuICogb2YgdGhlIHRyaWdnZXItd2F0Y2hlciBtZWNoYW5pc20uIEl0IGluY2x1ZGVzIGEgc3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuICogdGhlaXIgZnVuY3Rpb25zIGFuZCB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIHRvIGJlIHJlYWQuIFdoZW4gYSB0cmlnZ2VyIG9iamVjdCBpcyBiZWluZ1xyXG4gKiByZWFkICh0aGF0IGlzIGl0cyBnZXQoKSBtZXRob2QgaXMgY2FsbGVkKSwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIG5vdGlmaWVkLCBiZWNhdXNlXHJcbiAqIHRoZXkgYWxsIGRlcGVuZCBvbiB0aGUgdHJpZ2dlciBvYmplY3QncyB2YWx1ZSBmb3IgdGhlaXIgZnVuY3Rpb25hbGl0eS5cclxuICogXHJcbiAqIEl0IGFsc28gbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50IG9mIG11dGF0aW9uIHNjb3BlcyBhbmQgaGFuZGxlcyBub3RpZnlpbmcgd2F0Y2hlcnMgb2ZcclxuICogbXV0YXRpb25zIG9ubHkgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBoYXMgZXhpdGVkLiBUaGUgdHJpZ2dlcnMgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVyc1xyXG4gKiBkaXJlY3RseTsgaW5zdGVhZCwgdGhleSBub3RpZnkgdGhlIG1hbmFnZXIsIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBhbmQgbm90aWZpZXMgYWxsXHJcbiAqIHRoZSB3YXRjaGVycyBvbmNlIG91dCBvZiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIFRyaWdnZXJXYXRjaGVyTWFuYWdlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFB1c2hlcyB0aGUgZ2l2ZW4gd2F0Y2hlciBvYmplY3QgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2F0Y2hlclN0YWNrLnB1c2goIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgd2F0Y2hlciBvYmplY3QgY3VycmVudGx5IG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BXYXRjaGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGZyb20gdGhlIHNldCBvZiBkZWZlcnJlZCB3YXRjaGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRGVmZXJyZWRXYXRjaGVyKCB3YXRjaGVyOiBXYXRjaGVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5kZWxldGUoIHdhdGNoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudC4gSWYgaXQgcmVhY2hlcyB6ZXJvLCBub3RpZmllcyBhbGwgZGVmZXJyZWQgd2F0Y2hlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5wYWlyZWQgY2FsbCB0byBleGl0TXV0YXRpb25TY29wZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKC0tdGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID09PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0aGlzLmRlZmVycmVkV2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiByZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5VHJpZ2dlclJlYWQoIHRyaWdnZXI6IFRyaWdnZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXR0YWNoIGFsbCB3YXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHN0YWNrIHRvIHRoZSB0cmlnZ2VyXHJcbiAgICAgICAgZm9yKCBsZXQgd2F0Y2hlciBvZiB0aGlzLndhdGNoZXJTdGFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudHJpZ2dlcnMuYWRkKCB0cmlnZ2VyKTtcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5hZGQoIHdhdGNoZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiB0cmlnZ2VyIG9iamVjdCBoYXMgYmVlbiBjaGFuZ2VkLiBJZiB0aGlzIGhhcHBlbnMgd2hpbGVcclxuICAgICAqIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLCB3ZSBkb24ndCBub3RpZnkgdGhlIHdhdGNoZXJzIG9mIHRoaXMgdHJpZ2dlciBidXQgcHV0IHRoZW0gaW4gYVxyXG4gICAgICogZGVmZXJyZWQgc2V0LiBJZiB0aGlzIGhhcHBlbnMgb3V0c2lkZSBvZiBhbnkgbXV0YXRpb24gc2NvcGUuIEluIHRoaXMgY2FzZSB3ZSBub3RpZnkgdGhlXHJcbiAgICAgKiB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgcmlnaHQgYXdheS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJDaGFuZ2VkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAgeyBcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBpcyBzdXBwb3NlZCB0byBiZSBjYWxsZWQgb25seSBpZiB0aGUgdHJpZ2dlciBoYXMgd2F0Y2hlcnNcclxuICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLndhdGNoZXJzLnNpemUgPT09IDApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIm5vdGlmeVRyaWdnZXJDaGFuZ2VkIHdhcyBjYWxsZWQgYnkgYSB0cmlnZ2VyIHdpdGhvdXQgd2F0Y2hlcnNcIik7XHJcbiAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvblNjb3Blc1JlZkNvdW50ID4gMClcclxuICAgICAgICAgICAgdHJpZ2dlci53YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHRoaXMuZGVmZXJyZWRXYXRjaGVycy5hZGQoIHdhdGNoZXIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3aGVuIHdhdGNoZXJzIHJlc3BvbmQsIHRoZXkgY2FuIGV4ZWN1dGUgdGhlaXIgd2F0Y2hlciBmdW5jdGlvbnMgYW5kIHRoYXQgY291bGRcclxuICAgICAgICAgICAgLy8gbWVzcyB3aXRoIHRoZSBzYW1lIHNldCBvZiB3YXRjaGVycyB3ZSBhcmUgaXRlcmF0aW5nIG92ZXIuIFRoZXJlZm9yZSwgd2UgbWFrZSBhIGNvcHlcclxuICAgICAgICAgICAgLy8gb2YgdGhpcyBzZXQgZmlyc3QuXHJcbiAgICAgICAgICAgIGxldCB3YXRjaGVycyA9IEFycmF5LmZyb20oIHRyaWdnZXIud2F0Y2hlcnMua2V5cygpKTtcclxuICAgICAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB3YXRjaGVyLnJlc3BvbmQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhY2sgb2Ygd2F0Y2hlciBvYmplY3RzLiBXYXRjaGVycyBhcmUgcHVzaGVkIG9uIHRvcCBiZWZvcmUgdGhleSBjYWxsIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBhbmQgcmVtb3ZlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIHJldHVybnMuIFdoZW4gYSB0cmlnZ2VyIG5vdGlmaWVzIHRoYXQgaXRzIHZhbHVlXHJcbiAgICAvLyBoYXMgYmVlbiBjaGFuZ2VkLCBhbGwgdGhlIHdhdGNoZXJzIGluIHRoZSBzdGFjayBhcmUgYXR0YWNoZWQgdG8gdGhpcyB0cmlnZ2VyLiBUaGlzIG1lYW5zXHJcbiAgICAvLyB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaXMgdXNlZCBieSB0aGUgd2F0Y2hlZCBmdW5jdGlvbnMuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJTdGFjazogV2F0Y2hlcltdID0gW107XHJcblxyXG4gICAgLy8gTnVtYmVyIG9mIGN1cnJlbnRseSBhY3RpdmUgbXV0YXRpb24gc2NvcGVzLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlblxyXG4gICAgLy8gY2hhbmdlZCB3aGlsZSB0aGlzIG51bWJlciBpcyBub3QgMCwgdGhlIHRyaWdnZXIgd2lsbCBiZSByZW1lbWJlcmVkIGluIHRoZSBpbnRlcm5hbCBzZXQuXHJcbiAgICAvLyBBZnRlciBhbGwgbXV0YXRpb24gc2NvcGVzIGFyZSBmaW5pc2hlZCwgdGhlIHdhdGNoZXJzIGF0dGFjaGVkIHRvIGFsbCB0cmlnZ2VycyBpbiB0aGUgc2V0XHJcbiAgICAvLyB3aWxsIGJlIG5vdGlmaWVkLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIHdoaWxlIHRoZXJlIGFyZVxyXG4gICAgLy8gbm8gbXV0YXRpb24gc2NvcGVzIHByZXNlbnQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byB0aGUgdHJpZ2dlciBhcmUgbm90aWZpZWQgaW1tZWRpYXRlbHkuXHJcbiAgICBwcml2YXRlIG11dGF0aW9uU2NvcGVzUmVmQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB0aGF0IHNob3VsZCBiZSBub3RpZmllZCB3aGVuIHRoZSBsYXN0IG11dGF0aW9uIHNjb3BlIGV4aXRzLiBVc2luZyBTZXRcclxuICAgIC8vIGVuc3VyZXMgdGhhdCBubyBtYXR0ZXIgaG93IG1hbnkgdHJpZ2dlcnMgcmVmZXJlbmNlIGEgd2F0Y2hlciwgdGhlIHdhdGNoZXIgd2lsbCBiZSBwcmVzZW50XHJcbiAgICAvLyBvbmx5IG9uY2UuXHJcbiAgICBwcml2YXRlIGRlZmVycmVkV2F0Y2hlcnMgPSBuZXcgU2V0PFdhdGNoZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNpbmdsZXRvbiBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIgYmplY3QgKi9cclxubGV0IGdfbWFuYWdlciA9IG5ldyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXIoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRNdXRhdGlvblNjb3BlKCk6IHZvaWRcclxue1xyXG4gICAgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb21wdXRlZCB0cmlnZ2Vyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbXB1dGVkVHJpZ2dlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIElUcmlnZ2VyPFQ+LCBJRGlzcG9zZXJcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgY29tcHV0ZWQgdHJpZ2dlciBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgY2FsY3VsYXRlZCBieSB0aGUgZ2l2ZW4gZnVuY3Rpb24gYW5kIHdpdGggYW5cclxuICogb3B0aW9uYWwgaW5pdGlhbCB2YWx1ZS5cclxuICogQHBhcmFtIHZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4oIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPiwgZnVuY1RoaXM/OiBhbnkpOiBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRUcmlnZ2VyKCBmdW5jLCBmdW5jVGhpcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21wdXRlZFRyaWdnZXIgY2xhc3MgcmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgaXMgY2FsY3VsYXRlZCBieSBhIGZ1bmN0aW9uLiBUaGlzIGlzIGFcclxuICogY29tYmluYXRpb24gb2YgVHJpZ2dlciBhbmQgV2F0Y2hlci4gSXQgaXMgYSB3YXRjaGVyIGJlY2F1c2UgaXQgd2F0Y2hlcyBvdmVyIHRoZSBmdW5jdGlvbiBhbmRcclxuICogY2FsbHMgaXQgd2hlbmV2ZXIgYW55IHRyaWdnZXJzIHRoaXMgZnVuY3Rpb24gdXNlcyBhcmUgY2hhbmdlZC4gSXQgaXMgYSB0cmlnZ2VyIGJlY2F1c2UgaXRcclxuICogdHJpZ2dlcnMgY2hhbmdlIHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBuZXcgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgaW1wb3J0YW50IGZhY3QgYWJvdXQgYSBjb21wdXRlZCB0cmlnZ2VyIGlzIHRoYXQgaXQgb25seSBpbnZva2VzIHRoZSB3YXRjaGVkIGZ1bmN0aW9uXHJcbiAqIGlmIGl0J3MgdmFsdWUgaXMgYmVpbmcgdXNlZCBieSBhdCBsZWFzdCBvbmUgd2F0Y2hlci5cclxuICovXHJcbmNsYXNzIENvbXB1dGVkVHJpZ2dlcjxUID0gYW55PiBleHRlbmRzIFRyaWdnZXI8VD4gaW1wbGVtZW50cyBJQ29tcHV0ZWRUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBUcmlnZ2VyRGVwdGguVmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgY3JlYXRlIHRoZSB3YXRjaGVyIHVudGlsIHRoZSBnZXQgbWV0aG9kIGlzIGNhbGxlZFxyXG4gICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjcmVhdGUgdGhlIHdhdGNoZXIgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBjcmVhdGVXYXRjaGVyKCB0aGlzLmZ1bmMsIHRoaXMucmVzcG9uZGVyLCB0aGlzLmZ1bmNUaGlzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YWxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mdW5jV2F0Y2hlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnVuYyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gb3VyIHdhdGNoZXIgaXMgbm90aWZpZWQgb2YgY2hhbmdlcyBpbiBpdHMgdHJpZ2dlciB2YWx1ZXMuIFdlXHJcbiAgICAgKiByZXNwb25kIGJ5IGludm9raW5nIHRoZSBmdW5jdGlvbiAodGhyb3VnaCB0aGUgd2F0Y2hlcikgYW5kIHNldHRpbmcgaXRzIHJldHVybiB2YWx1ZSBhc1xyXG4gICAgICogb3VyIG5ldyB2YWx1ZS4gVGhpcyBjYW4gdHJpZ2dlciBjaGFuZ2VzIGluIHdhdGNoZXJzIHRoYXQgYXJlIHVzaW5nIG91ciB2YWx1ZS4gTm90ZSB0aGF0XHJcbiAgICAgKiB3ZSBvbmx5IGludm9rZSBvdXIgd2F0Y2hlciBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgd2F0Y2hlciB0aGF0IHdhdGNoZXMgb3VyIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHN1cGVyLnNldCggdGhpcy5mdW5jV2F0Y2hlcigpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB3ZSB3aWxsIGJlIHdhdGNoaW5nXHJcbiAgICBwcml2YXRlIGZ1bmM6IE5vbmVUeXBlRnVuYzxUPjtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byB0aGUgd2F0Y2hlZCBmdW5jdGlvbiB3aGVuIGNhbGxpbmcgaXQuXHJcbiAgICBwcml2YXRlIGZ1bmNUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gV2F0Y2hlciBvdmVyIG91ciBmdW5jdGlvblxyXG4gICAgcHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI8Tm9uZVR5cGVGdW5jPFQ+PjtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGUgdmFsdWUgIGtlcHQgYnkgdGhlIHRyaWdnZXIgbWlnaHQgbm90IHJlZmxlY3QgdGhlIGFjdHVhbCBjb21wdXRlZFxyXG4gICAgLy8gdmFsdWUuIFRoaXMgZmxhZyBpcyB0cnVlIHVuZGVyIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcclxuICAgIC8vIDEuIFJpZ2h0IGFmdGVyIHRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZC4gV2UgZG9uJ3QgZXZlbiBjcmVhdGUgdGhlIHdhdGNoZXIgYmVjYXVzZSB3ZVxyXG4gICAgLy8gICAgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAvLyAyLiBXaGVuIHRoZSByZXNwb25kZXIgaGFzIGJlZW4gaW52b2tlZCwgYnV0IG91ciB0cmlnZ2VyIGRpZG4ndCBoYXZlIGFueSB3YXRjaGVyLiBBZ2Fpbiwgd2VcclxuICAgIC8vICAgIHdpbGwgd2FpdCB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICBwcml2YXRlIGlzU3RhbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE11dGF0b3JzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTXV0YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIG9iamVjdCB0aGF0IHdyYXBzIGEgZnVuY3Rpb24gYW5kIGhhcyB0aGUgc2FtZVxyXG4gKiBzaWduYXR1cmUgYXMgdGhpcyBmdW5jdGlvbi4gV2hlbiBhIHdhdGNoZXIgaXMgY2FsbGVkIGl0IGNhbHMgdGhlIHdyYXBwZWQgZnVuY3Rpb24gYW5kIGF0dGFjaGVzXHJcbiAqIHRvIGFsbCB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgd2VyZSByZWFkIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjYWxsLiBXaGVuIHZhbHVlcyBvZiB0aGVzZVxyXG4gKiB0cmlnZ2VycyBjaGFuZ2UsIGEgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhlIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aGVuIHRoZVxyXG4gKiB3YXRjaGVyIGlzIGNyZWF0ZWQsIGJ1dCBpdCBjYW4gYmUgY2hhbmdlZCBsYXRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+IGV4dGVuZHMgSURpc3Bvc2VyXHJcbntcclxuICAgIC8qKiBUaGlzIGlzIGEgY2FsbGFibGUgaW50ZXJmYWNlLCB3aGljaCBpcyBpbXBsZW1lbnQgYXMgYSBmdW5jdGlvbi4gKi9cclxuICAgICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KTogUmV0dXJuVHlwZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgbXV0YXRvciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIG11dGF0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltTXV0YXRvciA9IFN5bWJvbCggXCJzeW1NdXRhdG9yXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG11dGF0b3IgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXNcclxuICogdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2l0aGluIGEgbXV0YXRpb24gc2NvcGUuIFdhdGNoZXJzIGZvciB0cmlnZ2VycyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzXHJcbiAqIGNoYW5nZWQgZHVyaW5nIGV4ZWN1dGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFyZSBub3Qgbm90aWZpZWQgaW1tZWRpYXRlbHkuIEluc3RlYWQsIHRoZSB3YXRjaGVyc1xyXG4gKiBhcmUgXCJkZWZlcnJlZFwiIGFuZCB3aWxsIGJlIG5vdGlmaWVkIG9ubHkgb25jZSBhZnRlciB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVGhpcyBjYW4gYmVcclxuICogdXNlZnVsIHNpbmNlIHVzdWFsbHkgd2F0Y2hlcnMgZGVwZW5kIG9uIG1hbnkgdHJpZ2dlcnMgYW5kIHdlIGRvbid0IHdhbnQgdGhlIHdhdGNoZXJzIGJlaW5nXHJcbiAqIG5vdGlmaWVkIG1hbnkgdGltZSBidXQgcmF0aGVyIG9ubHkgb25jZSBhZnRlciBhbGwgdGhlIGNoYW5nZXMgaGF2ZSBiZWVuIGRvbmUuXHJcbiAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGFyb3VuZCB3aGljaCB0byBlc3RhYmxpc2ggYSBtdXRhdGlvbiBzY29wZS4gSWYgdGhpcyBpcyBhIGNsYXNzIG1ldGhvZCxcclxuICogdGhlbiBlaXRoZXIgcHJvdmlkZSB0aGUgZnVuY1RoaXMgcGFyYW1ldGVyIG9yIGJpbmQgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IGluLiBOb3RlXHJcbiAqIHRoYXQgYXJyb3cgZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGJvdW5kLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgVGhlIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24uIFRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZVxyXG4gKiBmdW5jdGlvbiBpcyBhbiB1bmJvdW5kY2xhc3MgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmM+KCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSk6IElNdXRhdG9yPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIG11dGF0b3JGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG11dGF0b3I6IFdhdGNoZXIgPSBtdXRhdG9yRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIG11dGF0b3IuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbXV0YXRvciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXSA9IG5ldyBNdXRhdG9yKCBmdW5jLCBmdW5jVGhpcyk7XHJcblxyXG4gICAgLy8gaW1wbGVtZW50IHRoZSBkaXNwb3NlIG1ldGhvZFxyXG4gICAgKG11dGF0b3JGdW5jIGFzIElNdXRhdG9yKS5kaXNwb3NlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yID0gbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gYXMgV2F0Y2hlcjtcclxuICAgICAgICBtdXRhdG9yICYmIG11dGF0b3IuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBtdXRhdG9yRnVuY1tzeW1NdXRhdG9yXTtcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIG11dGF0b3JGdW5jIGFzIElXYXRjaGVyPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXV0YXRvciBjbGFzcyBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgZXhlY3V0aW5nIGEgd3JhcHBlZCBmdW5jdGlvbiB1bmRlciBhXHJcbiAqIG11dGF0aW9uIHNjb3BlLlxyXG4gKi9cclxuY2xhc3MgTXV0YXRvcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIGZ1bmNUaGlzPzogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGluIGEgbXV0YXRpb24gc2NvcGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKCBmdW5jVGhpczogYW55LCBhcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3VyIHdhdGNoZXIgaGFzIGJlZW4gYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiRGlzcG9zZWQgbXV0YXRvciB3YXMgY2FsbGVkLlwiKTtcclxuXHJcbiAgICAgICAgLy8gRml4IG91ciBcInRoaXNcIiBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgc28gZmFyXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNUaGlzICYmIGZ1bmNUaGlzKVxyXG4gICAgICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICB0cnkgeyByZXR1cm4gdGhpcy5mdW5jLmFwcGx5KCB0aGlzLmZ1bmNUaGlzLCBhcmdzKTsgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBnX21hbmFnZXIuZXhpdE11dGF0aW9uU2NvcGUoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBmdW5jIGFuZCByZXNwb25kZXIgcHJvcGVydGllcyB0byBudWxsIHRvIGluZGljYXRlIHRoYXQgdGhlIHdhdGNoZXIgaGFzIGJlZW4gZGlzcG9zZWRcclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmlnZ2VyaXppbmcgY29udGFpbmVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGdpdmVuIHRyaWdnZXIgZGVwdGggYW5kIG9uIHRoZSB2YWx1ZSB0eXBlLCBlaXRoZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBpZlxyXG4gKiBpdCBpcyBhIGNvbnRhaW5lciAob2JqZWN0LCBhcnJheSwgbWFwIG9yIHNldCksIHJldHVybnMgYSBwcm94eSB0byB0aGUgdmFsdWUgdGhhdCBrbm93cyB0b1xyXG4gKiBub3RpZnkgcmVhZCBhbmQgY2hhbmdlIHdoZW4gaXRzIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlIGludm9rZWQuXHJcbiAqIEBwYXJhbSB2IFZhbHVlIHRvIGNvbnZlcnQgaWYgbmVjZXNzYXJ5XHJcbiAqIEBwYXJhbSB0cmlnZ2VyIFRyaWdnZXIgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gcmVhZCBvciBjaGFuZ2UgZXZlbnRzIG9jY3VyIGluIHRoZSBjb252ZXJ0ZWRcclxuICogdmFsdWVzXHJcbiAqIEBwYXJhbSBkZXB0aCBUaGUgZGVwdGggb24gdGhlIGxldmVsIChzdGFydGluZyBmcm9tIHRoZSB0cmlnZ2VyKXRoYXQgY2FsbGVkIHRoaXMgZnVuY3Rpb24uXHJcbiAqIElmIHRoaXMgcGFyYW1ldGVyIGlzIDAsIG5vIGNvbnZlcnNpb24gb2NjdXJzIGFuZCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQgYXMgaXMuIFdoZW4gdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBjYWxsZWQgZnJvbSB0aGUgdHJpZ2dlciwgdGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVuZGVmaW5lZDogaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIGFzc2lnbiB0aGVcclxuICogZGVwdGggZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZS4gQXJyYXlzLCBtYXBzIGFuZCBzZXRzIGdldCBkZXB0aHMgb2YgU2hhbGxvdygxKSxcclxuICogbWVhbmluZyB0aGF0IG9wZXJhdGlvbnMgdGhhdCBhZGQgb3IgcmVtb3ZlIGl0ZW1zIHdpbGwgdHJpZ2dlciBldmVudHMsIGJ1dCBtb2RpZmljYXRpb25zIHRvIHRoZVxyXG4gKiBpdGVtcyB3aWxsIG5vdC4gT2JqZWN0cyBnZXQgdGhlIGRlcHRoIG9mIERlZXAgKDEwMDApLCB3aGljaCBlc3NlbnRpYWxseSBtZWFucyB0aGF0IGFueSBjaGFuZ2VzXHJcbiAqIHRvIHRoZSBvYmplY3QgcHJvcGVydGllcyBvbiBhbnkgbGV2ZWwgd2lsbCB0cmlnZ2VyIGV2ZW50cy5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJyaXplPFQgPSBhbnk+KCB2OiBULCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aD86IG51bWJlcik6IFRcclxue1xyXG4gICAgaWYgKCF2IHx8IGRlcHRoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTWFwSGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2IGluc3RhbmNlb2YgU2V0KVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoIHYsIG5ldyBTZXRIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT09IE9iamVjdClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLkRlZXApIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IGhhbmRsZXJzLlxyXG4gKi9cclxuY2xhc3MgTm9uU2xvdENvbnRhaW5lckhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSwgcmVjZWl2ZXI6IGFueSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KCB0YXJnZXQsIHByb3AsIHRyaWdnZXJyaXplKCB2YWx1ZSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeUNoYW5nZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCBhdHRyczogUHJvcGVydHlEZXNjcmlwdG9yKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgcHJvcCwgYXR0cnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0YXJnZXQsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXh0ZW5zaWJsZSggdGFyZ2V0OiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oIFJlZmxlY3QuZW51bWVyYXRlKCB0YXJnZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvd25LZXlzKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gVGhlIHRyaWdnZXIgb2JqZWN0IHdoaWNoIHNob3VsZCBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gaXRzIHdhdGNoZXJzIHdoZW4gcmVhZHMgb3IgY2hhbmdlc1xyXG4gICAgLy8gb2NjdXIgXHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogVHJpZ2dlcjtcclxuXHJcbiAgICAvLyBOdW1iZXIgaW5kaWNhdGluZyB0byB3aGF0IGxldmVsIHRoZSBpdGVtcyBvZiBjb250YWluZXIgdHlwZXMgc2hvdWxkIGJlIHRyaWdnZXJyaXplZC5cclxuICAgIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBhcnJheXMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBBcnJheUhhbmRsZXIgZXh0ZW5kcyBOb25TbG90Q29udGFpbmVySGFuZGxlclxyXG4vLyB7XHJcbi8vICAgICBnZXQoIHRhcmdldDogQXJyYXk8YW55PiwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4vLyAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEhhbmRsZXIgZm9yIG9uIHBsYWluIG9iamVjdHMuXHJcbi8vICAqL1xyXG4vLyBjbGFzcyBPYmplY3RIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuLy8gICAgIHtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzaGFsbG93IE1hcC9TZXQgaGFuZGxlcnMuIE1ldGhvZHMgd2hvc2UgbmFtZXMgd2VyZSBzdXBwbGllZCBpbiB0aGUgY29uc3RydWN0b3IsXHJcbiAqIG5vdGlmeSBjaGFuZ2U7IGFsbCBvdGhlciBtZXRob2RzIG5vdGlmeSByZWFkLlxyXG4gKiBcclxuICogRm9yIE1hcCBhbmQgU2V0IGluIG9yZGVyIHRvIGJlIHByb3hpZWQsIHRoZSBtZXRob2RzIHJldHVybmVkIGZyb20gZ2V0KCkgbXVzdCBiZVxyXG4gKiBib3VuZCB0byB0aGUgdGFyZ2V0LiBTZWUgaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vcHJveHkjYnVpbHQtaW4tb2JqZWN0cy1pbnRlcm5hbC1zbG90cy5cclxuICovXHJcbmNsYXNzIFNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PiwgZGVwdGg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICAgIHRoaXMubXV0YXRvck1ldGhvZE5hbWVzID0gbXV0YXRvck1ldGhvZE5hbWVzO1xyXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBjb250YWluZXIgbWV0aG9kcyBhbmQgcHJvcGVydGllcy4gV2UgYWx3YXlzIG5vdGlmeSByZWFkIGFuZCB3ZSB3cmFwIG1ldGhvZHMgaW5cclxuICAgIC8vIGZ1bmN0aW9ucyB0aGF0IHdoZW4gY2FsbGVkIHdpbGwgbm90aWZ5IGVpdGhlciByZWFkIG9yIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGVcclxuICAgIC8vIG1ldGhvZCBpcyBhIG11dGF0b3IuXHJcbiAgICBnZXQoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcblxyXG4gICAgICAgIC8vIGluIHRoaXMgY29udGV4dCBcInRoaXNcIiBpcyB0aGUgaGFuZGxlcjsgaG93ZXZlciwgd2hlbiB0aGUgbWV0aG9kcyB3ZSByZXR1cm4gYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHRoZSBcInRoaXNcIiB3aWxsIGJlIHRoZSBQcm94eSBvYmplY3QuIFRoZXJlZm9yZSwgd2Ugd2FudCB0aGVzZSBtZXRob2RzIHRvIGNhcHR1cmUgYW5kXHJcbiAgICAgICAgLy8gdXNlIHRoZSBoYW5kbGVyIG9iamVjdC5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBtZXRob2QgaXMgYWxyZWFkeSBpbiBvdXIgaW50ZXJuYWwgbWFwXHJcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMud3JhcHBlZE1ldGhvZHMuZ2V0KCBwcm9wKTtcclxuICAgICAgICBpZiAoIW1ldGhvZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgdGFyZ2V0XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gdGFyZ2V0W3Byb3BdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BWYWwgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCB0aGUgb3JpZ2luYWwgbWV0aG9kIHRvIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBvcmdCb3VuZE1ldGhvZCA9IHByb3BWYWwuYmluZCggdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGF0b3JNZXRob2ROYW1lcy5oYXMocHJvcCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBtdXRhdG9yIG1ldGhvZHMgd2UgY3JlYXRlIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgaW52b2tlcyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXIgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2gga25vd3MgYWJvdXQgdGhlIHN0cnVjdHVyZSBvZiB0aGUgYXJndW1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2lsbCBjcmVhdGUgcHJveGllcyBmb3IgdGhlIGFwcHJvcHJpYXRlIG9iamVjdHMgaWYgbmVlZGVkLiBUaGlzIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgYWxzbyBpbmRpY2F0ZSB3aGV0aGVyIGFuIGFjdHVhbCBjaGFuZ2Ugb2NjdXJzIHNvIHRoYXQgd2UgY2FuIG5vdGlmeSBhYm91dCBpdC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldDogW2FueSwgYm9vbGVhbl0gPSBoYW5kbGVyLmNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQsIHByb3AsIG9yZ0JvdW5kTWV0aG9kLCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG9yZ0JvdW5kTWV0aG9kKCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub24tbXV0YXRvciBtZXRob2RzLCB3ZSBub3RpZnkgdGhlIHJlYWQgYW5kIGludm9rZSB0aGUgb3JpZ2luYWwgbWV0aG9kLlxyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZnVuY3Rpb24oKTogYW55IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlZE1ldGhvZHMuc2V0KCBwcm9wLCBtZXRob2QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCB0aGF0IG11c3QgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgZGVyaXZlZCBjbGFzc2VzIGFuZCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZ1xyXG4gICAgICogYSBtdXV0YXRvciBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHBhcmFtIG9yZ01ldGhvZCBcclxuICAgICAqIEBwYXJhbSBhcmdzIFR3byBlbGVtZW50IHR1cGxlIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSByZXR1cm4gdmFsdWUgYW5kIHRoZSBzZWNvbmRcclxuICAgICAqIGVsZW1lbnQgaXMgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY29udGFpbmVyIGhhcyBjaGFuZ2VkLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FsbE9yZ011dGF0b3JNZXRob2QoIHRhcmdldDogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSwgb3JnTWV0aG9kOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBbYW55LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBbdW5kZWZpbmVkLGZhbHNlXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBTZXQgb2YgbWV0aG9kIG5hbWVzLCB3aGljaCBtdXRhdGUgdGhlIGNvbnRhaWVyLiBBbGwgb3RoZXIgbWV0aG9kcyBvbmx5IHJlYWQgZnJvbSBpdC5cclxuICAgIHByaXZhdGUgbXV0YXRvck1ldGhvZE5hbWVzOiBTZXQ8UHJvcGVydHlLZXk+O1xyXG5cclxuICAgIC8vIFRoaXMgbWFwIGtlZXBzIGFscmVhZHkgd3JhcHBlZCBtZXRob2RzIHNvIHRoYXQgd2UgZG9uJ3QgZG8gYmluZGluZyBtb3JlIHRoYW4gb25jZS4gXHJcbiAgICBwcml2YXRlIHdyYXBwZWRNZXRob2RzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSxGdW5jdGlvbj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3IgbWFwcy5cclxuICovXHJcbmNsYXNzIE1hcEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJjbGVhclwiLCBcImRlbGV0ZVwiLCBcInNldFwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIE1hcEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIG1hcC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInNldFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gW29yZ01ldGhvZCggYXJnc1swXSwgdHJpZ2dlcnJpemUoIGFyZ3NbMV0sIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCkpLCB0cnVlXTtcclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3Igc2V0cy5cclxuICovXHJcbmNsYXNzIFNldEhhbmRsZXIgZXh0ZW5kcyBTbG90Q29udGFpbmVySGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXRhdG9yTWV0aG9kTmFtZXMgPSBuZXcgU2V0PFByb3BlcnR5S2V5PihbXCJhZGRcIiwgXCJkZWxldGVcIiwgXCJjbGVhclwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHRyaWdnZXIsIFNldEhhbmRsZXIubXV0YXRvck1ldGhvZE5hbWVzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRzIHNldC1zcGVjaWZpYyBtdXRhdG9yIG1ldGhvZHMuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IE1hcDxhbnksYW55PiwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJhZGRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIHRyaWdnZXJyaXplKCBhcmdzWzBdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJjbGVhclwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IHRhcmdldC5zaXplID4gMDtcclxuICAgICAgICAgICAgb3JnTWV0aG9kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbdW5kZWZpbmVkLCBpc0NoYW5nZWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImRlbGV0ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWQgPSBvcmdNZXRob2QoIGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlbGV0ZWQsIGRlbGV0ZWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVjb3JhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIHByb3BlcnRpZXMgc28gdGhhdCBjaGFuZ2luZyB0aGVpciB2YWx1ZSB3aWxsIGFueSB3YXRjaGVyXHJcbiAqIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhlbSB0byByZXNwb25kLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXJgIGRlc2lnbmF0ZXMgYSBkZWZhdWx0IHRyaWdnZXIgZGVjb3JhdG9yLCB3aG9zZSBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkXHJcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgdHlwZTogU2hhbGxvdyBmb3IgYXJyYXlzLCBtYXBzIGFuZCBzZXRzIGFuZCBEZWVwIGZvciBvYmplY3RzLlxyXG4gKiBUaGUgZm9ybSBgQHRyaWdnZXIobilgIGRlc2lnbmF0ZXMgYSB0cmlnZ2VyIGRlY29yYXRvciBmYWN0b3J5IHdpdGggdGhlIHNwZWNpZmllZCBkZXB0aC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKCB0YXJnZXRPckRlcHRoOiBhbnksIG5hbWU/OiBzdHJpbmcpOiBhbnlcclxue1xyXG4gICAgaWYgKHR5cGVvZiB0YXJnZXRPckRlcHRoID09PSBcIm51bWJlclwiKVxyXG4gICAge1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSBudW1iZXIgdGhhdCBpdCBpcyBhbiBleHBsaWNpdGx5IHNwZWNpZmllZCBkZXB0aCB1c2luZ1xyXG4gICAgICAgIC8vIGRlY29yYXRvciBmYWN0b3J5LlxyXG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyLmJpbmQoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdW5kZWZpbmVkIGRlcHRoIG1lYW5zIHRoYXQgdGhhdCB0aGUgYWN0dWFsIGRlcHRoIHdpbGwgYmUgYXNzaWduZWQgZGVwZW5kaWcgb24gdGhlXHJcbiAgICAgICAgLy8gdmFsdWUgb2YgdGhlIHRyaWdnZXI6IFNoYWxsb3cgZm9yIG1hcHMsIHNldHMgYW5kIGFycmF5cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlciggdW5kZWZpbmVkLCB0YXJnZXRPckRlcHRoLCBuYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBgQHRyaWdnZXJgIGRlY29yYXRvcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyRGVjb3JhdG9ySGVscGVyKCBkZXB0aDogbnVtYmVyLCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKCBuYW1lICsgXCJfdHJpZ2dlclwiKTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZVRyaWdnZXIoIGRlcHRoLCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT2JqLnNldCggdmFsKVxyXG4gICAgICAgIH0sXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgXCJnZXRcIiBwcm9wZXJ0aWVzIG9yIGZ1bmN0aW9ucyByZXR1bmluZyBhIHZhbHVlIHNvIHRoYXQgdGhpc1xyXG4gKiB2YWx1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgcmVjYWxjdWxhdGVkIGlmIGFueSB0cmlnZ2VycyBvbiB3aGljaCB0aGlzIHZhbHVlIGRlcGVuZHMgaGF2ZSB0aGVpclxyXG4gKiB2YWx1ZXMgY2hhbmdlZC4gV0hlbiB0aGlzIGhhcHBlbnMsIHRoZSB3YXRjaGVyIG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBjb21wdXRlZCB2YWx1ZSB3aWxsXHJcbiAqIGJlIG5vdGlmaWVkIHRvIHJlc3BvbmQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIHByb3BEZXNjcjogUHJvcGVydHlEZXNjcmlwdG9yKVxyXG57XHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUpO1xyXG5cclxuICAgIC8vIHByb3BEZXNjLnZhbHVlIGlzIHVuZGVmaW5lZCBmb3IgYWNjZXNzb3JzIGFuZCBkZWZpbmVkIGZvciBmdW5jdGlvbnNcclxuICAgIGlmICghcHJvcERlc2NyLnZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghcHJvcERlc2NyLmdldClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQGNvbXB1dGVkIHByb3BlcnR5IHJlcXVpcmVzIGdldCgpIGFjY2Vzc29yXCIpO1xyXG5cclxuICAgICAgICBsZXQgb3JnR2V0ID0gcHJvcERlc2NyLmdldDtcclxuICAgICAgICBwcm9wRGVzY3IuZ2V0ID0gZnVuY3Rpb24oKTogYW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHJpZ2dlck9iaiA9IHRoaXNbc3ltXSBhcyBJQ29tcHV0ZWRUcmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJPYmopXHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSB0cmlnZ2VyT2JqID0gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyKCBvcmdHZXQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcERlc2NyLnNldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcmdTZXQgPSBwcm9wRGVzY3Iuc2V0O1xyXG4gICAgICAgICAgICBwcm9wRGVzY3Iuc2V0ID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ19tYW5hZ2VyLmVudGVyTXV0YXRpb25TY29wZSgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHsgb3JnU2V0LmNhbGwoIHRoaXMsIHYpOyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JnRnVuYyA9IHByb3BEZXNjci52YWx1ZTtcclxuICAgICAgICBwcm9wRGVzY3IudmFsdWUgPSBmdW5jdGlvbiggdjogYW55KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENvbXBhcmVzIHRoZSB0d28gZ2l2ZW4gdmFsdWVzIGdvaW5nIGRvd24gdG8gdGhlaXIgcHJvcGVydGllcyBpZiB0aGVzZSBhcmUgYXJyYXlzIG9yIG9iamVjdHNcclxuICogQHBhcmFtIG8xIFxyXG4gKiBAcGFyYW0gbzIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19kZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbcF0sIG8yW3BdKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEocCBpbiBvMSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkpXHJcblx0e1xyXG5cdFx0aWYgKG8xLmxlbmd0aCAhPT0gbzIubGVuZ3RoKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSAwLCBsZW4gPSBvMS5sZW5ndGg7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghc19kZWVwQ29tcGFyZSggbzFbaV0sIG8yW2ldKSlcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgaWYgdGhlc2UgYXJlIHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zIG9yIGZ1bmN0aW9ucyBhbmQgdGhleSBhcmUgZGlmZmVyZW50XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaE9iamVjdCggbzogYW55KTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAobyA9PT0gdW5kZWZpbmVkKVxyXG4vLyBcdFx0cmV0dXJuIDA7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gbnVsbClcclxuLy8gXHRcdHJldHVybiAxO1xyXG4vLyBcdGVsc2UgaWYgKGlzTmFOKDApKVxyXG4vLyBcdFx0cmV0dXJuIDI7XHJcbi8vIFx0ZWxzZSBpZiAobyA9PT0gdHJ1ZSlcclxuLy8gXHRcdHJldHVybiAzO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IGZhbHNlKVxyXG4vLyBcdFx0cmV0dXJuIDQ7XHJcblxyXG4vLyBcdGxldCBoID0gMTA7XHJcblxyXG4vLyBcdGlmICh0eXBlb2YgbyA9PT0gXCJudW1iZXJcIilcclxuLy8gXHRcdHJldHVybiAxMCArIG87XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpXHJcbi8vIFx0XHRyZXR1cm4gaGFzaFN0cmluZyggbyk7XHJcbi8vIFx0ZWxzZSBpZiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIilcclxuLy8gXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvLm5hbWUpO1xyXG4vLyBcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobykpXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGxlbiA9IG8ubGVuZ3RoO1xyXG4vLyBcdFx0bGV0IGggPSAxMCArIGxlbjtcclxuLy8gXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbi8vIFx0XHRcdCBoICs9IGkgKyBoYXNoT2JqZWN0KCBvW2ldKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gXHRlbHNlXHJcbi8vIFx0e1xyXG4vLyBcdFx0bGV0IGggPSAxMDtcclxuLy8gXHRcdGZvciggbGV0IHAgaW4gbylcclxuLy8gXHRcdFx0aCArPSBoYXNoU3RyaW5nKHApICsgaGFzaE9iamVjdChvW3BdKTtcclxuLy8gXHRcdHJldHVybiBoO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFzaFN0cmluZyggczogc3RyaW5nKTogbnVtYmVyXHJcbi8vIHtcclxuLy8gXHRpZiAoIXMpXHJcbi8vIFx0XHRyZXR1cm4gNTtcclxuXHJcbi8vIFx0bGV0IGxlbiA9IHMubGVuZ3RoO1xyXG4vLyBcdGxldCBoID0gMTAgKyBsZW47XHJcbi8vIFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuLy8gXHRcdGggKz0gcy5jaGFyQ29kZUF0KGkpO1xyXG4vLyBcdHJldHVybiBoO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2lzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gXCJvd25lclNWR0VsZW1lbnRcIiBpbiAoZWxtIGFzIGFueSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyB0aGUgPHN2Zz4gZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSAgRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIGVsbS50YWdOYW1lID09PSBcInN2Z1wiO1xyXG5cdC8vIHJldHVybiAoZWxtIGFzIGFueSkub3duZXJTVkdFbGVtZW50ID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1jc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9