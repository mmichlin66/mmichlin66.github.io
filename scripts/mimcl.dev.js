(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimbl"), require("mimcss"), require("mimurl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimbl", "mimcss", "mimurl"], factory);
	else if(typeof exports === 'object')
		exports["mimcl"] = factory(require("mimbl"), require("mimcss"), require("mimurl"));
	else
		root["mimcl"] = factory(root["mimbl"], root["mimcss"], root["mimurl"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimbl__, __WEBPACK_EXTERNAL_MODULE_mimcss__, __WEBPACK_EXTERNAL_MODULE_mimurl__) {
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

/***/ "./lib/dnd/DataTransfer.js":
/*!*********************************!*\
  !*** ./lib/dnd/DataTransfer.js ***!
  \*********************************/
/*! exports provided: DragAndDropData, EmulDataTransfer, EmulLegacyDataTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropData", function() { return DragAndDropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmulDataTransfer", function() { return EmulDataTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmulLegacyDataTransfer", function() { return EmulLegacyDataTransfer; });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragAndDropData static class deals with data of arbitrary types being transfered
// during drag & drop operations. When a drag operation starts, pieces of data are added to a map
// with types (formats) as keys (these are the same formats that are kept in the HTML5 DataTransfer
// object. Data is added using the SetObjectData method of the IDragStartEvent interface. When the
// drop occurs, the GetObjectData of the IDragTargetEvent is used to retrieve the data. The map is
// cleared when the drag operation ends - regardless whether it was successful or was canceled.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragAndDropData {
    static setObjectData(type, data) {
        if (!type || data === undefined)
            return;
        DragAndDropData.dataMap.set(type, data);
    }
    static getObjectData(type) {
        return DragAndDropData.dataMap.get(type);
    }
    static removeObjectData(type) {
        DragAndDropData.dataMap.delete(type);
    }
    static clearAllObjectData() {
        DragAndDropData.dataMap.clear();
    }
    // Determines whether the given data type is available in the given DataTransfer object.
    static hasType(dataTransfer, type) {
        // Edge implemnts types via DOMStringList, whcih doesn't have indexOf
        if (dataTransfer.types.indexOf)
            return dataTransfer.types.indexOf(type) >= 0;
        else
            return dataTransfer.types.contains(type);
    }
}
// Map of object formats to object values.
DragAndDropData.dataMap = new Map();
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EmulDataTransfer emulates the behavior of DataTransfer object when the drag source does not
// support HTML5 drag and drop natively.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EmulDataTransfer extends DataTransfer {
    constructor() {
        super();
        this.isImageElmReset = false;
        this.dataMap = new Map();
        this.dataFormats = [];
    }
    // Uses the given element to update the drag feedback, replacing any previously specified
    // feedback.
    setDragImage(image, x, y) {
        this.imageElm = image;
        this.imageElmX = x;
        this.imageElmY = y;
        // Edge doesn't have setDragImage method in its DataTransfer class.
        if (super.setDragImage)
            super.setDragImage(image, x, y);
        // indicate that a new image element was set, so that we will "prepare" it on the next
        // drag step
        this.isImageElmReset = true;
    }
    set effectAllowed(val) {
        this.effectAllowedEx = val;
        super.effectAllowed = val;
    }
    get effectAllowed() {
        return this.effectAllowedEx === undefined ? super.effectAllowed : this.effectAllowedEx;
    }
    set dropEffect(val) {
        this.dropEffectEx = val;
        super.dropEffect = val;
    }
    get dropEffect() {
        return this.dropEffectEx === undefined ? super.dropEffect : this.dropEffectEx;
    }
    setData(format, data) {
        super.setData(format, data);
        this.dataMap.set(format, data);
        this.dataFormats = Array.from(this.dataMap.keys());
        return true;
    }
    getData(format) {
        let s = this.dataMap.get(format);
        return s === undefined ? "" : s;
    }
    clearData(format) {
        super.clearData(format);
        if (format)
            this.dataMap.delete(format);
        else
            this.dataMap.clear();
        this.dataFormats = Array.from(this.dataMap.keys());
        return true;
    }
    get types() {
        return this.dataFormats;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EmulLegacyDataTransfer emulates the behavior of DataTransfer object when the drag source
// does not support HTML5 drag and drop natively. This object is used under Edge, which doesn't
// implement the native DataTransfer object properly.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EmulLegacyDataTransfer extends DataTransfer {
    constructor() {
        super();
        this.isImageElmReset = false;
        this.dataMap = new Map();
        this.dataFormats = [];
        this.m_items = null;
        this.m_files = null;
    }
    // Uses the given element to update the drag feedback, replacing any previously specified
    // feedback.
    setDragImage(image, x, y) {
        this.imageElm = image;
        this.imageElmX = x;
        this.imageElmY = y;
        // indicate that a new image element was set, so that we will "prepare" it on the next
        // drag step
        this.isImageElmReset = true;
    }
    set effectAllowed(val) {
        this.effectAllowedEx = val;
    }
    get effectAllowed() {
        return this.effectAllowedEx;
    }
    set dropEffect(val) {
        this.dropEffectEx = val;
    }
    get dropEffect() {
        return this.dropEffectEx;
    }
    setData(format, data) {
        this.dataMap.set(format, data);
        this.dataFormats = Array.from(this.dataMap.keys());
        return true;
    }
    getData(format) {
        let s = this.dataMap.get(format);
        return s === undefined ? "" : s;
    }
    clearData(format) {
        if (format)
            this.dataMap.delete(format);
        else
            this.dataMap.clear();
        this.dataFormats = Array.from(this.dataMap.keys());
        return true;
    }
    get types() {
        return this.dataFormats;
    }
    get files() { return this.m_files; }
    get items() { return this.m_items; }
}


/***/ }),

/***/ "./lib/dnd/DragDropApi.js":
/*!********************************!*\
  !*** ./lib/dnd/DragDropApi.js ***!
  \********************************/
/*! exports provided: DNDTYPE_ELEMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNDTYPE_ELEMENT", function() { return DNDTYPE_ELEMENT; });
// String used as a type (aka format) when an element object is being dragged.
const DNDTYPE_ELEMENT = "application/DOMElement";


/***/ }),

/***/ "./lib/dnd/DragDropImpl.js":
/*!*********************************!*\
  !*** ./lib/dnd/DragDropImpl.js ***!
  \*********************************/
/*! exports provided: registerDragDropCustomAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDragDropCustomAttributes", function() { return registerDragDropCustomAttributes; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DragSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragSource */ "./lib/dnd/DragSource.js");
/* harmony import */ var _DragTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragTarget */ "./lib/dnd/DragTarget.js");



///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragSourceCustomElmPropHandler class is a handler for the dragSource custom property.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragSourceCustomElmPropHandler {
    constructor(elmVN, propVal) {
        this.elmVN = elmVN;
        this.currVal = propVal;
        this.add(propVal);
    }
    terminate(isRemoval) {
        this.remove();
        this.elmVN = undefined;
    }
    update(newPropVal) {
        if (this.currVal === newPropVal)
            return false;
        else {
            if (this.currVal)
                this.remove();
            if (newPropVal)
                this.add(newPropVal);
            this.currVal = newPropVal;
            return true;
        }
    }
    add(propVal) {
        let elm = this.elmVN.elm;
        this.dragSourceHandler = "ownerSVGElement" in elm
            ? new _DragSource__WEBPACK_IMPORTED_MODULE_1__["DragSourceEmulator"](elm, propVal)
            : new _DragSource__WEBPACK_IMPORTED_MODULE_1__["DragSourceHandler"](elm, propVal);
        this.dragSourceHandler.init();
    }
    remove() {
        if (this.dragSourceHandler) {
            this.dragSourceHandler.term();
            this.dragSourceHandler = undefined;
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragTargetCustomElmPropHandler class is a handler for the dragSource custom property.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragTargetCustomElmPropHandler {
    constructor(elmVN, propVal) {
        this.elmVN = elmVN;
        this.currVal = propVal;
        this.add(propVal);
    }
    terminate(isRemoval) {
        this.remove();
        this.elmVN = undefined;
    }
    update(newPropVal) {
        if (this.currVal === newPropVal)
            return false;
        else {
            if (this.currVal)
                this.remove();
            if (newPropVal)
                this.add(newPropVal);
            this.currVal = newPropVal;
            return true;
        }
    }
    add(propVal) {
        let elm = this.elmVN.elm;
        this.dragTargetHandler = new _DragTarget__WEBPACK_IMPORTED_MODULE_2__["DragTargetHandler"](elm, propVal);
        this.dragTargetHandler.init();
    }
    remove() {
        if (this.dragTargetHandler) {
            this.dragTargetHandler.term();
            this.dragTargetHandler = undefined;
        }
    }
}
// Register custom property factory for dragSource and dragTarget properties
function registerDragDropCustomAttributes() {
    mimbl__WEBPACK_IMPORTED_MODULE_0__["registerCustomAttribute"]("dragSource", DragSourceCustomElmPropHandler);
    mimbl__WEBPACK_IMPORTED_MODULE_0__["registerCustomAttribute"]("dragTarget", DragTargetCustomElmPropHandler);
}


/***/ }),

/***/ "./lib/dnd/DragSource.js":
/*!*******************************!*\
  !*** ./lib/dnd/DragSource.js ***!
  \*******************************/
/*! exports provided: DragSourceHandler, DragSourceEmulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSourceHandler", function() { return DragSourceHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSourceEmulator", function() { return DragSourceEmulator; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DragDropApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragDropApi */ "./lib/dnd/DragDropApi.js");
/* harmony import */ var _DataTransfer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataTransfer */ "./lib/dnd/DataTransfer.js");



///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragStartEvent class represents an object that is passed to different event handlers
// on the drag source elements.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragSourceEvent {
    // Reference to the original HTML5 DragEvent object.
    get dragEvent() { return this.m_dragEvent; }
    set dragEvent(val) { this.m_dragEvent = val; }
    // Sets data with the given type. For text data the type should be one of MIME types.
    setData(type, data) {
        if (typeof data === "string")
            this.m_dragEvent.dataTransfer.setData(type, data);
        else {
            this.m_dragEvent.dataTransfer.setData(type, "");
            _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["DragAndDropData"].setObjectData(type, data);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragSourceHandler class implements support for HTML5 Drag and Drop source functionality. It
// is used by HTML elements that natively support drag and drop events.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragSourceHandler {
    constructor(elm, dragSourceProp) {
        // Handler for the native dragstart event
        this.onDragStart = (e) => {
            // clear the data map - just in case
            _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["DragAndDropData"].clearAllObjectData();
            this.dragSourceEvent.dragEvent = e;
            if (this.behavior === 2 /* Simple */) {
                for (let dataType in this.simpleDragSource.data)
                    this.dragSourceEvent.setData(dataType, this.simpleDragSource.data[dataType]);
                if (this.simpleDragSource.allowedEffects !== undefined)
                    e.dataTransfer.effectAllowed = this.simpleDragSource.allowedEffects;
                else
                    e.dataTransfer.effectAllowed = "all" /* All */;
            }
            else if (this.behavior === 1 /* Regular */) {
                try {
                    // if onDragStart method is defined, invoke it
                    if (this.dragSource.onDragStart)
                        this.dragSource.onDragStart(this.dragSourceEvent);
                }
                catch (err) {
                    _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["DragAndDropData"].clearAllObjectData();
                    throw err;
                }
            }
            else {
                this.dragSourceEvent.setData(_DragDropApi__WEBPACK_IMPORTED_MODULE_1__["DNDTYPE_ELEMENT"], this.elm);
                e.dataTransfer.effectAllowed = "all" /* All */;
                if (this.behavior === 3 /* ElmText */)
                    this.dragSourceEvent.setData("text/plain", this.elm.textContent);
                else if (this.behavior === 4 /* ElmHtml */)
                    this.dragSourceEvent.setData("text/plain", this.elm.outerHTML);
            }
        };
        // Handler for the native dragend event
        this.onDragEnd = (e) => {
            if (this.behavior !== 1 /* Regular */) {
                _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["DragAndDropData"].clearAllObjectData();
                return;
            }
            try {
                if (this.dragSource.onDragEnd) {
                    this.dragSourceEvent.dragEvent = e;
                    this.dragSource.onDragEnd(this.dragSourceEvent);
                }
            }
            finally {
                _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["DragAndDropData"].clearAllObjectData();
            }
        };
        // Handler for the native drag event
        this.onDrag = (e) => {
            if (this.behavior === 1 /* Regular */) {
                if (this.dragSource.onDrag) {
                    this.dragSourceEvent.dragEvent = e;
                    this.dragSource.onDrag(this.dragSourceEvent);
                }
            }
        };
        this.elm = elm;
        if (dragSourceProp === "elm-text")
            this.behavior = 3 /* ElmText */;
        else if (dragSourceProp === "elm-html" || dragSourceProp === true)
            this.behavior = 4 /* ElmHtml */;
        else if (dragSourceProp.data !== undefined) {
            this.behavior = 2 /* Simple */;
            this.simpleDragSource = dragSourceProp;
        }
        else if (dragSourceProp.onDragStart !== undefined) {
            this.behavior = 1 /* Regular */;
            this.dragSource = dragSourceProp;
        }
/////////////////////
        else
            throw new Error("Invalid value of dragSourceProp in DragSourceHandler constructor.");
//////////////////
    }
    // Initializes the object by making the element draggable by adding drag events.
    init() {
        this.dragSourceEvent = new DragSourceEvent();
        this.elm.setAttribute("draggable", "true");
        this.elm.addEventListener("dragstart", this.onDragStart);
        this.elm.addEventListener("dragend", this.onDragEnd);
        this.elm.addEventListener("drag", this.onDrag);
    }
    // Terminates the object by removing drag event handlers from the element.
    term() {
        this.elm.removeEventListener("dragstart", this.onDragStart);
        this.elm.removeEventListener("dragend", this.onDragEnd);
        this.elm.removeEventListener("drag", this.onDrag);
        this.elm.removeAttribute("draggable");
        this.dragSourceEvent = undefined;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragSourceEmulator class emulates support for Drag and Drop source functionality via mouse
// events. It is used for DOM elements that don't have native drag and drop suport - e.g. SVG.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragSourceEmulator extends DragSourceHandler {
    constructor(elm, dragSource) {
        super(elm, dragSource);
        // Remember the coordinates of the mouse-down event and start watching mouse movement
        //(and other) events.
        this.onMouseDown = (e) => {
            // ignore non-primary mouse buttons
            if (e.button !== 0)
                return;
            e.preventDefault();
            // rememeber coordinates of the mouse down event
            this.mouseDownX = e.clientX;
            this.mouseDownY = e.clientY;
            // start listening to several DnD related events on the document.
            document.addEventListener("mousemove", this.onMouseMove);
            document.addEventListener("mouseup", this.onMouseUp);
            document.addEventListener("keydown", this.onKeyDown);
            document.addEventListener("keyup", this.onKeyUp);
        };
        // Either start or continue drag operation
        this.onMouseMove = (e) => {
            // primary button must be still pressed
            if ((e.buttons & 1) === 0)
                return;
            // need to prevent default action - otherwise text will be selected on the page.
            e.preventDefault();
            // if DnD operation is already in progress fire events; otherwise, check whether the
            // mouse moved enough to start the operation.
            if (this.emulDataTransfer !== undefined)
                this.handleDragStep(e);
            else {
                let cx = e.clientX - this.mouseDownX;
                let cy = e.clientY - this.mouseDownY;
                if (cx >= -2 && cx <= 2 && cy >= -2 && cy <= 2)
                    return;
                this.initiateDragOperation(e);
            }
        };
        // Finish drag operation if the target accepts it.
        this.onMouseUp = (e) => {
            if (this.emulDataTransfer !== undefined)
                this.handleDrop(e);
            this.cleanupDragOperation();
        };
        // Cancels drag operation if cancel was pressed
        this.onKeyDown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.keyCode === 27) {
                // if Escape - cancel drag and drop operation
                if (this.emulDataTransfer !== undefined)
                    this.cancelDragOperation(e);
                this.cleanupDragOperation();
            }
            else if (this.emulDataTransfer !== undefined)
                this.handleKeyEvent(e);
        };
        // Handles keyup events
        this.onKeyUp = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.emulDataTransfer !== undefined)
                this.handleKeyEvent(e);
        };
    }
    // Initializes the object by adding a mousedown event.
    init() {
        super.init();
        this.elm.addEventListener("mousedown", this.onMouseDown);
    }
    // Terminates the object by removing a mousedown event.
    term() {
        super.term();
        this.elm.removeEventListener("mousedown", this.onMouseDown);
    }
    // Initiates drag and drop operation
    initiateDragOperation(e) {
        if ("setDragImage" in DataTransfer.prototype)
            this.emulDataTransfer = new _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["EmulDataTransfer"]();
        else
            this.emulDataTransfer = new _DataTransfer__WEBPACK_IMPORTED_MODULE_2__["EmulLegacyDataTransfer"]();
        // fire onDragStart event - if the default action is prevented, we cancel the operation
        let dragstartEvent = this.createDragEventFromMouseEvent(e, "dragstart");
        this.elm.dispatchEvent(dragstartEvent);
        if (dragstartEvent.defaultPrevented) {
            this.cleanupDragOperation();
            return;
        }
        // if the drag source didn't set an element for drag image, use the element itself.
        if (!this.emulDataTransfer.isImageElmReset) {
            // calculte drag image coordinates so that initially the drag image coinsides with
            // the original image
            let rc = this.elm.getBoundingClientRect();
            this.emulDataTransfer.setDragImage(this.elm, e.clientX - rc.left, e.clientY - rc.top);
        }
        // indicate that we don't know last target yet
        this.lastTarget = undefined;
        this.isLastTargetDroppable = false;
        this.isDropPossibleOnLastTarget = false;
        // perform a drag step
        this.handleDragStep(e);
    }
    ;
    // Handle one step of drag and drop operation, which occurs when the mouse moves
    handleDragStep(e) {
        if (this.emulDataTransfer.isImageElmReset) {
            this.prepareImageElement();
            this.emulDataTransfer.isImageElmReset = false;
        }
        // before sending dragover event we set the dropEffect to none, and the dropover handler
        // could set it to something else if desired
        this.emulDataTransfer.dropEffect = "none";
        // find element under the cursor
        if (this.imageElm)
            this.imageElm.hidden = true;
        let newTarget = document.elementFromPoint(e.clientX, e.clientY);
        if (this.imageElm)
            this.imageElm.hidden = false;
        if (newTarget) {
            // if we are on the same target as the previous mouse move, just send dragover (if
            // the target is a valid drop zone)
            if (newTarget === this.lastTarget) {
                if (this.isLastTargetDroppable) {
                    let dragoverEvent = this.createDragEventFromMouseEvent(e, "dragover");
                    newTarget.dispatchEvent(dragoverEvent);
                    this.isDropPossibleOnLastTarget = dragoverEvent.defaultPrevented;
                }
            }
            else {
                // send dragenter to the new target and determine whether it is a valid drop
                // zone
                let dragenterEvent = this.createDragEventFromMouseEvent(e, "dragenter");
                newTarget.dispatchEvent(dragenterEvent);
                let isNewTargetDroppable = dragenterEvent.defaultPrevented;
                // send the last target (if exists and is droppable) the dragleave event.
                if (this.lastTarget && this.isLastTargetDroppable)
                    this.lastTarget.dispatchEvent(this.createDragEventFromMouseEvent(e, "dragleave"));
                // remember the new target and whether it is a valid drop zone
                this.lastTarget = newTarget;
                this.isLastTargetDroppable = isNewTargetDroppable;
                this.isDropPossibleOnLastTarget = isNewTargetDroppable;
                // if our new target is droppabale, send dragover to it
                if (this.isLastTargetDroppable) {
                    let dragoverEvent = this.createDragEventFromMouseEvent(e, "dragover");
                    newTarget.dispatchEvent(dragoverEvent);
                    this.isDropPossibleOnLastTarget = dragoverEvent.defaultPrevented;
                }
            }
        }
        else if (this.lastTarget) {
            // if we dont have new target but have last one target, send dragleave to the last one
            // (if the last target is a valid drop zone)
            if (this.isLastTargetDroppable)
                this.lastTarget.dispatchEvent(this.createDragEventFromMouseEvent(e, "dragleave"));
            this.lastTarget = undefined;
            this.isLastTargetDroppable = false;
            this.isDropPossibleOnLastTarget = false;
        }
        // send drag event to our source
        this.elm.dispatchEvent(this.createDragEventFromMouseEvent(e, "drag"));
        // move the drag image element to the current mouse position
        if (this.imageElm) {
            this.imageElm.style.left = e.clientX - this.emulDataTransfer.imageElmX + "px";
            this.imageElm.style.top = e.clientY - this.emulDataTransfer.imageElmY + "px";
        }
        // update image based on the latest feedback
        if (this.dropEffectElm) {
            let dropEffect = this.isDropPossibleOnLastTarget ? this.emulDataTransfer.dropEffect : "none";
            this.setDropEffectImageCue(dropEffect);
            this.dropEffectElm.style.left = this.emulDataTransfer.imageElmX + 12 + "px";
            this.dropEffectElm.style.top = this.emulDataTransfer.imageElmY + 0 + "px";
        }
        // remember last mouse event - we may use it to create DragEvent objects if we need to
        // dispatch drag events upon keyboard events (e.g. cancel operation when Escape is pressed
        // or dragover event if Ctrl, Alt or Shift buttons are pressed).
        this.lastMouseEvent = e;
    }
    ;
    // Handles keydown and keyup events during drag operation by sending dragover event.
    handleKeyEvent(e) {
        if (this.lastTarget && this.isLastTargetDroppable) {
            let dragoverEvent = this.createDragEventFromKeyboardEvent(e, "dragover");
            this.lastTarget.dispatchEvent(dragoverEvent);
            this.isDropPossibleOnLastTarget = dragoverEvent.defaultPrevented;
            // send drag event to our source
            this.elm.dispatchEvent(this.createDragEventFromKeyboardEvent(e, "drag"));
            // update image based on the latest feedback
            if (this.dropEffectElm) {
                let dropEffect = this.isDropPossibleOnLastTarget ? this.emulDataTransfer.dropEffect : "none";
                this.setDropEffectImageCue(dropEffect);
            }
        }
    }
    ;
    // Takes the image element (if any) specified via the call to setDragImage and clones it into
    // a special div that will be shown during the drag operation
    prepareImageElement() {
        // if we have previous image element, remove it now
        if (this.imageElm) {
            this.imageElm.remove();
            this.imageElm == undefined;
        }
        let orgElm = this.emulDataTransfer.imageElm;
        if (!orgElm)
            return;
        // create a div element, which will wrap the image element and will be added to the
        // document body with absolute positioning and some opacity
        let divElm = document.createElement("div");
        // clone the original element because we are going to move it around.
        let clonedElm = orgElm.cloneNode();
        // if the image element set via setDragImage is an SVG element but not the <svg> element
        // itself, then wrap it in an <svg> element.
        if (mimbl__WEBPACK_IMPORTED_MODULE_0__["isSvg"](orgElm) && !mimbl__WEBPACK_IMPORTED_MODULE_0__["isSvgSvg"](orgElm)) {
            let svgElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElm.appendChild(clonedElm);
            divElm.appendChild(svgElm);
        }
        else
            divElm.appendChild(clonedElm);
        // style the div element with absolute positioning and some opacity
        divElm.style.opacity = "0.7";
        divElm.style.position = "absolute";
        // add a span element for displaying "dropEffect" image
        this.dropEffectElm = document.createElement("span");
        this.dropEffectElm.style.position = "absolute";
        divElm.appendChild(this.dropEffectElm);
        document.body.appendChild(divElm);
        this.imageElm = divElm;
        // compare the bounding rectangle of the element set via setDragImage and the wrapping div
        // element. Their top-left coordinates may not coinside due to several factors (e.g.
        // absolute positioning or SVG coordinates). If this is the case, adjust the x and y
        // coordinates in the EmulDataTransfer object.
        let rcClonedElm = clonedElm.getBoundingClientRect();
        let rcDivElm = divElm.getBoundingClientRect();
        if (rcClonedElm.left != rcDivElm.left)
            this.emulDataTransfer.imageElmX += rcClonedElm.left - rcDivElm.left;
        if (rcClonedElm.top != rcDivElm.top)
            this.emulDataTransfer.imageElmY += rcClonedElm.top - rcDivElm.top;
    }
    // Display small image indicating what drop effect is expected
    setDropEffectImageCue(dropEffect) {
        let className;
        let color;
        switch (dropEffect) {
            case "none":
                className = "fa fa-fw fa-ban";
                color = "red";
                break;
            case "copy":
                className = "fa fa-fw fa-plus";
                color = "green";
                break;
            case "link":
                className = "fa fa-fw fa-link";
                color = "blue";
                break;
            default:
                className = "";
                color = "black";
                break;
        }
        this.dropEffectElm.className = className;
        this.dropEffectElm.style.color = color;
    }
    // Finish drag operation if the target accepts it.
    handleDrop(e) {
        // we don't need to find element under the cursor because drop always occurs on the last
        // found target (or no target at all)
        if (this.lastTarget) {
            if (this.isDropPossibleOnLastTarget)
                this.lastTarget.dispatchEvent(this.createDragEventFromMouseEvent(e, "drop"));
            else if (this.isLastTargetDroppable)
                this.lastTarget.dispatchEvent(this.createDragEventFromMouseEvent(e, "dragleave"));
            else
                this.emulDataTransfer.dropEffect = "none";
        }
        else
            this.emulDataTransfer.dropEffect = "none";
        this.elm.dispatchEvent(this.createDragEventFromMouseEvent(e, "dragend"));
    }
    ;
    // Cancel drag operation if cancel was pressed
    cancelDragOperation(e) {
        // indicate that DnD was canceled
        this.emulDataTransfer.dropEffect = "none";
        // send the last target (if exists and is droppable) the dragleave event.
        if (this.lastTarget && this.isLastTargetDroppable)
            this.lastTarget.dispatchEvent(this.createDragEventFromKeyboardEvent(e, "dragleave"));
        // fire onDragEnd event
        this.elm.dispatchEvent(this.createDragEventFromKeyboardEvent(e, "dragend"));
    }
    ;
    // Clean up after drag operation finishes with either drop or cancelation
    cleanupDragOperation() {
        // destroy the DataTransfer object
        this.emulDataTransfer = undefined;
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("keyup", this.onKeyUp);
        this.lastTarget = undefined;
        this.isLastTargetDroppable = false;
        this.isDropPossibleOnLastTarget = false;
        this.lastMouseEvent = undefined;
        if (this.imageElm) {
            this.imageElm.remove();
            this.imageElm = undefined;
        }
    }
    ;
    // creates DragEvent from the given MouseEvent and the static DataTransfer object
    createDragEventFromMouseEvent(e, type) {
        // Edge doesn't support new DragEvent yet, while Chrome doesn't support initDragEvent
        if ("initDragEvent" in DragEvent.prototype) {
            let dragEvent = document.createEvent('DragEvent');
            dragEvent.initDragEvent(type, e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget, this.emulDataTransfer);
            return dragEvent;
        }
        else {
            return new DragEvent(type, {
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                detail: e.detail,
                view: e.view,
                altKey: e.altKey,
                button: e.button,
                buttons: e.buttons,
                clientX: e.clientX,
                clientY: e.clientY,
                ctrlKey: e.ctrlKey,
                metaKey: e.metaKey,
                relatedTarget: e.relatedTarget,
                screenX: e.screenX,
                screenY: e.screenY,
                shiftKey: e.shiftKey,
                dataTransfer: this.emulDataTransfer,
            });
        }
    }
    // Creates DragEvent from the given KeyboardEvent and the DataTransfer object. Uses last remembered
    // mouse event to fill coordinates and button information.
    createDragEventFromKeyboardEvent(e, type) {
        // Edge doesn't support new DragEvent yet, while Chrome doesn't support initDragEvent
        if ("initDragEvent" in DragEvent.prototype) {
            let dragEvent = document.createEvent('DragEvent');
            dragEvent.initDragEvent(type, e.bubbles, e.cancelable, e.view, e.detail, this.lastMouseEvent.screenX, this.lastMouseEvent.screenY, this.lastMouseEvent.clientX, this.lastMouseEvent.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, this.lastMouseEvent.button, this.lastMouseEvent.relatedTarget, this.emulDataTransfer);
            return dragEvent;
        }
        else {
            return new DragEvent(type, {
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                detail: e.detail,
                view: e.view,
                altKey: e.altKey,
                button: this.lastMouseEvent.button,
                buttons: this.lastMouseEvent.buttons,
                clientX: this.lastMouseEvent.clientX,
                clientY: this.lastMouseEvent.clientY,
                ctrlKey: e.ctrlKey,
                metaKey: e.metaKey,
                relatedTarget: this.lastMouseEvent.relatedTarget,
                screenX: this.lastMouseEvent.screenX,
                screenY: this.lastMouseEvent.screenY,
                shiftKey: e.shiftKey,
                dataTransfer: this.emulDataTransfer,
            });
        }
    }
}


/***/ }),

/***/ "./lib/dnd/DragTarget.js":
/*!*******************************!*\
  !*** ./lib/dnd/DragTarget.js ***!
  \*******************************/
/*! exports provided: DragTargetHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragTargetHandler", function() { return DragTargetHandler; });
/* harmony import */ var _DataTransfer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTransfer */ "./lib/dnd/DataTransfer.js");

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragTargetEvent class represents an object that is passed to different event handlers
// on the drag target elements.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragTargetEvent {
    // Reference to the original HTML5 DragEvent object.
    get dragEvent() { return this.m_dragEvent; }
    set dragEvent(val) { this.m_dragEvent = val; }
    // Determines whether the given data type is available.
    hasType(type) {
        return _DataTransfer__WEBPACK_IMPORTED_MODULE_0__["DragAndDropData"].hasType(this.dragEvent.dataTransfer, type);
    }
    // Rerieves data for the given type. If the type is not available, returns undefined.
    getData(type) {
        let data = _DataTransfer__WEBPACK_IMPORTED_MODULE_0__["DragAndDropData"].getObjectData(type);
        return data !== undefined ? data : this.m_dragEvent.dataTransfer.getData(type);
    }
    // Determines whether files are being dragged.
    hasFiles() {
        let files = this.m_dragEvent.dataTransfer.files;
        return files && files.length > 0;
    }
    // Rerieves array of files. Returns undefined if files are not being dragged. The objects in
    // the returned array are of type WebKitEntry (we cannot specify it as such here because the
    // current Typescript is distributed with .d.ts libraries that don't define this type.
    getFiles() {
        let items = this.m_dragEvent.dataTransfer.items;
        if (!items || items.length === 0)
            return undefined;
        let entries = [];
        if (items) {
            for (let i = 0; i < items.length; i++)
                entries.push(items[i].webkitGetAsEntry());
        }
        return entries;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragTargetHandler class implements support for HTML5 Drag and Drop target functionality.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragTargetHandler {
    constructor(elm, dragTarget) {
        this.onDragEnter = (e) => {
            e.stopPropagation();
            // we will call the onDragEnter callback only if this is the first time the dragenter
            // event is fired on our element or on one of child non-drag-target elements.
            if (this.dragTargetEnterCounter++ > 0) {
                if (this.isDropPossible)
                    e.preventDefault();
                return;
            }
            this.isDropPossible = false;
            // if IDragTarget.types property is defined and is not empty, drag will be possible
            // only if the data being dragged has at least on type from the types array.
            if (this.simpleDragTarget !== undefined) {
                for (let type of this.simpleDragTarget.dataTypes) {
                    if (_DataTransfer__WEBPACK_IMPORTED_MODULE_0__["DragAndDropData"].hasType(e.dataTransfer, type)) {
                        this.isDropPossible = true;
                        break;
                    }
                }
                // if no suitable type found, we don't call e.preventDefault, which disallows drop
                if (!this.isDropPossible)
                    return;
            }
            else if (this.dragTarget !== undefined) {
                // if the onDragEnter method is not implemented on the drag target, we consider drop possible
                if (this.dragTarget.onDragEnter === undefined)
                    this.isDropPossible = true;
                else {
                    this.dragTargetEvent.dragEvent = e;
                    this.isDropPossible = this.dragTarget.onDragEnter(this.dragTargetEvent);
                }
            }
            if (this.isDropPossible) {
                e.preventDefault();
                if (this.simpleDragTarget !== undefined) {
                    // apply visual feedback if specified
                    if (this.simpleDragTarget.feedback !== undefined) {
                        // although style property exists in both HTMLElement and SVGElement, it is defined on a
                        // separate type - ElementCSSInlineStyle
                        let elmStyle = this.elm.style;
                        // save current values of style properties specified in feedback and set the style from
                        // the feedback
                        this.savedStyle = {};
                        for (let prop in this.simpleDragTarget.feedback) {
                            this.savedStyle[prop] = elmStyle[prop];
                            elmStyle[prop] = this.simpleDragTarget.feedback[prop];
                        }
                    }
                }
                else if (this.dragTarget !== undefined) {
                    // if the callback is not defined we need to set drop effect
                    if (this.dragTarget.onDragEnter === undefined)
                        e.dataTransfer.dropEffect = this.getDefaultDropEffect(e);
                }
            }
        };
        this.onDragOver = (e) => {
            e.stopPropagation();
            let isDropPossible = false;
            if (this.simpleDragTarget !== undefined)
                isDropPossible = true;
            else if (this.dragTarget !== undefined) {
                // if the onDragOver method is not implemented on the drag target, we consider drop possible
                if (this.dragTarget.onDragOver === undefined)
                    isDropPossible = true;
                else {
                    // call the onDragOver method and consider drop possible only if it returns true
                    this.dragTargetEvent.dragEvent = e;
                    isDropPossible = this.dragTarget.onDragOver(this.dragTargetEvent);
                }
            }
            if (isDropPossible) {
                e.preventDefault();
                if (this.simpleDragTarget !== undefined)
                    e.dataTransfer.dropEffect = this.getDefaultDropEffect(e);
                else if (this.dragTarget !== undefined) {
                    // if the callback is not defined we need to set drop effect
                    if (this.dragTarget.onDragOver === undefined)
                        e.dataTransfer.dropEffect = this.getDefaultDropEffect(e);
                }
            }
        };
        this.onDragLeave = (e) => {
            e.preventDefault();
            e.stopPropagation();
            // we will call the onDragLeave callback only if the mouse completely leaves our element,
            // which means our counter reaches 0.
            if (--this.dragTargetEnterCounter > 0)
                return;
            if (this.simpleDragTarget !== undefined) {
                // revert visual feedback (if was specified)
                if (this.savedStyle !== undefined) {
                    // although style property exists in both HTMLElement and SVGElement, it is defined on a
                    // separate type - ElementCSSInlineStyle
                    let elmStyle = this.elm.style;
                    for (let prop in this.savedStyle)
                        elmStyle[prop] = this.savedStyle[prop];
                    this.savedStyle = undefined;
                }
            }
            else if (this.dragTarget !== undefined) {
                if (this.dragTarget.onDragLeave !== undefined) {
                    this.dragTargetEvent.dragEvent = e;
                    this.dragTarget.onDragLeave(this.dragTargetEvent);
                }
            }
        };
        this.onDrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.simpleDragTarget !== undefined) {
                let expectedTypes = this.simpleDragTarget.dataTypes;
                let dataObj = {};
                for (let type of e.dataTransfer.types) {
                    // if we have some expected types defined skip the current type if it is no one
                    // of the expected
                    if (expectedTypes && expectedTypes.length > 0 && expectedTypes.indexOf(type) < 0)
                        continue;
                    let data = _DataTransfer__WEBPACK_IMPORTED_MODULE_0__["DragAndDropData"].getObjectData(type);
                    if (data !== undefined)
                        dataObj[type] = data;
                    else {
                        data = e.dataTransfer.getData(type);
                        if (data !== undefined)
                            dataObj[type] = data;
                    }
                }
                this.simpleDragTarget.onDataDropped(dataObj);
            }
            else if (this.dragTarget !== undefined) {
                this.dragTargetEvent.dragEvent = e;
                this.dragTarget.onDrop(this.dragTargetEvent);
            }
            //// if the target implements onDragLeave, call it now to allow it to cleanup
            //if (this.dragTarget.onDragLeave !== undefined)
            //{
            //	this.dragTargetEvent.dragEvent = e;
            //	this.dragTarget.onDragLeave( this.dragTargetEvent);
            //}
            // clear our dragEnterCounter
            this.dragTargetEnterCounter = 0;
        };
        this.elm = elm;
        if (dragTarget.onDrop !== undefined)
            this.dragTarget = dragTarget;
        else if (dragTarget.onDataDropped !== undefined)
            this.simpleDragTarget = dragTarget;
    }
    init() {
        this.dragTargetEvent = new DragTargetEvent();
        this.dragTargetEnterCounter = 0;
        this.elm.addEventListener("dragenter", this.onDragEnter);
        this.elm.addEventListener("dragleave", this.onDragLeave);
        this.elm.addEventListener("dragover", this.onDragOver);
        this.elm.addEventListener("drop", this.onDrop);
    }
    term() {
        this.elm.removeEventListener("dragenter", this.onDragEnter);
        this.elm.removeEventListener("dragleave", this.onDragLeave);
        this.elm.removeEventListener("dragover", this.onDragOver);
        this.elm.removeEventListener("drop", this.onDrop);
        this.dragTargetEvent = undefined;
    }
    // Returns default drop effect according to the allowed effects and keys pressed
    getDefaultDropEffect(e) {
        let allowedEffects = e.dataTransfer.effectAllowed;
        switch (allowedEffects) {
            case "copy" /* Copy */:
                return "copy" /* Copy */;
            case "move" /* Move */:
                return "move" /* Move */;
            case "link" /* Link */:
                return "link" /* Link */;
            case "copyMove" /* CopyMove */:
                return e.ctrlKey ? "copy" /* Copy */ : "move" /* Move */;
            case "copyLink" /* CopyLink */:
                return e.altKey ? "link" /* Link */ : "copy" /* Copy */;
            case "linkMove" /* LinkMove */:
                return e.altKey ? "link" /* Link */ : "move" /* Move */;
            case "all" /* All */:
                return e.altKey ? "link" /* Link */ : e.ctrlKey ? "copy" /* Copy */ : "move" /* Move */;
            default: "none" /* None */;
        }
    }
    // Determines whether the given drop effect is among the allowed effects
    isDropEffectAllowed(dropEffect, allowedEffects) {
        switch (allowedEffects) {
            case "copy" /* Copy */:
                return dropEffect === "copy" /* Copy */;
            case "move" /* Move */:
                return dropEffect === "move" /* Move */;
            case "link" /* Link */:
                return dropEffect === "link" /* Link */;
            case "copyMove" /* CopyMove */:
                return dropEffect === "copy" /* Copy */ || dropEffect === "move" /* Move */;
            case "copyLink" /* CopyLink */:
                return dropEffect === "copy" /* Copy */ || dropEffect === "link" /* Link */;
            case "linkMove" /* LinkMove */:
                return dropEffect === "link" /* Link */ || dropEffect === "move" /* Move */;
            case "all" /* All */:
                return dropEffect !== "none" /* None */;
            default: return false;
        }
    }
}


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: DNDTYPE_ELEMENT, Popup, Dialog, DialogButton, MsgBox, MsgBoxButtons, MsgBoxIcon, Router, Link, createTree, ScrollAxis, ScrollAxisAction, VTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dnd_DragDropApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd/DragDropApi */ "./lib/dnd/DragDropApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DNDTYPE_ELEMENT", function() { return _dnd_DragDropApi__WEBPACK_IMPORTED_MODULE_0__["DNDTYPE_ELEMENT"]; });

