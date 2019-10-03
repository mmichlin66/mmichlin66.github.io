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
        if (this.buttonAreaProxy)
            this.buttonAreaProxy.update();
    }
    // Removes the button at the given index.
    removeButton(index) {
        this.buttonInfos.splice(index, 1);
        if (this.buttonAreaProxy)
            this.buttonAreaProxy.update();
    }
    // Provides parameters for the <dialog> element.
    getDlgSlice() {
        this.captionAreaProxy = new mim.FuncProxy(() => {
            let captionAreaSlice = mim.Slices.MergeSlices(Dialog.DefaultCaptionAreaSlice, this.getCaptionAreaSlice());
            return mim.jsx("div", Object.assign({ id: "dlgCaption", mousedown: this.onStartMove, style: captionAreaSlice.style, class: captionAreaSlice.className }, captionAreaSlice.props), captionAreaSlice.content);
        });
        this.mainAreaProxy = new mim.FuncProxy(() => {
            let mainAreaSlice = mim.Slices.MergeSlices(Dialog.DefaultMainAreaSlice, this.getMainAreaSlice());
            return mim.jsx("div", Object.assign({ id: "dlgMainContent", style: mainAreaSlice.style, class: mainAreaSlice.className }, mainAreaSlice.props), mainAreaSlice.content);
        });
        this.buttonAreaProxy = new mim.FuncProxy(() => {
            let buttonAreaSlice = mim.Slices.MergeSlices(Dialog.DefaultButtonAreaSlice, this.getButtonAreaSlice());
            return mim.jsx("div", Object.assign({ id: "dlgButtons", style: buttonAreaSlice.style, class: buttonAreaSlice.className }, buttonAreaSlice.props),
                buttonAreaSlice.content,
                this.buttonInfos.map((info) => {
                    let btnSlice = mim.Slices.MergeSlices(Dialog.DefaultButtonSlice, info.slice);
                    return mim.jsx("button", Object.assign({ key: info.key, click: info.callback && (() => info.callback(info.key)), style: btnSlice.style, class: btnSlice.className }, btnSlice.props), btnSlice.content);
                }));
        });
        let content = mim.jsx(mim.Fragment, null,
            this.captionAreaProxy,
            this.mainAreaProxy,
            this.buttonAreaProxy);
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
        return mim.jsx("dialog", Object.assign({ ref: ref => this.dlg = ref, style: this.currDlgSlice.style, class: this.currDlgSlice.className }, this.currDlgSlice.props), this.currDlgSlice.content);
    }
    // Returns parameters for the <dialog> element provided either externally or by derived classes.
    getDlgSlice() {
        return this.dlgSlice;
    }
    // Creates and renders the popup.
    create(x, y) {
        // define positioning styles. If x and/or y are undefined, we center the dialog horizontally
        // and/or vertically
        let style = { position: "fixed" };
        if (x === undefined) {
            style.left = "0px";
            style.right = "0px";
        }
        else {
            style.left = x + "px";
            style.marginLeft = "0";
            style.marginRight = "0";
        }
        if (y === undefined) {
            style.top = "0px";
            style.bottom = "0px";
        }
        else {
            style.top = y + "px";
            style.marginTop = "0";
            style.marginBottom = "0";
        }
        this.currDlgSlice = mim.Slices.MergeSlices(Popup.DefaultDlgSlice, this.getDlgSlice(), { style });
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
// The Link class is a JSX component that allows creating links handled by a Router object. It is
// implemented as a JSX component because its intended use is very similar to the <a> DOM
// element.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class Link extends mim.Component {
    constructor(props) {
        super(props);
        this.onClick = (e) => {
            e.preventDefault();
            let service = this.vn.getService("Router");
            if (!service)
                return;
            if (this.props.routeID)
                service.navigateByID(this.props.routeID, this.props.fields, this.props.makeHistoryEntry);
            else
                service.navigateByURL(this.props.routeURL, this.props.makeHistoryEntry);
        };
        this.routerService = new mim.Ref();
    }
    render() {
        // extract our custom parameters and leave only those that are <a> attributes
        let _a = this.props, { routeURL, routeID, fields, makeHistoryEntry } = _a, rest = __rest(_a, ["routeURL", "routeID", "fields", "makeHistoryEntry"]);
        return mim.jsx("a", Object.assign({ href: "#", click: this.onClick }, rest), this.props.children);
    }
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
        // these will be indices that we will actually need after comparing the new range
        // with the old one
        let newFirst;
        let newLast;
        if (minOverscanFirst < oldFirst)
            newFirst = optOverscanFirst;
        else if (minOverscanFirst > oldFirst && minOverscanFirst < oldLast)
            newFirst = Math.max(maxOverscanFirst, oldFirst);
        else if (maxOverscanFirst > oldLast)
            newFirst = optOverscanFirst;
        else if (oldLast - maxOverscanFirst > optOverscanFirst - oldLast)
            newFirst = maxOverscanFirst;
        else
            newFirst = optOverscanFirst;
        if (minOverscanLast > oldLast)
            newLast = optOverscanLast;
        else if (minOverscanLast < oldLast && minOverscanLast > oldFirst)
            newLast = Math.min(maxOverscanLast, oldLast);
        else if (maxOverscanLast < oldFirst)
            newLast = optOverscanLast;
        else if (maxOverscanLast - oldFirst > oldFirst - optOverscanLast)
            newLast = maxOverscanLast;
        else
            newLast = optOverscanLast;
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
            if (newFirst < oldFirst) {
                // need to add some items at the beginning
                retAction.countToAddAtStart = oldFirst - newFirst;
            }
            else if (newFirst > oldFirst) {
                // need to remove some items at the beginning
                retAction.countToRemoveAtStart = newFirst - oldFirst;
            }
            if (newLast < oldLast) {
                // need to remove some items at the end
                retAction.countToRemoveAtEnd = oldLast - newLast;
            }
            else if (newLast > oldLast) {
                // need to add some items at the end
                retAction.countToAddAtEnd = newLast - oldLast;
            }
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
 * new cells are added and if it becomes more then the maximum cells are deleted so that the
 * actual overscan number is equal to the average value.
 */
class VTable extends mim.Component {
    constructor(props) {
        super(props);
        // Overscan variables with default values
        this.minRowOverscan = 3;
        this.optRowOverscan = 5;
        this.maxRowOverscan = 10;
        this.minColOverscan = 3;
        this.optColOverscan = 5;
        this.maxColOverscan = 10;
        this.frameRef = (r) => this.frame = r;
        this.wallRef = (r) => this.wall = r;
        this.tableRef = (r) => this.table = r;
        /**
         * Measures the size occupied by the current data set relative to the size of the container
         * and determines whether we need to add/remove cells. If we do, we schedule re-rendering.
         */
        this.measureAndUpdate = () => {
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
                    this.callMe(() => {
                        this.table.style.top = vAxisAction.newSubsetOffset + "px";
                        this.wall.style.height = vAxisAction.newWallSize + "px";
                    }, false);
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
                    this.callMe(() => {
                        this.table.style.left = hAxisAction.newSubsetOffset + "px";
                        this.wall.style.width = hAxisAction.newWallSize + "px";
                    }, false);
                }
            }
        };
        this.onScroll = (e) => {
            this.vn.scheduleCall(this.measureAndUpdate, true);
            // setTimeout( this.measureAndUpdate, 0);
        };
        this.avgRowHeight = 0;
        this.avgColWidth = 0;
        // negative values indicate that we haven't measured any sizes yet.
        this.latestScrollTop = -1;
        this.latestScrollLeft = -1;
        // set initial size of the wall element based on some hard-coded values. It will be
        // changed as soon as we render and start measuring our elements
        this.wallHeight = this.props.totalRowCount * 25;
        this.wallWidth = this.props.totalColCount * 80;
    }
    // Counts of rows and columns
    get rowCount() { return this.lastRow - this.firstRow + 1; }
    get colCount() { return this.lastCol - this.firstCol + 1; }
    get Rows() { return `${this.firstRow} - ${this.lastRow}`; }
    get Cols() { return `${this.firstCol} - ${this.lastCol}`; }
    willMount() {
        this.rows = [];
        // fill in initial dataset
        let rowCount = this.props.totalRowCount < 10 ? this.props.totalRowCount : 10;
        let colCount = this.props.totalColCount < 10 ? this.props.totalColCount : 10;
        for (let i = 0; i < rowCount; i++) {
            let vrow = new VRow();
            for (let j = 0; j < colCount; j++)
                vrow.addCell(this.props.getCellCallback(i, j));
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
    render() {
        // during each rendering, we schedule the measuring functionality, which will determing whether we
        // need to add/remove cells. The measuring function will run in the next tick after the render.
        this.callMe(this.measureAndUpdate, true);
        let frameStyle = { width: "100%", height: "100%", overflow: "auto" };
        let wallStyle = {
            width: `${this.wallWidth}px`,
            height: `${this.wallHeight}px`,
            overflow: "none",
            position: "relative"
        };
        let tableStyle = {
            position: "absolute",
            borderCollapse: "collapse",
            border: "1px solid black"
        };
        return mim.jsx("div", { ref: this.frameRef, style: frameStyle, scroll: this.onScroll },
            mim.jsx("div", { ref: this.wallRef, style: wallStyle },
                mim.jsx("table", { ref: this.tableRef, style: tableStyle }, this.rows)));
    }
    /**
     * Adds/removes rows as indicated by the given ScrollAxisAction dealing with the vertical
     * scrolling.
     */
    updateRows(axisAction) {
        // console.log( `Updating rows from ${this.firstRow} - ${this.lastRow} to ${axisAction.newFirst} - ${axisAction.newLast}`);
        if (axisAction.neeedToRemoveAllItems) {
            this.rows = [];
            console.log(`Removed all ${this.rowCount} existing rows`);
            for (let i = axisAction.newFirst; i <= axisAction.newLast; i++) {
                let vrow = new VRow();
                for (let j = this.firstCol; j <= this.lastCol; j++)
                    vrow.addCell(this.props.getCellCallback(i, j));
                // add the new row at the end
                this.rows.push(vrow);
            }
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} rows`);
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                this.rows.splice(this.rowCount - axisAction.countToRemoveAtEnd, axisAction.countToRemoveAtEnd);
                console.log(`Removed ${axisAction.countToRemoveAtEnd} rows from bottom`);
            }
            if (axisAction.countToRemoveAtStart > 0) {
                this.rows.splice(0, axisAction.countToRemoveAtStart);
                console.log(`Removed ${axisAction.countToRemoveAtStart} rows from top`);
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.lastRow + 1; i <= axisAction.newLast; i++) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.props.getCellCallback(i, j));
                    // add the new row at the start
                    this.rows.push(vrow);
                }
                console.log(`Add ${axisAction.countToAddAtEnd} rows to bottom`);
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow - 1; i >= axisAction.newFirst; i--) {
                    let vrow = new VRow();
                    for (let j = this.firstCol; j <= this.lastCol; j++)
                        vrow.addCell(this.props.getCellCallback(i, j));
                    // add the new row at the start
                    this.rows.splice(0, 0, vrow);
                }
                console.log(`Add ${axisAction.countToAddAtStart} rows to top`);
            }
        }
        this.firstRow = axisAction.newFirst;
        this.lastRow = axisAction.newLast;
        this.updateMe();
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
                    vrow.addCell(this.props.getCellCallback(i, j));
                vrow.requestUpdate();
            }
            console.log(`Removed all ${this.colCount} existing cols`);
            console.log(`Add ${axisAction.newLast - axisAction.newFirst + 1} cols`);
        }
        else {
            if (axisAction.countToRemoveAtEnd > 0) {
                for (let vrow of this.rows) {
                    vrow.removeCellsAtEnd(axisAction.countToRemoveAtEnd);
                    vrow.requestUpdate();
                }
                console.log(`Removed ${axisAction.countToRemoveAtEnd} cols from right`);
            }
            if (axisAction.countToRemoveAtStart > 0) {
                for (let vrow of this.rows) {
                    vrow.removeCellsAtStart(axisAction.countToRemoveAtStart);
                    vrow.requestUpdate();
                }
                console.log(`Removed ${axisAction.countToRemoveAtStart} cols from left`);
            }
            if (axisAction.countToAddAtEnd > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.lastCol + 1; j <= axisAction.newLast; j++)
                        vrow.addCell(this.props.getCellCallback(i, j));
                    vrow.requestUpdate();
                }
                console.log(`Add ${axisAction.countToAddAtEnd} cols to right`);
            }
            if (axisAction.countToAddAtStart > 0) {
                for (let i = this.firstRow; i <= this.lastRow; i++) {
                    let vrow = this.rows[i - this.firstRow];
                    for (let j = this.firstCol - 1; j >= axisAction.newFirst; j--)
                        vrow.insertCell(this.props.getCellCallback(i, j));
                    vrow.requestUpdate();
                }
                console.log(`Add ${axisAction.countToAddAtStart} cols to left`);
            }
        }
        this.firstCol = axisAction.newFirst;
        this.lastCol = axisAction.newLast;
    }
}
exports.VTable = VTable;
class VRow extends mim.Component {
    constructor() {
        super();
        this.cells = [];
    }
    addCell(data) {
        this.cells.push(new VCell(data));
    }
    insertCell(data) {
        this.cells.splice(0, 0, new VCell(data));
    }
    removeAllCells() {
        this.cells = [];
    }
    removeCellsAtStart(count) {
        this.cells.splice(0, count);
    }
    removeCellsAtEnd(count) {
        this.cells.splice(this.cells.length - count, count);
    }
    requestUpdate() {
        this.updateMe();
    }
    render() {
        return mim.jsx("tr", null, this.cells);
    }
}
class VCell extends mim.Component {
    constructor(data) {
        super();
        if (typeof data === "object" && "content" in data)
            this.data = data;
        else
            this.data = { content: data };
    }
    render() {
        return mim.jsx("td", { class: this.data.class, style: this.data.style, rowspan: this.data.rowSpan ? this.data.rowSpan : undefined, colspan: this.data.colSpan ? this.data.colSpan : undefined }, this.data.content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLGVBQWU7SUFFN0IsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFZLEVBQUUsSUFBUztRQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLElB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SUFBSSxHQUFHLElBQUksQ0FBQzs7WUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sTUFBTTtRQUVaLE9BQU8sZ0JBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDdEQsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUMxRCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNkO0lBQ04sQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7QUN0Z0JELG1EOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6Im1pbWNsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCIsIFwibWltdXJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNsXCJdID0gZmFjdG9yeShyb290W1wibWltYmxcIl0sIHJvb3RbXCJtaW11cmxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbXVybF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltY2xUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnQW5kRHJvcERhdGEgc3RhdGljIGNsYXNzIGRlYWxzIHdpdGggZGF0YSBvZiBhcmJpdHJhcnkgdHlwZXMgYmVpbmcgdHJhbnNmZXJlZFxyXG4vLyBkdXJpbmcgZHJhZyAmIGRyb3Agb3BlcmF0aW9ucy4gV2hlbiBhIGRyYWcgb3BlcmF0aW9uIHN0YXJ0cywgcGllY2VzIG9mIGRhdGEgYXJlIGFkZGVkIHRvIGEgbWFwXHJcbi8vIHdpdGggdHlwZXMgKGZvcm1hdHMpIGFzIGtleXMgKHRoZXNlIGFyZSB0aGUgc2FtZSBmb3JtYXRzIHRoYXQgYXJlIGtlcHQgaW4gdGhlIEhUTUw1IERhdGFUcmFuc2ZlclxyXG4vLyBvYmplY3QuIERhdGEgaXMgYWRkZWQgdXNpbmcgdGhlIFNldE9iamVjdERhdGEgbWV0aG9kIG9mIHRoZSBJRHJhZ1N0YXJ0RXZlbnQgaW50ZXJmYWNlLiBXaGVuIHRoZVxyXG4vLyBkcm9wIG9jY3VycywgdGhlIEdldE9iamVjdERhdGEgb2YgdGhlIElEcmFnVGFyZ2V0RXZlbnQgaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgZGF0YS4gVGhlIG1hcCBpc1xyXG4vLyBjbGVhcmVkIHdoZW4gdGhlIGRyYWcgb3BlcmF0aW9uIGVuZHMgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgd2FzIHN1Y2Nlc3NmdWwgb3Igd2FzIGNhbmNlbGVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyYWdBbmREcm9wRGF0YVxyXG57XHJcblx0cHVibGljIHN0YXRpYyBzZXRPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXR5cGUgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuc2V0KCB0eXBlLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmdldCggdHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZU9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5kZWxldGUoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjbGVhckFsbE9iamVjdERhdGEoKTogdm9pZFxyXG5cdHtcclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmNsZWFyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZSBpbiB0aGUgZ2l2ZW4gRGF0YVRyYW5zZmVyIG9iamVjdC5cclxuXHRwdWJsaWMgc3RhdGljIGhhc1R5cGUoIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLCB0eXBlOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBpbXBsZW1udHMgdHlwZXMgdmlhIERPTVN0cmluZ0xpc3QsIHdoY2loIGRvZXNuJ3QgaGF2ZSBpbmRleE9mXHJcblx0XHRpZiAoZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YpXHJcblx0XHRcdHJldHVybiBkYXRhVHJhbnNmZXIudHlwZXMuaW5kZXhPZiggdHlwZSkgPj0gMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChkYXRhVHJhbnNmZXIudHlwZXMgYXMgYW55IGFzIERPTVN0cmluZ0xpc3QpLmNvbnRhaW5zKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFwIG9mIG9iamVjdCBmb3JtYXRzIHRvIG9iamVjdCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZGF0YU1hcDogTWFwPHN0cmluZyxhbnk+ID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUVtdWxEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgb2JqZWN0cyB0aGF0IGVtdWxhdGUgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuXHJcbi8vIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRpbWFnZUVsbTogRWxlbWVudDtcclxuXHRpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsRGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlIGRvZXMgbm90XHJcbi8vIHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyIGltcGxlbWVudHMgSUVtdWxEYXRhVHJhbnNmZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IGhhdmUgc2V0RHJhZ0ltYWdlIG1ldGhvZCBpbiBpdHMgRGF0YVRyYW5zZmVyIGNsYXNzLlxyXG5cdFx0aWYgKHN1cGVyLnNldERyYWdJbWFnZSlcclxuXHRcdFx0c3VwZXIuc2V0RHJhZ0ltYWdlKCBpbWFnZSwgeCwgeSk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmVmZmVjdEFsbG93ZWQgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0QWxsb3dlZCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RBbGxvd2VkRXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmVmZmVjdEFsbG93ZWQgOiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdFx0c3VwZXIuZHJvcEVmZmVjdCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBkcm9wRWZmZWN0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BFZmZlY3RFeCA9PT0gdW5kZWZpbmVkID8gc3VwZXIuZHJvcEVmZmVjdCA6IHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLnNldERhdGEoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFNYXAuc2V0KCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSB0aGlzLmRhdGFNYXAuZ2V0KCBmb3JtYXQpO1xyXG5cdFx0cmV0dXJuIHMgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJEYXRhKCBmb3JtYXQ/OiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXJEYXRhKCBmb3JtYXQpO1xyXG5cclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgYWxsb3dlZCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGFsbG93ZWQgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGVmZmVjdEFsbG93ZWRFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGRyb3AgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBkcm9wIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RXg6IHN0cmluZztcclxuXHJcblx0Ly8gTWFwIG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0byBkYXRhIGl0ZW1zLlxyXG5cdHByaXZhdGUgZGF0YU1hcDogTWFwPHN0cmluZyxzdHJpbmc+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykuIFRoaXMgYXJyYXkgY2hhbmdlcyBldmVyeSB0aW1lIGRhdGEgaXMgc2V0IG9yIGNsZWFyZWQuXHJcblx0cHJpdmF0ZSBkYXRhRm9ybWF0czogc3RyaW5nW107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlXHJcbi8vIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS4gVGhpcyBvYmplY3QgaXMgdXNlZCB1bmRlciBFZGdlLCB3aGljaCBkb2Vzbid0XHJcbi8vIGltcGxlbWVudCB0aGUgbmF0aXZlIERhdGFUcmFuc2ZlciBvYmplY3QgcHJvcGVybHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0XHR0aGlzLm1faXRlbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5tX2ZpbGVzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIFVzZXMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdXBkYXRlIHRoZSBkcmFnIGZlZWRiYWNrLCByZXBsYWNpbmcgYW55IHByZXZpb3VzbHkgc3BlY2lmaWVkXHJcblx0Ly8gZmVlZGJhY2suXHJcblx0cHVibGljIHNldERyYWdJbWFnZSggaW1hZ2U6IEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBpbWFnZTtcclxuXHRcdHRoaXMuaW1hZ2VFbG1YID0geDtcclxuXHRcdHRoaXMuaW1hZ2VFbG1ZID0geTtcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGEgbmV3IGltYWdlIGVsZW1lbnQgd2FzIHNldCwgc28gdGhhdCB3ZSB3aWxsIFwicHJlcGFyZVwiIGl0IG9uIHRoZSBuZXh0XHJcblx0XHQvLyBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGVmZmVjdEFsbG93ZWQoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZWZmZWN0QWxsb3dlZEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZHJvcEVmZmVjdCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RXggPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldERhdGEoIGZvcm1hdDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgZ2V0IGZpbGVzKCk6IEZpbGVMaXN0IHsgcmV0dXJuIHRoaXMubV9maWxlczsgfVxyXG4gICAgZ2V0IGl0ZW1zKCk6IERhdGFUcmFuc2Zlckl0ZW1MaXN0IHsgcmV0dXJuIHRoaXMubV9pdGVtczsgfVxyXG5cclxuXHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0cHVibGljIGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdHB1YmxpYyBpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRwdWJsaWMgaW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHByaXZhdGUgbV9maWxlczogRmlsZUxpc3Q7XHJcbiAgICBwcml2YXRlIG1faXRlbXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdEcm9wRWZmZWN0XHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnRHJvcEVmZmVjdCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBkcmFnICYgZHJvcCBlZmZlY3RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ0FsbG93ZWRFZmZlY3RzXHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcblx0Q29weU1vdmUgPSBcImNvcHlNb3ZlXCIsXHJcblx0Q29weUxpbmsgPSBcImNvcHlMaW5rXCIsXHJcblx0TGlua01vdmUgPSBcImxpbmtNb3ZlXCIsXHJcblx0QWxsID0gXCJhbGxcIixcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnU291cmNlRXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2VFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXRFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZXZlbnQgaGFuZGxlcnMgb24gdGhlXHJcbi8vIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cmVhZG9ubHkgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZS5cclxuXHRoYXNUeXBlKCB0eXBlOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZXJpZXZlcyBkYXRhIGZvciB0aGUgZ2l2ZW4gdHlwZS4gSWYgdGhlIHR5cGUgaXMgbm90IGF2YWlsYWJsZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0Z2V0RGF0YSggdHlwZTogc3RyaW5nKTogYW55O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgYXJyYXkgb2YgZmlsZXMuIFJldHVybnMgdW5kZWZpbmVkIGlmIGZpbGVzIGFyZSBub3QgYmVpbmcgZHJhZ2dlZC4gVGhlIG9iamVjdHMgaW5cclxuXHQvLyB0aGUgcmV0dXJuZWQgYXJyYXkgYXJlIG9mIHR5cGUgV2ViS2l0RW50cnkgKHdlIGNhbm5vdCBzcGVjaWZ5IGl0IGFzIHN1Y2ggaGVyZSBiZWNhdXNlIHRoZVxyXG5cdC8vIGN1cnJlbnQgVHlwZXNjcmlwdCBpcyBkaXN0cmlidXRlZCB3aXRoIC5kLnRzIGxpYnJhcmllcyB0aGF0IGRvbid0IGRlZmluZSB0aGlzIHR5cGUuXHJcblx0Z2V0RmlsZXMoKTogYW55W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zIG9mXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0byBiZVxyXG4vLyBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJhZ1N0YXJ0IGNhbGxiYWNrXHJcbi8vIGFuZCB1c2luZyB0aGUgZS5zZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2Vcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBzdGFydHMgZm9yIHRoZSBlbGVtZW50LlxyXG5cdG9uRHJhZ1N0YXJ0OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIGVuZHMuXHJcblx0b25EcmFnRW5kPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcy5cclxuXHRvbkRyYWc/OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnU291cmNlIGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyYWcgc291cmNlLiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1NvdXJjZSBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBEYXRhIHRvXHJcbi8vIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIHN1cHBsaWVkIGRpcmVjdGx5IHZpYSB0aGUgZGF0YSBwcm9wZXJ0eS4gVGhpc1xyXG4vLyBpbnRlcmZhY2UgYWxsb3dzIHNpbXBsaWZ5aW5nIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIHdpdGhvdXQgdGhlIG5lZWQgdG8gaW1wbGVtZW50IGFueVxyXG4vLyBjYWxsYmFja3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnU291cmNlXHJcbntcclxuXHQvLyBPYmplY3QgaG9sZGluZyBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgZHJhZyBvcGVyYXRpb24uIEVhY2ggcGllY2Ugb2YgZGF0YSBpcyBpZGVudGlmaWVkIGJ5XHJcblx0Ly8gYSB1bmlxdWUgdHlwZSAoYWthIGZvcm1hdCkgc3RyaW5nLlxyXG5cdGRhdGE6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cclxuXHQvLyBBbGxvd2VkIGRyb3AgZWZmZWN0cy4gSWYgZGVmaW5lZCwgdGhpcyBtZW1iZXIgaXMgdXNlZCBvbmx5IGlmIGVpdGhlciB0aGUgb25EcmFnU3RhcnRcclxuXHQvLyBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCBvciBpdCBkb2Vzbid0IHNldCBhbGxvd2VkIGRyb3AgZWZmZWN0cy5cclxuXHRhbGxvd2VkRWZmZWN0cz86IERyYWdBbGxvd2VkRWZmZWN0cztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRHJhZyBzb3VyY2UgcHJvcGVydHkgKGRyYWdTb3VyY2UpIGNhbiBoYXZlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHNoYXBlczpcclxuLy9cdC0gSURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZHJhZyBiZWhhdmlvciBhbmQgZGF0YSB0byBiZSBwYXNzZWQgd2l0aCBpdCBpcyBkZXRlcm1pbmVkXHJcbi8vXHRcdGJ5IGltcGxlbWVudGluZyB0aGUgcmVsZXZhbnQgY2FsbGJhY2tzLlxyXG4vL1x0LSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgLSBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzXHJcbi8vXHRcdGRlZmluZWQgYnkgdGhlIGRhdGEgcHJvcGVydHkuXHJcbi8vXHQtIFwiZWxtLXRleHRcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIFwiZWxtLWh0bWxcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyBvdXRlckhUTUxcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIHRydWUgLSBlcXVpdmFsZW50IHRvIFwiZWxtLWh0bWxcIiBzdHJpbmcuXHJcbi8vXHQtIGZhbHNlIC0gZHJhZyBiZWhhdmlvciBpcyBzdXBwcmVzc2VkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgRHJhZ1NvdXJjZVByb3BUeXBlID0gSURyYWdTb3VyY2UgfCBJU2ltcGxlRHJhZ1NvdXJjZSB8IGJvb2xlYW4gfCBcImVsbS10ZXh0XCIgfCBcImVsbS1odG1sXCI7XHJcblxyXG5cclxuXHJcbi8vIFN0cmluZyB1c2VkIGFzIGEgdHlwZSAoYWthIGZvcm1hdCkgd2hlbiBhbiBlbGVtZW50IG9iamVjdCBpcyBiZWluZyBkcmFnZ2VkLlxyXG5leHBvcnQgY29uc3QgRE5EVFlQRV9FTEVNRU5UID0gXCJhcHBsaWNhdGlvbi9ET01FbGVtZW50XCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXQgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJvcCB0YXJnZXQuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnVGFyZ2V0IGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIFJlY2VpdmluZ1xyXG4vLyBkYXRhIGlzIGFjY29tcGxpc2hlZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJvcCBjYWxsYmFjayBhbmQgY2FsbGluZyB0aGUgZS5nZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBlbnRlcnMgdGhlIGVsZW1lbnQgYm91bmRhcnkgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlLCB0aGUgb25EcmFnT3ZlclxyXG5cdC8vIGFuZCBvbkRyYWdMZWF2ZSBtZXRob2RzIHdpbGwgbm90IGJlIGNhbGxlZC5cclxuXHRvbkRyYWdFbnRlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgaG92ZXJzIG92ZXIgdGhlIGVsZW1lbnQgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBtZXRob2QgcmV0dXJucyB0cnVlIG9yXHJcblx0Ly8gZmFsc2UsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCB3aWxsIGJlIGNvbnRpbnVlZCB0byBiZSBjYWxsZWQgYXMgdGhlIG1vdXNlIG1vdmVzLiBUaGlzIGFsbG93c1xyXG5cdC8vIHNvbWUgcGFydHMgb2YgdGhlIGVsZW1lbnQgdG8gYmUgZHJvcCB0YXJnZXRzIHdoaWxlIG90aGVycyBub3QuXHJcblx0b25EcmFnT3Zlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgbGVhdmVzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi5cclxuXHRvbkRyYWdMZWF2ZT86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkYXRhIHdhcyBkcm9wZWQgaW4gdGhpcyBkcm9wIHpvbmUuXHJcblx0b25Ecm9wOiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgc3BlY2lmeWluZyB0aGUgZXhwZWN0ZWQgdHlwZXMgdmlhIHRoZSBkYXRhVHlwZXMgcHJvcGVydHkgYW5kXHJcbi8vIGltcGxlbWVudGluZyB0aGUgb25EYXRhRHJvcHBlZCBjYWxsYmFjay5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZURyYWdUYXJnZXRcclxue1xyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0aGF0IHRoZSBkcmFnIHRhcmdldCBjYW4gcmVjZWl2ZS5cclxuXHRkYXRhVHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuXHQvLyBTdHlsZSB0byBhcHBseSBmb3IgZHJhZyBmZWVkYmFjay5cclxuXHRmZWVkYmFjaz86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgZGF0YSBjb250YWluaW5nIG9uZSBvciBtb3JlIGFwcHJvcHJpYXRlIHR5cGVzIGlzIGRyb3BwZWQuXHJcblx0Ly8gVGhlIGRhdGEgaXMgZGVsaXZlcmVkIGFzIGFuIG9iamVjdCB3aGVyZSBwcm9wZXJ0eSBuYW1lcyBhcmUgZGF0YSB0eXBlcyBhbmQgdmFsdWVzIGFyZVxyXG5cdC8vIGRhdGEgcGllY2VzIG9mIHRoZXNlIHR5cGVzLlxyXG5cdG9uRGF0YURyb3BwZWQ6IChkYXRhOiB7W3R5cGU6IHN0cmluZ106IGFueX0pID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRHJhZyB0YXJnZXQgcHJvcGVydHkgKGRyYWdUYXJnZXQpIGNhbiBiZSBlaXRoZXIgSURyYWdUYXJnZXQgaW50ZXJmYWNlIG9yIHJlZmVyZW5jZSB0byBhblxyXG4vLyBFbGVtZW50LiBJbiB0aGUgbGF0dGVyIGNhc2UsIHRoZSByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBpcyBhblxyXG4vLyBFbGVtZW50IG9iamVjdC5cclxuZXhwb3J0IHR5cGUgRHJhZ1RhcmdldFByb3BUeXBlID0gSURyYWdUYXJnZXQgfCBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJtaW1ibC9kaXN0L2NvcmUvbWltXCJcclxue1xyXG5cdGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuPlxyXG5cdHtcclxuXHRcdGRyYWdTb3VyY2U/OiBEcmFnU291cmNlUHJvcFR5cGU7XHJcblx0XHRkcmFnVGFyZ2V0PzogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnU291cmNlSGFuZGxlciwgRHJhZ1NvdXJjZUVtdWxhdG9yfSBmcm9tIFwiLi9EcmFnU291cmNlXCJcclxuaW1wb3J0IHtEcmFnVGFyZ2V0SGFuZGxlcn0gZnJvbSBcIi4vRHJhZ1RhcmdldFwiXHJcbmltcG9ydCB7IERyYWdTb3VyY2VQcm9wVHlwZSwgRHJhZ1RhcmdldFByb3BUeXBlIH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1NvdXJjZVByb3BUeXBlPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5jdXJyVmFsID0gcHJvcFZhbDtcclxuXHRcdHRoaXMuYWRkKCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm1pbmF0ZSggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHR0aGlzLmVsbVZOID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCBuZXdQcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3VyclZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyVmFsKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLmFkZCggbmV3UHJvcFZhbCBhcyBEcmFnU291cmNlUHJvcFR5cGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyVmFsID0gbmV3UHJvcFZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgYWRkKCBwcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtVk4uZWxtIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlciA9IFwib3duZXJTVkdFbGVtZW50XCIgaW4gZWxtXHJcblx0XHRcdFx0XHQ/IG5ldyBEcmFnU291cmNlRW11bGF0b3IoIGVsbSwgcHJvcFZhbClcclxuXHRcdFx0XHRcdDogbmV3IERyYWdTb3VyY2VIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIuaW5pdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbW92ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIudGVybSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFZW1lbnQgbm9kZSBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHRwcml2YXRlIGVsbVZOOiBtaW0uSUVsbVZOO1xyXG5cclxuXHQvLyBjdXJyZW50IGF0dHJpYnV0ZSB2YWx1ZVxyXG5cdGN1cnJWYWw6IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgaGFuZGxlcyBkcmFnIHNvdXJjZSBvcGVydGlvbnMuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlSGFuZGxlcjogRHJhZ1NvdXJjZUhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1RhcmdldFByb3BUeXBlPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5jdXJyVmFsID0gcHJvcFZhbDtcclxuXHRcdHRoaXMuYWRkKCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm1pbmF0ZSggaXNSZW1vdmFsOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHR0aGlzLmVsbVZOID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCBuZXdQcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3VyclZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyVmFsKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLmFkZCggbmV3UHJvcFZhbCBhcyBEcmFnVGFyZ2V0UHJvcFR5cGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXJyVmFsID0gbmV3UHJvcFZhbDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgYWRkKCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtVk4uZWxtIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlciA9IG5ldyBEcmFnVGFyZ2V0SGFuZGxlciggZWxtLCBwcm9wVmFsKTtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIuaW5pdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbW92ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIudGVybSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFZW1lbnQgbm9kZSBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHRwcml2YXRlIGVsbVZOOiBtaW0uSUVsbVZOO1xyXG5cclxuXHQvLyBjdXJyZW50IGF0dHJpYnV0ZSB2YWx1ZVxyXG5cdGN1cnJWYWw6IERyYWdUYXJnZXRQcm9wVHlwZTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgaGFuZGxlcyBkcmFnIHRhcmdldCBvcGVydGlvbnMuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0SGFuZGxlcjogRHJhZ1RhcmdldEhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVnaXN0ZXIgY3VzdG9tIHByb3BlcnR5IGZhY3RvcnkgZm9yIGRyYWdTb3VyY2UgYW5kIGRyYWdUYXJnZXQgcHJvcGVydGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXMoKVxyXG57XHJcblx0bWltLnJlZ2lzdGVyQ3VzdG9tQXR0cmlidXRlKCBcImRyYWdTb3VyY2VcIiwgRHJhZ1NvdXJjZUN1c3RvbUVsbVByb3BIYW5kbGVyKTtcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1RhcmdldFwiLCBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdBbGxvd2VkRWZmZWN0cywgRHJhZ1NvdXJjZVByb3BUeXBlLCBJRHJhZ1NvdXJjZSwgSVNpbXBsZURyYWdTb3VyY2UsIElEcmFnU291cmNlRXZlbnQsIERORFRZUEVfRUxFTUVOVH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGEsIElFbXVsRGF0YVRyYW5zZmVyLCBFbXVsRGF0YVRyYW5zZmVyLCBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyfSBmcm9tIFwiLi9EYXRhVHJhbnNmZXJcIjtcclxuXHJcblxyXG5cclxudHlwZSBEcmFnRXZlbnRUeXBlID0gXCJkcmFnXCIgfCBcImRyYWdlbmRcIiB8IFwiZHJhZ2VudGVyXCIgfCBcImRyYWdleGl0XCIgfCBcImRyYWdsZWF2ZVwiIHwgXCJkcmFnb3ZlclwiIHwgXCJkcmFnc3RhcnRcIiB8IFwiZHJvcFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTdGFydEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlRXZlbnQgaW1wbGVtZW50cyBJRHJhZ1NvdXJjZUV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggdHlwZSwgXCJcIik7XHJcblx0XHRcdERyYWdBbmREcm9wRGF0YS5zZXRPYmplY3REYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VCZWhhdmlvciBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdGhhdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVuIG1lY2hhbmlzbXNcclxuLy8gc2V0dXAgYnkgZGlmZmVyZW50IHR5cGVzIG9mIHRoZSBkcmFnU291cmNlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ1NvdXJjZUJlaGF2aW9yXHJcbntcclxuXHRSZWd1bGFyID0gMSxcclxuXHRTaW1wbGUsXHJcblx0RWxtVGV4dCxcclxuXHRFbG1IdG1sXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlSGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3Agc291cmNlIGZ1bmN0aW9uYWxpdHkuIEl0XHJcbi8vIGlzIHVzZWQgYnkgSFRNTCBlbGVtZW50cyB0aGF0IG5hdGl2ZWx5IHN1cHBvcnQgZHJhZyBhbmQgZHJvcCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2VQcm9wOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0gPSBlbG07XHJcblxyXG5cdFx0aWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS10ZXh0XCIpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtVGV4dDtcclxuXHRcdGVsc2UgaWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS1odG1sXCIgfHwgZHJhZ1NvdXJjZVByb3AgPT09IHRydWUpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtSHRtbDtcclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZSkuZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLlNpbXBsZTtcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSVNpbXBsZURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2UpLm9uRHJhZ1N0YXJ0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcjtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdmFsdWUgb2YgZHJhZ1NvdXJjZVByb3AgaW4gRHJhZ1NvdXJjZUhhbmRsZXIgY29uc3RydWN0b3IuXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBtYWtpbmcgdGhlIGVsZW1lbnQgZHJhZ2dhYmxlIGJ5IGFkZGluZyBkcmFnIGV2ZW50cy5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSBuZXcgRHJhZ1NvdXJjZUV2ZW50KCk7XHJcblx0XHR0aGlzLmVsbS5zZXRBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXJtaW5hdGVzIHRoZSBvYmplY3QgYnkgcmVtb3ZpbmcgZHJhZyBldmVudCBoYW5kbGVycyBmcm9tIHRoZSBlbGVtZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJkcmFnZ2FibGVcIik7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnc3RhcnQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ1N0YXJ0ID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZGF0YSBtYXAgLSBqdXN0IGluIGNhc2VcclxuXHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGUpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGRhdGFUeXBlIGluIHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5kYXRhKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIGRhdGFUeXBlLCB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YVtkYXRhVHlwZV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5hbGxvd2VkRWZmZWN0cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIG9uRHJhZ1N0YXJ0IG1ldGhvZCBpcyBkZWZpbmVkLCBpbnZva2UgaXRcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KVxyXG5cdFx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBETkRUWVBFX0VMRU1FTlQsIHRoaXMuZWxtKTtcclxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWwpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLm91dGVySFRNTCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWdlbmQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ0VuZCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgIT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZmluYWxseVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWcgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZyA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZyggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByb3RlY3RlZCBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgd2UgbmVlZCB0byBpbXBsZW1lbnQgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvcjsgdGhhdCBpcywgd2Ugc2hvdWxkXHJcblx0Ly8vLyBwYXNzIHRoZSBlbGVtZW50IG9iamVjdCBhcyBkYXRhIGJlaW5nIGRyYWdnZWQuIE5vdGUgdGhhdCBlaXRoZXIgdGhpcyBmbGFnIGlzIHRydWUgb3JcclxuXHQvLy8vIHRoZSBkcmFnU291cmNlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0Ly9wdWJsaWMgZGVmYXVsdERyYWdTb3VyY2VCZWhhdmlvckVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFR5cGUgb2YgZHJhZyBzb3VyY2UgbWVjaGFuaXNtIGRldGVybWluZWQgYnkgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHlcclxuXHRwcm90ZWN0ZWQgYmVoYXZpb3I6IERyYWdTb3VyY2VCZWhhdmlvcjtcclxuXHJcblx0Ly8gSURyYWdTb3VyY2UgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBjYW4gYmVcclxuXHQvLyB1bmRlZmluZWQgaWYgZWl0aGVyIHdlIGFyZSBpbXBsZW1lbnRpbmcgYSBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZTogSURyYWdTb3VyY2U7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIHNpbXBsZURyYWdTb3VyY2U6IElTaW1wbGVEcmFnU291cmNlO1xyXG5cclxuXHQvLyBFdmVudCBvYmplY3QgdGhhdCBpcyByZXVzZWQgd2hlbiBzZW5kaW5nIGV2ZW50cyB0byBhIGRyYWcgc291cmNlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlRXZlbnQ6IERyYWdTb3VyY2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VFbXVsYXRvciBjbGFzcyBlbXVsYXRlcyBzdXBwb3J0IGZvciBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5IHZpYSBtb3VzZVxyXG4vLyBldmVudHMuIEl0IGlzIHVzZWQgZm9yIERPTSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgbmF0aXZlIGRyYWcgYW5kIGRyb3Agc3Vwb3J0IC0gZS5nLiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUVtdWxhdG9yIGV4dGVuZHMgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2U6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHRzdXBlciggZWxtLCBkcmFnU291cmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBhZGRpbmcgYSBtb3VzZWRvd24gZXZlbnQuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHRzdXBlci50ZXJtKCk7XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbWVtYmVyIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UtZG93biBldmVudCBhbmQgc3RhcnQgd2F0Y2hpbmcgbW91c2UgbW92ZW1lbnRcclxuXHQvLyhhbmQgb3RoZXIpIGV2ZW50cy5cclxuXHRwcml2YXRlIG9uTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gaWdub3JlIG5vbi1wcmltYXJ5IG1vdXNlIGJ1dHRvbnNcclxuXHRcdGlmIChlLmJ1dHRvbiAhPT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyByZW1lbWViZXIgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIGRvd24gZXZlbnRcclxuXHRcdHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcclxuXHRcdHRoaXMubW91c2VEb3duWSA9IGUuY2xpZW50WTtcclxuXHJcblx0XHQvLyBzdGFydCBsaXN0ZW5pbmcgdG8gc2V2ZXJhbCBEbkQgcmVsYXRlZCBldmVudHMgb24gdGhlIGRvY3VtZW50LlxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEVpdGhlciBzdGFydCBvciBjb250aW51ZSBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBwcmltYXJ5IGJ1dHRvbiBtdXN0IGJlIHN0aWxsIHByZXNzZWRcclxuXHRcdGlmICgoZS5idXR0b25zICYgMSkgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBuZWVkIHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gLSBvdGhlcndpc2UgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIG9uIHRoZSBwYWdlLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIGlmIERuRCBvcGVyYXRpb24gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcyBmaXJlIGV2ZW50czsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHRoZVxyXG5cdFx0Ly8gbW91c2UgbW92ZWQgZW5vdWdoIHRvIHN0YXJ0IHRoZSBvcGVyYXRpb24uXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJhZ1N0ZXAoIGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3ggPSBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blg7XHJcblx0XHRcdGxldCBjeSA9IGUuY2xpZW50WSAtIHRoaXMubW91c2VEb3duWTtcclxuXHRcdFx0aWYgKGN4ID49IC0yICYmIGN4IDw9IDIgJiYgY3kgPj0gLTIgJiYgY3kgPD0gMilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHJcblx0XHRcdHRoaXMuaW5pdGlhdGVEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVEcm9wKCBlKTtcclxuXHJcblx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNylcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgRXNjYXBlIC0gY2FuY2VsIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0XHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmNhbmNlbERyYWdPcGVyYXRpb24oIGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXl1cCBldmVudHNcclxuXHRwcml2YXRlIG9uS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVLZXlFdmVudCggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWF0ZXMgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb25cclxuXHRwcml2YXRlIGluaXRpYXRlRHJhZ09wZXJhdGlvbiggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoXCJzZXREcmFnSW1hZ2VcIiBpbiBEYXRhVHJhbnNmZXIucHJvdG90eXBlKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bERhdGFUcmFuc2ZlcigpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bExlZ2FjeURhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRcdC8vIGZpcmUgb25EcmFnU3RhcnQgZXZlbnQgLSBpZiB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgcHJldmVudGVkLCB3ZSBjYW5jZWwgdGhlIG9wZXJhdGlvblxyXG5cdFx0bGV0IGRyYWdzdGFydEV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdzdGFydFwiKTtcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIGRyYWdzdGFydEV2ZW50KTtcclxuXHRcdGlmIChkcmFnc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB0aGUgZHJhZyBzb3VyY2UgZGlkbid0IHNldCBhbiBlbGVtZW50IGZvciBkcmFnIGltYWdlLCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmLlxyXG5cdFx0aWYgKCF0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjYWxjdWx0ZSBkcmFnIGltYWdlIGNvb3JkaW5hdGVzIHNvIHRoYXQgaW5pdGlhbGx5IHRoZSBkcmFnIGltYWdlIGNvaW5zaWRlcyB3aXRoXHJcblx0XHRcdC8vIHRoZSBvcmlnaW5hbCBpbWFnZVxyXG5cdFx0XHRsZXQgcmM6IENsaWVudFJlY3QgPSB0aGlzLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSggdGhpcy5lbG0sIGUuY2xpZW50WCAtIHJjLmxlZnQsIGUuY2xpZW50WSAtIHJjLnRvcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB3ZSBkb24ndCBrbm93IGxhc3QgdGFyZ2V0IHlldFxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIGEgZHJhZyBzdGVwXHJcblx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlIG9uZSBzdGVwIG9mIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uLCB3aGljaCBvY2N1cnMgd2hlbiB0aGUgbW91c2UgbW92ZXNcclxuXHRwcml2YXRlIGhhbmRsZURyYWdTdGVwKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZXBhcmVJbWFnZUVsZW1lbnQoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJlZm9yZSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50IHdlIHNldCB0aGUgZHJvcEVmZmVjdCB0byBub25lLCBhbmQgdGhlIGRyb3BvdmVyIGhhbmRsZXJcclxuXHRcdC8vIGNvdWxkIHNldCBpdCB0byBzb21ldGhpbmcgZWxzZSBpZiBkZXNpcmVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIGZpbmQgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0bGV0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKSB0aGlzLmltYWdlRWxtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0aWYgKG5ld1RhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgYXJlIG9uIHRoZSBzYW1lIHRhcmdldCBhcyB0aGUgcHJldmlvdXMgbW91c2UgbW92ZSwganVzdCBzZW5kIGRyYWdvdmVyIChpZlxyXG5cdFx0XHQvLyB0aGUgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lKVxyXG5cdFx0XHRpZiAobmV3VGFyZ2V0ID09PSB0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzZW5kIGRyYWdlbnRlciB0byB0aGUgbmV3IHRhcmdldCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgYSB2YWxpZCBkcm9wXHJcblx0XHRcdFx0Ly8gem9uZVxyXG5cdFx0XHRcdGxldCBkcmFnZW50ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnZW50ZXJcIik7XHJcblx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdlbnRlckV2ZW50KTtcclxuXHRcdFx0XHRsZXQgaXNOZXdUYXJnZXREcm9wcGFibGU6IGJvb2xlYW4gPSBkcmFnZW50ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0XHQvLyBzZW5kIHRoZSBsYXN0IHRhcmdldCAoaWYgZXhpc3RzIGFuZCBpcyBkcm9wcGFibGUpIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgdGFyZ2V0IGFuZCB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcCB6b25lXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gbmV3VGFyZ2V0O1xyXG5cdFx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gaXNOZXdUYXJnZXREcm9wcGFibGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvdXIgbmV3IHRhcmdldCBpcyBkcm9wcGFiYWxlLCBzZW5kIGRyYWdvdmVyIHRvIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgZG9udCBoYXZlIG5ldyB0YXJnZXQgYnV0IGhhdmUgbGFzdCBvbmUgdGFyZ2V0LCBzZW5kIGRyYWdsZWF2ZSB0byB0aGUgbGFzdCBvbmVcclxuXHRcdFx0Ly8gKGlmIHRoZSBsYXN0IHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHQvLyBtb3ZlIHRoZSBkcmFnIGltYWdlIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgXCJweFwiO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyBcInB4XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUubGVmdCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKyAxMiArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLnRvcCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyAwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGxhc3QgbW91c2UgZXZlbnQgLSB3ZSBtYXkgdXNlIGl0IHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cyBpZiB3ZSBuZWVkIHRvXHJcblx0XHQvLyBkaXNwYXRjaCBkcmFnIGV2ZW50cyB1cG9uIGtleWJvYXJkIGV2ZW50cyAoZS5nLiBjYW5jZWwgb3BlcmF0aW9uIHdoZW4gRXNjYXBlIGlzIHByZXNzZWRcclxuXHRcdC8vIG9yIGRyYWdvdmVyIGV2ZW50IGlmIEN0cmwsIEFsdCBvciBTaGlmdCBidXR0b25zIGFyZSBwcmVzc2VkKS5cclxuXHRcdHRoaXMubGFzdE1vdXNlRXZlbnQgPSBlO1xyXG59O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgZHVyaW5nIGRyYWcgb3BlcmF0aW9uIGJ5IHNlbmRpbmcgZHJhZ292ZXIgZXZlbnQuXHJcblx0cHJpdmF0ZSBoYW5kbGVLZXlFdmVudChlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblxyXG5cdFx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdcIikpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEVmZmVjdEVsbSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0XHR0aGlzLnNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFRha2VzIHRoZSBpbWFnZSBlbGVtZW50IChpZiBhbnkpIHNwZWNpZmllZCB2aWEgdGhlIGNhbGwgdG8gc2V0RHJhZ0ltYWdlIGFuZCBjbG9uZXMgaXQgaW50b1xyXG5cdC8vIGEgc3BlY2lhbCBkaXYgdGhhdCB3aWxsIGJlIHNob3duIGR1cmluZyB0aGUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIHByZXBhcmVJbWFnZUVsZW1lbnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcHJldmlvdXMgaW1hZ2UgZWxlbWVudCwgcmVtb3ZlIGl0IG5vd1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0ucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0gPT0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvcmdFbG06IEVsZW1lbnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG07XHJcblx0XHRpZiAoIW9yZ0VsbSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50LCB3aGljaCB3aWxsIHdyYXAgdGhlIGltYWdlIGVsZW1lbnQgYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcblx0XHQvLyBkb2N1bWVudCBib2R5IHdpdGggYWJzb2x1dGUgcG9zaXRpb25pbmcgYW5kIHNvbWUgb3BhY2l0eVxyXG5cdFx0bGV0IGRpdkVsbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHJcblx0XHQvLyBjbG9uZSB0aGUgb3JpZ2luYWwgZWxlbWVudCBiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBtb3ZlIGl0IGFyb3VuZC5cclxuXHRcdGxldCBjbG9uZWRFbG06IEVsZW1lbnQgPSBvcmdFbG0uY2xvbmVOb2RlKCkgYXMgRWxlbWVudDtcclxuXHJcblx0XHQvLyBpZiB0aGUgaW1hZ2UgZWxlbWVudCBzZXQgdmlhIHNldERyYWdJbWFnZSBpcyBhbiBTVkcgZWxlbWVudCBidXQgbm90IHRoZSA8c3ZnPiBlbGVtZW50XHJcblx0XHQvLyBpdHNlbGYsIHRoZW4gd3JhcCBpdCBpbiBhbiA8c3ZnPiBlbGVtZW50LlxyXG5cdFx0aWYgKG1pbS5pc1N2Zyggb3JnRWxtKSAmJiAhbWltLmlzU3ZnU3ZnKCBvcmdFbG0pKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ZnRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cdFx0XHRzdmdFbG0uYXBwZW5kQ2hpbGQoIGNsb25lZEVsbSk7XHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggc3ZnRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cclxuXHRcdC8vIHN0eWxlIHRoZSBkaXYgZWxlbWVudCB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGRpdkVsbS5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcclxuXHRcdGRpdkVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcblx0XHQvLyBhZGQgYSBzcGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgXCJkcm9wRWZmZWN0XCIgaW1hZ2VcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiKTtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggdGhpcy5kcm9wRWZmZWN0RWxtKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkaXZFbG0pO1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGRpdkVsbTtcclxuXHJcblx0XHQvLyBjb21wYXJlIHRoZSBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgYW5kIHRoZSB3cmFwcGluZyBkaXZcclxuXHRcdC8vIGVsZW1lbnQuIFRoZWlyIHRvcC1sZWZ0IGNvb3JkaW5hdGVzIG1heSBub3QgY29pbnNpZGUgZHVlIHRvIHNldmVyYWwgZmFjdG9ycyAoZS5nLlxyXG5cdFx0Ly8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb3IgU1ZHIGNvb3JkaW5hdGVzKS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgYWRqdXN0IHRoZSB4IGFuZCB5XHJcblx0XHQvLyBjb29yZGluYXRlcyBpbiB0aGUgRW11bERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0XHRsZXQgcmNDbG9uZWRFbG06IENsaWVudFJlY3QgPSBjbG9uZWRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNEaXZFbG06IENsaWVudFJlY3QgPSBkaXZFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNDbG9uZWRFbG0ubGVmdCAhPSByY0RpdkVsbS5sZWZ0KVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICs9IHJjQ2xvbmVkRWxtLmxlZnQgLSByY0RpdkVsbS5sZWZ0O1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLnRvcCAhPSByY0RpdkVsbS50b3ApXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKz0gcmNDbG9uZWRFbG0udG9wIC0gcmNEaXZFbG0udG9wO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5IHNtYWxsIGltYWdlIGluZGljYXRpbmcgd2hhdCBkcm9wIGVmZmVjdCBpcyBleHBlY3RlZFxyXG5cdHByaXZhdGUgc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cdFx0bGV0IGNvbG9yOiBzdHJpbmc7XHJcblx0XHRzd2l0Y2goIGRyb3BFZmZlY3QpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgXCJub25lXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1iYW5cIjtcclxuXHRcdFx0XHRjb2xvciA9IFwicmVkXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiY29weVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtcGx1c1wiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImxpbmtcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWxpbmtcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmx1ZVwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIGhhbmRsZURyb3AoIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0byBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvciBiZWNhdXNlIGRyb3AgYWx3YXlzIG9jY3VycyBvbiB0aGUgbGFzdFxyXG5cdFx0Ly8gZm91bmQgdGFyZ2V0IChvciBubyB0YXJnZXQgYXQgYWxsKVxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJvcFwiKSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsICBcImRyYWdlbmRcIikpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VsIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgY2FuY2VsRHJhZ09wZXJhdGlvbiggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IERuRCB3YXMgY2FuY2VsZWRcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ0VuZCBldmVudFxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENsZWFuIHVwIGFmdGVyIGRyYWcgb3BlcmF0aW9uIGZpbmlzaGVzIHdpdGggZWl0aGVyIGRyb3Agb3IgY2FuY2VsYXRpb25cclxuXHRwcml2YXRlIGNsZWFudXBEcmFnT3BlcmF0aW9uKClcclxuXHR7XHJcblx0XHQvLyBkZXN0cm95IHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHJcblx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZT0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gY3JlYXRlcyBEcmFnRXZlbnQgZnJvbSB0aGUgZ2l2ZW4gTW91c2VFdmVudCBhbmQgdGhlIHN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZTogTW91c2VFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLFxyXG5cdFx0XHRcdFx0XHRcdGUuY2xpZW50WCwgZS5jbGllbnRZLCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIGUuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdGUucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogZS5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogZS5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IGUuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiBlLmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiBlLnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogZS5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IGUuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIEtleWJvYXJkRXZlbnQgYW5kIHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0LiBVc2VzIGxhc3QgcmVtZW1iZXJlZFxyXG5cdC8vIG1vdXNlIGV2ZW50IHRvIGZpbGwgY29vcmRpbmF0ZXMgYW5kIGJ1dHRvbiBpbmZvcm1hdGlvbi5cclxuXHRwcml2YXRlIGNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlOiBLZXlib2FyZEV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50XHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgbmV3IERyYWdFdmVudCB5ZXQsIHdoaWxlIENocm9tZSBkb2Vzbid0IHN1cHBvcnQgaW5pdERyYWdFdmVudFxyXG5cdFx0aWYgKFwiaW5pdERyYWdFdmVudFwiIGluIERyYWdFdmVudC5wcm90b3R5cGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRHJhZ0V2ZW50Jyk7XHJcblx0XHRcdChkcmFnRXZlbnQgYXMgYW55KS5pbml0RHJhZ0V2ZW50KCB0eXBlLCBlLmJ1YmJsZXMsIGUuY2FuY2VsYWJsZSwgZS52aWV3LCBlLmRldGFpbCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblgsIHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsIHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WSxcclxuXHRcdFx0XHRcdFx0XHRlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiB0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50IGZvciB0aGUgcHJpbWFyeSBidXR0b24uIFdlIHdpbGwgc3RhcnQgZW11bGF0aW5nIERuRCBpZlxyXG5cdC8vIHRoZSBtb3VzZSBtb3ZlcyBtb3JlIHRoYW4gdHdvIHBpeGVscyBpbiBlaXRoZXIgZGlyZWN0aW9uIHdoaWxlIHRoZSBwcmltYXJ5IGJ1dHRvbiBpcyBzdGlsbFxyXG5cdC8vIGRvd24uXHJcblx0cHJpdmF0ZSBtb3VzZURvd25YOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3VzZURvd25ZOiBudW1iZXI7XHJcblxyXG5cdC8vIFN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCBkdXJpbmcgYSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbi4gSXQgaXMgY3JlYXRlZFxyXG5cdC8vIHdoZW4gRG5EIHN0YXJ0cyBhbmQgaXMgZGVzdHJveWVkIGFmdGVyIGl0IGZpbmlzaGVzLiBQcmVzZW5jZSBvZiB0aGlzIG9iamVjdCBhbHNvIGluZGljYXRlc1xyXG5cdC8vIHRoYXQgdGhlIERuRCBvcGVyc3Rpb24gaXMgaW4gcHJvZ3Jlc3NcclxuXHRwcml2YXRlIGVtdWxEYXRhVHJhbnNmZXI6IElFbXVsRGF0YVRyYW5zZmVyO1xyXG5cclxuXHQvLyBDbG9uZWQgZWxlbWVudCB1c2VkIHRvIGFzIGFuIGltYWdlIGR1cmluZyBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgaW1hZ2VFbG06IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHQvLyBTdWItZWxlbWVudCBvZiB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IHNob3dzIGRyb3AgZWZmZWN0XHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RWxtOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG5cdC8vIFRoZSBsYXN0IGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdHByaXZhdGUgbGFzdFRhcmdldDogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhc3QgdGFyZ2V0IHVuZGVyIHRoZSBjdXJzb3Igd2FzIGEgdmFsaWQgZHJvcCB6b25lLiBUaGlzIGlzXHJcblx0Ly8gbmVlZGVkIHRvIG5vdCBzZW5kIGRyYWdvdmVyIGFuZCBkcmFnbGVhdmUgZXZlbnRzIHRvIG5vbi1kcm9wcGFibGUgdGFyZ2V0cy4gVGhpcyBmbGFnIGlzXHJcblx0Ly8gc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ2VudGVyIGV2ZW50IHNlbnQgdG8gdGhlIHRhcmdldCBoYXMgaXRzIHByZXZlbnREZWZhdWx0IG1ldGhvZFxyXG5cdC8vIGNhbGxlZC4gSWYgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZSwgZHJhZ292ZXIsIGRyYWdsZWF2ZSBhbmQgZHJvcCBldmVudHMgYXJlIG5vdCBzZW50XHJcblx0Ly8gdG8gdGhpcyB0YXJnZXQuXHJcblx0cHJpdmF0ZSBpc0xhc3RUYXJnZXREcm9wcGFibGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBkcm9wIGlzIHBvc3NpYmxlIG9uIHRoZSBsYXN0IHRhcmdldC4gVGhpcyBmbGFnIGlzIG5lZWRlZCBiZWNhdXNlXHJcblx0Ly8gZXZlbiBpZiBhIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSwgbm90IGFsbCBsb2NhdGlvbnMgd2l0aGluIHRoZSB0YXJnZXQgbWlnaHQgYWNjZXB0IHRoZVxyXG5cdC8vIGRyb3AuIFRoaXMgZmxhZyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBkcmFnb3ZlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0c1xyXG5cdC8vIHByZXZlbnREZWZhdWx0IG1ldGhvZCBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyb3AgZXZlbnQgd2lsbCBub3QgYmUgc2VudCB0b1xyXG5cdC8vIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIExhdGVzdCBNb3VzZUV2ZW50IG9iamVjdCwgd2hjaWggd2UgdXNlIHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cy5cclxuXHRwcml2YXRlIGxhc3RNb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdEcm9wRWZmZWN0LCBEcmFnQWxsb3dlZEVmZmVjdHMsIERyYWdUYXJnZXRQcm9wVHlwZSwgSURyYWdUYXJnZXQsIElTaW1wbGVEcmFnVGFyZ2V0LCBJRHJhZ1RhcmdldEV2ZW50fSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YX0gZnJvbSBcIi4vRGF0YVRyYW5zZmVyXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyB0YXJnZXQgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0RXZlbnQgaW1wbGVtZW50cyBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuaGFzVHlwZSggdGhpcy5kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBkYXRhOiBhbnkgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRyZXR1cm4gZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YSA6IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBmaWxlcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG5cdFx0cmV0dXJuIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1zID0gdGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuaXRlbXM7XHJcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRsZXQgZW50cmllczogYW55W10gPSBbXTtcclxuXHRcdGlmIChpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdGVudHJpZXMucHVzaCggaXRlbXNbaV0ud2Via2l0R2V0QXNFbnRyeSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZW50cmllcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCB0YXJnZXQgZnVuY3Rpb25hbGl0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnVGFyZ2V0SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1RhcmdldDogRHJhZ1RhcmdldFByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtID0gZWxtO1xyXG5cclxuXHRcdGlmICgoZHJhZ1RhcmdldCBhcyBJRHJhZ1RhcmdldCkub25Ecm9wICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldCA9IGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQ7XHJcblx0XHRlbHNlIGlmICgoZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldCkub25EYXRhRHJvcHBlZCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSBuZXcgRHJhZ1RhcmdldEV2ZW50KCk7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnZW50ZXJcIiwgdGhpcy5vbkRyYWdFbnRlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdsZWF2ZVwiLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5vbkRyYWdPdmVyKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJvcFwiLCB0aGlzLm9uRHJvcCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25EcmFnRW50ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0Ly8gd2Ugd2lsbCBjYWxsIHRoZSBvbkRyYWdFbnRlciBjYWxsYmFjayBvbmx5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGRyYWdlbnRlclxyXG5cdFx0Ly8gZXZlbnQgaXMgZmlyZWQgb24gb3VyIGVsZW1lbnQgb3Igb24gb25lIG9mIGNoaWxkIG5vbi1kcmFnLXRhcmdldCBlbGVtZW50cy5cclxuXHRcdGlmICh0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIrKyA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gaWYgSURyYWdUYXJnZXQudHlwZXMgcHJvcGVydHkgaXMgZGVmaW5lZCBhbmQgaXMgbm90IGVtcHR5LCBkcmFnIHdpbGwgYmUgcG9zc2libGVcclxuXHRcdC8vIG9ubHkgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBoYXMgYXQgbGVhc3Qgb24gdHlwZSBmcm9tIHRoZSB0eXBlcyBhcnJheS5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5kYXRhVHlwZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIGUuZGF0YVRyYW5zZmVyLCB0eXBlKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgbm8gc3VpdGFibGUgdHlwZSBmb3VuZCwgd2UgZG9uJ3QgY2FsbCBlLnByZXZlbnREZWZhdWx0LCB3aGljaCBkaXNhbGxvd3MgZHJvcFxyXG5cdFx0XHRpZiAoIXRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdFbnRlciBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBkcmFnIHRhcmdldCwgd2UgY29uc2lkZXIgZHJvcCBwb3NzaWJsZVxyXG5cdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0VudGVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHR7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFwcGx5IHZpc3VhbCBmZWVkYmFjayBpZiBzcGVjaWZpZWRcclxuXHRcdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdFx0bGV0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKHRoaXMuZWxtIGFzIGFueSBhcyBFbGVtZW50Q1NTSW5saW5lU3R5bGUpLnN0eWxlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHNhdmUgY3VycmVudCB2YWx1ZXMgb2Ygc3R5bGUgcHJvcGVydGllcyBzcGVjaWZpZWQgaW4gZmVlZGJhY2sgYW5kIHNldCB0aGUgc3R5bGUgZnJvbVxyXG5cdFx0XHRcdFx0Ly8gdGhlIGZlZWRiYWNrXHJcblx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGUgPSB7fTtcclxuXHRcdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGVbcHJvcF0gPSBlbG1TdHlsZVtwcm9wXTtcclxuXHRcdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZmVlZGJhY2tbcHJvcF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIHdlIG5lZWQgdG8gc2V0IGRyb3AgZWZmZWN0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ092ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IGlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRpc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdPdmVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjYWxsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBhbmQgY29uc2lkZXIgZHJvcCBwb3NzaWJsZSBvbmx5IGlmIGl0IHJldHVybnMgdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0xlYXZlID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnTGVhdmUgY2FsbGJhY2sgb25seSBpZiB0aGUgbW91c2UgY29tcGxldGVseSBsZWF2ZXMgb3VyIGVsZW1lbnQsXHJcblx0XHQvLyB3aGljaCBtZWFucyBvdXIgY291bnRlciByZWFjaGVzIDAuXHJcblx0XHRpZiAoLS10aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPiAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZXZlcnQgdmlzdWFsIGZlZWRiYWNrIChpZiB3YXMgc3BlY2lmaWVkKVxyXG5cdFx0XHRpZiAodGhpcy5zYXZlZFN0eWxlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhbHRob3VnaCBzdHlsZSBwcm9wZXJ0eSBleGlzdHMgaW4gYm90aCBIVE1MRWxlbWVudCBhbmQgU1ZHRWxlbWVudCwgaXQgaXMgZGVmaW5lZCBvbiBhXHJcblx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0Zm9yKCBsZXQgcHJvcCBpbiB0aGlzLnNhdmVkU3R5bGUpXHJcblx0XHRcdFx0XHRlbG1TdHlsZVtwcm9wXSA9IHRoaXMuc2F2ZWRTdHlsZVtwcm9wXTtcclxuXHJcblx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyb3AgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXhwZWN0ZWRUeXBlczogc3RyaW5nW10gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzO1xyXG5cdFx0XHRsZXQgZGF0YU9iaiA9IHt9O1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIGUuZGF0YVRyYW5zZmVyLnR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgd2UgaGF2ZSBzb21lIGV4cGVjdGVkIHR5cGVzIGRlZmluZWQgc2tpcCB0aGUgY3VycmVudCB0eXBlIGlmIGl0IGlzIG5vIG9uZVxyXG5cdFx0XHRcdC8vIG9mIHRoZSBleHBlY3RlZFxyXG5cdFx0XHRcdGlmIChleHBlY3RlZFR5cGVzICYmIGV4cGVjdGVkVHlwZXMubGVuZ3RoID4gMCAmJiBleHBlY3RlZFR5cGVzLmluZGV4T2YoIHR5cGUpIDwgMClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgZGF0YSA9IERyYWdBbmREcm9wRGF0YS5nZXRPYmplY3REYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZGF0YU9ialt0eXBlXSA9IGRhdGE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0Lm9uRGF0YURyb3BwZWQoIGRhdGFPYmopO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldC5vbkRyb3AoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8vIGlmIHRoZSB0YXJnZXQgaW1wbGVtZW50cyBvbkRyYWdMZWF2ZSwgY2FsbCBpdCBub3cgdG8gYWxsb3cgaXQgdG8gY2xlYW51cFxyXG5cdFx0Ly9pZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlICE9PSB1bmRlZmluZWQpXHJcblx0XHQvL3tcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0Ly9cdHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0Ly99XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGRyYWdFbnRlckNvdW50ZXJcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlciA9IDA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGRlZmF1bHQgZHJvcCBlZmZlY3QgYWNjb3JkaW5nIHRvIHRoZSBhbGxvd2VkIGVmZmVjdHMgYW5kIGtleXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdERyb3BFZmZlY3QoZTogRHJhZ0V2ZW50KTogRHJhZ0Ryb3BFZmZlY3RcclxuXHR7XHJcblx0XHRsZXQgYWxsb3dlZEVmZmVjdHMgPSBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkIGFzIERyYWdBbGxvd2VkRWZmZWN0cztcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGUuYWx0S2V5ID8gRHJhZ0Ryb3BFZmZlY3QuTGluayA6IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IERyYWdEcm9wRWZmZWN0Lk5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZHJvcCBlZmZlY3QgaXMgYW1vbmcgdGhlIGFsbG93ZWQgZWZmZWN0c1xyXG5cdHByaXZhdGUgaXNEcm9wRWZmZWN0QWxsb3dlZCggZHJvcEVmZmVjdDogRHJhZ0Ryb3BFZmZlY3QsIGFsbG93ZWRFZmZlY3RzOiBEcmFnQWxsb3dlZEVmZmVjdHMpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBhbGxvd2VkRWZmZWN0cylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuQ29weTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGluazpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weU1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGlua01vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkxpbmsgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ICE9PSBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIElEcmFnVGFyZ2V0IGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyB0YXJnZXQuXHJcblx0cHVibGljIGRyYWdUYXJnZXQ6IElEcmFnVGFyZ2V0O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBzaW1wbGVEcmFnVGFyZ2V0OiBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHRhcmdldCBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEV2ZW50OiBEcmFnVGFyZ2V0RXZlbnQ7XHJcblxyXG5cdC8vIEEgZHJhZyB0YXJnZXQgZWxlbWVudCBjYW4gaGF2ZSBjaGlsZHJlbiB3aG8gYXJlIG5vdCBkcmFnIHRhcmdldHMgYnkgdGhlbXNlbHZlcy4gSW4gdGhpc1xyXG5cdC8vIGNhc2UsIHdoZW4gdGhlIG1vdXNlIGdvZXMgZnJvbSBvdXIgZWxlbWVudCB0byBhIGNoaWxkIGVsZW1lbnQsIHdlIHdpbGwgcmVjZWl2ZSBkcmFnZW50ZXJcclxuXHQvLyBldmVudCBvbiB0aGUgY2hpbGQgZWxlbWVudCBhbmQgZHJhZ2xlYXZlIG9uIG91cnMuIFdlIGRvbid0IHdhbnQgdG8gcmVwb3J0IHRoaXMgdGhyb3VnaFxyXG5cdC8vIG91ciBjdXN0b20gZXZlbnRzIGJlY2F1c2UgZnJvbSB0aGUgY2xsZXIncyBwb2ludCBvZiB2aWV3IHRoZSBtdXNlIGlzIHN0aWxsIHdpdGhpbiB0aGVcclxuXHQvLyBib3VuZHMgb2Ygb3VyIGVsZW1lbnQuIFRoZXJlZm9yZSwgd2Uga2VlcCB0aGUgY291bnRlciB2YXJpYWJsZSwgd2hpY2ggaXMgc2V0IHRvIDFcclxuXHQvLyB3aGVuIHRoZSBmaXJzdCBkcmFnZW50ZXIgZXZlbnQgKGZyb20gb3VyIGVsZW1lbnQgb3IgZnJvbSBhIGNoaWxkKSBpcyByZXBvcnRlZC4gT24gZWFjaFxyXG5cdC8vIHN1YnNlcXVlbnQgZHJhZ2VudGVyIGFuZCBkcmFnbGVhdmUgaXQgd2lsbCBiZSBpbmNyZW1lbnRlZCBhbmQgZGVjcmVtZW50ZWQgcmVzcGVjdGl2ZWx5LlxyXG5cdC8vIFdoZW4gdGhpcyBjb3VudGVyIHJlYWNoZXMgemVybywgd2UgY2FsbCB0aGUgb25EcmFnTGVhdmUgaGFuZGxlci5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFbnRlckNvdW50ZXI6IG51bWJlcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgaW4gdGhlIGZpcnN0IGNhbGwgdG8gdGhlIG9uRHJhZ0VudGVyIHdlIGRldGVybWluZWQgdGhhdCBkcm9wXHJcblx0Ly8gd2FzIHBvc3NpYmxlLlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIFNldCBvZiBzdHlsZXMgc2F2ZWQgYmVmb3JlIGFwcGx5aW5nIGZlZWRiYWNrIHN0eWxlcyBkdXJpbmcgZHJhZ2VudGVyIGV2ZW50LiBXZSB3aWxsIHVzZVxyXG5cdC8vIHRoZXNlIHN0eWxlcyB0byByZXN0b3JlIHRoZSBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSBkdXJpbmcgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRwcml2YXRlIHNhdmVkU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvUG9wdXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvRGlhbG9nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL01zZ0JveFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZXIvUm91dGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RyZWUvVHJlZUFwaVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92aXJ0L1Njcm9sbEF4aXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9WVGFibGVcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXN9IGZyb20gXCIuL2RuZC9EcmFnRHJvcEltcGxcIjtcclxucmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXMoKTtcclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEaWFsb2cgY2xhc3MgaXMgYSBwb3B1cCB3aXRoIHRocmVlIGRpc3RpbmN0IGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgUG9wdXBcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIFNsaWNlIGZvciB0aGUgdGhyZWUgZGlhbG9nIGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcblx0Ly8gVGhleSBjYW4gYmUgbGVmdCB1bmRlZmluZWQgaWYgYSBkZXJpdmVkIGNsYXNzIG92ZXJyaWRlcyB0aGUgYXBwcm9wcmlhdGUgcmVuZGVyIG1ldGhvZHMuXHJcblx0Y29uc3RydWN0b3IoIGNhcHRpb25BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIG1haW5BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIGJ1dHRvbkFyZWFTbGljZT86IG1pbS5TbGljZSwgZGxnU2xpY2U/OiBtaW0uU2xpY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoZGxnU2xpY2UpO1xyXG5cclxuXHRcdHRoaXMuY2FwdGlvbkFyZWFTbGljZSA9IGNhcHRpb25BcmVhU2xpY2UgPyBjYXB0aW9uQXJlYVNsaWNlIDoge307XHJcblx0XHR0aGlzLm1haW5BcmVhU2xpY2UgPSBtYWluQXJlYVNsaWNlID8gbWFpbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5idXR0b25BcmVhU2xpY2UgPSBidXR0b25BcmVhU2xpY2UgPyBidXR0b25BcmVhU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBEaWFsb2cgaXMgY3JlYXRlZFxyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtiYWNrZ3JvdW5kOlwicGlua1wiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCIsIGN1cnNvcjpcImRlZmF1bHRcIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UgPSB7IHN0eWxlOiB7cGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UgPSB7IHN0eWxlOiB7bWFyZ2luTGVmdDpcIjAuNWVtXCIsIG1pbldpZHRoOlwiNWVtXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9uIHdpdGggdGhlIGdpdmVuIGNoYXJhY3RlcmlzdGljcy4gVGhlIGtleSBwYXJhbWV0ZXIgaW5kaWNhdGVzIHRoZSB2YWx1ZSB0aGF0IGlzXHJcblx0Ly8gcGFzc2VkIHRvIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gVGhlIG9wdGlvbmFsIGluZGV4IHBhcmFtZXRlciBzcGVjaWZpZXNcclxuXHQvLyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGJ1dHRvbiBzaG91bGQgYmUgYWRkZWQuXHJcblx0cHVibGljIGFkZEJ1dHRvbiggc2xpY2U6IG1pbS5TbGljZSwga2V5PzogYW55LCBjYWxsYmFjaz86IChrZXk6IGFueSkgPT4gdm9pZCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IERsZ0J0bkluZm8gPSB7IHNsaWNlLCBrZXksIGNhbGxiYWNrLCByZWY6IG5ldyBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PigpIH07XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5wdXNoKCBpbmZvKTtcclxuXHRcdGVsc2UgaWYgKGluZGV4ID09PSAwKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnVuc2hpZnQoIGluZm8pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXggLSAxLCAwLCBpbmZvKTtcclxuXHJcblx0XHRpZiAodGhpcy5idXR0b25BcmVhUHJveHkpXHJcblx0XHRcdHRoaXMuYnV0dG9uQXJlYVByb3h5LnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBidXR0b24gYXQgdGhlIGdpdmVuIGluZGV4LlxyXG5cdHB1YmxpYyByZW1vdmVCdXR0b24oIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHRpZiAodGhpcy5idXR0b25BcmVhUHJveHkpXHJcblx0XHRcdHRoaXMuYnV0dG9uQXJlYVByb3h5LnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0dGhpcy5jYXB0aW9uQXJlYVByb3h5ID0gbmV3IG1pbS5GdW5jUHJveHkoICgpID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBjYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UsIHRoaXMuZ2V0Q2FwdGlvbkFyZWFTbGljZSgpKTtcclxuXHRcdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdDYXB0aW9uXCIgbW91c2Vkb3duPXt0aGlzLm9uU3RhcnRNb3ZlfSBzdHlsZT17Y2FwdGlvbkFyZWFTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzcz17Y2FwdGlvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5jYXB0aW9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHR7Y2FwdGlvbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubWFpbkFyZWFQcm94eSA9IG5ldyBtaW0uRnVuY1Byb3h5KCAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlID0gbWltLlNsaWNlcy5NZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlLCB0aGlzLmdldE1haW5BcmVhU2xpY2UoKSk7XHJcblx0XHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnTWFpbkNvbnRlbnRcIiBzdHlsZT17bWFpbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e21haW5BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4ubWFpbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdFx0e21haW5BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmJ1dHRvbkFyZWFQcm94eSA9IG5ldyBtaW0uRnVuY1Byb3h5KCAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSwgdGhpcy5nZXRCdXR0b25BcmVhU2xpY2UoKSk7XHJcblx0XHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnQnV0dG9uc1wiIHN0eWxlPXtidXR0b25BcmVhU2xpY2Uuc3R5bGV9IGNsYXNzPXtidXR0b25BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4uYnV0dG9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHR7YnV0dG9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdFx0e3RoaXMuYnV0dG9uSW5mb3MubWFwKCAoaW5mbykgPT5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGV0IGJ0blNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlLCBpbmZvLnNsaWNlKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpbmZvLmtleX0gY2xpY2s9e2luZm8uY2FsbGJhY2sgJiYgKCgpID0+IGluZm8uY2FsbGJhY2soaW5mby5rZXkpKX1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtidG5TbGljZS5zdHlsZX0gY2xhc3M9e2J0blNsaWNlLmNsYXNzTmFtZX0gey4uLmJ0blNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHRcdFx0XHR7YnRuU2xpY2UuY29udGVudH1cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5jYXB0aW9uQXJlYVByb3h5fVxyXG5cdFx0XHRcdHt0aGlzLm1haW5BcmVhUHJveHl9XHJcblx0XHRcdFx0e3RoaXMuYnV0dG9uQXJlYVByb3h5fVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jYXB0aW9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGJ1dHRvbiBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRCdXR0b25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBwdXRzIG1vdXNlIGRvd24gaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgb25TdGFydE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLnN0YXJ0TW92ZSggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMuY2FwdGlvbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgQ2FwdGlvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgTWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5tYWluQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBNYWluQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLm1haW5BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IEJ1dHRvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5idXR0b25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IEJ1dHRvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5idXR0b25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgYnV0dG9ucyBhZGRlZCB0byB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBidXR0b25JbmZvczogRGxnQnRuSW5mb1tdID0gW107XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBidXR0b24gYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdENhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBtYWluIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRNYWluQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0QnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYSBidXR0b24gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvblNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGxnQnRuSW5mbyBjbGFzcyBpcyBhIGhlbHBlciBjbGFzcyB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgYnV0dG9uIGFkZGVkIHRvIHRoZSBkaWFsb2cuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG50eXBlIERsZ0J0bkluZm8gPVxyXG57XHJcblx0c2xpY2U6IG1pbS5TbGljZSxcclxuXHRrZXk6IGFueSxcclxuXHRjYWxsYmFjazogKGtleTogYW55KSA9PiB2b2lkLFxyXG5cdHJlZjogbWltLlJlZjxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGlhbG9nQnV0dG9uIGVudW1lcmF0aW9uIGRlZmluZXMgY29uc3RhbnRzIHRvIGluZGljYXRlIHN0YW5kYXJkIGJ1dHRvbnMgdXNlZCBpbiBkaWFsb2dzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGVudW0gRGlhbG9nQnV0dG9uXHJcbntcclxuXHROb25lID0gMHgwLFxyXG5cdE9LID0gMHgxLFxyXG5cdENhbmNlbCA9IDB4MixcclxuXHRZZXMgPSAweDQsXHJcblx0Tm8gPSAweDgsXHJcblx0Q2xvc2UgPSAweDEwLFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RpYWxvZywgRGlhbG9nQnV0dG9ufSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNob3dNb2RhbCggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKTogUHJvbWlzZTxNc2dCb3hCdXR0b25zPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdFx0dGhpcy5idXR0b25zID0gYnV0dG9ucztcclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBjYXB0aW9uLlxyXG5cdHByb3RlY3RlZCBnZXRDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB7IGNvbnRlbnQ6IHRoaXMudGl0bGUsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJEb2RnZXJCbHVlXCIgfSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IHsgY2xzLCBjb2xvciB9ID0gdGhpcy5nZXRJY29uQ2xhc3NBbmRDb2xvcigpO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtjbHMgJiYgPGkgY2xhc3M9e1wiZmEgZmEtM3ggXCIgKyBjbHN9IHN0eWxlPXt7Y29sb3I6Y29sb3J9fS8+fVxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLCBtaW5XaWR0aDpcIjE1ZW1cIiwgbWF4V2lkdGg6XCI0MGVtXCIsIG1pbkhlaWdodDogXCIyZW1cIixcclxuXHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDpcIjIwZW1cIiwgb3ZlcmZsb3c6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdHt0aGlzLm1lc3NhZ2V9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PjtcclxuXHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmJ1dHRvbnMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5DbG9zZTpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDbG9zZVwiLCBEaWFsb2dCdXR0b24uQ2xvc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9LOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT2tDYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm86XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm9DYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGdldEljb25DbGFzc0FuZENvbG9yKCk6IHsgY2xzOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uSW5mbzogcmV0dXJuIHsgY2xzOiBcImZhLWluZm8tY2lyY2xlXCIsIGNvbG9yOiBcImJsdWVcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uV2FybmluZzogcmV0dXJuIHsgY2xzOiBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5FcnJvcjogcmV0dXJuIHsgY2xzOiBcImZhLW1pbnVzLWNpcmNsZVwiLCBjb2xvcjogXCJyZWRcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uUXVlc3Rpb246IHJldHVybiB7IGNsczogXCJmYS1xdWVzdGlvbi1jaXJjbGVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIHsgY2xzOiBcIlwiLCBjb2xvcjogXCJcIiB9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IERpYWxvZ0J1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbigge2NvbnRlbnQ6IHRleHR9LCBrZXksIHRoaXMub25CdXR0b25DbGlja2VkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkJ1dHRvbkNsaWNrZWQgPSAoIGtleTogYW55KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuY2xvc2UoIGtleSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cdC8vIFRpdGxlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG5cclxuXHQvLyBCdXR0b25zXHJcblx0cHJpdmF0ZSBidXR0b25zOiBNc2dCb3hCdXR0b25zO1xyXG5cclxuXHQvLyBJY29uXHJcblx0cHJpdmF0ZSBpY29uOiBNc2dCb3hJY29uO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgYnV0dG9ucyBhbmQgYnV0dG9uIGNvbWJpbmF0aW9ucyBmb3JcclxuICogbWVzc2FnZSBib3hlcy5cclxuICovXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEJ1dHRvbnNcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSAwLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIENsb3NlIGJ1dHRvbiAqL1xyXG5cdENsb3NlLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIE9LIGJ1dHRvbiAqL1xyXG5cdE9LLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIE9LIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdE9rQ2FuY2VsLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcyBhbmQgTm8gYnV0dG9ucyAqL1xyXG5cdFllc05vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNc2dCb3hJY29uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBpY29ucyBmb3IgbWVzc2FnZSBib3guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZW51bSBNc2dCb3hJY29uXHJcbntcclxuXHROb25lID0gMCxcclxuXHRJbmZvLFxyXG5cdFdhcm5pbmcsXHJcblx0RXJyb3IsXHJcblx0UXVlc3Rpb24sXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUG9wdXAgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBtb2RlbGVzcyBhbmQgbW9kYWwgcG9wdXBzLiBJdCBwcm92aWRlcyB0aGUgYmFzaWMgbWVjaGFuaWNzXHJcbi8vIGZvciBzaG93aW5nIGFuZCBjbG9zaW5nIHRoZSBwb3B1cHMgaW5jbHVkaW5nIG1vdmluZyBpdCB3aXRoIHRoZSBtb3VzZS4gVGhlIGNvbnRlbnQgb2YgdGhlXHJcbi8vIHBvcHVwIGlzIGVpdGhlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0dWN0b3Igb3IgaXMgcHJvdmlkZWQgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFBvcHVwIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgdGhlIG9iamVjdCBkZXNjcmliaW5nIHRoZSBzdHlsZXMgYW5kIGNvbnRlbnQgdGhhdCBzaG91bGQgYmVcclxuXHQvLyBkaXNwbGF5ZWQgd2l0aGluIHRoZSBwb3B1cC4gSXQgY2FuIGJlIGxlZnQgdW5kZWZpbmVkIGlmIGEgZGVyaXZlZCBjbGFzcyBvdmVycmlkZXMgdGhlXHJcblx0Ly8gZ2V0RGxnU2xpY2UgbWV0aG9kLlxyXG5cdGNvbnN0cnVjdG9yKCBkbGdTbGljZT86IG1pbS5TbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5kbGdTbGljZSA9IGRsZ1NsaWNlID8gZGxnU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBQb3B1cCBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIVBvcHVwLkRlZmF1bHREbGdTbGljZSlcclxuXHRcdFx0UG9wdXAuRGVmYXVsdERsZ1NsaWNlID0geyBzdHlsZTogeyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJXaWR0aDogXCIxcHhcIiwgcGFkZGluZzogXCIwXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIHRoZSBkaWFsb2cgYXMgYSBtb2RlbGVzcyBwb3B1cC4gSXQgc2hvdWxkIGJlIGNsb3NlZCB3aXRoIHRoZSBDbG9zZSBtZXRob2QuXHJcblx0cHVibGljIG9wZW4oIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsb3NlcyB0aGUgZGlhbG9nIG9wZW5lZCBhcyBhIG1vZGVsZXNzIHBvcHVwLiBUaGlzIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCB0byBjbG9zZSBhIG1vZGFsXHJcblx0Ly8gZGlhbG9nLlxyXG5cdHB1YmxpYyBjbG9zZSggcmV0VmFsPzogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLmNsb3NlKCk7XHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKCByZXRWYWwpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyBhIG1vZGFsIGRpYWxvZy4gVGhlIGRpYWxvZyBpcyBjbG9zZWQgd2l0aCB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgYW5kIHRoZSBwYXJhbWV0ZXJcclxuXHQvLyBwYXNzZWQgdG8gdGhlIENsb3NlTW9kYWwgbWV0aG9kIGlzIHJldHVybmVkIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZS5cclxuXHRwdWJsaWMgc2hvd01vZGFsKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggXCJEaWFsb2cgaXMgYWxyZWFkeSBvcGVuXCIpO1xyXG5cclxuXHRcdGxldCBwcm9taXNlOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZTxhbnk+KCAocmVzb2x2ZSkgPT4ge3RoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSByZXNvbHZlfSk7XHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93TW9kYWwoKTtcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3Blbi5cclxuXHRwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGcgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kYWwuXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RhcnRzIG1vbml0b3JpbmcgbW91c2UgbW92ZW1lbnRzIGFuZCBtb3ZlcyB0aGUgZGlhbG9nIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludGVudGVkIHRvIGJlIGNhbGxlZCBmcm9tIGEgbW91c2Vkb3duIGV2ZW50IHNvbWV3aGVyZSB3aXRoaW4gdGhlIHBvcHVwLlxyXG5cdHB1YmxpYyBzdGFydE1vdmUoIGU6IE1vdXNlRXZlbnQpXHJcblx0e1xyXG5cdFx0Ly8gd2UgcHJldmVudCBkZWZhdWx0IGFjdGlvbiBhbmQgcHJvcGFnYXRpb24gc28gdGhhdCBtb3VzZSBtb3ZlbWVudHMgZG9uJ3QgY2F1c2VcclxuXHRcdC8vIHRlc3QgaW4gdGhlIHBvcHVwIGFuZCBvbiB0aGUgcGFnZSB0byBiZSBzZWxlY3RlZC5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IHJlY3QgPSB0aGlzLmRsZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyBcInB4XCI7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuXHQvLyBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG5cdC8vIGFibGUgdG8gY29udGludWUgbW92aW5nIGl0LlxyXG5cdHB1YmxpYyBtb3ZlKCBuZXdYOiBudW1iZXIsIG5ld1k6IG51bWJlcilcclxuXHR7XHJcblx0XHRpZiAobmV3WCA8IDApXHJcblx0XHRcdG5ld1ggPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WCArIDMwID4gd2luZG93LmlubmVyV2lkdGgpXHJcblx0XHRcdG5ld1ggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDMwO1xyXG5cclxuXHRcdGlmIChuZXdZIDwgMClcclxuXHRcdFx0bmV3WSA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdZICsgMzAgPiB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcblx0XHRcdG5ld1kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlIGFuZCBhbHNvIHJlbWVtYmVyIHRoZW0gaW4gb3VyIFNsaWNlIHNvIHRoYXQgdGhleSBjYW4gYmUgc3BlY2lmaWVkXHJcblx0XHQvLyBhcyBwcm9wZXJ0aWVzIGlmIHRoZSBjb21wb25lbnQgaXMgcmVyZW5kZXJlZFxyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSBuZXdYICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gbmV3WSArIFwicHhcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaWFsb2cgcmVmPXtyZWYgPT4gdGhpcy5kbGcgPSByZWZ9IHN0eWxlPXt0aGlzLmN1cnJEbGdTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e3RoaXMuY3VyckRsZ1NsaWNlLmNsYXNzTmFtZX0gey4uLnRoaXMuY3VyckRsZ1NsaWNlLnByb3BzfT5cclxuXHRcdFx0e3RoaXMuY3VyckRsZ1NsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2RpYWxvZz47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFsbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGdTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmVuZGVycyB0aGUgcG9wdXAuXHJcblx0cHJpdmF0ZSBjcmVhdGUoIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlZmluZSBwb3NpdGlvbmluZyBzdHlsZXMuIElmIHggYW5kL29yIHkgYXJlIHVuZGVmaW5lZCwgd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5XHJcblx0XHQvLyBhbmQvb3IgdmVydGljYWxseVxyXG5cdFx0bGV0IHN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHsgcG9zaXRpb246IFwiZml4ZWRcIiB9XHJcblx0XHRpZiAoeCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuXHRcdFx0c3R5bGUucmlnaHQgPSBcIjBweFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuXHRcdFx0c3R5bGUubWFyZ2luTGVmdCA9IFwiMFwiO1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh5ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblx0XHRcdHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XHJcblx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZSA9IG1pbS5TbGljZXMuTWVyZ2VTbGljZXMoIFBvcHVwLkRlZmF1bHREbGdTbGljZSwgdGhpcy5nZXREbGdTbGljZSgpLCB7c3R5bGV9KTtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSA8ZGl2PiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIGVuZCBvZiA8Ym9keT4uIFRoZW4gcmVuZGVyIG91ciBjb21wb25lbnQnc1xyXG5cdFx0Ly8gY29udGVudCB1bmRlciBpdC5cclxuXHRcdHRoaXMuYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHRtaW0ubW91bnRTeW5jKCB0aGlzLCB0aGlzLmFuY2hvckRpdik7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVuZGVycyBhbmQgZGVzdHJveXMgdGhlIGRpYWxvZy5cclxuXHRwcml2YXRlIGRlc3Ryb3koKTogdm9pZFxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuXHRcdG1pbS51bm1vdW50U3luYyggdGhpcy5hbmNob3JEaXYpO1xyXG5cdFx0dGhpcy5hbmNob3JEaXYucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKCBlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBFc2NcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbk1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLm1vdmUoIGUuY2xpZW50WCAtIHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCwgZS5jbGllbnRZIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRZKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25TdG9wTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBwcm92aWRlZCBlaXRoZXIgZXh0ZXJuYWx5IG9yIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHRwcml2YXRlIGRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBEbGdTbGljZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5EbGdTbGljZTsgfVxyXG5cclxuXHQvLyBDdXJyZW50IHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHRoYXQgY29tYmluZSBvdXIgZGVmYXVsdHMgcGx1cyB0aG9zZSBwcm92aWRlZFxyXG5cdC8vIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzIHBsdXMgdGhvc2UgcmVmbGVjdGluZyB0aGUgZGlhbG9nIHBvc2l0aW9uaW5nLlxyXG5cdHByaXZhdGUgY3VyckRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIEVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGRpYWxvZyBpcyByZW5kZXJlZC4gVGhpcyBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZVxyXG5cdC8vIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkIGFuZCBpcyByZW1vdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXHJcblx0cHJpdmF0ZSBhbmNob3JEaXY6IEhUTUxFbGVtZW50O1xyXG5cclxuXHQvLy8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHQvL3ByaXZhdGUgZGxnUmVmID0gbmV3IG1pbS5SZWY8SFRNTERpYWxvZ0VsZW1lbnQ+KCByZWYgPT4gdGhpcy5kbGcgPSByZWYpO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaWFsb2c+IGVsZW1lbnQgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQuXHJcblx0cHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuXHQvLyBQcm9taXNlIHdoaWNoIGlzIGNyZWF0ZWQgZm9yIG1vZGFsIGRpYWxvZyBhbmQgd2hpY2ggaXMgcmVzb2x2ZWQgd2hlbiB0aGUgbW9kYWwgZGlhbG9nXHJcblx0Ly8gaXMgY2xvc2VkLiBUaGUgcHJvbWlzZSBpcyByZXR1cm5lZCBmcm9tIFNob3dNb2RhbC5cclxuXHRwcml2YXRlIG1vZGFsUHJvbWlzZVJlc29sdmVGdW5jOiAoYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaXY+IGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2FwdGlvbi5cclxuXHRwcml2YXRlIGNhcHRpb24gPSBuZXcgbWltLlJlZjxIVE1MRWxlbWVudD4oKTtcclxuXHJcblx0Ly8gT2Zmc2V0cyBvZiB0aGUgcG9pbnQgd2hlcmUgdGhlIG1vdmUgc3RhcnRlZCBmcm9tIHRoZSBkaWFsb2cgdG9wLWxlZnQgY29ybmVyLiBXZSB1c2UgdGhlbVxyXG5cdC8vIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbG9nIHRvcC1sZWZ0IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcyB3aGlsZSBtb3ZlIGlzXHJcblx0Ly8gaW4gcHJvZ3Jlc3MuXHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRZOiBudW1iZXI7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgPGRpYWxvZz4gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdERsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCJcclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbi8vIGltcG9ydCB7SUh0bWxBRWxlbWVudFByb3BzfSBmcm9tIFwiLi4vZGlzdC9jb3JlL0h0bWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvZGlzdC9jb3JlL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBSb3V0ZXI6IElSb3V0ZXJTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclNlcnZpY2UgaXMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBJdCBhbGxvd3NcclxuICogc3Vic2NyaWJlcnMgdG8gbmF2aWdhdGUgdG8gcGF0aHMgZGVmaW5lZCBieSBSb3V0ZXIncyByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJTZXJ2aWNlXHJcbntcclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBvYmplY3QgY29udGFpbmluZyBmaWVsZCB2YWx1ZXMgdGhhdCBpcyBwYXNzZWQgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgcm91dGUuIFdoZW5cclxuICogbmF2aWdhdGluZyBieSByb3V0ZSBJRCwgdGhlIGZpZWxkcyBhcmUgcGFzc2VkIGV4cGxpY2l0bHkuIFdoZW4gbmF2aWdhdGluZyBieSBVUkwsIHRoZSBmaWVsZHNcclxuICogYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkwgYWNjb3JkaW5nIHRvIHRoZSBVUkwgcGF0dGVybiBpbiB0aGUgcm91dGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZUZpZWxkcyA9IHsgW1A6IHN0cmluZ106IG1pbXVybC5GaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5IGZvciBhIHJvdXRlLiBJdCBjYW4gcmV0dXJuIGEgUHJvbWlzZSBpblxyXG4gKiB3aGljaCBjYXNlIHRoZSBSb3V0ZXIgd2lsbCBkaXNwbGF5IHByb2dyZXNzIFVJIHVudGlsIHRoZSBjb250ZW50IGJlY29tZXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2VG9Sb3V0ZUZ1bmNUeXBlID0gKGZpZWxkczogUm91dGVGaWVsZHMpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gbmF2aWdhdGluZyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHJvdXRlLiBJZiBmYWxzZVxyXG4gKiBpcyByZXR1cm5lZCwgbmF2aWdhdGlvbiBkb2Vzbid0IGhhcHBlbi4gVGhpcyBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlclxyXG4gKiBhYm91dCB1bnNhdmVkIGRhdGEuIElmIFByb21pc2UgaXMgcmV0dXJuZWQsIHRoZSBSb3V0ZXIgd2lsbCB3YWl0IHVudGlsIHRoZSByZXNwb25zZSBpcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZGcm9tUm91dGVGdW5jVHlwZSA9ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlIGludGVyZmFjZSBkZWZpbmVzIGEgbmF2aWdhdGlvbiB0YXJnZXQuIFJvdXRlcyBjYW4gaGF2ZSBzdWItcm91dGVzLCB3aGljaCBjcmVhdGVzIGFcclxuICogaGllcmFyY2h5IG9mIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFVuaXF1ZSAoYnV0IG9wdGlvbmFsKSBJRCB0aGF0IGFsbG93cyBuYXZpZ2F0aW5nIHRvIHRoZSB0YXJnZXQgdXNpbmcgYSBzaW1wbGUgSUQgaW5zdGVhZCBvZlxyXG5cdCAqIHBhdGguIFRoZSBwYXRoIG1lbWJlciB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGFkZHJlc3MgY29udHJvbC5cclxuXHQgKi9cclxuXHRpZD86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogVVJMIHBhdHRlcm4gLSBjYW4gY29udGFpbiBuYW1lZCBwYXJhbWV0ZXJzIChhcyBpbiAvdXNlcnMve3VpZH0pLiBUaGlzIGNhbiBiZSBsZWZ0IGVtcHR5XHJcblx0ICogaWYgb25seSBpZCBpcyB1c2VkXHJcblx0ICovXHJcblx0dXJsUGF0dGVybj86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5LlxyXG5cdCAqL1xyXG5cdG5hdlRvRnVuYz86IE5hdlRvUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyIGFib3V0IHVuc2F2ZWQgZGF0YS5cclxuXHQgKi9cclxuXHRuYXZGcm9tRnVuYz86IE5hdkZyb21Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcmRlcmVkIGxpc3Qgb2YgUm91dGUgb2JqZWN0cywgd2hpY2ggYXJlIHN1Yi1yb3V0ZXMgb2YgdGhpcyByb3V0ZS5cclxuXHQgKi9cclxuXHRzdWJSb3V0ZXM/OiBSb3V0ZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZSBmb3IgSGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uIEl0IHJlbWVtYmVycyB0aGVcclxuICogcGFyYW1ldGVycyBvZiBhIHJvdXRlIHRvIG5hdmlnYXRlIHRvIHdoZW4gdGhlIHVzZXIgZ29lcyBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXInc1xyXG4gKiBoaXN0b3J5LlxyXG4gKi9cclxuY2xhc3MgUm91dGVTdGF0ZVxyXG57XHJcblx0cm91dGVJRDogc3RyaW5nO1xyXG5cdHJvdXRlVVJMOiBzdHJpbmc7XHJcblx0ZmllbGRzOiBSb3V0ZUZpZWxkcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGN1cnJlbnQgcm91dGUuXHJcbiAqIFRoaXMgYWxsb3dzIHRoZSByb3V0ZXIgZG8gaGF2ZSBpdHMgb3duIGNvbnRlbnQgLSB0aGUgc2FtZSBmb3IgYWxsIHJvdXRlcyAtIGFuZCBpbnNlcnQgdGhlXHJcbiAqIGN1cnJlbnQgcm91dGVyJ3MgY29udGVudCBpbnRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAocm91dGVDb250ZW50OiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSBhIHByb2dyZXNzIFVJIHdoaWxlIGl0IGlzIGxvYWRpbmdcclxuICogcm91dGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKCkgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJQcm9wcyBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5IEFQSSB0b1xyXG5cdCAqIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGNvbnRyb2xzQnJvd3Nlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB0aGF0IGlmIHRoaXMgcm91dGVyIGNhbm5vdCByZXNvbHZlIGEgcGF0aCwgaXQgd2lsbCBkZWxlZ2F0ZSB0byBhIHJvdXRlciB1cFxyXG5cdCAqIHRoZSBjb21wb25lbnQgY2hhaW4gKGlmIHRoZXJlIGlzIG9uZSkuXHJcblx0ICovXHJcblx0Y2hhaW5zVG9IaWdoZXJSb3V0ZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuIERlZmF1bHQgdmFsdWUgaXNcclxuXHQgKiB0cnVlLlxyXG5cdCAqL1xyXG5cdGJhc2VVUkw/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZXIgY29tcG9uZW50IHByb3ZpZGVzIGNsaWVudC1zaWRlIHJvdXRpbmcuIEl0IHdvcmtzIHdpdGggUm91dGUgb2JqZWN0cyB0aGF0IGRlZmluZVxyXG4gKiBhdmFpbGFibGUgbmF2aWdhdGlvbiB0YXJnZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlciBleHRlbmRzIG1pbS5Db21wb25lbnQ8SVJvdXRlclByb3BzLFJvdXRlW10+IGltcGxlbWVudHMgSVJvdXRlclNlcnZpY2UsIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogSVJvdXRlclByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCByb3V0ZSBvZiB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGUoIHJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgZ2l2ZW4gcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0LlxyXG5cdCAqIEBwYXJhbSByb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRvIGFkZFxyXG5cdCAqIEBwYXJhbSBpbmRleCBJbmRleCBhdCB3aGljaCB0byBhZGQgdGhlIHJvdXRlIG9iamVjdC4gSWYgdGhlIGluZGV4IGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuXHQgKlx0XHRyb3V0ZSBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LiBJZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGxcclxuXHQgKlx0XHRiZSB0aHJvd24uXHJcblx0ICovXHJcblx0cHVibGljIGFkZFJvdXRlKCByb3V0ZTogUm91dGUsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJSb3V0ZSBvYmplY3QgY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDAsIHJvdXRlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yb3V0ZXMucHVzaCggcm91dGUpO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGFkZCB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgdG8gdGhlIG1hcFxyXG5cdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCByb3V0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QgYW5kIHJldHVybnMgdGhlIFJvdXRlIG9iamVjdC4gSWYgaW5kZXggaXNcclxuXHQgKiBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpbmRleFxyXG5cdCAqIEByZXR1cm4gUm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0aGF0IHdhcyByZW1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVSb3V0ZSggaW5kZXg6IG51bWJlcik6IFJvdXRlXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDEpWzBdO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IHJlbW92ZSB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgZnJvbSB0aGUgbWFwXHJcblx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGUpO1xyXG5cclxuXHRcdHJldHVybiByb3V0ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBtYXAgb2Ygcm91dGVzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSBhZGRSb3V0ZVRvTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuc2V0KCByb3V0ZS5pZCwgcm91dGUpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IGZyb20gdGhlIG1hcCBvZiByb3V0cyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgcmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuZGVsZXRlKCByb3V0ZS5pZCk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogQHBhcmFtIHVybCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gbmF2aWdhdGUgdG9cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBbcm91dGUsIGZpZWxkc10gPSB0aGlzLmZpbmRSb3V0ZUJ5VVJMKCB1cmwpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5VVJMKCB1cmwsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHJvdXRlXHJcblx0ICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgcm91dGUncyBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBSb3V0ZXIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGVcclxuXHQgKlx0XHRicm93c2VyJ3MgaGlzdG9yeS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzQnlJRC5nZXQoIGlkKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeUlEKCBpZCwgZmllbGRzKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgd2UgbWF5IG5lZWQgdG8gc3Vic3RpdHV0ZSBwYXJhbWV0ZXJzIGluIHRoZVxyXG5cdFx0Ly8gcm91dGUncyBVUkwgcGF0dGVyblxyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR1cmwgPSByb3V0ZS51cmxQYXR0ZXJuO1xyXG5cdFx0XHRpZiAodXJsICYmIGZpZWxkcylcclxuXHRcdFx0e1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmRzIGEgcm91dGUgYnkgZ29pbmcgdGhyb3VnaCB0aGUgcm91dGUgaGllcmFyY2h5IGFuZCB0cnlpbmcgdG8gbWF0Y2ggdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBJZiB0aGUgcm91dGUgaXMgZm91bmQsIHRoZSBVUkwgaXMgcGFyc2VkIGFuZCBhbnkgcGFyYW1ldGVycyBhcmUgZXh0cmFjdGVkIGZyb20gaXQuXHJcblx0ICogQHBhcmFtIHVybFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZmluZFJvdXRlQnlVUkwoIHVybDogc3RyaW5nKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRyZXR1cm4gUm91dGVyLmZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmwsIHRoaXMucm91dGVzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTG9va3MgZm9yIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTCBhbW9uZyB0aGUgZ2l2ZW4gYXJyYXkgb2YgUm91dGUgb2JqZWN0cyBhbmRcclxuXHQgKiByZWN1cnNpdmVseSBhbW9uZyB0aGVpciBzdWItcm91dGVzLlxyXG5cdCAqIEBwYXJhbSB1cmwgVVJMIHRvIG1hdGNoXHJcblx0ICogQHBhcmFtIHJvdXRlcyBBcnJheSBvZiBSb3V0ZSBvYmplY3RzIHRvIG1hdGNoIHdpdGggdGhlIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmw6IHN0cmluZywgcm91dGVzOiBSb3V0ZVtdKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRmb3IoIGxldCByb3V0ZSBvZiByb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBtYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdXJsLCByb3V0ZS51cmxQYXR0ZXJuKTtcclxuXHRcdFx0aWYgKG1hdGNoUmVzdWx0ICYmIG1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHRcdFx0cmV0dXJuIFtyb3V0ZSwgbWF0Y2hSZXN1bHQuZmllbGRzXTtcclxuXHRcdFx0ZWxzZSBpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJvb3RBbmRGaWVsZHMgPSBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgcm91dGUuc3ViUm91dGVzKTtcclxuXHRcdFx0XHRpZiAocm9vdEFuZEZpZWxkc1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByb290QW5kRmllbGRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtudWxsLCBudWxsXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiByb3V0ZSBwYXNzaW5nIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbmF2aWdhdGVUb1JvdXRlKCByb3V0ZTogUm91dGUsIHVybDogc3RyaW5nLCBmaWVsZHM6IFJvdXRlRmllbGRzLFxyXG5cdFx0XHRcdFx0bWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdC8vLy8gY2hlY2sgaWYgdGhlIG5ldyByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCByb3V0ZSBhbmQgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdC8vaWYgKHJvdXRlID09PSB0aGlzLmN1cnJSb3V0ZSlcclxuXHRcdC8vXHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBjdXJyZW50IHJvdXRlLCBhc2sgaXQgaWYgd2UgY2FuIGxlYXZlIGl0XHJcblx0XHRpZiAodGhpcy5jdXJyUm91dGUgJiYgdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZXQ6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0gdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMoKTtcclxuXHRcdFx0aWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdFx0cmV0ID0gYXdhaXQgKHJldCBhcyBQcm9taXNlPGJvb2xlYW4+KTtcclxuXHJcblx0XHRcdGlmICghcmV0KVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgdXNlIEhpc3RvcnkgQVBJIHRvIGNoYW5nZSBzdGF0ZVxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyICYmIG1ha2VIaXN0b3J5RW50cnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogcm91dGUuaWQsIHJvdXRlVVJMOiB1cmwsIGZpZWxkcyB9O1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSggc3RhdGUsIFwiXCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByb3V0ZSBhbmQgZ2V0IGl0cyBjb250ZW50XHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IHJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IHJvdXRlLm5hdlRvRnVuYyA/IHJvdXRlLm5hdlRvRnVuYyggZmllbGRzKSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGF3YWl0IChjb250ZW50IGFzIFByb21pc2U8YW55Pik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0Ly8gcmVxdWVzdCB0byBiZSB1cGRhdGVkIHNvIHRoYXQgb3VyIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWRcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBlcnJvciB3YXMgcmFpc2VkIGJ5IG9uZSBvZiB0aGUgZGVzY2VuZGFudCBjb3BvbmVudHMuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy52bi5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIHB1Ymxpc2ggb3Vyc2VsdmVzIGFzIGEgcm91dGVyIHNlcnZpY2VcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIsIHRoaXMpO1xyXG5cclxuXHRcdC8vIGlmIGluc3RydWN0ZWQgc28sIHN1YnNjcmliZSB0byBhIHJvdXRlciBzZXJ2aWNlIGltcGxlbWVudGVkIGJ5IGFueSBvZiBjb21wb25lbnRzXHJcblx0XHQvLyB1cCB0aGUgY2hhaW5cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxuXHRcdFx0dGhpcy52bi5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHJvdXRlIHRvIGRpc3BsYXlcclxuXHRcdGxldCBmaXJzdFJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRlc1swXSA6IG51bGw7XHJcblx0XHRpZiAoIWZpcnN0Um91dGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IGZpcnN0Um91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMgPyBmaXJzdFJvdXRlLm5hdlRvRnVuYygge30pIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXCJQbGVhc2Ugd2FpdCB3aGlsZSBjb250ZW50IGlzIGxvYWRpbmcuLi5cIjtcclxuXHRcdFx0KGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KS50aGVuKCAoIGRlbGF5ZWRDb250ZW50OiBhbnkpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBkZWxheWVkQ29udGVudDtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGVzdGFibGlzaCBiYXNlIFVSTCByZWxhdGl2ZSB0byB3aGljaCBhbGwgcGF0aHMgd2lsbCBiZSBjb25zaWRlcmVkXHJcblx0XHRcdGlmICghdGhpcy5iYXNlVVJMKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgcG9wc3RhdGUgZXZlbnQgZm9yIG1vbml0b3JpbmcgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kc1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiBmaXJzdFJvdXRlLmlkLCByb3V0ZVVSTDogZmlyc3RSb3V0ZS51cmxQYXR0ZXJuLCBmaWVsZHM6IG51bGwgfTtcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoIHN0YXRlLCBcIlwiLCBmaXJzdFJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnZuLnVuc3Vic2NyaWJlU2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0dGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlydFJlbmRlciggdGhpcy5jdXJyUm91dGVDb250ZW50KTtcclxuXHR9XHJcblx0XHJcblxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBub2RlUGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly90aGlzLmVycm9yID0gZXJyO1xyXG5cdFx0Ly90aGlzLmVycm9yUGF0aCA9IG5vZGVQYXRoO1xyXG5cdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXHJcblx0XHRcdDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInBpbmtcIiwgZGlzcGxheTpcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtlcnJ9XHJcblx0XHRcdFx0e25vZGVQYXRoICYmIG5vZGVQYXRoLm1hcCggKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogXCJWaXJ0dWFsXCIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuIFJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmdcclxuXHQgKiBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZWl0aGVyIGNhbGxzXHJcblx0ICogdGhlIG91dGVyQ29udGVudEZ1bmMgaWYgZGVmaW5lZCBvciBqdXN0IHJldHVybnMgdGhlIGNvbnRlbnQgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjdXJyUm91dGVDb250ZW50XHJcblx0ICogQHJldHVybiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdmlydFJlbmRlciggY3VyclJvdXRlQ29udGVudDogYW55KTogYW55XHJcblx0e1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5vdXRlckNvbnRlbnRGdW5jID8gdGhpcy5vdXRlckNvbnRlbnRGdW5jKCBjdXJyUm91dGVDb250ZW50KSA6IGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gY3VyclJvdXRlQ29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVhY3RzIG9uIHVzZXIgdXNpbmcgYmFjayBhbmQgZm9yd2FyZCBidXR0b25zLlxyXG5cdHByaXZhdGUgb25Qb3BzdGF0ZSA9ICggZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSBlLnN0YXRlIGFzIFJvdXRlU3RhdGU7XHJcblx0XHRpZiAoIXN0YXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0YXRlLnJvdXRlSUQpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeUlEKCBzdGF0ZS5yb3V0ZUlELCBzdGF0ZS5maWVsZHMpO1xyXG5cdFx0ZWxzZSBpZiAoc3RhdGUucm91dGVVUkwpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeVVSTCggc3RhdGUucm91dGVVUkwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyggXCJSb3V0ZSBzdGF0ZSBpbiBwb3BzdGF0ZSBldmVudCBoYXMgbmVpdGhlciByb3V0ZSBJRCBub3IgcGF0aC5cIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5XHJcblx0Ly8gQVBJIHRvIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy5cclxuXHRwcml2YXRlIGdldCBjb250cm9sc0Jyb3dzZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvXHJcblx0Ly8gYSByb3V0ZXIgdXAgdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHRwcml2YXRlIGdldCBjaGFpbnNUb0hpZ2hlclJvdXRlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLlxyXG5cdHByaXZhdGUgZ2V0IGJhc2VVUkwoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuYmFzZVVSTCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHRoaXMucHJvcHMuYmFzZVVSTDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZSBpbnNpZGUgdGhlIHJvdXRlcidzIG93biBjb250ZW50LiBJZlxyXG5cdCAqIHRoaXMgbWVtYmVyIGlzIHVuZGVmaW5lZCwgb25seSB0aGUgY3VycmVudCByb3V0ZSdzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldCBPdXRlckNvbnRlbnRGdW5jKCB2YWw6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMub3V0ZXJDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgb3V0ZXJDb250ZW50RnVuYzogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgYSBwcm9ncmVzcyBVSSB3aGlsZSB0aGUgcm91dGVyIGlzIGxvYWRpbmcgcm91dGUgY29udGVudC4gKi9cclxuXHRwdWJsaWMgc2V0IFByb2dyZXNzQ29udGVudEZ1bmMoIHZhbDogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5wcm9ncmVzc0NvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBwcm9ncmVzc0NvbnRlbnRGdW5jOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0Ly8gQSByb3V0ZXIgc2VydmljZSB0aGlzIHJvdXRlciB3aWxsIGRlbGVnYXRlIHRvIHdoZW4gaXQgY2Fubm90IHJlc29sdmUgYSBwYXRoLlxyXG5cdHByaXZhdGUgaGlnaGVyUm91dGVyU2VydmljZTogbWltLlJlZjxJUm91dGVyU2VydmljZT47XHJcblxyXG5cdC8vIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzIC0gdXNlZCB0byBmaW5kIHJvdXRlcyBieSBtYXRjaGluZyBwYXRocy4gTm90ZSB0aGF0IHRoaXNcclxuXHQvLyBsaXN0IGlzIGFjdHVhbGx5IGEgaGllcmFyY2h5IGJlY2F1c2Ugcm91dGVzIGNhbiBjb250YWluIHN1Yi1yb3V0ZXMuXHJcblx0cHJpdmF0ZSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcclxuXHJcblx0Ly8gTWFwIG9mIHJvdXRlIElEcyB0byBSb3V0ZSBvYmplY3RzLiBBbGwgcm91dGVzIHRoYXQgZGVmaW5lIGFuIElEIGFyZSBhZGRlZCB0byB0aGlzIG1hcCAtXHJcblx0Ly8gbm8gbWF0dGVyIGhvdyBkZWVwIGluIHRoZSBoaWVyYXJjaHkuXHJcblx0cHJpdmF0ZSByb3V0ZXNCeUlEID0gbmV3IE1hcDxzdHJpbmcsUm91dGU+KCk7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGU6IFJvdXRlO1xyXG5cclxuXHQvLyBDb250ZW50IHBvdmlkZWQgYnkgdGhlIGN1cnJlbnQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGVDb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEVycm9yIGFuZCBjb21wb25lbnQgcGF0aCBpbiBjYXNlIGFuIGVycm9yIGhhcyBiZWVuIGNhdWdodC5cclxuXHRwcml2YXRlIGVycm9yOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZXJyb3JQYXRoOiBzdHJpbmdbXSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBmb3IgdGhlIExpbmsgY29tcG9uZW50IGJlY2F1c2UuIFRoZSBwcm9wZXJ0aWVzIGluXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZSB0aGUgcm91dGU7IHRoZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBJSHRtbEFFbGVtZW50UHJvcHMgaW50ZXJmYWNlXHJcbi8vIGNvcnJlc3BvbmQgdG8gdGhlIHJlbGV2YW50IGF0dHJpYnV0ZXMgb2YgdGhlIDxhPiBET00gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua1Byb3BzIGV4dGVuZHMgbWltLklIdG1sQUVsZW1lbnRQcm9wc1xyXG57XHJcblx0Ly8gUGF0aCB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZVVSTD86IHN0cmluZztcclxuXHJcblx0Ly8gSUQgb2YgdGhlIHJvdXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlSUQ/OiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcm91dGUgd2hlbiB1c2luZyByb3V0ZUlELlxyXG5cdGZpZWxkcz86IFJvdXRlRmllbGRzO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IHNob3VsZCBiZSBtYWRlIGEgbmV3IGVudHJ5IGluIHRoZSBicm93c2VyJ3MgaGlzdG9yeTtcclxuXHQvLyB0aGF0IGlzIHRvIGJlIHN1YmplY3QgdG8gYmFjayBhbmQgZm9yd2FyZCBicm93c2VyIGNvbW1hbmRzLlxyXG5cdG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTGluayBjbGFzcyBpcyBhIEpTWCBjb21wb25lbnQgdGhhdCBhbGxvd3MgY3JlYXRpbmcgbGlua3MgaGFuZGxlZCBieSBhIFJvdXRlciBvYmplY3QuIEl0IGlzXHJcbi8vIGltcGxlbWVudGVkIGFzIGEgSlNYIGNvbXBvbmVudCBiZWNhdXNlIGl0cyBpbnRlbmRlZCB1c2UgaXMgdmVyeSBzaW1pbGFyIHRvIHRoZSA8YT4gRE9NXHJcbi8vIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTGluayBleHRlbmRzIG1pbS5Db21wb25lbnQ8TGlua1Byb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBMaW5rUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZXh0cmFjdCBvdXIgY3VzdG9tIHBhcmFtZXRlcnMgYW5kIGxlYXZlIG9ubHkgdGhvc2UgdGhhdCBhcmUgPGE+IGF0dHJpYnV0ZXNcclxuXHRcdGxldCB7cm91dGVVUkwsIHJvdXRlSUQsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSwgLi4ucmVzdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIDxhIGhyZWY9XCIjXCIgY2xpY2s9e3RoaXMub25DbGlja30gey4uLnJlc3R9PlxyXG5cdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwvYT47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25DbGljayA9ICggZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNlcnZpY2U6IElSb3V0ZXJTZXJ2aWNlID0gdGhpcy52bi5nZXRTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdGlmICghc2VydmljZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLnJvdXRlSUQpXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeUlEKCB0aGlzLnByb3BzLnJvdXRlSUQsIHRoaXMucHJvcHMuZmllbGRzLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlVUkwoIHRoaXMucHJvcHMucm91dGVVUkwsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJvdXRlclNlcnZpY2UgPSBuZXcgbWltLlJlZjxJUm91dGVyU2VydmljZT4oKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWUsIElUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIjtcclxuaW1wb3J0IHtUcmVlTm9kZUNvbnRhaW5lcn0gZnJvbSBcIi4vVHJlZU5vZGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlIGNsYXNzIGlzIGEgZ2VuZXJhbCBwdXJwb3NlIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgbWltLkNvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBpbXBsZW1lbnRzIElUcmVlXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnRhYkluZGV4ID0gMDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFRyZWVOb2RlQ29udGFpbmVyKCAoKSA9PiBuZXcgVHJlZU5vZGUoIG51bGwsIDAsIHRoaXMpKTtcclxuXHRcdHRoaXMuZWxtUmVmID0gbmV3IG1pbS5SZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG5cdFx0dGhpcy5wcmVwYXJlTG9jYWxTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHVibGljIGdldCB0YWJJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX3RhYkluZGV4OyB9XHJcblx0cHVibGljIHNldCB0YWJJbmRleCggdmFsOiBudW1iZXIpIHsgdGhpcy5tX3RhYkluZGV4ID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBub2RlcygpOiBJVHJlZU5vZGVbXSB7IHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2RlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZTogVHJlZU5vZGUgPSB0aGlzLmNvbnRhaW5lci5hZGROb2RlKCBwYXJhbXMsIGluZGV4KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdHJldHVybiBzdWJOb2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZU5vZGUoIGluZGV4KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxOb2RlcygpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5leHBhbmRBbGwoKVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmNvbGxhcHNlQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUgb3IgbnVsbCBpZiBubyBub2RlIGlzIHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBnZXQgc2VsZWN0ZWROb2RlKCk6IElUcmVlTm9kZSB7IHJldHVybiB0aGlzLm1fc2VsZWN0ZWROb2RlOyB9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiByZWY9e3RoaXMuZWxtUmVmfSB0YWJpbmRleD17dGhpcy50YWJJbmRleH0gY2xhc3M9e3RoaXMuY3NzQ2xhc3NUcmVlfSBrZXlkb3duPXt0aGlzLm9uS2V5RG93bn0+XHJcblx0XHRcdHt0aGlzLmNvbnRhaW5lcn1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKVxyXG5cdFx0XHR0aGlzLnNlbGVjdERvd24oIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKVxyXG5cdFx0XHR0aGlzLnNlbGVjdFVwKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHRcdGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIilcclxuXHRcdFx0dGhpcy5leHBhbmRPclNlbGVjdERvd24oIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpXHJcblx0XHRcdHRoaXMuY29sbGFwc2VPclNlbGVjdFVwKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgc2VsZWN0RG93biggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG5leHROb2RlID0gdGhpcy5maW5kRG93biggbm9kZSk7XHJcblx0XHRpZiAobmV4dE5vZGUpXHJcblx0XHR7XHJcblx0XHRcdG5leHROb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRuZXh0Tm9kZS5zY3JvbGxJbnRvVmlldyggZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlIHVwIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RVcCggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHByZXZOb2RlID0gdGhpcy5maW5kVXAoIG5vZGUpO1xyXG5cdFx0aWYgKHByZXZOb2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRwcmV2Tm9kZS5zZWxlY3QoKTtcclxuXHRcdFx0cHJldk5vZGUuc2Nyb2xsSW50b1ZpZXcoIHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJZiB0aGUgbm9kZSBpcyBjb2xsYXBzZWQsIGV4cGFuZHMgaXQuIElmIHRoZSBub2RlIGlzIGFscmVhZHkgZXhwYW5kZWQsIHNlbGVjdHMgdGhlIGZpcnN0XHJcblx0Ly8gY2hpbGQgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBzZWxlY3RzIHRoZSBuZXh0IG5vZGUgZG93bi5cclxuXHRwcml2YXRlIGV4cGFuZE9yU2VsZWN0RG93biggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmIChub2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdOb2RlID0gbm9kZS5jb250YWluZXIubm9kZXNbMF07XHJcblx0XHRcdFx0bmV3Tm9kZS5zZWxlY3QoKTtcclxuXHRcdFx0XHRuZXdOb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdG5vZGUuZXhwYW5kKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGV4cGFuZGVkLCBjb2xsYXBzZXMgaXQ7IG90aGVyd2lzZSwgc2VsZWN0cyB0aGUgbm9kZSdzIHBhcmVudC5cclxuXHRwcml2YXRlIGNvbGxhcHNlT3JTZWxlY3RVcCggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHRub2RlLmNvbGxhcHNlKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIG5vZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIGRvd24gZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmREb3duKCBub2RlOiBUcmVlTm9kZSwgc2tpcEV4cGFuZGVkU3ViTm9kZXM6IGJvb2xlYW4gPSBmYWxzZSk6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXNbMF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChza2lwRXhwYW5kZWRTdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IG5vZGUubV9wYXJlbnQgPyBub2RlLm1fcGFyZW50LmNvbnRhaW5lciA6IHRoaXMuY29udGFpbmVyO1xyXG5cdFx0XHRpZiAobm9kZS5pbmRleCA8IGNvbnRhaW5lci5ub2Rlcy5sZW5ndGggLSAxKVxyXG5cdFx0XHRcdHJldHVybiBjb250YWluZXIubm9kZXNbbm9kZS5pbmRleCArIDFdO1xyXG5cdFx0XHRlbHNlIGlmIChub2RlLm1fcGFyZW50KVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmREb3duKCBub2RlLm1fcGFyZW50LCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBub2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRub2RlLmNvbnRhaW5lci5ub2Rlc1swXS5zZWxlY3QoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUsIHRydWUpO1xyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHVwIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kVXAoIG5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5vZGUuaW5kZXggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGlmIChub2RlLm1fcGFyZW50KVxyXG5cdFx0XHRcdHJldHVybiBub2RlLm1fcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGxldCBwcmV2Tm9kZSA9IGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4IC0gMV07XHJcblx0XHRcdGxldCBsYXN0RXhwYW5kZWROb2RlID0gdGhpcy5maW5kTGFzdEV4cGFuZGVkTm9kZSggcHJldk5vZGUpO1xyXG5cdFx0XHRyZXR1cm4gbGFzdEV4cGFuZGVkTm9kZSA/IGxhc3RFeHBhbmRlZE5vZGUgOiBwcmV2Tm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluZHMgbm9kZSB3aGljaCBpcyB0aGUgbGFzdCBleHBhbmRlZCBkZXNjZW5kYW5kIG9mIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZExhc3RFeHBhbmRlZE5vZGUoIGN1cnJOb2RlOiBUcmVlTm9kZSk6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0aWYgKCFjdXJyTm9kZSB8fCBjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwIHx8ICFjdXJyTm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBsYXN0Q2hpbGQgPSBjdXJyTm9kZS5jb250YWluZXIubm9kZXNbY3Vyck5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aC0xXTtcclxuXHRcdGxldCBsYXN0RXhwYW5kZWROb2RlID0gdGhpcy5maW5kTGFzdEV4cGFuZGVkTm9kZSggbGFzdENoaWxkKTtcclxuXHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IGxhc3RDaGlsZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBwcmVwYXJlTG9jYWxTdHlsZXMoKVxyXG5cdHtcclxuXHRcdHRoaXMuY3NzQ2xhc3NUcmVlID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZVwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVRyZWUgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlXCIsIFwiLnRyZWUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcblx0XHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBEb2RnZXJCbHVlXCIsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogXCJWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEycHhcIixcclxuXHRcdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdG1heEhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZVwiLCBcIi50cmVlLW5vZGUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVDb250ZW50ID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50XCIsIFwiLnRyZWUtbm9kZS1jb250ZW50KCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdHBhZGRpbmc6IFwiMXB4XCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRIb3ZlciA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50OmhvdmVyXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50KCopOmhvdmVyXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRjeWFuXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50U2VsZWN0ZWQgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZFwiLCBcIi50cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZCgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luTGVmdDogXCIycHhcIixcclxuXHRcdFx0XHRib3JkZXI6IFwiMXB4IGRvdHRlZFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJEb2RnZXJCbHVlXCIsXHJcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUljb24gPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtaWNvblwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVJY29uID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWljb25cIiwgXCIudHJlZS1ub2RlLWljb24oKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxZW1cIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMWVtXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc1N1Ym5vZGVzID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1zdWJub2Rlc1wiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVN1Yk5vZGVzID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1zdWJub2Rlc1wiLCBcIi50cmVlLXN1Ym5vZGVzKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjE2cHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHJpdmF0ZSBtX3RhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBub2Rlcy5cclxuXHRwcml2YXRlIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBzZWxlY3RlZCBub2RlIG9yIG51bGwgaWYgbm8gbm9kZSBpcyBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9zZWxlY3RlZE5vZGU6IFRyZWVOb2RlID0gbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRyZWUuXHJcblx0cHVibGljIGVsbVJlZjogbWltLlJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG5cdC8vIENTUyBydWxlcyB1c2VkIGJ5IHRoZSBUcmVlIGFuZCBUcmVlTm9kZSBjb250cm9sc1xyXG5cdHByaXZhdGUgY3NzUnVsZVRyZWU6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnQ6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudEhvdmVyOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZDogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVJY29uOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlU3ViTm9kZXM6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHJcblx0Ly8gQ1NTIGxvY2FsIGNsYXNzIG5hbWVzXHJcblx0cHVibGljIGNzc0NsYXNzVHJlZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGU6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlQ29udGVudDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQ6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlSWNvbjogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc1N1Ym5vZGVzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWUgZXh0ZW5kcyBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIFRhYiBpbmRleCBvZiB0aGUgdHJlZSBjb250cm9sLlxyXG5cdHRhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2Ygbm9kZXMuXHJcblx0cmVhZG9ubHkgbm9kZXM6IElUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZVxyXG5cdHJlYWRvbmx5IHNlbGVjdGVkTm9kZTogSVRyZWVOb2RlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlUGFyYW1zIGludGVyZmFjZSByZXByZXNlbnRzIHBhcmFtZXRlcnMgb2YgYSB0cmVlIG5vZGUgdGhhdCBjYW4gYmUgc2V0L2NoYW5nZWRcclxuLy8gZXh0ZXJuYWxseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUGFyYW1zXHJcbntcclxuXHRjb250ZW50OiBhbnk7XHJcblx0aWNvbj86IFRyZWVOb2RlSWNvblBhcmFtcztcclxuXHR0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcblx0YmdDb2xvcj86IHN0cmluZztcclxuXHRpdGFsaWM/OiBib29sZWFuO1xyXG5cdGJvbGQ/OiBib29sZWFuO1xyXG5cdGN1c3RvbUNsYXNzPzogc3RyaW5nO1xyXG5cdGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVJY29uUGFyYW1zIGludGVyZmFjZSByZXByZXNlbnRzIHBhcmFtZXRlcnMgb2YgYW4gaWNvbiBvZiBhIHRyZWUgbm9kZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFRyZWVOb2RlSWNvblBhcmFtcyA9IHtjbGFzczogc3RyaW5nfSB8IHtpbWc6IHN0cmluZ31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSBpbiB0aGUgdHJlZSBoaWVyYXJjaHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSBleHRlbmRzIElUcmVlTm9kZVBhcmFtcywgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHJlYWRvbmx5IHRyZWU6IElUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cmVhZG9ubHkgcGFyZW50OiBJVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgbGV2ZWwgb2YgdGhlIG5vZGUgaW4gdGhlIGFuY2VzdHJhbCBoaWVyYXJjaHkuXHJcblx0cmVhZG9ubHkgbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHJlYWRvbmx5IHN1Yk5vZGVzOiBJVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgZXhwYW5kZWQuXHJcblx0cmVhZG9ubHkgaXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0ZXhwYW5kKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdGNvbGxhcHNlKCk6IHZvaWQ7XHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0c2VsZWN0KCk6IHZvaWQ7XHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHR1bnNlbGVjdCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRyZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cmVtb3ZlQWxsTm9kZXMoKTogdm9pZDtcclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0ZXhwYW5kQWxsKCk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRjb2xsYXBzZUFsbCgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiO1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGVzIHRyZWUgY29udHJvbCBpbnN0YW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJlZSgpOiBJVHJlZVxyXG57XHJcblx0cmV0dXJuIG5ldyBUcmVlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge0lUcmVlLCBJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zLCBUcmVlTm9kZUljb25QYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIjtcclxuaW1wb3J0IHtUcmVlTm9kZUNvbnRhaW5lcn0gZnJvbSBcIi4vVHJlZU5vZGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVHJlZU5vZGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBub2RlIHdpdGhpbiBhIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIG1pbS5Db21wb25lbnQgaW1wbGVtZW50cyBJVHJlZU5vZGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwYXJlbnQ6IFRyZWVOb2RlLCBsZXZlbDogbnVtYmVyLCB0cmVlOiBUcmVlID0gbnVsbClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubV9wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLm1fdHJlZSA9IHBhcmVudCAhPT0gbnVsbCA/IHBhcmVudC5tX3RyZWUgOiB0cmVlO1xyXG5cdFx0dGhpcy5tX2xldmVsID0gbGV2ZWw7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBUcmVlTm9kZUNvbnRhaW5lciggdGhpcy5ub2RlRmFjdG9yeSk7XHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuY29udGVudEVsbVJlZiA9IG5ldyBtaW0uUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGluc3RhbmNlcyBvZiBzdWItbm9kZXMgb2YgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgbm9kZUZhY3RvcnkgPSAoKTogVHJlZU5vZGUgPT5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFRyZWVOb2RlKCB0aGlzLCB0aGlzLm1fbGV2ZWwgKyAxKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHJlZSB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25ncy5cclxuXHRwdWJsaWMgZ2V0IHRyZWUoKTogSVRyZWUgeyByZXR1cm4gdGhpcy5tX3RyZWU7IH1cclxuXHJcblx0Ly8gUGFyZW50IHRyZWUgbm9kZSBvciBudWxsIGZvciB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgcGFyZW50KCk6IElUcmVlTm9kZSB7IHJldHVybiB0aGlzLm1fcGFyZW50OyB9XHJcblxyXG5cdC8vIDAtYmFzZWQgbGV2ZWwgb2YgdGhlIG5vZGUgaW4gdGhlIGFuY2VzdHJhbCBoaWVyYXJjaHkuXHJcblx0cHVibGljIGdldCBsZXZlbCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX2xldmVsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV9pbmRleDsgfVxyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cHVibGljIHNldCBpbmRleCggdmFsOiBudW1iZXIpIHsgdGhpcy5tX2luZGV4ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSBwYXJhbWV0ZXJzLlxyXG5cdHB1YmxpYyBnZXQgY29udGVudCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2NvbnRlbnQ7IH1cclxuXHRwdWJsaWMgc2V0IGNvbnRlbnQoIHZhbDogc3RyaW5nKSB7IHRoaXMubV9jb250ZW50ID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBpY29uKCk6IFRyZWVOb2RlSWNvblBhcmFtcyB7IHJldHVybiB0aGlzLm1faWNvbjsgfVxyXG5cdHB1YmxpYyBzZXQgaWNvbiggdmFsOiBUcmVlTm9kZUljb25QYXJhbXMpIHsgdGhpcy5tX2ljb24gPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRleHRDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX3RleHRDb2xvcjsgfVxyXG5cdHB1YmxpYyBzZXQgdGV4dENvbG9yKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fdGV4dENvbG9yID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBiZ0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fYmdDb2xvcjsgfVxyXG5cdHB1YmxpYyBzZXQgYmdDb2xvciggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2JnQ29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0YWxpYygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pdGFsaWM7IH1cclxuXHRwdWJsaWMgc2V0IGl0YWxpYyggdmFsOiBib29sZWFuKSB7IHRoaXMubV9pdGFsaWMgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJvbGQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1fYm9sZDsgfVxyXG5cdHB1YmxpYyBzZXQgYm9sZCggdmFsOiBib29sZWFuKSB7IHRoaXMubV9ib2xkID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2N1c3RvbUNsYXNzOyB9XHJcblx0cHVibGljIHNldCBjdXN0b21DbGFzcyggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2N1c3RvbUNsYXNzID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBkYXRhKCk6IGFueSB7IHJldHVybiB0aGlzLm1fZGF0YTsgfVxyXG5cdHB1YmxpYyBzZXQgZGF0YSggdmFsOiBhbnkpIHsgdGhpcy5tX2RhdGEgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1faXNFeHBhbmRlZDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgdGhlIG5vZGUgc28gdGhhdCBpdHMgc3ViLW5vZGVzIGJlY29tZSB2aXNpYmxlLlxyXG5cdHB1YmxpYyBleHBhbmQoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyB0aGUgbm9kZSBoaWRpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2UoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwICYmIHRoaXMubV9pc0V4cGFuZGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUuXHJcblx0cHVibGljIHNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSB0cnVlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB1bnNlbGVjdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUgKGlmIGFueSlcclxuXHRcdFx0aWYgKHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlICE9IG51bGwpXHJcblx0XHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUudW5zZWxlY3QoKTtcclxuXHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gdGhpcztcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgdW5zZWxlY3QoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm1faXNTZWxlY3RlZCAhPT0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5tX2lzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHN1Yk5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBvbmx5IGlmIHRoaXMgd2FzIHRoZSBmaXJzdCBzdWItbm9kZVxyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMSlcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cclxuXHRcdHJldHVybiBzdWJOb2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRMZW5ndGggPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGg7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVOb2RlKCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGxhc3Qgc3ViLW5vZGVcclxuXHRcdGlmIChvbGRMZW5ndGggPT09IDEgJiYgdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChvbGRMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxOb2RlcygpO1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZXhwYW5kKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5leHBhbmRBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbGxhcHNlKCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5jb2xsYXBzZUFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIHRoZSBub2RlIGlzIG5vdCB3aXRoaW4gdGhlIHZpZXdwb3J0IGFuZCBzY3JvbGxzIGl0IGludG8gdmlldyBhbGluZ2luZyBpdFxyXG5cdC8vIHdpdGggdGhlIHVwcGVyIG9yIGxvd2VyIGVkZ2Ugb2YgdGhlIHRyZWUgY29udGFpbmVyLlxyXG5cdHB1YmxpYyBzY3JvbGxJbnRvVmlldyggYWxpZ25VcDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMubV90cmVlLmVsbVJlZi5yIHx8ICF0aGlzLmNvbnRlbnRFbG1SZWYucilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGdldCB0cmVlIGFuZCBub2RlIGJvdW5kaW5nIHJlY3RcclxuXHRcdGxldCByY1RyZWU6IENsaWVudFJlY3QgPSB0aGlzLm1fdHJlZS5lbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCByY05vZGU6IENsaWVudFJlY3QgPSB0aGlzLmNvbnRlbnRFbG1SZWYuci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGlmIChyY05vZGUuYm90dG9tIDw9IHJjVHJlZS5ib3R0b20gJiYgcmNOb2RlLnRvcCA+PSByY1RyZWUudG9wKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmLnIuc2Nyb2xsSW50b1ZpZXcoIGFsaWduVXApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8bWltLkZyYWdtZW50PlxyXG5cdFx0XHR7dGhpcy5yZW5kZXJOb2RlKCl9XHJcblx0XHRcdHt0aGlzLnJlbmRlclN1Yk5vZGVzKCl9XHJcblx0XHQ8L21pbS5GcmFnbWVudD47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJOb2RlKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBleHBhbmRlckNsYXNzTmFtZTogc3RyaW5nID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IHRoaXMubV9pc0V4cGFuZGVkID8gXCJmYS1jYXJldC1kb3duXCIgOiBcImZhLWNhcmV0LXJpZ2h0XCI7XHJcblxyXG5cdFx0bGV0IGljb25Db250ZW50OiBhbnk7XHJcblx0XHRpZiAodGhpcy5tX2ljb24pXHJcblx0XHR7XHJcblx0XHRcdGlmIChcImNsYXNzXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8c3BhbiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbiArIFwiIFwiICsgdGhpcy5tX2ljb24uY2xhc3N9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0XHRlbHNlIGlmIChcImltZ1wiIGluIHRoaXMubV9pY29uKVxyXG5cdFx0XHRcdGljb25Db250ZW50ID0gPGltZyBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlSWNvbn0gc3JjPXt0aGlzLm1faWNvbi5pbWd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9IC8+O1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb250ZW50Q2xhc3M6IHN0cmluZyA9IHRoaXMubV9pc1NlbGVjdGVkID8gdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkIDogdGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlQ29udGVudDtcclxuXHRcdGlmICh0aGlzLm1fY3VzdG9tQ2xhc3MpXHJcblx0XHRcdGNvbnRlbnRDbGFzcyArPSBcIiBcIiArIHRoaXMubV9jdXN0b21DbGFzcztcclxuXHJcblx0XHRsZXQgY29udGVudFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdFx0aWYgKHRoaXMubV90ZXh0Q29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5jb2xvciA9IHRoaXMubV90ZXh0Q29sb3I7XHJcblx0XHRpZiAodGhpcy5tX2JnQ29sb3IpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1fYmdDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1faXRhbGljKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHRcdGlmICh0aGlzLm1fYm9sZClcclxuXHRcdFx0Y29udGVudFN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NOb2RlfT5cclxuXHRcdFx0PGkgY2xhc3M9e1wiZmEgZmEtZncgXCIgKyBleHBhbmRlckNsYXNzTmFtZX0gY2xpY2s9e3RoaXMub25FeHBhbmRlckNsaWNrZWR9IC8+XHJcblx0XHRcdHtpY29uQ29udGVudH1cclxuXHRcdFx0PHNwYW4gcmVmPXt0aGlzLmNvbnRlbnRFbG1SZWZ9IGRyYWdTb3VyY2UgY2xhc3M9e2NvbnRlbnRDbGFzc30gc3R5bGU9e2NvbnRlbnRTdHlsZX1cclxuXHRcdFx0XHRcdGNsaWNrPXt0aGlzLm9uQ2xpY2t9IGRibGNsaWNrPXt0aGlzLm9uRGJsQ2xpY2t9Pnt0aGlzLm1fY29udGVudH08L3NwYW4+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXJTdWJOb2RlcygpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc1N1Ym5vZGVzfSBzdHlsZT17e2Rpc3BsYXk6dGhpcy5tX2lzRXhwYW5kZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cdFx0XHR7dGhpcy5jb250YWluZXJ9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkNsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zZWxlY3QoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgZG91YmxlLWNsaWNrcyBvbiBpY29uIG9yIG5hbWUuXHJcblx0cHJpdmF0ZSBvbkRibENsaWNrID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5zdWJOb2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyY2xpY2tzIG9uIHRoZSBleHBhbmRlciBpY29uXHJcblx0cHJpdmF0ZSBvbkV4cGFuZGVyQ2xpY2tlZCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVHJlZSBjb250cm9sIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzXHJcblx0cHVibGljIG1fdHJlZTogVHJlZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGVcclxuXHRwdWJsaWMgbV9wYXJlbnQ6IFRyZWVOb2RlO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGVudGF0aW9uIGxldmVsIG9mIHRoZSBibG9ja1xyXG5cdHB1YmxpYyBtX2xldmVsOiBudW1iZXI7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1faW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBUcmVlTm9kZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IGV4cGFuZGVkICh0aGF0IGlzIHN1Yi1ub2RlcyBhcmUgdmlzaWJsZSkuXHJcblx0cHVibGljIG1faXNFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBtX2lzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlJ3MgY29udGVudC5cclxuXHRwdWJsaWMgY29udGVudEVsbVJlZjogbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+O1xyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnNcclxuXHRwcml2YXRlIG1fY29udGVudDogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9pY29uOiBUcmVlTm9kZUljb25QYXJhbXM7XHJcblx0cHJpdmF0ZSBtX3RleHRDb2xvcjogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9iZ0NvbG9yOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2l0YWxpYzogYm9vbGVhbjtcclxuXHRwcml2YXRlIG1fYm9sZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIG1fY3VzdG9tQ2xhc3M6IHN0cmluZztcclxuXHRwcml2YXRlIG1fZGF0YTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCI7XHJcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuL1RyZWVOb2RlXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVHJlZU5vZGVDb250YWluZXIgY2xhc3MgcmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHJlZSBub2RlcyB0aGF0IGFyZSBkaXNwbGF5ZWQgYW5kXHJcbi8vIGhpZGRlbiB0b2dldGhlci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRhaW5lciBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBub2RlRmFjdG9yeTogKCkgPT4gVHJlZU5vZGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm5vZGVzID0gW107XHJcblx0XHR0aGlzLm5vZGVGYWN0b3J5ID0gbm9kZUZhY3Rvcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRsZXQgbm9kZTogVHJlZU5vZGUgPSB0aGlzLm5vZGVGYWN0b3J5KCk7XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gbnVsbCB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gY3Vyckxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5pbmRleCA9IGN1cnJMZW5ndGg7XHJcblx0XHRcdHRoaXMubm9kZXMucHVzaCggbm9kZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuaW5kZXggPSBpbmRleDtcclxuXHRcdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIGluZGV4LCAwLCBub2RlKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBpbmRleGVzIG9mIHRoZSBub2RlcyBhZnRlciB0aGUgaW5zZXJ0ZWQgb25lXHJcblx0XHRcdGZvciggbGV0IGkgPSBpbmRleCArIDE7IGkgPCBjdXJyTGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0dGhpc1tpXS5pbmRleCA9IGk7XHJcblx0XHR9XHJcblxyXG5cdFx0bm9kZS5jb250ZW50ID0gcGFyYW1zLmNvbnRlbnQ7XHJcblx0XHRub2RlLmljb24gPSBwYXJhbXMuaWNvbjtcclxuXHRcdG5vZGUudGV4dENvbG9yID0gcGFyYW1zLnRleHRDb2xvcjtcclxuXHRcdG5vZGUuYmdDb2xvciA9IHBhcmFtcy5iZ0NvbG9yO1xyXG5cdFx0bm9kZS5pdGFsaWMgPSBwYXJhbXMuaXRhbGljO1xyXG5cdFx0bm9kZS5ib2xkID0gcGFyYW1zLmJvbGQ7XHJcblx0XHRub2RlLmN1c3RvbUNsYXNzID0gcGFyYW1zLmN1c3RvbUNsYXNzO1xyXG5cdFx0bm9kZS5kYXRhID0gcGFyYW1zLmRhdGE7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIG5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgc3ViLW5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdWItbm9kZXMgbGlzdC5cclxuXHRwdWJsaWMgcmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBjdXJyTGVuZ3RoKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwicmVwbGFjZU5vZGU6IGludmFsaWQgaW5kZXggXCIgKyBpbmRleCk7XHJcblxyXG5cdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHQvLyB1cGRhdGUgaW5kZXhlcyBvZiB0aGUgbm9kZXMgYWZ0ZXIgdGhlIHJlbW92ZWQgb25lXHJcblx0XHRmb3IoIGxldCBpID0gaW5kZXg7IGkgPCBjdXJyTGVuZ3RoOyBpKyspXHJcblx0XHRcdHRoaXNbaV0uaW5kZXggPSBpO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChjdXJyTGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5ub2Rlcy5zcGxpY2UoIDAsIGN1cnJMZW5ndGgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5vZGUgb2YgdGhpcy5ub2RlcylcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5leHBhbmRBbGwoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBub2RlIG9mIHRoaXMubm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuY29sbGFwc2VBbGwoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5vZGVzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBcnJheSBvZiBUcmVlTm9kZSBvYmplY3RzXHJcblx0cHVibGljIG5vZGVzOiBUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2Ugb2YgVHJlZU5vZGUgb2JqZWN0c1xyXG5cdHByaXZhdGUgbm9kZUZhY3Rvcnk6ICgpID0+IFRyZWVOb2RlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGUgU2Nyb2xsQXhpcyBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGF4aXMgb2YgZGF0YSwgd2hpY2ggY29uc2lzdHMgb2YgaXRlbXMsIGFuZCBwZXJmb3Jtc1xyXG4gKiBjYWxjdWxhdGlvbnMgZHVyaW5nIHNjcm9sbGluZyBiYWNrIGFuZCBmb3J0aCBhbG9uZyB0aGUgYXhpcy4gVGhlIFNjcm9sbEF4aXMgY2xhc3MgaXRzZWxmIGRvZXNuJ3RcclxuICogaGF2ZSBhbnkgdmlzdWFsIHJlcHJlc2VudGF0aW9uIGFuZCBvbmx5IHNlcnZlcyBhcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYWxnb3JpdGhtIHRoYXRcclxuICogaGVscHMgdmlydHVhbGl6ZSBzY3JvbGxpbmcgLSB0aGF0IGlzIGRpc3BsYXkgb25seSBzbWFsbCBzdWJzZXQgb2YgZGF0YSBpdGVtcyBhbmQgYWRkL3JlbW92ZVxyXG4gKiBpdGVtcyBhcyBzY3JvbGxpbmcgaGFwcGVucy5cclxuICogXHJcbiAqIFZBeGlzIGFzc3VtZXMgdGhlIHVzZSBvZiAzIERPTSBlbGVtZW50czpcclxuICpcdC0gZnJhbWUgLSB0aGUgXCJvdXRlclwiIGVsZW1lbnQgd2hpY2ggZGlzcGxheXMgdGhlIHNjcm9sbGJhciB3aGVuIG5lY2Vzc2FyeVxyXG4gKlx0LSB3YWxsIC0gdGhlIFwiaW5uZXJcIiBlbGVtZW50IHdoaWNoIGhhcyB0aGUgc2l6ZSBvZiB0aGUgZW50aXJlIHBvc3NpYmxlIHNldCBvZiBpdGVtcy4gSXQgaXNcclxuICpcdFx0bmVlZGVkIHRvIG1ha2Ugc2Nyb2xsaW5nIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZS5cclxuICpcdC0gc3Vic2V0IC0gdGhlIGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBvbmx5IGl0ZW1zIHRoYXQgZml0IHRoZSBmcmFtZSBwbHVzIGEgY2VydGFpbiBudW1iZXIgb2ZcclxuICpcdFx0YWRkaXRpb25hbCBpdGVtcyBmb3IgXCJvdmVyc2NhblwiLlxyXG4gKiBcclxuICogVkF4aXMgY2FsY3VsYXRlcyBhdmVyYWdlIGl0ZW0gc2l6ZSBieSBkaXZpZGluZyB0aGUgc2l6ZSBvZiB0aGUgZGF0YSBieSB0aGUgbnVtYmVyIG9mIGl0ZW1zLlxyXG4gKiBUaGUgYXZlcmFnZSB2YWx1ZSBpcyByZWNhbGN1bGF0ZWQgZXZlcnkgdGltZSBpdGVtcyBhcmUgYWRkZWQgdG8gb3IgZGVsZXRlZCBmcm9tIHRoZSBzdWJzZXQgdGh1c1xyXG4gKiBhY2NvbW9kYXRpbmcgaXRlbXMgd2l0aCBkaWZmZXJlbiBzaXplcy4gQmFzZWQgb24gdGhlIGF2ZXJhZ2UgdmFsdWUgdGhlIHdhbGwgZWxlbWVudCBpcyBzaXplZFxyXG4gKiB0byBpbmNsdWRlIHRoZSBlbnRpcmUgZGF0YSBzZXQsIHdoaWNoIGhlbHBzIHRvIGFjaGlldmUgbW9yZS1vci1sZXNzIGFjY3VyYXRlIHNjcm9sbFxyXG4gKiBwb3NpdGlvbmluZy5cclxuICpcclxuICogVkF4aXMgdXNlcyBtaW5pbXVtLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuIG51bWJlciBvZiBpdGVtcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBmcmFtZSBhbmRcclxuICogbWFrZXMgc3VyZSB0aGF0IHRoZSBhY3R1YWwgbnVtYmVyIG9mIGl0ZW1zIGlzIHdpdGhpbiB0aGVzZSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlcy4gRHVyaW5nXHJcbiAqIHNjcm9sbGluZywgaWYgdGhlIGFjdHVhbCBvdmVyc2NhbiBudW1iZXIgYmVjb21lcyBsZXNzIHRoYW4gdGhlIG1pbmltdW0sIG5ldyBpdGVtcyBhcmUgYWRkZWQ7IGlmXHJcbiAqIGl0IGJlY29tZXMgbW9yZSB0aGVuIHRoZSBtYXhpbXVtLCBpdGVtcyBhcmUgZGVsZXRlZC4gV2hlbiBpdGVtcyBhcmUgYWRkZWQgdGhleSBhcmUgYWRkZWQgdXAgdG9cclxuICogdGhlIG9wdGltYWwgb3ZlcnNjYW4gbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEF4aXNcclxue1xyXG5cdC8vIE1pbmltYWwgbnVtYmVyIG9mIGFkZGl0aW9uYWwgaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIG1haW50YWluZWQuIFdoZW5cclxuXHQvLyBkdXJpbmcgc2Nyb2xsaW5nIHRoZSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgZmFsbHMgdW5kZXIgdGhpcyBudW1iZXIsIG5ldyBpdGVtcyBhcmUgYWRkZWQuXHJcblx0cHJpdmF0ZSBtaW5PdmVyc2NhbjogbnVtYmVyO1xyXG5cclxuXHQvLyBPcHRpbWFsIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQuIFdoZW4gYWRkaW5nIG5ldyBpdGVtcyBvciByZW1vdmluZ1xyXG5cdC8vIGV4aXN0aW5nIGl0ZW1zIHdlIHdhbnQgdG8gcmljaCB0aGlzIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgb3ZlcnNjYW4uXHJcblx0cHJpdmF0ZSBvcHRPdmVyc2NhbjogbnVtYmVyO1xyXG5cclxuXHQvLyBNYXhpbXVtIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgbWFpbnRhaW5lZC4gV2hlblxyXG5cdC8vIGR1cmluZyBzY3JvbGxpbmcgdGhlIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBleGNlZWRzIHRoaXMgbnVtYmVyLCBpdGVtcyBhcmUgcmVtb3ZlZC5cclxuXHRwcml2YXRlIG1heE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG1pbk92ZXJzY2FuOiBudW1iZXIsIG9wdE92ZXJzY2FuOiBudW1iZXIsIG1heE92ZXJzY2FuOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5taW5PdmVyc2NhbiA9IG1pbk92ZXJzY2FuO1xyXG5cdFx0dGhpcy5vcHRPdmVyc2NhbiA9IG9wdE92ZXJzY2FuO1xyXG5cdFx0dGhpcy5tYXhPdmVyc2NhbiA9IG1heE92ZXJzY2FuO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lYXN1cmVzIHRoZSBzaXplIG9jY3VwaWVkIGJ5IHRoZSBjdXJyZW50IGRhdGEgc2V0IHJlbGF0aXZlIHRvIHRoZSBzaXplIG9mIHRoZSBmcmFtZVxyXG5cdCAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtdm92ZSBpdGVtcy4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCB3aGVuOlxyXG5cdCAqXHQtIFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGRhdGEgc2V0IGNoYW5nZXMuXHJcblx0ICpcdC0gVGhlIHNpemUgb2YgdGhlIGZyYW1lIGVsZW1lbnQgY2hhbmdlcy5cclxuXHQgKlx0LSBUaGUgZnJhbWUgZWxlbWVudCBpcyBzY3JvbGxlZC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdG90YWxDb3VudCBOdW1iZXIgb2YgaXRlbXMgaW4gdGhlIGVudGlyZSBkYXRhIHNldFxyXG5cdCAqIEBwYXJhbSBmaXJzdEl0ZW0gSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gY3VycmVudGx5IGluIHRoZSBzdWJzZXRcclxuXHQgKiBAcGFyYW0gaXRlbUNvdW50IE51bWJlciBvZiBpdGVtcyBjdXJyZW50bHkgaW4gdGhlIHN1YnNldFxyXG5cdCAqIEBwYXJhbSBmcmFtZVNpemUgQ3VycmVudCBzaXplIGluIHBpemVscyBvZiB0aGUgZnJhbWUgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSB3YWxsU2l6ZSBDdXJyZW50IHNpemUgaW4gcGl4ZWxzIG9mIHRoZSB3YWxsIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gc3Vic2V0U2l6ZSBDdXJyZW50IHNpemUgaW4gcGl4ZWxzIG9mIHRoZSBzdWJzZXQgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSBzY3JvbGxQb3MgQ3VycmVudCBvciBuZXcgc2Nyb2xsIHBvc2l0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBtZWFzdXJlKCB0b3RhbENvdW50OiBudW1iZXIsIG9sZEZpcnN0OiBudW1iZXIsIG9sZENvdW50OiBudW1iZXIsIG9sZEF2Z0l0ZW1TaXplOiBudW1iZXIsXHJcblx0XHRmcmFtZVNpemU6IG51bWJlciwgd2FsbFNpemU6IG51bWJlciwgc3Vic2V0U2l6ZTogbnVtYmVyLCBzY3JvbGxQb3M6IG51bWJlcik6IFNjcm9sbEF4aXNBY3Rpb25cclxuXHR7XHJcblx0XHQvLyBwcmVwYXJlIHRoZSBvYmplY3QgdG8gYmUgcmV0dXJuZWRcclxuXHRcdGxldCByZXRBY3Rpb24gPSBuZXcgU2Nyb2xsQXhpc0FjdGlvbigpO1xyXG5cdFx0aWYgKHRvdGFsQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybiByZXRBY3Rpb247XHJcblx0XHRlbHNlIGlmIChvbGRDb3VudCA9PT0gMClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIml0ZW1Db3VudCBjYW5ub3QgYmUgemVyb1wiKTtcclxuXHJcblx0XHRsZXQgb2xkTGFzdCA9IG9sZEZpcnN0ICsgb2xkQ291bnQgLSAxO1xyXG5cdFx0bGV0IHRvdGFsTGFzdCA9IHRvdGFsQ291bnQgLSAxO1xyXG5cclxuXHRcdC8vIGNhbGN1bGF0ZSBuZXcgYXZlcmFnZSBpdGVtIHNpemUgYmFzZWQgb24gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgY3VycmVudCBzdWJzZXRcclxuXHRcdC8vIGFuZCB0aGUgY3VycmVudCBzaXplIG9mIHRoZSBkYXRhIGVsZW1lbnQuXHJcblx0XHRsZXQgbmV3QXZnSXRlbVNpemUgPSBzdWJzZXRTaXplIC8gb2xkQ291bnQ7XHJcblx0XHRpZiAob2xkQXZnSXRlbVNpemUpXHJcblx0XHRcdG5ld0F2Z0l0ZW1TaXplID0gKG5ld0F2Z0l0ZW1TaXplICsgb2xkQXZnSXRlbVNpemUpIC8gMjtcclxuXHJcblx0XHQvLyBiYXNlZCBvbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIGFuZCB0aGUgYXZlcmFnZSBzaXplIGVzdGltYXRlIHdoYXQgaXRlbXMgd291bGQgZml0IGluc2lkZVxyXG5cdFx0Ly8gdGhlIGZyYW1lIGVsZW1lbnQuXHJcblx0XHRsZXQgZml0Rmlyc3QgPSBNYXRoLm1pbiggTWF0aC5mbG9vciggc2Nyb2xsUG9zIC8gbmV3QXZnSXRlbVNpemUpLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IGZpdExhc3QgPSBNYXRoLm1pbiggTWF0aC5jZWlsKCAoc2Nyb2xsUG9zICsgZnJhbWVTaXplKSAvIG5ld0F2Z0l0ZW1TaXplKSwgdG90YWxMYXN0KTtcclxuXHJcblx0XHQvLyBnZXQgbmV3IGZpcnN0IGFuZCBsYXN0ICBpbmRpY2VzIHdpdGggbWluaW1hbCwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhblxyXG5cdFx0bGV0IG1pbk92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm1pbk92ZXJzY2FuLCAwKTtcclxuXHRcdGxldCBvcHRPdmVyc2NhbkZpcnN0ID0gTWF0aC5tYXgoIGZpdEZpcnN0IC0gdGhpcy5vcHRPdmVyc2NhbiwgMClcclxuXHRcdGxldCBtYXhPdmVyc2NhbkZpcnN0ID0gTWF0aC5tYXgoIGZpdEZpcnN0IC0gdGhpcy5tYXhPdmVyc2NhbiwgMCk7XHJcblx0XHRsZXQgbWluT3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm1pbk92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IG9wdE92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5vcHRPdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBtYXhPdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMubWF4T3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblxyXG5cdFx0Ly8gdGhlc2Ugd2lsbCBiZSBpbmRpY2VzIHRoYXQgd2Ugd2lsbCBhY3R1YWxseSBuZWVkIGFmdGVyIGNvbXBhcmluZyB0aGUgbmV3IHJhbmdlXHJcblx0XHQvLyB3aXRoIHRoZSBvbGQgb25lXHJcblx0XHRsZXQgbmV3Rmlyc3Q6IG51bWJlcjtcclxuXHRcdGxldCBuZXdMYXN0OiBudW1iZXI7XHJcblxyXG5cdFx0aWYgKG1pbk92ZXJzY2FuRmlyc3QgPCBvbGRGaXJzdClcclxuXHRcdFx0bmV3Rmlyc3QgPSBvcHRPdmVyc2NhbkZpcnN0O1xyXG5cdFx0ZWxzZSBpZiAobWluT3ZlcnNjYW5GaXJzdCA+IG9sZEZpcnN0ICYmIG1pbk92ZXJzY2FuRmlyc3QgPCBvbGRMYXN0KVxyXG5cdFx0XHRuZXdGaXJzdCA9IE1hdGgubWF4KCBtYXhPdmVyc2NhbkZpcnN0LCBvbGRGaXJzdCk7XHJcblx0XHRlbHNlIGlmIChtYXhPdmVyc2NhbkZpcnN0ID4gb2xkTGFzdClcclxuXHRcdFx0bmV3Rmlyc3QgPSBvcHRPdmVyc2NhbkZpcnN0O1xyXG5cdFx0ZWxzZSBpZiAob2xkTGFzdCAtIG1heE92ZXJzY2FuRmlyc3QgPiBvcHRPdmVyc2NhbkZpcnN0IC0gb2xkTGFzdClcclxuXHRcdFx0bmV3Rmlyc3QgPSBtYXhPdmVyc2NhbkZpcnN0O1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdGaXJzdCA9IG9wdE92ZXJzY2FuRmlyc3Q7XHJcblxyXG5cdFx0aWYgKG1pbk92ZXJzY2FuTGFzdCA+IG9sZExhc3QpXHJcblx0XHRcdG5ld0xhc3QgPSBvcHRPdmVyc2Nhbkxhc3Q7XHJcblx0XHRlbHNlIGlmIChtaW5PdmVyc2Nhbkxhc3QgPCBvbGRMYXN0ICYmIG1pbk92ZXJzY2FuTGFzdCA+IG9sZEZpcnN0KVxyXG5cdFx0XHRuZXdMYXN0ID0gTWF0aC5taW4oIG1heE92ZXJzY2FuTGFzdCwgb2xkTGFzdCk7XHJcblx0XHRlbHNlIGlmIChtYXhPdmVyc2Nhbkxhc3QgPCBvbGRGaXJzdClcclxuXHRcdFx0bmV3TGFzdCA9IG9wdE92ZXJzY2FuTGFzdDtcclxuXHRcdGVsc2UgaWYgKG1heE92ZXJzY2FuTGFzdCAtIG9sZEZpcnN0ID4gb2xkRmlyc3QgLSBvcHRPdmVyc2Nhbkxhc3QpXHJcblx0XHRcdG5ld0xhc3QgPSBtYXhPdmVyc2Nhbkxhc3Q7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld0xhc3QgPSBvcHRPdmVyc2Nhbkxhc3Q7XHJcblxyXG5cdFx0aWYgKG5ld0ZpcnN0ID4gbmV3TGFzdClcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYFdyb25nIFNjcm9sbEF4aXMgY2FsY3VsYXRpb246IG5ld0ZpcnN0ICcke25ld0ZpcnN0fScgaXMgZ3JlYXRlciB0aGFuIG5ld0xhc3QgJyR7bmV3TGFzdH0nYClcclxuXHJcblx0XHQvLyBzZXQgd2hhdCB3ZSBhbHJlYWR5IGtub3cgaW50byB0aGUgcmV0dXJuIG9iamVjdFxyXG5cdFx0cmV0QWN0aW9uLm5ld0ZpcnN0ID0gbmV3Rmlyc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3TGFzdCA9IG5ld0xhc3Q7XHJcblx0XHRyZXRBY3Rpb24ubmV3QXZnSXRlbVNpemUgPSBuZXdBdmdJdGVtU2l6ZTtcclxuXHRcdHJldEFjdGlvbi5uZXdXYWxsU2l6ZSA9IE1hdGguY2VpbCggdG90YWxDb3VudCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHRcdHJldEFjdGlvbi5uZXdTdWJzZXRPZmZzZXQgPSBNYXRoLmNlaWwoIG5ld0ZpcnN0ICogbmV3QXZnSXRlbVNpemUpO1xyXG5cclxuXHRcdC8vIG5vdyB0aGF0IHdlIGhhdmUgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zIHdlIHdhbnQsIGRldGVybWluZSB3aGF0IGl0ZW1zIHNob3VsZCBiZVxyXG5cdFx0Ly8gYWRkZWQvcmVtb3ZlZCBpbiB0aGUgYmVnaW5uaW5nIGFuZCB0aGUgZW5kXHJcblx0XHRpZiAobmV3Rmlyc3QgPT0gb2xkRmlyc3QgJiYgbmV3TGFzdCA9PSBvbGRMYXN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgbmV3IGRhdGFzZXQgaXMgdGhlIHNhbWUgYXMgdGhlIG9sZCBvbmUsIGRvbid0IGFkZC9yZW1vdmUgYW55IGl0ZW1zXHJcblx0XHRcdHJldEFjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZExhc3QgfHwgbmV3TGFzdCA8IG9sZEZpcnN0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb2xkIGFuZCB0aGUgbmV3IGRhdGFzZXRzIGRvbid0IGludGVyc2VjdCwgcmVtb3ZlIGFsbCBleGlzdGluZyBhbmQgYWRkIGFsbFxyXG5cdFx0XHQvLyBuZXcgaXRlbXMuXHJcblx0XHRcdHJldEFjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobmV3Rmlyc3QgPCBvbGRGaXJzdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG5lZWQgdG8gYWRkIHNvbWUgaXRlbXMgYXQgdGhlIGJlZ2lubmluZ1xyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvQWRkQXRTdGFydCA9IG9sZEZpcnN0IC0gbmV3Rmlyc3Q7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRGaXJzdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG5lZWQgdG8gcmVtb3ZlIHNvbWUgaXRlbXMgYXQgdGhlIGJlZ2lubmluZ1xyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCA9IG5ld0ZpcnN0IC0gb2xkRmlyc3Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChuZXdMYXN0IDwgb2xkTGFzdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG5lZWQgdG8gcmVtb3ZlIHNvbWUgaXRlbXMgYXQgdGhlIGVuZFxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPSBvbGRMYXN0IC0gbmV3TGFzdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdMYXN0ID4gb2xkTGFzdClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIG5lZWQgdG8gYWRkIHNvbWUgaXRlbXMgYXQgdGhlIGVuZFxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvQWRkQXRFbmQgPSBuZXdMYXN0IC0gb2xkTGFzdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRBY3Rpb247XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2Nyb2xsQXhpc0FjdGlvbiBjbGFzcyByZXByZXNlbnRzIHRoZSBhY3Rpb24ocykgdGhhdCBzaG91bGQgYmUgZG9uZSBhZnRlciB0aGUgU2Nyb2xsQXhpc1xyXG4gKiBwZXJmb3JtZWQgY2FsY3VsYXRpb25zIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmcmFtZSwgd2FsbCBhbmQgZGF0YS4gVGhlIGFjdGlvbnNcclxuICogYXJlIGluc3RydWN0aW9ucyB0byBhZGQgb3IgcmVtb3ZlIGl0ZW1zIGFuZCB0byBzZXQgd2FsbCBzaXplIGFuZCBkYXRhIG9mZnNldC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzQWN0aW9uXHJcbntcclxuXHQvLyBOZXcgYXZlYXJhZ2UgaXRlbSBzaXplXHJcblx0bmV3QXZnSXRlbVNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBzaXplIHRoYXQgc2hvdWxkIGJlIHNldCB0byB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3V2FsbFNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBvZmZzZXQgb2YgdGhlIHN1YnNldCBlbGVtZW50IGZyb20gdGhlIHdhbGwgZWxlbWVudFxyXG5cdG5ld1N1YnNldE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0ZpcnN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBpdGVtIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBzdWJzZXRcclxuXHRuZXdMYXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCBuZWl0aGVyIGFkZCBub3IgcmVtb3ZlIGFueSBpdGVtcy5cclxuXHRub0FkZFJlbW92ZU5lZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zLiBJZiB0aGlzIGZsYWcgaXMgc2V0XHJcblx0Ly8gdG8gdHJ1ZSwgdGhlbiB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zIGFuZCB0aGVuIGFkZCBhbGwgaXRlbXMgZnJvbVxyXG5cdC8vIG5ld0ZpcnN0IHRvIG5ld0xhc3RcclxuXHRuZWVlZFRvUmVtb3ZlQWxsSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBvbGRGaXJzdFxyXG5cdC8vIHRvIG5ld0ZpcnN0LTEuXHJcblx0Y291bnRUb1JlbW92ZUF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3TGFzdCsxXHJcblx0Ly8gdG8gb2xkTGFzdC5cclxuXHRjb3VudFRvUmVtb3ZlQXRFbmQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGJlZ2lubmluZy4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3Rmlyc3RcclxuXHQvLyB0byBvbGRGaXJzdC0xLlxyXG5cdGNvdW50VG9BZGRBdFN0YXJ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gYWRkIGF0IHRoZSBlbmQuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZExhc3QrMVxyXG5cdC8vIHRvIG5ld0xhc3QuXHJcblx0Y291bnRUb0FkZEF0RW5kOiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1Njcm9sbEF4aXMsIFNjcm9sbEF4aXNBY3Rpb259IGZyb20gXCIuL1Njcm9sbEF4aXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZUQWJsZUNlbGxEYXRhIGludGVyZmFjZSByZXByZXNlbnRzIGluZm9ybWF0aW9uIGFib3V0IGEgc2luZ2xlIGNlbGwgdGhhdCBpcyBwcm92aWRlZFxyXG4gKiBieSBhIGNhbGxlciB3aGVuIHJlcXVlc2VkIGJ5IFZUYWJsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlQ2VsbERhdGFcclxue1xyXG5cdC8qKiBDb250ZW50IG9mIHRoZSBjZWxsICovXHJcblx0Y29udGVudDogYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdHJvd1NwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0Y29sU3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIFN0eWxlIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNlbGwuICovXHJcblx0c3R5bGU/OiBtaW0uU3R5bGVQcm9wVHlwZTtcclxuXHJcblx0LyoqIENsYXNzIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGA8dGQ+YCBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNlbGwuICovXHJcblx0Y2xhc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZUYWJsZVByb3BzXHJcbntcclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgaW4gdGhlIGVudGlyZSBkYXRhc2V0ICovXHJcblx0dG90YWxSb3dDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGVudGlyZSBkYXRhc2V0ICovXHJcblx0dG90YWxDb2xDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBjZWxsIGRhdGEuIFxyXG5cdCAqL1xyXG5cdGdldENlbGxDYWxsYmFjazogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFwiVmlydHVhbGl6ZWRcIiB0YWJsZSB0aGF0IHJlbmRlcnMgb25seSBhIHN1YnNldCBvZiBhIGRhdGFzZXQgYW5kIGNoYW5nZXMgdGhpcyBzdWJzZXRcclxuICogYXMgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIGFuZCBmb3J0aC5cclxuICogXHJcbiAqIFZUYWJsZSB1c2VzIHRoZSBmb2xsb3dpbmcgMyBET00gZWxlbWVudHM6XHJcbiAqICAtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggZGlzcGxheXMgdGhlIHNjcm9sbGJhcnMgd2hlbiBuZWNlc3NhcnlcclxuICogIC0gd2FsbCAtIHRoZSBcImlubmVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGhhcyB0aGUgc2l6ZSBvZiB0aGUgZW50aXJlIHBvc3NpYmxlIHRhYmxlLiBJdCBpc1xyXG4gKiAgICBuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKiAgLSB0YWJsZSAtIHRoZSBgPHRhYmxlPmAgZWxlbWVudCB0aGF0IGNvbnRhaW5zIG9ubHkgcm93cyBhbmQgY29sdW1ucyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1c1xyXG4gKiAgICBhIGNlcnRhaW4gbnVtYmVyIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWVGFibGUgY2FsY3VsYXRlcyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aCBieSBkaXZpZGluZyB0aGUgc2l6ZSBvZiB0aGUgdGFibGVcclxuICogYnkgdGhlIG51bWJlciBvZiByb3dzL2NvbHVtbnMuIFRoZXNlIGF2ZXJhZ2UgdmFsdWVzIGFyZSByZWNhbGN1bGF0ZWQgZXZlcnkgdGltZSByb3dzIGFuZFxyXG4gKiBjb2x1bW5zIGFyZSBhZGRlZCBvciBkZWxldGVkIGZyb20gdGhlIHRhYmxlLiBCYXNlZCBvbiB0aGVzZSBhdmVyYWdlIHZhbHVlcyB0aGUgd2FsbCBlbGVtZW50XHJcbiAqIGlzIHNpemVkIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxpbmdcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZUYWJsZSB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgb24gYWxsIHNpZGVzIG9mXHJcbiAqIHRoZSBmcmFtZSBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBhY3R1YWwgbnVtYmVyIG9mIHJvd3MvY29sdW1ucyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmRcclxuICogbWF4aW11bSB2YWx1ZXMuIER1cmluZyBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLFxyXG4gKiBuZXcgY2VsbHMgYXJlIGFkZGVkIGFuZCBpZiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSBjZWxscyBhcmUgZGVsZXRlZCBzbyB0aGF0IHRoZVxyXG4gKiBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGlzIGVxdWFsIHRvIHRoZSBhdmVyYWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZUYWJsZSBleHRlbmRzIG1pbS5Db21wb25lbnQ8VlRhYmxlUHJvcHM+XHJcbntcclxuXHQvLyBPdmVyc2NhbiB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlc1xyXG5cdHByaXZhdGUgbWluUm93T3ZlcnNjYW4gPSAzO1xyXG5cdHByaXZhdGUgb3B0Um93T3ZlcnNjYW4gPSA1O1xyXG5cdHByaXZhdGUgbWF4Um93T3ZlcnNjYW4gPSAxMDtcclxuXHRwcml2YXRlIG1pbkNvbE92ZXJzY2FuID0gMztcclxuXHRwcml2YXRlIG9wdENvbE92ZXJzY2FuID0gNTtcclxuXHRwcml2YXRlIG1heENvbE92ZXJzY2FuID0gMTA7XHJcblxyXG5cdC8vIEN1cnJlbnQgZGF0YXNldCByZXByZXNlbnRlZCBieSByb3cgY29tcG9uZW50cy5cclxuXHRwcml2YXRlIHJvd3M6IFZSb3dbXTtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgY3VycmVudCBkYXRhc2V0IG9yIDAgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGZpcnN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IHJvdyBpbiB0aGUgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdFJvdzogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3QgY29sdW1uIGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgLTEgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGxhc3RDb2w6IG51bWJlcjtcclxuXHJcblx0Ly8gQ291bnRzIG9mIHJvd3MgYW5kIGNvbHVtbnNcclxuXHRwcml2YXRlIGdldCByb3dDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0Um93IC0gdGhpcy5maXJzdFJvdyArIDEgfVxyXG5cdHByaXZhdGUgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RDb2wgLSB0aGlzLmZpcnN0Q29sICsgMSB9XHJcblxyXG5cdHB1YmxpYyBnZXQgUm93cygpOiBzdHJpbmcgeyByZXR1cm4gYCR7dGhpcy5maXJzdFJvd30gLSAke3RoaXMubGFzdFJvd31gOyB9XHJcblx0cHVibGljIGdldCBDb2xzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Q29sfSAtICR7dGhpcy5sYXN0Q29sfWA7IH1cclxuXHJcblx0Ly8gU2l6ZSBvZiB0aGUgZW50aXJlIHRhYmxlIGJhc2VkIG9uIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoLiBUaGlzIGJlY29tZXMgdGhlXHJcblx0Ly8gc2l6ZSBvZiB0aGUgd2FsbC5cclxuXHRwcml2YXRlIHdhbGxIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIHdhbGxXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3QgY2FsY3VsYXRlZCBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aFxyXG5cdHByaXZhdGUgYXZnUm93SGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBhdmdDb2xXaWR0aDogbnVtYmVyO1xyXG5cclxuXHQvLyBMYXRlc3Qgc2Nyb2xsaW5nIHBvc2l0aW9uc1xyXG5cdHByaXZhdGUgbGF0ZXN0U2Nyb2xsVG9wOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxMZWZ0OiBudW1iZXI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZnJhbWUgdGhhdCBoYXMgdGhlIHNjb2xsYmFyc1xyXG5cdHByaXZhdGUgZnJhbWU6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgZnJhbWVSZWYgPSAocjogSFRNTERpdkVsZW1lbnQpID0+IHRoaXMuZnJhbWUgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHdhbGwgdGhhdCBpcyBiaWcgZW5vdWdoIHRvIGhvbGQgZW50aXJlIGRhdGFzZXRcclxuXHRwcml2YXRlIHdhbGw6IEhUTUxEaXZFbGVtZW50O1xyXG5cdHByaXZhdGUgd2FsbFJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy53YWxsID0gcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSB0YWJsZSB0aGF0IGRpc3BsYXlzIHRoZSBwYXJ0aWFsIGRhdGFzZXRcclxuXHRwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG5cdHByaXZhdGUgdGFibGVSZWYgPSAocjogSFRNTFRhYmxlRWxlbWVudCkgPT4gdGhpcy50YWJsZSA9IHI7XHJcblxyXG5cdC8vIE9iamVjdHMgdGhhdCBkZWFsIHdpdGggdmVydGljYWwgYW5kIGhvcml6b250YWwgc2Nyb2xsaW5nXHJcblx0cHJpdmF0ZSB2QXhpczogU2Nyb2xsQXhpcztcclxuXHRwcml2YXRlIGhBeGlzOiBTY3JvbGxBeGlzO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVlRhYmxlUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmF2Z1Jvd0hlaWdodCA9IDA7XHJcblx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBuZWdhdGl2ZSB2YWx1ZXMgaW5kaWNhdGUgdGhhdCB3ZSBoYXZlbid0IG1lYXN1cmVkIGFueSBzaXplcyB5ZXQuXHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbFRvcCA9IC0xO1xyXG5cdFx0dGhpcy5sYXRlc3RTY3JvbGxMZWZ0ID0gLTE7XHJcblxyXG5cdFx0Ly8gc2V0IGluaXRpYWwgc2l6ZSBvZiB0aGUgd2FsbCBlbGVtZW50IGJhc2VkIG9uIHNvbWUgaGFyZC1jb2RlZCB2YWx1ZXMuIEl0IHdpbGwgYmVcclxuXHRcdC8vIGNoYW5nZWQgYXMgc29vbiBhcyB3ZSByZW5kZXIgYW5kIHN0YXJ0IG1lYXN1cmluZyBvdXIgZWxlbWVudHNcclxuXHRcdHRoaXMud2FsbEhlaWdodCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCAqIDI1O1xyXG5cdFx0dGhpcy53YWxsV2lkdGggPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgKiA4MDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yb3dzID0gW107XHJcblxyXG5cdFx0Ly8gZmlsbCBpbiBpbml0aWFsIGRhdGFzZXRcclxuXHRcdGxldCByb3dDb3VudCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDogMTA7XHJcblx0XHRsZXQgY29sQ291bnQgPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgPCAxMCA/IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA6IDEwO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdGZvciggbGV0IGogPSAwOyBqIDwgY29sQ291bnQ7IGorKylcclxuXHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblxyXG5cdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdHRoaXMucm93cy5wdXNoKCB2cm93KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgZGF0YXNldCBzaXplXHJcblx0XHR0aGlzLmZpcnN0Um93ID0gMDtcclxuXHRcdHRoaXMubGFzdFJvdyA9IHJvd0NvdW50IC0gMTtcclxuXHRcdHRoaXMuZmlyc3RDb2wgPSAwO1xyXG5cdFx0dGhpcy5sYXN0Q29sID0gY29sQ291bnQgLSAxO1xyXG5cclxuXHRcdHRoaXMudkF4aXMgPSBuZXcgU2Nyb2xsQXhpcyggdGhpcy5taW5Sb3dPdmVyc2NhbiwgdGhpcy5vcHRSb3dPdmVyc2NhbiwgdGhpcy5tYXhSb3dPdmVyc2NhbilcclxuXHRcdHRoaXMuaEF4aXMgPSBuZXcgU2Nyb2xsQXhpcyggdGhpcy5taW5Db2xPdmVyc2NhbiwgdGhpcy5vcHRDb2xPdmVyc2NhbiwgdGhpcy5tYXhDb2xPdmVyc2NhbilcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHQvLyBkdXJpbmcgZWFjaCByZW5kZXJpbmcsIHdlIHNjaGVkdWxlIHRoZSBtZWFzdXJpbmcgZnVuY3Rpb25hbGl0eSwgd2hpY2ggd2lsbCBkZXRlcm1pbmcgd2hldGhlciB3ZVxyXG5cdFx0Ly8gbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBUaGUgbWVhc3VyaW5nIGZ1bmN0aW9uIHdpbGwgcnVuIGluIHRoZSBuZXh0IHRpY2sgYWZ0ZXIgdGhlIHJlbmRlci5cclxuXHRcdHRoaXMuY2FsbE1lKCB0aGlzLm1lYXN1cmVBbmRVcGRhdGUsIHRydWUpO1xyXG5cclxuXHRcdGxldCBmcmFtZVN0eWxlID0geyB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIgfTtcclxuXHRcdGxldCB3YWxsU3R5bGUgPSB7XHJcblx0XHRcdHdpZHRoOiBgJHt0aGlzLndhbGxXaWR0aH1weGAsXHJcblx0XHRcdGhlaWdodDogYCR7dGhpcy53YWxsSGVpZ2h0fXB4YCxcclxuXHRcdFx0b3ZlcmZsb3c6XCJub25lXCIsXHJcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuXHRcdH07XHJcblx0XHRsZXQgdGFibGVTdHlsZSA9IHtcclxuXHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0Ym9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5mcmFtZVJlZn0gc3R5bGU9e2ZyYW1lU3R5bGV9IHNjcm9sbD17dGhpcy5vblNjcm9sbH0+XHJcblx0XHRcdDxkaXYgcmVmPXt0aGlzLndhbGxSZWZ9IHN0eWxlPXt3YWxsU3R5bGV9PlxyXG5cdFx0XHRcdDx0YWJsZSByZWY9e3RoaXMudGFibGVSZWZ9IHN0eWxlPXt0YWJsZVN0eWxlfT5cclxuXHRcdFx0XHRcdHt0aGlzLnJvd3N9XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdCAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBJZiB3ZSBkbywgd2Ugc2NoZWR1bGUgcmUtcmVuZGVyaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWVhc3VyZUFuZFVwZGF0ZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm93Q291bnQgPT09IDAgfHwgdGhpcy5jb2xDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBmcmFtZVJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHdhbGxSZWN0ID0gdGhpcy53YWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHRhYmxlUmVjdCA9IHRoaXMudGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMubGF0ZXN0U2Nyb2xsVG9wICE9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyBoZWlnaHQ6IHNjcm9sbCB0b3AgPSAke3RoaXMuZnJhbWUuc2Nyb2xsVG9wfSwgcm93czogJHt0aGlzLnJvd0NvdW50fSwgYCArXHJcblx0XHRcdC8vIFx0XHRcdFx0YHdhbGwgaGVpZ2h0ID0gJHt3YWxsUmVjdC5oZWlnaHR9LCB0YWJsZSBoZWlnaHQgPSAke3RhYmxlUmVjdC5oZWlnaHR9YCk7XHJcblxyXG5cdFx0XHRsZXQgdkF4aXNBY3Rpb24gPSB0aGlzLnZBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxSb3dDb3VudCwgdGhpcy5maXJzdFJvdywgdGhpcy5yb3dDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCwgZnJhbWVSZWN0LmhlaWdodCwgd2FsbFJlY3QuaGVpZ2h0LCB0YWJsZVJlY3QuaGVpZ2h0LCB0aGlzLmZyYW1lLnNjcm9sbFRvcCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgcm93IGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemV9YCk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgdGhlIGxhdGVzdCB2ZXJ0aWNhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5sYXRlc3RTY3JvbGxUb3AgPSB0aGlzLmZyYW1lLnNjcm9sbFRvcDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgcm93cyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCF2QXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVJvd3MoIHZBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgaGVpZ2h0IGFuZCBzdWJzZXQgdmVydGljYWwgb2Zmc2V0IGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAodkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgIT0gd2FsbFJlY3QuaGVpZ2h0IHx8IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QudG9wIC0gd2FsbFJlY3QudG9wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWUoICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGFibGUuc3R5bGUudG9wID0gdkF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLmhlaWdodCA9IHZBeGlzQWN0aW9uLm5ld1dhbGxTaXplICsgXCJweFwiO1xyXG5cdFx0XHRcdH0sIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbExlZnQgIT0gdGhpcy5mcmFtZS5zY3JvbGxMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyB3aWR0aDogc2Nyb2xsIGxlZnQgPSAke3RoaXMuZnJhbWUuc2Nyb2xsTGVmdH0sIGNvbHM6ICR7dGhpcy5jb2xDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIHdpZHRoID0gJHt3YWxsUmVjdC53aWR0aH0sIHRhYmxlIHdpZHRoID0gJHt0YWJsZVJlY3Qud2lkdGh9YCk7XHJcblxyXG5cdFx0XHRsZXQgaEF4aXNBY3Rpb24gPSB0aGlzLmhBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxDb2xDb3VudCwgdGhpcy5maXJzdENvbCwgdGhpcy5jb2xDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z0NvbFdpZHRoLCBmcmFtZVJlY3Qud2lkdGgsIHdhbGxSZWN0LndpZHRoLCB0YWJsZVJlY3Qud2lkdGgsIHRoaXMuZnJhbWUuc2Nyb2xsTGVmdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCB3aWR0aCA9ICR7aEF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCBjb2wgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIGNvbHVtbiB3aWR0aCBhbmQgdGhlIGxhdGVzdCBob3Jpem9udGFsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gaEF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCA9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgY29sdW1ucyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCFoQXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvbHMoIGhBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgd2lkdGggYW5kIHN1YnNldCBob3Jpem9udGFsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LndpZHRoIHx8IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QubGVmdCAtIHdhbGxSZWN0LmxlZnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS5sZWZ0ID0gaEF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLndpZHRoID0gaEF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyByb3dzIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlIHZlcnRpY2FsXHJcblx0ICogc2Nyb2xsaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlUm93cyggYXhpc0FjdGlvbjogU2Nyb2xsQXhpc0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggYFVwZGF0aW5nIHJvd3MgZnJvbSAke3RoaXMuZmlyc3RSb3d9IC0gJHt0aGlzLmxhc3RSb3d9IHRvICR7YXhpc0FjdGlvbi5uZXdGaXJzdH0gLSAke2F4aXNBY3Rpb24ubmV3TGFzdH1gKTtcclxuXHJcblx0XHRpZiAoYXhpc0FjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm93cyA9IFtdO1xyXG5cdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5yb3dDb3VudH0gZXhpc3Rpbmcgcm93c2ApO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblx0XHJcblx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBlbmRcclxuXHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IHJvd3NgKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIHRoaXMucm93Q291bnQgLSBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCwgYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSByb3dzIGZyb20gYm90dG9tYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IHJvd3MgZnJvbSB0b3BgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3RSb3cgKyAxOyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0XHRcdHRoaXMucm93cy5wdXNoKCB2cm93KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IHJvd3MgdG8gYm90dG9tYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93IC0gMTsgaSA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpLS0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggMCwgMCwgdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnR9IHJvd3MgdG8gdG9wYCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Um93ID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdFJvdyA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyBjb2x1bW5zIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlXHJcblx0ICogaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVDb2xzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgY29sdW1ucyBmcm9tICR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH0gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0dnJvdy5yZW1vdmVBbGxDZWxscygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cclxuXHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMuY29sQ291bnR9IGV4aXN0aW5nIGNvbHNgKTtcclxuXHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLm5ld0xhc3QgLSBheGlzQWN0aW9uLm5ld0ZpcnN0ICsgMX0gY29sc2ApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0RW5kKCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCk7XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSBjb2xzIGZyb20gcmlnaHRgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0U3RhcnQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cdFx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IGNvbHMgZnJvbSBsZWZ0YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdzsgaSA8PSB0aGlzLmxhc3RSb3c7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5sYXN0Q29sICsgMTsgaiA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IGNvbHMgdG8gcmlnaHRgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2wgLSAxOyBqID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGotLSlcclxuXHRcdFx0XHRcdFx0dnJvdy5pbnNlcnRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydH0gY29scyB0byBsZWZ0YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Q29sID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblNjcm9sbCA9ICggZTogRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy52bi5zY2hlZHVsZUNhbGwoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSwgdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gc2V0VGltZW91dCggdGhpcy5tZWFzdXJlQW5kVXBkYXRlLCAwKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVlJvdyBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNlbGxzOiBWQ2VsbFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkQ2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMucHVzaCggbmV3IFZDZWxsKCBkYXRhKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5zZXJ0Q2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCAwLCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVBbGxDZWxscygpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRTdGFydCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggMCwgY291bnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRFbmQoIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIHRoaXMuY2VsbHMubGVuZ3RoIC0gY291bnQsIGNvdW50KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dHI+e3RoaXMuY2VsbHN9PC90cj47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIFZDZWxsIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0ZGF0YTogVlRhYmxlQ2VsbERhdGE7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBkYXRhOiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImNvbnRlbnRcIiBpbiBkYXRhKVxyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB7IGNvbnRlbnQ6IGRhdGEgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0ZCBjbGFzcz17dGhpcy5kYXRhLmNsYXNzfSBzdHlsZT17dGhpcy5kYXRhLnN0eWxlfVxyXG5cdFx0XHRcdFx0cm93c3Bhbj17dGhpcy5kYXRhLnJvd1NwYW4gPyB0aGlzLmRhdGEucm93U3BhbiA6IHVuZGVmaW5lZH1cclxuXHRcdFx0XHRcdGNvbHNwYW49e3RoaXMuZGF0YS5jb2xTcGFuID8gdGhpcy5kYXRhLmNvbFNwYW4gOiB1bmRlZmluZWR9PlxyXG5cdFx0XHR7dGhpcy5kYXRhLmNvbnRlbnR9XHJcblx0XHQ8L3RkPlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==