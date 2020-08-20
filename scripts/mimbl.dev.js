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

/***/ "./lib/comp/Popups.js":
/*!****************************!*\
  !*** ./lib/comp/Popups.js ***!
  \****************************/
/*! exports provided: DefaultPopupStyles, Popup, DefaultDialogStyles, Dialog, MsgBoxStyles, MsgBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPopupStyles", function() { return DefaultPopupStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDialogStyles", function() { return DefaultDialogStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBoxStyles", function() { return MsgBoxStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBox", function() { return MsgBox; });
/* harmony import */ var _api_mim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/mim */ "./lib/api/mim.js");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/UtilAPI */ "./lib/api/UtilAPI.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal */ "./lib/internal.js");
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
        this.onMove = (e) => {
            this.move(e.clientX - this.movePointOffsetX, e.clientY - this.movePointOffsetY);
        };
        this.onStopMove = (e) => {
            this.stopMove();
        };
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
    }
    /**
     * Displays the popup as a modeless dialog and returns a promise that is resolved when the
     * popup is closed. The resolved value of the promise is the value passed to the close()
     * method.  The method will throw an exception if the popup is already open as a modeless
     * popup.
     */
    showModal() {
        if (this.isOpen)
            return Promise.reject(new Error("Popup already open"));
        this._returnValue = undefined;
        this.create();
        this.dlg.showModal();
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
        this.dlg.close();
        this.destroy();
        this._returnValue = returnValue;
        if (this.modalPromise) {
            this.modalPromise.resolve(returnValue);
            this.modalPromise = undefined;
        }
    }
    /**
     * Determines whether the popup is currently open.
     */
    get isOpen() {
        return this.dlg != null;
    }
    /**
     * Determines whether the dialog is currently open as modeless.
     */
    isModeless() {
        return this.isOpen && !this.modalPromise;
    }
    /**
     * Determines whether the dialog is currently open as modal.
     */
    isModal() {
        return this.isOpen && this.modalPromise != null;
    }
    /**
     * Returns the value set by the close() method. If the popup is open, the value is undefined.
     */
    get returnValue() {
        return this._returnValue;
    }
    /**
     * Replaces the current content of the popup with the given one.
     * @param content
     */
    setContent(content) {
        this.content = content;
    }
    /**
     * Gets or sets the flag determining whether the popup is currently visible or hidden.
     */
    get isVisible() {
        return this._isVisible;
    }
    set isVisible(v) {
        this._isVisible = v;
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
        window.addEventListener("mousemove", this.onMove);
        window.addEventListener("mouseup", this.onStopMove);
    }
    /**
     * Stops monitoring mouse movements. This method allows programmatically interrupt
     * dialog moving operations.
     */
    stopMove() {
        if (!this.dlg)
            return;
        window.removeEventListener("mousemove", this.onMove);
        window.removeEventListener("mouseup", this.onStopMove);
        this.movePointOffsetX = this.movePointOffsetY = 0;
    }
    ;
    /**
     * Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
     * some part of the dialog at the top-left corner remains visible in order to the user to be
     * able to continue moving it.
     */
    moveTo(newX, newY) {
        this.move(newX, newY);
        this.dlg.style.margin = "0";
    }
    ;
    /**
     * If deribed classes override this method, they must call super.willMount()
     */
    willMount() {
        this.vn.publishService("popup", this);
    }
    ;
    /**
     * If deribed classes override this method, they must call super.willUnmount()
     */
    willUnmount() {
        this.vn.unpublishService("popup");
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
        // deactivate styles
        mimcss__WEBPACK_IMPORTED_MODULE_1__["activate"](this.defaultStyles);
        this.defaultStyles = null;
        if (this.optionalStyles) {
            mimcss__WEBPACK_IMPORTED_MODULE_1__["deactivate"](this.optionalStyles);
            this.optionalStyles = null;
        }
        // remove the dialog element
        this.dlg.remove();
        this.dlg = null;
        this.anchorElement = null;
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
            backgroundColor: "blue",
            color: "white",
            // boxShadow: { x: 0, y: 4, blur: 2, color: "blue" },
            padding: 0.3,
        });
        this.dialogBody = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: 0.5,
        });
        this.dialogButtonBar = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            backgroundColor: "lightgrey",
            padding: [0.7, 1.01],
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        });
        this.dialogButton = mimcss__WEBPACK_IMPORTED_MODULE_1__["$class"]({
            padding: 0.4,
            marginInlineStart: 1.01,
            minWidth: 6.5
        });
    }
}
/**
 * The Dialog class is a popup that divides the popup area into three sections: caption, body and
 * button bar.
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
     * Returns the default style definition instance or class
     */
    getDefaultStyles() {
        return DefaultDialogStyles;
    }
    ;
    /**
     * If deribed classes override this method, they must call super.willMount()
     */
    willMount() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super.willMount();
        // obtain class names for our elements
        this.captionClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_a = this.options) === null || _a === void 0 ? void 0 : _a.dialogCaption, (_b = this.optionalStyles) === null || _b === void 0 ? void 0 : _b.dialogCaption, this.defaultStyles.dialogCaption);
        this.bodyClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_c = this.options) === null || _c === void 0 ? void 0 : _c.dialogBody, (_d = this.optionalStyles) === null || _d === void 0 ? void 0 : _d.dialogBody, this.defaultStyles.dialogBody);
        this.buttonBarClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_e = this.options) === null || _e === void 0 ? void 0 : _e.dialogButtonBar, (_f = this.optionalStyles) === null || _f === void 0 ? void 0 : _f.dialogButtonBar, this.defaultStyles.dialogButtonBar);
        this.buttonClassName = mimcss__WEBPACK_IMPORTED_MODULE_1__["chooseClass"]((_g = this.options) === null || _g === void 0 ? void 0 : _g.dialogButton, (_h = this.optionalStyles) === null || _h === void 0 ? void 0 : _h.dialogButton, this.defaultStyles.dialogButton);
        this.vn.publishService("dialog", this);
    }
    ;
    /**
     * If deribed classes override this method, they must call super.willUnmount()
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
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.captionClassName, mousedown: this.onCaptionMouseDown }, this.captionContent);
    }
    renderBody() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.bodyClassName }, this.content);
    }
    renderButtons() {
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.buttonBarClassName }, Array.from(this.buttons.values()).map(info => _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("button", { id: info.btn.id, class: this.buttonClassName, click: () => this.onButtonClicked(info) }, info.btn.content)));
    }
    onCaptionMouseDown(e) {
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
            alignItems: "stretch",
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
    static showModal(message, title, buttons = 1 /* OK */, icon = 0 /* None */) {
        let msgBox = new MsgBox(message, title, buttons, icon);
        return msgBox.showModal();
    }
    renderBody() {
        let { char, color } = this.getIconClassAndColor();
        return _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.container },
            char &&
                _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { class: this.optionalStyles.icon, style: { color } }, char),
            _api_mim__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.optionalStyles.text }, this.content));
    }
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
            case 2 /* Warning */: return { char: "!", color: "orange" };
            case 3 /* Error */: return { char: "X", color: "red" };
            case 4 /* Question */: return { char: "?", color: "green" };
            default: return {};
        }
    }
    createButton(text, key) {
        this.addButton({
            id: key,
            content: text,
            returnValue: key
        });
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPromiseEx", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["createPromiseEx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defer", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_2__["Defer"]; });

/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/HtmlTypes */ "./lib/api/HtmlTypes.js");
/* harmony import */ var _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__) if(["default","mimblStyleSchedulerType","EventSlot","SimpleEventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg","createPromiseEx","Defer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_HtmlTypes__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/SvgTypes */ "./lib/api/SvgTypes.js");
/* harmony import */ var _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__) if(["default","mimblStyleSchedulerType","EventSlot","SimpleEventSlot","createMultiEventSlot","createTrigger","createWatcher","enterMutationScope","exitMutationScope","createComputedTrigger","createMutator","trigger","computed","isSvg","isSvgSvg","createPromiseEx","Defer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api_SvgTypes__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
/*! exports provided: s_deepCompare, s_isSvg, s_isSvgSvg, EventSlot, SimpleEventSlot, createMultiEventSlot, createTrigger, createWatcher, enterMutationScope, exitMutationScope, createComputedTrigger, createMutator, trigger, computed, ElmAttr, VNUpdateDisp, VNBase, ClassCompVN, IndependentCompVN, ManagedCompVN, ElmVN, FuncVN, FuncProxyVN, PromiseProxyVN, TextVN, RootVN, mountRoot, unmountRoot, s_initStyleScheduler, notifyServicePublished, notifyServiceUnpublished, notifyServiceSubscribed, notifyServiceUnsubscribed, s_currentVN, s_currentClassComp, wrapCallbackWithVN, requestNodeUpdate, scheduleFuncCall, createNodesFromJSX */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL1V0aWxBUEkudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL21pbS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb21wL1BvcHVwcy50c3giLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbUF0dHIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9FbG1WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0Z1bmNQcm94eVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1ZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvSW5kZXBlbmRlbnRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9NYW5hZ2VkQ29tcFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUHJvbWlzZVByb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9QdWJTdWIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9SZWNvbmNpbGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU3R5bGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9UZXh0Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL1ZOQmFzZS50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FdmVudFNsb3QudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVHJpZ2dlcldhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvdXRpbHMvVXRpbEZ1bmMudHMiLCJ3ZWJwYWNrOi8vbWltYmwvZXh0ZXJuYWwge1wicm9vdFwiOlwibWltY3NzXCIsXCJjb21tb25qczJcIjpcIm1pbWNzc1wiLFwiY29tbW9uanNcIjpcIm1pbWNzc1wiLFwiYW1kXCI6XCJtaW1jc3NcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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NEM7QUFDNUMsY0FBYztBQUNkLEtBQUs7QUFDTCxJQUFJO0FBSUosaURBQWlEO0FBQ2pELElBQUk7QUFDSixXQUFXO0FBQ1gsY0FBYztBQUVkLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsaUNBQWlDO0FBQ2pDLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsSUFBSTtBQUlKLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7R0FJRztBQUNJLFNBQVMsT0FBTyxDQUFFLEdBQVk7SUFFcEMsT0FBTyxpQkFBaUIsSUFBSyxHQUFXLENBQUM7QUFDMUMsQ0FBQztBQUlEOzs7R0FHRztBQUNJLFNBQVMsVUFBVSxDQUFFLEdBQVk7SUFFdkMsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztJQUM3QixnREFBZ0Q7QUFDakQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdklELG9EIiwiZmlsZSI6Im1pbWJsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWNzc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1jc3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltYmxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1jc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeShyb290W1wibWltY3NzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7c19pc1N2Zywgc19pc1N2Z1N2Z30gZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYW4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgb25lIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBTVkcgc3BlYzsgdGhhdCBpcywgPHN2Zz5cclxuICogb3IgYW55IG90aGVyIGZyb20gU1ZHLlxyXG4gKiBAcGFyYW0gZWxtIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gc19pc1N2ZyggZWxtKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIHRoZSA8c3ZnPiBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtICBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2Z1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIHNfaXNTdmdTdmcoIGVsbSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBQcm9taXNlIGNsYXNzIHdpdGggdGhlIHJlc29sdmUgYW5kIHJlamVjdCBtZXRob2RzIHNvIHRoYXQgdGhlIHByb21pc2UgY2FuXHJcbiAqIGJlIGNyZWF0ZWQgaW4gb25lIHBsYWNlIGFuZCByZXNvbHZlZCBvciByZWplY3RlZCBpbiBhIGRpZmZlcmVudCBwbGFjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VFeDxUID0gYW55PiA9IFByb21pc2U8VD4gJlxyXG4gICAge1xyXG4gICAgICAgIHJlc29sdmU6ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcclxuICAgICAgICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWRcclxuICAgIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIFByb21pc2Ugb2JqZWN0cyB0aGF0IGNhbiBiZSByZXNvbHZlZCBvciByZWplY3RlZCBleHRlcm5hbGx5LiBUaGUgcmV0dXJuZWQgUHJvbWlzZUV4XHJcbiAqIG9iamVjdCBoYXMgcmVzb2x2ZSBhbmQgcmVqZWN0IG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvbWlzZUV4PFQgPSBhbnk+KCk6IFByb21pc2VFeDxUPlxyXG57XHJcbiAgICBsZXQgdGVtcFJlc29sdmUsIHRlbXBSZWplY3Q7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KCBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB0ZW1wUmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgdGVtcFJlamVjdCA9IHJlamVjdDtcclxuICAgIH0pIGFzIFByb21pc2VFeDxUPjtcclxuXHJcbiAgICBwcm9taXNlLnJlc29sdmUgPSB0ZW1wUmVzb2x2ZTtcclxuICAgIHByb21pc2UucmVqZWN0ID0gdGVtcFJlamVjdDtcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBmdW5jdGlvbiB0byBjcmVhdGUgUHJvbWlzZSBvYmplY3RzIHRoYXQgY2FuIGJlIHJlc29sdmVkIG9yIHJlamVjdGVkIGV4dGVybmFsbHkuIFRoZSByZXR1cm5lZFxyXG4gKiBQcm9taXNlIG9iamVjdCBoYXMgcmVzb2x2ZSBhbmQgcmVqZWN0IG1ldGhvZHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGVmZXI8VCA9IGFueT4gZXh0ZW5kcyBQcm9taXNlPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlciggZnVuY3Rpb24ocmVzLCByZWopIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzO1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlajtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzb2x2ZTogKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1N0eWxlc2V0LCBJQ2xhc3NSdWxlLCBJQ2xhc3NOYW1lUnVsZSwgSUlEUnVsZSwgQ2xhc3NQcm9wVHlwZX0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7Y3JlYXRlTm9kZXNGcm9tSlNYLCB3cmFwQ2FsbGJhY2tXaXRoVk59IGZyb20gXCIuLi9jb3JlL1JlY29uY2lsZXJcIjtcclxuaW1wb3J0IHtQcm9wVHlwZSwgRWxtQXR0ciwgRXZlbnRTbG90LCBtb3VudFJvb3QsIHVubW91bnRSb290LCBGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbmFsIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGZ1bmN0aW9ucyByZXByZXNlbnRpbmcgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGdW5jQ29tcFR5cGU8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSAocHJvcHM6IEZ1bmNQcm9wczxUUHJvcHMsVENoaWxkcmVuPikgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB1c2VkIHRvIGRlZmluZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHR3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB3aXRoIHRoZXNlIHByb3BlcnRpZXMuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wUHJvcHM8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gPSBSZWFkb25seTxUUHJvcHM+ICZcclxuXHR7XHJcblx0XHRyZWFkb25seSBjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgZGVmaW5lcyBjb25zdHJ1Y3RvciBzaWduYXR1cmUgZm9yIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnRcclxuICpcdFx0b2YgdGhpcyB0eXBlLiBEZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQgb2YgdGhpcyB0eXBlLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50Q2xhc3M8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdG5ldyggcHJvcHM/OiBUUHJvcHMpOiBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cdHJlbmRlcigpOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYWxsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKlx0XHREZWZhdWx0IHR5cGUgaXMgYW4gZW1wdHkgb2JqZWN0IChubyBwcm9wZXJ0aWVzKS5cclxuICogQHR5cGVwYXJhbSBUQ2hpbGRyZW4gVHlwZSBkZWZpbmluZyBjb21wb25lbnRzLCBlbGVtZW50cyBvciBvdGhlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWRcclxuICpcdFx0YXMgY2hpbGRyZW4gZm9yIHRoaXMgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBDb21wb25lbnQgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLiBGb3IgbWFuYWdlZCBjb21wb25lbnRzLCB0aGUgcHJvcGVydGllc1xyXG5cdCAqIGNhbiBhbHNvIGJlIHNldCAoY2hhbmdlZCkgd2hlbiB0aGUgY29tcG9uZW50J3MgcGFyZW50IGlzIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0cHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudHMgY2FuIGRlZmluZSBkaXNwbGF5IG5hbWUgZm9yIHRyYWNpbmcgcHVycG9zZXM7IGlmIHRoZXkgZG9uJ3QgdGhlIGRlZmF1bHQgbmFtZVxyXG5cdCAqIHVzZWQgaXMgdGhlIGNvbXBvbmVudCdzIGNsYXNzIGNvbnN0cnVjdG9yIG5hbWUuIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGJlZm9yZVxyXG5cdCAqIHRoZSB2aXJ0dWFsIG5vZGUgaXMgYXR0YWNoZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cywgZ2V0cyBvciBjbGVhcnMgdGhlIHZpcnR1YWwgbm9kZSBvYmplY3Qgb2YgdGhlIGNvbXBvbmVudC4gVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdHdpY2U6XHJcblx0ICogIDEuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZTogdGhlIGNvbXBvbmVudCBtdXN0IHJlbWVtYmVyIHRoZVxyXG5cdCAqICAgIHBhc3NlZCBvYmplY3QuXHJcblx0ICogIDIuIEJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZDogbnVsbCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBjb21wb25lbnQgbXVzdFxyXG5cdCAqICAgIHJlbGVhc2UgdGhlIHJlbWVtYmVyZWQgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdHZuPzogSVZOb2RlO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHJlbmRlciBpdHMgY29udGVudCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgbWV0aG9kXHJcblx0ICogaXMgY2FsbGVkIHdoZW4gdGhlIHZpcnR1YWwgbm9kZSBoYXMgYWxyZWFkeSBiZWVuIHNldCBzbyB0aGUgY29tcG9uZW50IGNhbiByZXF1ZXN0IHNlcnZpY2VzXHJcblx0ICogZnJvbSBpdC5cclxuXHQgKi9cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIGNvbXBvbmVudCB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29tcG9uZW50IGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmQgdGhlIGNvbnRlbnQgb2YgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG9cclxuICAgIC8vIHRoZSBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBkaWRNb3VudD8oKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQncyBjb250ZW50IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuIEFmdGVyXHJcblx0ICogdGhpcyBtZXRob2QgcmV0dXJucyB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuXHQgKi9cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgY2FuIHJlYWQgRE9NIGxheW91dCBpbmZvcm1hdGlvbiAoZS5nLlxyXG5cdCAqIGVsZW1lbnQgbWVhc3VyZW1lbnRzKSB3aXRob3V0IHRoZSByaXNrIG9mIGNhdXNpbmcgZm9yY2VkIGxheW91dHMuXHJcblx0ICovXHJcblx0YmVmb3JlVXBkYXRlPygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgYWwgY29tcG9uZW50cyB0aGF0IGFyZSBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIGEgTWltYmwgdGljaywgYXJlIHVwZGF0ZWQuIElmIGltcGxlbWVudGVkLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZVxyXG5cdCAqIGNvbXBvbmVudCBpcyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFsbCBtb2RpZmljYXRpb25zIHRvXHJcblx0ICogRE9NIHJlc3VsdGluZyBmcm9tIHVwZGFpbmcgY29tcG9uZW50cyBoYXZlIGJlZW4gYWxyZWFkeSBkb25lLlxyXG5cdCAqL1xyXG5cdGFmdGVyVXBkYXRlPygpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IHVzZWQgYnkgbWFuYWdlZCBjb21wb25lbnRzLlxyXG5cdCAqIFxyXG5cdCAqIEluZm9ybXMgdGhlIGNvbXBvbmVudCB0aGF0IG5ldyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBzcGVjaWZpZWQuIEF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcblx0ICogdGhpcy5wcm9wcyByZWZlcnMgdG8gdGhlIFwib2xkXCIgcHJvcGVydGllcy4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zIHRydWUsdGhlbiBpdHMgcmVuZGVyXHJcblx0ICogbWV0aG9kIHdpbGwgYmUgY2FsbGVkLiBBdCB0aGF0IHRpbWUsdGhlIG9yaWdpbmFsIHByb3BzIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGVcclxuXHQgKiBjb21wb25lbnQncyBjb25zdHJ1Y3RvciB3aWxsIGhhdmUgdGhlc2UgbmV3IHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBpbXBsZW1lbnRcclxuXHQgKiB0aGUgc2hvdWxkVXBkYXRlIG1ldGhvZCBpdCBpcyBhcyB0aG91Z2ggdHJ1ZSBpcyByZXR1cm5lZC4gSWYgdGhlIGNvbXBvbmVudCByZXR1cm5zXHJcblx0ICogZmFsc2UsIHRoZSByZW5kZXIgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYW5kIHRoZSBET00gdHJlZSBvZiB0aGUgY29tcG9uZW50IHJlbWFpbnMgdW5jaGFuZ2VkLlxyXG5cdCAqIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQsIGhvd2V2ZXIsIHN0aWxsIGNoYW5nZS5cclxuXHQgKiBAcGFyYW0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wZXJ0aWVzIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgcHJvdmlkZXMgdG8gdGhpcyBjb21wb25lbnQuXHJcblx0ICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBoYXZlIGl0cyByZW5kZXIgbWV0aG9kIGNhbGxlZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdHNob3VsZFVwZGF0ZT8oIG5ld1Byb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIGFuIGV4Y2VwdGlvbiB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmcgb2ZcclxuXHQgKiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLiBJZiB0aGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb3IgaWYgaXQgdGhyb3dzIGFuIGVycm9yLCB0aGVcclxuXHQgKiBlcnJvciB3aWxsIGJlIHByb3BhZ2F0ZWQgdXAgdGhlIGNoYWluIG9mIGNvbXBvbmVudHMgdW50aWwgaXQgcmVhY2hlcyBhIGNvbXBvbmVudCB0aGF0XHJcblx0ICogaGFuZGxlcyBpdC4gSWYgbm9uZSBvZiB0aGUgY29tcG9uZW50cyBjYW4gaGFuZGxlIHRoZSBlcnJvciwgdGhlIGVudGlyZSB0cmVlIHdpbGwgYmVcclxuXHQgKiB1bm1vdW50ZWQuXHJcblx0ICogQHBhcmFtIGVyciBBbiBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGR1cmluZyB0aGUgY29tcG9uZW50J3Mgb3duIHJlbmRlcmluZyBvciByZW5kZXJpbmdcclxuXHQgKiBvZiBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLlxyXG5cdCAqIEBwYXJhbSBwYXRoIEFuIGFycmF5IG9mIG5hbWVzIG9mIGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzIGZyb20gdGhlIG1vdW50ZWQgcm9vdCB0byB0aGVcclxuXHQgKiBjb21wb25lbnQgdGhhdCB0aHJldyB0aGUgZXhjZXB0aW9uLiBUaGlzIHBhdGggaXMgcHJvdmlkZWQgbW9zdGx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRyYWNpbmdcclxuXHQgKiBwdXJwb3Nlcy5cclxuXHQgKi9cclxuXHRoYW5kbGVFcnJvcj8oIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBjb21wb25lbnQgYmVoYXZpb3JcclxuXHQgKiBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHRnZXRVcGRhdGVTdHJhdGVneT8oKTogVXBkYXRlU3RyYXRlZ3k7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlZmluaXRpb25zIG9mIHByb3BlcnR5IHR5cGVzIHVzZWQgYnkgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIERPTSBldmVudHMgb2YgdHlwZSBULlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gKGU6IFQpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUgYW5kIG9iamVjdCB0aGF0IHdpbGwgYmUgYm91bmQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgaGFuZGxlclxyXG4gKiBpcyBpbnZva2VkLlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRGdW5jQW5kVGhpc1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3RdO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCB0aGUgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnRcclxuICogaGFuZGxlciBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlIGNhcHR1cmUgKHRydWUpIG9yIHRvIHRoZSBidWJibGUgKGZhbHNlKSBwaGFzZS5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZEZsYWdUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgYm9vbGVhbl07XHJcblxyXG4vKipcclxuICogVHVwbGUgY29tYmluaW5nIHRoZSBldmVudCBoYW5kbGVyIHR5cGUsIG9iamVjdCB0aGF0IHdpbGwgYmUgYm91bmQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgaGFuZGxlclxyXG4gKiBpcyBpbnZva2VkIGFuZCB0aGUgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXZlbnQgaGFuZGxlciBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlXHJcbiAqIGNhcHR1cmUgKHRydWUpIG9yIHRvIHRoZSBidWJibGUgKGZhbHNlKSBwaGFzZS5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIG9iamVjdCwgYm9vbGVhbl07XHJcblxyXG4vKipcclxuICogVW5pb24gdHlwZSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYW4gRWxlbWVudCdzIGV2ZW50LlxyXG4gKiBAdHlwZXBhcmFtIFQgRE9NIGV2ZW50IHR5cGUsIGUuZy4gTW91c2VFdmVudFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXZlbnRQcm9wVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gRXZlbnRGdW5jVHlwZTxUPiB8IEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQ+IHxcclxuXHRcdFx0XHRFdmVudEZ1bmNBbmRGbGFnVHlwZTxUPiB8IEV2ZW50RnVuY0FuZFRoaXNBbmRGbGFnVHlwZTxUPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBkZWZpbmluZyB0aGUgaWQgcHJvcGVydHkgb2YgSFRNTCBlbGVtZW50c1xyXG4gKi9cdFx0XHRcdFxyXG5leHBvcnQgdHlwZSBJRFByb3BUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgSUlEUnVsZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBVcGRhdGVTdHJhdGVneSBvYmplY3Qgc3BlY2lmaWVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIHVwZGF0ZSBiZWhhdmlvciBvZiBjb21wb25lbnRzIGFuZFxyXG4gKiBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZVN0cmF0ZWd5ID0gXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGRldGVybWluaW5nIHdoZXRoZXIgbm9uLW1hdGNoaW5nIG5ldyBrZXllZCBzdWItbm9kZXMgYXJlIGFsbG93ZWQgdG8gcmVjeWNsZSBub24tXHJcblx0ICogbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2Rlcy4gSGVyZSBcIm5vbi1tYXRjaGluZ1wiIG1lYW5zIHRob3NlIG5ldyBvciBvbGQgbm9kZXMgZm9yIHdoaWNoXHJcblx0ICogbm8gb2xkIG9yIG5ldyBzdWItbm9kZXMgcmVzcGVjdGl2ZWx5IHdlcmUgZm91bmQuIElmIHRoaXMgZmxhZyBpcyBmYWxzZSwgdGhlbiBub24tbWF0Y2hpbmdcclxuXHQgKiBvbGQgc3ViLW5vZGVzIHdpbGwgYmUgcmVtb3ZlZCBhbmQgbm9uLW1hdGNoaW5nIG5ldyBzdWItbm9kZXMgd2lsbCBiZSBpbnNlcnRlZC4gSWYgdGhpc1xyXG5cdCAqIGZsYWcgaXMgdHJ1ZSwgdGhlbiBub24tbWF0Y2hpbmcgb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHVwZGF0ZWQgYnkgdGhlIG5vbi1tYXRjaGluZyBuZXdcclxuXHQgKiBzdWItbm9kZXMgLSBwcm92aWRlZCB0aGF0IHRoZSB0eXBlcyBvZiBzdWItbm9kZXMgYXJlIHRoZSBzYW1lLlxyXG5cdCAqIFxyXG5cdCAqIElmIGtleWVkIHN1Yi1ub2RlcyByZWN5Y2xpbmcgaXMgYWxsb3dlZCBpdCBjYW4gc3BlZWQgdXAgYW4gdXBkYXRlIHByb2Nlc3MgYmVjYXVzZVxyXG5cdCAqIGxlc3MgRE9NIG5vZGVzIGdldCByZW1vdmVkIGFuZCBpbnNlcnRlZCwgd2hpY2ggaXMgbW9yZSBleHBlbnNpdmUgdGhhbiB1cGRhdGluZy4gSG93ZXZlcixcclxuXHQgKiB0aGlzIGNhbiBoYXZlIHNvbWUgYWR2ZXJzZSBlZmZlY3RzIHVuZGVyIGNpcnRhaW4gY2lyY3Vtc3RhbmNlcyBpZiBjZXJ0YWluIGRhdGEgaXMgYm91bmRcclxuXHQgKiB0byB0aGUgcGFydGljdWxhciBpbnN0YW5jZXMgb2YgRE9NIG5vZGVzLlxyXG5cdCAqIFxyXG5cdCAqIFRoZSBmbGFnJ3MgZGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nPzogYm9vbGVhbjtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29tbW9uUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgc3RhbmRhcmQgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIG9uIGFsbCBKU1ggZWxlbWVudHMgLVxyXG4gKiBpbnRyaW5zaWMgKEhUTUwgYW5kIFNWRykgYXMgd2VsbCBhcyBmdW5jdGlvbmFsIGFuZCBjbGFzcy1iYXNlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBVbmlxdWUga2V5IHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGlzIEpTWCBlbGVtZW50IGZyb20gaXRzIHNpYmxpbmdzLiBUaGUga2V5IGNhbiBiZSBvZiBhbnkgdHlwZS4gKi9cclxuXHRrZXk/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRWxlbWVudFByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgKGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycylcclxuICogdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSFRNTCBhbmQgU1ZHIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuID0gYW55PiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogUmVmZXJlbmNlIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGFmdGVyIGl0IGlzIGNyZWF0ZWQgKG1vdW50ZWQpLiBUaGVcclxuXHQgKiByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHQgKi9cclxuXHRyZWY/OiBSZWZQcm9wVHlwZTxUUmVmPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgZWxlbWVudCBiZWhhdmlvciBkdXJpbmcgdXBkYXRlcy5cclxuXHQgKi9cclxuXHR1cGRhdGVTdHJhdGVneT86IFVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvKiogQ2hpbGRyZW4gdGhhdCBjYW4gYmUgc3VwcGxpZWQgdG8gdGhlIGVsZW1lbnQgKi9cclxuXHRjaGlsZHJlbj86IFRDaGlsZHJlbjtcclxuXHJcblx0Ly8gc3RhbmRhcmQgSFRNTCBhbmQgU1ZHIGVsZW1lbnQgcHJvcGVydGllc1xyXG5cdGNsYXNzPzogQ2xhc3NQcm9wVHlwZTtcclxuXHRkcmFnZ2FibGU/OiBib29sZWFuO1xyXG5cdGRyb3B6b25lID86IFwiY29weVwiIHwgXCJtb3ZlXCIgfCBcImxpbmtcIjtcclxuXHRpZD86IHN0cmluZyB8IG51bWJlciB8IElJRFJ1bGU7XHJcblx0bGFuZz86IHN0cmluZztcclxuXHRyb2xlPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVzZXQ7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBKU1ggbmFtZXNwYWNlIGRlZmluaW5nIGhvdyBUeXBlU2NyaXB0IHBlcmZvcm1zIHR5cGUgY2hlY2tzIG9uIEpTWCBlbGVtZW50cyxjb21wb25lbnRzXHJcbi8vIHByb3BlcnRpZXMgYW5kIGNoaWxkcmVuLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4vSHRtbFR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHN2ZyBmcm9tIFwiLi9TdmdUeXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOb2RlW10ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHNcclxuXHR7XHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSlNYIEZhY3RvcnkgZnVuY3Rpb24uIEluIG9yZGVyIGZvciB0aGlzIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYnkgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXIsIHRoZVxyXG4gKiB0c2NvbmZpZy5qc29uIG11c3QgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbjpcclxuICpcclxuICogYGBganNvblxyXG4gKiBcImNvbXBpbGVyT3B0aW9uc1wiOlxyXG4gKiB7XHJcbiAqICAgICBcImpzeFwiOiBcInJlYWN0XCIsXHJcbiAqICAgICBcImpzeEZhY3RvcnlcIjogXCJqc3hcIlxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgLnRzeCBmaWxlcyBtdXN0IGltcG9ydCB0aGUgbWltYmwgbW9kdWxlIGFzIG1pbTogaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbiAqIEBwYXJhbSB0YWcgXHJcbiAqIEBwYXJhbSBwcm9wcyBcclxuICogQHBhcmFtIGNoaWxkcmVuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpzeCggdGFnOiBhbnksIHByb3BzOiBhbnksIC4uLmNoaWxkcmVuOiBhbnlbXSk6IGFueVxyXG57XHJcblx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUpTWCggdGFnLCBwcm9wcywgY2hpbGRyZW4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlcnZpY2VEZWZpbml0aW9ucyBpbnRlcmZhY2Ugc2VydmVzIGFzIGEgbWFwcGluZyBiZXR3ZWVuIHNlcnZpY2UgbmFtZXMgYW5kIHNlcnZpY2UgdHlwZXMuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGludGVuZGVkIHRvIGJlIGF1Z21lbnRlZCBieSBtb2R1bGVzIHRoYXQgZGVmaW5lIGFuZC9vciB1c2Ugc3BlY2lmaWMgc2VydmljZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHBlcmZvcm1pbmcgc2VydmljZSBwdWJsaXNoaW5nIGFuZCBzdWJzY3JpYmluZyBpbiB0eXBlLXNhZmUgbWFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbntcclxuXHQvKiogQnVpbHQtaW4gZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gKi9cclxuXHRcIlN0ZEVycm9ySGFuZGxpbmdcIjogSUVycm9ySGFuZGxpbmdTZXJ2aWNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCdWlsdC1pbiBzZXJ2aWNlIGZvciBsYXp5IHBlb3BsZSAtIGNhbiBiZSB1c2VkIGZvciBxdWljayBwcm90b3R5cGVzIHdpdGhvdXQgdGhlIG5lZWQgdG9cclxuXHQgKiBhdWdtZW50IHRoZSBpbnRlcmZhY2UuXHJcblx0ICovXHJcblx0XCJhbnlcIjogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVycm9ySGFuZGxpbmdTZXJ2aWNlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2VydmljZSB0aGF0IGNhbiBiZSBpbnZva2VkIHdoZW4gYW4gZXJyb3IgLVxyXG4gKiB1c3VhbGx5IGFuIGV4Y2VwdGlvbiAtIGlzIGVuY291bnRlcmVkIGJ1dCBjYW5ub3QgYmUgaGFuZGxlZCBsb2NhbGx5LiBBIGNvbXBvbmVudCB0aGF0IGltcGxlbWVudHNcclxuICogdGhpcyBzZXJ2aWNlIHdvdWxkIG5vcm1hbGx5IHJlbWVtYmVyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byB1cGRhdGUgaXRzZWxmLHNvIHRoYXQgaW4gaXRzXHJcbiAqIHJlbmRlciBtZXRob2QgaXQgd2lsbCBwcmVzZW50IHRoZSBlcnJvciB0byB0aGUgdXNlci5cclxuICpcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpcyBpbXBsZW1lbnRlZCBieSB0aGUgUm9vdCBWaXJ0dWFsIE5vZGUgYXMgYSBsYXN0IHJlc29ydCBmb3IgZXJyb3JcclxuICogaGFuZGxpbmcuIFRoZSBSb290IFZOIHdpbGwgZGlzcGxheSBhIHNpbXBsZSBVSSBzaG93aW5nIHRoZSBlcnJvciBhbmQgd2lsbCBhbGxvdyB0aGUgdXNlciB0b1xyXG4gKiByZXN0YXJ0IC0gaW4gdGhlIGhvcGUgdGhhdCB0aGUgZXJyb3Igd2lsbCBub3QgcmVwZWF0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRyZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGNhbGxlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSB1cGRhdGUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTY2hlZHVsZWRGdW5jVHlwZSA9ICgpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBpbnZva2VkIHdoZW4gcmVmZXJlbmNlIHZhbHVlIGNoYW5nZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZGdW5jPFQgPSBhbnk+ID0gKG5ld1JlZjogVCkgPT4gdm9pZDtcclxuXHJcblxyXG5cclxuLy8gU3ltYm9sIHVzZWQgdG8ga2VlcCB0aGUgcmVmZXJlbmNlZCBvYmplY3QgaW5zaWRlIHRoZSBSZWYgY2xhc3MgaW5zdGFuY2UuXHJcbmxldCBzeW1SZWYgPSBTeW1ib2woXCJzeW1SZWZcIik7XHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIGNsYXNzIHRvIHVzZSB3aGVuZXZlciBhIHJlZmVyZW5jZSB0byBhbiBvYmplY3QgaXMgbmVlZGVkIC0gZm9yIGV4YW1wbGUsIHdpdGggSlNYIGByZWZgXHJcbiAqIGF0dHJpYnV0ZXMgYW5kIHNlcnZpY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZjxUID0gYW55PlxyXG57XHJcblx0LyoqIEV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgcmVmZXJlbmNlZCB2YWx1ZSBjaGFuZ2VzICovXHJcblx0cHJpdmF0ZSBjaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnRTbG90PFJlZkZ1bmM8VD4+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBsaXN0ZW5lcj86IFJlZkZ1bmM8VD4sIGluaXRpYWxSZWZlcmVuZT86IFQpXHJcblx0e1xyXG5cdFx0aWYgKGxpc3RlbmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmF0dGFjaCggbGlzdGVuZXIpO1xyXG5cclxuXHRcdHRoaXNbc3ltUmVmXSA9IGluaXRpYWxSZWZlcmVuZTtcclxuXHR9XHJcblxyXG5cdC8qKiBBZGRzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZSBjaGFuZ2VzLiAqL1xyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggbGlzdGVuZXI6IFJlZkZ1bmM8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5jaGFuZ2VkRXZlbnQuYXR0YWNoKCBsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHQvKiogUmVtb3ZlcyBhIGNhbGxiYWNrIHRoYXQgd2FzIGFkZGVkIHdpdGggYWRkTGlzdGVuZXIuICovXHJcblx0cHVibGljIHJlbW92ZUxpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5kZXRhY2goIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSByZWZlcmVuY2UgdmFsdWUgKi9cclxuXHRwdWJsaWMgZ2V0IHIoKTogVCB7IHJldHVybiB0aGlzW3N5bVJlZl07IH1cclxuXHJcblx0LyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBzZXQgciggbmV3UmVmOiBUKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzW3N5bVJlZl0gIT09IG5ld1JlZilcclxuXHRcdHtcclxuXHRcdFx0dGhpc1tzeW1SZWZdID0gbmV3UmVmO1xyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5maXJlKCBuZXdSZWYpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBjcmVhdGluZyByZWZlcmVuY2UgcHJvcGVydGllcyB3aXRob3V0IHRoZSBuZWVkIHRvIG1hbnVhbGx5IGNyZWF0ZSBSZWY8PlxyXG4gKiBpbnN0YW5jZXMuIFRoaXMgYWxsb3dzIGZvciB0aGUgZm9sbG93aW5nIGNvZGUgcGF0dGVybjpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudFxyXG4gKiB7XHJcbiAqICAgICBAcmVmIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICogICAgIHJlbmRlcigpIHsgcmV0dXJuIDxkaXYgcmVmPXtteURpdn0+SGVsbG88L2Rpdj47IH1cclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBzZXQgdG8gcGludCB0byB0aGUgSFRNTCBkaXYgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWYoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuXHRsZXQgaGFuZGxlciA9IG5ldyBSZWZQcm94eUhhbmRsZXIoKTtcclxuXHRoYW5kbGVyLnByb3h5ID0gbmV3IFByb3h5KCB7fSwgaGFuZGxlcik7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHNldCggdjogYW55KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLm9iaiA9IHY7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLnByb3h5O1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0KTtcclxufVxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lL3N5bWJvbCBiZWxvbmdzIHRvIHRoZSBSZWYgb2JqZWN0IG9yLiBUaGlzIGlzIGludm9rZWRcclxuLy8gYXMgcGFydCBvZiB0aGUgcHJveHkgaGFuZGxlciB3aGVyZSBhY2Nlc3MgdG8gc3VjaCBwcm9wZXJ0aWVzIHdpbGwgYmUgcmVmbGVjdGVkIGZyb20gdGhlIFJlZlxyXG4vLyBvYmplY3Qgd2hpbGUgYWxsIG90aGVycyB3aWxsIGJlIHJlZmxlY3RlZCBmcm9tIHRoZSByZW1lbWJlcmVkIHJlZmVyZW5jZWQgb2JqZWN0LlxyXG5mdW5jdGlvbiBjaG9vc2VPYmplY3RUb1JlZmxlY3QoIHByb3A6IFByb3BlcnR5S2V5LCByZWY6IFJlZiwgb2JqOiBhbnkpOiBhbnlcclxue1xyXG4gICAgcmV0dXJuIHByb3AgPT09IFwiclwiIHx8IHByb3AgPT09IHN5bVJlZiB8fCBwcm9wID09IFwiY2hhbmdlZEV2ZW50XCIgPyByZWYgOiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgUmVmUHJveHlIYW5kbGVyIGlzIGEgcHJveHkgaGFuZGxlciBmb3IgdGhlIFJlZiBvYmplY3RzIGNyZWF0ZWQgd2hlbiByZWZlcmVuY2UgaXMgZGVmaW5lZFxyXG4gKiB1c2luZyB0aGUgQHJlZiBkZWNvcmF0b3IuIE9ubHkgdGhlIFwiclwiIHByb3BlcnR5IGFyZSByZWZsZWN0ZWQgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCAodGhlIFJlZik7XHJcbiAqIGV2ZXJ5dGhpbmcgZWxzZSBpcyByZWZsZWN0ZWQgZnJvbSB0aGUgcmVtZW1iZXJlZCByZWZlcmVuY2VkIG9iamVjdC5cclxuICovXHJcbmNsYXNzIFJlZlByb3h5SGFuZGxlciBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxhbnk+XHJcbntcclxuICAgIC8vIEtlZXBzIHRoZSBwcm94eSBvYmplY3QgZm9yIHdoaWNoIHRoaXMgaXMgdGhlIGhhbmRsZXJcclxuICAgIHB1YmxpYyBwcm94eTogYW55O1xyXG5cclxuICAgIC8vIEtlZXBzIHRoZSByZWZlcmVuY2VkIG9iamVjdCBvciB1bmRlZmluZWRcclxuICAgIHB1YmxpYyBvYmo6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcHJvcCA9PT0gXCJyXCIgPyB0aGlzLm9iaiA6IHRoaXMub2JqW3Byb3BdO1xyXG4gICAgICAgIC8vIFJlZmxlY3QuZ2V0IGRvZXNuJ3Qgd29yayBidXQgcmVndWxhciBwcm9wZXJ0eSBnZXQgZG9lc1xyXG4gICAgICAgIC8vIHJldHVybiBwcm9wID09PSBcInJcIiA/IHRoaXMub2JqIDogUmVmbGVjdC5nZXQoIHRoaXMub2JqLCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55LCByZWNlaXZlcjogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wID09PSBcInJcIilcclxuICAgICAgICAgICAgdGhpcy5vYmogPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMub2JqW3Byb3BdID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIFJlZmxlY3Quc2V0IGRvZXNuJ3Qgd29yayBidXQgcmVndWxhciBwcm9wZXJ0eSBzZXQgZG9lc1xyXG4gICAgICAgIC8vIHJldHVybiBSZWZsZWN0LnNldCggdGhpcy5vYmosIHByb3AsIHZhbHVlLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVByb3BlcnR5KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoIHRoaXMub2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmaW5lUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgYXR0cnM6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcy5vYmosIHByb3AsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKCB0aGlzLm9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByb3RvdHlwZU9mKCB0YXJnZXQ6IGFueSk6IG9iamVjdCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0V4dGVuc2libGUoIHRhcmdldDogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSk6IFByb3BlcnR5RGVzY3JpcHRvciB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy5vYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtZXJhdGUoIHRhcmdldDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKCBSZWZsZWN0LmVudW1lcmF0ZSggdGhpcy5lbnVtZXJhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3duS2V5cyggdGFyZ2V0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyggdGhpcy5vYmopO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiByZWYgcHJvcGVydHkgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIEpTWCBlbGVtZW50cyBhbmQgY29tcG9uZW50cy4gVGhpcyBjYW4gYmUgZWl0aGVyIHRoZVxyXG4gKiBbW1JlZl1dIGNsYXNzIG9yIFtbUmVmRnVuY11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmUHJvcFR5cGU8VCA9IGFueT4gPSBUIHwgUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGlmIChvbmx5SWYgPT09IHVuZGVmaW5lZCB8fCAocmVmIGFzIFJlZikuciA9PT0gb25seUlmKVxyXG5cdFx0XHQocmVmIGFzIFJlZikuciA9IHZhbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0KHJlZiBhcyBSZWZGdW5jKSh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBEZWZpbmVzIHR5cGVzIG9mIHZpcnR1YWwgRE9NIG5vZGVzICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFZOVHlwZVxyXG57XHJcblx0LyoqIFRvcC1sZXZlbCBub2RlICovXHJcblx0Um9vdCxcclxuXHJcblx0LyoqIENsYXNzLWJhc2VkIChzdGF0ZS1mdWxsKSBjb21wb25lbnQgY3JlYXRlZCB2aWEgbmV3ICovXHJcblx0SW5kZXBlbmRlbnRDb21wLFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBsYWlkIG91dCB1c2luZyBKU1ggKi9cclxuXHRNYW5hZ2VkQ29tcCxcclxuXHJcblx0LyoqIFN0YXRlbGVzcyBjb21wb25lbnQgKHNpbXBsZSByZW5kZXJpbmcgZnVuY3Rpb24gYWNjZXB0aW5nIHByb3BzKSAqL1xyXG5cdEZ1bmNDb21wLFxyXG5cclxuXHQvKiogRE9NIGVsZW1lbnQgKEhUTUwgb3IgU1ZHKSBsYWlkIG91dCB1c2luZyBKU1guICovXHJcblx0RWxtLFxyXG5cclxuXHQvKiogVGV4dCBub2RlICovXHJcblx0VGV4dCxcclxuXHJcblx0LyoqIFdyYXBwZXIgYXJvdW5kIGEgZnVuY3Rpb24vbWV0aG9kIHRoYXQgY2FuIGJlIHVwZGF0ZWQgaW5kZXBlbmRlbnRseS4gKi9cclxuXHRGdW5jUHJveHksXHJcblxyXG5cdC8qKiBOb2RlIHRoYXQgd2FpdHMgZm9yIGEgcHJvbWlzZSB0byBiZSBzZXR0bGVkIGFuZCB0aGVuIGRpc3BsYXlzIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBjb250ZW50LiAqL1xyXG5cdFByb21pc2VQcm94eSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHJlYWRvbmx5IHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBDb21wb25lbnQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgd3JhcENhbGxiYWNrIG1ldGhvZCBvZiB0aGUgQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0d3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc0NvbXBWTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBKU1gtYmFzZWQgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgaW5zdGFuY2UuICovXHJcblx0cmVhZG9ubHkgY29tcDogSUNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNYW5hZ2VkQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNYW5hZ2VkQ29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgY29tcG9uZW50IGNsYXNzLiAqL1xyXG5cdHJlYWRvbmx5IGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUluZGVwZW5kZW50Q29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIGNvbXBvbmVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluZGVwZW5kZW50Q29tcFZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogIFRoZSBJRWxtVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgRE9NIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbG1WTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG5hbWUuICovXHJcblx0cmVhZG9ubHkgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyAoYXMgb3Bwb3NlZCB0byBIVE1MKS4gKi9cclxuXHRyZWFkb25seSBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgdGhlIERPTSBlbGVtZW50IG9iamVjdC4gKi9cclxuXHRyZWFkb25seSBlbG06IEVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGV4dFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIHRleHQgRE9NIG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0Vk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBUZXh0IG9mIHRoZSBub2RlLiAqL1xyXG5cdHRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqIFRleHQgRE9NIG5vZGUuICovXHJcblx0dGV4dE5vZGU6IFRleHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENDdXN0b20gYXR0cmlidXRlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXIgY2xhc3MgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxyXG4gKiBAcGFyYW0gcHJvcE5hbWUgbmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0gZmFjdG9yeSBjdXN0b20gYXR0cmlidXRlIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGU8VD4oIGF0dHJOYW1lOiBzdHJpbmcsIGhhbmRsZXJDbGFzczogSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJDbGFzczxUPik6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggYXR0ck5hbWUsIHsgdHlwZTogUHJvcFR5cGUuQ3VzdG9tQXR0ciwgaGFuZGxlckNsYXNzIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBldmVudCBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gZXZlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUV2ZW50KCBldmVudE5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdEVsbUF0dHIucmVnaXN0ZXJQcm9wZXJ0eSggZXZlbnROYW1lLCB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGNvbXBvbmVudCBjbGFzcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgdHlwZSBkZWZpbmVzIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgdXBkYXRlTWVcclxuICogbWV0aG9kIGlmIHRoZSBnb2FsIGlzIG5vdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQgYnV0IG9ubHkgb25lIG9yIHNldmVyYWwgcmVuZGVyaW5nXHJcbiAqIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudFVwZGF0ZVJlcXVlc3QgPSBGdW5jdGlvbiB8IHsgZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueSB9XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50cy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoaXMgY2xhc3MgbXVzdCBpbXBsZW1lbnQgdGhlIHJlbmRlclxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+IGltcGxlbWVudHMgSUNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG57XHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci4gVGhpcyBpcyBub3JtYWxseSB1c2VkIG9ubHkgYnkgbWFuYWdlZFxyXG5cdCAqIGNvbXBvbmVudHMgYW5kIGlzIHVzdWFsbHkgdW5kZWZpbmVkIGZvciBpbmRlcGVuZGVudCBjb3BvbmVudHMuXHJcblx0ICovXHJcblx0cHVibGljIHByb3BzOiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbWVtYmVyZWQgdmlydHVhbCBub2RlIG9iamVjdCB0aHJvdWdoIHdoaWNoIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuIFRoaXNcclxuXHQgKiBpcyB1bmRlZmluZWQgaW4gdGhlIGNvbXBvbmVudCdzIGNvc3RydWN0b3IgYnV0IHdpbGwgYmUgZGVmaW5lZCBiZWZvcmUgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogKG9wdGlvbmFsKSB3aWxsTW91bnQgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2bjogSVZOb2RlO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM/OiBDb21wUHJvcHM8VFByb3BzLFRDaGlsZHJlbj4pXHJcblx0e1xyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0fVxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0aGF0IHdpbGwgYmUgdWx0aW1hdGVseSBwbGFjZWQgaW50byB0aGUgRE9NIHRyZWUuICovXHJcblx0cHVibGljIGFic3RyYWN0IHJlbmRlcigpOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gSWYgbm8gYXJndW1lbnRzIGFyZVxyXG5cdCAqIHByb3ZpZGVkLCB0aGUgZW50aXJlIGNvbXBvbmVudCBpcyByZXF1ZXN0ZWQgdG8gYmUgdXBkYXRlZC4gSWYgYXJndW1lbnQgYXJlIHByb3ZpZGVkLCB0aGV5XHJcblx0ICogaW5kaWNhdGUgd2hhdCByZW5kZXJpbmcgZnVuY3Rpb25zIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB1cGRhdGVSZXF1ZXN0cyBcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoIC4uLnVwZGF0ZVJlcXVlc3RzOiBDb21wb25lbnRVcGRhdGVSZXF1ZXN0W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnZuKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHVwZGF0ZVJlcXVlc3RzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgbm8gYXJndW1lbnRzIGFyZXIgcHJvdmlkZWQgd2UgcmVxdWVzdCB0byB1cGRhdGUgdGhlIGVudGlyZSBjb21wb25lbnQuXHJcblx0XHRcdHRoaXMudm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBsb29wIG92ZXIgdXBkYXRlIHJlcXVlc3QgYXJndW1lbnRzXHJcblx0XHRcdGZvciggbGV0IHJlcSBvZiB1cGRhdGVSZXF1ZXN0cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVxID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgRnVuY1Byb3h5Vk4udXBkYXRlKCByZXEsIHVuZGVmaW5lZCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIGEgbm9uLWFycmF5IHBhcmFtZXRlciBpcyBwYXNzZWQgaW4gcmVxLmFyZ3MsIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggcmVxLmZ1bmMsIHJlcS5rZXksIHJlcS50aGlzQXJnID8gcmVxLnRoaXNBcmcgOiB0aGlzLFxyXG5cdFx0XHRcdFx0XHQhcmVxLmFyZ3MgfHwgQXJyYXkuaXNBcnJheShyZXEuYXJncykgPyByZXEuYXJncyA6IFtyZXEuYXJnc10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgYXJlIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gSWYgdGhpc1xyXG5cdCAqICAgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQgKHdoaWNoIGFsbG93cyBzY2hlZHVsaW5nXHJcblx0ICogICByZWd1bGFyIHVuYm91bmQgY29tcG9uZW50cycgbWV0aG9kcykuIFRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgaWdub3JlZCBpZiB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMudm4pXHJcblx0XHRcdHRoaXMudm4uc2NoZWR1bGVDYWxsQmVmb3JlVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRoZSBnaXZlbiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiB0aGUgTWltYmwgdGljayBoYXZlIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIHRoZSBmdW5jdGlvblxyXG5cdCAqICAgaXMgYWxyZWFkeSBib3VuZCBvciBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgY2FsbE1lQWZ0ZXJVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jLCB0aGF0ID8gdGhhdCA6IHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIHNvIHRoYXQgaWYgdGhlIG9yaWdpbmFsXHJcblx0ICogY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvciBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGVcclxuXHQgKiBleGNlcHRpb24gYnViYmxlcyBmcm9tIHRoaXMgY29tcG9uZW50IHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBjb21wb25lbnQgdGhhdCBrbm93cyB0b1xyXG5cdCAqIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QpOiBUXHJcblx0e1xyXG5cdFx0cmV0dXJuIHdyYXBDYWxsYmFja1dpdGhWTiggY2FsbGJhY2ssIHRoaXNDYWxsYmFjaywgdGhpcy52bik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCdWlsdCBpbiBjb21wb25lbnRzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPEZyYWdtZW50PlxyXG4gKlx0XHRcdDxkaXYxLz5cclxuICpcdFx0XHQ8ZGl2Mi8+XHJcbiAqXHRcdFx0PGRpdjMvPlxyXG4gKlx0XHQ8L0ZyYWdtZW50PlxyXG4gKlx0fVxyXG4gIGBgYFxyXG5cclxuICogQHBhcmFtIHByb3BzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KCBwcm9wczogQ29tcFByb3BzPHt9Pik6IGFueSB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0byBiZSB1c2VkIHdpdGggdGhlIEZ1bmNQcm94eSBjb21wb25lbnQuIEZ1bmNQcm94eSBjb21wb25lbnQgY2Fubm90IGhhdmUgY2hpbGRyZW4uXHJcbiAqIEEga2V5IHByb3BlcnR5IGNhbiBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gbXVsdGlwbGUgdXNlcyBvZiB0aGUgc2FtZSBmdW5jdGlvbi4gSWYgdGhlXHJcbiAqIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIHdpdGhpbiBhIGNvbXBvbmVudCwgdGhlIGtleSBpcyBub3QgbmVjZXNzYXJ5OyBob3dldmVyLCBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcywga2V5IGlzIG1hbmRhdG9yeSAtIG90aGVyd2lzZSwgdGhlIGJlaGF2aW9yIGlzIHVuZGV0ZXJtaW5lZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVuY1Byb3h5UHJvcHMgZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKiBGdW5jdGlvbiB0aGF0IHJlbmRlcnMgY29udGVudC4gKi9cclxuXHRmdW5jOiBGdW5jdGlvbjtcclxuXHJcblx0LyoqXHJcblx0ICogQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uIFdoZW5ldmVyIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGlzXHJcblx0ICogcGFyYW1ldGVyIGlzIHVzZWQgd2hlbiBjYWxsaW5nIHRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdGFyZ3M/OiBhbnlbXTtcclxuXHJcblx0LyoqXHJcblx0ICogVmFsdWUgdG8gYmUgdXNlZCBhcyBcInRoaXNcIiB3aGVuIGludm9raW5nIHRoZSBmdW5jdGlvbi4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZVxyXG5cdCAqIGNsYXNzIGJhc2VkIGNvbXBvbmVudCB0aGF0IHJlbmRlcmVkIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdpbGwgYmUgdXNlZCAod2hpY2ggaXMgdGhlXHJcblx0ICogbW9zdCBjb21tb24gY2FzZSkuXHJcblx0ICovXHJcblx0dGhpc0FyZz86IGFueTtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGFyZ3VtZW50cyBzcGVjaWZpZWQgYnkgdGhlIGBhcmdzYCBwcm9wZXJ0eSBzaG91bGQgYmUgcGFzc2VkIHRvXHJcblx0ICogdGhlIGZ1bmN0aW9uIG92ZXJyaWRpbmcgYXJndW1lbnRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgYnkgdGhlIG1vc3QgcmVjZW50IGNhbGwgdG8gdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QuIEJ5IGRlZmF1bHQgdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgZmFsc2UgYW5kIGBhcmdzYCB3aWxsIGJlXHJcblx0ICogdXNlZCBvbmx5IHRoZSBmaXJzdCB0aW1lIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkIGJ5IHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBJZiB0aGVcclxuXHQgKiBGdW5jUHJveHkudXBkYXRlIG1ldGhvZCBpcyBjYWxsZWQsIHRoZSBhcmd1bWVudCBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIHdpbGwgcmVwbGFjZSB0aGVcclxuXHQgKiBvcmlnaW5hbCBhcmd1bWVudHMuIFRoZSBuZXh0IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgcmVuZGVyZWQsIHRoZSBgYXJnc2AgcHJvcGVydHlcclxuXHQgKiB3aWxsIGJlIGlnbm9yZWQuXHJcblx0ICogXHJcblx0ICogTm90ZSB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGFjdGlvbnMgdGhhdCBvY2N1cnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIGZhbHNlIG9yIG9taXR0ZWQ6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQVwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJCXCIpLiBcIkJcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgLz4uIFwiQlwiIHdpbGwgc3RpbGwgYmUgdXNlZC5cclxuXHQgKiBcclxuXHQgKiBJZiB0aGUgYHJlcGxhY2VBcmdzYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBldmVyeSB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW5ldCBpc1xyXG5cdCAqIHJlbmRlcmVkLCB0aGUgdmFsdWUgb2YgdGhlIGBhcmdzYCBwcm9wZXJ0eSByZXBsYWNlcyB3aGF0ZXZlciBhcmd1bWVudHMgdGhlcmUgd2VyZSBiZWZvcmUuXHJcblx0ICogXHJcblx0ICogTm93IG5vdGUgdGhlIHNlcXVlbmNlIG9mIGFjdGlvbnMgd2hlbiBgcmVwbGFjZUFyZ3NgIGlzIHRydWU6XHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCByZW5kZXJzIDxGdW5jUHJveHkgZnVuYz17dGhpcy5mb299IGFyZ3M9XCJBXCIgcmVwbGFjZUFyZ3MgLz4uXCJBXCIgd2lsbFxyXG5cdCAqIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LiBcIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZCBhZ2Fpbi5cclxuXHQgKi9cclxuXHRyZXBsYWNlQXJncz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdyYXBzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBjb250ZW50LiBQcm94aWVzIGNhbiB3cmFwIGluc3RhbmNlXHJcbiAqIG1ldGhvZHMgb2YgY2xhc3NlcyB0aGF0IGhhdmUgYWNjZXNzIHRvIFwidGhpc1wiIHRodXMgYWxsb3dpbmcgYSBzaW5nbGUgY2xhc3MgdG8gXCJob3N0XCIgbXVsdGlwbGVcclxuICogY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5vdCBpbnRlbmRlZCB0byBiZVxyXG4gKiBjcmVhdGVkIGJ5IGRldmVsb3BlcnM7IGluc3RlYWQgaXQgaXMgb25seSB1c2VkIGluIGl0cyBKU1ggZm9ybSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxGdW5jUHJveHkgZnVuYz17dGhpcy5yZW5kZXJTb21ldGhpbmd9IGtleT17Li4ufSBhcmdzPXsuLi59IHRoaXNBcmc9ey4uLn0gLz5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGVyZSBpcyBhIHNpbXBsZXIgbWV0aG9kIG9mIHNwZWNpZnlpbmcgYSByZW5kZXJpbmcgZnVuY3Rpb24gaW4gSlNYLCBlLmcuOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxkaXY+e3RoaXMucmVuZGVyU29tZXRoaW5nfTwvZGl2PlxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5lZWRlZCBpbiB0aGUgY2FzZSB3aGVyZSBvbmUgKG9yIG1vcmUpIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICogLSBUaGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqIC0gVGhlIHNhbWUgZnVuY3Rpb24gaXMgdXNlZCBtdWx0aXBsZSB0aW1lcyBhbmQga2V5cyBtdXN0IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVcclxuICogaW52b2NhdGlvbnMuXHJcbiAqIC0gVGhlIHZhbHVlIG9mIFwidGhpc1wiIGluc2lkZSB0aGUgZnVuY3Rpb24gaXMgbm90IHRoZSBjb21wb25lbnQgdGhhdCBkb2VzIHRoZSByZW5kZXJpbmcuIFRoYXRcclxuICogaXMsIHRoZSBmdW5jdGlvbiBpcyBub3QgYSBtZXRob2Qgb2YgdGhpcyBjb21wb25lbnQuXHJcbiAqIFxyXG4gKiBGdW5jUHJveHkgaGFzIGEgcHVibGljIHN0YXRpYyBVcGRhdGUgbWV0aG9kIHRoYXQgY2FuIGJlIGNhbGxlZCB0byBjYXVzZSB0aGUgcmVuZGVyaW5nIG1lY2hhbmlzbVxyXG4gKiB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdyYXBwZWQgYnkgdGhlIEZ1bmNQcm94eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8RnVuY1Byb3h5UHJvcHMsdm9pZD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLCB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIHRoaXNBcmc/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCB0aGlzQXJnLCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnQgZm9yIHByb21pc2VzIHJldHVybmVkIGFzIGNvbnRlbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBQcm9taXNlUHJveHkgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9taXNlUHJveHlQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wc1xyXG57XHJcblx0LyoqIFByb21pc2UgdGhhdCB3aWxsIGJlIHdhdGNoIGJ5IHRoZSB3YWl0aW5nIG5vZGUuICovXHJcblx0cHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvKiogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQuICovXHJcblx0ZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUHJvbWlzZVByb3h5IGNvbXBvbmVudCB3cmFwcyBhIFByb21pc2UgYW5kIHJlcGxhY2VzIGl0cyBjb250ZW50IHdoZW4gdGhlIHByb21pc2UgaXMgc2V0dGxlZC5cclxuICogQmVmb3JlIHRoZSBwcm9taXNlIGlzIHNldHRsZWQsIHRoZSBjb21wb25lbnQgZGlzcGxheXMgYW4gb3B0aW9uYWwgXCJpbi1wcm9ncmVzc1wiIGNvbnRlbnRcclxuICogc3BlY2lmaWVkIGFzIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnQuIElmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkLCB0aGUgY29tcG9uZW50IHdpbGwgZWl0aGVyXHJcbiAqIGRpc3BsYXkgdGhlIFwiZXJyb3JcIiBjb250ZW50IG9idGFpbmVkIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbnMgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0aWVzIG9yLCBpZlxyXG4gKiBzdWNoIGZ1bmN0aW9uIGlzIG5vdCBzcGVjaWZpZWQsIGRpc3BsYXkgbm90aGluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNlUHJveHkgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbWlzZVByb3h5UHJvcHM+XHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0YW5jZXMgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgYXJlIG5ldmVyIGFjdHVhbGx5IGNyZWF0ZWQ7IGlzdGVhZCwgdGhlIHBhcmFtZXRlcnNcclxuXHQgKiBwYXNzZWQgdG8gaXQgdmlhIEpTWCBhcmUgdXNlZCBieSBhbiBpbnRlcm5hbCB2aXJ0dWFsIG5vZGUgdGhhdCBoYW5kbGVzIGZ1bmN0aW9uXHJcblx0ICogaW52b2NhdGlvbi5cclxuXHQgKi9cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMpIHsgc3VwZXIoIHByb3BzKTsgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIFByb21pc2VQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbnMgb2YgbW91bnQvdW5tb3VudCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSByZXN1bHQgb2YgSlNYIGV4cHJlc3Npb24pIHVuZGVyIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnRcclxuLy8gYXN5bmNocm9ub3VzbHkuXHJcbiAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gcmVuZGVyLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gcmVuZGVyIHRoZSBjb250ZW50LiBJZiBudWxsIG9yIHVuZGVmaW5lZCx0aGVuXHJcbiAqXHRcdFx0XHRyZW5kZXIgdW5kZXIgdGhlIGRvY3VtZW50LmJvZHkgdGFnLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCBjb250ZW50OiBhbnksIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdG1vdW50Um9vdCggY29udGVudCwgYW5jaG9yRE4pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnQgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0aGUgY29udGVudCB3YXMgcHJldmlvdXNseSByZW5kZXJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KCBhbmNob3JETjogTm9kZSA9IG51bGwpOiB2b2lkXHJcbntcclxuXHR1bm1vdW50Um9vdCggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSBgQHRyaWdnZXJgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRhYmxlKCB0YXJnZXQsIG5hbWU6IHN0cmluZylcclxue1xyXG5cdGxldCBhdHRyTmFtZSA9IFwiX21fXCIgKyBuYW1lO1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgc2V0KCB2YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc1thdHRyTmFtZV0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgdm46IElWTm9kZSA9IHRoaXMudm47XHJcbiAgICAgICAgICAgICAgICBpZiAodm4gJiYgIXZuLnVwZGF0ZVJlcXVlc3RlZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpc1thdHRyTmFtZV07IH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtQcm9taXNlRXgsIGNyZWF0ZVByb21pc2VFeH0gZnJvbSBcIi4uL2FwaS9VdGlsQVBJXCI7XHJcbmltcG9ydCB7dHJpZ2dlcn0gZnJvbSBcIi4uL2ludGVybmFsXCI7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vYXBpL21pbVwiXHJcbntcclxuICAgIGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcbiAgICB7XHJcbiAgICAgICAgcG9wdXA6IElQb3B1cDtcclxuICAgICAgICBkaWFsb2c6IElEaWFsb2c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXAgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBwb3B1cCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjb250ZW50LiBUaGlzIGludGVyZmFjZVxyXG4gKiBpcyBwdWJsaXNoZWQgYXMgYSBzZXJ2aWNlIGFuZCBjYW4gYmUgdXNlZCBieSB0aGUgY29udGVudCBjb21wb25lbnRzIHRvIGNsb3NlIHRoZSBwb3B1cC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBwb3B1cCBhbmQgcGFzc2VzIGEgdmFsdWUgdG8gYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZS4gRm9yIHRoZSBtb2RhbCBwb3B1cHMsXHJcbiAgICAgKiB0aGlzIHZhbHVlIHdpbGwgYmUgdGhlIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBzaG93TW9kYWwoKSBtZXRob2QuXHJcbiAgICAgKiBGb3IgbW9kZWxlc3MgcG9wdXBzLCB0aGlzIHZhbHVlIHdpbGwgYmUgYXZhaWxhYmxlIGFzIHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSByZXR1cm5WYWx1ZSBcclxuICAgICAqL1xyXG4gICAgY2xvc2UoIHJldHVyblZhbHVlPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQb3B1cFN0eWxlcyBpbnRlcmZhY2UgZGVmaW5lcyBzdHlsZXMgdXNlZCBieSB0aGUgUG9wdXAgY2xhc3MgdG8gY3JlYXRlIHRoZSBgPGRpYWxvZz5gXHJcbiAqIGVsZW1lbnQuIFRoZSBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHByb3ZpZGUgdGhlIGNsYXNzIHJ1bGUgZm9yIHRoZSBkaWFsb2cgcHJvcGVydHkgYW5kIGNhblxyXG4gKiBhbHNvIGRlZmluZSB0aGUgOjpiYWNrZHJvcCBwc2V1ZG8gZWxlbWVudCBzdHlsZXMsIHdoaWNoIGlzIHVzZWQgd2hlbiB0aGUgcG9wdXAgaXMgc2hvd24gYXMgYVxyXG4gKiBtb2RhbCBkaWFsb2cuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cFN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxue1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nPzogY3NzLklDbGFzc1J1bGUgfCBjc3MuSUNsYXNzTmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgc3R5bGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBQb3B1cCBpZiBzdHlsZXMgYXJlIG5vdCBzcGVjaWZpZWQgdXNpbmcgb3B0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UG9wdXBTdHlsZXMgZXh0ZW5kcyBjc3MuU3R5bGVEZWZpbml0aW9uIGltcGxlbWVudHMgSVBvcHVwU3R5bGVzXHJcbntcclxuICAgIC8qKiBTdHlsZXMgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQuICovXHJcbiAgICBkaWFsb2cgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZ3JleVwiXSxcclxuICAgICAgICBib3hTaGFkb3c6IHsgeDogNCwgeTogNCwgYmx1cjogNCwgY29sb3I6IFwibGlnaHRncmV5XCIgfSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIC8vIHRyYW5zZm9ybTogY3NzLnNjYWxlKDAuMSksXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogeyBwcm9wZXJ0eTogXCJ0cmFuc2Zvcm1cIiwgZHVyYXRpb246IDIwMCB9LFxyXG4gICAgICAgIFwiOjpiYWNrZHJvcFwiOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIsIG9wYWNpdHk6IDAuMyB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBvcHVwT3B0aW9ucyBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb3B0aW9ucyB0aGF0IGNvZmlndXJlIHRoZSBiZWhhdmlvciBvZiB0aGUgUG9wdXBcclxuICogb2JqZWN0LiBUaGV5IGFyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIHRvIHRoZSBbW1BvcHVwXV0gY2xhc3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwT3B0aW9uczxUIGV4dGVuZHMgSVBvcHVwU3R5bGVzID0gSVBvcHVwU3R5bGVzPlxyXG57XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBzdHlsZXMgdG8gdXNlIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBhbmQgb3B0aW9uYWxseSBmb3IgdGhlIDo6YmFja2Ryb3BcclxuICAgICAqIHBzZXVkbyBlbGVtZW50LiBUaGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW1wbGVtZW50aW5nIHRoZVxyXG4gICAgICogW1tJUG9wdXBTdHlsZXNdXSBpbnRlcmZhY2Ugb3IgYW4gaW5zdGFuY2Ugb2Ygc3VjaCBjbGFzcy4gVGhlIHBvcHVwIGFjdGl2YXRlcyB0aGUgc3R5bGVzXHJcbiAgICAgKiB3aGVuIGl0IG9wZW5zIGFuZCBkZWFjdGl2YXRlcyB0aGVtIHdoZW4gaXQgY2xvc2VzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKiBcclxuICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgbm90IGRlZmluZWQsIHRoZSBwb3B1cCB3aWxsIHVzZSBzdHlsZXMgbGFzdCBzZXQgdXNpbmcgdGhlXHJcbiAgICAgKiBbW3B1c2hQb3B1cFN0eWxlc11dIGZ1bmN0aW9uLiBJZiB0aGlzIGZ1bmN0aW9uIGhhcyBuZXZlciBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZSBwb3B1cFxyXG4gICAgICogd2lsbCB1c2UgZGVmYXVsdCBzdHlsZXMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHN0eWxlcz86IFQgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBgPGRpYWxvZz5gIGVsZW1lbnQuIElmIHRoaXMgcHJvcGVydHkgaXMgZGVmaW5lZCxcclxuICAgICAqIHRoZSBbW3N0eWxlXV0gcHJvcGVydHkgaXMgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dTdHlsZUNsYXNzPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSB0aGF0IGlzIHJldHVybmVkIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBwb3B1cCBieSBwcmVzc2luZyB0aGUgRXNjYXBlIGtleS4gSWYgdGhpc1xyXG4gICAgICogcHJvcGVydHkgaXMgdW5kZWZpbmVkLCB0aGUgcG9wdXAgY2Fubm90IGJlIGNsb3NlZCB3aXRoIHRoZSBFc2NhcGUga2V5LiBUaGUgZGVmYXVsdCB2YWx1ZSBpc1xyXG4gICAgICogdW5kZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBlc2NhcGVSZXR1cm5WYWx1ZT86IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhUTUwgZWxlbWVudCB1bmRlciB3aGljaCB0aGUgYDxkaWFsb2c+YCBlbGVtZW50IGlzIGNyZWF0ZWQuIElmIHRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkLFxyXG4gICAgICogdGhlIGA8ZGlhbG9nPmAgZWxlbWVudCBpcyBjcmVhdGVkIHVuZGVyIHRoZSBgPGJvZHk+YCBlbGVtZW50LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFuY2hvckVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFgtY29vcmRpbmF0ZSBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBkaWFsb2cgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQuIElmIHVuZGVmaW5lZCxcclxuICAgICAqIHRoZSBkaWFsb2cgd2lsbCBiZSBjZW50ZXJlZCBob3Jpem9udGFsbHkuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGluaXRpYWxYPzogY3NzLkNzc0xlbmd0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFktY29vcmRpbmF0ZSBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBkaWFsb2cgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQuIElmIHVuZGVmaW5lZCxcclxuICAgICAqIHRoZSBkaWFsb2cgd2lsbCBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBpbml0aWFsWT86IGNzcy5Dc3NMZW5ndGg7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQb3B1cCBjbGFzcyBhbGxvd3MgZGlzcGxheWluZyBtb2RhbCBhbmQgbW9kZWxlc3MgcG9wdXBzLiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvclxyXG4gKiBkaWFsb2dzIGFuZCBtZXNzYWdlIGJveGVzLiBBZnRlciB0aGUgUG9wdXAgaW5zdGFuY2UgaXMgY3JlYXRlZCBpdCBjYW4gYmUgc2hvd24gZWl0aGVyIGFzIG1vZGFsXHJcbiAqIG9yIG1vZGVsZXNzIHBvcHVwLiBCb3RoIHR5cGVzIG9mIHRoZSBwb3B1cCBjYW4gYmUgY2xvc2VkIHVzaW5nIHRoZSBjbG9zZSgpIG1ldGhvZC4gSW4gb3JkZXIgZm9yXHJcbiAqIHRoZSBwb3B1cCB0byBiZSBjbG9zZWQgXCJmcm9tIGluc2lkZVwiIC0gdGhhdCBpcywgYnkgdGhlIGNvbXBvbmVudCwgd2hpY2ggaXMgdXNlZCBhcyB0aGUgcG9wdXBcclxuICogY29udGVudCAtIHRoZSBwb3B1cCBvYmplY3Qgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGlzIGNvbXBvbmVudC5cclxuICogXHJcbiAqIFRoZSBQb3B1cCBjbGFzcyBpdHNlbGYgZG9lc24ndCBwcm92aWRlIGFueSBtZWFucyBmb3IgdGhlIHVzZXIgdG8gc3RhcnQgbW92aW5nIGl0IGFyb3VuZDtcclxuICogaG93ZXZlciwgaXQgYWxsb3dzIGluaXRpYXRpbmcgdGhlIG1vdmUgYWN0aW9uIHVzaW5nIHRoZSBzdGFydE1vdmUoKSBtZXRob2QuIE9uY2UgdGhpcyBtZXRob2RcclxuICogaXMgY2FsbGVkLCB0aGUgUG9wdXAgd2lsbCBzdGFydCBtb25pdG9yaW5nIG1vdXNlIChwb2ludGVyKSBhY3Rpdml0eSBhbmQgbW92ZSB0aGUgZGlhbG9nXHJcbiAqIGFjY29yZGluZ2x5LlxyXG4gKiBcclxuICogVGhlIGNvbnRlbnQgb2YgdGhlIHBvcHVwIGNhbiBiZSByZXBsYWNlZCB3aGlsZSBpdCBpcyBiZWluZyBkaXNwbGF5ZWQgdXNpbmcgdGhlIHNldENvbnRlbnQoKVxyXG4gKiBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9wdXA8VCBleHRlbmRzIElQb3B1cFN0eWxlcyA9IElQb3B1cFN0eWxlcz4gZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVBvcHVwXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUG9wdXAgaXMgY29uc3RydWN0ZWQgYnkgc3BlY2lmeWluZyB0aGUgaW5pdGlhbCBjb250ZW50IGl0IHNob3VsZCBkaXNwbGF5IGFuZCB0aGUgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBjb250ZW50PzogYW55LCBvcHRpb25zPzogSVBvcHVwT3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXlzIHRoZSBwb3B1cCBhcyBhIG1vZGVsZXNzIGRpYWxvZy4gVGhlIG1ldGhvZCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgcG9wdXBcclxuICAgICAqIGlzIGFscmVhZHkgb3BlbiBhcyBhIG1vZGFsIHBvcHVwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlbigpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3JldHVyblZhbHVlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZGxnLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXlzIHRoZSBwb3B1cCBhcyBhIG1vZGVsZXNzIGRpYWxvZyBhbmQgcmV0dXJucyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZVxyXG4gICAgICogcG9wdXAgaXMgY2xvc2VkLiBUaGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgaXMgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UoKVxyXG4gICAgICogbWV0aG9kLiAgVGhlIG1ldGhvZCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgcG9wdXAgaXMgYWxyZWFkeSBvcGVuIGFzIGEgbW9kZWxlc3NcclxuICAgICAqIHBvcHVwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01vZGFsKCk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCBuZXcgRXJyb3IoIFwiUG9wdXAgYWxyZWFkeSBvcGVuXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kbGcuc2hvd01vZGFsKCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxQcm9taXNlID0gY3JlYXRlUHJvbWlzZUV4KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBwb3B1cCBhbmQgcGFzc2VzIGEgdmFsdWUgdG8gYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZS4gRm9yIHRoZSBtb2RhbCBwb3B1cHMsXHJcbiAgICAgKiB0aGlzIHZhbHVlIHdpbGwgYmUgdGhlIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBzaG93TW9kYWwoKSBtZXRob2QuXHJcbiAgICAgKiBGb3IgbW9kZWxlc3MgcG9wdXBzLCB0aGlzIHZhbHVlIHdpbGwgYmUgYXZhaWxhYmxlIGFzIHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSByZXRWYWwgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZSggcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRsZy5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlO1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMubW9kYWxQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZS5yZXNvbHZlKCByZXR1cm5WYWx1ZSk7XHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgb3Blbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRsZyAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGVsZXNzLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbiAmJiAhdGhpcy5tb2RhbFByb21pc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGFsLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbiAmJiB0aGlzLm1vZGFsUHJvbWlzZSAhPSBudWxsO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHNldCBieSB0aGUgY2xvc2UoKSBtZXRob2QuIElmIHRoZSBwb3B1cCBpcyBvcGVuLCB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHJldHVyblZhbHVlKCk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQgb2YgdGhlIHBvcHVwIHdpdGggdGhlIGdpdmVuIG9uZS5cclxuICAgICAqIEBwYXJhbSBjb250ZW50IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29udGVudCggY29udGVudDogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGZsYWcgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgcG9wdXAgaXMgY3VycmVudGx5IHZpc2libGUgb3IgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlzVmlzaWJsZSggdjogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pc1Zpc2libGUgPSB2O1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIFN0YXJ0cyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cyBhbmQgbW92ZXMgdGhlIHBvcHVwIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG4gICAgICogaW50ZW50ZWQgdG8gYmUgY2FsbGVkIGZyb20gYSBtb3VzZWRvd24gZXZlbnQgaGFuZGxlZCBlaXRoZXIgYnkgYSBkZXJpdmVkIGNsYXNzIG9yIGJ5XHJcbiAgICAgKiB0aGUgcG9wdXAgY2FsbGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnRNb3ZlKCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGxnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIC8vIHdlIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHByb3BhZ2F0aW9uIHNvIHRoYXQgbW91c2UgbW92ZW1lbnRzIGRvbid0IGNhdXNlXHJcblx0XHQvLyAvLyB0ZXN0IGluIHRoZSBwb3B1cCBhbmQgb24gdGhlIHBhZ2UgdG8gYmUgc2VsZWN0ZWQuXHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCByZWN0ID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR0aGlzLm1vdmVQb2ludE9mZnNldFggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5tb3ZlUG9pbnRPZmZzZXRZID0gY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArIFwicHhcIjtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBTdG9wcyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cy4gVGhpcyBtZXRob2QgYWxsb3dzIHByb2dyYW1tYXRpY2FsbHkgaW50ZXJydXB0XHJcbiAgICAgKiBkaWFsb2cgbW92aW5nIG9wZXJhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wTW92ZSgpXHJcblx0e1xyXG4gICAgICAgIGlmICghdGhpcy5kbGcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vdmVQb2ludE9mZnNldFggPSB0aGlzLm1vdmVQb2ludE9mZnNldFkgPSAwO1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcbiAgICAgKiBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG4gICAgICogYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgbW92ZVRvKCBuZXdYOiBudW1iZXIsIG5ld1k6IG51bWJlcilcclxuXHR7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCBuZXdYLCBuZXdZKTtcclxuICAgICAgICB0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBkZXJpYmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2QsIHRoZXkgbXVzdCBjYWxsIHN1cGVyLndpbGxNb3VudCgpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcInBvcHVwXCIsIHRoaXMpO1xyXG5cdH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBkZXJpYmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2QsIHRoZXkgbXVzdCBjYWxsIHN1cGVyLndpbGxVbm1vdW50KClcclxuICAgICAqL1xyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJwb3B1cFwiKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlciBtZXRob2Qgc2ltcGx5IHJldHVybnMgdGhlIGN1cnJlbnQgY29udGVudCBidXQgaXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBDcmVhdGVzIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBjcmVhdGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIG9idGFpbiB0aGUgYW5jaG9yIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFuY2hvckVsZW1lbnQgPyB0aGlzLm9wdGlvbnMuYW5jaG9yRWxlbWVudCA6IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIG91ciBkZWZhdWx0IHN0eWxlcyBhbmQgaWYgc3R5bGVzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIHRoZW4gYWN0aXZhdGVcclxuICAgICAgICAvLyB0aGVtIHRvby5cclxuICAgICAgICB0aGlzLmRlZmF1bHRTdHlsZXMgPSBjc3MuYWN0aXZhdGUoIHRoaXMuZ2V0RGVmYXVsdFN0eWxlcygpKSBhcyBUO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnN0eWxlcylcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25hbFN0eWxlcyA9IGNzcy5hY3RpdmF0ZSggdGhpcy5vcHRpb25zLnN0eWxlcykgYXMgVDtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGRpYWxvZyBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIERPTVxyXG4gICAgICAgIHRoaXMuZGxnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaWFsb2dcIik7XHJcbiAgICAgICAgdGhpcy5kbGcuY2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ1N0eWxlQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXM/LmRpYWxvZywgdGhpcy5kZWZhdWx0U3R5bGVzLmRpYWxvZyk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50LmFwcGVuZENoaWxkKCB0aGlzLmRsZyk7XHJcblxyXG4gICAgICAgIC8vIGFzc2lnbiBwb3NpdGlvbmluZyBzdHlsZXMgZGlyY3RseSB0byB0aGUgZGlhbG9nIGVsZW1lbnQuIElmIHggYW5kL29yIHkgYXJlIHVuZGVmaW5lZCxcclxuICAgICAgICAvLyB3ZSBjZW50ZXIgdGhlIGRpYWxvZyBob3Jpem9udGFsbHkgYW5kL29yIHZlcnRpY2FsbHlcclxuICAgICAgICBsZXQgc3R5bGU6IGNzcy5TdHlsZXNldCA9IHsgcG9zaXRpb246IFwiZml4ZWRcIiB9O1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zIHx8IHRoaXMub3B0aW9ucy5pbml0aWFsWCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzdHlsZS5sZWZ0ID0gc3R5bGUucmlnaHQgPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3R5bGUubGVmdCA9IHRoaXMub3B0aW9ucy5pbml0aWFsWDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgdGhpcy5vcHRpb25zLmluaXRpYWxZID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9IHN0eWxlLmJvdHRvbSA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdHlsZS50b3AgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbFk7XHJcblxyXG4gICAgICAgIGNzcy5zZXRFbGVtZW50U3R5bGUoIHRoaXMuZGxnLCBzdHlsZSwgY3NzLlNjaGVkdWxlclR5cGUuU3luYyk7XHJcblxyXG4gICAgICAgIC8vIG1vdW50IHRoZSBjb21wb25lbnRcclxuICAgICAgICBtaW0ubW91bnQoIHRoaXMsIHRoaXMuZGxnKVxyXG5cclxuICAgICAgICAvLyBlc3RhYmxpc2ggbGlzdGVuZXIgZm9yIGtleWJvYXJkIGV2ZW50c1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlc3Ryb3lzIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyByZW1vdmUgbGlzdGVuZXIgZm9yIGtleWJvYXJkIGV2ZW50c1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIC8vIHVubW91bnQgdGhlIGNvbnRlbnRcclxuICAgICAgICBtaW0udW5tb3VudCggdGhpcy5kbGcpO1xyXG5cclxuICAgICAgICAvLyBkZWFjdGl2YXRlIHN0eWxlc1xyXG4gICAgICAgIGNzcy5hY3RpdmF0ZSggdGhpcy5kZWZhdWx0U3R5bGVzKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTdHlsZXMgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsU3R5bGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3NzLmRlYWN0aXZhdGUoIHRoaXMub3B0aW9uYWxTdHlsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZGlhbG9nIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmRsZy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRsZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hbmNob3JFbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcbiAgICAgKiBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG4gICAgICogYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcbiAgICAgKi9cclxuXHRwcml2YXRlIG1vdmUoIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmIChuZXdYIDwgMClcclxuXHRcdFx0bmV3WCA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdYICsgMzAgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0bmV3WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzA7XHJcblxyXG5cdFx0aWYgKG5ld1kgPCAwKVxyXG5cdFx0XHRuZXdZID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1kgKyAzMCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuXHRcdFx0bmV3WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGVzXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gbmV3WCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IG5ld1kgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBFc2NcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSB0aGUgRXNjYXBlIGtleSBpZiB0aGUgZXNjYXBlUmV0dXJuVmFsdWUgb3B0aW9uIGlzIHVuZGVmaW5lZDsgb3RoZXJ3aXNlLFxyXG4gICAgICAgICAgICAvLyB3ZSBjbG9zZSB0aGUgZGlhbG9nIHdpdGggaXRzIHZhbHVlXHJcbiAgICAgICAgICAgIGxldCByZXRWYWwgPSB0aGlzLmdldFJldHVyblZhbHVlRm9yRXNjYXBlS2V5KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXRWYWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHJldFZhbCk7XHJcbiAgICAgICAgfVxyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgb25Nb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tb3ZlKCBlLmNsaWVudFggLSB0aGlzLm1vdmVQb2ludE9mZnNldFgsIGUuY2xpZW50WSAtIHRoaXMubW92ZVBvaW50T2Zmc2V0WSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBvblN0b3BNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG4gICAgICAgIHRoaXMuc3RvcE1vdmUoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2Ugb3IgY2xhc3NcclxuICAgICAqL1xyXG5cdHByb3RlY3RlZCBnZXREZWZhdWx0U3R5bGVzKCk6IFQgfCBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+XHJcblx0e1xyXG4gICAgICAgIHJldHVybiBEZWZhdWx0UG9wdXBTdHlsZXMgYXMgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxUPjtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBhIHJldHVybiB2YWx1ZSB3aGVuIGNsb3NpbmcgdGhlIHBvcHVwIGFmdGVyIHRoZVxyXG4gICAgICogdXNlciBwcmVzc2VkIHRoZSBFc2Mga2V5LiBJZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQsIHRoZSBwb3B1cCBkb2Vzbid0IGNsb3NlXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0UmV0dXJuVmFsdWVGb3JFc2NhcGVLZXkoKTogYW55XHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gc2ltcGx5IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucz8uZXNjYXBlUmV0dXJuVmFsdWU7XHJcblx0fTtcclxuXHJcblxyXG5cclxuICAgIC8vIENvbnRlbnQgdG8gZGlzcGxheVxyXG4gICAgQHRyaWdnZXIoMClcclxuICAgIHByb3RlY3RlZCBjb250ZW50OiBhbnk7XHJcblxyXG4gICAgLy8gT3B0aW9uc1xyXG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IElQb3B1cE9wdGlvbnM7XHJcblxyXG4gICAgLy8gQWN0aXZhdGVkIGRlZmF1bHQgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdFN0eWxlczogVDtcclxuXHJcbiAgICAvLyBBY3RpdmF0ZWQgb3B0aW9uYWwgc3R5bGVzXHJcbiAgICBwcm90ZWN0ZWQgb3B0aW9uYWxTdHlsZXM6IFQ7XHJcblxyXG4gICAgLy8gQW5jaG9yIGVsZW1lbnQgdW5kZXIgd2hpY2ggdG8gY3JlYXRlIHRoZSBkaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBhbmNob3JFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBEaWFsb2cgZWxlbWVudFxyXG4gICAgcHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuICAgIC8vIFByb21pc2UgdGhhdCBpcyBjcmVhdGVkIGZvciBtb2RhbCBkaWFsb2dzIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBkaWFsb2cgY2xvc2VzLlxyXG4gICAgcHJpdmF0ZSBtb2RhbFByb21pc2U6IFByb21pc2VFeDxhbnk+O1xyXG5cclxuICAgIC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZVxyXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIFZhbHVlIHBhc3NlZCB0byB0aGUgY2xvc2UgbWV0aG9kLlxyXG4gICAgcHJpdmF0ZSBfcmV0dXJuVmFsdWU6IGFueTtcclxuXHJcblx0Ly8gT2Zmc2V0cyBvZiB0aGUgcG9pbnQgd2hlcmUgdGhlIG1vdmUgc3RhcnRlZCBmcm9tIHRoZSBkaWFsb2cgdG9wLWxlZnQgY29ybmVyLiBXZSB1c2UgdGhlbVxyXG5cdC8vIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbG9nIHRvcC1sZWZ0IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcyB3aGlsZSBtb3ZlIGlzXHJcblx0Ly8gaW4gcHJvZ3Jlc3MuXHJcblx0cHJpdmF0ZSBtb3ZlUG9pbnRPZmZzZXRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3ZlUG9pbnRPZmZzZXRZOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlhbG9nQnV0dG9uIGludGVyZmFjZSBkZXNjcmliZXMgYSBzaW5nbGUgYnV0dG9uIGluIHRoZSBkaWFsb2cncyBidXR0b24gYmFyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nQnV0dG9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidXR0b24uIFRoaXMgSUQgaXMgcGFzc2VkIHRvIHRoZSBjYWxsYmFjaywgd2hpY2ggaXMgY2FsbGVkIHdoZW5cclxuICAgICAqIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaWQ6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrLCB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIElmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCwgdGhlXHJcbiAgICAgKiByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBtdXN0IGJlIGRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNhbGxiYWNrPzogKGlkOiBhbnkpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdmFsdWUgd2l0aCB3aGljaCB0aGUgZGlhbG9nIGlzIGNsb3NlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkXHJcbiAgICAgKiAoYW5kIG11c3QgYmUgZGVmaW5lZCkgb25seSBpZiB0aGUgY2FsbGJhY2sgcHJvcGVydHkgaXMgdW5kZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSByZXR1cm5WYWx1ZT86IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgdG8gZGlzcGxheSBpbiB0aGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBjb250ZW50PzogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBpbml0aWFsbHkgZGlzYWJsZWQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlOyB0aGF0XHJcbiAgICAgKiBpcywgdGhlIGJ1dHRvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUG9wdXAgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBwb3B1cCBmcm9tIHRoZSBwb2ludCBvZiB2aWV3IG9mIHRoZSBjb250ZW50LiBUaGlzIGludGVyZmFjZVxyXG4gKiBpcyBwdWJsaXNoZWQgYXMgYSBzZXJ2aWNlIGFuZCBjYW4gYmUgdXNlZCBieSB0aGUgY29udGVudCBjb21wb25lbnRzIHRvIGNsb3NlIHRoZSBwb3B1cC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZyBleHRlbmRzIElQb3B1cFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBidXR0b24gdG8gdGhlIGJ1dHRvbiBiYXIgXHJcbiAgICAgKi9cclxuICAgIGFkZEJ1dHRvbiggYnRuOiBJRGlhbG9nQnV0dG9uKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEaWFsb2dTdHlsZXMgaW50ZXJmYWNlIGRlZmluZXMgc3R5bGVzIHVzZWQgYnkgdGhlIERpYWxvZyBjbGFzcyB0byBjcmVhdGUgZGlmZmVyZW50IGVsZW1lbnRzXHJcbiAqIG9mIHRoZSBkaWFsb2cuIFRoZSBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHByb3ZpZGUgY2xhc3MgcnVsZXMgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcclxuICogLSBkaWFsb2dDYXB0aW9uXHJcbiAqIC0gZGlhbG9nQm9keVxyXG4gKiAtIGRpYWxvZ0J1dHRvbkJhclxyXG4gKiAtIGRpYWxvZ0J1dHRvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlhbG9nU3R5bGVzIGV4dGVuZHMgSVBvcHVwU3R5bGVzXHJcbntcclxuICAgIHJlYWRvbmx5IGRpYWxvZ0NhcHRpb24/OiBjc3MuSUNsYXNzUnVsZSB8IGNzcy5JQ2xhc3NOYW1lUnVsZTtcclxuICAgIHJlYWRvbmx5IGRpYWxvZ0JvZHk/OiBjc3MuSUNsYXNzUnVsZSB8IGNzcy5JQ2xhc3NOYW1lUnVsZTtcclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbkJhcj86IGNzcy5JQ2xhc3NSdWxlIHwgY3NzLklDbGFzc05hbWVSdWxlO1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQnV0dG9uPzogY3NzLklDbGFzc1J1bGUgfCBjc3MuSUNsYXNzTmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlZmF1bHQgc3R5bGVzIHRoYXQgd2lsbCBiZSB1c2VkIGJ5IHRoZSBQb3B1cCBpZiBzdHlsZXMgYXJlIG5vdCBzcGVjaWZpZWQgdXNpbmcgb3B0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RGlhbG9nU3R5bGVzIGV4dGVuZHMgRGVmYXVsdFBvcHVwU3R5bGVzIGltcGxlbWVudHMgSURpYWxvZ1N0eWxlc1xyXG57XHJcbiAgICBkaWFsb2dDYXB0aW9uID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIC8vIGJveFNoYWRvdzogeyB4OiAwLCB5OiA0LCBibHVyOiAyLCBjb2xvcjogXCJibHVlXCIgfSxcclxuICAgICAgICBwYWRkaW5nOiAwLjMsXHJcbiAgICB9KVxyXG5cclxuICAgIGRpYWxvZ0JvZHkgPSBjc3MuJGNsYXNzKHtcclxuICAgICAgICBwYWRkaW5nOiAwLjUsXHJcbiAgICB9KVxyXG5cclxuICAgIGRpYWxvZ0J1dHRvbkJhciA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIixcclxuICAgICAgICBwYWRkaW5nOiBbMC43LCAxLjAxXSxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9KVxyXG5cclxuICAgIGRpYWxvZ0J1dHRvbiA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNCxcclxuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogMS4wMSxcclxuICAgICAgICBtaW5XaWR0aDogNi41XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURpYWxvZ09wdGlvbnMgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9wdGlvbnMgdGhhdCBjb2ZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgdGhlIERpYWxvZ1xyXG4gKiBvYmplY3QuIFRoZXkgYXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IgdG8gdGhlIFtbRGlhbG9nXV0gY2xhc3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ09wdGlvbnMgZXh0ZW5kcyBJUG9wdXBPcHRpb25zPElEaWFsb2dTdHlsZXM+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGF0IENTUyBjbGFzcyB0byB1c2UgZm9yIHRoZSBjYXB0aW9uIHNlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0NhcHRpb24/OiBjc3MuQ2xhc3NQcm9wVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hhdCBDU1MgY2xhc3MgdG8gdXNlIGZvciB0aGUgYm9keSBzZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBkaWFsb2dCb2R5PzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbiBiYXIgc2VjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZGlhbG9nQnV0dG9uQmFyPzogY3NzLkNsYXNzUHJvcFR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoYXQgQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbnMuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpYWxvZ0J1dHRvbj86IGNzcy5DbGFzc1Byb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGlhbG9nIGNsYXNzIGlzIGEgcG9wdXAgdGhhdCBkaXZpZGVzIHRoZSBwb3B1cCBhcmVhIGludG8gdGhyZWUgc2VjdGlvbnM6IGNhcHRpb24sIGJvZHkgYW5kXHJcbiAqIGJ1dHRvbiBiYXIuIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpYWxvZzxUIGV4dGVuZHMgSURpYWxvZ1N0eWxlcyA9IElEaWFsb2dTdHlsZXM+IGV4dGVuZHMgUG9wdXA8VD4gaW1wbGVtZW50cyBJRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBib2R5Q29udGVudD86IGFueSwgY2FwdGlvbkNvbnRlbnQ/OiBhbnksIG9wdGlvbnM/OiBhbnksIC4uLmJ1dHRvbnM6IElEaWFsb2dCdXR0b25bXSlcclxuICAgIHtcclxuICAgICAgICAvLyB3ZSByZXVzZSB0aGUgUG9wdXAncyBjb250ZW50IHByb3BlcnR5IGZvciBkaWFsb2cncyBib2R5XHJcbiAgICAgICAgc3VwZXIoIGJvZHlDb250ZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGVudCA9IGNhcHRpb25Db250ZW50O1xyXG5cclxuICAgICAgICBmb3IoIGxldCBidG4gb2YgYnV0dG9ucylcclxuICAgICAgICAgICAgdGhpcy5hZGRCdXR0b24oIGJ0bik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBidXR0b24gdG8gdGhlIGJ1dHRvbiBiYXIgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRCdXR0b24oIGJ0bjogSURpYWxvZ0J1dHRvbik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuc2V0KCBidG4uaWQsIG5ldyBEaWFsb2dCdXR0b25JbmZvKCBidG4pKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG9yIGNsYXNzXHJcbiAgICAgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0RGVmYXVsdFN0eWxlcygpOiBUIHwgY3NzLklTdHlsZURlZmluaXRpb25DbGFzczxUPlxyXG5cdHtcclxuICAgICAgICByZXR1cm4gRGVmYXVsdERpYWxvZ1N0eWxlcyBhcyBjc3MuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+O1xyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGRlcmliZWQgY2xhc3NlcyBvdmVycmlkZSB0aGlzIG1ldGhvZCwgdGhleSBtdXN0IGNhbGwgc3VwZXIud2lsbE1vdW50KClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLndpbGxNb3VudCgpO1xyXG5cclxuICAgICAgICAvLyBvYnRhaW4gY2xhc3MgbmFtZXMgZm9yIG91ciBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbkNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dDYXB0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dDYXB0aW9uLCB0aGlzLmRlZmF1bHRTdHlsZXMuZGlhbG9nQ2FwdGlvbik7XHJcbiAgICAgICAgdGhpcy5ib2R5Q2xhc3NOYW1lID0gY3NzLmNob29zZUNsYXNzKCB0aGlzLm9wdGlvbnM/LmRpYWxvZ0JvZHksXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXM/LmRpYWxvZ0JvZHksIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2dCb2R5KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkJhckNsYXNzTmFtZSA9IGNzcy5jaG9vc2VDbGFzcyggdGhpcy5vcHRpb25zPy5kaWFsb2dCdXR0b25CYXIsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uYWxTdHlsZXM/LmRpYWxvZ0J1dHRvbkJhciwgdGhpcy5kZWZhdWx0U3R5bGVzLmRpYWxvZ0J1dHRvbkJhcik7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSBjc3MuY2hvb3NlQ2xhc3MoIHRoaXMub3B0aW9ucz8uZGlhbG9nQnV0dG9uLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbmFsU3R5bGVzPy5kaWFsb2dCdXR0b24sIHRoaXMuZGVmYXVsdFN0eWxlcy5kaWFsb2dCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcImRpYWxvZ1wiLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZGVyaWJlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kLCB0aGV5IG11c3QgY2FsbCBzdXBlci53aWxsVW5tb3VudCgpXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblx0fTtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FwdGlvbn1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQm9keX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQnV0dG9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQ2FwdGlvbigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuY2FwdGlvbkNsYXNzTmFtZX1cclxuICAgICAgICAgICAgbW91c2Vkb3duPXt0aGlzLm9uQ2FwdGlvbk1vdXNlRG93bn0+XHJcbiAgICAgICAgICAgIHt0aGlzLmNhcHRpb25Db250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJCb2R5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5ib2R5Q2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge3RoaXMuY29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyQnV0dG9ucygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMuYnV0dG9uQmFyQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge0FycmF5LmZyb20oIHRoaXMuYnV0dG9ucy52YWx1ZXMoKSkubWFwKCBpbmZvID0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtpbmZvLmJ0bi5pZH0gY2xhc3M9e3RoaXMuYnV0dG9uQ2xhc3NOYW1lfSBjbGljaz17KCkgPT4gdGhpcy5vbkJ1dHRvbkNsaWNrZWQoaW5mbyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmZvLmJ0bi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uQ2FwdGlvbk1vdXNlRG93biggZTogTW91c2VFdmVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TW92ZSggZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdXR0b25DbGlja2VkKCBpbmZvOiBEaWFsb2dCdXR0b25JbmZvKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpbmZvLmJ0bi5jYWxsYmFjaylcclxuICAgICAgICAgICAgaW5mby5idG4uY2FsbGJhY2soIGluZm8uYnRuLmlkKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIGluZm8uYnRuLnJldHVyblZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIE9wdGlvbnNcclxuICAgIHByb3RlY3RlZCBvcHRpb25zOiBJRGlhbG9nT3B0aW9ucztcclxuXHJcbiAgICAvLyBNYXAgb2YgYnV0dG9uIElEcyB0byBidXR0b24gaW5mb3JtYXRpb24gb2JqZWN0c1xyXG4gICAgQHRyaWdnZXJcclxuICAgIHByaXZhdGUgY2FwdGlvbkNvbnRlbnQ6IGFueTtcclxuXHJcbiAgICAvLyBNYXAgb2YgYnV0dG9uIElEcyB0byBidXR0b24gaW5mb3JtYXRpb24gb2JqZWN0c1xyXG4gICAgQHRyaWdnZXIoMylcclxuICAgIHByaXZhdGUgYnV0dG9ucyA9IG5ldyBNYXA8YW55LCBEaWFsb2dCdXR0b25JbmZvPigpO1xyXG5cclxuICAgIC8vIENsYXNzIG5hbWUgdG8gdXNlIGZvciB0aGUgY2FwdGlvblxyXG4gICAgcHJpdmF0ZSBjYXB0aW9uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBib2R5XHJcbiAgICBwcml2YXRlIGJvZHlDbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLyBDbGFzcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGJ1dHRvbiBiYXJcclxuICAgIHByaXZhdGUgYnV0dG9uQmFyQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2xhc3MgbmFtZSB0byB1c2UgZm9yIHRoZSBidXR0b25zXHJcbiAgICBwcml2YXRlIGJ1dHRvbkNsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRGlhbG9nQnV0dG9uSW5mbyBjbGFzcyBjb250YWlucyBjdXJyZW50IGluZm9ybXRhaW9uIGFib3V0IGEgc2luZ2xlIGJ1dHRvbiBpbiB0aGUgZGlhbG9nJ3NcclxuICogYnV0dG9uIGJhci5cclxuICovXHJcbmNsYXNzIERpYWxvZ0J1dHRvbkluZm9cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGJ0bjogSURpYWxvZ0J1dHRvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0biA9IGJ0bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gYnRuLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgYnRuOiBJRGlhbG9nQnV0dG9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBjdXJyZW50bHkgZGlzYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERpYWxvZ0J1dHRvbiBlbnVtZXJhdGlvbiBkZWZpbmVzIGNvbnN0YW50cyB0byBpbmRpY2F0ZSBzdGFuZGFyZCBidXR0b25zIHVzZWQgaW4gZGlhbG9ncy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIERpYWxvZ0J1dHRvblxyXG57XHJcblx0Tm9uZSA9IDB4MCxcclxuXHRPSyA9IDB4MSxcclxuXHRDYW5jZWwgPSAweDIsXHJcblx0WWVzID0gMHg0LFxyXG5cdE5vID0gMHg4LFxyXG5cdENsb3NlID0gMHgxMCxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgYnV0dG9ucyBhbmQgYnV0dG9uIGNvbWJpbmF0aW9ucyBmb3JcclxuICogbWVzc2FnZSBib3hlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEJ1dHRvbnNcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSBEaWFsb2dCdXR0b24uTm9uZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBDbG9zZSBidXR0b24gKi9cclxuXHRDbG9zZSA9IERpYWxvZ0J1dHRvbi5DbG9zZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBPSyBidXR0b24gKi9cclxuXHRPSyA9IERpYWxvZ0J1dHRvbi5PSyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBPSyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRPa0NhbmNlbCA9IERpYWxvZ0J1dHRvbi5PSyArIERpYWxvZ0J1dHRvbi5DYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8gPSBEaWFsb2dCdXR0b24uWWVzICsgRGlhbG9nQnV0dG9uLk5vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwgPSBEaWFsb2dCdXR0b24uWWVzICsgRGlhbG9nQnV0dG9uLk5vICsgRGlhbG9nQnV0dG9uLkNhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzdHlsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhlIFBvcHVwIGlmIHN0eWxlcyBhcmUgbm90IHNwZWNpZmllZCB1c2luZyBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveFN0eWxlcyBleHRlbmRzIERlZmF1bHREaWFsb2dTdHlsZXNcclxue1xyXG4gICAgY29udGFpbmVyID0gY3NzLiRjbGFzcyh7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcInN0cmV0Y2hcIixcclxuICAgIH0pXHJcblxyXG4gICAgaWNvbiA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiM2VtXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIC8vIG1hcmdpbklubGluZUVuZDogXCIxZW1cIixcclxuICAgIH0pXHJcblxyXG4gICAgdGV4dCA9IGNzcy4kY2xhc3Moe1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNSxcclxuICAgICAgICBtaW5XaWR0aDogXCIxNWVtXCIsXHJcbiAgICAgICAgbWF4V2lkdGg6IFwiNjBlbVwiLFxyXG4gICAgICAgIG1pbkhlaWdodDogXCIyZW1cIixcclxuICAgICAgICBtYXhIZWlnaHQ6IFwiMjBlbVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3ggY2xhc3MgaXMgYSBkaWFsb2cgdGhhdCBkaXNwbGF5cyBhIG1lc3NhZ2Ugd2l0aCBhIHNldCBvZiBwcmUtZGVmaW5lZCBidXR0b25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveCBleHRlbmRzIERpYWxvZzxNc2dCb3hTdHlsZXM+XHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNob3dNb2RhbCggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKTogUHJvbWlzZTxEaWFsb2dCdXR0b24+XHJcblx0e1xyXG5cdFx0bGV0IG1zZ0JveDogTXNnQm94ID0gbmV3IE1zZ0JveCggbWVzc2FnZSwgdGl0bGUsIGJ1dHRvbnMsIGljb24pO1xyXG5cdFx0cmV0dXJuIG1zZ0JveC5zaG93TW9kYWwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSlcclxuXHR7XHJcblx0XHRzdXBlciggbWVzc2FnZSwgdGl0bGUsIHsgc3R5bGVzOiBNc2dCb3hTdHlsZXMgfSk7XHJcblx0XHR0aGlzLmljb24gPSBpY29uO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlQnV0dG9ucyggYnV0dG9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJCb2R5KCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCB7IGNoYXIsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5vcHRpb25hbFN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Y2hhciAmJlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9e3RoaXMub3B0aW9uYWxTdHlsZXMuaWNvbn0gc3R5bGU9e3tjb2xvcn19PntjaGFyfTwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXt0aGlzLm9wdGlvbmFsU3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbnMoIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBidXR0b25zKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuQ2xvc2U6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2xvc2VcIiwgRGlhbG9nQnV0dG9uLkNsb3NlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5PSzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9rQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBzeW1ib2wgYW5kIGNvbG9yIGZvciBkaXNwbGF5aW5nIHRoZSBpY29uLlxyXG5cdHByaXZhdGUgZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTogeyBjaGFyPzogc3RyaW5nLCBjb2xvcj86IGNzcy5Dc3NDb2xvciB9XHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmljb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5JbmZvOiByZXR1cm4geyBjaGFyOiBcIklcIiwgY29sb3I6IFwiYmx1ZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5XYXJuaW5nOiByZXR1cm4geyBjaGFyOiBcIiFcIiwgY29sb3I6IFwib3JhbmdlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkVycm9yOiByZXR1cm4geyBjaGFyOiBcIlhcIiwgY29sb3I6IFwicmVkXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjaGFyOiBcIj9cIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IERpYWxvZ0J1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbigge1xyXG4gICAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZToga2V5XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUNsYXNzQ29tcFZOLCBJQ29tcG9uZW50LCBVcGRhdGVTdHJhdGVneX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge2NyZWF0ZVdhdGNoZXIsIElXYXRjaGVyfSBmcm9tIFwiLi4vdXRpbHMvVHJpZ2dlcldhdGNoZXJcIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIGNsYXNzIENvbXBCYXNlVk4gaXMgYSBiYXNlIGNsYXNzIGZvciBJbnN0YW5jZVZOIGFuZCBDbGFzc1ZOLiBJdCBwcm92aWRlcyBjb21tb24gZnVuY3Rpb25hbGl0eVxyXG4vLyBpbiB0ZXJtcyBvZiB1cGRhdGUgcmVxdWVzdHMgYW5kIGxpZmVjeWNsZSBtYW5hZ2VtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsYXNzQ29tcFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgSUNsYXNzQ29tcFZOXHJcbntcclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHVibGljIGNvbXA6IElDb21wb25lbnQ7XHJcblxyXG5cclxuXHJcblx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgdXBkYXRlU3RyYXRlZ3koKTogVXBkYXRlU3RyYXRlZ3lcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5ID8gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5KCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKHRoaXMuY29tcCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJyZW5kZXIoKSB3YXMgY2FsbGVkIG9uIHVubW91bnRlZCBjb21wb25lbnQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgcmVuZGVyKCkgb24gY29tcG9uZW50ICR7dGhpcy5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJXYXRjaGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb21wLnZuID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0cnkvY2F0Y2ggYmVjYXVzZSBpdCB3aWxsIGJlIGNhdWdodCB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IGNyZWF0ZVdhdGNoZXIoIHRoaXMuY29tcC5yZW5kZXIsIHRoaXMucmVxdWVzdFVwZGF0ZSwgdGhpcy5jb21wLCB0aGlzKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLnJlbmRlcldhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyV2F0Y2hlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbXAud2lsbFVubW91bnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBuZWVkIHRyeS9jYXRjaCBidXQgb25seSB0byBsb2dcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC53aWxsVW5tb3VudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFeGNlcHRpb24gaW4gd2lsbFVubW91bnQgb2YgY29tcG9uZW50ICcke3RoaXMubmFtZX0nYCwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0XHR0aGlzLmNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNvbXAgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIHZpcnR1YWwgbm9kZSB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbW91bnRlZC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZVxyXG4gICAgLy8gY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyBhZGRlZCB0byB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG4gICAgcHVibGljIGRpZE1vdW50KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wLmRpZE1vdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbmVlZCB0cnkvY2F0Y2ggYnV0IG9ubHkgdG8gbG9nXHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXAuZGlkTW91bnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRXhjZXB0aW9uIGluIGRpZE1vdW50IG9mIGNvbXBvbmVudCAnJHt0aGlzLm5hbWV9J2AsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmhhbmRsZUVycm9yICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29tcC5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBXYXRjaGVyIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBjb21wb25lbnQncyByZW5kZXIgZnVuY3Rpb24uIFRoZSB3YXRjaGVyIHdpbGwgbm90aWNlIGFueVxyXG4gICAgLy8gdHJpZ2dlciBvYmplY3RzIGJlaW5nIHJlYWQgZHVyaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBleGVjdXRpb24gYW5kIHdpbGwgcmVxdWVzdCB1cGRhdGVcclxuICAgIC8vIHRodXMgdHJpZ2dlcnJpbmcgcmUtcmVuZGVyaW5nLlxyXG5cdHByaXZhdGUgcmVuZGVyV2F0Y2hlcjogSVdhdGNoZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtTdHlsZXNldCwgc2V0RWxlbWVudFN0eWxlLCBTY2hlZHVsZXJUeXBlLCBkaWZmU3R5bGVzZXRzLCBTdHJpbmdTdHlsZXNldCwgc2V0RWxlbWVudFN0cmluZ1N0eWxlfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiO1xyXG4vLy8gI2VuZGlmXHJcbjsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBvZiBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3BUeXBlXHJcbntcclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRBdHRyID0gMSxcclxuXHJcblx0Ly8gRXZlbnQgbGlzdGVuZXJzIHNldCB1c2luZyBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcclxuXHRFdmVudCA9IDIsXHJcblxyXG5cdC8vIEN1c3RvbSBhdHRyaWJ1dGVzIGZvciB3aGljaCBoYW5kbGVyIGZhY3RvcmllcyBhcmUgcmVnaXN0ZXJlZFxyXG5cdEN1c3RvbUF0dHIgPSAzLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGtlcHQgYWJvdXQgcHJvcGVydHkgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIHByb3BlcnR5LlxyXG5cdHR5cGU6IFByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzZXR0aW5nLCBkaWZmaW5nLCB1cGRhdGluZyBhbmRcclxuLy8gcmVtb3ZpbmcgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZSBhbmQgcHJvcFZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHNldD86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcblx0Ly8gdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdXBkYXRlRnVuYyBmdW5jdGlvbi4gSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCB0aGUgdmFsdWUgb2YgdGhlXHJcblx0Ly8gYXR0cmlidXRlIHdpbGwgbm90IGNoYW5nZSAodGhhdCBtZWFucyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBhcmUgZXF1YWwpLiBJZiB0aGlzXHJcblx0Ly8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHByb3BlcnR5IHZhbHVlcyBhcmUgY29udmVydGVkIHRvIHN0cmluZyBhbmQgY29tcGFyZWQgYXMgc3RyaW5ncy5cclxuXHQvLyBJZiB0aGVzZSBzdHJpbmdzIGFyZSBkaWZmZXJlbnQsIHRoZSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgIG5ldyB2YWx1ZSBpcyByZXR1cm5lZC5cclxuXHRkaWZmPzogKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkXHJcblx0Ly8gZnJvbSB0aGUgZGlmZiBmdW5jdGlvbi4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgc2V0IGZ1bmN0aW9uIGlzIHVzZWQuIElmXHJcblx0Ly8gdGhlIHNldCBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCBlaXRoZXIsIHRoZSBET00gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhc1xyXG5cdC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCB1cGRhdGVWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHR1cGRhdGU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5yZW1vdmVBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUuXHJcblx0cmVtb3ZlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcblx0Ly8gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuIFRoaXMgaXMgc29tZXRpbWVzIG5lZWRlZCBpZiB0aGUgYXR0cmlidXRlIG5hbWUgY2Fubm90IGJlXHJcblx0Ly8gdXNlZCBhcyBwcm9wZXJ0eSBuYW1lIC0gZm9yIGV4YW1wbGUsIGlmIGF0dHJpYnV0ZSBuYW1lIGNvbnRhaW5zIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW5cclxuXHQvLyBUeXBlU2NyaXB0IGlkZW50aWZpZXIgKGUuZy4gZGFzaCkuXHJcblx0YXR0ck5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGJ1YmJsZXMuIElmIHRoZSBldmVudCBkb2Vzbid0IGJ1YmJsZSwgdGhlIGV2ZW50IGhhbmRsZXJcclxuXHQvLyBtdXN0IGJlIHNldCBvbiB0aGUgZWxlbWVudCBpdHNlbGY7IG90aGVyd2lzZSwgdGhlIGV2ZW50IGhhbmRsZXIgY2FuIGJlIHNldCBvbiB0aGUgcm9vdFxyXG5cdC8vIGFuY2hvciBlbGVtZW50LCB3aGljaCBhbGxvd3MgaGF2aW5nIGEgc2luZ2xlIGV2ZW50IGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgbWFueSBlbGVtZW50cyxcclxuXHQvLyB3aGljaCBpcyBtb3JlIHBlcmZvcm1hbnQuXHJcblx0aXNCdWJibGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIENsYXNzIG9iamVjdCB0aGF0IGNyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRoYW5kbGVyQ2xhc3M6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBjb21iaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgcmVndWxhciBhdHRyaWJ1dGVzIG9yIGV2ZW50cyBvciBjdXN0b20gYXR0cmlidXRlcy4gKi9cclxuZXhwb3J0IHR5cGUgUHJvcEluZm8gPSBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy5cclxuICogICAtIG51bGwgYW5kIHVuZGVmaW5lZCBhcmUgY29udmVydGVkIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICogICAtIGFycmF5cyBhcmUgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmVseSBvbiB0aGUgZWxlbWVudHMgYW5kIHNlcGFyYXRpbmdcclxuICogICAgIHRoZW0gd2l0aCBzcGFjZXMuXHJcbiAqICAgLSBldmVyeXRoaW5nIGVsc2UgaXMgY29udmVydGVkIGJ5IGNhbGxpbmcgdGhlIHRvU3RyaW5nIG1ldGhvZC5cclxuICovXHJcblxyXG5mdW5jdGlvbiB2YWxUb1N0cmluZyggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICh2YWwgPT0gbnVsbClcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0XHRyZXR1cm4gdmFsLm1hcCggaXRlbSA9PiB2YWxUb1N0cmluZyhpdGVtKSkuZmlsdGVyKCBpdGVtID0+ICEhaXRlbSkuam9pbihcIiBcIik7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggcHJvcFZhbCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdmFsVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgcHJvcGVydHkgYXJlIGRpZmZlcmVudCBhbmQgc2V0cyB0aGVcclxuXHQvLyB1cGRhdGVkIHZhbHVlIHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmRcclxuXHQvLyBmYWxzZSBpZiBubyBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWUgaGFzIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGVBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIGdldCBwcm9wZXJ0eSBpbmZvIG9iamVjdFxyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzcGVjaWFsIGNhc2UgKHByb3BlcnR5IGlzIG5vdCBpbiBvdXIgbGlzdCkganVzdCBjb21wYXJlIHRoZW0gYW5kXHJcblx0XHRcdC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBzZXQgdGhlIGF0dHJpYnV0ZSB0byB0aGUgbmV3IHZhbHVlLlxyXG5cdFx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB2YWxUb1N0cmluZyggbmV3UHJvcFZhbCkpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHZhbFRvU3RyaW5nKCB1cGRhdGVWYWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5BdHRyLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLyBSZWdpc3RlciBldmVudHMgd2l0aCBzcGVjaWFsIG5hbWVzXHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0XCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZEluc2VydENhcHR1cmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lckNhcHR1cmVQcm9wLCByZW1vdmU6IHJlbW92ZUxpc3RlbmVyQ2FwdHVyZVByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkUmVtb3ZlQ2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLXJlbW92ZVwiIH0pO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2Ygc3R5bGUgcHJvcGVydHkuIFN0eWxlIHByb3BlcnR5IGNhbiBiZSBzcGVjaWZpZWQgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIHRoZVxyXG4vLyBTdHlsZXNldCBvYmplY3QgZnJvbSB0aGUgTWltY3NzIGxpYnJhcnkuIElmIHRoZSBvbGQgYW5kIG5ldyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgYXJlIG9mXHJcbi8vIGRpZmZlcmVudCB0eXBlcyB0aGUgZGlmZiBmdW5jdGlvbiByZXR1cm5zIHRoZSBuZXcgc3R5bGUgdmFsdWUuIElmIGJvdGggYXJlIG9mIHRoZSBzdHJpbmcgdHlwZSxcclxuLy8gdGhlbiB0aGUgbmV3IHN0cmluZyB2YWx1ZSBpcyByZXR1cm5lZC4gSWYgYm90aCBhcmUgb2YgdGhlIENTU1N0eWxlRGVjbGFyYXRpb24gdHlwZSwgdGhlbiBhblxyXG4vLyBvYmplY3QgaXMgcmV0dXJuZWQgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHN0eWxlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIGNoYW5nZWQuIEZvciB1cGRhdGVkXHJcbi8vIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIGZyb20gdGhlIG5ldyBzdHlsZSB2YWx1ZTsgZm9yIHJlbW92ZWQgaXRlbXMsIHRoZSBrZXkgdmFsdWUgaXMgdW5kZWZpbmVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0c2V0RWxlbWVudFN0eWxlKCBlbG0gYXMgSFRNTEVsZW1lbnQsIHByb3BWYWwsIFNjaGVkdWxlclR5cGUuU3luYyk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZTdHlsZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IFN0eWxlc2V0LCBuZXdQcm9wVmFsOiBTdHlsZXNldCk6IGFueVxyXG57XHJcblx0bGV0IHJlcyA9IGRpZmZTdHlsZXNldHMoIG9sZFByb3BWYWwsIG5ld1Byb3BWYWwpO1xyXG5cclxuXHQvLyB3ZSBoYXZlIHRvIHJldHVybiB1bmRlZmluZWQgYmVjYXVzZSBudWxsIGlzIGNvbnNpZGVyZWQgYSB2YWxpZCB1cGRhdGUgdmFsdWVcclxuXHRyZXR1cm4gcmVzID09IG51bGwgPyB1bmRlZmluZWQgOiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHVwZGF0ZVZhbDogU3RyaW5nU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbSBhcyBIVE1MRWxlbWVudCwgdXBkYXRlVmFsLCBTY2hlZHVsZXJUeXBlLlN5bmMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIElFbG1WTiwgVk5UeXBlLCBzZXRSZWYsIEV2ZW50RnVuY1R5cGUsIFVwZGF0ZVN0cmF0ZWd5LCBSZWZQcm9wVHlwZSwgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXJcclxufSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7XHJcbiAgICBWTkJhc2UsIEROLCBWTiwgVk5VcGRhdGVEaXNwLCBzX2RlZXBDb21wYXJlLCBQcm9wSW5mbywgUHJvcFR5cGUsXHJcbiAgICBFbG1BdHRyLCBDdXN0b21BdHRyUHJvcEluZm8sIEF0dHJQcm9wSW5mbyxcclxuICAgIEV2ZW50UHJvcEluZm99IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBET00gZWxlbWVudCBjcmVhdGVkIHVzaW5nIEpTWC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1WTiBleHRlbmRzIFZOQmFzZSBpbXBsZW1lbnRzIElFbG1WTlxyXG57XHJcblx0Ly8gVGFnIG5hbWUgb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBFbGVtZW50IGlzIFNWRyAoYXMgb3Bwb3NlZCB0byBIVExNKS4gVGhlcmUgYXJlIHNvbWUgU1ZHXHJcblx0Ly8gZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgcmVndWxhciBlbGVtZW50cyAoZS5nLiA8YT4pLiBUaGVyZWZvcmUsIGluIG9yZGVyIHRvXHJcblx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3Igbm90IHdlIG5lZWQgdG8gY2hlY2sgdGhlIG5hbWVzcGFjZVVSSSBvZiB0aGUgcGFyZW50XHJcblx0Ly8gKGFuY2hvcmUpIERPTSBub2RlLlxyXG5cdHB1YmxpYyBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuRWxtO1xyXG5cdFx0dGhpcy5lbG1OYW1lID0gdGFnTmFtZTtcclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUga2V5IHByb3BlcnR5LiBJZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdFxyXG5cdFx0XHQvLyBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBlbGVtZW50J3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5lbG1OYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIGFuZCBub3QgdG8gYW55IG9mIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBvd25ETigpOiBETiB7IHJldHVybiB0aGlzLmVsbTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyBtb3VudCgpOiBETlxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYW4gU1ZHIG9yIEhUTUwgZWxlbWVudCBhbmQgY3JlYXRlIHRoZSBlbGVtZW50XHJcblx0XHRsZXQgc3ZnSW5mbyA9IFN2Z0VsbXMuZ2V0U3ZnRWxtSW5mbyggdGhpcy5lbG1OYW1lKTtcclxuXHRcdHRoaXMuaXNTdmcgPSBzdmdJbmZvICE9PSB1bmRlZmluZWQgJiYgKHN2Z0luZm8gIT09IHRydWUgfHwgdGhpcy5hbmNob3JETi5uYW1lc3BhY2VVUkkuZW5kc1dpdGgoIFwic3ZnXCIpKTtcclxuXHRcdHRoaXMuZWxtID0gdGhpcy5pc1N2Z1xyXG5cdFx0XHQ/IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBTdmdFbG1zLm5hbWVzcGFjZSwgU3ZnRWxtcy5nZXRFbG1OYW1lKCBzdmdJbmZvLCB0aGlzLmVsbU5hbWUpKVxyXG5cdFx0XHQ6IHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy5lbG1OYW1lKTtcclxuXHJcblx0XHQvLyB0cmFuc2xhdGUgcHJvcGVydGllcyBpbnRvIGF0dHJpYnV0ZXMsIGV2ZW50cyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcclxuXHRcdHRoaXMucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEF0dHJzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLmFkZEN1c3RvbUF0dHJzKCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIChpZiBzcGVjaWZpZWQpXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVsbTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVsZWFzZXMgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gdW5zZXQgdGhlIHJlZmVyZW5jZSB2YWx1ZSBpZiBzcGVjaWZpZWQuIFdlIGNoZWNrIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBzdGlsbCBwb2ludHNcclxuXHRcdC8vIHRvIG91ciBlbGVtZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBlbGVtZW50IChhbmQvb3IgY29tcG9uZW50cykgaXQgY2FuIGhhcHBlbiB0aGF0IHRoZSByZWZlcmVuY2UgaXMgY2hhbmdlZFxyXG5cdFx0Ly8gYmVmb3JlIG91ciBlbGVtZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcblx0XHQvLy8gI2lmIFJFTU9WRV9FVkVOVF9MSVNURU5FUlNcclxuXHRcdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0XHQvLyBleHBsaWNpdGx5IHJlbW92ZWQsIHdlIGRvIGl0IHVuZGVyIHRoZSBSRU1PVkVfRVZFTlRfTElTVEVORVJTIG1hY3JvICh0aGF0IGlzLCB3ZVxyXG5cdFx0XHQvLyBub3JtYWxseSBkb24ndCBkbyBpdC4pXHJcblx0XHRcdGlmICh0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHRlcm1pbmF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGlmICh0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUN1c3RvbUF0dHJzKCB0cnVlKTtcclxuXHJcblx0XHQvLyBjbGVhbiB1cFxyXG5cdFx0dGhpcy5lbG0gPSBudWxsO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhc19kZWVwQ29tcGFyZSggdGhpcy5wcm9wcywgKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gcmVuZGVyIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGlmIGVpdGhlciBvbGQgb3IgbmV3IG5vZGUgaGFzIGNoaWxkcmVuXHJcblx0XHRsZXQgc2hvdWxkUmVuZGVyID0gdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHxcclxuXHRcdFx0XHRcdChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4gJiYgKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcHJvcHMgYW5kIGNoaWxkcmVuXHJcblx0XHR0aGlzLnByb3BzID0gKG5ld1ZOIGFzIEVsbVZOKS5wcm9wcztcclxuXHRcdHRoaXMuY2hpbGRyZW4gPSAobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuO1xyXG5cclxuXHRcdHJldHVybiB7IHNob3VsZENvbW1pdCwgc2hvdWxkUmVuZGVyIH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0cHVibGljIGNvbW1pdFVwZGF0ZSggbmV3Vk46IFZOKTogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IG5ld0VsbVZOOiBFbG1WTiA9IG5ld1ZOIGFzIEVsbVZOO1xyXG5cdFx0bmV3RWxtVk4ucGFyc2VQcm9wcygpO1xyXG5cclxuXHRcdC8vIGlmIHJlZmVyZW5jZSBzcGVjaWZpY2F0aW9uIGNoYW5nZWQgdGhlbiBzZXQgb3IgdW5zZXQgaXQgYXMgbmVjZXNzYXJ5XHJcblx0XHRpZiAobmV3RWxtVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvblxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0VsbVZOLnJlZjtcclxuXHJcblx0XHRcdC8vIGlmIHJlZmVyZW5jZSBpcyBub3cgc3BlY2lmaWVkLCBzZXQgaXQgbm93OyBub3RlIHRoYXQgd2UgYWxyZWFkeSBkZXRlcm1pbmVkIHRoYXRcclxuXHRcdFx0Ly8gdGhlIHJlZmVyZW5jZSBvYmplY3QgaXMgZGlmZmVyZW50LlxyXG5cdFx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB0aGlzLmVsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXksIHVwZGF0ZVN0YXJ0ZWd5IGFuZCBjcmVhdG9yIHByb3BlcnR5IChldmVuIGlmIHRoZVxyXG5cdFx0Ly8gdmFsdWVzIGFyZSB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RWxtVk4ua2V5O1xyXG5cdFx0dGhpcy51cGRhdGVTdHJhdGVneSA9IG5ld0VsbVZOLnVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQXR0cnMoIG5ld0VsbVZOLmF0dHJzKTtcclxuXHRcdHRoaXMudXBkYXRlRXZlbnRzKCBuZXdFbG1WTi5ldmVudHMpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXN0b21BdHRycyggbmV3RWxtVk4uY3VzdG9tQXR0cnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIG92ZXIgdGhlIG9yaWdpbmFsIHByb3BlcnRpZXMgYW5kIHB1dHMgdGhlbSBpbnRvIHRoZSBidWNrZXRzIG9mIGF0dHJpYnV0ZXMsIGV2ZW50XHJcblx0Ly8gbGlzdGVuZXJzIGFuZCBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIHBhcnNlUHJvcHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5wcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBwcm9wVmFsOiBhbnksIHByb3BJbmZvOiBQcm9wSW5mbywgcHJvcFR5cGU6IFByb3BUeXBlO1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5wcm9wcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcImtleVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHRoZSBrZXkgcHJvcGVydHkgYmVjYXVzZSB3ZSBhbHJlYWR5IGV4dHJhY3RlZCBpdCBpbiB0aGUgY29uc3RydWN0b3JcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJvcFZhbCA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcFZhbCA9PSBudWxsIHx8IHByb3BWYWwgPT09IGZhbHNlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkLCBudWxsIGFuZCBmYWxzZVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5XHJcblx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInVwZGF0ZVN0cmF0ZWd5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyByZW1lbWJlciB1cGRhdGVTdHJhdGVneSBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlU3RyYXRlZ3kgPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvcGVydHkgYW5kIGRldGVybWluZSBpdHMgdHlwZSAocmVndWxhciBhdHRyaWJ1dGUsIGV2ZW50XHJcblx0XHRcdFx0Ly8gb3IgY3VzdG9tIGF0dHJpYnV0ZSkuIE5vdGUgdGhhdCBnZXRQcm9wZXJ0eUluZm8gbWF5IHJldHVybiBudWxsIG9ubHkgZm9yIHJlZ3VsYXJcclxuXHRcdFx0XHQvLyBhdHRyaWJ1dGVzLlxyXG5cdFx0XHRcdHByb3BJbmZvID0gRWxtQXR0ci5nZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lKTtcclxuXHRcdFx0XHRwcm9wVHlwZSA9IHByb3BJbmZvID8gcHJvcEluZm8udHlwZSA6IFByb3BUeXBlLkF0dHI7XHJcblx0XHRcdFx0aWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5hdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuYXR0cnNbcHJvcE5hbWVdID0geyBpbmZvOiBwcm9wSW5mbywgdmFsOiBwcm9wVmFsIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5FdmVudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRJbmZvID0gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggcHJvcEluZm8sIHByb3BWYWwpO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50SW5mbylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHt9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50c1twcm9wTmFtZV0gPSBldmVudEluZm87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgLy8gaWYgKHByb3BUeXBlID09PSBQcm9wVHlwZS5DdXN0b21BdHRyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRycyA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIGN1c3RvbWUgYXR0cmlidXRlcyB2YWx1ZS4gSGFuZGxlciB3aWxsIGJlIGNyZWF0ZWQgbGF0ZXIuXHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8gYXMgQ3VzdG9tQXR0clByb3BJbmZvLCB2YWw6IHByb3BWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHVuZGVmaW5lZH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgRE9NIGF0dHJpYnV0ZXMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRBdHRycygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuYXR0cnMgPSBudWxsXCIpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuZXZlbnRzKVxyXG5cdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhZGRFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHRldmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSU1xyXG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycy4gU2luY2UgbW9kZXJuIGJyb3dzZXJzIGRvbid0IGxlYWsgd2hlbiBsaXN0ZW5lcnMgYXJlIG5vdFxyXG5cdFx0Ly8gZXhwbGljaXRseSByZW1vdmVkLCB3ZSBkbyBpdCB1bmRlciB0aGUgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSUyBtYWNybyAodGhhdCBpcywgd2VcclxuXHRcdC8vIG5vcm1hbGx5IGRvbid0IGRvIGl0LilcclxuXHRcdHByaXZhdGUgcmVtb3ZlRXZlbnRzKCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4ucmVtb3ZlRXZlbnRzIGNhbGxlZCB3aXRoIHRoaXMuZXZlbnRzID0gbnVsbFwiKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmV2ZW50cylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50KCBuYW1lLCB0aGlzLmV2ZW50c1tuYW1lXSk7XHJcblx0XHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVFdmVudCggbmFtZTogc3RyaW5nLCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBldmVudC53cmFwcGVyLCBldmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgdXBkYXRlRXZlbnRzKCBuZXdFdmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkRXZlbnRzID0gdGhpcy5ldmVudHM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVtb3ZlIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgbmV3XHJcblx0XHQvLyBvbmVzIGFuZCB1cGRhdGUgdGhvc2Ugd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdGlmIChvbGRFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gb2xkRXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZEV2ZW50ID0gb2xkRXZlbnRzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdFdmVudCA9IG5ld0V2ZW50cyA/IG5ld0V2ZW50c1tuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAoIW5ld0V2ZW50KVxyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudCggbmFtZSwgb2xkRXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlRXZlbnQoIG5hbWUsIG9sZEV2ZW50LCBuZXdFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgbmV3IGV2ZW50IGxpc3RlbmVycyBhbmQgYWRkIHRob3NlIHRoYXQgYXJlIG5vdCBmb3VuZCBhbW9uZyB0aGUgb2xkIG9uZXNcclxuXHRcdGlmIChuZXdFdmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3RXZlbnRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEV2ZW50cyAmJiAobmFtZSBpbiBvbGRFdmVudHMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIG5ld0V2ZW50c1tuYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmV2ZW50cyA9IG5ld0V2ZW50cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBldmVudCBsaXN0ZW5lciBhcmUgZGlmZmVyZW50IGFuZCBzZXRzXHJcblx0Ly8gdGhlIHVwZGF0ZWQgdmFsdWUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZCBmYWxzZSBpZiBubyBjaGFuZ2UgaGFzXHJcblx0Ly8gYmVlbiBkZXRlY3RlZC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIG9sZEV2ZW50OiBFdmVudFJ1blRpbWVEYXRhLCBuZXdFdmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBkb3VibGUtZXF1YWwtc2lnbiBmb3IgdXNlQ2FwdHVyZSBpcyBvbiBwdXJwb3NlLCBiZWNhdXNlIHVzZUNhcHR1cmUgY2FuIGJlIHVuZGVmaW5lZCBvciBib29sZWFuXHJcblx0XHRpZiAob2xkRXZlbnQub3JnRnVuYyA9PT0gbmV3RXZlbnQub3JnRnVuYyAmJlxyXG5cdFx0XHRvbGRFdmVudC50aGF0ID09PSBuZXdFdmVudC50aGF0ICYmXHJcblx0XHRcdG9sZEV2ZW50LnVzZUNhcHR1cmUgPT0gbmV3RXZlbnQudXNlQ2FwdHVyZSlcclxuXHRcdHtcclxuXHRcdFx0bmV3RXZlbnQud3JhcHBlciA9IG9sZEV2ZW50LndyYXBwZXI7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBuYW1lLCBvbGRFdmVudC53cmFwcGVyLCBvbGRFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBuZXcgd3JhcHBlciBhbmQgYWRkIGl0IGFzIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggbmV3RXZlbnQpO1xyXG5cdFx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBuZXdFdmVudC53cmFwcGVyLCBuZXdFdmVudC51c2VDYXB0dXJlKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRXZlbnQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIuIFRoZSB3cmFwcGVyIGlzIGJvdW5kIHRvXHJcblx0Ly8gdGhlIGluc3RhbmNlIG9mIEVsbVZOIGFuZCB0aHVzIGNhbiBpbnRlcmNlcHQgZXhjZXB0aW9ucyBhbmQgcHJvY2VzcyB0aGVtIHVzaW5nIHRoZSBzdGFuZGFyZFxyXG5cdC8vIGVycm9yIHNlcnZpY2UuIFVubGVzcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXMgYWxyZWFkeSBhIGJvdW5kIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGNhbGxlZFxyXG5cdC8vIHdpdGggXCJ0aGlzXCIgc2V0IHRvIGVpdGhlciB0aGUgXCJldmVudC50aGF0XCIgb2JqZWN0IG9yLCBpZiB0aGUgbGF0dGVyIGlzIHVuZGVmaW5lZCwgdG8gdGhlXHJcblx0Ly8gXCJjcmVhdG9yXCIgb2JqZWN0LCB3aGljaCBpcyB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGUgZWxlbWVudCBpIGl0cyByZW5kZXJcclxuXHQvLyBtZXRob2QuXHJcblx0cHJpdmF0ZSBjcmVhdGVFdmVudFdyYXBwZXIoIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogRXZlbnRGdW5jVHlwZTxFdmVudD5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53cmFwQ2FsbGJhY2soIGV2ZW50Lm9yZ0Z1bmMsIGV2ZW50LnRoYXQgPyBldmVudC50aGF0IDogdGhpcy5jcmVhdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBjdXN0b20gYXR0cmlidXRlcy5cclxuXHRwcml2YXRlIGFkZEN1c3RvbUF0dHJzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gY3JlYXRlIGFuZCBpbml0aWFsaXplIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyc1xyXG5cdFx0Zm9yKCBsZXQgbmFtZSBpbiB0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3VzdG9tQXR0ciA9IHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXIuIElmIHdlIGNhbm5vdCBjcmVhdGUgdGhlIGhhbmRsZXIsIHJlbW92ZSB0aGUgcHJvcGVydHlcclxuXHRcdFx0Ly8gZnJvbSBvdXIgb2JqZWN0LlxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1c3RvbUF0dHIuaGFuZGxlciA9IG5ldyBjdXN0b21BdHRyLmluZm8uaGFuZGxlckNsYXNzKCB0aGlzLCBjdXN0b21BdHRyLnZhbCwgbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSByZW1vdmVDdXN0b21BdHRycyggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0aWYgKCF0aGlzLmN1c3RvbUF0dHJzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJFbG1WTi5yZW1vdmVDdXN0b21BdHRycyBjYWxsZWQgd2l0aCB0aGlzLmN1c3RvbUF0dHJzID0gbnVsbFwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gb2xkQ3VzdG9tQXR0ci5oYW5kbGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3Q3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQ3VzdG9tQXR0cnMgJiYgKG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgbmV3Q3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgbmV3Q3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VzdG9tQXR0cnMgPSBuZXdDdXN0b21BdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBkZWZpbmluZyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdHB1YmxpYyB1cGRhdGVTdHJhdGVneTogVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhc3NlZCB0byB0aGUgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIEFycmF5IG9mIGNoaWxkcmVuIG9iamVjdHMuXHJcblx0cHJpdmF0ZSBjaGlsZHJlbjogYW55W107XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRoYXQgaXMgc3BlY2lmaWVkIGFzIGEgXCJyZWZcIiBwcm9wZXJ0eS4gUmVmZXJlbmNlIG9iamVjdCBpc1xyXG5cdC8vIHNldCB3aGVuIGFuYWx5emluZyBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgZHVyaW5nIHVwZGF0ZS4gUmVmZXJlbmNlIHZhbHVlIGlzXHJcblx0Ly8gc2V0IGR1cmluZyBtb3VudCBhbmQgdW5zZXQgZHVyaW5nIHVubW91bnQuIFRoZSByZWYgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgb24gdXBkYXRlLlxyXG5cdHByaXZhdGUgcmVmOiBSZWZQcm9wVHlwZTxhbnk+O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBhdHRyaWJ1dGUgbmFtZXMgYW5kIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxyXG5cdHByaXZhdGUgYXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9O1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBzZXJ2ZXMgYXMgYSBtYXAgYmV0d2VlbiBuYW1lcyBvZiBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBwYXJhbWV0ZXJzLlxyXG5cdHByaXZhdGUgZXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGN1c3RvbSBlbGVtZW50IHByb3BlcnRpZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmVcclxuXHQvLyBoYW5kbGVyIG9iamVjdHMgYW5kIHZhbHVlcy5cclxuXHRwcml2YXRlIGN1c3RvbUF0dHJzOiB7IFtuYW1lOiBzdHJpbmddOiBDeXN0b21BdHRyUnVuVGltZURhdGEgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggcmVndWxhciBhdHRyaWJ1dGVcclxuaW50ZXJmYWNlIEF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBhdHRyaWJ1dGUgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBldmVudCBzaG91bGQgYmUgdXNlZCBhcyBDYXB0dXJpbmcgKHRydWUpIG9yIEJ1YmJsaW5nIChmYWxzZSlcclxuXHR2YWw6IGFueTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGV2ZW50IGxpc3RlbmVyXHJcbmludGVyZmFjZSBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGV2ZW50IC0gY2FuIGJlIG51bGxcclxuXHRpbmZvOiBFdmVudFByb3BJbmZvO1xyXG5cclxuXHQvLyBPcmlnaW5hbCBldmVudCBjYWxsYmFjayBwYXNzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBldmVudCBwcm9wZXJ0eSBpbiBKU1hcclxuXHRvcmdGdW5jOiBFdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBieSBcInRoaXNcIiB3aXRoaW4gdGhlIGludm9rZWQgZnVuY3Rpb25cclxuXHR0aGF0PzogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU/OiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogIEV2ZW50RnVuY1R5cGU8RXZlbnQ+O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggY3VzdG9tIHByb3BlcnR5LlxyXG5pbnRlcmZhY2UgQ3lzdG9tQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGN1c3RvbSBhdHRyaWJ1dGUgLSBjYW5ub3QgYmUgbnVsbFxyXG5cdGluZm86IEN1c3RvbUF0dHJQcm9wSW5mbztcclxuXHJcblx0Ly8gQ3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcclxuXHR2YWw6IGFueTtcclxuXHJcblx0Ly8gSGFuZGxlciBvYmplY3QgdGhhdCBrbm93cyB0byBkZWFsIHdpdGggdGhlIHByb3BlcnR5IHZhbHVlc1xyXG5cdGhhbmRsZXI6IElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlIGlzIG9mIHRoZSB0eXBlIHRoYXQgaXMgdXNlZCBmb3IgZXZlbnQgaGFuZGxlcnMuXHJcbi8vIElmIHllcywgdGhlbiByZXR1cm5zIEV2ZW50UnVuVGltZURhdGEgb2JqZWN0OyBvdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5mdW5jdGlvbiBnZXRQcm9wQXNFdmVudFJ1blRpbWVEYXRhKCBpbmZvOiBFdmVudFByb3BJbmZvLCBwcm9wVmFsOiBhbnkpOiBFdmVudFJ1blRpbWVEYXRhXHJcbntcclxuXHRpZiAodHlwZW9mIHByb3BWYWwgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiB7IGluZm8sIG9yZ0Z1bmM6IHByb3BWYWwgYXMgRXZlbnRGdW5jVHlwZTxhbnk+IH07XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHR7XHJcblx0XHRpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgcHJvcFZhbFsxXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBFdmVudEZ1bmNUeXBlPGFueT4sIHVzZUNhcHR1cmU6IHByb3BWYWxbMV0gYXMgYm9vbGVhbiB9O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBFdmVudEZ1bmNUeXBlPGFueT4sIHRoYXQ6IHByb3BWYWxbMV0gfTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHByb3BWYWwubGVuZ3RoID09PSAzKVxyXG5cdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIEV2ZW50RnVuY1R5cGU8YW55PiwgdGhhdDogcHJvcFZhbFsxXSwgdXNlQ2FwdHVyZTogcHJvcFZhbFsyXSBhcyBib29sZWFuIH07XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgYWxsIG90aGVyIHR5cGUgY29tYmluYXRpb25zIHRoZSBwcm9wZXJ0eSBpcyBub3QgdHJlYXRlZCBhcyBhbiBldmVudCBoYW5kbGVyXHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFN2Z0VsbUluZm8gdHlwZSBkZWZpbmVzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gU1ZHIGVsZW1lbnQuIFRoaXNcclxuLy8gaW5mb3JtYXRpb24gY2FuIGJlIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbi8vXHQtIHN0cmluZyAtIGFjdHVhbCBuYW1lIHRvIHVzZSBmb3IgdGhlIGVsZW1lbnQuIFNvbWUgU1ZHIGVsZW1lbnRzIGhhdmUgbmFtZXMgdGhhdCBjYW5ub3QgYmUgdXNlZFxyXG4vL1x0XHRpbiBKWCBkaXJlY3RseSAoZS5nLiBiZWNhdXNlIG9mIGh5cGhlbiBsaWtlIGluIFwiY29sb3ItcHJvZmlsZVwiKS4gSW4gdGhpcyBjYXNlIHRoZSBzdHJpbmdcclxuLy9cdFx0dmFsdWUgd2lsbCBiZSB0aGUgYWN0dWFsIGVsZW1lbnQgbmFtZSB0byBwdXQgaW50byBIVE1MIGRvY3VtZW50LCB3aGlsZSBKU1ggd2lsbCBiZSB1c2luZ1xyXG4vL1x0XHRhIGNhbWVsLWZvcm1hdHRlZCBuYW1lIChlLmcuIFwiY29sb3JQcm9maWxlXCIpLlxyXG4vL1x0LSBib29sZWFuIC0gZmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIGVsZW1lbnQgaXMgXCJkdWFsLXB1cnBvc2VcIjsgdGhhdCBpcywgZWxlbWVudCB3aXRoIHRoaXNcclxuLy9cdFx0bmFtZSBjYW4gYmUgdXNlZCBhcyBlaXRoZXIgSFRNTCBvciBTVkcgZWxlbWVudC5cclxuLy9cdC0gdHVwbGUgb2YgdHdvIGVsZW1lbnRzIC0gc3RyaW5nIGFuZCBib29sZWFuIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFib3ZlIGl0ZW1zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgU3ZnRWxtSW5mbyA9IGJvb2xlYW4gfCBzdHJpbmcgfCBbc3RyaW5nLCBib29sZWFuXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1zIGNsYXNzIGNvbnRhaW5zIHByb3BlcnRpZXMgd2l0aCBuYW1lcyB1c2VkIHRvIGRlZmluZSBTVkcgZWxlbWVudHMgaW4gSlNYLiBXaGVuXHJcbi8vIHdlIG5lZWQgdG8gY3JlYXRlIGFuIGVsZW1lbnQsIHdlIGxvb2t1cCB0aGUgcHJvdmlkZWQgdGFnIG5hbWUgYW5kIGlmIHdlIGZpbmQgaXQgaW4gdGhpcyBjbGFzc1xyXG4vLyB3ZSB1c2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TIHdpdGggdGhlIHByb3BlciBTVkcgbmFtZXNwYWNlIHN0cmluZy4gVmFsdWVzIG9mIHRoZXNlIHByb3BlcnRpZXNcclxuLy8gYXJlIFN2Z0VsbUluZm8gdmFsdWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgU3ZnRWxtc1xyXG57XHJcblx0Ly8gTmFtZXNwYWNlIHVzZWQgdG8gY3JlYXRlIFNWRyBlbGVtZW50cy5cclxuXHRwdWJsaWMgc3RhdGljIG5hbWVzcGFjZTogc3RyaW5nID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gU1ZHIHRhZ1xyXG5cdHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoIHRhZ05hbWU6IHN0cmluZywgaW5mbzogU3ZnRWxtSW5mbyk6IHZvaWRcclxuXHR7XHJcblx0XHRTdmdFbG1zLmluZm9zW3RhZ05hbWVdID0gaW5mbztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBjYW4gYmUgdXNlZCBhcyBhbiBTVkcgZWxlbWVudCBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNTdmdFbG0oIHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGFnTmFtZSBpbiBTdmdFbG1zLmluZm9zO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIGdpdmVuIHRhZyBuYW1lLlxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3ZnRWxtSW5mbyggdGFnTmFtZTogc3RyaW5nKTogU3ZnRWxtSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGluZm9ybWF0aW9uIG9iamVjdCBoYXMgdGhlIFwiZHVhbC1wdXJwb3NlXCIgZmxhZyBzZXQuXHJcblx0cHVibGljIHN0YXRpYyBpc0R1YWxQdXJwb3NlKCBpbmZvOiBTdmdFbG1JbmZvKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KCBpbmZvKSlcclxuXHRcdFx0cmV0dXJuIChpbmZvIGFzIEFycmF5PGFueT4pLmxlbmd0aCA+IDEgPyAoaW5mbyBhcyBbc3RyaW5nLCBib29sZWFuXSlbMV0gOiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gZmFsc2UgOiBpbmZvIGFzIGJvb2xlYW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gdGFnIG5hbWUgaXMgYSBcImR1YWwtcHVycG9zZVwiIGVsZW1lbnQ7IHRoYXQgaXMgY2FuIGJlIGVpdGhlclxyXG5cdC8vIEhUTUwgYW5kIFNWRyBlbGVtZW50LlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNUYWdEdWFsUHVycG9zZSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5pc0R1YWxQdXJwb3NlKCBpbmZvKSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBvYmplY3QgYW5kIHRoZSB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZSggaW5mbzogU3ZnRWxtSW5mbywgdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMCA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVswXSA6IHRhZ05hbWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIiA/IGluZm8gYXMgc3RyaW5nIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWN0dWFsIG5hbWUgdG8gYmUgdXNlZCB0aGUgZ2l2ZW4gdGFnIG5hbWVcclxuXHRwdWJsaWMgc3RhdGljIGdldEVsbU5hbWVGb3JUYWcoIHRhZ05hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBTdmdFbG1JbmZvID0gU3ZnRWxtcy5pbmZvc1t0YWdOYW1lXTtcclxuXHRcdHJldHVybiBpbmZvID8gU3ZnRWxtcy5nZXRFbG1OYW1lKCBpbmZvLCB0YWdOYW1lKSA6IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IG1hcHMgU1ZHIGVsZW1lbnQgbmFtZXMgdG8gU3ZnRWxtSW5mby5cclxuXHRwcml2YXRlIHN0YXRpYyBpbmZvczoge1tlbG1OYW1lOnN0cmluZ106IFN2Z0VsbUluZm99ID1cclxuXHR7XHJcblx0XHRzdmc6IGZhbHNlLFxyXG5cclxuXHRcdGE6IHRydWUsXHJcblx0XHRhbmltYXRlOiBmYWxzZSxcclxuXHRcdGFuaW1hdGVNb3Rpb246IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXHJcblxyXG5cdFx0Y2lyY2xlOiBmYWxzZSxcclxuXHRcdGNsaXBQYXRoOiBmYWxzZSxcclxuXHRcdGNvbG9yUHJvZmlsZTogXCJjb2xvci1wcm9maWxlXCIsXHJcblxyXG5cdFx0ZGVmczogZmFsc2UsXHJcblx0XHRkZXNjOiBmYWxzZSxcclxuXHRcdGRpc2NhcmQ6IGZhbHNlLFxyXG5cclxuXHRcdGVsbGlwc2U6IGZhbHNlLFxyXG5cclxuXHRcdGZlQmxlbmQ6IGZhbHNlLFxyXG5cdFx0ZmVDb2xvck1hdHJpeDogZmFsc2UsXHJcblx0XHRmZUNvbXBvbmVudFRyYW5zZmVyOiBmYWxzZSxcclxuXHRcdGZlQ29tcG9zaXRlOiBmYWxzZSxcclxuXHRcdGZlQ29udm9sdmVNYXRyaXg6IGZhbHNlLFxyXG5cdFx0ZmVEaWZmdXNlTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVEaXNwbGFjZW1lbnRNYXA6IGZhbHNlLFxyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVEcm9wU2hhZG93OiBmYWxzZSxcclxuXHRcdGZlRmxvb2Q6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jQTogZmFsc2UsXHJcblx0XHRmZUZ1bmNCOiBmYWxzZSxcclxuXHRcdGZlRnVuY0c6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jUjogZmFsc2UsXHJcblx0XHRmZUdhdXNzaWFuQmx1cjogZmFsc2UsXHJcblx0XHRmZUltYWdlOiBmYWxzZSxcclxuXHRcdGZlTWVyZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZU5vZGU6IGZhbHNlLFxyXG5cdFx0ZmVNb3JwaG9sb2d5OiBmYWxzZSxcclxuXHRcdGZlT2Zmc2V0OiBmYWxzZSxcclxuXHRcdGZlUG9pbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZVNwZWN1bGFyTGlnaHRpbmc6IGZhbHNlLFxyXG5cdFx0ZmVTcG90TGlnaHQ6IGZhbHNlLFxyXG5cdFx0ZmVUaWxlOiBmYWxzZSxcclxuXHRcdGZlVHVyYnVsZW5jZTogZmFsc2UsXHJcblx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0Zm9yZWlnbk9iamVjdDogZmFsc2UsXHJcblxyXG5cdFx0ZzogZmFsc2UsXHJcblxyXG5cdFx0aGF0Y2g6IGZhbHNlLFxyXG5cdFx0aGF0Y2hwYXRoOiBmYWxzZSxcclxuXHJcblx0XHRpbWFnZTogZmFsc2UsXHJcblxyXG5cdFx0bGluZTogZmFsc2UsXHJcblx0XHRsaW5lYXJHcmFkaWVudDogZmFsc2UsXHJcblxyXG5cdFx0bWFya2VyOiBmYWxzZSxcclxuXHRcdG1hc2s6IGZhbHNlLFxyXG5cdFx0bWV0YWRhdGE6IGZhbHNlLFxyXG5cdFx0bXBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdHBhdGg6IGZhbHNlLFxyXG5cdFx0cGF0dGVybjogZmFsc2UsXHJcblx0XHRwb2x5Z29uOiBmYWxzZSxcclxuXHRcdHBvbHlsaW5lOiBmYWxzZSxcclxuXHJcblx0XHRyYWRpYWxHcmFkaWVudDogZmFsc2UsXHJcblx0XHRyZWN0OiBmYWxzZSxcclxuXHJcblx0XHRzY3JpcHQ6IHRydWUsXHJcblx0XHRzZXQ6IGZhbHNlLFxyXG5cdFx0c29saWRjb2xvcjogZmFsc2UsXHJcblx0XHRzdG9wOiBmYWxzZSxcclxuXHRcdHN0eWxlOiB0cnVlLFxyXG5cdFx0c3dpdGNoOiBmYWxzZSxcclxuXHRcdHN5bWJvbDogZmFsc2UsXHJcblxyXG5cdFx0dGV4dDogZmFsc2UsXHJcblx0XHR0ZXh0UGF0aDogZmFsc2UsXHJcblx0XHR0aXRsZTogdHJ1ZSxcclxuXHRcdHRleHRTcGFuOiBmYWxzZSxcclxuXHJcblx0XHR1c2U6IGZhbHNlLFxyXG5cclxuXHRcdHZpZXc6IGZhbHNlLFxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0Z1bmNQcm94eVByb3BzLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTkJhc2UsIHNfY3VycmVudENsYXNzQ29tcCwgY3JlYXRlV2F0Y2hlciwgVk4sIFZOVXBkYXRlRGlzcCwgSVdhdGNoZXJ9IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8gY29ubmVjdCBiZXR3ZWVuIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgdGhlIFZOcyBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmxldCBzeW1LZXlzVG9Ob2RlcyA9IFN5bWJvbCggXCJzeW1LZXlzVG9Ob2Rlc1wiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY2Fwc3VsdGVzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uLCB3aGljaCBpcyB1c3VhbGx5IGEgbWV0aG9kIG9mIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LiBUaGlzXHJcbiAqIG9iamVjdCByZW1lbWJlcnMgdGhlIGZ1bmN0aW9uLCB0aGUgXCJ0aGlzXCIgcG9pbnRlciB0byB1c2Ugd2hlbiBjYWxsaW5nIHRoZSBmdW5jdGlvbiBhbmQgdGhlXHJcbiAqIGFyZ3VtZW50cyB0byBwYXNzIHRvIGl0LiBUaGlzIGFsbG93cyByZS1yZW5kZXJpbmcgb25seSB0aGUgcGFydCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCBhc1xyXG4gKiB0aG91Z2ggdGhlIG1ldGhvZCB3ZXJlIGEgZnVsbCBibG93biBpbmRlcGVuZGVudCBjb21wb25lbnQuIFVwZGF0aW5nIHRoZSBub2RlcyBpcyBhY2NvbXBsaXNoZWRcclxuICogdXNpbmcgdGhlIEZ1bmNQcm94eSBzdGF0aWMgdXBkYXRlIG1ldGhvZCBhY2NlcHRpbmcgdGhlIGZ1bmN0aW9uIHRvIGJlIHVwZGF0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgc2FtZSBmdW5jdGlvbiBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIHBhcmVudCBjb21wb25lbnQncyByZW5kZXIoKSBtZXRob2QgLVxyXG4gKiBlc3BlY2lhbGx5IChidXQgbm90IG5lY2Vzc2FyaWx5KSBpZiBpdCBpcyBjYWxsZWQgd2l0aCBkaWZmZXJlbnQgcGFyYW1ldGVycy4gVG8gZGlzdGluZ3Vpc2hcclxuICogYmV0d2VlbiBtdWx0aXBsZSBub2RlcyB3aGVuIHVwZGF0aW5nICh1c2luZyBGdW5jUHJveHkudXBkYXRlKSwgYSB1bmlxdWUga2V5IG11c3QgYmUgYXNzaWduZWQuXHJcbiAqIFRoZSBub2RlIHRoZW4gY3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlLiBUaGlzIGxpbmsgaXMgcmVtb3ZlZCB3aGVuIHRoZVxyXG4gKiBub2RlIGlzIHVubW91bnRlZC4gVGhlIGtleSBpcyBvcHRpb25hbCBpZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBvbmx5IG9uY2UgaW4gdGhlIHBhcmVudCdzXHJcbiAqIHJlbmRlciBtZXRob2QuIElmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGFuZCBrZXlzIGFyZSBub3QgcHJvdmlkZWQgb3IgYXJlIHRoZSBzYW1lXHJcbiAqIE1pbWJsZSB3aWxsIGlzc3VlIGFuIGVycm9yLlxyXG4gKiBcclxuICogVGhlIGxpbmsgYmV0d2VlbiB0aGUgZnVuY3Rpb24gYW5kIHRoZSBub2RlcyB0aGF0IHVzZSB0aGlzIGZ1bmN0aW9uIGlzIGtlcHQgaW4gYSBtYXAgZnJvbSB0aGVcclxuICoga2V5cyB0byB0aGUgbm9kZXMuIFRoZSBtYXAgaXMgc3RvcmVkIGluIGEgc3ltYm9sIG9uIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eVZOIGV4dGVuZHMgVk5CYXNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IEZ1bmNQcm94eVByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZSA9IFZOVHlwZS5GdW5jUHJveHk7XHJcblxyXG4gICAgICAgIC8vIHJlbWVtYmVyIGRhdGEgZnJvbSB0aGUgcHJvcHMuIE5vdGUgdGhhdCBpZiB0aGlzQXJnIGlzIHVuZGVmaW5lZCBpdCB3aWxsIGJlIGNoYW5nZWRcclxuICAgICAgICAvLyB0byB0aGUgbm9kZSdzIGNyZWF0b3IgY29tcG9uZW50IHVwb24gbW91bnRpbmdcclxuXHRcdHRoaXMuZnVuYyA9IHByb3BzLmZ1bmMgYXMgKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xyXG5cdFx0dGhpcy50aGlzQXJnID0gcHJvcHMudGhpc0FyZztcclxuXHRcdHRoaXMuYXJncyA9IHByb3BzLmFyZ3M7XHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyByZXBsYWNlQXJncyggYXJnczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hcmdzID0gYXJncztcclxuXHRcdHRoaXMucmVuZGVyUmVxdWlyZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG5cdC8vLyAjZW5kaWZcclxuXHQ7IC8vIHVnbHkgdHJpY2sgdG8gbm90IGxldCB0aGUgVHlwZVNjcmlwdCBjb21waWxlciB0byBzdHJpcCB0aGUgI2VuZGlmIGNvbW1lbnRcclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gaWYgbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHJlbmRlck9uVXBkYXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5yZW5kZXJSZXF1aXJlZDsgfTtcclxuXHJcblxyXG5cclxuICAgIC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmNXYXRjaGVyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfQ09NUFxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgVkVSQk9TRTogQ2FsbGluZyBmdW5jdGlvbiBwcm94eSBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJldHVybiB0aGlzLmZ1bmMuYXBwbHkoIHRoaXMudGhpc0FyZywgdGhpcy5hcmdzKTtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmNXYXRjaGVyKCB0aGlzLmFyZ3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICBpZiAodGhpcy50aGlzQXJnID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMudGhpc0FyZyA9IHRoaXMuY3JlYXRvcjtcclxuXHJcblx0XHQvLyBpZiBhIGtleSB3YXMgbm90IHByb3ZpZGVkIHdlIHVzZSB0aGUgdmFsdWUgb2YgdGhpc0FyZyAod2hpY2ggbWlnaHQgYmUgdGhlIGN1cnJlbnRcclxuXHRcdC8vIGNvbXBvbmVudCkgYXMgYSBrZXkuIElmIHRoaXNBcmcgaXMgdW5kZWZpbmVkIGVpdGhlciB3ZSB1c2UgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhcyBhIGtleS5cclxuICAgICAgICB0aGlzLmxpbmtLZXkgPSB0aGlzLmtleSB8fCB0aGlzLnRoaXNBcmcgfHwgdGhpcy5mdW5jO1xyXG5cclxuXHRcdHRoaXMubGlua05vZGVUb0Z1bmMoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5mdW5jLCB0aGlzLnVwZGF0ZUZyb21XYXRjaGVyLCB0aGlzLnRoaXNBcmcsIHRoaXMpO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuZnVuY1dhdGNoZXIgPSBudWxsO1xyXG5cdFx0dGhpcy51bmxpbmtOb2RlRnJvbUZ1bmMoKTtcclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFuZCB0aGUgc2FtZSB0aGlzQXJnIHByb3BlcnR5XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSBuZXdGdW5jUHJveHlWTi5mdW5jICYmIHRoaXMudGhpc0FyZyA9PT0gbmV3RnVuY1Byb3h5Vk4udGhpc0FyZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNQcm94eVZOLmtleTtcclxuXHRcdHRoaXMubGlua0tleSA9IG5ld0Z1bmNQcm94eVZOLmxpbmtLZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBhcmd1bWVudHMgZnJvbSB0aGUgbmV3IG5vZGU7IHRoZSBmdW5jdGlvbiBpdHNlbGYgYW5kIFwidGhpc0FyZ1wiIHJlbWFpbiB0aGUgc2FtZS5cclxuXHRcdHRoaXMuYXJncyA9IG5ld0Z1bmNQcm94eVZOLmFyZ3M7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgYWxzbyBiZSBjYWxsZWQgLSBidXQgb25seSB0byBjbGVhciB0aGUgcmVuZGVyUmVxdWlyZWQgZmxhZy5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuRG9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29tbWl0cyB1cGRhdGVzIG1hZGUgdG8gdGhpcyBub2RlIHRvIERPTS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcbiAgICBwdWJsaWMgY29tbWl0VXBkYXRlKCBuZXdWTjogVk4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gd2UgdXNlIHRoaXMgbWV0aG9kIG9ubHkgdG8gY2xlYXIgdGhlIHJlbmRlclJlcXVpcmVkIGZsYWdcIlxyXG4gICAgICAgIHRoaXMucmVuZGVyUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZpbmRWTiggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSk6IEZ1bmNQcm94eVZOXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGtleSBpcyB1bmRlZmluZWQsIHdlIHVzZSB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZlxyXG5cdFx0bGV0IGxpbmtLZXk6IGFueSA9IGtleSB8fCB0aGlzQXJnIHx8IHNfY3VycmVudENsYXNzQ29tcCB8fCBmdW5jO1xyXG5cclxuXHRcdC8vIHRyeSB0byBmaW5kIHRoZSBrZXkgaW4gdGhlIG1hcCBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0OyBpZiBub3QgZm91bmQsIGRvIG5vdGhpbmdcclxuXHRcdGxldCBtYXBLZXlzVG9Ob2RlczogTWFwPGFueSxGdW5jUHJveHlWTj4gPSBmdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdHJldHVybiBtYXBLZXlzVG9Ob2RlcyAmJiBtYXBLZXlzVG9Ob2Rlcy5nZXQoIGxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZSggZnVuYzogRnVuY3Rpb24sIGtleT86IGFueSwgdGhpc0FyZz86IGFueSwgYXJncz86IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpbmQgdGhlIG5vZGVcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggZnVuYywga2V5LCB0aGlzQXJnKTtcclxuXHRcdGlmICghdm4pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2bi5hcmdzID0gYXJncztcclxuXHRcdHZuLnJlbmRlclJlcXVpcmVkID0gdHJ1ZTtcclxuXHRcdHZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIHdoZW4gYSB2YWx1ZSBvZiBzb21lIHRyaWdnZXIgb2JqZWN0IGJlaW5nIHdhdGNoZWQgYnkgdGhlIGZ1bmN0aW9uXHJcbiAgICAvLyBpcyBjaGFuZ2VkLlxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGcm9tV2F0Y2hlcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW5kZXJSZXF1aXJlZCA9IHRydWU7XHJcblx0XHR0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBsaW5rTm9kZVRvRnVuYygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IHRoaXMuZnVuY1tzeW1LZXlzVG9Ob2Rlc107XHJcblx0XHRpZiAoIW1hcEtleXNUb05vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRtYXBLZXlzVG9Ob2RlcyA9IG5ldyBNYXA8YW55LEZ1bmNQcm94eVZOPigpO1xyXG5cdFx0XHR0aGlzLmZ1bmNbc3ltS2V5c1RvTm9kZXNdID0gbWFwS2V5c1RvTm9kZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0bWFwS2V5c1RvTm9kZXMuc2V0KCB0aGlzLmxpbmtLZXksIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgdW5saW5rTm9kZUZyb21GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbWFwS2V5c1RvTm9kZXM6IE1hcDxhbnksRnVuY1Byb3h5Vk4+ID0gdGhpcy5mdW5jW3N5bUtleXNUb05vZGVzXTtcclxuXHRcdGlmIChtYXBLZXlzVG9Ob2RlcylcclxuXHRcdFx0bWFwS2V5c1RvTm9kZXMuZGVsZXRlKCB0aGlzLmxpbmtLZXkpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmdcclxuXHRwcml2YXRlIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuXHJcblx0Ly8gT2JqZWN0IHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSB0aGlzQXJnOiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgYXJnczogYW55W107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBiZSByZS1yZW5kZXJlZDsgdGhhdCBpcywgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0cHJpdmF0ZSByZW5kZXJSZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gS2V5IHRoYXQgbGlua3MgdGhlIGZ1bmN0aW9uIGFuZCB0aGlzIG5vZGUuIFRoaXMga2V5IGlzIGVpdGhlciBlcXVhbHMgdG8gdGhlIGtleSBwcm92aWRlZFxyXG5cdC8vIGluIHRoZSBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb3IgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50IG9yIHRvIHRoZSBmdW5jdGlvblxyXG5cdC8vIGl0c2VsZi5cclxuXHRwcml2YXRlIGxpbmtLZXk6IGFueTtcclxuXHJcbiAgICAvLyBXYXRjaGVyIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi4gVGhlIHdhdGNoZXIgd2lsbCBub3RpY2UgYW55IHRyaWdnZXIgb2JqZWN0c1xyXG4gICAgLy8gYmVpbmcgcmVhZCBkdXJpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGV4ZWN1dGlvbiBhbmQgd2lsbCByZXF1ZXN0IHVwZGF0ZSB0aHVzIHRyaWdnZXJyaW5nXHJcbiAgICAvLyByZS1yZW5kZXJpbmcuXHJcblx0cHJpdmF0ZSBmdW5jV2F0Y2hlcjogSVdhdGNoZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtGcmFnbWVudCwgRnVuY0NvbXBUeXBlLCBWTlR5cGV9IGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHsgVk5CYXNlLCBWTiwgVk5VcGRhdGVEaXNwIH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBmdW5jdGlvbiBhLmsuYS4gc3RhdGVsZXNzIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jVk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBub2RlIGNvcnJlc3BvbmRzIHRvIGEgZnJhZ21lbnQgcGxhY2Vob2xkZXIuICovXHJcblx0cHVibGljIHN0YXRpYyBpc1ZOYUZyYWdtZW50KCB2bjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuICh2biBhcyBGdW5jVk4pLmZ1bmMgPT09IEZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogRnVuY0NvbXBUeXBlLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuRnVuY0NvbXA7XHJcblx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5XHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8vICNpZiBWRVJCT1NFX0NPTVBcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyggYFZFUkJPU0U6IENhbGxpbmcgZnVuY3Rpb25hbCBjb21wb25lbnQgJHt0aGlzLm5hbWV9YCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHRcdHtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdFx0Ly8gRE9NIHRyZWUuXHJcblx0XHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0XHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHRcdH1cclxuXHQvLy8gI2VuZGlmXHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSAobmV3Vk4gYXMgRnVuY1ZOKS5mdW5jO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1ZOID0gbmV3Vk4gYXMgRnVuY1ZOO1xyXG5cclxuXHRcdC8vIHJlbWViZXIgdGhlIG5ldyB2YWx1ZSBvZiB0aGUga2V5IHByb3BlcnR5IChldmVuIGlmIGl0IGlzIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdGdW5jVk4ua2V5O1xyXG5cclxuXHRcdC8vIHRha2UgcHJvcGVydGllcyBmcm9tIHRoZSBuZXcgbm9kZVxyXG5cdFx0dGhpcy5mdW5jID0gbmV3RnVuY1ZOLmZ1bmM7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3RnVuY1ZOLnByb3BzO1xyXG5cclxuXHRcdC8vIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvZHVjZWQgYnkgYSBmdW5jdGlvbiBtYXkgZGVwZW5kIG9uIGZhY3RvcnMgYmV5b25kIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3ZSBhbHdheXMgaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gZm9yIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuXHRwcml2YXRlIGZ1bmM6IEZ1bmNDb21wVHlwZTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQsIGZ1bmN0aW9uIG9yIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lJbmRlcGVuZGVudENvbXBWTiwgSUNvbXBvbmVudCwgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcCwgQ2xhc3NDb21wVk59IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBJbnN0YW5jZVZOIGlzIGEgbm9kZSB0aGF0IGhvbGRzIGFuIGluc3RhbmNlIG9mIGFuIElDb21wb25lbnQtaW1wbGVtZW50aW5nIG9iamVjdC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgSUluZGVwZW5kZW50Q29tcFZOXHJcbntcclxuXHRjb25zdHJ1Y3RvciggY29tcDogSUNvbXBvbmVudClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5JbmRlcGVuZGVudENvbXA7XHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZSA/IHRoaXMuY29tcC5kaXNwbGF5TmFtZSA6IHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLiBUaGUgaW5zdGFuY2Ugb2Ygb3VyIGNvbXBvbmVudCBpcyB0aGUga2V5LlxyXG5cdHB1YmxpYyBnZXQga2V5KCk6IGFueSB7IHJldHVybiB0aGlzLmNvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyBpZiBpdCBpcyB0aGUgc2FtZSBjb21wb25lbnQgaW5zdGFuY2UsIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcclxuXHRcdGxldCBuZXdDb21wID0gKG5ld1ZOIGFzIEluZGVwZW5kZW50Q29tcFZOKS5jb21wO1xyXG5cdFx0bGV0IG5lZWRzVXBkYXRpbmcgPSB0aGlzLmNvbXAgIT09IG5ld0NvbXA7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCBpbnN0YW5jZXMgYXJlIGRpZmZlcmVudCwgdGhlbiB3ZSBuZWVkIHRvIHByZXBhcmUgdGhlIG5ldyBpbnN0YW5jZSBmb3JcclxuXHRcdC8vIG1vdW50aW5nIGFuZCB0aGUgb2xkIG9uZSBmb3IgdW5tb3VudGluZy5cclxuXHRcdGlmIChuZWVkc1VwZGF0aW5nKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLndpbGxVbm1vdW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcCA9IG5ld0NvbXA7XHJcblx0XHRcdHRoaXMud2lsbE1vdW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgbmVlZHNVcGRhdGluZyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU1hbmFnZWRDb21wVk4sIElDb21wb25lbnRDbGFzcywgVk5UeXBlLCBJQ29tcG9uZW50LCBzZXRSZWYsIFJlZlByb3BUeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Q2xhc3NDb21wVk4sIFZOQmFzZSwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIElDb21wb25lbnQ8PiBpbnRlcmZhY2UuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTWFuYWdlZENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgSU1hbmFnZWRDb21wVk5cclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudC5cclxuXHRwdWJsaWMgY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogSUNvbXBvbmVudENsYXNzLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuTWFuYWdlZENvbXA7XHJcblx0XHR0aGlzLmNvbXBDbGFzcyA9IGNvbXBDbGFzcztcclxuXHJcblx0XHQvLyBjb3B5IHByb3BlcnRpZXMgdG8gb3VyIG93biBvYmplY3QgZXhjbHVkaW5nIGZyYW1ld29yay1oYW5kbGVkIGtleSBhbmQgcmVmXHJcblx0XHR0aGlzLnByb3BzID0ge307XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWw6IGFueSA9IHByb3BzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZXMgdW5kZWZpbmVkIGFuZCBudWxsXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIga2V5IHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLmtleSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcInJlZlwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eSBidXQgZG9uJ3QgY29weSBpdCB0byB0aGlzLnByb3BzIG9iamVjdFxyXG5cdFx0XHRcdFx0dGhpcy5yZWYgPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGtleSBwcm9wZXJ0eSB3YXMgbm90IHNwZWNpZmllZCwgdXNlIGlkOyBpZiBpZCB3YXMgbm90IHNwZWNpZmllZCBrZXkgd2lsbCByZW1haW5cclxuXHRcdFx0Ly8gdW5kZWZpbmVkLlxyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGNoaWxkcmVuIGFzIHBhcnQgb2YgcHJvcHNcclxuXHRcdHRoaXMucHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjb21wb25lbnRzIGNhbiBkZWZpbmUgdGhlIGRpc3BsYXlOYW1lIHByb3BlcnR5OyBpZiB0aGV5IGRvbid0IHRoZW4gdGhlIGRlZmF1bHQgbmFtZVxyXG5cdFx0Ly8gaXMgdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIG5hbWUgcGx1cyBrZXkgaWYgZGVmaW5lZC4gTm90ZSB0aGF0IGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0Ly8gbWlnaHQgbm90IGJlIGNyZWF0ZWQgeWV0IHdoZW4gdGhpcyBtZXRob2QgaXMgY2FsbGVkXHJcblx0XHRpZiAodGhpcy5jb21wICYmIHRoaXMuY29tcC5kaXNwbGF5TmFtZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLmNvbXBDbGFzcy5uYW1lO1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0cHVibGljIGluaXQoIHBhcmVudDogVk5CYXNlLCBjcmVhdG9yOiBJQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoIHBhcmVudCwgY3JlYXRvcik7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIud2lsbE1vdW50KCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZFxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgY29tcG9uZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRzIChhbmQvb3IgZWxlbWVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuY29tcCk7XHJcblxyXG4gICAgICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoZSBjb21wb25lbnQgY2xhc3MgbmFtZSBpcyB0aGUgc2FtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcENsYXNzID09PSAobmV3Vk4gYXMgTWFuYWdlZENvbXBWTikuY29tcENsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVcGRhdGVzIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYVxyXG5cdC8vIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRpbmcgc3ViLW5vZGVzIGlzIG5lY2Vzc2FyeSBhbmRcclxuXHQvLyBmYWxzZSBvdGhlcndpc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdGxldCBuZXdDbGFzc1ZOID0gbmV3Vk4gYXMgTWFuYWdlZENvbXBWTjtcclxuXHJcblx0XHQvLyBsZXQgdGhlIGNvbXBvbmVudCBrbm93IGFib3V0IHRoZSBuZXcgcHJvcGVydGllcyAoaWYgaXQgaXMgaW50ZXJlc3RlZCBpbiB0aGVtKVxyXG5cdFx0bGV0IHNob3VsZFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy5jb21wLnNob3VsZFVwZGF0ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRzaG91bGRSZW5kZXIgPSB0aGlzLmNvbXAuc2hvdWxkVXBkYXRlKCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0NsYXNzVk4ucmVmICE9PSB0aGlzLnJlZilcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByZWZlcmVuY2Ugb2JqZWN0XHJcblx0XHRcdHRoaXMucmVmID0gbmV3Q2xhc3NWTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0c2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0NsYXNzVk4ucmVmID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHdlIGtub3cgdGhhdCBvdXIgcmVmZXJlbmNlIGlzIGRlZmluZWQsIHNvIHVuc2V0IGl0XHJcblx0XHRcdHNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3Q2xhc3NWTi5rZXk7XHJcblxyXG5cdFx0Ly8gc2hhbGxvdyBjb3B5IHRoZSBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvdGhlciBub2RlIHRvIG91ciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgZ290IG91ciBwcm9wcyBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB3aWxsIGtlZXBcclxuXHRcdC8vIHdvcmtpbmcgd2l0aCBpdCAtIGVzcGVjaWFsbHkgaWYgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QuXHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKCBrZXkgPT4gZGVsZXRlIHRoaXMucHJvcHNba2V5XSk7XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnByb3BzLCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBzaG91bGRSZW5kZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LlxyXG5cdHByaXZhdGUgcmVmOiBSZWZQcm9wVHlwZTxhbnk+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7UHJvbWlzZVByb3h5UHJvcHMsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZSwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW5jYXBzdWx0ZXMgYSByZW5kZXJpbmcgZnVuY3Rpb24sIHdoaWNoIGlzIHVzdWFsbHkgYSBtZXRob2Qgb2YgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQuIFRoaXNcclxuICogb2JqZWN0IHJlbWVtYmVycyB0aGUgZnVuY3Rpb24sIHRoZSBcInRoaXNcIiBwb2ludGVyIHRvIHVzZSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGFuZCB0aGVcclxuICogYXJndW1lbnRzIHRvIHBhc3MgdG8gaXQuIFRoaXMgYWxsb3dzIHJlLXJlbmRlcmluZyBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IGFzXHJcbiAqIHRob3VnaCB0aGUgbWV0aG9kIHdlcmUgYSBmdWxsIGJsb3duIGluZGVwZW5kZW50IGNvbXBvbmVudC4gVXBkYXRpbmcgdGhlIG5vZGVzIGlzIGFjY29tcGxpc2hlZFxyXG4gKiB1c2luZyB0aGUgRnVuY1Byb3h5IHN0YXRpYyB1cGRhdGUgbWV0aG9kIGFjY2VwdGluZyB0aGUgZnVuY3Rpb24gdG8gYmUgdXBkYXRlZC5cclxuICogXHJcbiAqIFRoZSBzYW1lIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIHdpdGhpbiB0aGUgcGFyZW50IGNvbXBvbmVudCdzIHJlbmRlcigpIG1ldGhvZCAtXHJcbiAqIGVzcGVjaWFsbHkgKGJ1dCBub3QgbmVjZXNzYXJpbHkpIGlmIGl0IGlzIGNhbGxlZCB3aXRoIGRpZmZlcmVudCBwYXJhbWV0ZXJzLiBUbyBkaXN0aW5ndWlzaFxyXG4gKiBiZXR3ZWVuIG11bHRpcGxlIG5vZGVzIHdoZW4gdXBkYXRpbmcgKHVzaW5nIEZ1bmNQcm94eS51cGRhdGUpLCBhIHVuaXF1ZSBrZXkgbXVzdCBiZSBhc3NpZ25lZC5cclxuICogVGhlIG5vZGUgdGhlbiBjcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGUuIFRoaXMgbGluayBpcyByZW1vdmVkIHdoZW4gdGhlXHJcbiAqIG5vZGUgaXMgdW5tb3VudGVkLiBUaGUga2V5IGlzIG9wdGlvbmFsIGlmIHRoZSBmdW5jdGlvbiBpcyB1c2VkIG9ubHkgb25jZSBpbiB0aGUgcGFyZW50J3NcclxuICogcmVuZGVyIG1ldGhvZC4gSWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UgYW5kIGtleXMgYXJlIG5vdCBwcm92aWRlZCBvciBhcmUgdGhlIHNhbWVcclxuICogTWltYmxlIHdpbGwgaXNzdWUgYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBUaGUgbGluayBiZXR3ZWVuIHRoZSBmdW5jdGlvbiBhbmQgdGhlIG5vZGVzIHRoYXQgdXNlIHRoaXMgZnVuY3Rpb24gaXMga2VwdCBpbiBhIG1hcCBmcm9tIHRoZVxyXG4gKiBrZXlzIHRvIHRoZSBub2Rlcy4gVGhlIG1hcCBpcyBzdG9yZWQgaW4gYSBjdXN0b20gcHJvcGVydHkgb24gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbWlzZVByb3h5Vk4gZXh0ZW5kcyBWTkJhc2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogUHJvbWlzZVByb3h5UHJvcHMsIGNoaWxkcmVuPzogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuUHJvbWlzZVByb3h5O1xyXG5cdFx0dGhpcy5wcm9taXNlID0gcHJvcHMucHJvbWlzZTtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IHByb3BzLmVycm9yQ29udGVudEZ1bmM7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjaGlsZHJlbjtcclxuXHJcblx0XHR0aGlzLmtleSA9IHByb3BzLmtleTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHByb21pc2UgaXMgc2V0dGxlZCAoc3VjY2Vzc2Z1bGx5IG9yIG5vdCkuXHJcblx0cHVibGljIGdldCBpc1NldHRsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb21pc2UgPT0gbnVsbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Db21wOyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cdDsgLy8gdWdseSB0cmljayB0byBub3QgbGV0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIHRvIHN0cmlwIHRoZSAjZW5kaWYgY29tbWVudFxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IG5hbWUgPSBcIlByb21pc2VcIjtcclxuXHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRuYW1lICs9IFwiQFwiICsgdGhpcy5rZXk7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2F0Y2hQcm9taXNlKCk7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8vLyAjaWYgVVNFX1NUQVRTXHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcbiAgICAgICAgLy8gRE9NIHRyZWUuXHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG4gICAgICAgIHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IG5ld1Byb21pc2VQcm94eVZOID0gbmV3Vk4gYXMgUHJvbWlzZVByb3h5Vk47XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIHByb21pc2Ugb2JqZWN0XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9taXNlID09PSBuZXdQcm9taXNlUHJveHlWTi5wcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3UHJvbWlzZVByb3h5Vk4gPSBuZXdWTiBhcyBQcm9taXNlUHJveHlWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3UHJvbWlzZVByb3h5Vk4ua2V5O1xyXG5cdFx0dGhpcy5jb250ZW50ID0gbmV3UHJvbWlzZVByb3h5Vk4uY29udGVudDtcclxuXHRcdHRoaXMuZXJyb3JDb250ZW50RnVuYyA9IG5ld1Byb21pc2VQcm94eVZOLmVycm9yQ29udGVudEZ1bmM7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogV2FpdHMgZm9yIHRoZSBwcm9taXNlIHRvIHNldHRsZVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgd2F0Y2hQcm9taXNlKCk6IFByb21pc2U8dm9pZD5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gYXdhaXQgdGhpcy5wcm9taXNlO1xyXG5cdFx0XHR0aGlzLnByb21pc2UgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIG5vZGUgaXMgc3RpbGwgbW91bnRlZCwgcmVxdWVzdCB1cGRhdGVcclxuXHRcdFx0aWYgKHRoaXMuaXNNb3VudGVkKVxyXG5cdFx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcm9taXNlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIGFscmVhZHkgdW5tb3VudGVkLCBkbyBub3RoaW5nXHJcblx0XHRcdGlmICghdGhpcy5pc01vdW50ZWQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb250ZW50RnVuYylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRyeVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudCA9IHRoaXMuZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goIGVycjEpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCBcIlVuaGFuZGxlZCByZWplY3RlZCBwcm9taXNlOlwiLCBlcnIxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggXCJVbmhhbmRsZWQgcmVqZWN0ZWQgcHJvbWlzZTpcIiwgZXJyKTtcclxuXHJcblx0XHRcdHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUHJvbWlzZSB0aGF0IHRoaXMgbm9kZSB3YXRjaGVzLlxyXG5cdHByaXZhdGUgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuXHQvLyBDb250ZW50IHRoYXQgdGhpcyBub2RlIGRpc3BsYXlzLiBJbml0aWFsbHkgdGhpcyBjb250ZW50IGlzIHNldCB0byBwcm9wcy5jaGlsZHJlbi4gV2hlblxyXG5cdC8vIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkLCB0aGUgY29udGVudCBpcyBzZXQgdG8gdGhlIHJlc29sdmVkIHZhbHVlLiBJZiB0aGUgcHJvbWlzZSBpc1xyXG5cdC8vIHJlamVjdGVkIGFuZCB0aGUgZXJyb3JDb250ZW50RnVuYyBpcyBkZWZpbmVkLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhbmQgaXRzIHJldHVyblxyXG5cdC8vIHZhbHVlIGlzIHVzZWQgYXMgY29udGVudC5cclxuXHRwcml2YXRlIGNvbnRlbnQ/OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgZXJyb3JDb250ZW50RnVuYz86ICggZXJyOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGtlcHQgYnkgUm9vdCB2aXJ0dWFsIG5vZGUgYWJvdXQgc2VydmljZSBleHBvcnQgcHVibGljYXRpb25zIGFuZCBzdWJzY3JpcHRpb25zLiBUaGVcclxuLy8gc2FtZSBzZXJ2aWNlIGNhbiBiZSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgdG8gYnkgbXVsdGlwbGUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTZXJ2aWNlSW5mb1xyXG57XHJcblx0cHVibGlzaGluZ1ZOczogU2V0PFZOQmFzZT4gPSBuZXcgU2V0PFZOQmFzZT4oKTtcclxuXHRzdWJzY3JpYmVkVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG59XHJcblxyXG4vLyBNYXAgb2Ygc2VydmljZSBJRHMgdG8gc2V0cyBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgc3Vic2NyaWJlZCB0byB0aGlzIHNlcnZpY2UuXHJcbmxldCBzX3NlcnZpY2VJbmZvcyA9IG5ldyBNYXA8c3RyaW5nLFNlcnZpY2VJbmZvPigpO1xyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHdhcyBwdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8ucHVibGlzaGluZ1ZOcy5hZGQoIHNvdXJjZVZOKTtcclxuXHJcblx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRmb3IoIGxldCB2biBvZiBpbmZvLnN1YnNjcmliZWRWTnMpXHJcblx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHVucHVibGlzaGVkIGJ5IHRoZSBnaXZlbiBub2RlLlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybjtcclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmRlbGV0ZSggc291cmNlVk4pO1xyXG5cclxuXHRpZiAoaW5mby5wdWJsaXNoaW5nVk5zLnNpemUgPT09IDAgJiYgaW5mby5zdWJzY3JpYmVkVk5zLnNpemUgPT09IDApXHJcblx0XHRzX3NlcnZpY2VJbmZvcy5kZWxldGUoIGlkKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gbm90aWZ5IGFsbCBzdWJzY3JpYmVkIG5vZGVzIHRoYXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlcnZpY2UgaGFzIGNoYW5nZWRcclxuXHRcdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdFx0dm4ubm90aWZ5U2VydmljZUNoYW5nZWQoIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyBzdWJzY3JpYmVkIHRvIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkKCBpZDogc3RyaW5nLCBzb3VyY2VWTjogVk5CYXNlKTogdm9pZFxyXG57XHJcblx0bGV0IGluZm86IFNlcnZpY2VJbmZvID0gc19zZXJ2aWNlSW5mb3MuZ2V0KCBpZCk7XHJcblx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHR7XHJcblx0XHRpbmZvID0gbmV3IFNlcnZpY2VJbmZvKCk7XHJcblx0XHRzX3NlcnZpY2VJbmZvcy5zZXQoIGlkLCBpbmZvKTtcclxuXHR9XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5hZGQoIHNvdXJjZVZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHVuc3Vic2NyaWJlZCBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnN1YnNjcmliZWRWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBTY2hlZHVsZWRGdW5jVHlwZSwgSUNvbXBvbmVudCwgSVZOb2RlLCBWTlR5cGUsIElDbGFzc0NvbXBWTiwgRnJhZ21lbnQsIEZ1bmNQcm94eSxcclxuICAgIEZ1bmNQcm94eVByb3BzLCBQcm9taXNlUHJveHksIElDb21wb25lbnRDbGFzcywgRnVuY0NvbXBUeXBlXHJcbn0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1xyXG4gICAgVk4sIEROLCBWTlVwZGF0ZURpc3AsIFZOQmFzZSwgVGV4dFZOLCBJbmRlcGVuZGVudENvbXBWTiwgUHJvbWlzZVByb3h5Vk4sXHJcbiAgICBGdW5jUHJveHlWTiwgRWxtVk4sIE1hbmFnZWRDb21wVk4sIEZ1bmNWTiwgZW50ZXJNdXRhdGlvblNjb3BlLCBleGl0TXV0YXRpb25TY29wZVxyXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG4vLyBNYXAgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvbiB0aGUgbmV4dCBVSSBjeWNsZS4gV2UgdXNlIE1hcCBpbiBvcmRlciB0byBub3QgaW5jbHVkZVxyXG4vLyB0aGUgc2FtZSBub2RlIG1vcmUgdGhhbiBvbmNlIC0gd2hpY2ggY2FuIGhhcHBlbiBpZiB0aGUgbm9kZSdzIHJlcXVlc3RVcGRhdGUgbWV0aG9kIGlzIGNhbGxlZFxyXG4vLyBtb3JlIHRoYW4gb25jZSBkdXJpbmcgYSBzaW5nbGUgcnVuIChlLmcuIGR1cmluZyBldmVudCBwcm9jZXNzaW5nKS4gVGhlIHZhbHVlIG1hcHBlZCB0byB0aGVcclxuLy8gbm9kZSBkZXRlcm1pbmVzIHRoZSBvcGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkOlxyXG4vL1x0LSB1bmRlZmluZWQgLSB0aGUgbm9kZSB3aWxsIGJlIHVwZGF0ZWRcclxuLy9cdC0gbnVsbCAtIHRoZSBub2RlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIGl0cyBwYXJlbnRcclxuLy9cdC0gYW55dGhpbmcgZWxzZSAtIHRoZSBub2RlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGlzIG5ldyBjb250ZW50XHJcbmxldCBzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYmVmb3JlXHJcbi8vIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYXJlIHVwZGF0ZWQuIFRoZSBrZXlzIGluIHRoaXMgbWFwIGFyZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb25zIGFuZFxyXG4vLyB0aGUgdmFsdWVzIGFyZSB0aGUgd3JhcHBlciBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIGEgZ2l2ZW4gdmlydHVhbCBub2RlLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBNYXA8U2NoZWR1bGVkRnVuY1R5cGUsU2NoZWR1bGVkRnVuY1R5cGU+KCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIGtleXMgaW4gdGhpcyBtYXAgYXJlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbnMgYW5kXHJcbi8vIHRoZSB2YWx1ZXMgYXJlIHRoZSB3cmFwcGVyIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBnaXZlbiB2aXJ0dWFsIG5vZGUuXHJcbmxldCBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cclxuLy8gSGFuZGxlIG9mIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCAoaW4gY2FzZSBpdCBzaG91bGQgYmUgY2FuY2VsZWQpLlxyXG5sZXQgc19zY2hlZHVsZWRGcmFtZUhhbmRsZTogbnVtYmVyID0gMDtcclxuXHJcbi8vIFN0YXRlIG9mIHRoZSBzY2hlZHVsZXIuXHJcbmxldCBzX3NjaGVkdWxlclN0YXRlOiBTY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcblxyXG4vLyBOdW1iZXIgdGhhdCBzZXJ2ZXMgYXMgYSB1bmlxdWUgSUQgb2YgYW4gdXBkYXRlIGN5Y2xlLiBFYWNoIHVwZGF0ZSBjeWNsZSB0aGUgcm9vdCBub2RlXHJcbi8vIGluY3JlbWVudHMgdGhpcyBudW1iZXIuIEVhY2ggbm9kZSBiZWluZyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgaXMgYXNzaWduZWQgdGhpcyBudW1iZXIuXHJcbi8vIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIHdoZW4gYm90aCBhIGNvbXBvbmVudCBhbmQgaXRzIHBhcmVudCBhcmVcclxuLy8gdXBkYXRlZCBpbiB0aGUgc2FtZSBjeWNsZS5cclxubGV0IHNfY3VycmVudFRpY2s6IG51bWJlciA9IDA7XHJcblxyXG4vLyBOb2RlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIER1cmluZyBjcmVhdGlvbiBhbmQgdXBkYXRpbmcgcHJvY2VzcywgdGhpcyB2YWx1ZSBpcyBzZXRcclxuLy8gZXZlcnkgdGltZSB3ZSByZWN1cnNlIGludG8gc3ViLW5vZGVzIGFuZCByZXN0b3JlZCB3aGVuIHdlIHJldHVybiBiYWNrIHRvIHRoZSBub2RlLiBJZlxyXG4vLyBkdXJpbmcgY3JlYXRpb24gb3IgdXBkYXRpbmcgcHJvY2VzcyBhbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCBpcyBjYXVnaHQgYnkgc29tZSB1cHBlclxyXG4vLyBsZXZlbCBub2RlLCB0aGlzIHZhbHVlIHdpbGwgc3RpbGwgcG9pbnQgYXQgdGhlIG5vZGUgdGhhdCBjYXVzZWQgdGhlIGV4Y2VwdGlvbi5cclxuZXhwb3J0IGxldCBzX2N1cnJlbnRWTjogVk4gPSBudWxsO1xyXG5cclxuLy8gQ2xhc3MtYmFzZWQgY29tcG9uZW50IHdob3NlIHJlbmRlcmluZyB0cmVlIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXHJcbmV4cG9ydCBsZXQgc19jdXJyZW50Q2xhc3NDb21wOiBJQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGdpdmVuIG5vZGUgYXMgdGhlIGN1cnJlbnQgYW5kIGlmIHRoZSBub2RlIGlzIGZvciB0aGUgY29tcG9uZW50LCBzZXQgdGhlIGN1cnJlbnRcclxuICogY29tcG9uZW50LiBSZXR1cm5zIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCB3YXMgcHJldmlvdXNseSB0aGUgY3VycmVudCBvbmUuIEFzIHdlIHJlY3Vyc2Ugb3ZlclxyXG4gKiB2aXJ0dWFsIG5vZGVzIGFuZCBzdWItbm9kZXMsIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiB0byBoYXZlIHRoZSBzX2N1cnJlbnRWTiBhbmRcclxuICogc19jdXJyZW50Q2xhc3NDb21wIHZhcmlhYmxlcyB0byBwb2ludCB0byB0aGUgbm9kZSBhbmQgY29tcG9uZW50IGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFja0N1cnJlbnRWTiggdm46IFZOKTogVk5cclxue1xyXG4gICAgbGV0IHByZXZWTiA9IHNfY3VycmVudFZOO1xyXG4gICAgc19jdXJyZW50Vk4gPSB2bjtcclxuICAgIHNfY3VycmVudENsYXNzQ29tcCA9ICF2biA/IG51bGwgOiAodm4gYXMgYW55KS5jb21wICE9IG51bGwgPyAodm4gYXMgYW55KS5jb21wIDogdm4uY3JlYXRvcjtcclxuICAgIHJldHVybiBwcmV2Vk47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlciBpbmRpY2F0aW5nIGluIHdoYXQgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBjeWNsZSB3ZSBjdXJyZW50bHkgcmVzaWRlLlxyXG5jb25zdCBlbnVtIFNjaGVkdWxlclN0YXRlXHJcbntcclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIG5vdCB3aXRoaW4gdGhlIHVwZGF0ZSBjeWNsZVxyXG5cdElkbGUgPSAwLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYmVmb3JlIHVwZGF0aW5nIG5vZGVzXHJcblx0QmVmb3JlVXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIHVwZGF0aW5nIG5vZGVzXHJcblx0VXBkYXRlLFxyXG5cclxuXHQvLyBUaGUgc2NoZWR1bGVyIGlzIGV4ZWN1dGluZyBmdW5jdGlvbnMgYWZ0ZXIgdXBkYXRpbmcgbm9kZXNcclxuXHRBZnRlclVwZGF0ZSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogV3JhcHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCByZXR1cm5zIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiB0aGVcclxuICogZ2l2ZW4gdmlydHVhbCBub2RlLiBUaGUgZ2l2ZW4gXCJ0aGF0XCIgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzXHJcbiAqIGV4ZWN1dGVkLiBJZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgaXMgcHJvY2Vzc2VkIGJ5IHRoZSBNaW1ibCBlcnJvclxyXG4gKiBoYW5kbGluZyBtZWNoYW5pc20gc28gdGhhdCB0aGUgZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYVxyXG4gKiBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkLlxyXG4gKiBAcGFyYW0gdGhpc0NhbGxiYWNrIE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGlzQ2FsbGJhY2s/OiBvYmplY3QsIHZuPzogSVZOb2RlKTogVFxyXG57XHJcbiAgICAvLyBpZiBcInRoaXNcIiBmb3IgdGhlIGNhbGxiYWNrIHdhcyBub3QgcGFzc2VkIGJ1dCB2biB3YXMsIGNoZWNrIHdoZXRoZXIgdGhlIHZuIGlzIGEgY29tcG9uZW50O1xyXG4gICAgLy8gaWYgeWVzLCB1c2UgaXQgYXMgXCJ0aGlzXCI7IG90aGVyd2lzZSwgdXNlIHZuJ3MgY3JlYXRvciBjb21wb25lbnQuXHJcbiAgICBpZiAoIXRoaXNDYWxsYmFjayAmJiB2bilcclxuICAgICAgICB0aGlzQ2FsbGJhY2sgPSAodm4gYXMgYW55KS5jb21wICE9IG51bGwgPyAodm4gYXMgYW55KS5jb21wIDogdm4uY3JlYXRvcjtcclxuXHJcbiAgICByZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGlzQ2FsbGJhY2ssIGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENhbGxiYWNrV3JhcHBlciBmdW5jdGlvbiBpcyB1c2VkIHRvIHdyYXAgY2FsbGJhY2tzIGluIG9yZGVyIHRvIGhhdmUgaXQgZXhlY3V0ZWQgaW4gYSBNaW1ibFxyXG4gKiBjb250ZXh0LiBUaGUgZnVuY3Rpb24gaXMgdXN1YWxseSBib3VuZCB0byBhIHZpcnR1YWwgbm9kZSBhcyBcInRoaXNcIiBhbmQgdG8gdHdvIHBhcmFtZXRlcnM6IHRoZVxyXG4gKiBvYmplY3QgdGhhdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBpcyBleGVjdXRlZCBhbmQgdGhlIG9yaWdpbmFsXHJcbiAqIGNhbGxiYWNrIGl0c2VsZi4gVGhlc2UgdHdvIHBhcmFtZXRlcnMgYXJlIGFjY2Vzc2VkIGFzIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGVsZW1lbnRzIG9mIHRoZVxyXG4gKiBgYXJndW1lbnRzYCBhcnJheSkuIFRoZSByZXN0IG9mIHBhcmFtZXRlcnMgaW4gdGhlIGBhcmd1bWVudHNgIGFycmF5IGFyZSBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsXHJcbiAqIGNhbGxiYWNrIGFuZCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGlzIHJldHVybmVkIGZyb20gdGhlIHdyYXBwZXIuIE5vdGUgdGhhdCBcInRoaXNcIlxyXG4gKiBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSBmdW5jdGlvbiB3YXMgc2NoZWR1bGVkIHdpdGhvdXQgYmVpbmcgaW4gdGhlIGNvbnRleHQgb2YgYW55IHZpcnR1YWwgbm9kZS5cclxuICogXHJcbiAqIFRoZSBwcm9wZXIgTWltYmwgY29udGV4dCBlc3RhYmxpc2hlcyB0aGUgZm9sbG93aW5nOlxyXG4gKiAtIGV4ZWN1dGVzIGluIGEgbXV0YXRpb24gc2NvcGUsIHNvIHRoYXQgaWYgYW55IHRyaWdnZXIgdmFscmlhYmxlIGlzIGNoYW5nZWQgZHVyaW5nIHRoZSBleGVjdXRpb25cclxuICogICBvZiB0aGUgY2FsbGJhY2ssIHdhdGNoZXJzIHdpbGwgYmUgb25seSBub3RpZmllZCBhZnRlciB0aGUgY2FsbGJhY2sgaGFzIGZpbmlzaGVkIGl0cyBleGVjdXRpb24uXHJcbiAqIC0gSWYgdGhlIHdyYXBwaW5nIGhhcyBiZWVuIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgYSB2aXJ0dWFsIG5vZGUgKGUuZy4gZnJvbSBhIE1pbWJsIGNvbXBvbmVudCksXHJcbiAqICAgdGhlIFwiY3VycmVudCB2aXJ0dWFsIG5vZGVcIiBhbmQgdGhlIFwiY3VycmVudCBjb21wb25lbnRcIiBhcmUgc2V0IHRvIHRoZSBub2RlIGFuZCBjb21wb25lbnQgdW5kZXJcclxuICogICB3aGljaCB0aGUgY2FsbGJhY2sgd2FzIHdyYXBwZWQuIFRoaXMgYWxsb3cgZm9yIHByb3BlciBKU1ggZXhlY3V0aW9uIGFuZCBmb3IgdXNpbmcgdGhlIE1pbWJsXHJcbiAqICAgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtLlxyXG4gKiBcclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWQgaWYgdGhlIHdyYXBwaW5nIHdhcyBjcmVhdGVkIHdpdGhvdXQgdGhlIFZOIGNvbnRleHQuXHJcbiAgICBsZXQgdm46IFZOID0gdGhpcztcclxuICAgIGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTiggdm4gPyB2biA6IG51bGwpO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcbiAgICAgICAgZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcblx0XHRsZXQgW3RoaXNPcmdDYWxsYmFjaywgb3JnQ2FsbGJhY2ssIC4uLnJlc3RdID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIG9yZ0NhbGxiYWNrLmFwcGx5KCB0aGlzT3JnQ2FsbGJhY2ssIHJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuICAgICAgICBsZXQgZXJyb3JTZXJ2aWNlID0gdm4/LmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuICAgICAgICBpZiAoZXJyb3JTZXJ2aWNlKVxyXG4gICAgICAgICAgICBlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCB2bikpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG4gICAgICAgIGV4aXRNdXRhdGlvblNjb3BlKCk7XHJcblxyXG4gICAgICAgIC8vIHJlc3RvcmUgcHJldmlvdXMgY3VycmVudCBWTlxyXG4gICAgICAgIHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcbiAgICBhZGROb2RlVG9TY2hlZHVsZXIoIHZuKTtcclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgdGljayB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZSBkdXJpbmcgYVxyXG5cdC8vIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cclxuXHRpZiAoc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuQmVmb3JlVXBkYXRlKVxyXG5cdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRzIHRoZSBnaXZlbiBub2RlIGFuZCByZWxhdGVkIGluZm9ybWF0aW9uIGludG8gdGhlIGludGVybmFsIHN0cnVjdHVyZXMgc28gdGhhdCBpdCB3aWxsIGJlXHJcbi8vIHVwZGF0ZWQgZHVyaW5nIHRoZSBuZXh0IE1pbWJsIHRpY2suXHJcbmZ1bmN0aW9uIGFkZE5vZGVUb1NjaGVkdWxlciggdm46IFZOKTogdm9pZFxyXG57XHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2bi50eXBlID09PSBWTlR5cGUuSW5kZXBlbmRlbnRDb21wIHx8IHZuLnR5cGUgPT09IFZOVHlwZS5NYW5hZ2VkQ29tcClcclxuXHR7XHJcblx0XHRsZXQgY29tcCA9ICh2biBhcyBhbnkgYXMgSUNsYXNzQ29tcFZOKS5jb21wO1xyXG5cdFx0aWYgKGNvbXAuYmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGNvbXAuYmVmb3JlVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cclxuXHRcdGlmIChjb21wLmFmdGVyVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBjb21wLmFmdGVyVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gZWl0aGVyIGJlZm9yZSBvciBhZnRlciBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzXHJcbi8vIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVGdW5jQ2FsbCggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIGJlZm9yZVVwZGF0ZTogYm9vbGVhbixcclxuICAgIHRoaXNBcmc/OiBvYmplY3QsIHZuPzogSVZOb2RlKTogdm9pZFxyXG57XHJcblx0Ly8vICNpZiBERUJVR1xyXG5cdGlmICghZnVuYylcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBcIlRyeWluZyB0byBzY2hlZHVsZSB1bmRlZmluZWQgZnVuY3Rpb24gZm9yIHVwZGF0ZVwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHRpZiAoYmVmb3JlVXBkYXRlKVxyXG5cdHtcclxuXHRcdGlmICghc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5oYXMoIGZ1bmMpKVxyXG5cdFx0e1xyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGlzQXJnLCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBpcyBhbHdheXMgc2NoZWR1bGVkIGluIHRoZSBuZXh0IGZyYW1lIGV2ZW4gaWYgdGhlXHJcblx0XHRcdC8vIGNhbGwgaXMgbWFkZSBmcm9tIGFub3RoZXIgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24uXHJcblx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZS5oYXMoIGZ1bmMpKVxyXG5cdFx0e1xyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBmdW5jLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGZ1bmMsIHRoaXNBcmcsIHZuKSk7XHJcblxyXG5cdFx0XHQvLyBhbiBcImFmdGVyIHVwZGF0ZVwiIGZ1bmN0aW9uIGlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBjeWNsZSB1bmxlc3MgdGhlIHJlcXVlc3QgaXMgbWFkZVxyXG5cdFx0XHQvLyBlaXRoZXIgZnJvbSBhIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uIGV4ZWN1dGlvbiBvciBkdXJpbmcgYSBub2RlIHVwZGF0ZS5cclxuXHRcdFx0aWYgKHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSAmJiBzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGUpXHJcblx0XHRcdFx0cmVxdWVzdEZyYW1lSWZOZWVkZWQoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjYWxsIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzaG91bGQgYmUgbWFkZSBvciB0aGUgZnJhbWUgaGFzIGFscmVhZHlcclxuLy8gYmVlbiBzY2hlZHVsZWQuXHJcbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk6IHZvaWRcclxue1xyXG5cdGlmIChzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID09PSAwKVxyXG5cdFx0c19zY2hlZHVsZWRGcmFtZUhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggb25TY2hlZHVsZWRGcmFtZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gYSBuZXcgVUkgY3ljbGUgd2hlbiB0aGVyZSBpcyBhIG5lZWQgdG8gdXBkYXRlIFVJIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gb25TY2hlZHVsZWRGcmFtZSgpOiB2b2lkXHJcbntcclxuXHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgcmVxdWVzdHMgd2lsbFxyXG5cdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuICAgIGRvTWltYmxlVGljaygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY29uY2lsZXIgbWFpbiBlbnRyYW5jZSBwb2ludFxyXG5mdW5jdGlvbiBkb01pbWJsZVRpY2soKTogdm9pZFxyXG57XHJcblx0Ly8gaW5jcmVtZW50IHRpY2sgbnVtYmVyLlxyXG5cdHNfY3VycmVudFRpY2srKztcclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYmVmb3JlIHVwZGF0aW5nIGNvbXBvbmVudHMuIElmIHRoaXMgZnVuY3Rpb25cclxuXHQvLyBjYWxscyB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2Qgb3Igc2NoZWR1bGVzIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB1cGRhdGVzLFxyXG5cdC8vIHRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGlzIGN5Y2xlLiBIb3dldmVyLCBpZiBpdCBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkXHJcblx0Ly8gYmVmb3JlIHVwZGF0ZXMsIGl0IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIG5leHQgY3ljbGUuXHJcblx0aWYgKHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZTtcclxuXHRcdGxldCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IHNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlID0gbmV3IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4oKTtcclxuXHRcdGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGNhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLCB0cnVlKTtcclxuXHR9XHJcblxyXG5cdGlmIChzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZS5zaXplID4gMClcclxuXHR7XHJcbiAgICAgICAgLy8vICNpZiBVU0VfU1RBVFNcclxuICAgICAgICAgICAgbGV0IHN0YXRzQWxyZWFkeUV4aXN0ZWQgPSBEZXRhaWxlZFN0YXRzLnN0YXRzICE9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghc3RhdHNBbHJlYWR5RXhpc3RlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGV0YWlsZWRTdGF0cy5zdGF0cyA9IG5ldyBEZXRhaWxlZFN0YXRzKCBgTWltYmwgdGljayAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBpbnRlcm5hbCBzZXQgb2Ygbm9kZXMgYW5kIHJlLWNyZWF0ZSBpdCBzbyB0aGF0IGl0IGlzIHJlYWR5IGZvciBuZXdcclxuXHRcdC8vIHVwZGF0ZSByZXF1ZXN0cy4gQXJyYW5nZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgYW5kIHBlcmZvcm0gdXBkYXRlcy5cclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0XHRsZXQgdm5zU2NoZWR1bGVkRm9yVXBkYXRlID0gc192bnNTY2hlZHVsZWRGb3JVcGRhdGU7XHJcblx0XHRzX3Zuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IG5ldyBTZXQ8Vk4+KCk7XHJcblx0XHRwZXJmb3JtQ29tbWl0UGhhc2UoIHBlcmZvcm1SZW5kZXJQaGFzZSggYXJyYW5nZU5vZGVzQnlEZXB0aCggdm5zU2NoZWR1bGVkRm9yVXBkYXRlKSkpO1xyXG5cclxuICAgICAgICAvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRzQWxyZWFkeUV4aXN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERldGFpbGVkU3RhdHMuc3RhdHMuc3RvcCggdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBEZXRhaWxlZFN0YXRzLnN0YXRzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgTWFwPFNjaGVkdWxlZEZ1bmNUeXBlLFNjaGVkdWxlZEZ1bmNUeXBlPigpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG4vLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuLy9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG4vL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuLy9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuLy8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcbi8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcbmZ1bmN0aW9uIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG57XHJcblx0Ly8gY3JlYXRlIGEgc3BhcnNlIGFycmF5IG9mIGNlcnRhaW4gcmVhc29uYWJsZSBzaXplLiBJZiB3ZSBoYXZlIGRlcHRocyBncmVhdGVyIHRoYW4gdGhpcyxcclxuXHQvLyB0aGUgYXJyYXkgd2lsbCBncm93IGF1dG9tYXRpY2FsbHkgKGFsdGhvdWdoIGl0IGlzIGxlc3MgcGVyZm9ybWFudCBpdCBpcyBzdGlsbCBhY2NlcHRhYmxlKS5cclxuXHRsZXQgdm5zQnlEZXB0aDogVk5bXVtdID0gbmV3IEFycmF5PFZOW10+KDMyKTtcclxuXHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcbiAgICAgICAgLy8gaXQgY2FuIGhhcHBlbiB0aGF0IHdlIGVuY291bnRlciBhbHJlYWR5IHVubW91bnRlZCB2aXJ0dWFsIG5vZGVzIC0gaWdub3JlIHRoZW1cclxuICAgICAgICBpZiAoIXZuLmFuY2hvckROKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG5cdFx0bGV0IGFyciA9IHZuc0J5RGVwdGhbdm4uZGVwdGhdO1xyXG5cdFx0aWYgKCFhcnIpXHJcblx0XHR7XHJcblx0XHRcdGFyciA9IFtdO1xyXG5cdFx0XHR2bnNCeURlcHRoW3ZuLmRlcHRoXSA9IGFycjtcclxuXHRcdH1cclxuXHJcblx0XHRhcnIucHVzaCh2bik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiB2bnNCeURlcHRoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBmb3IgYWxsIGNvbXBvbmVudHMgc2NoZWR1bGVkIGZvciB1cGRhdGUgYW5kIHJlY3Vyc2l2ZWx5IGZvciB0aGVpclxyXG4vLyBzdWItbm9kZXMgd2hlcmUgbmVjZXNzYXJ5LiBSZXR1cm5zIGFycmF5IG9mIFZORGlzcCBzdHJ1Y3R1cmVzIGZvciBlYWNoIHVwZGF0ZWQgbm9kZS5cclxuZnVuY3Rpb24gcGVyZm9ybVJlbmRlclBoYXNlKCB2bnNCeURlcHRoOiBWTltdW10pOiBWTkRpc3BbXVxyXG57XHJcblx0bGV0IHVwZGF0ZWROb2RlRGlzcHM6IFZORGlzcFtdID0gW107XHJcblxyXG4gICAgbGV0IGRpc3A6IFZORGlzcDtcclxuICAgIGZvciggbGV0IHZucyBvZiB2bnNCeURlcHRoKVxyXG5cdHtcclxuICAgICAgICAvLyB2bnNCeURlcHRoIGlzIGEgc3BhcnNlIGFycmF5IHNvIGl0IGNhbiBoYXZlIGhvbGVzXHJcbiAgICAgICAgaWYgKCF2bnMpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBmb3IoIGxldCB2biBvZiB2bnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgdGhlIGZsYWcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGZvciB0aGUgbm9kZVxyXG4gICAgICAgICAgICAgICAgdm4udXBkYXRlUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuICAgICAgICAgICAgICAgIGlmICh2bi5sYXN0VXBkYXRlVGljayA9PT0gc19jdXJyZW50VGljaylcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwID0geyBuZXdWTjogdm4sIGFjdGlvbjogVk5EaXNwQWN0aW9uLlVua25vd24sIG9sZFZOOiB2bn07XHJcbiAgICAgICAgICAgICAgICByZW5kZXJVcGRhdGVkTm9kZSggZGlzcCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkTm9kZURpc3BzLnB1c2goIGRpc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG5lYXJlc3QgZXJyb3IgaGFuZGxpbmcgc2VydmljZS4gSWYgbm9ib2R5IGVsc2UsIGl0IGlzIGltcGxlbWVudGVkXHJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuICAgICAgICAgICAgICAgIGxldCBlcnJvclNlcnZpY2UgPSB2bi5nZXRTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yU2VydmljZS5yZXBvcnRFcnJvciggZXJyLCBzX2N1cnJlbnRWTiA/IGdldFZOUGF0aCggc19jdXJyZW50Vk4pIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJCVUc6IHVwZGF0ZVZpcnR1YWwgdGhyZXcgZXhjZXB0aW9uIGJ1dCBTdGRFcnJvckhhbmRsaW5nIHNlcnZpY2Ugd2FzIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyYWNrQ3VycmVudFZOKCBudWxsKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuLy8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuZnVuY3Rpb24gcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIGRvbid0IHVudGljaXBhdGUgYW55IGV4Y2VwdGlvbnMgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGludm9rZSAzcmQtcGFydHkgY29kZSBoZXJlLlxyXG5cdGZvciggbGV0IGRpc3Agb2YgdXBkYXRlZE5vZGVEaXNwcylcclxuXHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgYmVmb3JlIG9yIGFmdGVyIHVwZGF0ZSBjeWNsZS5cclxuZnVuY3Rpb24gY2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggZnVuY3M6IE1hcDxTY2hlZHVsZWRGdW5jVHlwZSxTY2hlZHVsZWRGdW5jVHlwZT4sIGJlZm9yZVVwZGF0ZTogYm9vbGVhbilcclxue1xyXG5cdGZ1bmNzLmZvckVhY2goICh3cmFwcGVyLCBmdW5jKSA9PlxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHR3cmFwcGVyKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgRXhjZXB0aW9uIHdoaWxlIGludm9raW5nIGZ1bmN0aW9uICR7YmVmb3JlVXBkYXRlID8gXCJiZWZvcmVcIiA6IFwiYWZ0ZXJcIn0gdXBkYXRpbmcgY29tcG9uZW50c1xcbmAsIGVycik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhbmQgcmVuZGVycyB0aGlzIG5vZGUgYW5kIGl0cyBzdWItbm9kZXMuIFRoaXMgbWV0aG9kIGlzIGludm9rZWRcclxuLy8gd2hlbiBhIG5vZGUgaXMgZmlyc3QgbW91bnRlZC4gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGlzXHJcbi8vIG1ldGhvZCAod2hpY2ggY2FuIGJlIG9ubHkgZnJvbSBjb21wb25lbnRzJyBzZXRTaXRlIG9yIHJlbmRlciBtZXRob2RzKSxcclxuLy8gdGhlIGNvbXBvbmVudCBpcyBhc2tlZCB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGVcclxuLy8gY29udGVudCByZXR1cm5lZCBmcm9tIHRoZSBlcnJvciBoYW5kbGluZyBtZXRob2QgaXMgcmVuZGVyZWQ7IG90aGVyd2lzZSwgdGhlIGV4Y2VwdGlvblxyXG4vLyBpcyByZS10aHJvd24uIFRodXMsIHRoZSBleGNlcHRpb24gaXMgcHJvcGFnYXRlZCB1cCB1bnRpbCBpdCBpcyBoYW5kbGVkIGJ5IGEgbm9kZSB0aGF0XHJcbi8vIGhhbmRsZXMgaXQgb3IgdXAgdG8gdGhlIHJvb3Qgbm9kZS5cclxuZnVuY3Rpb24gcmVuZGVyTmV3Tm9kZSggdm46IFZOLCBwYXJlbnQ6IFZOKTogdm9pZFxyXG57XHJcblx0dm4uaW5pdCggcGFyZW50LCBzX2N1cnJlbnRDbGFzc0NvbXApO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuICAgIC8vIGlmIHdpbGxNb3VudCBmdW5jdGlvbiBpcyBkZWZpbmVkIHdlIGNhbGwgaXQgd2l0aG91dCB0cnkvY2F0Y2guIElmIGl0IHRocm93cywgdGhlIGNvbnRyb2xcclxuICAgIC8vIGdvZXMgdG8gZWl0aGVyIHRoZSBhbmNlc3RvciBub2RlIHRoYXQgc3VwcG9ydHMgZXJyb3IgaGFuZGxpbmcgb3IgdGhlIE1pbWJsIHRpY2sgbG9vcFxyXG4gICAgLy8gKHdoaWNoIGhhcyB0cnkvY2F0Y2gpLlxyXG4gICAgaWYgKHZuLndpbGxNb3VudClcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB3aWxsTW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHR2bi53aWxsTW91bnQoKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBub2RlIGRvZXNuJ3QgaW1wbGVtZW50IGByZW5kZXJgLCB0aGUgbm9kZSBuZXZlciBoYXMgYW55IHN1Yi1ub2RlcyAoZS5nLiB0ZXh0IG5vZGVzKVxyXG5cdGlmICh2bi5yZW5kZXIpXHJcblx0e1xyXG4gICAgICAgIC8vIHdlIGNhbGwgdGhlIHJlbmRlciBtZXRob2Qgd2l0aG91dCB0cnkvY2F0Y2hcclxuICAgICAgICBsZXQgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuICAgICAgICBpZiAoc3ViTm9kZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB3ZSBoYXZlIHN1Yi1ub2Rlcywgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgZm9yIHRoZW0gYW5kIHJlbmRlci4gSWYgb3VyIG5vZGVcclxuICAgICAgICAgICAgLy8ga25vd3MgdG8gaGFuZGxlIGVycm9ycywgd2UgZG8gaXQgdW5kZXIgdHJ5L2NhdGNoOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25zIGdvIHRvXHJcbiAgICAgICAgICAgIC8vIGVpdGhlciB0aGUgdW5jZXN0b3Igbm9kZSB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgb3IgdG8gdGhlIE1pbWJsIHRpY2sgbG9vcC5cclxuICAgICAgICAgICAgaWYgKCF2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciggbGV0IHN2biBvZiBzdWJOb2RlcylcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJOZXdOb2RlKCBzdm4sIHZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciggbGV0IHN2biBvZiBzdWJOb2RlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTmV3Tm9kZSggc3ZuLCB2bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGhhbmRsZUVycm9yKCkgb24gbm9kZSAke3ZuLm5hbWV9LiBFcnJvcjpgLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHRoZSBub2RlIGhhbmRsZSB0aGUgZXJyb3IgYW5kIHJlLXJlbmRlcjsgdGhlbiB3ZSByZW5kZXIgdGhlIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgYnV0IHdlIGRvIGl0IHdpdGhvdXQgdHJ5L2NhdGNoIHRoaXMgdGltZTsgb3RoZXJ3aXNlLCB3ZSBtYXkgZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXAgaW4gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIHZuLmhhbmRsZUVycm9yKCBlcnIsIGdldFZOUGF0aCggc19jdXJyZW50Vk4pKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bi5zdWJOb2RlcylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciggbGV0IHN2biBvZiBzdWJOb2RlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck5ld05vZGUoIHN2biwgdm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaW50ZXJsaW5rIHRoZSBzdWItbm9kZXMgd2l0aCBuZXh0IGFuZCBwcmV2IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgbGV0IHByZXZWTjogVk47XHJcbiAgICAgICAgICAgIGZvciggbGV0IHN2biBvZiBzdWJOb2RlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZWTilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2Vk4ubmV4dCA9IHN2bjtcclxuICAgICAgICAgICAgICAgICAgICBzdm4ucHJldiA9IHByZXZWTjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2Vk4gPSBzdm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlbWVtYmVyIHRoZSBzdWItbm9kZXNcclxuICAgICAgICB2bi5zdWJOb2RlcyA9IHN1Yk5vZGVzO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgY3JlYXRlcyBET00gbm9kZXMgZm9yIHRoaXMgVk4gYW5kIGl0cyBzdWItbm9kZXMuXHJcbmZ1bmN0aW9uIGNvbW1pdE5ld05vZGUoIHZuOiBWTiwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pXHJcbntcclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyByZW1lbWJlciB0aGUgYW5jaG9yIG5vZGVcclxuXHR2bi5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cclxuXHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgbW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuXHQvLy8gI2VuZGlmXHJcblx0bGV0IG93bkROID0gdm4ubW91bnQgPyB2bi5tb3VudCgpIDogdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBpZiB3ZSBoYXZlIG91ciBvd24gRE9NIG5vZGUsIGFkZCBpdCB1bmRlciB0aGUgYW5jaG9yIG5vZGVcclxuXHRpZiAob3duRE4pXHJcblx0XHR2bi5hbmNob3JETi5pbnNlcnRCZWZvcmUoIG93bkROLCBiZWZvcmVETik7XHJcblxyXG5cdC8vIGlmIHRoZSBub2RlIGhhcyBzdWItbm9kZXMsIGFkZCBET00gbm9kZXMgZm9yIHRoZW0uIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd25cclxuXHQvLyBET00gbm9kZSB1c2UgaXQgYXMgYW4gYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyBkZXRlcm1pbmUgd2hhdCBub2RlcyB0byB1c2UgYXMgYW5jaG9yIGFuZCBcImJlZm9yZVwiIGZvciB0aGUgc3ViLW5vZGVzXHJcblx0XHRsZXQgbmV3QW5jaG9yRE4gPSBvd25ETiA/IG93bkROIDogYW5jaG9yRE47XHJcblx0XHRsZXQgbmV3QmVmb3JlRE4gPSBvd25ETiA/IG51bGwgOiBiZWZvcmVETjtcclxuXHJcblx0XHQvLyBtb3VudCBhbGwgc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0XHRcdGNvbW1pdE5ld05vZGUoIHN2biwgbmV3QW5jaG9yRE4sIG5ld0JlZm9yZUROKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBkaWRNb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcbiAgICBpZiAodm4uZGlkTW91bnQpXHJcbiAgICAgICAgdm4uZGlkTW91bnQoKTtcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbHMgd2lsbFVubW91bnQgb24gdGhpcyBWTiBhbmQsIGlmIHJlcXVlc3RlZCwgcmVjdXJzaXZlbHkgb24gaXRzIHN1Yi1ub2Rlcy4gVGhpcyBmdW5jdGlvbiBpc1xyXG4vLyBjYWxsZWQgZm9yIGV2ZXJ5IG5vZGUgYmVpbmcgZGVzdHJ1Y3RlZC4gSXQgaXMgY2FsbGVkIG5vbi1yZWN1cnNpdmVseSBvbiB0aGUgdmlydHVhbCBub2RlcyB0aGF0XHJcbi8vIGhhdmUgdGhlaXIgb3duIERPTSBub2RlLiBPbiBzdWNoIG5vZGVzLCB0aGUgdW5tb3VudCBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoZSBub2RlIHdpbGwgYmVcclxuLy8gcHJvcGVybHkgbWFya2VkIGFzIHVubW91bnRlZC4gRm9yIHZpcnR1YWwgbm9kZXMgdGhhdCBkb24ndCBoYXZlIHRoZWlyIG93biBET00gbm9kZSwgdGhpc1xyXG4vLyBmdW5jdGlvbiBpcyBjYWxsZWQgcmVjdXJzaXZlbHkuIHRoZSB1bm1vdW50IG1ldGhvZCB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIHRoZXNlIG5vZGVzO1xyXG4vLyB0aGVyZWZvcmUsIHdlIG5lZWQgdG8gbWFyayB0aGVtIGFzIHVubW91bnRlZCBoZXJlLlxyXG5mdW5jdGlvbiBjYWxsV2lsbFVubW91bnQoIHZuOiBWTiwgcmVjdXJzaXZlOiBib29sZWFuKVxyXG57XHJcbiAgICAvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyBwcm9jZXNzZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcbiAgICAvLyByZW5kZXJpbmcgYWdhaW4gaW4gdGhpcyBjeWNsZS5cclxuICAgIHZuLmxhc3RVcGRhdGVUaWNrID0gc19jdXJyZW50VGljaztcclxuXHJcbiAgICAvLyBmaXJzdCBub3RpZnkgc3ViLW5vZGVzIGlmIHJlY3Vyc2l2ZVxyXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiB2bi5zdWJOb2RlcylcclxuXHR7XHJcbiAgICAgICAgZm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcbiAgICAgICAgICAgIGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTihzdm4pO1xyXG5cclxuICAgICAgICAgICAgY2FsbFdpbGxVbm1vdW50KCBzdm4sIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBwcmV2aW91cyBjdXJyZW50IG5vZGUuXHJcbiAgICAgICAgICAgIHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFyayB0aGUgbm9kZSBhcyB1bm1vdW50ZWRcclxuICAgICAgICAgICAgdm4udGVybSgpO1xyXG4gICAgICAgICAgICB2bi5hbmNob3JETiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8vIG5vdGlmeSBvdXIgbm9kZVxyXG5cdGlmICh2bi53aWxsVW5tb3VudClcclxuXHR7XHJcblx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyB3aWxsVW5tb3VudCgpIG9uIG5vZGUgJHt2bi5uYW1lfWApO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHZuLndpbGxVbm1vdW50KCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHJlbW92ZXMgRE9NIG5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0UmVtb3ZlZE5vZGUoIHZuOiBWTilcclxue1xyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBwcmV2Vk4gPSB0cmFja0N1cnJlbnRWTih2bik7XHJcblxyXG5cdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblxyXG5cdC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIHdlIHdpbGwgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHJlY3Vyc2l2ZWx5IHVubW91bnQgc3ViLW5vZGVzIGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCB3aXRoIHRoZSBwYXJlbnQ7XHJcbiAgICAvLyBob3dldmVyLCB3ZSBuZWVkIHRvIGNhbGwgdGhlaXIgd2lsbFVubW91bnQgbWV0aG9kcy4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlIGl0cyBvd24gRE9NXHJcbiAgICAvLyBub2RlLCB3ZSBuZWVkIHRvIGNhbGwgd2lsbFVubW91bnQgb25seSBvbiB0aGUgbm9kZSBpdHNlbGYgYmVjYXVzZSBsYXRlciB3ZSB3aWxsIHJlY3Vyc2VcclxuICAgIC8vIGludG8gaXRzIHN1Yi1ub2Rlcy5cclxuICAgIGNhbGxXaWxsVW5tb3VudCggdm4sIG93bkROICE9IG51bGwpO1xyXG5cclxuICAgIC8vIGNhbGwgdW5tb3VudCBvbiBvdXIgbm9kZSAtIHJlZ2FyZGxlc3Mgd2hldGhlciBpdCBoYXMgaXRzIG93biBETiBvciBub3RcclxuICAgIGlmICh2bi51bm1vdW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIHVubW91bnQoKSBvbiBub2RlICR7dm4ubmFtZX1gKTtcclxuICAgICAgICAvLy8gI2VuZGlmXHJcbiAgICAgICAgdm4udW5tb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSB2aXJ0dWFsIG5vZGUgaGFzIGl0cyBvd24gRE9NIG5vZGUsIHJlbW92ZSBpdCBmcm9tIHRoZSBET00gdHJlZTsgb3RoZXJ3aXNlLCByZWN1cnNlXHJcbiAgICAvLyBpbnRvIHRoZSBzdWItbm9kZXMuXHJcbiAgICBpZiAob3duRE4pXHJcbiAgICAgICAgKG93bkROIGFzIGFueSBhcyBDaGlsZE5vZGUpLnJlbW92ZSgpO1xyXG4gICAgZWxzZSBpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBmcm9tIGxhc3QgdG8gZmlyc3QgYmVjYXVzZSB0aGlzIHdheSB0aGUgRE9NIGVsZW1lbnQgcmVtb3ZhbCBpc1xyXG5cdFx0Ly8gZWFzaWVyLlxyXG5cdFx0Zm9yKCBsZXQgaSA9IHZuLnN1Yk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pXHJcblx0XHRcdGNvbW1pdFJlbW92ZWROb2RlKCB2bi5zdWJOb2Rlc1tpXSk7XHJcblx0fVxyXG5cclxuICAgIC8vIG1hcmsgdGhlIG5vZGUgYXMgdW5tb3VudGVkXHJcblx0dm4udGVybSgpO1xyXG5cdHZuLmFuY2hvckROID0gdW5kZWZpbmVkO1xyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIHByZXZpb3VzIGN1cnJlbnQgbm9kZS5cclxuXHR0cmFja0N1cnJlbnRWTiggcHJldlZOKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSByZW5kZXJzIHRoaXMgbm9kZSBhbmQgdXBkYXRlcyBpdHMgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeS4gVGhpcyBtZXRob2QgaXNcclxuLy8gaW52b2tlZCB3aGVuIGEgbm9kZSBpcyBiZWluZyB1cGRhdGVkIGVpdGhlciBhcyBhIHJlc3VsdCBvZiB1cGRhdGVNZSBpbnZvY2F0aW9uIG9yIGJlY2F1c2VcclxuLy8gdGhlIHBhcmVudCBub2RlIHdhcyB1cGRhdGVkLlxyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkTm9kZSggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gbGV0IHZuID0gZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQgPyBkaXNwLm5ld1ZOIDogZGlzcC5vbGRWTjtcclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuICAgIC8vIHdlIGNhbGwgdGhlIHJlbmRlciBtZXRob2Qgd2l0aG91dCB0cnkvY2F0Y2guIElmIGl0IHRocm93cywgdGhlIGNvbnRyb2wgZ29lcyB0byBlaXRoZXIgdGhlXHJcbiAgICAvLyBhbmNlc3RvciBub2RlIHRoYXQgc3VwcG9ydHMgZXJyb3IgaGFuZGxpbmcgb3IgdGhlIE1pbWJsIHRpY2sgbG9vcCAod2hpY2ggaGFzIHRyeS9jYXRjaCkuXHJcbiAgICBsZXQgc3ViTm9kZXMgPSBjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnQoIHZuLnJlbmRlcigpKTtcclxuXHJcblx0Ly8gYnVpbGQgYXJyYXkgb2YgZGlzcG9zaXRpb25zIG9iamVjdHMgZm9yIHRoZSBzdWItbm9kZXMuXHJcblx0YnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCBkaXNwLCBzdWJOb2Rlcyk7XHJcblx0aWYgKHN1Yk5vZGVzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNpbmNlIHdlIGhhdmUgc3ViLW5vZGVzLCB3ZSBuZWVkIHRvIGNyZWF0ZSBub2RlcyBmb3IgdGhlbSBhbmQgcmVuZGVyLiBJZiBvdXIgbm9kZVxyXG4gICAgICAgIC8vIGtub3dzIHRvIGhhbmRsZSBlcnJvcnMsIHdlIGRvIGl0IHVuZGVyIHRyeS9jYXRjaDsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9ucyBnbyB0b1xyXG4gICAgICAgIC8vIGVpdGhlciB0aGUgdW5jZXN0b3Igbm9kZSB0aGF0IGtub3dzIHRvIGhhbmRsZSBlcnJvcnMgb3IgdG8gdGhlIE1pbWJsIHRpY2sgbG9vcC5cclxuICAgICAgICBpZiAoIXZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZylcclxuICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVXBkYXRlZFN1Yk5vZGVzKCBkaXNwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoIGBDYWxsaW5nIGhhbmRsZUVycm9yKCkgb24gbm9kZSAke3ZuLm5hbWV9LiBFcnJvcmAsIGVycik7XHJcbiAgICAgICAgICAgICAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXI7IHRoZW4gd2UgcmVuZGVyIHRoZSBuZXdcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQgYnV0IHdlIGRvIGl0IHdpdGhvdXQgdHJ5L2NhdGNoIHRoaXMgdGltZTsgb3RoZXJ3aXNlLCB3ZSBtYXkgZW5kXHJcbiAgICAgICAgICAgICAgICAvLyB1cCBpbiBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAgICAgICAgICAgICB2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcbiAgICAgICAgICAgICAgICBzdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCBkaXNwLCBzdWJOb2Rlcyk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJVcGRhdGVkU3ViTm9kZXMoIGRpc3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHQvLyBpbmRpY2F0ZSB0aGF0IHRoZSBub2RlIHdhcyB1cGRhdGVkIGluIHRoaXMgY3ljbGUgLSB0aGlzIHdpbGwgcHJldmVudCBpdCBmcm9tIFxyXG5cdC8vIHJlbmRlcmluZyBhZ2FpbiBpbiB0aGlzIGN5Y2xlLlxyXG5cdHZuLmxhc3RVcGRhdGVUaWNrID0gc19jdXJyZW50VGljaztcclxuXHJcblx0Ly8gcmVzdG9yZSBwb2ludGVyIHRvIHRoZSBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkIG5vZGUgYWZ0ZXIgcHJvY2Vzc2luZyBpdHMgc3ViLW5vZGVzXHJcblx0dHJhY2tDdXJyZW50Vk4oIHByZXZWTik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgcmVuZGVyaW5nIHBoYXNlIG9mIHRoZSB1cGRhdGUgb24gdGhlIHN1Yi1ub2RlcyBvZiB0aGUgbm9kZSwgd2hpY2ggaXMgcGFzc2VkIGFzXHJcbi8vIHRoZSBvbGRWTiBtZW1iZXIgb2YgdGhlIFZORGlzcCBzdHJ1Y3R1cmUuXHJcbmZ1bmN0aW9uIHJlbmRlclVwZGF0ZWRTdWJOb2RlcyggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHRsZXQgb2xkVk46IFZOLCBuZXdWTjogVk47XHJcblx0XHRsZXQgcGFyZW50Vk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTikgJiYgb2xkVk4ucHJlcGFyZVVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBwcmVwYXJlVXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHRzdWJOb2RlRGlzcC51cGRhdGVEaXNwID0gb2xkVk4ucHJlcGFyZVVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0aWYgKHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0XHRyZW5kZXJVcGRhdGVkTm9kZSggc3ViTm9kZURpc3ApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdFx0cmVuZGVyTmV3Tm9kZSggbmV3Vk4sIHBhcmVudFZOKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcGVyZm9ybXMgRE9NIHVwZGF0ZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjb21taXRVcGRhdGVkTm9kZSggZGlzcDogVk5EaXNwKTogdm9pZFxyXG57XHJcblx0Ly8gcmVtb3ZlIGZyb20gRE9NIHRoZSBvbGQgbm9kZXMgZGVzaWduYXRlZCB0byBiZSByZW1vdmVkICh0aGF0IGlzLCB0aG9zZSBmb3Igd2hpY2ggdGhlcmVcclxuXHQvLyB3YXMgbm8gY291bnRlcnBhcnQgbmV3IG5vZGUgdGhhdCB3b3VsZCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgaXQpLiBXZSBuZWVkIHRvIHJlbW92ZVxyXG5cdC8vIG9sZCBub2RlcyBmaXJzdCBiZWZvcmUgd2Ugc3RhcnQgaW5zZXJ0aW5nIG5ldyAtIG9uZSByZWFzb24gaXMgdG8gcHJvcGVybHkgbWFpbnRhaW5cclxuXHQvLyByZWZlcmVuY2VzLlxyXG5cdGlmIChkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHRcdFx0Y29tbWl0UmVtb3ZlZE5vZGUoIHN2bik7XHJcblx0fVxyXG5cclxuXHQvLyBnZXQgdGhlIG5vZGUgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nIHVwZGF0ZWQuIFRoaXMgaXMgYWx3YXlzIHRoZSBvbGRWTiBtZW1iZXIgb2ZcclxuXHQvLyB0aGUgZGlzcCBzdHJ1Y3R1cmUuXHJcblx0bGV0IHZuID0gZGlzcC5vbGRWTjtcclxuXHJcblx0Ly8gaXQgbWlnaHQgaGFwcGVuIHRoYXQgdGhlIG5vZGUgYmVpbmcgdXBkYXRlZCB3YXMgYWxyZWFkeSBkZWxldGVkIGJ5IGl0cyBwYXJlbnQuIENoZWNrXHJcblx0Ly8gZm9yIHRoaXMgc2l0dWF0aW9uIGFuZCBleGl0IGlmIHRoaXMgaXMgdGhlIGNhc2VcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBrZWVwIHRyYWNrIG9mIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgY3VycmVudGx5IHByb2Nlc3NlZC5cclxuXHRsZXQgcHJldlZOID0gdHJhY2tDdXJyZW50Vk4odm4pO1xyXG5cclxuXHQvLyBkZXRlcm1pbmUgdGhlIGFuY2hvciBub2RlIHRvIHVzZSB3aGVuIGluc2VydGluZyBuZXcgb3IgbW92aW5nIGV4aXN0aW5nIHN1Yi1ub2Rlcy4gSWZcclxuXHQvLyBvdXIgbm9kZSBoYXMgaXRzIG93biBETiwgaXQgd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzOyBvdGhlcndpc2UsIG91ciBub2RlJ3NcclxuXHQvLyBhbmNob3Igd2lsbCBiZSB0aGUgYW5jaG9yIGZvciB0aGUgc3ViLW5vZGVzIHRvby5cclxuXHRsZXQgb3duRE4gPSB2bi5vd25ETjtcclxuXHRsZXQgYW5jaG9yRE4gPSBvd25ETiAhPSBudWxsID8gb3duRE4gOiB2bi5hbmNob3JETjtcclxuXHJcblx0Ly8gaWYgdGhpcyB2aXJ0dWFsIG5vZGUgZG9lc24ndCBkZWZpbmUgaXRzIG93biBET00gbm9kZSAodHJ1ZSBmb3IgY29tcG9uZW50cyksIHdlIHdpbGxcclxuXHQvLyBuZWVkIHRvIGZpbmQgYSBET00gbm9kZSBiZWZvcmUgd2hpY2ggdG8gc3RhcnQgaW5zZXJ0aW5nIG5ldyBub2Rlcy4gTnVsbCBtZWFuc1xyXG5cdC8vIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBhbmNob3Igbm9kZSdzIGNoaWxkcmVuLlxyXG5cdGxldCBiZWZvcmVETiA9IG93bkROICE9IG51bGwgPyBudWxsIDogZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLCBhbmNob3JETik7XHJcblxyXG5cdC8vIHJlLWNyZWF0ZSBvdXIgY3VycmVudCBsaXN0IG9mIHN1Yi1ub2RlcyAtIHdlIHdpbGwgcG9wdWxhdGUgaXQgd2hpbGUgdXBkYXRpbmcgdGhlbVxyXG5cdHZuLnN1Yk5vZGVzID0gZGlzcC5zdWJOb2RlRGlzcHMgPyBuZXcgQXJyYXk8Vk4+KGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHR7XHJcblx0XHRjb21taXRVcGRhdGVzQnlHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0YXJyYW5nZUdyb3VwcyggZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0e1xyXG5cdFx0Y29tbWl0VXBkYXRlc0J5Tm9kZXMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlc1xyXG5cdHRyYWNrQ3VycmVudFZOKCBwcmV2Vk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHVwZGF0ZXMgYW5kIGluc2VydHMgYnkgaW5kaXZpZHVhbCBub2Rlcy5cclxuZnVuY3Rpb24gY29tbWl0VXBkYXRlc0J5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRzdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tpXSA9IHN2bjtcclxuXHJcblx0XHRpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLy8gI2lmIFZFUkJPU0VfTk9ERVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCBgQ2FsbGluZyBjb21taXRVcGRhdGUoKSBvbiBub2RlICR7b2xkVk4ubmFtZX1gKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRvbGRWTi5jb21taXRVcGRhdGUoIG5ld1ZOKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkUmVuZGVyKVxyXG5cdFx0XHRcdFx0Y29tbWl0VXBkYXRlZE5vZGUoIGRpc3ApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciBhbGwgdGhlIG5vZGVzIHVuZGVyIHRoaXMgVk4gc2hvdWxkIGJlIG1vdmVkLlxyXG5cdFx0XHRsZXQgc3ViTm9kZUROcyA9IGdldEltbWVkaWF0ZUROcyggb2xkVk4pO1xyXG5cdFx0XHRpZiAoc3ViTm9kZUROcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2hlY2sgd2hldGhlciB0aGUgbGFzdCBvZiB0aGUgRE9NIG5vZGVzIGFscmVhZHkgcmVzaWRlcyByaWdodCBiZWZvcmUgdGhlIG5lZWRlZCBub2RlXHJcblx0XHRcdFx0aWYgKHN1Yk5vZGVETnNbc3ViTm9kZUROcy5sZW5ndGggLSAxXS5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgc3ViTm9kZUROIG9mIHN1Yk5vZGVETnMpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGFuY2hvckROLmluc2VydEJlZm9yZSggc3ViTm9kZUROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkVsbSwgU3RhdHNBY3Rpb24uTW92ZWQpO1xyXG5cdFx0XHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIG9sZFZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoZSBmaXJzdCBvZiBET00gbm9kZXMgYmVjb21lIHRoZSBuZXh0IGJlZm9yZUROXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBzdWJOb2RlRE5zWzBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2luY2Ugd2UgYWxyZWFkeSBkZXN0cm95ZWQgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVwbGFjZWQsIHRoZSBjb2RlIGlzXHJcblx0XHRcdC8vIGlkZW50aWNhbCBmb3IgUmVwbGFjZSBhbmQgSW5zZXJ0IGFjdGlvbnNcclxuXHRcdFx0Y29tbWl0TmV3Tm9kZSggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IG5vZGUgZGVmaW5lcyBhIERPTSBub2RlLCBpdCBiZWNvbWVzIHRoZSBET00gbm9kZSBiZWZvcmUgd2hpY2hcclxuXHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRpZiAoZmlyc3RETiAhPSBudWxsKVxyXG5cdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdH1cclxuXHJcblx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKG5leHRWTilcclxuXHRcdHtcclxuXHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRWTiA9IHN2bjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBncm91cHMuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB1cGRhdGUgZ3JvdXBzXHJcbi8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcbmZ1bmN0aW9uIGNvbW1pdFVwZGF0ZXNCeUdyb3VwcyggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwczogVk5EaXNwR3JvdXBbXSwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgY3VyclN1Yk5vZGVJbmRleCA9IGRpc3BzLmxlbmd0aCAtIDE7XHJcblx0bGV0IG5leHRWTjogVk4sIHN2bjogVk4sIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTjogVk4sIGZpcnN0RE46IEROO1xyXG5cdGZvciggbGV0IGkgPSBncm91cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cclxuXHRcdC8vIGZpcnN0IHVwZGF0ZSBldmVyeSBzdWItbm9kZSBpbiB0aGUgZ3JvdXAgYW5kIGl0cyBzdWItc3ViLW5vZGVzXHJcblx0XHRmb3IoIGxldCBqID0gZ3JvdXAubGFzdDsgaiA+PSBncm91cC5maXJzdDsgai0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gZGlzcHNbal07XHJcblx0XHRcdG5ld1ZOID0gZGlzcC5uZXdWTjtcclxuXHRcdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdFx0Ly8gZm9yIHRoZSBVcGRhdGUgb3BlcmF0aW9uLCB0aGUgbmV3IG5vZGUgYmVjb21lcyBhIHN1Yi1ub2RlOyBmb3IgdGhlIEluc2VydCBvcGVyYXRpb25cclxuXHRcdFx0Ly8gdGhlIG5ldyBub2RlIGJlY29tZSBhIHN1Yi1ub2RlLlxyXG5cdFx0XHRzdm4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBvbGRWTiA6IG5ld1ZOO1xyXG5cdFx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tjdXJyU3ViTm9kZUluZGV4LS1dID0gc3ZuO1xyXG5cclxuXHRcdFx0aWYgKGdyb3VwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRDb21taXQpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vLyAjaWYgVkVSQk9TRV9OT0RFXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyggYENhbGxpbmcgY29tbWl0VXBkYXRlKCkgb24gbm9kZSAke29sZFZOLm5hbWV9YCk7XHJcblx0XHRcdFx0XHRcdC8vLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdGNvbW1pdFVwZGF0ZWROb2RlKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb21taXROZXdOb2RlKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIG5ldyBub2RlIGRlZmluZXMgYSBET00gbm9kZSwgaXQgYmVjb21lcyB0aGUgRE9NIG5vZGUgYmVmb3JlIHdoaWNoXHJcblx0XHRcdFx0Ly8gbmV4dCBjb21wb25lbnRzIHNob3VsZCBiZSBpbnNlcnRlZC9tb3ZlZFxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKG5leHRWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXh0Vk4gPSBzdm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0Ly8gZmlyc3QgYW5kIGxhc3QgRE5zIGZvciB0aGUgZ3JvdXBcclxuXHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdC8vIGdyb3VwIG9mIG5ldyBub2RlcyAoaWYgYW55KSBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcbmZ1bmN0aW9uIGFycmFuZ2VHcm91cHMoIGRpc3BzOiBWTkRpc3BbXSwgZ3JvdXBzOiBWTkRpc3BHcm91cFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIFdlIGdvIGZyb20gdGhlIGxhc3QgZ3JvdXAgdG8gdGhlIHNlY29uZCBncm91cCBpbiB0aGUgbGlzdCBiZWNhdXNlIGFzIHNvb24gYXMgd2UgbW92ZWQgYWxsXHJcblx0Ly8gZ3JvdXBzIGV4Y2VwdCB0aGUgZmlyc3Qgb25lIGludG8gdGhlaXIgcmlnaHQgcGxhY2VzLCB0aGUgZmlyc3QgZ3JvdXAgd2lsbCBiZSBhdXRvbWF0aWNhbGx5XHJcblx0Ly8gaW4gdGhlIHJpZ2h0IHBsYWNlLiBXZSBhbHdheXMgaGF2ZSB0d28gZ3JvdXBzIChpIGFuZCBpLTEpLCB3aGljaCBhbGxvd3MgdXMgdG8gdW5kZXJzdGFuZFxyXG5cdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBzd2FwIHRoZW0uIElmIHdlIGRvIHdlIG1vdmUgdGhlIHNob3J0ZXIgZ3JvdXAuXHJcblx0Zm9yKCBsZXQgaSA9IGdyb3Vwcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdGxldCBwcmV2R3JvdXAgPSBncm91cHNbaS0xXTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgZ3JvdXAgc2hvdWxkIG1vdmUuIFdlIHRha2UgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBncm91cFxyXG5cdFx0Ly8gYW5kIGNvbXBhcmUgaXRzIEROJ3MgbmV4dCBzaWJsaW5nIHRvIHRoZSBjdXJyZW50IFwiYmVmb3JlRE5cIi5cclxuXHRcdGlmIChncm91cC5sYXN0RE4gIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKGdyb3VwLmxhc3RETi5uZXh0U2libGluZyAhPT0gYmVmb3JlRE4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY3VycmVudCBncm91cCBub3cgcmVzaWRlcyBiZWZvcmUgdGhlIHByZXZpb3VzIGdyb3VwLCB0aGVuIHRoYXQgbWVhbnNcclxuXHRcdFx0XHQvLyB0aGF0IHdlIGFyZSBzd2FwcGluZyB0d28gZ3JvdXBzLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtb3ZlIHRoZSBzaG9ydGVyIG9uZS5cclxuXHRcdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nID09PSBwcmV2R3JvdXAuZmlyc3RETiAmJiBncm91cC5jb3VudCA+IHByZXZHcm91cC5jb3VudClcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggZGlzcHMsIGdyb3VwLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0aGUgZ3JvdXAncyBmaXJzdCBETiBiZWNvbWVzIHRoZSBuZXcgYmVmb3JlRE4uIE5vdGUgdGhhdCBmaXJzdEROIGNhbm5vdCBiZSBudWxsXHJcblx0XHRcdC8vIGJlY2F1c2UgbGFzdEROIGlzIG5vdCBudWxsXHJcblx0XHRcdGJlZm9yZUROID0gZ3JvdXAuZmlyc3RETjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTW92ZXMgYWxsIHRoZSBub2RlcyBpbiB0aGUgZ2l2ZW4gZ3JvdXAgYmVmb3JlIHRoZSBnaXZlbiBET00gbm9kZS5cclxuZnVuY3Rpb24gbW92ZUdyb3VwKCBkaXNwczogVk5EaXNwW10sIGdyb3VwOiBWTkRpc3BHcm91cCwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIHN1Yk5vZGVWTik7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdHtcclxuXHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggc3ViTm9kZVZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5BY3Rpb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHBvc3NpYmxlIGFjdGlvbnMgdG8gcGVyZm9ybSBmb3IgbmV3IG5vZGVzIGR1cmluZ1xyXG4gKiByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuY29uc3QgZW51bSBWTkRpc3BBY3Rpb25cclxue1xyXG5cdC8qKlxyXG5cdCAqIEVpdGhlciBpdCBpcyBub3QgeWV0IGtub3duIHdoYXQgdG8gZG8gd2l0aCB0aGUgbm9kZSBpdHNlbGYgb3IgdGhpcyBpcyBhIHN0ZW0gbm9kZTsgdGhhdCBpcyxcclxuXHQgKiBvbmx5IHRoZSBub2RlJ3MgY2hpbGRyZW4gc2hvdWxkIGJlIHVwZGF0ZWQuXHJcblx0ICovXHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBuZXcgbm9kZSBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRoaXMgbWVhbnMgdGhhdCBlaXRoZXIgdGhlcmUgd2FzIG5vIGNvdW50ZXJwYXJ0IG9sZCBub2RlXHJcblx0ICogZm91bmQgb3IgdGhlIGZvdW5kIG5vZGUgY2Fubm90IGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgb25lIG5vciBjYW4gdGhlIG9sZCBub2RlIGJlIHJldXNlZFxyXG5cdCAqIGJ5IHRoZSBuZXcgb25lIChlLmcuIHRoZXkgYXJlIG9mIGRpZmZlcmVudCB0eXBlKS5cclxuXHQgKi9cclxuXHRJbnNlcnQgPSAxLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSBvbGQgbm9kZS4gVGhpcyB2YWx1ZSBpcyBhbHNvIHVzZWQgZm9yIEluc3RhbmNlVk5cclxuXHQgKiBub2RlcyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGFyZSB0aGUgc2FtZSBub2RlLlxyXG5cdCAqL1xyXG5cdFVwZGF0ZSA9IDIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWTkRpc3BHcm91cCBjbGFzcyBkZXNjcmliZXMgYSBncm91cCBvZiBjb25zZWN1dGl2ZSBWTkRpc3Agb2JqZWN0cyBjb3JyZXNwcG9uZGluZyB0byB0aGVcclxuICogc2VxdWVuY2Ugb2Ygc3ViLW5vZGVzLiBUaGUgZ3JvdXAgaXMgZGVzY3JpYmVkIHVzaW5nIGluZGljZXMgb2YgVk5EaXNwIG9iamVjdHMgaW4gdGhlXHJcbiAqIHN1Yk5vZGVEaXNwIGZpZWxkIG9mIHRoZSBwYXJlbnQgVk5EaXNwIG9iamVjdC5cclxuICovXHJcbmNsYXNzIFZORGlzcEdyb3VwXHJcbntcclxuXHQvKiogcGFyZW50IFZORGlzcCB0byB3aGljaCB0aGlzIGdyb3VwIGJlbG9uZ3MgKi9cclxuXHRwdWJsaWMgcGFyZW50RGlzcDogVk5EaXNwO1xyXG5cdFxyXG5cdC8qKiBBY3Rpb24gdG8gYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlcyBpbiB0aGUgZ3JvdXAgKi9cclxuXHRwdWJsaWMgYWN0aW9uOiBWTkRpc3BBY3Rpb247XHJcblxyXG5cdC8qKiBJbmRleCBvZiB0aGUgZmlyc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBmaXJzdDogbnVtYmVyO1xyXG5cclxuXHQvKiogSW5kZXggb2YgdGhlIGxhc3QgVk5EaXNwIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBsYXN0OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGdyb3VwLiAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdCAtIHRoaXMuZmlyc3QgKyAxIH07XHJcblxyXG5cdC8qKiBGaXJzdCBET00gbm9kZSBpbiB0aGUgZ3JvdXAgLSB3aWxsIGJlIGtub3duIGFmdGVyIHRoZSBub2RlcyBhcmUgcGh5c2ljYWxseSB1cGRhdGVkICovXHJcblx0cHVibGljIGZpcnN0RE46IEROO1xyXG5cclxuXHQvKiogRmlyc3QgRE9NIG5vZGUgaW4gdGhlIGdyb3VwIC0gd2lsbCBiZSBrbm93biBhZnRlciB0aGUgbm9kZXMgYXJlIHBoeXNpY2FsbHkgdXBkYXRlZCAqL1xyXG5cdHB1YmxpYyBsYXN0RE46IEROO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwYXJlbnREaXNwOiBWTkRpc3AsIGFjdGlvbjogVk5EaXNwQWN0aW9uLCBmaXJzdDogbnVtYmVyLCBsYXN0PzogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMucGFyZW50RGlzcCA9IHBhcmVudERpc3A7XHJcblx0XHR0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuXHRcdHRoaXMuZmlyc3QgPSBmaXJzdDtcclxuXHRcdHRoaXMubGFzdCA9IGxhc3Q7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgZmlyc3QgYW5kIGxhc3QgRE9NIG5vZGVzIGZvciB0aGUgZ3JvdXAuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBhZnRlciB0aGVcclxuXHQgKiBub2RlcyB3ZXJlIHBoaXNpY2FsbHkgdXBkYXRlZC9pbnNlcnRlZCBhbmQgd2UgY2FuIG9idGFpbiB0aGVpciBET00gbm9kZXMuXHJcblx0ICovXHJcblx0cHVibGljIGRldGVybWluZUROcygpXHJcblx0e1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGxldCB2bjogVk47XHJcblx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdDsgaSA8PSB0aGlzLmxhc3Q7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMucGFyZW50RGlzcC5zdWJOb2RlRGlzcHNbaV07XHJcblx0XHRcdHZuID0gdGhpcy5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwLm9sZFZOIDogZGlzcC5uZXdWTjtcclxuXHRcdFx0dGhpcy5maXJzdEROID0gZ2V0Rmlyc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5maXJzdEROKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3Q7IGkgPj0gdGhpcy5maXJzdDsgaS0tKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0dm4gPSB0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IGRpc3Aub2xkVk4gOiBkaXNwLm5ld1ZOO1xyXG5cdFx0XHR0aGlzLmxhc3RETiA9IGdldExhc3RETiggdm4pO1xyXG5cdFx0XHRpZiAodGhpcy5sYXN0RE4pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJZiBhIG5vZGUgaGFzIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBzdWItbm9kZXMsIHRoZW4gd2UgYnVpbGQgZ3JvdXBzLiBUaGUgaWRlYSBpcyB0aGF0XHJcbiAqIG90aGVyd2lzZSwgdGhlIG92ZXJoZWFkIG9mIGJ1aWxkaW5nIGdyb3VwcyBpcyBub3Qgd29ydGggaXQuXHJcbiAqL1xyXG5jb25zdCBOT19HUk9VUF9USFJFU0hPTEQgPSA4O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZORGlzcCBjbGFzcyBpcyBhIHJlY3Vyc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBkZXNjcmliZXMgYSBkaXNwb3NpdGlvbiBmb3IgYSBub2RlIGFuZCBpdHNcclxuICogc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy5cclxuICovXHJcbnR5cGUgVk5EaXNwID0gXHJcbntcclxuXHQvKiogTmV3IHZpcnR1YWwgbm9kZSB0byBpbnNlcnQgb3IgdG8gdXBkYXRlIGFuIG9sZCBub2RlICovXHJcblx0bmV3Vk46IFZOO1xyXG5cclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZSAqL1xyXG5cdGFjdGlvbj86IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIE9sZCB2aXJ0dWFsIG5vZGUgdG8gYmUgdXBkYXRlZC4gVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiAqL1xyXG5cdG9sZFZOPzogVk47XHJcblxyXG5cdC8qKiBEaXNwb3NpdGlvbiBmbGFncyBmb3IgdGhlIFVwZGF0ZSBhY3Rpb24uIFRoaXMgaXMgbm90IHVzZWQgZm9yIHRoZSBJbnNlcnQgYWN0aW9ucy4gKi9cclxuXHR1cGRhdGVEaXNwPzogVk5VcGRhdGVEaXNwO1xyXG5cclxuXHQvKipcclxuXHQgKiBBcnJheSBvZiBkaXNwb3NpdGlvbiBvYmplY3RzIGZvciBzdWItbm9kZXMuIFRoaXMgaW5jbHVkZXMgbm9kZXMgdG8gYmUgdXBkYXRlZFxyXG5cdCAqIGFuZCB0byBiZSBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRzdWJOb2RlRGlzcHM/OiBWTkRpc3BbXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGR1cmluZyB1cGRhdGUgb2YgdGhlIHN1Yi1ub2Rlcy4gKi9cclxuXHRzdWJOb2Rlc1RvUmVtb3ZlPzogVk5bXTtcclxuXHJcblx0LyoqIEFycmF5IG9mIGdyb3VwcyBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBpbnNlcnRlZC4gKi9cclxuXHRzdWJOb2RlR3JvdXBzPzogVk5EaXNwR3JvdXBbXTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyBvbGQgYW5kIG5ldyBjaGFpbnMgb2Ygc3ViLW5vZGVzIGFuZCBkZXRlcm1pbmVzIHdoYXQgbm9kZXMgc2hvdWxkIGJlIGNyZWF0ZWQsIGRlbGV0ZWRcclxuICogb3IgdXBkYXRlZC4gVGhlIHJlc3VsdCBpcyByZW1lbWJlcmVkIGFzIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGZvciBlYWNoIHN1Yi1ub2RlIGFuZCBhc1xyXG4gKiBhcnJheSBvZiBvbGQgc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIGRlbGV0ZWQuIEluIGFkZGl0aW9uLCB0aGUgbmV3IHN1Yi1ub2RlcyBhcmUgZGl2aWRlZFxyXG4gKiBpbnRvIGdyb3VwcyBvZiBjb25zZWN1dGl2ZSBub2RlcyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIGFuZCBvZiBub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZC5cclxuICogVGhlIGdyb3VwcyBhcmUgYnVpbHQgaW4gYSB3YXkgc28gdGhhdCBpZiBhIG5vZGUgc2hvdWxkIGJlIG1vdmVkLCBpdHMgZW50aXJlIGdyb3VwIGlzIG1vdmVkLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCBkaXNwOiBWTkRpc3AsIG5ld0NoYWluOiBWTltdKTogdm9pZFxyXG57XHJcbiAgICBsZXQgbmV3TGVuID0gbmV3Q2hhaW4gPyBuZXdDaGFpbi5sZW5ndGggOiAwO1xyXG4gICAgbGV0IG9sZENoYWluID0gZGlzcC5vbGRWTi5zdWJOb2RlcztcclxuICAgIGxldCBvbGRMZW4gPSBvbGRDaGFpbiA/IG9sZENoYWluLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgLy8gaWYgZWl0aGVyIG9sZCBvciBuZXcgb3IgYm90aCBjaGFpbnMgYXJlIGVtcHR5LCB3ZSBkbyBzcGVjaWFsIHRoaW5nc1xyXG4gICAgaWYgKG5ld0xlbiA9PT0gMCAmJiBvbGRMZW4gPT09IDApXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYm90aCBjaGFpbnMgYXJlIGVtcHR5IC0gZG8gbm90aGluZ1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5ld0xlbiA9PT0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBuZXcgY2hhaW4gaXMgZW1wdHkgLSBkZWxldGUgYWxsIG9sZCBub2Rlc1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSA9IG9sZENoYWluO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG9sZExlbiA9PT0gMClcclxuICAgIHtcclxuICAgICAgICAvLyBvbGQgY2hhaW4gaXMgZW1wdHkgLSBpbnNlcnQgYWxsIG5ldyBub2Rlc1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzID0gbmV3Q2hhaW4ubWFwKCBuZXdWTiA9PiB7IHJldHVybiB7IG5ld1ZOLCBhY3Rpb246IFZORGlzcEFjdGlvbi5JbnNlcnR9IH0pO1xyXG4gICAgICAgIGlmIChuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZUdyb3VwcyA9IFtuZXcgVk5EaXNwR3JvdXAoIGRpc3AsIFZORGlzcEFjdGlvbi5JbnNlcnQsIDAsIG5ld0xlbiAtIDEpXTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRldGVybWluZSB3aGV0aGVyIHJlY3ljbGluZyBvZiBub24tbWF0Y2hpbmcgb2xkIGtleWVkIHN1Yi1ub2RlcyBieSBub24tbWF0Y2hpbmcgbmV3XHJcbiAgICAvLyBrZXllZCBzdWItbm9kZXMgaXMgYWxsb3dlZC4gSWYgdXBkYXRlIHN0cmF0ZWd5IGlzIG5vdCBkZWZpbmVkIGZvciB0aGUgbm9kZSwgdGhlXHJcbiAgICAvLyByZWN5Y2xpbmcgaXMgYWxsb3dlZC5cclxuICAgIGxldCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyA9IHRydWU7XHJcbiAgICBsZXQgdXBkYXRlU3RyYXRlZ3kgPSBkaXNwLm9sZFZOID8gZGlzcC5vbGRWTi51cGRhdGVTdHJhdGVneSA6IHVuZGVmaW5lZDtcclxuICAgIGlmICh1cGRhdGVTdHJhdGVneSAmJiB1cGRhdGVTdHJhdGVneS5hbGxvd0tleWVkTm9kZVJlY3ljbGluZyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nID0gdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc7XHJcblxyXG4gICAgLy8gcHJvY2VzcyB0aGUgc3BlY2lhbCBjYXNlIHdpdGggYSBzaW5nbGUgc3ViLW5vZGUgaW4gYm90aCBvbGQgYW5kIG5ldyBjaGFpbnMganVzdFxyXG4gICAgLy8gdG8gYXZvaWQgY3JlYXRpbmcgdGVtcG9yYXJ5IHN0cnVjdHVyZXNcclxuICAgIGlmIChuZXdMZW4gPT09IDEgJiYgb2xkTGVuID09PSAxKVxyXG4gICAge1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZURpc3BzID0gW2NyZWF0ZVN1YkRpc3BGb3JOb2RlcyggZGlzcCwgbmV3Q2hhaW5bMF0sIG9sZENoYWluWzBdLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZyldO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBhcmUgaGVyZSBpZiBlaXRoZXIgb2xkIGFuZCBuZXcgY2hhaW5zIGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBub2RlIGFuZCB3ZSBuZWVkIHRvXHJcbiAgICAvLyByZWNvbmNpbGUgdGhlIGNoYWlucy4gRmlyc3QgZ28gb3ZlciB0aGUgb2xkIG5vZGVzIGFuZCBidWlsZCBhIG1hcCBvZiBrZXllZCBvbmVzIGFuZCBhXHJcbiAgICAvLyBsaXN0IG9mIG5vbi1rZXllZCBvbmVzLiBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBub2RlIHdpdGggdGhlIHNhbWUga2V5LCB0aGUgZmlyc3Qgb25lXHJcbiAgICAvLyBnb2VzIHRvIHRoZSBtYXAgYW5kIHRoZSByZXN0IHRvIHRoZSB1bmxleWVkIGxpc3QuXHJcbiAgICBsZXQgb2xkS2V5ZWRNYXAgPSBuZXcgTWFwPGFueSxWTj4oKTtcclxuICAgIGxldCBvbGRVbmtleWVkTGlzdDogVk5bXSA9IFtdO1xyXG4gICAgbGV0IGtleTogYW55O1xyXG4gICAgZm9yKCBsZXQgb2xkVk4gb2Ygb2xkQ2hhaW4pXHJcbiAgICB7XHJcbiAgICAgICAga2V5ID0gb2xkVk4ua2V5O1xyXG4gICAgICAgIGlmIChrZXkgIT0gbnVsbCAmJiAhb2xkS2V5ZWRNYXAuaGFzKCBrZXkpKVxyXG4gICAgICAgICAgICBvbGRLZXllZE1hcC5zZXQoIGtleSwgb2xkVk4pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2xkVW5rZXllZExpc3QucHVzaCggb2xkVk4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbWViZXIgdGhlIGxlbmd0aCBvZiB0aGUgdW5rZXllZCBsaXN0O1xyXG4gICAgbGV0IG9sZFVua2V5ZWRMaXN0TGVuZ3RoID0gb2xkVW5rZXllZExpc3QubGVuZ3RoO1xyXG5cclxuICAgIC8vIHByZXBhcmUgYXJyYXkgZm9yIFZORGlzcCBvYmplY3RzIGZvciBuZXcgbm9kZXNcclxuICAgIGRpc3Auc3ViTm9kZURpc3BzID0gbmV3IEFycmF5KCBuZXdMZW4pO1xyXG4gICAgXHJcbiAgICAvLyBsb29wIG92ZXIgbmV3IG5vZGVzXHJcbiAgICBsZXQgb2xkVW5rZXllZExpc3RJbmRleCA9IDA7XHJcbiAgICBuZXdDaGFpbi5mb3JFYWNoKCAobmV3Vk4sIGluZGV4KSA9PlxyXG4gICAge1xyXG4gICAgICAgIGxldCBvbGRWTjogVk4gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0cnkgdG8gbG9vayB1cCB0aGUgb2xkIG5vZGUgYnkgdGhlIG5ldyBub2RlJ3Mga2V5IGlmIGV4aXN0c1xyXG4gICAgICAgIGtleSA9IG5ld1ZOLmtleTtcclxuICAgICAgICBpZiAoa2V5ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvbGRWTiA9IG9sZEtleWVkTWFwLmdldCgga2V5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGZpbmQgdGhlIG9sZCBub2RlIGJ5IHRoZSBrZXksIHJlbW92ZSBpdCBmcm9tIHRoZSBtYXA7IGFmdGVyIHRoZVxyXG4gICAgICAgICAgICAvLyByZWNvbmNpbGlhdGlvbiwgYWxsIG9sZCBub2RlcyByZW1haW5pbmcgaW4gdGhpcyBtYXAgd2lsbCBiZSBtYXJrZWQgZm9yIHJlbW92YWwuXHJcbiAgICAgICAgICAgIGlmIChvbGRWTilcclxuICAgICAgICAgICAgICAgIG9sZEtleWVkTWFwLmRlbGV0ZSgga2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgb2xkIG5vZGVzIGluIHRoZSB1bmtleWVkIGxpc3QgdXNlIHRoZSBuZXh0IG9uZVxyXG4gICAgICAgIGlmICghb2xkVk4gJiYgb2xkVW5rZXllZExpc3RJbmRleCAhPSBvbGRVbmtleWVkTGlzdExlbmd0aClcclxuICAgICAgICAgICAgb2xkVk4gPSBvbGRVbmtleWVkTGlzdFtvbGRVbmtleWVkTGlzdEluZGV4KytdO1xyXG5cclxuICAgICAgICBkaXNwLnN1Yk5vZGVEaXNwc1tpbmRleF0gPSBjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3AsIG5ld1ZOLCBvbGRWTiwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gb2xkIG5vZGVzIHJlbWFuaW5nIGluIHRoZSBrZXllZCBtYXAgYW5kIGluIHRoZSB1bmtleWVkIGxpc3Qgd2lsbCBiZSByZW1vdmVkXHJcbiAgICBpZiAob2xkS2V5ZWRNYXAuc2l6ZSA+IDAgfHwgb2xkVW5rZXllZExpc3RJbmRleCA8IG9sZFVua2V5ZWRMaXN0TGVuZ3RoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUgPSBbXTtcclxuXHJcbiAgICAgICAgb2xkS2V5ZWRNYXAuZm9yRWFjaCggb2xkVk4gPT4gZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKSk7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IG9sZFVua2V5ZWRMaXN0SW5kZXg7IGkgPCBvbGRVbmtleWVkTGlzdExlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVW5rZXllZExpc3RbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpXHJcbiAgICAgICAgYnVpbGRTdWJOb2RlR3JvdXBzKCBkaXNwKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdWJEaXNwRm9yTm9kZXMoIGRpc3A6IFZORGlzcCwgbmV3Vk46IFZOLCBvbGRWTj86IFZOLCBhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW4pOiBWTkRpc3Bcclxue1xyXG4gICAgbGV0IHN1YkRpc3A6IFZORGlzcCA9IHsgbmV3Vk4gfTtcclxuICAgIGlmICghb2xkVk4pXHJcbiAgICAgICAgc3ViRGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG4gICAgZWxzZSBpZiAob2xkVk4gPT09IG5ld1ZOIHx8XHJcbiAgICAgICAgKChhbGxvd0tleWVkTm9kZVJlY3ljbGluZyB8fCBuZXdWTi5rZXkgPT09IG9sZFZOLmtleSkgJiYgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSkpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIG5vZGUgY2FuIGJlIHVwZGF0ZWQgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBuZXcgbm9kZVxyXG4gICAgICAgIHN1YkRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuICAgICAgICBzdWJEaXNwLm9sZFZOID0gb2xkVk47XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gb2xkIG5vZGUgY2Fubm90IGJlIHVwZGF0ZWQsIHNvIHRoZSBuZXcgbm9kZSB3aWxsIGJlIGluc2VydGVkIGFuZCB0aGUgb2xkIG5vZGUgd2lsbFxyXG4gICAgICAgIC8vIGJlIHJlbW92ZWRcclxuICAgICAgICBzdWJEaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcbiAgICAgICAgaWYgKCFkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcbiAgICAgICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG4gICAgICAgIGRpc3Auc3ViTm9kZXNUb1JlbW92ZS5wdXNoKCBvbGRWTik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1YkRpc3A7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZyb20gYSBmbGF0IGxpc3Qgb2YgbmV3IHN1Yi1ub2RlcyBidWlsZHMgZ3JvdXBzIG9mIGNvbnNlY3V0aXZlIG5vZGVzIHRoYXQgc2hvdWxkIGJlIGVpdGhlclxyXG4gKiB1cGRhdGVkIG9yIGluc2VydGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRTdWJOb2RlR3JvdXBzKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuICAgIC8vIHdlIGFyZSBoZXJlIG9ubHkgaWYgd2UgaGF2ZSBzb21lIG51bWJlciBvZiBzdWItbm9kZSBkaXNwb3NpdGlvbnNcclxuICAgIGxldCBjb3VudCA9IGRpc3Auc3ViTm9kZURpc3BzLmxlbmd0aDtcclxuXHJcbiAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgLy8gdGhpcyBtZXRob2QgaXMgbm90IHN1cHBvc2VkIHRvIGJlIGNhbGxlZCBpZiB0aGUgbnVtYmVyIG9mIHN1Yi1ub2RlcyBpcyBsZXNzIHRoZW5cclxuICAgICAgICAvLyB0aGUgcHJlLWRldGVybWluZWQgdGhyZXNob2xkXHJcbiAgICAgICAgaWYgKGNvdW50IDw9IE5PX0dST1VQX1RIUkVTSE9MRCB8fCBjb3VudCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8vICNlbmRpZlxyXG5cclxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBncm91cHMgYW5kIGNyZWF0ZSB0aGUgZmlyc3QgZ3JvdXAgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3Qgbm9kZVxyXG4gICAgbGV0IGdyb3VwOiBWTkRpc3BHcm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgZGlzcC5zdWJOb2RlRGlzcHNbMF0uYWN0aW9uLCAwKTtcclxuICAgIGRpc3Auc3ViTm9kZUdyb3VwcyA9IFtncm91cF07XHJcblxyXG4gICAgLy8gbG9vcCBvdmVyIHN1Yi1ub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gZGVjaWRlIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwXHJcbiAgICAvLyBvciBwdXQgdGhlIGN1cnJlbnQgbm9kZSBpbnRvIHRoZSBleGlzdGluZyBncm91cCBvciBjbG9zZSB0aGUgZXhpc3RpbmcgZ3JvdXAgYW5kIG9wZW5cclxuICAgIC8vIGEgbmV3IG9uZS5cclxuICAgIGxldCBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuICAgIGxldCBzdWJEaXNwOiBWTkRpc3A7XHJcbiAgICBmb3IoIGxldCBpID0gMTsgaSA8IGNvdW50OyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgc3ViRGlzcCA9IGRpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG4gICAgICAgIGFjdGlvbiA9IHN1YkRpc3AuYWN0aW9uO1xyXG4gICAgICAgIGlmIChhY3Rpb24gIT09IGdyb3VwLmFjdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleC4gRGVjcmVtZW50IHRoZSBpdGVyYXRpbmcgaW5kZXggc28gdGhhdFxyXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCBpdGVyYXRpb24gd2lsbCBvcGVuIGEgbmV3IGdyb3VwLiBOb3RlIHRoYXQgd2UgY2Fubm90IGJlIGhlcmUgZm9yIGEgbm9kZVxyXG4gICAgICAgICAgICAvLyB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGUgZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG4gICAgICAgICAgICBncm91cC5sYXN0ID0gaSAtIDE7XHJcbiAgICAgICAgICAgIGdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCBkaXNwLCBhY3Rpb24sIGkpO1xyXG4gICAgICAgICAgICBkaXNwLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBhbiBcInVwZGF0ZVwiIG5vZGUgaXMgb3V0LW9mLW9yZGVyIGFuZCBzaG91bGQgY2xvc2UgdGhlIGN1cnJlbnQgZ3JvdXAgaWZcclxuICAgICAgICAgICAgLy8gaXRzIG5leHQgc2libGluZyBpbiB0aGUgbmV3IGxpc3QgaXMgZGlmZmVyZW50IGZyb20gdGhlIG5leHQgc2libGluZyBpbiB0aGUgb2xkIGxpc3QuXHJcbiAgICAgICAgICAgIC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuICAgICAgICAgICAgaWYgKGRpc3Auc3ViTm9kZURpc3BzW2ktMV0ub2xkVk4gIT09IHN1YkRpc3Aub2xkVk4ucHJldilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgICAgICAgICAgICBncm91cC5sYXN0ID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBWTkRpc3BHcm91cCggZGlzcCwgYWN0aW9uLCBpKTtcclxuICAgICAgICAgICAgICAgIGRpc3Auc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFsbCBjb25zZWN1dGl2ZSBcImluc2VydFwiIG5vZGVzIGJlbG9uZyB0byB0aGUgc2FtZSBncm91cCBzbyB3ZSBqdXN0IHdhaXQgZm9yIHRoZVxyXG4gICAgICAgIC8vIG5leHQgbm9kZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcbiAgICBpZiAoZ3JvdXAgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBncm91cC5sYXN0ID0gY291bnQgLSAxO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdXBkYXRlIG9mIHRoZSBnaXZlbiBvbGQgbm9kZSBmcm9tIHRoZSBnaXZlbiBuZXcgbm9kZSBpcyBwb3NzaWJsZS4gVXBkYXRlXHJcbiAqIGlzIHBvc3NpYmxlIGlmIHRoZSB0eXBlcyBvZiBub2RlcyBhcmUgdGhlIHNhbWUgYW5kIGVpdGhlciB0aGUgaXNVcGRhdGVQb3NzaWJsZSBtZXRob2QgaXMgbm90XHJcbiAqIGRlZmluZWQgb24gdGhlIG9sZCBub2RlIG9yIGl0IHJldHVybnMgdHJ1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOOiBWTiwgbmV3Vk46IFZOKTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIChvbGRWTi50eXBlID09PSBuZXdWTi50eXBlICYmXHJcblx0XHRcdChvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlID09PSB1bmRlZmluZWQgfHwgb2xkVk4uaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk4pKSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGZpcnN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0Rmlyc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRGaXJzdEROKCBzdm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsYXN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0TGFzdEROKCB2bjogVk4pOiBETlxyXG57XHJcblx0aWYgKHZuLm93bkROKVxyXG5cdFx0cmV0dXJuIHZuLm93bkROO1xyXG5cdGVsc2UgaWYgKCF2bi5zdWJOb2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyByZWN1cnNpdmVseSBjYWxsIHRoaXMgbWV0aG9kIG9uIHRoZSBzdWItbm9kZXMgZnJvbSBsYXN0IHRvIGZpcnN0IHVudGlsIGEgdmFsaWQgbm9kZVxyXG5cdC8vIGlzIHJldHVybmVkXHJcblx0bGV0IGRuO1xyXG5cdGZvciggbGV0IGkgPSB2bi5zdWJOb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuXHR7XHJcblx0XHRkbiA9IGdldExhc3RETiggdm4uc3ViTm9kZXNbaV0pO1xyXG5cdFx0aWYgKGRuICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBkbjtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJldHVybnMgdGhlIGxpc3Qgb2YgRE9NIG5vZGVzIHRoYXQgYXJlIGltbWVkaWF0ZSBjaGlsZHJlbiBvZiB0aGlzIHZpcnR1YWwgbm9kZTsgdGhhdCBpcyxcclxuLy8gYXJlIE5PVCBjaGlsZHJlbiBvZiBzdWItbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZS4gTmV2ZXIgcmV0dXJucyBudWxsLlxyXG5mdW5jdGlvbiBnZXRJbW1lZGlhdGVETnMoIHZuOiBWTik6IEROW11cclxue1xyXG5cdGxldCBhcnI6IEROW10gPSBbXTtcclxuXHRjb2xsZWN0SW1tZWRpYXRlRE5zKCB2biwgYXJyKTtcclxuXHRyZXR1cm4gYXJyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbGxlY3RzIGFsbCBET00gbm9kZXMgdGhhdCBhcmUgaW1tZWRpYXRlIGNoaWxkcmVuIG9mIHRoaXMgdmlydHVhbCBub2RlICh0aGF0IGlzLFxyXG4vLyBhcmUgTk9UIGNoaWxkcmVuIG9mIHN1Yi1ub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2RlKSBpbnRvIHRoZSBnaXZlbiBhcnJheS5cclxuZnVuY3Rpb24gY29sbGVjdEltbWVkaWF0ZUROcyggdm46IFZOLCBhcnI6IEROW10pOiB2b2lkXHJcbntcclxuXHRpZiAodm4ub3duRE4pXHJcblx0XHRhcnIucHVzaCggdm4ub3duRE4pO1xyXG5cdGVsc2UgaWYgKHZuLnN1Yk5vZGVzKVxyXG5cdHtcclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBtZXRob2Qgb24gdGhlIHN1Yi1ub2RlcyBmcm9tIGZpcnN0IHRvIGxhc3RcclxuXHRcdGZvciggbGV0IHN2biBvZiB2bi5zdWJOb2RlcylcclxuXHRcdFx0Y29sbGVjdEltbWVkaWF0ZUROcyggc3ZuLCBhcnIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBGaW5kcyB0aGUgZmlyc3QgRE9NIG5vZGUgaW4gdGhlIHRyZWUgb2YgdmlydHVhbCBub2RlcyB0aGF0IGNvbWVzIGFmdGVyIG91ciBub2RlIHRoYXQgaXMgYVxyXG4vLyBjaGlsZCBvZiBvdXIgb3duIGFuY2hvciBlbGVtZW50LiBXZSB1c2UgaXQgYXMgYSBub2RlIGJlZm9yZSB3aGljaCB0byBpbnNlcnQvbW92ZSBub2RlcyBvZlxyXG4vLyBvdXIgc3ViLW5vZGVzIGR1cmluZyB0aGUgcmVjb25jaWxpYXRpb24gcHJvY2Vzcy4gVGhlIGFsZ29yaXRobSBmaXJzdCBnb2VzIHRvIHRoZSBuZXh0XHJcbi8vIHNpYmxpbmdzIG9mIG91ciBub2RlIGFuZCB0aGVuIHRvIHRoZSBuZXh0IHNpYmxpbmdzIG9mIG91ciBwYXJlbnQgbm9kZSByZWN1cnNpdmVseS4gSXQgc3RvcHNcclxuLy8gd2hlbiB3ZSBlaXRoZXIgZmluZCBhIERPTSBub2RlICh0aGVuIGl0IGlzIHJldHVybmVkKSBvciBmaW5kIGEgZGlmZmVyZW50IGFuY2hvciBlbGVtZW50XHJcbi8vICh0aGVuIG51bGwgaXMgcmV0dXJuZWQpLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzIGZvciBvdXJcclxuLy8gc3ViLW5vZGVzIHN0YXJ0cyBhbmQsIHRoZXJlZm9yZSwgaXQgb25seSB0cmF2ZXJzZXMgbW91bnRlZCBub2Rlcy5cclxuZnVuY3Rpb24gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuOiBWTiwgYW5jaG9yRE46IEROKTogRE5cclxue1xyXG5cdC8vIGNoZWNrIGlmIHdlIGhhdmUgc2libGluZyBET00gbm9kZXMgYWZ0ZXIgb3VyIGxhc3Qgc3ViLW5vZGUgLSB0aGF0IG1pZ2h0IGJlIGVsZW1lbnRzXHJcblx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRpZiAodm4uc3ViTm9kZXMgJiYgdm4uc3ViTm9kZXMubGVuZ3RoID4gMClcclxuXHR7XHJcblx0XHRsZXQgZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW3ZuLnN1Yk5vZGVzLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmIChkbilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdGlmIChuZXh0U2libGluZyAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRmb3IoIGxldCBudm4gPSB2bi5uZXh0OyBudm4gIT09IHVuZGVmaW5lZDsgbnZuID0gbnZuLm5leHQpXHJcblx0e1xyXG5cdFx0aWYgKCFudm4uYW5jaG9yRE4pXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vIG5vdGUgdGhhdCBnZXRMYXN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXQgaXRcclxuXHRcdC8vIGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdC8vIGFuY2hvciBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSB3YW50ZWQgbm9kZS5cclxuXHRcdGNvbnN0IGRuID0gZ2V0TGFzdEROKCBudm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0cmV0dXJuIHZuLnBhcmVudCAmJiB2bi5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROID8gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLnBhcmVudCwgYW5jaG9yRE4pIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGFycmF5IG9mIG5vZGUgbmFtZXMgc3RhcnRpbmcgd2l0aCB0aGlzIG5vZGUgYW5kIHVwIHVudGlsIHRoZSB0b3AtbGV2ZWwgbm9kZS5cclxuZnVuY3Rpb24gZ2V0Vk5QYXRoKCB2bjogVk4pOiBzdHJpbmdbXVxyXG57XHJcblx0bGV0IGRlcHRoID0gdm4uZGVwdGg7XHJcblx0bGV0IHBhdGggPSBBcnJheTxzdHJpbmc+KCBkZXB0aCk7XHJcblx0Zm9yKCBsZXQgaSA9IDAsIG52bjogVk4gPSB2bjsgaSA8IGRlcHRoOyBpKyssIG52biA9IG52bi5wYXJlbnQpXHJcblx0e1xyXG5cdFx0cGF0aFtpXSA9IG52bi5uYW1lICsgKG52bi5jcmVhdG9yICYmIG52bi5jcmVhdG9yLnZuID8gYCAoY3JlYXRlZCBieSAke252bi5jcmVhdG9yLnZuLm5hbWV9KWAgOiBcIlwiKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgZWl0aGVyIGEgc2luZ2xlIHZpcnR1YWwgbm9kZSBvciBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuXHJcbi8vIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhbiBhcnJheSwgdGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXRcclxuLy8gY29udGVudCBpcyBhbiBhcnJheSwgdGhlbiBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50c1xyXG4vLyBtaWdodCBhbHNvIGJlIGFycmF5cywgdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBjb250ZW50OiBhbnkpOiBWTiB8IFZOW11cclxue1xyXG5cdGlmIChjb250ZW50ID09IG51bGwgfHwgY29udGVudCA9PT0gZmFsc2UpXHJcblx0e1xyXG5cdFx0Ly8gdGhlIGNvbXBhcmlzb24gYWJvdmUgY292ZXJzIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0ZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFZOQmFzZSlcclxuXHRcdHJldHVybiBjb250ZW50O1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdHtcclxuXHRcdHJldHVybiBjb250ZW50Lmxlbmd0aCA+IDAgPyBuZXcgVGV4dFZOKCBjb250ZW50KSA6IG51bGw7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBjb250ZW50LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBjb21wb25lbnQgKHRoaXMgY2FuIG9ubHkgYmUgYW4gSW5zdGFuY2UgY29tcG9uZW50KSBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIFZOLFxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMgZXhpc3RpbmcgVk47IG90aGVyd2lzZSBjcmVhdGUgYSBuZXcgb25lLlxyXG5cdFx0cmV0dXJuIChjb250ZW50IGFzIElDb21wb25lbnQpLnZuXHJcblx0XHRcdFx0XHRcdD8gKGNvbnRlbnQgYXMgSUNvbXBvbmVudCkudm4gYXMgVk5cclxuXHRcdFx0XHRcdFx0OiBuZXcgSW5kZXBlbmRlbnRDb21wVk4oIGNvbnRlbnQgYXMgSUNvbXBvbmVudCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIGNvbnRlbnQpKVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjb250ZW50KTtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2VQcm94eVZOKCB7IHByb21pc2U6IGNvbnRlbnR9KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGNvbnRlbnQpXHJcblx0XHRyZXR1cm4gdm4gfHwgbmV3IEZ1bmNQcm94eVZOKCB7IGZ1bmM6IGNvbnRlbnQsIHRoaXNBcmc6IHNfY3VycmVudENsYXNzQ29tcH0pO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gbmV3IFRleHRWTiggY29udGVudC50b1N0cmluZygpKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFuIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gY29udGVudC4gQ2FsbHMgdGhlIGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQgYW5kXHJcbi8vIGlmIGl0IHJldHVybnMgYSBzaW5nbGUgbm9kZSwgd3JhcHMgaXQgaW4gYW4gYXJyYXkuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY29udGVudDogYW55KTogVk5bXVxyXG57XHJcblx0bGV0IG5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudCk7XHJcblx0cmV0dXJuICFub2RlcyA/IG51bGwgOiBBcnJheS5pc0FycmF5KG5vZGVzKSA/IChub2Rlcy5sZW5ndGggPT09IDAgPyBudWxsIDogbm9kZXMpIDogW25vZGVzXTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIGFycmF5IG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgb2YgaXRlbXMuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBhcnI6IGFueVtdKTogVk5bXVxyXG57XHJcblx0aWYgKGFyci5sZW5ndGggPT09IDApXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IG5vZGVzOiBWTltdID0gW107XHJcblx0Zm9yKCBsZXQgaXRlbSBvZiBhcnIpXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1Ob2RlcyA9IGNyZWF0ZU5vZGVzRnJvbUNvbnRlbnQoIGl0ZW0pO1xyXG5cdFx0aWYgKGl0ZW1Ob2RlcyA9PT0gbnVsbClcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KCBpdGVtTm9kZXMpKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB2biBvZiBpdGVtTm9kZXMpXHJcblx0XHRcdFx0bm9kZXMucHVzaCggdm4pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRub2Rlcy5wdXNoKCBpdGVtTm9kZXMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5vZGVzLmxlbmd0aCA+IDAgPyBub2RlcyA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGNoYWluIG9mIHZpcnR1YWwgbm9kZXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgVHlwZVNjcmlwdCdzIEpTWCBwYXJzZXIuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21KU1goIHRhZzogYW55LCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pOiBWTiB8IFZOW11cclxue1xyXG5cdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIG5ldyBFbG1WTiggdGFnIGFzIHN0cmluZywgcHJvcHMsIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IEZyYWdtZW50KVxyXG5cdFx0cmV0dXJuIGNyZWF0ZU5vZGVzRnJvbUFycmF5KCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBGdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgRnVuY1Byb3h5UHJvcHM7XHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIHByb3BzLmZ1bmMsIGZ1bmNQcm94eVByb3BzLmtleSk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNQcm94eVZOKCBwcm9wcyk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSB1cGRhdGVBcmdzIHByb3BlcnR5IGlzIHRydWUsIHdlIHJlcGxhY2UgdGhlIGFyZ3VtZW50cyBpbiB0aGUgbm9kZTsgb3RoZXJ3aXNlLFxyXG5cdFx0XHQvLyB3ZSBpZ25vcmUgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRpZiAoZnVuY1Byb3h5UHJvcHMucmVwbGFjZUFyZ3MpXHJcblx0XHRcdFx0dm4ucmVwbGFjZUFyZ3MoIGZ1bmNQcm94eVByb3BzLmFyZ3MpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIGlmICh0YWcgPT09IFByb21pc2VQcm94eSlcclxuXHR7XHJcblx0XHRpZiAoIXByb3BzIHx8ICFwcm9wcy5wcm9taXNlKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZVByb3h5Vk4oIHByb3BzLCBjaGlsZHJlbik7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIilcclxuXHR7XHJcblx0XHQvLyBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgYWx3YXlzIGFuIGFycmF5LiBBIGNvbXBvbmVudCBjYW4gc3BlY2lmeSB0aGF0IGl0cyBjaGlsZHJlbiBhcmVcclxuXHRcdC8vIGFuIGFycmF5IG9mIGEgY2VydGFpbiB0eXBlLCBlLmcuIGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIElDb21wb25lbnRDbGFzcywgcHJvcHMsIHJlYWxDaGlsZHJlbik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBuZXcgRnVuY1ZOKCB0YWcgYXMgRnVuY0NvbXBUeXBlLCBwcm9wcywgcmVhbENoaWxkcmVuKTtcclxuXHR9XHJcblxyXG5cdC8vLyAjaWYgREVCVUdcclxuXHRlbHNlXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB0YWcgaW4ganN4IHByb2Nlc3NpbmcgZnVuY3Rpb246IFwiICsgdGFnKTtcclxuXHQvLy8gI2VuZGlmXHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJRXJyb3JIYW5kbGluZ1NlcnZpY2UsIFZOVHlwZX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZSwgRE4sIHJlcXVlc3ROb2RlVXBkYXRlfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBSb290Vk4gY2xhc3MgaXMgdXNlZCBhcyBhIHRvcC1sZXZlbCB2aXJ0dWFsIG5vZGUgZm9yIGFsbCByZW5kZXJlZCB0cmVlcy4gUm9vdFZOIHNlcnZlc1xyXG4vLyBhcyBhbiBlcnJvciBib3VuZGFyeSBvZiBsYXN0IHJlc29ydC4gV2hlbiBpdCBjYXRjaGVzIGFuIGVycm9yIHRoYXQgd2Fzbid0IGNhdWdodCBieSBhbnlcclxuLy8gZGVzY2VuZGFuZCBub2RlLCBpdCBkaXNwbGF5cyBhIHNpbXBsZSBVSSB0aGF0IHNob3dzIHRoZSBlcnJvciBhbmQgYWxsb3dzIHRoZSB1c2VyIHRvIHJlc3RhcnQuXHJcbi8vIFJvb3RWTiBhbHNvIG1hbmFnZXMgc2VydmljZSBwdWJsaXNoZXJzIGFuZCBzdWJzY3JpYmVycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBSb290Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggYW5jaG9yRE46IEROKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMudHlwZSA9IFZOVHlwZS5Sb290O1xyXG5cdFx0dGhpcy5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cdFx0dGhpcy5kZXB0aCA9IDA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Sb290OyB9XHJcblx0Ly8vICNlbmRpZlxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiUm9vdFwiOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgY29udGVudCB0byBiZSByZW5kZXJlZCB1bmRlciB0aGlzIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlcnMgdXBkYXRlLlxyXG5cdHB1YmxpYyBzZXRDb250ZW50KCBjb250ZW50OiBhbnksIHN5bmM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVycm9yIHx8IHRoaXMud2FpdGluZyA/IG51bGwgOiB0aGlzLmNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUgc28gdGhhdCBpdCBpcyByZWFkeSB0byBwcm9kdWNlIGNoaWxkcmVuLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBjb250ZW50IG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGVcclxuXHQvLyBET00gdHJlZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSByZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub2RlIHN1cHBvcnRzIGhhbmRsaW5nIG9mIGVycm9yczsgdGhhdCBpcywgZXhjZXB0aW9uIHRocm93biBkdXJpbmdcclxuXHQvLyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmIGFuZC9vciBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdHRoaXMud2FpdGluZyA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5cyB0aGUgY29udGVudCBvcmlnaW5hbGx5IHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBlcnJvciBhbmQgcmVxdWVzdCB0byBiZSB1cGRhdGVkXHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGZ1bGZpbGxlZCBwcm9taXNlIGZyb20gb3VyIGludGVybmFsIGxpc3QgYW5kIGlmIHRoZSBsaXN0IGlzIGVtcHR5IGFza3MgdG9cclxuXHQvLyByZS1yZW5kZXJcclxuXHRwcml2YXRlIG9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudGhyb3duUHJvbWlzZXMuZGVsZXRlKCBwcm9taXNlKTtcclxuXHRcdGlmICh0aGlzLnRocm93blByb21pc2VzLnNpemUgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2FpdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGFuIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGZyb20gZGVzY2VuZGFuZCBub2Rlcy5cclxuXHRwcml2YXRlIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IGEgcHJvbWlzZSB0aHJvd24gYXMgZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc3ltUm9vdE1vdW50UG9pbnQgPSBTeW1ib2woXCJzeW1Sb290TW91bnRQb2ludFwiKTtcclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cdGlmICghcm9vdFZOKVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSByb290IG5vZGUgYW5kIHJlbWVtYmVyIGl0IGluIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHlcclxuXHRcdHJvb3RWTiA9IG5ldyBSb290Vk4oIHJlYWxBbmNob3JETik7XHJcblx0XHQocmVhbEFuY2hvckROIGFzIGFueSlbc3ltUm9vdE1vdW50UG9pbnRdID0gcm9vdFZOO1xyXG5cdH1cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSwgd2hpY2ggd2lsbCB0cmlnZ2VyIHVwZGF0ZVxyXG5cdHJvb3RWTi5zZXRDb250ZW50KCBjb250ZW50LCBmYWxzZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3QuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Um9vdCggYW5jaG9yRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IHJlYWxBbmNob3JETjogRE4gPSBhbmNob3JETiA/IGFuY2hvckROIDogZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIXJlYWxBbmNob3JETilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IG91ciByb290IG5vZGUgZnJvbSB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5LlxyXG5cdGxldCByb290Vk46IFJvb3RWTiA9IHJlYWxBbmNob3JETltzeW1Sb290TW91bnRQb2ludF07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc3ltUm9vdE1vdW50UG9pbnRdO1xyXG5cclxuXHQvLyBkZXN0cnVjdCB0aGUgcm9vdCBub2RlIChhc3luY2hyb25vdXNseSlcclxuXHRyb290Vk4uc2V0Q29udGVudCggbnVsbCwgZmFsc2UpO1xyXG5cdHJvb3RWTi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggKCkgPT4gcm9vdFZOLndpbGxVbm1vdW50KCkgKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTY2hlZHVsZXIsIHJlZ2lzdGVyU2NoZWR1bGVyLCBzZXREZWZhdWx0U2NoZWR1bGVyVHlwZX0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7c2NoZWR1bGVGdW5jQ2FsbH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNjaGVkdWxlciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3Igc2NoZWR1bGluZyB3cml0aW5nIHN0eWxlLXJlbGF0ZWQgaW5mb3JtYXRpbm8gdG9cclxuICogdGhlIERPTSB1c2luZyB0aGUgTWltYmwgc2NoZWR1bGluZyBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5jbGFzcyBTdHlsZVNjaGVkdWxlciBpbXBsZW1lbnRzIElTY2hlZHVsZXJcclxue1xyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRvRE9NVXBkYXRlID0gZG9ET01VcGRhdGU7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGl0cyBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzY2hlZHVsZURPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCB0aGlzLm9uVXBkYXRlLCBmYWxzZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSB0aW1lb3V0IGV4cGlyZXMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvblVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZXMgc3R5bGUgc2NoZWR1bGVyIHVzZWQgYnkgTWltYmwgdG8gc2NoZWR1bGUgd3JpdGluZyBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pbml0U3R5bGVTY2hlZHVsZXIoKTogbnVtYmVyXHJcbntcclxuICAgIGxldCBzY2hlZHVsZXJUeXBlID0gcmVnaXN0ZXJTY2hlZHVsZXIoIG5ldyBTdHlsZVNjaGVkdWxlcigpKTtcclxuICAgIHNldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlKTtcclxuICAgIHJldHVybiBzY2hlZHVsZXJUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SVRleHRWTiwgVk5UeXBlfSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlLCBETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4uL2ludGVybmFsXCJcclxuXHJcbi8vLyAjaWYgVVNFX1NUQVRTXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBJVGV4dFZOXHJcbntcclxuXHQvLyBUZXh0IGZvciBhIHNpbXBsZSB0ZXh0IG5vZGUuXHJcblx0cHVibGljIHRleHQ6IHN0cmluZztcclxuXHJcblx0Ly8gVGV4dCBET00gbm9kZVxyXG5cdHB1YmxpYyB0ZXh0Tm9kZTogVGV4dDtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGV4dDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBWTlR5cGUuVGV4dDtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LlRleHQ7IH1cclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCIjdGV4dFwiOyB9XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBvd25ETigpOiBETiB7IHJldHVybiB0aGlzLnRleHROb2RlOyB9O1xyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdHJldHVybiB0aGlzLnRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHRoaXMudGV4dCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlc3Ryb3lzIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0Ly8vICNlbmRpZlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG5cdFx0Ly8vICNpZiBVU0VfU1RBVFNcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uVXBkYXRlZCk7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SVZOb2RlLCBJQ29tcG9uZW50LCBVcGRhdGVTdHJhdGVneX0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5cclxuLy8vICNpZiBVU0VfU1RBVFNcclxuXHRpbXBvcnQge1N0YXRzQ2F0ZWdvcnl9IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLyAjZW5kaWZcclxuXHJcblxyXG5cclxuLy8gVXNlIHR5cGUgRE4gdG8gcmVmZXIgdG8gRE9NJ3MgTm9kZSBjbGFzcy4gVGhlIERPTSBub2RlcyB0aGF0IHdlIGFyZSBkZWFsaW5nIHdpdGggYXJlXHJcbi8vIGVpdGhlciBvZiB0eXBlIEVsZW1lbnQgb3IgVGV4dC5cclxuZXhwb3J0IHR5cGUgRE4gPSBOb2RlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZOIGludGVyZmFjZSBkZWZpbmVzIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBhcmUgb3B0aW9uYWxseSBpbXBsZW1lbnRlZCBieSBhbGxcclxuICogdHlwZXMgb2YgdmlydHVhbCBub2Rlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8vLyAjaWYgVVNFX1NUQVRTXHJcblx0XHRyZWFkb25seSBzdGF0c0NhdGVnb3J5OiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0LyoqIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLiAqL1xyXG5cdGRlcHRoPzogbnVtYmVyO1xyXG5cclxuXHQvKiogRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuICovXHJcblx0YW5jaG9yRE4/OiBETjtcclxuXHJcblx0LyoqXHJcblx0ICogTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleSBjYW4gYmUgb2ZcclxuXHQgKiBhbnkgdHlwZS5cclxuXHQgKi9cclxuXHRrZXk/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHJlbmRlck9uVXBkYXRlPzogYm9vbGVhbjtcclxuXHJcblx0LyoqIEdldHMgbm9kZSdzIHBhcmVudC4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIHRoZSB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLiAqL1xyXG5cdHBhcmVudD86IFZOO1xyXG5cclxuXHQvLyBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBhcyBwYXJ0IG9mIGl0cyByZW5kZXJpbmcgdHJlZS5cclxuXHRjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuXHJcblx0bmV4dD86IFZOO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHByZXY/OiBWTjtcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3ViLW5vZGVzLiAqL1xyXG5cdHN1Yk5vZGVzPzogVk5bXTtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogVXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdC8vIFJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGUgdmlydHVhbCBub2RlIGl0c2VsZiAoaWYgYW55KSBhbmQgbm90IHRvIGFueSBvZiBpdHNcclxuXHQvLyBzdWItbm9kZXMuXHJcblx0b3duRE4/OiBETjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gXCJUaWNrIG51bWJlclwiIGR1cmluZyB3aGljaCB0aGUgbm9kZSB3YXMgbGFzdCB1cGRhdGVkLiBJZiB0aGlzIG5vZGUncyB0aWNrIG51bWJlciBlcXVhbHNcclxuXHQvLyB0aGUgY3VycmVudCB0aWNrIG51bWJlciBtYWludGFpbmVkIGJ5IHRoZSByb290IG5vZGUsIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIHdhc1xyXG5cdC8vIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIHVwZGF0ZSBjeWNsZS4gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2YgYVxyXG5cdC8vIGNvbXBvbmVudCBpZiBib3RoIHRoZSBjb21wb25lbnQgYW5kIGl0cyBwYXJlbnQgYXJlIHVwZGF0ZWQgaW4gdGhlIHNhbWUgY3ljbGUuXHJcblx0bGFzdFVwZGF0ZVRpY2s6IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRpbml0KCBwYXJlbnQ6IFZOLCBjcmVhdG9yOiBJQ29tcG9uZW50KTogdm9pZDtcclxuXHJcblx0Ly8gQ2xlYW5zIHVwIHRoZSBub2RlIG9iamVjdCBiZWZvcmUgaXQgaXMgcmVsZWFzZWQuXHJcblx0dGVybSgpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly9cclxuXHQvLyBMaWZlIGN5Y2xlIG1ldGhvZHNcclxuXHQvL1xyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFJldHVybnMgY29udGVudCB0aGF0IGNvbXByaXNlcyB0aGUgY2hpbGRyZW4gb2YgdGhlIG5vZGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZVxyXG5cdC8vIHN1Yi1ub2RlcywgbnVsbCBzaG91bGQgYmUgcmV0dXJuZWQuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCB0aGF0IG1lYW5zIHRoZSBub2RlXHJcblx0Ly8gbmV2ZXIgaGFzIGNoaWxkcmVuIC0gZm9yIGV4YW1wbGUgdGV4dCBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cmVuZGVyPygpOiBhbnk7XHJcblxyXG5cdC8vIEluaXRpYWxpemVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlXHJcblx0Ly8gbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0d2lsbE1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGltcGxlbWVudGVkXHJcblx0Ly8gb25seSBvbiBub2RlcyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2Rlcy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0bW91bnQ/KCk6IEROO1xyXG5cclxuICAgIC8vIE5vdGlmaWVzIHRoZSB2aXJ0dWFsIG5vZGUgdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IG1vdW50ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB0aGVcclxuICAgIC8vIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgYWRkZWQgdG8gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRkaWRNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ2xlYXJzIGludGVybmFsIHN0cnVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudFxyXG5cdC8vIG9mIG5vZGUgYW5kIGFsbCBpdHMgc3ViLW5vZGVzIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHdpbGxVbm1vdW50PygpOiB2b2lkO1xyXG5cclxuXHQvLyBJbml0aWFsaXplcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZVxyXG5cdC8vIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ2xlYXJzIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGltcGxlbWVudGVkIG9ubHkgb24gbm9kZXNcclxuXHQvLyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2Rlcy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgcmVsZWFzZSB0aGUgaW50ZXJuYWxseSBoZWxkIHJlZmVyZW5jZVxyXG5cdC8vIHRvIHRoZSBET00gbm9kZSAtIHRoZSBhY3R1YWwgcmVtb3ZhbCBvZiB0aGUgbm9kZSBmcm9tIERPTSBpcyBkb25lIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0dW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIElmIHRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gbm90IGltcGxlbWVudGVkIHRoZSB1cGRhdGUgaXMgY29uc2lkZXJlZCBwb3NzaWJsZSAtIGUuZy4gZm9yIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGlzVXBkYXRlUG9zc2libGU/KCBuZXdWTjogVk4pOiBib29sZWFuO1xyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHByZXBhcmVVcGRhdGU/KCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGNvbW1pdFVwZGF0ZT8oIG5ld1ZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoZSBub2RlXHJcblx0Ly8gZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZWFkb25seSBzdXBwb3J0c0Vycm9ySGFuZGxpbmc/OiBib29sZWFuO1xyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gVGhlIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcyBtZXRob2QgcmV0dXJucy5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5VcGRhdGVEaXNwIHR5cGUgZGVzY3JpYmVzIHdoZXRoZXIgY2VydGFpbiBhY3Rpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVcclxuLy8gZHVyaW5nIHVwZGF0ZS4gVGhpcyBvYmplY3QgaXMgcmV0dXJuZWQgZnJvbSB0aGUgbm9kZSdzIHByZXBhcmVVcGRhdGUgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFZOVXBkYXRlRGlzcFxyXG57XHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgbm9kZSBoYXMgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBET00gdHJlZS4gSWYgdGhpc1xyXG5cdC8vIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCB3aWxsIGJlIGNsbGVkIG9uIHRoZSBub2RlIGR1cmluZyB0aGUgQ29tbWl0XHJcblx0Ly8gcGhhc2UuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZENvbW1pdDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmFsZyBpbmRpY2F0bmcgd2hldGhlciB0aGUgc3ViLW5vZGVzIHNob3VsZCBiZSB1cGRhdGVkLiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhlbiB0aGVcclxuXHQvLyBub2RlJ3MgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cclxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkUmVuZGVyOiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0dGhpcy5zaG91bGRDb21taXQgPSBzaG91bGRDb21taXQ7XHJcblx0XHR0aGlzLnNob3VsZFJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXREb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgRG9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIHRydWUsIGZhbHNlKTtcclxuXHRwdWJsaWMgc3RhdGljIE5vQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCBmYWxzZSwgdHJ1ZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdE5vUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIGZhbHNlKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdG9ja1ZhbHVlKCBzaG91bGRDb21taXQ6IGJvb2xlYW4sIHNob3VsZFJlbmRlcjogYm9vbGVhbilcclxuXHR7XHJcblx0XHRyZXR1cm4gc2hvdWxkQ29tbWl0XHJcblx0XHRcdD8gc2hvdWxkUmVuZGVyID8gVk5VcGRhdGVEaXNwLkRvQ29tbWl0RG9SZW5kZXIgOiBWTlVwZGF0ZURpc3AuRG9Db21taXROb1JlbmRlclxyXG5cdFx0XHQ6IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLk5vQ29tbWl0Tm9SZW5kZXI7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgVk5UeXBlLCBJQ29tcG9uZW50LCBTY2hlZHVsZWRGdW5jVHlwZSwgUmVmUHJvcFR5cGUsIHNldFJlZn0gZnJvbSBcIi4uL2FwaS9taW1cIjtcclxuaW1wb3J0IHtcclxuICAgIFZOLCBETiwgbm90aWZ5U2VydmljZVVucHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkLCByZXF1ZXN0Tm9kZVVwZGF0ZSxcclxuICAgIHNjaGVkdWxlRnVuY0NhbGwsIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCB3cmFwQ2FsbGJhY2tXaXRoVk5cclxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIjtcclxuXHJcblxyXG4vLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgaW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8gI2VuZGlmXHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbiAgICBsZXQgZ19uZXh0Vk5EZWJ1Z0lEID0gMTtcclxuLy8vICNlbmRpZlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOQmFzZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZOQmFzZSBpbXBsZW1lbnRzIFZOXHJcbntcclxuXHQvLy8gI2lmIFVTRV9TVEFUU1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGFic3RyYWN0IGdldCBuYW1lKCk6IHN0cmluZztcclxuXHJcblx0Ly8gTm9kZSdzIHR5cGUuXHJcblx0cHVibGljIHR5cGU6IFZOVHlwZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk5CYXNlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cHVibGljIGNyZWF0b3I6IElDb21wb25lbnQ7XHJcblxyXG5cdC8vIExldmVsIG9mIG5lc3RpbmcgYXQgd2hpY2ggdGhlIG5vZGUgcmVzaWRlcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlLlxyXG5cdHB1YmxpYyBkZXB0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gbm9kZSB1bmRlciB3aGljaCBhbGwgY29udGVudCBvZiB0aGlzIHZpcnR1YWwgbm9kZSBpcyByZW5kZXJlZC5cclxuXHRwdWJsaWMgYW5jaG9yRE46IEROO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRwdWJsaWMgbmV4dDogVk5CYXNlO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLlxyXG5cdHB1YmxpYyBwcmV2OiBWTkJhc2U7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzIC0gYm90aCBrZXllZCBhbmQgdW5rZXllZCAtIGRlZmluZWQgb25seSBpZiB0aGVyZSBhcmUgc29tZSBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1Yk5vZGVzOiBWTkJhc2VbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHB1YmxpYyB1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdHB1YmxpYyBsYXN0VXBkYXRlVGljazogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMuZGVwdGggPSB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmRlcHRoICsgMSA6IDA7XHJcblx0XHR0aGlzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHRwdWJsaWMgdGVybSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcmVtb3ZlIGluZm9ybWF0aW9uIGFib3V0IGFueSBwdWJsaXNoZWQgYW5kIHN1YnNjcmliZWQgc2VydmljZXNcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZm9yRWFjaCggKHNlcnZpY2UsIGlkKSA9PiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuY2xlYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZm9yRWFjaCggKGluZm8sIGlkKSA9PiBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcykpO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuc3ViTm9kZXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNyZWF0b3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmRlcHRoID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IG1vdW50ZWQgKi9cclxuXHRwdWJsaWMgZ2V0IGlzTW91bnRlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5hbmNob3JETjsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnVwZGF0ZVJlcXVlc3RlZClcclxuXHRcdHtcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVJlcXVlc3RlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkXHJcblx0e1xyXG5cdFx0c2NoZWR1bGVGdW5jQ2FsbCggZnVuYywgdHJ1ZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbEFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRzY2hlZHVsZUZ1bmNDYWxsKCBmdW5jLCBmYWxzZSwgdGhhdCwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0Ly8gY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBub2Rlcy5cclxuXHRwdWJsaWMgcHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcsIHNlcnZpY2U6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuXHRcdGxldCBleGlzdGluU2VydmljZTogYW55ID0gdGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5nZXQoIGlkKTtcclxuXHRcdGlmIChleGlzdGluU2VydmljZSAhPT0gc2VydmljZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zZXQoIGlkLCBzZXJ2aWNlKTtcclxuXHRcdFx0bm90aWZ5U2VydmljZVB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlZ2lzdGVycyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHVucHVibGlzaFNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucHVibGlzaGVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5zaXplID09PSAwKVxyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdWJzY3JpYmVzIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIElmIHRoZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIGlzIHJlZ2lzdGVyZWRcclxuXHQvLyBieSBvbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzLCB0aGUgcGFzc2VkIFJlZiBvYmplY3Qgd2lsbCByZWZlcmVuY2UgaXQ7IG90aGVyd2lzZSxcclxuXHQvLyB0aGUgUmVmIG9iamVjdCB3aWxsIGJlIHNldCB0byB0aGUgZGVmYXVsdFZhbHVlIChpZiBzcGVjaWZpZWQpIG9yIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cclxuXHQvLyBXaGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvciBub2RlIGlzXHJcblx0Ly8gY2hhbmdlZCwgdGhlIFJlZiBvYmplY3Qgd2lsbCByZWNlaXZlIHRoZSBuZXcgdmFsdWUuXHJcblx0cHVibGljIHN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcsIHJlZjogUmVmUHJvcFR5cGUsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblx0XHRsZXQgaW5mbyA9IG5ldyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbygpO1xyXG5cdFx0aW5mby5yZWYgPSByZWY7XHJcblx0XHRpbmZvLmRlZmF1bHRTZXJ2aWNlID0gZGVmYXVsdFNlcnZpY2U7XHJcblx0XHRpbmZvLnVzZVNlbGYgPSB1c2VTZWxmID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNldCggaWQsIGluZm8pO1xyXG5cdFx0bm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHRcdHNldFJlZiggcmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBkZWZhdWx0U2VydmljZSkpO1xyXG59XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZSxcclxuXHQvLyB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXHJcblx0cHVibGljIHVuc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG4gICAgICAgIHNldFJlZiggaW5mby5yZWYsIHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMuc2l6ZSA9PT0gMClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCByZWdpc3RlcmVkIGJ5IGEgY2xvc2VzdCBhbmNlc3RvclxyXG5cdC8vIG5vZGUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcmVnaXN0ZXJlZCBhIHNlcnZpY2Ugd2l0aFxyXG5cdC8vIHRoaXMgSUQuIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXN0YWJsaXNoIGEgc3Vic2NyaXB0aW9uIGFuZCBvbmx5IHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdHB1YmxpYyBnZXRTZXJ2aWNlKCBpZDogc3RyaW5nLCBkZWZhdWx0U2VydmljZT86IGFueSwgdXNlU2VsZj86IGJvb2xlYW4pOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2UoIGlkLCB1c2VTZWxmKTtcclxuXHRcdHJldHVybiBzZXJ2aWNlICE9PSB1bmRlZmluZWQgPyBzZXJ2aWNlIDogZGVmYXVsdFNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgdXAgdGhlIGNoYWluIG9mIG5vZGVzIGxvb2tpbmcgZm9yIGEgcHVibGlzaGVkIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuIFJldHVybnNcclxuXHQvLyB1bmRlZmluZWQgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGZvdW5kLiBOb3RlIHRoYXQgbnVsbCBtaWdodCBiZSBhIHZhbGlkIHZhbHVlLlxyXG5cdHByaXZhdGUgZmluZFNlcnZpY2UoIGlkOiBzdHJpbmcsIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHVzZVNlbGYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgc2VydmljZSA9IHRoaXMucHVibGlzaGVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRcdFx0aWYgKHNlcnZpY2UgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBzZXJ2aWNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ28gdXAgdGhlIGNoYWluOyBub3RlIHRoYXQgd2UgZG9uJ3QgcGFzcyB0aGUgdXNlU2VsZiBwYXJhbWV0ZXIgb24uXHJcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5maW5kU2VydmljZSggaWQsIHRydWUpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgbm9kZSB0aGF0IHB1YmxpY2F0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBzZXJ2aWNlICh0byB3aGljaCB0aGUgbm9kZVxyXG5cdC8vIGhhcyBwcmV2aW91c2x5IHN1YnNjcmliZWQpIGhhcyBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBpbmZvID0gdGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZ2V0KCBpZCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0c2V0UmVmKCBpbmZvLnJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgaW5mby5kZWZhdWx0U2VydmljZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJsZXMgZnJvbSB0aGlzIHZpcnR1YWwgbm9kZSB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgbm9kZS9jb21wb25lbnQgdGhhdCBrbm93c1xyXG5cdCAqIHRvIGhhbmRsZSBlcnJvcnMgaXMgZm91bmQuXHJcblx0ICogXHJcblx0ICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGJ5IHRoZSBjb2RlIHRoYXQgaXMgbm90IHBhcnQgb2YgYW55IGNvbXBvbmVudCBidXQgc3RpbGwgaGFzIGFjY2Vzc1xyXG5cdCAqIHRvIHRoZSBJVk5vZGUgb2JqZWN0OyBmb3IgZXhhbXBsZSwgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy4gQ29tcG9uZW50cyB0aGF0IGRlcml2ZSBmcm9tIHRoZVxyXG5cdCAqIENvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBDb21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyB3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoaXNDYWxsYmFjaz86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhpc0NhbGxiYWNrLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNlcnZpY2Ugb2JqZWN0cyBwdWJsaXNoZWQgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgcHVibGlzaGVkU2VydmljZXM6IE1hcDxzdHJpbmcsYW55PjtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIG9iamVjdHMgY29uc3RpdHV0aW5nIHN1YnNjcmlwdGlvbnMgbWFkZSBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBzdWJzY3JpYmVkU2VydmljZXM6IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+O1xyXG5cclxuICAgIC8vLyAjaWYgREVCVUdcclxuICAgIHByaXZhdGUgZGVidWdJRCA9IGdfbmV4dFZORGVidWdJRCsrO1xyXG5cdC8vLyAjZW5kaWZcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbyBjbGFzcyBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIHN1YnNjcmlwdGlvbiBvZiBhIG5vZGUgdG8gYSBzZXJ2aWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgVk5TdWJzY3JpYmVkU2VydmljZUluZm9cclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgZmlsbGVkIGluIHdpdGggdGhlIHNlcnZpY2UgdmFsdWVcclxuXHRyZWY6IFJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIERlZmF1bHQgdmFsdWUgb2YgdGhlIHNlcnZpY2UgdGhhdCBpcyB1c2VkIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHB1Ymxpc2hlcyB0aGVcclxuXHQvLyBzZXJ2aWNlXHJcblx0ZGVmYXVsdFNlcnZpY2U6IGFueTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgYSBub2RlIGNhbiBzdWJzY3JpYmUgdG8gYSBzZXJ2aWNlIHRoYXQgaXQgaW1wbGVtZW50cyBpdHNlbGYuIFRoaXNcclxuXHQvLyBpcyB1c2VmdWwgaW4gY2FzZSB3aGVyZSBhIHNlcnZpY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhIGNvbXBvbmVudCBjYW4gY2hhaW4gdG8gYSBzZXJ2aWNlXHJcblx0Ly8gaW1wbGVtZW50ZWQgYnkgYW4gYW5jZXN0b3IgY29tcG9uZW50LlxyXG5cdHVzZVNlbGY6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0V2ZW50U2xvdFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCJcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdmdUeXBlc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIlxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vY29tcC9Qb3B1cHNcIlxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNaW1ibC1zcGVjaWZpYyBzdHlsZSBzY2hlZHVsZXIgdGhhdCBjb29yZGluYXRlcyBNaW1jc3MgRE9NIHdyaXRpbmcgd2l0aCBNaW1ibFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtzX2luaXRTdHlsZVNjaGVkdWxlcn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxyXG5cclxuLy8gU2V0IE1pbWJsIHN0eWxlIHNjaGVkdWxlciBhcyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgZm9yIHN0eWxlLXJlbGF0ZWQgRE9NLXdyaXRpbmcgb3BlcmF0aW9ucy5cclxuZXhwb3J0IGxldCBtaW1ibFN0eWxlU2NoZWR1bGVyVHlwZSA9IHNfaW5pdFN0eWxlU2NoZWR1bGVyKCk7XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9VdGlsRnVuY1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL0V2ZW50U2xvdFwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL1RyaWdnZXJXYXRjaGVyXCJcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRWxtQXR0clwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1ZOQmFzZVwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvQ2xhc3NDb21wVk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL0luZGVwZW5kZW50Q29tcFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9NYW5hZ2VkQ29tcFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9FbG1WTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvRnVuY1ZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9GdW5jUHJveHlWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvUHJvbWlzZVByb3h5Vk5cIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL1RleHRWTlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvUm9vdFZOXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9TdHlsZVNjaGVkdWxlclwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvUHViU3ViXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9SZWNvbmNpbGVyXCJcclxuIiwi77u/LyoqXHJcbiAqIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlIGxpc3RlbmVycyBjYW4gYmVcclxuICogYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvKipcclxuXHQgKiBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0ICogZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0ICovXHJcblx0YXR0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuICovXHJcblx0ZGV0YWNoKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGN1cnJlbnRseSBhdHRhY2hlZCBsaXN0ZW5lcnMuICovXHJcblx0cmVhZG9ubHkgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFdmVudFNsb3RPd25lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBldmVudCBzbG90IGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhlIGNhbGxlciB3aG9cclxuICogY3JlYXRlZCBpdC4gVGhlIG93bmVyIGNhbiBmaXJlIGV2ZW50cyBhbmQgY2xlYXIgZXZlbnQgbGlzdGVuZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90T3duZXI8VEZ1bmMgZXh0ZW5kcyBGdW5jdGlvbj4gZXh0ZW5kcyBJRXZlbnRTbG90PFRGdW5jPlxyXG57XHJcblx0LyoqXHJcblx0ICogTWV0aG9kIHRoYXQgcmFpc2VzIHRoZSBldmVudCBhbmQgY2FsbHMgYWxsIHRoZSBsaXN0ZW5lcnMgKGlmIGFueSkuIEl0IGhhcyB0aGUgc2lnbmF0dXJlXHJcblx0ICogb2YgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHNvIG9ubHkgcHJvcGVyLXR5cGVzIHBhcmFtZXRlcnMgY2FuIGJlIHBhc3NlZCB0byBpdC5cclxuXHQgKi9cclxuXHRmaXJlOiBURnVuYztcclxuXHJcblx0LyoqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuICovXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbiAqIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbiAqIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBpbXBsZW1lbnRzIElFdmVudFNsb3RPd25lcjxURnVuYz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIE1ldGhvZCB0aGF0IHJhaXNlcyB0aGUgZXZlbnQgYW5kIGNhbGxzIGFsbCB0aGUgbGlzdGVuZXJzIChpZiBhbnkpLiBJdCBoYXMgdGhlIHNpZ25hdHVyZVxyXG5cdCAqIG9mIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBzbyBvbmx5IHByb3Blci10eXBlcyBwYXJhbWV0ZXJzIGNhbiBiZSBwYXNzZWQgdG8gaXQuXHJcblx0ICovXHJcblx0cHVibGljIGZpcmU6IFRGdW5jID0gdGhpcy5yZWFsRmlyZSBhcyBhbnkgYXMgVEZ1bmM7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gYXMgYSBsaXN0ZW5lciB0byB0aGUgZXZlbnQuIE5vdGUgdGhhdCB0aGlzIGNhbm5vdCBiZSBhIGxhbWJkYVxyXG5cdCAqIGZ1bmN0aW9uIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gcmVtb3ZlIGEgbGFtYmRhIGZ1bmN0aW9uIGxpc3RlbmVyIGxhdGVyLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhdHRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgPT09IG51bGwpXHJcblx0XHRcdHRoaXMubGlzdGVuZXJzID0gbmV3IFNldDxURnVuYz4oKTtcclxuXHJcblx0XHR0aGlzLmxpc3RlbmVycy5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBkZXRhY2goIGxpc3RlbmVyOiBURnVuYyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubGlzdGVuZXJzLmRlbGV0ZSggbGlzdGVuZXIpO1xyXG5cdFx0XHRpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA9PT0gMClcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY3VycmVudGx5IGF0dGFjaGVkIGxpc3RlbmVycy4gKi9cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnNpemU7IH1cclxuICAgIFxyXG5cclxuICAgIFxyXG5cdC8qKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgdG8gdGhlIGV2ZW50LiAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXQgb2YgbGlzdGVuZXIgZnVuY3Rpb25zLiBXaGVuIHRoZXJlIGFyZSBubyBsaXN0ZW5lcnMsIHRoaXMgZmllbGQgaXMgc2V0IHRvIG51bGwgdG9cclxuXHQvLyBwcmVzZXJ2ZSBzcGFjZS5cclxuXHRwcml2YXRlIGxpc3RlbmVyczogU2V0PFRGdW5jPiA9IG51bGw7XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgcmVhbGx5IGNhbGxzIHRoZSBsaXN0ZW5lcnMgaW4gYSBsb29wLiBJdCBkZWNvbnN0dWN0cyB0aGUgXCJhcmd1bWVudHNcIiB2YWx1ZVxyXG5cdC8vIGluIG9yZGVyIHRvIHBhc3MgdGhlIHByb3BlciBwYXJhbWV0ZXJzIHRvIHRoZSBsaXN0ZW5lcnMuXHJcblx0cHJpdmF0ZSByZWFsRmlyZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcclxuXHRcdFx0XHRsaXN0ZW5lciggLi4uYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW50ZXJmYWNlIGFuZCBjbGFzcyBmb3Igc2ltcGxlIGV2ZW50cyBhY2NlcHRpbmcgbm8gcGFyYW1ldGVycy5cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgSUV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIEV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNdWx0aUV2ZW50U2xvdCB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZSBUXHJcbiAqIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPiB0eXBlIHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHNoYXBlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogSUV2ZW50U2xvdDwoKSA9PiB2b2lkPjtcclxuICogICAgIGNoYW5nZTogSUV2ZW50U2xvdChuZXdWYWw6IG51bWJlcikgPT4gdm9pZD47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlFdmVudFNsb3Q8VCBleHRlbmRzIHsgW0s6IHN0cmluZ106IEZ1bmN0aW9uIH0+ID1cclxue1xyXG5cdHJlYWRvbmx5IFtQIGluIGtleW9mIFRdOiBJRXZlbnRTbG90PFRbUF0+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXVsdGlFdmVudFNsb3RPd25lciB0eXBlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgZm9yIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdHlwZVxyXG4gKiBUIGhhcyBjb3JyZXNwb25kaW5nIHByb3BlcnR5LCB3aGljaCBpcyBhbiBldmVudCBzbG90IGZvciBhIGZ1bmN0aW9uLCB3aG9zZSBzaWduYXR1cmUgaXMgdGhlIHNhbWVcclxuICogYXMgb2YgdGhlIG9yaWdpbmFsIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgaWYgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIHR5cGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHR5cGUgSU15RXZlbnRzID0gXHJcbiAqIHtcclxuICogICAgIGNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gKiAgICAgY2hhbmdlOiAoIG5ld1ZhbDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogdGhlbiB0aGUgTXVsdGlFdmVudFNsb3RPd25lcjxJTXlFdmVudHM+IHR5cGUgd2lsbCBoYXZlIHRoZSBmb2xsb3dpbmcgc2hhcGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHtcclxuICogICAgIGNsaWNrOiBJRXZlbnRTbG90T3duZXI8KCkgPT4gdm9pZD47XHJcbiAqICAgICBjaGFuZ2U6IElFdmVudFNsb3RPd25lcihuZXdWYWw6IG51bWJlcikgPT4gdm9pZD47XHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlFdmVudFNsb3RPd25lcjxUIGV4dGVuZHMgeyBbSzogc3RyaW5nXTogRnVuY3Rpb24gfT4gPVxyXG57XHJcblx0cmVhZG9ubHkgW1AgaW4ga2V5b2YgVF06IElFdmVudFNsb3RPd25lcjxUW1BdPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCB3aWxsIGhhdmUgZXZlbnQgc2xvdHMgZm9yIGVhY2ggcHJvcGVydHkgb2YgdGhlIHRlbXBsYXRlIHR5cGUgVC4gVGhlXHJcbiAqIGNhbGxlciB3aWxsIGJlIHRoZSBvd25lciBvZiB0aGUgZXZlbnQgc2xvdHM7IHRoYXQgaXMsIGl0IHdpbGwgYmUgYWJsZSB0byBmaXJlIGV2ZW50cyBhbmRcclxuICogY2xlYXIgYWxsIGxpc3RlbmVycyB3aGVuIG5lY2Vzc2FyeS4gVGhpcyBhbGxvd3MgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0eXBlIElNeUV2ZW50cyA9IFxyXG4gKiB7XHJcbiAqICAgICBjbGljazogKCkgPT4gdm9pZDtcclxuICogICAgIGNoYW5nZTogKCBuZXdWYWw6IG51bWJlcikgPT4gdm9pZDtcclxuICogfVxyXG4gKiBcclxuICogaW50ZXJmYWNlIElNeUNsYXNzXHJcbiAqIHtcclxuICogICAgIGV2ZW50czogTXVsdGlFdmVudFNsb3Q8SU15RXZlbnRzPjtcclxuICogICAgIGRvU29tZXRoaW5nKCk6IHZvaWQ7XHJcbiAqIH1cclxuICogXHJcbiAqIGNsYXNzIE15Q2xhc3MgaW1wbGVtZW50cyBJTXlDbGFzc1xyXG4gKiB7XHJcbiAqICAgICBwcml2YXRlIF9ldmVudHMgPSBjcmVhdGVNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+KCk7XHJcbiAqICAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBNdWx0aUV2ZW50U2xvdDxJTXlFdmVudHM+IHsgcmV0dXJuIHRoaXMuX2V2ZW50czsgfVxyXG4gKiBcclxuICogICAgIHB1YmxpYyBkb1NvbWV0aGluZygpOiB2b2lkIHsgdGhpcy5fZXZlbnRzLmNoYW5nZS5maXJlKDEpO31cclxuICogfVxyXG4gKiBcclxuICogbGV0IG9iajogSU15Q2xhc3MgPSBuZXcgTXlDbGFzcygpO1xyXG4gKiBvYmouZXZlbnRzLmNoYW5nZS5hZGQoIChuOiBudW1iZXIpID0+IGNvbnNvbGUubG9nKG4pKTtcclxuICogb2JqLmRvU29tZXRoaW5nKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpRXZlbnRTbG90PFQgZXh0ZW5kcyB7IFtLOiBzdHJpbmddOiBGdW5jdGlvbiB9PigpOiBNdWx0aUV2ZW50U2xvdE93bmVyPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IFByb3h5KCB7fSwgbmV3IE11bHRpRXZlbnRTbG90SGFuZGxlcigpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIHByb3h5IGhhbmRsZXIgZm9yIHRoZSBNdWx0aUV2ZW50U2xvdCBvYmplY3QuIFRoZSBoYW5kbGVyIGRvZXNuJ3QgdXNlIGFueVxyXG4gKiB0YXJnZXQgb2JqZWN0IC0gaXQgc2ltcGx5IGNyZWF0ZXMgRXZlbnRTbG90IHByb3BlcnR5IGluIGl0c2VsZiB3aGVuZXZlciB0aGUgZ2V0IG1ldGhvZCBpc1xyXG4gKiBjYWxsZWQuIFRoZSBUeXBlU2NyaXB0J3MgdHlwZSBjaGVja2luZyBlbnN1cmVzIHRoYXQgb25seSBwcm9wZXIgZXZlbnQgc2xvdCBuYW1lcyBjYW4gYmUgdXNlZC5cclxuICovXHJcbmNsYXNzIE11bHRpRXZlbnRTbG90SGFuZGxlclxyXG57XHJcblx0cHVibGljIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IHN0cmluZywgcmVjZWl2ZXI6IGFueSk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzW3Byb3BdID8gdGhpc1twcm9wXSA6IHRoaXNbcHJvcF0gPSBuZXcgRXZlbnRTbG90KCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHYXRoZXJpbmcgdXBkYXRlIHN0YXRpc3RpY3NcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBDYXRlZ29yaWVzIG9mIGNoYW5nZWQgZW50aXRpZXMgdG8gZ2F0aGVyIHN0YXRpc3RpY3MgYWJvdXQuXHJcbmV4cG9ydCBlbnVtIFN0YXRzQ2F0ZWdvcnlcclxue1xyXG5cdFJvb3QsXHJcblx0Q29tcCxcclxuXHRFbG0sXHJcblx0VGV4dCxcclxuXHRBdHRyLFxyXG5cdEV2ZW50LFxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFjdGlvbnMgb24gYW4gZW50aXR5IHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LiBOb3QgYWxsIGFjdGlvbnMgYXJlIHJlbGV2YW50IGZvciBhbGxcclxuLy8gY2F0ZWdvcmllczpcclxuLy9cdC0gVXBkYXRlZCBkb2Vzbid0IGV4aXN0IGZvciBjb21wb25lbnRzIGFuZCBmb3IgZWxlbWVudHNcclxuLy9cdC0gTW92ZWQgZG9lc24ndCBleGlzdCBmb3IgYXR0cmlidXRlc1xyXG4vL1x0LSBSZW5kZXJlZCBvbmx5IGV4aXN0cyBmb3IgY29tcG9uZW50c1xyXG5leHBvcnQgZW51bSBTdGF0c0FjdGlvblxyXG57XHJcblx0QWRkZWQ9IDEsXHJcblx0RGVsZXRlZCA9IDIsXHJcblx0VXBkYXRlZCA9IDMsXHJcblx0TW92ZWQgPSA0LFxyXG5cdFJlbmRlcmVkID0gNSxcclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9yYWdlIGZvciBhIG51bWJlciBvZiBlYWNoIGFjdGlvbiB1bmRlciBhIGNhdGVnb3J5LlxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTdGF0c1xyXG57XHJcblx0YWRkZWQ6IG51bWJlciA9IDA7XHJcblx0ZGVsZXRlZDogbnVtYmVyID0gMDtcclxuXHR1cGRhdGVkOiBudW1iZXIgPSAwO1xyXG5cdG1vdmVkOiBudW1iZXIgPSAwO1xyXG5cdHJlbmRlcmVkOiBudW1iZXIgPSAwO1xyXG5cclxuXHRwdWJsaWMgaGFzU29tZURhdGEoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmFkZGVkIHx8IHRoaXMuZGVsZXRlZCB8fCB0aGlzLnVwZGF0ZWQgfHwgdGhpcy5tb3ZlZCB8fCB0aGlzLnJlbmRlcmVkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsZWRTdGF0c1xyXG57XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN0YXJ0VGltZTogbnVtYmVyO1xyXG5cdGR1cmF0aW9uOiBudW1iZXI7XHJcblx0Y29tcDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZWxtOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHR0ZXh0OiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRhdHRyOiBDYXRlZ29yeVN0YXRzID0gbmV3IENhdGVnb3J5U3RhdHMoKTtcclxuXHRldmVudDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHVyYXRpb24gPSAwLjA7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc3RvcCggcHJpbnRTdW1tYXJ5OiBib29sZWFuID0gdHJ1ZSlcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuXHJcblx0XHRpZiAocHJpbnRTdW1tYXJ5KVxyXG5cdFx0XHRjb25zb2xlLmxvZyggdGhpcy50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gaW5jcmVtZW50cyB0aGVudW1iZXIgb2YgdGltZXMgdGhlIGdpdmVuIGFjdGlvbiB3YXMgcGVyZm9ybWVkIG9uIGFuIGVudGl0eSBvZiBhIGdpdmVuXHJcblx0Ly8gY2F0ZWdvcnkuIElmIHRoZSBlbnRpdHkgaXMgYSBET00gZW50aXR5IChhcyBvcHBvc2VkIHRvIGEgY29tcG9uZW50KSwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gdG90YWwgbnVtYmVyIGlzIGFsc28gaW5jcmVtZW50ZWQuXHJcblx0cHVibGljIGxvZyggY2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnksIGFjdGlvbjogU3RhdHNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNhdGVnb3J5U3RhdHM6IENhdGVnb3J5U3RhdHM7XHJcblx0XHRzd2l0Y2goIGNhdGVnb3J5KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuQ29tcDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMuY29tcDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5FbG06IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmVsbTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5UZXh0OiBjYXRlZ29yeVN0YXRzID0gdGhpcy50ZXh0OyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkF0dHI6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmF0dHI7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRXZlbnQ6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmV2ZW50OyBicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCggYWN0aW9uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkFkZGVkOiBjYXRlZ29yeVN0YXRzLmFkZGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLkRlbGV0ZWQ6IGNhdGVnb3J5U3RhdHMuZGVsZXRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5VcGRhdGVkOiBjYXRlZ29yeVN0YXRzLnVwZGF0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uTW92ZWQ6IGNhdGVnb3J5U3RhdHMubW92ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uUmVuZGVyZWQ6IGNhdGVnb3J5U3RhdHMucmVuZGVyZWQrKzsgYnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmR1cmF0aW9uLnRvRml4ZWQoMil9bXMgYCArXHJcblx0XHRcdFx0dGhpcy5nZXRDb21wU3RyaW5nKCkgKyB0aGlzLmdldEVsbVN0cmluZygpICsgdGhpcy5nZXRUZXh0U3RyaW5nKCkgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0clN0cmluZygpICsgdGhpcy5nZXRFdmVudFN0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbXBvbmVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRDb21wU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jb21wLmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmNvbXAuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuY29tcC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjcwRVwiLCB0aGlzLmNvbXAucmVuZGVyZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuY29tcC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBjb21wKCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZWxlbWVudCBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFbG1TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmVsbS5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5lbG0uYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZWxtLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMuZWxtLm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGVsbSgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRleHQgbm9kZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRUZXh0U3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy50ZXh0Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLnRleHQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMudGV4dC5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiKlwiLCB0aGlzLnRleHQudXBkYXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTIxRkZcIiwgdGhpcy50ZXh0Lm1vdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gYHRleHQoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0QXR0clN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuYXR0ci5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5hdHRyLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmF0dHIuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5hdHRyLnVwZGF0ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgYXR0cigke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGF0dHJpYnV0ZSBzdGF0aXN0aWNzLlxyXG5cdHB1YmxpYyBnZXRFdmVudFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXZlbnQuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZXZlbnQuYWRkZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCItXCIsIHRoaXMuZXZlbnQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy5ldmVudC51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGV2ZW50KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHNpZ24gYW5kIHZhbHVlIHRvIHRoZSBnaXZlbiBzdHJpbmcgYnV0IG9ubHkgaWYgdGhlIHZhbHVlIGlzIG5vbi16ZXJvLlxyXG5cdHByaXZhdGUgZ2V0VmFsU3RyaW5nKCBzOiBzdHJpbmcsIHNpZ246IHN0cmluZywgdmFsOiBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodmFsID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChzLmxlbmd0aCA+IDAgPyBcIiBcIiA6IFwiXCIpICsgc2lnbiArIHZhbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBzdGF0czogRGV0YWlsZWRTdGF0cztcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ29tbW9uIHR5cGVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRGlzcG9zZXIgaW50ZXJmYWNlIGFsbG93cyBjbGllbnRzIHRvIGluZm9ybSB0aGUgb2JqZWN0IHRoYXQgaXQgY2FuIGNsZWFyIGl0cyBpbnRlcm5hbFxyXG4gKiByZXNvdXJjZXMuIFRoZSBvYmplY3QgY2Fubm90IGJlIHVzZWQgYWZ0ZXIgaXQgaGFzIGJlZW4gZGlzcG9zZWQgb2ZmLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBhbnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMgYW5kIHJldHVybiBhbnkgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBBbnlBbnlGdW5jID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XHJcblxyXG4vKiogVHlwZSBmb3IgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybiB2YWx1ZXMgb2YgYW55IHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTm9uZVR5cGVGdW5jPFQ+ID0gKCkgPT4gVDtcclxuXHJcbi8qKiBUeXBlIGZvciBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbm8gcGFyYW1ldGVycyBhbmQgZG9uJ3QgcmV0dXJuIGFueSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBOb25lVm9pZEZ1bmMgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJpZ2dlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElUcmlnZ2VyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGtlZXBzIGEgdmFsdWUgYW5kIG5vdGlmaWVzIGFsbCBhdHRhY2hlZCB3YXRoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpZ2dlcjxUID0gYW55PlxyXG57XHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIGdldCgpOiBUO1xyXG5cclxuICAgIC8vIFNldHMgYSBuZXcgdmFsdWVcclxuICAgIHNldCggdjogVCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyRGVwdGggZW51bWVyYXRpb24gZGVmaW5lcyBwb3NzaWJsZSB3YXlzIG9mIGhvdyB0cmlnZ2VycyBkZWFsIHdpdGggY29udGFpbmVyIGRhdGE7XHJcbiAqIHRoYXQgaXMsIG9iamVjdHMsIGFycmF5cywgbWFwcyBhbmQgc2V0cy4gRm9yIHRyaWdnZXJzIHdpdGggdmFsdWVzIG9mIG5vbi1jb250YWluZXIgdHlwZXNcclxuICogdGhpcyBlbnVtZXJhdGlvbiBpcyBpcnJlbGV2YW50LlxyXG4gKi9cclxuZW51bSBUcmlnZ2VyRGVwdGhcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmx5IGNoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhcmUgaGFuZGxlZC4gQWN0aW9ucyBvZiBhZGRpbmcsIHJlbW92aW5nIGFuZCBtb2RpZnlpbmdcclxuICAgICAqIGl0ZW1zIGluIHRoZSBjb250YWluZXIgYXJlIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIFZhbHVlID0gMCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhbmQgb2YgdGhlIGltbWVkaWF0ZSBjb250YWluZXIgaXRlbXMgYXJlIGhhbmRsZWQuIEFjdGlvbnMgb2ZcclxuICAgICAqIGFkZGluZyBhbmQgcmVtb3ZpbmcgaXRlbXMgaW4gdGhlIGNvbnRhaW5lciBjYXVzZSBjaGFuZ2UgdG8gYmUgdHJpZ2dlcnJlZDsgaG93ZXZlciBhY3Rpb25zXHJcbiAgICAgKiBvZiBtb2RpZnlpbmcgaXRlbXMgdGhlbXNlbGZzIGFyZSBpZ25vcmVkLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gICAgICogdGhpcyB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBTaGFsbG93ID0gMSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgaW4gdGhlIHZhbHVlIGl0c2VsZiBhbmQgb2YgaXRlbXMgb24gYWxsIGxldmVscyBhcmUgaGFuZGxlZC4gSXRlbXMgYWRkZWQgdG8gdGhlXHJcbiAgICAgKiBjb250YWluZXIgYXJlIGNvbnZlcnRlZCB0byBkZWVwIHRyaWdnZXJzLiBGb3IgdHJpZ2dlcnMgd2l0aCB2YWx1ZXMgb2Ygbm9uLWNvbnRhaW5lciB0eXBlc1xyXG4gICAgICogdGhpcyB2YWx1ZSBpcyBlcXVpdmFsZW50IHRvIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBEZWVwID0gMTAwLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgdHJpZ2dlciBvYmplY3Qgb2YgdGhlIGdpdmVuIGRlcHRoIHdpdGggdGhlIGdpdmVuIGluaXRpYWwgdmFsdWUuXHJcbiAqIEBwYXJhbSB2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJpZ2dlcjxUID0gYW55PiggZGVwdGg6IG51bWJlciwgdj86IFQpOiBJVHJpZ2dlcjxUPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFRyaWdnZXIoIGRlcHRoIDwgMCA/IDAgOiBkZXB0aCwgdik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcmlnZ2VyIGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQga2VlcHMgYSB2YWx1ZSBhbmQgbm90aWZpZXMgYWxsIGF0dGFjaGVkIHdhdGNoZXJzXHJcbiAqIHdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuY2xhc3MgVHJpZ2dlcjxUID0gYW55PiBpbXBsZW1lbnRzIElUcmlnZ2VyPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBkZXB0aD86IG51bWJlciwgdj86IFQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG4gICAgICAgIHRoaXMudiA9IHRyaWdnZXJyaXplKCB2LCB0aGlzLCBkZXB0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHMgYSBuZXcgdmFsdWVcclxuICAgIHB1YmxpYyBzZXQoIHY6IFQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBkbyBpZiB0aGUgdmFsdWUgaXMgdGhlIHNhbWVcclxuICAgICAgICBpZiAodiA9PT0gdGhpcy52KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudiA9IHRyaWdnZXJyaXplKCB2LCB0aGlzLCB0aGlzLmRlcHRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90aWZpZXMgdGhlIG1hbmFnZXIgdGhhdCB0aGUgdHJpZ2dlcidzIHZhbHVlIGhhcyBiZWVuIHJlYWRcclxuICAgIHB1YmxpYyBub3RpZnlSZWFkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBnX21hbmFnZXIubm90aWZ5VHJpZ2dlclJlYWQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgbWFuYWdlciB0aGF0IHRoZSB0cmlnZ2VyJ3MgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZC4gV2Ugb25seSBub3RpZnkgdGhlIG1hbmFnZXJcclxuICAgIC8vIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSB3YXRjaGVyIGF0dGFjaGVkIHRvIG91ciB0cmlnZ2VyO1xyXG4gICAgcHVibGljIG5vdGlmeUNoYW5nZWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICBnX21hbmFnZXIubm90aWZ5VHJpZ2dlckNoYW5nZWQoIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvLyBWYWx1ZSBiZWluZyBnZXQgYW5kIHNldFxyXG4gICAgcHJpdmF0ZSB2OiBUO1xyXG5cclxuICAgIC8vIFNldCBvZiB3YXRjaGVycyB3YXRjaGluZyBvdmVyIHRoaXMgdHJpZ2dlcidzIHZhbHVlLiBUaGlzIG1lbWJlciBzZXJ2ZXMgYXMgYSBzdG9yYWdlIGluc3RlYWRcclxuICAgIC8vIG9mIGhhdmluZyB0aGUgbWFuYWdlciB0byBtYXAgb2YgdHJpZ2dlcnMgdG8gdGhlIHNldCBvZiB3YXRjaGVycy5cclxuICAgIHB1YmxpYyB3YXRjaGVycyA9IG5ldyBTZXQ8V2F0Y2hlcj4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2F0Y2hlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElXYXRjaGVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgb2JqZWN0IHRoYXQgd3JhcHMgYSBmdW5jdGlvbiBhbmQgaGFzIHRoZSBzYW1lXHJcbiAqIHNpZ25hdHVyZSBhcyB0aGlzIGZ1bmN0aW9uLiBXaGVuIGEgd2F0Y2hlciBpcyBjYWxsZWQgaXQgY2FscyB0aGUgd3JhcHBlZCBmdW5jdGlvbiBhbmQgYXR0YWNoZXNcclxuICogdG8gYWxsIHRyaWdnZXJzIHdob3NlIHZhbHVlcyB3ZXJlIHJlYWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNhbGwuIFdoZW4gdmFsdWVzIG9mIHRoZXNlXHJcbiAqIHRyaWdnZXJzIGNoYW5nZSwgYSByZXNwb25kZXIgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGUgcmVzcG9uZGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgaXMgY3JlYXRlZCwgYnV0IGl0IGNhbiBiZSBjaGFuZ2VkIGxhdGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT4gZXh0ZW5kcyBJRGlzcG9zZXJcclxue1xyXG4gICAgLyoqIFRoaXMgaXMgYSBjYWxsYWJsZSBpbnRlcmZhY2UsIHdoaWNoIGlzIGltcGxlbWVudCBhcyBhIGZ1bmN0aW9uLiAqL1xyXG4gICAgKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pOiBSZXR1cm5UeXBlPFQ+O1xyXG5cclxuICAgIC8vIC8qKiBTZXRzIGEgcmVzcG9uZGVyIGZ1bmN0aW9uICovXHJcbiAgICAvLyBzZXRSZXNwb25kZXIoIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCByZXNwb25kZXJUaGlzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBTeW1ib2wgdXNlZCB0byBrZWVwIGEgd2F0Y2hlciBvYmplY3QgYXR0YWNoZWQgdG8gdGhlIHdhdGNoZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5sZXQgc3ltV2F0Y2hlciA9IFN5bWJvbCggXCJzeW1XYXRjaGVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdhdGNoZXIgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIHJlZ3VsYXIgZnVuY3Rpb24uIFdoZW4gdGhlXHJcbiAqIHdhdGNoZXIgZnVuY3Rpb24gaXMgaW52b2tlZCBpdCBpbnZva2VzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhbmQgaXQgbm90aWNlcyBhbGwgdHJpZ2dlciBvYmplY3RzXHJcbiAqIHRoYXQgd2VyZSByZWFkIGR1cmluZyBpdHMgZXhlY3V0aW9uLiBXaGVuIGFueSBvZiB0aGVzZSB0cmlnZ2VyIG9iamVjdHMgaGF2ZSB0aGVpciB2YWx1ZXNcclxuICogY2hhbmdlZCwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZC5cclxuICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgd2F0Y2hlZFxyXG4gKiBAcGFyYW0gcmVzcG9uZGVyIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB2YWx1ZXMgb2YgdGhlIHRyaWdnZXIgb2JqZWN0cyBlbmNvdW50ZXJlZCBkdXJpbmdcclxuICogdGhlIG9yaWdpbmFsIGZ1bmN0aW9uJ3MgbGFzdCBleGVjdXRpb24gY2hhbmdlLlxyXG4gKiBAcGFyYW0gZnVuY1RoaXMgT3B0aW9uYWwgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSByZXNwb25kZXJUaGlzIE9wdGlvbmFsIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNhbGwgdGhlIHJlc3BvbmRlciBmdW5jdGlvbi5cclxuICogSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZSBcInRoaXNcIiB2YWx1ZSBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXYXRjaGVyPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgcmVzcG9uZGVyOiBOb25lVm9pZEZ1bmMsXHJcbiAgICBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSk6IElXYXRjaGVyPFQ+XHJcbntcclxuICAgIGZ1bmN0aW9uIHdhdGNoZXJGdW5jKC4uLmFyZ3M6IGFueVtdKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXI6IFdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIG9mIFwidGhpc1wiIGZvciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2FzIG5vdCBzdXBwbGllZCBidXQgbm93IHdoZW4gdGhlXHJcbiAgICAgICAgLy8gd2F0Y2hlciBleGVjdXRlcywgXCJ0aGlzXCIgaXMgZGVmaW5lZCwgd2UgcmVtZW1iZXIgaXQuXHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXIuZXhlY3V0ZSggdGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgd2F0Y2hlciBvYmplY3QgaW4gdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYgdXNpbmcgYSBzeW1ib2wuXHJcbiAgICB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSA9IG5ldyBXYXRjaGVyKCBmdW5jLCByZXNwb25kZXIsIGZ1bmNUaGlzLCByZXNwb25kZXJUaGlzKTtcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgdGhlIGRpc3Bvc2UgbWV0aG9kXHJcbiAgICAod2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXIpLmRpc3Bvc2UgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdhdGNoZXIgPSB3YXRjaGVyRnVuY1tzeW1XYXRjaGVyXSBhcyBXYXRjaGVyO1xyXG4gICAgICAgIHdhdGNoZXIgJiYgd2F0Y2hlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHdhdGNoZXJGdW5jW3N5bVdhdGNoZXJdO1xyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gd2F0Y2hlckZ1bmMgYXMgSVdhdGNoZXI8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBXYXRjaGVyIGNsYXNzIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB3YXRjaGluZyBmb3IgdHJpZ2dlciBvYmplY3RzIGVuY291bnRlcmVkXHJcbiAqIGR1cmluZyBhIGZ1bmN0aW9uIGV4ZWN1dGlvbi4gV2hlbiB0aGUgdHJpZ2dlciBvYmplY3RzIGFyZSByZWFkLCB0aGV5IGFyZSByZW1lbWJlcmVkIGJ5IHRoZVxyXG4gKiBXYXRjaGVyIG9iamVjdC4gV2hlbmV2ZXIgYSB2YWx1ZSBpcyBjaGFuZ2VkIGluIGFueSBvZiB0aGVzZSB0cmlnZ2VycywgdGhlIHdhdGNoZXIgb2JqZWN0IGlzXHJcbiAqIG5vdGlmaWVkIGFuZCBjYWxscyB0aGUgcmVzcG9uZGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgV2F0Y2hlcjxUIGV4dGVuZHMgQW55QW55RnVuYyA9IGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIGZ1bmM6IFQsIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jLCBmdW5jVGhpcz86IGFueSwgcmVzcG9uZGVyVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMucmVzcG9uZGVyID0gcmVzcG9uZGVyO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuXHJcbiAgICAgICAgLy8gaWYgcmVzcG9uZGVyIFwidGhpc1wiIGlzIG5vdCBkZWZpbmVkIHVzZSB0aGUgb25lIGZvciB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSByZXNwb25kZXJUaGlzID8gcmVzcG9uZGVyVGhpcyA6IGZ1bmNUaGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdoaWxlIHVwZGF0aW5nIHRoZSBzZXQgb2YgYXR0YWNoZWQgdHJpZ2dlcnMuIFRoZSBcImZ1bmNUaGlzXCJcclxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgXCJ0aGlzXCIgdW5kZXIgd2hpY2ggdGhlIGludGVybmFsIHdhdGNoZXIgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkLiBJdFxyXG4gICAgICogd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgXCJ0aGlzXCIgdG8gYXBwbHkgd2hlbiBpbnZva2luZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gaWYgaXQgd2Fzbid0XHJcbiAgICAgKiBzZXQgeWV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIHdhdGNoZXIgd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3BvbmRlclRoaXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbmRlclRoaXMgPSBmdW5jVGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGFsbCBjdXJyZW50IHRyaWdnZXJzXHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG5cclxuICAgICAgICAvLyBpbnN0YWxsIG91ciB3YXRjaGVyIGF0IHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgZ19tYW5hZ2VyLnB1c2hXYXRjaGVyKCB0aGlzKVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBmdW5jdGlvblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvdXIgd2F0Y2hlciBmcm9tIHRoZSB0b3Agb2YgdGhlIHdhdGNoZXJzIHN0YWNrXHJcbiAgICAgICAgICAgIGdfbWFuYWdlci5wb3BXYXRjaGVyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsZWFycyBpbnRlcm5hbCByZXNvdXJjZXMuICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGlzIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBhbGwgdHJpZ2dlcnNcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc3BvbmRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mdW5jVGhpcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXJUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3RpZmllcyB0aGUgd2F0Y2hlciB0aGF0IGl0IHNob3VsZCBjYWxsIHRoZSByZXNwb25kZXIgZnVuY3Rpb24uIFRoaXMgb2NjdXJzIHdoZW4gdGhlcmVcclxuICAgIC8vIGFyZSB0cmlnZ2VycyB3aG9zZSB2YWx1ZXMgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgIHB1YmxpYyByZXNwb25kKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWQuIEl0IGNhbiBoYXBwZW4gaWYgYWZ0ZXIgYWxsIG11dGF0aW9uXHJcbiAgICAgICAgLy8gc2NvcGVzIGV4aXRlZCB0aGUgbWFuYWdlciBub3RpZmllcyBtdWx0aXBsZSB3YXRjaGVycyBhbmQgb25lIG9mIHRoZSB3YXRjaGVycycgcmVzcG9uZGVyXHJcbiAgICAgICAgLy8gZGlzcG9zZXMgb2YgYW5vdGhlciB3YXRjaGVyLlxyXG4gICAgICAgIGlmICghdGhpcy5yZXNwb25kZXIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNwb25kZXIuYXBwbHkoIHRoaXMucmVzcG9uZGVyVGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbnMgdGhlIHN0YXRlIG9mIHRoZSB3YXRjaGVyLCBzbyB0aGF0IGl0IGlzIGRldGFjaGVkIGZyb20gYW55IHRyaWdnZXJzIGFuZCBpcyByZW1vdmVkXHJcbiAgICAgKiBmcm9tIHRoZSBtYW5hZ2VyJ3Mgc2V0IG9mIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsZWFuKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBkZXRhY2hlcyB0aGlzIHdhdGNoZXIgZnJvbSBhbGwgdGhlIHRyaWdnZXJzIGFuZCB0aGUgdHJpZ2dlcnMgZnJvbSB0aGlzIHdhdGNoZXIuXHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCB0cmlnZ2VyID0+IHRyaWdnZXIud2F0Y2hlcnMuZGVsZXRlKCB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5jbGVhcigpO1xyXG5cclxuICAgICAgICAvLyBhc2sgdGhlIG1hbmFnZXIgdG8gZm9yZ2V0IGFib3V0IHRoaXMgd2F0Y2hlciBpZiBpdCBpcyBjdXJyZW50bHkgaW4gdGUgZGVmZXJyZWQgc2V0XHJcbiAgICAgICAgZ19tYW5hZ2VyLnJlbW92ZURlZmVycmVkV2F0Y2hlciggdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gYmVpbmcgd2F0Y2hlZDsgdGhhdCBpcywgZHVyaW5nIHdoaWNoIHdlIHNob3VsZCBsaXN0ZW4gdG8gdHJpZ2dlcnMgYmVpbmcgcmVhZCwgc29cclxuICAgIC8vIHRoYXQgd2UgY2FuIHJlbWVtYmVyIHRoZW0gYW5kIGxhdGVyIHJlc3BvbmQgd2hlbiB0aGV5IG5vdGlmeSB0aGF0IHRoZWlyIHZhbHVlcyBoYXZlIGJlZW5cclxuICAgIC8vIGNoYW5nZWQuXHJcbiAgICBwcml2YXRlIGZ1bmM6IFQ7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSB0aGUgdmFsdWUgb2Ygb25lIG9mIHRoZSB0cmlnZ2VycyBjaGFuZ2VzXHJcbiAgICBwcml2YXRlIHJlc3BvbmRlcjogTm9uZVZvaWRGdW5jO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3YXRjaGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxuXHJcbiAgICAvLyBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB0byByZXNwb25kZXIgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSByZXNwb25kZXJUaGlzOiBhbnk7XHJcblxyXG4gICAgLy8gU2V0IG9mIHRyaWdnZXJzIGN1cnJlbnRseSBiZWluZyB3YXRjaGVkIGJ5IHRoaXMgd2F0Y2hlci4gVGhpcyBtZW1lYmVyIGlzIHVzZWQgYnkgdGhlXHJcbiAgICAvLyBtYW5hZ2VyLiBJdCBpcyBlc3NlbnRpYWxseSBhIHN0b3JhZ2UsIHdoaWNoIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgbWFuYWdlciBoYXZpbmcgYVxyXG4gICAgLy8gbWFwIG9mIHdhdGNoZXJzIHRvIHRoZSBzZXRzIG9mIHRyaWdnZXJzLiBUaGUgcHVycG9zZSBvZiBrbm93aW5nIHdoYXQgdHJpZ2dlcnMgYXJlIHVzZWRcclxuICAgIC8vIGJ5IHdoYXQgd2F0Y2hlciBpcyB0byByZW1vdmUgdGhlIHdhdGNoZXIgZnJvbSBhbGwgdGhlc2UgdHJpZ2dlcnMgYmVmb3JlIHRoZSB3YXRjaGVkXHJcbiAgICAvLyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAgICBwdWJsaWMgdHJpZ2dlcnMgPSBuZXcgU2V0PFRyaWdnZXI+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE1hbmFnZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFRyaWdnZXJXYXRjaGVyTWFuYWdlciBjbGFzcyBpcyBhIHNpbmdsZXRvbiBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGdsb2JhbCBmdW5jdGlvbmFsaXR5XHJcbiAqIG9mIHRoZSB0cmlnZ2VyLXdhdGNoZXIgbWVjaGFuaXNtLiBJdCBpbmNsdWRlcyBhIHN0YWNrIG9mIHdhdGNoZXIgb2JqZWN0cyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcbiAqIHRoZWlyIGZ1bmN0aW9ucyBhbmQgd2F0Y2hpbmcgZm9yIHRyaWdnZXIgb2JqZWN0cyB0byBiZSByZWFkLiBXaGVuIGEgdHJpZ2dlciBvYmplY3QgaXMgYmVpbmdcclxuICogcmVhZCAodGhhdCBpcyBpdHMgZ2V0KCkgbWV0aG9kIGlzIGNhbGxlZCksIGFsbCB0aGUgd2F0Y2hlcnMgaW4gdGhlIHN0YWNrIGFyZSBub3RpZmllZCwgYmVjYXVzZVxyXG4gKiB0aGV5IGFsbCBkZXBlbmQgb24gdGhlIHRyaWdnZXIgb2JqZWN0J3MgdmFsdWUgZm9yIHRoZWlyIGZ1bmN0aW9uYWxpdHkuXHJcbiAqIFxyXG4gKiBJdCBhbHNvIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudCBvZiBtdXRhdGlvbiBzY29wZXMgYW5kIGhhbmRsZXMgbm90aWZ5aW5nIHdhdGNoZXJzIG9mXHJcbiAqIG11dGF0aW9ucyBvbmx5IHdoZW4gdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgaGFzIGV4aXRlZC4gVGhlIHRyaWdnZXJzIGRvbid0IG5vdGlmeSB0aGUgd2F0Y2hlcnNcclxuICogZGlyZWN0bHk7IGluc3RlYWQsIHRoZXkgbm90aWZ5IHRoZSBtYW5hZ2VyLCB3aGljaCBhY2N1bXVsYXRlcyB0aGUgaW5mb3JtYXRpb24gYW5kIG5vdGlmaWVzIGFsbFxyXG4gKiB0aGUgd2F0Y2hlcnMgb25jZSBvdXQgb2YgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUuXHJcbiAqL1xyXG5jbGFzcyBUcmlnZ2VyV2F0Y2hlck1hbmFnZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdXNoZXMgdGhlIGdpdmVuIHdhdGNoZXIgb2JqZWN0IHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndhdGNoZXJTdGFjay5wdXNoKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHdhdGNoZXIgb2JqZWN0IGN1cnJlbnRseSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9wV2F0Y2hlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyU3RhY2sucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSB3YXRjaGVyIG9iamVjdCBmcm9tIHRoZSBzZXQgb2YgZGVmZXJyZWQgd2F0Y2hlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZURlZmVycmVkV2F0Y2hlciggd2F0Y2hlcjogV2F0Y2hlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuZGVsZXRlKCB3YXRjaGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbnRlck11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVtZW50cyBtdXRhdGlvbiBzY29wZSByZWZlcmVuY2UgY291bnQuIElmIGl0IHJlYWNoZXMgemVybywgbm90aWZpZXMgYWxsIGRlZmVycmVkIHdhdGNoZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhpdE11dGF0aW9uU2NvcGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uU2NvcGVzUmVmQ291bnQgPT09IDApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlVucGFpcmVkIGNhbGwgdG8gZXhpdE11dGF0aW9uU2NvcGVcIik7XHJcblxyXG4gICAgICAgIGlmICgtLXRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA9PT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHdoZW4gd2F0Y2hlcnMgcmVzcG9uZCwgdGhleSBjYW4gZXhlY3V0ZSB0aGVpciB3YXRjaGVyIGZ1bmN0aW9ucyBhbmQgdGhhdCBjb3VsZFxyXG4gICAgICAgICAgICAvLyBtZXNzIHdpdGggdGhlIHNhbWUgc2V0IG9mIHdhdGNoZXJzIHdlIGFyZSBpdGVyYXRpbmcgb3Zlci4gVGhlcmVmb3JlLCB3ZSBtYWtlIGEgY29weVxyXG4gICAgICAgICAgICAvLyBvZiB0aGlzIHNldCBmaXJzdC5cclxuICAgICAgICAgICAgbGV0IHdhdGNoZXJzID0gQXJyYXkuZnJvbSggdGhpcy5kZWZlcnJlZFdhdGNoZXJzLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWRXYXRjaGVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB3YXRjaGVycy5mb3JFYWNoKCB3YXRjaGVyID0+IHdhdGNoZXIucmVzcG9uZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGF0IHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHJpZ2dlciBvYmplY3QgaGFzIGJlZW4gcmVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeVRyaWdnZXJSZWFkKCB0cmlnZ2VyOiBUcmlnZ2VyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGF0dGFjaCBhbGwgd2F0Y2hlcnMgY3VycmVudGx5IG9uIHRoZSBzdGFjayB0byB0aGUgdHJpZ2dlclxyXG4gICAgICAgIGZvciggbGV0IHdhdGNoZXIgb2YgdGhpcy53YXRjaGVyU3RhY2spXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3YXRjaGVyLnRyaWdnZXJzLmFkZCggdHJpZ2dlcik7XHJcbiAgICAgICAgICAgIHRyaWdnZXIud2F0Y2hlcnMuYWRkKCB3YXRjaGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGF0IHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gdHJpZ2dlciBvYmplY3QgaGFzIGJlZW4gY2hhbmdlZC4gSWYgdGhpcyBoYXBwZW5zIHdoaWxlXHJcbiAgICAgKiB3aXRoaW4gYSBtdXRhdGlvbiBzY29wZSwgd2UgZG9uJ3Qgbm90aWZ5IHRoZSB3YXRjaGVycyBvZiB0aGlzIHRyaWdnZXIgYnV0IHB1dCB0aGVtIGluIGFcclxuICAgICAqIGRlZmVycmVkIHNldC4gSWYgdGhpcyBoYXBwZW5zIG91dHNpZGUgb2YgYW55IG11dGF0aW9uIHNjb3BlLiBJbiB0aGlzIGNhc2Ugd2Ugbm90aWZ5IHRoZVxyXG4gICAgICogd2F0Y2hlcnMgb2YgdGhpcyB0cmlnZ2VyIHJpZ2h0IGF3YXkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlUcmlnZ2VyQ2hhbmdlZCggdHJpZ2dlcjogVHJpZ2dlcik6IHZvaWRcclxuICAgIHsgXHJcbiAgICAgICAgLy8gdGhpcyBtZXRob2QgaXMgc3VwcG9zZWQgdG8gYmUgY2FsbGVkIG9ubHkgaWYgdGhlIHRyaWdnZXIgaGFzIHdhdGNoZXJzXHJcbiAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICBpZiAodHJpZ2dlci53YXRjaGVycy5zaXplID09PSAwKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJub3RpZnlUcmlnZ2VyQ2hhbmdlZCB3YXMgY2FsbGVkIGJ5IGEgdHJpZ2dlciB3aXRob3V0IHdhdGNoZXJzXCIpO1xyXG4gICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TY29wZXNSZWZDb3VudCA+IDApXHJcbiAgICAgICAgICAgIHRyaWdnZXIud2F0Y2hlcnMuZm9yRWFjaCggd2F0Y2hlciA9PiB0aGlzLmRlZmVycmVkV2F0Y2hlcnMuYWRkKCB3YXRjaGVyKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2luY2Ugd2hlbiB3YXRjaGVycyByZXNwb25kLCB0aGV5IGNhbiBleGVjdXRlIHRoZWlyIHdhdGNoZXIgZnVuY3Rpb25zIGFuZCB0aGF0IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGUgc2FtZSBzZXQgb2Ygd2F0Y2hlcnMgd2UgYXJlIGl0ZXJhdGluZyBvdmVyLiBUaGVyZWZvcmUsIHdlIG1ha2UgYSBjb3B5XHJcbiAgICAgICAgICAgIC8vIG9mIHRoaXMgc2V0IGZpcnN0LlxyXG4gICAgICAgICAgICBsZXQgd2F0Y2hlcnMgPSBBcnJheS5mcm9tKCB0cmlnZ2VyLndhdGNoZXJzLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHdhdGNoZXJzLmZvckVhY2goIHdhdGNoZXIgPT4gd2F0Y2hlci5yZXNwb25kKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFN0YWNrIG9mIHdhdGNoZXIgb2JqZWN0cy4gV2F0Y2hlcnMgYXJlIHB1c2hlZCBvbiB0b3AgYmVmb3JlIHRoZXkgY2FsbCB0aGUgd2F0Y2hlZFxyXG4gICAgLy8gZnVuY3Rpb24gYW5kIHJlbW92ZWQgYWZ0ZXIgdGhpcyBmdW5jdGlvbiByZXR1cm5zLiBXaGVuIGEgdHJpZ2dlciBub3RpZmllcyB0aGF0IGl0cyB2YWx1ZVxyXG4gICAgLy8gaGFzIGJlZW4gY2hhbmdlZCwgYWxsIHRoZSB3YXRjaGVycyBpbiB0aGUgc3RhY2sgYXJlIGF0dGFjaGVkIHRvIHRoaXMgdHJpZ2dlci4gVGhpcyBtZWFuc1xyXG4gICAgLy8gdGhhdCB0aGUgdHJpZ2dlcidzIHZhbHVlIGlzIHVzZWQgYnkgdGhlIHdhdGNoZWQgZnVuY3Rpb25zLlxyXG4gICAgcHJpdmF0ZSB3YXRjaGVyU3RhY2s6IFdhdGNoZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIE51bWJlciBvZiBjdXJyZW50bHkgYWN0aXZlIG11dGF0aW9uIHNjb3Blcy4gV2hlbiBhIHRyaWdnZXIgbm90aWZpZXMgdGhhdCBpdHMgdmFsdWUgaGFzIGJlZW5cclxuICAgIC8vIGNoYW5nZWQgd2hpbGUgdGhpcyBudW1iZXIgaXMgbm90IDAsIHRoZSB0cmlnZ2VyIHdpbGwgYmUgcmVtZW1iZXJlZCBpbiB0aGUgaW50ZXJuYWwgc2V0LlxyXG4gICAgLy8gQWZ0ZXIgYWxsIG11dGF0aW9uIHNjb3BlcyBhcmUgZmluaXNoZWQsIHRoZSB3YXRjaGVycyBhdHRhY2hlZCB0byBhbGwgdHJpZ2dlcnMgaW4gdGhlIHNldFxyXG4gICAgLy8gd2lsbCBiZSBub3RpZmllZC4gV2hlbiBhIHRyaWdnZXIgbm90aWZpZXMgdGhhdCBpdHMgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZCB3aGlsZSB0aGVyZSBhcmVcclxuICAgIC8vIG5vIG11dGF0aW9uIHNjb3BlcyBwcmVzZW50LCB0aGUgd2F0Y2hlcnMgYXR0YWNoZWQgdG8gdGhlIHRyaWdnZXIgYXJlIG5vdGlmaWVkIGltbWVkaWF0ZWx5LlxyXG4gICAgcHJpdmF0ZSBtdXRhdGlvblNjb3Blc1JlZkNvdW50ID0gMDtcclxuXHJcbiAgICAvLyBTZXQgb2Ygd2F0Y2hlcnMgdGhhdCBzaG91bGQgYmUgbm90aWZpZWQgd2hlbiB0aGUgbGFzdCBtdXRhdGlvbiBzY29wZSBleGl0cy4gVXNpbmcgU2V0XHJcbiAgICAvLyBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIGhvdyBtYW55IHRyaWdnZXJzIHJlZmVyZW5jZSBhIHdhdGNoZXIsIHRoZSB3YXRjaGVyIHdpbGwgYmUgcHJlc2VudFxyXG4gICAgLy8gb25seSBvbmNlLlxyXG4gICAgcHJpdmF0ZSBkZWZlcnJlZFdhdGNoZXJzID0gbmV3IFNldDxXYXRjaGVyPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTaW5nbGV0b24gVHJpZ2dlcldhdGNoZXJNYW5hZ2VyIGJqZWN0ICovXHJcbmxldCBnX21hbmFnZXIgPSBuZXcgVHJpZ2dlcldhdGNoZXJNYW5hZ2VyKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbmNyZW1lbnRzIG11dGF0aW9uIHNjb3BlIHJlZmVyZW5jZSBjb3VudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyTXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbntcclxuICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY3JlbWVudHMgbXV0YXRpb24gc2NvcGUgcmVmZXJlbmNlIGNvdW50LiBJZiBpdCByZWFjaGVzIHplcm8sIG5vdGlmaWVzIGFsbCBkZWZlcnJlZCB3YXRjaGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleGl0TXV0YXRpb25TY29wZSgpOiB2b2lkXHJcbntcclxuICAgIGdfbWFuYWdlci5leGl0TXV0YXRpb25TY29wZSgpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ29tcHV0ZWQgdHJpZ2dlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElDb21wdXRlZFRyaWdnZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2YWx1ZSB0aGF0IGlzIGNhbGN1bGF0ZWQgYnkgYSBmdW5jdGlvbi4gVGhpcyBpcyBhXHJcbiAqIGNvbWJpbmF0aW9uIG9mIFRyaWdnZXIgYW5kIFdhdGNoZXIuIEl0IGlzIGEgd2F0Y2hlciBiZWNhdXNlIGl0IHdhdGNoZXMgb3ZlciB0aGUgZnVuY3Rpb24gYW5kXHJcbiAqIGNhbGxzIGl0IHdoZW5ldmVyIGFueSB0cmlnZ2VycyB0aGlzIGZ1bmN0aW9uIHVzZXMgYXJlIGNoYW5nZWQuIEl0IGlzIGEgdHJpZ2dlciBiZWNhdXNlIGl0XHJcbiAqIHRyaWdnZXJzIGNoYW5nZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIGltcG9ydGFudCBmYWN0IGFib3V0IGEgY29tcHV0ZWQgdHJpZ2dlciBpcyB0aGF0IGl0IG9ubHkgaW52b2tlcyB0aGUgd2F0Y2hlZCBmdW5jdGlvblxyXG4gKiBpZiBpdCdzIHZhbHVlIGlzIGJlaW5nIHVzZWQgYnkgYXQgbGVhc3Qgb25lIHdhdGNoZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4gZXh0ZW5kcyBJVHJpZ2dlcjxUPiwgSURpc3Bvc2VyXHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGNvbXB1dGVkIHRyaWdnZXIgb2JqZWN0IHdob3NlIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGFuZCB3aXRoIGFuXHJcbiAqIG9wdGlvbmFsIGluaXRpYWwgdmFsdWUuXHJcbiAqIEBwYXJhbSB2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRUcmlnZ2VyPFQgPSBhbnk+KCBmdW5jOiBOb25lVHlwZUZ1bmM8VD4sIGZ1bmNUaGlzPzogYW55KTogSUNvbXB1dGVkVHJpZ2dlcjxUPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IENvbXB1dGVkVHJpZ2dlciggZnVuYywgZnVuY1RoaXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tcHV0ZWRUcmlnZ2VyIGNsYXNzIHJlcHJlc2VudHMgYSB2YWx1ZSB0aGF0IGlzIGNhbGN1bGF0ZWQgYnkgYSBmdW5jdGlvbi4gVGhpcyBpcyBhXHJcbiAqIGNvbWJpbmF0aW9uIG9mIFRyaWdnZXIgYW5kIFdhdGNoZXIuIEl0IGlzIGEgd2F0Y2hlciBiZWNhdXNlIGl0IHdhdGNoZXMgb3ZlciB0aGUgZnVuY3Rpb24gYW5kXHJcbiAqIGNhbGxzIGl0IHdoZW5ldmVyIGFueSB0cmlnZ2VycyB0aGlzIGZ1bmN0aW9uIHVzZXMgYXJlIGNoYW5nZWQuIEl0IGlzIGEgdHJpZ2dlciBiZWNhdXNlIGl0XHJcbiAqIHRyaWdnZXJzIGNoYW5nZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIGltcG9ydGFudCBmYWN0IGFib3V0IGEgY29tcHV0ZWQgdHJpZ2dlciBpcyB0aGF0IGl0IG9ubHkgaW52b2tlcyB0aGUgd2F0Y2hlZCBmdW5jdGlvblxyXG4gKiBpZiBpdCdzIHZhbHVlIGlzIGJlaW5nIHVzZWQgYnkgYXQgbGVhc3Qgb25lIHdhdGNoZXIuXHJcbiAqL1xyXG5jbGFzcyBDb21wdXRlZFRyaWdnZXI8VCA9IGFueT4gZXh0ZW5kcyBUcmlnZ2VyPFQ+IGltcGxlbWVudHMgSUNvbXB1dGVkVHJpZ2dlcjxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggZnVuYzogTm9uZVR5cGVGdW5jPFQ+LCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICBzdXBlciggVHJpZ2dlckRlcHRoLlZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gZnVuY1RoaXM7XHJcblxyXG4gICAgICAgIC8vIHdlIGRvbid0IGNyZWF0ZSB0aGUgd2F0Y2hlciB1bnRpbCB0aGUgZ2V0IG1ldGhvZCBpcyBjYWxsZWRcclxuICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgcHVibGljIGdldCgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY3JlYXRlIHRoZSB3YXRjaGVyIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyID0gY3JlYXRlV2F0Y2hlciggdGhpcy5mdW5jLCB0aGlzLnJlc3BvbmRlciwgdGhpcy5mdW5jVGhpcywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdGFsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDbGVhcnMgaW50ZXJuYWwgcmVzb3VyY2VzLiAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGRpc3Bvc2VkXHJcbiAgICAgICAgaWYgKCF0aGlzLmZ1bmMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnVuY1dhdGNoZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNXYXRjaGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5mdW5jV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZ1bmMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIG91ciB3YXRjaGVyIGlzIG5vdGlmaWVkIG9mIGNoYW5nZXMgaW4gaXRzIHRyaWdnZXIgdmFsdWVzLiBXZVxyXG4gICAgICogcmVzcG9uZCBieSBpbnZva2luZyB0aGUgZnVuY3Rpb24gKHRocm91Z2ggdGhlIHdhdGNoZXIpIGFuZCBzZXR0aW5nIGl0cyByZXR1cm4gdmFsdWUgYXNcclxuICAgICAqIG91ciBuZXcgdmFsdWUuIFRoaXMgY2FuIHRyaWdnZXIgY2hhbmdlcyBpbiB3YXRjaGVycyB0aGF0IGFyZSB1c2luZyBvdXIgdmFsdWUuIE5vdGUgdGhhdFxyXG4gICAgICogd2Ugb25seSBpbnZva2Ugb3VyIHdhdGNoZXIgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHdhdGNoZXIgdGhhdCB3YXRjaGVzIG91ciB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNwb25kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLnNpemUgPiAwKVxyXG4gICAgICAgICAgICBzdXBlci5zZXQoIHRoaXMuZnVuY1dhdGNoZXIoKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhbGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRnVuY3Rpb24gd2Ugd2lsbCBiZSB3YXRjaGluZ1xyXG4gICAgcHJpdmF0ZSBmdW5jOiBOb25lVHlwZUZ1bmM8VD47XHJcblxyXG4gICAgLy8gXCJ0aGlzXCIgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHdhdGNoZWQgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIGl0LlxyXG4gICAgcHJpdmF0ZSBmdW5jVGhpczogYW55O1xyXG5cclxuICAgIC8vIFdhdGNoZXIgb3ZlciBvdXIgZnVuY3Rpb25cclxuICAgIHByaXZhdGUgZnVuY1dhdGNoZXI6IElXYXRjaGVyPE5vbmVUeXBlRnVuYzxUPj47XHJcblxyXG4gICAgLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhlIHZhbHVlICBrZXB0IGJ5IHRoZSB0cmlnZ2VyIG1pZ2h0IG5vdCByZWZsZWN0IHRoZSBhY3R1YWwgY29tcHV0ZWRcclxuICAgIC8vIHZhbHVlLiBUaGlzIGZsYWcgaXMgdHJ1ZSB1bmRlciB0aGUgZm9sbG93aW5nIGNpcmN1bXN0YW5jZXM6XHJcbiAgICAvLyAxLiBSaWdodCBhZnRlciB0aGUgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQuIFdlIGRvbid0IGV2ZW4gY3JlYXRlIHRoZSB3YXRjaGVyIGJlY2F1c2Ugd2VcclxuICAgIC8vICAgIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgLy8gMi4gV2hlbiB0aGUgcmVzcG9uZGVyIGhhcyBiZWVuIGludm9rZWQsIGJ1dCBvdXIgdHJpZ2dlciBkaWRuJ3QgaGF2ZSBhbnkgd2F0Y2hlci4gQWdhaW4sIHdlXHJcbiAgICAvLyAgICB3aWxsIHdhaXQgdW50aWwgdGhlIGdldCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgcHJpdmF0ZSBpc1N0YWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBNdXRhdG9yc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU11dGF0b3IgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjYWxsYWJsZSBvYmplY3QgdGhhdCB3cmFwcyBhIGZ1bmN0aW9uIGFuZCBoYXMgdGhlIHNhbWVcclxuICogc2lnbmF0dXJlIGFzIHRoaXMgZnVuY3Rpb24uIFdoZW4gYSB3YXRjaGVyIGlzIGNhbGxlZCBpdCBjYWxzIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIGFuZCBhdHRhY2hlc1xyXG4gKiB0byBhbGwgdHJpZ2dlcnMgd2hvc2UgdmFsdWVzIHdlcmUgcmVhZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2FsbC4gV2hlbiB2YWx1ZXMgb2YgdGhlc2VcclxuICogdHJpZ2dlcnMgY2hhbmdlLCBhIHJlc3BvbmRlciBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoZSByZXNwb25kZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2hlbiB0aGVcclxuICogd2F0Y2hlciBpcyBjcmVhdGVkLCBidXQgaXQgY2FuIGJlIGNoYW5nZWQgbGF0ZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jID0gYW55PiBleHRlbmRzIElEaXNwb3NlclxyXG57XHJcbiAgICAvKiogVGhpcyBpcyBhIGNhbGxhYmxlIGludGVyZmFjZSwgd2hpY2ggaXMgaW1wbGVtZW50IGFzIGEgZnVuY3Rpb24uICovXHJcbiAgICAoLi4uYXJnczogUGFyYW1ldGVyczxUPik6IFJldHVyblR5cGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgU3ltYm9sIHVzZWQgdG8ga2VlcCBhIG11dGF0b3Igb2JqZWN0IGF0dGFjaGVkIHRvIHRoZSBtdXRhdG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxubGV0IHN5bU11dGF0b3IgPSBTeW1ib2woIFwic3ltTXV0YXRvclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtdXRhdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiByZWd1bGFyIGZ1bmN0aW9uIHdoaWNoIGV4ZWN1dGVzXHJcbiAqIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpdGhpbiBhIG11dGF0aW9uIHNjb3BlLiBXYXRjaGVycyBmb3IgdHJpZ2dlcnMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlc1xyXG4gKiBjaGFuZ2VkIGR1cmluZyBleGVjdXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhcmUgbm90IG5vdGlmaWVkIGltbWVkaWF0ZWx5LiBJbnN0ZWFkLCB0aGUgd2F0Y2hlcnNcclxuICogYXJlIFwiZGVmZXJyZWRcIiBhbmQgd2lsbCBiZSBub3RpZmllZCBvbmx5IG9uY2UgYWZ0ZXIgdGhlIGxhc3QgbXV0YXRpb24gc2NvcGUgZXhpdHMuIFRoaXMgY2FuIGJlXHJcbiAqIHVzZWZ1bCBzaW5jZSB1c3VhbGx5IHdhdGNoZXJzIGRlcGVuZCBvbiBtYW55IHRyaWdnZXJzIGFuZCB3ZSBkb24ndCB3YW50IHRoZSB3YXRjaGVycyBiZWluZ1xyXG4gKiBub3RpZmllZCBtYW55IHRpbWUgYnV0IHJhdGhlciBvbmx5IG9uY2UgYWZ0ZXIgYWxsIHRoZSBjaGFuZ2VzIGhhdmUgYmVlbiBkb25lLlxyXG4gKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiBhcm91bmQgd2hpY2ggdG8gZXN0YWJsaXNoIGEgbXV0YXRpb24gc2NvcGUuIElmIHRoaXMgaXMgYSBjbGFzcyBtZXRob2QsXHJcbiAqIHRoZW4gZWl0aGVyIHByb3ZpZGUgdGhlIGZ1bmNUaGlzIHBhcmFtZXRlciBvciBiaW5kIHRoZSBmdW5jdGlvbiBiZWZvcmUgcGFzc2luZyBpdCBpbi4gTm90ZVxyXG4gKiB0aGF0IGFycm93IGZ1bmN0aW9ucyBhcmUgYWxyZWFkeSBib3VuZC5cclxuICogQHBhcmFtIGZ1bmNUaGlzIFRoZSBcInRoaXNcIiB2YWx1ZSB0byBhcHBseSB3aGVuIGNhbGxpbmcgdGhlIGZ1bmN0aW9uLiBUaGlzIGlzIG5lY2Vzc2FyeSBpZiB0aGVcclxuICogZnVuY3Rpb24gaXMgYW4gdW5ib3VuZGNsYXNzIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdXRhdG9yPFQgZXh0ZW5kcyBBbnlBbnlGdW5jPiggZnVuYzogVCwgZnVuY1RoaXM/OiBhbnkpOiBJTXV0YXRvcjxUPlxyXG57XHJcbiAgICBmdW5jdGlvbiBtdXRhdG9yRnVuYyguLi5hcmdzOiBhbnlbXSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtdXRhdG9yOiBXYXRjaGVyID0gbXV0YXRvckZ1bmNbc3ltV2F0Y2hlcl07XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiBmb3IgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdhcyBub3Qgc3VwcGxpZWQgYnV0IG5vdyB3aGVuIHRoZVxyXG4gICAgICAgIC8vIHdhdGNoZXIgZXhlY3V0ZXMsIFwidGhpc1wiIGlzIGRlZmluZWQsIHdlIHJlbWVtYmVyIGl0LlxyXG4gICAgICAgIHJldHVybiBtdXRhdG9yLmV4ZWN1dGUoIHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGtlZXAgdGhlIG11dGF0b3Igb2JqZWN0IGluIHRoZSBmdW5jdGlvbiBvYmplY3QgaXRzZWxmIHVzaW5nIGEgc3ltYm9sLlxyXG4gICAgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl0gPSBuZXcgTXV0YXRvciggZnVuYywgZnVuY1RoaXMpO1xyXG5cclxuICAgIC8vIGltcGxlbWVudCB0aGUgZGlzcG9zZSBtZXRob2RcclxuICAgIChtdXRhdG9yRnVuYyBhcyBJTXV0YXRvcikuZGlzcG9zZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbXV0YXRvciA9IG11dGF0b3JGdW5jW3N5bU11dGF0b3JdIGFzIFdhdGNoZXI7XHJcbiAgICAgICAgbXV0YXRvciAmJiBtdXRhdG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgbXV0YXRvckZ1bmNbc3ltTXV0YXRvcl07XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBtdXRhdG9yRnVuYyBhcyBJV2F0Y2hlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE11dGF0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGV4ZWN1dGluZyBhIHdyYXBwZWQgZnVuY3Rpb24gdW5kZXIgYVxyXG4gKiBtdXRhdGlvbiBzY29wZS5cclxuICovXHJcbmNsYXNzIE11dGF0b3I8VCBleHRlbmRzIEFueUFueUZ1bmMgPSBhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmdW5jOiBULCBmdW5jVGhpcz86IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMuZnVuY1RoaXMgPSBmdW5jVGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBpbiBhIG11dGF0aW9uIHNjb3BlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSggZnVuY1RoaXM6IGFueSwgYXJnczogYW55W10pOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG91ciB3YXRjaGVyIGhhcyBiZWVuIGFscmVhZHkgZGlzcG9zZWRcclxuICAgICAgICBpZiAoIXRoaXMuZnVuYylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkRpc3Bvc2VkIG11dGF0b3Igd2FzIGNhbGxlZC5cIik7XHJcblxyXG4gICAgICAgIC8vIEZpeCBvdXIgXCJ0aGlzXCIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IHNvIGZhclxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jVGhpcyAmJiBmdW5jVGhpcylcclxuICAgICAgICAgICAgdGhpcy5mdW5jVGhpcyA9IGZ1bmNUaGlzO1xyXG5cclxuICAgICAgICBnX21hbmFnZXIuZW50ZXJNdXRhdGlvblNjb3BlKCk7XHJcbiAgICAgICAgdHJ5IHsgcmV0dXJuIHRoaXMuZnVuYy5hcHBseSggdGhpcy5mdW5jVGhpcywgYXJncyk7IH1cclxuICAgICAgICBmaW5hbGx5IHsgZ19tYW5hZ2VyLmV4aXRNdXRhdGlvblNjb3BlKCk7IH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2xlYXJzIGludGVybmFsIHJlc291cmNlcy4gKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBkaXNwb3NlZFxyXG4gICAgICAgIGlmICghdGhpcy5mdW5jKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgZnVuYyBhbmQgcmVzcG9uZGVyIHByb3BlcnRpZXMgdG8gbnVsbCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB3YXRjaGVyIGhhcyBiZWVuIGRpc3Bvc2VkXHJcbiAgICAgICAgdGhpcy5mdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZ1bmNUaGlzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiBiZWluZyB3cmFwcGVkLlxyXG4gICAgcHJpdmF0ZSBmdW5jOiBUO1xyXG5cclxuICAgIC8vIFwidGhpc1wiIHZhbHVlIHRvIGFwcGx5IHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBpdC5cclxuICAgIHByaXZhdGUgZnVuY1RoaXM6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJpZ2dlcml6aW5nIGNvbnRhaW5lcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGVwZW5kaW5nIG9uIHRoZSBnaXZlbiB0cmlnZ2VyIGRlcHRoIGFuZCBvbiB0aGUgdmFsdWUgdHlwZSwgZWl0aGVyIHJldHVybnMgdGhlIHNhbWUgdmFsdWUgaWZcclxuICogaXQgaXMgYSBjb250YWluZXIgKG9iamVjdCwgYXJyYXksIG1hcCBvciBzZXQpLCByZXR1cm5zIGEgcHJveHkgdG8gdGhlIHZhbHVlIHRoYXQga25vd3MgdG9cclxuICogbm90aWZ5IHJlYWQgYW5kIGNoYW5nZSB3aGVuIGl0cyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZSBpbnZva2VkLlxyXG4gKiBAcGFyYW0gdiBWYWx1ZSB0byBjb252ZXJ0IGlmIG5lY2Vzc2FyeVxyXG4gKiBAcGFyYW0gdHJpZ2dlciBUcmlnZ2VyIHRoYXQgd2lsbCBiZSBub3RpZmllZCB3aGVuIHJlYWQgb3IgY2hhbmdlIGV2ZW50cyBvY2N1ciBpbiB0aGUgY29udmVydGVkXHJcbiAqIHZhbHVlc1xyXG4gKiBAcGFyYW0gZGVwdGggVGhlIGRlcHRoIG9uIHRoZSBsZXZlbCAoc3RhcnRpbmcgZnJvbSB0aGUgdHJpZ2dlcil0aGF0IGNhbGxlZCB0aGlzIGZ1bmN0aW9uLlxyXG4gKiBJZiB0aGlzIHBhcmFtZXRlciBpcyAwLCBubyBjb252ZXJzaW9uIG9jY3VycyBhbmQgdGhlIHZhbHVlIGlzIHJldHVybmVkIGFzIGlzLiBXaGVuIHRoaXMgZnVuY3Rpb25cclxuICogaXMgY2FsbGVkIGZyb20gdGhlIHRyaWdnZXIsIHRoaXMgcGFyYW1ldGVyIGNhbiBiZSB1bmRlZmluZWQ6IGluIHRoaXMgY2FzZSwgd2Ugd2lsbCBhc3NpZ24gdGhlXHJcbiAqIGRlcHRoIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0aGUgdmFsdWUuIEFycmF5cywgbWFwcyBhbmQgc2V0cyBnZXQgZGVwdGhzIG9mIFNoYWxsb3coMSksXHJcbiAqIG1lYW5pbmcgdGhhdCBvcGVyYXRpb25zIHRoYXQgYWRkIG9yIHJlbW92ZSBpdGVtcyB3aWxsIHRyaWdnZXIgZXZlbnRzLCBidXQgbW9kaWZpY2F0aW9ucyB0byB0aGVcclxuICogaXRlbXMgd2lsbCBub3QuIE9iamVjdHMgZ2V0IHRoZSBkZXB0aCBvZiBEZWVwICgxMDAwKSwgd2hpY2ggZXNzZW50aWFsbHkgbWVhbnMgdGhhdCBhbnkgY2hhbmdlc1xyXG4gKiB0byB0aGUgb2JqZWN0IHByb3BlcnRpZXMgb24gYW55IGxldmVsIHdpbGwgdHJpZ2dlciBldmVudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2Vycml6ZTxUID0gYW55PiggdjogVCwgdHJpZ2dlcjogVHJpZ2dlciwgZGVwdGg/OiBudW1iZXIpOiBUXHJcbntcclxuICAgIGlmICghdiB8fCBkZXB0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodikpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE5vblNsb3RDb250YWluZXJIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5TaGFsbG93KSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBNYXApXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE1hcEhhbmRsZXIoIHRyaWdnZXIsIChkZXB0aCA/IGRlcHRoIDogVHJpZ2dlckRlcHRoLlNoYWxsb3cpIC0gMSkpIGFzIGFueSBhcyBUO1xyXG4gICAgZWxzZSBpZiAodiBpbnN0YW5jZW9mIFNldClcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KCB2LCBuZXcgU2V0SGFuZGxlciggdHJpZ2dlciwgKGRlcHRoID8gZGVwdGggOiBUcmlnZ2VyRGVwdGguU2hhbGxvdykgLSAxKSkgYXMgYW55IGFzIFQ7XHJcbiAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09PSBPYmplY3QpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSggdiwgbmV3IE5vblNsb3RDb250YWluZXJIYW5kbGVyKCB0cmlnZ2VyLCAoZGVwdGggPyBkZXB0aCA6IFRyaWdnZXJEZXB0aC5EZWVwKSAtIDEpKSBhcyBhbnkgYXMgVDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgQXJyYXkgYW5kIHBsYWluIG9iamVjdCBoYW5kbGVycy5cclxuICovXHJcbmNsYXNzIE5vblNsb3RDb250YWluZXJIYW5kbGVyIGltcGxlbWVudHMgUHJveHlIYW5kbGVyPGFueT5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHRyaWdnZXI6IFRyaWdnZXIsIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCggdGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCggdGFyZ2V0LCBwcm9wLCB0cmlnZ2Vycml6ZSggdmFsdWUsIHRoaXMudHJpZ2dlciwgdGhpcy5kZXB0aCksIHJlY2VpdmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9wZXJ0eSggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlDaGFuZ2VkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoIHRhcmdldCwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lUHJvcGVydHkoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSwgYXR0cnM6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIHByb3AsIGF0dHJzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMoIHRhcmdldDogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmhhcyggdGFyZ2V0LCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm90b3R5cGVPZiggdGFyZ2V0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0V4dGVuc2libGUoIHRhcmdldDogYW55KTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ub3RpZnlSZWFkKCk7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaXNFeHRlbnNpYmxlKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogUHJvcGVydHlEZXNjcmlwdG9yIHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIHRhcmdldCwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW51bWVyYXRlKCB0YXJnZXQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKCBSZWZsZWN0LmVudW1lcmF0ZSggdGFyZ2V0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3duS2V5cyggdGFyZ2V0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIFRoZSB0cmlnZ2VyIG9iamVjdCB3aGljaCBzaG91bGQgc2VuZCBub3RpZmljYXRpb25zIHRvIGl0cyB3YXRjaGVycyB3aGVuIHJlYWRzIG9yIGNoYW5nZXNcclxuICAgIC8vIG9jY3VyIFxyXG4gICAgcHJvdGVjdGVkIHRyaWdnZXI6IFRyaWdnZXI7XHJcblxyXG4gICAgLy8gTnVtYmVyIGluZGljYXRpbmcgdG8gd2hhdCBsZXZlbCB0aGUgaXRlbXMgb2YgY29udGFpbmVyIHR5cGVzIHNob3VsZCBiZSB0cmlnZ2Vycml6ZWQuXHJcbiAgICBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogSGFuZGxlciBmb3IgYXJyYXlzLlxyXG4vLyAgKi9cclxuLy8gY2xhc3MgQXJyYXlIYW5kbGVyIGV4dGVuZHMgTm9uU2xvdENvbnRhaW5lckhhbmRsZXJcclxuLy8ge1xyXG4vLyAgICAgZ2V0KCB0YXJnZXQ6IEFycmF5PGFueT4sIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdGhpcy50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuLy8gICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoIHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBIYW5kbGVyIGZvciBvbiBwbGFpbiBvYmplY3RzLlxyXG4vLyAgKi9cclxuLy8gY2xhc3MgT2JqZWN0SGFuZGxlciBleHRlbmRzIE5vblNsb3RDb250YWluZXJIYW5kbGVyXHJcbi8vIHtcclxuLy8gICAgIGdldCggdGFyZ2V0OiBhbnksIHByb3A6IFByb3BlcnR5S2V5LCByZWNlaXZlcjogYW55KTogYW55XHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KCB0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3Igc2hhbGxvdyBNYXAvU2V0IGhhbmRsZXJzLiBNZXRob2RzIHdob3NlIG5hbWVzIHdlcmUgc3VwcGxpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLFxyXG4gKiBub3RpZnkgY2hhbmdlOyBhbGwgb3RoZXIgbWV0aG9kcyBub3RpZnkgcmVhZC5cclxuICogXHJcbiAqIEZvciBNYXAgYW5kIFNldCBpbiBvcmRlciB0byBiZSBwcm94aWVkLCB0aGUgbWV0aG9kcyByZXR1cm5lZCBmcm9tIGdldCgpIG11c3QgYmVcclxuICogYm91bmQgdG8gdGhlIHRhcmdldC4gU2VlIGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3Byb3h5I2J1aWx0LWluLW9iamVjdHMtaW50ZXJuYWwtc2xvdHMuXHJcbiAqL1xyXG5jbGFzcyBTbG90Q29udGFpbmVySGFuZGxlciBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxhbnk+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBtdXRhdG9yTWV0aG9kTmFtZXM6IFNldDxQcm9wZXJ0eUtleT4sIGRlcHRoOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgICB0aGlzLm11dGF0b3JNZXRob2ROYW1lcyA9IG11dGF0b3JNZXRob2ROYW1lcztcclxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0cmlldmUgY29udGFpbmVyIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMuIFdlIGFsd2F5cyBub3RpZnkgcmVhZCBhbmQgd2Ugd3JhcCBtZXRob2RzIGluXHJcbiAgICAvLyBmdW5jdGlvbnMgdGhhdCB3aGVuIGNhbGxlZCB3aWxsIG5vdGlmeSBlaXRoZXIgcmVhZCBvciBjaGFuZ2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlXHJcbiAgICAvLyBtZXRob2QgaXMgYSBtdXRhdG9yLlxyXG4gICAgZ2V0KCB0YXJnZXQ6IGFueSwgcHJvcDogUHJvcGVydHlLZXksIHJlY2VpdmVyOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIubm90aWZ5UmVhZCgpO1xyXG5cclxuICAgICAgICAvLyBpbiB0aGlzIGNvbnRleHQgXCJ0aGlzXCIgaXMgdGhlIGhhbmRsZXI7IGhvd2V2ZXIsIHdoZW4gdGhlIG1ldGhvZHMgd2UgcmV0dXJuIGFyZSBjYWxsZWRcclxuICAgICAgICAvLyB0aGUgXCJ0aGlzXCIgd2lsbCBiZSB0aGUgUHJveHkgb2JqZWN0LiBUaGVyZWZvcmUsIHdlIHdhbnQgdGhlc2UgbWV0aG9kcyB0byBjYXB0dXJlIGFuZFxyXG4gICAgICAgIC8vIHVzZSB0aGUgaGFuZGxlciBvYmplY3QuXHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgbWV0aG9kIGlzIGFscmVhZHkgaW4gb3VyIGludGVybmFsIG1hcFxyXG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLndyYXBwZWRNZXRob2RzLmdldCggcHJvcCk7XHJcbiAgICAgICAgaWYgKCFtZXRob2QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHRhcmdldFxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHRhcmdldFtwcm9wXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wVmFsICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmQgdGhlIG9yaWdpbmFsIG1ldGhvZCB0byB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgb3JnQm91bmRNZXRob2QgPSBwcm9wVmFsLmJpbmQoIHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tdXRhdG9yTWV0aG9kTmFtZXMuaGFzKHByb3ApKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgbXV0YXRvciBtZXRob2RzIHdlIGNyZWF0ZSBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIGludm9rZXMgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVyIHNwZWNpZmljIGZ1bmN0aW9uYWxpdHksIHdoaWNoIGtub3dzIGFib3V0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHdpbGwgY3JlYXRlIHByb3hpZXMgZm9yIHRoZSBhcHByb3ByaWF0ZSBvYmplY3RzIGlmIG5lZWRlZC4gVGhpcyBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgICAgICAgICAvLyB3aWxsIGFsc28gaW5kaWNhdGUgd2hldGhlciBhbiBhY3R1YWwgY2hhbmdlIG9jY3VycyBzbyB0aGF0IHdlIGNhbiBub3RpZnkgYWJvdXQgaXQuXHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmdW5jdGlvbigpOiBhbnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXQ6IFthbnksIGJvb2xlYW5dID0gaGFuZGxlci5jYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0LCBwcm9wLCBvcmdCb3VuZE1ldGhvZCwgLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0WzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnRyaWdnZXIubm90aWZ5Q2hhbmdlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBvcmdCb3VuZE1ldGhvZCggLi4uYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBGb3Igbm9uLW11dGF0b3IgbWV0aG9kcywgd2Ugbm90aWZ5IHRoZSByZWFkIGFuZCBpbnZva2UgdGhlIG9yaWdpbmFsIG1ldGhvZC5cclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci50cmlnZ2VyLm5vdGlmeVJlYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JnQm91bmRNZXRob2QoIC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLndyYXBwZWRNZXRob2RzLnNldCggcHJvcCwgbWV0aG9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgdGhhdCBtdXN0IGJlIG92ZXJyaWRkZW4gaW4gdGhlIGRlcml2ZWQgY2xhc3NlcyBhbmQgd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIGNhbGxpbmdcclxuICAgICAqIGEgbXV1dGF0b3IgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSBvcmdNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gYXJncyBUd28gZWxlbWVudCB0dXBsZSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgcmV0dXJuIHZhbHVlIGFuZCB0aGUgc2Vjb25kXHJcbiAgICAgKiBlbGVtZW50IGlzIGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBoYXMgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxPcmdNdXRhdG9yTWV0aG9kKCB0YXJnZXQ6IGFueSwgbmFtZTogUHJvcGVydHlLZXksIG9yZ01ldGhvZDogRnVuY3Rpb24sIC4uLmFyZ3M6IGFueVtdKTogW2FueSwgYm9vbGVhbl1cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCxmYWxzZV07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBUaGUgdHJpZ2dlciBvYmplY3Qgd2hpY2ggc2hvdWxkIHNlbmQgbm90aWZpY2F0aW9ucyB0byBpdHMgd2F0Y2hlcnMgd2hlbiByZWFkcyBvciBjaGFuZ2VzXHJcbiAgICAvLyBvY2N1ciBcclxuICAgIHByb3RlY3RlZCB0cmlnZ2VyOiBUcmlnZ2VyO1xyXG5cclxuICAgIC8vIE51bWJlciBpbmRpY2F0aW5nIHRvIHdoYXQgbGV2ZWwgdGhlIGl0ZW1zIG9mIGNvbnRhaW5lciB0eXBlcyBzaG91bGQgYmUgdHJpZ2dlcnJpemVkLlxyXG4gICAgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXI7XHJcblxyXG4gICAgLy8gU2V0IG9mIG1ldGhvZCBuYW1lcywgd2hpY2ggbXV0YXRlIHRoZSBjb250YWllci4gQWxsIG90aGVyIG1ldGhvZHMgb25seSByZWFkIGZyb20gaXQuXHJcbiAgICBwcml2YXRlIG11dGF0b3JNZXRob2ROYW1lczogU2V0PFByb3BlcnR5S2V5PjtcclxuXHJcbiAgICAvLyBUaGlzIG1hcCBrZWVwcyBhbHJlYWR5IHdyYXBwZWQgbWV0aG9kcyBzbyB0aGF0IHdlIGRvbid0IGRvIGJpbmRpbmcgbW9yZSB0aGFuIG9uY2UuIFxyXG4gICAgcHJpdmF0ZSB3cmFwcGVkTWV0aG9kcyA9IG5ldyBNYXA8UHJvcGVydHlLZXksRnVuY3Rpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIG1hcHMuXHJcbiAqL1xyXG5jbGFzcyBNYXBIYW5kbGVyIGV4dGVuZHMgU2xvdENvbnRhaW5lckhhbmRsZXJcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXV0YXRvck1ldGhvZE5hbWVzID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oW1wiY2xlYXJcIiwgXCJkZWxldGVcIiwgXCJzZXRcIl0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0cmlnZ2VyLCBNYXBIYW5kbGVyLm11dGF0b3JNZXRob2ROYW1lcywgZGVwdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBtYXAtc3BlY2lmaWMgbXV0YXRvciBtZXRob2RzLlxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcGFyYW0gb3JnTWV0aG9kIFxyXG4gICAgICogQHBhcmFtIGFyZ3MgVHdvIGVsZW1lbnQgdHVwbGUgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHJldHVybiB2YWx1ZSBhbmQgdGhlIHNlY29uZFxyXG4gICAgICogZWxlbWVudCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250YWluZXIgaGFzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0OiBNYXA8YW55LGFueT4sIG5hbWU6IFByb3BlcnR5S2V5LCBvcmdNZXRob2Q6IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSk6IFthbnksIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xlYXJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpc0NoYW5nZWQgPSB0YXJnZXQuc2l6ZSA+IDA7XHJcbiAgICAgICAgICAgIG9yZ01ldGhvZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgaXNDaGFuZ2VkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJzZXRcIilcclxuICAgICAgICAgICAgcmV0dXJuIFtvcmdNZXRob2QoIGFyZ3NbMF0sIHRyaWdnZXJyaXplKCBhcmdzWzFdLCB0aGlzLnRyaWdnZXIsIHRoaXMuZGVwdGgpKSwgdHJ1ZV07XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJkZWxldGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVkID0gb3JnTWV0aG9kKCBhcmdzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtkZWxldGVkLCBkZWxldGVkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIHNldHMuXHJcbiAqL1xyXG5jbGFzcyBTZXRIYW5kbGVyIGV4dGVuZHMgU2xvdENvbnRhaW5lckhhbmRsZXJcclxue1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXV0YXRvck1ldGhvZE5hbWVzID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oW1wiYWRkXCIsIFwiZGVsZXRlXCIsIFwiY2xlYXJcIl0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCB0cmlnZ2VyOiBUcmlnZ2VyLCBkZXB0aDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0cmlnZ2VyLCBTZXRIYW5kbGVyLm11dGF0b3JNZXRob2ROYW1lcywgZGVwdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50cyBzZXQtc3BlY2lmaWMgbXV0YXRvciBtZXRob2RzLlxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcGFyYW0gb3JnTWV0aG9kIFxyXG4gICAgICogQHBhcmFtIGFyZ3MgVHdvIGVsZW1lbnQgdHVwbGUgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHJldHVybiB2YWx1ZSBhbmQgdGhlIHNlY29uZFxyXG4gICAgICogZWxlbWVudCBpcyBhIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250YWluZXIgaGFzIGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYWxsT3JnTXV0YXRvck1ldGhvZCggdGFyZ2V0OiBNYXA8YW55LGFueT4sIG5hbWU6IFByb3BlcnR5S2V5LCBvcmdNZXRob2Q6IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSk6IFthbnksIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiYWRkXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBbb3JnTWV0aG9kKCB0cmlnZ2Vycml6ZSggYXJnc1swXSwgdGhpcy50cmlnZ2VyLCB0aGlzLmRlcHRoKSksIHRydWVdO1xyXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiY2xlYXJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpc0NoYW5nZWQgPSB0YXJnZXQuc2l6ZSA+IDA7XHJcbiAgICAgICAgICAgIG9yZ01ldGhvZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgaXNDaGFuZ2VkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJkZWxldGVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVkID0gb3JnTWV0aG9kKCBhcmdzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtkZWxldGVkLCBkZWxldGVkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERlY29yYXRvcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIGZ1bmN0aW9uIGZvciBkZWZpbmluZyBwcm9wZXJ0aWVzIHNvIHRoYXQgY2hhbmdpbmcgdGhlaXIgdmFsdWUgd2lsbCBhbnkgd2F0Y2hlclxyXG4gKiBvYmplY3RzIGF0dGFjaGVkIHRvIHRoZW0gdG8gcmVzcG9uZC5cclxuICogVGhlIGZvcm0gYEB0cmlnZ2VyYCBkZXNpZ25hdGVzIGEgZGVmYXVsdCB0cmlnZ2VyIGRlY29yYXRvciwgd2hvc2UgZGVwdGggd2lsbCBiZSBhc3NpZ25lZFxyXG4gKiBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIHR5cGU6IFNoYWxsb3cgZm9yIGFycmF5cywgbWFwcyBhbmQgc2V0cyBhbmQgRGVlcCBmb3Igb2JqZWN0cy5cclxuICogVGhlIGZvcm0gYEB0cmlnZ2VyKG4pYCBkZXNpZ25hdGVzIGEgdHJpZ2dlciBkZWNvcmF0b3IgZmFjdG9yeSB3aXRoIHRoZSBzcGVjaWZpZWQgZGVwdGguXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlciggdGFyZ2V0T3JEZXB0aDogYW55LCBuYW1lPzogc3RyaW5nKTogYW55XHJcbntcclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0T3JEZXB0aCA9PT0gXCJudW1iZXJcIilcclxuICAgIHtcclxuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGEgbnVtYmVyIHRoYXQgaXQgaXMgYW4gZXhwbGljaXRseSBzcGVjaWZpZWQgZGVwdGggdXNpbmdcclxuICAgICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeS5cclxuICAgICAgICByZXR1cm4gdHJpZ2dlckRlY29yYXRvckhlbHBlci5iaW5kKCB1bmRlZmluZWQsIHRhcmdldE9yRGVwdGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVuZGVmaW5lZCBkZXB0aCBtZWFucyB0aGF0IHRoYXQgdGhlIGFjdHVhbCBkZXB0aCB3aWxsIGJlIGFzc2lnbmVkIGRlcGVuZGlnIG9uIHRoZVxyXG4gICAgICAgIC8vIHZhbHVlIG9mIHRoZSB0cmlnZ2VyOiBTaGFsbG93IGZvciBtYXBzLCBzZXRzIGFuZCBhcnJheXMgYW5kIERlZXAgZm9yIG9iamVjdHMuXHJcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEZWNvcmF0b3JIZWxwZXIoIHVuZGVmaW5lZCwgdGFyZ2V0T3JEZXB0aCwgbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgYEB0cmlnZ2VyYCBkZWNvcmF0b3JzLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJpZ2dlckRlY29yYXRvckhlbHBlciggZGVwdGg6IG51bWJlciwgdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbCggbmFtZSArIFwiX3RyaWdnZXJcIik7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICBnZXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKCBkZXB0aCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJpZ2dlck9iai5nZXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCggdmFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSVRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVUcmlnZ2VyKCBkZXB0aCwgdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9iai5zZXQoIHZhbClcclxuICAgICAgICB9LFxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgZnVuY3Rpb24gZm9yIGRlZmluaW5nIFwiZ2V0XCIgcHJvcGVydGllcyBvciBmdW5jdGlvbnMgcmV0dW5pbmcgYSB2YWx1ZSBzbyB0aGF0IHRoaXNcclxuICogdmFsdWUgd2lsbCBhdXRvbWF0aWNhbGx5IHJlY2FsY3VsYXRlZCBpZiBhbnkgdHJpZ2dlcnMgb24gd2hpY2ggdGhpcyB2YWx1ZSBkZXBlbmRzIGhhdmUgdGhlaXJcclxuICogdmFsdWVzIGNoYW5nZWQuIFdIZW4gdGhpcyBoYXBwZW5zLCB0aGUgd2F0Y2hlciBvYmplY3RzIGF0dGFjaGVkIHRvIHRoaXMgY29tcHV0ZWQgdmFsdWUgd2lsbFxyXG4gKiBiZSBub3RpZmllZCB0byByZXNwb25kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKCB0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBwcm9wRGVzY3I6IFByb3BlcnR5RGVzY3JpcHRvcilcclxue1xyXG4gICAgbGV0IHN5bSA9IFN5bWJvbChuYW1lKTtcclxuXHJcbiAgICAvLyBwcm9wRGVzYy52YWx1ZSBpcyB1bmRlZmluZWQgZm9yIGFjY2Vzc29ycyBhbmQgZGVmaW5lZCBmb3IgZnVuY3Rpb25zXHJcbiAgICBpZiAoIXByb3BEZXNjci52YWx1ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXByb3BEZXNjci5nZXQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBjb21wdXRlZCBwcm9wZXJ0eSByZXF1aXJlcyBnZXQoKSBhY2Nlc3NvclwiKTtcclxuXHJcbiAgICAgICAgbGV0IG9yZ0dldCA9IHByb3BEZXNjci5nZXQ7XHJcbiAgICAgICAgcHJvcERlc2NyLmdldCA9IGZ1bmN0aW9uKCk6IGFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyaWdnZXJPYmogPSB0aGlzW3N5bV0gYXMgSUNvbXB1dGVkVHJpZ2dlcjtcclxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyT2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gdHJpZ2dlck9iaiA9IGNyZWF0ZUNvbXB1dGVkVHJpZ2dlciggb3JnR2V0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyT2JqLmdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BEZXNjci5zZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3JnU2V0ID0gcHJvcERlc2NyLnNldDtcclxuICAgICAgICAgICAgcHJvcERlc2NyLnNldCA9IGZ1bmN0aW9uKCB2OiBhbnkpOiB2b2lkXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdfbWFuYWdlci5lbnRlck11dGF0aW9uU2NvcGUoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7IG9yZ1NldC5jYWxsKCB0aGlzLCB2KTsgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGdfbWFuYWdlci5leGl0TXV0YXRpb25TY29wZSgpOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9yZ0Z1bmMgPSBwcm9wRGVzY3IudmFsdWU7XHJcbiAgICAgICAgcHJvcERlc2NyLnZhbHVlID0gZnVuY3Rpb24oIHY6IGFueSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyT2JqID0gdGhpc1tzeW1dIGFzIElDb21wdXRlZFRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghdHJpZ2dlck9iailcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IHRyaWdnZXJPYmogPSBjcmVhdGVDb21wdXRlZFRyaWdnZXIoIG9yZ0Z1bmMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJPYmouZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDb21wYXJlcyB0aGUgdHdvIGdpdmVuIHZhbHVlcyBnb2luZyBkb3duIHRvIHRoZWlyIHByb3BlcnRpZXMgaWYgdGhlc2UgYXJlIGFycmF5cyBvciBvYmplY3RzXHJcbiAqIEBwYXJhbSBvMSBcclxuICogQHBhcmFtIG8yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZGVlcENvbXBhcmUoIG8xOiBhbnksIG8yOiBhbnkpOiBib29sZWFuXHJcbntcclxuXHRpZiAobzEgPT09IG8yKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCAmJiBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ZWxzZSBpZiAobzEgPT0gbnVsbCB8fCBvMiA9PSBudWxsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSAhPT0gdHlwZW9mIG8yKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBvMSA9PT0gXCJvYmplY3RcIilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBwIGluIG8xKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXNfZGVlcENvbXBhcmUoIG8xW3BdLCBvMltwXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHAgaW4gbzIpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHAgaW4gbzEpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpKVxyXG5cdHtcclxuXHRcdGlmIChvMS5sZW5ndGggIT09IG8yLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMCwgbGVuID0gbzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIXNfZGVlcENvbXBhcmUoIG8xW2ldLCBvMltpXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIHdlIGFyZSBoZXJlIGlmIHRoZXNlIGFyZSBzdHJpbmdzLCBudW1iZXJzLCBib29sZWFucyBvciBmdW5jdGlvbnMgYW5kIHRoZXkgYXJlIGRpZmZlcmVudFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGhhc2hPYmplY3QoIG86IGFueSk6IG51bWJlclxyXG4vLyB7XHJcbi8vIFx0aWYgKG8gPT09IHVuZGVmaW5lZClcclxuLy8gXHRcdHJldHVybiAwO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IG51bGwpXHJcbi8vIFx0XHRyZXR1cm4gMTtcclxuLy8gXHRlbHNlIGlmIChpc05hTigwKSlcclxuLy8gXHRcdHJldHVybiAyO1xyXG4vLyBcdGVsc2UgaWYgKG8gPT09IHRydWUpXHJcbi8vIFx0XHRyZXR1cm4gMztcclxuLy8gXHRlbHNlIGlmIChvID09PSBmYWxzZSlcclxuLy8gXHRcdHJldHVybiA0O1xyXG5cclxuLy8gXHRsZXQgaCA9IDEwO1xyXG5cclxuLy8gXHRpZiAodHlwZW9mIG8gPT09IFwibnVtYmVyXCIpXHJcbi8vIFx0XHRyZXR1cm4gMTAgKyBvO1xyXG4vLyBcdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKVxyXG4vLyBcdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8pO1xyXG4vLyBcdGVsc2UgaWYgKHR5cGVvZiBvID09PSBcImZ1bmN0aW9uXCIpXHJcbi8vIFx0XHRyZXR1cm4gaGFzaFN0cmluZyggby5uYW1lKTtcclxuLy8gXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KG8pKVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBsZW4gPSBvLmxlbmd0aDtcclxuLy8gXHRcdGxldCBoID0gMTAgKyBsZW47XHJcbi8vIFx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4vLyBcdFx0XHQgaCArPSBpICsgaGFzaE9iamVjdCggb1tpXSk7XHJcbi8vIFx0XHRyZXR1cm4gaDtcclxuLy8gXHR9XHJcbi8vIFx0ZWxzZVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBoID0gMTA7XHJcbi8vIFx0XHRmb3IoIGxldCBwIGluIG8pXHJcbi8vIFx0XHRcdGggKz0gaGFzaFN0cmluZyhwKSArIGhhc2hPYmplY3Qob1twXSk7XHJcbi8vIFx0XHRyZXR1cm4gaDtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGhhc2hTdHJpbmcoIHM6IHN0cmluZyk6IG51bWJlclxyXG4vLyB7XHJcbi8vIFx0aWYgKCFzKVxyXG4vLyBcdFx0cmV0dXJuIDU7XHJcblxyXG4vLyBcdGxldCBsZW4gPSBzLmxlbmd0aDtcclxuLy8gXHRsZXQgaCA9IDEwICsgbGVuO1xyXG4vLyBcdGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbi8vIFx0XHRoICs9IHMuY2hhckNvZGVBdChpKTtcclxuLy8gXHRyZXR1cm4gaDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhbiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBvbmUgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFNWRyBzcGVjOyB0aGF0IGlzLCA8c3ZnPlxyXG4gKiBvciBhbnkgb3RoZXIgZnJvbSBTVkcuXHJcbiAqIEBwYXJhbSBlbG0gRWxlbWVudCB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19pc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfaXNTdmdTdmcoIGVsbTogRWxlbWVudCk6IGJvb2xlYW5cclxue1xyXG5cdHJldHVybiBlbG0udGFnTmFtZSA9PT0gXCJzdmdcIjtcclxuXHQvLyByZXR1cm4gKGVsbSBhcyBhbnkpLm93bmVyU1ZHRWxlbWVudCA9PT0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltY3NzX187Il0sInNvdXJjZVJvb3QiOiIifQ==