/* harmony import */ var _popup_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup/Popup */ "./lib/popup/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _popup_Popup__WEBPACK_IMPORTED_MODULE_1__["Popup"]; });

/* harmony import */ var _popup_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/Dialog */ "./lib/popup/Dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _popup_Dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogButton", function() { return _popup_Dialog__WEBPACK_IMPORTED_MODULE_2__["DialogButton"]; });

/* harmony import */ var _popup_MsgBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/MsgBox */ "./lib/popup/MsgBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsgBox", function() { return _popup_MsgBox__WEBPACK_IMPORTED_MODULE_3__["MsgBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsgBoxButtons", function() { return _popup_MsgBox__WEBPACK_IMPORTED_MODULE_3__["MsgBoxButtons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MsgBoxIcon", function() { return _popup_MsgBox__WEBPACK_IMPORTED_MODULE_3__["MsgBoxIcon"]; });

/* harmony import */ var _router_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/Router */ "./lib/router/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router_Router__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _router_Router__WEBPACK_IMPORTED_MODULE_4__["Link"]; });

/* harmony import */ var _tree_TreeApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree/TreeApi */ "./lib/tree/TreeApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTree", function() { return _tree_TreeApi__WEBPACK_IMPORTED_MODULE_5__["createTree"]; });

/* harmony import */ var _virt_ScrollAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virt/ScrollAxis */ "./lib/virt/ScrollAxis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollAxis", function() { return _virt_ScrollAxis__WEBPACK_IMPORTED_MODULE_6__["ScrollAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollAxisAction", function() { return _virt_ScrollAxis__WEBPACK_IMPORTED_MODULE_6__["ScrollAxisAction"]; });

/* harmony import */ var _virt_VTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./virt/VTable */ "./lib/virt/VTable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VTable", function() { return _virt_VTable__WEBPACK_IMPORTED_MODULE_7__["VTable"]; });

/* harmony import */ var _dnd_DragDropImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dnd/DragDropImpl */ "./lib/dnd/DragDropImpl.js");
// Type definitions for mimcl









Object(_dnd_DragDropImpl__WEBPACK_IMPORTED_MODULE_8__["registerDragDropCustomAttributes"])();


/***/ }),

/***/ "./lib/popup/Dialog.js":
/*!*****************************!*\
  !*** ./lib/popup/Dialog.js ***!
  \*****************************/
/*! exports provided: Dialog, DialogButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogButton", function() { return DialogButton; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./lib/popup/Popup.js");
/* harmony import */ var _util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/LocalStyles */ "./lib/util/LocalStyles.js");



///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Dialog class is a popup with three distinct areas: caption, main content and buttons.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Dialog extends _Popup__WEBPACK_IMPORTED_MODULE_1__["Popup"] {
    // The constructor accepts Slice for the three dialog areas: caption, main content and buttons.
    // They can be left undefined if a derived class overrides the appropriate render methods.
    constructor(captionAreaSlice, mainAreaSlice, buttonAreaSlice, dlgSlice) {
        super(dlgSlice);
        // Called when the user puts mouse down in the caption area
        this.onStartMove = (e) => {
            this.startMove(e);
        };
        // Array of buttons added to the dialog
        this.buttonInfos = [];
        this.captionAreaSlice = captionAreaSlice ? captionAreaSlice : {};
        this.mainAreaSlice = mainAreaSlice ? mainAreaSlice : {};
        this.buttonAreaSlice = buttonAreaSlice ? buttonAreaSlice : {};
        // create default parameters if this is the first time a Dialog is created
        if (!Dialog.DefaultCaptionAreaSlice)
            Dialog.DefaultCaptionAreaSlice = { style: { background: "pink", padding: "0.5em 1em", cursor: "default" } };
        if (!Dialog.DefaultMainAreaSlice)
            Dialog.DefaultMainAreaSlice = { style: { padding: "0.5em 1em" } };
        if (!Dialog.DefaultButtonAreaSlice)
            Dialog.DefaultButtonAreaSlice = { style: { display: "flex", justifyContent: "flex-end", padding: "0.5em 1em" } };
        if (!Dialog.DefaultButtonSlice)
            Dialog.DefaultButtonSlice = { style: { marginLeft: "0.5em", minWidth: "5em" } };
    }
    // Adds button with the given characteristics. The key parameter indicates the value that is
    // passed to the callback when the button is clicked. The optional index parameter specifies
    // the index at which the button should be added.
    addButton(slice, key, callback, index) {
        let info = { slice, key, callback, ref: new mimbl__WEBPACK_IMPORTED_MODULE_0__["Ref"]() };
        if (index === undefined)
            this.buttonInfos.push(info);
        else if (index === 0)
            this.buttonInfos.unshift(info);
        else
            this.buttonInfos.splice(index - 1, 0, info);
        this.updateMe(this.renderButtonArea);
    }
    // Removes the button at the given index.
    removeButton(index) {
        this.buttonInfos.splice(index, 1);
        this.updateMe(this.renderButtonArea);
    }
    renderCaptionArea() {
        let captionAreaSlice = Object(_util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__["mergeSlices"])(Dialog.DefaultCaptionAreaSlice, this.getCaptionAreaSlice());
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", Object.assign({ id: "dlgCaption", mousedown: this.onStartMove, style: captionAreaSlice.style, class: captionAreaSlice.className }, captionAreaSlice.props), captionAreaSlice.content);
    }
    renderMainArea() {
        let mainAreaSlice = Object(_util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__["mergeSlices"])(Dialog.DefaultMainAreaSlice, this.getMainAreaSlice());
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", Object.assign({ id: "dlgMainContent", style: mainAreaSlice.style, class: mainAreaSlice.className }, mainAreaSlice.props), mainAreaSlice.content);
    }
    renderButtonArea() {
        let buttonAreaSlice = Object(_util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__["mergeSlices"])(Dialog.DefaultButtonAreaSlice, this.getButtonAreaSlice());
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", Object.assign({ id: "dlgButtons", style: buttonAreaSlice.style, class: buttonAreaSlice.className }, buttonAreaSlice.props),
            buttonAreaSlice.content,
            this.buttonInfos.map((info) => {
                let btnSlice = Object(_util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__["mergeSlices"])(Dialog.DefaultButtonSlice, info.slice);
                return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("button", Object.assign({ key: info.key, click: info.callback && (() => info.callback(info.key)), style: btnSlice.style, class: btnSlice.className }, btnSlice.props), btnSlice.content);
            }));
    }
    // Provides parameters for the <dialog> element.
    getDlgSlice() {
        let content = mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"](mimbl__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            this.renderCaptionArea,
            this.renderMainArea,
            this.renderButtonArea);
        return { content };
    }
    // Provides parameters for the caption.
    getCaptionAreaSlice() {
        return this.captionAreaSlice;
    }
    // Provides parameters for the main content area.
    getMainAreaSlice() {
        return this.mainAreaSlice;
    }
    // Provides parameters for the button area.
    getButtonAreaSlice() {
        return this.buttonAreaSlice;
    }
    get CaptionAreaSlice() { return this.captionAreaSlice; }
    set CaptionAreaSlice(val) { this.captionAreaSlice = val; }
    get MainAreaSlice() { return this.mainAreaSlice; }
    set MainAreaSlice(val) { this.mainAreaSlice = val; }
    get ButtonAreaSlice() { return this.buttonAreaSlice; }
    set ButtonAreaSlice(val) { this.buttonAreaSlice = val; }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DialogButton enumeration defines constants to indicate standard buttons used in dialogs.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var DialogButton;
(function (DialogButton) {
    DialogButton[DialogButton["None"] = 0] = "None";
    DialogButton[DialogButton["OK"] = 1] = "OK";
    DialogButton[DialogButton["Cancel"] = 2] = "Cancel";
    DialogButton[DialogButton["Yes"] = 4] = "Yes";
    DialogButton[DialogButton["No"] = 8] = "No";
    DialogButton[DialogButton["Close"] = 16] = "Close";
})(DialogButton || (DialogButton = {}));


/***/ }),

/***/ "./lib/popup/MsgBox.js":
/*!*****************************!*\
  !*** ./lib/popup/MsgBox.js ***!
  \*****************************/
/*! exports provided: MsgBox, MsgBoxButtons, MsgBoxIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBox", function() { return MsgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBoxButtons", function() { return MsgBoxButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBoxIcon", function() { return MsgBoxIcon; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog */ "./lib/popup/Dialog.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The MsgBox class is a dialog that displays a message with a set of pre-defined buttons.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class MsgBox extends _Dialog__WEBPACK_IMPORTED_MODULE_1__["Dialog"] {
    constructor(message, title, buttons = MsgBoxButtons.OK, icon = MsgBoxIcon.None) {
        super();
        this.onButtonClicked = (key) => {
            this.close(key);
        };
        this.message = message;
        this.title = title;
        this.buttons = buttons;
        this.icon = icon;
        this.createButtons();
    }
    static showModal(message, title, buttons = MsgBoxButtons.OK, icon = MsgBoxIcon.None) {
        let msgBox = new MsgBox(message, title, buttons, icon);
        return msgBox.showModal();
    }
    // Provides parameters for the caption.
    getCaptionAreaSlice() {
        return { content: this.title, style: { backgroundColor: "dodgerblue" } };
    }
    // Provides parameters for the main content area.
    getMainAreaSlice() {
        let { cls, color } = this.getIconClassAndColor();
        let content = mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { style: { display: "flex", alignItems: "start" } },
            cls && mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("i", { class: "fa fa-3x " + cls, style: { color: color } }),
            mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { style: { marginLeft: "10px", minWidth: "15em", maxWidth: "40em", minHeight: "2em",
                    maxHeight: "20em", overflow: "auto" } }, this.message));
        return { content };
    }
    // Adds buttons according to the parameter specified in the constructor.
    createButtons() {
        switch (this.buttons) {
            case MsgBoxButtons.Close:
                this.createButton("Close", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].Close);
                break;
            case MsgBoxButtons.OK:
                this.createButton("OK", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].OK);
                break;
            case MsgBoxButtons.OkCancel:
                this.createButton("OK", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].OK);
                this.createButton("Cancel", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].Cancel);
                break;
            case MsgBoxButtons.YesNo:
                this.createButton("Yes", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].Yes);
                this.createButton("No", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].No);
                break;
            case MsgBoxButtons.YesNoCancel:
                this.createButton("Yes", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].Yes);
                this.createButton("No", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].No);
                this.createButton("Cancel", _Dialog__WEBPACK_IMPORTED_MODULE_1__["DialogButton"].Cancel);
                break;
        }
    }
    // Adds buttons according to the parameter specified in the constructor.
    getIconClassAndColor() {
        switch (this.icon) {
            case MsgBoxIcon.Info: return { cls: "fa-info-circle", color: "blue" };
            case MsgBoxIcon.Warning: return { cls: "fa-exclamation-triangle", color: "orange" };
            case MsgBoxIcon.Error: return { cls: "fa-minus-circle", color: "red" };
            case MsgBoxIcon.Question: return { cls: "fa-question-circle", color: "green" };
            default: return { cls: "", color: "blue" };
        }
    }
    createButton(text, key) {
        this.addButton({ content: text }, key, this.onButtonClicked);
    }
}
/**
 * The MsgBoxButton enumeration specifies values of predefined buttons and button combinations for
 * message boxes.
 */
var MsgBoxButtons;
(function (MsgBoxButtons) {
    /** Message box will display no buttons */
    MsgBoxButtons[MsgBoxButtons["None"] = 0] = "None";
    /** Message box will have a single Close button */
    MsgBoxButtons[MsgBoxButtons["Close"] = 1] = "Close";
    /** Message box will have a single OK button */
    MsgBoxButtons[MsgBoxButtons["OK"] = 2] = "OK";
    /** Message box will have OK and Cancel buttons */
    MsgBoxButtons[MsgBoxButtons["OkCancel"] = 3] = "OkCancel";
    /** Message box will have Yes and No buttons */
    MsgBoxButtons[MsgBoxButtons["YesNo"] = 4] = "YesNo";
    /** Message box will have Yes, No and Cancel buttons */
    MsgBoxButtons[MsgBoxButtons["YesNoCancel"] = 5] = "YesNoCancel";
})(MsgBoxButtons || (MsgBoxButtons = {}));
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The MsgBoxIcon enumeration specifies values of predefined icons for message box.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var MsgBoxIcon;
(function (MsgBoxIcon) {
    MsgBoxIcon[MsgBoxIcon["None"] = 0] = "None";
    MsgBoxIcon[MsgBoxIcon["Info"] = 1] = "Info";
    MsgBoxIcon[MsgBoxIcon["Warning"] = 2] = "Warning";
    MsgBoxIcon[MsgBoxIcon["Error"] = 3] = "Error";
    MsgBoxIcon[MsgBoxIcon["Question"] = 4] = "Question";
})(MsgBoxIcon || (MsgBoxIcon = {}));


/***/ }),

/***/ "./lib/popup/Popup.js":
/*!****************************!*\
  !*** ./lib/popup/Popup.js ***!
  \****************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_LocalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/LocalStyles */ "./lib/util/LocalStyles.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Popup class is a base class for modeless and modal popups. It provides the basic mechanics
// for showing and closing the popups including moving it with the mouse. The content of the
// popup is either specified in the constuctor or is provided by derived classes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Popup extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    // The constructor accepts the object describing the styles and content that should be
    // displayed within the popup. It can be left undefined if a derived class overrides the
    // getDlgSlice method.
    constructor(dlgSlice) {
        super();
        // Handles keydown event to prevent closing the dialog by Esc key.
        this.onKeyDown = (e) => {
            if (e.keyCode === 27) // Esc
                e.preventDefault();
        };
        this.onMove = (e) => {
            this.move(e.clientX - this.dragPointOffsetX, e.clientY - this.dragPointOffsetY);
        };
        this.onStopMove = (e) => {
            window.removeEventListener("mousemove", this.onMove);
            window.removeEventListener("mouseup", this.onStopMove);
        };
        // Reference to the <div> element containing the caption.
        this.caption = new mimbl__WEBPACK_IMPORTED_MODULE_0__["Ref"]();
        this.dlgSlice = dlgSlice ? dlgSlice : {};
        // create default parameters if this is the first time a Popup is created
        if (!Popup.DefaultDlgSlice)
            Popup.DefaultDlgSlice = { style: { borderStyle: "solid", borderWidth: 1, padding: "0" } };
    }
    // Opens the dialog as a modeless popup. It should be closed with the Close method.
    open(x, y) {
        if (this.isOpen())
            return false;
        this.create(x, y);
        this.dlg.show();
    }
    // Closes the dialog opened as a modeless popup. This method cannot be used to close a modal
    // dialog.
    close(retVal) {
        this.dlg.close();
        this.destroy();
        if (this.modalPromiseResolveFunc) {
            this.modalPromiseResolveFunc(retVal);
            this.modalPromiseResolveFunc = undefined;
        }
    }
    // Opens a modal dialog. The dialog is closed with the CloseModal method and the parameter
    // passed to the CloseModal method is returned as a resolved promise.
    showModal(x, y) {
        if (this.isOpen())
            return Promise.reject("Dialog is already open");
        let promise = new Promise((resolve) => { this.modalPromiseResolveFunc = resolve; });
        this.create(x, y);
        this.dlg.showModal();
        return promise;
    }
    // Determines whether the dialog is currently open.
    isOpen() {
        return this.dlg !== undefined;
    }
    // Determines whether the dialog is currently open as modeless.
    isModeless() {
        return this.isOpen() && this.modalPromiseResolveFunc === undefined;
    }
    // Determines whether the dialog is currently open as modal.
    isModal() {
        return this.isOpen() && this.modalPromiseResolveFunc !== undefined;
    }
    // Starts monitoring mouse movements and moves the dialog with the mouse. This method is
    // intented to be called from a mousedown event somewhere within the popup.
    startMove(e) {
        // we prevent default action and propagation so that mouse movements don't cause
        // test in the popup and on the page to be selected.
        e.preventDefault();
        e.stopPropagation();
        let rect = this.dlg.getBoundingClientRect();
        this.dragPointOffsetX = e.clientX - rect.left;
        this.dragPointOffsetY = e.clientY - rect.top;
        // set the new coordinate and also remember them in our Slice so that they can be specified
        // as properties if the component is rerendered
        this.dlg.style.margin = this.currDlgSlice.style.margin = "0";
        this.currDlgSlice.style.top = rect.top;
        this.currDlgSlice.style.left = rect.left;
        this.dlg.style.top = this.currDlgSlice.style.top + "px";
        this.dlg.style.left = this.currDlgSlice.style.left + "px";
        window.addEventListener("mousemove", this.onMove);
        window.addEventListener("mouseup", this.onStopMove);
    }
    ;
    // Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
    // some part of the dialog at the top-left corner remains visible in order to the user to be
    // able to continue moving it.
    move(newX, newY) {
        if (newX < 0)
            newX = 0;
        else if (newX + 30 > window.innerWidth)
            newX = window.innerWidth - 30;
        if (newY < 0)
            newY = 0;
        else if (newY + 30 > window.innerHeight)
            newY = window.innerHeight - 30;
        // set the new coordinate and also remember them in our Slice so that they can be specified
        // as properties if the component is rerendered
        this.currDlgSlice.style.left = newX;
        this.currDlgSlice.style.top = newY;
        this.dlg.style.left = this.currDlgSlice.style.left + "px";
        this.dlg.style.top = this.currDlgSlice.style.top + "px";
    }
    ;
    render() {
        if (!this.currDlgSlice) {
            // define positioning styles. If x and/or y are undefined, we center the dialog horizontally
            // and/or vertically
            let style = { position: "fixed" };
            if (this.initialX === undefined) {
                style.left = 0;
                style.right = 0;
            }
            else {
                style.left = this.initialX;
                style.marginLeft = "0";
                style.marginRight = "0";
            }
            if (this.initialY === undefined) {
                style.top = 0;
                style.bottom = 0;
            }
            else {
                style.top = this.initialY;
                style.marginTop = "0";
                style.marginBottom = "0";
            }
            this.currDlgSlice = Object(_util_LocalStyles__WEBPACK_IMPORTED_MODULE_1__["mergeSlices"])(Popup.DefaultDlgSlice, this.getDlgSlice(), { style });
        }
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("dialog", Object.assign({ ref: ref => this.dlg = ref, style: this.currDlgSlice.style, class: this.currDlgSlice.className }, this.currDlgSlice.props), this.currDlgSlice.content);
    }
    // Returns parameters for the <dialog> element provided either externally or by derived classes.
    getDlgSlice() {
        return this.dlgSlice;
    }
    // Creates and renders the popup.
    create(x, y) {
        this.initialX = x;
        this.initialY = y;
        // create a <div> element and append it to the end of <body>. Then render our component's
        // content under it.
        this.anchorDiv = document.createElement("div");
        document.body.appendChild(this.anchorDiv);
        mimbl__WEBPACK_IMPORTED_MODULE_0__["mount"](this, this.anchorDiv);
        window.addEventListener("keydown", this.onKeyDown);
    }
    // Unrenders and destroys the dialog.
    destroy() {
        window.removeEventListener("keydown", this.onKeyDown);
        mimbl__WEBPACK_IMPORTED_MODULE_0__["unmount"](this.anchorDiv);
        this.anchorDiv.remove();
    }
    get DlgSlice() { return this.DlgSlice; }
}


/***/ }),

/***/ "./lib/router/Router.js":
/*!******************************!*\
  !*** ./lib/router/Router.js ***!
  \******************************/
/*! exports provided: Router, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var mimurl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimurl */ "mimurl");
/* harmony import */ var mimurl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimurl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


/**
 * Internal class that is used as a state for History.pushState function. It remembers the
 * parameters of a route to navigate to when the user goes back or forward in the browser's
 * history.
 */
class RouteState {
}
/**
 * The Router component provides client-side routing. It works with Route objects that define
 * available navigation targets.
 */
class Router extends mimbl__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super();
        // Reacts on user using back and forward buttons.
        this.onPopstate = (e) => {
            let state = e.state;
            if (!state)
                return;
            if (state.routeID)
                this.navigateByID(state.routeID, state.fields);
            else if (state.routeURL)
                this.navigateByURL(state.routeURL);
            else
                console.log("Route state in popstate event has neither route ID nor path.");
        };
        // Ordered list of Route objects - used to find routes by matching paths. Note that this
        // list is actually a hierarchy because routes can contain sub-routes.
        this.routes = [];
        // Map of route IDs to Route objects. All routes that define an ID are added to this map -
        // no matter how deep in the hierarchy.
        this.routesByID = new Map();
        // Error and component path in case an error has been caught.
        this.error = null;
        this.errorPath = null;
        this.props = props;
        if (this.props.children) {
            for (let route of this.props.children)
                this.addRoute(route);
        }
    }
    /**
     * Inserts the given route at the given index in the list.
     * @param route [[Route]] object to add
     * @param index Index at which to add the route object. If the index is not defined, the
     *		route is appended to the end of the list. If index is out of range an exception will
     *		be thrown.
     */
    addRoute(route, index) {
        if (!route)
            throw new Error("Route object cannot be null");
        if (index !== undefined)
            this.routes.splice(index, 0, route);
        else
            this.routes.push(route);
        // recursively add the route and all its sub-routes (that have IDs) to the map
        this.addRouteToMap(route);
    }
    /**
     * Removes a route at the given index in the list and returns the Route object. If index is
     * out of range an exception will be thrown.
     *
     * @param index
     * @return Route [[Route]] object that was removed.
     */
    removeRoute(index) {
        let route = this.routes.splice(index, 1)[0];
        // recursively remove the route and all its sub-routes (that have IDs) from the map
        this.removeRouteFromMap(route);
        return route;
    }
    // Adds the given route and its sub-routes recursively to the map of routes by IDs (only
    // the routes that have their id property defined and not empty).
    addRouteToMap(route) {
        if (route.id)
            this.routesByID.set(route.id, route);
        if (route.subRoutes) {
            for (let subRoute of route.subRoutes)
                this.addRouteToMap(subRoute);
        }
    }
    // Removes the given route and its sub-routes recursively from the map of routs by IDs (only
    // the routes that have their id property defined and not empty).
    removeRouteFromMap(route) {
        if (route.id)
            this.routesByID.delete(route.id);
        if (route.subRoutes) {
            for (let subRoute of route.subRoutes)
                this.removeRouteFromMap(subRoute);
        }
    }
    /**
     * Navigates to a route matching the given URL.
     * @param url Absolute or relative URL to navigate to
     * @param makeHistoryEntry
     */
    navigateByURL(url, makeHistoryEntry = false) {
        let [route, fields] = this.findRouteByURL(url);
        if (!route) {
            if (this.higherRouterService)
                this.higherRouterService.r.navigateByURL(url, makeHistoryEntry);
            return;
        }
        this.navigateToRoute(route, url, fields, makeHistoryEntry);
    }
    /**
     * Navigates to a route with the given ID.
     *
     * @param id ID of the route
     * @param params Parameters to be passed to the route's function
     * @param makeHistoryEntry Flag indicating whether the Router should create a new entry in the
     *		browser's history.
     */
    navigateByID(id, fields, makeHistoryEntry) {
        let route = this.routesByID.get(id);
        if (!route) {
            if (this.higherRouterService)
                this.higherRouterService.r.navigateByID(id, fields);
            return;
        }
        // if we are controlling the browser we may need to substitute parameters in the
        // route's URL pattern
        let url;
        if (this.controlsBrowser) {
            url = route.urlPattern;
            if (url && fields) {
            }
        }
        this.navigateToRoute(route, url, fields, makeHistoryEntry);
    }
    /**
     * Finds a route by going through the route hierarchy and trying to match the given URL.
     * If the route is found, the URL is parsed and any parameters are extracted from it.
     * @param url
     */
    findRouteByURL(url) {
        return Router.findRouteRecursiveByURL(url, this.routes);
    }
    /**
     * Looks for a route matching the given URL among the given array of Route objects and
     * recursively among their sub-routes.
     * @param url URL to match
     * @param routes Array of Route objects to match with the URL
     */
    static findRouteRecursiveByURL(url, routes) {
        for (let route of routes) {
            let matchResult = mimurl__WEBPACK_IMPORTED_MODULE_0__["match"](url, route.urlPattern);
            if (matchResult && matchResult.success)
                return [route, matchResult.fields];
            else if (route.subRoutes) {
                let rootAndFields = Router.findRouteRecursiveByURL(url, route.subRoutes);
                if (rootAndFields[0])
                    return rootAndFields;
            }
        }
        return [null, null];
    }
    /**
     * Navigates to the given route passing the given parameters.
     *
     * @param id ID of the route
     * @param params Parameters to be passed to the route's function
     * @param makeHistoryEntry Flag indicating whether the Router should create a new entry in the
     *		browser's history.
     */
    async navigateToRoute(route, url, fields, makeHistoryEntry) {
        //// check if the new route is the same as the current route and don't do anything
        //if (route === this.currRoute)
        //	return;
        // if we have current route, ask it if we can leave it
        if (this.currRoute && this.currRoute.navFromFunc) {
            let ret = this.currRoute.navFromFunc();
            if (ret instanceof Promise)
                ret = await ret;
            if (!ret)
                return;
        }
        // if we are controlling the browser use History API to change state
        if (this.controlsBrowser && makeHistoryEntry) {
            let state = { routeID: route.id, routeURL: url, fields };
            history.pushState(state, "", url);
        }
        // remember the new route and get its content
        this.currRoute = route;
        let content = route.navToFunc ? route.navToFunc(fields) : null;
        if (content instanceof Promise)
            this.currRouteContent = await content;
        else
            this.currRouteContent = content;
        // request to be updated so that our render method will be called
        this.updateMe();
    }
    // Informs that the given error was raised by one of the descendant coponents.
    reportError(err, path) {
        this.handleError(err, path);
        this.updateMe();
    }
    willMount() {
        this.vn.publishService("StdErrorHandling", this);
        // publish ourselves as a router service
        this.vn.publishService("Router", this);
        // if instructed so, subscribe to a router service implemented by any of components
        // up the chain
        if (this.chainsToHigherRouter) {
            this.higherRouterService = new mimbl__WEBPACK_IMPORTED_MODULE_1__["Ref"]();
            this.vn.subscribeService("Router", this.higherRouterService, undefined, false);
        }
        // find the first route to display
        let firstRoute = this.routes.length > 0 ? this.routes[0] : null;
        if (!firstRoute)
            return;
        this.currRoute = firstRoute;
        let content = firstRoute.navToFunc ? firstRoute.navToFunc({}) : null;
        if (content instanceof Promise) {
            this.currRouteContent = "Please wait while content is loading...";
            content.then((delayedContent) => {
                this.currRouteContent = delayedContent;
                this.updateMe;
            });
        }
        else
            this.currRouteContent = content;
        if (this.controlsBrowser) {
            // establish base URL relative to which all paths will be considered
            if (!this.baseURL) {
            }
            // subscribe to the popstate event for monitoring back and forward commands
            window.addEventListener("popstate", this.onPopstate);
            let state = { routeID: firstRoute.id, routeURL: firstRoute.urlPattern, fields: null };
            history.replaceState(state, "", firstRoute.urlPattern);
        }
    }
    willUnmount() {
        if (this.controlsBrowser) {
            window.removeEventListener("popstate", this.onPopstate);
        }
        if (this.chainsToHigherRouter) {
            this.vn.unsubscribeService("Router");
            this.higherRouterService = undefined;
        }
        this.vn.unpublishService("Router");
        this.vn.unpublishService("StdErrorHandling");
    }
    render() {
        return this.virtRender(this.currRouteContent);
    }
    handleError(err, nodePath) {
        //this.error = err;
        //this.errorPath = nodePath;
        this.currRouteContent =
            mimbl__WEBPACK_IMPORTED_MODULE_1__["jsx"]("div", { id: "rootError", style: { backgroundColor: "pink", display: "flex",
                    flexDirection: "column", alignItems: "start" } },
                err,
                nodePath && nodePath.map((name) => mimbl__WEBPACK_IMPORTED_MODULE_1__["jsx"]("span", null, name)));
    }
    /**
     * "Virtual" function that can be overridden by derived classes. Responsible for returning
     * content to be displayed by the Router component. The default implementation either calls
     * the outerContentFunc if defined or just returns the content passed as a parameter.
     *
     * @param currRouteContent
     * @return Content to be displayed by the Router component.
     */
    virtRender(currRouteContent) {
        //return this.outerContentFunc ? this.outerContentFunc( currRouteContent) : currRouteContent;
        return currRouteContent;
    }
    // Returns the flag indicating whether this router controls the browser; that is, uses History
    // API to push new state and intercept back and forward commands.
    get controlsBrowser() {
        return this.props.controlsBrowser === undefined ? true : this.props.controlsBrowser;
    }
    // Returns the flag indicating that if this router cannot resolve a path, it will delegate to
    // a router up the component chain (if there is one).
    get chainsToHigherRouter() {
        return this.props.chainsToHigherRouter === undefined ? true : this.props.chainsToHigherRouter;
    }
    // Returns the absolute or relative URL based on which all route paths will be resolved.
    get baseURL() {
        return this.props.baseURL === undefined ? "" : this.props.baseURL;
    }
    /**
     * Sets the function that renders the content of the current route inside the router's own content. If
     * this member is undefined, only the current route's content will be displayed.
     */
    set OuterContentFunc(val) { this.outerContentFunc = val; }
    /** Sets the function that renders a progress UI while the router is loading route content. */
    set ProgressContentFunc(val) { this.progressContentFunc = val; }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Link class is a component that allows creating links handled by a Router object. It is
// implemented as a managed component because its intended use is very similar to the <a> DOM
// element.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Link extends mimbl__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        // extract our custom parameters and leave only those that are <a> attributes
        let _a = this.props, { routeURL, routeID, fields, makeHistoryEntry } = _a, rest = __rest(_a, ["routeURL", "routeID", "fields", "makeHistoryEntry"]);
        return mimbl__WEBPACK_IMPORTED_MODULE_1__["jsx"]("a", Object.assign({ href: "#", click: this.onClick }, rest), this.props.children);
    }
    onClick(e) {
        e.preventDefault();
        let service = this.vn.getService("Router");
        if (!service)
            return;
        if (this.props.routeID)
            service.navigateByID(this.props.routeID, this.props.fields, this.props.makeHistoryEntry);
        else
            service.navigateByURL(this.props.routeURL, this.props.makeHistoryEntry);
    }
    ;
}


/***/ }),

/***/ "./lib/tree/Tree.js":
/*!**************************!*\
  !*** ./lib/tree/Tree.js ***!
  \**************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeNodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNodeContainer */ "./lib/tree/TreeNodeContainer.js");
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeNode */ "./lib/tree/TreeNode.js");
/* harmony import */ var _util_LocalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/LocalStyles */ "./lib/util/LocalStyles.js");




///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Tree class is a general purpose tree control.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Tree extends _util_LocalStyles__WEBPACK_IMPORTED_MODULE_3__["ComponentWithLocalStyles"] {
    constructor() {
        super();
        this.onKeyDown = (e) => {
            e.preventDefault();
            if (e.key === "ArrowDown")
                this.selectDown(this.m_selectedNode);
            else if (e.key === "ArrowUp")
                this.selectUp(this.m_selectedNode);
            else if (e.key === "ArrowRight")
                this.expandOrSelectDown(this.m_selectedNode);
            else if (e.key === "ArrowLeft")
                this.collapseOrSelectUp(this.m_selectedNode);
        };
        // Currently selected node or null if no node is selected.
        this.m_selectedNode = null;
        this.tabIndex = 0;
        this.container = new _TreeNodeContainer__WEBPACK_IMPORTED_MODULE_1__["TreeNodeContainer"](() => new _TreeNode__WEBPACK_IMPORTED_MODULE_2__["TreeNode"](null, 0, this));
        this.elmRef = new mimbl__WEBPACK_IMPORTED_MODULE_0__["Ref"]();
        this.prepareLocalStyles();
    }
    // Tab index of the tree control.
    get tabIndex() { return this.m_tabIndex; }
    set tabIndex(val) { this.m_tabIndex = val; this.updateMe(); }
    // List of sub-nodes.
    get nodes() { return this.container.nodes; }
    // Creates a new node. If the index parameter is between zero and the current number of nodes,
    // the new node is inserted at this index. If the index parameter is undefined or less than
    // zero or greater then the current number of nodes, it is appended to the end of the list.
    addNode(params, index) {
        let subNode = this.container.addNode(params, index);
        this.updateMe();
        return subNode;
    }
    // Removes existing node at the given index in the nodes list.
    removeNode(index) {
        this.container.removeNode(index);
        this.updateMe();
    }
    // Removes all nodes.
    removeAllNodes() {
        this.container.removeAllNodes();
        this.updateMe();
    }
    // Expands all nodes.
    expandAll() {
        this.container.expandAll();
    }
    // Colapses all nodes.
    collapseAll() {
        this.container.collapseAll();
    }
    // Returns currently selected node or null if no node is selected.
    get selectedNode() { return this.m_selectedNode; }
    render() {
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { ref: this.elmRef, tabindex: this.tabIndex, class: this.cssClassTree, keydown: this.onKeyDown }, this.container);
    }
    // Selects the node down from the given node.
    selectDown(node) {
        let nextNode = this.findDown(node);
        if (nextNode) {
            nextNode.select();
            nextNode.scrollIntoView(false);
        }
    }
    // Selects the node up from the given node.
    selectUp(node) {
        let prevNode = this.findUp(node);
        if (prevNode) {
            prevNode.select();
            prevNode.scrollIntoView(true);
        }
    }
    // If the node is collapsed, expands it. If the node is already expanded, selects the first
    // child node. If the node doesn't have children, selects the next node down.
    expandOrSelectDown(node) {
        if (!node)
            return;
        if (node.container.nodes.length > 0) {
            if (node.m_isExpanded) {
                let newNode = node.container.nodes[0];
                newNode.select();
                newNode.scrollIntoView(false);
            }
            else
                node.expand();
        }
        else
            this.selectDown(node);
    }
    // If the node is expanded, collapses it; otherwise, selects the node's parent.
    collapseOrSelectUp(node) {
        if (!node)
            return;
        if (node.m_isExpanded)
            node.collapse();
        else
            this.selectUp(node);
    }
    // Finds node down from the given node.
    findDown(node, skipExpandedSubNodes = false) {
        if (!node) {
            if (this.container.nodes.length > 0)
                return this.container.nodes[0];
        }
        else if (skipExpandedSubNodes) {
            let container = node.m_parent ? node.m_parent.container : this.container;
            if (node.index < container.nodes.length - 1)
                return container.nodes[node.index + 1];
            else if (node.m_parent)
                return this.findDown(node.m_parent, true);
        }
        else if (node.isExpanded && node.container.nodes.length > 0)
            node.container.nodes[0].select();
        else
            return this.findDown(node, true);
        return null;
    }
    // Finds node up from the given node.
    findUp(node) {
        if (!node) {
            if (this.container.nodes.length > 0)
                return this.container.nodes[0];
        }
        else if (node.index === 0) {
            if (node.m_parent)
                return node.m_parent;
        }
        else {
            let container = node.m_parent ? node.m_parent.container : this.container;
            let prevNode = container.nodes[node.index - 1];
            let lastExpandedNode = this.findLastExpandedNode(prevNode);
            return lastExpandedNode ? lastExpandedNode : prevNode;
        }
        return null;
    }
    // Finds node which is the last expanded descendand of the given node.
    findLastExpandedNode(currNode) {
        if (!currNode || currNode.container.nodes.length === 0 || !currNode.m_isExpanded)
            return null;
        let lastChild = currNode.container.nodes[currNode.container.nodes.length - 1];
        let lastExpandedNode = this.findLastExpandedNode(lastChild);
        return lastExpandedNode ? lastExpandedNode : lastChild;
    }
    prepareLocalStyles() {
        this.cssClassTree = this.decorateName("tree");
        this.cssRuleTree = this.createStyleRule("tree", ".tree(*)", {
            cursor: "default",
            border: [1, "solid", "dodgerblue"],
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontSize: "12px",
            boxSizing: "border-box",
            maxHeight: "100%",
            overflow: "auto",
        });
        this.cssClassNode = this.decorateName("tree-node");
        this.cssRuleNode = this.createStyleRule("tree-node", ".tree-node(*)", {
            display: "flex",
            alignItems: "center",
        });
        this.cssClassNodeContent = this.decorateName("tree-node-content");
        this.cssRuleNodeContent = this.createStyleRule("tree-node-content", ".tree-node-content(*)", {
            marginLeft: "2px",
            padding: "1px",
        });
        this.cssRuleNodeContentHover = this.createStyleRule("tree-node-content:hover", ".tree-node-content(*):hover", {
            backgroundColor: "lightcyan",
        });
        this.cssClassNodeContentSelected = this.decorateName("tree-node-content-selected");
        this.cssRuleNodeContentSelected = this.createStyleRule("tree-node-content-selected", ".tree-node-content-selected(*)", {
            marginLeft: "2px",
            border: [1, "dotted"],
            backgroundColor: "dodgerblue",
            color: "white",
        });
        this.cssClassNodeIcon = this.decorateName("tree-node-icon");
        this.cssRuleNodeIcon = this.createStyleRule("tree-node-icon", ".tree-node-icon(*)", {
            fontSize: "10px",
            width: "1em",
            height: "1em",
        });
        this.cssClassSubnodes = this.decorateName("tree-subnodes");
        this.cssRuleSubNodes = this.createStyleRule("tree-subnodes", ".tree-subnodes(*)", {
            marginLeft: "16px",
        });
    }
}


