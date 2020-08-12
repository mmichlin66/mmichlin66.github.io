(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimbl"), require("mimurl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimbl", "mimurl"], factory);
	else if(typeof exports === 'object')
		exports["mimcl"] = factory(require("mimbl"), require("mimurl"));
	else
		root["mimcl"] = factory(root["mimbl"], root["mimurl"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimbl__, __WEBPACK_EXTERNAL_MODULE_mimurl__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/mimclTypes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dnd/DataTransfer.js":
/*!*********************************!*\
  !*** ./lib/dnd/DataTransfer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmulLegacyDataTransfer = exports.EmulDataTransfer = exports.DragAndDropData = void 0;
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
exports.DragAndDropData = DragAndDropData;
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
exports.EmulDataTransfer = EmulDataTransfer;
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
exports.EmulLegacyDataTransfer = EmulLegacyDataTransfer;


/***/ }),

/***/ "./lib/dnd/DragDropApi.js":
/*!********************************!*\
  !*** ./lib/dnd/DragDropApi.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DNDTYPE_ELEMENT = void 0;
// String used as a type (aka format) when an element object is being dragged.
exports.DNDTYPE_ELEMENT = "application/DOMElement";


/***/ }),

/***/ "./lib/dnd/DragDropImpl.js":
/*!*********************************!*\
  !*** ./lib/dnd/DragDropImpl.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDragDropCustomAttributes = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const DragSource_1 = __webpack_require__(/*! ./DragSource */ "./lib/dnd/DragSource.js");
const DragTarget_1 = __webpack_require__(/*! ./DragTarget */ "./lib/dnd/DragTarget.js");
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
            ? new DragSource_1.DragSourceEmulator(elm, propVal)
            : new DragSource_1.DragSourceHandler(elm, propVal);
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
        this.dragTargetHandler = new DragTarget_1.DragTargetHandler(elm, propVal);
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
    mim.registerCustomAttribute("dragSource", DragSourceCustomElmPropHandler);
    mim.registerCustomAttribute("dragTarget", DragTargetCustomElmPropHandler);
}
exports.registerDragDropCustomAttributes = registerDragDropCustomAttributes;


/***/ }),

/***/ "./lib/dnd/DragSource.js":
/*!*******************************!*\
  !*** ./lib/dnd/DragSource.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DragSourceEmulator = exports.DragSourceHandler = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const DragDropApi_1 = __webpack_require__(/*! ./DragDropApi */ "./lib/dnd/DragDropApi.js");
const DataTransfer_1 = __webpack_require__(/*! ./DataTransfer */ "./lib/dnd/DataTransfer.js");
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
            DataTransfer_1.DragAndDropData.setObjectData(type, data);
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
            DataTransfer_1.DragAndDropData.clearAllObjectData();
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
                    DataTransfer_1.DragAndDropData.clearAllObjectData();
                    throw err;
                }
            }
            else {
                this.dragSourceEvent.setData(DragDropApi_1.DNDTYPE_ELEMENT, this.elm);
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
                DataTransfer_1.DragAndDropData.clearAllObjectData();
                return;
            }
            try {
                if (this.dragSource.onDragEnd) {
                    this.dragSourceEvent.dragEvent = e;
                    this.dragSource.onDragEnd(this.dragSourceEvent);
                }
            }
            finally {
                DataTransfer_1.DragAndDropData.clearAllObjectData();
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
exports.DragSourceHandler = DragSourceHandler;
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
            this.emulDataTransfer = new DataTransfer_1.EmulDataTransfer();
        else
            this.emulDataTransfer = new DataTransfer_1.EmulLegacyDataTransfer();
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
        if (mim.isSvg(orgElm) && !mim.isSvgSvg(orgElm)) {
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
exports.DragSourceEmulator = DragSourceEmulator;


/***/ }),

/***/ "./lib/dnd/DragTarget.js":
/*!*******************************!*\
  !*** ./lib/dnd/DragTarget.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DragTargetHandler = void 0;
const DataTransfer_1 = __webpack_require__(/*! ./DataTransfer */ "./lib/dnd/DataTransfer.js");
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
        return DataTransfer_1.DragAndDropData.hasType(this.dragEvent.dataTransfer, type);
    }
    // Rerieves data for the given type. If the type is not available, returns undefined.
    getData(type) {
        let data = DataTransfer_1.DragAndDropData.getObjectData(type);
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
                    if (DataTransfer_1.DragAndDropData.hasType(e.dataTransfer, type)) {
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
                    let data = DataTransfer_1.DragAndDropData.getObjectData(type);
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
exports.DragTargetHandler = DragTargetHandler;


/***/ }),

/***/ "./lib/mimclTypes.js":
/*!***************************!*\
  !*** ./lib/mimclTypes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimcl
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
__exportStar(__webpack_require__(/*! ./dnd/DragDropApi */ "./lib/dnd/DragDropApi.js"), exports);
__exportStar(__webpack_require__(/*! ./popup/Popup */ "./lib/popup/Popup.js"), exports);
__exportStar(__webpack_require__(/*! ./popup/Dialog */ "./lib/popup/Dialog.js"), exports);
__exportStar(__webpack_require__(/*! ./popup/MsgBox */ "./lib/popup/MsgBox.js"), exports);
__exportStar(__webpack_require__(/*! ./router/Router */ "./lib/router/Router.js"), exports);
__exportStar(__webpack_require__(/*! ./tree/TreeApi */ "./lib/tree/TreeApi.js"), exports);
__exportStar(__webpack_require__(/*! ./virt/ScrollAxis */ "./lib/virt/ScrollAxis.js"), exports);
__exportStar(__webpack_require__(/*! ./virt/VTable */ "./lib/virt/VTable.js"), exports);
const DragDropImpl_1 = __webpack_require__(/*! ./dnd/DragDropImpl */ "./lib/dnd/DragDropImpl.js");
DragDropImpl_1.registerDragDropCustomAttributes();


/***/ }),

/***/ "./lib/popup/Dialog.js":
/*!*****************************!*\
  !*** ./lib/popup/Dialog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogButton = exports.Dialog = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const Popup_1 = __webpack_require__(/*! ./Popup */ "./lib/popup/Popup.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Dialog class is a popup with three distinct areas: caption, main content and buttons.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Dialog extends Popup_1.Popup {
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
        let info = { slice, key, callback, ref: new mim.Ref() };
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
        let captionAreaSlice = mim.mergeSlices(Dialog.DefaultCaptionAreaSlice, this.getCaptionAreaSlice());
        return mim.jsx("div", Object.assign({ id: "dlgCaption", mousedown: this.onStartMove, style: captionAreaSlice.style, class: captionAreaSlice.className }, captionAreaSlice.props), captionAreaSlice.content);
    }
    renderMainArea() {
        let mainAreaSlice = mim.mergeSlices(Dialog.DefaultMainAreaSlice, this.getMainAreaSlice());
        return mim.jsx("div", Object.assign({ id: "dlgMainContent", style: mainAreaSlice.style, class: mainAreaSlice.className }, mainAreaSlice.props), mainAreaSlice.content);
    }
    renderButtonArea() {
        let buttonAreaSlice = mim.mergeSlices(Dialog.DefaultButtonAreaSlice, this.getButtonAreaSlice());
        return mim.jsx("div", Object.assign({ id: "dlgButtons", style: buttonAreaSlice.style, class: buttonAreaSlice.className }, buttonAreaSlice.props),
            buttonAreaSlice.content,
            this.buttonInfos.map((info) => {
                let btnSlice = mim.mergeSlices(Dialog.DefaultButtonSlice, info.slice);
                return mim.jsx("button", Object.assign({ key: info.key, click: info.callback && (() => info.callback(info.key)), style: btnSlice.style, class: btnSlice.className }, btnSlice.props), btnSlice.content);
            }));
    }
    // Provides parameters for the <dialog> element.
    getDlgSlice() {
        let content = mim.jsx(mim.Fragment, null,
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
exports.Dialog = Dialog;
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
})(DialogButton = exports.DialogButton || (exports.DialogButton = {}));


/***/ }),

/***/ "./lib/popup/MsgBox.js":
/*!*****************************!*\
  !*** ./lib/popup/MsgBox.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgBoxIcon = exports.MsgBoxButtons = exports.MsgBox = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const Dialog_1 = __webpack_require__(/*! ./Dialog */ "./lib/popup/Dialog.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The MsgBox class is a dialog that displays a message with a set of pre-defined buttons.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class MsgBox extends Dialog_1.Dialog {
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
        let content = mim.jsx("div", { style: { display: "flex", alignItems: "start" } },
            cls && mim.jsx("i", { class: "fa fa-3x " + cls, style: { color: color } }),
            mim.jsx("div", { style: { marginLeft: "10px", minWidth: "15em", maxWidth: "40em", minHeight: "2em",
                    maxHeight: "20em", overflow: "auto" } }, this.message));
        return { content };
    }
    // Adds buttons according to the parameter specified in the constructor.
    createButtons() {
        switch (this.buttons) {
            case MsgBoxButtons.Close:
                this.createButton("Close", Dialog_1.DialogButton.Close);
                break;
            case MsgBoxButtons.OK:
                this.createButton("OK", Dialog_1.DialogButton.OK);
                break;
            case MsgBoxButtons.OkCancel:
                this.createButton("OK", Dialog_1.DialogButton.OK);
                this.createButton("Cancel", Dialog_1.DialogButton.Cancel);
                break;
            case MsgBoxButtons.YesNo:
                this.createButton("Yes", Dialog_1.DialogButton.Yes);
                this.createButton("No", Dialog_1.DialogButton.No);
                break;
            case MsgBoxButtons.YesNoCancel:
                this.createButton("Yes", Dialog_1.DialogButton.Yes);
                this.createButton("No", Dialog_1.DialogButton.No);
                this.createButton("Cancel", Dialog_1.DialogButton.Cancel);
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
exports.MsgBox = MsgBox;
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
})(MsgBoxButtons = exports.MsgBoxButtons || (exports.MsgBoxButtons = {}));
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
})(MsgBoxIcon = exports.MsgBoxIcon || (exports.MsgBoxIcon = {}));


/***/ }),

/***/ "./lib/popup/Popup.js":
/*!****************************!*\
  !*** ./lib/popup/Popup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Popup class is a base class for modeless and modal popups. It provides the basic mechanics
// for showing and closing the popups including moving it with the mouse. The content of the
// popup is either specified in the constuctor or is provided by derived classes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Popup extends mim.Component {
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
        this.caption = new mim.Ref();
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
            this.currDlgSlice = mim.mergeSlices(Popup.DefaultDlgSlice, this.getDlgSlice(), { style });
        }
        return mim.jsx("dialog", Object.assign({ ref: ref => this.dlg = ref, style: this.currDlgSlice.style, class: this.currDlgSlice.className }, this.currDlgSlice.props), this.currDlgSlice.content);
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
        mim.mount(this, this.anchorDiv);
        window.addEventListener("keydown", this.onKeyDown);
    }
    // Unrenders and destroys the dialog.
    destroy() {
        window.removeEventListener("keydown", this.onKeyDown);
        mim.unmount(this.anchorDiv);
        this.anchorDiv.remove();
    }
    get DlgSlice() { return this.DlgSlice; }
}
exports.Popup = Popup;


/***/ }),

/***/ "./lib/router/Router.js":
/*!******************************!*\
  !*** ./lib/router/Router.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Router = void 0;
const mimurl = __webpack_require__(/*! mimurl */ "mimurl");
const mim = __webpack_require__(/*! mimbl */ "mimbl");
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
class Router extends mim.Component {
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
            let matchResult = mimurl.match(url, route.urlPattern);
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
            this.higherRouterService = new mim.Ref();
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
            mim.jsx("div", { id: "rootError", style: { backgroundColor: "pink", display: "flex",
                    flexDirection: "column", alignItems: "start" } },
                err,
                nodePath && nodePath.map((name) => mim.jsx("span", null, name)));
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
exports.Router = Router;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Link class is a component that allows creating links handled by a Router object. It is
// implemented as a managed component because its intended use is very similar to the <a> DOM
// element.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Link extends mim.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // extract our custom parameters and leave only those that are <a> attributes
        let _a = this.props, { routeURL, routeID, fields, makeHistoryEntry } = _a, rest = __rest(_a, ["routeURL", "routeID", "fields", "makeHistoryEntry"]);
        return mim.jsx("a", Object.assign({ href: "#", click: this.onClick }, rest), this.props.children);
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
exports.Link = Link;


/***/ }),

/***/ "./lib/tree/Tree.js":
/*!**************************!*\
  !*** ./lib/tree/Tree.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const TreeNodeContainer_1 = __webpack_require__(/*! ./TreeNodeContainer */ "./lib/tree/TreeNodeContainer.js");
const TreeNode_1 = __webpack_require__(/*! ./TreeNode */ "./lib/tree/TreeNode.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The Tree class is a general purpose tree control.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Tree extends mim.ComponentWithLocalStyles {
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
        this.container = new TreeNodeContainer_1.TreeNodeContainer(() => new TreeNode_1.TreeNode(null, 0, this));
        this.elmRef = new mim.Ref();
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
        return mim.jsx("div", { ref: this.elmRef, tabindex: this.tabIndex, class: this.cssClassTree, keydown: this.onKeyDown }, this.container);
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
exports.Tree = Tree;


/***/ }),

/***/ "./lib/tree/TreeApi.js":
/*!*****************************!*\
  !*** ./lib/tree/TreeApi.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTree = void 0;
const Tree_1 = __webpack_require__(/*! ./Tree */ "./lib/tree/Tree.js");
// Creates tree control instance
function createTree() {
    return new Tree_1.Tree();
}
exports.createTree = createTree;


/***/ }),

/***/ "./lib/tree/TreeNode.js":
/*!******************************!*\
  !*** ./lib/tree/TreeNode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const TreeNodeContainer_1 = __webpack_require__(/*! ./TreeNodeContainer */ "./lib/tree/TreeNodeContainer.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The TreeNode class represents a single node within a tree control.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class TreeNode extends mim.Component {
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
        this.container = new TreeNodeContainer_1.TreeNodeContainer(this.nodeFactory);
        this.m_isExpanded = false;
        this.m_isSelected = false;
        this.contentElmRef = new mim.Ref();
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
        return mim.jsx(mim.Fragment, null,
            this.renderNode(),
            this.renderSubNodes());
    }
    renderNode() {
        let expanderClassName = this.container.nodes.length === 0 ? "" : this.m_isExpanded ? "fa-caret-down" : "fa-caret-right";
        let iconContent;
        if (this.m_icon) {
            if ("class" in this.m_icon)
                iconContent = mim.jsx("span", { class: this.m_tree.cssClassNodeIcon + " " + this.m_icon.class, click: this.onClick, dblclick: this.onDblClick });
            else if ("img" in this.m_icon)
                iconContent = mim.jsx("img", { class: this.m_tree.cssClassNodeIcon, src: this.m_icon.img, click: this.onClick, dblclick: this.onDblClick });
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
        return mim.jsx("div", { class: this.m_tree.cssClassNode },
            mim.jsx("i", { class: "fa fa-fw " + expanderClassName, click: this.onExpanderClicked }),
            iconContent,
            mim.jsx("span", { ref: this.contentElmRef, dragSource: true, class: contentClass, style: contentStyle, click: this.onClick, dblclick: this.onDblClick }, this.m_content));
    }
    renderSubNodes() {
        if (this.subNodes.length === 0)
            return null;
        return mim.jsx("div", { class: this.m_tree.cssClassSubnodes, style: { display: this.m_isExpanded ? "block" : "none" } }, this.container);
    }
}
exports.TreeNode = TreeNode;


/***/ }),

/***/ "./lib/tree/TreeNodeContainer.js":
/*!***************************************!*\
  !*** ./lib/tree/TreeNodeContainer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNodeContainer = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The TreeNodeContainer class represents a collection of tree nodes that are displayed and
// hidden together.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class TreeNodeContainer extends mim.Component {
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
exports.TreeNodeContainer = TreeNodeContainer;


/***/ }),

/***/ "./lib/virt/ScrollAxis.js":
/*!********************************!*\
  !*** ./lib/virt/ScrollAxis.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollAxisAction = exports.ScrollAxis = void 0;
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
exports.ScrollAxis = ScrollAxis;
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
exports.ScrollAxisAction = ScrollAxisAction;


/***/ }),

