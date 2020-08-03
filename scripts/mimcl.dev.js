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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dnd/DragDropApi */ "./lib/dnd/DragDropApi.js"));
__export(__webpack_require__(/*! ./popup/Popup */ "./lib/popup/Popup.js"));
__export(__webpack_require__(/*! ./popup/Dialog */ "./lib/popup/Dialog.js"));
__export(__webpack_require__(/*! ./popup/MsgBox */ "./lib/popup/MsgBox.js"));
__export(__webpack_require__(/*! ./router/Router */ "./lib/router/Router.js"));
__export(__webpack_require__(/*! ./tree/TreeApi */ "./lib/tree/TreeApi.js"));
__export(__webpack_require__(/*! ./virt/ScrollAxis */ "./lib/virt/ScrollAxis.js"));
__export(__webpack_require__(/*! ./virt/VTable */ "./lib/virt/VTable.js"));
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
        mim.mountSync(this, this.anchorDiv);
        window.addEventListener("keydown", this.onKeyDown);
    }
    // Unrenders and destroys the dialog.
    destroy() {
        window.removeEventListener("keydown", this.onKeyDown);
        mim.unmountSync(this.anchorDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLGVBQWU7SUFFN0IsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFZLEVBQUUsSUFBUztRQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLElB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QUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNkO1NBQ0w7SUFDRixDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7OztBQzNwQkQsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoibWltY2wuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltYmxcIiwgXCJtaW11cmxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY2xcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY2xcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1ibFwiXSwgcm9vdFtcIm1pbXVybFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jbFR5cGVzLmpzXCIpO1xuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdBbmREcm9wRGF0YSBzdGF0aWMgY2xhc3MgZGVhbHMgd2l0aCBkYXRhIG9mIGFyYml0cmFyeSB0eXBlcyBiZWluZyB0cmFuc2ZlcmVkXHJcbi8vIGR1cmluZyBkcmFnICYgZHJvcCBvcGVyYXRpb25zLiBXaGVuIGEgZHJhZyBvcGVyYXRpb24gc3RhcnRzLCBwaWVjZXMgb2YgZGF0YSBhcmUgYWRkZWQgdG8gYSBtYXBcclxuLy8gd2l0aCB0eXBlcyAoZm9ybWF0cykgYXMga2V5cyAodGhlc2UgYXJlIHRoZSBzYW1lIGZvcm1hdHMgdGhhdCBhcmUga2VwdCBpbiB0aGUgSFRNTDUgRGF0YVRyYW5zZmVyXHJcbi8vIG9iamVjdC4gRGF0YSBpcyBhZGRlZCB1c2luZyB0aGUgU2V0T2JqZWN0RGF0YSBtZXRob2Qgb2YgdGhlIElEcmFnU3RhcnRFdmVudCBpbnRlcmZhY2UuIFdoZW4gdGhlXHJcbi8vIGRyb3Agb2NjdXJzLCB0aGUgR2V0T2JqZWN0RGF0YSBvZiB0aGUgSURyYWdUYXJnZXRFdmVudCBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBkYXRhLiBUaGUgbWFwIGlzXHJcbi8vIGNsZWFyZWQgd2hlbiB0aGUgZHJhZyBvcGVyYXRpb24gZW5kcyAtIHJlZ2FyZGxlc3Mgd2hldGhlciBpdCB3YXMgc3VjY2Vzc2Z1bCBvciB3YXMgY2FuY2VsZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHJhZ0FuZERyb3BEYXRhXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNldE9iamVjdERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdHlwZSB8fCBkYXRhID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5zZXQoIHR5cGUsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuZ2V0KCB0eXBlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlT2JqZWN0RGF0YSggdHlwZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmRlbGV0ZSggdHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNsZWFyQWxsT2JqZWN0RGF0YSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlIGluIHRoZSBnaXZlbiBEYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG5cdHB1YmxpYyBzdGF0aWMgaGFzVHlwZSggZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBFZGdlIGltcGxlbW50cyB0eXBlcyB2aWEgRE9NU3RyaW5nTGlzdCwgd2hjaWggZG9lc24ndCBoYXZlIGluZGV4T2ZcclxuXHRcdGlmIChkYXRhVHJhbnNmZXIudHlwZXMuaW5kZXhPZilcclxuXHRcdFx0cmV0dXJuIGRhdGFUcmFuc2Zlci50eXBlcy5pbmRleE9mKCB0eXBlKSA+PSAwO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKGRhdGFUcmFuc2Zlci50eXBlcyBhcyBhbnkgYXMgRE9NU3RyaW5nTGlzdCkuY29udGFpbnMoIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygb2JqZWN0IGZvcm1hdHMgdG8gb2JqZWN0IHZhbHVlcy5cclxuXHRwcml2YXRlIHN0YXRpYyBkYXRhTWFwOiBNYXA8c3RyaW5nLGFueT4gPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRW11bERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBvYmplY3RzIHRoYXQgZW11bGF0ZSBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW5cclxuLy8gdGhlIGRyYWcgc291cmNlIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVtdWxEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXJcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEVtdWxEYXRhVHJhbnNmZXIgZW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlbiB0aGUgZHJhZyBzb3VyY2UgZG9lcyBub3RcclxuLy8gc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVtdWxEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXIgaW1wbGVtZW50cyBJRW11bERhdGFUcmFuc2ZlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSBmYWxzZTtcclxuXHRcdHRoaXMuZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdC8vIFVzZXMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdXBkYXRlIHRoZSBkcmFnIGZlZWRiYWNrLCByZXBsYWNpbmcgYW55IHByZXZpb3VzbHkgc3BlY2lmaWVkXHJcblx0Ly8gZmVlZGJhY2suXHJcblx0cHVibGljIHNldERyYWdJbWFnZSggaW1hZ2U6IEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBpbWFnZTtcclxuXHRcdHRoaXMuaW1hZ2VFbG1YID0geDtcclxuXHRcdHRoaXMuaW1hZ2VFbG1ZID0geTtcclxuXHJcblx0XHQvLyBFZGdlIGRvZXNuJ3QgaGF2ZSBzZXREcmFnSW1hZ2UgbWV0aG9kIGluIGl0cyBEYXRhVHJhbnNmZXIgY2xhc3MuXHJcblx0XHRpZiAoc3VwZXIuc2V0RHJhZ0ltYWdlKVxyXG5cdFx0XHRzdXBlci5zZXREcmFnSW1hZ2UoIGltYWdlLCB4LCB5KTtcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGEgbmV3IGltYWdlIGVsZW1lbnQgd2FzIHNldCwgc28gdGhhdCB3ZSB3aWxsIFwicHJlcGFyZVwiIGl0IG9uIHRoZSBuZXh0XHJcblx0XHQvLyBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGVmZmVjdEFsbG93ZWQoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZWZmZWN0QWxsb3dlZEV4ID0gdmFsO1xyXG5cdFx0c3VwZXIuZWZmZWN0QWxsb3dlZCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RBbGxvd2VkKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdEFsbG93ZWRFeCA9PT0gdW5kZWZpbmVkID8gc3VwZXIuZWZmZWN0QWxsb3dlZCA6IHRoaXMuZWZmZWN0QWxsb3dlZEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZHJvcEVmZmVjdCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RXggPSB2YWw7XHJcblx0XHRzdXBlci5kcm9wRWZmZWN0ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGRyb3BFZmZlY3QoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcEVmZmVjdEV4ID09PSB1bmRlZmluZWQgPyBzdXBlci5kcm9wRWZmZWN0IDogdGhpcy5kcm9wRWZmZWN0RXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldERhdGEoIGZvcm1hdDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3VwZXIuc2V0RGF0YSggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YU1hcC5zZXQoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IHRoaXMuZGF0YU1hcC5nZXQoIGZvcm1hdCk7XHJcblx0XHRyZXR1cm4gcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHM7XHJcblx0fVxyXG5cclxuXHRjbGVhckRhdGEoIGZvcm1hdD86IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzdXBlci5jbGVhckRhdGEoIGZvcm1hdCk7XHJcblxyXG5cdFx0aWYgKGZvcm1hdClcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmRlbGV0ZSggZm9ybWF0KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmNsZWFyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXQgdHlwZXMoKTogc3RyaW5nW11cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhRm9ybWF0cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0cHVibGljIGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdHB1YmxpYyBpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRwdWJsaWMgaW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBhbGxvd2VkIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgYWxsb3dlZCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZWZmZWN0QWxsb3dlZEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgZHJvcCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGRyb3AgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBNYXAgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRvIGRhdGEgaXRlbXMuXHJcblx0cHJpdmF0ZSBkYXRhTWFwOiBNYXA8c3RyaW5nLHN0cmluZz47XHJcblxyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKS4gVGhpcyBhcnJheSBjaGFuZ2VzIGV2ZXJ5IHRpbWUgZGF0YSBpcyBzZXQgb3IgY2xlYXJlZC5cclxuXHRwcml2YXRlIGRhdGFGb3JtYXRzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIgZW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlbiB0aGUgZHJhZyBzb3VyY2VcclxuLy8gZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LiBUaGlzIG9iamVjdCBpcyB1c2VkIHVuZGVyIEVkZ2UsIHdoaWNoIGRvZXNuJ3RcclxuLy8gaW1wbGVtZW50IHRoZSBuYXRpdmUgRGF0YVRyYW5zZmVyIG9iamVjdCBwcm9wZXJseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyIGltcGxlbWVudHMgSUVtdWxEYXRhVHJhbnNmZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBbXTtcclxuXHRcdHRoaXMubV9pdGVtcyA9IG51bGw7XHJcblx0XHR0aGlzLm1fZmlsZXMgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byB1cGRhdGUgdGhlIGRyYWcgZmVlZGJhY2ssIHJlcGxhY2luZyBhbnkgcHJldmlvdXNseSBzcGVjaWZpZWRcclxuXHQvLyBmZWVkYmFjay5cclxuXHRwdWJsaWMgc2V0RHJhZ0ltYWdlKCBpbWFnZTogRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGltYWdlO1xyXG5cdFx0dGhpcy5pbWFnZUVsbVggPSB4O1xyXG5cdFx0dGhpcy5pbWFnZUVsbVkgPSB5O1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgYSBuZXcgaW1hZ2UgZWxlbWVudCB3YXMgc2V0LCBzbyB0aGF0IHdlIHdpbGwgXCJwcmVwYXJlXCIgaXQgb24gdGhlIG5leHRcclxuXHRcdC8vIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZWZmZWN0QWxsb3dlZCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5lZmZlY3RBbGxvd2VkRXggPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0QWxsb3dlZCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RBbGxvd2VkRXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBkcm9wRWZmZWN0KCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFeCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBkcm9wRWZmZWN0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BFZmZlY3RFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0RGF0YSggZm9ybWF0OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHR0aGlzLmRhdGFNYXAuc2V0KCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSB0aGlzLmRhdGFNYXAuZ2V0KCBmb3JtYXQpO1xyXG5cdFx0cmV0dXJuIHMgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJEYXRhKCBmb3JtYXQ/OiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKGZvcm1hdClcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmRlbGV0ZSggZm9ybWF0KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmNsZWFyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXQgdHlwZXMoKTogc3RyaW5nW11cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhRm9ybWF0cztcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICBnZXQgZmlsZXMoKTogRmlsZUxpc3QgeyByZXR1cm4gdGhpcy5tX2ZpbGVzOyB9XHJcbiAgICBnZXQgaXRlbXMoKTogRGF0YVRyYW5zZmVySXRlbUxpc3QgeyByZXR1cm4gdGhpcy5tX2l0ZW1zOyB9XHJcblxyXG5cclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRwdWJsaWMgaW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0cHVibGljIGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbWFnZUVsbVJlc2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgYWxsb3dlZCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGFsbG93ZWQgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGVmZmVjdEFsbG93ZWRFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGRyb3AgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBkcm9wIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RXg6IHN0cmluZztcclxuXHJcblx0Ly8gTWFwIG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0byBkYXRhIGl0ZW1zLlxyXG5cdHByaXZhdGUgZGF0YU1hcDogTWFwPHN0cmluZyxzdHJpbmc+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykuIFRoaXMgYXJyYXkgY2hhbmdlcyBldmVyeSB0aW1lIGRhdGEgaXMgc2V0IG9yIGNsZWFyZWQuXHJcblx0cHJpdmF0ZSBkYXRhRm9ybWF0czogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBtX2ZpbGVzOiBGaWxlTGlzdDtcclxuICAgIHByaXZhdGUgbV9pdGVtczogRGF0YVRyYW5zZmVySXRlbUxpc3Q7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnRHJvcEVmZmVjdCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBkcmFnICYgZHJvcCBlZmZlY3RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ0Ryb3BFZmZlY3Rcclxue1xyXG5cdE5vbmUgPSBcIm5vbmVcIixcclxuXHRDb3B5ID0gXCJjb3B5XCIsXHJcblx0TW92ZSA9IFwibW92ZVwiLFxyXG5cdExpbmsgPSBcImxpbmtcIixcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wRWZmZWN0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBmb3IgZGlmZmVyZW50IGRyYWcgJiBkcm9wIGVmZmVjdHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnQWxsb3dlZEVmZmVjdHNcclxue1xyXG5cdE5vbmUgPSBcIm5vbmVcIixcclxuXHRDb3B5ID0gXCJjb3B5XCIsXHJcblx0TW92ZSA9IFwibW92ZVwiLFxyXG5cdExpbmsgPSBcImxpbmtcIixcclxuXHRDb3B5TW92ZSA9IFwiY29weU1vdmVcIixcclxuXHRDb3B5TGluayA9IFwiY29weUxpbmtcIixcclxuXHRMaW5rTW92ZSA9IFwibGlua01vdmVcIixcclxuXHRBbGwgPSBcImFsbFwiLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdTb3VyY2VFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZXZlbnQgaGFuZGxlcnMgb24gdGhlXHJcbi8vIGRyYWcgc291cmNlIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1NvdXJjZUV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cmVhZG9ubHkgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcblxyXG5cdC8vIFNldHMgZGF0YSB3aXRoIHRoZSBnaXZlbiB0eXBlLiBGb3IgdGV4dCBkYXRhIHRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgTUlNRSB0eXBlcy5cclxuXHRzZXREYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1RhcmdldEV2ZW50IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBldmVudCBoYW5kbGVycyBvbiB0aGVcclxuLy8gZHJhZyB0YXJnZXQgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnVGFyZ2V0RXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRyZWFkb25seSBkcmFnRXZlbnQ6IERyYWdFdmVudDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnk7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciBmaWxlcyBhcmUgYmVpbmcgZHJhZ2dlZC5cclxuXHRoYXNGaWxlcygpOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnU291cmNlIGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyYWcgc291cmNlLiBJbXBsZW1lbnRhdGlvbnMgb2ZcclxuLy8gdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1NvdXJjZSBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBEYXRhIHRvIGJlXHJcbi8vIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIHN1cHBsaWVkIGJ5IGltcGxlbWVudGluZyB0aGUgb25EcmFnU3RhcnQgY2FsbGJhY2tcclxuLy8gYW5kIHVzaW5nIHRoZSBlLnNldERhdGEgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1NvdXJjZVxyXG57XHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIHN0YXJ0cyBmb3IgdGhlIGVsZW1lbnQuXHJcblx0b25EcmFnU3RhcnQ6IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gZW5kcy5cclxuXHRvbkRyYWdFbmQ/OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLlxyXG5cdG9uRHJhZz86IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVNpbXBsZURyYWdTb3VyY2UgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJhZyBzb3VyY2UuIEltcGxlbWVudGF0aW9uc1xyXG4vLyBvZiB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnU291cmNlIGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIERhdGEgdG9cclxuLy8gYmUgcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgc3VwcGxpZWQgZGlyZWN0bHkgdmlhIHRoZSBkYXRhIHByb3BlcnR5LiBUaGlzXHJcbi8vIGludGVyZmFjZSBhbGxvd3Mgc2ltcGxpZnlpbmcgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gd2l0aG91dCB0aGUgbmVlZCB0byBpbXBsZW1lbnQgYW55XHJcbi8vIGNhbGxiYWNrcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZURyYWdTb3VyY2Vcclxue1xyXG5cdC8vIE9iamVjdCBob2xkaW5nIGRhdGEgdG8gYmUgcGFzc2VkIGR1cmluZyBkcmFnIG9wZXJhdGlvbi4gRWFjaCBwaWVjZSBvZiBkYXRhIGlzIGlkZW50aWZpZWQgYnlcclxuXHQvLyBhIHVuaXF1ZSB0eXBlIChha2EgZm9ybWF0KSBzdHJpbmcuXHJcblx0ZGF0YTogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblxyXG5cdC8vIEFsbG93ZWQgZHJvcCBlZmZlY3RzLiBJZiBkZWZpbmVkLCB0aGlzIG1lbWJlciBpcyB1c2VkIG9ubHkgaWYgZWl0aGVyIHRoZSBvbkRyYWdTdGFydFxyXG5cdC8vIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIG9yIGl0IGRvZXNuJ3Qgc2V0IGFsbG93ZWQgZHJvcCBlZmZlY3RzLlxyXG5cdGFsbG93ZWRFZmZlY3RzPzogRHJhZ0FsbG93ZWRFZmZlY3RzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEcmFnIHNvdXJjZSBwcm9wZXJ0eSAoZHJhZ1NvdXJjZSkgY2FuIGhhdmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgc2hhcGVzOlxyXG4vL1x0LSBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgLSBkcmFnIGJlaGF2aW9yIGFuZCBkYXRhIHRvIGJlIHBhc3NlZCB3aXRoIGl0IGlzIGRldGVybWluZWRcclxuLy9cdFx0YnkgaW1wbGVtZW50aW5nIHRoZSByZWxldmFudCBjYWxsYmFja3MuXHJcbi8vXHQtIElTaW1wbGVEcmFnU291cmNlIGludGVyZmFjZSAtIGRhdGEgdG8gYmUgcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXNcclxuLy9cdFx0ZGVmaW5lZCBieSB0aGUgZGF0YSBwcm9wZXJ0eS5cclxuLy9cdC0gXCJlbG0tdGV4dFwiIHN0cmluZyAtIHRoZSBFbGVtZW50IG9iamVjdCBpcyB1c2VkIGFzIG9iamVjdCBkYXRhIGFuZCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudFxyXG4vL1x0XHRpcyB1c2VkIGFzIHRleHQgZGF0YS5cclxuLy9cdC0gXCJlbG0taHRtbFwiIHN0cmluZyAtIHRoZSBFbGVtZW50IG9iamVjdCBpcyB1c2VkIGFzIG9iamVjdCBkYXRhIGFuZCB0aGUgZWxlbWVudCdzIG91dGVySFRNTFxyXG4vL1x0XHRpcyB1c2VkIGFzIHRleHQgZGF0YS5cclxuLy9cdC0gdHJ1ZSAtIGVxdWl2YWxlbnQgdG8gXCJlbG0taHRtbFwiIHN0cmluZy5cclxuLy9cdC0gZmFsc2UgLSBkcmFnIGJlaGF2aW9yIGlzIHN1cHByZXNzZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBEcmFnU291cmNlUHJvcFR5cGUgPSBJRHJhZ1NvdXJjZSB8IElTaW1wbGVEcmFnU291cmNlIHwgYm9vbGVhbiB8IFwiZWxtLXRleHRcIiB8IFwiZWxtLWh0bWxcIjtcclxuXHJcblxyXG5cclxuLy8gU3RyaW5nIHVzZWQgYXMgYSB0eXBlIChha2EgZm9ybWF0KSB3aGVuIGFuIGVsZW1lbnQgb2JqZWN0IGlzIGJlaW5nIGRyYWdnZWQuXHJcbmV4cG9ydCBjb25zdCBETkRUWVBFX0VMRU1FTlQgPSBcImFwcGxpY2F0aW9uL0RPTUVsZW1lbnRcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcm9wIHRhcmdldC4gSW1wbGVtZW50YXRpb25zIG9mXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdUYXJnZXQgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gUmVjZWl2aW5nXHJcbi8vIGRhdGEgaXMgYWNjb21wbGlzaGVkIGJ5IGltcGxlbWVudGluZyB0aGUgb25Ecm9wIGNhbGxiYWNrIGFuZCBjYWxsaW5nIHRoZSBlLmdldERhdGEgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1RhcmdldFxyXG57XHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGVudGVycyB0aGUgZWxlbWVudCBib3VuZGFyeSBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uIFJldHVybnMgdHJ1ZSBpZiBkcm9wIGlzIHBvc3NpYmxlIGFuZCBmYWxzZSBvdGhlcndpc2UuIElmIHRoaXMgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIGltcGxlbWVudGVkLCBkcm9wIGlzIGNvbnNpZGVyZWQgcG9zc2libGUuIElmIHRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UsIHRoZSBvbkRyYWdPdmVyXHJcblx0Ly8gYW5kIG9uRHJhZ0xlYXZlIG1ldGhvZHMgd2lsbCBub3QgYmUgY2FsbGVkLlxyXG5cdG9uRHJhZ0VudGVyPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IGJvb2xlYW47XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBob3ZlcnMgb3ZlciB0aGUgZWxlbWVudCBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uIFJldHVybnMgdHJ1ZSBpZiBkcm9wIGlzIHBvc3NpYmxlIGFuZCBmYWxzZSBvdGhlcndpc2UuIElmIHRoaXMgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIGltcGxlbWVudGVkLCBkcm9wIGlzIGNvbnNpZGVyZWQgcG9zc2libGUuIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUgb3JcclxuXHQvLyBmYWxzZSwgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIHdpbGwgYmUgY29udGludWVkIHRvIGJlIGNhbGxlZCBhcyB0aGUgbW91c2UgbW92ZXMuIFRoaXMgYWxsb3dzXHJcblx0Ly8gc29tZSBwYXJ0cyBvZiB0aGUgZWxlbWVudCB0byBiZSBkcm9wIHRhcmdldHMgd2hpbGUgb3RoZXJzIG5vdC5cclxuXHRvbkRyYWdPdmVyPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IGJvb2xlYW47XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBsZWF2ZXMgdGhlIGVsZW1lbnQgYm91bmRhcnkgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLlxyXG5cdG9uRHJhZ0xlYXZlPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRhdGEgd2FzIGRyb3BlZCBpbiB0aGlzIGRyb3Agem9uZS5cclxuXHRvbkRyb3A6IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVNpbXBsZURyYWdUYXJnZXQgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJvcCB0YXJnZXQuIEltcGxlbWVudGF0aW9uc1xyXG4vLyBvZiB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnVGFyZ2V0IGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIFJlY2VpdmluZ1xyXG4vLyBkYXRhIGlzIGFjY29tcGxpc2hlZCBieSBzcGVjaWZ5aW5nIHRoZSBleHBlY3RlZCB0eXBlcyB2aWEgdGhlIGRhdGFUeXBlcyBwcm9wZXJ0eSBhbmRcclxuLy8gaW1wbGVtZW50aW5nIHRoZSBvbkRhdGFEcm9wcGVkIGNhbGxiYWNrLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRHJhZ1RhcmdldFxyXG57XHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRoYXQgdGhlIGRyYWcgdGFyZ2V0IGNhbiByZWNlaXZlLlxyXG5cdGRhdGFUeXBlczogc3RyaW5nW107XHJcblxyXG5cdC8vIFN0eWxlIHRvIGFwcGx5IGZvciBkcmFnIGZlZWRiYWNrLlxyXG5cdGZlZWRiYWNrPzogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBkYXRhIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgYXBwcm9wcmlhdGUgdHlwZXMgaXMgZHJvcHBlZC5cclxuXHQvLyBUaGUgZGF0YSBpcyBkZWxpdmVyZWQgYXMgYW4gb2JqZWN0IHdoZXJlIHByb3BlcnR5IG5hbWVzIGFyZSBkYXRhIHR5cGVzIGFuZCB2YWx1ZXMgYXJlXHJcblx0Ly8gZGF0YSBwaWVjZXMgb2YgdGhlc2UgdHlwZXMuXHJcblx0b25EYXRhRHJvcHBlZDogKGRhdGE6IHtbdHlwZTogc3RyaW5nXTogYW55fSkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBEcmFnIHRhcmdldCBwcm9wZXJ0eSAoZHJhZ1RhcmdldCkgY2FuIGJlIGVpdGhlciBJRHJhZ1RhcmdldCBpbnRlcmZhY2Ugb3IgcmVmZXJlbmNlIHRvIGFuXHJcbi8vIEVsZW1lbnQuIEluIHRoZSBsYXR0ZXIgY2FzZSwgdGhlIHJlZmVyZW5jZSB3aWxsIGJlIHNldCBpZiB0aGUgZGF0YSBiZWluZyBkcmFnZ2VkIGlzIGFuXHJcbi8vIEVsZW1lbnQgb2JqZWN0LlxyXG5leHBvcnQgdHlwZSBEcmFnVGFyZ2V0UHJvcFR5cGUgPSBJRHJhZ1RhcmdldCB8IElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIm1pbWJsL2xpYi9hcGkvbWltXCJcclxue1xyXG5cdGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuPlxyXG5cdHtcclxuXHRcdGRyYWdTb3VyY2U/OiBEcmFnU291cmNlUHJvcFR5cGU7XHJcblx0XHRkcmFnVGFyZ2V0PzogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnU291cmNlSGFuZGxlciwgRHJhZ1NvdXJjZUVtdWxhdG9yfSBmcm9tIFwiLi9EcmFnU291cmNlXCJcclxuaW1wb3J0IHtEcmFnVGFyZ2V0SGFuZGxlcn0gZnJvbSBcIi4vRHJhZ1RhcmdldFwiXHJcbmltcG9ydCB7IERyYWdTb3VyY2VQcm9wVHlwZSwgRHJhZ1RhcmdldFByb3BUeXBlIH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1NvdXJjZVByb3BUeXBlPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5jdXJyVmFsID0gcHJvcFZhbDtcclxuXHRcdHRoaXMuYWRkKCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm1pbmF0ZSggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHR0aGlzLmVsbVZOID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCBuZXdQcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3VyclZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyVmFsKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLmFkZCggbmV3UHJvcFZhbCBhcyBEcmFnU291cmNlUHJvcFR5cGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyVmFsID0gbmV3UHJvcFZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgYWRkKCBwcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtVk4uZWxtIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlciA9IFwib3duZXJTVkdFbGVtZW50XCIgaW4gZWxtXHJcblx0XHRcdFx0XHQ/IG5ldyBEcmFnU291cmNlRW11bGF0b3IoIGVsbSwgcHJvcFZhbClcclxuXHRcdFx0XHRcdDogbmV3IERyYWdTb3VyY2VIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIuaW5pdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbW92ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIudGVybSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFZW1lbnQgbm9kZSBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHRwcml2YXRlIGVsbVZOOiBtaW0uSUVsbVZOO1xyXG5cclxuXHQvLyBjdXJyZW50IGF0dHJpYnV0ZSB2YWx1ZVxyXG5cdGN1cnJWYWw6IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgaGFuZGxlcyBkcmFnIHNvdXJjZSBvcGVydGlvbnMuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlSGFuZGxlcjogRHJhZ1NvdXJjZUhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1RhcmdldFByb3BUeXBlPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5jdXJyVmFsID0gcHJvcFZhbDtcclxuXHRcdHRoaXMuYWRkKCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm1pbmF0ZSggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHR0aGlzLmVsbVZOID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCBuZXdQcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3VyclZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyVmFsKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLmFkZCggbmV3UHJvcFZhbCBhcyBEcmFnVGFyZ2V0UHJvcFR5cGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyVmFsID0gbmV3UHJvcFZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgYWRkKCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtVk4uZWxtIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlciA9IG5ldyBEcmFnVGFyZ2V0SGFuZGxlciggZWxtLCBwcm9wVmFsKTtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIuaW5pdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbW92ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIudGVybSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFZW1lbnQgbm9kZSBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHRwcml2YXRlIGVsbVZOOiBtaW0uSUVsbVZOO1xyXG5cclxuXHQvLyBjdXJyZW50IGF0dHJpYnV0ZSB2YWx1ZVxyXG5cdGN1cnJWYWw6IERyYWdUYXJnZXRQcm9wVHlwZTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgaGFuZGxlcyBkcmFnIHRhcmdldCBvcGVydGlvbnMuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0SGFuZGxlcjogRHJhZ1RhcmdldEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVnaXN0ZXIgY3VzdG9tIHByb3BlcnR5IGZhY3RvcnkgZm9yIGRyYWdTb3VyY2UgYW5kIGRyYWdUYXJnZXQgcHJvcGVydGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXMoKVxyXG57XHJcblx0bWltLnJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlKCBcImRyYWdTb3VyY2VcIiwgRHJhZ1NvdXJjZUN1c3RvbUVsbVByb3BIYW5kbGVyKTtcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1RhcmdldFwiLCBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIpO1xyXG59XHJcbiIsIu+7v2ltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdBbGxvd2VkRWZmZWN0cywgRHJhZ1NvdXJjZVByb3BUeXBlLCBJRHJhZ1NvdXJjZSwgSVNpbXBsZURyYWdTb3VyY2UsIElEcmFnU291cmNlRXZlbnQsIERORFRZUEVfRUxFTUVOVH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGEsIElFbXVsRGF0YVRyYW5zZmVyLCBFbXVsRGF0YVRyYW5zZmVyLCBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyfSBmcm9tIFwiLi9EYXRhVHJhbnNmZXJcIjtcclxuXHJcblxyXG5cclxudHlwZSBEcmFnRXZlbnRUeXBlID0gXCJkcmFnXCIgfCBcImRyYWdlbmRcIiB8IFwiZHJhZ2VudGVyXCIgfCBcImRyYWdleGl0XCIgfCBcImRyYWdsZWF2ZVwiIHwgXCJkcmFnb3ZlclwiIHwgXCJkcmFnc3RhcnRcIiB8IFwiZHJvcFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTdGFydEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlRXZlbnQgaW1wbGVtZW50cyBJRHJhZ1NvdXJjZUV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggdHlwZSwgXCJcIik7XHJcblx0XHRcdERyYWdBbmREcm9wRGF0YS5zZXRPYmplY3REYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VCZWhhdmlvciBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdGhhdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVuIG1lY2hhbmlzbXNcclxuLy8gc2V0dXAgYnkgZGlmZmVyZW50IHR5cGVzIG9mIHRoZSBkcmFnU291cmNlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ1NvdXJjZUJlaGF2aW9yXHJcbntcclxuXHRSZWd1bGFyID0gMSxcclxuXHRTaW1wbGUsXHJcblx0RWxtVGV4dCxcclxuXHRFbG1IdG1sXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlSGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3Agc291cmNlIGZ1bmN0aW9uYWxpdHkuIEl0XHJcbi8vIGlzIHVzZWQgYnkgSFRNTCBlbGVtZW50cyB0aGF0IG5hdGl2ZWx5IHN1cHBvcnQgZHJhZyBhbmQgZHJvcCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2VQcm9wOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0gPSBlbG07XHJcblxyXG5cdFx0aWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS10ZXh0XCIpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtVGV4dDtcclxuXHRcdGVsc2UgaWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS1odG1sXCIgfHwgZHJhZ1NvdXJjZVByb3AgPT09IHRydWUpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtSHRtbDtcclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZSkuZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLlNpbXBsZTtcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSVNpbXBsZURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2UpLm9uRHJhZ1N0YXJ0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcjtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB2YWx1ZSBvZiBkcmFnU291cmNlUHJvcCBpbiBEcmFnU291cmNlSGFuZGxlciBjb25zdHJ1Y3Rvci5cIik7XHJcblx0XHQvLy8gI2VuZGlmXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgbWFraW5nIHRoZSBlbGVtZW50IGRyYWdnYWJsZSBieSBhZGRpbmcgZHJhZyBldmVudHMuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50ID0gbmV3IERyYWdTb3VyY2VFdmVudCgpO1xyXG5cdFx0dGhpcy5lbG0uc2V0QXR0cmlidXRlKCBcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGRyYWcgZXZlbnQgaGFuZGxlcnMgZnJvbSB0aGUgZWxlbWVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHJcblx0XHR0aGlzLmVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIpO1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXIgZm9yIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdTdGFydCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGRhdGEgbWFwIC0ganVzdCBpbiBjYXNlXHJcblx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBkYXRhVHlwZSBpbiB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YSlcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBkYXRhVHlwZSwgdGhpcy5zaW1wbGVEcmFnU291cmNlLmRhdGFbZGF0YVR5cGVdKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5zaW1wbGVEcmFnU291cmNlLmFsbG93ZWRFZmZlY3RzO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiBvbkRyYWdTdGFydCBtZXRob2QgaXMgZGVmaW5lZCwgaW52b2tlIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydClcclxuXHRcdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydCggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggRE5EVFlQRV9FTEVNRU5ULCB0aGlzLmVsbSk7XHJcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0KVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS5vdXRlckhUTUwpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnZW5kIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdFbmQgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yICE9PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZpbmFsbHlcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWcgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLy8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHdlIG5lZWQgdG8gaW1wbGVtZW50IGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3I7IHRoYXQgaXMsIHdlIHNob3VsZFxyXG5cdC8vLy8gcGFzcyB0aGUgZWxlbWVudCBvYmplY3QgYXMgZGF0YSBiZWluZyBkcmFnZ2VkLiBOb3RlIHRoYXQgZWl0aGVyIHRoaXMgZmxhZyBpcyB0cnVlIG9yXHJcblx0Ly8vLyB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdC8vcHVibGljIGRlZmF1bHREcmFnU291cmNlQmVoYXZpb3JFbmFibGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBUeXBlIG9mIGRyYWcgc291cmNlIG1lY2hhbmlzbSBkZXRlcm1pbmVkIGJ5IHRoZSBkcmFnU291cmNlIHByb3BlcnR5XHJcblx0cHJvdGVjdGVkIGJlaGF2aW9yOiBEcmFnU291cmNlQmVoYXZpb3I7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2U6IElEcmFnU291cmNlO1xyXG5cclxuXHQvLyBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgc291cmNlLiBUaGlzIHByb3BlcnR5IGNhbiBiZVxyXG5cdC8vIHVuZGVmaW5lZCBpZiBlaXRoZXIgd2UgYXJlIGltcGxlbWVudGluZyBhIGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3IuXHJcblx0cHJpdmF0ZSBzaW1wbGVEcmFnU291cmNlOiBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHNvdXJjZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZUV2ZW50OiBEcmFnU291cmNlRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlRW11bGF0b3IgY2xhc3MgZW11bGF0ZXMgc3VwcG9ydCBmb3IgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eSB2aWEgbW91c2VcclxuLy8gZXZlbnRzLiBJdCBpcyB1c2VkIGZvciBET00gZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIG5hdGl2ZSBkcmFnIGFuZCBkcm9wIHN1cG9ydCAtIGUuZy4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdTb3VyY2VFbXVsYXRvciBleHRlbmRzIERyYWdTb3VyY2VIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnU291cmNlOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGVsbSwgZHJhZ1NvdXJjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgYWRkaW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyBpbml0KClcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRlcm1pbmF0ZXMgdGhlIG9iamVjdCBieSByZW1vdmluZyBhIG1vdXNlZG93biBldmVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0c3VwZXIudGVybSgpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1lbWJlciB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlLWRvd24gZXZlbnQgYW5kIHN0YXJ0IHdhdGNoaW5nIG1vdXNlIG1vdmVtZW50XHJcblx0Ly8oYW5kIG90aGVyKSBldmVudHMuXHJcblx0cHJpdmF0ZSBvbk1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGlnbm9yZSBub24tcHJpbWFyeSBtb3VzZSBidXR0b25zXHJcblx0XHRpZiAoZS5idXR0b24gIT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1lYmVyIGNvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50XHJcblx0XHR0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XHJcblx0XHR0aGlzLm1vdXNlRG93blkgPSBlLmNsaWVudFk7XHJcblxyXG5cdFx0Ly8gc3RhcnQgbGlzdGVuaW5nIHRvIHNldmVyYWwgRG5EIHJlbGF0ZWQgZXZlbnRzIG9uIHRoZSBkb2N1bWVudC5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBFaXRoZXIgc3RhcnQgb3IgY29udGludWUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gcHJpbWFyeSBidXR0b24gbXVzdCBiZSBzdGlsbCBwcmVzc2VkXHJcblx0XHRpZiAoKGUuYnV0dG9ucyAmIDEpID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbmVlZCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIC0gb3RoZXJ3aXNlIHRleHQgd2lsbCBiZSBzZWxlY3RlZCBvbiB0aGUgcGFnZS5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyBpZiBEbkQgb3BlcmF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MgZmlyZSBldmVudHM7IG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB0aGVcclxuXHRcdC8vIG1vdXNlIG1vdmVkIGVub3VnaCB0byBzdGFydCB0aGUgb3BlcmF0aW9uLlxyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN4ID0gZS5jbGllbnRYIC0gdGhpcy5tb3VzZURvd25YO1xyXG5cdFx0XHRsZXQgY3kgPSBlLmNsaWVudFkgLSB0aGlzLm1vdXNlRG93blk7XHJcblx0XHRcdGlmIChjeCA+PSAtMiAmJiBjeCA8PSAyICYmIGN5ID49IC0yICYmIGN5IDw9IDIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFxyXG5cdFx0XHR0aGlzLmluaXRpYXRlRHJhZ09wZXJhdGlvbiggZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBvbk1vdXNlVXAgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJvcCggZSk7XHJcblxyXG5cdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIEVzY2FwZSAtIGNhbmNlbCBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvblxyXG5cdFx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5jYW5jZWxEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHJcblx0XHRcdHRoaXMuY2xlYW51cERyYWdPcGVyYXRpb24oKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUtleUV2ZW50KCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5dXAgZXZlbnRzXHJcblx0cHJpdmF0ZSBvbktleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhdGVzIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBpbml0aWF0ZURyYWdPcGVyYXRpb24oIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKFwic2V0RHJhZ0ltYWdlXCIgaW4gRGF0YVRyYW5zZmVyLnByb3RvdHlwZSlcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxEYXRhVHJhbnNmZXIoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ1N0YXJ0IGV2ZW50IC0gaWYgdGhlIGRlZmF1bHQgYWN0aW9uIGlzIHByZXZlbnRlZCwgd2UgY2FuY2VsIHRoZSBvcGVyYXRpb25cclxuXHRcdGxldCBkcmFnc3RhcnRFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnc3RhcnRcIik7XHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCBkcmFnc3RhcnRFdmVudCk7XHJcblx0XHRpZiAoZHJhZ3N0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRyYWcgc291cmNlIGRpZG4ndCBzZXQgYW4gZWxlbWVudCBmb3IgZHJhZyBpbWFnZSwgdXNlIHRoZSBlbGVtZW50IGl0c2VsZi5cclxuXHRcdGlmICghdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2FsY3VsdGUgZHJhZyBpbWFnZSBjb29yZGluYXRlcyBzbyB0aGF0IGluaXRpYWxseSB0aGUgZHJhZyBpbWFnZSBjb2luc2lkZXMgd2l0aFxyXG5cdFx0XHQvLyB0aGUgb3JpZ2luYWwgaW1hZ2VcclxuXHRcdFx0bGV0IHJjOiBDbGllbnRSZWN0ID0gdGhpcy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoIHRoaXMuZWxtLCBlLmNsaWVudFggLSByYy5sZWZ0LCBlLmNsaWVudFkgLSByYy50b3ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgd2UgZG9uJ3Qga25vdyBsYXN0IHRhcmdldCB5ZXRcclxuXHRcdHRoaXMubGFzdFRhcmdldCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSBhIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5oYW5kbGVEcmFnU3RlcCggZSk7XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZSBvbmUgc3RlcCBvZiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiwgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIG1vdXNlIG1vdmVzXHJcblx0cHJpdmF0ZSBoYW5kbGVEcmFnU3RlcCggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlSW1hZ2VFbGVtZW50KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pc0ltYWdlRWxtUmVzZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBiZWZvcmUgc2VuZGluZyBkcmFnb3ZlciBldmVudCB3ZSBzZXQgdGhlIGRyb3BFZmZlY3QgdG8gbm9uZSwgYW5kIHRoZSBkcm9wb3ZlciBoYW5kbGVyXHJcblx0XHQvLyBjb3VsZCBzZXQgaXQgdG8gc29tZXRoaW5nIGVsc2UgaWYgZGVzaXJlZFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHQvLyBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pIHRoaXMuaW1hZ2VFbG0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdGxldCBuZXdUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdGlmIChuZXdUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGFyZSBvbiB0aGUgc2FtZSB0YXJnZXQgYXMgdGhlIHByZXZpb3VzIG1vdXNlIG1vdmUsIGp1c3Qgc2VuZCBkcmFnb3ZlciAoaWZcclxuXHRcdFx0Ly8gdGhlIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKG5ld1RhcmdldCA9PT0gdGhpcy5sYXN0VGFyZ2V0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc2VuZCBkcmFnZW50ZXIgdG8gdGhlIG5ldyB0YXJnZXQgYW5kIGRldGVybWluZSB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcFxyXG5cdFx0XHRcdC8vIHpvbmVcclxuXHRcdFx0XHRsZXQgZHJhZ2VudGVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2VudGVyXCIpO1xyXG5cdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnZW50ZXJFdmVudCk7XHJcblx0XHRcdFx0bGV0IGlzTmV3VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuID0gZHJhZ2VudGVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHJcblx0XHRcdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHRhcmdldCBhbmQgd2hldGhlciBpdCBpcyBhIHZhbGlkIGRyb3Agem9uZVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldCA9IG5ld1RhcmdldDtcclxuXHRcdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBpc05ld1RhcmdldERyb3BwYWJsZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3VyIG5ldyB0YXJnZXQgaXMgZHJvcHBhYmFsZSwgc2VuZCBkcmFnb3ZlciB0byBpdFxyXG5cdFx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnb3ZlckV2ZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGRvbnQgaGF2ZSBuZXcgdGFyZ2V0IGJ1dCBoYXZlIGxhc3Qgb25lIHRhcmdldCwgc2VuZCBkcmFnbGVhdmUgdG8gdGhlIGxhc3Qgb25lXHJcblx0XHRcdC8vIChpZiB0aGUgbGFzdCB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUpXHJcblx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ1wiKSk7XHJcblxyXG5cdFx0Ly8gbW92ZSB0aGUgZHJhZyBpbWFnZSBlbGVtZW50IHRvIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYIC0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS50b3AgPSBlLmNsaWVudFkgLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRpZiAodGhpcy5kcm9wRWZmZWN0RWxtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdHRoaXMuc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0KTtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmxlZnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgMTIgKyBcInB4XCI7XHJcblx0XHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS50b3AgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgMCArIFwicHhcIjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBsYXN0IG1vdXNlIGV2ZW50IC0gd2UgbWF5IHVzZSBpdCB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMgaWYgd2UgbmVlZCB0b1xyXG5cdFx0Ly8gZGlzcGF0Y2ggZHJhZyBldmVudHMgdXBvbiBrZXlib2FyZCBldmVudHMgKGUuZy4gY2FuY2VsIG9wZXJhdGlvbiB3aGVuIEVzY2FwZSBpcyBwcmVzc2VkXHJcblx0XHQvLyBvciBkcmFnb3ZlciBldmVudCBpZiBDdHJsLCBBbHQgb3IgU2hpZnQgYnV0dG9ucyBhcmUgcHJlc3NlZCkuXHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gZTtcclxufTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIGR1cmluZyBkcmFnIG9wZXJhdGlvbiBieSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50LlxyXG5cdHByaXZhdGUgaGFuZGxlS2V5RXZlbnQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0ICYmIHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBUYWtlcyB0aGUgaW1hZ2UgZWxlbWVudCAoaWYgYW55KSBzcGVjaWZpZWQgdmlhIHRoZSBjYWxsIHRvIHNldERyYWdJbWFnZSBhbmQgY2xvbmVzIGl0IGludG9cclxuXHQvLyBhIHNwZWNpYWwgZGl2IHRoYXQgd2lsbCBiZSBzaG93biBkdXJpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBwcmVwYXJlSW1hZ2VFbGVtZW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHByZXZpb3VzIGltYWdlIGVsZW1lbnQsIHJlbW92ZSBpdCBub3dcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID09IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3JnRWxtOiBFbGVtZW50ID0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtO1xyXG5cdFx0aWYgKCFvcmdFbG0pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCwgd2hpY2ggd2lsbCB3cmFwIHRoZSBpbWFnZSBlbGVtZW50IGFuZCB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG5cdFx0Ly8gZG9jdW1lbnQgYm9keSB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGxldCBkaXZFbG06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblxyXG5cdFx0Ly8gY2xvbmUgdGhlIG9yaWdpbmFsIGVsZW1lbnQgYmVjYXVzZSB3ZSBhcmUgZ29pbmcgdG8gbW92ZSBpdCBhcm91bmQuXHJcblx0XHRsZXQgY2xvbmVkRWxtOiBFbGVtZW50ID0gb3JnRWxtLmNsb25lTm9kZSgpIGFzIEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGltYWdlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgaXMgYW4gU1ZHIGVsZW1lbnQgYnV0IG5vdCB0aGUgPHN2Zz4gZWxlbWVudFxyXG5cdFx0Ly8gaXRzZWxmLCB0aGVuIHdyYXAgaXQgaW4gYW4gPHN2Zz4gZWxlbWVudC5cclxuXHRcdGlmIChtaW0uaXNTdmcoIG9yZ0VsbSkgJiYgIW1pbS5pc1N2Z1N2Zyggb3JnRWxtKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN2Z0VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHRcdFx0c3ZnRWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cdFx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHN2Z0VsbSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggY2xvbmVkRWxtKTtcclxuXHJcblx0XHQvLyBzdHlsZSB0aGUgZGl2IGVsZW1lbnQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbmluZyBhbmQgc29tZSBvcGFjaXR5XHJcblx0XHRkaXZFbG0uc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcblx0XHRkaXZFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblxyXG5cdFx0Ly8gYWRkIGEgc3BhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIFwiZHJvcEVmZmVjdFwiIGltYWdlXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNwYW5cIik7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHRoaXMuZHJvcEVmZmVjdEVsbSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2RWxtKTtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBkaXZFbG07XHJcblxyXG5cdFx0Ly8gY29tcGFyZSB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IHNldCB2aWEgc2V0RHJhZ0ltYWdlIGFuZCB0aGUgd3JhcHBpbmcgZGl2XHJcblx0XHQvLyBlbGVtZW50LiBUaGVpciB0b3AtbGVmdCBjb29yZGluYXRlcyBtYXkgbm90IGNvaW5zaWRlIGR1ZSB0byBzZXZlcmFsIGZhY3RvcnMgKGUuZy5cclxuXHRcdC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIG9yIFNWRyBjb29yZGluYXRlcykuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGFkanVzdCB0aGUgeCBhbmQgeVxyXG5cdFx0Ly8gY29vcmRpbmF0ZXMgaW4gdGhlIEVtdWxEYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG5cdFx0bGV0IHJjQ2xvbmVkRWxtOiBDbGllbnRSZWN0ID0gY2xvbmVkRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjRGl2RWxtOiBDbGllbnRSZWN0ID0gZGl2RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLmxlZnQgIT0gcmNEaXZFbG0ubGVmdClcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArPSByY0Nsb25lZEVsbS5sZWZ0IC0gcmNEaXZFbG0ubGVmdDtcclxuXHRcdGlmIChyY0Nsb25lZEVsbS50b3AgIT0gcmNEaXZFbG0udG9wKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICs9IHJjQ2xvbmVkRWxtLnRvcCAtIHJjRGl2RWxtLnRvcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheSBzbWFsbCBpbWFnZSBpbmRpY2F0aW5nIHdoYXQgZHJvcCBlZmZlY3QgaXMgZXhwZWN0ZWRcclxuXHRwcml2YXRlIHNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjbGFzc05hbWU6IHN0cmluZztcclxuXHRcdGxldCBjb2xvcjogc3RyaW5nO1xyXG5cdFx0c3dpdGNoKCBkcm9wRWZmZWN0KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFwibm9uZVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtYmFuXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcInJlZFwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImNvcHlcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXBsdXNcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiZ3JlZW5cIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJsaW5rXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1saW5rXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcImJsdWVcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmxhY2tcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBoYW5kbGVEcm9wKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGRvbid0IG5lZWQgdG8gZmluZCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3IgYmVjYXVzZSBkcm9wIGFsd2F5cyBvY2N1cnMgb24gdGhlIGxhc3RcclxuXHRcdC8vIGZvdW5kIHRhcmdldCAob3Igbm8gdGFyZ2V0IGF0IGFsbClcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0KVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyb3BcIikpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCAgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbCBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIGNhbmNlbERyYWdPcGVyYXRpb24oIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBEbkQgd2FzIGNhbmNlbGVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIHNlbmQgdGhlIGxhc3QgdGFyZ2V0IChpZiBleGlzdHMgYW5kIGlzIGRyb3BwYWJsZSkgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0Ly8gZmlyZSBvbkRyYWdFbmQgZXZlbnRcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2VuZFwiKSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbiB1cCBhZnRlciBkcmFnIG9wZXJhdGlvbiBmaW5pc2hlcyB3aXRoIGVpdGhlciBkcm9wIG9yIGNhbmNlbGF0aW9uXHJcblx0cHJpdmF0ZSBjbGVhbnVwRHJhZ09wZXJhdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gZGVzdHJveSB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGU9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXN0TW91c2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5yZW1vdmUoKTtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIGNyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIE1vdXNlRXZlbnQgYW5kIHRoZSBzdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdHByaXZhdGUgY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGU6IE1vdXNlRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUpOiBEcmFnRXZlbnRcclxuXHR7XHJcblx0XHQvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBuZXcgRHJhZ0V2ZW50IHlldCwgd2hpbGUgQ2hyb21lIGRvZXNuJ3Qgc3VwcG9ydCBpbml0RHJhZ0V2ZW50XHJcblx0XHRpZiAoXCJpbml0RHJhZ0V2ZW50XCIgaW4gRHJhZ0V2ZW50LnByb3RvdHlwZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyYWdFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdEcmFnRXZlbnQnKTtcclxuXHRcdFx0KGRyYWdFdmVudCBhcyBhbnkpLmluaXREcmFnRXZlbnQoIHR5cGUsIGUuYnViYmxlcywgZS5jYW5jZWxhYmxlLCBlLnZpZXcsIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHRlLmNsaWVudFgsIGUuY2xpZW50WSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHRlLnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IGUuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IGUuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiBlLmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogZS5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IGUuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiBlLnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIERyYWdFdmVudCBmcm9tIHRoZSBnaXZlbiBLZXlib2FyZEV2ZW50IGFuZCB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdC4gVXNlcyBsYXN0IHJlbWVtYmVyZWRcclxuXHQvLyBtb3VzZSBldmVudCB0byBmaWxsIGNvb3JkaW5hdGVzIGFuZCBidXR0b24gaW5mb3JtYXRpb24uXHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZTogS2V5Ym9hcmRFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLCB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRYLCB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCB0aGlzLmxhc3RNb3VzZUV2ZW50LmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogdGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogdGhpcy5sYXN0TW91c2VFdmVudC5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb29yZGluYXRlcyBvZiB0aGUgbW91c2UgZG93biBldmVudCBmb3IgdGhlIHByaW1hcnkgYnV0dG9uLiBXZSB3aWxsIHN0YXJ0IGVtdWxhdGluZyBEbkQgaWZcclxuXHQvLyB0aGUgbW91c2UgbW92ZXMgbW9yZSB0aGFuIHR3byBwaXhlbHMgaW4gZWl0aGVyIGRpcmVjdGlvbiB3aGlsZSB0aGUgcHJpbWFyeSBidXR0b24gaXMgc3RpbGxcclxuXHQvLyBkb3duLlxyXG5cdHByaXZhdGUgbW91c2VEb3duWDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW91c2VEb3duWTogbnVtYmVyO1xyXG5cclxuXHQvLyBTdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdCB0aGF0IGlzIHVzZWQgZHVyaW5nIGEgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24uIEl0IGlzIGNyZWF0ZWRcclxuXHQvLyB3aGVuIERuRCBzdGFydHMgYW5kIGlzIGRlc3Ryb3llZCBhZnRlciBpdCBmaW5pc2hlcy4gUHJlc2VuY2Ugb2YgdGhpcyBvYmplY3QgYWxzbyBpbmRpY2F0ZXNcclxuXHQvLyB0aGF0IHRoZSBEbkQgb3BlcnN0aW9uIGlzIGluIHByb2dyZXNzXHJcblx0cHJpdmF0ZSBlbXVsRGF0YVRyYW5zZmVyOiBJRW11bERhdGFUcmFuc2ZlcjtcclxuXHJcblx0Ly8gQ2xvbmVkIGVsZW1lbnQgdXNlZCB0byBhcyBhbiBpbWFnZSBkdXJpbmcgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIGltYWdlRWxtOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcblx0Ly8gU3ViLWVsZW1lbnQgb2YgdGhlIGltYWdlIGVsZW1lbnQgdGhhdCBzaG93cyBkcm9wIGVmZmVjdFxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEVsbTogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuXHQvLyBUaGUgbGFzdCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3JcclxuXHRwcml2YXRlIGxhc3RUYXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsYXN0IHRhcmdldCB1bmRlciB0aGUgY3Vyc29yIHdhcyBhIHZhbGlkIGRyb3Agem9uZS4gVGhpcyBpc1xyXG5cdC8vIG5lZWRlZCB0byBub3Qgc2VuZCBkcmFnb3ZlciBhbmQgZHJhZ2xlYXZlIGV2ZW50cyB0byBub24tZHJvcHBhYmxlIHRhcmdldHMuIFRoaXMgZmxhZyBpc1xyXG5cdC8vIHNldCB0byB0cnVlIHdoZW4gdGhlIGRyYWdlbnRlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0cyBwcmV2ZW50RGVmYXVsdCBtZXRob2RcclxuXHQvLyBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyYWdvdmVyLCBkcmFnbGVhdmUgYW5kIGRyb3AgZXZlbnRzIGFyZSBub3Qgc2VudFxyXG5cdC8vIHRvIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNMYXN0VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZHJvcCBpcyBwb3NzaWJsZSBvbiB0aGUgbGFzdCB0YXJnZXQuIFRoaXMgZmxhZyBpcyBuZWVkZWQgYmVjYXVzZVxyXG5cdC8vIGV2ZW4gaWYgYSB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUsIG5vdCBhbGwgbG9jYXRpb25zIHdpdGhpbiB0aGUgdGFyZ2V0IG1pZ2h0IGFjY2VwdCB0aGVcclxuXHQvLyBkcm9wLiBUaGlzIGZsYWcgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ292ZXIgZXZlbnQgc2VudCB0byB0aGUgdGFyZ2V0IGhhcyBpdHNcclxuXHQvLyBwcmV2ZW50RGVmYXVsdCBtZXRob2QgY2FsbGVkLiBJZiB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLCBkcm9wIGV2ZW50IHdpbGwgbm90IGJlIHNlbnQgdG9cclxuXHQvLyB0aGlzIHRhcmdldC5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBMYXRlc3QgTW91c2VFdmVudCBvYmplY3QsIHdoY2loIHdlIHVzZSB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMuXHJcblx0cHJpdmF0ZSBsYXN0TW91c2VFdmVudDogTW91c2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7RHJhZ0Ryb3BFZmZlY3QsIERyYWdBbGxvd2VkRWZmZWN0cywgRHJhZ1RhcmdldFByb3BUeXBlLCBJRHJhZ1RhcmdldCwgSVNpbXBsZURyYWdUYXJnZXQsIElEcmFnVGFyZ2V0RXZlbnR9IGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3BEYXRhfSBmcm9tIFwiLi9EYXRhVHJhbnNmZXJcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0RXZlbnQgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZGlmZmVyZW50IGV2ZW50IGhhbmRsZXJzXHJcbi8vIG9uIHRoZSBkcmFnIHRhcmdldCBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdUYXJnZXRFdmVudCBpbXBsZW1lbnRzIElEcmFnVGFyZ2V0RXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRnZXQgZHJhZ0V2ZW50KCk6IERyYWdFdmVudCB7IHJldHVybiB0aGlzLm1fZHJhZ0V2ZW50OyB9XHJcblx0c2V0IGRyYWdFdmVudCggdmFsOiBEcmFnRXZlbnQpIHsgdGhpcy5tX2RyYWdFdmVudCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZS5cclxuXHRoYXNUeXBlKCB0eXBlOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIERyYWdBbmREcm9wRGF0YS5oYXNUeXBlKCB0aGlzLmRyYWdFdmVudC5kYXRhVHJhbnNmZXIsIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXJpZXZlcyBkYXRhIGZvciB0aGUgZ2l2ZW4gdHlwZS4gSWYgdGhlIHR5cGUgaXMgbm90IGF2YWlsYWJsZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0Z2V0RGF0YSggdHlwZTogc3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGRhdGE6IGFueSA9IERyYWdBbmREcm9wRGF0YS5nZXRPYmplY3REYXRhKCB0eXBlKTtcclxuXHRcdHJldHVybiBkYXRhICE9PSB1bmRlZmluZWQgPyBkYXRhIDogdGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciBmaWxlcyBhcmUgYmVpbmcgZHJhZ2dlZC5cclxuXHRoYXNGaWxlcygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGZpbGVzID0gdGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcblx0XHRyZXR1cm4gZmlsZXMgJiYgZmlsZXMubGVuZ3RoID4gMDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVyaWV2ZXMgYXJyYXkgb2YgZmlsZXMuIFJldHVybnMgdW5kZWZpbmVkIGlmIGZpbGVzIGFyZSBub3QgYmVpbmcgZHJhZ2dlZC4gVGhlIG9iamVjdHMgaW5cclxuXHQvLyB0aGUgcmV0dXJuZWQgYXJyYXkgYXJlIG9mIHR5cGUgV2ViS2l0RW50cnkgKHdlIGNhbm5vdCBzcGVjaWZ5IGl0IGFzIHN1Y2ggaGVyZSBiZWNhdXNlIHRoZVxyXG5cdC8vIGN1cnJlbnQgVHlwZXNjcmlwdCBpcyBkaXN0cmlidXRlZCB3aXRoIC5kLnRzIGxpYnJhcmllcyB0aGF0IGRvbid0IGRlZmluZSB0aGlzIHR5cGUuXHJcblx0Z2V0RmlsZXMoKTogYW55W11cclxuXHR7XHJcblx0XHRsZXQgaXRlbXMgPSB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5pdGVtcztcclxuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGxldCBlbnRyaWVzOiBhbnlbXSA9IFtdO1xyXG5cdFx0aWYgKGl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0ZW50cmllcy5wdXNoKCBpdGVtc1tpXS53ZWJraXRHZXRBc0VudHJ5KCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBlbnRyaWVzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cHJpdmF0ZSBtX2RyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEhhbmRsZXIgY2xhc3MgaW1wbGVtZW50cyBzdXBwb3J0IGZvciBIVE1MNSBEcmFnIGFuZCBEcm9wIHRhcmdldCBmdW5jdGlvbmFsaXR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdUYXJnZXRIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnVGFyZ2V0OiBEcmFnVGFyZ2V0UHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0gPSBlbG07XHJcblxyXG5cdFx0aWYgKChkcmFnVGFyZ2V0IGFzIElEcmFnVGFyZ2V0KS5vbkRyb3AgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldCBhcyBJRHJhZ1RhcmdldDtcclxuXHRcdGVsc2UgaWYgKChkcmFnVGFyZ2V0IGFzIElTaW1wbGVEcmFnVGFyZ2V0KS5vbkRhdGFEcm9wcGVkICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1RhcmdldCA9IGRyYWdUYXJnZXQgYXMgSVNpbXBsZURyYWdUYXJnZXQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBpbml0KClcclxuXHR7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudCA9IG5ldyBEcmFnVGFyZ2V0RXZlbnQoKTtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlciA9IDA7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnZW50ZXJcIiwgdGhpcy5vbkRyYWdFbnRlcik7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdsZWF2ZVwiLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5vbkRyYWdPdmVyKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJvcFwiLCB0aGlzLm9uRHJvcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMub25EcmFnTGVhdmUpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcm9wXCIsIHRoaXMub25Ecm9wKTtcclxuXHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdFbnRlciA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHQvLyB3ZSB3aWxsIGNhbGwgdGhlIG9uRHJhZ0VudGVyIGNhbGxiYWNrIG9ubHkgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGUgZHJhZ2VudGVyXHJcblx0XHQvLyBldmVudCBpcyBmaXJlZCBvbiBvdXIgZWxlbWVudCBvciBvbiBvbmUgb2YgY2hpbGQgbm9uLWRyYWctdGFyZ2V0IGVsZW1lbnRzLlxyXG5cdFx0aWYgKHRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlcisrID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBpZiBJRHJhZ1RhcmdldC50eXBlcyBwcm9wZXJ0eSBpcyBkZWZpbmVkIGFuZCBpcyBub3QgZW1wdHksIGRyYWcgd2lsbCBiZSBwb3NzaWJsZVxyXG5cdFx0Ly8gb25seSBpZiB0aGUgZGF0YSBiZWluZyBkcmFnZ2VkIGhhcyBhdCBsZWFzdCBvbiB0eXBlIGZyb20gdGhlIHR5cGVzIGFycmF5LlxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHR5cGUgb2YgdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmRhdGFUeXBlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChEcmFnQW5kRHJvcERhdGEuaGFzVHlwZSggZS5kYXRhVHJhbnNmZXIsIHR5cGUpKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBubyBzdWl0YWJsZSB0eXBlIGZvdW5kLCB3ZSBkb24ndCBjYWxsIGUucHJldmVudERlZmF1bHQsIHdoaWNoIGRpc2FsbG93cyBkcm9wXHJcblx0XHRcdGlmICghdGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9uRHJhZ0VudGVyIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gdGhlIGRyYWcgdGFyZ2V0LCB3ZSBjb25zaWRlciBkcm9wIHBvc3NpYmxlXHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gdGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0VudGVyKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYXBwbHkgdmlzdWFsIGZlZWRiYWNrIGlmIHNwZWNpZmllZFxyXG5cdFx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQuZmVlZGJhY2sgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBhbHRob3VnaCBzdHlsZSBwcm9wZXJ0eSBleGlzdHMgaW4gYm90aCBIVE1MRWxlbWVudCBhbmQgU1ZHRWxlbWVudCwgaXQgaXMgZGVmaW5lZCBvbiBhXHJcblx0XHRcdFx0XHQvLyBzZXBhcmF0ZSB0eXBlIC0gRWxlbWVudENTU0lubGluZVN0eWxlXHJcblx0XHRcdFx0XHRsZXQgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAodGhpcy5lbG0gYXMgYW55IGFzIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkuc3R5bGU7XHJcblxyXG5cdFx0XHRcdFx0Ly8gc2F2ZSBjdXJyZW50IHZhbHVlcyBvZiBzdHlsZSBwcm9wZXJ0aWVzIHNwZWNpZmllZCBpbiBmZWVkYmFjayBhbmQgc2V0IHRoZSBzdHlsZSBmcm9tXHJcblx0XHRcdFx0XHQvLyB0aGUgZmVlZGJhY2tcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZSA9IHt9O1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgcHJvcCBpbiB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZmVlZGJhY2spXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZVtwcm9wXSA9IGVsbVN0eWxlW3Byb3BdO1xyXG5cdFx0XHRcdFx0XHRlbG1TdHlsZVtwcm9wXSA9IHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFja1twcm9wXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgd2UgbmVlZCB0byBzZXQgZHJvcCBlZmZlY3RcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0VudGVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5nZXREZWZhdWx0RHJvcEVmZmVjdCggZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25EcmFnT3ZlciA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRsZXQgaXNEcm9wUG9zc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb25EcmFnT3ZlciBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBkcmFnIHRhcmdldCwgd2UgY29uc2lkZXIgZHJvcCBwb3NzaWJsZVxyXG5cdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNhbGwgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIGFuZCBjb25zaWRlciBkcm9wIHBvc3NpYmxlIG9ubHkgaWYgaXQgcmV0dXJucyB0cnVlXHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHRpc0Ryb3BQb3NzaWJsZSA9IHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdPdmVyKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNEcm9wUG9zc2libGUpXHJcblx0XHR7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5nZXREZWZhdWx0RHJvcEVmZmVjdCggZSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIHdlIG5lZWQgdG8gc2V0IGRyb3AgZWZmZWN0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdPdmVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5nZXREZWZhdWx0RHJvcEVmZmVjdCggZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25EcmFnTGVhdmUgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0Ly8gd2Ugd2lsbCBjYWxsIHRoZSBvbkRyYWdMZWF2ZSBjYWxsYmFjayBvbmx5IGlmIHRoZSBtb3VzZSBjb21wbGV0ZWx5IGxlYXZlcyBvdXIgZWxlbWVudCxcclxuXHRcdC8vIHdoaWNoIG1lYW5zIG91ciBjb3VudGVyIHJlYWNoZXMgMC5cclxuXHRcdGlmICgtLXRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlciA+IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJldmVydCB2aXN1YWwgZmVlZGJhY2sgKGlmIHdhcyBzcGVjaWZpZWQpXHJcblx0XHRcdGlmICh0aGlzLnNhdmVkU3R5bGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFsdGhvdWdoIHN0eWxlIHByb3BlcnR5IGV4aXN0cyBpbiBib3RoIEhUTUxFbGVtZW50IGFuZCBTVkdFbGVtZW50LCBpdCBpcyBkZWZpbmVkIG9uIGFcclxuXHRcdFx0XHQvLyBzZXBhcmF0ZSB0eXBlIC0gRWxlbWVudENTU0lubGluZVN0eWxlXHJcblx0XHRcdFx0bGV0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKHRoaXMuZWxtIGFzIGFueSBhcyBFbGVtZW50Q1NTSW5saW5lU3R5bGUpLnN0eWxlO1xyXG5cclxuXHRcdFx0XHRmb3IoIGxldCBwcm9wIGluIHRoaXMuc2F2ZWRTdHlsZSlcclxuXHRcdFx0XHRcdGVsbVN0eWxlW3Byb3BdID0gdGhpcy5zYXZlZFN0eWxlW3Byb3BdO1xyXG5cclxuXHRcdFx0XHR0aGlzLnNhdmVkU3R5bGUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJvcCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGxldCBleHBlY3RlZFR5cGVzOiBzdHJpbmdbXSA9IHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5kYXRhVHlwZXM7XHJcblx0XHRcdGxldCBkYXRhT2JqID0ge307XHJcblx0XHRcdGZvciggbGV0IHR5cGUgb2YgZS5kYXRhVHJhbnNmZXIudHlwZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB3ZSBoYXZlIHNvbWUgZXhwZWN0ZWQgdHlwZXMgZGVmaW5lZCBza2lwIHRoZSBjdXJyZW50IHR5cGUgaWYgaXQgaXMgbm8gb25lXHJcblx0XHRcdFx0Ly8gb2YgdGhlIGV4cGVjdGVkXHJcblx0XHRcdFx0aWYgKGV4cGVjdGVkVHlwZXMgJiYgZXhwZWN0ZWRUeXBlcy5sZW5ndGggPiAwICYmIGV4cGVjdGVkVHlwZXMuaW5kZXhPZiggdHlwZSkgPCAwKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBkYXRhID0gRHJhZ0FuZERyb3BEYXRhLmdldE9iamVjdERhdGEoIHR5cGUpO1xyXG5cdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRkYXRhT2JqW3R5cGVdID0gZGF0YTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoIHR5cGUpO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0ZGF0YU9ialt0eXBlXSA9IGRhdGE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdUYXJnZXQub25EYXRhRHJvcHBlZCggZGF0YU9iaik7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJvcCggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vLy8gaWYgdGhlIHRhcmdldCBpbXBsZW1lbnRzIG9uRHJhZ0xlYXZlLCBjYWxsIGl0IG5vdyB0byBhbGxvdyBpdCB0byBjbGVhbnVwXHJcblx0XHQvL2lmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdC8ve1xyXG5cdFx0Ly9cdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHQvL1x0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHQvL31cclxuXHJcblx0XHQvLyBjbGVhciBvdXIgZHJhZ0VudGVyQ291bnRlclxyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID0gMDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgZGVmYXVsdCBkcm9wIGVmZmVjdCBhY2NvcmRpbmcgdG8gdGhlIGFsbG93ZWQgZWZmZWN0cyBhbmQga2V5cyBwcmVzc2VkXHJcblx0cHJpdmF0ZSBnZXREZWZhdWx0RHJvcEVmZmVjdChlOiBEcmFnRXZlbnQpOiBEcmFnRHJvcEVmZmVjdFxyXG5cdHtcclxuXHRcdGxldCBhbGxvd2VkRWZmZWN0cyA9IGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgYXMgRHJhZ0FsbG93ZWRFZmZlY3RzO1xyXG5cdFx0c3dpdGNoKCBhbGxvd2VkRWZmZWN0cylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weTpcclxuXHRcdFx0XHRyZXR1cm4gRHJhZ0Ryb3BFZmZlY3QuQ29weTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGluazpcclxuXHRcdFx0XHRyZXR1cm4gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weU1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGUuY3RybEtleSA/IERyYWdEcm9wRWZmZWN0LkNvcHkgOiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TGluazpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogRHJhZ0Ryb3BFZmZlY3QuQ29weTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGlua01vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGUuYWx0S2V5ID8gRHJhZ0Ryb3BFZmZlY3QuTGluayA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblxyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5BbGw6XHJcblx0XHRcdFx0cmV0dXJuIGUuYWx0S2V5ID8gRHJhZ0Ryb3BFZmZlY3QuTGluayA6IGUuY3RybEtleSA/IERyYWdEcm9wRWZmZWN0LkNvcHkgOiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogRHJhZ0Ryb3BFZmZlY3QuTm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkcm9wIGVmZmVjdCBpcyBhbW9uZyB0aGUgYWxsb3dlZCBlZmZlY3RzXHJcblx0cHJpdmF0ZSBpc0Ryb3BFZmZlY3RBbGxvd2VkKCBkcm9wRWZmZWN0OiBEcmFnRHJvcEVmZmVjdCwgYWxsb3dlZEVmZmVjdHM6IERyYWdBbGxvd2VkRWZmZWN0cyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzd2l0Y2goIGFsbG93ZWRFZmZlY3RzKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5OlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Nb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuQ29weSB8fCBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TGluazpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuQ29weSB8fCBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluayB8fCBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5BbGw6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgIT09IERyYWdEcm9wRWZmZWN0Lk5vbmU7XHJcblxyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuXHJcblx0cHVibGljIGVsbTogRWxlbWVudDtcclxuXHJcblx0Ly8gSURyYWdUYXJnZXQgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHRhcmdldC5cclxuXHRwdWJsaWMgZHJhZ1RhcmdldDogSURyYWdUYXJnZXQ7XHJcblxyXG5cdC8vIElEcmFnVGFyZ2V0IGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyB0YXJnZXQuXHJcblx0cHVibGljIHNpbXBsZURyYWdUYXJnZXQ6IElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cclxuXHQvLyBFdmVudCBvYmplY3QgdGhhdCBpcyByZXVzZWQgd2hlbiBzZW5kaW5nIGV2ZW50cyB0byBhIGRyYWcgdGFyZ2V0IGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0RXZlbnQ6IERyYWdUYXJnZXRFdmVudDtcclxuXHJcblx0Ly8gQSBkcmFnIHRhcmdldCBlbGVtZW50IGNhbiBoYXZlIGNoaWxkcmVuIHdobyBhcmUgbm90IGRyYWcgdGFyZ2V0cyBieSB0aGVtc2VsdmVzLiBJbiB0aGlzXHJcblx0Ly8gY2FzZSwgd2hlbiB0aGUgbW91c2UgZ29lcyBmcm9tIG91ciBlbGVtZW50IHRvIGEgY2hpbGQgZWxlbWVudCwgd2Ugd2lsbCByZWNlaXZlIGRyYWdlbnRlclxyXG5cdC8vIGV2ZW50IG9uIHRoZSBjaGlsZCBlbGVtZW50IGFuZCBkcmFnbGVhdmUgb24gb3Vycy4gV2UgZG9uJ3Qgd2FudCB0byByZXBvcnQgdGhpcyB0aHJvdWdoXHJcblx0Ly8gb3VyIGN1c3RvbSBldmVudHMgYmVjYXVzZSBmcm9tIHRoZSBjbGxlcidzIHBvaW50IG9mIHZpZXcgdGhlIG11c2UgaXMgc3RpbGwgd2l0aGluIHRoZVxyXG5cdC8vIGJvdW5kcyBvZiBvdXIgZWxlbWVudC4gVGhlcmVmb3JlLCB3ZSBrZWVwIHRoZSBjb3VudGVyIHZhcmlhYmxlLCB3aGljaCBpcyBzZXQgdG8gMVxyXG5cdC8vIHdoZW4gdGhlIGZpcnN0IGRyYWdlbnRlciBldmVudCAoZnJvbSBvdXIgZWxlbWVudCBvciBmcm9tIGEgY2hpbGQpIGlzIHJlcG9ydGVkLiBPbiBlYWNoXHJcblx0Ly8gc3Vic2VxdWVudCBkcmFnZW50ZXIgYW5kIGRyYWdsZWF2ZSBpdCB3aWxsIGJlIGluY3JlbWVudGVkIGFuZCBkZWNyZW1lbnRlZCByZXNwZWN0aXZlbHkuXHJcblx0Ly8gV2hlbiB0aGlzIGNvdW50ZXIgcmVhY2hlcyB6ZXJvLCB3ZSBjYWxsIHRoZSBvbkRyYWdMZWF2ZSBoYW5kbGVyLlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEVudGVyQ291bnRlcjogbnVtYmVyO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBpbiB0aGUgZmlyc3QgY2FsbCB0byB0aGUgb25EcmFnRW50ZXIgd2UgZGV0ZXJtaW5lZCB0aGF0IGRyb3BcclxuXHQvLyB3YXMgcG9zc2libGUuXHJcblx0cHJpdmF0ZSBpc0Ryb3BQb3NzaWJsZTogYm9vbGVhbjtcclxuXHJcblx0Ly8gU2V0IG9mIHN0eWxlcyBzYXZlZCBiZWZvcmUgYXBwbHlpbmcgZmVlZGJhY2sgc3R5bGVzIGR1cmluZyBkcmFnZW50ZXIgZXZlbnQuIFdlIHdpbGwgdXNlXHJcblx0Ly8gdGhlc2Ugc3R5bGVzIHRvIHJlc3RvcmUgdGhlIGVsZW1lbnQgdG8gdGhlIG9yaWdpbmFsIHN0YXRlIGR1cmluZyB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdHByaXZhdGUgc2F2ZWRTdHlsZTogU3R5bGVzZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltY2xcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2RuZC9EcmFnRHJvcEFwaVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9Qb3B1cFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9EaWFsb2dcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvTXNnQm94XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvdXRlci9Sb3V0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHJlZS9UcmVlQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpcnQvU2Nyb2xsQXhpc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92aXJ0L1ZUYWJsZVwiO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlc30gZnJvbSBcIi4vZG5kL0RyYWdEcm9wSW1wbFwiO1xyXG5yZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpO1xyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtQb3B1cH0gZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZyBjbGFzcyBpcyBhIHBvcHVwIHdpdGggdGhyZWUgZGlzdGluY3QgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQb3B1cFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgU2xpY2UgZm9yIHRoZSB0aHJlZSBkaWFsb2cgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuXHQvLyBUaGV5IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZSBhcHByb3ByaWF0ZSByZW5kZXIgbWV0aG9kcy5cclxuXHRjb25zdHJ1Y3RvciggY2FwdGlvbkFyZWFTbGljZT86IG1pbS5TbGljZSwgbWFpbkFyZWFTbGljZT86IG1pbS5TbGljZSwgYnV0dG9uQXJlYVNsaWNlPzogbWltLlNsaWNlLCBkbGdTbGljZT86IG1pbS5TbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcihkbGdTbGljZSk7XHJcblxyXG5cdFx0dGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gY2FwdGlvbkFyZWFTbGljZSA/IGNhcHRpb25BcmVhU2xpY2UgOiB7fTtcclxuXHRcdHRoaXMubWFpbkFyZWFTbGljZSA9IG1haW5BcmVhU2xpY2UgPyBtYWluQXJlYVNsaWNlIDoge307XHJcblx0XHR0aGlzLmJ1dHRvbkFyZWFTbGljZSA9IGJ1dHRvbkFyZWFTbGljZSA/IGJ1dHRvbkFyZWFTbGljZSA6IHt9O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkZWZhdWx0IHBhcmFtZXRlcnMgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhIERpYWxvZyBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlID0geyBzdHlsZToge2JhY2tncm91bmQ6XCJwaW5rXCIsIHBhZGRpbmc6XCIwLjVlbSAxZW1cIiwgY3Vyc29yOlwiZGVmYXVsdFwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtwYWRkaW5nOlwiMC41ZW0gMWVtXCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsIHBhZGRpbmc6XCIwLjVlbSAxZW1cIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRCdXR0b25TbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRCdXR0b25TbGljZSA9IHsgc3R5bGU6IHttYXJnaW5MZWZ0OlwiMC41ZW1cIiwgbWluV2lkdGg6XCI1ZW1cIn0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b24gd2l0aCB0aGUgZ2l2ZW4gY2hhcmFjdGVyaXN0aWNzLiBUaGUga2V5IHBhcmFtZXRlciBpbmRpY2F0ZXMgdGhlIHZhbHVlIHRoYXQgaXNcclxuXHQvLyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBUaGUgb3B0aW9uYWwgaW5kZXggcGFyYW1ldGVyIHNwZWNpZmllc1xyXG5cdC8vIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYnV0dG9uIHNob3VsZCBiZSBhZGRlZC5cclxuXHRwdWJsaWMgYWRkQnV0dG9uKCBzbGljZTogbWltLlNsaWNlLCBrZXk/OiBhbnksIGNhbGxiYWNrPzogKGtleTogYW55KSA9PiB2b2lkLCBpbmRleD86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogRGxnQnRuSW5mbyA9IHsgc2xpY2UsIGtleSwgY2FsbGJhY2ssIHJlZjogbmV3IG1pbS5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCkgfTtcclxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnB1c2goIGluZm8pO1xyXG5cdFx0ZWxzZSBpZiAoaW5kZXggPT09IDApXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3MudW5zaGlmdCggaW5mbyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3Muc3BsaWNlKCBpbmRleCAtIDEsIDAsIGluZm8pO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoIHRoaXMucmVuZGVyQnV0dG9uQXJlYSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGJ1dHRvbiBhdCB0aGUgZ2l2ZW4gaW5kZXguXHJcblx0cHVibGljIHJlbW92ZUJ1dHRvbiggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoIHRoaXMucmVuZGVyQnV0dG9uQXJlYSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQ2FwdGlvbkFyZWEoKVxyXG5cdHtcclxuXHRcdGxldCBjYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSwgdGhpcy5nZXRDYXB0aW9uQXJlYVNsaWNlKCkpO1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdDYXB0aW9uXCIgbW91c2Vkb3duPXt0aGlzLm9uU3RhcnRNb3ZlfSBzdHlsZT17Y2FwdGlvbkFyZWFTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e2NhcHRpb25BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4uY2FwdGlvbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdHtjYXB0aW9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyTWFpbkFyZWEoKVxyXG5cdHtcclxuXHRcdGxldCBtYWluQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSwgdGhpcy5nZXRNYWluQXJlYVNsaWNlKCkpO1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdNYWluQ29udGVudFwiIHN0eWxlPXttYWluQXJlYVNsaWNlLnN0eWxlfSBjbGFzcz17bWFpbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5tYWluQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e21haW5BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJCdXR0b25BcmVhKClcclxuXHR7XHJcblx0XHRsZXQgYnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlLCB0aGlzLmdldEJ1dHRvbkFyZWFTbGljZSgpKTtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnQnV0dG9uc1wiIHN0eWxlPXtidXR0b25BcmVhU2xpY2Uuc3R5bGV9IGNsYXNzPXtidXR0b25BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4uYnV0dG9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e2J1dHRvbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0XHR7dGhpcy5idXR0b25JbmZvcy5tYXAoIChpbmZvKSA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBidG5TbGljZTogbWltLlNsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlLCBpbmZvLnNsaWNlKTtcclxuXHRcdFx0XHRcdHJldHVybiA8YnV0dG9uIGtleT17aW5mby5rZXl9IGNsaWNrPXtpbmZvLmNhbGxiYWNrICYmICgoKSA9PiBpbmZvLmNhbGxiYWNrKGluZm8ua2V5KSl9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e2J0blNsaWNlLnN0eWxlfSBjbGFzcz17YnRuU2xpY2UuY2xhc3NOYW1lfSB7Li4uYnRuU2xpY2UucHJvcHN9PlxyXG5cdFx0XHRcdFx0XHR7YnRuU2xpY2UuY29udGVudH1cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQuXHJcblx0cHJvdGVjdGVkIGdldERsZ1NsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPVxyXG5cdFx0XHQ8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlckNhcHRpb25BcmVhfVxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlck1haW5BcmVhfVxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlckJ1dHRvbkFyZWF9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBjYXB0aW9uLlxyXG5cdHByb3RlY3RlZCBnZXRDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0TWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5tYWluQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgYnV0dG9uIGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldEJ1dHRvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5idXR0b25BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIHB1dHMgbW91c2UgZG93biBpbiB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBvblN0YXJ0TW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHRoaXMuc3RhcnRNb3ZlKCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQ2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5jYXB0aW9uQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBDYXB0aW9uQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLmNhcHRpb25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLm1haW5BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IE1haW5BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMubWFpbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBidXR0b25zIGFyZWFcclxuXHRwcml2YXRlIGJ1dHRvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQnV0dG9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLmJ1dHRvbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgQnV0dG9uQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLmJ1dHRvbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBBcnJheSBvZiBidXR0b25zIGFkZGVkIHRvIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGJ1dHRvbkluZm9zOiBEbGdCdG5JbmZvW10gPSBbXTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBjYXB0aW9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1haW5BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGJ1dHRvbiBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgY2FwdGlvbiBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0Q2FwdGlvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdE1haW5BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBidXR0b25zIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRCdXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBhIGJ1dHRvbiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0QnV0dG9uU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEbGdCdG5JbmZvIGNsYXNzIGlzIGEgaGVscGVyIGNsYXNzIHRoYXQga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBidXR0b24gYWRkZWQgdG8gdGhlIGRpYWxvZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgRGxnQnRuSW5mbyA9XHJcbntcclxuXHRzbGljZTogbWltLlNsaWNlLFxyXG5cdGtleTogYW55LFxyXG5cdGNhbGxiYWNrOiAoa2V5OiBhbnkpID0+IHZvaWQsXHJcblx0cmVmOiBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PixcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEaWFsb2dCdXR0b24gZW51bWVyYXRpb24gZGVmaW5lcyBjb25zdGFudHMgdG8gaW5kaWNhdGUgc3RhbmRhcmQgYnV0dG9ucyB1c2VkIGluIGRpYWxvZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZW51bSBEaWFsb2dCdXR0b25cclxue1xyXG5cdE5vbmUgPSAweDAsXHJcblx0T0sgPSAweDEsXHJcblx0Q2FuY2VsID0gMHgyLFxyXG5cdFllcyA9IDB4NCxcclxuXHRObyA9IDB4OCxcclxuXHRDbG9zZSA9IDB4MTAsXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge0RpYWxvZywgRGlhbG9nQnV0dG9ufSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNob3dNb2RhbCggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKTogUHJvbWlzZTxNc2dCb3hCdXR0b25zPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdFx0dGhpcy5idXR0b25zID0gYnV0dG9ucztcclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBjYXB0aW9uLlxyXG5cdHByb3RlY3RlZCBnZXRDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB7IGNvbnRlbnQ6IHRoaXMudGl0bGUsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJkb2RnZXJibHVlXCIgfSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IHsgY2xzLCBjb2xvciB9ID0gdGhpcy5nZXRJY29uQ2xhc3NBbmRDb2xvcigpO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtjbHMgJiYgPGkgY2xhc3M9e1wiZmEgZmEtM3ggXCIgKyBjbHN9IHN0eWxlPXt7IGNvbG9yOiBjb2xvcn19Lz59XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsIG1pbldpZHRoOlwiMTVlbVwiLCBtYXhXaWR0aDpcIjQwZW1cIiwgbWluSGVpZ2h0OiBcIjJlbVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OlwiMjBlbVwiLCBvdmVyZmxvdzpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0e3RoaXMubWVzc2FnZX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+O1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuYnV0dG9ucylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLkNsb3NlOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNsb3NlXCIsIERpYWxvZ0J1dHRvbi5DbG9zZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT0s6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5Pa0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNObzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNOb0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTogeyBjbHM6IHN0cmluZywgY29sb3I6IENzc0NvbG9yIH1cclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuaWNvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkluZm86IHJldHVybiB7IGNsczogXCJmYS1pbmZvLWNpcmNsZVwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLldhcm5pbmc6IHJldHVybiB7IGNsczogXCJmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiLCBjb2xvcjogXCJvcmFuZ2VcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uRXJyb3I6IHJldHVybiB7IGNsczogXCJmYS1taW51cy1jaXJjbGVcIiwgY29sb3I6IFwicmVkXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjbHM6IFwiZmEtcXVlc3Rpb24tY2lyY2xlXCIsIGNvbG9yOiBcImdyZWVuXCIgfTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiB7IGNsczogXCJcIiwgY29sb3I6IFwiYmx1ZVwiIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9uKCB0ZXh0OiBzdHJpbmcsIGtleTogRGlhbG9nQnV0dG9uKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYWRkQnV0dG9uKCB7Y29udGVudDogdGV4dH0sIGtleSwgdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uQnV0dG9uQ2xpY2tlZCA9ICgga2V5OiBhbnkpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5jbG9zZSgga2V5KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcblx0Ly8gVGl0bGUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcblxyXG5cdC8vIEJ1dHRvbnNcclxuXHRwcml2YXRlIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnM7XHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXNnQm94QnV0dG9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBidXR0b25zIGFuZCBidXR0b24gY29tYmluYXRpb25zIGZvclxyXG4gKiBtZXNzYWdlIGJveGVzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTXNnQm94QnV0dG9uc1xyXG57XHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgZGlzcGxheSBubyBidXR0b25zICovXHJcblx0Tm9uZSA9IDAsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgQ2xvc2UgYnV0dG9uICovXHJcblx0Q2xvc2UsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgT0sgYnV0dG9uICovXHJcblx0T0ssXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgT0sgYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0T2tDYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8sXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzLCBObyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRZZXNOb0NhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUG9wdXAgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBtb2RlbGVzcyBhbmQgbW9kYWwgcG9wdXBzLiBJdCBwcm92aWRlcyB0aGUgYmFzaWMgbWVjaGFuaWNzXHJcbi8vIGZvciBzaG93aW5nIGFuZCBjbG9zaW5nIHRoZSBwb3B1cHMgaW5jbHVkaW5nIG1vdmluZyBpdCB3aXRoIHRoZSBtb3VzZS4gVGhlIGNvbnRlbnQgb2YgdGhlXHJcbi8vIHBvcHVwIGlzIGVpdGhlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0dWN0b3Igb3IgaXMgcHJvdmlkZWQgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFBvcHVwIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgdGhlIG9iamVjdCBkZXNjcmliaW5nIHRoZSBzdHlsZXMgYW5kIGNvbnRlbnQgdGhhdCBzaG91bGQgYmVcclxuXHQvLyBkaXNwbGF5ZWQgd2l0aGluIHRoZSBwb3B1cC4gSXQgY2FuIGJlIGxlZnQgdW5kZWZpbmVkIGlmIGEgZGVyaXZlZCBjbGFzcyBvdmVycmlkZXMgdGhlXHJcblx0Ly8gZ2V0RGxnU2xpY2UgbWV0aG9kLlxyXG5cdGNvbnN0cnVjdG9yKCBkbGdTbGljZT86IG1pbS5TbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5kbGdTbGljZSA9IGRsZ1NsaWNlID8gZGxnU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBQb3B1cCBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIVBvcHVwLkRlZmF1bHREbGdTbGljZSlcclxuXHRcdFx0UG9wdXAuRGVmYXVsdERsZ1NsaWNlID0geyBzdHlsZTogeyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJXaWR0aDogMSwgcGFkZGluZzogXCIwXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIHRoZSBkaWFsb2cgYXMgYSBtb2RlbGVzcyBwb3B1cC4gSXQgc2hvdWxkIGJlIGNsb3NlZCB3aXRoIHRoZSBDbG9zZSBtZXRob2QuXHJcblx0cHVibGljIG9wZW4oIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsb3NlcyB0aGUgZGlhbG9nIG9wZW5lZCBhcyBhIG1vZGVsZXNzIHBvcHVwLiBUaGlzIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCB0byBjbG9zZSBhIG1vZGFsXHJcblx0Ly8gZGlhbG9nLlxyXG5cdHB1YmxpYyBjbG9zZSggcmV0VmFsPzogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLmNsb3NlKCk7XHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKCByZXRWYWwpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyBhIG1vZGFsIGRpYWxvZy4gVGhlIGRpYWxvZyBpcyBjbG9zZWQgd2l0aCB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgYW5kIHRoZSBwYXJhbWV0ZXJcclxuXHQvLyBwYXNzZWQgdG8gdGhlIENsb3NlTW9kYWwgbWV0aG9kIGlzIHJldHVybmVkIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZS5cclxuXHRwdWJsaWMgc2hvd01vZGFsKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggXCJEaWFsb2cgaXMgYWxyZWFkeSBvcGVuXCIpO1xyXG5cclxuXHRcdGxldCBwcm9taXNlOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZTxhbnk+KCAocmVzb2x2ZSkgPT4ge3RoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSByZXNvbHZlfSk7XHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93TW9kYWwoKTtcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3Blbi5cclxuXHRwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGcgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kYWwuXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RhcnRzIG1vbml0b3JpbmcgbW91c2UgbW92ZW1lbnRzIGFuZCBtb3ZlcyB0aGUgZGlhbG9nIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludGVudGVkIHRvIGJlIGNhbGxlZCBmcm9tIGEgbW91c2Vkb3duIGV2ZW50IHNvbWV3aGVyZSB3aXRoaW4gdGhlIHBvcHVwLlxyXG5cdHB1YmxpYyBzdGFydE1vdmUoIGU6IE1vdXNlRXZlbnQpXHJcblx0e1xyXG5cdFx0Ly8gd2UgcHJldmVudCBkZWZhdWx0IGFjdGlvbiBhbmQgcHJvcGFnYXRpb24gc28gdGhhdCBtb3VzZSBtb3ZlbWVudHMgZG9uJ3QgY2F1c2VcclxuXHRcdC8vIHRlc3QgaW4gdGhlIHBvcHVwIGFuZCBvbiB0aGUgcGFnZSB0byBiZSBzZWxlY3RlZC5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IHJlY3QgPSB0aGlzLmRsZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IHJlY3QudG9wO1xyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCA9IHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ICsgXCJweFwiO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcblx0Ly8gc29tZSBwYXJ0IG9mIHRoZSBkaWFsb2cgYXQgdGhlIHRvcC1sZWZ0IGNvcm5lciByZW1haW5zIHZpc2libGUgaW4gb3JkZXIgdG8gdGhlIHVzZXIgdG8gYmVcclxuXHQvLyBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuXHRwdWJsaWMgbW92ZSggbmV3WDogbnVtYmVyLCBuZXdZOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0aWYgKG5ld1ggPCAwKVxyXG5cdFx0XHRuZXdYID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1ggKyAzMCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRuZXdYID0gd2luZG93LmlubmVyV2lkdGggLSAzMDtcclxuXHJcblx0XHRpZiAobmV3WSA8IDApXHJcblx0XHRcdG5ld1kgPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WSArIDMwID4gd2luZG93LmlubmVySGVpZ2h0KVxyXG5cdFx0XHRuZXdZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzA7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZSBhbmQgYWxzbyByZW1lbWJlciB0aGVtIGluIG91ciBTbGljZSBzbyB0aGF0IHRoZXkgY2FuIGJlIHNwZWNpZmllZFxyXG5cdFx0Ly8gYXMgcHJvcGVydGllcyBpZiB0aGUgY29tcG9uZW50IGlzIHJlcmVuZGVyZWRcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSBuZXdYO1xyXG5cdFx0dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gbmV3WTtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wICsgXCJweFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY3VyckRsZ1NsaWNlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBkZWZpbmUgcG9zaXRpb25pbmcgc3R5bGVzLiBJZiB4IGFuZC9vciB5IGFyZSB1bmRlZmluZWQsIHdlIGNlbnRlciB0aGUgZGlhbG9nIGhvcml6b250YWxseVxyXG5cdFx0XHQvLyBhbmQvb3IgdmVydGljYWxseVxyXG5cdFx0XHRsZXQgc3R5bGU6IFN0eWxlc2V0ID0geyBwb3NpdGlvbjogXCJmaXhlZFwiIH1cclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbFggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLmxlZnQgPSAwO1xyXG5cdFx0XHRcdHN0eWxlLnJpZ2h0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS5sZWZ0ID0gdGhpcy5pbml0aWFsWDtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5MZWZ0ID0gXCIwXCI7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luUmlnaHQgPSBcIjBcIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbFkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLnRvcCA9IDA7XHJcblx0XHRcdFx0c3R5bGUuYm90dG9tID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS50b3AgPSB0aGlzLmluaXRpYWxZO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJEbGdTbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggUG9wdXAuRGVmYXVsdERsZ1NsaWNlLCB0aGlzLmdldERsZ1NsaWNlKCksIHtzdHlsZX0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiA8ZGlhbG9nIHJlZj17cmVmID0+IHRoaXMuZGxnID0gcmVmfSBzdHlsZT17dGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGV9XHJcblx0XHRcdFx0XHRcdGNsYXNzPXt0aGlzLmN1cnJEbGdTbGljZS5jbGFzc05hbWV9IHsuLi50aGlzLmN1cnJEbGdTbGljZS5wcm9wc30+XHJcblx0XHRcdHt0aGlzLmN1cnJEbGdTbGljZS5jb250ZW50fVxyXG5cdFx0PC9kaWFsb2c+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHByb3ZpZGVkIGVpdGhlciBleHRlcm5hbGx5IG9yIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGxnU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJlbmRlcnMgdGhlIHBvcHVwLlxyXG5cdHByaXZhdGUgY3JlYXRlKCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmluaXRpYWxYID0geDtcclxuXHRcdHRoaXMuaW5pdGlhbFkgPSB5O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIDxkaXY+IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgZW5kIG9mIDxib2R5Pi4gVGhlbiByZW5kZXIgb3VyIGNvbXBvbmVudCdzXHJcblx0XHQvLyBjb250ZW50IHVuZGVyIGl0LlxyXG5cdFx0dGhpcy5hbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHRoaXMuYW5jaG9yRGl2KTtcclxuXHRcdG1pbS5tb3VudFN5bmMoIHRoaXMsIHRoaXMuYW5jaG9yRGl2KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZW5kZXJzIGFuZCBkZXN0cm95cyB0aGUgZGlhbG9nLlxyXG5cdHByaXZhdGUgZGVzdHJveSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG5cdFx0bWltLnVubW91bnRTeW5jKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHR0aGlzLmFuY2hvckRpdi5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGV2ZW50IHRvIHByZXZlbnQgY2xvc2luZyB0aGUgZGlhbG9nIGJ5IEVzYyBrZXkuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpIC8vIEVzY1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHRoaXMubW92ZSggZS5jbGllbnRYIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRYLCBlLmNsaWVudFkgLSB0aGlzLmRyYWdQb2ludE9mZnNldFkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblN0b3BNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHByb3ZpZGVkIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByaXZhdGUgZGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IERsZ1NsaWNlKCk6IGFueSB7IHJldHVybiB0aGlzLkRsZ1NsaWNlOyB9XHJcblxyXG5cdC8vIEN1cnJlbnQgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgdGhhdCBjb21iaW5lIG91ciBkZWZhdWx0cyBwbHVzIHRob3NlIHByb3ZpZGVkXHJcblx0Ly8gZWl0aGVyIGV4dGVybmFseSBvciBieSBkZXJpdmVkIGNsYXNzZXMgcGx1cyB0aG9zZSByZWZsZWN0aW5nIHRoZSBkaWFsb2cgcG9zaXRpb25pbmcuXHJcblx0cHJpdmF0ZSBjdXJyRGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRWxlbWVudCB1bmRlciB3aGljaCB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkLiBUaGlzIGVsZW1lbnQgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlXHJcblx0Ly8gPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQgYW5kIGlzIHJlbW92ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cclxuXHRwcml2YXRlIGFuY2hvckRpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdC8vIEluaXRpYWwgWCBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxYOiBudW1iZXI7XHJcblxyXG5cdC8vIEluaXRpYWwgWSBjb29yZGluYXRlIG9mIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGluaXRpYWxZOiBudW1iZXI7XHJcblxyXG5cdC8vLy8gUmVmZXJlbmNlIHRvIHRoZSA8ZGlhbG9nPiBlbGVtZW50IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkLlxyXG5cdC8vcHJpdmF0ZSBkbGdSZWYgPSBuZXcgbWltLlJlZjxIVE1MRGlhbG9nRWxlbWVudD4oIHJlZiA9PiB0aGlzLmRsZyA9IHJlZik7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHRwcml2YXRlIGRsZzogSFRNTERpYWxvZ0VsZW1lbnQ7XHJcblxyXG5cdC8vIFByb21pc2Ugd2hpY2ggaXMgY3JlYXRlZCBmb3IgbW9kYWwgZGlhbG9nIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBtb2RhbCBkaWFsb2dcclxuXHQvLyBpcyBjbG9zZWQuIFRoZSBwcm9taXNlIGlzIHJldHVybmVkIGZyb20gU2hvd01vZGFsLlxyXG5cdHByaXZhdGUgbW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmM6IChhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpdj4gZWxlbWVudCBjb250YWluaW5nIHRoZSBjYXB0aW9uLlxyXG5cdHByaXZhdGUgY2FwdGlvbiA9IG5ldyBtaW0uUmVmPEhUTUxFbGVtZW50PigpO1xyXG5cclxuXHQvLyBPZmZzZXRzIG9mIHRoZSBwb2ludCB3aGVyZSB0aGUgbW92ZSBzdGFydGVkIGZyb20gdGhlIGRpYWxvZyB0b3AtbGVmdCBjb3JuZXIuIFdlIHVzZSB0aGVtXHJcblx0Ly8gdG8gY2FsY3VsYXRlIHRoZSBkaWFsb2cgdG9wLWxlZnQgcG9zaXRpb24gYmFzZWQgb24gdGhlIG1vdXNlIGNvb3JkaW5hdGVzIHdoaWxlIG1vdmUgaXNcclxuXHQvLyBpbiBwcm9ncmVzcy5cclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFk6IG51bWJlcjtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciA8ZGlhbG9nPiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0RGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltdXJsIGZyb20gXCJtaW11cmxcIlxyXG5pbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJtaW1ibC9saWIvYXBpL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBSb3V0ZXI6IElSb3V0ZXJTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclNlcnZpY2UgaXMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBJdCBhbGxvd3NcclxuICogc3Vic2NyaWJlcnMgdG8gbmF2aWdhdGUgdG8gcGF0aHMgZGVmaW5lZCBieSBSb3V0ZXIncyByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJTZXJ2aWNlXHJcbntcclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBvYmplY3QgY29udGFpbmluZyBmaWVsZCB2YWx1ZXMgdGhhdCBpcyBwYXNzZWQgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgcm91dGUuIFdoZW5cclxuICogbmF2aWdhdGluZyBieSByb3V0ZSBJRCwgdGhlIGZpZWxkcyBhcmUgcGFzc2VkIGV4cGxpY2l0bHkuIFdoZW4gbmF2aWdhdGluZyBieSBVUkwsIHRoZSBmaWVsZHNcclxuICogYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkwgYWNjb3JkaW5nIHRvIHRoZSBVUkwgcGF0dGVybiBpbiB0aGUgcm91dGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZUZpZWxkcyA9IHsgW1A6IHN0cmluZ106IG1pbXVybC5GaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5IGZvciBhIHJvdXRlLiBJdCBjYW4gcmV0dXJuIGEgUHJvbWlzZSBpblxyXG4gKiB3aGljaCBjYXNlIHRoZSBSb3V0ZXIgd2lsbCBkaXNwbGF5IHByb2dyZXNzIFVJIHVudGlsIHRoZSBjb250ZW50IGJlY29tZXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2VG9Sb3V0ZUZ1bmNUeXBlID0gKGZpZWxkczogUm91dGVGaWVsZHMpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gbmF2aWdhdGluZyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHJvdXRlLiBJZiBmYWxzZVxyXG4gKiBpcyByZXR1cm5lZCwgbmF2aWdhdGlvbiBkb2Vzbid0IGhhcHBlbi4gVGhpcyBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlclxyXG4gKiBhYm91dCB1bnNhdmVkIGRhdGEuIElmIFByb21pc2UgaXMgcmV0dXJuZWQsIHRoZSBSb3V0ZXIgd2lsbCB3YWl0IHVudGlsIHRoZSByZXNwb25zZSBpcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZGcm9tUm91dGVGdW5jVHlwZSA9ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlIGludGVyZmFjZSBkZWZpbmVzIGEgbmF2aWdhdGlvbiB0YXJnZXQuIFJvdXRlcyBjYW4gaGF2ZSBzdWItcm91dGVzLCB3aGljaCBjcmVhdGVzIGFcclxuICogaGllcmFyY2h5IG9mIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFVuaXF1ZSAoYnV0IG9wdGlvbmFsKSBJRCB0aGF0IGFsbG93cyBuYXZpZ2F0aW5nIHRvIHRoZSB0YXJnZXQgdXNpbmcgYSBzaW1wbGUgSUQgaW5zdGVhZCBvZlxyXG5cdCAqIHBhdGguIFRoZSBwYXRoIG1lbWJlciB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGFkZHJlc3MgY29udHJvbC5cclxuXHQgKi9cclxuXHRpZD86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogVVJMIHBhdHRlcm4gLSBjYW4gY29udGFpbiBuYW1lZCBwYXJhbWV0ZXJzIChhcyBpbiAvdXNlcnMve3VpZH0pLiBUaGlzIGNhbiBiZSBsZWZ0IGVtcHR5XHJcblx0ICogaWYgb25seSBpZCBpcyB1c2VkXHJcblx0ICovXHJcblx0dXJsUGF0dGVybj86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5LlxyXG5cdCAqL1xyXG5cdG5hdlRvRnVuYz86IE5hdlRvUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyIGFib3V0IHVuc2F2ZWQgZGF0YS5cclxuXHQgKi9cclxuXHRuYXZGcm9tRnVuYz86IE5hdkZyb21Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcmRlcmVkIGxpc3Qgb2YgUm91dGUgb2JqZWN0cywgd2hpY2ggYXJlIHN1Yi1yb3V0ZXMgb2YgdGhpcyByb3V0ZS5cclxuXHQgKi9cclxuXHRzdWJSb3V0ZXM/OiBSb3V0ZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZSBmb3IgSGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uIEl0IHJlbWVtYmVycyB0aGVcclxuICogcGFyYW1ldGVycyBvZiBhIHJvdXRlIHRvIG5hdmlnYXRlIHRvIHdoZW4gdGhlIHVzZXIgZ29lcyBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXInc1xyXG4gKiBoaXN0b3J5LlxyXG4gKi9cclxuY2xhc3MgUm91dGVTdGF0ZVxyXG57XHJcblx0cm91dGVJRDogc3RyaW5nO1xyXG5cdHJvdXRlVVJMOiBzdHJpbmc7XHJcblx0ZmllbGRzOiBSb3V0ZUZpZWxkcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGN1cnJlbnQgcm91dGUuXHJcbiAqIFRoaXMgYWxsb3dzIHRoZSByb3V0ZXIgZG8gaGF2ZSBpdHMgb3duIGNvbnRlbnQgLSB0aGUgc2FtZSBmb3IgYWxsIHJvdXRlcyAtIGFuZCBpbnNlcnQgdGhlXHJcbiAqIGN1cnJlbnQgcm91dGVyJ3MgY29udGVudCBpbnRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAocm91dGVDb250ZW50OiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSBhIHByb2dyZXNzIFVJIHdoaWxlIGl0IGlzIGxvYWRpbmdcclxuICogcm91dGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKCkgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJQcm9wcyBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5IEFQSSB0b1xyXG5cdCAqIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGNvbnRyb2xzQnJvd3Nlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB0aGF0IGlmIHRoaXMgcm91dGVyIGNhbm5vdCByZXNvbHZlIGEgcGF0aCwgaXQgd2lsbCBkZWxlZ2F0ZSB0byBhIHJvdXRlciB1cFxyXG5cdCAqIHRoZSBjb21wb25lbnQgY2hhaW4gKGlmIHRoZXJlIGlzIG9uZSkuXHJcblx0ICovXHJcblx0Y2hhaW5zVG9IaWdoZXJSb3V0ZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuIERlZmF1bHQgdmFsdWUgaXNcclxuXHQgKiB0cnVlLlxyXG5cdCAqL1xyXG5cdGJhc2VVUkw/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZXIgY29tcG9uZW50IHByb3ZpZGVzIGNsaWVudC1zaWRlIHJvdXRpbmcuIEl0IHdvcmtzIHdpdGggUm91dGUgb2JqZWN0cyB0aGF0IGRlZmluZVxyXG4gKiBhdmFpbGFibGUgbmF2aWdhdGlvbiB0YXJnZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlciBleHRlbmRzIG1pbS5Db21wb25lbnQ8SVJvdXRlclByb3BzLFJvdXRlW10+IGltcGxlbWVudHMgSVJvdXRlclNlcnZpY2UsIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogSVJvdXRlclByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCByb3V0ZSBvZiB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGUoIHJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgZ2l2ZW4gcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0LlxyXG5cdCAqIEBwYXJhbSByb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRvIGFkZFxyXG5cdCAqIEBwYXJhbSBpbmRleCBJbmRleCBhdCB3aGljaCB0byBhZGQgdGhlIHJvdXRlIG9iamVjdC4gSWYgdGhlIGluZGV4IGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuXHQgKlx0XHRyb3V0ZSBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LiBJZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGxcclxuXHQgKlx0XHRiZSB0aHJvd24uXHJcblx0ICovXHJcblx0cHVibGljIGFkZFJvdXRlKCByb3V0ZTogUm91dGUsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJSb3V0ZSBvYmplY3QgY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDAsIHJvdXRlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yb3V0ZXMucHVzaCggcm91dGUpO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGFkZCB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgdG8gdGhlIG1hcFxyXG5cdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCByb3V0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QgYW5kIHJldHVybnMgdGhlIFJvdXRlIG9iamVjdC4gSWYgaW5kZXggaXNcclxuXHQgKiBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpbmRleFxyXG5cdCAqIEByZXR1cm4gUm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0aGF0IHdhcyByZW1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVSb3V0ZSggaW5kZXg6IG51bWJlcik6IFJvdXRlXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDEpWzBdO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IHJlbW92ZSB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgZnJvbSB0aGUgbWFwXHJcblx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGUpO1xyXG5cclxuXHRcdHJldHVybiByb3V0ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBtYXAgb2Ygcm91dGVzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSBhZGRSb3V0ZVRvTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuc2V0KCByb3V0ZS5pZCwgcm91dGUpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IGZyb20gdGhlIG1hcCBvZiByb3V0cyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgcmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuZGVsZXRlKCByb3V0ZS5pZCk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogQHBhcmFtIHVybCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gbmF2aWdhdGUgdG9cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBbcm91dGUsIGZpZWxkc10gPSB0aGlzLmZpbmRSb3V0ZUJ5VVJMKCB1cmwpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5VVJMKCB1cmwsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHJvdXRlXHJcblx0ICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgcm91dGUncyBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBSb3V0ZXIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGVcclxuXHQgKlx0XHRicm93c2VyJ3MgaGlzdG9yeS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzQnlJRC5nZXQoIGlkKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeUlEKCBpZCwgZmllbGRzKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgd2UgbWF5IG5lZWQgdG8gc3Vic3RpdHV0ZSBwYXJhbWV0ZXJzIGluIHRoZVxyXG5cdFx0Ly8gcm91dGUncyBVUkwgcGF0dGVyblxyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR1cmwgPSByb3V0ZS51cmxQYXR0ZXJuO1xyXG5cdFx0XHRpZiAodXJsICYmIGZpZWxkcylcclxuXHRcdFx0e1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmRzIGEgcm91dGUgYnkgZ29pbmcgdGhyb3VnaCB0aGUgcm91dGUgaGllcmFyY2h5IGFuZCB0cnlpbmcgdG8gbWF0Y2ggdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBJZiB0aGUgcm91dGUgaXMgZm91bmQsIHRoZSBVUkwgaXMgcGFyc2VkIGFuZCBhbnkgcGFyYW1ldGVycyBhcmUgZXh0cmFjdGVkIGZyb20gaXQuXHJcblx0ICogQHBhcmFtIHVybFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZmluZFJvdXRlQnlVUkwoIHVybDogc3RyaW5nKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRyZXR1cm4gUm91dGVyLmZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmwsIHRoaXMucm91dGVzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTG9va3MgZm9yIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTCBhbW9uZyB0aGUgZ2l2ZW4gYXJyYXkgb2YgUm91dGUgb2JqZWN0cyBhbmRcclxuXHQgKiByZWN1cnNpdmVseSBhbW9uZyB0aGVpciBzdWItcm91dGVzLlxyXG5cdCAqIEBwYXJhbSB1cmwgVVJMIHRvIG1hdGNoXHJcblx0ICogQHBhcmFtIHJvdXRlcyBBcnJheSBvZiBSb3V0ZSBvYmplY3RzIHRvIG1hdGNoIHdpdGggdGhlIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmw6IHN0cmluZywgcm91dGVzOiBSb3V0ZVtdKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRmb3IoIGxldCByb3V0ZSBvZiByb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBtYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdXJsLCByb3V0ZS51cmxQYXR0ZXJuKTtcclxuXHRcdFx0aWYgKG1hdGNoUmVzdWx0ICYmIG1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHRcdFx0cmV0dXJuIFtyb3V0ZSwgbWF0Y2hSZXN1bHQuZmllbGRzXTtcclxuXHRcdFx0ZWxzZSBpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJvb3RBbmRGaWVsZHMgPSBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgcm91dGUuc3ViUm91dGVzKTtcclxuXHRcdFx0XHRpZiAocm9vdEFuZEZpZWxkc1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByb290QW5kRmllbGRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtudWxsLCBudWxsXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiByb3V0ZSBwYXNzaW5nIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbmF2aWdhdGVUb1JvdXRlKCByb3V0ZTogUm91dGUsIHVybDogc3RyaW5nLCBmaWVsZHM6IFJvdXRlRmllbGRzLFxyXG5cdFx0XHRcdFx0bWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdC8vLy8gY2hlY2sgaWYgdGhlIG5ldyByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCByb3V0ZSBhbmQgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdC8vaWYgKHJvdXRlID09PSB0aGlzLmN1cnJSb3V0ZSlcclxuXHRcdC8vXHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBjdXJyZW50IHJvdXRlLCBhc2sgaXQgaWYgd2UgY2FuIGxlYXZlIGl0XHJcblx0XHRpZiAodGhpcy5jdXJyUm91dGUgJiYgdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZXQ6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0gdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMoKTtcclxuXHRcdFx0aWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdFx0cmV0ID0gYXdhaXQgKHJldCBhcyBQcm9taXNlPGJvb2xlYW4+KTtcclxuXHJcblx0XHRcdGlmICghcmV0KVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgdXNlIEhpc3RvcnkgQVBJIHRvIGNoYW5nZSBzdGF0ZVxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyICYmIG1ha2VIaXN0b3J5RW50cnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogcm91dGUuaWQsIHJvdXRlVVJMOiB1cmwsIGZpZWxkcyB9O1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSggc3RhdGUsIFwiXCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByb3V0ZSBhbmQgZ2V0IGl0cyBjb250ZW50XHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IHJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IHJvdXRlLm5hdlRvRnVuYyA/IHJvdXRlLm5hdlRvRnVuYyggZmllbGRzKSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGF3YWl0IChjb250ZW50IGFzIFByb21pc2U8YW55Pik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0Ly8gcmVxdWVzdCB0byBiZSB1cGRhdGVkIHNvIHRoYXQgb3VyIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWRcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBlcnJvciB3YXMgcmFpc2VkIGJ5IG9uZSBvZiB0aGUgZGVzY2VuZGFudCBjb3BvbmVudHMuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIHB1Ymxpc2ggb3Vyc2VsdmVzIGFzIGEgcm91dGVyIHNlcnZpY2VcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIGlmIGluc3RydWN0ZWQgc28sIHN1YnNjcmliZSB0byBhIHJvdXRlciBzZXJ2aWNlIGltcGxlbWVudGVkIGJ5IGFueSBvZiBjb21wb25lbnRzXHJcblx0XHQvLyB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxuXHRcdFx0dGhpcy52bi5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHJvdXRlIHRvIGRpc3BsYXlcclxuXHRcdGxldCBmaXJzdFJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRlc1swXSA6IG51bGw7XHJcblx0XHRpZiAoIWZpcnN0Um91dGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IGZpcnN0Um91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMgPyBmaXJzdFJvdXRlLm5hdlRvRnVuYygge30pIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXCJQbGVhc2Ugd2FpdCB3aGlsZSBjb250ZW50IGlzIGxvYWRpbmcuLi5cIjtcclxuXHRcdFx0KGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KS50aGVuKCAoIGRlbGF5ZWRDb250ZW50OiBhbnkpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBkZWxheWVkQ29udGVudDtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGVzdGFibGlzaCBiYXNlIFVSTCByZWxhdGl2ZSB0byB3aGljaCBhbGwgcGF0aHMgd2lsbCBiZSBjb25zaWRlcmVkXHJcblx0XHRcdGlmICghdGhpcy5iYXNlVVJMKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgcG9wc3RhdGUgZXZlbnQgZm9yIG1vbml0b3JpbmcgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kc1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiBmaXJzdFJvdXRlLmlkLCByb3V0ZVVSTDogZmlyc3RSb3V0ZS51cmxQYXR0ZXJuLCBmaWVsZHM6IG51bGwgfTtcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoIHN0YXRlLCBcIlwiLCBmaXJzdFJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnZuLnVuc3Vic2NyaWJlU2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0dGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlydFJlbmRlciggdGhpcy5jdXJyUm91dGVDb250ZW50KTtcclxuXHR9XHJcblx0XHJcblxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBub2RlUGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly90aGlzLmVycm9yID0gZXJyO1xyXG5cdFx0Ly90aGlzLmVycm9yUGF0aCA9IG5vZGVQYXRoO1xyXG5cdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXHJcblx0XHRcdDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInBpbmtcIiwgZGlzcGxheTpcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtlcnJ9XHJcblx0XHRcdFx0e25vZGVQYXRoICYmIG5vZGVQYXRoLm1hcCggKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogXCJWaXJ0dWFsXCIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuIFJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmdcclxuXHQgKiBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZWl0aGVyIGNhbGxzXHJcblx0ICogdGhlIG91dGVyQ29udGVudEZ1bmMgaWYgZGVmaW5lZCBvciBqdXN0IHJldHVybnMgdGhlIGNvbnRlbnQgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjdXJyUm91dGVDb250ZW50XHJcblx0ICogQHJldHVybiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdmlydFJlbmRlciggY3VyclJvdXRlQ29udGVudDogYW55KTogYW55XHJcblx0e1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5vdXRlckNvbnRlbnRGdW5jID8gdGhpcy5vdXRlckNvbnRlbnRGdW5jKCBjdXJyUm91dGVDb250ZW50KSA6IGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gY3VyclJvdXRlQ29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVhY3RzIG9uIHVzZXIgdXNpbmcgYmFjayBhbmQgZm9yd2FyZCBidXR0b25zLlxyXG5cdHByaXZhdGUgb25Qb3BzdGF0ZSA9ICggZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSBlLnN0YXRlIGFzIFJvdXRlU3RhdGU7XHJcblx0XHRpZiAoIXN0YXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0YXRlLnJvdXRlSUQpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeUlEKCBzdGF0ZS5yb3V0ZUlELCBzdGF0ZS5maWVsZHMpO1xyXG5cdFx0ZWxzZSBpZiAoc3RhdGUucm91dGVVUkwpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeVVSTCggc3RhdGUucm91dGVVUkwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyggXCJSb3V0ZSBzdGF0ZSBpbiBwb3BzdGF0ZSBldmVudCBoYXMgbmVpdGhlciByb3V0ZSBJRCBub3IgcGF0aC5cIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5XHJcblx0Ly8gQVBJIHRvIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy5cclxuXHRwcml2YXRlIGdldCBjb250cm9sc0Jyb3dzZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvXHJcblx0Ly8gYSByb3V0ZXIgdXAgdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHRwcml2YXRlIGdldCBjaGFpbnNUb0hpZ2hlclJvdXRlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLlxyXG5cdHByaXZhdGUgZ2V0IGJhc2VVUkwoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuYmFzZVVSTCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHRoaXMucHJvcHMuYmFzZVVSTDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZSBpbnNpZGUgdGhlIHJvdXRlcidzIG93biBjb250ZW50LiBJZlxyXG5cdCAqIHRoaXMgbWVtYmVyIGlzIHVuZGVmaW5lZCwgb25seSB0aGUgY3VycmVudCByb3V0ZSdzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldCBPdXRlckNvbnRlbnRGdW5jKCB2YWw6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMub3V0ZXJDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgb3V0ZXJDb250ZW50RnVuYzogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgYSBwcm9ncmVzcyBVSSB3aGlsZSB0aGUgcm91dGVyIGlzIGxvYWRpbmcgcm91dGUgY29udGVudC4gKi9cclxuXHRwdWJsaWMgc2V0IFByb2dyZXNzQ29udGVudEZ1bmMoIHZhbDogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5wcm9ncmVzc0NvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBwcm9ncmVzc0NvbnRlbnRGdW5jOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0Ly8gQSByb3V0ZXIgc2VydmljZSB0aGlzIHJvdXRlciB3aWxsIGRlbGVnYXRlIHRvIHdoZW4gaXQgY2Fubm90IHJlc29sdmUgYSBwYXRoLlxyXG5cdHByaXZhdGUgaGlnaGVyUm91dGVyU2VydmljZTogbWltLlJlZjxJUm91dGVyU2VydmljZT47XHJcblxyXG5cdC8vIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzIC0gdXNlZCB0byBmaW5kIHJvdXRlcyBieSBtYXRjaGluZyBwYXRocy4gTm90ZSB0aGF0IHRoaXNcclxuXHQvLyBsaXN0IGlzIGFjdHVhbGx5IGEgaGllcmFyY2h5IGJlY2F1c2Ugcm91dGVzIGNhbiBjb250YWluIHN1Yi1yb3V0ZXMuXHJcblx0cHJpdmF0ZSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcclxuXHJcblx0Ly8gTWFwIG9mIHJvdXRlIElEcyB0byBSb3V0ZSBvYmplY3RzLiBBbGwgcm91dGVzIHRoYXQgZGVmaW5lIGFuIElEIGFyZSBhZGRlZCB0byB0aGlzIG1hcCAtXHJcblx0Ly8gbm8gbWF0dGVyIGhvdyBkZWVwIGluIHRoZSBoaWVyYXJjaHkuXHJcblx0cHJpdmF0ZSByb3V0ZXNCeUlEID0gbmV3IE1hcDxzdHJpbmcsUm91dGU+KCk7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGU6IFJvdXRlO1xyXG5cclxuXHQvLyBDb250ZW50IHBvdmlkZWQgYnkgdGhlIGN1cnJlbnQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGVDb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEVycm9yIGFuZCBjb21wb25lbnQgcGF0aCBpbiBjYXNlIGFuIGVycm9yIGhhcyBiZWVuIGNhdWdodC5cclxuXHRwcml2YXRlIGVycm9yOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZXJyb3JQYXRoOiBzdHJpbmdbXSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBmb3IgdGhlIExpbmsgY29tcG9uZW50IGJlY2F1c2UuIFRoZSBwcm9wZXJ0aWVzIGluXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZSB0aGUgcm91dGU7IHRoZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBJSHRtbEFFbGVtZW50UHJvcHMgaW50ZXJmYWNlXHJcbi8vIGNvcnJlc3BvbmQgdG8gdGhlIHJlbGV2YW50IGF0dHJpYnV0ZXMgb2YgdGhlIDxhPiBET00gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua1Byb3BzIGV4dGVuZHMgbWltLklIdG1sQUVsZW1lbnRQcm9wc1xyXG57XHJcblx0Ly8gUGF0aCB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZVVSTD86IHN0cmluZztcclxuXHJcblx0Ly8gSUQgb2YgdGhlIHJvdXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlSUQ/OiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcm91dGUgd2hlbiB1c2luZyByb3V0ZUlELlxyXG5cdGZpZWxkcz86IFJvdXRlRmllbGRzO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IHNob3VsZCBiZSBtYWRlIGEgbmV3IGVudHJ5IGluIHRoZSBicm93c2VyJ3MgaGlzdG9yeTtcclxuXHQvLyB0aGF0IGlzIHRvIGJlIHN1YmplY3QgdG8gYmFjayBhbmQgZm9yd2FyZCBicm93c2VyIGNvbW1hbmRzLlxyXG5cdG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTGluayBjbGFzcyBpcyBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyBjcmVhdGluZyBsaW5rcyBoYW5kbGVkIGJ5IGEgUm91dGVyIG9iamVjdC4gSXQgaXNcclxuLy8gaW1wbGVtZW50ZWQgYXMgYSBtYW5hZ2VkIGNvbXBvbmVudCBiZWNhdXNlIGl0cyBpbnRlbmRlZCB1c2UgaXMgdmVyeSBzaW1pbGFyIHRvIHRoZSA8YT4gRE9NXHJcbi8vIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTGluayBleHRlbmRzIG1pbS5Db21wb25lbnQ8TGlua1Byb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBMaW5rUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZXh0cmFjdCBvdXIgY3VzdG9tIHBhcmFtZXRlcnMgYW5kIGxlYXZlIG9ubHkgdGhvc2UgdGhhdCBhcmUgPGE+IGF0dHJpYnV0ZXNcclxuXHRcdGxldCB7cm91dGVVUkwsIHJvdXRlSUQsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSwgLi4ucmVzdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIDxhIGhyZWY9XCIjXCIgY2xpY2s9e3RoaXMub25DbGlja30gey4uLnJlc3R9PlxyXG5cdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwvYT47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25DbGljayggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNlcnZpY2U6IElSb3V0ZXJTZXJ2aWNlID0gdGhpcy52bi5nZXRTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdGlmICghc2VydmljZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLnJvdXRlSUQpXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeUlEKCB0aGlzLnByb3BzLnJvdXRlSUQsIHRoaXMucHJvcHMuZmllbGRzLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlVUkwoIHRoaXMucHJvcHMucm91dGVVUkwsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiXHJcbmltcG9ydCB7VHJlZU5vZGVDb250YWluZXJ9IGZyb20gXCIuL1RyZWVOb2RlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWUgY2xhc3MgaXMgYSBnZW5lcmFsIHB1cnBvc2UgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGltcGxlbWVudHMgSVRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudGFiSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoICgpID0+IG5ldyBUcmVlTm9kZSggbnVsbCwgMCwgdGhpcykpO1xyXG5cdFx0dGhpcy5lbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fdGFiSW5kZXg7IH1cclxuXHRwdWJsaWMgc2V0IHRhYkluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1fdGFiSW5kZXggPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZE5vZGUoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9zZWxlY3RlZE5vZGU7IH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbG1SZWZ9IHRhYmluZGV4PXt0aGlzLnRhYkluZGV4fSBjbGFzcz17dGhpcy5jc3NDbGFzc1RyZWV9IGtleWRvd249e3RoaXMub25LZXlEb3dufT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKVxyXG5cdFx0XHR0aGlzLmV4cGFuZE9yU2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIilcclxuXHRcdFx0dGhpcy5jb2xsYXBzZU9yU2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbmV4dE5vZGUgPSB0aGlzLmZpbmREb3duKCBub2RlKTtcclxuXHRcdGlmIChuZXh0Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0bmV4dE5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdG5leHROb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcHJldk5vZGUgPSB0aGlzLmZpbmRVcCggbm9kZSk7XHJcblx0XHRpZiAocHJldk5vZGUpXHJcblx0XHR7XHJcblx0XHRcdHByZXZOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRwcmV2Tm9kZS5zY3JvbGxJbnRvVmlldyggdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGNvbGxhcHNlZCwgZXhwYW5kcyBpdC4gSWYgdGhlIG5vZGUgaXMgYWxyZWFkeSBleHBhbmRlZCwgc2VsZWN0cyB0aGUgZmlyc3RcclxuXHQvLyBjaGlsZCBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIHNlbGVjdHMgdGhlIG5leHQgbm9kZSBkb3duLlxyXG5cdHByaXZhdGUgZXhwYW5kT3JTZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld05vZGUgPSBub2RlLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdFx0XHRuZXdOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRcdG5ld05vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS5leHBhbmQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgZXhwYW5kZWQsIGNvbGxhcHNlcyBpdDsgb3RoZXJ3aXNlLCBzZWxlY3RzIHRoZSBub2RlJ3MgcGFyZW50LlxyXG5cdHByaXZhdGUgY29sbGFwc2VPclNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdG5vZGUuY29sbGFwc2UoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZERvd24oIG5vZGU6IFRyZWVOb2RlLCBza2lwRXhwYW5kZWRTdWJOb2RlczogYm9vbGVhbiA9IGZhbHNlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHNraXBFeHBhbmRlZFN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGlmIChub2RlLmluZGV4IDwgY29udGFpbmVyLm5vZGVzLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4ICsgMV07XHJcblx0XHRcdGVsc2UgaWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUubV9wYXJlbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pc0V4cGFuZGVkICYmIG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdG5vZGUuY29udGFpbmVyLm5vZGVzWzBdLnNlbGVjdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRVcCggbm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pbmRleCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubV9wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0bGV0IHByZXZOb2RlID0gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggLSAxXTtcclxuXHRcdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBwcmV2Tm9kZSk7XHJcblx0XHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IHByZXZOb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHdoaWNoIGlzIHRoZSBsYXN0IGV4cGFuZGVkIGRlc2NlbmRhbmQgb2YgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kTGFzdEV4cGFuZGVkTm9kZSggY3Vyck5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIWN1cnJOb2RlIHx8IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgfHwgIWN1cnJOb2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGxhc3RDaGlsZCA9IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlc1tjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoLTFdO1xyXG5cdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBsYXN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogbGFzdENoaWxkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NDbGFzc1RyZWUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlVHJlZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWVcIiwgXCIudHJlZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3Vyc29yOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiZG9kZ2VyYmx1ZVwiXSxcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlXCIsIFwiLnRyZWUtbm9kZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50ID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudEhvdmVyID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQ6aG92ZXJcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKik6aG92ZXJcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJsaWdodGN5YW5cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwiZG90dGVkXCJdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJkb2RnZXJibHVlXCIsXHJcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUljb24gPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtaWNvblwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVJY29uID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWljb25cIiwgXCIudHJlZS1ub2RlLWljb24oKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxZW1cIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMWVtXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc1N1Ym5vZGVzID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1zdWJub2Rlc1wiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVN1Yk5vZGVzID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1zdWJub2Rlc1wiLCBcIi50cmVlLXN1Ym5vZGVzKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjE2cHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHJpdmF0ZSBtX3RhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBub2Rlcy5cclxuXHRwcml2YXRlIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBzZWxlY3RlZCBub2RlIG9yIG51bGwgaWYgbm8gbm9kZSBpcyBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9zZWxlY3RlZE5vZGU6IFRyZWVOb2RlID0gbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRyZWUuXHJcblx0cHVibGljIGVsbVJlZjogbWltLlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG5cdC8vIENTUyBydWxlcyB1c2VkIGJ5IHRoZSBUcmVlIGFuZCBUcmVlTm9kZSBjb250cm9sc1xyXG5cdHByaXZhdGUgY3NzUnVsZVRyZWU6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnQ6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudEhvdmVyOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZDogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVJY29uOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlU3ViTm9kZXM6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHJcblx0Ly8gQ1NTIGxvY2FsIGNsYXNzIG5hbWVzXHJcblx0cHVibGljIGNzc0NsYXNzVHJlZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGU6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlQ29udGVudDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQ6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlSWNvbjogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc1N1Ym5vZGVzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIm1pbWNzc1wiIFxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZSBleHRlbmRzIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0dGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBub2Rlcy5cclxuXHRyZWFkb25seSBub2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlXHJcblx0cmVhZG9ubHkgc2VsZWN0ZWROb2RlOiBJVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVQYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhIHRyZWUgbm9kZSB0aGF0IGNhbiBiZSBzZXQvY2hhbmdlZFxyXG4vLyBleHRlcm5hbGx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQYXJhbXNcclxue1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHRpY29uPzogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHRleHRDb2xvcj86IENzc0NvbG9yO1xyXG5cdGJnQ29sb3I/OiBDc3NDb2xvcjtcclxuXHRpdGFsaWM/OiBib29sZWFuO1xyXG5cdGJvbGQ/OiBib29sZWFuO1xyXG5cdGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG5cdGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVJY29uUGFyYW1zIGludGVyZmFjZSByZXByZXNlbnRzIHBhcmFtZXRlcnMgb2YgYW4gaWNvbiBvZiBhIHRyZWUgbm9kZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFRyZWVOb2RlSWNvblBhcmFtcyA9IHtjbGFzczogc3RyaW5nfSB8IHtpbWc6IHN0cmluZ31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSBpbiB0aGUgdHJlZSBoaWVyYXJjaHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSBleHRlbmRzIElUcmVlTm9kZVBhcmFtcywgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHJlYWRvbmx5IHRyZWU6IElUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cmVhZG9ubHkgcGFyZW50OiBJVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgbGV2ZWwgb2YgdGhlIG5vZGUgaW4gdGhlIGFuY2VzdHJhbCBoaWVyYXJjaHkuXHJcblx0cmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzOiBJVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgZXhwYW5kZWQuXHJcblx0cmVhZG9ubHkgaXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0ZXhwYW5kKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdGNvbGxhcHNlKCk6IHZvaWQ7XHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0c2VsZWN0KCk6IHZvaWQ7XHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHR1bnNlbGVjdCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRyZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cmVtb3ZlQWxsTm9kZXMoKTogdm9pZDtcclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0ZXhwYW5kQWxsKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRjb2xsYXBzZUFsbCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiO1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIHRyZWUgY29udHJvbCBpbnN0YW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJlZSgpOiBJVHJlZVxyXG57XHJcblx0cmV0dXJuIG5ldyBUcmVlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXQsIENzc0NvbG9yfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtcywgVHJlZU5vZGVJY29uUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCJcclxuaW1wb3J0IHtUcmVlTm9kZUNvbnRhaW5lcn0gZnJvbSBcIi4vVHJlZU5vZGVDb250YWluZXJcIlxyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSB3aXRoaW4gYSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVRyZWVOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcGFyZW50OiBUcmVlTm9kZSwgbGV2ZWw6IG51bWJlciwgdHJlZTogVHJlZSA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1fcGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5tX3RyZWUgPSBwYXJlbnQgIT09IG51bGwgPyBwYXJlbnQubV90cmVlIDogdHJlZTtcclxuXHRcdHRoaXMubV9sZXZlbCA9IGxldmVsO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoIHRoaXMubm9kZUZhY3RvcnkpO1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubV9pc1NlbGVjdGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZXMgb2Ygc3ViLW5vZGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5ID0gKCk6IFRyZWVOb2RlID0+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBUcmVlTm9kZSggdGhpcywgdGhpcy5tX2xldmVsICsgMSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cHVibGljIGdldCB0cmVlKCk6IElUcmVlIHsgcmV0dXJuIHRoaXMubV90cmVlOyB9XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHBhcmVudCgpOiBJVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5tX3BhcmVudDsgfVxyXG5cclxuXHQvLyAwLWJhc2VkIGxldmVsIG9mIHRoZSBub2RlIGluIHRoZSBhbmNlc3RyYWwgaGllcmFyY2h5LlxyXG5cdHB1YmxpYyBnZXQgbGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV9sZXZlbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1faW5kZXg7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzZXQgaW5kZXgoIHZhbDogbnVtYmVyKSB7IHRoaXMubV9pbmRleCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVycy5cclxuXHRwdWJsaWMgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9jb250ZW50OyB9XHJcblx0cHVibGljIHNldCBjb250ZW50KCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY29udGVudCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaWNvbigpOiBUcmVlTm9kZUljb25QYXJhbXMgeyByZXR1cm4gdGhpcy5tX2ljb247IH1cclxuXHRwdWJsaWMgc2V0IGljb24oIHZhbDogVHJlZU5vZGVJY29uUGFyYW1zKSB7IHRoaXMubV9pY29uID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCB0ZXh0Q29sb3IoKTogQ3NzQ29sb3IgeyByZXR1cm4gdGhpcy5tX3RleHRDb2xvcjsgfVxyXG5cdHB1YmxpYyBzZXQgdGV4dENvbG9yKCB2YWw6IENzc0NvbG9yKSB7IHRoaXMubV90ZXh0Q29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJnQ29sb3IoKTogQ3NzQ29sb3IgeyByZXR1cm4gdGhpcy5tX2JnQ29sb3I7IH1cclxuXHRwdWJsaWMgc2V0IGJnQ29sb3IoIHZhbDogQ3NzQ29sb3IpIHsgdGhpcy5tX2JnQ29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0YWxpYygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pdGFsaWM7IH1cclxuXHRwdWJsaWMgc2V0IGl0YWxpYyggdmFsOiBib29sZWFuKSB7IHRoaXMubV9pdGFsaWMgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJvbGQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1fYm9sZDsgfVxyXG5cdHB1YmxpYyBzZXQgYm9sZCggdmFsOiBib29sZWFuKSB7IHRoaXMubV9ib2xkID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2N1c3RvbUNsYXNzOyB9XHJcblx0cHVibGljIHNldCBjdXN0b21DbGFzcyggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2N1c3RvbUNsYXNzID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBkYXRhKCk6IGFueSB7IHJldHVybiB0aGlzLm1fZGF0YTsgfVxyXG5cdHB1YmxpYyBzZXQgZGF0YSggdmFsOiBhbnkpIHsgdGhpcy5tX2RhdGEgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1faXNFeHBhbmRlZDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgdGhlIG5vZGUgc28gdGhhdCBpdHMgc3ViLW5vZGVzIGJlY29tZSB2aXNpYmxlLlxyXG5cdHB1YmxpYyBleHBhbmQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyB0aGUgbm9kZSBoaWRpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0cHVibGljIHNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB1bnNlbGVjdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUgKGlmIGFueSlcclxuXHRcdFx0aWYgKHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlICE9IG51bGwpXHJcblx0XHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUudW5zZWxlY3QoKTtcclxuXHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gdGhpcztcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgdW5zZWxlY3QoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm1faXNTZWxlY3RlZCAhPT0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1Yk5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBvbmx5IGlmIHRoaXMgd2FzIHRoZSBmaXJzdCBzdWItbm9kZVxyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMSlcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cclxuXHRcdHJldHVybiBzdWJOb2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRMZW5ndGggPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGg7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVOb2RlKCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGxhc3Qgc3ViLW5vZGVcclxuXHRcdGlmIChvbGRMZW5ndGggPT09IDEgJiYgdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChvbGRMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxOb2RlcygpO1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZXhwYW5kKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5leHBhbmRBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbGxhcHNlKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5jb2xsYXBzZUFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIHRoZSBub2RlIGlzIG5vdCB3aXRoaW4gdGhlIHZpZXdwb3J0IGFuZCBzY3JvbGxzIGl0IGludG8gdmlldyBhbGluZ2luZyBpdFxyXG5cdC8vIHdpdGggdGhlIHVwcGVyIG9yIGxvd2VyIGVkZ2Ugb2YgdGhlIHRyZWUgY29udGFpbmVyLlxyXG5cdHB1YmxpYyBzY3JvbGxJbnRvVmlldyggYWxpZ25VcDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMubV90cmVlLmVsbVJlZi5yIHx8ICF0aGlzLmNvbnRlbnRFbG1SZWYucilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCB0cmVlIGFuZCBub2RlIGJvdW5kaW5nIHJlY3RcclxuXHRcdGxldCByY1RyZWU6IENsaWVudFJlY3QgPSB0aGlzLm1fdHJlZS5lbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCByY05vZGU6IENsaWVudFJlY3QgPSB0aGlzLmNvbnRlbnRFbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGlmIChyY05vZGUuYm90dG9tIDw9IHJjVHJlZS5ib3R0b20gJiYgcmNOb2RlLnRvcCA+PSByY1RyZWUudG9wKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmLnIuc2Nyb2xsSW50b1ZpZXcoIGFsaWduVXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHR7dGhpcy5yZW5kZXJOb2RlKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlclN1Yk5vZGVzKCl9XHJcblx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJOb2RlKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBleHBhbmRlckNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IHRoaXMubV9pc0V4cGFuZGVkID8gXCJmYS1jYXJldC1kb3duXCIgOiBcImZhLWNhcmV0LXJpZ2h0XCI7XHJcblxyXG5cdFx0bGV0IGljb25Db250ZW50OiBhbnk7XHJcblx0XHRpZiAodGhpcy5tX2ljb24pXHJcblx0XHR7XHJcblx0XHRcdGlmIChcImNsYXNzXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8c3BhbiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbiArIFwiIFwiICsgdGhpcy5tX2ljb24uY2xhc3N9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0XHRlbHNlIGlmIChcImltZ1wiIGluIHRoaXMubV9pY29uKVxyXG5cdFx0XHRcdGljb25Db250ZW50ID0gPGltZyBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbn0gc3JjPXt0aGlzLm1faWNvbi5pbWd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb250ZW50Q2xhc3M6IHN0cmluZyA9IHRoaXMubV9pc1NlbGVjdGVkID8gdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkIDogdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudDtcclxuXHRcdGlmICh0aGlzLm1fY3VzdG9tQ2xhc3MpXHJcblx0XHRcdGNvbnRlbnRDbGFzcyArPSBcIiBcIiArIHRoaXMubV9jdXN0b21DbGFzcztcclxuXHJcblx0XHRsZXQgY29udGVudFN0eWxlOiBTdHlsZXNldCA9IHt9O1xyXG5cdFx0aWYgKHRoaXMubV90ZXh0Q29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5jb2xvciA9IHRoaXMubV90ZXh0Q29sb3I7XHJcblx0XHRpZiAodGhpcy5tX2JnQ29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1fYmdDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1faXRhbGljKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHRcdGlmICh0aGlzLm1fYm9sZClcclxuXHRcdFx0Y29udGVudFN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlfT5cclxuXHRcdFx0PGkgY2xhc3M9e1wiZmEgZmEtZncgXCIgKyBleHBhbmRlckNsYXNzTmFtZX0gY2xpY2s9e3RoaXMub25FeHBhbmRlckNsaWNrZWR9IC8+XHJcblx0XHRcdHtpY29uQ29udGVudH1cclxuXHRcdFx0PHNwYW4gcmVmPXt0aGlzLmNvbnRlbnRFbG1SZWZ9IGRyYWdTb3VyY2UgY2xhc3M9e2NvbnRlbnRDbGFzc30gc3R5bGU9e2NvbnRlbnRTdHlsZX1cclxuXHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9Pnt0aGlzLm1fY29udGVudH08L3NwYW4+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJTdWJOb2RlcygpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc1N1Ym5vZGVzfSBzdHlsZT17e2Rpc3BsYXk6dGhpcy5tX2lzRXhwYW5kZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cdFx0XHR7dGhpcy5jb250YWluZXJ9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkRibENsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyY2xpY2tzIG9uIHRoZSBleHBhbmRlciBpY29uXHJcblx0cHJpdmF0ZSBvbkV4cGFuZGVyQ2xpY2tlZCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHJlZSBjb250cm9sIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzXHJcblx0cHVibGljIG1fdHJlZTogVHJlZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGVcclxuXHRwdWJsaWMgbV9wYXJlbnQ6IFRyZWVOb2RlO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGVudGF0aW9uIGxldmVsIG9mIHRoZSBibG9ja1xyXG5cdHB1YmxpYyBtX2xldmVsOiBudW1iZXI7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1faW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBUcmVlTm9kZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IGV4cGFuZGVkICh0aGF0IGlzIHN1Yi1ub2RlcyBhcmUgdmlzaWJsZSkuXHJcblx0cHVibGljIG1faXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBtX2lzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlJ3MgY29udGVudC5cclxuXHRwdWJsaWMgY29udGVudEVsbVJlZjogbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnNcclxuXHRwcml2YXRlIG1fY29udGVudDogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9pY29uOiBUcmVlTm9kZUljb25QYXJhbXM7XHJcblx0cHJpdmF0ZSBtX3RleHRDb2xvcjogQ3NzQ29sb3I7XHJcblx0cHJpdmF0ZSBtX2JnQ29sb3I6IENzc0NvbG9yO1xyXG5cdHByaXZhdGUgbV9pdGFsaWM6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2JvbGQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2N1c3RvbUNsYXNzOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2RhdGE6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlQ29udGFpbmVyIGNsYXNzIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMgdGhhdCBhcmUgZGlzcGxheWVkIGFuZFxyXG4vLyBoaWRkZW4gdG9nZXRoZXIuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250YWluZXIgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRjb25zdHJ1Y3Rvciggbm9kZUZhY3Rvcnk6ICgpID0+IFRyZWVOb2RlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IFtdO1xyXG5cdFx0dGhpcy5ub2RlRmFjdG9yeSA9IG5vZGVGYWN0b3J5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0bGV0IG5vZGU6IFRyZWVOb2RlID0gdGhpcy5ub2RlRmFjdG9yeSgpO1xyXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwgfHwgaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuaW5kZXggPSBjdXJyTGVuZ3RoO1xyXG5cdFx0XHR0aGlzLm5vZGVzLnB1c2goIG5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gaW5kZXg7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgbm9kZSk7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgaW5kZXhlcyBvZiB0aGUgbm9kZXMgYWZ0ZXIgdGhlIGluc2VydGVkIG9uZVxyXG5cdFx0XHRmb3IoIGxldCBpID0gaW5kZXggKyAxOyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHRoaXNbaV0uaW5kZXggPSBpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGUuY29udGVudCA9IHBhcmFtcy5jb250ZW50O1xyXG5cdFx0bm9kZS5pY29uID0gcGFyYW1zLmljb247XHJcblx0XHRub2RlLnRleHRDb2xvciA9IHBhcmFtcy50ZXh0Q29sb3I7XHJcblx0XHRub2RlLmJnQ29sb3IgPSBwYXJhbXMuYmdDb2xvcjtcclxuXHRcdG5vZGUuaXRhbGljID0gcGFyYW1zLml0YWxpYztcclxuXHRcdG5vZGUuYm9sZCA9IHBhcmFtcy5ib2xkO1xyXG5cdFx0bm9kZS5jdXN0b21DbGFzcyA9IHBhcmFtcy5jdXN0b21DbGFzcztcclxuXHRcdG5vZGUuZGF0YSA9IHBhcmFtcy5kYXRhO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIHN1Yi1ub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3ViLW5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gY3Vyckxlbmd0aClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInJlcGxhY2VOb2RlOiBpbnZhbGlkIGluZGV4IFwiICsgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSByZW1vdmVkIG9uZVxyXG5cdFx0Zm9yKCBsZXQgaSA9IGluZGV4OyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoY3Vyckxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCAwLCBjdXJyTGVuZ3RoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBub2RlIG9mIHRoaXMubm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuZXhwYW5kQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmNvbGxhcHNlQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5ub2RlcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXJyYXkgb2YgVHJlZU5vZGUgb2JqZWN0c1xyXG5cdHB1YmxpYyBub2RlczogVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGluc3RhbmNlIG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhlIFNjcm9sbEF4aXMgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBheGlzIG9mIGRhdGEsIHdoaWNoIGNvbnNpc3RzIG9mIGl0ZW1zLCBhbmQgcGVyZm9ybXNcclxuICogY2FsY3VsYXRpb25zIGR1cmluZyBzY3JvbGxpbmcgYmFjayBhbmQgZm9ydGggYWxvbmcgdGhlIGF4aXMuIFRoZSBTY3JvbGxBeGlzIGNsYXNzIGl0c2VsZiBkb2Vzbid0XHJcbiAqIGhhdmUgYW55IHZpc3VhbCByZXByZXNlbnRhdGlvbiBhbmQgb25seSBzZXJ2ZXMgYXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGFsZ29yaXRobSB0aGF0XHJcbiAqIGhlbHBzIHZpcnR1YWxpemUgc2Nyb2xsaW5nIC0gdGhhdCBpcyBkaXNwbGF5IG9ubHkgc21hbGwgc3Vic2V0IG9mIGRhdGEgaXRlbXMgYW5kIGFkZC9yZW1vdmVcclxuICogaXRlbXMgYXMgc2Nyb2xsaW5nIGhhcHBlbnMuXHJcbiAqIFxyXG4gKiBWQXhpcyBhc3N1bWVzIHRoZSB1c2Ugb2YgMyBET00gZWxlbWVudHM6XHJcbiAqXHQtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBlbGVtZW50IHdoaWNoIGRpc3BsYXlzIHRoZSBzY3JvbGxiYXIgd2hlbiBuZWNlc3NhcnlcclxuICpcdC0gd2FsbCAtIHRoZSBcImlubmVyXCIgZWxlbWVudCB3aGljaCBoYXMgdGhlIHNpemUgb2YgdGhlIGVudGlyZSBwb3NzaWJsZSBzZXQgb2YgaXRlbXMuIEl0IGlzXHJcbiAqXHRcdG5lZWRlZCB0byBtYWtlIHNjcm9sbGluZyBtb3JlLW9yLWxlc3MgYWNjdXJhdGUuXHJcbiAqXHQtIHN1YnNldCAtIHRoZSBlbGVtZW50IHRoYXQgZGlzcGxheXMgb25seSBpdGVtcyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1cyBhIGNlcnRhaW4gbnVtYmVyIG9mXHJcbiAqXHRcdGFkZGl0aW9uYWwgaXRlbXMgZm9yIFwib3ZlcnNjYW5cIi5cclxuICogXHJcbiAqIFZBeGlzIGNhbGN1bGF0ZXMgYXZlcmFnZSBpdGVtIHNpemUgYnkgZGl2aWRpbmcgdGhlIHNpemUgb2YgdGhlIGRhdGEgYnkgdGhlIG51bWJlciBvZiBpdGVtcy5cclxuICogVGhlIGF2ZXJhZ2UgdmFsdWUgaXMgcmVjYWxjdWxhdGVkIGV2ZXJ5IHRpbWUgaXRlbXMgYXJlIGFkZGVkIHRvIG9yIGRlbGV0ZWQgZnJvbSB0aGUgc3Vic2V0IHRodXNcclxuICogYWNjb21vZGF0aW5nIGl0ZW1zIHdpdGggZGlmZmVyZW4gc2l6ZXMuIEJhc2VkIG9uIHRoZSBhdmVyYWdlIHZhbHVlIHRoZSB3YWxsIGVsZW1lbnQgaXMgc2l6ZWRcclxuICogdG8gaW5jbHVkZSB0aGUgZW50aXJlIGRhdGEgc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZBeGlzIHVzZXMgbWluaW11bSwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhbiBudW1iZXIgb2YgaXRlbXMgb24gYm90aCBzaWRlcyBvZiB0aGUgZnJhbWUgYW5kXHJcbiAqIG1ha2VzIHN1cmUgdGhhdCB0aGUgYWN0dWFsIG51bWJlciBvZiBpdGVtcyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMuIER1cmluZ1xyXG4gKiBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLCBuZXcgaXRlbXMgYXJlIGFkZGVkOyBpZlxyXG4gKiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSwgaXRlbXMgYXJlIGRlbGV0ZWQuIFdoZW4gaXRlbXMgYXJlIGFkZGVkIHRoZXkgYXJlIGFkZGVkIHVwIHRvXHJcbiAqIHRoZSBvcHRpbWFsIG92ZXJzY2FuIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzXHJcbntcclxuXHQvLyBNaW5pbWFsIG51bWJlciBvZiBhZGRpdGlvbmFsIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGZhbGxzIHVuZGVyIHRoaXMgbnVtYmVyLCBuZXcgaXRlbXMgYXJlIGFkZGVkLlxyXG5cdHByaXZhdGUgbWluT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gT3B0aW1hbCBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0LiBXaGVuIGFkZGluZyBuZXcgaXRlbXMgb3IgcmVtb3ZpbmdcclxuXHQvLyBleGlzdGluZyBpdGVtcyB3ZSB3YW50IHRvIHJpY2ggdGhpcyBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIG92ZXJzY2FuLlxyXG5cdHByaXZhdGUgb3B0T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gTWF4aW11bSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIG1haW50YWluZWQuIFdoZW5cclxuXHQvLyBkdXJpbmcgc2Nyb2xsaW5nIHRoZSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgZXhjZWVkcyB0aGlzIG51bWJlciwgaXRlbXMgYXJlIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBtYXhPdmVyc2NhbjogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtaW5PdmVyc2NhbjogbnVtYmVyLCBvcHRPdmVyc2NhbjogbnVtYmVyLCBtYXhPdmVyc2NhbjogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMubWluT3ZlcnNjYW4gPSBtaW5PdmVyc2NhbjtcclxuXHRcdHRoaXMub3B0T3ZlcnNjYW4gPSBvcHRPdmVyc2NhbjtcclxuXHRcdHRoaXMubWF4T3ZlcnNjYW4gPSBtYXhPdmVyc2NhbjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvY2N1cGllZCBieSB0aGUgY3VycmVudCBkYXRhIHNldCByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgZnJhbWVcclxuXHQgKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbXZvdmUgaXRlbXMuIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgd2hlbjpcclxuXHQgKlx0LSBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBkYXRhIHNldCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBzaXplIG9mIHRoZSBmcmFtZSBlbGVtZW50IGNoYW5nZXMuXHJcblx0ICpcdC0gVGhlIGZyYW1lIGVsZW1lbnQgaXMgc2Nyb2xsZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRvdGFsQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBlbnRpcmUgZGF0YSBzZXRcclxuXHQgKiBAcGFyYW0gZmlyc3RJdGVtIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGl0ZW1Db3VudCBOdW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBzdWJzZXRcclxuXHQgKiBAcGFyYW0gZnJhbWVTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXplbHMgb2YgdGhlIGZyYW1lIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gd2FsbFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgd2FsbCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHN1YnNldFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgc3Vic2V0IGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gc2Nyb2xsUG9zIEN1cnJlbnQgb3IgbmV3IHNjcm9sbCBwb3NpdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgbWVhc3VyZSggdG90YWxDb3VudDogbnVtYmVyLCBvbGRGaXJzdDogbnVtYmVyLCBvbGRDb3VudDogbnVtYmVyLCBvbGRBdmdJdGVtU2l6ZTogbnVtYmVyLFxyXG5cdFx0ZnJhbWVTaXplOiBudW1iZXIsIHdhbGxTaXplOiBudW1iZXIsIHN1YnNldFNpemU6IG51bWJlciwgc2Nyb2xsUG9zOiBudW1iZXIpOiBTY3JvbGxBeGlzQWN0aW9uXHJcblx0e1xyXG5cdFx0Ly8gcHJlcGFyZSB0aGUgb2JqZWN0IHRvIGJlIHJldHVybmVkXHJcblx0XHRsZXQgcmV0QWN0aW9uID0gbmV3IFNjcm9sbEF4aXNBY3Rpb24oKTtcclxuXHRcdGlmICh0b3RhbENvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gcmV0QWN0aW9uO1xyXG5cdFx0ZWxzZSBpZiAob2xkQ291bnQgPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpdGVtQ291bnQgY2Fubm90IGJlIHplcm9cIik7XHJcblxyXG5cdFx0bGV0IG9sZExhc3QgPSBvbGRGaXJzdCArIG9sZENvdW50IC0gMTtcclxuXHRcdGxldCB0b3RhbExhc3QgPSB0b3RhbENvdW50IC0gMTtcclxuXHJcblx0XHQvLyBjYWxjdWxhdGUgbmV3IGF2ZXJhZ2UgaXRlbSBzaXplIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGN1cnJlbnQgc3Vic2V0XHJcblx0XHQvLyBhbmQgdGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgZGF0YSBlbGVtZW50LlxyXG5cdFx0bGV0IG5ld0F2Z0l0ZW1TaXplID0gc3Vic2V0U2l6ZSAvIG9sZENvdW50O1xyXG5cdFx0aWYgKG9sZEF2Z0l0ZW1TaXplKVxyXG5cdFx0XHRuZXdBdmdJdGVtU2l6ZSA9IChuZXdBdmdJdGVtU2l6ZSArIG9sZEF2Z0l0ZW1TaXplKSAvIDI7XHJcblxyXG5cdFx0Ly8gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBhbmQgdGhlIGF2ZXJhZ2Ugc2l6ZSBlc3RpbWF0ZSB3aGF0IGl0ZW1zIHdvdWxkIGZpdCBpbnNpZGVcclxuXHRcdC8vIHRoZSBmcmFtZSBlbGVtZW50LlxyXG5cdFx0bGV0IGZpdEZpcnN0ID0gTWF0aC5taW4oIE1hdGguZmxvb3IoIHNjcm9sbFBvcyAvIG5ld0F2Z0l0ZW1TaXplKSwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBmaXRMYXN0ID0gTWF0aC5taW4oIE1hdGguY2VpbCggKHNjcm9sbFBvcyArIGZyYW1lU2l6ZSkgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblxyXG5cdFx0Ly8gZ2V0IG5ldyBmaXJzdCBhbmQgbGFzdCAgaW5kaWNlcyB3aXRoIG1pbmltYWwsIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW5cclxuXHRcdGxldCBtaW5PdmVyc2NhbkZpcnN0ID0gTWF0aC5tYXgoIGZpdEZpcnN0IC0gdGhpcy5taW5PdmVyc2NhbiwgMCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMub3B0T3ZlcnNjYW4sIDApXHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWF4T3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG1pbk92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5taW5PdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBvcHRPdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMub3B0T3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm1heE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdGxldCBuZXdGaXJzdCA9IG9sZEZpcnN0ID4gbWluT3ZlcnNjYW5GaXJzdCB8fCBvbGRGaXJzdCA8IG1heE92ZXJzY2FuRmlyc3QgPyBvcHRPdmVyc2NhbkZpcnN0IDogb2xkRmlyc3Q7XHJcblx0XHRsZXQgbmV3TGFzdCA9IG9sZExhc3QgPCBtaW5PdmVyc2Nhbkxhc3QgfHwgb2xkTGFzdCA+IG1heE92ZXJzY2FuTGFzdCA/IG9wdE92ZXJzY2FuTGFzdCA6IG9sZExhc3Q7XHJcblxyXG5cdFx0aWYgKG5ld0ZpcnN0ID4gbmV3TGFzdClcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYFdyb25nIFNjcm9sbEF4aXMgY2FsY3VsYXRpb246IG5ld0ZpcnN0ICcke25ld0ZpcnN0fScgaXMgZ3JlYXRlciB0aGFuIG5ld0xhc3QgJyR7bmV3TGFzdH0nYClcclxuXHJcblx0XHQvLyBzZXQgd2hhdCB3ZSBhbHJlYWR5IGtub3cgaW50byB0aGUgcmV0dXJuIG9iamVjdFxyXG5cdFx0cmV0QWN0aW9uLm5ld0ZpcnN0ID0gbmV3Rmlyc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3TGFzdCA9IG5ld0xhc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3QXZnSXRlbVNpemUgPSBuZXdBdmdJdGVtU2l6ZTtcclxuXHRcdHJldEFjdGlvbi5uZXdXYWxsU2l6ZSA9IE1hdGguY2VpbCggdG90YWxDb3VudCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHRcdHJldEFjdGlvbi5uZXdTdWJzZXRPZmZzZXQgPSBNYXRoLmNlaWwoIG5ld0ZpcnN0ICogbmV3QXZnSXRlbVNpemUpO1xyXG5cclxuXHRcdC8vIG5vdyB0aGF0IHdlIGhhdmUgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zIHdlIHdhbnQsIGRldGVybWluZSB3aGF0IGl0ZW1zIHNob3VsZCBiZVxyXG5cdFx0Ly8gYWRkZWQvcmVtb3ZlZCBpbiB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgZW5kXHJcblx0XHRpZiAobmV3Rmlyc3QgPT0gb2xkRmlyc3QgJiYgbmV3TGFzdCA9PSBvbGRMYXN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IGRhdGFzZXQgaXMgdGhlIHNhbWUgYXMgdGhlIG9sZCBvbmUsIGRvbid0IGFkZC9yZW1vdmUgYW55IGl0ZW1zXHJcblx0XHRcdHJldEFjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZExhc3QgfHwgbmV3TGFzdCA8IG9sZEZpcnN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGRhdGFzZXRzIGRvbid0IGludGVyc2VjdCwgcmVtb3ZlIGFsbCBleGlzdGluZyBhbmQgYWRkIGFsbFxyXG5cdFx0XHQvLyBuZXcgaXRlbXMuXHJcblx0XHRcdHJldEFjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV3Rmlyc3QgPCBvbGRGaXJzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPSBvbGRGaXJzdCAtIG5ld0ZpcnN0O1xyXG5cdFx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZEZpcnN0KVxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCA9IG5ld0ZpcnN0IC0gb2xkRmlyc3Q7XHJcblxyXG5cdFx0XHRpZiAobmV3TGFzdCA8IG9sZExhc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA9IG9sZExhc3QgLSBuZXdMYXN0O1xyXG5cdFx0XHRlbHNlIGlmIChuZXdMYXN0ID4gb2xkTGFzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0RW5kID0gbmV3TGFzdCAtIG9sZExhc3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzQWN0aW9uIGNsYXNzIHJlcHJlc2VudHMgdGhlIGFjdGlvbihzKSB0aGF0IHNob3VsZCBiZSBkb25lIGFmdGVyIHRoZSBTY3JvbGxBeGlzXHJcbiAqIHBlcmZvcm1lZCBjYWxjdWxhdGlvbnMgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZyYW1lLCB3YWxsIGFuZCBkYXRhLiBUaGUgYWN0aW9uc1xyXG4gKiBhcmUgaW5zdHJ1Y3Rpb25zIHRvIGFkZCBvciByZW1vdmUgaXRlbXMgYW5kIHRvIHNldCB3YWxsIHNpemUgYW5kIGRhdGEgb2Zmc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEF4aXNBY3Rpb25cclxue1xyXG5cdC8vIE5ldyBhdmVhcmFnZSBpdGVtIHNpemVcclxuXHRuZXdBdmdJdGVtU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IHNpemUgdGhhdCBzaG91bGQgYmUgc2V0IHRvIHRoZSB3YWxsIGVsZW1lbnRcclxuXHRuZXdXYWxsU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IG9mZnNldCBvZiB0aGUgc3Vic2V0IGVsZW1lbnQgZnJvbSB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3U3Vic2V0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB0aGF0IHNob3VsZCBiZSBpbiB0aGUgc3Vic2V0XHJcblx0bmV3Rmlyc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0xhc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIG5laXRoZXIgYWRkIG5vciByZW1vdmUgYW55IGl0ZW1zLlxyXG5cdG5vQWRkUmVtb3ZlTmVlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMuIElmIHRoaXMgZmxhZyBpcyBzZXRcclxuXHQvLyB0byB0cnVlLCB0aGVuIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMgYW5kIHRoZW4gYWRkIGFsbCBpdGVtcyBmcm9tXHJcblx0Ly8gbmV3Rmlyc3QgdG8gbmV3TGFzdFxyXG5cdG5lZWVkVG9SZW1vdmVBbGxJdGVtczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlIGF0IHRoZSBiZWdpbm5pbmcuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZEZpcnN0XHJcblx0Ly8gdG8gbmV3Rmlyc3QtMS5cclxuXHRjb3VudFRvUmVtb3ZlQXRTdGFydDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgZW5kLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdMYXN0KzFcclxuXHQvLyB0byBvbGRMYXN0LlxyXG5cdGNvdW50VG9SZW1vdmVBdEVuZDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIGFkZCBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdGaXJzdFxyXG5cdC8vIHRvIG9sZEZpcnN0LTEuXHJcblx0Y291bnRUb0FkZEF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gb2xkTGFzdCsxXHJcblx0Ly8gdG8gbmV3TGFzdC5cclxuXHRjb3VudFRvQWRkQXRFbmQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge1Njcm9sbEF4aXMsIFNjcm9sbEF4aXNBY3Rpb259IGZyb20gXCIuL1Njcm9sbEF4aXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUQWJsZUNlbGxEYXRhIGludGVyZmFjZSByZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgc2luZ2xlIGNlbGwgdGhhdCBpcyBwcm92aWRlZFxyXG4gKiBieSBhIGNhbGxlciB3aGVuIHJlcXVlc2VkIGJ5IFZUYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlQ2VsbERhdGFcclxue1xyXG5cdC8qKiBDb250ZW50IG9mIHRoZSBjZWxsICovXHJcblx0Y29udGVudDogYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdHJvd1NwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0Y29sU3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIFN0eWxlIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBvciBgPHRoPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdHN0eWxlPzogU3R5bGVzZXQ7XHJcblxyXG5cdC8qKiBDbGFzcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgb3IgYDx0aD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRjbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUYWJsZVByb3BzIGNsYXNzIGRlZmluZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgVlRhYmxlXHJcbiAqIGNvbnN0cnVjdG9yLiBUaGUgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IGRlZmluZSB0aGUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIFZUYWJsZVxyXG4gKiBpbiBKU1ggd2hlbiBpdCBpcyB1c2VkIGFzIGEgbWFuYWdlZCBjb3BvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlUHJvcHNcclxue1xyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbENvbENvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiByb3dzICovXHJcblx0cm93T3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiBjb2x1bW5zICovXHJcblx0Y29sT3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBjZWxsIGRhdGEuICovXHJcblx0Z2V0Q2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGhlYWRlciByb3dzLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0Y29sSGVhZGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3IgY29sdW1uIGhlYWRlciBjZWxscy4gKi9cclxuXHRnZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgZm9vdGVyIHJvd3MuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRjb2xGb290ZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciBjb2x1bW4gZm9vdGVyIGNlbGxzLiAqL1xyXG5cdGdldENvbEZvb3RlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjZWxscyBpbiB0aGUgcm93IGhlYWRlci4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdHJvd0hlYWRlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIHJvdyBoZWFkZXIgY2VsbHMuICovXHJcblx0Z2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNlbGxzIGluIHRoZSByb3cgZm9vdGVyLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0cm93Rm9vdGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3Igcm93IGZvb3RlciBjZWxscy4gKi9cclxuXHRnZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiVmlydHVhbGl6ZWRcIiB0YWJsZSB0aGF0IHJlbmRlcnMgb25seSBhIHN1YnNldCBvZiBhIGRhdGFzZXQgYW5kIGNoYW5nZXMgdGhpcyBzdWJzZXRcclxuICogYXMgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIGFuZCBmb3J0aC5cclxuICogXHJcbiAqIFZUYWJsZSB1c2VzIHRoZSBmb2xsb3dpbmcgMyBET00gZWxlbWVudHM6XHJcbiAqICAtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggZGlzcGxheXMgdGhlIHNjcm9sbGJhcnMgd2hlbiBuZWNlc3NhcnlcclxuICogIC0gd2FsbCAtIHRoZSBcImlubmVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGhhcyB0aGUgc2l6ZSBvZiB0aGUgZW50aXJlIHBvc3NpYmxlIHRhYmxlLiBJdCBpc1xyXG4gKiAgICBuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKiAgLSB0YWJsZSAtIHRoZSBgPHRhYmxlPmAgZWxlbWVudCB0aGF0IGNvbnRhaW5zIG9ubHkgcm93cyBhbmQgY29sdW1ucyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1c1xyXG4gKiAgICBhIGNlcnRhaW4gbnVtYmVyIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWVGFibGUgY2FsY3VsYXRlcyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aCBieSBkaXZpZGluZyB0aGUgc2l6ZSBvZiB0aGUgdGFibGVcclxuICogYnkgdGhlIG51bWJlciBvZiByb3dzL2NvbHVtbnMuIFRoZXNlIGF2ZXJhZ2UgdmFsdWVzIGFyZSByZWNhbGN1bGF0ZWQgZXZlcnkgdGltZSByb3dzIGFuZFxyXG4gKiBjb2x1bW5zIGFyZSBhZGRlZCBvciBkZWxldGVkIGZyb20gdGhlIHRhYmxlLiBCYXNlZCBvbiB0aGVzZSBhdmVyYWdlIHZhbHVlcyB0aGUgd2FsbCBlbGVtZW50XHJcbiAqIGlzIHNpemVkIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxpbmdcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZUYWJsZSB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgb24gYWxsIHNpZGVzIG9mXHJcbiAqIHRoZSBmcmFtZSBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBhY3R1YWwgbnVtYmVyIG9mIHJvd3MvY29sdW1ucyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmRcclxuICogbWF4aW11bSB2YWx1ZXMuIER1cmluZyBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLFxyXG4gKiBuZXcgY2VsbHMgYXJlIGFkZGVkIGFuZCBpZiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSBjZWxscyBhcmUgZGVsZXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWVGFibGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFZUYWJsZVByb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBWVGFibGVQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gMDtcclxuXHRcdHRoaXMuYXZnQ29sV2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIG5lZ2F0aXZlIHZhbHVlcyBpbmRpY2F0ZSB0aGF0IHdlIGhhdmVuJ3QgbWVhc3VyZWQgYW55IHNpemVzIHlldC5cclxuXHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gLTE7XHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSAtMTtcclxuXHJcblx0XHQvLyBzZXQgaW5pdGlhbCBzaXplIG9mIHRoZSB3YWxsIGVsZW1lbnQgYmFzZWQgb24gc29tZSBoYXJkLWNvZGVkIHZhbHVlcy4gSXQgd2lsbCBiZVxyXG5cdFx0Ly8gY2hhbmdlZCBhcyBzb29uIGFzIHdlIHJlbmRlciBhbmQgc3RhcnQgbWVhc3VyaW5nIG91ciBlbGVtZW50c1xyXG5cdFx0dGhpcy53YWxsSGVpZ2h0ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50ICogMjU7XHJcblx0XHR0aGlzLndhbGxXaWR0aCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCAqIDgwO1xyXG5cclxuXHRcdHRoaXMubWluUm93T3ZlcnNjYW4gPSB0aGlzLnByb3BzLnJvd092ZXJzY2FuID8gdGhpcy5wcm9wcy5yb3dPdmVyc2NhblswXSA6IDM7XHJcblx0XHR0aGlzLm9wdFJvd092ZXJzY2FuID0gdGhpcy5wcm9wcy5yb3dPdmVyc2NhbiA/IHRoaXMucHJvcHMucm93T3ZlcnNjYW5bMV0gOiA2O1xyXG5cdFx0dGhpcy5tYXhSb3dPdmVyc2NhbiA9IHRoaXMucHJvcHMucm93T3ZlcnNjYW4gPyB0aGlzLnByb3BzLnJvd092ZXJzY2FuWzJdIDogMTI7XHJcblxyXG5cdFx0dGhpcy5taW5Db2xPdmVyc2NhbiA9IHRoaXMucHJvcHMuY29sT3ZlcnNjYW4gPyB0aGlzLnByb3BzLmNvbE92ZXJzY2FuWzBdIDogMztcclxuXHRcdHRoaXMub3B0Q29sT3ZlcnNjYW4gPSB0aGlzLnByb3BzLmNvbE92ZXJzY2FuID8gdGhpcy5wcm9wcy5jb2xPdmVyc2NhblsxXSA6IDY7XHJcblx0XHR0aGlzLm1heENvbE92ZXJzY2FuID0gdGhpcy5wcm9wcy5jb2xPdmVyc2NhbiA/IHRoaXMucHJvcHMuY29sT3ZlcnNjYW5bMl0gOiAxMjtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHQvLyBmaWxsIGluIGluaXRpYWwgZGF0YXNldFxyXG5cdFx0bGV0IHJvd0NvdW50ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDwgMTAgPyB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgOiAxMDtcclxuXHRcdGxldCBjb2xDb3VudCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbENvbENvdW50IDogMTA7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0Zm9yKCBsZXQgaiA9IDA7IGogPCBjb2xDb3VudDsgaisrKVxyXG5cdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGRhdGFzZXQgc2l6ZVxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IDA7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSByb3dDb3VudCAtIDE7XHJcblx0XHR0aGlzLmZpcnN0Q29sID0gMDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGNvbENvdW50IC0gMTtcclxuXHJcblx0XHR0aGlzLnZBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluUm93T3ZlcnNjYW4sIHRoaXMub3B0Um93T3ZlcnNjYW4sIHRoaXMubWF4Um93T3ZlcnNjYW4pXHJcblx0XHR0aGlzLmhBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluQ29sT3ZlcnNjYW4sIHRoaXMub3B0Q29sT3ZlcnNjYW4sIHRoaXMubWF4Q29sT3ZlcnNjYW4pXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcHJlcGFyZUxvY2FsU3R5bGVzKClcclxuXHR7XHJcblx0XHR0aGlzLmZyYW1lSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJmcmFtZVwiKTtcclxuXHRcdHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcImZyYW1lXCIsIFwiI2ZyYW1lKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzpcImF1dG9cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLndhbGxJRCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcIndhbGxcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ3YWxsXCIsIFwiI3dhbGwoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy50YWJsZUlEID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidGFibGVcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0YWJsZVwiLCBcIiN0YWJsZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxyXG5cdFx0XHRcdGJvcmRlcjogWzEsIFwic29saWRcIiwgXCJibGFja1wiXSxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBkdXJpbmcgZWFjaCByZW5kZXJpbmcsIHdlIHNjaGVkdWxlIHRoZSBtZWFzdXJpbmcgZnVuY3Rpb25hbGl0eSwgd2hpY2ggd2lsbCBkZXRlcm1pbmdcclxuXHRcdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBUaGUgbWVhc3VyaW5nIGZ1bmN0aW9uIHdpbGwgcnVuIGluIHRoZSBuZXh0IHRpY2tcclxuXHRcdC8vIGFmdGVyIHRoZSByZW5kZXIgYW5kIHdpbGwgc2NoZWR1bGUgdXBkYXRlIGluIHRoZSBzYW1lIHRpY2sgaWYgbmVjZXNzYXJ5LlxyXG5cdFx0dGhpcy5jYWxsTWVCZWZvcmVVcGRhdGUoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSk7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9e3RoaXMuZnJhbWVJRH0gcmVmPXt0aGlzLmZyYW1lUmVmfSBzY3JvbGw9e3RoaXMub25TY3JvbGx9PlxyXG5cdFx0XHQ8ZGl2IGlkPXt0aGlzLndhbGxJRH0gcmVmPXt0aGlzLndhbGxSZWZ9PlxyXG5cdFx0XHRcdDx0YWJsZSBpZD17dGhpcy50YWJsZUlEfSByZWY9e3RoaXMudGFibGVSZWZ9PlxyXG5cdFx0XHRcdFx0PHRib2R5Pnt0aGlzLnJlbmRlclJvd3N9PC90Ym9keT5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyUm93cygpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3dzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgY29sdW1uIGhlYWRlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENvbEhlYWRlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENvbEhlYWRlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgY29sdW1uIGZvb3Rlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldENvbEZvb3RlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRDb2xGb290ZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldENvbEZvb3RlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgcm93IGhlYWRlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldFJvd0hlYWRlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3dIZWFkZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldFJvd0hlYWRlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBkYXRhIGZvciB0aGUgZ2l2ZW4gY2VsbCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgcm93IGZvb3Rlci4gVGhpcyBtZXRob2QgY2FuIGJlXHJcblx0ICogb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGdldFJvd0Zvb3RlckNlbGxEYXRhKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcilcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2sgPyB0aGlzLnByb3BzLmdldFJvd0Zvb3RlckNlbGxDYWxsYmFjayggcm93LCBjb2wpIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvY2N1cGllZCBieSB0aGUgY3VycmVudCBkYXRhIHNldCByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW1vdmUgY2VsbHMuIElmIHdlIGRvLCB3ZSBzY2hlZHVsZSByZS1yZW5kZXJpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtZWFzdXJlQW5kVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5yb3dDb3VudCA9PT0gMCB8fCB0aGlzLmNvbENvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IGZyYW1lUmVjdCA9IHRoaXMuZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgd2FsbFJlY3QgPSB0aGlzLndhbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgdGFibGVSZWN0ID0gdGhpcy50YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRpZiAodGhpcy5sYXRlc3RTY3JvbGxUb3AgIT0gdGhpcy5mcmFtZS5zY3JvbGxUb3ApXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgTWVhc3VyaW5nIGhlaWdodDogc2Nyb2xsIHRvcCA9ICR7dGhpcy5mcmFtZS5zY3JvbGxUb3B9LCByb3dzOiAke3RoaXMucm93Q291bnR9LCBgICtcclxuXHRcdFx0Ly8gXHRcdFx0XHRgd2FsbCBoZWlnaHQgPSAke3dhbGxSZWN0LmhlaWdodH0sIHRhYmxlIGhlaWdodCA9ICR7dGFibGVSZWN0LmhlaWdodH1gKTtcclxuXHJcblx0XHRcdGxldCB2QXhpc0FjdGlvbiA9IHRoaXMudkF4aXMubWVhc3VyZSggdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50LCB0aGlzLmZpcnN0Um93LCB0aGlzLnJvd0NvdW50LFxyXG5cdFx0XHRcdHRoaXMuYXZnUm93SGVpZ2h0LCBmcmFtZVJlY3QuaGVpZ2h0LCB3YWxsUmVjdC5oZWlnaHQsIHRhYmxlUmVjdC5oZWlnaHQsIHRoaXMuZnJhbWUuc2Nyb2xsVG9wKTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgRXN0aW1hdGVkOiB3YWxsIGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCByb3cgaGVpZ2h0ID0gJHt2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZX1gKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCB0aGUgbGF0ZXN0IHZlcnRpY2FsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCA9IHZBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmxhdGVzdFNjcm9sbFRvcCA9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wO1xyXG5cclxuXHRcdFx0Ly8gYWRkL3JlbW92ZSByb3dzIGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAoIXZBeGlzQWN0aW9uLm5vQWRkUmVtb3ZlTmVlZGVkKVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlUm93cyggdkF4aXNBY3Rpb24pO1xyXG5cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRpbmcgb2Ygd2FsbCBoZWlnaHQgYW5kIHN1YnNldCB2ZXJ0aWNhbCBvZmZzZXQgaWYgbmVlZGVkXHJcblx0XHRcdGlmICh2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSAhPSB3YWxsUmVjdC5oZWlnaHQgfHwgdkF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICE9IHRhYmxlUmVjdC50b3AgLSB3YWxsUmVjdC50b3ApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZUFmdGVyVXBkYXRlKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlLnN0eWxlLnRvcCA9IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCArIFwicHhcIjtcclxuXHRcdFx0XHRcdHRoaXMud2FsbC5zdHlsZS5oZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSArIFwicHhcIjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbExlZnQgIT0gdGhpcy5mcmFtZS5zY3JvbGxMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyB3aWR0aDogc2Nyb2xsIGxlZnQgPSAke3RoaXMuZnJhbWUuc2Nyb2xsTGVmdH0sIGNvbHM6ICR7dGhpcy5jb2xDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIHdpZHRoID0gJHt3YWxsUmVjdC53aWR0aH0sIHRhYmxlIHdpZHRoID0gJHt0YWJsZVJlY3Qud2lkdGh9YCk7XHJcblxyXG5cdFx0XHRsZXQgaEF4aXNBY3Rpb24gPSB0aGlzLmhBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxDb2xDb3VudCwgdGhpcy5maXJzdENvbCwgdGhpcy5jb2xDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z0NvbFdpZHRoLCBmcmFtZVJlY3Qud2lkdGgsIHdhbGxSZWN0LndpZHRoLCB0YWJsZVJlY3Qud2lkdGgsIHRoaXMuZnJhbWUuc2Nyb2xsTGVmdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCB3aWR0aCA9ICR7aEF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCBjb2wgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIGNvbHVtbiB3aWR0aCBhbmQgdGhlIGxhdGVzdCBob3Jpem9udGFsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gaEF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCA9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgY29sdW1ucyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCFoQXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvbHMoIGhBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgd2lkdGggYW5kIHN1YnNldCBob3Jpem9udGFsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LndpZHRoIHx8IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QubGVmdCAtIHdhbGxSZWN0LmxlZnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZUFmdGVyVXBkYXRlKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlLnN0eWxlLmxlZnQgPSBoQXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgKyBcInB4XCI7XHJcblx0XHRcdFx0XHR0aGlzLndhbGwuc3R5bGUud2lkdGggPSBoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSArIFwicHhcIjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlbW92ZXMgcm93cyBhcyBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuIFNjcm9sbEF4aXNBY3Rpb24gZGVhbGluZyB3aXRoIHRoZSB2ZXJ0aWNhbFxyXG5cdCAqIHNjcm9sbGluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZVJvd3MoIGF4aXNBY3Rpb246IFNjcm9sbEF4aXNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY29uc29sZS5sb2coIGBVcGRhdGluZyByb3dzIGZyb20gJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fSB0byAke2F4aXNBY3Rpb24ubmV3Rmlyc3R9IC0gJHtheGlzQWN0aW9uLm5ld0xhc3R9YCk7XHJcblxyXG5cdFx0aWYgKGF4aXNBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5yb3dDb3VudH0gZXhpc3Rpbmcgcm93c2ApO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblxyXG5cdFx0XHRmb3IoIGxldCBpID0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaSA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbDsgaiA8PSB0aGlzLmxhc3RDb2w7IGorKylcclxuXHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFxyXG5cdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgZW5kXHJcblx0XHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLm5ld0xhc3QgLSBheGlzQWN0aW9uLm5ld0ZpcnN0ICsgMX0gcm93c2ApO1xyXG5cdFx0XHQvLy8gI2VuZGlmXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCB0aGlzLnJvd0NvdW50IC0gYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmR9IHJvd3MgZnJvbSBib3R0b21gKTtcclxuXHRcdFx0XHQvLy8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0fSByb3dzIGZyb20gdG9wYCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMubGFzdFJvdyArIDE7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kfSByb3dzIHRvIGJvdHRvbWApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3cgLSAxOyBpID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGktLSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbDsgaiA8PSB0aGlzLmxhc3RDb2w7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIDAsIHZyb3cpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSByb3dzIHRvIHRvcGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RSb3cgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoIHRoaXMucmVuZGVyUm93cyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyBjb2x1bW5zIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlXHJcblx0ICogaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVDb2xzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgY29sdW1ucyBmcm9tICR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH0gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0dnJvdy5yZW1vdmVBbGxDZWxscygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5jb2xDb3VudH0gZXhpc3RpbmcgY29sc2ApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IGNvbHNgKTtcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRFbmQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmR9IGNvbHMgZnJvbSByaWdodGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRTdGFydCggYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCk7XHJcblxyXG5cdFx0XHRcdC8vLyAjaWYgREVCVUdcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IGNvbHMgZnJvbSBsZWZ0YCk7XHJcblx0XHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMubGFzdENvbCArIDE7IGogPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8vICNpZiBERUJVR1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZH0gY29scyB0byByaWdodGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2wgLSAxOyBqID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGotLSlcclxuXHRcdFx0XHRcdFx0dnJvdy5pbnNlcnRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnR9IGNvbHMgdG8gbGVmdGApO1xyXG5cdFx0XHRcdC8vLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RDb2wgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Q29sID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uU2Nyb2xsKCBlOiBFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNhbGxNZUJlZm9yZVVwZGF0ZSggdGhpcy5tZWFzdXJlQW5kVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3ZlcnNjYW4gdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHRwcml2YXRlIG1pblJvd092ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRSb3dPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Um93T3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1pbkNvbE92ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRDb2xPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Q29sT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gQ3VycmVudCBkYXRhc2V0IHJlcHJlc2VudGVkIGJ5IHJvdyBjb21wb25lbnRzLlxyXG5cdHByaXZhdGUgcm93czogVlJvd1tdO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RSb3c6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3Qgcm93IGluIHRoZSBkYXRhc2V0IG9yIC0xIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBsYXN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAwIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBmaXJzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb3VudHMgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHByaXZhdGUgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RSb3cgLSB0aGlzLmZpcnN0Um93ICsgMSB9XHJcblx0cHJpdmF0ZSBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdENvbCAtIHRoaXMuZmlyc3RDb2wgKyAxIH1cclxuXHJcblx0cHVibGljIGdldCBSb3dzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fWA7IH1cclxuXHRwdWJsaWMgZ2V0IENvbHMoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9YDsgfVxyXG5cclxuXHQvLyBTaXplIG9mIHRoZSBlbnRpcmUgdGFibGUgYmFzZWQgb24gYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGguIFRoaXMgYmVjb21lcyB0aGVcclxuXHQvLyBzaXplIG9mIHRoZSB3YWxsLlxyXG5cdHByaXZhdGUgd2FsbEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgd2FsbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBjYWxjdWxhdGVkIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoXHJcblx0cHJpdmF0ZSBhdmdSb3dIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGF2Z0NvbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBzY3JvbGxpbmcgcG9zaXRpb25zXHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxUb3A6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhdGVzdFNjcm9sbExlZnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBmcmFtZSB0aGF0IGhhcyB0aGUgc2NvbGxiYXJzXHJcblx0cHJpdmF0ZSBmcmFtZTogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBmcmFtZVJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy5mcmFtZSA9IHI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgd2FsbCB0aGF0IGlzIGJpZyBlbm91Z2ggdG8gaG9sZCBlbnRpcmUgZGF0YXNldFxyXG5cdHByaXZhdGUgd2FsbDogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3YWxsUmVmID0gKHI6IEhUTUxEaXZFbGVtZW50KSA9PiB0aGlzLndhbGwgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHRhYmxlIHRoYXQgZGlzcGxheXMgdGhlIHBhcnRpYWwgZGF0YXNldFxyXG5cdHByaXZhdGUgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0YWJsZVJlZiA9IChyOiBIVE1MVGFibGVFbGVtZW50KSA9PiB0aGlzLnRhYmxlID0gcjtcclxuXHJcblx0Ly8gT2JqZWN0cyB0aGF0IGRlYWwgd2l0aCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuXHRwcml2YXRlIHZBeGlzOiBTY3JvbGxBeGlzO1xyXG5cdHByaXZhdGUgaEF4aXM6IFNjcm9sbEF4aXM7XHJcblxyXG5cdC8vIElEcyBvZiB2aXJ0dWFsIHRhYmxlIHBhcnRzXHJcblx0cHJpdmF0ZSBmcmFtZUlEOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB3YWxsSUQ6IHN0cmluZztcclxuXHRwcml2YXRlIHRhYmxlSUQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWUm93IGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y2VsbHM6IFZDZWxsW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY2VsbHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5wdXNoKCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbnNlcnRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIDAsIDAsIG5ldyBWQ2VsbCggZGF0YSkpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUFsbENlbGxzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdFN0YXJ0KCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCBjb3VudCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdEVuZCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggdGhpcy5jZWxscy5sZW5ndGggLSBjb3VudCwgY291bnQpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRyPnt0aGlzLmNlbGxzfTwvdHI+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWQ2VsbCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGRhdGE6IFZUYWJsZUNlbGxEYXRhO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggZGF0YTogYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBkYXRhLmNvbnRlbnQpXHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YSA9IHsgY29udGVudDogZGF0YSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kYXRhID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8dGQgY2xhc3M9e3RoaXMuZGF0YS5jbGFzc30gc3R5bGU9e3RoaXMuZGF0YS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0cm93c3Bhbj17dGhpcy5kYXRhLnJvd1NwYW4gPyB0aGlzLmRhdGEucm93U3BhbiA6IHVuZGVmaW5lZH1cclxuXHRcdFx0XHRcdFx0Y29sc3Bhbj17dGhpcy5kYXRhLmNvbFNwYW4gPyB0aGlzLmRhdGEuY29sU3BhbiA6IHVuZGVmaW5lZH0+XHJcblx0XHRcdFx0e3RoaXMuZGF0YS5jb250ZW50fVxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==