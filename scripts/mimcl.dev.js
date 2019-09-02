(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mimbl"));
	else if(typeof define === 'function' && define.amd)
		define(["mimbl"], factory);
	else if(typeof exports === 'object')
		exports["mimcl"] = factory(require("mimbl"));
	else
		root["mimcl"] = factory(root["mimbl"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_mimbl__) {
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
    initialize(elmVN, propName, propVal) {
        this.elmVN = elmVN;
        this.add(propVal);
    }
    terminate() {
        this.remove();
        this.elmVN = undefined;
    }
    update(oldPropVal, newPropVal) {
        if (oldPropVal === newPropVal)
            return false;
        else {
            if (oldPropVal)
                this.remove();
            if (newPropVal)
                this.add(newPropVal);
            return true;
        }
    }
    add(propVal) {
        let elm = this.elmVN.Elm;
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
    initialize(elmVN, propName, propVal) {
        this.elmVN = elmVN;
        this.add(propVal);
    }
    terminate() {
        this.remove();
        this.elmVN = undefined;
    }
    update(oldPropVal, newPropVal) {
        if (oldPropVal === newPropVal)
            return false;
        else {
            if (oldPropVal)
                this.remove();
            if (newPropVal)
                this.add(newPropVal);
            return true;
        }
    }
    add(propVal) {
        let elm = this.elmVN.Elm;
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The DragDropCustomElmPropFactory class is a factory for the dragSource and dragTarget custom
// properties.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class DragDropCustomElmPropFactory {
    createHandler(propName) {
        return propName === "dragSource"
            ? new DragSourceCustomElmPropHandler()
            : new DragTargetCustomElmPropHandler;
    }
}
// Register custom property factory for dragSource and dragTarget properties
function registerDragDropCustomAttributes() {
    mim.registerCustomAttribute("dragSource", new DragDropCustomElmPropFactory());
    mim.registerCustomAttribute("dragTarget", new DragDropCustomElmPropFactory());
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
            this.site.scheduleCall(this.measureAndUpdate, true);
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
    componentWillMount() {
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
    componentDidMount() {
        // schedule the measuring functionality, which will determing whether we need to add/remove cells.
        this.site.scheduleCall(this.measureAndUpdate, true);
    }
    render() {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDdEQsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUMxRCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNkO0lBQ04sQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7QUMxZ0JELG1EIiwiZmlsZSI6Im1pbWNsLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1pbWJsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1pbWJsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNsXCJdID0gZmFjdG9yeShyb290W1wibWltYmxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltY2xUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnQW5kRHJvcERhdGEgc3RhdGljIGNsYXNzIGRlYWxzIHdpdGggZGF0YSBvZiBhcmJpdHJhcnkgdHlwZXMgYmVpbmcgdHJhbnNmZXJlZFxyXG4vLyBkdXJpbmcgZHJhZyAmIGRyb3Agb3BlcmF0aW9ucy4gV2hlbiBhIGRyYWcgb3BlcmF0aW9uIHN0YXJ0cywgcGllY2VzIG9mIGRhdGEgYXJlIGFkZGVkIHRvIGEgbWFwXHJcbi8vIHdpdGggdHlwZXMgKGZvcm1hdHMpIGFzIGtleXMgKHRoZXNlIGFyZSB0aGUgc2FtZSBmb3JtYXRzIHRoYXQgYXJlIGtlcHQgaW4gdGhlIEhUTUw1IERhdGFUcmFuc2ZlclxyXG4vLyBvYmplY3QuIERhdGEgaXMgYWRkZWQgdXNpbmcgdGhlIFNldE9iamVjdERhdGEgbWV0aG9kIG9mIHRoZSBJRHJhZ1N0YXJ0RXZlbnQgaW50ZXJmYWNlLiBXaGVuIHRoZVxyXG4vLyBkcm9wIG9jY3VycywgdGhlIEdldE9iamVjdERhdGEgb2YgdGhlIElEcmFnVGFyZ2V0RXZlbnQgaXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgZGF0YS4gVGhlIG1hcCBpc1xyXG4vLyBjbGVhcmVkIHdoZW4gdGhlIGRyYWcgb3BlcmF0aW9uIGVuZHMgLSByZWdhcmRsZXNzIHdoZXRoZXIgaXQgd2FzIHN1Y2Nlc3NmdWwgb3Igd2FzIGNhbmNlbGVkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyYWdBbmREcm9wRGF0YVxyXG57XHJcblx0cHVibGljIHN0YXRpYyBzZXRPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXR5cGUgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuc2V0KCB0eXBlLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0T2JqZWN0RGF0YSggdHlwZTogc3RyaW5nKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmdldCggdHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZU9iamVjdERhdGEoIHR5cGU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5kZWxldGUoIHR5cGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBjbGVhckFsbE9iamVjdERhdGEoKTogdm9pZFxyXG5cdHtcclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmNsZWFyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZSBpbiB0aGUgZ2l2ZW4gRGF0YVRyYW5zZmVyIG9iamVjdC5cclxuXHRwdWJsaWMgc3RhdGljIGhhc1R5cGUoIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLCB0eXBlOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBpbXBsZW1udHMgdHlwZXMgdmlhIERPTVN0cmluZ0xpc3QsIHdoY2loIGRvZXNuJ3QgaGF2ZSBpbmRleE9mXHJcblx0XHRpZiAoZGF0YVRyYW5zZmVyLnR5cGVzLmluZGV4T2YpXHJcblx0XHRcdHJldHVybiBkYXRhVHJhbnNmZXIudHlwZXMuaW5kZXhPZiggdHlwZSkgPj0gMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIChkYXRhVHJhbnNmZXIudHlwZXMgYXMgYW55IGFzIERPTVN0cmluZ0xpc3QpLmNvbnRhaW5zKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFwIG9mIG9iamVjdCBmb3JtYXRzIHRvIG9iamVjdCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZGF0YU1hcDogTWFwPHN0cmluZyxhbnk+ID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSUVtdWxEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgb2JqZWN0cyB0aGF0IGVtdWxhdGUgRGF0YVRyYW5zZmVyIG9iamVjdCB3aGVuXHJcbi8vIHRoZSBkcmFnIHNvdXJjZSBkb2VzIG5vdCBzdXBwb3J0IEhUTUw1IGRyYWcgYW5kIGRyb3AgbmF0aXZlbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRpbWFnZUVsbTogRWxlbWVudDtcclxuXHRpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsRGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlIGRvZXMgbm90XHJcbi8vIHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbXVsRGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyIGltcGxlbWVudHMgSUVtdWxEYXRhVHJhbnNmZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0fVxyXG5cclxuXHQvLyBVc2VzIHRoZSBnaXZlbiBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgZHJhZyBmZWVkYmFjaywgcmVwbGFjaW5nIGFueSBwcmV2aW91c2x5IHNwZWNpZmllZFxyXG5cdC8vIGZlZWRiYWNrLlxyXG5cdHB1YmxpYyBzZXREcmFnSW1hZ2UoIGltYWdlOiBFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmltYWdlRWxtID0gaW1hZ2U7XHJcblx0XHR0aGlzLmltYWdlRWxtWCA9IHg7XHJcblx0XHR0aGlzLmltYWdlRWxtWSA9IHk7XHJcblxyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IGhhdmUgc2V0RHJhZ0ltYWdlIG1ldGhvZCBpbiBpdHMgRGF0YVRyYW5zZmVyIGNsYXNzLlxyXG5cdFx0aWYgKHN1cGVyLnNldERyYWdJbWFnZSlcclxuXHRcdFx0c3VwZXIuc2V0RHJhZ0ltYWdlKCBpbWFnZSwgeCwgeSk7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBhIG5ldyBpbWFnZSBlbGVtZW50IHdhcyBzZXQsIHNvIHRoYXQgd2Ugd2lsbCBcInByZXBhcmVcIiBpdCBvbiB0aGUgbmV4dFxyXG5cdFx0Ly8gZHJhZyBzdGVwXHJcblx0XHR0aGlzLmlzSW1hZ2VFbG1SZXNldCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBlZmZlY3RBbGxvd2VkKCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmVmZmVjdEFsbG93ZWRFeCA9IHZhbDtcclxuXHRcdHN1cGVyLmVmZmVjdEFsbG93ZWQgPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0QWxsb3dlZCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RBbGxvd2VkRXggPT09IHVuZGVmaW5lZCA/IHN1cGVyLmVmZmVjdEFsbG93ZWQgOiB0aGlzLmVmZmVjdEFsbG93ZWRFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGRyb3BFZmZlY3QoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEV4ID0gdmFsO1xyXG5cdFx0c3VwZXIuZHJvcEVmZmVjdCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBkcm9wRWZmZWN0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BFZmZlY3RFeCA9PT0gdW5kZWZpbmVkID8gc3VwZXIuZHJvcEVmZmVjdCA6IHRoaXMuZHJvcEVmZmVjdEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXREYXRhKCBmb3JtYXQ6IHN0cmluZywgZGF0YTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN1cGVyLnNldERhdGEoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFNYXAuc2V0KCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSB0aGlzLmRhdGFNYXAuZ2V0KCBmb3JtYXQpO1xyXG5cdFx0cmV0dXJuIHMgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJEYXRhKCBmb3JtYXQ/OiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXJEYXRhKCBmb3JtYXQpO1xyXG5cclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdHB1YmxpYyBpbWFnZUVsbTogRWxlbWVudDtcclxuXHRwdWJsaWMgaW1hZ2VFbG1YOiBudW1iZXI7XHJcblx0cHVibGljIGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdHB1YmxpYyBpc0ltYWdlRWxtUmVzZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgYWxsb3dlZCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGFsbG93ZWQgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGVmZmVjdEFsbG93ZWRFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGRyb3AgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBkcm9wIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RXg6IHN0cmluZztcclxuXHJcblx0Ly8gTWFwIG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0byBkYXRhIGl0ZW1zLlxyXG5cdHByaXZhdGUgZGF0YU1hcDogTWFwPHN0cmluZyxzdHJpbmc+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykuIFRoaXMgYXJyYXkgY2hhbmdlcyBldmVyeSB0aW1lIGRhdGEgaXMgc2V0IG9yIGNsZWFyZWQuXHJcblx0cHJpdmF0ZSBkYXRhRm9ybWF0czogc3RyaW5nW107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyIGVtdWxhdGVzIHRoZSBiZWhhdmlvciBvZiBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW4gdGhlIGRyYWcgc291cmNlXHJcbi8vIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS4gVGhpcyBvYmplY3QgaXMgdXNlZCB1bmRlciBFZGdlLCB3aGljaCBkb2Vzbid0XHJcbi8vIGltcGxlbWVudCB0aGUgbmF0aXZlIERhdGFUcmFuc2ZlciBvYmplY3QgcHJvcGVybHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRW11bExlZ2FjeURhdGFUcmFuc2ZlciBleHRlbmRzIERhdGFUcmFuc2ZlciBpbXBsZW1lbnRzIElFbXVsRGF0YVRyYW5zZmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmRhdGFNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gW107XHJcblx0XHR0aGlzLm1faXRlbXMgPSBudWxsO1xyXG5cdFx0dGhpcy5tX2ZpbGVzID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIFVzZXMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdXBkYXRlIHRoZSBkcmFnIGZlZWRiYWNrLCByZXBsYWNpbmcgYW55IHByZXZpb3VzbHkgc3BlY2lmaWVkXHJcblx0Ly8gZmVlZGJhY2suXHJcblx0cHVibGljIHNldERyYWdJbWFnZSggaW1hZ2U6IEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBpbWFnZTtcclxuXHRcdHRoaXMuaW1hZ2VFbG1YID0geDtcclxuXHRcdHRoaXMuaW1hZ2VFbG1ZID0geTtcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGEgbmV3IGltYWdlIGVsZW1lbnQgd2FzIHNldCwgc28gdGhhdCB3ZSB3aWxsIFwicHJlcGFyZVwiIGl0IG9uIHRoZSBuZXh0XHJcblx0XHQvLyBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGVmZmVjdEFsbG93ZWQoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZWZmZWN0QWxsb3dlZEV4ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdEFsbG93ZWQoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0QWxsb3dlZEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZHJvcEVmZmVjdCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RXggPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZHJvcEVmZmVjdCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wRWZmZWN0RXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldERhdGEoIGZvcm1hdDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0dGhpcy5kYXRhTWFwLnNldCggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSggZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgczogc3RyaW5nID0gdGhpcy5kYXRhTWFwLmdldCggZm9ybWF0KTtcclxuXHRcdHJldHVybiBzID09PSB1bmRlZmluZWQgPyBcIlwiIDogcztcclxuXHR9XHJcblxyXG5cdGNsZWFyRGF0YSggZm9ybWF0Pzogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChmb3JtYXQpXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5kZWxldGUoIGZvcm1hdCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YU1hcC5jbGVhcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBBcnJheS5mcm9tKCB0aGlzLmRhdGFNYXAua2V5cygpKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGVzKCk6IHN0cmluZ1tdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YUZvcm1hdHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gICAgZ2V0IGZpbGVzKCk6IEZpbGVMaXN0IHsgcmV0dXJuIHRoaXMubV9maWxlczsgfVxyXG4gICAgZ2V0IGl0ZW1zKCk6IERhdGFUcmFuc2Zlckl0ZW1MaXN0IHsgcmV0dXJuIHRoaXMubV9pdGVtczsgfVxyXG5cclxuXHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0cHVibGljIGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdHB1YmxpYyBpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRwdWJsaWMgaW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGFsbG93ZWQgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBhbGxvd2VkIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBlZmZlY3RBbGxvd2VkRXg6IHN0cmluZztcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBkcm9wIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgZHJvcCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIE1hcCBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykgdG8gZGF0YSBpdGVtcy5cclxuXHRwcml2YXRlIGRhdGFNYXA6IE1hcDxzdHJpbmcsc3RyaW5nPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpLiBUaGlzIGFycmF5IGNoYW5nZXMgZXZlcnkgdGltZSBkYXRhIGlzIHNldCBvciBjbGVhcmVkLlxyXG5cdHByaXZhdGUgZGF0YUZvcm1hdHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHByaXZhdGUgbV9maWxlczogRmlsZUxpc3Q7XHJcbiAgICBwcml2YXRlIG1faXRlbXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BFZmZlY3QgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIGZvciBkaWZmZXJlbnQgZHJhZyAmIGRyb3AgZWZmZWN0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdEcm9wRWZmZWN0XHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnRHJvcEVmZmVjdCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBkcmFnICYgZHJvcCBlZmZlY3RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ0FsbG93ZWRFZmZlY3RzXHJcbntcclxuXHROb25lID0gXCJub25lXCIsXHJcblx0Q29weSA9IFwiY29weVwiLFxyXG5cdE1vdmUgPSBcIm1vdmVcIixcclxuXHRMaW5rID0gXCJsaW5rXCIsXHJcblx0Q29weU1vdmUgPSBcImNvcHlNb3ZlXCIsXHJcblx0Q29weUxpbmsgPSBcImNvcHlMaW5rXCIsXHJcblx0TGlua01vdmUgPSBcImxpbmtNb3ZlXCIsXHJcblx0QWxsID0gXCJhbGxcIixcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnU291cmNlRXZlbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGV2ZW50IGhhbmRsZXJzIG9uIHRoZVxyXG4vLyBkcmFnIHNvdXJjZSBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2VFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHJlYWRvbmx5IGRyYWdFdmVudDogRHJhZ0V2ZW50O1xyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXRFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZXZlbnQgaGFuZGxlcnMgb24gdGhlXHJcbi8vIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cmVhZG9ubHkgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZGF0YSB0eXBlIGlzIGF2YWlsYWJsZS5cclxuXHRoYXNUeXBlKCB0eXBlOiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZXJpZXZlcyBkYXRhIGZvciB0aGUgZ2l2ZW4gdHlwZS4gSWYgdGhlIHR5cGUgaXMgbm90IGF2YWlsYWJsZSwgcmV0dXJucyB1bmRlZmluZWQuXHJcblx0Z2V0RGF0YSggdHlwZTogc3RyaW5nKTogYW55O1xyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVyaWV2ZXMgYXJyYXkgb2YgZmlsZXMuIFJldHVybnMgdW5kZWZpbmVkIGlmIGZpbGVzIGFyZSBub3QgYmVpbmcgZHJhZ2dlZC4gVGhlIG9iamVjdHMgaW5cclxuXHQvLyB0aGUgcmV0dXJuZWQgYXJyYXkgYXJlIG9mIHR5cGUgV2ViS2l0RW50cnkgKHdlIGNhbm5vdCBzcGVjaWZ5IGl0IGFzIHN1Y2ggaGVyZSBiZWNhdXNlIHRoZVxyXG5cdC8vIGN1cnJlbnQgVHlwZXNjcmlwdCBpcyBkaXN0cmlidXRlZCB3aXRoIC5kLnRzIGxpYnJhcmllcyB0aGF0IGRvbid0IGRlZmluZSB0aGlzIHR5cGUuXHJcblx0Z2V0RmlsZXMoKTogYW55W107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcmFnIHNvdXJjZS4gSW1wbGVtZW50YXRpb25zIG9mXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdTb3VyY2UgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gRGF0YSB0byBiZVxyXG4vLyBwYXNzZWQgZHVyaW5nIHRoZSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBzdXBwbGllZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJhZ1N0YXJ0IGNhbGxiYWNrXHJcbi8vIGFuZCB1c2luZyB0aGUgZS5zZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTb3VyY2Vcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBzdGFydHMgZm9yIHRoZSBlbGVtZW50LlxyXG5cdG9uRHJhZ1N0YXJ0OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIGVuZHMuXHJcblx0b25EcmFnRW5kPzogKGU6IElEcmFnU291cmNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRyYWcgJiBkcm9wIG9wZXJhdGlvbiBpcyBpbiBwcm9ncmVzcy5cclxuXHRvbkRyYWc/OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnU291cmNlIGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyYWcgc291cmNlLiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1NvdXJjZSBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBEYXRhIHRvXHJcbi8vIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIHN1cHBsaWVkIGRpcmVjdGx5IHZpYSB0aGUgZGF0YSBwcm9wZXJ0eS4gVGhpc1xyXG4vLyBpbnRlcmZhY2UgYWxsb3dzIHNpbXBsaWZ5aW5nIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIHdpdGhvdXQgdGhlIG5lZWQgdG8gaW1wbGVtZW50IGFueVxyXG4vLyBjYWxsYmFja3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVEcmFnU291cmNlXHJcbntcclxuXHQvLyBPYmplY3QgaG9sZGluZyBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgZHJhZyBvcGVyYXRpb24uIEVhY2ggcGllY2Ugb2YgZGF0YSBpcyBpZGVudGlmaWVkIGJ5XHJcblx0Ly8gYSB1bmlxdWUgdHlwZSAoYWthIGZvcm1hdCkgc3RyaW5nLlxyXG5cdGRhdGE6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cclxuXHQvLyBBbGxvd2VkIGRyb3AgZWZmZWN0cy4gSWYgZGVmaW5lZCwgdGhpcyBtZW1iZXIgaXMgdXNlZCBvbmx5IGlmIGVpdGhlciB0aGUgb25EcmFnU3RhcnRcclxuXHQvLyBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCBvciBpdCBkb2Vzbid0IHNldCBhbGxvd2VkIGRyb3AgZWZmZWN0cy5cclxuXHRhbGxvd2VkRWZmZWN0cz86IERyYWdBbGxvd2VkRWZmZWN0cztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRHJhZyBzb3VyY2UgcHJvcGVydHkgKGRyYWdTb3VyY2UpIGNhbiBoYXZlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHNoYXBlczpcclxuLy9cdC0gSURyYWdTb3VyY2UgaW50ZXJmYWNlIC0gZHJhZyBiZWhhdmlvciBhbmQgZGF0YSB0byBiZSBwYXNzZWQgd2l0aCBpdCBpcyBkZXRlcm1pbmVkXHJcbi8vXHRcdGJ5IGltcGxlbWVudGluZyB0aGUgcmVsZXZhbnQgY2FsbGJhY2tzLlxyXG4vL1x0LSBJU2ltcGxlRHJhZ1NvdXJjZSBpbnRlcmZhY2UgLSBkYXRhIHRvIGJlIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzXHJcbi8vXHRcdGRlZmluZWQgYnkgdGhlIGRhdGEgcHJvcGVydHkuXHJcbi8vXHQtIFwiZWxtLXRleHRcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnRcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIFwiZWxtLWh0bWxcIiBzdHJpbmcgLSB0aGUgRWxlbWVudCBvYmplY3QgaXMgdXNlZCBhcyBvYmplY3QgZGF0YSBhbmQgdGhlIGVsZW1lbnQncyBvdXRlckhUTUxcclxuLy9cdFx0aXMgdXNlZCBhcyB0ZXh0IGRhdGEuXHJcbi8vXHQtIHRydWUgLSBlcXVpdmFsZW50IHRvIFwiZWxtLWh0bWxcIiBzdHJpbmcuXHJcbi8vXHQtIGZhbHNlIC0gZHJhZyBiZWhhdmlvciBpcyBzdXBwcmVzc2VkLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgRHJhZ1NvdXJjZVByb3BUeXBlID0gSURyYWdTb3VyY2UgfCBJU2ltcGxlRHJhZ1NvdXJjZSB8IGJvb2xlYW4gfCBcImVsbS10ZXh0XCIgfCBcImVsbS1odG1sXCI7XHJcblxyXG5cclxuXHJcbi8vIFN0cmluZyB1c2VkIGFzIGEgdHlwZSAoYWthIGZvcm1hdCkgd2hlbiBhbiBlbGVtZW50IG9iamVjdCBpcyBiZWluZyBkcmFnZ2VkLlxyXG5leHBvcnQgY29uc3QgRE5EVFlQRV9FTEVNRU5UID0gXCJhcHBsaWNhdGlvbi9ET01FbGVtZW50XCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdUYXJnZXQgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJvcCB0YXJnZXQuIEltcGxlbWVudGF0aW9ucyBvZlxyXG4vLyB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnVGFyZ2V0IGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIFJlY2VpdmluZ1xyXG4vLyBkYXRhIGlzIGFjY29tcGxpc2hlZCBieSBpbXBsZW1lbnRpbmcgdGhlIG9uRHJvcCBjYWxsYmFjayBhbmQgY2FsbGluZyB0aGUgZS5nZXREYXRhIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdUYXJnZXRcclxue1xyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBlbnRlcnMgdGhlIGVsZW1lbnQgYm91bmRhcnkgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBJZiB0aGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlLCB0aGUgb25EcmFnT3ZlclxyXG5cdC8vIGFuZCBvbkRyYWdMZWF2ZSBtZXRob2RzIHdpbGwgbm90IGJlIGNhbGxlZC5cclxuXHRvbkRyYWdFbnRlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgaG92ZXJzIG92ZXIgdGhlIGVsZW1lbnQgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLiBSZXR1cm5zIHRydWUgaWYgZHJvcCBpcyBwb3NzaWJsZSBhbmQgZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGlzIG1ldGhvZCBpcyBub3RcclxuXHQvLyBpbXBsZW1lbnRlZCwgZHJvcCBpcyBjb25zaWRlcmVkIHBvc3NpYmxlLiBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBtZXRob2QgcmV0dXJucyB0cnVlIG9yXHJcblx0Ly8gZmFsc2UsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCB3aWxsIGJlIGNvbnRpbnVlZCB0byBiZSBjYWxsZWQgYXMgdGhlIG1vdXNlIG1vdmVzLiBUaGlzIGFsbG93c1xyXG5cdC8vIHNvbWUgcGFydHMgb2YgdGhlIGVsZW1lbnQgdG8gYmUgZHJvcCB0YXJnZXRzIHdoaWxlIG90aGVycyBub3QuXHJcblx0b25EcmFnT3Zlcj86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiBib29sZWFuO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBjdXJzb3IgbGVhdmVzIHRoZSBlbGVtZW50IGJvdW5kYXJ5IGR1cmluZyBkcmFnICYgZHJvcFxyXG5cdC8vIG9wZXJhdGlvbi5cclxuXHRvbkRyYWdMZWF2ZT86IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkYXRhIHdhcyBkcm9wZWQgaW4gdGhpcyBkcm9wIHpvbmUuXHJcblx0b25Ecm9wOiAoZTogSURyYWdUYXJnZXRFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElTaW1wbGVEcmFnVGFyZ2V0IGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyb3AgdGFyZ2V0LiBJbXBsZW1lbnRhdGlvbnNcclxuLy8gb2YgdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1RhcmdldCBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBSZWNlaXZpbmdcclxuLy8gZGF0YSBpcyBhY2NvbXBsaXNoZWQgYnkgc3BlY2lmeWluZyB0aGUgZXhwZWN0ZWQgdHlwZXMgdmlhIHRoZSBkYXRhVHlwZXMgcHJvcGVydHkgYW5kXHJcbi8vIGltcGxlbWVudGluZyB0aGUgb25EYXRhRHJvcHBlZCBjYWxsYmFjay5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZURyYWdUYXJnZXRcclxue1xyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0aGF0IHRoZSBkcmFnIHRhcmdldCBjYW4gcmVjZWl2ZS5cclxuXHRkYXRhVHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuXHQvLyBTdHlsZSB0byBhcHBseSBmb3IgZHJhZyBmZWVkYmFjay5cclxuXHRmZWVkYmFjaz86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgZGF0YSBjb250YWluaW5nIG9uZSBvciBtb3JlIGFwcHJvcHJpYXRlIHR5cGVzIGlzIGRyb3BwZWQuXHJcblx0Ly8gVGhlIGRhdGEgaXMgZGVsaXZlcmVkIGFzIGFuIG9iamVjdCB3aGVyZSBwcm9wZXJ0eSBuYW1lcyBhcmUgZGF0YSB0eXBlcyBhbmQgdmFsdWVzIGFyZVxyXG5cdC8vIGRhdGEgcGllY2VzIG9mIHRoZXNlIHR5cGVzLlxyXG5cdG9uRGF0YURyb3BwZWQ6IChkYXRhOiB7W3R5cGU6IHN0cmluZ106IGFueX0pID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRHJhZyB0YXJnZXQgcHJvcGVydHkgKGRyYWdUYXJnZXQpIGNhbiBiZSBlaXRoZXIgSURyYWdUYXJnZXQgaW50ZXJmYWNlIG9yIHJlZmVyZW5jZSB0byBhblxyXG4vLyBFbGVtZW50LiBJbiB0aGUgbGF0dGVyIGNhc2UsIHRoZSByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBpcyBhblxyXG4vLyBFbGVtZW50IG9iamVjdC5cclxuZXhwb3J0IHR5cGUgRHJhZ1RhcmdldFByb3BUeXBlID0gSURyYWdUYXJnZXQgfCBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJtaW1ibC9kaXN0L2NvcmUvbWltXCJcclxue1xyXG5cdGludGVyZmFjZSBJRWxlbWVudFByb3BzPFRSZWYsVENoaWxkcmVuPlxyXG5cdHtcclxuXHRcdGRyYWdTb3VyY2U/OiBEcmFnU291cmNlUHJvcFR5cGU7XHJcblx0XHRkcmFnVGFyZ2V0PzogRHJhZ1RhcmdldFByb3BUeXBlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnU291cmNlSGFuZGxlciwgRHJhZ1NvdXJjZUVtdWxhdG9yfSBmcm9tIFwiLi9EcmFnU291cmNlXCJcclxuaW1wb3J0IHtEcmFnVGFyZ2V0SGFuZGxlcn0gZnJvbSBcIi4vRHJhZ1RhcmdldFwiXHJcbmltcG9ydCB7IERyYWdTb3VyY2VQcm9wVHlwZSwgRHJhZ1RhcmdldFByb3BUeXBlIH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1NvdXJjZVByb3BUeXBlPlxyXG57XHJcblx0cHVibGljIGluaXRpYWxpemUoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cdFx0dGhpcy5lbG1WTiA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHVwZGF0ZSggb2xkUHJvcFZhbDogRHJhZ1NvdXJjZVByb3BUeXBlLCBuZXdQcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFByb3BWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdTb3VyY2VQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5FbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyID0gXCJvd25lclNWR0VsZW1lbnRcIiBpbiBlbG1cclxuXHRcdFx0XHRcdD8gbmV3IERyYWdTb3VyY2VFbXVsYXRvciggZWxtLCBwcm9wVmFsKVxyXG5cdFx0XHRcdFx0OiBuZXcgRHJhZ1NvdXJjZUhhbmRsZXIoIGVsbSwgcHJvcFZhbCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnU291cmNlSGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IGhhbmRsZXMgZHJhZyBzb3VyY2Ugb3BlcnRpb25zLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZUhhbmRsZXI6IERyYWdTb3VyY2VIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyIGNsYXNzIGlzIGEgaGFuZGxlciBmb3IgdGhlIGRyYWdTb3VyY2UgY3VzdG9tIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyIGltcGxlbWVudHMgbWltLklDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPERyYWdUYXJnZXRQcm9wVHlwZT5cclxue1xyXG5cdHB1YmxpYyBpbml0aWFsaXplKCBlbG1WTjogbWltLklFbG1WTiwgcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtVk4gPSBlbG1WTjtcclxuXHRcdHRoaXMuYWRkKCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm1pbmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZWxtVk4gPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoIG9sZFByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSwgbmV3UHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLmFkZCggbmV3UHJvcFZhbCBhcyBEcmFnVGFyZ2V0UHJvcFR5cGUpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgYWRkKCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGVsbSA9IHRoaXMuZWxtVk4uRWxtIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlciA9IG5ldyBEcmFnVGFyZ2V0SGFuZGxlciggZWxtLCBwcm9wVmFsKTtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIuaW5pdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHJlbW92ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIudGVybSgpO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFZW1lbnQgbm9kZSBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZC5cclxuXHRwcml2YXRlIGVsbVZOOiBtaW0uSUVsbVZOO1xyXG5cclxuXHQvLyBPYmplY3QgdGhhdCBoYW5kbGVzIGRyYWcgdGFyZ2V0IG9wZXJ0aW9ucy5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRIYW5kbGVyOiBEcmFnVGFyZ2V0SGFuZGxlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wQ3VzdG9tRWxtUHJvcEZhY3RvcnkgY2xhc3MgaXMgYSBmYWN0b3J5IGZvciB0aGUgZHJhZ1NvdXJjZSBhbmQgZHJhZ1RhcmdldCBjdXN0b21cclxuLy8gcHJvcGVydGllcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdEcm9wQ3VzdG9tRWxtUHJvcEZhY3RvcnkgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUZhY3Rvcnk8RHJhZ1NvdXJjZVByb3BUeXBlIHwgRHJhZ1RhcmdldFByb3BUeXBlPlxyXG57XHJcblx0cHVibGljIGNyZWF0ZUhhbmRsZXIoIHByb3BOYW1lOiBzdHJpbmcpOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1NvdXJjZVByb3BUeXBlIHwgRHJhZ1RhcmdldFByb3BUeXBlPlxyXG5cdHtcclxuXHRcdHJldHVybiBwcm9wTmFtZSA9PT0gXCJkcmFnU291cmNlXCJcclxuXHRcdFx0PyBuZXcgRHJhZ1NvdXJjZUN1c3RvbUVsbVByb3BIYW5kbGVyKClcclxuXHRcdFx0OiBuZXcgRHJhZ1RhcmdldEN1c3RvbUVsbVByb3BIYW5kbGVyO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWdpc3RlciBjdXN0b20gcHJvcGVydHkgZmFjdG9yeSBmb3IgZHJhZ1NvdXJjZSBhbmQgZHJhZ1RhcmdldCBwcm9wZXJ0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpXHJcbntcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1NvdXJjZVwiLCBuZXcgRHJhZ0Ryb3BDdXN0b21FbG1Qcm9wRmFjdG9yeSgpKTtcclxuXHRtaW0ucmVnaXN0ZXJDdXN0b21BdHRyaWJ1dGUoIFwiZHJhZ1RhcmdldFwiLCBuZXcgRHJhZ0Ryb3BDdXN0b21FbG1Qcm9wRmFjdG9yeSgpKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnQWxsb3dlZEVmZmVjdHMsIERyYWdTb3VyY2VQcm9wVHlwZSwgSURyYWdTb3VyY2UsIElTaW1wbGVEcmFnU291cmNlLCBJRHJhZ1NvdXJjZUV2ZW50LCBETkRUWVBFX0VMRU1FTlR9IGZyb20gXCIuL0RyYWdEcm9wQXBpXCI7XHJcbmltcG9ydCB7RHJhZ0FuZERyb3BEYXRhLCBJRW11bERhdGFUcmFuc2ZlciwgRW11bERhdGFUcmFuc2ZlciwgRW11bExlZ2FjeURhdGFUcmFuc2Zlcn0gZnJvbSBcIi4vRGF0YVRyYW5zZmVyXCI7XHJcblxyXG5cclxuXHJcbnR5cGUgRHJhZ0V2ZW50VHlwZSA9IFwiZHJhZ1wiIHwgXCJkcmFnZW5kXCIgfCBcImRyYWdlbnRlclwiIHwgXCJkcmFnZXhpdFwiIHwgXCJkcmFnbGVhdmVcIiB8IFwiZHJhZ292ZXJcIiB8IFwiZHJhZ3N0YXJ0XCIgfCBcImRyb3BcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU3RhcnRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgc291cmNlIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1NvdXJjZUV2ZW50IGltcGxlbWVudHMgSURyYWdTb3VyY2VFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBkYXRhIHdpdGggdGhlIGdpdmVuIHR5cGUuIEZvciB0ZXh0IGRhdGEgdGhlIHR5cGUgc2hvdWxkIGJlIG9uZSBvZiBNSU1FIHR5cGVzLlxyXG5cdHNldERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggdHlwZSwgZGF0YSk7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoIHR5cGUsIFwiXCIpO1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuc2V0T2JqZWN0RGF0YSggdHlwZSwgZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlQmVoYXZpb3IgZW51bWVyYXRpb24gcHJvdmlkZXMgdmFsdWVzIHRoYXQgZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbiBtZWNoYW5pc21zXHJcbi8vIHNldHVwIGJ5IGRpZmZlcmVudCB0eXBlcyBvZiB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIERyYWdTb3VyY2VCZWhhdmlvclxyXG57XHJcblx0UmVndWxhciA9IDEsXHJcblx0U2ltcGxlLFxyXG5cdEVsbVRleHQsXHJcblx0RWxtSHRtbFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1NvdXJjZUhhbmRsZXIgY2xhc3MgaW1wbGVtZW50cyBzdXBwb3J0IGZvciBIVE1MNSBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5LiBJdFxyXG4vLyBpcyB1c2VkIGJ5IEhUTUwgZWxlbWVudHMgdGhhdCBuYXRpdmVseSBzdXBwb3J0IGRyYWcgYW5kIGRyb3AgZXZlbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdTb3VyY2VIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnU291cmNlUHJvcDogRHJhZ1NvdXJjZVByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtID0gZWxtO1xyXG5cclxuXHRcdGlmIChkcmFnU291cmNlUHJvcCA9PT0gXCJlbG0tdGV4dFwiKVxyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQ7XHJcblx0XHRlbHNlIGlmIChkcmFnU291cmNlUHJvcCA9PT0gXCJlbG0taHRtbFwiIHx8IGRyYWdTb3VyY2VQcm9wID09PSB0cnVlKVxyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWw7XHJcblx0XHRlbHNlIGlmICgoZHJhZ1NvdXJjZVByb3AgYXMgSVNpbXBsZURyYWdTb3VyY2UpLmRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5iZWhhdmlvciA9IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGU7XHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1NvdXJjZSA9IGRyYWdTb3VyY2VQcm9wIGFzIElTaW1wbGVEcmFnU291cmNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoKGRyYWdTb3VyY2VQcm9wIGFzIElEcmFnU291cmNlKS5vbkRyYWdTdGFydCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLlJlZ3VsYXI7XHJcblx0XHRcdHRoaXMuZHJhZ1NvdXJjZSA9IGRyYWdTb3VyY2VQcm9wIGFzIElEcmFnU291cmNlO1xyXG5cdFx0fVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJJbnZhbGlkIHZhbHVlIG9mIGRyYWdTb3VyY2VQcm9wIGluIERyYWdTb3VyY2VIYW5kbGVyIGNvbnN0cnVjdG9yLlwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgbWFraW5nIHRoZSBlbGVtZW50IGRyYWdnYWJsZSBieSBhZGRpbmcgZHJhZyBldmVudHMuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50ID0gbmV3IERyYWdTb3VyY2VFdmVudCgpO1xyXG5cdFx0dGhpcy5lbG0uc2V0QXR0cmlidXRlKCBcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGRyYWcgZXZlbnQgaGFuZGxlcnMgZnJvbSB0aGUgZWxlbWVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnc3RhcnRcIiwgdGhpcy5vbkRyYWdTdGFydCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdlbmRcIiwgdGhpcy5vbkRyYWdFbmQpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnXCIsIHRoaXMub25EcmFnKTtcclxuXHJcblx0XHR0aGlzLmVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIpO1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXIgZm9yIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdTdGFydCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGRhdGEgbWFwIC0ganVzdCBpbiBjYXNlXHJcblx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuU2ltcGxlKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBkYXRhVHlwZSBpbiB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YSlcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBkYXRhVHlwZSwgdGhpcy5zaW1wbGVEcmFnU291cmNlLmRhdGFbZGF0YVR5cGVdKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5zaW1wbGVEcmFnU291cmNlLmFsbG93ZWRFZmZlY3RzO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiBvbkRyYWdTdGFydCBtZXRob2QgaXMgZGVmaW5lZCwgaW52b2tlIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydClcclxuXHRcdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdTdGFydCggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggRE5EVFlQRV9FTEVNRU5ULCB0aGlzLmVsbSk7XHJcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1UZXh0KVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5FbG1IdG1sKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIFwidGV4dC9wbGFpblwiLCB0aGlzLmVsbS5vdXRlckhUTUwpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnZW5kIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWdFbmQgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yICE9PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2Uub25EcmFnRW5kKCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZpbmFsbHlcclxuXHRcdHtcclxuXHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnIGV2ZW50XHJcblx0cHJpdmF0ZSBvbkRyYWcgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmJlaGF2aW9yID09PSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWcoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLy8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHdlIG5lZWQgdG8gaW1wbGVtZW50IGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3I7IHRoYXQgaXMsIHdlIHNob3VsZFxyXG5cdC8vLy8gcGFzcyB0aGUgZWxlbWVudCBvYmplY3QgYXMgZGF0YSBiZWluZyBkcmFnZ2VkLiBOb3RlIHRoYXQgZWl0aGVyIHRoaXMgZmxhZyBpcyB0cnVlIG9yXHJcblx0Ly8vLyB0aGUgZHJhZ1NvdXJjZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdC8vcHVibGljIGRlZmF1bHREcmFnU291cmNlQmVoYXZpb3JFbmFibGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBUeXBlIG9mIGRyYWcgc291cmNlIG1lY2hhbmlzbSBkZXRlcm1pbmVkIGJ5IHRoZSBkcmFnU291cmNlIHByb3BlcnR5XHJcblx0cHJvdGVjdGVkIGJlaGF2aW9yOiBEcmFnU291cmNlQmVoYXZpb3I7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIGRyYWdTb3VyY2U6IElEcmFnU291cmNlO1xyXG5cclxuXHQvLyBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgc291cmNlLiBUaGlzIHByb3BlcnR5IGNhbiBiZVxyXG5cdC8vIHVuZGVmaW5lZCBpZiBlaXRoZXIgd2UgYXJlIGltcGxlbWVudGluZyBhIGRlZmF1bHQgZHJhZyBzb3VyY2UgYmVoYXZpb3IuXHJcblx0cHJpdmF0ZSBzaW1wbGVEcmFnU291cmNlOiBJU2ltcGxlRHJhZ1NvdXJjZTtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHNvdXJjZSBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZUV2ZW50OiBEcmFnU291cmNlRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlRW11bGF0b3IgY2xhc3MgZW11bGF0ZXMgc3VwcG9ydCBmb3IgRHJhZyBhbmQgRHJvcCBzb3VyY2UgZnVuY3Rpb25hbGl0eSB2aWEgbW91c2VcclxuLy8gZXZlbnRzLiBJdCBpcyB1c2VkIGZvciBET00gZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIG5hdGl2ZSBkcmFnIGFuZCBkcm9wIHN1cG9ydCAtIGUuZy4gU1ZHLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIERyYWdTb3VyY2VFbXVsYXRvciBleHRlbmRzIERyYWdTb3VyY2VIYW5kbGVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggZWxtOiBFbGVtZW50LCBkcmFnU291cmNlOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGVsbSwgZHJhZ1NvdXJjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBvYmplY3QgYnkgYWRkaW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyBpbml0KClcclxuXHR7XHJcblx0XHRzdXBlci5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRlcm1pbmF0ZXMgdGhlIG9iamVjdCBieSByZW1vdmluZyBhIG1vdXNlZG93biBldmVudC5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0c3VwZXIudGVybSgpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1lbWJlciB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlLWRvd24gZXZlbnQgYW5kIHN0YXJ0IHdhdGNoaW5nIG1vdXNlIG1vdmVtZW50XHJcblx0Ly8oYW5kIG90aGVyKSBldmVudHMuXHJcblx0cHJpdmF0ZSBvbk1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdC8vIGlnbm9yZSBub24tcHJpbWFyeSBtb3VzZSBidXR0b25zXHJcblx0XHRpZiAoZS5idXR0b24gIT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly8gcmVtZW1lYmVyIGNvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50XHJcblx0XHR0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XHJcblx0XHR0aGlzLm1vdXNlRG93blkgPSBlLmNsaWVudFk7XHJcblxyXG5cdFx0Ly8gc3RhcnQgbGlzdGVuaW5nIHRvIHNldmVyYWwgRG5EIHJlbGF0ZWQgZXZlbnRzIG9uIHRoZSBkb2N1bWVudC5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBFaXRoZXIgc3RhcnQgb3IgY29udGludWUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gcHJpbWFyeSBidXR0b24gbXVzdCBiZSBzdGlsbCBwcmVzc2VkXHJcblx0XHRpZiAoKGUuYnV0dG9ucyAmIDEpID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbmVlZCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIC0gb3RoZXJ3aXNlIHRleHQgd2lsbCBiZSBzZWxlY3RlZCBvbiB0aGUgcGFnZS5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyBpZiBEbkQgb3BlcmF0aW9uIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MgZmlyZSBldmVudHM7IG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB0aGVcclxuXHRcdC8vIG1vdXNlIG1vdmVkIGVub3VnaCB0byBzdGFydCB0aGUgb3BlcmF0aW9uLlxyXG5cdFx0aWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN4ID0gZS5jbGllbnRYIC0gdGhpcy5tb3VzZURvd25YO1xyXG5cdFx0XHRsZXQgY3kgPSBlLmNsaWVudFkgLSB0aGlzLm1vdXNlRG93blk7XHJcblx0XHRcdGlmIChjeCA+PSAtMiAmJiBjeCA8PSAyICYmIGN5ID49IC0yICYmIGN5IDw9IDIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFxyXG5cdFx0XHR0aGlzLmluaXRpYXRlRHJhZ09wZXJhdGlvbiggZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBvbk1vdXNlVXAgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJvcCggZSk7XHJcblxyXG5cdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VscyBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIEVzY2FwZSAtIGNhbmNlbCBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvblxyXG5cdFx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5jYW5jZWxEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHJcblx0XHRcdHRoaXMuY2xlYW51cERyYWdPcGVyYXRpb24oKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZW11bERhdGFUcmFuc2ZlciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUtleUV2ZW50KCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5dXAgZXZlbnRzXHJcblx0cHJpdmF0ZSBvbktleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhdGVzIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBpbml0aWF0ZURyYWdPcGVyYXRpb24oIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKFwic2V0RHJhZ0ltYWdlXCIgaW4gRGF0YVRyYW5zZmVyLnByb3RvdHlwZSlcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxEYXRhVHJhbnNmZXIoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gbmV3IEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ1N0YXJ0IGV2ZW50IC0gaWYgdGhlIGRlZmF1bHQgYWN0aW9uIGlzIHByZXZlbnRlZCwgd2UgY2FuY2VsIHRoZSBvcGVyYXRpb25cclxuXHRcdGxldCBkcmFnc3RhcnRFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnc3RhcnRcIik7XHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCBkcmFnc3RhcnRFdmVudCk7XHJcblx0XHRpZiAoZHJhZ3N0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRyYWcgc291cmNlIGRpZG4ndCBzZXQgYW4gZWxlbWVudCBmb3IgZHJhZyBpbWFnZSwgdXNlIHRoZSBlbGVtZW50IGl0c2VsZi5cclxuXHRcdGlmICghdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2FsY3VsdGUgZHJhZyBpbWFnZSBjb29yZGluYXRlcyBzbyB0aGF0IGluaXRpYWxseSB0aGUgZHJhZyBpbWFnZSBjb2luc2lkZXMgd2l0aFxyXG5cdFx0XHQvLyB0aGUgb3JpZ2luYWwgaW1hZ2VcclxuXHRcdFx0bGV0IHJjOiBDbGllbnRSZWN0ID0gdGhpcy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoIHRoaXMuZWxtLCBlLmNsaWVudFggLSByYy5sZWZ0LCBlLmNsaWVudFkgLSByYy50b3ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgd2UgZG9uJ3Qga25vdyBsYXN0IHRhcmdldCB5ZXRcclxuXHRcdHRoaXMubGFzdFRhcmdldCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gcGVyZm9ybSBhIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5oYW5kbGVEcmFnU3RlcCggZSk7XHJcblx0fTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZSBvbmUgc3RlcCBvZiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiwgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIG1vdXNlIG1vdmVzXHJcblx0cHJpdmF0ZSBoYW5kbGVEcmFnU3RlcCggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlSW1hZ2VFbGVtZW50KCk7XHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pc0ltYWdlRWxtUmVzZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBiZWZvcmUgc2VuZGluZyBkcmFnb3ZlciBldmVudCB3ZSBzZXQgdGhlIGRyb3BFZmZlY3QgdG8gbm9uZSwgYW5kIHRoZSBkcm9wb3ZlciBoYW5kbGVyXHJcblx0XHQvLyBjb3VsZCBzZXQgaXQgdG8gc29tZXRoaW5nIGVsc2UgaWYgZGVzaXJlZFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHQvLyBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pIHRoaXMuaW1hZ2VFbG0uaGlkZGVuID0gdHJ1ZTtcclxuXHRcdGxldCBuZXdUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdGlmIChuZXdUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGFyZSBvbiB0aGUgc2FtZSB0YXJnZXQgYXMgdGhlIHByZXZpb3VzIG1vdXNlIG1vdmUsIGp1c3Qgc2VuZCBkcmFnb3ZlciAoaWZcclxuXHRcdFx0Ly8gdGhlIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKG5ld1RhcmdldCA9PT0gdGhpcy5sYXN0VGFyZ2V0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gc2VuZCBkcmFnZW50ZXIgdG8gdGhlIG5ldyB0YXJnZXQgYW5kIGRldGVybWluZSB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcFxyXG5cdFx0XHRcdC8vIHpvbmVcclxuXHRcdFx0XHRsZXQgZHJhZ2VudGVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ2VudGVyXCIpO1xyXG5cdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnZW50ZXJFdmVudCk7XHJcblx0XHRcdFx0bGV0IGlzTmV3VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuID0gZHJhZ2VudGVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHJcblx0XHRcdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0XHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHRhcmdldCBhbmQgd2hldGhlciBpdCBpcyBhIHZhbGlkIGRyb3Agem9uZVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldCA9IG5ld1RhcmdldDtcclxuXHRcdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBpc05ld1RhcmdldERyb3BwYWJsZTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgb3VyIG5ldyB0YXJnZXQgaXMgZHJvcHBhYmFsZSwgc2VuZCBkcmFnb3ZlciB0byBpdFxyXG5cdFx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0XHRcdG5ld1RhcmdldC5kaXNwYXRjaEV2ZW50KCBkcmFnb3ZlckV2ZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHdlIGRvbnQgaGF2ZSBuZXcgdGFyZ2V0IGJ1dCBoYXZlIGxhc3Qgb25lIHRhcmdldCwgc2VuZCBkcmFnbGVhdmUgdG8gdGhlIGxhc3Qgb25lXHJcblx0XHRcdC8vIChpZiB0aGUgbGFzdCB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUpXHJcblx0XHRcdGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ1wiKSk7XHJcblxyXG5cdFx0Ly8gbW92ZSB0aGUgZHJhZyBpbWFnZSBlbGVtZW50IHRvIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYIC0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5zdHlsZS50b3AgPSBlLmNsaWVudFkgLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRpZiAodGhpcy5kcm9wRWZmZWN0RWxtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdHRoaXMuc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0KTtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmxlZnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgMTIgKyBcInB4XCI7XHJcblx0XHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS50b3AgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICsgMCArIFwicHhcIjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBsYXN0IG1vdXNlIGV2ZW50IC0gd2UgbWF5IHVzZSBpdCB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMgaWYgd2UgbmVlZCB0b1xyXG5cdFx0Ly8gZGlzcGF0Y2ggZHJhZyBldmVudHMgdXBvbiBrZXlib2FyZCBldmVudHMgKGUuZy4gY2FuY2VsIG9wZXJhdGlvbiB3aGVuIEVzY2FwZSBpcyBwcmVzc2VkXHJcblx0XHQvLyBvciBkcmFnb3ZlciBldmVudCBpZiBDdHJsLCBBbHQgb3IgU2hpZnQgYnV0dG9ucyBhcmUgcHJlc3NlZCkuXHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gZTtcclxufTtcclxuXHRcclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIGR1cmluZyBkcmFnIG9wZXJhdGlvbiBieSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50LlxyXG5cdHByaXZhdGUgaGFuZGxlS2V5RXZlbnQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5sYXN0VGFyZ2V0ICYmIHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ292ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnb3ZlclwiKTtcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0Ly8gc2VuZCBkcmFnIGV2ZW50IHRvIG91ciBzb3VyY2VcclxuXHRcdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBpbWFnZSBiYXNlZCBvbiB0aGUgbGF0ZXN0IGZlZWRiYWNrXHJcblx0XHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZHJvcEVmZmVjdDogc3RyaW5nID0gdGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA/IHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0IDogXCJub25lXCI7XHJcblx0XHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBUYWtlcyB0aGUgaW1hZ2UgZWxlbWVudCAoaWYgYW55KSBzcGVjaWZpZWQgdmlhIHRoZSBjYWxsIHRvIHNldERyYWdJbWFnZSBhbmQgY2xvbmVzIGl0IGludG9cclxuXHQvLyBhIHNwZWNpYWwgZGl2IHRoYXQgd2lsbCBiZSBzaG93biBkdXJpbmcgdGhlIGRyYWcgb3BlcmF0aW9uXHJcblx0cHJpdmF0ZSBwcmVwYXJlSW1hZ2VFbGVtZW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHByZXZpb3VzIGltYWdlIGVsZW1lbnQsIHJlbW92ZSBpdCBub3dcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID09IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3JnRWxtOiBFbGVtZW50ID0gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtO1xyXG5cdFx0aWYgKCFvcmdFbG0pXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCwgd2hpY2ggd2lsbCB3cmFwIHRoZSBpbWFnZSBlbGVtZW50IGFuZCB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG5cdFx0Ly8gZG9jdW1lbnQgYm9keSB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGxldCBkaXZFbG06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblxyXG5cdFx0Ly8gY2xvbmUgdGhlIG9yaWdpbmFsIGVsZW1lbnQgYmVjYXVzZSB3ZSBhcmUgZ29pbmcgdG8gbW92ZSBpdCBhcm91bmQuXHJcblx0XHRsZXQgY2xvbmVkRWxtOiBFbGVtZW50ID0gb3JnRWxtLmNsb25lTm9kZSgpIGFzIEVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGltYWdlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgaXMgYW4gU1ZHIGVsZW1lbnQgYnV0IG5vdCB0aGUgPHN2Zz4gZWxlbWVudFxyXG5cdFx0Ly8gaXRzZWxmLCB0aGVuIHdyYXAgaXQgaW4gYW4gPHN2Zz4gZWxlbWVudC5cclxuXHRcdGlmIChtaW0uaXNTdmcoIG9yZ0VsbSkgJiYgIW1pbS5pc1N2Z1N2Zyggb3JnRWxtKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN2Z0VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuXHRcdFx0c3ZnRWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cdFx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHN2Z0VsbSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggY2xvbmVkRWxtKTtcclxuXHJcblx0XHQvLyBzdHlsZSB0aGUgZGl2IGVsZW1lbnQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbmluZyBhbmQgc29tZSBvcGFjaXR5XHJcblx0XHRkaXZFbG0uc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcblx0XHRkaXZFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblxyXG5cdFx0Ly8gYWRkIGEgc3BhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIFwiZHJvcEVmZmVjdFwiIGltYWdlXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNwYW5cIik7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblx0XHRkaXZFbG0uYXBwZW5kQ2hpbGQoIHRoaXMuZHJvcEVmZmVjdEVsbSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2RWxtKTtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBkaXZFbG07XHJcblxyXG5cdFx0Ly8gY29tcGFyZSB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IHNldCB2aWEgc2V0RHJhZ0ltYWdlIGFuZCB0aGUgd3JhcHBpbmcgZGl2XHJcblx0XHQvLyBlbGVtZW50LiBUaGVpciB0b3AtbGVmdCBjb29yZGluYXRlcyBtYXkgbm90IGNvaW5zaWRlIGR1ZSB0byBzZXZlcmFsIGZhY3RvcnMgKGUuZy5cclxuXHRcdC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIG9yIFNWRyBjb29yZGluYXRlcykuIElmIHRoaXMgaXMgdGhlIGNhc2UsIGFkanVzdCB0aGUgeCBhbmQgeVxyXG5cdFx0Ly8gY29vcmRpbmF0ZXMgaW4gdGhlIEVtdWxEYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG5cdFx0bGV0IHJjQ2xvbmVkRWxtOiBDbGllbnRSZWN0ID0gY2xvbmVkRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjRGl2RWxtOiBDbGllbnRSZWN0ID0gZGl2RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLmxlZnQgIT0gcmNEaXZFbG0ubGVmdClcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmltYWdlRWxtWCArPSByY0Nsb25lZEVsbS5sZWZ0IC0gcmNEaXZFbG0ubGVmdDtcclxuXHRcdGlmIChyY0Nsb25lZEVsbS50b3AgIT0gcmNEaXZFbG0udG9wKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1ZICs9IHJjQ2xvbmVkRWxtLnRvcCAtIHJjRGl2RWxtLnRvcDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGlzcGxheSBzbWFsbCBpbWFnZSBpbmRpY2F0aW5nIHdoYXQgZHJvcCBlZmZlY3QgaXMgZXhwZWN0ZWRcclxuXHRwcml2YXRlIHNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdDogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjbGFzc05hbWU6IHN0cmluZztcclxuXHRcdGxldCBjb2xvcjogc3RyaW5nO1xyXG5cdFx0c3dpdGNoKCBkcm9wRWZmZWN0KVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFwibm9uZVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtYmFuXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcInJlZFwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImNvcHlcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXBsdXNcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiZ3JlZW5cIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJsaW5rXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1saW5rXCI7XHJcblx0XHRcdFx0Y29sb3IgPSBcImJsdWVcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmxhY2tcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLmNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmlzaCBkcmFnIG9wZXJhdGlvbiBpZiB0aGUgdGFyZ2V0IGFjY2VwdHMgaXQuXHJcblx0cHJpdmF0ZSBoYW5kbGVEcm9wKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHdlIGRvbid0IG5lZWQgdG8gZmluZCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3IgYmVjYXVzZSBkcm9wIGFsd2F5cyBvY2N1cnMgb24gdGhlIGxhc3RcclxuXHRcdC8vIGZvdW5kIHRhcmdldCAob3Igbm8gdGFyZ2V0IGF0IGFsbClcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0KVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyb3BcIikpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnbGVhdmVcIikpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm5vbmVcIjtcclxuXHJcblx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCAgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENhbmNlbCBkcmFnIG9wZXJhdGlvbiBpZiBjYW5jZWwgd2FzIHByZXNzZWRcclxuXHRwcml2YXRlIGNhbmNlbERyYWdPcGVyYXRpb24oIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBEbkQgd2FzIGNhbmNlbGVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIHNlbmQgdGhlIGxhc3QgdGFyZ2V0IChpZiBleGlzdHMgYW5kIGlzIGRyb3BwYWJsZSkgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0Ly8gZmlyZSBvbkRyYWdFbmQgZXZlbnRcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2VuZFwiKSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVhbiB1cCBhZnRlciBkcmFnIG9wZXJhdGlvbiBmaW5pc2hlcyB3aXRoIGVpdGhlciBkcm9wIG9yIGNhbmNlbGF0aW9uXHJcblx0cHJpdmF0ZSBjbGVhbnVwRHJhZ09wZXJhdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gZGVzdHJveSB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleXVwXCIsIHRoaXMub25LZXlVcCk7XHJcblxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGU9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXN0TW91c2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbS5yZW1vdmUoKTtcclxuXHRcdFx0dGhpcy5pbWFnZUVsbSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIGNyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIE1vdXNlRXZlbnQgYW5kIHRoZSBzdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdFxyXG5cdHByaXZhdGUgY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGU6IE1vdXNlRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUpOiBEcmFnRXZlbnRcclxuXHR7XHJcblx0XHQvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBuZXcgRHJhZ0V2ZW50IHlldCwgd2hpbGUgQ2hyb21lIGRvZXNuJ3Qgc3VwcG9ydCBpbml0RHJhZ0V2ZW50XHJcblx0XHRpZiAoXCJpbml0RHJhZ0V2ZW50XCIgaW4gRHJhZ0V2ZW50LnByb3RvdHlwZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGRyYWdFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdEcmFnRXZlbnQnKTtcclxuXHRcdFx0KGRyYWdFdmVudCBhcyBhbnkpLmluaXREcmFnRXZlbnQoIHR5cGUsIGUuYnViYmxlcywgZS5jYW5jZWxhYmxlLCBlLnZpZXcsIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHRlLmNsaWVudFgsIGUuY2xpZW50WSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHRlLnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IGUuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IGUuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiBlLmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogZS5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IGUuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiBlLnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIERyYWdFdmVudCBmcm9tIHRoZSBnaXZlbiBLZXlib2FyZEV2ZW50IGFuZCB0aGUgRGF0YVRyYW5zZmVyIG9iamVjdC4gVXNlcyBsYXN0IHJlbWVtYmVyZWRcclxuXHQvLyBtb3VzZSBldmVudCB0byBmaWxsIGNvb3JkaW5hdGVzIGFuZCBidXR0b24gaW5mb3JtYXRpb24uXHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZTogS2V5Ym9hcmRFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLCB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRYLCB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0XHRcdFx0ZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCB0aGlzLmxhc3RNb3VzZUV2ZW50LmJ1dHRvbixcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsIHRoaXMuZW11bERhdGFUcmFuc2Zlcik7XHJcblx0XHRcdHJldHVybiBkcmFnRXZlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBuZXcgRHJhZ0V2ZW50ICggdHlwZSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJ1YmJsZXM6IGUuYnViYmxlcyxcclxuXHRcdFx0XHRjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXHJcblx0XHRcdFx0ZGV0YWlsOiBlLmRldGFpbCxcclxuXHRcdFx0XHR2aWV3OiBlLnZpZXcsXHJcblx0XHRcdFx0YWx0S2V5OiBlLmFsdEtleSxcclxuXHRcdFx0XHRidXR0b246IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9ucyxcclxuXHRcdFx0XHRjbGllbnRYOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsXHJcblx0XHRcdFx0Y2xpZW50WTogdGhpcy5sYXN0TW91c2VFdmVudC5jbGllbnRZLFxyXG5cdFx0XHRcdGN0cmxLZXk6IGUuY3RybEtleSxcclxuXHRcdFx0XHRtZXRhS2V5OiBlLm1ldGFLZXksXHJcblx0XHRcdFx0cmVsYXRlZFRhcmdldDogdGhpcy5sYXN0TW91c2VFdmVudC5yZWxhdGVkVGFyZ2V0LFxyXG5cdFx0XHRcdHNjcmVlblg6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWCxcclxuXHRcdFx0XHRzY3JlZW5ZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblksXHJcblx0XHRcdFx0c2hpZnRLZXk6IGUuc2hpZnRLZXksXHJcblx0XHRcdFx0ZGF0YVRyYW5zZmVyOiB0aGlzLmVtdWxEYXRhVHJhbnNmZXIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb29yZGluYXRlcyBvZiB0aGUgbW91c2UgZG93biBldmVudCBmb3IgdGhlIHByaW1hcnkgYnV0dG9uLiBXZSB3aWxsIHN0YXJ0IGVtdWxhdGluZyBEbkQgaWZcclxuXHQvLyB0aGUgbW91c2UgbW92ZXMgbW9yZSB0aGFuIHR3byBwaXhlbHMgaW4gZWl0aGVyIGRpcmVjdGlvbiB3aGlsZSB0aGUgcHJpbWFyeSBidXR0b24gaXMgc3RpbGxcclxuXHQvLyBkb3duLlxyXG5cdHByaXZhdGUgbW91c2VEb3duWDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW91c2VEb3duWTogbnVtYmVyO1xyXG5cclxuXHQvLyBTdGF0aWMgRGF0YVRyYW5zZmVyIG9iamVjdCB0aGF0IGlzIHVzZWQgZHVyaW5nIGEgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24uIEl0IGlzIGNyZWF0ZWRcclxuXHQvLyB3aGVuIERuRCBzdGFydHMgYW5kIGlzIGRlc3Ryb3llZCBhZnRlciBpdCBmaW5pc2hlcy4gUHJlc2VuY2Ugb2YgdGhpcyBvYmplY3QgYWxzbyBpbmRpY2F0ZXNcclxuXHQvLyB0aGF0IHRoZSBEbkQgb3BlcnN0aW9uIGlzIGluIHByb2dyZXNzXHJcblx0cHJpdmF0ZSBlbXVsRGF0YVRyYW5zZmVyOiBJRW11bERhdGFUcmFuc2ZlcjtcclxuXHJcblx0Ly8gQ2xvbmVkIGVsZW1lbnQgdXNlZCB0byBhcyBhbiBpbWFnZSBkdXJpbmcgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIGltYWdlRWxtOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcblx0Ly8gU3ViLWVsZW1lbnQgb2YgdGhlIGltYWdlIGVsZW1lbnQgdGhhdCBzaG93cyBkcm9wIGVmZmVjdFxyXG5cdHByaXZhdGUgZHJvcEVmZmVjdEVsbTogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuXHQvLyBUaGUgbGFzdCBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3JcclxuXHRwcml2YXRlIGxhc3RUYXJnZXQ6IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsYXN0IHRhcmdldCB1bmRlciB0aGUgY3Vyc29yIHdhcyBhIHZhbGlkIGRyb3Agem9uZS4gVGhpcyBpc1xyXG5cdC8vIG5lZWRlZCB0byBub3Qgc2VuZCBkcmFnb3ZlciBhbmQgZHJhZ2xlYXZlIGV2ZW50cyB0byBub24tZHJvcHBhYmxlIHRhcmdldHMuIFRoaXMgZmxhZyBpc1xyXG5cdC8vIHNldCB0byB0cnVlIHdoZW4gdGhlIGRyYWdlbnRlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0cyBwcmV2ZW50RGVmYXVsdCBtZXRob2RcclxuXHQvLyBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyYWdvdmVyLCBkcmFnbGVhdmUgYW5kIGRyb3AgZXZlbnRzIGFyZSBub3Qgc2VudFxyXG5cdC8vIHRvIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNMYXN0VGFyZ2V0RHJvcHBhYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZHJvcCBpcyBwb3NzaWJsZSBvbiB0aGUgbGFzdCB0YXJnZXQuIFRoaXMgZmxhZyBpcyBuZWVkZWQgYmVjYXVzZVxyXG5cdC8vIGV2ZW4gaWYgYSB0YXJnZXQgaXMgYSB2YWxpZCBkcm9wIHpvbmUsIG5vdCBhbGwgbG9jYXRpb25zIHdpdGhpbiB0aGUgdGFyZ2V0IG1pZ2h0IGFjY2VwdCB0aGVcclxuXHQvLyBkcm9wLiBUaGlzIGZsYWcgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ292ZXIgZXZlbnQgc2VudCB0byB0aGUgdGFyZ2V0IGhhcyBpdHNcclxuXHQvLyBwcmV2ZW50RGVmYXVsdCBtZXRob2QgY2FsbGVkLiBJZiB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLCBkcm9wIGV2ZW50IHdpbGwgbm90IGJlIHNlbnQgdG9cclxuXHQvLyB0aGlzIHRhcmdldC5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0OiBib29sZWFuO1xyXG5cclxuXHQvLyBMYXRlc3QgTW91c2VFdmVudCBvYmplY3QsIHdoY2loIHdlIHVzZSB0byBjcmVhdGUgRHJhZ0V2ZW50IG9iamVjdHMuXHJcblx0cHJpdmF0ZSBsYXN0TW91c2VFdmVudDogTW91c2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtEcmFnRHJvcEVmZmVjdCwgRHJhZ0FsbG93ZWRFZmZlY3RzLCBEcmFnVGFyZ2V0UHJvcFR5cGUsIElEcmFnVGFyZ2V0LCBJU2ltcGxlRHJhZ1RhcmdldCwgSURyYWdUYXJnZXRFdmVudH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGF9IGZyb20gXCIuL0RhdGFUcmFuc2ZlclwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRFdmVudCBjbGFzcyByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBkaWZmZXJlbnQgZXZlbnQgaGFuZGxlcnNcclxuLy8gb24gdGhlIGRyYWcgdGFyZ2V0IGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ1RhcmdldEV2ZW50IGltcGxlbWVudHMgSURyYWdUYXJnZXRFdmVudFxyXG57XHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50IHsgcmV0dXJuIHRoaXMubV9kcmFnRXZlbnQ7IH1cclxuXHRzZXQgZHJhZ0V2ZW50KCB2YWw6IERyYWdFdmVudCkgeyB0aGlzLm1fZHJhZ0V2ZW50ID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIHRoaXMuZHJhZ0V2ZW50LmRhdGFUcmFuc2ZlciwgdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZGF0YTogYW55ID0gRHJhZ0FuZERyb3BEYXRhLmdldE9iamVjdERhdGEoIHR5cGUpO1xyXG5cdFx0cmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEgOiB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkLlxyXG5cdGhhc0ZpbGVzKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgZmlsZXMgPSB0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuXHRcdHJldHVybiBmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXVxyXG5cdHtcclxuXHRcdGxldCBpdGVtcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0bGV0IGVudHJpZXM6IGFueVtdID0gW107XHJcblx0XHRpZiAoaXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGk6IG51bWJlciA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRlbnRyaWVzLnB1c2goIGl0ZW1zW2ldLndlYmtpdEdldEFzRW50cnkoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVudHJpZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRwcml2YXRlIG1fZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0SGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3AgdGFyZ2V0IGZ1bmN0aW9uYWxpdHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1RhcmdldEhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdUYXJnZXQ6IERyYWdUYXJnZXRQcm9wVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsbSA9IGVsbTtcclxuXHJcblx0XHRpZiAoKGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQpLm9uRHJvcCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElEcmFnVGFyZ2V0O1xyXG5cdFx0ZWxzZSBpZiAoKGRyYWdUYXJnZXQgYXMgSVNpbXBsZURyYWdUYXJnZXQpLm9uRGF0YURyb3BwZWQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gbmV3IERyYWdUYXJnZXRFdmVudCgpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID0gMDtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdlbnRlclwiLCB0aGlzLm9uRHJhZ0VudGVyKTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2xlYXZlXCIsIHRoaXMub25EcmFnTGVhdmUpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnb3ZlclwiLCB0aGlzLm9uRHJhZ092ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcm9wXCIsIHRoaXMub25Ecm9wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRlcm0oKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cclxuXHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0VudGVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnRW50ZXIgY2FsbGJhY2sgb25seSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBkcmFnZW50ZXJcclxuXHRcdC8vIGV2ZW50IGlzIGZpcmVkIG9uIG91ciBlbGVtZW50IG9yIG9uIG9uZSBvZiBjaGlsZCBub24tZHJhZy10YXJnZXQgZWxlbWVudHMuXHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyKysgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5pc0Ryb3BQb3NzaWJsZSlcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGlmIElEcmFnVGFyZ2V0LnR5cGVzIHByb3BlcnR5IGlzIGRlZmluZWQgYW5kIGlzIG5vdCBlbXB0eSwgZHJhZyB3aWxsIGJlIHBvc3NpYmxlXHJcblx0XHQvLyBvbmx5IGlmIHRoZSBkYXRhIGJlaW5nIGRyYWdnZWQgaGFzIGF0IGxlYXN0IG9uIHR5cGUgZnJvbSB0aGUgdHlwZXMgYXJyYXkuXHJcblx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0IT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKERyYWdBbmREcm9wRGF0YS5oYXNUeXBlKCBlLmRhdGFUcmFuc2ZlciwgdHlwZSkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIG5vIHN1aXRhYmxlIHR5cGUgZm91bmQsIHdlIGRvbid0IGNhbGwgZS5wcmV2ZW50RGVmYXVsdCwgd2hpY2ggZGlzYWxsb3dzIGRyb3BcclxuXHRcdFx0aWYgKCF0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgb25EcmFnRW50ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhcHBseSB2aXN1YWwgZmVlZGJhY2sgaWYgc3BlY2lmaWVkXHJcblx0XHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjayAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGFsdGhvdWdoIHN0eWxlIHByb3BlcnR5IGV4aXN0cyBpbiBib3RoIEhUTUxFbGVtZW50IGFuZCBTVkdFbGVtZW50LCBpdCBpcyBkZWZpbmVkIG9uIGFcclxuXHRcdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0XHQvLyBzYXZlIGN1cnJlbnQgdmFsdWVzIG9mIHN0eWxlIHByb3BlcnRpZXMgc3BlY2lmaWVkIGluIGZlZWRiYWNrIGFuZCBzZXQgdGhlIHN0eWxlIGZyb21cclxuXHRcdFx0XHRcdC8vIHRoZSBmZWVkYmFja1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0ge307XHJcblx0XHRcdFx0XHRmb3IoIGxldCBwcm9wIGluIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5mZWVkYmFjaylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlW3Byb3BdID0gZWxtU3R5bGVbcHJvcF07XHJcblx0XHRcdFx0XHRcdGVsbVN0eWxlW3Byb3BdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrW3Byb3BdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnRW50ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdPdmVyID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGxldCBpc0Ryb3BQb3NzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gdGhlIGRyYWcgdGFyZ2V0LCB3ZSBjb25zaWRlciBkcm9wIHBvc3NpYmxlXHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2FsbCB0aGUgb25EcmFnT3ZlciBtZXRob2QgYW5kIGNvbnNpZGVyIGRyb3AgcG9zc2libGUgb25seSBpZiBpdCByZXR1cm5zIHRydWVcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdGlzRHJvcFBvc3NpYmxlID0gdGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc0Ryb3BQb3NzaWJsZSlcclxuXHRcdHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgY2FsbGJhY2sgaXMgbm90IGRlZmluZWQgd2UgbmVlZCB0byBzZXQgZHJvcCBlZmZlY3RcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ092ZXIgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmdldERlZmF1bHREcm9wRWZmZWN0KCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyYWdMZWF2ZSA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHQvLyB3ZSB3aWxsIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGNhbGxiYWNrIG9ubHkgaWYgdGhlIG1vdXNlIGNvbXBsZXRlbHkgbGVhdmVzIG91ciBlbGVtZW50LFxyXG5cdFx0Ly8gd2hpY2ggbWVhbnMgb3VyIGNvdW50ZXIgcmVhY2hlcyAwLlxyXG5cdFx0aWYgKC0tdGhpcy5kcmFnVGFyZ2V0RW50ZXJDb3VudGVyID4gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gcmV2ZXJ0IHZpc3VhbCBmZWVkYmFjayAoaWYgd2FzIHNwZWNpZmllZClcclxuXHRcdFx0aWYgKHRoaXMuc2F2ZWRTdHlsZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdC8vIHNlcGFyYXRlIHR5cGUgLSBFbGVtZW50Q1NTSW5saW5lU3R5bGVcclxuXHRcdFx0XHRsZXQgZWxtU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSAodGhpcy5lbG0gYXMgYW55IGFzIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSkuc3R5bGU7XHJcblxyXG5cdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zYXZlZFN0eWxlKVxyXG5cdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNhdmVkU3R5bGVbcHJvcF07XHJcblxyXG5cdFx0XHRcdHRoaXMuc2F2ZWRTdHlsZSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25Ecm9wID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IGV4cGVjdGVkVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmRhdGFUeXBlcztcclxuXHRcdFx0bGV0IGRhdGFPYmogPSB7fTtcclxuXHRcdFx0Zm9yKCBsZXQgdHlwZSBvZiBlLmRhdGFUcmFuc2Zlci50eXBlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgc29tZSBleHBlY3RlZCB0eXBlcyBkZWZpbmVkIHNraXAgdGhlIGN1cnJlbnQgdHlwZSBpZiBpdCBpcyBubyBvbmVcclxuXHRcdFx0XHQvLyBvZiB0aGUgZXhwZWN0ZWRcclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWRUeXBlcyAmJiBleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDAgJiYgZXhwZWN0ZWRUeXBlcy5pbmRleE9mKCB0eXBlKSA8IDApXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGRhdGEgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSggdHlwZSk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRkYXRhT2JqW3R5cGVdID0gZGF0YTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5vbkRhdGFEcm9wcGVkKCBkYXRhT2JqKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHR0aGlzLmRyYWdUYXJnZXQub25Ecm9wKCB0aGlzLmRyYWdUYXJnZXRFdmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8vLyBpZiB0aGUgdGFyZ2V0IGltcGxlbWVudHMgb25EcmFnTGVhdmUsIGNhbGwgaXQgbm93IHRvIGFsbG93IGl0IHRvIGNsZWFudXBcclxuXHRcdC8vaWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0Ly97XHJcblx0XHQvL1x0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdC8vfVxyXG5cclxuXHRcdC8vIGNsZWFyIG91ciBkcmFnRW50ZXJDb3VudGVyXHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBkZWZhdWx0IGRyb3AgZWZmZWN0IGFjY29yZGluZyB0byB0aGUgYWxsb3dlZCBlZmZlY3RzIGFuZCBrZXlzIHByZXNzZWRcclxuXHRwcml2YXRlIGdldERlZmF1bHREcm9wRWZmZWN0KGU6IERyYWdFdmVudCk6IERyYWdEcm9wRWZmZWN0XHJcblx0e1xyXG5cdFx0bGV0IGFsbG93ZWRFZmZlY3RzID0gZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCBhcyBEcmFnQWxsb3dlZEVmZmVjdHM7XHJcblx0XHRzd2l0Y2goIGFsbG93ZWRFZmZlY3RzKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5OlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Nb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rOlxyXG5cdFx0XHRcdHJldHVybiBEcmFnRHJvcEVmZmVjdC5MaW5rO1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5Db3B5TW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Db3B5O1xyXG5cdFx0XHRjYXNlIERyYWdBbGxvd2VkRWZmZWN0cy5MaW5rTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZS5hbHRLZXkgPyBEcmFnRHJvcEVmZmVjdC5MaW5rIDogZS5jdHJsS2V5ID8gRHJhZ0Ryb3BFZmZlY3QuQ29weSA6IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblxyXG5cdFx0XHRkZWZhdWx0OiBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRyb3AgZWZmZWN0IGlzIGFtb25nIHRoZSBhbGxvd2VkIGVmZmVjdHNcclxuXHRwcml2YXRlIGlzRHJvcEVmZmVjdEFsbG93ZWQoIGRyb3BFZmZlY3Q6IERyYWdEcm9wRWZmZWN0LCBhbGxvd2VkRWZmZWN0czogRHJhZ0FsbG93ZWRFZmZlY3RzKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlMaW5rOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5Db3B5IHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ID09PSBEcmFnRHJvcEVmZmVjdC5MaW5rIHx8IGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCAhPT0gRHJhZ0Ryb3BFZmZlY3QuTm9uZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtOiBFbGVtZW50O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBkcmFnVGFyZ2V0OiBJRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gSURyYWdUYXJnZXQgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHRhcmdldC5cclxuXHRwdWJsaWMgc2ltcGxlRHJhZ1RhcmdldDogSVNpbXBsZURyYWdUYXJnZXQ7XHJcblxyXG5cdC8vIEV2ZW50IG9iamVjdCB0aGF0IGlzIHJldXNlZCB3aGVuIHNlbmRpbmcgZXZlbnRzIHRvIGEgZHJhZyB0YXJnZXQgZWxlbWVudC5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFdmVudDogRHJhZ1RhcmdldEV2ZW50O1xyXG5cclxuXHQvLyBBIGRyYWcgdGFyZ2V0IGVsZW1lbnQgY2FuIGhhdmUgY2hpbGRyZW4gd2hvIGFyZSBub3QgZHJhZyB0YXJnZXRzIGJ5IHRoZW1zZWx2ZXMuIEluIHRoaXNcclxuXHQvLyBjYXNlLCB3aGVuIHRoZSBtb3VzZSBnb2VzIGZyb20gb3VyIGVsZW1lbnQgdG8gYSBjaGlsZCBlbGVtZW50LCB3ZSB3aWxsIHJlY2VpdmUgZHJhZ2VudGVyXHJcblx0Ly8gZXZlbnQgb24gdGhlIGNoaWxkIGVsZW1lbnQgYW5kIGRyYWdsZWF2ZSBvbiBvdXJzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCB0aGlzIHRocm91Z2hcclxuXHQvLyBvdXIgY3VzdG9tIGV2ZW50cyBiZWNhdXNlIGZyb20gdGhlIGNsbGVyJ3MgcG9pbnQgb2YgdmlldyB0aGUgbXVzZSBpcyBzdGlsbCB3aXRoaW4gdGhlXHJcblx0Ly8gYm91bmRzIG9mIG91ciBlbGVtZW50LiBUaGVyZWZvcmUsIHdlIGtlZXAgdGhlIGNvdW50ZXIgdmFyaWFibGUsIHdoaWNoIGlzIHNldCB0byAxXHJcblx0Ly8gd2hlbiB0aGUgZmlyc3QgZHJhZ2VudGVyIGV2ZW50IChmcm9tIG91ciBlbGVtZW50IG9yIGZyb20gYSBjaGlsZCkgaXMgcmVwb3J0ZWQuIE9uIGVhY2hcclxuXHQvLyBzdWJzZXF1ZW50IGRyYWdlbnRlciBhbmQgZHJhZ2xlYXZlIGl0IHdpbGwgYmUgaW5jcmVtZW50ZWQgYW5kIGRlY3JlbWVudGVkIHJlc3BlY3RpdmVseS5cclxuXHQvLyBXaGVuIHRoaXMgY291bnRlciByZWFjaGVzIHplcm8sIHdlIGNhbGwgdGhlIG9uRHJhZ0xlYXZlIGhhbmRsZXIuXHJcblx0cHJpdmF0ZSBkcmFnVGFyZ2V0RW50ZXJDb3VudGVyOiBudW1iZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGluIHRoZSBmaXJzdCBjYWxsIHRvIHRoZSBvbkRyYWdFbnRlciB3ZSBkZXRlcm1pbmVkIHRoYXQgZHJvcFxyXG5cdC8vIHdhcyBwb3NzaWJsZS5cclxuXHRwcml2YXRlIGlzRHJvcFBvc3NpYmxlOiBib29sZWFuO1xyXG5cclxuXHQvLyBTZXQgb2Ygc3R5bGVzIHNhdmVkIGJlZm9yZSBhcHBseWluZyBmZWVkYmFjayBzdHlsZXMgZHVyaW5nIGRyYWdlbnRlciBldmVudC4gV2Ugd2lsbCB1c2VcclxuXHQvLyB0aGVzZSBzdHlsZXMgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgZHVyaW5nIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0cHJpdmF0ZSBzYXZlZFN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jbFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZG5kL0RyYWdEcm9wQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL1BvcHVwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL0RpYWxvZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wb3B1cC9Nc2dCb3hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHJlZS9UcmVlQXBpXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpcnQvU2Nyb2xsQXhpc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92aXJ0L1ZUYWJsZVwiO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlc30gZnJvbSBcIi4vZG5kL0RyYWdEcm9wSW1wbFwiO1xyXG5yZWdpc3RlckRyYWdEcm9wQ3VzdG9tQXR0cmlidXRlcygpO1xyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtQb3B1cH0gZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERpYWxvZyBjbGFzcyBpcyBhIHBvcHVwIHdpdGggdGhyZWUgZGlzdGluY3QgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQb3B1cFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgU2xpY2UgZm9yIHRoZSB0aHJlZSBkaWFsb2cgYXJlYXM6IGNhcHRpb24sIG1haW4gY29udGVudCBhbmQgYnV0dG9ucy5cclxuXHQvLyBUaGV5IGNhbiBiZSBsZWZ0IHVuZGVmaW5lZCBpZiBhIGRlcml2ZWQgY2xhc3Mgb3ZlcnJpZGVzIHRoZSBhcHByb3ByaWF0ZSByZW5kZXIgbWV0aG9kcy5cclxuXHRjb25zdHJ1Y3RvciggY2FwdGlvbkFyZWFTbGljZT86IG1pbS5TbGljZSwgbWFpbkFyZWFTbGljZT86IG1pbS5TbGljZSwgYnV0dG9uQXJlYVNsaWNlPzogbWltLlNsaWNlLCBkbGdTbGljZT86IG1pbS5TbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcihkbGdTbGljZSk7XHJcblxyXG5cdFx0dGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gY2FwdGlvbkFyZWFTbGljZSA/IGNhcHRpb25BcmVhU2xpY2UgOiB7fTtcclxuXHRcdHRoaXMubWFpbkFyZWFTbGljZSA9IG1haW5BcmVhU2xpY2UgPyBtYWluQXJlYVNsaWNlIDoge307XHJcblx0XHR0aGlzLmJ1dHRvbkFyZWFTbGljZSA9IGJ1dHRvbkFyZWFTbGljZSA/IGJ1dHRvbkFyZWFTbGljZSA6IHt9O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkZWZhdWx0IHBhcmFtZXRlcnMgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhIERpYWxvZyBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRDYXB0aW9uQXJlYVNsaWNlID0geyBzdHlsZToge2JhY2tncm91bmQ6XCJwaW5rXCIsIHBhZGRpbmc6XCIwLjVlbSAxZW1cIiwgY3Vyc29yOlwiZGVmYXVsdFwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0TWFpbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtwYWRkaW5nOlwiMC41ZW0gMWVtXCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCIsIHBhZGRpbmc6XCIwLjVlbSAxZW1cIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRCdXR0b25TbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRCdXR0b25TbGljZSA9IHsgc3R5bGU6IHttYXJnaW5MZWZ0OlwiMC41ZW1cIiwgbWluV2lkdGg6XCI1ZW1cIn0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b24gd2l0aCB0aGUgZ2l2ZW4gY2hhcmFjdGVyaXN0aWNzLiBUaGUga2V5IHBhcmFtZXRlciBpbmRpY2F0ZXMgdGhlIHZhbHVlIHRoYXQgaXNcclxuXHQvLyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBUaGUgb3B0aW9uYWwgaW5kZXggcGFyYW1ldGVyIHNwZWNpZmllc1xyXG5cdC8vIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYnV0dG9uIHNob3VsZCBiZSBhZGRlZC5cclxuXHRwdWJsaWMgYWRkQnV0dG9uKCBzbGljZTogbWltLlNsaWNlLCBrZXk/OiBhbnksIGNhbGxiYWNrPzogKGtleTogYW55KSA9PiB2b2lkLCBpbmRleD86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5mbzogRGxnQnRuSW5mbyA9IHsgc2xpY2UsIGtleSwgY2FsbGJhY2ssIHJlZjogbmV3IG1pbS5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCkgfTtcclxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnB1c2goIGluZm8pO1xyXG5cdFx0ZWxzZSBpZiAoaW5kZXggPT09IDApXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3MudW5zaGlmdCggaW5mbyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuYnV0dG9uSW5mb3Muc3BsaWNlKCBpbmRleCAtIDEsIDAsIGluZm8pO1xyXG5cclxuXHRcdGlmICh0aGlzLmJ1dHRvbkFyZWFQcm94eSlcclxuXHRcdFx0dGhpcy5idXR0b25BcmVhUHJveHkudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGJ1dHRvbiBhdCB0aGUgZ2l2ZW4gaW5kZXguXHJcblx0cHVibGljIHJlbW92ZUJ1dHRvbiggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cclxuXHRcdGlmICh0aGlzLmJ1dHRvbkFyZWFQcm94eSlcclxuXHRcdFx0dGhpcy5idXR0b25BcmVhUHJveHkudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50LlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHR0aGlzLmNhcHRpb25BcmVhUHJveHkgPSBuZXcgbWltLkZ1bmNQcm94eSggKCkgPT5cclxuXHRcdHtcclxuXHRcdFx0bGV0IGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5TbGljZXMuTWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSwgdGhpcy5nZXRDYXB0aW9uQXJlYVNsaWNlKCkpO1xyXG5cdFx0XHRyZXR1cm4gPGRpdiBpZD1cImRsZ0NhcHRpb25cIiBtb3VzZWRvd249e3RoaXMub25TdGFydE1vdmV9IHN0eWxlPXtjYXB0aW9uQXJlYVNsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPXtjYXB0aW9uQXJlYVNsaWNlLmNsYXNzTmFtZX0gey4uLmNhcHRpb25BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHRcdHtjYXB0aW9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5tYWluQXJlYVByb3h5ID0gbmV3IG1pbS5GdW5jUHJveHkoICgpID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBtYWluQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UsIHRoaXMuZ2V0TWFpbkFyZWFTbGljZSgpKTtcclxuXHRcdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdNYWluQ29udGVudFwiIHN0eWxlPXttYWluQXJlYVNsaWNlLnN0eWxlfSBjbGFzcz17bWFpbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5tYWluQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHR7bWFpbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYnV0dG9uQXJlYVByb3h5ID0gbmV3IG1pbS5GdW5jUHJveHkoICgpID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5TbGljZXMuTWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uQXJlYVNsaWNlLCB0aGlzLmdldEJ1dHRvbkFyZWFTbGljZSgpKTtcclxuXHRcdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdCdXR0b25zXCIgc3R5bGU9e2J1dHRvbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e2J1dHRvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5idXR0b25BcmVhU2xpY2UucHJvcHN9PlxyXG5cdFx0XHRcdHtidXR0b25BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdFx0XHR7dGhpcy5idXR0b25JbmZvcy5tYXAoIChpbmZvKSA9PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsZXQgYnRuU2xpY2U6IG1pbS5TbGljZSA9IG1pbS5TbGljZXMuTWVyZ2VTbGljZXMoIERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UsIGluZm8uc2xpY2UpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGJ1dHRvbiBrZXk9e2luZm8ua2V5fSBjbGljaz17aW5mby5jYWxsYmFjayAmJiAoKCkgPT4gaW5mby5jYWxsYmFjayhpbmZvLmtleSkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2J0blNsaWNlLnN0eWxlfSBjbGFzcz17YnRuU2xpY2UuY2xhc3NOYW1lfSB7Li4uYnRuU2xpY2UucHJvcHN9PlxyXG5cdFx0XHRcdFx0XHRcdHtidG5TbGljZS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBjb250ZW50OiBhbnkgPVxyXG5cdFx0XHQ8bWltLkZyYWdtZW50PlxyXG5cdFx0XHRcdHt0aGlzLmNhcHRpb25BcmVhUHJveHl9XHJcblx0XHRcdFx0e3RoaXMubWFpbkFyZWFQcm94eX1cclxuXHRcdFx0XHR7dGhpcy5idXR0b25BcmVhUHJveHl9XHJcblx0XHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBjYXB0aW9uLlxyXG5cdHByb3RlY3RlZCBnZXRDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNhcHRpb25BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0TWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5tYWluQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgYnV0dG9uIGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldEJ1dHRvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5idXR0b25BcmVhU2xpY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIHB1dHMgbW91c2UgZG93biBpbiB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBvblN0YXJ0TW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHRoaXMuc3RhcnRNb3ZlKCBlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQ2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5jYXB0aW9uQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBDYXB0aW9uQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLmNhcHRpb25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBNYWluQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLm1haW5BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IE1haW5BcmVhU2xpY2UoIHZhbDogbWltLlNsaWNlKSB7IHRoaXMubWFpbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBidXR0b25zIGFyZWFcclxuXHRwcml2YXRlIGJ1dHRvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgQnV0dG9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZSB7IHJldHVybiB0aGlzLmJ1dHRvbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgQnV0dG9uQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLmJ1dHRvbkFyZWFTbGljZSA9IHZhbDsgfVxyXG5cclxuXHQvLyBBcnJheSBvZiBidXR0b25zIGFkZGVkIHRvIHRoZSBkaWFsb2dcclxuXHRwcml2YXRlIGJ1dHRvbkluZm9zOiBEbGdCdG5JbmZvW10gPSBbXTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSBjYXB0aW9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1haW5BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGJ1dHRvbiBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhUHJveHk6IG1pbS5GdW5jUHJveHk7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgY2FwdGlvbiBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0Q2FwdGlvbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdE1haW5BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBidXR0b25zIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRCdXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBhIGJ1dHRvbiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0QnV0dG9uU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEbGdCdG5JbmZvIGNsYXNzIGlzIGEgaGVscGVyIGNsYXNzIHRoYXQga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBidXR0b24gYWRkZWQgdG8gdGhlIGRpYWxvZy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgRGxnQnRuSW5mbyA9XHJcbntcclxuXHRzbGljZTogbWltLlNsaWNlLFxyXG5cdGtleTogYW55LFxyXG5cdGNhbGxiYWNrOiAoa2V5OiBhbnkpID0+IHZvaWQsXHJcblx0cmVmOiBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PixcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEaWFsb2dCdXR0b24gZW51bWVyYXRpb24gZGVmaW5lcyBjb25zdGFudHMgdG8gaW5kaWNhdGUgc3RhbmRhcmQgYnV0dG9ucyB1c2VkIGluIGRpYWxvZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZW51bSBEaWFsb2dCdXR0b25cclxue1xyXG5cdE5vbmUgPSAweDAsXHJcblx0T0sgPSAweDEsXHJcblx0Q2FuY2VsID0gMHgyLFxyXG5cdFllcyA9IDB4NCxcclxuXHRObyA9IDB4OCxcclxuXHRDbG9zZSA9IDB4MTAsXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7RGlhbG9nLCBEaWFsb2dCdXR0b259IGZyb20gXCIuL0RpYWxvZ1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTXNnQm94IGNsYXNzIGlzIGEgZGlhbG9nIHRoYXQgZGlzcGxheXMgYSBtZXNzYWdlIHdpdGggYSBzZXQgb2YgcHJlLWRlZmluZWQgYnV0dG9ucy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBNc2dCb3ggZXh0ZW5kcyBEaWFsb2dcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgc2hvd01vZGFsKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpOiBQcm9taXNlPE1zZ0JveEJ1dHRvbnM+XHJcblx0e1xyXG5cdFx0bGV0IG1zZ0JveDogTXNnQm94ID0gbmV3IE1zZ0JveCggbWVzc2FnZSwgdGl0bGUsIGJ1dHRvbnMsIGljb24pO1xyXG5cdFx0cmV0dXJuIG1zZ0JveC5zaG93TW9kYWwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnMgPSBNc2dCb3hCdXR0b25zLk9LLFxyXG5cdFx0XHRcdFx0aWNvbjogTXNnQm94SWNvbiA9IE1zZ0JveEljb24uTm9uZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0XHR0aGlzLmJ1dHRvbnMgPSBidXR0b25zO1xyXG5cdFx0dGhpcy5pY29uID0gaWNvbjtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZUJ1dHRvbnMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGNhcHRpb24uXHJcblx0cHJvdGVjdGVkIGdldENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHsgY29udGVudDogdGhpcy50aXRsZSwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIkRvZGdlckJsdWVcIiB9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYS5cclxuXHRwcm90ZWN0ZWQgZ2V0TWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRsZXQgeyBjbHMsIGNvbG9yIH0gPSB0aGlzLmdldEljb25DbGFzc0FuZENvbG9yKCk7XHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGFsaWduSXRlbXM6XCJzdGFydFwifX0+XHJcblx0XHRcdFx0e2NscyAmJiA8aSBjbGFzcz17XCJmYSBmYS0zeCBcIiArIGNsc30gc3R5bGU9e3tjb2xvcjpjb2xvcn19Lz59XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsIG1pbldpZHRoOlwiMTVlbVwiLCBtYXhXaWR0aDpcIjQwZW1cIiwgbWluSGVpZ2h0OiBcIjJlbVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OlwiMjBlbVwiLCBvdmVyZmxvdzpcImF1dG9cIn19PlxyXG5cdFx0XHRcdFx0e3RoaXMubWVzc2FnZX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+O1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBidXR0b25zIGFjY29yZGluZyB0byB0aGUgcGFyYW1ldGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25zKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzd2l0Y2goIHRoaXMuYnV0dG9ucylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLkNsb3NlOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNsb3NlXCIsIERpYWxvZ0J1dHRvbi5DbG9zZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT0s6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5Pa0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJPS1wiLCBEaWFsb2dCdXR0b24uT0spO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIkNhbmNlbFwiLCBEaWFsb2dCdXR0b24uQ2FuY2VsKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNObzpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5ZZXNOb0NhbmNlbDpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJZZXNcIiwgRGlhbG9nQnV0dG9uLlllcyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiTm9cIiwgRGlhbG9nQnV0dG9uLk5vKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgZ2V0SWNvbkNsYXNzQW5kQ29sb3IoKTogeyBjbHM6IHN0cmluZywgY29sb3I6IHN0cmluZyB9XHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmljb24pXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5JbmZvOiByZXR1cm4geyBjbHM6IFwiZmEtaW5mby1jaXJjbGVcIiwgY29sb3I6IFwiYmx1ZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5XYXJuaW5nOiByZXR1cm4geyBjbHM6IFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiwgY29sb3I6IFwib3JhbmdlXCIgfTtcclxuXHRcdFx0Y2FzZSBNc2dCb3hJY29uLkVycm9yOiByZXR1cm4geyBjbHM6IFwiZmEtbWludXMtY2lyY2xlXCIsIGNvbG9yOiBcInJlZFwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5RdWVzdGlvbjogcmV0dXJuIHsgY2xzOiBcImZhLXF1ZXN0aW9uLWNpcmNsZVwiLCBjb2xvcjogXCJncmVlblwiIH07XHJcblxyXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4geyBjbHM6IFwiXCIsIGNvbG9yOiBcIlwiIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9uKCB0ZXh0OiBzdHJpbmcsIGtleTogRGlhbG9nQnV0dG9uKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuYWRkQnV0dG9uKCB7Y29udGVudDogdGV4dH0sIGtleSwgdGhpcy5vbkJ1dHRvbkNsaWNrZWQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uQnV0dG9uQ2xpY2tlZCA9ICgga2V5OiBhbnkpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5jbG9zZSgga2V5KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGFyZWFcclxuXHRwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcblx0Ly8gVGl0bGUgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIHRpdGxlOiBzdHJpbmc7XHJcblxyXG5cdC8vIEJ1dHRvbnNcclxuXHRwcml2YXRlIGJ1dHRvbnM6IE1zZ0JveEJ1dHRvbnM7XHJcblxyXG5cdC8vIEljb25cclxuXHRwcml2YXRlIGljb246IE1zZ0JveEljb247XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTXNnQm94QnV0dG9uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBidXR0b25zIGFuZCBidXR0b24gY29tYmluYXRpb25zIGZvclxyXG4gKiBtZXNzYWdlIGJveGVzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTXNnQm94QnV0dG9uc1xyXG57XHJcblx0LyoqIE1lc3NhZ2UgYm94IHdpbGwgZGlzcGxheSBubyBidXR0b25zICovXHJcblx0Tm9uZSA9IDAsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgQ2xvc2UgYnV0dG9uICovXHJcblx0Q2xvc2UsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgYSBzaW5nbGUgT0sgYnV0dG9uICovXHJcblx0T0ssXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgT0sgYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0T2tDYW5jZWwsXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzIGFuZCBObyBidXR0b25zICovXHJcblx0WWVzTm8sXHJcblxyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGhhdmUgWWVzLCBObyBhbmQgQ2FuY2VsIGJ1dHRvbnMgKi9cclxuXHRZZXNOb0NhbmNlbCxcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveEljb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHZhbHVlcyBvZiBwcmVkZWZpbmVkIGljb25zIGZvciBtZXNzYWdlIGJveC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEljb25cclxue1xyXG5cdE5vbmUgPSAwLFxyXG5cdEluZm8sXHJcblx0V2FybmluZyxcclxuXHRFcnJvcixcclxuXHRRdWVzdGlvbixcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBQb3B1cCBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG1vZGVsZXNzIGFuZCBtb2RhbCBwb3B1cHMuIEl0IHByb3ZpZGVzIHRoZSBiYXNpYyBtZWNoYW5pY3NcclxuLy8gZm9yIHNob3dpbmcgYW5kIGNsb3NpbmcgdGhlIHBvcHVwcyBpbmNsdWRpbmcgbW92aW5nIGl0IHdpdGggdGhlIG1vdXNlLiBUaGUgY29udGVudCBvZiB0aGVcclxuLy8gcG9wdXAgaXMgZWl0aGVyIHNwZWNpZmllZCBpbiB0aGUgY29uc3R1Y3RvciBvciBpcyBwcm92aWRlZCBieSBkZXJpdmVkIGNsYXNzZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHQvLyBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyB0aGUgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHN0eWxlcyBhbmQgY29udGVudCB0aGF0IHNob3VsZCBiZVxyXG5cdC8vIGRpc3BsYXllZCB3aXRoaW4gdGhlIHBvcHVwLiBJdCBjYW4gYmUgbGVmdCB1bmRlZmluZWQgaWYgYSBkZXJpdmVkIGNsYXNzIG92ZXJyaWRlcyB0aGVcclxuXHQvLyBnZXREbGdTbGljZSBtZXRob2QuXHJcblx0Y29uc3RydWN0b3IoIGRsZ1NsaWNlPzogbWltLlNsaWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmRsZ1NsaWNlID0gZGxnU2xpY2UgPyBkbGdTbGljZSA6IHt9O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBkZWZhdWx0IHBhcmFtZXRlcnMgaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBhIFBvcHVwIGlzIGNyZWF0ZWRcclxuXHRcdGlmICghUG9wdXAuRGVmYXVsdERsZ1NsaWNlKVxyXG5cdFx0XHRQb3B1cC5EZWZhdWx0RGxnU2xpY2UgPSB7IHN0eWxlOiB7IGJvcmRlclN0eWxlOiBcInNvbGlkXCIsIGJvcmRlcldpZHRoOiBcIjFweFwiLCBwYWRkaW5nOiBcIjBcIn0gfTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3BlbnMgdGhlIGRpYWxvZyBhcyBhIG1vZGVsZXNzIHBvcHVwLiBJdCBzaG91bGQgYmUgY2xvc2VkIHdpdGggdGhlIENsb3NlIG1ldGhvZC5cclxuXHRwdWJsaWMgb3BlbiggeD86IG51bWJlciwgeT86IG51bWJlcik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc09wZW4oKSlcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlKCB4LCB5KTtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLnNob3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xvc2VzIHRoZSBkaWFsb2cgb3BlbmVkIGFzIGEgbW9kZWxlc3MgcG9wdXAuIFRoaXMgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIHRvIGNsb3NlIGEgbW9kYWxcclxuXHQvLyBkaWFsb2cuXHJcblx0cHVibGljIGNsb3NlKCByZXRWYWw/OiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0KHRoaXMuZGxnIGFzIGFueSkuY2xvc2UoKTtcclxuXHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMoIHJldFZhbCk7XHJcblx0XHRcdHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIGEgbW9kYWwgZGlhbG9nLiBUaGUgZGlhbG9nIGlzIGNsb3NlZCB3aXRoIHRoZSBDbG9zZU1vZGFsIG1ldGhvZCBhbmQgdGhlIHBhcmFtZXRlclxyXG5cdC8vIHBhc3NlZCB0byB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgaXMgcmV0dXJuZWQgYXMgYSByZXNvbHZlZCBwcm9taXNlLlxyXG5cdHB1YmxpYyBzaG93TW9kYWwoIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBQcm9taXNlPGFueT5cclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc09wZW4oKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCBcIkRpYWxvZyBpcyBhbHJlYWR5IG9wZW5cIik7XHJcblxyXG5cdFx0bGV0IHByb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlPGFueT4oIChyZXNvbHZlKSA9PiB7dGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9IHJlc29sdmV9KTtcclxuXHRcdHRoaXMuY3JlYXRlKCB4LCB5KTtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLnNob3dNb2RhbCgpO1xyXG5cdFx0cmV0dXJuIHByb21pc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGN1cnJlbnRseSBvcGVuLlxyXG5cdHB1YmxpYyBpc09wZW4oKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRsZyAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3BlbiBhcyBtb2RlbGVzcy5cclxuXHRwdWJsaWMgaXNNb2RlbGVzcygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNPcGVuKCkgJiYgdGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyA9PT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3BlbiBhcyBtb2RhbC5cclxuXHRwdWJsaWMgaXNNb2RhbCgpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNPcGVuKCkgJiYgdGhpcy5tb2RhbFByb21pc2VSZXNvbHZlRnVuYyAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdGFydHMgbW9uaXRvcmluZyBtb3VzZSBtb3ZlbWVudHMgYW5kIG1vdmVzIHRoZSBkaWFsb2cgd2l0aCB0aGUgbW91c2UuIFRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gaW50ZW50ZWQgdG8gYmUgY2FsbGVkIGZyb20gYSBtb3VzZWRvd24gZXZlbnQgc29tZXdoZXJlIHdpdGhpbiB0aGUgcG9wdXAuXHJcblx0cHVibGljIHN0YXJ0TW92ZSggZTogTW91c2VFdmVudClcclxuXHR7XHJcblx0XHQvLyB3ZSBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIGFuZCBwcm9wYWdhdGlvbiBzbyB0aGF0IG1vdXNlIG1vdmVtZW50cyBkb24ndCBjYXVzZVxyXG5cdFx0Ly8gdGVzdCBpbiB0aGUgcG9wdXAgYW5kIG9uIHRoZSBwYWdlIHRvIGJlIHNlbGVjdGVkLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRsZXQgcmVjdCA9IHRoaXMuZGxnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dGhpcy5kcmFnUG9pbnRPZmZzZXRYID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0dGhpcy5kcmFnUG9pbnRPZmZzZXRZID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSBuZXcgY29vcmRpbmF0ZSBhbmQgYWxzbyByZW1lbWJlciB0aGVtIGluIG91ciBTbGljZSBzbyB0aGF0IHRoZXkgY2FuIGJlIHNwZWNpZmllZFxyXG5cdFx0Ly8gYXMgcHJvcGVydGllcyBpZiB0aGUgY29tcG9uZW50IGlzIHJlcmVuZGVyZWRcclxuXHRcdHRoaXMuZGxnLnN0eWxlLm1hcmdpbiA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gcmVjdC50b3AgKyBcInB4XCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArIFwicHhcIjtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdmUpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLm9uU3RvcE1vdmUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gTW92ZXMgdGhlIGRpYWxvZyB0byB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMuIFRoZSBjb29yZGluYXRlcyBhcmUgYWRqdXN0ZWQgc28gdGhhdCBhdCBsZWFzdFxyXG5cdC8vIHNvbWUgcGFydCBvZiB0aGUgZGlhbG9nIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgcmVtYWlucyB2aXNpYmxlIGluIG9yZGVyIHRvIHRoZSB1c2VyIHRvIGJlXHJcblx0Ly8gYWJsZSB0byBjb250aW51ZSBtb3ZpbmcgaXQuXHJcblx0cHVibGljIG1vdmUoIG5ld1g6IG51bWJlciwgbmV3WTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmIChuZXdYIDwgMClcclxuXHRcdFx0bmV3WCA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdYICsgMzAgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0bmV3WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzA7XHJcblxyXG5cdFx0aWYgKG5ld1kgPCAwKVxyXG5cdFx0XHRuZXdZID0gMDtcclxuXHRcdGVsc2UgaWYgKG5ld1kgKyAzMCA+IHdpbmRvdy5pbm5lckhlaWdodClcclxuXHRcdFx0bmV3WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUubGVmdCA9IG5ld1ggKyBcInB4XCI7XHJcblx0XHR0aGlzLmRsZy5zdHlsZS50b3AgPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS50b3AgPSBuZXdZICsgXCJweFwiO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPGRpYWxvZyByZWY9e3JlZiA9PiB0aGlzLmRsZyA9IHJlZn0gc3R5bGU9e3RoaXMuY3VyckRsZ1NsaWNlLnN0eWxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzcz17dGhpcy5jdXJyRGxnU2xpY2UuY2xhc3NOYW1lfSB7Li4udGhpcy5jdXJyRGxnU2xpY2UucHJvcHN9PlxyXG5cdFx0XHR7dGhpcy5jdXJyRGxnU2xpY2UuY29udGVudH1cclxuXHRcdDwvZGlhbG9nPjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBwcm92aWRlZCBlaXRoZXIgZXh0ZXJuYWxseSBvciBieSBkZXJpdmVkIGNsYXNzZXMuXHJcblx0cHJvdGVjdGVkIGdldERsZ1NsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRsZ1NsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGFuZCByZW5kZXJzIHRoZSBwb3B1cC5cclxuXHRwcml2YXRlIGNyZWF0ZSggeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZGVmaW5lIHBvc2l0aW9uaW5nIHN0eWxlcy4gSWYgeCBhbmQvb3IgeSBhcmUgdW5kZWZpbmVkLCB3ZSBjZW50ZXIgdGhlIGRpYWxvZyBob3Jpem9udGFsbHlcclxuXHRcdC8vIGFuZC9vciB2ZXJ0aWNhbGx5XHJcblx0XHRsZXQgc3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0geyBwb3NpdGlvbjogXCJmaXhlZFwiIH1cclxuXHRcdGlmICh4ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG5cdFx0XHRzdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5MZWZ0ID0gXCIwXCI7XHJcblx0XHRcdHN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHkgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0c3R5bGUudG9wID0gXCIwcHhcIjtcclxuXHRcdFx0c3R5bGUuYm90dG9tID0gXCIwcHhcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0c3R5bGUudG9wID0geSArIFwicHhcIjtcclxuXHRcdFx0c3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XHJcblx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VyckRsZ1NsaWNlID0gbWltLlNsaWNlcy5NZXJnZVNsaWNlcyggUG9wdXAuRGVmYXVsdERsZ1NsaWNlLCB0aGlzLmdldERsZ1NsaWNlKCksIHtzdHlsZX0pO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIDxkaXY+IGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgZW5kIG9mIDxib2R5Pi4gVGhlbiByZW5kZXIgb3VyIGNvbXBvbmVudCdzXHJcblx0XHQvLyBjb250ZW50IHVuZGVyIGl0LlxyXG5cdFx0dGhpcy5hbmNob3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHRoaXMuYW5jaG9yRGl2KTtcclxuXHRcdG1pbS5tb3VudFN5bmMoIHRoaXMsIHRoaXMuYW5jaG9yRGl2KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5yZW5kZXJzIGFuZCBkZXN0cm95cyB0aGUgZGlhbG9nLlxyXG5cdHByaXZhdGUgZGVzdHJveSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG5cdFx0bWltLnVubW91bnRTeW5jKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHR0aGlzLmFuY2hvckRpdi5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGV2ZW50IHRvIHByZXZlbnQgY2xvc2luZyB0aGUgZGlhbG9nIGJ5IEVzYyBrZXkuXHJcblx0cHJpdmF0ZSBvbktleURvd24gPSAoIGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpIC8vIEVzY1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHRoaXMubW92ZSggZS5jbGllbnRYIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRYLCBlLmNsaWVudFkgLSB0aGlzLmRyYWdQb2ludE9mZnNldFkpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblN0b3BNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+XHJcblx0e1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHByb3ZpZGVkIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByaXZhdGUgZGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IERsZ1NsaWNlKCk6IGFueSB7IHJldHVybiB0aGlzLkRsZ1NsaWNlOyB9XHJcblxyXG5cdC8vIEN1cnJlbnQgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgdGhhdCBjb21iaW5lIG91ciBkZWZhdWx0cyBwbHVzIHRob3NlIHByb3ZpZGVkXHJcblx0Ly8gZWl0aGVyIGV4dGVybmFseSBvciBieSBkZXJpdmVkIGNsYXNzZXMgcGx1cyB0aG9zZSByZWZsZWN0aW5nIHRoZSBkaWFsb2cgcG9zaXRpb25pbmcuXHJcblx0cHJpdmF0ZSBjdXJyRGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRWxlbWVudCB1bmRlciB3aGljaCB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkLiBUaGlzIGVsZW1lbnQgaXMgY3JlYXRlZCBhbmQgYXBwZW5kZWQgdG8gdGhlXHJcblx0Ly8gPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQgYW5kIGlzIHJlbW92ZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC5cclxuXHRwcml2YXRlIGFuY2hvckRpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdC8vLy8gUmVmZXJlbmNlIHRvIHRoZSA8ZGlhbG9nPiBlbGVtZW50IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkLlxyXG5cdC8vcHJpdmF0ZSBkbGdSZWYgPSBuZXcgbWltLlJlZjxIVE1MRGlhbG9nRWxlbWVudD4oIHJlZiA9PiB0aGlzLmRsZyA9IHJlZik7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHRwcml2YXRlIGRsZzogSFRNTERpYWxvZ0VsZW1lbnQ7XHJcblxyXG5cdC8vIFByb21pc2Ugd2hpY2ggaXMgY3JlYXRlZCBmb3IgbW9kYWwgZGlhbG9nIGFuZCB3aGljaCBpcyByZXNvbHZlZCB3aGVuIHRoZSBtb2RhbCBkaWFsb2dcclxuXHQvLyBpcyBjbG9zZWQuIFRoZSBwcm9taXNlIGlzIHJldHVybmVkIGZyb20gU2hvd01vZGFsLlxyXG5cdHByaXZhdGUgbW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmM6IChhbnkpID0+IHZvaWQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgPGRpdj4gZWxlbWVudCBjb250YWluaW5nIHRoZSBjYXB0aW9uLlxyXG5cdHByaXZhdGUgY2FwdGlvbiA9IG5ldyBtaW0uUmVmPEhUTUxFbGVtZW50PigpO1xyXG5cclxuXHQvLyBPZmZzZXRzIG9mIHRoZSBwb2ludCB3aGVyZSB0aGUgbW92ZSBzdGFydGVkIGZyb20gdGhlIGRpYWxvZyB0b3AtbGVmdCBjb3JuZXIuIFdlIHVzZSB0aGVtXHJcblx0Ly8gdG8gY2FsY3VsYXRlIHRoZSBkaWFsb2cgdG9wLWxlZnQgcG9zaXRpb24gYmFzZWQgb24gdGhlIG1vdXNlIGNvb3JkaW5hdGVzIHdoaWxlIG1vdmUgaXNcclxuXHQvLyBpbiBwcm9ncmVzcy5cclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFg6IG51bWJlcjtcclxuXHRwcml2YXRlIGRyYWdQb2ludE9mZnNldFk6IG51bWJlcjtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciA8ZGlhbG9nPiBlbGVtZW50XHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0RGxnU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge0lUcmVlLCBJVHJlZU5vZGUsIElUcmVlTm9kZUNvbnRhaW5lciwgSVRyZWVOb2RlUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCI7XHJcbmltcG9ydCB7VHJlZU5vZGVDb250YWluZXJ9IGZyb20gXCIuL1RyZWVOb2RlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuL1RyZWVOb2RlXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVHJlZSBjbGFzcyBpcyBhIGdlbmVyYWwgcHVycG9zZSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIG1pbS5Db21wb25lbnRXaXRoTG9jYWxTdHlsZXMgaW1wbGVtZW50cyBJVHJlZVxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50YWJJbmRleCA9IDA7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IG5ldyBUcmVlTm9kZUNvbnRhaW5lciggKCkgPT4gbmV3IFRyZWVOb2RlKCBudWxsLCAwLCB0aGlzKSk7XHJcblx0XHR0aGlzLmVsbVJlZiA9IG5ldyBtaW0uUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuXHRcdHRoaXMucHJlcGFyZUxvY2FsU3R5bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRhYiBpbmRleCBvZiB0aGUgdHJlZSBjb250cm9sLlxyXG5cdHB1YmxpYyBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV90YWJJbmRleDsgfVxyXG5cdHB1YmxpYyBzZXQgdGFiSW5kZXgoIHZhbDogbnVtYmVyKSB7IHRoaXMubV90YWJJbmRleCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgbm9kZXMoKTogSVRyZWVOb2RlW10geyByZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXM7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGU6IFRyZWVOb2RlID0gdGhpcy5jb250YWluZXIuYWRkTm9kZSggcGFyYW1zLCBpbmRleCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHRyZXR1cm4gc3ViTm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRwdWJsaWMgcmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVOb2RlKCBpbmRleCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyByZW1vdmVBbGxOb2RlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQWxsTm9kZXMoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuZXhwYW5kQWxsKClcclxuXHR9XHJcblxyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5jb2xsYXBzZUFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlIG9yIG51bGwgaWYgbm8gbm9kZSBpcyBzZWxlY3RlZC5cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdGVkTm9kZSgpOiBJVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5tX3NlbGVjdGVkTm9kZTsgfVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaXYgcmVmPXt0aGlzLmVsbVJlZn0gdGFiaW5kZXg9e3RoaXMudGFiSW5kZXh9IGNsYXNzPXt0aGlzLmNzc0NsYXNzVHJlZX0ga2V5ZG93bj17dGhpcy5vbktleURvd259PlxyXG5cdFx0XHR7dGhpcy5jb250YWluZXJ9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIilcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHRcdGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIilcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpXHJcblx0XHRcdHRoaXMuZXhwYW5kT3JTZWxlY3REb3duKCB0aGlzLm1fc2VsZWN0ZWROb2RlKTtcclxuXHRcdGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKVxyXG5cdFx0XHR0aGlzLmNvbGxhcHNlT3JTZWxlY3RVcCggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlIGRvd24gZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdERvd24oIG5vZGU6IFRyZWVOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBuZXh0Tm9kZSA9IHRoaXMuZmluZERvd24oIG5vZGUpO1xyXG5cdFx0aWYgKG5leHROb2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXh0Tm9kZS5zZWxlY3QoKTtcclxuXHRcdFx0bmV4dE5vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSB1cCBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgc2VsZWN0VXAoIG5vZGU6IFRyZWVOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBwcmV2Tm9kZSA9IHRoaXMuZmluZFVwKCBub2RlKTtcclxuXHRcdGlmIChwcmV2Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0cHJldk5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdHByZXZOb2RlLnNjcm9sbEludG9WaWV3KCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgY29sbGFwc2VkLCBleHBhbmRzIGl0LiBJZiB0aGUgbm9kZSBpcyBhbHJlYWR5IGV4cGFuZGVkLCBzZWxlY3RzIHRoZSBmaXJzdFxyXG5cdC8vIGNoaWxkIG5vZGUuIElmIHRoZSBub2RlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgc2VsZWN0cyB0aGUgbmV4dCBub2RlIGRvd24uXHJcblx0cHJpdmF0ZSBleHBhbmRPclNlbGVjdERvd24oIG5vZGU6IFRyZWVOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChub2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3Tm9kZSA9IG5vZGUuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0XHRcdG5ld05vZGUuc2VsZWN0KCk7XHJcblx0XHRcdFx0bmV3Tm9kZS5zY3JvbGxJbnRvVmlldyggZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRub2RlLmV4cGFuZCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNlbGVjdERvd24oIG5vZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJZiB0aGUgbm9kZSBpcyBleHBhbmRlZCwgY29sbGFwc2VzIGl0OyBvdGhlcndpc2UsIHNlbGVjdHMgdGhlIG5vZGUncyBwYXJlbnQuXHJcblx0cHJpdmF0ZSBjb2xsYXBzZU9yU2VsZWN0VXAoIG5vZGU6IFRyZWVOb2RlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChub2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0bm9kZS5jb2xsYXBzZSgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNlbGVjdFVwKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluZHMgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kRG93biggbm9kZTogVHJlZU5vZGUsIHNraXBFeHBhbmRlZFN1Yk5vZGVzOiBib29sZWFuID0gZmFsc2UpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoc2tpcEV4cGFuZGVkU3ViTm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0aWYgKG5vZGUuaW5kZXggPCBjb250YWluZXIubm9kZXMubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHRyZXR1cm4gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggKyAxXTtcclxuXHRcdFx0ZWxzZSBpZiAobm9kZS5tX3BhcmVudClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZS5tX3BhcmVudCwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChub2RlLmlzRXhwYW5kZWQgJiYgbm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdFx0bm9kZS5jb250YWluZXIubm9kZXNbMF0uc2VsZWN0KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmZpbmREb3duKCBub2RlLCB0cnVlKTtcclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluZHMgbm9kZSB1cCBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZFVwKCBub2RlOiBUcmVlTm9kZSk6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0aWYgKCFub2RlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXNbMF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChub2RlLmluZGV4ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAobm9kZS5tX3BhcmVudClcclxuXHRcdFx0XHRyZXR1cm4gbm9kZS5tX3BhcmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IG5vZGUubV9wYXJlbnQgPyBub2RlLm1fcGFyZW50LmNvbnRhaW5lciA6IHRoaXMuY29udGFpbmVyO1xyXG5cdFx0XHRsZXQgcHJldk5vZGUgPSBjb250YWluZXIubm9kZXNbbm9kZS5pbmRleCAtIDFdO1xyXG5cdFx0XHRsZXQgbGFzdEV4cGFuZGVkTm9kZSA9IHRoaXMuZmluZExhc3RFeHBhbmRlZE5vZGUoIHByZXZOb2RlKTtcclxuXHRcdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogcHJldk5vZGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgd2hpY2ggaXMgdGhlIGxhc3QgZXhwYW5kZWQgZGVzY2VuZGFuZCBvZiB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRMYXN0RXhwYW5kZWROb2RlKCBjdXJyTm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghY3Vyck5vZGUgfHwgY3Vyck5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMCB8fCAhY3Vyck5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRsZXQgbGFzdENoaWxkID0gY3Vyck5vZGUuY29udGFpbmVyLm5vZGVzW2N1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGgtMV07XHJcblx0XHRsZXQgbGFzdEV4cGFuZGVkTm9kZSA9IHRoaXMuZmluZExhc3RFeHBhbmRlZE5vZGUoIGxhc3RDaGlsZCk7XHJcblx0XHRyZXR1cm4gbGFzdEV4cGFuZGVkTm9kZSA/IGxhc3RFeHBhbmRlZE5vZGUgOiBsYXN0Q2hpbGQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcHJlcGFyZUxvY2FsU3R5bGVzKClcclxuXHR7XHJcblx0XHR0aGlzLmNzc0NsYXNzVHJlZSA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVUcmVlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZVwiLCBcIi50cmVlKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgRG9kZ2VyQmx1ZVwiLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6IFwiVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCIsXHJcblx0XHRcdFx0Ym94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHRcdFx0XHRtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcImF1dG9cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZSA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZVwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGUgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGVcIiwgXCIudHJlZS1ub2RlKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlQ29udGVudCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50XCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnQgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtY29udGVudFwiLCBcIi50cmVlLW5vZGUtY29udGVudCgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luTGVmdDogXCIycHhcIixcclxuXHRcdFx0XHRwYWRkaW5nOiBcIjFweFwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50SG92ZXIgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtY29udGVudDpob3ZlclwiLCBcIi50cmVlLW5vZGUtY29udGVudCgqKTpob3ZlclwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Y3lhblwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlLWNvbnRlbnQtc2VsZWN0ZWRcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudFNlbGVjdGVkID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQtc2VsZWN0ZWRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQtc2VsZWN0ZWQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0Ym9yZGVyOiBcIjFweCBkb3R0ZWRcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiRG9kZ2VyQmx1ZVwiLFxyXG5cdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGVJY29uID0gdGhpcy5kZWNvcmF0ZU5hbWUoIFwidHJlZS1ub2RlLWljb25cIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlSWNvbiA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1pY29uXCIsIFwiLnRyZWUtbm9kZS1pY29uKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXHJcblx0XHRcdFx0d2lkdGg6IFwiMWVtXCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjFlbVwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NTdWJub2RlcyA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtc3Vibm9kZXNcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVTdWJOb2RlcyA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtc3Vibm9kZXNcIiwgXCIudHJlZS1zdWJub2RlcygqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luTGVmdDogXCIxNnB4XCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRhYiBpbmRleCBvZiB0aGUgdHJlZSBjb250cm9sLlxyXG5cdHByaXZhdGUgbV90YWJJbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgb2Ygbm9kZXMuXHJcblx0cHJpdmF0ZSBjb250YWluZXI6IFRyZWVOb2RlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBDdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIG1fc2VsZWN0ZWROb2RlOiBUcmVlTm9kZSA9IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSB0cmVlLlxyXG5cdHB1YmxpYyBlbG1SZWY6IG1pbS5SZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuXHQvLyBDU1MgcnVsZXMgdXNlZCBieSB0aGUgVHJlZSBhbmQgVHJlZU5vZGUgY29udHJvbHNcclxuXHRwcml2YXRlIGNzc1J1bGVUcmVlOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZTogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50OiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUNvbnRlbnRIb3ZlcjogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50U2VsZWN0ZWQ6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlSWNvbjogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZVN1Yk5vZGVzOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIENTUyBsb2NhbCBjbGFzcyBuYW1lc1xyXG5cdHB1YmxpYyBjc3NDbGFzc1RyZWU6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUNvbnRlbnQ6IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NOb2RlQ29udGVudFNlbGVjdGVkOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUljb246IHN0cmluZztcclxuXHRwdWJsaWMgY3NzQ2xhc3NTdWJub2Rlczogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlIGV4dGVuZHMgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHR0YWJJbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIG5vZGVzLlxyXG5cdHJlYWRvbmx5IG5vZGVzOiBJVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gY3VycmVudGx5IHNlbGVjdGVkIG5vZGVcclxuXHRyZWFkb25seSBzZWxlY3RlZE5vZGU6IElUcmVlTm9kZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZVBhcmFtcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBwYXJhbWV0ZXJzIG9mIGEgdHJlZSBub2RlIHRoYXQgY2FuIGJlIHNldC9jaGFuZ2VkXHJcbi8vIGV4dGVybmFsbHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVBhcmFtc1xyXG57XHJcblx0Y29udGVudDogYW55O1xyXG5cdGljb24/OiBUcmVlTm9kZUljb25QYXJhbXM7XHJcblx0dGV4dENvbG9yPzogc3RyaW5nO1xyXG5cdGJnQ29sb3I/OiBzdHJpbmc7XHJcblx0aXRhbGljPzogYm9vbGVhbjtcclxuXHRib2xkPzogYm9vbGVhbjtcclxuXHRjdXN0b21DbGFzcz86IHN0cmluZztcclxuXHRkYXRhPzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlSWNvblBhcmFtcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBwYXJhbWV0ZXJzIG9mIGFuIGljb24gb2YgYSB0cmVlIG5vZGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBUcmVlTm9kZUljb25QYXJhbXMgPSB7Y2xhc3M6IHN0cmluZ30gfCB7aW1nOiBzdHJpbmd9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVRyZWVOb2RlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2luZ2xlIG5vZGUgaW4gdGhlIHRyZWUgaGllcmFyY2h5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUgZXh0ZW5kcyBJVHJlZU5vZGVQYXJhbXMsIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVHJlZSB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25ncy5cclxuXHRyZWFkb25seSB0cmVlOiBJVHJlZTtcclxuXHJcblx0Ly8gUGFyZW50IHRyZWUgbm9kZSBvciBudWxsIGZvciB0b3AtbGV2ZWwgKHJvb3QpIG5vZGVzLlxyXG5cdHJlYWRvbmx5IHBhcmVudDogSVRyZWVOb2RlO1xyXG5cclxuXHQvLyAwLWJhc2VkIGxldmVsIG9mIHRoZSBub2RlIGluIHRoZSBhbmNlc3RyYWwgaGllcmFyY2h5LlxyXG5cdHJlYWRvbmx5IGxldmVsOiBudW1iZXI7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRyZWFkb25seSBpbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRyZWFkb25seSBzdWJOb2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGV4cGFuZGVkLlxyXG5cdHJlYWRvbmx5IGlzRXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEV4cGFuZHMgdGhlIG5vZGUgc28gdGhhdCBpdHMgc3ViLW5vZGVzIGJlY29tZSB2aXNpYmxlLlxyXG5cdGV4cGFuZCgpOiB2b2lkO1xyXG5cclxuXHQvLyBDb2xhcHNlcyB0aGUgbm9kZSBoaWRpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHRjb2xsYXBzZSgpOiB2b2lkO1xyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlLlxyXG5cdHNlbGVjdCgpOiB2b2lkO1xyXG5cclxuXHQvLyBVbnNlbGVjdHMgdGhlIG5vZGUuXHJcblx0dW5zZWxlY3QoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHJlZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlQ29udGFpbmVyXHJcbntcclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGU7XHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIG5vZGVzLlxyXG5cdHJlbW92ZUFsbE5vZGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdGV4cGFuZEFsbCgpOiB2b2lkO1xyXG5cclxuXHQvLyBDb2xhcHNlcyBhbGwgbm9kZXMuXHJcblx0Y29sbGFwc2VBbGwoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIjtcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyB0cmVlIGNvbnRyb2wgaW5zdGFuY2VcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyZWUoKTogSVRyZWVcclxue1xyXG5cdHJldHVybiBuZXcgVHJlZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtcywgVHJlZU5vZGVJY29uUGFyYW1zfSBmcm9tIFwiLi9UcmVlQXBpXCI7XHJcbmltcG9ydCB7VHJlZU5vZGVDb250YWluZXJ9IGZyb20gXCIuL1RyZWVOb2RlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgbm9kZSB3aXRoaW4gYSB0cmVlIGNvbnRyb2wuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50IGltcGxlbWVudHMgSVRyZWVOb2RlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcGFyZW50OiBUcmVlTm9kZSwgbGV2ZWw6IG51bWJlciwgdHJlZTogVHJlZSA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1fcGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5tX3RyZWUgPSBwYXJlbnQgIT09IG51bGwgPyBwYXJlbnQubV90cmVlIDogdHJlZTtcclxuXHRcdHRoaXMubV9sZXZlbCA9IGxldmVsO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoIHRoaXMubm9kZUZhY3RvcnkpO1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubV9pc1NlbGVjdGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZXMgb2Ygc3ViLW5vZGVzIG9mIHRoaXMgbm9kZS5cclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5ID0gKCk6IFRyZWVOb2RlID0+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBUcmVlTm9kZSggdGhpcywgdGhpcy5tX2xldmVsICsgMSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cHVibGljIGdldCB0cmVlKCk6IElUcmVlIHsgcmV0dXJuIHRoaXMubV90cmVlOyB9XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IHBhcmVudCgpOiBJVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5tX3BhcmVudDsgfVxyXG5cclxuXHQvLyAwLWJhc2VkIGxldmVsIG9mIHRoZSBub2RlIGluIHRoZSBhbmNlc3RyYWwgaGllcmFyY2h5LlxyXG5cdHB1YmxpYyBnZXQgbGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubV9sZXZlbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1faW5kZXg7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRleCBvZiB0aGUgbm9kZSBpbiB0aGUgbGlzdCBvZiBpdHMgcGFyZW50J3Mgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzZXQgaW5kZXgoIHZhbDogbnVtYmVyKSB7IHRoaXMubV9pbmRleCA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVycy5cclxuXHRwdWJsaWMgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9jb250ZW50OyB9XHJcblx0cHVibGljIHNldCBjb250ZW50KCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY29udGVudCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaWNvbigpOiBUcmVlTm9kZUljb25QYXJhbXMgeyByZXR1cm4gdGhpcy5tX2ljb247IH1cclxuXHRwdWJsaWMgc2V0IGljb24oIHZhbDogVHJlZU5vZGVJY29uUGFyYW1zKSB7IHRoaXMubV9pY29uID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCB0ZXh0Q29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV90ZXh0Q29sb3I7IH1cclxuXHRwdWJsaWMgc2V0IHRleHRDb2xvciggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX3RleHRDb2xvciA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgYmdDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tX2JnQ29sb3I7IH1cclxuXHRwdWJsaWMgc2V0IGJnQ29sb3IoIHZhbDogc3RyaW5nKSB7IHRoaXMubV9iZ0NvbG9yID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBpdGFsaWMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1faXRhbGljOyB9XHJcblx0cHVibGljIHNldCBpdGFsaWMoIHZhbDogYm9vbGVhbikgeyB0aGlzLm1faXRhbGljID0gdmFsOyB0aGlzLnVwZGF0ZU1lKCk7IH1cclxuXHJcblx0cHVibGljIGdldCBib2xkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2JvbGQ7IH1cclxuXHRwdWJsaWMgc2V0IGJvbGQoIHZhbDogYm9vbGVhbikgeyB0aGlzLm1fYm9sZCA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9jdXN0b21DbGFzczsgfVxyXG5cdHB1YmxpYyBzZXQgY3VzdG9tQ2xhc3MoIHZhbDogc3RyaW5nKSB7IHRoaXMubV9jdXN0b21DbGFzcyA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkgeyByZXR1cm4gdGhpcy5tX2RhdGE7IH1cclxuXHRwdWJsaWMgc2V0IGRhdGEoIHZhbDogYW55KSB7IHRoaXMubV9kYXRhID0gdmFsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5vZGUgaXMgZXhwYW5kZWQuXHJcblx0cHVibGljIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2lzRXhwYW5kZWQ7IH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIHRoZSBub2RlIHNvIHRoYXQgaXRzIHN1Yi1ub2RlcyBiZWNvbWUgdmlzaWJsZS5cclxuXHRwdWJsaWMgZXhwYW5kKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMCAmJiB0aGlzLm1faXNFeHBhbmRlZCAhPT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgdGhlIG5vZGUgaGlkaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIGNvbGxhcHNlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMCAmJiB0aGlzLm1faXNFeHBhbmRlZCAhPT0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RzIHRoZSBub2RlLlxyXG5cdHB1YmxpYyBzZWxlY3QoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm1faXNTZWxlY3RlZCAhPT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gdW5zZWxlY3QgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlIChpZiBhbnkpXHJcblx0XHRcdGlmICh0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSAhPSBudWxsKVxyXG5cdFx0XHRcdHRoaXMubV90cmVlLm1fc2VsZWN0ZWROb2RlLnVuc2VsZWN0KCk7XHJcblxyXG5cdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSA9IHRoaXM7XHJcblx0XHRcdHRoaXMubV9pc1NlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbnNlbGVjdHMgdGhlIG5vZGUuXHJcblx0cHVibGljIHVuc2VsZWN0KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5tX2lzU2VsZWN0ZWQgIT09IGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZSA9IG51bGw7XHJcblx0XHRcdHRoaXMubV9pc1NlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBzdWJOb2RlcygpOiBJVHJlZU5vZGVbXSB7IHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2RlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgbm9kZS4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyBiZXR3ZWVuIHplcm8gYW5kIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcyxcclxuXHQvLyB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhpcyBpbmRleC4gSWYgdGhlIGluZGV4IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbGVzcyB0aGFuXHJcblx0Ly8gemVybyBvciBncmVhdGVyIHRoZW4gdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLCBpdCBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxyXG5cdHB1YmxpYyBhZGROb2RlKCBwYXJhbXM6IElUcmVlTm9kZVBhcmFtcywgaW5kZXg/OiBudW1iZXIpOiBJVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgc3ViTm9kZTogVHJlZU5vZGUgPSB0aGlzLmNvbnRhaW5lci5hZGROb2RlKCBwYXJhbXMsIGluZGV4KTtcclxuXHJcblx0XHQvLyB1cGRhdGUgb25seSBpZiB0aGlzIHdhcyB0aGUgZmlyc3Qgc3ViLW5vZGVcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHJcblx0XHRyZXR1cm4gc3ViTm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgbm9kZXMgbGlzdC5cclxuXHRwdWJsaWMgcmVtb3ZlTm9kZSggaW5kZXg6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkTGVuZ3RoID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoO1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBvbmx5IGlmIHRoaXMgd2FzIHRoZSBsYXN0IHN1Yi1ub2RlXHJcblx0XHRpZiAob2xkTGVuZ3RoID09PSAxICYmIHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRMZW5ndGggPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAob2xkTGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQWxsTm9kZXMoKTtcclxuXHRcdFx0dGhpcy5tX2lzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmV4cGFuZCgpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuZXhwYW5kQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb2xsYXBzZSgpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciB0aGUgbm9kZSBpcyBub3Qgd2l0aGluIHRoZSB2aWV3cG9ydCBhbmQgc2Nyb2xscyBpdCBpbnRvIHZpZXcgYWxpbmdpbmcgaXRcclxuXHQvLyB3aXRoIHRoZSB1cHBlciBvciBsb3dlciBlZGdlIG9mIHRoZSB0cmVlIGNvbnRhaW5lci5cclxuXHRwdWJsaWMgc2Nyb2xsSW50b1ZpZXcoIGFsaWduVXA6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLm1fdHJlZS5lbG1SZWYuciB8fCAhdGhpcy5jb250ZW50RWxtUmVmLnIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBnZXQgdHJlZSBhbmQgbm9kZSBib3VuZGluZyByZWN0XHJcblx0XHRsZXQgcmNUcmVlOiBDbGllbnRSZWN0ID0gdGhpcy5tX3RyZWUuZWxtUmVmLnIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNOb2RlOiBDbGllbnRSZWN0ID0gdGhpcy5jb250ZW50RWxtUmVmLnIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNOb2RlLmJvdHRvbSA8PSByY1RyZWUuYm90dG9tICYmIHJjTm9kZS50b3AgPj0gcmNUcmVlLnRvcClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY29udGVudEVsbVJlZi5yLnNjcm9sbEludG9WaWV3KCBhbGlnblVwKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuXHRcdFx0e3RoaXMucmVuZGVyTm9kZSgpfVxyXG5cdFx0XHR7dGhpcy5yZW5kZXJTdWJOb2RlcygpfVxyXG5cdFx0PC9taW0uRnJhZ21lbnQ+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyTm9kZSgpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZXhwYW5kZXJDbGFzc05hbWU6IHN0cmluZyA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiB0aGlzLm1faXNFeHBhbmRlZCA/IFwiZmEtY2FyZXQtZG93blwiIDogXCJmYS1jYXJldC1yaWdodFwiO1xyXG5cclxuXHRcdGxldCBpY29uQ29udGVudDogYW55O1xyXG5cdFx0aWYgKHRoaXMubV9pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoXCJjbGFzc1wiIGluIHRoaXMubV9pY29uKVxyXG5cdFx0XHRcdGljb25Db250ZW50ID0gPHNwYW4gY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZUljb24gKyBcIiBcIiArIHRoaXMubV9pY29uLmNsYXNzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfSAvPjtcclxuXHRcdFx0ZWxzZSBpZiAoXCJpbWdcIiBpbiB0aGlzLm1faWNvbilcclxuXHRcdFx0XHRpY29uQ29udGVudCA9IDxpbWcgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZUljb259IHNyYz17dGhpcy5tX2ljb24uaW1nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgY29udGVudENsYXNzOiBzdHJpbmcgPSB0aGlzLm1faXNTZWxlY3RlZCA/IHRoaXMubV90cmVlLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA6IHRoaXMubV90cmVlLmNzc0NsYXNzTm9kZUNvbnRlbnQ7XHJcblx0XHRpZiAodGhpcy5tX2N1c3RvbUNsYXNzKVxyXG5cdFx0XHRjb250ZW50Q2xhc3MgKz0gXCIgXCIgKyB0aGlzLm1fY3VzdG9tQ2xhc3M7XHJcblxyXG5cdFx0bGV0IGNvbnRlbnRTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUgPSB7fTtcclxuXHRcdGlmICh0aGlzLm1fdGV4dENvbG9yKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuY29sb3IgPSB0aGlzLm1fdGV4dENvbG9yO1xyXG5cdFx0aWYgKHRoaXMubV9iZ0NvbG9yKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5tX2JnQ29sb3I7XHJcblx0XHRpZiAodGhpcy5tX2l0YWxpYylcclxuXHRcdFx0Y29udGVudFN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcblx0XHRpZiAodGhpcy5tX2JvbGQpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzTm9kZX0+XHJcblx0XHRcdDxpIGNsYXNzPXtcImZhIGZhLWZ3IFwiICsgZXhwYW5kZXJDbGFzc05hbWV9IGNsaWNrPXt0aGlzLm9uRXhwYW5kZXJDbGlja2VkfSAvPlxyXG5cdFx0XHR7aWNvbkNvbnRlbnR9XHJcblx0XHRcdDxzcGFuIHJlZj17dGhpcy5jb250ZW50RWxtUmVmfSBkcmFnU291cmNlIGNsYXNzPXtjb250ZW50Q2xhc3N9IHN0eWxlPXtjb250ZW50U3R5bGV9XHJcblx0XHRcdFx0XHRjbGljaz17dGhpcy5vbkNsaWNrfSBkYmxjbGljaz17dGhpcy5vbkRibENsaWNrfT57dGhpcy5tX2NvbnRlbnR9PC9zcGFuPlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyU3ViTm9kZXMoKTogYW55XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5tX3RyZWUuY3NzQ2xhc3NTdWJub2Rlc30gc3R5bGU9e3tkaXNwbGF5OnRoaXMubV9pc0V4cGFuZGVkID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gaWNvbiBvciBuYW1lLlxyXG5cdHByaXZhdGUgb25DbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gaWNvbiBvciBuYW1lLlxyXG5cdHByaXZhdGUgb25EYmxDbGljayA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3ViTm9kZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlKCkgOiB0aGlzLmV4cGFuZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlcmNsaWNrcyBvbiB0aGUgZXhwYW5kZXIgaWNvblxyXG5cdHByaXZhdGUgb25FeHBhbmRlckNsaWNrZWQgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLm1faXNFeHBhbmRlZCA/IHRoaXMuY29sbGFwc2UoKSA6IHRoaXMuZXhwYW5kKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRyZWUgY29udHJvbCB0byB3aGljaCB0aGlzIG5vZGUgYmVsb25nc1xyXG5cdHB1YmxpYyBtX3RyZWU6IFRyZWU7XHJcblxyXG5cdC8vIFBhcmVudCBub2RlXHJcblx0cHVibGljIG1fcGFyZW50OiBUcmVlTm9kZTtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRlbnRhdGlvbiBsZXZlbCBvZiB0aGUgYmxvY2tcclxuXHRwdWJsaWMgbV9sZXZlbDogbnVtYmVyO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGVudGF0aW9uIGxldmVsIG9mIHRoZSBibG9ja1xyXG5cdHB1YmxpYyBtX2luZGV4OiBudW1iZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBvZiBzdWItbm9kZXMuXHJcblx0cHVibGljIGNvbnRhaW5lcjogVHJlZU5vZGVDb250YWluZXI7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBleHBhbmRlZCAodGhhdCBpcyBzdWItbm9kZXMgYXJlIHZpc2libGUpLlxyXG5cdHB1YmxpYyBtX2lzRXhwYW5kZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cclxuXHRwdWJsaWMgbV9pc1NlbGVjdGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgbm9kZSdzIGNvbnRlbnQuXHJcblx0cHVibGljIGNvbnRlbnRFbG1SZWY6IG1pbS5SZWY8SFRNTFNwYW5FbGVtZW50PjtcclxuXHJcblx0Ly8gTm9kZSBwYXJhbWV0ZXJzXHJcblx0cHJpdmF0ZSBtX2NvbnRlbnQ6IHN0cmluZztcclxuXHRwcml2YXRlIG1faWNvbjogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHByaXZhdGUgbV90ZXh0Q29sb3I6IHN0cmluZztcclxuXHRwcml2YXRlIG1fYmdDb2xvcjogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9pdGFsaWM6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2JvbGQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSBtX2N1c3RvbUNsYXNzOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2RhdGE6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWVOb2RlQ29udGFpbmVyIGNsYXNzIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMgdGhhdCBhcmUgZGlzcGxheWVkIGFuZFxyXG4vLyBoaWRkZW4gdG9nZXRoZXIuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250YWluZXIgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRjb25zdHJ1Y3Rvciggbm9kZUZhY3Rvcnk6ICgpID0+IFRyZWVOb2RlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IFtdO1xyXG5cdFx0dGhpcy5ub2RlRmFjdG9yeSA9IG5vZGVGYWN0b3J5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0bGV0IG5vZGU6IFRyZWVOb2RlID0gdGhpcy5ub2RlRmFjdG9yeSgpO1xyXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IG51bGwgfHwgaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuaW5kZXggPSBjdXJyTGVuZ3RoO1xyXG5cdFx0XHR0aGlzLm5vZGVzLnB1c2goIG5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gaW5kZXg7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMCwgbm9kZSk7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgaW5kZXhlcyBvZiB0aGUgbm9kZXMgYWZ0ZXIgdGhlIGluc2VydGVkIG9uZVxyXG5cdFx0XHRmb3IoIGxldCBpID0gaW5kZXggKyAxOyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdHRoaXNbaV0uaW5kZXggPSBpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGUuY29udGVudCA9IHBhcmFtcy5jb250ZW50O1xyXG5cdFx0bm9kZS5pY29uID0gcGFyYW1zLmljb247XHJcblx0XHRub2RlLnRleHRDb2xvciA9IHBhcmFtcy50ZXh0Q29sb3I7XHJcblx0XHRub2RlLmJnQ29sb3IgPSBwYXJhbXMuYmdDb2xvcjtcclxuXHRcdG5vZGUuaXRhbGljID0gcGFyYW1zLml0YWxpYztcclxuXHRcdG5vZGUuYm9sZCA9IHBhcmFtcy5ib2xkO1xyXG5cdFx0bm9kZS5jdXN0b21DbGFzcyA9IHBhcmFtcy5jdXN0b21DbGFzcztcclxuXHRcdG5vZGUuZGF0YSA9IHBhcmFtcy5kYXRhO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIHN1Yi1ub2RlIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3ViLW5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gY3Vyckxlbmd0aClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInJlcGxhY2VOb2RlOiBpbnZhbGlkIGluZGV4IFwiICsgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSByZW1vdmVkIG9uZVxyXG5cdFx0Zm9yKCBsZXQgaSA9IGluZGV4OyBpIDwgY3Vyckxlbmd0aDsgaSsrKVxyXG5cdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoY3Vyckxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubm9kZXMuc3BsaWNlKCAwLCBjdXJyTGVuZ3RoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgZXhwYW5kQWxsKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBub2RlIG9mIHRoaXMubm9kZXMpXHJcblx0XHR7XHJcblx0XHRcdG5vZGUuZXhwYW5kQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmNvbGxhcHNlQWxsKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5ub2RlcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQXJyYXkgb2YgVHJlZU5vZGUgb2JqZWN0c1xyXG5cdHB1YmxpYyBub2RlczogVHJlZU5vZGVbXTtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjcmVhdGVzIGluc3RhbmNlIG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwcml2YXRlIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhlIFNjcm9sbEF4aXMgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBheGlzIG9mIGRhdGEsIHdoaWNoIGNvbnNpc3RzIG9mIGl0ZW1zLCBhbmQgcGVyZm9ybXNcclxuICogY2FsY3VsYXRpb25zIGR1cmluZyBzY3JvbGxpbmcgYmFjayBhbmQgZm9ydGggYWxvbmcgdGhlIGF4aXMuIFRoZSBTY3JvbGxBeGlzIGNsYXNzIGl0c2VsZiBkb2Vzbid0XHJcbiAqIGhhdmUgYW55IHZpc3VhbCByZXByZXNlbnRhdGlvbiBhbmQgb25seSBzZXJ2ZXMgYXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGFsZ29yaXRobSB0aGF0XHJcbiAqIGhlbHBzIHZpcnR1YWxpemUgc2Nyb2xsaW5nIC0gdGhhdCBpcyBkaXNwbGF5IG9ubHkgc21hbGwgc3Vic2V0IG9mIGRhdGEgaXRlbXMgYW5kIGFkZC9yZW1vdmVcclxuICogaXRlbXMgYXMgc2Nyb2xsaW5nIGhhcHBlbnMuXHJcbiAqIFxyXG4gKiBWQXhpcyBhc3N1bWVzIHRoZSB1c2Ugb2YgMyBET00gZWxlbWVudHM6XHJcbiAqXHQtIGZyYW1lIC0gdGhlIFwib3V0ZXJcIiBlbGVtZW50IHdoaWNoIGRpc3BsYXlzIHRoZSBzY3JvbGxiYXIgd2hlbiBuZWNlc3NhcnlcclxuICpcdC0gd2FsbCAtIHRoZSBcImlubmVyXCIgZWxlbWVudCB3aGljaCBoYXMgdGhlIHNpemUgb2YgdGhlIGVudGlyZSBwb3NzaWJsZSBzZXQgb2YgaXRlbXMuIEl0IGlzXHJcbiAqXHRcdG5lZWRlZCB0byBtYWtlIHNjcm9sbGluZyBtb3JlLW9yLWxlc3MgYWNjdXJhdGUuXHJcbiAqXHQtIHN1YnNldCAtIHRoZSBlbGVtZW50IHRoYXQgZGlzcGxheXMgb25seSBpdGVtcyB0aGF0IGZpdCB0aGUgZnJhbWUgcGx1cyBhIGNlcnRhaW4gbnVtYmVyIG9mXHJcbiAqXHRcdGFkZGl0aW9uYWwgaXRlbXMgZm9yIFwib3ZlcnNjYW5cIi5cclxuICogXHJcbiAqIFZBeGlzIGNhbGN1bGF0ZXMgYXZlcmFnZSBpdGVtIHNpemUgYnkgZGl2aWRpbmcgdGhlIHNpemUgb2YgdGhlIGRhdGEgYnkgdGhlIG51bWJlciBvZiBpdGVtcy5cclxuICogVGhlIGF2ZXJhZ2UgdmFsdWUgaXMgcmVjYWxjdWxhdGVkIGV2ZXJ5IHRpbWUgaXRlbXMgYXJlIGFkZGVkIHRvIG9yIGRlbGV0ZWQgZnJvbSB0aGUgc3Vic2V0IHRodXNcclxuICogYWNjb21vZGF0aW5nIGl0ZW1zIHdpdGggZGlmZmVyZW4gc2l6ZXMuIEJhc2VkIG9uIHRoZSBhdmVyYWdlIHZhbHVlIHRoZSB3YWxsIGVsZW1lbnQgaXMgc2l6ZWRcclxuICogdG8gaW5jbHVkZSB0aGUgZW50aXJlIGRhdGEgc2V0LCB3aGljaCBoZWxwcyB0byBhY2hpZXZlIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZSBzY3JvbGxcclxuICogcG9zaXRpb25pbmcuXHJcbiAqXHJcbiAqIFZBeGlzIHVzZXMgbWluaW11bSwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhbiBudW1iZXIgb2YgaXRlbXMgb24gYm90aCBzaWRlcyBvZiB0aGUgZnJhbWUgYW5kXHJcbiAqIG1ha2VzIHN1cmUgdGhhdCB0aGUgYWN0dWFsIG51bWJlciBvZiBpdGVtcyBpcyB3aXRoaW4gdGhlc2UgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMuIER1cmluZ1xyXG4gKiBzY3JvbGxpbmcsIGlmIHRoZSBhY3R1YWwgb3ZlcnNjYW4gbnVtYmVyIGJlY29tZXMgbGVzcyB0aGFuIHRoZSBtaW5pbXVtLCBuZXcgaXRlbXMgYXJlIGFkZGVkOyBpZlxyXG4gKiBpdCBiZWNvbWVzIG1vcmUgdGhlbiB0aGUgbWF4aW11bSwgaXRlbXMgYXJlIGRlbGV0ZWQuIFdoZW4gaXRlbXMgYXJlIGFkZGVkIHRoZXkgYXJlIGFkZGVkIHVwIHRvXHJcbiAqIHRoZSBvcHRpbWFsIG92ZXJzY2FuIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxBeGlzXHJcbntcclxuXHQvLyBNaW5pbWFsIG51bWJlciBvZiBhZGRpdGlvbmFsIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGZhbGxzIHVuZGVyIHRoaXMgbnVtYmVyLCBuZXcgaXRlbXMgYXJlIGFkZGVkLlxyXG5cdHByaXZhdGUgbWluT3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gT3B0aW1hbCBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0LiBXaGVuIGFkZGluZyBuZXcgaXRlbXMgb3IgcmVtb3ZpbmdcclxuXHQvLyBleGlzdGluZyBpdGVtcyB3ZSB3YW50IHRvIHJpY2ggdGhpcyBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIG92ZXJzY2FuLlxyXG5cdHByaXZhdGUgb3B0T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblx0Ly8gTWF4aW11bSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgb24gZWFjaCBzaWRlIG9mIHRoZSBwb3J0IHRoYXQgc2hvdWxkIGJlIG1haW50YWluZWQuIFdoZW5cclxuXHQvLyBkdXJpbmcgc2Nyb2xsaW5nIHRoZSBudW1iZXIgb2Ygb3ZlcnNjYW4gaXRlbXMgZXhjZWVkcyB0aGlzIG51bWJlciwgaXRlbXMgYXJlIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBtYXhPdmVyc2NhbjogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtaW5PdmVyc2NhbjogbnVtYmVyLCBvcHRPdmVyc2NhbjogbnVtYmVyLCBtYXhPdmVyc2NhbjogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMubWluT3ZlcnNjYW4gPSBtaW5PdmVyc2NhbjtcclxuXHRcdHRoaXMub3B0T3ZlcnNjYW4gPSBvcHRPdmVyc2NhbjtcclxuXHRcdHRoaXMubWF4T3ZlcnNjYW4gPSBtYXhPdmVyc2NhbjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvY2N1cGllZCBieSB0aGUgY3VycmVudCBkYXRhIHNldCByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGUgZnJhbWVcclxuXHQgKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbXZvdmUgaXRlbXMuIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgd2hlbjpcclxuXHQgKlx0LSBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBkYXRhIHNldCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBzaXplIG9mIHRoZSBmcmFtZSBlbGVtZW50IGNoYW5nZXMuXHJcblx0ICpcdC0gVGhlIGZyYW1lIGVsZW1lbnQgaXMgc2Nyb2xsZWQuXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRvdGFsQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBlbnRpcmUgZGF0YSBzZXRcclxuXHQgKiBAcGFyYW0gZmlyc3RJdGVtIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGl0ZW1Db3VudCBOdW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBzdWJzZXRcclxuXHQgKiBAcGFyYW0gZnJhbWVTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXplbHMgb2YgdGhlIGZyYW1lIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gd2FsbFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgd2FsbCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHN1YnNldFNpemUgQ3VycmVudCBzaXplIGluIHBpeGVscyBvZiB0aGUgc3Vic2V0IGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gc2Nyb2xsUG9zIEN1cnJlbnQgb3IgbmV3IHNjcm9sbCBwb3NpdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgbWVhc3VyZSggdG90YWxDb3VudDogbnVtYmVyLCBvbGRGaXJzdDogbnVtYmVyLCBvbGRDb3VudDogbnVtYmVyLCBvbGRBdmdJdGVtU2l6ZTogbnVtYmVyLFxyXG5cdFx0ZnJhbWVTaXplOiBudW1iZXIsIHdhbGxTaXplOiBudW1iZXIsIHN1YnNldFNpemU6IG51bWJlciwgc2Nyb2xsUG9zOiBudW1iZXIpOiBTY3JvbGxBeGlzQWN0aW9uXHJcblx0e1xyXG5cdFx0Ly8gcHJlcGFyZSB0aGUgb2JqZWN0IHRvIGJlIHJldHVybmVkXHJcblx0XHRsZXQgcmV0QWN0aW9uID0gbmV3IFNjcm9sbEF4aXNBY3Rpb24oKTtcclxuXHRcdGlmICh0b3RhbENvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gcmV0QWN0aW9uO1xyXG5cdFx0ZWxzZSBpZiAob2xkQ291bnQgPT09IDApXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpdGVtQ291bnQgY2Fubm90IGJlIHplcm9cIik7XHJcblxyXG5cdFx0bGV0IG9sZExhc3QgPSBvbGRGaXJzdCArIG9sZENvdW50IC0gMTtcclxuXHRcdGxldCB0b3RhbExhc3QgPSB0b3RhbENvdW50IC0gMTtcclxuXHJcblx0XHQvLyBjYWxjdWxhdGUgbmV3IGF2ZXJhZ2UgaXRlbSBzaXplIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGN1cnJlbnQgc3Vic2V0XHJcblx0XHQvLyBhbmQgdGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgZGF0YSBlbGVtZW50LlxyXG5cdFx0bGV0IG5ld0F2Z0l0ZW1TaXplID0gc3Vic2V0U2l6ZSAvIG9sZENvdW50O1xyXG5cdFx0aWYgKG9sZEF2Z0l0ZW1TaXplKVxyXG5cdFx0XHRuZXdBdmdJdGVtU2l6ZSA9IChuZXdBdmdJdGVtU2l6ZSArIG9sZEF2Z0l0ZW1TaXplKSAvIDI7XHJcblxyXG5cdFx0Ly8gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBhbmQgdGhlIGF2ZXJhZ2Ugc2l6ZSBlc3RpbWF0ZSB3aGF0IGl0ZW1zIHdvdWxkIGZpdCBpbnNpZGVcclxuXHRcdC8vIHRoZSBmcmFtZSBlbGVtZW50LlxyXG5cdFx0bGV0IGZpdEZpcnN0ID0gTWF0aC5taW4oIE1hdGguZmxvb3IoIHNjcm9sbFBvcyAvIG5ld0F2Z0l0ZW1TaXplKSwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBmaXRMYXN0ID0gTWF0aC5taW4oIE1hdGguY2VpbCggKHNjcm9sbFBvcyArIGZyYW1lU2l6ZSkgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblxyXG5cdFx0Ly8gZ2V0IG5ldyBmaXJzdCBhbmQgbGFzdCAgaW5kaWNlcyB3aXRoIG1pbmltYWwsIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW5cclxuXHRcdGxldCBtaW5PdmVyc2NhbkZpcnN0ID0gTWF0aC5tYXgoIGZpdEZpcnN0IC0gdGhpcy5taW5PdmVyc2NhbiwgMCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMub3B0T3ZlcnNjYW4sIDApXHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWF4T3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG1pbk92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5taW5PdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHRcdGxldCBvcHRPdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMub3B0T3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgbWF4T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm1heE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdC8vIHRoZXNlIHdpbGwgYmUgaW5kaWNlcyB0aGF0IHdlIHdpbGwgYWN0dWFsbHkgbmVlZCBhZnRlciBjb21wYXJpbmcgdGhlIG5ldyByYW5nZVxyXG5cdFx0Ly8gd2l0aCB0aGUgb2xkIG9uZVxyXG5cdFx0bGV0IG5ld0ZpcnN0OiBudW1iZXI7XHJcblx0XHRsZXQgbmV3TGFzdDogbnVtYmVyO1xyXG5cclxuXHRcdGlmIChtaW5PdmVyc2NhbkZpcnN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdG5ld0ZpcnN0ID0gb3B0T3ZlcnNjYW5GaXJzdDtcclxuXHRcdGVsc2UgaWYgKG1pbk92ZXJzY2FuRmlyc3QgPiBvbGRGaXJzdCAmJiBtaW5PdmVyc2NhbkZpcnN0IDwgb2xkTGFzdClcclxuXHRcdFx0bmV3Rmlyc3QgPSBNYXRoLm1heCggbWF4T3ZlcnNjYW5GaXJzdCwgb2xkRmlyc3QpO1xyXG5cdFx0ZWxzZSBpZiAobWF4T3ZlcnNjYW5GaXJzdCA+IG9sZExhc3QpXHJcblx0XHRcdG5ld0ZpcnN0ID0gb3B0T3ZlcnNjYW5GaXJzdDtcclxuXHRcdGVsc2UgaWYgKG9sZExhc3QgLSBtYXhPdmVyc2NhbkZpcnN0ID4gb3B0T3ZlcnNjYW5GaXJzdCAtIG9sZExhc3QpXHJcblx0XHRcdG5ld0ZpcnN0ID0gbWF4T3ZlcnNjYW5GaXJzdDtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3Rmlyc3QgPSBvcHRPdmVyc2NhbkZpcnN0O1xyXG5cclxuXHRcdGlmIChtaW5PdmVyc2Nhbkxhc3QgPiBvbGRMYXN0KVxyXG5cdFx0XHRuZXdMYXN0ID0gb3B0T3ZlcnNjYW5MYXN0O1xyXG5cdFx0ZWxzZSBpZiAobWluT3ZlcnNjYW5MYXN0IDwgb2xkTGFzdCAmJiBtaW5PdmVyc2Nhbkxhc3QgPiBvbGRGaXJzdClcclxuXHRcdFx0bmV3TGFzdCA9IE1hdGgubWluKCBtYXhPdmVyc2Nhbkxhc3QsIG9sZExhc3QpO1xyXG5cdFx0ZWxzZSBpZiAobWF4T3ZlcnNjYW5MYXN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdG5ld0xhc3QgPSBvcHRPdmVyc2Nhbkxhc3Q7XHJcblx0XHRlbHNlIGlmIChtYXhPdmVyc2Nhbkxhc3QgLSBvbGRGaXJzdCA+IG9sZEZpcnN0IC0gb3B0T3ZlcnNjYW5MYXN0KVxyXG5cdFx0XHRuZXdMYXN0ID0gbWF4T3ZlcnNjYW5MYXN0O1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdMYXN0ID0gb3B0T3ZlcnNjYW5MYXN0O1xyXG5cclxuXHRcdGlmIChuZXdGaXJzdCA+IG5ld0xhc3QpXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBXcm9uZyBTY3JvbGxBeGlzIGNhbGN1bGF0aW9uOiBuZXdGaXJzdCAnJHtuZXdGaXJzdH0nIGlzIGdyZWF0ZXIgdGhhbiBuZXdMYXN0ICcke25ld0xhc3R9J2ApXHJcblxyXG5cdFx0Ly8gc2V0IHdoYXQgd2UgYWxyZWFkeSBrbm93IGludG8gdGhlIHJldHVybiBvYmplY3RcclxuXHRcdHJldEFjdGlvbi5uZXdGaXJzdCA9IG5ld0ZpcnN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0xhc3QgPSBuZXdMYXN0O1xyXG5cdFx0cmV0QWN0aW9uLm5ld0F2Z0l0ZW1TaXplID0gbmV3QXZnSXRlbVNpemU7XHJcblx0XHRyZXRBY3Rpb24ubmV3V2FsbFNpemUgPSBNYXRoLmNlaWwoIHRvdGFsQ291bnQgKiBuZXdBdmdJdGVtU2l6ZSk7XHJcblx0XHRyZXRBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ID0gTWF0aC5jZWlsKCBuZXdGaXJzdCAqIG5ld0F2Z0l0ZW1TaXplKTtcclxuXHJcblx0XHQvLyBub3cgdGhhdCB3ZSBoYXZlIHRoZSBpbmRpY2VzIG9mIHRoZSBpdGVtcyB3ZSB3YW50LCBkZXRlcm1pbmUgd2hhdCBpdGVtcyBzaG91bGQgYmVcclxuXHRcdC8vIGFkZGVkL3JlbW92ZWQgaW4gdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZFxyXG5cdFx0aWYgKG5ld0ZpcnN0ID09IG9sZEZpcnN0ICYmIG5ld0xhc3QgPT0gb2xkTGFzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG5ldyBkYXRhc2V0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgb25lLCBkb24ndCBhZGQvcmVtb3ZlIGFueSBpdGVtc1xyXG5cdFx0XHRyZXRBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Rmlyc3QgPiBvbGRMYXN0IHx8IG5ld0xhc3QgPCBvbGRGaXJzdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBkYXRhc2V0cyBkb24ndCBpbnRlcnNlY3QsIHJlbW92ZSBhbGwgZXhpc3RpbmcgYW5kIGFkZCBhbGxcclxuXHRcdFx0Ly8gbmV3IGl0ZW1zLlxyXG5cdFx0XHRyZXRBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5ld0ZpcnN0IDwgb2xkRmlyc3QpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBuZWVkIHRvIGFkZCBzb21lIGl0ZW1zIGF0IHRoZSBiZWdpbm5pbmdcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPSBvbGRGaXJzdCAtIG5ld0ZpcnN0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG5ld0ZpcnN0ID4gb2xkRmlyc3QpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBuZWVkIHRvIHJlbW92ZSBzb21lIGl0ZW1zIGF0IHRoZSBiZWdpbm5pbmdcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPSBuZXdGaXJzdCAtIG9sZEZpcnN0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobmV3TGFzdCA8IG9sZExhc3QpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBuZWVkIHRvIHJlbW92ZSBzb21lIGl0ZW1zIGF0IHRoZSBlbmRcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID0gb2xkTGFzdCAtIG5ld0xhc3Q7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3TGFzdCA+IG9sZExhc3QpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBuZWVkIHRvIGFkZCBzb21lIGl0ZW1zIGF0IHRoZSBlbmRcclxuXHRcdFx0XHRyZXRBY3Rpb24uY291bnRUb0FkZEF0RW5kID0gbmV3TGFzdCAtIG9sZExhc3Q7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmV0QWN0aW9uO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjcm9sbEF4aXNBY3Rpb24gY2xhc3MgcmVwcmVzZW50cyB0aGUgYWN0aW9uKHMpIHRoYXQgc2hvdWxkIGJlIGRvbmUgYWZ0ZXIgdGhlIFNjcm9sbEF4aXNcclxuICogcGVyZm9ybWVkIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZnJhbWUsIHdhbGwgYW5kIGRhdGEuIFRoZSBhY3Rpb25zXHJcbiAqIGFyZSBpbnN0cnVjdGlvbnMgdG8gYWRkIG9yIHJlbW92ZSBpdGVtcyBhbmQgdG8gc2V0IHdhbGwgc2l6ZSBhbmQgZGF0YSBvZmZzZXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXhpc0FjdGlvblxyXG57XHJcblx0Ly8gTmV3IGF2ZWFyYWdlIGl0ZW0gc2l6ZVxyXG5cdG5ld0F2Z0l0ZW1TaXplOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOZXcgc2l6ZSB0aGF0IHNob3VsZCBiZSBzZXQgdG8gdGhlIHdhbGwgZWxlbWVudFxyXG5cdG5ld1dhbGxTaXplOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOZXcgb2Zmc2V0IG9mIHRoZSBzdWJzZXQgZWxlbWVudCBmcm9tIHRoZSB3YWxsIGVsZW1lbnRcclxuXHRuZXdTdWJzZXRPZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBzdWJzZXRcclxuXHRuZXdGaXJzdDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3QgaXRlbSB0aGF0IHNob3VsZCBiZSBpbiB0aGUgc3Vic2V0XHJcblx0bmV3TGFzdDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNhbGxlciBzaG91bGQgbmVpdGhlciBhZGQgbm9yIHJlbW92ZSBhbnkgaXRlbXMuXHJcblx0bm9BZGRSZW1vdmVOZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNhbGxlciBzaG91bGQgcmVtb3ZlIGFsbCBleGlzdGluZyBpdGVtcy4gSWYgdGhpcyBmbGFnIGlzIHNldFxyXG5cdC8vIHRvIHRydWUsIHRoZW4gdGhlIGNhbGxlciBzaG91bGQgcmVtb3ZlIGFsbCBleGlzdGluZyBpdGVtcyBhbmQgdGhlbiBhZGQgYWxsIGl0ZW1zIGZyb21cclxuXHQvLyBuZXdGaXJzdCB0byBuZXdMYXN0XHJcblx0bmVlZWRUb1JlbW92ZUFsbEl0ZW1zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byByZW1vdmUgYXQgdGhlIGJlZ2lubmluZy4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gb2xkRmlyc3RcclxuXHQvLyB0byBuZXdGaXJzdC0xLlxyXG5cdGNvdW50VG9SZW1vdmVBdFN0YXJ0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlIGF0IHRoZSBlbmQuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG5ld0xhc3QrMVxyXG5cdC8vIHRvIG9sZExhc3QuXHJcblx0Y291bnRUb1JlbW92ZUF0RW5kOiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gYWRkIGF0IHRoZSBiZWdpbm5pbmcuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG5ld0ZpcnN0XHJcblx0Ly8gdG8gb2xkRmlyc3QtMS5cclxuXHRjb3VudFRvQWRkQXRTdGFydDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIGFkZCBhdCB0aGUgZW5kLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBvbGRMYXN0KzFcclxuXHQvLyB0byBuZXdMYXN0LlxyXG5cdGNvdW50VG9BZGRBdEVuZDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuaW1wb3J0IHtTY3JvbGxBeGlzLCBTY3JvbGxBeGlzQWN0aW9ufSBmcm9tIFwiLi9TY3JvbGxBeGlzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWVEFibGVDZWxsRGF0YSBpbnRlcmZhY2UgcmVwcmVzZW50cyBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBjZWxsIHRoYXQgaXMgcHJvdmlkZWRcclxuICogYnkgYSBjYWxsZXIgd2hlbiByZXF1ZXNlZCBieSBWVGFibGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZUYWJsZUNlbGxEYXRhXHJcbntcclxuXHQvKiogQ29udGVudCBvZiB0aGUgY2VsbCAqL1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHJcblx0LyoqIE51bWJlciBvZiByb3dzIHRoaXMgY2VsbCBzaG91bGQgc3Bhbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4gKi9cclxuXHRyb3dTcGFuPzogbnVtYmVyO1xyXG5cclxuXHQvKiogTnVtYmVyIG9mIGNvbHVtbnMgdGhpcyBjZWxsIHNob3VsZCBzcGFuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLiAqL1xyXG5cdGNvbFNwYW4/OiBudW1iZXI7XHJcblxyXG5cdC8qKiBTdHlsZSB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdHN0eWxlPzogbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdC8qKiBDbGFzcyB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgPHRkPmAgZWxlbWVudCBjb250YWluaW5nIHRoZSBjZWxsLiAqL1xyXG5cdGNsYXNzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWVGFibGVQcm9wc1xyXG57XHJcblx0LyoqIE51bWJlciBvZiByb3dzIGluIHRoZSBlbnRpcmUgZGF0YXNldCAqL1xyXG5cdHRvdGFsUm93Q291bnQ6IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBlbnRpcmUgZGF0YXNldCAqL1xyXG5cdHRvdGFsQ29sQ291bnQ6IG51bWJlcjtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbGJhY2sgdGhyb3VnaCB3aGljaCBWVGFibGUgcmVxdWVzdHMgY2VsbCBkYXRhLiBcclxuXHQgKi9cclxuXHRnZXRDZWxsQ2FsbGJhY2s6IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IGFueTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIlZpcnR1YWxpemVkXCIgdGFibGUgdGhhdCByZW5kZXJzIG9ubHkgYSBzdWJzZXQgb2YgYSBkYXRhc2V0IGFuZCBjaGFuZ2VzIHRoaXMgc3Vic2V0XHJcbiAqIGFzIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBhbmQgZm9ydGguXHJcbiAqIFxyXG4gKiBWVGFibGUgdXNlcyB0aGUgZm9sbG93aW5nIDMgRE9NIGVsZW1lbnRzOlxyXG4gKiAgLSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgYDxkaXY+YCBlbGVtZW50IHdoaWNoIGRpc3BsYXlzIHRoZSBzY3JvbGxiYXJzIHdoZW4gbmVjZXNzYXJ5XHJcbiAqICAtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGA8ZGl2PmAgZWxlbWVudCB3aGljaCBoYXMgdGhlIHNpemUgb2YgdGhlIGVudGlyZSBwb3NzaWJsZSB0YWJsZS4gSXQgaXNcclxuICogICAgbmVlZGVkIHRvIG1ha2Ugc2Nyb2xsaW5nIG1vcmUtb3ItbGVzcyBhY2N1cmF0ZS5cclxuICogIC0gdGFibGUgLSB0aGUgYDx0YWJsZT5gIGVsZW1lbnQgdGhhdCBjb250YWlucyBvbmx5IHJvd3MgYW5kIGNvbHVtbnMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXNcclxuICogICAgYSBjZXJ0YWluIG51bWJlciBmb3IgXCJvdmVyc2NhblwiLlxyXG4gKiBcclxuICogVlRhYmxlIGNhbGN1bGF0ZXMgYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGggYnkgZGl2aWRpbmcgdGhlIHNpemUgb2YgdGhlIHRhYmxlXHJcbiAqIGJ5IHRoZSBudW1iZXIgb2Ygcm93cy9jb2x1bW5zLiBUaGVzZSBhdmVyYWdlIHZhbHVlcyBhcmUgcmVjYWxjdWxhdGVkIGV2ZXJ5IHRpbWUgcm93cyBhbmRcclxuICogY29sdW1ucyBhcmUgYWRkZWQgb3IgZGVsZXRlZCBmcm9tIHRoZSB0YWJsZS4gQmFzZWQgb24gdGhlc2UgYXZlcmFnZSB2YWx1ZXMgdGhlIHdhbGwgZWxlbWVudFxyXG4gKiBpcyBzaXplZCB0byBpbmNsdWRlIHRoZSBlbnRpcmUgZGF0YXNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsaW5nXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWVGFibGUgdXNlcyBtaW5pbXVtLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zIG9uIGFsbCBzaWRlcyBvZlxyXG4gKiB0aGUgZnJhbWUgYW5kIG1ha2VzIHN1cmUgdGhhdCB0aGUgYWN0dWFsIG51bWJlciBvZiByb3dzL2NvbHVtbnMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kXHJcbiAqIG1heGltdW0gdmFsdWVzLiBEdXJpbmcgc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSxcclxuICogbmV3IGNlbGxzIGFyZSBhZGRlZCBhbmQgaWYgaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0gY2VsbHMgYXJlIGRlbGV0ZWQgc28gdGhhdCB0aGVcclxuICogYWN0dWFsIG92ZXJzY2FuIG51bWJlciBpcyBlcXVhbCB0byB0aGUgYXZlcmFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWVGFibGUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50PFZUYWJsZVByb3BzPlxyXG57XHJcblx0Ly8gT3ZlcnNjYW4gdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuXHRwcml2YXRlIG1pblJvd092ZXJzY2FuID0gMztcclxuXHRwcml2YXRlIG9wdFJvd092ZXJzY2FuID0gNTtcclxuXHRwcml2YXRlIG1heFJvd092ZXJzY2FuID0gMTA7XHJcblx0cHJpdmF0ZSBtaW5Db2xPdmVyc2NhbiA9IDM7XHJcblx0cHJpdmF0ZSBvcHRDb2xPdmVyc2NhbiA9IDU7XHJcblx0cHJpdmF0ZSBtYXhDb2xPdmVyc2NhbiA9IDEwO1xyXG5cclxuXHQvLyBDdXJyZW50IGRhdGFzZXQgcmVwcmVzZW50ZWQgYnkgcm93IGNvbXBvbmVudHMuXHJcblx0cHJpdmF0ZSByb3dzOiBWUm93W107XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAwIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBmaXJzdFJvdzogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCByb3cgaW4gdGhlIGRhdGFzZXQgb3IgLTEgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGxhc3RSb3c6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGZpcnN0IGNvbHVtbiBpbiB0aGUgY3VycmVudCBkYXRhc2V0IG9yIDAgaWYgdGhlIGRhdGFzZXQgaXMgZW1wdHlcclxuXHRwcml2YXRlIGZpcnN0Q29sOiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IGNvbHVtbiBpbiB0aGUgY3VycmVudCBkYXRhc2V0IG9yIC0xIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBsYXN0Q29sOiBudW1iZXI7XHJcblxyXG5cdC8vIENvdW50cyBvZiByb3dzIGFuZCBjb2x1bW5zXHJcblx0cHJpdmF0ZSBnZXQgcm93Q291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdFJvdyAtIHRoaXMuZmlyc3RSb3cgKyAxIH1cclxuXHRwcml2YXRlIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0Q29sIC0gdGhpcy5maXJzdENvbCArIDEgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IFJvd3MoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlyc3RSb3d9IC0gJHt0aGlzLmxhc3RSb3d9YDsgfVxyXG5cdHB1YmxpYyBnZXQgQ29scygpOiBzdHJpbmcgeyByZXR1cm4gYCR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH1gOyB9XHJcblxyXG5cdC8vIFNpemUgb2YgdGhlIGVudGlyZSB0YWJsZSBiYXNlZCBvbiBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIGNvbHVtbiB3aWR0aC4gVGhpcyBiZWNvbWVzIHRoZVxyXG5cdC8vIHNpemUgb2YgdGhlIHdhbGwuXHJcblx0cHJpdmF0ZSB3YWxsSGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSB3YWxsV2lkdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGF0ZXN0IGNhbGN1bGF0ZWQgYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGhcclxuXHRwcml2YXRlIGF2Z1Jvd0hlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYXZnQ29sV2lkdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGF0ZXN0IHNjcm9sbGluZyBwb3NpdGlvbnNcclxuXHRwcml2YXRlIGxhdGVzdFNjcm9sbFRvcDogbnVtYmVyO1xyXG5cdHByaXZhdGUgbGF0ZXN0U2Nyb2xsTGVmdDogbnVtYmVyO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGZyYW1lIHRoYXQgaGFzIHRoZSBzY29sbGJhcnNcclxuXHRwcml2YXRlIGZyYW1lOiBIVE1MRGl2RWxlbWVudDtcclxuXHRwcml2YXRlIGZyYW1lUmVmID0gKHI6IEhUTUxEaXZFbGVtZW50KSA9PiB0aGlzLmZyYW1lID0gcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSB3YWxsIHRoYXQgaXMgYmlnIGVub3VnaCB0byBob2xkIGVudGlyZSBkYXRhc2V0XHJcblx0cHJpdmF0ZSB3YWxsOiBIVE1MRGl2RWxlbWVudDtcclxuXHRwcml2YXRlIHdhbGxSZWYgPSAocjogSFRNTERpdkVsZW1lbnQpID0+IHRoaXMud2FsbCA9IHI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgdGFibGUgdGhhdCBkaXNwbGF5cyB0aGUgcGFydGlhbCBkYXRhc2V0XHJcblx0cHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuXHRwcml2YXRlIHRhYmxlUmVmID0gKHI6IEhUTUxUYWJsZUVsZW1lbnQpID0+IHRoaXMudGFibGUgPSByO1xyXG5cclxuXHQvLyBPYmplY3RzIHRoYXQgZGVhbCB3aXRoIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHNjcm9sbGluZ1xyXG5cdHByaXZhdGUgdkF4aXM6IFNjcm9sbEF4aXM7XHJcblx0cHJpdmF0ZSBoQXhpczogU2Nyb2xsQXhpcztcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFZUYWJsZVByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5hdmdSb3dIZWlnaHQgPSAwO1xyXG5cdFx0dGhpcy5hdmdDb2xXaWR0aCA9IDA7XHJcblxyXG5cdFx0Ly8gbmVnYXRpdmUgdmFsdWVzIGluZGljYXRlIHRoYXQgd2UgaGF2ZW4ndCBtZWFzdXJlZCBhbnkgc2l6ZXMgeWV0LlxyXG5cdFx0dGhpcy5sYXRlc3RTY3JvbGxUb3AgPSAtMTtcclxuXHRcdHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCA9IC0xO1xyXG5cclxuXHRcdC8vIHNldCBpbml0aWFsIHNpemUgb2YgdGhlIHdhbGwgZWxlbWVudCBiYXNlZCBvbiBzb21lIGhhcmQtY29kZWQgdmFsdWVzLiBJdCB3aWxsIGJlXHJcblx0XHQvLyBjaGFuZ2VkIGFzIHNvb24gYXMgd2UgcmVuZGVyIGFuZCBzdGFydCBtZWFzdXJpbmcgb3VyIGVsZW1lbnRzXHJcblx0XHR0aGlzLndhbGxIZWlnaHQgPSB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgKiAyNTtcclxuXHRcdHRoaXMud2FsbFdpZHRoID0gdGhpcy5wcm9wcy50b3RhbENvbENvdW50ICogODA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucm93cyA9IFtdO1xyXG5cclxuXHRcdC8vIGZpbGwgaW4gaW5pdGlhbCBkYXRhc2V0XHJcblx0XHRsZXQgcm93Q291bnQgPSB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgPCAxMCA/IHRoaXMucHJvcHMudG90YWxSb3dDb3VudCA6IDEwO1xyXG5cdFx0bGV0IGNvbENvdW50ID0gdGhpcy5wcm9wcy50b3RhbENvbENvdW50IDwgMTAgPyB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQgOiAxMDtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRmb3IoIGxldCBqID0gMDsgaiA8IGNvbENvdW50OyBqKyspXHJcblx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cclxuXHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIGRhdGFzZXQgc2l6ZVxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IDA7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSByb3dDb3VudCAtIDE7XHJcblx0XHR0aGlzLmZpcnN0Q29sID0gMDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGNvbENvdW50IC0gMTtcclxuXHJcblx0XHR0aGlzLnZBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluUm93T3ZlcnNjYW4sIHRoaXMub3B0Um93T3ZlcnNjYW4sIHRoaXMubWF4Um93T3ZlcnNjYW4pXHJcblx0XHR0aGlzLmhBeGlzID0gbmV3IFNjcm9sbEF4aXMoIHRoaXMubWluQ29sT3ZlcnNjYW4sIHRoaXMub3B0Q29sT3ZlcnNjYW4sIHRoaXMubWF4Q29sT3ZlcnNjYW4pXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gc2NoZWR1bGUgdGhlIG1lYXN1cmluZyBmdW5jdGlvbmFsaXR5LCB3aGljaCB3aWxsIGRldGVybWluZyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbW92ZSBjZWxscy5cclxuXHRcdHRoaXMuc2l0ZS5zY2hlZHVsZUNhbGwoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBmcmFtZVN0eWxlID0geyB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6XCJhdXRvXCIgfTtcclxuXHRcdGxldCB3YWxsU3R5bGUgPSB7XHJcblx0XHRcdHdpZHRoOiBgJHt0aGlzLndhbGxXaWR0aH1weGAsXHJcblx0XHRcdGhlaWdodDogYCR7dGhpcy53YWxsSGVpZ2h0fXB4YCxcclxuXHRcdFx0b3ZlcmZsb3c6XCJub25lXCIsXHJcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuXHRcdH07XHJcblx0XHRsZXQgdGFibGVTdHlsZSA9IHtcclxuXHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0Ym9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0Ym9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5mcmFtZVJlZn0gc3R5bGU9e2ZyYW1lU3R5bGV9IHNjcm9sbD17dGhpcy5vblNjcm9sbH0+XHJcblx0XHRcdDxkaXYgcmVmPXt0aGlzLndhbGxSZWZ9IHN0eWxlPXt3YWxsU3R5bGV9PlxyXG5cdFx0XHRcdDx0YWJsZSByZWY9e3RoaXMudGFibGVSZWZ9IHN0eWxlPXt0YWJsZVN0eWxlfT5cclxuXHRcdFx0XHRcdHt0aGlzLnJvd3N9XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdCAqIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgd2UgbmVlZCB0byBhZGQvcmVtb3ZlIGNlbGxzLiBJZiB3ZSBkbywgd2Ugc2NoZWR1bGUgcmUtcmVuZGVyaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbWVhc3VyZUFuZFVwZGF0ZSA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMucm93Q291bnQgPT09IDAgfHwgdGhpcy5jb2xDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBmcmFtZVJlY3QgPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHdhbGxSZWN0ID0gdGhpcy53YWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHRhYmxlUmVjdCA9IHRoaXMudGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMubGF0ZXN0U2Nyb2xsVG9wICE9IHRoaXMuZnJhbWUuc2Nyb2xsVG9wKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyBoZWlnaHQ6IHNjcm9sbCB0b3AgPSAke3RoaXMuZnJhbWUuc2Nyb2xsVG9wfSwgcm93czogJHt0aGlzLnJvd0NvdW50fSwgYCArXHJcblx0XHRcdC8vIFx0XHRcdFx0YHdhbGwgaGVpZ2h0ID0gJHt3YWxsUmVjdC5oZWlnaHR9LCB0YWJsZSBoZWlnaHQgPSAke3RhYmxlUmVjdC5oZWlnaHR9YCk7XHJcblxyXG5cdFx0XHRsZXQgdkF4aXNBY3Rpb24gPSB0aGlzLnZBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxSb3dDb3VudCwgdGhpcy5maXJzdFJvdywgdGhpcy5yb3dDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z1Jvd0hlaWdodCwgZnJhbWVSZWN0LmhlaWdodCwgd2FsbFJlY3QuaGVpZ2h0LCB0YWJsZVJlY3QuaGVpZ2h0LCB0aGlzLmZyYW1lLnNjcm9sbFRvcCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgcm93IGhlaWdodCA9ICR7dkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemV9YCk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciB0aGUgbmV3IGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgdGhlIGxhdGVzdCB2ZXJ0aWNhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5sYXRlc3RTY3JvbGxUb3AgPSB0aGlzLmZyYW1lLnNjcm9sbFRvcDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgcm93cyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCF2QXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVJvd3MoIHZBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgaGVpZ2h0IGFuZCBzdWJzZXQgdmVydGljYWwgb2Zmc2V0IGlmIG5lZWRlZFxyXG5cdFx0XHRpZiAodkF4aXNBY3Rpb24ubmV3V2FsbFNpemUgIT0gd2FsbFJlY3QuaGVpZ2h0IHx8IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QudG9wIC0gd2FsbFJlY3QudG9wKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWUoICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGFibGUuc3R5bGUudG9wID0gdkF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLmhlaWdodCA9IHZBeGlzQWN0aW9uLm5ld1dhbGxTaXplICsgXCJweFwiO1xyXG5cdFx0XHRcdH0sIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbExlZnQgIT0gdGhpcy5mcmFtZS5zY3JvbGxMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYE1lYXN1cmluZyB3aWR0aDogc2Nyb2xsIGxlZnQgPSAke3RoaXMuZnJhbWUuc2Nyb2xsTGVmdH0sIGNvbHM6ICR7dGhpcy5jb2xDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIHdpZHRoID0gJHt3YWxsUmVjdC53aWR0aH0sIHRhYmxlIHdpZHRoID0gJHt0YWJsZVJlY3Qud2lkdGh9YCk7XHJcblxyXG5cdFx0XHRsZXQgaEF4aXNBY3Rpb24gPSB0aGlzLmhBeGlzLm1lYXN1cmUoIHRoaXMucHJvcHMudG90YWxDb2xDb3VudCwgdGhpcy5maXJzdENvbCwgdGhpcy5jb2xDb3VudCxcclxuXHRcdFx0XHR0aGlzLmF2Z0NvbFdpZHRoLCBmcmFtZVJlY3Qud2lkdGgsIHdhbGxSZWN0LndpZHRoLCB0YWJsZVJlY3Qud2lkdGgsIHRoaXMuZnJhbWUuc2Nyb2xsTGVmdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyggYEVzdGltYXRlZDogd2FsbCB3aWR0aCA9ICR7aEF4aXNBY3Rpb24ubmV3V2FsbFNpemV9LCBjb2wgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIGNvbHVtbiB3aWR0aCBhbmQgdGhlIGxhdGVzdCBob3Jpem9udGFsIHNjcm9sbGluZyBwb3NpdGlvblxyXG5cdFx0XHR0aGlzLmF2Z0NvbFdpZHRoID0gaEF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsTGVmdCA9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdDtcclxuXHJcblx0XHRcdC8vIGFkZC9yZW1vdmUgY29sdW1ucyBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKCFoQXhpc0FjdGlvbi5ub0FkZFJlbW92ZU5lZWRlZClcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvbHMoIGhBeGlzQWN0aW9uKTtcclxuXHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0aW5nIG9mIHdhbGwgd2lkdGggYW5kIHN1YnNldCBob3Jpem9udGFsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LndpZHRoIHx8IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCAhPSB0YWJsZVJlY3QubGVmdCAtIHdhbGxSZWN0LmxlZnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmNhbGxNZSggKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50YWJsZS5zdHlsZS5sZWZ0ID0gaEF4aXNBY3Rpb24ubmV3U3Vic2V0T2Zmc2V0ICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0dGhpcy53YWxsLnN0eWxlLndpZHRoID0gaEF4aXNBY3Rpb24ubmV3V2FsbFNpemUgKyBcInB4XCI7XHJcblx0XHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyByb3dzIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlIHZlcnRpY2FsXHJcblx0ICogc2Nyb2xsaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlUm93cyggYXhpc0FjdGlvbjogU2Nyb2xsQXhpc0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggYFVwZGF0aW5nIHJvd3MgZnJvbSAke3RoaXMuZmlyc3RSb3d9IC0gJHt0aGlzLmxhc3RSb3d9IHRvICR7YXhpc0FjdGlvbi5uZXdGaXJzdH0gLSAke2F4aXNBY3Rpb24ubmV3TGFzdH1gKTtcclxuXHJcblx0XHRpZiAoYXhpc0FjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucm93cyA9IFtdO1xyXG5cdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgYWxsICR7dGhpcy5yb3dDb3VudH0gZXhpc3Rpbmcgcm93c2ApO1xyXG5cclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGkgPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblx0XHJcblx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBlbmRcclxuXHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IHJvd3NgKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIHRoaXMucm93Q291bnQgLSBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCwgYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSByb3dzIGZyb20gYm90dG9tYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IHJvd3MgZnJvbSB0b3BgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmxhc3RSb3cgKyAxOyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0XHRcdHRoaXMucm93cy5wdXNoKCB2cm93KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IHJvd3MgdG8gYm90dG9tYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93IC0gMTsgaSA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpLS0pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2w7IGogPD0gdGhpcy5sYXN0Q29sOyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgcm93IGF0IHRoZSBzdGFydFxyXG5cdFx0XHRcdFx0dGhpcy5yb3dzLnNwbGljZSggMCwgMCwgdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnR9IHJvd3MgdG8gdG9wYCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Um93ID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdFJvdyA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVtb3ZlcyBjb2x1bW5zIGFzIGluZGljYXRlZCBieSB0aGUgZ2l2ZW4gU2Nyb2xsQXhpc0FjdGlvbiBkZWFsaW5nIHdpdGggdGhlXHJcblx0ICogaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB1cGRhdGVDb2xzKCBheGlzQWN0aW9uOiBTY3JvbGxBeGlzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCBgVXBkYXRpbmcgY29sdW1ucyBmcm9tICR7dGhpcy5maXJzdENvbH0gLSAke3RoaXMubGFzdENvbH0gdG8gJHtheGlzQWN0aW9uLm5ld0ZpcnN0fSAtICR7YXhpc0FjdGlvbi5uZXdMYXN0fWApO1xyXG5cclxuXHRcdGlmIChheGlzQWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0dnJvdy5yZW1vdmVBbGxDZWxscygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cclxuXHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMuY29sQ291bnR9IGV4aXN0aW5nIGNvbHNgKTtcclxuXHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLm5ld0xhc3QgLSBheGlzQWN0aW9uLm5ld0ZpcnN0ICsgMX0gY29sc2ApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0RW5kKCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCk7XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kfSBjb2xzIGZyb20gcmlnaHRgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgdnJvdyBvZiB0aGlzLnJvd3MpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dnJvdy5yZW1vdmVDZWxsc0F0U3RhcnQoIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnQpO1xyXG5cdFx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCAke2F4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0U3RhcnR9IGNvbHMgZnJvbSBsZWZ0YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdzsgaSA8PSB0aGlzLmxhc3RSb3c7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IHRoaXMucm93c1tpIC0gdGhpcy5maXJzdFJvd107XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5sYXN0Q29sICsgMTsgaiA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmR9IGNvbHMgdG8gcmlnaHRgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMuZmlyc3RDb2wgLSAxOyBqID49IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7IGotLSlcclxuXHRcdFx0XHRcdFx0dnJvdy5pbnNlcnRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHR2cm93LnJlcXVlc3RVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydH0gY29scyB0byBsZWZ0YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZpcnN0Q29sID0gYXhpc0FjdGlvbi5uZXdGaXJzdDtcclxuXHRcdHRoaXMubGFzdENvbCA9IGF4aXNBY3Rpb24ubmV3TGFzdDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvblNjcm9sbCA9ICggZTogRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnNjaGVkdWxlQ2FsbCggdGhpcy5tZWFzdXJlQW5kVXBkYXRlLCB0cnVlKTtcclxuXHJcblx0XHQvLyBzZXRUaW1lb3V0KCB0aGlzLm1lYXN1cmVBbmRVcGRhdGUsIDApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBWUm93IGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y2VsbHM6IFZDZWxsW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuY2VsbHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5wdXNoKCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbnNlcnRDZWxsKCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIDAsIDAsIG5ldyBWQ2VsbCggZGF0YSkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUFsbENlbGxzKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdFN0YXJ0KCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCBjb3VudCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlQ2VsbHNBdEVuZCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggdGhpcy5jZWxscy5sZW5ndGggLSBjb3VudCwgY291bnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVlc3RVcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0cj57dGhpcy5jZWxsc308L3RyPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVkNlbGwgZXh0ZW5kcyBtaW0uQ29tcG9uZW50XHJcbntcclxuXHRkYXRhOiBWVGFibGVDZWxsRGF0YTtcclxuXHJcblx0Y29uc3RydWN0b3IoIGRhdGE6IGFueSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIFwiY29udGVudFwiIGluIGRhdGEpXHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZGF0YSA9IHsgY29udGVudDogZGF0YSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gPHRkIGNsYXNzPXt0aGlzLmRhdGEuY2xhc3N9IHN0eWxlPXt0aGlzLmRhdGEuc3R5bGV9XHJcblx0XHRcdFx0XHRyb3dzcGFuPXt0aGlzLmRhdGEucm93U3BhbiA/IHRoaXMuZGF0YS5yb3dTcGFuIDogdW5kZWZpbmVkfVxyXG5cdFx0XHRcdFx0Y29sc3Bhbj17dGhpcy5kYXRhLmNvbFNwYW4gPyB0aGlzLmRhdGEuY29sU3BhbiA6IHVuZGVmaW5lZH0+XHJcblx0XHRcdHt0aGlzLmRhdGEuY29udGVudH1cclxuXHRcdDwvdGQ+XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9taW1ibF9fOyJdLCJzb3VyY2VSb290IjoiIn0=