/***/ }),

/***/ "./lib/tree/TreeApi.js":
/*!*****************************!*\
  !*** ./lib/tree/TreeApi.js ***!
  \*****************************/
/*! exports provided: createTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTree", function() { return createTree; });
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./lib/tree/Tree.js");

// Creates tree control instance
function createTree() {
    return new _Tree__WEBPACK_IMPORTED_MODULE_0__["Tree"]();
}


/***/ }),

/***/ "./lib/tree/TreeNode.js":
/*!******************************!*\
  !*** ./lib/tree/TreeNode.js ***!
  \******************************/
/*! exports provided: TreeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeNodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNodeContainer */ "./lib/tree/TreeNodeContainer.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The TreeNode class represents a single node within a tree control.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class TreeNode extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(parent, level, tree = null) {
        super();
        // Function that creates instances of sub-nodes of this node.
        this.nodeFactory = () => {
            return new TreeNode(this, this.m_level + 1);
        };
        // Called when the user clicks on icon or name.
        this.onClick = (e) => {
            this.select();
        };
        // Called when the user double-clicks on icon or name.
        this.onDblClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.subNodes.length === 0)
                return;
            this.m_isExpanded ? this.collapse() : this.expand();
        };
        // Called when the userclicks on the expander icon
        this.onExpanderClicked = (e) => {
            this.m_isExpanded ? this.collapse() : this.expand();
        };
        this.m_parent = parent;
        this.m_tree = parent !== null ? parent.m_tree : tree;
        this.m_level = level;
        this.container = new _TreeNodeContainer__WEBPACK_IMPORTED_MODULE_1__["TreeNodeContainer"](this.nodeFactory);
        this.m_isExpanded = false;
        this.m_isSelected = false;
        this.contentElmRef = new mimbl__WEBPACK_IMPORTED_MODULE_0__["Ref"]();
    }
    // Tree to which this node belongs.
    get tree() { return this.m_tree; }
    // Parent tree node or null for top-level (root) nodes.
    get parent() { return this.m_parent; }
    // 0-based level of the node in the ancestral hierarchy.
    get level() { return this.m_level; }
    // 0-based index of the node in the list of its parent's sub-nodes.
    get index() { return this.m_index; }
    // 0-based index of the node in the list of its parent's sub-nodes.
    set index(val) { this.m_index = val; }
    // Node parameters.
    get content() { return this.m_content; }
    set content(val) { this.m_content = val; this.updateMe(); }
    get icon() { return this.m_icon; }
    set icon(val) { this.m_icon = val; this.updateMe(); }
    get textColor() { return this.m_textColor; }
    set textColor(val) { this.m_textColor = val; this.updateMe(); }
    get bgColor() { return this.m_bgColor; }
    set bgColor(val) { this.m_bgColor = val; this.updateMe(); }
    get italic() { return this.m_italic; }
    set italic(val) { this.m_italic = val; this.updateMe(); }
    get bold() { return this.m_bold; }
    set bold(val) { this.m_bold = val; this.updateMe(); }
    get customClass() { return this.m_customClass; }
    set customClass(val) { this.m_customClass = val; this.updateMe(); }
    get data() { return this.m_data; }
    set data(val) { this.m_data = val; }
    // Flag indicating whether the node is expanded.
    get isExpanded() { return this.m_isExpanded; }
    // Expands the node so that its sub-nodes become visible.
    expand() {
        if (this.container.nodes.length > 0 && this.m_isExpanded !== true) {
            this.m_isExpanded = true;
            this.updateMe();
        }
    }
    // Colapses the node hiding its sub-nodes.
    collapse() {
        if (this.container.nodes.length > 0 && this.m_isExpanded !== false) {
            this.m_isExpanded = false;
            this.updateMe();
        }
    }
    // Selects the node.
    select() {
        if (this.m_isSelected !== true) {
            // unselect the currently selected node (if any)
            if (this.m_tree.m_selectedNode != null)
                this.m_tree.m_selectedNode.unselect();
            this.m_tree.m_selectedNode = this;
            this.m_isSelected = true;
            this.updateMe();
        }
    }
    // Unselects the node.
    unselect() {
        if (this.m_isSelected !== false) {
            this.m_tree.m_selectedNode = null;
            this.m_isSelected = false;
            this.updateMe();
        }
    }
    // List of sub-nodes.
    get subNodes() { return this.container.nodes; }
    // Creates a new node. If the index parameter is between zero and the current number of nodes,
    // the new node is inserted at this index. If the index parameter is undefined or less than
    // zero or greater then the current number of nodes, it is appended to the end of the list.
    addNode(params, index) {
        let subNode = this.container.addNode(params, index);
        // update only if this was the first sub-node
        if (this.container.nodes.length === 1)
            this.updateMe();
        return subNode;
    }
    // Removes existing node at the given index in the nodes list.
    removeNode(index) {
        let oldLength = this.container.nodes.length;
        this.container.removeNode(index);
        // update only if this was the last sub-node
        if (oldLength === 1 && this.container.nodes.length === 0) {
            this.m_isExpanded = false;
            this.updateMe();
        }
    }
    // Removes all nodes.
    removeAllNodes() {
        let oldLength = this.container.nodes.length;
        if (oldLength > 0) {
            this.container.removeAllNodes();
            this.m_isExpanded = false;
            this.updateMe();
        }
    }
    // Expands all nodes.
    expandAll() {
        this.expand();
        this.container.expandAll();
    }
    // Colapses all nodes.
    collapseAll() {
        this.collapse();
        this.container.collapseAll();
    }
    // Check whether the node is not within the viewport and scrolls it into view alinging it
    // with the upper or lower edge of the tree container.
    scrollIntoView(alignUp) {
        if (!this.m_tree.elmRef.r || !this.contentElmRef.r)
            return;
        // get tree and node bounding rect
        let rcTree = this.m_tree.elmRef.r.getBoundingClientRect();
        let rcNode = this.contentElmRef.r.getBoundingClientRect();
        if (rcNode.bottom <= rcTree.bottom && rcNode.top >= rcTree.top)
            return;
        this.contentElmRef.r.scrollIntoView(alignUp);
    }
    render() {
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"](mimbl__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            this.renderNode(),
            this.renderSubNodes());
    }
    renderNode() {
        let expanderClassName = this.container.nodes.length === 0 ? "" : this.m_isExpanded ? "fa-caret-down" : "fa-caret-right";
        let iconContent;
        if (this.m_icon) {
            if ("class" in this.m_icon)
                iconContent = mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { class: this.m_tree.cssClassNodeIcon + " " + this.m_icon.class, click: this.onClick, dblclick: this.onDblClick });
            else if ("img" in this.m_icon)
                iconContent = mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("img", { class: this.m_tree.cssClassNodeIcon, src: this.m_icon.img, click: this.onClick, dblclick: this.onDblClick });
        }
        let contentClass = this.m_isSelected ? this.m_tree.cssClassNodeContentSelected : this.m_tree.cssClassNodeContent;
        if (this.m_customClass)
            contentClass += " " + this.m_customClass;
        let contentStyle = {};
        if (this.m_textColor)
            contentStyle.color = this.m_textColor;
        if (this.m_bgColor)
            contentStyle.backgroundColor = this.m_bgColor;
        if (this.m_italic)
            contentStyle.fontStyle = "italic";
        if (this.m_bold)
            contentStyle.fontWeight = "bold";
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.m_tree.cssClassNode },
            mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("i", { class: "fa fa-fw " + expanderClassName, click: this.onExpanderClicked }),
            iconContent,
            mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("span", { ref: this.contentElmRef, dragSource: true, class: contentClass, style: contentStyle, click: this.onClick, dblclick: this.onDblClick }, this.m_content));
    }
    renderSubNodes() {
        if (this.subNodes.length === 0)
            return null;
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { class: this.m_tree.cssClassSubnodes, style: { display: this.m_isExpanded ? "block" : "none" } }, this.container);
    }
}


/***/ }),

/***/ "./lib/tree/TreeNodeContainer.js":
/*!***************************************!*\
  !*** ./lib/tree/TreeNodeContainer.js ***!
  \***************************************/
/*! exports provided: TreeNodeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeContainer", function() { return TreeNodeContainer; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The TreeNodeContainer class represents a collection of tree nodes that are displayed and
// hidden together.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class TreeNodeContainer extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(nodeFactory) {
        super();
        this.nodes = [];
        this.nodeFactory = nodeFactory;
    }
    // Creates a new node. If the index parameter is between zero and the current number of nodes,
    // the new node is inserted at this index. If the index parameter is undefined or less than
    // zero or greater then the current number of nodes, it is appended to the end of the list.
    addNode(params, index) {
        let currLength = this.nodes.length;
        let node = this.nodeFactory();
        if (index === undefined || index === null || index < 0 || index >= currLength) {
            node.index = currLength;
            this.nodes.push(node);
        }
        else {
            node.index = index;
            this.nodes.splice(index, 0, node);
            // update indexes of the nodes after the inserted one
            for (let i = index + 1; i < currLength; i++)
                this[i].index = i;
        }
        node.content = params.content;
        node.icon = params.icon;
        node.textColor = params.textColor;
        node.bgColor = params.bgColor;
        node.italic = params.italic;
        node.bold = params.bold;
        node.customClass = params.customClass;
        node.data = params.data;
        this.updateMe();
        return node;
    }
    // Removes existing sub-node at the given index in the sub-nodes list.
    removeNode(index) {
        let currLength = this.nodes.length;
        if (index < 0 || index >= currLength)
            throw new Error("replaceNode: invalid index " + index);
        this.nodes.splice(index, 1);
        // update indexes of the nodes after the removed one
        for (let i = index; i < currLength; i++)
            this[i].index = i;
        this.updateMe();
    }
    // Removes all sub-nodes.
    removeAllNodes() {
        let currLength = this.nodes.length;
        if (currLength > 0) {
            this.nodes.splice(0, currLength);
            this.updateMe();
        }
    }
    // Expands all nodes.
    expandAll() {
        for (let node of this.nodes) {
            node.expandAll();
        }
    }
    // Colapses all nodes.
    collapseAll() {
        for (let node of this.nodes) {
            node.collapseAll();
        }
    }
    render() {
        return this.nodes;
    }
}


/***/ }),

/***/ "./lib/util/LocalStyles.js":
/*!*********************************!*\
  !*** ./lib/util/LocalStyles.js ***!
  \*********************************/
/*! exports provided: ComponentWithLocalStyles, mergeSlices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWithLocalStyles", function() { return ComponentWithLocalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSlices", function() { return mergeSlices; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mimcss */ "mimcss");
/* harmony import */ var mimcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mimcss__WEBPACK_IMPORTED_MODULE_1__);


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ComponentWithLocalStyles class is a base class for components that define local CSS styles.
// When this component is mounted it creates a new <style> element (within the <head> element).
// All class names and variable names defined within this style will have a unique ID added to
// them in order to avoid duplication of names among other components (of the same or of different
// type. This class also publishes a service implementing the ILocalStyleService
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ComponentWithLocalStyles extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
            let propVal = Object(mimcss__WEBPACK_IMPORTED_MODULE_1__["getStylePropValue"])(propName, props[propName]);
            this.cssomRule.style[this.replace(propName)] = this.replace(propVal);
        }
    }
    // Sets value for a style property. Property name can use the (*) marker, which will be
    // substituted with the unique ID.
    removeProperty(propName) {
        this.cssomRule.style.removeProperty(this.replace(propName));
    }
}
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
// Combines arbitrary number of style objects merging later into the earlier ones. This method
// always returns an object - even if empty
function mergeStyles(...styles) {
    // create an empty object for accumulating style properties
    let resStyle = {};
    mergeStylesTo(resStyle, ...styles);
    return resStyle;
}
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
// Combines arbitrary number of Slice objects merging classes, styles, properties and content
function mergeSlices(...slices) {
    let resSlice = {};
    mergeSlicesTo(resSlice, ...slices);
    return resSlice;
}
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
/**
 * Converts names with dashes into names in camelCase, where every character after a dash is
 * capitalized and dashes are removed.
 */
function dashToCamel(dash) {
    if (!dash)
        return dash;
    return dash.replace(/-([a-zA-Z])/g, (x, $1) => $1.toUpperCase());
}
/**
 * Converts camelCase to dash-case
 * @param camel
 */
function camelToDash(camel) {
    return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}


/***/ }),

/***/ "./lib/virt/ScrollAxis.js":
/*!********************************!*\
  !*** ./lib/virt/ScrollAxis.js ***!
  \********************************/
/*! exports provided: ScrollAxis, ScrollAxisAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollAxis", function() { return ScrollAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollAxisAction", function() { return ScrollAxisAction; });
/**
 * The ScrollAxis class represents a single axis of data, which consists of items, and performs
 * calculations during scrolling back and forth along the axis. The ScrollAxis class itself doesn't
 * have any visual representation and only serves as an implementation of the algorithm that
 * helps virtualize scrolling - that is display only small subset of data items and add/remove
 * items as scrolling happens.
 *
 * VAxis assumes the use of 3 DOM elements:
 *	- frame - the "outer" element which displays the scrollbar when necessary
 *	- wall - the "inner" element which has the size of the entire possible set of items. It is
 *		needed to make scrolling more-or-less accurate.
 *	- subset - the element that displays only items that fit the frame plus a certain number of
 *		additional items for "overscan".
 *
 * VAxis calculates average item size by dividing the size of the data by the number of items.
 * The average value is recalculated every time items are added to or deleted from the subset thus
 * accomodating items with differen sizes. Based on the average value the wall element is sized
 * to include the entire data set, which helps to achieve more-or-less accurate scroll
 * positioning.
 *
 * VAxis uses minimum, optimal and maximum overscan number of items on both sides of the frame and
 * makes sure that the actual number of items is within these minimum and maximum values. During
 * scrolling, if the actual overscan number becomes less than the minimum, new items are added; if
 * it becomes more then the maximum, items are deleted. When items are added they are added up to
 * the optimal overscan number.
 */
class ScrollAxis {
    constructor(minOverscan, optOverscan, maxOverscan) {
        this.minOverscan = minOverscan;
        this.optOverscan = optOverscan;
        this.maxOverscan = maxOverscan;
    }
    /**
     * Measures the size occupied by the current data set relative to the size of the frame
     * and determines whether we need to add/remvove items. This method should be called when:
     *	- The total number of items in the data set changes.
     *	- The size of the frame element changes.
     *	- The frame element is scrolled.
     *
     * @param totalCount Number of items in the entire data set
     * @param firstItem Index of the first item currently in the subset
     * @param itemCount Number of items currently in the subset
     * @param frameSize Current size in pizels of the frame element
     * @param wallSize Current size in pixels of the wall element
     * @param subsetSize Current size in pixels of the subset element
     * @param scrollPos Current or new scroll position.
     */
    measure(totalCount, oldFirst, oldCount, oldAvgItemSize, frameSize, wallSize, subsetSize, scrollPos) {
        // prepare the object to be returned
        let retAction = new ScrollAxisAction();
        if (totalCount === 0)
            return retAction;
        else if (oldCount === 0)
            throw new Error("itemCount cannot be zero");
        let oldLast = oldFirst + oldCount - 1;
        let totalLast = totalCount - 1;
        // calculate new average item size based on the number of items in the current subset
        // and the current size of the data element.
        let newAvgItemSize = subsetSize / oldCount;
        if (oldAvgItemSize)
            newAvgItemSize = (newAvgItemSize + oldAvgItemSize) / 2;
        // based on the scrolling position and the average size estimate what items would fit inside
        // the frame element.
        let fitFirst = Math.min(Math.floor(scrollPos / newAvgItemSize), totalLast);
        let fitLast = Math.min(Math.ceil((scrollPos + frameSize) / newAvgItemSize), totalLast);
        // get new first and last  indices with minimal, optimal and maximum overscan
        let minOverscanFirst = Math.max(fitFirst - this.minOverscan, 0);
        let optOverscanFirst = Math.max(fitFirst - this.optOverscan, 0);
        let maxOverscanFirst = Math.max(fitFirst - this.maxOverscan, 0);
        let minOverscanLast = Math.min(fitLast + this.minOverscan, totalLast);
        let optOverscanLast = Math.min(fitLast + this.optOverscan, totalLast);
        let maxOverscanLast = Math.min(fitLast + this.maxOverscan, totalLast);
        let newFirst = oldFirst > minOverscanFirst || oldFirst < maxOverscanFirst ? optOverscanFirst : oldFirst;
        let newLast = oldLast < minOverscanLast || oldLast > maxOverscanLast ? optOverscanLast : oldLast;
        if (newFirst > newLast)
            console.error(`Wrong ScrollAxis calculation: newFirst '${newFirst}' is greater than newLast '${newLast}'`);
        // set what we already know into the return object
        retAction.newFirst = newFirst;
        retAction.newLast = newLast;
        retAction.newAvgItemSize = newAvgItemSize;
        retAction.newWallSize = Math.ceil(totalCount * newAvgItemSize);
        retAction.newSubsetOffset = Math.ceil(newFirst * newAvgItemSize);
        // now that we have the indices of the items we want, determine what items should be
        // added/removed in the beginning and the end
        if (newFirst == oldFirst && newLast == oldLast) {
            // if the new dataset is the same as the old one, don't add/remove any items
            retAction.noAddRemoveNeeded = true;
        }
        else if (newFirst > oldLast || newLast < oldFirst) {
            // if the old and the new datasets don't intersect, remove all existing and add all
            // new items.
            retAction.neeedToRemoveAllItems = true;
        }
        else {
            if (newFirst < oldFirst)
                retAction.countToAddAtStart = oldFirst - newFirst;
            else if (newFirst > oldFirst)
                retAction.countToRemoveAtStart = newFirst - oldFirst;
            if (newLast < oldLast)
                retAction.countToRemoveAtEnd = oldLast - newLast;
            else if (newLast > oldLast)
                retAction.countToAddAtEnd = newLast - oldLast;
        }
        return retAction;
    }
}
/**
 * The ScrollAxisAction class represents the action(s) that should be done after the ScrollAxis
 * performed calculations based on the current state of the frame, wall and data. The actions
 * are instructions to add or remove items and to set wall size and data offset.
 */
class ScrollAxisAction {
    constructor() {
        // New avearage item size
        this.newAvgItemSize = 0;
        // New size that should be set to the wall element
        this.newWallSize = 0;
        // New offset of the subset element from the wall element
        this.newSubsetOffset = 0;
        // Index of the first item that should be in the subset
        this.newFirst = 0;
        // Index of the last item that should be in the subset
        this.newLast = 0;
        // Flag indicating whether the caller should neither add nor remove any items.
        this.noAddRemoveNeeded = false;
        // Flag indicating whether the caller should remove all existing items. If this flag is set
        // to true, then the caller should remove all existing items and then add all items from
        // newFirst to newLast
        this.neeedToRemoveAllItems = false;
        // Number of items to remove at the beginning. If not zero, this is the items from oldFirst
        // to newFirst-1.
        this.countToRemoveAtStart = 0;
        // Number of items to remove at the end. If not zero, this is the items from newLast+1
        // to oldLast.
        this.countToRemoveAtEnd = 0;
        // Number of items to add at the beginning. If not zero, this is the items from newFirst
        // to oldFirst-1.
        this.countToAddAtStart = 0;
        // Number of items to add at the end. If not zero, this is the items from oldLast+1
        // to newLast.
        this.countToAddAtEnd = 0;
    }
}


/***/ }),

/***/ "./lib/virt/VTable.js":
/*!****************************!*\
  !*** ./lib/virt/VTable.js ***!
  \****************************/
/*! exports provided: VTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTable", function() { return VTable; });
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mimbl */ "mimbl");
/* harmony import */ var mimbl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mimbl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollAxis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollAxis */ "./lib/virt/ScrollAxis.js");
/* harmony import */ var _util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/LocalStyles */ "./lib/util/LocalStyles.js");



/**
 * "Virtualized" table that renders only a subset of a dataset and changes this subset
 * as the user scrolls back and forth.
 *
 * VTable uses the following 3 DOM elements:
 *  - frame - the "outer" `<div>` element which displays the scrollbars when necessary
 *  - wall - the "inner" `<div>` element which has the size of the entire possible table. It is
 *    needed to make scrolling more-or-less accurate.
 *  - table - the `<table>` element that contains only rows and columns that fit the frame plus
 *    a certain number for "overscan".
 *
 * VTable calculates average row height and column width by dividing the size of the table
 * by the number of rows/columns. These average values are recalculated every time rows and
 * columns are added or deleted from the table. Based on these average values the wall element
 * is sized to include the entire dataset, which helps to achieve more-or-less accurate scrolling
 * positioning.
 *
 * VTable uses minimum, optimal and maximum overscan number of rows and columns on all sides of
 * the frame and makes sure that the actual number of rows/columns is within these minimum and
 * maximum values. During scrolling, if the actual overscan number becomes less than the minimum,
 * new cells are added and if it becomes more then the maximum cells are deleted.
 */
class VTable extends _util_LocalStyles__WEBPACK_IMPORTED_MODULE_2__["ComponentWithLocalStyles"] {
    constructor(props) {
        super(props);
        this.frameRef = (r) => this.frame = r;
        this.wallRef = (r) => this.wall = r;
        this.tableRef = (r) => this.table = r;
        this.avgRowHeight = 0;
        this.avgColWidth = 0;
        // negative values indicate that we haven't measured any sizes yet.
        this.latestScrollTop = -1;
        this.latestScrollLeft = -1;
        // set initial size of the wall element based on some hard-coded values. It will be
        // changed as soon as we render and start measuring our elements
        this.wallHeight = this.props.totalRowCount * 25;
        this.wallWidth = this.props.totalColCount * 80;
        this.minRowOverscan = this.props.rowOverscan ? this.props.rowOverscan[0] : 3;
        this.optRowOverscan = this.props.rowOverscan ? this.props.rowOverscan[1] : 6;
        this.maxRowOverscan = this.props.rowOverscan ? this.props.rowOverscan[2] : 12;
        this.minColOverscan = this.props.colOverscan ? this.props.colOverscan[0] : 3;
        this.optColOverscan = this.props.colOverscan ? this.props.colOverscan[1] : 6;
        this.maxColOverscan = this.props.colOverscan ? this.props.colOverscan[2] : 12;
        this.prepareLocalStyles();
    }
    willMount() {
        this.rows = [];
        // fill in initial dataset
        let rowCount = this.props.totalRowCount < 10 ? this.props.totalRowCount : 10;
        let colCount = this.props.totalColCount < 10 ? this.props.totalColCount : 10;
        for (let i = 0; i < rowCount; i++) {
            let vrow = new VRow();
            for (let j = 0; j < colCount; j++)
                vrow.addCell(this.getCellData(i, j));
            // add the new row at the start
            this.rows.push(vrow);
        }
        // remember the dataset size
        this.firstRow = 0;
        this.lastRow = rowCount - 1;
        this.firstCol = 0;
        this.lastCol = colCount - 1;
        this.vAxis = new _ScrollAxis__WEBPACK_IMPORTED_MODULE_1__["ScrollAxis"](this.minRowOverscan, this.optRowOverscan, this.maxRowOverscan);
        this.hAxis = new _ScrollAxis__WEBPACK_IMPORTED_MODULE_1__["ScrollAxis"](this.minColOverscan, this.optColOverscan, this.maxColOverscan);
    }
    prepareLocalStyles() {
        this.frameID = this.decorateName("frame");
        this.createStyleRule("frame", "#frame(*)", {
            width: "100%",
            height: "100%",
            overflow: "auto",
        });
        this.wallID = this.decorateName("wall");
        this.createStyleRule("wall", "#wall(*)", {
            position: "relative",
            overflow: "hidden",
        });
        this.tableID = this.decorateName("table");
        this.createStyleRule("table", "#table(*)", {
            position: "absolute",
            borderCollapse: "collapse",
            border: [1, "solid", "black"],
        });
    }
    render() {
        // during each rendering, we schedule the measuring functionality, which will determing
        // whether we need to add/remove cells. The measuring function will run in the next tick
        // after the render and will schedule update in the same tick if necessary.
        this.callMeBeforeUpdate(this.measureAndUpdate);
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { id: this.frameID, ref: this.frameRef, scroll: this.onScroll },
            mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("div", { id: this.wallID, ref: this.wallRef },
                mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("table", { id: this.tableID, ref: this.tableRef },
                    mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("tbody", null, this.renderRows))));
    }
    renderRows() {
        return this.rows;
    }
    /**
     * Requests data for the given cell. This method can be overridden by derived classes
     */
    getCellData(row, col) {
        return this.props.getCellCallback ? this.props.getCellCallback(row, col) : undefined;
    }
    /**
     * Requests data for the given cell, which is part of the column header. This method can be
     * overridden by derived classes.
     */
    getColHeaderCellData(row, col) {
        return this.props.getColHeaderCellCallback ? this.props.getColHeaderCellCallback(row, col) : undefined;
    }
    /**
     * Requests data for the given cell, which is part of the column footer. This method can be
     * overridden by derived classes.
     */
    getColFooterCellData(row, col) {
        return this.props.getColFooterCellCallback ? this.props.getColFooterCellCallback(row, col) : undefined;
    }
    /**
     * Requests data for the given cell, which is part of the row header. This method can be
     * overridden by derived classes.
     */
    getRowHeaderCellData(row, col) {
        return this.props.getRowHeaderCellCallback ? this.props.getRowHeaderCellCallback(row, col) : undefined;
    }
    /**
     * Requests data for the given cell, which is part of the row footer. This method can be
     * overridden by derived classes.
     */
    getRowFooterCellData(row, col) {
        return this.props.getRowFooterCellCallback ? this.props.getRowFooterCellCallback(row, col) : undefined;
    }
    /**
     * Measures the size occupied by the current data set relative to the size of the container
     * and determines whether we need to add/remove cells. If we do, we schedule re-rendering.
     */
    measureAndUpdate() {
        if (this.rowCount === 0 || this.colCount === 0)
            return;
        let frameRect = this.frame.getBoundingClientRect();
        let wallRect = this.wall.getBoundingClientRect();
        let tableRect = this.table.getBoundingClientRect();
        if (this.latestScrollTop != this.frame.scrollTop) {
            // console.log( `Measuring height: scroll top = ${this.frame.scrollTop}, rows: ${this.rowCount}, ` +
            // 				`wall height = ${wallRect.height}, table height = ${tableRect.height}`);
            let vAxisAction = this.vAxis.measure(this.props.totalRowCount, this.firstRow, this.rowCount, this.avgRowHeight, frameRect.height, wallRect.height, tableRect.height, this.frame.scrollTop);
            // console.log( `Estimated: wall height = ${vAxisAction.newWallSize}, row height = ${vAxisAction.newAvgItemSize}`);
            // remember the new average row height and the latest vertical scrolling position
            this.avgRowHeight = vAxisAction.newAvgItemSize;
            this.latestScrollTop = this.frame.scrollTop;
            // add/remove rows if needed
            if (!vAxisAction.noAddRemoveNeeded)
                this.updateRows(vAxisAction);
            // schedule updating of wall height and subset vertical offset if needed
            if (vAxisAction.newWallSize != wallRect.height || vAxisAction.newSubsetOffset != tableRect.top - wallRect.top) {
                this.callMeAfterUpdate(() => {
                    this.table.style.top = vAxisAction.newSubsetOffset + "px";
                    this.wall.style.height = vAxisAction.newWallSize + "px";
                });
            }
        }
        if (this.latestScrollLeft != this.frame.scrollLeft) {
            // console.log( `Measuring width: scroll left = ${this.frame.scrollLeft}, cols: ${this.colCount}, ` +
            // 				`wall width = ${wallRect.width}, table width = ${tableRect.width}`);
            let hAxisAction = this.hAxis.measure(this.props.totalColCount, this.firstCol, this.colCount, this.avgColWidth, frameRect.width, wallRect.width, tableRect.width, this.frame.scrollLeft);
            // console.log( `Estimated: wall width = ${hAxisAction.newWallSize}, col width = ${hAxisAction.newAvgItemSize}`);
            // remember the new average column width and the latest horizontal scrolling position
            this.avgColWidth = hAxisAction.newAvgItemSize;
            this.latestScrollLeft = this.frame.scrollLeft;
            // add/remove columns if needed
            if (!hAxisAction.noAddRemoveNeeded)
                this.updateCols(hAxisAction);
            // schedule updating of wall width and subset horizontal offset if needed
            if (hAxisAction.newWallSize != wallRect.width || hAxisAction.newSubsetOffset != tableRect.left - wallRect.left) {
                this.callMeAfterUpdate(() => {
                    this.table.style.left = hAxisAction.newSubsetOffset + "px";
                    this.wall.style.width = hAxisAction.newWallSize + "px";
                });
            }
        }
    }
    /**
     * Adds/removes rows as indicated by the given ScrollAxisAction dealing with the vertical
     * scrolling.
     */
    updateRows(axisAction) {
        // console.log( `Updating rows from ${this.firstRow} - ${this.lastRow} to ${axisAction.newFirst} - ${axisAction.newLast}`);
        if (axisAction.neeedToRemoveAllItems) {
            this.rows = [];
/////////////////////////
            console.log(`Removed all ${this.rowCount} existing rows`);
//////////////////////
            for (let i = axisAction.newFirst; i <= axisAction.newLast; i++) {
                let vrow = new VRow();
                for (let j = this.firstCol; j <= this.lastCol; j++)
                    vrow.addCell(this.getCellData(i, j));
                // add the new row at the end
                this.rows.push(vrow);
            }
/////////////////////////
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} rows`);
//////////////////////
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                this.rows.splice(this.rowCount - axisAction.countToRemoveAtEnd, axisAction.countToRemoveAtEnd);
/////////////////////////////
                console.log(`Removed ${axisAction.countToRemoveAtEnd} rows from bottom`);
//////////////////////////
            }
            if (axisAction.countToRemoveAtStart > 0) {
                this.rows.splice(0, axisAction.countToRemoveAtStart);
/////////////////////////////
                console.log(`Removed ${axisAction.countToRemoveAtStart} rows from top`);
//////////////////////////
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.lastRow + 1; i <= axisAction.newLast; i++) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.getCellData(i, j));
                    // add the new row at the start
                    this.rows.push(vrow);
                }
/////////////////////////////
                console.log(`Add ${axisAction.countToAddAtEnd} rows to bottom`);
//////////////////////////
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow - 1; i >= axisAction.newFirst; i--) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.getCellData(i, j));
                    // add the new row at the start
                    this.rows.splice(0, 0, vrow);
                }
/////////////////////////////
                console.log(`Add ${axisAction.countToAddAtStart} rows to top`);
//////////////////////////
            }
        }
        this.firstRow = axisAction.newFirst;
        this.lastRow = axisAction.newLast;
        this.updateMe(this.renderRows);
    }
    /**
     * Adds/removes columns as indicated by the given ScrollAxisAction dealing with the
     * horizontal scrolling.
     */
    updateCols(axisAction) {
        // console.log( `Updating columns from ${this.firstCol} - ${this.lastCol} to ${axisAction.newFirst} - ${axisAction.newLast}`);
        if (axisAction.neeedToRemoveAllItems) {
            for (let i = this.firstRow; i <= this.lastRow; i++) {
                let vrow = this.rows[i - this.firstRow];
                vrow.removeAllCells();
                for (let j = axisAction.newFirst; j <= axisAction.newLast; j++)
                    vrow.addCell(this.getCellData(i, j));
            }
/////////////////////////
            console.log(`Removed all ${this.colCount} existing cols`);
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} cols`);
//////////////////////
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                for (let vrow of this.rows)
                    vrow.removeCellsAtEnd(axisAction.countToRemoveAtEnd);
/////////////////////////////
                console.log(`Removed ${axisAction.countToRemoveAtEnd} cols from right`);
//////////////////////////
            }
            if (axisAction.countToRemoveAtStart > 0) {
                for (let vrow of this.rows)
                    vrow.removeCellsAtStart(axisAction.countToRemoveAtStart);
/////////////////////////////
                console.log(`Removed ${axisAction.countToRemoveAtStart} cols from left`);
//////////////////////////
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.lastCol + 1; j <= axisAction.newLast; j++)
                        vrow.addCell(this.getCellData(i, j));
                }
/////////////////////////////
                console.log(`Add ${axisAction.countToAddAtEnd} cols to right`);
//////////////////////////
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.firstCol - 1; j >= axisAction.newFirst; j--)
                        vrow.insertCell(this.getCellData(i, j));
                }
/////////////////////////////
                console.log(`Add ${axisAction.countToAddAtStart} cols to left`);
//////////////////////////
            }
        }
        this.firstCol = axisAction.newFirst;
        this.lastCol = axisAction.newLast;
    }
    onScroll(e) {
        this.callMeBeforeUpdate(this.measureAndUpdate);
    }
    // Counts of rows and columns
    get rowCount() { return this.lastRow - this.firstRow + 1; }
    get colCount() { return this.lastCol - this.firstCol + 1; }
    get Rows() { return `${this.firstRow} - ${this.lastRow}`; }
    get Cols() { return `${this.firstCol} - ${this.lastCol}`; }
}
class VRow extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.cells = [];
    }
    addCell(data) {
        this.cells.push(new VCell(data));
        this.updateMe();
    }
    insertCell(data) {
        this.cells.splice(0, 0, new VCell(data));
        this.updateMe();
    }
    removeAllCells() {
        this.cells = [];
        this.updateMe();
    }
    removeCellsAtStart(count) {
        this.cells.splice(0, count);
        this.updateMe();
    }
    removeCellsAtEnd(count) {
        this.cells.splice(this.cells.length - count, count);
        this.updateMe();
    }
    render() {
        return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("tr", null, this.cells);
    }
}
class VCell extends mimbl__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(data) {
        super();
        if (data === undefined)
            this.data = undefined;
        else if (typeof data === "object" && data.content)
            this.data = data;
        else
            this.data = { content: data };
    }
    render() {
        if (this.data === undefined)
            return undefined;
        else {
            return mimbl__WEBPACK_IMPORTED_MODULE_0__["jsx"]("td", { class: this.data.class, style: this.data.style, rowspan: this.data.rowSpan ? this.data.rowSpan : undefined, colspan: this.data.colSpan ? this.data.colSpan : undefined }, this.data.content);
        }
    }
}