/***/ "./lib/virt/VTable.js":
/*!****************************!*\
  !*** ./lib/virt/VTable.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VTable = void 0;
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const ScrollAxis_1 = __webpack_require__(/*! ./ScrollAxis */ "./lib/virt/ScrollAxis.js");
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
class VTable extends mim.ComponentWithLocalStyles {
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
        this.vAxis = new ScrollAxis_1.ScrollAxis(this.minRowOverscan, this.optRowOverscan, this.maxRowOverscan);
        this.hAxis = new ScrollAxis_1.ScrollAxis(this.minColOverscan, this.optColOverscan, this.maxColOverscan);
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
        return mim.jsx("div", { id: this.frameID, ref: this.frameRef, scroll: this.onScroll },
            mim.jsx("div", { id: this.wallID, ref: this.wallRef },
                mim.jsx("table", { id: this.tableID, ref: this.tableRef },
                    mim.jsx("tbody", null, this.renderRows))));
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
exports.VTable = VTable;
class VRow extends mim.Component {
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
        return mim.jsx("tr", null, this.cells);
    }
}
class VCell extends mim.Component {
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
            return mim.jsx("td", { class: this.data.class, style: this.data.style, rowspan: this.data.rowSpan ? this.data.rowSpan : undefined, colspan: this.data.colSpan ? this.data.colSpan : undefined }, this.data.content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBLG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsdUZBQXVGO0FBQ3ZGLGlHQUFpRztBQUNqRyxtR0FBbUc7QUFDbkcsa0dBQWtHO0FBQ2xHLGtHQUFrRztBQUNsRywrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFzQixlQUFlO0lBRTdCLE1BQU0sQ0FBQyxhQUFhLENBQUUsSUFBWSxFQUFFLElBQVM7UUFFbkQsSUFBSSxDQUFDLElBQUksSUFBSSxJ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LENBQUMsQ0FBQyxTQUFTLEVBQzFELE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2Q7U0FDTDtJQUNGLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7O0FDM3BCRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJtaW1jbC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1ibFwiLCBcIm1pbXVybFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jbFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jbFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbWJsXCJdLCByb290W1wibWltdXJsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWNsVHlwZXMuanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0FuZERyb3BEYXRhIHN0YXRpYyBjbGFzcyBkZWFscyB3aXRoIGRhdGEgb2YgYXJiaXRyYXJ5IHR5cGVzIGJlaW5nIHRyYW5zZmVyZWRcclxuLy8gZHVyaW5nIGRyYWcgJiBkcm9wIG9wZXJhdGlvbnMuIFdoZW4gYSBkcmFnIG9wZXJhdGlvbiBzdGFydHMsIHBpZWNlcyBvZiBkYXRhIGFyZSBhZGRlZCB0byBhIG1hcFxyXG4vLyB3aXRoIHR5cGVzIChmb3JtYXRzKSBhcyBrZXlzICh0aGVzZSBhcmUgdGhlIHNhbWUgZm9ybWF0cyB0aGF0IGFyZSBrZXB0IGluIHRoZSBIVE1MNSBEYXRhVHJhbnNmZXJcclxuLy8gb2JqZWN0LiBEYXRhIGlzIGFkZGVkIHVzaW5nIHRoZSBTZXRPYmplY3REYXRhIG1ldGhvZCBvZiB0aGUgSURyYWdTdGFydEV2ZW50IGludGVyZmFjZS4gV2hlbiB0aGVcclxuLy8gZHJvcCBvY2N1cnMsIHRoZSBHZXRPYmplY3REYXRhIG9mIHRoZSBJRHJhZ1RhcmdldEV2ZW50IGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGRhdGEuIFRoZSBtYXAgaXNcclxuLy8gY2xlYXJlZCB3aGVuIHRoZSBkcmFnIG9wZXJhdGlvbiBlbmRzIC0gcmVnYXJkbGVzcyB3aGV0aGVyIGl0IHdhcyBzdWNjZXNzZnVsIG9yIHdhcyBjYW5jZWxlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmFnQW5kRHJvcERhdGFcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0eXBlIHx8IGRhdGEgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLnNldCggdHlwZSwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldE9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5nZXQoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByZW1vdmVPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuZGVsZXRlKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxPYmplY3REYXRhKCk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5jbGVhcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUgaW4gdGhlIGdpdmVuIERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0cHVibGljIHN0YXRpYyBoYXNUeXBlKCBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlciwgdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgaW1wbGVtbnRzIHR5cGVzIHZpYSBET01TdHJpbmdMaXN0LCB3aGNpaCBkb2Vzbid0IGhhdmUgaW5kZXhPZlxyXG5cdFx0aWYgKGRhdGFUcmFuc2Zlci50eXBlcy5pbmRleE9mKVxyXG5cdFx0XHRyZXR1cm4gZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YoIHR5cGUpID49IDA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAoZGF0YVRyYW5zZmVyLnR5cGVzIGFzIGFueSBhcyBET01TdHJpbmdMaXN0KS5jb250YWlucyggdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBvYmplY3QgZm9ybWF0cyB0byBvYmplY3QgdmFsdWVzLlxyXG5cdHByaXZhdGUgc3RhdGljIGRhdGFNYXA6IE1hcDxzdHJpbmcsYW55PiA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFbXVsRGF0YVRyYW5zZmVyIGludGVyZmFjZSByZXByZXNlbnRzIG9iamVjdHMgdGhhdCBlbXVsYXRlIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlblxyXG4vLyB0aGUgZHJhZyBzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlclxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0aW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0aW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0aW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0aXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bERhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdFxyXG4vLyBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byB1cGRhdGUgdGhlIGRyYWcgZmVlZGJhY2ssIHJlcGxhY2luZyBhbnkgcHJldmlvdXNseSBzcGVjaWZpZWRcclxuXHQvLyBmZWVkYmFjay5cclxuXHRwdWJsaWMgc2V0RHJhZ0ltYWdlKCBpbWFnZTogRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGltYWdlO1xyXG5cdFx0dGhpcy5pbWFnZUVsbVggPSB4O1xyXG5cdFx0dGhpcy5pbWFnZUVsbVkgPSB5O1xyXG5cclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBoYXZlIHNldERyYWdJbWFnZSBtZXRob2QgaW4gaXRzIERhdGFUcmFuc2ZlciBjbGFzcy5cclxuXHRcdGlmIChzdXBlci5zZXREcmFnSW1hZ2UpXHJcblx0XHRcdHN1cGVyLnNldERyYWdJbWFnZSggaW1hZ2UsIHgsIHkpO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgYSBuZXcgaW1hZ2UgZWxlbWVudCB3YXMgc2V0LCBzbyB0aGF0IHdlIHdpbGwgXCJwcmVwYXJlXCIgaXQgb24gdGhlIG5leHRcclxuXHRcdC8vIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZWZmZWN0QWxsb3dlZCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5lZmZlY3RBbGxvd2VkRXggPSB2YWw7XHJcblx0XHRzdXBlci5lZmZlY3RBbGxvd2VkID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4ID09PSB1bmRlZmluZWQgPyBzdXBlci5lZmZlY3RBbGxvd2VkIDogdGhpcy5lZmZlY3RBbGxvd2VkRXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBkcm9wRWZmZWN0KCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmRyb3BFZmZlY3QgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmRyb3BFZmZlY3QgOiB0aGlzLmRyb3BFZmZlY3RFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0RGF0YSggZm9ybWF0OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzdXBlci5zZXREYXRhKCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyRGF0YSggZm9ybWF0KTtcclxuXHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRwdWJsaWMgaW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0cHVibGljIGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZVxyXG4vLyBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuIFRoaXMgb2JqZWN0IGlzIHVzZWQgdW5kZXIgRWRnZSwgd2hpY2ggZG9lc24ndFxyXG4vLyBpbXBsZW1lbnQgdGhlIG5hdGl2ZSBEYXRhVHJhbnNmZXIgb2JqZWN0IHByb3Blcmx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXIgaW1wbGVtZW50cyBJRW11bERhdGFUcmFuc2ZlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdFx0dGhpcy5tX2l0ZW1zID0gbnVsbDtcclxuXHRcdHRoaXMubV9maWxlcyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RBbGxvd2VkKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGRyb3BFZmZlY3QoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMuZGF0YU1hcC5zZXQoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IHRoaXMuZGF0YU1hcC5nZXQoIGZvcm1hdCk7XHJcblx0XHRyZXR1cm4gcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHM7XHJcblx0fVxyXG5cclxuXHRjbGVhckRhdGEoIGZvcm1hdD86IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIGdldCBmaWxlcygpOiBGaWxlTGlzdCB7IHJldHVybiB0aGlzLm1fZmlsZXM7IH1cclxuICAgIGdldCBpdGVtcygpOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCB7IHJldHVybiB0aGlzLm1faXRlbXM7IH1cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBhbGxvd2VkIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgYWxsb3dlZCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZWZmZWN0QWxsb3dlZEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgZHJvcCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGRyb3AgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBNYXAgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRvIGRhdGEgaXRlbXMuXHJcblx0cHJpdmF0ZSBkYXRhTWFwOiBNYXA8c3RyaW5nLHN0cmluZz47XHJcblxyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKS4gVGhpcyBhcnJheSBjaGFuZ2VzIGV2ZXJ5IHRpbWUgZGF0YSBpcyBzZXQgb3IgY2xlYXJlZC5cclxuXHRwcml2YXRlIGRhdGFGb3JtYXRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIG1fZmlsZXM6IEZpbGVMaXN0O1xyXG4gICAgcHJpdmF0ZSBtX2l0ZW1zOiBEYXRhVHJhbnNmZXJJdGVtTGlzdDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wRWZmZWN0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBmb3IgZGlmZmVyZW50IGRyYWcgJiBkcm9wIGVmZmVjdHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnRHJvcEVmZmVjdFxyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdBbGxvd2VkRWZmZWN0c1xyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG5cdENvcHlNb3ZlID0gXCJjb3B5TW92ZVwiLFxyXG5cdENvcHlMaW5rID0gXCJjb3B5TGlua1wiLFxyXG5cdExpbmtNb3ZlID0gXCJsaW5rTW92ZVwiLFxyXG5cdEFsbCA9IFwiYWxsXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZUV2ZW50IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBldmVudCBoYW5kbGVycyBvbiB0aGVcclxuLy8gZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRyZWFkb25seSBkcmFnRXZlbnQ6IERyYWdFdmVudDtcclxuXHJcblx0Ly8gU2V0cyBkYXRhIHdpdGggdGhlIGdpdmVuIHR5cGUuIEZvciB0ZXh0IGRhdGEgdGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiBNSU1FIHR5cGVzLlxyXG5cdHNldERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0RXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHRhcmdldCBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueTtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdTb3VyY2UgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJhZyBzb3VyY2UuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnU291cmNlIGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIERhdGEgdG8gYmVcclxuLy8gcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgc3VwcGxpZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyYWdTdGFydCBjYWxsYmFja1xyXG4vLyBhbmQgdXNpbmcgdGhlIGUuc2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlXHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gc3RhcnRzIGZvciB0aGUgZWxlbWVudC5cclxuXHRvbkRyYWdTdGFydDogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBlbmRzLlxyXG5cdG9uRHJhZ0VuZD86IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuXHJcblx0b25EcmFnPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0b1xyXG4vLyBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBkaXJlY3RseSB2aWEgdGhlIGRhdGEgcHJvcGVydHkuIFRoaXNcclxuLy8gaW50ZXJmYWNlIGFsbG93cyBzaW1wbGlmeWluZyBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiB3aXRob3V0IHRoZSBuZWVkIHRvIGltcGxlbWVudCBhbnlcclxuLy8gY2FsbGJhY2tzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRHJhZ1NvdXJjZVxyXG57XHJcblx0Ly8gT2JqZWN0IGhvbGRpbmcgZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIGRyYWcgb3BlcmF0aW9uLiBFYWNoIHBpZWNlIG9mIGRhdGEgaXMgaWRlbnRpZmllZCBieVxyXG5cdC8vIGEgdW5pcXVlIHR5cGUgKGFrYSBmb3JtYXQpIHN0cmluZy5cclxuXHRkYXRhOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHJcblx0Ly8gQWxsb3dlZCBkcm9wIGVmZmVjdHMuIElmIGRlZmluZWQsIHRoaXMgbWVtYmVyIGlzIHVzZWQgb25seSBpZiBlaXRoZXIgdGhlIG9uRHJhZ1N0YXJ0XHJcblx0Ly8gY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgb3IgaXQgZG9lc24ndCBzZXQgYWxsb3dlZCBkcm9wIGVmZmVjdHMuXHJcblx0YWxsb3dlZEVmZmVjdHM/OiBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERyYWcgc291cmNlIHByb3BlcnR5IChkcmFnU291cmNlKSBjYW4gaGF2ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBzaGFwZXM6XHJcbi8vXHQtIElEcmFnU291cmNlIGludGVyZmFjZSAtIGRyYWcgYmVoYXZpb3IgYW5kIGRhdGEgdG8gYmUgcGFzc2VkIHdpdGggaXQgaXMgZGV0ZXJtaW5lZFxyXG4vL1x0XHRieSBpbXBsZW1lbnRpbmcgdGhlIHJlbGV2YW50IGNhbGxiYWNrcy5cclxuLy9cdC0gSVNpbXBsZURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpc1xyXG4vL1x0XHRkZWZpbmVkIGJ5IHRoZSBkYXRhIHByb3BlcnR5LlxyXG4vL1x0LSBcImVsbS10ZXh0XCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50XHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSBcImVsbS1odG1sXCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3Mgb3V0ZXJIVE1MXHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSB0cnVlIC0gZXF1aXZhbGVudCB0byBcImVsbS1odG1sXCIgc3RyaW5nLlxyXG4vL1x0LSBmYWxzZSAtIGRyYWcgYmVoYXZpb3IgaXMgc3VwcHJlc3NlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIERyYWdTb3VyY2VQcm9wVHlwZSA9IElEcmFnU291cmNlIHwgSVNpbXBsZURyYWdTb3VyY2UgfCBib29sZWFuIHwgXCJlbG0tdGV4dFwiIHwgXCJlbG0taHRtbFwiO1xyXG5cclxuXHJcblxyXG4vLyBTdHJpbmcgdXNlZCBhcyBhIHR5cGUgKGFrYSBmb3JtYXQpIHdoZW4gYW4gZWxlbWVudCBvYmplY3QgaXMgYmVpbmcgZHJhZ2dlZC5cclxuZXhwb3J0IGNvbnN0IERORFRZUEVfRUxFTUVOVCA9IFwiYXBwbGljYXRpb24vRE9NRWxlbWVudFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnMgb2ZcclxuLy8gdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyb3AgY2FsbGJhY2sgYW5kIGNhbGxpbmcgdGhlIGUuZ2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgZW50ZXJzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gSWYgdGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSwgdGhlIG9uRHJhZ092ZXJcclxuXHQvLyBhbmQgb25EcmFnTGVhdmUgbWV0aG9kcyB3aWxsIG5vdCBiZSBjYWxsZWQuXHJcblx0b25EcmFnRW50ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGhvdmVycyBvdmVyIHRoZSBlbGVtZW50IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSBvclxyXG5cdC8vIGZhbHNlLCB0aGUgb25EcmFnT3ZlciBtZXRob2Qgd2lsbCBiZSBjb250aW51ZWQgdG8gYmUgY2FsbGVkIGFzIHRoZSBtb3VzZSBtb3Zlcy4gVGhpcyBhbGxvd3NcclxuXHQvLyBzb21lIHBhcnRzIG9mIHRoZSBlbGVtZW50IHRvIGJlIGRyb3AgdGFyZ2V0cyB3aGlsZSBvdGhlcnMgbm90LlxyXG5cdG9uRHJhZ092ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGxlYXZlcyB0aGUgZWxlbWVudCBib3VuZGFyeSBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uXHJcblx0b25EcmFnTGVhdmU/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZGF0YSB3YXMgZHJvcGVkIGluIHRoaXMgZHJvcCB6b25lLlxyXG5cdG9uRHJvcDogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1RhcmdldCBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcm9wIHRhcmdldC4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdUYXJnZXQgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gUmVjZWl2aW5nXHJcbi8vIGRhdGEgaXMgYWNjb21wbGlzaGVkIGJ5IHNwZWNpZnlpbmcgdGhlIGV4cGVjdGVkIHR5cGVzIHZpYSB0aGUgZGF0YVR5cGVzIHByb3BlcnR5IGFuZFxyXG4vLyBpbXBsZW1lbnRpbmcgdGhlIG9uRGF0YURyb3BwZWQgY2FsbGJhY2suXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdGhhdCB0aGUgZHJhZyB0YXJnZXQgY2FuIHJlY2VpdmUuXHJcblx0ZGF0YVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcblx0Ly8gU3R5bGUgdG8gYXBwbHkgZm9yIGRyYWcgZmVlZGJhY2suXHJcblx0ZmVlZGJhY2s/OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGRhdGEgY29udGFpbmluZyBvbmUgb3IgbW9yZSBhcHByb3ByaWF0ZSB0eXBlcyBpcyBkcm9wcGVkLlxyXG5cdC8vIFRoZSBkYXRhIGlzIGRlbGl2ZXJlZCBhcyBhbiBvYmplY3Qgd2hlcmUgcHJvcGVydHkgbmFtZXMgYXJlIGRhdGEgdHlwZXMgYW5kIHZhbHVlcyBhcmVcclxuXHQvLyBkYXRhIHBpZWNlcyBvZiB0aGVzZSB0eXBlcy5cclxuXHRvbkRhdGFEcm9wcGVkOiAoZGF0YToge1t0eXBlOiBzdHJpbmddOiBhbnl9KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERyYWcgdGFyZ2V0IHByb3BlcnR5IChkcmFnVGFyZ2V0KSBjYW4gYmUgZWl0aGVyIElEcmFnVGFyZ2V0IGludGVyZmFjZSBvciByZWZlcmVuY2UgdG8gYW5cclxuLy8gRWxlbWVudC4gSW4gdGhlIGxhdHRlciBjYXNlLCB0aGUgcmVmZXJlbmNlIHdpbGwgYmUgc2V0IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaXMgYW5cclxuLy8gRWxlbWVudCBvYmplY3QuXHJcbmV4cG9ydCB0eXBlIERyYWdUYXJnZXRQcm9wVHlwZSA9IElEcmFnVGFyZ2V0IHwgSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvbGliL2FwaS9taW1cIlxyXG57XHJcblx0aW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4+XHJcblx0e1xyXG5cdFx0ZHJhZ1NvdXJjZT86IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHRcdGRyYWdUYXJnZXQ/OiBEcmFnVGFyZ2V0UHJvcFR5cGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdTb3VyY2VIYW5kbGVyLCBEcmFnU291cmNlRW11bGF0b3J9IGZyb20gXCIuL0RyYWdTb3VyY2VcIlxyXG5pbXBvcnQge0RyYWdUYXJnZXRIYW5kbGVyfSBmcm9tIFwiLi9EcmFnVGFyZ2V0XCJcclxuaW1wb3J0IHsgRHJhZ1NvdXJjZVByb3BUeXBlLCBEcmFnVGFyZ2V0UHJvcFR5cGUgfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnU291cmNlUHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdTb3VyY2VQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gXCJvd25lclNWR0VsZW1lbnRcIiBpbiBlbG1cclxuXHRcdFx0XHRcdD8gbmV3IERyYWdTb3VyY2VFbXVsYXRvciggZWxtLCBwcm9wVmFsKVxyXG5cdFx0XHRcdFx0OiBuZXcgRHJhZ1NvdXJjZUhhbmRsZXIoIGVsbSwgcHJvcFZhbCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnU291cmNlSGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1NvdXJjZVByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgc291cmNlIG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2VIYW5kbGVyOiBEcmFnU291cmNlSGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnVGFyZ2V0UHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdUYXJnZXRQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gbmV3IERyYWdUYXJnZXRIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0SGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgdGFyZ2V0IG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRIYW5kbGVyOiBEcmFnVGFyZ2V0SGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWdpc3RlciBjdXN0b20gcHJvcGVydHkgZmFjdG9yeSBmb3IgZHJhZ1NvdXJjZSBhbmQgZHJhZ1RhcmdldCBwcm9wZXJ0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpXHJcbntcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1NvdXJjZVwiLCBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIpO1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnVGFyZ2V0XCIsIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlcik7XHJcbn1cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7RHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnU291cmNlUHJvcFR5cGUsIElEcmFnU291cmNlLCBJU2ltcGxlRHJhZ1NvdXJjZSwgSURyYWdTb3VyY2VFdmVudCwgRE5EVFlQRV9FTEVNRU5UfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YSwgSUVtdWxEYXRhVHJhbnNmZXIsIEVtdWxEYXRhVHJhbnNmZXIsIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXJ9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG50eXBlIERyYWdFdmVudFR5cGUgPSBcImRyYWdcIiB8IFwiZHJhZ2VuZFwiIHwgXCJkcmFnZW50ZXJcIiB8IFwiZHJhZ2V4aXRcIiB8IFwiZHJhZ2xlYXZlXCIgfCBcImRyYWdvdmVyXCIgfCBcImRyYWdzdGFydFwiIHwgXCJkcm9wXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1N0YXJ0RXZlbnQgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZGlmZmVyZW50IGV2ZW50IGhhbmRsZXJzXHJcbi8vIG9uIHRoZSBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VFdmVudCBpbXBsZW1lbnRzIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRnZXQgZHJhZ0V2ZW50KCk6IERyYWdFdmVudCB7IHJldHVybiB0aGlzLm1fZHJhZ0V2ZW50OyB9XHJcblx0c2V0IGRyYWdFdmVudCggdmFsOiBEcmFnRXZlbnQpIHsgdGhpcy5tX2RyYWdFdmVudCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgZGF0YSB3aXRoIHRoZSBnaXZlbiB0eXBlLiBGb3IgdGV4dCBkYXRhIHRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgTUlNRSB0eXBlcy5cclxuXHRzZXREYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBcIlwiKTtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLnNldE9iamVjdERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cHJpdmF0ZSBtX2RyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUJlaGF2aW9yIGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyB0aGF0IGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW4gbWVjaGFuaXNtc1xyXG4vLyBzZXR1cCBieSBkaWZmZXJlbnQgdHlwZXMgb2YgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnU291cmNlQmVoYXZpb3Jcclxue1xyXG5cdFJlZ3VsYXIgPSAxLFxyXG5cdFNpbXBsZSxcclxuXHRFbG1UZXh0LFxyXG5cdEVsbUh0bWxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eS4gSXRcclxuLy8gaXMgdXNlZCBieSBIVE1MIGVsZW1lbnRzIHRoYXQgbmF0aXZlbHkgc3VwcG9ydCBkcmFnIGFuZCBkcm9wIGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnU291cmNlSGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1NvdXJjZVByb3A6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLXRleHRcIilcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0O1xyXG5cdFx0ZWxzZSBpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLWh0bWxcIiB8fCBkcmFnU291cmNlUHJvcCA9PT0gdHJ1ZSlcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sO1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdTb3VyY2VQcm9wIGFzIElTaW1wbGVEcmFnU291cmNlKS5kYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlO1xyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZSkub25EcmFnU3RhcnQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyO1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHZhbHVlIG9mIGRyYWdTb3VyY2VQcm9wIGluIERyYWdTb3VyY2VIYW5kbGVyIGNvbnN0cnVjdG9yLlwiKTtcclxuXHRcdC8vLyAjZW5kaWZcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBtYWtpbmcgdGhlIGVsZW1lbnQgZHJhZ2dhYmxlIGJ5IGFkZGluZyBkcmFnIGV2ZW50cy5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSBuZXcgRHJhZ1NvdXJjZUV2ZW50KCk7XHJcblx0XHR0aGlzLmVsbS5zZXRBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXJtaW5hdGVzIHRoZSBvYmplY3QgYnkgcmVtb3ZpbmcgZHJhZyBldmVudCBoYW5kbGVycyBmcm9tIHRoZSBlbGVtZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJkcmFnZ2FibGVcIik7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnc3RhcnQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ1N0YXJ0ID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZGF0YSBtYXAgLSBqdXN0IGluIGNhc2VcclxuXHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGUpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGRhdGFUeXBlIGluIHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5kYXRhKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIGRhdGFUeXBlLCB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YVtkYXRhVHlwZV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5hbGxvd2VkRWZmZWN0cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIG9uRHJhZ1N0YXJ0IG1ldGhvZCBpcyBkZWZpbmVkLCBpbnZva2UgaXRcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KVxyXG5cdFx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBETkRUWVBFX0VMRU1FTlQsIHRoaXMuZWxtKTtcclxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWwpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLm91dGVySFRNTCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWdlbmQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ0VuZCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgIT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZmluYWxseVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWcgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZyA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZyggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByb3RlY3RlZCBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgd2UgbmVlZCB0byBpbXBsZW1lbnQgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvcjsgdGhhdCBpcywgd2Ugc2hvdWxkXHJcblx0Ly8vLyBwYXNzIHRoZSBlbGVtZW50IG9iamVjdCBhcyBkYXRhIGJlaW5nIGRyYWdnZWQuIE5vdGUgdGhhdCBlaXRoZXIgdGhpcyBmbGFnIGlzIHRydWUgb3JcclxuXHQvLy8vIHRoZSBkcmFnU291cmNlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0Ly9wdWJsaWMgZGVmYXVsdERyYWdTb3VyY2VCZWhhdmlvckVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFR5cGUgb2YgZHJhZyBzb3VyY2UgbWVjaGFuaXNtIGRldGVybWluZWQgYnkgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHlcclxuXHRwcm90ZWN0ZWQgYmVoYXZpb3I6IERyYWdTb3VyY2VCZWhhdmlvcjtcclxuXHJcblx0Ly8gSURyYWdTb3VyY2UgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBjYW4gYmVcclxuXHQvLyB1bmRlZmluZWQgaWYgZWl0aGVyIHdlIGFyZSBpbXBsZW1lbnRpbmcgYSBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZTogSURyYWdTb3VyY2U7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIHNpbXBsZURyYWdTb3VyY2U6IElTaW1wbGVEcmFnU291cmNlO1xyXG5cclxuXHQvLyBFdmVudCBvYmplY3QgdGhhdCBpcyByZXVzZWQgd2hlbiBzZW5kaW5nIGV2ZW50cyB0byBhIGRyYWcgc291cmNlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlRXZlbnQ6IERyYWdTb3VyY2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VFbXVsYXRvciBjbGFzcyBlbXVsYXRlcyBzdXBwb3J0IGZvciBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5IHZpYSBtb3VzZVxyXG4vLyBldmVudHMuIEl0IGlzIHVzZWQgZm9yIERPTSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgbmF0aXZlIGRyYWcgYW5kIGRyb3Agc3Vwb3J0IC0gZS5nLiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUVtdWxhdG9yIGV4dGVuZHMgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2U6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHRzdXBlciggZWxtLCBkcmFnU291cmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBhZGRpbmcgYSBtb3VzZWRvd24gZXZlbnQuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHRzdXBlci50ZXJtKCk7XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbWVtYmVyIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UtZG93biBldmVudCBhbmQgc3RhcnQgd2F0Y2hpbmcgbW91c2UgbW92ZW1lbnRcclxuXHQvLyhhbmQgb3RoZXIpIGV2ZW50cy5cclxuXHRwcml2YXRlIG9uTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gaWdub3JlIG5vbi1wcmltYXJ5IG1vdXNlIGJ1dHRvbnNcclxuXHRcdGlmIChlLmJ1dHRvbiAhPT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyByZW1lbWViZXIgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIGRvd24gZXZlbnRcclxuXHRcdHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcclxuXHRcdHRoaXMubW91c2VEb3duWSA9IGUuY2xpZW50WTtcclxuXHJcblx0XHQvLyBzdGFydCBsaXN0ZW5pbmcgdG8gc2V2ZXJhbCBEbkQgcmVsYXRlZCBldmVudHMgb24gdGhlIGRvY3VtZW50LlxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEVpdGhlciBzdGFydCBvciBjb250aW51ZSBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBwcmltYXJ5IGJ1dHRvbiBtdXN0IGJlIHN0aWxsIHByZXNzZWRcclxuXHRcdGlmICgoZS5idXR0b25zICYgMSkgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBuZWVkIHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gLSBvdGhlcndpc2UgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIG9uIHRoZSBwYWdlLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIGlmIERuRCBvcGVyYXRpb24gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcyBmaXJlIGV2ZW50czsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHRoZVxyXG5cdFx0Ly8gbW91c2UgbW92ZWQgZW5vdWdoIHRvIHN0YXJ0IHRoZSBvcGVyYXRpb24uXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJhZ1N0ZXAoIGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3ggPSBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blg7XHJcblx0XHRcdGxldCBjeSA9IGUuY2xpZW50WSAtIHRoaXMubW91c2VEb3duWTtcclxuXHRcdFx0aWYgKGN4ID49IC0yICYmIGN4IDw9IDIgJiYgY3kgPj0gLTIgJiYgY3kgPD0gMilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHJcblx0XHRcdHRoaXMuaW5pdGlhdGVEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVEcm9wKCBlKTtcclxuXHJcblx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNylcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgRXNjYXBlIC0gY2FuY2VsIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0XHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmNhbmNlbERyYWdPcGVyYXRpb24oIGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXl1cCBldmVudHNcclxuXHRwcml2YXRlIG9uS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVLZXlFdmVudCggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWF0ZXMgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb25cclxuXHRwcml2YXRlIGluaXRpYXRlRHJhZ09wZXJhdGlvbiggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoXCJzZXREcmFnSW1hZ2VcIiBpbiBEYXRhVHJhbnNmZXIucHJvdG90eXBlKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bERhdGFUcmFuc2ZlcigpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bExlZ2FjeURhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRcdC8vIGZpcmUgb25EcmFnU3RhcnQgZXZlbnQgLSBpZiB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgcHJldmVudGVkLCB3ZSBjYW5jZWwgdGhlIG9wZXJhdGlvblxyXG5cdFx0bGV0IGRyYWdzdGFydEV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdzdGFydFwiKTtcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIGRyYWdzdGFydEV2ZW50KTtcclxuXHRcdGlmIChkcmFnc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB0aGUgZHJhZyBzb3VyY2UgZGlkbid0IHNldCBhbiBlbGVtZW50IGZvciBkcmFnIGltYWdlLCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmLlxyXG5cdFx0aWYgKCF0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjYWxjdWx0ZSBkcmFnIGltYWdlIGNvb3JkaW5hdGVzIHNvIHRoYXQgaW5pdGlhbGx5IHRoZSBkcmFnIGltYWdlIGNvaW5zaWRlcyB3aXRoXHJcblx0XHRcdC8vIHRoZSBvcmlnaW5hbCBpbWFnZVxyXG5cdFx0XHRsZXQgcmM6IENsaWVudFJlY3QgPSB0aGlzLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSggdGhpcy5lbG0sIGUuY2xpZW50WCAtIHJjLmxlZnQsIGUuY2xpZW50WSAtIHJjLnRvcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB3ZSBkb24ndCBrbm93IGxhc3QgdGFyZ2V0IHlldFxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIGEgZHJhZyBzdGVwXHJcblx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlIG9uZSBzdGVwIG9mIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uLCB3aGljaCBvY2N1cnMgd2hlbiB0aGUgbW91c2UgbW92ZXNcclxuXHRwcml2YXRlIGhhbmRsZURyYWdTdGVwKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZXBhcmVJbWFnZUVsZW1lbnQoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJlZm9yZSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50IHdlIHNldCB0aGUgZHJvcEVmZmVjdCB0byBub25lLCBhbmQgdGhlIGRyb3BvdmVyIGhhbmRsZXJcclxuXHRcdC8vIGNvdWxkIHNldCBpdCB0byBzb21ldGhpbmcgZWxzZSBpZiBkZXNpcmVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIGZpbmQgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0bGV0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKSB0aGlzLmltYWdlRWxtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0aWYgKG5ld1RhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgYXJlIG9uIHRoZSBzYW1lIHRhcmdldCBhcyB0aGUgcHJldmlvdXMgbW91c2UgbW92ZSwganVzdCBzZW5kIGRyYWdvdmVyIChpZlxyXG5cdFx0XHQvLyB0aGUgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lKVxyXG5cdFx0XHRpZiAobmV3VGFyZ2V0ID09PSB0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzZW5kIGRyYWdlbnRlciB0byB0aGUgbmV3IHRhcmdldCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgYSB2YWxpZCBkcm9wXHJcblx0XHRcdFx0Ly8gem9uZVxyXG5cdFx0XHRcdGxldCBkcmFnZW50ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnZW50ZXJcIik7XHJcblx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdlbnRlckV2ZW50KTtcclxuXHRcdFx0XHRsZXQgaXNOZXdUYXJnZXREcm9wcGFibGU6IGJvb2xlYW4gPSBkcmFnZW50ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0XHQvLyBzZW5kIHRoZSBsYXN0IHRhcmdldCAoaWYgZXhpc3RzIGFuZCBpcyBkcm9wcGFibGUpIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgdGFyZ2V0IGFuZCB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcCB6b25lXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gbmV3VGFyZ2V0O1xyXG5cdFx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gaXNOZXdUYXJnZXREcm9wcGFibGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvdXIgbmV3IHRhcmdldCBpcyBkcm9wcGFiYWxlLCBzZW5kIGRyYWdvdmVyIHRvIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgZG9udCBoYXZlIG5ldyB0YXJnZXQgYnV0IGhhdmUgbGFzdCBvbmUgdGFyZ2V0LCBzZW5kIGRyYWdsZWF2ZSB0byB0aGUgbGFzdCBvbmVcclxuXHRcdFx0Ly8gKGlmIHRoZSBsYXN0IHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHQvLyBtb3ZlIHRoZSBkcmFnIGltYWdlIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgXCJweFwiO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyBcInB4XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUubGVmdCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKyAxMiArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLnRvcCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyAwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGxhc3QgbW91c2UgZXZlbnQgLSB3ZSBtYXkgdXNlIGl0IHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cyBpZiB3ZSBuZWVkIHRvXHJcblx0XHQvLyBkaXNwYXRjaCBkcmFnIGV2ZW50cyB1cG9uIGtleWJvYXJkIGV2ZW50cyAoZS5nLiBjYW5jZWwgb3BlcmF0aW9uIHdoZW4gRXNjYXBlIGlzIHByZXNzZWRcclxuXHRcdC8vIG9yIGRyYWdvdmVyIGV2ZW50IGlmIEN0cmwsIEFsdCBvciBTaGlmdCBidXR0b25zIGFyZSBwcmVzc2VkKS5cclxuXHRcdHRoaXMubGFzdE1vdXNlRXZlbnQgPSBlO1xyXG59O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgZHVyaW5nIGRyYWcgb3BlcmF0aW9uIGJ5IHNlbmRpbmcgZHJhZ292ZXIgZXZlbnQuXHJcblx0cHJpdmF0ZSBoYW5kbGVLZXlFdmVudChlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblxyXG5cdFx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdcIikpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEVmZmVjdEVsbSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0XHR0aGlzLnNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFRha2VzIHRoZSBpbWFnZSBlbGVtZW50IChpZiBhbnkpIHNwZWNpZmllZCB2aWEgdGhlIGNhbGwgdG8gc2V0RHJhZ0ltYWdlIGFuZCBjbG9uZXMgaXQgaW50b1xyXG5cdC8vIGEgc3BlY2lhbCBkaXYgdGhhdCB3aWxsIGJlIHNob3duIGR1cmluZyB0aGUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIHByZXBhcmVJbWFnZUVsZW1lbnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcHJldmlvdXMgaW1hZ2UgZWxlbWVudCwgcmVtb3ZlIGl0IG5vd1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0ucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0gPT0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvcmdFbG06IEVsZW1lbnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG07XHJcblx0XHRpZiAoIW9yZ0VsbSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50LCB3aGljaCB3aWxsIHdyYXAgdGhlIGltYWdlIGVsZW1lbnQgYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcblx0XHQvLyBkb2N1bWVudCBib2R5IHdpdGggYWJzb2x1dGUgcG9zaXRpb25pbmcgYW5kIHNvbWUgb3BhY2l0eVxyXG5cdFx0bGV0IGRpdkVsbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHJcblx0XHQvLyBjbG9uZSB0aGUgb3JpZ2luYWwgZWxlbWVudCBiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBtb3ZlIGl0IGFyb3VuZC5cclxuXHRcdGxldCBjbG9uZWRFbG06IEVsZW1lbnQgPSBvcmdFbG0uY2xvbmVOb2RlKCkgYXMgRWxlbWVudDtcclxuXHJcblx0XHQvLyBpZiB0aGUgaW1hZ2UgZWxlbWVudCBzZXQgdmlhIHNldERyYWdJbWFnZSBpcyBhbiBTVkcgZWxlbWVudCBidXQgbm90IHRoZSA8c3ZnPiBlbGVtZW50XHJcblx0XHQvLyBpdHNlbGYsIHRoZW4gd3JhcCBpdCBpbiBhbiA8c3ZnPiBlbGVtZW50LlxyXG5cdFx0aWYgKG1pbS5pc1N2Zyggb3JnRWxtKSAmJiAhbWltLmlzU3ZnU3ZnKCBvcmdFbG0pKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ZnRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cdFx0XHRzdmdFbG0uYXBwZW5kQ2hpbGQoIGNsb25lZEVsbSk7XHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggc3ZnRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cclxuXHRcdC8vIHN0eWxlIHRoZSBkaXYgZWxlbWVudCB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGRpdkVsbS5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcclxuXHRcdGRpdkVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcblx0XHQvLyBhZGQgYSBzcGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgXCJkcm9wRWZmZWN0XCIgaW1hZ2VcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiKTtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggdGhpcy5kcm9wRWZmZWN0RWxtKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkaXZFbG0pO1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGRpdkVsbTtcclxuXHJcblx0XHQvLyBjb21wYXJlIHRoZSBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgYW5kIHRoZSB3cmFwcGluZyBkaXZcclxuXHRcdC8vIGVsZW1lbnQuIFRoZWlyIHRvcC1sZWZ0IGNvb3JkaW5hdGVzIG1heSBub3QgY29pbnNpZGUgZHVlIHRvIHNldmVyYWwgZmFjdG9ycyAoZS5nLlxyXG5cdFx0Ly8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb3IgU1ZHIGNvb3JkaW5hdGVzKS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgYWRqdXN0IHRoZSB4IGFuZCB5XHJcblx0XHQvLyBjb29yZGluYXRlcyBpbiB0aGUgRW11bERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0XHRsZXQgcmNDbG9uZWRFbG06IENsaWVudFJlY3QgPSBjbG9uZWRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNEaXZFbG06IENsaWVudFJlY3QgPSBkaXZFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNDbG9uZWRFbG0ubGVmdCAhPSByY0RpdkVsbS5sZWZ0KVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICs9IHJjQ2xvbmVkRWxtLmxlZnQgLSByY0RpdkVsbS5sZWZ0O1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLnRvcCAhPSByY0RpdkVsbS50b3ApXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKz0gcmNDbG9uZWRFbG0udG9wIC0gcmNEaXZFbG0udG9wO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5IHNtYWxsIGltYWdlIGluZGljYXRpbmcgd2hhdCBkcm9wIGVmZmVjdCBpcyBleHBlY3RlZFxyXG5cdHByaXZhdGUgc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cdFx0bGV0IGNvbG9yOiBzdHJpbmc7XHJcblx0XHRzd2l0Y2goIGRyb3BFZmZlY3QpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgXCJub25lXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1iYW5cIjtcclxuXHRcdFx0XHRjb2xvciA9IFwicmVkXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiY29weVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtcGx1c1wiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImxpbmtcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWxpbmtcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmx1ZVwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIGhhbmRsZURyb3AoIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0byBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvciBiZWNhdXNlIGRyb3AgYWx3YXlzIG9jY3VycyBvbiB0aGUgbGFzdFxyXG5cdFx0Ly8gZm91bmQgdGFyZ2V0IChvciBubyB0YXJnZXQgYXQgYWxsKVxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJvcFwiKSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsICBcImRyYWdlbmRcIikpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VsIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgY2FuY2VsRHJhZ09wZXJhdGlvbiggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IERuRCB3YXMgY2FuY2VsZWRcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ0VuZCBldmVudFxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENsZWFuIHVwIGFmdGVyIGRyYWcgb3BlcmF0aW9uIGZpbmlzaGVzIHdpdGggZWl0aGVyIGRyb3Agb3IgY2FuY2VsYXRpb25cclxuXHRwcml2YXRlIGNsZWFudXBEcmFnT3BlcmF0aW9uKClcclxuXHR7XHJcblx0XHQvLyBkZXN0cm95IHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHJcblx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZT0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gY3JlYXRlcyBEcmFnRXZlbnQgZnJvbSB0aGUgZ2l2ZW4gTW91c2VFdmVudCBhbmQgdGhlIHN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZTogTW91c2VFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLFxyXG5cdFx0XHRcdFx0XHRcdGUuY2xpZW50WCwgZS5jbGllbnRZLCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIGUuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdGUucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogZS5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogZS5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IGUuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiBlLmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiBlLnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogZS5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IGUuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIEtleWJvYXJkRXZlbnQgYW5kIHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0LiBVc2VzIGxhc3QgcmVtZW1iZXJlZFxyXG5cdC8vIG1vdXNlIGV2ZW50IHRvIGZpbGwgY29vcmRpbmF0ZXMgYW5kIGJ1dHRvbiBpbmZvcm1hdGlvbi5cclxuXHRwcml2YXRlIGNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlOiBLZXlib2FyZEV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50XHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgbmV3IERyYWdFdmVudCB5ZXQsIHdoaWxlIENocm9tZSBkb2Vzbid0IHN1cHBvcnQgaW5pdERyYWdFdmVudFxyXG5cdFx0aWYgKFwiaW5pdERyYWdFdmVudFwiIGluIERyYWdFdmVudC5wcm90b3R5cGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRHJhZ0V2ZW50Jyk7XHJcblx0XHRcdChkcmFnRXZlbnQgYXMgYW55KS5pbml0RHJhZ0V2ZW50KCB0eXBlLCBlLmJ1YmJsZXMsIGUuY2FuY2VsYWJsZSwgZS52aWV3LCBlLmRldGFpbCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblgsIHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsIHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WSxcclxuXHRcdFx0XHRcdFx0XHRlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiB0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50IGZvciB0aGUgcHJpbWFyeSBidXR0b24uIFdlIHdpbGwgc3RhcnQgZW11bGF0aW5nIERuRCBpZlxyXG5cdC8vIHRoZSBtb3VzZSBtb3ZlcyBtb3JlIHRoYW4gdHdvIHBpeGVscyBpbiBlaXRoZXIgZGlyZWN0aW9uIHdoaWxlIHRoZSBwcmltYXJ5IGJ1dHRvbiBpcyBzdGlsbFxyXG5cdC8vIGRvd24uXHJcblx0cHJpdmF0ZSBtb3VzZURvd25YOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3VzZURvd25ZOiBudW1iZXI7XHJcblxyXG5cdC8vIFN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCBkdXJpbmcgYSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbi4gSXQgaXMgY3JlYXRlZFxyXG5cdC8vIHdoZW4gRG5EIHN0YXJ0cyBhbmQgaXMgZGVzdHJveWVkIGFmdGVyIGl0IGZpbmlzaGVzLiBQcmVzZW5jZSBvZiB0aGlzIG9iamVjdCBhbHNvIGluZGljYXRlc1xyXG5cdC8vIHRoYXQgdGhlIERuRCBvcGVyc3Rpb24gaXMgaW4gcHJvZ3Jlc3NcclxuXHRwcml2YXRlIGVtdWxEYXRhVHJhbnNmZXI6IElFbXVsRGF0YVRyYW5zZmVyO1xyXG5cclxuXHQvLyBDbG9uZWQgZWxlbWVudCB1c2VkIHRvIGFzIGFuIGltYWdlIGR1cmluZyBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgaW1hZ2VFbG06IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHQvLyBTdWItZWxlbWVudCBvZiB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IHNob3dzIGRyb3AgZWZmZWN0XHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RWxtOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG5cdC8vIFRoZSBsYXN0IGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdHByaXZhdGUgbGFzdFRhcmdldDogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhc3QgdGFyZ2V0IHVuZGVyIHRoZSBjdXJzb3Igd2FzIGEgdmFsaWQgZHJvcCB6b25lLiBUaGlzIGlzXHJcblx0Ly8gbmVlZGVkIHRvIG5vdCBzZW5kIGRyYWdvdmVyIGFuZCBkcmFnbGVhdmUgZXZlbnRzIHRvIG5vbi1kcm9wcGFibGUgdGFyZ2V0cy4gVGhpcyBmbGFnIGlzXHJcblx0Ly8gc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ2VudGVyIGV2ZW50IHNlbnQgdG8gdGhlIHRhcmdldCBoYXMgaXRzIHByZXZlbnREZWZhdWx0IG1ldGhvZFxyXG5cdC8vIGNhbGxlZC4gSWYgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZSwgZHJhZ292ZXIsIGRyYWdsZWF2ZSBhbmQgZHJvcCBldmVudHMgYXJlIG5vdCBzZW50XHJcblx0Ly8gdG8gdGhpcyB0YXJnZXQuXHJcblx0cHJpdmF0ZSBpc0xhc3RUYXJnZXREcm9wcGFibGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBkcm9wIGlzIHBvc3NpYmxlIG9uIHRoZSBsYXN0IHRhcmdldC4gVGhpcyBmbGFnIGlzIG5lZWRlZCBiZWNhdXNlXHJcblx0Ly8gZXZlbiBpZiBhIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSwgbm90IGFsbCBsb2NhdGlvbnMgd2l0aGluIHRoZSB0YXJnZXQgbWlnaHQgYWNjZXB0IHRoZVxyXG5cdC8vIGRyb3AuIFRoaXMgZmxhZyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBkcmFnb3ZlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0c1xyXG5cdC8vIHByZXZlbnREZWZhdWx0IG1ldGhvZCBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyb3AgZXZlbnQgd2lsbCBub3QgYmUgc2VudCB0b1xyXG5cdC8vIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIExhdGVzdCBNb3VzZUV2ZW50IG9iamVjdCwgd2hjaWggd2UgdXNlIHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cy5cclxuXHRwcml2YXRlIGxhc3RNb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtEcmFnRHJvcEVmZmVjdCwgRHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnVGFyZ2V0UHJvcFR5cGUsIElEcmFnVGFyZ2V0LCBJU2ltcGxlRHJhZ1RhcmdldCwgSURyYWdUYXJnZXRFdmVudH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGF9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEV2ZW50IGltcGxlbWVudHMgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIHRoaXMuZHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciwgdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZGF0YTogYW55ID0gRHJhZ0FuZERyb3BEYXRhLmdldE9iamVjdERhdGEoIHR5cGUpO1xyXG5cdFx0cmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEgOiB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuXHRcdHJldHVybiBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXVxyXG5cdHtcclxuXHRcdGxldCBpdGVtcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0bGV0IGVudHJpZXM6IGFueVtdID0gW107XHJcblx0XHRpZiAoaXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRlbnRyaWVzLnB1c2goIGl0ZW1zW2ldLndlYmtpdEdldEFzRW50cnkoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVudHJpZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0SGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3AgdGFyZ2V0IGZ1bmN0aW9uYWxpdHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1RhcmdldEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdUYXJnZXQ6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoKGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQpLm9uRHJvcCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElEcmFnVGFyZ2V0O1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdUYXJnZXQgYXMgSVNpbXBsZURyYWdUYXJnZXQpLm9uRGF0YURyb3BwZWQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gbmV3IERyYWdUYXJnZXRFdmVudCgpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID0gMDtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMub25EcmFnTGVhdmUpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcm9wXCIsIHRoaXMub25Ecm9wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0VudGVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnRW50ZXIgY2FsbGJhY2sgb25seSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBkcmFnZW50ZXJcclxuXHRcdC8vIGV2ZW50IGlzIGZpcmVkIG9uIG91ciBlbGVtZW50IG9yIG9uIG9uZSBvZiBjaGlsZCBub24tZHJhZy10YXJnZXQgZWxlbWVudHMuXHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyKysgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGlmIElEcmFnVGFyZ2V0LnR5cGVzIHByb3BlcnR5IGlzIGRlZmluZWQgYW5kIGlzIG5vdCBlbXB0eSwgZHJhZyB3aWxsIGJlIHBvc3NpYmxlXHJcblx0XHQvLyBvbmx5IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaGFzIGF0IGxlYXN0IG9uIHR5cGUgZnJvbSB0aGUgdHlwZXMgYXJyYXkuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0IT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKERyYWdBbmREcm9wRGF0YS5oYXNUeXBlKCBlLmRhdGFUcmFuc2ZlciwgdHlwZSkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIG5vIHN1aXRhYmxlIHR5cGUgZm91bmQsIHdlIGRvbid0IGNhbGwgZS5wcmV2ZW50RGVmYXVsdCwgd2hpY2ggZGlzYWxsb3dzIGRyb3BcclxuXHRcdFx0aWYgKCF0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb25EcmFnRW50ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhcHBseSB2aXN1YWwgZmVlZGJhY2sgaWYgc3BlY2lmaWVkXHJcblx0XHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjayAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFsdGhvdWdoIHN0eWxlIHByb3BlcnR5IGV4aXN0cyBpbiBib3RoIEhUTUxFbGVtZW50IGFuZCBTVkdFbGVtZW50LCBpdCBpcyBkZWZpbmVkIG9uIGFcclxuXHRcdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0XHQvLyBzYXZlIGN1cnJlbnQgdmFsdWVzIG9mIHN0eWxlIHByb3BlcnRpZXMgc3BlY2lmaWVkIGluIGZlZWRiYWNrIGFuZCBzZXQgdGhlIHN0eWxlIGZyb21cclxuXHRcdFx0XHRcdC8vIHRoZSBmZWVkYmFja1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0ge307XHJcblx0XHRcdFx0XHRmb3IoIGxldCBwcm9wIGluIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjaylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlW3Byb3BdID0gZWxtU3R5bGVbcHJvcF07XHJcblx0XHRcdFx0XHRcdGVsbVN0eWxlW3Byb3BdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrW3Byb3BdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdPdmVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCBpc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gdGhlIGRyYWcgdGFyZ2V0LCB3ZSBjb25zaWRlciBkcm9wIHBvc3NpYmxlXHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2FsbCB0aGUgb25EcmFnT3ZlciBtZXRob2QgYW5kIGNvbnNpZGVyIGRyb3AgcG9zc2libGUgb25seSBpZiBpdCByZXR1cm5zIHRydWVcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0Ryb3BQb3NzaWJsZSlcclxuXHRcdHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgd2UgbmVlZCB0byBzZXQgZHJvcCBlZmZlY3RcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdMZWF2ZSA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHQvLyB3ZSB3aWxsIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGNhbGxiYWNrIG9ubHkgaWYgdGhlIG1vdXNlIGNvbXBsZXRlbHkgbGVhdmVzIG91ciBlbGVtZW50LFxyXG5cdFx0Ly8gd2hpY2ggbWVhbnMgb3VyIGNvdW50ZXIgcmVhY2hlcyAwLlxyXG5cdFx0aWYgKC0tdGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID4gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmV2ZXJ0IHZpc3VhbCBmZWVkYmFjayAoaWYgd2FzIHNwZWNpZmllZClcclxuXHRcdFx0aWYgKHRoaXMuc2F2ZWRTdHlsZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRsZXQgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAodGhpcy5lbG0gYXMgYW55IGFzIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkuc3R5bGU7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zYXZlZFN0eWxlKVxyXG5cdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNhdmVkU3R5bGVbcHJvcF07XHJcblxyXG5cdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Ecm9wID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IGV4cGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmRhdGFUeXBlcztcclxuXHRcdFx0bGV0IGRhdGFPYmogPSB7fTtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiBlLmRhdGFUcmFuc2Zlci50eXBlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgc29tZSBleHBlY3RlZCB0eXBlcyBkZWZpbmVkIHNraXAgdGhlIGN1cnJlbnQgdHlwZSBpZiBpdCBpcyBubyBvbmVcclxuXHRcdFx0XHQvLyBvZiB0aGUgZXhwZWN0ZWRcclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWRUeXBlcyAmJiBleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDAgJiYgZXhwZWN0ZWRUeXBlcy5pbmRleE9mKCB0eXBlKSA8IDApXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGRhdGEgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRkYXRhT2JqW3R5cGVdID0gZGF0YTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5vbkRhdGFEcm9wcGVkKCBkYXRhT2JqKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQub25Ecm9wKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vLyBpZiB0aGUgdGFyZ2V0IGltcGxlbWVudHMgb25EcmFnTGVhdmUsIGNhbGwgaXQgbm93IHRvIGFsbG93IGl0IHRvIGNsZWFudXBcclxuXHRcdC8vaWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0Ly97XHJcblx0XHQvL1x0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdC8vfVxyXG5cclxuXHRcdC8vIGNsZWFyIG91ciBkcmFnRW50ZXJDb3VudGVyXHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBkZWZhdWx0IGRyb3AgZWZmZWN0IGFjY29yZGluZyB0byB0aGUgYWxsb3dlZCBlZmZlY3RzIGFuZCBrZXlzIHByZXNzZWRcclxuXHRwcml2YXRlIGdldERlZmF1bHREcm9wRWZmZWN0KGU6IERyYWdFdmVudCk6IERyYWdEcm9wRWZmZWN0XHJcblx0e1xyXG5cdFx0bGV0IGFsbG93ZWRFZmZlY3RzID0gZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBhcyBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcblx0XHRzd2l0Y2goIGFsbG93ZWRFZmZlY3RzKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5OlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Nb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblxyXG5cdFx0XHRkZWZhdWx0OiBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRyb3AgZWZmZWN0IGlzIGFtb25nIHRoZSBhbGxvd2VkIGVmZmVjdHNcclxuXHRwcml2YXRlIGlzRHJvcEVmZmVjdEFsbG93ZWQoIGRyb3BFZmZlY3Q6IERyYWdEcm9wRWZmZWN0LCBhbGxvd2VkRWZmZWN0czogRHJhZ0FsbG93ZWRFZmZlY3RzKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rIHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCAhPT0gRHJhZ0Ryb3BFZmZlY3QuTm9uZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBkcmFnVGFyZ2V0OiBJRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gSURyYWdUYXJnZXQgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHRhcmdldC5cclxuXHRwdWJsaWMgc2ltcGxlRHJhZ1RhcmdldDogSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cdC8vIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJldXNlZCB3aGVuIHNlbmRpbmcgZXZlbnRzIHRvIGEgZHJhZyB0YXJnZXQgZWxlbWVudC5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFdmVudDogRHJhZ1RhcmdldEV2ZW50O1xyXG5cclxuXHQvLyBBIGRyYWcgdGFyZ2V0IGVsZW1lbnQgY2FuIGhhdmUgY2hpbGRyZW4gd2hvIGFyZSBub3QgZHJhZyB0YXJnZXRzIGJ5IHRoZW1zZWx2ZXMuIEluIHRoaXNcclxuXHQvLyBjYXNlLCB3aGVuIHRoZSBtb3VzZSBnb2VzIGZyb20gb3VyIGVsZW1lbnQgdG8gYSBjaGlsZCBlbGVtZW50LCB3ZSB3aWxsIHJlY2VpdmUgZHJhZ2VudGVyXHJcblx0Ly8gZXZlbnQgb24gdGhlIGNoaWxkIGVsZW1lbnQgYW5kIGRyYWdsZWF2ZSBvbiBvdXJzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCB0aGlzIHRocm91Z2hcclxuXHQvLyBvdXIgY3VzdG9tIGV2ZW50cyBiZWNhdXNlIGZyb20gdGhlIGNsbGVyJ3MgcG9pbnQgb2YgdmlldyB0aGUgbXVzZSBpcyBzdGlsbCB3aXRoaW4gdGhlXHJcblx0Ly8gYm91bmRzIG9mIG91ciBlbGVtZW50LiBUaGVyZWZvcmUsIHdlIGtlZXAgdGhlIGNvdW50ZXIgdmFyaWFibGUsIHdoaWNoIGlzIHNldCB0byAxXHJcblx0Ly8gd2hlbiB0aGUgZmlyc3QgZHJhZ2VudGVyIGV2ZW50IChmcm9tIG91ciBlbGVtZW50IG9yIGZyb20gYSBjaGlsZCkgaXMgcmVwb3J0ZWQuIE9uIGVhY2hcclxuXHQvLyBzdWJzZXF1ZW50IGRyYWdlbnRlciBhbmQgZHJhZ2xlYXZlIGl0IHdpbGwgYmUgaW5jcmVtZW50ZWQgYW5kIGRlY3JlbWVudGVkIHJlc3BlY3RpdmVseS5cclxuXHQvLyBXaGVuIHRoaXMgY291bnRlciByZWFjaGVzIHplcm8sIHdlIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGhhbmRsZXIuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0RW50ZXJDb3VudGVyOiBudW1iZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGluIHRoZSBmaXJzdCBjYWxsIHRvIHRoZSBvbkRyYWdFbnRlciB3ZSBkZXRlcm1pbmVkIHRoYXQgZHJvcFxyXG5cdC8vIHdhcyBwb3NzaWJsZS5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBTZXQgb2Ygc3R5bGVzIHNhdmVkIGJlZm9yZSBhcHBseWluZyBmZWVkYmFjayBzdHlsZXMgZHVyaW5nIGRyYWdlbnRlciBldmVudC4gV2Ugd2lsbCB1c2VcclxuXHQvLyB0aGVzZSBzdHlsZXMgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgZHVyaW5nIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0cHJpdmF0ZSBzYXZlZFN0eWxlOiBTdHlsZXNldDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jbFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZG5kL0RyYWdEcm9wQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL1BvcHVwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL0RpYWxvZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9Nc2dCb3hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVyL1JvdXRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmVlL1RyZWVBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9TY3JvbGxBeGlzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpcnQvVlRhYmxlXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzfSBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BJbXBsXCI7XHJcbnJlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzKCk7XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9Qb3B1cFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGlhbG9nIGNsYXNzIGlzIGEgcG9wdXAgd2l0aCB0aHJlZSBkaXN0aW5jdCBhcmVhczogY2FwdGlvbiwgbWFpbiBjb250ZW50IGFuZCBidXR0b25zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIFBvcHVwXHJcbntcclxuXHQvLyBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyBTbGljZSBmb3IgdGhlIHRocmVlIGRpYWxvZyBhcmVhczogY2FwdGlvbiwgbWFpbiBjb250ZW50IGFuZCBidXR0b25zLlxyXG5cdC8vIFRoZXkgY2FuIGJlIGxlZnQgdW5kZWZpbmVkIGlmIGEgZGVyaXZlZCBjbGFzcyBvdmVycmlkZXMgdGhlIGFwcHJvcHJpYXRlIHJlbmRlciBtZXRob2RzLlxyXG5cdGNvbnN0cnVjdG9yKCBjYXB0aW9uQXJlYVNsaWNlPzogbWltLlNsaWNlLCBtYWluQXJlYVNsaWNlPzogbWltLlNsaWNlLCBidXR0b25BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIGRsZ1NsaWNlPzogbWltLlNsaWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKGRsZ1NsaWNlKTtcclxuXHJcblx0XHR0aGlzLmNhcHRpb25BcmVhU2xpY2UgPSBjYXB0aW9uQXJlYVNsaWNlID8gY2FwdGlvbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5tYWluQXJlYVNsaWNlID0gbWFpbkFyZWFTbGljZSA/IG1haW5BcmVhU2xpY2UgOiB7fTtcclxuXHRcdHRoaXMuYnV0dG9uQXJlYVNsaWNlID0gYnV0dG9uQXJlYVNsaWNlID8gYnV0dG9uQXJlYVNsaWNlIDoge307XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGRlZmF1bHQgcGFyYW1ldGVycyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGEgRGlhbG9nIGlzIGNyZWF0ZWRcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7YmFja2dyb3VuZDpcInBpbmtcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwiLCBjdXJzb3I6XCJkZWZhdWx0XCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlID0geyBzdHlsZToge3BhZGRpbmc6XCIwLjVlbSAxZW1cIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlID0geyBzdHlsZToge2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlID0geyBzdHlsZToge21hcmdpbkxlZnQ6XCIwLjVlbVwiLCBtaW5XaWR0aDpcIjVlbVwifSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbiB3aXRoIHRoZSBnaXZlbiBjaGFyYWN0ZXJpc3RpY3MuIFRoZSBrZXkgcGFyYW1ldGVyIGluZGljYXRlcyB0aGUgdmFsdWUgdGhhdCBpc1xyXG5cdC8vIHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFRoZSBvcHRpb25hbCBpbmRleCBwYXJhbWV0ZXIgc3BlY2lmaWVzXHJcblx0Ly8gdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBidXR0b24gc2hvdWxkIGJlIGFkZGVkLlxyXG5cdHB1YmxpYyBhZGRCdXR0b24oIHNsaWNlOiBtaW0uU2xpY2UsIGtleT86IGFueSwgY2FsbGJhY2s/OiAoa2V5OiBhbnkpID0+IHZvaWQsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBEbGdCdG5JbmZvID0geyBzbGljZSwga2V5LCBjYWxsYmFjaywgcmVmOiBuZXcgbWltLlJlZjxIVE1MQnV0dG9uRWxlbWVudD4oKSB9O1xyXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3MucHVzaCggaW5mbyk7XHJcblx0XHRlbHNlIGlmIChpbmRleCA9PT0gMClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy51bnNoaWZ0KCBpbmZvKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4IC0gMSwgMCwgaW5mbyk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSggdGhpcy5yZW5kZXJCdXR0b25BcmVhKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYnV0dG9uIGF0IHRoZSBnaXZlbiBpbmRleC5cclxuXHRwdWJsaWMgcmVtb3ZlQnV0dG9uKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYnV0dG9uSW5mb3Muc3BsaWNlKCBpbmRleCwgMSk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSggdGhpcy5yZW5kZXJCdXR0b25BcmVhKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJDYXB0aW9uQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlLCB0aGlzLmdldENhcHRpb25BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0NhcHRpb25cIiBtb3VzZWRvd249e3RoaXMub25TdGFydE1vdmV9IHN0eWxlPXtjYXB0aW9uQXJlYVNsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzcz17Y2FwdGlvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5jYXB0aW9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e2NhcHRpb25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJNYWluQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IG1haW5BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlLCB0aGlzLmdldE1haW5BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ01haW5Db250ZW50XCIgc3R5bGU9e21haW5BcmVhU2xpY2Uuc3R5bGV9IGNsYXNzPXttYWluQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLm1haW5BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7bWFpbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckJ1dHRvbkFyZWEoKVxyXG5cdHtcclxuXHRcdGxldCBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UsIHRoaXMuZ2V0QnV0dG9uQXJlYVNsaWNlKCkpO1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdCdXR0b25zXCIgc3R5bGU9e2J1dHRvbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e2J1dHRvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5idXR0b25BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7YnV0dG9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdHt0aGlzLmJ1dHRvbkluZm9zLm1hcCggKGluZm8pID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGJ0blNsaWNlOiBtaW0uU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UsIGluZm8uc2xpY2UpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpbmZvLmtleX0gY2xpY2s9e2luZm8uY2FsbGJhY2sgJiYgKCgpID0+IGluZm8uY2FsbGJhY2soaW5mby5rZXkpKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17YnRuU2xpY2Uuc3R5bGV9IGNsYXNzPXtidG5TbGljZS5jbGFzc05hbWV9IHsuLi5idG5TbGljZS5wcm9wc30+XHJcblx0XHRcdFx0XHRcdHtidG5TbGljZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyQ2FwdGlvbkFyZWF9XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWFpbkFyZWF9XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyQnV0dG9uQXJlYX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGNhcHRpb24uXHJcblx0cHJvdGVjdGVkIGdldENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FwdGlvbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIG1haW4gY29udGVudCBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm1haW5BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBidXR0b24gYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0QnV0dG9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmJ1dHRvbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgcHV0cyBtb3VzZSBkb3duIGluIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIG9uU3RhcnRNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zdGFydE1vdmUoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBjYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IENhcHRpb25BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMuY2FwdGlvbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1haW5BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgTWFpbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5tYWluQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIGJ1dHRvbnMgYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBCdXR0b25BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBCdXR0b25BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMuYnV0dG9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIEFycmF5IG9mIGJ1dHRvbnMgYWRkZWQgdG8gdGhlIGRpYWxvZ1xyXG5cdHByaXZhdGUgYnV0dG9uSW5mb3M6IERsZ0J0bkluZm9bXSA9IFtdO1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgYnV0dG9uIGFyZWFcclxuXHRwcml2YXRlIGJ1dHRvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRDYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgbWFpbiBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0TWFpbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGJ1dHRvbnMgYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGEgYnV0dG9uIGVsZW1lbnRcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRCdXR0b25TbGljZTogbWltLlNsaWNlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERsZ0J0bkluZm8gY2xhc3MgaXMgYSBoZWxwZXIgY2xhc3MgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIGJ1dHRvbiBhZGRlZCB0byB0aGUgZGlhbG9nLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBEbGdCdG5JbmZvID1cclxue1xyXG5cdHNsaWNlOiBtaW0uU2xpY2UsXHJcblx0a2V5OiBhbnksXHJcblx0Y2FsbGJhY2s6IChrZXk6IGFueSkgPT4gdm9pZCxcclxuXHRyZWY6IG1pbS5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZ0J1dHRvbiBlbnVtZXJhdGlvbiBkZWZpbmVzIGNvbnN0YW50cyB0byBpbmRpY2F0ZSBzdGFuZGFyZCBidXR0b25zIHVzZWQgaW4gZGlhbG9ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIERpYWxvZ0J1dHRvblxyXG57XHJcblx0Tm9uZSA9IDB4MCxcclxuXHRPSyA9IDB4MSxcclxuXHRDYW5jZWwgPSAweDIsXHJcblx0WWVzID0gMHg0LFxyXG5cdE5vID0gMHg4LFxyXG5cdENsb3NlID0gMHgxMCxcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7RGlhbG9nLCBEaWFsb2dCdXR0b259IGZyb20gXCIuL0RpYWxvZ1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94IGNsYXNzIGlzIGEgZGlhbG9nIHRoYXQgZGlzcGxheXMgYSBtZXNzYWdlIHdpdGggYSBzZXQgb2YgcHJlLWRlZmluZWQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNc2dCb3ggZXh0ZW5kcyBEaWFsb2dcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2hvd01vZGFsKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpOiBQcm9taXNlPE1zZ0JveEJ1dHRvbnM+XHJcblx0e1xyXG5cdFx0bGV0IG1zZ0JveDogTXNnQm94ID0gbmV3IE1zZ0JveCggbWVzc2FnZSwgdGl0bGUsIGJ1dHRvbnMsIGljb24pO1xyXG5cdFx0cmV0dXJuIG1zZ0JveC5zaG93TW9kYWwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0XHR0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG5cdFx0dGhpcy5pY29uID0gaWNvbjtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGNhcHRpb24uXHJcblx0cHJvdGVjdGVkIGdldENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHsgY29udGVudDogdGhpcy50aXRsZSwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcImRvZGdlcmJsdWVcIiB9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0TWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRsZXQgeyBjbHMsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJzdGFydFwifX0+XHJcblx0XHRcdFx0e2NscyAmJiA8aSBjbGFzcz17XCJmYSBmYS0zeCBcIiArIGNsc30gc3R5bGU9e3sgY29sb3I6IGNvbG9yfX0vPn1cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIiwgbWluV2lkdGg6XCIxNWVtXCIsIG1heFdpZHRoOlwiNDBlbVwiLCBtaW5IZWlnaHQ6IFwiMmVtXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6XCIyMGVtXCIsIG92ZXJmbG93OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHR7dGhpcy5tZXNzYWdlfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5idXR0b25zKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuQ2xvc2U6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2xvc2VcIiwgRGlhbG9nQnV0dG9uLkNsb3NlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5PSzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9rQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBnZXRJY29uQ2xhc3NBbmRDb2xvcigpOiB7IGNsczogc3RyaW5nLCBjb2xvcjogQ3NzQ29sb3IgfVxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uSW5mbzogcmV0dXJuIHsgY2xzOiBcImZhLWluZm8tY2lyY2xlXCIsIGNvbG9yOiBcImJsdWVcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uV2FybmluZzogcmV0dXJuIHsgY2xzOiBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5FcnJvcjogcmV0dXJuIHsgY2xzOiBcImZhLW1pbnVzLWNpcmNsZVwiLCBjb2xvcjogXCJyZWRcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uUXVlc3Rpb246IHJldHVybiB7IGNsczogXCJmYS1xdWVzdGlvbi1jaXJjbGVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIHsgY2xzOiBcIlwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b24oIHRleHQ6IHN0cmluZywga2V5OiBEaWFsb2dCdXR0b24pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hZGRCdXR0b24oIHtjb250ZW50OiB0ZXh0fSwga2V5LCB0aGlzLm9uQnV0dG9uQ2xpY2tlZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25CdXR0b25DbGlja2VkID0gKCBrZXk6IGFueSk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLmNsb3NlKCBrZXkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuXHQvLyBUaXRsZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgdGl0bGU6IHN0cmluZztcclxuXHJcblx0Ly8gQnV0dG9uc1xyXG5cdHByaXZhdGUgYnV0dG9uczogTXNnQm94QnV0dG9ucztcclxuXHJcblx0Ly8gSWNvblxyXG5cdHByaXZhdGUgaWNvbjogTXNnQm94SWNvbjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGJ1dHRvbnMgYW5kIGJ1dHRvbiBjb21iaW5hdGlvbnMgZm9yXHJcbiAqIG1lc3NhZ2UgYm94ZXMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBNc2dCb3hCdXR0b25zXHJcbntcclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBkaXNwbGF5IG5vIGJ1dHRvbnMgKi9cclxuXHROb25lID0gMCxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBDbG9zZSBidXR0b24gKi9cclxuXHRDbG9zZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBPSyBidXR0b24gKi9cclxuXHRPSyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBPSyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRPa0NhbmNlbCxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBZZXMgYW5kIE5vIGJ1dHRvbnMgKi9cclxuXHRZZXNObyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBZZXMsIE5vIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdFllc05vQ2FuY2VsLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94SWNvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgaWNvbnMgZm9yIG1lc3NhZ2UgYm94LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGVudW0gTXNnQm94SWNvblxyXG57XHJcblx0Tm9uZSA9IDAsXHJcblx0SW5mbyxcclxuXHRXYXJuaW5nLFxyXG5cdEVycm9yLFxyXG5cdFF1ZXN0aW9uLFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQb3B1cCBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG1vZGVsZXNzIGFuZCBtb2RhbCBwb3B1cHMuIEl0IHByb3ZpZGVzIHRoZSBiYXNpYyBtZWNoYW5pY3NcclxuLy8gZm9yIHNob3dpbmcgYW5kIGNsb3NpbmcgdGhlIHBvcHVwcyBpbmNsdWRpbmcgbW92aW5nIGl0IHdpdGggdGhlIG1vdXNlLiBUaGUgY29udGVudCBvZiB0aGVcclxuLy8gcG9wdXAgaXMgZWl0aGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3R1Y3RvciBvciBpcyBwcm92aWRlZCBieSBkZXJpdmVkIGNsYXNzZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHQvLyBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyB0aGUgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHN0eWxlcyBhbmQgY29udGVudCB0aGF0IHNob3VsZCBiZVxyXG5cdC8vIGRpc3BsYXllZCB3aXRoaW4gdGhlIHBvcHVwLiBJdCBjYW4gYmUgbGVmdCB1bmRlZmluZWQgaWYgYSBkZXJpdmVkIGNsYXNzIG92ZXJyaWRlcyB0aGVcclxuXHQvLyBnZXREbGdTbGljZSBtZXRob2QuXHJcblx0Y29uc3RydWN0b3IoIGRsZ1NsaWNlPzogbWltLlNsaWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmRsZ1NsaWNlID0gZGxnU2xpY2UgPyBkbGdTbGljZSA6IHt9O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkZWZhdWx0IHBhcmFtZXRlcnMgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhIFBvcHVwIGlzIGNyZWF0ZWRcclxuXHRcdGlmICghUG9wdXAuRGVmYXVsdERsZ1NsaWNlKVxyXG5cdFx0XHRQb3B1cC5EZWZhdWx0RGxnU2xpY2UgPSB7IHN0eWxlOiB7IGJvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlcldpZHRoOiAxLCBwYWRkaW5nOiBcIjBcIn0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3BlbnMgdGhlIGRpYWxvZyBhcyBhIG1vZGVsZXNzIHBvcHVwLiBJdCBzaG91bGQgYmUgY2xvc2VkIHdpdGggdGhlIENsb3NlIG1ldGhvZC5cclxuXHRwdWJsaWMgb3BlbiggeD86IG51bWJlciwgeT86IG51bWJlcik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc09wZW4oKSlcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlKCB4LCB5KTtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLnNob3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xvc2VzIHRoZSBkaWFsb2cgb3BlbmVkIGFzIGEgbW9kZWxlc3MgcG9wdXAuIFRoaXMgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIHRvIGNsb3NlIGEgbW9kYWxcclxuXHQvLyBkaWFsb2cuXHJcblx0cHVibGljIGNsb3NlKCByZXRWYWw/OiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuY2xvc2UoKTtcclxuXHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMoIHJldFZhbCk7XHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIGEgbW9kYWwgZGlhbG9nLiBUaGUgZGlhbG9nIGlzIGNsb3NlZCB3aXRoIHRoZSBDbG9zZU1vZGFsIG1ldGhvZCBhbmQgdGhlIHBhcmFtZXRlclxyXG5cdC8vIHBhc3NlZCB0byB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgaXMgcmV0dXJuZWQgYXMgYSByZXNvbHZlZCBwcm9taXNlLlxyXG5cdHB1YmxpYyBzaG93TW9kYWwoIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBQcm9taXNlPGFueT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc09wZW4oKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCBcIkRpYWxvZyBpcyBhbHJlYWR5IG9wZW5cIik7XHJcblxyXG5cdFx0bGV0IHByb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlPGFueT4oIChyZXNvbHZlKSA9PiB7dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9IHJlc29sdmV9KTtcclxuXHRcdHRoaXMuY3JlYXRlKCB4LCB5KTtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLnNob3dNb2RhbCgpO1xyXG5cdFx0cmV0dXJuIHByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuLlxyXG5cdHB1YmxpYyBpc09wZW4oKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRsZyAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3BlbiBhcyBtb2RlbGVzcy5cclxuXHRwdWJsaWMgaXNNb2RlbGVzcygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNPcGVuKCkgJiYgdGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9PT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3BlbiBhcyBtb2RhbC5cclxuXHRwdWJsaWMgaXNNb2RhbCgpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNPcGVuKCkgJiYgdGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdGFydHMgbW9uaXRvcmluZyBtb3VzZSBtb3ZlbWVudHMgYW5kIG1vdmVzIHRoZSBkaWFsb2cgd2l0aCB0aGUgbW91c2UuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gaW50ZW50ZWQgdG8gYmUgY2FsbGVkIGZyb20gYSBtb3VzZWRvd24gZXZlbnQgc29tZXdoZXJlIHdpdGhpbiB0aGUgcG9wdXAuXHJcblx0cHVibGljIHN0YXJ0TW92ZSggZTogTW91c2VFdmVudClcclxuXHR7XHJcblx0XHQvLyB3ZSBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIGFuZCBwcm9wYWdhdGlvbiBzbyB0aGF0IG1vdXNlIG1vdmVtZW50cyBkb24ndCBjYXVzZVxyXG5cdFx0Ly8gdGVzdCBpbiB0aGUgcG9wdXAgYW5kIG9uIHRoZSBwYWdlIHRvIGJlIHNlbGVjdGVkLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRsZXQgcmVjdCA9IHRoaXMuZGxnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dGhpcy5kcmFnUG9pbnRPZmZzZXRYID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5kcmFnUG9pbnRPZmZzZXRZID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZSBhbmQgYWxzbyByZW1lbWJlciB0aGVtIGluIG91ciBTbGljZSBzbyB0aGF0IHRoZXkgY2FuIGJlIHNwZWNpZmllZFxyXG5cdFx0Ly8gYXMgcHJvcGVydGllcyBpZiB0aGUgY29tcG9uZW50IGlzIHJlcmVuZGVyZWRcclxuXHRcdHRoaXMuZGxnLnN0eWxlLm1hcmdpbiA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gcmVjdC50b3A7XHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgKyBcInB4XCI7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuXHQvLyBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG5cdC8vIGFibGUgdG8gY29udGludWUgbW92aW5nIGl0LlxyXG5cdHB1YmxpYyBtb3ZlKCBuZXdYOiBudW1iZXIsIG5ld1k6IG51bWJlcilcclxuXHR7XHJcblx0XHRpZiAobmV3WCA8IDApXHJcblx0XHRcdG5ld1ggPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WCArIDMwID4gd2luZG93LmlubmVyV2lkdGgpXHJcblx0XHRcdG5ld1ggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDMwO1xyXG5cclxuXHRcdGlmIChuZXdZIDwgMClcclxuXHRcdFx0bmV3WSA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdZICsgMzAgPiB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcblx0XHRcdG5ld1kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlIGFuZCBhbHNvIHJlbWVtYmVyIHRoZW0gaW4gb3VyIFNsaWNlIHNvIHRoYXQgdGhleSBjYW4gYmUgc3BlY2lmaWVkXHJcblx0XHQvLyBhcyBwcm9wZXJ0aWVzIGlmIHRoZSBjb21wb25lbnQgaXMgcmVyZW5kZXJlZFxyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCA9IG5ld1g7XHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgPSBuZXdZO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgKyBcInB4XCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS50b3AgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jdXJyRGxnU2xpY2UpXHJcblx0XHR7XHJcblx0XHRcdC8vIGRlZmluZSBwb3NpdGlvbmluZyBzdHlsZXMuIElmIHggYW5kL29yIHkgYXJlIHVuZGVmaW5lZCwgd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5XHJcblx0XHRcdC8vIGFuZC9vciB2ZXJ0aWNhbGx5XHJcblx0XHRcdGxldCBzdHlsZTogU3R5bGVzZXQgPSB7IHBvc2l0aW9uOiBcImZpeGVkXCIgfVxyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsWCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUubGVmdCA9IDA7XHJcblx0XHRcdFx0c3R5bGUucmlnaHQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLmxlZnQgPSB0aGlzLmluaXRpYWxYO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpbkxlZnQgPSBcIjBcIjtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsWSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUudG9wID0gMDtcclxuXHRcdFx0XHRzdHlsZS5ib3R0b20gPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLnRvcCA9IHRoaXMuaW5pdGlhbFk7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luQm90dG9tID0gXCIwXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3VyckRsZ1NsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBQb3B1cC5EZWZhdWx0RGxnU2xpY2UsIHRoaXMuZ2V0RGxnU2xpY2UoKSwge3N0eWxlfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaWFsb2cgcmVmPXtyZWYgPT4gdGhpcy5kbGcgPSByZWZ9IHN0eWxlPXt0aGlzLmN1cnJEbGdTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e3RoaXMuY3VyckRsZ1NsaWNlLmNsYXNzTmFtZX0gey4uLnRoaXMuY3VyckRsZ1NsaWNlLnByb3BzfT5cclxuXHRcdFx0e3RoaXMuY3VyckRsZ1NsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2RpYWxvZz47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFsbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGdTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmVuZGVycyB0aGUgcG9wdXAuXHJcblx0cHJpdmF0ZSBjcmVhdGUoIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW5pdGlhbFggPSB4O1xyXG5cdFx0dGhpcy5pbml0aWFsWSA9IHk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgPGRpdj4gZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBlbmQgb2YgPGJvZHk+LiBUaGVuIHJlbmRlciBvdXIgY29tcG9uZW50J3NcclxuXHRcdC8vIGNvbnRlbnQgdW5kZXIgaXQuXHJcblx0XHR0aGlzLmFuY2hvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5hbmNob3JEaXYpO1xyXG5cdFx0bWltLm1vdW50KCB0aGlzLCB0aGlzLmFuY2hvckRpdik7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVuZGVycyBhbmQgZGVzdHJveXMgdGhlIGRpYWxvZy5cclxuXHRwcml2YXRlIGRlc3Ryb3koKTogdm9pZFxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuXHRcdG1pbS51bm1vdW50KCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHR0aGlzLmFuY2hvckRpdi5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGV2ZW50IHRvIHByZXZlbnQgY2xvc2luZyB0aGUgZGlhbG9nIGJ5IEVzYyBrZXkuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpIC8vIEVzY1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHRoaXMubW92ZSggZS5jbGllbnRYIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRYLCBlLmNsaWVudFkgLSB0aGlzLmRyYWdQb2ludE9mZnNldFkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblN0b3BNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHByb3ZpZGVkIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByaXZhdGUgZGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IERsZ1NsaWNlKCk6IGFueSB7IHJldHVybiB0aGlzLkRsZ1NsaWNlOyB9XHJcblxyXG5cdC8vIEN1cnJlbnQgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgdGhhdCBjb21iaW5lIG91ciBkZWZhdWx0cyBwbHVzIHRob3NlIHByb3ZpZGVkXHJcblx0Ly8gZWl0aGVyIGV4dGVybmFseSBvciBieSBkZXJpdmVkIGNsYXNzZXMgcGx1cyB0aG9zZSByZWZsZWN0aW5nIHRoZSBkaWFsb2cgcG9zaXRpb25pbmcuXHJcblx0cHJpdmF0ZSBjdXJyRGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRWxlbWVudCB1bmRlciB3aGljaCB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkLiBUaGlzIGVsZW1lbnQgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlXHJcblx0Ly8gPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQgYW5kIGlzIHJlbW92ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cclxuXHRwcml2YXRlIGFuY2hvckRpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdC8vIEluaXRpYWwgWCBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxYOiBudW1iZXI7XHJcblxyXG5cdC8vIEluaXRpYWwgWSBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxZOiBudW1iZXI7XHJcblxyXG5cdC8vLy8gUmVmZXJlbmNlIHRvIHRoZSA8ZGlhbG9nPiBlbGVtZW50IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkLlxyXG5cdC8vcHJpdmF0ZSBkbGdSZWYgPSBuZXcgbWltLlJlZjxIVE1MRGlhbG9nRWxlbWVudD4oIHJlZiA9PiB0aGlzLmRsZyA9IHJlZik7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHRwcml2YXRlIGRsZzogSFRNTERpYWxvZ0VsZW1lbnQ7XHJcblxyXG5cdC8vIFByb21pc2Ugd2hpY2ggaXMgY3JlYXRlZCBmb3IgbW9kYWwgZGlhbG9nIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBtb2RhbCBkaWFsb2dcclxuXHQvLyBpcyBjbG9zZWQuIFRoZSBwcm9taXNlIGlzIHJldHVybmVkIGZyb20gU2hvd01vZGFsLlxyXG5cdHByaXZhdGUgbW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmM6IChhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpdj4gZWxlbWVudCBjb250YWluaW5nIHRoZSBjYXB0aW9uLlxyXG5cdHByaXZhdGUgY2FwdGlvbiA9IG5ldyBtaW0uUmVmPEhUTUxFbGVtZW50PigpO1xyXG5cclxuXHQvLyBPZmZzZXRzIG9mIHRoZSBwb2ludCB3aGVyZSB0aGUgbW92ZSBzdGFydGVkIGZyb20gdGhlIGRpYWxvZyB0b3AtbGVmdCBjb3JuZXIuIFdlIHVzZSB0aGVtXHJcblx0Ly8gdG8gY2FsY3VsYXRlIHRoZSBkaWFsb2cgdG9wLWxlZnQgcG9zaXRpb24gYmFzZWQgb24gdGhlIG1vdXNlIGNvb3JkaW5hdGVzIHdoaWxlIG1vdmUgaXNcclxuXHQvLyBpbiBwcm9ncmVzcy5cclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFk6IG51bWJlcjtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciA8ZGlhbG9nPiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0RGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIlxyXG5pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJtaW1ibC9saWIvYXBpL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBSb3V0ZXI6IElSb3V0ZXJTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclNlcnZpY2UgaXMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBJdCBhbGxvd3NcclxuICogc3Vic2NyaWJlcnMgdG8gbmF2aWdhdGUgdG8gcGF0aHMgZGVmaW5lZCBieSBSb3V0ZXIncyByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJTZXJ2aWNlXHJcbntcclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBvYmplY3QgY29udGFpbmluZyBmaWVsZCB2YWx1ZXMgdGhhdCBpcyBwYXNzZWQgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgcm91dGUuIFdoZW5cclxuICogbmF2aWdhdGluZyBieSByb3V0ZSBJRCwgdGhlIGZpZWxkcyBhcmUgcGFzc2VkIGV4cGxpY2l0bHkuIFdoZW4gbmF2aWdhdGluZyBieSBVUkwsIHRoZSBmaWVsZHNcclxuICogYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkwgYWNjb3JkaW5nIHRvIHRoZSBVUkwgcGF0dGVybiBpbiB0aGUgcm91dGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZUZpZWxkcyA9IHsgW1A6IHN0cmluZ106IG1pbXVybC5GaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5IGZvciBhIHJvdXRlLiBJdCBjYW4gcmV0dXJuIGEgUHJvbWlzZSBpblxyXG4gKiB3aGljaCBjYXNlIHRoZSBSb3V0ZXIgd2lsbCBkaXNwbGF5IHByb2dyZXNzIFVJIHVudGlsIHRoZSBjb250ZW50IGJlY29tZXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2VG9Sb3V0ZUZ1bmNUeXBlID0gKGZpZWxkczogUm91dGVGaWVsZHMpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gbmF2aWdhdGluZyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHJvdXRlLiBJZiBmYWxzZVxyXG4gKiBpcyByZXR1cm5lZCwgbmF2aWdhdGlvbiBkb2Vzbid0IGhhcHBlbi4gVGhpcyBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlclxyXG4gKiBhYm91dCB1bnNhdmVkIGRhdGEuIElmIFByb21pc2UgaXMgcmV0dXJuZWQsIHRoZSBSb3V0ZXIgd2lsbCB3YWl0IHVudGlsIHRoZSByZXNwb25zZSBpcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZGcm9tUm91dGVGdW5jVHlwZSA9ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlIGludGVyZmFjZSBkZWZpbmVzIGEgbmF2aWdhdGlvbiB0YXJnZXQuIFJvdXRlcyBjYW4gaGF2ZSBzdWItcm91dGVzLCB3aGljaCBjcmVhdGVzIGFcclxuICogaGllcmFyY2h5IG9mIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFVuaXF1ZSAoYnV0IG9wdGlvbmFsKSBJRCB0aGF0IGFsbG93cyBuYXZpZ2F0aW5nIHRvIHRoZSB0YXJnZXQgdXNpbmcgYSBzaW1wbGUgSUQgaW5zdGVhZCBvZlxyXG5cdCAqIHBhdGguIFRoZSBwYXRoIG1lbWJlciB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGFkZHJlc3MgY29udHJvbC5cclxuXHQgKi9cclxuXHRpZD86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogVVJMIHBhdHRlcm4gLSBjYW4gY29udGFpbiBuYW1lZCBwYXJhbWV0ZXJzIChhcyBpbiAvdXNlcnMve3VpZH0pLiBUaGlzIGNhbiBiZSBsZWZ0IGVtcHR5XHJcblx0ICogaWYgb25seSBpZCBpcyB1c2VkXHJcblx0ICovXHJcblx0dXJsUGF0dGVybj86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5LlxyXG5cdCAqL1xyXG5cdG5hdlRvRnVuYz86IE5hdlRvUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyIGFib3V0IHVuc2F2ZWQgZGF0YS5cclxuXHQgKi9cclxuXHRuYXZGcm9tRnVuYz86IE5hdkZyb21Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcmRlcmVkIGxpc3Qgb2YgUm91dGUgb2JqZWN0cywgd2hpY2ggYXJlIHN1Yi1yb3V0ZXMgb2YgdGhpcyByb3V0ZS5cclxuXHQgKi9cclxuXHRzdWJSb3V0ZXM/OiBSb3V0ZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZSBmb3IgSGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uIEl0IHJlbWVtYmVycyB0aGVcclxuICogcGFyYW1ldGVycyBvZiBhIHJvdXRlIHRvIG5hdmlnYXRlIHRvIHdoZW4gdGhlIHVzZXIgZ29lcyBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXInc1xyXG4gKiBoaXN0b3J5LlxyXG4gKi9cclxuY2xhc3MgUm91dGVTdGF0ZVxyXG57XHJcblx0cm91dGVJRDogc3RyaW5nO1xyXG5cdHJvdXRlVVJMOiBzdHJpbmc7XHJcblx0ZmllbGRzOiBSb3V0ZUZpZWxkcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGN1cnJlbnQgcm91dGUuXHJcbiAqIFRoaXMgYWxsb3dzIHRoZSByb3V0ZXIgZG8gaGF2ZSBpdHMgb3duIGNvbnRlbnQgLSB0aGUgc2FtZSBmb3IgYWxsIHJvdXRlcyAtIGFuZCBpbnNlcnQgdGhlXHJcbiAqIGN1cnJlbnQgcm91dGVyJ3MgY29udGVudCBpbnRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAocm91dGVDb250ZW50OiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSBhIHByb2dyZXNzIFVJIHdoaWxlIGl0IGlzIGxvYWRpbmdcclxuICogcm91dGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKCkgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJQcm9wcyBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5IEFQSSB0b1xyXG5cdCAqIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGNvbnRyb2xzQnJvd3Nlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB0aGF0IGlmIHRoaXMgcm91dGVyIGNhbm5vdCByZXNvbHZlIGEgcGF0aCwgaXQgd2lsbCBkZWxlZ2F0ZSB0byBhIHJvdXRlciB1cFxyXG5cdCAqIHRoZSBjb21wb25lbnQgY2hhaW4gKGlmIHRoZXJlIGlzIG9uZSkuXHJcblx0ICovXHJcblx0Y2hhaW5zVG9IaWdoZXJSb3V0ZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuIERlZmF1bHQgdmFsdWUgaXNcclxuXHQgKiB0cnVlLlxyXG5cdCAqL1xyXG5cdGJhc2VVUkw/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZXIgY29tcG9uZW50IHByb3ZpZGVzIGNsaWVudC1zaWRlIHJvdXRpbmcuIEl0IHdvcmtzIHdpdGggUm91dGUgb2JqZWN0cyB0aGF0IGRlZmluZVxyXG4gKiBhdmFpbGFibGUgbmF2aWdhdGlvbiB0YXJnZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlciBleHRlbmRzIG1pbS5Db21wb25lbnQ8SVJvdXRlclByb3BzLFJvdXRlW10+IGltcGxlbWVudHMgSVJvdXRlclNlcnZpY2UsIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogSVJvdXRlclByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCByb3V0ZSBvZiB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGUoIHJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgZ2l2ZW4gcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0LlxyXG5cdCAqIEBwYXJhbSByb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRvIGFkZFxyXG5cdCAqIEBwYXJhbSBpbmRleCBJbmRleCBhdCB3aGljaCB0byBhZGQgdGhlIHJvdXRlIG9iamVjdC4gSWYgdGhlIGluZGV4IGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuXHQgKlx0XHRyb3V0ZSBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LiBJZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGxcclxuXHQgKlx0XHRiZSB0aHJvd24uXHJcblx0ICovXHJcblx0cHVibGljIGFkZFJvdXRlKCByb3V0ZTogUm91dGUsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJSb3V0ZSBvYmplY3QgY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDAsIHJvdXRlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yb3V0ZXMucHVzaCggcm91dGUpO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGFkZCB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgdG8gdGhlIG1hcFxyXG5cdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCByb3V0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QgYW5kIHJldHVybnMgdGhlIFJvdXRlIG9iamVjdC4gSWYgaW5kZXggaXNcclxuXHQgKiBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpbmRleFxyXG5cdCAqIEByZXR1cm4gUm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0aGF0IHdhcyByZW1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVSb3V0ZSggaW5kZXg6IG51bWJlcik6IFJvdXRlXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDEpWzBdO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IHJlbW92ZSB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgZnJvbSB0aGUgbWFwXHJcblx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGUpO1xyXG5cclxuXHRcdHJldHVybiByb3V0ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBtYXAgb2Ygcm91dGVzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSBhZGRSb3V0ZVRvTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuc2V0KCByb3V0ZS5pZCwgcm91dGUpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IGZyb20gdGhlIG1hcCBvZiByb3V0cyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgcmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuZGVsZXRlKCByb3V0ZS5pZCk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogQHBhcmFtIHVybCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gbmF2aWdhdGUgdG9cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBbcm91dGUsIGZpZWxkc10gPSB0aGlzLmZpbmRSb3V0ZUJ5VVJMKCB1cmwpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5VVJMKCB1cmwsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHJvdXRlXHJcblx0ICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgcm91dGUncyBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBSb3V0ZXIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGVcclxuXHQgKlx0XHRicm93c2VyJ3MgaGlzdG9yeS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzQnlJRC5nZXQoIGlkKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeUlEKCBpZCwgZmllbGRzKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgd2UgbWF5IG5lZWQgdG8gc3Vic3RpdHV0ZSBwYXJhbWV0ZXJzIGluIHRoZVxyXG5cdFx0Ly8gcm91dGUncyBVUkwgcGF0dGVyblxyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR1cmwgPSByb3V0ZS51cmxQYXR0ZXJuO1xyXG5cdFx0XHRpZiAodXJsICYmIGZpZWxkcylcclxuXHRcdFx0e1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmRzIGEgcm91dGUgYnkgZ29pbmcgdGhyb3VnaCB0aGUgcm91dGUgaGllcmFyY2h5IGFuZCB0cnlpbmcgdG8gbWF0Y2ggdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBJZiB0aGUgcm91dGUgaXMgZm91bmQsIHRoZSBVUkwgaXMgcGFyc2VkIGFuZCBhbnkgcGFyYW1ldGVycyBhcmUgZXh0cmFjdGVkIGZyb20gaXQuXHJcblx0ICogQHBhcmFtIHVybFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZmluZFJvdXRlQnlVUkwoIHVybDogc3RyaW5nKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRyZXR1cm4gUm91dGVyLmZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmwsIHRoaXMucm91dGVzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTG9va3MgZm9yIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTCBhbW9uZyB0aGUgZ2l2ZW4gYXJyYXkgb2YgUm91dGUgb2JqZWN0cyBhbmRcclxuXHQgKiByZWN1cnNpdmVseSBhbW9uZyB0aGVpciBzdWItcm91dGVzLlxyXG5cdCAqIEBwYXJhbSB1cmwgVVJMIHRvIG1hdGNoXHJcblx0ICogQHBhcmFtIHJvdXRlcyBBcnJheSBvZiBSb3V0ZSBvYmplY3RzIHRvIG1hdGNoIHdpdGggdGhlIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmw6IHN0cmluZywgcm91dGVzOiBSb3V0ZVtdKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRmb3IoIGxldCByb3V0ZSBvZiByb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBtYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdXJsLCByb3V0ZS51cmxQYXR0ZXJuKTtcclxuXHRcdFx0aWYgKG1hdGNoUmVzdWx0ICYmIG1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHRcdFx0cmV0dXJuIFtyb3V0ZSwgbWF0Y2hSZXN1bHQuZmllbGRzXTtcclxuXHRcdFx0ZWxzZSBpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJvb3RBbmRGaWVsZHMgPSBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgcm91dGUuc3ViUm91dGVzKTtcclxuXHRcdFx0XHRpZiAocm9vdEFuZEZpZWxkc1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByb290QW5kRmllbGRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtudWxsLCBudWxsXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiByb3V0ZSBwYXNzaW5nIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbmF2aWdhdGVUb1JvdXRlKCByb3V0ZTogUm91dGUsIHVybDogc3RyaW5nLCBmaWVsZHM6IFJvdXRlRmllbGRzLFxyXG5cdFx0XHRcdFx0bWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdC8vLy8gY2hlY2sgaWYgdGhlIG5ldyByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCByb3V0ZSBhbmQgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdC8vaWYgKHJvdXRlID09PSB0aGlzLmN1cnJSb3V0ZSlcclxuXHRcdC8vXHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBjdXJyZW50IHJvdXRlLCBhc2sgaXQgaWYgd2UgY2FuIGxlYXZlIGl0XHJcblx0XHRpZiAodGhpcy5jdXJyUm91dGUgJiYgdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZXQ6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0gdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMoKTtcclxuXHRcdFx0aWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdFx0cmV0ID0gYXdhaXQgKHJldCBhcyBQcm9taXNlPGJvb2xlYW4+KTtcclxuXHJcblx0XHRcdGlmICghcmV0KVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgdXNlIEhpc3RvcnkgQVBJIHRvIGNoYW5nZSBzdGF0ZVxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyICYmIG1ha2VIaXN0b3J5RW50cnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogcm91dGUuaWQsIHJvdXRlVVJMOiB1cmwsIGZpZWxkcyB9O1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSggc3RhdGUsIFwiXCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByb3V0ZSBhbmQgZ2V0IGl0cyBjb250ZW50XHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IHJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IHJvdXRlLm5hdlRvRnVuYyA/IHJvdXRlLm5hdlRvRnVuYyggZmllbGRzKSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGF3YWl0IChjb250ZW50IGFzIFByb21pc2U8YW55Pik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0Ly8gcmVxdWVzdCB0byBiZSB1cGRhdGVkIHNvIHRoYXQgb3VyIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWRcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBlcnJvciB3YXMgcmFpc2VkIGJ5IG9uZSBvZiB0aGUgZGVzY2VuZGFudCBjb3BvbmVudHMuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIHB1Ymxpc2ggb3Vyc2VsdmVzIGFzIGEgcm91dGVyIHNlcnZpY2VcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIGlmIGluc3RydWN0ZWQgc28sIHN1YnNjcmliZSB0byBhIHJvdXRlciBzZXJ2aWNlIGltcGxlbWVudGVkIGJ5IGFueSBvZiBjb21wb25lbnRzXHJcblx0XHQvLyB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxuXHRcdFx0dGhpcy52bi5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHJvdXRlIHRvIGRpc3BsYXlcclxuXHRcdGxldCBmaXJzdFJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRlc1swXSA6IG51bGw7XHJcblx0XHRpZiAoIWZpcnN0Um91dGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IGZpcnN0Um91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMgPyBmaXJzdFJvdXRlLm5hdlRvRnVuYygge30pIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXCJQbGVhc2Ugd2FpdCB3aGlsZSBjb250ZW50IGlzIGxvYWRpbmcuLi5cIjtcclxuXHRcdFx0KGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KS50aGVuKCAoIGRlbGF5ZWRDb250ZW50OiBhbnkpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBkZWxheWVkQ29udGVudDtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGVzdGFibGlzaCBiYXNlIFVSTCByZWxhdGl2ZSB0byB3aGljaCBhbGwgcGF0aHMgd2lsbCBiZSBjb25zaWRlcmVkXHJcblx0XHRcdGlmICghdGhpcy5iYXNlVVJMKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgcG9wc3RhdGUgZXZlbnQgZm9yIG1vbml0b3JpbmcgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kc1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiBmaXJzdFJvdXRlLmlkLCByb3V0ZVVSTDogZmlyc3RSb3V0ZS51cmxQYXR0ZXJuLCBmaWVsZHM6IG51bGwgfTtcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoIHN0YXRlLCBcIlwiLCBmaXJzdFJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnZuLnVuc3Vic2NyaWJlU2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0dGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlydFJlbmRlciggdGhpcy5jdXJyUm91dGVDb250ZW50KTtcclxuXHR9XHJcblx0XHJcblxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBub2RlUGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly90aGlzLmVycm9yID0gZXJyO1xyXG5cdFx0Ly90aGlzLmVycm9yUGF0aCA9IG5vZGVQYXRoO1xyXG5cdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXHJcblx0XHRcdDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInBpbmtcIiwgZGlzcGxheTpcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtlcnJ9XHJcblx0XHRcdFx0e25vZGVQYXRoICYmIG5vZGVQYXRoLm1hcCggKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogXCJWaXJ0dWFsXCIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuIFJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmdcclxuXHQgKiBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZWl0aGVyIGNhbGxzXHJcblx0ICogdGhlIG91dGVyQ29udGVudEZ1bmMgaWYgZGVmaW5lZCBvciBqdXN0IHJldHVybnMgdGhlIGNvbnRlbnQgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjdXJyUm91dGVDb250ZW50XHJcblx0ICogQHJldHVybiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdmlydFJlbmRlciggY3VyclJvdXRlQ29udGVudDogYW55KTogYW55XHJcblx0e1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5vdXRlckNvbnRlbnRGdW5jID8gdGhpcy5vdXRlckNvbnRlbnRGdW5jKCBjdXJyUm91dGVDb250ZW50KSA6IGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gY3VyclJvdXRlQ29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVhY3RzIG9uIHVzZXIgdXNpbmcgYmFjayBhbmQgZm9yd2FyZCBidXR0b25zLlxyXG5cdHByaXZhdGUgb25Qb3BzdGF0ZSA9ICggZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSBlLnN0YXRlIGFzIFJvdXRlU3RhdGU7XHJcblx0XHRpZiAoIXN0YXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0YXRlLnJvdXRlSUQpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeUlEKCBzdGF0ZS5yb3V0ZUlELCBzdGF0ZS5maWVsZHMpO1xyXG5cdFx0ZWxzZSBpZiAoc3RhdGUucm91dGVVUkwpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeVVSTCggc3RhdGUucm91dGVVUkwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyggXCJSb3V0ZSBzdGF0ZSBpbiBwb3BzdGF0ZSBldmVudCBoYXMgbmVpdGhlciByb3V0ZSBJRCBub3IgcGF0aC5cIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5XHJcblx0Ly8gQVBJIHRvIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy5cclxuXHRwcml2YXRlIGdldCBjb250cm9sc0Jyb3dzZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvXHJcblx0Ly8gYSByb3V0ZXIgdXAgdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHRwcml2YXRlIGdldCBjaGFpbnNUb0hpZ2hlclJvdXRlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLlxyXG5cdHByaXZhdGUgZ2V0IGJhc2VVUkwoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuYmFzZVVSTCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHRoaXMucHJvcHMuYmFzZVVSTDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZSBpbnNpZGUgdGhlIHJvdXRlcidzIG93biBjb250ZW50LiBJZlxyXG5cdCAqIHRoaXMgbWVtYmVyIGlzIHVuZGVmaW5lZCwgb25seSB0aGUgY3VycmVudCByb3V0ZSdzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldCBPdXRlckNvbnRlbnRGdW5jKCB2YWw6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMub3V0ZXJDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgb3V0ZXJDb250ZW50RnVuYzogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgYSBwcm9ncmVzcyBVSSB3aGlsZSB0aGUgcm91dGVyIGlzIGxvYWRpbmcgcm91dGUgY29udGVudC4gKi9cclxuXHRwdWJsaWMgc2V0IFByb2dyZXNzQ29udGVudEZ1bmMoIHZhbDogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5wcm9ncmVzc0NvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBwcm9ncmVzc0NvbnRlbnRGdW5jOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0Ly8gQSByb3V0ZXIgc2VydmljZSB0aGlzIHJvdXRlciB3aWxsIGRlbGVnYXRlIHRvIHdoZW4gaXQgY2Fubm90IHJlc29sdmUgYSBwYXRoLlxyXG5cdHByaXZhdGUgaGlnaGVyUm91dGVyU2VydmljZTogbWltLlJlZjxJUm91dGVyU2VydmljZT47XHJcblxyXG5cdC8vIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzIC0gdXNlZCB0byBmaW5kIHJvdXRlcyBieSBtYXRjaGluZyBwYXRocy4gTm90ZSB0aGF0IHRoaXNcclxuXHQvLyBsaXN0IGlzIGFjdHVhbGx5IGEgaGllcmFyY2h5IGJlY2F1c2Ugcm91dGVzIGNhbiBjb250YWluIHN1Yi1yb3V0ZXMuXHJcblx0cHJpdmF0ZSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcclxuXHJcblx0Ly8gTWFwIG9mIHJvdXRlIElEcyB0byBSb3V0ZSBvYmplY3RzLiBBbGwgcm91dGVzIHRoYXQgZGVmaW5lIGFuIElEIGFyZSBhZGRlZCB0byB0aGlzIG1hcCAtXHJcblx0Ly8gbm8gbWF0dGVyIGhvdyBkZWVwIGluIHRoZSBoaWVyYXJjaHkuXHJcblx0cHJpdmF0ZSByb3V0ZXNCeUlEID0gbmV3IE1hcDxzdHJpbmcsUm91dGU+KCk7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGU6IFJvdXRlO1xyXG5cclxuXHQvLyBDb250ZW50IHBvdmlkZWQgYnkgdGhlIGN1cnJlbnQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGVDb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEVycm9yIGFuZCBjb21wb25lbnQgcGF0aCBpbiBjYXNlIGFuIGVycm9yIGhhcyBiZWVuIGNhdWdodC5cclxuXHRwcml2YXRlIGVycm9yOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZXJyb3JQYXRoOiBzdHJpbmdbXSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBmb3IgdGhlIExpbmsgY29tcG9uZW50IGJlY2F1c2UuIFRoZSBwcm9wZXJ0aWVzIGluXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZSB0aGUgcm91dGU7IHRoZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBJSHRtbEFFbGVtZW50UHJvcHMgaW50ZXJmYWNlXHJcbi8vIGNvcnJlc3BvbmQgdG8gdGhlIHJlbGV2YW50IGF0dHJpYnV0ZXMgb2YgdGhlIDxhPiBET00gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua1Byb3BzIGV4dGVuZHMgbWltLklIdG1sQUVsZW1lbnRQcm9wc1xyXG57XHJcblx0Ly8gUGF0aCB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZVVSTD86IHN0cmluZztcclxuXHJcblx0Ly8gSUQgb2YgdGhlIHJvdXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlSUQ/OiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcm91dGUgd2hlbiB1c2luZyByb3V0ZUlELlxyXG5cdGZpZWxkcz86IFJvdXRlRmllbGRzO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IHNob3VsZCBiZSBtYWRlIGEgbmV3IGVudHJ5IGluIHRoZSBicm93c2VyJ3MgaGlzdG9yeTtcclxuXHQvLyB0aGF0IGlzIHRvIGJlIHN1YmplY3QgdG8gYmFjayBhbmQgZm9yd2FyZCBicm93c2VyIGNvbW1hbmRzLlxyXG5cdG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTGluayBjbGFzcyBpcyBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyBjcmVhdGluZyBsaW5rcyBoYW5kbGVkIGJ5IGEgUm91dGVyIG9iamVjdC4gSXQgaXNcclxuLy8gaW1wbGVtZW50ZWQgYXMgYSBtYW5hZ2VkIGNvbXBvbmVudCBiZWNhdXNlIGl0cyBpbnRlbmRlZCB1c2UgaXMgdmVyeSBzaW1pbGFyIHRvIHRoZSA8YT4gRE9NXHJcbi8vIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTGluayBleHRlbmRzIG1pbS5Db21wb25lbnQ8TGlua1Byb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBMaW5rUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZXh0cmFjdCBvdXIgY3VzdG9tIHBhcmFtZXRlcnMgYW5kIGxlYXZlIG9ubHkgdGhvc2UgdGhhdCBhcmUgPGE+IGF0dHJpYnV0ZXNcclxuXHRcdGxldCB7cm91dGVVUkwsIHJvdXRlSUQsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSwgLi4ucmVzdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIDxhIGhyZWY9XCIjXCIgY2xpY2s9e3RoaXMub25DbGlja30gey4uLnJlc3R9PlxyXG5cdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwvYT47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25DbGljayggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNlcnZpY2U6IElSb3V0ZXJTZXJ2aWNlID0gdGhpcy52bi5nZXRTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdGlmICghc2VydmljZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLnJvdXRlSUQpXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeUlEKCB0aGlzLnByb3BzLnJvdXRlSUQsIHRoaXMucHJvcHMuZmllbGRzLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlVUkwoIHRoaXMucHJvcHMucm91dGVVUkwsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiXHJcbmltcG9ydCB7VHJlZU5vZGVDb250YWluZXJ9IGZyb20gXCIuL1RyZWVOb2RlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWUgY2xhc3MgaXMgYSBnZW5lcmFsIHB1cnBvc2UgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGltcGxlbWVudHMgSVRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudGFiSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoICgpID0+IG5ldyBUcmVlTm9kZSggbnVsbCwgMCwgdGhpcykpO1xyXG5cdFx0dGhpcy5lbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fdGFiSW5kZXg7IH1cclxuXHRwdWJsaWMgc2V0IHRhYkluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1fdGFiSW5kZXggPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZE5vZGUoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9zZWxlY3RlZE5vZGU7IH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbG1SZWZ9IHRhYmluZGV4PXt0aGlzLnRhYkluZGV4fSBjbGFzcz17dGhpcy5jc3NDbGFzc1RyZWV9IGtleWRvd249e3RoaXMub25LZXlEb3dufT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKVxyXG5cdFx0XHR0aGlzLmV4cGFuZE9yU2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIilcclxuXHRcdFx0dGhpcy5jb2xsYXBzZU9yU2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbmV4dE5vZGUgPSB0aGlzLmZpbmREb3duKCBub2RlKTtcclxuXHRcdGlmIChuZXh0Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0bmV4dE5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdG5leHROb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcHJldk5vZGUgPSB0aGlzLmZpbmRVcCggbm9kZSk7XHJcblx0XHRpZiAocHJldk5vZGUpXHJcblx0XHR7XHJcblx0XHRcdHByZXZOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRwcmV2Tm9kZS5zY3JvbGxJbnRvVmlldyggdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGNvbGxhcHNlZCwgZXhwYW5kcyBpdC4gSWYgdGhlIG5vZGUgaXMgYWxyZWFkeSBleHBhbmRlZCwgc2VsZWN0cyB0aGUgZmlyc3RcclxuXHQvLyBjaGlsZCBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIHNlbGVjdHMgdGhlIG5leHQgbm9kZSBkb3duLlxyXG5cdHByaXZhdGUgZXhwYW5kT3JTZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld05vZGUgPSBub2RlLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdFx0XHRuZXdOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRcdG5ld05vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS5leHBhbmQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgZXhwYW5kZWQsIGNvbGxhcHNlcyBpdDsgb3RoZXJ3aXNlLCBzZWxlY3RzIHRoZSBub2RlJ3MgcGFyZW50LlxyXG5cdHByaXZhdGUgY29sbGFwc2VPclNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdG5vZGUuY29sbGFwc2UoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZERvd24oIG5vZGU6IFRyZWVOb2RlLCBza2lwRXhwYW5kZWRTdWJOb2RlczogYm9vbGVhbiA9IGZhbHNlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHNraXBFeHBhbmRlZFN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGlmIChub2RlLmluZGV4IDwgY29udGFpbmVyLm5vZGVzLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4ICsgMV07XHJcblx0XHRcdGVsc2UgaWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUubV9wYXJlbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pc0V4cGFuZGVkICYmIG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdG5vZGUuY29udGFpbmVyLm5vZGVzWzBdLnNlbGVjdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRVcCggbm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pbmRleCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubV9wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0bGV0IHByZXZOb2RlID0gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggLSAxXTtcclxuXHRcdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBwcmV2Tm9kZSk7XHJcblx0XHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IHByZXZOb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHdoaWNoIGlzIHRoZSBsYXN0IGV4cGFuZGVkIGRlc2NlbmRhbmQgb2YgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kTGFzdEV4cGFuZGVkTm9kZSggY3Vyck5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIWN1cnJOb2RlIHx8IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgfHwgIWN1cnJOb2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGxhc3RDaGlsZCA9IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlc1tjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoLTFdO1xyXG5cdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBsYXN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogbGFzdENoaWxkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NDbGFzc1RyZWUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlVHJlZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWVcIiwgXCIudHJlZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3Vyc29yOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZG9kZ2VyYmx1ZVwiXSxcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlXCIsIFwiLnRyZWUtbm9kZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50ID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudEhvdmVyID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQ6aG92ZXJcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKik6aG92ZXJcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJsaWdodGN5YW5cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwiZG90dGVkXCJdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJkb2RnZXJibHVlXCIsXHJcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUljb24gPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtaWNvblwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVJY29uID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWljb25cIiwgXCIudHJlZS1ub2RlLWljb24oKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxZW1cIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMWVtXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc1N1Ym5vZGVzID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1zdWJub2Rlc1wiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVN1Yk5vZGVzID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1zdWJub2Rlc1wiLCBcIi50cmVlLXN1Ym5vZGVzKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjE2cHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHJpdmF0ZSBtX3RhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBub2Rlcy5cclxuXHRwcml2YXRlIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBzZWxlY3RlZCBub2RlIG9yIG51bGwgaWYgbm8gbm9kZSBpcyBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9zZWxlY3RlZE5vZGU6IFRyZWVOb2RlID0gbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRyZWUuXHJcblx0cHVibGljIGVsbVJlZjogbWltLlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG5cdC8vIENTUyBydWxlcyB1c2VkIGJ5IHRoZSBUcmVlIGFuZCBUcmVlTm9kZSBjb250cm9sc1xyXG5cdHByaXZhdGUgY3NzUnVsZVRyZWU6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnQ6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudEhvdmVyOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZDogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVJY29uOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlU3ViTm9kZXM6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHJcblx0Ly8gQ1NTIGxvY2FsIGNsYXNzIG5hbWVzXHJcblx0cHVibGljIGNzc0NsYXNzVHJlZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGU6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlQ29udGVudDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQ6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlSWNvbjogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc1N1Ym5vZGVzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIm1pbWNzc1wiIFxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZSBleHRlbmRzIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0dGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBub2Rlcy5cclxuXHRyZWFkb25seSBub2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlXHJcblx0cmVhZG9ubHkgc2VsZWN0ZWROb2RlOiBJVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVQYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhIHRyZWUgbm9kZSB0aGF0IGNhbiBiZSBzZXQvY2hhbmdlZFxyXG4vLyBleHRlcm5hbGx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQYXJhbXNcclxue1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHRpY29uPzogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHRleHRDb2xvcj86IENzc0NvbG9yO1xyXG5cdGJnQ29sb3I/OiBDc3NDb2xvcjtcclxuXHRpdGFsaWM/OiBib29sZWFuO1xyXG5cdGJvbGQ/OiBib29sZWFuO1xyXG5cdGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG5cdGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVJY29uUGFyYW1zIGludGVyZmFjZSByZXByZXNlbnRzIHBhcmFtZXRlcnMgb2YgYW4gaWNvbiBvZiBhIHRyZWUgbm9kZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFRyZWVOb2RlSWNvblBhcmFtcyA9IHtjbGFzczogc3RyaW5nfSB8IHtpbWc6IHN0cmluZ31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSBpbiB0aGUgdHJlZSBoaWVyYXJjaHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSBleHRlbmRzIElUcmVlTm9kZVBhcmFtcywgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHJlYWRvbmx5IHRyZWU6IElUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cmVhZG9ubHkgcGFyZW50OiBJVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgbGV2ZWwgb2YgdGhlIG5vZGUgaW4gdGhlIGFuY2VzdHJhbCBoaWVyYXJjaHkuXHJcblx0cmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzOiBJVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgZXhwYW5kZWQuXHJcblx0cmVhZG9ubHkgaXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0ZXhwYW5kKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdGNvbGxhcHNlKCk6IHZvaWQ7XHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0c2VsZWN0KCk6IHZvaWQ7XHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHR1bnNlbGVjdCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRyZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cmVtb3ZlQWxsTm9kZXMoKTogdm9pZDtcclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0ZXhwYW5kQWxsKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRjb2xsYXBzZUFsbCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiO1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIHRyZWUgY29udHJvbCBpbnN0YW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJlZSgpOiBJVHJlZVxyXG57XHJcblx0cmV0dXJuIG5ldyBUcmVlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXQsIENzc0NvbG9yfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtcywgVHJlZU5vZGVJY29uUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCJcclxuaW1wb3J0IHtUcmVlTm9kZUNvbnRhaW5lcn0gZnJvbSBcIi4vVHJlZU5vZGVDb250YWluZXJcIlxyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSB3aXRoaW4gYSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVRyZWVOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcGFyZW50OiBUcmVlTm9kZSwgbGV2ZWw6IG51bWJlciwgdHJlZTogVHJlZSA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1fcGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5tX3RyZWUgPSBwYXJlbnQgIT09IG51bGwgPyBwYXJlbnQubV90cmVlIDogdHJlZTtcclxuXHRcdHRoaXMubV9sZXZlbCA9IGxldmVsO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoIHRoaXMubm9kZUZhY3RvcnkpO1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubV9pc1NlbGVjdGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZXMgb2Ygc3ViLW5vZGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5ID0gKCk6IFRyZWVOb2RlID0+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBUcmVlTm9kZSggdGhpcywgdGhpcy5tX2xldmVsICsgMSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cHVibGljIGdldCB0cmVlKCk6IElUcmVlIHsgcmV0dXJuIHRoaXMubV90cmVlOyB9XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHBhcmVudCgpOiBJVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5tX3BhcmVudDsgfVxyXG5cclxuXHQvLyAwLWJhc2VkIGxldmVsIG9mIHRoZSBub2RlIGluIHRoZSBhbmNlc3RyYWwgaGllcmFyY2h5LlxyXG5cdHB1YmxpYyBnZXQgbGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV9sZXZlbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1faW5kZXg7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzZXQgaW5kZXgoIHZhbDogbnVtYmVyKSB7IHRoaXMubV9pbmRleCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVycy5cclxuXHRwdWJsaWMgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9jb250ZW50OyB9XHJcblx0cHVibGljIHNldCBjb250ZW50KCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY29udGVudCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaWNvbigpOiBUcmVlTm9kZUljb25QYXJhbXMgeyByZXR1cm4gdGhpcy5tX2ljb247IH1cclxuXHRwdWJsaWMgc2V0IGljb24oIHZhbDogVHJlZU5vZGVJY29uUGFyYW1zKSB7IHRoaXMubV9pY29uID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCB0ZXh0Q29sb3IoKTogQ3NzQ29sb3IgeyByZXR1cm4gdGhpcy5tX3RleHRDb2xvcjsgfVxyXG5cdHB1YmxpYyBzZXQgdGV4dENvbG9yKCB2YWw6IENzc0NvbG9yKSB7IHRoaXMubV90ZXh0Q29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJnQ29sb3IoKTogQ3NzQ29sb3IgeyByZXR1cm4gdGhpcy5tX2JnQ29sb3I7IH1cclxuXHRwdWJsaWMgc2V0IGJnQ29sb3IoIHZhbDogQ3NzQ29sb3IpIHsgdGhpcy5tX2JnQ29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0YWxpYygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pdGFsaWM7IH1cclxuXHRwdWJsaWMgc2V0IGl0YWxpYyggdmFsOiBib29sZWFuKSB7IHRoaXMubV9pdGFsaWMgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJvbGQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1fYm9sZDsgfVxyXG5cdHB1YmxpYyBzZXQgYm9sZCggdmFsOiBib29sZWFuKSB7IHRoaXMubV9ib2xkID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2N1c3RvbUNsYXNzOyB9XHJcblx0cHVibGljIHNldCBjdXN0b21DbGFzcyggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2N1c3RvbUNsYXNzID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBkYXRhKCk6IGFueSB7IHJldHVybiB0aGlzLm1fZGF0YTsgfVxyXG5cdHB1YmxpYyBzZXQgZGF0YSggdmFsOiBhbnkpIHsgdGhpcy5tX2RhdGEgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1faXNFeHBhbmRlZDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgdGhlIG5vZGUgc28gdGhhdCBpdHMgc3ViLW5vZGVzIGJlY29tZSB2aXNpYmxlLlxyXG5cdHB1YmxpYyBleHBhbmQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyB0aGUgbm9kZSBoaWRpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0cHVibGljIHNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB1bnNlbGVjdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUgKGlmIGFueSlcclxuXHRcdFx0aWYgKHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlICE9IG51bGwpXHJcblx0XHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUudW5zZWxlY3QoKTtcclxuXHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gdGhpcztcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgdW5zZWxlY3QoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm1faXNTZWxlY3RlZCAhPT0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1Yk5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBvbmx5IGlmIHRoaXMgd2FzIHRoZSBmaXJzdCBzdWItbm9kZVxyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMSlcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cclxuXHRcdHJldHVybiBzdWJOb2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRMZW5ndGggPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGg7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVOb2RlKCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGxhc3Qgc3ViLW5vZGVcclxuXHRcdGlmIChvbGRMZW5ndGggPT09IDEgJiYgdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChvbGRMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxOb2RlcygpO1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZXhwYW5kKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5leHBhbmRBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbGxhcHNlKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5jb2xsYXBzZUFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIHRoZSBub2RlIGlzIG5vdCB3aXRoaW4gdGhlIHZpZXdwb3J0IGFuZCBzY3JvbGxzIGl0IGludG8gdmlldyBhbGluZ2luZyBpdFxyXG5cdC8vIHdpdGggdGhlIHVwcGVyIG9yIGxvd2VyIGVkZ2Ugb2YgdGhlIHRyZWUgY29udGFpbmVyLlxyXG5cdHB1YmxpYyBzY3JvbGxJbnRvVmlldyggYWxpZ25VcDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMubV90cmVlLmVsbVJlZi5yIHx8ICF0aGlzLmNvbnRlbnRFbG1SZWYucilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCB0cmVlIGFuZCBub2RlIGJvdW5kaW5nIHJlY3RcclxuXHRcdGxldCByY1RyZWU6IENsaWVudFJlY3QgPSB0aGlzLm1fdHJlZS5lbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCByY05vZGU6IENsaWVudFJlY3QgPSB0aGlzLmNvbnRlbnRFbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGlmIChyY05vZGUuYm90dG9tIDw9IHJjVHJlZS5ib3R0b20gJiYgcmNOb2RlLnRvcCA+PSByY1RyZWUudG9wKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmLnIuc2Nyb2xsSW50b1ZpZXcoIGFsaWduVXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHR7dGhpcy5yZW5kZXJOb2RlKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlclN1Yk5vZGVzKCl9XHJcblx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJOb2RlKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBleHBhbmRlckNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IHRoaXMubV9pc0V4cGFuZGVkID8gXCJmYS1jYXJldC1kb3duXCIgOiBcImZhLWNhcmV0LXJpZ2h0XCI7XHJcblxyXG5cdFx0bGV0IGljb25Db250ZW50OiBhbnk7XHJcblx0XHRpZiAodGhpcy5tX2ljb24pXHJcblx0XHR7XHJcblx0XHRcdGlmIChcImNsYXNzXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8c3BhbiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbiArIFwiIFwiICsgdGhpcy5tX2ljb24uY2xhc3N9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0XHRlbHNlIGlmIChcImltZ1wiIGluIHRoaXMubV9pY29uKVxyXG5cdFx0XHRcdGljb25Db250ZW50ID0gPGltZyBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbn0gc3JjPXt0aGlzLm1faWNvbi5pbWd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb250ZW50Q2xhc3M6IHN0cmluZyA9IHRoaXMubV9pc1NlbGVjdGVkID8gdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkIDogdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudDtcclxuXHRcdGlmICh0aGlzLm1fY3VzdG9tQ2xhc3MpXHJcblx0XHRcdGNvbnRlbnRDbGFzcyArPSBcIiBcIiArIHRoaXMubV9jdXN0b21DbGFzcztcclxuXHJcblx0XHRsZXQgY29udGVudFN0eWxlOiBTdHlsZXNldCA9IHt9O1xyXG5cdFx0aWYgKHRoaXMubV90ZXh0Q29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5jb2xvciA9IHRoaXMubV90ZXh0Q29sb3I7XHJcblx0XHRpZiAodGhpcy5tX2JnQ29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1fYmdDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1faXRhbGljKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHRcdGlmICh0aGlzLm1fYm9sZClcclxuXHRcdFx0Y29udGVudFN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlfT5cclxuXHRcdFx0PGkgY2xhc3M9e1wiZmEgZmEtZncgXCIgKyBleHBhbmRlckNsYXNzTmFtZX0gY2xpY2s9e3RoaXMub25FeHBhbmRlckNsaWNrZWR9IC8+XHJcblx0XHRcdHtpY29uQ29udGVudH1cclxuXHRcdFx0PHNwYW4gcmVmPXt0aGlzLmNvbnRlbnRFbG1SZWZ9IGRyYWdTb3VyY2UgY2xhc3M9e2NvbnRlbnRDbGFzc30gc3R5bGU9e2NvbnRlbnRTdHlsZX1cclxuXHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9Pnt0aGlzLm1fY29udGVudH08L3NwYW4+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJTdWJOb2RlcygpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc1N1Ym5vZGVzfSBzdHlsZT17e2Rpc3BsYXk6dGhpcy5tX2lzRXhwYW5kZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cdFx0XHR7dGhpcy5jb250YWluZXJ9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkRibENsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyY2xpY2tzIG9uIHRoZSBleHBhbmRlciBpY29uXHJcblx0cHJpdmF0ZSBvbkV4cGFuZGVyQ2xpY2tlZCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHJlZSBjb250cm9sIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzXHJcblx0cHVibGljIG1fdHJlZTogVHJlZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGVcclxuXHRwdWJsaWMgbV9wYXJlbnQ6IFRyZWVOb2RlO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGVudGF0aW9uIGxldmVsIG9mIHRoZSBibG9ja1xyXG5cdHB1YmxpYyBtX2xldmVsOiBudW1iZXI7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1faW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBUcmVlTm9kZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IGV4cGFuZGVkICh0aGF0IGlzIHN1Yi1ub2RlcyBhcmUgdmlzaWJsZSkuXHJcblx0cHVibGljIG1faXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBtX2lzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlJ3MgY29udGVudC5cclxuXHRwdWJsaWMgY29udGVudEVsbVJlZjogbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnNcclxuXHRwcml2YXRlIG1fY29udGVudDogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9pY29uOiBUcmVlTm9kZUljb25QYXJhbXM7XHJcblx0cHJpdmF0ZSBtX3RleHRDb2xvcjogQ3NzQ29sb3I7XHJcblx0cHJpdmF0ZSBtX2JnQ29sb3I6IENzc0NvbG9yO1xyXG5cdHByaXZhdGUgbV9pdGFsaWM6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2JvbGQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2N1c3RvbUNsYXNzOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2RhdGE6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlQ29udGFpbmVyIGNsYXNzIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMgdGhhdCBhcmUgZGlzcGxheWVkIGFuZFxyXG4vLyBoaWRkZW4gdG9nZXRoZXIuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250YWluZXIgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRjb25zdHJ1Y3Rvciggbm9kZUZhY3Rvcnk6ICgpID0+IFRyZWVOb2RlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IFtdO1xyXG5cdFx0dGhpcy5ub2RlRmFjdG9yeSA9IG5vZGVGYWN0b3J5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0bGV0IG5vZGU6IFRyZWVOb2RlID0gdGhpcy5ub2RlRmFjdG9yeSgpO1xyXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwgfHwgaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuaW5kZXggPSBjdXJyTGVuZ3RoO1xyXG5cdFx0XHR0aGlzLm5vZGVzLnB1c2goIG5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gaW5kZXg7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgbm9kZSk7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgaW5kZXhlcyBvZiB0aGUgbm9kZXMgYWZ0ZXIgdGhlIGluc2VydGVkIG9uZVxyXG5cdFx0XHRmb3IoIGxldCBpID0gaW5kZXggKyAxOyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHRoaXNbaV0uaW5kZXggPSBpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGUuY29udGVudCA9IHBhcmFtcy5jb250ZW50O1xyXG5cdFx0bm9kZS5pY29uID0gcGFyYW1zLmljb247XHJcblx0XHRub2RlLnRleHRDb2xvciA9IHBhcmFtcy50ZXh0Q29sb3I7XHJcblx0XHRub2RlLmJnQ29sb3IgPSBwYXJhbXMuYmdDb2xvcjtcclxuXHRcdG5vZGUuaXRhbGljID0gcGFyYW1zLml0YWxpYztcclxuXHRcdG5vZGUuYm9sZCA9IHBhcmFtcy5ib2xkO1xyXG5cdFx0bm9kZS5jdXN0b21DbGFzcyA9IHBhcmFtcy5jdXN0b21DbGFzcztcclxuXHRcdG5vZGUuZGF0YSA9IHBhcmFtcy5kYXRhO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIHN1Yi1ub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3ViLW5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gY3Vyckxlbmd0aClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInJlcGxhY2VOb2RlOiBpbnZhbGlkIGluZGV4IFwiICsgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSByZW1vdmVkIG9uZVxyXG5cdFx0Zm9yKCBsZXQgaSA9IGluZGV4OyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoY3Vyckxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCAwLCBjdXJyTGVuZ3RoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBub2RlIG9mIHRoaXMubm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuZXhwYW5kQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmNvbGxhcHNlQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5ub2RlcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXJyYXkgb2YgVHJlZU5vZGUgb2JqZWN0c1xyXG5cdHB1YmxpYyBub2RlczogVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGluc3RhbmNlIG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhlIFNjcm9sbEF4aXMgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBheGlzIG9mIGRhdGEsIHdoaWNoIGNvbnNpc3RzIG9mIGl0ZW1zLCBhbmQgcGVyZm9ybXNcclxuICogY2FsY3VsYXRpb25zIGR1cmluZyBzY3JvbGxpbmcgYmFjayBhbmQgZm9ydGggYWxvbmcgdGhlIGF4aXMuIFRoZSBTY3JvbGxBeGlzIGNsYXNzIGl0c2VsZiBkb2Vzbid0XHJcbiAqIGhhdmUgYW55IHZpc3VhbCByZXByZXNlbnRhdGlvbiBhbmQgb25seSBzZXJ2ZXMgYXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGFsZ29yaXRobSB0aGF0XHJcbiAqIGhlbHBzIHZpcnR1YWxpemUgc2Nyb2xsaW5nIC0gdGhhdCBpcyBkaXNwbGF5IG9ubHkgc21hbGwgc3Vic2V0IG9mIGRhdGEgaXRlbXMgYW5kIGFkZC9yZW1vdmVcclxuICogaXRlbXMgYXMgc2Nyb2xsaW5nIGhhcHBlbnMuXHJcbiAqIFxyXG4gKiBWQXhpcyBhc3N1bWVzIHRoZSB1c2Ugb2YgMyBET00gZWxlbWVudHM6XHJcbiAqXHQtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBlbGVtZW50IHdoaWNoIGRpc3BsYXlzIHRoZSBzY3JvbGxiYXIgd2hlbiBuZWNlc3NhcnlcclxuICpcdC0gd2FsbCAtIHRoZSBcImlubmVyXCIgZWxlbWVudCB3aGljaCBoYXMgdGhlIHNpemUgb2YgdGhlIGVudGlyZSBwb3NzaWJsZSBzZXQgb2YgaXRlbXMuIEl0IGlzXHJcbiAqXHRcdG5lZWRlZCB0byBtYWtlIHNjcm9sbGluZyBtb3JlLW9yLWxlc3MgYWNjdXJhdGUuXHJcbiAqXHQtIHN1YnNldCAtIHRoZSBlbGVtZW50IHRoYXQgZGlzcGxheXMgb25seSBpdGVtcyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1cyBhIGNlcnRhaW4gbnVtYmVyIG9mXHJcbiAqXHRcdGFkZGl0aW9uYWwgaXRlbXMgZm9yIFwib3ZlcnNjYW5cIi5cclxuICogXHJcbiAqIFZBeGlzIGNhbGN1bGF0ZXMgYXZlcmFnZSBpdGVtIHNpemUgYnkgZGl2aWRpbmcgdGhlIHNpemUgb2YgdGhlIGRhdGEgYnkgdGhlIG51bWJlciBvZiBpdGVtcy5cclxuICogVGhlIGF2ZXJhZ2UgdmFsdWUgaXMgcmVjYWxjdWxhdGVkIGV2ZXJ5IHRpbWUgaXRlbXMgYXJlIGFkZGVkIHRvIG9yIGRlbGV0ZWQgZnJvbSB0aGUgc3Vic2V0IHRodXNcclxuICogYWNjb21vZGF0aW5nIGl0ZW1zIHdpdGggZGlmZmVyZW4gc2l6ZXMuIEJhc2VkIG9uIHRoZSBhdmVyYWdlIHZhbHVlIHRoZSB3YWxsIGVsZW1lbnQgaXMgc2l6ZWRcclxuICogdG8gaW5jbHVkZSB0aGUgZW50aXJlIGRhdGEgc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZBeGlzIHVzZXMgbWluaW11bSwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhbiBudW1iZXIgb2YgaXRlbXMgb24gYm90aCBzaWRlcyBvZiB0aGUgZnJhbWUgYW5kXHJcbiAqIG1ha2VzIHN1cmUgdGhhdCB0aGUgYWN0dWFsIG51bWJlciBvZiBpdGVtcyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMuIER1cmluZ1xyXG4gKiBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLCBuZXcgaXRlbXMgYXJlIGFkZGVkOyBpZlxyXG4gKiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSwgaXRlbXMgYXJlIGRlbGV0ZWQuIFdoZW4gaXRlbXMgYXJlIGFkZGVkIHRoZXkgYXJlIGFkZGVkIHVwIHRvXHJcbiAqIHRoZSBvcHRpbWFsIG92ZXJzY2FuIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzXHJcbntcclxuXHQvLyBNaW5pbWFsIG51bWJlciBvZiBhZGRpdGlvbmFsIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGZhbGxzIHVuZGVyIHRoaXMgbnVtYmVyLCBuZXcgaXRlbXMgYXJlIGFkZGVkLlxyXG5cdHByaXZhdGUgbWluT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gT3B0aW1hbCBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0LiBXaGVuIGFkZGluZyBuZXcgaXRlbXMgb3IgcmVtb3ZpbmdcclxuXHQvLyBleGlzdGluZyBpdGVtcyB3ZSB3YW50IHRvIHJpY2ggdGhpcyBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIG92ZXJzY2FuLlxyXG5cdHByaXZhdGUgb3B0T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gTWF4aW11bSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIG1haW50YWluZWQuIFdoZW5cclxuXHQvLyBkdXJpbmcgc2Nyb2xsaW5nIHRoZSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgZXhjZWVkcyB0aGlzIG51bWJlciwgaXRlbXMgYXJlIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBtYXhPdmVyc2NhbjogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtaW5PdmVyc2NhbjogbnVtYmVyLCBvcHRPdmVyc2NhbjogbnVtYmVyLCBtYXhPdmVyc2NhbjogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMubWluT3ZlcnNjYW4gPSBtaW5PdmVyc2NhbjtcclxuXHRcdHRoaXMub3B0T3ZlcnNjYW4gPSBvcHRPdmVyc2NhbjtcclxuXHRcdHRoaXMubWF4T3ZlcnNjYW4gPSBtYXhPdmVyc2NhbjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvY2N1cGllZCBieSB0aGUgY3VycmVudCBkYXRhIHNldCByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgZnJhbWVcclxuXHQgKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbXZvdmUgaXRlbXMuIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgd2hlbjpcclxuXHQgKlx0LSBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBkYXRhIHNldCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBzaXplIG9mIHRoZSBmcmFtZSBlbGVtZW50IGNoYW5nZXMuXHJcblx0ICpcdC0gVGhlIGZyYW1lIGVsZW1lbnQgaXMgc2Nyb2xsZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRvdGFsQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBlbnRpcmUgZGF0YSBzZXRcclxuXHQgKiBAcGFyYW0gZmlyc3RJdGVtIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGl0ZW1Db3VudCBOdW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBzdWJzZXRcclxuXHQgKiBAcGFyYW0gZnJhbWVTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXplbHMgb2YgdGhlIGZyYW1lIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gd2FsbFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgd2FsbCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHN1YnNldFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgc3Vic2V0IGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gc2Nyb2xsUG9zIEN1cnJlbnQgb3IgbmV3IHNjcm9sbCBwb3NpdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgbWVhc3VyZSggdG90YWxDb3VudDogbnVtYmVyLCBvbGRGaXJzdDogbnVtYmVyLCBvbGRDb3VudDogbnVtYmVyLCBvbGRBdmdJdGVtU2l6ZTogbnVtYmVyLFxyXG5cdFx0ZnJhbWVTaXplOiBudW1iZXIsIHdhbGxTaXplOiBudW1iZXIsIHN1YnNldFNpemU6IG51bWJlciwgc2Nyb2xsUG9zOiBudW1iZXIpOiBTY3JvbGxBeGlzQWN0aW9uXHJcblx0e1xyXG5cdFx0Ly8gcHJlcGFyZSB0aGUgb2JqZWN0IHRvIGJlIHJldHVybmVkXHJcblx0XHRsZXQgcmV0QWN0aW9uID0gbmV3IFNjcm9sbEF4aXNBY3Rpb24oKTtcclxuXHRcdGlmICh0b3RhbENvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gcmV0QWN0aW9uO1xyXG5cdFx0ZWxzZSBpZiAob2xkQ291bnQgPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpdGVtQ291bnQgY2Fubm90IGJlIHplcm9cIik7XHJcblxyXG5cdFx0bGV0IG9sZExhc3QgPSBvbGRGaXJzdCArIG9sZENvdW50IC0gMTtcclxuXHRcdGxldCB0b3RhbExhc3QgPSB0b3RhbENvdW50IC0gMTtcclxuXHJcblx0XHQvLyBjYWxjdWxhdGUgbmV3IGF2ZXJhZ2UgaXRlbSBzaXplIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGN1cnJlbnQgc3Vic2V0XHJcblx0XHQvLyBhbmQgdGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgZGF0YSBlbGVtZW50LlxyXG5cdFx0bGV0IG5ld0F2Z0l0ZW1TaXplID0gc3Vic2V0U2l6ZSAvIG9sZENvdW50O1xyXG5cdFx0aWYgKG9sZEF2Z0l0ZW1TaXplKVxyXG5cdFx0XHRuZXdBdmdJdGVtU2l6ZSA9IChuZXdBdmdJdGVtU2l6ZSArIG9sZEF2Z0l0ZW1TaXplKSAvIDI7XHJcblxyXG5cdFx0Ly8gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBhbmQgdGhlIGF2ZXJhZ2Ugc2l6ZSBlc3RpbWF0ZSB3aGF0IGl0ZW1zIHdvdWxkIGZpdCBpbnNpZGVcclxuXHRcdC8vIHRoZSBmcmFtZSBlbGVtZW50LlxyXG5cdFx0bGV0IGZpdEZpcnN0ID0gTWF0aC5taW4oIE1hdGguZmxvb3IoIHNjcm9sbFBvcyAvIG5ld0F2Z0l0ZW1TaXplKSwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBmaXRMYXN0ID0gTWF0aC5taW4oIE1hdGguY2VpbCggKHNjcm9sbFBvcyArIGZyYW1lU2l6ZSkgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblxyXG5cdFx0Ly8gZ2V0IG5ldyBmaXJzdCBhbmQgbGFzdCAgaW5kaWNlcyB3aXRoIG1pbmltYWwsIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW5cclxuXHRcdGxldCBtaW5PdmVyc2NhbkZpcnN0ID0gTWF0aC5tYXgoIGZpdEZpcnN0IC0gdGhpcy5taW5PdmVyc2NhbiwgMCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMub3B0T3ZlcnNjYW4sIDApXHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWF4T3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG1pbk92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5taW5PdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBvcHRPdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMub3B0T3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm1heE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdGxldCBuZXdGaXJzdCA9IG9sZEZpcnN0ID4gbWluT3ZlcnNjYW5GaXJzdCB8fCBvbGRGaXJzdCA8IG1heE92ZXJzY2FuRmlyc3QgPyBvcHRPdmVyc2NhbkZpcnN0IDogb2xkRmlyc3Q7XHJcblx0XHRsZXQgbmV3TGFzdCA9IG9sZExhc3QgPCBtaW5PdmVyc2Nhbkxhc3QgfHwgb2xkTGFzdCA+IG1heE92ZXJzY2FuTGFzdCA/IG9wdE92ZXJzY2FuTGFzdCA6IG9sZExhc3Q7XHJcblxyXG5cdFx0aWYgKG5ld0ZpcnN0ID4gbmV3TGFzdClcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYFdyb25nIFNjcm9sbEF4aXMgY2FsY3VsYXRpb246IG5ld0ZpcnN0ICcke25ld0ZpcnN0fScgaXMgZ3JlYXRlciB0aGFuIG5ld0xhc3QgJyR7bmV3TGFzdH0nYClcclxuXHJcblx0XHQvLyBzZXQgd2hhdCB3ZSBhbHJlYWR5IGtub3cgaW50byB0aGUgcmV0dXJuIG9iamVjdFxyXG5cdFx0cmV0QWN0aW9uLm5ld0ZpcnN0ID0gbmV3Rmlyc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3TGFzdCA9IG5ld0xhc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3QXZnSXRlbVNpemUgPSBuZXdBdmdJdGVtU2l6ZTtcclxuXHRcdHJldEFjdGlvbi5uZXdXYWxsU2l6ZSA9IE1hdGguY2VpbCggdG90YWxDb3VudCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHRcdHJldEFjdGlvbi5uZXdTdWJzZXRPZmZzZXQgPSBNYXRoLmNlaWwoIG5ld0ZpcnN0ICogbmV3QXZnSXRlbVNpemUpO1xyXG5cclxuXHRcdC8vIG5vdyB0aGF0IHdlIGhhdmUgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zIHdlIHdhbnQsIGRldGVybWluZSB3aGF0IGl0ZW1zIHNob3VsZCBiZVxyXG5cdFx0Ly8gYWRkZWQvcmVtb3ZlZCBpbiB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgZW5kXHJcblx0XHRpZiAobmV3Rmlyc3QgPT0gb2xkRmlyc3QgJiYgbmV3TGFzdCA9PSBvbGRMYXN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IGRhdGFzZXQgaXMgdGhlIHNhbWUgYXMgdGhlIG9sZCBvbmUsIGRvbid0IGFkZC9yZW1vdmUgYW55IGl0ZW1zXHJcblx0XHRcdHJldEFjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZExhc3QgfHwgbmV3TGFzdCA8IG9sZEZpcnN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGRhdGFzZXRzIGRvbid0IGludGVyc2VjdCwgcmVtb3ZlIGFsbCBleGlzdGluZyBhbmQgYWRkIGFsbFxyXG5cdFx0XHQvLyBuZXcgaXRlbXMuXHJcblx0XHRcdHJldEFjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV3Rmlyc3QgPCBvbGRGaXJzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPSBvbGRGaXJzdCAtIG5ld0ZpcnN0O1xyXG5cdFx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZEZpcnN0KVxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCA9IG5ld0ZpcnN0IC0gb2xkRmlyc3Q7XHJcblxyXG5cdFx0XHRpZiAobmV3TGFzdCA8IG9sZExhc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA9IG9sZExhc3QgLSBuZXdMYXN0O1xyXG5cdFx0XHRlbHNlIGlmIChuZXdMYXN0ID4gb2xkTGFzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0RW5kID0gbmV3TGFzdCAtIG9sZExhc3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzQWN0aW9uIGNsYXNzIHJlcHJlc2VudHMgdGhlIGFjdGlvbihzKSB0aGF0IHNob3VsZCBiZSBkb25lIGFmdGVyIHRoZSBTY3JvbGxBeGlzXHJcbiAqIHBlcmZvcm1lZCBjYWxjdWxhdGlvbnMgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZyYW1lLCB3YWxsIGFuZCBkYXRhLiBUaGUgYWN0aW9uc1xyXG4gKiBhcmUgaW5zdHJ1Y3Rpb25zIHRvIGFkZCBvciByZW1vdmUgaXRlbXMgYW5kIHRvIHNldCB3YWxsIHNpemUgYW5kIGRhdGEgb2Zmc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEF4aXNBY3Rpb25cclxue1xyXG5cdC8vIE5ldyBhdmVhcmFnZSBpdGVtIHNpemVcclxuXHRuZXdBdmdJdGVtU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IHNpemUgdGhhdCBzaG91bGQgYmUgc2V0IHRvIHRoZSB3YWxsIGVsZW1lbnRcclxuXHRuZXdXYWxsU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IG9mZnNldCBvZiB0aGUgc3Vic2V0IGVsZW1lbnQgZnJvbSB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3U3Vic2V0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB0aGF0IHNob3VsZCBiZSBpbiB0aGUgc3Vic2V0XHJcblx0bmV3Rmlyc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0xhc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIG5laXRoZXIgYWRkIG5vciByZW1vdmUgYW55IGl0ZW1zLlxyXG5cdG5vQWRkUmVtb3ZlTmVlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMuIElmIHRoaXMgZmxhZyBpcyBzZXRcclxuXHQvLyB0byB0cnVlLCB0aGVuIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMgYW5kIHRoZW4gYWRkIGFsbCBpdGVtcyBmcm9tXHJcblx0Ly8gbmV3Rmlyc3QgdG8gbmV3TGFzdFxyXG5cdG5lZWVkVG9SZW1vdmVBbGxJdGVtczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlIGF0IHRoZSBiZWdpbm5pbmcuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZEZpcnN0XHJcblx0Ly8gdG8gbmV3Rmlyc3QtMS5cclxuXHRjb3VudFRvUmVtb3ZlQXRTdGFydDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgZW5kLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdMYXN0KzFcclxuXHQvLyB0byBvbGRMYXN0LlxyXG5cdGNvdW50VG9SZW1vdmVBdEVuZDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIGFkZCBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdGaXJzdFxyXG5cdC8vIHRvIG9sZEZpcnN0LTEuXHJcblx0Y291bnRUb0FkZEF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gb2xkTGFzdCsxXHJcblx0Ly8gdG8gbmV3TGFzdC5cclxuXHRjb3VudFRvQWRkQXRFbmQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge1Njcm9sbEF4aXMsIFNjcm9sbEF4aXNBY3Rpb259IGZyb20gXCIuL1Njcm9sbEF4aXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUQWJsZUNlbGxEYXRhIGludGVyZmFjZSByZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgc2luZ2xlIGNlbGwgdGhhdCBpcyBwcm92aWRlZFxyXG4gKiBieSBhIGNhbGxlciB3aGVuIHJlcXVlc2VkIGJ5IFZUYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlQ2VsbERhdGFcclxue1xyXG5cdC8qKiBDb250ZW50IG9mIHRoZSBjZWxsICovXHJcblx0Y29udGVudDogYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdHJvd1NwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0Y29sU3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIFN0eWxlIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBvciBgPHRoPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdHN0eWxlPzogU3R5bGVzZXQ7XHJcblxyXG5cdC8qKiBDbGFzcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgb3IgYDx0aD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRjbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUYWJsZVByb3BzIGNsYXNzIGRlZmluZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgVlRhYmxlXHJcbiAqIGNvbnN0cnVjdG9yLiBUaGUgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IGRlZmluZSB0aGUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIFZUYWJsZVxyXG4gKiBpbiBKU1ggd2hlbiBpdCBpcyB1c2VkIGFzIGEgbWFuYWdlZCBjb3BvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlUHJvcHNcclxue1xyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbENvbENvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiByb3dzICovXHJcblx0cm93T3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiBjb2x1bW5zICovXHJcblx0Y29sT3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBjZWxsIGRhdGEuICovXHJcblx0Z2V0Q2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGhlYWRlciByb3dzLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0Y29sSGVhZGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3IgY29sdW1uIGhlYWRlciBjZWxscy4gKi9cclxuXHRnZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgZm9vdGVyIHJvd3MuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRjb2xGb290ZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciBjb2x1bW4gZm9vdGVyIGNlbGxzLiAqL1xyXG5cdGdldENvbEZvb3RlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjZWxscyBpbiB0aGUgcm93IGhlYWRlci4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdHJvd0hlYWRlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIHJvdyBoZWFkZXIgY2VsbHMuICovXHJcblx0Z2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNlbGxzIGluIHRoZSByb3cgZm9vdGVyLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0cm93Rm9vdGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3Igcm93IGZvb3RlciBjZWxscy4gKi9cclxuXHRnZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiVmlydHVhbGl6ZWRcIiB0YWJsZSB0aGF0IHJlbmRlcnMgb25seSBhIHN1YnNldCBvZiBhIGRhdGFzZXQgYW5kIGNoYW5nZXMgdGhpcyBzdWJzZXRcclxuICogYXMgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIGFuZCBmb3J0aC5cclxuICogXHJcbiAqIFZUYWJsZSB1c2VzIHRoZSBmb2xsb3dpbmcgMyBET00gZWxlbWVudHM6XHJcbiAqICAtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggZGlzcGxheXMgdGhlIHNjcm9sbGJhcnMgd2hlbiBuZWNlc3NhcnlcclxuICogIC0gd2FsbCAtIHRoZSBcImlubmVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGhhcyB0aGUgc2l6ZSBvZiB0aGUgZW50aXJlIHBvc3NpYmxlIHRhYmxlLiBJdCBpc1xyXG4gKiAgICBuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKiAgLSB0YWJsZSAtIHRoZSBgPHRhYmxlPmAgZWxlbWVudCB0aGF0IGNvbnRhaW5zIG9ubHkgcm93cyBhbmQgY29sdW1ucyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1c1xyXG4gKiAgICBhIGNlcnRhaW4gbnVtYmVyIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWVGFibGUgY2FsY3VsYXRlcyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aCBieSBkaXZpZGluZyB0aGUgc2l6ZSBvZiB0aGUgdGFibGVcclxuICogYnkgdGhlIG51bWJlciBvZiByb3dzL2NvbHVtbnMuIFRoZXNlIGF2ZXJhZ2UgdmFsdWVzIGFyZSByZWNhbGN1bGF0ZWQgZXZlcnkgdGltZSByb3dzIGFuZFxyXG4gKiBjb2x1bW5zIGFyZSBhZGRlZCBvciBkZWxldGVkIGZyb20gdGhlIHRhYmxlLiBCYXNlZCBvbiB0aGVzZSBhdmVyYWdlIHZhbHVlcyB0aGUgd2FsbCBlbGVtZW50XHJcbiAqIGlzIHNpemVkIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxpbmdcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZUYWJsZSB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgb24gYWxsIHNpZGVzIG9mXHJcbiAqIHRoZSBmcmFtZSBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBhY3R1YWwgbnVtYmVyIG9mIHJvd3MvY29sdW1ucyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmRcclxuICogbWF4aW11bSB2YWx1ZXMuIER1cmluZyBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLFxyXG4gKiBuZXcgY2VsbHMgYXJlIGFkZGVkIGFuZCBpZiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSBjZWxscyBhcmUgZGVsZXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWVGFibGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFZUYWJsZVByb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBWVGFibGVQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gMDtcclxuXHRcdHRoaXMuYXZnQ29sV2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIG5lZ2F0aXZlIHZhbHVlcyBpbmRpY2F0ZSB0aGF0IHdlIGhhdmVuJ3QgbWVhc3VyZWQgYW55IHNpemVzIHlldC5cclxuXHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gLTE7XHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSAtMTtcclxuXHJcblx0XHQvLyBzZXQgaW5pdGlhbCBzaXplIG9mIHRoZSB3YWxsIGVsZW1lbnQgYmFzZWQgb24gc29tZSBoYXJkLWNvZGVkIHZhbHVlcy4gSXQgd2lsbCBiZVxyXG5cdFx0Ly8gY2hhbmdlZCBhcyBzb29uIGFzIHdlIHJlbmRlciBhbmQgc3RhcnQgbWVhc3VyaW5nIG91ciBlbGVtZW50c1xyXG5cdFx0dGhpcy53YWxsSGVpZ2h0ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50ICogMjU7XHJcblx0XHR0aGlzLndhbGxXaWR0aCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCAqIDgwO1xyXG5cclxuXHRcdHRoaXMubWluUm93T3ZlcnNjYW4gPSB0aGlzLnByb3BzLnJvd092ZXJzY2FuID8gdGhpcy5wcm9wcy5yb3dPdmVyc2NhblswXSA6IDM7XHJcblx0XHR0aGlzLm9wdFJvd092ZXJzY2FuID0gdGhpcy5wcm9wcy5yb3dPdmVyc2NhbiA/IHRoaXMucHJvcHMucm93T3ZlcnNjYW5bMV0gOiA2O1xyXG5cdFx0dGhpcy5tYXhSb3dPdmVyc2NhbiA9IHRoaXMucHJvcHMucm93T3ZlcnNjYW4gPyB0aGlzLnByb3BzLnJvd092ZXJzY2FuWzJdIDogMTI7XHJcblxyXG5cdFx0dGhpcy5taW5Db2xPdmVyc2NhbiA9IHRoaXMucHJvcHMuY29sT3ZlcnNjYW4gPyB0aGlzLnByb3BzLmNvbE92ZXJzY2FuWzBdIDogMztcclxuXHRcdHRoaXMub3B0Q29sT3ZlcnNjYW4gPSB0aGlzLnByb3BzLmNvbE92ZXJzY2FuID8gdGhpcy5wcm9wcy5jb2xPdmVyc2NhblsxXSA6IDY7XHJcblx0XHR0aGlzLm1heENvbE92ZXJzY2FuID0gdGhpcy5wcm9wcy5jb2xPdmVyc2NhbiA/IHRoaXMucHJvcHMuY29sT3ZlcnNjYW5bMl0gOiAxMjtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHQvLyBmaWxsIGluIGluaXRpYWwgZGF0YXNldFxyXG5cdFx0bGV0IHJvd0NvdW50ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDwgMTAgPyB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgOiAxMDtcclxuXHRcdGxldCBjb2xDb3VudCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbENvbENvdW50IDogMTA7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0Zm9yKCBsZXQgaiA9IDA7IGogPCBjb2xDb3VudDsgaisrKVxyXG5cdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGRhdGFzZXQgc2l6ZVxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IDA7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSByb3dDb3VudCAtIDE7XHJcblx0XHR0aGlzLmZpcnN0Q29sID0gMDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGNvbENvdW50IC0gMTtcclxuXHJcblx0XHR0aGlzLnZBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluUm93T3ZlcnNjYW4sIHRoaXMub3B0Um93T3ZlcnNjYW4sIHRoaXMubWF4Um93T3ZlcnNjYW4pXHJcblx0XHR0aGlzLmhBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluQ29sT3ZlcnNjYW4sIHRoaXMub3B0Q29sT3ZlcnNjYW4sIHRoaXMubWF4Q29sT3ZlcnNjYW4pXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcHJlcGFyZUxvY2FsU3R5bGVzKClcclxuXHR7XHJcblx0XHR0aGlzLmZyYW1lSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJmcmFtZVwiKTtcclxuXHRcdHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcImZyYW1lXCIsIFwiI2ZyYW1lKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzpcImF1dG9cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLndhbGxJRCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcIndhbGxcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ3YWxsXCIsIFwiI3dhbGwoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy50YWJsZUlEID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidGFibGVcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0YWJsZVwiLCBcIiN0YWJsZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwic29saWRcIiwgXCJibGFja1wiXSxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBkdXJpbmcgZWFjaCByZW5kZXJpbmcsIHdlIHNjaGVkdWxlIHRoZSBtZWFzdXJpbmcgZnVuY3Rpb25hbGl0eSwgd2hpY2ggd2lsbCBkZXRlcm1pbmdcclxuXHRcdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBUaGUgbWVhc3VyaW5nIGZ1bmN0aW9uIHdpbGwgcnVuIGluIHRoZSBuZXh0IHRpY2tcclxuXHRcdC8vIGFmdGVyIHRoZSByZW5kZXIgYW5kIHdpbGwgc2NoZWR1bGUgdXBkYXRlIGluIHRoZSBzYW1lIHRpY2sgaWYgbmVjZXNzYXJ5LlxyXG5cdFx0dGhpcy5jYWxsTWVCZWZvcmVVcGRhdGUoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSk7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9e3RoaXMuZnJhbWVJRH0gcmVmPXt0aGlzLmZyYW1lUmVmfSBzY3JvbGw9e3RoaXMub25TY3JvbGx9PlxyXG5cdFx0XHQ8ZGl2IGlkPXt0aGlzLndhbGxJRH0gcmVmPXt0aGlzLndhbGxSZWZ9PlxyXG5cdFx0XHRcdDx0YWJsZSBpZD17dGhpcy50YWJsZUlEfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG5cdFx0XHRcdFx0PHRib2R5Pnt0aGlzLnJlbmRlclJvd3N9PC90Ym9keT5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyUm93cygpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3dzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgY29sdW1uIGhlYWRlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENvbEhlYWRlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENvbEhlYWRlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgY29sdW1uIGZvb3Rlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENvbEZvb3RlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDb2xGb290ZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENvbEZvb3RlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgcm93IGhlYWRlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldFJvd0hlYWRlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3dIZWFkZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldFJvd0hlYWRlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgcm93IGZvb3Rlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldFJvd0Zvb3RlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldFJvd0Zvb3RlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvY2N1cGllZCBieSB0aGUgY3VycmVudCBkYXRhIHNldCByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW1vdmUgY2VsbHMuIElmIHdlIGRvLCB3ZSBzY2hlZHVsZSByZS1yZW5kZXJpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtZWFzdXJlQW5kVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb3dDb3VudCA9PT0gMCB8fCB0aGlzLmNvbENvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGZyYW1lUmVjdCA9IHRoaXMuZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgd2FsbFJlY3QgPSB0aGlzLndhbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgdGFibGVSZWN0ID0gdGhpcy50YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRpZiAodGhpcy5sYXRlc3RTY3JvbGxUb3AgIT0gdGhpcy5mcmFtZS5zY3JvbGxUb3ApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgTWVhc3VyaW5nIGhlaWdodDogc2Nyb2xsIHRvcCA9ICR7dGhpcy5mcmFtZS5zY3JvbGxUb3B9LCByb3dzOiAke3RoaXMucm93Q291bnR9LCBgICtcclxuXHRcdFx0Ly8gXHRcdFx0XHRgd2FsbCBoZWlnaHQgPSAke3dhbGxSZWN0LmhlaWdodH0sIHRhYmxlIGhlaWdodCA9ICR7dGFibGVSZWN0LmhlaWdodH1gKTtcclxuXHJcblx0XHRcdGxldCB2QXhpc0FjdGlvbiA9IHRoaXMudkF4aXMubWVhc3VyZSggdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50LCB0aGlzLmZpcnN0Um93LCB0aGlzLnJvd0NvdW50LFxyXG5cdFx0XHRcdHRoaXMuYXZnUm93SGVpZ2h0LCBmcmFtZVJlY3QuaGVpZ2h0LCB3YWxsUmVjdC5oZWlnaHQsIHRhYmxlUmVjdC5oZWlnaHQsIHRoaXMuZnJhbWUuc2Nyb2xsVG9wKTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgRXN0aW1hdGVkOiB3YWxsIGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCByb3cgaGVpZ2h0ID0gJHt2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZX1gKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCB0aGUgbGF0ZXN0IHZlcnRpY2FsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCA9IHZBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmxhdGVzdFNjcm9sbFRvcCA9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wO1xyXG5cclxuXHRcdFx0Ly8gYWRkL3JlbW92ZSByb3dzIGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAoIXZBeGlzQWN0aW9uLm5vQWRkUmVtb3ZlTmVlZGVkKVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlUm93cyggdkF4aXNBY3Rpb24pO1xyXG5cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRpbmcgb2Ygd2FsbCBoZWlnaHQgYW5kIHN1YnNldCB2ZXJ0aWNhbCBvZmZzZXQgaWYgbmVlZGVkXHJcblx0XHRcdGlmICh2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSAhPSB3YWxsUmVjdC5oZWlnaHQgfHwgdkF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICE9IHRhYmxlUmVjdC50b3AgLSB3YWxsUmVjdC50b3ApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZUFmdGVyVXBkYXRlKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlLnN0eWxlLnRvcCA9IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCArIFwicHhcIjtcclxuXHRcdFx0XHRcdHRoaXMud2FsbC5zdHlsZS5oZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSArIFwicHhcIjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbExlZnQgIT0gdGhpcy5mcmFtZS5zY3JvbGxMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyB3aWR0aDogc2Nyb2xsIGxlZnQgPSAke3RoaXMuZnJhbWUuc2Nyb2xsTGVmdH0sIGNvbHM6ICR7dGhpcy5jb2xDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIHdpZHRoID0gJHt3YWxsUmVjdC53aWR0aH0sIHRhYmxlIHdpZHRoID0gJHt0YWJsZVJlY3Qud2lkdGh9YCk7XHJcblxyXG5cdFx0XHRsZXQgaEF4aXNBY3Rpb24gPSB0aGlzLmhBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxDb2xDb3VudCwgdGhpcy5maXJzdENvbCwgdGhpcy5jb2xDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z0NvbFdpZHRoLCBmcmFtZVJlY3Qud2lkdGgsIHdhbGxSZWN0LndpZHRoLCB0YWJsZVJlY3Qud2lkdGgsIHRoaXMuZnJhbWUuc2Nyb2xsTGVmdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCB3aWR0aCA9ICR7aEF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCBjb2wgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIGNvbHVtbiB3aWR0aCBhbmQgdGhlIGxhdGVzdCBob3Jpem9udGFsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gaEF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCA9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgY29sdW1ucyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCFoQXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvbHMoIGhBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgd2lkdGggYW5kIHN1YnNldCBob3Jpem9udGFsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LndpZHRoIHx8IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QubGVmdCAtIHdhbGxSZWN0LmxlZnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZUFmdGVyVXBkYXRlKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlLnN0eWxlLmxlZnQgPSBoQXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgKyBcInB4XCI7XHJcblx0XHRcdFx0XHR0aGlzLndhbGwuc3R5bGUud2lkdGggPSBoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSArIFwicHhcIjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlbW92ZXMgcm93cyBhcyBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuIFNjcm9sbEF4aXNBY3Rpb24gZGVhbGluZyB3aXRoIHRoZSB2ZXJ0aWNhbFxyXG5cdCAqIHNjcm9sbGluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZVJvd3MoIGF4aXNBY3Rpb246IFNjcm9sbEF4aXNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY29uc29sZS5sb2coIGBVcGRhdGluZyByb3dzIGZyb20gJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fSB0byAke2F4aXNBY3Rpb24ubmV3Rmlyc3R9IC0gJHtheGlzQWN0aW9uLm5ld0xhc3R9YCk7XHJcblxyXG5cdFx0aWYgKGF4aXNBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5yb3dDb3VudH0gZXhpc3Rpbmcgcm93c2ApO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBpID0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaSA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbDsgaiA8PSB0aGlzLmxhc3RDb2w7IGorKylcclxuXHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFxyXG5cdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgZW5kXHJcblx0XHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLm5ld0xhc3QgLSBheGlzQWN0aW9uLm5ld0ZpcnN0ICsgMX0gcm93c2ApO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCB0aGlzLnJvd0NvdW50IC0gYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmR9IHJvd3MgZnJvbSBib3R0b21gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0fSByb3dzIGZyb20gdG9wYCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMubGFzdFJvdyArIDE7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kfSByb3dzIHRvIGJvdHRvbWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3cgLSAxOyBpID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGktLSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbDsgaiA8PSB0aGlzLmxhc3RDb2w7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIDAsIHZyb3cpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSByb3dzIHRvIHRvcGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RSb3cgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoIHRoaXMucmVuZGVyUm93cyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyBjb2x1bW5zIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlXHJcblx0ICogaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVDb2xzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgY29sdW1ucyBmcm9tICR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH0gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0dnJvdy5yZW1vdmVBbGxDZWxscygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5jb2xDb3VudH0gZXhpc3RpbmcgY29sc2ApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IGNvbHNgKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRFbmQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmR9IGNvbHMgZnJvbSByaWdodGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRTdGFydCggYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IGNvbHMgZnJvbSBsZWZ0YCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMubGFzdENvbCArIDE7IGogPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZH0gY29scyB0byByaWdodGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2wgLSAxOyBqID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGotLSlcclxuXHRcdFx0XHRcdFx0dnJvdy5pbnNlcnRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnR9IGNvbHMgdG8gbGVmdGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RDb2wgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Q29sID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uU2Nyb2xsKCBlOiBFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNhbGxNZUJlZm9yZVVwZGF0ZSggdGhpcy5tZWFzdXJlQW5kVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3ZlcnNjYW4gdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHRwcml2YXRlIG1pblJvd092ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRSb3dPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Um93T3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1pbkNvbE92ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRDb2xPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Q29sT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gQ3VycmVudCBkYXRhc2V0IHJlcHJlc2VudGVkIGJ5IHJvdyBjb21wb25lbnRzLlxyXG5cdHByaXZhdGUgcm93czogVlJvd1tdO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RSb3c6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3Qgcm93IGluIHRoZSBkYXRhc2V0IG9yIC0xIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBsYXN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAwIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBmaXJzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb3VudHMgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHByaXZhdGUgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RSb3cgLSB0aGlzLmZpcnN0Um93ICsgMSB9XHJcblx0cHJpdmF0ZSBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdENvbCAtIHRoaXMuZmlyc3RDb2wgKyAxIH1cclxuXHJcblx0cHVibGljIGdldCBSb3dzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fWA7IH1cclxuXHRwdWJsaWMgZ2V0IENvbHMoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9YDsgfVxyXG5cclxuXHQvLyBTaXplIG9mIHRoZSBlbnRpcmUgdGFibGUgYmFzZWQgb24gYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGguIFRoaXMgYmVjb21lcyB0aGVcclxuXHQvLyBzaXplIG9mIHRoZSB3YWxsLlxyXG5cdHByaXZhdGUgd2FsbEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgd2FsbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBjYWxjdWxhdGVkIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoXHJcblx0cHJpdmF0ZSBhdmdSb3dIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGF2Z0NvbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBzY3JvbGxpbmcgcG9zaXRpb25zXHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxUb3A6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhdGVzdFNjcm9sbExlZnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBmcmFtZSB0aGF0IGhhcyB0aGUgc2NvbGxiYXJzXHJcblx0cHJpdmF0ZSBmcmFtZTogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBmcmFtZVJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy5mcmFtZSA9IHI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgd2FsbCB0aGF0IGlzIGJpZyBlbm91Z2ggdG8gaG9sZCBlbnRpcmUgZGF0YXNldFxyXG5cdHByaXZhdGUgd2FsbDogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3YWxsUmVmID0gKHI6IEhUTUxEaXZFbGVtZW50KSA9PiB0aGlzLndhbGwgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHRhYmxlIHRoYXQgZGlzcGxheXMgdGhlIHBhcnRpYWwgZGF0YXNldFxyXG5cdHByaXZhdGUgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0YWJsZVJlZiA9IChyOiBIVE1MVGFibGVFbGVtZW50KSA9PiB0aGlzLnRhYmxlID0gcjtcclxuXHJcblx0Ly8gT2JqZWN0cyB0aGF0IGRlYWwgd2l0aCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuXHRwcml2YXRlIHZBeGlzOiBTY3JvbGxBeGlzO1xyXG5cdHByaXZhdGUgaEF4aXM6IFNjcm9sbEF4aXM7XHJcblxyXG5cdC8vIElEcyBvZiB2aXJ0dWFsIHRhYmxlIHBhcnRzXHJcblx0cHJpdmF0ZSBmcmFtZUlEOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB3YWxsSUQ6IHN0cmluZztcclxuXHRwcml2YXRlIHRhYmxlSUQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWUm93IGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y2VsbHM6IFZDZWxsW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY2VsbHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5wdXNoKCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbnNlcnRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIDAsIDAsIG5ldyBWQ2VsbCggZGF0YSkpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUFsbENlbGxzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdFN0YXJ0KCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCBjb3VudCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdEVuZCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggdGhpcy5jZWxscy5sZW5ndGggLSBjb3VudCwgY291bnQpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRyPnt0aGlzLmNlbGxzfTwvdHI+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWQ2VsbCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGRhdGE6IFZUYWJsZUNlbGxEYXRhO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggZGF0YTogYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBkYXRhLmNvbnRlbnQpXHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YSA9IHsgY29udGVudDogZGF0YSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kYXRhID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8dGQgY2xhc3M9e3RoaXMuZGF0YS5jbGFzc30gc3R5bGU9e3RoaXMuZGF0YS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0cm93c3Bhbj17dGhpcy5kYXRhLnJvd1NwYW4gPyB0aGlzLmRhdGEucm93U3BhbiA6IHVuZGVmaW5lZH1cclxuXHRcdFx0XHRcdFx0Y29sc3Bhbj17dGhpcy5kYXRhLmNvbFNwYW4gPyB0aGlzLmRhdGEuY29sU3BhbiA6IHVuZGVmaW5lZH0+XHJcblx0XHRcdFx0e3RoaXMuZGF0YS5jb250ZW50fVxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==