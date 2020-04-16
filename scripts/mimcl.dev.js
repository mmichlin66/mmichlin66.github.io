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

/***/ "./src/router/Router.tsx":
/*!*******************************!*\
  !*** ./src/router/Router.tsx ***!
  \*******************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLGVBQWU7SUFFN0IsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFZLEVBQUUsSUFBUztRQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLElB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RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2Q7U0FDTDtJQUNGLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7O0FDM3BCRCxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJtaW1jbC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW1ibFwiLCBcIm1pbXVybFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jbFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpLCByZXF1aXJlKFwibWltdXJsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jbFwiXSA9IGZhY3Rvcnkocm9vdFtcIm1pbWJsXCJdLCByb290W1wibWltdXJsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW11cmxfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbWNsVHlwZXMudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0FuZERyb3BEYXRhIHN0YXRpYyBjbGFzcyBkZWFscyB3aXRoIGRhdGEgb2YgYXJiaXRyYXJ5IHR5cGVzIGJlaW5nIHRyYW5zZmVyZWRcclxuLy8gZHVyaW5nIGRyYWcgJiBkcm9wIG9wZXJhdGlvbnMuIFdoZW4gYSBkcmFnIG9wZXJhdGlvbiBzdGFydHMsIHBpZWNlcyBvZiBkYXRhIGFyZSBhZGRlZCB0byBhIG1hcFxyXG4vLyB3aXRoIHR5cGVzIChmb3JtYXRzKSBhcyBrZXlzICh0aGVzZSBhcmUgdGhlIHNhbWUgZm9ybWF0cyB0aGF0IGFyZSBrZXB0IGluIHRoZSBIVE1MNSBEYXRhVHJhbnNmZXJcclxuLy8gb2JqZWN0LiBEYXRhIGlzIGFkZGVkIHVzaW5nIHRoZSBTZXRPYmplY3REYXRhIG1ldGhvZCBvZiB0aGUgSURyYWdTdGFydEV2ZW50IGludGVyZmFjZS4gV2hlbiB0aGVcclxuLy8gZHJvcCBvY2N1cnMsIHRoZSBHZXRPYmplY3REYXRhIG9mIHRoZSBJRHJhZ1RhcmdldEV2ZW50IGlzIHVzZWQgdG8gcmV0cmlldmUgdGhlIGRhdGEuIFRoZSBtYXAgaXNcclxuLy8gY2xlYXJlZCB3aGVuIHRoZSBkcmFnIG9wZXJhdGlvbiBlbmRzIC0gcmVnYXJkbGVzcyB3aGV0aGVyIGl0IHdhcyBzdWNjZXNzZnVsIG9yIHdhcyBjYW5jZWxlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmFnQW5kRHJvcERhdGFcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0eXBlIHx8IGRhdGEgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLnNldCggdHlwZSwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldE9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5nZXQoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByZW1vdmVPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuZGVsZXRlKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxPYmplY3REYXRhKCk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5jbGVhcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUgaW4gdGhlIGdpdmVuIERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0cHVibGljIHN0YXRpYyBoYXNUeXBlKCBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlciwgdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgaW1wbGVtbnRzIHR5cGVzIHZpYSBET01TdHJpbmdMaXN0LCB3aGNpaCBkb2Vzbid0IGhhdmUgaW5kZXhPZlxyXG5cdFx0aWYgKGRhdGFUcmFuc2Zlci50eXBlcy5pbmRleE9mKVxyXG5cdFx0XHRyZXR1cm4gZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YoIHR5cGUpID49IDA7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAoZGF0YVRyYW5zZmVyLnR5cGVzIGFzIGFueSBhcyBET01TdHJpbmdMaXN0KS5jb250YWlucyggdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcCBvZiBvYmplY3QgZm9ybWF0cyB0byBvYmplY3QgdmFsdWVzLlxyXG5cdHByaXZhdGUgc3RhdGljIGRhdGFNYXA6IE1hcDxzdHJpbmcsYW55PiA9IG5ldyBNYXA8c3RyaW5nLGFueT4oKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElFbXVsRGF0YVRyYW5zZmVyIGludGVyZmFjZSByZXByZXNlbnRzIG9iamVjdHMgdGhhdCBlbXVsYXRlIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlblxyXG4vLyB0aGUgZHJhZyBzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlclxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0aW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0aW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0aW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0aXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bERhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdFxyXG4vLyBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bERhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byB1cGRhdGUgdGhlIGRyYWcgZmVlZGJhY2ssIHJlcGxhY2luZyBhbnkgcHJldmlvdXNseSBzcGVjaWZpZWRcclxuXHQvLyBmZWVkYmFjay5cclxuXHRwdWJsaWMgc2V0RHJhZ0ltYWdlKCBpbWFnZTogRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGltYWdlO1xyXG5cdFx0dGhpcy5pbWFnZUVsbVggPSB4O1xyXG5cdFx0dGhpcy5pbWFnZUVsbVkgPSB5O1xyXG5cclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBoYXZlIHNldERyYWdJbWFnZSBtZXRob2QgaW4gaXRzIERhdGFUcmFuc2ZlciBjbGFzcy5cclxuXHRcdGlmIChzdXBlci5zZXREcmFnSW1hZ2UpXHJcblx0XHRcdHN1cGVyLnNldERyYWdJbWFnZSggaW1hZ2UsIHgsIHkpO1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgYSBuZXcgaW1hZ2UgZWxlbWVudCB3YXMgc2V0LCBzbyB0aGF0IHdlIHdpbGwgXCJwcmVwYXJlXCIgaXQgb24gdGhlIG5leHRcclxuXHRcdC8vIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZWZmZWN0QWxsb3dlZCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5lZmZlY3RBbGxvd2VkRXggPSB2YWw7XHJcblx0XHRzdXBlci5lZmZlY3RBbGxvd2VkID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4ID09PSB1bmRlZmluZWQgPyBzdXBlci5lZmZlY3RBbGxvd2VkIDogdGhpcy5lZmZlY3RBbGxvd2VkRXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBkcm9wRWZmZWN0KCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmRyb3BFZmZlY3QgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmRyb3BFZmZlY3QgOiB0aGlzLmRyb3BFZmZlY3RFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0RGF0YSggZm9ybWF0OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzdXBlci5zZXREYXRhKCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyRGF0YSggZm9ybWF0KTtcclxuXHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRwdWJsaWMgaW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0cHVibGljIGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbWFnZUVsbVJlc2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBlbXVsYXRlcyB0aGUgYmVoYXZpb3Igb2YgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuIHRoZSBkcmFnIHNvdXJjZVxyXG4vLyBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuIFRoaXMgb2JqZWN0IGlzIHVzZWQgdW5kZXIgRWRnZSwgd2hpY2ggZG9lc24ndFxyXG4vLyBpbXBsZW1lbnQgdGhlIG5hdGl2ZSBEYXRhVHJhbnNmZXIgb2JqZWN0IHByb3Blcmx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXIgaW1wbGVtZW50cyBJRW11bERhdGFUcmFuc2ZlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IFtdO1xyXG5cdFx0dGhpcy5tX2l0ZW1zID0gbnVsbDtcclxuXHRcdHRoaXMubV9maWxlcyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RBbGxvd2VkKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGRyb3BFZmZlY3QoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHRoaXMuZGF0YU1hcC5zZXQoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IHRoaXMuZGF0YU1hcC5nZXQoIGZvcm1hdCk7XHJcblx0XHRyZXR1cm4gcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHM7XHJcblx0fVxyXG5cclxuXHRjbGVhckRhdGEoIGZvcm1hdD86IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAoZm9ybWF0KVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuZGVsZXRlKCBmb3JtYXQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGFNYXAuY2xlYXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldCB0eXBlcygpOiBzdHJpbmdbXVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFGb3JtYXRzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIGdldCBmaWxlcygpOiBGaWxlTGlzdCB7IHJldHVybiB0aGlzLm1fZmlsZXM7IH1cclxuICAgIGdldCBpdGVtcygpOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCB7IHJldHVybiB0aGlzLm1faXRlbXM7IH1cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBhbGxvd2VkIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgYWxsb3dlZCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZWZmZWN0QWxsb3dlZEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgZHJvcCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGRyb3AgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBNYXAgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRvIGRhdGEgaXRlbXMuXHJcblx0cHJpdmF0ZSBkYXRhTWFwOiBNYXA8c3RyaW5nLHN0cmluZz47XHJcblxyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKS4gVGhpcyBhcnJheSBjaGFuZ2VzIGV2ZXJ5IHRpbWUgZGF0YSBpcyBzZXQgb3IgY2xlYXJlZC5cclxuXHRwcml2YXRlIGRhdGFGb3JtYXRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIG1fZmlsZXM6IEZpbGVMaXN0O1xyXG4gICAgcHJpdmF0ZSBtX2l0ZW1zOiBEYXRhVHJhbnNmZXJJdGVtTGlzdDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIm1pbWNzc1wiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wRWZmZWN0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBmb3IgZGlmZmVyZW50IGRyYWcgJiBkcm9wIGVmZmVjdHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnRHJvcEVmZmVjdFxyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdBbGxvd2VkRWZmZWN0c1xyXG57XHJcblx0Tm9uZSA9IFwibm9uZVwiLFxyXG5cdENvcHkgPSBcImNvcHlcIixcclxuXHRNb3ZlID0gXCJtb3ZlXCIsXHJcblx0TGluayA9IFwibGlua1wiLFxyXG5cdENvcHlNb3ZlID0gXCJjb3B5TW92ZVwiLFxyXG5cdENvcHlMaW5rID0gXCJjb3B5TGlua1wiLFxyXG5cdExpbmtNb3ZlID0gXCJsaW5rTW92ZVwiLFxyXG5cdEFsbCA9IFwiYWxsXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZUV2ZW50IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBldmVudCBoYW5kbGVycyBvbiB0aGVcclxuLy8gZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRyZWFkb25seSBkcmFnRXZlbnQ6IERyYWdFdmVudDtcclxuXHJcblx0Ly8gU2V0cyBkYXRhIHdpdGggdGhlIGdpdmVuIHR5cGUuIEZvciB0ZXh0IGRhdGEgdGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiBNSU1FIHR5cGVzLlxyXG5cdHNldERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0RXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHRhcmdldCBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueTtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdTb3VyY2UgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJhZyBzb3VyY2UuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnU291cmNlIGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIERhdGEgdG8gYmVcclxuLy8gcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgc3VwcGxpZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyYWdTdGFydCBjYWxsYmFja1xyXG4vLyBhbmQgdXNpbmcgdGhlIGUuc2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnU291cmNlXHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gc3RhcnRzIGZvciB0aGUgZWxlbWVudC5cclxuXHRvbkRyYWdTdGFydDogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBlbmRzLlxyXG5cdG9uRHJhZ0VuZD86IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuXHJcblx0b25EcmFnPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0b1xyXG4vLyBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBkaXJlY3RseSB2aWEgdGhlIGRhdGEgcHJvcGVydHkuIFRoaXNcclxuLy8gaW50ZXJmYWNlIGFsbG93cyBzaW1wbGlmeWluZyBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiB3aXRob3V0IHRoZSBuZWVkIHRvIGltcGxlbWVudCBhbnlcclxuLy8gY2FsbGJhY2tzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRHJhZ1NvdXJjZVxyXG57XHJcblx0Ly8gT2JqZWN0IGhvbGRpbmcgZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIGRyYWcgb3BlcmF0aW9uLiBFYWNoIHBpZWNlIG9mIGRhdGEgaXMgaWRlbnRpZmllZCBieVxyXG5cdC8vIGEgdW5pcXVlIHR5cGUgKGFrYSBmb3JtYXQpIHN0cmluZy5cclxuXHRkYXRhOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHJcblx0Ly8gQWxsb3dlZCBkcm9wIGVmZmVjdHMuIElmIGRlZmluZWQsIHRoaXMgbWVtYmVyIGlzIHVzZWQgb25seSBpZiBlaXRoZXIgdGhlIG9uRHJhZ1N0YXJ0XHJcblx0Ly8gY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgb3IgaXQgZG9lc24ndCBzZXQgYWxsb3dlZCBkcm9wIGVmZmVjdHMuXHJcblx0YWxsb3dlZEVmZmVjdHM/OiBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIERyYWcgc291cmNlIHByb3BlcnR5IChkcmFnU291cmNlKSBjYW4gaGF2ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBzaGFwZXM6XHJcbi8vXHQtIElEcmFnU291cmNlIGludGVyZmFjZSAtIGRyYWcgYmVoYXZpb3IgYW5kIGRhdGEgdG8gYmUgcGFzc2VkIHdpdGggaXQgaXMgZGV0ZXJtaW5lZFxyXG4vL1x0XHRieSBpbXBsZW1lbnRpbmcgdGhlIHJlbGV2YW50IGNhbGxiYWNrcy5cclxuLy9cdC0gSVNpbXBsZURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZGF0YSB0byBiZSBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpc1xyXG4vL1x0XHRkZWZpbmVkIGJ5IHRoZSBkYXRhIHByb3BlcnR5LlxyXG4vL1x0LSBcImVsbS10ZXh0XCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50XHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSBcImVsbS1odG1sXCIgc3RyaW5nIC0gdGhlIEVsZW1lbnQgb2JqZWN0IGlzIHVzZWQgYXMgb2JqZWN0IGRhdGEgYW5kIHRoZSBlbGVtZW50J3Mgb3V0ZXJIVE1MXHJcbi8vXHRcdGlzIHVzZWQgYXMgdGV4dCBkYXRhLlxyXG4vL1x0LSB0cnVlIC0gZXF1aXZhbGVudCB0byBcImVsbS1odG1sXCIgc3RyaW5nLlxyXG4vL1x0LSBmYWxzZSAtIGRyYWcgYmVoYXZpb3IgaXMgc3VwcHJlc3NlZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIERyYWdTb3VyY2VQcm9wVHlwZSA9IElEcmFnU291cmNlIHwgSVNpbXBsZURyYWdTb3VyY2UgfCBib29sZWFuIHwgXCJlbG0tdGV4dFwiIHwgXCJlbG0taHRtbFwiO1xyXG5cclxuXHJcblxyXG4vLyBTdHJpbmcgdXNlZCBhcyBhIHR5cGUgKGFrYSBmb3JtYXQpIHdoZW4gYW4gZWxlbWVudCBvYmplY3QgaXMgYmVpbmcgZHJhZ2dlZC5cclxuZXhwb3J0IGNvbnN0IERORFRZUEVfRUxFTUVOVCA9IFwiYXBwbGljYXRpb24vRE9NRWxlbWVudFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnMgb2ZcclxuLy8gdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgaW1wbGVtZW50aW5nIHRoZSBvbkRyb3AgY2FsbGJhY2sgYW5kIGNhbGxpbmcgdGhlIGUuZ2V0RGF0YSBtZXRob2QuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgZW50ZXJzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gSWYgdGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSwgdGhlIG9uRHJhZ092ZXJcclxuXHQvLyBhbmQgb25EcmFnTGVhdmUgbWV0aG9kcyB3aWxsIG5vdCBiZSBjYWxsZWQuXHJcblx0b25EcmFnRW50ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGhvdmVycyBvdmVyIHRoZSBlbGVtZW50IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi4gUmV0dXJucyB0cnVlIGlmIGRyb3AgaXMgcG9zc2libGUgYW5kIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhpcyBtZXRob2QgaXMgbm90XHJcblx0Ly8gaW1wbGVtZW50ZWQsIGRyb3AgaXMgY29uc2lkZXJlZCBwb3NzaWJsZS4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSBvclxyXG5cdC8vIGZhbHNlLCB0aGUgb25EcmFnT3ZlciBtZXRob2Qgd2lsbCBiZSBjb250aW51ZWQgdG8gYmUgY2FsbGVkIGFzIHRoZSBtb3VzZSBtb3Zlcy4gVGhpcyBhbGxvd3NcclxuXHQvLyBzb21lIHBhcnRzIG9mIHRoZSBlbGVtZW50IHRvIGJlIGRyb3AgdGFyZ2V0cyB3aGlsZSBvdGhlcnMgbm90LlxyXG5cdG9uRHJhZ092ZXI/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gYm9vbGVhbjtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGxlYXZlcyB0aGUgZWxlbWVudCBib3VuZGFyeSBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uXHJcblx0b25EcmFnTGVhdmU/OiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZGF0YSB3YXMgZHJvcGVkIGluIHRoaXMgZHJvcCB6b25lLlxyXG5cdG9uRHJvcDogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJU2ltcGxlRHJhZ1RhcmdldCBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcm9wIHRhcmdldC4gSW1wbGVtZW50YXRpb25zXHJcbi8vIG9mIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdUYXJnZXQgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gUmVjZWl2aW5nXHJcbi8vIGRhdGEgaXMgYWNjb21wbGlzaGVkIGJ5IHNwZWNpZnlpbmcgdGhlIGV4cGVjdGVkIHR5cGVzIHZpYSB0aGUgZGF0YVR5cGVzIHByb3BlcnR5IGFuZFxyXG4vLyBpbXBsZW1lbnRpbmcgdGhlIG9uRGF0YURyb3BwZWQgY2FsbGJhY2suXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnVGFyZ2V0XHJcbntcclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdGhhdCB0aGUgZHJhZyB0YXJnZXQgY2FuIHJlY2VpdmUuXHJcblx0ZGF0YVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcblx0Ly8gU3R5bGUgdG8gYXBwbHkgZm9yIGRyYWcgZmVlZGJhY2suXHJcblx0ZmVlZGJhY2s/OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGRhdGEgY29udGFpbmluZyBvbmUgb3IgbW9yZSBhcHByb3ByaWF0ZSB0eXBlcyBpcyBkcm9wcGVkLlxyXG5cdC8vIFRoZSBkYXRhIGlzIGRlbGl2ZXJlZCBhcyBhbiBvYmplY3Qgd2hlcmUgcHJvcGVydHkgbmFtZXMgYXJlIGRhdGEgdHlwZXMgYW5kIHZhbHVlcyBhcmVcclxuXHQvLyBkYXRhIHBpZWNlcyBvZiB0aGVzZSB0eXBlcy5cclxuXHRvbkRhdGFEcm9wcGVkOiAoZGF0YToge1t0eXBlOiBzdHJpbmddOiBhbnl9KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERyYWcgdGFyZ2V0IHByb3BlcnR5IChkcmFnVGFyZ2V0KSBjYW4gYmUgZWl0aGVyIElEcmFnVGFyZ2V0IGludGVyZmFjZSBvciByZWZlcmVuY2UgdG8gYW5cclxuLy8gRWxlbWVudC4gSW4gdGhlIGxhdHRlciBjYXNlLCB0aGUgcmVmZXJlbmNlIHdpbGwgYmUgc2V0IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaXMgYW5cclxuLy8gRWxlbWVudCBvYmplY3QuXHJcbmV4cG9ydCB0eXBlIERyYWdUYXJnZXRQcm9wVHlwZSA9IElEcmFnVGFyZ2V0IHwgSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvbGliL2FwaS9taW1cIlxyXG57XHJcblx0aW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4+XHJcblx0e1xyXG5cdFx0ZHJhZ1NvdXJjZT86IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHRcdGRyYWdUYXJnZXQ/OiBEcmFnVGFyZ2V0UHJvcFR5cGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdTb3VyY2VIYW5kbGVyLCBEcmFnU291cmNlRW11bGF0b3J9IGZyb20gXCIuL0RyYWdTb3VyY2VcIlxyXG5pbXBvcnQge0RyYWdUYXJnZXRIYW5kbGVyfSBmcm9tIFwiLi9EcmFnVGFyZ2V0XCJcclxuaW1wb3J0IHsgRHJhZ1NvdXJjZVByb3BUeXBlLCBEcmFnVGFyZ2V0UHJvcFR5cGUgfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnU291cmNlUHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdTb3VyY2VQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gXCJvd25lclNWR0VsZW1lbnRcIiBpbiBlbG1cclxuXHRcdFx0XHRcdD8gbmV3IERyYWdTb3VyY2VFbXVsYXRvciggZWxtLCBwcm9wVmFsKVxyXG5cdFx0XHRcdFx0OiBuZXcgRHJhZ1NvdXJjZUhhbmRsZXIoIGVsbSwgcHJvcFZhbCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnU291cmNlSGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1NvdXJjZVByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgc291cmNlIG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2VIYW5kbGVyOiBEcmFnU291cmNlSGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnVGFyZ2V0UHJvcFR5cGU+XHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmN1cnJWYWwgPSBwcm9wVmFsO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCBpc1JlbW92YWw6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG5ld1Byb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5jdXJyVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdUYXJnZXRQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJWYWwgPSBuZXdQcm9wVmFsO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5lbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gbmV3IERyYWdUYXJnZXRIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0SGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcblx0Y3VyclZhbDogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgdGFyZ2V0IG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRIYW5kbGVyOiBEcmFnVGFyZ2V0SGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWdpc3RlciBjdXN0b20gcHJvcGVydHkgZmFjdG9yeSBmb3IgZHJhZ1NvdXJjZSBhbmQgZHJhZ1RhcmdldCBwcm9wZXJ0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpXHJcbntcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1NvdXJjZVwiLCBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIpO1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnVGFyZ2V0XCIsIERyYWdUYXJnZXRDdXN0b21FbG1Qcm9wSGFuZGxlcik7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7RHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnU291cmNlUHJvcFR5cGUsIElEcmFnU291cmNlLCBJU2ltcGxlRHJhZ1NvdXJjZSwgSURyYWdTb3VyY2VFdmVudCwgRE5EVFlQRV9FTEVNRU5UfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YSwgSUVtdWxEYXRhVHJhbnNmZXIsIEVtdWxEYXRhVHJhbnNmZXIsIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXJ9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG50eXBlIERyYWdFdmVudFR5cGUgPSBcImRyYWdcIiB8IFwiZHJhZ2VuZFwiIHwgXCJkcmFnZW50ZXJcIiB8IFwiZHJhZ2V4aXRcIiB8IFwiZHJhZ2xlYXZlXCIgfCBcImRyYWdvdmVyXCIgfCBcImRyYWdzdGFydFwiIHwgXCJkcm9wXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1N0YXJ0RXZlbnQgY2xhc3MgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZGlmZmVyZW50IGV2ZW50IGhhbmRsZXJzXHJcbi8vIG9uIHRoZSBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VFdmVudCBpbXBsZW1lbnRzIElEcmFnU291cmNlRXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRnZXQgZHJhZ0V2ZW50KCk6IERyYWdFdmVudCB7IHJldHVybiB0aGlzLm1fZHJhZ0V2ZW50OyB9XHJcblx0c2V0IGRyYWdFdmVudCggdmFsOiBEcmFnRXZlbnQpIHsgdGhpcy5tX2RyYWdFdmVudCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgZGF0YSB3aXRoIHRoZSBnaXZlbiB0eXBlLiBGb3IgdGV4dCBkYXRhIHRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgTUlNRSB0eXBlcy5cclxuXHRzZXREYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBcIlwiKTtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLnNldE9iamVjdERhdGEoIHR5cGUsIGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cHJpdmF0ZSBtX2RyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUJlaGF2aW9yIGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyB0aGF0IGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW4gbWVjaGFuaXNtc1xyXG4vLyBzZXR1cCBieSBkaWZmZXJlbnQgdHlwZXMgb2YgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnU291cmNlQmVoYXZpb3Jcclxue1xyXG5cdFJlZ3VsYXIgPSAxLFxyXG5cdFNpbXBsZSxcclxuXHRFbG1UZXh0LFxyXG5cdEVsbUh0bWxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eS4gSXRcclxuLy8gaXMgdXNlZCBieSBIVE1MIGVsZW1lbnRzIHRoYXQgbmF0aXZlbHkgc3VwcG9ydCBkcmFnIGFuZCBkcm9wIGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnU291cmNlSGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1NvdXJjZVByb3A6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLXRleHRcIilcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0O1xyXG5cdFx0ZWxzZSBpZiAoZHJhZ1NvdXJjZVByb3AgPT09IFwiZWxtLWh0bWxcIiB8fCBkcmFnU291cmNlUHJvcCA9PT0gdHJ1ZSlcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sO1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdTb3VyY2VQcm9wIGFzIElTaW1wbGVEcmFnU291cmNlKS5kYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlO1xyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZSkub25EcmFnU3RhcnQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyO1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2UgPSBkcmFnU291cmNlUHJvcCBhcyBJRHJhZ1NvdXJjZTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiSW52YWxpZCB2YWx1ZSBvZiBkcmFnU291cmNlUHJvcCBpbiBEcmFnU291cmNlSGFuZGxlciBjb25zdHJ1Y3Rvci5cIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgb2JqZWN0IGJ5IG1ha2luZyB0aGUgZWxlbWVudCBkcmFnZ2FibGUgYnkgYWRkaW5nIGRyYWcgZXZlbnRzLlxyXG5cdHB1YmxpYyBpbml0KClcclxuXHR7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudCA9IG5ldyBEcmFnU291cmNlRXZlbnQoKTtcclxuXHRcdHRoaXMuZWxtLnNldEF0dHJpYnV0ZSggXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ3N0YXJ0XCIsIHRoaXMub25EcmFnU3RhcnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnZW5kXCIsIHRoaXMub25EcmFnRW5kKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ1wiLCB0aGlzLm9uRHJhZyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRlcm1pbmF0ZXMgdGhlIG9iamVjdCBieSByZW1vdmluZyBkcmFnIGV2ZW50IGhhbmRsZXJzIGZyb20gdGhlIGVsZW1lbnQuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ3N0YXJ0XCIsIHRoaXMub25EcmFnU3RhcnQpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnZW5kXCIsIHRoaXMub25EcmFnRW5kKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ1wiLCB0aGlzLm9uRHJhZyk7XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlQXR0cmlidXRlKCBcImRyYWdnYWJsZVwiKTtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWdzdGFydCBldmVudFxyXG5cdHByaXZhdGUgb25EcmFnU3RhcnQgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHRoZSBkYXRhIG1hcCAtIGp1c3QgaW4gY2FzZVxyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLlNpbXBsZSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgZGF0YVR5cGUgaW4gdGhpcy5zaW1wbGVEcmFnU291cmNlLmRhdGEpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggZGF0YVR5cGUsIHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5kYXRhW2RhdGFUeXBlXSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnU291cmNlLmFsbG93ZWRFZmZlY3RzICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5hbGxvd2VkRWZmZWN0cztcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLlJlZ3VsYXIpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgb25EcmFnU3RhcnQgbWV0aG9kIGlzIGRlZmluZWQsIGludm9rZSBpdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdTb3VyY2Uub25EcmFnU3RhcnQpXHJcblx0XHRcdFx0XHR0aGlzLmRyYWdTb3VyY2Uub25EcmFnU3RhcnQoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaChlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIERORFRZUEVfRUxFTUVOVCwgdGhpcy5lbG0pO1xyXG5cdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDtcclxuXHJcblx0XHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuRWxtVGV4dClcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBcInRleHQvcGxhaW5cIiwgdGhpcy5lbG0udGV4dENvbnRlbnQpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuRWxtSHRtbClcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBcInRleHQvcGxhaW5cIiwgdGhpcy5lbG0ub3V0ZXJIVE1MKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXIgZm9yIHRoZSBuYXRpdmUgZHJhZ2VuZCBldmVudFxyXG5cdHByaXZhdGUgb25EcmFnRW5kID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5iZWhhdmlvciAhPT0gRHJhZ1NvdXJjZUJlaGF2aW9yLlJlZ3VsYXIpXHJcblx0XHR7XHJcblx0XHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZ0VuZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZ0VuZCggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmaW5hbGx5XHJcblx0XHR7XHJcblx0XHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXIgZm9yIHRoZSBuYXRpdmUgZHJhZyBldmVudFxyXG5cdHByaXZhdGUgb25EcmFnID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLlJlZ3VsYXIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdTb3VyY2Uub25EcmFnKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2Uub25EcmFnKCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIGFuIEVsZW1lbnQuXHJcblx0cHJvdGVjdGVkIGVsbTogRWxlbWVudDtcclxuXHJcblx0Ly8vLyBGbGFnIGluZGljYXRpbmcgdGhhdCB3ZSBuZWVkIHRvIGltcGxlbWVudCBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yOyB0aGF0IGlzLCB3ZSBzaG91bGRcclxuXHQvLy8vIHBhc3MgdGhlIGVsZW1lbnQgb2JqZWN0IGFzIGRhdGEgYmVpbmcgZHJhZ2dlZC4gTm90ZSB0aGF0IGVpdGhlciB0aGlzIGZsYWcgaXMgdHJ1ZSBvclxyXG5cdC8vLy8gdGhlIGRyYWdTb3VyY2UgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHQvL3B1YmxpYyBkZWZhdWx0RHJhZ1NvdXJjZUJlaGF2aW9yRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gVHlwZSBvZiBkcmFnIHNvdXJjZSBtZWNoYW5pc20gZGV0ZXJtaW5lZCBieSB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eVxyXG5cdHByb3RlY3RlZCBiZWhhdmlvcjogRHJhZ1NvdXJjZUJlaGF2aW9yO1xyXG5cclxuXHQvLyBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgc291cmNlLiBUaGlzIHByb3BlcnR5IGNhbiBiZVxyXG5cdC8vIHVuZGVmaW5lZCBpZiBlaXRoZXIgd2UgYXJlIGltcGxlbWVudGluZyBhIGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3IuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlOiBJRHJhZ1NvdXJjZTtcclxuXHJcblx0Ly8gSURyYWdTb3VyY2UgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBjYW4gYmVcclxuXHQvLyB1bmRlZmluZWQgaWYgZWl0aGVyIHdlIGFyZSBpbXBsZW1lbnRpbmcgYSBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yLlxyXG5cdHByaXZhdGUgc2ltcGxlRHJhZ1NvdXJjZTogSVNpbXBsZURyYWdTb3VyY2U7XHJcblxyXG5cdC8vIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJldXNlZCB3aGVuIHNlbmRpbmcgZXZlbnRzIHRvIGEgZHJhZyBzb3VyY2UgZWxlbWVudC5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2VFdmVudDogRHJhZ1NvdXJjZUV2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUVtdWxhdG9yIGNsYXNzIGVtdWxhdGVzIHN1cHBvcnQgZm9yIERyYWcgYW5kIERyb3Agc291cmNlIGZ1bmN0aW9uYWxpdHkgdmlhIG1vdXNlXHJcbi8vIGV2ZW50cy4gSXQgaXMgdXNlZCBmb3IgRE9NIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBuYXRpdmUgZHJhZyBhbmQgZHJvcCBzdXBvcnQgLSBlLmcuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnU291cmNlRW11bGF0b3IgZXh0ZW5kcyBEcmFnU291cmNlSGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1NvdXJjZTogRHJhZ1NvdXJjZVByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBlbG0sIGRyYWdTb3VyY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgb2JqZWN0IGJ5IGFkZGluZyBhIG1vdXNlZG93biBldmVudC5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXJtaW5hdGVzIHRoZSBvYmplY3QgYnkgcmVtb3ZpbmcgYSBtb3VzZWRvd24gZXZlbnQuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHN1cGVyLnRlcm0oKTtcclxuXHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtZW1iZXIgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZS1kb3duIGV2ZW50IGFuZCBzdGFydCB3YXRjaGluZyBtb3VzZSBtb3ZlbWVudFxyXG5cdC8vKGFuZCBvdGhlcikgZXZlbnRzLlxyXG5cdHByaXZhdGUgb25Nb3VzZURvd24gPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBpZ25vcmUgbm9uLXByaW1hcnkgbW91c2UgYnV0dG9uc1xyXG5cdFx0aWYgKGUuYnV0dG9uICE9PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIHJlbWVtZWJlciBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UgZG93biBldmVudFxyXG5cdFx0dGhpcy5tb3VzZURvd25YID0gZS5jbGllbnRYO1xyXG5cdFx0dGhpcy5tb3VzZURvd25ZID0gZS5jbGllbnRZO1xyXG5cclxuXHRcdC8vIHN0YXJ0IGxpc3RlbmluZyB0byBzZXZlcmFsIERuRCByZWxhdGVkIGV2ZW50cyBvbiB0aGUgZG9jdW1lbnQuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXl1cFwiLCB0aGlzLm9uS2V5VXApO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gRWl0aGVyIHN0YXJ0IG9yIGNvbnRpbnVlIGRyYWcgb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBvbk1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIHByaW1hcnkgYnV0dG9uIG11c3QgYmUgc3RpbGwgcHJlc3NlZFxyXG5cdFx0aWYgKChlLmJ1dHRvbnMgJiAxKSA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIG5lZWQgdG8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAtIG90aGVyd2lzZSB0ZXh0IHdpbGwgYmUgc2VsZWN0ZWQgb24gdGhlIHBhZ2UuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly8gaWYgRG5EIG9wZXJhdGlvbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzIGZpcmUgZXZlbnRzOyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgdGhlXHJcblx0XHQvLyBtb3VzZSBtb3ZlZCBlbm91Z2ggdG8gc3RhcnQgdGhlIG9wZXJhdGlvbi5cclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVEcmFnU3RlcCggZSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjeCA9IGUuY2xpZW50WCAtIHRoaXMubW91c2VEb3duWDtcclxuXHRcdFx0bGV0IGN5ID0gZS5jbGllbnRZIC0gdGhpcy5tb3VzZURvd25ZO1xyXG5cdFx0XHRpZiAoY3ggPj0gLTIgJiYgY3ggPD0gMiAmJiBjeSA+PSAtMiAmJiBjeSA8PSAyKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcclxuXHRcdFx0dGhpcy5pbml0aWF0ZURyYWdPcGVyYXRpb24oIGUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblxyXG5cclxuXHQvLyBGaW5pc2ggZHJhZyBvcGVyYXRpb24gaWYgdGhlIHRhcmdldCBhY2NlcHRzIGl0LlxyXG5cdHByaXZhdGUgb25Nb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZURyb3AoIGUpO1xyXG5cclxuXHRcdHRoaXMuY2xlYW51cERyYWdPcGVyYXRpb24oKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbHMgZHJhZyBvcGVyYXRpb24gaWYgY2FuY2VsIHdhcyBwcmVzc2VkXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmIChlLmtleUNvZGUgPT09IDI3KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiBFc2NhcGUgLSBjYW5jZWwgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb25cclxuXHRcdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuY2FuY2VsRHJhZ09wZXJhdGlvbiggZSk7XHJcblxyXG5cdFx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVLZXlFdmVudCggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVzIGtleXVwIGV2ZW50c1xyXG5cdHByaXZhdGUgb25LZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUtleUV2ZW50KCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYXRlcyBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgaW5pdGlhdGVEcmFnT3BlcmF0aW9uKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChcInNldERyYWdJbWFnZVwiIGluIERhdGFUcmFuc2Zlci5wcm90b3R5cGUpXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2ZlciA9IG5ldyBFbXVsRGF0YVRyYW5zZmVyKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2ZlciA9IG5ldyBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyKCk7XHJcblxyXG5cdFx0Ly8gZmlyZSBvbkRyYWdTdGFydCBldmVudCAtIGlmIHRoZSBkZWZhdWx0IGFjdGlvbiBpcyBwcmV2ZW50ZWQsIHdlIGNhbmNlbCB0aGUgb3BlcmF0aW9uXHJcblx0XHRsZXQgZHJhZ3N0YXJ0RXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ3N0YXJ0XCIpO1xyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggZHJhZ3N0YXJ0RXZlbnQpO1xyXG5cdFx0aWYgKGRyYWdzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2xlYW51cERyYWdPcGVyYXRpb24oKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlmIHRoZSBkcmFnIHNvdXJjZSBkaWRuJ3Qgc2V0IGFuIGVsZW1lbnQgZm9yIGRyYWcgaW1hZ2UsIHVzZSB0aGUgZWxlbWVudCBpdHNlbGYuXHJcblx0XHRpZiAoIXRoaXMuZW11bERhdGFUcmFuc2Zlci5pc0ltYWdlRWxtUmVzZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGNhbGN1bHRlIGRyYWcgaW1hZ2UgY29vcmRpbmF0ZXMgc28gdGhhdCBpbml0aWFsbHkgdGhlIGRyYWcgaW1hZ2UgY29pbnNpZGVzIHdpdGhcclxuXHRcdFx0Ly8gdGhlIG9yaWdpbmFsIGltYWdlXHJcblx0XHRcdGxldCByYzogQ2xpZW50UmVjdCA9IHRoaXMuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKCB0aGlzLmVsbSwgZS5jbGllbnRYIC0gcmMubGVmdCwgZS5jbGllbnRZIC0gcmMudG9wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHdlIGRvbid0IGtub3cgbGFzdCB0YXJnZXQgeWV0XHJcblx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIHBlcmZvcm0gYSBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaGFuZGxlRHJhZ1N0ZXAoIGUpO1xyXG5cdH07XHJcblx0XHJcblxyXG5cclxuXHQvLyBIYW5kbGUgb25lIHN0ZXAgb2YgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24sIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBtb3VzZSBtb3Zlc1xyXG5cdHByaXZhdGUgaGFuZGxlRHJhZ1N0ZXAoIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2Zlci5pc0ltYWdlRWxtUmVzZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucHJlcGFyZUltYWdlRWxlbWVudCgpO1xyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0ID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYmVmb3JlIHNlbmRpbmcgZHJhZ292ZXIgZXZlbnQgd2Ugc2V0IHRoZSBkcm9wRWZmZWN0IHRvIG5vbmUsIGFuZCB0aGUgZHJvcG92ZXIgaGFuZGxlclxyXG5cdFx0Ly8gY291bGQgc2V0IGl0IHRvIHNvbWV0aGluZyBlbHNlIGlmIGRlc2lyZWRcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0Ly8gZmluZCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3JcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKSB0aGlzLmltYWdlRWxtLmhpZGRlbiA9IHRydWU7XHJcblx0XHRsZXQgbmV3VGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCggZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pIHRoaXMuaW1hZ2VFbG0uaGlkZGVuID0gZmFsc2U7XHJcblx0XHRpZiAobmV3VGFyZ2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB3ZSBhcmUgb24gdGhlIHNhbWUgdGFyZ2V0IGFzIHRoZSBwcmV2aW91cyBtb3VzZSBtb3ZlLCBqdXN0IHNlbmQgZHJhZ292ZXIgKGlmXHJcblx0XHRcdC8vIHRoZSB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUpXHJcblx0XHRcdGlmIChuZXdUYXJnZXQgPT09IHRoaXMubGFzdFRhcmdldClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnb3ZlckV2ZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHNlbmQgZHJhZ2VudGVyIHRvIHRoZSBuZXcgdGFyZ2V0IGFuZCBkZXRlcm1pbmUgd2hldGhlciBpdCBpcyBhIHZhbGlkIGRyb3BcclxuXHRcdFx0XHQvLyB6b25lXHJcblx0XHRcdFx0bGV0IGRyYWdlbnRlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdlbnRlclwiKTtcclxuXHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ2VudGVyRXZlbnQpO1xyXG5cdFx0XHRcdGxldCBpc05ld1RhcmdldERyb3BwYWJsZTogYm9vbGVhbiA9IGRyYWdlbnRlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblxyXG5cdFx0XHRcdC8vIHNlbmQgdGhlIGxhc3QgdGFyZ2V0IChpZiBleGlzdHMgYW5kIGlzIGRyb3BwYWJsZSkgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0ICYmIHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyB0YXJnZXQgYW5kIHdoZXRoZXIgaXQgaXMgYSB2YWxpZCBkcm9wIHpvbmVcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQgPSBuZXdUYXJnZXQ7XHJcblx0XHRcdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBpc05ld1RhcmdldERyb3BwYWJsZTtcclxuXHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gaXNOZXdUYXJnZXREcm9wcGFibGU7XHJcblxyXG5cdFx0XHRcdC8vIGlmIG91ciBuZXcgdGFyZ2V0IGlzIGRyb3BwYWJhbGUsIHNlbmQgZHJhZ292ZXIgdG8gaXRcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5sYXN0VGFyZ2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB3ZSBkb250IGhhdmUgbmV3IHRhcmdldCBidXQgaGF2ZSBsYXN0IG9uZSB0YXJnZXQsIHNlbmQgZHJhZ2xlYXZlIHRvIHRoZSBsYXN0IG9uZVxyXG5cdFx0XHQvLyAoaWYgdGhlIGxhc3QgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lKVxyXG5cdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHRcdHRoaXMubGFzdFRhcmdldCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlbmQgZHJhZyBldmVudCB0byBvdXIgc291cmNlXHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdcIikpO1xyXG5cclxuXHRcdC8vIG1vdmUgdGhlIGRyYWcgaW1hZ2UgZWxlbWVudCB0byB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvblxyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0uc3R5bGUubGVmdCA9IGUuY2xpZW50WCAtIHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKyBcInB4XCI7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0uc3R5bGUudG9wID0gZS5jbGllbnRZIC0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWSArIFwicHhcIjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB1cGRhdGUgaW1hZ2UgYmFzZWQgb24gdGhlIGxhdGVzdCBmZWVkYmFja1xyXG5cdFx0aWYgKHRoaXMuZHJvcEVmZmVjdEVsbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyb3BFZmZlY3Q6IHN0cmluZyA9IHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPyB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA6IFwibm9uZVwiO1xyXG5cdFx0XHR0aGlzLnNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdCk7XHJcblx0XHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5sZWZ0ID0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArIDEyICsgXCJweFwiO1xyXG5cdFx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUudG9wID0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWSArIDAgKyBcInB4XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgbGFzdCBtb3VzZSBldmVudCAtIHdlIG1heSB1c2UgaXQgdG8gY3JlYXRlIERyYWdFdmVudCBvYmplY3RzIGlmIHdlIG5lZWQgdG9cclxuXHRcdC8vIGRpc3BhdGNoIGRyYWcgZXZlbnRzIHVwb24ga2V5Ym9hcmQgZXZlbnRzIChlLmcuIGNhbmNlbCBvcGVyYXRpb24gd2hlbiBFc2NhcGUgaXMgcHJlc3NlZFxyXG5cdFx0Ly8gb3IgZHJhZ292ZXIgZXZlbnQgaWYgQ3RybCwgQWx0IG9yIFNoaWZ0IGJ1dHRvbnMgYXJlIHByZXNzZWQpLlxyXG5cdFx0dGhpcy5sYXN0TW91c2VFdmVudCA9IGU7XHJcbn07XHJcblx0XHJcblxyXG5cclxuXHQvLyBIYW5kbGVzIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cyBkdXJpbmcgZHJhZyBvcGVyYXRpb24gYnkgc2VuZGluZyBkcmFnb3ZlciBldmVudC5cclxuXHRwcml2YXRlIGhhbmRsZUtleUV2ZW50KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnb3ZlckV2ZW50KTtcclxuXHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHJcblx0XHRcdC8vIHNlbmQgZHJhZyBldmVudCB0byBvdXIgc291cmNlXHJcblx0XHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ1wiKSk7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgaW1hZ2UgYmFzZWQgb24gdGhlIGxhdGVzdCBmZWVkYmFja1xyXG5cdFx0XHRpZiAodGhpcy5kcm9wRWZmZWN0RWxtKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGRyb3BFZmZlY3Q6IHN0cmluZyA9IHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPyB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA6IFwibm9uZVwiO1xyXG5cdFx0XHRcdHRoaXMuc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gVGFrZXMgdGhlIGltYWdlIGVsZW1lbnQgKGlmIGFueSkgc3BlY2lmaWVkIHZpYSB0aGUgY2FsbCB0byBzZXREcmFnSW1hZ2UgYW5kIGNsb25lcyBpdCBpbnRvXHJcblx0Ly8gYSBzcGVjaWFsIGRpdiB0aGF0IHdpbGwgYmUgc2hvd24gZHVyaW5nIHRoZSBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgcHJlcGFyZUltYWdlRWxlbWVudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBwcmV2aW91cyBpbWFnZSBlbGVtZW50LCByZW1vdmUgaXQgbm93XHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5yZW1vdmUoKTtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbSA9PSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG9yZ0VsbTogRWxlbWVudCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbTtcclxuXHRcdGlmICghb3JnRWxtKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgZGl2IGVsZW1lbnQsIHdoaWNoIHdpbGwgd3JhcCB0aGUgaW1hZ2UgZWxlbWVudCBhbmQgd2lsbCBiZSBhZGRlZCB0byB0aGVcclxuXHRcdC8vIGRvY3VtZW50IGJvZHkgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbmluZyBhbmQgc29tZSBvcGFjaXR5XHJcblx0XHRsZXQgZGl2RWxtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIpO1xyXG5cclxuXHRcdC8vIGNsb25lIHRoZSBvcmlnaW5hbCBlbGVtZW50IGJlY2F1c2Ugd2UgYXJlIGdvaW5nIHRvIG1vdmUgaXQgYXJvdW5kLlxyXG5cdFx0bGV0IGNsb25lZEVsbTogRWxlbWVudCA9IG9yZ0VsbS5jbG9uZU5vZGUoKSBhcyBFbGVtZW50O1xyXG5cclxuXHRcdC8vIGlmIHRoZSBpbWFnZSBlbGVtZW50IHNldCB2aWEgc2V0RHJhZ0ltYWdlIGlzIGFuIFNWRyBlbGVtZW50IGJ1dCBub3QgdGhlIDxzdmc+IGVsZW1lbnRcclxuXHRcdC8vIGl0c2VsZiwgdGhlbiB3cmFwIGl0IGluIGFuIDxzdmc+IGVsZW1lbnQuXHJcblx0XHRpZiAobWltLmlzU3ZnKCBvcmdFbG0pICYmICFtaW0uaXNTdmdTdmcoIG9yZ0VsbSkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdmdFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcblx0XHRcdHN2Z0VsbS5hcHBlbmRDaGlsZCggY2xvbmVkRWxtKTtcclxuXHRcdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCBzdmdFbG0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIGNsb25lZEVsbSk7XHJcblxyXG5cdFx0Ly8gc3R5bGUgdGhlIGRpdiBlbGVtZW50IHdpdGggYWJzb2x1dGUgcG9zaXRpb25pbmcgYW5kIHNvbWUgb3BhY2l0eVxyXG5cdFx0ZGl2RWxtLnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xyXG5cdFx0ZGl2RWxtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG5cclxuXHRcdC8vIGFkZCBhIHNwYW4gZWxlbWVudCBmb3IgZGlzcGxheWluZyBcImRyb3BFZmZlY3RcIiBpbWFnZVxyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzcGFuXCIpO1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG5cdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCB0aGlzLmRyb3BFZmZlY3RFbG0pO1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGRpdkVsbSk7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gZGl2RWxtO1xyXG5cclxuXHRcdC8vIGNvbXBhcmUgdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSBvZiB0aGUgZWxlbWVudCBzZXQgdmlhIHNldERyYWdJbWFnZSBhbmQgdGhlIHdyYXBwaW5nIGRpdlxyXG5cdFx0Ly8gZWxlbWVudC4gVGhlaXIgdG9wLWxlZnQgY29vcmRpbmF0ZXMgbWF5IG5vdCBjb2luc2lkZSBkdWUgdG8gc2V2ZXJhbCBmYWN0b3JzIChlLmcuXHJcblx0XHQvLyBhYnNvbHV0ZSBwb3NpdGlvbmluZyBvciBTVkcgY29vcmRpbmF0ZXMpLiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBhZGp1c3QgdGhlIHggYW5kIHlcclxuXHRcdC8vIGNvb3JkaW5hdGVzIGluIHRoZSBFbXVsRGF0YVRyYW5zZmVyIG9iamVjdC5cclxuXHRcdGxldCByY0Nsb25lZEVsbTogQ2xpZW50UmVjdCA9IGNsb25lZEVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCByY0RpdkVsbTogQ2xpZW50UmVjdCA9IGRpdkVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGlmIChyY0Nsb25lZEVsbS5sZWZ0ICE9IHJjRGl2RWxtLmxlZnQpXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKz0gcmNDbG9uZWRFbG0ubGVmdCAtIHJjRGl2RWxtLmxlZnQ7XHJcblx0XHRpZiAocmNDbG9uZWRFbG0udG9wICE9IHJjRGl2RWxtLnRvcClcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWSArPSByY0Nsb25lZEVsbS50b3AgLSByY0RpdkVsbS50b3A7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXkgc21hbGwgaW1hZ2UgaW5kaWNhdGluZyB3aGF0IGRyb3AgZWZmZWN0IGlzIGV4cGVjdGVkXHJcblx0cHJpdmF0ZSBzZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3Q6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmc7XHJcblx0XHRsZXQgY29sb3I6IHN0cmluZztcclxuXHRcdHN3aXRjaCggZHJvcEVmZmVjdClcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBcIm5vbmVcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWJhblwiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJyZWRcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJjb3B5XCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1wbHVzXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcImdyZWVuXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwibGlua1wiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtbGlua1wiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJibHVlXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcImJsYWNrXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5pc2ggZHJhZyBvcGVyYXRpb24gaWYgdGhlIHRhcmdldCBhY2NlcHRzIGl0LlxyXG5cdHByaXZhdGUgaGFuZGxlRHJvcCggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB3ZSBkb24ndCBuZWVkIHRvIGZpbmQgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yIGJlY2F1c2UgZHJvcCBhbHdheXMgb2NjdXJzIG9uIHRoZSBsYXN0XHJcblx0XHQvLyBmb3VuZCB0YXJnZXQgKG9yIG5vIHRhcmdldCBhdCBhbGwpXHJcblx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldClcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcm9wXCIpKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgIFwiZHJhZ2VuZFwiKSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWwgZHJhZyBvcGVyYXRpb24gaWYgY2FuY2VsIHdhcyBwcmVzc2VkXHJcblx0cHJpdmF0ZSBjYW5jZWxEcmFnT3BlcmF0aW9uKCBlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluZGljYXRlIHRoYXQgRG5EIHdhcyBjYW5jZWxlZFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHQvLyBzZW5kIHRoZSBsYXN0IHRhcmdldCAoaWYgZXhpc3RzIGFuZCBpcyBkcm9wcGFibGUpIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0ICYmIHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdC8vIGZpcmUgb25EcmFnRW5kIGV2ZW50XHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdlbmRcIikpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYW4gdXAgYWZ0ZXIgZHJhZyBvcGVyYXRpb24gZmluaXNoZXMgd2l0aCBlaXRoZXIgZHJvcCBvciBjYW5jZWxhdGlvblxyXG5cdHByaXZhdGUgY2xlYW51cERyYWdPcGVyYXRpb24oKVxyXG5cdHtcclxuXHRcdC8vIGRlc3Ryb3kgdGhlIERhdGFUcmFuc2ZlciBvYmplY3RcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2ZlciA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcCk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXl1cFwiLCB0aGlzLm9uS2V5VXApO1xyXG5cclxuXHRcdHRoaXMubGFzdFRhcmdldCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHRcdHRoaXMubGFzdE1vdXNlRXZlbnQgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0ucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0gPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBjcmVhdGVzIERyYWdFdmVudCBmcm9tIHRoZSBnaXZlbiBNb3VzZUV2ZW50IGFuZCB0aGUgc3RhdGljIERhdGFUcmFuc2ZlciBvYmplY3RcclxuXHRwcml2YXRlIGNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlOiBNb3VzZUV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50XHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgbmV3IERyYWdFdmVudCB5ZXQsIHdoaWxlIENocm9tZSBkb2Vzbid0IHN1cHBvcnQgaW5pdERyYWdFdmVudFxyXG5cdFx0aWYgKFwiaW5pdERyYWdFdmVudFwiIGluIERyYWdFdmVudC5wcm90b3R5cGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRHJhZ0V2ZW50Jyk7XHJcblx0XHRcdChkcmFnRXZlbnQgYXMgYW55KS5pbml0RHJhZ0V2ZW50KCB0eXBlLCBlLmJ1YmJsZXMsIGUuY2FuY2VsYWJsZSwgZS52aWV3LCBlLmRldGFpbCwgZS5zY3JlZW5YLCBlLnNjcmVlblksXHJcblx0XHRcdFx0XHRcdFx0ZS5jbGllbnRYLCBlLmNsaWVudFksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgZS5idXR0b24sXHJcblx0XHRcdFx0XHRcdFx0ZS5yZWxhdGVkVGFyZ2V0LCB0aGlzLmVtdWxEYXRhVHJhbnNmZXIpO1xyXG5cdFx0XHRyZXR1cm4gZHJhZ0V2ZW50O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gbmV3IERyYWdFdmVudCAoIHR5cGUsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRidWJibGVzOiBlLmJ1YmJsZXMsXHJcblx0XHRcdFx0Y2FuY2VsYWJsZTogZS5jYW5jZWxhYmxlLFxyXG5cdFx0XHRcdGRldGFpbDogZS5kZXRhaWwsXHJcblx0XHRcdFx0dmlldzogZS52aWV3LFxyXG5cdFx0XHRcdGFsdEtleTogZS5hbHRLZXksXHJcblx0XHRcdFx0YnV0dG9uOiBlLmJ1dHRvbixcclxuXHRcdFx0XHRidXR0b25zOiBlLmJ1dHRvbnMsXHJcblx0XHRcdFx0Y2xpZW50WDogZS5jbGllbnRYLFxyXG5cdFx0XHRcdGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHRcdFx0XHRjdHJsS2V5OiBlLmN0cmxLZXksXHJcblx0XHRcdFx0bWV0YUtleTogZS5tZXRhS2V5LFxyXG5cdFx0XHRcdHJlbGF0ZWRUYXJnZXQ6IGUucmVsYXRlZFRhcmdldCxcclxuXHRcdFx0XHRzY3JlZW5YOiBlLnNjcmVlblgsXHJcblx0XHRcdFx0c2NyZWVuWTogZS5zY3JlZW5ZLFxyXG5cdFx0XHRcdHNoaWZ0S2V5OiBlLnNoaWZ0S2V5LFxyXG5cdFx0XHRcdGRhdGFUcmFuc2ZlcjogdGhpcy5lbXVsRGF0YVRyYW5zZmVyLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBEcmFnRXZlbnQgZnJvbSB0aGUgZ2l2ZW4gS2V5Ym9hcmRFdmVudCBhbmQgdGhlIERhdGFUcmFuc2ZlciBvYmplY3QuIFVzZXMgbGFzdCByZW1lbWJlcmVkXHJcblx0Ly8gbW91c2UgZXZlbnQgdG8gZmlsbCBjb29yZGluYXRlcyBhbmQgYnV0dG9uIGluZm9ybWF0aW9uLlxyXG5cdHByaXZhdGUgY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGU6IEtleWJvYXJkRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUpOiBEcmFnRXZlbnRcclxuXHR7XHJcblx0XHQvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBuZXcgRHJhZ0V2ZW50IHlldCwgd2hpbGUgQ2hyb21lIGRvZXNuJ3Qgc3VwcG9ydCBpbml0RHJhZ0V2ZW50XHJcblx0XHRpZiAoXCJpbml0RHJhZ0V2ZW50XCIgaW4gRHJhZ0V2ZW50LnByb3RvdHlwZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyYWdFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdEcmFnRXZlbnQnKTtcclxuXHRcdFx0KGRyYWdFdmVudCBhcyBhbnkpLmluaXREcmFnRXZlbnQoIHR5cGUsIGUuYnViYmxlcywgZS5jYW5jZWxhYmxlLCBlLnZpZXcsIGUuZGV0YWlsLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWCwgdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5ZLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WCwgdGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRZLFxyXG5cdFx0XHRcdFx0XHRcdGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b24sXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5yZWxhdGVkVGFyZ2V0LCB0aGlzLmVtdWxEYXRhVHJhbnNmZXIpO1xyXG5cdFx0XHRyZXR1cm4gZHJhZ0V2ZW50O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gbmV3IERyYWdFdmVudCAoIHR5cGUsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRidWJibGVzOiBlLmJ1YmJsZXMsXHJcblx0XHRcdFx0Y2FuY2VsYWJsZTogZS5jYW5jZWxhYmxlLFxyXG5cdFx0XHRcdGRldGFpbDogZS5kZXRhaWwsXHJcblx0XHRcdFx0dmlldzogZS52aWV3LFxyXG5cdFx0XHRcdGFsdEtleTogZS5hbHRLZXksXHJcblx0XHRcdFx0YnV0dG9uOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmJ1dHRvbixcclxuXHRcdFx0XHRidXR0b25zOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmJ1dHRvbnMsXHJcblx0XHRcdFx0Y2xpZW50WDogdGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRYLFxyXG5cdFx0XHRcdGNsaWVudFk6IHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WSxcclxuXHRcdFx0XHRjdHJsS2V5OiBlLmN0cmxLZXksXHJcblx0XHRcdFx0bWV0YUtleTogZS5tZXRhS2V5LFxyXG5cdFx0XHRcdHJlbGF0ZWRUYXJnZXQ6IHRoaXMubGFzdE1vdXNlRXZlbnQucmVsYXRlZFRhcmdldCxcclxuXHRcdFx0XHRzY3JlZW5YOiB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblgsXHJcblx0XHRcdFx0c2NyZWVuWTogdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5ZLFxyXG5cdFx0XHRcdHNoaWZ0S2V5OiBlLnNoaWZ0S2V5LFxyXG5cdFx0XHRcdGRhdGFUcmFuc2ZlcjogdGhpcy5lbXVsRGF0YVRyYW5zZmVyLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIGRvd24gZXZlbnQgZm9yIHRoZSBwcmltYXJ5IGJ1dHRvbi4gV2Ugd2lsbCBzdGFydCBlbXVsYXRpbmcgRG5EIGlmXHJcblx0Ly8gdGhlIG1vdXNlIG1vdmVzIG1vcmUgdGhhbiB0d28gcGl4ZWxzIGluIGVpdGhlciBkaXJlY3Rpb24gd2hpbGUgdGhlIHByaW1hcnkgYnV0dG9uIGlzIHN0aWxsXHJcblx0Ly8gZG93bi5cclxuXHRwcml2YXRlIG1vdXNlRG93blg6IG51bWJlcjtcclxuXHRwcml2YXRlIG1vdXNlRG93blk6IG51bWJlcjtcclxuXHJcblx0Ly8gU3RhdGljIERhdGFUcmFuc2ZlciBvYmplY3QgdGhhdCBpcyB1c2VkIGR1cmluZyBhIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uLiBJdCBpcyBjcmVhdGVkXHJcblx0Ly8gd2hlbiBEbkQgc3RhcnRzIGFuZCBpcyBkZXN0cm95ZWQgYWZ0ZXIgaXQgZmluaXNoZXMuIFByZXNlbmNlIG9mIHRoaXMgb2JqZWN0IGFsc28gaW5kaWNhdGVzXHJcblx0Ly8gdGhhdCB0aGUgRG5EIG9wZXJzdGlvbiBpcyBpbiBwcm9ncmVzc1xyXG5cdHByaXZhdGUgZW11bERhdGFUcmFuc2ZlcjogSUVtdWxEYXRhVHJhbnNmZXI7XHJcblxyXG5cdC8vIENsb25lZCBlbGVtZW50IHVzZWQgdG8gYXMgYW4gaW1hZ2UgZHVyaW5nIGRyYWcgb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBpbWFnZUVsbTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5cdC8vIFN1Yi1lbGVtZW50IG9mIHRoZSBpbWFnZSBlbGVtZW50IHRoYXQgc2hvd3MgZHJvcCBlZmZlY3RcclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFbG06IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcblx0Ly8gVGhlIGxhc3QgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yXHJcblx0cHJpdmF0ZSBsYXN0VGFyZ2V0OiBFbGVtZW50O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGFzdCB0YXJnZXQgdW5kZXIgdGhlIGN1cnNvciB3YXMgYSB2YWxpZCBkcm9wIHpvbmUuIFRoaXMgaXNcclxuXHQvLyBuZWVkZWQgdG8gbm90IHNlbmQgZHJhZ292ZXIgYW5kIGRyYWdsZWF2ZSBldmVudHMgdG8gbm9uLWRyb3BwYWJsZSB0YXJnZXRzLiBUaGlzIGZsYWcgaXNcclxuXHQvLyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBkcmFnZW50ZXIgZXZlbnQgc2VudCB0byB0aGUgdGFyZ2V0IGhhcyBpdHMgcHJldmVudERlZmF1bHQgbWV0aG9kXHJcblx0Ly8gY2FsbGVkLiBJZiB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLCBkcmFnb3ZlciwgZHJhZ2xlYXZlIGFuZCBkcm9wIGV2ZW50cyBhcmUgbm90IHNlbnRcclxuXHQvLyB0byB0aGlzIHRhcmdldC5cclxuXHRwcml2YXRlIGlzTGFzdFRhcmdldERyb3BwYWJsZTogYm9vbGVhbjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGRyb3AgaXMgcG9zc2libGUgb24gdGhlIGxhc3QgdGFyZ2V0LiBUaGlzIGZsYWcgaXMgbmVlZGVkIGJlY2F1c2VcclxuXHQvLyBldmVuIGlmIGEgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lLCBub3QgYWxsIGxvY2F0aW9ucyB3aXRoaW4gdGhlIHRhcmdldCBtaWdodCBhY2NlcHQgdGhlXHJcblx0Ly8gZHJvcC4gVGhpcyBmbGFnIGlzIHNldCB0byB0cnVlIHdoZW4gdGhlIGRyYWdvdmVyIGV2ZW50IHNlbnQgdG8gdGhlIHRhcmdldCBoYXMgaXRzXHJcblx0Ly8gcHJldmVudERlZmF1bHQgbWV0aG9kIGNhbGxlZC4gSWYgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZSwgZHJvcCBldmVudCB3aWxsIG5vdCBiZSBzZW50IHRvXHJcblx0Ly8gdGhpcyB0YXJnZXQuXHJcblx0cHJpdmF0ZSBpc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldDogYm9vbGVhbjtcclxuXHJcblx0Ly8gTGF0ZXN0IE1vdXNlRXZlbnQgb2JqZWN0LCB3aGNpaCB3ZSB1c2UgdG8gY3JlYXRlIERyYWdFdmVudCBvYmplY3RzLlxyXG5cdHByaXZhdGUgbGFzdE1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5pbXBvcnQge0RyYWdEcm9wRWZmZWN0LCBEcmFnQWxsb3dlZEVmZmVjdHMsIERyYWdUYXJnZXRQcm9wVHlwZSwgSURyYWdUYXJnZXQsIElTaW1wbGVEcmFnVGFyZ2V0LCBJRHJhZ1RhcmdldEV2ZW50fSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YX0gZnJvbSBcIi4vRGF0YVRyYW5zZmVyXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyB0YXJnZXQgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0RXZlbnQgaW1wbGVtZW50cyBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuaGFzVHlwZSggdGhpcy5kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBkYXRhOiBhbnkgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRyZXR1cm4gZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YSA6IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBmaWxlcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG5cdFx0cmV0dXJuIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1zID0gdGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuaXRlbXM7XHJcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRsZXQgZW50cmllczogYW55W10gPSBbXTtcclxuXHRcdGlmIChpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdGVudHJpZXMucHVzaCggaXRlbXNbaV0ud2Via2l0R2V0QXNFbnRyeSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZW50cmllcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCB0YXJnZXQgZnVuY3Rpb25hbGl0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnVGFyZ2V0SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1RhcmdldDogRHJhZ1RhcmdldFByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtID0gZWxtO1xyXG5cclxuXHRcdGlmICgoZHJhZ1RhcmdldCBhcyBJRHJhZ1RhcmdldCkub25Ecm9wICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldCA9IGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQ7XHJcblx0XHRlbHNlIGlmICgoZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldCkub25EYXRhRHJvcHBlZCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSBuZXcgRHJhZ1RhcmdldEV2ZW50KCk7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnZW50ZXJcIiwgdGhpcy5vbkRyYWdFbnRlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdsZWF2ZVwiLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5vbkRyYWdPdmVyKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJvcFwiLCB0aGlzLm9uRHJvcCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25EcmFnRW50ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0Ly8gd2Ugd2lsbCBjYWxsIHRoZSBvbkRyYWdFbnRlciBjYWxsYmFjayBvbmx5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGRyYWdlbnRlclxyXG5cdFx0Ly8gZXZlbnQgaXMgZmlyZWQgb24gb3VyIGVsZW1lbnQgb3Igb24gb25lIG9mIGNoaWxkIG5vbi1kcmFnLXRhcmdldCBlbGVtZW50cy5cclxuXHRcdGlmICh0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIrKyA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gaWYgSURyYWdUYXJnZXQudHlwZXMgcHJvcGVydHkgaXMgZGVmaW5lZCBhbmQgaXMgbm90IGVtcHR5LCBkcmFnIHdpbGwgYmUgcG9zc2libGVcclxuXHRcdC8vIG9ubHkgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBoYXMgYXQgbGVhc3Qgb24gdHlwZSBmcm9tIHRoZSB0eXBlcyBhcnJheS5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5kYXRhVHlwZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIGUuZGF0YVRyYW5zZmVyLCB0eXBlKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgbm8gc3VpdGFibGUgdHlwZSBmb3VuZCwgd2UgZG9uJ3QgY2FsbCBlLnByZXZlbnREZWZhdWx0LCB3aGljaCBkaXNhbGxvd3MgZHJvcFxyXG5cdFx0XHRpZiAoIXRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdFbnRlciBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBkcmFnIHRhcmdldCwgd2UgY29uc2lkZXIgZHJvcCBwb3NzaWJsZVxyXG5cdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0VudGVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHR7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFwcGx5IHZpc3VhbCBmZWVkYmFjayBpZiBzcGVjaWZpZWRcclxuXHRcdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdFx0bGV0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKHRoaXMuZWxtIGFzIGFueSBhcyBFbGVtZW50Q1NTSW5saW5lU3R5bGUpLnN0eWxlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHNhdmUgY3VycmVudCB2YWx1ZXMgb2Ygc3R5bGUgcHJvcGVydGllcyBzcGVjaWZpZWQgaW4gZmVlZGJhY2sgYW5kIHNldCB0aGUgc3R5bGUgZnJvbVxyXG5cdFx0XHRcdFx0Ly8gdGhlIGZlZWRiYWNrXHJcblx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGUgPSB7fTtcclxuXHRcdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGVbcHJvcF0gPSBlbG1TdHlsZVtwcm9wXTtcclxuXHRcdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZmVlZGJhY2tbcHJvcF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIHdlIG5lZWQgdG8gc2V0IGRyb3AgZWZmZWN0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ092ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IGlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRpc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdPdmVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjYWxsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBhbmQgY29uc2lkZXIgZHJvcCBwb3NzaWJsZSBvbmx5IGlmIGl0IHJldHVybnMgdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0xlYXZlID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnTGVhdmUgY2FsbGJhY2sgb25seSBpZiB0aGUgbW91c2UgY29tcGxldGVseSBsZWF2ZXMgb3VyIGVsZW1lbnQsXHJcblx0XHQvLyB3aGljaCBtZWFucyBvdXIgY291bnRlciByZWFjaGVzIDAuXHJcblx0XHRpZiAoLS10aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPiAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZXZlcnQgdmlzdWFsIGZlZWRiYWNrIChpZiB3YXMgc3BlY2lmaWVkKVxyXG5cdFx0XHRpZiAodGhpcy5zYXZlZFN0eWxlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhbHRob3VnaCBzdHlsZSBwcm9wZXJ0eSBleGlzdHMgaW4gYm90aCBIVE1MRWxlbWVudCBhbmQgU1ZHRWxlbWVudCwgaXQgaXMgZGVmaW5lZCBvbiBhXHJcblx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0Zm9yKCBsZXQgcHJvcCBpbiB0aGlzLnNhdmVkU3R5bGUpXHJcblx0XHRcdFx0XHRlbG1TdHlsZVtwcm9wXSA9IHRoaXMuc2F2ZWRTdHlsZVtwcm9wXTtcclxuXHJcblx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyb3AgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXhwZWN0ZWRUeXBlczogc3RyaW5nW10gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzO1xyXG5cdFx0XHRsZXQgZGF0YU9iaiA9IHt9O1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIGUuZGF0YVRyYW5zZmVyLnR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgd2UgaGF2ZSBzb21lIGV4cGVjdGVkIHR5cGVzIGRlZmluZWQgc2tpcCB0aGUgY3VycmVudCB0eXBlIGlmIGl0IGlzIG5vIG9uZVxyXG5cdFx0XHRcdC8vIG9mIHRoZSBleHBlY3RlZFxyXG5cdFx0XHRcdGlmIChleHBlY3RlZFR5cGVzICYmIGV4cGVjdGVkVHlwZXMubGVuZ3RoID4gMCAmJiBleHBlY3RlZFR5cGVzLmluZGV4T2YoIHR5cGUpIDwgMClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgZGF0YSA9IERyYWdBbmREcm9wRGF0YS5nZXRPYmplY3REYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZGF0YU9ialt0eXBlXSA9IGRhdGE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0Lm9uRGF0YURyb3BwZWQoIGRhdGFPYmopO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldC5vbkRyb3AoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8vIGlmIHRoZSB0YXJnZXQgaW1wbGVtZW50cyBvbkRyYWdMZWF2ZSwgY2FsbCBpdCBub3cgdG8gYWxsb3cgaXQgdG8gY2xlYW51cFxyXG5cdFx0Ly9pZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlICE9PSB1bmRlZmluZWQpXHJcblx0XHQvL3tcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0Ly9cdHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0Ly99XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGRyYWdFbnRlckNvdW50ZXJcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlciA9IDA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGRlZmF1bHQgZHJvcCBlZmZlY3QgYWNjb3JkaW5nIHRvIHRoZSBhbGxvd2VkIGVmZmVjdHMgYW5kIGtleXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdERyb3BFZmZlY3QoZTogRHJhZ0V2ZW50KTogRHJhZ0Ryb3BFZmZlY3RcclxuXHR7XHJcblx0XHRsZXQgYWxsb3dlZEVmZmVjdHMgPSBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkIGFzIERyYWdBbGxvd2VkRWZmZWN0cztcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGUuYWx0S2V5ID8gRHJhZ0Ryb3BFZmZlY3QuTGluayA6IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IERyYWdEcm9wRWZmZWN0Lk5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZHJvcCBlZmZlY3QgaXMgYW1vbmcgdGhlIGFsbG93ZWQgZWZmZWN0c1xyXG5cdHByaXZhdGUgaXNEcm9wRWZmZWN0QWxsb3dlZCggZHJvcEVmZmVjdDogRHJhZ0Ryb3BFZmZlY3QsIGFsbG93ZWRFZmZlY3RzOiBEcmFnQWxsb3dlZEVmZmVjdHMpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBhbGxvd2VkRWZmZWN0cylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuQ29weTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGluazpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weU1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGlua01vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkxpbmsgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ICE9PSBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIElEcmFnVGFyZ2V0IGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyB0YXJnZXQuXHJcblx0cHVibGljIGRyYWdUYXJnZXQ6IElEcmFnVGFyZ2V0O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBzaW1wbGVEcmFnVGFyZ2V0OiBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHRhcmdldCBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEV2ZW50OiBEcmFnVGFyZ2V0RXZlbnQ7XHJcblxyXG5cdC8vIEEgZHJhZyB0YXJnZXQgZWxlbWVudCBjYW4gaGF2ZSBjaGlsZHJlbiB3aG8gYXJlIG5vdCBkcmFnIHRhcmdldHMgYnkgdGhlbXNlbHZlcy4gSW4gdGhpc1xyXG5cdC8vIGNhc2UsIHdoZW4gdGhlIG1vdXNlIGdvZXMgZnJvbSBvdXIgZWxlbWVudCB0byBhIGNoaWxkIGVsZW1lbnQsIHdlIHdpbGwgcmVjZWl2ZSBkcmFnZW50ZXJcclxuXHQvLyBldmVudCBvbiB0aGUgY2hpbGQgZWxlbWVudCBhbmQgZHJhZ2xlYXZlIG9uIG91cnMuIFdlIGRvbid0IHdhbnQgdG8gcmVwb3J0IHRoaXMgdGhyb3VnaFxyXG5cdC8vIG91ciBjdXN0b20gZXZlbnRzIGJlY2F1c2UgZnJvbSB0aGUgY2xsZXIncyBwb2ludCBvZiB2aWV3IHRoZSBtdXNlIGlzIHN0aWxsIHdpdGhpbiB0aGVcclxuXHQvLyBib3VuZHMgb2Ygb3VyIGVsZW1lbnQuIFRoZXJlZm9yZSwgd2Uga2VlcCB0aGUgY291bnRlciB2YXJpYWJsZSwgd2hpY2ggaXMgc2V0IHRvIDFcclxuXHQvLyB3aGVuIHRoZSBmaXJzdCBkcmFnZW50ZXIgZXZlbnQgKGZyb20gb3VyIGVsZW1lbnQgb3IgZnJvbSBhIGNoaWxkKSBpcyByZXBvcnRlZC4gT24gZWFjaFxyXG5cdC8vIHN1YnNlcXVlbnQgZHJhZ2VudGVyIGFuZCBkcmFnbGVhdmUgaXQgd2lsbCBiZSBpbmNyZW1lbnRlZCBhbmQgZGVjcmVtZW50ZWQgcmVzcGVjdGl2ZWx5LlxyXG5cdC8vIFdoZW4gdGhpcyBjb3VudGVyIHJlYWNoZXMgemVybywgd2UgY2FsbCB0aGUgb25EcmFnTGVhdmUgaGFuZGxlci5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFbnRlckNvdW50ZXI6IG51bWJlcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgaW4gdGhlIGZpcnN0IGNhbGwgdG8gdGhlIG9uRHJhZ0VudGVyIHdlIGRldGVybWluZWQgdGhhdCBkcm9wXHJcblx0Ly8gd2FzIHBvc3NpYmxlLlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIFNldCBvZiBzdHlsZXMgc2F2ZWQgYmVmb3JlIGFwcGx5aW5nIGZlZWRiYWNrIHN0eWxlcyBkdXJpbmcgZHJhZ2VudGVyIGV2ZW50LiBXZSB3aWxsIHVzZVxyXG5cdC8vIHRoZXNlIHN0eWxlcyB0byByZXN0b3JlIHRoZSBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSBkdXJpbmcgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRwcml2YXRlIHNhdmVkU3R5bGU6IFN0eWxlc2V0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvUG9wdXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvRGlhbG9nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL01zZ0JveFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZXIvUm91dGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RyZWUvVHJlZUFwaVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92aXJ0L1Njcm9sbEF4aXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9WVGFibGVcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXN9IGZyb20gXCIuL2RuZC9EcmFnRHJvcEltcGxcIjtcclxucmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXMoKTtcclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEaWFsb2cgY2xhc3MgaXMgYSBwb3B1cCB3aXRoIHRocmVlIGRpc3RpbmN0IGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgUG9wdXBcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIFNsaWNlIGZvciB0aGUgdGhyZWUgZGlhbG9nIGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcblx0Ly8gVGhleSBjYW4gYmUgbGVmdCB1bmRlZmluZWQgaWYgYSBkZXJpdmVkIGNsYXNzIG92ZXJyaWRlcyB0aGUgYXBwcm9wcmlhdGUgcmVuZGVyIG1ldGhvZHMuXHJcblx0Y29uc3RydWN0b3IoIGNhcHRpb25BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIG1haW5BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIGJ1dHRvbkFyZWFTbGljZT86IG1pbS5TbGljZSwgZGxnU2xpY2U/OiBtaW0uU2xpY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoZGxnU2xpY2UpO1xyXG5cclxuXHRcdHRoaXMuY2FwdGlvbkFyZWFTbGljZSA9IGNhcHRpb25BcmVhU2xpY2UgPyBjYXB0aW9uQXJlYVNsaWNlIDoge307XHJcblx0XHR0aGlzLm1haW5BcmVhU2xpY2UgPSBtYWluQXJlYVNsaWNlID8gbWFpbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5idXR0b25BcmVhU2xpY2UgPSBidXR0b25BcmVhU2xpY2UgPyBidXR0b25BcmVhU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBEaWFsb2cgaXMgY3JlYXRlZFxyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtiYWNrZ3JvdW5kOlwicGlua1wiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCIsIGN1cnNvcjpcImRlZmF1bHRcIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UgPSB7IHN0eWxlOiB7cGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UgPSB7IHN0eWxlOiB7bWFyZ2luTGVmdDpcIjAuNWVtXCIsIG1pbldpZHRoOlwiNWVtXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9uIHdpdGggdGhlIGdpdmVuIGNoYXJhY3RlcmlzdGljcy4gVGhlIGtleSBwYXJhbWV0ZXIgaW5kaWNhdGVzIHRoZSB2YWx1ZSB0aGF0IGlzXHJcblx0Ly8gcGFzc2VkIHRvIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gVGhlIG9wdGlvbmFsIGluZGV4IHBhcmFtZXRlciBzcGVjaWZpZXNcclxuXHQvLyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGJ1dHRvbiBzaG91bGQgYmUgYWRkZWQuXHJcblx0cHVibGljIGFkZEJ1dHRvbiggc2xpY2U6IG1pbS5TbGljZSwga2V5PzogYW55LCBjYWxsYmFjaz86IChrZXk6IGFueSkgPT4gdm9pZCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IERsZ0J0bkluZm8gPSB7IHNsaWNlLCBrZXksIGNhbGxiYWNrLCByZWY6IG5ldyBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PigpIH07XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5wdXNoKCBpbmZvKTtcclxuXHRcdGVsc2UgaWYgKGluZGV4ID09PSAwKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnVuc2hpZnQoIGluZm8pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXggLSAxLCAwLCBpbmZvKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCB0aGlzLnJlbmRlckJ1dHRvbkFyZWEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBidXR0b24gYXQgdGhlIGdpdmVuIGluZGV4LlxyXG5cdHB1YmxpYyByZW1vdmVCdXR0b24oIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCB0aGlzLnJlbmRlckJ1dHRvbkFyZWEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbmRlckNhcHRpb25BcmVhKClcclxuXHR7XHJcblx0XHRsZXQgY2FwdGlvbkFyZWFTbGljZTogbWltLlNsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UsIHRoaXMuZ2V0Q2FwdGlvbkFyZWFTbGljZSgpKTtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnQ2FwdGlvblwiIG1vdXNlZG93bj17dGhpcy5vblN0YXJ0TW92ZX0gc3R5bGU9e2NhcHRpb25BcmVhU2xpY2Uuc3R5bGV9XHJcblx0XHRcdFx0XHRcdGNsYXNzPXtjYXB0aW9uQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLmNhcHRpb25BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7Y2FwdGlvbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlck1haW5BcmVhKClcclxuXHR7XHJcblx0XHRsZXQgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UsIHRoaXMuZ2V0TWFpbkFyZWFTbGljZSgpKTtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnTWFpbkNvbnRlbnRcIiBzdHlsZT17bWFpbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e21haW5BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4ubWFpbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdHttYWluQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQnV0dG9uQXJlYSgpXHJcblx0e1xyXG5cdFx0bGV0IGJ1dHRvbkFyZWFTbGljZTogbWltLlNsaWNlID0gbWltLm1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSwgdGhpcy5nZXRCdXR0b25BcmVhU2xpY2UoKSk7XHJcblx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0J1dHRvbnNcIiBzdHlsZT17YnV0dG9uQXJlYVNsaWNlLnN0eWxlfSBjbGFzcz17YnV0dG9uQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLmJ1dHRvbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdHtidXR0b25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdFx0e3RoaXMuYnV0dG9uSW5mb3MubWFwKCAoaW5mbykgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgYnRuU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5tZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRCdXR0b25TbGljZSwgaW5mby5zbGljZSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gPGJ1dHRvbiBrZXk9e2luZm8ua2V5fSBjbGljaz17aW5mby5jYWxsYmFjayAmJiAoKCkgPT4gaW5mby5jYWxsYmFjayhpbmZvLmtleSkpfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtidG5TbGljZS5zdHlsZX0gY2xhc3M9e2J0blNsaWNlLmNsYXNzTmFtZX0gey4uLmJ0blNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHRcdFx0e2J0blNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50LlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDYXB0aW9uQXJlYX1cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYWluQXJlYX1cclxuXHRcdFx0XHR7dGhpcy5yZW5kZXJCdXR0b25BcmVhfVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jYXB0aW9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGJ1dHRvbiBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRCdXR0b25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBwdXRzIG1vdXNlIGRvd24gaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgb25TdGFydE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLnN0YXJ0TW92ZSggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMuY2FwdGlvbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgQ2FwdGlvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgTWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5tYWluQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBNYWluQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLm1haW5BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IEJ1dHRvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5idXR0b25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IEJ1dHRvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5idXR0b25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgYnV0dG9ucyBhZGRlZCB0byB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBidXR0b25JbmZvczogRGxnQnRuSW5mb1tdID0gW107XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBidXR0b24gYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdENhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBtYWluIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRNYWluQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0QnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYSBidXR0b24gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvblNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGxnQnRuSW5mbyBjbGFzcyBpcyBhIGhlbHBlciBjbGFzcyB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgYnV0dG9uIGFkZGVkIHRvIHRoZSBkaWFsb2cuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG50eXBlIERsZ0J0bkluZm8gPVxyXG57XHJcblx0c2xpY2U6IG1pbS5TbGljZSxcclxuXHRrZXk6IGFueSxcclxuXHRjYWxsYmFjazogKGtleTogYW55KSA9PiB2b2lkLFxyXG5cdHJlZjogbWltLlJlZjxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGlhbG9nQnV0dG9uIGVudW1lcmF0aW9uIGRlZmluZXMgY29uc3RhbnRzIHRvIGluZGljYXRlIHN0YW5kYXJkIGJ1dHRvbnMgdXNlZCBpbiBkaWFsb2dzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGVudW0gRGlhbG9nQnV0dG9uXHJcbntcclxuXHROb25lID0gMHgwLFxyXG5cdE9LID0gMHgxLFxyXG5cdENhbmNlbCA9IDB4MixcclxuXHRZZXMgPSAweDQsXHJcblx0Tm8gPSAweDgsXHJcblx0Q2xvc2UgPSAweDEwLFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtEaWFsb2csIERpYWxvZ0J1dHRvbn0gZnJvbSBcIi4vRGlhbG9nXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNc2dCb3ggY2xhc3MgaXMgYSBkaWFsb2cgdGhhdCBkaXNwbGF5cyBhIG1lc3NhZ2Ugd2l0aCBhIHNldCBvZiBwcmUtZGVmaW5lZCBidXR0b25zLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1zZ0JveCBleHRlbmRzIERpYWxvZ1xyXG57XHJcblx0cHVibGljIHN0YXRpYyBzaG93TW9kYWwoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSk6IFByb21pc2U8TXNnQm94QnV0dG9ucz5cclxuXHR7XHJcblx0XHRsZXQgbXNnQm94OiBNc2dCb3ggPSBuZXcgTXNnQm94KCBtZXNzYWdlLCB0aXRsZSwgYnV0dG9ucywgaWNvbik7XHJcblx0XHRyZXR1cm4gbXNnQm94LnNob3dNb2RhbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHRcdHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcblx0XHR0aGlzLmljb24gPSBpY29uO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlQnV0dG9ucygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4geyBjb250ZW50OiB0aGlzLnRpdGxlLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiZG9kZ2VyYmx1ZVwiIH0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIG1haW4gY29udGVudCBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdGxldCB7IGNscywgY29sb3IgfSA9IHRoaXMuZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPVxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcInN0YXJ0XCJ9fT5cclxuXHRcdFx0XHR7Y2xzICYmIDxpIGNsYXNzPXtcImZhIGZhLTN4IFwiICsgY2xzfSBzdHlsZT17eyBjb2xvcjogY29sb3J9fS8+fVxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLCBtaW5XaWR0aDpcIjE1ZW1cIiwgbWF4V2lkdGg6XCI0MGVtXCIsIG1pbkhlaWdodDogXCIyZW1cIixcclxuXHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDpcIjIwZW1cIiwgb3ZlcmZsb3c6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdHt0aGlzLm1lc3NhZ2V9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PjtcclxuXHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmJ1dHRvbnMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5DbG9zZTpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDbG9zZVwiLCBEaWFsb2dCdXR0b24uQ2xvc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9LOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT2tDYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm86XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm9DYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGdldEljb25DbGFzc0FuZENvbG9yKCk6IHsgY2xzOiBzdHJpbmcsIGNvbG9yOiBDc3NDb2xvciB9XHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmljb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5JbmZvOiByZXR1cm4geyBjbHM6IFwiZmEtaW5mby1jaXJjbGVcIiwgY29sb3I6IFwiYmx1ZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5XYXJuaW5nOiByZXR1cm4geyBjbHM6IFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiwgY29sb3I6IFwib3JhbmdlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkVycm9yOiByZXR1cm4geyBjbHM6IFwiZmEtbWludXMtY2lyY2xlXCIsIGNvbG9yOiBcInJlZFwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5RdWVzdGlvbjogcmV0dXJuIHsgY2xzOiBcImZhLXF1ZXN0aW9uLWNpcmNsZVwiLCBjb2xvcjogXCJncmVlblwiIH07XHJcblxyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4geyBjbHM6IFwiXCIsIGNvbG9yOiBcImJsdWVcIiB9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IERpYWxvZ0J1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbigge2NvbnRlbnQ6IHRleHR9LCBrZXksIHRoaXMub25CdXR0b25DbGlja2VkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkJ1dHRvbkNsaWNrZWQgPSAoIGtleTogYW55KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuY2xvc2UoIGtleSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cdC8vIFRpdGxlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG5cclxuXHQvLyBCdXR0b25zXHJcblx0cHJpdmF0ZSBidXR0b25zOiBNc2dCb3hCdXR0b25zO1xyXG5cclxuXHQvLyBJY29uXHJcblx0cHJpdmF0ZSBpY29uOiBNc2dCb3hJY29uO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgYnV0dG9ucyBhbmQgYnV0dG9uIGNvbWJpbmF0aW9ucyBmb3JcclxuICogbWVzc2FnZSBib3hlcy5cclxuICovXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEJ1dHRvbnNcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSAwLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIENsb3NlIGJ1dHRvbiAqL1xyXG5cdENsb3NlLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIE9LIGJ1dHRvbiAqL1xyXG5cdE9LLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIE9LIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdE9rQ2FuY2VsLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcyBhbmQgTm8gYnV0dG9ucyAqL1xyXG5cdFllc05vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNc2dCb3hJY29uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBpY29ucyBmb3IgbWVzc2FnZSBib3guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZW51bSBNc2dCb3hJY29uXHJcbntcclxuXHROb25lID0gMCxcclxuXHRJbmZvLFxyXG5cdFdhcm5pbmcsXHJcblx0RXJyb3IsXHJcblx0UXVlc3Rpb24sXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCJtaW1jc3NcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFBvcHVwIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgbW9kZWxlc3MgYW5kIG1vZGFsIHBvcHVwcy4gSXQgcHJvdmlkZXMgdGhlIGJhc2ljIG1lY2hhbmljc1xyXG4vLyBmb3Igc2hvd2luZyBhbmQgY2xvc2luZyB0aGUgcG9wdXBzIGluY2x1ZGluZyBtb3ZpbmcgaXQgd2l0aCB0aGUgbW91c2UuIFRoZSBjb250ZW50IG9mIHRoZVxyXG4vLyBwb3B1cCBpcyBlaXRoZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHVjdG9yIG9yIGlzIHByb3ZpZGVkIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBQb3B1cCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIHRoZSBvYmplY3QgZGVzY3JpYmluZyB0aGUgc3R5bGVzIGFuZCBjb250ZW50IHRoYXQgc2hvdWxkIGJlXHJcblx0Ly8gZGlzcGxheWVkIHdpdGhpbiB0aGUgcG9wdXAuIEl0IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZVxyXG5cdC8vIGdldERsZ1NsaWNlIG1ldGhvZC5cclxuXHRjb25zdHJ1Y3RvciggZGxnU2xpY2U/OiBtaW0uU2xpY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuZGxnU2xpY2UgPSBkbGdTbGljZSA/IGRsZ1NsaWNlIDoge307XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGRlZmF1bHQgcGFyYW1ldGVycyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGEgUG9wdXAgaXMgY3JlYXRlZFxyXG5cdFx0aWYgKCFQb3B1cC5EZWZhdWx0RGxnU2xpY2UpXHJcblx0XHRcdFBvcHVwLkRlZmF1bHREbGdTbGljZSA9IHsgc3R5bGU6IHsgYm9yZGVyU3R5bGU6IFwic29saWRcIiwgYm9yZGVyV2lkdGg6IDEsIHBhZGRpbmc6IFwiMFwifSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyB0aGUgZGlhbG9nIGFzIGEgbW9kZWxlc3MgcG9wdXAuIEl0IHNob3VsZCBiZSBjbG9zZWQgd2l0aCB0aGUgQ2xvc2UgbWV0aG9kLlxyXG5cdHB1YmxpYyBvcGVuKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzT3BlbigpKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5jcmVhdGUoIHgsIHkpO1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuc2hvdygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbG9zZXMgdGhlIGRpYWxvZyBvcGVuZWQgYXMgYSBtb2RlbGVzcyBwb3B1cC4gVGhpcyBtZXRob2QgY2Fubm90IGJlIHVzZWQgdG8gY2xvc2UgYSBtb2RhbFxyXG5cdC8vIGRpYWxvZy5cclxuXHRwdWJsaWMgY2xvc2UoIHJldFZhbD86IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5jbG9zZSgpO1xyXG5cdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHJcblx0XHRpZiAodGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyggcmV0VmFsKTtcclxuXHRcdFx0dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3BlbnMgYSBtb2RhbCBkaWFsb2cuIFRoZSBkaWFsb2cgaXMgY2xvc2VkIHdpdGggdGhlIENsb3NlTW9kYWwgbWV0aG9kIGFuZCB0aGUgcGFyYW1ldGVyXHJcblx0Ly8gcGFzc2VkIHRvIHRoZSBDbG9zZU1vZGFsIG1ldGhvZCBpcyByZXR1cm5lZCBhcyBhIHJlc29sdmVkIHByb21pc2UuXHJcblx0cHVibGljIHNob3dNb2RhbCggeD86IG51bWJlciwgeT86IG51bWJlcik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzT3BlbigpKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoIFwiRGlhbG9nIGlzIGFscmVhZHkgb3BlblwiKTtcclxuXHJcblx0XHRsZXQgcHJvbWlzZTogUHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2U8YW55PiggKHJlc29sdmUpID0+IHt0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gcmVzb2x2ZX0pO1xyXG5cdFx0dGhpcy5jcmVhdGUoIHgsIHkpO1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuc2hvd01vZGFsKCk7XHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4uXHJcblx0cHVibGljIGlzT3BlbigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGxnICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGVsZXNzLlxyXG5cdHB1YmxpYyBpc01vZGVsZXNzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pc09wZW4oKSAmJiB0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID09PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuIGFzIG1vZGFsLlxyXG5cdHB1YmxpYyBpc01vZGFsKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pc09wZW4oKSAmJiB0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0YXJ0cyBtb25pdG9yaW5nIG1vdXNlIG1vdmVtZW50cyBhbmQgbW92ZXMgdGhlIGRpYWxvZyB3aXRoIHRoZSBtb3VzZS4gVGhpcyBtZXRob2QgaXNcclxuXHQvLyBpbnRlbnRlZCB0byBiZSBjYWxsZWQgZnJvbSBhIG1vdXNlZG93biBldmVudCBzb21ld2hlcmUgd2l0aGluIHRoZSBwb3B1cC5cclxuXHRwdWJsaWMgc3RhcnRNb3ZlKCBlOiBNb3VzZUV2ZW50KVxyXG5cdHtcclxuXHRcdC8vIHdlIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gYW5kIHByb3BhZ2F0aW9uIHNvIHRoYXQgbW91c2UgbW92ZW1lbnRzIGRvbid0IGNhdXNlXHJcblx0XHQvLyB0ZXN0IGluIHRoZSBwb3B1cCBhbmQgb24gdGhlIHBhZ2UgdG8gYmUgc2VsZWN0ZWQuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCByZWN0ID0gdGhpcy5kbGcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR0aGlzLmRyYWdQb2ludE9mZnNldFggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcblx0XHR0aGlzLmRyYWdQb2ludE9mZnNldFkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlIGFuZCBhbHNvIHJlbWVtYmVyIHRoZW0gaW4gb3VyIFNsaWNlIHNvIHRoYXQgdGhleSBjYW4gYmUgc3BlY2lmaWVkXHJcblx0XHQvLyBhcyBwcm9wZXJ0aWVzIGlmIHRoZSBjb21wb25lbnQgaXMgcmVyZW5kZXJlZFxyXG5cdFx0dGhpcy5kbGcuc3R5bGUubWFyZ2luID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgPSByZWN0LnRvcDtcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQ7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS50b3AgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgKyBcInB4XCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCArIFwicHhcIjtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uU3RvcE1vdmUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gTW92ZXMgdGhlIGRpYWxvZyB0byB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMuIFRoZSBjb29yZGluYXRlcyBhcmUgYWRqdXN0ZWQgc28gdGhhdCBhdCBsZWFzdFxyXG5cdC8vIHNvbWUgcGFydCBvZiB0aGUgZGlhbG9nIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgcmVtYWlucyB2aXNpYmxlIGluIG9yZGVyIHRvIHRoZSB1c2VyIHRvIGJlXHJcblx0Ly8gYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcblx0cHVibGljIG1vdmUoIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmIChuZXdYIDwgMClcclxuXHRcdFx0bmV3WCA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdYICsgMzAgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0bmV3WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzA7XHJcblxyXG5cdFx0aWYgKG5ld1kgPCAwKVxyXG5cdFx0XHRuZXdZID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1kgKyAzMCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuXHRcdFx0bmV3WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5sZWZ0ID0gbmV3WDtcclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IG5ld1k7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCArIFwicHhcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCArIFwicHhcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmN1cnJEbGdTbGljZSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gZGVmaW5lIHBvc2l0aW9uaW5nIHN0eWxlcy4gSWYgeCBhbmQvb3IgeSBhcmUgdW5kZWZpbmVkLCB3ZSBjZW50ZXIgdGhlIGRpYWxvZyBob3Jpem9udGFsbHlcclxuXHRcdFx0Ly8gYW5kL29yIHZlcnRpY2FsbHlcclxuXHRcdFx0bGV0IHN0eWxlOiBTdHlsZXNldCA9IHsgcG9zaXRpb246IFwiZml4ZWRcIiB9XHJcblx0XHRcdGlmICh0aGlzLmluaXRpYWxYID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS5sZWZ0ID0gMDtcclxuXHRcdFx0XHRzdHlsZS5yaWdodCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUubGVmdCA9IHRoaXMuaW5pdGlhbFg7XHJcblx0XHRcdFx0c3R5bGUubWFyZ2luTGVmdCA9IFwiMFwiO1xyXG5cdFx0XHRcdHN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmluaXRpYWxZID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdHlsZS50b3AgPSAwO1xyXG5cdFx0XHRcdHN0eWxlLmJvdHRvbSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3R5bGUudG9wID0gdGhpcy5pbml0aWFsWTtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcclxuXHRcdFx0XHRzdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdXJyRGxnU2xpY2UgPSBtaW0ubWVyZ2VTbGljZXMoIFBvcHVwLkRlZmF1bHREbGdTbGljZSwgdGhpcy5nZXREbGdTbGljZSgpLCB7c3R5bGV9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpYWxvZyByZWY9e3JlZiA9PiB0aGlzLmRsZyA9IHJlZn0gc3R5bGU9e3RoaXMuY3VyckRsZ1NsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzcz17dGhpcy5jdXJyRGxnU2xpY2UuY2xhc3NOYW1lfSB7Li4udGhpcy5jdXJyRGxnU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7dGhpcy5jdXJyRGxnU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGlhbG9nPjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBwcm92aWRlZCBlaXRoZXIgZXh0ZXJuYWxseSBvciBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0cHJvdGVjdGVkIGdldERsZ1NsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRsZ1NsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZW5kZXJzIHRoZSBwb3B1cC5cclxuXHRwcml2YXRlIGNyZWF0ZSggeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbml0aWFsWCA9IHg7XHJcblx0XHR0aGlzLmluaXRpYWxZID0geTtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSA8ZGl2PiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIGVuZCBvZiA8Ym9keT4uIFRoZW4gcmVuZGVyIG91ciBjb21wb25lbnQnc1xyXG5cdFx0Ly8gY29udGVudCB1bmRlciBpdC5cclxuXHRcdHRoaXMuYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHRtaW0ubW91bnRTeW5jKCB0aGlzLCB0aGlzLmFuY2hvckRpdik7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVuZGVycyBhbmQgZGVzdHJveXMgdGhlIGRpYWxvZy5cclxuXHRwcml2YXRlIGRlc3Ryb3koKTogdm9pZFxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuXHRcdG1pbS51bm1vdW50U3luYyggdGhpcy5hbmNob3JEaXYpO1xyXG5cdFx0dGhpcy5hbmNob3JEaXYucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKCBlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBFc2NcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbk1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLm1vdmUoIGUuY2xpZW50WCAtIHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCwgZS5jbGllbnRZIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRZKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25TdG9wTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBwcm92aWRlZCBlaXRoZXIgZXh0ZXJuYWx5IG9yIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHRwcml2YXRlIGRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBEbGdTbGljZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5EbGdTbGljZTsgfVxyXG5cclxuXHQvLyBDdXJyZW50IHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHRoYXQgY29tYmluZSBvdXIgZGVmYXVsdHMgcGx1cyB0aG9zZSBwcm92aWRlZFxyXG5cdC8vIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzIHBsdXMgdGhvc2UgcmVmbGVjdGluZyB0aGUgZGlhbG9nIHBvc2l0aW9uaW5nLlxyXG5cdHByaXZhdGUgY3VyckRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIEVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGRpYWxvZyBpcyByZW5kZXJlZC4gVGhpcyBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZVxyXG5cdC8vIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkIGFuZCBpcyByZW1vdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXHJcblx0cHJpdmF0ZSBhbmNob3JEaXY6IEhUTUxFbGVtZW50O1xyXG5cclxuXHQvLyBJbml0aWFsIFggY29vcmRpbmF0ZSBvZiB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBpbml0aWFsWDogbnVtYmVyO1xyXG5cclxuXHQvLyBJbml0aWFsIFkgY29vcmRpbmF0ZSBvZiB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBpbml0aWFsWTogbnVtYmVyO1xyXG5cclxuXHQvLy8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHQvL3ByaXZhdGUgZGxnUmVmID0gbmV3IG1pbS5SZWY8SFRNTERpYWxvZ0VsZW1lbnQ+KCByZWYgPT4gdGhpcy5kbGcgPSByZWYpO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaWFsb2c+IGVsZW1lbnQgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQuXHJcblx0cHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuXHQvLyBQcm9taXNlIHdoaWNoIGlzIGNyZWF0ZWQgZm9yIG1vZGFsIGRpYWxvZyBhbmQgd2hpY2ggaXMgcmVzb2x2ZWQgd2hlbiB0aGUgbW9kYWwgZGlhbG9nXHJcblx0Ly8gaXMgY2xvc2VkLiBUaGUgcHJvbWlzZSBpcyByZXR1cm5lZCBmcm9tIFNob3dNb2RhbC5cclxuXHRwcml2YXRlIG1vZGFsUHJvbWlzZVJlc29sdmVGdW5jOiAoYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaXY+IGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2FwdGlvbi5cclxuXHRwcml2YXRlIGNhcHRpb24gPSBuZXcgbWltLlJlZjxIVE1MRWxlbWVudD4oKTtcclxuXHJcblx0Ly8gT2Zmc2V0cyBvZiB0aGUgcG9pbnQgd2hlcmUgdGhlIG1vdmUgc3RhcnRlZCBmcm9tIHRoZSBkaWFsb2cgdG9wLWxlZnQgY29ybmVyLiBXZSB1c2UgdGhlbVxyXG5cdC8vIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbG9nIHRvcC1sZWZ0IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcyB3aGlsZSBtb3ZlIGlzXHJcblx0Ly8gaW4gcHJvZ3Jlc3MuXHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRZOiBudW1iZXI7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgPGRpYWxvZz4gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdERsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCJcclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvbGliL2FwaS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgUm91dGVyOiBJUm91dGVyU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJTZXJ2aWNlIGlzIGEgc2VydmljZSB0aGF0IGlzIHB1Ymxpc2hlZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gSXQgYWxsb3dzXHJcbiAqIHN1YnNjcmliZXJzIHRvIG5hdmlnYXRlIHRvIHBhdGhzIGRlZmluZWQgYnkgUm91dGVyJ3Mgcm91dGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyU2VydmljZVxyXG57XHJcblx0Ly8gTmF2aWdhdGVzIHRvIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTC5cclxuXHRuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRuYXZpZ2F0ZUJ5SUQoIGlkOiBzdHJpbmcsIGZpZWxkcz86IFJvdXRlRmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2Ygb2JqZWN0IGNvbnRhaW5pbmcgZmllbGQgdmFsdWVzIHRoYXQgaXMgcGFzc2VkIHdoZW4gbmF2aWdhdGluZyB0byBhIHJvdXRlLiBXaGVuXHJcbiAqIG5hdmlnYXRpbmcgYnkgcm91dGUgSUQsIHRoZSBmaWVsZHMgYXJlIHBhc3NlZCBleHBsaWNpdGx5LiBXaGVuIG5hdmlnYXRpbmcgYnkgVVJMLCB0aGUgZmllbGRzXHJcbiAqIGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgVVJMIGFjY29yZGluZyB0byB0aGUgVVJMIHBhdHRlcm4gaW4gdGhlIHJvdXRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVGaWVsZHMgPSB7IFtQOiBzdHJpbmddOiBtaW11cmwuRmllbGRWYWx1ZVR5cGUgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIGNvbnRlbnQgdG8gZGlzcGxheSBmb3IgYSByb3V0ZS4gSXQgY2FuIHJldHVybiBhIFByb21pc2UgaW5cclxuICogd2hpY2ggY2FzZSB0aGUgUm91dGVyIHdpbGwgZGlzcGxheSBwcm9ncmVzcyBVSSB1bnRpbCB0aGUgY29udGVudCBiZWNvbWVzIGF2YWlsYWJsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hdlRvUm91dGVGdW5jVHlwZSA9IChmaWVsZHM6IFJvdXRlRmllbGRzKSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIG5hdmlnYXRpbmcgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCByb3V0ZS4gSWYgZmFsc2VcclxuICogaXMgcmV0dXJuZWQsIG5hdmlnYXRpb24gZG9lc24ndCBoYXBwZW4uIFRoaXMgYWxsb3dzIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXJcclxuICogYWJvdXQgdW5zYXZlZCBkYXRhLiBJZiBQcm9taXNlIGlzIHJldHVybmVkLCB0aGUgUm91dGVyIHdpbGwgd2FpdCB1bnRpbCB0aGUgcmVzcG9uc2UgaXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2RnJvbVJvdXRlRnVuY1R5cGUgPSAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZSBpbnRlcmZhY2UgZGVmaW5lcyBhIG5hdmlnYXRpb24gdGFyZ2V0LiBSb3V0ZXMgY2FuIGhhdmUgc3ViLXJvdXRlcywgd2hpY2ggY3JlYXRlcyBhXHJcbiAqIGhpZXJhcmNoeSBvZiByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlXHJcbntcclxuXHQvKipcclxuXHQgKiBVbmlxdWUgKGJ1dCBvcHRpb25hbCkgSUQgdGhhdCBhbGxvd3MgbmF2aWdhdGluZyB0byB0aGUgdGFyZ2V0IHVzaW5nIGEgc2ltcGxlIElEIGluc3RlYWQgb2ZcclxuXHQgKiBwYXRoLiBUaGUgcGF0aCBtZW1iZXIgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGJyb3dzZXIncyBhZGRyZXNzIGNvbnRyb2wuXHJcblx0ICovXHJcblx0aWQ/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVSTCBwYXR0ZXJuIC0gY2FuIGNvbnRhaW4gbmFtZWQgcGFyYW1ldGVycyAoYXMgaW4gL3VzZXJzL3t1aWR9KS4gVGhpcyBjYW4gYmUgbGVmdCBlbXB0eVxyXG5cdCAqIGlmIG9ubHkgaWQgaXMgdXNlZFxyXG5cdCAqL1xyXG5cdHVybFBhdHRlcm4/OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIHByb3BlcnR5IHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBoaXN0b3J5LnB1c2hTdGF0ZSBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHR0aXRsZT86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIGNvbnRlbnQgdG8gZGlzcGxheS5cclxuXHQgKi9cclxuXHRuYXZUb0Z1bmM/OiBOYXZUb1JvdXRlRnVuY1R5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRpb24gZnVuY3Rpb24gdGhhdCBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlciBhYm91dCB1bnNhdmVkIGRhdGEuXHJcblx0ICovXHJcblx0bmF2RnJvbUZ1bmM/OiBOYXZGcm9tUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogT3JkZXJlZCBsaXN0IG9mIFJvdXRlIG9iamVjdHMsIHdoaWNoIGFyZSBzdWItcm91dGVzIG9mIHRoaXMgcm91dGUuXHJcblx0ICovXHJcblx0c3ViUm91dGVzPzogUm91dGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgdGhhdCBpcyB1c2VkIGFzIGEgc3RhdGUgZm9yIEhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLiBJdCByZW1lbWJlcnMgdGhlXHJcbiAqIHBhcmFtZXRlcnMgb2YgYSByb3V0ZSB0byBuYXZpZ2F0ZSB0byB3aGVuIHRoZSB1c2VyIGdvZXMgYmFjayBvciBmb3J3YXJkIGluIHRoZSBicm93c2VyJ3NcclxuICogaGlzdG9yeS5cclxuICovXHJcbmNsYXNzIFJvdXRlU3RhdGVcclxue1xyXG5cdHJvdXRlSUQ6IHN0cmluZztcclxuXHRyb3V0ZVVSTDogc3RyaW5nO1xyXG5cdGZpZWxkczogUm91dGVGaWVsZHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgYnkgdGhlIFJvdXRlciB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHJvdXRlLlxyXG4gKiBUaGlzIGFsbG93cyB0aGUgcm91dGVyIGRvIGhhdmUgaXRzIG93biBjb250ZW50IC0gdGhlIHNhbWUgZm9yIGFsbCByb3V0ZXMgLSBhbmQgaW5zZXJ0IHRoZVxyXG4gKiBjdXJyZW50IHJvdXRlcidzIGNvbnRlbnQgaW50byBpdC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKHJvdXRlQ29udGVudDogYW55KSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgYSBwcm9ncmVzcyBVSSB3aGlsZSBpdCBpcyBsb2FkaW5nXHJcbiAqIHJvdXRlIGNvbnRlbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZSA9ICgpID0+IGFueTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUm91dGVyUHJvcHMgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJQcm9wc1xyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyByb3V0ZXIgY29udHJvbHMgdGhlIGJyb3dzZXI7IHRoYXQgaXMsIHVzZXMgSGlzdG9yeSBBUEkgdG9cclxuXHQgKiBwdXNoIG5ldyBzdGF0ZSBhbmQgaW50ZXJjZXB0IGJhY2sgYW5kIGZvcndhcmQgY29tbWFuZHMuIERlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRjb250cm9sc0Jyb3dzZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgdGhhdCBpZiB0aGlzIHJvdXRlciBjYW5ub3QgcmVzb2x2ZSBhIHBhdGgsIGl0IHdpbGwgZGVsZWdhdGUgdG8gYSByb3V0ZXIgdXBcclxuXHQgKiB0aGUgY29tcG9uZW50IGNoYWluIChpZiB0aGVyZSBpcyBvbmUpLlxyXG5cdCAqL1xyXG5cdGNoYWluc1RvSGlnaGVyUm91dGVyPzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLiBEZWZhdWx0IHZhbHVlIGlzXHJcblx0ICogdHJ1ZS5cclxuXHQgKi9cclxuXHRiYXNlVVJMPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUm91dGVyIGNvbXBvbmVudCBwcm92aWRlcyBjbGllbnQtc2lkZSByb3V0aW5nLiBJdCB3b3JrcyB3aXRoIFJvdXRlIG9iamVjdHMgdGhhdCBkZWZpbmVcclxuICogYXZhaWxhYmxlIG5hdmlnYXRpb24gdGFyZ2V0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PElSb3V0ZXJQcm9wcyxSb3V0ZVtdPiBpbXBsZW1lbnRzIElSb3V0ZXJTZXJ2aWNlLCBtaW0uSUVycm9ySGFuZGxpbmdTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IElSb3V0ZXJQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcm91dGUgb2YgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlKCByb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc2VydHMgdGhlIGdpdmVuIHJvdXRlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbGlzdC5cclxuXHQgKiBAcGFyYW0gcm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0byBhZGRcclxuXHQgKiBAcGFyYW0gaW5kZXggSW5kZXggYXQgd2hpY2ggdG8gYWRkIHRoZSByb3V0ZSBvYmplY3QuIElmIHRoZSBpbmRleCBpcyBub3QgZGVmaW5lZCwgdGhlXHJcblx0ICpcdFx0cm91dGUgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC4gSWYgaW5kZXggaXMgb3V0IG9mIHJhbmdlIGFuIGV4Y2VwdGlvbiB3aWxsXHJcblx0ICpcdFx0YmUgdGhyb3duLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRSb3V0ZSggcm91dGU6IFJvdXRlLCBpbmRleD86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiUm91dGUgb2JqZWN0IGNhbm5vdCBiZSBudWxsXCIpO1xyXG5cclxuXHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnJvdXRlcy5zcGxpY2UoIGluZGV4LCAwLCByb3V0ZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMucm91dGVzLnB1c2goIHJvdXRlKTtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSBhZGQgdGhlIHJvdXRlIGFuZCBhbGwgaXRzIHN1Yi1yb3V0ZXMgKHRoYXQgaGF2ZSBJRHMpIHRvIHRoZSBtYXBcclxuXHRcdHRoaXMuYWRkUm91dGVUb01hcCggcm91dGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIGEgcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0IGFuZCByZXR1cm5zIHRoZSBSb3V0ZSBvYmplY3QuIElmIGluZGV4IGlzXHJcblx0ICogb3V0IG9mIHJhbmdlIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93bi5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaW5kZXhcclxuXHQgKiBAcmV0dXJuIFJvdXRlIFtbUm91dGVdXSBvYmplY3QgdGhhdCB3YXMgcmVtb3ZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlUm91dGUoIGluZGV4OiBudW1iZXIpOiBSb3V0ZVxyXG5cdHtcclxuXHRcdGxldCByb3V0ZTogUm91dGUgPSB0aGlzLnJvdXRlcy5zcGxpY2UoIGluZGV4LCAxKVswXTtcclxuXHJcblx0XHQvLyByZWN1cnNpdmVseSByZW1vdmUgdGhlIHJvdXRlIGFuZCBhbGwgaXRzIHN1Yi1yb3V0ZXMgKHRoYXQgaGF2ZSBJRHMpIGZyb20gdGhlIG1hcFxyXG5cdFx0dGhpcy5yZW1vdmVSb3V0ZUZyb21NYXAoIHJvdXRlKTtcclxuXHJcblx0XHRyZXR1cm4gcm91dGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIHJvdXRlIGFuZCBpdHMgc3ViLXJvdXRlcyByZWN1cnNpdmVseSB0byB0aGUgbWFwIG9mIHJvdXRlcyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgYWRkUm91dGVUb01hcCggcm91dGU6IFJvdXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChyb3V0ZS5pZClcclxuXHRcdFx0dGhpcy5yb3V0ZXNCeUlELnNldCggcm91dGUuaWQsIHJvdXRlKTtcclxuXHJcblx0XHRpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBzdWJSb3V0ZSBvZiByb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHRcdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGdpdmVuIHJvdXRlIGFuZCBpdHMgc3ViLXJvdXRlcyByZWN1cnNpdmVseSBmcm9tIHRoZSBtYXAgb2Ygcm91dHMgYnkgSURzIChvbmx5XHJcblx0Ly8gdGhlIHJvdXRlcyB0aGF0IGhhdmUgdGhlaXIgaWQgcHJvcGVydHkgZGVmaW5lZCBhbmQgbm90IGVtcHR5KS5cclxuXHRwcml2YXRlIHJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGU6IFJvdXRlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChyb3V0ZS5pZClcclxuXHRcdFx0dGhpcy5yb3V0ZXNCeUlELmRlbGV0ZSggcm91dGUuaWQpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggc3ViUm91dGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdCAqIEBwYXJhbSB1cmwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIG5hdmlnYXRlIHRvXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnlcclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeVVSTCggdXJsOiBzdHJpbmcsIG1ha2VIaXN0b3J5RW50cnk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgW3JvdXRlLCBmaWVsZHNdID0gdGhpcy5maW5kUm91dGVCeVVSTCggdXJsKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeVVSTCggdXJsLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hdmlnYXRlVG9Sb3V0ZSggcm91dGUsIHVybCwgZmllbGRzLCBtYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIGEgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGlkIElEIG9mIHRoZSByb3V0ZVxyXG5cdCAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlJ3MgZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeSBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgUm91dGVyIHNob3VsZCBjcmVhdGUgYSBuZXcgZW50cnkgaW4gdGhlXHJcblx0ICpcdFx0YnJvd3NlcidzIGhpc3RvcnkuXHJcblx0ICovXHJcblx0cHVibGljIG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByb3V0ZTogUm91dGUgPSB0aGlzLnJvdXRlc0J5SUQuZ2V0KCBpZCk7XHJcblx0XHRpZiAoIXJvdXRlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlKVxyXG5cdFx0XHRcdHRoaXMuaGlnaGVyUm91dGVyU2VydmljZS5yLm5hdmlnYXRlQnlJRCggaWQsIGZpZWxkcyk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2UgYXJlIGNvbnRyb2xsaW5nIHRoZSBicm93c2VyIHdlIG1heSBuZWVkIHRvIHN1YnN0aXR1dGUgcGFyYW1ldGVycyBpbiB0aGVcclxuXHRcdC8vIHJvdXRlJ3MgVVJMIHBhdHRlcm5cclxuXHRcdGxldCB1cmw6IHN0cmluZztcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0dXJsID0gcm91dGUudXJsUGF0dGVybjtcclxuXHRcdFx0aWYgKHVybCAmJiBmaWVsZHMpXHJcblx0XHRcdHtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGaW5kcyBhIHJvdXRlIGJ5IGdvaW5nIHRocm91Z2ggdGhlIHJvdXRlIGhpZXJhcmNoeSBhbmQgdHJ5aW5nIHRvIG1hdGNoIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogSWYgdGhlIHJvdXRlIGlzIGZvdW5kLCB0aGUgVVJMIGlzIHBhcnNlZCBhbmQgYW55IHBhcmFtZXRlcnMgYXJlIGV4dHJhY3RlZCBmcm9tIGl0LlxyXG5cdCAqIEBwYXJhbSB1cmxcclxuXHQgKi9cclxuXHRwcml2YXRlIGZpbmRSb3V0ZUJ5VVJMKCB1cmw6IHN0cmluZyk6IFtSb3V0ZSwgUm91dGVGaWVsZHNdXHJcblx0e1xyXG5cdFx0cmV0dXJuIFJvdXRlci5maW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsLCB0aGlzLnJvdXRlcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIExvb2tzIGZvciBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwgYW1vbmcgdGhlIGdpdmVuIGFycmF5IG9mIFJvdXRlIG9iamVjdHMgYW5kXHJcblx0ICogcmVjdXJzaXZlbHkgYW1vbmcgdGhlaXIgc3ViLXJvdXRlcy5cclxuXHQgKiBAcGFyYW0gdXJsIFVSTCB0byBtYXRjaFxyXG5cdCAqIEBwYXJhbSByb3V0ZXMgQXJyYXkgb2YgUm91dGUgb2JqZWN0cyB0byBtYXRjaCB3aXRoIHRoZSBVUkxcclxuXHQgKi9cclxuXHRwcml2YXRlIHN0YXRpYyBmaW5kUm91dGVSZWN1cnNpdmVCeVVSTCggdXJsOiBzdHJpbmcsIHJvdXRlczogUm91dGVbXSk6IFtSb3V0ZSwgUm91dGVGaWVsZHNdXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcm91dGUgb2Ygcm91dGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbWF0Y2hSZXN1bHQgPSBtaW11cmwubWF0Y2goIHVybCwgcm91dGUudXJsUGF0dGVybik7XHJcblx0XHRcdGlmIChtYXRjaFJlc3VsdCAmJiBtYXRjaFJlc3VsdC5zdWNjZXNzKVxyXG5cdFx0XHRcdHJldHVybiBbcm91dGUsIG1hdGNoUmVzdWx0LmZpZWxkc107XHJcblx0XHRcdGVsc2UgaWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCByb290QW5kRmllbGRzID0gUm91dGVyLmZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmwsIHJvdXRlLnN1YlJvdXRlcyk7XHJcblx0XHRcdFx0aWYgKHJvb3RBbmRGaWVsZHNbMF0pXHJcblx0XHRcdFx0XHRyZXR1cm4gcm9vdEFuZEZpZWxkcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBbbnVsbCwgbnVsbF07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byB0aGUgZ2l2ZW4gcm91dGUgcGFzc2luZyB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHJvdXRlXHJcblx0ICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgcm91dGUncyBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBSb3V0ZXIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGVcclxuXHQgKlx0XHRicm93c2VyJ3MgaGlzdG9yeS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIG5hdmlnYXRlVG9Sb3V0ZSggcm91dGU6IFJvdXRlLCB1cmw6IHN0cmluZywgZmllbGRzOiBSb3V0ZUZpZWxkcyxcclxuXHRcdFx0XHRcdG1ha2VIaXN0b3J5RW50cnk6IGJvb2xlYW4pOiBQcm9taXNlPGFueT5cclxuXHR7XHJcblx0XHQvLy8vIGNoZWNrIGlmIHRoZSBuZXcgcm91dGUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgcm91dGUgYW5kIGRvbid0IGRvIGFueXRoaW5nXHJcblx0XHQvL2lmIChyb3V0ZSA9PT0gdGhpcy5jdXJyUm91dGUpXHJcblx0XHQvL1x0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgY3VycmVudCByb3V0ZSwgYXNrIGl0IGlmIHdlIGNhbiBsZWF2ZSBpdFxyXG5cdFx0aWYgKHRoaXMuY3VyclJvdXRlICYmIHRoaXMuY3VyclJvdXRlLm5hdkZyb21GdW5jKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcmV0OiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiA9IHRoaXMuY3VyclJvdXRlLm5hdkZyb21GdW5jKCk7XHJcblx0XHRcdGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0XHRcdHJldCA9IGF3YWl0IChyZXQgYXMgUHJvbWlzZTxib29sZWFuPik7XHJcblxyXG5cdFx0XHRpZiAoIXJldClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2UgYXJlIGNvbnRyb2xsaW5nIHRoZSBicm93c2VyIHVzZSBIaXN0b3J5IEFQSSB0byBjaGFuZ2Ugc3RhdGVcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlciAmJiBtYWtlSGlzdG9yeUVudHJ5KVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSB7IHJvdXRlSUQ6IHJvdXRlLmlkLCByb3V0ZVVSTDogdXJsLCBmaWVsZHMgfTtcclxuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHN0YXRlLCBcIlwiLCB1cmwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcm91dGUgYW5kIGdldCBpdHMgY29udGVudFxyXG5cdFx0dGhpcy5jdXJyUm91dGUgPSByb3V0ZTtcclxuXHRcdGxldCBjb250ZW50OiBhbnkgPSByb3V0ZS5uYXZUb0Z1bmMgPyByb3V0ZS5uYXZUb0Z1bmMoIGZpZWxkcykgOiBudWxsO1xyXG5cdFx0aWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBhd2FpdCAoY29udGVudCBhcyBQcm9taXNlPGFueT4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdC8vIHJlcXVlc3QgdG8gYmUgdXBkYXRlZCBzbyB0aGF0IG91ciByZW5kZXIgbWV0aG9kIHdpbGwgYmUgY2FsbGVkXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gZXJyb3Igd2FzIHJhaXNlZCBieSBvbmUgb2YgdGhlIGRlc2NlbmRhbnQgY29wb25lbnRzLlxyXG5cdHB1YmxpYyByZXBvcnRFcnJvciggZXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHJcblx0XHQvLyBwdWJsaXNoIG91cnNlbHZlcyBhcyBhIHJvdXRlciBzZXJ2aWNlXHJcblx0XHR0aGlzLnZuLnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzKTtcclxuXHJcblx0XHQvLyBpZiBpbnN0cnVjdGVkIHNvLCBzdWJzY3JpYmUgdG8gYSByb3V0ZXIgc2VydmljZSBpbXBsZW1lbnRlZCBieSBhbnkgb2YgY29tcG9uZW50c1xyXG5cdFx0Ly8gdXAgdGhlIGNoYWluXHJcblx0XHRpZiAodGhpcy5jaGFpbnNUb0hpZ2hlclJvdXRlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gbmV3IG1pbS5SZWY8SVJvdXRlclNlcnZpY2U+KCk7XHJcblx0XHRcdHRoaXMudm4uc3Vic2NyaWJlU2VydmljZSggXCJSb3V0ZXJcIiwgdGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaW5kIHRoZSBmaXJzdCByb3V0ZSB0byBkaXNwbGF5XHJcblx0XHRsZXQgZmlyc3RSb3V0ZTogUm91dGUgPSB0aGlzLnJvdXRlcy5sZW5ndGggPiAwID8gdGhpcy5yb3V0ZXNbMF0gOiBudWxsO1xyXG5cdFx0aWYgKCFmaXJzdFJvdXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jdXJyUm91dGUgPSBmaXJzdFJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IGZpcnN0Um91dGUubmF2VG9GdW5jID8gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMoIHt9KSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IFwiUGxlYXNlIHdhaXQgd2hpbGUgY29udGVudCBpcyBsb2FkaW5nLi4uXCI7XHJcblx0XHRcdChjb250ZW50IGFzIFByb21pc2U8YW55PikudGhlbiggKCBkZWxheWVkQ29udGVudDogYW55KSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gZGVsYXllZENvbnRlbnQ7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVNZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBlc3RhYmxpc2ggYmFzZSBVUkwgcmVsYXRpdmUgdG8gd2hpY2ggYWxsIHBhdGhzIHdpbGwgYmUgY29uc2lkZXJlZFxyXG5cdFx0XHRpZiAoIXRoaXMuYmFzZVVSTClcclxuXHRcdFx0e1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBzdWJzY3JpYmUgdG8gdGhlIHBvcHN0YXRlIGV2ZW50IGZvciBtb25pdG9yaW5nIGJhY2sgYW5kIGZvcndhcmQgY29tbWFuZHNcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogZmlyc3RSb3V0ZS5pZCwgcm91dGVVUkw6IGZpcnN0Um91dGUudXJsUGF0dGVybiwgZmllbGRzOiBudWxsIH07XHJcblx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKCBzdGF0ZSwgXCJcIiwgZmlyc3RSb3V0ZS51cmxQYXR0ZXJuKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BzdGF0ZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jaGFpbnNUb0hpZ2hlclJvdXRlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy52bi51bnN1YnNjcmliZVNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy52bi51bnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdHRoaXMudm4udW5wdWJsaXNoU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnZpcnRSZW5kZXIoIHRoaXMuY3VyclJvdXRlQ29udGVudCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKCBlcnI6IGFueSwgbm9kZVBhdGg6IHN0cmluZ1tdKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vdGhpcy5lcnJvciA9IGVycjtcclxuXHRcdC8vdGhpcy5lcnJvclBhdGggPSBub2RlUGF0aDtcclxuXHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IFxyXG5cdFx0XHQ8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJwaW5rXCIsIGRpc3BsYXk6XCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcInN0YXJ0XCJ9fT5cclxuXHRcdFx0XHR7ZXJyfVxyXG5cdFx0XHRcdHtub2RlUGF0aCAmJiBub2RlUGF0aC5tYXAoIChuYW1lKSA9PiA8c3Bhbj57bmFtZX08L3NwYW4+KX1cclxuXHRcdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFwiVmlydHVhbFwiIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLiBSZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nXHJcblx0ICogY29udGVudCB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIFJvdXRlciBjb21wb25lbnQuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGVpdGhlciBjYWxsc1xyXG5cdCAqIHRoZSBvdXRlckNvbnRlbnRGdW5jIGlmIGRlZmluZWQgb3IganVzdCByZXR1cm5zIHRoZSBjb250ZW50IHBhc3NlZCBhcyBhIHBhcmFtZXRlci5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY3VyclJvdXRlQ29udGVudFxyXG5cdCAqIEByZXR1cm4gQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIFJvdXRlciBjb21wb25lbnQuXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHZpcnRSZW5kZXIoIGN1cnJSb3V0ZUNvbnRlbnQ6IGFueSk6IGFueVxyXG5cdHtcclxuXHRcdC8vcmV0dXJuIHRoaXMub3V0ZXJDb250ZW50RnVuYyA/IHRoaXMub3V0ZXJDb250ZW50RnVuYyggY3VyclJvdXRlQ29udGVudCkgOiBjdXJyUm91dGVDb250ZW50O1xyXG5cdFx0cmV0dXJuIGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlYWN0cyBvbiB1c2VyIHVzaW5nIGJhY2sgYW5kIGZvcndhcmQgYnV0dG9ucy5cclxuXHRwcml2YXRlIG9uUG9wc3RhdGUgPSAoIGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0gZS5zdGF0ZSBhcyBSb3V0ZVN0YXRlO1xyXG5cdFx0aWYgKCFzdGF0ZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChzdGF0ZS5yb3V0ZUlEKVxyXG5cdFx0XHR0aGlzLm5hdmlnYXRlQnlJRCggc3RhdGUucm91dGVJRCwgc3RhdGUuZmllbGRzKTtcclxuXHRcdGVsc2UgaWYgKHN0YXRlLnJvdXRlVVJMKVxyXG5cdFx0XHR0aGlzLm5hdmlnYXRlQnlVUkwoIHN0YXRlLnJvdXRlVVJMKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coIFwiUm91dGUgc3RhdGUgaW4gcG9wc3RhdGUgZXZlbnQgaGFzIG5laXRoZXIgcm91dGUgSUQgbm9yIHBhdGguXCIpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyByb3V0ZXIgY29udHJvbHMgdGhlIGJyb3dzZXI7IHRoYXQgaXMsIHVzZXMgSGlzdG9yeVxyXG5cdC8vIEFQSSB0byBwdXNoIG5ldyBzdGF0ZSBhbmQgaW50ZXJjZXB0IGJhY2sgYW5kIGZvcndhcmQgY29tbWFuZHMuXHJcblx0cHJpdmF0ZSBnZXQgY29udHJvbHNCcm93c2VyKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jb250cm9sc0Jyb3dzZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlcjtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGZsYWcgaW5kaWNhdGluZyB0aGF0IGlmIHRoaXMgcm91dGVyIGNhbm5vdCByZXNvbHZlIGEgcGF0aCwgaXQgd2lsbCBkZWxlZ2F0ZSB0b1xyXG5cdC8vIGEgcm91dGVyIHVwIHRoZSBjb21wb25lbnQgY2hhaW4gKGlmIHRoZXJlIGlzIG9uZSkuXHJcblx0cHJpdmF0ZSBnZXQgY2hhaW5zVG9IaWdoZXJSb3V0ZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyID09PSB1bmRlZmluZWQgPyB0cnVlIDogdGhpcy5wcm9wcy5jaGFpbnNUb0hpZ2hlclJvdXRlcjtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCBiYXNlZCBvbiB3aGljaCBhbGwgcm91dGUgcGF0aHMgd2lsbCBiZSByZXNvbHZlZC5cclxuXHRwcml2YXRlIGdldCBiYXNlVVJMKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmJhc2VVUkwgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB0aGlzLnByb3BzLmJhc2VVUkw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgdGhlIGNvbnRlbnQgb2YgdGhlIGN1cnJlbnQgcm91dGUgaW5zaWRlIHRoZSByb3V0ZXIncyBvd24gY29udGVudC4gSWZcclxuXHQgKiB0aGlzIG1lbWJlciBpcyB1bmRlZmluZWQsIG9ubHkgdGhlIGN1cnJlbnQgcm91dGUncyBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXQgT3V0ZXJDb250ZW50RnVuYyggdmFsOiBSb3V0ZXJPdXRlckNvbnRlbnRSZW5kZXJGdW5jVHlwZSkgeyB0aGlzLm91dGVyQ29udGVudEZ1bmMgPSB2YWw7IH1cclxuXHRwcml2YXRlIG91dGVyQ29udGVudEZ1bmM6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlO1xyXG5cclxuXHQvKiogU2V0cyB0aGUgZnVuY3Rpb24gdGhhdCByZW5kZXJzIGEgcHJvZ3Jlc3MgVUkgd2hpbGUgdGhlIHJvdXRlciBpcyBsb2FkaW5nIHJvdXRlIGNvbnRlbnQuICovXHJcblx0cHVibGljIHNldCBQcm9ncmVzc0NvbnRlbnRGdW5jKCB2YWw6IFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMucHJvZ3Jlc3NDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgcHJvZ3Jlc3NDb250ZW50RnVuYzogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8vIEEgcm91dGVyIHNlcnZpY2UgdGhpcyByb3V0ZXIgd2lsbCBkZWxlZ2F0ZSB0byB3aGVuIGl0IGNhbm5vdCByZXNvbHZlIGEgcGF0aC5cclxuXHRwcml2YXRlIGhpZ2hlclJvdXRlclNlcnZpY2U6IG1pbS5SZWY8SVJvdXRlclNlcnZpY2U+O1xyXG5cclxuXHQvLyBPcmRlcmVkIGxpc3Qgb2YgUm91dGUgb2JqZWN0cyAtIHVzZWQgdG8gZmluZCByb3V0ZXMgYnkgbWF0Y2hpbmcgcGF0aHMuIE5vdGUgdGhhdCB0aGlzXHJcblx0Ly8gbGlzdCBpcyBhY3R1YWxseSBhIGhpZXJhcmNoeSBiZWNhdXNlIHJvdXRlcyBjYW4gY29udGFpbiBzdWItcm91dGVzLlxyXG5cdHByaXZhdGUgcm91dGVzOiBSb3V0ZVtdID0gW107XHJcblxyXG5cdC8vIE1hcCBvZiByb3V0ZSBJRHMgdG8gUm91dGUgb2JqZWN0cy4gQWxsIHJvdXRlcyB0aGF0IGRlZmluZSBhbiBJRCBhcmUgYWRkZWQgdG8gdGhpcyBtYXAgLVxyXG5cdC8vIG5vIG1hdHRlciBob3cgZGVlcCBpbiB0aGUgaGllcmFyY2h5LlxyXG5cdHByaXZhdGUgcm91dGVzQnlJRCA9IG5ldyBNYXA8c3RyaW5nLFJvdXRlPigpO1xyXG5cclxuXHQvLyBDdXJyZW50bHkgZGlzcGxheWVkIHJvdXRlLlxyXG5cdHByaXZhdGUgY3VyclJvdXRlOiBSb3V0ZTtcclxuXHJcblx0Ly8gQ29udGVudCBwb3ZpZGVkIGJ5IHRoZSBjdXJyZW50IHJvdXRlLlxyXG5cdHByaXZhdGUgY3VyclJvdXRlQ29udGVudDogYW55O1xyXG5cclxuXHQvLyBFcnJvciBhbmQgY29tcG9uZW50IHBhdGggaW4gY2FzZSBhbiBlcnJvciBoYXMgYmVlbiBjYXVnaHQuXHJcblx0cHJpdmF0ZSBlcnJvcjogYW55ID0gbnVsbDtcclxuXHRwcml2YXRlIGVycm9yUGF0aDogc3RyaW5nW10gPSBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTGlua1Byb3BzIGludGVyZmFjZSBkZWZpbmVzIHByb3BlcnRpZXMgZm9yIHRoZSBMaW5rIGNvbXBvbmVudCBiZWNhdXNlLiBUaGUgcHJvcGVydGllcyBpblxyXG4vLyB0aGlzIGludGVyZmFjZSBkZWZpbmUgdGhlIHJvdXRlOyB0aGUgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSB0aGUgSUh0bWxBRWxlbWVudFByb3BzIGludGVyZmFjZVxyXG4vLyBjb3JyZXNwb25kIHRvIHRoZSByZWxldmFudCBhdHRyaWJ1dGVzIG9mIHRoZSA8YT4gRE9NIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtQcm9wcyBleHRlbmRzIG1pbS5JSHRtbEFFbGVtZW50UHJvcHNcclxue1xyXG5cdC8vIFBhdGggdGhhdCB3aWxsIGJlIG1hcHBlZCB0byBhIHJvdXRlIGJ5IHRoZSBSb3V0ZXIuXHJcblx0cm91dGVVUkw/OiBzdHJpbmc7XHJcblxyXG5cdC8vIElEIG9mIHRoZSByb3V0ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZUlEPzogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHJvdXRlIHdoZW4gdXNpbmcgcm91dGVJRC5cclxuXHRmaWVsZHM/OiBSb3V0ZUZpZWxkcztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBzaG91bGQgYmUgbWFkZSBhIG5ldyBlbnRyeSBpbiB0aGUgYnJvd3NlcidzIGhpc3Rvcnk7XHJcblx0Ly8gdGhhdCBpcyB0byBiZSBzdWJqZWN0IHRvIGJhY2sgYW5kIGZvcndhcmQgYnJvd3NlciBjb21tYW5kcy5cclxuXHRtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIExpbmsgY2xhc3MgaXMgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgY3JlYXRpbmcgbGlua3MgaGFuZGxlZCBieSBhIFJvdXRlciBvYmplY3QuIEl0IGlzXHJcbi8vIGltcGxlbWVudGVkIGFzIGEgbWFuYWdlZCBjb21wb25lbnQgYmVjYXVzZSBpdHMgaW50ZW5kZWQgdXNlIGlzIHZlcnkgc2ltaWxhciB0byB0aGUgPGE+IERPTVxyXG4vLyBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIExpbmsgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PExpbmtQcm9wcz5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogTGlua1Byb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdC8vIGV4dHJhY3Qgb3VyIGN1c3RvbSBwYXJhbWV0ZXJzIGFuZCBsZWF2ZSBvbmx5IHRob3NlIHRoYXQgYXJlIDxhPiBhdHRyaWJ1dGVzXHJcblx0XHRsZXQge3JvdXRlVVJMLCByb3V0ZUlELCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnksIC4uLnJlc3R9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiA8YSBocmVmPVwiI1wiIGNsaWNrPXt0aGlzLm9uQ2xpY2t9IHsuLi5yZXN0fT5cclxuXHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHQ8L2E+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uQ2xpY2soIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCBzZXJ2aWNlOiBJUm91dGVyU2VydmljZSA9IHRoaXMudm4uZ2V0U2VydmljZSggXCJSb3V0ZXJcIik7XHJcblx0XHRpZiAoIXNlcnZpY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAodGhpcy5wcm9wcy5yb3V0ZUlEKVxyXG5cdFx0XHRzZXJ2aWNlLm5hdmlnYXRlQnlJRCggdGhpcy5wcm9wcy5yb3V0ZUlELCB0aGlzLnByb3BzLmZpZWxkcywgdGhpcy5wcm9wcy5tYWtlSGlzdG9yeUVudHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2VydmljZS5uYXZpZ2F0ZUJ5VVJMKCB0aGlzLnByb3BzLnJvdXRlVVJMLCB0aGlzLnByb3BzLm1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7SVRyZWUsIElUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIlxyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuL1RyZWVOb2RlXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlIGNsYXNzIGlzIGEgZ2VuZXJhbCBwdXJwb3NlIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgbWltLkNvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBpbXBsZW1lbnRzIElUcmVlXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnRhYkluZGV4ID0gMDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFRyZWVOb2RlQ29udGFpbmVyKCAoKSA9PiBuZXcgVHJlZU5vZGUoIG51bGwsIDAsIHRoaXMpKTtcclxuXHRcdHRoaXMuZWxtUmVmID0gbmV3IG1pbS5SZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG5cdFx0dGhpcy5wcmVwYXJlTG9jYWxTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0cHVibGljIGdldCB0YWJJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX3RhYkluZGV4OyB9XHJcblx0cHVibGljIHNldCB0YWJJbmRleCggdmFsOiBudW1iZXIpIHsgdGhpcy5tX3RhYkluZGV4ID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBub2RlcygpOiBJVHJlZU5vZGVbXSB7IHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2RlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZTogVHJlZU5vZGUgPSB0aGlzLmNvbnRhaW5lci5hZGROb2RlKCBwYXJhbXMsIGluZGV4KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdHJldHVybiBzdWJOb2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZU5vZGUoIGluZGV4KTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxOb2RlcygpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5leHBhbmRBbGwoKVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmNvbGxhcHNlQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgY3VycmVudGx5IHNlbGVjdGVkIG5vZGUgb3IgbnVsbCBpZiBubyBub2RlIGlzIHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBnZXQgc2VsZWN0ZWROb2RlKCk6IElUcmVlTm9kZSB7IHJldHVybiB0aGlzLm1fc2VsZWN0ZWROb2RlOyB9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpdiByZWY9e3RoaXMuZWxtUmVmfSB0YWJpbmRleD17dGhpcy50YWJJbmRleH0gY2xhc3M9e3RoaXMuY3NzQ2xhc3NUcmVlfSBrZXlkb3duPXt0aGlzLm9uS2V5RG93bn0+XHJcblx0XHRcdHt0aGlzLmNvbnRhaW5lcn1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKVxyXG5cdFx0XHR0aGlzLnNlbGVjdERvd24oIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKVxyXG5cdFx0XHR0aGlzLnNlbGVjdFVwKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHRcdGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIilcclxuXHRcdFx0dGhpcy5leHBhbmRPclNlbGVjdERvd24oIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpXHJcblx0XHRcdHRoaXMuY29sbGFwc2VPclNlbGVjdFVwKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgc2VsZWN0RG93biggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG5leHROb2RlID0gdGhpcy5maW5kRG93biggbm9kZSk7XHJcblx0XHRpZiAobmV4dE5vZGUpXHJcblx0XHR7XHJcblx0XHRcdG5leHROb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRuZXh0Tm9kZS5zY3JvbGxJbnRvVmlldyggZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlIHVwIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RVcCggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHByZXZOb2RlID0gdGhpcy5maW5kVXAoIG5vZGUpO1xyXG5cdFx0aWYgKHByZXZOb2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRwcmV2Tm9kZS5zZWxlY3QoKTtcclxuXHRcdFx0cHJldk5vZGUuc2Nyb2xsSW50b1ZpZXcoIHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJZiB0aGUgbm9kZSBpcyBjb2xsYXBzZWQsIGV4cGFuZHMgaXQuIElmIHRoZSBub2RlIGlzIGFscmVhZHkgZXhwYW5kZWQsIHNlbGVjdHMgdGhlIGZpcnN0XHJcblx0Ly8gY2hpbGQgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBzZWxlY3RzIHRoZSBuZXh0IG5vZGUgZG93bi5cclxuXHRwcml2YXRlIGV4cGFuZE9yU2VsZWN0RG93biggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmIChub2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdOb2RlID0gbm9kZS5jb250YWluZXIubm9kZXNbMF07XHJcblx0XHRcdFx0bmV3Tm9kZS5zZWxlY3QoKTtcclxuXHRcdFx0XHRuZXdOb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdG5vZGUuZXhwYW5kKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGV4cGFuZGVkLCBjb2xsYXBzZXMgaXQ7IG90aGVyd2lzZSwgc2VsZWN0cyB0aGUgbm9kZSdzIHBhcmVudC5cclxuXHRwcml2YXRlIGNvbGxhcHNlT3JTZWxlY3RVcCggbm9kZTogVHJlZU5vZGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHRub2RlLmNvbGxhcHNlKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIG5vZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIGRvd24gZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmREb3duKCBub2RlOiBUcmVlTm9kZSwgc2tpcEV4cGFuZGVkU3ViTm9kZXM6IGJvb2xlYW4gPSBmYWxzZSk6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXNbMF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChza2lwRXhwYW5kZWRTdWJOb2RlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IG5vZGUubV9wYXJlbnQgPyBub2RlLm1fcGFyZW50LmNvbnRhaW5lciA6IHRoaXMuY29udGFpbmVyO1xyXG5cdFx0XHRpZiAobm9kZS5pbmRleCA8IGNvbnRhaW5lci5ub2Rlcy5sZW5ndGggLSAxKVxyXG5cdFx0XHRcdHJldHVybiBjb250YWluZXIubm9kZXNbbm9kZS5pbmRleCArIDFdO1xyXG5cdFx0XHRlbHNlIGlmIChub2RlLm1fcGFyZW50KVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmREb3duKCBub2RlLm1fcGFyZW50LCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBub2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRub2RlLmNvbnRhaW5lci5ub2Rlc1swXS5zZWxlY3QoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUsIHRydWUpO1xyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHVwIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kVXAoIG5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5vZGUuaW5kZXggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdGlmIChub2RlLm1fcGFyZW50KVxyXG5cdFx0XHRcdHJldHVybiBub2RlLm1fcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGxldCBwcmV2Tm9kZSA9IGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4IC0gMV07XHJcblx0XHRcdGxldCBsYXN0RXhwYW5kZWROb2RlID0gdGhpcy5maW5kTGFzdEV4cGFuZGVkTm9kZSggcHJldk5vZGUpO1xyXG5cdFx0XHRyZXR1cm4gbGFzdEV4cGFuZGVkTm9kZSA/IGxhc3RFeHBhbmRlZE5vZGUgOiBwcmV2Tm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluZHMgbm9kZSB3aGljaCBpcyB0aGUgbGFzdCBleHBhbmRlZCBkZXNjZW5kYW5kIG9mIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZExhc3RFeHBhbmRlZE5vZGUoIGN1cnJOb2RlOiBUcmVlTm9kZSk6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0aWYgKCFjdXJyTm9kZSB8fCBjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAwIHx8ICFjdXJyTm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBsYXN0Q2hpbGQgPSBjdXJyTm9kZS5jb250YWluZXIubm9kZXNbY3Vyck5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aC0xXTtcclxuXHRcdGxldCBsYXN0RXhwYW5kZWROb2RlID0gdGhpcy5maW5kTGFzdEV4cGFuZGVkTm9kZSggbGFzdENoaWxkKTtcclxuXHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IGxhc3RDaGlsZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBwcmVwYXJlTG9jYWxTdHlsZXMoKVxyXG5cdHtcclxuXHRcdHRoaXMuY3NzQ2xhc3NUcmVlID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZVwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZVRyZWUgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlXCIsIFwiLnRyZWUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcblx0XHRcdFx0Ym9yZGVyOiBbMSwgXCJzb2xpZFwiLCBcImRvZGdlcmJsdWVcIl0sXHJcblx0XHRcdFx0Zm9udEZhbWlseTogXCJWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRcdGZvbnRTaXplOiBcIjEycHhcIixcclxuXHRcdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdG1heEhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZVwiLCBcIi50cmVlLW5vZGUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVDb250ZW50ID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50XCIsIFwiLnRyZWUtbm9kZS1jb250ZW50KCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdHBhZGRpbmc6IFwiMXB4XCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRIb3ZlciA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50OmhvdmVyXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50KCopOmhvdmVyXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRjeWFuXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50U2VsZWN0ZWQgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZFwiLCBcIi50cmVlLW5vZGUtY29udGVudC1zZWxlY3RlZCgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luTGVmdDogXCIycHhcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcImRvdHRlZFwiXSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiZG9kZ2VyYmx1ZVwiLFxyXG5cdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVJY29uID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlLWljb25cIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlSWNvbiA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1pY29uXCIsIFwiLnRyZWUtbm9kZS1pY29uKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXHJcblx0XHRcdFx0d2lkdGg6IFwiMWVtXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjFlbVwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NTdWJub2RlcyA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtc3Vibm9kZXNcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVTdWJOb2RlcyA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtc3Vibm9kZXNcIiwgXCIudHJlZS1zdWJub2RlcygqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luTGVmdDogXCIxNnB4XCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRhYiBpbmRleCBvZiB0aGUgdHJlZSBjb250cm9sLlxyXG5cdHByaXZhdGUgbV90YWJJbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgb2Ygbm9kZXMuXHJcblx0cHJpdmF0ZSBjb250YWluZXI6IFRyZWVOb2RlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBDdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIG1fc2VsZWN0ZWROb2RlOiBUcmVlTm9kZSA9IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSB0cmVlLlxyXG5cdHB1YmxpYyBlbG1SZWY6IG1pbS5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuXHQvLyBDU1MgcnVsZXMgdXNlZCBieSB0aGUgVHJlZSBhbmQgVHJlZU5vZGUgY29udHJvbHNcclxuXHRwcml2YXRlIGNzc1J1bGVUcmVlOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZTogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50OiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnRIb3ZlcjogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50U2VsZWN0ZWQ6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlSWNvbjogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZVN1Yk5vZGVzOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIENTUyBsb2NhbCBjbGFzcyBuYW1lc1xyXG5cdHB1YmxpYyBjc3NDbGFzc1RyZWU6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUNvbnRlbnQ6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUljb246IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NTdWJub2Rlczogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCJtaW1jc3NcIiBcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRyZWUgY29udHJvbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWUgZXh0ZW5kcyBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIFRhYiBpbmRleCBvZiB0aGUgdHJlZSBjb250cm9sLlxyXG5cdHRhYkluZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2Ygbm9kZXMuXHJcblx0cmVhZG9ubHkgbm9kZXM6IElUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZVxyXG5cdHJlYWRvbmx5IHNlbGVjdGVkTm9kZTogSVRyZWVOb2RlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlUGFyYW1zIGludGVyZmFjZSByZXByZXNlbnRzIHBhcmFtZXRlcnMgb2YgYSB0cmVlIG5vZGUgdGhhdCBjYW4gYmUgc2V0L2NoYW5nZWRcclxuLy8gZXh0ZXJuYWxseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUGFyYW1zXHJcbntcclxuXHRjb250ZW50OiBhbnk7XHJcblx0aWNvbj86IFRyZWVOb2RlSWNvblBhcmFtcztcclxuXHR0ZXh0Q29sb3I/OiBDc3NDb2xvcjtcclxuXHRiZ0NvbG9yPzogQ3NzQ29sb3I7XHJcblx0aXRhbGljPzogYm9vbGVhbjtcclxuXHRib2xkPzogYm9vbGVhbjtcclxuXHRjdXN0b21DbGFzcz86IHN0cmluZztcclxuXHRkYXRhPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlSWNvblBhcmFtcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBwYXJhbWV0ZXJzIG9mIGFuIGljb24gb2YgYSB0cmVlIG5vZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBUcmVlTm9kZUljb25QYXJhbXMgPSB7Y2xhc3M6IHN0cmluZ30gfCB7aW1nOiBzdHJpbmd9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2luZ2xlIG5vZGUgaW4gdGhlIHRyZWUgaGllcmFyY2h5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUgZXh0ZW5kcyBJVHJlZU5vZGVQYXJhbXMsIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVHJlZSB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25ncy5cclxuXHRyZWFkb25seSB0cmVlOiBJVHJlZTtcclxuXHJcblx0Ly8gUGFyZW50IHRyZWUgbm9kZSBvciBudWxsIGZvciB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHJlYWRvbmx5IHBhcmVudDogSVRyZWVOb2RlO1xyXG5cclxuXHQvLyAwLWJhc2VkIGxldmVsIG9mIHRoZSBub2RlIGluIHRoZSBhbmNlc3RyYWwgaGllcmFyY2h5LlxyXG5cdHJlYWRvbmx5IGxldmVsOiBudW1iZXI7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRyZWFkb25seSBpbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRyZWFkb25seSBzdWJOb2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGV4cGFuZGVkLlxyXG5cdHJlYWRvbmx5IGlzRXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEV4cGFuZHMgdGhlIG5vZGUgc28gdGhhdCBpdHMgc3ViLW5vZGVzIGJlY29tZSB2aXNpYmxlLlxyXG5cdGV4cGFuZCgpOiB2b2lkO1xyXG5cclxuXHQvLyBDb2xhcHNlcyB0aGUgbm9kZSBoaWRpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHRjb2xsYXBzZSgpOiB2b2lkO1xyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlLlxyXG5cdHNlbGVjdCgpOiB2b2lkO1xyXG5cclxuXHQvLyBVbnNlbGVjdHMgdGhlIG5vZGUuXHJcblx0dW5zZWxlY3QoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHJlZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGU7XHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHJlbW92ZUFsbE5vZGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdGV4cGFuZEFsbCgpOiB2b2lkO1xyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0Y29sbGFwc2VBbGwoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIjtcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyB0cmVlIGNvbnRyb2wgaW5zdGFuY2VcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyZWUoKTogSVRyZWVcclxue1xyXG5cdHJldHVybiBuZXcgVHJlZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0LCBDc3NDb2xvcn0gZnJvbSBcIm1pbWNzc1wiXHJcbmltcG9ydCB7SVRyZWUsIElUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXMsIFRyZWVOb2RlSWNvblBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiXHJcbmltcG9ydCB7VHJlZU5vZGVDb250YWluZXJ9IGZyb20gXCIuL1RyZWVOb2RlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIG5vZGUgd2l0aGluIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgbWltLkNvbXBvbmVudCBpbXBsZW1lbnRzIElUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHBhcmVudDogVHJlZU5vZGUsIGxldmVsOiBudW1iZXIsIHRyZWU6IFRyZWUgPSBudWxsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tX3BhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubV90cmVlID0gcGFyZW50ICE9PSBudWxsID8gcGFyZW50Lm1fdHJlZSA6IHRyZWU7XHJcblx0XHR0aGlzLm1fbGV2ZWwgPSBsZXZlbDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFRyZWVOb2RlQ29udGFpbmVyKCB0aGlzLm5vZGVGYWN0b3J5KTtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmID0gbmV3IG1pbS5SZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2VzIG9mIHN1Yi1ub2RlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeSA9ICgpOiBUcmVlTm9kZSA9PlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVHJlZU5vZGUoIHRoaXMsIHRoaXMubV9sZXZlbCArIDEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBnZXQgdHJlZSgpOiBJVHJlZSB7IHJldHVybiB0aGlzLm1fdHJlZTsgfVxyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIGdldCBwYXJlbnQoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9wYXJlbnQ7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRwdWJsaWMgZ2V0IGxldmVsKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fbGV2ZWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBpbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX2luZGV4OyB9XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc2V0IGluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1faW5kZXggPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnMuXHJcblx0cHVibGljIGdldCBjb250ZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY29udGVudDsgfVxyXG5cdHB1YmxpYyBzZXQgY29udGVudCggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2NvbnRlbnQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGljb24oKTogVHJlZU5vZGVJY29uUGFyYW1zIHsgcmV0dXJuIHRoaXMubV9pY29uOyB9XHJcblx0cHVibGljIHNldCBpY29uKCB2YWw6IFRyZWVOb2RlSWNvblBhcmFtcykgeyB0aGlzLm1faWNvbiA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGV4dENvbG9yKCk6IENzc0NvbG9yIHsgcmV0dXJuIHRoaXMubV90ZXh0Q29sb3I7IH1cclxuXHRwdWJsaWMgc2V0IHRleHRDb2xvciggdmFsOiBDc3NDb2xvcikgeyB0aGlzLm1fdGV4dENvbG9yID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBiZ0NvbG9yKCk6IENzc0NvbG9yIHsgcmV0dXJuIHRoaXMubV9iZ0NvbG9yOyB9XHJcblx0cHVibGljIHNldCBiZ0NvbG9yKCB2YWw6IENzc0NvbG9yKSB7IHRoaXMubV9iZ0NvbG9yID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBpdGFsaWMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1faXRhbGljOyB9XHJcblx0cHVibGljIHNldCBpdGFsaWMoIHZhbDogYm9vbGVhbikgeyB0aGlzLm1faXRhbGljID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBib2xkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2JvbGQ7IH1cclxuXHRwdWJsaWMgc2V0IGJvbGQoIHZhbDogYm9vbGVhbikgeyB0aGlzLm1fYm9sZCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9jdXN0b21DbGFzczsgfVxyXG5cdHB1YmxpYyBzZXQgY3VzdG9tQ2xhc3MoIHZhbDogc3RyaW5nKSB7IHRoaXMubV9jdXN0b21DbGFzcyA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkgeyByZXR1cm4gdGhpcy5tX2RhdGE7IH1cclxuXHRwdWJsaWMgc2V0IGRhdGEoIHZhbDogYW55KSB7IHRoaXMubV9kYXRhID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgZXhwYW5kZWQuXHJcblx0cHVibGljIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2lzRXhwYW5kZWQ7IH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIHRoZSBub2RlIHNvIHRoYXQgaXRzIHN1Yi1ub2RlcyBiZWNvbWUgdmlzaWJsZS5cclxuXHRwdWJsaWMgZXhwYW5kKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMCAmJiB0aGlzLm1faXNFeHBhbmRlZCAhPT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgdGhlIG5vZGUgaGlkaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMCAmJiB0aGlzLm1faXNFeHBhbmRlZCAhPT0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlLlxyXG5cdHB1YmxpYyBzZWxlY3QoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm1faXNTZWxlY3RlZCAhPT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gdW5zZWxlY3QgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlIChpZiBhbnkpXHJcblx0XHRcdGlmICh0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSAhPSBudWxsKVxyXG5cdFx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlLnVuc2VsZWN0KCk7XHJcblxyXG5cdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSA9IHRoaXM7XHJcblx0XHRcdHRoaXMubV9pc1NlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnNlbGVjdHMgdGhlIG5vZGUuXHJcblx0cHVibGljIHVuc2VsZWN0KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5tX2lzU2VsZWN0ZWQgIT09IGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSA9IG51bGw7XHJcblx0XHRcdHRoaXMubV9pc1NlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBzdWJOb2RlcygpOiBJVHJlZU5vZGVbXSB7IHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2RlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZTogVHJlZU5vZGUgPSB0aGlzLmNvbnRhaW5lci5hZGROb2RlKCBwYXJhbXMsIGluZGV4KTtcclxuXHJcblx0XHQvLyB1cGRhdGUgb25seSBpZiB0aGlzIHdhcyB0aGUgZmlyc3Qgc3ViLW5vZGVcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHJcblx0XHRyZXR1cm4gc3ViTm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRwdWJsaWMgcmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkTGVuZ3RoID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoO1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBvbmx5IGlmIHRoaXMgd2FzIHRoZSBsYXN0IHN1Yi1ub2RlXHJcblx0XHRpZiAob2xkTGVuZ3RoID09PSAxICYmIHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRMZW5ndGggPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAob2xkTGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQWxsTm9kZXMoKTtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmV4cGFuZCgpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuZXhwYW5kQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb2xsYXBzZSgpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciB0aGUgbm9kZSBpcyBub3Qgd2l0aGluIHRoZSB2aWV3cG9ydCBhbmQgc2Nyb2xscyBpdCBpbnRvIHZpZXcgYWxpbmdpbmcgaXRcclxuXHQvLyB3aXRoIHRoZSB1cHBlciBvciBsb3dlciBlZGdlIG9mIHRoZSB0cmVlIGNvbnRhaW5lci5cclxuXHRwdWJsaWMgc2Nyb2xsSW50b1ZpZXcoIGFsaWduVXA6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLm1fdHJlZS5lbG1SZWYuciB8fCAhdGhpcy5jb250ZW50RWxtUmVmLnIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBnZXQgdHJlZSBhbmQgbm9kZSBib3VuZGluZyByZWN0XHJcblx0XHRsZXQgcmNUcmVlOiBDbGllbnRSZWN0ID0gdGhpcy5tX3RyZWUuZWxtUmVmLnIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNOb2RlOiBDbGllbnRSZWN0ID0gdGhpcy5jb250ZW50RWxtUmVmLnIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNOb2RlLmJvdHRvbSA8PSByY1RyZWUuYm90dG9tICYmIHJjTm9kZS50b3AgPj0gcmNUcmVlLnRvcClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY29udGVudEVsbVJlZi5yLnNjcm9sbEludG9WaWV3KCBhbGlnblVwKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0e3RoaXMucmVuZGVyTm9kZSgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJTdWJOb2RlcygpfVxyXG5cdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyTm9kZSgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZXhwYW5kZXJDbGFzc05hbWU6IHN0cmluZyA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiB0aGlzLm1faXNFeHBhbmRlZCA/IFwiZmEtY2FyZXQtZG93blwiIDogXCJmYS1jYXJldC1yaWdodFwiO1xyXG5cclxuXHRcdGxldCBpY29uQ29udGVudDogYW55O1xyXG5cdFx0aWYgKHRoaXMubV9pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoXCJjbGFzc1wiIGluIHRoaXMubV9pY29uKVxyXG5cdFx0XHRcdGljb25Db250ZW50ID0gPHNwYW4gY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZUljb24gKyBcIiBcIiArIHRoaXMubV9pY29uLmNsYXNzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfSAvPjtcclxuXHRcdFx0ZWxzZSBpZiAoXCJpbWdcIiBpbiB0aGlzLm1faWNvbilcclxuXHRcdFx0XHRpY29uQ29udGVudCA9IDxpbWcgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZUljb259IHNyYz17dGhpcy5tX2ljb24uaW1nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgY29udGVudENsYXNzOiBzdHJpbmcgPSB0aGlzLm1faXNTZWxlY3RlZCA/IHRoaXMubV90cmVlLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA6IHRoaXMubV90cmVlLmNzc0NsYXNzTm9kZUNvbnRlbnQ7XHJcblx0XHRpZiAodGhpcy5tX2N1c3RvbUNsYXNzKVxyXG5cdFx0XHRjb250ZW50Q2xhc3MgKz0gXCIgXCIgKyB0aGlzLm1fY3VzdG9tQ2xhc3M7XHJcblxyXG5cdFx0bGV0IGNvbnRlbnRTdHlsZTogU3R5bGVzZXQgPSB7fTtcclxuXHRcdGlmICh0aGlzLm1fdGV4dENvbG9yKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuY29sb3IgPSB0aGlzLm1fdGV4dENvbG9yO1xyXG5cdFx0aWYgKHRoaXMubV9iZ0NvbG9yKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tX2JnQ29sb3I7XHJcblx0XHRpZiAodGhpcy5tX2l0YWxpYylcclxuXHRcdFx0Y29udGVudFN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcblx0XHRpZiAodGhpcy5tX2JvbGQpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZX0+XHJcblx0XHRcdDxpIGNsYXNzPXtcImZhIGZhLWZ3IFwiICsgZXhwYW5kZXJDbGFzc05hbWV9IGNsaWNrPXt0aGlzLm9uRXhwYW5kZXJDbGlja2VkfSAvPlxyXG5cdFx0XHR7aWNvbkNvbnRlbnR9XHJcblx0XHRcdDxzcGFuIHJlZj17dGhpcy5jb250ZW50RWxtUmVmfSBkcmFnU291cmNlIGNsYXNzPXtjb250ZW50Q2xhc3N9IHN0eWxlPXtjb250ZW50U3R5bGV9XHJcblx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfT57dGhpcy5tX2NvbnRlbnR9PC9zcGFuPlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyU3ViTm9kZXMoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NTdWJub2Rlc30gc3R5bGU9e3tkaXNwbGF5OnRoaXMubV9pc0V4cGFuZGVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gaWNvbiBvciBuYW1lLlxyXG5cdHByaXZhdGUgb25DbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gaWNvbiBvciBuYW1lLlxyXG5cdHByaXZhdGUgb25EYmxDbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlKCkgOiB0aGlzLmV4cGFuZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlcmNsaWNrcyBvbiB0aGUgZXhwYW5kZXIgaWNvblxyXG5cdHByaXZhdGUgb25FeHBhbmRlckNsaWNrZWQgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRyZWUgY29udHJvbCB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25nc1xyXG5cdHB1YmxpYyBtX3RyZWU6IFRyZWU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlXHJcblx0cHVibGljIG1fcGFyZW50OiBUcmVlTm9kZTtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRlbnRhdGlvbiBsZXZlbCBvZiB0aGUgYmxvY2tcclxuXHRwdWJsaWMgbV9sZXZlbDogbnVtYmVyO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGVudGF0aW9uIGxldmVsIG9mIHRoZSBibG9ja1xyXG5cdHB1YmxpYyBtX2luZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBleHBhbmRlZCAodGhhdCBpcyBzdWItbm9kZXMgYXJlIHZpc2libGUpLlxyXG5cdHB1YmxpYyBtX2lzRXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9pc1NlbGVjdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgbm9kZSdzIGNvbnRlbnQuXHJcblx0cHVibGljIGNvbnRlbnRFbG1SZWY6IG1pbS5SZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuXHJcblx0Ly8gTm9kZSBwYXJhbWV0ZXJzXHJcblx0cHJpdmF0ZSBtX2NvbnRlbnQ6IHN0cmluZztcclxuXHRwcml2YXRlIG1faWNvbjogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHByaXZhdGUgbV90ZXh0Q29sb3I6IENzc0NvbG9yO1xyXG5cdHByaXZhdGUgbV9iZ0NvbG9yOiBDc3NDb2xvcjtcclxuXHRwcml2YXRlIG1faXRhbGljOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9ib2xkOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9jdXN0b21DbGFzczogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9kYXRhOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge0lUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIjtcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZUNvbnRhaW5lciBjbGFzcyByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzIHRoYXQgYXJlIGRpc3BsYXllZCBhbmRcclxuLy8gaGlkZGVuIHRvZ2V0aGVyLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29udGFpbmVyIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMgPSBbXTtcclxuXHRcdHRoaXMubm9kZUZhY3RvcnkgPSBub2RlRmFjdG9yeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGxldCBub2RlOiBUcmVlTm9kZSA9IHRoaXMubm9kZUZhY3RvcnkoKTtcclxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBjdXJyTGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gY3Vyckxlbmd0aDtcclxuXHRcdFx0dGhpcy5ub2Rlcy5wdXNoKCBub2RlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDAsIG5vZGUpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSBpbnNlcnRlZCBvbmVcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlLmNvbnRlbnQgPSBwYXJhbXMuY29udGVudDtcclxuXHRcdG5vZGUuaWNvbiA9IHBhcmFtcy5pY29uO1xyXG5cdFx0bm9kZS50ZXh0Q29sb3IgPSBwYXJhbXMudGV4dENvbG9yO1xyXG5cdFx0bm9kZS5iZ0NvbG9yID0gcGFyYW1zLmJnQ29sb3I7XHJcblx0XHRub2RlLml0YWxpYyA9IHBhcmFtcy5pdGFsaWM7XHJcblx0XHRub2RlLmJvbGQgPSBwYXJhbXMuYm9sZDtcclxuXHRcdG5vZGUuY3VzdG9tQ2xhc3MgPSBwYXJhbXMuY3VzdG9tQ2xhc3M7XHJcblx0XHRub2RlLmRhdGEgPSBwYXJhbXMuZGF0YTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBzdWItbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1Yi1ub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJyZXBsYWNlTm9kZTogaW52YWxpZCBpbmRleCBcIiArIGluZGV4KTtcclxuXHJcblx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbmRleGVzIG9mIHRoZSBub2RlcyBhZnRlciB0aGUgcmVtb3ZlZCBvbmVcclxuXHRcdGZvciggbGV0IGkgPSBpbmRleDsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0dGhpc1tpXS5pbmRleCA9IGk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBzdWItbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGN1cnJMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggMCwgY3Vyckxlbmd0aCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmV4cGFuZEFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5vZGUgb2YgdGhpcy5ub2RlcylcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5jb2xsYXBzZUFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubm9kZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFycmF5IG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwdWJsaWMgbm9kZXM6IFRyZWVOb2RlW107XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZSBvZiBUcmVlTm9kZSBvYmplY3RzXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeTogKCkgPT4gVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgYXhpcyBvZiBkYXRhLCB3aGljaCBjb25zaXN0cyBvZiBpdGVtcywgYW5kIHBlcmZvcm1zXHJcbiAqIGNhbGN1bGF0aW9ucyBkdXJpbmcgc2Nyb2xsaW5nIGJhY2sgYW5kIGZvcnRoIGFsb25nIHRoZSBheGlzLiBUaGUgU2Nyb2xsQXhpcyBjbGFzcyBpdHNlbGYgZG9lc24ndFxyXG4gKiBoYXZlIGFueSB2aXN1YWwgcmVwcmVzZW50YXRpb24gYW5kIG9ubHkgc2VydmVzIGFzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG0gdGhhdFxyXG4gKiBoZWxwcyB2aXJ0dWFsaXplIHNjcm9sbGluZyAtIHRoYXQgaXMgZGlzcGxheSBvbmx5IHNtYWxsIHN1YnNldCBvZiBkYXRhIGl0ZW1zIGFuZCBhZGQvcmVtb3ZlXHJcbiAqIGl0ZW1zIGFzIHNjcm9sbGluZyBoYXBwZW5zLlxyXG4gKiBcclxuICogVkF4aXMgYXNzdW1lcyB0aGUgdXNlIG9mIDMgRE9NIGVsZW1lbnRzOlxyXG4gKlx0LSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFyIHdoZW4gbmVjZXNzYXJ5XHJcbiAqXHQtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgc2V0IG9mIGl0ZW1zLiBJdCBpc1xyXG4gKlx0XHRuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKlx0LSBzdWJzZXQgLSB0aGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIG9ubHkgaXRlbXMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXMgYSBjZXJ0YWluIG51bWJlciBvZlxyXG4gKlx0XHRhZGRpdGlvbmFsIGl0ZW1zIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWQXhpcyBjYWxjdWxhdGVzIGF2ZXJhZ2UgaXRlbSBzaXplIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSBkYXRhIGJ5IHRoZSBudW1iZXIgb2YgaXRlbXMuXHJcbiAqIFRoZSBhdmVyYWdlIHZhbHVlIGlzIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIGl0ZW1zIGFyZSBhZGRlZCB0byBvciBkZWxldGVkIGZyb20gdGhlIHN1YnNldCB0aHVzXHJcbiAqIGFjY29tb2RhdGluZyBpdGVtcyB3aXRoIGRpZmZlcmVuIHNpemVzLiBCYXNlZCBvbiB0aGUgYXZlcmFnZSB2YWx1ZSB0aGUgd2FsbCBlbGVtZW50IGlzIHNpemVkXHJcbiAqIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhIHNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWQXhpcyB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIGl0ZW1zIG9uIGJvdGggc2lkZXMgb2YgdGhlIGZyYW1lIGFuZFxyXG4gKiBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2YgaXRlbXMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLiBEdXJpbmdcclxuICogc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSwgbmV3IGl0ZW1zIGFyZSBhZGRlZDsgaWZcclxuICogaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0sIGl0ZW1zIGFyZSBkZWxldGVkLiBXaGVuIGl0ZW1zIGFyZSBhZGRlZCB0aGV5IGFyZSBhZGRlZCB1cCB0b1xyXG4gKiB0aGUgb3B0aW1hbCBvdmVyc2NhbiBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXhpc1xyXG57XHJcblx0Ly8gTWluaW1hbCBudW1iZXIgb2YgYWRkaXRpb25hbCBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgbWFpbnRhaW5lZC4gV2hlblxyXG5cdC8vIGR1cmluZyBzY3JvbGxpbmcgdGhlIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBmYWxscyB1bmRlciB0aGlzIG51bWJlciwgbmV3IGl0ZW1zIGFyZSBhZGRlZC5cclxuXHRwcml2YXRlIG1pbk92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE9wdGltYWwgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydC4gV2hlbiBhZGRpbmcgbmV3IGl0ZW1zIG9yIHJlbW92aW5nXHJcblx0Ly8gZXhpc3RpbmcgaXRlbXMgd2Ugd2FudCB0byByaWNoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBvdmVyc2Nhbi5cclxuXHRwcml2YXRlIG9wdE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGV4Y2VlZHMgdGhpcyBudW1iZXIsIGl0ZW1zIGFyZSByZW1vdmVkLlxyXG5cdHByaXZhdGUgbWF4T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWluT3ZlcnNjYW46IG51bWJlciwgb3B0T3ZlcnNjYW46IG51bWJlciwgbWF4T3ZlcnNjYW46IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLm1pbk92ZXJzY2FuID0gbWluT3ZlcnNjYW47XHJcblx0XHR0aGlzLm9wdE92ZXJzY2FuID0gb3B0T3ZlcnNjYW47XHJcblx0XHR0aGlzLm1heE92ZXJzY2FuID0gbWF4T3ZlcnNjYW47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGZyYW1lXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW12b3ZlIGl0ZW1zLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIHdoZW46XHJcblx0ICpcdC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YSBzZXQgY2hhbmdlcy5cclxuXHQgKlx0LSBUaGUgc2l6ZSBvZiB0aGUgZnJhbWUgZWxlbWVudCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBmcmFtZSBlbGVtZW50IGlzIHNjcm9sbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0b3RhbENvdW50IE51bWJlciBvZiBpdGVtcyBpbiB0aGUgZW50aXJlIGRhdGEgc2V0XHJcblx0ICogQHBhcmFtIGZpcnN0SXRlbSBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBjdXJyZW50bHkgaW4gdGhlIHN1YnNldFxyXG5cdCAqIEBwYXJhbSBpdGVtQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGZyYW1lU2l6ZSBDdXJyZW50IHNpemUgaW4gcGl6ZWxzIG9mIHRoZSBmcmFtZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIHdhbGxTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHdhbGwgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSBzdWJzZXRTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHN1YnNldCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHNjcm9sbFBvcyBDdXJyZW50IG9yIG5ldyBzY3JvbGwgcG9zaXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIG1lYXN1cmUoIHRvdGFsQ291bnQ6IG51bWJlciwgb2xkRmlyc3Q6IG51bWJlciwgb2xkQ291bnQ6IG51bWJlciwgb2xkQXZnSXRlbVNpemU6IG51bWJlcixcclxuXHRcdGZyYW1lU2l6ZTogbnVtYmVyLCB3YWxsU2l6ZTogbnVtYmVyLCBzdWJzZXRTaXplOiBudW1iZXIsIHNjcm9sbFBvczogbnVtYmVyKTogU2Nyb2xsQXhpc0FjdGlvblxyXG5cdHtcclxuXHRcdC8vIHByZXBhcmUgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZFxyXG5cdFx0bGV0IHJldEFjdGlvbiA9IG5ldyBTY3JvbGxBeGlzQWN0aW9uKCk7XHJcblx0XHRpZiAodG90YWxDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHRcdGVsc2UgaWYgKG9sZENvdW50ID09PSAwKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaXRlbUNvdW50IGNhbm5vdCBiZSB6ZXJvXCIpO1xyXG5cclxuXHRcdGxldCBvbGRMYXN0ID0gb2xkRmlyc3QgKyBvbGRDb3VudCAtIDE7XHJcblx0XHRsZXQgdG90YWxMYXN0ID0gdG90YWxDb3VudCAtIDE7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBhdmVyYWdlIGl0ZW0gc2l6ZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBjdXJyZW50IHN1YnNldFxyXG5cdFx0Ly8gYW5kIHRoZSBjdXJyZW50IHNpemUgb2YgdGhlIGRhdGEgZWxlbWVudC5cclxuXHRcdGxldCBuZXdBdmdJdGVtU2l6ZSA9IHN1YnNldFNpemUgLyBvbGRDb3VudDtcclxuXHRcdGlmIChvbGRBdmdJdGVtU2l6ZSlcclxuXHRcdFx0bmV3QXZnSXRlbVNpemUgPSAobmV3QXZnSXRlbVNpemUgKyBvbGRBdmdJdGVtU2l6ZSkgLyAyO1xyXG5cclxuXHRcdC8vIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gYW5kIHRoZSBhdmVyYWdlIHNpemUgZXN0aW1hdGUgd2hhdCBpdGVtcyB3b3VsZCBmaXQgaW5zaWRlXHJcblx0XHQvLyB0aGUgZnJhbWUgZWxlbWVudC5cclxuXHRcdGxldCBmaXRGaXJzdCA9IE1hdGgubWluKCBNYXRoLmZsb29yKCBzY3JvbGxQb3MgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgZml0TGFzdCA9IE1hdGgubWluKCBNYXRoLmNlaWwoIChzY3JvbGxQb3MgKyBmcmFtZVNpemUpIC8gbmV3QXZnSXRlbVNpemUpLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdC8vIGdldCBuZXcgZmlyc3QgYW5kIGxhc3QgIGluZGljZXMgd2l0aCBtaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuXHJcblx0XHRsZXQgbWluT3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWluT3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG9wdE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm9wdE92ZXJzY2FuLCAwKVxyXG5cdFx0bGV0IG1heE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm1heE92ZXJzY2FuLCAwKTtcclxuXHRcdGxldCBtaW5PdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMubWluT3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm9wdE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IG1heE92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5tYXhPdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHJcblx0XHRsZXQgbmV3Rmlyc3QgPSBvbGRGaXJzdCA+IG1pbk92ZXJzY2FuRmlyc3QgfHwgb2xkRmlyc3QgPCBtYXhPdmVyc2NhbkZpcnN0ID8gb3B0T3ZlcnNjYW5GaXJzdCA6IG9sZEZpcnN0O1xyXG5cdFx0bGV0IG5ld0xhc3QgPSBvbGRMYXN0IDwgbWluT3ZlcnNjYW5MYXN0IHx8IG9sZExhc3QgPiBtYXhPdmVyc2Nhbkxhc3QgPyBvcHRPdmVyc2Nhbkxhc3QgOiBvbGRMYXN0O1xyXG5cclxuXHRcdGlmIChuZXdGaXJzdCA+IG5ld0xhc3QpXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBXcm9uZyBTY3JvbGxBeGlzIGNhbGN1bGF0aW9uOiBuZXdGaXJzdCAnJHtuZXdGaXJzdH0nIGlzIGdyZWF0ZXIgdGhhbiBuZXdMYXN0ICcke25ld0xhc3R9J2ApXHJcblxyXG5cdFx0Ly8gc2V0IHdoYXQgd2UgYWxyZWFkeSBrbm93IGludG8gdGhlIHJldHVybiBvYmplY3RcclxuXHRcdHJldEFjdGlvbi5uZXdGaXJzdCA9IG5ld0ZpcnN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0xhc3QgPSBuZXdMYXN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0F2Z0l0ZW1TaXplID0gbmV3QXZnSXRlbVNpemU7XHJcblx0XHRyZXRBY3Rpb24ubmV3V2FsbFNpemUgPSBNYXRoLmNlaWwoIHRvdGFsQ291bnQgKiBuZXdBdmdJdGVtU2l6ZSk7XHJcblx0XHRyZXRBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ID0gTWF0aC5jZWlsKCBuZXdGaXJzdCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHJcblx0XHQvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB3ZSB3YW50LCBkZXRlcm1pbmUgd2hhdCBpdGVtcyBzaG91bGQgYmVcclxuXHRcdC8vIGFkZGVkL3JlbW92ZWQgaW4gdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZFxyXG5cdFx0aWYgKG5ld0ZpcnN0ID09IG9sZEZpcnN0ICYmIG5ld0xhc3QgPT0gb2xkTGFzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBkYXRhc2V0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgb25lLCBkb24ndCBhZGQvcmVtb3ZlIGFueSBpdGVtc1xyXG5cdFx0XHRyZXRBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRMYXN0IHx8IG5ld0xhc3QgPCBvbGRGaXJzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBkYXRhc2V0cyBkb24ndCBpbnRlcnNlY3QsIHJlbW92ZSBhbGwgZXhpc3RpbmcgYW5kIGFkZCBhbGxcclxuXHRcdFx0Ly8gbmV3IGl0ZW1zLlxyXG5cdFx0XHRyZXRBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5ld0ZpcnN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID0gb2xkRmlyc3QgLSBuZXdGaXJzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRGaXJzdClcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPSBuZXdGaXJzdCAtIG9sZEZpcnN0O1xyXG5cclxuXHRcdFx0aWYgKG5ld0xhc3QgPCBvbGRMYXN0KVxyXG5cdFx0XHRcdHJldEFjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPSBvbGRMYXN0IC0gbmV3TGFzdDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3TGFzdCA+IG9sZExhc3QpXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdEVuZCA9IG5ld0xhc3QgLSBvbGRMYXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXRBY3Rpb247XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2Nyb2xsQXhpc0FjdGlvbiBjbGFzcyByZXByZXNlbnRzIHRoZSBhY3Rpb24ocykgdGhhdCBzaG91bGQgYmUgZG9uZSBhZnRlciB0aGUgU2Nyb2xsQXhpc1xyXG4gKiBwZXJmb3JtZWQgY2FsY3VsYXRpb25zIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmcmFtZSwgd2FsbCBhbmQgZGF0YS4gVGhlIGFjdGlvbnNcclxuICogYXJlIGluc3RydWN0aW9ucyB0byBhZGQgb3IgcmVtb3ZlIGl0ZW1zIGFuZCB0byBzZXQgd2FsbCBzaXplIGFuZCBkYXRhIG9mZnNldC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzQWN0aW9uXHJcbntcclxuXHQvLyBOZXcgYXZlYXJhZ2UgaXRlbSBzaXplXHJcblx0bmV3QXZnSXRlbVNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBzaXplIHRoYXQgc2hvdWxkIGJlIHNldCB0byB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3V2FsbFNpemU6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE5ldyBvZmZzZXQgb2YgdGhlIHN1YnNldCBlbGVtZW50IGZyb20gdGhlIHdhbGwgZWxlbWVudFxyXG5cdG5ld1N1YnNldE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0ZpcnN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBpdGVtIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBzdWJzZXRcclxuXHRuZXdMYXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCBuZWl0aGVyIGFkZCBub3IgcmVtb3ZlIGFueSBpdGVtcy5cclxuXHRub0FkZFJlbW92ZU5lZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zLiBJZiB0aGlzIGZsYWcgaXMgc2V0XHJcblx0Ly8gdG8gdHJ1ZSwgdGhlbiB0aGUgY2FsbGVyIHNob3VsZCByZW1vdmUgYWxsIGV4aXN0aW5nIGl0ZW1zIGFuZCB0aGVuIGFkZCBhbGwgaXRlbXMgZnJvbVxyXG5cdC8vIG5ld0ZpcnN0IHRvIG5ld0xhc3RcclxuXHRuZWVlZFRvUmVtb3ZlQWxsSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBvbGRGaXJzdFxyXG5cdC8vIHRvIG5ld0ZpcnN0LTEuXHJcblx0Y291bnRUb1JlbW92ZUF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3TGFzdCsxXHJcblx0Ly8gdG8gb2xkTGFzdC5cclxuXHRjb3VudFRvUmVtb3ZlQXRFbmQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGJlZ2lubmluZy4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gbmV3Rmlyc3RcclxuXHQvLyB0byBvbGRGaXJzdC0xLlxyXG5cdGNvdW50VG9BZGRBdFN0YXJ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gYWRkIGF0IHRoZSBlbmQuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZExhc3QrMVxyXG5cdC8vIHRvIG5ld0xhc3QuXHJcblx0Y291bnRUb0FkZEF0RW5kOiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwibWltY3NzXCJcclxuaW1wb3J0IHtTY3JvbGxBeGlzLCBTY3JvbGxBeGlzQWN0aW9ufSBmcm9tIFwiLi9TY3JvbGxBeGlzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWVEFibGVDZWxsRGF0YSBpbnRlcmZhY2UgcmVwcmVzZW50cyBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBjZWxsIHRoYXQgaXMgcHJvdmlkZWRcclxuICogYnkgYSBjYWxsZXIgd2hlbiByZXF1ZXNlZCBieSBWVGFibGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZUYWJsZUNlbGxEYXRhXHJcbntcclxuXHQvKiogQ29udGVudCBvZiB0aGUgY2VsbCAqL1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiByb3dzIHRoaXMgY2VsbCBzaG91bGQgc3Bhbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4gKi9cclxuXHRyb3dTcGFuPzogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNvbHVtbnMgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdGNvbFNwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBTdHlsZSB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgb3IgYDx0aD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRzdHlsZT86IFN0eWxlc2V0O1xyXG5cclxuXHQvKiogQ2xhc3MgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgYDx0ZD5gIG9yIGA8dGg+YCBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNlbGwuICovXHJcblx0Y2xhc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWVGFibGVQcm9wcyBjbGFzcyBkZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIG9iamVjdCB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIFZUYWJsZVxyXG4gKiBjb25zdHJ1Y3Rvci4gVGhlIHByb3BlcnRpZXMgb2YgdGhlIG9iamVjdCBkZWZpbmUgdGhlIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBWVGFibGVcclxuICogaW4gSlNYIHdoZW4gaXQgaXMgdXNlZCBhcyBhIG1hbmFnZWQgY29wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZUYWJsZVByb3BzXHJcbntcclxuXHQvKiogTnVtYmVyIG9mIHJvd3MgaW4gdGhlIGVudGlyZSBkYXRhc2V0ICovXHJcblx0dG90YWxSb3dDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGVudGlyZSBkYXRhc2V0ICovXHJcblx0dG90YWxDb2xDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvKiogTWluaW1hbCwgb3B0aW1hbCBhbmQgbWF4aW11bSBudW1iZXIgb2Ygb3ZlcnNjYW4gcm93cyAqL1xyXG5cdHJvd092ZXJzY2FuPzogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuXHQvKiogTWluaW1hbCwgb3B0aW1hbCBhbmQgbWF4aW11bSBudW1iZXIgb2Ygb3ZlcnNjYW4gY29sdW1ucyAqL1xyXG5cdGNvbE92ZXJzY2FuPzogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgY2VsbCBkYXRhLiAqL1xyXG5cdGdldENlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBoZWFkZXIgcm93cy4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdGNvbEhlYWRlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIGNvbHVtbiBoZWFkZXIgY2VsbHMuICovXHJcblx0Z2V0Q29sSGVhZGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGZvb3RlciByb3dzLiBEZWZhdWx0IHZhbHVlIGlzIDAuICovXHJcblx0Y29sRm9vdGVyQ2VsbENvdW50PzogbnVtYmVyO1xyXG5cclxuXHQvKiogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgZGF0YSBmb3IgY29sdW1uIGZvb3RlciBjZWxscy4gKi9cclxuXHRnZXRDb2xGb290ZXJDZWxsQ2FsbGJhY2s/OiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY2VsbHMgaW4gdGhlIHJvdyBoZWFkZXIuIERlZmF1bHQgdmFsdWUgaXMgMC4gKi9cclxuXHRyb3dIZWFkZXJDZWxsQ291bnQ/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBDYWxsYmFjayB0aHJvdWdoIHdoaWNoIFZUYWJsZSByZXF1ZXN0cyBkYXRhIGZvciByb3cgaGVhZGVyIGNlbGxzLiAqL1xyXG5cdGdldFJvd0hlYWRlckNlbGxDYWxsYmFjaz86IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjZWxscyBpbiB0aGUgcm93IGZvb3Rlci4gRGVmYXVsdCB2YWx1ZSBpcyAwLiAqL1xyXG5cdHJvd0Zvb3RlckNlbGxDb3VudD86IG51bWJlcjtcclxuXHJcblx0LyoqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGRhdGEgZm9yIHJvdyBmb290ZXIgY2VsbHMuICovXHJcblx0Z2V0Um93Rm9vdGVyQ2VsbENhbGxiYWNrPzogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIlZpcnR1YWxpemVkXCIgdGFibGUgdGhhdCByZW5kZXJzIG9ubHkgYSBzdWJzZXQgb2YgYSBkYXRhc2V0IGFuZCBjaGFuZ2VzIHRoaXMgc3Vic2V0XHJcbiAqIGFzIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBhbmQgZm9ydGguXHJcbiAqIFxyXG4gKiBWVGFibGUgdXNlcyB0aGUgZm9sbG93aW5nIDMgRE9NIGVsZW1lbnRzOlxyXG4gKiAgLSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGRpc3BsYXlzIHRoZSBzY3JvbGxiYXJzIHdoZW4gbmVjZXNzYXJ5XHJcbiAqICAtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGA8ZGl2PmAgZWxlbWVudCB3aGljaCBoYXMgdGhlIHNpemUgb2YgdGhlIGVudGlyZSBwb3NzaWJsZSB0YWJsZS4gSXQgaXNcclxuICogICAgbmVlZGVkIHRvIG1ha2Ugc2Nyb2xsaW5nIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZS5cclxuICogIC0gdGFibGUgLSB0aGUgYDx0YWJsZT5gIGVsZW1lbnQgdGhhdCBjb250YWlucyBvbmx5IHJvd3MgYW5kIGNvbHVtbnMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXNcclxuICogICAgYSBjZXJ0YWluIG51bWJlciBmb3IgXCJvdmVyc2NhblwiLlxyXG4gKiBcclxuICogVlRhYmxlIGNhbGN1bGF0ZXMgYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGggYnkgZGl2aWRpbmcgdGhlIHNpemUgb2YgdGhlIHRhYmxlXHJcbiAqIGJ5IHRoZSBudW1iZXIgb2Ygcm93cy9jb2x1bW5zLiBUaGVzZSBhdmVyYWdlIHZhbHVlcyBhcmUgcmVjYWxjdWxhdGVkIGV2ZXJ5IHRpbWUgcm93cyBhbmRcclxuICogY29sdW1ucyBhcmUgYWRkZWQgb3IgZGVsZXRlZCBmcm9tIHRoZSB0YWJsZS4gQmFzZWQgb24gdGhlc2UgYXZlcmFnZSB2YWx1ZXMgdGhlIHdhbGwgZWxlbWVudFxyXG4gKiBpcyBzaXplZCB0byBpbmNsdWRlIHRoZSBlbnRpcmUgZGF0YXNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsaW5nXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWVGFibGUgdXNlcyBtaW5pbXVtLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zIG9uIGFsbCBzaWRlcyBvZlxyXG4gKiB0aGUgZnJhbWUgYW5kIG1ha2VzIHN1cmUgdGhhdCB0aGUgYWN0dWFsIG51bWJlciBvZiByb3dzL2NvbHVtbnMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kXHJcbiAqIG1heGltdW0gdmFsdWVzLiBEdXJpbmcgc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSxcclxuICogbmV3IGNlbGxzIGFyZSBhZGRlZCBhbmQgaWYgaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0gY2VsbHMgYXJlIGRlbGV0ZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVlRhYmxlIGV4dGVuZHMgbWltLkNvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxWVGFibGVQcm9wcz5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogVlRhYmxlUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLmF2Z1Jvd0hlaWdodCA9IDA7XHJcblx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gMDtcclxuXHJcblx0XHQvLyBuZWdhdGl2ZSB2YWx1ZXMgaW5kaWNhdGUgdGhhdCB3ZSBoYXZlbid0IG1lYXN1cmVkIGFueSBzaXplcyB5ZXQuXHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbFRvcCA9IC0xO1xyXG5cdFx0dGhpcy5sYXRlc3RTY3JvbGxMZWZ0ID0gLTE7XHJcblxyXG5cdFx0Ly8gc2V0IGluaXRpYWwgc2l6ZSBvZiB0aGUgd2FsbCBlbGVtZW50IGJhc2VkIG9uIHNvbWUgaGFyZC1jb2RlZCB2YWx1ZXMuIEl0IHdpbGwgYmVcclxuXHRcdC8vIGNoYW5nZWQgYXMgc29vbiBhcyB3ZSByZW5kZXIgYW5kIHN0YXJ0IG1lYXN1cmluZyBvdXIgZWxlbWVudHNcclxuXHRcdHRoaXMud2FsbEhlaWdodCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCAqIDI1O1xyXG5cdFx0dGhpcy53YWxsV2lkdGggPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgKiA4MDtcclxuXHJcblx0XHR0aGlzLm1pblJvd092ZXJzY2FuID0gdGhpcy5wcm9wcy5yb3dPdmVyc2NhbiA/IHRoaXMucHJvcHMucm93T3ZlcnNjYW5bMF0gOiAzO1xyXG5cdFx0dGhpcy5vcHRSb3dPdmVyc2NhbiA9IHRoaXMucHJvcHMucm93T3ZlcnNjYW4gPyB0aGlzLnByb3BzLnJvd092ZXJzY2FuWzFdIDogNjtcclxuXHRcdHRoaXMubWF4Um93T3ZlcnNjYW4gPSB0aGlzLnByb3BzLnJvd092ZXJzY2FuID8gdGhpcy5wcm9wcy5yb3dPdmVyc2NhblsyXSA6IDEyO1xyXG5cclxuXHRcdHRoaXMubWluQ29sT3ZlcnNjYW4gPSB0aGlzLnByb3BzLmNvbE92ZXJzY2FuID8gdGhpcy5wcm9wcy5jb2xPdmVyc2NhblswXSA6IDM7XHJcblx0XHR0aGlzLm9wdENvbE92ZXJzY2FuID0gdGhpcy5wcm9wcy5jb2xPdmVyc2NhbiA/IHRoaXMucHJvcHMuY29sT3ZlcnNjYW5bMV0gOiA2O1xyXG5cdFx0dGhpcy5tYXhDb2xPdmVyc2NhbiA9IHRoaXMucHJvcHMuY29sT3ZlcnNjYW4gPyB0aGlzLnByb3BzLmNvbE92ZXJzY2FuWzJdIDogMTI7XHJcblxyXG5cdFx0dGhpcy5wcmVwYXJlTG9jYWxTdHlsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yb3dzID0gW107XHJcblxyXG5cdFx0Ly8gZmlsbCBpbiBpbml0aWFsIGRhdGFzZXRcclxuXHRcdGxldCByb3dDb3VudCA9IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDogMTA7XHJcblx0XHRsZXQgY29sQ291bnQgPSB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgPCAxMCA/IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA6IDEwO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdGZvciggbGV0IGogPSAwOyBqIDwgY29sQ291bnQ7IGorKylcclxuXHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHJcblx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBkYXRhc2V0IHNpemVcclxuXHRcdHRoaXMuZmlyc3RSb3cgPSAwO1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gcm93Q291bnQgLSAxO1xyXG5cdFx0dGhpcy5maXJzdENvbCA9IDA7XHJcblx0XHR0aGlzLmxhc3RDb2wgPSBjb2xDb3VudCAtIDE7XHJcblxyXG5cdFx0dGhpcy52QXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pblJvd092ZXJzY2FuLCB0aGlzLm9wdFJvd092ZXJzY2FuLCB0aGlzLm1heFJvd092ZXJzY2FuKVxyXG5cdFx0dGhpcy5oQXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pbkNvbE92ZXJzY2FuLCB0aGlzLm9wdENvbE92ZXJzY2FuLCB0aGlzLm1heENvbE92ZXJzY2FuKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5mcmFtZUlEID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwiZnJhbWVcIik7XHJcblx0XHR0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJmcmFtZVwiLCBcIiNmcmFtZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6XCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy53YWxsSUQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ3YWxsXCIpO1xyXG5cdFx0dGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwid2FsbFwiLCBcIiN3YWxsKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMudGFibGVJRCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRhYmxlXCIpO1xyXG5cdFx0dGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidGFibGVcIiwgXCIjdGFibGUoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0Ym9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0XHRib3JkZXI6IFsxLCBcInNvbGlkXCIsIFwiYmxhY2tcIl0sXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZHVyaW5nIGVhY2ggcmVuZGVyaW5nLCB3ZSBzY2hlZHVsZSB0aGUgbWVhc3VyaW5nIGZ1bmN0aW9uYWxpdHksIHdoaWNoIHdpbGwgZGV0ZXJtaW5nXHJcblx0XHQvLyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbW92ZSBjZWxscy4gVGhlIG1lYXN1cmluZyBmdW5jdGlvbiB3aWxsIHJ1biBpbiB0aGUgbmV4dCB0aWNrXHJcblx0XHQvLyBhZnRlciB0aGUgcmVuZGVyIGFuZCB3aWxsIHNjaGVkdWxlIHVwZGF0ZSBpbiB0aGUgc2FtZSB0aWNrIGlmIG5lY2Vzc2FyeS5cclxuXHRcdHRoaXMuY2FsbE1lQmVmb3JlVXBkYXRlKCB0aGlzLm1lYXN1cmVBbmRVcGRhdGUpO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGlkPXt0aGlzLmZyYW1lSUR9IHJlZj17dGhpcy5mcmFtZVJlZn0gc2Nyb2xsPXt0aGlzLm9uU2Nyb2xsfT5cclxuXHRcdFx0PGRpdiBpZD17dGhpcy53YWxsSUR9IHJlZj17dGhpcy53YWxsUmVmfT5cclxuXHRcdFx0XHQ8dGFibGUgaWQ9e3RoaXMudGFibGVJRH0gcmVmPXt0aGlzLnRhYmxlUmVmfT5cclxuXHRcdFx0XHRcdDx0Ym9keT57dGhpcy5yZW5kZXJSb3dzfTwvdGJvZHk+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlclJvd3MoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucm93cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZGVuIGJ5IGRlcml2ZWQgY2xhc3Nlc1xyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGNvbHVtbiBoZWFkZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDb2xIZWFkZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q29sSGVhZGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDb2xIZWFkZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGNvbHVtbiBmb290ZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRDb2xGb290ZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Q29sRm9vdGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRDb2xGb290ZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHJvdyBoZWFkZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRSb3dIZWFkZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um93SGVhZGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRSb3dIZWFkZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgZGF0YSBmb3IgdGhlIGdpdmVuIGNlbGwsIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHJvdyBmb290ZXIuIFRoaXMgbWV0aG9kIGNhbiBiZVxyXG5cdCAqIG92ZXJyaWRkZW4gYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBnZXRSb3dGb290ZXJDZWxsRGF0YShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um93Rm9vdGVyQ2VsbENhbGxiYWNrID8gdGhpcy5wcm9wcy5nZXRSb3dGb290ZXJDZWxsQ2FsbGJhY2soIHJvdywgY29sKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdCAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBJZiB3ZSBkbywgd2Ugc2NoZWR1bGUgcmUtcmVuZGVyaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWVhc3VyZUFuZFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm93Q291bnQgPT09IDAgfHwgdGhpcy5jb2xDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBmcmFtZVJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHdhbGxSZWN0ID0gdGhpcy53YWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHRhYmxlUmVjdCA9IHRoaXMudGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMubGF0ZXN0U2Nyb2xsVG9wICE9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyBoZWlnaHQ6IHNjcm9sbCB0b3AgPSAke3RoaXMuZnJhbWUuc2Nyb2xsVG9wfSwgcm93czogJHt0aGlzLnJvd0NvdW50fSwgYCArXHJcblx0XHRcdC8vIFx0XHRcdFx0YHdhbGwgaGVpZ2h0ID0gJHt3YWxsUmVjdC5oZWlnaHR9LCB0YWJsZSBoZWlnaHQgPSAke3RhYmxlUmVjdC5oZWlnaHR9YCk7XHJcblxyXG5cdFx0XHRsZXQgdkF4aXNBY3Rpb24gPSB0aGlzLnZBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxSb3dDb3VudCwgdGhpcy5maXJzdFJvdywgdGhpcy5yb3dDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCwgZnJhbWVSZWN0LmhlaWdodCwgd2FsbFJlY3QuaGVpZ2h0LCB0YWJsZVJlY3QuaGVpZ2h0LCB0aGlzLmZyYW1lLnNjcm9sbFRvcCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgcm93IGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemV9YCk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgdGhlIGxhdGVzdCB2ZXJ0aWNhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5sYXRlc3RTY3JvbGxUb3AgPSB0aGlzLmZyYW1lLnNjcm9sbFRvcDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgcm93cyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCF2QXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVJvd3MoIHZBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgaGVpZ2h0IGFuZCBzdWJzZXQgdmVydGljYWwgb2Zmc2V0IGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAodkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgIT0gd2FsbFJlY3QuaGVpZ2h0IHx8IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QudG9wIC0gd2FsbFJlY3QudG9wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWVBZnRlclVwZGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS50b3AgPSB2QXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgKyBcInB4XCI7XHJcblx0XHRcdFx0XHR0aGlzLndhbGwuc3R5bGUuaGVpZ2h0ID0gdkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5sYXRlc3RTY3JvbGxMZWZ0ICE9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBNZWFzdXJpbmcgd2lkdGg6IHNjcm9sbCBsZWZ0ID0gJHt0aGlzLmZyYW1lLnNjcm9sbExlZnR9LCBjb2xzOiAke3RoaXMuY29sQ291bnR9LCBgICtcclxuXHRcdFx0Ly8gXHRcdFx0XHRgd2FsbCB3aWR0aCA9ICR7d2FsbFJlY3Qud2lkdGh9LCB0YWJsZSB3aWR0aCA9ICR7dGFibGVSZWN0LndpZHRofWApO1xyXG5cclxuXHRcdFx0bGV0IGhBeGlzQWN0aW9uID0gdGhpcy5oQXhpcy5tZWFzdXJlKCB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQsIHRoaXMuZmlyc3RDb2wsIHRoaXMuY29sQ291bnQsXHJcblx0XHRcdFx0dGhpcy5hdmdDb2xXaWR0aCwgZnJhbWVSZWN0LndpZHRoLCB3YWxsUmVjdC53aWR0aCwgdGFibGVSZWN0LndpZHRoLCB0aGlzLmZyYW1lLnNjcm9sbExlZnQpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBFc3RpbWF0ZWQ6IHdhbGwgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgY29sIHdpZHRoID0gJHtoQXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZX1gKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgYXZlcmFnZSBjb2x1bW4gd2lkdGggYW5kIHRoZSBsYXRlc3QgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdDb2xXaWR0aCA9IGhBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSB0aGlzLmZyYW1lLnNjcm9sbExlZnQ7XHJcblxyXG5cdFx0XHQvLyBhZGQvcmVtb3ZlIGNvbHVtbnMgaWYgbmVlZGVkXHJcblx0XHRcdGlmICghaEF4aXNBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQpXHJcblx0XHRcdFx0dGhpcy51cGRhdGVDb2xzKCBoQXhpc0FjdGlvbik7XHJcblxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGluZyBvZiB3YWxsIHdpZHRoIGFuZCBzdWJzZXQgaG9yaXpvbnRhbCBvZmZzZXQgaWYgbmVlZGVkXHJcblx0XHRcdGlmIChoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSAhPSB3YWxsUmVjdC53aWR0aCB8fCBoQXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgIT0gdGFibGVSZWN0LmxlZnQgLSB3YWxsUmVjdC5sZWZ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWVBZnRlclVwZGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS5sZWZ0ID0gaEF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLndpZHRoID0gaEF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZW1vdmVzIHJvd3MgYXMgaW5kaWNhdGVkIGJ5IHRoZSBnaXZlbiBTY3JvbGxBeGlzQWN0aW9uIGRlYWxpbmcgd2l0aCB0aGUgdmVydGljYWxcclxuXHQgKiBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVSb3dzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgcm93cyBmcm9tICR7dGhpcy5maXJzdFJvd30gLSAke3RoaXMubGFzdFJvd30gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5yb3dzID0gW107XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMucm93Q291bnR9IGV4aXN0aW5nIHJvd3NgKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcclxuXHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIGVuZFxyXG5cdFx0XHRcdHRoaXMucm93cy5wdXNoKCB2cm93KTtcclxuXHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IHJvd3NgKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggdGhpcy5yb3dDb3VudCAtIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kLCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmR9IHJvd3MgZnJvbSBib3R0b21gKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggMCwgYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydH0gcm93cyBmcm9tIHRvcGApO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMubGFzdFJvdyArIDE7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IHJvd3MgdG8gYm90dG9tYCk7XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93IC0gMTsgaSA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpLS0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5nZXRDZWxsRGF0YSggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCAwLCAwLCB2cm93KTtcclxuXHRcdFx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSByb3dzIHRvIHRvcGApO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSBheGlzQWN0aW9uLm5ld0xhc3Q7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSggdGhpcy5yZW5kZXJSb3dzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZW1vdmVzIGNvbHVtbnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBnaXZlbiBTY3JvbGxBeGlzQWN0aW9uIGRlYWxpbmcgd2l0aCB0aGVcclxuXHQgKiBob3Jpem9udGFsIHNjcm9sbGluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZUNvbHMoIGF4aXNBY3Rpb246IFNjcm9sbEF4aXNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY29uc29sZS5sb2coIGBVcGRhdGluZyBjb2x1bW5zIGZyb20gJHt0aGlzLmZpcnN0Q29sfSAtICR7dGhpcy5sYXN0Q29sfSB0byAke2F4aXNBY3Rpb24ubmV3Rmlyc3R9IC0gJHtheGlzQWN0aW9uLm5ld0xhc3R9YCk7XHJcblxyXG5cdFx0aWYgKGF4aXNBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdzsgaSA8PSB0aGlzLmxhc3RSb3c7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB2cm93ID0gdGhpcy5yb3dzW2kgLSB0aGlzLmZpcnN0Um93XTtcclxuXHRcdFx0XHR2cm93LnJlbW92ZUFsbENlbGxzKCk7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaiA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGogPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBqKyspXHJcblx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCBhbGwgJHt0aGlzLmNvbENvdW50fSBleGlzdGluZyBjb2xzYCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLm5ld0xhc3QgLSBheGlzQWN0aW9uLm5ld0ZpcnN0ICsgMX0gY29sc2ApO1xyXG4vLy8vLy8vLy8vLy8vXHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCB2cm93IG9mIHRoaXMucm93cylcclxuXHRcdFx0XHRcdHZyb3cucmVtb3ZlQ2VsbHNBdEVuZCggYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSBjb2xzIGZyb20gcmlnaHRgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0XHR2cm93LnJlbW92ZUNlbGxzQXRTdGFydCggYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkICR7YXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydH0gY29scyBmcm9tIGxlZnRgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gdGhpcy5yb3dzW2kgLSB0aGlzLmZpcnN0Um93XTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmxhc3RDb2wgKyAxOyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZH0gY29scyB0byByaWdodGApO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdzsgaSA8PSB0aGlzLmxhc3RSb3c7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbCAtIDE7IGogPj0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgai0tKVxyXG5cdFx0XHRcdFx0XHR2cm93Lmluc2VydENlbGwoIHRoaXMuZ2V0Q2VsbERhdGEoIGksIGopKTtcclxuXHRcdFx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSBjb2xzIHRvIGxlZnRgKTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmlyc3RDb2wgPSBheGlzQWN0aW9uLm5ld0ZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0Q29sID0gYXhpc0FjdGlvbi5uZXdMYXN0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uU2Nyb2xsKCBlOiBFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNhbGxNZUJlZm9yZVVwZGF0ZSggdGhpcy5tZWFzdXJlQW5kVXBkYXRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3ZlcnNjYW4gdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHRwcml2YXRlIG1pblJvd092ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRSb3dPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Um93T3ZlcnNjYW46IG51bWJlcjtcclxuXHRwcml2YXRlIG1pbkNvbE92ZXJzY2FuOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBvcHRDb2xPdmVyc2NhbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4Q29sT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gQ3VycmVudCBkYXRhc2V0IHJlcHJlc2VudGVkIGJ5IHJvdyBjb21wb25lbnRzLlxyXG5cdHByaXZhdGUgcm93czogVlJvd1tdO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RSb3c6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3Qgcm93IGluIHRoZSBkYXRhc2V0IG9yIC0xIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBsYXN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAwIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBmaXJzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb3VudHMgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHByaXZhdGUgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RSb3cgLSB0aGlzLmZpcnN0Um93ICsgMSB9XHJcblx0cHJpdmF0ZSBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdENvbCAtIHRoaXMuZmlyc3RDb2wgKyAxIH1cclxuXHJcblx0cHVibGljIGdldCBSb3dzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fWA7IH1cclxuXHRwdWJsaWMgZ2V0IENvbHMoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9YDsgfVxyXG5cclxuXHQvLyBTaXplIG9mIHRoZSBlbnRpcmUgdGFibGUgYmFzZWQgb24gYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGguIFRoaXMgYmVjb21lcyB0aGVcclxuXHQvLyBzaXplIG9mIHRoZSB3YWxsLlxyXG5cdHByaXZhdGUgd2FsbEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgd2FsbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBjYWxjdWxhdGVkIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoXHJcblx0cHJpdmF0ZSBhdmdSb3dIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGF2Z0NvbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBzY3JvbGxpbmcgcG9zaXRpb25zXHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxUb3A6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhdGVzdFNjcm9sbExlZnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBmcmFtZSB0aGF0IGhhcyB0aGUgc2NvbGxiYXJzXHJcblx0cHJpdmF0ZSBmcmFtZTogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBmcmFtZVJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy5mcmFtZSA9IHI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgd2FsbCB0aGF0IGlzIGJpZyBlbm91Z2ggdG8gaG9sZCBlbnRpcmUgZGF0YXNldFxyXG5cdHByaXZhdGUgd2FsbDogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3YWxsUmVmID0gKHI6IEhUTUxEaXZFbGVtZW50KSA9PiB0aGlzLndhbGwgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHRhYmxlIHRoYXQgZGlzcGxheXMgdGhlIHBhcnRpYWwgZGF0YXNldFxyXG5cdHByaXZhdGUgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0YWJsZVJlZiA9IChyOiBIVE1MVGFibGVFbGVtZW50KSA9PiB0aGlzLnRhYmxlID0gcjtcclxuXHJcblx0Ly8gT2JqZWN0cyB0aGF0IGRlYWwgd2l0aCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuXHRwcml2YXRlIHZBeGlzOiBTY3JvbGxBeGlzO1xyXG5cdHByaXZhdGUgaEF4aXM6IFNjcm9sbEF4aXM7XHJcblxyXG5cdC8vIElEcyBvZiB2aXJ0dWFsIHRhYmxlIHBhcnRzXHJcblx0cHJpdmF0ZSBmcmFtZUlEOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSB3YWxsSUQ6IHN0cmluZztcclxuXHRwcml2YXRlIHRhYmxlSUQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWUm93IGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y2VsbHM6IFZDZWxsW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY2VsbHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5wdXNoKCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbnNlcnRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIDAsIDAsIG5ldyBWQ2VsbCggZGF0YSkpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUFsbENlbGxzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdFN0YXJ0KCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCBjb3VudCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdEVuZCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggdGhpcy5jZWxscy5sZW5ndGggLSBjb3VudCwgY291bnQpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRyPnt0aGlzLmNlbGxzfTwvdHI+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWQ2VsbCBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGRhdGE6IFZUYWJsZUNlbGxEYXRhO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggZGF0YTogYW55KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBkYXRhLmNvbnRlbnQpXHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YSA9IHsgY29udGVudDogZGF0YSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kYXRhID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiA8dGQgY2xhc3M9e3RoaXMuZGF0YS5jbGFzc30gc3R5bGU9e3RoaXMuZGF0YS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0cm93c3Bhbj17dGhpcy5kYXRhLnJvd1NwYW4gPyB0aGlzLmRhdGEucm93U3BhbiA6IHVuZGVmaW5lZH1cclxuXHRcdFx0XHRcdFx0Y29sc3Bhbj17dGhpcy5kYXRhLmNvbFNwYW4gPyB0aGlzLmRhdGEuY29sU3BhbiA6IHVuZGVmaW5lZH0+XHJcblx0XHRcdFx0e3RoaXMuZGF0YS5jb250ZW50fVxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==