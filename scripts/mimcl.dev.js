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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mimclTypes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dnd/DataTransfer.ts":
/*!*********************************!*\
  !*** ./src/dnd/DataTransfer.ts ***!
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
// Map of object formats to object values.
DragAndDropData.dataMap = new Map();
exports.DragAndDropData = DragAndDropData;
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

/***/ "./src/dnd/DragDropApi.ts":
/*!********************************!*\
  !*** ./src/dnd/DragDropApi.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// String used as a type (aka format) when an element object is being dragged.
exports.DNDTYPE_ELEMENT = "application/DOMElement";


/***/ }),

/***/ "./src/dnd/DragDropImpl.ts":
/*!*********************************!*\
  !*** ./src/dnd/DragDropImpl.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const DragSource_1 = __webpack_require__(/*! ./DragSource */ "./src/dnd/DragSource.ts");
const DragTarget_1 = __webpack_require__(/*! ./DragTarget */ "./src/dnd/DragTarget.ts");
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

/***/ "./src/dnd/DragSource.ts":
/*!*******************************!*\
  !*** ./src/dnd/DragSource.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const DragDropApi_1 = __webpack_require__(/*! ./DragDropApi */ "./src/dnd/DragDropApi.ts");
const DataTransfer_1 = __webpack_require__(/*! ./DataTransfer */ "./src/dnd/DataTransfer.ts");
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
        ///////////////
        else
            throw new Error("Invalid value of dragSourceProp in DragSourceHandler constructor.");
        ////////////
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

/***/ "./src/dnd/DragTarget.ts":
/*!*******************************!*\
  !*** ./src/dnd/DragTarget.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DataTransfer_1 = __webpack_require__(/*! ./DataTransfer */ "./src/dnd/DataTransfer.ts");
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

/***/ "./src/mimclTypes.ts":
/*!***************************!*\
  !*** ./src/mimclTypes.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimcl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dnd/DragDropApi */ "./src/dnd/DragDropApi.ts"));
__export(__webpack_require__(/*! ./popup/Popup */ "./src/popup/Popup.tsx"));
__export(__webpack_require__(/*! ./popup/Dialog */ "./src/popup/Dialog.tsx"));
__export(__webpack_require__(/*! ./popup/MsgBox */ "./src/popup/MsgBox.tsx"));
__export(__webpack_require__(/*! ./router/Router */ "./src/router/Router.tsx"));
__export(__webpack_require__(/*! ./tree/TreeApi */ "./src/tree/TreeApi.ts"));
__export(__webpack_require__(/*! ./virt/ScrollAxis */ "./src/virt/ScrollAxis.ts"));
__export(__webpack_require__(/*! ./virt/VTable */ "./src/virt/VTable.tsx"));
const DragDropImpl_1 = __webpack_require__(/*! ./dnd/DragDropImpl */ "./src/dnd/DragDropImpl.ts");
DragDropImpl_1.registerDragDropCustomAttributes();


/***/ }),

/***/ "./src/popup/Dialog.tsx":
/*!******************************!*\
  !*** ./src/popup/Dialog.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const Popup_1 = __webpack_require__(/*! ./Popup */ "./src/popup/Popup.tsx");
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

/***/ "./src/popup/MsgBox.tsx":
/*!******************************!*\
  !*** ./src/popup/MsgBox.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/popup/Dialog.tsx");
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
        return { content: this.title, style: { backgroundColor: "DodgerBlue" } };
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
            default: return { cls: "", color: "" };
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

/***/ "./src/popup/Popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/Popup.tsx ***!
  \*****************************/
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
            Popup.DefaultDlgSlice = { style: { borderStyle: "solid", borderWidth: "1px", padding: "0" } };
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
        this.dlg.style.top = this.currDlgSlice.style.top = rect.top + "px";
        this.dlg.style.left = this.currDlgSlice.style.left = rect.left + "px";
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
        this.dlg.style.left = this.currDlgSlice.style.left = newX + "px";
        this.dlg.style.top = this.currDlgSlice.style.top = newY + "px";
    }
    ;
    render() {
        if (!this.currDlgSlice) {
            // define positioning styles. If x and/or y are undefined, we center the dialog horizontally
            // and/or vertically
            let style = { position: "fixed" };
            if (this.initialX === undefined) {
                style.left = "0px";
                style.right = "0px";
            }
            else {
                style.left = this.initialX + "px";
                style.marginLeft = "0";
                style.marginRight = "0";
            }
            if (this.initialY === undefined) {
                style.top = "0px";
                style.bottom = "0px";
            }
            else {
                style.top = this.initialY + "px";
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

/***/ "./src/router/Router.tsx":
/*!*******************************!*\
  !*** ./src/router/Router.tsx ***!
  \*******************************/
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
    navigateToRoute(route, url, fields, makeHistoryEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            //// check if the new route is the same as the current route and don't do anything
            //if (route === this.currRoute)
            //	return;
            // if we have current route, ask it if we can leave it
            if (this.currRoute && this.currRoute.navFromFunc) {
                let ret = this.currRoute.navFromFunc();
                if (ret instanceof Promise)
                    ret = yield ret;
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
                this.currRouteContent = yield content;
            else
                this.currRouteContent = content;
            // request to be updated so that our render method will be called
            this.updateMe();
        });
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

/***/ "./src/tree/Tree.tsx":
/*!***************************!*\
  !*** ./src/tree/Tree.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const TreeNodeContainer_1 = __webpack_require__(/*! ./TreeNodeContainer */ "./src/tree/TreeNodeContainer.tsx");
const TreeNode_1 = __webpack_require__(/*! ./TreeNode */ "./src/tree/TreeNode.tsx");
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
            border: "1px solid DodgerBlue",
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
            border: "1px dotted",
            backgroundColor: "DodgerBlue",
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

/***/ "./src/tree/TreeApi.ts":
/*!*****************************!*\
  !*** ./src/tree/TreeApi.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = __webpack_require__(/*! ./Tree */ "./src/tree/Tree.tsx");
// Creates tree control instance
function createTree() {
    return new Tree_1.Tree();
}
exports.createTree = createTree;


/***/ }),

/***/ "./src/tree/TreeNode.tsx":
/*!*******************************!*\
  !*** ./src/tree/TreeNode.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const TreeNodeContainer_1 = __webpack_require__(/*! ./TreeNodeContainer */ "./src/tree/TreeNodeContainer.tsx");
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

/***/ "./src/tree/TreeNodeContainer.tsx":
/*!****************************************!*\
  !*** ./src/tree/TreeNodeContainer.tsx ***!
  \****************************************/
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

/***/ "./src/virt/ScrollAxis.ts":
/*!********************************!*\
  !*** ./src/virt/ScrollAxis.ts ***!
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

/***/ "./src/virt/VTable.tsx":
/*!*****************************!*\
  !*** ./src/virt/VTable.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! mimbl */ "mimbl");