/***/ }),

/***/ "mimbl":
/*!**************************************************************************************!*\
  !*** external {"root":"mimbl","commonjs2":"mimbl","commonjs":"mimbl","amd":"mimbl"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimbl__;

/***/ }),

/***/ "mimcss":
/*!******************************************************************************************!*\
  !*** external {"root":"mimcss","commonjs2":"mimcss","commonjs":"mimcss","amd":"mimcss"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimcss__;

/***/ }),

/***/ "mimurl":
/*!******************************************************************************************!*\
  !*** external {"root":"mimurl","commonjs2":"mimurl","commonjs":"mimurl","amd":"mimurl"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mimurl__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9EaWFsb2cudHN4Iiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL01zZ0JveC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvUG9wdXAudHN4Iiwid2VicGFjazovL21pbWNsLy4vc3JjL3JvdXRlci9Sb3V0ZXIudHN4Iiwid2VicGFjazovL21pbWNsLy4vc3JjL3RyZWUvVHJlZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlQXBpLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3RyZWUvVHJlZU5vZGUudHN4Iiwid2VicGFjazovL21pbWNsLy4vc3JjL3RyZWUvVHJlZU5vZGVDb250YWluZXIudHN4Iiwid2VicGFjazovL21pbWNsLy4vc3JjL3V0aWwvTG9jYWxTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbWNzc1wiLFwiY29tbW9uanMyXCI6XCJtaW1jc3NcIixcImNvbW1vbmpzXCI6XCJtaW1jc3NcIixcImFtZFwiOlwibWltY3NzXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7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SyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFOUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFOUUsSUFBSSxDQUFDLGtCQUFr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QUFLLENBQU0sQ0FBQztJQUM5QixDQUFDO0NBQ0Q7QUFJRCxNQUFNLEtBQU0sU0FBUSwrQ0FBYTtJQUloQyxZQUFhLElBQVM7UUFFckIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLElBQUksS0FBSyxTQUFTO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2FBQ2xCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxNQUFNO1FBRVosSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFDMUIsT0FBTyxTQUFTLENBQUM7YUFFbEI7WUFDQyxPQUFPLGtEQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ3RELE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDMUQsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDZDtTQUNMO0lBQ0YsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7QUM1cEJELG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6Im1pbWNsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltY3NzXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltY3NzXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW1jc3NcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNsXCJdID0gZmFjdG9yeShyb290W1wibWltYmxcIl0sIHJvb3RbXCJtaW1jc3NcIl0sIHJvb3RbXCJtaW11cmxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0FuZERyb3BEYXRhIHN0YXRpYyBjbGFzcyBkZWFscyB3aXRoIGRhdGEgb2YgYXJiaXRyYXJ5IHR5cGVzIGJlaW5nIHRyYW5zZmVyZWRcclxuLy8gZHVyaW5nIGRyYWcgJiBkcm9wIG9wZXJhdGlvbnMuIFdoZW4gYSBkcmFnIG9wZXJhdGlvbiBzdGFydHMsIHBpZWNlcyBvZiBkYXRhIGFyZSBhZGRlZCB0byBhIG1hcFxyXG4vLyB3aXRoIHR5cGVzIChmb3JtYXRzKSBhcyBrZXlzICh0aGVzZSBhcmUgdGhlIHNhbWUgZm9ybWF0cyB0aGF0IGFyZSBrZXB0IGluIHRoZSBIVE1MNSBEYXRhVHJhbnNmZXJcclxuLy8gb2JqZWN0LiBEYXRhIGlzIGFkZGVkIHVzaW5nIHRoZSBTZXRPYmplY3REYXRhIG1ldGhvZCBvZiB0aGUgSURyYWdTdGFydEV2ZW50IGludGVyZmFjZS4gV2hlbiB0aGVcclxuLy8gZHJvcCBvY2N1cnMsIHRoZSBHZXRPYmplY3REYXRhIG9mIHRoZSBJRHJhZ1RhcmdldEV2ZW50IGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGRhdGEuIFRoZSBtYXAgaXNcclxuLy8gY2xlYXJlZCB3aGVuIHRoZSBkcmFnIG9wZXJhdGlvbiBlbmRzIC0gcmVnYXJkbGVzcyB3aGV0aGVyIGl0IHdhcyBzdWNjZXNzZnVsIG9yIHdhcyBjYW5jZWxlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmFnQW5kRHJvcERhdGFcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0eXBlIHx8IGRhdGEgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLnNldCggdHlwZSwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldE9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5nZXQoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByZW1vdmVPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuZGVsZXRlKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxPYmplY3REYXRhKCk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5jbGVhcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUgaW4gdGhlIGdpdmVuIERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0cHVibGljIHN0YXRpYyBoYXNUeXBlKCBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlciwgdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgaW1wbGVtbnRzIHR5cGVzIHZpYSBET01TdHJpbmdMaXN0LCB3aGNpaCBkb2Vzbid0IGhhdmUgaW5kZXhPZlxyXG5cdFx0aWYgKGRhdGFUcmFuc2Zlci50eXBlcy5pbmRleE9mKVxyXG5cdFx0XHRyZXR1cm4gZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YoIHR5cGUpID49IDA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAoZGF0YVRyYW5zZmVyLnR5cGVzIGFzIGFueSBhcyBET01TdHJpbmdMaXN0KS5jb250YWlucyggdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBvYmplY3QgZm9ybWF0cyB0byBvYmplY3QgdmFsdWVzLlxyXG5cdHByaXZhdGUgc3RhdGljIGRhdGFNYXA6IE1hcDxzdHJpbmcsYW55PiA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFbXVsRGF0YVRyYW5zZmVyIGludGVyZmFjZSByZXByZXNlbnRzIG9iamVjdHMgdGhhdCBlbXVsYXRlIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlblxyXG4vLyB0aGUgZHJhZyBzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlclxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0aW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0aW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0aW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0aXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bERhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdFxyXG4vLyBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byB1cGRhdGUgdGhlIGRyYWcgZmVlZGJhY2ssIHJlcGxhY2luZyBhbnkgcHJldmlvdXNseSBzcGVjaWZpZWRcclxuXHQvLyBmZWVkYmFjay5cclxuXHRwdWJsaWMgc2V0RHJhZ0ltYWdlKCBpbWFnZTogRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGltYWdlO1xyXG5cdFx0dGhpcy5pbWFnZUVsbVggPSB4O1xyXG5cdFx0dGhpcy5pbWFnZUVsbVkgPSB5O1xyXG5cclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBoYXZlIHNldERyYWdJbWFnZSBtZXRob2QgaW4gaXRzIERhdGFUcmFuc2ZlciBjbGFzcy5cclxuXHRcdGlmIChzdXBlci5zZXREcmFnSW1hZ2UpXHJcblx0XHRcdHN1cGVyLnNldERyYWdJbWFnZSggaW1hZ2UsIHgsIHkpO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgYSBuZXcgaW1hZ2UgZWxlbWVudCB3YXMgc2V0LCBzbyB0aGF0IHdlIHdpbGwgXCJwcmVwYXJlXCIgaXQgb24gdGhlIG5leHRcclxuXHRcdC8vIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZWZmZWN0QWxsb3dlZCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5lZmZlY3RBbGxvd2VkRXggPSB2YWw7XHJcblx0XHRzdXBlci5lZmZlY3RBbGxvd2VkID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4ID09PSB1bmRlZmluZWQgPyBzdXBlci5lZmZlY3RBbGxvd2VkIDogdGhpcy5lZmZlY3RBbGxvd2VkRXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBkcm9wRWZmZWN0KCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmRyb3BFZmZlY3QgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmRyb3BFZmZlY3QgOiB0aGlzLmRyb3BFZmZlY3RFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0RGF0YSggZm9ybWF0OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzdXBlci5zZXREYXRhKCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyRGF0YSggZm9ybWF0KTtcclxuXHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRwdWJsaWMgaW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0cHVibGljIGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZVxyXG4vLyBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuIFRoaXMgb2JqZWN0IGlzIHVzZWQgdW5kZXIgRWRnZSwgd2hpY2ggZG9lc24ndFxyXG4vLyBpbXBsZW1lbnQgdGhlIG5hdGl2ZSBEYXRhVHJhbnNmZXIgb2JqZWN0IHByb3Blcmx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXIgaW1wbGVtZW50cyBJRW11bERhdGFUcmFuc2ZlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdFx0dGhpcy5tX2l0ZW1zID0gbnVsbDtcclxuXHRcdHRoaXMubV9maWxlcyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RBbGxvd2VkKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGRyb3BFZmZlY3QoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMuZGF0YU1hcC5zZXQoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IHRoaXMuZGF0YU1hcC5nZXQoIGZvcm1hdCk7XHJcblx0XHRyZXR1cm4gcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHM7XHJcblx0fVxyXG5cclxuXHRjbGVhckRhdGEoIGZvcm1hdD86IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIGdldCBmaWxlcygpOiBGaWxlTGlzdCB7IHJldHVybiB0aGlzLm1fZmlsZXM7IH1cclxuICAgIGdldCBpdGVtcygpOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCB7IHJldHVybiB0aGlzLm1faXRlbXM7IH1cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBhbGxvd2VkIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgYWxsb3dlZCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZWZmZWN0QWxsb3dlZEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgZHJvcCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGRyb3AgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBNYXAgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRvIGRhdGEgaXRlbXMuXHJcblx0cHJpdmF0ZSBkYXRhTWFwOiBNYXA8c3RyaW5nLHN0cmluZz47XHJcblxyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKS4gVGhpcyBhcnJheSBjaGFuZ2VzIGV2ZXJ5IHRpbWUgZGF0YSBpcyBzZXQgb3IgY2xlYXJlZC5cclxuXHRwcml2YXRlIGRhdGFGb3JtYXRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIG1fZmlsZXM6IEZpbGVMaXN0O1xyXG4gICAgcHJpdmF0ZSBtX2l0ZW1zOiBEYXRhVHJhbnNmZXJJdGVtTGlzdDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wRWZmZWN0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBmb3IgZGlmZmVyZW50IGRyYWcgJiBkcm9wIGVmZmVjdHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnRHJvcEVmZmVjdFxyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdBbGxvd2VkRWZmZWN0c1xyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG5cdENvcHlNb3ZlID0gXCJjb3B5TW92ZVwiLFxyXG5cdENvcHlMaW5rID0gXCJjb3B5TGlua1wiLFxyXG5cdExpbmtNb3ZlID0gXCJsaW5rTW92ZVwiLFxyXG5cdEFsbCA9IFwiYWxsXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZUV2ZW50IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBldmVudCBoYW5kbGVycyBvbiB0aGVcclxuLy8gZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRyZWFkb25seSBkcmFnRXZlbnQ6IERyYWdFdmVudDtcclxuXHJcblx0Ly8gU2V0cyBkYXRhIHdpdGggdGhlIGdpdmVuIHR5cGUuIEZvciB0ZXh0IGRhdGEgdGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiBNSU1FIHR5cGVzLlxyXG5cdHNldERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0RXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHRhcmdldCBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueTtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdTb3VyY2UgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJhZyBzb3VyY2UuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnU291cmNlIGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIERhdGEgdG8gYmVcclxuLy8gcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgc3VwcGxpZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyYWdTdGFydCBjYWxsYmFja1xyXG4vLyBhbmQgdXNpbmcgdGhlIGUuc2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlXHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gc3RhcnRzIGZvciB0aGUgZWxlbWVudC5cclxuXHRvbkRyYWdTdGFydDogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBlbmRzLlxyXG5cdG9uRHJhZ0VuZD86IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuXHJcblx0b25EcmFnPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0b1xyXG4vLyBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBkaXJlY3RseSB2aWEgdGhlIGRhdGEgcHJvcGVydHkuIFRoaXNcclxuLy8gaW50ZXJmYWNlIGFsbG93cyBzaW1wbGlmeWluZyBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiB3aXRob3V0IHRoZSBuZWVkIHRvIGltcGxlbWVudCBhbnlcclxuLy8gY2FsbGJhY2tzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRHJhZ1NvdXJjZVxyXG57XHJcblx0Ly8gT2JqZWN0IGhvbGRpbmcgZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIGRyYWcgb3BlcmF0aW9uLiBFYWNoIHBpZWNlIG9mIGRhdGEgaXMgaWRlbnRpZmllZCBieVxyXG5cdC8vIGEgdW5pcXVlIHR5cGUgKGFrYSBmb3JtYXQpIHN0cmluZy5cclxuXHRkYXRhOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHJcblx0Ly8gQWxsb3dlZCBkcm9wIGVmZmVjdHMuIElmIGRlZmluZWQsIHRoaXMgbWVtYmVyIGlzIHVzZWQgb25seSBpZiBlaXRoZXIgdGhlIG9uRHJhZ1N0YXJ0XHJcblx0Ly8gY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgb3IgaXQgZG9lc24ndCBzZXQgYWxsb3dlZCBkcm9wIGVmZmVjdHMuXHJcblx0YWxsb3dlZEVmZmVjdHM/OiBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERyYWcgc291cmNlIHByb3BlcnR5IChkcmFnU291cmNlKSBjYW4gaGF2ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBzaGFwZXM6XHJcbi8vXHQtIElEcmFnU291cmNlIGludGVyZmFjZSAtIGRyYWcgYmVoYXZpb3IgYW5kIGRhdGEgdG8gYmUgcGFzc2VkIHdpdGggaXQgaXMgZGV0ZXJtaW5lZFxyXG4vL1x0XHRieSBpbXBsZW1lbnRpbmcgdGhlIHJlbGV2YW50IGNhbGxiYWNrcy5cclxuLy9cdC0gSVNpbXBsZURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpc1xyXG4vL1x0XHRkZWZpbmVkIGJ5IHRoZSBkYXRhIHByb3BlcnR5LlxyXG4vL1x0LSBcImVsbS10ZXh0XCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50XHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSBcImVsbS1odG1sXCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3Mgb3V0ZXJIVE1MXHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSB0cnVlIC0gZXF1aXZhbGVudCB0byBcImVsbS1odG1sXCIgc3RyaW5nLlxyXG4vL1x0LSBmYWxzZSAtIGRyYWcgYmVoYXZpb3IgaXMgc3VwcHJlc3NlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIERyYWdTb3VyY2VQcm9wVHlwZSA9IElEcmFnU291cmNlIHwgSVNpbXBsZURyYWdTb3VyY2UgfCBib29sZWFuIHwgXCJlbG0tdGV4dFwiIHwgXCJlbG0taHRtbFwiO1xyXG5cclxuXHJcblxyXG4vLyBTdHJpbmcgdXNlZCBhcyBhIHR5cGUgKGFrYSBmb3JtYXQpIHdoZW4gYW4gZWxlbWVudCBvYmplY3QgaXMgYmVpbmcgZHJhZ2dlZC5cclxuZXhwb3J0IGNvbnN0IERORFRZUEVfRUxFTUVOVCA9IFwiYXBwbGljYXRpb24vRE9NRWxlbWVudFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnMgb2ZcclxuLy8gdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyb3AgY2FsbGJhY2sgYW5kIGNhbGxpbmcgdGhlIGUuZ2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgZW50ZXJzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gSWYgdGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSwgdGhlIG9uRHJhZ092ZXJcclxuXHQvLyBhbmQgb25EcmFnTGVhdmUgbWV0aG9kcyB3aWxsIG5vdCBiZSBjYWxsZWQuXHJcblx0b25EcmFnRW50ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGhvdmVycyBvdmVyIHRoZSBlbGVtZW50IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSBvclxyXG5cdC8vIGZhbHNlLCB0aGUgb25EcmFnT3ZlciBtZXRob2Qgd2lsbCBiZSBjb250aW51ZWQgdG8gYmUgY2FsbGVkIGFzIHRoZSBtb3VzZSBtb3Zlcy4gVGhpcyBhbGxvd3NcclxuXHQvLyBzb21lIHBhcnRzIG9mIHRoZSBlbGVtZW50IHRvIGJlIGRyb3AgdGFyZ2V0cyB3aGlsZSBvdGhlcnMgbm90LlxyXG5cdG9uRHJhZ092ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGxlYXZlcyB0aGUgZWxlbWVudCBib3VuZGFyeSBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uXHJcblx0b25EcmFnTGVhdmU/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZGF0YSB3YXMgZHJvcGVkIGluIHRoaXMgZHJvcCB6b25lLlxyXG5cdG9uRHJvcDogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1RhcmdldCBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcm9wIHRhcmdldC4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdUYXJnZXQgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gUmVjZWl2aW5nXHJcbi8vIGRhdGEgaXMgYWNjb21wbGlzaGVkIGJ5IHNwZWNpZnlpbmcgdGhlIGV4cGVjdGVkIHR5cGVzIHZpYSB0aGUgZGF0YVR5cGVzIHByb3BlcnR5IGFuZFxyXG4vLyBpbXBsZW1lbnRpbmcgdGhlIG9uRGF0YURyb3BwZWQgY2FsbGJhY2suXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdGhhdCB0aGUgZHJhZyB0YXJnZXQgY2FuIHJlY2VpdmUuXHJcblx0ZGF0YVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcblx0Ly8gU3R5bGUgdG8gYXBwbHkgZm9yIGRyYWcgZmVlZGJhY2suXHJcblx0ZmVlZGJhY2s/OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGRhdGEgY29udGFpbmluZyBvbmUgb3IgbW9yZSBhcHByb3ByaWF0ZSB0eXBlcyBpcyBkcm9wcGVkLlxyXG5cdC8vIFRoZSBkYXRhIGlzIGRlbGl2ZXJlZCBhcyBhbiBvYmplY3Qgd2hlcmUgcHJvcGVydHkgbmFtZXMgYXJlIGRhdGEgdHlwZXMgYW5kIHZhbHVlcyBhcmVcclxuXHQvLyBkYXRhIHBpZWNlcyBvZiB0aGVzZSB0eXBlcy5cclxuXHRvbkRhdGFEcm9wcGVkOiAoZGF0YToge1t0eXBlOiBzdHJpbmddOiBhbnl9KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERyYWcgdGFyZ2V0IHByb3BlcnR5IChkcmFnVGFyZ2V0KSBjYW4gYmUgZWl0aGVyIElEcmFnVGFyZ2V0IGludGVyZmFjZSBvciByZWZlcmVuY2UgdG8gYW5cclxuLy8gRWxlbWVudC4gSW4gdGhlIGxhdHRlciBjYXNlLCB0aGUgcmVmZXJlbmNlIHdpbGwgYmUgc2V0IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaXMgYW5cclxuLy8gRWxlbWVudCBvYmplY3QuXHJcbmV4cG9ydCB0eXBlIERyYWdUYXJnZXRQcm9wVHlwZSA9IElEcmFnVGFyZ2V0IHwgSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvbGliL2FwaS9taW1cIlxyXG57XHJcblx0aW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4+XHJcblx0e1xyXG5cdFx0ZHJhZ1NvdXJjZT86IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHRcdGRyYWdUYXJnZXQ/OiBEcmFnVGFyZ2V0UHJvcFR5cGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdTb3VyY2VIYW5kbGVyLCBEcmFnU291cmNlRW11bGF0b3J9IGZyb20gXCIuL0RyYWdTb3VyY2VcIlxyXG5pbXBvcnQge0RyYWdUYXJnZXRIYW5kbGVyfSBmcm9tIFwiLi9EcmFnVGFyZ2V0XCJcclxuaW1wb3J0IHsgRHJhZ1NvdXJjZVByb3BUeXBlLCBEcmFnVGFyZ2V0UHJvcFR5cGUgfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnU291cmNlUHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdTb3VyY2VQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gXCJvd25lclNWR0VsZW1lbnRcIiBpbiBlbG1cclxuXHRcdFx0XHRcdD8gbmV3IERyYWdTb3VyY2VFbXVsYXRvciggZWxtLCBwcm9wVmFsKVxyXG5cdFx0XHRcdFx0OiBuZXcgRHJhZ1NvdXJjZUhhbmRsZXIoIGVsbSwgcHJvcFZhbCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnU291cmNlSGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1NvdXJjZVByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgc291cmNlIG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2VIYW5kbGVyOiBEcmFnU291cmNlSGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnVGFyZ2V0UHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdUYXJnZXRQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gbmV3IERyYWdUYXJnZXRIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0SGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgdGFyZ2V0IG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRIYW5kbGVyOiBEcmFnVGFyZ2V0SGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWdpc3RlciBjdXN0b20gcHJvcGVydHkgZmFjdG9yeSBmb3IgZHJhZ1NvdXJjZSBhbmQgZHJhZ1RhcmdldCBwcm9wZXJ0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpXHJcbntcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1NvdXJjZVwiLCBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIpO1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnVGFyZ2V0XCIsIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlcik7XHJcbn1cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7RHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnU291cmNlUHJvcFR5cGUsIElEcmFnU291cmNlLCBJU2ltcGxlRHJhZ1NvdXJjZSwgSURyYWdTb3VyY2VFdmVudCwgRE5EVFlQRV9FTEVNRU5UfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YSwgSUVtdWxEYXRhVHJhbnNmZXIsIEVtdWxEYXRhVHJhbnNmZXIsIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXJ9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG50eXBlIERyYWdFdmVudFR5cGUgPSBcImRyYWdcIiB8IFwiZHJhZ2VuZFwiIHwgXCJkcmFnZW50ZXJcIiB8IFwiZHJhZ2V4aXRcIiB8IFwiZHJhZ2xlYXZlXCIgfCBcImRyYWdvdmVyXCIgfCBcImRyYWdzdGFydFwiIHwgXCJkcm9wXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1N0YXJ0RXZlbnQgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZGlmZmVyZW50IGV2ZW50IGhhbmRsZXJzXHJcbi8vIG9uIHRoZSBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VFdmVudCBpbXBsZW1lbnRzIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRnZXQgZHJhZ0V2ZW50KCk6IERyYWdFdmVudCB7IHJldHVybiB0aGlzLm1fZHJhZ0V2ZW50OyB9XHJcblx0c2V0IGRyYWdFdmVudCggdmFsOiBEcmFnRXZlbnQpIHsgdGhpcy5tX2RyYWdFdmVudCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgZGF0YSB3aXRoIHRoZSBnaXZlbiB0eXBlLiBGb3IgdGV4dCBkYXRhIHRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgTUlNRSB0eXBlcy5cclxuXHRzZXREYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBcIlwiKTtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLnNldE9iamVjdERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cHJpdmF0ZSBtX2RyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUJlaGF2aW9yIGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyB0aGF0IGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW4gbWVjaGFuaXNtc1xyXG4vLyBzZXR1cCBieSBkaWZmZXJlbnQgdHlwZXMgb2YgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnU291cmNlQmVoYXZpb3Jcclxue1xyXG5cdFJlZ3VsYXIgPSAxLFxyXG5cdFNpbXBsZSxcclxuXHRFbG1UZXh0LFxyXG5cdEVsbUh0bWxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eS4gSXRcclxuLy8gaXMgdXNlZCBieSBIVE1MIGVsZW1lbnRzIHRoYXQgbmF0aXZlbHkgc3VwcG9ydCBkcmFnIGFuZCBkcm9wIGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnU291cmNlSGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1NvdXJjZVByb3A6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLXRleHRcIilcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0O1xyXG5cdFx0ZWxzZSBpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLWh0bWxcIiB8fCBkcmFnU291cmNlUHJvcCA9PT0gdHJ1ZSlcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sO1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdTb3VyY2VQcm9wIGFzIElTaW1wbGVEcmFnU291cmNlKS5kYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlO1xyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZSkub25EcmFnU3RhcnQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyO1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHZhbHVlIG9mIGRyYWdTb3VyY2VQcm9wIGluIERyYWdTb3VyY2VIYW5kbGVyIGNvbnN0cnVjdG9yLlwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBtYWtpbmcgdGhlIGVsZW1lbnQgZHJhZ2dhYmxlIGJ5IGFkZGluZyBkcmFnIGV2ZW50cy5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSBuZXcgRHJhZ1NvdXJjZUV2ZW50KCk7XHJcblx0XHR0aGlzLmVsbS5zZXRBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXJtaW5hdGVzIHRoZSBvYmplY3QgYnkgcmVtb3ZpbmcgZHJhZyBldmVudCBoYW5kbGVycyBmcm9tIHRoZSBlbGVtZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJkcmFnZ2FibGVcIik7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnc3RhcnQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ1N0YXJ0ID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZGF0YSBtYXAgLSBqdXN0IGluIGNhc2VcclxuXHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGUpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGRhdGFUeXBlIGluIHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5kYXRhKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIGRhdGFUeXBlLCB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YVtkYXRhVHlwZV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5hbGxvd2VkRWZmZWN0cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIG9uRHJhZ1N0YXJ0IG1ldGhvZCBpcyBkZWZpbmVkLCBpbnZva2UgaXRcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KVxyXG5cdFx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBETkRUWVBFX0VMRU1FTlQsIHRoaXMuZWxtKTtcclxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWwpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLm91dGVySFRNTCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWdlbmQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ0VuZCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgIT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZmluYWxseVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWcgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZyA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZyggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByb3RlY3RlZCBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgd2UgbmVlZCB0byBpbXBsZW1lbnQgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvcjsgdGhhdCBpcywgd2Ugc2hvdWxkXHJcblx0Ly8vLyBwYXNzIHRoZSBlbGVtZW50IG9iamVjdCBhcyBkYXRhIGJlaW5nIGRyYWdnZWQuIE5vdGUgdGhhdCBlaXRoZXIgdGhpcyBmbGFnIGlzIHRydWUgb3JcclxuXHQvLy8vIHRoZSBkcmFnU291cmNlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0Ly9wdWJsaWMgZGVmYXVsdERyYWdTb3VyY2VCZWhhdmlvckVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFR5cGUgb2YgZHJhZyBzb3VyY2UgbWVjaGFuaXNtIGRldGVybWluZWQgYnkgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHlcclxuXHRwcm90ZWN0ZWQgYmVoYXZpb3I6IERyYWdTb3VyY2VCZWhhdmlvcjtcclxuXHJcblx0Ly8gSURyYWdTb3VyY2UgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBjYW4gYmVcclxuXHQvLyB1bmRlZmluZWQgaWYgZWl0aGVyIHdlIGFyZSBpbXBsZW1lbnRpbmcgYSBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZTogSURyYWdTb3VyY2U7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIHNpbXBsZURyYWdTb3VyY2U6IElTaW1wbGVEcmFnU291cmNlO1xyXG5cclxuXHQvLyBFdmVudCBvYmplY3QgdGhhdCBpcyByZXVzZWQgd2hlbiBzZW5kaW5nIGV2ZW50cyB0byBhIGRyYWcgc291cmNlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlRXZlbnQ6IERyYWdTb3VyY2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VFbXVsYXRvciBjbGFzcyBlbXVsYXRlcyBzdXBwb3J0IGZvciBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5IHZpYSBtb3VzZVxyXG4vLyBldmVudHMuIEl0IGlzIHVzZWQgZm9yIERPTSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgbmF0aXZlIGRyYWcgYW5kIGRyb3Agc3Vwb3J0IC0gZS5nLiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUVtdWxhdG9yIGV4dGVuZHMgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2U6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHRzdXBlciggZWxtLCBkcmFnU291cmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBhZGRpbmcgYSBtb3VzZWRvd24gZXZlbnQuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHRzdXBlci50ZXJtKCk7XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbWVtYmVyIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UtZG93biBldmVudCBhbmQgc3RhcnQgd2F0Y2hpbmcgbW91c2UgbW92ZW1lbnRcclxuXHQvLyhhbmQgb3RoZXIpIGV2ZW50cy5cclxuXHRwcml2YXRlIG9uTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gaWdub3JlIG5vbi1wcmltYXJ5IG1vdXNlIGJ1dHRvbnNcclxuXHRcdGlmIChlLmJ1dHRvbiAhPT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyByZW1lbWViZXIgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIGRvd24gZXZlbnRcclxuXHRcdHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcclxuXHRcdHRoaXMubW91c2VEb3duWSA9IGUuY2xpZW50WTtcclxuXHJcblx0XHQvLyBzdGFydCBsaXN0ZW5pbmcgdG8gc2V2ZXJhbCBEbkQgcmVsYXRlZCBldmVudHMgb24gdGhlIGRvY3VtZW50LlxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEVpdGhlciBzdGFydCBvciBjb250aW51ZSBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBwcmltYXJ5IGJ1dHRvbiBtdXN0IGJlIHN0aWxsIHByZXNzZWRcclxuXHRcdGlmICgoZS5idXR0b25zICYgMSkgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBuZWVkIHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gLSBvdGhlcndpc2UgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIG9uIHRoZSBwYWdlLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIGlmIERuRCBvcGVyYXRpb24gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcyBmaXJlIGV2ZW50czsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHRoZVxyXG5cdFx0Ly8gbW91c2UgbW92ZWQgZW5vdWdoIHRvIHN0YXJ0IHRoZSBvcGVyYXRpb24uXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJhZ1N0ZXAoIGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3ggPSBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blg7XHJcblx0XHRcdGxldCBjeSA9IGUuY2xpZW50WSAtIHRoaXMubW91c2VEb3duWTtcclxuXHRcdFx0aWYgKGN4ID49IC0yICYmIGN4IDw9IDIgJiYgY3kgPj0gLTIgJiYgY3kgPD0gMilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHJcblx0XHRcdHRoaXMuaW5pdGlhdGVEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVEcm9wKCBlKTtcclxuXHJcblx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNylcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgRXNjYXBlIC0gY2FuY2VsIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0XHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmNhbmNlbERyYWdPcGVyYXRpb24oIGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXl1cCBldmVudHNcclxuXHRwcml2YXRlIG9uS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVLZXlFdmVudCggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWF0ZXMgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb25cclxuXHRwcml2YXRlIGluaXRpYXRlRHJhZ09wZXJhdGlvbiggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoXCJzZXREcmFnSW1hZ2VcIiBpbiBEYXRhVHJhbnNmZXIucHJvdG90eXBlKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bERhdGFUcmFuc2ZlcigpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bExlZ2FjeURhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRcdC8vIGZpcmUgb25EcmFnU3RhcnQgZXZlbnQgLSBpZiB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgcHJldmVudGVkLCB3ZSBjYW5jZWwgdGhlIG9wZXJhdGlvblxyXG5cdFx0bGV0IGRyYWdzdGFydEV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdzdGFydFwiKTtcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIGRyYWdzdGFydEV2ZW50KTtcclxuXHRcdGlmIChkcmFnc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB0aGUgZHJhZyBzb3VyY2UgZGlkbid0IHNldCBhbiBlbGVtZW50IGZvciBkcmFnIGltYWdlLCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmLlxyXG5cdFx0aWYgKCF0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjYWxjdWx0ZSBkcmFnIGltYWdlIGNvb3JkaW5hdGVzIHNvIHRoYXQgaW5pdGlhbGx5IHRoZSBkcmFnIGltYWdlIGNvaW5zaWRlcyB3aXRoXHJcblx0XHRcdC8vIHRoZSBvcmlnaW5hbCBpbWFnZVxyXG5cdFx0XHRsZXQgcmM6IENsaWVudFJlY3QgPSB0aGlzLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSggdGhpcy5lbG0sIGUuY2xpZW50WCAtIHJjLmxlZnQsIGUuY2xpZW50WSAtIHJjLnRvcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB3ZSBkb24ndCBrbm93IGxhc3QgdGFyZ2V0IHlldFxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIGEgZHJhZyBzdGVwXHJcblx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlIG9uZSBzdGVwIG9mIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uLCB3aGljaCBvY2N1cnMgd2hlbiB0aGUgbW91c2UgbW92ZXNcclxuXHRwcml2YXRlIGhhbmRsZURyYWdTdGVwKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZXBhcmVJbWFnZUVsZW1lbnQoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJlZm9yZSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50IHdlIHNldCB0aGUgZHJvcEVmZmVjdCB0byBub25lLCBhbmQgdGhlIGRyb3BvdmVyIGhhbmRsZXJcclxuXHRcdC8vIGNvdWxkIHNldCBpdCB0byBzb21ldGhpbmcgZWxzZSBpZiBkZXNpcmVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIGZpbmQgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0bGV0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKSB0aGlzLmltYWdlRWxtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0aWYgKG5ld1RhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgYXJlIG9uIHRoZSBzYW1lIHRhcmdldCBhcyB0aGUgcHJldmlvdXMgbW91c2UgbW92ZSwganVzdCBzZW5kIGRyYWdvdmVyIChpZlxyXG5cdFx0XHQvLyB0aGUgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lKVxyXG5cdFx0XHRpZiAobmV3VGFyZ2V0ID09PSB0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzZW5kIGRyYWdlbnRlciB0byB0aGUgbmV3IHRhcmdldCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgYSB2YWxpZCBkcm9wXHJcblx0XHRcdFx0Ly8gem9uZVxyXG5cdFx0XHRcdGxldCBkcmFnZW50ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnZW50ZXJcIik7XHJcblx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdlbnRlckV2ZW50KTtcclxuXHRcdFx0XHRsZXQgaXNOZXdUYXJnZXREcm9wcGFibGU6IGJvb2xlYW4gPSBkcmFnZW50ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0XHQvLyBzZW5kIHRoZSBsYXN0IHRhcmdldCAoaWYgZXhpc3RzIGFuZCBpcyBkcm9wcGFibGUpIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgdGFyZ2V0IGFuZCB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcCB6b25lXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gbmV3VGFyZ2V0O1xyXG5cdFx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gaXNOZXdUYXJnZXREcm9wcGFibGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvdXIgbmV3IHRhcmdldCBpcyBkcm9wcGFiYWxlLCBzZW5kIGRyYWdvdmVyIHRvIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgZG9udCBoYXZlIG5ldyB0YXJnZXQgYnV0IGhhdmUgbGFzdCBvbmUgdGFyZ2V0LCBzZW5kIGRyYWdsZWF2ZSB0byB0aGUgbGFzdCBvbmVcclxuXHRcdFx0Ly8gKGlmIHRoZSBsYXN0IHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHQvLyBtb3ZlIHRoZSBkcmFnIGltYWdlIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgXCJweFwiO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyBcInB4XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUubGVmdCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKyAxMiArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLnRvcCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyAwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGxhc3QgbW91c2UgZXZlbnQgLSB3ZSBtYXkgdXNlIGl0IHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cyBpZiB3ZSBuZWVkIHRvXHJcblx0XHQvLyBkaXNwYXRjaCBkcmFnIGV2ZW50cyB1cG9uIGtleWJvYXJkIGV2ZW50cyAoZS5nLiBjYW5jZWwgb3BlcmF0aW9uIHdoZW4gRXNjYXBlIGlzIHByZXNzZWRcclxuXHRcdC8vIG9yIGRyYWdvdmVyIGV2ZW50IGlmIEN0cmwsIEFsdCBvciBTaGlmdCBidXR0b25zIGFyZSBwcmVzc2VkKS5cclxuXHRcdHRoaXMubGFzdE1vdXNlRXZlbnQgPSBlO1xyXG59O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgZHVyaW5nIGRyYWcgb3BlcmF0aW9uIGJ5IHNlbmRpbmcgZHJhZ292ZXIgZXZlbnQuXHJcblx0cHJpdmF0ZSBoYW5kbGVLZXlFdmVudChlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblxyXG5cdFx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdcIikpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEVmZmVjdEVsbSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0XHR0aGlzLnNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFRha2VzIHRoZSBpbWFnZSBlbGVtZW50IChpZiBhbnkpIHNwZWNpZmllZCB2aWEgdGhlIGNhbGwgdG8gc2V0RHJhZ0ltYWdlIGFuZCBjbG9uZXMgaXQgaW50b1xyXG5cdC8vIGEgc3BlY2lhbCBkaXYgdGhhdCB3aWxsIGJlIHNob3duIGR1cmluZyB0aGUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIHByZXBhcmVJbWFnZUVsZW1lbnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcHJldmlvdXMgaW1hZ2UgZWxlbWVudCwgcmVtb3ZlIGl0IG5vd1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0ucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0gPT0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvcmdFbG06IEVsZW1lbnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG07XHJcblx0XHRpZiAoIW9yZ0VsbSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50LCB3aGljaCB3aWxsIHdyYXAgdGhlIGltYWdlIGVsZW1lbnQgYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcblx0XHQvLyBkb2N1bWVudCBib2R5IHdpdGggYWJzb2x1dGUgcG9zaXRpb25pbmcgYW5kIHNvbWUgb3BhY2l0eVxyXG5cdFx0bGV0IGRpdkVsbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHJcblx0XHQvLyBjbG9uZSB0aGUgb3JpZ2luYWwgZWxlbWVudCBiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBtb3ZlIGl0IGFyb3VuZC5cclxuXHRcdGxldCBjbG9uZWRFbG06IEVsZW1lbnQgPSBvcmdFbG0uY2xvbmVOb2RlKCkgYXMgRWxlbWVudDtcclxuXHJcblx0XHQvLyBpZiB0aGUgaW1hZ2UgZWxlbWVudCBzZXQgdmlhIHNldERyYWdJbWFnZSBpcyBhbiBTVkcgZWxlbWVudCBidXQgbm90IHRoZSA8c3ZnPiBlbGVtZW50XHJcblx0XHQvLyBpdHNlbGYsIHRoZW4gd3JhcCBpdCBpbiBhbiA8c3ZnPiBlbGVtZW50LlxyXG5cdFx0aWYgKG1pbS5pc1N2Zyggb3JnRWxtKSAmJiAhbWltLmlzU3ZnU3ZnKCBvcmdFbG0pKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ZnRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cdFx0XHRzdmdFbG0uYXBwZW5kQ2hpbGQoIGNsb25lZEVsbSk7XHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggc3ZnRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cclxuXHRcdC8vIHN0eWxlIHRoZSBkaXYgZWxlbWVudCB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGRpdkVsbS5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcclxuXHRcdGRpdkVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcblx0XHQvLyBhZGQgYSBzcGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgXCJkcm9wRWZmZWN0XCIgaW1hZ2VcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiKTtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggdGhpcy5kcm9wRWZmZWN0RWxtKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkaXZFbG0pO1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGRpdkVsbTtcclxuXHJcblx0XHQvLyBjb21wYXJlIHRoZSBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgYW5kIHRoZSB3cmFwcGluZyBkaXZcclxuXHRcdC8vIGVsZW1lbnQuIFRoZWlyIHRvcC1sZWZ0IGNvb3JkaW5hdGVzIG1heSBub3QgY29pbnNpZGUgZHVlIHRvIHNldmVyYWwgZmFjdG9ycyAoZS5nLlxyXG5cdFx0Ly8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb3IgU1ZHIGNvb3JkaW5hdGVzKS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgYWRqdXN0IHRoZSB4IGFuZCB5XHJcblx0XHQvLyBjb29yZGluYXRlcyBpbiB0aGUgRW11bERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0XHRsZXQgcmNDbG9uZWRFbG06IENsaWVudFJlY3QgPSBjbG9uZWRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNEaXZFbG06IENsaWVudFJlY3QgPSBkaXZFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNDbG9uZWRFbG0ubGVmdCAhPSByY0RpdkVsbS5sZWZ0KVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICs9IHJjQ2xvbmVkRWxtLmxlZnQgLSByY0RpdkVsbS5sZWZ0O1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLnRvcCAhPSByY0RpdkVsbS50b3ApXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKz0gcmNDbG9uZWRFbG0udG9wIC0gcmNEaXZFbG0udG9wO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5IHNtYWxsIGltYWdlIGluZGljYXRpbmcgd2hhdCBkcm9wIGVmZmVjdCBpcyBleHBlY3RlZFxyXG5cdHByaXZhdGUgc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cdFx0bGV0IGNvbG9yOiBzdHJpbmc7XHJcblx0XHRzd2l0Y2goIGRyb3BFZmZlY3QpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgXCJub25lXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1iYW5cIjtcclxuXHRcdFx0XHRjb2xvciA9IFwicmVkXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiY29weVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtcGx1c1wiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImxpbmtcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWxpbmtcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmx1ZVwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIGhhbmRsZURyb3AoIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0byBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvciBiZWNhdXNlIGRyb3AgYWx3YXlzIG9jY3VycyBvbiB0aGUgbGFzdFxyXG5cdFx0Ly8gZm91bmQgdGFyZ2V0IChvciBubyB0YXJnZXQgYXQgYWxsKVxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJvcFwiKSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsICBcImRyYWdlbmRcIikpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VsIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgY2FuY2VsRHJhZ09wZXJhdGlvbiggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IERuRCB3YXMgY2FuY2VsZWRcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ0VuZCBldmVudFxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENsZWFuIHVwIGFmdGVyIGRyYWcgb3BlcmF0aW9uIGZpbmlzaGVzIHdpdGggZWl0aGVyIGRyb3Agb3IgY2FuY2VsYXRpb25cclxuXHRwcml2YXRlIGNsZWFudXBEcmFnT3BlcmF0aW9uKClcclxuXHR7XHJcblx0XHQvLyBkZXN0cm95IHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHJcblx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZT0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gY3JlYXRlcyBEcmFnRXZlbnQgZnJvbSB0aGUgZ2l2ZW4gTW91c2VFdmVudCBhbmQgdGhlIHN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZTogTW91c2VFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLFxyXG5cdFx0XHRcdFx0XHRcdGUuY2xpZW50WCwgZS5jbGllbnRZLCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIGUuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdGUucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogZS5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogZS5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IGUuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiBlLmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiBlLnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogZS5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IGUuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIEtleWJvYXJkRXZlbnQgYW5kIHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0LiBVc2VzIGxhc3QgcmVtZW1iZXJlZFxyXG5cdC8vIG1vdXNlIGV2ZW50IHRvIGZpbGwgY29vcmRpbmF0ZXMgYW5kIGJ1dHRvbiBpbmZvcm1hdGlvbi5cclxuXHRwcml2YXRlIGNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlOiBLZXlib2FyZEV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50XHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgbmV3IERyYWdFdmVudCB5ZXQsIHdoaWxlIENocm9tZSBkb2Vzbid0IHN1cHBvcnQgaW5pdERyYWdFdmVudFxyXG5cdFx0aWYgKFwiaW5pdERyYWdFdmVudFwiIGluIERyYWdFdmVudC5wcm90b3R5cGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRHJhZ0V2ZW50Jyk7XHJcblx0XHRcdChkcmFnRXZlbnQgYXMgYW55KS5pbml0RHJhZ0V2ZW50KCB0eXBlLCBlLmJ1YmJsZXMsIGUuY2FuY2VsYWJsZSwgZS52aWV3LCBlLmRldGFpbCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblgsIHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsIHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WSxcclxuXHRcdFx0XHRcdFx0XHRlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiB0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50IGZvciB0aGUgcHJpbWFyeSBidXR0b24uIFdlIHdpbGwgc3RhcnQgZW11bGF0aW5nIERuRCBpZlxyXG5cdC8vIHRoZSBtb3VzZSBtb3ZlcyBtb3JlIHRoYW4gdHdvIHBpeGVscyBpbiBlaXRoZXIgZGlyZWN0aW9uIHdoaWxlIHRoZSBwcmltYXJ5IGJ1dHRvbiBpcyBzdGlsbFxyXG5cdC8vIGRvd24uXHJcblx0cHJpdmF0ZSBtb3VzZURvd25YOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3VzZURvd25ZOiBudW1iZXI7XHJcblxyXG5cdC8vIFN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCBkdXJpbmcgYSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbi4gSXQgaXMgY3JlYXRlZFxyXG5cdC8vIHdoZW4gRG5EIHN0YXJ0cyBhbmQgaXMgZGVzdHJveWVkIGFmdGVyIGl0IGZpbmlzaGVzLiBQcmVzZW5jZSBvZiB0aGlzIG9iamVjdCBhbHNvIGluZGljYXRlc1xyXG5cdC8vIHRoYXQgdGhlIERuRCBvcGVyc3Rpb24gaXMgaW4gcHJvZ3Jlc3NcclxuXHRwcml2YXRlIGVtdWxEYXRhVHJhbnNmZXI6IElFbXVsRGF0YVRyYW5zZmVyO1xyXG5cclxuXHQvLyBDbG9uZWQgZWxlbWVudCB1c2VkIHRvIGFzIGFuIGltYWdlIGR1cmluZyBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgaW1hZ2VFbG06IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHQvLyBTdWItZWxlbWVudCBvZiB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IHNob3dzIGRyb3AgZWZmZWN0XHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RWxtOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG5cdC8vIFRoZSBsYXN0IGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdHByaXZhdGUgbGFzdFRhcmdldDogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhc3QgdGFyZ2V0IHVuZGVyIHRoZSBjdXJzb3Igd2FzIGEgdmFsaWQgZHJvcCB6b25lLiBUaGlzIGlzXHJcblx0Ly8gbmVlZGVkIHRvIG5vdCBzZW5kIGRyYWdvdmVyIGFuZCBkcmFnbGVhdmUgZXZlbnRzIHRvIG5vbi1kcm9wcGFibGUgdGFyZ2V0cy4gVGhpcyBmbGFnIGlzXHJcblx0Ly8gc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ2VudGVyIGV2ZW50IHNlbnQgdG8gdGhlIHRhcmdldCBoYXMgaXRzIHByZXZlbnREZWZhdWx0IG1ldGhvZFxyXG5cdC8vIGNhbGxlZC4gSWYgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZSwgZHJhZ292ZXIsIGRyYWdsZWF2ZSBhbmQgZHJvcCBldmVudHMgYXJlIG5vdCBzZW50XHJcblx0Ly8gdG8gdGhpcyB0YXJnZXQuXHJcblx0cHJpdmF0ZSBpc0xhc3RUYXJnZXREcm9wcGFibGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBkcm9wIGlzIHBvc3NpYmxlIG9uIHRoZSBsYXN0IHRhcmdldC4gVGhpcyBmbGFnIGlzIG5lZWRlZCBiZWNhdXNlXHJcblx0Ly8gZXZlbiBpZiBhIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSwgbm90IGFsbCBsb2NhdGlvbnMgd2l0aGluIHRoZSB0YXJnZXQgbWlnaHQgYWNjZXB0IHRoZVxyXG5cdC8vIGRyb3AuIFRoaXMgZmxhZyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBkcmFnb3ZlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0c1xyXG5cdC8vIHByZXZlbnREZWZhdWx0IG1ldGhvZCBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyb3AgZXZlbnQgd2lsbCBub3QgYmUgc2VudCB0b1xyXG5cdC8vIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIExhdGVzdCBNb3VzZUV2ZW50IG9iamVjdCwgd2hjaWggd2UgdXNlIHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cy5cclxuXHRwcml2YXRlIGxhc3RNb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtEcmFnRHJvcEVmZmVjdCwgRHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnVGFyZ2V0UHJvcFR5cGUsIElEcmFnVGFyZ2V0LCBJU2ltcGxlRHJhZ1RhcmdldCwgSURyYWdUYXJnZXRFdmVudH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGF9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEV2ZW50IGltcGxlbWVudHMgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIHRoaXMuZHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciwgdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZGF0YTogYW55ID0gRHJhZ0FuZERyb3BEYXRhLmdldE9iamVjdERhdGEoIHR5cGUpO1xyXG5cdFx0cmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEgOiB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuXHRcdHJldHVybiBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXVxyXG5cdHtcclxuXHRcdGxldCBpdGVtcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0bGV0IGVudHJpZXM6IGFueVtdID0gW107XHJcblx0XHRpZiAoaXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRlbnRyaWVzLnB1c2goIGl0ZW1zW2ldLndlYmtpdEdldEFzRW50cnkoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVudHJpZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0SGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3AgdGFyZ2V0IGZ1bmN0aW9uYWxpdHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1RhcmdldEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdUYXJnZXQ6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoKGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQpLm9uRHJvcCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElEcmFnVGFyZ2V0O1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdUYXJnZXQgYXMgSVNpbXBsZURyYWdUYXJnZXQpLm9uRGF0YURyb3BwZWQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gbmV3IERyYWdUYXJnZXRFdmVudCgpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID0gMDtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMub25EcmFnTGVhdmUpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcm9wXCIsIHRoaXMub25Ecm9wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0VudGVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnRW50ZXIgY2FsbGJhY2sgb25seSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBkcmFnZW50ZXJcclxuXHRcdC8vIGV2ZW50IGlzIGZpcmVkIG9uIG91ciBlbGVtZW50IG9yIG9uIG9uZSBvZiBjaGlsZCBub24tZHJhZy10YXJnZXQgZWxlbWVudHMuXHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyKysgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGlmIElEcmFnVGFyZ2V0LnR5cGVzIHByb3BlcnR5IGlzIGRlZmluZWQgYW5kIGlzIG5vdCBlbXB0eSwgZHJhZyB3aWxsIGJlIHBvc3NpYmxlXHJcblx0XHQvLyBvbmx5IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaGFzIGF0IGxlYXN0IG9uIHR5cGUgZnJvbSB0aGUgdHlwZXMgYXJyYXkuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0IT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKERyYWdBbmREcm9wRGF0YS5oYXNUeXBlKCBlLmRhdGFUcmFuc2ZlciwgdHlwZSkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIG5vIHN1aXRhYmxlIHR5cGUgZm91bmQsIHdlIGRvbid0IGNhbGwgZS5wcmV2ZW50RGVmYXVsdCwgd2hpY2ggZGlzYWxsb3dzIGRyb3BcclxuXHRcdFx0aWYgKCF0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb25EcmFnRW50ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhcHBseSB2aXN1YWwgZmVlZGJhY2sgaWYgc3BlY2lmaWVkXHJcblx0XHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjayAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFsdGhvdWdoIHN0eWxlIHByb3BlcnR5IGV4aXN0cyBpbiBib3RoIEhUTUxFbGVtZW50IGFuZCBTVkdFbGVtZW50LCBpdCBpcyBkZWZpbmVkIG9uIGFcclxuXHRcdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRcdGxldCBlbG1TdHlsZSA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0XHQvLyBzYXZlIGN1cnJlbnQgdmFsdWVzIG9mIHN0eWxlIHByb3BlcnRpZXMgc3BlY2lmaWVkIGluIGZlZWRiYWNrIGFuZCBzZXQgdGhlIHN0eWxlIGZyb21cclxuXHRcdFx0XHRcdC8vIHRoZSBmZWVkYmFja1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0ge307XHJcblx0XHRcdFx0XHRmb3IoIGxldCBwcm9wIGluIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjaylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlW3Byb3BdID0gZWxtU3R5bGVbcHJvcF07XHJcblx0XHRcdFx0XHRcdGVsbVN0eWxlW3Byb3BdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrW3Byb3BdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdPdmVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCBpc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gdGhlIGRyYWcgdGFyZ2V0LCB3ZSBjb25zaWRlciBkcm9wIHBvc3NpYmxlXHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2FsbCB0aGUgb25EcmFnT3ZlciBtZXRob2QgYW5kIGNvbnNpZGVyIGRyb3AgcG9zc2libGUgb25seSBpZiBpdCByZXR1cm5zIHRydWVcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0Ryb3BQb3NzaWJsZSlcclxuXHRcdHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgd2UgbmVlZCB0byBzZXQgZHJvcCBlZmZlY3RcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdMZWF2ZSA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHQvLyB3ZSB3aWxsIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGNhbGxiYWNrIG9ubHkgaWYgdGhlIG1vdXNlIGNvbXBsZXRlbHkgbGVhdmVzIG91ciBlbGVtZW50LFxyXG5cdFx0Ly8gd2hpY2ggbWVhbnMgb3VyIGNvdW50ZXIgcmVhY2hlcyAwLlxyXG5cdFx0aWYgKC0tdGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID4gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmV2ZXJ0IHZpc3VhbCBmZWVkYmFjayAoaWYgd2FzIHNwZWNpZmllZClcclxuXHRcdFx0aWYgKHRoaXMuc2F2ZWRTdHlsZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRsZXQgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAodGhpcy5lbG0gYXMgYW55IGFzIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkuc3R5bGU7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zYXZlZFN0eWxlKVxyXG5cdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNhdmVkU3R5bGVbcHJvcF07XHJcblxyXG5cdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Ecm9wID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IGV4cGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmRhdGFUeXBlcztcclxuXHRcdFx0bGV0IGRhdGFPYmogPSB7fTtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiBlLmRhdGFUcmFuc2Zlci50eXBlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgc29tZSBleHBlY3RlZCB0eXBlcyBkZWZpbmVkIHNraXAgdGhlIGN1cnJlbnQgdHlwZSBpZiBpdCBpcyBubyBvbmVcclxuXHRcdFx0XHQvLyBvZiB0aGUgZXhwZWN0ZWRcclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWRUeXBlcyAmJiBleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDAgJiYgZXhwZWN0ZWRUeXBlcy5pbmRleE9mKCB0eXBlKSA8IDApXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGRhdGEgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRkYXRhT2JqW3R5cGVdID0gZGF0YTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5vbkRhdGFEcm9wcGVkKCBkYXRhT2JqKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQub25Ecm9wKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vLyBpZiB0aGUgdGFyZ2V0IGltcGxlbWVudHMgb25EcmFnTGVhdmUsIGNhbGwgaXQgbm93IHRvIGFsbG93IGl0IHRvIGNsZWFudXBcclxuXHRcdC8vaWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0Ly97XHJcblx0XHQvL1x0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdC8vfVxyXG5cclxuXHRcdC8vIGNsZWFyIG91ciBkcmFnRW50ZXJDb3VudGVyXHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBkZWZhdWx0IGRyb3AgZWZmZWN0IGFjY29yZGluZyB0byB0aGUgYWxsb3dlZCBlZmZlY3RzIGFuZCBrZXlzIHByZXNzZWRcclxuXHRwcml2YXRlIGdldERlZmF1bHREcm9wRWZmZWN0KGU6IERyYWdFdmVudCk6IERyYWdEcm9wRWZmZWN0XHJcblx0e1xyXG5cdFx0bGV0IGFsbG93ZWRFZmZlY3RzID0gZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBhcyBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcblx0XHRzd2l0Y2goIGFsbG93ZWRFZmZlY3RzKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5OlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Nb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblxyXG5cdFx0XHRkZWZhdWx0OiBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRyb3AgZWZmZWN0IGlzIGFtb25nIHRoZSBhbGxvd2VkIGVmZmVjdHNcclxuXHRwcml2YXRlIGlzRHJvcEVmZmVjdEFsbG93ZWQoIGRyb3BFZmZlY3Q6IERyYWdEcm9wRWZmZWN0LCBhbGxvd2VkRWZmZWN0czogRHJhZ0FsbG93ZWRFZmZlY3RzKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rIHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCAhPT0gRHJhZ0Ryb3BFZmZlY3QuTm9uZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBkcmFnVGFyZ2V0OiBJRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gSURyYWdUYXJnZXQgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHRhcmdldC5cclxuXHRwdWJsaWMgc2ltcGxlRHJhZ1RhcmdldDogSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cdC8vIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJldXNlZCB3aGVuIHNlbmRpbmcgZXZlbnRzIHRvIGEgZHJhZyB0YXJnZXQgZWxlbWVudC5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFdmVudDogRHJhZ1RhcmdldEV2ZW50O1xyXG5cclxuXHQvLyBBIGRyYWcgdGFyZ2V0IGVsZW1lbnQgY2FuIGhhdmUgY2hpbGRyZW4gd2hvIGFyZSBub3QgZHJhZyB0YXJnZXRzIGJ5IHRoZW1zZWx2ZXMuIEluIHRoaXNcclxuXHQvLyBjYXNlLCB3aGVuIHRoZSBtb3VzZSBnb2VzIGZyb20gb3VyIGVsZW1lbnQgdG8gYSBjaGlsZCBlbGVtZW50LCB3ZSB3aWxsIHJlY2VpdmUgZHJhZ2VudGVyXHJcblx0Ly8gZXZlbnQgb24gdGhlIGNoaWxkIGVsZW1lbnQgYW5kIGRyYWdsZWF2ZSBvbiBvdXJzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCB0aGlzIHRocm91Z2hcclxuXHQvLyBvdXIgY3VzdG9tIGV2ZW50cyBiZWNhdXNlIGZyb20gdGhlIGNsbGVyJ3MgcG9pbnQgb2YgdmlldyB0aGUgbXVzZSBpcyBzdGlsbCB3aXRoaW4gdGhlXHJcblx0Ly8gYm91bmRzIG9mIG91ciBlbGVtZW50LiBUaGVyZWZvcmUsIHdlIGtlZXAgdGhlIGNvdW50ZXIgdmFyaWFibGUsIHdoaWNoIGlzIHNldCB0byAxXHJcblx0Ly8gd2hlbiB0aGUgZmlyc3QgZHJhZ2VudGVyIGV2ZW50IChmcm9tIG91ciBlbGVtZW50IG9yIGZyb20gYSBjaGlsZCkgaXMgcmVwb3J0ZWQuIE9uIGVhY2hcclxuXHQvLyBzdWJzZXF1ZW50IGRyYWdlbnRlciBhbmQgZHJhZ2xlYXZlIGl0IHdpbGwgYmUgaW5jcmVtZW50ZWQgYW5kIGRlY3JlbWVudGVkIHJlc3BlY3RpdmVseS5cclxuXHQvLyBXaGVuIHRoaXMgY291bnRlciByZWFjaGVzIHplcm8sIHdlIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGhhbmRsZXIuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0RW50ZXJDb3VudGVyOiBudW1iZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGluIHRoZSBmaXJzdCBjYWxsIHRvIHRoZSBvbkRyYWdFbnRlciB3ZSBkZXRlcm1pbmVkIHRoYXQgZHJvcFxyXG5cdC8vIHdhcyBwb3NzaWJsZS5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBTZXQgb2Ygc3R5bGVzIHNhdmVkIGJlZm9yZSBhcHBseWluZyBmZWVkYmFjayBzdHlsZXMgZHVyaW5nIGRyYWdlbnRlciBldmVudC4gV2Ugd2lsbCB1c2VcclxuXHQvLyB0aGVzZSBzdHlsZXMgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgZHVyaW5nIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0cHJpdmF0ZSBzYXZlZFN0eWxlOiBTdHlsZXNldDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jbFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZG5kL0RyYWdEcm9wQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL1BvcHVwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL0RpYWxvZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9Nc2dCb3hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVyL1JvdXRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmVlL1RyZWVBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9TY3JvbGxBeGlzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpcnQvVlRhYmxlXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzfSBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BJbXBsXCI7XHJcbnJlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzKCk7XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9Qb3B1cFwiXHJcbmltcG9ydCB7U2xpY2UsIG1lcmdlU2xpY2VzfSBmcm9tIFwiLi4vdXRpbC9Mb2NhbFN0eWxlc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZyBjbGFzcyBpcyBhIHBvcHVwIHdpdGggdGhyZWUgZGlzdGluY3QgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQb3B1cFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgU2xpY2UgZm9yIHRoZSB0aHJlZSBkaWFsb2cgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuXHQvLyBUaGV5IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZSBhcHByb3ByaWF0ZSByZW5kZXIgbWV0aG9kcy5cclxuXHRjb25zdHJ1Y3RvciggY2FwdGlvbkFyZWFTbGljZT86IFNsaWNlLCBtYWluQXJlYVNsaWNlPzogU2xpY2UsIGJ1dHRvbkFyZWFTbGljZT86IFNsaWNlLCBkbGdTbGljZT86IFNsaWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKGRsZ1NsaWNlKTtcclxuXHJcblx0XHR0aGlzLmNhcHRpb25BcmVhU2xpY2UgPSBjYXB0aW9uQXJlYVNsaWNlID8gY2FwdGlvbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5tYWluQXJlYVNsaWNlID0gbWFpbkFyZWFTbGljZSA/IG1haW5BcmVhU2xpY2UgOiB7fTtcclxuXHRcdHRoaXMuYnV0dG9uQXJlYVNsaWNlID0gYnV0dG9uQXJlYVNsaWNlID8gYnV0dG9uQXJlYVNsaWNlIDoge307XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGRlZmF1bHQgcGFyYW1ldGVycyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGEgRGlhbG9nIGlzIGNyZWF0ZWRcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7YmFja2dyb3VuZDpcInBpbmtcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwiLCBjdXJzb3I6XCJkZWZhdWx0XCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlID0geyBzdHlsZToge3BhZGRpbmc6XCIwLjVlbSAxZW1cIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlID0geyBzdHlsZToge2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlID0geyBzdHlsZToge21hcmdpbkxlZnQ6XCIwLjVlbVwiLCBtaW5XaWR0aDpcIjVlbVwifSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbiB3aXRoIHRoZSBnaXZlbiBjaGFyYWN0ZXJpc3RpY3MuIFRoZSBrZXkgcGFyYW1ldGVyIGluZGljYXRlcyB0aGUgdmFsdWUgdGhhdCBpc1xyXG5cdC8vIHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFRoZSBvcHRpb25hbCBpbmRleCBwYXJhbWV0ZXIgc3BlY2lmaWVzXHJcblx0Ly8gdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBidXR0b24gc2hvdWxkIGJlIGFkZGVkLlxyXG5cdHB1YmxpYyBhZGRCdXR0b24oIHNsaWNlOiBTbGljZSwga2V5PzogYW55LCBjYWxsYmFjaz86IChrZXk6IGFueSkgPT4gdm9pZCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IERsZ0J0bkluZm8gPSB7IHNsaWNlLCBrZXksIGNhbGxiYWNrLCByZWY6IG5ldyBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PigpIH07XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5wdXNoKCBpbmZvKTtcclxuXHRcdGVsc2UgaWYgKGluZGV4ID09PSAwKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnVuc2hpZnQoIGluZm8pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXggLSAxLCAwLCBpbmZvKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCB0aGlzLnJlbmRlckJ1dHRvbkFyZWEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBidXR0b24gYXQgdGhlIGdpdmVuIGluZGV4LlxyXG5cdHB1YmxpYyByZW1vdmVCdXR0b24oIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCB0aGlzLnJlbmRlckJ1dHRvbkFyZWEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbmRlckNhcHRpb25BcmVhKClcclxuXHR7XHJcblx0XHRsZXQgY2FwdGlvbkFyZWFTbGljZTogU2xpY2UgPSBtZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlLCB0aGlzLmdldENhcHRpb25BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0NhcHRpb25cIiBtb3VzZWRvd249e3RoaXMub25TdGFydE1vdmV9IHN0eWxlPXtjYXB0aW9uQXJlYVNsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzcz17Y2FwdGlvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5jYXB0aW9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e2NhcHRpb25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJNYWluQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IG1haW5BcmVhU2xpY2U6IFNsaWNlID0gbWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSwgdGhpcy5nZXRNYWluQXJlYVNsaWNlKCkpO1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdNYWluQ29udGVudFwiIHN0eWxlPXttYWluQXJlYVNsaWNlLnN0eWxlfSBjbGFzcz17bWFpbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5tYWluQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e21haW5BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJCdXR0b25BcmVhKClcclxuXHR7XHJcblx0XHRsZXQgYnV0dG9uQXJlYVNsaWNlOiBTbGljZSA9IG1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSwgdGhpcy5nZXRCdXR0b25BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0J1dHRvbnNcIiBzdHlsZT17YnV0dG9uQXJlYVNsaWNlLnN0eWxlfSBjbGFzcz17YnV0dG9uQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLmJ1dHRvbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdHtidXR0b25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdFx0e3RoaXMuYnV0dG9uSW5mb3MubWFwKCAoaW5mbykgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgYnRuU2xpY2U6IFNsaWNlID0gbWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UsIGluZm8uc2xpY2UpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpbmZvLmtleX0gY2xpY2s9e2luZm8uY2FsbGJhY2sgJiYgKCgpID0+IGluZm8uY2FsbGJhY2soaW5mby5rZXkpKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17YnRuU2xpY2Uuc3R5bGV9IGNsYXNzPXtidG5TbGljZS5jbGFzc05hbWV9IHsuLi5idG5TbGljZS5wcm9wc30+XHJcblx0XHRcdFx0XHRcdHtidG5TbGljZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogU2xpY2VcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDYXB0aW9uQXJlYX1cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYWluQXJlYX1cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJCdXR0b25BcmVhfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBTbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0TWFpbkFyZWFTbGljZSgpOiBTbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm1haW5BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBidXR0b24gYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0QnV0dG9uQXJlYVNsaWNlKCk6IFNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBwdXRzIG1vdXNlIGRvd24gaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgb25TdGFydE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLnN0YXJ0TW92ZSggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhU2xpY2U6IFNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQ2FwdGlvbkFyZWFTbGljZSgpOiBTbGljZSB7IHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IENhcHRpb25BcmVhU2xpY2UoIHZhbDogU2xpY2UpIHsgdGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFTbGljZTogU2xpY2U7XHJcblx0cHVibGljIGdldCBNYWluQXJlYVNsaWNlKCk6IFNsaWNlIHsgcmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgTWFpbkFyZWFTbGljZSggdmFsOiBTbGljZSkgeyB0aGlzLm1haW5BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhU2xpY2U6IFNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQnV0dG9uQXJlYVNsaWNlKCk6IFNsaWNlIHsgcmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBCdXR0b25BcmVhU2xpY2UoIHZhbDogU2xpY2UpIHsgdGhpcy5idXR0b25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgYnV0dG9ucyBhZGRlZCB0byB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBidXR0b25JbmZvczogRGxnQnRuSW5mb1tdID0gW107XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBidXR0b24gYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdENhcHRpb25BcmVhU2xpY2U6IFNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdE1haW5BcmVhU2xpY2U6IFNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGJ1dHRvbnMgYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvbkFyZWFTbGljZTogU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYSBidXR0b24gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvblNsaWNlOiBTbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEbGdCdG5JbmZvIGNsYXNzIGlzIGEgaGVscGVyIGNsYXNzIHRoYXQga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBidXR0b24gYWRkZWQgdG8gdGhlIGRpYWxvZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgRGxnQnRuSW5mbyA9XHJcbntcclxuXHRzbGljZTogU2xpY2UsXHJcblx0a2V5OiBhbnksXHJcblx0Y2FsbGJhY2s6IChrZXk6IGFueSkgPT4gdm9pZCxcclxuXHRyZWY6IG1pbS5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZ0J1dHRvbiBlbnVtZXJhdGlvbiBkZWZpbmVzIGNvbnN0YW50cyB0byBpbmRpY2F0ZSBzdGFuZGFyZCBidXR0b25zIHVzZWQgaW4gZGlhbG9ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIERpYWxvZ0J1dHRvblxyXG57XHJcblx0Tm9uZSA9IDB4MCxcclxuXHRPSyA9IDB4MSxcclxuXHRDYW5jZWwgPSAweDIsXHJcblx0WWVzID0gMHg0LFxyXG5cdE5vID0gMHg4LFxyXG5cdENsb3NlID0gMHgxMCxcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7RGlhbG9nLCBEaWFsb2dCdXR0b259IGZyb20gXCIuL0RpYWxvZ1wiXHJcbmltcG9ydCB7U2xpY2V9IGZyb20gXCIuLi91dGlsL0xvY2FsU3R5bGVzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94IGNsYXNzIGlzIGEgZGlhbG9nIHRoYXQgZGlzcGxheXMgYSBtZXNzYWdlIHdpdGggYSBzZXQgb2YgcHJlLWRlZmluZWQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNc2dCb3ggZXh0ZW5kcyBEaWFsb2dcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2hvd01vZGFsKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpOiBQcm9taXNlPE1zZ0JveEJ1dHRvbnM+XHJcblx0e1xyXG5cdFx0bGV0IG1zZ0JveDogTXNnQm94ID0gbmV3IE1zZ0JveCggbWVzc2FnZSwgdGl0bGUsIGJ1dHRvbnMsIGljb24pO1xyXG5cdFx0cmV0dXJuIG1zZ0JveC5zaG93TW9kYWwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0XHR0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG5cdFx0dGhpcy5pY29uID0gaWNvbjtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGNhcHRpb24uXHJcblx0cHJvdGVjdGVkIGdldENhcHRpb25BcmVhU2xpY2UoKTogU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4geyBjb250ZW50OiB0aGlzLnRpdGxlLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiZG9kZ2VyYmx1ZVwiIH0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIG1haW4gY29udGVudCBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRNYWluQXJlYVNsaWNlKCk6IFNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IHsgY2xzLCBjb2xvciB9ID0gdGhpcy5nZXRJY29uQ2xhc3NBbmRDb2xvcigpO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtjbHMgJiYgPGkgY2xhc3M9e1wiZmEgZmEtM3ggXCIgKyBjbHN9IHN0eWxlPXt7IGNvbG9yOiBjb2xvcn19Lz59XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsIG1pbldpZHRoOlwiMTVlbVwiLCBtYXhXaWR0aDpcIjQwZW1cIiwgbWluSGVpZ2h0OiBcIjJlbVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OlwiMjBlbVwiLCBvdmVyZmxvdzpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0e3RoaXMubWVzc2FnZX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+O1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuYnV0dG9ucylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLkNsb3NlOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNsb3NlXCIsIERpYWxvZ0J1dHRvbi5DbG9zZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT0s6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5Pa0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNObzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNOb0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTogeyBjbHM6IHN0cmluZywgY29sb3I6IENzc0NvbG9yIH1cclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuaWNvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkluZm86IHJldHVybiB7IGNsczogXCJmYS1pbmZvLWNpcmNsZVwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLldhcm5pbmc6IHJldHVybiB7IGNsczogXCJmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiLCBjb2xvcjogXCJvcmFuZ2VcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uRXJyb3I6IHJldHVybiB7IGNsczogXCJmYS1taW51cy1jaXJjbGVcIiwgY29sb3I6IFwicmVkXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjbHM6IFwiZmEtcXVlc3Rpb24tY2lyY2xlXCIsIGNvbG9yOiBcImdyZWVuXCIgfTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiB7IGNsczogXCJcIiwgY29sb3I6IFwiYmx1ZVwiIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9uKCB0ZXh0OiBzdHJpbmcsIGtleTogRGlhbG9nQnV0dG9uKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYWRkQnV0dG9uKCB7Y29udGVudDogdGV4dH0sIGtleSwgdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uQnV0dG9uQ2xpY2tlZCA9ICgga2V5OiBhbnkpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5jbG9zZSgga2V5KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcblx0Ly8gVGl0bGUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcblxyXG5cdC8vIEJ1dHRvbnNcclxuXHRwcml2YXRlIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnM7XHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXNnQm94QnV0dG9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBidXR0b25zIGFuZCBidXR0b24gY29tYmluYXRpb25zIGZvclxyXG4gKiBtZXNzYWdlIGJveGVzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTXNnQm94QnV0dG9uc1xyXG57XHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgZGlzcGxheSBubyBidXR0b25zICovXHJcblx0Tm9uZSA9IDAsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgQ2xvc2UgYnV0dG9uICovXHJcblx0Q2xvc2UsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgT0sgYnV0dG9uICovXHJcblx0T0ssXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgT0sgYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0T2tDYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8sXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzLCBObyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRZZXNOb0NhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7U2xpY2UsIG1lcmdlU2xpY2VzfSBmcm9tIFwiLi4vdXRpbC9Mb2NhbFN0eWxlc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBvcHVwIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgbW9kZWxlc3MgYW5kIG1vZGFsIHBvcHVwcy4gSXQgcHJvdmlkZXMgdGhlIGJhc2ljIG1lY2hhbmljc1xyXG4vLyBmb3Igc2hvd2luZyBhbmQgY2xvc2luZyB0aGUgcG9wdXBzIGluY2x1ZGluZyBtb3ZpbmcgaXQgd2l0aCB0aGUgbW91c2UuIFRoZSBjb250ZW50IG9mIHRoZVxyXG4vLyBwb3B1cCBpcyBlaXRoZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHVjdG9yIG9yIGlzIHByb3ZpZGVkIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBQb3B1cCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIHRoZSBvYmplY3QgZGVzY3JpYmluZyB0aGUgc3R5bGVzIGFuZCBjb250ZW50IHRoYXQgc2hvdWxkIGJlXHJcblx0Ly8gZGlzcGxheWVkIHdpdGhpbiB0aGUgcG9wdXAuIEl0IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZVxyXG5cdC8vIGdldERsZ1NsaWNlIG1ldGhvZC5cclxuXHRjb25zdHJ1Y3RvciggZGxnU2xpY2U/OiBTbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5kbGdTbGljZSA9IGRsZ1NsaWNlID8gZGxnU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBQb3B1cCBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIVBvcHVwLkRlZmF1bHREbGdTbGljZSlcclxuXHRcdFx0UG9wdXAuRGVmYXVsdERsZ1NsaWNlID0geyBzdHlsZTogeyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJXaWR0aDogMSwgcGFkZGluZzogXCIwXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIHRoZSBkaWFsb2cgYXMgYSBtb2RlbGVzcyBwb3B1cC4gSXQgc2hvdWxkIGJlIGNsb3NlZCB3aXRoIHRoZSBDbG9zZSBtZXRob2QuXHJcblx0cHVibGljIG9wZW4oIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsb3NlcyB0aGUgZGlhbG9nIG9wZW5lZCBhcyBhIG1vZGVsZXNzIHBvcHVwLiBUaGlzIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCB0byBjbG9zZSBhIG1vZGFsXHJcblx0Ly8gZGlhbG9nLlxyXG5cdHB1YmxpYyBjbG9zZSggcmV0VmFsPzogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLmNsb3NlKCk7XHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKCByZXRWYWwpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyBhIG1vZGFsIGRpYWxvZy4gVGhlIGRpYWxvZyBpcyBjbG9zZWQgd2l0aCB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgYW5kIHRoZSBwYXJhbWV0ZXJcclxuXHQvLyBwYXNzZWQgdG8gdGhlIENsb3NlTW9kYWwgbWV0aG9kIGlzIHJldHVybmVkIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZS5cclxuXHRwdWJsaWMgc2hvd01vZGFsKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggXCJEaWFsb2cgaXMgYWxyZWFkeSBvcGVuXCIpO1xyXG5cclxuXHRcdGxldCBwcm9taXNlOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZTxhbnk+KCAocmVzb2x2ZSkgPT4ge3RoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSByZXNvbHZlfSk7XHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93TW9kYWwoKTtcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3Blbi5cclxuXHRwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGcgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kYWwuXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RhcnRzIG1vbml0b3JpbmcgbW91c2UgbW92ZW1lbnRzIGFuZCBtb3ZlcyB0aGUgZGlhbG9nIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludGVudGVkIHRvIGJlIGNhbGxlZCBmcm9tIGEgbW91c2Vkb3duIGV2ZW50IHNvbWV3aGVyZSB3aXRoaW4gdGhlIHBvcHVwLlxyXG5cdHB1YmxpYyBzdGFydE1vdmUoIGU6IE1vdXNlRXZlbnQpXHJcblx0e1xyXG5cdFx0Ly8gd2UgcHJldmVudCBkZWZhdWx0IGFjdGlvbiBhbmQgcHJvcGFnYXRpb24gc28gdGhhdCBtb3VzZSBtb3ZlbWVudHMgZG9uJ3QgY2F1c2VcclxuXHRcdC8vIHRlc3QgaW4gdGhlIHBvcHVwIGFuZCBvbiB0aGUgcGFnZSB0byBiZSBzZWxlY3RlZC5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IHJlY3QgPSB0aGlzLmRsZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IHJlY3QudG9wO1xyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCA9IHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ICsgXCJweFwiO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcblx0Ly8gc29tZSBwYXJ0IG9mIHRoZSBkaWFsb2cgYXQgdGhlIHRvcC1sZWZ0IGNvcm5lciByZW1haW5zIHZpc2libGUgaW4gb3JkZXIgdG8gdGhlIHVzZXIgdG8gYmVcclxuXHQvLyBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuXHRwdWJsaWMgbW92ZSggbmV3WDogbnVtYmVyLCBuZXdZOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0aWYgKG5ld1ggPCAwKVxyXG5cdFx0XHRuZXdYID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1ggKyAzMCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRuZXdYID0gd2luZG93LmlubmVyV2lkdGggLSAzMDtcclxuXHJcblx0XHRpZiAobmV3WSA8IDApXHJcblx0XHRcdG5ld1kgPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WSArIDMwID4gd2luZG93LmlubmVySGVpZ2h0KVxyXG5cdFx0XHRuZXdZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzA7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZSBhbmQgYWxzbyByZW1lbWJlciB0aGVtIGluIG91ciBTbGljZSBzbyB0aGF0IHRoZXkgY2FuIGJlIHNwZWNpZmllZFxyXG5cdFx0Ly8gYXMgcHJvcGVydGllcyBpZiB0aGUgY29tcG9uZW50IGlzIHJlcmVuZGVyZWRcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSBuZXdYO1xyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gbmV3WTtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wICsgXCJweFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY3VyckRsZ1NsaWNlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBkZWZpbmUgcG9zaXRpb25pbmcgc3R5bGVzLiBJZiB4IGFuZC9vciB5IGFyZSB1bmRlZmluZWQsIHdlIGNlbnRlciB0aGUgZGlhbG9nIGhvcml6b250YWxseVxyXG5cdFx0XHQvLyBhbmQvb3IgdmVydGljYWxseVxyXG5cdFx0XHRsZXQgc3R5bGU6IFN0eWxlc2V0ID0geyBwb3NpdGlvbjogXCJmaXhlZFwiIH1cclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbFggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0XHRcdHN0eWxlLnJpZ2h0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS5sZWZ0ID0gdGhpcy5pbml0aWFsWDtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5MZWZ0ID0gXCIwXCI7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luUmlnaHQgPSBcIjBcIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbFkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLnRvcCA9IDA7XHJcblx0XHRcdFx0c3R5bGUuYm90dG9tID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS50b3AgPSB0aGlzLmluaXRpYWxZO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJEbGdTbGljZSA9IG1lcmdlU2xpY2VzKCBQb3B1cC5EZWZhdWx0RGxnU2xpY2UsIHRoaXMuZ2V0RGxnU2xpY2UoKSwge3N0eWxlfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaWFsb2cgcmVmPXtyZWYgPT4gdGhpcy5kbGcgPSByZWZ9IHN0eWxlPXt0aGlzLmN1cnJEbGdTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e3RoaXMuY3VyckRsZ1NsaWNlLmNsYXNzTmFtZX0gey4uLnRoaXMuY3VyckRsZ1NsaWNlLnByb3BzfT5cclxuXHRcdFx0e3RoaXMuY3VyckRsZ1NsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2RpYWxvZz47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFsbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBTbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRsZ1NsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZW5kZXJzIHRoZSBwb3B1cC5cclxuXHRwcml2YXRlIGNyZWF0ZSggeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbml0aWFsWCA9IHg7XHJcblx0XHR0aGlzLmluaXRpYWxZID0geTtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSA8ZGl2PiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIGVuZCBvZiA8Ym9keT4uIFRoZW4gcmVuZGVyIG91ciBjb21wb25lbnQnc1xyXG5cdFx0Ly8gY29udGVudCB1bmRlciBpdC5cclxuXHRcdHRoaXMuYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHRtaW0ubW91bnQoIHRoaXMsIHRoaXMuYW5jaG9yRGl2KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZW5kZXJzIGFuZCBkZXN0cm95cyB0aGUgZGlhbG9nLlxyXG5cdHByaXZhdGUgZGVzdHJveSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG5cdFx0bWltLnVubW91bnQoIHRoaXMuYW5jaG9yRGl2KTtcclxuXHRcdHRoaXMuYW5jaG9yRGl2LnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVzIGtleWRvd24gZXZlbnQgdG8gcHJldmVudCBjbG9zaW5nIHRoZSBkaWFsb2cgYnkgRXNjIGtleS5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9ICggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykgLy8gRXNjXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Nb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tb3ZlKCBlLmNsaWVudFggLSB0aGlzLmRyYWdQb2ludE9mZnNldFgsIGUuY2xpZW50WSAtIHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uU3RvcE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uU3RvcE1vdmUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFseSBvciBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0cHJpdmF0ZSBkbGdTbGljZTogU2xpY2U7XHJcblx0cHVibGljIGdldCBEbGdTbGljZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5EbGdTbGljZTsgfVxyXG5cclxuXHQvLyBDdXJyZW50IHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHRoYXQgY29tYmluZSBvdXIgZGVmYXVsdHMgcGx1cyB0aG9zZSBwcm92aWRlZFxyXG5cdC8vIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzIHBsdXMgdGhvc2UgcmVmbGVjdGluZyB0aGUgZGlhbG9nIHBvc2l0aW9uaW5nLlxyXG5cdHByaXZhdGUgY3VyckRsZ1NsaWNlOiBTbGljZTtcclxuXHJcblx0Ly8gRWxlbWVudCB1bmRlciB3aGljaCB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkLiBUaGlzIGVsZW1lbnQgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlXHJcblx0Ly8gPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQgYW5kIGlzIHJlbW92ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cclxuXHRwcml2YXRlIGFuY2hvckRpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdC8vIEluaXRpYWwgWCBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxYOiBudW1iZXI7XHJcblxyXG5cdC8vIEluaXRpYWwgWSBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxZOiBudW1iZXI7XHJcblxyXG5cdC8vLy8gUmVmZXJlbmNlIHRvIHRoZSA8ZGlhbG9nPiBlbGVtZW50IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkLlxyXG5cdC8vcHJpdmF0ZSBkbGdSZWYgPSBuZXcgbWltLlJlZjxIVE1MRGlhbG9nRWxlbWVudD4oIHJlZiA9PiB0aGlzLmRsZyA9IHJlZik7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHRwcml2YXRlIGRsZzogSFRNTERpYWxvZ0VsZW1lbnQ7XHJcblxyXG5cdC8vIFByb21pc2Ugd2hpY2ggaXMgY3JlYXRlZCBmb3IgbW9kYWwgZGlhbG9nIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBtb2RhbCBkaWFsb2dcclxuXHQvLyBpcyBjbG9zZWQuIFRoZSBwcm9taXNlIGlzIHJldHVybmVkIGZyb20gU2hvd01vZGFsLlxyXG5cdHByaXZhdGUgbW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmM6IChhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpdj4gZWxlbWVudCBjb250YWluaW5nIHRoZSBjYXB0aW9uLlxyXG5cdHByaXZhdGUgY2FwdGlvbiA9IG5ldyBtaW0uUmVmPEhUTUxFbGVtZW50PigpO1xyXG5cclxuXHQvLyBPZmZzZXRzIG9mIHRoZSBwb2ludCB3aGVyZSB0aGUgbW92ZSBzdGFydGVkIGZyb20gdGhlIGRpYWxvZyB0b3AtbGVmdCBjb3JuZXIuIFdlIHVzZSB0aGVtXHJcblx0Ly8gdG8gY2FsY3VsYXRlIHRoZSBkaWFsb2cgdG9wLWxlZnQgcG9zaXRpb24gYmFzZWQgb24gdGhlIG1vdXNlIGNvb3JkaW5hdGVzIHdoaWxlIG1vdmUgaXNcclxuXHQvLyBpbiBwcm9ncmVzcy5cclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFk6IG51bWJlcjtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciA8ZGlhbG9nPiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0RGxnU2xpY2U6IFNsaWNlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW11cmwgZnJvbSBcIm1pbXVybFwiXHJcbmltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIm1pbWJsL2xpYi9hcGkvbWltXCJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcblx0e1xyXG4gICAgICAgIFJvdXRlcjogSVJvdXRlclNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUm91dGVyU2VydmljZSBpcyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgdGhlIFJvdXRlciBjb21wb25lbnQuIEl0IGFsbG93c1xyXG4gKiBzdWJzY3JpYmVycyB0byBuYXZpZ2F0ZSB0byBwYXRocyBkZWZpbmVkIGJ5IFJvdXRlcidzIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclNlcnZpY2Vcclxue1xyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0bmF2aWdhdGVCeVVSTCggdXJsOiBzdHJpbmcsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gTmF2aWdhdGVzIHRvIGEgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIG9iamVjdCBjb250YWluaW5nIGZpZWxkIHZhbHVlcyB0aGF0IGlzIHBhc3NlZCB3aGVuIG5hdmlnYXRpbmcgdG8gYSByb3V0ZS4gV2hlblxyXG4gKiBuYXZpZ2F0aW5nIGJ5IHJvdXRlIElELCB0aGUgZmllbGRzIGFyZSBwYXNzZWQgZXhwbGljaXRseS4gV2hlbiBuYXZpZ2F0aW5nIGJ5IFVSTCwgdGhlIGZpZWxkc1xyXG4gKiBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTCBhY2NvcmRpbmcgdG8gdGhlIFVSTCBwYXR0ZXJuIGluIHRoZSByb3V0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlRmllbGRzID0geyBbUDogc3RyaW5nXTogbWltdXJsLkZpZWxkVmFsdWVUeXBlIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkgZm9yIGEgcm91dGUuIEl0IGNhbiByZXR1cm4gYSBQcm9taXNlIGluXHJcbiAqIHdoaWNoIGNhc2UgdGhlIFJvdXRlciB3aWxsIGRpc3BsYXkgcHJvZ3Jlc3MgVUkgdW50aWwgdGhlIGNvbnRlbnQgYmVjb21lcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZUb1JvdXRlRnVuY1R5cGUgPSAoZmllbGRzOiBSb3V0ZUZpZWxkcykgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgd2hlbiBuYXZpZ2F0aW5nIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuIElmIGZhbHNlXHJcbiAqIGlzIHJldHVybmVkLCBuYXZpZ2F0aW9uIGRvZXNuJ3QgaGFwcGVuLiBUaGlzIGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyXHJcbiAqIGFib3V0IHVuc2F2ZWQgZGF0YS4gSWYgUHJvbWlzZSBpcyByZXR1cm5lZCwgdGhlIFJvdXRlciB3aWxsIHdhaXQgdW50aWwgdGhlIHJlc3BvbnNlIGlzIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hdkZyb21Sb3V0ZUZ1bmNUeXBlID0gKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUm91dGUgaW50ZXJmYWNlIGRlZmluZXMgYSBuYXZpZ2F0aW9uIHRhcmdldC4gUm91dGVzIGNhbiBoYXZlIHN1Yi1yb3V0ZXMsIHdoaWNoIGNyZWF0ZXMgYVxyXG4gKiBoaWVyYXJjaHkgb2Ygcm91dGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVxyXG57XHJcblx0LyoqXHJcblx0ICogVW5pcXVlIChidXQgb3B0aW9uYWwpIElEIHRoYXQgYWxsb3dzIG5hdmlnYXRpbmcgdG8gdGhlIHRhcmdldCB1c2luZyBhIHNpbXBsZSBJRCBpbnN0ZWFkIG9mXHJcblx0ICogcGF0aC4gVGhlIHBhdGggbWVtYmVyIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyJ3MgYWRkcmVzcyBjb250cm9sLlxyXG5cdCAqL1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBVUkwgcGF0dGVybiAtIGNhbiBjb250YWluIG5hbWVkIHBhcmFtZXRlcnMgKGFzIGluIC91c2Vycy97dWlkfSkuIFRoaXMgY2FuIGJlIGxlZnQgZW1wdHlcclxuXHQgKiBpZiBvbmx5IGlkIGlzIHVzZWRcclxuXHQgKi9cclxuXHR1cmxQYXR0ZXJuPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgaGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRpb24gZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkuXHJcblx0ICovXHJcblx0bmF2VG9GdW5jPzogTmF2VG9Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXIgYWJvdXQgdW5zYXZlZCBkYXRhLlxyXG5cdCAqL1xyXG5cdG5hdkZyb21GdW5jPzogTmF2RnJvbVJvdXRlRnVuY1R5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzLCB3aGljaCBhcmUgc3ViLXJvdXRlcyBvZiB0aGlzIHJvdXRlLlxyXG5cdCAqL1xyXG5cdHN1YlJvdXRlcz86IFJvdXRlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIHRoYXQgaXMgdXNlZCBhcyBhIHN0YXRlIGZvciBIaXN0b3J5LnB1c2hTdGF0ZSBmdW5jdGlvbi4gSXQgcmVtZW1iZXJzIHRoZVxyXG4gKiBwYXJhbWV0ZXJzIG9mIGEgcm91dGUgdG8gbmF2aWdhdGUgdG8gd2hlbiB0aGUgdXNlciBnb2VzIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3NlcidzXHJcbiAqIGhpc3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBSb3V0ZVN0YXRlXHJcbntcclxuXHRyb3V0ZUlEOiBzdHJpbmc7XHJcblx0cm91dGVVUkw6IHN0cmluZztcclxuXHRmaWVsZHM6IFJvdXRlRmllbGRzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZS5cclxuICogVGhpcyBhbGxvd3MgdGhlIHJvdXRlciBkbyBoYXZlIGl0cyBvd24gY29udGVudCAtIHRoZSBzYW1lIGZvciBhbGwgcm91dGVzIC0gYW5kIGluc2VydCB0aGVcclxuICogY3VycmVudCByb3V0ZXIncyBjb250ZW50IGludG8gaXQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZSA9IChyb3V0ZUNvbnRlbnQ6IGFueSkgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYnkgdGhlIFJvdXRlciB0byBkaXNwbGF5IGEgcHJvZ3Jlc3MgVUkgd2hpbGUgaXQgaXMgbG9hZGluZ1xyXG4gKiByb3V0ZSBjb250ZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAoKSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclByb3BzIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnkgQVBJIHRvXHJcblx0ICogcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLiBEZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0Y29udHJvbHNCcm93c2VyPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvIGEgcm91dGVyIHVwXHJcblx0ICogdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHQgKi9cclxuXHRjaGFpbnNUb0hpZ2hlclJvdXRlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCBiYXNlZCBvbiB3aGljaCBhbGwgcm91dGUgcGF0aHMgd2lsbCBiZSByZXNvbHZlZC4gRGVmYXVsdCB2YWx1ZSBpc1xyXG5cdCAqIHRydWUuXHJcblx0ICovXHJcblx0YmFzZVVSTD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlciBjb21wb25lbnQgcHJvdmlkZXMgY2xpZW50LXNpZGUgcm91dGluZy4gSXQgd29ya3Mgd2l0aCBSb3V0ZSBvYmplY3RzIHRoYXQgZGVmaW5lXHJcbiAqIGF2YWlsYWJsZSBuYXZpZ2F0aW9uIHRhcmdldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm91dGVyIGV4dGVuZHMgbWltLkNvbXBvbmVudDxJUm91dGVyUHJvcHMsUm91dGVbXT4gaW1wbGVtZW50cyBJUm91dGVyU2VydmljZSwgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBJUm91dGVyUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHJvdXRlIG9mIHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHRcdFx0dGhpcy5hZGRSb3V0ZSggcm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBnaXZlbiByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QuXHJcblx0ICogQHBhcmFtIHJvdXRlIFtbUm91dGVdXSBvYmplY3QgdG8gYWRkXHJcblx0ICogQHBhcmFtIGluZGV4IEluZGV4IGF0IHdoaWNoIHRvIGFkZCB0aGUgcm91dGUgb2JqZWN0LiBJZiB0aGUgaW5kZXggaXMgbm90IGRlZmluZWQsIHRoZVxyXG5cdCAqXHRcdHJvdXRlIGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuIElmIGluZGV4IGlzIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbFxyXG5cdCAqXHRcdGJlIHRocm93bi5cclxuXHQgKi9cclxuXHRwdWJsaWMgYWRkUm91dGUoIHJvdXRlOiBSb3V0ZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIlJvdXRlIG9iamVjdCBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHJcblx0XHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMCwgcm91dGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJvdXRlcy5wdXNoKCByb3V0ZSk7XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgYWRkIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSB0byB0aGUgbWFwXHJcblx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHJvdXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhIHJvdXRlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbGlzdCBhbmQgcmV0dXJucyB0aGUgUm91dGUgb2JqZWN0LiBJZiBpbmRleCBpc1xyXG5cdCAqIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGluZGV4XHJcblx0ICogQHJldHVybiBSb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRoYXQgd2FzIHJlbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZVJvdXRlKCBpbmRleDogbnVtYmVyKTogUm91dGVcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMSlbMF07XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgcmVtb3ZlIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSBmcm9tIHRoZSBtYXBcclxuXHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHJvdXRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgdG8gdGhlIG1hcCBvZiByb3V0ZXMgYnkgSURzIChvbmx5XHJcblx0Ly8gdGhlIHJvdXRlcyB0aGF0IGhhdmUgdGhlaXIgaWQgcHJvcGVydHkgZGVmaW5lZCBhbmQgbm90IGVtcHR5KS5cclxuXHRwcml2YXRlIGFkZFJvdXRlVG9NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5zZXQoIHJvdXRlLmlkLCByb3V0ZSk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGVUb01hcCggc3ViUm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgZnJvbSB0aGUgbWFwIG9mIHJvdXRzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSByZW1vdmVSb3V0ZUZyb21NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5kZWxldGUoIHJvdXRlLmlkKTtcclxuXHJcblx0XHRpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdWJSb3V0ZSBvZiByb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVSb3V0ZUZyb21NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBAcGFyYW0gdXJsIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBuYXZpZ2F0ZSB0b1xyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5XHJcblx0ICovXHJcblx0cHVibGljIG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IFtyb3V0ZSwgZmllbGRzXSA9IHRoaXMuZmluZFJvdXRlQnlVUkwoIHVybCk7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlKVxyXG5cdFx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZS5yLm5hdmlnYXRlQnlVUkwoIHVybCwgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5SUQoIGlkOiBzdHJpbmcsIGZpZWxkcz86IFJvdXRlRmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXNCeUlELmdldCggaWQpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5SUQoIGlkLCBmaWVsZHMpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB3ZSBtYXkgbmVlZCB0byBzdWJzdGl0dXRlIHBhcmFtZXRlcnMgaW4gdGhlXHJcblx0XHQvLyByb3V0ZSdzIFVSTCBwYXR0ZXJuXHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdHVybCA9IHJvdXRlLnVybFBhdHRlcm47XHJcblx0XHRcdGlmICh1cmwgJiYgZmllbGRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdmlnYXRlVG9Sb3V0ZSggcm91dGUsIHVybCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmluZHMgYSByb3V0ZSBieSBnb2luZyB0aHJvdWdoIHRoZSByb3V0ZSBoaWVyYXJjaHkgYW5kIHRyeWluZyB0byBtYXRjaCB0aGUgZ2l2ZW4gVVJMLlxyXG5cdCAqIElmIHRoZSByb3V0ZSBpcyBmb3VuZCwgdGhlIFVSTCBpcyBwYXJzZWQgYW5kIGFueSBwYXJhbWV0ZXJzIGFyZSBleHRyYWN0ZWQgZnJvbSBpdC5cclxuXHQgKiBAcGFyYW0gdXJsXHJcblx0ICovXHJcblx0cHJpdmF0ZSBmaW5kUm91dGVCeVVSTCggdXJsOiBzdHJpbmcpOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdHJldHVybiBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgdGhpcy5yb3V0ZXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBMb29rcyBmb3IgYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMIGFtb25nIHRoZSBnaXZlbiBhcnJheSBvZiBSb3V0ZSBvYmplY3RzIGFuZFxyXG5cdCAqIHJlY3Vyc2l2ZWx5IGFtb25nIHRoZWlyIHN1Yi1yb3V0ZXMuXHJcblx0ICogQHBhcmFtIHVybCBVUkwgdG8gbWF0Y2hcclxuXHQgKiBAcGFyYW0gcm91dGVzIEFycmF5IG9mIFJvdXRlIG9iamVjdHMgdG8gbWF0Y2ggd2l0aCB0aGUgVVJMXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybDogc3RyaW5nLCByb3V0ZXM6IFJvdXRlW10pOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHJvdXRlIG9mIHJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IG1hdGNoUmVzdWx0ID0gbWltdXJsLm1hdGNoKCB1cmwsIHJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0XHRpZiAobWF0Y2hSZXN1bHQgJiYgbWF0Y2hSZXN1bHQuc3VjY2VzcylcclxuXHRcdFx0XHRyZXR1cm4gW3JvdXRlLCBtYXRjaFJlc3VsdC5maWVsZHNdO1xyXG5cdFx0XHRlbHNlIGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcm9vdEFuZEZpZWxkcyA9IFJvdXRlci5maW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsLCByb3V0ZS5zdWJSb3V0ZXMpO1xyXG5cdFx0XHRcdGlmIChyb290QW5kRmllbGRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJvb3RBbmRGaWVsZHM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW251bGwsIG51bGxdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIHJvdXRlIHBhc3NpbmcgdGhlIGdpdmVuIHBhcmFtZXRlcnMuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGlkIElEIG9mIHRoZSByb3V0ZVxyXG5cdCAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlJ3MgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgUm91dGVyIHNob3VsZCBjcmVhdGUgYSBuZXcgZW50cnkgaW4gdGhlXHJcblx0ICpcdFx0YnJvd3NlcidzIGhpc3RvcnkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBuYXZpZ2F0ZVRvUm91dGUoIHJvdXRlOiBSb3V0ZSwgdXJsOiBzdHJpbmcsIGZpZWxkczogUm91dGVGaWVsZHMsXHJcblx0XHRcdFx0XHRtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0Ly8vLyBjaGVjayBpZiB0aGUgbmV3IHJvdXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHJvdXRlIGFuZCBkb24ndCBkbyBhbnl0aGluZ1xyXG5cdFx0Ly9pZiAocm91dGUgPT09IHRoaXMuY3VyclJvdXRlKVxyXG5cdFx0Ly9cdHJldHVybjtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIGN1cnJlbnQgcm91dGUsIGFzayBpdCBpZiB3ZSBjYW4gbGVhdmUgaXRcclxuXHRcdGlmICh0aGlzLmN1cnJSb3V0ZSAmJiB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJldDogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4gPSB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYygpO1xyXG5cdFx0XHRpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0XHRyZXQgPSBhd2FpdCAocmV0IGFzIFByb21pc2U8Ym9vbGVhbj4pO1xyXG5cclxuXHRcdFx0aWYgKCFyZXQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB1c2UgSGlzdG9yeSBBUEkgdG8gY2hhbmdlIHN0YXRlXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIgJiYgbWFrZUhpc3RvcnlFbnRyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiByb3V0ZS5pZCwgcm91dGVVUkw6IHVybCwgZmllbGRzIH07XHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCBzdGF0ZSwgXCJcIiwgdXJsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJvdXRlIGFuZCBnZXQgaXRzIGNvbnRlbnRcclxuXHRcdHRoaXMuY3VyclJvdXRlID0gcm91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gcm91dGUubmF2VG9GdW5jID8gcm91dGUubmF2VG9GdW5jKCBmaWVsZHMpIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gYXdhaXQgKGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHQvLyByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQgc28gdGhhdCBvdXIgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZFxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIGVycm9yIHdhcyByYWlzZWQgYnkgb25lIG9mIHRoZSBkZXNjZW5kYW50IGNvcG9uZW50cy5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gcHVibGlzaCBvdXJzZWx2ZXMgYXMgYSByb3V0ZXIgc2VydmljZVxyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJSb3V0ZXJcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gaWYgaW5zdHJ1Y3RlZCBzbywgc3Vic2NyaWJlIHRvIGEgcm91dGVyIHNlcnZpY2UgaW1wbGVtZW50ZWQgYnkgYW55IG9mIGNvbXBvbmVudHNcclxuXHRcdC8vIHVwIHRoZSBjaGFpblxyXG5cdFx0aWYgKHRoaXMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSA9IG5ldyBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPigpO1xyXG5cdFx0XHR0aGlzLnZuLnN1YnNjcmliZVNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmluZCB0aGUgZmlyc3Qgcm91dGUgdG8gZGlzcGxheVxyXG5cdFx0bGV0IGZpcnN0Um91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMubGVuZ3RoID4gMCA/IHRoaXMucm91dGVzWzBdIDogbnVsbDtcclxuXHRcdGlmICghZmlyc3RSb3V0ZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3VyclJvdXRlID0gZmlyc3RSb3V0ZTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPSBmaXJzdFJvdXRlLm5hdlRvRnVuYyA/IGZpcnN0Um91dGUubmF2VG9GdW5jKCB7fSkgOiBudWxsO1xyXG5cdFx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcIlBsZWFzZSB3YWl0IHdoaWxlIGNvbnRlbnQgaXMgbG9hZGluZy4uLlwiO1xyXG5cdFx0XHQoY29udGVudCBhcyBQcm9taXNlPGFueT4pLnRoZW4oICggZGVsYXllZENvbnRlbnQ6IGFueSkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGRlbGF5ZWRDb250ZW50O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlTWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZXN0YWJsaXNoIGJhc2UgVVJMIHJlbGF0aXZlIHRvIHdoaWNoIGFsbCBwYXRocyB3aWxsIGJlIGNvbnNpZGVyZWRcclxuXHRcdFx0aWYgKCF0aGlzLmJhc2VVUkwpXHJcblx0XHRcdHtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc3Vic2NyaWJlIHRvIHRoZSBwb3BzdGF0ZSBldmVudCBmb3IgbW9uaXRvcmluZyBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BzdGF0ZSk7XHJcblxyXG5cdFx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSB7IHJvdXRlSUQ6IGZpcnN0Um91dGUuaWQsIHJvdXRlVVJMOiBmaXJzdFJvdXRlLnVybFBhdHRlcm4sIGZpZWxkczogbnVsbCB9O1xyXG5cdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSggc3RhdGUsIFwiXCIsIGZpcnN0Um91dGUudXJsUGF0dGVybik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudm4udW5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52aXJ0UmVuZGVyKCB0aGlzLmN1cnJSb3V0ZUNvbnRlbnQpO1xyXG5cdH1cclxuXHRcclxuXHJcblxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIG5vZGVQYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvL3RoaXMuZXJyb3IgPSBlcnI7XHJcblx0XHQvL3RoaXMuZXJyb3JQYXRoID0gbm9kZVBhdGg7XHJcblx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcclxuXHRcdFx0PGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicGlua1wiLCBkaXNwbGF5OlwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdFx0e2Vycn1cclxuXHRcdFx0XHR7bm9kZVBhdGggJiYgbm9kZVBhdGgubWFwKCAobmFtZSkgPT4gPHNwYW4+e25hbWV9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBcIlZpcnR1YWxcIiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy4gUmVzcG9uc2libGUgZm9yIHJldHVybmluZ1xyXG5cdCAqIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBlaXRoZXIgY2FsbHNcclxuXHQgKiB0aGUgb3V0ZXJDb250ZW50RnVuYyBpZiBkZWZpbmVkIG9yIGp1c3QgcmV0dXJucyB0aGUgY29udGVudCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGN1cnJSb3V0ZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJuIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCB2aXJ0UmVuZGVyKCBjdXJyUm91dGVDb250ZW50OiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHQvL3JldHVybiB0aGlzLm91dGVyQ29udGVudEZ1bmMgPyB0aGlzLm91dGVyQ29udGVudEZ1bmMoIGN1cnJSb3V0ZUNvbnRlbnQpIDogY3VyclJvdXRlQ29udGVudDtcclxuXHRcdHJldHVybiBjdXJyUm91dGVDb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWFjdHMgb24gdXNlciB1c2luZyBiYWNrIGFuZCBmb3J3YXJkIGJ1dHRvbnMuXHJcblx0cHJpdmF0ZSBvblBvcHN0YXRlID0gKCBlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IGUuc3RhdGUgYXMgUm91dGVTdGF0ZTtcclxuXHRcdGlmICghc3RhdGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoc3RhdGUucm91dGVJRClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5SUQoIHN0YXRlLnJvdXRlSUQsIHN0YXRlLmZpZWxkcyk7XHJcblx0XHRlbHNlIGlmIChzdGF0ZS5yb3V0ZVVSTClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5VVJMKCBzdGF0ZS5yb3V0ZVVSTCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCBcIlJvdXRlIHN0YXRlIGluIHBvcHN0YXRlIGV2ZW50IGhhcyBuZWl0aGVyIHJvdXRlIElEIG5vciBwYXRoLlwiKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnlcclxuXHQvLyBBUEkgdG8gcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLlxyXG5cdHByaXZhdGUgZ2V0IGNvbnRyb2xzQnJvd3NlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5wcm9wcy5jb250cm9sc0Jyb3dzZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgdGhhdCBpZiB0aGlzIHJvdXRlciBjYW5ub3QgcmVzb2x2ZSBhIHBhdGgsIGl0IHdpbGwgZGVsZWdhdGUgdG9cclxuXHQvLyBhIHJvdXRlciB1cCB0aGUgY29tcG9uZW50IGNoYWluIChpZiB0aGVyZSBpcyBvbmUpLlxyXG5cdHByaXZhdGUgZ2V0IGNoYWluc1RvSGlnaGVyUm91dGVyKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGFpbnNUb0hpZ2hlclJvdXRlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuXHJcblx0cHJpdmF0ZSBnZXQgYmFzZVVSTCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5iYXNlVVJMID09PSB1bmRlZmluZWQgPyBcIlwiIDogdGhpcy5wcm9wcy5iYXNlVVJMO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgZnVuY3Rpb24gdGhhdCByZW5kZXJzIHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHJvdXRlIGluc2lkZSB0aGUgcm91dGVyJ3Mgb3duIGNvbnRlbnQuIElmXHJcblx0ICogdGhpcyBtZW1iZXIgaXMgdW5kZWZpbmVkLCBvbmx5IHRoZSBjdXJyZW50IHJvdXRlJ3MgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0IE91dGVyQ29udGVudEZ1bmMoIHZhbDogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5vdXRlckNvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBvdXRlckNvbnRlbnRGdW5jOiBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0LyoqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhIHByb2dyZXNzIFVJIHdoaWxlIHRoZSByb3V0ZXIgaXMgbG9hZGluZyByb3V0ZSBjb250ZW50LiAqL1xyXG5cdHB1YmxpYyBzZXQgUHJvZ3Jlc3NDb250ZW50RnVuYyggdmFsOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZSkgeyB0aGlzLnByb2dyZXNzQ29udGVudEZ1bmMgPSB2YWw7IH1cclxuXHRwcml2YXRlIHByb2dyZXNzQ29udGVudEZ1bmM6IFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlO1xyXG5cclxuXHQvLyBBIHJvdXRlciBzZXJ2aWNlIHRoaXMgcm91dGVyIHdpbGwgZGVsZWdhdGUgdG8gd2hlbiBpdCBjYW5ub3QgcmVzb2x2ZSBhIHBhdGguXHJcblx0cHJpdmF0ZSBoaWdoZXJSb3V0ZXJTZXJ2aWNlOiBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPjtcclxuXHJcblx0Ly8gT3JkZXJlZCBsaXN0IG9mIFJvdXRlIG9iamVjdHMgLSB1c2VkIHRvIGZpbmQgcm91dGVzIGJ5IG1hdGNoaW5nIHBhdGhzLiBOb3RlIHRoYXQgdGhpc1xyXG5cdC8vIGxpc3QgaXMgYWN0dWFsbHkgYSBoaWVyYXJjaHkgYmVjYXVzZSByb3V0ZXMgY2FuIGNvbnRhaW4gc3ViLXJvdXRlcy5cclxuXHRwcml2YXRlIHJvdXRlczogUm91dGVbXSA9IFtdO1xyXG5cclxuXHQvLyBNYXAgb2Ygcm91dGUgSURzIHRvIFJvdXRlIG9iamVjdHMuIEFsbCByb3V0ZXMgdGhhdCBkZWZpbmUgYW4gSUQgYXJlIGFkZGVkIHRvIHRoaXMgbWFwIC1cclxuXHQvLyBubyBtYXR0ZXIgaG93IGRlZXAgaW4gdGhlIGhpZXJhcmNoeS5cclxuXHRwcml2YXRlIHJvdXRlc0J5SUQgPSBuZXcgTWFwPHN0cmluZyxSb3V0ZT4oKTtcclxuXHJcblx0Ly8gQ3VycmVudGx5IGRpc3BsYXllZCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZTogUm91dGU7XHJcblxyXG5cdC8vIENvbnRlbnQgcG92aWRlZCBieSB0aGUgY3VycmVudCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZUNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gRXJyb3IgYW5kIGNvbXBvbmVudCBwYXRoIGluIGNhc2UgYW4gZXJyb3IgaGFzIGJlZW4gY2F1Z2h0LlxyXG5cdHByaXZhdGUgZXJyb3I6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSBlcnJvclBhdGg6IHN0cmluZ1tdID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIExpbmtQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGZvciB0aGUgTGluayBjb21wb25lbnQgYmVjYXVzZS4gVGhlIHByb3BlcnRpZXMgaW5cclxuLy8gdGhpcyBpbnRlcmZhY2UgZGVmaW5lIHRoZSByb3V0ZTsgdGhlIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIElIdG1sQUVsZW1lbnRQcm9wcyBpbnRlcmZhY2VcclxuLy8gY29ycmVzcG9uZCB0byB0aGUgcmVsZXZhbnQgYXR0cmlidXRlcyBvZiB0aGUgPGE+IERPTSBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBtaW0uSUh0bWxBRWxlbWVudFByb3BzXHJcbntcclxuXHQvLyBQYXRoIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlVVJMPzogc3RyaW5nO1xyXG5cclxuXHQvLyBJRCBvZiB0aGUgcm91dGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byBhIHJvdXRlIGJ5IHRoZSBSb3V0ZXIuXHJcblx0cm91dGVJRD86IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSB3aGVuIHVzaW5nIHJvdXRlSUQuXHJcblx0ZmllbGRzPzogUm91dGVGaWVsZHM7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgc2hvdWxkIGJlIG1hZGUgYSBuZXcgZW50cnkgaW4gdGhlIGJyb3dzZXIncyBoaXN0b3J5O1xyXG5cdC8vIHRoYXQgaXMgdG8gYmUgc3ViamVjdCB0byBiYWNrIGFuZCBmb3J3YXJkIGJyb3dzZXIgY29tbWFuZHMuXHJcblx0bWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rIGNsYXNzIGlzIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIGNyZWF0aW5nIGxpbmtzIGhhbmRsZWQgYnkgYSBSb3V0ZXIgb2JqZWN0LiBJdCBpc1xyXG4vLyBpbXBsZW1lbnRlZCBhcyBhIG1hbmFnZWQgY29tcG9uZW50IGJlY2F1c2UgaXRzIGludGVuZGVkIHVzZSBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhlIDxhPiBET01cclxuLy8gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBMaW5rIGV4dGVuZHMgbWltLkNvbXBvbmVudDxMaW5rUHJvcHM+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IExpbmtQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBleHRyYWN0IG91ciBjdXN0b20gcGFyYW1ldGVycyBhbmQgbGVhdmUgb25seSB0aG9zZSB0aGF0IGFyZSA8YT4gYXR0cmlidXRlc1xyXG5cdFx0bGV0IHtyb3V0ZVVSTCwgcm91dGVJRCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5LCAuLi5yZXN0fSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gPGEgaHJlZj1cIiNcIiBjbGljaz17dGhpcy5vbkNsaWNrfSB7Li4ucmVzdH0+XHJcblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0PC9hPjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkNsaWNrKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgc2VydmljZTogSVJvdXRlclNlcnZpY2UgPSB0aGlzLnZuLmdldFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0aWYgKCFzZXJ2aWNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMucm91dGVJRClcclxuXHRcdFx0c2VydmljZS5uYXZpZ2F0ZUJ5SUQoIHRoaXMucHJvcHMucm91dGVJRCwgdGhpcy5wcm9wcy5maWVsZHMsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeVVSTCggdGhpcy5wcm9wcy5yb3V0ZVVSTCwgdGhpcy5wcm9wcy5tYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0lUcmVlLCBJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCJcclxuaW1wb3J0IHtUcmVlTm9kZUNvbnRhaW5lcn0gZnJvbSBcIi4vVHJlZU5vZGVDb250YWluZXJcIlxyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiXHJcbmltcG9ydCB7Q29tcG9uZW50V2l0aExvY2FsU3R5bGVzLCBJTUNzc1N0eWxlUnVsZX0gZnJvbSBcIi4uL3V0aWwvTG9jYWxTdHlsZXNcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlIGNsYXNzIGlzIGEgZ2VuZXJhbCBwdXJwb3NlIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGltcGxlbWVudHMgSVRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudGFiSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoICgpID0+IG5ldyBUcmVlTm9kZSggbnVsbCwgMCwgdGhpcykpO1xyXG5cdFx0dGhpcy5lbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fdGFiSW5kZXg7IH1cclxuXHRwdWJsaWMgc2V0IHRhYkluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1fdGFiSW5kZXggPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZE5vZGUoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9zZWxlY3RlZE5vZGU7IH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbG1SZWZ9IHRhYmluZGV4PXt0aGlzLnRhYkluZGV4fSBjbGFzcz17dGhpcy5jc3NDbGFzc1RyZWV9IGtleWRvd249e3RoaXMub25LZXlEb3dufT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKVxyXG5cdFx0XHR0aGlzLmV4cGFuZE9yU2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIilcclxuXHRcdFx0dGhpcy5jb2xsYXBzZU9yU2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbmV4dE5vZGUgPSB0aGlzLmZpbmREb3duKCBub2RlKTtcclxuXHRcdGlmIChuZXh0Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0bmV4dE5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdG5leHROb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcHJldk5vZGUgPSB0aGlzLmZpbmRVcCggbm9kZSk7XHJcblx0XHRpZiAocHJldk5vZGUpXHJcblx0XHR7XHJcblx0XHRcdHByZXZOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRwcmV2Tm9kZS5zY3JvbGxJbnRvVmlldyggdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGNvbGxhcHNlZCwgZXhwYW5kcyBpdC4gSWYgdGhlIG5vZGUgaXMgYWxyZWFkeSBleHBhbmRlZCwgc2VsZWN0cyB0aGUgZmlyc3RcclxuXHQvLyBjaGlsZCBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIHNlbGVjdHMgdGhlIG5leHQgbm9kZSBkb3duLlxyXG5cdHByaXZhdGUgZXhwYW5kT3JTZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld05vZGUgPSBub2RlLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdFx0XHRuZXdOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRcdG5ld05vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS5leHBhbmQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgZXhwYW5kZWQsIGNvbGxhcHNlcyBpdDsgb3RoZXJ3aXNlLCBzZWxlY3RzIHRoZSBub2RlJ3MgcGFyZW50LlxyXG5cdHByaXZhdGUgY29sbGFwc2VPclNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdG5vZGUuY29sbGFwc2UoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZERvd24oIG5vZGU6IFRyZWVOb2RlLCBza2lwRXhwYW5kZWRTdWJOb2RlczogYm9vbGVhbiA9IGZhbHNlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHNraXBFeHBhbmRlZFN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGlmIChub2RlLmluZGV4IDwgY29udGFpbmVyLm5vZGVzLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4ICsgMV07XHJcblx0XHRcdGVsc2UgaWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUubV9wYXJlbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pc0V4cGFuZGVkICYmIG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdG5vZGUuY29udGFpbmVyLm5vZGVzWzBdLnNlbGVjdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRVcCggbm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pbmRleCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubV9wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0bGV0IHByZXZOb2RlID0gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggLSAxXTtcclxuXHRcdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBwcmV2Tm9kZSk7XHJcblx0XHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IHByZXZOb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHdoaWNoIGlzIHRoZSBsYXN0IGV4cGFuZGVkIGRlc2NlbmRhbmQgb2YgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kTGFzdEV4cGFuZGVkTm9kZSggY3Vyck5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIWN1cnJOb2RlIHx8IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgfHwgIWN1cnJOb2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGxhc3RDaGlsZCA9IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlc1tjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoLTFdO1xyXG5cdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBsYXN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogbGFzdENoaWxkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NDbGFzc1RyZWUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlVHJlZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWVcIiwgXCIudHJlZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3Vyc29yOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZG9kZ2VyYmx1ZVwiXSxcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlXCIsIFwiLnRyZWUtbm9kZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50ID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudEhvdmVyID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQ6aG92ZXJcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKik6aG92ZXJcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJsaWdodGN5YW5cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwiZG90dGVkXCJdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJkb2RnZXJibHVlXCIsXHJcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUljb24gPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtaWNvblwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVJY29uID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWljb25cIiwgXCIudHJlZS1ub2RlLWljb24oKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxZW1cIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMWVtXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc1N1Ym5vZGVzID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1zdWJub2Rlc1wiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVN1Yk5vZGVzID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1zdWJub2Rlc1wiLCBcIi50cmVlLXN1Ym5vZGVzKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjE2cHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHJpdmF0ZSBtX3RhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBub2Rlcy5cclxuXHRwcml2YXRlIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBzZWxlY3RlZCBub2RlIG9yIG51bGwgaWYgbm8gbm9kZSBpcyBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9zZWxlY3RlZE5vZGU6IFRyZWVOb2RlID0gbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRyZWUuXHJcblx0cHVibGljIGVsbVJlZjogbWltLlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG5cdC8vIENTUyBydWxlcyB1c2VkIGJ5IHRoZSBUcmVlIGFuZCBUcmVlTm9kZSBjb250cm9sc1xyXG5cdHByaXZhdGUgY3NzUnVsZVRyZWU6IElNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGU6IElNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50OiBJTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudEhvdmVyOiBJTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudFNlbGVjdGVkOiBJTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlSWNvbjogSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlU3ViTm9kZXM6IElNQ3NzU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBDU1MgbG9jYWwgY2xhc3MgbmFtZXNcclxuXHRwdWJsaWMgY3NzQ2xhc3NUcmVlOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50OiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVJY29uOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzU3Vibm9kZXM6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwibWltY3NzXCIgXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlIGV4dGVuZHMgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHR0YWJJbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIG5vZGVzLlxyXG5cdHJlYWRvbmx5IG5vZGVzOiBJVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gY3VycmVudGx5IHNlbGVjdGVkIG5vZGVcclxuXHRyZWFkb25seSBzZWxlY3RlZE5vZGU6IElUcmVlTm9kZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZVBhcmFtcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBwYXJhbWV0ZXJzIG9mIGEgdHJlZSBub2RlIHRoYXQgY2FuIGJlIHNldC9jaGFuZ2VkXHJcbi8vIGV4dGVybmFsbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVBhcmFtc1xyXG57XHJcblx0Y29udGVudDogYW55O1xyXG5cdGljb24/OiBUcmVlTm9kZUljb25QYXJhbXM7XHJcblx0dGV4dENvbG9yPzogQ3NzQ29sb3I7XHJcblx0YmdDb2xvcj86IENzc0NvbG9yO1xyXG5cdGl0YWxpYz86IGJvb2xlYW47XHJcblx0Ym9sZD86IGJvb2xlYW47XHJcblx0Y3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcblx0ZGF0YT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZUljb25QYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhbiBpY29uIG9mIGEgdHJlZSBub2RlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgVHJlZU5vZGVJY29uUGFyYW1zID0ge2NsYXNzOiBzdHJpbmd9IHwge2ltZzogc3RyaW5nfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBub2RlIGluIHRoZSB0cmVlIGhpZXJhcmNoeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIGV4dGVuZHMgSVRyZWVOb2RlUGFyYW1zLCBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cmVhZG9ubHkgdHJlZTogSVRyZWU7XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRyZWFkb25seSBwYXJlbnQ6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRyZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM6IElUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRyZWFkb25seSBpc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBFeHBhbmRzIHRoZSBub2RlIHNvIHRoYXQgaXRzIHN1Yi1ub2RlcyBiZWNvbWUgdmlzaWJsZS5cclxuXHRleHBhbmQoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgdGhlIG5vZGUgaGlkaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0Y29sbGFwc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRzZWxlY3QoKTogdm9pZDtcclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHVuc2VsZWN0KCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0YWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlO1xyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRyZW1vdmVBbGxOb2RlcygpOiB2b2lkO1xyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRleHBhbmRBbGwoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdGNvbGxhcHNlQWxsKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCI7XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgdHJlZSBjb250cm9sIGluc3RhbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmVlKCk6IElUcmVlXHJcbntcclxuXHRyZXR1cm4gbmV3IFRyZWUoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldCwgQ3NzQ29sb3J9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge0lUcmVlLCBJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zLCBUcmVlTm9kZUljb25QYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIlxyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVHJlZU5vZGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBub2RlIHdpdGhpbiBhIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIG1pbS5Db21wb25lbnQgaW1wbGVtZW50cyBJVHJlZU5vZGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwYXJlbnQ6IFRyZWVOb2RlLCBsZXZlbDogbnVtYmVyLCB0cmVlOiBUcmVlID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubV9wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLm1fdHJlZSA9IHBhcmVudCAhPT0gbnVsbCA/IHBhcmVudC5tX3RyZWUgOiB0cmVlO1xyXG5cdFx0dGhpcy5tX2xldmVsID0gbGV2ZWw7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBUcmVlTm9kZUNvbnRhaW5lciggdGhpcy5ub2RlRmFjdG9yeSk7XHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29udGVudEVsbVJlZiA9IG5ldyBtaW0uUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGluc3RhbmNlcyBvZiBzdWItbm9kZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgbm9kZUZhY3RvcnkgPSAoKTogVHJlZU5vZGUgPT5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFRyZWVOb2RlKCB0aGlzLCB0aGlzLm1fbGV2ZWwgKyAxKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHJlZSB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25ncy5cclxuXHRwdWJsaWMgZ2V0IHRyZWUoKTogSVRyZWUgeyByZXR1cm4gdGhpcy5tX3RyZWU7IH1cclxuXHJcblx0Ly8gUGFyZW50IHRyZWUgbm9kZSBvciBudWxsIGZvciB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgcGFyZW50KCk6IElUcmVlTm9kZSB7IHJldHVybiB0aGlzLm1fcGFyZW50OyB9XHJcblxyXG5cdC8vIDAtYmFzZWQgbGV2ZWwgb2YgdGhlIG5vZGUgaW4gdGhlIGFuY2VzdHJhbCBoaWVyYXJjaHkuXHJcblx0cHVibGljIGdldCBsZXZlbCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX2xldmVsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV9pbmRleDsgfVxyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cHVibGljIHNldCBpbmRleCggdmFsOiBudW1iZXIpIHsgdGhpcy5tX2luZGV4ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSBwYXJhbWV0ZXJzLlxyXG5cdHB1YmxpYyBnZXQgY29udGVudCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2NvbnRlbnQ7IH1cclxuXHRwdWJsaWMgc2V0IGNvbnRlbnQoIHZhbDogc3RyaW5nKSB7IHRoaXMubV9jb250ZW50ID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBpY29uKCk6IFRyZWVOb2RlSWNvblBhcmFtcyB7IHJldHVybiB0aGlzLm1faWNvbjsgfVxyXG5cdHB1YmxpYyBzZXQgaWNvbiggdmFsOiBUcmVlTm9kZUljb25QYXJhbXMpIHsgdGhpcy5tX2ljb24gPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRleHRDb2xvcigpOiBDc3NDb2xvciB7IHJldHVybiB0aGlzLm1fdGV4dENvbG9yOyB9XHJcblx0cHVibGljIHNldCB0ZXh0Q29sb3IoIHZhbDogQ3NzQ29sb3IpIHsgdGhpcy5tX3RleHRDb2xvciA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgYmdDb2xvcigpOiBDc3NDb2xvciB7IHJldHVybiB0aGlzLm1fYmdDb2xvcjsgfVxyXG5cdHB1YmxpYyBzZXQgYmdDb2xvciggdmFsOiBDc3NDb2xvcikgeyB0aGlzLm1fYmdDb2xvciA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRhbGljKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2l0YWxpYzsgfVxyXG5cdHB1YmxpYyBzZXQgaXRhbGljKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2l0YWxpYyA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgYm9sZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9ib2xkOyB9XHJcblx0cHVibGljIHNldCBib2xkKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2JvbGQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY3VzdG9tQ2xhc3M7IH1cclxuXHRwdWJsaWMgc2V0IGN1c3RvbUNsYXNzKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY3VzdG9tQ2xhc3MgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHsgcmV0dXJuIHRoaXMubV9kYXRhOyB9XHJcblx0cHVibGljIHNldCBkYXRhKCB2YWw6IGFueSkgeyB0aGlzLm1fZGF0YSA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGV4cGFuZGVkLlxyXG5cdHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pc0V4cGFuZGVkOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0cHVibGljIGV4cGFuZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgc2VsZWN0KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5tX2lzU2VsZWN0ZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdC8vIHVuc2VsZWN0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSAoaWYgYW55KVxyXG5cdFx0XHRpZiAodGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgIT0gbnVsbClcclxuXHRcdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZS51bnNlbGVjdCgpO1xyXG5cclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHB1YmxpYyB1bnNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3ViTm9kZXMoKTogSVRyZWVOb2RlW10geyByZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXM7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGU6IFRyZWVOb2RlID0gdGhpcy5jb250YWluZXIuYWRkTm9kZSggcGFyYW1zLCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGZpcnN0IHN1Yi1ub2RlXHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblxyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZU5vZGUoIGluZGV4KTtcclxuXHJcblx0XHQvLyB1cGRhdGUgb25seSBpZiB0aGlzIHdhcyB0aGUgbGFzdCBzdWItbm9kZVxyXG5cdFx0aWYgKG9sZExlbmd0aCA9PT0gMSAmJiB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkTGVuZ3RoID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKG9sZExlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5leHBhbmQoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29sbGFwc2UoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmNvbGxhcHNlQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgdGhlIG5vZGUgaXMgbm90IHdpdGhpbiB0aGUgdmlld3BvcnQgYW5kIHNjcm9sbHMgaXQgaW50byB2aWV3IGFsaW5naW5nIGl0XHJcblx0Ly8gd2l0aCB0aGUgdXBwZXIgb3IgbG93ZXIgZWRnZSBvZiB0aGUgdHJlZSBjb250YWluZXIuXHJcblx0cHVibGljIHNjcm9sbEludG9WaWV3KCBhbGlnblVwOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5tX3RyZWUuZWxtUmVmLnIgfHwgIXRoaXMuY29udGVudEVsbVJlZi5yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IHRyZWUgYW5kIG5vZGUgYm91bmRpbmcgcmVjdFxyXG5cdFx0bGV0IHJjVHJlZTogQ2xpZW50UmVjdCA9IHRoaXMubV90cmVlLmVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjTm9kZTogQ2xpZW50UmVjdCA9IHRoaXMuY29udGVudEVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjTm9kZS5ib3R0b20gPD0gcmNUcmVlLmJvdHRvbSAmJiByY05vZGUudG9wID49IHJjVHJlZS50b3ApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYuci5zY3JvbGxJbnRvVmlldyggYWxpZ25VcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdHt0aGlzLnJlbmRlck5vZGUoKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyU3ViTm9kZXMoKX1cclxuXHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlck5vZGUoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGV4cGFuZGVyQ2xhc3NOYW1lOiBzdHJpbmcgPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgPyBcIlwiIDogdGhpcy5tX2lzRXhwYW5kZWQgPyBcImZhLWNhcmV0LWRvd25cIiA6IFwiZmEtY2FyZXQtcmlnaHRcIjtcclxuXHJcblx0XHRsZXQgaWNvbkNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICh0aGlzLm1faWNvbilcclxuXHRcdHtcclxuXHRcdFx0aWYgKFwiY2xhc3NcIiBpbiB0aGlzLm1faWNvbilcclxuXHRcdFx0XHRpY29uQ29udGVudCA9IDxzcGFuIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29uICsgXCIgXCIgKyB0aGlzLm1faWNvbi5jbGFzc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHRcdGVsc2UgaWYgKFwiaW1nXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8aW1nIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29ufSBzcmM9e3RoaXMubV9pY29uLmltZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvbnRlbnRDbGFzczogc3RyaW5nID0gdGhpcy5tX2lzU2VsZWN0ZWQgPyB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQgOiB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50O1xyXG5cdFx0aWYgKHRoaXMubV9jdXN0b21DbGFzcylcclxuXHRcdFx0Y29udGVudENsYXNzICs9IFwiIFwiICsgdGhpcy5tX2N1c3RvbUNsYXNzO1xyXG5cclxuXHRcdGxldCBjb250ZW50U3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblx0XHRpZiAodGhpcy5tX3RleHRDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmNvbG9yID0gdGhpcy5tX3RleHRDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1fYmdDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubV9iZ0NvbG9yO1xyXG5cdFx0aWYgKHRoaXMubV9pdGFsaWMpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cdFx0aWYgKHRoaXMubV9ib2xkKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGV9PlxyXG5cdFx0XHQ8aSBjbGFzcz17XCJmYSBmYS1mdyBcIiArIGV4cGFuZGVyQ2xhc3NOYW1lfSBjbGljaz17dGhpcy5vbkV4cGFuZGVyQ2xpY2tlZH0gLz5cclxuXHRcdFx0e2ljb25Db250ZW50fVxyXG5cdFx0XHQ8c3BhbiByZWY9e3RoaXMuY29udGVudEVsbVJlZn0gZHJhZ1NvdXJjZSBjbGFzcz17Y29udGVudENsYXNzfSBzdHlsZT17Y29udGVudFN0eWxlfVxyXG5cdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30+e3RoaXMubV9jb250ZW50fTwvc3Bhbj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlclN1Yk5vZGVzKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzU3Vibm9kZXN9IHN0eWxlPXt7ZGlzcGxheTp0aGlzLm1faXNFeHBhbmRlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblx0XHRcdHt0aGlzLmNvbnRhaW5lcn1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uRGJsQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXJjbGlja3Mgb24gdGhlIGV4cGFuZGVyIGljb25cclxuXHRwcml2YXRlIG9uRXhwYW5kZXJDbGlja2VkID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlKCkgOiB0aGlzLmV4cGFuZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIGNvbnRyb2wgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3NcclxuXHRwdWJsaWMgbV90cmVlOiBUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZVxyXG5cdHB1YmxpYyBtX3BhcmVudDogVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1fbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRlbnRhdGlvbiBsZXZlbCBvZiB0aGUgYmxvY2tcclxuXHRwdWJsaWMgbV9pbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IFRyZWVOb2RlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgZXhwYW5kZWQgKHRoYXQgaXMgc3ViLW5vZGVzIGFyZSB2aXNpYmxlKS5cclxuXHRwdWJsaWMgbV9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcblx0cHVibGljIG1faXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG5vZGUncyBjb250ZW50LlxyXG5cdHB1YmxpYyBjb250ZW50RWxtUmVmOiBtaW0uUmVmPEhUTUxTcGFuRWxlbWVudD47XHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVyc1xyXG5cdHByaXZhdGUgbV9jb250ZW50OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2ljb246IFRyZWVOb2RlSWNvblBhcmFtcztcclxuXHRwcml2YXRlIG1fdGV4dENvbG9yOiBDc3NDb2xvcjtcclxuXHRwcml2YXRlIG1fYmdDb2xvcjogQ3NzQ29sb3I7XHJcblx0cHJpdmF0ZSBtX2l0YWxpYzogYm9vbGVhbjtcclxuXHRwcml2YXRlIG1fYm9sZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIG1fY3VzdG9tQ2xhc3M6IHN0cmluZztcclxuXHRwcml2YXRlIG1fZGF0YTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCI7XHJcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuL1RyZWVOb2RlXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVHJlZU5vZGVDb250YWluZXIgY2xhc3MgcmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHJlZSBub2RlcyB0aGF0IGFyZSBkaXNwbGF5ZWQgYW5kXHJcbi8vIGhpZGRlbiB0b2dldGhlci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRhaW5lciBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBub2RlRmFjdG9yeTogKCkgPT4gVHJlZU5vZGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm5vZGVzID0gW107XHJcblx0XHR0aGlzLm5vZGVGYWN0b3J5ID0gbm9kZUZhY3Rvcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRsZXQgbm9kZTogVHJlZU5vZGUgPSB0aGlzLm5vZGVGYWN0b3J5KCk7XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbCB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gY3Vyckxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5pbmRleCA9IGN1cnJMZW5ndGg7XHJcblx0XHRcdHRoaXMubm9kZXMucHVzaCggbm9kZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuaW5kZXggPSBpbmRleDtcclxuXHRcdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIGluZGV4LCAwLCBub2RlKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBpbmRleGVzIG9mIHRoZSBub2RlcyBhZnRlciB0aGUgaW5zZXJ0ZWQgb25lXHJcblx0XHRcdGZvciggbGV0IGkgPSBpbmRleCArIDE7IGkgPCBjdXJyTGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0dGhpc1tpXS5pbmRleCA9IGk7XHJcblx0XHR9XHJcblxyXG5cdFx0bm9kZS5jb250ZW50ID0gcGFyYW1zLmNvbnRlbnQ7XHJcblx0XHRub2RlLmljb24gPSBwYXJhbXMuaWNvbjtcclxuXHRcdG5vZGUudGV4dENvbG9yID0gcGFyYW1zLnRleHRDb2xvcjtcclxuXHRcdG5vZGUuYmdDb2xvciA9IHBhcmFtcy5iZ0NvbG9yO1xyXG5cdFx0bm9kZS5pdGFsaWMgPSBwYXJhbXMuaXRhbGljO1xyXG5cdFx0bm9kZS5ib2xkID0gcGFyYW1zLmJvbGQ7XHJcblx0XHRub2RlLmN1c3RvbUNsYXNzID0gcGFyYW1zLmN1c3RvbUNsYXNzO1xyXG5cdFx0bm9kZS5kYXRhID0gcGFyYW1zLmRhdGE7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIG5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgc3ViLW5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdWItbm9kZXMgbGlzdC5cclxuXHRwdWJsaWMgcmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBjdXJyTGVuZ3RoKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicmVwbGFjZU5vZGU6IGludmFsaWQgaW5kZXggXCIgKyBpbmRleCk7XHJcblxyXG5cdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHQvLyB1cGRhdGUgaW5kZXhlcyBvZiB0aGUgbm9kZXMgYWZ0ZXIgdGhlIHJlbW92ZWQgb25lXHJcblx0XHRmb3IoIGxldCBpID0gaW5kZXg7IGkgPCBjdXJyTGVuZ3RoOyBpKyspXHJcblx0XHRcdHRoaXNbaV0uaW5kZXggPSBpO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChjdXJyTGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIDAsIGN1cnJMZW5ndGgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5vZGUgb2YgdGhpcy5ub2RlcylcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5leHBhbmRBbGwoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBub2RlIG9mIHRoaXMubm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuY29sbGFwc2VBbGwoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5vZGVzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBcnJheSBvZiBUcmVlTm9kZSBvYmplY3RzXHJcblx0cHVibGljIG5vZGVzOiBUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2Ugb2YgVHJlZU5vZGUgb2JqZWN0c1xyXG5cdHByaXZhdGUgbm9kZUZhY3Rvcnk6ICgpID0+IFRyZWVOb2RlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0LCBnZXRTdHlsZVByb3BWYWx1ZSwgRXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvbGliL2FwaS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNsaWNlIHR5cGUgZGVmaW5lcyBhbiBvYmplY3Qgc3RydWN0dXJlIGRlc2NyaWJpbmdcclxuICogcGFyYW1ldGVycyBmb3IgcmVuZGVyaW5nIGFuIGVsZW1lbnQuIFRoZXkgaW5jbHVkZTogQ2xhc3MsIFN0eWxlLCBQcm9wZXJ0aWVzLCBDb250ZW50LiBUaGlzXHJcbiAqIHN0cnVjdHVyZSBpcyBpbnRlbmRlZCB0byBiZSBwYXNzZWQgZWl0aGVyIGluIHRoZSBjb25zdHJ1Y3RvciBvciB2aWEgdGhlIHByb3RlY3RlZCBtZXRob2RzIG9mXHJcbiAqIGRlcml2ZWQgY2xhc3Nlcywgc28gdGhhdCB0aGV5IGNhbiBjb250cm9sIHBhcmFtZXRlcnMgb2YgZWxlbWVudHMgcmVuZGVyZWQgYnkgdGhlIHVwcGVyIGNsYXNzZXMuXHJcbiAqIFRoZSBtYWluIHB1cnBvc2Ugb2YgdGhpcyBzdHJ1Y3R1cmUgaXMgdG8gY29tYmluZSBwYXJhbWV0ZXJzIGRlZmluaW5nIGFuIGVsZW1lbnQgaW50byBhIHNpbmdsZVxyXG4gKiBvYmplY3QgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzIGNhbGxlcnMgb2YgY2xhc3NlcyBzaG91bGQgZGVhbCB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2UgPVxyXG57XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVzZXQ7XHJcblx0cHJvcHM/OiBvYmplY3RcclxuXHRjb250ZW50PzogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogU3R5bGVzZXQpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IFN0eWxlc2V0KTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IGdldFN0eWxlUHJvcFZhbHVlKCBwcm9wTmFtZSBhcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0LCBwcm9wc1twcm9wTmFtZV0pO1xyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BWYWwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHZhbHVlIGZvciBhIHN0eWxlIHByb3BlcnR5LiBQcm9wZXJ0eSBuYW1lIGNhbiB1c2UgdGhlICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmVcclxuXHQvLyBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0cHVibGljIHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2YgY2xhc3MgcHJvcGVydGllcyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuLy8gcmV0dXJucyBhIHN0cmluZyBvciB1bmRlZmluZWQgLSBpZiBhbGwgY2xhc3NOYW1lcyB3ZXJlIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdGxldCByZXNDbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0Zm9yKCBsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFjbGFzc05hbWUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBjbGFzc05hbWVBc1N0cmluZzogc3RyaW5nID0gdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gY2xhc3NOYW1lIGFzIHN0cmluZ1xyXG5cdFx0XHRcdDogKGNsYXNzTmFtZSBhcyBzdHJpbmdbXSkuam9pbiggXCIgXCIpO1xyXG5cclxuXHRcdGlmIChyZXNDbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmVzQ2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVzQ2xhc3NOYW1lICs9IFwiIFwiO1xyXG5cclxuXHRcdHJlc0NsYXNzTmFtZSArPSBjbGFzc05hbWVBc1N0cmluZztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNDbGFzc05hbWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKCAuLi5zdHlsZXM6IFN0eWxlc2V0W10pOiBTdHlsZXNldFxyXG57XHJcblx0Ly8gY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBmb3IgYWNjdW11bGF0aW5nIHN0eWxlIHByb3BlcnRpZXNcclxuXHRsZXQgcmVzU3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblx0bWVyZ2VTdHlsZXNUbyggcmVzU3R5bGUsIC4uLnN0eWxlcyk7XHJcblx0cmV0dXJuIHJlc1N0eWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGZpcnN0IG9uZS5cclxuZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IFN0eWxlc2V0LCAuLi5zdHlsZXM6IChTdHlsZXNldCB8IHN0cmluZylbXSApOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBzdHlsZSBvZiBzdHlsZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzdHlsZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0Ly8gcGFyc2UgdGhlIHN0eWxlIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZ1xyXG5cdFx0bGV0IHN0eWxlT2JqOiBTdHlsZXNldCA9IHR5cGVvZiBzdHlsZSA9PT0gXCJvYmplY3RcIlxyXG5cdFx0XHRcdD8gc3R5bGUgYXMgU3R5bGVzZXRcclxuXHRcdFx0XHQ6IHBhcnNlU3R5bGVTdHJpbmcoIHN0eWxlIGFzIHN0cmluZyk7XHJcblxyXG5cdFx0Ly8gY29weSBhbGwgcHJvcGVydGllcyBkZWZpbmVkIGluIHRlaCBjdXJyZW50IHN0eWxlIG9iamVjdCB0byBvdXIgcmVzdWx0YW50IG9iamVjdFx0XHRcdFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVPYmopXHJcblx0XHRcdHJlc1N0eWxlW3Byb3BOYW1lXSA9IHN0eWxlT2JqW3Byb3BOYW1lXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGFyc2VzIHRoZSBnaXZlbiBzdHlsZSBzdHJpbmcgaW50byB0aGUgU3R5bGUgb2JqZWN0LlxyXG5mdW5jdGlvbiBwYXJzZVN0eWxlU3RyaW5nKCBzOiBzdHJpbmcpOiBTdHlsZXNldFxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cclxuXHRsZXQgcmV0U3R5bGU6IFN0eWxlc2V0ID0ge307XHJcblxyXG5cdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdGZvciggbGV0IGVsbSBvZiBlbG1zKVxyXG5cdHtcclxuXHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0aWYgKCFwYWlyIHx8IHBhaXIubGVuZ3RoID09PSAwIHx8IHBhaXIubGVuZ3RoID4gMilcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0cmV0U3R5bGVbZGFzaFRvQ2FtZWwoIHBhaXJbMF0udHJpbSgpKV0gPSBwYWlyWzFdLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXRTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG57XHJcblx0bGV0IHJlc1NsaWNlOiBTbGljZSA9IHt9O1xyXG5cdG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG5cdHJldHVybiByZXNTbGljZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuLy8gaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG5mdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdGlmIChyZXNTbGljZSA9PT0gdW5kZWZpbmVkIHx8IHJlc1NsaWNlID09PSBudWxsKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRmb3IoIGxldCBzbGljZSBvZiBzbGljZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0aWYgKHNsaWNlLnN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2Uuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5zdHlsZSA9IHt9O1xyXG5cclxuXHRcdFx0bWVyZ2VTdHlsZXNUbyggcmVzU2xpY2Uuc3R5bGUsIHNsaWNlLnN0eWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY2xhc3NOYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gXCJcIjtcclxuXHJcblx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5wcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnByb3BzID0ge307XHJcblxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRyZXNTbGljZVtwcm9wTmFtZV0gPSBzbGljZVtwcm9wTmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jb250ZW50ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZENvbnRlbnQ6IGFueSA9IHJlc1NsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIG9sZENvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgbmFtZXMgd2l0aCBkYXNoZXMgaW50byBuYW1lcyBpbiBjYW1lbENhc2UsIHdoZXJlIGV2ZXJ5IGNoYXJhY3RlciBhZnRlciBhIGRhc2ggaXNcclxuICogY2FwaXRhbGl6ZWQgYW5kIGRhc2hlcyBhcmUgcmVtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgYXhpcyBvZiBkYXRhLCB3aGljaCBjb25zaXN0cyBvZiBpdGVtcywgYW5kIHBlcmZvcm1zXHJcbiAqIGNhbGN1bGF0aW9ucyBkdXJpbmcgc2Nyb2xsaW5nIGJhY2sgYW5kIGZvcnRoIGFsb25nIHRoZSBheGlzLiBUaGUgU2Nyb2xsQXhpcyBjbGFzcyBpdHNlbGYgZG9lc24ndFxyXG4gKiBoYXZlIGFueSB2aXN1YWwgcmVwcmVzZW50YXRpb24gYW5kIG9ubHkgc2VydmVzIGFzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG0gdGhhdFxyXG4gKiBoZWxwcyB2aXJ0dWFsaXplIHNjcm9sbGluZyAtIHRoYXQgaXMgZGlzcGxheSBvbmx5IHNtYWxsIHN1YnNldCBvZiBkYXRhIGl0ZW1zIGFuZCBhZGQvcmVtb3ZlXHJcbiAqIGl0ZW1zIGFzIHNjcm9sbGluZyBoYXBwZW5zLlxyXG4gKiBcclxuICogVkF4aXMgYXNzdW1lcyB0aGUgdXNlIG9mIDMgRE9NIGVsZW1lbnRzOlxyXG4gKlx0LSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFyIHdoZW4gbmVjZXNzYXJ5XHJcbiAqXHQtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgc2V0IG9mIGl0ZW1zLiBJdCBpc1xyXG4gKlx0XHRuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKlx0LSBzdWJzZXQgLSB0aGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIG9ubHkgaXRlbXMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXMgYSBjZXJ0YWluIG51bWJlciBvZlxyXG4gKlx0XHRhZGRpdGlvbmFsIGl0ZW1zIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWQXhpcyBjYWxjdWxhdGVzIGF2ZXJhZ2UgaXRlbSBzaXplIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSBkYXRhIGJ5IHRoZSBudW1iZXIgb2YgaXRlbXMuXHJcbiAqIFRoZSBhdmVyYWdlIHZhbHVlIGlzIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIGl0ZW1zIGFyZSBhZGRlZCB0byBvciBkZWxldGVkIGZyb20gdGhlIHN1YnNldCB0aHVzXHJcbiAqIGFjY29tb2RhdGluZyBpdGVtcyB3aXRoIGRpZmZlcmVuIHNpemVzLiBCYXNlZCBvbiB0aGUgYXZlcmFnZSB2YWx1ZSB0aGUgd2FsbCBlbGVtZW50IGlzIHNpemVkXHJcbiAqIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhIHNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWQXhpcyB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIGl0ZW1zIG9uIGJvdGggc2lkZXMgb2YgdGhlIGZyYW1lIGFuZFxyXG4gKiBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2YgaXRlbXMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLiBEdXJpbmdcclxuICogc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSwgbmV3IGl0ZW1zIGFyZSBhZGRlZDsgaWZcclxuICogaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0sIGl0ZW1zIGFyZSBkZWxldGVkLiBXaGVuIGl0ZW1zIGFyZSBhZGRlZCB0aGV5IGFyZSBhZGRlZCB1cCB0b1xyXG4gKiB0aGUgb3B0aW1hbCBvdmVyc2NhbiBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXhpc1xyXG57XHJcblx0Ly8gTWluaW1hbCBudW1iZXIgb2YgYWRkaXRpb25hbCBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgbWFpbnRhaW5lZC4gV2hlblxyXG5cdC8vIGR1cmluZyBzY3JvbGxpbmcgdGhlIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBmYWxscyB1bmRlciB0aGlzIG51bWJlciwgbmV3IGl0ZW1zIGFyZSBhZGRlZC5cclxuXHRwcml2YXRlIG1pbk92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE9wdGltYWwgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydC4gV2hlbiBhZGRpbmcgbmV3IGl0ZW1zIG9yIHJlbW92aW5nXHJcblx0Ly8gZXhpc3RpbmcgaXRlbXMgd2Ugd2FudCB0byByaWNoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBvdmVyc2Nhbi5cclxuXHRwcml2YXRlIG9wdE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGV4Y2VlZHMgdGhpcyBudW1iZXIsIGl0ZW1zIGFyZSByZW1vdmVkLlxyXG5cdHByaXZhdGUgbWF4T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWluT3ZlcnNjYW46IG51bWJlciwgb3B0T3ZlcnNjYW46IG51bWJlciwgbWF4T3ZlcnNjYW46IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLm1pbk92ZXJzY2FuID0gbWluT3ZlcnNjYW47XHJcblx0XHR0aGlzLm9wdE92ZXJzY2FuID0gb3B0T3ZlcnNjYW47XHJcblx0XHR0aGlzLm1heE92ZXJzY2FuID0gbWF4T3ZlcnNjYW47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGZyYW1lXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW12b3ZlIGl0ZW1zLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIHdoZW46XHJcblx0ICpcdC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YSBzZXQgY2hhbmdlcy5cclxuXHQgKlx0LSBUaGUgc2l6ZSBvZiB0aGUgZnJhbWUgZWxlbWVudCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBmcmFtZSBlbGVtZW50IGlzIHNjcm9sbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0b3RhbENvdW50IE51bWJlciBvZiBpdGVtcyBpbiB0aGUgZW50aXJlIGRhdGEgc2V0XHJcblx0ICogQHBhcmFtIGZpcnN0SXRlbSBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBjdXJyZW50bHkgaW4gdGhlIHN1YnNldFxyXG5cdCAqIEBwYXJhbSBpdGVtQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGZyYW1lU2l6ZSBDdXJyZW50IHNpemUgaW4gcGl6ZWxzIG9mIHRoZSBmcmFtZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIHdhbGxTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHdhbGwgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSBzdWJzZXRTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHN1YnNldCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHNjcm9sbFBvcyBDdXJyZW50IG9yIG5ldyBzY3JvbGwgcG9zaXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIG1lYXN1cmUoIHRvdGFsQ291bnQ6IG51bWJlciwgb2xkRmlyc3Q6IG51bWJlciwgb2xkQ291bnQ6IG51bWJlciwgb2xkQXZnSXRlbVNpemU6IG51bWJlcixcclxuXHRcdGZyYW1lU2l6ZTogbnVtYmVyLCB3YWxsU2l6ZTogbnVtYmVyLCBzdWJzZXRTaXplOiBudW1iZXIsIHNjcm9sbFBvczogbnVtYmVyKTogU2Nyb2xsQXhpc0FjdGlvblxyXG5cdHtcclxuXHRcdC8vIHByZXBhcmUgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZFxyXG5cdFx0bGV0IHJldEFjdGlvbiA9IG5ldyBTY3JvbGxBeGlzQWN0aW9uKCk7XHJcblx0XHRpZiAodG90YWxDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHRcdGVsc2UgaWYgKG9sZENvdW50ID09PSAwKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaXRlbUNvdW50IGNhbm5vdCBiZSB6ZXJvXCIpO1xyXG5cclxuXHRcdGxldCBvbGRMYXN0ID0gb2xkRmlyc3QgKyBvbGRDb3VudCAtIDE7XHJcblx0XHRsZXQgdG90YWxMYXN0ID0gdG90YWxDb3VudCAtIDE7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBhdmVyYWdlIGl0ZW0gc2l6ZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBjdXJyZW50IHN1YnNldFxyXG5cdFx0Ly8gYW5kIHRoZSBjdXJyZW50IHNpemUgb2YgdGhlIGRhdGEgZWxlbWVudC5cclxuXHRcdGxldCBuZXdBdmdJdGVtU2l6ZSA9IHN1YnNldFNpemUgLyBvbGRDb3VudDtcclxuXHRcdGlmIChvbGRBdmdJdGVtU2l6ZSlcclxuXHRcdFx0bmV3QXZnSXRlbVNpemUgPSAobmV3QXZnSXRlbVNpemUgKyBvbGRBdmdJdGVtU2l6ZSkgLyAyO1xyXG5cclxuXHRcdC8vIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gYW5kIHRoZSBhdmVyYWdlIHNpemUgZXN0aW1hdGUgd2hhdCBpdGVtcyB3b3VsZCBmaXQgaW5zaWRlXHJcblx0XHQvLyB0aGUgZnJhbWUgZWxlbWVudC5cclxuXHRcdGxldCBmaXRGaXJzdCA9IE1hdGgubWluKCBNYXRoLmZsb29yKCBzY3JvbGxQb3MgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgZml0TGFzdCA9IE1hdGgubWluKCBNYXRoLmNlaWwoIChzY3JvbGxQb3MgKyBmcmFtZVNpemUpIC8gbmV3QXZnSXRlbVNpemUpLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdC8vIGdldCBuZXcgZmlyc3QgYW5kIGxhc3QgIGluZGljZXMgd2l0aCBtaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuXHJcblx0XHRsZXQgbWluT3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWluT3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG9wdE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm9wdE92ZXJzY2FuLCAwKVxyXG5cdFx0bGV0IG1heE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm1heE92ZXJzY2FuLCAwKTtcclxuXHRcdGxldCBtaW5PdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMubWluT3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm9wdE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IG1heE92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5tYXhPdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHJcblx0XHRsZXQgbmV3Rmlyc3QgPSBvbGRGaXJzdCA+IG1pbk92ZXJzY2FuRmlyc3QgfHwgb2xkRmlyc3QgPCBtYXhPdmVyc2NhbkZpcnN0ID8gb3B0T3ZlcnNjYW5GaXJzdCA6IG9sZEZpcnN0O1xyXG5cdFx0bGV0IG5ld0xhc3QgPSBvbGRMYXN0IDwgbWluT3ZlcnNjYW5MYXN0IHx8IG9sZExhc3QgPiBtYXhPdmVyc2Nhbkxhc3QgPyBvcHRPdmVyc2Nhbkxhc3QgOiBvbGRMYXN0O1xyXG5cclxuXHRcdGlmIChuZXdGaXJzdCA+IG5ld0xhc3QpXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBXcm9uZyBTY3JvbGxBeGlzIGNhbGN1bGF0aW9uOiBuZXdGaXJzdCAnJHtuZXdGaXJzdH0nIGlzIGdyZWF0ZXIgdGhhbiBuZXdMYXN0ICcke25ld0xhc3R9J2ApXHJcblxyXG5cdFx0Ly8gc2V0IHdoYXQgd2UgYWxyZWFkeSBrbm93IGludG8gdGhlIHJldHVybiBvYmplY3RcclxuXHRcdHJldEFjdGlvbi5uZXdGaXJzdCA9IG5ld0ZpcnN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0xhc3QgPSBuZXdMYXN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0F2Z0l0ZW1TaXplID0gbmV3QXZnSXRlbVNpemU7XHJcblx0XHRyZXRBY3Rpb24ubmV3V2FsbFNpemUgPSBNYXRoLmNlaWwoIHRvdGFsQ291bnQgKiBuZXdBdmdJdGVtU2l6ZSk7XHJcblx0XHRyZXRBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ID0gTWF0aC5jZWlsKCBuZXdGaXJzdCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHJcblx0XHQvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB3ZSB3YW50LCBkZXRlcm1pbmUgd2hhdCBpdGVtcyBzaG91bGQgYmVcclxuXHRcdC8vIGFkZGVkL3JlbW92ZWQgaW4gdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZFxyXG5cdFx0aWYgKG5ld0ZpcnN0ID09IG9sZEZpcnN0ICYmIG5ld0xhc3QgPT0gb2xkTGFzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBkYXRhc2V0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgb25lLCBkb24ndCBhZGQvcmVtb3ZlIGFueSBpdGVtc1xyXG5cdFx0XHRyZXRBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRMYXN0IHx8IG5ld0xhc3QgPCBvbGRGaXJzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBkYXRhc2V0cyBkb24ndCBpbnRlcnNlY3QsIHJlbW92ZSBhbGwgZXhpc3RpbmcgYW5kIGFkZCBhbGxcclxuXHRcdFx0Ly8gbmV3IGl0ZW1zLlxyXG5cdFx0XHRyZXRBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5ld0ZpcnN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID0gb2xkRmlyc3QgLSBuZXdGaXJzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRGaXJzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPSBuZXdGaXJzdCAtIG9sZEZpcnN0O1xyXG5cclxuXHRcdFx0aWYgKG5ld0xhc3QgPCBvbGRMYXN0KVxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPSBvbGRMYXN0IC0gbmV3TGFzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3TGFzdCA+IG9sZExhc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdEVuZCA9IG5ld0xhc3QgLSBvbGRMYXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRBY3Rpb247XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2Nyb2xsQXhpc0FjdGlvbiBjbGFzcyByZXByZXNlbnRzIHRoZSBhY3Rpb24ocykgdGhhdCBzaG91bGQgYmUgZG9uZSBhZnRlciB0aGUgU2Nyb2xsQXhpc1xyXG4gKiBwZXJmb3JtZWQgY2FsY3VsYXRpb25zIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmcmFtZSwgd2FsbCBhbmQgZGF0YS4gVGhlIGFjdGlvbnNcclxuICogYXJlIGluc3RydWN0aW9ucyB0byBhZGQgb3IgcmVtb3ZlIGl0ZW1zIGFuZCB0byBzZXQgd2FsbCBzaXplIGFuZCBkYXRhIG9mZnNldC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzQWN0aW9uXHJcbntcclxuXHQvLyBOZXcgYXZlYXJhZ2UgaXRlbSBzaXplXHJcblx0bmV3QXZnSXRlbVNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBzaXplIHRoYXQgc2hvdWxkIGJlIHNldCB0byB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3V2FsbFNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBvZmZzZXQgb2YgdGhlIHN1YnNldCBlbGVtZW50IGZyb20gdGhlIHdhbGwgZWxlbWVudFxyXG5cdG5ld1N1YnNldE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0ZpcnN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBpdGVtIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBzdWJzZXRcclxuXHRuZXdMYXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCBuZWl0aGVyIGFkZCBub3IgcmVtb3ZlIGFueSBpdGVtcy5cclxuXHRub0FkZFJlbW92ZU5lZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zLiBJZiB0aGlzIGZsYWcgaXMgc2V0XHJcblx0Ly8gdG8gdHJ1ZSwgdGhlbiB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zIGFuZCB0aGVuIGFkZCBhbGwgaXRlbXMgZnJvbVxyXG5cdC8vIG5ld0ZpcnN0IHRvIG5ld0xhc3RcclxuXHRuZWVlZFRvUmVtb3ZlQWxsSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBvbGRGaXJzdFxyXG5cdC8vIHRvIG5ld0ZpcnN0LTEuXHJcblx0Y291bnRUb1JlbW92ZUF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3TGFzdCsxXHJcblx0Ly8gdG8gb2xkTGFzdC5cclxuXHRjb3VudFRvUmVtb3ZlQXRFbmQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGJlZ2lubmluZy4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3Rmlyc3RcclxuXHQvLyB0byBvbGRGaXJzdC0xLlxyXG5cdGNvdW50VG9BZGRBdFN0YXJ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gYWRkIGF0IHRoZSBlbmQuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZExhc3QrMVxyXG5cdC8vIHRvIG5ld0xhc3QuXHJcblx0Y291bnRUb0FkZEF0RW5kOiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtTY3JvbGxBeGlzLCBTY3JvbGxBeGlzQWN0aW9ufSBmcm9tIFwiLi9TY3JvbGxBeGlzXCJcclxuaW1wb3J0IHtDb21wb25lbnRXaXRoTG9jYWxTdHlsZXN9IGZyb20gXCIuLi91dGlsL0xvY2FsU3R5bGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVlRBYmxlQ2VsbERhdGEgaW50ZXJmYWNlIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzaW5nbGUgY2VsbCB0aGF0IGlzIHByb3ZpZGVkXHJcbiAqIGJ5IGEgY2FsbGVyIHdoZW4gcmVxdWVzZWQgYnkgVlRhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWVGFibGVDZWxsRGF0YVxyXG57XHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIGNlbGwgKi9cclxuXHRjb250ZW50OiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0cm93U3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjb2x1bW5zIHRoaXMgY2VsbCBzaG91bGQgc3Bhbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4gKi9cclxuXHRjb2xTcGFuPzogbnVtYmVyO1xyXG5cclxuXHQvKiogU3R5bGUgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgYDx0ZD5gIG9yIGA8dGg+YCBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNlbGwuICovXHJcblx0c3R5bGU/OiBTdHlsZXNldDtcclxuXHJcblx0LyoqIENsYXNzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBvciBgPHRoPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdGNsYXNzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVlRhYmxlUHJvcHMgY2xhc3MgZGVmaW5lcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBWVGFibGVcclxuICogY29uc3RydWN0b3IuIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3QgZGVmaW5lIHRoZSBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgVlRhYmxlXHJcbiAqIGluIEpTWCB3aGVuIGl0IGlzIHVzZWQgYXMgYSBtYW5hZ2VkIGNvcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWVGFibGVQcm9wc1xyXG57XHJcblx0LyoqIE51bWJlciBvZiByb3dzIGluIHRoZSBlbnRpcmUgZGF0YXNldCAqL1xyXG5cdHRvdGFsUm93Q291bnQ6IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBlbnRpcmUgZGF0YXNldCAqL1xyXG5cdHRvdGFsQ29sQ291bnQ6IG51bWJlcjtcclxuXHJcblx0LyoqIE1pbmltYWwsIG9wdGltYWwgYW5kIG1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIHJvd3MgKi9cclxuXHRyb3dPdmVyc2Nhbj86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcblx0LyoqIE1pbmltYWwsIG9wdGltYWwgYW5kIG1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIGNvbHVtbnMgKi9cclxuXHRjb2xPdmVyc2Nhbj86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGNlbGwgZGF0YS4gKi9cclxuXHRnZXRDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgaGVhZGVyIHJvd3MuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRjb2xIZWFkZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciBjb2x1bW4gaGVhZGVyIGNlbGxzLiAqL1xyXG5cdGdldENvbEhlYWRlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBmb290ZXIgcm93cy4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdGNvbEZvb3RlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIGNvbHVtbiBmb290ZXIgY2VsbHMuICovXHJcblx0Z2V0Q29sRm9vdGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNlbGxzIGluIHRoZSByb3cgaGVhZGVyLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0cm93SGVhZGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3Igcm93IGhlYWRlciBjZWxscy4gKi9cclxuXHRnZXRSb3dIZWFkZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY2VsbHMgaW4gdGhlIHJvdyBmb290ZXIuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRyb3dGb290ZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciByb3cgZm9vdGVyIGNlbGxzLiAqL1xyXG5cdGdldFJvd0Zvb3RlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJWaXJ0dWFsaXplZFwiIHRhYmxlIHRoYXQgcmVuZGVycyBvbmx5IGEgc3Vic2V0IG9mIGEgZGF0YXNldCBhbmQgY2hhbmdlcyB0aGlzIHN1YnNldFxyXG4gKiBhcyB0aGUgdXNlciBzY3JvbGxzIGJhY2sgYW5kIGZvcnRoLlxyXG4gKiBcclxuICogVlRhYmxlIHVzZXMgdGhlIGZvbGxvd2luZyAzIERPTSBlbGVtZW50czpcclxuICogIC0gZnJhbWUgLSB0aGUgXCJvdXRlclwiIGA8ZGl2PmAgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFycyB3aGVuIG5lY2Vzc2FyeVxyXG4gKiAgLSB3YWxsIC0gdGhlIFwiaW5uZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgdGFibGUuIEl0IGlzXHJcbiAqICAgIG5lZWRlZCB0byBtYWtlIHNjcm9sbGluZyBtb3JlLW9yLWxlc3MgYWNjdXJhdGUuXHJcbiAqICAtIHRhYmxlIC0gdGhlIGA8dGFibGU+YCBlbGVtZW50IHRoYXQgY29udGFpbnMgb25seSByb3dzIGFuZCBjb2x1bW5zIHRoYXQgZml0IHRoZSBmcmFtZSBwbHVzXHJcbiAqICAgIGEgY2VydGFpbiBudW1iZXIgZm9yIFwib3ZlcnNjYW5cIi5cclxuICogXHJcbiAqIFZUYWJsZSBjYWxjdWxhdGVzIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSB0YWJsZVxyXG4gKiBieSB0aGUgbnVtYmVyIG9mIHJvd3MvY29sdW1ucy4gVGhlc2UgYXZlcmFnZSB2YWx1ZXMgYXJlIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIHJvd3MgYW5kXHJcbiAqIGNvbHVtbnMgYXJlIGFkZGVkIG9yIGRlbGV0ZWQgZnJvbSB0aGUgdGFibGUuIEJhc2VkIG9uIHRoZXNlIGF2ZXJhZ2UgdmFsdWVzIHRoZSB3YWxsIGVsZW1lbnRcclxuICogaXMgc2l6ZWQgdG8gaW5jbHVkZSB0aGUgZW50aXJlIGRhdGFzZXQsIHdoaWNoIGhlbHBzIHRvIGFjaGlldmUgbW9yZS1vci1sZXNzIGFjY3VyYXRlIHNjcm9sbGluZ1xyXG4gKiBwb3NpdGlvbmluZy5cclxuICpcclxuICogVlRhYmxlIHVzZXMgbWluaW11bSwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhbiBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucyBvbiBhbGwgc2lkZXMgb2ZcclxuICogdGhlIGZyYW1lIGFuZCBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2Ygcm93cy9jb2x1bW5zIGlzIHdpdGhpbiB0aGVzZSBtaW5pbXVtIGFuZFxyXG4gKiBtYXhpbXVtIHZhbHVlcy4gRHVyaW5nIHNjcm9sbGluZywgaWYgdGhlIGFjdHVhbCBvdmVyc2NhbiBudW1iZXIgYmVjb21lcyBsZXNzIHRoYW4gdGhlIG1pbmltdW0sXHJcbiAqIG5ldyBjZWxscyBhcmUgYWRkZWQgYW5kIGlmIGl0IGJlY29tZXMgbW9yZSB0aGVuIHRoZSBtYXhpbXVtIGNlbGxzIGFyZSBkZWxldGVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZUYWJsZSBleHRlbmRzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxWVGFibGVQcm9wcz5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVlRhYmxlUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmF2Z1Jvd0hlaWdodCA9IDA7XHJcblx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBuZWdhdGl2ZSB2YWx1ZXMgaW5kaWNhdGUgdGhhdCB3ZSBoYXZlbid0IG1lYXN1cmVkIGFueSBzaXplcyB5ZXQuXHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbFRvcCA9IC0xO1xyXG5cdFx0dGhpcy5sYXRlc3RTY3JvbGxMZWZ0ID0gLTE7XHJcblxyXG5cdFx0Ly8gc2V0IGluaXRpYWwgc2l6ZSBvZiB0aGUgd2FsbCBlbGVtZW50IGJhc2VkIG9uIHNvbWUgaGFyZC1jb2RlZCB2YWx1ZXMuIEl0IHdpbGwgYmVcclxuXHRcdC8vIGNoYW5nZWQgYXMgc29vbiBhcyB3ZSByZW5kZXIgYW5kIHN0YXJ0IG1lYXN1cmluZyBvdXIgZWxlbWVudHNcclxuXHRcdHRoaXMud2FsbEhlaWdodCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCAqIDI1O1xyXG5cdFx0dGhpcy53YWxsV2lkdGggPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgKiA4MDtcclxuXHJcblx0XHR0aGlzLm1pblJvd092ZXJzY2FuID0gdGhpcy5wcm9wcy5yb3dPdmVyc2NhbiA/IHRoaXMucHJvcHMucm93T3ZlcnNjYW5bMF0gOiAzO1xyXG5cdFx0dGhpcy5vcHRSb3dPdmVyc2NhbiA9IHRoaXMucHJvcHMucm93T3ZlcnNjYW4gPyB0aGlzLnByb3BzLnJvd092ZXJzY2FuWzFdIDogNjtcclxuXHRcdHRoaXMubWF4Um93T3ZlcnNjYW4gPSB0aGlzLnByb3BzLnJvd092ZXJzY2FuID8gdGhpcy5wcm9wcy5yb3dPdmVyc2NhblsyXSA6IDEyO1xyXG5cclxuXHRcdHRoaXMubWluQ29sT3ZlcnNjYW4gPSB0aGlzLnByb3BzLmNvbE92ZXJzY2FuID8gdGhpcy5wcm9wcy5jb2xPdmVyc2NhblswXSA6IDM7XHJcblx0XHR0aGlzLm9wdENvbE92ZXJzY2FuID0gdGhpcy5wcm9wcy5jb2xPdmVyc2NhbiA/IHRoaXMucHJvcHMuY29sT3ZlcnNjYW5bMV0gOiA2O1xyXG5cdFx0dGhpcy5tYXhDb2xPdmVyc2NhbiA9IHRoaXMucHJvcHMuY29sT3ZlcnNjYW4gPyB0aGlzLnByb3BzLmNvbE92ZXJzY2FuWzJdIDogMTI7XHJcblxyXG5cdFx0dGhpcy5wcmVwYXJlTG9jYWxTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yb3dzID0gW107XHJcblxyXG5cdFx0Ly8gZmlsbCBpbiBpbml0aWFsIGRhdGFzZXRcclxuXHRcdGxldCByb3dDb3VudCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDogMTA7XHJcblx0XHRsZXQgY29sQ291bnQgPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgPCAxMCA/IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA6IDEwO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdGZvciggbGV0IGogPSAwOyBqIDwgY29sQ291bnQ7IGorKylcclxuXHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHJcblx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBkYXRhc2V0IHNpemVcclxuXHRcdHRoaXMuZmlyc3RSb3cgPSAwO1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gcm93Q291bnQgLSAxO1xyXG5cdFx0dGhpcy5maXJzdENvbCA9IDA7XHJcblx0XHR0aGlzLmxhc3RDb2wgPSBjb2xDb3VudCAtIDE7XHJcblxyXG5cdFx0dGhpcy52QXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pblJvd092ZXJzY2FuLCB0aGlzLm9wdFJvd092ZXJzY2FuLCB0aGlzLm1heFJvd092ZXJzY2FuKVxyXG5cdFx0dGhpcy5oQXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pbkNvbE92ZXJzY2FuLCB0aGlzLm9wdENvbE92ZXJzY2FuLCB0aGlzLm1heENvbE92ZXJzY2FuKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5mcmFtZUlEID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwiZnJhbWVcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJmcmFtZVwiLCBcIiNmcmFtZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6XCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy53YWxsSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ3YWxsXCIpO1xyXG5cdFx0dGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwid2FsbFwiLCBcIiN3YWxsKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMudGFibGVJRCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRhYmxlXCIpO1xyXG5cdFx0dGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidGFibGVcIiwgXCIjdGFibGUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0Ym9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiYmxhY2tcIl0sXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZHVyaW5nIGVhY2ggcmVuZGVyaW5nLCB3ZSBzY2hlZHVsZSB0aGUgbWVhc3VyaW5nIGZ1bmN0aW9uYWxpdHksIHdoaWNoIHdpbGwgZGV0ZXJtaW5nXHJcblx0XHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbW92ZSBjZWxscy4gVGhlIG1lYXN1cmluZyBmdW5jdGlvbiB3aWxsIHJ1biBpbiB0aGUgbmV4dCB0aWNrXHJcblx0XHQvLyBhZnRlciB0aGUgcmVuZGVyIGFuZCB3aWxsIHNjaGVkdWxlIHVwZGF0ZSBpbiB0aGUgc2FtZSB0aWNrIGlmIG5lY2Vzc2FyeS5cclxuXHRcdHRoaXMuY2FsbE1lQmVmb3JlVXBkYXRlKCB0aGlzLm1lYXN1cmVBbmRVcGRhdGUpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGlkPXt0aGlzLmZyYW1lSUR9IHJlZj17dGhpcy5mcmFtZVJlZn0gc2Nyb2xsPXt0aGlzLm9uU2Nyb2xsfT5cclxuXHRcdFx0PGRpdiBpZD17dGhpcy53YWxsSUR9IHJlZj17dGhpcy53YWxsUmVmfT5cclxuXHRcdFx0XHQ8dGFibGUgaWQ9e3RoaXMudGFibGVJRH0gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuXHRcdFx0XHRcdDx0Ym9keT57dGhpcy5yZW5kZXJSb3dzfTwvdGJvZHk+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlclJvd3MoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucm93cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlc1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGNvbHVtbiBoZWFkZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDb2xIZWFkZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q29sSGVhZGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGNvbHVtbiBmb290ZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDb2xGb290ZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q29sRm9vdGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDb2xGb290ZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHJvdyBoZWFkZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRSb3dIZWFkZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRSb3dIZWFkZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHJvdyBmb290ZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRSb3dGb290ZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um93Rm9vdGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdCAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBJZiB3ZSBkbywgd2Ugc2NoZWR1bGUgcmUtcmVuZGVyaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWVhc3VyZUFuZFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm93Q291bnQgPT09IDAgfHwgdGhpcy5jb2xDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBmcmFtZVJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHdhbGxSZWN0ID0gdGhpcy53YWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHRhYmxlUmVjdCA9IHRoaXMudGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMubGF0ZXN0U2Nyb2xsVG9wICE9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyBoZWlnaHQ6IHNjcm9sbCB0b3AgPSAke3RoaXMuZnJhbWUuc2Nyb2xsVG9wfSwgcm93czogJHt0aGlzLnJvd0NvdW50fSwgYCArXHJcblx0XHRcdC8vIFx0XHRcdFx0YHdhbGwgaGVpZ2h0ID0gJHt3YWxsUmVjdC5oZWlnaHR9LCB0YWJsZSBoZWlnaHQgPSAke3RhYmxlUmVjdC5oZWlnaHR9YCk7XHJcblxyXG5cdFx0XHRsZXQgdkF4aXNBY3Rpb24gPSB0aGlzLnZBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxSb3dDb3VudCwgdGhpcy5maXJzdFJvdywgdGhpcy5yb3dDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCwgZnJhbWVSZWN0LmhlaWdodCwgd2FsbFJlY3QuaGVpZ2h0LCB0YWJsZVJlY3QuaGVpZ2h0LCB0aGlzLmZyYW1lLnNjcm9sbFRvcCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgcm93IGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemV9YCk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgdGhlIGxhdGVzdCB2ZXJ0aWNhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5sYXRlc3RTY3JvbGxUb3AgPSB0aGlzLmZyYW1lLnNjcm9sbFRvcDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgcm93cyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCF2QXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVJvd3MoIHZBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgaGVpZ2h0IGFuZCBzdWJzZXQgdmVydGljYWwgb2Zmc2V0IGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAodkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgIT0gd2FsbFJlY3QuaGVpZ2h0IHx8IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QudG9wIC0gd2FsbFJlY3QudG9wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWVBZnRlclVwZGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS50b3AgPSB2QXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgKyBcInB4XCI7XHJcblx0XHRcdFx0XHR0aGlzLndhbGwuc3R5bGUuaGVpZ2h0ID0gdkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5sYXRlc3RTY3JvbGxMZWZ0ICE9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBNZWFzdXJpbmcgd2lkdGg6IHNjcm9sbCBsZWZ0ID0gJHt0aGlzLmZyYW1lLnNjcm9sbExlZnR9LCBjb2xzOiAke3RoaXMuY29sQ291bnR9LCBgICtcclxuXHRcdFx0Ly8gXHRcdFx0XHRgd2FsbCB3aWR0aCA9ICR7d2FsbFJlY3Qud2lkdGh9LCB0YWJsZSB3aWR0aCA9ICR7dGFibGVSZWN0LndpZHRofWApO1xyXG5cclxuXHRcdFx0bGV0IGhBeGlzQWN0aW9uID0gdGhpcy5oQXhpcy5tZWFzdXJlKCB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQsIHRoaXMuZmlyc3RDb2wsIHRoaXMuY29sQ291bnQsXHJcblx0XHRcdFx0dGhpcy5hdmdDb2xXaWR0aCwgZnJhbWVSZWN0LndpZHRoLCB3YWxsUmVjdC53aWR0aCwgdGFibGVSZWN0LndpZHRoLCB0aGlzLmZyYW1lLnNjcm9sbExlZnQpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBFc3RpbWF0ZWQ6IHdhbGwgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgY29sIHdpZHRoID0gJHtoQXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZX1gKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgYXZlcmFnZSBjb2x1bW4gd2lkdGggYW5kIHRoZSBsYXRlc3QgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdDb2xXaWR0aCA9IGhBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSB0aGlzLmZyYW1lLnNjcm9sbExlZnQ7XHJcblxyXG5cdFx0XHQvLyBhZGQvcmVtb3ZlIGNvbHVtbnMgaWYgbmVlZGVkXHJcblx0XHRcdGlmICghaEF4aXNBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQpXHJcblx0XHRcdFx0dGhpcy51cGRhdGVDb2xzKCBoQXhpc0FjdGlvbik7XHJcblxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGluZyBvZiB3YWxsIHdpZHRoIGFuZCBzdWJzZXQgaG9yaXpvbnRhbCBvZmZzZXQgaWYgbmVlZGVkXHJcblx0XHRcdGlmIChoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSAhPSB3YWxsUmVjdC53aWR0aCB8fCBoQXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgIT0gdGFibGVSZWN0LmxlZnQgLSB3YWxsUmVjdC5sZWZ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWVBZnRlclVwZGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS5sZWZ0ID0gaEF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLndpZHRoID0gaEF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZW1vdmVzIHJvd3MgYXMgaW5kaWNhdGVkIGJ5IHRoZSBnaXZlbiBTY3JvbGxBeGlzQWN0aW9uIGRlYWxpbmcgd2l0aCB0aGUgdmVydGljYWxcclxuXHQgKiBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVSb3dzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgcm93cyBmcm9tICR7dGhpcy5maXJzdFJvd30gLSAke3RoaXMubGFzdFJvd30gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5yb3dzID0gW107XHJcblxyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMucm93Q291bnR9IGV4aXN0aW5nIHJvd3NgKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcclxuXHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIGVuZFxyXG5cdFx0XHRcdHRoaXMucm93cy5wdXNoKCB2cm93KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IHJvd3NgKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggdGhpcy5yb3dDb3VudCAtIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kLCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSByb3dzIGZyb20gYm90dG9tYCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCAwLCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0KTtcclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydH0gcm93cyBmcm9tIHRvcGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3RSb3cgKyAxOyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZH0gcm93cyB0byBib3R0b21gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93IC0gMTsgaSA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpLS0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCAwLCAwLCB2cm93KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydH0gcm93cyB0byB0b3BgKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Um93ID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdFJvdyA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCB0aGlzLnJlbmRlclJvd3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlbW92ZXMgY29sdW1ucyBhcyBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuIFNjcm9sbEF4aXNBY3Rpb24gZGVhbGluZyB3aXRoIHRoZVxyXG5cdCAqIGhvcml6b250YWwgc2Nyb2xsaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlQ29scyggYXhpc0FjdGlvbjogU2Nyb2xsQXhpc0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggYFVwZGF0aW5nIGNvbHVtbnMgZnJvbSAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9IHRvICR7YXhpc0FjdGlvbi5uZXdGaXJzdH0gLSAke2F4aXNBY3Rpb24ubmV3TGFzdH1gKTtcclxuXHJcblx0XHRpZiAoYXhpc0FjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdHZyb3cucmVtb3ZlQWxsQ2VsbHMoKTtcclxuXHRcdFx0XHRmb3IoIGxldCBqID0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaiA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGorKylcclxuXHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMuY29sQ291bnR9IGV4aXN0aW5nIGNvbHNgKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24ubmV3TGFzdCAtIGF4aXNBY3Rpb24ubmV3Rmlyc3QgKyAxfSBjb2xzYCk7XHJcblx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHZyb3cgb2YgdGhpcy5yb3dzKVxyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0RW5kKCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSBjb2xzIGZyb20gcmlnaHRgKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHZyb3cgb2YgdGhpcy5yb3dzKVxyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0U3RhcnQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0fSBjb2xzIGZyb20gbGVmdGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gdGhpcy5yb3dzW2kgLSB0aGlzLmZpcnN0Um93XTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmxhc3RDb2wgKyAxOyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IGNvbHMgdG8gcmlnaHRgKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gdGhpcy5yb3dzW2kgLSB0aGlzLmZpcnN0Um93XTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sIC0gMTsgaiA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqLS0pXHJcblx0XHRcdFx0XHRcdHZyb3cuaW5zZXJ0Q2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSBjb2xzIHRvIGxlZnRgKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Q29sID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblNjcm9sbCggZTogRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jYWxsTWVCZWZvcmVVcGRhdGUoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE92ZXJzY2FuIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzXHJcblx0cHJpdmF0ZSBtaW5Sb3dPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgb3B0Um93T3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1heFJvd092ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtaW5Db2xPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgb3B0Q29sT3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1heENvbE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIEN1cnJlbnQgZGF0YXNldCByZXByZXNlbnRlZCBieSByb3cgY29tcG9uZW50cy5cclxuXHRwcml2YXRlIHJvd3M6IFZSb3dbXTtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgY3VycmVudCBkYXRhc2V0IG9yIDAgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGZpcnN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IHJvdyBpbiB0aGUgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdFJvdzogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgLTEgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGxhc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gQ291bnRzIG9mIHJvd3MgYW5kIGNvbHVtbnNcclxuXHRwcml2YXRlIGdldCByb3dDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0Um93IC0gdGhpcy5maXJzdFJvdyArIDEgfVxyXG5cdHByaXZhdGUgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RDb2wgLSB0aGlzLmZpcnN0Q29sICsgMSB9XHJcblxyXG5cdHB1YmxpYyBnZXQgUm93cygpOiBzdHJpbmcgeyByZXR1cm4gYCR7dGhpcy5maXJzdFJvd30gLSAke3RoaXMubGFzdFJvd31gOyB9XHJcblx0cHVibGljIGdldCBDb2xzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Q29sfSAtICR7dGhpcy5sYXN0Q29sfWA7IH1cclxuXHJcblx0Ly8gU2l6ZSBvZiB0aGUgZW50aXJlIHRhYmxlIGJhc2VkIG9uIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoLiBUaGlzIGJlY29tZXMgdGhlXHJcblx0Ly8gc2l6ZSBvZiB0aGUgd2FsbC5cclxuXHRwcml2YXRlIHdhbGxIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIHdhbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3QgY2FsY3VsYXRlZCBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aFxyXG5cdHByaXZhdGUgYXZnUm93SGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBhdmdDb2xXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3Qgc2Nyb2xsaW5nIHBvc2l0aW9uc1xyXG5cdHByaXZhdGUgbGF0ZXN0U2Nyb2xsVG9wOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxMZWZ0OiBudW1iZXI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZnJhbWUgdGhhdCBoYXMgdGhlIHNjb2xsYmFyc1xyXG5cdHByaXZhdGUgZnJhbWU6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgZnJhbWVSZWYgPSAocjogSFRNTERpdkVsZW1lbnQpID0+IHRoaXMuZnJhbWUgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHdhbGwgdGhhdCBpcyBiaWcgZW5vdWdoIHRvIGhvbGQgZW50aXJlIGRhdGFzZXRcclxuXHRwcml2YXRlIHdhbGw6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgd2FsbFJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy53YWxsID0gcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSB0YWJsZSB0aGF0IGRpc3BsYXlzIHRoZSBwYXJ0aWFsIGRhdGFzZXRcclxuXHRwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG5cdHByaXZhdGUgdGFibGVSZWYgPSAocjogSFRNTFRhYmxlRWxlbWVudCkgPT4gdGhpcy50YWJsZSA9IHI7XHJcblxyXG5cdC8vIE9iamVjdHMgdGhhdCBkZWFsIHdpdGggdmVydGljYWwgYW5kIGhvcml6b250YWwgc2Nyb2xsaW5nXHJcblx0cHJpdmF0ZSB2QXhpczogU2Nyb2xsQXhpcztcclxuXHRwcml2YXRlIGhBeGlzOiBTY3JvbGxBeGlzO1xyXG5cclxuXHQvLyBJRHMgb2YgdmlydHVhbCB0YWJsZSBwYXJ0c1xyXG5cdHByaXZhdGUgZnJhbWVJRDogc3RyaW5nO1xyXG5cdHByaXZhdGUgd2FsbElEOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB0YWJsZUlEOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVlJvdyBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNlbGxzOiBWQ2VsbFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkQ2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMucHVzaCggbmV3IFZDZWxsKCBkYXRhKSk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5zZXJ0Q2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCAwLCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVBbGxDZWxscygpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRTdGFydCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggMCwgY291bnQpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRFbmQoIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIHRoaXMuY2VsbHMubGVuZ3RoIC0gY291bnQsIGNvdW50KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0cj57dGhpcy5jZWxsc308L3RyPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVkNlbGwgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRkYXRhOiBWVGFibGVDZWxsRGF0YTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGRhdGE6IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYgKGRhdGEgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgZGF0YS5jb250ZW50KVxyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB7IGNvbnRlbnQ6IGRhdGEgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPHRkIGNsYXNzPXt0aGlzLmRhdGEuY2xhc3N9IHN0eWxlPXt0aGlzLmRhdGEuc3R5bGV9XHJcblx0XHRcdFx0XHRcdHJvd3NwYW49e3RoaXMuZGF0YS5yb3dTcGFuID8gdGhpcy5kYXRhLnJvd1NwYW4gOiB1bmRlZmluZWR9XHJcblx0XHRcdFx0XHRcdGNvbHNwYW49e3RoaXMuZGF0YS5jb2xTcGFuID8gdGhpcy5kYXRhLmNvbFNwYW4gOiB1bmRlZmluZWR9PlxyXG5cdFx0XHRcdHt0aGlzLmRhdGEuY29udGVudH1cclxuXHRcdFx0PC90ZD5cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWNzc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXzsiXSwic291cmNlUm9vdCI6IiJ9