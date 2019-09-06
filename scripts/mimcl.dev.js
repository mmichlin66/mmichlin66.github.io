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
    componentWillMount() {
        this.site.publishService("StdErrorHandling", this);
        // publish ourselves as a router service
        this.site.publishService("Router", this);
        // if instructed so, subscribe to a router service implemented by any of components
        // up the chain
        if (this.chainsToHigherRouter) {
            this.higherRouterService = new mim.Ref();
            this.site.subscribeService("Router", this.higherRouterService, undefined, false);
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
    componentWillUnmount() {
        if (this.controlsBrowser) {
            window.removeEventListener("popstate", this.onPopstate);
        }
        if (this.chainsToHigherRouter) {
            this.site.unsubscribeService("Router");
            this.higherRouterService = undefined;
        }
        this.site.unpublishService("Router");
        this.site.unpublishService("StdErrorHandling");
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
            let service = this.site.getService("Router");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltY2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RhdGFUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ0Ryb3BBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvZG5kL0RyYWdEcm9wSW1wbC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1NvdXJjZS50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9kbmQvRHJhZ1RhcmdldC50cyIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9taW1jbFR5cGVzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3BvcHVwL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcG9wdXAvTXNnQm94LnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy9wb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvcm91dGVyL1JvdXRlci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC8uL3NyYy90cmVlL1RyZWVBcGkudHMiLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZS50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdHJlZS9UcmVlTm9kZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vbWltY2wvLi9zcmMvdmlydC9TY3JvbGxBeGlzLnRzIiwid2VicGFjazovL21pbWNsLy4vc3JjL3ZpcnQvVlRhYmxlLnRzeCIsIndlYnBhY2s6Ly9taW1jbC9leHRlcm5hbCB7XCJyb290XCI6XCJtaW1ibFwiLFwiY29tbW9uanMyXCI6XCJtaW1ibFwiLFwiY29tbW9uanNcIjpcIm1pbWJsXCIsXCJhbWRcIjpcIm1pbWJsXCJ9Iiwid2VicGFjazovL21pbWNsL2V4dGVybmFsIHtcInJvb3RcIjpcIm1pbXVybFwiLFwiY29tbW9uanMyXCI6XCJtaW11cmxcIixcImNvbW1vbmpzXCI6XCJtaW11cmxcIixcImFtZFwiOlwibWltdXJsXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1RkFBdUY7QUFDdkYsaUdBQWlHO0FBQ2pHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLE1BQXNCLGVBQWU7SUFFN0IsTUFBTSxDQUFDLGFBQWEsQ0FBRSxJQUFZLEVBQUUsSUFBUztRQUVuRCxJQUFJLENBQUMsSUFBSSxJQUFJLElB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QyxTQUFTO0lBSWhDLFlBQWEsSUFBUztRQUVyQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxNQUFNO1FBRVosT0FBTyxnQkFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUN0RCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQzFELE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2Q7SUFDTixDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7OztBQzFnQkQsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoibWltY2wuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibWltYmxcIiksIHJlcXVpcmUoXCJtaW11cmxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibWltYmxcIiwgXCJtaW11cmxcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY2xcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW1ibFwiKSwgcmVxdWlyZShcIm1pbXVybFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY2xcIl0gPSBmYWN0b3J5KHJvb3RbXCJtaW1ibFwiXSwgcm9vdFtcIm1pbXVybFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21pbWJsX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW1jbFR5cGVzLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdBbmREcm9wRGF0YSBzdGF0aWMgY2xhc3MgZGVhbHMgd2l0aCBkYXRhIG9mIGFyYml0cmFyeSB0eXBlcyBiZWluZyB0cmFuc2ZlcmVkXHJcbi8vIGR1cmluZyBkcmFnICYgZHJvcCBvcGVyYXRpb25zLiBXaGVuIGEgZHJhZyBvcGVyYXRpb24gc3RhcnRzLCBwaWVjZXMgb2YgZGF0YSBhcmUgYWRkZWQgdG8gYSBtYXBcclxuLy8gd2l0aCB0eXBlcyAoZm9ybWF0cykgYXMga2V5cyAodGhlc2UgYXJlIHRoZSBzYW1lIGZvcm1hdHMgdGhhdCBhcmUga2VwdCBpbiB0aGUgSFRNTDUgRGF0YVRyYW5zZmVyXHJcbi8vIG9iamVjdC4gRGF0YSBpcyBhZGRlZCB1c2luZyB0aGUgU2V0T2JqZWN0RGF0YSBtZXRob2Qgb2YgdGhlIElEcmFnU3RhcnRFdmVudCBpbnRlcmZhY2UuIFdoZW4gdGhlXHJcbi8vIGRyb3Agb2NjdXJzLCB0aGUgR2V0T2JqZWN0RGF0YSBvZiB0aGUgSURyYWdUYXJnZXRFdmVudCBpcyB1c2VkIHRvIHJldHJpZXZlIHRoZSBkYXRhLiBUaGUgbWFwIGlzXHJcbi8vIGNsZWFyZWQgd2hlbiB0aGUgZHJhZyBvcGVyYXRpb24gZW5kcyAtIHJlZ2FyZGxlc3Mgd2hldGhlciBpdCB3YXMgc3VjY2Vzc2Z1bCBvciB3YXMgY2FuY2VsZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHJhZ0FuZERyb3BEYXRhXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNldE9iamVjdERhdGEoIHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdHlwZSB8fCBkYXRhID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHREcmFnQW5kRHJvcERhdGEuZGF0YU1hcC5zZXQoIHR5cGUsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXRPYmplY3REYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gRHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuZ2V0KCB0eXBlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVtb3ZlT2JqZWN0RGF0YSggdHlwZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdERyYWdBbmREcm9wRGF0YS5kYXRhTWFwLmRlbGV0ZSggdHlwZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNsZWFyQWxsT2JqZWN0RGF0YSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0RHJhZ0FuZERyb3BEYXRhLmRhdGFNYXAuY2xlYXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlIGluIHRoZSBnaXZlbiBEYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG5cdHB1YmxpYyBzdGF0aWMgaGFzVHlwZSggZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsIHR5cGU6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHQvLyBFZGdlIGltcGxlbW50cyB0eXBlcyB2aWEgRE9NU3RyaW5nTGlzdCwgd2hjaWggZG9lc24ndCBoYXZlIGluZGV4T2ZcclxuXHRcdGlmIChkYXRhVHJhbnNmZXIudHlwZXMuaW5kZXhPZilcclxuXHRcdFx0cmV0dXJuIGRhdGFUcmFuc2Zlci50eXBlcy5pbmRleE9mKCB0eXBlKSA+PSAwO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gKGRhdGFUcmFuc2Zlci50eXBlcyBhcyBhbnkgYXMgRE9NU3RyaW5nTGlzdCkuY29udGFpbnMoIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXAgb2Ygb2JqZWN0IGZvcm1hdHMgdG8gb2JqZWN0IHZhbHVlcy5cclxuXHRwcml2YXRlIHN0YXRpYyBkYXRhTWFwOiBNYXA8c3RyaW5nLGFueT4gPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRW11bERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgcmVwcmVzZW50cyBvYmplY3RzIHRoYXQgZW11bGF0ZSBEYXRhVHJhbnNmZXIgb2JqZWN0IHdoZW5cclxuLy8gdGhlIGRyYWcgc291cmNlIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgZHJhZyBhbmQgZHJvcCBuYXRpdmVseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVtdWxEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXJcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IGVsZW1lbnQgdXNlZCB0byBkZXJpdmUgYW4gaW1hZ2UgdG8gc2hvdyBkdXJpbmcgZHJhZyBvcGVyYXRpb25zLlxyXG5cdGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdGltYWdlRWxtWTogbnVtYmVyO1xyXG5cdGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEVtdWxEYXRhVHJhbnNmZXIgZW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlbiB0aGUgZHJhZyBzb3VyY2UgZG9lcyBub3RcclxuLy8gc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVtdWxEYXRhVHJhbnNmZXIgZXh0ZW5kcyBEYXRhVHJhbnNmZXIgaW1wbGVtZW50cyBJRW11bERhdGFUcmFuc2ZlclxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSBmYWxzZTtcclxuXHRcdHRoaXMuZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdC8vIFVzZXMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdXBkYXRlIHRoZSBkcmFnIGZlZWRiYWNrLCByZXBsYWNpbmcgYW55IHByZXZpb3VzbHkgc3BlY2lmaWVkXHJcblx0Ly8gZmVlZGJhY2suXHJcblx0cHVibGljIHNldERyYWdJbWFnZSggaW1hZ2U6IEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1hZ2VFbG0gPSBpbWFnZTtcclxuXHRcdHRoaXMuaW1hZ2VFbG1YID0geDtcclxuXHRcdHRoaXMuaW1hZ2VFbG1ZID0geTtcclxuXHJcblx0XHQvLyBFZGdlIGRvZXNuJ3QgaGF2ZSBzZXREcmFnSW1hZ2UgbWV0aG9kIGluIGl0cyBEYXRhVHJhbnNmZXIgY2xhc3MuXHJcblx0XHRpZiAoc3VwZXIuc2V0RHJhZ0ltYWdlKVxyXG5cdFx0XHRzdXBlci5zZXREcmFnSW1hZ2UoIGltYWdlLCB4LCB5KTtcclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IGEgbmV3IGltYWdlIGVsZW1lbnQgd2FzIHNldCwgc28gdGhhdCB3ZSB3aWxsIFwicHJlcGFyZVwiIGl0IG9uIHRoZSBuZXh0XHJcblx0XHQvLyBkcmFnIHN0ZXBcclxuXHRcdHRoaXMuaXNJbWFnZUVsbVJlc2V0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0IGVmZmVjdEFsbG93ZWQoIHZhbDogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuZWZmZWN0QWxsb3dlZEV4ID0gdmFsO1xyXG5cdFx0c3VwZXIuZWZmZWN0QWxsb3dlZCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBlZmZlY3RBbGxvd2VkKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdEFsbG93ZWRFeCA9PT0gdW5kZWZpbmVkID8gc3VwZXIuZWZmZWN0QWxsb3dlZCA6IHRoaXMuZWZmZWN0QWxsb3dlZEV4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZHJvcEVmZmVjdCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5kcm9wRWZmZWN0RXggPSB2YWw7XHJcblx0XHRzdXBlci5kcm9wRWZmZWN0ID0gdmFsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGRyb3BFZmZlY3QoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcEVmZmVjdEV4ID09PSB1bmRlZmluZWQgPyBzdXBlci5kcm9wRWZmZWN0IDogdGhpcy5kcm9wRWZmZWN0RXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldERhdGEoIGZvcm1hdDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3VwZXIuc2V0RGF0YSggZm9ybWF0LCBkYXRhKTtcclxuXHRcdHRoaXMuZGF0YU1hcC5zZXQoIGZvcm1hdCwgZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFGb3JtYXRzID0gQXJyYXkuZnJvbSggdGhpcy5kYXRhTWFwLmtleXMoKSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IHRoaXMuZGF0YU1hcC5nZXQoIGZvcm1hdCk7XHJcblx0XHRyZXR1cm4gcyA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHM7XHJcblx0fVxyXG5cclxuXHRjbGVhckRhdGEoIGZvcm1hdD86IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRzdXBlci5jbGVhckRhdGEoIGZvcm1hdCk7XHJcblxyXG5cdFx0aWYgKGZvcm1hdClcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmRlbGV0ZSggZm9ybWF0KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmNsZWFyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXQgdHlwZXMoKTogc3RyaW5nW11cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhRm9ybWF0cztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgZWxlbWVudCB1c2VkIHRvIGRlcml2ZSBhbiBpbWFnZSB0byBzaG93IGR1cmluZyBkcmFnIG9wZXJhdGlvbnMuXHJcblx0cHVibGljIGltYWdlRWxtOiBFbGVtZW50O1xyXG5cdHB1YmxpYyBpbWFnZUVsbVg6IG51bWJlcjtcclxuXHRwdWJsaWMgaW1hZ2VFbG1ZOiBudW1iZXI7XHJcblx0cHVibGljIGlzSW1hZ2VFbG1SZXNldDogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVtZW1iZXJlZCBhbGxvd2VkIGVmZmVjdCAtIG5lZWRlZCBiZWNhdXNlIHdoZW4gZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgZW11bGF0ZWQsIHRoZVxyXG5cdC8vIG9yaWdpbmFsIERyYWdUcmFuc2ZlciBvYmplY3QgZG9lc24ndCBzZWVtIHRvIGFjY2VwdCBhbnkgYWxsb3dlZCBlZmZlY3QgdmFsdWUsIHdoaWNoIGFsd2F5c1xyXG5cdC8vIHN0YXlzIFwibm9uZVwiLlxyXG5cdHByaXZhdGUgZWZmZWN0QWxsb3dlZEV4OiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgZHJvcCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGRyb3AgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGRyb3BFZmZlY3RFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBNYXAgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRvIGRhdGEgaXRlbXMuXHJcblx0cHJpdmF0ZSBkYXRhTWFwOiBNYXA8c3RyaW5nLHN0cmluZz47XHJcblxyXG5cdC8vIEFycmF5IG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKS4gVGhpcyBhcnJheSBjaGFuZ2VzIGV2ZXJ5IHRpbWUgZGF0YSBpcyBzZXQgb3IgY2xlYXJlZC5cclxuXHRwcml2YXRlIGRhdGFGb3JtYXRzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEVtdWxMZWdhY3lEYXRhVHJhbnNmZXIgZW11bGF0ZXMgdGhlIGJlaGF2aW9yIG9mIERhdGFUcmFuc2ZlciBvYmplY3Qgd2hlbiB0aGUgZHJhZyBzb3VyY2VcclxuLy8gZG9lcyBub3Qgc3VwcG9ydCBIVE1MNSBkcmFnIGFuZCBkcm9wIG5hdGl2ZWx5LiBUaGlzIG9iamVjdCBpcyB1c2VkIHVuZGVyIEVkZ2UsIHdoaWNoIGRvZXNuJ3RcclxuLy8gaW1wbGVtZW50IHRoZSBuYXRpdmUgRGF0YVRyYW5zZmVyIG9iamVjdCBwcm9wZXJseS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyIGV4dGVuZHMgRGF0YVRyYW5zZmVyIGltcGxlbWVudHMgSUVtdWxEYXRhVHJhbnNmZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTtcclxuXHRcdHRoaXMuZGF0YUZvcm1hdHMgPSBbXTtcclxuXHRcdHRoaXMubV9pdGVtcyA9IG51bGw7XHJcblx0XHR0aGlzLm1fZmlsZXMgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byB1cGRhdGUgdGhlIGRyYWcgZmVlZGJhY2ssIHJlcGxhY2luZyBhbnkgcHJldmlvdXNseSBzcGVjaWZpZWRcclxuXHQvLyBmZWVkYmFjay5cclxuXHRwdWJsaWMgc2V0RHJhZ0ltYWdlKCBpbWFnZTogRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGltYWdlO1xyXG5cdFx0dGhpcy5pbWFnZUVsbVggPSB4O1xyXG5cdFx0dGhpcy5pbWFnZUVsbVkgPSB5O1xyXG5cclxuXHRcdC8vIGluZGljYXRlIHRoYXQgYSBuZXcgaW1hZ2UgZWxlbWVudCB3YXMgc2V0LCBzbyB0aGF0IHdlIHdpbGwgXCJwcmVwYXJlXCIgaXQgb24gdGhlIG5leHRcclxuXHRcdC8vIGRyYWcgc3RlcFxyXG5cdFx0dGhpcy5pc0ltYWdlRWxtUmVzZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRzZXQgZWZmZWN0QWxsb3dlZCggdmFsOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5lZmZlY3RBbGxvd2VkRXggPSB2YWw7XHJcblx0fVxyXG5cclxuXHRnZXQgZWZmZWN0QWxsb3dlZCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RBbGxvd2VkRXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHNldCBkcm9wRWZmZWN0KCB2YWw6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFeCA9IHZhbDtcclxuXHR9XHJcblxyXG5cdGdldCBkcm9wRWZmZWN0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BFZmZlY3RFeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c2V0RGF0YSggZm9ybWF0OiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHR0aGlzLmRhdGFNYXAuc2V0KCBmb3JtYXQsIGRhdGEpO1xyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBzOiBzdHJpbmcgPSB0aGlzLmRhdGFNYXAuZ2V0KCBmb3JtYXQpO1xyXG5cdFx0cmV0dXJuIHMgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJEYXRhKCBmb3JtYXQ/OiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKGZvcm1hdClcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmRlbGV0ZSggZm9ybWF0KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5kYXRhTWFwLmNsZWFyKCk7XHJcblxyXG5cdFx0dGhpcy5kYXRhRm9ybWF0cyA9IEFycmF5LmZyb20oIHRoaXMuZGF0YU1hcC5rZXlzKCkpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXQgdHlwZXMoKTogc3RyaW5nW11cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhRm9ybWF0cztcclxuXHR9XHJcblxyXG5cclxuXHJcbiAgICBnZXQgZmlsZXMoKTogRmlsZUxpc3QgeyByZXR1cm4gdGhpcy5tX2ZpbGVzOyB9XHJcbiAgICBnZXQgaXRlbXMoKTogRGF0YVRyYW5zZmVySXRlbUxpc3QgeyByZXR1cm4gdGhpcy5tX2l0ZW1zOyB9XHJcblxyXG5cclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCBlbGVtZW50IHVzZWQgdG8gZGVyaXZlIGFuIGltYWdlIHRvIHNob3cgZHVyaW5nIGRyYWcgb3BlcmF0aW9ucy5cclxuXHRwdWJsaWMgaW1hZ2VFbG06IEVsZW1lbnQ7XHJcblx0cHVibGljIGltYWdlRWxtWDogbnVtYmVyO1xyXG5cdHB1YmxpYyBpbWFnZUVsbVk6IG51bWJlcjtcclxuXHRwdWJsaWMgaXNJbWFnZUVsbVJlc2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIFJlbWVtYmVyZWQgYWxsb3dlZCBlZmZlY3QgLSBuZWVkZWQgYmVjYXVzZSB3aGVuIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIGVtdWxhdGVkLCB0aGVcclxuXHQvLyBvcmlnaW5hbCBEcmFnVHJhbnNmZXIgb2JqZWN0IGRvZXNuJ3Qgc2VlbSB0byBhY2NlcHQgYW55IGFsbG93ZWQgZWZmZWN0IHZhbHVlLCB3aGljaCBhbHdheXNcclxuXHQvLyBzdGF5cyBcIm5vbmVcIi5cclxuXHRwcml2YXRlIGVmZmVjdEFsbG93ZWRFeDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZW1lbWJlcmVkIGRyb3AgZWZmZWN0IC0gbmVlZGVkIGJlY2F1c2Ugd2hlbiBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbiBpcyBlbXVsYXRlZCwgdGhlXHJcblx0Ly8gb3JpZ2luYWwgRHJhZ1RyYW5zZmVyIG9iamVjdCBkb2Vzbid0IHNlZW0gdG8gYWNjZXB0IGFueSBkcm9wIGVmZmVjdCB2YWx1ZSwgd2hpY2ggYWx3YXlzXHJcblx0Ly8gc3RheXMgXCJub25lXCIuXHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RXg6IHN0cmluZztcclxuXHJcblx0Ly8gTWFwIG9mIGRhdGEgdHlwZXMgKGFrYSBmb3JtYXRzKSB0byBkYXRhIGl0ZW1zLlxyXG5cdHByaXZhdGUgZGF0YU1hcDogTWFwPHN0cmluZyxzdHJpbmc+O1xyXG5cclxuXHQvLyBBcnJheSBvZiBkYXRhIHR5cGVzIChha2EgZm9ybWF0cykuIFRoaXMgYXJyYXkgY2hhbmdlcyBldmVyeSB0aW1lIGRhdGEgaXMgc2V0IG9yIGNsZWFyZWQuXHJcblx0cHJpdmF0ZSBkYXRhRm9ybWF0czogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBtX2ZpbGVzOiBGaWxlTGlzdDtcclxuICAgIHByaXZhdGUgbV9pdGVtczogRGF0YVRyYW5zZmVySXRlbUxpc3Q7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnRHJvcEVmZmVjdCBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgZm9yIGRpZmZlcmVudCBkcmFnICYgZHJvcCBlZmZlY3RzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ0Ryb3BFZmZlY3Rcclxue1xyXG5cdE5vbmUgPSBcIm5vbmVcIixcclxuXHRDb3B5ID0gXCJjb3B5XCIsXHJcblx0TW92ZSA9IFwibW92ZVwiLFxyXG5cdExpbmsgPSBcImxpbmtcIixcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdEcm9wRWZmZWN0IGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyBmb3IgZGlmZmVyZW50IGRyYWcgJiBkcm9wIGVmZmVjdHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgZW51bSBEcmFnQWxsb3dlZEVmZmVjdHNcclxue1xyXG5cdE5vbmUgPSBcIm5vbmVcIixcclxuXHRDb3B5ID0gXCJjb3B5XCIsXHJcblx0TW92ZSA9IFwibW92ZVwiLFxyXG5cdExpbmsgPSBcImxpbmtcIixcclxuXHRDb3B5TW92ZSA9IFwiY29weU1vdmVcIixcclxuXHRDb3B5TGluayA9IFwiY29weUxpbmtcIixcclxuXHRMaW5rTW92ZSA9IFwibGlua01vdmVcIixcclxuXHRBbGwgPSBcImFsbFwiLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSURyYWdTb3VyY2VFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gZXZlbnQgaGFuZGxlcnMgb24gdGhlXHJcbi8vIGRyYWcgc291cmNlIGVsZW1lbnRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1NvdXJjZUV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0cmVhZG9ubHkgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7XHJcblxyXG5cdC8vIFNldHMgZGF0YSB3aXRoIHRoZSBnaXZlbiB0eXBlLiBGb3IgdGV4dCBkYXRhIHRoZSB0eXBlIHNob3VsZCBiZSBvbmUgb2YgTUlNRSB0eXBlcy5cclxuXHRzZXREYXRhKCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1RhcmdldEV2ZW50IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byBldmVudCBoYW5kbGVycyBvbiB0aGVcclxuLy8gZHJhZyB0YXJnZXQgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnVGFyZ2V0RXZlbnRcclxue1xyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgSFRNTDUgRHJhZ0V2ZW50IG9iamVjdC5cclxuXHRyZWFkb25seSBkcmFnRXZlbnQ6IERyYWdFdmVudDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkYXRhIHR5cGUgaXMgYXZhaWxhYmxlLlxyXG5cdGhhc1R5cGUoIHR5cGU6IHN0cmluZyk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlcmlldmVzIGRhdGEgZm9yIHRoZSBnaXZlbiB0eXBlLiBJZiB0aGUgdHlwZSBpcyBub3QgYXZhaWxhYmxlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuXHRnZXREYXRhKCB0eXBlOiBzdHJpbmcpOiBhbnk7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciBmaWxlcyBhcmUgYmVpbmcgZHJhZ2dlZC5cclxuXHRoYXNGaWxlcygpOiBib29sZWFuO1xyXG5cclxuXHQvLyBSZXJpZXZlcyBhcnJheSBvZiBmaWxlcy4gUmV0dXJucyB1bmRlZmluZWQgaWYgZmlsZXMgYXJlIG5vdCBiZWluZyBkcmFnZ2VkLiBUaGUgb2JqZWN0cyBpblxyXG5cdC8vIHRoZSByZXR1cm5lZCBhcnJheSBhcmUgb2YgdHlwZSBXZWJLaXRFbnRyeSAod2UgY2Fubm90IHNwZWNpZnkgaXQgYXMgc3VjaCBoZXJlIGJlY2F1c2UgdGhlXHJcblx0Ly8gY3VycmVudCBUeXBlc2NyaXB0IGlzIGRpc3RyaWJ1dGVkIHdpdGggLmQudHMgbGlicmFyaWVzIHRoYXQgZG9uJ3QgZGVmaW5lIHRoaXMgdHlwZS5cclxuXHRnZXRGaWxlcygpOiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElEcmFnU291cmNlIGludGVyZmFjZSBpcyB1c2VkIHRvIGRlc2lnbmF0ZSBhbiBlbGVtZW50IGFzIGRyYWcgc291cmNlLiBJbXBsZW1lbnRhdGlvbnMgb2ZcclxuLy8gdGhpcyBpbnRlcmZhY2UgY2FuIGJlIHNwZWNpZmllZCB1c2luZyB0aGUgZHJhZ1NvdXJjZSBhdHRyaWJ1dGUgb24gYW55IERPTSBlbGVtZW50LiBEYXRhIHRvIGJlXHJcbi8vIHBhc3NlZCBkdXJpbmcgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uIGlzIHN1cHBsaWVkIGJ5IGltcGxlbWVudGluZyB0aGUgb25EcmFnU3RhcnQgY2FsbGJhY2tcclxuLy8gYW5kIHVzaW5nIHRoZSBlLnNldERhdGEgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1NvdXJjZVxyXG57XHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIHN0YXJ0cyBmb3IgdGhlIGVsZW1lbnQuXHJcblx0b25EcmFnU3RhcnQ6IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkcmFnICYgZHJvcCBvcGVyYXRpb24gZW5kcy5cclxuXHRvbkRyYWdFbmQ/OiAoZTogSURyYWdTb3VyY2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZHJhZyAmIGRyb3Agb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLlxyXG5cdG9uRHJhZz86IChlOiBJRHJhZ1NvdXJjZUV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVNpbXBsZURyYWdTb3VyY2UgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJhZyBzb3VyY2UuIEltcGxlbWVudGF0aW9uc1xyXG4vLyBvZiB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnU291cmNlIGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIERhdGEgdG9cclxuLy8gYmUgcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXMgc3VwcGxpZWQgZGlyZWN0bHkgdmlhIHRoZSBkYXRhIHByb3BlcnR5LiBUaGlzXHJcbi8vIGludGVyZmFjZSBhbGxvd3Mgc2ltcGxpZnlpbmcgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gd2l0aG91dCB0aGUgbmVlZCB0byBpbXBsZW1lbnQgYW55XHJcbi8vIGNhbGxiYWNrcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZURyYWdTb3VyY2Vcclxue1xyXG5cdC8vIE9iamVjdCBob2xkaW5nIGRhdGEgdG8gYmUgcGFzc2VkIGR1cmluZyBkcmFnIG9wZXJhdGlvbi4gRWFjaCBwaWVjZSBvZiBkYXRhIGlzIGlkZW50aWZpZWQgYnlcclxuXHQvLyBhIHVuaXF1ZSB0eXBlIChha2EgZm9ybWF0KSBzdHJpbmcuXHJcblx0ZGF0YTogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblxyXG5cdC8vIEFsbG93ZWQgZHJvcCBlZmZlY3RzLiBJZiBkZWZpbmVkLCB0aGlzIG1lbWJlciBpcyB1c2VkIG9ubHkgaWYgZWl0aGVyIHRoZSBvbkRyYWdTdGFydFxyXG5cdC8vIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIG9yIGl0IGRvZXNuJ3Qgc2V0IGFsbG93ZWQgZHJvcCBlZmZlY3RzLlxyXG5cdGFsbG93ZWRFZmZlY3RzPzogRHJhZ0FsbG93ZWRFZmZlY3RzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEcmFnIHNvdXJjZSBwcm9wZXJ0eSAoZHJhZ1NvdXJjZSkgY2FuIGhhdmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgc2hhcGVzOlxyXG4vL1x0LSBJRHJhZ1NvdXJjZSBpbnRlcmZhY2UgLSBkcmFnIGJlaGF2aW9yIGFuZCBkYXRhIHRvIGJlIHBhc3NlZCB3aXRoIGl0IGlzIGRldGVybWluZWRcclxuLy9cdFx0YnkgaW1wbGVtZW50aW5nIHRoZSByZWxldmFudCBjYWxsYmFja3MuXHJcbi8vXHQtIElTaW1wbGVEcmFnU291cmNlIGludGVyZmFjZSAtIGRhdGEgdG8gYmUgcGFzc2VkIGR1cmluZyB0aGUgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb24gaXNcclxuLy9cdFx0ZGVmaW5lZCBieSB0aGUgZGF0YSBwcm9wZXJ0eS5cclxuLy9cdC0gXCJlbG0tdGV4dFwiIHN0cmluZyAtIHRoZSBFbGVtZW50IG9iamVjdCBpcyB1c2VkIGFzIG9iamVjdCBkYXRhIGFuZCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudFxyXG4vL1x0XHRpcyB1c2VkIGFzIHRleHQgZGF0YS5cclxuLy9cdC0gXCJlbG0taHRtbFwiIHN0cmluZyAtIHRoZSBFbGVtZW50IG9iamVjdCBpcyB1c2VkIGFzIG9iamVjdCBkYXRhIGFuZCB0aGUgZWxlbWVudCdzIG91dGVySFRNTFxyXG4vL1x0XHRpcyB1c2VkIGFzIHRleHQgZGF0YS5cclxuLy9cdC0gdHJ1ZSAtIGVxdWl2YWxlbnQgdG8gXCJlbG0taHRtbFwiIHN0cmluZy5cclxuLy9cdC0gZmFsc2UgLSBkcmFnIGJlaGF2aW9yIGlzIHN1cHByZXNzZWQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBEcmFnU291cmNlUHJvcFR5cGUgPSBJRHJhZ1NvdXJjZSB8IElTaW1wbGVEcmFnU291cmNlIHwgYm9vbGVhbiB8IFwiZWxtLXRleHRcIiB8IFwiZWxtLWh0bWxcIjtcclxuXHJcblxyXG5cclxuLy8gU3RyaW5nIHVzZWQgYXMgYSB0eXBlIChha2EgZm9ybWF0KSB3aGVuIGFuIGVsZW1lbnQgb2JqZWN0IGlzIGJlaW5nIGRyYWdnZWQuXHJcbmV4cG9ydCBjb25zdCBETkRUWVBFX0VMRU1FTlQgPSBcImFwcGxpY2F0aW9uL0RPTUVsZW1lbnRcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgaXMgdXNlZCB0byBkZXNpZ25hdGUgYW4gZWxlbWVudCBhcyBkcm9wIHRhcmdldC4gSW1wbGVtZW50YXRpb25zIG9mXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIGRyYWdUYXJnZXQgYXR0cmlidXRlIG9uIGFueSBET00gZWxlbWVudC4gUmVjZWl2aW5nXHJcbi8vIGRhdGEgaXMgYWNjb21wbGlzaGVkIGJ5IGltcGxlbWVudGluZyB0aGUgb25Ecm9wIGNhbGxiYWNrIGFuZCBjYWxsaW5nIHRoZSBlLmdldERhdGEgbWV0aG9kLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1RhcmdldFxyXG57XHJcblx0Ly8gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gY3Vyc29yIGVudGVycyB0aGUgZWxlbWVudCBib3VuZGFyeSBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uIFJldHVybnMgdHJ1ZSBpZiBkcm9wIGlzIHBvc3NpYmxlIGFuZCBmYWxzZSBvdGhlcndpc2UuIElmIHRoaXMgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIGltcGxlbWVudGVkLCBkcm9wIGlzIGNvbnNpZGVyZWQgcG9zc2libGUuIElmIHRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UsIHRoZSBvbkRyYWdPdmVyXHJcblx0Ly8gYW5kIG9uRHJhZ0xlYXZlIG1ldGhvZHMgd2lsbCBub3QgYmUgY2FsbGVkLlxyXG5cdG9uRHJhZ0VudGVyPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IGJvb2xlYW47XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBob3ZlcnMgb3ZlciB0aGUgZWxlbWVudCBkdXJpbmcgZHJhZyAmIGRyb3BcclxuXHQvLyBvcGVyYXRpb24uIFJldHVybnMgdHJ1ZSBpZiBkcm9wIGlzIHBvc3NpYmxlIGFuZCBmYWxzZSBvdGhlcndpc2UuIElmIHRoaXMgbWV0aG9kIGlzIG5vdFxyXG5cdC8vIGltcGxlbWVudGVkLCBkcm9wIGlzIGNvbnNpZGVyZWQgcG9zc2libGUuIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUgb3JcclxuXHQvLyBmYWxzZSwgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIHdpbGwgYmUgY29udGludWVkIHRvIGJlIGNhbGxlZCBhcyB0aGUgbW91c2UgbW92ZXMuIFRoaXMgYWxsb3dzXHJcblx0Ly8gc29tZSBwYXJ0cyBvZiB0aGUgZWxlbWVudCB0byBiZSBkcm9wIHRhcmdldHMgd2hpbGUgb3RoZXJzIG5vdC5cclxuXHRvbkRyYWdPdmVyPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IGJvb2xlYW47XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGN1cnNvciBsZWF2ZXMgdGhlIGVsZW1lbnQgYm91bmRhcnkgZHVyaW5nIGRyYWcgJiBkcm9wXHJcblx0Ly8gb3BlcmF0aW9uLlxyXG5cdG9uRHJhZ0xlYXZlPzogKGU6IElEcmFnVGFyZ2V0RXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGRhdGEgd2FzIGRyb3BlZCBpbiB0aGlzIGRyb3Agem9uZS5cclxuXHRvbkRyb3A6IChlOiBJRHJhZ1RhcmdldEV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgSVNpbXBsZURyYWdUYXJnZXQgaW50ZXJmYWNlIGlzIHVzZWQgdG8gZGVzaWduYXRlIGFuIGVsZW1lbnQgYXMgZHJvcCB0YXJnZXQuIEltcGxlbWVudGF0aW9uc1xyXG4vLyBvZiB0aGlzIGludGVyZmFjZSBjYW4gYmUgc3BlY2lmaWVkIHVzaW5nIHRoZSBkcmFnVGFyZ2V0IGF0dHJpYnV0ZSBvbiBhbnkgRE9NIGVsZW1lbnQuIFJlY2VpdmluZ1xyXG4vLyBkYXRhIGlzIGFjY29tcGxpc2hlZCBieSBzcGVjaWZ5aW5nIHRoZSBleHBlY3RlZCB0eXBlcyB2aWEgdGhlIGRhdGFUeXBlcyBwcm9wZXJ0eSBhbmRcclxuLy8gaW1wbGVtZW50aW5nIHRoZSBvbkRhdGFEcm9wcGVkIGNhbGxiYWNrLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRHJhZ1RhcmdldFxyXG57XHJcblx0Ly8gQXJyYXkgb2YgZGF0YSB0eXBlcyAoYWthIGZvcm1hdHMpIHRoYXQgdGhlIGRyYWcgdGFyZ2V0IGNhbiByZWNlaXZlLlxyXG5cdGRhdGFUeXBlczogc3RyaW5nW107XHJcblxyXG5cdC8vIFN0eWxlIHRvIGFwcGx5IGZvciBkcmFnIGZlZWRiYWNrLlxyXG5cdGZlZWRiYWNrPzogbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdC8vIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBkYXRhIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgYXBwcm9wcmlhdGUgdHlwZXMgaXMgZHJvcHBlZC5cclxuXHQvLyBUaGUgZGF0YSBpcyBkZWxpdmVyZWQgYXMgYW4gb2JqZWN0IHdoZXJlIHByb3BlcnR5IG5hbWVzIGFyZSBkYXRhIHR5cGVzIGFuZCB2YWx1ZXMgYXJlXHJcblx0Ly8gZGF0YSBwaWVjZXMgb2YgdGhlc2UgdHlwZXMuXHJcblx0b25EYXRhRHJvcHBlZDogKGRhdGE6IHtbdHlwZTogc3RyaW5nXTogYW55fSkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBEcmFnIHRhcmdldCBwcm9wZXJ0eSAoZHJhZ1RhcmdldCkgY2FuIGJlIGVpdGhlciBJRHJhZ1RhcmdldCBpbnRlcmZhY2Ugb3IgcmVmZXJlbmNlIHRvIGFuXHJcbi8vIEVsZW1lbnQuIEluIHRoZSBsYXR0ZXIgY2FzZSwgdGhlIHJlZmVyZW5jZSB3aWxsIGJlIHNldCBpZiB0aGUgZGF0YSBiZWluZyBkcmFnZ2VkIGlzIGFuXHJcbi8vIEVsZW1lbnQgb2JqZWN0LlxyXG5leHBvcnQgdHlwZSBEcmFnVGFyZ2V0UHJvcFR5cGUgPSBJRHJhZ1RhcmdldCB8IElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIm1pbWJsL2Rpc3QvY29yZS9taW1cIlxyXG57XHJcblx0aW50ZXJmYWNlIElFbGVtZW50UHJvcHM8VFJlZixUQ2hpbGRyZW4+XHJcblx0e1xyXG5cdFx0ZHJhZ1NvdXJjZT86IERyYWdTb3VyY2VQcm9wVHlwZTtcclxuXHRcdGRyYWdUYXJnZXQ/OiBEcmFnVGFyZ2V0UHJvcFR5cGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdTb3VyY2VIYW5kbGVyLCBEcmFnU291cmNlRW11bGF0b3J9IGZyb20gXCIuL0RyYWdTb3VyY2VcIlxyXG5pbXBvcnQge0RyYWdUYXJnZXRIYW5kbGVyfSBmcm9tIFwiLi9EcmFnVGFyZ2V0XCJcclxuaW1wb3J0IHsgRHJhZ1NvdXJjZVByb3BUeXBlLCBEcmFnVGFyZ2V0UHJvcFR5cGUgfSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBjbGFzcyBpcyBhIGhhbmRsZXIgZm9yIHRoZSBkcmFnU291cmNlIGN1c3RvbSBwcm9wZXJ0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIERyYWdTb3VyY2VDdXN0b21FbG1Qcm9wSGFuZGxlciBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnU291cmNlUHJvcFR5cGU+XHJcbntcclxuXHRwdWJsaWMgaW5pdGlhbGl6ZSggZWxtVk46IG1pbS5JRWxtVk4sIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmVsbVZOID0gZWxtVk47XHJcblx0XHR0aGlzLmFkZCggcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0ZXJtaW5hdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVtb3ZlKCk7XHJcblx0XHR0aGlzLmVsbVZOID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKCBvbGRQcm9wVmFsOiBEcmFnU291cmNlUHJvcFR5cGUsIG5ld1Byb3BWYWw6IERyYWdTb3VyY2VQcm9wVHlwZSk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZiAob2xkUHJvcFZhbCA9PT0gbmV3UHJvcFZhbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2xkUHJvcFZhbClcclxuXHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0aWYgKG5ld1Byb3BWYWwpXHJcblx0XHRcdFx0dGhpcy5hZGQoIG5ld1Byb3BWYWwgYXMgRHJhZ1NvdXJjZVByb3BUeXBlKTtcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGFkZCggcHJvcFZhbDogRHJhZ1NvdXJjZVByb3BUeXBlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBlbG0gPSB0aGlzLmVsbVZOLkVsbSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdHRoaXMuZHJhZ1NvdXJjZUhhbmRsZXIgPSBcIm93bmVyU1ZHRWxlbWVudFwiIGluIGVsbVxyXG5cdFx0XHRcdFx0PyBuZXcgRHJhZ1NvdXJjZUVtdWxhdG9yKCBlbG0sIHByb3BWYWwpXHJcblx0XHRcdFx0XHQ6IG5ldyBEcmFnU291cmNlSGFuZGxlciggZWxtLCBwcm9wVmFsKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyLmluaXQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW1vdmUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRyYWdTb3VyY2VIYW5kbGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VIYW5kbGVyLnRlcm0oKTtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlSGFuZGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRWVtZW50IG5vZGUgb24gd2hpY2ggdGhlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBlbG1WTjogbWltLklFbG1WTjtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgaGFuZGxlcyBkcmFnIHNvdXJjZSBvcGVydGlvbnMuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlSGFuZGxlcjogRHJhZ1NvdXJjZUhhbmRsZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgY2xhc3MgaXMgYSBoYW5kbGVyIGZvciB0aGUgZHJhZ1NvdXJjZSBjdXN0b20gcHJvcGVydHkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXIgaW1wbGVtZW50cyBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8RHJhZ1RhcmdldFByb3BUeXBlPlxyXG57XHJcblx0cHVibGljIGluaXRpYWxpemUoIGVsbVZOOiBtaW0uSUVsbVZOLCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5lbG1WTiA9IGVsbVZOO1xyXG5cdFx0dGhpcy5hZGQoIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybWluYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlbW92ZSgpO1xyXG5cdFx0dGhpcy5lbG1WTiA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHVwZGF0ZSggb2xkUHJvcFZhbDogRHJhZ1RhcmdldFByb3BUeXBlLCBuZXdQcm9wVmFsOiBEcmFnVGFyZ2V0UHJvcFR5cGUpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKG9sZFByb3BWYWwgPT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9sZFByb3BWYWwpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmIChuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHRoaXMuYWRkKCBuZXdQcm9wVmFsIGFzIERyYWdUYXJnZXRQcm9wVHlwZSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBhZGQoIHByb3BWYWw6IERyYWdUYXJnZXRQcm9wVHlwZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG1WTi5FbG0gYXMgSFRNTEVsZW1lbnQ7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRIYW5kbGVyID0gbmV3IERyYWdUYXJnZXRIYW5kbGVyKCBlbG0sIHByb3BWYWwpO1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0SGFuZGxlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kcmFnVGFyZ2V0SGFuZGxlci50ZXJtKCk7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEVlbWVudCBub2RlIG9uIHdoaWNoIHRoZSBwcm9wZXJ0eSBpcyBkZWZpbmVkLlxyXG5cdHByaXZhdGUgZWxtVk46IG1pbS5JRWxtVk47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IGhhbmRsZXMgZHJhZyB0YXJnZXQgb3BlcnRpb25zLlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEhhbmRsZXI6IERyYWdUYXJnZXRIYW5kbGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ0Ryb3BDdXN0b21FbG1Qcm9wRmFjdG9yeSBjbGFzcyBpcyBhIGZhY3RvcnkgZm9yIHRoZSBkcmFnU291cmNlIGFuZCBkcmFnVGFyZ2V0IGN1c3RvbVxyXG4vLyBwcm9wZXJ0aWVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgRHJhZ0Ryb3BDdXN0b21FbG1Qcm9wRmFjdG9yeSBpbXBsZW1lbnRzIG1pbS5JQ3VzdG9tQXR0cmlidXRlRmFjdG9yeTxEcmFnU291cmNlUHJvcFR5cGUgfCBEcmFnVGFyZ2V0UHJvcFR5cGU+XHJcbntcclxuXHRwdWJsaWMgY3JlYXRlSGFuZGxlciggcHJvcE5hbWU6IHN0cmluZyk6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxEcmFnU291cmNlUHJvcFR5cGUgfCBEcmFnVGFyZ2V0UHJvcFR5cGU+XHJcblx0e1xyXG5cdFx0cmV0dXJuIHByb3BOYW1lID09PSBcImRyYWdTb3VyY2VcIlxyXG5cdFx0XHQ/IG5ldyBEcmFnU291cmNlQ3VzdG9tRWxtUHJvcEhhbmRsZXIoKVxyXG5cdFx0XHQ6IG5ldyBEcmFnVGFyZ2V0Q3VzdG9tRWxtUHJvcEhhbmRsZXI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlZ2lzdGVyIGN1c3RvbSBwcm9wZXJ0eSBmYWN0b3J5IGZvciBkcmFnU291cmNlIGFuZCBkcmFnVGFyZ2V0IHByb3BlcnRpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRHJhZ0Ryb3BDdXN0b21BdHRyaWJ1dGVzKClcclxue1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnU291cmNlXCIsIG5ldyBEcmFnRHJvcEN1c3RvbUVsbVByb3BGYWN0b3J5KCkpO1xyXG5cdG1pbS5yZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSggXCJkcmFnVGFyZ2V0XCIsIG5ldyBEcmFnRHJvcEN1c3RvbUVsbVByb3BGYWN0b3J5KCkpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdBbGxvd2VkRWZmZWN0cywgRHJhZ1NvdXJjZVByb3BUeXBlLCBJRHJhZ1NvdXJjZSwgSVNpbXBsZURyYWdTb3VyY2UsIElEcmFnU291cmNlRXZlbnQsIERORFRZUEVfRUxFTUVOVH0gZnJvbSBcIi4vRHJhZ0Ryb3BBcGlcIjtcclxuaW1wb3J0IHtEcmFnQW5kRHJvcERhdGEsIElFbXVsRGF0YVRyYW5zZmVyLCBFbXVsRGF0YVRyYW5zZmVyLCBFbXVsTGVnYWN5RGF0YVRyYW5zZmVyfSBmcm9tIFwiLi9EYXRhVHJhbnNmZXJcIjtcclxuXHJcblxyXG5cclxudHlwZSBEcmFnRXZlbnRUeXBlID0gXCJkcmFnXCIgfCBcImRyYWdlbmRcIiB8IFwiZHJhZ2VudGVyXCIgfCBcImRyYWdleGl0XCIgfCBcImRyYWdsZWF2ZVwiIHwgXCJkcmFnb3ZlclwiIHwgXCJkcmFnc3RhcnRcIiB8IFwiZHJvcFwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTdGFydEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyBzb3VyY2UgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnU291cmNlRXZlbnQgaW1wbGVtZW50cyBJRHJhZ1NvdXJjZUV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gdHlwZS4gRm9yIHRleHQgZGF0YSB0aGUgdHlwZSBzaG91bGQgYmUgb25lIG9mIE1JTUUgdHlwZXMuXHJcblx0c2V0RGF0YSggdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLm1fZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSggdHlwZSwgXCJcIik7XHJcblx0XHRcdERyYWdBbmREcm9wRGF0YS5zZXRPYmplY3REYXRhKCB0eXBlLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VCZWhhdmlvciBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdGhhdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVuIG1lY2hhbmlzbXNcclxuLy8gc2V0dXAgYnkgZGlmZmVyZW50IHR5cGVzIG9mIHRoZSBkcmFnU291cmNlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGVudW0gRHJhZ1NvdXJjZUJlaGF2aW9yXHJcbntcclxuXHRSZWd1bGFyID0gMSxcclxuXHRTaW1wbGUsXHJcblx0RWxtVGV4dCxcclxuXHRFbG1IdG1sXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEcmFnU291cmNlSGFuZGxlciBjbGFzcyBpbXBsZW1lbnRzIHN1cHBvcnQgZm9yIEhUTUw1IERyYWcgYW5kIERyb3Agc291cmNlIGZ1bmN0aW9uYWxpdHkuIEl0XHJcbi8vIGlzIHVzZWQgYnkgSFRNTCBlbGVtZW50cyB0aGF0IG5hdGl2ZWx5IHN1cHBvcnQgZHJhZyBhbmQgZHJvcCBldmVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2VQcm9wOiBEcmFnU291cmNlUHJvcFR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0gPSBlbG07XHJcblxyXG5cdFx0aWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS10ZXh0XCIpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtVGV4dDtcclxuXHRcdGVsc2UgaWYgKGRyYWdTb3VyY2VQcm9wID09PSBcImVsbS1odG1sXCIgfHwgZHJhZ1NvdXJjZVByb3AgPT09IHRydWUpXHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuRWxtSHRtbDtcclxuXHRcdGVsc2UgaWYgKChkcmFnU291cmNlUHJvcCBhcyBJU2ltcGxlRHJhZ1NvdXJjZSkuZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmJlaGF2aW9yID0gRHJhZ1NvdXJjZUJlaGF2aW9yLlNpbXBsZTtcclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSVNpbXBsZURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2UpLm9uRHJhZ1N0YXJ0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuYmVoYXZpb3IgPSBEcmFnU291cmNlQmVoYXZpb3IuUmVndWxhcjtcclxuXHRcdFx0dGhpcy5kcmFnU291cmNlID0gZHJhZ1NvdXJjZVByb3AgYXMgSURyYWdTb3VyY2U7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdmFsdWUgb2YgZHJhZ1NvdXJjZVByb3AgaW4gRHJhZ1NvdXJjZUhhbmRsZXIgY29uc3RydWN0b3IuXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBtYWtpbmcgdGhlIGVsZW1lbnQgZHJhZ2dhYmxlIGJ5IGFkZGluZyBkcmFnIGV2ZW50cy5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnU291cmNlRXZlbnQgPSBuZXcgRHJhZ1NvdXJjZUV2ZW50KCk7XHJcblx0XHR0aGlzLmVsbS5zZXRBdHRyaWJ1dGUoIFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUZXJtaW5hdGVzIHRoZSBvYmplY3QgYnkgcmVtb3ZpbmcgZHJhZyBldmVudCBoYW5kbGVycyBmcm9tIHRoZSBlbGVtZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdzdGFydFwiLCB0aGlzLm9uRHJhZ1N0YXJ0KTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VuZFwiLCB0aGlzLm9uRHJhZ0VuZCk7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdcIiwgdGhpcy5vbkRyYWcpO1xyXG5cclxuXHRcdHRoaXMuZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJkcmFnZ2FibGVcIik7XHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlciBmb3IgdGhlIG5hdGl2ZSBkcmFnc3RhcnQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ1N0YXJ0ID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBjbGVhciB0aGUgZGF0YSBtYXAgLSBqdXN0IGluIGNhc2VcclxuXHRcdERyYWdBbmREcm9wRGF0YS5jbGVhckFsbE9iamVjdERhdGEoKTtcclxuXHJcblx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5TaW1wbGUpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGRhdGFUeXBlIGluIHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5kYXRhKVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LnNldERhdGEoIGRhdGFUeXBlLCB0aGlzLnNpbXBsZURyYWdTb3VyY2UuZGF0YVtkYXRhVHlwZV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1NvdXJjZS5hbGxvd2VkRWZmZWN0cyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLnNpbXBsZURyYWdTb3VyY2UuYWxsb3dlZEVmZmVjdHM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gRHJhZ0FsbG93ZWRFZmZlY3RzLkFsbDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIG9uRHJhZ1N0YXJ0IG1ldGhvZCBpcyBkZWZpbmVkLCBpbnZva2UgaXRcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KVxyXG5cdFx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZ1N0YXJ0KCB0aGlzLmRyYWdTb3VyY2VFdmVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goZXJyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0RHJhZ0FuZERyb3BEYXRhLmNsZWFyQWxsT2JqZWN0RGF0YSgpO1xyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5zZXREYXRhKCBETkRUWVBFX0VMRU1FTlQsIHRoaXMuZWxtKTtcclxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IERyYWdBbGxvd2VkRWZmZWN0cy5BbGw7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbVRleHQpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLnRleHRDb250ZW50KTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5iZWhhdmlvciA9PT0gRHJhZ1NvdXJjZUJlaGF2aW9yLkVsbUh0bWwpXHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlRXZlbnQuc2V0RGF0YSggXCJ0ZXh0L3BsYWluXCIsIHRoaXMuZWxtLm91dGVySFRNTCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWdlbmQgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZ0VuZCA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgIT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRyYWdTb3VyY2VFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZS5vbkRyYWdFbmQoIHRoaXMuZHJhZ1NvdXJjZUV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZmluYWxseVxyXG5cdFx0e1xyXG5cdFx0XHREcmFnQW5kRHJvcERhdGEuY2xlYXJBbGxPYmplY3REYXRhKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBIYW5kbGVyIGZvciB0aGUgbmF0aXZlIGRyYWcgZXZlbnRcclxuXHRwcml2YXRlIG9uRHJhZyA9IChlOiBEcmFnRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuYmVoYXZpb3IgPT09IERyYWdTb3VyY2VCZWhhdmlvci5SZWd1bGFyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kcmFnU291cmNlLm9uRHJhZylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1NvdXJjZUV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5kcmFnU291cmNlLm9uRHJhZyggdGhpcy5kcmFnU291cmNlRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHByb3RlY3RlZCBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vLy8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgd2UgbmVlZCB0byBpbXBsZW1lbnQgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvcjsgdGhhdCBpcywgd2Ugc2hvdWxkXHJcblx0Ly8vLyBwYXNzIHRoZSBlbGVtZW50IG9iamVjdCBhcyBkYXRhIGJlaW5nIGRyYWdnZWQuIE5vdGUgdGhhdCBlaXRoZXIgdGhpcyBmbGFnIGlzIHRydWUgb3JcclxuXHQvLy8vIHRoZSBkcmFnU291cmNlIHByb3BlcnR5IGlzIGRlZmluZWQuXHJcblx0Ly9wdWJsaWMgZGVmYXVsdERyYWdTb3VyY2VCZWhhdmlvckVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFR5cGUgb2YgZHJhZyBzb3VyY2UgbWVjaGFuaXNtIGRldGVybWluZWQgYnkgdGhlIGRyYWdTb3VyY2UgcHJvcGVydHlcclxuXHRwcm90ZWN0ZWQgYmVoYXZpb3I6IERyYWdTb3VyY2VCZWhhdmlvcjtcclxuXHJcblx0Ly8gSURyYWdTb3VyY2UgaW50ZXJmYWNlIGRlZmluaW5nIGVsZW1lbnQncyBiZWhhdmlvciBhcyBkcmFnIHNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBjYW4gYmVcclxuXHQvLyB1bmRlZmluZWQgaWYgZWl0aGVyIHdlIGFyZSBpbXBsZW1lbnRpbmcgYSBkZWZhdWx0IGRyYWcgc291cmNlIGJlaGF2aW9yLlxyXG5cdHByaXZhdGUgZHJhZ1NvdXJjZTogSURyYWdTb3VyY2U7XHJcblxyXG5cdC8vIElEcmFnU291cmNlIGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyBzb3VyY2UuIFRoaXMgcHJvcGVydHkgY2FuIGJlXHJcblx0Ly8gdW5kZWZpbmVkIGlmIGVpdGhlciB3ZSBhcmUgaW1wbGVtZW50aW5nIGEgZGVmYXVsdCBkcmFnIHNvdXJjZSBiZWhhdmlvci5cclxuXHRwcml2YXRlIHNpbXBsZURyYWdTb3VyY2U6IElTaW1wbGVEcmFnU291cmNlO1xyXG5cclxuXHQvLyBFdmVudCBvYmplY3QgdGhhdCBpcyByZXVzZWQgd2hlbiBzZW5kaW5nIGV2ZW50cyB0byBhIGRyYWcgc291cmNlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBkcmFnU291cmNlRXZlbnQ6IERyYWdTb3VyY2VFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdTb3VyY2VFbXVsYXRvciBjbGFzcyBlbXVsYXRlcyBzdXBwb3J0IGZvciBEcmFnIGFuZCBEcm9wIHNvdXJjZSBmdW5jdGlvbmFsaXR5IHZpYSBtb3VzZVxyXG4vLyBldmVudHMuIEl0IGlzIHVzZWQgZm9yIERPTSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgbmF0aXZlIGRyYWcgYW5kIGRyb3Agc3Vwb3J0IC0gZS5nLiBTVkcuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRHJhZ1NvdXJjZUVtdWxhdG9yIGV4dGVuZHMgRHJhZ1NvdXJjZUhhbmRsZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBlbG06IEVsZW1lbnQsIGRyYWdTb3VyY2U6IERyYWdTb3VyY2VQcm9wVHlwZSlcclxuXHR7XHJcblx0XHRzdXBlciggZWxtLCBkcmFnU291cmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG9iamVjdCBieSBhZGRpbmcgYSBtb3VzZWRvd24gZXZlbnQuXHJcblx0cHVibGljIGluaXQoKVxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoKTtcclxuXHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGVybWluYXRlcyB0aGUgb2JqZWN0IGJ5IHJlbW92aW5nIGEgbW91c2Vkb3duIGV2ZW50LlxyXG5cdHB1YmxpYyB0ZXJtKClcclxuXHR7XHJcblx0XHRzdXBlci50ZXJtKCk7XHJcblxyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbWVtYmVyIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UtZG93biBldmVudCBhbmQgc3RhcnQgd2F0Y2hpbmcgbW91c2UgbW92ZW1lbnRcclxuXHQvLyhhbmQgb3RoZXIpIGV2ZW50cy5cclxuXHRwcml2YXRlIG9uTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0Ly8gaWdub3JlIG5vbi1wcmltYXJ5IG1vdXNlIGJ1dHRvbnNcclxuXHRcdGlmIChlLmJ1dHRvbiAhPT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvLyByZW1lbWViZXIgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIGRvd24gZXZlbnRcclxuXHRcdHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcclxuXHRcdHRoaXMubW91c2VEb3duWSA9IGUuY2xpZW50WTtcclxuXHJcblx0XHQvLyBzdGFydCBsaXN0ZW5pbmcgdG8gc2V2ZXJhbCBEbkQgcmVsYXRlZCBldmVudHMgb24gdGhlIGRvY3VtZW50LlxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIEVpdGhlciBzdGFydCBvciBjb250aW51ZSBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHQvLyBwcmltYXJ5IGJ1dHRvbiBtdXN0IGJlIHN0aWxsIHByZXNzZWRcclxuXHRcdGlmICgoZS5idXR0b25zICYgMSkgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBuZWVkIHRvIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gLSBvdGhlcndpc2UgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIG9uIHRoZSBwYWdlLlxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIGlmIERuRCBvcGVyYXRpb24gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcyBmaXJlIGV2ZW50czsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHRoZVxyXG5cdFx0Ly8gbW91c2UgbW92ZWQgZW5vdWdoIHRvIHN0YXJ0IHRoZSBvcGVyYXRpb24uXHJcblx0XHRpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlRHJhZ1N0ZXAoIGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY3ggPSBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blg7XHJcblx0XHRcdGxldCBjeSA9IGUuY2xpZW50WSAtIHRoaXMubW91c2VEb3duWTtcclxuXHRcdFx0aWYgKGN4ID49IC0yICYmIGN4IDw9IDIgJiYgY3kgPj0gLTIgJiYgY3kgPD0gMilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHJcblx0XHRcdHRoaXMuaW5pdGlhdGVEcmFnT3BlcmF0aW9uKCBlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIG9uTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVEcm9wKCBlKTtcclxuXHJcblx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBDYW5jZWxzIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAoZS5rZXlDb2RlID09PSAyNylcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgRXNjYXBlIC0gY2FuY2VsIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcblx0XHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmNhbmNlbERyYWdPcGVyYXRpb24oIGUpO1xyXG5cclxuXHRcdFx0dGhpcy5jbGVhbnVwRHJhZ09wZXJhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5lbXVsRGF0YVRyYW5zZmVyICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaGFuZGxlS2V5RXZlbnQoIGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXl1cCBldmVudHNcclxuXHRwcml2YXRlIG9uS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5oYW5kbGVLZXlFdmVudCggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWF0ZXMgZHJhZyBhbmQgZHJvcCBvcGVyYXRpb25cclxuXHRwcml2YXRlIGluaXRpYXRlRHJhZ09wZXJhdGlvbiggZTogTW91c2VFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoXCJzZXREcmFnSW1hZ2VcIiBpbiBEYXRhVHJhbnNmZXIucHJvdG90eXBlKVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bERhdGFUcmFuc2ZlcigpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSBuZXcgRW11bExlZ2FjeURhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRcdC8vIGZpcmUgb25EcmFnU3RhcnQgZXZlbnQgLSBpZiB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgcHJldmVudGVkLCB3ZSBjYW5jZWwgdGhlIG9wZXJhdGlvblxyXG5cdFx0bGV0IGRyYWdzdGFydEV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdzdGFydFwiKTtcclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIGRyYWdzdGFydEV2ZW50KTtcclxuXHRcdGlmIChkcmFnc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFudXBEcmFnT3BlcmF0aW9uKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB0aGUgZHJhZyBzb3VyY2UgZGlkbid0IHNldCBhbiBlbGVtZW50IGZvciBkcmFnIGltYWdlLCB1c2UgdGhlIGVsZW1lbnQgaXRzZWxmLlxyXG5cdFx0aWYgKCF0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjYWxjdWx0ZSBkcmFnIGltYWdlIGNvb3JkaW5hdGVzIHNvIHRoYXQgaW5pdGlhbGx5IHRoZSBkcmFnIGltYWdlIGNvaW5zaWRlcyB3aXRoXHJcblx0XHRcdC8vIHRoZSBvcmlnaW5hbCBpbWFnZVxyXG5cdFx0XHRsZXQgcmM6IENsaWVudFJlY3QgPSB0aGlzLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSggdGhpcy5lbG0sIGUuY2xpZW50WCAtIHJjLmxlZnQsIGUuY2xpZW50WSAtIHJjLnRvcCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCB3ZSBkb24ndCBrbm93IGxhc3QgdGFyZ2V0IHlldFxyXG5cdFx0dGhpcy5sYXN0VGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBwZXJmb3JtIGEgZHJhZyBzdGVwXHJcblx0XHR0aGlzLmhhbmRsZURyYWdTdGVwKCBlKTtcclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlIG9uZSBzdGVwIG9mIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uLCB3aGljaCBvY2N1cnMgd2hlbiB0aGUgbW91c2UgbW92ZXNcclxuXHRwcml2YXRlIGhhbmRsZURyYWdTdGVwKCBlOiBNb3VzZUV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaXNJbWFnZUVsbVJlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByZXBhcmVJbWFnZUVsZW1lbnQoKTtcclxuXHRcdFx0dGhpcy5lbXVsRGF0YVRyYW5zZmVyLmlzSW1hZ2VFbG1SZXNldCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJlZm9yZSBzZW5kaW5nIGRyYWdvdmVyIGV2ZW50IHdlIHNldCB0aGUgZHJvcEVmZmVjdCB0byBub25lLCBhbmQgdGhlIGRyb3BvdmVyIGhhbmRsZXJcclxuXHRcdC8vIGNvdWxkIHNldCBpdCB0byBzb21ldGhpbmcgZWxzZSBpZiBkZXNpcmVkXHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdC8vIGZpbmQgZWxlbWVudCB1bmRlciB0aGUgY3Vyc29yXHJcblx0XHRpZiAodGhpcy5pbWFnZUVsbSkgdGhpcy5pbWFnZUVsbS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0bGV0IG5ld1RhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKSB0aGlzLmltYWdlRWxtLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0aWYgKG5ld1RhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgYXJlIG9uIHRoZSBzYW1lIHRhcmdldCBhcyB0aGUgcHJldmlvdXMgbW91c2UgbW92ZSwganVzdCBzZW5kIGRyYWdvdmVyIChpZlxyXG5cdFx0XHQvLyB0aGUgdGFyZ2V0IGlzIGEgdmFsaWQgZHJvcCB6b25lKVxyXG5cdFx0XHRpZiAobmV3VGFyZ2V0ID09PSB0aGlzLmxhc3RUYXJnZXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJhZ292ZXJcIik7XHJcblx0XHRcdFx0XHRuZXdUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZHJhZ292ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBzZW5kIGRyYWdlbnRlciB0byB0aGUgbmV3IHRhcmdldCBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgYSB2YWxpZCBkcm9wXHJcblx0XHRcdFx0Ly8gem9uZVxyXG5cdFx0XHRcdGxldCBkcmFnZW50ZXJFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnZW50ZXJcIik7XHJcblx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdlbnRlckV2ZW50KTtcclxuXHRcdFx0XHRsZXQgaXNOZXdUYXJnZXREcm9wcGFibGU6IGJvb2xlYW4gPSBkcmFnZW50ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cclxuXHRcdFx0XHQvLyBzZW5kIHRoZSBsYXN0IHRhcmdldCAoaWYgZXhpc3RzIGFuZCBpcyBkcm9wcGFibGUpIHRoZSBkcmFnbGVhdmUgZXZlbnQuXHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgdGFyZ2V0IGFuZCB3aGV0aGVyIGl0IGlzIGEgdmFsaWQgZHJvcCB6b25lXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0ID0gbmV3VGFyZ2V0O1xyXG5cdFx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gaXNOZXdUYXJnZXREcm9wcGFibGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGlzTmV3VGFyZ2V0RHJvcHBhYmxlO1xyXG5cclxuXHRcdFx0XHQvLyBpZiBvdXIgbmV3IHRhcmdldCBpcyBkcm9wcGFiYWxlLCBzZW5kIGRyYWdvdmVyIHRvIGl0XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHRcdFx0bmV3VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIGRyYWdvdmVyRXZlbnQpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZU9uTGFzdFRhcmdldCA9IGRyYWdvdmVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgd2UgZG9udCBoYXZlIG5ldyB0YXJnZXQgYnV0IGhhdmUgbGFzdCBvbmUgdGFyZ2V0LCBzZW5kIGRyYWdsZWF2ZSB0byB0aGUgbGFzdCBvbmVcclxuXHRcdFx0Ly8gKGlmIHRoZSBsYXN0IHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSlcclxuXHRcdFx0aWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZSwgXCJkcmFnXCIpKTtcclxuXHJcblx0XHQvLyBtb3ZlIHRoZSBkcmFnIGltYWdlIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggLSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICsgXCJweFwiO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyBcInB4XCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdGlmICh0aGlzLmRyb3BFZmZlY3RFbG0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5zZXREcm9wRWZmZWN0SW1hZ2VDdWUoIGRyb3BFZmZlY3QpO1xyXG5cdFx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUubGVmdCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVggKyAxMiArIFwicHhcIjtcclxuXHRcdFx0dGhpcy5kcm9wRWZmZWN0RWxtLnN0eWxlLnRvcCA9IHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKyAwICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIGxhc3QgbW91c2UgZXZlbnQgLSB3ZSBtYXkgdXNlIGl0IHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cyBpZiB3ZSBuZWVkIHRvXHJcblx0XHQvLyBkaXNwYXRjaCBkcmFnIGV2ZW50cyB1cG9uIGtleWJvYXJkIGV2ZW50cyAoZS5nLiBjYW5jZWwgb3BlcmF0aW9uIHdoZW4gRXNjYXBlIGlzIHByZXNzZWRcclxuXHRcdC8vIG9yIGRyYWdvdmVyIGV2ZW50IGlmIEN0cmwsIEFsdCBvciBTaGlmdCBidXR0b25zIGFyZSBwcmVzc2VkKS5cclxuXHRcdHRoaXMubGFzdE1vdXNlRXZlbnQgPSBlO1xyXG59O1xyXG5cdFxyXG5cclxuXHJcblx0Ly8gSGFuZGxlcyBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMgZHVyaW5nIGRyYWcgb3BlcmF0aW9uIGJ5IHNlbmRpbmcgZHJhZ292ZXIgZXZlbnQuXHJcblx0cHJpdmF0ZSBoYW5kbGVLZXlFdmVudChlOiBLZXlib2FyZEV2ZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxhc3RUYXJnZXQgJiYgdGhpcy5pc0xhc3RUYXJnZXREcm9wcGFibGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdvdmVyXCIpO1xyXG5cdFx0XHR0aGlzLmxhc3RUYXJnZXQuZGlzcGF0Y2hFdmVudCggZHJhZ292ZXJFdmVudCk7XHJcblx0XHRcdHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQgPSBkcmFnb3ZlckV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XHJcblxyXG5cdFx0XHQvLyBzZW5kIGRyYWcgZXZlbnQgdG8gb3VyIHNvdXJjZVxyXG5cdFx0XHR0aGlzLmVsbS5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlLCBcImRyYWdcIikpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGltYWdlIGJhc2VkIG9uIHRoZSBsYXRlc3QgZmVlZGJhY2tcclxuXHRcdFx0aWYgKHRoaXMuZHJvcEVmZmVjdEVsbSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSB0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID8gdGhpcy5lbXVsRGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgOiBcIm5vbmVcIjtcclxuXHRcdFx0XHR0aGlzLnNldERyb3BFZmZlY3RJbWFnZUN1ZSggZHJvcEVmZmVjdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFRha2VzIHRoZSBpbWFnZSBlbGVtZW50IChpZiBhbnkpIHNwZWNpZmllZCB2aWEgdGhlIGNhbGwgdG8gc2V0RHJhZ0ltYWdlIGFuZCBjbG9uZXMgaXQgaW50b1xyXG5cdC8vIGEgc3BlY2lhbCBkaXYgdGhhdCB3aWxsIGJlIHNob3duIGR1cmluZyB0aGUgZHJhZyBvcGVyYXRpb25cclxuXHRwcml2YXRlIHByZXBhcmVJbWFnZUVsZW1lbnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcHJldmlvdXMgaW1hZ2UgZWxlbWVudCwgcmVtb3ZlIGl0IG5vd1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VFbG0pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0ucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuaW1hZ2VFbG0gPT0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvcmdFbG06IEVsZW1lbnQgPSB0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG07XHJcblx0XHRpZiAoIW9yZ0VsbSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50LCB3aGljaCB3aWxsIHdyYXAgdGhlIGltYWdlIGVsZW1lbnQgYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcblx0XHQvLyBkb2N1bWVudCBib2R5IHdpdGggYWJzb2x1dGUgcG9zaXRpb25pbmcgYW5kIHNvbWUgb3BhY2l0eVxyXG5cdFx0bGV0IGRpdkVsbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiKTtcclxuXHJcblx0XHQvLyBjbG9uZSB0aGUgb3JpZ2luYWwgZWxlbWVudCBiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBtb3ZlIGl0IGFyb3VuZC5cclxuXHRcdGxldCBjbG9uZWRFbG06IEVsZW1lbnQgPSBvcmdFbG0uY2xvbmVOb2RlKCkgYXMgRWxlbWVudDtcclxuXHJcblx0XHQvLyBpZiB0aGUgaW1hZ2UgZWxlbWVudCBzZXQgdmlhIHNldERyYWdJbWFnZSBpcyBhbiBTVkcgZWxlbWVudCBidXQgbm90IHRoZSA8c3ZnPiBlbGVtZW50XHJcblx0XHQvLyBpdHNlbGYsIHRoZW4gd3JhcCBpdCBpbiBhbiA8c3ZnPiBlbGVtZW50LlxyXG5cdFx0aWYgKG1pbS5pc1N2Zyggb3JnRWxtKSAmJiAhbWltLmlzU3ZnU3ZnKCBvcmdFbG0pKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ZnRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG5cdFx0XHRzdmdFbG0uYXBwZW5kQ2hpbGQoIGNsb25lZEVsbSk7XHJcblx0XHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggc3ZnRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZGl2RWxtLmFwcGVuZENoaWxkKCBjbG9uZWRFbG0pO1xyXG5cclxuXHRcdC8vIHN0eWxlIHRoZSBkaXYgZWxlbWVudCB3aXRoIGFic29sdXRlIHBvc2l0aW9uaW5nIGFuZCBzb21lIG9wYWNpdHlcclxuXHRcdGRpdkVsbS5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcclxuXHRcdGRpdkVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcblx0XHQvLyBhZGQgYSBzcGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgXCJkcm9wRWZmZWN0XCIgaW1hZ2VcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiKTtcclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHRcdGRpdkVsbS5hcHBlbmRDaGlsZCggdGhpcy5kcm9wRWZmZWN0RWxtKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkaXZFbG0pO1xyXG5cdFx0dGhpcy5pbWFnZUVsbSA9IGRpdkVsbTtcclxuXHJcblx0XHQvLyBjb21wYXJlIHRoZSBib3VuZGluZyByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgc2V0IHZpYSBzZXREcmFnSW1hZ2UgYW5kIHRoZSB3cmFwcGluZyBkaXZcclxuXHRcdC8vIGVsZW1lbnQuIFRoZWlyIHRvcC1sZWZ0IGNvb3JkaW5hdGVzIG1heSBub3QgY29pbnNpZGUgZHVlIHRvIHNldmVyYWwgZmFjdG9ycyAoZS5nLlxyXG5cdFx0Ly8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb3IgU1ZHIGNvb3JkaW5hdGVzKS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgYWRqdXN0IHRoZSB4IGFuZCB5XHJcblx0XHQvLyBjb29yZGluYXRlcyBpbiB0aGUgRW11bERhdGFUcmFuc2ZlciBvYmplY3QuXHJcblx0XHRsZXQgcmNDbG9uZWRFbG06IENsaWVudFJlY3QgPSBjbG9uZWRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcmNEaXZFbG06IENsaWVudFJlY3QgPSBkaXZFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRpZiAocmNDbG9uZWRFbG0ubGVmdCAhPSByY0RpdkVsbS5sZWZ0KVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuaW1hZ2VFbG1YICs9IHJjQ2xvbmVkRWxtLmxlZnQgLSByY0RpdkVsbS5sZWZ0O1xyXG5cdFx0aWYgKHJjQ2xvbmVkRWxtLnRvcCAhPSByY0RpdkVsbS50b3ApXHJcblx0XHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5pbWFnZUVsbVkgKz0gcmNDbG9uZWRFbG0udG9wIC0gcmNEaXZFbG0udG9wO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEaXNwbGF5IHNtYWxsIGltYWdlIGluZGljYXRpbmcgd2hhdCBkcm9wIGVmZmVjdCBpcyBleHBlY3RlZFxyXG5cdHByaXZhdGUgc2V0RHJvcEVmZmVjdEltYWdlQ3VlKCBkcm9wRWZmZWN0OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cdFx0bGV0IGNvbG9yOiBzdHJpbmc7XHJcblx0XHRzd2l0Y2goIGRyb3BFZmZlY3QpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgXCJub25lXCI6XHJcblx0XHRcdFx0Y2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1iYW5cIjtcclxuXHRcdFx0XHRjb2xvciA9IFwicmVkXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiY29weVwiOlxyXG5cdFx0XHRcdGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtcGx1c1wiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJncmVlblwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImxpbmtcIjpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWxpbmtcIjtcclxuXHRcdFx0XHRjb2xvciA9IFwiYmx1ZVwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHRcdGNvbG9yID0gXCJibGFja1wiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJvcEVmZmVjdEVsbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcblx0XHR0aGlzLmRyb3BFZmZlY3RFbG0uc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmluaXNoIGRyYWcgb3BlcmF0aW9uIGlmIHRoZSB0YXJnZXQgYWNjZXB0cyBpdC5cclxuXHRwcml2YXRlIGhhbmRsZURyb3AoIGU6IE1vdXNlRXZlbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0byBmaW5kIGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvciBiZWNhdXNlIGRyb3AgYWx3YXlzIG9jY3VycyBvbiB0aGUgbGFzdFxyXG5cdFx0Ly8gZm91bmQgdGFyZ2V0IChvciBubyB0YXJnZXQgYXQgYWxsKVxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQpXHJcblx0XHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsIFwiZHJvcFwiKSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNMYXN0VGFyZ2V0RHJvcHBhYmxlKVxyXG5cdFx0XHRcdHRoaXMubGFzdFRhcmdldC5kaXNwYXRjaEV2ZW50KCB0aGlzLmNyZWF0ZURyYWdFdmVudEZyb21Nb3VzZUV2ZW50KCBlLCBcImRyYWdsZWF2ZVwiKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibm9uZVwiO1xyXG5cclxuXHRcdHRoaXMuZWxtLmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbU1vdXNlRXZlbnQoIGUsICBcImRyYWdlbmRcIikpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FuY2VsIGRyYWcgb3BlcmF0aW9uIGlmIGNhbmNlbCB3YXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgY2FuY2VsRHJhZ09wZXJhdGlvbiggZTogS2V5Ym9hcmRFdmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IERuRCB3YXMgY2FuY2VsZWRcclxuXHRcdHRoaXMuZW11bERhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJub25lXCI7XHJcblxyXG5cdFx0Ly8gc2VuZCB0aGUgbGFzdCB0YXJnZXQgKGlmIGV4aXN0cyBhbmQgaXMgZHJvcHBhYmxlKSB0aGUgZHJhZ2xlYXZlIGV2ZW50LlxyXG5cdFx0aWYgKHRoaXMubGFzdFRhcmdldCAmJiB0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZSlcclxuXHRcdFx0dGhpcy5sYXN0VGFyZ2V0LmRpc3BhdGNoRXZlbnQoIHRoaXMuY3JlYXRlRHJhZ0V2ZW50RnJvbUtleWJvYXJkRXZlbnQoIGUsIFwiZHJhZ2xlYXZlXCIpKTtcclxuXHJcblx0XHQvLyBmaXJlIG9uRHJhZ0VuZCBldmVudFxyXG5cdFx0dGhpcy5lbG0uZGlzcGF0Y2hFdmVudCggdGhpcy5jcmVhdGVEcmFnRXZlbnRGcm9tS2V5Ym9hcmRFdmVudCggZSwgXCJkcmFnZW5kXCIpKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIENsZWFuIHVwIGFmdGVyIGRyYWcgb3BlcmF0aW9uIGZpbmlzaGVzIHdpdGggZWl0aGVyIGRyb3Agb3IgY2FuY2VsYXRpb25cclxuXHRwcml2YXRlIGNsZWFudXBEcmFnT3BlcmF0aW9uKClcclxuXHR7XHJcblx0XHQvLyBkZXN0cm95IHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0XHR0aGlzLmVtdWxEYXRhVHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcclxuXHJcblx0XHR0aGlzLmxhc3RUYXJnZXQgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmlzTGFzdFRhcmdldERyb3BwYWJsZT0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlT25MYXN0VGFyZ2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICh0aGlzLmltYWdlRWxtKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmltYWdlRWxtID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gY3JlYXRlcyBEcmFnRXZlbnQgZnJvbSB0aGUgZ2l2ZW4gTW91c2VFdmVudCBhbmQgdGhlIHN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0XHJcblx0cHJpdmF0ZSBjcmVhdGVEcmFnRXZlbnRGcm9tTW91c2VFdmVudCggZTogTW91c2VFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZSk6IERyYWdFdmVudFxyXG5cdHtcclxuXHRcdC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG5ldyBEcmFnRXZlbnQgeWV0LCB3aGlsZSBDaHJvbWUgZG9lc24ndCBzdXBwb3J0IGluaXREcmFnRXZlbnRcclxuXHRcdGlmIChcImluaXREcmFnRXZlbnRcIiBpbiBEcmFnRXZlbnQucHJvdG90eXBlKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZHJhZ0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0RyYWdFdmVudCcpO1xyXG5cdFx0XHQoZHJhZ0V2ZW50IGFzIGFueSkuaW5pdERyYWdFdmVudCggdHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIGUudmlldywgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLFxyXG5cdFx0XHRcdFx0XHRcdGUuY2xpZW50WCwgZS5jbGllbnRZLCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIGUuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdGUucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogZS5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogZS5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IGUuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiBlLmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiBlLnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogZS5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IGUuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgRHJhZ0V2ZW50IGZyb20gdGhlIGdpdmVuIEtleWJvYXJkRXZlbnQgYW5kIHRoZSBEYXRhVHJhbnNmZXIgb2JqZWN0LiBVc2VzIGxhc3QgcmVtZW1iZXJlZFxyXG5cdC8vIG1vdXNlIGV2ZW50IHRvIGZpbGwgY29vcmRpbmF0ZXMgYW5kIGJ1dHRvbiBpbmZvcm1hdGlvbi5cclxuXHRwcml2YXRlIGNyZWF0ZURyYWdFdmVudEZyb21LZXlib2FyZEV2ZW50KCBlOiBLZXlib2FyZEV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50XHJcblx0e1xyXG5cdFx0Ly8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgbmV3IERyYWdFdmVudCB5ZXQsIHdoaWxlIENocm9tZSBkb2Vzbid0IHN1cHBvcnQgaW5pdERyYWdFdmVudFxyXG5cdFx0aWYgKFwiaW5pdERyYWdFdmVudFwiIGluIERyYWdFdmVudC5wcm90b3R5cGUpXHJcblx0XHR7XHJcblx0XHRcdGxldCBkcmFnRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRHJhZ0V2ZW50Jyk7XHJcblx0XHRcdChkcmFnRXZlbnQgYXMgYW55KS5pbml0RHJhZ0V2ZW50KCB0eXBlLCBlLmJ1YmJsZXMsIGUuY2FuY2VsYWJsZSwgZS52aWV3LCBlLmRldGFpbCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LnNjcmVlblgsIHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFgsIHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WSxcclxuXHRcdFx0XHRcdFx0XHRlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIHRoaXMubGFzdE1vdXNlRXZlbnQuYnV0dG9uLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdE1vdXNlRXZlbnQucmVsYXRlZFRhcmdldCwgdGhpcy5lbXVsRGF0YVRyYW5zZmVyKTtcclxuXHRcdFx0cmV0dXJuIGRyYWdFdmVudDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBEcmFnRXZlbnQgKCB0eXBlLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnViYmxlczogZS5idWJibGVzLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcclxuXHRcdFx0XHRkZXRhaWw6IGUuZGV0YWlsLFxyXG5cdFx0XHRcdHZpZXc6IGUudmlldyxcclxuXHRcdFx0XHRhbHRLZXk6IGUuYWx0S2V5LFxyXG5cdFx0XHRcdGJ1dHRvbjogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b24sXHJcblx0XHRcdFx0YnV0dG9uczogdGhpcy5sYXN0TW91c2VFdmVudC5idXR0b25zLFxyXG5cdFx0XHRcdGNsaWVudFg6IHRoaXMubGFzdE1vdXNlRXZlbnQuY2xpZW50WCxcclxuXHRcdFx0XHRjbGllbnRZOiB0aGlzLmxhc3RNb3VzZUV2ZW50LmNsaWVudFksXHJcblx0XHRcdFx0Y3RybEtleTogZS5jdHJsS2V5LFxyXG5cdFx0XHRcdG1ldGFLZXk6IGUubWV0YUtleSxcclxuXHRcdFx0XHRyZWxhdGVkVGFyZ2V0OiB0aGlzLmxhc3RNb3VzZUV2ZW50LnJlbGF0ZWRUYXJnZXQsXHJcblx0XHRcdFx0c2NyZWVuWDogdGhpcy5sYXN0TW91c2VFdmVudC5zY3JlZW5YLFxyXG5cdFx0XHRcdHNjcmVlblk6IHRoaXMubGFzdE1vdXNlRXZlbnQuc2NyZWVuWSxcclxuXHRcdFx0XHRzaGlmdEtleTogZS5zaGlmdEtleSxcclxuXHRcdFx0XHRkYXRhVHJhbnNmZXI6IHRoaXMuZW11bERhdGFUcmFuc2ZlcixcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvb3JkaW5hdGVzIG9mIHRoZSBtb3VzZSBkb3duIGV2ZW50IGZvciB0aGUgcHJpbWFyeSBidXR0b24uIFdlIHdpbGwgc3RhcnQgZW11bGF0aW5nIERuRCBpZlxyXG5cdC8vIHRoZSBtb3VzZSBtb3ZlcyBtb3JlIHRoYW4gdHdvIHBpeGVscyBpbiBlaXRoZXIgZGlyZWN0aW9uIHdoaWxlIHRoZSBwcmltYXJ5IGJ1dHRvbiBpcyBzdGlsbFxyXG5cdC8vIGRvd24uXHJcblx0cHJpdmF0ZSBtb3VzZURvd25YOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBtb3VzZURvd25ZOiBudW1iZXI7XHJcblxyXG5cdC8vIFN0YXRpYyBEYXRhVHJhbnNmZXIgb2JqZWN0IHRoYXQgaXMgdXNlZCBkdXJpbmcgYSBkcmFnIGFuZCBkcm9wIG9wZXJhdGlvbi4gSXQgaXMgY3JlYXRlZFxyXG5cdC8vIHdoZW4gRG5EIHN0YXJ0cyBhbmQgaXMgZGVzdHJveWVkIGFmdGVyIGl0IGZpbmlzaGVzLiBQcmVzZW5jZSBvZiB0aGlzIG9iamVjdCBhbHNvIGluZGljYXRlc1xyXG5cdC8vIHRoYXQgdGhlIERuRCBvcGVyc3Rpb24gaXMgaW4gcHJvZ3Jlc3NcclxuXHRwcml2YXRlIGVtdWxEYXRhVHJhbnNmZXI6IElFbXVsRGF0YVRyYW5zZmVyO1xyXG5cclxuXHQvLyBDbG9uZWQgZWxlbWVudCB1c2VkIHRvIGFzIGFuIGltYWdlIGR1cmluZyBkcmFnIG9wZXJhdGlvblxyXG5cdHByaXZhdGUgaW1hZ2VFbG06IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHQvLyBTdWItZWxlbWVudCBvZiB0aGUgaW1hZ2UgZWxlbWVudCB0aGF0IHNob3dzIGRyb3AgZWZmZWN0XHJcblx0cHJpdmF0ZSBkcm9wRWZmZWN0RWxtOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG5cdC8vIFRoZSBsYXN0IGVsZW1lbnQgdW5kZXIgdGhlIGN1cnNvclxyXG5cdHByaXZhdGUgbGFzdFRhcmdldDogRWxlbWVudDtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxhc3QgdGFyZ2V0IHVuZGVyIHRoZSBjdXJzb3Igd2FzIGEgdmFsaWQgZHJvcCB6b25lLiBUaGlzIGlzXHJcblx0Ly8gbmVlZGVkIHRvIG5vdCBzZW5kIGRyYWdvdmVyIGFuZCBkcmFnbGVhdmUgZXZlbnRzIHRvIG5vbi1kcm9wcGFibGUgdGFyZ2V0cy4gVGhpcyBmbGFnIGlzXHJcblx0Ly8gc2V0IHRvIHRydWUgd2hlbiB0aGUgZHJhZ2VudGVyIGV2ZW50IHNlbnQgdG8gdGhlIHRhcmdldCBoYXMgaXRzIHByZXZlbnREZWZhdWx0IG1ldGhvZFxyXG5cdC8vIGNhbGxlZC4gSWYgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZSwgZHJhZ292ZXIsIGRyYWdsZWF2ZSBhbmQgZHJvcCBldmVudHMgYXJlIG5vdCBzZW50XHJcblx0Ly8gdG8gdGhpcyB0YXJnZXQuXHJcblx0cHJpdmF0ZSBpc0xhc3RUYXJnZXREcm9wcGFibGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBkcm9wIGlzIHBvc3NpYmxlIG9uIHRoZSBsYXN0IHRhcmdldC4gVGhpcyBmbGFnIGlzIG5lZWRlZCBiZWNhdXNlXHJcblx0Ly8gZXZlbiBpZiBhIHRhcmdldCBpcyBhIHZhbGlkIGRyb3Agem9uZSwgbm90IGFsbCBsb2NhdGlvbnMgd2l0aGluIHRoZSB0YXJnZXQgbWlnaHQgYWNjZXB0IHRoZVxyXG5cdC8vIGRyb3AuIFRoaXMgZmxhZyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBkcmFnb3ZlciBldmVudCBzZW50IHRvIHRoZSB0YXJnZXQgaGFzIGl0c1xyXG5cdC8vIHByZXZlbnREZWZhdWx0IG1ldGhvZCBjYWxsZWQuIElmIHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UsIGRyb3AgZXZlbnQgd2lsbCBub3QgYmUgc2VudCB0b1xyXG5cdC8vIHRoaXMgdGFyZ2V0LlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGVPbkxhc3RUYXJnZXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIExhdGVzdCBNb3VzZUV2ZW50IG9iamVjdCwgd2hjaWggd2UgdXNlIHRvIGNyZWF0ZSBEcmFnRXZlbnQgb2JqZWN0cy5cclxuXHRwcml2YXRlIGxhc3RNb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RyYWdEcm9wRWZmZWN0LCBEcmFnQWxsb3dlZEVmZmVjdHMsIERyYWdUYXJnZXRQcm9wVHlwZSwgSURyYWdUYXJnZXQsIElTaW1wbGVEcmFnVGFyZ2V0LCBJRHJhZ1RhcmdldEV2ZW50fSBmcm9tIFwiLi9EcmFnRHJvcEFwaVwiO1xyXG5pbXBvcnQge0RyYWdBbmREcm9wRGF0YX0gZnJvbSBcIi4vRGF0YVRyYW5zZmVyXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRHJhZ1RhcmdldEV2ZW50IGNsYXNzIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIGRpZmZlcmVudCBldmVudCBoYW5kbGVyc1xyXG4vLyBvbiB0aGUgZHJhZyB0YXJnZXQgZWxlbWVudHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBEcmFnVGFyZ2V0RXZlbnQgaW1wbGVtZW50cyBJRHJhZ1RhcmdldEV2ZW50XHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIEhUTUw1IERyYWdFdmVudCBvYmplY3QuXHJcblx0Z2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnQgeyByZXR1cm4gdGhpcy5tX2RyYWdFdmVudDsgfVxyXG5cdHNldCBkcmFnRXZlbnQoIHZhbDogRHJhZ0V2ZW50KSB7IHRoaXMubV9kcmFnRXZlbnQgPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGEgdHlwZSBpcyBhdmFpbGFibGUuXHJcblx0aGFzVHlwZSggdHlwZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiBEcmFnQW5kRHJvcERhdGEuaGFzVHlwZSggdGhpcy5kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLCB0eXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVyaWV2ZXMgZGF0YSBmb3IgdGhlIGdpdmVuIHR5cGUuIElmIHRoZSB0eXBlIGlzIG5vdCBhdmFpbGFibGUsIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cdGdldERhdGEoIHR5cGU6IHN0cmluZyk6IGFueVxyXG5cdHtcclxuXHRcdGxldCBkYXRhOiBhbnkgPSBEcmFnQW5kRHJvcERhdGEuZ2V0T2JqZWN0RGF0YSggdHlwZSk7XHJcblx0XHRyZXR1cm4gZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YSA6IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoIHR5cGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQuXHJcblx0aGFzRmlsZXMoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBmaWxlcyA9IHRoaXMubV9kcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG5cdFx0cmV0dXJuIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlcmlldmVzIGFycmF5IG9mIGZpbGVzLiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBmaWxlcyBhcmUgbm90IGJlaW5nIGRyYWdnZWQuIFRoZSBvYmplY3RzIGluXHJcblx0Ly8gdGhlIHJldHVybmVkIGFycmF5IGFyZSBvZiB0eXBlIFdlYktpdEVudHJ5ICh3ZSBjYW5ub3Qgc3BlY2lmeSBpdCBhcyBzdWNoIGhlcmUgYmVjYXVzZSB0aGVcclxuXHQvLyBjdXJyZW50IFR5cGVzY3JpcHQgaXMgZGlzdHJpYnV0ZWQgd2l0aCAuZC50cyBsaWJyYXJpZXMgdGhhdCBkb24ndCBkZWZpbmUgdGhpcyB0eXBlLlxyXG5cdGdldEZpbGVzKCk6IGFueVtdXHJcblx0e1xyXG5cdFx0bGV0IGl0ZW1zID0gdGhpcy5tX2RyYWdFdmVudC5kYXRhVHJhbnNmZXIuaXRlbXM7XHJcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHRsZXQgZW50cmllczogYW55W10gPSBbXTtcclxuXHRcdGlmIChpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdGVudHJpZXMucHVzaCggaXRlbXNbaV0ud2Via2l0R2V0QXNFbnRyeSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZW50cmllcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBIVE1MNSBEcmFnRXZlbnQgb2JqZWN0LlxyXG5cdHByaXZhdGUgbV9kcmFnRXZlbnQ6IERyYWdFdmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIERyYWdUYXJnZXRIYW5kbGVyIGNsYXNzIGltcGxlbWVudHMgc3VwcG9ydCBmb3IgSFRNTDUgRHJhZyBhbmQgRHJvcCB0YXJnZXQgZnVuY3Rpb25hbGl0eS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBEcmFnVGFyZ2V0SGFuZGxlclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGVsbTogRWxlbWVudCwgZHJhZ1RhcmdldDogRHJhZ1RhcmdldFByb3BUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuZWxtID0gZWxtO1xyXG5cclxuXHRcdGlmICgoZHJhZ1RhcmdldCBhcyBJRHJhZ1RhcmdldCkub25Ecm9wICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldCA9IGRyYWdUYXJnZXQgYXMgSURyYWdUYXJnZXQ7XHJcblx0XHRlbHNlIGlmICgoZHJhZ1RhcmdldCBhcyBJU2ltcGxlRHJhZ1RhcmdldCkub25EYXRhRHJvcHBlZCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLnNpbXBsZURyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0IGFzIElTaW1wbGVEcmFnVGFyZ2V0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgaW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSBuZXcgRHJhZ1RhcmdldEV2ZW50KCk7XHJcblx0XHR0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdHRoaXMuZWxtLmFkZEV2ZW50TGlzdGVuZXIoIFwiZHJhZ2VudGVyXCIsIHRoaXMub25EcmFnRW50ZXIpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggXCJkcmFnbGVhdmVcIiwgdGhpcy5vbkRyYWdMZWF2ZSk7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyYWdvdmVyXCIsIHRoaXMub25EcmFnT3Zlcik7XHJcblx0XHR0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKCBcImRyb3BcIiwgdGhpcy5vbkRyb3ApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdGVybSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJkcmFnZW50ZXJcIiwgdGhpcy5vbkRyYWdFbnRlcik7XHJcblx0XHR0aGlzLmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCBcImRyYWdsZWF2ZVwiLCB0aGlzLm9uRHJhZ0xlYXZlKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJhZ292ZXJcIiwgdGhpcy5vbkRyYWdPdmVyKTtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiZHJvcFwiLCB0aGlzLm9uRHJvcCk7XHJcblxyXG5cdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25EcmFnRW50ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0Ly8gd2Ugd2lsbCBjYWxsIHRoZSBvbkRyYWdFbnRlciBjYWxsYmFjayBvbmx5IGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGRyYWdlbnRlclxyXG5cdFx0Ly8gZXZlbnQgaXMgZmlyZWQgb24gb3VyIGVsZW1lbnQgb3Igb24gb25lIG9mIGNoaWxkIG5vbi1kcmFnLXRhcmdldCBlbGVtZW50cy5cclxuXHRcdGlmICh0aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIrKyA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gaWYgSURyYWdUYXJnZXQudHlwZXMgcHJvcGVydHkgaXMgZGVmaW5lZCBhbmQgaXMgbm90IGVtcHR5LCBkcmFnIHdpbGwgYmUgcG9zc2libGVcclxuXHRcdC8vIG9ubHkgaWYgdGhlIGRhdGEgYmVpbmcgZHJhZ2dlZCBoYXMgYXQgbGVhc3Qgb24gdHlwZSBmcm9tIHRoZSB0eXBlcyBhcnJheS5cclxuXHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIHRoaXMuc2ltcGxlRHJhZ1RhcmdldC5kYXRhVHlwZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoRHJhZ0FuZERyb3BEYXRhLmhhc1R5cGUoIGUuZGF0YVRyYW5zZmVyLCB0eXBlKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmlzRHJvcFBvc3NpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgbm8gc3VpdGFibGUgdHlwZSBmb3VuZCwgd2UgZG9uJ3QgY2FsbCBlLnByZXZlbnREZWZhdWx0LCB3aGljaCBkaXNhbGxvd3MgZHJvcFxyXG5cdFx0XHRpZiAoIXRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbkRyYWdFbnRlciBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIHRoZSBkcmFnIHRhcmdldCwgd2UgY29uc2lkZXIgZHJvcCBwb3NzaWJsZVxyXG5cdFx0XHRpZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0VudGVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0dGhpcy5pc0Ryb3BQb3NzaWJsZSA9IHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNEcm9wUG9zc2libGUpXHJcblx0XHR7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbXBsZURyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFwcGx5IHZpc3VhbCBmZWVkYmFjayBpZiBzcGVjaWZpZWRcclxuXHRcdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gYWx0aG91Z2ggc3R5bGUgcHJvcGVydHkgZXhpc3RzIGluIGJvdGggSFRNTEVsZW1lbnQgYW5kIFNWR0VsZW1lbnQsIGl0IGlzIGRlZmluZWQgb24gYVxyXG5cdFx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdFx0bGV0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKHRoaXMuZWxtIGFzIGFueSBhcyBFbGVtZW50Q1NTSW5saW5lU3R5bGUpLnN0eWxlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHNhdmUgY3VycmVudCB2YWx1ZXMgb2Ygc3R5bGUgcHJvcGVydGllcyBzcGVjaWZpZWQgaW4gZmVlZGJhY2sgYW5kIHNldCB0aGUgc3R5bGUgZnJvbVxyXG5cdFx0XHRcdFx0Ly8gdGhlIGZlZWRiYWNrXHJcblx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGUgPSB7fTtcclxuXHRcdFx0XHRcdGZvciggbGV0IHByb3AgaW4gdGhpcy5zaW1wbGVEcmFnVGFyZ2V0LmZlZWRiYWNrKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNhdmVkU3R5bGVbcHJvcF0gPSBlbG1TdHlsZVtwcm9wXTtcclxuXHRcdFx0XHRcdFx0ZWxtU3R5bGVbcHJvcF0gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZmVlZGJhY2tbcHJvcF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuZHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIGNhbGxiYWNrIGlzIG5vdCBkZWZpbmVkIHdlIG5lZWQgdG8gc2V0IGRyb3AgZWZmZWN0XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdFbnRlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ092ZXIgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IGlzRHJvcFBvc3NpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRpc0Ryb3BQb3NzaWJsZSA9IHRydWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIG9uRHJhZ092ZXIgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiB0aGUgZHJhZyB0YXJnZXQsIHdlIGNvbnNpZGVyIGRyb3AgcG9zc2libGVcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdPdmVyID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjYWxsIHRoZSBvbkRyYWdPdmVyIG1ldGhvZCBhbmQgY29uc2lkZXIgZHJvcCBwb3NzaWJsZSBvbmx5IGlmIGl0IHJldHVybnMgdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdFx0aXNEcm9wUG9zc2libGUgPSB0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzRHJvcFBvc3NpYmxlKVxyXG5cdFx0e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW1wbGVEcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjYWxsYmFjayBpcyBub3QgZGVmaW5lZCB3ZSBuZWVkIHRvIHNldCBkcm9wIGVmZmVjdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdUYXJnZXQub25EcmFnT3ZlciA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZ2V0RGVmYXVsdERyb3BFZmZlY3QoIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uRHJhZ0xlYXZlID0gKGU6IERyYWdFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdC8vIHdlIHdpbGwgY2FsbCB0aGUgb25EcmFnTGVhdmUgY2FsbGJhY2sgb25seSBpZiB0aGUgbW91c2UgY29tcGxldGVseSBsZWF2ZXMgb3VyIGVsZW1lbnQsXHJcblx0XHQvLyB3aGljaCBtZWFucyBvdXIgY291bnRlciByZWFjaGVzIDAuXHJcblx0XHRpZiAoLS10aGlzLmRyYWdUYXJnZXRFbnRlckNvdW50ZXIgPiAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZXZlcnQgdmlzdWFsIGZlZWRiYWNrIChpZiB3YXMgc3BlY2lmaWVkKVxyXG5cdFx0XHRpZiAodGhpcy5zYXZlZFN0eWxlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBhbHRob3VnaCBzdHlsZSBwcm9wZXJ0eSBleGlzdHMgaW4gYm90aCBIVE1MRWxlbWVudCBhbmQgU1ZHRWxlbWVudCwgaXQgaXMgZGVmaW5lZCBvbiBhXHJcblx0XHRcdFx0Ly8gc2VwYXJhdGUgdHlwZSAtIEVsZW1lbnRDU1NJbmxpbmVTdHlsZVxyXG5cdFx0XHRcdGxldCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9ICh0aGlzLmVsbSBhcyBhbnkgYXMgRWxlbWVudENTU0lubGluZVN0eWxlKS5zdHlsZTtcclxuXHJcblx0XHRcdFx0Zm9yKCBsZXQgcHJvcCBpbiB0aGlzLnNhdmVkU3R5bGUpXHJcblx0XHRcdFx0XHRlbG1TdHlsZVtwcm9wXSA9IHRoaXMuc2F2ZWRTdHlsZVtwcm9wXTtcclxuXHJcblx0XHRcdFx0dGhpcy5zYXZlZFN0eWxlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0aGlzLmRyYWdUYXJnZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kcmFnVGFyZ2V0RXZlbnQuZHJhZ0V2ZW50ID0gZTtcclxuXHRcdFx0XHR0aGlzLmRyYWdUYXJnZXQub25EcmFnTGVhdmUoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkRyb3AgPSAoZTogRHJhZ0V2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2ltcGxlRHJhZ1RhcmdldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXhwZWN0ZWRUeXBlczogc3RyaW5nW10gPSB0aGlzLnNpbXBsZURyYWdUYXJnZXQuZGF0YVR5cGVzO1xyXG5cdFx0XHRsZXQgZGF0YU9iaiA9IHt9O1xyXG5cdFx0XHRmb3IoIGxldCB0eXBlIG9mIGUuZGF0YVRyYW5zZmVyLnR5cGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgd2UgaGF2ZSBzb21lIGV4cGVjdGVkIHR5cGVzIGRlZmluZWQgc2tpcCB0aGUgY3VycmVudCB0eXBlIGlmIGl0IGlzIG5vIG9uZVxyXG5cdFx0XHRcdC8vIG9mIHRoZSBleHBlY3RlZFxyXG5cdFx0XHRcdGlmIChleHBlY3RlZFR5cGVzICYmIGV4cGVjdGVkVHlwZXMubGVuZ3RoID4gMCAmJiBleHBlY3RlZFR5cGVzLmluZGV4T2YoIHR5cGUpIDwgMClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgZGF0YSA9IERyYWdBbmREcm9wRGF0YS5nZXRPYmplY3REYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0ZGF0YU9ialt0eXBlXSA9IGRhdGE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCB0eXBlKTtcclxuXHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdGRhdGFPYmpbdHlwZV0gPSBkYXRhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zaW1wbGVEcmFnVGFyZ2V0Lm9uRGF0YURyb3BwZWQoIGRhdGFPYmopO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGhpcy5kcmFnVGFyZ2V0ICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldEV2ZW50LmRyYWdFdmVudCA9IGU7XHJcblx0XHRcdHRoaXMuZHJhZ1RhcmdldC5vbkRyb3AoIHRoaXMuZHJhZ1RhcmdldEV2ZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLy8vIGlmIHRoZSB0YXJnZXQgaW1wbGVtZW50cyBvbkRyYWdMZWF2ZSwgY2FsbCBpdCBub3cgdG8gYWxsb3cgaXQgdG8gY2xlYW51cFxyXG5cdFx0Ly9pZiAodGhpcy5kcmFnVGFyZ2V0Lm9uRHJhZ0xlYXZlICE9PSB1bmRlZmluZWQpXHJcblx0XHQvL3tcclxuXHRcdC8vXHR0aGlzLmRyYWdUYXJnZXRFdmVudC5kcmFnRXZlbnQgPSBlO1xyXG5cdFx0Ly9cdHRoaXMuZHJhZ1RhcmdldC5vbkRyYWdMZWF2ZSggdGhpcy5kcmFnVGFyZ2V0RXZlbnQpO1xyXG5cdFx0Ly99XHJcblxyXG5cdFx0Ly8gY2xlYXIgb3VyIGRyYWdFbnRlckNvdW50ZXJcclxuXHRcdHRoaXMuZHJhZ1RhcmdldEVudGVyQ291bnRlciA9IDA7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGRlZmF1bHQgZHJvcCBlZmZlY3QgYWNjb3JkaW5nIHRvIHRoZSBhbGxvd2VkIGVmZmVjdHMgYW5kIGtleXMgcHJlc3NlZFxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdERyb3BFZmZlY3QoZTogRHJhZ0V2ZW50KTogRHJhZ0Ryb3BFZmZlY3RcclxuXHR7XHJcblx0XHRsZXQgYWxsb3dlZEVmZmVjdHMgPSBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkIGFzIERyYWdBbGxvd2VkRWZmZWN0cztcclxuXHRcdHN3aXRjaCggYWxsb3dlZEVmZmVjdHMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHk6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLk1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lk1vdmU7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbms6XHJcblx0XHRcdFx0cmV0dXJuIERyYWdEcm9wRWZmZWN0Lkxpbms7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkNvcHlNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGUuYWx0S2V5ID8gRHJhZ0Ryb3BFZmZlY3QuTGluayA6IERyYWdEcm9wRWZmZWN0LkNvcHk7XHJcblx0XHRcdGNhc2UgRHJhZ0FsbG93ZWRFZmZlY3RzLkxpbmtNb3ZlOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBEcmFnRHJvcEVmZmVjdC5Nb3ZlO1xyXG5cclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBlLmFsdEtleSA/IERyYWdEcm9wRWZmZWN0LkxpbmsgOiBlLmN0cmxLZXkgPyBEcmFnRHJvcEVmZmVjdC5Db3B5IDogRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHJcblx0XHRcdGRlZmF1bHQ6IERyYWdEcm9wRWZmZWN0Lk5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gZHJvcCBlZmZlY3QgaXMgYW1vbmcgdGhlIGFsbG93ZWQgZWZmZWN0c1xyXG5cdHByaXZhdGUgaXNEcm9wRWZmZWN0QWxsb3dlZCggZHJvcEVmZmVjdDogRHJhZ0Ryb3BFZmZlY3QsIGFsbG93ZWRFZmZlY3RzOiBEcmFnQWxsb3dlZEVmZmVjdHMpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0c3dpdGNoKCBhbGxvd2VkRWZmZWN0cylcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuQ29weTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTW92ZTpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGluazpcclxuXHRcdFx0XHRyZXR1cm4gZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weU1vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQ29weUxpbms6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkNvcHkgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTGluaztcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuTGlua01vdmU6XHJcblx0XHRcdFx0cmV0dXJuIGRyb3BFZmZlY3QgPT09IERyYWdEcm9wRWZmZWN0LkxpbmsgfHwgZHJvcEVmZmVjdCA9PT0gRHJhZ0Ryb3BFZmZlY3QuTW92ZTtcclxuXHRcdFx0Y2FzZSBEcmFnQWxsb3dlZEVmZmVjdHMuQWxsOlxyXG5cdFx0XHRcdHJldHVybiBkcm9wRWZmZWN0ICE9PSBEcmFnRHJvcEVmZmVjdC5Ob25lO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIElEcmFnVGFyZ2V0IGludGVyZmFjZSBkZWZpbmluZyBlbGVtZW50J3MgYmVoYXZpb3IgYXMgZHJhZyB0YXJnZXQuXHJcblx0cHVibGljIGRyYWdUYXJnZXQ6IElEcmFnVGFyZ2V0O1xyXG5cclxuXHQvLyBJRHJhZ1RhcmdldCBpbnRlcmZhY2UgZGVmaW5pbmcgZWxlbWVudCdzIGJlaGF2aW9yIGFzIGRyYWcgdGFyZ2V0LlxyXG5cdHB1YmxpYyBzaW1wbGVEcmFnVGFyZ2V0OiBJU2ltcGxlRHJhZ1RhcmdldDtcclxuXHJcblx0Ly8gRXZlbnQgb2JqZWN0IHRoYXQgaXMgcmV1c2VkIHdoZW4gc2VuZGluZyBldmVudHMgdG8gYSBkcmFnIHRhcmdldCBlbGVtZW50LlxyXG5cdHByaXZhdGUgZHJhZ1RhcmdldEV2ZW50OiBEcmFnVGFyZ2V0RXZlbnQ7XHJcblxyXG5cdC8vIEEgZHJhZyB0YXJnZXQgZWxlbWVudCBjYW4gaGF2ZSBjaGlsZHJlbiB3aG8gYXJlIG5vdCBkcmFnIHRhcmdldHMgYnkgdGhlbXNlbHZlcy4gSW4gdGhpc1xyXG5cdC8vIGNhc2UsIHdoZW4gdGhlIG1vdXNlIGdvZXMgZnJvbSBvdXIgZWxlbWVudCB0byBhIGNoaWxkIGVsZW1lbnQsIHdlIHdpbGwgcmVjZWl2ZSBkcmFnZW50ZXJcclxuXHQvLyBldmVudCBvbiB0aGUgY2hpbGQgZWxlbWVudCBhbmQgZHJhZ2xlYXZlIG9uIG91cnMuIFdlIGRvbid0IHdhbnQgdG8gcmVwb3J0IHRoaXMgdGhyb3VnaFxyXG5cdC8vIG91ciBjdXN0b20gZXZlbnRzIGJlY2F1c2UgZnJvbSB0aGUgY2xsZXIncyBwb2ludCBvZiB2aWV3IHRoZSBtdXNlIGlzIHN0aWxsIHdpdGhpbiB0aGVcclxuXHQvLyBib3VuZHMgb2Ygb3VyIGVsZW1lbnQuIFRoZXJlZm9yZSwgd2Uga2VlcCB0aGUgY291bnRlciB2YXJpYWJsZSwgd2hpY2ggaXMgc2V0IHRvIDFcclxuXHQvLyB3aGVuIHRoZSBmaXJzdCBkcmFnZW50ZXIgZXZlbnQgKGZyb20gb3VyIGVsZW1lbnQgb3IgZnJvbSBhIGNoaWxkKSBpcyByZXBvcnRlZC4gT24gZWFjaFxyXG5cdC8vIHN1YnNlcXVlbnQgZHJhZ2VudGVyIGFuZCBkcmFnbGVhdmUgaXQgd2lsbCBiZSBpbmNyZW1lbnRlZCBhbmQgZGVjcmVtZW50ZWQgcmVzcGVjdGl2ZWx5LlxyXG5cdC8vIFdoZW4gdGhpcyBjb3VudGVyIHJlYWNoZXMgemVybywgd2UgY2FsbCB0aGUgb25EcmFnTGVhdmUgaGFuZGxlci5cclxuXHRwcml2YXRlIGRyYWdUYXJnZXRFbnRlckNvdW50ZXI6IG51bWJlcjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgaW4gdGhlIGZpcnN0IGNhbGwgdG8gdGhlIG9uRHJhZ0VudGVyIHdlIGRldGVybWluZWQgdGhhdCBkcm9wXHJcblx0Ly8gd2FzIHBvc3NpYmxlLlxyXG5cdHByaXZhdGUgaXNEcm9wUG9zc2libGU6IGJvb2xlYW47XHJcblxyXG5cdC8vIFNldCBvZiBzdHlsZXMgc2F2ZWQgYmVmb3JlIGFwcGx5aW5nIGZlZWRiYWNrIHN0eWxlcyBkdXJpbmcgZHJhZ2VudGVyIGV2ZW50LiBXZSB3aWxsIHVzZVxyXG5cdC8vIHRoZXNlIHN0eWxlcyB0byByZXN0b3JlIHRoZSBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSBkdXJpbmcgdGhlIGRyYWdsZWF2ZSBldmVudC5cclxuXHRwcml2YXRlIHNhdmVkU3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9kbmQvRHJhZ0Ryb3BBcGlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvUG9wdXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAvRGlhbG9nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHVwL01zZ0JveFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZXIvUm91dGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RyZWUvVHJlZUFwaVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi92aXJ0L1Njcm9sbEF4aXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdmlydC9WVGFibGVcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXN9IGZyb20gXCIuL2RuZC9EcmFnRHJvcEltcGxcIjtcclxucmVnaXN0ZXJEcmFnRHJvcEN1c3RvbUF0dHJpYnV0ZXMoKTtcclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBEaWFsb2cgY2xhc3MgaXMgYSBwb3B1cCB3aXRoIHRocmVlIGRpc3RpbmN0IGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgUG9wdXBcclxue1xyXG5cdC8vIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIFNsaWNlIGZvciB0aGUgdGhyZWUgZGlhbG9nIGFyZWFzOiBjYXB0aW9uLCBtYWluIGNvbnRlbnQgYW5kIGJ1dHRvbnMuXHJcblx0Ly8gVGhleSBjYW4gYmUgbGVmdCB1bmRlZmluZWQgaWYgYSBkZXJpdmVkIGNsYXNzIG92ZXJyaWRlcyB0aGUgYXBwcm9wcmlhdGUgcmVuZGVyIG1ldGhvZHMuXHJcblx0Y29uc3RydWN0b3IoIGNhcHRpb25BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIG1haW5BcmVhU2xpY2U/OiBtaW0uU2xpY2UsIGJ1dHRvbkFyZWFTbGljZT86IG1pbS5TbGljZSwgZGxnU2xpY2U/OiBtaW0uU2xpY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoZGxnU2xpY2UpO1xyXG5cclxuXHRcdHRoaXMuY2FwdGlvbkFyZWFTbGljZSA9IGNhcHRpb25BcmVhU2xpY2UgPyBjYXB0aW9uQXJlYVNsaWNlIDoge307XHJcblx0XHR0aGlzLm1haW5BcmVhU2xpY2UgPSBtYWluQXJlYVNsaWNlID8gbWFpbkFyZWFTbGljZSA6IHt9O1xyXG5cdFx0dGhpcy5idXR0b25BcmVhU2xpY2UgPSBidXR0b25BcmVhU2xpY2UgPyBidXR0b25BcmVhU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBEaWFsb2cgaXMgY3JlYXRlZFxyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0Q2FwdGlvbkFyZWFTbGljZSA9IHsgc3R5bGU6IHtiYWNrZ3JvdW5kOlwicGlua1wiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCIsIGN1cnNvcjpcImRlZmF1bHRcIn0gfTtcclxuXHRcdGlmICghRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlKVxyXG5cdFx0XHREaWFsb2cuRGVmYXVsdE1haW5BcmVhU2xpY2UgPSB7IHN0eWxlOiB7cGFkZGluZzpcIjAuNWVtIDFlbVwifSB9O1xyXG5cdFx0aWYgKCFEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSlcclxuXHRcdFx0RGlhbG9nLkRlZmF1bHRCdXR0b25BcmVhU2xpY2UgPSB7IHN0eWxlOiB7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwiLCBwYWRkaW5nOlwiMC41ZW0gMWVtXCJ9IH07XHJcblx0XHRpZiAoIURpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UpXHJcblx0XHRcdERpYWxvZy5EZWZhdWx0QnV0dG9uU2xpY2UgPSB7IHN0eWxlOiB7bWFyZ2luTGVmdDpcIjAuNWVtXCIsIG1pbldpZHRoOlwiNWVtXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9uIHdpdGggdGhlIGdpdmVuIGNoYXJhY3RlcmlzdGljcy4gVGhlIGtleSBwYXJhbWV0ZXIgaW5kaWNhdGVzIHRoZSB2YWx1ZSB0aGF0IGlzXHJcblx0Ly8gcGFzc2VkIHRvIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gVGhlIG9wdGlvbmFsIGluZGV4IHBhcmFtZXRlciBzcGVjaWZpZXNcclxuXHQvLyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGJ1dHRvbiBzaG91bGQgYmUgYWRkZWQuXHJcblx0cHVibGljIGFkZEJ1dHRvbiggc2xpY2U6IG1pbS5TbGljZSwga2V5PzogYW55LCBjYWxsYmFjaz86IChrZXk6IGFueSkgPT4gdm9pZCwgaW5kZXg/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IERsZ0J0bkluZm8gPSB7IHNsaWNlLCBrZXksIGNhbGxiYWNrLCByZWY6IG5ldyBtaW0uUmVmPEhUTUxCdXR0b25FbGVtZW50PigpIH07XHJcblx0XHRpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5idXR0b25JbmZvcy5wdXNoKCBpbmZvKTtcclxuXHRcdGVsc2UgaWYgKGluZGV4ID09PSAwKVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnVuc2hpZnQoIGluZm8pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1dHRvbkluZm9zLnNwbGljZSggaW5kZXggLSAxLCAwLCBpbmZvKTtcclxuXHJcblx0XHRpZiAodGhpcy5idXR0b25BcmVhUHJveHkpXHJcblx0XHRcdHRoaXMuYnV0dG9uQXJlYVByb3h5LnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBidXR0b24gYXQgdGhlIGdpdmVuIGluZGV4LlxyXG5cdHB1YmxpYyByZW1vdmVCdXR0b24oIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5idXR0b25JbmZvcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHJcblx0XHRpZiAodGhpcy5idXR0b25BcmVhUHJveHkpXHJcblx0XHRcdHRoaXMuYnV0dG9uQXJlYVByb3h5LnVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudC5cclxuXHRwcm90ZWN0ZWQgZ2V0RGxnU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0dGhpcy5jYXB0aW9uQXJlYVByb3h5ID0gbmV3IG1pbS5GdW5jUHJveHkoICgpID0+XHJcblx0XHR7XHJcblx0XHRcdGxldCBjYXB0aW9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdENhcHRpb25BcmVhU2xpY2UsIHRoaXMuZ2V0Q2FwdGlvbkFyZWFTbGljZSgpKTtcclxuXHRcdFx0cmV0dXJuIDxkaXYgaWQ9XCJkbGdDYXB0aW9uXCIgbW91c2Vkb3duPXt0aGlzLm9uU3RhcnRNb3ZlfSBzdHlsZT17Y2FwdGlvbkFyZWFTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzcz17Y2FwdGlvbkFyZWFTbGljZS5jbGFzc05hbWV9IHsuLi5jYXB0aW9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHR7Y2FwdGlvbkFyZWFTbGljZS5jb250ZW50fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubWFpbkFyZWFQcm94eSA9IG5ldyBtaW0uRnVuY1Byb3h5KCAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlID0gbWltLlNsaWNlcy5NZXJnZVNsaWNlcyggRGlhbG9nLkRlZmF1bHRNYWluQXJlYVNsaWNlLCB0aGlzLmdldE1haW5BcmVhU2xpY2UoKSk7XHJcblx0XHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnTWFpbkNvbnRlbnRcIiBzdHlsZT17bWFpbkFyZWFTbGljZS5zdHlsZX0gY2xhc3M9e21haW5BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4ubWFpbkFyZWFTbGljZS5wcm9wc30+XHJcblx0XHRcdFx0e21haW5BcmVhU2xpY2UuY29udGVudH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmJ1dHRvbkFyZWFQcm94eSA9IG5ldyBtaW0uRnVuY1Byb3h5KCAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvbkFyZWFTbGljZSwgdGhpcy5nZXRCdXR0b25BcmVhU2xpY2UoKSk7XHJcblx0XHRcdHJldHVybiA8ZGl2IGlkPVwiZGxnQnV0dG9uc1wiIHN0eWxlPXtidXR0b25BcmVhU2xpY2Uuc3R5bGV9IGNsYXNzPXtidXR0b25BcmVhU2xpY2UuY2xhc3NOYW1lfSB7Li4uYnV0dG9uQXJlYVNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHR7YnV0dG9uQXJlYVNsaWNlLmNvbnRlbnR9XHJcblx0XHRcdFx0e3RoaXMuYnV0dG9uSW5mb3MubWFwKCAoaW5mbykgPT5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGV0IGJ0blNsaWNlOiBtaW0uU2xpY2UgPSBtaW0uU2xpY2VzLk1lcmdlU2xpY2VzKCBEaWFsb2cuRGVmYXVsdEJ1dHRvblNsaWNlLCBpbmZvLnNsaWNlKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpbmZvLmtleX0gY2xpY2s9e2luZm8uY2FsbGJhY2sgJiYgKCgpID0+IGluZm8uY2FsbGJhY2soaW5mby5rZXkpKX1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtidG5TbGljZS5zdHlsZX0gY2xhc3M9e2J0blNsaWNlLmNsYXNzTmFtZX0gey4uLmJ0blNsaWNlLnByb3BzfT5cclxuXHRcdFx0XHRcdFx0XHR7YnRuU2xpY2UuY29udGVudH1cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgY29udGVudDogYW55ID1cclxuXHRcdFx0PG1pbS5GcmFnbWVudD5cclxuXHRcdFx0XHR7dGhpcy5jYXB0aW9uQXJlYVByb3h5fVxyXG5cdFx0XHRcdHt0aGlzLm1haW5BcmVhUHJveHl9XHJcblx0XHRcdFx0e3RoaXMuYnV0dG9uQXJlYVByb3h5fVxyXG5cdFx0XHQ8L21pbS5GcmFnbWVudD47XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgY2FwdGlvbi5cclxuXHRwcm90ZWN0ZWQgZ2V0Q2FwdGlvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jYXB0aW9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubWFpbkFyZWFTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvdmlkZXMgcGFyYW1ldGVycyBmb3IgdGhlIGJ1dHRvbiBhcmVhLlxyXG5cdHByb3RlY3RlZCBnZXRCdXR0b25BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uQXJlYVNsaWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBwdXRzIG1vdXNlIGRvd24gaW4gdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgb25TdGFydE1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLnN0YXJ0TW92ZSggZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciBjYXB0aW9uIGFyZWFcclxuXHRwcml2YXRlIGNhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IENhcHRpb25BcmVhU2xpY2UoKTogbWltLlNsaWNlIHsgcmV0dXJuIHRoaXMuY2FwdGlvbkFyZWFTbGljZTsgfVxyXG5cdHB1YmxpYyBzZXQgQ2FwdGlvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5jYXB0aW9uQXJlYVNsaWNlID0gdmFsOyB9XHJcblxyXG5cdC8vIFBhcmFtZXRlcnMgZm9yIG1haW4gYXJlYVxyXG5cdHByaXZhdGUgbWFpbkFyZWFTbGljZTogbWltLlNsaWNlO1xyXG5cdHB1YmxpYyBnZXQgTWFpbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5tYWluQXJlYVNsaWNlOyB9XHJcblx0cHVibGljIHNldCBNYWluQXJlYVNsaWNlKCB2YWw6IG1pbS5TbGljZSkgeyB0aGlzLm1haW5BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gUGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHJpdmF0ZSBidXR0b25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHRwdWJsaWMgZ2V0IEJ1dHRvbkFyZWFTbGljZSgpOiBtaW0uU2xpY2UgeyByZXR1cm4gdGhpcy5idXR0b25BcmVhU2xpY2U7IH1cclxuXHRwdWJsaWMgc2V0IEJ1dHRvbkFyZWFTbGljZSggdmFsOiBtaW0uU2xpY2UpIHsgdGhpcy5idXR0b25BcmVhU2xpY2UgPSB2YWw7IH1cclxuXHJcblx0Ly8gQXJyYXkgb2YgYnV0dG9ucyBhZGRlZCB0byB0aGUgZGlhbG9nXHJcblx0cHJpdmF0ZSBidXR0b25JbmZvczogRGxnQnRuSW5mb1tdID0gW107XHJcblxyXG5cdC8vIFByb3h5IGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGNhcHRpb24gYXJlYVxyXG5cdHByaXZhdGUgY2FwdGlvbkFyZWFQcm94eTogbWltLkZ1bmNQcm94eTtcclxuXHJcblx0Ly8gUHJveHkgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciB1cGRhdGluZyB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtYWluQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBQcm94eSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSBidXR0b24gYXJlYVxyXG5cdHByaXZhdGUgYnV0dG9uQXJlYVByb3h5OiBtaW0uRnVuY1Byb3h5O1xyXG5cclxuXHQvLyBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGNhcHRpb24gYXJlYVxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdENhcHRpb25BcmVhU2xpY2U6IG1pbS5TbGljZTtcclxuXHJcblx0Ly8gRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBtYWluIGFyZWFcclxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRNYWluQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYnV0dG9ucyBhcmVhXHJcblx0cHVibGljIHN0YXRpYyBEZWZhdWx0QnV0dG9uQXJlYVNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgYSBidXR0b24gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdEJ1dHRvblNsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGxnQnRuSW5mbyBjbGFzcyBpcyBhIGhlbHBlciBjbGFzcyB0aGF0IGtlZXBzIGluZm9ybWF0aW9uIGFib3V0IGEgYnV0dG9uIGFkZGVkIHRvIHRoZSBkaWFsb2cuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG50eXBlIERsZ0J0bkluZm8gPVxyXG57XHJcblx0c2xpY2U6IG1pbS5TbGljZSxcclxuXHRrZXk6IGFueSxcclxuXHRjYWxsYmFjazogKGtleTogYW55KSA9PiB2b2lkLFxyXG5cdHJlZjogbWltLlJlZjxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgRGlhbG9nQnV0dG9uIGVudW1lcmF0aW9uIGRlZmluZXMgY29uc3RhbnRzIHRvIGluZGljYXRlIHN0YW5kYXJkIGJ1dHRvbnMgdXNlZCBpbiBkaWFsb2dzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGVudW0gRGlhbG9nQnV0dG9uXHJcbntcclxuXHROb25lID0gMHgwLFxyXG5cdE9LID0gMHgxLFxyXG5cdENhbmNlbCA9IDB4MixcclxuXHRZZXMgPSAweDQsXHJcblx0Tm8gPSAweDgsXHJcblx0Q2xvc2UgPSAweDEwLFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIlxyXG5pbXBvcnQge0RpYWxvZywgRGlhbG9nQnV0dG9ufSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1zZ0JveCBjbGFzcyBpcyBhIGRpYWxvZyB0aGF0IGRpc3BsYXlzIGEgbWVzc2FnZSB3aXRoIGEgc2V0IG9mIHByZS1kZWZpbmVkIGJ1dHRvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTXNnQm94IGV4dGVuZHMgRGlhbG9nXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIHNob3dNb2RhbCggbWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uczogTXNnQm94QnV0dG9ucyA9IE1zZ0JveEJ1dHRvbnMuT0ssXHJcblx0XHRcdFx0XHRpY29uOiBNc2dCb3hJY29uID0gTXNnQm94SWNvbi5Ob25lKTogUHJvbWlzZTxNc2dCb3hCdXR0b25zPlxyXG5cdHtcclxuXHRcdGxldCBtc2dCb3g6IE1zZ0JveCA9IG5ldyBNc2dCb3goIG1lc3NhZ2UsIHRpdGxlLCBidXR0b25zLCBpY29uKTtcclxuXHRcdHJldHVybiBtc2dCb3guc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBidXR0b25zOiBNc2dCb3hCdXR0b25zID0gTXNnQm94QnV0dG9ucy5PSyxcclxuXHRcdFx0XHRcdGljb246IE1zZ0JveEljb24gPSBNc2dCb3hJY29uLk5vbmUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdFx0dGhpcy5idXR0b25zID0gYnV0dG9ucztcclxuXHRcdHRoaXMuaWNvbiA9IGljb247XHJcblxyXG5cdFx0dGhpcy5jcmVhdGVCdXR0b25zKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb3ZpZGVzIHBhcmFtZXRlcnMgZm9yIHRoZSBjYXB0aW9uLlxyXG5cdHByb3RlY3RlZCBnZXRDYXB0aW9uQXJlYVNsaWNlKCk6IG1pbS5TbGljZVxyXG5cdHtcclxuXHRcdHJldHVybiB7IGNvbnRlbnQ6IHRoaXMudGl0bGUsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJEb2RnZXJCbHVlXCIgfSB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm92aWRlcyBwYXJhbWV0ZXJzIGZvciB0aGUgbWFpbiBjb250ZW50IGFyZWEuXHJcblx0cHJvdGVjdGVkIGdldE1haW5BcmVhU2xpY2UoKTogbWltLlNsaWNlXHJcblx0e1xyXG5cdFx0bGV0IHsgY2xzLCBjb2xvciB9ID0gdGhpcy5nZXRJY29uQ2xhc3NBbmRDb2xvcigpO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9XHJcblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtjbHMgJiYgPGkgY2xhc3M9e1wiZmEgZmEtM3ggXCIgKyBjbHN9IHN0eWxlPXt7Y29sb3I6Y29sb3J9fS8+fVxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwiLCBtaW5XaWR0aDpcIjE1ZW1cIiwgbWF4V2lkdGg6XCI0MGVtXCIsIG1pbkhlaWdodDogXCIyZW1cIixcclxuXHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDpcIjIwZW1cIiwgb3ZlcmZsb3c6XCJhdXRvXCJ9fT5cclxuXHRcdFx0XHRcdHt0aGlzLm1lc3NhZ2V9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PjtcclxuXHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgYnV0dG9ucyBhY2NvcmRpbmcgdG8gdGhlIHBhcmFtZXRlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG5cdHByaXZhdGUgY3JlYXRlQnV0dG9ucygpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3dpdGNoKCB0aGlzLmJ1dHRvbnMpXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgTXNnQm94QnV0dG9ucy5DbG9zZTpcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDbG9zZVwiLCBEaWFsb2dCdXR0b24uQ2xvc2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBNc2dCb3hCdXR0b25zLk9LOlxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk9LXCIsIERpYWxvZ0J1dHRvbi5PSyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuT2tDYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiT0tcIiwgRGlhbG9nQnV0dG9uLk9LKTtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUJ1dHRvbiggXCJDYW5jZWxcIiwgRGlhbG9nQnV0dG9uLkNhbmNlbCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm86XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIE1zZ0JveEJ1dHRvbnMuWWVzTm9DYW5jZWw6XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiWWVzXCIsIERpYWxvZ0J1dHRvbi5ZZXMpO1xyXG5cdFx0XHRcdHRoaXMuY3JlYXRlQnV0dG9uKCBcIk5vXCIsIERpYWxvZ0J1dHRvbi5Obyk7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVCdXR0b24oIFwiQ2FuY2VsXCIsIERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGJ1dHRvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbWV0ZXIgc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwcml2YXRlIGdldEljb25DbGFzc0FuZENvbG9yKCk6IHsgY2xzOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgfVxyXG5cdHtcclxuXHRcdHN3aXRjaCggdGhpcy5pY29uKVxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uSW5mbzogcmV0dXJuIHsgY2xzOiBcImZhLWluZm8tY2lyY2xlXCIsIGNvbG9yOiBcImJsdWVcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uV2FybmluZzogcmV0dXJuIHsgY2xzOiBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH07XHJcblx0XHRcdGNhc2UgTXNnQm94SWNvbi5FcnJvcjogcmV0dXJuIHsgY2xzOiBcImZhLW1pbnVzLWNpcmNsZVwiLCBjb2xvcjogXCJyZWRcIiB9O1xyXG5cdFx0XHRjYXNlIE1zZ0JveEljb24uUXVlc3Rpb246IHJldHVybiB7IGNsczogXCJmYS1xdWVzdGlvbi1jaXJjbGVcIiwgY29sb3I6IFwiZ3JlZW5cIiB9O1xyXG5cclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIHsgY2xzOiBcIlwiLCBjb2xvcjogXCJcIiB9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUJ1dHRvbiggdGV4dDogc3RyaW5nLCBrZXk6IERpYWxvZ0J1dHRvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbigge2NvbnRlbnQ6IHRleHR9LCBrZXksIHRoaXMub25CdXR0b25DbGlja2VkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbkJ1dHRvbkNsaWNrZWQgPSAoIGtleTogYW55KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuY2xvc2UoIGtleSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBNZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBhcmVhXHJcblx0cHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cdC8vIFRpdGxlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2FwdGlvbiBhcmVhXHJcblx0cHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xyXG5cclxuXHQvLyBCdXR0b25zXHJcblx0cHJpdmF0ZSBidXR0b25zOiBNc2dCb3hCdXR0b25zO1xyXG5cclxuXHQvLyBJY29uXHJcblx0cHJpdmF0ZSBpY29uOiBNc2dCb3hJY29uO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1zZ0JveEJ1dHRvbiBlbnVtZXJhdGlvbiBzcGVjaWZpZXMgdmFsdWVzIG9mIHByZWRlZmluZWQgYnV0dG9ucyBhbmQgYnV0dG9uIGNvbWJpbmF0aW9ucyBmb3JcclxuICogbWVzc2FnZSBib3hlcy5cclxuICovXHJcbmV4cG9ydCBlbnVtIE1zZ0JveEJ1dHRvbnNcclxue1xyXG5cdC8qKiBNZXNzYWdlIGJveCB3aWxsIGRpc3BsYXkgbm8gYnV0dG9ucyAqL1xyXG5cdE5vbmUgPSAwLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIENsb3NlIGJ1dHRvbiAqL1xyXG5cdENsb3NlLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIGEgc2luZ2xlIE9LIGJ1dHRvbiAqL1xyXG5cdE9LLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIE9LIGFuZCBDYW5jZWwgYnV0dG9ucyAqL1xyXG5cdE9rQ2FuY2VsLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcyBhbmQgTm8gYnV0dG9ucyAqL1xyXG5cdFllc05vLFxyXG5cclxuXHQvKiogTWVzc2FnZSBib3ggd2lsbCBoYXZlIFllcywgTm8gYW5kIENhbmNlbCBidXR0b25zICovXHJcblx0WWVzTm9DYW5jZWwsXHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNc2dCb3hJY29uIGVudW1lcmF0aW9uIHNwZWNpZmllcyB2YWx1ZXMgb2YgcHJlZGVmaW5lZCBpY29ucyBmb3IgbWVzc2FnZSBib3guXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgZW51bSBNc2dCb3hJY29uXHJcbntcclxuXHROb25lID0gMCxcclxuXHRJbmZvLFxyXG5cdFdhcm5pbmcsXHJcblx0RXJyb3IsXHJcblx0UXVlc3Rpb24sXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUG9wdXAgY2xhc3MgaXMgYSBiYXNlIGNsYXNzIGZvciBtb2RlbGVzcyBhbmQgbW9kYWwgcG9wdXBzLiBJdCBwcm92aWRlcyB0aGUgYmFzaWMgbWVjaGFuaWNzXHJcbi8vIGZvciBzaG93aW5nIGFuZCBjbG9zaW5nIHRoZSBwb3B1cHMgaW5jbHVkaW5nIG1vdmluZyBpdCB3aXRoIHRoZSBtb3VzZS4gVGhlIGNvbnRlbnQgb2YgdGhlXHJcbi8vIHBvcHVwIGlzIGVpdGhlciBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0dWN0b3Igb3IgaXMgcHJvdmlkZWQgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFBvcHVwIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Ly8gVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgdGhlIG9iamVjdCBkZXNjcmliaW5nIHRoZSBzdHlsZXMgYW5kIGNvbnRlbnQgdGhhdCBzaG91bGQgYmVcclxuXHQvLyBkaXNwbGF5ZWQgd2l0aGluIHRoZSBwb3B1cC4gSXQgY2FuIGJlIGxlZnQgdW5kZWZpbmVkIGlmIGEgZGVyaXZlZCBjbGFzcyBvdmVycmlkZXMgdGhlXHJcblx0Ly8gZ2V0RGxnU2xpY2UgbWV0aG9kLlxyXG5cdGNvbnN0cnVjdG9yKCBkbGdTbGljZT86IG1pbS5TbGljZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5kbGdTbGljZSA9IGRsZ1NsaWNlID8gZGxnU2xpY2UgOiB7fTtcclxuXHJcblx0XHQvLyBjcmVhdGUgZGVmYXVsdCBwYXJhbWV0ZXJzIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgYSBQb3B1cCBpcyBjcmVhdGVkXHJcblx0XHRpZiAoIVBvcHVwLkRlZmF1bHREbGdTbGljZSlcclxuXHRcdFx0UG9wdXAuRGVmYXVsdERsZ1NsaWNlID0geyBzdHlsZTogeyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJXaWR0aDogXCIxcHhcIiwgcGFkZGluZzogXCIwXCJ9IH07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9wZW5zIHRoZSBkaWFsb2cgYXMgYSBtb2RlbGVzcyBwb3B1cC4gSXQgc2hvdWxkIGJlIGNsb3NlZCB3aXRoIHRoZSBDbG9zZSBtZXRob2QuXHJcblx0cHVibGljIG9wZW4oIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsb3NlcyB0aGUgZGlhbG9nIG9wZW5lZCBhcyBhIG1vZGVsZXNzIHBvcHVwLiBUaGlzIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCB0byBjbG9zZSBhIG1vZGFsXHJcblx0Ly8gZGlhbG9nLlxyXG5cdHB1YmxpYyBjbG9zZSggcmV0VmFsPzogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdCh0aGlzLmRsZyBhcyBhbnkpLmNsb3NlKCk7XHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcclxuXHRcdGlmICh0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jKCByZXRWYWwpO1xyXG5cdFx0XHR0aGlzLm1vZGFsUHJvbWlzZVJlc29sdmVGdW5jID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcGVucyBhIG1vZGFsIGRpYWxvZy4gVGhlIGRpYWxvZyBpcyBjbG9zZWQgd2l0aCB0aGUgQ2xvc2VNb2RhbCBtZXRob2QgYW5kIHRoZSBwYXJhbWV0ZXJcclxuXHQvLyBwYXNzZWQgdG8gdGhlIENsb3NlTW9kYWwgbWV0aG9kIGlzIHJldHVybmVkIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZS5cclxuXHRwdWJsaWMgc2hvd01vZGFsKCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggXCJEaWFsb2cgaXMgYWxyZWFkeSBvcGVuXCIpO1xyXG5cclxuXHRcdGxldCBwcm9taXNlOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZTxhbnk+KCAocmVzb2x2ZSkgPT4ge3RoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPSByZXNvbHZlfSk7XHJcblx0XHR0aGlzLmNyZWF0ZSggeCwgeSk7XHJcblx0XHQodGhpcy5kbGcgYXMgYW55KS5zaG93TW9kYWwoKTtcclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjdXJyZW50bHkgb3Blbi5cclxuXHRwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGcgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kZWxlc3MuXHJcblx0cHVibGljIGlzTW9kZWxlc3MoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgPT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY3VycmVudGx5IG9wZW4gYXMgbW9kYWwuXHJcblx0cHVibGljIGlzTW9kYWwoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmlzT3BlbigpICYmIHRoaXMubW9kYWxQcm9taXNlUmVzb2x2ZUZ1bmMgIT09IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RhcnRzIG1vbml0b3JpbmcgbW91c2UgbW92ZW1lbnRzIGFuZCBtb3ZlcyB0aGUgZGlhbG9nIHdpdGggdGhlIG1vdXNlLiBUaGlzIG1ldGhvZCBpc1xyXG5cdC8vIGludGVudGVkIHRvIGJlIGNhbGxlZCBmcm9tIGEgbW91c2Vkb3duIGV2ZW50IHNvbWV3aGVyZSB3aXRoaW4gdGhlIHBvcHVwLlxyXG5cdHB1YmxpYyBzdGFydE1vdmUoIGU6IE1vdXNlRXZlbnQpXHJcblx0e1xyXG5cdFx0Ly8gd2UgcHJldmVudCBkZWZhdWx0IGFjdGlvbiBhbmQgcHJvcGFnYXRpb24gc28gdGhhdCBtb3VzZSBtb3ZlbWVudHMgZG9uJ3QgY2F1c2VcclxuXHRcdC8vIHRlc3QgaW4gdGhlIHBvcHVwIGFuZCBvbiB0aGUgcGFnZSB0byBiZSBzZWxlY3RlZC5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0bGV0IHJlY3QgPSB0aGlzLmRsZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuXHRcdHRoaXMuZHJhZ1BvaW50T2Zmc2V0WSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG5cclxuXHRcdC8vIHNldCB0aGUgbmV3IGNvb3JkaW5hdGUgYW5kIGFsc28gcmVtZW1iZXIgdGhlbSBpbiBvdXIgU2xpY2Ugc28gdGhhdCB0aGV5IGNhbiBiZSBzcGVjaWZpZWRcclxuXHRcdC8vIGFzIHByb3BlcnRpZXMgaWYgdGhlIGNvbXBvbmVudCBpcyByZXJlbmRlcmVkXHJcblx0XHR0aGlzLmRsZy5zdHlsZS5tYXJnaW4gPSB0aGlzLmN1cnJEbGdTbGljZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdHRoaXMuZGxnLnN0eWxlLnRvcCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyBcInB4XCI7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcy5vblN0b3BNb3ZlKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIE1vdmVzIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGNvb3JkaW5hdGVzLiBUaGUgY29vcmRpbmF0ZXMgYXJlIGFkanVzdGVkIHNvIHRoYXQgYXQgbGVhc3RcclxuXHQvLyBzb21lIHBhcnQgb2YgdGhlIGRpYWxvZyBhdCB0aGUgdG9wLWxlZnQgY29ybmVyIHJlbWFpbnMgdmlzaWJsZSBpbiBvcmRlciB0byB0aGUgdXNlciB0byBiZVxyXG5cdC8vIGFibGUgdG8gY29udGludWUgbW92aW5nIGl0LlxyXG5cdHB1YmxpYyBtb3ZlKCBuZXdYOiBudW1iZXIsIG5ld1k6IG51bWJlcilcclxuXHR7XHJcblx0XHRpZiAobmV3WCA8IDApXHJcblx0XHRcdG5ld1ggPSAwO1xyXG5cdFx0ZWxzZSBpZiAobmV3WCArIDMwID4gd2luZG93LmlubmVyV2lkdGgpXHJcblx0XHRcdG5ld1ggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDMwO1xyXG5cclxuXHRcdGlmIChuZXdZIDwgMClcclxuXHRcdFx0bmV3WSA9IDA7XHJcblx0XHRlbHNlIGlmIChuZXdZICsgMzAgPiB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcblx0XHRcdG5ld1kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDtcclxuXHJcblx0XHQvLyBzZXQgdGhlIG5ldyBjb29yZGluYXRlIGFuZCBhbHNvIHJlbWVtYmVyIHRoZW0gaW4gb3VyIFNsaWNlIHNvIHRoYXQgdGhleSBjYW4gYmUgc3BlY2lmaWVkXHJcblx0XHQvLyBhcyBwcm9wZXJ0aWVzIGlmIHRoZSBjb21wb25lbnQgaXMgcmVyZW5kZXJlZFxyXG5cdFx0dGhpcy5kbGcuc3R5bGUubGVmdCA9IHRoaXMuY3VyckRsZ1NsaWNlLnN0eWxlLmxlZnQgPSBuZXdYICsgXCJweFwiO1xyXG5cdFx0dGhpcy5kbGcuc3R5bGUudG9wID0gdGhpcy5jdXJyRGxnU2xpY2Uuc3R5bGUudG9wID0gbmV3WSArIFwicHhcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxkaWFsb2cgcmVmPXtyZWYgPT4gdGhpcy5kbGcgPSByZWZ9IHN0eWxlPXt0aGlzLmN1cnJEbGdTbGljZS5zdHlsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3M9e3RoaXMuY3VyckRsZ1NsaWNlLmNsYXNzTmFtZX0gey4uLnRoaXMuY3VyckRsZ1NsaWNlLnByb3BzfT5cclxuXHRcdFx0e3RoaXMuY3VyckRsZ1NsaWNlLmNvbnRlbnR9XHJcblx0XHQ8L2RpYWxvZz47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgcGFyYW1ldGVycyBmb3IgdGhlIDxkaWFsb2c+IGVsZW1lbnQgcHJvdmlkZWQgZWl0aGVyIGV4dGVybmFsbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzLlxyXG5cdHByb3RlY3RlZCBnZXREbGdTbGljZSgpOiBtaW0uU2xpY2VcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5kbGdTbGljZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmVuZGVycyB0aGUgcG9wdXAuXHJcblx0cHJpdmF0ZSBjcmVhdGUoIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRlZmluZSBwb3NpdGlvbmluZyBzdHlsZXMuIElmIHggYW5kL29yIHkgYXJlIHVuZGVmaW5lZCwgd2UgY2VudGVyIHRoZSBkaWFsb2cgaG9yaXpvbnRhbGx5XHJcblx0XHQvLyBhbmQvb3IgdmVydGljYWxseVxyXG5cdFx0bGV0IHN0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHsgcG9zaXRpb246IFwiZml4ZWRcIiB9XHJcblx0XHRpZiAoeCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuXHRcdFx0c3R5bGUucmlnaHQgPSBcIjBweFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuXHRcdFx0c3R5bGUubWFyZ2luTGVmdCA9IFwiMFwiO1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh5ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblx0XHRcdHN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XHJcblx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xyXG5cdFx0XHRzdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJEbGdTbGljZSA9IG1pbS5TbGljZXMuTWVyZ2VTbGljZXMoIFBvcHVwLkRlZmF1bHREbGdTbGljZSwgdGhpcy5nZXREbGdTbGljZSgpLCB7c3R5bGV9KTtcclxuXHJcblx0XHQvLyBjcmVhdGUgYSA8ZGl2PiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIGVuZCBvZiA8Ym9keT4uIFRoZW4gcmVuZGVyIG91ciBjb21wb25lbnQnc1xyXG5cdFx0Ly8gY29udGVudCB1bmRlciBpdC5cclxuXHRcdHRoaXMuYW5jaG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIik7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLmFuY2hvckRpdik7XHJcblx0XHRtaW0ubW91bnRTeW5jKCB0aGlzLCB0aGlzLmFuY2hvckRpdik7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVuZGVycyBhbmQgZGVzdHJveXMgdGhlIGRpYWxvZy5cclxuXHRwcml2YXRlIGRlc3Ryb3koKTogdm9pZFxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pO1xyXG5cclxuXHRcdG1pbS51bm1vdW50U3luYyggdGhpcy5hbmNob3JEaXYpO1xyXG5cdFx0dGhpcy5hbmNob3JEaXYucmVtb3ZlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhhbmRsZXMga2V5ZG93biBldmVudCB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIGRpYWxvZyBieSBFc2Mga2V5LlxyXG5cdHByaXZhdGUgb25LZXlEb3duID0gKCBlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBFc2NcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0cHJpdmF0ZSBvbk1vdmUgPSAoZTogTW91c2VFdmVudCkgPT5cclxuXHR7XHJcblx0XHR0aGlzLm1vdmUoIGUuY2xpZW50WCAtIHRoaXMuZHJhZ1BvaW50T2Zmc2V0WCwgZS5jbGllbnRZIC0gdGhpcy5kcmFnUG9pbnRPZmZzZXRZKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25TdG9wTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PlxyXG5cdHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW92ZSk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMub25TdG9wTW92ZSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBQYXJhbWV0ZXJzIGZvciB0aGUgPGRpYWxvZz4gZWxlbWVudCBwcm92aWRlZCBlaXRoZXIgZXh0ZXJuYWx5IG9yIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuXHRwcml2YXRlIGRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblx0cHVibGljIGdldCBEbGdTbGljZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5EbGdTbGljZTsgfVxyXG5cclxuXHQvLyBDdXJyZW50IHBhcmFtZXRlcnMgZm9yIHRoZSA8ZGlhbG9nPiBlbGVtZW50IHRoYXQgY29tYmluZSBvdXIgZGVmYXVsdHMgcGx1cyB0aG9zZSBwcm92aWRlZFxyXG5cdC8vIGVpdGhlciBleHRlcm5hbHkgb3IgYnkgZGVyaXZlZCBjbGFzc2VzIHBsdXMgdGhvc2UgcmVmbGVjdGluZyB0aGUgZGlhbG9nIHBvc2l0aW9uaW5nLlxyXG5cdHByaXZhdGUgY3VyckRsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG5cdC8vIEVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGRpYWxvZyBpcyByZW5kZXJlZC4gVGhpcyBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZVxyXG5cdC8vIDxib2R5PiB3aGVuIGRpYWxvZyBpcyBjcmVhdGVkIGFuZCBpcyByZW1vdmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBjbG9zZWQuXHJcblx0cHJpdmF0ZSBhbmNob3JEaXY6IEhUTUxFbGVtZW50O1xyXG5cclxuXHQvLy8vIFJlZmVyZW5jZSB0byB0aGUgPGRpYWxvZz4gZWxlbWVudCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSA8Ym9keT4gd2hlbiBkaWFsb2cgaXMgY3JlYXRlZC5cclxuXHQvL3ByaXZhdGUgZGxnUmVmID0gbmV3IG1pbS5SZWY8SFRNTERpYWxvZ0VsZW1lbnQ+KCByZWYgPT4gdGhpcy5kbGcgPSByZWYpO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaWFsb2c+IGVsZW1lbnQgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgPGJvZHk+IHdoZW4gZGlhbG9nIGlzIGNyZWF0ZWQuXHJcblx0cHJpdmF0ZSBkbGc6IEhUTUxEaWFsb2dFbGVtZW50O1xyXG5cclxuXHQvLyBQcm9taXNlIHdoaWNoIGlzIGNyZWF0ZWQgZm9yIG1vZGFsIGRpYWxvZyBhbmQgd2hpY2ggaXMgcmVzb2x2ZWQgd2hlbiB0aGUgbW9kYWwgZGlhbG9nXHJcblx0Ly8gaXMgY2xvc2VkLiBUaGUgcHJvbWlzZSBpcyByZXR1cm5lZCBmcm9tIFNob3dNb2RhbC5cclxuXHRwcml2YXRlIG1vZGFsUHJvbWlzZVJlc29sdmVGdW5jOiAoYW55KSA9PiB2b2lkO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIDxkaXY+IGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2FwdGlvbi5cclxuXHRwcml2YXRlIGNhcHRpb24gPSBuZXcgbWltLlJlZjxIVE1MRWxlbWVudD4oKTtcclxuXHJcblx0Ly8gT2Zmc2V0cyBvZiB0aGUgcG9pbnQgd2hlcmUgdGhlIG1vdmUgc3RhcnRlZCBmcm9tIHRoZSBkaWFsb2cgdG9wLWxlZnQgY29ybmVyLiBXZSB1c2UgdGhlbVxyXG5cdC8vIHRvIGNhbGN1bGF0ZSB0aGUgZGlhbG9nIHRvcC1sZWZ0IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcyB3aGlsZSBtb3ZlIGlzXHJcblx0Ly8gaW4gcHJvZ3Jlc3MuXHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBkcmFnUG9pbnRPZmZzZXRZOiBudW1iZXI7XHJcblxyXG5cdC8vIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgPGRpYWxvZz4gZWxlbWVudFxyXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdERsZ1NsaWNlOiBtaW0uU2xpY2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbXVybCBmcm9tIFwibWltdXJsXCJcclxuaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbi8vIGltcG9ydCB7SUh0bWxBRWxlbWVudFByb3BzfSBmcm9tIFwiLi4vZGlzdC9jb3JlL0h0bWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibWltYmwvZGlzdC9jb3JlL21pbVwiXHJcbntcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG5cdHtcclxuICAgICAgICBSb3V0ZXI6IElSb3V0ZXJTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJvdXRlclNlcnZpY2UgaXMgYSBzZXJ2aWNlIHRoYXQgaXMgcHVibGlzaGVkIGJ5IHRoZSBSb3V0ZXIgY29tcG9uZW50LiBJdCBhbGxvd3NcclxuICogc3Vic2NyaWJlcnMgdG8gbmF2aWdhdGUgdG8gcGF0aHMgZGVmaW5lZCBieSBSb3V0ZXIncyByb3V0ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJTZXJ2aWNlXHJcbntcclxuXHQvLyBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJMLlxyXG5cdG5hdmlnYXRlQnlVUkwoIHVybDogc3RyaW5nLCBtYWtlSGlzdG9yeUVudHJ5PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8vIE5hdmlnYXRlcyB0byBhIHJvdXRlIHdpdGggdGhlIGdpdmVuIElELlxyXG5cdG5hdmlnYXRlQnlJRCggaWQ6IHN0cmluZywgZmllbGRzPzogUm91dGVGaWVsZHMsIG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBvYmplY3QgY29udGFpbmluZyBmaWVsZCB2YWx1ZXMgdGhhdCBpcyBwYXNzZWQgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgcm91dGUuIFdoZW5cclxuICogbmF2aWdhdGluZyBieSByb3V0ZSBJRCwgdGhlIGZpZWxkcyBhcmUgcGFzc2VkIGV4cGxpY2l0bHkuIFdoZW4gbmF2aWdhdGluZyBieSBVUkwsIHRoZSBmaWVsZHNcclxuICogYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBVUkwgYWNjb3JkaW5nIHRvIHRoZSBVUkwgcGF0dGVybiBpbiB0aGUgcm91dGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSb3V0ZUZpZWxkcyA9IHsgW1A6IHN0cmluZ106IG1pbXVybC5GaWVsZFZhbHVlVHlwZSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5IGZvciBhIHJvdXRlLiBJdCBjYW4gcmV0dXJuIGEgUHJvbWlzZSBpblxyXG4gKiB3aGljaCBjYXNlIHRoZSBSb3V0ZXIgd2lsbCBkaXNwbGF5IHByb2dyZXNzIFVJIHVudGlsIHRoZSBjb250ZW50IGJlY29tZXMgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmF2VG9Sb3V0ZUZ1bmNUeXBlID0gKGZpZWxkczogUm91dGVGaWVsZHMpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gbmF2aWdhdGluZyBmcm9tIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHJvdXRlLiBJZiBmYWxzZVxyXG4gKiBpcyByZXR1cm5lZCwgbmF2aWdhdGlvbiBkb2Vzbid0IGhhcHBlbi4gVGhpcyBhbGxvd3MgdGhlIGN1cnJlbnQgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlclxyXG4gKiBhYm91dCB1bnNhdmVkIGRhdGEuIElmIFByb21pc2UgaXMgcmV0dXJuZWQsIHRoZSBSb3V0ZXIgd2lsbCB3YWl0IHVudGlsIHRoZSByZXNwb25zZSBpcyBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXZGcm9tUm91dGVGdW5jVHlwZSA9ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJvdXRlIGludGVyZmFjZSBkZWZpbmVzIGEgbmF2aWdhdGlvbiB0YXJnZXQuIFJvdXRlcyBjYW4gaGF2ZSBzdWItcm91dGVzLCB3aGljaCBjcmVhdGVzIGFcclxuICogaGllcmFyY2h5IG9mIHJvdXRlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFVuaXF1ZSAoYnV0IG9wdGlvbmFsKSBJRCB0aGF0IGFsbG93cyBuYXZpZ2F0aW5nIHRvIHRoZSB0YXJnZXQgdXNpbmcgYSBzaW1wbGUgSUQgaW5zdGVhZCBvZlxyXG5cdCAqIHBhdGguIFRoZSBwYXRoIG1lbWJlciB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGFkZHJlc3MgY29udHJvbC5cclxuXHQgKi9cclxuXHRpZD86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogVVJMIHBhdHRlcm4gLSBjYW4gY29udGFpbiBuYW1lZCBwYXJhbWV0ZXJzIChhcyBpbiAvdXNlcnMve3VpZH0pLiBUaGlzIGNhbiBiZSBsZWZ0IGVtcHR5XHJcblx0ICogaWYgb25seSBpZCBpcyB1c2VkXHJcblx0ICovXHJcblx0dXJsUGF0dGVybj86IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgcHJvcGVydHkgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGhpc3RvcnkucHVzaFN0YXRlIGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0aW9uIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgY29udGVudCB0byBkaXNwbGF5LlxyXG5cdCAqL1xyXG5cdG5hdlRvRnVuYz86IE5hdlRvUm91dGVGdW5jVHlwZTtcclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB0aGUgY3VycmVudCBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyIGFib3V0IHVuc2F2ZWQgZGF0YS5cclxuXHQgKi9cclxuXHRuYXZGcm9tRnVuYz86IE5hdkZyb21Sb3V0ZUZ1bmNUeXBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBPcmRlcmVkIGxpc3Qgb2YgUm91dGUgb2JqZWN0cywgd2hpY2ggYXJlIHN1Yi1yb3V0ZXMgb2YgdGhpcyByb3V0ZS5cclxuXHQgKi9cclxuXHRzdWJSb3V0ZXM/OiBSb3V0ZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZSBmb3IgSGlzdG9yeS5wdXNoU3RhdGUgZnVuY3Rpb24uIEl0IHJlbWVtYmVycyB0aGVcclxuICogcGFyYW1ldGVycyBvZiBhIHJvdXRlIHRvIG5hdmlnYXRlIHRvIHdoZW4gdGhlIHVzZXIgZ29lcyBiYWNrIG9yIGZvcndhcmQgaW4gdGhlIGJyb3dzZXInc1xyXG4gKiBoaXN0b3J5LlxyXG4gKi9cclxuY2xhc3MgUm91dGVTdGF0ZVxyXG57XHJcblx0cm91dGVJRDogc3RyaW5nO1xyXG5cdHJvdXRlVVJMOiBzdHJpbmc7XHJcblx0ZmllbGRzOiBSb3V0ZUZpZWxkcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBieSB0aGUgUm91dGVyIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGN1cnJlbnQgcm91dGUuXHJcbiAqIFRoaXMgYWxsb3dzIHRoZSByb3V0ZXIgZG8gaGF2ZSBpdHMgb3duIGNvbnRlbnQgLSB0aGUgc2FtZSBmb3IgYWxsIHJvdXRlcyAtIGFuZCBpbnNlcnQgdGhlXHJcbiAqIGN1cnJlbnQgcm91dGVyJ3MgY29udGVudCBpbnRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGUgPSAocm91dGVDb250ZW50OiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJ5IHRoZSBSb3V0ZXIgdG8gZGlzcGxheSBhIHByb2dyZXNzIFVJIHdoaWxlIGl0IGlzIGxvYWRpbmdcclxuICogcm91dGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb2dyZXNzQ29udGVudFJlbmRlckZ1bmNUeXBlID0gKCkgPT4gYW55O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSb3V0ZXJQcm9wcyBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlclByb3BzXHJcbntcclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5IEFQSSB0b1xyXG5cdCAqIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxyXG5cdCAqL1xyXG5cdGNvbnRyb2xzQnJvd3Nlcj86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB0aGF0IGlmIHRoaXMgcm91dGVyIGNhbm5vdCByZXNvbHZlIGEgcGF0aCwgaXQgd2lsbCBkZWxlZ2F0ZSB0byBhIHJvdXRlciB1cFxyXG5cdCAqIHRoZSBjb21wb25lbnQgY2hhaW4gKGlmIHRoZXJlIGlzIG9uZSkuXHJcblx0ICovXHJcblx0Y2hhaW5zVG9IaWdoZXJSb3V0ZXI/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgYmFzZWQgb24gd2hpY2ggYWxsIHJvdXRlIHBhdGhzIHdpbGwgYmUgcmVzb2x2ZWQuIERlZmF1bHQgdmFsdWUgaXNcclxuXHQgKiB0cnVlLlxyXG5cdCAqL1xyXG5cdGJhc2VVUkw/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSb3V0ZXIgY29tcG9uZW50IHByb3ZpZGVzIGNsaWVudC1zaWRlIHJvdXRpbmcuIEl0IHdvcmtzIHdpdGggUm91dGUgb2JqZWN0cyB0aGF0IGRlZmluZVxyXG4gKiBhdmFpbGFibGUgbmF2aWdhdGlvbiB0YXJnZXRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlciBleHRlbmRzIG1pbS5Db21wb25lbnQ8SVJvdXRlclByb3BzLFJvdXRlW10+IGltcGxlbWVudHMgSVJvdXRlclNlcnZpY2UsIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2Vcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBwcm9wczogSVJvdXRlclByb3BzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCByb3V0ZSBvZiB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdFx0XHRcdHRoaXMuYWRkUm91dGUoIHJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zZXJ0cyB0aGUgZ2l2ZW4gcm91dGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBsaXN0LlxyXG5cdCAqIEBwYXJhbSByb3V0ZSBbW1JvdXRlXV0gb2JqZWN0IHRvIGFkZFxyXG5cdCAqIEBwYXJhbSBpbmRleCBJbmRleCBhdCB3aGljaCB0byBhZGQgdGhlIHJvdXRlIG9iamVjdC4gSWYgdGhlIGluZGV4IGlzIG5vdCBkZWZpbmVkLCB0aGVcclxuXHQgKlx0XHRyb3V0ZSBpcyBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LiBJZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGxcclxuXHQgKlx0XHRiZSB0aHJvd24uXHJcblx0ICovXHJcblx0cHVibGljIGFkZFJvdXRlKCByb3V0ZTogUm91dGUsIGluZGV4PzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJSb3V0ZSBvYmplY3QgY2Fubm90IGJlIG51bGxcIik7XHJcblxyXG5cdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDAsIHJvdXRlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yb3V0ZXMucHVzaCggcm91dGUpO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IGFkZCB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgdG8gdGhlIG1hcFxyXG5cdFx0dGhpcy5hZGRSb3V0ZVRvTWFwKCByb3V0ZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYSByb3V0ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGxpc3QgYW5kIHJldHVybnMgdGhlIFJvdXRlIG9iamVjdC4gSWYgaW5kZXggaXNcclxuXHQgKiBvdXQgb2YgcmFuZ2UgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpbmRleFxyXG5cdCAqIEByZXR1cm4gUm91dGUgW1tSb3V0ZV1dIG9iamVjdCB0aGF0IHdhcyByZW1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVSb3V0ZSggaW5kZXg6IG51bWJlcik6IFJvdXRlXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLnNwbGljZSggaW5kZXgsIDEpWzBdO1xyXG5cclxuXHRcdC8vIHJlY3Vyc2l2ZWx5IHJlbW92ZSB0aGUgcm91dGUgYW5kIGFsbCBpdHMgc3ViLXJvdXRlcyAodGhhdCBoYXZlIElEcykgZnJvbSB0aGUgbWFwXHJcblx0XHR0aGlzLnJlbW92ZVJvdXRlRnJvbU1hcCggcm91dGUpO1xyXG5cclxuXHRcdHJldHVybiByb3V0ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBtYXAgb2Ygcm91dGVzIGJ5IElEcyAob25seVxyXG5cdC8vIHRoZSByb3V0ZXMgdGhhdCBoYXZlIHRoZWlyIGlkIHByb3BlcnR5IGRlZmluZWQgYW5kIG5vdCBlbXB0eSkuXHJcblx0cHJpdmF0ZSBhZGRSb3V0ZVRvTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuc2V0KCByb3V0ZS5pZCwgcm91dGUpO1xyXG5cclxuXHRcdGlmIChyb3V0ZS5zdWJSb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IHN1YlJvdXRlIG9mIHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdFx0XHR0aGlzLmFkZFJvdXRlVG9NYXAoIHN1YlJvdXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gcm91dGUgYW5kIGl0cyBzdWItcm91dGVzIHJlY3Vyc2l2ZWx5IGZyb20gdGhlIG1hcCBvZiByb3V0cyBieSBJRHMgKG9ubHlcclxuXHQvLyB0aGUgcm91dGVzIHRoYXQgaGF2ZSB0aGVpciBpZCBwcm9wZXJ0eSBkZWZpbmVkIGFuZCBub3QgZW1wdHkpLlxyXG5cdHByaXZhdGUgcmVtb3ZlUm91dGVGcm9tTWFwKCByb3V0ZTogUm91dGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJvdXRlLmlkKVxyXG5cdFx0XHR0aGlzLnJvdXRlc0J5SUQuZGVsZXRlKCByb3V0ZS5pZCk7XHJcblxyXG5cdFx0aWYgKHJvdXRlLnN1YlJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgc3ViUm91dGUgb2Ygcm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHRcdHRoaXMucmVtb3ZlUm91dGVGcm9tTWFwKCBzdWJSb3V0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE5hdmlnYXRlcyB0byBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBVUkwuXHJcblx0ICogQHBhcmFtIHVybCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gbmF2aWdhdGUgdG9cclxuXHQgKiBAcGFyYW0gbWFrZUhpc3RvcnlFbnRyeVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYXZpZ2F0ZUJ5VVJMKCB1cmw6IHN0cmluZywgbWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBbcm91dGUsIGZpZWxkc10gPSB0aGlzLmZpbmRSb3V0ZUJ5VVJMKCB1cmwpO1xyXG5cdFx0aWYgKCFyb3V0ZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuaGlnaGVyUm91dGVyU2VydmljZSlcclxuXHRcdFx0XHR0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2Uuci5uYXZpZ2F0ZUJ5VVJMKCB1cmwsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmF2aWdhdGVUb1JvdXRlKCByb3V0ZSwgdXJsLCBmaWVsZHMsIG1ha2VIaXN0b3J5RW50cnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBOYXZpZ2F0ZXMgdG8gYSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIHJvdXRlXHJcblx0ICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgcm91dGUncyBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSBtYWtlSGlzdG9yeUVudHJ5IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBSb3V0ZXIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGVcclxuXHQgKlx0XHRicm93c2VyJ3MgaGlzdG9yeS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmF2aWdhdGVCeUlEKCBpZDogc3RyaW5nLCBmaWVsZHM/OiBSb3V0ZUZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeT86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzQnlJRC5nZXQoIGlkKTtcclxuXHRcdGlmICghcm91dGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UpXHJcblx0XHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlLnIubmF2aWdhdGVCeUlEKCBpZCwgZmllbGRzKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgd2UgbWF5IG5lZWQgdG8gc3Vic3RpdHV0ZSBwYXJhbWV0ZXJzIGluIHRoZVxyXG5cdFx0Ly8gcm91dGUncyBVUkwgcGF0dGVyblxyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyKVxyXG5cdFx0e1xyXG5cdFx0XHR1cmwgPSByb3V0ZS51cmxQYXR0ZXJuO1xyXG5cdFx0XHRpZiAodXJsICYmIGZpZWxkcylcclxuXHRcdFx0e1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYXZpZ2F0ZVRvUm91dGUoIHJvdXRlLCB1cmwsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmRzIGEgcm91dGUgYnkgZ29pbmcgdGhyb3VnaCB0aGUgcm91dGUgaGllcmFyY2h5IGFuZCB0cnlpbmcgdG8gbWF0Y2ggdGhlIGdpdmVuIFVSTC5cclxuXHQgKiBJZiB0aGUgcm91dGUgaXMgZm91bmQsIHRoZSBVUkwgaXMgcGFyc2VkIGFuZCBhbnkgcGFyYW1ldGVycyBhcmUgZXh0cmFjdGVkIGZyb20gaXQuXHJcblx0ICogQHBhcmFtIHVybFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZmluZFJvdXRlQnlVUkwoIHVybDogc3RyaW5nKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRyZXR1cm4gUm91dGVyLmZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmwsIHRoaXMucm91dGVzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTG9va3MgZm9yIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSTCBhbW9uZyB0aGUgZ2l2ZW4gYXJyYXkgb2YgUm91dGUgb2JqZWN0cyBhbmRcclxuXHQgKiByZWN1cnNpdmVseSBhbW9uZyB0aGVpciBzdWItcm91dGVzLlxyXG5cdCAqIEBwYXJhbSB1cmwgVVJMIHRvIG1hdGNoXHJcblx0ICogQHBhcmFtIHJvdXRlcyBBcnJheSBvZiBSb3V0ZSBvYmplY3RzIHRvIG1hdGNoIHdpdGggdGhlIFVSTFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGZpbmRSb3V0ZVJlY3Vyc2l2ZUJ5VVJMKCB1cmw6IHN0cmluZywgcm91dGVzOiBSb3V0ZVtdKTogW1JvdXRlLCBSb3V0ZUZpZWxkc11cclxuXHR7XHJcblx0XHRmb3IoIGxldCByb3V0ZSBvZiByb3V0ZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBtYXRjaFJlc3VsdCA9IG1pbXVybC5tYXRjaCggdXJsLCByb3V0ZS51cmxQYXR0ZXJuKTtcclxuXHRcdFx0aWYgKG1hdGNoUmVzdWx0ICYmIG1hdGNoUmVzdWx0LnN1Y2Nlc3MpXHJcblx0XHRcdFx0cmV0dXJuIFtyb3V0ZSwgbWF0Y2hSZXN1bHQuZmllbGRzXTtcclxuXHRcdFx0ZWxzZSBpZiAocm91dGUuc3ViUm91dGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHJvb3RBbmRGaWVsZHMgPSBSb3V0ZXIuZmluZFJvdXRlUmVjdXJzaXZlQnlVUkwoIHVybCwgcm91dGUuc3ViUm91dGVzKTtcclxuXHRcdFx0XHRpZiAocm9vdEFuZEZpZWxkc1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByb290QW5kRmllbGRzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFtudWxsLCBudWxsXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTmF2aWdhdGVzIHRvIHRoZSBnaXZlbiByb3V0ZSBwYXNzaW5nIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgcm91dGVcclxuXHQgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSByb3V0ZSdzIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIG1ha2VIaXN0b3J5RW50cnkgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIFJvdXRlciBzaG91bGQgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZVxyXG5cdCAqXHRcdGJyb3dzZXIncyBoaXN0b3J5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbmF2aWdhdGVUb1JvdXRlKCByb3V0ZTogUm91dGUsIHVybDogc3RyaW5nLCBmaWVsZHM6IFJvdXRlRmllbGRzLFxyXG5cdFx0XHRcdFx0bWFrZUhpc3RvcnlFbnRyeTogYm9vbGVhbik6IFByb21pc2U8YW55PlxyXG5cdHtcclxuXHRcdC8vLy8gY2hlY2sgaWYgdGhlIG5ldyByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCByb3V0ZSBhbmQgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdC8vaWYgKHJvdXRlID09PSB0aGlzLmN1cnJSb3V0ZSlcclxuXHRcdC8vXHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBjdXJyZW50IHJvdXRlLCBhc2sgaXQgaWYgd2UgY2FuIGxlYXZlIGl0XHJcblx0XHRpZiAodGhpcy5jdXJyUm91dGUgJiYgdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMpXHJcblx0XHR7XHJcblx0XHRcdGxldCByZXQ6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+ID0gdGhpcy5jdXJyUm91dGUubmF2RnJvbUZ1bmMoKTtcclxuXHRcdFx0aWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdFx0cmV0ID0gYXdhaXQgKHJldCBhcyBQcm9taXNlPGJvb2xlYW4+KTtcclxuXHJcblx0XHRcdGlmICghcmV0KVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBhcmUgY29udHJvbGxpbmcgdGhlIGJyb3dzZXIgdXNlIEhpc3RvcnkgQVBJIHRvIGNoYW5nZSBzdGF0ZVxyXG5cdFx0aWYgKHRoaXMuY29udHJvbHNCcm93c2VyICYmIG1ha2VIaXN0b3J5RW50cnkpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGF0ZTogUm91dGVTdGF0ZSA9IHsgcm91dGVJRDogcm91dGUuaWQsIHJvdXRlVVJMOiB1cmwsIGZpZWxkcyB9O1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSggc3RhdGUsIFwiXCIsIHVybCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyByb3V0ZSBhbmQgZ2V0IGl0cyBjb250ZW50XHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IHJvdXRlO1xyXG5cdFx0bGV0IGNvbnRlbnQ6IGFueSA9IHJvdXRlLm5hdlRvRnVuYyA/IHJvdXRlLm5hdlRvRnVuYyggZmllbGRzKSA6IG51bGw7XHJcblx0XHRpZiAoY29udGVudCBpbnN0YW5jZW9mIFByb21pc2UpXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGF3YWl0IChjb250ZW50IGFzIFByb21pc2U8YW55Pik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3VyclJvdXRlQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0Ly8gcmVxdWVzdCB0byBiZSB1cGRhdGVkIHNvIHRoYXQgb3VyIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBjYWxsZWRcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBlcnJvciB3YXMgcmFpc2VkIGJ5IG9uZSBvZiB0aGUgZGVzY2VuZGFudCBjb3BvbmVudHMuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIiwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gcHVibGlzaCBvdXJzZWx2ZXMgYXMgYSByb3V0ZXIgc2VydmljZVxyXG5cdFx0dGhpcy5zaXRlLnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzKTtcclxuXHJcblx0XHQvLyBpZiBpbnN0cnVjdGVkIHNvLCBzdWJzY3JpYmUgdG8gYSByb3V0ZXIgc2VydmljZSBpbXBsZW1lbnRlZCBieSBhbnkgb2YgY29tcG9uZW50c1xyXG5cdFx0Ly8gdXAgdGhlIGNoYWluXHJcblx0XHRpZiAodGhpcy5jaGFpbnNUb0hpZ2hlclJvdXRlcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gbmV3IG1pbS5SZWY8SVJvdXRlclNlcnZpY2U+KCk7XHJcblx0XHRcdHRoaXMuc2l0ZS5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiLCB0aGlzLmhpZ2hlclJvdXRlclNlcnZpY2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHJvdXRlIHRvIGRpc3BsYXlcclxuXHRcdGxldCBmaXJzdFJvdXRlOiBSb3V0ZSA9IHRoaXMucm91dGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRlc1swXSA6IG51bGw7XHJcblx0XHRpZiAoIWZpcnN0Um91dGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmN1cnJSb3V0ZSA9IGZpcnN0Um91dGU7XHJcblx0XHRsZXQgY29udGVudDogYW55ID0gZmlyc3RSb3V0ZS5uYXZUb0Z1bmMgPyBmaXJzdFJvdXRlLm5hdlRvRnVuYygge30pIDogbnVsbDtcclxuXHRcdGlmIChjb250ZW50IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXCJQbGVhc2Ugd2FpdCB3aGlsZSBjb250ZW50IGlzIGxvYWRpbmcuLi5cIjtcclxuXHRcdFx0KGNvbnRlbnQgYXMgUHJvbWlzZTxhbnk+KS50aGVuKCAoIGRlbGF5ZWRDb250ZW50OiBhbnkpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmN1cnJSb3V0ZUNvbnRlbnQgPSBkZWxheWVkQ29udGVudDtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZU1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gY29udGVudDtcclxuXHJcblx0XHRpZiAodGhpcy5jb250cm9sc0Jyb3dzZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGVzdGFibGlzaCBiYXNlIFVSTCByZWxhdGl2ZSB0byB3aGljaCBhbGwgcGF0aHMgd2lsbCBiZSBjb25zaWRlcmVkXHJcblx0XHRcdGlmICghdGhpcy5iYXNlVVJMKVxyXG5cdFx0XHR7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1YnNjcmliZSB0byB0aGUgcG9wc3RhdGUgZXZlbnQgZm9yIG1vbml0b3JpbmcgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kc1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wc3RhdGUpO1xyXG5cclxuXHRcdFx0bGV0IHN0YXRlOiBSb3V0ZVN0YXRlID0geyByb3V0ZUlEOiBmaXJzdFJvdXRlLmlkLCByb3V0ZVVSTDogZmlyc3RSb3V0ZS51cmxQYXR0ZXJuLCBmaWVsZHM6IG51bGwgfTtcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoIHN0YXRlLCBcIlwiLCBmaXJzdFJvdXRlLnVybFBhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xzQnJvd3NlcilcclxuXHRcdHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcHN0YXRlKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNoYWluc1RvSGlnaGVyUm91dGVyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNpdGUudW5zdWJzY3JpYmVTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdFx0dGhpcy5oaWdoZXJSb3V0ZXJTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2l0ZS51bnB1Ymxpc2hTZXJ2aWNlKCBcIlJvdXRlclwiKTtcclxuXHRcdHRoaXMuc2l0ZS51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmlydFJlbmRlciggdGhpcy5jdXJyUm91dGVDb250ZW50KTtcclxuXHR9XHJcblx0XHJcblxyXG5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBub2RlUGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly90aGlzLmVycm9yID0gZXJyO1xyXG5cdFx0Ly90aGlzLmVycm9yUGF0aCA9IG5vZGVQYXRoO1xyXG5cdFx0dGhpcy5jdXJyUm91dGVDb250ZW50ID0gXHJcblx0XHRcdDxkaXYgaWQ9XCJyb290RXJyb3JcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInBpbmtcIiwgZGlzcGxheTpcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHRcdHtlcnJ9XHJcblx0XHRcdFx0e25vZGVQYXRoICYmIG5vZGVQYXRoLm1hcCggKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogXCJWaXJ0dWFsXCIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBkZXJpdmVkIGNsYXNzZXMuIFJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmdcclxuXHQgKiBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZWl0aGVyIGNhbGxzXHJcblx0ICogdGhlIG91dGVyQ29udGVudEZ1bmMgaWYgZGVmaW5lZCBvciBqdXN0IHJldHVybnMgdGhlIGNvbnRlbnQgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjdXJyUm91dGVDb250ZW50XHJcblx0ICogQHJldHVybiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBieSB0aGUgUm91dGVyIGNvbXBvbmVudC5cclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgdmlydFJlbmRlciggY3VyclJvdXRlQ29udGVudDogYW55KTogYW55XHJcblx0e1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5vdXRlckNvbnRlbnRGdW5jID8gdGhpcy5vdXRlckNvbnRlbnRGdW5jKCBjdXJyUm91dGVDb250ZW50KSA6IGN1cnJSb3V0ZUNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gY3VyclJvdXRlQ29udGVudDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVhY3RzIG9uIHVzZXIgdXNpbmcgYmFjayBhbmQgZm9yd2FyZCBidXR0b25zLlxyXG5cdHByaXZhdGUgb25Qb3BzdGF0ZSA9ICggZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRsZXQgc3RhdGU6IFJvdXRlU3RhdGUgPSBlLnN0YXRlIGFzIFJvdXRlU3RhdGU7XHJcblx0XHRpZiAoIXN0YXRlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0YXRlLnJvdXRlSUQpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeUlEKCBzdGF0ZS5yb3V0ZUlELCBzdGF0ZS5maWVsZHMpO1xyXG5cdFx0ZWxzZSBpZiAoc3RhdGUucm91dGVVUkwpXHJcblx0XHRcdHRoaXMubmF2aWdhdGVCeVVSTCggc3RhdGUucm91dGVVUkwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyggXCJSb3V0ZSBzdGF0ZSBpbiBwb3BzdGF0ZSBldmVudCBoYXMgbmVpdGhlciByb3V0ZSBJRCBub3IgcGF0aC5cIik7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJvdXRlciBjb250cm9scyB0aGUgYnJvd3NlcjsgdGhhdCBpcywgdXNlcyBIaXN0b3J5XHJcblx0Ly8gQVBJIHRvIHB1c2ggbmV3IHN0YXRlIGFuZCBpbnRlcmNlcHQgYmFjayBhbmQgZm9yd2FyZCBjb21tYW5kcy5cclxuXHRwcml2YXRlIGdldCBjb250cm9sc0Jyb3dzZXIoKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRyb2xzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMucHJvcHMuY29udHJvbHNCcm93c2VyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgZmxhZyBpbmRpY2F0aW5nIHRoYXQgaWYgdGhpcyByb3V0ZXIgY2Fubm90IHJlc29sdmUgYSBwYXRoLCBpdCB3aWxsIGRlbGVnYXRlIHRvXHJcblx0Ly8gYSByb3V0ZXIgdXAgdGhlIGNvbXBvbmVudCBjaGFpbiAoaWYgdGhlcmUgaXMgb25lKS5cclxuXHRwcml2YXRlIGdldCBjaGFpbnNUb0hpZ2hlclJvdXRlcigpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hhaW5zVG9IaWdoZXJSb3V0ZXIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB0aGlzLnByb3BzLmNoYWluc1RvSGlnaGVyUm91dGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIGJhc2VkIG9uIHdoaWNoIGFsbCByb3V0ZSBwYXRocyB3aWxsIGJlIHJlc29sdmVkLlxyXG5cdHByaXZhdGUgZ2V0IGJhc2VVUkwoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuYmFzZVVSTCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHRoaXMucHJvcHMuYmFzZVVSTDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyB0aGUgY29udGVudCBvZiB0aGUgY3VycmVudCByb3V0ZSBpbnNpZGUgdGhlIHJvdXRlcidzIG93biBjb250ZW50LiBJZlxyXG5cdCAqIHRoaXMgbWVtYmVyIGlzIHVuZGVmaW5lZCwgb25seSB0aGUgY3VycmVudCByb3V0ZSdzIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHNldCBPdXRlckNvbnRlbnRGdW5jKCB2YWw6IFJvdXRlck91dGVyQ29udGVudFJlbmRlckZ1bmNUeXBlKSB7IHRoaXMub3V0ZXJDb250ZW50RnVuYyA9IHZhbDsgfVxyXG5cdHByaXZhdGUgb3V0ZXJDb250ZW50RnVuYzogUm91dGVyT3V0ZXJDb250ZW50UmVuZGVyRnVuY1R5cGU7XHJcblxyXG5cdC8qKiBTZXRzIHRoZSBmdW5jdGlvbiB0aGF0IHJlbmRlcnMgYSBwcm9ncmVzcyBVSSB3aGlsZSB0aGUgcm91dGVyIGlzIGxvYWRpbmcgcm91dGUgY29udGVudC4gKi9cclxuXHRwdWJsaWMgc2V0IFByb2dyZXNzQ29udGVudEZ1bmMoIHZhbDogUHJvZ3Jlc3NDb250ZW50UmVuZGVyRnVuY1R5cGUpIHsgdGhpcy5wcm9ncmVzc0NvbnRlbnRGdW5jID0gdmFsOyB9XHJcblx0cHJpdmF0ZSBwcm9ncmVzc0NvbnRlbnRGdW5jOiBQcm9ncmVzc0NvbnRlbnRSZW5kZXJGdW5jVHlwZTtcclxuXHJcblx0Ly8gQSByb3V0ZXIgc2VydmljZSB0aGlzIHJvdXRlciB3aWxsIGRlbGVnYXRlIHRvIHdoZW4gaXQgY2Fubm90IHJlc29sdmUgYSBwYXRoLlxyXG5cdHByaXZhdGUgaGlnaGVyUm91dGVyU2VydmljZTogbWltLlJlZjxJUm91dGVyU2VydmljZT47XHJcblxyXG5cdC8vIE9yZGVyZWQgbGlzdCBvZiBSb3V0ZSBvYmplY3RzIC0gdXNlZCB0byBmaW5kIHJvdXRlcyBieSBtYXRjaGluZyBwYXRocy4gTm90ZSB0aGF0IHRoaXNcclxuXHQvLyBsaXN0IGlzIGFjdHVhbGx5IGEgaGllcmFyY2h5IGJlY2F1c2Ugcm91dGVzIGNhbiBjb250YWluIHN1Yi1yb3V0ZXMuXHJcblx0cHJpdmF0ZSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcclxuXHJcblx0Ly8gTWFwIG9mIHJvdXRlIElEcyB0byBSb3V0ZSBvYmplY3RzLiBBbGwgcm91dGVzIHRoYXQgZGVmaW5lIGFuIElEIGFyZSBhZGRlZCB0byB0aGlzIG1hcCAtXHJcblx0Ly8gbm8gbWF0dGVyIGhvdyBkZWVwIGluIHRoZSBoaWVyYXJjaHkuXHJcblx0cHJpdmF0ZSByb3V0ZXNCeUlEID0gbmV3IE1hcDxzdHJpbmcsUm91dGU+KCk7XHJcblxyXG5cdC8vIEN1cnJlbnRseSBkaXNwbGF5ZWQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGU6IFJvdXRlO1xyXG5cclxuXHQvLyBDb250ZW50IHBvdmlkZWQgYnkgdGhlIGN1cnJlbnQgcm91dGUuXHJcblx0cHJpdmF0ZSBjdXJyUm91dGVDb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIEVycm9yIGFuZCBjb21wb25lbnQgcGF0aCBpbiBjYXNlIGFuIGVycm9yIGhhcyBiZWVuIGNhdWdodC5cclxuXHRwcml2YXRlIGVycm9yOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgZXJyb3JQYXRoOiBzdHJpbmdbXSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBMaW5rUHJvcHMgaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBmb3IgdGhlIExpbmsgY29tcG9uZW50IGJlY2F1c2UuIFRoZSBwcm9wZXJ0aWVzIGluXHJcbi8vIHRoaXMgaW50ZXJmYWNlIGRlZmluZSB0aGUgcm91dGU7IHRoZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBJSHRtbEFFbGVtZW50UHJvcHMgaW50ZXJmYWNlXHJcbi8vIGNvcnJlc3BvbmQgdG8gdGhlIHJlbGV2YW50IGF0dHJpYnV0ZXMgb2YgdGhlIDxhPiBET00gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua1Byb3BzIGV4dGVuZHMgbWltLklIdG1sQUVsZW1lbnRQcm9wc1xyXG57XHJcblx0Ly8gUGF0aCB0aGF0IHdpbGwgYmUgbWFwcGVkIHRvIGEgcm91dGUgYnkgdGhlIFJvdXRlci5cclxuXHRyb3V0ZVVSTD86IHN0cmluZztcclxuXHJcblx0Ly8gSUQgb2YgdGhlIHJvdXRlIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gYSByb3V0ZSBieSB0aGUgUm91dGVyLlxyXG5cdHJvdXRlSUQ/OiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcm91dGUgd2hlbiB1c2luZyByb3V0ZUlELlxyXG5cdGZpZWxkcz86IFJvdXRlRmllbGRzO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IHNob3VsZCBiZSBtYWRlIGEgbmV3IGVudHJ5IGluIHRoZSBicm93c2VyJ3MgaGlzdG9yeTtcclxuXHQvLyB0aGF0IGlzIHRvIGJlIHN1YmplY3QgdG8gYmFjayBhbmQgZm9yd2FyZCBicm93c2VyIGNvbW1hbmRzLlxyXG5cdG1ha2VIaXN0b3J5RW50cnk/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgTGluayBjbGFzcyBpcyBhIEpTWCBjb21wb25lbnQgdGhhdCBhbGxvd3MgY3JlYXRpbmcgbGlua3MgaGFuZGxlZCBieSBhIFJvdXRlciBvYmplY3QuIEl0IGlzXHJcbi8vIGltcGxlbWVudGVkIGFzIGEgSlNYIGNvbXBvbmVudCBiZWNhdXNlIGl0cyBpbnRlbmRlZCB1c2UgaXMgdmVyeSBzaW1pbGFyIHRvIHRoZSA8YT4gRE9NXHJcbi8vIGVsZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgTGluayBleHRlbmRzIG1pbS5Db21wb25lbnQ8TGlua1Byb3BzPlxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBMaW5rUHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0Ly8gZXh0cmFjdCBvdXIgY3VzdG9tIHBhcmFtZXRlcnMgYW5kIGxlYXZlIG9ubHkgdGhvc2UgdGhhdCBhcmUgPGE+IGF0dHJpYnV0ZXNcclxuXHRcdGxldCB7cm91dGVVUkwsIHJvdXRlSUQsIGZpZWxkcywgbWFrZUhpc3RvcnlFbnRyeSwgLi4ucmVzdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIDxhIGhyZWY9XCIjXCIgY2xpY2s9e3RoaXMub25DbGlja30gey4uLnJlc3R9PlxyXG5cdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdDwvYT47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25DbGljayA9ICggZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNlcnZpY2U6IElSb3V0ZXJTZXJ2aWNlID0gdGhpcy5zaXRlLmdldFNlcnZpY2UoIFwiUm91dGVyXCIpO1xyXG5cdFx0aWYgKCFzZXJ2aWNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHRoaXMucHJvcHMucm91dGVJRClcclxuXHRcdFx0c2VydmljZS5uYXZpZ2F0ZUJ5SUQoIHRoaXMucHJvcHMucm91dGVJRCwgdGhpcy5wcm9wcy5maWVsZHMsIHRoaXMucHJvcHMubWFrZUhpc3RvcnlFbnRyeSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHNlcnZpY2UubmF2aWdhdGVCeVVSTCggdGhpcy5wcm9wcy5yb3V0ZVVSTCwgdGhpcy5wcm9wcy5tYWtlSGlzdG9yeUVudHJ5KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgcm91dGVyU2VydmljZSA9IG5ldyBtaW0uUmVmPElSb3V0ZXJTZXJ2aWNlPigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwibWltYmxcIjtcclxuaW1wb3J0IHtJVHJlZSwgSVRyZWVOb2RlLCBJVHJlZU5vZGVDb250YWluZXIsIElUcmVlTm9kZVBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1RyZWVOb2RlfSBmcm9tIFwiLi9UcmVlTm9kZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFRyZWUgY2xhc3MgaXMgYSBnZW5lcmFsIHB1cnBvc2UgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBtaW0uQ29tcG9uZW50V2l0aExvY2FsU3R5bGVzIGltcGxlbWVudHMgSVRyZWVcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudGFiSW5kZXggPSAwO1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgVHJlZU5vZGVDb250YWluZXIoICgpID0+IG5ldyBUcmVlTm9kZSggbnVsbCwgMCwgdGhpcykpO1xyXG5cdFx0dGhpcy5lbG1SZWYgPSBuZXcgbWltLlJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcblx0XHR0aGlzLnByZXBhcmVMb2NhbFN0eWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fdGFiSW5kZXg7IH1cclxuXHRwdWJsaWMgc2V0IHRhYkluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1fdGFiSW5kZXggPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IElUcmVlTm9kZVtdIHsgcmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IElUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlOiBUcmVlTm9kZSA9IHRoaXMuY29udGFpbmVyLmFkZE5vZGUoIHBhcmFtcywgaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIucmVtb3ZlTm9kZSggaW5kZXgpO1xyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgcmVtb3ZlQWxsTm9kZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEV4cGFuZHMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBleHBhbmRBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZUFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuY29sbGFwc2VBbGwoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSBvciBudWxsIGlmIG5vIG5vZGUgaXMgc2VsZWN0ZWQuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZE5vZGUoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9zZWxlY3RlZE5vZGU7IH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbG1SZWZ9IHRhYmluZGV4PXt0aGlzLnRhYkluZGV4fSBjbGFzcz17dGhpcy5jc3NDbGFzc1RyZWV9IGtleWRvd249e3RoaXMub25LZXlEb3dufT5cclxuXHRcdFx0e3RoaXMuY29udGFpbmVyfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcblx0XHRcdHRoaXMuc2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdFx0ZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKVxyXG5cdFx0XHR0aGlzLmV4cGFuZE9yU2VsZWN0RG93biggdGhpcy5tX3NlbGVjdGVkTm9kZSk7XHJcblx0XHRlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIilcclxuXHRcdFx0dGhpcy5jb2xsYXBzZU9yU2VsZWN0VXAoIHRoaXMubV9zZWxlY3RlZE5vZGUpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZSBkb3duIGZyb20gdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBzZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgbmV4dE5vZGUgPSB0aGlzLmZpbmREb3duKCBub2RlKTtcclxuXHRcdGlmIChuZXh0Tm9kZSlcclxuXHRcdHtcclxuXHRcdFx0bmV4dE5vZGUuc2VsZWN0KCk7XHJcblx0XHRcdG5leHROb2RlLnNjcm9sbEludG9WaWV3KCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdHMgdGhlIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIHNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcHJldk5vZGUgPSB0aGlzLmZpbmRVcCggbm9kZSk7XHJcblx0XHRpZiAocHJldk5vZGUpXHJcblx0XHR7XHJcblx0XHRcdHByZXZOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRwcmV2Tm9kZS5zY3JvbGxJbnRvVmlldyggdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIElmIHRoZSBub2RlIGlzIGNvbGxhcHNlZCwgZXhwYW5kcyBpdC4gSWYgdGhlIG5vZGUgaXMgYWxyZWFkeSBleHBhbmRlZCwgc2VsZWN0cyB0aGUgZmlyc3RcclxuXHQvLyBjaGlsZCBub2RlLiBJZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIHNlbGVjdHMgdGhlIG5leHQgbm9kZSBkb3duLlxyXG5cdHByaXZhdGUgZXhwYW5kT3JTZWxlY3REb3duKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9pc0V4cGFuZGVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld05vZGUgPSBub2RlLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdFx0XHRuZXdOb2RlLnNlbGVjdCgpO1xyXG5cdFx0XHRcdG5ld05vZGUuc2Nyb2xsSW50b1ZpZXcoIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bm9kZS5leHBhbmQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3REb3duKCBub2RlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSWYgdGhlIG5vZGUgaXMgZXhwYW5kZWQsIGNvbGxhcHNlcyBpdDsgb3RoZXJ3aXNlLCBzZWxlY3RzIHRoZSBub2RlJ3MgcGFyZW50LlxyXG5cdHByaXZhdGUgY29sbGFwc2VPclNlbGVjdFVwKCBub2RlOiBUcmVlTm9kZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAobm9kZS5tX2lzRXhwYW5kZWQpXHJcblx0XHRcdG5vZGUuY29sbGFwc2UoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZWxlY3RVcCggbm9kZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgZG93biBmcm9tIHRoZSBnaXZlbiBub2RlLlxyXG5cdHByaXZhdGUgZmluZERvd24oIG5vZGU6IFRyZWVOb2RlLCBza2lwRXhwYW5kZWRTdWJOb2RlczogYm9vbGVhbiA9IGZhbHNlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIW5vZGUpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRhaW5lci5ub2Rlc1swXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHNraXBFeHBhbmRlZFN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY29udGFpbmVyID0gbm9kZS5tX3BhcmVudCA/IG5vZGUubV9wYXJlbnQuY29udGFpbmVyIDogdGhpcy5jb250YWluZXI7XHJcblx0XHRcdGlmIChub2RlLmluZGV4IDwgY29udGFpbmVyLm5vZGVzLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0cmV0dXJuIGNvbnRhaW5lci5ub2Rlc1tub2RlLmluZGV4ICsgMV07XHJcblx0XHRcdGVsc2UgaWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZERvd24oIG5vZGUubV9wYXJlbnQsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pc0V4cGFuZGVkICYmIG5vZGUuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdG5vZGUuY29udGFpbmVyLm5vZGVzWzBdLnNlbGVjdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5maW5kRG93biggbm9kZSwgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZpbmRzIG5vZGUgdXAgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cclxuXHRwcml2YXRlIGZpbmRVcCggbm9kZTogVHJlZU5vZGUpOiBUcmVlTm9kZVxyXG5cdHtcclxuXHRcdGlmICghbm9kZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVyLm5vZGVzWzBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobm9kZS5pbmRleCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG5vZGUubV9wYXJlbnQpXHJcblx0XHRcdFx0cmV0dXJuIG5vZGUubV9wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBjb250YWluZXIgPSBub2RlLm1fcGFyZW50ID8gbm9kZS5tX3BhcmVudC5jb250YWluZXIgOiB0aGlzLmNvbnRhaW5lcjtcclxuXHRcdFx0bGV0IHByZXZOb2RlID0gY29udGFpbmVyLm5vZGVzW25vZGUuaW5kZXggLSAxXTtcclxuXHRcdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBwcmV2Tm9kZSk7XHJcblx0XHRcdHJldHVybiBsYXN0RXhwYW5kZWROb2RlID8gbGFzdEV4cGFuZGVkTm9kZSA6IHByZXZOb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGaW5kcyBub2RlIHdoaWNoIGlzIHRoZSBsYXN0IGV4cGFuZGVkIGRlc2NlbmRhbmQgb2YgdGhlIGdpdmVuIG5vZGUuXHJcblx0cHJpdmF0ZSBmaW5kTGFzdEV4cGFuZGVkTm9kZSggY3Vyck5vZGU6IFRyZWVOb2RlKTogVHJlZU5vZGVcclxuXHR7XHJcblx0XHRpZiAoIWN1cnJOb2RlIHx8IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgfHwgIWN1cnJOb2RlLm1faXNFeHBhbmRlZClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGxhc3RDaGlsZCA9IGN1cnJOb2RlLmNvbnRhaW5lci5ub2Rlc1tjdXJyTm9kZS5jb250YWluZXIubm9kZXMubGVuZ3RoLTFdO1xyXG5cdFx0bGV0IGxhc3RFeHBhbmRlZE5vZGUgPSB0aGlzLmZpbmRMYXN0RXhwYW5kZWROb2RlKCBsYXN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGxhc3RFeHBhbmRlZE5vZGUgPyBsYXN0RXhwYW5kZWROb2RlIDogbGFzdENoaWxkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVMb2NhbFN0eWxlcygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NDbGFzc1RyZWUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlVHJlZSA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWVcIiwgXCIudHJlZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3Vyc29yOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIERvZGdlckJsdWVcIixcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxyXG5cdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5jc3NDbGFzc05vZGUgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGVcIik7XHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlXCIsIFwiLnRyZWUtbm9kZSgqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnQgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLW5vZGUtY29udGVudFwiKTtcclxuXHRcdHRoaXMuY3NzUnVsZU5vZGVDb250ZW50ID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnRcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMnB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGVOb2RlQ29udGVudEhvdmVyID0gdGhpcy5jcmVhdGVTdHlsZVJ1bGUoIFwidHJlZS1ub2RlLWNvbnRlbnQ6aG92ZXJcIiwgXCIudHJlZS1ub2RlLWNvbnRlbnQoKik6aG92ZXJcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJsaWdodGN5YW5cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUNvbnRlbnRTZWxlY3RlZCA9IHRoaXMuY3JlYXRlU3R5bGVSdWxlKCBcInRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkXCIsIFwiLnRyZWUtbm9kZS1jb250ZW50LXNlbGVjdGVkKCopXCIsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW5MZWZ0OiBcIjJweFwiLFxyXG5cdFx0XHRcdGJvcmRlcjogXCIxcHggZG90dGVkXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIkRvZGdlckJsdWVcIixcclxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuY3NzQ2xhc3NOb2RlSWNvbiA9IHRoaXMuZGVjb3JhdGVOYW1lKCBcInRyZWUtbm9kZS1pY29uXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlTm9kZUljb24gPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLW5vZGUtaWNvblwiLCBcIi50cmVlLW5vZGUtaWNvbigqKVwiLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiBcIjFlbVwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIxZW1cIixcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmNzc0NsYXNzU3Vibm9kZXMgPSB0aGlzLmRlY29yYXRlTmFtZSggXCJ0cmVlLXN1Ym5vZGVzXCIpO1xyXG5cdFx0dGhpcy5jc3NSdWxlU3ViTm9kZXMgPSB0aGlzLmNyZWF0ZVN0eWxlUnVsZSggXCJ0cmVlLXN1Ym5vZGVzXCIsIFwiLnRyZWUtc3Vibm9kZXMoKilcIixcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IFwiMTZweFwiLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUYWIgaW5kZXggb2YgdGhlIHRyZWUgY29udHJvbC5cclxuXHRwcml2YXRlIG1fdGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIG9mIG5vZGVzLlxyXG5cdHByaXZhdGUgY29udGFpbmVyOiBUcmVlTm9kZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ3VycmVudGx5IHNlbGVjdGVkIG5vZGUgb3IgbnVsbCBpZiBubyBub2RlIGlzIHNlbGVjdGVkLlxyXG5cdHB1YmxpYyBtX3NlbGVjdGVkTm9kZTogVHJlZU5vZGUgPSBudWxsO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgdHJlZS5cclxuXHRwdWJsaWMgZWxtUmVmOiBtaW0uUmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcblx0Ly8gQ1NTIHJ1bGVzIHVzZWQgYnkgdGhlIFRyZWUgYW5kIFRyZWVOb2RlIGNvbnRyb2xzXHJcblx0cHJpdmF0ZSBjc3NSdWxlVHJlZTogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGU6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudDogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cdHByaXZhdGUgY3NzUnVsZU5vZGVDb250ZW50SG92ZXI6IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVOb2RlQ29udGVudFNlbGVjdGVkOiBtaW0uSU1Dc3NTdHlsZVJ1bGU7XHJcblx0cHJpdmF0ZSBjc3NSdWxlTm9kZUljb246IG1pbS5JTUNzc1N0eWxlUnVsZTtcclxuXHRwcml2YXRlIGNzc1J1bGVTdWJOb2RlczogbWltLklNQ3NzU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBDU1MgbG9jYWwgY2xhc3MgbmFtZXNcclxuXHRwdWJsaWMgY3NzQ2xhc3NUcmVlOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVDb250ZW50OiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzTm9kZUNvbnRlbnRTZWxlY3RlZDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjc3NDbGFzc05vZGVJY29uOiBzdHJpbmc7XHJcblx0cHVibGljIGNzc0NsYXNzU3Vibm9kZXM6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlIGludGVyZmFjZSByZXByZXNlbnRzIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZSBleHRlbmRzIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gVGFiIGluZGV4IG9mIHRoZSB0cmVlIGNvbnRyb2wuXHJcblx0dGFiSW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBub2Rlcy5cclxuXHRyZWFkb25seSBub2RlczogSVRyZWVOb2RlW107XHJcblxyXG5cdC8vIGN1cnJlbnRseSBzZWxlY3RlZCBub2RlXHJcblx0cmVhZG9ubHkgc2VsZWN0ZWROb2RlOiBJVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVQYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhIHRyZWUgbm9kZSB0aGF0IGNhbiBiZSBzZXQvY2hhbmdlZFxyXG4vLyBleHRlcm5hbGx5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQYXJhbXNcclxue1xyXG5cdGNvbnRlbnQ6IGFueTtcclxuXHRpY29uPzogVHJlZU5vZGVJY29uUGFyYW1zO1xyXG5cdHRleHRDb2xvcj86IHN0cmluZztcclxuXHRiZ0NvbG9yPzogc3RyaW5nO1xyXG5cdGl0YWxpYz86IGJvb2xlYW47XHJcblx0Ym9sZD86IGJvb2xlYW47XHJcblx0Y3VzdG9tQ2xhc3M/OiBzdHJpbmc7XHJcblx0ZGF0YT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZUljb25QYXJhbXMgaW50ZXJmYWNlIHJlcHJlc2VudHMgcGFyYW1ldGVycyBvZiBhbiBpY29uIG9mIGEgdHJlZSBub2RlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IHR5cGUgVHJlZU5vZGVJY29uUGFyYW1zID0ge2NsYXNzOiBzdHJpbmd9IHwge2ltZzogc3RyaW5nfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElUcmVlTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNpbmdsZSBub2RlIGluIHRoZSB0cmVlIGhpZXJhcmNoeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIGV4dGVuZHMgSVRyZWVOb2RlUGFyYW1zLCBJVHJlZU5vZGVDb250YWluZXJcclxue1xyXG5cdC8vIFRyZWUgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3MuXHJcblx0cmVhZG9ubHkgdHJlZTogSVRyZWU7XHJcblxyXG5cdC8vIFBhcmVudCB0cmVlIG5vZGUgb3IgbnVsbCBmb3IgdG9wLWxldmVsIChyb290KSBub2Rlcy5cclxuXHRyZWFkb25seSBwYXJlbnQ6IElUcmVlTm9kZTtcclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRyZWFkb25seSBsZXZlbDogbnVtYmVyO1xyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBzdWItbm9kZXMuXHJcblx0cmVhZG9ubHkgc3ViTm9kZXM6IElUcmVlTm9kZVtdO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBleHBhbmRlZC5cclxuXHRyZWFkb25seSBpc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBFeHBhbmRzIHRoZSBub2RlIHNvIHRoYXQgaXRzIHN1Yi1ub2RlcyBiZWNvbWUgdmlzaWJsZS5cclxuXHRleHBhbmQoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgdGhlIG5vZGUgaGlkaW5nIGl0cyBzdWItbm9kZXMuXHJcblx0Y29sbGFwc2UoKTogdm9pZDtcclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRzZWxlY3QoKTogdm9pZDtcclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHVuc2VsZWN0KCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJVHJlZU5vZGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHRyZWUgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZUNvbnRhaW5lclxyXG57XHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0YWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlO1xyXG5cclxuXHQvLyBSZW1vdmVzIGV4aXN0aW5nIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBub2RlcyBsaXN0LlxyXG5cdHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBub2Rlcy5cclxuXHRyZW1vdmVBbGxOb2RlcygpOiB2b2lkO1xyXG5cclxuXHQvLyBFeHBhbmRzIGFsbCBub2Rlcy5cclxuXHRleHBhbmRBbGwoKTogdm9pZDtcclxuXHJcblx0Ly8gQ29sYXBzZXMgYWxsIG5vZGVzLlxyXG5cdGNvbGxhcHNlQWxsKCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi9UcmVlXCI7XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgdHJlZSBjb250cm9sIGluc3RhbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmVlKCk6IElUcmVlXHJcbntcclxuXHRyZXR1cm4gbmV3IFRyZWUoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCI7XHJcbmltcG9ydCB7SVRyZWUsIElUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXMsIFRyZWVOb2RlSWNvblBhcmFtc30gZnJvbSBcIi4vVHJlZUFwaVwiO1xyXG5pbXBvcnQge1RyZWVOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi9UcmVlTm9kZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1RyZWV9IGZyb20gXCIuL1RyZWVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIG5vZGUgd2l0aGluIGEgdHJlZSBjb250cm9sLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgbWltLkNvbXBvbmVudCBpbXBsZW1lbnRzIElUcmVlTm9kZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHBhcmVudDogVHJlZU5vZGUsIGxldmVsOiBudW1iZXIsIHRyZWU6IFRyZWUgPSBudWxsKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5tX3BhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMubV90cmVlID0gcGFyZW50ICE9PSBudWxsID8gcGFyZW50Lm1fdHJlZSA6IHRyZWU7XHJcblx0XHR0aGlzLm1fbGV2ZWwgPSBsZXZlbDtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbmV3IFRyZWVOb2RlQ29udGFpbmVyKCB0aGlzLm5vZGVGYWN0b3J5KTtcclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb250ZW50RWxtUmVmID0gbmV3IG1pbS5SZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiB0aGF0IGNyZWF0ZXMgaW5zdGFuY2VzIG9mIHN1Yi1ub2RlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeSA9ICgpOiBUcmVlTm9kZSA9PlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVHJlZU5vZGUoIHRoaXMsIHRoaXMubV9sZXZlbCArIDEpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIHRvIHdoaWNoIHRoaXMgbm9kZSBiZWxvbmdzLlxyXG5cdHB1YmxpYyBnZXQgdHJlZSgpOiBJVHJlZSB7IHJldHVybiB0aGlzLm1fdHJlZTsgfVxyXG5cclxuXHQvLyBQYXJlbnQgdHJlZSBub2RlIG9yIG51bGwgZm9yIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIGdldCBwYXJlbnQoKTogSVRyZWVOb2RlIHsgcmV0dXJuIHRoaXMubV9wYXJlbnQ7IH1cclxuXHJcblx0Ly8gMC1iYXNlZCBsZXZlbCBvZiB0aGUgbm9kZSBpbiB0aGUgYW5jZXN0cmFsIGhpZXJhcmNoeS5cclxuXHRwdWJsaWMgZ2V0IGxldmVsKCk6IG51bWJlciB7IHJldHVybiB0aGlzLm1fbGV2ZWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyAwLWJhc2VkIGluZGV4IG9mIHRoZSBub2RlIGluIHRoZSBsaXN0IG9mIGl0cyBwYXJlbnQncyBzdWItbm9kZXMuXHJcblx0cHVibGljIGdldCBpbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5tX2luZGV4OyB9XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZXggb2YgdGhlIG5vZGUgaW4gdGhlIGxpc3Qgb2YgaXRzIHBhcmVudCdzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc2V0IGluZGV4KCB2YWw6IG51bWJlcikgeyB0aGlzLm1faW5kZXggPSB2YWw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlIHBhcmFtZXRlcnMuXHJcblx0cHVibGljIGdldCBjb250ZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY29udGVudDsgfVxyXG5cdHB1YmxpYyBzZXQgY29udGVudCggdmFsOiBzdHJpbmcpIHsgdGhpcy5tX2NvbnRlbnQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGljb24oKTogVHJlZU5vZGVJY29uUGFyYW1zIHsgcmV0dXJuIHRoaXMubV9pY29uOyB9XHJcblx0cHVibGljIHNldCBpY29uKCB2YWw6IFRyZWVOb2RlSWNvblBhcmFtcykgeyB0aGlzLm1faWNvbiA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGV4dENvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fdGV4dENvbG9yOyB9XHJcblx0cHVibGljIHNldCB0ZXh0Q29sb3IoIHZhbDogc3RyaW5nKSB7IHRoaXMubV90ZXh0Q29sb3IgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJnQ29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV9iZ0NvbG9yOyB9XHJcblx0cHVibGljIHNldCBiZ0NvbG9yKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fYmdDb2xvciA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRhbGljKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5tX2l0YWxpYzsgfVxyXG5cdHB1YmxpYyBzZXQgaXRhbGljKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2l0YWxpYyA9IHZhbDsgdGhpcy51cGRhdGVNZSgpOyB9XHJcblxyXG5cdHB1YmxpYyBnZXQgYm9sZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9ib2xkOyB9XHJcblx0cHVibGljIHNldCBib2xkKCB2YWw6IGJvb2xlYW4pIHsgdGhpcy5tX2JvbGQgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1fY3VzdG9tQ2xhc3M7IH1cclxuXHRwdWJsaWMgc2V0IGN1c3RvbUNsYXNzKCB2YWw6IHN0cmluZykgeyB0aGlzLm1fY3VzdG9tQ2xhc3MgPSB2YWw7IHRoaXMudXBkYXRlTWUoKTsgfVxyXG5cclxuXHRwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHsgcmV0dXJuIHRoaXMubV9kYXRhOyB9XHJcblx0cHVibGljIHNldCBkYXRhKCB2YWw6IGFueSkgeyB0aGlzLm1fZGF0YSA9IHZhbDsgfVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBub2RlIGlzIGV4cGFuZGVkLlxyXG5cdHB1YmxpYyBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubV9pc0V4cGFuZGVkOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyB0aGUgbm9kZSBzbyB0aGF0IGl0cyBzdWItbm9kZXMgYmVjb21lIHZpc2libGUuXHJcblx0cHVibGljIGV4cGFuZCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy51cGRhdGVNZSgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIHRoZSBub2RlIGhpZGluZyBpdHMgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb2xsYXBzZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5tX2lzRXhwYW5kZWQgIT09IGZhbHNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm1faXNFeHBhbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0cyB0aGUgbm9kZS5cclxuXHRwdWJsaWMgc2VsZWN0KCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5tX2lzU2VsZWN0ZWQgIT09IHRydWUpXHJcblx0XHR7XHJcblx0XHRcdC8vIHVuc2VsZWN0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbm9kZSAoaWYgYW55KVxyXG5cdFx0XHRpZiAodGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgIT0gbnVsbClcclxuXHRcdFx0XHR0aGlzLm1fdHJlZS5tX3NlbGVjdGVkTm9kZS51bnNlbGVjdCgpO1xyXG5cclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVW5zZWxlY3RzIHRoZSBub2RlLlxyXG5cdHB1YmxpYyB1bnNlbGVjdCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubV9pc1NlbGVjdGVkICE9PSBmYWxzZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5tX3RyZWUubV9zZWxlY3RlZE5vZGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLm1faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpc3Qgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBnZXQgc3ViTm9kZXMoKTogSVRyZWVOb2RlW10geyByZXR1cm4gdGhpcy5jb250YWluZXIubm9kZXM7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IG5vZGUuIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgYmV0d2VlbiB6ZXJvIGFuZCB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsXHJcblx0Ly8gdGhlIG5ldyBub2RlIGlzIGluc2VydGVkIGF0IHRoaXMgaW5kZXguIElmIHRoZSBpbmRleCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIGxlc3MgdGhhblxyXG5cdC8vIHplcm8gb3IgZ3JlYXRlciB0aGVuIHRoZSBjdXJyZW50IG51bWJlciBvZiBub2RlcywgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuXHRwdWJsaWMgYWRkTm9kZSggcGFyYW1zOiBJVHJlZU5vZGVQYXJhbXMsIGluZGV4PzogbnVtYmVyKTogSVRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IHN1Yk5vZGU6IFRyZWVOb2RlID0gdGhpcy5jb250YWluZXIuYWRkTm9kZSggcGFyYW1zLCBpbmRleCk7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIG9ubHkgaWYgdGhpcyB3YXMgdGhlIGZpcnN0IHN1Yi1ub2RlXHJcblx0XHRpZiAodGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblxyXG5cdFx0cmV0dXJuIHN1Yk5vZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgZXhpc3Rpbmcgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIG5vZGVzIGxpc3QuXHJcblx0cHVibGljIHJlbW92ZU5vZGUoIGluZGV4OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZExlbmd0aCA9IHRoaXMuY29udGFpbmVyLm5vZGVzLmxlbmd0aDtcclxuXHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZU5vZGUoIGluZGV4KTtcclxuXHJcblx0XHQvLyB1cGRhdGUgb25seSBpZiB0aGlzIHdhcyB0aGUgbGFzdCBzdWItbm9kZVxyXG5cdFx0aWYgKG9sZExlbmd0aCA9PT0gMSAmJiB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgb2xkTGVuZ3RoID0gdGhpcy5jb250YWluZXIubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKG9sZExlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUFsbE5vZGVzKCk7XHJcblx0XHRcdHRoaXMubV9pc0V4cGFuZGVkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5leHBhbmQoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmV4cGFuZEFsbCgpO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29sbGFwc2UoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyLmNvbGxhcHNlQWxsKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgdGhlIG5vZGUgaXMgbm90IHdpdGhpbiB0aGUgdmlld3BvcnQgYW5kIHNjcm9sbHMgaXQgaW50byB2aWV3IGFsaW5naW5nIGl0XHJcblx0Ly8gd2l0aCB0aGUgdXBwZXIgb3IgbG93ZXIgZWRnZSBvZiB0aGUgdHJlZSBjb250YWluZXIuXHJcblx0cHVibGljIHNjcm9sbEludG9WaWV3KCBhbGlnblVwOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5tX3RyZWUuZWxtUmVmLnIgfHwgIXRoaXMuY29udGVudEVsbVJlZi5yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZ2V0IHRyZWUgYW5kIG5vZGUgYm91bmRpbmcgcmVjdFxyXG5cdFx0bGV0IHJjVHJlZTogQ2xpZW50UmVjdCA9IHRoaXMubV90cmVlLmVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHJjTm9kZTogQ2xpZW50UmVjdCA9IHRoaXMuY29udGVudEVsbVJlZi5yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJjTm9kZS5ib3R0b20gPD0gcmNUcmVlLmJvdHRvbSAmJiByY05vZGUudG9wID49IHJjVHJlZS50b3ApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNvbnRlbnRFbG1SZWYuci5zY3JvbGxJbnRvVmlldyggYWxpZ25VcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDxtaW0uRnJhZ21lbnQ+XHJcblx0XHRcdHt0aGlzLnJlbmRlck5vZGUoKX1cclxuXHRcdFx0e3RoaXMucmVuZGVyU3ViTm9kZXMoKX1cclxuXHRcdDwvbWltLkZyYWdtZW50PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlck5vZGUoKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IGV4cGFuZGVyQ2xhc3NOYW1lOiBzdHJpbmcgPSB0aGlzLmNvbnRhaW5lci5ub2Rlcy5sZW5ndGggPT09IDAgPyBcIlwiIDogdGhpcy5tX2lzRXhwYW5kZWQgPyBcImZhLWNhcmV0LWRvd25cIiA6IFwiZmEtY2FyZXQtcmlnaHRcIjtcclxuXHJcblx0XHRsZXQgaWNvbkNvbnRlbnQ6IGFueTtcclxuXHRcdGlmICh0aGlzLm1faWNvbilcclxuXHRcdHtcclxuXHRcdFx0aWYgKFwiY2xhc3NcIiBpbiB0aGlzLm1faWNvbilcclxuXHRcdFx0XHRpY29uQ29udGVudCA9IDxzcGFuIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29uICsgXCIgXCIgKyB0aGlzLm1faWNvbi5jbGFzc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHRcdGVsc2UgaWYgKFwiaW1nXCIgaW4gdGhpcy5tX2ljb24pXHJcblx0XHRcdFx0aWNvbkNvbnRlbnQgPSA8aW1nIGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVJY29ufSBzcmM9e3RoaXMubV9pY29uLmltZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30gLz47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvbnRlbnRDbGFzczogc3RyaW5nID0gdGhpcy5tX2lzU2VsZWN0ZWQgPyB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50U2VsZWN0ZWQgOiB0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGVDb250ZW50O1xyXG5cdFx0aWYgKHRoaXMubV9jdXN0b21DbGFzcylcclxuXHRcdFx0Y29udGVudENsYXNzICs9IFwiIFwiICsgdGhpcy5tX2N1c3RvbUNsYXNzO1xyXG5cclxuXHRcdGxldCBjb250ZW50U3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblx0XHRpZiAodGhpcy5tX3RleHRDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmNvbG9yID0gdGhpcy5tX3RleHRDb2xvcjtcclxuXHRcdGlmICh0aGlzLm1fYmdDb2xvcilcclxuXHRcdFx0Y29udGVudFN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMubV9iZ0NvbG9yO1xyXG5cdFx0aWYgKHRoaXMubV9pdGFsaWMpXHJcblx0XHRcdGNvbnRlbnRTdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cdFx0aWYgKHRoaXMubV9ib2xkKVxyXG5cdFx0XHRjb250ZW50U3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG5cclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzPXt0aGlzLm1fdHJlZS5jc3NDbGFzc05vZGV9PlxyXG5cdFx0XHQ8aSBjbGFzcz17XCJmYSBmYS1mdyBcIiArIGV4cGFuZGVyQ2xhc3NOYW1lfSBjbGljaz17dGhpcy5vbkV4cGFuZGVyQ2xpY2tlZH0gLz5cclxuXHRcdFx0e2ljb25Db250ZW50fVxyXG5cdFx0XHQ8c3BhbiByZWY9e3RoaXMuY29udGVudEVsbVJlZn0gZHJhZ1NvdXJjZSBjbGFzcz17Y29udGVudENsYXNzfSBzdHlsZT17Y29udGVudFN0eWxlfVxyXG5cdFx0XHRcdFx0Y2xpY2s9e3RoaXMub25DbGlja30gZGJsY2xpY2s9e3RoaXMub25EYmxDbGlja30+e3RoaXMubV9jb250ZW50fTwvc3Bhbj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlclN1Yk5vZGVzKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3M9e3RoaXMubV90cmVlLmNzc0NsYXNzU3Vibm9kZXN9IHN0eWxlPXt7ZGlzcGxheTp0aGlzLm1faXNFeHBhbmRlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblx0XHRcdHt0aGlzLmNvbnRhaW5lcn1cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnNlbGVjdCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIGljb24gb3IgbmFtZS5cclxuXHRwcml2YXRlIG9uRGJsQ2xpY2sgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMubV9pc0V4cGFuZGVkID8gdGhpcy5jb2xsYXBzZSgpIDogdGhpcy5leHBhbmQoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2FsbGVkIHdoZW4gdGhlIHVzZXJjbGlja3Mgb24gdGhlIGV4cGFuZGVyIGljb25cclxuXHRwcml2YXRlIG9uRXhwYW5kZXJDbGlja2VkID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5tX2lzRXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlKCkgOiB0aGlzLmV4cGFuZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUcmVlIGNvbnRyb2wgdG8gd2hpY2ggdGhpcyBub2RlIGJlbG9uZ3NcclxuXHRwdWJsaWMgbV90cmVlOiBUcmVlO1xyXG5cclxuXHQvLyBQYXJlbnQgbm9kZVxyXG5cdHB1YmxpYyBtX3BhcmVudDogVHJlZU5vZGU7XHJcblxyXG5cdC8vIDAtYmFzZWQgaW5kZW50YXRpb24gbGV2ZWwgb2YgdGhlIGJsb2NrXHJcblx0cHVibGljIG1fbGV2ZWw6IG51bWJlcjtcclxuXHJcblx0Ly8gMC1iYXNlZCBpbmRlbnRhdGlvbiBsZXZlbCBvZiB0aGUgYmxvY2tcclxuXHRwdWJsaWMgbV9pbmRleDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgb2Ygc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IFRyZWVOb2RlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgZXhwYW5kZWQgKHRoYXQgaXMgc3ViLW5vZGVzIGFyZSB2aXNpYmxlKS5cclxuXHRwdWJsaWMgbV9pc0V4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbm9kZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcblx0cHVibGljIG1faXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG5vZGUncyBjb250ZW50LlxyXG5cdHB1YmxpYyBjb250ZW50RWxtUmVmOiBtaW0uUmVmPEhUTUxTcGFuRWxlbWVudD47XHJcblxyXG5cdC8vIE5vZGUgcGFyYW1ldGVyc1xyXG5cdHByaXZhdGUgbV9jb250ZW50OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2ljb246IFRyZWVOb2RlSWNvblBhcmFtcztcclxuXHRwcml2YXRlIG1fdGV4dENvbG9yOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBtX2JnQ29sb3I6IHN0cmluZztcclxuXHRwcml2YXRlIG1faXRhbGljOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9ib2xkOiBib29sZWFuO1xyXG5cdHByaXZhdGUgbV9jdXN0b21DbGFzczogc3RyaW5nO1xyXG5cdHByaXZhdGUgbV9kYXRhOiBhbnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiO1xyXG5pbXBvcnQge0lUcmVlTm9kZSwgSVRyZWVOb2RlQ29udGFpbmVyLCBJVHJlZU5vZGVQYXJhbXN9IGZyb20gXCIuL1RyZWVBcGlcIjtcclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4vVHJlZU5vZGVcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBUcmVlTm9kZUNvbnRhaW5lciBjbGFzcyByZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0cmVlIG5vZGVzIHRoYXQgYXJlIGRpc3BsYXllZCBhbmRcclxuLy8gaGlkZGVuIHRvZ2V0aGVyLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29udGFpbmVyIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoIG5vZGVGYWN0b3J5OiAoKSA9PiBUcmVlTm9kZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubm9kZXMgPSBbXTtcclxuXHRcdHRoaXMubm9kZUZhY3RvcnkgPSBub2RlRmFjdG9yeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIG5ldyBub2RlLiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIGJldHdlZW4gemVybyBhbmQgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIG5vZGVzLFxyXG5cdC8vIHRoZSBuZXcgbm9kZSBpcyBpbnNlcnRlZCBhdCB0aGlzIGluZGV4LiBJZiB0aGUgaW5kZXggcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBsZXNzIHRoYW5cclxuXHQvLyB6ZXJvIG9yIGdyZWF0ZXIgdGhlbiB0aGUgY3VycmVudCBudW1iZXIgb2Ygbm9kZXMsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcblx0cHVibGljIGFkZE5vZGUoIHBhcmFtczogSVRyZWVOb2RlUGFyYW1zLCBpbmRleD86IG51bWJlcik6IFRyZWVOb2RlXHJcblx0e1xyXG5cdFx0bGV0IGN1cnJMZW5ndGggPSB0aGlzLm5vZGVzLmxlbmd0aDtcclxuXHRcdGxldCBub2RlOiBUcmVlTm9kZSA9IHRoaXMubm9kZUZhY3RvcnkoKTtcclxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSBudWxsIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBjdXJyTGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmluZGV4ID0gY3Vyckxlbmd0aDtcclxuXHRcdFx0dGhpcy5ub2Rlcy5wdXNoKCBub2RlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDAsIG5vZGUpO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGluZGV4ZXMgb2YgdGhlIG5vZGVzIGFmdGVyIHRoZSBpbnNlcnRlZCBvbmVcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0XHR0aGlzW2ldLmluZGV4ID0gaTtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlLmNvbnRlbnQgPSBwYXJhbXMuY29udGVudDtcclxuXHRcdG5vZGUuaWNvbiA9IHBhcmFtcy5pY29uO1xyXG5cdFx0bm9kZS50ZXh0Q29sb3IgPSBwYXJhbXMudGV4dENvbG9yO1xyXG5cdFx0bm9kZS5iZ0NvbG9yID0gcGFyYW1zLmJnQ29sb3I7XHJcblx0XHRub2RlLml0YWxpYyA9IHBhcmFtcy5pdGFsaWM7XHJcblx0XHRub2RlLmJvbGQgPSBwYXJhbXMuYm9sZDtcclxuXHRcdG5vZGUuY3VzdG9tQ2xhc3MgPSBwYXJhbXMuY3VzdG9tQ2xhc3M7XHJcblx0XHRub2RlLmRhdGEgPSBwYXJhbXMuZGF0YTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyBleGlzdGluZyBzdWItbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1Yi1ub2RlcyBsaXN0LlxyXG5cdHB1YmxpYyByZW1vdmVOb2RlKCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjdXJyTGVuZ3RoID0gdGhpcy5ub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGN1cnJMZW5ndGgpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJyZXBsYWNlTm9kZTogaW52YWxpZCBpbmRleCBcIiArIGluZGV4KTtcclxuXHJcblx0XHR0aGlzLm5vZGVzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSBpbmRleGVzIG9mIHRoZSBub2RlcyBhZnRlciB0aGUgcmVtb3ZlZCBvbmVcclxuXHRcdGZvciggbGV0IGkgPSBpbmRleDsgaSA8IGN1cnJMZW5ndGg7IGkrKylcclxuXHRcdFx0dGhpc1tpXS5pbmRleCA9IGk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBzdWItbm9kZXMuXHJcblx0cHVibGljIHJlbW92ZUFsbE5vZGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgY3Vyckxlbmd0aCA9IHRoaXMubm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGN1cnJMZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLm5vZGVzLnNwbGljZSggMCwgY3Vyckxlbmd0aCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRXhwYW5kcyBhbGwgbm9kZXMuXHJcblx0cHVibGljIGV4cGFuZEFsbCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRub2RlLmV4cGFuZEFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbGFwc2VzIGFsbCBub2Rlcy5cclxuXHRwdWJsaWMgY29sbGFwc2VBbGwoKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IG5vZGUgb2YgdGhpcy5ub2RlcylcclxuXHRcdHtcclxuXHRcdFx0bm9kZS5jb2xsYXBzZUFsbCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubm9kZXM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFycmF5IG9mIFRyZWVOb2RlIG9iamVjdHNcclxuXHRwdWJsaWMgbm9kZXM6IFRyZWVOb2RlW107XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBpbnN0YW5jZSBvZiBUcmVlTm9kZSBvYmplY3RzXHJcblx0cHJpdmF0ZSBub2RlRmFjdG9yeTogKCkgPT4gVHJlZU5vZGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUgYXhpcyBvZiBkYXRhLCB3aGljaCBjb25zaXN0cyBvZiBpdGVtcywgYW5kIHBlcmZvcm1zXHJcbiAqIGNhbGN1bGF0aW9ucyBkdXJpbmcgc2Nyb2xsaW5nIGJhY2sgYW5kIGZvcnRoIGFsb25nIHRoZSBheGlzLiBUaGUgU2Nyb2xsQXhpcyBjbGFzcyBpdHNlbGYgZG9lc24ndFxyXG4gKiBoYXZlIGFueSB2aXN1YWwgcmVwcmVzZW50YXRpb24gYW5kIG9ubHkgc2VydmVzIGFzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBhbGdvcml0aG0gdGhhdFxyXG4gKiBoZWxwcyB2aXJ0dWFsaXplIHNjcm9sbGluZyAtIHRoYXQgaXMgZGlzcGxheSBvbmx5IHNtYWxsIHN1YnNldCBvZiBkYXRhIGl0ZW1zIGFuZCBhZGQvcmVtb3ZlXHJcbiAqIGl0ZW1zIGFzIHNjcm9sbGluZyBoYXBwZW5zLlxyXG4gKiBcclxuICogVkF4aXMgYXNzdW1lcyB0aGUgdXNlIG9mIDMgRE9NIGVsZW1lbnRzOlxyXG4gKlx0LSBmcmFtZSAtIHRoZSBcIm91dGVyXCIgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFyIHdoZW4gbmVjZXNzYXJ5XHJcbiAqXHQtIHdhbGwgLSB0aGUgXCJpbm5lclwiIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgc2V0IG9mIGl0ZW1zLiBJdCBpc1xyXG4gKlx0XHRuZWVkZWQgdG8gbWFrZSBzY3JvbGxpbmcgbW9yZS1vci1sZXNzIGFjY3VyYXRlLlxyXG4gKlx0LSBzdWJzZXQgLSB0aGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIG9ubHkgaXRlbXMgdGhhdCBmaXQgdGhlIGZyYW1lIHBsdXMgYSBjZXJ0YWluIG51bWJlciBvZlxyXG4gKlx0XHRhZGRpdGlvbmFsIGl0ZW1zIGZvciBcIm92ZXJzY2FuXCIuXHJcbiAqIFxyXG4gKiBWQXhpcyBjYWxjdWxhdGVzIGF2ZXJhZ2UgaXRlbSBzaXplIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSBkYXRhIGJ5IHRoZSBudW1iZXIgb2YgaXRlbXMuXHJcbiAqIFRoZSBhdmVyYWdlIHZhbHVlIGlzIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIGl0ZW1zIGFyZSBhZGRlZCB0byBvciBkZWxldGVkIGZyb20gdGhlIHN1YnNldCB0aHVzXHJcbiAqIGFjY29tb2RhdGluZyBpdGVtcyB3aXRoIGRpZmZlcmVuIHNpemVzLiBCYXNlZCBvbiB0aGUgYXZlcmFnZSB2YWx1ZSB0aGUgd2FsbCBlbGVtZW50IGlzIHNpemVkXHJcbiAqIHRvIGluY2x1ZGUgdGhlIGVudGlyZSBkYXRhIHNldCwgd2hpY2ggaGVscHMgdG8gYWNoaWV2ZSBtb3JlLW9yLWxlc3MgYWNjdXJhdGUgc2Nyb2xsXHJcbiAqIHBvc2l0aW9uaW5nLlxyXG4gKlxyXG4gKiBWQXhpcyB1c2VzIG1pbmltdW0sIG9wdGltYWwgYW5kIG1heGltdW0gb3ZlcnNjYW4gbnVtYmVyIG9mIGl0ZW1zIG9uIGJvdGggc2lkZXMgb2YgdGhlIGZyYW1lIGFuZFxyXG4gKiBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2YgaXRlbXMgaXMgd2l0aGluIHRoZXNlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLiBEdXJpbmdcclxuICogc2Nyb2xsaW5nLCBpZiB0aGUgYWN0dWFsIG92ZXJzY2FuIG51bWJlciBiZWNvbWVzIGxlc3MgdGhhbiB0aGUgbWluaW11bSwgbmV3IGl0ZW1zIGFyZSBhZGRlZDsgaWZcclxuICogaXQgYmVjb21lcyBtb3JlIHRoZW4gdGhlIG1heGltdW0sIGl0ZW1zIGFyZSBkZWxldGVkLiBXaGVuIGl0ZW1zIGFyZSBhZGRlZCB0aGV5IGFyZSBhZGRlZCB1cCB0b1xyXG4gKiB0aGUgb3B0aW1hbCBvdmVyc2NhbiBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXhpc1xyXG57XHJcblx0Ly8gTWluaW1hbCBudW1iZXIgb2YgYWRkaXRpb25hbCBpdGVtcyBvbiBlYWNoIHNpZGUgb2YgdGhlIHBvcnQgdGhhdCBzaG91bGQgYmUgbWFpbnRhaW5lZC4gV2hlblxyXG5cdC8vIGR1cmluZyBzY3JvbGxpbmcgdGhlIG51bWJlciBvZiBvdmVyc2NhbiBpdGVtcyBmYWxscyB1bmRlciB0aGlzIG51bWJlciwgbmV3IGl0ZW1zIGFyZSBhZGRlZC5cclxuXHRwcml2YXRlIG1pbk92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE9wdGltYWwgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydC4gV2hlbiBhZGRpbmcgbmV3IGl0ZW1zIG9yIHJlbW92aW5nXHJcblx0Ly8gZXhpc3RpbmcgaXRlbXMgd2Ugd2FudCB0byByaWNoIHRoaXMgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBvdmVyc2Nhbi5cclxuXHRwcml2YXRlIG9wdE92ZXJzY2FuOiBudW1iZXI7XHJcblxyXG5cdC8vIE1heGltdW0gbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIG9uIGVhY2ggc2lkZSBvZiB0aGUgcG9ydCB0aGF0IHNob3VsZCBiZSBtYWludGFpbmVkLiBXaGVuXHJcblx0Ly8gZHVyaW5nIHNjcm9sbGluZyB0aGUgbnVtYmVyIG9mIG92ZXJzY2FuIGl0ZW1zIGV4Y2VlZHMgdGhpcyBudW1iZXIsIGl0ZW1zIGFyZSByZW1vdmVkLlxyXG5cdHByaXZhdGUgbWF4T3ZlcnNjYW46IG51bWJlcjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggbWluT3ZlcnNjYW46IG51bWJlciwgb3B0T3ZlcnNjYW46IG51bWJlciwgbWF4T3ZlcnNjYW46IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLm1pbk92ZXJzY2FuID0gbWluT3ZlcnNjYW47XHJcblx0XHR0aGlzLm9wdE92ZXJzY2FuID0gb3B0T3ZlcnNjYW47XHJcblx0XHR0aGlzLm1heE92ZXJzY2FuID0gbWF4T3ZlcnNjYW47XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWVhc3VyZXMgdGhlIHNpemUgb2NjdXBpZWQgYnkgdGhlIGN1cnJlbnQgZGF0YSBzZXQgcmVsYXRpdmUgdG8gdGhlIHNpemUgb2YgdGhlIGZyYW1lXHJcblx0ICogYW5kIGRldGVybWluZXMgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW12b3ZlIGl0ZW1zLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIHdoZW46XHJcblx0ICpcdC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgZGF0YSBzZXQgY2hhbmdlcy5cclxuXHQgKlx0LSBUaGUgc2l6ZSBvZiB0aGUgZnJhbWUgZWxlbWVudCBjaGFuZ2VzLlxyXG5cdCAqXHQtIFRoZSBmcmFtZSBlbGVtZW50IGlzIHNjcm9sbGVkLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0b3RhbENvdW50IE51bWJlciBvZiBpdGVtcyBpbiB0aGUgZW50aXJlIGRhdGEgc2V0XHJcblx0ICogQHBhcmFtIGZpcnN0SXRlbSBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBjdXJyZW50bHkgaW4gdGhlIHN1YnNldFxyXG5cdCAqIEBwYXJhbSBpdGVtQ291bnQgTnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgc3Vic2V0XHJcblx0ICogQHBhcmFtIGZyYW1lU2l6ZSBDdXJyZW50IHNpemUgaW4gcGl6ZWxzIG9mIHRoZSBmcmFtZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIHdhbGxTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHdhbGwgZWxlbWVudFxyXG5cdCAqIEBwYXJhbSBzdWJzZXRTaXplIEN1cnJlbnQgc2l6ZSBpbiBwaXhlbHMgb2YgdGhlIHN1YnNldCBlbGVtZW50XHJcblx0ICogQHBhcmFtIHNjcm9sbFBvcyBDdXJyZW50IG9yIG5ldyBzY3JvbGwgcG9zaXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIG1lYXN1cmUoIHRvdGFsQ291bnQ6IG51bWJlciwgb2xkRmlyc3Q6IG51bWJlciwgb2xkQ291bnQ6IG51bWJlciwgb2xkQXZnSXRlbVNpemU6IG51bWJlcixcclxuXHRcdGZyYW1lU2l6ZTogbnVtYmVyLCB3YWxsU2l6ZTogbnVtYmVyLCBzdWJzZXRTaXplOiBudW1iZXIsIHNjcm9sbFBvczogbnVtYmVyKTogU2Nyb2xsQXhpc0FjdGlvblxyXG5cdHtcclxuXHRcdC8vIHByZXBhcmUgdGhlIG9iamVjdCB0byBiZSByZXR1cm5lZFxyXG5cdFx0bGV0IHJldEFjdGlvbiA9IG5ldyBTY3JvbGxBeGlzQWN0aW9uKCk7XHJcblx0XHRpZiAodG90YWxDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHRcdGVsc2UgaWYgKG9sZENvdW50ID09PSAwKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaXRlbUNvdW50IGNhbm5vdCBiZSB6ZXJvXCIpO1xyXG5cclxuXHRcdGxldCBvbGRMYXN0ID0gb2xkRmlyc3QgKyBvbGRDb3VudCAtIDE7XHJcblx0XHRsZXQgdG90YWxMYXN0ID0gdG90YWxDb3VudCAtIDE7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBhdmVyYWdlIGl0ZW0gc2l6ZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBjdXJyZW50IHN1YnNldFxyXG5cdFx0Ly8gYW5kIHRoZSBjdXJyZW50IHNpemUgb2YgdGhlIGRhdGEgZWxlbWVudC5cclxuXHRcdGxldCBuZXdBdmdJdGVtU2l6ZSA9IHN1YnNldFNpemUgLyBvbGRDb3VudDtcclxuXHRcdGlmIChvbGRBdmdJdGVtU2l6ZSlcclxuXHRcdFx0bmV3QXZnSXRlbVNpemUgPSAobmV3QXZnSXRlbVNpemUgKyBvbGRBdmdJdGVtU2l6ZSkgLyAyO1xyXG5cclxuXHRcdC8vIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gYW5kIHRoZSBhdmVyYWdlIHNpemUgZXN0aW1hdGUgd2hhdCBpdGVtcyB3b3VsZCBmaXQgaW5zaWRlXHJcblx0XHQvLyB0aGUgZnJhbWUgZWxlbWVudC5cclxuXHRcdGxldCBmaXRGaXJzdCA9IE1hdGgubWluKCBNYXRoLmZsb29yKCBzY3JvbGxQb3MgLyBuZXdBdmdJdGVtU2l6ZSksIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgZml0TGFzdCA9IE1hdGgubWluKCBNYXRoLmNlaWwoIChzY3JvbGxQb3MgKyBmcmFtZVNpemUpIC8gbmV3QXZnSXRlbVNpemUpLCB0b3RhbExhc3QpO1xyXG5cclxuXHRcdC8vIGdldCBuZXcgZmlyc3QgYW5kIGxhc3QgIGluZGljZXMgd2l0aCBtaW5pbWFsLCBvcHRpbWFsIGFuZCBtYXhpbXVtIG92ZXJzY2FuXHJcblx0XHRsZXQgbWluT3ZlcnNjYW5GaXJzdCA9IE1hdGgubWF4KCBmaXRGaXJzdCAtIHRoaXMubWluT3ZlcnNjYW4sIDApO1xyXG5cdFx0bGV0IG9wdE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm9wdE92ZXJzY2FuLCAwKVxyXG5cdFx0bGV0IG1heE92ZXJzY2FuRmlyc3QgPSBNYXRoLm1heCggZml0Rmlyc3QgLSB0aGlzLm1heE92ZXJzY2FuLCAwKTtcclxuXHRcdGxldCBtaW5PdmVyc2Nhbkxhc3QgPSBNYXRoLm1pbiggZml0TGFzdCArIHRoaXMubWluT3ZlcnNjYW4sIHRvdGFsTGFzdCk7XHJcblx0XHRsZXQgb3B0T3ZlcnNjYW5MYXN0ID0gTWF0aC5taW4oIGZpdExhc3QgKyB0aGlzLm9wdE92ZXJzY2FuLCB0b3RhbExhc3QpO1xyXG5cdFx0bGV0IG1heE92ZXJzY2FuTGFzdCA9IE1hdGgubWluKCBmaXRMYXN0ICsgdGhpcy5tYXhPdmVyc2NhbiwgdG90YWxMYXN0KTtcclxuXHJcblx0XHQvLyB0aGVzZSB3aWxsIGJlIGluZGljZXMgdGhhdCB3ZSB3aWxsIGFjdHVhbGx5IG5lZWQgYWZ0ZXIgY29tcGFyaW5nIHRoZSBuZXcgcmFuZ2VcclxuXHRcdC8vIHdpdGggdGhlIG9sZCBvbmVcclxuXHRcdGxldCBuZXdGaXJzdDogbnVtYmVyO1xyXG5cdFx0bGV0IG5ld0xhc3Q6IG51bWJlcjtcclxuXHJcblx0XHRpZiAobWluT3ZlcnNjYW5GaXJzdCA8IG9sZEZpcnN0KVxyXG5cdFx0XHRuZXdGaXJzdCA9IG9wdE92ZXJzY2FuRmlyc3Q7XHJcblx0XHRlbHNlIGlmIChtaW5PdmVyc2NhbkZpcnN0ID4gb2xkRmlyc3QgJiYgbWluT3ZlcnNjYW5GaXJzdCA8IG9sZExhc3QpXHJcblx0XHRcdG5ld0ZpcnN0ID0gTWF0aC5tYXgoIG1heE92ZXJzY2FuRmlyc3QsIG9sZEZpcnN0KTtcclxuXHRcdGVsc2UgaWYgKG1heE92ZXJzY2FuRmlyc3QgPiBvbGRMYXN0KVxyXG5cdFx0XHRuZXdGaXJzdCA9IG9wdE92ZXJzY2FuRmlyc3Q7XHJcblx0XHRlbHNlIGlmIChvbGRMYXN0IC0gbWF4T3ZlcnNjYW5GaXJzdCA+IG9wdE92ZXJzY2FuRmlyc3QgLSBvbGRMYXN0KVxyXG5cdFx0XHRuZXdGaXJzdCA9IG1heE92ZXJzY2FuRmlyc3Q7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld0ZpcnN0ID0gb3B0T3ZlcnNjYW5GaXJzdDtcclxuXHJcblx0XHRpZiAobWluT3ZlcnNjYW5MYXN0ID4gb2xkTGFzdClcclxuXHRcdFx0bmV3TGFzdCA9IG9wdE92ZXJzY2FuTGFzdDtcclxuXHRcdGVsc2UgaWYgKG1pbk92ZXJzY2FuTGFzdCA8IG9sZExhc3QgJiYgbWluT3ZlcnNjYW5MYXN0ID4gb2xkRmlyc3QpXHJcblx0XHRcdG5ld0xhc3QgPSBNYXRoLm1pbiggbWF4T3ZlcnNjYW5MYXN0LCBvbGRMYXN0KTtcclxuXHRcdGVsc2UgaWYgKG1heE92ZXJzY2FuTGFzdCA8IG9sZEZpcnN0KVxyXG5cdFx0XHRuZXdMYXN0ID0gb3B0T3ZlcnNjYW5MYXN0O1xyXG5cdFx0ZWxzZSBpZiAobWF4T3ZlcnNjYW5MYXN0IC0gb2xkRmlyc3QgPiBvbGRGaXJzdCAtIG9wdE92ZXJzY2FuTGFzdClcclxuXHRcdFx0bmV3TGFzdCA9IG1heE92ZXJzY2FuTGFzdDtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3TGFzdCA9IG9wdE92ZXJzY2FuTGFzdDtcclxuXHJcblx0XHRpZiAobmV3Rmlyc3QgPiBuZXdMYXN0KVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgV3JvbmcgU2Nyb2xsQXhpcyBjYWxjdWxhdGlvbjogbmV3Rmlyc3QgJyR7bmV3Rmlyc3R9JyBpcyBncmVhdGVyIHRoYW4gbmV3TGFzdCAnJHtuZXdMYXN0fSdgKVxyXG5cclxuXHRcdC8vIHNldCB3aGF0IHdlIGFscmVhZHkga25vdyBpbnRvIHRoZSByZXR1cm4gb2JqZWN0XHJcblx0XHRyZXRBY3Rpb24ubmV3Rmlyc3QgPSBuZXdGaXJzdDtcclxuXHRcdHJldEFjdGlvbi5uZXdMYXN0ID0gbmV3TGFzdDtcclxuXHRcdHJldEFjdGlvbi5uZXdBdmdJdGVtU2l6ZSA9IG5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0cmV0QWN0aW9uLm5ld1dhbGxTaXplID0gTWF0aC5jZWlsKCB0b3RhbENvdW50ICogbmV3QXZnSXRlbVNpemUpO1xyXG5cdFx0cmV0QWN0aW9uLm5ld1N1YnNldE9mZnNldCA9IE1hdGguY2VpbCggbmV3Rmlyc3QgKiBuZXdBdmdJdGVtU2l6ZSk7XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgd2UgaGF2ZSB0aGUgaW5kaWNlcyBvZiB0aGUgaXRlbXMgd2Ugd2FudCwgZGV0ZXJtaW5lIHdoYXQgaXRlbXMgc2hvdWxkIGJlXHJcblx0XHQvLyBhZGRlZC9yZW1vdmVkIGluIHRoZSBiZWdpbm5pbmcgYW5kIHRoZSBlbmRcclxuXHRcdGlmIChuZXdGaXJzdCA9PSBvbGRGaXJzdCAmJiBuZXdMYXN0ID09IG9sZExhc3QpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBuZXcgZGF0YXNldCBpcyB0aGUgc2FtZSBhcyB0aGUgb2xkIG9uZSwgZG9uJ3QgYWRkL3JlbW92ZSBhbnkgaXRlbXNcclxuXHRcdFx0cmV0QWN0aW9uLm5vQWRkUmVtb3ZlTmVlZGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG5ld0ZpcnN0ID4gb2xkTGFzdCB8fCBuZXdMYXN0IDwgb2xkRmlyc3QpXHJcblx0XHR7XHJcblx0XHRcdC8vIGlmIHRoZSBvbGQgYW5kIHRoZSBuZXcgZGF0YXNldHMgZG9uJ3QgaW50ZXJzZWN0LCByZW1vdmUgYWxsIGV4aXN0aW5nIGFuZCBhZGQgYWxsXHJcblx0XHRcdC8vIG5ldyBpdGVtcy5cclxuXHRcdFx0cmV0QWN0aW9uLm5lZWVkVG9SZW1vdmVBbGxJdGVtcyA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChuZXdGaXJzdCA8IG9sZEZpcnN0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gbmVlZCB0byBhZGQgc29tZSBpdGVtcyBhdCB0aGUgYmVnaW5uaW5nXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID0gb2xkRmlyc3QgLSBuZXdGaXJzdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdGaXJzdCA+IG9sZEZpcnN0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gbmVlZCB0byByZW1vdmUgc29tZSBpdGVtcyBhdCB0aGUgYmVnaW5uaW5nXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID0gbmV3Rmlyc3QgLSBvbGRGaXJzdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5ld0xhc3QgPCBvbGRMYXN0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gbmVlZCB0byByZW1vdmUgc29tZSBpdGVtcyBhdCB0aGUgZW5kXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA9IG9sZExhc3QgLSBuZXdMYXN0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG5ld0xhc3QgPiBvbGRMYXN0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gbmVlZCB0byBhZGQgc29tZSBpdGVtcyBhdCB0aGUgZW5kXHJcblx0XHRcdFx0cmV0QWN0aW9uLmNvdW50VG9BZGRBdEVuZCA9IG5ld0xhc3QgLSBvbGRMYXN0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJldEFjdGlvbjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY3JvbGxBeGlzQWN0aW9uIGNsYXNzIHJlcHJlc2VudHMgdGhlIGFjdGlvbihzKSB0aGF0IHNob3VsZCBiZSBkb25lIGFmdGVyIHRoZSBTY3JvbGxBeGlzXHJcbiAqIHBlcmZvcm1lZCBjYWxjdWxhdGlvbnMgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZyYW1lLCB3YWxsIGFuZCBkYXRhLiBUaGUgYWN0aW9uc1xyXG4gKiBhcmUgaW5zdHJ1Y3Rpb25zIHRvIGFkZCBvciByZW1vdmUgaXRlbXMgYW5kIHRvIHNldCB3YWxsIHNpemUgYW5kIGRhdGEgb2Zmc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcm9sbEF4aXNBY3Rpb25cclxue1xyXG5cdC8vIE5ldyBhdmVhcmFnZSBpdGVtIHNpemVcclxuXHRuZXdBdmdJdGVtU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IHNpemUgdGhhdCBzaG91bGQgYmUgc2V0IHRvIHRoZSB3YWxsIGVsZW1lbnRcclxuXHRuZXdXYWxsU2l6ZTogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTmV3IG9mZnNldCBvZiB0aGUgc3Vic2V0IGVsZW1lbnQgZnJvbSB0aGUgd2FsbCBlbGVtZW50XHJcblx0bmV3U3Vic2V0T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbSB0aGF0IHNob3VsZCBiZSBpbiB0aGUgc3Vic2V0XHJcblx0bmV3Rmlyc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBsYXN0IGl0ZW0gdGhhdCBzaG91bGQgYmUgaW4gdGhlIHN1YnNldFxyXG5cdG5ld0xhc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIG5laXRoZXIgYWRkIG5vciByZW1vdmUgYW55IGl0ZW1zLlxyXG5cdG5vQWRkUmVtb3ZlTmVlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMuIElmIHRoaXMgZmxhZyBpcyBzZXRcclxuXHQvLyB0byB0cnVlLCB0aGVuIHRoZSBjYWxsZXIgc2hvdWxkIHJlbW92ZSBhbGwgZXhpc3RpbmcgaXRlbXMgYW5kIHRoZW4gYWRkIGFsbCBpdGVtcyBmcm9tXHJcblx0Ly8gbmV3Rmlyc3QgdG8gbmV3TGFzdFxyXG5cdG5lZWVkVG9SZW1vdmVBbGxJdGVtczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlIGF0IHRoZSBiZWdpbm5pbmcuIElmIG5vdCB6ZXJvLCB0aGlzIGlzIHRoZSBpdGVtcyBmcm9tIG9sZEZpcnN0XHJcblx0Ly8gdG8gbmV3Rmlyc3QtMS5cclxuXHRjb3VudFRvUmVtb3ZlQXRTdGFydDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIHJlbW92ZSBhdCB0aGUgZW5kLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdMYXN0KzFcclxuXHQvLyB0byBvbGRMYXN0LlxyXG5cdGNvdW50VG9SZW1vdmVBdEVuZDogbnVtYmVyID0gMDtcclxuXHJcblx0Ly8gTnVtYmVyIG9mIGl0ZW1zIHRvIGFkZCBhdCB0aGUgYmVnaW5uaW5nLiBJZiBub3QgemVybywgdGhpcyBpcyB0aGUgaXRlbXMgZnJvbSBuZXdGaXJzdFxyXG5cdC8vIHRvIG9sZEZpcnN0LTEuXHJcblx0Y291bnRUb0FkZEF0U3RhcnQ6IG51bWJlciA9IDA7XHJcblxyXG5cdC8vIE51bWJlciBvZiBpdGVtcyB0byBhZGQgYXQgdGhlIGVuZC4gSWYgbm90IHplcm8sIHRoaXMgaXMgdGhlIGl0ZW1zIGZyb20gb2xkTGFzdCsxXHJcblx0Ly8gdG8gbmV3TGFzdC5cclxuXHRjb3VudFRvQWRkQXRFbmQ6IG51bWJlciA9IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCJtaW1ibFwiXHJcbmltcG9ydCB7U2Nyb2xsQXhpcywgU2Nyb2xsQXhpc0FjdGlvbn0gZnJvbSBcIi4vU2Nyb2xsQXhpc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVlRBYmxlQ2VsbERhdGEgaW50ZXJmYWNlIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzaW5nbGUgY2VsbCB0aGF0IGlzIHByb3ZpZGVkXHJcbiAqIGJ5IGEgY2FsbGVyIHdoZW4gcmVxdWVzZWQgYnkgVlRhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWVGFibGVDZWxsRGF0YVxyXG57XHJcblx0LyoqIENvbnRlbnQgb2YgdGhlIGNlbGwgKi9cclxuXHRjb250ZW50OiBhbnk7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyB0aGlzIGNlbGwgc2hvdWxkIHNwYW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuICovXHJcblx0cm93U3Bhbj86IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBjb2x1bW5zIHRoaXMgY2VsbCBzaG91bGQgc3Bhbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4gKi9cclxuXHRjb2xTcGFuPzogbnVtYmVyO1xyXG5cclxuXHQvKiogU3R5bGUgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgYDx0ZD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRzdHlsZT86IG1pbS5TdHlsZVByb3BUeXBlO1xyXG5cclxuXHQvKiogQ2xhc3MgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgYDx0ZD5gIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY2VsbC4gKi9cclxuXHRjbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlRhYmxlUHJvcHNcclxue1xyXG5cdC8qKiBOdW1iZXIgb2Ygcm93cyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZW50aXJlIGRhdGFzZXQgKi9cclxuXHR0b3RhbENvbENvdW50OiBudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxiYWNrIHRocm91Z2ggd2hpY2ggVlRhYmxlIHJlcXVlc3RzIGNlbGwgZGF0YS4gXHJcblx0ICovXHJcblx0Z2V0Q2VsbENhbGxiYWNrOiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBhbnk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXCJWaXJ0dWFsaXplZFwiIHRhYmxlIHRoYXQgcmVuZGVycyBvbmx5IGEgc3Vic2V0IG9mIGEgZGF0YXNldCBhbmQgY2hhbmdlcyB0aGlzIHN1YnNldFxyXG4gKiBhcyB0aGUgdXNlciBzY3JvbGxzIGJhY2sgYW5kIGZvcnRoLlxyXG4gKiBcclxuICogVlRhYmxlIHVzZXMgdGhlIGZvbGxvd2luZyAzIERPTSBlbGVtZW50czpcclxuICogIC0gZnJhbWUgLSB0aGUgXCJvdXRlclwiIGA8ZGl2PmAgZWxlbWVudCB3aGljaCBkaXNwbGF5cyB0aGUgc2Nyb2xsYmFycyB3aGVuIG5lY2Vzc2FyeVxyXG4gKiAgLSB3YWxsIC0gdGhlIFwiaW5uZXJcIiBgPGRpdj5gIGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBzaXplIG9mIHRoZSBlbnRpcmUgcG9zc2libGUgdGFibGUuIEl0IGlzXHJcbiAqICAgIG5lZWRlZCB0byBtYWtlIHNjcm9sbGluZyBtb3JlLW9yLWxlc3MgYWNjdXJhdGUuXHJcbiAqICAtIHRhYmxlIC0gdGhlIGA8dGFibGU+YCBlbGVtZW50IHRoYXQgY29udGFpbnMgb25seSByb3dzIGFuZCBjb2x1bW5zIHRoYXQgZml0IHRoZSBmcmFtZSBwbHVzXHJcbiAqICAgIGEgY2VydGFpbiBudW1iZXIgZm9yIFwib3ZlcnNjYW5cIi5cclxuICogXHJcbiAqIFZUYWJsZSBjYWxjdWxhdGVzIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoIGJ5IGRpdmlkaW5nIHRoZSBzaXplIG9mIHRoZSB0YWJsZVxyXG4gKiBieSB0aGUgbnVtYmVyIG9mIHJvd3MvY29sdW1ucy4gVGhlc2UgYXZlcmFnZSB2YWx1ZXMgYXJlIHJlY2FsY3VsYXRlZCBldmVyeSB0aW1lIHJvd3MgYW5kXHJcbiAqIGNvbHVtbnMgYXJlIGFkZGVkIG9yIGRlbGV0ZWQgZnJvbSB0aGUgdGFibGUuIEJhc2VkIG9uIHRoZXNlIGF2ZXJhZ2UgdmFsdWVzIHRoZSB3YWxsIGVsZW1lbnRcclxuICogaXMgc2l6ZWQgdG8gaW5jbHVkZSB0aGUgZW50aXJlIGRhdGFzZXQsIHdoaWNoIGhlbHBzIHRvIGFjaGlldmUgbW9yZS1vci1sZXNzIGFjY3VyYXRlIHNjcm9sbGluZ1xyXG4gKiBwb3NpdGlvbmluZy5cclxuICpcclxuICogVlRhYmxlIHVzZXMgbWluaW11bSwgb3B0aW1hbCBhbmQgbWF4aW11bSBvdmVyc2NhbiBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucyBvbiBhbGwgc2lkZXMgb2ZcclxuICogdGhlIGZyYW1lIGFuZCBtYWtlcyBzdXJlIHRoYXQgdGhlIGFjdHVhbCBudW1iZXIgb2Ygcm93cy9jb2x1bW5zIGlzIHdpdGhpbiB0aGVzZSBtaW5pbXVtIGFuZFxyXG4gKiBtYXhpbXVtIHZhbHVlcy4gRHVyaW5nIHNjcm9sbGluZywgaWYgdGhlIGFjdHVhbCBvdmVyc2NhbiBudW1iZXIgYmVjb21lcyBsZXNzIHRoYW4gdGhlIG1pbmltdW0sXHJcbiAqIG5ldyBjZWxscyBhcmUgYWRkZWQgYW5kIGlmIGl0IGJlY29tZXMgbW9yZSB0aGVuIHRoZSBtYXhpbXVtIGNlbGxzIGFyZSBkZWxldGVkIHNvIHRoYXQgdGhlXHJcbiAqIGFjdHVhbCBvdmVyc2NhbiBudW1iZXIgaXMgZXF1YWwgdG8gdGhlIGF2ZXJhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVlRhYmxlIGV4dGVuZHMgbWltLkNvbXBvbmVudDxWVGFibGVQcm9wcz5cclxue1xyXG5cdC8vIE92ZXJzY2FuIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzXHJcblx0cHJpdmF0ZSBtaW5Sb3dPdmVyc2NhbiA9IDM7XHJcblx0cHJpdmF0ZSBvcHRSb3dPdmVyc2NhbiA9IDU7XHJcblx0cHJpdmF0ZSBtYXhSb3dPdmVyc2NhbiA9IDEwO1xyXG5cdHByaXZhdGUgbWluQ29sT3ZlcnNjYW4gPSAzO1xyXG5cdHByaXZhdGUgb3B0Q29sT3ZlcnNjYW4gPSA1O1xyXG5cdHByaXZhdGUgbWF4Q29sT3ZlcnNjYW4gPSAxMDtcclxuXHJcblx0Ly8gQ3VycmVudCBkYXRhc2V0IHJlcHJlc2VudGVkIGJ5IHJvdyBjb21wb25lbnRzLlxyXG5cdHByaXZhdGUgcm93czogVlJvd1tdO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBjdXJyZW50IGRhdGFzZXQgb3IgMCBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgZmlyc3RSb3c6IG51bWJlcjtcclxuXHJcblx0Ly8gSW5kZXggb2YgdGhlIGxhc3Qgcm93IGluIHRoZSBkYXRhc2V0IG9yIC0xIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBsYXN0Um93OiBudW1iZXI7XHJcblxyXG5cdC8vIEluZGV4IG9mIHRoZSBmaXJzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAwIGlmIHRoZSBkYXRhc2V0IGlzIGVtcHR5XHJcblx0cHJpdmF0ZSBmaXJzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgbGFzdCBjb2x1bW4gaW4gdGhlIGN1cnJlbnQgZGF0YXNldCBvciAtMSBpZiB0aGUgZGF0YXNldCBpcyBlbXB0eVxyXG5cdHByaXZhdGUgbGFzdENvbDogbnVtYmVyO1xyXG5cclxuXHQvLyBDb3VudHMgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHByaXZhdGUgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmxhc3RSb3cgLSB0aGlzLmZpcnN0Um93ICsgMSB9XHJcblx0cHJpdmF0ZSBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubGFzdENvbCAtIHRoaXMuZmlyc3RDb2wgKyAxIH1cclxuXHJcblx0cHVibGljIGdldCBSb3dzKCk6IHN0cmluZyB7IHJldHVybiBgJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fWA7IH1cclxuXHRwdWJsaWMgZ2V0IENvbHMoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9YDsgfVxyXG5cclxuXHQvLyBTaXplIG9mIHRoZSBlbnRpcmUgdGFibGUgYmFzZWQgb24gYXZlcmFnZSByb3cgaGVpZ2h0IGFuZCBjb2x1bW4gd2lkdGguIFRoaXMgYmVjb21lcyB0aGVcclxuXHQvLyBzaXplIG9mIHRoZSB3YWxsLlxyXG5cdHByaXZhdGUgd2FsbEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgd2FsbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBjYWxjdWxhdGVkIGF2ZXJhZ2Ugcm93IGhlaWdodCBhbmQgY29sdW1uIHdpZHRoXHJcblx0cHJpdmF0ZSBhdmdSb3dIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGF2Z0NvbFdpZHRoOiBudW1iZXI7XHJcblxyXG5cdC8vIExhdGVzdCBzY3JvbGxpbmcgcG9zaXRpb25zXHJcblx0cHJpdmF0ZSBsYXRlc3RTY3JvbGxUb3A6IG51bWJlcjtcclxuXHRwcml2YXRlIGxhdGVzdFNjcm9sbExlZnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBmcmFtZSB0aGF0IGhhcyB0aGUgc2NvbGxiYXJzXHJcblx0cHJpdmF0ZSBmcmFtZTogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBmcmFtZVJlZiA9IChyOiBIVE1MRGl2RWxlbWVudCkgPT4gdGhpcy5mcmFtZSA9IHI7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgd2FsbCB0aGF0IGlzIGJpZyBlbm91Z2ggdG8gaG9sZCBlbnRpcmUgZGF0YXNldFxyXG5cdHByaXZhdGUgd2FsbDogSFRNTERpdkVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB3YWxsUmVmID0gKHI6IEhUTUxEaXZFbGVtZW50KSA9PiB0aGlzLndhbGwgPSByO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHRhYmxlIHRoYXQgZGlzcGxheXMgdGhlIHBhcnRpYWwgZGF0YXNldFxyXG5cdHByaXZhdGUgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0YWJsZVJlZiA9IChyOiBIVE1MVGFibGVFbGVtZW50KSA9PiB0aGlzLnRhYmxlID0gcjtcclxuXHJcblx0Ly8gT2JqZWN0cyB0aGF0IGRlYWwgd2l0aCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuXHRwcml2YXRlIHZBeGlzOiBTY3JvbGxBeGlzO1xyXG5cdHByaXZhdGUgaEF4aXM6IFNjcm9sbEF4aXM7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBWVGFibGVQcm9wcylcclxuXHR7XHJcblx0XHRzdXBlciggcHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gMDtcclxuXHRcdHRoaXMuYXZnQ29sV2lkdGggPSAwO1xyXG5cclxuXHRcdC8vIG5lZ2F0aXZlIHZhbHVlcyBpbmRpY2F0ZSB0aGF0IHdlIGhhdmVuJ3QgbWVhc3VyZWQgYW55IHNpemVzIHlldC5cclxuXHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gLTE7XHJcblx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSAtMTtcclxuXHJcblx0XHQvLyBzZXQgaW5pdGlhbCBzaXplIG9mIHRoZSB3YWxsIGVsZW1lbnQgYmFzZWQgb24gc29tZSBoYXJkLWNvZGVkIHZhbHVlcy4gSXQgd2lsbCBiZVxyXG5cdFx0Ly8gY2hhbmdlZCBhcyBzb29uIGFzIHdlIHJlbmRlciBhbmQgc3RhcnQgbWVhc3VyaW5nIG91ciBlbGVtZW50c1xyXG5cdFx0dGhpcy53YWxsSGVpZ2h0ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50ICogMjU7XHJcblx0XHR0aGlzLndhbGxXaWR0aCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCAqIDgwO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50V2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHJcblx0XHQvLyBmaWxsIGluIGluaXRpYWwgZGF0YXNldFxyXG5cdFx0bGV0IHJvd0NvdW50ID0gdGhpcy5wcm9wcy50b3RhbFJvd0NvdW50IDwgMTAgPyB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQgOiAxMDtcclxuXHRcdGxldCBjb2xDb3VudCA9IHRoaXMucHJvcHMudG90YWxDb2xDb3VudCA8IDEwID8gdGhpcy5wcm9wcy50b3RhbENvbENvdW50IDogMTA7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0Zm9yKCBsZXQgaiA9IDA7IGogPCBjb2xDb3VudDsgaisrKVxyXG5cdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHJcblx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWVtYmVyIHRoZSBkYXRhc2V0IHNpemVcclxuXHRcdHRoaXMuZmlyc3RSb3cgPSAwO1xyXG5cdFx0dGhpcy5sYXN0Um93ID0gcm93Q291bnQgLSAxO1xyXG5cdFx0dGhpcy5maXJzdENvbCA9IDA7XHJcblx0XHR0aGlzLmxhc3RDb2wgPSBjb2xDb3VudCAtIDE7XHJcblxyXG5cdFx0dGhpcy52QXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pblJvd092ZXJzY2FuLCB0aGlzLm9wdFJvd092ZXJzY2FuLCB0aGlzLm1heFJvd092ZXJzY2FuKVxyXG5cdFx0dGhpcy5oQXhpcyA9IG5ldyBTY3JvbGxBeGlzKCB0aGlzLm1pbkNvbE92ZXJzY2FuLCB0aGlzLm9wdENvbE92ZXJzY2FuLCB0aGlzLm1heENvbE92ZXJzY2FuKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHNjaGVkdWxlIHRoZSBtZWFzdXJpbmcgZnVuY3Rpb25hbGl0eSwgd2hpY2ggd2lsbCBkZXRlcm1pbmcgd2hldGhlciB3ZSBuZWVkIHRvIGFkZC9yZW1vdmUgY2VsbHMuXHJcblx0XHR0aGlzLnNpdGUuc2NoZWR1bGVDYWxsKCB0aGlzLm1lYXN1cmVBbmRVcGRhdGUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRsZXQgZnJhbWVTdHlsZSA9IHsgd2lkdGg6XCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG92ZXJmbG93OlwiYXV0b1wiIH07XHJcblx0XHRsZXQgd2FsbFN0eWxlID0ge1xyXG5cdFx0XHR3aWR0aDogYCR7dGhpcy53YWxsV2lkdGh9cHhgLFxyXG5cdFx0XHRoZWlnaHQ6IGAke3RoaXMud2FsbEhlaWdodH1weGAsXHJcblx0XHRcdG92ZXJmbG93Olwibm9uZVwiLFxyXG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcblx0XHR9O1xyXG5cdFx0bGV0IHRhYmxlU3R5bGUgPSB7XHJcblx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXHJcblx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIlxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gPGRpdiByZWY9e3RoaXMuZnJhbWVSZWZ9IHN0eWxlPXtmcmFtZVN0eWxlfSBzY3JvbGw9e3RoaXMub25TY3JvbGx9PlxyXG5cdFx0XHQ8ZGl2IHJlZj17dGhpcy53YWxsUmVmfSBzdHlsZT17d2FsbFN0eWxlfT5cclxuXHRcdFx0XHQ8dGFibGUgcmVmPXt0aGlzLnRhYmxlUmVmfSBzdHlsZT17dGFibGVTdHlsZX0+XHJcblx0XHRcdFx0XHR7dGhpcy5yb3dzfVxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lYXN1cmVzIHRoZSBzaXplIG9jY3VwaWVkIGJ5IHRoZSBjdXJyZW50IGRhdGEgc2V0IHJlbGF0aXZlIHRvIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXJcclxuXHQgKiBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIG5lZWQgdG8gYWRkL3JlbW92ZSBjZWxscy4gSWYgd2UgZG8sIHdlIHNjaGVkdWxlIHJlLXJlbmRlcmluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1lYXN1cmVBbmRVcGRhdGUgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnJvd0NvdW50ID09PSAwIHx8IHRoaXMuY29sQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgZnJhbWVSZWN0ID0gdGhpcy5mcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCB3YWxsUmVjdCA9IHRoaXMud2FsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCB0YWJsZVJlY3QgPSB0aGlzLnRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmxhdGVzdFNjcm9sbFRvcCAhPSB0aGlzLmZyYW1lLnNjcm9sbFRvcClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBNZWFzdXJpbmcgaGVpZ2h0OiBzY3JvbGwgdG9wID0gJHt0aGlzLmZyYW1lLnNjcm9sbFRvcH0sIHJvd3M6ICR7dGhpcy5yb3dDb3VudH0sIGAgK1xyXG5cdFx0XHQvLyBcdFx0XHRcdGB3YWxsIGhlaWdodCA9ICR7d2FsbFJlY3QuaGVpZ2h0fSwgdGFibGUgaGVpZ2h0ID0gJHt0YWJsZVJlY3QuaGVpZ2h0fWApO1xyXG5cclxuXHRcdFx0bGV0IHZBeGlzQWN0aW9uID0gdGhpcy52QXhpcy5tZWFzdXJlKCB0aGlzLnByb3BzLnRvdGFsUm93Q291bnQsIHRoaXMuZmlyc3RSb3csIHRoaXMucm93Q291bnQsXHJcblx0XHRcdFx0dGhpcy5hdmdSb3dIZWlnaHQsIGZyYW1lUmVjdC5oZWlnaHQsIHdhbGxSZWN0LmhlaWdodCwgdGFibGVSZWN0LmhlaWdodCwgdGhpcy5mcmFtZS5zY3JvbGxUb3ApO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBFc3RpbWF0ZWQ6IHdhbGwgaGVpZ2h0ID0gJHt2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZX0sIHJvdyBoZWlnaHQgPSAke3ZBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplfWApO1xyXG5cclxuXHRcdFx0Ly8gcmVtZW1iZXIgdGhlIG5ldyBhdmVyYWdlIHJvdyBoZWlnaHQgYW5kIHRoZSBsYXRlc3QgdmVydGljYWwgc2Nyb2xsaW5nIHBvc2l0aW9uXHJcblx0XHRcdHRoaXMuYXZnUm93SGVpZ2h0ID0gdkF4aXNBY3Rpb24ubmV3QXZnSXRlbVNpemU7XHJcblx0XHRcdHRoaXMubGF0ZXN0U2Nyb2xsVG9wID0gdGhpcy5mcmFtZS5zY3JvbGxUb3A7XHJcblxyXG5cdFx0XHQvLyBhZGQvcmVtb3ZlIHJvd3MgaWYgbmVlZGVkXHJcblx0XHRcdGlmICghdkF4aXNBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQpXHJcblx0XHRcdFx0dGhpcy51cGRhdGVSb3dzKCB2QXhpc0FjdGlvbik7XHJcblxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGluZyBvZiB3YWxsIGhlaWdodCBhbmQgc3Vic2V0IHZlcnRpY2FsIG9mZnNldCBpZiBuZWVkZWRcclxuXHRcdFx0aWYgKHZBeGlzQWN0aW9uLm5ld1dhbGxTaXplICE9IHdhbGxSZWN0LmhlaWdodCB8fCB2QXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgIT0gdGFibGVSZWN0LnRvcCAtIHdhbGxSZWN0LnRvcClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2FsbE1lKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRhYmxlLnN0eWxlLnRvcCA9IHZBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCArIFwicHhcIjtcclxuXHRcdFx0XHRcdHRoaXMud2FsbC5zdHlsZS5oZWlnaHQgPSB2QXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSArIFwicHhcIjtcclxuXHRcdFx0XHR9LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5sYXRlc3RTY3JvbGxMZWZ0ICE9IHRoaXMuZnJhbWUuc2Nyb2xsTGVmdClcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBNZWFzdXJpbmcgd2lkdGg6IHNjcm9sbCBsZWZ0ID0gJHt0aGlzLmZyYW1lLnNjcm9sbExlZnR9LCBjb2xzOiAke3RoaXMuY29sQ291bnR9LCBgICtcclxuXHRcdFx0Ly8gXHRcdFx0XHRgd2FsbCB3aWR0aCA9ICR7d2FsbFJlY3Qud2lkdGh9LCB0YWJsZSB3aWR0aCA9ICR7dGFibGVSZWN0LndpZHRofWApO1xyXG5cclxuXHRcdFx0bGV0IGhBeGlzQWN0aW9uID0gdGhpcy5oQXhpcy5tZWFzdXJlKCB0aGlzLnByb3BzLnRvdGFsQ29sQ291bnQsIHRoaXMuZmlyc3RDb2wsIHRoaXMuY29sQ291bnQsXHJcblx0XHRcdFx0dGhpcy5hdmdDb2xXaWR0aCwgZnJhbWVSZWN0LndpZHRoLCB3YWxsUmVjdC53aWR0aCwgdGFibGVSZWN0LndpZHRoLCB0aGlzLmZyYW1lLnNjcm9sbExlZnQpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coIGBFc3RpbWF0ZWQ6IHdhbGwgd2lkdGggPSAke2hBeGlzQWN0aW9uLm5ld1dhbGxTaXplfSwgY29sIHdpZHRoID0gJHtoQXhpc0FjdGlvbi5uZXdBdmdJdGVtU2l6ZX1gKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgYXZlcmFnZSBjb2x1bW4gd2lkdGggYW5kIHRoZSBsYXRlc3QgaG9yaXpvbnRhbCBzY3JvbGxpbmcgcG9zaXRpb25cclxuXHRcdFx0dGhpcy5hdmdDb2xXaWR0aCA9IGhBeGlzQWN0aW9uLm5ld0F2Z0l0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmxhdGVzdFNjcm9sbExlZnQgPSB0aGlzLmZyYW1lLnNjcm9sbExlZnQ7XHJcblxyXG5cdFx0XHQvLyBhZGQvcmVtb3ZlIGNvbHVtbnMgaWYgbmVlZGVkXHJcblx0XHRcdGlmICghaEF4aXNBY3Rpb24ubm9BZGRSZW1vdmVOZWVkZWQpXHJcblx0XHRcdFx0dGhpcy51cGRhdGVDb2xzKCBoQXhpc0FjdGlvbik7XHJcblxyXG5cdFx0XHQvLyBzY2hlZHVsZSB1cGRhdGluZyBvZiB3YWxsIHdpZHRoIGFuZCBzdWJzZXQgaG9yaXpvbnRhbCBvZmZzZXQgaWYgbmVlZGVkXHJcblx0XHRcdGlmIChoQXhpc0FjdGlvbi5uZXdXYWxsU2l6ZSAhPSB3YWxsUmVjdC53aWR0aCB8fCBoQXhpc0FjdGlvbi5uZXdTdWJzZXRPZmZzZXQgIT0gdGFibGVSZWN0LmxlZnQgLSB3YWxsUmVjdC5sZWZ0KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jYWxsTWUoICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudGFibGUuc3R5bGUubGVmdCA9IGhBeGlzQWN0aW9uLm5ld1N1YnNldE9mZnNldCArIFwicHhcIjtcclxuXHRcdFx0XHRcdHRoaXMud2FsbC5zdHlsZS53aWR0aCA9IGhBeGlzQWN0aW9uLm5ld1dhbGxTaXplICsgXCJweFwiO1xyXG5cdFx0XHRcdH0sIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlbW92ZXMgcm93cyBhcyBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuIFNjcm9sbEF4aXNBY3Rpb24gZGVhbGluZyB3aXRoIHRoZSB2ZXJ0aWNhbFxyXG5cdCAqIHNjcm9sbGluZy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHVwZGF0ZVJvd3MoIGF4aXNBY3Rpb246IFNjcm9sbEF4aXNBY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY29uc29sZS5sb2coIGBVcGRhdGluZyByb3dzIGZyb20gJHt0aGlzLmZpcnN0Um93fSAtICR7dGhpcy5sYXN0Um93fSB0byAke2F4aXNBY3Rpb24ubmV3Rmlyc3R9IC0gJHtheGlzQWN0aW9uLm5ld0xhc3R9YCk7XHJcblxyXG5cdFx0aWYgKGF4aXNBY3Rpb24ubmVlZWRUb1JlbW92ZUFsbEl0ZW1zKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnJvd3MgPSBbXTtcclxuXHRcdFx0Y29uc29sZS5sb2coIGBSZW1vdmVkIGFsbCAke3RoaXMucm93Q291bnR9IGV4aXN0aW5nIHJvd3NgKTtcclxuXHJcblx0XHRcdGZvciggbGV0IGkgPSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBpIDw9IGF4aXNBY3Rpb24ubmV3TGFzdDsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZyb3cgPSBuZXcgVlJvdygpO1xyXG5cdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFxyXG5cdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgZW5kXHJcblx0XHRcdFx0dGhpcy5yb3dzLnB1c2goIHZyb3cpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24ubmV3TGFzdCAtIGF4aXNBY3Rpb24ubmV3Rmlyc3QgKyAxfSByb3dzYCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCB0aGlzLnJvd0NvdW50IC0gYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQsIGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZH0gcm93cyBmcm9tIGJvdHRvbWApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRTdGFydCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnJvd3Muc3BsaWNlKCAwLCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0fSByb3dzIGZyb20gdG9wYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdEVuZCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5sYXN0Um93ICsgMTsgaSA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGkrKylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdnJvdyA9IG5ldyBWUm93KCk7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBqID0gdGhpcy5maXJzdENvbDsgaiA8PSB0aGlzLmxhc3RDb2w7IGorKylcclxuXHRcdFx0XHRcdFx0dnJvdy5hZGRDZWxsKCB0aGlzLnByb3BzLmdldENlbGxDYWxsYmFjayggaSwgaikpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHQvLyBhZGQgdGhlIG5ldyByb3cgYXQgdGhlIHN0YXJ0XHJcblx0XHRcdFx0XHR0aGlzLnJvd3MucHVzaCggdnJvdyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kfSByb3dzIHRvIGJvdHRvbWApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRTdGFydCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb3IoIGxldCBpID0gdGhpcy5maXJzdFJvdyAtIDE7IGkgPj0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaS0tKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gbmV3IFZSb3coKTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sOyBqIDw9IHRoaXMubGFzdENvbDsgaisrKVxyXG5cdFx0XHRcdFx0XHR2cm93LmFkZENlbGwoIHRoaXMucHJvcHMuZ2V0Q2VsbENhbGxiYWNrKCBpLCBqKSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdC8vIGFkZCB0aGUgbmV3IHJvdyBhdCB0aGUgc3RhcnRcclxuXHRcdFx0XHRcdHRoaXMucm93cy5zcGxpY2UoIDAsIDAsIHZyb3cpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGBBZGQgJHtheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0fSByb3dzIHRvIHRvcGApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maXJzdFJvdyA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7XHJcblx0XHR0aGlzLmxhc3RSb3cgPSBheGlzQWN0aW9uLm5ld0xhc3Q7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVNZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlbW92ZXMgY29sdW1ucyBhcyBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuIFNjcm9sbEF4aXNBY3Rpb24gZGVhbGluZyB3aXRoIHRoZVxyXG5cdCAqIGhvcml6b250YWwgc2Nyb2xsaW5nLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgdXBkYXRlQ29scyggYXhpc0FjdGlvbjogU2Nyb2xsQXhpc0FjdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjb25zb2xlLmxvZyggYFVwZGF0aW5nIGNvbHVtbnMgZnJvbSAke3RoaXMuZmlyc3RDb2x9IC0gJHt0aGlzLmxhc3RDb2x9IHRvICR7YXhpc0FjdGlvbi5uZXdGaXJzdH0gLSAke2F4aXNBY3Rpb24ubmV3TGFzdH1gKTtcclxuXHJcblx0XHRpZiAoYXhpc0FjdGlvbi5uZWVlZFRvUmVtb3ZlQWxsSXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdHZyb3cucmVtb3ZlQWxsQ2VsbHMoKTtcclxuXHRcdFx0XHRmb3IoIGxldCBqID0gYXhpc0FjdGlvbi5uZXdGaXJzdDsgaiA8PSBheGlzQWN0aW9uLm5ld0xhc3Q7IGorKylcclxuXHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHJcblx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCBgUmVtb3ZlZCBhbGwgJHt0aGlzLmNvbENvdW50fSBleGlzdGluZyBjb2xzYCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCBgQWRkICR7YXhpc0FjdGlvbi5uZXdMYXN0IC0gYXhpc0FjdGlvbi5uZXdGaXJzdCArIDF9IGNvbHNgKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKGF4aXNBY3Rpb24uY291bnRUb1JlbW92ZUF0RW5kID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHZyb3cgb2YgdGhpcy5yb3dzKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZyb3cucmVtb3ZlQ2VsbHNBdEVuZCggYXhpc0FjdGlvbi5jb3VudFRvUmVtb3ZlQXRFbmQpO1xyXG5cdFx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdEVuZH0gY29scyBmcm9tIHJpZ2h0YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHZyb3cgb2YgdGhpcy5yb3dzKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZyb3cucmVtb3ZlQ2VsbHNBdFN0YXJ0KCBheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0KTtcclxuXHRcdFx0XHRcdHZyb3cucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYFJlbW92ZWQgJHtheGlzQWN0aW9uLmNvdW50VG9SZW1vdmVBdFN0YXJ0fSBjb2xzIGZyb20gbGVmdGApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYXhpc0FjdGlvbi5jb3VudFRvQWRkQXRFbmQgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgaSA9IHRoaXMuZmlyc3RSb3c7IGkgPD0gdGhpcy5sYXN0Um93OyBpKyspXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHZyb3cgPSB0aGlzLnJvd3NbaSAtIHRoaXMuZmlyc3RSb3ddO1xyXG5cdFx0XHRcdFx0Zm9yKCBsZXQgaiA9IHRoaXMubGFzdENvbCArIDE7IGogPD0gYXhpc0FjdGlvbi5uZXdMYXN0OyBqKyspXHJcblx0XHRcdFx0XHRcdHZyb3cuYWRkQ2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0RW5kfSBjb2xzIHRvIHJpZ2h0YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChheGlzQWN0aW9uLmNvdW50VG9BZGRBdFN0YXJ0ID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0Um93OyBpIDw9IHRoaXMubGFzdFJvdzsgaSsrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCB2cm93ID0gdGhpcy5yb3dzW2kgLSB0aGlzLmZpcnN0Um93XTtcclxuXHRcdFx0XHRcdGZvciggbGV0IGogPSB0aGlzLmZpcnN0Q29sIC0gMTsgaiA+PSBheGlzQWN0aW9uLm5ld0ZpcnN0OyBqLS0pXHJcblx0XHRcdFx0XHRcdHZyb3cuaW5zZXJ0Q2VsbCggdGhpcy5wcm9wcy5nZXRDZWxsQ2FsbGJhY2soIGksIGopKTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0dnJvdy5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyggYEFkZCAke2F4aXNBY3Rpb24uY291bnRUb0FkZEF0U3RhcnR9IGNvbHMgdG8gbGVmdGApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maXJzdENvbCA9IGF4aXNBY3Rpb24ubmV3Rmlyc3Q7XHJcblx0XHR0aGlzLmxhc3RDb2wgPSBheGlzQWN0aW9uLm5ld0xhc3Q7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHByaXZhdGUgb25TY3JvbGwgPSAoIGU6IEV2ZW50KTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMuc2l0ZS5zY2hlZHVsZUNhbGwoIHRoaXMubWVhc3VyZUFuZFVwZGF0ZSwgdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gc2V0VGltZW91dCggdGhpcy5tZWFzdXJlQW5kVXBkYXRlLCAwKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgVlJvdyBleHRlbmRzIG1pbS5Db21wb25lbnRcclxue1xyXG5cdGNlbGxzOiBWQ2VsbFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNlbGxzID0gW107XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkQ2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMucHVzaCggbmV3IFZDZWxsKCBkYXRhKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5zZXJ0Q2VsbCggZGF0YTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY2VsbHMuc3BsaWNlKCAwLCAwLCBuZXcgVkNlbGwoIGRhdGEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVBbGxDZWxscygpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRTdGFydCggY291bnQ6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNlbGxzLnNwbGljZSggMCwgY291bnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZUNlbGxzQXRFbmQoIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jZWxscy5zcGxpY2UoIHRoaXMuY2VsbHMubGVuZ3RoIC0gY291bnQsIGNvdW50KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1ZXN0VXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVwZGF0ZU1lKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8dHI+e3RoaXMuY2VsbHN9PC90cj47XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIFZDZWxsIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0ZGF0YTogVlRhYmxlQ2VsbERhdGE7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBkYXRhOiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImNvbnRlbnRcIiBpbiBkYXRhKVxyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmRhdGEgPSB7IGNvbnRlbnQ6IGRhdGEgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIDx0ZCBjbGFzcz17dGhpcy5kYXRhLmNsYXNzfSBzdHlsZT17dGhpcy5kYXRhLnN0eWxlfVxyXG5cdFx0XHRcdFx0cm93c3Bhbj17dGhpcy5kYXRhLnJvd1NwYW4gPyB0aGlzLmRhdGEucm93U3BhbiA6IHVuZGVmaW5lZH1cclxuXHRcdFx0XHRcdGNvbHNwYW49e3RoaXMuZGF0YS5jb2xTcGFuID8gdGhpcy5kYXRhLmNvbFNwYW4gOiB1bmRlZmluZWR9PlxyXG5cdFx0XHR7dGhpcy5kYXRhLmNvbnRlbnR9XHJcblx0XHQ8L3RkPlxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltYmxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbWltdXJsX187Il0sInNvdXJjZVJvb3QiOiIifQ==