const ScrollAxis_1 = __webpack_require__(/*! ./ScrollAxis */ "./src/virt/ScrollAxis.ts");
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
            overflow: "none",
        });
        this.tableID = this.decorateName("table");
        this.createStyleRule("table", "#table(*)", {
            position: "absolute",
            borderCollapse: "collapse",
            border: "1px solid black",
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
            ////////////////
            console.log(`Removed all ${this.rowCount} existing rows`);
            /////////////
            for (let i = axisAction.newFirst; i <= axisAction.newLast; i++) {
                let vrow = new VRow();
                for (let j = this.firstCol; j <= this.lastCol; j++)
                    vrow.addCell(this.getCellData(i, j));
                // add the new row at the end
                this.rows.push(vrow);
            }
            ////////////////
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} rows`);
            /////////////
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                this.rows.splice(this.rowCount - axisAction.countToRemoveAtEnd, axisAction.countToRemoveAtEnd);
                /////////////////
                console.log(`Removed ${axisAction.countToRemoveAtEnd} rows from bottom`);
                //////////////
            }
            if (axisAction.countToRemoveAtStart > 0) {
                this.rows.splice(0, axisAction.countToRemoveAtStart);
                /////////////////
                console.log(`Removed ${axisAction.countToRemoveAtStart} rows from top`);
                //////////////
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.lastRow + 1; i <= axisAction.newLast; i++) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.getCellData(i, j));
                    // add the new row at the start
                    this.rows.push(vrow);
                }
                /////////////////
                console.log(`Add ${axisAction.countToAddAtEnd} rows to bottom`);
                //////////////
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow - 1; i >= axisAction.newFirst; i--) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.getCellData(i, j));
                    // add the new row at the start
                    this.rows.splice(0, 0, vrow);
                }
                /////////////////
                console.log(`Add ${axisAction.countToAddAtStart} rows to top`);
                //////////////
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
            ////////////////
            console.log(`Removed all ${this.colCount} existing cols`);
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} cols`);
            /////////////
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                for (let vrow of this.rows)
                    vrow.removeCellsAtEnd(axisAction.countToRemoveAtEnd);
                /////////////////
                console.log(`Removed ${axisAction.countToRemoveAtEnd} cols from right`);
                //////////////
            }
            if (axisAction.countToRemoveAtStart > 0) {
                for (let vrow of this.rows)
                    vrow.removeCellsAtStart(axisAction.countToRemoveAtStart);
                /////////////////
                console.log(`Removed ${axisAction.countToRemoveAtStart} cols from left`);
                //////////////
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.lastCol + 1; j <= axisAction.newLast; j++)
                        vrow.addCell(this.getCellData(i, j));
                }
                /////////////////
                console.log(`Add ${axisAction.countToAddAtEnd} cols to right`);
                //////////////
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.firstCol - 1; j >= axisAction.newFirst; j--)
                        vrow.insertCell(this.getCellData(i, j));
                }
                /////////////////
                console.log(`Add ${axisAction.countToAddAtStart} cols to left`);
                //////////////
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLGVBQWU7SUFFN0IsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFZLEVBQUUsSUFBUztRQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLElB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dW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNsXCJdID0gZmFjdG9yeShyb290W1wibWltYmxcIl0sIHJvb3RbXCJtaW11cmxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltY2xUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnQW5kRHJvcERhdGEgc3RhdGljIGNsYXNzIGRlYWxzIHdpdGggZGF0YSBvZiBhcmJpdHJhcnkgdHlwZXMgYmVpbmcgdHJhbnNmZXJlZFxyXG4vLyBkdXJpbmcgZHJhZyAmIGRyb3Agb3BlcmF0aW9ucy4gV2hlbiBhIGRyYWcgb3BlcmF0aW9uIHN0YXJ0cywgcGllY2VzIG9mIGRhdGEgYXJlIGFkZGVkIHRvIGEgbWFwXHJcbi8vIHdpdGggdHlwZXMgKGZvcm1hdHMpIGFzIGtleXMgKHRoZXNlIGFyZSB0aGUgc2FtZSBmb3JtYXRzIHRoYXQgYXJlIGtlcHQgaW4gdGhlIEhUTUw1IERhdGFUcmFuc2ZlclxyXG4vLyBvYmplY3QuIERhdGEgaXMgYWRkZWQgdXNpbmcgdGhlIFNldE9iamVjdERhdGEgbWV0aG9kIG9mIHRoZSBJRHJhZ1N0YXJ0RXZlbnQgaW50ZXJmYWNlLiBXaGVuIHRoZVxyXG4vLyBkcm9wIG9jY3VycywgdGhlIEdldE9iamVjdERhdGEgb2YgdGhlIElEcmFnVGFyZ2V0RXZlbnQgaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgZGF0YS4gVGhlIG1hcCBpc1xyXG4vLyBjbGVhcmVkIHdoZW4gdGhlIGRyYWcgb3BlcmF0aW9uIGVuZHMgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgd2FzIHN1Y2Nlc3NmdWwgb3Igd2FzIGNhbmNlbGVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyYWdBbmREcm9wRGF0YVxyXG57XHJcblx0cHVibGljIHN0YXRpYyBzZXRPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXR5cGUgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuc2V0KCB0eXBlLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmdldCggdHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZU9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5kZWxldGUoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjbGVhckFsbE9iamVjdERhdGEoKTogdm9pZFxyXG5cdHtcclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmNsZWFyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZSBpbiB0aGUgZ2l2ZW4gRGF0YVRyYW5zZmVyIG9iamVjdC5cclxuXHRwdWJsaWMgc3RhdGljIGhhc1R5cGUoIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLCB0eXBlOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBpbXBsZW1udHMgdHlwZXMgdmlhIERPTVN0cmluZ0xpc3QsIHdoY2loIGRvZXNuJ3QgaGF2ZSBpbmRleE9mXHJcblx0XHRpZiAoZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YpXHJcblx0XHRcdHJldHVybiBkYXRhVHJhbnNmZXIudHlwZXMuaW5kZXhPZiggdHlwZSkgPj0gMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChkYXRhVHJhbnNmZXIudHlwZXMgYXMgYW55IGFzIERPTVN0cmluZ0xpc3QpLmNvbnRhaW5zKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFwIG9mIG9iamVjdCBmb3JtYXRzIHRvIG9iamVjdCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZGF0YU1hcDogTWFwPHN0cmluZyxhbnk+ID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUVtdWxEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgb2JqZWN0cyB0aGF0IGVtdWxhdGUgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuXHJcbi8vIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRpbWFnZUVsbTogRWxlbWVudDtcclxuXHRpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsRGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlIGRvZXMgbm90XHJcbi8vIHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyIGltcGxlbWVudHMgSUVtdWxEYXRhVHJhbnNmZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IGhhdmUgc2V0RHJhZ0ltYWdlIG1ldGhvZCBpbiBpdHMgRGF0YVRyYW5zZmVyIGNsYXNzLlxyXG5cdFx0aWYgKHN1cGVyLnNldERyYWdJbWFnZSlcclxuXHRcdFx0c3VwZXIuc2V0RHJhZ0ltYWdlKCBpbWFnZSwgeCwgeSk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmVmZmVjdEFsbG93ZWQgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0QWxsb3dlZCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RBbGxvd2VkRXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmVmZmVjdEFsbG93ZWQgOiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdFx0c3VwZXIuZHJvcEVmZmVjdCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBkcm9wRWZmZWN0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BFZmZlY3RFeCA9PT0gdW5kZWZpbmVkID8gc3VwZXIuZHJvcEVmZmVjdCA6IHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLnNldERhdGEoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFNYXAuc2V0KCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSB0aGlzLmRhdGFNYXAuZ2V0KCBmb3JtYXQpO1xyXG5cdFx0cmV0dXJuIHMgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJEYXRhKCBmb3JtYXQ/OiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXJEYXRhKCBmb3JtYXQpO1xyXG5cclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgYWxsb3dlZCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGFsbG93ZWQgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGVmZmVjdEFsbG93ZWRFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGRyb3AgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBkcm9wIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RXg6IHN0cmluZztcclxuXHJcblx0Ly8gTWFwIG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0byBkYXRhIGl0ZW1zLlxyXG5cdHByaXZhdGUgZGF0YU1hcDogTWFwPHN0cmluZyxzdHJpbmc+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykuIFRoaXMgYXJyYXkgY2hhbmdlcyBldmVyeSB0aW1lIGRhdGEgaXMgc2V0IG9yIGNsZWFyZWQuXHJcblx0cHJpdmF0ZSBkYXRhRm9ybWF0czogc3RyaW5nW107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlXHJcbi8vIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS4gVGhpcyBvYmplY3QgaXMgdXNlZCB1bmRlciBFZGdlLCB3aGljaCBkb2Vzbid0XHJcbi8vIGltcGxlbWVudCB0aGUgbmF0aXZlIERhdGFUcmFuc2ZlciBvYmplY3QgcHJvcGVybHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0XHR0aGlzLm1faXRlbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5tX2ZpbGVzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIFVzZXMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdXBkYXRlIHRoZSBkcmFnIGZlZWRiYWNrLCByZXBsYWNpbmcgYW55IHByZXZpb3VzbHkgc3BlY2lmaWVkXHJcblx0Ly8gZmVlZGJhY2suXHJcblx0cHVibGljIHNldERyYWdJbWFnZSggaW1hZ2U6IEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBpbWFnZTtcclxuXHRcdHRoaXMuaW1hZ2VFbG1YID0geDtcclxuXHRcdHRoaXMuaW1hZ2VFbG1ZID0geTtcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGEgbmV3IGltYWdlIGVsZW1lbnQgd2FzIHNldCwgc28gdGhhdCB3ZSB3aWxsIFwicHJlcGFyZVwiIGl0IG9uIHRoZSBuZXh0XHJcblx0XHQvLyBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGVmZmVjdEFsbG93ZWQoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZWZmZWN0QWxsb3dlZEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZHJvcEVmZmVjdCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RXggPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldERhdGEoIGZvcm1hdDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgZ2V0IGZpbGVzKCk6IEZpbGVMaXN0IHsgcmV0dXJuIHRoaXMubV9maWxlczsgfVxyXG4gICAgZ2V0IGl0ZW1zKCk6IERhdGFUcmFuc2Zlckl0ZW1MaXN0IHsgcmV0dXJuIHRoaXMubV9pdGVtczsgfVxyXG5cclxuXHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0cHVibGljIGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdHB1YmxpYyBpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRwdWJsaWMgaW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHByaXZhdGUgbV9maWxlczogRmlsZUxpc3Q7XHJcbiAgICBwcml2YXRlIG1faXRlbXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdEcm9wRWZmZWN0XHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnRHJvcEVmZmVjdCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBkcmFnICYgZHJvcCBlZmZlY3RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ0FsbG93ZWRFZmZlY3RzXHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcblx0Q29weU1vdmUgPSBcImNvcHlNb3ZlXCIsXHJcblx0Q29weUxpbmsgPSBcImNvcHlMaW5rXCIsXHJcblx0TGlua01vdmUgPSBcImxpbmtNb3ZlXCIsXHJcblx0QWxsID0gXCJhbGxcIixcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnU291cmNlRXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2VFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXRFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZXZlbnQgaGFuZGxlcnMgb24gdGhlXHJcbi8vIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cmVhZG9ubHkgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZS5cclxuXHRoYXNUeXBlKCB0eXBlOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZXJpZXZlcyBkYXRhIGZvciB0aGUgZ2l2ZW4gdHlwZS4gSWYgdGhlIHR5cGUgaXMgbm90IGF2YWlsYWJsZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0Z2V0RGF0YSggdHlwZTogc3RyaW5nKTogYW55O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgYXJyYXkgb2YgZmlsZXMuIFJldHVybnMgdW5kZWZpbmVkIGlmIGZpbGVzIGFyZSBub3QgYmVpbmcgZHJhZ2dlZC4gVGhlIG9iamVjdHMgaW5cclxuXHQvLyB0aGUgcmV0dXJuZWQgYXJyYXkgYXJlIG9mIHR5cGUgV2ViS2l0RW50cnkgKHdlIGNhbm5vdCBzcGVjaWZ5IGl0IGFzIHN1Y2ggaGVyZSBiZWNhdXNlIHRoZVxyXG5cdC8vIGN1cnJlbnQgVHlwZXNjcmlwdCBpcyBkaXN0cmlidXRlZCB3aXRoIC5kLnRzIGxpYnJhcmllcyB0aGF0IGRvbid0IGRlZmluZSB0aGlzIHR5cGUuXHJcblx0Z2V0RmlsZXMoKTogYW55W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zIG9mXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0byBiZVxyXG4vLyBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJhZ1N0YXJ0IGNhbGxiYWNrXHJcbi8vIGFuZCB1c2luZyB0aGUgZS5zZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2Vcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBzdGFydHMgZm9yIHRoZSBlbGVtZW50LlxyXG5cdG9uRHJhZ1N0YXJ0OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIGVuZHMuXHJcblx0b25EcmFnRW5kPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcy5cclxuXHRvbkRyYWc/OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnU291cmNlIGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyYWcgc291cmNlLiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1NvdXJjZSBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBEYXRhIHRvXHJcbi8vIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIHN1cHBsaWVkIGRpcmVjdGx5IHZpYSB0aGUgZGF0YSBwcm9wZXJ0eS4gVGhpc1xyXG4vLyBpbnRlcmZhY2UgYWxsb3dzIHNpbXBsaWZ5aW5nIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIHdpdGhvdXQgdGhlIG5lZWQgdG8gaW1wbGVtZW50IGFueVxyXG4vLyBjYWxsYmFja3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnU291cmNlXHJcbntcclxuXHQvLyBPYmplY3QgaG9sZGluZyBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgZHJhZyBvcGVyYXRpb24uIEVhY2ggcGllY2Ugb2YgZGF0YSBpcyBpZGVudGlmaWVkIGJ5XHJcblx0Ly8gYSB1bmlxdWUgdHlwZSAoYWthIGZvcm1hdCkgc3RyaW5nLlxyXG5cdGRhdGE6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cclxuXHQvLyBBbGxvd2VkIGRyb3AgZWZmZWN0cy4gSWYgZGVmaW5lZCwgdGhpcyBtZW1iZXIgaXMgdXNlZCBvbmx5IGlmIGVpdGhlciB0aGUgb25EcmFnU3RhcnRcclxuXHQvLyBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCBvciBpdCBkb2Vzbid0IHNldCBhbGxvd2VkIGRyb3AgZWZmZWN0cy5cclxuXHRhbGxvd2VkRWZmZWN0cz86IERyYWdBbGxvd2VkRWZmZWN0cztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRHJhZyBzb3VyY2UgcHJvcGVydHkgKGRyYWdTb3VyY2UpIGNhbiBoYXZlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHNoYXBlczpcclxuLy9cdC0gSURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZHJhZyBiZWhhdmlvciBhbmQgZGF0YSB0byBiZSBwYXNzZWQgd2l0aCBpdCBpcyBkZXRlcm1pbmVkXHJcbi8vXHRcdGJ5IGltcGxlbWVudGluZyB0aGUgcmVsZXZhbnQgY2FsbGJhY2tzLlxyXG4vL1x0LSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgLSBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzXHJcbi8vXHRcdGRlZmluZWQgYnkgdGhlIGRhdGEgcHJvcGVydHkuXHJcbi8vXHQtIFwiZWxtLXRleHRcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIFwiZWxtLWh0bWxcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyBvdXRlckhUTUxcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIHRydWUgLSBlcXVpdmFsZW50IHRvIFwiZWxtLWh0bWxcIiBzdHJpbmcuXHJcbi8vXHQtIGZhbHNlIC0gZHJhZyBiZWhhdmlvciBpcyBzdXBwcmVzc2VkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgRHJhZ1NvdXJjZVByb3BUeXBlID0gSURyYWdTb3VyY2UgfCBJU2ltcGxlRHJhZ1NvdXJjZSB8IGJvb2xlYW4gfCBcImVsbS10ZXh0XCIgfCBcImVsbS1odG1sXCI7XHJcblxyXG5cclxuXHJcbi8vIFN0cmluZyB1c2VkIGFzIGEgdHlwZSAoYWthIGZvcm1hdCkgd2hlbiBhbiBlbGVtZW50IG9iamVjdCBpcyBiZWluZyBkcmFnZ2VkLlxyXG5leHBvcnQgY29uc3QgRE5EVFlQRV9FTEVNRU5UID0gXCJhcHBsaWNhdGlvbi9ET01FbGVtZW50XCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXQgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJvcCB0YXJnZXQuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnVGFyZ2V0IGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIFJlY2VpdmluZ1xyXG4vLyBkYXRhIGlzIGFjY29tcGxpc2hlZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJvcCBjYWxsYmFjayBhbmQgY2FsbGluZyB0aGUgZS5nZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBlbnRlcnMgdGhlIGVsZW1lbnQgYm91bmRhcnkgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlLCB0aGUgb25EcmFnT3ZlclxyXG5cdC8vIGFuZCBvbkRyYWdMZWF2ZSBtZXRob2RzIHdpbGwgbm90IGJlIGNhbGxlZC5cclxuXHRvbkRyYWdFbnRlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgaG92ZXJzIG92ZXIgdGhlIGVsZW1lbnQgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBtZXRob2QgcmV0dXJucyB0cnVlIG9yXHJcblx0Ly8gZmFsc2UsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCB3aWxsIGJlIGNvbnRpbnVlZCB0byBiZSBjYWxsZWQgYXMgdGhlIG1vdXNlIG1vdmVzLiBUaGlzIGFsbG93c1xyXG5cdC8vIHNvbWUgcGFydHMgb2YgdGhlIGVsZW1lbnQgdG8gYmUgZHJvcCB0YXJnZXRzIHdoaWxlIG90aGVycyBub3QuXHJcblx0b25EcmFnT3Zlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgbGVhdmVzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi5cclxuXHRvbkRyYWdMZWF2ZT86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkYXRhIHdhcyBkcm9wZWQgaW4gdGhpcyBkcm9wIHpvbmUuXHJcblx0b25Ecm9wOiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgc3BlY2lmeWluZyB0aGUgZXhwZWN0ZWQgdHlwZXMgdmlhIHRoZSBkYXRhVHlwZXMgcHJvcGVydHkgYW5kXHJcbi8vIGltcGxlbWVudGluZyB0aGUgb25EYXRhRHJvcHBlZCBjYWxsYmFjay5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZURyYWdUYXJnZXRcclxue1xyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0aGF0IHRoZSBkcmFnIHRhcmdldCBjYW4gcmVjZWl2ZS5cclxuXHRkYXRhVHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuXHQvLyBTdHlsZSB0byBhcHBseSBmb3IgZHJhZyBmZWVkYmFjay5cclxuXHRmZWVkYmFjaz86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgZGF0YSBjb250YWluaW5nIG9uZSBvciBtb3JlIGFwcHJvcHJpYXRlIHR5cGVzIGlzIGRyb3BwZWQuXHJcblx0Ly8gVGhlIGRhdGEgaXMgZGVsaXZlcmVkIGFzIGFuIG9iamVjdCB3aGVyZSBwcm9wZXJ0eSBuYW1lcyBhcmUgZGF0YSB0eXBlcyBhbmQgdmFsdWVzIGFyZVxyXG5cdC8vIGRhdGEgcGllY2VzIG9mIHRoZXNlIHR5cGVzLlxyXG5cdG9uRGF0YURyb3BwZWQ6IChkYXRhOiB7W3R5cGU6IHN0cmluZ106IGFueX0pID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRHJhZyB0YXJnZXQgcHJvcGVydHkgKGRyYWdUYXJnZXQpIGNhbiBiZSBlaXRoZXIgSURyYWdUYXJnZXQgaW50ZXJmYWNlIG9yIHJlZmVyZW5jZSB0byBhblxyXG4vLyBFbGVtZW50LiBJbiB0aGUgbGF0dGVyIGNhc2UsIHRoZSByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBpcyBhblxyXG4vLyBFbGVtZW50IG9iamVjdC5cclxuZXhwb3J0IHR5cGUgRHJhZ1RhcmdldFByb3BUeXBlID0gSURyYWdUYXJnZXQgfCBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJtaW1ibC9saWIvYXBpL21pbVwiXHJcbntcclxuXHRpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbj5cclxuXHR7XHJcblx0XHRkcmFnU291cmNlPzogRHJhZ1NvdXJjZVByb3BUeXBlO1xyXG5cdFx0ZHJhZ1RhcmdldD86IERyYWdUYXJnZXRQcm9wVHlwZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7RHJhZ1NvdXJjZUhhbmRsZXIsIERyYWdTb3VyY2VFbXVsYXRvcn0gZnJvbSBcIi4vRHJhZ1NvdXJjZVwiXHJcbmltcG9ydCB7RHJhZ1RhcmdldEhhbmRsZXJ9IGZyb20gXCIuL0RyYWdUYXJnZXRcIlxyXG5pbXBvcnQgeyBEcmFnU291cmNlUHJvcFR5cGUsIERyYWdUYXJnZXRQcm9wVHlwZSB9IGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUN1c3RvbUVsbVByb3BIYW5kbGVyIGNsYXNzIGlzIGEgaGFuZGxlciBmb3IgdGhlIGRyYWdTb3VyY2UgY3VzdG9tIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1NvdXJjZUN1c3RvbUVsbVByb3BIYW5kbGVyIGltcGxlbWVudHMgbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPERyYWdTb3VyY2VQcm9wVHlwZT5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG1WTjogbWltLklFbG1WTiwgcHJvcFZhbDogRHJhZ1NvdXJjZVByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtVk4gPSBlbG1WTjtcclxuXHRcdHRoaXMuY3VyclZhbCA9IHByb3BWYWw7XHJcblx0XHR0aGlzLmFkZCggcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0ZXJtaW5hdGUoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cdFx0dGhpcy5lbG1WTiA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHVwZGF0ZSggbmV3UHJvcFZhbDogRHJhZ1NvdXJjZVByb3BUeXBlKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmN1cnJWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY3VyclZhbClcclxuXHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0aWYgKG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0dGhpcy5hZGQoIG5ld1Byb3BWYWwgYXMgRHJhZ1NvdXJjZVByb3BUeXBlKTtcclxuXHJcblx0XHRcdHRoaXMuY3VyclZhbCA9IG5ld1Byb3BWYWw7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGFkZCggcHJvcFZhbDogRHJhZ1NvdXJjZVByb3BUeXBlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbVZOLmVsbSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSBcIm93bmVyU1ZHRWxlbWVudFwiIGluIGVsbVxyXG5cdFx0XHRcdFx0PyBuZXcgRHJhZ1NvdXJjZUVtdWxhdG9yKCBlbG0sIHByb3BWYWwpXHJcblx0XHRcdFx0XHQ6IG5ldyBEcmFnU291cmNlSGFuZGxlciggZWxtLCBwcm9wVmFsKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyLmluaXQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW1vdmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRyYWdTb3VyY2VIYW5kbGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyLnRlcm0oKTtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRWVtZW50IG5vZGUgb24gd2hpY2ggdGhlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBlbG1WTjogbWltLklFbG1WTjtcclxuXHJcblx0Ly8gY3VycmVudCBhdHRyaWJ1dGUgdmFsdWVcclxuXHRjdXJyVmFsOiBEcmFnU291cmNlUHJvcFR5cGU7XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IGhhbmRsZXMgZHJhZyBzb3VyY2Ugb3BlcnRpb25zLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZUhhbmRsZXI6IERyYWdTb3VyY2VIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyIGNsYXNzIGlzIGEgaGFuZGxlciBmb3IgdGhlIGRyYWdTb3VyY2UgY3VzdG9tIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyIGltcGxlbWVudHMgbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPERyYWdUYXJnZXRQcm9wVHlwZT5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG1WTjogbWltLklFbG1WTiwgcHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtVk4gPSBlbG1WTjtcclxuXHRcdHRoaXMuY3VyclZhbCA9IHByb3BWYWw7XHJcblx0XHR0aGlzLmFkZCggcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0ZXJtaW5hdGUoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cdFx0dGhpcy5lbG1WTiA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHVwZGF0ZSggbmV3UHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmN1cnJWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY3VyclZhbClcclxuXHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0aWYgKG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0dGhpcy5hZGQoIG5ld1Byb3BWYWwgYXMgRHJhZ1RhcmdldFByb3BUeXBlKTtcclxuXHJcblx0XHRcdHRoaXMuY3VyclZhbCA9IG5ld1Byb3BWYWw7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGFkZCggcHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbVZOLmVsbSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIgPSBuZXcgRHJhZ1RhcmdldEhhbmRsZXIoIGVsbSwgcHJvcFZhbCk7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyLmluaXQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW1vdmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRyYWdUYXJnZXRIYW5kbGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyLnRlcm0oKTtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRWVtZW50IG5vZGUgb24gd2hpY2ggdGhlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBlbG1WTjogbWltLklFbG1WTjtcclxuXHJcblx0Ly8gY3VycmVudCBhdHRyaWJ1dGUgdmFsdWVcclxuXHRjdXJyVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGU7XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IGhhbmRsZXMgZHJhZyB0YXJnZXQgb3BlcnRpb25zLlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEhhbmRsZXI6IERyYWdUYXJnZXRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlZ2lzdGVyIGN1c3RvbSBwcm9wZXJ0eSBmYWN0b3J5IGZvciBkcmFnU291cmNlIGFuZCBkcmFnVGFyZ2V0IHByb3BlcnRpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzKClcclxue1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnU291cmNlXCIsIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlcik7XHJcblx0bWltLnJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlKCBcImRyYWdUYXJnZXRcIiwgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnQWxsb3dlZEVmZmVjdHMsIERyYWdTb3VyY2VQcm9wVHlwZSwgSURyYWdTb3VyY2UsIElTaW1wbGVEcmFnU291cmNlLCBJRHJhZ1NvdXJjZUV2ZW50LCBETkRUWVBFX0VMRU1FTlR9IGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3BEYXRhLCBJRW11bERhdGFUcmFuc2ZlciwgRW11bERhdGFUcmFuc2ZlciwgRW11bExlZ2FjeURhdGFUcmFuc2Zlcn0gZnJvbSBcIi4vRGF0YVRyYW5zZmVyXCI7XHJcblxyXG5cclxuXHJcbnR5cGUgRHJhZ0V2ZW50VHlwZSA9IFwiZHJhZ1wiIHwgXCJkcmFnZW5kXCIgfCBcImRyYWdlbnRlclwiIHwgXCJkcmFnZXhpdFwiIHwgXCJkcmFnbGVhdmVcIiB8IFwiZHJhZ292ZXJcIiB8IFwiZHJhZ3N0YXJ0XCIgfCBcImRyb3BcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU3RhcnRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgc291cmNlIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1NvdXJjZUV2ZW50IGltcGxlbWVudHMgSURyYWdTb3VyY2VFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBkYXRhIHdpdGggdGhlIGdpdmVuIHR5cGUuIEZvciB0ZXh0IGRhdGEgdGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiBNSU1FIHR5cGVzLlxyXG5cdHNldERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggdHlwZSwgZGF0YSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIHR5cGUsIFwiXCIpO1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuc2V0T2JqZWN0RGF0YSggdHlwZSwgZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlQmVoYXZpb3IgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIHRoYXQgZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbiBtZWNoYW5pc21zXHJcbi8vIHNldHVwIGJ5IGRpZmZlcmVudCB0eXBlcyBvZiB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdTb3VyY2VCZWhhdmlvclxyXG57XHJcblx0UmVndWxhciA9IDEsXHJcblx0U2ltcGxlLFxyXG5cdEVsbVRleHQsXHJcblx0RWxtSHRtbFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUhhbmRsZXIgY2xhc3MgaW1wbGVtZW50cyBzdXBwb3J0IGZvciBIVE1MNSBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5LiBJdFxyXG4vLyBpcyB1c2VkIGJ5IEhUTUwgZWxlbWVudHMgdGhhdCBuYXRpdmVseSBzdXBwb3J0IGRyYWcgYW5kIGRyb3AgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdTb3VyY2VIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnU291cmNlUHJvcDogRHJhZ1NvdXJjZVByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtID0gZWxtO1xyXG5cclxuXHRcdGlmIChkcmFnU291cmNlUHJvcCA9PT0gXCJlbG0tdGV4dFwiKVxyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQ7XHJcblx0XHRlbHNlIGlmIChkcmFnU291cmNlUHJvcCA9PT0gXCJlbG0taHRtbFwiIHx8IGRyYWdTb3VyY2VQcm9wID09PSB0cnVlKVxyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWw7XHJcblx0XHRlbHNlIGlmICgoZHJhZ1NvdXJjZVByb3AgYXMgSVNpbXBsZURyYWdTb3VyY2UpLmRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGU7XHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1NvdXJjZSA9IGRyYWdTb3VyY2VQcm9wIGFzIElTaW1wbGVEcmFnU291cmNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoKGRyYWdTb3VyY2VQcm9wIGFzIElEcmFnU291cmNlKS5vbkRyYWdTdGFydCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLlJlZ3VsYXI7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZSA9IGRyYWdTb3VyY2VQcm9wIGFzIElEcmFnU291cmNlO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHZhbHVlIG9mIGRyYWdTb3VyY2VQcm9wIGluIERyYWdTb3VyY2VIYW5kbGVyIGNvbnN0cnVjdG9yLlwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgbWFraW5nIHRoZSBlbGVtZW50IGRyYWdnYWJsZSBieSBhZGRpbmcgZHJhZyBldmVudHMuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50ID0gbmV3IERyYWdTb3VyY2VFdmVudCgpO1xyXG5cdFx0dGhpcy5lbG0uc2V0QXR0cmlidXRlKCBcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGRyYWcgZXZlbnQgaGFuZGxlcnMgZnJvbSB0aGUgZWxlbWVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHJcblx0XHR0aGlzLmVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIpO1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXIgZm9yIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdTdGFydCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGRhdGEgbWFwIC0ganVzdCBpbiBjYXNlXHJcblx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBkYXRhVHlwZSBpbiB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YSlcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBkYXRhVHlwZSwgdGhpcy5zaW1wbGVEcmFnU291cmNlLmRhdGFbZGF0YVR5cGVdKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5zaW1wbGVEcmFnU291cmNlLmFsbG93ZWRFZmZlY3RzO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiBvbkRyYWdTdGFydCBtZXRob2QgaXMgZGVmaW5lZCwgaW52b2tlIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydClcclxuXHRcdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydCggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggRE5EVFlQRV9FTEVNRU5ULCB0aGlzLmVsbSk7XHJcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0KVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS5vdXRlckhUTUwpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnZW5kIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdFbmQgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yICE9PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZpbmFsbHlcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWcgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLy8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHdlIG5lZWQgdG8gaW1wbGVtZW50IGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3I7IHRoYXQgaXMsIHdlIHNob3VsZFxyXG5cdC8vLy8gcGFzcyB0aGUgZWxlbWVudCBvYmplY3QgYXMgZGF0YSBiZWluZyBkcmFnZ2VkLiBOb3RlIHRoYXQgZWl0aGVyIHRoaXMgZmxhZyBpcyB0cnVlIG9yXHJcblx0Ly8vLyB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdC8vcHVibGljIGRlZmF1bHREcmFnU291cmNlQmVoYXZpb3JFbmFibGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBUeXBlIG9mIGRyYWcgc291cmNlIG1lY2hhbmlzbSBkZXRlcm1pbmVkIGJ5IHRoZSBkcmFnU291cmNlIHByb3BlcnR5XHJcblx0cHJvdGVjdGVkIGJlaGF2aW9yOiBEcmFnU291cmNlQmVoYXZpb3I7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2U6IElEcmFnU291cmNlO1xyXG5cclxuXHQvLyBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgc291cmNlLiBUaGlzIHByb3BlcnR5IGNhbiBiZVxyXG5cdC8vIHVuZGVmaW5lZCBpZiBlaXRoZXIgd2UgYXJlIGltcGxlbWVudGluZyBhIGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3IuXHJcblx0cHJpdmF0ZSBzaW1wbGVEcmFnU291cmNlOiBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHNvdXJjZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZUV2ZW50OiBEcmFnU291cmNlRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlRW11bGF0b3IgY2xhc3MgZW11bGF0ZXMgc3VwcG9ydCBmb3IgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eSB2aWEgbW91c2VcclxuLy8gZXZlbnRzLiBJdCBpcyB1c2VkIGZvciBET00gZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIG5hdGl2ZSBkcmFnIGFuZCBkcm9wIHN1cG9ydCAtIGUuZy4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdTb3VyY2VFbXVsYXRvciBleHRlbmRzIERyYWdTb3VyY2VIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnU291cmNlOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGVsbSwgZHJhZ1NvdXJjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgYWRkaW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyBpbml0KClcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRlcm1pbmF0ZXMgdGhlIG9iamVjdCBieSByZW1vdmluZyBhIG1vdXNlZG93biBldmVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0c3VwZXIudGVybSgpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1lbWJlciB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlLWRvd24gZXZlbnQgYW5kIHN0YXJ0IHdhdGNoaW5nIG1vdXNlIG1vdmVtZW50XHJcblx0Ly8oYW5kIG90aGVyKSBldmVudHMuXHJcblx0cHJpdmF0ZSBvbk1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGlnbm9yZSBub24tcHJpbWFyeSBtb3VzZSBidXR0b25zXHJcblx0XHRpZiAoZS5idXR0b24gIT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1lYmVyIGNvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50XHJcblx0XHR0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XHJcblx0XHR0aGlzLm1vdXNlRG93blkgPSBlLmNsaWVudFk7XHJcblxyXG5cdFx0Ly8gc3RhcnQgbGlzdGVuaW5nIHRvIHNldmVyYWwgRG5EIHJlbGF0ZWQgZXZlbnRzIG9uIHRoZSBkb2N1bWVudC5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBFaXRoZXIgc3RhcnQgb3IgY29udGludWUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gcHJpbWFyeSBidXR0b24gbXVzdCBiZSBzdGlsbCBwcmVzc2VkXHJcblx0XHRpZiAoKGUuYnV0dG9ucyAmIDEpID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbmVlZCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIC0gb3RoZXJ3aXNlIHRleHQgd2lsbCBiZSBzZWxlY3RlZCBvbiB0aGUgcGFnZS5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyBpZiBEbkQgb3BlcmF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MgZmlyZSBldmVudHM7IG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB0aGVcclxuXHRcdC8vIG1vdXNlIG1vdmVkIGVub3VnaCB0byBzdGFydCB0aGUgb3BlcmF0aW9uLlxyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN4ID0gZS5jbGllbnRYIC0gdGhpcy5tb3VzZURvd25YO1xyXG5cdFx0XHRsZXQgY3kgPSBlLmNsaWVudFkgLSB0aGlzLm1vdXNlRG93blk7XHJcblx0XHRcdGlmIChjeCA+PSAtMiAmJiBjeCA8PSAyICYmIGN5ID49IC0yICYmIGN5IDw9IDIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFxyXG5cdFx0XHR0aGlzLmluaXRpYXRlRHJhZ09wZXJhdGlvbiggZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBvbk1vdXNlVXAgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJvcCggZSk7XHJcblxyXG5cdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIEVzY2FwZSAtIGNhbmNlbCBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvblxyXG5cdFx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5jYW5jZWxEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHJcblx0XHRcdHRoaXMuY2xlYW51cERyYWdPcGVyYXRpb24oKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUtleUV2ZW50KCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5dXAgZXZlbnRzXHJcblx0cHJpdmF0ZSBvbktleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhdGVzIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBpbml0aWF0ZURyYWdPcGVyYXRpb24oIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKFwic2V0RHJhZ0ltYWdlXCIgaW4gRGF0YVRyYW5zZmVyLnByb3RvdHlwZSlcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxEYXRhVHJhbnNmZXIoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ1N0YXJ0IGV2ZW50IC0gaWYgdGhlIGRlZmF1bHQgYWN0aW9uIGlzIHByZXZlbnRlZCwgd2UgY2FuY2VsIHRoZSBvcGVyYXRpb25cclxuXHRcdGxldCBkcmFnc3RhcnRFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnc3RhcnRcIik7XHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCBkcmFnc3RhcnRFdmVudCk7XHJcblx0XHRpZiAoZHJhZ3N0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRyYWcgc291cmNlIGRpZG4ndCBzZXQgYW4gZWxlbWVudCBmb3IgZHJhZyBpbWFnZSwgdXNlIHRoZSBlbGVtZW50IGl0c2VsZi5cclxuXHRcdGlmICghdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2FsY3VsdGUgZHJhZyBpbWFnZSBjb29yZGluYXRlcyBzbyB0aGF0IGluaXRpYWxseSB0aGUgZHJhZyBpbWFnZSBjb2luc2lkZXMgd2l0aFxyXG5cdFx0XHQvLyB0aGUgb3JpZ2luYWwgaW1hZ2VcclxuXHRcdFx0bGV0IHJjOiBDbGllbnRSZWN0ID0gdGhpcy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoIHRoaXMuZWxtLCBlLmNsaWVudFggLSByYy5sZWZ0LCBlLmNsaWVudFkgLSByYy50b3ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgd2UgZG9uJ3Qga25vdyBsYXN0IHRhcmdldCB5ZXRcclxuXHRcdHRoaXMubGFzdFRhcmdldCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSBhIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5oYW5kbGVEcmFnU3RlcCggZSk7XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZSBvbmUgc3RlcCBvZiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiwgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIG1vdXNlIG1vdmVzXHJcblx0cHJpdmF0ZSBoYW5kbGVEcmFnU3RlcCggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlSW1hZ2VFbGVtZW50KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pc0ltYWdlRWxtUmVzZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBiZWZvcmUgc2VuZGluZyBkcmFnb3ZlciBldmVudCB3ZSBzZXQgdGhlIGRyb3BFZmZlY3QgdG8gbm9uZSwgYW5kIHRoZSBkcm9wb3ZlciBoYW5kbGVyXHJcblx0XHQvLyBjb3VsZCBzZXQgaXQgdG8gc29tZXRoaW5nIGVsc2UgaWYgZGVzaXJlZFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHQvLyBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pIHRoaXMuaW1hZ2VFbG0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdGxldCBuZXdUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdGlmIChuZXdUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGFyZSBvbiB0aGUgc2FtZSB0YXJnZXQgYXMgdGhlIHByZXZpb3VzIG1vdXNlIG1vdmUsIGp1c3Qgc2VuZCBkcmFnb3ZlciAoaWZcclxuXHRcdFx0Ly8gdGhlIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKG5ld1RhcmdldCA9PT0gdGhpcy5sYXN0VGFyZ2V0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc2VuZCBkcmFnZW50ZXIgdG8gdGhlIG5ldyB0YXJnZXQgYW5kIGRldGVybWluZSB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcFxyXG5cdFx0XHRcdC8vIHpvbmVcclxuXHRcdFx0XHRsZXQgZHJhZ2VudGVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2VudGVyXCIpO1xyXG5cdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnZW50ZXJFdmVudCk7XHJcblx0XHRcdFx0bGV0IGlzTmV3VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuID0gZHJhZ2VudGVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHJcblx0XHRcdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHRhcmdldCBhbmQgd2hldGhlciBpdCBpcyBhIHZhbGlkIGRyb3Agem9uZVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldCA9IG5ld1RhcmdldDtcclxuXHRcdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBpc05ld1RhcmdldERyb3BwYWJsZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3VyIG5ldyB0YXJnZXQgaXMgZHJvcHBhYmFsZSwgc2VuZCBkcmFnb3ZlciB0byBpdFxyXG5cdFx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnb3ZlckV2ZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGRvbnQgaGF2ZSBuZXcgdGFyZ2V0IGJ1dCBoYXZlIGxhc3Qgb25lIHRhcmdldCwgc2VuZCBkcmFnbGVhdmUgdG8gdGhlIGxhc3Qgb25lXHJcblx0XHRcdC8vIChpZiB0aGUgbGFzdCB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUpXHJcblx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ1wiKSk7XHJcblxyXG5cdFx0Ly8gbW92ZSB0aGUgZHJhZyBpbWFnZSBlbGVtZW50IHRvIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYIC0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS50b3AgPSBlLmNsaWVudFkgLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRpZiAodGhpcy5kcm9wRWZmZWN0RWxtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdHRoaXMuc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0KTtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmxlZnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgMTIgKyBcInB4XCI7XHJcblx0XHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS50b3AgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgMCArIFwicHhcIjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBsYXN0IG1vdXNlIGV2ZW50IC0gd2UgbWF5IHVzZSBpdCB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMgaWYgd2UgbmVlZCB0b1xyXG5cdFx0Ly8gZGlzcGF0Y2ggZHJhZyBldmVudHMgdXBvbiBrZXlib2FyZCBldmVudHMgKGUuZy4gY2FuY2VsIG9wZXJhdGlvbiB3aGVuIEVzY2FwZSBpcyBwcmVzc2VkXHJcblx0XHQvLyBvciBkcmFnb3ZlciBldmVudCBpZiBDdHJsLCBBbHQgb3IgU2hpZnQgYnV0dG9ucyBhcmUgcHJlc3NlZCkuXHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gZTtcclxufTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIGR1cmluZyBkcmFnIG9wZXJhdGlvbiBieSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50LlxyXG5cdHByaXZhdGUgaGFuZGxlS2V5RXZlbnQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0ICYmIHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBUYWtlcyB0aGUgaW1hZ2UgZWxlbWVudCAoaWYgYW55KSBzcGVjaWZpZWQgdmlhIHRoZSBjYWxsIHRvIHNldERyYWdJbWFnZSBhbmQgY2xvbmVzIGl0IGludG9cclxuXHQvLyBhIHNwZWNpYWwgZGl2IHRoYXQgd2lsbCBiZSBzaG93biBkdXJpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBwcmVwYXJlSW1hZ2VFbGVtZW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHByZXZpb3VzIGltYWdlIGVsZW1lbnQsIHJlbW92ZSBpdCBub3dcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID09IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3JnRWxtOiBFbGVtZW50ID0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtO1xyXG5cdFx0aWYgKCFvcmdFbG0pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCwgd2hpY2ggd2lsbCB3cmFwIHRoZSBpbWFnZSBlbGVtZW50IGFuZCB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG5cdFx0Ly8gZG9jdW1lbnQgYm9keSB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGxldCBkaXZFbG06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblxyXG5cdFx0Ly8gY2xvbmUgdGhlIG9yaWdpbmFsIGVsZW1lbnQgYmVjYXVzZSB3ZSBhcmUgZ29pbmcgdG8gbW92ZSBpdCBhcm91bmQuXHJcblx0XHRsZXQgY2xvbmVkRWxtOiBFbGVtZW50ID0gb3JnRWxtLmNsb25lTm9kZSgpIGFzIEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGltYWdlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgaXMgYW4gU1ZHIGVsZW1lbnQgYnV0IG5vdCB0aGUgPHN2Zz4gZWxlbWVudFxyXG5cdFx0Ly8gaXRzZWxmLCB0aGVuIHdyYXAgaXQgaW4gYW4gPHN2Zz4gZWxlbWVudC5cclxuXHRcdGlmIChtaW0uaXNTdmcoIG9yZ0VsbSkgJiYgIW1pbS5pc1N2Z1N2Zyggb3JnRWxtKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN2Z0VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHRcdFx0c3ZnRWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cdFx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHN2Z0VsbSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggY2xvbmVkRWxtKTtcclxuXHJcblx0XHQvLyBzdHlsZSB0aGUgZGl2IGVsZW1lbnQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbmluZyBhbmQgc29tZSBvcGFjaXR5XHJcblx0XHRkaXZFbG0uc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcblx0XHRkaXZFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblxyXG5cdFx0Ly8gYWRkIGEgc3BhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIFwiZHJvcEVmZmVjdFwiIGltYWdlXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNwYW5cIik7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHRoaXMuZHJvcEVmZmVjdEVsbSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2RWxtKTtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBkaXZFbG07XHJcblxyXG5cdFx0Ly8gY29tcGFyZSB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IHNldCB2aWEgc2V0RHJhZ0ltYWdlIGFuZCB0aGUgd3JhcHBpbmcgZGl2XHJcblx0XHQvLyBlbGVtZW50LiBUaGVpciB0b3AtbGVmdCBjb29yZGluYXRlcyBtYXkgbm90IGNvaW5zaWRlIGR1ZSB0byBzZXZlcmFsIGZhY3RvcnMgKGUuZy5cclxuXHRcdC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIG9yIFNWRyBjb29yZGluYXRlcykuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGFkanVzdCB0aGUgeCBhbmQgeVxyXG5cdFx0Ly8gY29vcmRpbmF0ZXMgaW4gdGhlIEVtdWxEYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG5cdFx0bGV0IHJjQ2xvbmVkRWxtOiBDbGllbnRSZWN0ID0gY2xvbmVkRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjRGl2RWxtOiBDbGllbnRSZWN0ID0gZGl2RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLmxlZnQgIT0gcmNEaXZFbG0ubGVmdClcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArPSByY0Nsb25lZEVsbS5sZWZ0IC0gcmNEaXZFbG0ubGVmdDtcclxuXHRcdGlmIChyY0Nsb25lZEVsbS50b3AgIT0gcmNEaXZFbG0udG9wKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICs9IHJjQ2xvbmVkRWxtLnRvcCAtIHJjRGl2RWxtLnRvcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheSBzbWFsbCBpbWFnZSBpbmRpY2F0aW5nIHdoYXQgZHJvcCBlZmZlY3QgaXMgZXhwZWN0ZWRcclxuXHRwcml2YXRlIHNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjbGFzc05hbWU6IHN0cmluZztcclxuXHRcdGxldCBjb2xvcjogc3RyaW5nO1xyXG5cdFx0c3dpdGNoKCBkcm9wRWZmZWN0KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFwibm9uZVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtYmFuXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcInJlZFwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImNvcHlcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXBsdXNcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiZ3JlZW5cIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJsaW5rXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1saW5rXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcImJsdWVcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmxhY2tcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBoYW5kbGVEcm9wKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGRvbid0IG5lZWQgdG8gZmluZCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3IgYmVjYXVzZSBkcm9wIGFsd2F5cyBvY2N1cnMgb24gdGhlIGxhc3RcclxuXHRcdC8vIGZvdW5kIHRhcmdldCAob3Igbm8gdGFyZ2V0IGF0IGFsbClcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0KVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyb3BcIikpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCAgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbCBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIGNhbmNlbERyYWdPcGVyYXRpb24oIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBEbkQgd2FzIGNhbmNlbGVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIHNlbmQgdGhlIGxhc3QgdGFyZ2V0IChpZiBleGlzdHMgYW5kIGlzIGRyb3BwYWJsZSkgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0Ly8gZmlyZSBvbkRyYWdFbmQgZXZlbnRcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2VuZFwiKSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbiB1cCBhZnRlciBkcmFnIG9wZXJhdGlvbiBmaW5pc2hlcyB3aXRoIGVpdGhlciBkcm9wIG9yIGNhbmNlbGF0aW9uXHJcblx0cHJpdmF0ZSBjbGVhbnVwRHJhZ09wZXJhdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gZGVzdHJveSB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGU9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXN0TW91c2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5yZW1vdmUoKTtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIGNyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIE1vdXNlRXZlbnQgYW5kIHRoZSBzdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdHByaXZhdGUgY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGU6IE1vdXNlRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUpOiBEcmFnRXZlbnRcclxuXHR7XHJcblx0XHQvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBuZXcgRHJhZ0V2ZW50IHlldCwgd2hpbGUgQ2hyb21lIGRvZXNuJ3Qgc3VwcG9ydCBpbml0RHJhZ0V2ZW50XHJcblx0XHRpZiAoXCJpbml0RHJhZ0V2ZW50XCIgaW4gRHJhZ0V2ZW50LnByb3RvdHlwZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyYWdFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdEcmFnRXZlbnQnKTtcclxuXHRcdFx0KGRyYWdFdmVudCBhcyBhbnkpLmluaXREcmFnRXZlbnQoIHR5cGUsIGUuYnViYmxlcywgZS5jYW5jZWxhYmxlLCBlLnZpZXcsIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHRlLmNsaWVudFgsIGUuY2xpZW50WSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHRlLnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IGUuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IGUuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiBlLmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogZS5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IGUuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiBlLnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIERyYWdFdmVudCBmcm9tIHRoZSBnaXZlbiBLZXlib2FyZEV2ZW50IGFuZCB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdC4gVXNlcyBsYXN0IHJlbWVtYmVyZWRcclxuXHQvLyBtb3VzZSBldmVudCB0byBmaWxsIGNvb3JkaW5hdGVzIGFuZCBidXR0b24gaW5mb3JtYXRpb24uXHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZTogS2V5Ym9hcmRFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLCB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRYLCB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCB0aGlzLmxhc3RNb3VzZUV2ZW50LmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogdGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogdGhpcy5sYXN0TW91c2VFdmVudC5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb29yZGluYXRlcyBvZiB0aGUgbW91c2UgZG93biBldmVudCBmb3IgdGhlIHByaW1hcnkgYnV0dG9uLiBXZSB3aWxsIHN0YXJ0IGVtdWxhdGluZyBEbkQgaWZcclxuXHQvLyB0aGUgbW91c2UgbW92ZXMgbW9yZSB0aGFuIHR3byBwaXhlbHMgaW4gZWl0aGVyIGRpcmVjdGlvbiB3aGlsZSB0aGUgcHJpbWFyeSBidXR0b24gaXMgc3RpbGxcclxuXHQvLyBkb3duLlxyXG5cdHByaXZhdGUgbW91c2VEb3duWDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW91c2VEb3duWTogbnVtYmVyO1xyXG5cclxuXHQvLyBTdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdCB0aGF0IGlzIHVzZWQgZHVyaW5nIGEgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24uIEl0IGlzIGNyZWF0ZWRcclxuXHQvLyB3aGVuIERuRCBzdGFydHMgYW5kIGlzIGRlc3Ryb3llZCBhZnRlciBpdCBmaW5pc2hlcy4gUHJlc2VuY2Ugb2YgdGhpcyBvYmplY3QgYWxzbyBpbmRpY2F0ZXNcclxuXHQvLyB0aGF0IHRoZSBEbkQgb3BlcnN0aW9uIGlzIGluIHByb2dyZXNzXHJcblx0cHJpdmF0ZSBlbXVsRGF0YVRyYW5zZmVyOiBJRW11bERhdGFUcmFuc2ZlcjtcclxuXHJcblx0Ly8gQ2xvbmVkIGVsZW1lbnQgdXNlZCB0byBhcyBhbiBpbWFnZSBkdXJpbmcgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIGltYWdlRWxtOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcblx0Ly8gU3ViLWVsZW1lbnQgb2YgdGhlIGltYWdlIGVsZW1lbnQgdGhhdCBzaG93cyBkcm9wIGVmZmVjdFxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEVsbTogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuXHQvLyBUaGUgbGFzdCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3JcclxuXHRwcml2YXRlIGxhc3RUYXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsYXN0IHRhcmdldCB1bmRlciB0aGUgY3Vyc29yIHdhcyBhIHZhbGlkIGRyb3Agem9uZS4gVGhpcyBpc1xyXG5cdC8vIG5lZWRlZCB0byBub3Qgc2VuZCBkcmFnb3ZlciBhbmQgZHJhZ2xlYXZlIGV2ZW50cyB0byBub24tZHJvcHBhYmxlIHRhcmdldHMuIFRoaXMgZmxhZyBpc1xyXG5cdC8vIHNldCB0byB0cnVlIHdoZW4gdGhlIGRyYWdlbnRlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0cyBwcmV2ZW50RGVmYXVsdCBtZXRob2RcclxuXHQvLyBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyYWdvdmVyLCBkcmFnbGVhdmUgYW5kIGRyb3AgZXZlbnRzIGFyZSBub3Qgc2VudFxyXG5cdC8vIHRvIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNMYXN0VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZHJvcCBpcyBwb3NzaWJsZSBvbiB0aGUgbGFzdCB0YXJnZXQuIFRoaXMgZmxhZyBpcyBuZWVkZWQgYmVjYXVzZVxyXG5cdC8vIGV2ZW4gaWYgYSB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUsIG5vdCBhbGwgbG9jYXRpb25zIHdpdGhpbiB0aGUgdGFyZ2V0IG1pZ2h0IGFjY2VwdCB0aGVcclxuXHQvLyBkcm9wLiBUaGlzIGZsYWcgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ292ZXIgZXZlbnQgc2VudCB0byB0aGUgdGFyZ2V0IGhhcyBpdHNcclxuXHQvLyBwcmV2ZW50RGVmYXVsdCBtZXRob2QgY2FsbGVkLiBJZiB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLCBkcm9wIGV2ZW50IHdpbGwgbm90IGJlIHNlbnQgdG9cclxuXHQvLyB0aGlzIHRhcmdldC5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBMYXRlc3QgTW91c2VFdmVudCBvYmplY3QsIHdoY2loIHdlIHVzZSB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMuXHJcblx0cHJpdmF0ZSBsYXN0TW91c2VFdmVudDogTW91c2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnRHJvcEVmZmVjdCwgRHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnVGFyZ2V0UHJvcFR5cGUsIElEcmFnVGFyZ2V0LCBJU2ltcGxlRHJhZ1RhcmdldCwgSURyYWdUYXJnZXRFdmVudH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGF9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEV2ZW50IGltcGxlbWVudHMgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIHRoaXMuZHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciwgdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZGF0YTogYW55ID0gRHJhZ0FuZERyb3BEYXRhLmdldE9iamVjdERhdGEoIHR5cGUpO1xyXG5cdFx0cmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEgOiB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuXHRcdHJldHVybiBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXVxyXG5cdHtcclxuXHRcdGxldCBpdGVtcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0bGV0IGVudHJpZXM6IGFueVtdID0gW107XHJcblx0XHRpZiAoaXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRlbnRyaWVzLnB1c2goIGl0ZW1zW2ldLndlYmtpdEdldEFzRW50cnkoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVudHJpZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0SGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3AgdGFyZ2V0IGZ1bmN0aW9uYWxpdHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1RhcmdldEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdUYXJnZXQ6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoKGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQpLm9uRHJvcCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElEcmFnVGFyZ2V0O1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdUYXJnZXQgYXMgSVNpbXBsZURyYWdUYXJnZXQpLm9uRGF0YURyb3BwZWQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gbmV3IERyYWdUYXJnZXRFdmVudCgpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID0gMDtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMub25EcmFnTGVhdmUpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcm9wXCIsIHRoaXMub25Ecm9wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0VudGVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnRW50ZXIgY2FsbGJhY2sgb25seSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBkcmFnZW50ZXJcclxuXHRcdC8vIGV2ZW50IGlzIGZpcmVkIG9uIG91ciBlbGVtZW50IG9yIG9uIG9uZSBvZiBjaGlsZCBub24tZHJhZy10YXJnZXQgZWxlbWVudHMuXHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyKysgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGlmIElEcmFnVGFyZ2V0LnR5cGVzIHByb3BlcnR5IGlzIGRlZmluZWQgYW5kIGlzIG5vdCBlbXB0eSwgZHJhZyB3aWxsIGJlIHBvc3NpYmxlXHJcblx0XHQvLyBvbmx5IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaGFzIGF0IGxlYXN0IG9uIHR5cGUgZnJvbSB0aGUgdHlwZXMgYXJyYXkuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0IT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKERyYWdBbmREcm9wRGF0YS5oYXNUeXBlKCBlLmRhdGFUcmFuc2ZlciwgdHlwZSkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIG5vIHN1aXRhYmxlIHR5cGUgZm91bmQsIHdlIGRvbid0IGNhbGwgZS5wcmV2ZW50RGVmYXVsdCwgd2hpY2ggZGlzYWxsb3dzIGRyb3BcclxuXHRcdFx0aWYgKCF0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb25EcmFnRW50ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhcHBseSB2aXN1YWwgZmVlZGJhY2sgaWYgc3BlY2lmaWVkXHJcblx0XHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjayAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFsdGhvdWdoIHN0eWxlIHByb3BlcnR5IGV4aXN0cyBpbiBib3RoIEhUTUxFbGVtZW50IGFuZCBTVkdFbGVtZW50LCBpdCBpcyBkZWZpbmVkIG9uIGFcclxuXHRcdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0XHQvLyBzYXZlIGN1cnJlbnQgdmFsdWVzIG9mIHN0eWxlIHByb3BlcnRpZXMgc3BlY2lmaWVkIGluIGZlZWRiYWNrIGFuZCBzZXQgdGhlIHN0eWxlIGZyb21cclxuXHRcdFx0XHRcdC8vIHRoZSBmZWVkYmFja1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0ge307XHJcblx0XHRcdFx0XHRmb3IoIGxldCBwcm9wIGluIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjaylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlW3Byb3BdID0gZWxtU3R5bGVbcHJvcF07XHJcblx0XHRcdFx0XHRcdGVsbVN0eWxlW3Byb3BdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrW3Byb3BdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdPdmVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCBpc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gdGhlIGRyYWcgdGFyZ2V0LCB3ZSBjb25zaWRlciBkcm9wIHBvc3NpYmxlXHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2FsbCB0aGUgb25EcmFnT3ZlciBtZXRob2QgYW5kIGNvbnNpZGVyIGRyb3AgcG9zc2libGUgb25seSBpZiBpdCByZXR1cm5zIHRydWVcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0Ryb3BQb3NzaWJsZSlcclxuXHRcdHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgd2UgbmVlZCB0byBzZXQgZHJvcCBlZmZlY3RcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdMZWF2ZSA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHQvLyB3ZSB3aWxsIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGNhbGxiYWNrIG9ubHkgaWYgdGhlIG1vdXNlIGNvbXBsZXRlbHkgbGVhdmVzIG91ciBlbGVtZW50LFxyXG5cdFx0Ly8gd2hpY2ggbWVhbnMgb3VyIGNvdW50ZXIgcmVhY2hlcyAwLlxyXG5cdFx0aWYgKC0tdGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID4gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmV2ZXJ0IHZpc3VhbCBmZWVkYmFjayAoaWYgd2FzIHNwZWNpZmllZClcclxuXHRcdFx0aWYgKHRoaXMuc2F2ZWRTdHlsZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRsZXQgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAodGhpcy5lbG0gYXMgYW55IGFzIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkuc3R5bGU7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zYXZlZFN0eWxlKVxyXG5cdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNhdmVkU3R5bGVbcHJvcF07XHJcblxyXG5cdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Ecm9wID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IGV4cGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmRhdGFUeXBlcztcclxuXHRcdFx0bGV0IGRhdGFPYmogPSB7fTtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiBlLmRhdGFUcmFuc2Zlci50eXBlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgc29tZSBleHBlY3RlZCB0eXBlcyBkZWZpbmVkIHNraXAgdGhlIGN1cnJlbnQgdHlwZSBpZiBpdCBpcyBubyBvbmVcclxuXHRcdFx0XHQvLyBvZiB0aGUgZXhwZWN0ZWRcclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWRUeXBlcyAmJiBleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDAgJiYgZXhwZWN0ZWRUeXBlcy5pbmRleE9mKCB0eXBlKSA8IDApXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGRhdGEgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRkYXRhT2JqW3R5cGVdID0gZGF0YTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5vbkRhdGFEcm9wcGVkKCBkYXRhT2JqKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQub25Ecm9wKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vLyBpZiB0aGUgdGFyZ2V0IGltcGxlbWVudHMgb25EcmFnTGVhdmUsIGNhbGwgaXQgbm93IHRvIGFsbG93IGl0IHRvIGNsZWFudXBcclxuXHRcdC8vaWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0Ly97XHJcblx0XHQvL1x0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdC8vfVxyXG5cclxuXHRcdC8vIGNsZWFyIG91ciBkcmFnRW50ZXJDb3VudGVyXHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBkZWZhdWx0IGRyb3AgZWZmZWN0IGFjY29yZGluZyB0byB0aGUgYWxsb3dlZCBlZmZlY3RzIGFuZCBrZXlzIHByZXNzZWRcclxuXHRwcml2YXRlIGdldERlZmF1bHREcm9wRWZmZWN0KGU6IERyYWdFdmVudCk6IERyYWdEcm9wRWZmZWN0XHJcblx0e1xyXG5cdFx0bGV0IGFsbG93ZWRFZmZlY3RzID0gZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBhcyBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcblx0XHRzd2l0Y2goIGFsbG93ZWRFZmZlY3RzKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5OlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Nb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblxyXG5cdFx0XHRkZWZhdWx0OiBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRyb3AgZWZmZWN0IGlzIGFtb25nIHRoZSBhbGxvd2VkIGVmZmVjdHNcclxuXHRwcml2YXRlIGlzRHJvcEVmZmVjdEFsbG93ZWQoIGRyb3BFZmZlY3Q6IERyYWdEcm9wRWZmZWN0LCBhbGxvd2VkRWZmZWN0czogRHJhZ0FsbG93ZWRFZmZlY3RzKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rIHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCAhPT0gRHJhZ0Ryb3BFZmZlY3QuTm9uZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBkcmFnVGFyZ2V0OiBJRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gSURyYWdUYXJnZXQgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHRhcmdldC5cclxuXHRwdWJsaWMgc2ltcGxlRHJhZ1RhcmdldDogSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cdC8vIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJldXNlZCB3aGVuIHNlbmRpbmcgZXZlbnRzIHRvIGEgZHJhZyB0YXJnZXQgZWxlbWVudC5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFdmVudDogRHJhZ1RhcmdldEV2ZW50O1xyXG5cclxuXHQvLyBBIGRyYWcgdGFyZ2V0IGVsZW1lbnQgY2FuIGhhdmUgY2hpbGRyZW4gd2hvIGFyZSBub3QgZHJhZyB0YXJnZXRzIGJ5IHRoZW1zZWx2ZXMuIEluIHRoaXNcclxuXHQvLyBjYXNlLCB3aGVuIHRoZSBtb3VzZSBnb2VzIGZyb20gb3VyIGVsZW1lbnQgdG8gYSBjaGlsZCBlbGVtZW50LCB3ZSB3aWxsIHJlY2VpdmUgZHJhZ2VudGVyXHJcblx0Ly8gZXZlbnQgb24gdGhlIGNoaWxkIGVsZW1lbnQgYW5kIGRyYWdsZWF2ZSBvbiBvdXJzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCB0aGlzIHRocm91Z2hcclxuXHQvLyBvdXIgY3VzdG9tIGV2ZW50cyBiZWNhdXNlIGZyb20gdGhlIGNsbGVyJ3MgcG9pbnQgb2YgdmlldyB0aGUgbXVzZSBpcyBzdGlsbCB3aXRoaW4gdGhlXHJcblx0Ly8gYm91bmRzIG9mIG91ciBlbGVtZW50LiBUaGVyZWZvcmUsIHdlIGtlZXAgdGhlIGNvdW50ZXIgdmFyaWFibGUsIHdoaWNoIGlzIHNldCB0byAxXHJcblx0Ly8gd2hlbiB0aGUgZmlyc3QgZHJhZ2VudGVyIGV2ZW50IChmcm9tIG91ciBlbGVtZW50IG9yIGZyb20gYSBjaGlsZCkgaXMgcmVwb3J0ZWQuIE9uIGVhY2hcclxuXHQvLyBzdWJzZXF1ZW50IGRyYWdlbnRlciBhbmQgZHJhZ2xlYXZlIGl0IHdpbGwgYmUgaW5jcmVtZW50ZWQgYW5kIGRlY3JlbWVudGVkIHJlc3BlY3RpdmVseS5cclxuXHQvLyBXaGVuIHRoaXMgY291bnRlciByZWFjaGVzIHplcm8sIHdlIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGhhbmRsZXIuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0RW50ZXJDb3VudGVyOiBudW1iZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGluIHRoZSBmaXJzdCBjYWxsIHRvIHRoZSBvbkRyYWdFbnRlciB3ZSBkZXRlcm1pbmVkIHRoYXQgZHJvcFxyXG5cdC8vIHdhcyBwb3NzaWJsZS5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBTZXQgb2Ygc3R5bGVzIHNhdmVkIGJlZm9yZSBhcHBseWluZyBmZWVkYmFjayBzdHlsZXMgZHVyaW5nIGRyYWdlbnRlciBldmVudC4gV2Ugd2lsbCB1c2VcclxuXHQvLyB0aGVzZSBzdHlsZXMgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgZHVyaW5nIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0cHJpdmF0ZSBzYXZlZFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jbFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZG5kL0RyYWdEcm9wQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL1BvcHVwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL0RpYWxvZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9Nc2dCb3hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVyL1JvdXRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90cmVlL1RyZWVBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9TY3JvbGxBeGlzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpcnQvVlRhYmxlXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzfSBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BJbXBsXCI7XHJcbnJlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzKCk7XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9Qb3B1cFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGlhbG9nIGNsYXNzIGlzIGEgcG9wdXAgd2l0aCB0aHJlZSBkaXN0aW5jdCBhcmVhczogY2FwdGlvbiwgbWFpbiBjb250ZW50IGFuZCBidXR0b25zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIFBvcHVwXHJcbntcclxuXHQvLyBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyBTbGljZSBmb3IgdGhlIHRocmVlIGRpYWxvZyBhcmVhczogY2FwdGlvbiwgbWFpbiBjb250ZW50IGFuZCBidXR0b25zLlxyXG5cdC8vIFRoZXkgY2FuIGJlIGxlZnQgdW5kZWZpbmVkIGlmIGEgZGVyaXZlZCBjbGFzcyBvdmVycmlkZXMgdGhlIGFwcHJvcHJpYXRlIHJlbmRlciBtZXRob2RzLlxyXG5cdGNvbnN0cnVjdG9yKCBjYXB0aW9uQXJlYVNsaWNlPzogbWltLlNsaWNlLCBtYWluQXJlYVNsaWNlPzogbWltLlNsaWNlLCBidXR0b25BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIGRsZ1NsaWNlPzogbWltLlNsaWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKGRsZ1NsaWNlKTtcclxuXHJcblx0XHR0aGlzLmNhcHRpb25BcmVhU2xpY2UgPSBjYXB0aW9uQXJlYVNsaWNlID8gY2FwdGlvbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5tYWluQXJlYVNsaWNlID0gbWFpbkFyZWFTbGljZSA/IG1haW5BcmVhU2xpY2UgOiB7fTtcclxuXHRcdHRoaXMuYnV0dG9uQXJlYVNsaWNlID0gYnV0dG9uQXJlYVNsaWNlID8gYnV0dG9uQXJlYVNsaWNlIDoge307XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGRlZmF1bHQgcGFyYW1ldGVycyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGEgRGlhbG9nIGlzIGNyZWF0ZWRcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7YmFja2dyb3VuZDpcInBpbmtcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwiLCBjdXJzb3I6XCJkZWZhdWx0XCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlID0geyBzdHlsZToge3BhZGRpbmc6XCIwLjVlbSAxZW1cIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlID0geyBzdHlsZToge2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIiwgcGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlID0geyBzdHlsZToge21hcmdpbkxlZnQ6XCIwLjVlbVwiLCBtaW5XaWR0aDpcIjVlbVwifSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbiB3aXRoIHRoZSBnaXZlbiBjaGFyYWN0ZXJpc3RpY3MuIFRoZSBrZXkgcGFyYW1ldGVyIGluZGljYXRlcyB0aGUgdmFsdWUgdGhhdCBpc1xyXG5cdC8vIHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFRoZSBvcHRpb25hbCBpbmRleCBwYXJhbWV0ZXIgc3BlY2lmaWVzXHJcblx0Ly8gdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBidXR0b24gc2hvdWxkIGJlIGFkZGVkLlxyXG5cdHB1YmxpYyBhZGRCdXR0b24oIHNsaWNlOiBtaW0uU2xpY2UsIGtleT86IGFueSwgY2FsbGJhY2s/OiAoa2V5OiBhbnkpID0+IHZvaWQsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmZvOiBEbGdCdG5JbmZvID0geyBzbGljZSwga2V5LCBjYWxsYmFjaywgcmVmOiBuZXcgbWltLlJlZjxIVE1MQnV0dG9uRWxlbWVudD4oKSB9O1xyXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3MucHVzaCggaW5mbyk7XHJcblx0XHRlbHNlIGlmIChpbmRleCA9PT0gMClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy51bnNoaWZ0KCBpbmZvKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4IC0gMSwgMCwgaW5mbyk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSggdGhpcy5yZW5kZXJCdXR0b25BcmVhKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgYnV0dG9uIGF0IHRoZSBnaXZlbiBpbmRleC5cclxuXHRwdWJsaWMgcmVtb3ZlQnV0dG9uKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYnV0dG9uSW5mb3Muc3BsaWNlKCBpbmRleCwgMSk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSggdGhpcy5yZW5kZXJCdXR0b25BcmVhKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJDYXB0aW9uQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlLCB0aGlzLmdldENhcHRpb25BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0NhcHRpb25cIiBtb3VzZWRvd249e3RoaXMub25TdGFydE1vdmV9IHN0eWxlPXtjYXB0aW9uQXJlYVNsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzcz17Y2FwdGlvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5jYXB0aW9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0e2NhcHRpb25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJNYWluQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IG1haW5BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlLCB0aGlzLmdldE1haW5BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ01haW5Db250ZW50XCIgc3R5bGU9e21haW5BcmVhU2xpY2Uuc3R5bGV9IGNsYXNzPXttYWluQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLm1haW5BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7bWFpbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckJ1dHRvbkFyZWEoKVxyXG5cdHtcclxuXHRcdGxldCBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UsIHRoaXMuZ2V0QnV0dG9uQXJlYVNsaWNlKCkpO1xyXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdCdXR0b25zXCIgc3R5bGU9e2J1dHRvbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e2J1dHRvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5idXR0b25BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7YnV0dG9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdHt0aGlzLmJ1dHRvbkluZm9zLm1hcCggKGluZm8pID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGJ0blNsaWNlOiBtaW0uU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UsIGluZm8uc2xpY2UpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpbmZvLmtleX0gY2xpY2s9e2luZm8uY2FsbGJhY2sgJiYgKCgpID0+IGluZm8uY2FsbGJhY2soaW5mby5rZXkpKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17YnRuU2xpY2Uuc3R5bGV9IGNsYXNzPXtidG5TbGljZS5jbGFzc05hbWV9IHsuLi5idG5TbGljZS5wcm9wc30+XHJcblx0XHRcdFx0XHRcdHtidG5TbGljZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyQ2FwdGlvbkFyZWF9XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyTWFpbkFyZWF9XHJcblx0XHRcdFx0e3RoaXMucmVuZGVyQnV0dG9uQXJlYX1cclxuXHRcdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGNhcHRpb24uXHJcblx0cHJvdGVjdGVkIGdldENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2FwdGlvbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIG1haW4gY29udGVudCBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm1haW5BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBidXR0b24gYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0QnV0dG9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmJ1dHRvbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgcHV0cyBtb3VzZSBkb3duIGluIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIG9uU3RhcnRNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zdGFydE1vdmUoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBjYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IENhcHRpb25BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMuY2FwdGlvbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1haW5BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgTWFpbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5tYWluQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIGJ1dHRvbnMgYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBCdXR0b25BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBCdXR0b25BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMuYnV0dG9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIEFycmF5IG9mIGJ1dHRvbnMgYWRkZWQgdG8gdGhlIGRpYWxvZ1xyXG5cdHByaXZhdGUgYnV0dG9uSW5mb3M6IERsZ0J0bkluZm9bXSA9IFtdO1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgYnV0dG9uIGFyZWFcclxuXHRwcml2YXRlIGJ1dHRvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRDYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgbWFpbiBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0TWFpbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGJ1dHRvbnMgYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGEgYnV0dG9uIGVsZW1lbnRcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRCdXR0b25TbGljZTogbWltLlNsaWNlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERsZ0J0bkluZm8gY2xhc3MgaXMgYSBoZWxwZXIgY2xhc3MgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIGJ1dHRvbiBhZGRlZCB0byB0aGUgZGlhbG9nLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxudHlwZSBEbGdCdG5JbmZvID1cclxue1xyXG5cdHNsaWNlOiBtaW0uU2xpY2UsXHJcblx0a2V5OiBhbnksXHJcblx0Y2FsbGJhY2s6IChrZXk6IGFueSkgPT4gdm9pZCxcclxuXHRyZWY6IG1pbS5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZ0J1dHRvbiBlbnVtZXJhdGlvbiBkZWZpbmVzIGNvbnN0YW50cyB0byBpbmRpY2F0ZSBzdGFuZGFyZCBidXR0b25zIHVzZWQgaW4gZGlhbG9ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIERpYWxvZ0J1dHRvblxyXG57XHJcblx0Tm9uZSA9IDB4MCxcclxuXHRPSyA9IDB4MSxcclxuXHRDYW5jZWwgPSAweDIsXHJcblx0WWVzID0gMHg0LFxyXG5cdE5vID0gMHg4LFxyXG5cdENsb3NlID0gMHgxMCxcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEaWFsb2csIERpYWxvZ0J1dHRvbn0gZnJvbSBcIi4vRGlhbG9nXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNc2dCb3ggY2xhc3MgaXMgYSBkaWFsb2cgdGhhdCBkaXNwbGF5cyBhIG1lc3NhZ2Ugd2l0aCBhIHNldCBvZiBwcmUtZGVmaW5lZCBidXR0b25zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveCBleHRlbmRzIERpYWxvZ1xyXG57XHJcblx0cHVibGljIHN0YXRpYyBzaG93TW9kYWwoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSk6IFByb21pc2U8TXNnQm94QnV0dG9ucz5cclxuXHR7XHJcblx0XHRsZXQgbXNnQm94OiBNc2dCb3ggPSBuZXcgTXNnQm94KCBtZXNzYWdlLCB0aXRsZSwgYnV0dG9ucywgaWNvbik7XHJcblx0XHRyZXR1cm4gbXNnQm94LnNob3dNb2RhbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHRcdHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcblx0XHR0aGlzLmljb24gPSBpY29uO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4geyBjb250ZW50OiB0aGlzLnRpdGxlLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiRG9kZ2VyQmx1ZVwiIH0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIG1haW4gY29udGVudCBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdGxldCB7IGNscywgY29sb3IgfSA9IHRoaXMuZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPVxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcInN0YXJ0XCJ9fT5cclxuXHRcdFx0XHR7Y2xzICYmIDxpIGNsYXNzPXtcImZhIGZhLTN4IFwiICsgY2xzfSBzdHlsZT17e2NvbG9yOmNvbG9yfX0vPn1cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIiwgbWluV2lkdGg6XCIxNWVtXCIsIG1heFdpZHRoOlwiNDBlbVwiLCBtaW5IZWlnaHQ6IFwiMmVtXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6XCIyMGVtXCIsIG92ZXJmbG93OlwiYXV0b1wifX0+XHJcblx0XHRcdFx0XHR7dGhpcy5tZXNzYWdlfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5idXR0b25zKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuQ2xvc2U6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2xvc2VcIiwgRGlhbG9nQnV0dG9uLkNsb3NlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5PSzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9rQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLlllc05vQ2FuY2VsOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIlllc1wiLCBEaWFsb2dCdXR0b24uWWVzKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJOb1wiLCBEaWFsb2dCdXR0b24uTm8pO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBnZXRJY29uQ2xhc3NBbmRDb2xvcigpOiB7IGNsczogc3RyaW5nLCBjb2xvcjogc3RyaW5nIH1cclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuaWNvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkluZm86IHJldHVybiB7IGNsczogXCJmYS1pbmZvLWNpcmNsZVwiLCBjb2xvcjogXCJibHVlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLldhcm5pbmc6IHJldHVybiB7IGNsczogXCJmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiLCBjb2xvcjogXCJvcmFuZ2VcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uRXJyb3I6IHJldHVybiB7IGNsczogXCJmYS1taW51cy1jaXJjbGVcIiwgY29sb3I6IFwicmVkXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLlF1ZXN0aW9uOiByZXR1cm4geyBjbHM6IFwiZmEtcXVlc3Rpb24tY2lyY2xlXCIsIGNvbG9yOiBcImdyZWVuXCIgfTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiB7IGNsczogXCJcIiwgY29sb3I6IFwiXCIgfTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b24oIHRleHQ6IHN0cmluZywga2V5OiBEaWFsb2dCdXR0b24pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5hZGRCdXR0b24oIHtjb250ZW50OiB0ZXh0fSwga2V5LCB0aGlzLm9uQnV0dG9uQ2xpY2tlZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25CdXR0b25DbGlja2VkID0gKCBrZXk6IGFueSk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLmNsb3NlKCBrZXkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuXHQvLyBUaXRsZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgdGl0bGU6IHN0cmluZztcclxuXHJcblx0Ly8gQnV0dG9uc1xyXG5cdHByaXZhdGUgYnV0dG9uczogTXNnQm94QnV0dG9ucztcclxuXHJcblx0Ly8gSWNvblxyXG5cdHByaXZhdGUgaWNvbjogTXNnQm94SWNvbjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNc2dCb3hCdXR0b24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGJ1dHRvbnMgYW5kIGJ1dHRvbiBjb21iaW5hdGlvbnMgZm9yXHJcbiAqIG1lc3NhZ2UgYm94ZXMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBNc2dCb3hCdXR0b25zXHJcbntcclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBkaXNwbGF5IG5vIGJ1dHRvbnMgKi9cclxuXHROb25lID0gMCxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBDbG9zZSBidXR0b24gKi9cclxuXHRDbG9zZSxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBhIHNpbmdsZSBPSyBidXR0b24gKi9cclxuXHRPSyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBPSyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRPa0NhbmNlbCxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBZZXMgYW5kIE5vIGJ1dHRvbnMgKi9cclxuXHRZZXNObyxcclxuXHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgaGF2ZSBZZXMsIE5vIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdFllc05vQ2FuY2VsLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94SWNvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgaWNvbnMgZm9yIG1lc3NhZ2UgYm94LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGVudW0gTXNnQm94SWNvblxyXG57XHJcblx0Tm9uZSA9IDAsXHJcblx0SW5mbyxcclxuXHRXYXJuaW5nLFxyXG5cdEVycm9yLFxyXG5cdFF1ZXN0aW9uLFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBvcHVwIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgbW9kZWxlc3MgYW5kIG1vZGFsIHBvcHVwcy4gSXQgcHJvdmlkZXMgdGhlIGJhc2ljIG1lY2hhbmljc1xyXG4vLyBmb3Igc2hvd2luZyBhbmQgY2xvc2luZyB0aGUgcG9wdXBzIGluY2x1ZGluZyBtb3ZpbmcgaXQgd2l0aCB0aGUgbW91c2UuIFRoZSBjb250ZW50IG9mIHRoZVxyXG4vLyBwb3B1cCBpcyBlaXRoZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHVjdG9yIG9yIGlzIHByb3ZpZGVkIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBQb3B1cCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIHRoZSBvYmplY3QgZGVzY3JpYmluZyB0aGUgc3R5bGVzIGFuZCBjb250ZW50IHRoYXQgc2hvdWxkIGJlXHJcblx0Ly8gZGlzcGxheWVkIHdpdGhpbiB0aGUgcG9wdXAuIEl0IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZVxyXG5cdC8vIGdldERsZ1NsaWNlIG1ldGhvZC5cclxuXHRjb25zdHJ1Y3RvciggZGxnU2xpY2U/OiBtaW0uU2xpY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuZGxnU2xpY2UgPSBkbGdTbGljZSA/IGRsZ1NsaWNlIDoge307XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGRlZmF1bHQgcGFyYW1ldGVycyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGEgUG9wdXAgaXMgY3JlYXRlZFxyXG5cdFx0aWYgKCFQb3B1cC5EZWZhdWx0RGxnU2xpY2UpXHJcblx0XHRcdFBvcHVwLkRlZmF1bHREbGdTbGljZSA9IHsgc3R5bGU6IHsgYm9yZGVyU3R5bGU6IFwic29saWRcIiwgYm9yZGVyV2lkdGg6IFwiMXB4XCIsIHBhZGRpbmc6IFwiMFwifSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyB0aGUgZGlhbG9nIGFzIGEgbW9kZWxlc3MgcG9wdXAuIEl0IHNob3VsZCBiZSBjbG9zZWQgd2l0aCB0aGUgQ2xvc2UgbWV0aG9kLlxyXG5cdHB1YmxpYyBvcGVuKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzT3BlbigpKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGUoIHgsIHkpO1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuc2hvdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbG9zZXMgdGhlIGRpYWxvZyBvcGVuZWQgYXMgYSBtb2RlbGVzcyBwb3B1cC4gVGhpcyBtZXRob2QgY2Fubm90IGJlIHVzZWQgdG8gY2xvc2UgYSBtb2RhbFxyXG5cdC8vIGRpYWxvZy5cclxuXHRwdWJsaWMgY2xvc2UoIHJldFZhbD86IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5jbG9zZSgpO1xyXG5cdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHJcblx0XHRpZiAodGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyggcmV0VmFsKTtcclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3BlbnMgYSBtb2RhbCBkaWFsb2cuIFRoZSBkaWFsb2cgaXMgY2xvc2VkIHdpdGggdGhlIENsb3NlTW9kYWwgbWV0aG9kIGFuZCB0aGUgcGFyYW1ldGVyXHJcblx0Ly8gcGFzc2VkIHRvIHRoZSBDbG9zZU1vZGFsIG1ldGhvZCBpcyByZXR1cm5lZCBhcyBhIHJlc29sdmVkIHByb21pc2UuXHJcblx0cHVibGljIHNob3dNb2RhbCggeD86IG51bWJlciwgeT86IG51bWJlcik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzT3BlbigpKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoIFwiRGlhbG9nIGlzIGFscmVhZHkgb3BlblwiKTtcclxuXHJcblx0XHRsZXQgcHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2U8YW55PiggKHJlc29sdmUpID0+IHt0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gcmVzb2x2ZX0pO1xyXG5cdFx0dGhpcy5jcmVhdGUoIHgsIHkpO1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuc2hvd01vZGFsKCk7XHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4uXHJcblx0cHVibGljIGlzT3BlbigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGxnICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGVsZXNzLlxyXG5cdHB1YmxpYyBpc01vZGVsZXNzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pc09wZW4oKSAmJiB0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID09PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGFsLlxyXG5cdHB1YmxpYyBpc01vZGFsKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pc09wZW4oKSAmJiB0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0YXJ0cyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cyBhbmQgbW92ZXMgdGhlIGRpYWxvZyB3aXRoIHRoZSBtb3VzZS4gVGhpcyBtZXRob2QgaXNcclxuXHQvLyBpbnRlbnRlZCB0byBiZSBjYWxsZWQgZnJvbSBhIG1vdXNlZG93biBldmVudCBzb21ld2hlcmUgd2l0aGluIHRoZSBwb3B1cC5cclxuXHRwdWJsaWMgc3RhcnRNb3ZlKCBlOiBNb3VzZUV2ZW50KVxyXG5cdHtcclxuXHRcdC8vIHdlIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHByb3BhZ2F0aW9uIHNvIHRoYXQgbW91c2UgbW92ZW1lbnRzIGRvbid0IGNhdXNlXHJcblx0XHQvLyB0ZXN0IGluIHRoZSBwb3B1cCBhbmQgb24gdGhlIHBhZ2UgdG8gYmUgc2VsZWN0ZWQuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCByZWN0ID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR0aGlzLmRyYWdQb2ludE9mZnNldFggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcblx0XHR0aGlzLmRyYWdQb2ludE9mZnNldFkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlIGFuZCBhbHNvIHJlbWVtYmVyIHRoZW0gaW4gb3VyIFNsaWNlIHNvIHRoYXQgdGhleSBjYW4gYmUgc3BlY2lmaWVkXHJcblx0XHQvLyBhcyBwcm9wZXJ0aWVzIGlmIHRoZSBjb21wb25lbnQgaXMgcmVyZW5kZXJlZFxyXG5cdFx0dGhpcy5kbGcuc3R5bGUubWFyZ2luID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS50b3AgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgPSByZWN0LnRvcCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgXCJweFwiO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNb3ZlcyB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBjb29yZGluYXRlcy4gVGhlIGNvb3JkaW5hdGVzIGFyZSBhZGp1c3RlZCBzbyB0aGF0IGF0IGxlYXN0XHJcblx0Ly8gc29tZSBwYXJ0IG9mIHRoZSBkaWFsb2cgYXQgdGhlIHRvcC1sZWZ0IGNvcm5lciByZW1haW5zIHZpc2libGUgaW4gb3JkZXIgdG8gdGhlIHVzZXIgdG8gYmVcclxuXHQvLyBhYmxlIHRvIGNvbnRpbnVlIG1vdmluZyBpdC5cclxuXHRwdWJsaWMgbW92ZSggbmV3WDogbnVtYmVyLCBuZXdZOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0aWYgKG5ld1ggPCAwKVxyXG5cdFx0XHRuZXdYID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1ggKyAzMCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRuZXdYID0gd2luZG93LmlubmVyV2lkdGggLSAzMDtcclxuXHJcblx0XHRpZiAobmV3WSA8IDApXHJcblx0XHRcdG5ld1kgPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WSArIDMwID4gd2luZG93LmlubmVySGVpZ2h0KVxyXG5cdFx0XHRuZXdZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMzA7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZSBhbmQgYWxzbyByZW1lbWJlciB0aGVtIGluIG91ciBTbGljZSBzbyB0aGF0IHRoZXkgY2FuIGJlIHNwZWNpZmllZFxyXG5cdFx0Ly8gYXMgcHJvcGVydGllcyBpZiB0aGUgY29tcG9uZW50IGlzIHJlcmVuZGVyZWRcclxuXHRcdHRoaXMuZGxnLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ID0gbmV3WCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IG5ld1kgKyBcInB4XCI7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5jdXJyRGxnU2xpY2UpXHJcblx0XHR7XHJcblx0XHRcdC8vIGRlZmluZSBwb3NpdGlvbmluZyBzdHlsZXMuIElmIHggYW5kL29yIHkgYXJlIHVuZGVmaW5lZCwgd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5XHJcblx0XHRcdC8vIGFuZC9vciB2ZXJ0aWNhbGx5XHJcblx0XHRcdGxldCBzdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7IHBvc2l0aW9uOiBcImZpeGVkXCIgfVxyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsWCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcblx0XHRcdFx0c3R5bGUucmlnaHQgPSBcIjBweFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLmxlZnQgPSB0aGlzLmluaXRpYWxYICsgXCJweFwiO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpbkxlZnQgPSBcIjBcIjtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsWSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUudG9wID0gXCIwcHhcIjtcclxuXHRcdFx0XHRzdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0eWxlLnRvcCA9IHRoaXMuaW5pdGlhbFkgKyBcInB4XCI7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luQm90dG9tID0gXCIwXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY3VyckRsZ1NsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBQb3B1cC5EZWZhdWx0RGxnU2xpY2UsIHRoaXMuZ2V0RGxnU2xpY2UoKSwge3N0eWxlfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxkaWFsb2cgcmVmPXtyZWYgPT4gdGhpcy5kbGcgPSByZWZ9IHN0eWxlPXt0aGlzLmN1cnJEbGdTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e3RoaXMuY3VyckRsZ1NsaWNlLmNsYXNzTmFtZX0gey4uLnRoaXMuY3VyckRsZ1NsaWNlLnByb3BzfT5cclxuXHRcdFx0e3RoaXMuY3VyckRsZ1NsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2RpYWxvZz47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFsbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGdTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmVuZGVycyB0aGUgcG9wdXAuXHJcblx0cHJpdmF0ZSBjcmVhdGUoIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW5pdGlhbFggPSB4O1xyXG5cdFx0dGhpcy5pbml0aWFsWSA9IHk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgPGRpdj4gZWxlbWVudCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBlbmQgb2YgPGJvZHk+LiBUaGVuIHJlbmRlciBvdXIgY29tcG9uZW50J3NcclxuXHRcdC8vIGNvbnRlbnQgdW5kZXIgaXQuXHJcblx0XHR0aGlzLmFuY2hvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5hbmNob3JEaXYpO1xyXG5cdFx0bWltLm1vdW50U3luYyggdGhpcywgdGhpcy5hbmNob3JEaXYpO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnJlbmRlcnMgYW5kIGRlc3Ryb3lzIHRoZSBkaWFsb2cuXHJcblx0cHJpdmF0ZSBkZXN0cm95KCk6IHZvaWRcclxuXHR7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHJcblx0XHRtaW0udW5tb3VudFN5bmMoIHRoaXMuYW5jaG9yRGl2KTtcclxuXHRcdHRoaXMuYW5jaG9yRGl2LnJlbW92ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVzIGtleWRvd24gZXZlbnQgdG8gcHJldmVudCBjbG9zaW5nIHRoZSBkaWFsb2cgYnkgRXNjIGtleS5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9ICggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykgLy8gRXNjXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Nb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tb3ZlKCBlLmNsaWVudFggLSB0aGlzLmRyYWdQb2ludE9mZnNldFgsIGUuY2xpZW50WSAtIHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uU3RvcE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uU3RvcE1vdmUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFseSBvciBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0cHJpdmF0ZSBkbGdTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgRGxnU2xpY2UoKTogYW55IHsgcmV0dXJuIHRoaXMuRGxnU2xpY2U7IH1cclxuXHJcblx0Ly8gQ3VycmVudCBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCB0aGF0IGNvbWJpbmUgb3VyIGRlZmF1bHRzIHBsdXMgdGhvc2UgcHJvdmlkZWRcclxuXHQvLyBlaXRoZXIgZXh0ZXJuYWx5IG9yIGJ5IGRlcml2ZWQgY2xhc3NlcyBwbHVzIHRob3NlIHJlZmxlY3RpbmcgdGhlIGRpYWxvZyBwb3NpdGlvbmluZy5cclxuXHRwcml2YXRlIGN1cnJEbGdTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBFbGVtZW50IHVuZGVyIHdoaWNoIHRoZSBkaWFsb2cgaXMgcmVuZGVyZWQuIFRoaXMgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGVcclxuXHQvLyA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZCBhbmQgaXMgcmVtb3ZlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2xvc2VkLlxyXG5cdHByaXZhdGUgYW5jaG9yRGl2OiBIVE1MRWxlbWVudDtcclxuXHJcblx0Ly8gSW5pdGlhbCBYIGNvb3JkaW5hdGUgb2YgdGhlIGRpYWxvZ1xyXG5cdHByaXZhdGUgaW5pdGlhbFg6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5pdGlhbCBZIGNvb3JkaW5hdGUgb2YgdGhlIGRpYWxvZ1xyXG5cdHByaXZhdGUgaW5pdGlhbFk6IG51bWJlcjtcclxuXHJcblx0Ly8vLyBSZWZlcmVuY2UgdG8gdGhlIDxkaWFsb2c+IGVsZW1lbnQgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQuXHJcblx0Ly9wcml2YXRlIGRsZ1JlZiA9IG5ldyBtaW0uUmVmPEhUTUxEaWFsb2dFbGVtZW50PiggcmVmID0+IHRoaXMuZGxnID0gcmVmKTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSA8ZGlhbG9nPiBlbGVtZW50IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkLlxyXG5cdHByaXZhdGUgZGxnOiBIVE1MRGlhbG9nRWxlbWVudDtcclxuXHJcblx0Ly8gUHJvbWlzZSB3aGljaCBpcyBjcmVhdGVkIGZvciBtb2RhbCBkaWFsb2cgYW5kIHdoaWNoIGlzIHJlc29sdmVkIHdoZW4gdGhlIG1vZGFsIGRpYWxvZ1xyXG5cdC8vIGlzIGNsb3NlZC4gVGhlIHByb21pc2UgaXMgcmV0dXJuZWQgZnJvbSBTaG93TW9kYWwuXHJcblx0cHJpdmF0ZSBtb2RhbFByb21pc2VSZXNvbHZlRnVuYzogKGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSA8ZGl2PiBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNhcHRpb24uXHJcblx0cHJpdmF0ZSBjYXB0aW9uID0gbmV3IG1pbS5SZWY8SFRNTEVsZW1lbnQ+KCk7XHJcblxyXG5cdC8vIE9mZnNldHMgb2YgdGhlIHBvaW50IHdoZXJlIHRoZSBtb3ZlIHN0YXJ0ZWQgZnJvbSB0aGUgZGlhbG9nIHRvcC1sZWZ0IGNvcm5lci4gV2UgdXNlIHRoZW1cclxuXHQvLyB0byBjYWxjdWxhdGUgdGhlIGRpYWxvZyB0b3AtbGVmdCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgbW91c2UgY29vcmRpbmF0ZXMgd2hpbGUgbW92ZSBpc1xyXG5cdC8vIGluIHByb2dyZXNzLlxyXG5cdHByaXZhdGUgZHJhZ1BvaW50T2Zmc2V0WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgZHJhZ1BvaW50T2Zmc2V0WTogbnVtYmVyO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIDxkaWFsb2c+IGVsZW1lbnRcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHREbGdTbGljZTogbWltLlNsaWNlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW11cmwgZnJvbSBcIm1pbXVybFwiXHJcbmltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIm1pbWJsL2xpYi9hcGkvbWltXCJcclxue1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZURlZmluaXRpb25zXHJcblx0e1xyXG4gICAgICAgIFJvdXRlcjogSVJvdXRlclNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUm91dGVyU2VydmljZSBpcyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgdGhlIFJvdXRlciBjb21wb25lbnQuIEl0IGFsbG93c1xyXG4gKiBzdWJzY3JpYmVycyB0byBuYXZpZ2F0ZSB0byBwYXRocyBkZWZpbmVkIGJ5IFJvdXRlcidzIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclNlcnZpY2Vcclxue1xyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0bmF2aWdhdGVCeVVSTCggdXJsOiBzdHJpbmcsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0Ly8gTmF2aWdhdGVzIHRvIGEgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0bmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIG9iamVjdCBjb250YWluaW5nIGZpZWxkIHZhbHVlcyB0aGF0IGlzIHBhc3NlZCB3aGVuIG5hdmlnYXRpbmcgdG8gYSByb3V0ZS4gV2hlblxyXG4gKiBuYXZpZ2F0aW5nIGJ5IHJvdXRlIElELCB0aGUgZmllbGRzIGFyZSBwYXNzZWQgZXhwbGljaXRseS4gV2hlbiBuYXZpZ2F0aW5nIGJ5IFVSTCwgdGhlIGZpZWxkc1xyXG4gKiBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIFVSTCBhY2NvcmRpbmcgdG8gdGhlIFVSTCBwYXR0ZXJuIGluIHRoZSByb3V0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlRmllbGRzID0geyBbUDogc3RyaW5nXTogbWltdXJsLkZpZWxkVmFsdWVUeXBlIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkgZm9yIGEgcm91dGUuIEl0IGNhbiByZXR1cm4gYSBQcm9taXNlIGluXHJcbiAqIHdoaWNoIGNhc2UgdGhlIFJvdXRlciB3aWxsIGRpc3BsYXkgcHJvZ3Jlc3MgVUkgdW50aWwgdGhlIGNvbnRlbnQgYmVjb21lcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZUb1JvdXRlRnVuY1R5cGUgPSAoZmllbGRzOiBSb3V0ZUZpZWxkcykgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgd2hlbiBuYXZpZ2F0aW5nIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuIElmIGZhbHNlXHJcbiAqIGlzIHJldHVybmVkLCBuYXZpZ2F0aW9uIGRvZXNuJ3QgaGFwcGVuLiBUaGlzIGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyXHJcbiAqIGFib3V0IHVuc2F2ZWQgZGF0YS4gSWYgUHJvbWlzZSBpcyByZXR1cm5lZCwgdGhlIFJvdXRlciB3aWxsIHdhaXQgdW50aWwgdGhlIHJlc3BvbnNlIGlzIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hdkZyb21Sb3V0ZUZ1bmNUeXBlID0gKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUm91dGUgaW50ZXJmYWNlIGRlZmluZXMgYSBuYXZpZ2F0aW9uIHRhcmdldC4gUm91dGVzIGNhbiBoYXZlIHN1Yi1yb3V0ZXMsIHdoaWNoIGNyZWF0ZXMgYVxyXG4gKiBoaWVyYXJjaHkgb2Ygcm91dGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVxyXG57XHJcblx0LyoqXHJcblx0ICogVW5pcXVlIChidXQgb3B0aW9uYWwpIElEIHRoYXQgYWxsb3dzIG5hdmlnYXRpbmcgdG8gdGhlIHRhcmdldCB1c2luZyBhIHNpbXBsZSBJRCBpbnN0ZWFkIG9mXHJcblx0ICogcGF0aC4gVGhlIHBhdGggbWVtYmVyIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyJ3MgYWRkcmVzcyBjb250cm9sLlxyXG5cdCAqL1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBVUkwgcGF0dGVybiAtIGNhbiBjb250YWluIG5hbWVkIHBhcmFtZXRlcnMgKGFzIGluIC91c2Vycy97dWlkfSkuIFRoaXMgY2FuIGJlIGxlZnQgZW1wdHlcclxuXHQgKiBpZiBvbmx5IGlkIGlzIHVzZWRcclxuXHQgKi9cclxuXHR1cmxQYXR0ZXJuPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBwcm9wZXJ0eSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgaGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRpb24gZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBjb250ZW50IHRvIGRpc3BsYXkuXHJcblx0ICovXHJcblx0bmF2VG9GdW5jPzogTmF2VG9Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXIgYWJvdXQgdW5zYXZlZCBkYXRhLlxyXG5cdCAqL1xyXG5cdG5hdkZyb21GdW5jPzogTmF2RnJvbVJvdXRlRnVuY1R5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzLCB3aGljaCBhcmUgc3ViLXJvdXRlcyBvZiB0aGlzIHJvdXRlLlxyXG5cdCAqL1xyXG5cdHN1YlJvdXRlcz86IFJvdXRlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIHRoYXQgaXMgdXNlZCBhcyBhIHN0YXRlIGZvciBIaXN0b3J5LnB1c2hTdGF0ZSBmdW5jdGlvbi4gSXQgcmVtZW1iZXJzIHRoZVxyXG4gKiBwYXJhbWV0ZXJzIG9mIGEgcm91dGUgdG8gbmF2aWdhdGUgdG8gd2hlbiB0aGUgdXNlciBnb2VzIGJhY2sgb3IgZm9yd2FyZCBpbiB0aGUgYnJvd3NlcidzXHJcbiAqIGhpc3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBSb3V0ZVN0YXRlXHJcbntcclxuXHRyb3V0ZUlEOiBzdHJpbmc7XHJcblx0cm91dGVVUkw6IHN0cmluZztcclxuXHRmaWVsZHM6IFJvdXRlRmllbGRzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZS5cclxuICogVGhpcyBhbGxvd3MgdGhlIHJvdXRlciBkbyBoYXZlIGl0cyBvd24gY29udGVudCAtIHRoZSBzYW1lIGZvciBhbGwgcm91dGVzIC0gYW5kIGluc2VydCB0aGVcclxuICogY3VycmVudCByb3V0ZXIncyBjb250ZW50IGludG8gaXQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZSA9IChyb3V0ZUNvbnRlbnQ6IGFueSkgPT4gYW55O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYnkgdGhlIFJvdXRlciB0byBkaXNwbGF5IGEgcHJvZ3Jlc3MgVUkgd2hpbGUgaXQgaXMgbG9hZGluZ1xyXG4gKiByb3V0ZSBjb250ZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAoKSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclByb3BzIGludGVyZmFjZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnkgQVBJIHRvXHJcblx0ICogcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLiBEZWZhdWx0IHZhbHVlIGlzIHRydWUuXHJcblx0ICovXHJcblx0Y29udHJvbHNCcm93c2VyPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvIGEgcm91dGVyIHVwXHJcblx0ICogdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHQgKi9cclxuXHRjaGFpbnNUb0hpZ2hlclJvdXRlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCBiYXNlZCBvbiB3aGljaCBhbGwgcm91dGUgcGF0aHMgd2lsbCBiZSByZXNvbHZlZC4gRGVmYXVsdCB2YWx1ZSBpc1xyXG5cdCAqIHRydWUuXHJcblx0ICovXHJcblx0YmFzZVVSTD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlciBjb21wb25lbnQgcHJvdmlkZXMgY2xpZW50LXNpZGUgcm91dGluZy4gSXQgd29ya3Mgd2l0aCBSb3V0ZSBvYmplY3RzIHRoYXQgZGVmaW5lXHJcbiAqIGF2YWlsYWJsZSBuYXZpZ2F0aW9uIHRhcmdldHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm91dGVyIGV4dGVuZHMgbWltLkNvbXBvbmVudDxJUm91dGVyUHJvcHMsUm91dGVbXT4gaW1wbGVtZW50cyBJUm91dGVyU2VydmljZSwgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBJUm91dGVyUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHJvdXRlIG9mIHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0XHRcdFx0dGhpcy5hZGRSb3V0ZSggcm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnNlcnRzIHRoZSBnaXZlbiByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QuXHJcblx0ICogQHBhcmFtIHJvdXRlIFtbUm91dGVdXSBvYmplY3QgdG8gYWRkXHJcblx0ICogQHBhcmFtIGluZGV4IEluZGV4IGF0IHdoaWNoIHRvIGFkZCB0aGUgcm91dGUgb2JqZWN0LiBJZiB0aGUgaW5kZXggaXMgbm90IGRlZmluZWQsIHRoZVxyXG5cdCAqXHRcdHJvdXRlIGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuIElmIGluZGV4IGlzIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbFxyXG5cdCAqXHRcdGJlIHRocm93bi5cclxuXHQgKi9cclxuXHRwdWJsaWMgYWRkUm91dGUoIHJvdXRlOiBSb3V0ZSwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIlJvdXRlIG9iamVjdCBjYW5ub3QgYmUgbnVsbFwiKTtcclxuXHJcblx0XHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMCwgcm91dGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJvdXRlcy5wdXNoKCByb3V0ZSk7XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgYWRkIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSB0byB0aGUgbWFwXHJcblx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHJvdXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBhIHJvdXRlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbGlzdCBhbmQgcmV0dXJucyB0aGUgUm91dGUgb2JqZWN0LiBJZiBpbmRleCBpc1xyXG5cdCAqIG91dCBvZiByYW5nZSBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGluZGV4XHJcblx0ICogQHJldHVybiBSb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRoYXQgd2FzIHJlbW92ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZVJvdXRlKCBpbmRleDogbnVtYmVyKTogUm91dGVcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMuc3BsaWNlKCBpbmRleCwgMSlbMF07XHJcblxyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgcmVtb3ZlIHRoZSByb3V0ZSBhbmQgYWxsIGl0cyBzdWItcm91dGVzICh0aGF0IGhhdmUgSURzKSBmcm9tIHRoZSBtYXBcclxuXHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHJvdXRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgdG8gdGhlIG1hcCBvZiByb3V0ZXMgYnkgSURzIChvbmx5XHJcblx0Ly8gdGhlIHJvdXRlcyB0aGF0IGhhdmUgdGhlaXIgaWQgcHJvcGVydHkgZGVmaW5lZCBhbmQgbm90IGVtcHR5KS5cclxuXHRwcml2YXRlIGFkZFJvdXRlVG9NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5zZXQoIHJvdXRlLmlkLCByb3V0ZSk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGVUb01hcCggc3ViUm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiByb3V0ZSBhbmQgaXRzIHN1Yi1yb3V0ZXMgcmVjdXJzaXZlbHkgZnJvbSB0aGUgbWFwIG9mIHJvdXRzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSByZW1vdmVSb3V0ZUZyb21NYXAoIHJvdXRlOiBSb3V0ZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAocm91dGUuaWQpXHJcblx0XHRcdHRoaXMucm91dGVzQnlJRC5kZWxldGUoIHJvdXRlLmlkKTtcclxuXHJcblx0XHRpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdWJSb3V0ZSBvZiByb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVSb3V0ZUZyb21NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBAcGFyYW0gdXJsIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBuYXZpZ2F0ZSB0b1xyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5XHJcblx0ICovXHJcblx0cHVibGljIG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IFtyb3V0ZSwgZmllbGRzXSA9IHRoaXMuZmluZFJvdXRlQnlVUkwoIHVybCk7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlKVxyXG5cdFx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZS5yLm5hdmlnYXRlQnlVUkwoIHVybCwgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5SUQoIGlkOiBzdHJpbmcsIGZpZWxkcz86IFJvdXRlRmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcm91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXNCeUlELmdldCggaWQpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5SUQoIGlkLCBmaWVsZHMpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB3ZSBtYXkgbmVlZCB0byBzdWJzdGl0dXRlIHBhcmFtZXRlcnMgaW4gdGhlXHJcblx0XHQvLyByb3V0ZSdzIFVSTCBwYXR0ZXJuXHJcblx0XHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdHVybCA9IHJvdXRlLnVybFBhdHRlcm47XHJcblx0XHRcdGlmICh1cmwgJiYgZmllbGRzKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdmlnYXRlVG9Sb3V0ZSggcm91dGUsIHVybCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRmluZHMgYSByb3V0ZSBieSBnb2luZyB0aHJvdWdoIHRoZSByb3V0ZSBoaWVyYXJjaHkgYW5kIHRyeWluZyB0byBtYXRjaCB0aGUgZ2l2ZW4gVVJMLlxyXG5cdCAqIElmIHRoZSByb3V0ZSBpcyBmb3VuZCwgdGhlIFVSTCBpcyBwYXJzZWQgYW5kIGFueSBwYXJhbWV0ZXJzIGFyZSBleHRyYWN0ZWQgZnJvbSBpdC5cclxuXHQgKiBAcGFyYW0gdXJsXHJcblx0ICovXHJcblx0cHJpdmF0ZSBmaW5kUm91dGVCeVVSTCggdXJsOiBzdHJpbmcpOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdHJldHVybiBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgdGhpcy5yb3V0ZXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBMb29rcyBmb3IgYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMIGFtb25nIHRoZSBnaXZlbiBhcnJheSBvZiBSb3V0ZSBvYmplY3RzIGFuZFxyXG5cdCAqIHJlY3Vyc2l2ZWx5IGFtb25nIHRoZWlyIHN1Yi1yb3V0ZXMuXHJcblx0ICogQHBhcmFtIHVybCBVUkwgdG8gbWF0Y2hcclxuXHQgKiBAcGFyYW0gcm91dGVzIEFycmF5IG9mIFJvdXRlIG9iamVjdHMgdG8gbWF0Y2ggd2l0aCB0aGUgVVJMXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybDogc3RyaW5nLCByb3V0ZXM6IFJvdXRlW10pOiBbUm91dGUsIFJvdXRlRmllbGRzXVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHJvdXRlIG9mIHJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IG1hdGNoUmVzdWx0ID0gbWltdXJsLm1hdGNoKCB1cmwsIHJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0XHRpZiAobWF0Y2hSZXN1bHQgJiYgbWF0Y2hSZXN1bHQuc3VjY2VzcylcclxuXHRcdFx0XHRyZXR1cm4gW3JvdXRlLCBtYXRjaFJlc3VsdC5maWVsZHNdO1xyXG5cdFx0XHRlbHNlIGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcm9vdEFuZEZpZWxkcyA9IFJvdXRlci5maW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsLCByb3V0ZS5zdWJSb3V0ZXMpO1xyXG5cdFx0XHRcdGlmIChyb290QW5kRmllbGRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJvb3RBbmRGaWVsZHM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW251bGwsIG51bGxdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gdGhlIGdpdmVuIHJvdXRlIHBhc3NpbmcgdGhlIGdpdmVuIHBhcmFtZXRlcnMuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGlkIElEIG9mIHRoZSByb3V0ZVxyXG5cdCAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlJ3MgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgUm91dGVyIHNob3VsZCBjcmVhdGUgYSBuZXcgZW50cnkgaW4gdGhlXHJcblx0ICpcdFx0YnJvd3NlcidzIGhpc3RvcnkuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBuYXZpZ2F0ZVRvUm91dGUoIHJvdXRlOiBSb3V0ZSwgdXJsOiBzdHJpbmcsIGZpZWxkczogUm91dGVGaWVsZHMsXHJcblx0XHRcdFx0XHRtYWtlSGlzdG9yeUVudHJ5OiBib29sZWFuKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0Ly8vLyBjaGVjayBpZiB0aGUgbmV3IHJvdXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHJvdXRlIGFuZCBkb24ndCBkbyBhbnl0aGluZ1xyXG5cdFx0Ly9pZiAocm91dGUgPT09IHRoaXMuY3VyclJvdXRlKVxyXG5cdFx0Ly9cdHJldHVybjtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIGN1cnJlbnQgcm91dGUsIGFzayBpdCBpZiB3ZSBjYW4gbGVhdmUgaXRcclxuXHRcdGlmICh0aGlzLmN1cnJSb3V0ZSAmJiB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJldDogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4gPSB0aGlzLmN1cnJSb3V0ZS5uYXZGcm9tRnVuYygpO1xyXG5cdFx0XHRpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0XHRyZXQgPSBhd2FpdCAocmV0IGFzIFByb21pc2U8Ym9vbGVhbj4pO1xyXG5cclxuXHRcdFx0aWYgKCFyZXQpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHdlIGFyZSBjb250cm9sbGluZyB0aGUgYnJvd3NlciB1c2UgSGlzdG9yeSBBUEkgdG8gY2hhbmdlIHN0YXRlXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIgJiYgbWFrZUhpc3RvcnlFbnRyeSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiByb3V0ZS5pZCwgcm91dGVVUkw6IHVybCwgZmllbGRzIH07XHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKCBzdGF0ZSwgXCJcIiwgdXJsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHJvdXRlIGFuZCBnZXQgaXRzIGNvbnRlbnRcclxuXHRcdHRoaXMuY3VyclJvdXRlID0gcm91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gcm91dGUubmF2VG9GdW5jID8gcm91dGUubmF2VG9GdW5jKCBmaWVsZHMpIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gYXdhaXQgKGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHQvLyByZXF1ZXN0IHRvIGJlIHVwZGF0ZWQgc28gdGhhdCBvdXIgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZFxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIGVycm9yIHdhcyByYWlzZWQgYnkgb25lIG9mIHRoZSBkZXNjZW5kYW50IGNvcG9uZW50cy5cclxuXHRwdWJsaWMgcmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmhhbmRsZUVycm9yKCBlcnIsIHBhdGgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gcHVibGlzaCBvdXJzZWx2ZXMgYXMgYSByb3V0ZXIgc2VydmljZVxyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJSb3V0ZXJcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gaWYgaW5zdHJ1Y3RlZCBzbywgc3Vic2NyaWJlIHRvIGEgcm91dGVyIHNlcnZpY2UgaW1wbGVtZW50ZWQgYnkgYW55IG9mIGNvbXBvbmVudHNcclxuXHRcdC8vIHVwIHRoZSBjaGFpblxyXG5cdFx0aWYgKHRoaXMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSA9IG5ldyBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPigpO1xyXG5cdFx0XHR0aGlzLnZuLnN1YnNjcmliZVNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSwgdW5kZWZpbmVkLCBmYWxzZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmluZCB0aGUgZmlyc3Qgcm91dGUgdG8gZGlzcGxheVxyXG5cdFx0bGV0IGZpcnN0Um91dGU6IFJvdXRlID0gdGhpcy5yb3V0ZXMubGVuZ3RoID4gMCA/IHRoaXMucm91dGVzWzBdIDogbnVsbDtcclxuXHRcdGlmICghZmlyc3RSb3V0ZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3VyclJvdXRlID0gZmlyc3RSb3V0ZTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPSBmaXJzdFJvdXRlLm5hdlRvRnVuYyA/IGZpcnN0Um91dGUubmF2VG9GdW5jKCB7fSkgOiBudWxsO1xyXG5cdFx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcIlBsZWFzZSB3YWl0IHdoaWxlIGNvbnRlbnQgaXMgbG9hZGluZy4uLlwiO1xyXG5cdFx0XHQoY29udGVudCBhcyBQcm9taXNlPGFueT4pLnRoZW4oICggZGVsYXllZENvbnRlbnQ6IGFueSkgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGRlbGF5ZWRDb250ZW50O1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlTWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZXN0YWJsaXNoIGJhc2UgVVJMIHJlbGF0aXZlIHRvIHdoaWNoIGFsbCBwYXRocyB3aWxsIGJlIGNvbnNpZGVyZWRcclxuXHRcdFx0aWYgKCF0aGlzLmJhc2VVUkwpXHJcblx0XHRcdHtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc3Vic2NyaWJlIHRvIHRoZSBwb3BzdGF0ZSBldmVudCBmb3IgbW9uaXRvcmluZyBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BzdGF0ZSk7XHJcblxyXG5cdFx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSB7IHJvdXRlSUQ6IGZpcnN0Um91dGUuaWQsIHJvdXRlVVJMOiBmaXJzdFJvdXRlLnVybFBhdHRlcm4sIGZpZWxkczogbnVsbCB9O1xyXG5cdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSggc3RhdGUsIFwiXCIsIGZpcnN0Um91dGUudXJsUGF0dGVybik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMudm4udW5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52aXJ0UmVuZGVyKCB0aGlzLmN1cnJSb3V0ZUNvbnRlbnQpO1xyXG5cdH1cclxuXHRcclxuXHJcblxyXG5cdHB1YmxpYyBoYW5kbGVFcnJvciggZXJyOiBhbnksIG5vZGVQYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvL3RoaXMuZXJyb3IgPSBlcnI7XHJcblx0XHQvL3RoaXMuZXJyb3JQYXRoID0gbm9kZVBhdGg7XHJcblx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBcclxuXHRcdFx0PGRpdiBpZD1cInJvb3RFcnJvclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicGlua1wiLCBkaXNwbGF5OlwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczogXCJzdGFydFwifX0+XHJcblx0XHRcdFx0e2Vycn1cclxuXHRcdFx0XHR7bm9kZVBhdGggJiYgbm9kZVBhdGgubWFwKCAobmFtZSkgPT4gPHNwYW4+e25hbWV9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBcIlZpcnR1YWxcIiBmdW5jdGlvbiB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy4gUmVzcG9uc2libGUgZm9yIHJldHVybmluZ1xyXG5cdCAqIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBlaXRoZXIgY2FsbHNcclxuXHQgKiB0aGUgb3V0ZXJDb250ZW50RnVuYyBpZiBkZWZpbmVkIG9yIGp1c3QgcmV0dXJucyB0aGUgY29udGVudCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGN1cnJSb3V0ZUNvbnRlbnRcclxuXHQgKiBAcmV0dXJuIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCB2aXJ0UmVuZGVyKCBjdXJyUm91dGVDb250ZW50OiBhbnkpOiBhbnlcclxuXHR7XHJcblx0XHQvL3JldHVybiB0aGlzLm91dGVyQ29udGVudEZ1bmMgPyB0aGlzLm91dGVyQ29udGVudEZ1bmMoIGN1cnJSb3V0ZUNvbnRlbnQpIDogY3VyclJvdXRlQ29udGVudDtcclxuXHRcdHJldHVybiBjdXJyUm91dGVDb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWFjdHMgb24gdXNlciB1c2luZyBiYWNrIGFuZCBmb3J3YXJkIGJ1dHRvbnMuXHJcblx0cHJpdmF0ZSBvblBvcHN0YXRlID0gKCBlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IGUuc3RhdGUgYXMgUm91dGVTdGF0ZTtcclxuXHRcdGlmICghc3RhdGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoc3RhdGUucm91dGVJRClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5SUQoIHN0YXRlLnJvdXRlSUQsIHN0YXRlLmZpZWxkcyk7XHJcblx0XHRlbHNlIGlmIChzdGF0ZS5yb3V0ZVVSTClcclxuXHRcdFx0dGhpcy5uYXZpZ2F0ZUJ5VVJMKCBzdGF0ZS5yb3V0ZVVSTCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCBcIlJvdXRlIHN0YXRlIGluIHBvcHN0YXRlIGV2ZW50IGhhcyBuZWl0aGVyIHJvdXRlIElEIG5vciBwYXRoLlwiKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcm91dGVyIGNvbnRyb2xzIHRoZSBicm93c2VyOyB0aGF0IGlzLCB1c2VzIEhpc3RvcnlcclxuXHQvLyBBUEkgdG8gcHVzaCBuZXcgc3RhdGUgYW5kIGludGVyY2VwdCBiYWNrIGFuZCBmb3J3YXJkIGNvbW1hbmRzLlxyXG5cdHByaXZhdGUgZ2V0IGNvbnRyb2xzQnJvd3NlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5wcm9wcy5jb250cm9sc0Jyb3dzZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgdGhhdCBpZiB0aGlzIHJvdXRlciBjYW5ub3QgcmVzb2x2ZSBhIHBhdGgsIGl0IHdpbGwgZGVsZWdhdGUgdG9cclxuXHQvLyBhIHJvdXRlciB1cCB0aGUgY29tcG9uZW50IGNoYWluIChpZiB0aGVyZSBpcyBvbmUpLlxyXG5cdHByaXZhdGUgZ2V0IGNoYWluc1RvSGlnaGVyUm91dGVyKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGFpbnNUb0hpZ2hlclJvdXRlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXI7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuXHJcblx0cHJpdmF0ZSBnZXQgYmFzZVVSTCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5iYXNlVVJMID09PSB1bmRlZmluZWQgPyBcIlwiIDogdGhpcy5wcm9wcy5iYXNlVVJMO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgZnVuY3Rpb24gdGhhdCByZW5kZXJzIHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHJvdXRlIGluc2lkZSB0aGUgcm91dGVyJ3Mgb3duIGNvbnRlbnQuIElmXHJcblx0ICogdGhpcyBtZW1iZXIgaXMgdW5kZWZpbmVkLCBvbmx5IHRoZSBjdXJyZW50IHJvdXRlJ3MgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0IE91dGVyQ29udGVudEZ1bmMoIHZhbDogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5vdXRlckNvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBvdXRlckNvbnRlbnRGdW5jOiBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0LyoqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhIHByb2dyZXNzIFVJIHdoaWxlIHRoZSByb3V0ZXIgaXMgbG9hZGluZyByb3V0ZSBjb250ZW50LiAqL1xyXG5cdHB1YmxpYyBzZXQgUHJvZ3Jlc3NDb250ZW50RnVuYyggdmFsOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZSkgeyB0aGlzLnByb2dyZXNzQ29udGVudEZ1bmMgPSB2YWw7IH1cclxuXHRwcml2YXRlIHByb2dyZXNzQ29udGVudEZ1bmM6IFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlO1xyXG5cclxuXHQvLyBBIHJvdXRlciBzZXJ2aWNlIHRoaXMgcm91dGVyIHdpbGwgZGVsZWdhdGUgdG8gd2hlbiBpdCBjYW5ub3QgcmVzb2x2ZSBhIHBhdGguXHJcblx0cHJpdmF0ZSBoaWdoZXJSb3V0ZXJTZXJ2aWNlOiBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPjtcclxuXHJcblx0Ly8gT3JkZXJlZCBsaXN0IG9mIFJvdXRlIG9iamVjdHMgLSB1c2VkIHRvIGZpbmQgcm91dGVzIGJ5IG1hdGNoaW5nIHBhdGhzLiBOb3RlIHRoYXQgdGhpc1xyXG5cdC8vIGxpc3QgaXMgYWN0dWFsbHkgYSBoaWVyYXJjaHkgYmVjYXVzZSByb3V0ZXMgY2FuIGNvbnRhaW4gc3ViLXJvdXRlcy5cclxuXHRwcml2YXRlIHJvdXRlczogUm91dGVbXSA9IFtdO1xyXG5cclxuXHQvLyBNYXAgb2Ygcm91dGUgSURzIHRvIFJvdXRlIG9iamVjdHMuIEFsbCByb3V0ZXMgdGhhdCBkZWZpbmUgYW4gSUQgYXJlIGFkZGVkIHRvIHRoaXMgbWFwIC1cclxuXHQvLyBubyBtYXR0ZXIgaG93IGRlZXAgaW4gdGhlIGhpZXJhcmNoeS5cclxuXHRwcml2YXRlIHJvdXRlc0J5SUQgPSBuZXcgTWFwPHN0cmluZyxSb3V0ZT4oKTtcclxuXHJcblx0Ly8gQ3VycmVudGx5IGRpc3BsYXllZCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZTogUm91dGU7XHJcblxyXG5cdC8vIENvbnRlbnQgcG92aWRlZCBieSB0aGUgY3VycmVudCByb3V0ZS5cclxuXHRwcml2YXRlIGN1cnJSb3V0ZUNvbnRlbnQ6IGFueTtcclxuXHJcblx0Ly8gRXJyb3IgYW5kIGNvbXBvbmVudCBwYXRoIGluIGNhc2UgYW4gZXJyb3IgaGFzIGJlZW4gY2F1Z2h0LlxyXG5cdHByaXZhdGUgZXJyb3I6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSBlcnJvclBhdGg6IHN0cmluZ1tdID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIExpbmtQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBwcm9wZXJ0aWVzIGZvciB0aGUgTGluayBjb21wb25lbnQgYmVjYXVzZS4gVGhlIHByb3BlcnRpZXMgaW5cclxuLy8gdGhpcyBpbnRlcmZhY2UgZGVmaW5lIHRoZSByb3V0ZTsgdGhlIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIElIdG1sQUVsZW1lbnRQcm9wcyBpbnRlcmZhY2VcclxuLy8gY29ycmVzcG9uZCB0byB0aGUgcmVsZXZhbnQgYXR0cmlidXRlcyBvZiB0aGUgPGE+IERPTSBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHMgZXh0ZW5kcyBtaW0uSUh0bWxBRWxlbWVudFByb3BzXHJcbntcclxuXHQvLyBQYXRoIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlVVJMPzogc3RyaW5nO1xyXG5cclxuXHQvLyBJRCBvZiB0aGUgcm91dGUgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byBhIHJvdXRlIGJ5IHRoZSBSb3V0ZXIuXHJcblx0cm91dGVJRD86IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSB3aGVuIHVzaW5nIHJvdXRlSUQuXHJcblx0ZmllbGRzPzogUm91dGVGaWVsZHM7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgc2hvdWxkIGJlIG1hZGUgYSBuZXcgZW50cnkgaW4gdGhlIGJyb3dzZXIncyBoaXN0b3J5O1xyXG5cdC8vIHRoYXQgaXMgdG8gYmUgc3ViamVjdCB0byBiYWNrIGFuZCBmb3J3YXJkIGJyb3dzZXIgY29tbWFuZHMuXHJcblx0bWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rIGNsYXNzIGlzIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIGNyZWF0aW5nIGxpbmtzIGhhbmRsZWQgYnkgYSBSb3V0ZXIgb2JqZWN0LiBJdCBpc1xyXG4vLyBpbXBsZW1lbnRlZCBhcyBhIG1hbmFnZWQgY29tcG9uZW50IGJlY2F1c2UgaXRzIGludGVuZGVkIHVzZSBpcyB2ZXJ5IHNpbWlsYXIgdG8gdGhlIDxhPiBET01cclxuLy8gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBMaW5rIGV4dGVuZHMgbWltLkNvbXBvbmVudDxMaW5rUHJvcHM+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IExpbmtQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBleHRyYWN0IG91ciBjdXN0b20gcGFyYW1ldGVycyBhbmQgbGVhdmUgb25seSB0aG9zZSB0aGF0IGFyZSA8YT4gYXR0cmlidXRlc1xyXG5cdFx0bGV0IHtyb3V0ZVVSTCwgcm91dGVJRCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5LCAuLi5yZXN0fSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gPGEgaHJlZj1cIiNcIiBjbGljaz17dGhpcy5vbkNsaWNrfSB7Li4ucmVzdH0+XHJcblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cdFx0PC9hPjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkNsaWNrKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgc2VydmljZTogSVJvdXRlclNlcnZpY2UgPSB0aGlzLnZuLmdldFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0aWYgKCFzZXJ2aWNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMucm91dGVJRClcclxuXHRcdFx0c2VydmljZS5uYXZpZ2F0ZUJ5SUQoIHRoaXMucHJvcHMucm91dGVJRCwgdGhpcy5wcm9wcy5maWVsZHMsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeVVSTCggdGhpcy5wcm9wcy5yb3V0ZVVSTCwgdGhpcy5wcm9wcy5tYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWUgY2xhc3MgaXMgYSBnZW5lcmFsIHB1cnBvc2UgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGltcGxlbWVudHMgSVRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudGFiSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoICgpID0+IG5ldyBUcmVlTm9kZSggbnVsbCwgMCwgdGhpcykpO1xyXG5cdFx0dGhpcy5lbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fdGFiSW5kZXg7IH1cclxuXHRwdWJsaWMgc2V0IHRhYkluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1fdGFiSW5kZXggPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZE5vZGUoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9zZWxlY3RlZE5vZGU7IH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbG1SZWZ9IHRhYmluZGV4PXt0aGlzLnRhYkluZGV4fSBjbGFzcz17dGhpcy5jc3NDbGFzc1RyZWV9IGtleWRvd249e3RoaXMub25LZXlEb3dufT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKVxyXG5cdFx0XHR0aGlzLmV4cGFuZE9yU2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIilcclxuXHRcdFx0dGhpcy5jb2xsYXBzZU9yU2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbmV4dE5vZGUgPSB0aGlzLmZpbmREb3duKCBub2RlKTtcclxuXHRcdGlmIChuZXh0Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0bmV4dE5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdG5leHROb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcHJldk5vZGUgPSB0aGlzLmZpbmRVcCggbm9kZSk7XHJcblx0XHRpZiAocHJldk5vZGUpXHJcblx0XHR7XHJcblx0XHRcdHByZXZOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRwcmV2Tm9kZS5zY3JvbGxJbnRvVmlldyggdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGNvbGxhcHNlZCwgZXhwYW5kcyBpdC4gSWYgdGhlIG5vZGUgaXMgYWxyZWFkeSBleHBhbmRlZCwgc2VsZWN0cyB0aGUgZmlyc3RcclxuXHQvLyBjaGlsZCBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIHNlbGVjdHMgdGhlIG5leHQgbm9kZSBkb3duLlxyXG5cdHByaXZhdGUgZXhwYW5kT3JTZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld05vZGUgPSBub2RlLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdFx0XHRuZXdOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRcdG5ld05vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS5leHBhbmQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgZXhwYW5kZWQsIGNvbGxhcHNlcyBpdDsgb3RoZXJ3aXNlLCBzZWxlY3RzIHRoZSBub2RlJ3MgcGFyZW50LlxyXG5cdHByaXZhdGUgY29sbGFwc2VPclNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdG5vZGUuY29sbGFwc2UoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZERvd24oIG5vZGU6IFRyZWVOb2RlLCBza2lwRXhwYW5kZWRTdWJOb2RlczogYm9vbGVhbiA9IGZhbHNlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHNraXBFeHBhbmRlZFN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGlmIChub2RlLmluZGV4IDwgY29udGFpbmVyLm5vZGVzLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4ICsgMV07XHJcblx0XHRcdGVsc2UgaWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUubV9wYXJlbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pc0V4cGFuZGVkICYmIG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdG5vZGUuY29udGFpbmVyLm5vZGVzWzBdLnNlbGVjdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRVcCggbm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pbmRleCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubV9wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0bGV0IHByZXZOb2RlID0gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggLSAxXTtcclxuXHRcdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBwcmV2Tm9kZSk7XHJcblx0XHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IHByZXZOb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHdoaWNoIGlzIHRoZSBsYXN0IGV4cGFuZGVkIGRlc2NlbmRhbmQgb2YgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kTGFzdEV4cGFuZGVkTm9kZSggY3Vyck5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIWN1cnJOb2RlIHx8IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgfHwgIWN1cnJOb2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGxhc3RDaGlsZCA9IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlc1tjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoLTFdO1xyXG5cdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBsYXN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogbGFzdENoaWxkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NDbGFzc1RyZWUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlVHJlZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWVcIiwgXCIudHJlZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3Vyc29yOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIERvZGdlckJsdWVcIixcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlXCIsIFwiLnRyZWUtbm9kZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50ID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudEhvdmVyID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQ6aG92ZXJcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKik6aG92ZXJcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJsaWdodGN5YW5cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogXCIxcHggZG90dGVkXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIkRvZGdlckJsdWVcIixcclxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlSWNvbiA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1pY29uXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUljb24gPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtaWNvblwiLCBcIi50cmVlLW5vZGUtaWNvbigqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiBcIjFlbVwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIxZW1cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzU3Vibm9kZXMgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLXN1Ym5vZGVzXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlU3ViTm9kZXMgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLXN1Ym5vZGVzXCIsIFwiLnRyZWUtc3Vibm9kZXMoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMTZweFwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwcml2YXRlIG1fdGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIG9mIG5vZGVzLlxyXG5cdHByaXZhdGUgY29udGFpbmVyOiBUcmVlTm9kZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ3VycmVudGx5IHNlbGVjdGVkIG5vZGUgb3IgbnVsbCBpZiBubyBub2RlIGlzIHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBtX3NlbGVjdGVkTm9kZTogVHJlZU5vZGUgPSBudWxsO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgdHJlZS5cclxuXHRwdWJsaWMgZWxtUmVmOiBtaW0uUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcblx0Ly8gQ1NTIHJ1bGVzIHVzZWQgYnkgdGhlIFRyZWUgYW5kIFRyZWVOb2RlIGNvbnRyb2xzXHJcblx0cHJpdmF0ZSBjc3NSdWxlVHJlZTogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGU6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudDogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50SG92ZXI6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudFNlbGVjdGVkOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUljb246IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVTdWJOb2RlczogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBDU1MgbG9jYWwgY2xhc3MgbmFtZXNcclxuXHRwdWJsaWMgY3NzQ2xhc3NUcmVlOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50OiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVJY29uOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzU3Vibm9kZXM6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZSBleHRlbmRzIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0dGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBub2Rlcy5cclxuXHRyZWFkb25seSBub2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlXHJcblx0cmVhZG9ubHkgc2VsZWN0ZWROb2RlOiBJVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVQYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhIHRyZWUgbm9kZSB0aGF0IGNhbiBiZSBzZXQvY2hhbmdlZFxyXG4vLyBleHRlcm5hbGx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQYXJhbXNcclxue1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHRpY29uPzogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHRleHRDb2xvcj86IHN0cmluZztcclxuXHRiZ0NvbG9yPzogc3RyaW5nO1xyXG5cdGl0YWxpYz86IGJvb2xlYW47XHJcblx0Ym9sZD86IGJvb2xlYW47XHJcblx0Y3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcblx0ZGF0YT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZUljb25QYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhbiBpY29uIG9mIGEgdHJlZSBub2RlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgVHJlZU5vZGVJY29uUGFyYW1zID0ge2NsYXNzOiBzdHJpbmd9IHwge2ltZzogc3RyaW5nfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBub2RlIGluIHRoZSB0cmVlIGhpZXJhcmNoeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIGV4dGVuZHMgSVRyZWVOb2RlUGFyYW1zLCBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cmVhZG9ubHkgdHJlZTogSVRyZWU7XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRyZWFkb25seSBwYXJlbnQ6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRyZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM6IElUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRyZWFkb25seSBpc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBFeHBhbmRzIHRoZSBub2RlIHNvIHRoYXQgaXRzIHN1Yi1ub2RlcyBiZWNvbWUgdmlzaWJsZS5cclxuXHRleHBhbmQoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgdGhlIG5vZGUgaGlkaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0Y29sbGFwc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRzZWxlY3QoKTogdm9pZDtcclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHVuc2VsZWN0KCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0YWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlO1xyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRyZW1vdmVBbGxOb2RlcygpOiB2b2lkO1xyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRleHBhbmRBbGwoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdGNvbGxhcHNlQWxsKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCI7XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgdHJlZSBjb250cm9sIGluc3RhbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmVlKCk6IElUcmVlXHJcbntcclxuXHRyZXR1cm4gbmV3IFRyZWUoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWUsIElUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXMsIFRyZWVOb2RlSWNvblBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIG5vZGUgd2l0aGluIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgbWltLkNvbXBvbmVudCBpbXBsZW1lbnRzIElUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHBhcmVudDogVHJlZU5vZGUsIGxldmVsOiBudW1iZXIsIHRyZWU6IFRyZWUgPSBudWxsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tX3BhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubV90cmVlID0gcGFyZW50ICE9PSBudWxsID8gcGFyZW50Lm1fdHJlZSA6IHRyZWU7XHJcblx0XHR0aGlzLm1fbGV2ZWwgPSBsZXZlbDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFRyZWVOb2RlQ29udGFpbmVyKCB0aGlzLm5vZGVGYWN0b3J5KTtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmID0gbmV3IG1pbS5SZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2VzIG9mIHN1Yi1ub2RlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeSA9ICgpOiBUcmVlTm9kZSA9PlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVHJlZU5vZGUoIHRoaXMsIHRoaXMubV9sZXZlbCArIDEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBnZXQgdHJlZSgpOiBJVHJlZSB7IHJldHVybiB0aGlzLm1fdHJlZTsgfVxyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIGdldCBwYXJlbnQoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9wYXJlbnQ7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRwdWJsaWMgZ2V0IGxldmVsKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fbGV2ZWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBpbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX2luZGV4OyB9XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc2V0IGluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1faW5kZXggPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnMuXHJcblx0cHVibGljIGdldCBjb250ZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY29udGVudDsgfVxyXG5cdHB1YmxpYyBzZXQgY29udGVudCggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2NvbnRlbnQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGljb24oKTogVHJlZU5vZGVJY29uUGFyYW1zIHsgcmV0dXJuIHRoaXMubV9pY29uOyB9XHJcblx0cHVibGljIHNldCBpY29uKCB2YWw6IFRyZWVOb2RlSWNvblBhcmFtcykgeyB0aGlzLm1faWNvbiA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGV4dENvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fdGV4dENvbG9yOyB9XHJcblx0cHVibGljIHNldCB0ZXh0Q29sb3IoIHZhbDogc3RyaW5nKSB7IHRoaXMubV90ZXh0Q29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJnQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9iZ0NvbG9yOyB9XHJcblx0cHVibGljIHNldCBiZ0NvbG9yKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fYmdDb2xvciA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRhbGljKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2l0YWxpYzsgfVxyXG5cdHB1YmxpYyBzZXQgaXRhbGljKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2l0YWxpYyA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgYm9sZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9ib2xkOyB9XHJcblx0cHVibGljIHNldCBib2xkKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2JvbGQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY3VzdG9tQ2xhc3M7IH1cclxuXHRwdWJsaWMgc2V0IGN1c3RvbUNsYXNzKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY3VzdG9tQ2xhc3MgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHsgcmV0dXJuIHRoaXMubV9kYXRhOyB9XHJcblx0cHVibGljIHNldCBkYXRhKCB2YWw6IGFueSkgeyB0aGlzLm1fZGF0YSA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGV4cGFuZGVkLlxyXG5cdHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pc0V4cGFuZGVkOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0cHVibGljIGV4cGFuZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgc2VsZWN0KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5tX2lzU2VsZWN0ZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdC8vIHVuc2VsZWN0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSAoaWYgYW55KVxyXG5cdFx0XHRpZiAodGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgIT0gbnVsbClcclxuXHRcdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZS51bnNlbGVjdCgpO1xyXG5cclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHB1YmxpYyB1bnNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3ViTm9kZXMoKTogSVRyZWVOb2RlW10geyByZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXM7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGU6IFRyZWVOb2RlID0gdGhpcy5jb250YWluZXIuYWRkTm9kZSggcGFyYW1zLCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGZpcnN0IHN1Yi1ub2RlXHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblxyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZU5vZGUoIGluZGV4KTtcclxuXHJcblx0XHQvLyB1cGRhdGUgb25seSBpZiB0aGlzIHdhcyB0aGUgbGFzdCBzdWItbm9kZVxyXG5cdFx0aWYgKG9sZExlbmd0aCA9PT0gMSAmJiB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkTGVuZ3RoID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKG9sZExlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5leHBhbmQoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29sbGFwc2UoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmNvbGxhcHNlQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgdGhlIG5vZGUgaXMgbm90IHdpdGhpbiB0aGUgdmlld3BvcnQgYW5kIHNjcm9sbHMgaXQgaW50byB2aWV3IGFsaW5naW5nIGl0XHJcblx0Ly8gd2l0aCB0aGUgdXBwZXIgb3IgbG93ZXIgZWRnZSBvZiB0aGUgdHJlZSBjb250YWluZXIuXHJcblx0cHVibGljIHNjcm9sbEludG9WaWV3KCBhbGlnblVwOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5tX3RyZWUuZWxtUmVmLnIgfHwgIXRoaXMuY29udGVudEVsbVJlZi5yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IHRyZWUgYW5kIG5vZGUgYm91bmRpbmcgcmVjdFxyXG5cdFx0bGV0IHJjVHJlZTogQ2xpZW50UmVjdCA9IHRoaXMubV90cmVlLmVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjTm9kZTogQ2xpZW50UmVjdCA9IHRoaXMuY29udGVudEVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjTm9kZS5ib3R0b20gPD0gcmNUcmVlLmJvdHRvbSAmJiByY05vZGUudG9wID49IHJjVHJlZS50b3ApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYuci5zY3JvbGxJbnRvVmlldyggYWxpZ25VcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdHt0aGlzLnJlbmRlck5vZGUoKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyU3ViTm9kZXMoKX1cclxuXHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlck5vZGUoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGV4cGFuZGVyQ2xhc3NOYW1lOiBzdHJpbmcgPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgPyBcIlwiIDogdGhpcy5tX2lzRXhwYW5kZWQgPyBcImZhLWNhcmV0LWRvd25cIiA6IFwiZmEtY2FyZXQtcmlnaHRcIjtcclxuXHJcblx0XHRsZXQgaWNvbkNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICh0aGlzLm1faWNvbilcclxuXHRcdHtcclxuXHRcdFx0aWYgKFwiY2xhc3NcIiBpbiB0aGlzLm1faWNvbilcclxuXHRcdFx0XHRpY29uQ29udGVudCA9IDxzcGFuIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29uICsgXCIgXCIgKyB0aGlzLm1faWNvbi5jbGFzc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHRcdGVsc2UgaWYgKFwiaW1nXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8aW1nIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29ufSBzcmM9e3RoaXMubV9pY29uLmltZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvbnRlbnRDbGFzczogc3RyaW5nID0gdGhpcy5tX2lzU2VsZWN0ZWQgPyB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQgOiB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50O1xyXG5cdFx0aWYgKHRoaXMubV9jdXN0b21DbGFzcylcclxuXHRcdFx0Y29udGVudENsYXNzICs9IFwiIFwiICsgdGhpcy5tX2N1c3RvbUNsYXNzO1xyXG5cclxuXHRcdGxldCBjb250ZW50U3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRpZiAodGhpcy5tX3RleHRDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmNvbG9yID0gdGhpcy5tX3RleHRDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1fYmdDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubV9iZ0NvbG9yO1xyXG5cdFx0aWYgKHRoaXMubV9pdGFsaWMpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cdFx0aWYgKHRoaXMubV9ib2xkKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGV9PlxyXG5cdFx0XHQ8aSBjbGFzcz17XCJmYSBmYS1mdyBcIiArIGV4cGFuZGVyQ2xhc3NOYW1lfSBjbGljaz17dGhpcy5vbkV4cGFuZGVyQ2xpY2tlZH0gLz5cclxuXHRcdFx0e2ljb25Db250ZW50fVxyXG5cdFx0XHQ8c3BhbiByZWY9e3RoaXMuY29udGVudEVsbVJlZn0gZHJhZ1NvdXJjZSBjbGFzcz17Y29udGVudENsYXNzfSBzdHlsZT17Y29udGVudFN0eWxlfVxyXG5cdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30+e3RoaXMubV9jb250ZW50fTwvc3Bhbj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlclN1Yk5vZGVzKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzU3Vibm9kZXN9IHN0eWxlPXt7ZGlzcGxheTp0aGlzLm1faXNFeHBhbmRlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblx0XHRcdHt0aGlzLmNvbnRhaW5lcn1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uRGJsQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXJjbGlja3Mgb24gdGhlIGV4cGFuZGVyIGljb25cclxuXHRwcml2YXRlIG9uRXhwYW5kZXJDbGlja2VkID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlKCkgOiB0aGlzLmV4cGFuZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIGNvbnRyb2wgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3NcclxuXHRwdWJsaWMgbV90cmVlOiBUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZVxyXG5cdHB1YmxpYyBtX3BhcmVudDogVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1fbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRlbnRhdGlvbiBsZXZlbCBvZiB0aGUgYmxvY2tcclxuXHRwdWJsaWMgbV9pbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IFRyZWVOb2RlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgZXhwYW5kZWQgKHRoYXQgaXMgc3ViLW5vZGVzIGFyZSB2aXNpYmxlKS5cclxuXHRwdWJsaWMgbV9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcblx0cHVibGljIG1faXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG5vZGUncyBjb250ZW50LlxyXG5cdHB1YmxpYyBjb250ZW50RWxtUmVmOiBtaW0uUmVmPEhUTUxTcGFuRWxlbWVudD47XHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVyc1xyXG5cdHByaXZhdGUgbV9jb250ZW50OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2ljb246IFRyZWVOb2RlSWNvblBhcmFtcztcclxuXHRwcml2YXRlIG1fdGV4dENvbG9yOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2JnQ29sb3I6IHN0cmluZztcclxuXHRwcml2YXRlIG1faXRhbGljOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9ib2xkOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9jdXN0b21DbGFzczogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9kYXRhOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge0lUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIjtcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZUNvbnRhaW5lciBjbGFzcyByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzIHRoYXQgYXJlIGRpc3BsYXllZCBhbmRcclxuLy8gaGlkZGVuIHRvZ2V0aGVyLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29udGFpbmVyIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMgPSBbXTtcclxuXHRcdHRoaXMubm9kZUZhY3RvcnkgPSBub2RlRmFjdG9yeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGxldCBub2RlOiBUcmVlTm9kZSA9IHRoaXMubm9kZUZhY3RvcnkoKTtcclxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBjdXJyTGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gY3Vyckxlbmd0aDtcclxuXHRcdFx0dGhpcy5ub2Rlcy5wdXNoKCBub2RlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDAsIG5vZGUpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSBpbnNlcnRlZCBvbmVcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlLmNvbnRlbnQgPSBwYXJhbXMuY29udGVudDtcclxuXHRcdG5vZGUuaWNvbiA9IHBhcmFtcy5pY29uO1xyXG5cdFx0bm9kZS50ZXh0Q29sb3IgPSBwYXJhbXMudGV4dENvbG9yO1xyXG5cdFx0bm9kZS5iZ0NvbG9yID0gcGFyYW1zLmJnQ29sb3I7XHJcblx0XHRub2RlLml0YWxpYyA9IHBhcmFtcy5pdGFsaWM7XHJcblx0XHRub2RlLmJvbGQgPSBwYXJhbXMuYm9sZDtcclxuXHRcdG5vZGUuY3VzdG9tQ2xhc3MgPSBwYXJhbXMuY3VzdG9tQ2xhc3M7XHJcblx0XHRub2RlLmRhdGEgPSBwYXJhbXMuZGF0YTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBzdWItbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1Yi1ub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJyZXBsYWNlTm9kZTogaW52YWxpZCBpbmRleCBcIiArIGluZGV4KTtcclxuXHJcblx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbmRleGVzIG9mIHRoZSBub2RlcyBhZnRlciB0aGUgcmVtb3ZlZCBvbmVcclxuXHRcdGZvciggbGV0IGkgPSBpbmRleDsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0dGhpc1tpXS5pbmRleCA9IGk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBzdWItbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGN1cnJMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggMCwgY3Vyckxlbmd0aCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmV4cGFuZEFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5vZGUgb2YgdGhpcy5ub2RlcylcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5jb2xsYXBzZUFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubm9kZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFycmF5IG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwdWJsaWMgbm9kZXM6IFRyZWVOb2RlW107XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZSBvZiBUcmVlTm9kZSBvYmplY3RzXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeTogKCkgPT4gVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgYXhpcyBvZiBkYXRhLCB3aGljaCBjb25zaXN0cyBvZiBpdGVtcywgYW5kIHBlcmZvcm1zXHJcbiAqIGNhbGN1bGF0aW9ucyBkdXJpbmcgc2Nyb2xsaW5nIGJhY2sgYW5kIGZvcnRoIGFsb25nIHRoZSBheGlzLiBUaGUgU2Nyb2xsQXhpcyBjbGFzcyBpdHNlbGYgZG9lc24ndFxyXG4gKiBoYXZlIGFueSB2aXN1YWwgcmVwcmVzZW50YXRpb24gYW5kIG9ubHkgc2VydmVzIGFzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG0gdGhhdFxyXG4gKiBoZWxwcyB2aXJ0dWFsaXplIHNjcm9sbGluZyAtIHRoYXQgaXMgZGlzcGxheSBvbmx5IHNtYWxsIHN1YnNldCBvZiBkYXRhIGl0ZW1zIGFuZCBhZGQvcmVtb3ZlXHJcbiAqIGl0ZW1zIGFzIHNjcm9sbGluZyBoYXBwZW5zLlxyXG4gKiBcclxuICogVkF4aXMgYXNzdW1lcyB0aGUgdXNlIG9mIDMgRE9NIGVsZW1lbnRzOlxyXG4gKlx0LSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFyIHdoZW4gbmVjZXNzYXJ5XHJcbiAqXHQtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgc2V0IG9mIGl0ZW1zLiBJdCBpc1xyXG4gKlx0XHRuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKlx0LSBzdWJzZXQgLSB0aGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIG9ubHkgaXRlbXMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXMgYSBjZXJ0YWluIG51bWJlciBvZlxyXG4gKlx0XHRhZGRpdGlvbmFsIGl0ZW1zIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWQXhpcyBjYWxjdWxhdGVzIGF2ZXJhZ2UgaXRlbSBzaXplIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSBkYXRhIGJ5IHRoZSBudW1iZXIgb2YgaXRlbXMuXHJcbiAqIFRoZSBhdmVyYWdlIHZhbHVlIGlzIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIGl0ZW1zIGFyZSBhZGRlZCB0byBvciBkZWxldGVkIGZyb20gdGhlIHN1YnNldCB0aHVzXHJcbiAqIGFjY29tb2RhdGluZyBpdGVtcyB3aXRoIGRpZmZlcmVuIHNpemVzLiBCYXNlZCBvbiB0aGUgYXZlcmFnZSB2YWx1ZSB0aGUgd2FsbCBlbGVtZW50IGlzIHNpemVkXHJcbiAqIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhIHNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWQXhpcyB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIGl0ZW1zIG9uIGJvdGggc2lkZXMgb2YgdGhlIGZyYW1lIGFuZFxyXG4gKiBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2YgaXRlbXMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLiBEdXJpbmdcclxuICogc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSwgbmV3IGl0ZW1zIGFyZSBhZGRlZDsgaWZcclxuICogaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0sIGl0ZW1zIGFyZSBkZWxldGVkLiBXaGVuIGl0ZW1zIGFyZSBhZGRlZCB0aGV5IGFyZSBhZGRlZCB1cCB0b1xyXG4gKiB0aGUgb3B0aW1hbCBvdmVyc2NhbiBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXhpc1xyXG57XHJcblx0Ly8gTWluaW1hbCBudW1iZXIgb2YgYWRkaXRpb25hbCBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgbWFpbnRhaW5lZC4gV2hlblxyXG5cdC8vIGR1cmluZyBzY3JvbGxpbmcgdGhlIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBmYWxscyB1bmRlciB0aGlzIG51bWJlciwgbmV3IGl0ZW1zIGFyZSBhZGRlZC5cclxuXHRwcml2YXRlIG1pbk92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE9wdGltYWwgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydC4gV2hlbiBhZGRpbmcgbmV3IGl0ZW1zIG9yIHJlbW92aW5nXHJcblx0Ly8gZXhpc3RpbmcgaXRlbXMgd2Ugd2FudCB0byByaWNoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBvdmVyc2Nhbi5cclxuXHRwcml2YXRlIG9wdE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGV4Y2VlZHMgdGhpcyBudW1iZXIsIGl0ZW1zIGFyZSByZW1vdmVkLlxyXG5cdHByaXZhdGUgbWF4T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWluT3ZlcnNjYW46IG51bWJlciwgb3B0T3ZlcnNjYW46IG51bWJlciwgbWF4T3ZlcnNjYW46IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLm1pbk92ZXJzY2FuID0gbWluT3ZlcnNjYW47XHJcblx0XHR0aGlzLm9wdE92ZXJzY2FuID0gb3B0T3ZlcnNjYW47XHJcblx0XHR0aGlzLm1heE92ZXJzY2FuID0gbWF4T3ZlcnNjYW47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGZyYW1lXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW12b3ZlIGl0ZW1zLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIHdoZW46XHJcblx0ICpcdC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YSBzZXQgY2hhbmdlcy5cclxuXHQgKlx0LSBUaGUgc2l6ZSBvZiB0aGUgZnJhbWUgZWxlbWVudCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBmcmFtZSBlbGVtZW50IGlzIHNjcm9sbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0b3RhbENvdW50IE51bWJlciBvZiBpdGVtcyBpbiB0aGUgZW50aXJlIGRhdGEgc2V0XHJcblx0ICogQHBhcmFtIGZpcnN0SXRlbSBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBjdXJyZW50bHkgaW4gdGhlIHN1YnNldFxyXG5cdCAqIEBwYXJhbSBpdGVtQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGZyYW1lU2l6ZSBDdXJyZW50IHNpemUgaW4gcGl6ZWxzIG9mIHRoZSBmcmFtZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIHdhbGxTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHdhbGwgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSBzdWJzZXRTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHN1YnNldCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHNjcm9sbFBvcyBDdXJyZW50IG9yIG5ldyBzY3JvbGwgcG9zaXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIG1lYXN1cmUoIHRvdGFsQ291bnQ6IG51bWJlciwgb2xkRmlyc3Q6IG51bWJlciwgb2xkQ291bnQ6IG51bWJlciwgb2xkQXZnSXRlbVNpemU6IG51bWJlcixcclxuXHRcdGZyYW1lU2l6ZTogbnVtYmVyLCB3YWxsU2l6ZTogbnVtYmVyLCBzdWJzZXRTaXplOiBudW1iZXIsIHNjcm9sbFBvczogbnVtYmVyKTogU2Nyb2xsQXhpc0FjdGlvblxyXG5cdHtcclxuXHRcdC8vIHByZXBhcmUgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZFxyXG5cdFx0bGV0IHJldEFjdGlvbiA9IG5ldyBTY3JvbGxBeGlzQWN0aW9uKCk7XHJcblx0XHRpZiAodG90YWxDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHRcdGVsc2UgaWYgKG9sZENvdW50ID09PSAwKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaXRlbUNvdW50IGNhbm5vdCBiZSB6ZXJvXCIpO1xyXG5cclxuXHRcdGxldCBvbGRMYXN0ID0gb2xkRmlyc3QgKyBvbGRDb3VudCAtIDE7XHJcblx0XHRsZXQgdG90YWxMYXN0ID0gdG90YWxDb3VudCAtIDE7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBhdmVyYWdlIGl0ZW0gc2l6ZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBjdXJyZW50IHN1YnNldFxyXG5cdFx0Ly8gYW5kIHRoZSBjdXJyZW50IHNpemUgb2YgdGhlIGRhdGEgZWxlbWVudC5cclxuXHRcdGxldCBuZXdBdmdJdGVtU2l6ZSA9IHN1YnNldFNpemUgLyBvbGRDb3VudDtcclxuXHRcdGlmIChvbGRBdmdJdGVtU2l6ZSlcclxuXHRcdFx0bmV3QXZnSXRlbVNpemUgPSAobmV3QXZnSXRlbVNpemUgKyBvbGRBdmdJdGVtU2l6ZSkgLyAyO1xyXG5cclxuXHRcdC8vIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gYW5kIHRoZSBhdmVyYWdlIHNpemUgZXN0aW1hdGUgd2hhdCBpdGVtcyB3b3VsZCBmaXQgaW5zaWRlXHJcblx0XHQvLyB0aGUgZnJhbWUgZWxlbWVudC5cclxuXHRcdGxldCBmaXRGaXJzdCA9IE1hdGgubWluKCBNYXRoLmZsb29yKCBzY3JvbGxQb3MgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgZml0TGFzdCA9IE1hdGgubWluKCBNYXRoLmNlaWwoIChzY3JvbGxQb3MgKyBmcmFtZVNpemUpIC8gbmV3QXZnSXRlbVNpemUpLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdC8vIGdldCBuZXcgZmlyc3QgYW5kIGxhc3QgIGluZGljZXMgd2l0aCBtaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuXHJcblx0XHRsZXQgbWluT3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWluT3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG9wdE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm9wdE92ZXJzY2FuLCAwKVxyXG5cdFx0bGV0IG1heE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm1heE92ZXJzY2FuLCAwKTtcclxuXHRcdGxldCBtaW5PdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMubWluT3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm9wdE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IG1heE92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5tYXhPdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHJcblx0XHRsZXQgbmV3Rmlyc3QgPSBvbGRGaXJzdCA+IG1pbk92ZXJzY2FuRmlyc3QgfHwgb2xkRmlyc3QgPCBtYXhPdmVyc2NhbkZpcnN0ID8gb3B0T3ZlcnNjYW5GaXJzdCA6IG9sZEZpcnN0O1xyXG5cdFx0bGV0IG5ld0xhc3QgPSBvbGRMYXN0IDwgbWluT3ZlcnNjYW5MYXN0IHx8IG9sZExhc3QgPiBtYXhPdmVyc2Nhbkxhc3QgPyBvcHRPdmVyc2Nhbkxhc3QgOiBvbGRMYXN0O1xyXG5cclxuXHRcdGlmIChuZXdGaXJzdCA+IG5ld0xhc3QpXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBXcm9uZyBTY3JvbGxBeGlzIGNhbGN1bGF0aW9uOiBuZXdGaXJzdCAnJHtuZXdGaXJzdH0nIGlzIGdyZWF0ZXIgdGhhbiBuZXdMYXN0ICcke25ld0xhc3R9J2ApXHJcblxyXG5cdFx0Ly8gc2V0IHdoYXQgd2UgYWxyZWFkeSBrbm93IGludG8gdGhlIHJldHVybiBvYmplY3RcclxuXHRcdHJldEFjdGlvbi5uZXdGaXJzdCA9IG5ld0ZpcnN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0xhc3QgPSBuZXdMYXN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0F2Z0l0ZW1TaXplID0gbmV3QXZnSXRlbVNpemU7XHJcblx0XHRyZXRBY3Rpb24ubmV3V2FsbFNpemUgPSBNYXRoLmNlaWwoIHRvdGFsQ291bnQgKiBuZXdBdmdJdGVtU2l6ZSk7XHJcblx0XHRyZXRBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ID0gTWF0aC5jZWlsKCBuZXdGaXJzdCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHJcblx0XHQvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB3ZSB3YW50LCBkZXRlcm1pbmUgd2hhdCBpdGVtcyBzaG91bGQgYmVcclxuXHRcdC8vIGFkZGVkL3JlbW92ZWQgaW4gdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZFxyXG5cdFx0aWYgKG5ld0ZpcnN0ID09IG9sZEZpcnN0ICYmIG5ld0xhc3QgPT0gb2xkTGFzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBkYXRhc2V0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgb25lLCBkb24ndCBhZGQvcmVtb3ZlIGFueSBpdGVtc1xyXG5cdFx0XHRyZXRBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRMYXN0IHx8IG5ld0xhc3QgPCBvbGRGaXJzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBkYXRhc2V0cyBkb24ndCBpbnRlcnNlY3QsIHJlbW92ZSBhbGwgZXhpc3RpbmcgYW5kIGFkZCBhbGxcclxuXHRcdFx0Ly8gbmV3IGl0ZW1zLlxyXG5cdFx0XHRyZXRBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5ld0ZpcnN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID0gb2xkRmlyc3QgLSBuZXdGaXJzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRGaXJzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPSBuZXdGaXJzdCAtIG9sZEZpcnN0O1xyXG5cclxuXHRcdFx0aWYgKG5ld0xhc3QgPCBvbGRMYXN0KVxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPSBvbGRMYXN0IC0gbmV3TGFzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3TGFzdCA+IG9sZExhc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdEVuZCA9IG5ld0xhc3QgLSBvbGRMYXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRBY3Rpb247XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2Nyb2xsQXhpc0FjdGlvbiBjbGFzcyByZXByZXNlbnRzIHRoZSBhY3Rpb24ocykgdGhhdCBzaG91bGQgYmUgZG9uZSBhZnRlciB0aGUgU2Nyb2xsQXhpc1xyXG4gKiBwZXJmb3JtZWQgY2FsY3VsYXRpb25zIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmcmFtZSwgd2FsbCBhbmQgZGF0YS4gVGhlIGFjdGlvbnNcclxuICogYXJlIGluc3RydWN0aW9ucyB0byBhZGQgb3IgcmVtb3ZlIGl0ZW1zIGFuZCB0byBzZXQgd2FsbCBzaXplIGFuZCBkYXRhIG9mZnNldC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzQWN0aW9uXHJcbntcclxuXHQvLyBOZXcgYXZlYXJhZ2UgaXRlbSBzaXplXHJcblx0bmV3QXZnSXRlbVNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBzaXplIHRoYXQgc2hvdWxkIGJlIHNldCB0byB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3V2FsbFNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBvZmZzZXQgb2YgdGhlIHN1YnNldCBlbGVtZW50IGZyb20gdGhlIHdhbGwgZWxlbWVudFxyXG5cdG5ld1N1YnNldE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0ZpcnN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBpdGVtIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBzdWJzZXRcclxuXHRuZXdMYXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCBuZWl0aGVyIGFkZCBub3IgcmVtb3ZlIGFueSBpdGVtcy5cclxuXHRub0FkZFJlbW92ZU5lZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zLiBJZiB0aGlzIGZsYWcgaXMgc2V0XHJcblx0Ly8gdG8gdHJ1ZSwgdGhlbiB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zIGFuZCB0aGVuIGFkZCBhbGwgaXRlbXMgZnJvbVxyXG5cdC8vIG5ld0ZpcnN0IHRvIG5ld0xhc3RcclxuXHRuZWVlZFRvUmVtb3ZlQWxsSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBvbGRGaXJzdFxyXG5cdC8vIHRvIG5ld0ZpcnN0LTEuXHJcblx0Y291bnRUb1JlbW92ZUF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3TGFzdCsxXHJcblx0Ly8gdG8gb2xkTGFzdC5cclxuXHRjb3VudFRvUmVtb3ZlQXRFbmQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGJlZ2lubmluZy4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3Rmlyc3RcclxuXHQvLyB0byBvbGRGaXJzdC0xLlxyXG5cdGNvdW50VG9BZGRBdFN0YXJ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gYWRkIGF0IHRoZSBlbmQuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZExhc3QrMVxyXG5cdC8vIHRvIG5ld0xhc3QuXHJcblx0Y291bnRUb0FkZEF0RW5kOiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1Njcm9sbEF4aXMsIFNjcm9sbEF4aXNBY3Rpb259IGZyb20gXCIuL1Njcm9sbEF4aXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUQWJsZUNlbGxEYXRhIGludGVyZmFjZSByZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgc2luZ2xlIGNlbGwgdGhhdCBpcyBwcm92aWRlZFxyXG4gKiBieSBhIGNhbGxlciB3aGVuIHJlcXVlc2VkIGJ5IFZUYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlQ2VsbERhdGFcclxue1xyXG5cdC8qKiBDb250ZW50IG9mIHRoZSBjZWxsICovXHJcblx0Y29udGVudDogYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdHJvd1NwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0Y29sU3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIFN0eWxlIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBvciBgPHRoPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdHN0eWxlPzogbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdC8qKiBDbGFzcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgb3IgYDx0aD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRjbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUYWJsZVByb3BzIGNsYXNzIGRlZmluZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgVlRhYmxlXHJcbiAqIGNvbnN0cnVjdG9yLiBUaGUgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IGRlZmluZSB0aGUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIFZUYWJsZVxyXG4gKiBpbiBKU1ggd2hlbiBpdCBpcyB1c2VkIGFzIGEgbWFuYWdlZCBjb3BvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlUHJvcHNcclxue1xyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbENvbENvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiByb3dzICovXHJcblx0cm93T3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBNaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiBjb2x1bW5zICovXHJcblx0Y29sT3ZlcnNjYW4/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBjZWxsIGRhdGEuICovXHJcblx0Z2V0Q2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGhlYWRlciByb3dzLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0Y29sSGVhZGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3IgY29sdW1uIGhlYWRlciBjZWxscy4gKi9cclxuXHRnZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgZm9vdGVyIHJvd3MuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRjb2xGb290ZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciBjb2x1bW4gZm9vdGVyIGNlbGxzLiAqL1xyXG5cdGdldENvbEZvb3RlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjZWxscyBpbiB0aGUgcm93IGhlYWRlci4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdHJvd0hlYWRlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIHJvdyBoZWFkZXIgY2VsbHMuICovXHJcblx0Z2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNlbGxzIGluIHRoZSByb3cgZm9vdGVyLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0cm93Rm9vdGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3Igcm93IGZvb3RlciBjZWxscy4gKi9cclxuXHRnZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiVmlydHVhbGl6ZWRcIiB0YWJsZSB0aGF0IHJlbmRlcnMgb25seSBhIHN1YnNldCBvZiBhIGRhdGFzZXQgYW5kIGNoYW5nZXMgdGhpcyBzdWJzZXRcclxuICogYXMgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIGFuZCBmb3J0aC5cclxuICogXHJcbiAqIFZUYWJsZSB1c2VzIHRoZSBmb2xsb3dpbmcgMyBET00gZWxlbWVudHM6XHJcbiAqICAtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggZGlzcGxheXMgdGhlIHNjcm9sbGJhcnMgd2hlbiBuZWNlc3NhcnlcclxuICogIC0gd2FsbCAtIHRoZSBcImlubmVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGhhcyB0aGUgc2l6ZSBvZiB0aGUgZW50aXJlIHBvc3NpYmxlIHRhYmxlLiBJdCBpc1xyXG4gKiAgICBuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKiAgLSB0YWJsZSAtIHRoZSBgPHRhYmxlPmAgZWxlbWVudCB0aGF0IGNvbnRhaW5zIG9ubHkgcm93cyBhbmQgY29sdW1ucyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1c1xyXG4gKiAgICBhIGNlcnRhaW4gbnVtYmVyIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWVGFibGUgY2FsY3VsYXRlcyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aCBieSBkaXZpZGluZyB0aGUgc2l6ZSBvZiB0aGUgdGFibGVcclxuICogYnkgdGhlIG51bWJlciBvZiByb3dzL2NvbHVtbnMuIFRoZXNlIGF2ZXJhZ2UgdmFsdWVzIGFyZSByZWNhbGN1bGF0ZWQgZXZlcnkgdGltZSByb3dzIGFuZFxyXG4gKiBjb2x1bW5zIGFyZSBhZGRlZCBvciBkZWxldGVkIGZyb20gdGhlIHRhYmxlLiBCYXNlZCBvbiB0aGVzZSBhdmVyYWdlIHZhbHVlcyB0aGUgd2FsbCBlbGVtZW50XHJcbiAqIGlzIHNpemVkIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxpbmdcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZUYWJsZSB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgb24gYWxsIHNpZGVzIG9mXHJcbiAqIHRoZSBmcmFtZSBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBhY3R1YWwgbnVtYmVyIG9mIHJvd3MvY29sdW1ucyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmRcclxuICogbWF4aW11bSB2YWx1ZXMuIER1cmluZyBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLFxyXG4gKiBuZXcgY2VsbHMgYXJlIGFkZGVkIGFuZCBpZiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSBjZWxscyBhcmUgZGVsZXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWVGFibGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzPFZUYWJsZVByb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBWVGFibGVQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gMDtcclxuXHRcdHRoaXMuYXZnQ29sV2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIG5lZ2F0aXZlIHZhbHVlcyBpbmRpY2F0ZSB0aGF0IHdlIGhhdmVuJ3QgbWVhc3VyZWQgYW55IHNpemVzIHlldC5cclxuXHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gLTE7XHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSAtMTtcclxuXHJcblx0XHQvLyBzZXQgaW5pdGlhbCBzaXplIG9mIHRoZSB3YWxsIGVsZW1lbnQgYmFzZWQgb24gc29tZSBoYXJkLWNvZGVkIHZhbHVlcy4gSXQgd2lsbCBiZVxyXG5cdFx0Ly8gY2hhbmdlZCBhcyBzb29uIGFzIHdlIHJlbmRlciBhbmQgc3RhcnQgbWVhc3VyaW5nIG91ciBlbGVtZW50c1xyXG5cdFx0dGhpcy53YWxsSGVpZ2h0ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50ICogMjU7XHJcblx0XHR0aGlzLndhbGxXaWR0aCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCAqIDgwO1xyXG5cclxuXHRcdHRoaXMubWluUm93T3ZlcnNjYW4gPSB0aGlzLnByb3BzLnJvd092ZXJzY2FuID8gdGhpcy5wcm9wcy5yb3dPdmVyc2NhblswXSA6IDM7XHJcblx0XHR0aGlzLm9wdFJvd092ZXJzY2FuID0gdGhpcy5wcm9wcy5yb3dPdmVyc2NhbiA/IHRoaXMucHJvcHMucm93T3ZlcnNjYW5bMV0gOiA2O1xyXG5cdFx0dGhpcy5tYXhSb3dPdmVyc2NhbiA9IHRoaXMucHJvcHMucm93T3ZlcnNjYW4gPyB0aGlzLnByb3BzLnJvd092ZXJzY2FuWzJdIDogMTI7XHJcblxyXG5cdFx0dGhpcy5taW5Db2xPdmVyc2NhbiA9IHRoaXMucHJvcHMuY29sT3ZlcnNjYW4gPyB0aGlzLnByb3BzLmNvbE92ZXJzY2FuWzBdIDogMztcclxuXHRcdHRoaXMub3B0Q29sT3ZlcnNjYW4gPSB0aGlzLnByb3BzLmNvbE92ZXJzY2FuID8gdGhpcy5wcm9wcy5jb2xPdmVyc2NhblsxXSA6IDY7XHJcblx0XHR0aGlzLm1heENvbE92ZXJzY2FuID0gdGhpcy5wcm9wcy5jb2xPdmVyc2NhbiA/IHRoaXMucHJvcHMuY29sT3ZlcnNjYW5bMl0gOiAxMjtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHQvLyBmaWxsIGluIGluaXRpYWwgZGF0YXNldFxyXG5cdFx0bGV0IHJvd0NvdW50ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDwgMTAgPyB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgOiAxMDtcclxuXHRcdGxldCBjb2xDb3VudCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbENvbENvdW50IDogMTA7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0Zm9yKCBsZXQgaiA9IDA7IGogPCBjb2xDb3VudDsgaisrKVxyXG5cdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGRhdGFzZXQgc2l6ZVxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IDA7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSByb3dDb3VudCAtIDE7XHJcblx0XHR0aGlzLmZpcnN0Q29sID0gMDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGNvbENvdW50IC0gMTtcclxuXHJcblx0XHR0aGlzLnZBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluUm93T3ZlcnNjYW4sIHRoaXMub3B0Um93T3ZlcnNjYW4sIHRoaXMubWF4Um93T3ZlcnNjYW4pXHJcblx0XHR0aGlzLmhBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluQ29sT3ZlcnNjYW4sIHRoaXMub3B0Q29sT3ZlcnNjYW4sIHRoaXMubWF4Q29sT3ZlcnNjYW4pXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcHJlcGFyZUxvY2FsU3R5bGVzKClcclxuXHR7XHJcblx0XHR0aGlzLmZyYW1lSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJmcmFtZVwiKTtcclxuXHRcdHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcImZyYW1lXCIsIFwiI2ZyYW1lKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDpcIjEwMCVcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OlwiYXV0b1wiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMud2FsbElEID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwid2FsbFwiKTtcclxuXHRcdHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcIndhbGxcIiwgXCIjd2FsbCgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzpcIm5vbmVcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLnRhYmxlSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0YWJsZVwiKTtcclxuXHRcdHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRhYmxlXCIsIFwiI3RhYmxlKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXHJcblx0XHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vIGR1cmluZyBlYWNoIHJlbmRlcmluZywgd2Ugc2NoZWR1bGUgdGhlIG1lYXN1cmluZyBmdW5jdGlvbmFsaXR5LCB3aGljaCB3aWxsIGRldGVybWluZ1xyXG5cdFx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW1vdmUgY2VsbHMuIFRoZSBtZWFzdXJpbmcgZnVuY3Rpb24gd2lsbCBydW4gaW4gdGhlIG5leHQgdGlja1xyXG5cdFx0Ly8gYWZ0ZXIgdGhlIHJlbmRlciBhbmQgd2lsbCBzY2hlZHVsZSB1cGRhdGUgaW4gdGhlIHNhbWUgdGljayBpZiBuZWNlc3NhcnkuXHJcblx0XHR0aGlzLmNhbGxNZUJlZm9yZVVwZGF0ZSggdGhpcy5tZWFzdXJlQW5kVXBkYXRlKTtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBpZD17dGhpcy5mcmFtZUlEfSByZWY9e3RoaXMuZnJhbWVSZWZ9IHNjcm9sbD17dGhpcy5vblNjcm9sbH0+XHJcblx0XHRcdDxkaXYgaWQ9e3RoaXMud2FsbElEfSByZWY9e3RoaXMud2FsbFJlZn0+XHJcblx0XHRcdFx0PHRhYmxlIGlkPXt0aGlzLnRhYmxlSUR9IHJlZj17dGhpcy50YWJsZVJlZn0+XHJcblx0XHRcdFx0XHQ8dGJvZHk+e3RoaXMucmVuZGVyUm93c308L3Rib2R5PlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJSb3dzKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnJvd3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGRhdGEgZm9yIHRoZSBnaXZlbiBjZWxsLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXNcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0Q2VsbERhdGEocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayA/IHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCByb3csIGNvbCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGRhdGEgZm9yIHRoZSBnaXZlbiBjZWxsLCB3aGljaCBpcyBwYXJ0IG9mIHRoZSBjb2x1bW4gaGVhZGVyLiBUaGlzIG1ldGhvZCBjYW4gYmVcclxuXHQgKiBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0Q29sSGVhZGVyQ2VsbERhdGEocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmdldENvbEhlYWRlckNlbGxDYWxsYmFjayA/IHRoaXMucHJvcHMuZ2V0Q29sSGVhZGVyQ2VsbENhbGxiYWNrKCByb3csIGNvbCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGRhdGEgZm9yIHRoZSBnaXZlbiBjZWxsLCB3aGljaCBpcyBwYXJ0IG9mIHRoZSBjb2x1bW4gZm9vdGVyLiBUaGlzIG1ldGhvZCBjYW4gYmVcclxuXHQgKiBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0Q29sRm9vdGVyQ2VsbERhdGEocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmdldENvbEZvb3RlckNlbGxDYWxsYmFjayA/IHRoaXMucHJvcHMuZ2V0Q29sRm9vdGVyQ2VsbENhbGxiYWNrKCByb3csIGNvbCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGRhdGEgZm9yIHRoZSBnaXZlbiBjZWxsLCB3aGljaCBpcyBwYXJ0IG9mIHRoZSByb3cgaGVhZGVyLiBUaGlzIG1ldGhvZCBjYW4gYmVcclxuXHQgKiBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0Um93SGVhZGVyQ2VsbERhdGEocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmdldFJvd0hlYWRlckNlbGxDYWxsYmFjayA/IHRoaXMucHJvcHMuZ2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrKCByb3csIGNvbCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGRhdGEgZm9yIHRoZSBnaXZlbiBjZWxsLCB3aGljaCBpcyBwYXJ0IG9mIHRoZSByb3cgZm9vdGVyLiBUaGlzIG1ldGhvZCBjYW4gYmVcclxuXHQgKiBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgZ2V0Um93Rm9vdGVyQ2VsbERhdGEocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmdldFJvd0Zvb3RlckNlbGxDYWxsYmFjayA/IHRoaXMucHJvcHMuZ2V0Um93Rm9vdGVyQ2VsbENhbGxiYWNrKCByb3csIGNvbCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lYXN1cmVzIHRoZSBzaXplIG9jY3VwaWVkIGJ5IHRoZSBjdXJyZW50IGRhdGEgc2V0IHJlbGF0aXZlIHRvIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXJcclxuXHQgKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbW92ZSBjZWxscy4gSWYgd2UgZG8sIHdlIHNjaGVkdWxlIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1lYXN1cmVBbmRVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvd0NvdW50ID09PSAwIHx8IHRoaXMuY29sQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgZnJhbWVSZWN0ID0gdGhpcy5mcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCB3YWxsUmVjdCA9IHRoaXMud2FsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCB0YWJsZVJlY3QgPSB0aGlzLnRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbFRvcCAhPSB0aGlzLmZyYW1lLnNjcm9sbFRvcClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBNZWFzdXJpbmcgaGVpZ2h0OiBzY3JvbGwgdG9wID0gJHt0aGlzLmZyYW1lLnNjcm9sbFRvcH0sIHJvd3M6ICR7dGhpcy5yb3dDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIGhlaWdodCA9ICR7d2FsbFJlY3QuaGVpZ2h0fSwgdGFibGUgaGVpZ2h0ID0gJHt0YWJsZVJlY3QuaGVpZ2h0fWApO1xyXG5cclxuXHRcdFx0bGV0IHZBeGlzQWN0aW9uID0gdGhpcy52QXhpcy5tZWFzdXJlKCB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQsIHRoaXMuZmlyc3RSb3csIHRoaXMucm93Q291bnQsXHJcblx0XHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQsIGZyYW1lUmVjdC5oZWlnaHQsIHdhbGxSZWN0LmhlaWdodCwgdGFibGVSZWN0LmhlaWdodCwgdGhpcy5mcmFtZS5zY3JvbGxUb3ApO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBFc3RpbWF0ZWQ6IHdhbGwgaGVpZ2h0ID0gJHt2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZX0sIHJvdyBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIHRoZSBsYXRlc3QgdmVydGljYWwgc2Nyb2xsaW5nIHBvc2l0aW9uXHJcblx0XHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gdkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gdGhpcy5mcmFtZS5zY3JvbGxUb3A7XHJcblxyXG5cdFx0XHQvLyBhZGQvcmVtb3ZlIHJvd3MgaWYgbmVlZGVkXHJcblx0XHRcdGlmICghdkF4aXNBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQpXHJcblx0XHRcdFx0dGhpcy51cGRhdGVSb3dzKCB2QXhpc0FjdGlvbik7XHJcblxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGluZyBvZiB3YWxsIGhlaWdodCBhbmQgc3Vic2V0IHZlcnRpY2FsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKHZBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LmhlaWdodCB8fCB2QXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgIT0gdGFibGVSZWN0LnRvcCAtIHdhbGxSZWN0LnRvcClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2FsbE1lQWZ0ZXJVcGRhdGUoICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGFibGUuc3R5bGUudG9wID0gdkF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLmhlaWdodCA9IHZBeGlzQWN0aW9uLm5ld1dhbGxTaXplICsgXCJweFwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCAhPSB0aGlzLmZyYW1lLnNjcm9sbExlZnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgTWVhc3VyaW5nIHdpZHRoOiBzY3JvbGwgbGVmdCA9ICR7dGhpcy5mcmFtZS5zY3JvbGxMZWZ0fSwgY29sczogJHt0aGlzLmNvbENvdW50fSwgYCArXHJcblx0XHRcdC8vIFx0XHRcdFx0YHdhbGwgd2lkdGggPSAke3dhbGxSZWN0LndpZHRofSwgdGFibGUgd2lkdGggPSAke3RhYmxlUmVjdC53aWR0aH1gKTtcclxuXHJcblx0XHRcdGxldCBoQXhpc0FjdGlvbiA9IHRoaXMuaEF4aXMubWVhc3VyZSggdGhpcy5wcm9wcy50b3RhbENvbENvdW50LCB0aGlzLmZpcnN0Q29sLCB0aGlzLmNvbENvdW50LFxyXG5cdFx0XHRcdHRoaXMuYXZnQ29sV2lkdGgsIGZyYW1lUmVjdC53aWR0aCwgd2FsbFJlY3Qud2lkdGgsIHRhYmxlUmVjdC53aWR0aCwgdGhpcy5mcmFtZS5zY3JvbGxMZWZ0KTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCBgRXN0aW1hdGVkOiB3YWxsIHdpZHRoID0gJHtoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZX0sIGNvbCB3aWR0aCA9ICR7aEF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemV9YCk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IGF2ZXJhZ2UgY29sdW1uIHdpZHRoIGFuZCB0aGUgbGF0ZXN0IGhvcml6b250YWwgc2Nyb2xsaW5nIHBvc2l0aW9uXHJcblx0XHRcdHRoaXMuYXZnQ29sV2lkdGggPSBoQXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5sYXRlc3RTY3JvbGxMZWZ0ID0gdGhpcy5mcmFtZS5zY3JvbGxMZWZ0O1xyXG5cclxuXHRcdFx0Ly8gYWRkL3JlbW92ZSBjb2x1bW5zIGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAoIWhBeGlzQWN0aW9uLm5vQWRkUmVtb3ZlTmVlZGVkKVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlQ29scyggaEF4aXNBY3Rpb24pO1xyXG5cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRpbmcgb2Ygd2FsbCB3aWR0aCBhbmQgc3Vic2V0IGhvcml6b250YWwgb2Zmc2V0IGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAoaEF4aXNBY3Rpb24ubmV3V2FsbFNpemUgIT0gd2FsbFJlY3Qud2lkdGggfHwgaEF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICE9IHRhYmxlUmVjdC5sZWZ0IC0gd2FsbFJlY3QubGVmdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2FsbE1lQWZ0ZXJVcGRhdGUoICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGFibGUuc3R5bGUubGVmdCA9IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCArIFwicHhcIjtcclxuXHRcdFx0XHRcdHRoaXMud2FsbC5zdHlsZS53aWR0aCA9IGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICsgXCJweFwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyByb3dzIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlIHZlcnRpY2FsXHJcblx0ICogc2Nyb2xsaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlUm93cyggYXhpc0FjdGlvbjogU2Nyb2xsQXhpc0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggYFVwZGF0aW5nIHJvd3MgZnJvbSAke3RoaXMuZmlyc3RSb3d9IC0gJHt0aGlzLmxhc3RSb3d9IHRvICR7YXhpc0FjdGlvbi5uZXdGaXJzdH0gLSAke2F4aXNBY3Rpb24ubmV3TGFzdH1gKTtcclxuXHJcblx0XHRpZiAoYXhpc0FjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm93cyA9IFtdO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCBhbGwgJHt0aGlzLnJvd0NvdW50fSBleGlzdGluZyByb3dzYCk7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdGZvciggbGV0IGkgPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHJcblx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBlbmRcclxuXHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24ubmV3TGFzdCAtIGF4aXNBY3Rpb24ubmV3Rmlyc3QgKyAxfSByb3dzYCk7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIHRoaXMucm93Q291bnQgLSBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCwgYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSByb3dzIGZyb20gYm90dG9tYCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IHJvd3MgZnJvbSB0b3BgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3RSb3cgKyAxOyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0XHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kfSByb3dzIHRvIGJvdHRvbWApO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdyAtIDE7IGkgPj0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaS0tKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggMCwgMCwgdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydH0gcm93cyB0byB0b3BgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RSb3cgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoIHRoaXMucmVuZGVyUm93cyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyBjb2x1bW5zIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlXHJcblx0ICogaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVDb2xzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgY29sdW1ucyBmcm9tICR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH0gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0dnJvdy5yZW1vdmVBbGxDZWxscygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5jb2xDb3VudH0gZXhpc3RpbmcgY29sc2ApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IGNvbHNgKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRFbmQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZH0gY29scyBmcm9tIHJpZ2h0YCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHZyb3cgb2YgdGhpcy5yb3dzKVxyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0U3RhcnQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IGNvbHMgZnJvbSBsZWZ0YCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdzsgaSA8PSB0aGlzLmxhc3RSb3c7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5sYXN0Q29sICsgMTsgaiA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IGNvbHMgdG8gcmlnaHRgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2wgLSAxOyBqID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGotLSlcclxuXHRcdFx0XHRcdFx0dnJvdy5pbnNlcnRDZWxsKCB0aGlzLmdldENlbGxEYXRhKCBpLCBqKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydH0gY29scyB0byBsZWZ0YCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Q29sID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblNjcm9sbCggZTogRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jYWxsTWVCZWZvcmVVcGRhdGUoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE92ZXJzY2FuIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzXHJcblx0cHJpdmF0ZSBtaW5Sb3dPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgb3B0Um93T3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1heFJvd092ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtaW5Db2xPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgb3B0Q29sT3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1heENvbE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIEN1cnJlbnQgZGF0YXNldCByZXByZXNlbnRlZCBieSByb3cgY29tcG9uZW50cy5cclxuXHRwcml2YXRlIHJvd3M6IFZSb3dbXTtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgY3VycmVudCBkYXRhc2V0IG9yIDAgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGZpcnN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IHJvdyBpbiB0aGUgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdFJvdzogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgLTEgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGxhc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gQ291bnRzIG9mIHJvd3MgYW5kIGNvbHVtbnNcclxuXHRwcml2YXRlIGdldCByb3dDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0Um93IC0gdGhpcy5maXJzdFJvdyArIDEgfVxyXG5cdHByaXZhdGUgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RDb2wgLSB0aGlzLmZpcnN0Q29sICsgMSB9XHJcblxyXG5cdHB1YmxpYyBnZXQgUm93cygpOiBzdHJpbmcgeyByZXR1cm4gYCR7dGhpcy5maXJzdFJvd30gLSAke3RoaXMubGFzdFJvd31gOyB9XHJcblx0cHVibGljIGdldCBDb2xzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Q29sfSAtICR7dGhpcy5sYXN0Q29sfWA7IH1cclxuXHJcblx0Ly8gU2l6ZSBvZiB0aGUgZW50aXJlIHRhYmxlIGJhc2VkIG9uIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoLiBUaGlzIGJlY29tZXMgdGhlXHJcblx0Ly8gc2l6ZSBvZiB0aGUgd2FsbC5cclxuXHRwcml2YXRlIHdhbGxIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIHdhbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3QgY2FsY3VsYXRlZCBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aFxyXG5cdHByaXZhdGUgYXZnUm93SGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBhdmdDb2xXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3Qgc2Nyb2xsaW5nIHBvc2l0aW9uc1xyXG5cdHByaXZhdGUgbGF0ZXN0U2Nyb2xsVG9wOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxMZWZ0OiBudW1iZXI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZnJhbWUgdGhhdCBoYXMgdGhlIHNjb2xsYmFyc1xyXG5cdHByaXZhdGUgZnJhbWU6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgZnJhbWVSZWYgPSAocjogSFRNTERpdkVsZW1lbnQpID0+IHRoaXMuZnJhbWUgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHdhbGwgdGhhdCBpcyBiaWcgZW5vdWdoIHRvIGhvbGQgZW50aXJlIGRhdGFzZXRcclxuXHRwcml2YXRlIHdhbGw6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgd2FsbFJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy53YWxsID0gcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSB0YWJsZSB0aGF0IGRpc3BsYXlzIHRoZSBwYXJ0aWFsIGRhdGFzZXRcclxuXHRwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG5cdHByaXZhdGUgdGFibGVSZWYgPSAocjogSFRNTFRhYmxlRWxlbWVudCkgPT4gdGhpcy50YWJsZSA9IHI7XHJcblxyXG5cdC8vIE9iamVjdHMgdGhhdCBkZWFsIHdpdGggdmVydGljYWwgYW5kIGhvcml6b250YWwgc2Nyb2xsaW5nXHJcblx0cHJpdmF0ZSB2QXhpczogU2Nyb2xsQXhpcztcclxuXHRwcml2YXRlIGhBeGlzOiBTY3JvbGxBeGlzO1xyXG5cclxuXHQvLyBJRHMgb2YgdmlydHVhbCB0YWJsZSBwYXJ0c1xyXG5cdHByaXZhdGUgZnJhbWVJRDogc3RyaW5nO1xyXG5cdHByaXZhdGUgd2FsbElEOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB0YWJsZUlEOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVlJvdyBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNlbGxzOiBWQ2VsbFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkQ2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMucHVzaCggbmV3IFZDZWxsKCBkYXRhKSk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5zZXJ0Q2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCAwLCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVBbGxDZWxscygpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRTdGFydCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggMCwgY291bnQpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRFbmQoIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIHRoaXMuY2VsbHMubGVuZ3RoIC0gY291bnQsIGNvdW50KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0cj57dGhpcy5jZWxsc308L3RyPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVkNlbGwgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRkYXRhOiBWVGFibGVDZWxsRGF0YTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGRhdGE6IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYgKGRhdGEgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgZGF0YS5jb250ZW50KVxyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB7IGNvbnRlbnQ6IGRhdGEgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gPHRkIGNsYXNzPXt0aGlzLmRhdGEuY2xhc3N9IHN0eWxlPXt0aGlzLmRhdGEuc3R5bGV9XHJcblx0XHRcdFx0XHRcdHJvd3NwYW49e3RoaXMuZGF0YS5yb3dTcGFuID8gdGhpcy5kYXRhLnJvd1NwYW4gOiB1bmRlZmluZWR9XHJcblx0XHRcdFx0XHRcdGNvbHNwYW49e3RoaXMuZGF0YS5jb2xTcGFuID8gdGhpcy5kYXRhLmNvbFNwYW4gOiB1bmRlZmluZWR9PlxyXG5cdFx0XHRcdHt0aGlzLmRhdGEuY29udGVudH1cclxuXHRcdFx0PC90ZD5cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fOyJdLCJzb3VyY2VSb290IjoiIn0=